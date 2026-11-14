#!/usr/bin/env python3
"""
千万级页面的真实账本（只读，不产生费用）

用户目标：百万级的版本内容 × 全球语言 = 千万级网页。

这个脚本回答三个问题：
  1. 千万页需要多少内容基数（现在差多远）
  2. 单平台为什么不可能，多平台合计够不够
  3. 静态 / 边缘渲染分别要在哪一层分摊

关键结论（跑一下就能看到）：
  - 千万页 = 249 语言 × 4 万条 release，而当前只有 43 个仓库 / 3180 条
  - 静态托管：一个语言就要 0.9 GB，249 个语言 = 224 GB，任何免费平台组合都装不下
  - 边缘渲染：真正的成本是请求数，多平台免费额度合计约 500 万请求/月

用法：
  python plan_scale.py
  python plan_scale.py --releases 40000 --langs 249 --pv 0.3 --cache-hit 0.97
  python plan_scale.py --json
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
SITE = REPO / "site"


def measure() -> dict:
    en_docs = list((REPO / "docs" / "release_note").rglob("*.md"))
    en_bytes = sum(p.stat().st_size for p in en_docs)
    htmls = list((SITE / "dist").rglob("*.html")) if (SITE / "dist").exists() else []
    html_bytes = sum(p.stat().st_size for p in htmls)
    cfg = json.loads((HERE / "config.json").read_text(encoding="utf-8"))
    return {
        "repos_tracked": len(cfg.get("repos", [])),
        "releases": len(en_docs),
        "body_kb": round(en_bytes / max(1, len(en_docs)) / 1024, 1),
        "base_pages": len(htmls),
        "avg_page_kb": round(html_bytes / max(1, len(htmls)) / 1024, 1) if htmls else 22.0,
        "build_s_per_page": 313 / max(1, len(htmls)),
    }


# 免费额度（2026-11 公开文档）。multi-platform 合计才是关键。
PLATFORMS = {
    "github-pages": {
        "storage_gb": 1, "files": 1_000_000, "req_month": None, "bandwidth_gb": 100,
        "role": "静态主力语言", "note": "无请求数计费，但有 1 GB / 100 GB 月带宽",
    },
    "cf-pages-free": {
        "storage_gb": 25, "files": 20_000, "req_month": None, "bandwidth_gb": None,
        "role": "静态分片", "note": "文件数 2 万是硬限制，装不下一个语言的详情页",
    },
    "cf-workers-free": {
        "storage_gb": 0, "files": None, "req_month": 3_000_000, "bandwidth_gb": None,
        "role": "边缘渲染 + 网关", "note": "10 万请求/天；网关与渲染可共用",
    },
    "vercel-hobby": {
        "storage_gb": 0, "files": None, "req_month": 1_000_000, "bandwidth_gb": 100,
        "role": "边缘渲染分片", "note": "函数调用与带宽双限，适合低流量语言",
    },
    "netlify-free": {
        "storage_gb": 0, "files": None, "req_month": 125_000, "bandwidth_gb": 100,
        "role": "边缘渲染分片", "note": "函数请求 12.5 万/月，量小但可用",
    },
    "deno-deploy-free": {
        "storage_gb": 0, "files": None, "req_month": 1_000_000, "bandwidth_gb": 100,
        "role": "边缘渲染分片", "note": "100 万请求/月，支持 Web 标准 API",
    },
    "r2-free": {
        "storage_gb": 10, "files": None, "req_month": None, "bandwidth_gb": None,
        "role": "译文数据存储", "note": "10 GB 存储、egress 免费",
    },
    "b2-free": {
        "storage_gb": 10, "files": None, "req_month": None, "bandwidth_gb": None,
        "role": "译文数据存储（第二份）", "note": "10 GB 存储，日下载 1 GB 免费",
    },
}


def model(releases: int, langs: int, pv: float, cache_hit: float) -> dict:
    m = measure()
    projects = 1000  # 千万页场景下的项目数估
    agg_per_lang = 224

    detail = releases * langs
    proj_pages = projects * langs
    agg_pages = agg_per_lang * langs
    pages = detail + proj_pages + agg_pages

    # 静态：每个页面一个文件
    static_gb = pages * m["avg_page_kb"] / 1024 / 1024
    static_build_h = pages * m["build_s_per_page"] / 3600

    # 数据：原文 × 语言，gzip 约 30%
    body_gb = m["body_kb"] * 1024 * releases / 1024**3 * langs
    body_gz_gb = body_gb * 0.30

    # 边缘渲染：只有穿透缓存的请求才真正消耗函数配额
    monthly_views = pages * pv
    origin_req = monthly_views * (1 - cache_hit)

    # 多平台合计渲染配额（网关不计入渲染池，单独算）
    render_pool = sum(
        v["req_month"] or 0
        for k, v in PLATFORMS.items()
        if v["role"].startswith("边缘渲染")
    )
    gateway_req = 3_000_000  # CF Worker 网关
    storage_pool = PLATFORMS["r2-free"]["storage_gb"] + PLATFORMS["b2-free"]["storage_gb"]

    # 内容基数差距
    need_releases = releases
    current = m["releases"]
    repo_ratio = m["releases"] / max(1, m["repos_tracked"])
    need_repos = round(need_releases / repo_ratio) if repo_ratio else 0

    return {
        "baseline": m,
        "pages": {
            "total": pages,
            "detail": detail,
            "project": proj_pages,
            "agg": agg_pages,
        },
        "content_gap": {
            "current_releases": current,
            "need_releases": need_releases,
            "multiple": round(need_releases / max(1, current), 1),
            "avg_releases_per_repo": round(repo_ratio, 1),
            "need_repos": need_repos,
        },
        "static": {
            "artifact_gb": round(static_gb, 1),
            "build_hours": round(static_build_h, 1),
            "per_lang_gb": round(static_gb / langs, 2),
            "verdict": "不可行：单个语言的页面就接近 GitHub Pages 的 1 GB",
        },
        "data": {
            "gz_gb": round(body_gz_gb, 1),
            "storage_pool_gb": storage_pool,
            "fits": body_gz_gb <= storage_pool,
        },
        "edge": {
            "monthly_views": round(monthly_views),
            "cache_hit": cache_hit,
            "origin_requests": round(origin_req),
            "render_pool_month": render_pool,
            "gateway_month": gateway_req,
            "fits": origin_req <= render_pool and origin_req <= gateway_req,
            "platforms": {k: v for k, v in PLATFORMS.items()},
        },
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--releases", type=int, default=40000, help="内容基数（release 条数）")
    ap.add_argument("--langs", type=int, default=249)
    ap.add_argument("--pv", type=float, default=0.3, help="页均月访问")
    ap.add_argument("--cache-hit", type=float, default=0.97, help="边缘缓存命中率")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    r = model(args.releases, args.langs, args.pv, args.cache_hit)
    if args.json:
        print(json.dumps(r, ensure_ascii=False, indent=2))
        return

    b, c = r["baseline"], r["content_gap"]
    print(f"当前: {b['repos_tracked']} 个仓库 / {c['current_releases']:,} 条 release / 平均 {c['avg_releases_per_repo']} 条每仓库")
    print(f"目标: {c['need_releases']:,} 条 release / {args.langs} 语言 → {r['pages']['total']:,} 页")
    print(f"      内容基数要扩 {c['multiple']} 倍，约 {c['need_repos']} 个追踪仓库\n")

    p = r["pages"]
    print(f"页面构成: 详情 {p['detail']:,} + 项目 {p['project']:,} + 聚合 {p['agg']:,}")
    s = r["static"]
    print(f"\n路线 A · 全静态")
    print(f"  产物 {s['artifact_gb']:,} GB / 构建 {s['build_hours']:,} 小时")
    print(f"  ❌ {s['verdict']}（每语言 {s['per_lang_gb']} GB）")

    d = r["data"]
    print(f"\n路线 B · 边缘渲染 + 多平台分片")
    print(f"  译文数据 {d['gz_gb']} GB（gzip）/ 多平台存储合计 {d['storage_pool_gb']} GB → {'✅ 装得下' if d['fits'] else '❌ 超了'}")

    e = r["edge"]
    print(f"  月访问 {e['monthly_views']:,}（页均 {args.pv} 次），缓存命中 {e['cache_hit']:.0%}")
    print(f"  → 回源请求 {e['origin_requests']:,}/月")
    print(f"  渲染池合计 {e['render_pool_month']:,}/月 → {'✅ 够' if e['fits'] else '❌ 不够'}")
    print(f"  网关 {e['gateway_month']:,}/月（CF Worker）")
    print("\n  各平台角色:")
    for k, v in e["platforms"].items():
        req = f"{v['req_month']:,}/月" if v["req_month"] else ("无限制" if v["role"].startswith("静态") else "-")
        gb = f"{v['storage_gb']} GB" if v["storage_gb"] else "-"
        print(f"    {k:18s} {v['role']:16s} 存储 {gb:8s} 请求 {req}")
    print("\n结论：千万页不可能靠静态文件堆出来（224 GB），只能靠边缘渲染；")
    print("      单平台额度不够分摊，必须多平台并行 + 高缓存命中率。")


if __name__ == "__main__":
    main()
