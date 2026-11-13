---
title: "spring-integration v7.1.2"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.1.2"
published: "2026-10-22"
type: "patch"
lang: "en"
---

# spring-integration v7.1.2

## :lady_beetle: Bug Fixes

- Remove broken stack trace from HttpRequestHandlingController errors [#11516](https://github.com/spring-projects/spring-integration/issues/11516)
- Reject unconvertible messages in AMQP 1.0 inbound endpoints [#11501](https://github.com/spring-projects/spring-integration/issues/11501)
- PropertiesPersistingMetadataStore does not retry flush after an IOException [#11498](https://github.com/spring-projects/spring-integration/issues/11498)
- File inbound message sources stay `running` after a failed `start()` [#11426](https://github.com/spring-projects/spring-integration/issues/11426)
- TcpNioServerConnectionFactory.stop() logs "Selector closed" at ERROR on normal stop (regression of INT-3473) [#11424](https://github.com/spring-projects/spring-integration/issues/11424)
- AmqpClientInboundGateway corrupts percent-encoded AMQP 1.0 reply-to queue names [#11422](https://github.com/spring-projects/spring-integration/issues/11422)
- `RedisLockRegistry` and `JdbcLockRegistry`: `lock(Duration)` does not restore the interrupted status [#11411](https://github.com/spring-projects/spring-integration/issues/11411)
- TcpNioClientConnectionFactory.stop() logs "Selector closed" at ERROR on every normal stop due to selector-close/active-flag ordering [#11398](https://github.com/spring-projects/spring-integration/issues/11398)
- `FileWritingMessageHandler`: a failing `close()` is swallowed and the truncated file is still promoted [#11394](https://github.com/spring-projects/spring-integration/issues/11394)
- ReactiveStreamsConsumer over PollableChannel can silently lose a message on stop() [#11384](https://github.com/spring-projects/spring-integration/issues/11384)
- Restart Apache Commons `Tailer` if its background thread dies [#11382](https://github.com/spring-projects/spring-integration/issues/11382)
- `AdviceMessage.equals()` returns `true` for messages with different payloads [#11379](https://github.com/spring-projects/spring-integration/issues/11379)
- The `AbstractMailMessageTransformer` is losing upstream headers [#11375](https://github.com/spring-projects/spring-integration/issues/11375)

## :notebook_with_decorative_cover: Documentation

- Improve docs for security concerns of the `SerializingHttpMessageConverter` [#11484](https://github.com/spring-projects/spring-integration/issues/11484)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.7.2 [#11596](https://github.com/spring-projects/spring-integration/issues/11596)
- Upgrade micrometer to 1.17.2 [#11594](https://github.com/spring-projects/spring-integration/issues/11594)
- Upgrade reactor to 2025.0.8 [#11590](https://github.com/spring-projects/spring-integration/issues/11590)
- Upgrade spring-amqp to 4.1.2 [#11587](https://github.com/spring-projects/spring-integration/issues/11587)
- Upgrade spring-data-bom to 2026.0.2 [#11583](https://github.com/spring-projects/spring-integration/issues/11583)
- Upgrade spring-graphql to 2.0.6 [#11580](https://github.com/spring-projects/spring-integration/issues/11580)
- Upgrade spring-kafka to 4.1.2 [#11577](https://github.com/spring-projects/spring-integration/issues/11577)
- Upgrade spring-security to 7.1.2 [#11574](https://github.com/spring-projects/spring-integration/issues/11574)
- Upgrade spring-framework to 7.0.10 [#11571](https://github.com/spring-projects/spring-integration/issues/11571)
- Upgrade spring-ws to 5.0.3 [#11568](https://github.com/spring-projects/spring-integration/issues/11568)
- Bump kotlinVersion from 2.4.20 to 2.4.21 [#11525](https://github.com/spring-projects/spring-integration/pull/11525)
- Bump org.codelibs:jcifs from 3.0.3 to 3.0.4 [#11512](https://github.com/spring-projects/spring-integration/pull/11512)
- Bump org.jruby:jruby-complete from 10.1.1.0 to 10.1.2.0 [#11479](https://github.com/spring-projects/spring-integration/pull/11479)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.2 to 2.22.3 [#11478](https://github.com/spring-projects/spring-integration/pull/11478)
- Bump tools.jackson:jackson-bom from 3.1.6 to 3.1.7 [#11475](https://github.com/spring-projects/spring-integration/pull/11475)
- Bump graalvmVersion from 25.0.4.1 to 25.0.4.1.1 [#11438](https://github.com/spring-projects/spring-integration/pull/11438)
- Bump kotlinVersion from 2.4.10 to 2.4.20 [#11417](https://github.com/spring-projects/spring-integration/pull/11417)
- Bump org.checkerframework:checker-qual from 4.2.2 to 4.2.3 [#11408](https://github.com/spring-projects/spring-integration/pull/11408)
- Bump tools.jackson:jackson-bom from 3.1.5 to 3.1.6 [#11364](https://github.com/spring-projects/spring-integration/pull/11364)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2 [#11363](https://github.com/spring-projects/spring-integration/pull/11363)
- Bump org.apache.avro:avro from 1.12.1 to 1.12.2 [#11361](https://github.com/spring-projects/spring-integration/pull/11361)
- Bump graalvmVersion from 25.0.4 to 25.0.4.1 [#11359](https://github.com/spring-projects/spring-integration/pull/11359)
- Bump org.codelibs:jcifs from 3.0.2 to 3.0.3 [#11274](https://github.com/spring-projects/spring-integration/pull/11274)

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.1.2` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
