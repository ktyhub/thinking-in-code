---
title: "spring-integration v7.1.0-RC1"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.1.0-RC1"
published: "2026-04-21"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-integration v7.1.0-RC1

## :star: New Features

- GH-8108: Add DSL for Redis Queue Gateways. [#10944](https://github.com/spring-projects/spring-integration/pull/10944)
- GH-8108: Add DSL for Redis Outbound Command Gateway. [#10941](https://github.com/spring-projects/spring-integration/pull/10941)
- Add DSL for Redis Store channel adapters. [#10921](https://github.com/spring-projects/spring-integration/pull/10921)
- Add DSL for Redis Queue channel adapters. [#10911](https://github.com/spring-projects/spring-integration/pull/10911)
- Add dsl for redis inbound/outbound channel adapter. [#10905](https://github.com/spring-projects/spring-integration/pull/10905)
- Refactor RedisLockRegistry to leverage Redis 8.4 native CAS/CAD commands [#10782](https://github.com/spring-projects/spring-integration/issues/10782)

## :lady_beetle: Bug Fixes

- ServerWebSocketContainer.registerWebSocketHandlers() uses setAllowedOrigins() instead of setAllowedOriginPatterns(), causing incompatibility with allowCredentials=true in Spring Framework 7 [#10931](https://github.com/spring-projects/spring-integration/issues/10931)
- JDBC lock repository fails after entering daylight savings [#10906](https://github.com/spring-projects/spring-integration/issues/10906)
- Docs: Fix schema link for ftp/sftp/smb [#10898](https://github.com/spring-projects/spring-integration/pull/10898)

## :notebook_with_decorative_cover: Documentation

- Fix SessionFactory Code example for ftp/sftp. [#10888](https://github.com/spring-projects/spring-integration/pull/10888)

## :hammer: Dependency Upgrades

- Bump org.springframework.graphql:spring-graphql from 2.0.2 to 2.0.3 [#10968](https://github.com/spring-projects/spring-integration/pull/10968)
- Bump graalvmVersion from 25.0.2 to 25.0.3 [#10966](https://github.com/spring-projects/spring-integration/pull/10966)
- Bump io.projectreactor:reactor-bom from 2025.0.4 to 2025.0.5 [#10956](https://github.com/spring-projects/spring-integration/pull/10956)
- Bump org.springframework:spring-framework-bom from 7.0.6 to 7.0.7 [#10950](https://github.com/spring-projects/spring-integration/pull/10950)
- Bump cloudEventsVersion from 4.0.1 to 4.0.2 [#10939](https://github.com/spring-projects/spring-integration/pull/10939)
- Bump tools.jackson:jackson-bom from 3.1.1 to 3.1.2 [#10936](https://github.com/spring-projects/spring-integration/pull/10936)
- Bump org.jruby:jruby-complete from 10.0.4.0 to 10.0.5.0 [#10926](https://github.com/spring-projects/spring-integration/pull/10926)
- Bump org.checkerframework:checker-qual from 3.54.0 to 3.54.1 [#10920](https://github.com/spring-projects/spring-integration/pull/10920)
- Bump io.lettuce:lettuce-core from 7.5.0.RELEASE to 7.5.1.RELEASE [#10918](https://github.com/spring-projects/spring-integration/pull/10918)
- Bump org.apache.groovy:groovy-bom from 5.0.4 to 5.0.5 [#10917](https://github.com/spring-projects/spring-integration/pull/10917)
- Bump debeziumVersion from 3.4.2.Final to 3.4.3.Final [#10916](https://github.com/spring-projects/spring-integration/pull/10916)
- Bump tools.jackson:jackson-bom from 3.1.0 to 3.1.1 [#10903](https://github.com/spring-projects/spring-integration/pull/10903)
- Bump org.apache.camel:camel-bom from 4.18.0 to 4.18.1 [#10902](https://github.com/spring-projects/spring-integration/pull/10902)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.3 to 2.25.4 [#10901](https://github.com/spring-projects/spring-integration/pull/10901)
- Bump gradle-wrapper from 9.4.0 to 9.4.1 [#10897](https://github.com/spring-projects/spring-integration/pull/10897)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.1 to 2.21.2 [#10895](https://github.com/spring-projects/spring-integration/pull/10895)
- Bump protobufVersion from 4.34.0 to 4.34.1 [#10894](https://github.com/spring-projects/spring-integration/pull/10894)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs and @mjd507

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.1.0-RC1` · 2026-04-21 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
