#!/usr/bin/env python3
"""
多平台分片编排：把 249 种语言拆到多个托管平台，生成网关路由与 CI 矩阵

为什么必须拆：
  - 千万页静态化 = 215 GB / 构建 164 小时，单平台和单次构建都扛不住
  - 单平台免费请求额度也不足以承担全部长尾语言的渲染
  - 改一行模板要等十几个小时，更新速度无法接受

分层的核心决定：
  静态层只放 en / zh（canonical 与原生中文）。这两种语言流量最大、最不该
  依赖函数冷启动，也最需要稳定。千万页时连它们都要各占一个 GitHub Pages
  项目（每语言约 0.88 GB，接近 1 GB 上限）。
  其余 247 种语言的聚合页 + 详情页全部由边缘函数按需渲染——新增一条 release
  只更新数据，不重建任何静态页面，这是"更新慢"的真正解法。

分片维度选「语言前缀」：
  - 语言之间零依赖 → 并行构建、独立部署、单独回滚
  - URL 前缀天然是路由边界 → 网关按首段分发
  - 新增语言只是加一个分片，不动其他分片

产物（deploy/ 下）：
  hosting-shards.json   语言 → 平台 映射、配额占用、构建与翻译成本
  gateway-routes.json   边缘网关路由表：URL 前缀 → origin
  ci-matrix.json        GitHub Actions matrix，每分片一个并行 job

用法：
  python shard_plan.py
  python shard_plan.py --releases 40000 --pv 0.3 --cache-hit 0.97
  python shard_plan.py --locales ja,ko,de --check
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
LANGS = HERE / "languages.json"
OUT_DIR = REPO / "deploy"

AGG_PAGES_PER_LOCALE = 224      # 首页 / 列表 / 项目页 / RSS
STATIC_DETAIL_LOCALES = ["en", "zh"]
TRANSLATE_RPS = 14.0            # 实测 8 并发 14 块/秒

# 静态层：每种语言一个 Project。千万页规模下 0.88 GB/语言，1 GB 配额只够放一个。
STATIC_POOL = [
    {"id": "static-en", "platform": "github-pages", "quota_gb": 1.0,
     "origin": "ktyhub.github.io", "locales": ["en"]},
    {"id": "static-zh", "platform": "github-pages", "quota_gb": 1.0,
     "origin": "stags-zh.github.io", "locales": ["zh"]},
]

# 边缘渲染平台池（免费额度，2026-11-14 逐项核对官方定价页）
#
# 只保留真正能扛住按需渲染的平台。上一版把 Deno Deploy 和 Netlify 也算进来了，
# 两项都已失效：
#   - Deno Deploy：2026-10-09 Deno 官方宣布团队并入 Cloudflare，Deploy 再运营
#     约六个月后关停，新项目已无意义
#   - Netlify Free：改成 300 credits/月硬上限（1 次生产部署 15 credits、
#     1 GB 带宽 20 credits、1 万请求 2 credits），折合约 15 GB 带宽或 150 万请求，
#     且"一个项目超限全账号暂停"。它连 HTML 带宽都撑不住，不能做渲染层。
# 另外 Google Cloud Run 虽然 200 万请求/月免费，但每月只含 1 GB 出网，
# 按每页 30 KB 算只够 3.4 万页，同样排除。
RENDER_POOL = [
    {"id": "edge-cf", "platform": "cloudflare-workers", "quota_month": 3_000_000,
     "origin": "stags-edge-cf.workers.dev",
     "note": "10 万请求/天；静态资源请求不计入额度，只有 Worker 调用计数"},
    {"id": "edge-vercel", "platform": "vercel-edge", "quota_month": 1_000_000,
     "origin": "stags-edge-vercel.vercel.app",
     "note": "Hobby 限非商业用途；超额是暂停而非计费"},
]

# 流量权重：Tier 1 访问量远高于 Tier 4。分配要按权重均衡，
# 否则小语种扎堆会把某个平台的免费额度打满。
TIER_WEIGHT = {1: 10.0, 2: 3.0, 3: 1.0, 4: 0.3}

# 区域变体与旧语言码归一化。
# 翻译服务的目标语言表里同时存在 zh、zh-CN、pt、pt-PT、fr、fr-CA，
# 直接当独立语言会生成 /zh-CN/ 和 /zh/ 两套内容近似重复的页面，SEO 上是自伤。
# 保留有实质差异的（zh-TW 繁体），合并只是区域变体的。
LOCALE_ALIAS = {
    "zh-cn": "zh",
    "pt-pt": "pt",
    "fr-ca": "fr",
    "en-gb": "en",
    "en-us": "en",
    "es-419": "es",
    "iw": "he",   # 希伯来语旧代码
    "in": "id",   # 印尼语旧代码
    "jw": "jv",   # 爪哇语旧代码
    "mo": "ro",   # 摩尔多瓦语
}


def all_locales(reg: dict) -> dict[str, int]:
    """code → tier。languages 字段是完整表（250 条），tiers 只展开了前三层。"""
    out: dict[str, int] = {}
    for code, v in reg["languages"].items():
        key = LOCALE_ALIAS.get(code.lower(), code)
        tier = int(v.get("tier", 4))
        # 归一化后撞车的取更靠前的 tier（tier 数字越小越重要）
        out[key] = min(out.get(key, tier), tier)
    return out


def plan(reg: dict, only: list[str] | None, releases: int, pv: float, cache_hit: float) -> dict:
    tiers = all_locales(reg)
    codes = [c for c in tiers if not only or c in only]

    static_codes = [c for c in STATIC_DETAIL_LOCALES if c in codes]
    edge_codes = [c for c in codes if c not in static_codes]
    edge_codes.sort(key=lambda c: (-TIER_WEIGHT.get(tiers[c], 1.0), c))

    # ---- 静态层：详情页 + 聚合页
    statics = []
    for p in STATIC_POOL:
        locs = [c for c in p["locales"] if c in static_codes]
        if not locs:
            continue
        pages = len(locs) * (releases + AGG_PAGES_PER_LOCALE)
        gb = pages * 0.022 / 1024
        statics.append({
            "shard": p["id"],
            "platform": p["platform"],
            "origin": p["origin"],
            "locales": locs,
            "pages": pages,
            "est_gb": round(gb, 2),
            "quota_gb": p["quota_gb"],
            "quota_pct": round(gb / p["quota_gb"] * 100, 1),
            # 静态构建按 0.0577 秒/页（313 秒 / 5427 页）换算成分钟
            "build_minutes": round(pages * 0.0577 / 60),
        })
    # 不在 STATIC_POOL 里的静态语言（理论上没有）回落到边缘，避免漏页
    covered = {c for s in statics for c in s["locales"]}
    edge_codes = [c for c in codes if c not in covered]

    # ---- 边缘层：按 tier 权重做 LPT 负载均衡
    total_weight = sum(TIER_WEIGHT.get(tiers[c], 1.0) for c in edge_codes) or 1.0
    edge_pages_total = len(edge_codes) * (releases + AGG_PAGES_PER_LOCALE)
    monthly_views = edge_pages_total * pv
    origin_req_total = monthly_views * (1 - cache_hit)

    load = {p["id"]: 0.0 for p in RENDER_POOL}
    buckets: dict[str, list[str]] = {p["id"]: [] for p in RENDER_POOL}
    for c in edge_codes:
        w = TIER_WEIGHT.get(tiers[c], 1.0)
        target = min(load, key=lambda k: load[k])
        buckets[target].append(c)
        load[target] += w

    edges = []
    for p in RENDER_POOL:
        locs = buckets[p["id"]]
        if not locs:
            continue
        w = sum(TIER_WEIGHT.get(tiers[c], 1.0) for c in locs)
        est = origin_req_total * (w / total_weight)
        edges.append({
            "shard": p["id"],
            "platform": p["platform"],
            "origin": p["origin"],
            "locales": locs,
            "locale_count": len(locs),
            "pages": len(locs) * (releases + AGG_PAGES_PER_LOCALE),
            "est_req_month": round(est),
            "quota_month": p["quota_month"],
            "quota_pct": round(est / p["quota_month"] * 100, 2),
            "build_minutes": 0,  # 边缘渲染不预渲染页面
            "note": p.get("note", ""),
        })

    # ---- 翻译成本：内容基数 × 语言数
    chunks = releases * len(edge_codes)   # 平均 1 块/篇（6.3 KB 原文 < 3,400 字符上限的 2 倍）
    translate_hours = chunks / TRANSLATE_RPS / 3600
    daily_new = 10
    daily_chunks = daily_new * len(edge_codes)

    # ---- 网关路由
    routes = {}
    for s in statics:
        for c in s["locales"]:
            routes["/" if c == "en" else f"/{c}/"] = s["origin"]
    for e in edges:
        for c in e["locales"]:
            routes[f"/{c}/"] = e["origin"]
    routes["/assets/"] = statics[0]["origin"] if statics else ""
    routes["/data/"] = statics[0]["origin"] if statics else ""

    over = [s["shard"] for s in statics + edges if (s.get("quota_pct") or 0) > 100]
    render_pool_total = sum(p["quota_month"] for p in RENDER_POOL)

    return {
        "_meta": {
            "generatedBy": "shard_plan.py",
            "totalLocales": len(codes),
            "releases": releases,
            "pagesTotal": sum(s["pages"] for s in statics) + edge_pages_total,
            "staticPages": sum(s["pages"] for s in statics),
            "edgePages": edge_pages_total,
            "pageViewAssumption": pv,
            "cacheHitRate": cache_hit,
            "note": "est_req_month 按 tier 流量权重估算，用于判断配额是否够用，不是精确预测",
        },
        "gateway": {
            "platform": "cloudflare-workers",
            "domain": "www.stags.cn",
            "rule": "按 URL 首段查 routes 转发到对应 origin；/ 与 /assets/ 走静态层",
            "cache": "Cache Rule 让 HTML 在 CDN 层直接命中，命中不进 Worker、不消耗请求额度",
        },
        "static": statics,
        "edge": edges,
        "routes": routes,
        "capacity": {
            "render_pool_month": render_pool_total,
            "origin_requests_month": round(origin_req_total),
            "quota_pct": round(origin_req_total / render_pool_total * 100, 2),
        },
        "translation": {
            "edge_locales": len(edge_codes),
            "chunks_total": chunks,
            "hours_oneoff": round(translate_hours, 1),
            "daily_chunks": daily_chunks,
            "daily_minutes": round(daily_chunks / TRANSLATE_RPS / 60, 1),
        },
        "overQuota": over,
    }


def ci_matrix(p: dict) -> dict:
    include = []
    for s in p["static"]:
        include.append({
            "shard": s["shard"], "platform": s["platform"],
            "locales": ",".join(s["locales"]), "target": "static",
            "build_minutes": s["build_minutes"],
        })
    for e in p["edge"]:
        include.append({
            "shard": e["shard"], "platform": e["platform"],
            "locales": ",".join(e["locales"]), "target": "edge",
            "build_minutes": 0,
        })
    return {"include": include}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--locales", help="逗号分隔，只规划这些语言")
    ap.add_argument("--releases", type=int, default=40000, help="内容基数（条）")
    ap.add_argument("--pv", type=float, default=0.3)
    ap.add_argument("--cache-hit", type=float, default=0.97)
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    reg = json.loads(LANGS.read_text(encoding="utf-8"))
    only = [s.strip() for s in args.locales.split(",")] if args.locales else None
    p = plan(reg, only, args.releases, args.pv, args.cache_hit)
    m = ci_matrix(p)

    if args.json:
        print(json.dumps({"plan": p, "ci": m}, ensure_ascii=False, indent=2))
        return

    meta = p["_meta"]
    print(f"{meta['totalLocales']} 种语言 × {args.releases:,} 条 release → {meta['pagesTotal']:,} 页")
    print(f"  静态 {meta['staticPages']:,} 页 / 边缘 {meta['edgePages']:,} 页\n")

    print("静态层（预渲染，详情页 + 聚合页）")
    for s in p["static"]:
        flag = "⚠️" if s["quota_pct"] > 100 else "✅"
        print(f"  {s['shard']:11s} {s['platform']:15s} {','.join(s['locales']):4s} "
              f"{s['pages']:>7,} 页 {s['est_gb']:>5} GB/{s['quota_gb']} GB "
              f"（{s['quota_pct']:>5}%）构建 {s['build_minutes']:>4} 分钟 {flag}")

    print("\n边缘层（按需渲染，不预渲染）")
    for e in p["edge"]:
        print(f"  {e['shard']:11s} {e['platform']:18s} {e['locale_count']:>3} 语言 "
              f"{e['pages']:>9,} 页  估算 {e['est_req_month']:>8,}/月 "
              f"（额度 {e['quota_month']:,}，{e['quota_pct']}%）")

    cap = p["capacity"]
    print(f"\n渲染池合计 {cap['render_pool_month']:,}/月，预计用 {cap['origin_requests_month']:,}"
          f"（{cap['quota_pct']}%）")

    t = p["translation"]
    print(f"\n翻译：{t['edge_locales']} 语言 × {args.releases:,} 条 = {t['chunks_total']:,} 块")
    print(f"  一次性 {t['hours_oneoff']} 小时；日常每天 {t['daily_chunks']:,} 块 ≈ {t['daily_minutes']} 分钟")

    if p["overQuota"]:
        print(f"\n⚠️ 超额分片: {', '.join(p['overQuota'])}")

    print(f"\n网关路由 {len(p['routes'])} 条，CI 并行 job {len(m['include'])} 个")
    if args.check:
        return

    if not OUT_DIR.exists():
        OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "hosting-shards.json").write_text(json.dumps(p, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DIR / "gateway-routes.json").write_text(json.dumps(p["routes"], ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DIR / "ci-matrix.json").write_text(json.dumps(m, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"已写入 {OUT_DIR}/")


if __name__ == "__main__":
    main()
