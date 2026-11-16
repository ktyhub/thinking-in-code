---
title: "zvec v0.5.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.5.0"
version: "v0.5.0"
published: "2026-06-12"
type: "minor"
lang: "en"
summary: "Full-Text Search (FTS): Zvec now natively supports full-text search — attach an FTS index to any string field and query it with natural-language or structured expressions, with index management through…"
---

# zvec v0.5.0

## 🚀 Zvec v0.5.0 Release Notes

### 📦 New Features

- **Full-Text Search (FTS):** Zvec now natively supports full-text search — attach an FTS index to any string field and query it with natural-language or structured expressions, with index management through `Collection::CreateIndex` / `DropIndex`. ([#408](https://github.com/alibaba/zvec/pull/408), [#445](https://github.com/alibaba/zvec/pull/445))
- **Hybrid Retrieval:** Combine full-text, dense-vector, and sparse-vector retrieval in a single query call, with scalar filtering and reranking; native multi-query execution and reranking now behave consistently across Python, Go, Rust, and C++. ([#459](https://github.com/alibaba/zvec/pull/459), [#405](https://github.com/alibaba/zvec/pull/405))
- **DiskANN Index:** Added a new DiskANN index that keeps the bulk of the index on disk instead of in RAM, drastically cutting memory usage for billion-scale datasets and making large-scale ANN search feasible on memory-constrained machines. ([#369](https://github.com/alibaba/zvec/pull/369))
- **Output Field Selection:** `fetch()` now accepts an `output_fields` parameter to control which fields are returned. ([#358](https://github.com/alibaba/zvec/pull/358))

### 🌐 Ecosystem

Beyond the core engine, the Zvec ecosystem expands with new official language SDKs and a visual management tool:

- **Official Go SDK ([zvec-go](https://github.com/zvec-ai/zvec-go)):** cgo bindings wrapping `libzvec_c_api`, with prebuilt libraries for Linux (x64/ARM64), macOS (ARM64), and Windows (x64).
- **Official Rust SDK ([zvec-rust](https://github.com/zvec-ai/zvec-rust)):** Safe, idiomatic Rust bindings with RAII resource management, builder APIs, and `Result<T>` error handling; supports macOS (x86_64/ARM64), Linux (x86_64/ARM64), and Windows (x86_64/MSVC).
- **Zvec Studio ([zvec-studio](https://github.com/zvec-ai/zvec-studio)):** A visual management tool for the Zvec embedded vector database — browse data, test queries, and manage schemas without writing code. Install via `pip install zvec-studio` or download the desktop app for macOS / Linux / Windows.

### 🚀 Performance Improvements

- **Faster Optimize:** Reuse the first vector index file as the merge base during optimize. ([#440](https://github.com/alibaba/zvec/pull/440))
- **GIL Release in Bindings:** Release the GIL in collection bindings for better Python concurrency. ([#363](https://github.com/alibaba/zvec/pull/363))

### 🐞 Bug Fixes

- **Data Correctness:** Fixed nullable-column SIGABRT on multi-segment collections, null leakage through nullable scalar filters, querier schema sync after DDL, and SQL optimizer cross-contamination via per-segment `QueryInfo`. ([#415](https://github.com/alibaba/zvec/pull/415), [#416](https://github.com/alibaba/zvec/pull/416), [#410](https://github.com/alibaba/zvec/pull/410), [#429](https://github.com/alibaba/zvec/pull/429), [#449](https://github.com/alibaba/zvec/pull/449))
- **Index Stability:** Hardened DiskANN (medoid entry, concurrent-build crash, prune quality), RaBitQ (raw-vector merge during optimize, converter path, `ex_bits` validation), IVF result ordering, and vector index naming. ([#433](https://github.com/alibaba/zvec/pull/433), [#456](https://github.com/alibaba/zvec/pull/456), [#425](https://github.com/alibaba/zvec/pull/425), [#436](https://github.com/alibaba/zvec/pull/436), [#422](https://github.com/alibaba/zvec/pull/422), [#421](https://github.com/alibaba/zvec/pull/421))
- **Misc Fixes:** Windows macro conflict, `uint64_t` format specifiers, HNSW context fetch, and Python unit tests. ([#435](https://github.com/alibaba/zvec/pull/435), [#374](https://github.com/alibaba/zvec/pull/374), [#386](https://github.com/alibaba/zvec/pull/386), [#401](https://github.com/alibaba/zvec/pull/401))

### 🔧 Refactoring & Cleanup

- **Unified Query API:** Dropped `VectorQuery`, unified single-target query on `SearchQuery`, and switched rerank to a vector-based interface. ([#428](https://github.com/alibaba/zvec/pull/428), [#431](https://github.com/alibaba/zvec/pull/431), [#458](https://github.com/alibaba/zvec/pull/458), [#267](https://github.com/alibaba/zvec/pull/267))
- **Codebase Cleanup:** Applied `modernize-use-override`, clarified segment-local row IDs, tuned the DiskANN build, switched to an explicit x86 CPU whitelist, removed the Hamming metric and Buffer Manager, and revised error messages. ([#442](https://github.com/alibaba/zvec/pull/442), [#419](https://github.com/alibaba/zvec/pull/419), [#432](https://github.com/alibaba/zvec/pull/432), [#475](https://github.com/alibaba/zvec/pull/475), [#258](https://github.com/alibaba/zvec/pull/258), [#365](https://github.com/alibaba/zvec/pull/365), [#437](https://github.com/alibaba/zvec/pull/437), [#400](https://github.com/alibaba/zvec/pull/400))

### 🤖 CI & Build Improvements

- **Build Hardening:** Enabled `-Werror` across all CI platforms, fixed RISC-V FastPFOR via SIMDe, marked third-party includes as SYSTEM, and corrected DiskANN CMake paths. ([#460](https://github.com/alibaba/zvec/pull/460), [#470](https://github.com/alibaba/zvec/pull/470), [#413](https://github.com/alibaba/zvec/pull/413), [#464](https://github.com/alibaba/zvec/pull/464))
- **Faster CI:** Added ccache/sccache (incl. Windows), parallelized tests, sped up clang-tidy, scoped the main workflow, and slimmed CRoaring to an amalgamation (~292M → ~1MB). ([#360](https://github.com/alibaba/zvec/pull/360), [#439](https://github.com/alibaba/zvec/pull/439), [#454](https://github.com/alibaba/zvec/pull/454), [#384](https://github.com/alibaba/zvec/pull/384), [#412](https://github.com/alibaba/zvec/pull/412), [#417](https://github.com/alibaba/zvec/pull/417), [#418](https://github.com/alibaba/zvec/pull/418), [#438](https://github.com/alibaba/zvec/pull/438), [#396](https://github.com/alibaba/zvec/pull/396), [#448](https://github.com/alibaba/zvec/pull/448), [#381](https://github.com/alibaba/zvec/pull/381))
- **Dependency Bumps:** `actions/cache` 4→5 and `codecov/codecov-action` 6→7. ([#466](https://github.com/alibaba/zvec/pull/466), [#467](https://github.com/alibaba/zvec/pull/467))

### 👋 New Contributors

Thanks to all first-time contributors in this release:

- [@ihb2032](https://github.com/ihb2032) ([#258](https://github.com/alibaba/zvec/pull/258))

---

**Full Changelog:** [v0.4.0...v0.5.0](https://github.com/alibaba/zvec/compare/v0.4.0...v0.5.0)

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.5.0` · 2026-06-12 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
