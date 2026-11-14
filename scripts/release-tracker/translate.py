#!/usr/bin/env python3
"""
多通道轮询翻译器（全部免费，无需信用卡）

设计目标：批量翻译任务（几千条 × 多语种）下，把请求摊到多个独立通道，
避免单端点限流；单通道故障时自动摘除，任务可从断点续跑。

通道池（按配置自动组装，无需 Key 的默认启用）：
  1. Google translate_a/single  client=gtx
  2. Google translate_a/single  client=dict-chrome-ex
  3. Google translate.google.com/translate_a/single
  4. Google clients5.google.com/translate_a/t
  5. Google translate.googleapis.com/translate_a/t
  6. DeepL API Free            —— 设置 DEEPL_API_KEY 后自动加入（50 万字符/月）
  7. Cloudflare Workers AI     —— 设置 CF_ACCOUNT_ID + CF_API_TOKEN 后自动加入
  8. LibreTranslate            —— 设置 LIBRETRANSLATE_URL 后自动加入（可自建）

调度：Round-Robin + 连续失败熔断冷却 + 指数退避抖动 + SQLite 断点缓存。
任何通道都失败时抛 TranslationError，由调用方决定降级（保留原文）。

Markdown 结构保护：代码块、行内代码、URL、{var} 占位符、语义化版本号、
技术专有名词都先换成占位符，翻译后还原，避免链接/代码/术语被翻坏。

对外接口保持向后兼容：
    translate_markdown(text, target="zh-CN") -> str
    translate_plain(text, target="zh-CN")    -> str | None
新增：
    translate_batch(pairs, on_progress=None) -> dict
    pool_stats() -> dict
    python translate.py --selftest / --bench / --stats
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import random
import re
import sqlite3
import sys
import threading
import time
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable

HERE = Path(__file__).resolve().parent
CACHE_DIR = HERE / ".cache"
CACHE_DB = CACHE_DIR / "translations.sqlite3"

_UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

# ---------------------------------------------------------------- 结构保护

_FENCED_RE = re.compile(r"```.*?```", re.S)
_INLINE_CODE_RE = re.compile(r"`[^`\n]+`")
_URL_RE = re.compile(r"https?://[^\s)\]`>\"']+")
# i18n 字典 / 模板变量：{n}、{project}、{projects}
_VAR_RE = re.compile(r"\{[A-Za-z_][A-Za-z0-9_]*\}")
# 语义化版本号 / tag：v3.3.7、4.1.2-RC1
_VER_RE = re.compile(r"\bv?\d+(?:\.\d+){1,3}(?:[-.][A-Za-z0-9]+)*\b")
# 不翻译的技术专有名词，避免 Spring Boot 被直译
_TERMS = [
    "GitHub", "GitLab", "Docker", "Kubernetes", "Spring Boot", "Spring AI",
    "Spring Framework", "Apache Kafka", "Apache Dubbo", "ZooKeeper", "Netty",
    "Elasticsearch", "Prometheus", "Grafana", "Quarkus", "NextStack",
    "Release Note", "Changelog", "API", "SDK", "CLI", "JSON", "YAML", "gRPC",
    "JVM", "GraalVM", "OpenTelemetry", "PostgreSQL", "MySQL", "Redis",
    "TypeScript", "JavaScript", "Rust", "Python", "Node.js",
]
_TERMS_RE = re.compile("|".join(re.escape(t) for t in sorted(_TERMS, key=len, reverse=True)), re.I)

_TOKEN_FMT = "ZZPH{}ZZ"
_TOKEN_RE = re.compile(r"ZZPH(\d+)ZZ")


def _protect(text: str) -> tuple[str, list[str]]:
    """返回 (占位符化文本, 原文片段表)。纯函数，线程安全。"""
    stash: list[str] = []

    def put(m: re.Match) -> str:
        stash.append(m.group(0))
        return _TOKEN_FMT.format(len(stash) - 1)

    text = _FENCED_RE.sub(put, text)
    text = _INLINE_CODE_RE.sub(put, text)
    text = _URL_RE.sub(put, text)
    text = _VAR_RE.sub(put, text)
    text = _VER_RE.sub(put, text)
    text = _TERMS_RE.sub(put, text)
    return text, stash


def _restore(text: str, stash: list[str]) -> str:
    def repl(m: re.Match) -> str:
        try:
            return stash[int(m.group(1))]
        except (IndexError, ValueError):
            return m.group(0)

    text = _TOKEN_RE.sub(repl, text)
    # 翻译引擎偶尔会把占位符拆开：ZZ PH 0 ZZ
    text = re.sub(r"Z\s*Z\s*P\s*H\s*(\d+)\s*Z\s*Z", repl, text)
    return text


# ---------------------------------------------------------------- 缓存

_db_lock = threading.RLock()  # 可重入：cache_put 内会再次进入 _cache()
_db: sqlite3.Connection | None = None


def _cache() -> sqlite3.Connection:
    global _db
    with _db_lock:
        if _db is None:
            CACHE_DIR.mkdir(parents=True, exist_ok=True)
            _db = sqlite3.connect(CACHE_DB, check_same_thread=False)
            _db.execute("PRAGMA journal_mode=WAL")
            _db.execute(
                """CREATE TABLE IF NOT EXISTS tr (
                     k TEXT PRIMARY KEY, target TEXT, out TEXT,
                     provider TEXT, ts REAL
                   )"""
            )
            _db.commit()
        return _db


def _cache_key(text: str, target: str) -> str:
    return hashlib.sha1(f"{target}\0{text}".encode("utf-8")).hexdigest()


def cache_get(text: str, target: str) -> str | None:
    # 与 cache_put 共用锁：SQLite 单连接在多 worker 下并发读会偶发异常
    with _db_lock:
        try:
            row = _cache().execute("SELECT out FROM tr WHERE k=?", (_cache_key(text, target),)).fetchone()
            return row[0] if row else None
        except sqlite3.Error:
            return None


def cache_put(text: str, target: str, out: str, provider: str) -> None:
    with _db_lock:
        _cache().execute(
            "INSERT OR REPLACE INTO tr(k,target,out,provider,ts) VALUES(?,?,?,?,?)",
            (_cache_key(text, target), target, out, provider, time.time()),
        )
        _cache().commit()


def cache_count() -> int:
    with _db_lock:
        return _cache().execute("SELECT COUNT(*) FROM tr").fetchone()[0]


# ---------------------------------------------------------------- Provider

class TranslationError(RuntimeError):
    pass


@dataclass
class Provider:
    name: str
    call: Callable[[str, str], str]
    code: Callable[[str], str] = lambda t: t
    failures: int = 0
    cooldown_until: float = 0.0
    ok: int = 0
    err: int = 0
    _lock: threading.Lock = field(default_factory=threading.Lock)

    def available(self) -> bool:
        return time.time() >= self.cooldown_until

    def translate(self, text: str, target: str) -> str:
        out = self.call(text, self.code(target))
        if not isinstance(out, str) or not out.strip():
            raise TranslationError(f"{self.name}: 空结果")
        return out

    def mark_ok(self) -> None:
        with self._lock:
            self.failures = 0
            self.cooldown_until = 0
            self.ok += 1

    def mark_fail(self) -> None:
        with self._lock:
            self.failures += 1
            self.err += 1
            if self.failures >= 3:
                self.cooldown_until = time.time() + min(30 * (2 ** (self.failures - 3)), 300)


def _http(url: str, data: bytes | None = None, headers: dict | None = None, timeout: int = 30) -> str:
    req = urllib.request.Request(url, data=data, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8")


def _google_call(url: str, params: dict) -> Callable[[str, str], str]:
    def call(text: str, target: str) -> str:
        qs = dict(params)
        qs.update({"sl": "en", "tl": target, "q": text})
        raw = _http(
            f"{url}?{urllib.parse.urlencode(qs)}",
            headers={"User-Agent": _UA, "Accept": "*/*", "Accept-Language": "en-US,en;q=0.9"},
            timeout=30,
        )
        data = json.loads(raw)
        seg = data[0]
        if isinstance(seg, list):
            return "".join(s[0] for s in seg if s and s[0])
        if isinstance(seg, str):
            return seg
        if isinstance(seg, dict) and "translated_text" in seg:
            return seg["translated_text"]
        raise TranslationError(f"无法解析响应: {raw[:120]}")
    return call


def _deepl_call(text: str, target: str) -> str:
    key = os.environ["DEEPL_API_KEY"]
    body = urllib.parse.urlencode({
        "auth_key": key, "text": text, "source_lang": "EN", "target_lang": target,
        "preserve_formatting": "1",
    }).encode()
    raw = _http(
        "https://api-free.deepl.com/v2/translate",
        data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded", "User-Agent": _UA},
        timeout=30,
    )
    return json.loads(raw)["translations"][0]["text"]


_DEEPL_CODES = {
    "zh-CN": "ZH", "ja": "JA", "de": "DE", "fr": "FR", "es": "ES",
    "pt": "PT-BR", "pt-BR": "PT-BR", "it": "IT", "nl": "NL", "ru": "RU",
    "ko": "KO", "pl": "PL", "tr": "TR", "id": "ID", "uk": "UK",
}

_CF_LANGS = {
    "zh-CN": "chinese", "ja": "japanese", "de": "german", "fr": "french",
    "es": "spanish", "pt": "portuguese", "pt-BR": "portuguese", "it": "italian",
    "nl": "dutch", "ru": "russian", "ko": "korean", "pl": "polish",
    "tr": "turkish", "id": "indonesian", "vi": "vietnamese", "hi": "hindi",
}


def _cf_call(text: str, target: str) -> str:
    acct = os.environ["CF_ACCOUNT_ID"]
    token = os.environ["CF_API_TOKEN"]
    url = f"https://api.cloudflare.com/client/v4/accounts/{acct}/ai/run/@cf/meta/m2m100-1.2b"
    body = json.dumps({"text": text, "source_lang": "english", "target_lang": target}).encode()
    raw = _http(url, data=body, headers={
        "Authorization": f"Bearer {token}", "Content-Type": "application/json",
    }, timeout=45)
    data = json.loads(raw)
    if not data.get("success"):
        raise TranslationError(f"Cloudflare: {str(data.get('errors'))[:120]}")
    return data["result"].get("translated_text", "")


def _libre_call(text: str, target: str) -> str:
    base = os.environ["LIBRETRANSLATE_URL"].rstrip("/")
    body = json.dumps({"q": text, "source": "en", "target": target, "format": "text"}).encode()
    raw = _http(f"{base}/translate", data=body, headers={"Content-Type": "application/json"}, timeout=45)
    return json.loads(raw)["translatedText"]


def build_providers() -> list[Provider]:
    pool: list[Provider] = []
    g = "https://translate.googleapis.com/translate_a/single"
    variants = [
        ("google-gtx", g, {"client": "gtx", "dt": "t"}),
        ("google-dict", g, {"client": "dict-chrome-ex", "dt": "t"}),
        ("google-web", "https://translate.google.com/translate_a/single", {"client": "gtx", "dt": "t"}),
        ("google-clients5", "https://clients5.google.com/translate_a/t", {"client": "dict-chrome-ex"}),
        ("google-t", "https://translate.googleapis.com/translate_a/t", {"client": "gtx"}),
    ]
    for name, url, params in variants:
        pool.append(Provider(name, _google_call(url, params)))

    if os.environ.get("DEEPL_API_KEY"):
        pool.append(Provider("deepl-free", _deepl_call, lambda t: _DEEPL_CODES.get(t, t.upper())))
    if os.environ.get("CF_ACCOUNT_ID") and os.environ.get("CF_API_TOKEN"):
        pool.append(Provider("cloudflare-m2m100", _cf_call, lambda t: _CF_LANGS.get(t, t)))
    if os.environ.get("LIBRETRANSLATE_URL"):
        pool.append(Provider("libretranslate", _libre_call, lambda t: t.split("-")[0]))
    return pool


# ---------------------------------------------------------------- 轮询池

class Pool:
    """Round-Robin + 熔断 + 退避。线程安全。"""

    def __init__(self, providers: list[Provider] | None = None):
        self.providers = providers if providers is not None else build_providers()
        self._i = 0
        self._lock = threading.Lock()

    def _next(self) -> Provider | None:
        with self._lock:
            n = len(self.providers)
            for _ in range(n):
                p = self.providers[self._i % n]
                self._i += 1
                if p.available():
                    return p
            return None

    def translate(self, text: str, target: str, use_cache: bool = True) -> tuple[str, str]:
        """返回 (译文, 通道名)。全部通道失败时抛 TranslationError。"""
        if use_cache:
            try:
                hit = cache_get(text, target)
            except Exception:  # noqa: BLE001 — 缓存不可用不应中断翻译
                hit = None
            if hit is not None:
                return hit, "cache"

        protected, stash = _protect(text)
        chunks = _chunk(protected)
        last_err: Exception | None = None

        for attempt in range(3):
            p = self._next()
            if p is None:
                time.sleep(min(2 ** attempt + random.uniform(0, 0.6), 8))
                continue
            try:
                out = "\n".join(p.translate(c, target) for c in chunks)
                out = _restore(out, stash)
                p.mark_ok()
                if use_cache:
                    cache_put(text, target, out, p.name)
                return out, p.name
            except Exception as e:  # noqa: BLE001
                last_err = e
                p.mark_fail()
                time.sleep(min(0.4 * (2 ** attempt) + random.uniform(0, 0.4), 4))

        raise TranslationError(f"所有翻译通道均失败（{len(self.providers)} 个）: {last_err}")

    def stats(self) -> dict:
        return {p.name: {"ok": p.ok, "err": p.err, "cooling": not p.available()} for p in self.providers}


def _chunk(text: str, max_len: int = 3400) -> list[str]:
    chunks: list[str] = []
    buf = ""
    for para in text.split("\n"):
        if len(para) > max_len:
            if buf:
                chunks.append(buf)
                buf = ""
            for i in range(0, len(para), max_len):
                chunks.append(para[i:i + max_len])
            continue
        if len(buf) + len(para) + 1 > max_len and buf:
            chunks.append(buf)
            buf = para
        else:
            buf = f"{buf}\n{para}" if buf else para
    if buf:
        chunks.append(buf)
    return chunks or [text]


_pool_singleton: Pool | None = None
_pool_lock = threading.Lock()


def get_pool() -> Pool:
    global _pool_singleton
    with _pool_lock:
        if _pool_singleton is None:
            _pool_singleton = Pool()
        return _pool_singleton


# ---------------------------------------------------------------- 对外接口

def translate_markdown(text: str, target: str = "zh-CN") -> str:
    """翻译 Markdown；失败抛 TranslationError（调用方自行降级）。"""
    if not text or not text.strip():
        return text
    out, _ = get_pool().translate(text, target)
    return out


def translate_plain(text: str, target: str = "zh-CN") -> str | None:
    """翻译纯文本短句；失败返回 None。"""
    try:
        return translate_markdown(text, target)
    except Exception:  # noqa: BLE001
        return None


def translate_batch(pairs: list[tuple[str, str]], on_progress: Callable[[int, int, str], None] | None = None) -> dict[str, str]:
    """批量 [(text, target)]；失败项跳过，重跑时靠缓存续传。"""
    out: dict[str, str] = {}
    total = len(pairs)
    for i, (text, target) in enumerate(pairs, 1):
        try:
            out[f"{target}\0{text}"] = translate_markdown(text, target)
        except Exception as e:  # noqa: BLE001
            print(f"[warn] 跳过 ({target}) {text[:40]!r}: {e}", file=sys.stderr)
        if on_progress:
            on_progress(i, total, target)
    return out


def pool_stats() -> dict:
    return {"providers": get_pool().stats(), "cached": cache_count()}


# ---------------------------------------------------------------- CLI

def _selftest() -> None:
    targets = ["ja", "de", "fr", "es", "pt", "zh-CN"]
    sample = "Breaking changes: the {n} tracked projects now require Spring Boot 3.5.0. See https://example.com/docs and `config.yml`."
    print(f"通道数: {len(get_pool().providers)}  |  缓存条目: {cache_count()}\n")
    for t in targets:
        try:
            out, provider = get_pool().translate(sample, t, use_cache=False)
            print(f"[{t:5s}] via {provider:18s} {out[:110]}")
        except Exception as e:  # noqa: BLE001
            print(f"[{t:5s}] FAIL {e}")
        time.sleep(0.15)
    print("\n通道状态:", json.dumps(get_pool().stats(), ensure_ascii=False, indent=2))


def _bench(n: int = 30) -> None:
    text = "Fixed a regression in the consumer group rebalance protocol and improved error handling for transient network failures."
    t0 = time.time()
    ok = 0
    for i in range(n):
        try:
            get_pool().translate(f"{text} #{i}", "de", use_cache=False)
            ok += 1
        except Exception as e:  # noqa: BLE001
            print(f"[{i}] {e}")
    dt = time.time() - t0
    print(f"\n{n} 条请求: 成功 {ok}, 耗时 {dt:.1f}s, 平均 {dt / n:.2f}s/条")
    print("通道分布:", json.dumps(get_pool().stats(), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="多通道轮询翻译器")
    ap.add_argument("--selftest", action="store_true", help="测试所有通道与结构保护")
    ap.add_argument("--bench", type=int, nargs="?", const=30, help="压测轮询吞吐")
    ap.add_argument("--stats", action="store_true", help="查看通道与缓存状态")
    ap.add_argument("--text", help="翻译一段文本")
    ap.add_argument("--target", default="zh-CN")
    args = ap.parse_args()

    if args.selftest:
        _selftest()
    elif args.bench is not None:
        _bench(args.bench)
    elif args.stats:
        print(json.dumps(pool_stats(), ensure_ascii=False, indent=2))
    elif args.text:
        print(translate_markdown(args.text, args.target))
    else:
        ap.print_help()
