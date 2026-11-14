---
title: "spring-integration v6.5.10"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v6.5.10"
published: "2026-06-30"
type: "patch"
lang: "en"
summary: "JdbcLockRegistry & RedisLockRegistry - Shared ReentrantLock from DefaultLockRegistry causes APP\\LOCK entry not deleted on unlock when two different lock keys map to the same bucket #11156"
---

# spring-integration v6.5.10

## :lady_beetle: Bug Fixes

- JdbcLockRegistry & RedisLockRegistry - Shared ReentrantLock from DefaultLockRegistry causes APP\_LOCK entry not deleted on unlock when two different lock keys map to the same bucket [#11156](https://github.com/spring-projects/spring-integration/issues/11156)
- Throw a generic error from the `AbstractWebServiceInboundGateway` back to the client [#11154](https://github.com/spring-projects/spring-integration/issues/11154)
- Prevent eviction of held locks from ZooKeeper registry [#11136](https://github.com/spring-projects/spring-integration/issues/11136)
- The `BaseIntegrationFlowDefinition.REFERENCED_REPLY_PRODUCERS` can be accessed concurrently [#11128](https://github.com/spring-projects/spring-integration/issues/11128)
- Specifying channel name for inbound JMS components in Java DSL causes startup failure due to no BeanFactory [#11126](https://github.com/spring-projects/spring-integration/issues/11126)
- Fix multibyte ack-header offset in `DatagramPacketMessageMapper` [#11118](https://github.com/spring-projects/spring-integration/issues/11118)
- The `PartitionedDispatcher.dispatch()` fails with the `IndexOutOfBoundsException` when hash code is the `Integer.MIN_VALUE` [#11116](https://github.com/spring-projects/spring-integration/issues/11116)
- Fix `FileReadingMessageSource` to deal with canonical files [#11105](https://github.com/spring-projects/spring-integration/issues/11105)

## :notebook_with_decorative_cover: Documentation

- The `FileWritingMessageHandler.trigger()` Javadoc should mention ReDoS [#11134](https://github.com/spring-projects/spring-integration/issues/11134)

## :hammer: Dependency Upgrades

- Bump org.springframework.data:spring-data-bom from 2025.0.12 to 2025.0.13 [#11153](https://github.com/spring-projects/spring-integration/pull/11153)
- Bump org.springframework.amqp:spring-amqp-bom from 3.2.11 to 3.2.12 [#11152](https://github.com/spring-projects/spring-integration/pull/11152)

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v6.5.10` · 2026-06-30 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v6.5.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
