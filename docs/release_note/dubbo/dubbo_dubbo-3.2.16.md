---
title: "dubbo dubbo-3.2.16"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.16"
version: "dubbo-3.2.16"
published: "2024-09-07"
type: "release"
lang: "en"
---

# dubbo dubbo-3.2.16

## What's Changed

### Bugfix
* optimize: rest protocol connection default keepalive by @funky-eyes in https://github.com/apache/dubbo/pull/14540
* optimize: the handling logic of PathAndInvokerMapper by @funky-eyes in https://github.com/apache/dubbo/pull/14534
* optimize: rest protocol connection default keepalive by @funky-eyes in https://github.com/apache/dubbo/pull/14543
* feat: rest protocol support keep-alive timeout header config by @funky-eyes in https://github.com/apache/dubbo/pull/14560
* Fix NettyCodecAdapter decoder memory leak by @JoeCqupt in https://github.com/apache/dubbo/pull/14538
* Fix disable Curator EnsembleTracker not support zk 3.4 by @aofall in https://github.com/apache/dubbo/pull/14597
* Fix LRUCache.putIfAbsent concurrent issue by @AlbumenJ in https://github.com/apache/dubbo/pull/14615
* Fix BraveAutoConfiguration.java bean configuration issue by @he-jialin in https://github.com/apache/dubbo/pull/14631
* Fix 3.2 - Close stream when channel was inactive by @finefuture in https://github.com/apache/dubbo/pull/14643

### Dependency Upgrade
* Update bytebuddy.version: 1.14.18 -> 1.15.0 #14553, #14581
* Update ch.qos.logback:logback-core: 1.5.6 -> 1.5.7 #14587
* Update com.alibaba.nacos:nacos-client: 2.4.0 -> 2.4.1 #14556
* Update com.ctrip.framework.apollo:apollo-client: 2.2.0 -> 2.3.0 #14547
* Update com.ctrip.framework.apollo:apollo-mockserver: 2.2.0 -> 2.3.0 #14557
* Update commons-logging:commons-logging: 1.3.3 -> 1.3.4 #14592
* Update grpc.version: 1.65.1 -> 1.66.0 #14521
* Update io.micrometer:micrometer-bom: 1.13.2 -> 1.13.3 #14548
* Update io.micrometer:micrometer-core: 1.13.2 -> 1.13.3 #14584
* Update io.micrometer:micrometer-tracing-bom: 1.3.2 -> 1.3.3 #14589
* Update io.opentelemetry:opentelemetry-bom: 1.40.0 -> 1.41.0 #14524
* Update io.projectreactor:reactor-core: 3.6.8 -> 3.6.9 #14552
* Update maven-deploy-plugin: 2.8.2 -> 3.1.2 #14495
* Update net.bytebuddy:byte-buddy: 1.14.18 -> 1.15.1 #14612
* Update org.apache.commons:commons-compress: 1.26.2 -> 1.27.1 #14526, #14591
* Update org.apache.commons:commons-lang3: 3.15.0 -> 3.17.0 #14525, #14611
* Update org.springframework.security:spring-security-bom: 5.8.13 -> 5.8.14 #14590
* Update org.xerial.snappy:snappy-java: 1.1.10.5 -> 1.1.10.6 #14523
* Update org.yaml:snakeyaml: 2.2 -> 2.3 #14606
* Update spring_version: 5.3.37 -> 5.3.39 #14549

## New Contributors
* @StudentGu made their first contribution in https://github.com/apache/dubbo/pull/14503
* @he-jialin made their first contribution in https://github.com/apache/dubbo/pull/14631

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.2.15...dubbo-3.2.16

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.2.16` · 2024-09-07 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
