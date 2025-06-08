# spring-security 6.4.0-M2
```markdown
## ⭐ 新特性

- (Spring Boot 2.7->3.2) 类层次结构中重复的 `@PreAuthorize` 注解错误 [#15097](https://github.com/spring-projects/spring-security/issues/15097)
- 添加 `@FunctionalInterface` 到 AuthenticationManager [#15441](https://github.com/spring-projects/spring-security/pull/15441)
- 添加 `RestClient` 拦截器 [#15437](https://github.com/spring-projects/spring-security/pull/15437)
- 添加 AssertingPartyMetadataRepository [#15349](https://github.com/spring-projects/spring-security/pull/15349)
- 添加 AuthorizationDeniedException(String) 构造函数 [#15607](https://github.com/spring-projects/spring-security/issues/15607)
- 添加方法以扩展 StrictHttpFi 的允许头和参数 [#15048](https://github.com/spring-projects/spring-security/pull/15048)
- HeadersConfigurer#permissionsPolicy 方法与自定义配置器的返回类型不匹配 [#14803](https://github.com/spring-projects/spring-security/issues/14803)
- 当 nameAttributeValue 为空时修复 NPE [#15338](https://github.com/spring-projects/spring-security/issues/15338) [#15407](https://github.com/spring-projects/spring-security/pull/15407)
- 改进 `@AuthenticationPrincipal` 元注解 [#15344](https://github.com/spring-projects/spring-security/pull/15344)
- 改进 `@CurrentSecurityContext` 元注解 [#15553](https://github.com/spring-projects/spring-security/pull/15553)
- 默认登录和注销页面内联 CSS [#15303](https://github.com/spring-projects/spring-security/pull/15303)
- 方法注解应支持 `@AliasFor` [#15436](https://github.com/spring-projects/spring-security/issues/15436)
- 在 InMemoryUserDetailsManager 中保留自定义用户类型 [#15498](https://github.com/spring-projects/spring-security/pull/15498)
- RelyingPartyRegistrations 通常会产生不可用的 registrationId [#15017](https://github.com/spring-projects/spring-security/issues/15017)
- 验证断言方元数据签名 [#12116](https://github.com/spring-projects/spring-security/issues/12116)

## 🪲 错误修复

- `@DeniedHandler` 不应要求 ApplicationContext 来运行 [#15496](https://github.com/spring-projects/spring-security/issues/15496)
- 当接口被继承时，AuthorizationAnnotationUtils.findUniqueAnnotation 失效 [#13490](https://github.com/spring-projects/spring-security/issues/13490)
- EnableMethodSecurity 只应发布一个 AuthorizationAdvisor Bean [#15608](https://github.com/spring-projects/spring-security/issues/15608)

## 🔨 依赖升级

- 将 ch.qos.logback:logback-classic 从 1.5.6 升级到 1.5.7 [#15621](https://github.com/spring-projects/spring-security/pull/15621)
- 将 com.google.code.gson:gson 从 2.10.1 升级到 2.11.0 [#15575](https://github.com/spring-projects/spring-security/pull/15575)
- 将 io.freefair.gradle:aspectj-plugin 从 8.6 升级到 8.7.1 [#15586](https://github.com/spring-projects/spring-security/pull/15586)
- 将 io.micrometer:micrometer-observation 从 1.12.8 升级到 1.13.3 [#15585](https://github.com/spring-projects/spring-security/pull/15585)
- 将 io.mockk:mockk 从 1.13.11 升级到 1.13.12 [#15429](https://github.com/spring-projects/spring-security/pull/15429)
- 将 io.projectreactor:reactor-bom 从 2023.0.8 升级到 2023.0.9 [#15600](https://github.com/spring-projects/spring-security/pull/15600)
- 将 jakarta-websocket 从 2.1.1 升级到 2.2.0 [#15573](https://github.com/spring-projects/spring-security/pull/15573)
- 将 jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api 从 3.0.0 升级到 3.0.1 [#15587](https://github.com/spring-projects/spring-security/pull/15587)
- 将 jakarta.servlet:jakarta.servlet-api 从 6.0.0 升级到 6.1.0 [#15576](https://github.com/spring-projects/spring-security/pull/15576)
- 将 org-apache-maven-resolver 从 1.9.21 升级到 1.9.22 [#15548](https://github.com/spring-projects/spring-security/pull/15548)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.8 升级到 3.9.9 [#15641](https://github.com/spring-projects/spring-security/pull/15641)
- 将 org.assertj:assertj-core 从 3.25.3 升级到 3.26.3 [#15577](https://github.com/spring-projects/spring-security/pull/15577)
- 将 org.gretty:gretty 从 4.1.4 升级到 4.1.5 [#15428](https://github.com/spring-projects/spring-security/pull/15428)
- 将 org.hibernate.orm:hibernate-core 从 6.4.10.Final 升级到 6.6.0.Final [#15603](https://github.com/spring-projects/spring-security/pull/15603)
- 将 org.hibernate.orm:hibernate-core 从 6.4.9.Final 升级到 6.4.10.Final [#15531](https://github.com/spring-projects/spring-security/pull/15531)
- 将 org.htmlunit:htmlunit 从 4.1.0 升级到 4.4.0 [#15612](https://github.com/spring-projects/spring-security/pull/15612)
- 将 org.jetbrains.kotlin:kotlin-bom 从 1.9.24 升级到 1.9.25 [#15453](https://github.com/spring-projects/spring-security/pull/15453)
- 将 org.jetbrains.kotlin:kotlin-gradle-plugin 从 1.9.24 升级到 1.9.25 [#15454](https://github.com/spring-projects/spring-security/pull/15454)
- 将 org.junit:junit-bom 从 5.10.3 升级到 5.11.0 [#15610](https://github.com/spring-projects/spring-security/pull/15610)
- 将 org.mockito:mockito-bom 从 5.11.0 升级到 5.12.0 [#15584](https://github.com/spring-projects/spring-security/pull/15584)
- 将 org.seleniumhq.selenium:htmlunit3-driver 从 4.20.0 升级到 4.23.0 [#15574](https://github.com/spring-projects/spring-security/pull/15574)
- 将 org.seleniumhq.selenium:selenium-java 从 4.20.0 升级到 4.23.1 [#15602](https://github.com/spring-projects/spring-security/pull/15602)
- 将 org.slf4j:slf4j-api 从 2.0.13 升级到 2.0.14 [#15532](https://github.com/spring-projects/spring-security/pull/15532)
- 将 org.slf4j:slf4j-api 从 2.0.13 升级到 2.0.15 [#15547](https://github.com/spring-projects/spring-security/pull/15547)
- 将 org.slf4j:slf4j-api 从 2.0.15 升级到 2.0.16 [#15569](https://github.com/spring-projects/spring-security/pull/15569)
- 将 org.springframework.data:spring-data-bom 从 2024.0.2 升级到 2024.0.3 [#15640](https://github.com/spring-projects/spring-security/pull/15640)
- 将 org.springframework.ldap:spring-ldap-core 从 3.2.4 升级到 3.2.6 [#15622](https://github.com/spring-projects/spring-security/pull/15622)
- 将 org.springframework:spring-framework-bom 从 6.2.0-M5 升级到 6.2.0-M6 [#15443](https://github.com/spring-projects/spring-security/pull/15443)
- 将 org.springframework:spring-framework-bom 从 6.2.0-M6 升级到 6.2.0-M7 [#15611](https://github.com/spring-projects/spring-security/pull/15611)

## 🔩 构建更新

- 将 `@antora`/collector-extension 从 1.0.0-alpha.4 升级到 1.0.0-alpha.6 in /docs [#15448](https://github.com/spring-projects/spring-security/pull/15448)
- 将 `@antora`/collector-extension 从 1.0.0-alpha.6 升级到 1.0.0-alpha.7 in /docs [#15485](https://github.com/spring-projects/spring-security/pull/15485)
- 将 `@antora`/collector-extension 从 1.0.0-alpha.7 升级到 1.0.0-beta.1 in /docs [#15564](https://github.com/spring-projects/spring-security/pull/15564)
- 将 `@antora`/collector-extension 从 1.0.0-beta.1 升级到 1.0.0-beta.2 in /docs [#15634](https://github.com/spring-projects/spring-security/pull/15634)
- 将 `@springio`/antora-extensions 从 1.12.0 升级到 1.13.0 in /docs [#15520](https://github.com/spring-projects/spring-security/pull/15520)
- 将 `@springio`/antora-extensions 从 1.13.0 升级到 1.13.1 in /docs [#15565](https://github.com/spring-projects/spring-security/pull/15565)
- 将 `@springio`/antora-extensions 从 1.13.1 升级到 1.14.2 in /docs [#15635](https://github.com/spring-projects/spring-security/pull/15635)
- 将 `@springio`/asciidoctor-extensions 从 1.0.0-alpha.11 升级到 1.0.0-alpha.12 in /docs [#15519](https://github.com/spring-projects/spring-security/pull/15519)
- 将 antora 从 3.2.0-alpha.5 升级到 3.2.0-alpha.6 in /docs [#15483](https://github.com/spring-projects/spring-security/pull/15483)
- 将 com.gradle.develocity 从 3.17.5 升级到 3.17.6 [#15462](https://github.com/spring-projects/spring-security/pull/15462)
- 将 io-spring-javaformat 从 0.0.42 升级到 0.0.43 [#15646](https://github.com/spring-projects/spring-security/pull/15646)
- 修复文档中的代码格式 [#15572](https://github.com/spring-projects/spring-security/pull/15572)
- 将 Slack 通知迁移到 GChat [#15506](https://github.com/spring-projects/spring-security/issues/15506)
- 删除 JavaDoc 中多余的“the” [#15469](https://github.com/spring-projects/spring-security/pull/15469)
- 更新 spring-test 以在测试中模拟 TestContext [#15579](https://github.com/spring-projects/spring-security/issues/15579)

## ❤️ 贡献者

感谢所有为此版本做出贡献的开发者：
HyoJongPark, Kehrlann, MrJovanovic13, baezzys, benelog, crusherd, dependabot[bot], jzheaux, kse-music, pongdangx2, sjohnr
```