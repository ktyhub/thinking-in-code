#!/usr/bin/env python3
"""
免费翻译模块（无需任何 API Key / 付费账号）

主通道：Google 翻译网页版公开端点（translate.googleapis.com/translate_a/single）
  - 免费、无需密钥，即 Stags Tracker 桌面应用同款方案
  - 非官方端点，有小概率被限流；失败自动重试，最终降级为保留原文
备选方案（如未来被封禁）：开源 LibreTranslate（可自建）或 Argos Translate（本地离线）

对 Markdown 做结构保护：fenced code block、行内代码、URL 用占位符替换后再翻译，
翻译完成后还原，避免链接/代码被翻译引擎破坏。
"""
import json
import re
import time
import urllib.parse
import urllib.request

TRANSLATE_URL = "https://translate.googleapis.com/translate_a/single"
_UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
       "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")

_FENCED_RE = re.compile(r"```.*?```", re.S)
_INLINE_CODE_RE = re.compile(r"`[^`\n]+`")
_URL_RE = re.compile(r"https?://[^\s)\]`>\"']+")
_TOKEN_FMT = "ZZPH{}ZZ"          # 字母+数字占位符，翻译引擎会原样保留
_TOKEN_RE = re.compile(r"ZZPH(\d+)ZZ")
_STASH = []


def _stash(match: re.Match) -> str:
    _STASH.append(match.group(0))
    return _TOKEN_FMT.format(len(_STASH) - 1)


def _protect(text: str) -> str:
    """把不可翻译的部分换成占位符"""
    _STASH.clear()
    text = _FENCED_RE.sub(_stash, text)
    text = _INLINE_CODE_RE.sub(_stash, text)
    text = _URL_RE.sub(_stash, text)
    return text


def _restore(text: str) -> str:
    """还原占位符；翻译引擎偶尔会给占位符插空格，做一次宽松匹配"""
    def repl(m):
        try:
            return _STASH[int(m.group(1))]
        except (IndexError, ValueError):
            return m.group(0)
    text = _TOKEN_RE.sub(repl, text)
    # 宽松兜底：ZZ PH 0 ZZ / ZZPH 0 ZZ 等变形
    text = re.sub(r"Z\s*Z\s*P\s*H\s*(\d+)\s*Z\s*Z", repl, text)
    return text


def _translate_chunk(text: str, target: str = "zh-CN", retries: int = 3) -> str:
    qs = urllib.parse.urlencode({
        "client": "gtx", "sl": "en", "tl": target, "dt": "t", "q": text,
    })
    last_err = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(f"{TRANSLATE_URL}?{qs}",
                                         headers={"User-Agent": _UA})
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            return "".join(seg[0] for seg in (data[0] or []) if seg and seg[0])
        except Exception as e:  # noqa: BLE001
            last_err = e
            time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"翻译失败: {last_err}")


def _chunk(text: str, max_len: int = 3800) -> list[str]:
    chunks, buf = [], ""
    for para in text.split("\n"):
        if len(buf) + len(para) > max_len and buf:
            chunks.append(buf)
            buf = ""
        if len(para) > max_len:
            for i in range(0, len(para), max_len):
                chunks.append(para[i:i + max_len])
        else:
            buf += ("\n" if buf else "") + para
    if buf:
        chunks.append(buf)
    return chunks or [text]


def translate_markdown(text: str, target: str = "zh-CN") -> str:
    """翻译 Markdown 文本，保护代码块与链接。失败时抛异常由调用方降级。"""
    if not text or not text.strip():
        return text
    protected = _protect(text)
    out = [_translate_chunk(c, target) for c in _chunk(protected)]
    return _restore("\n".join(out))


def translate_plain(text: str, target: str = "zh-CN") -> str:
    """翻译纯文本（短句），失败返回 None。"""
    try:
        return translate_markdown(text, target)
    except Exception:  # noqa: BLE001
        return None
