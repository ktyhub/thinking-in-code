# Spring-Boot v3.3.7
### 为什么要使用Spring-Boot

在当今快速发展的技术环境中，开发者面临着一个矛盾：如何在保持高效的同时，确保代码的可维护性和可扩展性？Spring-Boot正是为了解决这一难题而诞生的。它以简化配置和快速开发为核心理念，让开发者能够专注于业务逻辑，而不是繁琐的框架配置。想象一下，你在一个项目中花费了数周的时间来配置环境，而当你终于准备好时，技术已经发生了变化。Spring-Boot的出现，恰好打破了这种困境，让你可以在几分钟内启动一个项目，快速响应市场需求。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它通过提供一系列默认配置和约定，使得开发者能够快速创建独立的、生产级的Spring应用程序，而无需繁琐的配置。Spring-Boot集成了许多常用的功能，如安全性、数据访问和Web开发，极大地提高了开发效率。

### 入门示例

假设你正在开发一个在线书店的应用程序。使用Spring-Boot，你可以通过简单的命令行指令快速创建一个新的项目，并生成基本的文件结构。接着，你只需添加一些依赖，比如Spring Web和Spring Data JPA，就可以轻松实现书籍的增删改查功能。通过Spring-Boot的自动配置，数据库连接和RESTful API的创建几乎是“开箱即用”的。这样，你可以将更多的时间投入到用户体验和业务逻辑的设计中，而不是基础设施的搭建上。

### Spring-Boot v3.3.7版本更新了什么

Spring-Boot v3.3.7版本进行了多项重要更新，包括修复了KafkaProperties在空字符串时无法构建SSL属性的问题，改进了多个ResourceHandlerRegistrationCustomizer bean的使用，确保Kafka依赖管理包含kafka-server模块。此外，更新还解决了在使用虚拟线程时启动Maven阴影应用程序时的UnsupportedOperationException错误，并增强了Docker Compose支持。

### 更新日志

## 🐞 Bug 修复
- KafkaProperties在空字符串时无法构建SSL属性。
- 在上下文中存在多个ResourceHandlerRegistrationCustomizer bean时，仅使用其中一个。
- Kafka依赖管理未包含kafka-server模块。
- 使用-Djarmode=tools时，失败未始终返回非零退出状态。
- SpringApplicationShutdownHandlers的执行顺序不确定。
- InvalidConfigurationPropertyValueException的失败分析未正确处理环境变量的模糊匹配。
- 当属性解析抛出ConversionFailedException时，诊断信息较差。
- 找不到@SpringBootConfiguration时，返回误导性错误信息。
- H2ConsoleAutoConfiguration导致DataSource bean的提前初始化。
- 接受大于2GB的数字进度。
- 使用环境前缀时，覆盖日志级别不起作用。
- 在没有SSL捆绑的情况下，使用KafkaProperties构建生产者/消费者属性的方法不便。
- 在Java 21启用虚拟线程时，启动Maven阴影应用程序时出现UnsupportedOperationException。
- 在混合专用和共享服务时，无法使用Docker Compose支持。

## 📔 文档
- 修复文档中的拼写错误。
- 修复拼写错误。
- logback javadoc链接不正确。
- 修复JUnit javadoc链接。
- 记录server.ssl.cipher和server.ssl.enabled-protocols不是与SSL捆绑一起使用的回退。
- 在参考文档的Logging部分恢复系统属性。
- 在Maven示例中使用<annotationProcessorPaths>配置注解处理器。
- 修复@AutoConfiguration javadoc中proxyBeanMethods的链接。
- 修复Servlet和JPA javadoc的链接。
- 链接到@EnableMethodSecurity而不是已弃用的@EnableGlobalMethodSecurity。
- 修复Hikari的Javadoc链接。

## 🔨 依赖升级
- 升级到依赖管理插件1.1.7。
- 升级到Hibernate Validator 8.0.2.Final。
- 升级到Jetty 12.0.16。
- 升级到jOOQ 3.19.16。
- 升级到Kafka 3.7.2。
- 升级到Micrometer 1.13.9。
- 升级到Micrometer Tracing 1.3.7。
- 升级到Native Build Tools插件0.10.4。
- 升级到Netty 4.1.116.Final。
- 升级到Reactor Bom 2023.0.13。
- 升级到RxJava3 3.1.10。
- 升级到Spring Authorization Server 1.3.4。
- 升级到Spring Batch 5.1.3。
- 升级到Spring Data Bom 2024.0.7。
- 升级到Spring Framework 6.1.16。
- 升级到Spring HATEOAS 2.3.4。
- 升级到Spring Integration 6.3.7。
- 升级到Spring Kafka 3.2.6。
- 升级到Spring LDAP 3.2.10。
- 升级到Spring Pulsar 1.1.7。
- 升级到Spring Retry 2.0.11。
- 升级到Spring Security 6.3.6。
- 升级到Spring Session 3.3.5。
- 升级到Thymeleaf 3.1.3.RELEASE。
- 升级到Thymeleaf Extras SpringSecurity 3.1.3.RELEASE。
- 升级到Tomcat 10.1.34。
- 升级到Undertow 2.3.18.Final。
- 升级到Zipkin Reporter 3.4.3。

### 总结

在Spring-Boot v3.3.7版本中，开发团队进行了多项重要的Bug修复和文档更新，确保了框架的稳定性和易用性。同时，多个依赖的升级也为开发者提供了更强大的功能支持，进一步提升了开发效率和应用性能。