---
title: "spring-kafka v4.1.0-RC1"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.1.0-RC1"
published: "2026-04-20"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-kafka v4.1.0-RC1

## :star: New Features

- Add AcknowledgementCommitCallback support for async share consumer commits [#4380](https://github.com/spring-projects/spring-kafka/issues/4380)
- Introduce `ShareAckMode` enum for share consumers [#4376](https://github.com/spring-projects/spring-kafka/pull/4376)
- Expose `group.protocol` configuration for Kafka Streams server-side rebalance (KIP-1071) [#4329](https://github.com/spring-projects/spring-kafka/issues/4329)
- Expose native Kafka Streams DLQ configuration (KIP-1034) [#4328](https://github.com/spring-projects/spring-kafka/issues/4328)
- Add stop and failure lifecycle events to share consumer container [#4327](https://github.com/spring-projects/spring-kafka/issues/4327)
- Verify `share.acquire.mode` (KIP-1206) works through Spring's config model [#4326](https://github.com/spring-projects/spring-kafka/issues/4326)
- Add async commit option to share consumer container [#4324](https://github.com/spring-projects/spring-kafka/issues/4324)

## :lady_beetle: Bug Fixes

- Fix immutability StreamsBuilderFactory properties [#4382](https://github.com/spring-projects/spring-kafka/pull/4382)
- Async Processing (and out of order commits) with FilteringMessageListenerAdapter [#4377](https://github.com/spring-projects/spring-kafka/issues/4377)
- ShareKafkaMessageListenerContainer.doStart() does not await consumer thread startup [#4357](https://github.com/spring-projects/spring-kafka/issues/4357)
- Missing JSpecify `@Nullable` annotation for consumer & producer factories [#4355](https://github.com/spring-projects/spring-kafka/issues/4355)

## :notebook_with_decorative_cover: Documentation

- Improve description of messageListener in container properties documentation [#4417](https://github.com/spring-projects/spring-kafka/pull/4417)

## :hammer: Dependency Upgrades

- Bump io.projectreactor:reactor-bom from 2025.0.4 to 2025.0.5 [#4409](https://github.com/spring-projects/spring-kafka/pull/4409)
- Bump tools.jackson:jackson-bom from 3.1.1 to 3.1.2 [#4407](https://github.com/spring-projects/spring-kafka/pull/4407)
- Bump org.springframework:spring-framework-bom from 7.0.6 to 7.0.7 [#4403](https://github.com/spring-projects/spring-kafka/pull/4403)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.3 to 2.25.4 [#4387](https://github.com/spring-projects/spring-kafka/pull/4387)
- Bump tools.jackson:jackson-bom from 3.1.0 to 3.1.1 [#4375](https://github.com/spring-projects/spring-kafka/pull/4375)
- Bump gradle-wrapper from 9.4.0 to 9.4.1 [#4364](https://github.com/spring-projects/spring-kafka/pull/4364)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.1 to 2.21.2 [#4361](https://github.com/spring-projects/spring-kafka/pull/4361)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@maxwell-balla, @Tarte12, @zooo-code, @loicgreffier, @Arbaz4Sayyad, @Gautam-aman, @jad837

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.1.0-RC1` · 2026-04-20 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
