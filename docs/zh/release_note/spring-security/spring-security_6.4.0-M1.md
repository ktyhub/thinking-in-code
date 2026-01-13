# spring-security 6.4.0-M1

## ⏪ 重大变化

- 适应在表单数据中不添加 charset，如果它是 UTF-8 [#15275](https://github.com/spring-projects/spring-security/issues/15275)

## ⭐ 新功能

- `AclAuthorizationStrategyImpl` 应该使用 `RoleHierarchy` [#4186](https://github.com/spring-projects/spring-security/issues/4186)
- 添加 CachingRelyingPartyRegistrationRepository [#15341](https://github.com/spring-projects/spring-security/issues/15341)
- 添加接口 IterableRelyingPartyRegistrationRepository 或类似的接口 [#15027](https://github.com/spring-projects/spring-security/issues/15027)
- 为 `DefaultMethodSecurityExpressionHandler` 添加 Kotlin 支持 [#15093](https://github.com/spring-projects/spring-security/issues/15093)
- 为 PreFilter 和 PostFilter 注解添加 Kotlin 支持 [#15095](https://github.com/spring-projects/spring-security/pull/15095)
- 为匹配参数添加 RequestMatcher [#15342](https://github.com/spring-projects/spring-security/issues/15342)
- 添加 saml2Logout Kotlin DSL 支持 [#14935](https://github.com/spring-projects/spring-security/issues/14935)
- 添加 SecurityContextRepository 到 Kotlin Reactive DSL [#15013](https://github.com/spring-projects/spring-security/pull/15013)
- 为 CasAuthenticationProvider 添加 userDetailsChecker 的 setter 方法 [#10277](https://github.com/spring-projects/spring-security/issues/10277) [#15047](https://github.com/spring-projects/spring-security/pull/15047)
- 添加对 AnyRequestMatcher 安全过滤链的支持 [#15221](https://github.com/spring-projects/spring-security/pull/15221)
- 添加将 OAuth2AuthorizationRequestResolver 配置为 Bean 的支持 [#15237](https://github.com/spring-projects/spring-security/pull/15237)
- 添加自定义 remember-me cookie 的支持 [#15203](https://github.com/spring-projects/spring-security/pull/15203)
- 添加 PT-BR 语言的缺失翻译 [#15181](https://github.com/spring-projects/spring-security/pull/15181)
- 调整 DefaultSecurityFilterChain 的日志记录级别并简化过滤日志记录 [#15096](https://github.com/spring-projects/spring-security/pull/15096)
- 澄清当 IdP 参与时并发会话管理的行为 [#15206](https://github.com/spring-projects/spring-security/issues/15206)
- 改进单页应用的 CSRF 示例 [#15105](https://github.com/spring-projects/spring-security/issues/15105)
- 在 Kotlin DSL 中弃用 `authorizeRequests` [#15173](https://github.com/spring-projects/spring-security/issues/15173)
- 弃用 OpenSamlRelyingPartyRegistration [#15343](https://github.com/spring-projects/spring-security/issues/15343)
- 安全匹配器和多个过滤链的描述现在更加详细 [#15029](https://github.com/spring-projects/spring-security/pull/15029)
- 记录 `CredentialsContainer` 的角色 [#15322](https://github.com/spring-projects/spring-security/issues/15322)
- 在 `OAuth2UserAuthority` 中公开用户名属性名称 [#15012](https://github.com/spring-projects/spring-security/pull/15012)
- 因无效凭据导致的 LDAP 绑定失败不会触发 AuthenticationFailure 事件 [#3834](https://github.com/spring-projects/spring-security/issues/3834)
- 在 LDAP 文档中提及所有必需的依赖项 [#15246](https://github.com/spring-projects/spring-security/issues/15246)
- OIDC 后台注销应允许具有 `typ` 标头 `logout+jwt` 的注销令牌 [#15003](https://github.com/spring-projects/spring-security/issues/15003)
- 删除 Spring LDAP 的过时用法 [#15274](https://github.com/spring-projects/spring-security/issues/15274)
- 将 SAML 元数据的内容类型设置为 application/samlmetadata+xml [#15147](https://github.com/spring-projects/spring-security/issues/15147)
- 在 Kotlin DSL 中支持 `GrantedAuthorityDefaults` Bean 在 `authorizeHttpRequests` 中的使用 [#15171](https://github.com/spring-projects/spring-security/issues/15171)
- 在 Kotlin DSL 中支持 `RoleHierarchy` Bean 在 `authorizeHttpRequests` 中的使用 [#15136](https://github.com/spring-projects/spring-security/issues/15136)
- 支持签署 SAML 元数据 [#14916](https://github.com/spring-projects/spring-security/pull/14916)
- 更新 Kotlin 示例以使用 MockMvc 和 Spring Security [#15177](https://github.com/spring-projects/spring-security/pull/15177)
- 更新 OAuth2 jwt 和不透明资源服务器文档 [#15362](https://github.com/spring-projects/spring-security/pull/15362)
- 使用 Javadoc 宏 [#15386](https://github.com/spring-projects/spring-security/issues/15386)

## 🪲 错误修复

- 确认 WebSession 不为空 [#15180](https://github.com/spring-projects/spring-security/issues/15180)
- 文档：修复使用 Kotlin DSL 的响应示例中的导入 [#15200](https://github.com/spring-projects/spring-security/pull/15200)
- 修复漏洞密码检查器文档样本无法运行的问题 [#15306](https://github.com/spring-projects/spring-security/issues/15306)
- 修复 multitenanci.adoc 中的 Java 示例 [#15164](https://github.com/spring-projects/spring-security/pull/15164)
- 修复内存身份验证文档中的链接 [#14689](https://github.com/spring-projects/spring-security/pull/14689)
- 修复 "使用方法参数" 文档中格式错误的列表 [#15325](https://github.com/spring-projects/spring-security/pull/15325)
- 修复文档中的拼写和格式错误 [#15353](https://github.com/spring-projects/spring-security/pull/15353)
- 修复 `@PostAuthorize` 注解的错误解释 [#15222](https://github.com/spring-projects/spring-security/pull/15222)
- 解决无效 CSRF 令牌值的不一致问题 [#15187](https://github.com/spring-projects/spring-security/issues/15187)
- 文档中引用的 [#7537](https://github.com/spring-projects/spring-security/issues/7537) 已关闭 [#15263](https://github.com/spring-projects/spring-security/issues/15263)

## 🔨 依赖项升级

- 在 /docs 中将 `@antora`/collector-extension 从 1.0.0-alpha.3 升级到 1.0.0-alpha.4 [#15158](https://github.com/spring-projects/spring-security/pull/15158)
- 在 /docs 中将 antora 从 3.2.0-alpha.4 升级到 3.2.0-alpha.5 [#15332](https://github.com/spring-projects/spring-security/pull/15332)
- 将 com.fasterxml.jackson:jackson-bom 从 2.17.1 升级至 2.17.2 [#15371](https://github.com/spring-projects/spring-security/pull/15371)
- 将 com.github.spullara.mustache.java:compiler 从 0.9.13 升级至 0.9.14 [#15370](https://github.com/spring-projects/spring-security/pull/15370)
- 将 com.gradle.develocity 从 3.17.4 升级至 3.17.5 [#15242](https://github.com/spring-projects/spring-security/pull/15242)
- 将 Gradle Wrapper 从 8.7 升级至 8.8 [#15188](https://github.com/spring-projects/spring-security/pull/15188)
- 将 io-spring-javaformat 从 0.0.41 升级至 0.0.42 [#15214](https://github.com/spring-projects/spring-security/pull/15214)
- 将 io.projectreactor:reactor-bom 从 2023.0.7 升级至 2023.0.8 [#15387](https://github.com/spring-projects/spring-security/pull/15387)
- 将 org-apache-maven-resolver 从 1.9.20 升级至 1.9.21 [#15369](https://github.com/spring-projects/spring-security/pull/15369)
- 将 org-eclipse-jetty 从 11.0.21 升级至 11.0.22 [#15357](https://github.com/spring-projects/spring-security/pull/15357)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.6 升级至 3.9.7 [#15169](https://github.com/spring-projects/spring-security/pull/15169)
- 将 org.apache.maven:maven-resolver-provider 从 3.9.7 升级至 3.9.8 [#15270](https://github.com/spring-projects/spring-security/pull/15270)
- 将 org.hibernate.orm:hibernate-core 从 6.4.8.Final 升级至 6.4.9.Final [#15234](https://github.com/spring-projects/spring-security/pull/15234)
- 将 org.hsqldb:hsqldb 从 2.7.2 升级至 2.7.3 [#15190](https://github.com/spring-projects/spring-security/pull/15190)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.15 升级至 4.33.16 [#15175](https://github.com/spring-projects/spring-security/pull/15175)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.16 升级至 4.33.17 [#15215](https://github.com/spring-projects/spring-security/pull/15215)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.17 升级至 4.33.19 [#15259](https://github.com/spring-projects/spring-security/pull/15259)
- 将 org.jfrog.buildinfo:build-info-extractor-gradle 从 4.33.19 升级至 4.33.20 [#15269](https://github.com/spring-projects/spring-security/pull/15269)
- 将 org.junit:junit-bom 从 5.10.2 升级至 5.10.3 [#15313](https://github.com/spring-projects/spring-security/pull/15313)
- 将 org.skyscreamer:jsonassert 从 1.5.1 升级至 1.5.3 [#15334](https://github.com/spring-projects/spring-security/pull/15334)
- 将 org.springframework.data:spring-data-bom 从 2024.0.0 升级至 2024.0.1 [#15258](https://github.com/spring-projects/spring-security/pull/15258)
- 将 org.springframework.data:spring-data-bom 从 2024.0.1 升级至 2024.0.2 [#15420](https://github.com/spring-projects/spring-security/pull/15420)
- 将 org.springframework.ldap:spring-ldap-core 从 3.2.3 升级至 3.2.4 [#15250](https://github.com/spring-projects/spring-security/pull/15250)
- 将 org.springframework:spring-framework-bom 从 6.1.8 升级至 6.1.9 [#15249](https://github.com/spring-projects/spring-security/pull/15249)
- 将 org.springframework:spring-framework-bom 从 6.2.0-M4 升级至 6.2.0-M5 [#15403](https://github.com/spring-projects/spring-security/pull/15403)
- 升级至 Spring Framework 6.2.0-M4 [#15266](https://github.com/spring-projects/spring-security/issues/15266)

## 🔩 构建更新

- 自动检查预期的分支版本 [#15311](https://github.com/spring-projects/spring-security/issues/15311)
- 将 spring-io/spring-doc-actions 从 5a57bcc6a0da2a1474136cf29571b277850432bc 升级至 852920ba3fb1f28b35a2f13201133bc00ef33677 [#15289](https://github.com/spring-projects/spring-security/pull/15289)
- 配置构建以确认 UnboundId 7 的兼容性 [#15400](https://github.com/spring-projects/spring-security/issues/15400)
- 修复 README 中的 URL [#15350](https://github.com/spring-projects/spring-security/pull/15350)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

- [CrazyParanoid](https://github.com/CrazyParanoid)
- [Doremi203](https://github.com/Doremi203)
- [Junhyunny](https://github.com/Junhyunny)
- [Kyoungwoong](https://github.com/Kyoungwoong)
- [Marcono1234](https://github.com/Marcono1234)
```