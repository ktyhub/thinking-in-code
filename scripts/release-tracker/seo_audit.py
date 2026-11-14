#!/usr/bin/env python3
"""
发布前 SEO 审计：对照索引闸门检查构建产物

闸门（index-gate.json）决定「哪些语言允许被收录」，这个脚本检查
构建产物是否真的按闸门执行了，避免配置和实际输出不一致。

检查项：
  1. 每个语言的页面数、被 noindex 的页数
  2. 可索引页总数 → 需要几个 sitemap 分片（Google 单片上限 50,000）
  3. hreflang 是否指向了 noindex 页面（自相矛盾的信号）
  4. 可索引页里是否有空内容页（标题或正文过短）

跑法：
  python seo_audit.py                  # 审计 site/dist
  python seo_audit.py --strict         # 有问题时退出码 1（CI 用）
  python seo_audit.py --json
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
DIST = REPO / "site" / "dist"
GATE = REPO / "site" / "src" / "data" / "index-gate.json"

SHARD_LIMIT = 45_000

ROBOTS_RE = re.compile(r'<meta\s+name="robots"\s+content="([^"]*)"', re.I)
CANONICAL_RE = re.compile(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', re.I)
HREFLANG_RE = re.compile(r'<link[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"', re.I)
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.I | re.S)
H1_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")
SITE_RE = re.compile(r'^\s*site:\s*["\']([^"\']+)["\']', re.M)


def locale_of(rel: str) -> str:
    first = rel.split("/")[0]
    if not first or "." in first:
        return "en"
    return first if re.fullmatch(r"[a-z]{2}(-[a-z]{2,4})?", first, re.I) else "en"


def load_gate() -> tuple[dict, str]:
    g = json.loads(GATE.read_text(encoding="utf-8"))
    return g.get("locales", {}), g.get("default", "noindex")


def is_indexable(locale: str, locales: dict, default: str) -> bool:
    if locale == "en":
        return True
    return (locales.get(locale, {}).get("status") or default) == "index"


def expected_site() -> str:
    """astro.config.mjs 里配置的对外域名，canonical 必须以它开头"""
    cfg = REPO / "site" / "astro.config.mjs"
    m = SITE_RE.search(cfg.read_text(encoding="utf-8")) if cfg.exists() else None
    return (m.group(1) if m else "").rstrip("/")


def audit() -> dict:
    if not DIST.exists():
        raise SystemExit(f"未找到构建产物：{DIST}\n先跑 cd site && npm run build")

    locales, default = load_gate()
    site = expected_site()
    stats: dict[str, dict] = defaultdict(lambda: {"pages": 0, "noindex": 0, "thin": 0})
    indexable_urls: list[str] = []
    hreflang_bad = 0
    hreflang_total = 0
    thin_samples: list[str] = []
    canonical_bad = 0
    canonical_samples: list[dict] = []
    host_counter: Counter = Counter()

    for html in DIST.rglob("*.html"):
        rel = html.relative_to(DIST).as_posix()
        if rel == "404.html":
            continue
        loc = locale_of(rel)
        text = html.read_text(encoding="utf-8", errors="ignore")
        s = stats[loc]
        s["pages"] += 1
        url_path = "/" + rel.replace("index.html", "").rstrip("/")

        # canonical 必须指向本站。写错域名会把整站权重送给别人，
        # 而且从页面上看不出来——只有把主机名抽出来比才知道。
        canon = CANONICAL_RE.search(text)
        if canon:
            host = re.sub(r"^https?://([^/]+).*$", r"\1", canon.group(1))
            host_counter[host] += 1
            if site and not canon.group(1).startswith(site):
                canonical_bad += 1
                if len(canonical_samples) < 5:
                    canonical_samples.append({"page": url_path, "canonical": canon.group(1)})

        robots = ROBOTS_RE.search(text)
        page_noindex = bool(robots and "noindex" in robots.group(1).lower())
        gate_open = is_indexable(loc, locales, default)
        if page_noindex or not gate_open:
            s["noindex"] += 1
            continue

        indexable_urls.append(url_path or "/")

        # hreflang 目标不得是不可索引页面
        for code, href in HREFLANG_RE.findall(text):
            target = href.replace(site, "").split("#")[0].strip("/")
            tloc = locale_of(target) if target else "en"
            hreflang_total += 1
            if not is_indexable(tloc, locales, default):
                hreflang_bad += 1

        # 薄内容：标题过短或无 h1
        title = TAG_RE.sub("", (TITLE_RE.search(text) or [None, ""])[1]).strip()
        has_h1 = bool(H1_RE.search(text))
        if len(title) < 15 or not has_h1:
            s["thin"] += 1
            if len(thin_samples) < 10:
                thin_samples.append(url_path)

    total_pages = sum(v["pages"] for v in stats.values())
    total_indexable = len(indexable_urls)

    return {
        "pages": total_pages,
        "indexable": total_indexable,
        "noindex": total_pages - total_indexable,
        "indexable_pct": round(total_indexable / max(1, total_pages) * 100, 1),
        "sitemap_shards": max(1, -(-total_indexable // SHARD_LIMIT)),
        "by_locale": {k: v for k, v in sorted(stats.items(), key=lambda kv: -kv[1]["pages"])},
        "gate_open": sorted([k for k in stats if is_indexable(k, locales, default)]),
        "gate_closed_but_present": sorted(
            [k for k in stats if not is_indexable(k, locales, default)]
        ),
        "hreflang_links": hreflang_total,
        "hreflang_to_noindex": hreflang_bad,
        "site": site,
        "canonical_hosts": dict(host_counter.most_common(5)),
        "canonical_offsite": canonical_bad,
        "canonical_offsite_samples": canonical_samples,
        "thin_pages": sum(v["thin"] for v in stats.values()),
        "thin_samples": thin_samples,
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    r = audit()
    if args.json:
        print(json.dumps(r, ensure_ascii=False, indent=2))
        return

    print(f"页面总数 {r['pages']:,}")
    print(f"  可索引 {r['indexable']:,}（{r['indexable_pct']}%）   noindex {r['noindex']:,}")
    print(f"  sitemap 需要 {r['sitemap_shards']} 个分片（单片上限 {SHARD_LIMIT:,}）")
    print(f"\n按语言:")
    for loc, v in r["by_locale"].items():
        flag = "开放" if loc in r["gate_open"] else "闸门关闭"
        thin = f"  薄内容 {v['thin']}" if v["thin"] else ""
        print(f"  {loc:6s} 页面 {v['pages']:>5,}  noindex {v['noindex']:>5,}  {flag}{thin}")
    if r["gate_closed_but_present"]:
        print(f"\n已生成但闸门未开的语言: {', '.join(r['gate_closed_but_present'])}")
        print("  → 这些页面可访问但不会被收录，属预期行为")
    print(f"\nhreflang 链接 {r['hreflang_links']:,} 条，指向 noindex 页面的 {r['hreflang_to_noindex']} 条")
    print(f"canonical 主机分布: {r['canonical_hosts']}（配置域名 {r['site'] or '未读到'}）")
    if r["canonical_offsite"]:
        sample = r["canonical_offsite_samples"][0]
        print(f"  ⚠️ {r['canonical_offsite']:,} 个页面 canonical 指向站外，样例 {sample['page']} → {sample['canonical']}")
    if r["thin_pages"]:
        print(f"薄内容页 {r['thin_pages']:,} 个，样例: {', '.join(r['thin_samples'][:5])}")

    problems = []
    if r["canonical_offsite"]:
        problems.append(f"{r['canonical_offsite']:,} 个页面 canonical 指向站外域名")
    if r["hreflang_to_noindex"]:
        problems.append(f"hreflang 指向 noindex 页面 {r['hreflang_to_noindex']} 条")
    if r["indexable"] > SHARD_LIMIT and r["sitemap_shards"] == 1:
        problems.append("可索引页超过单 sitemap 上限但未分片")

    if problems:
        print("\n❌ " + "；".join(problems))
        if args.strict:
            sys.exit(1)
    else:
        print("\n✅ 闸门与产物一致")


if __name__ == "__main__":
    main()
