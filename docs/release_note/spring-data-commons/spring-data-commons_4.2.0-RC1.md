---
title: "spring-data-commons 4.2.0-RC1"
project: "spring-data-commons"
repo: "spring-projects/spring-data-commons"
tag: "4.2.0-RC1"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "We'd like to thank all the contributors who worked on this release!"
---

# spring-data-commons 4.2.0-RC1

## :green_book: Links
* [Spring Data Commons 4.2.0 Reference documentation](https://docs.spring.io/spring-data/commons/reference/4.2/)
* [Spring Data Commons 4.2.0 Javadoc](https://docs.spring.io/spring-data/commons/reference/4.2/api/java/)

## :star: New Features
- Avoid Kotlin reflection for coroutine method detection without a `Continuation` parameter [#3556](https://github.com/spring-projects/spring-data-commons/pull/3556)
- Avoid Kotlin reflection in KotlinReflectionUtils.isSuspend for methods without a Continuation parameter [#3544](https://github.com/spring-projects/spring-data-commons/issues/3544)

## :lady_beetle: Bug Fixes
- Inconsistent Querydsl bindings exclusion evaluation [#3547](https://github.com/spring-projects/spring-data-commons/issues/3547)
- Fix `TypedPropertyPath` caching using Kotlin  [#3546](https://github.com/spring-projects/spring-data-commons/pull/3546)
- TypedPropertyPaths cache grows linearly for Kotlin property references [#3521](https://github.com/spring-projects/spring-data-commons/issues/3521)

## :hammer: Dependency Upgrades
- Upgrade to Graal Sdk 25.4.4.1.1 [#3560](https://github.com/spring-projects/spring-data-commons/issues/3560)
- Upgrade to Scala 3.10.0 [#3559](https://github.com/spring-projects/spring-data-commons/issues/3559)
- Upgrade to Apache Groovy 5.1.3 [#3558](https://github.com/spring-projects/spring-data-commons/issues/3558)
- Upgrade to Maven Wrapper 3.10.0 [#3553](https://github.com/spring-projects/spring-data-commons/issues/3553)
- Upgrade to Maven Wrapper 3.10.0 [#2960](https://github.com/spring-projects/spring-data-build/issues/2960)

## :heart: Contributors
We'd like to thank all the contributors who worked on this release!

- @gregjotau

---

> **Source** [spring-projects/spring-data-commons](https://github.com/spring-projects/spring-data-commons) · `4.2.0-RC1` · 2026-10-23 · [upstream release](https://github.com/spring-projects/spring-data-commons/releases/tag/4.2.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
