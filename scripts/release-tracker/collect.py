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
  python collect.py                     # 扫一轮：热仓库全扫 + 其余按游标轮转
  python collect.py --translate         # 同时生成中文译文
  python collect.py --batch 40          # 本轮只看 40 个仓库
  python collect.py --full              # 忽略轮转，扫全部仓库（首次回填用）
  python collect.py --limit 5           # 本次最多处理 5 条
  python collect.py --repos apache/kafka
  python collect.py --dry-run

扫描策略:
  GitHub 认证后 5000 请求/小时，一仓库一个请求，156 个仓库一轮远用不满。
  但仓库数会持续往外扩（千万页要 1000+ 仓库），所以按批走：
  配置里的 scan.hot 每轮必扫，其余按 state.json 的 cursor 轮转；
  每次响应都刷新 X-RateLimit-Remaining，低于 scan.reserve_requests 就提前收工，
  而不是等到 403 再空等。
"""
from __future__ import annotations

import argparse
import json
import os
import random
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
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

# 本轮 API 配额状态，由响应头实时更新。None 表示还没拿到响应头。
RATE: dict[str, int | None] = {"remaining": None, "limit": None, "reset": None}


class RateLimited(Exception):
    """配额耗尽且恢复时间太远，本轮应当体面收工而不是空等。"""


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
                # 每次响应都刷新配额，供主循环判断要不要停
                for key, header in (
                    ("remaining", "X-RateLimit-Remaining"),
                    ("limit", "X-RateLimit-Limit"),
                    ("reset", "X-RateLimit-Reset"),
                ):
                    raw = resp.headers.get(header)
                    if raw and raw.isdigit():
                        RATE[key] = int(raw)
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if e.code in (403, 429):
                # 优先用服务端给的恢复时间，其次是 Retry-After
                wait = 30
                retry_after = e.headers.get("Retry-After")
                reset = e.headers.get("X-RateLimit-Reset")
                if retry_after and retry_after.isdigit():
                    wait = int(retry_after)
                elif reset and reset.isdigit() and RATE["remaining"] == 0:
                    wait = max(0, int(reset) - int(time.time())) + 3
                if wait > 120:
                    raise RateLimited(f"配额恢复还需 {wait // 60} 分钟") from e
                print(f"   ⚠️  触发限流，等待 {wait}s")
                time.sleep(wait)
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
        state = json.loads(STATE_FILE.read_text(encoding="utf-8"))
    else:
        state = {}
    state.setdefault("repos", {})
    state.setdefault("cursor", 0)   # 轮转指针：上次扫到第几个非热仓库
    return state


def save_state(state: dict) -> None:
    state["last_run"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


def pick_repos(all_repos: list[str], hot: list[str], cursor: int, n: int) -> tuple[list[str], int]:
    """热仓库每轮必扫，其余按游标轮转，避免一轮打满配额。

    158 个仓库一次全扫也就 158 个请求，配额其实够；但仓库数量还要往外扩
    （千万页需要 1000+ 仓库），所以从现在就按批次走，扩到几千个也不用改逻辑。
    """
    hot = [r for r in hot if r in all_repos]
    rest = [r for r in all_repos if r not in set(hot)]
    if n <= len(hot) or not rest:
        return hot[:n], cursor

    need = min(n - len(hot), len(rest))
    start = cursor % len(rest)
    picked = [rest[(start + i) % len(rest)] for i in range(need)]
    return hot + picked, (start + need) % len(rest)


# ---------- 生成 ----------
def safe_name(s: str) -> str:
    return UNSAFE.sub("_", s).strip("_") or "unknown"


PY_TAG = re.compile(r"^([A-Za-z0-9._\-]+?)\s*==?\s*(v?\d[^\s]*)$")


def display_version(tag: str, project: str) -> str | None:
    """把各种 tag 归一成可读的版本号；根本不是版本号的返回 None。

    monorepo 的 tag 常写成 `langchain-openai==1.8.0`。直接当版本用，会被站点的
    「去掉项目名前缀」规则切成 `openai_1.8.0`，排序和展示都会坏掉。
    这里保留包名，只去掉 `==`：
      langchain-openai==1.8.0 → "langchain-openai 1.8.0"
      langchain==1.5.0        → "1.5.0"（包名就是项目名时没必要重复）
    """
    t = tag.strip()
    m = PY_TAG.match(t)
    if m:
        pkg, ver = m.group(1), m.group(2)
        if pkg.lower().replace("_", "-") == project.lower().replace("_", "-"):
            return ver
        return f"{pkg} {ver}"
    if not re.search(r"\d", t):
        return None  # `preview-seed-fixture` 这类不是版本号
    return t


def yaml_q(s: str) -> str:
    """安全地把字符串放进 YAML 双引号。

    正文里出现 `cosign verify \\ --key ...` 这种尾巴带反斜杠的片段时，
    直接写进 `summary: "..."` 会让 YAML 报 unknown escape sequence，
    整个 Astro 构建会挂掉——所以反斜杠、双引号、控制字符都要转义。
    """
    s = "".join(ch for ch in s if ch >= " " or ch == "\t")
    return s.replace("\\", "\\\\").replace('"', '\\"')


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


def build_en(project: str, repo: str, tag: str, version: str, published: str, body: str, url: str) -> str:
    fm = [
        "---",
        f'title: "{yaml_q(f"{project} {version}")}"',
        f'project: "{yaml_q(project)}"',
        f'repo: "{yaml_q(repo)}"',
        f'tag: "{yaml_q(tag)}"',
        f'version: "{yaml_q(version)}"',
        f'published: "{published}"',
        f'type: "{version_type(version)}"',
        'lang: "en"',
    ]
    summary = summarize(body)
    if summary:
        fm.append(f'summary: "{yaml_q(summary)}"')
    fm.append("---")
    footer = (
        f"> **Source** [{repo}](https://github.com/{repo}) · `{tag}` · {published} · "
        f"[upstream release]({url})\n\n"
        "*Mirrored verbatim for indexing. All rights belong to the upstream project.*"
    )
    return "\n".join(fm) + f"\n\n# {project} {tag}\n\n{body}\n\n---\n\n{footer}\n"


def build_zh(project: str, repo: str, tag: str, version: str, published: str, body_zh: str, url: str) -> str:
    fm = [
        "---",
        f'title: "{yaml_q(f"{project} {version}")}"',
        f'project: "{yaml_q(project)}"',
        f'repo: "{yaml_q(repo)}"',
        f'tag: "{yaml_q(tag)}"',
        f'version: "{yaml_q(version)}"',
        f'published: "{published}"',
        f'type: "{version_type(version)}"',
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
    ap.add_argument("--batch", type=int, help="本次扫描的仓库数（默认取 config.scan.repos_per_run）")
    ap.add_argument("--full", action="store_true", help="忽略轮转，扫全部仓库")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    cfg = json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
    scan = cfg.get("scan", {})
    all_repos = cfg["repos"]
    max_total = args.limit or cfg.get("max_total_per_run", 40)
    per_repo = cfg.get("max_releases_per_repo", 3)
    include_pre = cfg.get("include_prereleases", False)
    aliases = cfg.get("aliases", {})
    token = os.environ.get("GITHUB_TOKEN", "")
    gap = max(0, scan.get("min_gap_ms", 350)) / 1000
    reserve = scan.get("reserve_requests", 200)

    state = load_state()

    if args.repos:
        repos, cursor = args.repos.split(","), state["cursor"]
    elif args.full:
        repos, cursor = list(all_repos), state["cursor"]
    else:
        repos, cursor = pick_repos(
            all_repos, scan.get("hot", []), state["cursor"],
            args.batch or scan.get("repos_per_run", 70),
        )

    processed = 0
    created: list[str] = []
    scanned = 0
    print(f"扫描 {len(repos)}/{len(all_repos)} 个仓库（热 {len(scan.get('hot', []))} + 轮转）")

    for repo in repos:
        if processed >= max_total:
            print("⏸️  已达本轮 Release 上限，剩余仓库留给下一轮")
            break
        if RATE["remaining"] is not None and RATE["remaining"] <= reserve:
            print(f"⏸️  API 剩余配额 {RATE['remaining']}，低于保留线 {reserve}，本轮收工")
            break

        project = aliases.get(repo) or repo.split("/")[1]
        try:
            releases = gh(f"/repos/{repo}/releases?per_page=20", token)
            scanned += 1
        except RateLimited as e:
            print(f"⏸️  {e}，本轮收工")
            break
        except Exception as e:  # noqa: BLE001
            print(f"⚠️  {repo}: 拉取失败 {e}")
            continue
        if not isinstance(releases, list) or not releases:
            if gap:
                time.sleep(gap + random.uniform(0, 0.4))
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
            if gap:
                time.sleep(gap + random.uniform(0, 0.4))
            continue

        print(f"📦 {repo} → {project}: {len(fresh)} 个新 Release")
        for rel in fresh[:per_repo]:
            if processed >= max_total:
                break
            tag = rel["tag_name"]
            version = display_version(tag, project)
            if not version:
                # 不是版本号的 tag（如 preview-seed-fixture）没有留档价值，
                # 但必须记进 known，否则每轮都会重新出现
                known.add(tag)
                entry["known_tags"] = sorted(known)[-80:]
                print(f"   ⏭️  {tag}: 不是版本号，跳过")
                continue
            published = (rel.get("published_at") or "")[:10]
            body = (rel.get("body") or "").strip()
            url = rel.get("html_url", "")
            fname = f"{project}_{safe_name(version)}.md"

            if not args.dry_run:
                en_path = EN_DIR / project / fname
                en_path.parent.mkdir(parents=True, exist_ok=True)
                en_path.write_text(
                    build_en(project, repo, tag, version, published, body, url), encoding="utf-8"
                )
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
                            build_zh(project, repo, tag, version, published, body_zh, url), encoding="utf-8"
                        )
                        created.append(str(zh_path.relative_to(ROOT)))

            known.add(tag)
            entry["known_tags"] = sorted(known)[-80:]
            processed += 1
            print(f"   ✅ {version}" + (f"  ({tag})" if version != tag else ""))
            time.sleep(1)

    state["cursor"] = cursor
    if not args.dry_run:
        save_state(state)

    quota = (
        f"剩余 {RATE['remaining']}/{RATE['limit']}" if RATE["remaining"] is not None else "未取得"
    )
    print(
        f"\n完成：扫描 {scanned} 个仓库，处理 {processed} 个 Release，"
        f"写入 {len(created)} 个文件｜API 配额 {quota}｜下轮游标 {cursor}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
