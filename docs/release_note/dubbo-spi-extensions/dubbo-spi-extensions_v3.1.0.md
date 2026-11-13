---
title: "dubbo-spi-extensions v3.1.0"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v3.1.0"
published: "2024-06-16"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/apache/dubbo-spi-extensions/compare/v1.0.3...v3.1.0"
---

# dubbo-spi-extensions v3.1.0

## What's Changed



## Reference

- Compatible with Apache Dubbo [[3.1.x](https://github.com/apache/dubbo/tree/3.1)](https://github.com/apache/dubbo/tree/3.1)

## Enhancement

- [dubbo-cluster-specify-address-dubbo2]support v2 ip spec by @wxbty  in [[#179](https://github.com/apache/dubbo-spi-extensions/pull/179)](https://github.com/apache/dubbo-spi-extensions/pull/179)

- [dubbo-cluster-polaris-dubbo2] Add polaris extensions support by @andrewshan  in [[#184](https://github.com/apache/dubbo-spi-extensions/pull/184)](https://github.com/apache/dubbo-spi-extensions/pull/184)
- [dubbo-filter-polaris-dubbo2] feat: separate the circuitbreaker and ratelimit filters, to make it more decompose to developers by @andrewshan in https://github.com/apache/dubbo-spi-extensions/pull/187
- [dubbo-filter-seata] Set seata core as optional dependency by @AlbumenJ in https://github.com/apache/dubbo-spi-extensions/pull/188
- [dubbo-gateway-extensions] add Gateway mode extension by @wxbty in [[#205](https://github.com/apache/dubbo-spi-extensions/pull/205)](https://github.com/apache/dubbo-spi-extensions/pull/205)
- [polaris ] support polaris circuitbreaker ability by  @chuntaojun  in [[#212](https://github.com/apache/dubbo-spi-extensions/pull/212)](https://github.com/apache/dubbo-spi-extensions/pull/212)
- [Cross thread] tag corss thread by annotation in dubbo-cross-thread-extensions by  @carlvine500   in [[#215](https://github.com/apache/dubbo-spi-extensions/pull/215)](https://github.com/apache/dubbo-spi-extensions/pull/215)
- [tag subnets] add tag by subnets for near-rpc by  @carlvine500 in [[#216](https://github.com/apache/dubbo-spi-extensions/pull/216)](https://github.com/apache/dubbo-spi-extensions/pull/216)
- [Serialization] add fury serialization framework to dubbo by  @chaokunyang  in [[#226](https://github.com/apache/dubbo-spi-extensions/pull/226)](https://github.com/apache/dubbo-spi-extensions/pull/226)
- [dubbo-serialization-jackson] Add jackson serialization extension by @aofall in [[#231](https://github.com/apache/dubbo-spi-extensions/pull/231)](https://github.com/apache/dubbo-spi-extensions/pull/231) 
- fix test case failed by @aofall in [[#303](https://github.com/apache/dubbo-spi-extensions/pull/303)](https://github.com/apache/dubbo-spi-extensions/pull/303) 
- Compatible with Apache Dubbo 3.1.0 branch by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/334

## Bugfix

- Bugfix of retries and missing field by  @wxbty  in [[#182](https://github.com/apache/dubbo-spi-extensions/pull/182)](https://github.com/apache/dubbo-spi-extensions/pull/182)
- Fix revert error description by  @wxbty  in [[#209](https://github.com/apache/dubbo-spi-extensions/pull/209)](https://github.com/apache/dubbo-spi-extensions/pull/209)
- Fix move the recourse file to the corrent path in dubbo-serialization-jackson by  @aofall  in [[#233](https://github.com/apache/dubbo-spi-extensions/pull/233)](https://github.com/apache/dubbo-spi-extensions/pull/233)

## Doc

- Explicitly call out hessian-rpc is unstafe by default by  @raboof in [[#196](https://github.com/apache/dubbo-spi-extensions/pull/196)](https://github.com/apache/dubbo-spi-extensions/pull/196) 
- Auto gen code tree doc by  @songxiaosheng  in [[#224](https://github.com/apache/dubbo-spi-extensions/pull/224)](https://github.com/apache/dubbo-spi-extensions/pull/224)
- :memo: visit code tree to gen doc by @songxiaosheng in [[#227](https://github.com/apache/dubbo-spi-extensions/pull/227)](https://github.com/apache/dubbo-spi-extensions/pull/227)

## Dependency Upgrade

- Update kryo 5.3.0 -> 5.4.0 by @wxbty in [[#190](https://github.com/apache/dubbo-spi-extensions/pull/190)](https://github.com/apache/dubbo-spi-extensions/pull/190)](https://github.com/apache/dubbo-spi-extensions/pull/190)
- Update snakeyaml 1.32 -> 2.0 [[#208](https://github.com/apache/dubbo-spi-extensions/pull/208)](https://github.com/apache/dubbo-spi-extensions/pull/208)]
- Update grpc-protobuf 1.31.1 -> 1.53.0 [[#214](https://github.com/apache/dubbo-spi-extensions/pull/214)](https://github.com/apache/dubbo-spi-extensions/pull/214) 
- Update org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE [[#217](https://github.com/apache/dubbo-spi-extensions/pull/217)](https://github.com/apache/dubbo-spi-extensions/pull/217) [[#218](https://github.com/apache/dubbo-spi-extensions/pull/218)](https://github.com/apache/dubbo-spi-extensions/pull/218) [[#219](https://github.com/apache/dubbo-spi-extensions/pull/219)](https://github.com/apache/dubbo-spi-extensions/pull/219)  [[#220](https://github.com/apache/dubbo-spi-extensions/pull/220)](https://github.com/apache/dubbo-spi-extensions/pull/220)  [[#221](https://github.com/apache/dubbo-spi-extensions/pull/221)](https://github.com/apache/dubbo-spi-extensions/pull/221)  [[#222](https://github.com/apache/dubbo-spi-extensions/pull/222)](https://github.com/apache/dubbo-spi-extensions/pull/222) [[#223](https://github.com/apache/dubbo-spi-extensions/pull/223)](https://github.com/apache/dubbo-spi-extensions/pull/223)
- Update jetcd vertsion 0.5.7 -> 0.7.7 by @aofall in [[#398](https://github.com/apache/dubbo-spi-extensions/pull/398)](https://github.com/apache/dubbo-spi-extensions/pull/398)
- Update Dubbo vertsion 3.12 -> 3.1.11 by @aofall in [[#398](https://github.com/apache/dubbo-spi-extensions/pull/398)](https://github.com/apache/dubbo-spi-extensions/pull/398)
- Update  jetcd vertsion  0.5.7 -> 0.7.7 by @aofall in [[#416](https://github.com/apache/dubbo-spi-extensions/pull/416)](https://github.com/apache/dubbo-spi-extensions/pull/416) 

## New Contributors

* @andrewshan made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/184
* @raboof made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/196
* @chuntaojun made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/212
* @carlvine500 made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/215
* @chaokunyang made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/226 

**Full Changelog**: https://github.com/apache/dubbo-spi-extensions/compare/v1.0.3...v3.1.0

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v3.1.0` · 2024-06-16 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v3.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
