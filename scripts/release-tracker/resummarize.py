#!/usr/bin/env python3
"""按新规则重算所有 release 页面的 summary 字段。

旧的抽取逻辑是「取正文第一段 + 硬截断 220 字符」，而 release note 的
典型结构是「标题 + 列表 + 镜像声明」，所以唯一的段落往往是声明本身，
抽样 200 篇只有 40% 产出可用摘要。excerpt.py 改成按顺序取第一个有内容的
块组后，可用率到 91%。

本脚本把这套规则应用到已经入库的历史文件（不需要重新调 GitHub API）。

用法:
  python resummarize.py --dry-run     # 只统计会改多少篇
  python resummarize.py               # 实际写入
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from excerpt import summarize  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
TARGETS = [
    ROOT / "docs" / "release_note",
    ROOT / "docs" / "zh" / "release_note",
]


def yaml_q(s: str) -> str:
    """和 collect.py 一致：把字符串安全放进 YAML 双引号。"""
    s = "".join(ch for ch in s if ch >= " " or ch == "\t")
    return s.replace("\\", "\\\\").replace('"', '\\"')


def split_doc(text: str) -> tuple[list[str], str] | None:
    """按行切出 frontmatter 与正文。

    不能用 text.split("---", 2)：release note 正文里有大量 Markdown 表格，
    分隔行就是 `| --- | --- |`，摘要字段本身也可能含 `---`，
    按字符串切会切错位置（spring-cloud-dataflow 的 4 篇就是这样）。
    frontmatter 的边界只认「独占一行的 ---」。
    """
    lines = text.split("\n")
    if not lines or lines[0].strip() != "---":
        return None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return lines[1:i], "\n".join(lines[i + 1:])
    return None


def rewrite(path: Path, dry: bool) -> str:
    """返回 unchanged / updated / cleared / skipped"""
    raw = path.read_text(encoding="utf-8", errors="ignore")
    doc = split_doc(raw)
    if doc is None:
        return "skipped"
    fm_lines, body = doc

    new_sum = summarize(body)
    idx = next((i for i, line in enumerate(fm_lines) if line.startswith("summary:")), None)
    old_sum = ""
    if idx is not None:
        line = fm_lines[idx]
        old_sum = line[len("summary:"):].strip().strip('"').replace('\\"', '"').replace("\\\\", "\\")

    if old_sum == new_sum:
        return "unchanged"

    if new_sum:
        entry = f'summary: "{yaml_q(new_sum)}"'
        if idx is None:
            # 放在 lang 之后，保持 collect.py 写出的字段顺序
            lang_idx = next((i for i, l in enumerate(fm_lines) if l.startswith("lang:")), len(fm_lines) - 1)
            fm_lines.insert(lang_idx + 1, entry)
        else:
            fm_lines[idx] = entry
        result = "updated"
    else:
        if idx is None:
            return "unchanged"
        del fm_lines[idx]
        result = "cleared"

    if not dry:
        path.write_text("---\n" + "\n".join(fm_lines) + "\n---\n" + body, encoding="utf-8")
    return result


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--limit", type=int, help="只处理前 N 篇文章，用于抽查")
    args = ap.parse_args()

    stats: dict[str, int] = {"updated": 0, "cleared": 0, "unchanged": 0, "skipped": 0}
    samples: list[tuple[str, str]] = []

    files = [p for d in TARGETS if d.exists() for p in sorted(d.rglob("*.md"))]
    if args.limit:
        files = files[: args.limit]

    for p in files:
        try:
            res = rewrite(p, args.dry_run)
        except Exception as exc:  # noqa: BLE001
            print(f"⚠️  {p}: {exc}")
            stats["skipped"] += 1
            continue
        stats[res] += 1
        if res == "updated" and len(samples) < 3:
            samples.append((p.name, summarize(split_doc(p.read_text(encoding='utf-8', errors='ignore'))[1])[:100]))

    print(f"\n共 {len(files)} 篇")
    print(f"  改写 {stats['updated']}   清空 {stats['cleared']}   未变 {stats['unchanged']}   跳过 {stats['skipped']}")
    if args.dry_run:
        print("  （dry-run，未写入）")
    for name, s in samples:
        print(f"  · {name} → {s}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
