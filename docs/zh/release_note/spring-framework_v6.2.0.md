# spring-framework v6.2.0
### 为什么要使用spring-framework

在现代软件开发中，选择一个合适的框架就像在茫茫大海中找到一座灯塔。Spring Framework正是那座灯塔，它不仅为开发者提供了强大的功能，还能帮助他们在复杂的项目中保持清晰的思路。然而，许多开发者在选择框架时常常面临一个矛盾：是选择一个简单易用的框架，还是选择一个功能强大的框架？Spring Framework恰好解决了这个矛盾，它将易用性与强大功能完美结合，成为开发者的首选。

### spring-framework是什么

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理和MVC架构等，使得开发者能够更高效地构建和维护复杂的应用程序。

### 入门示例

想象一下，你正在开发一个在线购物平台。在这个平台上，用户可以浏览商品、添加到购物车并进行结算。使用Spring Framework，你可以轻松实现这些功能。首先，你可以利用Spring的依赖注入功能，将商品服务和购物车服务注入到控制器中。然后，使用Spring MVC，你可以快速构建RESTful API，处理用户请求并返回相应的数据。通过Spring的事务管理，你可以确保在结算过程中，所有操作要么全部成功，要么全部失败，从而保证数据的一致性。

### spring-framework v6.2.0版本更新了什么

Spring Framework v6.2.0版本带来了多项重要更新，包括对UndertowHttpHandlerAdapter的改进、对@Contract Javadoc的细化、AOT处理的增强、对单例bean解析的优化以及对@TestBean的运行时提示注册等。这些更新不仅提升了框架的性能和可用性，还增强了开发者的使用体验。

### 更新日志

## ⭐ 新特性
- 更新UndertowHttpHandlerAdapter以分发相关请求
- 精细化@Contract Javadoc，提及this和new返回值
- AOT处理中的bean验证不再考虑级联和容器元素约束
- 避免通过@Lazy代理重复解析单例bean
- 注册@TestBean的全限定方法名的运行时提示
- 在@DisabledInAotMode中引入自定义原因支持
- 在ResponseBodyEmitter中尽可能使用乐观锁
- 修订WebClient和WebTestClient中与Apache HTTP组件的cookie支持
- 从@Contract中移除pure属性
- 引入@CheckReturnValue注解
- ResourceHttpRequestHandler在资源不以斜杠结尾时抛出IllegalArgumentException的问题修复
- 在ThreadPoolTaskExecutor/ThreadPoolTaskScheduler中提供一流的虚拟线程选项
- HttpServiceProxyFactory在从null转换为空字符串时应省略可选@RequestParam
- Reactor Netty响应不应缓冲完整响应
- 放宽MockMVC DSL构造函数的可见性
- 支持Publisher到InputStream的转换

## 🐞 Bug修复
- MockReset应在没有@Mockito[Spy]Bean字段时被尊重
- 测试Bean覆盖不遵循@Primary语义
- Bean覆盖无法可靠地覆盖由FactoryBean创建的泛型bean
- 某些FactoryBean用例的Bean覆盖不再有效
- @MockitoBean、@MockitoSpyBean和@TestBean在@DirtiesContext的“方法前”模式下无法正常工作
- 在ReactorClientHttpRequestFactory中弃用exchangeTimeout并重构readTimeout

## 📔 文档
- 修订SpEL PropertyAccessor和IndexAccessor API的文档
- 文档化UrlHandler Servlet和反应式过滤器
- 改进SpelCompilerMode的文档

## 🔨 依赖升级
- 升级到ASM 9.7.1（以支持早期Java 24）
- 升级到Micrometer 1.14.0
- 升级到Reactor 2024.0.0

### 总结

Spring Framework v6.2.0版本的更新记录展示了开发团队在新特性、bug修复、文档改进和依赖升级方面的持续努力。这些更新不仅提升了框架的性能和可用性，还为开发者提供了更好的使用体验，进一步巩固了Spring Framework在Java开发中的重要地位。