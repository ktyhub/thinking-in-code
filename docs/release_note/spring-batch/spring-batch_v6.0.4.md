---
title: "spring-batch v6.0.4"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.4"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "Optimize MongoStepExecutionDao#getLastStepExecution to filter and sort at the database level #5385 · Performance in SimpleJobRepository.update(StepExecution) since Spring Batch 6.x #5360"
---

# spring-batch v6.0.4

## :rocket: Enhancements

- Optimize MongoStepExecutionDao#getLastStepExecution to filter and sort at the database level [#5385](https://github.com/spring-projects/spring-batch/issues/5385)
- Performance in SimpleJobRepository.update(StepExecution) since Spring Batch 6.x [#5360](https://github.com/spring-projects/spring-batch/issues/5360)
- MongoJobExecutionDao.findRunningJobExecutions issues N+1 MongoDB queries [#5356](https://github.com/spring-projects/spring-batch/issues/5356)

## :lady_beetle: Bug fixes

- Generic SkipListener in ChunkOrientedStepBuilder [#5412](https://github.com/spring-projects/spring-batch/issues/5412)
- ResourcelessJobRepository::getJobInstanceCount violate API contract [#5411](https://github.com/spring-projects/spring-batch/issues/5411)
- ScopeNotActiveException with `@StepScope` and Local Chunking [#5398](https://github.com/spring-projects/spring-batch/issues/5398)
- RecordFieldSetMapper rejects null values for nullable types after jSpecify nullability refinement [#5392](https://github.com/spring-projects/spring-batch/issues/5392)
- EmptyResultDataAccessException  on getLastJobExecution when no job execution is found [#5389](https://github.com/spring-projects/spring-batch/issues/5389)
- FlowStep sets job status to completed even when there are more pending steps [#5381](https://github.com/spring-projects/spring-batch/issues/5381)
- Incorrect handling of skip policy with JPA infrastructure [#5377](https://github.com/spring-projects/spring-batch/issues/5377)
- ExitStatus#setExitException breaks immutability contract [#5366](https://github.com/spring-projects/spring-batch/issues/5366)
- Chunk scan mode does not isolate each scanned item in its own transaction [#5361](https://github.com/spring-projects/spring-batch/issues/5361)
- Generic ItemReader in ChunkOrientedStepBuilder [#5358](https://github.com/spring-projects/spring-batch/issues/5358)
- NullPointerException in   JacksonJsonObjectReader.close() and   GsonJsonObjectReader.close() [#5281](https://github.com/spring-projects/spring-batch/issues/5281)
- MongoJobInstanceDao: getJobNames() violates interface contract and getJobInstances() performs pagination in memory [#5274](https://github.com/spring-projects/spring-batch/issues/5274)
- appendAllowed(true) breaks JSON array when the writer is opened/written/closed multiple times [#5272](https://github.com/spring-projects/spring-batch/issues/5272)
- ExecutionContext dirty flag is never cleared [#5249](https://github.com/spring-projects/spring-batch/issues/5249)
- SimpleStepExecutionSplitter does not restart COMPLETED partitions even when allowStartIfComplete=true [#5238](https://github.com/spring-projects/spring-batch/issues/5238)
- JsonItemReaderBuilder should not substitute null resource with ByteArrayResource [#5234](https://github.com/spring-projects/spring-batch/issues/5234)
- SynchronizedItemStreamReader update call is not threadsafe [#5201](https://github.com/spring-projects/spring-batch/issues/5201)
- CompositeItemReader Does Not Reset Iterator for Subsequent Job Executions [#4926](https://github.com/spring-projects/spring-batch/issues/4926)

## :notebook_with_decorative_cover: Documentation

- Missing documentation about transaction management in multi-threaded steps [#5386](https://github.com/spring-projects/spring-batch/issues/5386)
- Outdated documentation in Scalability reference page [#5355](https://github.com/spring-projects/spring-batch/issues/5355)
- Stop/restart sample README references a test that no longer exists [#5391](https://github.com/spring-projects/spring-batch/issues/5391)
- Unable to use JsonLineMapper with Jackson 2 [#5330](https://github.com/spring-projects/spring-batch/issues/5330)

## :hammer: Tasks

- Restore LDIF support test coverage [#5236](https://github.com/spring-projects/spring-batch/issues/5236)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@banseok1216, @acktsap, @seonwooj0810, @won-seoop, @KMGeon, @quaff, @combe4259, @therepanic, @ShinjoWang, @Wordbe, @goutamadwant, @gideruette, @seonwooj0810, @MinChul-Son

---
**Full Changelog**: https://github.com/spring-projects/spring-batch/compare/v6.0.3...v6.0.4

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.4` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
