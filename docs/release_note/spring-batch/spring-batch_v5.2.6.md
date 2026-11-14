---
title: "spring-batch v5.2.6"
project: "spring-batch"
repo: "spring-projects/spring-batch"
tag: "v5.2.6"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "CompositeItemReader Does Not Reset Iterator for Subsequent Job Executions #4926 · ExecutionContext dirty flag is never cleared #5249"
---

# spring-batch v5.2.6

## :lady_beetle: Bug fixes

- CompositeItemReader Does Not Reset Iterator for Subsequent Job Executions #4926
- ExecutionContext dirty flag is never cleared #5249
- appendAllowed(true) breaks JSON array when the writer is opened/written/closed multiple times #5272
- NullPointerException in JacksonJsonObjectReader.close() and GsonJsonObjectReader.close() #5281
- FlowStep sets job status to completed even when there are more pending steps #5381 

# 🆙 Dependency Upgrades

* Spring Framework: 6.2.19
* Spring Retry: 2.0.13
* Spring Kafka: 3.3.16
* Spring AMQP: 3.2.11

## :heart: Contributors

Thank you to all the contributors who contributed to this release!

---

Full change log: https://github.com/spring-projects/spring-batch/compare/v5.2.5...v5.2.6

---

> **Source** [spring-projects/spring-batch](https://github.com/spring-projects/spring-batch) · `v5.2.6` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-batch/releases/tag/v5.2.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
