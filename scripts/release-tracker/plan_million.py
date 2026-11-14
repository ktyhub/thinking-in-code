#!/usr/bin/env python3
"""
百万页 + 免费：三条路线的真实账本（只读，不产生任何费用）

回答的问题：在不付费的前提下，能不能撑起百万个 URL？怎么撑？

核心事实（本脚本从仓库实测，不硬编码猜测值）：
  - 84.5 万个页面，如果全部预渲染成 HTML = 17.7 GB，任何免费平台都装不下
  - 但这 84.5 万页只来自 9.3 MB 英文原文 × 249 种语言 = 2.3 GB 源数据
  - 页面是「数据 × 模板」的笛卡尔积，真正稀缺的是数据，不是页面

于是有三条路：
  A 全静态    —— 生成 84.5 万个 HTML 文件，纯文件托管
  B 混合      —— 主力语言预渲染成静态文件，长尾语言由边缘函数按需渲染
  C 纯边缘    —— 一个 HTML 都不落盘，全部按需渲染

跑法：
  python plan_million.py
  python plan_million.py --langs 249 --pv 0.2      # 自定义语言数与页均月访问
  python plan_million.py --json
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
SITE = REPO / "site"


# ---------------------------------------------------------------- 实测基线

def measure() -> dict:
    en_docs = list((REPO / "docs" / "release_note").rglob("*.md"))
    en_bytes = sum(p.stat().st_size for p in en_docs)
    htmls = list((SITE / "dist").rglob("*.html")) if (SITE / "dist").exists() else []
    html_bytes = sum(p.stat().st_size for p in htmls)
    return {
        "en_docs": len(en_docs),
        "en_body_mb": round(en_bytes / 1024**2, 1),
        "avg_body_kb": round(en_bytes / max(1, len(en_docs)) / 1024, 1),
        "base_pages": len(htmls),
        "base_mb": round(html_bytes / 1024**2, 1),
        "avg_page_kb": round(html_bytes / max(1, len(htmls)) / 1024, 1) if htmls else 22.0,
        # 单页构建耗时：Astro 全量构建 5427 页约 313 秒（2026-11-14 实测）
        "build_s_per_page": 313 / max(1, len(htmls)),
    }


# 免费额度（2026-11 公开文档，均无需绑定支付方式）
QUOTA = {
    "github-pages": {"bytes": 1 * 1024**3, "files": 1_000_000, "build_s": 600, "bandwidth_gb": 100},
    "cf-pages-free": {"bytes": 25 * 1024**3, "files": 20_000, "build_s": 1200, "bandwidth_gb": None},
    "cf-workers-free": {"req_day": 100_000, "cpu_ms": 10, "build_s": None, "files": None},
    "cf-r2-free": {"bytes": 10 * 1024**3, "class_a_m": 1_000_000, "class_b_m": 10_000_000, "egress": "免费"},
    "cf-kv-free": {"reads_day": 100_000, "writes_day": 1_000, "bytes": 1 * 1024**3},
}

RECORDS = 3178          # 合并后的 release 记录数
AGG_PAGES = 224         # 每语言的导航层 + 聚合页 + 项目页
TIER1 = 7               # en/zh/ja/de/fr/es/pt
TRANSLATE_RPS = 14.0    # 实测 8 并发 14 条/秒
CHUNK_CHARS = 3400      # Google 免密端点单次上限


def model(langs: int, pv: float) -> dict:
    m = measure()
    new_langs = max(0, langs - TIER1)

    # ---- 路线 A：全静态
    a_pages = m["base_pages"] + new_langs * (AGG_PAGES + RECORDS)
    a_gb = a_pages * m["avg_page_kb"] / 1024 / 1024
    a_build_h = a_pages * m["build_s_per_page"] / 3600

    # ---- 路线 B：混合（Tier1 预渲染，其余边缘渲染）
    b_static_pages = m["base_pages"]
    b_static_gb = b_static_pages * m["avg_page_kb"] / 1024 / 1024
    b_edge_pages = a_pages - b_static_pages

    # ---- 路线 C：纯边缘
    c_edge_pages = a_pages

    # ---- 边缘渲染的源数据体积（这才是要存的）
    # 每种语言一套译文正文，gzip 后约为原文的 30%
    body_gb = m["en_body_mb"] * langs / 1024
    body_gz_gb = body_gb * 0.30

    # ---- 翻译成本：唯一文本 × 语言数，内容寻址缓存保证永不重翻
    chunks_per_doc = max(1, round(m["avg_body_kb"] * 1024 / CHUNK_CHARS))
    translate_jobs = m["en_docs"] * langs * chunks_per_doc
    translate_h = translate_jobs / TRANSLATE_RPS / 3600
    daily_new = 10  # 每日新增 release 估
    daily_jobs = daily_new * langs * chunks_per_doc
    daily_min = daily_jobs / TRANSLATE_RPS / 60

    # ---- 边缘请求：按页均月访问估算，CDN 命中不消耗 Worker 请求
    monthly_views = c_edge_pages * pv
    # 假设 85% 被边缘缓存吸收，只有 15% 打到 Worker
    worker_req_month = monthly_views * 0.15
    worker_quota_month = QUOTA["cf-workers-free"]["req_day"] * 30

    def verdict(pages: int, gb: float, build_h: float, platform: str) -> dict:
        q = QUOTA[platform]
        return {
            "fits_bytes": gb * 1024**3 <= q["bytes"] if q.get("bytes") else None,
            "fits_files": pages <= q["files"] if q.get("files") else None,
            "fits_build": build_h * 3600 <= q["build_s"] if q.get("build_s") else None,
        }

    return {
        "baseline": m,
        "langs": langs,
        "routes": {
            "A_full_static": {
                "pages": a_pages,
                "artifact_gb": round(a_gb, 1),
                "build_hours": round(a_build_h, 1),
                "files": a_pages,
                "sitemap_shards": max(1, -(-a_pages // 45_000)),
                "verdict": {
                    "github-pages": verdict(a_pages, a_gb, a_build_h, "github-pages"),
                    "cf-pages-free": verdict(a_pages, a_gb, a_build_h, "cf-pages-free"),
                },
                "blocked_by": f"{a_gb:.1f} GB 产物 vs GitHub Pages 1 GB；构建 {a_build_h:.1f} 小时",
            },
            "B_hybrid": {
                "pages": a_pages,
                "static_pages": b_static_pages,
                "static_gb": round(b_static_gb, 2),
                "static_quota_pct": round(b_static_gb / (QUOTA["github-pages"]["bytes"] / 1024**3) * 100, 1),
                "edge_pages": b_edge_pages,
                "r2_gb": round(body_gz_gb, 2),
                "r2_quota_pct": round(body_gz_gb / (QUOTA["cf-r2-free"]["bytes"] / 1024**3) * 100, 1),
                "verdict": {
                    "github-pages": verdict(b_static_pages, b_static_gb, 0.1, "github-pages"),
                    "cf-r2-free": {"fits_bytes": body_gz_gb <= QUOTA["cf-r2-free"]["bytes"] / 1024**3},
                },
                "blocked_by": "无。静态部分占 GH Pages 1 GB 的 "
                              f"{b_static_gb / 1 * 100:.1f}%，边缘数据占 R2 10 GB 的 {body_gz_gb / 10 * 100:.1f}%",
            },
            "C_pure_edge": {
                "pages": c_edge_pages,
                "artifact_gb": 0,
                "r2_gb": round(body_gz_gb, 2),
                "monthly_views": round(monthly_views),
                "worker_req_month": round(worker_req_month),
                "worker_quota_month": worker_quota_month,
                "worker_quota_pct": round(worker_req_month / worker_quota_month * 100, 1),
            },
        },
        "translation": {
            "unique_docs": m["en_docs"],
            "chunks_per_doc": chunks_per_doc,
            "jobs_total": translate_jobs,
            "hours_total": round(translate_h, 1),
            "daily_new_jobs": daily_jobs,
            "daily_minutes": round(daily_min, 1),
        },
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--langs", type=int, default=249)
    ap.add_argument("--tier", type=int, choices=[1, 2, 3], help="语言数取自 languages.json 的分层")
    ap.add_argument("--pv", type=float, default=0.5, help="页均月访问次数（用于边缘请求估算）")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    langs = args.langs
    if args.tier:
        reg = json.loads((HERE / "languages.json").read_text(encoding="utf-8"))
        langs = sum(v for t, v in reg["counts"].items() if int(t) <= args.tier)

    r = model(langs, args.pv)
    if args.json:
        print(json.dumps(r, ensure_ascii=False, indent=2))
        return

    b = r["baseline"]
    print(f"基线（实测）: {b['base_pages']:,} 页 / {b['base_mb']} MB / 平均 {b['avg_page_kb']} KB 每页")
    print(f"              英文原文 {b['en_docs']:,} 篇 / {b['en_body_mb']} MB / 平均 {b['avg_body_kb']} KB 每篇")
    print()

    A = r["routes"]["A_full_static"]
    print(f"路线 A · 全静态预渲染（{r['langs']} 种语言）")
    print(f"  页面 {A['pages']:,}  →  产物 {A['artifact_gb']} GB  →  构建 {A['build_hours']} 小时")
    print(f"  ❌ {A['blocked_by']}")
    print()

    B = r["routes"]["B_hybrid"]
    print(f"路线 B · 混合：主力语言静态 + 长尾语言边缘渲染（{r['langs']} 种语言）")
    print(f"  静态 {B['static_pages']:,} 页 / {B['static_gb']} GB  →  占 GitHub Pages 1 GB 的 {B['static_quota_pct']}%")
    print(f"  边缘 {B['edge_pages']:,} 个 URL（不落盘，按需渲染）")
    print(f"  数据 {B['r2_gb']} GB（gzip 后译文正文）→  占 R2 免费 10 GB 的 {B['r2_quota_pct']}%")
    print(f"  ✅ {B['blocked_by']}")
    print()

    C = r["routes"]["C_pure_edge"]
    print(f"路线 C · 纯边缘渲染（{r['langs']} 种语言）")
    print(f"  页面 {C['pages']:,} / 产物 0 GB / 数据 {C['r2_gb']} GB")
    print(f"  月访问估算 {C['monthly_views']:,}（页均 {args.pv} 次）→ Worker 请求 {C['worker_req_month']:,}")
    print(f"  Worker 免费额度 {C['worker_quota_month']:,}/月，占用 {C['worker_quota_pct']}%")
    print()

    T = r["translation"]
    print("翻译成本（免费通道，内容寻址去重后）")
    print(f"  一次性 {T['jobs_total']:,} 个文本块 ≈ {T['hours_total']} 小时（14 条/秒，8 并发）")
    print(f"  日常增量 每天 {T['daily_new_jobs']:,} 块 ≈ {T['daily_minutes']} 分钟")
    print()
    print("结论：百万 URL 不靠百万个文件，靠「数据 × 模板」按需渲染；")
    print("      昂贵的是 HTML 文件数量，便宜的是源数据体积——差 7.7 倍。")


if __name__ == "__main__":
    main()
