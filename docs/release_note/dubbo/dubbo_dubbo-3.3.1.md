---
title: "dubbo dubbo-3.3.1"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.1"
published: "2024-10-02"
type: "release"
lang: "en"
summary: "Releates PRs: #14671, #14705"
---

# dubbo dubbo-3.3.1

## What's Changed

### Feature
* Support single file mode in dubbo-maven-plugin by @finefuture in https://github.com/apache/dubbo/pull/14723
* Support configuration of disallowed content-types by @oxsean in https://github.com/apache/dubbo/pull/14726
* Returns a matching http status code based on the rest mappings by @oxsean in https://github.com/apache/dubbo/pull/14714
* Http2 sse support by @oxsean in https://github.com/apache/dubbo/pull/14673
* Added support for configuring Tomcat HTTP2 max stream size in Spring boot by @oxsean in https://github.com/apache/dubbo/pull/14702
* Add Support to bridge Spring Boot Actuator to QoS by @JinQian1024 in https://github.com/apache/dubbo/pull/14596

### Bugfix
* Fix tcp connection window size split from stream connection window size by @JunJieLiu51520 in https://github.com/apache/dubbo/pull/14670
* Fix native image for proxy by @CrazyHZM in https://github.com/apache/dubbo/pull/14724
* Fix triple client connection shareing race condition by @chickenlj in https://github.com/apache/dubbo/pull/14718
* Disable check when create MetadataService invoker to prevent memory leak by @AlbumenJ in https://github.com/apache/dubbo/pull/14732
* Fix safeLock not run when interrupt & Fix partial notification being cancelled in ServiceInstancesChangedListener by @AlbumenJ in https://github.com/apache/dubbo/pull/14730
* Fix MetadataServiceV2 unable to being destroyed by @AlbumenJ in https://github.com/apache/dubbo/pull/14731
* Fix memory leak in HttpPostRequestDecoder by @oxsean in https://github.com/apache/dubbo/pull/14741
* Fix SpringRestToolKit getBean param mistake by @oxsean in https://github.com/apache/dubbo/pull/14742

### Code Enhancement
Releates PRs: #14671, #14705

### Dependency Upgrade
* Update bytebuddy.version: 1.15.0 -> 1.15.3 #14736 #14648
* Update ch.qos.logback:logback-core: 1.5.7 -> 1.5.8 #14653
* Update com.alibaba.fastjson2:fastjson2: 2.0.52 -> 2.0.53 #14707
* Update com.alibaba.nacos:nacos-client: 2.4.1 -> 2.4.2 #14655
* Update com.github.spullara.mustache.java:compiler: 0.9.10 -> 0.9.14 #14693
* Update com.google.protobuf:protobuf-java: 3.25.4 -> 3.25.5 #14704
* Update commons-codec:commons-codec: 1.16.0 -> 1.17.1 #14711
* Update commons-io:commons-io: 2.16.1 -> 2.17.0 #14713
* Update grpc.version: 1.66.0 -> 1.68.0 #14706
* Update io.micrometer:micrometer-bom: 1.13.3 -> 1.13.4 #14681
* Update io.micrometer:micrometer-core: 1.13.3 -> 1.13.4 #14679
* Update io.micrometer:micrometer-tracing-bom: 1.3.3 -> 1.3.4 #14682, #14739
* Update io.opentelemetry:opentelemetry-bom: 1.41.0 -> 1.42.1 #14651, #14676
* Update io.projectreactor:reactor-core: 3.6.9 -> 3.6.10 #14680
* Update io.zipkin.reporter2:zipkin-reporter-bom: 3.4.0 -> 3.4.2 #14678, #14710, #14734
* Update jackson_version: 2.17.2 -> 2.18.0 #14738
* Update jakarta.xml.bind:jakarta.xml.bind-api: 4.0.1 -> 4.0.2 #14690
* Update jetty_version: 9.4.55.v20240627 -> 9.4.56.v20240826 #14650
* Update log4j2_version: 2.23.1 -> 2.24.1 #14649, #14735
* Update netty4_version: 4.1.112.Final -> 4.1.113.Final #14652
* Update org.apache.groovy:groovy: 4.0.21 -> 4.0.23 #14709
* Update org.awaitility:awaitility: 4.2.0 -> 4.2.2 #14708
* Update org.glassfish.jaxb:jaxb-runtime: 2.3.3-b02 -> 2.4.0-b180830.0438 #14689
* Update org.springframework.cloud:spring-cloud-openfeign-core: 3.1.5 -> 3.1.9 #14687
* Update org.xerial.snappy:snappy-java: 1.1.10.6 -> 1.1.10.7 #14683
* Update seata.version: 1.6.1 -> 1.8.0 #14692
* Update sentinel.version: 1.8.6 -> 1.8.8 #14688
* Update spring.version: 6.0.11 -> 6.1.13 #14691

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @chickenlj, @co63oc, @CrazyHZM, @finefuture, @funky-eyes, @JinQian1024, @JunJieLiu51520, @oxsean

## New Contributors
* @JunJieLiu51520 made their first contribution in https://github.com/apache/dubbo/pull/14664
* @co63oc made their first contribution in https://github.com/apache/dubbo/pull/14671
* @JinQian1024 made their first contribution in https://github.com/apache/dubbo/pull/14596

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.0...dubbo-3.3.1

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.1` · 2024-10-02 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
