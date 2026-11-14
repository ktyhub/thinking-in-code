---
title: "milvus v2.6.26"
project: "milvus"
repo: "milvus-io/milvus"
tag: "v2.6.26"
version: "v2.6.26"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "Release date: October 26, 2026"
---

# milvus v2.6.26

## v2.6.26

Release date: October 26, 2026

| Milvus Version | Python SDK Version | Node.js SDK Version | Java SDK Version | Go SDK Version |
| -------------- | ------------------ | ------------------- | ---------------- | -------------- |
| 2.6.26         | 2.6.17             | 2.6.17              | 2.6.27           | 2.6.5          |

We are excited to announce the release of Milvus v2.6.26! This release speeds up RPC message decoding, cuts Proxy memory usage for large search and query requests, and fixes QueryNode crashes in nullable and NGRAM filtering, hangs during collection loading and import jobs, and timestamps that could go backward after coordinator startup.

### Improvements

- Sped up decoding of search, query, insert, and upsert RPC messages with a faster protobuf decoder, enabled by default and switchable via `common.enableFastPB` ([#53994](https://github.com/milvus-io/milvus/pull/53994), [#54002](https://github.com/milvus-io/milvus/pull/54002))
- Pinned the text analyzer stemmer independently of Tantivy so that Tantivy upgrades do not change stemming results or cause missed matches on existing text indexes and BM25 data ([#54029](https://github.com/milvus-io/milvus/pull/54029), [#54098](https://github.com/milvus-io/milvus/pull/54098))
- Reduced the delay between an async segcore operation completing and its caller receiving the result under heavy load, so completed results no longer wait behind queued work while holding memory ([#54128](https://github.com/milvus-io/milvus/pull/54128))
- Reduced Proxy memory usage for large search and query requests by sharing request payloads across shards instead of deep-copying them per shard; live heap dropped from 8.7 GB to 5.85 GB in a test with 50 concurrent nq=10000 searches ([#54224](https://github.com/milvus-io/milvus/pull/54224))
- Merged same-column array_contains conditions in OR/AND chains into array_contains_any/array_contains_all during plan compilation, reducing compilation overhead for filters with thousands of conditions ([#54435](https://github.com/milvus-io/milvus/pull/54435))
- Improved null-check filtering on JSON path indexes in sealed segments by caching the validity bitmap instead of rescanning the index for every query ([#54422](https://github.com/milvus-io/milvus/pull/54422))
- Added the `queryNode.segcore.interimIndex.sparseIPIndexAlgo` and `sparseBM25IndexAlgo` settings to choose the interim index algorithm (TAAT_NAIVE, DAAT_WAND, or DAAT_MAXSCORE) for sparse IP and BM25 search on growing and unindexed sealed segments ([#54443](https://github.com/milvus-io/milvus/pull/54443))
- Reduced repeated Parquet footer reads and parsing when loading StorageV2 segments in multiple batches, and picked up a milvus-storage fix for the endpoint URL format on Azure sovereign clouds ([#54488](https://github.com/milvus-io/milvus/pull/54488))

### Bug fixes

- Fixed an issue where grouping search with strict group size could return groups with fewer than `group_size` results even when enough matching entities existed; added `queryNode.groupBy.strictGroupStrategy` and related settings to tune this behavior ([#53451](https://github.com/milvus-io/milvus/pull/53451))
- Fixed an issue where filtering on a nullable field while inserts or upserts were running could crash the QueryNode or misread null values in growing segments ([#53870](https://github.com/milvus-io/milvus/pull/53870))
- Fixed an issue where filters that combine AND/OR with out-of-range integer comparisons on nullable integer fields could crash the QueryNode or return incorrect results ([#53897](https://github.com/milvus-io/milvus/pull/53897))
- Fixed an issue where LIKE queries on fields with an NGRAM index could crash the QueryNode or return non-matching rows when the pattern contained NUL characters ([#53710](https://github.com/milvus-io/milvus/pull/53710))
- Fixed an issue where a failed read of the persisted TSO window during coordinator startup could cause newly allocated timestamps and IDs to go backward ([#51795](https://github.com/milvus-io/milvus/pull/51795))
- Fixed an issue where canceled or timed-out search and query requests stayed in the Proxy queue and were still executed, delaying other requests under load ([#52938](https://github.com/milvus-io/milvus/pull/52938))
- Reduced peak memory of clustering compaction, which could OOM-kill DataNodes on large partitions ([#54078](https://github.com/milvus-io/milvus/pull/54078))
- Fixed an issue where import jobs could hang indefinitely when a single request needed more memory than the DataNode import memory limit, and where dropped import jobs kept waiting for memory instead of exiting ([#54112](https://github.com/milvus-io/milvus/pull/54112))
- Fixed an issue where filters on JSON fields that mix integer and floating-point literals (e.g. `p == 1 OR p == 2.0`) returned incomplete results when JSON stats were loaded ([#54157](https://github.com/milvus-io/milvus/pull/54157))
- Fixed an issue where collection loading and balancing could stall indefinitely when a QueryNode load or watch RPC hung; QueryCoord task timeouts are now enforced, with defaults raised to 2 minutes for channel tasks and 5 minutes for segment and leader tasks ([#54218](https://github.com/milvus-io/milvus/pull/54218))
- Fixed an issue where segment loading on QueryNode could hang indefinitely because concurrent waiters missed load-completion or cancellation notifications ([#54455](https://github.com/milvus-io/milvus/pull/54455))
- Fixed an issue where low-priority segment loads, such as those triggered by balancing or index updates, loaded raw field data at high priority and competed with urgent loads for resources ([#54336](https://github.com/milvus-io/milvus/pull/54336))
- Fixed an issue where paginated queries returning an empty page failed with "FieldData type not matched" in the Go SDK when the output included vector array or StructArray vector fields ([#54360](https://github.com/milvus-io/milvus/pull/54360))
- Fixed an issue where dropping an import job did not stop its import tasks already running on DataNodes ([#54433](https://github.com/milvus-io/milvus/pull/54433))
- Fixed an issue where partitions created after LoadCollection stayed unloaded on CDC standby clusters, so their data could not be queried until the collection was released and reloaded ([#54567](https://github.com/milvus-io/milvus/pull/54567))
- Fixed an issue where the `milvus_proxy_report_value` metric counted successful upserts twice, overstating the reported value ([#54606](https://github.com/milvus-io/milvus/pull/54606))

---

> **Source** [milvus-io/milvus](https://github.com/milvus-io/milvus) · `v2.6.26` · 2026-10-26 · [upstream release](https://github.com/milvus-io/milvus/releases/tag/v2.6.26)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
