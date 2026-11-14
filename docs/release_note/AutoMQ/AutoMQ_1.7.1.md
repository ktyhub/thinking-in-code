---
title: "AutoMQ 1.7.1"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.1"
published: "2026-06-23"
type: "patch"
lang: "en"
summary: "feat: add retry storm backoff · perf(failover): accelerate failover · fix(s3wal): optimize wal upload prepare by batching objectId (#3374) · fix(package): declare proto source jar dependency"
---

# AutoMQ 1.7.1

## What's Changed
* feat: add retry storm backoff by @superhx in https://github.com/AutoMQ/automq/pull/3380
* perf(failover): accelerate failover by @superhx in https://github.com/AutoMQ/automq/pull/3398
* fix(s3wal): optimize wal upload prepare by batching objectId (#3374) by @superhx in https://github.com/AutoMQ/automq/pull/3407
* fix(package): declare proto source jar dependency by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3409
* fix(auth): add authorization for AutoMQ API keys by @superhx in https://github.com/AutoMQ/automq/pull/3410
* fix: precompute s3 write checksums by @superhx in https://github.com/AutoMQ/automq/pull/3416
* fix(s3stream): validate object WAL reservation before acquire write by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3414
* fix(s3stream): abort upload part on NoSuchUploadException to prevent broker crash by @superhx in https://github.com/AutoMQ/automq/pull/3419
* fix(s3stream): limit cleanup v1 compaction scope by @superhx in https://github.com/AutoMQ/automq/pull/3423
* fix: align metrics exporter naming by @superhx in https://github.com/AutoMQ/automq/pull/3424
* fix(log): release records after offset metadata lookup by @superhx in https://github.com/AutoMQ/automq/pull/3427
* chore(s3stream): smooth the interval upload by @superhx in https://github.com/AutoMQ/automq/pull/3434
* feat(release): release 1.7.1 by @superhx in https://github.com/AutoMQ/automq/pull/3435


**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.7.0...1.7.1

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.1` · 2026-06-23 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
