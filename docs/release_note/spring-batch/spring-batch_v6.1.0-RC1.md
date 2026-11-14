---
title: "spring-batch v6.1.0-RC1"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.1.0-RC1"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "Provide a @JobParameter annotation for more convenient access to variables in JobParameters. #5563 · Add PageableItemReader #5477 · Make JsonLineMapper agnostic to the JSON library #5345"
---

# spring-batch v6.1.0-RC1

## :star: New features

 - Provide a `@JobParameter` annotation for more convenient access to variables in `JobParameters`. [#5563](https://github.com/spring-projects/spring-batch/issues/5563)
 - Add `PageableItemReader` [#5477](https://github.com/spring-projects/spring-batch/pull/5477)
 - Make `JsonLineMapper` agnostic to the JSON library [#5345](https://github.com/spring-projects/spring-batch/pull/5345)
 - Introduce `JsonLineAggregator` for `FlatFileItemWriter` to write JSON Lines format file [#5344](https://github.com/spring-projects/spring-batch/pull/5344)
 - Supports to create step execution with context [#5184](https://github.com/spring-projects/spring-batch/pull/5184)

## :rocket: Enhancements

 - Introduce `RemoteChunkingManagerBuilder` and deprecate `RemoteChunkingManagerStepBuilder` and its factory [#5598](https://github.com/spring-projects/spring-batch/issues/5598)
 - `JdbcJobExecutionDao.findJobExecutions` issues 1 + 3N queries for N executions [#5570](https://github.com/spring-projects/spring-batch/issues/5570)
 - Polish `DatabaseType` [#5542](https://github.com/spring-projects/spring-batch/pull/5542)
 - Improve `JdbcJobExecutionDao#synchronizeStatus(StepExecution)` [#5365](https://github.com/spring-projects/spring-batch/pull/5365)
 - Refactor JDBC DAOs to use named parameters instead of positional parameters and `JdbcClient` instead of `JdbcTemplate` [#4804](https://github.com/spring-projects/spring-batch/issues/4804)
 - Eliminate unnecessary query for current version [#4797](https://github.com/spring-projects/spring-batch/pull/4797)
 - Poll workers of a partitioned step with a database query [#4705](https://github.com/spring-projects/spring-batch/pull/4705)
 - Running a job causes retrieval of full history of job executions [#4169](https://github.com/spring-projects/spring-batch/issues/4169)
 - Not unique steps names in a `FlowJob` should log a warning [#3757](https://github.com/spring-projects/spring-batch/issues/3757)

## :lady_beetle: Bug fixes

 - Restart after a chunk scan that ended with a skipped item processes that item again [#5599](https://github.com/spring-projects/spring-batch/issues/5599)
 - `ChunkOrientedStep` does not restore the step execution when a chunk transaction is not committed [#5594](https://github.com/spring-projects/spring-batch/issues/5594)
 - `MongoCursorItemReader` throws `NullPointerException` when closed before opening [#5589](https://github.com/spring-projects/spring-batch/issues/5589)
 - MariaDB 6.0 migration fails when renaming `BATCH_JOB_SEQ` [#5586](https://github.com/spring-projects/spring-batch/issues/5586)
 - listener exceptions are skippable in scan mode but fatal elsewhere [#5585](https://github.com/spring-projects/spring-batch/issues/5585)
 - Fix missing page increase in `AbstractPaginatedDataItemReader` [#5583](https://github.com/spring-projects/spring-batch/pull/5583)
 - Job-scoped beans are not usable from worker threads of multi-threaded steps and parallel flows [#5576](https://github.com/spring-projects/spring-batch/issues/5576)
 - `BatchObservabilityBeanPostProcessor` doesn't respect manually configured `observationRegistry` [#5566](https://github.com/spring-projects/spring-batch/issues/5566)
 - Failed job launch leaves an orphan `JobInstance` behind [#5562](https://github.com/spring-projects/spring-batch/issues/5562)
 - Restart after a failure during chunk scanning skips the remaining items of the chunk in `ChunkOrientedStep` [#5558](https://github.com/spring-projects/spring-batch/issues/5558)
 - `NullPointerException` when closing an unopened `JpaPagingItemReader` [#5539](https://github.com/spring-projects/spring-batch/issues/5539)
 - Misleading logs in scan mode without retries [#5527](https://github.com/spring-projects/spring-batch/issues/5527)
 - `FlatFileItemReaderBuilder.addComment()` throws `UnsupportedOperationException` after `comments(...)` [#5520](https://github.com/spring-projects/spring-batch/issues/5520)
 - `DelimitedLineTokenizer` throws `StringIndexOutOfBoundsException` when a field is a single quote character [#5519](https://github.com/spring-projects/spring-batch/issues/5519)
 - `FixedLengthTokenizer` in strict mode rejects lines when the open-ended range starts at or before the first range's min [#5518](https://github.com/spring-projects/spring-batch/issues/5518)
 - `JobFlowExecutor` leaks a `StepExecution` across job executions on a shared thread when no transition matches a step's `ExitStatus` [#5514](https://github.com/spring-projects/spring-batch/issues/5514)
 - Aggregator of remote partitions is not passed all worker steps upon controller restart [#5158](https://github.com/spring-projects/spring-batch/issues/5158)

## 📔 Documentation

 - `JpaItemWriter` description in Appendix of documentation is wrong [#5556](https://github.com/spring-projects/spring-batch/issues/5556)

## 🆙  Dependency Upgrades

Spring Framework: 7.1.0-RC1
Spring Integration: 7.2.0-RC1
Spring AMQP: 4.2.0-RC1
Spring Kafka: 4.2.0-RC1
Spring Data: 2026.1.0-RC1
Spring LDAP: 4.2.0-RC1
Micrometer: 1.18.0-RC1

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@ahrytsiuk, @Akhil-1527, @AndreaBosmanWork, @beyondwin, @COBI-98, @hunseonglee, @Ichanskiy, @jjh75607, @jjj-n, @PauliusPeciura, @pius712, @quaff, @ryujungkyun, and @scordio

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.1.0-RC1` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.1.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
