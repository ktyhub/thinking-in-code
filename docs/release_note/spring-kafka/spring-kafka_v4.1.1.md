---
title: "spring-kafka v4.1.1"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.1.1"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-kafka v4.1.1

## :lady_beetle: Bug Fixes

- CVE-2026-59317: Harden `retry_topic-original-timestamp` and backoff timestamp header … [#4576](https://github.com/spring-projects/spring-kafka/issues/4576)
- CVE-2026-59278: Normalize and restrict certain java.net types in header type mapping [#4575](https://github.com/spring-projects/spring-kafka/issues/4575)
- CommonDelegatingErrorHandler does not delegate onPartitionsAssigned(), causing silent record loss during retry [#4560](https://github.com/spring-projects/spring-kafka/issues/4560)
- No negative caching in KafkaAdmin.clusterId() can block the listener and cause log spam [#4537](https://github.com/spring-projects/spring-kafka/issues/4537)
- Suspend `@KafkaListener` with two failing records on the same partition skips one of them entirely (never retried, never recovered) [#4504](https://github.com/spring-projects/spring-kafka/issues/4504)

## :hammer: Dependency Upgrades

- Upgrade spring-data-bom to 2026.0.1 [#4574](https://github.com/spring-projects/spring-kafka/issues/4574)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.4 to 2.25.5 [#4530](https://github.com/spring-projects/spring-kafka/pull/4530)
- Bump tools.jackson:jackson-bom from 3.1.4 to 3.1.5 [#4528](https://github.com/spring-projects/spring-kafka/pull/4528)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.4 to 2.21.5 [#4527](https://github.com/spring-projects/spring-kafka/pull/4527)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@BK202503, @bclozel, @cfcromn, @cppwfs, and @sobychacko

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.1.1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
