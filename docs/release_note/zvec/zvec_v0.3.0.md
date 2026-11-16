---
title: "zvec v0.3.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-04-03"
type: "minor"
lang: "en"
summary: "Windows: Added native support for Windows( tested with MSVC 2022/Visual Studio 17.0+ ). · Mobile: Enabled Android cross-compilation; verified integration in mobile application environments."
---

# zvec v0.3.0

## 🚀 Zvec v0.3.0 Release Notes

### 📦 Platform Support
* **Windows:** Added native support for Windows( tested with MSVC 2022/Visual Studio 17.0+ ).
* **Mobile:** Enabled Android cross-compilation; verified integration in mobile application environments.
* **Package Distribution:** Official Python and Node.js packages for Windows are now available. 
* **CI/CD:** Continuous Integration now covers macOS, Linux, and Windows (native), alongside Android (cross-compile).

### ⚡ Performance & Engineering
* **Quantization:** Introduced the RabitQ algorithm, providing reduced memory usage and high recall without the need for re-ranking.
* **Compute Optimization:** Improved batch calculation performance for IP (Inner Product) and L2 metrics on x86 platforms.
* **Hardware Abstraction:** Refined the CPU detection and dispatch logic to ensure optimal SIMD execution across different instruction sets.

### 🔧 Ecosystem & Stability
* **API Stability:** Formalized the C-API to provide a stable foundation for third-party language bindings and SDK development.
* **AI Integration:** Added support for Model Context Protocol (MCP) and Skill integration for AI Agent workflows.
* **Reliability:** Strengthened crash-recovery protocols and resolved several stability-related issues identified in production-like testing.


### 🐞 Bug Fixes
- Fixed metric batch handling in https://github.com/alibaba/zvec/pull/245
- Fixed build issues when used as a submodule by using PROJECT_ROOT_DIR in https://github.com/alibaba/zvec/pull/250
- Added recovery from crashes during optimization in https://github.com/alibaba/zvec/pull/246
- Fixed build issues on the latest macOS in https://github.com/alibaba/zvec/pull/272
- Fixed hnsw_streamer_test unit tests in https://github.com/alibaba/zvec/pull/299
- Fixed Python type annotations in https://github.com/alibaba/zvec/pull/307

### 👋 New Contributors

Thanks to all first-time contributors in this release:

- [@kdy1](https://github.com/kdy1) ([#234](https://github.com/alibaba/zvec/pull/234))

**Full Changelog**: https://github.com/alibaba/zvec/compare/v0.2.1...v0.3.0

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.3.0` · 2026-04-03 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
