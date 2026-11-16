---
title: "qdrant v1.19.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.19.0"
version: "v1.19.0"
published: "2026-08-05"
type: "minor"
lang: "en"
summary: "https://github.com/qdrant/qdrant/milestone/50 - TurboQuant 4-bit as a datatype of primary vector storage. Only store 4-bit quantized vectors and spare disk space on original vectors. [docs]"
---

# qdrant v1.19.0

# Change log

## Features :point_up:

* https://github.com/qdrant/qdrant/milestone/50 - TurboQuant 4-bit as a datatype of primary vector storage. Only store 4-bit quantized vectors and spare disk space on original vectors. [[docs](https://qdrant.tech/documentation/manage-data/vectors/#turbo4)]
* https://github.com/qdrant/qdrant/pull/9669, https://github.com/qdrant/qdrant/pull/9684, https://github.com/qdrant/qdrant/pull/9950 - Unify definition of memory usage strategy for collection components. Use `"memory": "cold" / "cached" / "pinned"` to define memory behavior for each individual collection component. Allows for more fine-grained control over memory usage and performance. [[docs](https://qdrant.tech/documentation/ops-configuration/memory-tiers/)]
* https://github.com/qdrant/qdrant/pull/9683 - Allow `"match": {"prefix": "..."}` in `filter` to match keywords by prefix, must be enabled in keyword index. [[docs](https://qdrant.tech/documentation/search/filtering/#prefix-match)]
* https://github.com/qdrant/qdrant/pull/9661 - Per-query IDF corpus for sparse vector search [[docs](https://qdrant.tech/documentation/search/text-search/full-text-search/#per-tenant-idf-statistics)]
* https://github.com/qdrant/qdrant/pull/9899 - Slice filtering condition: sliced scroll / deterministic sampling [[docs](https://qdrant.tech/documentation/search/filtering/#slice)]
* https://github.com/qdrant/qdrant/pull/10035 - Global quota API [[docs](https://qdrant.tech/documentation/ops-configuration/quotas/)]
* https://github.com/qdrant/qdrant/pull/9338 - Add routing token for deterministic read routes [[docs](https://qdrant.tech/documentation/scaling/consistency-guarantees/#read-affinity)]

## Improvements :point_left:

* https://github.com/qdrant/qdrant/pull/9113 - Use batched reads in vector and payload storage
* https://github.com/qdrant/qdrant/pull/9409 - Utilize `io_uring` for payload storage
* https://github.com/qdrant/qdrant/pull/9448 - Lower default update queue length, reduce from 1M to 200
* https://github.com/qdrant/qdrant/pull/9500 - Use Entry API to avoid redundant map double-lookups, improving performance
* https://github.com/qdrant/qdrant/pull/9332 - Enable single file mmap vector storage by default for immutable segments
* https://github.com/qdrant/qdrant/pull/9376 - Add option to explicitly disable BM25 stemmer; deprecate "none" hack
* https://github.com/qdrant/qdrant/pull/9457 - Performance improvements for facets
* https://github.com/qdrant/qdrant/pull/9431 - Respond HTTP 405 on cluster endpoints when in standalone mode
* https://github.com/qdrant/qdrant/pull/9662 - Restart consensus thread on failure instead of stopping permanently
* https://github.com/qdrant/qdrant/pull/9663 - Trace-log 'Missing request message' internal gRPC errors
* https://github.com/qdrant/qdrant/pull/9678 - Resolve filter-based update operations to point IDs before writing in WAL
* https://github.com/qdrant/qdrant/pull/9732 - Support snapshot recovery of streamable segments without nested `files/` dir
* https://github.com/qdrant/qdrant/pull/9726 - Reduce memory usage for slow requests logging
* https://github.com/qdrant/qdrant/pull/9733 - Add time in gRPC responses
* https://github.com/qdrant/qdrant/pull/9644 - Set S3 user-agent on snapshot uploads
* https://github.com/qdrant/qdrant/pull/9749 - Lazy roaring flags bitmap and bool index counts
* https://github.com/qdrant/qdrant/pull/9778 - Dedup sub-hashes with AHashSet in immutable index, improving performance
* https://github.com/qdrant/qdrant/pull/9784 - Mark point deleted once instead of per value in immutable index, improving performance
* https://github.com/qdrant/qdrant/pull/9660 - Speed up TurboQuant Hadamard rotation by ~3x
* https://github.com/qdrant/qdrant/pull/9835 - Single inverse rotation in TurboQuant symmetric L1 scoring
* https://github.com/qdrant/qdrant/pull/9811 - Align scalar f16 metrics precision with SIMD thresholds
* https://github.com/qdrant/qdrant/pull/9847 - Improve error message for non-string `key` in filter conditions
* https://github.com/qdrant/qdrant/pull/9871 - Compact stored bitmask for on-disk field index deleted masks
* https://github.com/qdrant/qdrant/pull/9740, https://github.com/qdrant/qdrant/pull/9845 - Use batching in filter condition checker
* https://github.com/qdrant/qdrant/pull/9984 - Evict page cache of files that are mapped twice
* https://github.com/qdrant/qdrant/pull/10026 - Serialize snapshot recoveries of the same shard
* https://github.com/qdrant/qdrant/pull/9891 - Report effective (cgroup) CPU, RAM and disk in telemetry
* https://github.com/qdrant/qdrant/pull/9721 - Use jemalloc 5.3.1 to support page sizes larger than 4KB on aarch64 systems

## Bug Fixes :facepunch:

* https://github.com/qdrant/qdrant/pull/9395 - Fixes for resharding abort logic consistency
* https://github.com/qdrant/qdrant/pull/9377 - Read deferred source point in copy-on-write move
* https://github.com/qdrant/qdrant/pull/9424 - Fix data loss when a payload index drop races the background segment flush
* https://github.com/qdrant/qdrant/pull/7849 - Fix abort resharding live-lock
* https://github.com/qdrant/qdrant/pull/9501 - Buffer multi-dense offsets store to prevent reload corruption
* https://github.com/qdrant/qdrant/pull/9401 - Fix empty `min_should` with non-zero `min_count` matching everything
* https://github.com/qdrant/qdrant/pull/9536 - Fix optimizer data race, defer source segment destruction until durable
* https://github.com/qdrant/qdrant/pull/9518 - Fix scalar L2 quantized score shift
* https://github.com/qdrant/qdrant/pull/9537 - Fix snapshot WAL clocks data race
* https://github.com/qdrant/qdrant/pull/9604, https://github.com/qdrant/qdrant/pull/9637 - Avoid allocator abort on huge limit in random search/sample/scroll
* https://github.com/qdrant/qdrant/pull/9610 - Fix for Point Group Search query with large limits or group sizes cause panics
* https://github.com/qdrant/qdrant/pull/9654 - Fix reinit failing with "removed all voters" on a removed peer
* https://github.com/qdrant/qdrant/pull/9671 - Fix optimizer recreation dropping sibling shard restarts on error
* https://github.com/qdrant/qdrant/pull/9641 - Unblock optimizer after deleting a named vector
* https://github.com/qdrant/qdrant/pull/9686 - Fix cancelled snapshot recovery dirty marker being left behind
* https://github.com/qdrant/qdrant/pull/9688 - Fix `/readyz` of reinitialized peer waiting on a foreign consensus
* https://github.com/qdrant/qdrant/pull/9677 - Preserve empty result shape for zero-limit batches
* https://github.com/qdrant/qdrant/pull/9723 - Fix drive letter parsing in Windows snapshot mappings
* https://github.com/qdrant/qdrant/pull/9774 - Fix `/readyz` false positive on freshly bootstrapped peer
* https://github.com/qdrant/qdrant/pull/9767 - Fix payload index inconsistency after restart: flush-before-build
* https://github.com/qdrant/qdrant/pull/9806 - Stamp payload storage version on append-only clone paths
* https://github.com/qdrant/qdrant/pull/9801 - Fix use-after-free in u8-quantized vector reads on owning storages
* https://github.com/qdrant/qdrant/pull/9638 - Return error for missing point IDs in Query API recommend
* https://github.com/qdrant/qdrant/pull/9785 - Reset `first_voter` and prune address book on first-peer `--reinit`
* https://github.com/qdrant/qdrant/pull/9759 - Advance newest clocks for WAL-replay tail on load
* https://github.com/qdrant/qdrant/pull/9660 - Count trailing deleted offset on mmap sparse reload
* https://github.com/qdrant/qdrant/pull/9851 - Clamp WAL replay target to the truncated prefix on shard load
* https://github.com/qdrant/qdrant/pull/9882 - Fix resharding, on queries filter shards on all shard selectors
* https://github.com/qdrant/qdrant/pull/9868 - Fix WAL data race, flush after copy with `Segment::copy_to_path`
* https://github.com/qdrant/qdrant/pull/9928 - Clean up stale shard transfers when applying consensus snapshot
* https://github.com/qdrant/qdrant/pull/9930 - Honor applied_seq during WAL replay only under prevent_unoptimized
* https://github.com/qdrant/qdrant/pull/10005 - Fix TurboQuant quantized vector layout alignment
* https://github.com/qdrant/qdrant/pull/9992 - Flush after pre-filling deleted vectors
* https://github.com/qdrant/qdrant/pull/10059 - Clear joint consensus fields on first peer reinit
* https://github.com/qdrant/qdrant/pull/9105, https://github.com/qdrant/qdrant/pull/9410, https://github.com/qdrant/qdrant/pull/9317 - Fixes for handling of creation and deletion of named vectors
* https://github.com/qdrant/qdrant/pull/10085 - Fix path traversal vulnerability in S3 based snapshots

## Deprecations :point_down:

* https://github.com/qdrant/qdrant/pull/9982 - Remove deprecated search endpoints from OpenAPI, deprecate them in gRPC
* https://github.com/qdrant/qdrant/pull/10020 - Make deprecated `on_disk_payload` optional in the REST schema
* https://github.com/qdrant/qdrant/pull/10035 - Deprecates `max_resident_memory_percent` of strict mode in favor of global quota API

## Web UI :open_hands:

* https://github.com/qdrant/qdrant-web-ui/milestone/1 - Significantly more performant vectors visualization and dimensionality reduction using WASM implementation of UMAP and WebGL rendering
* https://github.com/qdrant/qdrant-web-ui/releases/tag/v0.2.15 - UI for managing payload indexes and their configuration
* https://github.com/qdrant/qdrant-web-ui/pull/428 - UI for managing global resource quotas
* https://github.com/qdrant/qdrant-web-ui/pull/425 - Display for resharding progress
* https://github.com/qdrant/qdrant-web-ui/pull/400 - Multi delete feature for collections
* https://github.com/qdrant/qdrant-web-ui/pull/424 - Display and editing for collection metadata

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.19.0` · 2026-08-05 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.19.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
