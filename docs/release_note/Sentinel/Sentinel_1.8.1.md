---
title: "Sentinel 1.8.1"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.1"
published: "2021-02-04"
type: "patch"
lang: "en"
summary: "NOTE: Since 1.8.1, Sentinel requires JDK 1.8 or higher version."
---

# Sentinel 1.8.1

**NOTE**: Since 1.8.1, Sentinel requires JDK 1.8 or higher version.

## Features / Enhancements

- Refactor SpiLoader and enhance SPI mechanism ([#1383](https://github.com/alibaba/Sentinel/pull/1383))
- Add basic cluster concurrency limiting implementation in token server module ([#1631](https://github.com/alibaba/Sentinel/pull/1631))
- Add Motan RPC adapter implementation ([#1825](https://github.com/alibaba/Sentinel/pull/1825))
- Improve default block fallback logic in Dubbo 2.6.x adapter to avoid serialization problem ([#1794](https://github.com/alibaba/Sentinel/pull/1794))
- Support setting flush interval of the metric log via SentinelConfig property ([#1919](https://github.com/alibaba/Sentinel/pull/1919))
- Support both HTTP and HTTPS protocol in transport heartbeat module ([#1896](https://github.com/alibaba/Sentinel/pull/1896))
- Make token client `NettyTransportClient.getCurrentId()` thread safe ([#1707](https://github.com/alibaba/Sentinel/pull/1707))

## Bug fixes

- Fix NPE bug when updating gateway flow rules and param flow rules before the route/API has been requested once ([#1729](https://github.com/alibaba/Sentinel/pull/1729), [#1901](https://github.com/alibaba/Sentinel/pull/1901))
- Fix the bug that getServletPath() may return empty when matching URL in Zuul 1.x adapter ([#1605](https://github.com/alibaba/Sentinel/pull/1605))
- Fix the problem that requests will never be blocked when slowRatioThreshold = 100% ([#1779](https://github.com/alibaba/Sentinel/pull/1779))

## Dashboard

- Add statIntervalMs field in DegradeRule dialog ([#1781](https://github.com/alibaba/Sentinel/pull/1781))
- Add support for matching path pattern like `/xx/**` in authFilterExcludeUrls ([#1971](https://github.com/alibaba/Sentinel/pull/1971))
- Fix issue of memory leak in real-time monitoring page ([#1905](https://github.com/alibaba/Sentinel/pull/1905))
- Improve MetricFetcher under concurrent conditions ([#1918](https://github.com/alibaba/Sentinel/pull/1918))

## Dependencies

- Upgrade fastjson to 1.2.75
- Upgrade snakeyaml to 1.26 in sentinel-cluster-server-envoy-rls module


Thanks for all contributors: @brothelul, @cdfive, @dani3lWong, @evasnowind, @HelloCoCooo, @jasonjoo2010, @JiangZian, @JieGz, @John-Chan, @liuming-dev, @mikawudi, @nickChenyx, @odidev, @polarbear567, @PeineLiang, @samuelxw, @sczyh30, @vipweihua, @wzg923, @xierunzi, @xierunzi, @xuande, @yunfeiyanggzq, @zcai2, @zhangkai253, @zhangxn8, @zhouyongshen

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.1` · 2021-02-04 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
