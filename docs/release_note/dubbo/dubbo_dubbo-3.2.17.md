---
title: "dubbo dubbo-3.2.17"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.17"
published: "2025-03-05"
type: "release"
lang: "en"
summary: "Fix tcp connection window size split from stream connection window size for 3.2 · Fix parse application/x-www-form-urlencoded error · Disable check when create MetadataService invoker to prevent memory leak"
---

# dubbo dubbo-3.2.17

## What's Changed

* Fix tcp connection window size split from stream connection window size for 3.2 by @JunJieLiu51520 in https://github.com/apache/dubbo/pull/14664
* Fix parse application/x-www-form-urlencoded error by @funky-eyes in https://github.com/apache/dubbo/pull/14700
* Disable check when create MetadataService invoker to prevent memory leak by @AlbumenJ in https://github.com/apache/dubbo/pull/14732
* Fix fastjson2 init error cause startup failure by @AlbumenJ in https://github.com/apache/dubbo/pull/14798
* Lower log level when no connection by @AlbumenJ in https://github.com/apache/dubbo/pull/14800
* Fix init order in AbstractPortUnificationServer by @AlbumenJ in https://github.com/apache/dubbo/pull/14892
* Support pass SSLSession in Invocation to check permission by @AlbumenJ in https://github.com/apache/dubbo/pull/15049
* Get all nacos instances without subscription by @zrlw in https://github.com/apache/dubbo/pull/15126
* Fix triple protocol echoService invoke. by @wuwen5 in https://github.com/apache/dubbo/pull/15127

### Dependency Upgrade
* Update bytebuddy.version: 1.15.0 -> 1.15.1 #14648
* Update ch.qos.logback:logback-core: 1.5.7 -> 1.5.8 #14653
* Update com.alibaba.nacos:nacos-client: 2.4.1 -> 2.4.2 #14655
* Update io.opentelemetry:opentelemetry-bom: 1.41.0 -> 1.42.0 #14651
* Update jetty_version: 9.4.55.v20240627 -> 9.4.56.v20240826 #14650
* Update log4j2_version: 2.23.1 -> 2.24.0 #14649
* Update netty4_version: 4.1.112.Final -> 4.1.113.Final #14652
* Update org.eclipse.jetty:jetty-maven-plugin: 9.4.55.v20240627 -> 9.4.56.v20240826 #14654

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @co63oc, @funky-eyes, @JunJieLiu51520, @Stellar1999, @wuwen5, @zrlw

## New Contributors
* @co63oc made their first contribution in https://github.com/apache/dubbo/pull/14671

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.2.16...dubbo-3.2.17

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.2.17` · 2025-03-05 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
