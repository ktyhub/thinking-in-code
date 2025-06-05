# Spring-Boot v3.3.6
### 为什么要使用Spring-Boot

在现代软件开发中，开发者面临着越来越多的挑战：快速迭代、复杂的配置、以及不断变化的需求。Spring-Boot的出现，正是为了打破这些矛盾。它通过简化配置和提供开箱即用的功能，让开发者能够专注于业务逻辑，而不是繁琐的环境搭建和配置管理。想象一下，您正在开发一个新项目，却被无尽的配置文件和依赖管理所困扰。Spring-Boot的自动配置和约定优于配置的理念，能够让您在几分钟内启动一个项目，迅速进入开发状态。这种高效的开发体验，使得Spring-Boot成为了众多开发者的首选。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它提供了一种快速、简便的方式来创建独立的、生产级的Spring应用程序。Spring-Boot通过自动配置、约定优于配置的原则，帮助开发者减少繁琐的配置工作，使得应用程序的启动和开发变得更加高效。

### 入门示例

假设您正在开发一个在线书店的应用程序。使用Spring-Boot，您可以通过简单的命令行指令快速创建一个新的项目。只需运行以下命令：

```bash
spring init --dependencies=web,data-jpa,h2 book-store
```

这将创建一个名为“book-store”的项目，并自动添加Web、JPA和H2数据库的依赖。接下来，您只需编写一个简单的控制器来处理书籍的请求：

```java
@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping
    public List<Book> getAllBooks() {
        // 返回书籍列表
    }
}
```

通过这种方式，您可以在几分钟内搭建一个基本的在线书店应用，快速响应市场需求。

### Spring-Boot v3.3.6版本更新了什么

Spring-Boot v3.3.6版本进行了多项重要更新，包括升级到OpenTelemetry 1.38.0，以增强监控和追踪功能。此外，修复了一些关键的bug，改善了依赖管理，确保了更好的稳定性和性能。此版本还更新了多个依赖项，如ActiveMQ、Groovy和Spring Framework等，以保持与最新技术的兼容性。

### 更新日志

## ⚠️ 重要更新
- 本次发布升级到OpenTelemetry 1.38.0，详细信息请参见相关问题评论。

## 🐞 Bug修复
- 修复了Spring Boot 3.3.x依赖未能为Micrometer Tracing和OpenTelemetry收敛的问题。
- 修复了在提供'docker.io/paketobuildpacks/new-relic'作为构建包时无法打包OCI镜像的问题。
- 修复了使用没有扩展名的端口文件时WebServerPortFileWriter失败的问题。
- 修复了SslOptions.isSpecified()仅在设置了密码和启用协议时返回true的问题。
- 修复了从归档加载图像时隐藏错误根本原因的问题。
- 修复了在Windows上运行mvn spring-boot:run时出现的“找不到或无法加载主类”的问题。
- 修复了Logback日志系统未处理以非.xml路径结尾的URL的问题。
- 修复了在设置DOCKER_CONTEXT=default时bootBuildImage中的NPE问题。
- 修复了build-info不支持从project.build.outputTimestamp获取自纪元以来的秒数的问题。
- 修复了在OnClassCondition.resolveOutcomesThreaded中因线程中断导致的NPE问题。
- 修复了发送到Docker Engine API的X-Registry-Auth头中包含“authHeader”字段的问题。
- 修复了在FactoryBean输出上使用@SpyBean时未重置的问题。

## 📔 文档
- 修正了'spring.datasource.type'的文档误导性。
- 更新了“从2.x升级”的部分。
- 在API文档中包含spring-boot-loader。
- 记录了如何添加自定义GraalVM配置文件。
- 重新整理了数据源配置示例，以区分定义额外数据源和不同类型数据源的定义。
- 修正了Maven插件示例中层架构位置的错误。
- 更新了Eclipse设置说明的链接。
- 修正了Checkpoint和Restore状态页面的链接。
- 更新了HttpWebServiceMessageSenderBuilder的javadoc。
- 将默认值描述移至日志属性元数据中的“描述”部分。

## 🔨 依赖升级
- 升级到ActiveMQ 6.1.4。
- 升级到Groovy 4.0.24。
- 升级到Infinispan 15.0.11.Final。
- 升级到Jackson Bom 2.17.3。
- 升级到Jetty 12.0.15。
- 升级到jOOQ 3.19.15。
- 升级到Logback 1.5.12。
- 升级到Lombok 1.18.36。
- 升级到Micrometer 1.13.8。
- 升级到Micrometer Tracing 1.3.6。
- 升级到Netty 4.1.115.Final。
- 升级到Pulsar Reactive 0.5.9。
- 升级到Reactor Bom 2023.0.12。
- 升级到Spring AMQP 3.1.8。
- 升级到Spring Data Bom 2024.0.6。
- 升级到Spring Framework 6.1.15。
- 升级到Spring Integration 6.3.6。
- 升级到Spring Kafka 3.2.5。
- 升级到Spring LDAP 3.2.8。
- 升级到Spring Pulsar 1.1.6。
- 升级到Spring RESTDocs 3.0.3。
- 升级到Spring Security 6.3.5。
- 升级到Tomcat 10.1.33。

### 总结

Spring-Boot v3.3.6版本带来了重要的功能更新和多项bug修复，确保了框架的稳定性和性能。通过升级依赖项，Spring-Boot继续保持与最新技术的兼容性，为开发者提供了更好的开发体验。