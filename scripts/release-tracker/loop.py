#!/usr/bin/env python3
"""
闭环编排：采集 → 判定 → 执行 → 结算 → 复盘。

一次运行做四件事，顺序不能换：

  1. **结算**（先做）——把观察窗已到期的历史变更判出输赢。
     必须先于 decide：decide 用规则命中率来决定「哪些规则还值得信任」，
     如果先决定再结算，这一轮用的一定是上一轮之前的命中率。
  2. **采集** —— 拿最新搜索数据。拿不到就跳过，不阻断后面（覆盖率类
     规则不需要外部数据）。
  3. **判定 + 执行** —— 产出提案，边界内落盘，记账。
  4. **复盘** —— 输出一份人能读的报告：这轮改了什么、赌的是什么、
     历史规则命中率如何。

自进化体现在第 1 步和第 3 步的耦合：失败率超过三分之二的规则会被自动
停用，赢过的规则优先占用每轮动作额度。系统不会变聪明，但它会**收敛到
在这个站点上真的有效的策略集**——这比「模型自己改代码」可靠得多，而且
每一步都有账可查、可回滚。
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from loop_common import (  # noqa: E402
    DATA, GATE, LEDGER, LOOP_STATE, ROOT, family_metrics, load_ledger,
    load_snapshot, page_metrics, read_json, rewrite_ledger, rule_stats, today, utcnow,
)

_MIN_WIN_CLICKS = 3   # 点击太少的「增长」不算赢，是噪声


def _family_now(snap: dict, fam: str) -> tuple[float, float]:
    gate = read_json(GATE, {}) or {}
    known = list((gate.get("locales") or {}).keys())
    fams = family_metrics(page_metrics(snap), known)
    f = fams.get(fam) or {}
    return float(f.get("clicks", 0.0)), float(f.get("ctr", 0.0))


def settle(dry_run: bool = False) -> tuple[int, int]:
    """结算到期实验。返回 (win, lose)。"""
    rows = load_ledger()
    snap = load_snapshot()
    if not snap:
        print("[loop] 没有搜索快照，无法结算（先跑 seo_telemetry.py）")
        return 0, 0

    today_d = date.today()
    win = lose = 0
    changed = False

    for r in rows:
        if r.get("verdict") != "pending":
            continue
        try:
            end = datetime.strptime(r["window_end"], "%Y-%m-%d").date()
        except (KeyError, ValueError):
            continue
        if end > today_d:
            continue

        m = r.get("metric") or {}
        kind = m.get("kind")
        fam = m.get("family")
        # baseline 在账本里是 {family, value} 结构（含着 family 便于人工核对），
        # 早期版本可能写成标量，两种都要能吃
        raw = r.get("baseline")
        base = float(raw.get("value", 0.0) if isinstance(raw, dict) else (raw or 0.0))
        cur_clicks, cur_ctr = _family_now(snap, fam)
        min_effect = float(m.get("min_effect", 0.10))

        if kind == "family_ctr":
            # CTR 用相对变化判断；基线为 0 时无从比较
            if base <= 0:
                verdict, note = "inconclusive", "基线 CTR 为 0，无法比较"
            elif cur_ctr >= base * (1 + min_effect):
                verdict, note = "win", f"CTR {base:.2%} → {cur_ctr:.2%}（+{(cur_ctr/base-1):.0%}）"
            elif cur_ctr <= base * (1 - min_effect):
                verdict, note = "lose", f"CTR {base:.2%} → {cur_ctr:.2%}（{(cur_ctr/base-1):.0%}）"
            else:
                verdict, note = "inconclusive", f"CTR {base:.2%} → {cur_ctr:.2%}，变化在噪声内"
        elif kind == "no_regression":
            if cur_clicks >= base * 0.95:
                verdict, note = "win", f"{fam} 点击 {base:.0f} → {cur_clicks:.0f}，未出现损失"
            else:
                verdict, note = "lose", f"{fam} 点击 {base:.0f} → {cur_clicks:.0f}，出现下滑，应回滚"
        else:  # family_clicks
            if base < _MIN_WIN_CLICKS and cur_clicks < _MIN_WIN_CLICKS:
                verdict, note = "inconclusive", f"样本太少（{base:.0f} → {cur_clicks:.0f} 次点击）"
            elif cur_clicks >= max(base * (1 + min_effect), _MIN_WIN_CLICKS):
                verdict, note = "win", f"{fam} 点击 {base:.0f} → {cur_clicks:.0f}"
            elif cur_clicks <= base * (1 - min_effect):
                verdict, note = "lose", f"{fam} 点击 {base:.0f} → {cur_clicks:.0f}"
            else:
                verdict, note = "inconclusive", f"{fam} 点击 {base:.0f} → {cur_clicks:.0f}，变化不足 {min_effect:.0%}"

        r["verdict"] = verdict
        r["verdict_at"] = utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
        r["verdict_note"] = note
        r["verdict_after"] = {"clicks": round(cur_clicks, 1), "ctr": round(cur_ctr, 4)}
        if verdict == "win":
            win += 1
        elif verdict == "lose":
            lose += 1
        changed = True
        print(f"  结算 {r['id']}: {verdict} — {note}")

    if changed and not dry_run:
        rewrite_ledger(rows)
    return win, lose


def run_telemetry() -> bool:
    script = Path(__file__).resolve().parent / "seo_telemetry.py"
    try:
        r = subprocess.run([sys.executable, str(script), "--source", "auto"],
                           capture_output=True, text=True, timeout=300)
    except subprocess.TimeoutExpired:
        print("[loop] 采集超时，本轮跳过外部数据")
        return False
    tail = (r.stdout or "").strip().splitlines()[-1:] + (r.stderr or "").strip().splitlines()[-1:]
    for line in tail:
        if line:
            print(f"  {line}")
    return r.returncode == 0


def report(actions: list, advisories: list, ctx: dict, win: int, lose: int) -> None:
    rows = load_ledger()
    stats = rule_stats(rows)
    pending = [r for r in rows if r.get("verdict") == "pending"]
    settled = [r for r in rows if r.get("verdict") in ("win", "lose", "inconclusive")]
    gate = read_json(GATE, {}) or {}
    state = read_json(LOOP_STATE, {}) or {}

    print("\n" + "=" * 62)
    print(f"SE0 闭环周报  {today()}   修订号 r{state.get('revision', 0)}")
    print("=" * 62)

    print(f"\n数据  快照 {ctx['snapshot'].get('captured', '—')}   "
          f"页面 {ctx['pages_with_data']}   展示 {ctx['total_impressions']:,}   "
          f"门槛{'已过' if ctx['has_traffic'] else '未过'}")
    if ctx["families"]:
        print("      族级：" + "  ".join(
            f"{k} {v['clicks']:.0f}/{v['impressions']:.0f}" for k, v in ctx["families"].items()))
    cov = ctx["coverage"]
    open_loc = [l for l, e in (gate.get("locales") or {}).items()
                if (e.get("status") or "noindex") == "index"]
    print(f"      闸门开：{', '.join(sorted(open_loc)) or '无'}")
    print("      覆盖率：" + "  ".join(f"{k} {v:.0%}" for k, v in cov.items() if k != "en"))

    print(f"\n本轮变更 {len(actions)} 项")
    for a in actions:
        print(f"  [{a['rule']}] {a['target']}")
        print(f"      赌的是：{a['hypothesis']}")
        print(f"      判据：{a['metric']['kind']} / {a['metric']['family']} / "
              f"{a['metric']['window_days']}d / 门槛 {a['metric'].get('min_effect', 0)*100:.0f}%")
    if not actions:
        print("  无（要么数据不足，要么现状已经是最优）")

    if advisories:
        print(f"\n需要你拍板 {len(advisories)} 项")
        for a in advisories:
            print(f"  [{a['rule']}] {a['target']}")
            print(f"      {a['hypothesis']}")

    print(f"\n实验台账  待结算 {len(pending)}   已结算 {len(settled)}   "
          f"本轮新判 {win} 胜 {lose} 负")
    if stats:
        print("  规则命中率：")
        for rule, s in sorted(stats.items(), key=lambda kv: -(kv[1].get("hit_rate") or 0)):
            hr = s.get("hit_rate")
            tag = f"{hr:.0%}" if hr is not None else "样本不足"
            print(f"    {rule:22s} 执行{s['applied']:3d}  胜{s['win']:2d} 负{s['lose']:2d} "
                  f"待{s['pending']:2d}  {tag}")
    if drift := [r for r in settled if r.get("verdict") == "lose"]:
        print(f"\n  ⚠️ 有 {len(drift)} 条变更被判为负面，建议复查：")
        for r in drift[-3:]:
            print(f"    {r['id']} — {r.get('verdict_note', '')}")
            print(f"      回滚：python3 scripts/release-tracker/loop.py rollback {r['id']}")

    print(f"\n账本 {LEDGER.relative_to(ROOT)}   状态 {LOOP_STATE.relative_to(ROOT)}")
    print("=" * 62)


def main() -> int:
    ap = argparse.ArgumentParser(description="SE0 自进化闭环")
    ap.add_argument("--apply", action="store_true", help="真正写盘（默认只提案）")
    ap.add_argument("--no-telemetry", action="store_true", help="跳过外部数据采集")
    ap.add_argument("--rollback", default="", help="按账本 id 回滚")
    ap.add_argument("--status", action="store_true", help="只看台账与闸门状态")
    # 同时支持 `loop.py rollback <id>` 这种子命令写法，因为报告里印的是它
    ap.add_argument("cmd", nargs="?", choices=["rollback", "status", "run"], default="run")
    ap.add_argument("arg", nargs="?", default="")
    args = ap.parse_args()

    if args.cmd == "rollback" and args.arg:
        from loop_apply import rollback
        return rollback(args.arg)
    if args.cmd == "status":
        args.status = True

    if args.rollback:
        from loop_apply import rollback
        return rollback(args.rollback)

    if args.status:
        rows = load_ledger()
        gate = read_json(GATE, {}) or {}
        state = read_json(LOOP_STATE, {}) or {}
        print(f"修订号 r{state.get('revision', 0)}  更新 {state.get('updated', '—')}")
        print(f"闸门开：{[l for l,e in (gate.get('locales') or {}).items() if (e.get('status') or '')=='index']}")
        print(f"置顶对比 {len(state.get('compareFeatured') or [])}  屏蔽 {len(state.get('suppressPairs') or [])}")
        print(f"账本 {len(rows)} 条：" + json.dumps(
            {k: v for k, v in rule_stats(rows).items()}, ensure_ascii=False, indent=1))
        for r in rows[-5:]:
            print(f"  {r['ts'][:10]} {r['rule']:22s} {r['target']:28s} {r['verdict']}")
        return 0

    print(f"[loop] {utcnow().strftime('%Y-%m-%d %H:%MZ')} 开始")

    print("[loop] 1/4 结算到期实验")
    win, lose = settle()

    if not args.no_telemetry:
        print("[loop] 2/4 采集搜索表现")
        run_telemetry()

    print("[loop] 3/4 生成提案并执行")
    from loop_decide import decide
    actions, advisories, ctx = decide()

    applied = []
    if actions:
        from loop_apply import apply as do_apply
        applied = do_apply(actions, dry_run=not args.apply)

    print("[loop] 4/4 复盘")
    report(actions, advisories, ctx, win, lose)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
