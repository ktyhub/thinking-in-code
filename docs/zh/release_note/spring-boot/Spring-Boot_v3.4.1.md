# Spring-Boot v3.4.1
### 为什么要使用Spring-Boot

在现代软件开发中，时间就是金钱。开发者们常常面临着快速交付高质量产品的压力，而Spring-Boot恰恰是为了解决这一矛盾而诞生的。想象一下，你正在开发一个复杂的企业级应用，面对繁琐的配置和无尽的依赖管理，开发进度却因这些琐事而停滞不前。Spring-Boot的出现，犹如一缕春风，简化了配置，自动化了许多繁琐的任务，让开发者能够专注于业务逻辑的实现。它不仅提高了开发效率，还让团队能够更快地响应市场需求，真正实现了“快速开发、快速迭代”的目标。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它通过提供开箱即用的配置和自动化的设置，帮助开发者快速构建独立的、生产级的Spring应用。Spring-Boot的核心理念是“约定优于配置”，这意味着开发者可以通过简单的配置来实现复杂的功能，从而大大减少了开发时间和学习曲线。

### 入门示例

假设你是一名开发者，正在为一家初创公司构建一个在线商店。你希望快速搭建一个RESTful API来处理商品的增删改查。使用Spring-Boot，你只需几行代码即可实现这一目标。首先，创建一个Spring-Boot项目，添加所需的依赖项，如Spring Web和Spring Data JPA。然后，定义一个商品实体类和一个控制器，处理HTTP请求。最后，运行应用程序，你的API就可以在几秒钟内启动并运行，支持基本的CRUD操作。这种快速开发的能力使得你能够在竞争激烈的市场中迅速推出产品。

### Spring-Boot v3.4.1版本更新了什么

Spring-Boot v3.4.1版本带来了多个重要的更新，包括修复了KafkaProperties在空字符串情况下构建SSL属性的错误，改善了属性解析时的诊断信息，确保SpringApplicationShutdownHandlers以确定的顺序运行。此外，更新还解决了多个与Docker和Kafka相关的问题，增强了整体的稳定性和性能。

### 更新日志

## 🐞 Bug 修复
- KafkaProperties在空字符串情况下无法构建SSL属性。
- 当属性解析抛出ConversionFailedException时，诊断信息不佳。
- SpringApplicationShutdownHandlers未按确定顺序运行。
- 找不到@SpringBootConfiguration时，错误信息误导。
- 上下文中多个ResourceHandlerRegistrationCustomizer bean时，仅使用其中一个。
- 混合专用和共享服务时无法使用Docker Compose支持。
- Kafka依赖管理未包含kafka-server模块。
- 当/_ping调用失败时，Docker API版本报告不正确，版本应固定。
- 从KafkaProperties构建生产者/消费者属性的方法在没有SSL包时使用不便。
- -Djarmode=tools中的失败未始终返回非零退出。
- HttpComponentsClientHttpRequestFactoryBuilder替换现有的defaultRequestConfigCustomizer，而不是添加到其中。
- spring-boot-maven-plugin即使为空也设置imagePlatform。
- 使用Scoped Proxies时，OnBeanCondition未能匹配注解。
- 对InvalidConfigurationPropertyValueException的失败分析未正确处理环境变量的模糊匹配。
- H2ConsoleAutoConfiguration导致DataSource beans的早期初始化。
- 接受大于2GB的数字进度。
- 基于Servlet的UserDetailsServiceAutoConfiguration在反应式应用中处于活动状态。
- 在spring.factories中声明的StructuredLoggingJsonMembersCustomizer实现未被调用。
- 使用环境变量覆盖日志级别时，在使用环境前缀时不起作用。
- 管理端点访问和启用属性被忽略，除非端点ID完全匹配。
- 在启用虚拟线程的Java 21上启动Maven阴影应用时出现UnsupportedOperationException。
- 自3.4.0以来，JmsListener与Narayana（池化ConnectionFactory）不兼容。
- SslBundle在不使用'file:'前缀的情况下无法打开存储文件位置。
- TestRestTemplate不允许自定义重定向。
- Testcontainers的start()方法可能被多次启动。

## 📔 文档
- 修复文档中的拼写错误。
- 记录server.ssl.cipher和server.ssl.enabled-protocols不是与SSL包一起使用的回退。
- 在Maven示例中使用<annotationProcessorPaths>配置注解处理器。
- 修复拼写错误。
- 链接到logback javadoc不正确。
- 修复JUnit javadoc链接。
- 参考文档错误地使用'disabled'而不是'none'进行访问限制。
- 在参考文档的Logging部分恢复系统属性。
- 修复@AutoConfiguration javadoc中proxyBeanMethods的链接。
- 修复Servlet和JPA javadoc的链接。
- 链接到@EnableMethodSecurity而不是已弃用的@EnableGlobalMethodSecurity。
- 记录StructuredLoggingJsonMembersCustomizer实现可以选择性地接受构造函数参数。
- 更新StructuredLoggingJsonMembersCustomizer的Javadoc，说明实现可以通过spring.factories注册。
- 修复Hikari的Javadoc链接。
- 记录如何使用自定义日志配置进行结构化日志记录。
- 更新OtlpMetricsProperties和OtlpTracingProperties的Javadoc。

## 🔨 依赖升级
- 升级到Byte Buddy 1.15.11。
- 升级到Couchbase Client 3.7.6。
- 升级到CycloneDX Maven Plugin 2.9.1。
- 升级到Dependency Management Plugin 1.1.7。
- 升级到Elasticsearch Client 8.15.5。
- 升级到Hibernate 6.6.4.Final。
- 升级到Hibernate Validator 8.0.2.Final。
- 升级到Jackson Bom 2.18.2。
- 升级到Jetty 12.0.16。
- 升级到jOOQ 3.19.16。
- 升级到JUnit Jupiter 5.11.4。
- 升级到Log4j2 2.24.3。
- 升级到Micrometer 1.14.2。
- 升级到Micrometer Tracing 1.4.1。
- 升级到Native Build Tools Plugin 0.10.4。
- 升级到Netty 4.1.116.Final。
- 升级到Prometheus Client 1.3.5。
- 升级到Pulsar 3.3.3。
- 升级到Pulsar Reactive 0.5.10。
- 升级到Reactor Bom 2024.0.1。
- 升级到RxJava3 3.1.10。
- 升级到Spring AMQP 3.2.1。
- 升级到Spring Authorization Server 1.4.1。
- 升级到Spring Batch 5.2.1。
- 升级到Spring Data Bom 2024.1.1。
- 升级到Spring Framework 6.2.1。
- 升级到Spring HATEOAS 2.4.1。
- 升级到Spring Integration 6.4.1。
- 升级到Spring Kafka 3.3.1。
- 升级到Spring LDAP 3.2.10。
- 升级到Spring Pulsar 1.2.1。
- 升级到Spring Retry 2.0.11。
- 升级到Spring Security 6.4.2。
- 升级到Spring Session 3.4.1。
- 升级到SQLite JDBC 3.47.1.0。
- 升级到Thymeleaf 3.1.3.RELEASE。

### 总结

在Spring-Boot v3.4.1版本中，开发团队进行了多项重要的Bug修复和文档更新，提升了整体的稳定性和用户体验。同时，多个依赖项也得到了升级，确保了框架的现代化和兼容性。这些更新不仅解决了现有的问题，还为开发者提供了更好的支持，进一步推动了Spring-Boot在开发领域的广泛应用。