---
title: "dubbo-spi-extensions v1.0.4"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v1.0.4"
published: "2023-01-05"
type: "patch"
lang: "en"
---

# dubbo-spi-extensions v1.0.4

## Changes

- Remove the transitive dependency of `seata-core` in `dubbo-filter-seata`.
- Support address creation in `dubbo-cluster-specify-address-dubbo2`
- Fix re-router failed in `dubbo-cluster-specify-address`
- Introduce polaris extensions for Dubbo 2

## Modules

- dubbo-cluster-extensions
  - dubbo-cluster-polaris-dubbo2
  - dubbo-cluster-specify-address-common
  - dubbo-cluster-specify-address-dubbo2
  - dubbo-cluster-specify-address-dubbo3
- dubbo-filter-extensions
  - dubbo-filter-seata
  - dubbo-filter-polaris-dubbo2
  - dubbo-filter-polaris-circuitbreaker-dubbo2
  - dubbo-filter-polaris-ratelimit-dubbo2
- dubbo-registry-extensions
  - dubbo-registry-polaris

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v1.0.4` · 2023-01-05 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v1.0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
