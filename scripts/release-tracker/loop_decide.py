#!/usr/bin/env python3
"""
决策层：把「现状 + 数据」变成一组带证据的变更提案。

设计上的三条硬约束，都是为了不让它在无人值守时慢慢跑偏：

1. **每个提案必须带证据**。没有数字支撑的直觉不出提案。理由很简单：
   如果一条规则说不出「依据是哪个窗口、多少展示、多少点击」，那它在
   失败之后就无法复盘，也就永远不会被淘汰。

2. **动作空间是封闭的**。它只能改白名单里的几样东西（闸门状态、专题顺序、
   置顶对比、内链屏蔽、采集优先级）。它不能改页面代码、不能改文案正文、
   不能自己开新语言——这些的失败模式是不可逆的。

3. **有数据的门槛**。站点刚上线、只有 12 个展示的时候，任何「CTR 低」
   都是噪声，据此调整只会浪费动作额度，还会污染规则命中率统计。

宁可这次少做，也不要做出一个测不出效果的改动。
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from loop_common import (  # noqa: E402
    CONFIG, DATA, GATE, LOOP_STATE, ROOT, SITE,
    cooldown_active, family_metrics, load_ledger, load_snapshot,
    page_metrics, read_json, rule_stats, today, utcnow, write_json,
)

# 触发阈值集中在这里。改参数就是改策略，必须能一眼看全，
# 而不是散落在十几个 if 里。
T = {
    # 流量门槛：低于这个量级不做流量类判断
    "min_impressions": 200,
    "min_pages": 20,
    # 标题问题：展示够多、排名不差，但没什么人点 → 是标题/描述的事
    "retitle_min_imp": 300,
    "retitle_max_ctr": 0.015,
    "retitle_max_pos": 25.0,
    # 值得置顶的对比页
    "feature_min_imp": 50,
    "feature_min_ctr": 0.04,
    # 判死：已索引但窗口内零展示
    "suppress_min_age_days": 35,
    # 触达第二页的专题页值得扩充（临门一脚）
    "deepen_pos": (11.0, 20.0),
    "deepen_min_imp": 100,
    # 语言覆盖率红线
    "locale_min_coverage": 0.30,
    "locale_judge_days": 21,
    # 每轮最多自动执行的条数
    "max_actions": 3,
    "cooldown_days": 30,
    "cooldown_days_ctr": 42,   # CTR 类需要更长的观测窗
}


# ---------------------------------------------------------------- 现状读取


def sitemap_urls() -> list[str]:
    """
    全部已发布 URL。优先 sitemap，缺失时回落到扫 dist 的 index.html。

    为什么要回落：sitemap 由 @astrojs/sitemap 在 build:done 阶段生成，
    某些环境下（比如本地被 safe-delete 拦掉空目录清理）这一步会静默不产出，
    但页面本身是好的。此时如果直接返回空，闭环会以为「站点没有页面」，
    判死规则整段失效——这种静默降级比报错更危险。
    """
    dist = SITE / "dist"
    files = sorted(dist.glob("sitemap-*.xml")) or sorted(dist.glob("sitemap*.xml"))
    if not files:
        out: list[str] = []
        for f in dist.glob("**/index.html"):
            rel = f.parent.relative_to(dist).as_posix()
            if rel.startswith("_"):
                continue
            out.append(f"https://www.stags.cn/{'' if rel == '.' else rel + '/'}")
        return out
    from xml.etree import ElementTree
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls: list[str] = []
    for f in files:
        try:
            root = ElementTree.parse(f).getroot()
        except ElementTree.ParseError:
            continue
        for loc in root.findall(".//sm:url/sm:loc", ns):
            urls.append(loc.text.strip())
    return urls


def repo_index() -> dict[str, str]:
    """
    项目 slug → owner/repo。

    decide 拿到的是页面路径（/releases/langchain/），而采集配置要的是仓库全名
    （langchain-ai/langchain）。中间这一层映射只能从 release frontmatter 的
    repo 字段读——不要在 Python 里重写一遍 slugify 规则，两边一旦不同步，
    写进 scan.hot 的名字就是假的，采集器会静默跳过它。
    """
    idx: dict[str, str] = {}
    docs = ROOT / "docs" / "release_note"
    if not docs.exists():
        return idx
    repo_re = re.compile(r'^repo:\s*"?([^"\n]+)"?\s*$', re.M)
    for d in docs.iterdir():
        if not d.is_dir():
            continue
        for md in sorted(d.glob("*.md"))[:1]:
            try:
                head = md.read_text(encoding="utf-8", errors="replace")[:800]
            except OSError:
                continue
            m = repo_re.search(head)
            if m:
                repo = m.group(1).strip()
                idx[d.name.lower()] = repo
                idx[re.sub(r"[^a-z0-9]+", "-", d.name.lower()).strip("-")] = repo
    return idx


def translation_coverage() -> dict[str, float]:
    """
    各语言摘要翻译覆盖率。分母是英文 release 总数。

    这是判断「闸门开得对不对」唯一不依赖外部数据的依据——一个开了闸门
    但覆盖率 5% 的语言，生成出来的就是几千个外壳是外语、内容是英文的页面，
    正好踩在 scaled content abuse 的定义上。
    """
    docs = ROOT / "docs" / "release_note"
    total = sum(1 for d in docs.iterdir() if d.is_dir() for _ in d.glob("*.md")) if docs.exists() else 0
    cache = read_json(SITE / "src" / "data" / "summaries.json", {}) or {}
    out: dict[str, float] = {"en": 1.0, "zh": 0.0}
    zh_dir = ROOT / "docs" / "zh" / "release_note"
    if zh_dir.exists():
        zh = sum(1 for d in zh_dir.iterdir() if d.is_dir() for _ in d.glob("*.md"))
        # 中文是原生语料不是翻译，覆盖率的语义和其他语言不同，上限取 1
        out["zh"] = min(zh / total, 1.0) if total else 0.0
    for loc, table in cache.items():
        if isinstance(table, dict):
            out[loc] = min(len(table) / total, 1.0) if total else 0.0
    return out


def locale_impressions(pages: dict[str, dict], gate: dict) -> dict[str, int]:
    known = list((gate.get("locales") or {}).keys())
    out: dict[str, int] = {loc: 0 for loc in known}
    for path, m in pages.items():
        seg = path.strip("/").split("/")
        loc = seg[0] if seg and seg[0] in known else "en"
        out[loc] = out.get(loc, 0) + int(m.get("impressions", 0))
    return out


# ---------------------------------------------------------------- 提案构造


def prop(rule: str, target: str, action: dict, evidence: dict, hypothesis: str, metric: dict) -> dict:
    return {
        "rule": rule,
        "target": target,
        "action": action,
        "evidence": evidence,
        "hypothesis": hypothesis,
        "metric": metric,
    }


def decide() -> tuple[list[dict], list[dict], dict]:
    snap = load_snapshot()
    pages = page_metrics(snap)
    ledger = load_ledger()
    stats = rule_stats(ledger)
    gate = read_json(GATE, {}) or {}
    cfg = read_json(CONFIG, {}) or {}
    known = list((gate.get("locales") or {}).keys())

    total_imp = sum(int(m.get("impressions", 0)) for m in pages.values())
    has_traffic = total_imp >= T["min_impressions"] and len(pages) >= T["min_pages"]
    fams = family_metrics(pages, known)
    coverage = translation_coverage()
    loc_imp = locale_impressions(pages, gate)
    urls = sitemap_urls()

    ctx = {
        "snapshot": snap.get("_meta", {}),
        "total_impressions": total_imp,
        "pages_with_data": len(pages),
        "has_traffic": has_traffic,
        "sitemap_urls": len(urls),
        "families": {k: {"clicks": v["clicks"], "impressions": v["impressions"],
                         "ctr": round(v["ctr"], 4), "position": round(v["position"], 1), "pages": v["pages"]}
                     for k, v in sorted(fams.items())},
        "coverage": {k: round(v, 3) for k, v in sorted(coverage.items())},
        "rule_stats": stats,
        "thresholds": T,
    }

    actions: list[dict] = []
    advisories: list[dict] = []

    def cooled(target: str, days: int = None) -> bool:
        return cooldown_active(ledger, target, days or T["cooldown_days"]) is not None

    # ---- R1 闸门：开了但内容是空的，或者开了很久一点展示都没有
    for loc, entry in (gate.get("locales") or {}).items():
        if (entry.get("status") or gate.get("default")) != "index":
            continue
        if loc in ("en", "zh"):
            continue
        cov = coverage.get(loc, 0.0)
        opened = entry.get("since") or ""
        try:
            age = (date.today() - datetime.strptime(opened, "%Y-%m-%d").date()).days
        except ValueError:
            age = 0
        hollow = cov < T["locale_min_coverage"]
        starved = age >= T["locale_judge_days"] and has_traffic and loc_imp.get(loc, 0) == 0
        if not (hollow or starved):
            continue
        if cooled(f"gate:{loc}"):
            continue
        reason = (
            f"翻译覆盖率 {cov:.0%} 低于 {T['locale_min_coverage']:.0%}，生成的页面外壳是 {loc}、内容是英文"
            if hollow else
            f"开闸 {age} 天、全站已有 {total_imp} 次展示，{loc} 仍为 0 次展示"
        )
        actions.append(prop(
            "DEMOTE_EMPTY_LOCALE", f"gate:{loc}",
            {"kind": "gate", "locale": loc, "status": "noindex", "note": reason},
            {"coverage": round(cov, 3), "opened": opened, "age_days": age,
             "locale_impressions": loc_imp.get(loc, 0), "site_impressions": total_imp},
            f"{loc} 目前对搜索引擎是纯负担：{reason}。先关闸门停止提交，等内容补齐再放量。",
            # 关闸门不应带来任何损失——本来就没有展示
            {"kind": "no_regression", "family": "release", "window_days": 28},
        ))

    # ---- R3 标题：展示不少、排名进得去，但点击率明显低于基线
    if has_traffic:
        for fam in ("compare", "topics-index", "release"):
            f = fams.get(fam)
            if not f or f["impressions"] < T["retitle_min_imp"]:
                continue
            if f["ctr"] >= T["retitle_max_ctr"] or f["position"] > T["retitle_max_pos"]:
                continue
            if cooled(f"title:{fam}", T["cooldown_days_ctr"]):
                continue
            actions.append(prop(
                "RETITLE_FAMILY", f"title:{fam}",
                {"kind": "title_variant", "family": fam},
                {"family": fam, "impressions": f["impressions"], "clicks": f["clicks"],
                 "ctr": round(f["ctr"], 4), "position": round(f["position"], 1)},
                f"{fam} 族拿到 {f['impressions']} 次展示、平均排名 {f['position']:.0f}，"
                f"但点击率只有 {f['ctr']:.1%}——排名已经进得去，问题在标题和摘要的说服力，不在内容质量。",
                {"kind": "family_ctr", "family": fam, "window_days": 42, "min_effect": 0.10},
            ))

    # ---- R4 置顶有点击的对比页
    if has_traffic:
        best = sorted(
            (p for p, m in pages.items()
             if m.get("family") == "compare"
             and int(m.get("impressions", 0)) >= T["feature_min_imp"]
             and (int(m.get("clicks", 0)) / max(int(m.get("impressions", 1)), 1)) >= T["feature_min_ctr"]),
            key=lambda p: int(pages[p].get("clicks", 0)), reverse=True,
        )[:4]
        state = read_json(LOOP_STATE, {}) or {}
        current = state.get("compareFeatured") or []
        fresh = [p.strip("/").split("/")[-1] for p in best if p.strip("/").split("/")[-1] not in current]
        if fresh and not cooled("compareFeatured"):
            actions.append(prop(
                "FEATURE_PAIR", "compareFeatured",
                {"kind": "feature_pairs", "pairs": fresh},
                {"promoted": {p: pages[p] for p in best}, "current": current},
                f"这 {len(fresh)} 组对比页已经在真实搜索里拿到点击，说明「A vs B」这个查询形态对本站有效。"
                "把它们放到对比索引页顶部，让权重向已验证有效的组合集中。",
                {"kind": "family_clicks", "family": "compare", "window_days": 28, "min_effect": 0.10},
            ))

    # ---- R5 判死：已索引但窗口内零展示的对比页
    if has_traffic and urls:
        gate_meta = (gate.get("_meta") or {}).get("updated", "")
        try:
            gate_age = (date.today() - datetime.strptime(gate_meta, "%Y-%m-%d").date()).days
        except ValueError:
            gate_age = 0
        if gate_age >= T["suppress_min_age_days"]:
            state = read_json(LOOP_STATE, {}) or {}
            suppressed = set(state.get("suppressPairs") or [])
            seen = {p.strip("/").split("/")[-1] for p in pages}
            dead = [
                u.rstrip("/").split("/")[-1]
                for u in urls
                if "/compare/" in u and u.rstrip("/").split("/")[-1] not in seen
                and u.rstrip("/").split("/")[-1] not in ("compare",)
            ]
            dead = [d for d in dead if d not in suppressed][:8]
            if dead and not cooled("suppressPairs"):
                actions.append(prop(
                    "SUPPRESS_PAIR", "suppressPairs",
                    {"kind": "suppress_pairs", "pairs": dead},
                    {"zero_impression": len(dead), "sitemap_pages": len(urls),
                     "compare_indexed": sum(1 for u in urls if "/compare/" in u),
                     "observed_days": gate_age},
                    f"这 {len(dead)} 组对比在 {gate_age} 天里一次展示都没有——不是排名低，是没人搜这个组合。"
                    "从内链里撤掉（URL 保留可达），把抓取预算让给有点击的页面。",
                    {"kind": "no_regression", "family": "compare", "window_days": 28},
                ))

    # ---- R6 专题排序：按真实点击重排，而不是按发布频率
    if has_traffic and urls:
        topic_clicks: dict[str, int] = {}
        for path, m in pages.items():
            if m.get("family") != "topics":
                continue
            slug = path.strip("/").split("/")[-1]
            topic_clicks[slug] = topic_clicks.get(slug, 0) + int(m.get("clicks", 0))
        if sum(topic_clicks.values()) >= 3 and not cooled("topicOrder"):
            actions.append(prop(
                "REORDER_TOPICS", "topicOrder",
                {"kind": "reorder_topics", "by": topic_clicks},
                {"topic_clicks": topic_clicks},
                "专题索引页当前按发布活跃度排序。真实点击分布不同，说明用户关心的是另一批品类——"
                "把有点击的提到前面，让首屏对得上搜索意图。",
                {"kind": "family_clicks", "family": "topics", "window_days": 28, "min_effect": 0.10},
            ))

    # ---- R7 采集优先级：有点击的项目加深采集，长期无点击的移出热扫
    if has_traffic:
        proj_clicks: dict[str, int] = {}
        for path, m in pages.items():
            if m.get("family") != "project":
                continue
            proj_clicks[path.strip("/").split("/")[-1]] = int(m.get("clicks", 0))
        hot = list((cfg.get("scan") or {}).get("hot") or [])
        repos = repo_index()
        hot_lower = {h.lower() for h in hot}
        winners = [
            repos[k] for k, v in sorted(proj_clicks.items(), key=lambda x: -x[1])
            if v >= 3 and k in repos and repos[k].lower() not in hot_lower
        ][:3]
        if winners and not cooled("scan.hot"):
            actions.append(prop(
                "SCAN_PRIORITY", "scan.hot",
                {"kind": "scan_hot", "add": winners},
                {"project_clicks": proj_clicks, "hot_size": len(hot)},
                f"这些项目页（{', '.join(winners[:3])}）有真实搜索点击，说明有人在等它们的新版本。"
                "把它们的采集优先级提到热扫，新版本出现当天就能出页面。",
                {"kind": "family_clicks", "family": "project", "window_days": 28, "min_effect": 0.10},
            ))

    # ---- 只建议、不自动做的（需要人判断的决策）
    for loc, cov in sorted(coverage.items()):
        entry = (gate.get("locales") or {}).get(loc)
        if entry and (entry.get("status") or "noindex") == "index":
            continue
        if cov >= 0.60:
            advisories.append({
                "rule": "OPEN_LOCALE", "target": f"gate:{loc}",
                "evidence": {"coverage": round(cov, 3)},
                "hypothesis": f"{loc} 摘要覆盖已达 {cov:.0%}，可以进下一批放量。开闸门是对域名的不可逆承诺，"
                              "必须人工确认后再改 index-gate.json。",
            })
    if has_traffic:
        for fam, f in fams.items():
            if f["impressions"] >= T["deepen_min_imp"] and T["deepen_pos"][0] <= f["position"] <= T["deepen_pos"][1]:
                advisories.append({
                    "rule": "DEEPEN_FAMILY", "target": f"family:{fam}",
                    "evidence": {"impressions": f["impressions"], "position": round(f["position"], 1), "pages": f["pages"]},
                    "hypothesis": f"{fam} 族平均排名 {f['position']:.0f}，卡在第二页。"
                                  "补内链和聚合内容最容易把这一批推进第一页，但要人挑补充哪些项目。",
                })

    # ---- 规则降权：历史上总在输的规则不再占动作额度
    for rule, s in stats.items():
        if s.get("hit_rate") is not None and s["hit_rate"] < 0.34 and s["lose"] >= 3:
            actions = [a for a in actions if a["rule"] != rule]
            advisories.append({
                "rule": "RULE_DISABLED", "target": rule,
                "evidence": s,
                "hypothesis": f"{rule} 已执行 {s['applied']} 次，赢 {s['win']} 输 {s['lose']}，"
                              "命中率低于三分之一。本轮起停止自动执行，等人工判断是阈值错了还是假设错了。",
            })

    # 按规则命中率排序：赢过的规则优先占用动作额度
    def score(p: dict) -> float:
        s = stats.get(p["rule"]) or {}
        return s.get("hit_rate") if s.get("hit_rate") is not None else 0.5

    actions.sort(key=score, reverse=True)
    actions = actions[: T["max_actions"]]
    return actions, advisories, ctx


def main() -> int:
    ap = argparse.ArgumentParser(description="生成变更提案")
    ap.add_argument("--out", default=str(DATA / "proposals.json"))
    ap.add_argument("--json", action="store_true", help="只输出 JSON，供上层编排")
    args = ap.parse_args()

    actions, advisories, ctx = decide()
    write_json(Path(args.out), {"generated": today(), "context": ctx,
                                "actions": actions, "advisories": advisories})

    if args.json:
        print(json.dumps({"actions": actions, "advisories": advisories, "context": ctx},
                         ensure_ascii=False))
        return 0

    c = ctx
    print(f"数据窗口：{c['snapshot'].get('captured', '无')}  "
          f"页面 {c['pages_with_data']} 展示 {c['total_impressions']}  "
          f"流量门槛{'已过' if c['has_traffic'] else '未过'}")
    if not c["has_traffic"]:
        print("  → 数据量不足，本轮只做覆盖率类判断，不做点击率判断（噪声会做出错误动作）")

    if actions:
        print(f"\n自动执行 {len(actions)} 项：")
        for a in actions:
            print(f"  [{a['rule']}] {a['target']}")
            print(f"    {a['hypothesis']}")
    else:
        print("\n本轮无自动变更。")

    if advisories:
        print(f"\n需人工决策 {len(advisories)} 项：")
        for a in advisories:
            print(f"  [{a['rule']}] {a['target']} — {a['hypothesis'][:90]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
