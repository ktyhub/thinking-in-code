---
title: "spring-security 7.0.8"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.0.8"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-security 7.0.8

## :star: New Features

- Polish onetimetoken references

## :beetle: Bug Fixes

- AuthenticatorTransport#values should include SMART\_CARD
- Empty or null scope claim in dynamic client registration request should be lenient
- Fix HeaderWriterFilter race condition during async requests
- Fix TokenType comparison logic
- Fix typos in Javadocs
- NPE with authenticationValidator in OAuth2AuthorizationCodeRequestValidatingFilter
- SecurityContextHolderThreadLocalAccessor should not share SecurityContext instance across threads

## :hammer: Dependency Upgrades

- Bump `@antora`/atlas-extension from 1.0.0-alpha.5 to 1.0.0-alpha.6 in /docs
- Bump antora from 3.2.0 to 3.2.1 in /docs
- Bump antora from 3.2.0-rc.2 to 3.2.0-rc.3 in /docs
- Bump antora from 3.2.0-rc.3 to 3.2.0 in /docs
- Bump gradle-wrapper from 8.14.5 to 8.14.6
- Bump io-spring-javaformat from 0.0.47 to 0.0.48
- Bump io.spring.develocity.conventions from 0.0.25 to 0.0.27
- Bump io.spring.gradle:spring-security-project-plugin from 1.0.19 to 1.0.20
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.15 to 1.0.17
- Bump io.spring.gradle:spring-security-release-plugin from 1.0.17 to 1.0.20
- Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19
- Bump org.slf4j:slf4j-api from 2.0.19 to 2.0.20
- Bump spring-io/spring-release-actions/compute-next-version from 0.0.5 to 0.0.6
- Bump spring-io/spring-release-actions/get-todays-release-version from 0.0.5 to 0.0.6
- Bump spring-io/spring-security-release-tools/.github/actions/send-notification from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/build.yml from 1.0.15 to 1.0.17
- Bump spring-io/spring-security-release-tools/.github/workflows/deploy-artifacts.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/deploy-schema.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/release-announcements-publish.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/test.yml from 1.0.17 to 1.0.18
- Bump spring-io/spring-security-release-tools/.github/workflows/test.yml from ed473b4dafba053c63a453d2d88a89df3b3e18b3 to 9ca0acea761aa79d71c78cc462048c49ed5c4230

## :nut_and_bolt: Build Updates

- Configure for Reproducible Builds

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Kehrlann, @bdshadow, @ngocnhan-tran1996, @therepanic, and @ttddyy

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.0.8` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
