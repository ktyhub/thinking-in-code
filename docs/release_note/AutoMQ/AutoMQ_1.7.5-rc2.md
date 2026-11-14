---
title: "AutoMQ 1.7.5-rc2"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.5-rc2"
published: "2026-10-28"
type: "patch"
lang: "en"
summary: "feat(s3stream): queue fast retries and support merged range reads · feat: backport from main · feat(zerozone): route RouterChannel traffic across buckets · feat: support explicit TableTopic Iceberg locations"
---

# AutoMQ 1.7.5-rc2

## What's Changed
* feat(s3stream): queue fast retries and support merged range reads by @superhx in https://github.com/AutoMQ/automq/pull/3641
* feat: backport from main by @superhx in https://github.com/AutoMQ/automq/pull/3636
* feat(zerozone): route RouterChannel traffic across buckets by @superhx in https://github.com/AutoMQ/automq/pull/3642
* feat: support explicit TableTopic Iceberg locations by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3648
* fix: ignore stale end throttling responses by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3651
* feat(s3stream): support per-bucket CRT S3 clients by @superhx in https://github.com/AutoMQ/automq/pull/3653
* fix(s3stream): parallelize stream object compaction by @superhx in https://github.com/AutoMQ/automq/pull/3656
* fix(s3stream): reduce compaction object ttl to 2h by @superhx in https://github.com/AutoMQ/automq/pull/3658
* feat(s3stream): shard object WAL prefixes by @vijayk-stripe in https://github.com/AutoMQ/automq/pull/3657
* fix(s3stream): backport WAL recovery and byte accounting fixes to 1.7 by @superhx in https://github.com/AutoMQ/automq/pull/3666
* fix(zerozone): notify snapshot readers after log metadata persistence (1.7) by @superhx in https://github.com/AutoMQ/automq/pull/3679
* fix(autobalancer): skip metrics reporter on controller-only nodes (1.7) by @superhx in https://github.com/AutoMQ/automq/pull/3687
* fix(s3): preserve native CRT runtime during shutdown (1.7) by @superhx in https://github.com/AutoMQ/automq/pull/3690
* fix: keep partition snapshot metadata consistent with offsets by @superhx in https://github.com/AutoMQ/automq/pull/3691
* fix(s3): use lenient CRT health checks for S3 control operations (1.7 backport) by @superhx in https://github.com/AutoMQ/automq/pull/3696
* fix(1.7): backport WAL recovery, router epoch, observability and controller improvements by @superhx in https://github.com/AutoMQ/automq/pull/3704
* feat(release): release 1.7.5-rc2 by @superhx in https://github.com/AutoMQ/automq/pull/3705

## New Contributors
* @vijayk-stripe made their first contribution in https://github.com/AutoMQ/automq/pull/3657

**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.7.5-rc1...1.7.5-rc2

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.5-rc2` · 2026-10-28 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.5-rc2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
