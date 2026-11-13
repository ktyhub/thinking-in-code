---
title: "sofa-rpc v5.13.0"
project: "sofa-rpc"
repo: "sofastack/sofa-rpc"
tag: "v5.13.0"
published: "2024-05-22"
type: "minor"
lang: "en"
summary: "Added some features, enhanced the sofa-rpc framework, and fixed some bugs (requires support for JDK8 version)."
---

# sofa-rpc v5.13.0

## Abstract
Added some features, enhanced the sofa-rpc framework, and fixed some bugs (requires support for JDK8 version).

## What's Changed
### Feature
* Support triple pojo mode stream call (issue#1332) by @namelessssssssssss in https://github.com/sofastack/sofa-rpc/pull/1360
* Support kubernetes extension registry by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1395
* Support bzip2 and gzip compress by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1399

### Enhancement
* Optimize UserThreadPoolManager by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1390
* Optimize performance for h2c protocol by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1400
* Enhanced for Nacos weight configuration by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1406
* Pick up baggage from header by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1402
* Support default filter config by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1415
* Support consumer routers config by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1416
* Add providerProcessRegister event and record context to bolt by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1417
* Bump hessian from 3.5.2 to 3.5.3 by @Lo1nt in https://github.com/sofastack/sofa-rpc/pull/1409
* Chore(deps): bump org.apache.cxf:cxf-core from 3.4.10 to 3.5.8 in /bom by @dependabot in https://github.com/sofastack/sofa-rpc/pull/1404
* Chore(deps): bump org.apache.commons:commons-compress from 1.25.0 to 1.26.0 in /bom by @dependabot in https://github.com/sofastack/sofa-rpc/pull/1413
* Chore(deps): bump org.apache.commons:commons-compress from 1.25.0 to 1.26.0 in /all by @dependabot in https://github.com/sofastack/sofa-rpc/pull/1414

### Bug fix
* Fix #1380, create NacosRegistryProviderObserver when init method is executed  by @wangchengming666 in https://github.com/sofastack/sofa-rpc/pull/1401
* Fix lost interface name and method name in tracer when no such method… by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1397

### Misc
* Fix test case error by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1407
* Add additional source directories for triple by @EvenLjj in https://github.com/sofastack/sofa-rpc/pull/1412

## New Contributors
* @namelessssssssssss made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1360

**Full Changelog**: https://github.com/sofastack/sofa-rpc/compare/v5.12.0...v5.13.0

---

> **Source** [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc) · `v5.13.0` · 2024-05-22 · [upstream release](https://github.com/sofastack/sofa-rpc/releases/tag/v5.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
