---
title: "spring-batch v6.0.0"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.0"
published: "2025-11-19"
type: "major"
lang: "en"
summary: "Spring Batch 6.0 is a major release that comes with several new features, enhancements, and bug fixes. This release introduces a number of API breaking changes and deprecations."
---

# spring-batch v6.0.0

Spring Batch 6.0 is a major release that comes with several new features, enhancements, and bug fixes. This release introduces a number of API breaking changes and deprecations. Please refer to the [migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-6.0-Migration-Guide) for the full list of changes.

## :star: New features

- Migrate to JSpecify annotations for nullability constraints [#4673](https://github.com/spring-projects/spring-batch/issues/4673)
- Add API to recover failed job executions [#4876](https://github.com/spring-projects/spring-batch/issues/4876)
- Add support for observability with the Java Flight Recorder [#4972](https://github.com/spring-projects/spring-batch/issues/4972)
- Add ability to externally stop any kind of step [#4965](https://github.com/spring-projects/spring-batch/issues/4965)
- Revisit the concurrency model [#4955](https://github.com/spring-projects/spring-batch/issues/4955)
- Use contextual lambdas to configure batch artefacts #4818
- Add support for local chunking #5021
- Add support for remote step executions #5024
- Add shutdown hook to gracefully stop job executions on sigterm #5028
- Add support for Jackson 3 #4842
- Support SEDA with Spring Integration `MessageChannel`s #4719
- Introduce a modern command line batch operator [#4899](https://github.com/spring-projects/spring-batch/issues/4899)
- Add ability to use bean names for jobs and steps [#4858](https://github.com/spring-projects/spring-batch/issues/4858)
- Make `MapJobRegistry` smart enough to auto register jobs defined in the application context [#4855](https://github.com/spring-projects/spring-batch/issues/4855)
- Make `MessageChannelPartitionHandler` usable with any job repository implementations [#4917](https://github.com/spring-projects/spring-batch/issues/4917)
- Add optimistic locking for meta-data deletion #4793
- Make `Job` interface a functional interface [#4966](https://github.com/spring-projects/spring-batch/issues/4966)
- Make `Step` interface a functional interface [#4976](https://github.com/spring-projects/spring-batch/issues/4976)
- Add `StepExecution` parameter to `StoppableTasklet.stop()` [#4703](https://github.com/spring-projects/spring-batch/issues/4703)
- Add ability to configure Mongo sequence incrementers [#5018](https://github.com/spring-projects/spring-batch/issues/5018)
- Remove usage of Micrometer's global static meter registry [#4968](https://github.com/spring-projects/spring-batch/issues/4968)
- Add support for delete operations in MongoDB DAOs #5060
- Use existing `ItemWriter` with `CompositeItemWriter` expecting different item types #4735
- Automatically register ItemHandler as StepListener instead of only StepExecutionListener in ChunkOrientedStepBuilder #5087

## :rocket: Enhancements

- Improve experience when configuring an alternative `JobRepository`  [#4718](https://github.com/spring-projects/spring-batch/issues/4718)
- Improve performance of `JdbcStepExecutionDao::getStepExecution` #4799
- Improve update sql for optimistic locking #4792
- Improve `JobOperator` API by using domain types instead of primitive types [#4845](https://github.com/spring-projects/spring-batch/issues/4845)
- Improve `JobOperator` by reducing its scope to job operations only [#4833](https://github.com/spring-projects/spring-batch/issues/4833)
- Core API simplification [#4847](https://github.com/spring-projects/spring-batch/issues/4847)
- Move core APIs in dedicated packages [#4877](https://github.com/spring-projects/spring-batch/issues/4877)
- Move listener APIs under `core.listener` package [#4867](https://github.com/spring-projects/spring-batch/issues/4867)
- Move `core.explore` package under `core.repository` [#4827](https://github.com/spring-projects/spring-batch/issues/4827)
- Move core partitioning APIs under `org.springframework.batch.core.partition` [#4849](https://github.com/spring-projects/spring-batch/issues/4849)
- Move DAOs implementations to separate packages [#4848](https://github.com/spring-projects/spring-batch/issues/4848)
- Remove unnecessary generic from `JobKeyGenerator` interface [#4886](https://github.com/spring-projects/spring-batch/issues/4886)
- Remove usage of `JobFactory` in `JobRegistry`` [#4854](https://github.com/spring-projects/spring-batch/issues/4854)
- Remove dependency to `JobExplorer` in `SimpleJobOperator` [#4817](https://github.com/spring-projects/spring-batch/issues/4817)
- Remove `JobExplorer` bean registration from the default batch configuration [#4825](https://github.com/spring-projects/spring-batch/issues/4825)
- Remove unnecessary reflection in RemoteChunkHandlerFactoryBean #4839
- Rename `SimpleJobOperator` to `TaskExecutorJobOperator` [#4834](https://github.com/spring-projects/spring-batch/issues/4834)
- Rename `JobRepositoryFactoryBean` to `JdbcJobRepositoryFactoryBean` [#4829](https://github.com/spring-projects/spring-batch/issues/4829)
- `FlatFileItemReaderBuilder` : raise check exception on build [#4757](https://github.com/spring-projects/spring-batch/issues/4757)
- Make `JobOperator` extend `JobLauncher` [#4832](https://github.com/spring-projects/spring-batch/issues/4832)
- Make `JobRepository` extend `JobExplorer` [#4824](https://github.com/spring-projects/spring-batch/issues/4824)
- Redundant methods in `JobExplorer`/`JobInstanceDao` APIs [#4821](https://github.com/spring-projects/spring-batch/issues/4821)
- Introduce `ErrorProne`, fix compiler warnings #4807
- Add Redis integration tests #4892
- Fail test if no exception is thrown in `testErrorMessageWhenNoLineTokenizerWasProvided` #4883
- Refactor AOT proxy hints for better type safety #4881
- Refactor `ExitStatus#isRunning` for type-safety #4783
- Mark argument to `ExitStatus#equals` as nullable #4823
- Use typesafe variant of `ctx::getBean` instead #4803
- Use `jdbcTemplate.queryForStream().findFirst()` where appropriate #4802
- Reuse existing SQL where feasible #4801
- Revisit the chunk-oriented processing model implementation [#3950](https://github.com/spring-projects/spring-batch/issues/3950)
- Allow a StepInterruptionPolicy to be injected through the step builder [#1641](https://github.com/spring-projects/spring-batch/issues/1641)
- Make `JobRegistry` optional in the default batch configuration [#4971](https://github.com/spring-projects/spring-batch/issues/4971)
- Make transaction manager optional in `JobOperatorFactoryBean` [#4970](https://github.com/spring-projects/spring-batch/issues/4970)
- Make transaction manager optional in Tasklet and Chunk-Oriented steps [#4974](https://github.com/spring-projects/spring-batch/issues/4974)
- Segregate StepLocator methods in a sub interface [#5015](https://github.com/spring-projects/spring-batch/issues/5015)
- Move infrastructure APIs under a specific package [#5014](https://github.com/spring-projects/spring-batch/issues/5014)
- Revisit exception declaration in public APIs [#5013](https://github.com/spring-projects/spring-batch/issues/5013)
- Move built-in job parameter incrementers to the org.springframework.batch.core.job.parameters package [#5011](https://github.com/spring-projects/spring-batch/issues/5011)
- Broken encapsulation of job parameter attributes [#5010](https://github.com/spring-projects/spring-batch/issues/5010)
- Incorrect nullability definition in public APIs input [#4989](https://github.com/spring-projects/spring-batch/issues/4989)
- Update retrieval methods with clear nullability semantics [#4988](https://github.com/spring-projects/spring-batch/issues/4988)
- Incorrect default constructor in AbstractStep [#4984](https://github.com/spring-projects/spring-batch/issues/4984)
- Make domain model entities immutable [#1870](https://github.com/spring-projects/spring-batch/issues/1870)
- Improve performance of `JdbcStepExecutionDao::getLastStepExecution` #4798
- Optimize step executions counting in `MongoStepExecutionDao` #5061
- Change configuration log level to debug #5055
- Remove unused id from persistence domain object #5054
- Missing comma in `StepExecution#getSummary` #5025
- Improve performance of `DefaultFieldSet.indexOf()` method #4930
- Improve `MessageChannelPartitionHandler::receiveReplies` #4776
- CommandLineJobOperator improve state validation for restart/abandon and enhance logging #5057
- Inaccurate error message when using ResourcelessJobRepository with a partitioned step #4732
- SQL Server DDL for metadata tables should use NVARCHAR to prevent performance degradation and deadlocks from implicit conversion #5064
- Potential parameter key collision in .getUniqueJobParameters() #5088

## :lady_beetle: Bug fixes

- RecordFieldExtractor in FlatFileItemWriterBuilder doesn't reflect names() setting #4916
- Incorrect warning when starting a job with an empty parameters set [#4914](https://github.com/spring-projects/spring-batch/issues/4914)
- Incorrect handling of job parameters when using a `JobParametersIncrementer` [#4910](https://github.com/spring-projects/spring-batch/issues/4910)
- Write Skip Count Not Updated in Chunk Processing [#4514](https://github.com/spring-projects/spring-batch/issues/4514)
- Build failure with GraalVM 24 [#4937](https://github.com/spring-projects/spring-batch/issues/4937)
- Incorrect step execution id generation in `ResourcelessJobRepository` [#4975](https://github.com/spring-projects/spring-batch/issues/4975)
- Conflicting info in `@AfterChunk`/`@BeforeChunk` annotation javadoc to current implementation [#4961](https://github.com/spring-projects/spring-batch/issues/4961)
- `RecordFieldSetMapper` fails with `Record` without components [#4900](https://github.com/spring-projects/spring-batch/issues/4900)
- `JsonObjectReader` fails to read JSON array format due to Jackson 3.0 `FAIL_ON_TRAILING_TOKENS` default change #5047
- `ChunkOrientedStep`: Unnecessary `ItemReader.read()` calls when chunk size exceeds item count #5048
- `JobParameter` constructor validates wrong parameter (value instead of name) #5049
- Incorrect error message in `JobOperatorTestUtils` constructor #5051
- `ChunkOrientedStepBuilder` throws `IllegalArgumentException` when retry() is used(configured) without retryLimit() #5068
- `ChunkOrientedStepBuilder` throws `IllegalArgumentException` when skip() is used(configured) without skipLimit() #5069
- `MongoJobExecutionDao` doesn't handle temporal job parameter types correctly #5063
- Incorrect Step status in `StepExecutionListener#afterStep` #4362
- Cannot deserialize `TopicPartition` from `JobRepository` #3797
- Incorrect restart behaviour with no identifying job parameters #4755
- Incorrect ordering when retrieving job executions with `JobExecutionDao` #5062
- Errors are not propagated from job execution #808
- Spring batch terminate in started status after sigterm #4023
- Jdbc Hibernate Connection closed prematurly when launching a Job #5006
- `OptimisticLockingFailureException` caused by `jobExecutionDao.updateJobExecution(jobExecution)` #5022
- Missing GraalVM native image hints for `StepContext.getJobParameters()` #5041
- StepBuilder(JobRepository) fails due to timing mismatch between constructor validation and BeanNameAware #5027
- `RecursiveCollectionLineAggregator.aggregate()` fails on empty collection input #5023
- Incorrect retrieval of last step execution with MongoDB #4896
- Fix potential NPE in `JdbcJobExecutionDao` #5044
- Error in the metrics registration with a meter registry customization [#4759](https://github.com/spring-projects/spring-batch/issues/4759)
- Activation of Actuator & Prometheus rise a WARN in the log due to bad configuration [#4753](https://github.com/spring-projects/spring-batch/issues/4753)
- ChunkOrientedStepBuilder: Default SkipPolicy should be NeverSkipItemSkipPolicy when only retry is configured (not AlwaysSkipItemSkipPolicy) #5077
- ChunkOrientedStepBuilder: All Throwables (including Errors) are retried when only retryLimit() is configured without retry() #5078
- ChunkOrientedStep does not throw exception when skipPolicy.shouldSkip() returns false #5079
- ChunkOrientedStepBuilder does not apply StepBuilderHelper properties (allowStartIfComplete, startLimit, stepExecutionListeners) #5093
- ChunkOrientedStep: Retry exhausted in ItemWriter always triggers Chunk Scanning regardless of skip eligibility #5091
- JobLauncherTestUtils throws an NPE at getJobLauncher() in Batch 6 RC2 #5090

## 📖 Documentation updates

- Documentation for disabling spring batch metrics is incomplete [#4800](https://github.com/spring-projects/spring-batch/issues/4800)
- Polish code block style and fix typo in `whatsnew.adoc` [#4901](https://github.com/spring-projects/spring-batch/pull/4901)
- Fix javadoc in `JdbcCursorItemReaderBuilder` [#4838](https://github.com/spring-projects/spring-batch/pull/4838)
- Correct comment in RemoteChunkingJobFunctionalTests #4822
- Include Javadocs as part of Antora docs
- FaultTolerantStepBuilder#skipLimit Javadoc is misleading with custom skipPolicy #4963
- Fix grammar error in testing documentation #4979
- Improve javadoc of `JobInstanceDao#getJobNames` method #5043
- Elaborate usage of PlatformTransactionManager #4787
- Document requirements of CommandLineJobOperator in the reference docs #5026
- Clarify MongoDB job repository configuration in reference documentation #4859
- Unclear reference to example about job parameters in reference documentation #4791

# 🆙 Dependency Upgrades

* Spring Framework: 7.0.0
* Spring Integration: 7.0.0
* Spring AMQP: 4.0.0
* Spring Kafka: 4.0.0
* Spring Data: 4.0.0
* Spring Ldap: 4.0.0
* Micrometer: 1.16.0

## :hammer: Tasks

- Add integration tests for DDL migration scripts #4289
- Replace usage of `JobExplorer` with `JobRepository` in `RemoteStepExecutionAggregator` [#4928](https://github.com/spring-projects/spring-batch/issues/4928)
- Replace usage of `JobExplorer` with `JobRepository` in `SystemCommandTasklet` [#4927](https://github.com/spring-projects/spring-batch/issues/4927)
- Replace usage of `JobLauncher` with `JobOperator` in `JobLaunchingGateway` and `JobLaunchingMessageHandler` [#4924](https://github.com/spring-projects/spring-batch/issues/4924)
- Replace usage of `JobLauncher` with `JobOperator` in `JobStep` [#4923](https://github.com/spring-projects/spring-batch/issues/4923)
- Replace usage of `JobExplorer` with `JobRepository` in `StepExecutionRequestHandler` [#4918](https://github.com/spring-projects/spring-batch/issues/4918)
- Rename `JobLauncherTestUtils` to `JobOperatorTestUtils` [#4920](https://github.com/spring-projects/spring-batch/issues/4920)
- Rename `JobExplorerFactoryBean` to `JdbcJobExplorerFactoryBean` [#4846](https://github.com/spring-projects/spring-batch/issues/4846)
- Deprecate `StepRunner` [#4921](https://github.com/spring-projects/spring-batch/issues/4921)
- Deprecate modular job configuration through `EnableBatchProcessing` [#4866](https://github.com/spring-projects/spring-batch/issues/4866)
- Remove usage of `JobExplorer` in `BatchIntegrationConfiguration` [#4919](https://github.com/spring-projects/spring-batch/issues/4919)
- Remove deprecated APIs scheduled for removal in v6 [#4819](https://github.com/spring-projects/spring-batch/issues/4819)
- Update GraalVM runtime hints [#4844](https://github.com/spring-projects/spring-batch/issues/4844)
- Deprecate JobRepository#getStepExecution(long jobExecutionId, long stepExecutionId) [#5007](https://github.com/spring-projects/spring-batch/issues/5007)
- Deprecate the batch XML namespace [#4843](https://github.com/spring-projects/spring-batch/issues/4843)
- Deprecate JUnit 4 support [#4816](https://github.com/spring-projects/spring-batch/issues/4816)
- Update Micrometer's Prometheus support to version 1.x [#4689](https://github.com/spring-projects/spring-batch/issues/4689)

## :heart: Contributors

Many thanks to all contributors who made this release possible! 

@darth-raijin, @itis821, @jbotuck, @martinfrancois, @noojung, @patrickwinti, @sieunie, @sjiwon, @therepanic, @thelightway24, @ch200203, @monnetchr, @Chienlin1014, @lucas-gautier, @PENEKhun, @kyb4312.

A special thanks to @scordio , @quaff and @KILL9-NO-MERCY for their amazing feedback and numerous contributions 🙏

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.0` · 2025-11-19 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
