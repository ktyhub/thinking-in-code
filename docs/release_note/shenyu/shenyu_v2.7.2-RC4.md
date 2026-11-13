---
title: "shenyu v2.7.2-RC4"
project: "shenyu"
repo: "apache/shenyu"
tag: "v2.7.2-RC4"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "No new contributors were added in this release candidate."
---

# shenyu v2.7.2-RC4

## What's Changed

* Fix request transformer body replay for one-shot request bodies and preserve downstream errors by @Aias00 in https://github.com/apache/shenyu/pull/8265 and https://github.com/apache/shenyu/pull/8259
* Honor `failClosed` when the sensitive-word scanner is unavailable and inspect decoded JSON text, including Unicode escapes, by @Aias00 in https://github.com/apache/shenyu/pull/8263 and https://github.com/apache/shenyu/pull/8267
* Scope Token Limiter usage extraction to provider protocol fields by @Aias00 in https://github.com/apache/shenyu/pull/8268
* Align the 2.7.2 dependency baseline with Spring Boot 3.5 and patch the release dependency set.
* Correct Maven and distribution LICENSE/NOTICE materials and validate source archives and bundled dashboard resources.

## New Contributors

No new contributors were added in this release candidate.

**Full Changelog**: https://github.com/apache/shenyu/compare/v2.7.1...v2.7.2-RC4

---

> **Source** [apache/shenyu](https://github.com/apache/shenyu) · `v2.7.2-RC4` · 2026-11-06 · [upstream release](https://github.com/apache/shenyu/releases/tag/v2.7.2-RC4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
