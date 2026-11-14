---
title: "spring-kafka v4.2.0-M1"
project: "spring-kafka"
repo: "spring-projects/spring-kafka"
tag: "v4.2.0-M1"
published: "2026-08-20"
type: "pre"
lang: "en"
summary: "Conflict when observability enabled and mixed batch and non-batch listeners #3947"
---

# spring-kafka v4.2.0-M1

## :star: New Features

- Conflict when observability enabled and mixed batch and non-batch listeners [#3947](https://github.com/spring-projects/spring-kafka/issues/3947)

## :lady_beetle: Bug Fixes

- CVE-2026-59317: Harden `retry_topic-original-timestamp` and backoff timestamp header … [#4578](https://github.com/spring-projects/spring-kafka/issues/4578)
- CVE-2026-59278: Normalize and restrict certain java.net types in header type mapping [#4577](https://github.com/spring-projects/spring-kafka/issues/4577)
- Fix generateAntoraYml after version catalog migration [#4559](https://github.com/spring-projects/spring-kafka/pull/4559)
- Fix tx offset lag when marker batch is separate [#4553](https://github.com/spring-projects/spring-kafka/pull/4553)
- CommonDelegatingErrorHandler does not delegate onPartitionsAssigned(), causing silent record loss during retry [#4545](https://github.com/spring-projects/spring-kafka/issues/4545)
- Backoff breaks recovery on batching listener container in multi partition environment [#4371](https://github.com/spring-projects/spring-kafka/issues/4371)

## :notebook_with_decorative_cover: Documentation

- Fix typo in ConsumerProperties#setAuthExceptionRetryInterval javadoc [#4556](https://github.com/spring-projects/spring-kafka/pull/4556)
- Update broken crosss reference in change-history.adoc [#4544](https://github.com/spring-projects/spring-kafka/pull/4544)

## :hammer: Dependency Upgrades

- Bump org.junit:junit-bom from 6.1.2 to 6.1.3 [#4566](https://github.com/spring-projects/spring-kafka/pull/4566)
- Dependency updates for 4.2.0-SNAPSHOT [#4550](https://github.com/spring-projects/spring-kafka/pull/4550)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs, @ngocnhan-tran1996, @sobychacko, and @wolfpeyton

---

> **Source** [spring-projects/spring-kafka](https://github.com/spring-projects/spring-kafka) · `v4.2.0-M1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-M1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
