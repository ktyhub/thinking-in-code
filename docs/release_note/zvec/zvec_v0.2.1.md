---
title: "zvec v0.2.1"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.2.1"
version: "v0.2.1"
published: "2026-03-18"
type: "patch"
lang: "en"
summary: "A feature-rich update focused on build and CI improvements, platform expansion, performance optimization, and developer ecosystem enhancements."
---

# zvec v0.2.1

## 🚀 Zvec v0.2.1 Release Notes

A feature-rich update focused on **build and CI improvements**, **platform expansion**, **performance optimization**, and **developer ecosystem enhancements**.

---

### 📦 Core Features & Improvements

- Added support for **Jina Embeddings v5** integration ([#156](https://github.com/alibaba/zvec/pull/156))
- Added **custom HTTP embedding example** for LM Studio / Ollama ([#149](https://github.com/alibaba/zvec/pull/149))
- Added **Python API function overloads** for improved usability ([#197](https://github.com/alibaba/zvec/pull/197))
- Added support for **Python 3.13 and 3.14** ([#164](https://github.com/alibaba/zvec/pull/164))
- Added support for **Android cross-platform builds** ([#90](https://github.com/alibaba/zvec/pull/90))
- Enabled **Ice Lake optimization** and **L2 batch distance for int8 quantization** ([#213](https://github.com/alibaba/zvec/pull/213))
- Increased **index size limit for sparse vectors** ([#229](https://github.com/alibaba/zvec/pull/229))

### ⚡ Performance & Build Optimization

- Optimized IVF implementation for better stability and performance ([#169](https://github.com/alibaba/zvec/pull/169))
- Reorganized architecture-specific `-march` handling for cleaner build behavior ([#193](https://github.com/alibaba/zvec/pull/193))
- Disabled RocksDB `-march=native` to improve build portability ([#183](https://github.com/alibaba/zvec/pull/183))
- Improved default source build behavior around `-march=native` ([#184](https://github.com/alibaba/zvec/pull/184))
- Automatically disabled math `march` optimization when CPU features cannot be detected ([#220](https://github.com/alibaba/zvec/pull/220))
- Replaced `std::map` with `std::unordered_map` for `key_id_mapping` ([#153](https://github.com/alibaba/zvec/pull/153))
- Accelerated third-party dependency downloads via OSS mirror support ([#194](https://github.com/alibaba/zvec/pull/194))
- Added configurable **Clang stdlib** support and improved default build behavior ([#210](https://github.com/alibaba/zvec/pull/210))
- Fixed subproject build issues by replacing `CMAKE_SOURCE_DIR` with `PROJECT_ROOT_DIR` ([#195](https://github.com/alibaba/zvec/pull/195))

### 🐞 Bug Fixes

- Updated ANTLR4 `CMAKE_POLICY` from `OLD` to `NEW` for compatibility with **CMake 3.31+** ([#145](https://github.com/alibaba/zvec/pull/145))
- Improved **MSVC compatibility** and stack safety by replacing VLAs with `std::vector` ([#190](https://github.com/alibaba/zvec/pull/190))
- Fixed `uint8` conversion overflow issue ([#215](https://github.com/alibaba/zvec/pull/215))
- Fixed compilation issues in several build environments ([#218](https://github.com/alibaba/zvec/pull/218))
- Fixed crash residue cleanup logic ([#208](https://github.com/alibaba/zvec/pull/208))
- Added a new validator for **cosine metric** handling ([#209](https://github.com/alibaba/zvec/pull/209))
- Fixed MIPS Euclidean distance implementation ([#226](https://github.com/alibaba/zvec/pull/226))
- Replaced `std::vector` with `std::array` in distance implementation where appropriate ([#201](https://github.com/alibaba/zvec/pull/201))
- Switched to static array usage in related low-level logic ([#222](https://github.com/alibaba/zvec/pull/222))
- Fixed query filtering behavior to use **per-block filter** instead of **per-segment filter** ([#223](https://github.com/alibaba/zvec/pull/223))
- Fixed unit tests for sparse builder dump timing ([#237](https://github.com/alibaba/zvec/pull/237))
- Fixed random float behavior in unit tests ([#182](https://github.com/alibaba/zvec/pull/182))
- Fixed compilation warning in crash recovery unit tests ([#217](https://github.com/alibaba/zvec/pull/217))

### 🔧 Developer Experience

- Added installation instructions for the **Node.js package** ([#103](https://github.com/alibaba/zvec/pull/103))
- Added package repository links for easier dependency access ([#104](https://github.com/alibaba/zvec/pull/104))
- Improved README and CONTRIBUTING documentation, including repository URL, align attribute typo, Python version notes, and join-us section updates ([#139](https://github.com/alibaba/zvec/pull/139), [#150](https://github.com/alibaba/zvec/pull/150), [#168](https://github.com/alibaba/zvec/pull/168), [#231](https://github.com/alibaba/zvec/pull/231))
- Added project badges and trend badge updates ([#132](https://github.com/alibaba/zvec/pull/132), [#228](https://github.com/alibaba/zvec/pull/228))
- Added recall-related test improvements ([#196](https://github.com/alibaba/zvec/pull/196))
- Fixed minor typos in documentation and code comments ([#225](https://github.com/alibaba/zvec/pull/225))

### 🤖 CI/CD & Tooling

- Added **macOS CI** with GitHub runner support ([#94](https://github.com/alibaba/zvec/pull/94))
- Added CI workflow using **GitHub-hosted runners** ([#171](https://github.com/alibaba/zvec/pull/171))
- Added **buildwheel** support in GitHub runner workflows ([#221](https://github.com/alibaba/zvec/pull/221))
- Added **continuous benchmarking** support ([#110](https://github.com/alibaba/zvec/pull/110))
- Added **Dependabot** for automated dependency updates ([#181](https://github.com/alibaba/zvec/pull/181))
- Upgraded GitHub Actions for **Node 24 compatibility** and to latest versions ([#129](https://github.com/alibaba/zvec/pull/129), [#130](https://github.com/alibaba/zvec/pull/130))
- Updated workflow Python version to **3.10** ([#186](https://github.com/alibaba/zvec/pull/186))
- Fixed main CI workflow to correctly trigger beyond Linux x64 only ([#187](https://github.com/alibaba/zvec/pull/187))
- Bumped GitHub Actions dependencies:
  - `actions/setup-java` v4 → v5 ([#202](https://github.com/alibaba/zvec/pull/202))
  - `actions/checkout` v4 → v6 ([#203](https://github.com/alibaba/zvec/pull/203))
  - `actions/cache` v3 → v5 ([#204](https://github.com/alibaba/zvec/pull/204))
- Improved conventional pre-commit integration and upgraded to latest version ([#111](https://github.com/alibaba/zvec/pull/111))

---

### 👋 New Contributors

Thanks to all first-time contributors in this release:

- [@Junio243](https://github.com/Junio243) ([#139](https://github.com/alibaba/zvec/pull/139))
- [@cluster2600](https://github.com/cluster2600) ([#150](https://github.com/alibaba/zvec/pull/150))
- [@salmanmkc](https://github.com/salmanmkc) ([#129](https://github.com/alibaba/zvec/pull/129))
- [@hanxiao](https://github.com/hanxiao) ([#156](https://github.com/alibaba/zvec/pull/156))
- [@aashish-thapa](https://github.com/aashish-thapa) ([#145](https://github.com/alibaba/zvec/pull/145))
- [@longway-code](https://github.com/longway-code) ([#153](https://github.com/alibaba/zvec/pull/153))
- [@liututu12](https://github.com/liututu12) ([#196](https://github.com/alibaba/zvec/pull/196))
- [@dependabot](https://github.com/apps/dependabot) ([#202](https://github.com/alibaba/zvec/pull/202))
- [@luoxiaojian](https://github.com/luoxiaojian) ([#213](https://github.com/alibaba/zvec/pull/213))
- [@Abdur-rahmaanJ](https://github.com/Abdur-rahmaanJ) ([#225](https://github.com/alibaba/zvec/pull/225))

---

**Full Changelog**: https://github.com/alibaba/zvec/compare/v0.2.0...v0.2.1  
**Upgrade Recommendation**: ✅ Recommended for all users — especially for those who need broader platform support, improved build compatibility, and CI/tooling enhancements.

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.2.1` · 2026-03-18 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
