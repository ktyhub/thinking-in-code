---
title: "qdrant v1.20.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.20.0"
version: "v1.20.0"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "#10750 - BM25 scoring directly on the full-text payload index [docs] · Milestone #57 - TurboQuant: new turbo8 and turbo16 vector datatypes [docs]"
---

# qdrant v1.20.0

# Changelog

## Features 🎶

- [#10750](https://github.com/qdrant/qdrant/issues/10750) - BM25 scoring directly on the full-text payload index [[docs](https://qdrant.tech/documentation/search/text-search/full-text-search/)]
- [Milestone #57](https://github.com/qdrant/qdrant/milestone/57?closed=1) - TurboQuant: new `turbo8` and `turbo16` vector datatypes [[docs](https://qdrant.tech/documentation/manage-data/vectors/#turboquant-datatypes)]
- [#11125](https://github.com/qdrant/qdrant/issues/11125) - Per-element payload indexes: new `nested` index parameter, faster nested condition filtering.  [[docs](https://qdrant.tech/documentation/manage-data/indexing/#per-element-index-for-arrays-of-objects)]
- [#11180](https://github.com/qdrant/qdrant/pull/11180), [#11263](https://github.com/qdrant/qdrant/pull/11263) - New `code` tokenizer for full-text index [[docs](https://qdrant.tech/documentation/manage-data/indexing/#code)]
- [#10466](https://github.com/qdrant/qdrant/pull/10466) - Configurable audit log output: `audit.output` writes audit events to `file` (default), `stdout` or `stderr`  [[docs](https://qdrant.tech/documentation/security/#audit-log-output)]
- [#10992](https://github.com/qdrant/qdrant/pull/10992) - Collection creation time: `created_at` is recorded and returned in collection info [[docs](https://qdrant.tech/documentation/manage-data/collections/#collection-info)]
- [#10711](https://github.com/qdrant/qdrant/pull/10711) - Substring filter condition: `match: { substring: "..." }` (full-scan only) [[docs](https://qdrant.tech/documentation/search/filtering/#substring-match)]
- [#10231](https://github.com/qdrant/qdrant/pull/10231), [#10287](https://github.com/qdrant/qdrant/pull/10287), [#10296](https://github.com/qdrant/qdrant/pull/10296) - New formula query expressions: `acosh`, `max`, `min` [[docs](https://qdrant.tech/documentation/search/search-relevance/#max-and-min)] and [[docs](https://qdrant.tech/documentation/search/search-relevance/#hyperbolic-distance)]
- [#10597](https://github.com/qdrant/qdrant/pull/10597), [#10598](https://github.com/qdrant/qdrant/pull/10598) - Configurable ID tracker memory placement [[docs](https://qdrant.tech/documentation/ops-configuration/memory-tiers/#id-tracker)]

## Improvements 🎵

- [#11009](https://github.com/qdrant/qdrant/pull/11009), [#11020](https://github.com/qdrant/qdrant/pull/11020) - Faster HNSW payload links build - builder sized to the block, not the segment, and reused
- [#11083](https://github.com/qdrant/qdrant/pull/11083) - Faster HNSW healing - payload blocks reuse old graph links; `m = 0` graphs can heal too
- [#11166](https://github.com/qdrant/qdrant/pull/11166) - Smaller HNSW upper layers - `floor()` in level assignment matches the HNSW paper (6.25% of points on level 1 at `m = 16`, not 25%)
- [#10976](https://github.com/qdrant/qdrant/pull/10976) - Faster PQ training - k-means sample gathered in one pass, not one per chunk
- [#10975](https://github.com/qdrant/qdrant/pull/10975) - Faster scalar quantization search - AVX512-VNNI and AVX-VNNI kernels for int8 dot product
- [#10977](https://github.com/qdrant/qdrant/pull/10977) - Less search slowdown during optimizations - the whole optimization job runs at low thread priority
- [#11078](https://github.com/qdrant/qdrant/pull/11078), [#11080](https://github.com/qdrant/qdrant/pull/11080) - Fewer cancelled optimizations - optimizers are recreated only when their config changes
- [#11234](https://github.com/qdrant/qdrant/pull/11234) - Faster point retrieval - ids resolved in one batch per segment
- [#11070](https://github.com/qdrant/qdrant/pull/11070) - Faster snapshot transfers and downloads - 4 MiB stream buffers instead of 4 KiB
- [#11253](https://github.com/qdrant/qdrant/pull/11253) - Faster shard transfers - `transfer_raw_points` and `transfer_raw_payloads` on by default
- [#11206](https://github.com/qdrant/qdrant/pull/11206) - Safer snapshots - unique snapshot names, and a stored snapshot is never overwritten
- [#11221](https://github.com/qdrant/qdrant/pull/11221) - No stuck snapshot downloads - 60s timeout when the server never responds
- [#11163](https://github.com/qdrant/qdrant/pull/11163) - No blocking thread leak on telemetry timeout - the timeout also applies inside the blocking task
- [#11164](https://github.com/qdrant/qdrant/pull/11164) - Clearer tar unpack errors - release builds report the error kind (e.g. `timed out`) instead of "malformed archive"
- [#11118](https://github.com/qdrant/qdrant/pull/11118) - Log timestamps respect timezone - set with the `TZ` environment variable, UTC by default
- [#10235](https://github.com/qdrant/qdrant/pull/10235) - `timeout` parameter for the get points API
- [Milestone #58](https://github.com/qdrant/qdrant/milestone/58?closed=1) - Less disk usage with `hnsw_config.inline_storage` - vectors are stored only inside the HNSW graph file, without a separate vector storage copy
- [#10790](https://github.com/qdrant/qdrant/pull/10790) - Faster `enable_hnsw` change on payload indexes - updated in place instead of dropping and rebuilding the index
- [#10906](https://github.com/qdrant/qdrant/pull/10906) - Faster search over on-disk vectors - batches of vectors are prefetched with `madvise(WILLNEED)` before scoring
- [#10907](https://github.com/qdrant/qdrant/pull/10907) - ACORN on `m = 0` graphs - search uses the payload-block links of the graph
- [#11255](https://github.com/qdrant/qdrant/pull/11255) - Better shard distribution in small clusters - auto-sharded collections get 2 shards per node in 3+ node clusters while collections are fewer than nodes
- [#11273](https://github.com/qdrant/qdrant/pull/11273) - No internal request stalls behind NAT and load balancers - HTTP/2 keepalive on internal p2p gRPC
- [#11289](https://github.com/qdrant/qdrant/pull/11289) - Configurable snapshot storage timeouts and retries - new `timeout_sec`, `connect_timeout_sec`, `max_retries`, `retry_timeout_sec` in S3, GCS and Azure config

## Bug fixes 🎼

- [#10932](https://github.com/qdrant/qdrant/pull/10932), [#10971](https://github.com/qdrant/qdrant/pull/10971) - Fix collection reads stalling while a shard transfer holds the shard holder lock
- [#10949](https://github.com/qdrant/qdrant/pull/10949) - Fix live-lock between shard transfer start and consensus operations
- [#10956](https://github.com/qdrant/qdrant/pull/10956) - Fix collection being blocked while a shard snapshot is extracted
- [#11075](https://github.com/qdrant/qdrant/pull/11075) - Fix `must_not` conditions being ignored when equal to an indexed `must` condition
- [#11101](https://github.com/qdrant/qdrant/pull/11101) - Fix datetime filters with microseconds behaving differently with and without a payload index
- [#10948](https://github.com/qdrant/qdrant/pull/10948) - Fix renaming an alias to an existing collection name being accepted
- [#10887](https://github.com/qdrant/qdrant/pull/10887) - Fix transfer staying registered after crash replay of replica removal during transfer abort
- [#11121](https://github.com/qdrant/qdrant/pull/11121) - Fix S3 snapshot upload completing truncated on a local read error
- [#10796](https://github.com/qdrant/qdrant/pull/10796) - Fix Japanese tokenizer ignoring `min_token_len`, `max_token_len`, `stemmer`, `ascii_folding` and case-insensitive stopwords
- [#10754](https://github.com/qdrant/qdrant/pull/10754) - Fix quantization build with MSVC-like compilers (clang-cl)

## Security 🔑

- [#10854](https://github.com/qdrant/qdrant/pull/10854) - Internal auth is enforced by default: `service.enforce_internal_auth` now defaults to `true` when an API key is configured
- [#10718](https://github.com/qdrant/qdrant/pull/10718) - Startup warning when distributed mode has an API key configured but `enforce_internal_auth` is off
- [#11275](https://github.com/qdrant/qdrant/pull/11275), [#11290](https://github.com/qdrant/qdrant/pull/11290) - Reject vector names that escape the segment directory, including `.` and `..`
- [#11278](https://github.com/qdrant/qdrant/pull/11278) - Update rustls-webpki and webpki-root-certs for RUSTSEC-2026-0382 and RUSTSEC-2026-0383

## Qdrant Edge 📀

- [#11085](https://github.com/qdrant/qdrant/pull/11085) - WAL-less mode for edge shards: `EdgeConfig::wal_enabled(false)` skips WAL writes, updates are durable after `flush()`
- [#11084](https://github.com/qdrant/qdrant/pull/11084) - Fix updates lost on crash: unacknowledged WAL operations are replayed when an edge shard is loaded
- [#11082](https://github.com/qdrant/qdrant/pull/11082) - Fix `EdgeShard::flush` not acknowledging the persisted version in the WAL

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.20.0` · 2026-10-22 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
