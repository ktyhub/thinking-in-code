---
title: "sofa-rpc v5.14.0"
project: "sofa-rpc"
repo: "sofastack/sofa-rpc"
tag: "v5.14.0"
published: "2025-10-18"
type: "minor"
lang: "en"
summary: "Enhanced the sofa-rpc framework and fixed some bugs (requires support for JDK8 version)."
---

# sofa-rpc v5.14.0

## Abstract
Enhanced the sofa-rpc framework and fixed some bugs (requires support for JDK8 version). 

## What's Changed
### Feature
* optimize dynamic config, integrate Zookeeper & Nacos, support interface-level dynamic config by @Narzisss in https://github.com/sofastack/sofa-rpc/pull/1430
* support custom UserThreadPool for interface method by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1500
* support custom triple header size & modify default max header size to 64 KB by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1509 https://github.com/sofastack/sofa-rpc/pull/1510

### Fix
* fix hessian deserialize support sofa.serialize.dynamic.load.enable by @Just-CJ in https://github.com/sofastack/sofa-rpc/pull/1463
* fix exception status code mapping in FailFastCluster trace logging by @wunameya in https://github.com/sofastack/sofa-rpc/pull/1504
* fix sharedChannel concurrent destroy problem by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1513


### Chore
* chore(deps): bump org.apache.cxf:cxf-core from 3.5.8 to 3.5.11 in /bom by @dependabot[bot] in https://github.com/sofastack/sofa-rpc/pull/1497
* update nexusUrl by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1515 https://github.com/sofastack/sofa-rpc/pull/1516 https://github.com/sofastack/sofa-rpc/pull/1518

## New Contributors
* @Narzisss made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1430
* @Just-CJ made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1463
* @wunameya made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1504

**Full Changelog**: https://github.com/sofastack/sofa-rpc/compare/v5.13.5...v5.14.0

---

> **Source** [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc) · `v5.14.0` · 2025-10-18 · [upstream release](https://github.com/sofastack/sofa-rpc/releases/tag/v5.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
