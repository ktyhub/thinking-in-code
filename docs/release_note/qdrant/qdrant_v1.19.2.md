---
title: "qdrant v1.19.2"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.19.2"
version: "v1.19.2"
published: "2026-10-05"
type: "patch"
lang: "en"
summary: "https://github.com/qdrant/qdrant/pull/10682 - Don't rewrite full sparse posting list on every upsert, making sparse vector upserts significantly faster"
---

# qdrant v1.19.2

# Change log

## Improvements

* https://github.com/qdrant/qdrant/pull/10682 - Don't rewrite full sparse posting list on every upsert, making sparse vector upserts significantly faster
* https://github.com/qdrant/qdrant/pull/10349, https://github.com/qdrant/qdrant/pull/10445, https://github.com/qdrant/qdrant/pull/10661, https://github.com/qdrant/qdrant/pull/10700 - Make proxy segments persist their state, prevents WAL pinning and long recovery times on restart
* https://github.com/qdrant/qdrant/pull/10686 - Fix HNSW builds not always saturating all assigned threads
* https://github.com/qdrant/qdrant/pull/10624 - Resolve filter IDs only once per search request, improving performance
* https://github.com/qdrant/qdrant/pull/10853 - Allow to bind internal gRPC to separate network interface
* https://github.com/qdrant/qdrant/pull/10852 - Add startup warning if no API keys are configured
* https://github.com/qdrant/qdrant/pull/10891 - Don't hold collections lock during Raft snapshot, which previously blocked access to all collections
* https://github.com/qdrant/qdrant/pull/10570 - Double time for consensus synchronization await to allow time for re-election
* https://github.com/qdrant/qdrant/pull/10617 - Encode queue proxy batches in blocking thread, prevent blocking Tokio runtimes
* https://github.com/qdrant/qdrant/pull/10480 - Prevent blocking updates while synchronizing segment manifest
* https://github.com/qdrant/qdrant/pull/10541 - Prevent blocking updates while planning optimizations
* https://github.com/qdrant/qdrant/pull/10610 - Move BM25 sparse embedding to blocking thread to prevent blocking runtimes
* https://github.com/qdrant/qdrant/pull/10599 - Move queue proxy WAL reads and batch building off async runtime
* https://github.com/qdrant/qdrant/pull/10794 - Bound cardinality estimates by number of points
* https://github.com/qdrant/qdrant/pull/10618 - Expose resharding state in telemetry
* https://github.com/qdrant/qdrant/pull/10458 - Make reporting memory statistics more efficient with parallel workers
* https://github.com/qdrant/qdrant/pull/10813 - Report transferred bytes and rate in snapshot transfers comment
* https://github.com/qdrant/qdrant/pull/10781 - Report Acorn search statistics in telemetry
* https://github.com/qdrant/qdrant/pull/7714 - Add number of failed transfers in metrics (`collection_shard_transfer_failed`)
* https://github.com/qdrant/qdrant/pull/10542 - Add iteration count in 'Trying to read-lock a segment' log line
* https://github.com/qdrant/qdrant/pull/10714 - Support GCS and Azure Blob Storage for collection snapshots
* https://github.com/qdrant/qdrant/pull/10715 - Add configurable prefix for object storage snapshots

## Bug Fixes

* https://github.com/qdrant/qdrant/pull/10903 - Fix zero search results when HNSW entry point does not satisfy filter
* https://github.com/qdrant/qdrant/pull/10870 - Fix adding a named multivector to indexed collection breaking search
* https://github.com/qdrant/qdrant/pull/10577 - Don't claim unfinished operations when flushing, fixing data inconsistencies
* https://github.com/qdrant/qdrant/pull/10507, https://github.com/qdrant/qdrant/pull/10531 - Fix proxy segments not propagating some named vector or payload index changes
* https://github.com/qdrant/qdrant/pull/10837 - Prevent write tearing in all Gridstore storages, which could previously corrupt storage
* https://github.com/qdrant/qdrant/pull/10812 - Fix mutable payload index not able to load on torn write, causing crash loop
* https://github.com/qdrant/qdrant/pull/10643 - Fix stale snapshot transfer on recovering peer breaking other peers
* https://github.com/qdrant/qdrant/pull/10897 - Fix `group_by` on paths with an array index
* https://github.com/qdrant/qdrant/pull/10567 - Fix MMR pagination with offsets
* https://github.com/qdrant/qdrant/pull/10878 - Fix MMR candidates not ordered by vector distance before merge, improving accuracy
* https://github.com/qdrant/qdrant/pull/10593 - Fix TextAny match on unindexed payload fields
* https://github.com/qdrant/qdrant/pull/10777 - Fix 2-hop Acorn not being capped
* https://github.com/qdrant/qdrant/pull/10855 - Fix `alt_api_key` not being used in internal gRPC API calls
* https://github.com/qdrant/qdrant/pull/10862 - Reject full-text filters with `min_token_len` > `max_token_len`
* https://github.com/qdrant/qdrant/pull/10277 - Don't re-apply committed entries already applied during consensus start

## Security

* https://github.com/qdrant/qdrant/pull/10758 - Accept only read-write API keys on the internal gRPC API
* https://github.com/qdrant/qdrant/pull/10556 - Don't expose path in logs when uploading snapshot without collection configuration

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.19.2` · 2026-10-05 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.19.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
