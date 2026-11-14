---
title: "Sentinel 1.8.8"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.8"
published: "2024-06-05"
type: "patch"
lang: "en"
summary: "Support running test with JDK 21 or JDK17 (#3344) (#3339) · Add webmvc-6x-adapter module to support spring boot 3.x (#3351) · Replace ThreadLocal with DateTimeFormatter (#3353)"
---

# Sentinel 1.8.8

## Features / Enhancements

- Support running test with JDK 21 or JDK17 (#3344) (#3339)
- Add webmvc-6x-adapter module to support spring boot 3.x (#3351)
- Replace ThreadLocal<DateFormat> with DateTimeFormatter (#3353)

## Bug Fixes

- Fix flaky tests and fix passDefaultLocalCheck (#3367)
- Fix when duplication spi class found using SpiLoader (#3387)
- Fix reflection exceptions caused by having identically named fallback/blockHandler with different parameter types (#3395)

## Dependencies

- Bump com.fasterxml.jackson.core:jackson-databind (#3342)
- Bump org.springframework:spring-expression (#3375)
- Bump org.springframework:spring-context (#3404)

Thanks for all contributors: @cdfive, @robberphex, @shichaoyuan, @LearningGp, @ruansheng8, @dowenliu-xyz

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.8` · 2024-06-05 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
