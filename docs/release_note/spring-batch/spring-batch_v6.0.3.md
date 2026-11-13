---
title: "spring-batch v6.0.3"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v6.0.3"
published: "2026-03-18"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-batch v6.0.3

## :star: New features

- Add configuration property to set the job instance incrementer name [#5245](https://github.com/spring-projects/spring-batch/issues/5245)
- Add support to configure job instance incrementer name through environment variable / system property #5332

## :rocket: Enhancements

- Inconsistent logging for step execution [#5279](https://github.com/spring-projects/spring-batch/issues/5279)
- Redundant null id null checks [#5250](https://github.com/spring-projects/spring-batch/issues/5250)

## :lady_beetle: Bug fixes

- skip listeners registered through ChunkOrientedStepBuilder#listener are ignored [#5347](https://github.com/spring-projects/spring-batch/issues/5347)
- Incorrect counters with local chunking [#5337](https://github.com/spring-projects/spring-batch/issues/5337)
- Exceptions are not reported with local chunking [#5336](https://github.com/spring-projects/spring-batch/issues/5336)
- CommandLineJobOperator.parse() truncates parameter values containing '=' [#5295](https://github.com/spring-projects/spring-batch/issues/5295)
- Incorrect rollbackCount in scan mode in ChunkOrientedStep [#5247](https://github.com/spring-projects/spring-batch/issues/5247)
- JobOperator creates its own MapJobRegistry ignoring explicitly defined JobRegistry Spring bean in application [#5229](https://github.com/spring-projects/spring-batch/issues/5229)
- Transaction is not rolled back before chunk scanning in ChunkOrientedStep with skip policy [#5210](https://github.com/spring-projects/spring-batch/issues/5210)
- Polymorphic StepExecutionListeners registered through ChunkOrientedStepBuilder#listener are ignored [#5094](https://github.com/spring-projects/spring-batch/issues/5094)
- V6 migration script for SQL Server fails [#5276](https://github.com/spring-projects/spring-batch/issues/5276)
- Reinstate inadvertently removed protected method in StaxEventItemWriter [#5260](https://github.com/spring-projects/spring-batch/issues/5260)

## :notebook_with_decorative_cover: Documentation

- Clarify ItemWriter contract regarding empty chunks [#5319](https://github.com/spring-projects/spring-batch/issues/5319)
- Fix incorrect javadoc references in JobContext [#5342](https://github.com/spring-projects/spring-batch/pull/5342)
- Improve and fix the Javadoc link [#5290](https://github.com/spring-projects/spring-batch/issues/5290)
- Missing documentation about fault tolerance features handling in local chunking [#5338](https://github.com/spring-projects/spring-batch/issues/5338)

## :hammer: Tasks

- Update test containers version [#5288](https://github.com/spring-projects/spring-batch/issues/5288)
- Add Dependabot for GitHub Actions #5259

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@jzheaux, @trisberg, @marschall , @beatjost, @Jony-Jas, @HongYeseul, @Wordbe, @scordio, @KMGeon, @banseok1216, @quaff , @GaBaljaintheroom and @yunhobb

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v6.0.3` · 2026-03-18 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
