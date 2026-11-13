---
title: "Sentinel 2.0.0-alpha"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "2.0.0-alpha"
published: "2023-02-28"
type: "pre"
lang: "en"
summary: "This is the first preview version of nouveau Sentinel 2.0, bringing the building blocks and basic implementation of traffic routing and load balancing."
---

# Sentinel 2.0.0-alpha

This is the first preview version of nouveau Sentinel 2.0, bringing the building blocks and basic implementation of traffic routing and load balancing.

## Features / Enhancements

* Add building blocks and basic implementation of traffic routing and load balancing ([#3024](https://github.com/alibaba/Sentinel/pull/3024))
* Add data-source extension for OpenSergo fault-tolerance spec ([#2842](https://github.com/alibaba/Sentinel/pull/2842))
* Add default circuit breaker rule support ([#2232](https://github.com/alibaba/Sentinel/pull/2232))
* Refine throttling control behavior of FlowRule: improve accuracy and support maxQps > 1000 ([#2951](https://github.com/alibaba/Sentinel/pull/2951))
* Update metrics name for better monitor selection in JMX MetricBeanWriter extension ([#2976](https://github.com/alibaba/Sentinel/pull/2976))

## Bug Fixes

* Fix NPE bug in `LogSlot#entry` when recording rule ID ([#2980](https://github.com/alibaba/Sentinel/pull/2980))
* Fix the bug that error occurs in JMX metrics exporter when resource name contains '*' ([#2992](https://github.com/alibaba/Sentinel/pull/2992))
* Fix thread-blocked problem of EtcdDataSource ([#2991](https://github.com/alibaba/Sentinel/pull/2991))
* Fix potential connection leak bug when closing NacosDataSource ([#2962](https://github.com/alibaba/Sentinel/pull/2962))

## Dashboard

- Add simple Dockerfile for Sentinel dashboard ([#2970](https://github.com/alibaba/Sentinel/pull/2970))

## Dependencies

- Upgrade curator-recipes to 5.1.0 to fix API change for ZooKeeper data-source ([#2963](https://github.com/alibaba/Sentinel/pull/2963))

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `2.0.0-alpha` · 2023-02-28 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/2.0.0-alpha)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
