---
title: "spring-integration v6.5.9"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v6.5.9"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "Add message selector based on header value matching patterns #11094 · Disable allowCredentials in the CrossOrigin and introduce originPatterns #11009"
---

# spring-integration v6.5.9

## :star: New Features

- Add message selector based on header value matching patterns [#11094](https://github.com/spring-projects/spring-integration/issues/11094)
- Disable `allowCredentials` in the `CrossOrigin` and introduce `originPatterns` [#11009](https://github.com/spring-projects/spring-integration/issues/11009)

## :lady_beetle: Bug Fixes

- Prevent file writing outside output directory [#11097](https://github.com/spring-projects/spring-integration/issues/11097)
- The `RedisLockRegistry` unlock race condition on the interrupted thread [#11060](https://github.com/spring-projects/spring-integration/issues/11060)
- The `ControlBusCommandRegistry.controlBusCommands` must be a `ConcurrentHashMap` [#11054](https://github.com/spring-projects/spring-integration/issues/11054)
- Prevent eviction of held locks from Redis registry [#11053](https://github.com/spring-projects/spring-integration/issues/11053)
- Prevent eviction of held locks from JDBC registry [#11048](https://github.com/spring-projects/spring-integration/issues/11048)
- `ZookeeperMetadataStore.replace()` breaks the CAS logic [#11023](https://github.com/spring-projects/spring-integration/issues/11023)
- JDBC lock repository fails after entering daylight savings [#10910](https://github.com/spring-projects/spring-integration/issues/10910)
- Docs: Fix schema link for ftp/sftp/smb [#10900](https://github.com/spring-projects/spring-integration/issues/10900)

## :hammer: Dependency Upgrades

- Update spring versions to the latest release [#11090](https://github.com/spring-projects/spring-integration/pull/11090)
- Bump io.micrometer:micrometer-tracing-bom from 1.5.11 to 1.5.12 [#11088](https://github.com/spring-projects/spring-integration/pull/11088)
- Bump org.springframework.amqp:spring-amqp-bom from 3.2.10 to 3.2.11 [#11087](https://github.com/spring-projects/spring-integration/pull/11087)
- Bump io.projectreactor:reactor-bom from 2024.0.17 to 2024.0.18 [#11086](https://github.com/spring-projects/spring-integration/pull/11086)
- Bump org.springframework.data:spring-data-bom from 2025.0.11 to 2025.0.12 [#11085](https://github.com/spring-projects/spring-integration/pull/11085)
- Bump org.springframework.kafka:spring-kafka-bom from 3.3.15 to 3.3.16 [#11084](https://github.com/spring-projects/spring-integration/pull/11084)
- Bump org.jruby:jruby-complete from 9.4.14.0 to 9.4.15.0 [#11083](https://github.com/spring-projects/spring-integration/pull/11083)
- Bump io.micrometer:micrometer-bom from 1.15.11 to 1.15.12 [#11082](https://github.com/spring-projects/spring-integration/pull/11082)
- Bump org.springframework.retry:spring-retry from 2.0.12 to 2.0.13 [#11081](https://github.com/spring-projects/spring-integration/pull/11081)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.8 to 4.0.9 [#11036](https://github.com/spring-projects/spring-integration/pull/11036)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.7 to 4.0.8 [#10999](https://github.com/spring-projects/spring-integration/pull/10999)
- Bump org.apache.groovy:groovy-bom from 4.0.31 to 4.0.32 [#10998](https://github.com/spring-projects/spring-integration/pull/10998)
- Bump gradle-wrapper from 8.14.4 to 8.14.5 [#10994](https://github.com/spring-projects/spring-integration/pull/10994)
- Bump org.springframework.kafka:spring-kafka-bom from 3.3.14 to 3.3.15 [#10976](https://github.com/spring-projects/spring-integration/pull/10976)
- Bump org.springframework.amqp:spring-amqp-bom from 3.2.9 to 3.2.10 [#10969](https://github.com/spring-projects/spring-integration/pull/10969)
- Bump org.springframework:spring-framework-bom from 6.2.17 to 6.2.18 [#10953](https://github.com/spring-projects/spring-integration/pull/10953)
- Bump io.projectreactor:reactor-bom from 2024.0.16 to 2024.0.17 [#10951](https://github.com/spring-projects/spring-integration/pull/10951)
- Bump io.micrometer:micrometer-tracing-bom from 1.5.10 to 1.5.11 [#10949](https://github.com/spring-projects/spring-integration/pull/10949)
- Bump io.micrometer:micrometer-bom from 1.15.10 to 1.15.11 [#10947](https://github.com/spring-projects/spring-integration/pull/10947)
- Bump org.springframework.data:spring-data-bom from 2025.0.10 to 2025.0.11 [#10946](https://github.com/spring-projects/spring-integration/pull/10946)
- Bump org.apache.groovy:groovy-bom from 4.0.29 to 4.0.31 [#10915](https://github.com/spring-projects/spring-integration/pull/10915)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v6.5.9` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v6.5.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
