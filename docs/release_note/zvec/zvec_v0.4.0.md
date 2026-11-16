---
title: "zvec v0.4.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.4.0"
version: "v0.4.0"
published: "2026-05-09"
type: "minor"
lang: "en"
summary: "Dart/Flutter SDK (Android & iOS): Published the official zvec Flutter package, providing Dart/Flutter FFI bindings for Zvec. Supports Android (arm64-v8a) and iOS (arm64)."
---

# zvec v0.4.0

## 🚀 Zvec v0.4.0 Release Notes

### 📦 New Features
* **Dart/Flutter SDK (Android & iOS)**: Published the official [zvec](https://pub.dev/packages/zvec) Flutter package, providing Dart/Flutter FFI bindings for Zvec. Supports Android (arm64-v8a) and iOS (arm64). Prebuilt native libraries are automatically downloaded at build time — no manual native compilation required for end users. ([Issue #192](https://github.com/alibaba/zvec/issues/192))
* **Enlarged topK Limit**: Relaxed the upper bound on topK results to support larger-scale recall scenarios. ([#348](https://github.com/alibaba/zvec/pull/348))
* **iOS Build Support**: Added support for building on iOS platforms, further expanding cross-platform coverage. ([#321](https://github.com/alibaba/zvec/pull/321))

### 🐞 Bug Fixes
* **SQ8 Quantizer Recall Drop**: Fixed a recall degradation caused by incorrect handling of int8 rounding in SQ8 quantizer metadata. ([#329](https://github.com/alibaba/zvec/pull/329))
* **query_params Type Validation**: Added stricter type checking on user-supplied query parameters to prevent runtime errors from invalid inputs. ([#351](https://github.com/alibaba/zvec/pull/351))
* **Windows Path Handling**: Fixed MakePath behavior at drive root on Windows; added GetLastErrorString() helper for more accurate OS error messages. ([#337](https://github.com/alibaba/zvec/pull/337), [#341](https://github.com/alibaba/zvec/pull/341))
* **Relaxed Collection Path Restriction**: Removed overly strict validation constraints on the collection storage path. ([#340](https://github.com/alibaba/zvec/pull/340))
* **Remove Redundant Python Index Type Validation**: Removed duplicated vector index type validation on the Python side in create_index. ([#297](https://github.com/alibaba/zvec/pull/297))
* Sparse vector indices is now sorted before feeding to core vector index engine. (#382)
* Other minor bug fixes. ([#370](https://github.com/alibaba/zvec/pull/370))

### 🔧 Refactoring & Cleanup
* **Remove Legacy HNSW Builder/Searcher**: Cleaned up the legacy HNSW builder/searcher, and hnsw-rabitq builder/searcher. ([#356](https://github.com/alibaba/zvec/pull/356), [#367](https://github.com/alibaba/zvec/pull/367))
* **Fix C Example CMake & C++ Dynamic Library Build**: Corrected the CMake configuration for C language examples and improved the C++ shared library build scripts. ([#347](https://github.com/alibaba/zvec/pull/347))

### 🤖 CI & Build Improvements
* Refactored Android CI, enhanced iOS CI stability, and fixed code coverage reporting. ([#330](https://github.com/alibaba/zvec/pull/330), [#332](https://github.com/alibaba/zvec/pull/332), [#331](https://github.com/alibaba/zvec/pull/331))
* **clang-tidy in CI**: Integrated clang-tidy static analysis into the CI pipeline for changed C/C++ files, strengthening code quality enforcement. ([#116](https://github.com/alibaba/zvec/pull/116))

### 👋 New Contributors
Thanks to all first-time contributors in this release:
* [@kgeg401](https://github.com/kgeg401) ([#116](https://github.com/alibaba/zvec/pull/116))
* [@JoeJRW](https://github.com/JoeJRW) ([#329](https://github.com/alibaba/zvec/pull/329))
* [@songqing](https://github.com/songqing) ([#297](https://github.com/alibaba/zvec/pull/297))

---

**Full Changelog**: [v0.3.0...v0.4.0](https://github.com/alibaba/zvec/compare/v0.3.0...v0.4.0)

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.4.0` · 2026-05-09 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
