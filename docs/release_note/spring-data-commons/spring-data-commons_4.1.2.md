---
title: "spring-data-commons 4.1.2"
project: "spring-data-commons"
repo: "spring-projects/spring-data-commons"
tag: "4.1.2"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Spring Data Commons 4.1.2 Reference documentation · Spring Data Commons 4.1.2 Javadoc"
---

# spring-data-commons 4.1.2

## :green_book: Links
* [Spring Data Commons 4.1.2 Reference documentation](https://docs.spring.io/spring-data/commons/reference/4.1/)
* [Spring Data Commons 4.1.2 Javadoc](https://docs.spring.io/spring-data/commons/reference/4.1/api/java/)

## :star: New Features
- Avoid Kotlin reflection for coroutine method detection without a `Continuation` parameter [#3556](https://github.com/spring-projects/spring-data-commons/pull/3556)
- Avoid Kotlin reflection in KotlinReflectionUtils.isSuspend for methods without a Continuation parameter [#3544](https://github.com/spring-projects/spring-data-commons/issues/3544)
- Add `String` to `LocalTime` converter [#3535](https://github.com/spring-projects/spring-data-commons/pull/3535)

## :lady_beetle: Bug Fixes
- Inconsistent Querydsl bindings exclusion evaluation [#3547](https://github.com/spring-projects/spring-data-commons/issues/3547)
- Fix `TypedPropertyPath` caching using Kotlin  [#3546](https://github.com/spring-projects/spring-data-commons/pull/3546)
- Properly handle mixed property paths [#3534](https://github.com/spring-projects/spring-data-commons/pull/3534)
- Path resolution is broken when camel case and dot paths get mixed [#3533](https://github.com/spring-projects/spring-data-commons/issues/3533)
- TypedPropertyPaths cache grows linearly for Kotlin property references [#3521](https://github.com/spring-projects/spring-data-commons/issues/3521)
- Kotlin `org.springframework.data.core.div` extension drops parent and intemediate path segments [#3503](https://github.com/spring-projects/spring-data-commons/issues/3503)

## :notebook_with_decorative_cover: Documentation
- Document Vavr collection types as query method parameters [#3526](https://github.com/spring-projects/spring-data-commons/pull/3526)
- Support for Vavr Collections doesn't mention usage as repository query method parameters [#3525](https://github.com/spring-projects/spring-data-commons/issues/3525)

## :hammer: Dependency Upgrades
- Upgrade to Maven Wrapper 3.10.0 [#3554](https://github.com/spring-projects/spring-data-commons/issues/3554)

## :heart: Contributors
We'd like to thank all the contributors who worked on this release!

- @gregjotau
- @AzazelSensei
- @jandurovec

---

> **Source** [spring-projects/spring-data-commons](https://github.com/spring-projects/spring-data-commons) · `4.1.2` · 2026-10-23 · [upstream release](https://github.com/spring-projects/spring-data-commons/releases/tag/4.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
