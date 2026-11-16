---
title: "dubbo dubbo-3.2.13"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.13"
version: "dubbo-3.2.13"
published: "2024-05-24"
type: "release"
lang: "en"
summary: "Fix NPE in NettyConnectionClient.toString · Fix async method call ClassCastException error when requesting go server · Fix triple stub calling grpc server fail"
---

# dubbo dubbo-3.2.13

## What's Changed

### Bugfix
* Fix NPE in NettyConnectionClient.toString by @AlbumenJ in https://github.com/apache/dubbo/pull/13934
* Fix async method call ClassCastException error when requesting go server by @FoghostCn in https://github.com/apache/dubbo/pull/13932
* Fix triple stub calling grpc server fail by @icodening in https://github.com/apache/dubbo/pull/14012
* Use ExecutorService instead of event loop for Netty connection by @hanpen24 in https://github.com/apache/dubbo/pull/13904
* Fix triple AbstractServerCallListener NPE by @caoyanan666 in https://github.com/apache/dubbo/pull/14009
* Fix Bytebuf resource leak by @aofall in https://github.com/apache/dubbo/pull/14071
* Compatible nacos service discovery, export noting suffix servicename by @wangchengming666 in https://github.com/apache/dubbo/pull/14096
* Sync BitList for all the operations by @AlbumenJ in https://github.com/apache/dubbo/pull/14057
* Fix http client by connection pool by @yuluo-yx in https://github.com/apache/dubbo/pull/14079
* Fox ReactorDubbo3TripleStub.mustache. add schema registry by @caoyanan666 in https://github.com/apache/dubbo/pull/14035
* Fix channel leakage in NettyConnectionClient.onConnected and onGoaway methods by @hanpen24 in https://github.com/apache/dubbo/pull/14100
* Fix the problem of multiple namespaces in MetadataReport by @finefuture in https://github.com/apache/dubbo/pull/13971
* Fix the oneToOne method of the ReactorServerCalls class will cause the request to hang when the result is Mono Empty by @caoyanan666 in https://github.com/apache/dubbo/pull/14121
* Fix the signature error when using reflection to access the org.springframework.core.annotation.AnnotatedElementUtils#getMergedAnnotation method by @jkoChen in https://github.com/apache/dubbo/pull/14156
* Fix triple Reactor OneToMany Handler null pointer fix and DubboFilter support by @caoyanan666 in https://github.com/apache/dubbo/pull/14125
* Fix property name security judgement by @zrlw in https://github.com/apache/dubbo/pull/14208
* Not initialize MetricsReporter if not support prometheus by @qyi71 in https://github.com/apache/dubbo/pull/14225
* Add condition -> match serviceKey in telnet command. by @kazetyan in https://github.com/apache/dubbo/pull/13869

### Code Enhancement
Releates PRs: #13901, #13968, #14005, #14039, #14064, #14099, #14159, #14133, #14135, #14172, #14166, #14227

### Dependency Upgrade
* Update bytebuddy.version: 1.14.12 -> 1.14.15 #14046, #14140, #14179
* Update ch.qos.logback:logback-core: 1.5.2 -> 1.5.6 #13899, #14110
* Update com.alibaba.fastjson2:fastjson2: 2.0.47 -> 2.0.49 #13989, #14087
* Update com.alibaba.nacos:nacos-client: 2.3.1 -> 2.3.2 #14042
* Update commons-io:commons-io: 2.15.1 -> 2.16.1 #14020, #14114
* Update commons-logging:commons-logging: 1.3.0 -> 1.3.2 #13987, #14215
* Update grpc.version: 1.62.2 -> 1.64.0 #14044, #14213
* Update io.micrometer:micrometer-bom: 1.12.3 -> 1.12.5 #13939#14086
* Update io.micrometer:micrometer-core: 1.12.3 -> 1.13.0 #13940, #14112, #14219
* Update io.micrometer:micrometer-tracing-bom: 1.2.3 -> 1.2.5 #13938, #14116
* Update io.projectreactor:reactor-core: 3.6.2 -> 3.6.6 #13941, #14111, #14212
* Update jackson_version: 2.16.1 -> 2.17.1 #13896, #13936, #14153
* Update log4j2_version: 2.23.0 -> 2.23.1 #13897
* Update net.bytebuddy:byte-buddy: 1.14.12 -> 1.14.15 #14018, #14142, #14184
* Update netty4_version: 4.1.107.Final -> 4.1.109.Final #13988, #14108
* Update org.apache.commons:commons-compress: 1.26.0 -> 1.26.1 #13900
* Update org.apache.tomcat.embed:tomcat-embed-core: 8.5.99 -> 8.5.100 #14019
* Update org.apache.zookeeper:zookeeper: 3.8.3 -> 3.8.4 #13930
* Update org.aspectj:aspectjweaver: 1.9.21.1 -> 1.9.22.1 #13937, #13991, #14181
* Update org.awaitility:awaitility: 4.2.0 -> 4.2.1 #13935
* Update org.springframework.security:spring-security-bom: 5.8.10 -> 5.8.12 #13993, #14117
* Update spring_version: 5.3.25 -> 5.3.35 #14041, #14109, #14211
* Update gson: 2.10.1 -> 2.11.0 #14224
* Update micrometer: 1.12.5 -> 1.13.0 #14228

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@aamingaa, @AlbumenJ, @aofall, @caoyanan666, @Chenjp, @CrazyHZM, @dependabot, @finefuture, @FoghostCn, @hanpen24, @heliang666s, @icodening, @jkoChen, @jlerbsc, @kaiyaok2, @kazetyan, @qyi71, @songxiaosheng, @Stellar1999, @walkinggo, @wangchengming666, @wcy666103, @yuluo-yx, @zrlw

## New Contributors
* @jlerbsc made their first contribution in https://github.com/apache/dubbo/pull/14005
* @hanpen24 made their first contribution in https://github.com/apache/dubbo/pull/13904
* @caoyanan666 made their first contribution in https://github.com/apache/dubbo/pull/14009
* @heliang666s made their first contribution in https://github.com/apache/dubbo/pull/14039
* @Chenjp made their first contribution in https://github.com/apache/dubbo/pull/14064
* @jkoChen made their first contribution in https://github.com/apache/dubbo/pull/14156
* @walkinggo made their first contribution in https://github.com/apache/dubbo/pull/14166
* @qyi71 made their first contribution in https://github.com/apache/dubbo/pull/14225

**Full Changelog**: https://github.com/apache/dubbo/compare/3.2.12...dubbo-3.2.13

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.2.13` · 2024-05-24 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
