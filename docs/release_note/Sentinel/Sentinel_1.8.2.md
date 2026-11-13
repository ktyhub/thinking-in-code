---
title: "Sentinel 1.8.2"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.2"
published: "2021-07-06"
type: "patch"
lang: "en"
summary: "Thanks for all contributors: @Amitbhave, @Anilople, @brotherlu-xcq, @cdfive, @drgnchan, @goodjava, @gvma, @huakai-zhang, @jasonjoo2010, @jiajiangnan, @JJFly-JOJO, @JerryChin, @liqiangz, @quaff, @Roger3581321,…"
---

# Sentinel 1.8.2

## Features / Enhancements

- Improve performance of `TimeUtil` adaptively in different load conditions ([#1746](https://github.com/alibaba/Sentinel/pull/1746))
- Support private-level blockHandler/fallback method for `@SentinelResource` annotation ([#2163](https://github.com/alibaba/Sentinel/pull/2163))
- Add `sentinel-transport-spring-mvc` module (Spring Web as command center) ([#1957](https://github.com/alibaba/Sentinel/pull/1957))
- Support Redis cluster mode in Redis data-source extension ([#1751](https://github.com/alibaba/Sentinel/pull/1751))
- Support config from system env in SentinelConfig and polish TransportConfig in transport-common module ([#2154](https://github.com/alibaba/Sentinel/pull/2154))
- Make all backend thread pools daemon ([#2181](https://github.com/alibaba/Sentinel/pull/2181))

## Dashboard

- Improve support for customizing auth-related implementations (#2059)

## Dependencies

- Upgrade Netty to 4.1.48.Final in sentinel-cluster modules


Thanks for all contributors: @Amitbhave, @Anilople, @brotherlu-xcq, @cdfive, @drgnchan, @goodjava, @gvma, @huakai-zhang, @jasonjoo2010, @jiajiangnan, @JJFly-JOJO, @JerryChin, @liqiangz, @quaff, @Roger3581321, @ShubhamPalriwala, @Slideee, @SparkLee, @sczyh30, @shenbaoyong, @ss-superman, @VegetaPn, @wutingjia, @wuwen5, @zhangyunan1994

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.2` · 2021-07-06 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
