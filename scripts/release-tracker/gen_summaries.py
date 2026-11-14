#!/usr/bin/env python3
"""
把 Release 摘要批量翻译成 5 种语言（多通道轮询 + 断点缓存）

产物：site/src/data/summaries.json（随仓库提交，作为增量基线）
    { ja: { "<release key>": "译文" }, de: {...}, ... }

只翻译「有日期 + 有英文摘要」的记录（约 890 条），因为只有这些会
出现在多语言信息流与项目页上。没有译文的条目在页面上回落英文原文，
不会出现空白或坏文案。

用法:
  python gen_summaries.py --limit 20        # 小样本试跑
  python gen_summaries.py --workers 8       # 全量
  python gen_summaries.py --langs ja,de
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translate import translate_markdown, pool_stats  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUT = ROOT / "site" / "src" / "data" / "summaries.json"
ALL_LANGS = ["ja", "de", "fr", "es", "pt"]
_VAR_RE = re.compile(r"\{\w+\}")

NODE_EXPORT = r'''
import("./site/src/lib/registry.ts").then((m) => {
  const rows = m.allReleases()
    .filter((x) => x.hasEn && x.summary && x.date)
    .map((x) => ({ k: x.key, s: x.summary }));
  process.stdout.write(JSON.stringify(rows));
});
'''


def load_releases() -> list[dict]:
    proc = subprocess.run(
        ["node", "--experimental-strip-types", "--no-warnings", "-e", NODE_EXPORT],
        cwd=ROOT, capture_output=True, text=True, timeout=180,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"导出 Release 索引失败: {proc.stderr[-400:]}")
    rows = json.loads(proc.stdout)
    return [
        r for r in rows
        if isinstance(r.get("s"), str)
        and len(r["s"].strip()) >= 12
        and re.search(r"[A-Za-z]", r["s"])
    ]


def load_existing() -> dict[str, dict[str, str]]:
    """读取已提交的译文作为增量基线；CI 上每天只翻新增条目。"""
    base: dict[str, dict[str, str]] = {l: {} for l in ALL_LANGS}
    if OUT.exists():
        try:
            saved = json.loads(OUT.read_text(encoding="utf-8"))
            for l in ALL_LANGS:
                if isinstance(saved.get(l), dict):
                    base[l] = {str(k): str(v) for k, v in saved[l].items()}
        except (json.JSONDecodeError, OSError) as e:
            print(f"[warn] 无法读取已有译文，将全量重翻: {e}", file=sys.stderr)
    return base


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--langs", default=",".join(ALL_LANGS))
    ap.add_argument("--workers", type=int, default=8)
    ap.add_argument("--limit", type=int, default=0, help="只处理前 N 条，用于试跑")
    args = ap.parse_args()

    langs = [x.strip() for x in args.langs.split(",") if x.strip()]
    out = load_existing()
    rows = load_releases()
    if args.limit:
        rows = rows[: args.limit]
    jobs = [
        (r["k"], r["s"], lang)
        for lang in langs
        for r in rows
        if r["k"] not in out[lang]
    ]
    already = sum(len(out[l]) for l in langs)
    print(
        f"摘要: {len(rows)} 条  |  语言: {', '.join(langs)}  |  "
        f"已有译文 {already} 条  |  待翻 {len(jobs)}  |  并发: {args.workers}",
        flush=True,
    )
    failed = 0
    t0 = time.time()
    done = 0

    def work(job: tuple[str, str, str]) -> tuple[str, str, str | None]:
        key, text, lang = job
        try:
            translated = translate_markdown(text, lang)
            if sorted(_VAR_RE.findall(text)) != sorted(_VAR_RE.findall(translated)):
                return key, lang, None
            # 明显异常：译文比原文长 3 倍，通常是引擎把占位符展开成乱码
            if len(translated) > max(len(text) * 3, 200):
                return key, lang, None
            return key, lang, translated
        except Exception:  # noqa: BLE001
            return key, lang, None

    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futures = [ex.submit(work, j) for j in jobs]
        for fut in as_completed(futures):
            key, lang, translated = fut.result()
            done += 1
            if translated is None:
                failed += 1
            else:
                out[lang][key] = translated
            if done % 200 == 0 or done == len(jobs):
                rate = done / max(time.time() - t0, 0.1)
                print(f"  {done}/{len(jobs)}  失败 {failed}  {rate:.1f} 条/秒", flush=True)

    if args.limit:
        print("\n[试跑预览，不写入产物]")
        for lang in langs:
            for key, value in list(out[lang].items())[:4]:
                print(f"  [{lang}] {key} → {value[:90]}")
        return

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        json.dumps(out, ensure_ascii=False, indent=1, sort_keys=True) + "\n",
        encoding="utf-8",
    )

    print(f"\n写入 {OUT.relative_to(ROOT)}  ({OUT.stat().st_size / 1024:.0f} KB)")
    for lang in langs:
        print(f"  {lang:3s}: {len(out[lang]):4d} 条")
    print(f"失败/回落: {failed}  |  耗时 {time.time() - t0:.0f}s")
    print("通道统计:", json.dumps(pool_stats(), ensure_ascii=False))


if __name__ == "__main__":
    main()
