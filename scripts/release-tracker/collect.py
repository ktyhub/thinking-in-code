#!/usr/bin/env python3
"""
NextStack Release 采集器（英文优先）

英文是站点的源语言，所以每条 Release 先生成英文原文页：
    docs/release_note/{project}/{project}_{tag}.md   (lang: en, canonical)

加 --translate 时再生成中文译文页：
    docs/zh/release_note/{project}/{project}_{tag}.md (lang: zh)

两份文件按「归一化版本号」在站点侧自动配对，同一条发布因此同时拥有
/releases/{project}/{version} 与 /zh/release_note/{project}/{file} 两个地址。

用法:
  python collect.py                     # 按 config.json 采集英文原文
  python collect.py --translate         # 同时生成中文译文
  python collect.py --limit 5           # 本次最多处理 5 条
  python collect.py --repos apache/kafka
  python collect.py --dry-run
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translate import translate_markdown  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
EN_DIR = ROOT / "docs" / "release_note"
ZH_DIR = ROOT / "docs" / "zh" / "release_note"
STATE_FILE = HERE / "state.json"
CONFIG_FILE = HERE / "config.json"
API = "https://api.github.com"
UNSAFE = re.compile(r"[^\w.\-]+")


# ---------- GitHub ----------
def gh(path: str, token: str) -> dict | list | None:
    req = urllib.request.Request(
        API + path,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "nextstack-release-tracker",
            "X-GitHub-Api-Version": "2022-11-28",
            **({"Authorization": f"Bearer {token}"} if token else {}),
        },
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if e.code in (403, 429):
                print("   ⚠️  触发限流，等待 30s")
                time.sleep(30)
                continue
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))
        except Exception:  # noqa: BLE001
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))
    return None


# ---------- 状态 ----------
def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    return {"repos": {}}


def save_state(state: dict) -> None:
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


# ---------- 生成 ----------
def safe_name(s: str) -> str:
    return UNSAFE.sub("_", s).strip("_") or "unknown"


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


def summarize(body: str) -> str:
    lines = []
    for raw in body.split("\n"):
        line = raw.strip()
        if not line:
            if lines:
                break
            continue
        if line.startswith(("#", "|", ">", "---", "```")) or re.match(r"^([-*+]|\d+\.)\s", line):
            if lines:
                break
            continue
        lines.append(line)
    text = " ".join(lines)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"[*_~`]", "", text)
    text = re.sub(r"<[^>]+>", "", text)
    # 跳过 “Full Changelog: <link>” 这类没有信息量的行
    text = re.sub(r"(?i)full changelog:?\s*https?://\S+", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > 220:
        cut = text[:220]
        text = cut[: max(cut.rfind(" "), 140)] + "…"
    return text.replace('"', "'")


def build_en(project: str, repo: str, tag: str, published: str, body: str, url: str) -> str:
    fm = [
        "---",
        f'title: "{project} {tag}"',
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
        f"> **Source** [{repo}](https://github.com/{repo}) · `{tag}` · {published} · "
        f"[upstream release]({url})\n\n"
        "*Mirrored verbatim for indexing. All rights belong to the upstream project.*"
    )
    return "\n".join(fm) + f"\n\n# {project} {tag}\n\n{body}\n\n---\n\n{footer}\n"


def build_zh(project: str, repo: str, tag: str, published: str, body_zh: str, url: str) -> str:
    fm = [
        "---",
        f'title: "{project} {tag}"',
        f'project: "{project}"',
        f'repo: "{repo}"',
        f'tag: "{tag}"',
        f'published: "{published}"',
        f'type: "{version_type(tag)}"',
        'lang: "zh"',
        "---",
    ]
    footer = (
        f"> 📦 仓库：[{repo}](https://github.com/{repo}) · 🏷️ 版本：`{tag}` · "
        f"📅 发布：{published} · [查看英文原版 Release]({url})\n\n"
        "*本文由 NextStack 自动翻译，内容以官方英文原文为准。*"
    )
    return "\n".join(fm) + f"\n\n# {project} {tag}\n\n{body_zh}\n\n---\n\n{footer}\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, help="本次最多处理的 Release 数")
    ap.add_argument("--repos", help="仅处理指定仓库，逗号分隔")
    ap.add_argument("--translate", action="store_true", help="同时生成中文译文")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    cfg = json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
    repos = args.repos.split(",") if args.repos else cfg["repos"]
    max_total = args.limit or cfg.get("max_total_per_run", 25)
    per_repo = cfg.get("max_releases_per_repo", 3)
    include_pre = cfg.get("include_prereleases", False)
    aliases = cfg.get("aliases", {})
    token = os.environ.get("GITHUB_TOKEN", "")

    state = load_state()
    processed = 0
    created: list[str] = []

    for repo in repos:
        if processed >= max_total:
            break
        project = aliases.get(repo) or repo.split("/")[1]
        try:
            releases = gh(f"/repos/{repo}/releases?per_page=20", token)
        except Exception as e:  # noqa: BLE001
            print(f"⚠️  {repo}: 拉取失败 {e}")
            continue
        if not isinstance(releases, list) or not releases:
            continue

        entry = state["repos"].setdefault(repo, {"known_tags": []})
        known = set(entry.get("known_tags", []))
        fresh = [
            r
            for r in releases
            if r.get("tag_name")
            and r["tag_name"] not in known
            and not r.get("draft")
            and (include_pre or not r.get("prerelease"))
            and len((r.get("body") or "").strip()) > 80
        ]
        if not fresh:
            continue

        print(f"📦 {repo} → {project}: {len(fresh)} 个新 Release")
        for rel in fresh[:per_repo]:
            if processed >= max_total:
                break
            tag = rel["tag_name"]
            published = (rel.get("published_at") or "")[:10]
            body = (rel.get("body") or "").strip()
            url = rel.get("html_url", "")
            fname = f"{project}_{safe_name(tag)}.md"

            if not args.dry_run:
                en_path = EN_DIR / project / fname
                en_path.parent.mkdir(parents=True, exist_ok=True)
                en_path.write_text(build_en(project, repo, tag, published, body, url), encoding="utf-8")
                created.append(str(en_path.relative_to(ROOT)))

            if args.translate:
                try:
                    body_zh = translate_markdown(body)
                except Exception as e:  # noqa: BLE001
                    print(f"   ⚠️ {tag}: 翻译失败，跳过中文版（{e}）")
                    body_zh = ""
                if body_zh:
                    zh_path = ZH_DIR / project / fname
                    if not args.dry_run:
                        zh_path.parent.mkdir(parents=True, exist_ok=True)
                        zh_path.write_text(
                            build_zh(project, repo, tag, published, body_zh, url), encoding="utf-8"
                        )
                        created.append(str(zh_path.relative_to(ROOT)))

            known.add(tag)
            entry["known_tags"] = sorted(known)[-80:]
            processed += 1
            print(f"   ✅ {tag}")
            time.sleep(1)

    if not args.dry_run:
        save_state(state)

    print(f"\n完成：处理 {processed} 个 Release，写入 {len(created)} 个文件")
    return 0


if __name__ == "__main__":
    sys.exit(main())
