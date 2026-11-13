---
title: "spring-framework v7.1.0-M2"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.1.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.1.0-M2

## :star: New Features

- Align DispatcherServlet bean detection logs [#37296](https://github.com/spring-projects/spring-framework/pull/37296)
- Extract bean property path support into PropertyPath [#37275](https://github.com/spring-projects/spring-framework/issues/37275)
- Expose matched PathPattern as MVC request attribute [#37272](https://github.com/spring-projects/spring-framework/pull/37272)
- Add a configurable limit for maximum nesting depth in property paths [#37252](https://github.com/spring-projects/spring-framework/issues/37252)
- Enforce "data: " (with space) prefix for outgoing SSE data payloads [#37242](https://github.com/spring-projects/spring-framework/issues/37242)
- Parse RFC 9651-like date headers [#37224](https://github.com/spring-projects/spring-framework/pull/37224)
- Polish ScheduledAnnotationBeanPostProcessor to refine null-safety [#37219](https://github.com/spring-projects/spring-framework/pull/37219)
- Add batch update support to JdbcClient [#37216](https://github.com/spring-projects/spring-framework/pull/37216)
- Emit multipart parts with empty bodies in PartGenerator [#37202](https://github.com/spring-projects/spring-framework/pull/37202)
- Upgrade to HtmlUnit 5 [#37194](https://github.com/spring-projects/spring-framework/pull/37194)
- Ignore invalid SSE retry field [#37193](https://github.com/spring-projects/spring-framework/pull/37193)
- Handle MIME type parameter names case-insensitively [#37192](https://github.com/spring-projects/spring-framework/pull/37192)
- Deprecate `SpelParserConfiguration` constructors in favor of the builder API [#37190](https://github.com/spring-projects/spring-framework/issues/37190)
- When connection to client is lost while writing JSON, it should not be logged as warning [#37151](https://github.com/spring-projects/spring-framework/issues/37151)
- JMS `SimpleMessageConverter.fromMessage()` can return `null` despite `@NullMarked` package [#37148](https://github.com/spring-projects/spring-framework/issues/37148)
- Avoid unnecessary allocations for cached annotation mappings [#37141](https://github.com/spring-projects/spring-framework/pull/37141)
- Update `MockCookie#parse(String)` validation [#37136](https://github.com/spring-projects/spring-framework/issues/37136)
- Add WebFlux OpenTelemetry observation convention [#37131](https://github.com/spring-projects/spring-framework/pull/37131)
- Limit bracket depth in `PropertyEditorRegistrySupport`'s `addStrippedPropertyPaths()` [#37020](https://github.com/spring-projects/spring-framework/issues/37020)
- Improve efficiency of map creation in `DataBinder` [#37019](https://github.com/spring-projects/spring-framework/issues/37019)
- Reject overlapping declared and generated key columns in `SimpleJdbcInsert` [#37014](https://github.com/spring-projects/spring-framework/pull/37014)
- Reject MIME type parameters differing only in case [#37008](https://github.com/spring-projects/spring-framework/pull/37008)
- Use depth-aware bracket parsing in `PropertyAccessorUtils` [#36999](https://github.com/spring-projects/spring-framework/issues/36999)
- Account for all array objects when checking array size in SpEL [#36998](https://github.com/spring-projects/spring-framework/issues/36998)
- Align SpEL's default max auto-grow size with Spring data binding [#36995](https://github.com/spring-projects/spring-framework/issues/36995)
- Avoid redundant registration of Date/Calendar/Long converters in DefaultFormattingConversionService [#36951](https://github.com/spring-projects/spring-framework/issues/36951)
- Suppress CGLIB validation WARN for lifecycle callbacks [#36935](https://github.com/spring-projects/spring-framework/pull/36935)
- Add Cache-Control must-understand directive [#36918](https://github.com/spring-projects/spring-framework/pull/36918)
- validate samesite attribute in ResponseCookie [#36905](https://github.com/spring-projects/spring-framework/pull/36905)
- Close contexts when clearing test context cache [#36825](https://github.com/spring-projects/spring-framework/pull/36825)
- Use immutable map for static cache in TypeDescriptor [#36813](https://github.com/spring-projects/spring-framework/pull/36813)
- Add a configurable limit for structural nesting depth in SpEL expressions [#36723](https://github.com/spring-projects/spring-framework/issues/36723)
- Simplify programmatic scheduling of cron tasks with time zone [#36556](https://github.com/spring-projects/spring-framework/pull/36556)
- Deprecate Derby support [#36045](https://github.com/spring-projects/spring-framework/pull/36045)
- Add support for generating resources linked to a feature [#35862](https://github.com/spring-projects/spring-framework/issues/35862)
- Add RFC 10008 (QUERY HTTP method) support [#34993](https://github.com/spring-projects/spring-framework/pull/34993)

## :lady_beetle: Bug Fixes

- PartGenerator.switchToFile() doesn't count buffered bytes toward maxDiskUsagePerPart [#37238](https://github.com/spring-projects/spring-framework/issues/37238)
- Reject write methods not starting with "set" in `Property` [#37139](https://github.com/spring-projects/spring-framework/pull/37139)
- Meta-annotations with attributes are still unnecessarily synthesized in `MergedAnnotations` [#37135](https://github.com/spring-projects/spring-framework/issues/37135)
- Use the 4-argument `Property` constructor in SpEL's `ReflectivePropertyAccessor` [#37123](https://github.com/spring-projects/spring-framework/issues/37123)
- Fix `BeanFactory.getBean(String, ParameterizedTypeReference)` to respect AOP proxy [#37047](https://github.com/spring-projects/spring-framework/pull/37047)
- Fix `OptionalToObjectConverter` applicability check [#36913](https://github.com/spring-projects/spring-framework/pull/36913)
- Fix `Property` name resolution for record-style accessors [#36911](https://github.com/spring-projects/spring-framework/pull/36911)

## :notebook_with_decorative_cover: Documentation

- Fix RestClient API usage in documentation [#37137](https://github.com/spring-projects/spring-framework/pull/37137)
- Add Validation section examples [#36190](https://github.com/spring-projects/spring-framework/pull/36190)

## :hammer: Dependency Upgrades

- Upgrade to Kotlin 2.4.20 [#37271](https://github.com/spring-projects/spring-framework/issues/37271)
- Upgrade to Micrometer 1.18.0-M2 and Tracing 1.8.0-M2 [#37288](https://github.com/spring-projects/spring-framework/issues/37288)
- Upgrade to Reactor 2026.0.0-M2 [#37263](https://github.com/spring-projects/spring-framework/issues/37263)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@DevJunz, @Eymenonar, @Sineaggi, @Will-thom, @blackdurumi, @cookie-meringue, @desiderantes, @dxbjavid, @froggy0m0, @gregjotau, @heka1024, @junhyeong9812, @junhyung8795, @kilink, @lArtiquel, @marschall, @mateo-maza, @ngocnhan-tran1996, @noojung, @quaff, @sabberworm, @seonwooj0810, @shaggyinsomniac, @verhasi, and @vpavic

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.1.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
