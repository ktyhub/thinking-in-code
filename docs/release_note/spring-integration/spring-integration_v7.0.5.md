---
title: "spring-integration v7.0.5"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.0.5"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-integration v7.0.5

## :star: New Features

- Add message selector based on header value matching patterns [#11093](https://github.com/spring-projects/spring-integration/issues/11093)
- Disable `allowCredentials` in the `CrossOrigin` and introduce `originPatterns` [#11008](https://github.com/spring-projects/spring-integration/issues/11008)

## :lady_beetle: Bug Fixes

- Prevent file writing outside output directory [#11096](https://github.com/spring-projects/spring-integration/issues/11096)
- The `RedisLockRegistry` unlock race condition on the interrupted thread [#11059](https://github.com/spring-projects/spring-integration/issues/11059)
- The `ControlBusCommandRegistry.controlBusCommands` must be a `ConcurrentHashMap` [#11055](https://github.com/spring-projects/spring-integration/issues/11055)
- Prevent eviction of held locks from Redis registry [#11052](https://github.com/spring-projects/spring-integration/issues/11052)
- Prevent eviction of held locks from JDBC registry [#11047](https://github.com/spring-projects/spring-integration/issues/11047)
- `ZookeeperMetadataStore.replace()` breaks the CAS logic [#11022](https://github.com/spring-projects/spring-integration/issues/11022)
- ServerWebSocketContainer.registerWebSocketHandlers() uses setAllowedOrigins() instead of setAllowedOriginPatterns(), causing incompatibility with allowCredentials=true in Spring Framework 7 [#10943](https://github.com/spring-projects/spring-integration/issues/10943)
- JDBC lock repository fails after entering daylight savings [#10909](https://github.com/spring-projects/spring-integration/issues/10909)
- Docs: Fix schema link for ftp/sftp/smb [#10899](https://github.com/spring-projects/spring-integration/issues/10899)

## :notebook_with_decorative_cover: Documentation

- Fix navigation link for `Configuration` section [#11061](https://github.com/spring-projects/spring-integration/issues/11061)

## :hammer: Dependency Upgrades

- Update spring release versions [#11091](https://github.com/spring-projects/spring-integration/pull/11091)
- Bump org.springframework.kafka:spring-kafka-bom from 4.0.5 to 4.0.6 [#11070](https://github.com/spring-projects/spring-integration/pull/11070)
- Bump io.micrometer:micrometer-bom from 1.16.5 to 1.16.6 [#11068](https://github.com/spring-projects/spring-integration/pull/11068)
- Bump io.micrometer:micrometer-tracing-bom from 1.6.5 to 1.6.6 [#11066](https://github.com/spring-projects/spring-integration/pull/11066)
- Bump org.springframework.data:spring-data-bom from 2025.1.5 to 2025.1.6 [#11065](https://github.com/spring-projects/spring-integration/pull/11065)
- Bump io.projectreactor:reactor-bom from 2025.0.5 to 2025.0.6 [#11064](https://github.com/spring-projects/spring-integration/pull/11064)
- Bump org.springframework.amqp:spring-amqp-bom from 4.0.3 to 4.0.4 [#11063](https://github.com/spring-projects/spring-integration/pull/11063)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.8 to 4.0.9 [#11033](https://github.com/spring-projects/spring-integration/pull/11033)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.7 to 4.0.8 [#10997](https://github.com/spring-projects/spring-integration/pull/10997)
- Bump org.apache.groovy:groovy-bom from 5.0.5 to 5.0.6 [#10995](https://github.com/spring-projects/spring-integration/pull/10995)
- Bump org.springframework.graphql:spring-graphql from 2.0.2 to 2.0.3 [#10975](https://github.com/spring-projects/spring-integration/pull/10975)
- Bump org.springframework.kafka:spring-kafka-bom from 4.0.4 to 4.0.5 [#10973](https://github.com/spring-projects/spring-integration/pull/10973)
- Bump org.springframework.amqp:spring-amqp-bom from 4.0.2 to 4.0.3 [#10972](https://github.com/spring-projects/spring-integration/pull/10972)
- Bump graalvmVersion from 25.0.2 to 25.0.3 [#10971](https://github.com/spring-projects/spring-integration/pull/10971)
- Bump io.micrometer:micrometer-bom from 1.16.4 to 1.16.5 [#10959](https://github.com/spring-projects/spring-integration/pull/10959)
- Bump io.projectreactor:reactor-bom from 2025.0.4 to 2025.0.5 [#10958](https://github.com/spring-projects/spring-integration/pull/10958)
- Bump org.springframework:spring-framework-bom from 7.0.6 to 7.0.7 [#10957](https://github.com/spring-projects/spring-integration/pull/10957)
- Bump org.springframework.data:spring-data-bom from 2025.1.4 to 2025.1.5 [#10955](https://github.com/spring-projects/spring-integration/pull/10955)
- Bump io.micrometer:micrometer-tracing-bom from 1.6.4 to 1.6.5 [#10954](https://github.com/spring-projects/spring-integration/pull/10954)
- Bump org.mongodb:mongodb-driver-bom from 5.6.4 to 5.6.5 [#10940](https://github.com/spring-projects/spring-integration/pull/10940)
- Bump org.jruby:jruby-complete from 10.0.4.0 to 10.0.5.0 [#10925](https://github.com/spring-projects/spring-integration/pull/10925)
- Bump org.apache.groovy:groovy-bom from 5.0.3 to 5.0.5 [#10919](https://github.com/spring-projects/spring-integration/pull/10919)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.3 to 2.25.4 [#10904](https://github.com/spring-projects/spring-integration/pull/10904)
- Bump protobufVersion from 4.33.5 to 4.33.6 [#10896](https://github.com/spring-projects/spring-integration/pull/10896)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.0.5` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
