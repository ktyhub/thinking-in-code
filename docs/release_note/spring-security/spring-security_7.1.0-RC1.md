---
title: "spring-security 7.1.0-RC1"
project: "spring-security"
repo: "spring-projects/spring-security"
tag: "7.1.0-RC1"
published: "2026-04-20"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-security 7.1.0-RC1

## :star: New Features

- Add `AllRequiredFactorsAuthorizationManager.anyOf` [#18960](https://github.com/spring-projects/spring-security/issues/18960)
- Add `PreFlightRequestFilter` Support [#18926](https://github.com/spring-projects/spring-security/issues/18926)
- Add ConditionalAuthorizationManager [#18919](https://github.com/spring-projects/spring-security/issues/18919)
- Add MultiFactorCondition.WEBAUTHN\_REGISTERED [#18923](https://github.com/spring-projects/spring-security/issues/18923)
- Add PreFlightRequestFilter Support [#18980](https://github.com/spring-projects/spring-security/pull/18980)
- Add PrincipalResolver to ExchangeFilterFunctions [#18888](https://github.com/spring-projects/spring-security/pull/18888)
- Add Support DPoP Customization [#17202](https://github.com/spring-projects/spring-security/pull/17202)
- Add XML Based shouldWriteHeadersEagerly tests [#19019](https://github.com/spring-projects/spring-security/pull/19019)
- AuthorizationManagerFactories.when [#18920](https://github.com/spring-projects/spring-security/issues/18920)
- Clarify `@WithSecurityContext` thread scope [#18812](https://github.com/spring-projects/spring-security/pull/18812)
- Construct SecureRandom in BCryptPasswordEncoder [#18560](https://github.com/spring-projects/spring-security/pull/18560)
- Enable Null checking in spring-security-oauth2-authorization-server via JSpecify [#18937](https://github.com/spring-projects/spring-security/issues/18937)
- Enable Null checking in spring-security-oauth2-client via JSpecify [#17819](https://github.com/spring-projects/spring-security/issues/17819)
- Enable Null checking in spring-security-oauth2-resource-server via JSpecify [#17822](https://github.com/spring-projects/spring-security/issues/17822)
- Exclude build output directories from nohttp source set [#18928](https://github.com/spring-projects/spring-security/pull/18928)
- Implement equals and hashCode in ImmutablePublicKeyCredentialUserEntity [#18883](https://github.com/spring-projects/spring-security/pull/18883)
- Improve And/Or-RequestMatcher/ServerWebExchangeMatcher API [#18479](https://github.com/spring-projects/spring-security/pull/18479)
- Merge Add CredentialRecordOwnerAuthorizationManager [#19006](https://github.com/spring-projects/spring-security/pull/19006)
- Move InetAddressMatcher to spring-security-core [#18979](https://github.com/spring-projects/spring-security/issues/18979)
- Polish oauth2-client tests with missing Content-Type header [#19008](https://github.com/spring-projects/spring-security/issues/19008)
- Prefer dispatcher context for authorize tag beans [#18822](https://github.com/spring-projects/spring-security/pull/18822)
- Publish authentication events in WebAuthn [#18938](https://github.com/spring-projects/spring-security/pull/18938)
- Relax client\_id validation in AtJwtBuilder [#18890](https://github.com/spring-projects/spring-security/pull/18890)
- Remove compiler warnings for spring-security-access [#18738](https://github.com/spring-projects/spring-security/pull/18738)
- Remove compiler warnings in spring-security-web [#18820](https://github.com/spring-projects/spring-security/pull/18820)
- Remove Unnecessary ObjectProvider<RoleHierarchy> roleHierarchy parameter [#18921](https://github.com/spring-projects/spring-security/issues/18921)
- Revert snapshots to Spring Framework 7.0.+ [#19024](https://github.com/spring-projects/spring-security/issues/19024)
- Support Customizer<AdditionalRequiredFactorsBuilder<Object>>> [#18922](https://github.com/spring-projects/spring-security/issues/18922)
- Use idiomatic Kotlin in custom filter documentation [#18976](https://github.com/spring-projects/spring-security/pull/18976)

## :beetle: Bug Fixes

- Fix equals nullability annotations for jspecify compliance [#18930](https://github.com/spring-projects/spring-security/pull/18930)
- Merge Handle null value in OnCommittedResponseWrapper header methods [#18991](https://github.com/spring-projects/spring-security/pull/18991)

## :hammer: Dependency Upgrades

- Bump `@springio`/antora-extensions from 1.14.7 to 1.14.9 in /docs [#18946](https://github.com/spring-projects/spring-security/pull/18946)
- Bump `@springio`/antora-extensions from 1.14.9 to 1.14.10 in /docs [#19030](https://github.com/spring-projects/spring-security/pull/19030)
- Bump `@springio`/antora-extensions from 1.14.9 to 1.14.11 in /docs [#19053](https://github.com/spring-projects/spring-security/pull/19053)
- Bump `@springio`/asciidoctor-extensions from 1.0.0-alpha.17 to 1.0.0-alpha.18 in /docs [#18913](https://github.com/spring-projects/spring-security/pull/18913)
- Bump actions/upload-artifact from 7.0.0 to 7.0.1 [#19091](https://github.com/spring-projects/spring-security/pull/19091)
- Bump com.fasterxml.jackson:jackson-bom from 2.21.1 to 2.21.2 [#18965](https://github.com/spring-projects/spring-security/pull/18965)
- Bump com.nimbusds:oauth2-oidc-sdk from 11.34 to 11.35 [#18977](https://github.com/spring-projects/spring-security/pull/18977)
- Bump com.nimbusds:oauth2-oidc-sdk from 11.35 to 11.37 [#19002](https://github.com/spring-projects/spring-security/pull/19002)
- Bump com.webauthn4j:webauthn4j-core from 0.31.1.RELEASE to 0.31.2.RELEASE [#19020](https://github.com/spring-projects/spring-security/pull/19020)
- Bump com.webauthn4j:webauthn4j-core from 0.31.2.RELEASE to 0.31.3.RELEASE [#19107](https://github.com/spring-projects/spring-security/pull/19107)
- Bump gradle-wrapper from 9.4.0 to 9.4.1 [#18959](https://github.com/spring-projects/spring-security/pull/18959)
- Bump io.micrometer:micrometer-observation from 1.16.4 to 1.16.5 [#19065](https://github.com/spring-projects/spring-security/pull/19065)
- Bump io.projectreactor:reactor-bom from 2025.0.4 to 2025.0.5 [#19079](https://github.com/spring-projects/spring-security/pull/19079)
- Bump io.spring.nullability:io.spring.nullability.gradle.plugin from 0.0.12 to 0.0.13 [#19067](https://github.com/spring-projects/spring-security/pull/19067)
- Bump org-bouncycastle from 1.83 to 1.84 [#19066](https://github.com/spring-projects/spring-security/pull/19066)
- Bump org-jetbrains-kotlin from 2.3.10 to 2.3.20 [#18915](https://github.com/spring-projects/spring-security/pull/18915)
- Bump org.apache.httpcomponents.client5:httpclient5 from 5.6 to 5.6.1 [#19106](https://github.com/spring-projects/spring-security/pull/19106)
- Bump org.apache.maven:maven-resolver-provider from 3.9.14 to 3.9.15 [#19105](https://github.com/spring-projects/spring-security/pull/19105)
- Bump org.apereo.cas.client:cas-client-core from 4.0.4 to 4.1.0 [#18974](https://github.com/spring-projects/spring-security/pull/18974)
- Bump org.hibernate.orm:hibernate-core from 7.2.7.Final to 7.3.0.Final [#18917](https://github.com/spring-projects/spring-security/pull/18917)
- Bump org.hibernate.orm:hibernate-core from 7.3.0.Final to 7.3.1.Final [#19063](https://github.com/spring-projects/spring-security/pull/19063)
- Bump org.jetbrains.dokka from 2.1.0 to 2.2.0 [#18998](https://github.com/spring-projects/spring-security/pull/18998)
- Bump org.jetbrains.dokka:dokka-gradle-plugin from 2.1.0 to 2.2.0 [#18999](https://github.com/spring-projects/spring-security/pull/18999)
- Bump org.seleniumhq.selenium:htmlunit3-driver from 4.41.0 to 4.43.0 [#19060](https://github.com/spring-projects/spring-security/pull/19060)
- Bump org.seleniumhq.selenium:selenium-java from 4.41.0 to 4.42.0 [#19056](https://github.com/spring-projects/spring-security/pull/19056)
- Bump org.seleniumhq.selenium:selenium-java from 4.41.0 to 4.43.0 [#19062](https://github.com/spring-projects/spring-security/pull/19062)
- Bump org.springframework.data:spring-data-bom from 2025.1.4 to 2025.1.5 [#19104](https://github.com/spring-projects/spring-security/pull/19104)
- Bump org.springframework.ldap:spring-ldap-core from 4.0.2 to 4.0.3 [#19097](https://github.com/spring-projects/spring-security/pull/19097)
- Bump spring-io/spring-gradle-build-action from 2.0.5 to 2.0.6 [#18993](https://github.com/spring-projects/spring-security/pull/18993)
- Bump spring-io/spring-release-actions from 0.0.3 to 0.0.4 [#19092](https://github.com/spring-projects/spring-security/pull/19092)
- Bump spring-io/spring-security-release-tools from 1.0.14 to 1.0.15 [#18942](https://github.com/spring-projects/spring-security/pull/18942)
- Bump spring-io/spring-security-release-tools/.github/workflows/perform-release.yml from 1.0.14 to 1.0.15 [#18944](https://github.com/spring-projects/spring-security/pull/18944)
- Bump spring-io/spring-security-release-tools/.github/workflows/test.yml from 1.0.14 to 1.0.15 [#18943](https://github.com/spring-projects/spring-security/pull/18943)
- Bump spring-io/spring-security-release-tools/.github/workflows/update-scheduled-release-version.yml from 1.0.14 to 1.0.15 [#18945](https://github.com/spring-projects/spring-security/pull/18945)
- Bump tools.jackson:jackson-bom from 3.1.0 to 3.1.1 [#19003](https://github.com/spring-projects/spring-security/pull/19003)
- Bump tools.jackson:jackson-bom from 3.1.1 to 3.1.2 [#19061](https://github.com/spring-projects/spring-security/pull/19061)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@aspan, @dasog94, @evgeniycheban, @franticticktick, @gbaso, @jkuhel, @ribafish, @rwinch, @suuuuuuminnnnnn, @therepanic, @wonderfulrosemari, @yxinot, and @ziqin

---

> **Source** [spring-projects/spring-security](https://github.com/spring-projects/spring-security) · `7.1.0-RC1` · 2026-04-20 · [upstream release](https://github.com/spring-projects/spring-security/releases/tag/7.1.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
