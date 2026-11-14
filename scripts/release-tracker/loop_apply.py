#!/usr/bin/env python3
"""
执行层：把提案写进配置文件，并把「改之前长什么样」完整记进账本。

这一层唯一的职责是**可回滚**。所有写操作都必须满足：
  - 只能写白名单里的文件与键（WHITELIST）
  - 写入前把原值快照进账本（before）
  - 写入的值要通过形状校验（不是「相信 decide 是对的」）
  - 原子写（写临时文件再 rename），避免半个 JSON 让下一次构建失败

回滚是 `loop.py rollback <id>`，恢复的是整键原值，不是「反向操作」。
反向操作会出错：两次变更叠在一起时，「减回去」和「恢复原状」不是一回事。
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from loop_common import (  # noqa: E402
    CONFIG, GATE, LOOP_STATE, ROOT, append_ledger, read_json, utcnow, write_json,
)

# 允许被自动修改的键。任何不在这里的写入都会直接抛错——
# 这条限制的意义是：即使规则逻辑写错了，也改不坏别的东西。
WHITELIST = {
    "site/src/data/index-gate.json": {
        "locales.*.status", "locales.*.since", "locales.*.reason",
    },
    "site/src/data/loop-state.json": {
        "compareFeatured", "suppressPairs", "topicOrder", "titleVariant", "revision", "updated",
    },
    "scripts/release-tracker/config.json": {
        "scan.hot",
    },
}

MAX_FEATURED = 8
MAX_SUPPRESS = 200
MAX_TOPIC_ORDER = 40
MAX_HOT = 60

SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9.-]*$")
PAIR_RE = re.compile(r"^[a-z0-9][a-z0-9.-]*-vs-[a-z0-9][a-z0-9.-]*$")


def _rel(p: Path) -> str:
    return str(p.relative_to(ROOT))


def get_path(obj: dict, dotted: str):
    cur = obj
    for part in dotted.split("."):
        if part == "*":
            return None
        if not isinstance(cur, dict) or part not in cur:
            return None
        cur = cur[part]
    return cur


def set_path(obj: dict, dotted: str, value) -> None:
    parts = dotted.split(".")
    cur = obj
    for part in parts[:-1]:
        cur = cur.setdefault(part, {})
    cur[parts[-1]] = value


def _allowed(rel: str, dotted: str) -> bool:
    patterns = WHITELIST.get(rel)
    if patterns is None:
        return False
    if dotted in patterns:
        return True
    # locales.*.status 匹配 locales.ja.status
    for pat in patterns:
        if "*" in pat:
            rx = "^" + re.escape(pat).replace(r"\*", r"[A-Za-z0-9_-]+") + "$"
            if re.match(rx, dotted):
                return True
    return False


def _validate(kind: str, value) -> None:
    if kind == "feature_pairs":
        bad = [p for p in value if not PAIR_RE.match(p)]
        if bad:
            raise SystemExit(f"feature_pairs 里有非法 slug：{bad[:3]}")
    elif kind == "suppress_pairs":
        bad = [p for p in value if not PAIR_RE.match(p)]
        if bad:
            raise SystemExit(f"suppress_pairs 里有非法 slug：{bad[:3]}")
    elif kind == "reorder_topics":
        bad = [t for t in value if not SLUG_RE.match(t)]
        if bad:
            raise SystemExit(f"topicOrder 里有非法 slug：{bad[:3]}")
    elif kind == "scan_hot":
        bad = [r for r in value if "/" not in r]
        if bad:
            raise SystemExit(f"scan.hot 里有非法仓库名：{bad[:3]}")
    elif kind == "gate":
        if value not in ("index", "noindex"):
            raise SystemExit(f"闸门状态非法：{value}")


def _apply_one(a: dict, state: dict) -> dict | None:
    """
    返回一条待写入账本的记录。返回 None 表示这条提案无需改动（已是目标状态）。
    """
    kind = a["action"]["kind"]
    rule = a["rule"]

    if kind == "gate":
        loc = a["action"]["locale"]
        target_status = a["action"]["status"]
        cur = (get_path(state["gate"], f"locales.{loc}.status") or state["gate"].get("default"))
        if cur == target_status:
            return None
        rec = {
            "file": _rel(GATE),
            "writes": [
                {"path": f"locales.{loc}.status", "before": cur, "after": target_status},
                {"path": f"locales.{loc}.since", "before": get_path(state["gate"], f"locales.{loc}.since"),
                 "after": utcnow().strftime("%Y-%m-%d")},
                {"path": f"locales.{loc}.reason", "before": get_path(state["gate"], f"locales.{loc}.reason"),
                 "after": a["action"].get("note", "")[:160]},
            ],
        }
        return rec

    if kind == "title_variant":
        fam = a["action"]["family"]
        cur = (state["loop"].get("titleVariant") or {}).get(fam, 0)
        nxt = 1 - int(cur)          # 只有两个手写变体，切换而不是自由生成
        return {
            "file": _rel(LOOP_STATE),
            "writes": [{"path": f"titleVariant.{fam}", "before": cur, "after": nxt}],
        }

    if kind == "feature_pairs":
        cur = list(state["loop"].get("compareFeatured") or [])
        new = a["action"]["pairs"]
        merged = (new + [p for p in cur if p not in new])[:MAX_FEATURED]
        if merged == cur:
            return None
        _validate(kind, merged)
        return {"file": _rel(LOOP_STATE),
                "writes": [{"path": "compareFeatured", "before": cur, "after": merged}]}

    if kind == "suppress_pairs":
        cur = list(state["loop"].get("suppressPairs") or [])
        merged = (cur + [p for p in a["action"]["pairs"] if p not in cur])[:MAX_SUPPRESS]
        if merged == cur:
            return None
        _validate(kind, merged)
        return {"file": _rel(LOOP_STATE),
                "writes": [{"path": "suppressPairs", "before": cur, "after": merged}]}

    if kind == "reorder_topics":
        by = a["action"]["by"]
        known = list(state["loop"].get("topicOrder") or [])
        # 有点击的按点击降序在前，其余保持历史顺序
        ordered = sorted(by, key=lambda k: -by[k])
        merged = (ordered + [t for t in known if t not in ordered])[:MAX_TOPIC_ORDER]
        if merged == known:
            return None
        _validate(kind, merged)
        return {"file": _rel(LOOP_STATE),
                "writes": [{"path": "topicOrder", "before": known, "after": merged}]}

    if kind == "scan_hot":
        cur = list((state["cfg"].get("scan") or {}).get("hot") or [])
        lower = {c.lower() for c in cur}
        add = [r for r in a["action"]["add"] if r.lower() not in lower]
        if not add:
            return None
        merged = (add + cur)[:MAX_HOT]
        _validate(kind, merged)
        return {"file": _rel(CONFIG),
                "writes": [{"path": "scan.hot", "before": cur, "after": merged}]}

    raise SystemExit(f"未知动作类型：{kind}")


def apply(actions: list[dict], dry_run: bool = True) -> list[dict]:
    state = {
        "gate": read_json(GATE, {}) or {},
        "loop": read_json(LOOP_STATE, {}) or {},
        "cfg": read_json(CONFIG, {}) or {},
    }
    applied: list[dict] = []

    for a in actions:
        try:
            rec = _apply_one(a, state)
        except SystemExit as e:
            # 单条提案形状不对就跳过，不能让其余几条一起作废——但要在
            # 输出里说清楚跳过的是哪条、为什么，否则这个跳过会被忽略
            print(f"  ✗ {a['rule']} 跳过：{e}", file=sys.stderr)
            continue
        if rec is None:
            print(f"  · {a['rule']} 已是目标状态，跳过", file=sys.stderr)
            continue

        rel = rec["file"]
        for w in rec["writes"]:
            if not _allowed(rel, w["path"]):
                raise SystemExit(f"拒绝写入未授权路径：{rel} → {w['path']}")

        # 同一个文件的多条写入要基于内存里的最新状态，否则后写的会覆盖先写的
        bucket = {
            _rel(GATE): state["gate"],
            _rel(LOOP_STATE): state["loop"],
            _rel(CONFIG): state["cfg"],
        }[rel]
        for w in rec["writes"]:
            set_path(bucket, w["path"], w["after"])
        if rel == _rel(LOOP_STATE):
            bucket["revision"] = int(bucket.get("revision") or 0) + 1
            bucket["updated"] = utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")

        ts = utcnow()
        entry = {
            "id": f"{ts.strftime('%Y%m%dT%H%M%S')}-{a['rule'].lower()}",
            "ts": ts.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "rule": a["rule"],
            "target": a["target"],
            "file": rel,
            "writes": rec["writes"],
            "hypothesis": a["hypothesis"],
            "evidence": a["evidence"],
            "metric": a["metric"],
            "window_end": (ts + __import__("datetime").timedelta(days=int(a["metric"]["window_days"]))
                           ).strftime("%Y-%m-%d"),
            "baseline": {
                "family": a["metric"].get("family"),
                "value": _baseline(a),
            },
            "verdict": "pending",
            "verdict_at": None,
            "verdict_note": "",
        }
        applied.append(entry)
        print(f"  ✓ {a['rule']} → {', '.join(w['path'] for w in rec['writes'])}")

    if applied and not dry_run:
        # 只写有实际改动的文件，避免无谓的 diff 触发全量构建
        touched = {e["file"] for e in applied}
        for rel in touched:
            obj = {_rel(GATE): state["gate"], _rel(LOOP_STATE): state["loop"],
                   _rel(CONFIG): state["cfg"]}[rel]
            write_json(ROOT / rel, obj)
        for e in applied:
            append_ledger(e)
        print(f"已写入 {len(applied)} 项变更，账本已记录（可 loop.py rollback <id> 回滚）")
    elif applied:
        print(f"[dry-run] 计划 {len(applied)} 项变更，未写盘")
    return applied


def _baseline(a: dict) -> float:
    """
    变更前的指标基线，从当前快照算，不从提案的 evidence 里抄。

    为什么不在 decide 里算好传下来：提案可能隔一两天才执行，也可能被
    人工改过顺序。基线必须是「执行这一刻的前值」，否则结算时比的不是
    同一个东西，结论一定是错的。
    """
    from loop_common import family_metrics, load_snapshot, page_metrics

    snap = load_snapshot()
    gate = read_json(GATE, {}) or {}
    known = list((gate.get("locales") or {}).keys())
    fams = family_metrics(page_metrics(snap), known)
    fam = a["metric"].get("family")
    f = fams.get(fam) or {}
    kind = a["metric"]["kind"]
    if kind == "family_ctr":
        return float(f.get("ctr", 0.0))
    return float(f.get("clicks", 0.0))


def rollback(record_id: str) -> int:
    from loop_common import load_ledger, rewrite_ledger

    rows = load_ledger()
    hit = next((r for r in rows if r["id"] == record_id), None)
    if not hit:
        print(f"账本里没有 {record_id}", file=sys.stderr)
        return 2
    if hit.get("verdict") == "rolled-back":
        print("这条已经是回滚状态")
        return 0

    path = ROOT / hit["file"]
    obj = read_json(path, {}) or {}
    for w in hit["writes"]:
        set_path(obj, w["path"], w["before"])
    write_json(path, obj)
    hit["verdict"] = "rolled-back"
    hit["verdict_at"] = utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    hit["verdict_note"] = "manual rollback"
    rewrite_ledger(rows)
    print(f"已回滚 {record_id}：{hit['file']} 恢复 {len(hit['writes'])} 个键")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description="执行变更提案")
    ap.add_argument("--proposals", default=str(ROOT / "data" / "seo" / "proposals.json"))
    ap.add_argument("--apply", action="store_true", help="真正写盘（默认 dry-run）")
    ap.add_argument("--rollback", default="", help="按账本 id 回滚")
    args = ap.parse_args()

    if args.rollback:
        return rollback(args.rollback)

    data = read_json(Path(args.proposals), {}) or {}
    actions = data.get("actions") or []
    if not actions:
        print("没有待执行的提案")
        return 0
    print(f"{'执行' if args.apply else '试算'} {len(actions)} 项：")
    apply(actions, dry_run=not args.apply)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
