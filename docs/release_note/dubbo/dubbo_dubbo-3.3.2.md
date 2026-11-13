---
title: "dubbo dubbo-3.3.2"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.2"
published: "2024-10-29"
type: "release"
lang: "en"
summary: "Releates PRs: #14810, #14801, #14817, #14815, #14840, #14839"
---

# dubbo dubbo-3.3.2

## What's Changed

### Feature
* Config value supports arrays. by @oxsean in https://github.com/apache/dubbo/pull/14813

### Bugfix
* Fix old service discovery app listener destroy issues by @xingcici in https://github.com/apache/dubbo/pull/14669
* Fix memory leak in HttpPostRequestDecoder when body is empty by @oxsean in https://github.com/apache/dubbo/pull/14760
* Fix ParameterizedType in SERVER_STREAM by @AlbumenJ in https://github.com/apache/dubbo/pull/14763
* Fix Path matching bug by @oxsean in https://github.com/apache/dubbo/pull/14812
* Fix sendRedirect 302 failure by @oxsean in https://github.com/apache/dubbo/pull/14811
* Keep the behavior consistent with SpringMVC when access through browser by @oxsean in https://github.com/apache/dubbo/pull/14816
* Fix unable to deserialize Record using Hessian2 by @AlbumenJ in https://github.com/apache/dubbo/pull/14820
* A couple of rest bugfix by @oxsean in https://github.com/apache/dubbo/pull/14822
* Fix input stream unable to being deserialized by @AlbumenJ in https://github.com/apache/dubbo/pull/14837

### Code Enhancement
Releates PRs: #14810, #14801, #14817, #14815, #14840, #14839

### Dependency Upgrade
* Update byte-buddy_version: 1.15.1 -> 1.15.7 #14775, #14806, #14828
* Update ch.qos.logback:logback-core: 1.5.8 -> 1.5.11 #14774, #14802
* Update com.alibaba:fastjson: 1.2.83 -> 1.2.83_noneautotype #14751
* Update com.alibaba.nacos:nacos-client: 2.4.2 -> 2.4.3 #14777
* Update curator5_version: 5.7.0 -> 5.7.1 #14804, #14773
* Update io.micrometer:micrometer-bom: 1.13.4 -> 1.13.5 #14755
* Update io.micrometer:micrometer-core: 1.13.4 -> 1.13.6 #14756, #14807
* Update io.micrometer:micrometer-tracing-bom: 1.3.4 -> 1.3.5 #14803
* Update io.opentelemetry:opentelemetry-bom: 1.42.0 -> 1.43.0 #14737, #14776
* Update io.projectreactor:reactor-core: 3.6.10 -> 3.6.11 #14808
* Update netty4_version: 4.1.113.Final -> 4.1.114.Final #14753
* Update org.springframework.security:spring-security-bom: 5.8.14 -> 5.8.15 #14827
* Update ch.qos.logback:logback-core: 1.5.11 -> 1.5.12 #14829

## New Contributors
* @wsliliang made their first contribution in https://github.com/apache/dubbo/pull/14810
* @JanSoundhouse made their first contribution in https://github.com/apache/dubbo/pull/14815

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.1...dubbo-3.3.2

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.2` · 2024-10-29 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
