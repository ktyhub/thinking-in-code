---
title: "qdrant v1.20.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.20.1"
version: "v1.20.1"
published: "2026-11-13"
type: "patch"
lang: "en"
---

# qdrant v1.20.1

# Change log

  ## Improvements

  * https://github.com/qdrant/qdrant/milestone/56 - Build HNSW graphs of large segments faster with PiPNN
  * https://github.com/qdrant/qdrant/milestone/59 - Make filters with several conditions much faster on cold on-disk payload indexes
  * https://github.com/qdrant/qdrant/pull/10743 - Halve the number of reads in HNSW graph search on cold on-disk storage
  * https://github.com/qdrant/qdrant/pull/11490 - Speed up batch searches that apply the same filter to several named vectors
  * https://github.com/qdrant/qdrant/pull/11480 - Speed up stream records and resharding shard transfers by pipelining batches
  * https://github.com/qdrant/qdrant/pull/11429 - Quantize Turbo8 and Turbo16 vectors about 2x faster
  * https://github.com/qdrant/qdrant/pull/11479, https://github.com/qdrant/qdrant/pull/11482 - Estimate filter cardinality once per filtered read and facet request
  * https://github.com/qdrant/qdrant/pull/11415 - Open segments with bool and null payload indexes faster
  * https://github.com/qdrant/qdrant/pull/11418 - Reduce the per-upsert overhead of appendable segments
  * https://github.com/qdrant/qdrant/pull/11329 - Use the nearest point in the `geo_distance` formula when a field holds several geo points
  * https://github.com/qdrant/qdrant/pull/11394 - Propagate peer metadata through consensus faster after a leader change
  * https://github.com/qdrant/qdrant/pull/11471 - Use Debian 13 as the base of GPU Docker images, same as the regular image

  ## Bug Fixes

  * https://github.com/qdrant/qdrant/pull/11343 - Fix HNSW index builds being up to 3x slower on hosts with many cores, a regression in v1.20.0
  * https://github.com/qdrant/qdrant/pull/11461, https://github.com/qdrant/qdrant/pull/11018 - Fix slow collection reads and shard snapshots blocking cluster state updates
  * https://github.com/qdrant/qdrant/pull/11400 - Fix a copy-on-write flush cycle that could flush moved points in the wrong order
  * https://github.com/qdrant/qdrant/pull/11031 - Fix aliases created in single-node mode not resolving on peers that join the cluster later
  * https://github.com/qdrant/qdrant/pull/11506 - Fix unnecessary Raft leader elections right after a local consensus stall
  * https://github.com/qdrant/qdrant/pull/11453 - Fix updating a collection with unchanged optimizer config not triggering optimizers
  * https://github.com/qdrant/qdrant/pull/10014 - Fix `optimizers_overwrite.max_optimization_threads` being ignored when the collection config sets it to 0
  * https://github.com/qdrant/qdrant/pull/11370 - Fix group-by returning empty results when many points have unsupported group values
  * https://github.com/qdrant/qdrant/pull/11350 - Fix the score threshold of recommend with the best score strategy for Euclid distance
  * https://github.com/qdrant/qdrant/pull/11395 - Fix a panic in the Greek stemmer
  * https://github.com/qdrant/qdrant/pull/11401 - Fix very long tokens stalling full-text indexing with stemming
  * https://github.com/qdrant/qdrant/pull/9955 - Fix a panic on an empty multi-dense vector in internal query requests
  * https://github.com/qdrant/qdrant/pull/11332 - Fix collection deletion on Windows
  * https://github.com/qdrant/qdrant/pull/11340 - Fix the build on targets without jemalloc, such as FreeBSD on PowerPC

  ## Security

  * https://github.com/qdrant/qdrant/pull/11477 - Hide snapshot telemetry of collections a collection-scoped JWT has no access to

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.20.1` · 2026-11-13 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.20.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
