# Spring-Boot v3.3.5
### 为什么要使用Spring-Boot

在当今快速发展的技术世界中，开发者面临着一个矛盾：如何在保证高效的同时，保持代码的可维护性和可扩展性？Spring-Boot正是为了解决这一难题而生。它不仅简化了Java应用程序的开发过程，还提供了强大的自动配置功能，让开发者能够专注于业务逻辑，而不是繁琐的配置。想象一下，您可以在几分钟内启动一个全功能的应用程序，而不必为复杂的设置而烦恼。这种高效与灵活的结合，使得Spring-Boot成为现代开发的理想选择。

### Spring-Boot是什么

Spring-Boot是一个开源Java框架，旨在简化Spring应用程序的开发。它通过提供开箱即用的配置和自动化功能，使开发者能够快速构建独立的、生产级的Spring应用程序。Spring-Boot的核心理念是“约定优于配置”，这意味着它会根据常见的开发需求自动配置应用程序，从而减少了手动配置的复杂性。

### 入门示例

假设您正在开发一个在线书店应用程序。使用Spring-Boot，您可以快速创建一个RESTful API来处理书籍的增删改查操作。只需几行代码，您就可以启动一个内嵌的Tomcat服务器，并通过简单的注解定义控制器。例如：

```java
@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }
}
```

通过这种方式，您可以专注于业务逻辑，而不必担心底层的配置细节。Spring-Boot的强大之处在于，它让您在短时间内实现复杂的功能，提升了开发效率。

### Spring-Boot v3.3.5版本更新了什么

Spring-Boot v3.3.5版本进行了多项重要更新，包括修复了多个bug，改进了文档，并升级了多个依赖项。特别是，嵌入的Tomcat版本要求更新至10.1.25，支持Java 23，并对Rabbit Streams的自动配置进行了优化。这些更新不仅提升了框架的稳定性，也增强了开发者的使用体验。

### 更新日志

## 🐞 Bug 修复
- 运行 `mvn spring-boot:run` 时，如果类路径超过Windows的长度限制，会留下临时文件。
- 在失败的测试中，ConditionReportApplicationContextFailureProcessor生成的报告始终为空。
- 用户的区域设置可能会对不区分大小写的比较产生不利影响。
- DataSourceProperties#driverClassIsLoadable失败时不应在错误流中打印堆栈跟踪。
- 一些 `@ControllerEndpoint` 和 `@RestControllerEndpoint` 基础设施仍未被弃用。
- Rabbit Streams的自动配置未考虑RabbitConnectionDetails。
- 从ForkJoinPool任务加载协议解析器时抛出ClassNotFoundException。
- 在本地映像中创建ActiveMQ Artemis连接工厂失败。
- 当上下文包含多个注册表且没有一个是主要的时，会出现重复的计量绑定。

## 📔 文档
- 文档中说明嵌入的Tomcat必须至少为10.1.25。
- 修复systemd示例配置。
- 文档中说明最大HTTP请求头大小属性的确切行为是特定于服务器的。
- 澄清在定义自己的ObjectMapper时，为什么推荐使用 `@Primary`。
- 改进Binder#bindOrCreate(String, Class)的javadoc。
- 文档中说明Tomcat的maxQueueCapacity需要大于0。
- 删除指向jar-to-war入门指南的过时链接。
- 修复文档中的拼写和格式错误。
- 修复“清理敏感值”示例中的大小写问题。
- 修复Regex javadoc链接。
- 文档中说明如何从环境变量绑定Map属性。
- 改进可重现构建的类路径索引文档。
- 删除指向Spring Data GemFire的链接。
- 按字母顺序排列公共应用程序属性中的部分。
- 改进javadoc，描述何时 `@ConditionalOn(Missing)Bean` 将推断类型以匹配。
- 文档中说明如何在Maven的本地映像中处理MANIFEST.MF。
- 修复指向Micrometer参考文档的链接。
- 改进文档。
- 为PrometheusScrapeEndpoint(PrometheusRegistry, Properties)添加javadoc。
- 删除关于Tomcat优雅关闭需要9.0.33或更高版本的说明，因为我们现在要求10.1.x。
- 文档中说明对Java 23的支持。
- 改进CycloneDX集成的文档。

## 🔨 依赖升级
- 禁止升级到Undertow 2.3.18.Final。
- 升级到CycloneDX Maven插件2.8.2。
- 升级到GraphQL Java 22.3。
- 升级到Infinispan 15.0.10.Final。
- 升级到Jaybird 5.0.6.java11。
- 升级到Jersey 3.1.9。
- 升级到Jetty 12.0.14。
- 升级到Jetty Reactive HTTPClient 4.0.8。
- 升级到jOOQ 3.19.14。
- 升级到JUnit Jupiter 5.10.5。
- 升级到Logback 1.5.11。
- 升级到Micrometer 1.13.6。
- 升级到Micrometer Tracing 1.3.5。
- 升级到Neo4j Java Driver 5.25.0。
- 升级到Netty 4.1.114.Final。
- 升级到Pooled JMS 3.1.7。
- 升级到Pulsar Reactive 0.5.8。
- 升级到R2DBC Pool 1.0.2.RELEASE。
- 升级到R2DBC Postgresql 1.0.7.RELEASE。
- 升级到Reactor Bom 2023.0.11。
- 升级到Spring Authorization Server 1.3.3。
- 升级到Spring Data Bom 2024.0.5。
- 升级到Spring Framework 6.1.14。
- 升级到Spring GraphQL 1.3.3。
- 升级到Spring Integration 6.3.5。
- 升级到Spring LDAP 3.2.7。
- 升级到Spring Pulsar 1.1.5。
- 升级到Spring RESTDocs 3.0.2。
- 升级到Spring Retry 2.0.10。
- 升级到Spring Security 6.3.4。
- 升级到Spring Session 3.3.3。
- 升级到Tomcat 10.1.31。

### 总结

在Spring-Boot v3.3.5版本中，开发团队进行了多项重要的bug修复和文档改进，同时升级了多个关键依赖项，以提升框架的稳定性和用户体验。这些更新不仅解决了开发者在使用过程中遇到的问题，还增强了对新技术的支持，确保了Spring-Boot在现代开发中的领先地位。