---
title: "spring-kafka v4.2.0-M2"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.2.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "AbstractKafkaListenerContainerFactory should allow to configure a KafkaAdmin #4654 · Apply nullability to Deserializer subclass #4653 · Apply nullability annotations #4648 · Apply nullability to Serializer subclass #4647"
---

# spring-kafka v4.2.0-M2

## :star: New Features

- AbstractKafkaListenerContainerFactory should allow to configure a KafkaAdmin [#4654](https://github.com/spring-projects/spring-kafka/issues/4654)
- Apply nullability to `Deserializer` subclass [#4653](https://github.com/spring-projects/spring-kafka/pull/4653)
- Apply nullability annotations [#4648](https://github.com/spring-projects/spring-kafka/pull/4648)
- Apply nullability to `Serializer` subclass [#4647](https://github.com/spring-projects/spring-kafka/pull/4647)
- Async `@KafkaListener` (CompletableFuture / Mono / suspend): in-flight work outlives container stop and races downstream resources shutdown [#4519](https://github.com/spring-projects/spring-kafka/issues/4519)
- Add message converter support for ShareKafkaListenerContainerFactory [#4394](https://github.com/spring-projects/spring-kafka/issues/4394)
- Expose `ShareConsumer.clientInstanceId(Duration)` for KIP-714 telemetry [#4325](https://github.com/spring-projects/spring-kafka/issues/4325)
- Add Container start, stop count metric [#4277](https://github.com/spring-projects/spring-kafka/issues/4277)
- ConsumerRecordRecoverer failures cause infinite reprocessing [#4272](https://github.com/spring-projects/spring-kafka/issues/4272)

## :lady_beetle: Bug Fixes

- Apply the bootstrap servers supplier in DefaultShareConsumerFactory [#4698](https://github.com/spring-projects/spring-kafka/pull/4698)
- Suspend `@KafkaListener`: consumer permanently stops fetching partitions it retains across a rebalance [#4687](https://github.com/spring-projects/spring-kafka/issues/4687)
- Drain queued share acknowledgments on stop [#4679](https://github.com/spring-projects/spring-kafka/pull/4679)
- Async listener reply success path never reports failures to the receiver Observation [#4677](https://github.com/spring-projects/spring-kafka/issues/4677)
- Copy the type resolver in copyWithType [#4662](https://github.com/spring-projects/spring-kafka/pull/4662)
- ShareKafkaMessageListenerContainer NPEs at start() when built from a topic pattern or partition list [#4660](https://github.com/spring-projects/spring-kafka/issues/4660)
- Do not validate a null deserialized value [#4651](https://github.com/spring-projects/spring-kafka/pull/4651)
- Configure the default delegate in DelegatingByTopicSerialization [#4650](https://github.com/spring-projects/spring-kafka/pull/4650)
- ShareConsumerAcknowledgment state can regress from a terminal type to RENEW [#4634](https://github.com/spring-projects/spring-kafka/issues/4634)
- DelegatingByTypeSerializer assignable mode can select a more general delegate due to a non-transitive comparator [#4624](https://github.com/spring-projects/spring-kafka/issues/4624)
- Multi-value header mapping loses values on inbound when a JSON type header is present [#4623](https://github.com/spring-projects/spring-kafka/issues/4623)
- Pending consumer wakeup aborts the next offset commit, which is then skipped [#4622](https://github.com/spring-projects/spring-kafka/issues/4622)
- ReplyingKafkaOperations sendAndReceive overloads expose incorrect nullability for replyTimeout and returnType [#4620](https://github.com/spring-projects/spring-kafka/issues/4620)
- Assert messages in setTopicPartitions and setDefaultReplyTimeout name the wrong property [#4605](https://github.com/spring-projects/spring-kafka/issues/4605)
- Recovering Streams exception handlers throw when there is no source record [#4603](https://github.com/spring-projects/spring-kafka/issues/4603)
- Share containers ignore ContainerProperties.clientId [#4601](https://github.com/spring-projects/spring-kafka/issues/4601)
- ShareKafkaListenerContainerFactory.createContainer(String...) does not apply factory configuration [#4593](https://github.com/spring-projects/spring-kafka/issues/4593)
- Close the default delegate in DelegatingByTopicSerialization [#4588](https://github.com/spring-projects/spring-kafka/pull/4588)
- DelegatingByTypeSerializer does not close its delegates [#4569](https://github.com/spring-projects/spring-kafka/issues/4569)
- Kafka listener with autoStartup=false is unconditionally started on ApplicationContext.restart() (alwaysStartAfterRefresh=true ignores autoStartup after first refresh) [#4567](https://github.com/spring-projects/spring-kafka/issues/4567)

## :notebook_with_decorative_cover: Documentation

- Improve trusted-packages error message guidance [#4629](https://github.com/spring-projects/spring-kafka/pull/4629)
- Fix DeadLetterPublishingRecoverer API names in error-handling docs [#4599](https://github.com/spring-projects/spring-kafka/pull/4599)
- Misleading autoStartDltHandler property/documentation for `@RetryableTopic` in tests [#4388](https://github.com/spring-projects/spring-kafka/issues/4388)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.8.0-M2 [#4715](https://github.com/spring-projects/spring-kafka/issues/4715)
- Upgrade micrometer to 1.18.0-M2 [#4714](https://github.com/spring-projects/spring-kafka/issues/4714)
- Upgrade reactor to 2026.0.0-M2 [#4713](https://github.com/spring-projects/spring-kafka/issues/4713)
- Upgrade spring-data-bom to 2026.1.0-M2 [#4712](https://github.com/spring-projects/spring-kafka/issues/4712)
- Upgrade spring-framework to 7.1.0-M2 [#4711](https://github.com/spring-projects/spring-kafka/issues/4711)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.6 to 2.22.2 [#4695](https://github.com/spring-projects/spring-kafka/pull/4695)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.5 to 2.26.1 [#4694](https://github.com/spring-projects/spring-kafka/pull/4694)
- Bump org.jetbrains.kotlinx:kotlinx-coroutines-reactor from 1.10.2 to 1.11.0 [#4693](https://github.com/spring-projects/spring-kafka/pull/4693)
- Bump gradle-wrapper from 9.4.1 to 9.7.1 [#4692](https://github.com/spring-projects/spring-kafka/pull/4692)
- Bump com.github.spotbugs:spotbugs-annotations from 4.9.8 to 4.10.4 [#4691](https://github.com/spring-projects/spring-kafka/pull/4691)
- Bump kotlinVersion from 2.3.21 to 2.4.20 [#4690](https://github.com/spring-projects/spring-kafka/pull/4690)
- Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19 [#4671](https://github.com/spring-projects/spring-kafka/pull/4671)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.5 to 2.21.6 [#4586](https://github.com/spring-projects/spring-kafka/pull/4586)
- Bump tools.jackson:jackson-bom from 3.2.1 to 3.2.2 [#4585](https://github.com/spring-projects/spring-kafka/pull/4585)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Gaurav1112, @kdelay, @ngocnhan-tran1996, and @renechoi

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.2.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
