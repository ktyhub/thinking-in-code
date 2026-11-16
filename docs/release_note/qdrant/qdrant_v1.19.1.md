---
title: "qdrant v1.19.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.19.1"
version: "v1.19.1"
published: "2026-09-04"
type: "patch"
lang: "en"
summary: "https://github.com/qdrant/qdrant/pull/10342, https://github.com/qdrant/qdrant/pull/10420 - Speed up and saturate memory bandwidth in quantized scoring with prefetching"
---

# qdrant v1.19.1

# Change log

## Improvements

* https://github.com/qdrant/qdrant/pull/10342, https://github.com/qdrant/qdrant/pull/10420 - Speed up and saturate memory bandwidth in quantized scoring with prefetching
* https://github.com/qdrant/qdrant/pull/10391, https://github.com/qdrant/qdrant/pull/10392, https://github.com/qdrant/qdrant/pull/10362, https://github.com/qdrant/qdrant/pull/10437, https://github.com/qdrant/qdrant/pull/10439, https://github.com/qdrant/qdrant/pull/10381 - Rework and batch 4-bit TurboQuant SIMD implementation for better performance
* https://github.com/qdrant/qdrant/pull/10441 - Limit query plane allocations for better search performance
* https://github.com/qdrant/qdrant/pull/8650 - Improve L2 cosine preprocessing performance on AVX
* https://github.com/qdrant/qdrant/pull/10042 - Batch deletion checks for faster full scans
* https://github.com/qdrant/qdrant/pull/10054, https://github.com/qdrant/qdrant/pull/10010, https://github.com/qdrant/qdrant/pull/10194 - Batch searches in HNSW for faster search
* https://github.com/qdrant/qdrant/pull/10099 - Skip bad items before pushing into HNSW priority queue
* https://github.com/qdrant/qdrant/pull/10312, https://github.com/qdrant/qdrant/pull/10333 - Skip point ID resolution in search post processing to improve search performance
* https://github.com/qdrant/qdrant/pull/10040, https://github.com/qdrant/qdrant/pull/10066 - Use raw payloads in shard transfer to make payload heavy shard transfers 1.5x faster
* https://github.com/qdrant/qdrant/pull/9760 - Make set replica state and abort transfer/resharding crash safe to prevent consensus desync
* https://github.com/qdrant/qdrant/pull/9786 - Make restart transfer operation crash safe to prevent consensus desync
* https://github.com/qdrant/qdrant/pull/10345 - Query shard status more efficiently, don't build full segment info
* https://github.com/qdrant/qdrant/pull/10455 - Faster memory reporting on Linux with cachestat
* https://github.com/qdrant/qdrant/pull/10457 - Probe segment memory utilization outside of read locks
* https://github.com/qdrant/qdrant/pull/10027 - Honor `max_segment_size` on filter based updates
* https://github.com/qdrant/qdrant/pull/10426 - Support fast HNSW healing cancellation to prevent blocking consensus on shard drop
* https://github.com/qdrant/qdrant/pull/10306 - Raise HTTP2 max pending resets on gRPC API to allow higher connection concurrency
* https://github.com/qdrant/qdrant/pull/10243 - Expose used CPU cores in `/metrics` (`cpu_cores_used`)
* https://github.com/qdrant/qdrant/pull/10132 - Extend container runtime detection, include Kubernetes and other runtimes

## Bug Fixes

* https://github.com/qdrant/qdrant/pull/10201 - Fix data consistency, flush CoW segments before building payload index
* https://github.com/qdrant/qdrant/pull/10399 - Fix Gridstore panic on new page after unsafe shutdown, repairs preexisting failures
* https://github.com/qdrant/qdrant/pull/10205 - On aborting resharding down, don't block consensus with deferred points for along time
* https://github.com/qdrant/qdrant/pull/10324 - Reject vector size larger than 65536
* https://github.com/qdrant/qdrant/pull/10143 - Reject empty dense vectors
* https://github.com/qdrant/qdrant/pull/10374 - Reject mismatched dimension count in positive/negative examples of recommend average API
* https://github.com/qdrant/qdrant/pull/10382 - Not specifying scroll `limit` would bypass `max_query_limit`
* https://github.com/qdrant/qdrant/pull/10128 - Prevent underestimating `is_empty` and `is_null` cardinality
* https://github.com/qdrant/qdrant/pull/10101 - Fix `is_null` filter for unindexed payload fields
* https://github.com/qdrant/qdrant/pull/10341 - Fix phrase matching on unindexed payload field not respecting token positioning
* https://github.com/qdrant/qdrant/pull/10181 - Propagate mmap read errors back to user rather than panicking
* https://github.com/qdrant/qdrant/pull/10338 - Fix concurrent consensus operations awaiters dropping each other
* https://github.com/qdrant/qdrant/pull/9957 - Limit tracing ID by 256 bytes, not characters
* https://github.com/qdrant/qdrant/pull/9959 - Clamp picking random HNSW layer to lower bound of zero

## Security

* https://github.com/qdrant/qdrant/pull/10242 - Reject `.` and `..` in collection names

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.19.1` · 2026-09-04 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.19.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
