#!/usr/bin/env python3
"""
搜索表现数据采集：把外部信号统一成一种快照格式。

为什么要有这一层：闭环的下游（decide/apply）只应该认识一种数据结构，
而不是分别处理 GSC 的嵌套 metrics 数组、Bing 的 /Date(123)/ 怪格式、
以及从后台导出的各种表头。把它们归一化一次，规则逻辑就不用关心来源。

三条通道，按「可用性」排序：
  1. file  零凭据。从 Search Console 界面导出 CSV 丢进 data/seo/inbox/
  2. bing  API Key，免费自助申请。可以直接定时跑，是唯一的全自动信号
  3. gsc   Service Account。数据最权威，但需要 GCP 项目 + 域名验证

这里刻意不隐藏一件事：**Google 占绝大多数流量，但它的数据最难自动拿**。
所以闭环在只有 Bing 数据时也能跑——Bing 索引的表现对判断「这个页面族
有没有真实需求」是有效的代理信号，虽然量级小一个数量级。
"""

from __future__ import annotations

import argparse
import base64
import csv
import io
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from loop_common import (  # noqa: E402
    DATA, HOST, INBOX, page_family, normalize_path, read_json, write_json, today,
)

# GSC 界面导出的表头随语言变。全部认一遍，比要求用户改表头现实。
HEADER_MAP = {
    "page": ["page", "网页", "热门网页", "top pages", "url", "网址"],
    "query": ["query", "查询", "热门查询", "top queries", "关键词"],
    "clicks": ["clicks", "点击次数", "点击", "点击量"],
    "impressions": ["impressions", "展示次数", "展示", "曝光次数"],
    "ctr": ["ctr", "点击率", "点击率 (ctr)"],
    "position": ["position", "平均排名", "排名"],
}


def _pick(row: dict, field: str) -> str:
    for key in HEADER_MAP[field]:
        for actual, value in row.items():
            if actual.strip().lower() == key.lower():
                return (value or "").strip()
    return ""


def _num(raw: str) -> float:
    """'1,234' / '7.5%' / '' 都要能吃下去。"""
    s = (raw or "").strip().replace(",", "").replace("%", "").replace("\u00a0", "")
    if not s or s in ("-", "—"):
        return 0.0
    try:
        return float(s)
    except ValueError:
        return 0.0


def _merge(pages: dict, path: str, clicks: float, impressions: float, position: float) -> None:
    """
    同一页面可能出现在多行（按查询维度导出时）。展示量相加、排名按展示
    加权平均，这样重跑同一份文件不会让数字翻倍——幂等性在这里很重要，
    因为用户很可能把同一份导出丢进 inbox 两次。
    """
    path = normalize_path(path)
    if not path:
        return
    cur = pages.setdefault(path, {"clicks": 0.0, "impressions": 0.0, "pos_weight": 0.0, "queries": []})
    cur["clicks"] += clicks
    cur["impressions"] += impressions
    cur["pos_weight"] += position * impressions


# ---------------------------------------------------------------- 源：文件


def from_files(inbox: Path = INBOX) -> tuple[dict, list[str]]:
    pages: dict[str, dict] = {}
    used: list[str] = []
    if not inbox.exists():
        return pages, used
    for f in sorted(list(inbox.glob("*.csv")) + list(inbox.glob("*.json"))):
        try:
            if f.suffix == ".json":
                rows = json.loads(f.read_text(encoding="utf-8"))
                if isinstance(rows, dict):
                    rows = rows.get("rows") or rows.get("pages") or []
                for r in rows:
                    path = r.get("page") or r.get("url") or ""
                    if path:
                        _merge(pages, path, float(r.get("clicks", 0)),
                               float(r.get("impressions", 0)), float(r.get("position", 0)))
            else:
                # GSC 的 CSV 是 UTF-8 BOM + 可能带千分位
                text = f.read_text(encoding="utf-8-sig", errors="replace")
                for row in csv.DictReader(io.StringIO(text)):
                    path = _pick(row, "page")
                    if not path:
                        continue
                    ctr = _num(_pick(row, "ctr"))
                    imp = _num(_pick(row, "impressions"))
                    clicks = _num(_pick(row, "clicks"))
                    # 只导出了点击率没导数时反推，避免整列变 0
                    if not clicks and ctr and imp:
                        clicks = ctr / 100 * imp if ctr > 1 else ctr * imp
                    _merge(pages, path, clicks, imp, _num(_pick(row, "position")))
            used.append(f.name)
        except (OSError, json.JSONDecodeError, csv.Error) as e:
            print(f"[telemetry] 跳过 {f.name}：{e}", file=sys.stderr)
    return pages, used


# ---------------------------------------------------------------- 源：Bing

BING = "https://ssl.bing.com/webmaster/api.svc/json"


def _bing_call(api: str, key: str, site: str) -> list[dict]:
    qs = urllib.parse.urlencode({"apikey": key, "siteUrl": site})
    url = f"{BING}/{api}?{qs}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=45) as r:
        body = json.loads(r.read().decode("utf-8"))
    rows = body.get("d") or []
    return rows if isinstance(rows, list) else []


def from_bing(key: str, site: str = f"https://{HOST}/") -> tuple[dict, list[str]]:
    """
    Bing Webmaster API。GetPageStats 给页面级展示/点击，
    不需要 OAuth——一个 URL 参数就够，所以它能每天自动跑。
    """
    pages: dict[str, dict] = {}
    for api in ("GetPageStats", "GetQueryStats"):
        try:
            rows = _bing_call(api, key, site)
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "replace")[:200]
            print(f"[telemetry] Bing {api} HTTP {e.code}: {detail}", file=sys.stderr)
            continue
        except (urllib.error.URLError, json.JSONDecodeError, TimeoutError) as e:
            print(f"[telemetry] Bing {api} 失败：{e}", file=sys.stderr)
            continue
        for r in rows:
            path = r.get("Page") or r.get("Url") or ""
            if not path and r.get("Query"):
                continue  # 只有查询没有页面，无法归属
            _merge(
                pages, path,
                float(r.get("Clicks") or 0),
                float(r.get("Impressions") or 0),
                float(r.get("AvgImpressionPosition") or 0),
            )
    return pages, ["bing-webmaster-api"]


# ---------------------------------------------------------------- 源：GSC


def _sa_token(sa: dict) -> str:
    """
    Service Account → access token。

    手写 JWT 而不是依赖 google-auth：这个脚本要在没有 pip 环境的
    机器上也能跑，而 RS256 签名只需要 cryptography 一个包。
    """
    try:
        from cryptography.hazmat.primitives import hashes, serialization
        from cryptography.hazmat.primitives.asymmetric import padding
    except ImportError:
        raise SystemExit(
            "GSC 通道需要 cryptography：pip install cryptography\n"
            "或者改用零凭据方式：把 Search Console 导出的 CSV 放进 data/seo/inbox/"
        )

    now = int(time.time())
    header = {"alg": "RS256", "typ": "JWT"}
    claim = {
        "iss": sa["client_email"],
        "scope": "https://www.googleapis.com/auth/webmasters.readonly",
        "aud": "https://oauth2.googleapis.com/token",
        "iat": now,
        "exp": now + 3600,
    }

    def seg(obj: dict) -> str:
        return base64.urlsafe_b64encode(json.dumps(obj).encode()).rstrip(b"=").decode()

    signing_input = f"{seg(header)}.{seg(claim)}"
    key = serialization.load_pem_private_key(sa["private_key"].encode(), password=None)
    sig = key.sign(signing_input.encode(), padding.PKCS1v15(), hashes.SHA256())
    jwt = f"{signing_input}.{base64.urlsafe_b64encode(sig).rstrip(b'=').decode()}"

    data = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }).encode()
    req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())["access_token"]


def from_gsc(sa_path: Path, site: str = f"https://{HOST}/", days: int = 28) -> tuple[dict, list[str]]:
    sa = read_json(sa_path)
    if not sa:
        raise SystemExit(f"找不到服务账号文件：{sa_path}")
    token = _sa_token(sa)
    end = date.today() - timedelta(days=2)  # GSC 有 2–3 天延迟
    start = end - timedelta(days=days - 1)
    body = json.dumps({
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": ["page"],
        "rowLimit": 25000,
    }).encode()
    url = ("https://searchconsole.googleapis.com/webmasters/v3/sites/"
           f"{urllib.parse.quote(site, safe='')}/searchAnalytics/query")
    req = urllib.request.Request(url, data=body, headers={
        "Authorization": f"Bearer {token}", "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req, timeout=60) as r:
        payload = json.loads(r.read().decode())

    pages: dict[str, dict] = {}
    for row in payload.get("rows") or []:
        keys = row.get("keys") or []
        if not keys:
            continue
        _merge(pages, keys[0], float(row.get("clicks", 0)),
               float(row.get("impressions", 0)), float(row.get("position", 0)))
    return pages, [f"gsc:{start}~{end}"]


# ---------------------------------------------------------------- 落盘


def build_snapshot(pages: dict, sources: list[str], window_days: int) -> dict:
    known = [c for c in (read_json(DATA.parent / "langs.json", {}) or {}).get("codes", [])]
    if not known:
        # 兜底：直接从闸门文件读已知语言，避免多一份需要同步的清单
        gate = read_json(Path(__file__).resolve().parents[2] / "site/src/data/index-gate.json", {}) or {}
        known = list((gate.get("locales") or {}).keys())

    out_pages: dict[str, dict] = {}
    for path, m in pages.items():
        imp = m["impressions"]
        out_pages[path] = {
            "clicks": round(m["clicks"], 2),
            "impressions": round(imp, 2),
            "position": round(m["pos_weight"] / imp, 1) if imp else 0.0,
            "family": page_family(path, known),
        }
    return {
        "_meta": {
            "captured": date.today().isoformat(),
            "sources": sources,
            "window_days": window_days,
            "pages": len(out_pages),
            "note": "页面级搜索表现快照。clicks/impressions 为窗口内累计，position 按展示量加权。",
        },
        "pages": out_pages,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description="采集搜索表现数据")
    ap.add_argument("--source", choices=["file", "bing", "gsc", "auto"], default="auto")
    ap.add_argument("--days", type=int, default=28)
    ap.add_argument("--site", default=f"https://{HOST}/")
    ap.add_argument("--out", default="")
    args = ap.parse_args()

    key = os.environ.get("BING_WEBMASTER_KEY", "").strip()
    sa = os.environ.get("GSC_SERVICE_ACCOUNT", "").strip()

    pages: dict[str, dict] = {}
    sources: list[str] = []

    if args.source in ("bing", "auto") and key:
        p, s = from_bing(key, args.site)
        pages.update(p)
        sources += s
    if args.source in ("gsc", "auto") and sa:
        try:
            p, s = from_gsc(Path(sa), args.site, args.days)
            pages.update(p)
            sources += s
        except SystemExit as e:
            print(f"[telemetry] {e}", file=sys.stderr)
    if args.source in ("file", "auto"):
        p, s = from_files()
        # 文件优先级最低：API 有数据时以 API 为准，文件只补缺
        for k, v in p.items():
            pages.setdefault(k, v)
        sources += s

    if not pages:
        print(
            "[telemetry] 没有任何数据。三条路任选其一：\n"
            "  1) Search Console → 效果 → 导出 CSV → 放进 data/seo/inbox/\n"
            "  2) 设 BING_WEBMASTER_KEY 环境变量\n"
            "  3) 设 GSC_SERVICE_ACCOUNT 指向服务账号 JSON",
            file=sys.stderr,
        )
        return 2

    snap = build_snapshot(pages, sources, args.days)
    out = Path(args.out) if args.out else DATA / f"snapshot-{today()}.json"
    write_json(out, snap)
    write_json(DATA / "latest.json", snap)
    print(f"[telemetry] {len(snap['pages'])} 个页面，来源 {'+'.join(sources) or 'n/a'} → {out}")

    # 采集之后立刻归位，避免同一份数据下次被当成新数据重复累加
    moved = 0
    for f in list(INBOX.glob("*")):
        if f.suffix in (".csv", ".json") and f.is_file():
            done = INBOX / "done"
            done.mkdir(exist_ok=True)
            f.rename(done / f"{date.today()}-{f.name}")
            moved += 1
    if moved:
        print(f"[telemetry] {moved} 个导出文件已归档到 inbox/done/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
