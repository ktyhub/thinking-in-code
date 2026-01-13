# spring-security 6.2.6

## ⭐ 新功能

- ActiveDirectoryLdapAuthenticationProvider 不支持多个 URL [#15494](https://github.com/spring-projects/spring-security/issues/15494)
- 记录 `CredentialsContainer` 的角色 [#15320](https://github.com/spring-projects/spring-security/issues/15320)
- OIDC 后台注销应允许包含 `typ` 标头的注销令牌 [#15277](https://github.com/spring-projects/spring-security/pull/15277)

## 🪲 错误修复

- Spring Security 参考中的一个失效链接 [#15288](https://github.com/spring-projects/spring-security/issues/15288)
- 修正 HttpSessionCsrfTokenRepository 文档 [#15392](https://github.com/spring-projects/spring-security/pull/15392)
- ServletBearerExchangeFilterFunction 文档不完整或不正确 [#15459](https://github.com/spring-projects/spring-security/issues/15459)
- 将自动 CORS 配置限制为 UrlBasedCorsConfigurationSource [#15444](https://github.com/spring-projects/spring-security/pull/15444)
- 更新文档中的 Java 17 前提条件 [#15323](https://github.com/spring-projects/spring-security/pull/15323)
- 在 JSPX 中使用 `sec:authorize` 会导致 `java.lang.NullPointerException: Cannot invoke "jakarta.servlet.ServletRegistration.getClassName()" because "registration" is null` [#15439](https://github.com/spring-projects/spring-security/issues/15439)

## 🔨 依赖升级

- 将 `com.github.spullara.mustache.java:compiler` 从 0.9.13 升级到 0.9.14 [#15376](https://github.com/spring-projects/spring-security/pull/15376)
- 将 `io.micrometer:micrometer-observation` 从 1.12.7 升级到 1.12.8 [#15381](https://github.com/spring-projects/spring-security/pull/15381)
- 将 `io.micrometer:micrometer-observation` 从 1.12.8 升级到 1.12.9 [#15588](https://github.com/spring-projects/spring-security/pull/15588)
- 将 `io.mockk:mockk` 从 1.13.11 升级到 1.13.12 [#15427](https://github.com/spring-projects/spring-security/pull/15427)
- 将 `io.projectreactor:reactor-bom` 从 2023.0.7 升级到 2023.0.8 [#15389](https://github.com/spring-projects/spring-security/pull/15389)
- 将 `io.projectreactor:reactor-bom` 从 2023.0.8 升级到 2023.0.9 [#15599](https://github.com/spring-projects/spring-security/pull/15599)
- 将 `jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api` 从 3.0.0 升级到 3.0.1 [#15589](https://github.com/spring-projects/spring-security/pull/15589)
- 将 `org-apache-maven-resolver` 从 1.9.20 升级到 1.9.21 [#15377](https://github.com/spring-projects/spring-security/pull/15377)
- 将 `org-apache-maven-resolver` 从 1.9.21 升级到 1.9.22 [#15543](https://github.com/spring-projects/spring-security/pull/15543)
- 将 `org.eclipse-jetty` 从 11.0.21 升级到 11.0.22 [#15358](https://github.com/spring-projects/spring-security/pull/15358)
- 将 `org.apache.maven:maven-resolver-provider` 从 3.9.7 升级到 3.9.8 [#15271](https://github.com/spring-projects/spring-security/pull/15271)
- 将 `org.apache.maven:maven-resolver-provider` 从 3.9.8 升级到 3.9.9 [#15645](https://github.com/spring-projects/spring-security/pull/15645)
- 将 `org.jetbrains.kotlin:kotlin-bom` 从 1.9.24 升级到 1.9.25 [#15452](https://github.com/spring-projects/spring-security/pull/15452)
- 将 `org.jetbrains.kotlin:kotlin-gradle-plugin` 从 1.9.24 升级到 1.9.25 [#15451](https://github.com/spring-projects/spring-security/pull/15451)
- 将 `org.junit:junit-bom` 从 5.10.2 升级到 5.10.3 [#15314](https://github.com/spring-projects/spring-security/pull/15314)
- 将 `org.skyscreamer:jsonassert` 从 1.5.1 升级到 1.5.3 [#15333](https://github.com/spring-projects/spring-security/pull/15333)
- 将 `org.slf4j:slf4j-api` 从 2.0.13 升级到 2.0.14 [#15528](https://github.com/spring-projects/spring-security/pull/15528)
- 将 `org.slf4j:slf4j-api` 从 2.0.14 升级到 2.0.15 [#15544](https://github.com/spring-projects/spring-security/pull/15544)
- 将 `org.slf4j:slf4j-api` 从 2.0.15 升级到 2.0.16 [#15570](https://github.com/spring-projects/spring-security/pull/15570)
- 将 `org.springframework.data:spring-data-bom` 从 2023.1.7 升级到 2023.1.8 [#15422](https://github.com/spring-projects/spring-security/pull/15422)
- 将 `org.springframework.data:spring-data-bom` 从 2023.1.8 升级到 2023.1.9 [#15644](https://github.com/spring-projects/spring-security/pull/15644)
- 将 `org.springframework.ldap:spring-ldap-core` 从 3.2.4 升级到 3.2.6 [#15618](https://github.com/spring-projects/spring-security/pull/15618)
- 将 `org.springframework:spring-framework-bom` 从 6.1.10 升级到 6.1.11 [#15404](https://github.com/spring-projects/spring-security/pull/15404)
- 将 `org.springframework:spring-framework-bom` 从 6.1.11 升级到 6.1.12 [#15614](https://github.com/spring-projects/spring-security/pull/15614)
- 将 `org.springframework:spring-framework-bom` 从 6.1.9 升级到 6.1.10 [#15280](https://github.com/spring-projects/spring-security/pull/15280)

## 🔩 构建更新

- 自动检查预期分支版本 [#15309](https://github.com/spring-projects/spring-security/issues/15309)
- 将 `@antora/collector-extension` 从 1.0.0-alpha.4 升级到 1.0.0-alpha.6 于 /docs [#15445](https://github.com/spring-projects/spring-security/pull/15445)
- 将 `@antora/collector-extension` 从 1.0.0-alpha.6 升级到 1.0.0-alpha.7 于 /docs [#15488](https://github.com/spring-projects/spring-security/pull/15488)
- 将 `@antora/collector-extension` 从 1.0.0-alpha.7 升级到 1.0.0-beta.1 于 /docs [#15563](https://github.com/spring-projects/spring-security/pull/15563)
- 将 `@antora/collector-extension` 从 1.0.0-beta.1 升级到 1.0.0-beta.2 于 /docs [#15639](https://github.com/spring-projects/spring-security/pull/15639)
- 将 `@springio/antora-extensions` 从 1.11.1 升级到 1.12.0 于 /docs [#15415](https://github.com/spring-projects/spring-security/pull/15415)
- 将 `@springio/antora-extensions` 从 1.12.0 升级到 1.13.0 于 /docs [#15516](https://github.com/spring-projects/spring-security/pull/15516)
- 将 `@springio/antora-extensions` 从 1.13.0 升级到 1.13.1 于 /docs [#15562](https://github.com/spring-projects/spring-security/pull/15562)
- 将 `@springio/antora-extensions` 从 1.13.1 升级到 1.14.2 于 /docs [#15638](https://github.com/spring-projects/spring-security/pull/15638)
- 将 `@springio/asciidoctor-extensions` 从 1.0.0-alpha.10 升级到 1.0.0-alpha.11 于 /docs [#15414](https://github.com/spring-projects/spring-security/pull/15414)
- 将 `@springio/asciidoctor-extensions` 从 1.0.0-alpha.11 升级到 1.0.0-alpha.12 于 /docs [#15518](https://github.com/spring-projects/spring-security/pull/15518)
- 将 Antora 从 3.2.0-alpha.4 升级到 3.2.0-alpha.5 于 /docs [#15328](https://github.com/spring-projects/spring-security/pull/15328)
- 将 Antora 从 3.2.0-alpha.5 升级到 3.2.0-alpha.6 于 /docs [#15489](https://github.com/spring-projects/spring-security/pull/15489)
- 将 `com.gradle.develocity` 从 3.17.5 升级到 3.17.6 [#15465](https://github.com/spring-projects/spring-security/pull/15465)
- 将 `io-spring-javaformat` 从 0.0.42 升级到 0.0.43 [#15649](https://github.com/spring-projects/spring-security/pull/15649)
- 将 Slack 通知迁移到 GChat [#15504](https://github.com/spring-projects/spring-security/issues/15504)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

- Junhyunny
- Kehrlann
- OLibutzki
- arey
- baezzys
- dependabot [bot]
```