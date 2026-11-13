---
title: "Sentinel 1.8.7"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.7"
published: "2023-12-29"
type: "patch"
lang: "en"
summary: "Thanks for all contributors: @sczyh30, @wuwen5, @xiaozzzi, @EzrealOf, @wilsonwu, @kirklin, @garroshh, @JosephZhang3, @LiYangSir, @Yan1025, @wenshao, @pandaapo, @frank-zsy, @z521598, @LearningGp, @robberphex, @clara0,…"
---

# Sentinel 1.8.7

## Features / Enhancements

- Add default circuit breaker rule support (#2232)
- Update metrics name for better monitor selection in JMX MetricBeanWriter extension (#2976)
- Refine throttling control behavior of FlowRule: improve accuracy and support maxQps > 1000 (#2951)
- Add SSL support for sentinel-datasource-redis (#3045)
- Add basic implementation of token bucket for flow-control (#3106)
- Remove the requirement of carrying batchCount and args in entry.exit() (#3114)
- Make default JUL-based logging asynchronous (#3136)
- Make all ThreadPool static final (#3243)
- Add Prometheus exporter module for Sentinel metrics (#3173)
- Resource rules (flow/degrade/param/authority) support regex matching (#3251)

## Bug Fixes

- Fix NPE bug in LogSlot#entry when recording rule ID (#2980)
- Fix the bug that error occurs in JMX metrics exporter when resource name contains '*' (#2992)
- Fix thread-blocked problem of EtcdDataSource (#2991)
- Fix potential connection leak bug when closing NacosDataSource (#2962)
- Fix order dependent tests in SofaRpcFallbackRegistryTest (#3282)

## Dashboard

- Add simple Dockerfile for Sentinel dashboard (#2970)

## Dependencies

- Update snakeyaml to 1.32 in sentinel-cluster/sentinel-cluster-server-envoy-rls module (#2921)
- Update dubbo to 2.7.18 in sentinel-demo/sentinel-demo-apache-dubbo (#2923)
- Update protobuf & gRPC version of adapter modules to fix macOS aarch64 compile error (#2993)
- Upgrade curator-recipes to 5.1.0 to fix API change for ZooKeeper data-source (#2963)

Thanks for all contributors: @sczyh30, @wuwen5, @xiaozzzi, @EzrealOf, @wilsonwu, @kirklin, @garroshh, @JosephZhang3, @LiYangSir, @Yan1025, @wenshao, @pandaapo, @frank-zsy, @z521598, @LearningGp, @robberphex, @clara0, @karl-sy, @SaaiVenkat

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.7` · 2023-12-29 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
