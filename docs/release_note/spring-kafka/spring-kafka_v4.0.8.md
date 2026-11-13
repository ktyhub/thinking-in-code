---
title: "spring-kafka v4.0.8"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.0.8"
published: "2026-10-22"
type: "patch"
lang: "en"
---

# spring-kafka v4.0.8

## :lady_beetle: Bug Fixes

- KafkaTemplate.receive() returns a record at a different offset when the requested offset is missing [#4831](https://github.com/spring-projects/spring-kafka/issues/4831)
- GH-4823: Keep partition pause across child containers [#4829](https://github.com/spring-projects/spring-kafka/issues/4829)
- KafkaAdmin reports topic config alteration failures as 'Failed to obtain topic descriptions' [#4827](https://github.com/spring-projects/spring-kafka/issues/4827)
- ContainerGroupSequencer does not disable autoStartup of containers with an idleEventInterval [#4825](https://github.com/spring-projects/spring-kafka/issues/4825)
- Flaky BatchListenerConversionTests.conversionError() [#4822](https://github.com/spring-projects/spring-kafka/issues/4822)
- DefaultErrorHandler ignores backOffFunction when the default BackOff has no retries [#4819](https://github.com/spring-projects/spring-kafka/issues/4819)
- Share container isInExpectedState() ignores a consumer thread that exited on an error [#4813](https://github.com/spring-projects/spring-kafka/issues/4813)
- ReplyingKafkaTemplate reply future times out instead of failing when the send fails [#4812](https://github.com/spring-projects/spring-kafka/issues/4812)
- AbstractConsumerSeekAware.onPartitionsRevoked() removes other consumers' callbacks [#4807](https://github.com/spring-projects/spring-kafka/issues/4807)
- RoutingKafkaTemplate.partitionsFor() throws UnsupportedOperationException [#4806](https://github.com/spring-projects/spring-kafka/issues/4806)
- Lambda or method-reference Converter beans break `@KafkaListener` startup [#4803](https://github.com/spring-projects/spring-kafka/issues/4803)
- CommonMixedErrorHandler does not delegate onPartitionsAssigned(), losing records during batch retry [#4798](https://github.com/spring-projects/spring-kafka/issues/4798)
- Support the two-arg deserialize in DelegatingByTopicDeserializer [#4793](https://github.com/spring-projects/spring-kafka/issues/4793)
- Deserialization exception headers mapped outbound with Kafka 4.4 clients [#4776](https://github.com/spring-projects/spring-kafka/issues/4776)
- Cooperative rebalance can leave the partitions a consumer retains permanently unconsumed (async listener) [#4771](https://github.com/spring-projects/spring-kafka/issues/4771)
- Retry topics use BackOff.STOP (-1) as a delay when the BackOff has its own limit [#4769](https://github.com/spring-projects/spring-kafka/issues/4769)
- AbstractConsumerSeekAware retains callback mappings after unregister [#4768](https://github.com/spring-projects/spring-kafka/issues/4768)
- Mixed and delegating error handlers discard remaining batch records when seekAfterError is false [#4766](https://github.com/spring-projects/spring-kafka/issues/4766)
- ExponentialBackOffWithMaxRetries(0) still retries once [#4759](https://github.com/spring-projects/spring-kafka/issues/4759)
- Make ExceptionMatcher cache thread-safe [#4758](https://github.com/spring-projects/spring-kafka/issues/4758)
- `acknowledge()` after a partial batch ack commits only the next record [#4733](https://github.com/spring-projects/spring-kafka/issues/4733)
- ConcurrentMessageListenerContainer does not report partition pause requests from child containers [#4731](https://github.com/spring-projects/spring-kafka/issues/4731)
- Apply the bootstrap servers supplier in DefaultShareConsumerFactory [#4700](https://github.com/spring-projects/spring-kafka/issues/4700)
- Suspend `@KafkaListener`: consumer permanently stops fetching partitions it retains across a rebalance [#4697](https://github.com/spring-projects/spring-kafka/issues/4697)
- Async listener reply success path never reports failures to the receiver Observation [#4685](https://github.com/spring-projects/spring-kafka/issues/4685)
- Pending consumer wakeup aborts the next offset commit, which is then skipped [#4684](https://github.com/spring-projects/spring-kafka/issues/4684)
- Copy the type resolver in copyWithType [#4667](https://github.com/spring-projects/spring-kafka/issues/4667)
- ShareKafkaMessageListenerContainer NPEs at start() when built from a topic pattern or partition list [#4665](https://github.com/spring-projects/spring-kafka/issues/4665)
- Do not validate a null deserialized value [#4657](https://github.com/spring-projects/spring-kafka/issues/4657)
- Multi-value header mapping loses values on inbound when a JSON type header is present [#4645](https://github.com/spring-projects/spring-kafka/issues/4645)
- ReplyingKafkaOperations sendAndReceive overloads expose incorrect nullability for replyTimeout and returnType [#4641](https://github.com/spring-projects/spring-kafka/issues/4641)
- DelegatingByTypeSerializer assignable mode can select a more general delegate due to a non-transitive comparator [#4632](https://github.com/spring-projects/spring-kafka/issues/4632)
- Share containers ignore ContainerProperties.clientId [#4628](https://github.com/spring-projects/spring-kafka/issues/4628)
- ShareKafkaListenerContainerFactory.createContainer(String...) does not apply factory configuration [#4618](https://github.com/spring-projects/spring-kafka/issues/4618)
- Assert messages in setTopicPartitions and setDefaultReplyTimeout name the wrong property [#4610](https://github.com/spring-projects/spring-kafka/issues/4610)
- Kafka listener with autoStartup=false is unconditionally started on ApplicationContext.restart() (alwaysStartAfterRefresh=true ignores autoStartup after first refresh) [#4607](https://github.com/spring-projects/spring-kafka/issues/4607)
- Close the default delegate in DelegatingByTopicSerialization [#4590](https://github.com/spring-projects/spring-kafka/issues/4590)
- DelegatingByTypeSerializer does not close its delegates [#4580](https://github.com/spring-projects/spring-kafka/issues/4580)

## :notebook_with_decorative_cover: Documentation

- Fix stale API names in the reference docs [#4749](https://github.com/spring-projects/spring-kafka/issues/4749)
- Misleading autoStartDltHandler property/documentation for `@RetryableTopic` in tests [#4702](https://github.com/spring-projects/spring-kafka/issues/4702)
- Improve trusted-packages error message guidance [#4631](https://github.com/spring-projects/spring-kafka/issues/4631)
- Fix DeadLetterPublishingRecoverer API names in error-handling docs [#4613](https://github.com/spring-projects/spring-kafka/issues/4613)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.6.8 [#4854](https://github.com/spring-projects/spring-kafka/issues/4854)
- Upgrade micrometer to 1.16.8 [#4851](https://github.com/spring-projects/spring-kafka/issues/4851)
- Upgrade reactor to 2025.0.8 [#4849](https://github.com/spring-projects/spring-kafka/issues/4849)
- Upgrade spring-data-bom to 2025.1.8 [#4846](https://github.com/spring-projects/spring-kafka/issues/4846)
- Upgrade spring-framework to 7.0.10 [#4844](https://github.com/spring-projects/spring-kafka/issues/4844)
- Bump org.slf4j:slf4j-api from 2.0.19 to 2.0.20 [#4721](https://github.com/spring-projects/spring-kafka/pull/4721)
- Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19 [#4670](https://github.com/spring-projects/spring-kafka/pull/4670)

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.0.8` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
