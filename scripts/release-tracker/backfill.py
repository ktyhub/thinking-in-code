#!/usr/bin/env python3
"""
英文原文回填：把历史中文归档对应的 GitHub Release 英文原文抓回仓库。

背景
----
2024 年之前的历史页面只有机器翻译的中文，没有发布日期，也没有英文原文，
因此无法作为「国际化 Release Note」的语料。本脚本：

1. 扫描 docs/zh/release_note/{project}/ 里的历史正文，用 PR/issue 链接投票推断仓库；
2. 逐仓库拉取 GitHub Releases（含 published_at）；
3. 把英文正文写入 docs/release_note/{project}/{project}_{tag}.md（canonical，lang: en）。

写入的英文文件与历史中文文件按「归一化版本号」在站点侧自动配对：
同一条发布于是同时拥有 /releases/... 与 /zh/release_note/... 两个地址。

用法:
  python backfill.py --dry-run                # 只打印统计
  python backfill.py --max-per-repo 12        # 每个仓库最多回填 12 个版本
  python backfill.py --only dubbo,kafka       # 只处理指定项目目录
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from excerpt import summarize  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
ZH_DIR = ROOT / "docs" / "zh" / "release_note"
EN_DIR = ROOT / "docs" / "release_note"
STATE_FILE = HERE / "backfill-state.json"

API = "https://api.github.com"
REPO_RE = re.compile(r"github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)")
BLOCK = {
    "sponsors", "features", "about", "topics", "marketplace", "apps", "settings",
    "site", "contact", "enterprise", "collections", "trending", "readme", "security",
}
UNSAFE = re.compile(r"[^\w.\-]+")


def token() -> str:
    t = os.environ.get("GITHUB_TOKEN", "").strip()
    if t:
        return t
    try:
        return subprocess.check_output(["gh", "auth", "token"], text=True).strip()
    except Exception:  # noqa: BLE001
        return ""


def gh(path: str, tok: str) -> dict | list | None:
    req = urllib.request.Request(
        API + path,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "nextstack-backfill",
            "X-GitHub-Api-Version": "2022-11-28",
            **({"Authorization": f"Bearer {tok}"} if tok else {}),
        },
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=40) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code in (403, 429):
                print(f"   ⚠️  限流，等待 30s（{e.code}）")
                time.sleep(30)
                continue
            if e.code == 404:
                return None
            if attempt == 2:
                print(f"   ⚠️  {path} 失败：{e}")
                return None
            time.sleep(2)
        except Exception as e:  # noqa: BLE001
            if attempt == 2:
                print(f"   ⚠️  {path} 失败：{e}")
                return None
            time.sleep(2)
    return None


def detect_repo(project_dir: Path) -> str | None:
    votes: Counter[str] = Counter()
    for f in project_dir.glob("*.md"):
        try:
            text = f.read_text(encoding="utf-8", errors="ignore")
        except Exception:  # noqa: BLE001
            continue
        for m in REPO_RE.finditer(text):
            owner, repo = m.group(1), m.group(2)
            if owner in BLOCK or repo in BLOCK or repo.endswith(".git"):
                continue
            votes[f"{owner}/{repo}"] += 1
    if not votes:
        return None
    top = votes.most_common(2)
    if len(top) > 1 and top[0][1] < top[1][1] * 2:
        return None
    return top[0][0]


def safe_name(s: str) -> str:
    return UNSAFE.sub("_", s).strip("_") or "unknown"


def plain_len(body: str) -> int:
    text = re.sub(r"```.*?```", "", body, flags=re.S)
    text = re.sub(r"[#*`>|\-_]", " ", text)
    return len(re.sub(r"\s+", " ", text).strip())


def low_value(body: str) -> bool:
    t = body.strip().lower()
    if len(t) < 150:
        return True
    if t.startswith("full changelog") or re.fullmatch(r"(full changelog|what's changed)[:\s\S]{0,80}", t):
        return True
    return False


def version_type(tag: str) -> str:
    v = tag.lower()
    if re.search(r"(^|[-._])(rc|alpha|beta|preview|snapshot|dev|m\d+|milestone|canary)\b", v):
        return "pre"
    m = re.match(r"^v?(\d+)(?:\.(\d+))?(?:\.(\d+))?", v)
    if not m:
        return "release"
    minor, patch = m.group(2), m.group(3)
    if minor is None:
        return "major"
    if int(minor) == 0 and (patch is None or int(patch) == 0):
        return "major"
    if patch is None or int(patch) == 0:
        return "minor"
    return "patch"


def build_page(project: str, repo: str, rel: dict) -> str:
    tag = rel.get("tag_name") or ""
    published = (rel.get("published_at") or "")[:10]
    body = (rel.get("body") or "").strip()
    fm = [
        "---",
        f'title: "{project} {tag}"'.replace('"', '"', 1),
        f'project: "{project}"',
        f'repo: "{repo}"',
        f'tag: "{tag}"',
        f'published: "{published}"',
        f'type: "{version_type(tag)}"',
        'lang: "en"',
    ]
    summary = summarize(body)
    if summary:
        fm.append(f'summary: "{summary}"')
    fm.append("---")
    footer = (
        f"> **Source** [{repo}](https://github.com/{repo}) · `{tag}` · "
        f"{published} · [upstream release]({rel.get('html_url', '')})\n\n"
        "*Mirrored verbatim for indexing. All rights belong to the upstream project.*"
    )
    return "\n".join(fm) + f"\n\n# {project} {tag}\n\n{body}\n\n---\n\n{footer}\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-per-repo", type=int, default=12)
    ap.add_argument("--only", help="逗号分隔的项目目录名")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--min-interval", type=float, default=0.35)
    args = ap.parse_args()

    tok = token()
    if not tok:
        print("❌ 需要 GitHub Token（环境变量 GITHUB_TOKEN 或已登录的 gh）")
        return 1
    print(f"🔑 使用 token：{tok[:7]}…")

    dirs = sorted(d for d in ZH_DIR.iterdir() if d.is_dir() and not d.name.startswith("."))
    if args.only:
        want = {s.strip() for s in args.only.split(",")}
        dirs = [d for d in dirs if d.name in want]

    mapping: dict[str, str] = {}
    for d in dirs:
        repo = detect_repo(d)
        if repo:
            mapping[d.name] = repo
    print(f"📚 可回填项目 {len(mapping)} / {len(dirs)}")

    written = 0
    skipped_dup = 0
    for i, (project, repo) in enumerate(sorted(mapping.items()), 1):
        out_dir = EN_DIR / project
        print(f"[{i}/{len(mapping)}] {project} ← {repo}")
        releases = gh(f"/repos/{repo}/releases?per_page=100", tok)
        if not isinstance(releases, list):
            continue
        count = 0
        for rel in releases:
            if count >= args.max_per_repo:
                break
            if rel.get("draft"):
                continue
            tag = rel.get("tag_name") or ""
            body = (rel.get("body") or "").strip()
            if not tag or not body or low_value(body):
                continue
            fname = f"{project}_{safe_name(tag)}.md"
            fpath = out_dir / fname
            if fpath.exists():
                skipped_dup += 1
                count += 1
                continue
            if args.dry_run:
                print(f"   (dry) {fname}  {plain_len(body)}B")
            else:
                out_dir.mkdir(parents=True, exist_ok=True)
                fpath.write_text(build_page(project, repo, rel), encoding="utf-8")
            written += 1
            count += 1
        time.sleep(args.min_interval)

    print(f"\n完成：新增英文原文 {written} 篇，已存在 {skipped_dup} 篇")
    return 0


if __name__ == "__main__":
    sys.exit(main())
