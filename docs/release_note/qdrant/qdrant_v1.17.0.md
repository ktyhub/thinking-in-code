---
title: "qdrant v1.17.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.17.0"
version: "v1.17.0"
published: "2026-02-20"
type: "minor"
lang: "en"
summary: "milestone#38 - Relevance Feedback (docs) · milestone#44 - API for detailed report on optimization progress and stages (docs) · milestone#40 - API for aggregated telemetry of the whole cluster (docs)"
---

# qdrant v1.17.0

# Change log

## Features 🏋️

* [milestone#38](https://github.com/qdrant/qdrant/milestone/38?closed=1) - Relevance Feedback ([docs](https://qdrant.tech/documentation/concepts/search-relevance/#relevance-feedback))
* [milestone#44](https://github.com/qdrant/qdrant/milestone/44?closed=1) - API for detailed report on optimization progress and stages ([docs](https://qdrant.tech/documentation/concepts/optimizer/#optimization-monitoring))
* [milestone#40](https://github.com/qdrant/qdrant/milestone/40?closed=1) - API for aggregated telemetry of the whole cluster ([docs](https://qdrant.tech/documentation/guides/monitoring/#cluster-wide-telemetry))
* [milestone#43](https://github.com/qdrant/qdrant/milestone/43?closed=1) - Unlimited update queue to gracefully smooth update spikes ([docs](https://qdrant.tech/documentation/guides/low-latency-search/))
* https://github.com/qdrant/qdrant/pull/8071 - Add Audit Access Logging ([docs](https://qdrant.tech/documentation/guides/security/#audit-logging))
* https://github.com/qdrant/qdrant/pull/8063 - Add Weighted RRF ([docs](https://qdrant.tech/documentation/concepts/hybrid-queries/#reciprocal-rank-fusion-rrf))
* https://github.com/qdrant/qdrant/pull/7643 - Add config option to control update throughput and prevent unoptimized searches ([docs](https://qdrant.tech/documentation/guides/low-latency-search/))
* https://github.com/qdrant/qdrant/pull/7929 - Add configurable read fan-out delay for dealing with tail latency in distributed clusters ([docs](https://qdrant.tech/documentation/guides/low-latency-search/#use-delayed-fan-outs))
* https://github.com/qdrant/qdrant/pull/7963 - For upserts, add `update_mode` parameter to either `upsert`, `update` or `insert` ([docs](https://qdrant.tech/documentation/concepts/points/#update-mode))
* https://github.com/qdrant/qdrant/pull/7835 - Add secondary API key configuration for zero downtime key rotation in distributed clusters
* https://github.com/qdrant/qdrant/pull/7838 - Add dedicated HTTP port for `/metrics` endpoint for internal monitoring
* https://github.com/qdrant/qdrant/pull/7615 - Add API to list shard keys ([docs](https://qdrant.tech/documentation/guides/distributed_deployment/#user-defined-sharding))

## Improvements 🤸

* https://github.com/qdrant/qdrant/pull/7802 - Improve timeout handling on read operations
* https://github.com/qdrant/qdrant/pull/7750 - Improve timeout handling in update operations, prevent shard failures in case of timed out updates after WAL
* https://github.com/qdrant/qdrant/pull/8025 - Recover snapshot without creating intermediate files, greatly improves recovery time and disk usage
* https://github.com/qdrant/qdrant/pull/8059 - Recover snapshots directly into target file system to avoid expensive file movements
* https://github.com/qdrant/qdrant/pull/7883 - Flush after snapshot unpack with `syncfs` to persist a large number of files much more efficiently
* https://github.com/qdrant/qdrant/pull/8072 - Don't lock shard holder structure during creation of a snapshot, previously blocking shard level operations
* https://github.com/qdrant/qdrant/pull/8166 - Add timeout to snapshot downloads, abort if connection gets stuck for more than a minute
* https://github.com/qdrant/qdrant/pull/8007, https://github.com/qdrant/qdrant/pull/8056 - Improve segments locking approach to minimize lock contention
* https://github.com/qdrant/qdrant/pull/8105 - Limit number of parallel updates on a shard to 64 to prevent order tracking overhead
* https://github.com/qdrant/qdrant/pull/8169 - Reduce locking in Gridstore to lower search tail latencies
* https://github.com/qdrant/qdrant/pull/8164 - Actively free cache memory for closed WAL segments to reduce memory pressure
* https://github.com/qdrant/qdrant/pull/7952 - Disable in-place payload updates on unindexed fields, improve immutability guarantees of indexed segments improving partial snapshots
* https://github.com/qdrant/qdrant/pull/7887 - Add ability to disable extra HNSW links construction for specific payload indices ([docs](https://qdrant.tech/documentation/concepts/indexing/#disable-the-creation-of-extra-edges-for-payload-fields))
* https://github.com/qdrant/qdrant/pull/7971 - Enable missing option for vector storage to populate single-file mmap
* https://github.com/qdrant/qdrant/pull/7928 - Enable `io_uring` when reading batch of vectors
* https://github.com/qdrant/qdrant/pull/7919 - Improve error message for datetime parse failures
* https://github.com/qdrant/qdrant/pull/8053 - Allow to configure load concurrency for collections, shards and segments
* https://github.com/qdrant/qdrant/pull/7809 - Add more convenient way to provide API-keys for external inference providers ([docs](https://qdrant.tech/documentation/concepts/inference/#external-embedding-model-providers))
* https://github.com/qdrant/qdrant/pull/8093 - Don't lock WAL during serialization of new updates, which was costly for large operations
* https://github.com/qdrant/qdrant/pull/7834 - Extend WAL retention when replicas are dead, prevent full shard transfers in case of peer failures
* https://github.com/qdrant/qdrant/pull/7565 - Disable old shard key format deprecated in 1.15.0
* https://github.com/qdrant/qdrant/pull/8125 - Skip building extra HNSW links for deleted vectors
* https://github.com/qdrant/qdrant/pull/8163 - Improve search result processing to use less CPU with a high search limit
* https://github.com/qdrant/qdrant/pull/8175 - Use less allocations for HNSW plain filtered search

## Bug Fixes 🤹

* https://github.com/qdrant/qdrant/pull/7850 - Fix flush ordering to follow segment dependencies, prevents dataloss by CoW on flush interruption
* https://github.com/qdrant/qdrant/pull/8103 - Fix data race in stream records transfer potentially missing ongoing updates
* https://github.com/qdrant/qdrant/pull/7983 - Fix interlocking problem on creation of payload index
* https://github.com/qdrant/qdrant/pull/7999 - Fix interlocking problem on collection-level update operations
* https://github.com/qdrant/qdrant/pull/8131 - Fix deadlock during snapshot with concurrent updates
* https://github.com/qdrant/qdrant/pull/8128 - Fix gRPC/HTTP2 `too_many_internal_resets` error due to how we internally cancel ongoing requests
* https://github.com/qdrant/qdrant/pull/8019 - Improve handling of HTTP2 channels closing in connection pool
* https://github.com/qdrant/qdrant/pull/8104 - Fix data race in WAL and shard clocks snapshot, ensure they remain consistent
* https://github.com/qdrant/qdrant/pull/7961 - Fix using incorrect versions in partial snapshot manifest construction
* https://github.com/qdrant/qdrant/pull/8095 - Fix incorrect internal protocol usage for shard snapshot transfers
* https://github.com/qdrant/qdrant/pull/7950 - Fix integer overflow in query batch when using high limits
* https://github.com/qdrant/qdrant/pull/7972 - Fix search aggregator panic with limit 0
* https://github.com/qdrant/qdrant/pull/8100 - Fix round floats not used in integer index, JSON doesn't distinguish between integers and floats
* https://github.com/qdrant/qdrant/pull/8097 - Fix `score_threshold` not being used in score boosting queries
* https://github.com/qdrant/qdrant/pull/7877 - Fix `Corrupted ID tracker mapping storage` bug when disk is full
* https://github.com/qdrant/qdrant/pull/7944 - Fix gRPC API response status counting in telemetry and metrics
* https://github.com/qdrant/qdrant/pull/7857 - Fix total count in progress tracker for replicate points with filter
* https://github.com/qdrant/qdrant/pull/7856 - Fix creation of payload index in empty collection using user-defined sharding
* https://github.com/qdrant/qdrant/pull/8099 - Fix ignoring CA certs for internal requests if configured
* https://github.com/qdrant/qdrant/pull/8176 - Add missing timeout parameter to some endpoints

## Web UI :bento: 

* https://github.com/qdrant/qdrant-web-ui/pull/345 - Detailed visualization of optimization progress
* https://github.com/qdrant/qdrant-web-ui/pull/334 - Create collection dialog now previews the exact command
* https://github.com/qdrant/qdrant-web-ui/pull/341 - Buttons for resharding control
* https://github.com/qdrant/qdrant-web-ui/pull/344 - Points filter and search bar restored and improved

## Qdrant Edge :hocho: 

Qdrant Edge is an in-process version of Qdrant, which shares the same internals, storage format, and points API as the server version, but designed to work locally. Qdrant Edge is compatible with server version and it can read shard snapshots created by server version of Qdrant. More documentation available [here](https://qdrant.tech/documentation/edge/).

## Deprecations :warning:

* Starting from v1.17.0 Qdrant changes response format for vector fields in gRPC interface. All official Qdrant clients should be already adopted to this change, so please make sure you upgrade your client libraries and check that you are not using deprecated fields. More info: https://github.com/qdrant/qdrant/pull/7183

* Upcoming deprecations:
  * In Qdrant v1.18.x all deprecated search methods will be completely removed and won't be available even from old client libraries.
  * In Qdrant v1.17.x we will completely remove RocksDB support in favor of [gridstore](https://qdrant.tech/articles/gridstore-key-value-storage/), that means that direct upgrade from v1.15.x into v1.17.x won't be possible. Please follow [upgrade instructions](https://qdrant.tech/documentation/faq/qdrant-fundamentals/#how-do-i-avoid-issues-when-updating-to-the-latest-version) and upgrade one minor version at a time to avoid unsupported storage errors. Note that Qdrant Cloud infrastructure automatically generates a proper upgrade steps, so you don't have to worry about that.

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.17.0` · 2026-02-20 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
