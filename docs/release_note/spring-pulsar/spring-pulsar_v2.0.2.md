---
title: "spring-pulsar v2.0.2"
project: "spring-pulsar"
repo: "spring-projects/spring-pulsar"
tag: "v2.0.2"
published: "2026-01-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-pulsar v2.0.2

## :lady_beetle: Bug Fixes

- Update usage of AOT hints for AsyncHttpClient properties [#1373](https://github.com/spring-projects/spring-pulsar/pull/1373)
- Fix pulsar listener's incorrect ack behaviour causing un-acked backlog on partitioned topic when using AckMode.BATCH  [#1372](https://github.com/spring-projects/spring-pulsar/pull/1372)
- AckMode.BATCH causes stuck backlog on Partitioned Topics (Cumulative Ack applied incorrectly to multiplexed stream) [#1344](https://github.com/spring-projects/spring-pulsar/issues/1344)

## :hammer: Dependency Upgrades

- Bump ch.qos.logback:logback-classic from 1.5.22 to 1.5.23 [#1368](https://github.com/spring-projects/spring-pulsar/pull/1368)
- Bump ch.qos.logback:logback-classic from 1.5.23 to 1.5.24 [#1381](https://github.com/spring-projects/spring-pulsar/pull/1381)
- Bump ch.qos.logback:logback-classic from 1.5.24 to 1.5.25 [#1391](https://github.com/spring-projects/spring-pulsar/pull/1391)
- Bump org.springframework:spring-framework-bom from 7.0.2 to 7.0.3 [#1387](https://github.com/spring-projects/spring-pulsar/pull/1387)
- Bump io.micrometer:micrometer-tracing-bom from 1.6.1 to 1.6.2 [#1385](https://github.com/spring-projects/spring-pulsar/pull/1385)
- Bump io.micrometer:micrometer-bom from 1.16.1 to 1.16.2 [#1384](https://github.com/spring-projects/spring-pulsar/pull/1384)
- Bump org.junit:junit-bom from 6.0.1 to 6.0.2 [#1380](https://github.com/spring-projects/spring-pulsar/pull/1380)
- Bump com.google.protobuf from 0.9.5 to 0.9.6 [#1364](https://github.com/spring-projects/spring-pulsar/pull/1364)
- Bump org.testcontainers:testcontainers-bom from 2.0.2 to 2.0.3 [#1363](https://github.com/spring-projects/spring-pulsar/pull/1363)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@oneby-wang


**Full Changelog**: https://github.com/spring-projects/spring-pulsar/compare/v2.0.1...v2.0.2

---

> **Source** [spring-projects/spring-pulsar](https://github.com/spring-projects/spring-pulsar) · `v2.0.2` · 2026-01-20 · [upstream release](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
