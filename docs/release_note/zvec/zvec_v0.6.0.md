---
title: "zvec v0.6.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-07-20"
type: "minor"
lang: "en"
summary: "Turbo Quantizer Abstraction: Introduced a pluggable Quantizer abstraction in the Turbo module with a uniform interface that future quantizers (int8 uniform, int8 record, PQ, RaBitQ, …) can implement, decoupling…"
---

# zvec v0.6.0

## 🚀 Zvec v0.6.0 Release Notes
### 📦 New Features
+ **Turbo Quantizer Abstraction:** Introduced a pluggable Quantizer abstraction in the Turbo module with a uniform interface that future quantizers (int8 uniform, int8 record, PQ, RaBitQ, …) can implement, decoupling quantization logic from index builders and searchers. Includes the first concrete `Fp32Quantizer` implementation and scalar FP32 distance kernels. ([#546](https://github.com/alibaba/zvec/pull/546))
+ **Random Rotation for INT8/INT4 Quantization:** Added an optional random rotation feature to INT8/INT4 quantization, distributing variance evenly across vector dimensions to reduce quantization error and improve recall. On cohere-1m: HNSW INT8 recall improved from 0.9285 → 0.9397, Flat INT8 from 0.9695 → 0.9881; INT4 recall improved dramatically (HNSW 0.2114 → 0.7117). ([#483](https://github.com/alibaba/zvec/pull/483))
+ **Group-By Search:** Zvec now supports group-by search (a.k.a. group-by deduplication) across the core interface, algorithm, and DB layers. Users can retrieve top-K results per group instead of globally, with support for `fetch_vector`, `is_linear`, and `bf_pks` query modes on Flat, HNSW, HNSW-RaBitQ, and sparse indexes. Group-by is now also exposed in the Python API. ([#527](https://github.com/alibaba/zvec/pull/527), [#561](https://github.com/alibaba/zvec/pull/561))
+ **Zero-Copy Python Vector Query:** Replaced `serialize_vector` memcpy with `VectorViewClause` that points directly at the numpy buffer, eliminating redundant memory copies for Python dense vector queries. ([#517](https://github.com/alibaba/zvec/pull/517))
+ **UTF-8 Tokenizer & ASCII Folding:** Integrated utf8proc 2.11.3 to upgrade the FTS text analysis pipeline with full Unicode support — Unicode-aware word boundary detection, codepoint-aware lowercase conversion, and a new ASCII folding token filter that converts Unicode characters to ASCII equivalents. ([#515](https://github.com/alibaba/zvec/pull/515))
+ **Standard Tokenizer (UAX #29):** Replaced the previous general-category tokenizer with Unicode 17 UAX #29 word-boundary tables generated from official Unicode data, implementing Lucene-style token selection for alphanumeric, numeric, ideographic, hiragana, katakana, hangul, southeast Asian, regional indicator, and common emoji sequences. ([#547](https://github.com/alibaba/zvec/pull/547))
+ **Stemmer Token Filter:** Added a stemmer token filter for FTS based on Snowball 3.1.1, reducing words to their root form with support for 34+ languages configurable via `stemmer_lang` in `extra_params`. ([#513](https://github.com/alibaba/zvec/pull/513))
+ **DiskANN C API:** Added complete DiskANN C API interfaces including index params setter/getters, query params with CRUD operations, and query wiring for vector query / group-by vector query / sub-query, following existing HNSW/FTS patterns. ([#495](https://github.com/alibaba/zvec/pull/495))

### 🚀 Performance Improvements
+ **Faster FTS Conjunction Queries:** Added block-max skip and score early-exit to `ConjunctionIterator` — skip entire non-competitive blocks (128 docs) by checking block-max score upper bounds, and short-circuit score accumulation when remaining upper bound cannot beat the threshold. Benchmark (500k docs, quora dataset): AND queries 22–38% faster, phrase queries 33% faster. ([#441](https://github.com/alibaba/zvec/pull/441))
+ **IVF Index Optimization:** Miscellaneous optimizations in IVF index internals. ([#528](https://github.com/alibaba/zvec/pull/528))

### 🐞 Bug Fixes
+ **FTS Correctness:** Fixed segment stats not written on reopen, zero-match filter semantics, global doc id gaps during compaction, and snapshot read-only indexes without flush. ([#566](https://github.com/alibaba/zvec/pull/566), [#584](https://github.com/alibaba/zvec/pull/584), [#588](https://github.com/alibaba/zvec/pull/588), [#569](https://github.com/alibaba/zvec/pull/569))
+ **Index Stability:** Fixed lost-wakeup race in DiskANN and HNSW sparse builder progress loops, IVF nprobe selected list scanning, and miscellaneous IVF index bugs. ([#530](https://github.com/alibaba/zvec/pull/530), [#544](https://github.com/alibaba/zvec/pull/544), [#524](https://github.com/alibaba/zvec/pull/524))
+ **SQL Engine:** Fixed misused `group_count` / `group_topk` in the SQL engine. ([#531](https://github.com/alibaba/zvec/pull/531))
+ **Collection:** Fixed LOCK file to open read-only when collection is read-only, and preserved the live writing segment across CreateIndex/DropIndex DDL failures so persisted-segment tasks no longer corrupt the active segment. ([#541](https://github.com/alibaba/zvec/pull/541), [#574](https://github.com/alibaba/zvec/pull/574))
+ **Python Bindings:** Added query validation during execution to catch invalid queries early. ([#538](https://github.com/alibaba/zvec/pull/538))
+ **Build Fixes:** Propagated compiler settings to Arrow ExternalProject, propagated `CMAKE_C_COMPILER` to LZ4, fixed C API duplicated & mismatched definitions, and accepted Xcode 26.5's renamed libtool version string in iOS Arrow build. ([#542](https://github.com/alibaba/zvec/pull/542), [#551](https://github.com/alibaba/zvec/pull/551), [#525](https://github.com/alibaba/zvec/pull/525), [#581](https://github.com/alibaba/zvec/pull/581))
+ **Misc Fixes:** Fixed mismatched doc strings in `.pyi` stubs, clarified create path existence error, and fixed README examples to use `Query`. ([#529](https://github.com/alibaba/zvec/pull/529), [#559](https://github.com/alibaba/zvec/pull/559), [#558](https://github.com/alibaba/zvec/pull/558))

### 🔧 Refactoring & Cleanup
+ **API Cleanup:** Removed `QueryParams::set_type()` and clarified multi-query wording in docs. ([#518](https://github.com/alibaba/zvec/pull/518), [#590](https://github.com/alibaba/zvec/pull/590))
+ **Code Quality:** Enabled targeted `bugprone` clang-tidy checks, ignored dirty submodule worktrees, and fixed typos in IVF searcher tests. ([#500](https://github.com/alibaba/zvec/pull/500), [#523](https://github.com/alibaba/zvec/pull/523), [#526](https://github.com/alibaba/zvec/pull/526))
+ **DiskANN I/O Decoupling:** Replaced the separate DiskANN plugin `.so` and hard build-time dependency on `libaio-dev` with a thread-safe singleton that `dlopen`s `libaio.so` at runtime and caches syscall pointers. Falls back to synchronous `pread()` with a warning when libaio is absent, simplifying the build and deployment story. ([#532](https://github.com/alibaba/zvec/pull/532))

### 🤖 CI & Build Improvements
+ **Build Hardening:** Declared and enforced 64-bit-only Python support. ([#576](https://github.com/alibaba/zvec/pull/576))
+ **CI Scheduling:** RISC-V build now runs weekly instead of per-PR. ([#577](https://github.com/alibaba/zvec/pull/577))
+ **Dependency Bumps:** `actions/cache` 5→6. ([#537](https://github.com/alibaba/zvec/pull/537))

### 📝 Documentation
+ Updated README, fixed WeChat QR code link, and clarified multi-query wording. ([#589](https://github.com/alibaba/zvec/pull/589), [#575](https://github.com/alibaba/zvec/pull/575), [#590](https://github.com/alibaba/zvec/pull/590))

### 👋 New Contributors
Thanks to all first-time contributors in this release:

+ [@HosniBelfeki](https://github.com/HosniBelfeki) ([#538](https://github.com/alibaba/zvec/pull/538))
+ [@valorkin](https://github.com/valorkin) ([#581](https://github.com/alibaba/zvec/pull/581))

---

**Full Changelog:** [v0.5.1...v0.6.0](https://github.com/alibaba/zvec/compare/v0.5.1...v0.6.0)

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.6.0` · 2026-07-20 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
