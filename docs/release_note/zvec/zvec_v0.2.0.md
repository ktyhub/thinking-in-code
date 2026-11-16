---
title: "zvec v0.2.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.2.0"
version: "v0.2.0"
published: "2026-02-13"
type: "minor"
lang: "en"
summary: "A major update focused on optimization, platform expansion, and developer experience improvements."
---

# zvec v0.2.0

## 🚀 Zvec v0.2.0 Release Notes

A major update focused on **optimization**, **platform expansion**, and **developer experience** improvements.

---

### 📦 Core Features & Improvements

- Support AI extension framework for on-device embedding workflows ([#88](https://github.com/alibaba/zvec/pull/88))
- Auto-scalable segment metadata in MMap storage files ([#67](https://github.com/alibaba/zvec/pull/67))
- Unified search invocation interface in core ([#15](https://github.com/alibaba/zvec/pull/15))
- Linux ARM64 build support ([#71](https://github.com/alibaba/zvec/pull/71))
- Silent failure on repeated initialization attempts ([#79](https://github.com/alibaba/zvec/pull/79))

### 🐞 Bug Fixes

- Fixed `delete_by_filter` logic using key instead of index ([#84](https://github.com/alibaba/zvec/pull/84), [#87](https://github.com/alibaba/zvec/pull/87))
- Corrected quantized int unit tests ([#47](https://github.com/alibaba/zvec/pull/47))
- Removed unnecessary `column_name` param from `AddColumn` API ([#59](https://github.com/alibaba/zvec/pull/59))
- Fixed typos in HNSW index implementation ([#50](https://github.com/alibaba/zvec/pull/50))
- Removed redundant error expectations in tests ([#82](https://github.com/alibaba/zvec/pull/82))
- Cleaned up unused `ailego` module ([#85](https://github.com/alibaba/zvec/pull/85))

### 🔧 Developer Experience

- Replaced `typing_extensions` with standard `typing` (Python ≥3.10) ([#99](https://github.com/alibaba/zvec/pull/99))
- Improved C++ error logging via `LOG_ERROR` instead of `cerr` ([#80](https://github.com/alibaba/zvec/pull/80))
- Updated docstrings and `.pyi` stubs for Python bindings ([#41](https://github.com/alibaba/zvec/pull/41))
- Removed obsolete `IndexMeta::MetricType` definition ([#53](https://github.com/alibaba/zvec/pull/53))
- Added C++ examples to macOS/Linux CI matrix ([#86](https://github.com/alibaba/zvec/pull/86))

### 🤖 CI/CD & Tooling

- Support CI runs for forked PRs ([#52](https://github.com/alibaba/zvec/pull/52))
- Skip CI on Markdown-only changes ([#55](https://github.com/alibaba/zvec/pull/55))
- Added issue templates for better community support ([#46](https://github.com/alibaba/zvec/pull/46))
- Updated CMake minimum version requirement ([#44](https://github.com/alibaba/zvec/pull/44), [#57](https://github.com/alibaba/zvec/pull/57))
- Bench tool documentation refresh ([#77](https://github.com/alibaba/zvec/pull/77))

### 📚 Documentation

- Updated README badges and join-us section ([#45](https://github.com/alibaba/zvec/pull/45), [#54](https://github.com/alibaba/zvec/pull/54))

---

### 👋 New Contributors

- [@SYaoJun](https://github.com/SYaoJun) — first contribution ([#50](https://github.com/alibaba/zvec/pull/50))

---

**Full Changelog**: https://github.com/alibaba/zvec/compare/v0.1.1...v0.2.0  
**Upgrade Recommendation**: ✅ Recommended for all users — includes critical performance and stability improvements.

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.2.0` · 2026-02-13 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
