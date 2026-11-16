---
title: "qdrant v1.18.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.0"
version: "v1.18.0"
published: "2026-05-11"
type: "minor"
lang: "en"
summary: "milestone!48 - Add TurboQuant quantization variant, 8x vector compression without the recall tax · https://github.com/qdrant/qdrant/pull/8605 - Add API to create and delete named vectors in existing collection"
---

# qdrant v1.18.0

# Change log

## Features 🏎️

* [milestone!48](https://github.com/qdrant/qdrant/milestone/48) - Add TurboQuant quantization variant, 8x vector compression without the recall tax
* https://github.com/qdrant/qdrant/pull/8605 - Add API to create and delete named vectors in existing collection
* https://github.com/qdrant/qdrant/pull/8606 - Deep memory reporting, show memory usage breakdown for storage components
* https://github.com/qdrant/qdrant/pull/8714 - Add low memory mode, force open everything on disk to minimize out of memory crash on startup
* https://github.com/qdrant/qdrant/pull/8715 - Add strict mode parameter to reject updates when memory usage is high (`max_resident_memory_percent`)

## Improvements 📏

* <https://github.com/qdrant/qdrant/pull/8790>, <https://github.com/qdrant/qdrant/pull/8769> - Use dynamic CPU pool for search workers, improve search performance when there's high IO wait
* <https://github.com/qdrant/qdrant/pull/8526>, <https://github.com/qdrant/qdrant/pull/8656> - Use operation size based batching in shard transfers to achieve higher throughput
* https://github.com/qdrant/qdrant/pull/8673 - Reduce memory usage of immutable geo index by 7x
* https://github.com/qdrant/qdrant/pull/8529 - Fully remove RocksDB support, simplifying storage handling
* https://github.com/qdrant/qdrant/pull/8768 - Don't stall update queue when waiting for deferred points
* https://github.com/qdrant/qdrant/pull/8944 - Use default timeout of 60 seconds to update requests, clean up long running update requests
* https://github.com/qdrant/qdrant/pull/8767 - When collection update triggers optimizer recreation, clear any optimizer errors to allow recovery without restart
* https://github.com/qdrant/qdrant/pull/8784 - Use snapshot based shard transfers for much faster recovery if WAL delta cannot be resolved
* https://github.com/qdrant/qdrant/pull/8782 - On snapshot transfer, first clear shard data on receiver to prevent out of disk crash
* https://github.com/qdrant/qdrant/pull/8689 - Clean temporary directories before loading collections, may prevent out of disk crash on recovery
* https://github.com/qdrant/qdrant/pull/8830 - Don't hold shard holder lock during search to prevent blocking various other operations
* <https://github.com/qdrant/qdrant/pull/8626>, <https://github.com/qdrant/qdrant/pull/8635> - Record API method path in audit log events
* https://github.com/qdrant/qdrant/pull/8402 - Report tracing ID in audit log events
* https://github.com/qdrant/qdrant/pull/8636 - Report audit log configuration and data size in telemetry and metrics
* https://github.com/qdrant/qdrant/pull/8640 - Optimize cosine normalization on ARM CPUs (SIMD)
* https://github.com/qdrant/qdrant/pull/8571 - Skip audit logging on telemetry endpoints
* https://github.com/qdrant/qdrant/pull/8693 - Make HNSW sub graph building deterministic
* <https://github.com/qdrant/qdrant/pull/8712>, <https://github.com/qdrant/qdrant/pull/8708>, <https://github.com/qdrant/qdrant/pull/8706> - Report various structures in deterministic order
* https://github.com/qdrant/qdrant/pull/8932 - Link to agentic skills in startup message

## Bug Fixes 🪺

* https://github.com/qdrant/qdrant/pull/8728 - Fix stop words always being lowercased over gRPC even if disabled
* https://github.com/qdrant/qdrant/pull/8719 - Fix datetime parsing for `YYYY-MM-DDTHH:MM` format
* https://github.com/qdrant/qdrant/pull/8734 - Fix IsEmpty condition on freshly rebuilt null index
* https://github.com/qdrant/qdrant/pull/8939 - Fix nested MatchTextAny not using full-text index
* https://github.com/qdrant/qdrant/pull/8646 - Fix geo circle hash bound checks
* https://github.com/qdrant/qdrant/pull/8938 - Fix phrase matching crossing string-array element boundaries
* https://github.com/qdrant/qdrant/pull/8762 - Fix hard panic when there are multiple validation errors
* https://github.com/qdrant/qdrant/pull/8194 - Disallow sparse vectors with an empty name
* https://github.com/qdrant/qdrant/pull/8832 - Fix GPU not being used for HNSW without main graph
* https://github.com/qdrant/qdrant/pull/8691 - Fix infinite loop in HNSW sub graph building
* https://github.com/qdrant/qdrant/pull/8577 - Fix panic when snapshot path contains non-UTF-8 characters
* https://github.com/qdrant/qdrant/pull/8293 - Fix hard panic on corrupt collection alias file, return error instead
* https://github.com/qdrant/qdrant/pull/8574 - Fix disk IO not always being measured in map index
* https://github.com/qdrant/qdrant/pull/8645 - Fix chunk capacity reservation to allocate more efficiently
* https://github.com/qdrant/qdrant/pull/8651 - Fix payload index flushers absorbing cancellations as errors
* https://github.com/qdrant/qdrant/pull/8474 - Fix snapshot files not cleaned up on snapshot restore failure
* https://github.com/qdrant/qdrant/pull/8654 - Fix clearing page cache not being reliable, add missing candidates
* https://github.com/qdrant/qdrant/pull/8542 - Fix map index listing modified file as immutable
* https://github.com/qdrant/qdrant/pull/8847 - Fix data race causing disk watcher not to be woken up causing timeouts
* <https://github.com/qdrant/qdrant/pull/8789>, <https://github.com/qdrant/qdrant/pull/8917> - Make resharding operations idempotent, fix cluster state corruption on crash
* https://github.com/qdrant/qdrant/pull/8831 - Fix slow request logging for read operations with shard level errors
* https://github.com/qdrant/qdrant/pull/8756 - Don't allocate async search workers we don't use reducing thread count
* https://github.com/qdrant/qdrant/pull/8596 - Don't write to old shards on resharding down after write hashring commit, fix missing shard errors
* https://github.com/qdrant/qdrant/pull/8543 - Fix edge sparse vector search panic on score post processing
* https://github.com/qdrant/qdrant/pull/8588 - Fix various Raft consensus correctness bugs upstream

## Security 🕵️

* https://github.com/qdrant/qdrant/pull/8676 - Enforce API key/JWT authentication on internal gRPC endpoints
* https://github.com/qdrant/qdrant/pull/8628 - Add config option to disable snapshot restore from URL
* https://github.com/qdrant/qdrant/pull/8619 - Bump TLS dependencies to resolve security vulnerabilities

## Web UI 🍱

* https://github.com/qdrant/qdrant-web-ui/pull/372 - Add memory and disk inspector, view usage breakdown per storage component
* https://github.com/qdrant/qdrant-web-ui/pull/370 - Add high contrast theme
* https://github.com/qdrant/qdrant-web-ui/pull/369 - Render inline documentation in collection info panel
* https://github.com/qdrant/qdrant-web-ui/pull/362 - Add refresh button to some collection views
* <https://github.com/qdrant/qdrant-web-ui/pull/373>, <https://github.com/qdrant/qdrant-web-ui/pull/377> - Fix search quality latency measurement and use better naming

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.18.0` · 2026-05-11 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.18.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
