# spring-security 6.5.0-M2
### 为什么要使用spring-security

在当今这个数字化的时代，安全性已成为每个开发者心中挥之不去的阴影。想象一下，你的应用程序被黑客攻击，用户数据被泄露，甚至整个系统瘫痪。这样的情景让人不寒而栗，而这正是为什么我们需要像Spring Security这样的强大工具。Spring Security不仅提供了全面的安全解决方案，还能帮助开发者轻松实现身份验证和授权，确保应用程序的安全性。它的灵活性和可扩展性使得开发者能够根据具体需求定制安全策略，从而在保护用户数据的同时，提升用户体验。

### spring-security是什么

Spring Security是一个功能强大的安全框架，专为Java应用程序设计。它提供了身份验证、授权、攻击防护等多种安全功能，帮助开发者轻松实现安全控制。通过Spring Security，开发者可以保护Web应用程序、RESTful服务以及微服务架构，确保只有经过授权的用户才能访问敏感数据和功能。

### 入门示例

想象一下，你正在开发一个在线购物平台，用户需要注册并登录才能查看个人订单。使用Spring Security，你可以轻松实现这一功能。首先，你需要在项目中引入Spring Security依赖。接着，配置一个简单的用户存储（如内存或数据库），并定义用户角色。然后，使用Spring Security的注解和配置类来保护特定的URL路径，确保只有经过身份验证的用户才能访问订单页面。这样，你不仅能快速实现安全功能，还能专注于其他业务逻辑的开发。

### spring-security 6.5.0-M2版本更新了什么

Spring Security 6.5.0-M2版本引入了一些重要的新特性和修复。新增了`FormPostRedirectStrategy`以支持POST OIDC注销，添加了`HttpStatusAccessDeniedHandler`，并支持OAuth 2.0的证明持有（DPoP）。此外，更新了多个依赖项，并修复了一些bug，提升了整体稳定性和性能。

### 更新日志

## ⭐ 新特性
- 添加了`FormPostRedirectStrategy`以支持POST OIDC注销。
- 添加了`HttpStatusAccessDeniedHandler`。
- 添加了对OAuth 2.0证明持有（DPoP）的支持。
- 添加了生成一次性令牌请求解析器的支持。
- 添加了服务器生成一次性令牌请求解析器的支持。
- 一致性地使用非空注解。
- 一致性地更新Spring Security的Javadocs。
- 显示仅使用一次性令牌登录的默认登录页面。
- 登录页面和调试消息中的通用错误消息。
- 在`AbstractUserDetailsAuthenticationProvider`中懒惰地组合调试消息。
- 使`PublicKeyCredentialRequestOptions`可序列化。
- 一次性令牌身份验证过滤器应为其自己的类。
- 一次性令牌登录注册默认登录页面。
- 优化一次性令牌登录配置器。
- 重构授权管理器变量命名。
- 移除过时的RemoteJWKSet用法。
- 在NimbusJwtEncoder中支持JWK选择策略。
- 更新`DelegatingPasswordEncoder.java`。
- 更新Spring框架的引用链接。
- 更新`settings.gradle`以纠正创建新子项目时的行为。
- 更新`UsernameNotFoundException`消息。

## 🪲 Bug修复
- 修复了`onResponseCommmitted`的Javadoc拼写错误。
- 修复了在`WebAuthnWebDriverTests`中解析节点时加载器已更改的问题。
- 修复了RestClient文档头部。
- 修复了`serializeCurrentVersionClasses`。
- 修复了`DefaultGenerateOneTimeTokenRequestResolver`中的断言。
- 修复了`GenerateOneTimeTokenWebFilter`触发下游`WebFilterChain`的双重执行。
- 为`WebAuthnAuthentication`实现了`Serializable`。
- 修复了在组合OAuth2登录和OAuth2客户端配置时的`OAuth2LoginAuthenticationFilter`配置错误。
- 一次性令牌应使用非静态成员捕获最后一次令牌。
- 一次性令牌测试应使用模拟而不是比较过期时间。

## 🔨 依赖项升级
- 将`com.github.ben-manes:gradle-versions-plugin`从0.51.0升级到0.52.0。
- 将`com.google.code.gson:gson`从2.12.0升级到2.12.1。
- 将`com.nimbusds:oauth2-oidc-sdk`从9.43.5升级到9.43.6。
- 将`com.webauthn4j:webauthn4j-core`从0.28.4.RELEASE升级到0.28.5.RELEASE。
- 将`esbuild`从0.23.0升级到0.25.0。
- 将`io.freefair.gradle:aspectj-plugin`从8.12升级到8.12.1。
- 将`io.micrometer:micrometer-observation`从1.14.3升级到1.14.4。
- 将`io.projectreactor:reactor-bom`从2023.0.14升级到2023.0.15。
- 将`io.rsocket:rsocket-bom`从1.1.4升级到1.1.5。
- 将`org.hibernate.orm:hibernate-core`从6.6.7.Final升级到6.6.8.Final。
- 将`org.htmlunit:htmlunit`从4.8.0升级到4.9.0。
- 将`org.seleniumhq.selenium:htmlunit3-driver`从4.27.0升级到4.28.0。
- 将`org.seleniumhq.selenium:selenium-java`从4.28.0升级到4.28.1。
- 将`org.springframework.data:spring-data-bom`从2024.1.2升级到2024.1.3。
- 将`org.springframework.ldap:spring-ldap-core`从3.2.10升级到3.2.11。
- 将`org.springframework:spring-framework-bom`从6.2.2升级到6.2.3。
- 在/javascript中升级`serialize-javascript`和`mocha`。

## 🔩 构建更新
- 添加了`GenerateOneTimeTokenFilterTests`。
- 添加了`TestBytes`。
- 将`@springio/asciidoctor-extensions`从1.0.0-alpha.14升级到1.0.0-alpha.16。

### 总结

在Spring Security 6.5.0-M2版本中，新增了多项功能和修复，提升了框架的安全性和稳定性。通过这些更新，开发者可以更轻松地实现复杂的安全需求，同时享受更流畅的开发体验。