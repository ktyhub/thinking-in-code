# Spring-Boot v3.2.12
### 为什么要使用Spring-Boot

在现代软件开发中，时间就是金钱。开发者们常常面临着快速交付和高质量代码之间的矛盾。Spring-Boot的出现，正是为了打破这一僵局。它通过简化配置和自动化设置，让开发者能够专注于业务逻辑，而不是繁琐的基础设施搭建。想象一下，您只需几行代码，就能启动一个完整的应用程序，这种效率让人惊叹。选择Spring-Boot，就是选择了高效、灵活和现代化的开发方式。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它通过提供一系列的默认配置和约定，使得开发者能够快速构建独立的、生产级的Spring应用。Spring-Boot内置了许多常用的功能，如嵌入式服务器、自动配置和监控，使得开发者可以更专注于业务逻辑，而不是基础设施的配置。

### 入门示例

假设您正在开发一个在线书店的应用程序。使用Spring-Boot，您可以轻松创建一个RESTful API来管理书籍信息。只需创建一个简单的控制器类，定义几个基本的HTTP请求处理方法，您就可以快速实现书籍的增删改查功能。例如，您可以使用以下代码片段来创建一个获取所有书籍的接口：

```java
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }
}
```

通过Spring-Boot的自动配置，您可以在几分钟内启动并运行这个API，而不需要手动配置复杂的XML文件或其他设置。

### Spring-Boot v3.2.12版本更新了什么

Spring-Boot v3.2.12版本主要更新了多个Bug修复和文档改进，提升了整体稳定性和用户体验。它修复了在使用特定构建包时无法打包OCI镜像的问题，改进了WebServerPortFileWriter的功能，并增强了SSL选项的处理。此外，更新了多个依赖库，确保与最新技术的兼容性。

### 更新日志

## 🐞 Bug 修复
- 当提供 'docker.io/paketobuildpacks/new-relic' 作为构建包时，无法打包OCI镜像。
- 使用没有扩展名的端口文件时，WebServerPortFileWriter失败。
- SslOptions.isSpecified() 仅在设置了密码和启用协议时返回true。
- Logback日志系统未处理以非.xml结尾的URL。
- 在设置DOCKER_CONTEXT=default时，bootBuildImage出现空指针异常。
- build-info不支持来自project.build.outputTimestamp的自1970年起的秒数。
- 发送到Docker Engine API的X-Registry-Auth头包含“authHeader”字段。
- 在线程中断后，OnClassCondition.resolveOutcomesThreaded中的空指针异常。
- 从归档加载图像时，错误的根本原因被隐藏。

## 📔 文档
- 'spring.datasource.type'的文档存在误导。
- 更新“从2.x升级”部分。
- 重新整理数据源配置示例，以分开定义额外的数据源和不同类型的数据源。
- 链接到Eclipse设置说明。
- 更新HttpWebServiceMessageSenderBuilder的Javadoc。
- 将默认值描述移至日志属性元数据中的“描述”。
- 记录如何以及在哪里添加自定义GraalVM配置文件。

## 🔨 依赖升级
- 升级到Groovy 4.0.24。
- 升级到Infinispan 14.0.33.Final。
- 升级到Jetty 12.0.15。
- 升级到jOOQ 3.18.22。
- 升级到Lombok 1.18.36。
- 升级到Micrometer 1.12.13。
- 升级到Micrometer Tracing 1.2.12。
- 升级到MongoDB 4.11.5。
- 升级到Netty 4.1.115.Final。
- 升级到Pulsar Reactive 0.5.9。
- 升级到Reactor Bom 2023.0.12。
- 升级到Spring AMQP 3.1.8。
- 升级到Spring Data Bom 2023.1.12。
- 升级到Spring Framework 6.1.15。
- 升级到Spring Integration 6.2.11。
- 升级到Spring Kafka 3.1.10。
- 升级到Spring LDAP 3.2.8。
- 升级到Spring Pulsar 1.0.12。
- 升级到Spring RESTDocs 3.0.3。
- 升级到Spring Security 6.2.8。
- 升级到Tomcat 10.1.33。

### 总结

在Spring-Boot v3.2.12版本中，开发团队专注于修复Bug、改进文档和升级依赖，确保了框架的稳定性和现代化。通过这些更新，开发者能够享受到更流畅的开发体验和更强大的功能支持。