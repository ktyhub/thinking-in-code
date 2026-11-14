---
title: "spring-security 7.2.0-M1"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.2.0-M1"
published: "2026-08-20"
type: "pre"
lang: "en"
summary: "Add Implicit CorsConfigurationSource/PreFlightRequestHandler Detection to XML Namespace #19542 · Add Release Announcement Workflows #19573 · Validate account status in OneTimeTokenAuthenticationProvider #17656"
---

# spring-security 7.2.0-M1

## :star: New Features

- Add Implicit CorsConfigurationSource/PreFlightRequestHandler Detection to `<cors>` XML Namespace [#19542](https://github.com/spring-projects/spring-security/issues/19542)
- Add Release Announcement Workflows [#19573](https://github.com/spring-projects/spring-security/issues/19573)
- Validate account status in OneTimeTokenAuthenticationProvider [#17656](https://github.com/spring-projects/spring-security/pull/17656)
- Fix Broken `DefaultLoginPageGeneratingFilter` Javadoc Link [#19252](https://github.com/spring-projects/spring-security/pull/19252)
- Remove BeanResolver Null Checks [#19209](https://github.com/spring-projects/spring-security/pull/19209)
- Remove Unnecessary `AuthorizationDecision` Cast [#19283](https://github.com/spring-projects/spring-security/pull/19283)
- Update One-Time Token Docs for Renamed APIs [#19274](https://github.com/spring-projects/spring-security/pull/19274)

## :beetle: Bug Fixes

- Find mixed-case names in InMemoryUserDetailsManager#changePassword [#19540](https://github.com/spring-projects/spring-security/issues/19540)
- Correct validation logic in CasAuthenticationToken [#19372](https://github.com/spring-projects/spring-security/pull/19372)
- Differentiate Forwarded and X-Forwarded headers in proxy docs [#19477](https://github.com/spring-projects/spring-security/pull/19477)
- Fix `OAuth2PushedAuthorizationRequestUri` parsing [#19445](https://github.com/spring-projects/spring-security/pull/19445)
- Update JavaDoc Links in Reference [#19199](https://github.com/spring-projects/spring-security/pull/19199)
- Validate Parameter in setPostAuthenticationChecks [#19277](https://github.com/spring-projects/spring-security/pull/19277)

## :hammer: Dependency Upgrades

- Bump ch.qos.logback:logback-classic from 1.6.1 to 1.6.2 [#19555](https://github.com/spring-projects/spring-security/pull/19555)
- Bump ch.qos.logback:logback-classic from 1.6.2 to 1.6.3 [#19559](https://github.com/spring-projects/spring-security/pull/19559)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2 [#19565](https://github.com/spring-projects/spring-security/pull/19565)
- Bump com.nimbusds:oauth2-oidc-sdk from 11.38.1 to 11.38.2 [#19462](https://github.com/spring-projects/spring-security/pull/19462)
- Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.3 to 5.6.4 [#19537](https://github.com/spring-projects/spring-security/pull/19537)
- Bump org.seleniumhq.selenium:htmlunit3-driver from 4.43.0 to 4.46.0 [#19451](https://github.com/spring-projects/spring-security/pull/19451)
- Bump org.seleniumhq.selenium:selenium-java from 4.43.0 to 4.46.0 [#19440](https://github.com/spring-projects/spring-security/pull/19440)

FAILURE: Build failed with an exception.
- Bump tools.jackson:jackson-bom from 3.2.1 to 3.2.2 [#19560](https://github.com/spring-projects/spring-security/pull/19560)

## :nut_and_bolt: Build Updates

- Disable CORS Tests Relying on HandlerMappingIntrospector [#19543](https://github.com/spring-projects/spring-security/issues/19543)
- Disable Lowercase HTTP Method Firewall Test [#19541](https://github.com/spring-projects/spring-security/issues/19541)
- Prepare for Spring Security 7.2 [#19527](https://github.com/spring-projects/spring-security/issues/19527)
- Suppress removal Warnings on RestOperations/RestTemplate Usage [#19544](https://github.com/spring-projects/spring-security/issues/19544)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@therepanic

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.2.0-M1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.2.0-M1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
