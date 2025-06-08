# spring-security 6.3.1
```markdown
## ⭐ 新功能

- 当涉及 IdP 时，明确并发会话管理的行为 [#15071](https://github.com/spring-projects/spring-security/issues/15071)
- 在 LDAP 文档中提及所有必需的依赖项 [#15245](https://github.com/spring-projects/spring-security/issues/15245)
- 小幅文档修正 [#15144](https://github.com/spring-projects/spring-security/issues/15144)

## 🪲 Bug 修复

- AbstractRequestMatcherRegistry#requestMatchers 在使用 MockMvc 时应选择 MvcRequestMatcher [#15211](https://github.com/spring-projects/spring-security/issues/15211)
- 确保 WebSession 不为空 [#15179](https://github.com/spring-projects/spring-security/issues/15179)
- DispatcherServletDelegatingRequestMatcher 在使用 MockMvc 进行测试时会导致错误 [#15197](https://github.com/spring-projects/spring-security/issues/15197)
- 需要在关闭 [#12783](https://github.com/spring-projects/spring-security/issues/12783) 后澄清文档 [#15208](https://github.com/spring-projects/spring-security/issues/15208)
- 修复 multitenanci.adoc 中的 Java 示例 [#15151](https://github.com/spring-projects/spring-security/issues/15151)
- 修复 authorize-http-requests.adoc 中的 Kotlin 示例 [#15129](https://github.com/spring-projects/spring-security/pull/15129)
- OIDC 后台注销的文档不正确 [#15212](https://github.com/spring-projects/spring-security/issues/15212)
- IpAddressMatcher.matches(String address) 仍然接受 URL [#15172](https://github.com/spring-projects/spring-security/issues/15172)
- 官方文档中的 LDIF 文件会导致启动过程中断 [#15167](https://github.com/spring-projects/spring-security/issues/15167)
- 指向带有 remember-me-persistent-token 策略的文章链接已损坏 [#15149](https://github.com/spring-projects/spring-security/issues/15149)
- OpenSaml4AssertionValidator 未遵守时钟偏差设置 [#15183](https://github.com/spring-projects/spring-security/issues/15183)
- 解决无效 CSRF 令牌值不一致 [#15186](https://github.com/spring-projects/spring-security/issues/15186)
- spring-security/docs/modules/ROOT/pages/servlet/authorization/method-security [#15143](https://github.com/spring-projects/spring-security/issues/15143)
- SpringOpaqueTokenIntrospector 未正确添加范围作为授予的权限 [#15165](https://github.com/spring-projects/spring-security/issues/15165)

## 🔨 依赖升级

- 将 io.micrometer:micrometer-observation 从 1.12.6 升级到 1.12.7 [#15225](https://github.com/spring-projects/spring-security/pull/15225)
- 将 io.projectreactor:reactor-bom 从 2023.0.6 升级到 2023.0.7 [#15229](https://github.com/spring-projects/spring-security/pull/15229)
- 将 org.apache.directory.shared:shared-ldap 从 0.9.15 升级到 0.9.19 [#15161](https://github.com/spring-projects/spring-security/pull/15161)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.6 升级到 3.9.7 [#15168](https://github.com/spring-projects/spring-security/pull/15168)
- 将 org.gretty:gretty 从 4.1.3 升级到 4.1.4 [#15133](https://github.com/spring-projects/spring-security/pull/15133)
- 将 org.hibernate.orm:hibernate-core 从 6.4.8.Final 升级到 6.4.9.Final [#15228](https://github.com/spring-projects/spring-security/pull/15228)
- 将 org.hsqldb:hsqldb 从 2.7.2 升级到 2.7.3 [#15193](https://github.com/spring-projects/spring-security/pull/15193)
- 将 org.springframework.data:spring-data-bom 从 2024.0.0 升级到 2024.0.1 [#15260](https://github.com/spring-projects/spring-security/pull/15260)
- 将 org.springframework.ldap:spring-ldap-core 从 3.2.3 升级到 3.2.4 [#15251](https://github.com/spring-projects/spring-security/pull/15251)
- 将 org.springframework:spring-framework-bom 从 6.1.7 升级到 6.1.8 [#15134](https://github.com/spring-projects/spring-security/pull/15134)
- 将 org.springframework:spring-framework-bom 从 6.1.8 升级到 6.1.9 [#15252](https://github.com/spring-projects/spring-security/pull/15252)

## 🔩 构建更新

- 将 `@antora`/collector-extension 从 1.0.0-alpha.3 升级到 1.0.0-alpha.4 在 /docs [#15159](https://github.com/spring-projects/spring-security/pull/15159)
- 将 `@springio`/antora-extensions 从 1.10.0 升级到 1.11.1 在 /docs [#15141](https://github.com/spring-projects/spring-security/pull/15141)
- 将 com.gradle.develocity 从 3.17.4 升级到 3.17.5 [#15239](https://github.com/spring-projects/spring-security/pull/15239)
- 将 gradle/gradle-build-action 从 2 升级到 3 [#15157](https://github.com/spring-projects/spring-security/pull/15157)
- 将 io-spring-javaformat 从 0.0.41 升级到 0.0.42 [#15219](https://github.com/spring-projects/spring-security/pull/15219)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.15 升级到 4.33.16 [#15176](https://github.com/spring-projects/spring-security/pull/15176)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.16 升级到 4.33.17 [#15218](https://github.com/spring-projects/spring-security/pull/15218)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.17 升级到 4.33.19 [#15261](https://github.com/spring-projects/spring-security/pull/15261)
- 将 spring-io/spring-doc-actions 从 17ed79ea5fbd65813c69ef1062a024d4a37ff0ca 升级到 5a57bcc6a0da2a1474136cf29571b277850432bc [#15139](https://github.com/spring-projects/spring-security/pull/15139)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

[dependabot](https://github.com/dependabot) 和 [theHacker](https://github.com/theHacker)
```