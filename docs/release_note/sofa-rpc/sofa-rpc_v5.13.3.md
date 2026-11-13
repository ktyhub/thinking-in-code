---
title: "sofa-rpc v5.13.3"
project: "sofa-rpc"
repo: "sofastack/sofa-rpc"
tag: "v5.13.3"
published: "2025-03-13"
type: "patch"
lang: "en"
summary: "Enhanced the sofa-rpc framework and fixed some bugs (requires support for JDK8 version). We encourage use v5.13.3 to upgrade, when the version between v5.13.0 and v5.13.2. For details, please refer to all commits."
---

# sofa-rpc v5.13.3

## Abstract
Enhanced the sofa-rpc framework and fixed some bugs (requires support for JDK8 version). We encourage use v5.13.3 to upgrade, when the version between v5.13.0 and v5.13.2. For details, please refer to all commits.

## What's Changed

### Enhancement
* enhance triple stream tracer by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1477
* add a cache for missing classes to improve the performance of RPC deserialization by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1482

### Fix
* fix method timeout resolve problem by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1478 
* fix the triple header context transfer issue by @EvenLjj in https://github.com/sofastack/sofa-rpc/commit/c30417172fcc04452e88516dab24a4cd9cced961 https://github.com/sofastack/sofa-rpc/pull/1476
* fix triple POJO stream parent interface method do not cache stream call type issue by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1481
* fix too many ping problem by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1483
* fix serialization and deserialization classloader issues in serverless scene by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1480 https://github.com/sofastack/sofa-rpc/pull/1484 

**Full Changelog**: https://github.com/sofastack/sofa-rpc/compare/v5.13.2...v5.13.3

---

> **Source** [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc) · `v5.13.3` · 2025-03-13 · [upstream release](https://github.com/sofastack/sofa-rpc/releases/tag/v5.13.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
