---
title: "milvus v3.0.4"
project: "milvus"
repo: "milvus-io/milvus"
tag: "v3.0.4"
version: "v3.0.4"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "Release date: October 26, 2026"
---

# milvus v3.0.4

## v3.0.4

Release date: October 26, 2026

| Milvus Version | Python SDK Version | Node.js SDK Version | Java SDK Version | Go SDK Version |
| -------------- | ------------------ | ------------------- | ---------------- | -------------- |
| 3.0.4          | 3.0.2              | 3.0.6               | 3.0.10           | 3.0.0          |

We are excited to announce the release of Milvus v3.0.4! This release speeds up bulk import, compaction, and filtered and grouped search, adds lazy column-group loading for Storage V3, and fixes hangs in import, collection loading, and partial-update writes, along with several access control issues and CVEs.

### Improvements

- Improved sort compaction read throughput by reading input chunks in parallel and prefetching byte ranges eagerly ([#53437](https://github.com/milvus-io/milvus/pull/53437))
- Added support for precomputed sparse vectors in external collections backed by Parquet, Lance, and Vortex files ([#53894](https://github.com/milvus-io/milvus/pull/53894))
- Refactored Proxy DML tasks into a dedicated package to separate task responsibilities ([#54064](https://github.com/milvus-io/milvus/pull/54064))
- Ensured all output fields of a search on sealed segments are filled from the same segment snapshot as the search itself ([#54074](https://github.com/milvus-io/milvus/pull/54074))
- Added the `queryNode.segcore.tieredStorage.lazyColumnGroupEnabled` option (disabled by default) to defer loading Storage V3 column groups until first access, reducing segment load time and memory usage ([#54169](https://github.com/milvus-io/milvus/pull/54169))
- Added `autoIndex.params.sparse.ip.build` and `autoIndex.params.sparse.bm25.build` to configure sparse AutoIndex build parameters separately for IP and BM25 metrics, falling back to `autoIndex.params.sparse.build` ([#54212](https://github.com/milvus-io/milvus/pull/54212))
- Reduced health check latency on clusters with large segment metadata by no longer collecting DataCoord self metrics during CheckHealth ([#54214](https://github.com/milvus-io/milvus/pull/54214))
- Improved DataCoord import scheduling performance for clusters with many import jobs by indexing import tasks by job ID ([#54202](https://github.com/milvus-io/milvus/pull/54202))
- Reduced object storage list requests during garbage collection by scanning obsolete JSON stats prefixes once per GC cycle instead of once per segment ([#54207](https://github.com/milvus-io/milvus/pull/54207))
- Improved `ARRAY_LENGTH` filter performance on sealed segments by reading lengths from existing array chunk offsets, raising QPS from 102 to 270 on a customer filter workload ([#54321](https://github.com/milvus-io/milvus/pull/54321))
- Upgraded grpc-go to v1.84.0 so Proxy releases raw request buffers right after decoding, saving up to the full request size (61.5 MB for an nq=10000, 1536-dim search) of heap per in-flight large search ([#54271](https://github.com/milvus-io/milvus/pull/54271))
- Added a hidden `streaming.partialUpdate.enableCAS` option (enabled by default) to turn off compare-and-swap checks for partial updates on StreamingNode, trading protection against concurrent stale updates for lower write overhead ([#54249](https://github.com/milvus-io/milvus/pull/54249))
- Removed a spurious "status is nil" warning that Proxy logged on every successful query ([#54247](https://github.com/milvus-io/milvus/pull/54247))
- Reduced memory allocations when decoding RESTful V2 insert and upsert requests, and stopped logging full request payloads on conversion failures ([#54403](https://github.com/milvus-io/milvus/pull/54403))
- Reworked bulk import to assign exact per-file ID ranges after preimport, so import requests return immediately without sizing files up front, and fixed log ID exhaustion during import write retries ([#54416](https://github.com/milvus-io/milvus/pull/54416))
- Added startup configuration options to override the interim index algorithm for IP and BM25 sparse vector fields ([#54441](https://github.com/milvus-io/milvus/pull/54441))
- Upgraded Go to 1.26.9 and golang.org/x/net to v0.60.0 to address CVE-2026-78667, CVE-2026-97031, and CVE-2026-78669 ([#54451](https://github.com/milvus-io/milvus/pull/54451))
- Improved search group-by on typed JSON paths in sealed segments by reading VARCHAR, BOOL, and integer group keys from JSON shredding stats instead of parsing raw JSON ([#54456](https://github.com/milvus-io/milvus/pull/54456))
- Upgraded OpenTelemetry to 1.45.0 and cilium/ebpf to 0.22.0, and updated curl, tar, zlib, and glibc in runtime images to address CVE-2026-81870 and CVE-2026-10722 ([#54461](https://github.com/milvus-io/milvus/pull/54461))
- Reduced redundant query-term conversion for indexed ARRAY_CONTAINS filters by converting terms only on cache miss ([#54459](https://github.com/milvus-io/milvus/pull/54459), [#54465](https://github.com/milvus-io/milvus/pull/54465))
- Improved import throughput by scheduling import tasks continuously instead of waiting for each batch to finish ([#54471](https://github.com/milvus-io/milvus/pull/54471))
- Added support for cluster-local Flush and FlushAll on both primary and secondary clusters in CDC replication setups ([#54502](https://github.com/milvus-io/milvus/pull/54502))
- Isolated search fan-out work (PK filling, distance refinement, and output field materialization) into a dedicated thread pool so that searches no longer queue behind field and index loading ([#54524](https://github.com/milvus-io/milvus/pull/54524))

### Bug fixes

- Fixed an issue where a transient etcd read failure during startup could make the timestamp allocator issue timestamps older than previously allocated ones ([#51762](https://github.com/milvus-io/milvus/pull/51762))
- Fixed an issue where import jobs could hang forever and block a pchannel's checkpoint, which previously required manual etcd repair and a StreamingNode restart ([#54111](https://github.com/milvus-io/milvus/pull/54111))
- Fixed a Go SDK panic when inserting rows into collections with Timestamptz or Geometry fields ([#54131](https://github.com/milvus-io/milvus/pull/54131))
- Fixed high write latency and write backlogs on a shard when partial updates were running, where each partial-update commit blocked all other writes on the same vchannel; partial updates now only block writes that touch the same primary keys ([#54215](https://github.com/milvus-io/milvus/pull/54215))
- Fixed an issue where collection loading could hang indefinitely when a segment load or channel watch request got stuck; QueryCoord now enforces `queryCoord.channelTaskTimeout` (default 2 min) and `queryCoord.segmentTaskTimeout` (default 5 min) per task step, so increase the segment timeout if individual segment loads take longer ([#54217](https://github.com/milvus-io/milvus/pull/54217))
- Fixed an issue where slow L0 compaction manifest commits on Storage V3 could stall flush and segment info requests in DataCoord ([#54186](https://github.com/milvus-io/milvus/pull/54186))
- Fixed a potential crash when accessing AWS S3 storage, caused by native libraries bundling separate copies of the AWS runtime ([#54192](https://github.com/milvus-io/milvus/pull/54192))
- Fixed an issue where low-priority segment loads (for example, during scale-down or balancing) loaded raw field data at high priority, competing with other loads and increasing search latency ([#54335](https://github.com/milvus-io/milvus/pull/54335))
- Fixed an issue where loading StorageV3 packed scalar indexes (STL_SORT, MARISA) could use more memory than budgeted, and where load failures did not stop in-flight downloads promptly ([#54359](https://github.com/milvus-io/milvus/pull/54359))
- Fixed an issue where GROUP BY aggregation queries with ORDER BY and LIMIT could return incomplete or incorrect aggregate values when results were merged across segments and nodes ([#54393](https://github.com/milvus-io/milvus/pull/54393))
- Fixed an issue where, with authorization enabled, non-root users could access client telemetry administration APIs; these APIs now require the root user ([#54408](https://github.com/milvus-io/milvus/pull/54408))
- Fixed an issue where users could view import job details for collections they lacked Import permission on by specifying a different database or a historical collection name ([#54449](https://github.com/milvus-io/milvus/pull/54449))
- Fixed an issue where requests waiting on a QueryNode segment load could hang indefinitely, missing both load completion and cancellation ([#54452](https://github.com/milvus-io/milvus/pull/54452))
- Fixed an issue where search aggregation `top_hits` could return the least similar results instead of the most similar ones for L2 and Hamming metrics when buckets were truncated ([#54458](https://github.com/milvus-io/milvus/pull/54458))
- Fixed an issue where hybrid search with group-by could fail when output fields were returned from multiple shards ([#54457](https://github.com/milvus-io/milvus/pull/54457))
- Fixed an issue where partial upserts that omitted a nullable or default-valued TIMESTAMPTZ field could fail or reject valid requests when new primary keys were present ([#54460](https://github.com/milvus-io/milvus/pull/54460), [#54464](https://github.com/milvus-io/milvus/pull/54464))
- Fixed a memory leak when computing word-level MinHash signatures ([#54463](https://github.com/milvus-io/milvus/pull/54463))
- Fixed an issue where RESTful v2 search silently ignored explicit group-by parameters such as a non-positive `groupSize` or `strictGroupSize`; invalid values are now rejected instead of falling back to defaults ([#54466](https://github.com/milvus-io/milvus/pull/54466))
- Fixed an issue where Strong-consistency queries could wait for the next periodic time tick even after preceding writes had already been applied ([#54501](https://github.com/milvus-io/milvus/pull/54501))
- Fixed an issue where the channel checkpoint stopped advancing for idle collections with TEXT fields after inserted data had been persisted while the segment remained Growing ([#54538](https://github.com/milvus-io/milvus/pull/54538))
- Fixed an issue where snapshot manifests written by one Milvus version could fail to decode in another version; snapshot manifests are now self-describing Avro files ([#54549](https://github.com/milvus-io/milvus/pull/54549))
- Fixed an issue where querying the replicate configuration on a cluster without replication configured blocked until the request timed out, and made replicate streams back off when the secondary rejects every message ([#54555](https://github.com/milvus-io/milvus/pull/54555))
- Fixed an issue where partitions created after LoadCollection on a CDC secondary cluster were not loaded, causing queries on the secondary to miss their data ([#54561](https://github.com/milvus-io/milvus/pull/54561))
- Fixed an issue where successful upserts counted the reported value twice in proxy metrics, overstating the reported amount ([#54605](https://github.com/milvus-io/milvus/pull/54605))

---

> **Source** [milvus-io/milvus](https://github.com/milvus-io/milvus) · `v3.0.4` · 2026-10-26 · [upstream release](https://github.com/milvus-io/milvus/releases/tag/v3.0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
