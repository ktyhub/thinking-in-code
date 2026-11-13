---
title: "spring-integration v7.1.0"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.1.0"
published: "2026-06-10"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-integration v7.1.0

## :star: New Features

- Add message selector based on header value matching patterns [#11092](https://github.com/spring-projects/spring-integration/issues/11092)
- Revise tests using `IntegrationRegistrar` to register infra beans [#11028](https://github.com/spring-projects/spring-integration/pull/11028)
- Allow skipping messaging annotation post processor registration in pure DSL scenarios [#11024](https://github.com/spring-projects/spring-integration/issues/11024)
- polish constructors in `ExpressionEvaluatingMessageProcessor` [#11002](https://github.com/spring-projects/spring-integration/pull/11002)
- Disable `allowCredentials` in the `CrossOrigin` and introduce `originPatterns` [#10988](https://github.com/spring-projects/spring-integration/issues/10988)
- Add message\_store pattern in `IntegrationPatternType` [#10978](https://github.com/spring-projects/spring-integration/pull/10978)

## :lady_beetle: Bug Fixes

- Prevent file writing outside output directory [#11095](https://github.com/spring-projects/spring-integration/issues/11095)
- The `RedisLockRegistry` unlock race condition on the interrupted thread [#11049](https://github.com/spring-projects/spring-integration/issues/11049)
- Prevent eviction of held locks from Redis registry [#11044](https://github.com/spring-projects/spring-integration/issues/11044)
- The `ControlBusCommandRegistry.controlBusCommands` must be a `ConcurrentHashMap` [#11042](https://github.com/spring-projects/spring-integration/issues/11042)
- Prevent eviction of held locks from JDBC registry [#11041](https://github.com/spring-projects/spring-integration/issues/11041)
- Do not propage server error to the client from the `GrpcInboundGateway` [#11040](https://github.com/spring-projects/spring-integration/issues/11040)
- `ZookeeperMetadataStore.replace()` breaks the CAS logic [#11013](https://github.com/spring-projects/spring-integration/issues/11013)
- Mqttv5PahoMessageHandler fails due to incorrect MessageConverter.fromMessage usage [#11011](https://github.com/spring-projects/spring-integration/issues/11011)
- Mqttv5PahoMessageDrivenChannelAdapter ignores payloadType due to incorrect MessageConverter.toMessage usage [#10990](https://github.com/spring-projects/spring-integration/issues/10990)

## :notebook_with_decorative_cover: Documentation

- Fix navigation link for `Configuration` section [#11057](https://github.com/spring-projects/spring-integration/pull/11057)
- Fix typo in java-runtime-flows.adoc [#11021](https://github.com/spring-projects/spring-integration/pull/11021)
- Fix misleading Javadoc for messaging annotation post-processors [#11020](https://github.com/spring-projects/spring-integration/pull/11020)
- Fix typo in message ID generation section [#11014](https://github.com/spring-projects/spring-integration/pull/11014)
- Documentation Enhancement: Describe point to point vs Centralized ESB [#2886](https://github.com/spring-projects/spring-integration/issues/2886)

## :hammer: Dependency Upgrades

- Update RC and SNAPSHOT to release versions [#11089](https://github.com/spring-projects/spring-integration/pull/11089)
- Bump io.micrometer:micrometer-tracing-bom from 1.7.0-RC1 to 1.7.0 [#11078](https://github.com/spring-projects/spring-integration/pull/11078)
- Bump io.projectreactor:reactor-bom from 2025.0.5 to 2025.0.6 [#11076](https://github.com/spring-projects/spring-integration/pull/11076)
- Bump cloudEventsVersion from 4.1.0 to 4.1.1 [#11071](https://github.com/spring-projects/spring-integration/pull/11071)
- Update project dependency versions [#11050](https://github.com/spring-projects/spring-integration/pull/11050)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.8 to 4.0.9 [#11037](https://github.com/spring-projects/spring-integration/pull/11037)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.3 to 2.21.4 [#11035](https://github.com/spring-projects/spring-integration/pull/11035)
- Bump tools.jackson:jackson-bom from 3.1.3 to 3.1.4 [#11034](https://github.com/spring-projects/spring-integration/pull/11034)
- Bump org.mongodb:mongodb-driver-bom from 5.7.0 to 5.7.1 [#11032](https://github.com/spring-projects/spring-integration/pull/11032)
- Bump com.google.protobuf:protobuf-bom from 4.34.1 to 4.34.2 [#11019](https://github.com/spring-projects/spring-integration/pull/11019)
- Bump debeziumVersion from 3.5.0.Final to 3.5.1.Final [#11006](https://github.com/spring-projects/spring-integration/pull/11006)
- Bump io.lettuce:lettuce-core from 7.5.1.RELEASE to 7.5.2.RELEASE [#11005](https://github.com/spring-projects/spring-integration/pull/11005)
- Bump com.sun.xml.bind:jaxb-impl from 4.0.7 to 4.0.8 [#11000](https://github.com/spring-projects/spring-integration/pull/11000)
- Bump org.apache.groovy:groovy-bom from 5.0.5 to 5.0.6 [#10996](https://github.com/spring-projects/spring-integration/pull/10996)
- Bump org.mongodb:mongodb-driver-bom from 5.7.0-beta1 to 5.7.0 [#10987](https://github.com/spring-projects/spring-integration/pull/10987)
- Bump tools.jackson:jackson-bom from 3.1.2 to 3.1.3 [#10986](https://github.com/spring-projects/spring-integration/pull/10986)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.2 to 2.21.3 [#10985](https://github.com/spring-projects/spring-integration/pull/10985)
- Bump kotlinVersion from 2.3.20 to 2.3.21 [#10981](https://github.com/spring-projects/spring-integration/pull/10981)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@mjd507 and @DragonFSKY

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.1.0` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
