---
title: "spring-security 7.0.7"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.0.7"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Fix Broken DefaultLoginPageGeneratingFilter Javadoc Link #19252 · Remove BeanResolver Null Checks #19209 · Remove Unnecessary AuthorizationDecision Cast #19283 · Update One-Time Token Docs for Renamed APIs #19274"
---

# spring-security 7.0.7

## :star: New Features

- Fix Broken `DefaultLoginPageGeneratingFilter` Javadoc Link [#19252](https://github.com/spring-projects/spring-security/pull/19252)
- Remove BeanResolver Null Checks [#19209](https://github.com/spring-projects/spring-security/pull/19209)
- Remove Unnecessary `AuthorizationDecision` Cast [#19283](https://github.com/spring-projects/spring-security/pull/19283)
- Update One-Time Token Docs for Renamed APIs [#19274](https://github.com/spring-projects/spring-security/pull/19274)

## :beetle: Bug Fixes

- Correct validation logic in CasAuthenticationToken [#19372](https://github.com/spring-projects/spring-security/pull/19372)
- Differentiate Forwarded and X-Forwarded headers in proxy docs [#19477](https://github.com/spring-projects/spring-security/pull/19477)
- Find mixed-case usernames in InMemoryUserDetailsManager#changePassword [#19337](https://github.com/spring-projects/spring-security/pull/19337)
- Fix `OAuth2PushedAuthorizationRequestUri` parsing [#19445](https://github.com/spring-projects/spring-security/pull/19445)
- Fixes [cve-2026-41707](https://spring.io/security/cve-2026-41707)
- Fixes [cve-2026-47841](https://spring.io/security/cve-2026-47841)
- Fixes [cve-2026-47842](https://spring.io/security/cve-2026-47842)
- Fixes [cve-2026-47877](https://spring.io/security/cve-2026-47877)
- Fixes [cve-2026-59270](https://spring.io/security/cve-2026-59270)
- Fixes [cve-2026-59276](https://spring.io/security/cve-2026-59276)
- Update JavaDoc Links in Reference [#19199](https://github.com/spring-projects/spring-security/pull/19199)
- Validate Parameter in setPostAuthenticationChecks [#19277](https://github.com/spring-projects/spring-security/pull/19277)

## :hammer: Dependency Upgrades

- Bump `@springio`/antora-extensions from 1.14.12 to 1.14.13 in /docs [#19504](https://github.com/spring-projects/spring-security/pull/19504)
- Bump actions/checkout from 6.0.3 to 7.0.1 [#19466](https://github.com/spring-projects/spring-security/pull/19466)
- Bump actions/setup-java from 5.2.0 to 5.7.0 [#19505](https://github.com/spring-projects/spring-security/pull/19505)
- Bump antora from 3.2.0-alpha.12 to 3.2.0-rc.2 in /docs [#19381](https://github.com/spring-projects/spring-security/pull/19381)
- Bump ch.qos.logback:logback-classic from 1.5.34 to 1.5.38 [#19433](https://github.com/spring-projects/spring-security/pull/19433)
- Bump com.unboundid:unboundid-ldapsdk from 7.0.4 to 7.0.5 [#19323](https://github.com/spring-projects/spring-security/pull/19323)
- Bump org.apache.kerby:kerb-simplekdc from 2.1.1 to 2.1.2 [#19391](https://github.com/spring-projects/spring-security/pull/19391)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@ArzMeow, @big-cir, @junhyeong9812, @jyx-07, @ngocnhan-tran1996, @skdas20, @snowykte0426, and @therepanic

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.0.7` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
