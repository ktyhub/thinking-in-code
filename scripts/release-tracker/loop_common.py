"""
闭环优化的共享底座：路径约定、页面归类、账本读写。

这个模块不含任何判断逻辑——判断在 loop_decide.py，写入在 loop_apply.py。
分开的理由：判断要能单独跑（--dry-run 看提案）而不产生任何副作用，
把 IO 混进去之后就很难保证「只看不写」。

术语：
  snapshot  一次搜索数据快照（某天从 GSC / Bing 拉下来的原始行）
  metric    从 snapshot 聚合出来的页面级指标
  proposal  一条带证据的变更提案（decide 产出，此时还没生效）
  record    账本里的一条已完成变更（apply 产出，含 before 快照，可回滚）
"""

from __future__ import annotations

import json
import os
import re
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Iterable

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "site"
DATA = ROOT / "data" / "seo"
INBOX = DATA / "inbox"
LEDGER = ROOT / "data" / "loop-ledger.jsonl"

CONFIG = Path(__file__).resolve().parent / "config.json"
LANGUAGES = Path(__file__).resolve().parent / "languages.json"
GATE = SITE / "src" / "data" / "index-gate.json"
LOOP_STATE = SITE / "src" / "data" / "loop-state.json"

HOST = "www.stags.cn"


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def today() -> str:
    return utcnow().strftime("%Y-%m-%d")


def read_json(path: Path, default: Any = None) -> Any:
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        raise SystemExit(f"{path.name} 不是合法 JSON：{e}") from e


def write_json(path: Path, obj: Any) -> None:
    """
    原子写入。loop 会改 index-gate.json 这种「一改就影响全站索引」的文件，
    中途被打断写出半个 JSON，下一次构建会直接失败。
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(tmp, path)


# ---------------------------------------------------------------- 页面归类

# 语言前缀只认已知的两位/三位码，避免把 /compare/ 当成语言
LOCALE_RE = re.compile(r"^/([a-z]{2}(?:-[a-z]{2,4})?)(/|$)")


def normalize_path(url_or_path: str) -> str:
    """
    统一成「带前导斜杠、带尾斜杠、无域名」的路径。

    GSC 给的是完整 URL（https://www.stags.cn/compare/x/），Bing 给的是
    http://www.stags.cn/compare/x，导出的 CSV 可能两者混着来。不归一化
    就没法和 sitemap / 页面路径对上，所有 join 都会静默失配。
    """
    p = url_or_path.strip()
    p = re.sub(r"^https?://[^/]+", "", p)
    p = p.split("?")[0].split("#")[0]
    if not p.startswith("/"):
        p = "/" + p
    if not p.endswith("/") and "." not in p.rsplit("/", 1)[-1]:
        p += "/"
    return p


def split_locale(path: str, known: Iterable[str]) -> tuple[str, str]:
    """返回 (locale, 去掉语言前缀后的路径)。en 没有前缀，视为默认。"""
    m = LOCALE_RE.match(path)
    if m and m.group(1) in set(known):
        rest = path[m.end(1):] or "/"
        return m.group(1), rest if rest.startswith("/") else "/" + rest
    return "en", path


def page_family(path: str, known: Iterable[str]) -> str:
    """
    页面族。族是闭环的基本操作单位：单页数据太稀疏（很多页一天 0 展示），
    按族聚合才有统计意义，而族级决策又能直接落到组件的排序/内链上。
    """
    _, rest = split_locale(path, known)
    if rest in ("/", ""):
        return "home"
    seg = rest.strip("/").split("/")
    head = seg[0]
    if head == "compare":
        return "compare-index" if len(seg) == 1 else "compare"
    if head == "topics":
        return "topics-index" if len(seg) == 1 else "topics"
    if head == "releases":
        return "release" if len(seg) >= 3 else "project"
    if head == "projects":
        return "project"
    if head in ("method", "about"):
        return head
    return "other"


# ---------------------------------------------------------------- 搜索指标


def load_snapshot(path: Path | None = None) -> dict:
    """读最新快照；显式给 path 时读指定文件（用于基线对比）。"""
    p = path or (DATA / "latest.json")
    return read_json(p, {}) or {}


def page_metrics(snapshot: dict) -> dict[str, dict]:
    """snapshot -> {path: {clicks, impressions, position, top_query}}"""
    return snapshot.get("pages") or {}


def family_metrics(pages: dict[str, dict], known: Iterable[str]) -> dict[str, dict]:
    """
    按族聚合。position 用展示量加权——直接算算术平均会被大量
    「展示 1 次排名 80」的长尾页带偏，得出来的排名毫无意义。
    """
    out: dict[str, dict] = {}
    for path, m in pages.items():
        fam = page_family(path, known)
        agg = out.setdefault(fam, {"clicks": 0, "impressions": 0, "pos_weight": 0.0, "pages": 0})
        imp = int(m.get("impressions", 0))
        agg["clicks"] += int(m.get("clicks", 0))
        agg["impressions"] += imp
        agg["pos_weight"] += float(m.get("position", 0)) * imp
        agg["pages"] += 1
    for agg in out.values():
        agg["ctr"] = (agg["clicks"] / agg["impressions"]) if agg["impressions"] else 0.0
        agg["position"] = (agg["pos_weight"] / agg["impressions"]) if agg["impressions"] else 0.0
    return out


# ---------------------------------------------------------------- 账本


def load_ledger() -> list[dict]:
    if not LEDGER.exists():
        return []
    rows = []
    for line in LEDGER.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            # 单行损坏不应让整个循环瘫痪：跳过并继续，比抛错有用
            continue
    return rows


def append_ledger(record: dict) -> None:
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    with LEDGER.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False, sort_keys=False) + "\n")


def rewrite_ledger(rows: list[dict]) -> None:
    """
    整份重写（用于结算 verdict）。账本必须保持 append-only 语义对读者友好，
    但结算要改既有行——折中：内存里改完整份重写，历史行顺序与内容不变，
    只有 verdict 字段被补上。
    """
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    tmp = LEDGER.with_suffix(".jsonl.tmp")
    with tmp.open("w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    os.replace(tmp, LEDGER)


def cooldown_active(rows: list[dict], target: str, days: int) -> dict | None:
    """
    同一目标在冷却期内不允许再改。

    没有这个限制，规则会在阈值附近反复横跳：今天 CTR 低就降权，明天
    数据抖动回升又加回来，实际效果是每 7 天把全站排序打乱一次，
    任何实验都测不出结果。
    """
    cutoff = utcnow() - timedelta(days=days)
    for r in reversed(rows):
        if r.get("target") != target:
            continue
        try:
            ts = datetime.fromisoformat(r["ts"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            continue
        if ts >= cutoff and r.get("verdict") != "rolled-back":
            return r
    return None


def rule_stats(rows: list[dict]) -> dict[str, dict]:
    """
    规则命中率。这是「自进化」真正的来源：不是模型变聪明了，
    而是失败的策略被统计性地降权、成功的被加权，循环几十轮之后
    留下的都是这个站点上真的有效的规则。
    """
    stats: dict[str, dict] = {}
    for r in rows:
        rule = r.get("rule")
        if not rule:
            continue
        s = stats.setdefault(rule, {"applied": 0, "win": 0, "lose": 0, "pending": 0, "inconclusive": 0})
        s["applied"] += 1
        v = r.get("verdict", "pending")
        if v in s:
            s[v] += 1
    for s in stats.values():
        settled = s["win"] + s["lose"]
        # 样本不足时不给结论：3 次里 2 次赢不能说明问题
        s["hit_rate"] = round(s["win"] / settled, 3) if settled >= 3 else None
    return stats


def iso_week(dt: datetime | None = None) -> str:
    d = dt or utcnow()
    y, w, _ = d.isocalendar()
    return f"{y}-W{w:02d}"


def parse_day(s: str) -> date:
    return datetime.strptime(s, "%Y-%m-%d").date()
