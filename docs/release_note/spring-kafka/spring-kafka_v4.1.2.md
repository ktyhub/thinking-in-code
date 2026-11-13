---
title: "spring-kafka v4.1.2"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.1.2"
published: "2026-10-22"
type: "patch"
lang: "en"
---

# spring-kafka v4.1.2

## :lady_beetle: Bug Fixes

- KafkaTemplate.receive() returns a record at a different offset when the requested offset is missing [#4830](https://github.com/spring-projects/spring-kafka/issues/4830)
- GH-4823: Keep partition pause across child containers [#4828](https://github.com/spring-projects/spring-kafka/issues/4828)
- KafkaAdmin reports topic config alteration failures as 'Failed to obtain topic descriptions' [#4826](https://github.com/spring-projects/spring-kafka/issues/4826)
- ContainerGroupSequencer does not disable autoStartup of containers with an idleEventInterval [#4824](https://github.com/spring-projects/spring-kafka/issues/4824)
- DefaultErrorHandler ignores backOffFunction when the default BackOff has no retries [#4818](https://github.com/spring-projects/spring-kafka/issues/4818)
- Flaky BatchListenerConversionTests.conversionError() [#4817](https://github.com/spring-projects/spring-kafka/issues/4817)
- Share container isInExpectedState() ignores a consumer thread that exited on an error [#4814](https://github.com/spring-projects/spring-kafka/issues/4814)
- ReplyingKafkaTemplate reply future times out instead of failing when the send fails [#4811](https://github.com/spring-projects/spring-kafka/issues/4811)
- AbstractConsumerSeekAware.onPartitionsRevoked() removes other consumers' callbacks [#4808](https://github.com/spring-projects/spring-kafka/issues/4808)
- RoutingKafkaTemplate.partitionsFor() throws UnsupportedOperationException [#4805](https://github.com/spring-projects/spring-kafka/issues/4805)
- Share consumer ack timeout warning ignores renew() [#4804](https://github.com/spring-projects/spring-kafka/issues/4804)
- Lambda or method-reference Converter beans break `@KafkaListener` startup [#4802](https://github.com/spring-projects/spring-kafka/issues/4802)
- CommonMixedErrorHandler does not delegate onPartitionsAssigned(), losing records during batch retry [#4797](https://github.com/spring-projects/spring-kafka/issues/4797)
- Support the two-arg deserialize in DelegatingByTopicDeserializer [#4794](https://github.com/spring-projects/spring-kafka/issues/4794)
- Deserialization exception headers mapped outbound with Kafka 4.4 clients [#4775](https://github.com/spring-projects/spring-kafka/issues/4775)
- Cooperative rebalance can leave the partitions a consumer retains permanently unconsumed (async listener) [#4772](https://github.com/spring-projects/spring-kafka/issues/4772)
- Retry topics use BackOff.STOP (-1) as a delay when the BackOff has its own limit [#4770](https://github.com/spring-projects/spring-kafka/issues/4770)
- AbstractConsumerSeekAware retains callback mappings after unregister [#4767](https://github.com/spring-projects/spring-kafka/issues/4767)
- Mixed and delegating error handlers discard remaining batch records when seekAfterError is false [#4765](https://github.com/spring-projects/spring-kafka/issues/4765)
- ExponentialBackOffWithMaxRetries(0) still retries once [#4760](https://github.com/spring-projects/spring-kafka/issues/4760)
- Make ExceptionMatcher cache thread-safe [#4757](https://github.com/spring-projects/spring-kafka/issues/4757)
- `acknowledge()` after a partial batch ack commits only the next record [#4734](https://github.com/spring-projects/spring-kafka/issues/4734)
- ConcurrentMessageListenerContainer does not report partition pause requests from child containers [#4730](https://github.com/spring-projects/spring-kafka/issues/4730)
- Apply the bootstrap servers supplier in DefaultShareConsumerFactory [#4699](https://github.com/spring-projects/spring-kafka/issues/4699)
- Suspend `@KafkaListener`: consumer permanently stops fetching partitions it retains across a rebalance [#4696](https://github.com/spring-projects/spring-kafka/issues/4696)
- Async listener reply success path never reports failures to the receiver Observation [#4686](https://github.com/spring-projects/spring-kafka/issues/4686)
- Pending consumer wakeup aborts the next offset commit, which is then skipped [#4683](https://github.com/spring-projects/spring-kafka/issues/4683)
- Drain queued share acknowledgments on stop [#4680](https://github.com/spring-projects/spring-kafka/issues/4680)
- Copy the type resolver in copyWithType [#4666](https://github.com/spring-projects/spring-kafka/issues/4666)
- ShareKafkaMessageListenerContainer NPEs at start() when built from a topic pattern or partition list [#4664](https://github.com/spring-projects/spring-kafka/issues/4664)
- Do not validate a null deserialized value [#4656](https://github.com/spring-projects/spring-kafka/issues/4656)
- ShareConsumerAcknowledgment state can regress from a terminal type to RENEW [#4646](https://github.com/spring-projects/spring-kafka/issues/4646)
- Multi-value header mapping loses values on inbound when a JSON type header is present [#4644](https://github.com/spring-projects/spring-kafka/issues/4644)
- ReplyingKafkaOperations sendAndReceive overloads expose incorrect nullability for replyTimeout and returnType [#4642](https://github.com/spring-projects/spring-kafka/issues/4642)
- DelegatingByTypeSerializer assignable mode can select a more general delegate due to a non-transitive comparator [#4633](https://github.com/spring-projects/spring-kafka/issues/4633)
- Share containers ignore ContainerProperties.clientId [#4627](https://github.com/spring-projects/spring-kafka/issues/4627)
- ShareKafkaListenerContainerFactory.createContainer(String...) does not apply factory configuration [#4617](https://github.com/spring-projects/spring-kafka/issues/4617)
- Recovering Streams exception handlers throw when there is no source record [#4611](https://github.com/spring-projects/spring-kafka/issues/4611)
- Assert messages in setTopicPartitions and setDefaultReplyTimeout name the wrong property [#4609](https://github.com/spring-projects/spring-kafka/issues/4609)
- Kafka listener with autoStartup=false is unconditionally started on ApplicationContext.restart() (alwaysStartAfterRefresh=true ignores autoStartup after first refresh) [#4608](https://github.com/spring-projects/spring-kafka/issues/4608)
- Close the default delegate in DelegatingByTopicSerialization [#4589](https://github.com/spring-projects/spring-kafka/issues/4589)
- DelegatingByTypeSerializer does not close its delegates [#4579](https://github.com/spring-projects/spring-kafka/issues/4579)

## :notebook_with_decorative_cover: Documentation

- Fix stale API names in the reference docs [#4748](https://github.com/spring-projects/spring-kafka/issues/4748)
- Misleading autoStartDltHandler property/documentation for `@RetryableTopic` in tests [#4701](https://github.com/spring-projects/spring-kafka/issues/4701)
- Improve trusted-packages error message guidance [#4630](https://github.com/spring-projects/spring-kafka/issues/4630)
- Fix DeadLetterPublishingRecoverer API names in error-handling docs [#4612](https://github.com/spring-projects/spring-kafka/issues/4612)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.7.2 [#4856](https://github.com/spring-projects/spring-kafka/issues/4856)
- Upgrade micrometer to 1.17.2 [#4853](https://github.com/spring-projects/spring-kafka/issues/4853)
- Upgrade reactor to 2025.0.8 [#4850](https://github.com/spring-projects/spring-kafka/issues/4850)
- Upgrade spring-data-bom to 2026.0.2 [#4847](https://github.com/spring-projects/spring-kafka/issues/4847)
- Upgrade spring-framework to 7.0.10 [#4845](https://github.com/spring-projects/spring-kafka/issues/4845)
- Bump kafkaVersion from 4.2.1 to 4.2.2 [#4740](https://github.com/spring-projects/spring-kafka/pull/4740)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.6 to 2.21.7 [#4724](https://github.com/spring-projects/spring-kafka/pull/4724)
- Bump org.slf4j:slf4j-api from 2.0.19 to 2.0.20 [#4723](https://github.com/spring-projects/spring-kafka/pull/4723)
- Bump tools.jackson:jackson-bom from 3.1.6 to 3.1.7 [#4722](https://github.com/spring-projects/spring-kafka/pull/4722)
- Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19 [#4673](https://github.com/spring-projects/spring-kafka/pull/4673)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.5 to 2.21.6 [#4587](https://github.com/spring-projects/spring-kafka/pull/4587)
- Bump tools.jackson:jackson-bom from 3.1.5 to 3.1.6 [#4584](https://github.com/spring-projects/spring-kafka/pull/4584)

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.1.2` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
