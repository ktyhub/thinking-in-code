---
title: "spring-kafka v4.0.6"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.0.6"
published: "2026-06-09"
type: "patch"
lang: "en"
summary: "make the method setBackOffFunction work for the batch processing as well #4473"
---

# spring-kafka v4.0.6

## :star: New Features

- make the method setBackOffFunction work for the batch processing as well [#4473](https://github.com/spring-projects/spring-kafka/issues/4473)

## :lady_beetle: Bug Fixes

- Require exact package match for trusted header types [#4497](https://github.com/spring-projects/spring-kafka/issues/4497)
- Harden retry topic headers decoding in Spring Kafka [#4495](https://github.com/spring-projects/spring-kafka/issues/4495)
- Fix unbounded cache in `DelegatingDeserializer` [#4491](https://github.com/spring-projects/spring-kafka/issues/4491)
- `@RetryableTopic`: built-in DLT logging handler fails with "No Acknowledgment available" on 4.0 (works on 3.3.x) [#4474](https://github.com/spring-projects/spring-kafka/issues/4474)
- Different behavior for value serializer mappings for different classloaders [#4461](https://github.com/spring-projects/spring-kafka/issues/4461)
- NPE when properties are not defined for StreamsBuilderFactoryBean [#4454](https://github.com/spring-projects/spring-kafka/issues/4454)
- DefaultAfterRollbackProcessor for batch-listeners consuming ConsumerRecords doesn't seek consumer [#4452](https://github.com/spring-projects/spring-kafka/issues/4452)
- Inconsistent handling of non-string values in Properties argument passed to DefaultConsumerFactory::createKafkaConsumer [#4421](https://github.com/spring-projects/spring-kafka/issues/4421)

## :notebook_with_decorative_cover: Documentation

- Spring Kafka documentation does not mention `spring-boot-starter-kafka` requirement for Spring Boot 4 [#4464](https://github.com/spring-projects/spring-kafka/issues/4464)

## :hammer: Dependency Upgrades

- Bump org.springframework.data:spring-data-bom from 2025.1.5 to 2025.1.6 [#4488](https://github.com/spring-projects/spring-kafka/pull/4488)
- Bump org.springframework:spring-framework-bom from 7.0.7 to 7.0.8 [#4478](https://github.com/spring-projects/spring-kafka/pull/4478)
- Bump io.micrometer:micrometer-tracing-bom from 1.6.5 to 1.6.6 [#4477](https://github.com/spring-projects/spring-kafka/pull/4477)
- Bump io.projectreactor:reactor-bom from 2025.0.5 to 2025.0.6 [#4476](https://github.com/spring-projects/spring-kafka/pull/4476)
- Bump io.micrometer:micrometer-bom from 1.16.5 to 1.16.6 [#4475](https://github.com/spring-projects/spring-kafka/pull/4475)
- Bump org.slf4j:slf4j-api from 2.0.17 to 2.0.18 [#4446](https://github.com/spring-projects/spring-kafka/pull/4446)

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.0.6` · 2026-06-09 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
