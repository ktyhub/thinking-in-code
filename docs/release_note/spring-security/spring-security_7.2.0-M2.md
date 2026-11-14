---
title: "spring-security 7.2.0-M2"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.2.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "@EnableMethodSecurity should pick up PermissionEvaluator bean · Allow configurable DPoP Proof verifier · Expose OAuth2AuthorizationCodeRequestValidatingFilter"
---

# spring-security 7.2.0-M2

## :star: New Features

- `@EnableMethodSecurity` should pick up PermissionEvaluator bean
- Allow configurable DPoP Proof verifier
- Expose OAuth2AuthorizationCodeRequestValidatingFilter
- Ignore Apple touch icon requests (apple-touch-icon\*.png) in the default RequestCache
- Ignore browserconfig.xml requests in the default RequestCache
- Ignore Chrome DevTools' .well-known/appspecific/com.chrome.devtools.json probe in the default RequestCache
- Ignore web app manifest requests (manifest.json / manifest.webmanifest) in the default RequestCache
- KerberosRestClient should rethrow original RestClientException
- Make authenticationSuccessHandler Configurable in Resource Server DSL
- Modernize the default RequestCache background-request ignore list
- Modernize the default RequestCache background-request ignore list
- Simplify ProviderManager null provider check
- Test cache full rejection and replay detection
- Update cryptography.adoc to use include-code

## :beetle: Bug Fixes

- Downgrade to Jackson 3.1
- Header Writers should not corrupt Jetty HttpFields state in reactive ResponseBodyEmitter handlers
- NoClassDefFound with version 7.1.0
- TokenType reference comparison is used in BearerTokenAuthentication

## :hammer: Dependency Upgrades

- Bump actions/setup-java from 6.0.0 to 6.0.1
- Bump antora from 3.2.0-rc.2 to 3.2.0
- Bump antora from 3.2.0-rc.3 to 3.2.0 in /docs
- Bump gradle-wrapper from 9.7.0 to 9.7.1
- Bump io-spring-javaformat from 0.0.47 to 0.0.48
- Bump io.spring.develocity.conventions from 0.0.25 to 0.0.26
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.18 to 1.0.19
- Bump org-bouncycastle from 1.85 to 1.86
- Bump org-jetbrains-kotlin from 2.4.10 to 2.4.20
- Bump org.hibernate.orm:hibernate-core from 7.4.5.Final to 7.4.7.Final
- Bump org.hibernate.orm:hibernate-core from 7.4.7.Final to 7.4.8.Final
- Bump org.hibernate.orm:hibernate-core from 7.4.8.Final to 7.4.9.Final
- Bump org.hibernate.orm:hibernate-core from 7.4.9.Final to 7.4.10.Final
- Bump org.seleniumhq.selenium:htmlunit3-driver from 4.43.0 to 4.47.0
- Bump org.seleniumhq.selenium:selenium-java from 4.43.0 to 4.47.0
- Bump org.seleniumhq.selenium:selenium-java from 4.43.0 to 4.48.0
- Bump org.seleniumhq.selenium:selenium-java from 4.48.0 to 4.49.0
- Bump spring-io/spring-release-actions/compute-version from 0.0.6 to 0.0.7
- Bump spring-io/spring-release-actions/get-todays-release-version from 0.0.6 to 0.0.7
- Bump tools.jackson:jackson-bom from 3.1.6 to 3.2.2
- Update to HtmlUnit 5
- Update to Micrometer 1.18.0-M2
- Update to Node 24
- Update to Reactor 2026.0.0-M2
- Update to Spring Data 2026.1.0-M2
- Update to Spring Framework 7.1.0-M2
- Update to Spring LDAP 4.2.0-M1
- Update to spring-security-release-tools v1.0.18

## :nut_and_bolt: Build Updates

- Bump io-micrometer from 1.18.0-M1 to 1.18.0-SNAPSHOT
- Configure for Reproducible Builds
- Turn Off Auto-merge for Maintenance Branch

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Siggen, @anthonydahanne, @avsan, @iain-henderson, @morokosi, @rwinch, and @sunghyun1999

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.2.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.2.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
