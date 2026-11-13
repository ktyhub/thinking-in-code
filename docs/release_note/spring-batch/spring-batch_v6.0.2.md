---
title: "spring-batch v6.0.2"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.2"
published: "2026-01-21"
type: "patch"
lang: "en"
summary: "Spring Framework: 7.0.3 Spring Integration: 7.0.2 Spring AMQP: 4.0.2 Spring Kafka: 4.0.2 Spring Data: 4.0.2 Micrometer: 1.16.2"
---

# spring-batch v6.0.2

## :star: New features

- Add ZonedDateTime and OffsetDateTime support to JobParametersConverter [#5178](https://github.com/spring-projects/spring-batch/issues/5178)

## :lady_beetle: Bug fixes

- Compatibility issues between v5 and v6 when Migrating from `CommandLineJobRunner` to `CommandLineJobOperator` [#5227](https://github.com/spring-projects/spring-batch/issues/5227)
- MongoStepExecutionDao.countStepExecutions() ignores stepName parameter [#5220](https://github.com/spring-projects/spring-batch/issues/5220)
- OptimisticLockingFailureException due to race condition in graceful shutdown [#5217](https://github.com/spring-projects/spring-batch/issues/5217)
- ChunkOrientedStep#doExecute updates the StepExecution outside of the chunk transaction boundary. [#5199](https://github.com/spring-projects/spring-batch/issues/5199)
- Jackson2ExecutionContextStringSerializer fails to serialize job parameters with JobStep [#5191](https://github.com/spring-projects/spring-batch/issues/5191)
- StepContribution counters are not thread-safe during parallel chunk processing [#5188](https://github.com/spring-projects/spring-batch/issues/5188)
- ScopeNotActiveException with `@StepScope` ItemProcessor in Multi-threaded ChunkOrientedStep [#5183](https://github.com/spring-projects/spring-batch/issues/5183)
- ChunkOrientedStep updates ExecutionContext even when a chunk fails, leading to data loss on restart [#5182](https://github.com/spring-projects/spring-batch/issues/5182)
- MetaDataInstanceFactory default values cause StepContext collision in StepScopeTestUtils when `@SpringBatchTest` is active [#5181](https://github.com/spring-projects/spring-batch/issues/5181)
- Wrong database migration to spring-batch 6.x for DB2LUW [#5166](https://github.com/spring-projects/spring-batch/issues/5166)
- OptimisticLockingFailureException in JobRepositoryTestUtils.removeJobExecutions() since Spring Batch 5.2.3 [#5161](https://github.com/spring-projects/spring-batch/issues/5161)
- The implementation of jumpToItem(int itemLastIndex) in AbstractPaginatedDataItemReader does not handle restart behavior correctly. [#5136](https://github.com/spring-projects/spring-batch/issues/5136)
- Incorrect resource cleanup order in AbstractCursorItemReader#doClose leads to inconsistent behavior [#5109](https://github.com/spring-projects/spring-batch/issues/5109)
- Intermittent OptimisticLockingFailureException when starting job using jobOperator.start() with asyncTaskExecutor [#5106](https://github.com/spring-projects/spring-batch/issues/5106)
- ClosedChannelException when using StaxEventItemWriter in combination with MultiResourceItemWriter [#5098](https://github.com/spring-projects/spring-batch/issues/5098)
- WriteConflict in MongoSequenceIncrementer during parallel job executions [#4960](https://github.com/spring-projects/spring-batch/issues/4960)

## :rocket: Enhancements

- Use Spring Framework's CollectionUtils to create HashSet/HashMap [#5175](https://github.com/spring-projects/spring-batch/pull/5175)
- Remove redundant assert in StoredProcedureItemReader [#5119](https://github.com/spring-projects/spring-batch/pull/5119)

## :notebook_with_decorative_cover: Documentation

- Fix typo in whatsnew.adoc and in integration tests [#5207](https://github.com/spring-projects/spring-batch/issues/5207)
- Clarify ChunkListener changes in v6 [#5226](https://github.com/spring-projects/spring-batch/issues/5226)
- Incorrect documentation about concurrent steps in v6 [#5228](https://github.com/spring-projects/spring-batch/issues/5228)
- correct JobOperatorFactoryBean sample code [#5103](https://github.com/spring-projects/spring-batch/pull/5103)

## :hammer: Tasks

- Update project template in issue reporting guide [#5212](https://github.com/spring-projects/spring-batch/issues/5212)

## 🆙  Dependency Upgrades

Spring Framework: 7.0.3
Spring Integration: 7.0.2
Spring AMQP: 4.0.2
Spring Kafka: 4.0.2
Spring Data: 4.0.2
Micrometer: 1.16.2

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@wocks1123, @thswlsqls, @xeounxzxu, @LeeHyungGeol, @KMGeon, @HongYeseul, @banseok1216, @quaff, and @songhees

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.2` · 2026-01-21 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
