---
title: "dubbo-go v3.3.0"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.3.0"
published: "2025-03-22"
type: "minor"
lang: "en"
summary: "This release introduces multiple bug fixes, new features, and code enhancements to improve the stability and functionality of Apache Dubbo-Go. Key improvements include resolving various service discovery and…"
---

# dubbo-go v3.3.0

## Summary

This release introduces multiple bug fixes, new features, and code enhancements to improve the stability and functionality of Apache Dubbo-Go. Key improvements include resolving various service discovery and registry-related issues, addressing memory leaks, and enhancing the error handling and stability of the underlying communication library. Additionally, new features such as script-based routing, improved Java compatibility, Triple protocol keepalive, and support for Protobuf-based MetadataService have been implemented.

### Bug Fixes

- Resolved initialization of the correct OTEL-GRPC exporter. [#2666](https://github.com/apache/dubbo-go/pull/2666) [#2679](https://github.com/apache/dubbo-go/pull/2679)
- Resolved test case inconsistencies. [#2660](https://github.com/apache/dubbo-go/pull/2660)
- Resolved makezero bug. [#2682](https://github.com/apache/dubbo-go/pull/2682)
- Resolved nacos service discovery issues. [#2691](https://github.com/apache/dubbo-go/pull/2691) [#2694](https://github.com/apache/dubbo-go/pull/2694)
- Corrected protoc-gen-go-triple path. [#2690](https://github.com/apache/dubbo-go/pull/2690)
- Resolved segmentation fault due to a nil backupCodec. [#2698](https://github.com/apache/dubbo-go/pull/2698)
- Resolved zookeeper mapping key issues. [#2711](https://github.com/apache/dubbo-go/pull/2711)
- Resolved issues with nacos registry '*' subscription. [#2713](https://github.com/apache/dubbo-go/pull/2713)
- Resolved nacos service discovery not retrieving all service names. [#2715](https://github.com/apache/dubbo-go/pull/2715)
- Resolved potential deadlock scenarios. [#2716](https://github.com/apache/dubbo-go/pull/2716)
- Resolved service disconnection and configuration invalidation issues. [#2717](https://github.com/apache/dubbo-go/pull/2717)
- Implemented error handling for triple handler using codeUnimplemented. [#2719](https://github.com/apache/dubbo-go/pull/2719)
- Resolved router rule parsing log errors. [#2720](https://github.com/apache/dubbo-go/pull/2720)
- Resolved memory leak issues by setting baseinvoker's URL to nil. [#2726](https://github.com/apache/dubbo-go/pull/2726)
- Resolved incorrect CallClientStream result handling. [#2732](https://github.com/apache/dubbo-go/pull/2732)
- Resolved slice initialization length issue. [#2734](https://github.com/apache/dubbo-go/pull/2734)
- Improved logging of file names, function names, and line numbers. [#2744](https://github.com/apache/dubbo-go/pull/2744)
- Resolved automatic camel case conversion in HTTP proxy requests. [#2746](https://github.com/apache/dubbo-go/pull/2746)
- Resolved issues reported by golangci-lint. [#2754](https://github.com/apache/dubbo-go/pull/2754)
- Resolved incorrect metric type for dubbo_registry_directory. [#2766](https://github.com/apache/dubbo-go/pull/2766)
- Resolved panic in findMappedServices. [#2768](https://github.com/apache/dubbo-go/pull/2768)
- Ensured thread-safe ListenerSet usage in CacheListener. [#2769](https://github.com/apache/dubbo-go/pull/2769)
- Improved subscription behavior to wait for register completion or timeout. [#2775](https://github.com/apache/dubbo-go/pull/2775)
- Resolved rc.id being always nil. [#2778](https://github.com/apache/dubbo-go/pull/2778)
- Resolved issue where the same address could not distinguish different registry centers. [#2784](https://github.com/apache/dubbo-go/pull/2784)
- Removed unnecessary setdeadline usage. [#2785](https://github.com/apache/dubbo-go/pull/2785)
- Resolved various problematic error returns. [#2791](https://github.com/apache/dubbo-go/pull/2791)
- Resolved additional memory leak issues. [#2792](https://github.com/apache/dubbo-go/pull/2792)
- Resolved some inaccurate comments. [#2793](https://github.com/apache/dubbo-go/pull/2793)
- Fixed data race in ReadMessage(). [getty#123](https://github.com/apache/dubbo-getty/pull/123)
- Fixed memory leak issue caused by slice interception. [#hessian2/374](https://github.com/apache/dubbo-go-hessian2/pull/374)
- Resolved URL parsing panic and improve error handling in dubbogo-cli for ZooKeeper. [2795](https://github.com/apache/dubbo-go/pull/2795)

### New Features

- Added script-based routing functionality. [#2669](https://github.com/apache/dubbo-go/pull/2669)
- Introduced support for conditional routing with multiple destinations. [#2685](https://github.com/apache/dubbo-go/pull/2685)
- Implemented new conditional rules. [#2686](https://github.com/apache/dubbo-go/pull/2686)
- Enhanced Java interoperability. [#2687](https://github.com/apache/dubbo-go/pull/2687)
- Added Protobuf-based MetadataService support. [#2723](https://github.com/apache/dubbo-go/pull/2723)
- Introduced keepalive configuration for triple protocol. [#2757](https://github.com/apache/dubbo-go/pull/2757)
- Enhanced nacos registry with multi-category subscription support. [#2783](https://github.com/apache/dubbo-go/pull/2783)
- Added triple protocol keepalive config. [#triple87](https://github.com/dubbogo/triple/pull/87)
- Added triple protocol connection pool. [#triple91](https://github.com/dubbogo/triple/pull/91)

### Code Enhancements

- Added unit tests for metadata. [#2665](https://github.com/apache/dubbo-go/pull/2665)
- Improved code comments. [#2668](https://github.com/apache/dubbo-go/pull/2668)
- Renamed method `WithClientCheck` to `WithClientNoCheck`. [#2680](https://github.com/apache/dubbo-go/pull/2680)
- Optimized Nacos endpoint handling. [#2692](https://github.com/apache/dubbo-go/pull/2692)
- Updated `UseAsMetaReport` and `UseAsConfigCenter` to use string values to prevent overrides. [#2693](https://github.com/apache/dubbo-go/pull/2693)
- Updated condition rule sorting logic. [#2688](https://github.com/apache/dubbo-go/pull/2688)
- Differentiated business errors from RPC wire errors. [#2712](https://github.com/apache/dubbo-go/pull/2712)
- Standardized timeout unit to milliseconds in the Dubbo protocol. [#2737](https://github.com/apache/dubbo-go/pull/2737)
- Move internal into dubbo-go-samples repo. [2794](https://github.com/apache/dubbo-go/pull/2794)
- Limited reconnect attempts and duration. [getty#117](https://github.com/apache/dubbo-getty/pull/123)


### Contributors

Special thanks to all contributors for their efforts in improving Apache Dubbo-Go:
@1kasa
@AlbumenJ
@AlexStocks
@alingse
@ALLen442
@baerwang
@chickenlj
@cuishuang
@FinalT
@FoghostCn
@gexincoding
@knowmost
@linfeip
@marsevilspirit
@Nexusrex18
@No-SilverBullet
@SHA-4096
@ShawnJeffersonWang
@snowLeopard331
@solisamicus
@wcy666103
@YarBor
@yumosx

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.3.0` · 2025-03-22 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
