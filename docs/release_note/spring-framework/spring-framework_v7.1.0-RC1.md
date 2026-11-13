---
title: "spring-framework v7.1.0-RC1"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.1.0-RC1"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.1.0-RC1

## :warning: Attention Required

- Remove APIs marked as deprecated for removal in 7.1 [#37455](https://github.com/spring-projects/spring-framework/issues/37455)
- Consistently treat `0` as no timeout in `WebTestClient` [#37454](https://github.com/spring-projects/spring-framework/issues/37454)
- Consistently treat `0` as no timeout in MockMvc [#37453](https://github.com/spring-projects/spring-framework/issues/37453)
- Consistently treat `0` as no timeout in `RSocketServiceProxyFactory` [#37451](https://github.com/spring-projects/spring-framework/issues/37451)
- Consistently treat `0` as no timeout in HTTP client support [#37425](https://github.com/spring-projects/spring-framework/issues/37425)
- Update default settings in WebFlux multipart handling to align with Spring Boot and Tomcat [#36928](https://github.com/spring-projects/spring-framework/issues/36928)
- Apply proxy with system properties to the default client in ReactorClientHttpConnector [#36654](https://github.com/spring-projects/spring-framework/pull/36654)
- ProblemDetail instance field set from the current URL path, does not respect RFC [#35969](https://github.com/spring-projects/spring-framework/issues/35969)

## :star: New Features

- Support JsonUnit as an alternative to JSONassert for JSON comparison in test APIs [#37490](https://github.com/spring-projects/spring-framework/issues/37490)
- Add RetryState-aware overloads for `onRetrySuccess` and `onRetryFailure` [#37465](https://github.com/spring-projects/spring-framework/pull/37465)
- Consistently treat `0` as no timeout in `AsyncServerResponse` [#37452](https://github.com/spring-projects/spring-framework/issues/37452)
- Destroy all filters in `CompositeFilter` despite failures [#37445](https://github.com/spring-projects/spring-framework/pull/37445)
- Refine `DataAccessUtils` to improve null-safety [#37438](https://github.com/spring-projects/spring-framework/pull/37438)
- Omit zero `timeout` in `DefaultRetryPolicy.toString()` [#37437](https://github.com/spring-projects/spring-framework/pull/37437)
- Avoid splitting surrogate pairs in `StringUtils.truncate()` [#37435](https://github.com/spring-projects/spring-framework/pull/37435)
- Support positive hexadecimal values in `NumberUtils` [#37434](https://github.com/spring-projects/spring-framework/pull/37434)
- Support compilation of String concatenation with non-String operands in SpEL [#37433](https://github.com/spring-projects/spring-framework/issues/37433)
- Fix nullability in `LinkedCaseInsensitiveMap` [#37432](https://github.com/spring-projects/spring-framework/pull/37432)
- Align parsing of `jdk.httpclient.allowRestrictedHeaders` in `JdkClientHttpRequest` with the JDK [#37422](https://github.com/spring-projects/spring-framework/issues/37422)
- Align restricted header handling in reactive `JdkClientHttpRequest` with non-reactive `JdkClientHttpRequest` [#37417](https://github.com/spring-projects/spring-framework/issues/37417)
- Configure problem details rendering through WebMvcConfigurer [#37416](https://github.com/spring-projects/spring-framework/issues/37416)
- Fix missing `IDENTITY_FINISH` characteristic in `MergedAnnotationCollectors` [#37415](https://github.com/spring-projects/spring-framework/pull/37415)
- Reject `@AliasFor` `value` and `attribute` when both have length [#37413](https://github.com/spring-projects/spring-framework/pull/37413)
- Give ErrorResponse.Interceptor access to the current request [#37410](https://github.com/spring-projects/spring-framework/issues/37410)
- Honor `Map.equals()` and `Map.hashCode()` contracts in `CompositeMap` [#37401](https://github.com/spring-projects/spring-framework/pull/37401)
- Support rendering problem details as views in `@ExceptionHandler` methods [#37400](https://github.com/spring-projects/spring-framework/issues/37400)
- Render exceptions not handled by ExceptionHandler methods as problem details [#37398](https://github.com/spring-projects/spring-framework/issues/37398)
- Further improve `AnnotationAttributes.toString()` [#37396](https://github.com/spring-projects/spring-framework/issues/37396)
- Improve primitive array handling in `AnnotationAttributes.toString()` [#37395](https://github.com/spring-projects/spring-framework/pull/37395)
- Exclude static methods from override check in `AnnotatedMethod` [#37390](https://github.com/spring-projects/spring-framework/issues/37390)
- Include root cause when `MySQLMaxValueIncrementer` fails to commit [#37389](https://github.com/spring-projects/spring-framework/issues/37389)
- Record MVC exceptions leading to HTTP 5xx as errors in observalibity stacks [#37384](https://github.com/spring-projects/spring-framework/issues/37384)
- Revise `getBeanNamesForType` caching to cover `ResolvableType`-based lookups as well [#37382](https://github.com/spring-projects/spring-framework/issues/37382)
- Support for Hibernate 8.0's BeanContainer SPI revision [#37381](https://github.com/spring-projects/spring-framework/issues/37381)
- Improve pre-bound JDBC Connection exception message [#37356](https://github.com/spring-projects/spring-framework/pull/37356)
- Reject Kotlin constructor default values in enhanced `@Configuration` classes [#37350](https://github.com/spring-projects/spring-framework/issues/37350)
- Rewrite CssLinkResourceTransformer for a single pass memory efficient parsing [#37348](https://github.com/spring-projects/spring-framework/issues/37348)
- Deprecate multi-batch `batchUpdate` variant in `JdbcTemplate` [#37345](https://github.com/spring-projects/spring-framework/issues/37345)
- Introduce entry-based DSL for `JdbcClient` batch updates [#37341](https://github.com/spring-projects/spring-framework/issues/37341)
- Honor `Collection.remove()` contract in `CompositeCollection` [#37332](https://github.com/spring-projects/spring-framework/pull/37332)
- Exclude static methods from override check in `AnnotationsScanner` [#37319](https://github.com/spring-projects/spring-framework/pull/37319)
- Support for JPA 4.0 package and module descriptor discovery [#37316](https://github.com/spring-projects/spring-framework/issues/37316)
- Set first batch arg once while executing batch with generated keys [#37308](https://github.com/spring-projects/spring-framework/pull/37308)
- Improve JdbcClient to align BatchSpec with StatementSpec [#37307](https://github.com/spring-projects/spring-framework/pull/37307)
- Include enum array attributes in `TypeNotPresentException` probing [#37153](https://github.com/spring-projects/spring-framework/pull/37153)
- Misleading port number defaults when parsing "Forwarded for" and "Forwarded by" header information [#37114](https://github.com/spring-projects/spring-framework/issues/37114)
- Remove MatchableHandlerMapping [#37093](https://github.com/spring-projects/spring-framework/issues/37093)
- Optimize get for all values in ServletRequestHeadersAdapter and ServletResponseHeadersAdapter [#37080](https://github.com/spring-projects/spring-framework/issues/37080)
- RestClient.Builder.configureMessageConverters disables the implicit registration of default converters. [#36747](https://github.com/spring-projects/spring-framework/issues/36747)
- Avoid update to request "Content-Type" for characterEncoding in ServletServerHttpRequest [#36426](https://github.com/spring-projects/spring-framework/issues/36426)
- Remove code to set the ServletResponse contentType and characterEncoding properties from the "Content-Type" header [#36352](https://github.com/spring-projects/spring-framework/issues/36352)

## :lady_beetle: Bug Fixes

- Avoid `int` overflow for large `Duration` timeouts in `ClientHttpRequestFactory` implementations [#37427](https://github.com/spring-projects/spring-framework/issues/37427)
- Annotations are inherited from package-private method in superclass in different package [#37408](https://github.com/spring-projects/spring-framework/issues/37408)
- MVC MultipartParser requires Publisher on the classpath [#37353](https://github.com/spring-projects/spring-framework/issues/37353)
- Fix container detection in `RepeatableContainers.standardRepeatables()` [#37326](https://github.com/spring-projects/spring-framework/pull/37326)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.18.0-RC1 [#37439](https://github.com/spring-projects/spring-framework/issues/37439)
- Upgrade to Reactor 2026.0.0-RC1 [#37375](https://github.com/spring-projects/spring-framework/issues/37375)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@EsmaeilChitgar, @cookie-meringue, @guanchengang, @itsmevichu, @junhyeong9812, @lejuho, @ngocnhan-tran1996, @quaff, @rene-schakmann, and @xoruddl

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.1.0-RC1` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
