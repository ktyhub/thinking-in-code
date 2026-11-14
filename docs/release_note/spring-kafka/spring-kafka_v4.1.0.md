---
title: "spring-kafka v4.1.0"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.1.0"
published: "2026-06-09"
type: "minor"
lang: "en"
summary: "make the method setBackOffFunction work for the batch processing as well #4455"
---

# spring-kafka v4.1.0

## :star: New Features

- make the method setBackOffFunction work for the batch processing as well [#4455](https://github.com/spring-projects/spring-kafka/pull/4455)

## :lady_beetle: Bug Fixes

- Require exact package match for trusted header types [#4496](https://github.com/spring-projects/spring-kafka/issues/4496)
- Harden retry topic headers decoding in Spring Kafka [#4493](https://github.com/spring-projects/spring-kafka/issues/4493)
- Fix unbounded cache in `DelegatingDeserializer` [#4489](https://github.com/spring-projects/spring-kafka/issues/4489)
- `@RetryableTopic`: built-in DLT logging handler fails with "No Acknowledgment available" on 4.0 (works on 3.3.x) [#4468](https://github.com/spring-projects/spring-kafka/issues/4468)
- Suspend `@KafkaListener` re-delivers a failing record without bound after `DefaultErrorHandler` retries are exhausted [#4465](https://github.com/spring-projects/spring-kafka/issues/4465)
- KafkaMessageListenerContainer for ackMode=COUNT\_TIME doesn't check ackTime [#4444](https://github.com/spring-projects/spring-kafka/issues/4444)
- Different behavior for value serializer mappings for different classloaders [#4442](https://github.com/spring-projects/spring-kafka/issues/4442)
- DefaultAfterRollbackProcessor for batch-listeners consuming ConsumerRecords doesn't seek consumer [#4439](https://github.com/spring-projects/spring-kafka/issues/4439)
- NPE when properties are not defined for StreamsBuilderFactoryBean [#4434](https://github.com/spring-projects/spring-kafka/issues/4434)
- Incorrect key, value, and headers passed to `KafkaStreamsDeadLetterDestinationResolver` [#4430](https://github.com/spring-projects/spring-kafka/issues/4430)
- Inconsistent handling of non-string values in Properties argument passed to DefaultConsumerFactory::createKafkaConsumer [#4384](https://github.com/spring-projects/spring-kafka/issues/4384)

## :notebook_with_decorative_cover: Documentation

- `BatchListenerFailedException` silently commits offsets for unprocessed records in `BatchMessageListener` [#4436](https://github.com/spring-projects/spring-kafka/issues/4436)
- Polish `README.md` and `CONTRIBUTING.adoc` [#4184](https://github.com/spring-projects/spring-kafka/pull/4184)

## :hammer: Dependency Upgrades

- Bump io.projectreactor:reactor-bom from 2025.0.5 to 2025.0.6 [#4485](https://github.com/spring-projects/spring-kafka/pull/4485)
- Bump org.springframework:spring-framework-bom from 7.0.7 to 7.0.8 [#4481](https://github.com/spring-projects/spring-kafka/pull/4481)
- Bump io.micrometer:micrometer-tracing-bom from 1.7.0-SNAPSHOT to 1.7.0 [#4480](https://github.com/spring-projects/spring-kafka/pull/4480)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.3 to 2.21.4 [#4458](https://github.com/spring-projects/spring-kafka/pull/4458)
- Bump tools.jackson:jackson-bom from 3.1.3 to 3.1.4 [#4457](https://github.com/spring-projects/spring-kafka/pull/4457)
- Bump kafkaVersion from 4.2.0 to 4.2.1 [#4456](https://github.com/spring-projects/spring-kafka/pull/4456)
- Bump org.slf4j:slf4j-api from 2.0.17 to 2.0.18 [#4445](https://github.com/spring-projects/spring-kafka/pull/4445)
- Bump tools.jackson:jackson-bom from 3.1.2 to 3.1.3 [#4438](https://github.com/spring-projects/spring-kafka/pull/4438)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.2 to 2.21.3 [#4437](https://github.com/spring-projects/spring-kafka/pull/4437)
- Bump kotlinVersion from 2.3.20 to 2.3.21 [#4426](https://github.com/spring-projects/spring-kafka/pull/4426)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@LeosBitto and @ngocnhan-tran1996

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.1.0` · 2026-06-09 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
