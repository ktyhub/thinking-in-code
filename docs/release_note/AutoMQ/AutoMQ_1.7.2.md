---
title: "AutoMQ 1.7.2"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.2"
published: "2026-07-21"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/AutoMQ/automq/compare/1.7.1...1.7.2"
---

# AutoMQ 1.7.2

## What's Changed
* feat: add runtime monitor by @superhx in https://github.com/AutoMQ/automq/pull/3420
* fix(tabletopic): use stable fps metric name by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3440
* fix(s3stream): track stalled pending requests by @superhx in https://github.com/AutoMQ/automq/pull/3441
* perf(failover): optimize failover to reduce latency. (#3412) by @superhx in https://github.com/AutoMQ/automq/pull/3443
* feat(connect): Add Connect startup failure log by @woshigaopp in https://github.com/AutoMQ/automq/pull/3354
* feat: parallelize list offset handling by @superhx in https://github.com/AutoMQ/automq/pull/3445
* refactor: reduce list offset parallelization diff by @superhx in https://github.com/AutoMQ/automq/pull/3446
* feat(s3stream): support cross-bucket multipart copy by @superhx in https://github.com/AutoMQ/automq/pull/3450
* fix(s3stream): distinguish unset write bucket by @superhx in https://github.com/AutoMQ/automq/pull/3451
* refactor(s3stream): move metrics declarations to owners by @superhx in https://github.com/AutoMQ/automq/pull/3453
* feat: support shared network bandwidth limiter by @superhx in https://github.com/AutoMQ/automq/pull/3457
* fix: add kafka-go metadata compatibility mode by @superhx in https://github.com/AutoMQ/automq/pull/3459
* feat(s3stream): recycle sequential byte buffer slabs by @superhx in https://github.com/AutoMQ/automq/pull/3461
* feat(tabletopic): derive identifiers from Debezium key by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3462
* feat(release): release 1.7.2 by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3467


**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.7.1...1.7.2

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.2` · 2026-07-21 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
