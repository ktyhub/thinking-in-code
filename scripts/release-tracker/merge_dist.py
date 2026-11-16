#!/usr/bin/env python3
"""合并多个构建分片的 dist 目录，并重建全局 sitemap。

为什么需要它
------------
全量构建 7 个语言要几分钟，语言数一多就是几小时（千万页方案里是 164 小时）。
所以 CI 按分片并行构建：每个 job 只生成自己那部分页面（SITE_LOCALES / SITE_SECTIONS），
最后在这里合并成一份产物，仍然部署到同一个域名、同一个 GitHub Pages 项目。

这样做的两个前提
----------------
1. **分片之间路径不重叠**。语言分片靠 URL 前缀天然隔离；栏目分片靠
   SITE_SECTIONS 隔离。重叠会导致同一路径产出两份不同内容，脚本会报错退出。
2. **共享资源内容确定**。`assets/`（Astro 的 `_astro` 等价物）是内容哈希命名，
   同源码在不同分片里产出同名同内容，合并时按并集去重即可。

sitemap 为什么不能直接取某一个分片的
-----------------------------------
`@astrojs/sitemap` 是在构建期按本分片产出的页面列表生成的，每个分片只知道自己那一份。
直接拷过来会把整站 sitemap 缩成一片。所以这里把所有分片的 <url> 块收集起来、
去重、按 URL 排序后重新分片（45,000/片），再生成 sitemap-index.xml。

排序是必须的：不排序的话每次构建的 sitemap 顺序会随分片完成顺序变化，
搜索引擎每次抓到的文件都不同，白白消耗抓取预算。
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

URL_BLOCK_RE = re.compile(r"<url>.*?</url>", re.S)
LOC_RE = re.compile(r"<loc>\s*(.*?)\s*</loc>", re.S)

# Google 单片 sitemap 上限 50,000，取 45,000 留安全余量（与 astro.config.mjs 一致）
ENTRY_LIMIT = 45_000

# 每个分片都会产出的「全站级」文件：它们不属于任何语言，内容本来就该一致。
# 因为注入的构建期变量或渲染顺序，字节级可能仍有差异，这不算分片划错，
# 按「第一个分片优先」处理（CI 里第一个就是 en，根路径的正主）。
GLOBAL_FILES = {
    "index.html",
    "404.html",
    "robots.txt",
    "ads.txt",
    "CNAME",
    "favicon.svg",
    "favicon.ico",
}


def read_url_blocks(shard: Path) -> list[str]:
    """读取一个分片里所有 sitemap-*.xml 的 <url> 块（跳过 index 文件）。"""
    blocks: list[str] = []
    for f in sorted(shard.glob("sitemap-*.xml")):
        if f.name == "sitemap-index.xml":
            continue
        text = f.read_text(encoding="utf-8")
        blocks.extend(URL_BLOCK_RE.findall(text))
    return blocks


def write_sitemaps(out: Path, blocks: list[str]) -> list[Path]:
    """按 ENTRY_LIMIT 重新分片写出，并生成 index。"""
    for old in out.glob("sitemap-*.xml"):
        old.unlink()

    written: list[Path] = []
    for i in range(0, len(blocks), ENTRY_LIMIT):
        chunk = blocks[i : i + ENTRY_LIMIT]
        name = f"sitemap-{i // ENTRY_LIMIT}.xml"
        body = (
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
            + "".join(chunk)
            + "</urlset>"
        )
        (out / name).write_text(body, encoding="utf-8")
        written.append(out / name)

    return written


def merge_dirs(shards: list[Path], out: Path) -> tuple[list[str], list[str]]:
    """把分片并集拷进 out。

    返回 (冲突文件, 被首个分片覆盖的全站级文件)：前者意味着分片边界没划干净，
    后者只是各分片对同一份「全站资产」的输出字节不同，按第一个分片保留即可。
    """
    conflicts: list[str] = []
    overridden: list[str] = []

    for shard in shards:
        for src in shard.rglob("*"):
            if not src.is_file():
                continue
            rel = src.relative_to(shard)
            # sitemap 由 write_sitemaps 统一重建，不直接拷
            if src.parent == shard and src.name.startswith("sitemap-"):
                continue

            dst = out / rel
            if dst.exists():
                if dst.read_bytes() == src.read_bytes():
                    continue  # 同内容（比如哈希命名的 assets），正常
                if str(rel) in GLOBAL_FILES:
                    overridden.append(str(rel))
                else:
                    conflicts.append(str(rel))
                continue

            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)

    return conflicts, overridden


def main() -> int:
    ap = argparse.ArgumentParser(description="合并构建分片并重建 sitemap")
    ap.add_argument("shards", nargs="+", type=Path, help="各分片的 dist 目录")
    ap.add_argument("--out", type=Path, required=True, help="合并后的输出目录")
    ap.add_argument(
        "--allow-conflicts",
        action="store_true",
        help="内容冲突时只警告不失败（默认失败，因为冲突意味着分片边界没划干净）",
    )
    args = ap.parse_args()

    missing = [str(s) for s in args.shards if not s.is_dir()]
    if missing:
        print(f"分片目录不存在: {', '.join(missing)}", file=sys.stderr)
        return 2

    if args.out.exists():
        shutil.rmtree(args.out)
    args.out.mkdir(parents=True)

    conflicts, overridden = merge_dirs(args.shards, args.out)

    # 收集 + 去重 sitemap URL（按 loc 去重，保留首个块）
    by_loc: dict[str, str] = {}
    for shard in args.shards:
        for block in read_url_blocks(shard):
            m = LOC_RE.search(block)
            if not m:
                continue
            by_loc.setdefault(m.group(1).strip(), block)

    blocks = [by_loc[k] for k in sorted(by_loc)]
    if not blocks:
        # 空 sitemap 会被解读成「这个站没有页面」，比不提交更糟
        print("错误：所有分片都没有产出任何 sitemap URL，拒绝生成空 sitemap", file=sys.stderr)
        return 1
    files = write_sitemaps(args.out, blocks)

    index = (
        '<?xml version="1.0" encoding="UTF-8"?>'
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        + "".join(
            f"<sitemap><loc>https://www.stags.cn/{f.name}</loc></sitemap>" for f in files
        )
        + "</sitemapindex>"
    )
    (args.out / "sitemap-index.xml").write_text(index, encoding="utf-8")

    html = sum(1 for _ in args.out.rglob("*.html"))
    per_shard = {s.name: sum(1 for _ in s.rglob("*.html")) for s in args.shards}
    shard_total = sum(per_shard.values())

    print(f"分片数: {len(args.shards)}")
    for name, n in per_shard.items():
        print(f"  {name}: {n} 页")
    print(f"分片页数之和: {shard_total}")
    # 各分片之和总是大于合并结果：共享静态页（首页、404、栏目列表）在每个
    # 分片都会产出一份，合并时按并集去掉。把差值摊开写出来，是为了让后来
    # 看日志的人一眼分清「正常去重」和「真的丢了页面」——后者表现为合并数
    # 小于最大分片，或某分片页数突然掉一截。
    print(f"合并后 HTML: {html} 页（去重 {shard_total - html} 个重复副本）")
    if html < max(per_shard.values()):
        print(
            f"\n合并结果 {html} 页少于最大分片 {max(per_shard.values())} 页，"
            "说明有页面在合并中丢失",
            file=sys.stderr,
        )
        return 1
    print(f"sitemap: {len(blocks)} 个 URL / {len(files)} 片 -> {', '.join(f.name for f in files)}")

    if overridden:
        uniq_o = sorted(set(overridden))
        print(
            f"全站级文件 {len(uniq_o)} 个在分片间字节不同，按第一个分片保留: "
            + ", ".join(uniq_o)
        )

    if conflicts:
        uniq = sorted(set(conflicts))
        print(f"\n冲突文件 {len(uniq)} 个（同一路径被多个分片写出、内容不同）:", file=sys.stderr)
        for c in uniq[:20]:
            print(f"  {c}", file=sys.stderr)
        if len(uniq) > 20:
            print(f"  ... 还有 {len(uniq) - 20} 个", file=sys.stderr)
        if not args.allow_conflicts:
            print(
                "\n分片边界没划干净：请检查 SITE_LOCALES / SITE_SECTIONS 是否有重叠。",
                file=sys.stderr,
            )
            return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
