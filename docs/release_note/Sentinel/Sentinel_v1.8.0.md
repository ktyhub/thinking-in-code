---
title: "Sentinel v1.8.0"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "v1.8.0"
published: "2020-08-21"
type: "minor"
lang: "en"
summary: "This nouveau release ships with countless features and improvements, specifically for circuit breaking. We've made progress on refactoring and improving circuit breaking feature, including arbitrary statistic duration…"
---

# Sentinel v1.8.0

This nouveau release ships with countless features and improvements, specifically for circuit breaking. We've made progress on refactoring and improving circuit breaking feature, including arbitrary statistic duration support, half-open recovery, enhanced slow request ratio strategy, state change observer and more. We've also brought various versatile integrations including Java EE (JAX-RS and CDI), Quarkus and HTTP client (Apache HttpClient and OkHttp), which could cover more developers.

## Features / Enhancements

- **Refactor degrade hierarchy with new circuit breaker mechanism and improve strategy** (support arbitrary statistic duration, support half-open recovery, add slow request ratio strategy) ([#1490](https://github.com/alibaba/Sentinel/pull/1490), [#1645](https://github.com/alibaba/Sentinel/pull/1645))
- Support setting `project.name` via the properties file and deprecate legacy config path ([#1412](https://github.com/alibaba/Sentinel/pull/1412), [#1437](https://github.com/alibaba/Sentinel/pull/1437))
- Refactor the mechanism of recording exception (on completed) and polish Tracer ([#1420](https://github.com/alibaba/Sentinel/pull/1420))
- Support setting class-level defaultFallback for annotation extension ([#1493](https://github.com/alibaba/Sentinel/pull/1493))
- Add JAX-RS integration module ([#1396](https://github.com/alibaba/Sentinel/pull/1396))
- Add annotation extension for Java EE CDI ([#1541](https://github.com/alibaba/Sentinel/pull/1541))
- Add Sentinel annotation and JAX-RS plugins for Quarkus ([#1542](https://github.com/alibaba/Sentinel/pull/1542))
- Add Apache HttpClient integration module ([#1455](https://github.com/alibaba/Sentinel/pull/1455))
- Add OkHttp integration module ([#1456](https://github.com/alibaba/Sentinel/pull/1456))
- Add Eureka data-source extension ([#1502](https://github.com/alibaba/Sentinel/pull/1502))
- Add exceptionPredicate in Tracer for customized exception filtering logic ([#1496](https://github.com/alibaba/Sentinel/pull/1496))
- Improve purge mechanism for deprecated ParameterMetric ([#1372](https://github.com/alibaba/Sentinel/pull/1372))
- Support customized origin parser in Dubbo 2.6.x/2.7.x adapter and polish config mechanism ([#1555](https://github.com/alibaba/Sentinel/pull/1555), [#1572](https://github.com/alibaba/Sentinel/pull/1572), [#1617](https://github.com/alibaba/Sentinel/pull/1617))
- Add support for extracting parameter value from complex object ([#1491](https://github.com/alibaba/Sentinel/pull/1491))
- Add extended interface for metric extension hook to support distinguishing traffic type ([#1665](https://github.com/alibaba/Sentinel/pull/1665))
- Improve default fallback for Apache Dubbo 2.7.x adapter ([#1680](https://github.com/alibaba/Sentinel/pull/1680))
- Add per-Entry exit handler (`whenTerminate`) support ([#1645](https://github.com/alibaba/Sentinel/pull/1645))
- Optimize the order of slots in ProcessorSlot SPI config ([#1649](https://github.com/alibaba/Sentinel/pull/1649))

## Bug fixes

- Fix sentinel-apache-dubbo-adapter full GC bug ([#1431](https://github.com/alibaba/Sentinel/pull/1431))
- Fix the bug that may cause ErrorEntryFreeException when forwarding requests in sentinel-spring-webmvc-adapter ([#1533](https://github.com/alibaba/Sentinel/pull/1533), [#1681](https://github.com/alibaba/Sentinel/pull/1681))
- Fix the bug of extracting request cookie in Spring Cloud Gateway adapter ([#1400](https://github.com/alibaba/Sentinel/pull/1400))
- Fix the bug of misplaced locks in ContextUtil and ClusterNode ([#1429](https://github.com/alibaba/Sentinel/pull/1429))

## Dashboard

- Refactor degrade frontend/controller and adapt to new circuit breaking features
- Fix the bug that cookie may have conflict with web applications under the same domain ([#1443](https://github.com/alibaba/Sentinel/pull/1443))
- Fix historical version compatibility problem for auth checking via localStorage ([#1473](https://github.com/alibaba/Sentinel/pull/1473))

## Dependencies

- Upgrade fastjson to 1.2.71, nacos-client to 1.3.0 (in `sentinel-datasource-nacos` module)



Thanks for all contributors: @Billzaifei, @cdfive, @chenzhiguo, @CodingSinger, @DogBaoBao, @jasonjoo2010, @J-Cod3r, @JiangZian, @John-Chan, @joooohnli, @linlinisme, @liqiangz, @pleasecheckhere2016, @PeineLiang, @RGaius, @sczyh30, @seasidesky, @wavesZh, @xiby, @Yanghf123, @yunfeiyanggzq, @zhaoyuguang, @zhenxianyimeng

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `v1.8.0` · 2020-08-21 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/v1.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
