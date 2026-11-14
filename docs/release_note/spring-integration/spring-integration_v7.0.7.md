---
title: "spring-integration v7.0.7"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.0.7"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Remove broken stack trace from HttpRequestHandlingController errors #11517 · Reject unconvertible messages in AMQP 1.0 inbound endpoints #11502"
---

# spring-integration v7.0.7

## :lady_beetle: Bug Fixes

- Remove broken stack trace from HttpRequestHandlingController errors [#11517](https://github.com/spring-projects/spring-integration/issues/11517)
- Reject unconvertible messages in AMQP 1.0 inbound endpoints [#11502](https://github.com/spring-projects/spring-integration/issues/11502)
- PropertiesPersistingMetadataStore does not retry flush after an IOException [#11499](https://github.com/spring-projects/spring-integration/issues/11499)
- File inbound message sources stay `running` after a failed `start()` [#11427](https://github.com/spring-projects/spring-integration/issues/11427)
- TcpNioServerConnectionFactory.stop() logs "Selector closed" at ERROR on normal stop (regression of INT-3473) [#11425](https://github.com/spring-projects/spring-integration/issues/11425)
- AmqpClientInboundGateway corrupts percent-encoded AMQP 1.0 reply-to queue names [#11423](https://github.com/spring-projects/spring-integration/issues/11423)
- `RedisLockRegistry` and `JdbcLockRegistry`: `lock(Duration)` does not restore the interrupted status [#11412](https://github.com/spring-projects/spring-integration/issues/11412)
- TcpNioClientConnectionFactory.stop() logs "Selector closed" at ERROR on every normal stop due to selector-close/active-flag ordering [#11399](https://github.com/spring-projects/spring-integration/issues/11399)
- `FileWritingMessageHandler`: a failing `close()` is swallowed and the truncated file is still promoted [#11395](https://github.com/spring-projects/spring-integration/issues/11395)
- ReactiveStreamsConsumer over PollableChannel can silently lose a message on stop() [#11385](https://github.com/spring-projects/spring-integration/issues/11385)
- Restart Apache Commons `Tailer` if its background thread dies [#11383](https://github.com/spring-projects/spring-integration/issues/11383)
- `AdviceMessage.equals()` returns `true` for messages with different payloads [#11380](https://github.com/spring-projects/spring-integration/issues/11380)
- The `AbstractMailMessageTransformer` is losing upstream headers [#11376](https://github.com/spring-projects/spring-integration/issues/11376)

## :notebook_with_decorative_cover: Documentation

- Improve docs for security concerns of the `SerializingHttpMessageConverter` [#11483](https://github.com/spring-projects/spring-integration/issues/11483)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.6.8 [#11595](https://github.com/spring-projects/spring-integration/issues/11595)
- Upgrade micrometer to 1.16.8 [#11592](https://github.com/spring-projects/spring-integration/issues/11592)
- Upgrade reactor to 2025.0.8 [#11589](https://github.com/spring-projects/spring-integration/issues/11589)
- Upgrade spring-amqp to 4.0.6 [#11586](https://github.com/spring-projects/spring-integration/issues/11586)
- Upgrade spring-data-bom to 2025.1.8 [#11584](https://github.com/spring-projects/spring-integration/issues/11584)
- Upgrade spring-graphql to 2.0.6 [#11581](https://github.com/spring-projects/spring-integration/issues/11581)
- Upgrade spring-kafka to 4.0.8 [#11578](https://github.com/spring-projects/spring-integration/issues/11578)
- Upgrade spring-security to 7.0.8 [#11575](https://github.com/spring-projects/spring-integration/issues/11575)
- Upgrade spring-framework to 7.0.10 [#11572](https://github.com/spring-projects/spring-integration/issues/11572)
- Upgrade spring-ws to 5.0.3 [#11569](https://github.com/spring-projects/spring-integration/issues/11569)
- Bump org.codelibs:jcifs from 3.0.3 to 3.0.4 [#11509](https://github.com/spring-projects/spring-integration/pull/11509)
- Bump org.jruby:jruby-complete from 10.0.6.0 to 10.0.7.0 [#11474](https://github.com/spring-projects/spring-integration/pull/11474)
- Bump graalvmVersion from 25.0.4.1 to 25.0.4.1.1 [#11437](https://github.com/spring-projects/spring-integration/pull/11437)
- Bump org.apache.avro:avro from 1.12.1 to 1.12.2 [#11362](https://github.com/spring-projects/spring-integration/pull/11362)
- Bump graalvmVersion from 25.0.4 to 25.0.4.1 [#11357](https://github.com/spring-projects/spring-integration/pull/11357)
- Bump org.codelibs:jcifs from 3.0.2 to 3.0.3 [#11273](https://github.com/spring-projects/spring-integration/pull/11273)

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.0.7` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
