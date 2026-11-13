# Spring-Boot v3.4.0
### 为什么要使用Spring-Boot

在当今快速发展的软件开发环境中，开发者面临着越来越多的挑战。传统的Java开发方式往往需要繁琐的配置和大量的样板代码，这不仅消耗了开发者的时间，还增加了出错的可能性。此时，Spring-Boot的出现就像一缕阳光，照亮了开发者的道路。它通过简化配置、自动化设置和提供开箱即用的功能，帮助开发者快速构建和部署应用程序。然而，正是这种便利性与灵活性之间的矛盾，使得开发者在选择框架时不得不深思熟虑。使用Spring-Boot，开发者不仅能提高工作效率，还能在复杂的项目中保持代码的整洁与可维护性。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它通过提供一系列的默认配置和开箱即用的功能，使得开发者能够快速构建独立的、生产级的Spring应用程序。Spring-Boot的核心理念是“约定优于配置”，这意味着开发者可以专注于业务逻辑，而不必花费过多时间在配置上。

### 入门示例

想象一下，你是一名初创公司的开发者，正在为一款新应用构建后端服务。使用Spring-Boot，你可以通过简单的命令行指令快速启动一个新的项目。比如，你只需运行`spring init --dependencies=web myapp`，就能创建一个包含Web依赖的基础项目。接下来，你可以在`@RestController`中定义API端点，轻松实现数据的增删改查。最终，你的应用可以在几分钟内启动并运行，极大地提升了开发效率。

### Spring-Boot v3.4.0版本更新了什么

Spring-Boot v3.4.0版本带来了多项重要更新，包括新增HttpComponentsClientHttpRequestFactoryBuilder的withDefaultRequestConfigCustomizer方法、JsonWriter在检测到重复名称时将失败、支持GraphQL的超时属性、提升ConfigurationPropertiesBinder的性能，以及移除部分不必要的依赖。这些更新旨在增强框架的性能和可用性，使开发者能够更高效地构建应用。

### 更新日志

## ⭐ 新特性
- 向HttpComponentsClientHttpRequestFactoryBuilder添加withDefaultRequestConfigCustomizer方法
- 如果检测到重复名称，则JsonWriter将失败
- 添加JsonObjectDeserializer.nullSafeValue方法，接受一个mapper函数
- 支持GraphQL的超时属性
- 通过在首次访问时存储绑定处理程序来提高ConfigurationPropertiesBinder的性能
- 提高ConcurrentReferenceCachingMetadataReaderFactory的性能
- 如果未配置池挂起，则在HikariCheckpointRestoreLifecycle中记录警告
- 从spring-boot-starter-data-jpa和spring-boot-starter-integration中移除spring-boot-starter-aop依赖

## 🐞 Bug修复
- Jersey的主体处理与Spring Webflux和Spring MVC不一致
- 类意外命名为“结构日志”而不是“结构化日志”
- StructuredLoggingJsonProperties自定义器应为类引用而不是字符串
- 当提供'docker.io/paketobuildpacks/new-relic'作为构建包时，无法打包OCI镜像
- 在additional-spring-configuration-metadata.json中定义的'management.endpoints.access.default'的类型不正确
- 使用没有扩展名的portfile时，WebServerPortFileWriter失败
- SslOptions.isSpecified()仅在设置了密码和启用协议时返回true
- 使用SslBundle和SslStoreBundle.NONE时，SslHealthIndicator抛出NullPointerException
- JdkClientHttpRequestFactoryBuilder和JettyClientHttpRequestFactoryBuilder未设置密码或启用协议
- 从归档加载图像时，错误的根本原因被隐藏
- 当路径包含非ASCII字符时，mvn spring-boot:run在Windows上失败，提示“找不到或无法加载主类”
- 输出FactoryBean的@SpyBean未重置
- Logback日志系统不处理路径不以.xml结尾的URL
- 在确定Bean是否为候选者时，基于Bean的条件未正确考虑工厂Bean
- 在设置DOCKER_CONTEXT=default时，bootBuildImage中的NPE
- 由于重复的MockResolver扩展而产生警告
- 在Windows上使用Gradle或Maven的构建包时抛出HttpHostConnectException
- build-info不支持来自project.build.outputTimestamp的自1970年1月1日以来的秒数
- 在线程中断后，OnClassCondition.resolveOutcomesThreaded中的NPE，因为firstHalf为null
- 默认的WebSocketMessageBrokerConfigurer始终覆盖自定义通道执行器
- 发送到Docker Engine API的X-Registry-Auth头包含字段“authHeader”
- ApplicationContextRunner在重复的自动配置类名时表现不一致

## 📔 文档
- 将类引用迁移到完整的javadoc链接
- 'spring.datasource.type'的文档具有误导性
- 更新“从哪个版本升级”部分以使用“2.x”
- 在API文档中包含spring-boot-loader
- 记录如何以及在哪里添加自定义GraalVM配置文件
- 重新整理DataSource配置示例，以分开定义额外的DataSource和定义不同类型的DataSource
- Maven插件示例中层次结构模式的位置不正确
- 链接到Eclipse设置说明
- 修复链接到Checkpoint和Restore状态页面

## 🔨 依赖升级
- 升级到ActiveMQ 6.1.4
- 升级到Byte Buddy 1.15.10
- 升级到Couchbase Client 3.7.5
- 升级到Elasticsearch Client 8.15.4
- 升级到Flyway 10.20.1
- 升级到Groovy 4.0.24
- 升级到Hibernate 6.6.2.Final
- 升级到HttpClient5 5.4.1
- 升级到Infinispan 15.0.11.Final
- 升级到Jackson Bom 2.18.1
- 升级到Jetty 12.0.15
- 升级到jOOQ 3.19.15
- 升级到Kafka 3.8.1
- 升级到Lettuce 6.4.1.RELEASE
- 升级到Logback 1.5.12
- 升级到Lombok 1.18.36
- 升级到Maven Dependency Plugin 3.8.1
- 升级到Maven Failsafe Plugin 3.5.2
- 升级到Maven Surefire Plugin 3.5.2
- 升级到Micrometer 1.14.1
- 升级到Micrometer Tracing 1.4.0
- 升级到MongoDB 5.2.1
- 升级到Netty 4.1.115.Final
- 升级到Prometheus Client 1.3.3
- 升级到Pulsar Reactive 0.5.9
- 升级到Reactor Bom 2024.0.0
- 升级到Spring AMQP 3.2.0
- 升级到Spring Authorization Server 1.4.0
- 升级到Spring Batch 5.2.0
- 升级到Spring Data Bom 2024.1.0
- 升级到Spring Framework 6.2.0
- 升级到Spring HATEOAS 2.4.0
- 升级到Spring Integration 6.4.0
- 升级到Spring Kafka 3.3.0
- 升级到Spring LDAP 3.2.8
- 升级到Spring Pulsar 1.2.0
- 升级到Spring RESTDocs 3.0.3
- 升级到Spring Security 6.4.1
- 升级到Spring Session 3.4.0

### 总结

在Spring-Boot v3.4.0版本中，新增了一些重要特性和性能提升，同时修复了多个bug，确保了更好的用户体验。此外，多个依赖项也得到了升级，以保持与最新技术的兼容性。这些更新将进一步增强开发者的工作效率和应用的稳定性。