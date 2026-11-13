---
title: "spring-kafka v4.0.7"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.0.7"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-kafka v4.0.7

## :lady_beetle: Bug Fixes

- CVE-2026-59317: Harden `retry_topic-original-timestamp` and backoff timestamp header … [#4573](https://github.com/spring-projects/spring-kafka/issues/4573)
- CVE-2026-59278: Normalize and restrict certain java.net types in header type mapping [#4572](https://github.com/spring-projects/spring-kafka/issues/4572)
- CommonDelegatingErrorHandler does not delegate onPartitionsAssigned(), causing silent record loss during retry [#4561](https://github.com/spring-projects/spring-kafka/issues/4561)
- KafkaTemplate send overloads expose incorrect nullability for partition and key [#4532](https://github.com/spring-projects/spring-kafka/issues/4532)
- Suspend `@KafkaListener` with two failing records on the same partition skips one of them entirely (never retried, never recovered) [#4515](https://github.com/spring-projects/spring-kafka/issues/4515)

## :notebook_with_decorative_cover: Documentation

- Update `Topic Partition Assignment` anchor [#4539](https://github.com/spring-projects/spring-kafka/issues/4539)

## :hammer: Dependency Upgrades

- Upgrade spring-data-bom to 2025.1.7 [#4571](https://github.com/spring-projects/spring-kafka/issues/4571)
- Bump log4jVersion from 2.25.4 to 2.25.5 [#4529](https://github.com/spring-projects/spring-kafka/pull/4529)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@BK202503 and @cppwfs

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.0.7` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
