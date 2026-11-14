---
title: "Sentinel 1.8.10"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.10"
published: "2026-05-21"
type: "patch"
lang: "en"
summary: "Add Apache HttpClient 5.x adapter for Sentinel (#3614) · Support Spring RestClient (#3602)"
---

# Sentinel 1.8.10

## Features / Enhancements

- Add Apache HttpClient 5.x adapter for Sentinel (#3614)
- Support Spring RestClient (#3602)
- Add optional switch to skip regex resource matching when exact match exists, default disabled for backward compatibility (#3565)

## Bug Fixes

- Ensure requests are blocked when errRatioThreshold reaches 100% (#1857)
- Fix Endpoint#toString host formatting (#3578)
- Fix the bug in spring-webmvc-v6x adapter where HTTP method prefix was not concatenated when http-method-specify is enabled (#3569)

## Dashboard

- Fix incorrect time unit in the tooltip when adding a new circuit breaker rule with statistical window duration (#3569)


Thanks for all contributors: @uuuyuqi, @gaoyf, @xierunzi, @Layau-code, @ylnxwlp

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.10` · 2026-05-21 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
