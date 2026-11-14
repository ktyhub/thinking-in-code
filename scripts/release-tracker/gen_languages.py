#!/usr/bin/env python3
"""
生成全量语言注册表 scripts/release-tracker/languages.json

语言清单来自 Google 免费翻译端点的 /translate_a/l（实测 249 种目标语言），
并按「SEO 价值 / 机翻可靠性」分层，作为扩语言时的发布闸门依据。

分层不是翻译能力问题（249 种都能翻），而是质量与风险问题：
  Tier 1  已上线，人工定稿核心 UI
  Tier 2  高搜索量 + 机翻质量可靠，建议优先扩
  Tier 3  中等，可批量扩但需观察收录
  Tier 4  低资源语言，机翻质量与搜索量都低，不建议单独建页

用法：
  python gen_languages.py            # 重新抓取并生成
  python gen_languages.py --offline  # 用上次缓存的清单重算分层
"""
from __future__ import annotations

import argparse
import json
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / "languages.json"
RAW = HERE / ".cache" / "google_languages.json"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")
LIST_URL = "https://translate.google.com/translate_a/l?client=webapp&hl=en"

# 已上线（en 为源语言，不参与翻译）
TIER1 = ["en", "zh", "ja", "de", "fr", "es", "pt"]

# 建议第二批：互联网使用量大、Google 翻译质量较可靠
TIER2 = [
    "ko", "ru", "it", "nl", "pl", "tr", "id", "vi", "th", "ar", "hi",
    "sv", "da", "no", "fi", "cs", "el", "hu", "ro", "uk", "he", "ms",
    "bn", "ta", "fil", "bg", "hr", "sk", "sr", "ca",
]

# 第三批：区域性强、有一定搜索量
TIER3 = [
    "mr", "te", "gu", "kn", "ml", "pa", "ur", "fa", "sw", "af", "sq",
    "mk", "bs", "lt", "lv", "et", "sl", "is", "ga", "cy", "eu", "gl",
    "hy", "ka", "az", "kk", "uz", "mn", "ne", "si", "km", "lo", "my",
    "am", "yo", "ig", "ha", "zu", "xh", "st", "tn", "mg", "so", "rw",
    "lb", "mt", "yi", "tg", "tk", "ky", "ps", "ku", "ckb", "ug", "sd",
    "la", "eo", "jv", "su", "ceb", "hmn", "haw", "gd",
]

# 书写方向：RTL（需 html[dir=rtl] + CSS 镜像）
RTL = {
    "ar", "arz", "azb", "ckb", "dv", "fa", "he", "ku", "mzn", "nqo",
    "pnb", "ps", "sd", "syr", "ug", "ur", "yi", "arc", "arw",
}

# hreflang 与 Google 代码不一致时的修正（BCP 47）
HREFLANG = {
    "zh-CN": "zh-Hans", "zh-TW": "zh-Hant",
    "jw": "jv", "iw": "he", "mo": "ro",
    "tl": "fil", "in": "id", "ji": "yi",
}

# 已上线语言的展示元数据（与 i18n.ts 的 LOCALE_META 保持一致）
DISPLAY = {
    "en": {"label": "English", "short": "EN", "htmlLang": "en"},
    "zh": {"label": "中文", "short": "中", "htmlLang": "zh-CN", "code": "zh-CN"},
    "ja": {"label": "日本語", "short": "日", "htmlLang": "ja"},
    "de": {"label": "Deutsch", "short": "DE", "htmlLang": "de"},
    "fr": {"label": "Français", "short": "FR", "htmlLang": "fr"},
    "es": {"label": "Español", "short": "ES", "htmlLang": "es"},
    "pt": {"label": "Português", "short": "PT", "htmlLang": "pt-BR", "code": "pt"},
}


def fetch() -> dict[str, str]:
    req = urllib.request.Request(LIST_URL, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as r:
        d = json.loads(r.read().decode("utf-8"))
    tl = d.get("tl") or {}
    if not isinstance(tl, dict) or len(tl) < 100:
        raise RuntimeError("语言清单异常，拒绝覆盖已有注册表")
    RAW.parent.mkdir(parents=True, exist_ok=True)
    RAW.write_text(json.dumps(tl, ensure_ascii=False, indent=1), encoding="utf-8")
    return tl


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--offline", action="store_true")
    args = ap.parse_args()

    tl = json.loads(RAW.read_text(encoding="utf-8")) if args.offline else fetch()
    tier_of = {c: 1 for c in TIER1}
    tier_of.update({c: 2 for c in TIER2})
    tier_of.update({c: 3 for c in TIER3})

    languages: dict[str, dict] = {}
    for code, name in sorted(tl.items()):
        # 已上线语言用站点内部代码作 key
        entry = {
            "name": name,
            "hreflang": HREFLANG.get(code, code),
            "dir": "rtl" if code in RTL else "ltr",
            "tier": tier_of.get(code, 4),
        }
        languages[code] = entry

    # 站点内部代码 → 翻译端点代码的映射
    code_map = {
        "zh": "zh-CN",
        "pt": "pt",
    }
    for c in TIER1:
        if c == "en":
            continue
        languages[c] = {
            "name": DISPLAY[c]["label"],
            "short": DISPLAY[c]["short"],
            "htmlLang": DISPLAY[c]["htmlLang"],
            "hreflang": HREFLANG.get(code_map.get(c, c), languages.get(code_map.get(c, c), {}).get("hreflang", c)),
            "dir": "ltr",
            "tier": 1,
            "live": True,
            "translateCode": code_map.get(c, c),
        }
    languages["en"] = {
        "name": "English", "short": "EN", "htmlLang": "en",
        "hreflang": "en", "dir": "ltr", "tier": 1, "live": True,
        "source": True,
    }

    counts = {t: sum(1 for v in languages.values() if v["tier"] == t) for t in (1, 2, 3, 4)}
    data = {
        "_meta": {
            "source": LIST_URL,
            "generated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "targetLanguages": len(tl),
            "registryEntries": len(languages),
            "tierNote": "分层依据 SEO 价值与机翻可靠性，非翻译能力上限",
        },
        "tiers": {
            "1": TIER1,
            "2": [c for c in TIER2 if c in tl],
            "3": [c for c in TIER3 if c in tl],
        },
        "counts": counts,
        "languages": languages,
    }
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"写入 {OUT.name}: {len(tl)} 种目标语言, {len(languages)} 条注册项")
    print("分层:", counts)
    print("RTL:", sorted(c for c, v in languages.items() if v["dir"] == "rtl"))


if __name__ == "__main__":
    main()
