---
title: "spring-batch v6.1.0-M2"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.1.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "Allow to use Mongo JobRepository with any PlatformTransactionManager #5508 · Add a builder for ResourcesItemReader with support for specifying resources via a pattern #5487 · Introduce BatchConstants #5190"
---

# spring-batch v6.1.0-M2

## :star: New features

- Allow to use Mongo `JobRepository` with any `PlatformTransactionManager` [#5508](https://github.com/spring-projects/spring-batch/pull/5508)
- Add a builder for `ResourcesItemReader` with support for specifying resources via a pattern [#5487](https://github.com/spring-projects/spring-batch/issues/5487)
- Introduce `BatchConstants` [#5190](https://github.com/spring-projects/spring-batch/pull/5190)
- Default reader/writer name to the bean name [#5149](https://github.com/spring-projects/spring-batch/issues/5149)
- Support specifying resource locations using a pattern in `MultiResourceItemReaderBuilder` [#5056](https://github.com/spring-projects/spring-batch/issues/5056)
- Add support for custom collection prefix in MongoDB Job repository [#4980](https://github.com/spring-projects/spring-batch/issues/4980)
- Add compile-time safety for mutually exclusive builder methods [#4888](https://github.com/spring-projects/spring-batch/issues/4888)
- Add schema locations to `DatabaseType` to prevent typos in the metadata tables string path [#4586](https://github.com/spring-projects/spring-batch/issues/4586)

## :lady_beetle: Bug fixes

- Repository/DAO-level count methods cannot soundly validate job/step existence [#5544](https://github.com/spring-projects/spring-batch/issues/5544)
- `@OnSkipInRead`/`@OnSkipInProcess`/`@OnSkipInWrite` methods are ignored by `ChunkOrientedStepBuilder#listener(Object)` [#5531](https://github.com/spring-projects/spring-batch/issues/5531)
- Rolled-back chunk counted as written and step COMPLETED in `ChunkOrientedStep` (fault-tolerant retry of `OptimisticLockException`) [#5509](https://github.com/spring-projects/spring-batch/issues/5509)
- `TransientTransactionError` in `MongoSequenceIncrementer` during parallel job executions [#5507](https://github.com/spring-projects/spring-batch/issues/5507)
- Fix QName deserialization in `JacksonExecutionContextStringSerializer` [#5502](https://github.com/spring-projects/spring-batch/pull/5502)
- `ChunkOrientedStep` scan mode passes the processed chunk to `ChunkListener#beforeChunk` and silently drops scan items when the listener throws [#5493](https://github.com/spring-projects/spring-batch/issues/5493)
- `ChunkOrientedStep` does not re-invoke the `ItemProcessor` during chunk scanning, unlike `FaultTolerantChunkProcessor` [#5490](https://github.com/spring-projects/spring-batch/issues/5490)
- `JpaCursorItemReader.doClose()` missing null check on entityManager [#5486](https://github.com/spring-projects/spring-batch/issues/5486)
- Fix incorrect nullability contract for encoding in `StaxEventItemReader` [#5483](https://github.com/spring-projects/spring-batch/pull/5483)
- `JsonFunctionalTests` fails on Windows due to CRLF [#5481](https://github.com/spring-projects/spring-batch/issues/5481)
- `@OnChunkError` is never invoked on a chunk-oriented step [#5468](https://github.com/spring-projects/spring-batch/issues/5468)
- Interface listener callbacks are invoked twice when an item handler also has a listener annotation [#5466](https://github.com/spring-projects/spring-batch/issues/5466)
- `spring.batch.job.launch.count` is silently missing: the `JobOperator` keeps `ObservationRegistry.NOOP` on most configuration paths [#5463](https://github.com/spring-projects/spring-batch/issues/5463)
- Inconsistent JobParameter type handling between storage and retrieval in Spring Batch 6.x [#5455](https://github.com/spring-projects/spring-batch/issues/5455)
- `@BeforeStep`/`@AfterStep` methods are ignored by `ChunkOrientedStepBuilder#listener(Object)` [#5451](https://github.com/spring-projects/spring-batch/issues/5451)
- Replace jetbrains `@NotNull` with jspecify `@NonNull` [#5443](https://github.com/spring-projects/spring-batch/pull/5443)
- `SimpleJobOperator.restart(JobExecution)` masks the real failure reason with a misleading "job execution already running" message [#5439](https://github.com/spring-projects/spring-batch/issues/5439)
- Missing GraalVM runtime hints for MongoDB persistence model classes and resources [#5435](https://github.com/spring-projects/spring-batch/issues/5435)
- Fix `JsonFileItemWriter` to produce valid JSON when append allowed with custom header/footer callback [#5432](https://github.com/spring-projects/spring-batch/issues/5432)
- Step name is null when the step is not defined as a bean and not assigned a name [#5278](https://github.com/spring-projects/spring-batch/issues/5278)
- Forced Sort Passing via `sorts()` Method When Building with `MongoCursorItemReaderBuilder` and Query [#4860](https://github.com/spring-projects/spring-batch/issues/4860)
- Incorrect invocation order of job execution listener in remote partitioning [#4133](https://github.com/spring-projects/spring-batch/issues/4133)
- Remote-chunking implementation does not support parallel executions of the same job [#1372](https://github.com/spring-projects/spring-batch/issues/1372)

## :rocket: Enhancements

- Remove redundant methods which are identical to default method [#5516](https://github.com/spring-projects/spring-batch/pull/5516)
- Inconsistent builder method name: `MultiResourceItemReaderBuilder.setStrict()` [#5512](https://github.com/spring-projects/spring-batch/issues/5512)
- Improve `DefaultJobParametersConverter` and `JsonJobParametersConverter` [#5457](https://github.com/spring-projects/spring-batch/pull/5457)
- Replace `isAssignableFrom()` with `isInstance()` where feasible [#5427](https://github.com/spring-projects/spring-batch/pull/5427)
- Remove unused `ClassUtils` import from `JdbcPagingItemReader` [#5407](https://github.com/spring-projects/spring-batch/pull/5407)
- Add `@FunctionalInterface` to `StepInterruptionPolicy` [#5402](https://github.com/spring-projects/spring-batch/pull/5402)
- Fix `SimpleJobOperator` jobRegistry state message [#5369](https://github.com/spring-projects/spring-batch/pull/5369)
- Replace deprecated `Jackson2JsonMessageConverter` with `JacksonJsonMessageConverter` [#5350](https://github.com/spring-projects/spring-batch/pull/5350)
- Replace `System.getProperty("line.separator")` with `System.lineSeparator()` [#5341](https://github.com/spring-projects/spring-batch/pull/5341)
- Remove unnecessary null check against createTime of execution [#5304](https://github.com/spring-projects/spring-batch/pull/5304)
- Inaccurate exception message when attempting to start a running job [#5280](https://github.com/spring-projects/spring-batch/issues/5280)
- Improve `JacksonExecutionContextStringSerializer` [#5233](https://github.com/spring-projects/spring-batch/pull/5233)
- Replace custom converters with `DefaultFormattingConversionService` [#5186](https://github.com/spring-projects/spring-batch/pull/5186)
- Move async processing APIs to `spring-batch-core` [#5185](https://github.com/spring-projects/spring-batch/issues/5185)
- Replace `CopyOnWriteArrayList` with `ArrayList` in `JdbcPagingItemReader` and `JpaPagingItemReader` for performance and correctness [#5112](https://github.com/spring-projects/spring-batch/issues/5112)
- Add flushing support in `RepositoryItemWriter` [#5073](https://github.com/spring-projects/spring-batch/issues/5073)

## :notebook_with_decorative_cover: Documentation

- Fix Javadoc [#5545](https://github.com/spring-projects/spring-batch/pull/5545)
- Inaccurate documentation of remote chunking and remote partitioning samples regarding JMS headers [#5513](https://github.com/spring-projects/spring-batch/issues/5513)
- Fix typos in Javadoc comments [#5511](https://github.com/spring-projects/spring-batch/pull/5511)
- Clarify retryable reads compatibility with forward-only semantics [#5510](https://github.com/spring-projects/spring-batch/issues/5510)
- Clarify `SkipListener` contract and reference docs about transaction scope [#5494](https://github.com/spring-projects/spring-batch/issues/5494)
- Reference documentation's tracing example registers a handler that creates no spans and fails the job [#5475](https://github.com/spring-projects/spring-batch/issues/5475)
- Fix typo in Javadoc of `JobOperator.start()` [#5434](https://github.com/spring-projects/spring-batch/pull/5434)
- Wrong example in `Registering ItemStream with a Step` [#5429](https://github.com/spring-projects/spring-batch/issues/5429)
- Fix incorrect Javadoc reference in `JobExecution.isStopped()` [#5414](https://github.com/spring-projects/spring-batch/pull/5414)
- Fix javadoc in `SqlPagingQueryUtils` [#5403](https://github.com/spring-projects/spring-batch/pull/5403)
- Fix typo in `EnableBatchProcessing` Javadoc [#5375](https://github.com/spring-projects/spring-batch/pull/5375)
- Inaccurate JavaDoc of `BatchStatus.isLessThanOrEqualTo` [#5285](https://github.com/spring-projects/spring-batch/issues/5285)
- Enhance documentation about leveraging `IteratorItemReader` to reuse scrolling APIs from Spring Data [#4484](https://github.com/spring-projects/spring-batch/issues/4484)

## :hammer: Tasks

- Consistently use .version suffix for version properties in pom.xml [#5506](https://github.com/spring-projects/spring-batch/pull/5506)
- Update Apache Artemis groupId to `org.apache.artemis` [#5482](https://github.com/spring-projects/spring-batch/pull/5482)
- Update Groovy version to 5.1.2 [#5327](https://github.com/spring-projects/spring-batch/pull/5327)
- Deprecate `JobExecution` convenience getters for `JobInstance` id [#5533](https://github.com/spring-projects/spring-batch/pull/5533)
- Deprecate `setRepository` in `RepositoryItemWriter` [#5473](https://github.com/spring-projects/spring-batch/pull/5473)
- Deprecate `setRepository` and `setSorts` in `RepositoryItemReader` [#5472](https://github.com/spring-projects/spring-batch/pull/5472)
- Deprecate Derby support since Apache Derby is retired [#5254](https://github.com/spring-projects/spring-batch/issues/5254)
- Deprecate `JobInstance::getInstanceId` for removal to eliminate redundancy [#5244](https://github.com/spring-projects/spring-batch/pull/5244)
- Deprecate `StepExecution` convenience getters for `JobExecution` id and parameters [#5142](https://github.com/spring-projects/spring-batch/issues/5142)
- Deprecate `setEntityManagerFactory` in JPA item readers/writer [#5101](https://github.com/spring-projects/spring-batch/issues/5101)

## 🆙  Dependency Upgrades

Spring Framework: 7.1.0-M2
Spring Integration: 7.2.0-M2
Spring AMQP: 4.2.0-M2
Spring Kafka: 4.2.0-M2
Spring Data: 2026.1.0-M2
Micrometer: 1.18.0-M2

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@acktsap, @apptie, @banseok1216, @benelog, @cladren123, @dhritimanchakra, @DragonFSKY, @enduf7686, @GaBaljaintheroom, @Gorock, @hutiefang76, @HyunWoo9930, @jjh75607, @KMGeon, @klopfdreh, @kojw1017, @kyungrae, @leedaegeon, @leestana01, @maequise, @mjd507, @noojung, @quaff, @scordio, @snowykte0426, @UsmanEjaz10, @won-seoop, @xxxxxxjun, and @yuseogi0218

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.1.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.1.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
