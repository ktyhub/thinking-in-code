---
title: "dubbo-spi-extensions v3.2.0"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v3.2.0"
published: "2024-03-03"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/apache/dubbo-spi-extensions/compare/v1.0.3...v3.2.0"
---

# dubbo-spi-extensions v3.2.0

# What's Changed
##  Reference
* Compatible with Apache Dubbo [3.2.x](https://github.com/apache/dubbo/tree/3.2) 

## Enhancement

* [dubbo-cluster-specify-address-dubbo2] Support dynamic ip access for non-local clusters in dubbo-cluster-specify-address-dubbo2 by @wxbty in https://github.com/apache/dubbo-spi-extensions/pull/179
* [polaris extension] Add the polaris extensions to make dubbo2.7.x access polaris by @andrewshan in https://github.com/apache/dubbo-spi-extensions/pull/184
* [dubbo-filter-polaris-dubbo2] separate the circuitbreaker and ratelimit filters, to make it more decompose to developers by @andrewshan in https://github.com/apache/dubbo-spi-extensions/pull/187
* [dubbo-gateway-extensions] add Gateway mode extension by @wxbty in https://github.com/apache/dubbo-spi-extensions/pull/205
* [polaris ] support polaris circuitbreaker ability by @chuntaojun in https://github.com/apache/dubbo-spi-extensions/pull/212
* [Cross thread] tag corss thread by annotation in dubbo-cross-thread-extensions by @carlvine500 in https://github.com/apache/dubbo-spi-extensions/pull/215
* [tag subnets] add tag by subnets for near-rpc by @carlvine500 in https://github.com/apache/dubbo-spi-extensions/pull/216
* [Serialization] add fury serialization framework to dubbo by @chaokunyang in https://github.com/apache/dubbo-spi-extensions/pull/226
*  [dubbo-serialization-jackson] Add jackson serialization extension by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/231
* [dubbo-xds] Import Kubernetes and xDS implementation from Dubbo 3.2 by @AlbumenJ in https://github.com/apache/dubbo-spi-extensions/pull/251


## Bugfix

* Fix revert error description by @wxbty in https://github.com/apache/dubbo-spi-extensions/pull/209
* Fix move the recourse file to the corrent path in dubbo-serialization-jackson by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/233
* Fix  ServiceConfigURL of dubbo 3.0 serialization problem: public parameters such as application,version are not be transferredadd  And ServiceConfigURLDelegate for protostuff by @zrlw in https://github.com/apache/dubbo-spi-extensions/pull/67
* Fix(#207): Dubbo Redis register support select databases by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/247
* Fix[#267]  protobuf type lose field when deepCopy inJvmInvoker  … by @vio-lin in https://github.com/apache/dubbo-spi-extensions/pull/268

## Doc

* Explicitly call out hessian-rpc is unstafe by default by @raboof in https://github.com/apache/dubbo-spi-extensions/pull/196
* Auto gen code tree  doc by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/224
* :memo: Upgrade Readme by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/235



## Support Dubbo 3.2

* configcenter consul  support dubbo-3.2 by @robin977 in https://github.com/apache/dubbo-spi-extensions/pull/239
* broadcast support dubbo-3.2 by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/238
* dubbo-cluster-specify-address suuport dubbo-3.2  by @finefuture in https://github.com/apache/dubbo-spi-extensions/pull/241
* dubbo-register-redis and dubbo-register-consul support dubbo-3.2  by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/244
* eakewma support dubbo-3.2 by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/242
* configcenter etcd support dubbo-3.2  by @robin977 in https://github.com/apache/dubbo-spi-extensions/pull/243
* registry center etcd support dubbo-3.2  by @robin977 in https://github.com/apache/dubbo-spi-extensions/pull/248
* fastjson、gson、jackson  support dubbo-3.2  by @xixingya in https://github.com/apache/dubbo-spi-extensions/pull/249
* quic  support dubbo-3.2  by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/261
* serialization module  support dubbo-3.2  by @xixingya in https://github.com/apache/dubbo-spi-extensions/pull/259
* dubbo-common-extensions dubbo-cross-thread-extensions  dubbo-filter-seata support dubbo-3.2 by @finefuture in https://github.com/apache/dubbo-spi-extensions/pull/263
* rpc rocketmq  support dubbo-3.2 by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/262
* webservice  support dubbo-3.2 by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/269
* rpc rmi  support dubbo-3.2 by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/276


## Dependency Upgrade

* Update kryo  5.3.0 ->  5.4.0   https://github.com/apache/dubbo-spi-extensions/pull/190
* Update snakeyaml 1.32 -> 2.0   https://github.com/apache/dubbo-spi-extensions/pull/208
* Update grpc-protobuf  1.31.1  -> 1.53.0  https://github.com/apache/dubbo-spi-extensions/pull/214
* Update ch.qos.logback:logback-classic   1.2.11 ->  1.3.12   https://github.com/apache/dubbo-spi-extensions/pull/245
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/219
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/222
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/223
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/221
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/220
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/218
* Update org.springframework:spring-framework-bom  4.3.29.RELEASE  ->  4.3.30.RELEASE   https://github.com/apache/dubbo-spi-extensions/pull/217
* Update ch.qos.logback:logback-classic  1.2.3  ->  1.3.12  https://github.com/apache/dubbo-spi-extensions/pull/246


## New Contributors

* @andrewshan made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/184
* @raboof made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/196
* @chuntaojun made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/212
* @carlvine500 made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/215
* @chaokunyang made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/226
* @aofall made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/231
* @robin977 made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/239
* @zrlw made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/67
* @finefuture made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/241
* @xixingya made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/249
* @vio-lin made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/268

**Full Changelog**: https://github.com/apache/dubbo-spi-extensions/compare/v1.0.3...v3.2.0

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v3.2.0` · 2024-03-03 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v3.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
