---
title: "spring-framework v6.2.19"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v6.2.19"
published: "2026-06-08"
type: "patch"
lang: "en"
summary: "This maintenance release fixes a high number of CVEs. You can learn more about this in the 'Spring and Security In The Times Of AI' blog post. Here is the full list of 16 CVEs"
---

# spring-framework v6.2.19

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

- Avoid too many character access attempts in `AntPathMatcher` [#36886](https://github.com/spring-projects/spring-framework/issues/36886)
- Track operations during SpEL expression evaluation [#36887](https://github.com/spring-projects/spring-framework/issues/36887)
- Ensure getters have non-void return types in SpEL [#36888](https://github.com/spring-projects/spring-framework/issues/36888)
- Expose `ClassLoader` from `DefaultDeserializer` [#36839](https://github.com/spring-projects/spring-framework/issues/36839)
- Refine default view name resolution [#36794](https://github.com/spring-projects/spring-framework/issues/36794)
- Refine Jackson JMS converters [#36792](https://github.com/spring-projects/spring-framework/issues/36792)
- Improve ABNF rule checks in RfcUriParser [#36788](https://github.com/spring-projects/spring-framework/issues/36788)
- Detect custom deserialized `NullValue` instances in `AbstractValueAdaptingCache` [#36728](https://github.com/spring-projects/spring-framework/issues/36728)
- Warn against unsafe static resource locations in MVC and WebFlux [#36693](https://github.com/spring-projects/spring-framework/issues/36693)
- Consistent compatibility with Woodstox as an alternative to Xerces [#36683](https://github.com/spring-projects/spring-framework/issues/36683)

## :lady_beetle: Bug Fixes

- Data is lost for joined DataBuffer in DataBufferUtils [#36874](https://github.com/spring-projects/spring-framework/issues/36874)
- CronExpression skips days on midnight DST gap [#36873](https://github.com/spring-projects/spring-framework/issues/36873)
- Concurrency issue against shared cookie field in `CookieLocaleResolver#setLocaleContext` [#36870](https://github.com/spring-projects/spring-framework/issues/36870)
- Server Sent Event does not support multi-line comments [#36867](https://github.com/spring-projects/spring-framework/issues/36867)
- Regression in 6.2.0+: `ConfigurationClassParser` incorrectly removes component-scanned bean when the same class is also registered under a different name via XML [#36849](https://github.com/spring-projects/spring-framework/issues/36849)
- Bean Background Bootstrap and Lazy Init [#36847](https://github.com/spring-projects/spring-framework/issues/36847)
- Fix JSP tag processing [#36798](https://github.com/spring-projects/spring-framework/issues/36798)
- Fix script processing capabilities [#36796](https://github.com/spring-projects/spring-framework/issues/36796)
- Parsing failure for MIME type with quoted parameter values [#36734](https://github.com/spring-projects/spring-framework/issues/36734)
- Circular dependency between supplier-created beans is silently ignored on startup [#36732](https://github.com/spring-projects/spring-framework/issues/36732)
- Non-deterministic "Body token not expected" in org.springframework.http.codec.multipart.PartGenerator [#36722](https://github.com/spring-projects/spring-framework/issues/36722)
- Regression on value class parameter handling [#36720](https://github.com/spring-projects/spring-framework/issues/36720)
- Cache collisions in CachingResourceResolver [#36718](https://github.com/spring-projects/spring-framework/issues/36718)
- Unexpected path element removal when resolving versioned resources [#36699](https://github.com/spring-projects/spring-framework/issues/36699)

## :notebook_with_decorative_cover: Documentation

- Fix broken links to Selenium documentation [#36877](https://github.com/spring-projects/spring-framework/issues/36877)
- Fix applicability note on setAutoGrowCollectionLimit [#36864](https://github.com/spring-projects/spring-framework/issues/36864)
- Javadoc of nestingLevel parameter in MethodParameter constructor is inconsistent with actual implementation [#36848](https://github.com/spring-projects/spring-framework/issues/36848)

## :hammer: Dependency Upgrades

- Upgrade to JUnit 5.14.4 [#36707](https://github.com/spring-projects/spring-framework/issues/36707)
- Upgrade to Micrometer 1.15.12 [#36881](https://github.com/spring-projects/spring-framework/issues/36881)
- Upgrade to Reactor 2024.0.18 [#36882](https://github.com/spring-projects/spring-framework/issues/36882)

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v6.2.19` · 2026-06-08 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v6.2.19)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
