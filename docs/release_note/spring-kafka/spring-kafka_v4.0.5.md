---
title: "spring-kafka v4.0.5"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.0.5"
published: "2026-04-20"
type: "patch"
lang: "en"
summary: "Async Processing (and out of order commits) with FilteringMessageListenerAdapter #4414 · ShareKafkaMessageListenerContainer.doStart() does not await consumer thread startup #4400"
---

# spring-kafka v4.0.5

## :lady_beetle: Bug Fixes

- Async Processing (and out of order commits) with FilteringMessageListenerAdapter [#4414](https://github.com/spring-projects/spring-kafka/issues/4414)
- ShareKafkaMessageListenerContainer.doStart() does not await consumer thread startup [#4400](https://github.com/spring-projects/spring-kafka/issues/4400)
- Fix immutability StreamsBuilderFactory properties [#4389](https://github.com/spring-projects/spring-kafka/issues/4389)
- Missing JSpecify `@Nullable` annotation for consumer & producer factories [#4368](https://github.com/spring-projects/spring-kafka/issues/4368)

## :hammer: Dependency Upgrades

- Bump org.springframework:spring-framework-bom from 7.0.6 to 7.0.7 [#4413](https://github.com/spring-projects/spring-kafka/pull/4413)
- Bump io.projectreactor:reactor-bom from 2025.0.4 to 2025.0.5 [#4412](https://github.com/spring-projects/spring-kafka/pull/4412)
- Bump org.springframework.data:spring-data-bom from 2025.1.4 to 2025.1.5 [#4411](https://github.com/spring-projects/spring-kafka/pull/4411)
- Bump io.micrometer:micrometer-tracing-bom from 1.6.4 to 1.6.5 [#4408](https://github.com/spring-projects/spring-kafka/pull/4408)
- Bump io.micrometer:micrometer-bom from 1.16.4 to 1.16.5 [#4406](https://github.com/spring-projects/spring-kafka/pull/4406)
- Bump log4jVersion from 2.25.3 to 2.25.4 [#4386](https://github.com/spring-projects/spring-kafka/pull/4386)
- Bump kafkaVersion from 4.1.1 to 4.1.2 [#4363](https://github.com/spring-projects/spring-kafka/pull/4363)

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.0.5` · 2026-04-20 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
