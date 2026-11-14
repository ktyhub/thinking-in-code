---
title: "spring-framework v7.0.9"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.0.9"
version: "v7.0.9"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.0.9

## :warning: Attention Required

- In Spring Framework 7.0.9, `ForwardedHeaderFilter` (Spring MVC) and `ForwardedHeaderTransformer` (WebFlux) each provide a boolean constructor argument whether to use the standard "Forwarded" header or the "X-Forwarded" alternative headers. A separate property turns on and off use of "X-Forwarded-Prefix". While the default constructor preserves the existing behavior, we recommend to use the new constructor to explicitly specify which forwarded headers to use to make the processing more deterministic and aligned with what is expected from the proxy. Please, see the updated [Security Considerations](https://docs.spring.io/spring-framework/reference/7.0.9-SNAPSHOT/web/webmvc/filters.html#filters-forwarded-headers-security) section for details. In 7.1 with #37072 the default constructor is deprecated and marked for removal. [#37090](https://github.com/spring-projects/spring-framework/issues/37090)
- In Spring Framework 7.0.9, `SimpleEvaluationContext` no longer supports expression compilation by default, regardless of the compiler mode configured via `SpelParserConfiguration` or the `spring.expression.compiler.mode` system property or Spring property. Applications that intentionally use `SimpleEvaluationContext` with trusted expressions and require compilation for performance reasons can opt in by calling `withCompilationSupported()` on the `SimpleEvaluationContext` builder. Care should be taken when opting in to compilation, as doing so removes the safety guards applied during interpreted evaluation. [#37035](https://github.com/spring-projects/spring-framework/issues/37035)

## :star: New Features

- Ignore an empty port value in URI parsing [#37117](https://github.com/spring-projects/spring-framework/issues/37117)
- Avoid retaining class files in annotation metadata [#37112](https://github.com/spring-projects/spring-framework/pull/37112)
- Add `@Nullable` annotations when treating `Map.remove()` as returning `@Nullable` [#37067](https://github.com/spring-projects/spring-framework/pull/37067)
- Revisit SSE view fragments handling [#37061](https://github.com/spring-projects/spring-framework/issues/37061)
- Check list index after auto-grow in `AbstractNestablePropertyAccessor` [#37036](https://github.com/spring-projects/spring-framework/issues/37036)
- Disable SpEL expression compilation by default in `SimpleEvaluationContext` [#37035](https://github.com/spring-projects/spring-framework/issues/37035)
- Limit result size of `BigDecimal`/`BigInteger` power operations in SpEL [#37034](https://github.com/spring-projects/spring-framework/issues/37034)
- Refactor redirect handling in UrlHandlerFilter [#37030](https://github.com/spring-projects/spring-framework/issues/37030)
- Revise stylesheet source handling in XsltView [#37029](https://github.com/spring-projects/spring-framework/issues/37029)
- Revise view name handling in UrlFilenameViewController [#37027](https://github.com/spring-projects/spring-framework/issues/37027)
- Handle pre-flight requests in functional endpoint setup without DispatcherHandler [#37024](https://github.com/spring-projects/spring-framework/issues/37024)
- Improve WebSocket handshake error logging [#37023](https://github.com/spring-projects/spring-framework/issues/37023)
- Fix missing nullability in JdbcTemplate.batchUpdate [#37012](https://github.com/spring-projects/spring-framework/pull/37012)
- Timeout property in RetryPolicy does not have a default constant [#36983](https://github.com/spring-projects/spring-framework/issues/36983)
- Write native configuration files as UTF-8 [#36972](https://github.com/spring-projects/spring-framework/pull/36972)
- DefaultServerRequest.ServletParametersMap.entrySet() does not retain HttpServletRequest.getParameterMap() order [#36966](https://github.com/spring-projects/spring-framework/issues/36966)
- Perform nextKey within synchronization for SQLite as well [#36959](https://github.com/spring-projects/spring-framework/issues/36959)
- Add support for custom ObjectInputFilter on DefaultDeserializer [#36958](https://github.com/spring-projects/spring-framework/issues/36958)
- Revise resource bundle caching for common locales [#36957](https://github.com/spring-projects/spring-framework/issues/36957)
- Improve nullability for `getSession(*)` in `MockHttpServletRequest` [#36926](https://github.com/spring-projects/spring-framework/issues/36926)
- Improve fallback logic in ParameterContentNegotiationStrategy and ParameterContentTypeResolver [#36925](https://github.com/spring-projects/spring-framework/issues/36925)
- Improve ambiguous match check on preflight request [#36903](https://github.com/spring-projects/spring-framework/issues/36903)
- Improve Groovy markup template loading [#36902](https://github.com/spring-projects/spring-framework/issues/36902)
- Improve request path handling on a Reactor Netty server [#36893](https://github.com/spring-projects/spring-framework/issues/36893)
- Improve JettyWebSocketSession error handling [#36891](https://github.com/spring-projects/spring-framework/issues/36891)

## :lady_beetle: Bug Fixes

- EclipseLinkJpaDialect singleton lock in EclipseLinkConnectionHandle.getConnection() serializes all JDBC connection acquisitions under load [#37085](https://github.com/spring-projects/spring-framework/issues/37085)
- MetadataReader fails to read byte[] array from annotation [#37083](https://github.com/spring-projects/spring-framework/issues/37083)
- Ensure parsing/tostring symmetry in ContentDisposition [#37064](https://github.com/spring-projects/spring-framework/issues/37064)
- Character outside of permitted range in Content Disposition [#37062](https://github.com/spring-projects/spring-framework/issues/37062)
- Release Jackson BufferRecycler to its pool in encoders [#37059](https://github.com/spring-projects/spring-framework/pull/37059)
- Ensure consistent error escaping [#37055](https://github.com/spring-projects/spring-framework/issues/37055)
- Refine template name processing [#37054](https://github.com/spring-projects/spring-framework/issues/37054)
- Reset TwoByteMatcher partial match on mismatching byte [#37053](https://github.com/spring-projects/spring-framework/pull/37053)
- Refactor async XML parsing limit checks [#37031](https://github.com/spring-projects/spring-framework/issues/37031)
- Fix part constraint checks in PartEventHttpMessageReader [#37028](https://github.com/spring-projects/spring-framework/issues/37028)
- Fix buffer leak in RSocket SETUP frame handling [#37026](https://github.com/spring-projects/spring-framework/issues/37026)
- Ensure correct Jetty core response cookie handling [#37025](https://github.com/spring-projects/spring-framework/issues/37025)
- Align `domainToAscii` with current WhatWG spec [#37018](https://github.com/spring-projects/spring-framework/issues/37018)
- Ensure consistent `ButtonTag` value attribute processing [#37017](https://github.com/spring-projects/spring-framework/issues/37017)
- SpEL's `InlineList` is cached as a mutable list in compiled mode [#37001](https://github.com/spring-projects/spring-framework/issues/37001)
- Write native configuration file when only lambda hints are present [#36989](https://github.com/spring-projects/spring-framework/pull/36989)
- SpEL `Indexer` reuses invalid cached `PropertyAccessor` [#36986](https://github.com/spring-projects/spring-framework/issues/36986)
- SpEL reuses invalid cached `ConstructorExecutor` [#36985](https://github.com/spring-projects/spring-framework/issues/36985)
- `MimeTypeUtils` raises `StringIndexOutOfBoundsException` for some invalid mime types [#36971](https://github.com/spring-projects/spring-framework/issues/36971)
- Ignore DOCTYPE inside a multi-line comment body [#36948](https://github.com/spring-projects/spring-framework/pull/36948)
- Avoid divide-by-zero in `ExponentialBackOff` jitter [#36932](https://github.com/spring-projects/spring-framework/pull/36932)
- Refactor use or close lock in ConcurrentWebSocketSessionDecorator [#36909](https://github.com/spring-projects/spring-framework/issues/36909)
- Host header initialization breaking change in StompRelayMessageBrokerHandler [#36907](https://github.com/spring-projects/spring-framework/issues/36907)
- Remote address checks for SockJS session #36681 breaks xhr-polling [#36904](https://github.com/spring-projects/spring-framework/issues/36904)
- LifeCyclePrintWriter does not delegate correctly [#36885](https://github.com/spring-projects/spring-framework/issues/36885)
- IllegalArgumentException when creating named native query via Shared EntityManager with Hibernate 8.0.0-SNAPSHOT / JPA 4.0.0-M4 [#36878](https://github.com/spring-projects/spring-framework/issues/36878)

## :notebook_with_decorative_cover: Documentation

- Document AOP proxy semantics for Bean Overrides in tests [#37121](https://github.com/spring-projects/spring-framework/issues/37121)
- Provide guidance for object model design in SpEL [#37102](https://github.com/spring-projects/spring-framework/issues/37102)
- Fix Javadoc error in ProtobufDecoder [#37079](https://github.com/spring-projects/spring-framework/pull/37079)
- Document security implications of evaluating untrusted SpEL expressions [#36997](https://github.com/spring-projects/spring-framework/issues/36997)
- Document relationships between expressions, evaluation contexts, and accessors in SpEL [#36968](https://github.com/spring-projects/spring-framework/issues/36968)
- Update Javadoc for `@ActiveProfiles` ordering [#36950](https://github.com/spring-projects/spring-framework/pull/36950)
- Document behavior for 0 delay combined with jitter in backoff policies [#36946](https://github.com/spring-projects/spring-framework/issues/36946)
- Clarify design goal of UrlFilenameViewController in Javadoc [#36906](https://github.com/spring-projects/spring-framework/issues/36906)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.16.7 and Tracing 1.6.7 [#37104](https://github.com/spring-projects/spring-framework/issues/37104)
- Upgrade to Reactor 2025.0.7 [#37103](https://github.com/spring-projects/spring-framework/issues/37103)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@ZaMan0806, @alexisgra, @alshain, @gianmarcoschifone, @junhyeong9812, @msridhar, @perovic, @quaff, and @samueldlightfoot

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.0.9` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
