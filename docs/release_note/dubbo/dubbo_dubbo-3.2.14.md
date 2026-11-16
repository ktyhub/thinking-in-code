---
title: "dubbo dubbo-3.2.14"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.14"
version: "dubbo-3.2.14"
published: "2024-06-17"
type: "release"
lang: "en"
summary: "Support disable Curator EnsembleTracker in ServiceDiscovery and"
---

# dubbo dubbo-3.2.14

## What's Changed

### Feature
* Support disable Curator EnsembleTracker in ServiceDiscovery by @aofall in https://github.com/apache/dubbo/pull/14285 and https://github.com/apache/dubbo/pull/14281

### Bugfix
* Fix when url has param with question mark,parse param wrong by @yuanxingke in https://github.com/apache/dubbo/pull/14235
* Fix disable accesslog while the config of dubbo.protocol.accesslog is false by @aofall in https://github.com/apache/dubbo/pull/14257
* Fix triple reactor call throws "Too many response for unary method" exception by @caoyanan666 in https://github.com/apache/dubbo/pull/14261
* Fix uber jar compile failure with spring boot 3 by @liaozan in https://github.com/apache/dubbo/pull/14247
* Fix DubboRelaxedBinding2AutoConfiguration and DubboAutoConfiguration created to early by @xixingya in https://github.com/apache/dubbo/pull/14255

### Dependency Upgrade
* Update bytebuddy.version: 1.14.15 -> 1.14.17 #14273
* Update com.alibaba.fastjson2:fastjson2: 2.0.49 -> 2.0.51 #14272
* Update io.opentelemetry:opentelemetry-bom: 1.38.0 -> 1.39.0 #14304
* Update jakarta.validation:jakarta.validation-api: 3.0.2 -> 3.1.0 #14239
* Update net.bytebuddy:byte-buddy: 1.14.15 -> 1.14.17 #14238, #14275
* Update netty4_version: 4.1.109.Final -> 4.1.110.Final #14241
* Update org.apache.commons:commons-compress: 1.26.1 -> 1.26.2 #14243
* Update opentelemetry: 1.34.1 -> 1.38.0 #14252
* Update zipkin-reporter: 2.17.2 -> 3.4.0 #14252
* Update spring_version: 5.3.35 -> 5.3.36 #14242
* Update micrometer-tracing: 1.2.5 -> 1.3.0 #14284

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@aofall, @caoyanan666, @liaozan, @songxiaosheng, @wcy666103, @xixingya, @yuanxingke

## New Contributors
* @yuanxingke made their first contribution in https://github.com/apache/dubbo/pull/14235

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.2.13...dubbo-3.2.14

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.2.14` · 2024-06-17 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
