---
title: "spring-security 7.1.2"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.1.2"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Avoid spring-core in password encoder validation · Downgrade to Jackson 3.1 · Empty or null scope claim in dynamic client registration request should be lenient"
---

# spring-security 7.1.2

## :beetle: Bug Fixes

- Avoid spring-core in password encoder validation
- Downgrade to Jackson 3.1
- Empty or null scope claim in dynamic client registration request should be lenient
- Ensure WebSession ID is not changed after token refresh (Reactive)
- Fix to allow null servlet request/response in ServletOAuth2AuthorizedClientExchangeFilterFunction
- Header Writers should not corrupt Jetty HttpFields state in reactive ResponseBodyEmitter handlers
- NPE with authenticationValidator in OAuth2AuthorizationCodeRequestValidatingFilter
- TokenType reference comparison is used in BearerTokenAuthentication

## :hammer: Dependency Upgrades

- Bump `@antora`/atlas-extension from 1.0.0-alpha.5 to 1.0.0-alpha.6 in /docs
- Bump actions/setup-java from 6.0.0 to 6.0.1
- Bump antora from 3.2.0 to 3.2.1 in /docs
- Bump antora from 3.2.0-rc.3 to 3.2.0 in /docs
- Bump com.webauthn4j:webauthn4j-core from 0.31.9.RELEASE to 0.31.10.RELEASE
- Bump gradle-wrapper from 9.7.0 to 9.7.1
- Bump io-spring-javaformat from 0.0.47 to 0.0.48
- Bump io.spring.develocity.conventions from 0.0.25 to 0.0.26
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.15 to 1.0.16
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.16 to 1.0.17
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.17 to 1.0.19
- Bump io.spring.nullability:io.spring.nullability.gradle.plugin from 0.0.14 to 0.0.15
- Bump io.spring.nullability:io.spring.nullability.gradle.plugin from 0.0.15 to 0.0.16
- Bump org-jetbrains-kotlin from 2.4.10 to 2.4.20
- Bump org.hibernate.orm:hibernate-core from 7.4.5.Final to 7.4.6.Final
- Bump org.hibernate.orm:hibernate-core from 7.4.6.Final to 7.4.7.Final
- Bump org.hibernate.orm:hibernate-core from 7.4.7.Final to 7.4.10.Final
- Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19
- Bump spring-io/spring-release-actions/compute-next-version from 0.0.5 to 0.0.6
- Bump spring-io/spring-release-actions/compute-next-version from 0.0.6 to 0.0.7
- Bump spring-io/spring-release-actions/get-todays-release-version from 0.0.5 to 0.0.6
- Bump spring-io/spring-security-release-tools/.github/actions/send-notification from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/build.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/deploy-artifacts.yml from 1.0.15 to 1.0.17
- Bump spring-io/spring-security-release-tools/.github/workflows/deploy-schema.yml from 1.0.15 to 1.0.17
- Bump spring-io/spring-security-release-tools/.github/workflows/release-announcements-publish.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/release-announcements-stage.yml from 1.0.16 to 1.0.17
- Bump tools.jackson:jackson-bom from 3.1.6 to 3.1.7

## :nut_and_bolt: Build Updates

- Configure for Reproducible Builds
- Manually Set RequestedSessionId in Tests

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@evgeniycheban, @petergphillips, and @seonwooj0810

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.1.2` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
