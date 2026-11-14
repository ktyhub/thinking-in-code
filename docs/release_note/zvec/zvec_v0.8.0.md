---
title: "zvec v0.8.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.8.0"
version: "v0.8.0"
published: "2026-10-21"
type: "minor"
lang: "en"
summary: "Zvec v0.8.0 brings faster queries, lower index build costs, and broader platform support. Quantizer and distance-kernel improvements benefit multiple formats and metrics, with major gains for INT4 and Linux ARM64."
---

# zvec v0.8.0

# 🚀 Zvec v0.8.0 Release Notes
Zvec v0.8.0 brings **faster queries, lower index build costs, and broader platform support**. Quantizer and distance-kernel improvements benefit multiple formats and metrics, with major gains for INT4 and Linux ARM64. This release also reduces peak memory during IVF/DiskANN builds, accelerates HNSW RaBitQ construction, and makes Chinese FTS ready to use with embedded Jieba resources. Platform coverage expands across desktop and mobile, alongside fixes for concurrent reads, index rebuilding, and filtering correctness.

## ⚠️ Breaking Changes and Upgrade Notes
+ **Jieba global dictionary configuration removed:** Default dictionaries and the HMM model are now embedded in native libraries. Python users must remove `init(jieba_dict_dir=...)` and calls to `set_default_jieba_dict_dir()` / `get_default_jieba_dict_dir()`. The corresponding C configuration accessors, C default-directory APIs, and C++ global configuration field and registration APIs have also been removed. To override the main dictionary, use the field's `FtsIndexParam.extra_params.jieba_dict_dir` or `ZVEC_JIEBA_DICT_DIR`; field configuration takes precedence. Use `user_dict_path` to add business vocabulary. ([#807](https://github.com/alibaba/zvec/pull/807))

## 📦 New Features
+ **Intel Mac and Windows ARM64 support:** Added macOS x86_64 builds and Windows ARM64 support with MSVC. Release workflows now include Windows ARM64 SDK packages and native Python 3.11–3.14 wheels. ([#713](https://github.com/alibaba/zvec/pull/713), [#352](https://github.com/alibaba/zvec/pull/352), [#824](https://github.com/alibaba/zvec/pull/824))
+ **DiskANN on Windows and mobile:** Added asynchronous, unbuffered Windows reads through I/O completion ports and portable `pread` support for Android and iOS. ([#625](https://github.com/alibaba/zvec/pull/625), [#656](https://github.com/alibaba/zvec/pull/656))
+ **RaBitQ on Windows x86_64:** Added Windows x86_64 support for RaBitQ indexes. ([#780](https://github.com/alibaba/zvec/pull/780))
+ **Embedded Chinese FTS dictionary:** Embedded the default Jieba dictionary and HMM model as LZ4-compressed resources for Python wheels and native SDKs. Parsed defaults are shared, while custom user dictionaries remain isolated between tokenizer instances. ([#807](https://github.com/alibaba/zvec/pull/807))
+ **More flexible identifiers:** Document IDs now accept valid UTF-8 up to 1,024 bytes, and collection names accept valid UTF-8 from 1 to 256 bytes, excluding prohibited control and separator characters. Field names retain their ASCII character set, expand to 64 bytes, and reject reserved internal names. ([#756](https://github.com/alibaba/zvec/pull/756))
+ **Uniform quantization in collections:** Added uniform UINT4 quantization and integrated uniform UINT4/UINT7/UINT8 quantizers with the database layer and HNSW. A shared quantization range avoids per-datapoint score reconstruction during queries, accelerating search. Using a shared min/max across all indexed points can increase quantization error and reduce recall. ([#698](https://github.com/alibaba/zvec/pull/698), [#754](https://github.com/alibaba/zvec/pull/754))
+ **Turbo PQ and FastScan:** Added PQ-INT4 and a 4-bit PQ FastScan implementation with packed block scanning, together with SIMD and scalar distance kernels and precomputed residual distance tables for IVF. ([#664](https://github.com/alibaba/zvec/pull/664))
+ **OPQ preprocessing:** Added Optimized Product Quantization rotation to the Turbo framework and consolidated common training and serialization logic across PQ quantizers. ([#717](https://github.com/alibaba/zvec/pull/717), [#765](https://github.com/alibaba/zvec/pull/765))
+ **Shared page cache for vector indexes:** Added buffer-backed storage and integrated HNSW, IVF, and DiskANN with a shared page cache. The implementation supports pinned reads, batched page access, and DiskANN direct-I/O fallback under cache pressure. ([#708](https://github.com/alibaba/zvec/pull/708), [#742](https://github.com/alibaba/zvec/pull/742), [#766](https://github.com/alibaba/zvec/pull/766))

## 🚀 Performance Improvements
+ **Lower IVF and DiskANN build memory:** Reduced redundant vector copies, streamed merged inputs, bounded temporary encoding buffers, and released completed builders and inputs earlier to reduce peak memory during construction and optimize. ([#733](https://github.com/alibaba/zvec/pull/733), [#762](https://github.com/alibaba/zvec/pull/762))
+ **Faster HNSW RaBitQ construction:** Reused raw vectors during neighbor pruning and batched Flat provider lookups and segment locking, reducing repeated reads and lock acquisitions. ([#755](https://github.com/alibaba/zvec/pull/755), [#813](https://github.com/alibaba/zvec/pull/813))
+ **Turbo distance calculation across index families:** Migrated Flat, HNSW, IVF, and DiskANN distance calculation or quantization paths to Turbo and expanded AVX2, AVX512, AVX512-FP16, SSE, and ARM NEON kernels and runtime dispatch. This broad refactoring of quantizers and distance calculation improves performance across quantization formats and distance metrics, with substantial gains for INT4 kernels and Linux ARM workloads. ([#716](https://github.com/alibaba/zvec/pull/716), [#735](https://github.com/alibaba/zvec/pull/735), [#773](https://github.com/alibaba/zvec/pull/773), [#678](https://github.com/alibaba/zvec/pull/678), [#687](https://github.com/alibaba/zvec/pull/687), [#710](https://github.com/alibaba/zvec/pull/710), [#689](https://github.com/alibaba/zvec/pull/689), [#718](https://github.com/alibaba/zvec/pull/718))
+ **Vamana search improvements:** Introduced a split contiguous packed layout, optimized candidate state and prefetching, and corrected medoid selection. Two-pass graph construction is now enabled by default to improve graph quality. ([#701](https://github.com/alibaba/zvec/pull/701), [#727](https://github.com/alibaba/zvec/pull/727), [#738](https://github.com/alibaba/zvec/pull/738), [#749](https://github.com/alibaba/zvec/pull/749), [#761](https://github.com/alibaba/zvec/pull/761))
+ **Lower conversion and locking overhead:** Batched document conversion, improved CRC32C and FP16 dispatch, and separated Flat query metadata access from segment-cache locking. ([#647](https://github.com/alibaba/zvec/pull/647), [#700](https://github.com/alibaba/zvec/pull/700), [#825](https://github.com/alibaba/zvec/pull/825))
+ **Less refinement overhead:** Optimized refinement kernels and candidate handoff/export; `Collection.query_internal_ids()` reduces ID lookup overhead during refinement for read-only collections. HNSW and Vamana can now refine with FP16 or UINT8 vectors, with `scale_factor` controlling the candidate budget. ([#677](https://github.com/alibaba/zvec/pull/677), [#740](https://github.com/alibaba/zvec/pull/740), [#748](https://github.com/alibaba/zvec/pull/748), [#761](https://github.com/alibaba/zvec/pull/761), [#821](https://github.com/alibaba/zvec/pull/821))

## 🐞 Bug Fixes
+ **Concurrent reads and segment switching:** Fixed crashes and missing rows when `fetch()` or `query()` races with a segment switch or flush, synchronized reads of writing segments, and corrected Flat cache synchronization and key-map iterator lifetimes. ([#715](https://github.com/alibaba/zvec/pull/715), [#722](https://github.com/alibaba/zvec/pull/722), [#726](https://github.com/alibaba/zvec/pull/726), [#779](https://github.com/alibaba/zvec/pull/779))
+ **Index rebuild and training correctness:** Preserved vector-to-row mappings when rebuilding indexes containing deleted rows, propagated IVF `n_iters` correctly, decoded Turbo sources during merge training, and corrected INT4 scoring metadata to use rounded values. ([#731](https://github.com/alibaba/zvec/pull/731), [#730](https://github.com/alibaba/zvec/pull/730), [#763](https://github.com/alibaba/zvec/pull/763), [#777](https://github.com/alibaba/zvec/pull/777))
+ **Optimize concurrency controls:** Reused the optimize thread pool for builders and honored configured optimize concurrency in nested RaBitQ and DiskANN training. ([#757](https://github.com/alibaba/zvec/pull/757), [#775](https://github.com/alibaba/zvec/pull/775))
+ **SQL and filtered retrieval:** Balanced deep OR expression trees, prevented overlapping prefix/suffix matches in `LIKE`, fixed inverted-index suffix and empty-array queries, and enabled primary-key brute-force search for filtered IVF queries. ([#694](https://github.com/alibaba/zvec/pull/694), [#745](https://github.com/alibaba/zvec/pull/745), [#752](https://github.com/alibaba/zvec/pull/752), [#816](https://github.com/alibaba/zvec/pull/816))
+ **Exact floating-point range bounds:** Preserved FLOAT and DOUBLE bounds when converting an inverted-index condition into a forward filter, ensuring exclusive comparisons continue to exclude values equal to the bound. ([#818](https://github.com/alibaba/zvec/pull/818))
+ **FTS persistence and recovery:** Persisted sealed full-text postings before dropping side column families and hardened WAL recovery, schema handling, and decoding. ([#759](https://github.com/alibaba/zvec/pull/759), [#756](https://github.com/alibaba/zvec/pull/756))
+ **ARM FP16 dispatch:** Fixed compile-time detection and runtime selection of ARM NEON FP16 kernels. ([#723](https://github.com/alibaba/zvec/pull/723))

## 🔧 Refactoring and Developer Tooling
+ **Storage read lifetimes:** Migrated index storage reads to `MemoryBlock`, extending lifetime-safe borrowed and batched access across index implementations. ([#812](https://github.com/alibaba/zvec/pull/812))
+ **SQL filter planning:** Added extensible filter-set rewriting and separated filter validation from execution binding. ([#690](https://github.com/alibaba/zvec/pull/690), [#769](https://github.com/alibaba/zvec/pull/769))
+ **RaBitQ dependency updates:** Upgraded RaBitQ-Library through v0.3.8 to v0.7.0 and adopted upstream modular core/FastScan targets. ([#780](https://github.com/alibaba/zvec/pull/780), [#814](https://github.com/alibaba/zvec/pull/814))
+ **Core tools and static analysis:** Added Turbo quantizer support to core benchmark/build tools, introduced a clang-tidy pre-commit hook, and expanded modernization and identifier-naming checks. ([#684](https://github.com/alibaba/zvec/pull/684), [#571](https://github.com/alibaba/zvec/pull/571), [#734](https://github.com/alibaba/zvec/pull/734), [#751](https://github.com/alibaba/zvec/pull/751), [#764](https://github.com/alibaba/zvec/pull/764))

## 🤖 CI and Build Improvements
+ Fixed conflicting MSVC debug flags, an MSVC ARM64 compiler crash in tests, unavailable legacy Android SDK tooling, and build warnings. Disabled unused Thrift OpenSSL support and stripped debug symbols from Android prebuilt SDK libraries. ([#692](https://github.com/alibaba/zvec/pull/692), [#795](https://github.com/alibaba/zvec/pull/795), [#753](https://github.com/alibaba/zvec/pull/753), [#720](https://github.com/alibaba/zvec/pull/720), [#819](https://github.com/alibaba/zvec/pull/819), [#702](https://github.com/alibaba/zvec/pull/702))
+ Updated `actions/setup-python`, `actions/setup-java`, and `softprops/action-gh-release` ([#712](https://github.com/alibaba/zvec/pull/712), [#750](https://github.com/alibaba/zvec/pull/750), [#725](https://github.com/alibaba/zvec/pull/725))

## 👋 New Contributors
Thanks to all first-time contributors in this release！
* @Aanerud made their first contribution in https://github.com/alibaba/zvec/pull/352
* @Mordris made their first contribution in https://github.com/alibaba/zvec/pull/571
* @JasonXuDeveloper made their first contribution in https://github.com/alibaba/zvec/pull/795
* @smartworldarafath made their first contribution in https://github.com/alibaba/zvec/pull/779
* @gouyt13 made their first contribution in https://github.com/alibaba/zvec/pull/814
* @jak-pan made their first contribution in https://github.com/alibaba/zvec/pull/818

**Full Changelog**: https://github.com/alibaba/zvec/compare/v0.7.0...v0.8.0

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.8.0` · 2026-10-21 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
