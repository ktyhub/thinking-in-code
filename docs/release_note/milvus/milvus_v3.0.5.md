---
title: "milvus v3.0.5"
project: "milvus"
repo: "milvus-io/milvus"
tag: "v3.0.5"
version: "v3.0.5"
published: "2026-10-30"
type: "patch"
lang: "en"
summary: "Release date: October 30, 2026"
---

# milvus v3.0.5

## v3.0.5

Release date: October 30, 2026

| Milvus Version | Python SDK Version | Node.js SDK Version | Java SDK Version | Go SDK Version |
| -------------- | ------------------ | ------------------- | ---------------- | -------------- |
| 3.0.5          | 3.0.2              | 3.0.6               | 3.0.12           | 3.0.0          |

We are excited to announce the release of Milvus v3.0.5! This release adds resource-group-aware load status in QueryCoord, reduces memory use in several paths. It also fixes stability issues around coordinator restarts, rolling upgrades and transient etcd errors.

### Improvements

- Added per-resource-group load percentage and shard-leader readiness in QueryCoord, and tagged each shard leader with its replica's resource group, so queries can be routed within a single resource group ([#52500](https://github.com/milvus-io/milvus/pull/52500), [#52711](https://github.com/milvus-io/milvus/pull/52711))
- Reduced copying in unscored Tantivy term queries by borrowing decoded postings blocks directly ([#54469](https://github.com/milvus-io/milvus/pull/54469))
- Upgraded Knowhere to v3.0.17 and moved nullable vector offset mapping behind Knowhere APIs ([#54473](https://github.com/milvus-io/milvus/pull/54473))
- Reduced memory allocations when encoding batched RESTful query and search responses by reusing per-request encoding buffers ([#54540](https://github.com/milvus-io/milvus/pull/54540))
- Improved text analyzer performance by reusing compiled regexes and per-filter search caches in analyzer filters ([#54570](https://github.com/milvus-io/milvus/pull/54570))
- Added an opt-in two-tier mix compaction planner (`dataCoord.compaction.twoTierCompaction`, default off) to reduce compaction write amplification ([#54589](https://github.com/milvus-io/milvus/pull/54589))
- Reduced timestamp index memory usage when loading small sealed segments ([#54659](https://github.com/milvus-io/milvus/pull/54659))
- Added the missing `status="fail"` label to the `internal_storage_op_count` metric for failed `get` operations; the old unlabeled series stops and the new series starts from zero ([#54637](https://github.com/milvus-io/milvus/pull/54637))
- Allowed hyphens in resource group names after the first character, matching the naming rules for partitions ([#54679](https://github.com/milvus-io/milvus/pull/54679))
- Reduced memory allocations in compaction merge sort by reusing output columns across records ([#54718](https://github.com/milvus-io/milvus/pull/54718))

### Bug fixes

- Fixed an issue where collections with struct array fields could force-load raw embedding-list vectors on first search or after cache eviction, increasing memory usage and query latency ([#54167](https://github.com/milvus-io/milvus/pull/54167))
- Fixed an issue where upserts on CMEK-enabled collections wrote the delete part (primary keys and timestamps) to the WAL without encryption ([#54478](https://github.com/milvus-io/milvus/pull/54478))
- Fixed an issue where `ST_DWITHIN` filters returned fewer rows on segments with an RTREE index than on unindexed segments; empty geometries no longer match `ST_DWITHIN`, consistent with PostGIS ([#54611](https://github.com/milvus-io/milvus/pull/54611))
- Fixed an issue where writes to Storage V3 segments could stall after a coordinator restart because the next flush used a column layout that conflicted with the committed manifest ([#54652](https://github.com/milvus-io/milvus/pull/54652))
- Fixed an issue where QueryNode could panic while replaying encrypted WAL messages from a dropped database that shared a physical channel with other collections ([#54640](https://github.com/milvus-io/milvus/pull/54640))
- Fixed an issue where partial upserts failed on collections with nullable struct array fields when the field was omitted and the batch contained new primary keys ([#54619](https://github.com/milvus-io/milvus/pull/54619))
- Fixed an issue where index state was incorrectly reported as Failed when a partition was dropped while the index state was being queried ([#54670](https://github.com/milvus-io/milvus/pull/54670))
- Fixed a data race when serializing sync task statistics concurrently with task execution ([#54610](https://github.com/milvus-io/milvus/pull/54610))
- Fixed an issue where specifying a non-integer max_length for a field returned a raw parsing error instead of an invalid-parameter error naming the field ([#54694](https://github.com/milvus-io/milvus/pull/54694))
- Fixed a panic when stopping MixCoord during rolling upgrades that caused a core dump and left the old pod stuck in Terminating for several minutes ([#54732](https://github.com/milvus-io/milvus/pull/54732))
- Fixed an issue where Milvus Backup could not replicate the flush positions returned by FlushAll ([#54745](https://github.com/milvus-io/milvus/pull/54745))
- Fixed an issue where MixCoord and other components crashed on transient etcd errors such as leader changes, which could stall scale-down; they now retry and re-watch until etcd recovers ([#54754](https://github.com/milvus-io/milvus/pull/54754))
- Fixed an issue where stopping all query nodes of a cluster at the same time could hang for up to the graceful stop timeout (30 minutes by default); renamed `queryNode.standaloneMigrateDataTimeout` to `queryNode.migrateDataTimeout`, and the old key still works ([#54813](https://github.com/milvus-io/milvus/pull/54813))
- Fixed an issue where, after switching the message queue (for example from Pulsar to Woodpecker), query nodes could keep reconnecting from an incompatible position and stop consuming data ([#54811](https://github.com/milvus-io/milvus/pull/54811))
- Fixed an issue where fields named after contextual keywords such as `iso` or `interval` could be created but not used in filter expressions; `LIKE`, `AND`, `OR`, `NOT` and `IN` are now rejected as field names in any casing when creating a collection or adding a field ([#54770](https://github.com/milvus-io/milvus/pull/54770))
- Fixed an issue where the coordinator could crash when a client disconnected during a SuspendNode request while an etcd write was being retried ([#54802](https://github.com/milvus-io/milvus/pull/54802))

---

> **Source** [milvus-io/milvus](https://github.com/milvus-io/milvus) · `v3.0.5` · 2026-10-30 · [upstream release](https://github.com/milvus-io/milvus/releases/tag/v3.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
