# Spring-Boot v3.4.0-RC1
### 为什么要使用Spring-Boot

在现代软件开发中，时间就是金钱。开发者们常常面临着快速交付和高质量代码之间的矛盾。Spring-Boot的出现，正是为了打破这一僵局。它通过简化配置和自动化设置，让开发者能够专注于业务逻辑，而不是繁琐的环境配置。想象一下，你正在开发一个新项目，面对复杂的依赖关系和配置文件，焦虑感油然而生。而Spring-Boot则像一位得力助手，帮助你迅速搭建起应用框架，省去无数的时间和精力。

### Spring-Boot是什么

Spring-Boot是一个开源框架，旨在简化Spring应用程序的开发过程。它通过提供开箱即用的配置和自动化设置，使得开发者能够快速构建独立的、生产级的Spring应用。Spring-Boot的核心理念是“约定优于配置”，这意味着它会根据项目的需求自动配置所需的组件，从而减少手动配置的复杂性。

### 入门示例

假设你正在开发一个在线书店的应用。使用Spring-Boot，你可以通过简单的命令行指令快速创建项目结构。只需运行以下命令：

```bash
spring init --dependencies=web,data-jpa,h2 book-store
```

这条命令将创建一个包含Web、JPA和H2数据库支持的项目。接下来，你只需编写控制器和服务类，便可以快速实现书籍的增删改查功能。Spring-Boot的自动配置将为你处理数据库连接、REST API的创建等繁琐的细节，让你专注于实现业务逻辑。

### Spring-Boot v3.4.0-RC1版本更新了什么

Spring-Boot v3.4.0-RC1版本带来了多项重要更新，包括增强的Web服务支持、RestTemplateBuilder的requestFactorySettings方法、统一HTTP客户端重定向行为的配置选项等。此外，新增了对ClickHouse的支持，并移除了在3.4.0版本中已弃用的功能。这些更新旨在提升开发者的使用体验和应用性能。

### 更新日志

## ⭐ 新特性
- 更新Web服务支持，利用ClientHttpRequestFactoryBuilder。
- 为RestTemplateBuilder添加requestFactorySettings方法。
- 重命名RestTemplateBuilder的'set'方法。
- 统一默认HTTP客户端重定向行为，并提供配置选项。
- 为ClickHouse添加Testcontainers和Docker Compose支持。
- 支持ApplicationResourceLoader的ResourceLoader委托。
- 在DatabaseDriver枚举中添加ClickHouse JDBC驱动支持。
- 添加控制OTLP日志导出的属性。
- 移除在3.4.0中已弃用的剩余功能。
- 为索引反应式会话存储库的自动配置提供支持。
- 检测JsonMixin注解的意外错误配置。
- 在ClientHttpRequestFactories中支持Reactor Netty。
- 添加指定Docker Compose标志的属性。
- 将OtlpAutoConfiguration重命名为OtlpTracingAutoConfiguration。
- 为OTLP日志记录和跟踪添加连接超时属性。
- 添加management.otlp.logging.transport属性。
- 使用builder-jammy-java-tiny构建包。
- 允许自定义结构化日志JSON。
- 将Gradle的最低支持版本提升至8.4。
- 统一接受以逗号分隔的值的配置属性。
- 允许为消息源指定通用消息。
- 提供配置Jetty最大表单键的属性。
- 为Hazelcast提供服务连接支持。
- 使OtlpMeterRegistry支持虚拟线程。
- 改进SpringEnvironmentLookup异常提示，指示log4j2文件必须带有'-spring'后缀。
- 允许自动配置的org.jooq.Configuration用于创建自定义DSLContext。
- 添加对分区Cookie的支持。
- 弃用对DynamicPropertyRegistry的支持，转而支持DynamicPropertyRegistrar beans。
- 当构建镜像时，警告用户提供敏感目标的卷挂载。
- 仅在主服务器关闭后关闭管理服务器。
- 导出包含在native-image中的SBOM。
- 引入@BatchTaskExecutor，简化Spring Batch自定义任务执行器的配置。
- 通过配置限制actuator访问的读/写/删除操作。
- 提供进一步自定义底层ClientHttpRequestFactory组件的方法。
- 为虚拟线程支持自动配置Undertow/XNIO。
- 提供轻松配置全局客户端HTTP请求工厂设置的机制。

## 🐞 Bug修复
- 运行mvn spring-boot:run时，类路径超过Windows长度限制会留下临时文件。
- 从ForkJoinPool任务加载协议解析器时抛出ClassNotFoundException。
- ConditionReportApplicationContextFailureProcessor生成的报告在失败测试中始终为空。
- 用户的区域设置可能会对不区分大小写的比较产生不利影响。
- server.tomcat.reject-illegal-header自2.7.12起已弃用，应在3.3.0中移除。
- DataSourceProperties#driverClassIsLoadable失败时不应在错误流中打印堆栈跟踪。
- 一些@ControllerEndpoint和@RestControllerEndpoint基础设施仍未弃用。
- Rabbit Streams的自动配置未考虑RabbitConnectionDetails。
- @ConditionalOn(Missing)Bean(annotation = …)在@Bean方法上使用时推断类型以匹配。
- ActiveMQ Artemis连接工厂在native image中创建失败。
- 当上下文包含多个注册表且没有主注册表时，重复计量绑定。
- 当环境使用AOT优化的应用程序准备时，配置文件未激活。

## 📔 文档
- 更新HttpWebServiceMessageSenderBuilder的javadoc。
- 记录HttpClientAutoConfiguration的更新。
- 根据HTTP客户端更改更新Web服务文档。
- 将默认值描述移至日志属性元数据中的“描述”。
- 记录嵌入式Tomcat必须至少为10.1.25。
- 更新文档，建议在一个bean上使用@Qualifier，在另一个bean上使用@Primary，建议使用一个默认候选为false的单一bean。
- 修复systemd示例配置。
- 记录最大HTTP请求头大小属性的确切行为是服务器特定的。
- 澄清为何在定义自己的ObjectMapper以替代JacksonAutoConfiguration时推荐使用@Primary。
- 改进Binder#bindOrCreate(String, Class)的javadoc。
- 记录Tomcat的maxQueueCapacity需要大于0。
- 移除指向jar-to-war入门指南的过时链接。
- 修复文档中的拼写和格式错误。
- 修复“清理敏感值”中的示例使用的大小写。
- 修复Regex javadoc链接。
- 记录环境变量如何绑定Map属性。
- 改进可重现构建的类路径索引文档。
- 改进CycloneDX集成的文档。
- 移除指向Spring Data GemFire的链接。
- 文档缺少MyCustomFormat.kt示例。
- 链接到框架文档，关于@Bean的autowireCandidate和defaultCandidate。
- 按字母顺序排列公共应用程序属性中的部分。

### 总结

在Spring-Boot v3.4.0-RC1版本中，新增了多项特性和修复，旨在提升开发者的使用体验。更新包括增强的Web服务支持、对ClickHouse的支持以及多项Bug修复，确保开发者能够更加高效地构建和维护应用程序。