---
title: "qdrant v1.17.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.17.1"
version: "v1.17.1"
published: "2026-03-27"
type: "patch"
lang: "en"
summary: "milestone#46 - Defer point updates, efficiently apply and optimize points with prevent_unoptimized=true · https://github.com/qdrant/qdrant/pull/8188 - Make Gridstore flushes non-blocking to reduce search tail latencies"
---

# qdrant v1.17.1

# Change log

## Improvements

* [milestone#46](https://github.com/qdrant/qdrant/milestone/46?closed=1) - Defer point updates, efficiently apply and optimize points with `prevent_unoptimized=true`
* https://github.com/qdrant/qdrant/pull/8188 - Make Gridstore flushes non-blocking to reduce search tail latencies
* https://github.com/qdrant/qdrant/pull/8235 - Improve performance of filtered search in case of singular payload value
* https://github.com/qdrant/qdrant/pull/8402 - Add request tracing ID into audit log
* https://github.com/qdrant/qdrant/pull/8460 - Propagate WAL errors instead of panicking during loading of shards
* https://github.com/qdrant/qdrant/pull/8301 - Allow peer to bootstrap with used URI if empty

## Bug fixes

* https://github.com/qdrant/qdrant/pull/8177 - GPU: fix raw Vulkan name pointer type
* https://github.com/qdrant/qdrant/pull/8193 - Fix creation of uninitialized shard key with replication factor > 1, fixing tiered multi-tenancy workflow
* https://github.com/qdrant/qdrant/pull/8217 - Prevent `min_should` panic on large amount of conditions
* https://github.com/qdrant/qdrant/pull/8179 - Fix for restore of cluster snapshots which creates unnecessary replicas in Partial state
* https://github.com/qdrant/qdrant/pull/8220 - Fix Server disconnected without sending a response error while performing concurrent ingestion using
* https://github.com/qdrant/qdrant/pull/8341 - Security patch to force snapshot recovery from snapshot directory only
* https://github.com/qdrant/qdrant/pull/8373 - Fix lock for collection-level operations during shard transfer
* https://github.com/qdrant/qdrant/pull/8438 - Do not fail on collection-level operations with dummy shard
* https://github.com/qdrant/qdrant/pull/8455 - Fix WAL reading issue introduced in 1.17.0
* https://github.com/qdrant/qdrant/pull/8454 - Fix another panic in WAL replay
* https://github.com/qdrant/qdrant/pull/8475 - Fix for WAL delta transfer: reject truncated recovery points before equal-pruning
* https://github.com/qdrant/qdrant/pull/8514 - Fix incorrect warning in geo-index
* https://github.com/qdrant/qdrant/pull/8374 - Prevent locking shard holder for a long time in slow stream records transfers
* https://github.com/qdrant/qdrant/pull/8480 - Fix panic in optimizer logging
* https://github.com/qdrant/qdrant/pull/8449 - Fix panic in chunked vector storage

## Preview

This features are not officially released yet, but available in the build:

* https://github.com/qdrant/qdrant/pull/8214 - Per-collection metrics in Prometheus
* https://github.com/qdrant/qdrant/pull/8498 - API for reading audit log entries
* https://github.com/qdrant/qdrant/pull/8469 - Maximum batch size config in strict mode

## Edge

* Rust Crate for Qdrant Edge v0.6.0 - https://crates.io/crates/qdrant-edge
* Python Package for Qdrant Edge v0.6.0 - https://pypi.org/project/qdrant-edge-py/

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.17.1` · 2026-03-27 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.17.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
