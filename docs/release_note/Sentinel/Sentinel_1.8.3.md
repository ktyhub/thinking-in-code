---
title: "Sentinel 1.8.3"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.3"
published: "2021-12-31"
type: "patch"
lang: "en"
summary: "Add support for Envoy RLS v3 API in sentinel-cluster-server-envoy-rls token server module (#2336) · Add metric exporter extension for exporting Sentinel metrics via JMX (#2275)"
---

# Sentinel 1.8.3

## Features / Enhancements

- Add support for Envoy RLS v3 API in `sentinel-cluster-server-envoy-rls` token server module  ([#2336](https://github.com/alibaba/Sentinel/pull/2336))
- Add metric exporter extension for exporting Sentinel metrics via JMX ([#2275](https://github.com/alibaba/Sentinel/pull/2275))

## Bug Fixes

- Fix inbound QPS mode of system rule: use passQps instead of completeQps and support batchCount ([#2455](https://github.com/alibaba/Sentinel/pull/2455))
- Fix the bug that legacy API matchers in ScGatewayApiMatcherManager were not removed after the API group has been removed ([#2436](https://github.com/alibaba/Sentinel/pull/2436))

## Integrations

- Add ACL token support for Consul data-source ([#2307](https://github.com/alibaba/Sentinel/pull/2307))

## Dashboard

- Fix dashboard logo problem when customizing the context-path of the backend ([#2253](https://github.com/alibaba/Sentinel/pull/2253))
- Add IP validation in API of MachineRegistryController


Thanks for all contributors: @brotherlu-xcq, @chenzhiguo, @sczyh30, @shaohsiung, @su787910081, @winjaychan, @wucheng1997, @xiaojun207, @xianwdong

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.3` · 2021-12-31 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
