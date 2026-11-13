# Spring-Boot v3.5.0-M2
### 为什么要使用Spring-Boot

在当今快速发展的技术世界中，开发者面临着一个矛盾：如何在保持高效的同时，确保代码的可维护性和可扩展性？Spring-Boot正是为了解决这个问题而诞生的。它以简化的配置和自动化的特性，帮助开发者快速构建和部署应用程序，消除了繁琐的设置过程。想象一下，你在一个项目中投入了大量时间，但最终却因为复杂的配置而感到沮丧。Spring-Boot的出现，犹如一缕阳光，照亮了开发者的道路，让他们能够专注于业务逻辑，而不是无尽的配置文件。

### Spring-Boot是什么

Spring-Boot是一个开源框架，旨在简化Spring应用程序的开发过程。它通过提供一系列的默认配置和自动化功能，使得开发者能够快速创建独立的、生产级的Spring应用程序，而无需进行繁琐的配置。Spring-Boot的核心理念是“约定优于配置”，这意味着它会为你做出许多合理的默认选择，从而减少开发时间和复杂性。

### 入门示例

假设你正在开发一个在线书店的应用程序。使用Spring-Boot，你可以通过简单的命令行指令快速启动一个新的项目。只需输入`spring init --dependencies=web my-bookstore`，你就能创建一个包含Web依赖的基础项目。接下来，你可以轻松地添加控制器、服务和数据访问层，快速实现书籍的增删改查功能。Spring-Boot的内置Tomcat服务器使得你可以在本地运行应用程序，实时查看效果，极大地提高了开发效率。

### Spring-Boot v3.5.0-M2版本更新了什么

Spring-Boot v3.5.0-M2版本带来了多项重要更新，包括移除过时的micrometer.observations.annotations.enabled配置，自动配置CqlTemplate和ReactiveCqlTemplate，新增ObjectDirectoryMapper bean的自动配置，以及对Spring Kafka的authExceptionRetryInterval属性的支持。此外，Mappings Endpoint现在支持web-servlet路由功能，提升了开发灵活性。

### 更新日志

## ⭐ 新特性
- 移除过时的micrometer.observations.annotations.enabled配置
- 自动配置CqlTemplate和ReactiveCqlTemplate
- 自动配置ObjectDirectoryMapper bean，并配置LdapTemplate使用它
- 在JavaVersion枚举中添加TWENTY_FOUR
- 添加配置属性以设置Spring Kafka的authExceptionRetryInterval
- 重命名management.server.accesslog.prefix，以明确其不影响Netty
- Mappings Endpoint支持web-servlet路由功能
- 添加配置属性以设置Spring MVC的默认内容类型
- ConversionServiceDeducer应检测更多bean类型并支持lambda
- 添加'spring.r2dbc.pool.acquire-retry'属性
- 忽略不可绑定的DataSource属性
- 弃用SignalFX支持
- 对于布尔属性，使用isXxx()代替getXxx()
- 当使用自定义Logback文件时，注册Logback OnErrorConsoleStatusListener
- 更新PrometheusPushGatewayManager以使用新的Prometheus客户端
- 允许在使用结构化日志时处理堆栈跟踪
- 自动配置VirtualThreadMetrics
- 在本地镜像中移除java.home系统属性的使用
- 添加对多个StructuredLoggingJsonMembersCustomizers的支持
- 通过Actuator端点按需触发Quartz作业
- 更容易在SslManagerBundle中提供自定义TrustManagers
- 支持通过spring.config.import加载嵌入在环境变量中的配置文件（YAML和属性）
- 考虑如何从ConnectionDetails提供SSL
- 在HTTP响应头中写入TraceId
- 更容易添加SanitizingFunction以掩盖特定名称的属性
- 提供配置属性以配置外部jOOQ设置文件
- 添加按HTTP方法匹配Endpoint请求的能力
- 为通用@Bean返回类型提供ConditionalOnBean支持
- 通过解析bean方法签名泛型支持基于lambda的转换器
- 使@ConditionalOnProperty和@ConditionalOnBooleanProperty可重复
- 提供机制以在元数据中隐藏属性

## 🐞 Bug修复
- 使用Log4j2时，控制台输出可能会丢失
- Maven插件在Windows上不一致地使用ArgFile作为类路径参数
- 非默认DataSource候选者未在H2ConsoleAutoConfiguration中考虑
- 当配置使用Jetty不支持的服务器名称包时，Reactive Jetty web服务器未能快速失败
- 当web服务器应用程序上下文刷新失败时，原始失败信息会丢失
- 如果spring-webmvc不存在，Thymeleaf的视图解析器应退回
- 当ReactiveWebServerApplicationContext刷新失败时，WebServer未被销毁
- 开发期间，Banner占位符和默认值无法正常工作
- 指标和健康检查不包括非默认候选bean
- Reactive Jetty、Tomcat和Undertow管理服务器未将管理前缀应用于其访问日志
- Mustache模板在Content-Type响应头中返回ISO-8859-1字符集而非UTF-8
- 使用默认管理安全性与WebFlux和健康探测器启用时出现ClassCastException
- Servlet EndpointRequest未正确匹配web服务器命名空间
- 依赖于内部类的Logback配置在本地镜像中无法工作
- 在3.3.8或3.4.2之后，注册SSL包时出现IllegalStateException

## 📔 文档
- 文档说明自动配置类应使用其二进制名称进行标识
- 更正MVC安全性中的拼写错误，解释UserDetailsService自动配置何时会退回
- 链接JarLauncher的javadoc
- 使用可观察性注解时，建议小心避免双重仪器化
- 修正“运行应用程序”中的拼写错误
- 文档说明在使用没有shell的Docker镜像时的Kubernetes preStop处理程序
- 在“开发第一个Spring Boot应用程序”部分中，源代码片段使用根包
- 更正“开发第一个Spring Boot应用程序”中的MyApplication.java位置
- 添加指向Jackson Javadoc的链接
- 警告某些Quartz数据库模式脚本在使用前必须修改

## 🔨 依赖升级
- 升级到Brave 6.1.0
- 升级到Byte Buddy 1.17.1
- 升级到Cassandra Driver 4.19.0
- 升级到Commons Codec 1.18.0
- 升级到Commons Pool2 2.12.1
- 升级到Couchbase Client 3.7.8
- 升级到DB2 JDBC 12.1.0.0
- 升级到Elasticsearch Client 8.17.2
- 升级到Flyway 11.3.3
- 升级到Groovy 4.0.25
- 升级到Gson 2.12.1
- 升级到Hamcrest 3.0
- 升级到Hibernate 6.6.8.Final
- 升级到HttpClient5 5.4.2
- 升级到HttpCore5 5.3.3
- 升级到Infinispan 15.1.5.Final
- 升级到Json-smart 2.5.2
- 升级到Lettuce 6.5.4.RELEASE
- 升级到Liquibase 4.31.1

### 总结

在Spring-Boot v3.5.0-M2版本中，开发者将受益于一系列新特性和修复，包括自动配置的增强、对新属性的支持以及多个依赖项的升级。这些更新不仅提高了框架的灵活性和可用性，还解决了多个bug，确保开发者能够在更稳定的环境中进行开发。