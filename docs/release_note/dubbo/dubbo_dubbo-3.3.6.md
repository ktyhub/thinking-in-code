---
title: "dubbo dubbo-3.3.6"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.6"
published: "2025-10-17"
type: "release"
lang: "en"
summary: "Apache Dubbo 3.3.6 introduces several important enhancements and stability improvements. This release adds new reactive and routing features, strengthens HTTP/2 support, and enhances configuration and metrics…"
---

# dubbo dubbo-3.3.6

## Highlights
Apache Dubbo 3.3.6 introduces several important enhancements and stability improvements.
This release adds new reactive and routing features, strengthens HTTP/2 support, and enhances configuration and metrics capabilities.
It also includes a range of bug fixes and dependency upgrades to improve overall reliability and security.

---

## What's Changed

### Feature
* Add Affinity Router by @wcy666103 in https://github.com/apache/dubbo/pull/14787
* Support for Mutiny Reactive by @MoritzArena in https://github.com/apache/dubbo/pull/15537
* Add dubbo-spring6-security plugin by splitting dubbo-spring-security by @zrlw in https://github.com/apache/dubbo/pull/15494
* Add HTTP/2 server connection preface process by @zrlw in https://github.com/apache/dubbo/pull/15535
* Add http2 client connection preface process by @zrlw in https://github.com/apache/dubbo/pull/15436
* Support Preferred Network Interface via Spring Environment and Fix Early Host Resolution by @fu-cheng1 in https://github.com/apache/dubbo/pull/15604
* Add support for Zookeeper-based config center and metadata reporting in demo by @lingyufei in https://github.com/apache/dubbo/pull/15646
* Support method-level TPS in `DefaultTPSLimiter` by @lingyufei in https://github.com/apache/dubbo/pull/15679

### Bugfix
* Fix nan problem by @songxiaosheng in https://github.com/apache/dubbo/pull/15586
* Fix concurrency issue of ConsumerConfigurationListener by @zrlw in https://github.com/apache/dubbo/pull/15707
* Fixed issue with unsupported `message.proto` file name by @nichanghao in https://github.com/apache/dubbo/pull/15655
* Fix uninitialized non-static final fields (potential NPE) in `dubbo-remoting` by @zrlw in https://github.com/apache/dubbo/pull/15602
* Fix mistaken deletion of reconnect interval by @oxsean in https://github.com/apache/dubbo/pull/15613
* Fix `RpcServiceContext.localInvoke` type inconsistency by @huangtaojava in https://github.com/apache/dubbo/pull/15536
* Fix MergedAnnotation null issue in Spring 5.x by @jkoChen in https://github.com/apache/dubbo/pull/15581
* Fix `StreamObserver` call sequence issue (onCompleted without onNext) by @RainYuY in https://github.com/apache/dubbo/pull/15466
* Fix NetUtils to ignore link-local addresses by @cyclinder in https://github.com/apache/dubbo/pull/14793
* Fix issue where `WrapperTest` failed due to missing parent method names by @Hussain-Safwan in https://github.com/apache/dubbo/pull/15683
* Fix Zookeeper download URL and timeout handling by @zrlw in https://github.com/apache/dubbo/pull/15697
* Fix Mutiny race condition issue by @MoritzArena in https://github.com/apache/dubbo/pull/15662

### Code Enhancement
* End “read/write” combination early to improve performance by @frozenNoob in https://github.com/apache/dubbo/pull/15666
* Remove redundant tests and deprecated author tags by @RainYuY in https://github.com/apache/dubbo/pull/15654
* Add multi-JDK testing to PR workflow by @WangzJi in https://github.com/apache/dubbo/pull/15542
* Cache marked type to optimize SerializeSecurityConfigurator by @zrlw in https://github.com/apache/dubbo/pull/15500
* Replace ConcurrentHashMap#computeIfAbsent to avoid potential deadlock by @zrlw in https://github.com/apache/dubbo/pull/15456
* Improve test stability (e.g., AbortPolicyWithReportTest, MetricsSupportTest) by @zrlw
* Cleanup redundant version declarations and deprecated mirror settings by @zrlw in https://github.com/apache/dubbo/pull/15667
* Optimize TriRpcStatus by adding HTTP status code to its description by @zrlw in https://github.com/apache/dubbo/pull/15708

### Dependency Upgrade
* grpc.version: 1.72.0 → 1.73.0 (#15418, #15550)
* protobuf-java: 3.25.5 → 3.25.8 (#15424)
* netty4_version: 4.2.1.Final → 4.2.2.Final (#15443)
* io.micrometer:micrometer-bom: 1.15.0 → 1.15.1 (#15462)
* io.micrometer:micrometer-tracing-bom: 1.5.0 → 1.5.1 (#15461)
* org.apache.groovy:groovy: 4.0.26 → 4.0.27 (#15419)
* org.springframework:spring-web: 6.2.7 → 6.2.8 (#15458)
* org.apache.dubbo:hessian-lite: 4.0.3 → 4.0.4 (#15684)
* org.apache.commons:commons-exec: 1.4.0 → 1.5.0 (#15408)
* junit_platform_version: 1.12.2 → 1.13.1 (#15440)
* bcprov: jdk15on → jdk18on (#15434)

### Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @zrlw, @RainYuY, @heliang666s, @oxsean, @wcy666103, @frozenNoob, @lingyufei, @MoritzArena, @fu-cheng1, @nichanghao, @songxiaosheng, @huangtaojava, @Hussain-Safwan, @cyclinder, @co63oc, @WangzJi, @DustinQiao, @fantiq, @jkoChen, @AROP-REPLICATION

### New Contributors
* @MoritzArena made their first contribution in https://github.com/apache/dubbo/pull/15537
* @lingyufei made their first contribution in https://github.com/apache/dubbo/pull/15646
* @Hussain-Safwan made their first contribution in https://github.com/apache/dubbo/pull/15683
* @frozenNoob made their first contribution in https://github.com/apache/dubbo/pull/15666
* @fu-cheng1 made their first contribution in https://github.com/apache/dubbo/pull/15604

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.5...dubbo-3.3.6

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.6` · 2025-10-17 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
