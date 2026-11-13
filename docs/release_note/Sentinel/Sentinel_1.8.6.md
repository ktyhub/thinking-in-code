---
title: "Sentinel 1.8.6"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.6"
published: "2022-10-26"
type: "patch"
lang: "en"
summary: "This release ships with a few enhancements and bug fixes."
---

# Sentinel 1.8.6

This release ships with a few enhancements and bug fixes.

Furthermore, Sentinel OpenSergo data-source has been beta-available (`com.alibaba.csp:sentinel-datasource-opensergo:0.1.0-beta`), which enables developers to configure Sentinel rules with [OpenSergo fault-tolerance CRD](https://github.com/opensergo/opensergo-specification/tree/main/specification) in a unified way (under Kubernetes, with [OpenSergo control plane](https://github.com/opensergo/opensergo-control-plane)).

## Features / Enhancements

* Add `id` field in Rule entity and record rule ID in block log ([#2853](https://github.com/alibaba/Sentinel/pull/2853))

## Bug Fixes

* Fix Dubbo SPI path bug in Dubbo 3.x adapter ([#2822](https://github.com/alibaba/Sentinel/pull/2822))
* Fix the bug that `SpiLoader#closeResources` may not record the exception when error occurs ([#2890](https://github.com/alibaba/Sentinel/pull/2890))

## Dashboard

- Improve IP validation in SentinelApiClient and rule controllers

Thanks for all contributors: @AlbumenJ, @hongpy, @icodening, @PepoRobert, @sczyh30, @ZhongJinHacker

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.6` · 2022-10-26 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
