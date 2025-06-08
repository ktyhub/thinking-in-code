# spring-security 6.2.5
```markdown
## ⭐ 新功能

- 文档: 增加了将 GrantedAuthorityDefaults 声明为基础设施 Bean 的提示 [#15063](https://github.com/spring-projects/spring-security/issues/15063)
- 增强在 RequestMatcherDelegatingAuthorizationManage 中的日志记录 [#14922](https://github.com/spring-projects/spring-security/issues/14922)
- InMemoryUserDetailsManager: 考虑改进未指定 PasswordEncoding 时的错误信息 [#14974](https://github.com/spring-projects/spring-security/issues/14974)
- 在 LDAP 文档中提及所有必需的依赖项 [#15244](https://github.com/spring-projects/spring-security/issues/15244)

## 🪲 错误修复

- 确认 WebSession 不为空 [#15178](https://github.com/spring-projects/spring-security/issues/15178)
- AbstractRequestMatcherRegistry#requestMatchers 在使用 MockMvc 时应该选择 MvcRequestMatcher [#15210](https://github.com/spring-projects/spring-security/issues/15210)
- DispatcherServletDelegatingRequestMatcher 在运行 MockMvc 测试时会引起错误 [#15196](https://github.com/spring-projects/spring-security/issues/15196)
- 修复 multitenanci.adoc 中的 Java 示例 [#15150](https://github.com/spring-projects/spring-security/issues/15150)
- OIDC 后端登出文档错误 [#15198](https://github.com/spring-projects/spring-security/issues/15198)
- InMemoryUserDetailsManager 官方文档示例中设置用户角色导致错误 [#14972](https://github.com/spring-projects/spring-security/issues/14972)
- 官方文档中的 LDIF 文件导致启动过程失败 [#15166](https://github.com/spring-projects/spring-security/issues/15166)
- 记住我持久令牌策略的文章链接失效 [#15148](https://github.com/spring-projects/spring-security/issues/15148)
- OIDC 登出部分未在导航栏中展示 [#15112](https://github.com/spring-projects/spring-security/issues/15112)
- OpenSaml4AssertionValidator 未按时钟偏移设置 [#15022](https://github.com/spring-projects/spring-security/issues/15022)
- ProxyRestrictionConditionValidator 在 OpenSaml4AuthenticationProvider.SAML20AssertionValidators 类中缺失 [#14958](https://github.com/spring-projects/spring-security/issues/14958)
- 解决无效 CSRF 令牌值得处理不一致的问题 [#15185](https://github.com/spring-projects/spring-security/issues/15185)
- spring-security/docs/modules/ROOT/pages/servlet/authorization/method-security [#15045](https://github.com/spring-projects/spring-security/issues/15045)
- Spring Security 文档中 RequestCacheAwareFilter 信息错误 [#14995](https://github.com/spring-projects/spring-security/issues/14995)

## 🔨 依赖升级

- com.fasterxml.jackson:jackson-bom 从 2.17.0 升级到 2.17.1 [#15011](https://github.com/spring-projects/spring-security/pull/15011)
- io.micrometer:micrometer-observation 从 1.12.5 升级到 1.12.6 [#15069](https://github.com/spring-projects/spring-security/pull/15069)
- io.micrometer:micrometer-observation 从 1.12.6 升级到 1.12.7 [#15224](https://github.com/spring-projects/spring-security/pull/15224)
- io.mockk:mockk 从 1.13.10 升级到 1.13.11 [#15079](https://github.com/spring-projects/spring-security/pull/15079)
- io.projectreactor:reactor-bom 从 2023.0.5 升级到 2023.0.6 [#15075](https://github.com/spring-projects/spring-security/pull/15075)
- io.projectreactor:reactor-bom 从 2023.0.6 升级到 2023.0.7 [#15232](https://github.com/spring-projects/spring-security/pull/15232)
- org-apache-maven-resolver 从 1.9.18 升级到 1.9.19 [#14939](https://github.com/spring-projects/spring-security/pull/14939)
- org-apache-maven-resolver 从 1.9.19 升级到 1.9.20 [#15031](https://github.com/spring-projects/spring-security/pull/15031)
- org-aspectj 从 1.9.22 升级到 1.9.22.1 [#15049](https://github.com/spring-projects/spring-security/pull/15049)
- org-eclipse-jetty 从 11.0.20 升级到 11.0.21 [#15080](https://github.com/spring-projects/spring-security/pull/15080)
- org.apache.maven:maven-resolver-provider 从 3.9.6 升级到 3.9.7 [#15170](https://github.com/spring-projects/spring-security/pull/15170)
- org.hibernate.orm:hibernate-core 从 6.4.4.Final 升级到 6.4.5.Final [#14949](https://github.com/spring-projects/spring-security/pull/14949)
- org.hibernate.orm:hibernate-core 从 6.4.5.Final 升级到 6.4.6.Final [#14953](https://github.com/spring-projects/spring-security/pull/14953)
- org.hibernate.orm:hibernate-core 从 6.4.6.Final 升级到 6.4.7.Final [#14960](https://github.com/spring-projects/spring-security/pull/14960)
- org.hibernate.orm:hibernate-core 从 6.4.7.Final 升级到 6.4.8.Final [#14981](https://github.com/spring-projects/spring-security/pull/14981)
- org.hsqldb:hsqldb 从 2.7.2 升级到 2.7.3 [#15192](https://github.com/spring-projects/spring-security/pull/15192)
- org.jetbrains.kotlin:kotlin-bom 从 1.9.23 升级到 1.9.24 [#15024](https://github.com/spring-projects/spring-security/pull/15024)
- org.jetbrains.kotlin:kotlin-gradle-plugin 从 1.9.23 升级到 1.9.24 [#15023](https://github.com/spring-projects/spring-security/pull/15023)
- org.opensaml:opensaml-core4 从 4.3.1 升级到 4.3.2 [#14947](https://github.com/spring-projects/spring-security/issues/14947)
- org.springframework.data:spring-data-bom 从 2023.1.5 升级到 2023.1.6 [#15101](https://github.com/spring-projects/spring-security/pull/15101)
- org.springframework.data:spring-data-bom 从 2023.1.6 升级到 2023.1.7 [#15262](https://github.com/spring-projects/spring-security/pull/15262)
- org.springframework.ldap:spring-ldap-core 从 3.2.3 升级到 3.2.4 [#15248](https://github.com/spring-projects/spring-security/pull/15248)
- org.springframework:spring-framework-bom 从 6.1.6 升级到 6.1.7 [#15081](https://github.com/spring-projects/spring-security/pull/15081)
- org.springframework:spring-framework-bom 从 6.1.7 升级到 6.1.8 [#15132](https://github.com/spring-projects/spring-security/pull/15132)
- org.springframework:spring-framework-bom 从 6.1.8 升级到 6.1.9 [#15247](https://github.com/spring-projects/spring-security/pull/15247)
- 升级到 OAuth2 OIDC SDK 9.43.4 [#14920](https://github.com/spring-projects/spring-security/issues/14920)
- 将 nimbus-jose-jwt 升级到版本 9.37.3 [#14836](https://github.com/spring-projects/spring-security/issues/14836)

## 🔩 构建更新

- 将 Antora Docs 附加到拉取请求 [#15060](https://github.com/spring-projects/spring-security/issues/15060)
- 在 /docs 中将 `@antora/collector-extension` 从 1.0.0-alpha.3 升级到 1.0.0-alpha.4 [#15163](https://github.com/spring-projects/spring-security/pull/15163)
- 在 /docs 中将 `@springio/antora-extensions` 从 1.10.0 升级到 1.11.1 [#15142](https://github.com/spring-projects/spring-security/pull/15142)
- com.github.spullara.mustache.java:compiler 从 0.9.11 升级到 0.9.13 [#15032](https://github.com/spring-projects/spring-security/pull/15032)
- com.gradle.develocity 从 3.17.2 升级到 3.17.3 [#15050](https://github.com/spring-projects/spring-security/pull/15050)
- com.gradle.develocity 从 3.17.3 升级到 3.17.4 [#15102](https://github.com/spring-projects/spring-security/pull/15102)
- com.gradle.develocity 从 3.17.4 升级到 3.17.5 [#15241](https://github.com/spring-projects/spring-security/pull/15241)
- io-spring-javaformat 从 0.0.41 升级到 0.0.42 [#15216](https://github.com/spring-projects/spring-security/pull/15216)
- io.spring.ge.conventions 从 0.0.16 升级到 0.0.17 [#14961](https://github.com/spring-projects/spring-security/pull/14961)
- io.spring.gradle:spring-security-release-plugin 从 1.0.2 升级到 1.0.3 [#14924](https://github.com/spring-projects/spring-security/pull/14924)
- org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.13 升级到 4.33.15 [#14950](https://github.com/spring-projects/spring-security/pull/14950)
- 考虑在发布变更日志中添加“构建更新”部分 [#15038](https://github.com/spring-projects/spring-security/issues/15038)

## ❤️ 贡献者

感谢所有为此次发布做出贡献的贡献者：

- [dependabot](https://github.com/dependabot)
```
