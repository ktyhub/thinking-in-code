---
title: "spring-batch v6.0.1"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.1"
published: "2025-12-17"
type: "patch"
lang: "en"
summary: "Spring Framework: 7.0.2 Spring Integration: 7.0.1 Spring AMQP: 4.0.1 Spring Kafka: 4.0.1 Spring Data: 4.0.1 Spring Ldap: 4.0.1 Micrometer: 1.16.1"
---

# spring-batch v6.0.1

## :lady_beetle: Bug fixes

- Local Chunking: `BatchStatus` remains `COMPLETED` when worker thread write fails [#5172](https://github.com/spring-projects/spring-batch/issues/5172)
- `RemotePartitioningWorkerStepBuilder` doesn't override all configuration methods from `StepBuilder` [#5150](https://github.com/spring-projects/spring-batch/issues/5150)
- Step execution no longer persisted after partitioner creates the context [#5138](https://github.com/spring-projects/spring-batch/issues/5138)
- Fault-tolerant step: `retry(Class)` traverses exception causes, `skip(Class)` does not [#5127](https://github.com/spring-projects/spring-batch/issues/5127)
- `ChunkOrientedStep.ChunkTracker` is not reset after step, allowing only a single execution of a particular step [#5126](https://github.com/spring-projects/spring-batch/issues/5126)
- Incorrect deprecation warning in `JobOperatorTestUtils.getJob()` [#5123](https://github.com/spring-projects/spring-batch/issues/5123)
- `MapJobRegistry` registers discovered Jobs by their bean name instead of their job name [#5122](https://github.com/spring-projects/spring-batch/issues/5122)
- StepExecution Update in `SimpleJobOperator.stop()` Causes `JobExecution.BatchStatus.UNKNOWN` after graceful stop [#5120](https://github.com/spring-projects/spring-batch/issues/5120)
- `ExecutionContext` not loaded when step execution is queried from the job repository [#5117](https://github.com/spring-projects/spring-batch/issues/5117)
- `MetaDataInstanceFactory.createStepExecution(JobParameters)` does not propagate `JobParameters` to `StepExecution` [#5115](https://github.com/spring-projects/spring-batch/issues/5115)
- `stop()` does not prevent upcoming steps to be executed anymore [#5114](https://github.com/spring-projects/spring-batch/issues/5114)
- `@EnableMongoJobRepository` fails with Invalid transaction attribute token: [SERIALIZABLE] [#5105](https://github.com/spring-projects/spring-batch/issues/5105)
- `EmptyResultDataAccessException` in `JobRepository.findRunningJobExecutions` for a completed job execution [#5104](https://github.com/spring-projects/spring-batch/issues/5104)
- Partitioned step stops processing when first partition is finished in new chunk processing implementation [#5099](https://github.com/spring-projects/spring-batch/issues/5099)
- Minor logging issue when a step or job completes instantly [#5037](https://github.com/spring-projects/spring-batch/issues/5037)

## :rocket: Enhancements

- Enhance `ResourcelessJobRepository` implementation for testing [#5139](https://github.com/spring-projects/spring-batch/issues/5139)
- Introduce schema-drop-mongodb.jsonl #5155
- Improve retrieval of running job executions #5131

## :notebook_with_decorative_cover: Documentation

- Fix typo in testing.adoc startJob method name [#5148](https://github.com/spring-projects/spring-batch/pull/5148)
- Fix some misspelling in the docs [#5111](https://github.com/spring-projects/spring-batch/pull/5111)
- Class JobParametersInvalidException mentioned in "Spring Batch 6.0 Migration Guide" but is not available in 6.0.0 [#5152](https://github.com/spring-projects/spring-batch/issues/5152)

## 🆙  Dependency Upgrades

Spring Framework: 7.0.2
Spring Integration: 7.0.1
Spring AMQP: 4.0.1
Spring Kafka: 4.0.1
Spring Data: 4.0.1
Spring Ldap: 4.0.1
Micrometer: 1.16.1

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@arey, @cppwfs, @quaff, @benelog, @banseok1216, @KILL9-NO-MERCY, @janossch, @therepanic

---
**Full Changelog**: https://github.com/spring-projects/spring-batch/compare/v6.0.0...v6.0.1

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.1` · 2025-12-17 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
