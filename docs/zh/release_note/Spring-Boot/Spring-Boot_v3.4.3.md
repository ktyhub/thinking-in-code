# Spring-Boot v3.4.3
### 为什么要使用Spring-Boot

在现代软件开发中，开发者常常面临着一个矛盾：如何在快速迭代的需求下，保持代码的整洁性和可维护性？Spring-Boot应运而生，它不仅简化了Java应用程序的开发流程，还提供了一种快速构建和部署的方式。想象一下，你在一个项目中花费了数周的时间来配置框架和依赖，而当你终于完成时，需求却又发生了变化。Spring-Boot通过其开箱即用的特性和自动配置功能，帮助开发者迅速应对变化，减少了繁琐的配置工作，让你可以将更多的精力放在业务逻辑上。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发。它通过提供默认配置和自动化设置，使得开发者可以快速启动和运行新的Spring项目。Spring-Boot的核心理念是“约定优于配置”，这意味着开发者只需关注业务逻辑，而不必为繁琐的配置而烦恼。

### 入门示例

假设你正在开发一个在线书店的应用程序。使用Spring-Boot，你可以通过简单的命令行指令快速创建一个新的项目。只需运行以下命令：

```bash
spring init --dependencies=web,data-jpa,h2 book-store
```

这将创建一个包含Web、JPA和H2数据库支持的基本项目结构。接下来，你只需编写一个简单的控制器来处理书籍的请求：

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

通过这种方式，你可以在几分钟内启动一个功能齐全的应用程序，极大地提高了开发效率。

### Spring-Boot v3.4.3版本更新了什么

Spring-Boot v3.4.3版本带来了多个重要更新，包括新增JavaVersion枚举的TWENTY_FOUR选项，修复了使用Log4j2时控制台输出丢失的问题，改进了Maven插件在Windows上的类路径参数处理，增强了Reactive Jetty服务器的快速失败机制，以及优化了Thymeleaf的视图解析器。这些更新旨在提升开发者的使用体验和应用程序的稳定性。

### 更新日志

## ⭐ 新特性
- 将TWENTY_FOUR添加到JavaVersion枚举

## 🐞 Bug修复
- 使用Log4j2时，控制台输出可能会丢失
- Maven插件在Windows上对类路径参数的使用不一致
- 配置使用Jetty不支持的服务器名称捆绑时，Reactive Jetty Web服务器未能快速失败
- 当Web服务器应用程序上下文刷新失败时，停止或销毁Web服务器时会丢失原始失败信息
- 如果未存在spring-webmvc，Thymeleaf的视图解析器应当退回
- 当ReactiveWebServerApplicationContext刷新失败时，WebServer未被销毁
- H2ConsoleAutoConfiguration未考虑非默认数据源候选项
- 开发期间，Banner占位符和默认值不起作用
- Mustache模板在Content-Type响应头中返回ISO-8859-1字符集而非UTF-8
- Servlet EndpointRequest未能正确匹配Web服务器命名空间
- 使用默认管理安全性与WebFlux和健康探针启用时出现java.lang.ClassCastException
- 依赖内部类的Logback配置在本地镜像中不起作用
- 在3.3.8或3.4.2之后，无法注册SSL捆绑的IllegalStateException
- 指标和健康检查未包含非默认候选Bean

## 📔 文档
- 文档中说明自动配置类应使用其二进制名称进行识别
- 更正MVC安全性中关于UserDetailsService自动配置何时退回的拼写错误
- 链接到JarLauncher的javadoc
- 使用可观察性注解时，建议小心避免双重仪器化
- 更正“运行您的应用程序”中的拼写错误
- 文档中说明在使用没有Shell的Docker镜像时的Kubernetes preStop处理程序
- 在“开发您的第一个Spring Boot应用程序”部分中，源代码片段使用根包
- 更正“开发您的第一个Spring Boot应用程序”中的MyApplication.java位置
- 添加Jackson Javadoc的链接
- 警告某些Quartz数据库架构脚本在使用前必须修改

## 🔨 依赖升级
- 升级到Commons Pool2 2.12.1
- 升级到Couchbase Client 3.7.8
- 升级到Groovy 4.0.25
- 升级到Hibernate 6.6.8.Final
- 升级到HttpClient5 5.4.2
- 升级到HttpCore5 5.3.3
- 升级到Infinispan 15.0.13.Final
- 升级到jOOQ 3.19.19
- 升级到Json-smart 2.5.2
- 升级到Maven Clean Plugin 3.4.1
- 升级到Micrometer 1.14.4
- 升级到Micrometer Tracing 1.4.3
- 升级到Native Build Tools Plugin 0.10.5
- 升级到Neo4j Java Driver 5.28.1
- 升级到Netty 4.1.118.Final
- 升级到Prometheus Client 1.3.6
- 升级到R2DBC MySQL 1.3.2
- 升级到Reactor Bom 2024.0.3
- 升级到REST Assured 5.5.1
- 升级到RSocket 1.1.5
- 升级到Spring AMQP 3.2.3
- 升级到Spring Authorization Server 1.4.2
- 升级到Spring Data Bom 2024.1.3
- 升级到Spring Framework 6.2.3
- 升级到Spring GraphQL 1.3.4
- 升级到Spring Integration 6.4.2
- 升级到Spring Kafka 3.3.3
- 升级到Spring LDAP 3.2.11
- 升级到Spring Pulsar 1.2.3
- 升级到Spring Security 6.4.3
- 升级到Spring Session 3.4.2
- 升级到Testcontainers 1.20.5
- 升级到Testcontainers Redis Module 2.2.4

### 总结

在Spring-Boot v3.4.3版本中，新增了JavaVersion枚举的TWENTY_FOUR选项，并修复了多个关键Bug，提升了开发者的使用体验。此外，文档也进行了多项改进，确保开发者能够更顺利地使用该框架。最后，多个依赖项得到了升级，以保持与最新技术的兼容性和性能优化。