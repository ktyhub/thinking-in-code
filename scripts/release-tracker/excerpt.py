"""从 release 正文里抽一句有信息量的摘要。

**纯规则，不调用任何模型**。这里的目标不是"读懂"正文，而是把
无信息量的行过滤掉、把真正的变更描述挑出来：

- `**Full Changelog**: https://...compare/v1.2.3...v1.2.4` → 丢弃
- `## What's Changed` → 是标题，丢弃
- `* fix: xxx by @user in https://github.com/.../pull/123` → 清理成 `fix: xxx`
- `([#8378](https://...))` → 丢弃
- `Thanks to @xx for ...` / `New Contributors` → 丢弃

原来的实现只取"正文第一段、硬截断 220 字符"，抽样 60 篇有 36 篇
产出空串、纯 issue 编号或 changelog 链接 —— 这些摘要会同时污染
首页信息流、meta description 和搜索结果摘要。

被 collect.py / backfill.py / resummarize.py 共用。
"""

from __future__ import annotations

import re

CJK = re.compile(r"[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]")
COMMENT = re.compile(r"<!--.*?-->", re.S)
IMAGE = re.compile(r"!\[[^\]]*\]\([^)]*\)")
LINK = re.compile(r"\[([^\]]*)\]\([^)]*\)")
AUTOLINK = re.compile(r"<(?:https?://|mailto:)[^>]+>")
HTMLTAG = re.compile(r"<[^>]{1,200}>")
INLINE_MARK = re.compile(r"(?<!\w)[*_~`]+|[*_~`]+(?!\w)")
SPACES = re.compile(r"[ \t\u00a0]+")
URL_ONLY = re.compile(r"^(?:\S*https?://|www\.)\S*$", re.I)
ISSUE_ONLY = re.compile(r"^[(\[（]?\s*(?:#\d+(?:\s*[,，]\s*#?\d+)*)\s*[)\]）]?[.。]?$")
PR_TRAILER = re.compile(r"\s+(?:by|in)\s+@[\w.-]+(?:\s+in\s+\S+)?", re.I)
PR_URL_TAIL = re.compile(r"\s*(?:in\s+)?https?://\S*/(?:pull|issues|commit)/\S+\s*$", re.I)
BADGE_ONLY = re.compile(r"^(?:\[?!\[[^\]]*\]\([^)]*\)\]?(?:\([^)]*\))?\s*)+$")

# 出现在正文开头但没有任何信息量的段落
NOISE_STARTS = (
    "full changelog",
    "what's changed",
    "whats changed",
    "what’s changed",
    "changes since",
    "compare changes",
    "see the changelog",
    "see full changelog",
    "changelog:",
    "release notes:",
    "new contributors",
    "contributors",
    "thanks to",
    "thank you to",
    "special thanks",
    "breaking changes",
    "installation",
    "upgrade notes",
    # collect.py / backfill.py 写在正文末尾的镜像声明。它不是变更描述，
    # 但正文里唯一的段落常常就是它，所以必须显式排除。
    "mirrored verbatim",
    "all rights belong to",
    "this is an automated mirror",
    "source: https://github.com",
    # 安装/下载指引，几乎每篇都有，但对"改了什么"零信息
    "pip install",
    "pip3 install",
    "npm install",
    "npm i ",
    "yarn add",
    "pnpm add",
    "docker pull",
    "docker run",
    "brew install",
    "go get ",
    "cargo install",
    "download page",
    "here is the complete list",
    "here is the full list",
    "the full list of changes",
    "for a full list of changes",
)

LIST_PREFIX = re.compile(r"^(?:[-*+]|\d+[.)])\s+")
HEADING = re.compile(r"^#{1,6}\s")
HR = re.compile(r"^(?:[-*_]\s*){3,}$")
TABLE = re.compile(r"^\|")
QUOTE = re.compile(r"^>")
FENCE = re.compile(r"^(?:```|~~~)")


def _visible_len(s: str) -> int:
    """去掉标点与空白后的字符数，用来判断"这句话有没有实际内容"。"""
    return len(re.sub(r"[\s\W_]+", "", s))


def is_table_like(text: str) -> bool:
    """判断一段文本其实是 Markdown 表格。

    表格的每一行都不以 `|` 开头时（`Component | Version` 后接 `--- | ---`），
    _blocks 看不到分隔符，会把整张表当成一个段落。这类内容拼成摘要就是
    `Component | Version --- | --- Spring Cloud Deployer|2.9.5 ...`，必须排掉。
    """
    return text.count("|") >= 2 and bool(re.search(r"-{3,}", text))


def clean_inline(s: str) -> str:
    """把一行 Markdown 压成纯文本，并清掉 GitHub 自动生成的尾巴。"""
    s = IMAGE.sub("", s)
    s = AUTOLINK.sub("", s)
    s = LINK.sub(r"\1", s)
    s = HTMLTAG.sub("", s)
    s = PR_URL_TAIL.sub("", s)
    s = PR_TRAILER.sub("", s)
    s = INLINE_MARK.sub("", s)
    s = s.replace("\u200b", "").replace("&nbsp;", " ")
    s = SPACES.sub(" ", s)
    return s.strip(" \t-—·,，;；:：")


def is_noise(text: str) -> bool:
    """判断一段候选文本是否没有任何信息量。"""
    t = text.strip()
    if not t:
        return True

    low = t.lower().strip(" :*-—")
    for start in NOISE_STARTS:
        if low.startswith(start):
            return True

    if URL_ONLY.match(t) or ISSUE_ONLY.match(t) or BADGE_ONLY.match(t):
        return True
    if is_table_like(t):
        return True
    if re.fullmatch(r"[\w.\-+ ]{0,30}\.\.\.?", t):  # 纯版本号或 "v1.2.3..."
        return True

    # 有效字符太少：`(#8378)`、`v2.0.1`、`Beta` 之类
    if _visible_len(t) < 18:
        return True

    # 英文至少 4 个词，中文至少 10 个字，否则几乎不可能是完整句子
    if not CJK.search(t) and len(t.split()) < 4:
        return True

    return False


def _truncate(text: str, limit: int) -> str:
    """按句子边界截断，避免把词切断。"""
    if len(text) <= limit:
        return text

    cut = text[:limit]
    for sep in ("。", "！", "？", ". ", "; ", "；", "! ", "? "):
        i = cut.rfind(sep)
        if i >= limit * 0.55:
            return cut[: i + len(sep)].rstrip()
    i = cut.rfind(" ")
    if i >= limit * 0.6:
        return cut[:i].rstrip(" ,;，；:：") + "…"
    return cut.rstrip() + "…"


def _blocks(body: str):
    """按空行切块，返回 (kind, text)。

    kind ∈ {para, list, heading, quote, table, hr, fence, html}
    """
    body = COMMENT.sub("", body)
    chunks: list[tuple[str, str]] = []
    buf: list[str] = []
    in_fence = False
    fence_buf: list[str] = []

    def flush():
        if buf:
            chunks.append(("para", "\n".join(buf)))
            buf.clear()

    for raw in body.splitlines():
        line = raw.rstrip()

        if FENCE.match(line.strip()):
            if in_fence:
                in_fence = False
                fence_buf.clear()
            else:
                flush()
                in_fence = True
            continue
        if in_fence:
            fence_buf.append(line)
            continue

        s = line.strip()
        if not s:
            flush()
            continue

        if HEADING.match(s):
            flush()
            chunks.append(("heading", s))
            continue
        if HR.match(s):
            flush()
            chunks.append(("hr", s))
            continue
        if TABLE.match(s):
            flush()
            chunks.append(("table", s))
            continue
        if LIST_PREFIX.match(s):
            flush()
            chunks.append(("list", s))
            continue
        if QUOTE.match(s):
            flush()
            chunks.append(("quote", s))
            continue
        if s.startswith("<") and s.endswith(">"):
            flush()
            chunks.append(("html", s))
            continue

        buf.append(s)

    flush()
    return chunks


def _join_bullets(bullets: list[str], limit: int) -> str:
    joiner = "；" if CJK.search(bullets[0]) else " · "
    picked: list[str] = []
    total = 0
    for b in bullets:
        if picked and total + len(b) > limit:
            break
        picked.append(b)
        total += len(b) + len(joiner)
        if len(picked) >= 4:
            break
    return _truncate(joiner.join(picked), limit)


def summarize(body: str, limit: int = 220) -> str:
    """抽出摘要。找不到有信息量的内容时返回空串（由调用方决定怎么写）。

    策略是「按正文顺序取第一个有内容的块组」，而不是「取第一个段落」。
    因为 release note 普遍长这样：

        ## Feature
        * Support ACL 2.0

        ## Improvement
        * ...

        *Mirrored verbatim for indexing...*

    这里唯一的段落是末尾的免责声明，取段落必然拿到它；而按顺序取
    第一个块组，拿到的就是 Feature 下的真实变更。
    """
    if not body:
        return ""

    pending: list[str] = []

    for kind, text in _blocks(body):
        if kind == "list":
            cleaned = clean_inline(QUOTE.sub("", LIST_PREFIX.sub("", text.strip())).strip())
            if cleaned:
                pending.append(cleaned)
            continue

        # 非列表块代表 bullet 组结束：先结算已积累的列表项
        if pending:
            joined = _join_bullets(pending, limit)
            if joined:
                return joined.replace('"', "'")
            pending = []

        if kind == "para":
            cleaned = clean_inline(text.replace("\n", " "))
            if not is_noise(cleaned):
                return _truncate(cleaned, limit).replace('"', "'")

    if pending:
        joined = _join_bullets(pending, limit)
        if joined:
            return joined.replace('"', "'")

    return ""


def summarize_zh(body: str, limit: int = 150) -> str:
    """中文正文的摘要，长度更短（中文信息密度高）。"""
    return summarize(body, limit=limit)
