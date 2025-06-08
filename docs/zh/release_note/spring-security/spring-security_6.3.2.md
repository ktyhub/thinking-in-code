# spring-security 6.3.2
```markdown
## ⭐ 新功能

- ActiveDirectoryLdapAuthenticationProvider 不支持多个 URL
  [#15495](https://github.com/spring-projects/spring-security/issues/15495)
- 记录 `CredentialsContainer` 的角色
  [#15321](https://github.com/spring-projects/spring-security/issues/15321)
- OIDC 后台注销允许带有 `logout+jwt` 类型头的注销令牌
  [#15410](https://github.com/spring-projects/spring-security/issues/15410)

## 🪲 Bug 修复

- Spring Security 参考中的链接损坏
  [#15297](https://github.com/spring-projects/spring-security/issues/15297)
- ServletBearerExchangeFilterFunction 的文档不完整或不正确
  [#15460](https://github.com/spring-projects/spring-security/issues/15460)
- EnableMethodSecurity 应该只发布一个 `AuthorizationAdvisor` Bean
  [#15592](https://github.com/spring-projects/spring-security/issues/15592)
- 修复 Compromised Password Checker 文档示例不可用的问题
  [#15305](https://github.com/spring-projects/spring-security/issues/15305)
- 修复问题 [#15172](https://github.com/spring-projects/spring-security/issues/15172) 引入了显著的性能退化
  [#15324](https://github.com/spring-projects/spring-security/issues/15324)
- Pre/PostAuthorize 不应忽略 HandleAuthorizationDenied#handlerClass 当未提供 ApplicationContext 时
  [#15535](https://github.com/spring-projects/spring-security/issues/15535)
- 将文档中的先决条件更新为 Java 17
  [#15340](https://github.com/spring-projects/spring-security/issues/15340)
- 在 Kotlin 示例中使用正确的元注释
  [#15472](https://github.com/spring-projects/spring-security/pull/15472)
- 使用 sec:authorize 在 JSPX 中导致 'java.lang.NullPointerException: Cannot invoke "jakarta.servlet.ServletRegistration.getClassName()" because "registration" is null'
  [#15440](https://github.com/spring-projects/spring-security/issues/15440)

## 🔨 依赖升级

- 将 ch.qos.logback:logback-classic 从 1.5.6 升级到 1.5.7
  [#15619](https://github.com/spring-projects/spring-security/pull/15619)
- 将 com.fasterxml.jackson:jackson-bom 从 2.17.1 升级到 2.17.2
  [#15374](https://github.com/spring-projects/spring-security/pull/15374)
- 将 com.github.spullara.mustache.java:compiler 从 0.9.13 升级到 0.9.14
  [#15373](https://github.com/spring-projects/spring-security/pull/15373)
- 将 io.micrometer:micrometer-observation 从 1.12.7 升级到 1.12.8
  [#15383](https://github.com/spring-projects/spring-security/pull/15383)
- 将 io.micrometer:micrometer-observation 从 1.12.8 升级到 1.12.9
  [#15581](https://github.com/spring-projects/spring-security/pull/15581)
- 将 io.mockk:mockk 从 1.13.11 升级到 1.13.12
  [#15430](https://github.com/spring-projects/spring-security/pull/15430)
- 将 io.projectreactor:reactor-bom 从 2023.0.7 升级到 2023.0.8
  [#15388](https://github.com/spring-projects/spring-security/pull/15388)
- 将 io.projectreactor:reactor-bom 从 2023.0.8 升级到 2023.0.9
  [#15597](https://github.com/spring-projects/spring-security/pull/15597)
- 将 jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api 从 3.0.0 升级到 3.0.1
  [#15582](https://github.com/spring-projects/spring-security/pull/15582)
- 将 org-apache-maven-resolver 从 1.9.20 升级到 1.9.21
  [#15372](https://github.com/spring-projects/spring-security/pull/15372)
- 将 org-apache-maven-resolver 从 1.9.21 升级到 1.9.22
  [#15545](https://github.com/spring-projects/spring-security/pull/15545)
- 将 org-eclipse-jetty 从 11.0.21 升级到 11.0.22
  [#15356](https://github.com/spring-projects/spring-security/pull/15356)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.7 升级到 3.9.8
  [#15268](https://github.com/spring-projects/spring-security/pull/15268)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.8 升级到 3.9.9
  [#15642](https://github.com/spring-projects/spring-security/pull/15642)
- 将 org.gretty:gretty 从 4.1.4 升级到 4.1.5
  [#15431](https://github.com/spring-projects/spring-security/pull/15431)
- 将 org.hibernate.orm:hibernate-core 从 6.4.9.Final 升级到 6.4.10.Final
  [#15530](https://github.com/spring-projects/spring-security/pull/15530)
- 将 org.jetbrains.kotlin:kotlin-bom 从 1.9.24 升级到 1.9.25
  [#15456](https://github.com/spring-projects/spring-security/pull/15456)
- 将 org.jetbrains.kotlin:kotlin-gradle-plugin 从 1.9.24 升级到 1.9.25
  [#15455](https://github.com/spring-projects/spring-security/pull/15455)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.19 升级到 4.33.20
  [#15267](https://github.com/spring-projects/spring-security/pull/15267)
- 将 org.junit:junit-bom 从 5.10.2 升级到 5.10.3
  [#15315](https://github.com/spring-projects/spring-security/pull/15315)
- 将 org.skyscreamer:jsonassert 从 1.5.1 升级到 1.5.3
  [#15336](https://github.com/spring-projects/spring-security/pull/15336)
- 将 org.slf4j:slf4j-api 从 2.0.13 升级到 2.0.14
  [#15529](https://github.com/spring-projects/spring-security/pull/15529)
- 将 org.slf4j:slf4j-api 从 2.0.14 升级到 2.0.15
  [#15546](https://github.com/spring-projects/spring-security/pull/15546)
- 将 org.slf4j:slf4j-api 从 2.0.15 升级到 2.0.16
  [#15571](https://github.com/spring-projects/spring-security/pull/15571)
- 将 org.springframework.data:spring-data-bom 从 2024.0.1 升级到 2024.0.2
  [#15421](https://github.com/spring-projects/spring-security/pull/15421)
- 将 org.springframework.data:spring-data-bom 从 2024.0.2 升级到 2024.0.3
  [#15643](https://github.com/spring-projects/spring-security/pull/15643)
- 将 org.springframework.ldap:spring-ldap-core 从 3.2.4 升级到 3.2.6
  [#15620](https://github.com/spring-projects/spring-security/pull/15620)
- 将 org.springframework:spring-framework-bom 从 6.1.10 升级到 6.1.11
  [#15402](https://github.com/spring-projects/spring-security/pull/15402)
- 将 org.springframework:spring-framework-bom 从 6.1.11 升级到 6.1.12
  [#15613](https://github.com/spring-projects/spring-security/pull/15613)
- 将 org.springframework:spring-framework-bom 从 6.1.9 升级到 6.1.10
  [#15279](https://github.com/spring-projects/spring-security/pull/15279)

## 🔩 构建更新

- 自动检查预期分支版本
  [#15310](https://github.com/spring-projects/spring-security/issues/15310)
- 将 `@antora`/collector-extension 从 1.0.0-alpha.4 升级到 1.0.0-alpha.6
  [#15449](https://github.com/spring-projects/spring-security/pull/15449)
- 将 `@antora`/collector-extension 从 1.0.0-alpha.6 升级到 1.0.0-alpha.7
  [#15482](https://github.com/spring-projects/spring-security/pull/15482)
- 将 `@antora`/collector-extension 从 1.0.0-alpha.7 升级到 1.0.0-beta.1
  [#15560](https://github.com/spring-projects/spring-security/pull/15560)
- 将 `@antora`/collector-extension 从 1.0.0-beta.1 升级到 1.0.0-beta.2
  [#15637](https://github.com/spring-projects/spring-security/pull/15637)
- 将 `@springio`/antora-extensions 从 1.11.1 升级到 1.12.0
  [#15418](https://github.com/spring-projects/spring-security/pull/15418)
- 将 `@springio`/antora-extensions 从 1.12.0 升级到 1.13.0
  [#15517](https://github.com/spring-projects/spring-security/pull/15517)
- 将 `@springio`/antora-extensions 从 1.13.0 升级到 1.13.1
  [#15561](https://github.com/spring-projects/spring-security/pull/15561)
- 将 `@springio`/antora-extensions 从 1.13.1 升级到 1.14.2
  [#15636](https://github.com/spring-projects/spring-security/pull/15636)
- 将 `@springio`/asciidoctor-extensions 从 1.0.0-alpha.10 升级到 1.0.0-alpha.11
  [#15419](https://github.com/spring-projects/spring-security/pull/15419)
- 将 `@springio`/asciidoctor-extensions 从 1.0.0-alpha.11 升级到 1.0.0-alpha.12
  [#15515](https://github.com/spring-projects/spring-security/pull/15515)
- 将 antora 从 3.2.0-alpha.4 升级到 3.2.0-alpha.5
  [#15329](https://github.com/spring-projects/spring-security/pull/15329)
- 将 antora 从 3.2.0-alpha.5 升级到 3.2.0-alpha.6
  [#15480](https://github.com/spring-projects/spring-security/pull/15480)
- 将 com.gradle.develocity 从 3.17.5 升级到 3.17.6
  [#15464](https://github.com/spring-projects/spring-security/pull/15464)
- 将 io-spring-javaformat 从 0.0.42 升级到 0.0.43
  [#15650](https://github.com/spring-projects/spring-security/pull/15650)
- 修复文档中的拼写错误和格式问题
  [#15380](https://github.com/spring-projects/spring-security/issues/15380)
- 将 Slack 通知迁移到 GChat
  [#15505](https://github.com/spring-projects/spring-security/issues/15505)
- 使用显式类型代替 var
  [#15537](https://github.com/spring-projects/spring-security/pull/15537)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

Kehrlann, dependabot[bot], and tahakorkem
```
