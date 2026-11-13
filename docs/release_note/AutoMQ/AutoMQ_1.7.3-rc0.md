---
title: "AutoMQ 1.7.3-rc0"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.3-rc0"
published: "2026-08-06"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/AutoMQ/automq/compare/1.7.2...1.7.3-rc0"
---

# AutoMQ 1.7.3-rc0

## What's Changed
* perf(zerozone): improve high-throughput routing by @superhx in https://github.com/AutoMQ/automq/pull/3468
* perf(jvm): enable generational ZGC on JDK 21 by @superhx in https://github.com/AutoMQ/automq/pull/3471
* fix: broker cannot gracefully shutdown when fenced by a duplicate node by @superhx in https://github.com/AutoMQ/automq/pull/3474
* fix(s3stream): improve V1 stream object compaction convergence by @superhx in https://github.com/AutoMQ/automq/pull/3473
* fix(s3stream): isolate snapshot read options by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3481
* fix(s3stream): delay pressure major compaction by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3484
* feat: cherry-pick 3485 3487 by @superhx in https://github.com/AutoMQ/automq/pull/3488
* refactor(s3stream): remove thread pool status logging by @superhx in https://github.com/AutoMQ/automq/pull/3489
* fix(cli): negotiate broker API versions for backward compatibility by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3494


**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.7.2...1.7.3-rc0

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.3-rc0` · 2026-08-06 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.3-rc0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
