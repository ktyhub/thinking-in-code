#!/usr/bin/env python3
"""
NextStack Release 追踪采集器

每日从 GitHub 拉取追踪仓库的新 Release，翻译为中文后生成站点页面，
写入 docs/zh/release_note/{repo}/{repo}_{tag}.md，由 GitHub Actions 自动提交并部署。

用法:
  python collect.py                       # 正常运行（按 config.json）
  python collect.py --limit 3             # 本次最多处理 3 个 Release
  python collect.py --repos apache/kafka  # 只处理指定仓库
  python collect.py --dry-run             # 只打印将要做的事，不写文件
"""
import argparse
import json
import os
import re
import sys
import time
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translate import translate_markdown, translate_plain  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]                      # 仓库根目录
OUT_DIR = ROOT / "docs" / "zh" / "release_note"
STATE_FILE = HERE / "state.json"
CONFIG_FILE = HERE / "config.json"
API = "https://api.github.com"
UNSAFE_CHARS = re.compile(r"[^\w.\-]+")     # 文件名安全化


# ---------- GitHub API ----------
def gh_request(path: str, token: str) -> dict | list:
    url = path if path.startswith("http") else API + path
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "nextstack-release-tracker",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except Exception as e:  # noqa: BLE001
            if attempt == 2:
                raise
            time.sleep(3 * (attempt + 1))
    return {}


# ---------- 状态 ----------
def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    return {"repos": {}}


def save_state(state: dict) -> None:
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2),
                          encoding="utf-8")


# ---------- 页面生成 ----------
def safe_name(s: str) -> str:
    return UNSAFE_CHARS.sub("_", s).strip("_") or "unknown"


def project_dir(repo: str) -> Path:
    name = repo.split("/")[1]
    d = OUT_DIR / name
    d.mkdir(parents=True, exist_ok=True)
    pages = d / ".pages"
    if not pages.exists():
        pages.write_text(f"title: {name}\ncollapse: true\n", encoding="utf-8")
    return d


def build_page(repo: str, release: dict, desc_zh: str | None) -> str:
    name = repo.split("/")[1]
    tag = release.get("tag_name") or release.get("name") or ""
    published = (release.get("published_at") or "")[:10]
    body = release.get("body") or ""

    parts = [
        "---",
        f'title: "{name} {tag}"',
    ]
    if desc_zh:
        short = desc_zh[:150]
        parts.append(f'description: "{short}"')
    parts += ["---", "", f"# {name} {tag}", ""]
    if desc_zh:
        parts += [f"### {name} 是什么", "", desc_zh, ""]
    parts += [
        f"### {name} {tag} 版本更新了什么",
        "",
        body,
        "",
        "---",
        "",
        f"> 📦 仓库：[{repo}](https://github.com/{repo}) "
        f"· 🏷️ 版本：`{tag}` · 📅 发布：{published} · "
        f"[查看英文原版 Release]({release.get('html_url', '')})",
        "",
        "*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*",
    ]
    return "\n".join(parts) + "\n"


# ---------- 主流程 ----------
def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, help="本次最多处理的 Release 数（覆盖配置）")
    parser.add_argument("--repos", help="仅处理指定仓库，逗号分隔")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    cfg = json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
    repos = args.repos.split(",") if args.repos else cfg["repos"]
    max_total = args.limit if args.limit else cfg.get("max_total_per_run", 25)
    per_repo = cfg.get("max_releases_per_repo", 3)
    include_pre = cfg.get("include_prereleases", False)
    token = os.environ.get("GITHUB_TOKEN", "")

    state = load_state()
    processed, created_files, skipped = 0, [], []

    for repo in repos:
        if processed >= max_total:
            break
        try:
            releases = gh_request(f"/repos/{repo}/releases?per_page=20", token)
        except Exception as e:  # noqa: BLE001
            print(f"⚠️  {repo}: 拉取失败 {e}")
            continue
        if not releases:
            continue

        # 仓库描述（首次翻译后缓存）
        entry = state["repos"].setdefault(repo, {"known_tags": []})
        desc_zh = entry.get("description_zh")
        if not desc_zh:
            try:
                info = gh_request(f"/repos/{repo}", token)
                desc_zh = translate_plain(info.get("description") or "")
                entry["description_zh"] = desc_zh or ""
            except Exception:  # noqa: BLE001
                desc_zh = None

        known = set(entry.get("known_tags", []))
        fresh = [r for r in releases
                 if r.get("tag_name") and r["tag_name"] not in known
                 and (include_pre or not r.get("prerelease"))
                 and (r.get("body") or "").strip()]
        if not fresh:
            continue

        d = project_dir(repo) if not args.dry_run else OUT_DIR / repo.split("/")[1]
        print(f"📦 {repo}: {len(fresh)} 个新 Release（本次最多处理 {per_repo}）")

        for rel in fresh[:per_repo]:
            if processed >= max_total:
                break
            tag = rel["tag_name"]
            try:
                body_zh = translate_markdown(rel["body"])
            except Exception as e:  # noqa: BLE001
                print(f"   ⚠️ {tag}: 翻译失败，降级使用英文原文（{e}）")
                body_zh = rel["body"]

            rel["body"] = body_zh
            page = build_page(repo, rel, desc_zh)
            fname = f"{repo.split('/')[1]}_{safe_name(tag)}.md"
            fpath = d / fname
            if args.dry_run:
                print(f"   (dry-run) 将生成 {fpath.relative_to(ROOT)}")
            else:
                fpath.write_text(page, encoding="utf-8")
                created_files.append(str(fpath.relative_to(ROOT)))
            known.add(tag)
            entry["known_tags"] = sorted(known)[-50:]   # 状态只留最近 50 个
            processed += 1
            print(f"   ✅ {tag}")
            time.sleep(1)  # 温和限速

    if not args.dry_run:
        save_state(state)

    print(f"\n完成：本次处理 {processed} 个 Release，新增 {len(created_files)} 个页面")
    if created_files:
        print("新增文件：")
        for f in created_files:
            print(f"  {f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
