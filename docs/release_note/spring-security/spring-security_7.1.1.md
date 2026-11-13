---
title: "spring-security 7.1.1"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.1.1"
published: "2026-08-20"
type: "patch"
lang: "en"
---

# spring-security 7.1.1

## :star: New Features

- Fix Broken `DefaultLoginPageGeneratingFilter` Javadoc Link [#19252](https://github.com/spring-projects/spring-security/pull/19252)
- Remove BeanResolver Null Checks [#19209](https://github.com/spring-projects/spring-security/pull/19209)
- Remove Unnecessary `AuthorizationDecision` Cast [#19283](https://github.com/spring-projects/spring-security/pull/19283)
- Update One-Time Token Docs for Renamed APIs [#19274](https://github.com/spring-projects/spring-security/pull/19274)

## :beetle: Bug Fixes

- Correct validation logic in CasAuthenticationToken [#19372](https://github.com/spring-projects/spring-security/pull/19372)
- Differentiate Forwarded and X-Forwarded headers in proxy docs [#19477](https://github.com/spring-projects/spring-security/pull/19477)
- Find mixed-case names in InMemoryUserDetailsManager#changePassword [#19539](https://github.com/spring-projects/spring-security/issues/19539)
- Fix `OAuth2PushedAuthorizationRequestUri` parsing [#19445](https://github.com/spring-projects/spring-security/pull/19445)
- Fixes [cve-2026-41707](https://spring.io/security/cve-2026-41707)
- Fixes [cve-2026-47841](https://spring.io/security/cve-2026-47841)
- Fixes [cve-2026-47842](https://spring.io/security/cve-2026-47842)
- Fixes [cve-2026-47877](https://spring.io/security/cve-2026-47877)
- Fixes [cve-2026-59270](https://spring.io/security/cve-2026-59270)
- Fixes [cve-2026-59276](https://spring.io/security/cve-2026-59276)
- Fixes [cve-2026-59277](https://spring.io/security/cve-2026-59277)
- Update JavaDoc Links in Reference [#19199](https://github.com/spring-projects/spring-security/pull/19199)
- Validate Parameter in setPostAuthenticationChecks [#19277](https://github.com/spring-projects/spring-security/pull/19277)

## :hammer: Dependency Upgrades

- Bump `@springio`/antora-extensions from 1.14.12 to 1.14.13 in /docs [#19503](https://github.com/spring-projects/spring-security/pull/19503)
- Bump actions/checkout from 6.0.3 to 7.0.0 [#19351](https://github.com/spring-projects/spring-security/pull/19351)
- Bump actions/checkout from 7.0.0 to 7.0.1 [#19464](https://github.com/spring-projects/spring-security/pull/19464)
- Bump actions/setup-java from 5.2.0 to 5.3.0 [#19352](https://github.com/spring-projects/spring-security/pull/19352)
- Bump actions/setup-java from 5.3.0 to 5.4.0 [#19380](https://github.com/spring-projects/spring-security/pull/19380)
- Bump actions/setup-java from 5.4.0 to 5.5.0 [#19430](https://github.com/spring-projects/spring-security/pull/19430)
- Bump actions/setup-java from 5.5.0 to 5.6.0 [#19453](https://github.com/spring-projects/spring-security/pull/19453)
- Bump actions/setup-java from 5.6.0 to 5.7.0 [#19501](https://github.com/spring-projects/spring-security/pull/19501)
- Bump antora from 3.2.0-alpha.12 to 3.2.0-rc.2 in /docs [#19385](https://github.com/spring-projects/spring-security/pull/19385)
- Bump ch.qos.logback:logback-classic from 1.5.34 to 1.5.35 [#19374](https://github.com/spring-projects/spring-security/pull/19374)
- Bump ch.qos.logback:logback-classic from 1.5.35 to 1.5.36 [#19389](https://github.com/spring-projects/spring-security/pull/19389)
- Bump ch.qos.logback:logback-classic from 1.5.36 to 1.5.37 [#19396](https://github.com/spring-projects/spring-security/pull/19396)
- Bump ch.qos.logback:logback-classic from 1.5.37 to 1.5.38 [#19431](https://github.com/spring-projects/spring-security/pull/19431)
- Bump ch.qos.logback:logback-classic from 1.5.38 to 1.6.0 [#19467](https://github.com/spring-projects/spring-security/pull/19467)
- Bump ch.qos.logback:logback-classic from 1.6.0 to 1.6.1 [#19476](https://github.com/spring-projects/spring-security/pull/19476)
- Bump ch.qos.logback:logback-classic from 1.6.1 to 1.6.2 [#19556](https://github.com/spring-projects/spring-security/pull/19556)
- Bump ch.qos.logback:logback-classic from 1.6.2 to 1.6.3 [#19564](https://github.com/spring-projects/spring-security/pull/19564)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.0 to 2.22.1 [#19419](https://github.com/spring-projects/spring-security/pull/19419)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2 [#19566](https://github.com/spring-projects/spring-security/pull/19566)
- Bump com.nimbusds:oauth2-oidc-sdk from 11.37.2 to 11.38.1 [#19439](https://github.com/spring-projects/spring-security/pull/19439)
- Bump com.nimbusds:oauth2-oidc-sdk from 11.38.1 to 11.38.2 [#19525](https://github.com/spring-projects/spring-security/pull/19525)
- Bump com.unboundid:unboundid-ldapsdk from 7.0.4 to 7.0.5 [#19322](https://github.com/spring-projects/spring-security/pull/19322)
- Bump com.webauthn4j:webauthn4j-core from 0.31.6.RELEASE to 0.31.7.RELEASE [#19313](https://github.com/spring-projects/spring-security/pull/19313)
- Bump com.webauthn4j:webauthn4j-core from 0.31.7.RELEASE to 0.31.8.RELEASE [#19409](https://github.com/spring-projects/spring-security/pull/19409)
- Bump com.webauthn4j:webauthn4j-core from 0.31.8.RELEASE to 0.31.9.RELEASE [#19496](https://github.com/spring-projects/spring-security/pull/19496)
- Bump gradle-wrapper from 9.5.1 to 9.6.0 [#19360](https://github.com/spring-projects/spring-security/pull/19360)
- Bump gradle-wrapper from 9.6.0 to 9.6.1 [#19393](https://github.com/spring-projects/spring-security/pull/19393)
- Bump gradle-wrapper from 9.6.1 to 9.7.0 [#19516](https://github.com/spring-projects/spring-security/pull/19516)
- Bump io.spring.nullability:io.spring.nullability.gradle.plugin from 0.0.13 to 0.0.14 [#19378](https://github.com/spring-projects/spring-security/pull/19378)
- Bump org-bouncycastle from 1.84 to 1.85 [#19437](https://github.com/spring-projects/spring-security/pull/19437)
- Bump org-jetbrains-kotlin from 2.4.0 to 2.4.10 [#19447](https://github.com/spring-projects/spring-security/pull/19447)
- Bump org-opensaml5 from 5.2.2 to 5.2.3 [#19358](https://github.com/spring-projects/spring-security/pull/19358)
- Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.1 to 5.6.2 [#19401](https://github.com/spring-projects/spring-security/pull/19401)
- Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.2 to 5.6.3 [#19495](https://github.com/spring-projects/spring-security/pull/19495)
- Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.3 to 5.6.4 [#19538](https://github.com/spring-projects/spring-security/pull/19538)
- Bump org.apache.kerby:kerb-simplekdc from 2.1.1 to 2.1.2 [#19387](https://github.com/spring-projects/spring-security/pull/19387)
- Bump org.hibernate.orm:hibernate-core from 7.4.0.Final to 7.4.1.Final [#19312](https://github.com/spring-projects/spring-security/pull/19312)
- Bump org.hibernate.orm:hibernate-core from 7.4.1.Final to 7.4.2.Final [#19364](https://github.com/spring-projects/spring-security/pull/19364)
- Bump org.hibernate.orm:hibernate-core from 7.4.2.Final to 7.4.3.Final [#19402](https://github.com/spring-projects/spring-security/pull/19402)
- Bump org.hibernate.orm:hibernate-core from 7.4.3.Final to 7.4.4.Final [#19416](https://github.com/spring-projects/spring-security/pull/19416)
- Bump org.hibernate.orm:hibernate-core from 7.4.4.Final to 7.4.5.Final [#19443](https://github.com/spring-projects/spring-security/pull/19443)
- Bump org.junit:junit-bom from 6.1.0 to 6.1.1 [#19395](https://github.com/spring-projects/spring-security/pull/19395)
- Bump org.junit:junit-bom from 6.1.1 to 6.1.2 [#19442](https://github.com/spring-projects/spring-security/pull/19442)
- Bump org.junit:junit-bom from 6.1.2 to 6.1.3 [#19524](https://github.com/spring-projects/spring-security/pull/19524)
- Bump org.junit:junit-bom from 6.1.2 to 6.1.3 [#19519](https://github.com/spring-projects/spring-security/pull/19519)
- Bump org.seleniumhq.selenium:htmlunit3-driver from 4.43.0 to 4.45.0 [#19365](https://github.com/spring-projects/spring-security/pull/19365)
- Bump org.seleniumhq.selenium:selenium-java from 4.43.0 to 4.45.0 [#19344](https://github.com/spring-projects/spring-security/pull/19344)
- Bump tools.jackson:jackson-bom from 3.2.0 to 3.2.1 [#19438](https://github.com/spring-projects/spring-security/pull/19438)
- Bump tools.jackson:jackson-bom from 3.2.1 to 3.2.2 [#19562](https://github.com/spring-projects/spring-security/pull/19562)
- Release 7.1.1 [#19310](https://github.com/spring-projects/spring-security/issues/19310)
- Upgrade to Micrometer 1.17.1 [#19489](https://github.com/spring-projects/spring-security/issues/19489)
- Upgrade to Reactor 2025.0.7 [#19488](https://github.com/spring-projects/spring-security/issues/19488)
- Upgrade to Spring Framework 7.0.9 [#19487](https://github.com/spring-projects/spring-security/issues/19487)
- Upgrade to Spring LDAP 4.1.1 [#19491](https://github.com/spring-projects/spring-security/issues/19491)

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.1.1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
