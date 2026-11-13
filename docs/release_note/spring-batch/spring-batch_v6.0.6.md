---
title: "spring-batch v6.0.6"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.6"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Spring Framework: 7.0.9 -> 7.0.10 Spring Integration: 7.0.6 -> 7.0.7 Spring AMQP: 4.0.5 -> 4.0.6 Spring Kafka: 4.0.7 -> 4.0.8 Spring Data: 2025.1.7 -> 2025.1.8 Spring LDAP: 4.0.5 -> 4.0.6 Micrometer: 1.16.7 -> 1.16.8"
---

# spring-batch v6.0.6

## :rocket: Enhancements

 - Add `@FunctionalInterface` to `StepInterruptionPolicy` [#5402](https://github.com/spring-projects/spring-batch/pull/5402)
 - Fix `SimpleJobOperator` `jobRegistry` state message [#5369](https://github.com/spring-projects/spring-batch/pull/5369)
 - Improve `JdbcJobExecutionDao#synchronizeStatus(StepExecution)` [#5365](https://github.com/spring-projects/spring-batch/pull/5365)
 - Replace deprecated `Jackson2JsonMessageConverter` with `JacksonJsonMessageConverter` [#5350](https://github.com/spring-projects/spring-batch/pull/5350)
 - Replace `System.getProperty("line.separator")` with `System.lineSeparator()` [#5341](https://github.com/spring-projects/spring-batch/pull/5341)
 - Remove unnecessary null check against `createTime` of execution [#5304](https://github.com/spring-projects/spring-batch/pull/5304)
 - Inaccurate exception message when attempting to start a running job [#5280](https://github.com/spring-projects/spring-batch/issues/5280)
 - Replace `CopyOnWriteArrayList` with `ArrayList` in `JdbcPagingItemReader` and `JpaPagingItemReader` for performance and correctness [#5112](https://github.com/spring-projects/spring-batch/issues/5112)
 - Eliminate unnecessary query for current version [#4797](https://github.com/spring-projects/spring-batch/pull/4797)
 - Running a job causes retrieval of full history of job executions [#4169](https://github.com/spring-projects/spring-batch/issues/4169)
 - Not unique steps names in a `FlowJob` should log a warning [#3757](https://github.com/spring-projects/spring-batch/issues/3757)
 - Remove unused `ClassUtils` import from `JdbcPagingItemReader` [#5407](https://github.com/spring-projects/spring-batch/pull/5407)

## :lady_beetle: Bug fixes

 - `ChunkOrientedStep` does not restore the step execution when a chunk transaction is not committed [#5594](https://github.com/spring-projects/spring-batch/issues/5594)
 - `MongoCursorItemReader` throws `NullPointerException` when closed before opening [#5589](https://github.com/spring-projects/spring-batch/issues/5589)
 - MariaDB 6.0 migration fails when renaming `BATCH_JOB_SEQ` [#5586](https://github.com/spring-projects/spring-batch/issues/5586)
 - listener exceptions are skippable in scan mode but fatal elsewhere [#5585](https://github.com/spring-projects/spring-batch/issues/5585)
 - Fix missing page increase in `AbstractPaginatedDataItemReader` [#5583](https://github.com/spring-projects/spring-batch/pull/5583)
 - Job-scoped beans are not usable from worker threads of multi-threaded steps and parallel flows [#5576](https://github.com/spring-projects/spring-batch/issues/5576)
 - Restart after a failure during chunk scanning skips the remaining items of the chunk in `ChunkOrientedStep` [#5558](https://github.com/spring-projects/spring-batch/issues/5558)
 - `NullPointerException` when closing an unopened `JpaPagingItemReader` [#5539](https://github.com/spring-projects/spring-batch/issues/5539)
 - `@OnSkipInRead`/`@OnSkipInProcess`/`@OnSkipInWrite` methods are ignored by `ChunkOrientedStepBuilder#listener(Object)` [#5531](https://github.com/spring-projects/spring-batch/issues/5531)
 - Misleading logs in scan mode without retries [#5527](https://github.com/spring-projects/spring-batch/issues/5527)
 - `FlatFileItemReaderBuilder.addComment()` throws `UnsupportedOperationException` after `comments(...)` [#5520](https://github.com/spring-projects/spring-batch/issues/5520)
 - `DelimitedLineTokenizer` throws `StringIndexOutOfBoundsException` when a field is a single quote character [#5519](https://github.com/spring-projects/spring-batch/issues/5519)
 - `FixedLengthTokenizer` in strict mode rejects lines when the open-ended range starts at or before the first range's min [#5518](https://github.com/spring-projects/spring-batch/issues/5518)
 - `JobFlowExecutor` leaks a `StepExecution` across job executions on a shared thread when no transition matches a step's `ExitStatus` [#5514](https://github.com/spring-projects/spring-batch/issues/5514)
 - Rolled-back chunk counted as written and step COMPLETED in `ChunkOrientedStep` (fault-tolerant retry of `OptimisticLockException`) [#5509](https://github.com/spring-projects/spring-batch/issues/5509)
 - `TransientTransactionError` in `MongoSequenceIncrementer` during parallel job executions [#5507](https://github.com/spring-projects/spring-batch/issues/5507)
 - Fix `QName` deserialization in `JacksonExecutionContextStringSerializer` [#5502](https://github.com/spring-projects/spring-batch/pull/5502)
 - `ChunkOrientedStep` scan mode passes the processed chunk to `ChunkListener#beforeChunk` and silently drops scan items when the listener throws [#5493](https://github.com/spring-projects/spring-batch/issues/5493)
 - `ChunkOrientedStep` does not re-invoke the `ItemProcessor` during chunk scanning, unlike `FaultTolerantChunkProcessor` [#5490](https://github.com/spring-projects/spring-batch/issues/5490)
 - `JpaCursorItemReader.doClose()` missing null check on `entityManager` [#5486](https://github.com/spring-projects/spring-batch/issues/5486)
 - Fix incorrect nullability contract for `encoding` in `StaxEventItemReader` [#5483](https://github.com/spring-projects/spring-batch/pull/5483)
 - `JsonFunctionalTests` fails on Windows due to CRLF [#5481](https://github.com/spring-projects/spring-batch/issues/5481)
 - `@OnChunkError` is never invoked on a chunk-oriented step [#5468](https://github.com/spring-projects/spring-batch/issues/5468)
 - Interface listener callbacks are invoked twice when an item handler also has a listener annotation [#5466](https://github.com/spring-projects/spring-batch/issues/5466)
 - `spring.batch.job.launch.count` is silently missing: the `JobOperator` keeps `ObservationRegistry.NOOP` on most configuration paths [#5463](https://github.com/spring-projects/spring-batch/issues/5463)
 - Inconsistent `JobParameter` type handling between storage and retrieval in Spring Batch 6.x [#5455](https://github.com/spring-projects/spring-batch/issues/5455)
 - `@BeforeStep`/`@AfterStep` methods are ignored by `ChunkOrientedStepBuilder#listener(Object)` [#5451](https://github.com/spring-projects/spring-batch/issues/5451)
 - Replace jetbrains `@NotNull` with jspecify `@NonNull` [#5443](https://github.com/spring-projects/spring-batch/pull/5443)
 - `SimpleJobOperator.restart(JobExecution)` masks the real failure reason with a misleading "job execution already running" message [#5439](https://github.com/spring-projects/spring-batch/issues/5439)
 - Missing GraalVM runtime hints for MongoDB persistence model classes and resources [#5435](https://github.com/spring-projects/spring-batch/issues/5435)
 - Fix `JsonFileItemWriter` to produce valid JSON when append allowed with custom header/footer callback [#5432](https://github.com/spring-projects/spring-batch/issues/5432)
 - Step name is null when the step is not defined as a bean and not assigned a name [#5278](https://github.com/spring-projects/spring-batch/issues/5278)
 - Forced Sort Passing via `sorts()` Method When Building with `MongoCursorItemReaderBuilder` and Query [#4860](https://github.com/spring-projects/spring-batch/issues/4860)

## :notebook_with_decorative_cover: Documentation

 - `JpaItemWriter` description in Appendix of documentation is wrong [#5556](https://github.com/spring-projects/spring-batch/issues/5556)
 - Inaccurate documentation of remote chunking and remote partitioning samples regarding JMS headers [#5513](https://github.com/spring-projects/spring-batch/issues/5513)
 - Fix typos in Javadoc comments [#5511](https://github.com/spring-projects/spring-batch/pull/5511)
 - Clarify retryable reads compatibility with forward-only semantics [#5510](https://github.com/spring-projects/spring-batch/issues/5510)
 - Clarify `SkipListener` contract and reference docs about transaction scope [#5494](https://github.com/spring-projects/spring-batch/issues/5494)
 - Reference documentation's tracing example registers a handler that creates no spans and fails the job [#5475](https://github.com/spring-projects/spring-batch/issues/5475)
 - Fix typo in Javadoc of `JobOperator.start()` [#5434](https://github.com/spring-projects/spring-batch/pull/5434)
 - Wrong example in "Registering `ItemStream` with a `Step`" [#5429](https://github.com/spring-projects/spring-batch/issues/5429)
 - Fix incorrect Javadoc reference in `JobExecution.isStopped()` [#5414](https://github.com/spring-projects/spring-batch/pull/5414)
 - Fix javadoc in `SqlPagingQueryUtils` [#5403](https://github.com/spring-projects/spring-batch/pull/5403)
 - Fix typo in `EnableBatchProcessing` Javadoc [#5375](https://github.com/spring-projects/spring-batch/pull/5375)
 - Inaccurate JavaDoc of `BatchStatus.isLessThanOrEqualTo` [#5285](https://github.com/spring-projects/spring-batch/issues/5285)
 - Enhance documentation about leveraging `IteratorItemReader` to reuse scrolling APIs from Spring Data [#4484](https://github.com/spring-projects/spring-batch/issues/4484)

## :hammer: Tasks

 - Update Apache Artemis `groupId` to `org.apache.artemis` [#5482](https://github.com/spring-projects/spring-batch/pull/5482)
 - Update Groovy version to 5.1.2 [#5327](https://github.com/spring-projects/spring-batch/pull/5327)
 - Consistently use `.version` suffix for version properties in `pom.xml` [#5506](https://github.com/spring-projects/spring-batch/pull/5506)

## 🆙 Dependency Upgrades

### Spring dependencies

Spring Framework: 7.0.9 -> 7.0.10
Spring Integration: 7.0.6 -> 7.0.7
Spring AMQP: 4.0.5 -> 4.0.6
Spring Kafka: 4.0.7 -> 4.0.8
Spring Data: 2025.1.7 -> 2025.1.8
Spring LDAP: 4.0.5 -> 4.0.6
Micrometer: 1.16.7 -> 1.16.8

### Other dependencies

Apache Avro: 1.12.1 -> 1.12.2
Hibernate ORM: 7.2.18.Final -> 7.2.25.Final
Jackson 2: 2.20.2 -> 2.21.7
Jackson 3: 3.0.4 -> 3.1.7

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@acktsap, @ahrytsiuk, @Akhil-1527, @AndreaBosmanWork, @apptie, @banseok1216, @benelog, @beyondwin, @cladren123, @COBI-98, @dhritimanchakra, @DragonFSKY, @enduf7686, @GaBaljaintheroom, @Gorock, @hunseonglee, @hutiefang76, @HyunWoo9930, @jjh75607, @jjj-n, @klopfdreh, @KMGeon, @kojw1017, @kyungrae, @leedaegeon, @leestana01, @mjd507, @noojung, @pius712, @quaff, @ryujungkyun, @scordio, @xxxxxxjun, and @yuseogi0218

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.6` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
