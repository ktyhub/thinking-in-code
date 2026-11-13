---
title: "dubbo dubbo-3.3.3"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.3"
published: "2025-01-05"
type: "release"
lang: "en"
summary: "Releates PRs: #14794, #14858, #14866, #14869, #14875, #14899, #14896, #14871, #14900, #14904, #14850, #14922, #14928, #14932, #14948, #14929, #15015"
---

# dubbo dubbo-3.3.3

## What's Changed

### Noteworthy
* Dubbo has removed dubbo-dependencies-zookeeper-curator5 and dubbo-zookeeper-spring-boot-starter dependency， The dependency of zk is only provided in dubpo-zookeeper-curator5-spring-boot-starter. Therefore, you can use dubpo-zookeeper-curator5-spring-boot-starter to replace the previous two dependencies.


### Feature
* Support read parameter names from local variable table by @oxsean in https://github.com/apache/dubbo/pull/14843
* Support parsing custom REST paths from proto files and generating @Ma… by @heliang666s in https://github.com/apache/dubbo/pull/14796
* WebSocket on Triple by @finefuture in https://github.com/apache/dubbo/pull/14390
* Support setting curator session timeout by @aofall in https://github.com/apache/dubbo/pull/14903
* Triple Rest Openapi Support by @oxsean in https://github.com/apache/dubbo/pull/14924

### Bugfix
* Fix preferred protocol support for application service discovery by @chickenlj in https://github.com/apache/dubbo/pull/14849
* Update initial mapping apps of service discovery MappingListener by @chickenlj in https://github.com/apache/dubbo/pull/14851
* Fix annotation configuration processor dependency missing by @oxsean in https://github.com/apache/dubbo/pull/14873
* Fix dead loop in onNext by @oxsean in https://github.com/apache/dubbo/pull/14917
* Fix http3 negotiation failed by @oxsean in https://github.com/apache/dubbo/pull/14901
* correctly validate service-name-mapping parameter by @aruato in https://github.com/apache/dubbo/pull/14905
* Fix DefaultRequestMappingRegistry.exists NPE when not initialized by @oxsean in https://github.com/apache/dubbo/pull/14936
* HTTP3 bugfix by @oxsean in https://github.com/apache/dubbo/pull/14955
* optimize: support http1 automatic keepalive setting by @funky-eyes in https://github.com/apache/dubbo/pull/15019
* feat: server stream supports requests without parameters by @funky-eyes in https://github.com/apache/dubbo/pull/15026

### Code Enhancement
Releates PRs: #14794, #14858, #14866, #14869, #14875, #14899, #14896, #14871, #14900, #14904, #14850, #14922, #14928, #14932, #14948, #14929, #15015

### Dependency Upgrade
* Update byte-buddy_version: 1.15.7 -> 1.15.11 #15000, #14856
* Update commons-io:commons-io: 2.17.0 -> 2.18.0 #14944
* Update grpc.version: 1.68.0 -> 1.69.0 #14957, #14989
* Update io.micrometer:micrometer-bom: 1.13.5 -> 1.13.6 #14805
* Update io.micrometer:micrometer-core: 1.13.6 -> 1.14.2 #14907, #14991
* Update io.micrometer:micrometer-tracing-bom: 1.3.5 -> 1.4.1 #14911, #14990
* Update io.opentelemetry:opentelemetry-bom: 1.43.0 -> 1.45.0 #14886, #14975
* Update io.projectreactor:reactor-core: 3.6.11 -> 3.7.1 #14912, #15001
* Update io.swagger.core.v3:swagger-annotations: 2.2.25 -> 2.2.27 #14996
* Update io.zipkin.reporter2:zipkin-reporter-bom: 3.4.2 -> 3.4.3 #14977
* Update jackson_version: 2.18.0 -> 2.18.2 #14852, #14956
* Update log4j2_version: 2.24.1 -> 2.24.3 #14942, #14997
* Update netty4_version: 4.1.114.Final -> 4.1.115.Final #14910
* Update org.apache.groovy:groovy: 4.0.23 -> 4.0.24 #14887
* Update org.asynchttpclient:async-http-client: 2.12.3 -> 2.12.4 #14995
* Update org.openjdk.nashorn:nashorn-core: 15.4 -> 15.6 #15027
* Update org.springframework.security:spring-security-bom: 5.8.15 -> 5.8.16 #14940
* Update org.webjars:webjars-locator-lite: 1.0.0 -> 1.0.1 #14999
* Update spring-6.version: 6.1.14 -> 6.2.1 #14909, #14992
* Update spring-boot-3.version: 3.3.5 -> 3.4.1 #14941, #15012
* Update tomcat.version: 8.5.100 -> 10.1.34 #14993

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @aofall, @aruato, @chenzhiguo, @chickenlj, @CrazyHZM, @daziz, @dependabot, @finefuture, @funky-eyes, @heliang666s, @lanxi0, @laywin, @ljmcr, @oxsean, @paradiseidler, @strangelookingnerd

## New Contributors
* @paradiseidler made their first contribution in https://github.com/apache/dubbo/pull/14899
* @ljmcr made their first contribution in https://github.com/apache/dubbo/pull/14896
* @aruato made their first contribution in https://github.com/apache/dubbo/pull/14905
* @strangelookingnerd made their first contribution in https://github.com/apache/dubbo/pull/14922
* @lanxi0 made their first contribution in https://github.com/apache/dubbo/pull/14948
* @chenzhiguo made their first contribution in https://github.com/apache/dubbo/pull/14935

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.2...dubbo-3.3.3

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.3` · 2025-01-05 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
