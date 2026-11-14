#!/usr/bin/env python3
"""
生成多语言 UI 字典（site/src/lib/dicts.generated.ts）

源文案直接解析自 site/src/lib/i18n.ts 的 en 字典，避免维护两份：
  - 用轮询翻译器并发翻译到 ja / de / fr / es / pt
  - {n} / {project} 等模板占位符由 translate.py 保护，并在此二次校验
  - 缺失或校验失败的词条留空 → t() 自动回落英文，绝不输出坏文案
  - SQLite 缓存支持断点续跑，重跑只补新词条

用法:
  python gen_dicts.py                    # 全量生成
  python gen_dicts.py --sample 8        # 只翻前 8 条（试跑）
  python gen_dicts.py --langs ja,de     # 指定语言
  python gen_dicts.py --workers 6
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translate import translate_markdown, pool_stats  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
I18N = ROOT / "site" / "src" / "lib" / "i18n.ts"
OUT = ROOT / "site" / "src" / "lib" / "dicts.generated.ts"
OVERRIDES = HERE / "ui-overrides.json"

ALL_LANGS = ["ja", "de", "fr", "es", "pt"]

# 这些词条保持原文，不翻译
SKIP_KEYS = {
    "site.name",            # 品牌名
    "stat.sync.never",      # 纯符号
    "feed.lang.zh",         # 语言标签
    "feed.lang.en",
}

_PAIR_RE = re.compile(r'"([^"]+)"\s*:\s*("(?:[^"\\]|\\.)*")', re.S)
_VAR_RE = re.compile(r"\{\w+\}")


def parse_en_dict(path: Path) -> dict[str, str]:
    """从 i18n.ts 中解析 `const en: Dict = { ... };`。值均为单行 JSON 字符串。"""
    src = path.read_text(encoding="utf-8")
    start = src.find("const en: Dict = {")
    if start < 0:
        raise RuntimeError("找不到 en 字典定义")
    end = src.find("\n};", start)
    if end < 0:
        raise RuntimeError("找不到 en 字典结尾")
    body = src[start:end]
    out: dict[str, str] = {}
    for key, raw in _PAIR_RE.findall(body):
        try:
            out[key] = json.loads(raw)
        except json.JSONDecodeError:
            print(f"[warn] 无法解析词条 {key}: {raw[:60]}", file=sys.stderr)
    return out


def same_vars(source: str, translated: str) -> bool:
    return sorted(_VAR_RE.findall(source)) == sorted(_VAR_RE.findall(translated))


def should_skip(key: str, value: str) -> bool:
    if key in SKIP_KEYS:
        return True
    if not value.strip() or not re.search(r"[A-Za-z]", value):
        return True
    return False


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--langs", default=",".join(ALL_LANGS))
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--sample", type=int, default=0, help="只处理前 N 条，用于试跑")
    args = ap.parse_args()

    langs = [x.strip() for x in args.langs.split(",") if x.strip()]
    en = parse_en_dict(I18N)
    overrides: dict[str, dict[str, str]] = {}
    if OVERRIDES.exists():
        raw = json.loads(OVERRIDES.read_text(encoding="utf-8"))
        overrides = {k: v for k, v in raw.items() if not k.startswith("_")}
    manual_n = sum(len([k for k in overrides.get(l, {}) if k in en]) for l in langs)
    # 人工定稿同样要校验占位符，避免手误丢掉 {n}
    bad_manual = [
        (l, k) for l in langs for k in overrides.get(l, {})
        if k in en and not same_vars(en[k], overrides[l][k])
    ]
    if bad_manual:
        raise RuntimeError(f"ui-overrides.json 占位符不匹配: {bad_manual}")
    print(f"源词条: {len(en)}  |  目标语言: {', '.join(langs)}  |  并发: {args.workers}")
    print(f"人工定稿: {manual_n} 条（优先于机翻，占位符校验通过）")

    items = [(k, v) for k, v in en.items() if not should_skip(k, v)]
    if args.sample:
        items = items[: args.sample]

    jobs = [
        (k, v, lang)
        for lang in langs
        for k, v in items
        if k not in overrides.get(lang, {})
    ]
    print(f"待机翻: {len(jobs)} 条（缓存命中会跳过网络请求）\n")

    # 始终为全部 5 种语言生成 key，未指定的语言留空 → t() 回落英文
    results: dict[str, dict[str, str]] = {lang: {} for lang in ALL_LANGS}
    for lang in langs:
        results[lang].update({k: v for k, v in overrides.get(lang, {}).items() if k in en})
    failed: list[tuple[str, str, str]] = []

    def work(job: tuple[str, str, str]) -> tuple[str, str, str | None]:
        key, value, lang = job
        try:
            out = translate_markdown(value, lang)
            if not same_vars(value, out):
                return key, lang, None  # 占位符被翻坏 → 回落英文
            return key, lang, out
        except Exception:  # noqa: BLE001
            return key, lang, None

    done = 0
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futures = [ex.submit(work, j) for j in jobs]
        for fut in as_completed(futures):
            key, lang, out = fut.result()
            done += 1
            if out is None:
                failed.append((lang, key, "占位符不匹配或翻译失败"))
            else:
                results[lang][key] = out
            if done % 50 == 0 or done == len(jobs):
                print(f"  {done}/{len(jobs)}  失败 {len(failed)}", flush=True)

    # 品牌与固定标签补回，保证所有语言字典结构一致
    for lang in langs:
        for key in SKIP_KEYS:
            if key in en:
                results[lang][key] = en[key]

    if args.sample:
        print("\n[试跑预览，不写入字典文件]")
        for lang in langs:
            for key, value in list(results[lang].items())[:6]:
                print(f"  [{lang}] {key} = {value[:95]}")
        return

    body = ",\n".join(
        f"  {lang}: {json.dumps(results[lang], ensure_ascii=False, indent=2).replace(chr(10), chr(10) + '  ')}"
        for lang in ALL_LANGS
    )
    OUT.write_text(
        "/**\n"
        " * 由 scripts/release-tracker/gen_dicts.py 自动生成，请勿手工编辑。\n"
        " * 源文案：site/src/lib/i18n.ts 的 en 字典；翻译走多通道轮询器。\n"
        " * 校验失败的词条留空，t() 会自动回落英文。\n"
        " */\n"
        "export const GENERATED_DICTS: Record<\n"
        '  "ja" | "de" | "fr" | "es" | "pt",\n'
        "  Record<string, string>\n"
        "> = {\n" + body + "\n};\n",
        encoding="utf-8",
    )

    print(f"\n写入 {OUT.relative_to(ROOT)}")
    for lang in langs:
        print(f"  {lang:3s}: {len(results[lang]):3d} 条已翻译")
    if failed:
        print(f"\n回落英文的 {len(failed)} 条（前 10）:")
        for lang, key, why in failed[:10]:
            print(f"  [{lang}] {key} — {why}")
    print("\n通道统计:", json.dumps(pool_stats(), ensure_ascii=False))


if __name__ == "__main__":
    main()
