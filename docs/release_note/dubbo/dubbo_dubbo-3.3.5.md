---
title: "dubbo dubbo-3.3.5"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.5"
published: "2025-05-29"
type: "release"
lang: "en"
summary: "Releates PRs: #15136, #15203, #15208, #15205, #15222, #15231, #15241, #15272, #15236, #15327, #15264, #15325, #15307, #15324, #15289, #15258, #15338, #15378, #15379, #15384, #15394"
---

# dubbo dubbo-3.3.5

## What's Changed
### Feature
* autoconfiguration virtual-thread-pool by @heliang666s in https://github.com/apache/dubbo/pull/15220
* [3.3] Enable server socket reuseAddress option before binding by @zrlw in https://github.com/apache/dubbo/pull/15239
* Enhance Server-Sent Events support by @oxsean in https://github.com/apache/dubbo/pull/15387

### Bugfix
* [3.3] Removed mGroup from NamedThreadFactory by @zrlw in https://github.com/apache/dubbo/pull/15202
* Fix concurrency problem in ThreadlessExecutor by @finefuture in https://github.com/apache/dubbo/pull/15210
* Fix repeat load registryFactory by @Stellar1999 in https://github.com/apache/dubbo/pull/15221
* [3.3] Retry connect to provider server by catching ClosedChannelException by @zrlw in https://github.com/apache/dubbo/pull/15209
* fix provider get baggage error by @songxiaosheng in https://github.com/apache/dubbo/pull/15257
* [3.3] Fixed concurrent issue of ClassGeneratorTest by @zrlw in https://github.com/apache/dubbo/pull/15261
* Fix triple protocol for native image by @CrazyHZM in https://github.com/apache/dubbo/pull/15115
* Fix initialization problem when generateing wrapper object (#15276) by @itaiit in https://github.com/apache/dubbo/pull/15288
* Fix(MetricsEventBus): fix some bugs by @PengJingzhao in https://github.com/apache/dubbo/pull/15296
* Support serialize tri exception by default by @AlbumenJ in https://github.com/apache/dubbo/pull/15353
* Remove duplicated invokers in registry notification by @AlbumenJ in https://github.com/apache/dubbo/pull/15060
* Fix/bytes encoder cast exception by @songxiaosheng in https://github.com/apache/dubbo/pull/15262
* Fix ClassCastException caused by overly broad type check in Dubbo tracing integration with Spring WebFlux. by @heliang666s in https://github.com/apache/dubbo/pull/15371

### Code Enhancement
Releates PRs: #15136, #15203, #15208, #15205, #15222, #15231, #15241, #15272, #15236, #15327, #15264, #15325, #15307, #15324, #15289, #15258, #15338, #15378, #15379, #15384, #15394

### Dependency Upgrade
* Update byte-buddy_version: 1.17.1 -> 1.17.5 #15199, #15269, #15285
* Update com.alibaba.nacos:nacos-client: 2.5.0 -> 2.5.1 #15252
* Update com.google.code.gson:gson: 2.12.1 -> 2.13.1 #15345
* Update commons-io:commons-io: 2.18.0 -> 2.19.0 #15319
* Update curator5_version: 5.7.1 -> 5.8.0 #15229, #15253
* Update grpc.version: 1.70.0 -> 1.72.0 #15224, #15331
* Update io.micrometer:micrometer-bom: 1.14.4 -> 1.15.0 #15246, #15314, #15399
* Update io.micrometer:micrometer-core: 1.14.4 -> 1.15.0 #15248, #15312, #15401
* Update io.micrometer:micrometer-tracing-bom: 1.4.3 -> 1.5.0 #15251, #15313, #15403
* Update io.netty.incubator:netty-incubator-codec-http3: 0.0.28.Final -> 0.0.29.Final #15284
* Update io.opentelemetry:opentelemetry-bom: 1.47.0 -> 1.50.0 #15228, #15298, #15376
* Update io.projectreactor:reactor-core: 3.7.3 -> 3.7.6 #15250, #15330, #15402
* Update io.swagger.core.v3:swagger-annotations: 2.2.28 -> 2.2.32 #15256, #15317, #15400
* Update io.zipkin.zipkin2:zipkin: 3.5.0 -> 3.5.1 #15343
* Update jackson_version: 2.18.2 -> 2.19.0 #15198, #15342
* Update netty4_version: 4.1.118.Final -> 4.2.1.Final #15196, #15297, #15375
* Update org.apache.groovy:groovy: 4.0.25 -> 4.0.26 #15195
* Update org.aspectj:aspectjweaver: 1.9.22.1 -> 1.9.24 #15244, #15311
* Update org.webjars:swagger-ui: 5.18.3 -> 5.22.0 #15197, #15249, #15300, #15344, #15409
* Update protobuf-java_version: 3.25.5 -> 3.25.7 #15374
* Update spring-6.version: 6.2.3 -> 6.2.7 #15245, #15268, #15329, #15397
* Update spring-boot-3.version: 3.4.3 -> 3.5.0 #15270, #15341, #15407
* Update swagger_version: 1.6.15 -> 1.6.16 #15398
* Update tomcat.version: 8.5.100 -> 10.1.41 #15227, #15310, #15396

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@Akshat1sharma321, @AlbumenJ, @ankitshokeen, @cnzakii, @CrazyHZM, @finefuture, @fu-shenqi, @heliang666s, @itaiit, @Lubov66, @oxsean, @PengJingzhao, @songxiaosheng, @Stellar1999, @wcy666103, @zrlw

## New Contributors
* @Lubov66 made their first contribution in https://github.com/apache/dubbo/pull/15222
* @itaiit made their first contribution in https://github.com/apache/dubbo/pull/15288
* @PengJingzhao made their first contribution in https://github.com/apache/dubbo/pull/15296
* @fu-shenqi made their first contribution in https://github.com/apache/dubbo/pull/15324
* @ankitshokeen made their first contribution in https://github.com/apache/dubbo/pull/15338
* @Akshat1sharma321 made their first contribution in https://github.com/apache/dubbo/pull/15394

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.4...dubbo-3.3.5

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.5` · 2025-05-29 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
