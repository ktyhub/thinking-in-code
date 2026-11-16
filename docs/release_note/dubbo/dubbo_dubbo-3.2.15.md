---
title: "dubbo dubbo-3.2.15"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.15"
version: "dubbo-3.2.15"
published: "2024-08-05"
type: "release"
lang: "en"
summary: "Update 3.3 scheduled workflow · fix(3.2): injvm invoker throws ClassCastException · Fix metrics unable to retrieve lazy inited executor status"
---

# dubbo dubbo-3.2.15

## What's Changed
* Update 3.3 scheduled workflow by @AlbumenJ in https://github.com/apache/dubbo/pull/14322
* fix(3.2): injvm invoker throws ClassCastException by @caoyanan666 in https://github.com/apache/dubbo/pull/14346
* Fix metrics unable to retrieve lazy inited executor status by @AlbumenJ in https://github.com/apache/dubbo/pull/14348
* fix NPE in RegistryProtocol.ExporterChangeableWrapper#unregister when shutting down application by @binfeiruci in https://github.com/apache/dubbo/pull/14389
* Sync spring init actions to prevent parallel init by @AlbumenJ in https://github.com/apache/dubbo/pull/14371
* 14372 fix multi registries by @mrwangyin in https://github.com/apache/dubbo/pull/14381
* Fix null key in QoS by @AlbumenJ in https://github.com/apache/dubbo/pull/14419
* fix: fix AbstractServiceDiscovery.update when doRegister first failed by @conghuhu in https://github.com/apache/dubbo/pull/14427
* fix: Resolved issue where ServiceInfo with null protocol was blocking… by @QingJuBaiTang in https://github.com/apache/dubbo/pull/14421
* fix AbortPolicyWithReport may repeatedly jstack when threadPool is exhausted by @code4china in https://github.com/apache/dubbo/pull/14468
* NPE will occur when consumer lazy init and the consumer thread contextClassLoader is null by @Xwiam in https://github.com/apache/dubbo/pull/14478

## Dependency Updates
* Update bytebuddy.version: 1.14.17 -> 1.14.18 #14463
* Update com.alibaba.fastjson2:fastjson2: 2.0.51 -> 2.0.52 #14435
* Update com.alibaba.nacos:nacos-client: 2.3.2 -> 2.4.0 #14385, #14461
* Update commons-logging:commons-logging: 1.3.2 -> 1.3.3 #14404
* Update grpc.version: 1.64.0 -> 1.65.1 #14382, #14433
* Update io.micrometer:micrometer-bom: 1.13.0 -> 1.13.2 #14331, #14440
* Update io.micrometer:micrometer-core: 1.13.0 -> 1.13.2 #14327, #14438
* Update io.micrometer:micrometer-tracing-bom: 1.3.0 -> 1.3.2 #14328, #14437
* Update io.opentelemetry:opentelemetry-bom: 1.39.0 -> 1.40.0 #14402
* Update io.projectreactor:reactor-core: 3.6.6 -> 3.6.8 #14333, #14434
* Update jackson_version: 2.17.1 -> 2.17.2 #14400
* Update jetty_version: 9.4.54.v20240208 -> 9.4.55.v20240627 #14401
* Update net.bytebuddy:byte-buddy: 1.14.17 -> 1.14.18 #14436
* Update netty4_version: 4.1.110.Final -> 4.1.112.Final #14324, #14459
* Update org.apache.commons:commons-lang3: 3.14.0 -> 3.15.0 #14462
* Update org.eclipse.jetty:jetty-maven-plugin: 9.4.54.v20240208 -> 9.4.55.v20240627 #14403
* Update org.springframework.security:spring-security-bom: 5.8.12 -> 5.8.13 #14362
* Update org.testcontainers:testcontainers: 1.19.8 -> 1.20.0 #14460
* Update protobuf-java_version: 3.25.3 -> 3.25.4 #14476
* Update spring_version: 5.3.36 -> 5.3.37 #14330

## New Contributors
* @binfeiruci made their first contribution in https://github.com/apache/dubbo/pull/14389
* @mrwangyin made their first contribution in https://github.com/apache/dubbo/pull/14381
* @QingJuBaiTang made their first contribution in https://github.com/apache/dubbo/pull/14421
* @code4china made their first contribution in https://github.com/apache/dubbo/pull/14468
* @Xwiam made their first contribution in https://github.com/apache/dubbo/pull/14478

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.2.14...dubbo-3.2.15

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.2.15` · 2024-08-05 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
