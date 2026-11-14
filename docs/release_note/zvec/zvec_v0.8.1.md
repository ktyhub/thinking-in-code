---
title: "zvec v0.8.1"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.8.1"
version: "v0.8.1"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "Upgrade note: Collections with pending WAL recovery must first be opened and closed in writable mode before being opened read-only. (#840)"
---

# zvec v0.8.1

# 🚀 Zvec v0.8.1 Release Notes

## 📦 New Features
+ **PQ for HNSW and IVF:** Added PQ4/PQ8 and optional OPQ, covering training, search, persistence, and subsequent updates. ([#833](https://github.com/alibaba/zvec/pull/833))
+ **Broader platform support:** Enabled RaBitQ on Linux, macOS, Android, and iOS ARM64, plus Intel Mac. DiskANN now supports Intel Mac and Windows ARM64. ([#832](https://github.com/alibaba/zvec/pull/832), [#874](https://github.com/alibaba/zvec/pull/874))
+ **Grouped search in the C API:** Added grouped vector query and result-management APIs. ([#845](https://github.com/alibaba/zvec/pull/845))

## 🚀 Performance Improvements
+ **Lower build memory:** Reduced vector copying and temporary storage in DiskANN, IVF, and selected HNSW construction paths. ([#853](https://github.com/alibaba/zvec/pull/853), [#877](https://github.com/alibaba/zvec/pull/877), [#879](https://github.com/alibaba/zvec/pull/879), [#880](https://github.com/alibaba/zvec/pull/880))
+ **Faster search and construction:** Improved Flat batch queries, HNSW construction, and FP16 distance calculation, and completed ARM NEON batch-distance kernels. ([#862](https://github.com/alibaba/zvec/pull/862), [#871](https://github.com/alibaba/zvec/pull/871), [#856](https://github.com/alibaba/zvec/pull/856))

## 🐞 Key Fixes
+ Strengthened read-only storage guarantees, fixing index modifications on read-only close, WAL recovery boundaries, and writable reopen behavior. ([#834](https://github.com/alibaba/zvec/pull/834), [#840](https://github.com/alibaba/zvec/pull/840), [#870](https://github.com/alibaba/zvec/pull/870))
+ Fixed HNSW RaBitQ scoring, missing external-vector handling, crashes after failed schema changes, and collection locks retained through inherited file descriptors. ([#851](https://github.com/alibaba/zvec/pull/851), [#861](https://github.com/alibaba/zvec/pull/861), [#822](https://github.com/alibaba/zvec/pull/822), [#859](https://github.com/alibaba/zvec/pull/859))

**Upgrade note:** Collections with pending WAL recovery must first be opened and closed in writable mode before being opened read-only. ([#840](https://github.com/alibaba/zvec/pull/840))

Thanks to all contributors, and welcome to first-time contributors [@ZoruaSama](https://github.com/ZoruaSama) and [@ilike314272](https://github.com/ilike314272)!

**Full Changelog:**[v0.8.0...v0.8.1](https://github.com/alibaba/zvec/compare/v0.8.0...v0.8.1)

---

> **Source** [alibaba/zvec](https://github.com/alibaba/zvec) · `v0.8.1` · 2026-11-06 · [upstream release](https://github.com/alibaba/zvec/releases/tag/v0.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
