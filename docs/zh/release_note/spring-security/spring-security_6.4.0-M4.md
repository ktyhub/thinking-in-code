# spring-security 6.4.0-M4
### 为什么要使用spring-security

在当今数字化时代，安全性已成为每个开发者心中挥之不去的阴影。想象一下，你的应用程序被黑客攻击，用户数据泄露，品牌声誉一落千丈。面对这样的威胁，如何保护你的应用程序？Spring Security应运而生，它不仅提供了强大的安全框架，还能灵活地适应各种需求。无论是简单的身份验证，还是复杂的权限管理，Spring Security都能为你提供坚实的后盾，让你在安全的道路上无畏前行。

### spring-security是什么

Spring Security是一个功能强大的安全框架，专为Java应用程序设计。它提供了认证和授权的解决方案，帮助开发者轻松实现安全控制。通过灵活的配置和强大的扩展性，Spring Security能够保护Web应用程序、RESTful服务以及微服务架构，确保用户数据的安全性。

### 入门示例

想象一下，你正在开发一个在线购物平台。用户需要注册、登录并查看自己的订单。使用Spring Security，你可以轻松实现这些功能。首先，配置Spring Security以处理用户的注册和登录请求。接着，利用其内置的身份验证机制，确保只有经过验证的用户才能访问订单页面。通过简单的配置，你就能为用户提供安全的购物体验，保护他们的个人信息不被泄露。

### spring-security 6.4.0-M4版本更新了什么

在6.4.0-M4版本中，Spring Security引入了多个新特性和改进，包括抽象常用代码、添加安全提示注册API、支持一次性令牌登录、改进XML配置中的默认资源过滤器等。此外，多个依赖项也得到了升级，确保框架的稳定性和安全性。

### 更新日志

## ⭐ 新特性
- 抽象了 `UnmodifiableListDeserializer` 和 `UnmodifiableSetDeserializer` 中的公共代码。
- 添加了注册安全提示的API。
- 为 `CookieRequestCache` 添加了cookie自定义器。
- 在XML配置中添加了 `DefaultResourcesFilter`。
- 支持Kotlin DSL中的一次性令牌登录。
- 添加了RestClient实现。
- 添加了一次性令牌登录的支持。
- 缓存注解查找。
- 考虑为 `OAuth2AccessTokenResponseClient` 添加RestClient实现。
- 弃用默认的 `OAuth2AccessTokenResponseClient`，转而使用基于RestClient的实现。
- 文档化如何配置一次性令牌的TTL。
- 启用ReactiveMethodSecurity支持自定义MethodSecurityExpressionHandler。
- 修复在RoleHierarchy Builder中添加更多隐含角色的问题。
- 在SessionInformationExpiredEvent中包含FilterChain，以允许继续请求。
- 使OidcSessionRegistry在Kotlin中可配置。
- 改进Oidc注销功能。
- 在OIDC配置中选择OidcSessionRegistry bean。
- 优化一次性令牌登录。
- 为在Pre/PostAuthorize表达式中使用的Bean提供运行时提示。
- 在使用Jackson序列化授权代理对象时，移除对 `@JsonSerialize` 的需求。
- 移除默认UI中的尾随空格。
- 从专用过滤器提供静态资源（JS、CSS）。
- 当AuthorizationResult可用时抛出AuthorizationDeniedException。
- 在默认UI中使用HTML模板。

## 🪲 Bug修复
- 修正logout.adoc中的标题。
- 禁用自定义AuthenticationManager上的凭据擦除未生效。
- 修复全局身份验证配置中的getBeansWithName。
- 修复在合成方法中未传递变量targetClassToUse的问题。
- 修复Servlet API集成文档中的拼写错误。
- 修复Servlet和Reactive可观察性文档中的拼写错误。
- 在DefaultLoginPageGeneratingFilter中硬编码ott-username输入名称。
- 修复无法加载模块org.springframework.security.cas.jackson2.CasJackson2Module的问题。

## 🔨 依赖升级
- 将ch.qos.logback:logback-classic从1.5.7升级到1.5.8。
- 将com.gradle.develocity从3.17.6升级到3.18。
- 将io.micrometer:micrometer-observation从1.13.3升级到1.13.4。
- 将io.projectreactor:reactor-bom从2023.0.9升级到2023.0.10。
- 将io.spring.develocity.conventions从0.0.20升级到0.0.21。
- 将jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api从3.0.1升级到3.0.2。
- 将org-eclipse-jetty从11.0.23升级到11.0.24。
- 将org.jetbrains.kotlinx:kotlinx-coroutines-bom从1.8.1升级到1.9.0。
- 将org.jfrog.buildinfo:build-info-extractor-gradle从4.33.21升级到4.33.22。
- 将org.mockito:mockito-bom从5.12.0升级到5.13.0。
- 将org.seleniumhq.selenium:selenium-java从4.23.1升级到4.24.0。
- 将org.springframework.data:spring-data-bom从2024.0.3升级到2024.0.4。
- 将org.springframework:spring-framework-bom从6.2.0-M7升级到6.2.0-RC1。

## 🔩 构建更新
- 将@springio/asciidoctor-extensions从1.0.0-alpha.12升级到1.0.0-alpha.13。
- 检查样本是否停留在旧的快照依赖上。
- 更新Spring Boot链接。

### 总结

在6.4.0-M4版本中，Spring Security不仅引入了多项新特性和改进，还修复了多个bug，确保了框架的稳定性和安全性。通过这些更新，开发者可以更轻松地实现安全控制，提升应用程序的安全性。