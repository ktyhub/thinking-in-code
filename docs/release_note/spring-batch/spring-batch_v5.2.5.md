---
title: "spring-batch v5.2.5"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v5.2.5"
published: "2026-03-18"
type: "patch"
lang: "en"
summary: "Add ZonedDateTime and OffsetDateTime support to JobParametersConverter #5178"
---

# spring-batch v5.2.5

## :star: New features

- Add ZonedDateTime and OffsetDateTime support to JobParametersConverter #5178

## :lady_beetle: Bug fixes

- Cannot deserialize TopicPartition from JobRepository #3797
- Errors are not propagated from job execution #808
- Minor logging issue when a step or job completes instantly #5037
- The implementation of jumpToItem(int itemLastIndex) in AbstractPaginatedDataItemReader does not handle restart behavior correctly. #5136
- Incorrect resource cleanup order in AbstractCursorItemReader#doClose leads to inconsistent behavior #5109
- OptimisticLockingFailureException in JobRepositoryTestUtils.removeJobExecutions() since Spring Batch 5.2.3 #5161
- WriteConflict in MongoSequenceIncrementer during parallel job executions #4960

## :notebook_with_decorative_cover: Documentation

- Elaborate usage of PlatformTransactionManager #4787

# 🆙 Dependency Upgrades

* Spring Framework: 6.2.17
* Micrometer: 1.14.14
* Spring Integration: 6.4.10
* Spring AMQP: 3.2.9
* Spring Data: 3.4.13
* Spring Ldap: 3.2.16

## :heart: Contributors

Thank you to all the contributors who contributed to this release!

---

Full change log: https://github.com/spring-projects/spring-batch/compare/v5.2.4...v5.2.5

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v5.2.5` · 2026-03-18 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v5.2.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
