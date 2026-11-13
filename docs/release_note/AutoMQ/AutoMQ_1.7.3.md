---
title: "AutoMQ 1.7.3"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.3"
published: "2026-08-18"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/AutoMQ/automq/compare/1.7.2...1.7.3"
---

# AutoMQ 1.7.3

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
* docs: define PR description conventions by @superhx in https://github.com/AutoMQ/automq/pull/3499
* fix(s3wal): release failover WAL resources (#3504) by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3508
* fix(s3stream): account for small record cache overhead by @superhx in https://github.com/AutoMQ/automq/pull/3510
* fix(s3stream): burst WAL uploads on cache backoff by @superhx in https://github.com/AutoMQ/automq/pull/3515
* perf(s3stream): force WAL upload before cache backoff by @superhx in https://github.com/AutoMQ/automq/pull/3518
* feat(docker): use Java 21 in the Bitnami runtime image by @superhx in https://github.com/AutoMQ/automq/pull/3521
* feat(release): release 1.7.3 by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3522


**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.7.2...1.7.3

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.3` · 2026-08-18 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
