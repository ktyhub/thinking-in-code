---
title: "spring-integration v7.2.0-M2"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.2.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "Add Kafka share consumer channel adapter #11413 · Get rid off Apache Derby dependency and usage #11387 · Make Function as CheckedFunction in Mail Java DSL #11280"
---

# spring-integration v7.2.0-M2

## :star: New Features

- Add Kafka share consumer channel adapter [#11413](https://github.com/spring-projects/spring-integration/pull/11413)
- Get rid off Apache Derby dependency and usage [#11387](https://github.com/spring-projects/spring-integration/issues/11387)
- Make `Function<MimeMessage, ?>` as `CheckedFunction` in Mail Java DSL [#11280](https://github.com/spring-projects/spring-integration/issues/11280)
- FullyQualifiedType usage found by new checkstyle check [#11275](https://github.com/spring-projects/spring-integration/issues/11275)

## :lady_beetle: Bug Fixes

- File inbound message sources stay `running` after a failed `start()` [#11420](https://github.com/spring-projects/spring-integration/issues/11420)
- TcpNioServerConnectionFactory.stop() logs "Selector closed" at ERROR on normal stop (regression of INT-3473) [#11418](https://github.com/spring-projects/spring-integration/issues/11418)
- AmqpClientInboundGateway corrupts percent-encoded AMQP 1.0 reply-to queue names [#11414](https://github.com/spring-projects/spring-integration/issues/11414)
- `RedisLockRegistry` and `JdbcLockRegistry`: `lock(Duration)` does not restore the interrupted status [#11409](https://github.com/spring-projects/spring-integration/issues/11409)
- Fix race in FileWritingMessageHandler stop() losing track of an in-flight flush [#11386](https://github.com/spring-projects/spring-integration/pull/11386)
- Restart Apache Commons `Tailer` if its background thread dies [#11381](https://github.com/spring-projects/spring-integration/pull/11381)
- `AdviceMessage.equals()` returns `true` for messages with different payloads [#11377](https://github.com/spring-projects/spring-integration/issues/11377)
- `FileWritingMessageHandler`: a failing `close()` is swallowed and the truncated file is still promoted [#11352](https://github.com/spring-projects/spring-integration/issues/11352)
- The `AbstractMailMessageTransformer` is losing upstream headers [#11281](https://github.com/spring-projects/spring-integration/issues/11281)
- TcpNioClientConnectionFactory.stop() logs "Selector closed" at ERROR on every normal stop due to selector-close/active-flag ordering [#11269](https://github.com/spring-projects/spring-integration/issues/11269)
- ReactiveStreamsConsumer over PollableChannel can silently lose a message on stop() [#11262](https://github.com/spring-projects/spring-integration/issues/11262)

## :notebook_with_decorative_cover: Documentation

- Polish Change History Section [#11402](https://github.com/spring-projects/spring-integration/pull/11402)
- chore: fix a typo in a docs example [#11397](https://github.com/spring-projects/spring-integration/pull/11397)
- Update JDBC Lock Registry links in Change History [#11366](https://github.com/spring-projects/spring-integration/pull/11366)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.8.0-M2 [#11465](https://github.com/spring-projects/spring-integration/issues/11465)
- Upgrade micrometer to 1.18.0-M2 [#11464](https://github.com/spring-projects/spring-integration/issues/11464)
- Upgrade reactor to 2026.0.0-M2 [#11463](https://github.com/spring-projects/spring-integration/issues/11463)
- Upgrade spring-amqp to 4.2.0-M2 [#11462](https://github.com/spring-projects/spring-integration/issues/11462)
- Upgrade spring-data-bom to 2026.1.0-M2 [#11461](https://github.com/spring-projects/spring-integration/issues/11461)
- Upgrade spring-graphql to 2.1.0-M1 [#11460](https://github.com/spring-projects/spring-integration/issues/11460)
- Upgrade spring-kafka to 4.2.0-M2 [#11459](https://github.com/spring-projects/spring-integration/issues/11459)
- Upgrade spring-security to 7.2.0-M2 [#11458](https://github.com/spring-projects/spring-integration/issues/11458)
- Upgrade spring-framework to 7.1.0-M2 [#11457](https://github.com/spring-projects/spring-integration/issues/11457)
- Upgrade spring-ws to 5.1.0-M1 [#11456](https://github.com/spring-projects/spring-integration/issues/11456)
- Bump debeziumVersion from 3.6.2.Final to 3.6.3.Final [#11450](https://github.com/spring-projects/spring-integration/pull/11450)
- Bump com.google.protobuf:protobuf-bom from 4.36.1 to 4.36.2 [#11449](https://github.com/spring-projects/spring-integration/pull/11449)
- Bump org.mongodb:mongodb-driver-bom from 5.11.1 to 5.12.0 [#11447](https://github.com/spring-projects/spring-integration/pull/11447)
- Bump graalvmVersion from 25.0.4.1.1 to 25.2.4 [#11444](https://github.com/spring-projects/spring-integration/pull/11444)
- Bump org.apache.camel:camel-bom from 4.22.0 to 4.22.1 [#11443](https://github.com/spring-projects/spring-integration/pull/11443)
- Bump org.apache.groovy:groovy-bom from 5.0.8 to 5.1.2 [#11442](https://github.com/spring-projects/spring-integration/pull/11442)
- Bump org.apache.artemis:artemis-bom from 2.55.0 to 2.57.0 [#11441](https://github.com/spring-projects/spring-integration/pull/11441)
- Bump io.grpc:grpc-bom from 1.83.1 to 1.84.0 [#11440](https://github.com/spring-projects/spring-integration/pull/11440)
- Bump org.mongodb:mongodb-driver-bom from 5.9.2 to 5.11.1 [#11439](https://github.com/spring-projects/spring-integration/pull/11439)
- Bump io.lettuce:lettuce-core from 7.6.0.RELEASE to 7.7.0.RELEASE [#11436](https://github.com/spring-projects/spring-integration/pull/11436)
- Bump org.apache.camel:camel-bom from 4.21.0 to 4.22.0 [#11434](https://github.com/spring-projects/spring-integration/pull/11434)
- Bump com.h2database:h2 from 2.4.240 to 2.5.250 [#11433](https://github.com/spring-projects/spring-integration/pull/11433)
- Bump com.google.protobuf:protobuf-bom from 4.35.1 to 4.36.1 [#11432](https://github.com/spring-projects/spring-integration/pull/11432)
- Bump kotlinVersion from 2.4.10 to 2.4.20 [#11416](https://github.com/spring-projects/spring-integration/pull/11416)
- Bump org.checkerframework:checker-qual from 4.2.2 to 4.2.3 [#11407](https://github.com/spring-projects/spring-integration/pull/11407)
- Bump debeziumVersion from 3.6.1.Final to 3.6.2.Final [#11405](https://github.com/spring-projects/spring-integration/pull/11405)
- Bump com.github.spotbugs:spotbugs-annotations from 4.10.3 to 4.10.4 [#11373](https://github.com/spring-projects/spring-integration/pull/11373)
- Update all Spring Dependencies except SF [#11367](https://github.com/spring-projects/spring-integration/pull/11367)
- Bump tools.jackson:jackson-bom from 3.2.1 to 3.2.2 [#11360](https://github.com/spring-projects/spring-integration/pull/11360)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2 [#11358](https://github.com/spring-projects/spring-integration/pull/11358)
- Bump org.apache.avro:avro from 1.12.1 to 1.12.2 [#11355](https://github.com/spring-projects/spring-integration/pull/11355)
- Bump gradle-wrapper from 9.7.0 to 9.7.1 [#11354](https://github.com/spring-projects/spring-integration/pull/11354)
- Bump org.mongodb:mongodb-driver-bom from 5.9.1 to 5.9.2 [#11272](https://github.com/spring-projects/spring-integration/pull/11272)
- Bump org.codelibs:jcifs from 3.0.2 to 3.0.3 [#11271](https://github.com/spring-projects/spring-integration/pull/11271)
- Downgrade to GraalVM  25.0.4.1.1; Re-enable Jsr223ServiceActivatorTests [#11261](https://github.com/spring-projects/spring-integration/issues/11261)

## :warning: Attention Required

- Jms `MessageConverter`s  now return `null` when converting an incoming JMS `Message` with no payload. 
The `AbstractJmsChannel` treats it as a conversion failure and throws a `MessageConversionException` rather than discarding the message. [#11351](https://github.com/spring-projects/spring-integration/pull/11351)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@ngocnhan-tran1996 and @robert-gurol-ps

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.2.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
