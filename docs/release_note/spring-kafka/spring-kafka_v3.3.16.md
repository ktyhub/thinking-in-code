---
title: "spring-kafka v3.3.16"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v3.3.16"
published: "2026-06-09"
type: "patch"
lang: "en"
---

# spring-kafka v3.3.16

## :star: New Features

- make the method setBackOffFunction work for the batch processing as well [#4472](https://github.com/spring-projects/spring-kafka/issues/4472)

## :lady_beetle: Bug Fixes

- Require exact package match for trusted header types [#4498](https://github.com/spring-projects/spring-kafka/issues/4498)
- Harden retry topic headers decoding in Spring Kafka [#4494](https://github.com/spring-projects/spring-kafka/issues/4494)
- Fix unbounded cache in `DelegatingDeserializer` [#4492](https://github.com/spring-projects/spring-kafka/issues/4492)
- Different behavior for value serializer mappings for different classloaders [#4462](https://github.com/spring-projects/spring-kafka/issues/4462)
- NPE when properties are not defined for StreamsBuilderFactoryBean [#4453](https://github.com/spring-projects/spring-kafka/issues/4453)
- Inconsistent handling of non-string values in Properties argument passed to DefaultConsumerFactory::createKafkaConsumer [#4420](https://github.com/spring-projects/spring-kafka/issues/4420)

## :hammer: Dependency Upgrades

- Bump org.springframework.retry:spring-retry from 2.0.12 to 2.0.13 [#4484](https://github.com/spring-projects/spring-kafka/pull/4484)
- Bump org.springframework:spring-framework-bom from 6.2.18 to 6.2.19 [#4482](https://github.com/spring-projects/spring-kafka/pull/4482)
- Bump io.projectreactor:reactor-bom from 2024.0.17 to 2024.0.18 [#4479](https://github.com/spring-projects/spring-kafka/pull/4479)
- Bump com.fasterxml.jackson:jackson-bom from 2.18.7 to 2.18.8 [#4459](https://github.com/spring-projects/spring-kafka/pull/4459)
- Bump gradle-wrapper from 8.14.4 to 8.14.5 [#4441](https://github.com/spring-projects/spring-kafka/pull/4441)
- Bump com.fasterxml.jackson:jackson-bom from 2.18.6 to 2.18.7 [#4424](https://github.com/spring-projects/spring-kafka/pull/4424)

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v3.3.16` · 2026-06-09 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v3.3.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
