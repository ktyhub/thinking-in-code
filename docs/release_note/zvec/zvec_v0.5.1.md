---
title: "zvec v0.5.1"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-06-24"
type: "patch"
lang: "en"
summary: "External Vector Source: Added support for using external vector sources, enabling more flexible data ingestion and retrieval workflows. (#490)"
---

# zvec v0.5.1

## 🚀 Zvec v0.5.1 Release Notes

### 📦  New Features
* External Vector Source: Added support for using external vector sources, enabling more flexible data ingestion and retrieval workflows. (#490)
* Zero-Copy Vector Query Path: Added `VectorViewClause` to support a zero-copy query path and unified vector query validation. (#478)
* Search Prefetch Configuration: Added support for passing prefetch configuration (`PO` and `PL`) through search parameters. (#482)
* Index Dirty Status: Exposed `is_dirty` through the core `Index` interface so callers can inspect whether an index has pending changes. (#488)
* Storage MMAP Options: Exposed copy-on-write mmap configuration and fixed `MMAP_POPULATE` flag placement. (#480)
* C API FTS Sub-Query Support: Added Full-Text Search support for sub-query usage in the C API. (#520)

### 🐞 Bug Fixes
* Python Binding Stability: Safely validate numpy vector queries, handle missing query-by-id documents, and add missing FTS type annotations to Python stubs and wrappers. (#502, #519, #497)
* Python Packaging: Installed the `_zvec` extension inside the `zvec` package, excluded C++ SDK headers and libraries from wheels, and only bundled the DiskANN plugin on supported platforms. (#511, #509, #510)
* Index and Storage Correctness: Cleaned up RocksDB files on `drop_index` so `create_index` can be repeated, fixed index parameter builder setters, and added coverage for builder behavior. (#485, #504)
* HNSW Persistence: Restored persisted metadata correctly when reopening indexes using the `UniformInt8` quantizer. (#496)
* Parquet Buffer Cache: Refactored parquet buffer cache ownership to avoid lifetime and ownership issues. (#492)
* C API Cleanup: Simplified `convert_c_index_params_to_cpp` by using `IndexParams::clone()`. (#489)
* Misc Fixes: Added a missing include in `block_heap.h`. (#491)

### 🤖 CI & Build Improvements
* Build Requirements: Bumped the minimum required CMake version to 3.26. (#516)
* Nightly Build: Added `aio` to the nightly build. (#469)
* Dependency Bumps: Updated `actions/checkout` from 6 to 7. (#507)

### 👋 New Contributors

Thanks to all first-time contributors in this release:

* @HosniBelfeki (#502)

***

Full Changelog: https://github.com/alibaba/zvec/compare/v0.5.0...v0.5.1

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.5.1` · 2026-06-24 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
