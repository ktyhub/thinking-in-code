---
title: "spring-batch v6.0.5"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.5"
published: "2026-08-21"
type: "patch"
lang: "en"
summary: "Spring Integration 7.0.6+ introduced a security fix that restricts DefaultJmsHeaderMapper's inbound property mapping to an explicit allowlist, which defaults to only the contenttype property. Remote chunking and remote…"
---

# spring-batch v6.0.5

## Upgrade notes

Spring Integration 7.0.6+ introduced a security fix that restricts `DefaultJmsHeaderMapper`'s inbound property mapping to an explicit allowlist, which defaults to only the `content_type` property. Remote chunking and remote partitioning over JMS rely on Spring Integration's `correlationId`, `sequenceNumber` and `sequenceSize` message headers to match replies from workers back to the manager's reply aggregator. As user-defined JMS properties, these headers were no longer mapped back into message headers by default, causing jobs to hang or fail with `IllegalStateException: Null correlation not allowed`.

If you use remote chunking or remote partitioning over JMS, configure your `Jms.messageDrivenChannelAdapter` beans with a header mapper that maps these headers:

```java
Jms.messageDrivenChannelAdapter(connectionFactory)
     .headerMapper(new DefaultJmsHeaderMapper("*"))
     .destination("replies")
```

If mapping all headers is too permissive for your security requirements, restrict the allowlist to just what Spring Batch needs:
`new DefaultJmsHeaderMapper("correlationId", "sequenceNumber", "sequenceSize")`.

## 🐞 Bug Fixes

- Fix incorrect handling of malformed input in FlatFileItemReader #5496
- Fix incorrect deserialization in DefaultExecutionContextSerializer #5497
- Fix incorrect deserialization in JobParameterDeserializer #5498

## 🆙 Dependency Upgrades

* Spring Framework: 7.0.9
* Spring Integration: 7.0.6
* Spring AMQP: 4.0.5
* Spring Kafka: 4.0.7
* Spring Data: 2025.1.7
* Spring Retry: 2.0.13
* Spring LDAP: 4.0.5
* Micrometer: 1.16.7

## :heart: Contributors

Thank you to all the contributors who worked on this release!

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.5` · 2026-08-21 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
