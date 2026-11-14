---
title: "zvec v0.7.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.7.0"
version: "v0.7.0"
published: "2026-08-24"
type: "minor"
lang: "en"
summary: "Thanks to all first-time contributors in this release:"
---

# zvec v0.7.0

## 🚀 Zvec v0.7.0 Release Notes

### ⚠️ Breaking Changes
+ **C++ public API switched to snake_case:** All public C++ SDK interfaces (`Index`, `Collection`, etc.) have been moved from PascalCase to snake_case. For example, `Open()` → `open()`, `Search()` → `search()`, `Query()` → `query()`, and `Insert()` → `insert()`. C++ SDK users will need to update their call sites when upgrading. The C API and Python API names remain unchanged. ([#683](https://github.com/alibaba/zvec/pull/683))

### 📦 New Features
+ **IVF RaBitQ index:** Added RaBitQ quantization support for IVF indexes, extending RaBitQ to more dense-vector retrieval scenarios. C and Python bindings and test coverage are included. ([#540](https://github.com/alibaba/zvec/pull/540))
+ **Turbo preprocessor framework:** Introduced an optional preprocessor component in the Turbo quantizer module. Fast Hadamard Transform (FHT) rotation is implemented now, with OPQ rotation and dimensionality reduction planned for future releases. ([#548](https://github.com/alibaba/zvec/pull/548))
+ **Turbo PQ-INT8 quantizer:** Added a PQ-based INT8 quantizer in the Turbo framework, covering L2, Cosine, and Inner Product distance metrics for users who need higher compression. ([#554](https://github.com/alibaba/zvec/pull/554))
+ **Turbo record quantizers:** Migrated INT8/INT4 record quantization and FP16 quantizers into the Turbo framework, added portable scalar distance kernels for non-SIMD targets, and reworked the kernel dispatch registry so every quantization type maps to one explicit backend path. ([#624](https://github.com/alibaba/zvec/pull/624))
+ **Uniform uint7/uint8 quantization:** Exposed uniform uint7 and added uniform uint8 quantization options, giving users more flexibility when trading recall against compression. ([#608](https://github.com/alibaba/zvec/pull/608))
+ **RaBitQ runtime AVX2/AVX512 dispatch:** HNSW-RaBitQ now selects AVX2 or AVX512 implementations at runtime based on the host CPU, removing the need to hard-code an instruction set at build time. ([#632](https://github.com/alibaba/zvec/pull/632))
+ **DiskANN cross-platform support:** DiskANN was extended from Linux x86_64 to Linux ARM64 and macOS ARM64 (Apple Silicon). It now selects the best available I/O backend — io_uring, libaio, or pread — and falls back safely. macOS uses `F_NOCACHE` and disables read-ahead for DiskANN files. ([#557](https://github.com/alibaba/zvec/pull/557), [#599](https://github.com/alibaba/zvec/pull/599))
+ **Vamana two-pass graph build:** Added an optional two-pass graph build path for Vamana, improving graph quality on some datasets. ([#634](https://github.com/alibaba/zvec/pull/634))
+ **HNSW graph build from original vectors:** HNSW can now build the graph from raw, original vectors supplied by a provider while search still runs against the vectors stored in the index, improving graph quality when stored vectors are lossy. ([#657](https://github.com/alibaba/zvec/pull/657))
+ **FTS ngram tokenizer:** Added an ngram tokenizer for full-text search, useful for character-level matching such as short text, code, or pinyin. ([#593](https://github.com/alibaba/zvec/pull/593))
+ **DocIterator for full collection traversal:** Added `DocIterator` for streaming full-collection traversal across C++, C, and Python. The iterator takes a snapshot, so later writes and deletes are invisible, and the Python API supports `with collection.iter_docs()`. ([#597](https://github.com/alibaba/zvec/pull/597))
+ **musllinux wheels:** Added x86_64 and arm64 Python wheel builds for musl libc environments, plus compatibility fixes for musl thread stacks, logger singleton lifetime, and DiskANN heap over-reads. ([#649](https://github.com/alibaba/zvec/pull/649))
+ **Prebuilt SDK release pipeline:** PR [#628](https://github.com/alibaba/zvec/pull/628) proposes a GitHub Release pipeline that builds and publishes prebuilt C/C++ SDK packages for Linux (glibc and musl, x86_64 and arm64), macOS ARM64, Windows x86_64, Android arm64, and iOS XCFrameworks whenever a `v*` tag is pushed.

### 🚀 Performance Improvements
+ **DiskANN async I/O overlap and dynamic beam:** Reworked DiskANN beam search to overlap CPU work with disk I/O and introduced dynamic beam width, reducing query latency on disk-bound workloads. ([#617](https://github.com/alibaba/zvec/pull/617))
+ **Smaller dynamic libraries:** Reduced the size of prebuilt dynamic libraries by controlling symbol visibility, enabling dead-code elimination, and removing the protobuf/protoc build dependency. On macOS ARM64, `libzvec_c_api.dylib` dropped from 37.21 MB to 22.06 MB (-40.7%) and `libzvec.dylib` dropped from 36.96 MB to 23.37 MB (-36.8%). Core search code remains compiled with `-O3`, so query performance is unaffected. ([#627](https://github.com/alibaba/zvec/pull/627))

### 🐞 Bug Fixes
+ **Index and storage stability:** Fixed a crash when the forward-store writer failed to open; enabled optimize after crash recovery without opening the WAL; persisted delete-only writing segment records; handled large final IPC chunks in the mmap store; cleaned up orphaned segment directories after crash recovery; and cleaned up retired segment directories after optimize on Windows. ([#579](https://github.com/alibaba/zvec/pull/579), [#600](https://github.com/alibaba/zvec/pull/600), [#618](https://github.com/alibaba/zvec/pull/618), [#645](https://github.com/alibaba/zvec/pull/645), [#674](https://github.com/alibaba/zvec/pull/674), [#676](https://github.com/alibaba/zvec/pull/676))
+ **DiskANN:** Wired DiskANN into the zvec core lib correctly; made the Linux AIO fallback safe for partial operations; fixed a heap over-read in `add_vector` and an off-by-one in `convert_pivot_data`. ([#602](https://github.com/alibaba/zvec/pull/602), [#615](https://github.com/alibaba/zvec/pull/615))
+ **Vamana / HNSW:** Vamana now honors asymmetric query metrics; fixed issues around `HnswExternalStreamerEntity`; fixed the `pq_int8` bug on ARM NEON; and corrected spherical K-means centroid normalization and K-MC2 sampling weights. ([#635](https://github.com/alibaba/zvec/pull/635), [#607](https://github.com/alibaba/zvec/pull/607), [#682](https://github.com/alibaba/zvec/pull/682), [#654](https://github.com/alibaba/zvec/pull/654), [#655](https://github.com/alibaba/zvec/pull/655))
+ **Search and filtering:** Fixed filter validation and stale filter-state resets; isolated equal-or rewrite across AND in the SQL engine; prevented heap invariants from being bypassed; and fixed ASan issues including a visit_filter off-by-one. ([#663](https://github.com/alibaba/zvec/pull/663), [#679](https://github.com/alibaba/zvec/pull/679), [#633](https://github.com/alibaba/zvec/pull/633), [#650](https://github.com/alibaba/zvec/pull/650))
+ **Python bindings:** Validate query `topk` and field names, reject empty FTS queries, add a `close()` method on collections, and normalize doc numpy vectors so users get clearer errors instead of silent misbehavior. ([#616](https://github.com/alibaba/zvec/pull/616), [#612](https://github.com/alibaba/zvec/pull/612), [#640](https://github.com/alibaba/zvec/pull/640), [#567](https://github.com/alibaba/zvec/pull/567), [#653](https://github.com/alibaba/zvec/pull/653))
+ **Collection maintenance concurrency:** Reads and writes can now proceed while Optimize runs; also fixed mismatched scalar batch boundaries. ([#614](https://github.com/alibaba/zvec/pull/614), [#639](https://github.com/alibaba/zvec/pull/639))
+ **Build and versioning:** The C API no longer reports a bogus 0.2.1 version when git tags are missing; UTF-8 paths are handled correctly on Windows; all-in-one DLL exports are limited; ANTLR4 MSVC D9025 warnings and ThreadQueue lambda-capture errors are fixed; stale submodule patch markers and dirty protobuf worktrees are cleaned up. ([#629](https://github.com/alibaba/zvec/pull/629), [#666](https://github.com/alibaba/zvec/pull/666), [#611](https://github.com/alibaba/zvec/pull/611), [#693](https://github.com/alibaba/zvec/pull/693), [#688](https://github.com/alibaba/zvec/pull/688), [#675](https://github.com/alibaba/zvec/pull/675), [#671](https://github.com/alibaba/zvec/pull/671))

### 🔧 Refactoring & Cleanup
+ **Thread-pool CPU affinity is now opt-in:** The thread pool no longer pins threads to CPU cores by default, avoiding surprises in containers or other scheduling-sensitive environments. Affinity can still be enabled explicitly. ([#623](https://github.com/alibaba/zvec/pull/623))
+ **Removed redundant components:** Dropped the redundant `IndexLogger` and unnecessary `virtual` keywords to reduce maintenance surface. ([#652](https://github.com/alibaba/zvec/pull/652), [#631](https://github.com/alibaba/zvec/pull/631))
+ **Test stabilization:** Stabilized DiskANN and IVF searcher tests, made ThreadQueue waits deterministic, and updated collection recovery tests for the new APIs. ([#637](https://github.com/alibaba/zvec/pull/637), [#680](https://github.com/alibaba/zvec/pull/680), [#686](https://github.com/alibaba/zvec/pull/686))

### 🤖 CI & Build Improvements
+ **Windows / MSVC builds:** Refactored the Snowball codegen build to CMake for MSVC compatibility, added nmake support, and fixed MSVC lambda-capture and ANTLR4 warning issues, making Windows development smoother. ([#668](https://github.com/alibaba/zvec/pull/668), [#661](https://github.com/alibaba/zvec/pull/661), [#688](https://github.com/alibaba/zvec/pull/688), [#693](https://github.com/alibaba/zvec/pull/693))
+ **Dependency and action bumps:** Updated `actions/setup-python` (6→7), `actions/setup-java` (5→5.6.0→5.7.0), and `mozilla-actions/sccache-action` (0.0.10→0.0.11). ([#620](https://github.com/alibaba/zvec/pull/620), [#641](https://github.com/alibaba/zvec/pull/641), [#667](https://github.com/alibaba/zvec/pull/667), [#642](https://github.com/alibaba/zvec/pull/642))
+ **CI behavior:** Checks now run when a draft PR becomes ready; `pyproject.toml` adds a python_version marker for cibuildwheel and includes the missing `pytest-xdist` in `[dev]`. ([#670](https://github.com/alibaba/zvec/pull/670), [#560](https://github.com/alibaba/zvec/pull/560))

### 📝 Documentation
+ Updated the README to v0.6.0 and fixed the WeChat QR code link. ([#606](https://github.com/alibaba/zvec/pull/606), [#610](https://github.com/alibaba/zvec/pull/610), [#651](https://github.com/alibaba/zvec/pull/651))

### 👋 New Contributors
Thanks to all first-time contributors in this release:

+ [@mrcs64](https://github.com/mrcs64) ([#579](https://github.com/alibaba/zvec/pull/579))
+ [@suyanpanghuang](https://github.com/suyanpanghuang) ([#649](https://github.com/alibaba/zvec/pull/649))

---

**Full Changelog:** [v0.6.0...v0.7.0](https://github.com/alibaba/zvec/compare/v0.6.0...v0.7.0)

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.7.0` · 2026-08-24 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
