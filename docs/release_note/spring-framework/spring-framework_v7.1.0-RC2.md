---
title: "spring-framework v7.1.0-RC2"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.1.0-RC2"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "Refine PropertyPath support #37642 · Deprecate AutoPopulatingList for removal #37639 · Copy builder lists in HttpServiceProxyFactory #37601 · Align generics in ExceptionTypeFilter constructors #37598"
---

# spring-framework v7.1.0-RC2

## :star: New Features

- Refine `PropertyPath` support [#37642](https://github.com/spring-projects/spring-framework/issues/37642)
- Deprecate `AutoPopulatingList` for removal [#37639](https://github.com/spring-projects/spring-framework/issues/37639)
- Copy builder lists in `HttpServiceProxyFactory` [#37601](https://github.com/spring-projects/spring-framework/pull/37601)
- Align generics in `ExceptionTypeFilter` constructors [#37598](https://github.com/spring-projects/spring-framework/pull/37598)
- Copy includes and excludes in `RetryPolicy.Builder` [#37596](https://github.com/spring-projects/spring-framework/pull/37596)
- Reject space-separated profile names in expressions [#37595](https://github.com/spring-projects/spring-framework/issues/37595)
- Reject profile expressions with missing operators or operands [#37593](https://github.com/spring-projects/spring-framework/pull/37593)
- Detect alias circles when resolving alias targets [#37585](https://github.com/spring-projects/spring-framework/pull/37585)
- Stop basing `PropertySource.toString()` output on the log level [#37540](https://github.com/spring-projects/spring-framework/issues/37540)
- Make in-memory multipart Part content repeatable [#37531](https://github.com/spring-projects/spring-framework/pull/37531)
- Use `SqlParameterSource` as-is in `SqlParameterSourceUtils.createBatch()` [#37524](https://github.com/spring-projects/spring-framework/pull/37524)
- Use `toSqlParameterSource` in `StatementSpec.paramSource(Object)` [#37501](https://github.com/spring-projects/spring-framework/pull/37501)
- Resolve DataClassRowMapper columns via ResultSetMetaData instead of findColumn exceptions [#37329](https://github.com/spring-projects/spring-framework/pull/37329)
- Deep copy default headers, cookies in client builders [#37325](https://github.com/spring-projects/spring-framework/pull/37325)
- Honor If-Range for resource range requests [#37218](https://github.com/spring-projects/spring-framework/pull/37218)
- Validate namespace and local name in require [#36915](https://github.com/spring-projects/spring-framework/pull/36915)

## :lady_beetle: Bug Fixes

- Honor `ignoreUnknownFields` for invalid property paths in `DataBinder` [#37641](https://github.com/spring-projects/spring-framework/issues/37641)
- Double negation in profile expressions is parsed incorrectly [#37594](https://github.com/spring-projects/spring-framework/issues/37594)
- Detect overflow for floating-point numbers in `NumberUtils` [#37586](https://github.com/spring-projects/spring-framework/pull/37586)
- Add JSON Lines to ProtobufJsonEncoder media types [#37559](https://github.com/spring-projects/spring-framework/pull/37559)
- Require semicolon before MIME type parameters [#37545](https://github.com/spring-projects/spring-framework/pull/37545)
- Avoid leaking temp file when disk limit is exceeded in `PartGenerator` [#37534](https://github.com/spring-projects/spring-framework/pull/37534)

## :notebook_with_decorative_cover: Documentation

- Improve FieldError constructor Javadoc [#37533](https://github.com/spring-projects/spring-framework/issues/37533)
- Document LocaleContextHolder inheritable behavior [#36853](https://github.com/spring-projects/spring-framework/pull/36853)

## :hammer: Dependency Upgrades

- Upgrade to AspectJ 1.9.27 for Java 27 support [#37572](https://github.com/spring-projects/spring-framework/issues/37572)
- Upgrade to Micrometer 1.18.0-RC2 [#37633](https://github.com/spring-projects/spring-framework/issues/37633)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Gimini-3, @Tanishq-Choudhary, @benelog, @cfcromn, @christianaurichzm, @guanchengang, @junhyeong9812, @kimseongchan0914, @lejuho, @lim950808, @namest504, and @padosol

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.1.0-RC2` · 2026-11-05 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-RC2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
