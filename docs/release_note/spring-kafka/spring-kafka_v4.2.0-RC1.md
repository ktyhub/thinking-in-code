---
title: "spring-kafka v4.2.0-RC1"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.2.0-RC1"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-kafka v4.2.0-RC1

## :star: New Features

- Support the delivery attempt header with CommonDelegatingErrorHandler [#4786](https://github.com/spring-projects/spring-kafka/issues/4786)

## :lady_beetle: Bug Fixes

- GH-4823: Keep partition pause across child containers [#4823](https://github.com/spring-projects/spring-kafka/pull/4823)
- KafkaAdmin reports topic config alteration failures as 'Failed to obtain topic descriptions' [#4820](https://github.com/spring-projects/spring-kafka/issues/4820)
- ContainerGroupSequencer does not disable autoStartup of containers with an idleEventInterval [#4815](https://github.com/spring-projects/spring-kafka/issues/4815)
- Flaky BatchListenerConversionTests.conversionError() [#4809](https://github.com/spring-projects/spring-kafka/issues/4809)
- AbstractConsumerSeekAware.onPartitionsRevoked() removes other consumers' callbacks [#4800](https://github.com/spring-projects/spring-kafka/issues/4800)
- RoutingKafkaTemplate.partitionsFor() throws UnsupportedOperationException [#4796](https://github.com/spring-projects/spring-kafka/issues/4796)
- KafkaTemplate.receive() returns a record at a different offset when the requested offset is missing [#4792](https://github.com/spring-projects/spring-kafka/issues/4792)
- ReplyingKafkaTemplate reply future times out instead of failing when the send fails [#4790](https://github.com/spring-projects/spring-kafka/issues/4790)
- Share container isInExpectedState() ignores a consumer thread that exited on an error [#4788](https://github.com/spring-projects/spring-kafka/issues/4788)
- Batch nack() after a partial acknowledge commits offsets backwards [#4784](https://github.com/spring-projects/spring-kafka/issues/4784)
- Share consumer ack timeout warning ignores renew() [#4782](https://github.com/spring-projects/spring-kafka/issues/4782)
- DefaultErrorHandler ignores backOffFunction when the default BackOff has no retries [#4780](https://github.com/spring-projects/spring-kafka/issues/4780)
- CommonMixedErrorHandler does not delegate onPartitionsAssigned(), losing records during batch retry [#4778](https://github.com/spring-projects/spring-kafka/issues/4778)
- Deserialization exception headers mapped outbound with Kafka 4.4 clients [#4773](https://github.com/spring-projects/spring-kafka/issues/4773)
- Make ExceptionMatcher cache thread-safe [#4756](https://github.com/spring-projects/spring-kafka/pull/4756)
- ExponentialBackOffWithMaxRetries(0) still retries once [#4754](https://github.com/spring-projects/spring-kafka/issues/4754)
- Mixed and delegating error handlers discard remaining batch records when seekAfterError is false [#4752](https://github.com/spring-projects/spring-kafka/issues/4752)
- AbstractConsumerSeekAware retains callback mappings after unregister [#4750](https://github.com/spring-projects/spring-kafka/issues/4750)
- maxRecoveryFailures skips records in retry topics before they are due [#4737](https://github.com/spring-projects/spring-kafka/issues/4737)
- Retry topics use BackOff.STOP (-1) as a delay when the BackOff has its own limit [#4735](https://github.com/spring-projects/spring-kafka/issues/4735)
- ConcurrentMessageListenerContainer does not report partition pause requests from child containers [#4728](https://github.com/spring-projects/spring-kafka/issues/4728)
- `acknowledge()` after a partial batch ack commits only the next record [#4726](https://github.com/spring-projects/spring-kafka/issues/4726)
- Retry an immediate ack commit aborted by a pending wakeup [#4725](https://github.com/spring-projects/spring-kafka/pull/4725)
- Cooperative rebalance can leave the partitions a consumer retains permanently unconsumed (async listener) [#4708](https://github.com/spring-projects/spring-kafka/issues/4708)
- Support the two-arg deserialize in DelegatingByTopicDeserializer [#4707](https://github.com/spring-projects/spring-kafka/pull/4707)
- Lambda or method-reference Converter beans break `@KafkaListener` startup [#4591](https://github.com/spring-projects/spring-kafka/issues/4591)

## :notebook_with_decorative_cover: Documentation

- Fix stale API names in the reference docs [#4706](https://github.com/spring-projects/spring-kafka/pull/4706)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.8.0-RC1 [#4858](https://github.com/spring-projects/spring-kafka/issues/4858)
- Upgrade micrometer to 1.18.0-RC1 [#4857](https://github.com/spring-projects/spring-kafka/issues/4857)
- Upgrade reactor to 2026.0.0-RC1 [#4855](https://github.com/spring-projects/spring-kafka/issues/4855)
- Upgrade spring-data-bom to 2026.1.0-RC1 [#4852](https://github.com/spring-projects/spring-kafka/issues/4852)
- Upgrade spring-framework to 7.1.0-RC1 [#4848](https://github.com/spring-projects/spring-kafka/issues/4848)
- Bump org.bouncycastle:bcpkix-jdk18on from 1.85 to 1.86 [#4838](https://github.com/spring-projects/spring-kafka/pull/4838)
- Bump gradle-wrapper from 9.8.0 to 9.8.1 [#4837](https://github.com/spring-projects/spring-kafka/pull/4837)
- Bump kotlinVersion from 2.4.20 to 2.4.21 [#4836](https://github.com/spring-projects/spring-kafka/pull/4836)
- Bump com.github.spotbugs:spotbugs-annotations from 4.10.4 to 4.10.5 [#4835](https://github.com/spring-projects/spring-kafka/pull/4835)
- Upgrade to Apache Kafka 4.4.0 [#4777](https://github.com/spring-projects/spring-kafka/pull/4777)
- Bump gradle-wrapper from 9.7.1 to 9.8.0 [#4743](https://github.com/spring-projects/spring-kafka/pull/4743)
- Bump mockitoVersion from 5.23.0 to 5.24.0 [#4739](https://github.com/spring-projects/spring-kafka/pull/4739)
- Bump tools.jackson:jackson-bom from 3.2.2 to 3.2.3 [#4720](https://github.com/spring-projects/spring-kafka/pull/4720)
- Bump org.slf4j:slf4j-api from 2.0.19 to 2.0.20 [#4719](https://github.com/spring-projects/spring-kafka/pull/4719)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.2 to 2.22.3 [#4718](https://github.com/spring-projects/spring-kafka/pull/4718)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@chuuminggg, @kdelay, @ngocnhan-tran1996, and @ohchanKyu

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.2.0-RC1` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
