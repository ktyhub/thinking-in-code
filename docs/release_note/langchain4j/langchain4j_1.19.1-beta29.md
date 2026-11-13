---
title: "langchain4j 1.19.1-beta29"
project: "langchain4j"
repo: "langchain4j/langchain4j-spring"
tag: "1.19.1-beta29"
published: "2026-09-07"
type: "patch"
lang: "en"
summary: "It was cut from main instead of release/1.19.x. Despite the version number, it is not a patch on top of 1.19.0-beta29: its code is byte-for-byte identical to 1.20.0-beta30 — 211 files, 9,000 lines ahead of 1.19.0-beta29."
---

# langchain4j 1.19.1-beta29

> [!WARNING]
> **This release was published by mistake. Do not use it.**

It was cut from `main` instead of `release/1.19.x`. Despite the version number, it is **not** a patch on top of `1.19.0-beta29`: its code is byte-for-byte identical to `1.20.0-beta30` — **211 files, ~9,000 lines** ahead of `1.19.0-beta29`.

Maven Central is immutable, so these artifacts cannot be withdrawn. This note is the only way we can flag them.

> [!CAUTION]
> **`1.19.1-beta29` silently drops two published starters.**
> `langchain4j-github-models-spring-boot-starter` and `langchain4j-github-models-spring-boot4-starter` exist at `1.19.0-beta29` but **do not exist** at `1.19.1-beta29` — they were removed in `1.20.0` (#210), and that removal was swept into this release. A `1.19.0-beta29 → 1.19.1-beta29` bump therefore fails to resolve those artifacts. They are published again at `1.19.2-beta29`.

## Which version should I use?

| If you are on | Use | Why |
|---|---|---|
| `1.19.0-beta29` or earlier, and want to stay on the `1.19.x` line | **`1.19.2-beta29`** | The intended patch: points at core `1.19.2`; no code changes |
| **`1.19.1-beta29`** | **`1.20.0-beta30` or later** | See the warning below |
| anything else | **`1.20.0-beta30`** | Current release |

> [!CAUTION]
> **If you are already on `1.19.1-beta29`, do not "upgrade" to `1.19.2-beta29`.**
> `1.19.2-beta29` is numerically higher but contains *less* — it is the real `1.19.0-beta29` re-pointed at core `1.19.2`, while `1.19.1-beta29` accidentally shipped all of `1.20.0-beta30`. Go to `1.20.0-beta30` or later instead.

## What replaced it

`1.19.2-beta29` is the patch that `1.19.1-beta29` was meant to be: no Java changes at all, only the dependency bump to core `1.19.2`.

## Also affected

`langchain4j` (core) `1.19.1` was published from the same faulty run and carries the same warning. Use `1.19.2` or `1.20.0`.

---

> **Source** [langchain4j/langchain4j-spring](https://github.com/langchain4j/langchain4j-spring) · `1.19.1-beta29` · 2026-09-07 · [upstream release](https://github.com/langchain4j/langchain4j-spring/releases/tag/1.19.1-beta29)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
