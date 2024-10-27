# Spring-Boot v3.4.0-RC1
### 为什么要使用Spring-Boot

在现代软件开发中，时间就是金钱。开发者们常常面临着快速交付和高质量代码之间的矛盾。Spring-Boot的出现，正是为了打破这一僵局。它通过简化配置和自动化设置，让开发者能够迅速构建和部署应用程序，仿佛在为他们打开了一扇通往高效开发的快捷通道。想象一下，您可以在几分钟内启动一个复杂的微服务，而不是花费数小时在繁琐的配置上。Spring-Boot不仅提升了开发效率，更让开发者能够专注于业务逻辑，而不是基础设施的搭建。

### Spring-Boot是什么

Spring-Boot是一个开源Java框架，旨在简化Spring应用程序的开发过程。它通过提供一系列的默认配置和自动化功能，使得开发者能够快速创建独立的、生产级别的Spring应用程序。Spring-Boot的核心理念是“约定优于配置”，让开发者能够以最少的配置实现最大化的功能。

### 入门示例

假设您正在开发一个在线书店的应用程序。使用Spring-Boot，您可以通过简单的命令行指令快速启动一个新的项目。只需创建一个`Book`类，定义其属性（如标题、作者和价格），然后使用Spring Data JPA来处理数据库操作。几行代码后，您就能实现一个完整的RESTful API，允许用户查询、添加和删除书籍。这种快速迭代的开发方式，让您能够在短时间内推出产品原型，迅速响应市场需求。

### Spring-Boot v3.4.0-RC1版本更新了什么

Spring-Boot v3.4.0-RC1版本带来了多项重要更新，包括增强了对Web服务的支持，添加了RestTemplateBuilder的requestFactorySettings方法，统一了HTTP客户端的重定向行为，并引入了对ClickHouse的支持。此外，移除了在3.4.0版本中已被弃用的功能，确保了框架的整洁性和高效性。

### 更新日志

## ⭐ 新特性
- 更新Web服务支持，利用ClientHttpRequestFactoryBuilder
- 为RestTemplateBuilder添加requestFactorySettings方法
- 重命名RestTemplateBuilder的'set'方法
- 统一默认HTTP客户端重定向行为，并提供配置选项
- 为ClickHouse添加Testcontainers和Docker Compose支持
- 支持ApplicationResourceLoader的ResourceLoader委托
- 在DatabaseDriver枚举中添加ClickHouse JDBC驱动支持
- 添加控制OTLP日志导出的属性
- 移除在3.4.0中已弃用的剩余功能
- 添加对索引反应式会话存储库的自动配置支持
- 检测JsonMixin注解的意外错误配置
- 在ClientHttpRequestFactories中支持Reactor Netty
- 添加指定Docker Compose标志的属性
- 重命名OtlpAutoConfiguration为OtlpTracingAutoConfiguration
- 为OTLP日志和跟踪添加连接超时属性
- 添加management.otlp.logging.transport属性
- 使用builder-jammy-java-tiny构建包
- 允许自定义结构化日志JSON
- 将Gradle的最低支持版本提高到8.4
- 统一接受逗号分隔值的配置属性
- 允许为消息源指定公共消息
- 提供配置Jetty最大表单键的属性
- 提供Hazelcast的服务连接支持
- 使OtlpMeterRegistry支持虚拟线程
- 改进SpringEnvironmentLookup异常，提示log4j2文件必须有'-spring'后缀
- 允许自动配置的org.jooq.Configuration用于创建自定义DSLContext
- 添加对分区Cookie的支持
- 弃用对DynamicPropertyRegistry的支持，转向DynamicPropertyRegistrar beans
- 当构建镜像时，警告用户提供敏感目标的卷挂载
- 仅在主服务器关闭后关闭管理服务器
- 导出包含在native-image中的SBOM
- 引入@BatchTaskExecutor，简化Spring Batch自定义任务执行器的配置
- 根据读/写/删除操作限制actuator访问
- 提供进一步自定义底层ClientHttpRequestFactory组件的方式
- 为虚拟线程支持自动配置Undertow/XNIO
- 提供轻松配置全局客户端HTTP请求工厂设置的机制

## 🐞 Bug修复
- 运行mvn spring-boot:run时，类路径超出Windows长度限制会留下临时文件
- 从ForkJoinPool任务加载协议解析器时抛出ClassNotFoundException
- ConditionReportApplicationContextFailureProcessor生成的报告在测试失败时始终为空
- 大小写不敏感的比较可能受到用户区域设置的影响
- server.tomcat.reject-illegal-header自2.7.12起已弃用，应在3.3.0中移除
- DataSourceProperties#driverClassIsLoadable失败时不应向错误流打印堆栈跟踪
- 一些@ControllerEndpoint和@RestControllerEndpoint基础设施仍未弃用
- Rabbit Streams的自动配置未考虑RabbitConnectionDetails
- @ConditionalOn(Missing)Bean(annotation = …)在@Bean方法上使用时推断类型以匹配
- ActiveMQ Artemis连接工厂在native image中创建失败
- 当上下文包含多个注册表且没有一个是主要的时，重复的计量绑定
- 当环境使用AOT优化的应用程序准备时，配置文件未激活

## 📔 文档
- 更新HttpWebServiceMessageSenderBuilder的javadoc
- 记录HttpClientAutoConfiguration更新
- 根据HTTP客户端更改更新Web服务文档
- 将默认值描述移至日志属性元数据中的“描述”
- 记录嵌入式Tomcat必须至少为10.1.25
- 更新文档，建议在一个bean上使用@Qualifier，在另一个上使用@Primary，建议使用一个默认候选为false的单一bean
- 修复systemd示例配置
- 记录最大HTTP请求头大小属性的确切行为是服务器特定的
- 澄清为什么在定义自己的ObjectMapper时推荐使用@Primary
- 改进Binder#bindOrCreate(String, Class)的javadoc
- 记录Tomcat的maxQueueCapacity需要大于0
- 移除指向jar-to-war入门指南的过时链接
- 修复文档中的拼写和格式错误
- 修复“清理敏感值”中的示例使用的大小写
- 修复正则表达式javadoc链接
- 记录Map属性如何从环境变量绑定
- 改进可重复构建的类路径索引文档
- 改进CycloneDX集成的文档
- 移除指向Spring Data GemFire的链接
- 文档缺少MyCustomFormat.kt示例
- 链接到框架文档，关于@Bean的autowireCandidate和defaultCandidate
- 按字母顺序排列公共应用程序属性中的部分

### 总结

本次更新记录展示了Spring-Boot v3.4.0-RC1版本的多项新特性和修复，包括增强Web服务支持、改进RestTemplateBuilder、统一HTTP客户端行为等。此外，文档也得到了显著更新，确保开发者能够更好地利用这些新功能。

 