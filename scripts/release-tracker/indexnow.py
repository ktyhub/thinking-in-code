#!/usr/bin/env python3
"""
IndexNow 提交器：把新增 / 变更的 URL 推给 Bing、Yandex、Seznam、Naver。

为什么需要它：Google 有 sitemap，但新站从「sitemap 被发现」到「实际抓取」
常常要几天到几周；构建出几千个新页面后干等，等于把内容优势浪费掉。
IndexNow 是这几个引擎共用的开放协议——不需要账号、不需要 API key，
只要在站点根目录放一个 `<key>.txt` 文件证明域名归属，POST 一次就是
几小时内的抓取排队。

Google 不支持 IndexNow（它只认 sitemap + 内链），所以这只是补一条快车道，
不替代 sitemap 与内链建设。

用法：
    python3 scripts/release-tracker/indexnow.py --dry-run        # 看会提交什么
    python3 scripts/release-tracker/indexnow.py                  # 只提交新增 URL
    python3 scripts/release-tracker/indexnow.py --all            # 全量（首次）
    python3 scripts/release-tracker/indexnow.py --limit 500       # 限量

状态存在 .cache/indexnow.json，只记录已经成功提交过的 URL，
所以日常 CI 里跑它只会推真正的新页面，不会反复骚扰。
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
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[2]
DIST = ROOT / "site" / "dist"
PUBLIC = ROOT / "site" / "public"
CACHE = ROOT / ".cache"
STATE = CACHE / "indexnow.json"

HOST = "www.stags.cn"
ENDPOINT = "https://api.indexnow.org/indexnow"
# 协议单次最多 10,000 条；保守一点，分片更不容易被 rejected
BATCH = 2000


def find_key() -> str | None:
    """public/ 下形如 <32位十六进制>.txt 的文件即 IndexNow 密钥"""
    if not PUBLIC.is_dir():
        return None
    for f in PUBLIC.iterdir():
        if f.suffix == ".txt" and re.fullmatch(r"[0-9a-f]{16,64}", f.stem):
            return f.stem
    return None


def ensure_key() -> str:
    """没有密钥文件就生成一个，并写入 public/（部署后即可公开访问）"""
    key = find_key()
    if key:
        return key
    key = os.urandom(16).hex()
    (PUBLIC / f"{key}.txt").write_text(key, encoding="utf-8")
    print(f"[indexnow] 已生成密钥文件 site/public/{key}.txt")
    return key


def remote_sitemaps() -> list[bytes]:
    """
    线上模式：读已部署的 sitemap-index，逐个拉子 sitemap。

    为什么不在构建产物里读：部署完成和「提交给搜索引擎」之间必须没有竞态。
    在 build job 里提交，抓取器可能早于 CDN 生效的几秒点进来，拿到 404；
    IndexNow 不会因为你晚点再说就自动重试，所以要等站点真的可访问。
    """
    base = f"https://{HOST}/sitemap-index.xml"
    try:
        with urllib.request.urlopen(base, timeout=30) as r:
            index = r.read()
    except (urllib.error.URLError, urllib.error.HTTPError) as e:
        raise SystemExit(f"读取线上 sitemap 失败：{e}")
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    out = [index]
    for loc in ElementTree.fromstring(index).findall(".//sm:sitemap/sm:loc", ns):
        try:
            with urllib.request.urlopen(loc.text.strip(), timeout=30) as r:
                out.append(r.read())
        except (urllib.error.URLError, urllib.error.HTTPError):
            continue
    return out


def sitemap_urls(remote: bool = False) -> list[str]:
    """收集全部 URL：remote=True 读线上，否则读构建产物"""
    if remote:
        blobs = remote_sitemaps()
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls: list[str] = []
        seen: set[str] = set()
        for blob in blobs:
            try:
                root = ElementTree.fromstring(blob)
            except ElementTree.ParseError:
                continue
            for loc in root.findall(".//sm:url/sm:loc", ns):
                u = loc.text.strip()
                if u not in seen:
                    seen.add(u)
                    urls.append(u)
        return urls

    files = sorted(DIST.glob("sitemap-*.xml")) + sorted(DIST.glob("sitemap*.xml"))
    if not files:
        raise SystemExit("没有找到 sitemap，请先 npm run build")

    urls: list[str] = []
    seen: set[str] = set()

    def collect(path: Path) -> None:
        try:
            tree = ElementTree.parse(path)
        except ElementTree.ParseError:
            return
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        # sitemapindex 里套着子 sitemap
        for loc in tree.findall(".//sm:sitemap/sm:loc", ns):
            child = DIST / Path(loc.text.strip()).name
            if child.exists() and child != path:
                collect(child)
        for loc in tree.findall(".//sm:url/sm:loc", ns):
            u = loc.text.strip()
            if u not in seen:
                seen.add(u)
                urls.append(u)

    for f in files:
        collect(f)
    return urls


def load_state() -> set[str]:
    if STATE.exists():
        try:
            return set(json.loads(STATE.read_text(encoding="utf-8")).get("submitted", []))
        except (json.JSONDecodeError, OSError):
            return set()
    return set()


def save_state(done: set[str]) -> None:
    CACHE.mkdir(exist_ok=True)
    STATE.write_text(
        json.dumps({"submitted": sorted(done), "updated": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())},
                   ensure_ascii=False),
        encoding="utf-8",
    )


def submit(key: str, urls: list[str]) -> bool:
    body = json.dumps({
        "host": HOST,
        "key": key,
        "keyLocation": f"https://{HOST}/{key}.txt",
        "urlList": urls,
    }).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            code = resp.status
            # 200 = 接受，202 = 已接收待处理，都属于成功
            print(f"[indexnow] {len(urls)} URL → HTTP {code}")
            return code in (200, 202)
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "replace")[:300]
        print(f"[indexnow] HTTP {e.code}: {detail}", file=sys.stderr)
        # 429 是限流，等一会儿值得重试一次
        if e.code == 429:
            time.sleep(30)
            return False
        raise SystemExit(1) from e
    except urllib.error.URLError as e:
        print(f"[indexnow] 网络错误: {e.reason}", file=sys.stderr)
        return False


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="只打印将要提交的数量与样例")
    ap.add_argument("--all", action="store_true", help="忽略历史记录，全量提交")
    ap.add_argument("--limit", type=int, default=0, help="本次最多提交多少个 URL")
    ap.add_argument("--remote", action="store_true", help="从线上 sitemap 读取 URL（部署后跑，避免竞态）")
    args = ap.parse_args()

    key = ensure_key()
    urls = sitemap_urls(remote=args.remote)
    done = set() if args.all else load_state()
    fresh = [u for u in urls if u not in done]
    if args.limit:
        fresh = fresh[: args.limit]

    print(f"[indexnow] sitemap {len(urls)} 条，历史已提交 {len(done)} 条，本次新增 {len(fresh)} 条")
    if not fresh:
        return 0
    for u in fresh[:5]:
        print("  ·", u)
    if args.dry_run or len(fresh) > 5:
        print(f"  … 共 {len(fresh)} 条")

    if args.dry_run:
        return 0

    ok = 0
    for i in range(0, len(fresh), BATCH):
        chunk = fresh[i : i + BATCH]
        if submit(key, chunk):
            done.update(chunk)
            ok += len(chunk)
            save_state(done)
        time.sleep(2)

    print(f"[indexnow] 完成，已提交 {ok}/{len(fresh)}")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
