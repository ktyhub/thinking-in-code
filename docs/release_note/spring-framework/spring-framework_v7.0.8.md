---
title: "spring-framework v7.0.8"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.0.8"
published: "2026-06-08"
type: "patch"
lang: "en"
summary: "This maintenance release fixes a high number of CVEs. You can learn more about this in the 'Spring and Security In The Times Of AI' blog post. Here is the full list of 16 CVEs:"
---

# spring-framework v7.0.8

## :warning: Security Fixes

This maintenance release fixes a high number of CVEs. You can learn more about this in the ["Spring and Security In The Times Of AI"](https://spring.io/blog/2026/06/01/spring_and_security_in_the_times_of_ai) blog post. Here is the full list of 16 CVEs:

* [CVE-2026-41838](https://spring.io/security/cve-2026-41838) "Spring Framework Predictable Session ID in WebSocket Module"
* [CVE-2026-41839](https://spring.io/security/cve-2026-41839) "Spring Framework Escalation via Session Fixation in WebFlux"
* [CVE-2026-41840](https://spring.io/security/cve-2026-41840) "Spring Framework Denial of Service via Multipart Requests in WebFlux"
* [CVE-2026-41841](https://spring.io/security/cve-2026-41841) "Spring Framework Information Disclosure via Static Resource Cache in Spring MVC and WebFlux"
* [CVE-2026-41842](https://spring.io/security/cve-2026-41842) "Spring Framework Denial of Service via Versioned Resources in Spring MVC and WebFlux"
* [CVE-2026-41843](https://spring.io/security/cve-2026-41843) "Spring Framework Path Traversal via Versioned Static Resources in Spring MVC and WebFlux"
* [CVE-2026-41844](https://spring.io/security/cve-2026-41844) "Spring Framework Open Redirect in Spring MVC and WebFlux"
* [CVE-2026-41845](https://spring.io/security/cve-2026-41845) "Spring Framework Cross-site Scripting via JavaScriptUtils"
* [CVE-2026-41846](https://spring.io/security/cve-2026-41846) "Spring Framework Cross-site Scripting via JSP Form Tags"
* [CVE-2026-41848](https://spring.io/security/cve-2026-41848) "Spring Framework Denial of Service via AntPathMatcher"
* [CVE-2026-41850](https://spring.io/security/cve-2026-41850) "Spring Framework Algorithmic Denial of Service via SpEL Expressions"
* [CVE-2026-41851](https://spring.io/security/cve-2026-41851) "Spring Framework Denial of Service via Unbounded Cache in SpEL"
* [CVE-2026-41852](https://spring.io/security/cve-2026-41852) "Spring Framework Arbitrary Method Invocation in SpEL Expressions"
* [CVE-2026-41853](https://spring.io/security/cve-2026-41853) "Spring Framework Multipart Request Smuggling in Spring MVC and WebFlux"
* [CVE-2026-41854](https://spring.io/security/cve-2026-41854) "Spring Framework Server-Side Request Forgery via UriComponentsBuilder"
* [CVE-2026-41855](https://spring.io/security/cve-2026-41855) "Spring Framework Unsafe Deserialization via Jackson JMS Converters"


## :star: New Features

- Include zone ID in CronTrigger's equals/hashCode implementations [#36871](https://github.com/spring-projects/spring-framework/pull/36871)
- Expose `ClassLoader` from `DefaultDeserializer` [#36833](https://github.com/spring-projects/spring-framework/pull/36833)
- Use immutable map for SEPARATORS static field in DefaultPathContainer [#36821](https://github.com/spring-projects/spring-framework/pull/36821)
- Track operations during SpEL expression evaluation [#36801](https://github.com/spring-projects/spring-framework/issues/36801)
- Ensure getters have non-void return types in SpEL [#36800](https://github.com/spring-projects/spring-framework/issues/36800)
- Avoid too many character access attempts in `AntPathMatcher` [#36799](https://github.com/spring-projects/spring-framework/issues/36799)
- Refine default view name resolution [#36793](https://github.com/spring-projects/spring-framework/issues/36793)
- Refine Jackson JMS converters [#36791](https://github.com/spring-projects/spring-framework/issues/36791)
- Improve ABNF rule checks in RfcUriParser [#36787](https://github.com/spring-projects/spring-framework/issues/36787)
- Restrict `SpringVersion.getVersion()` to "major.minor.patch" format [#36785](https://github.com/spring-projects/spring-framework/issues/36785)
- Runtime compatibility with JPA 4.0 M4 and corresponding Hibernate 8.0 snapshots [#36784](https://github.com/spring-projects/spring-framework/issues/36784)
- Allow specifying the charset to use in `ExchangeFilterFunctions#basicAuthentication` [#36777](https://github.com/spring-projects/spring-framework/pull/36777)
- Use CollectionUtils to initialize HashMap in DefaultUriBuilderFactory [#36763](https://github.com/spring-projects/spring-framework/pull/36763)
- Improve error messages in SpEL [#36756](https://github.com/spring-projects/spring-framework/issues/36756)
- Improve pattern caching in SpEL [#36755](https://github.com/spring-projects/spring-framework/pull/36755)
- Avoid ResolvableType#forType contention for implicit cache cleanup [#36745](https://github.com/spring-projects/spring-framework/issues/36745)
- Switch to JdkIdGenerator for WebSocket Sessions [#36740](https://github.com/spring-projects/spring-framework/issues/36740)
- Detect custom deserialized `NullValue` instances in `AbstractValueAdaptingCache` [#36727](https://github.com/spring-projects/spring-framework/issues/36727)
- LiteWebJarsResourceResolver does not resolve directories [#36726](https://github.com/spring-projects/spring-framework/issues/36726)
- Warn against unsafe static resource locations in MVC and WebFlux [#36692](https://github.com/spring-projects/spring-framework/issues/36692)
- Consistent compatibility with Woodstox as an alternative to Xerces [#36682](https://github.com/spring-projects/spring-framework/issues/36682)
- Improve principal checks for SockJS session [#36681](https://github.com/spring-projects/spring-framework/issues/36681)
- Set host header consistently in STOMP relay CONNECT frames [#36673](https://github.com/spring-projects/spring-framework/pull/36673)
- Support Micrometer context propagation in Kotlin `Flow` [#36667](https://github.com/spring-projects/spring-framework/pull/36667)
- Reliable detection of broadcast messages in UserDestinationMessageHandler [#36662](https://github.com/spring-projects/spring-framework/issues/36662)

## :lady_beetle: Bug Fixes

- Concurrency issue against shared cookie field in `CookieLocaleResolver#setLocaleContext` [#36869](https://github.com/spring-projects/spring-framework/issues/36869)
- Server Sent Event does not support multi-line comments [#36866](https://github.com/spring-projects/spring-framework/issues/36866)
- CronExpression skips days on midnight DST gap [#36865](https://github.com/spring-projects/spring-framework/pull/36865)
- Regression in 6.2.0+: `ConfigurationClassParser` incorrectly removes component-scanned bean when the same class is also registered under a different name via XML [#36835](https://github.com/spring-projects/spring-framework/issues/36835)
- Preserve generic type info in awaitEntity() [#36834](https://github.com/spring-projects/spring-framework/pull/36834)
- Bean Background Bootstrap and Lazy Init [#36844](https://github.com/spring-projects/spring-framework/issues/36844)
- Back-off for DefaultMessageListenerContainer with OracleAQ has changed and is very short in SpringBoot 4 [#36809](https://github.com/spring-projects/spring-framework/issues/36809)
- Character outside of permitted range in Content Disposition [#36805](https://github.com/spring-projects/spring-framework/issues/36805)
- Fix JSP tag processing [#36797](https://github.com/spring-projects/spring-framework/issues/36797)
- Fix script processing capabilities [#36795](https://github.com/spring-projects/spring-framework/issues/36795)
- Jaxb2XmlEncoder exclusivity prevents JacksonXmlEncoder usage and hinders POJO serialization [#36776](https://github.com/spring-projects/spring-framework/issues/36776)
- JacksonXmlEncoder.canEncode incorrectly returns true for String body with application/xml [#36775](https://github.com/spring-projects/spring-framework/issues/36775)
- Consistently expose map key quotes in `PropertyAccessorUtils` [#36765](https://github.com/spring-projects/spring-framework/issues/36765)
- Fix fragment parsing for relative URI in RFC URI parser [#36762](https://github.com/spring-projects/spring-framework/pull/36762)
- Fix race condition in InMemoryWebSessionStore [#36742](https://github.com/spring-projects/spring-framework/issues/36742)
- Parsing failure for MIME type with quoted parameter values [#36730](https://github.com/spring-projects/spring-framework/issues/36730)
- Circular dependency between supplier-created beans is silently ignored on startup [#36725](https://github.com/spring-projects/spring-framework/issues/36725)
- Data is lost for joined DataBuffer in DataBufferUtils [#36714](https://github.com/spring-projects/spring-framework/pull/36714)
- Cache collisions in CachingResourceResolver [#36713](https://github.com/spring-projects/spring-framework/issues/36713)
- Unexpected path element removal when resolving versioned resources [#36698](https://github.com/spring-projects/spring-framework/issues/36698)
- Non-deterministic "Body token not expected" in org.springframework.http.codec.multipart.PartGenerator [#36694](https://github.com/spring-projects/spring-framework/issues/36694)
- Regression on value class parameter handling [#36665](https://github.com/spring-projects/spring-framework/pull/36665)
- Fix inverted logic for boolean last flag in JettyWebSocketSession when sending binary message [#36650](https://github.com/spring-projects/spring-framework/pull/36650)
- Parent traceId is not reused when calling WebClient.awaitExchange function [#36182](https://github.com/spring-projects/spring-framework/issues/36182)

## :notebook_with_decorative_cover: Documentation

- Fix broken links to Selenium documentation [#36875](https://github.com/spring-projects/spring-framework/pull/36875)
- Fix applicability note on setAutoGrowCollectionLimit [#36863](https://github.com/spring-projects/spring-framework/issues/36863)
- Document `@Conditional` gating of nested `@Configuration` classes [#36831](https://github.com/spring-projects/spring-framework/pull/36831)
- Javadoc of nestingLevel parameter in MethodParameter constructor is inconsistent with actual implementation [#36826](https://github.com/spring-projects/spring-framework/issues/36826)
- Re-structuring of Data Binding Content in Web Sections of Documentation [#36803](https://github.com/spring-projects/spring-framework/issues/36803)
- Fix typos for `validateExistingTransaction` [#36767](https://github.com/spring-projects/spring-framework/pull/36767)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.16.6 [#36883](https://github.com/spring-projects/spring-framework/issues/36883)
- Upgrade to Reactor 2025.0.6 [#36884](https://github.com/spring-projects/spring-framework/issues/36884)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@0AndWild, @Dennis-Mircea, @cookie-meringue, @daguimu, @dmitrysulman, @kilink, @kzander91, @leestana01, @mguiking, @quaff, @seonwooj0810, @sgerke-1L, @shenjianeng, @tianhaocui, @wushiyuanmaimob, and @zmovo

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.0.8` · 2026-06-08 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
