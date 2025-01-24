# Spring-Boot v3.3.8
### 为什么要使用Spring-Boot

在当今快速发展的软件开发环境中，开发者面临着许多挑战：如何快速构建高效的应用程序，如何减少繁琐的配置，如何确保代码的可维护性和可扩展性。Spring-Boot的出现，正是为了解决这些矛盾。它不仅简化了Java应用程序的开发过程，还提供了开箱即用的功能，让开发者能够专注于业务逻辑，而不是配置文件的琐碎细节。使用Spring-Boot，开发者可以在短时间内构建出强大而灵活的应用程序，真正实现“快速开发”的目标。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发。它通过自动配置和约定优于配置的原则，帮助开发者快速启动和运行Spring应用程序。Spring-Boot提供了一系列的功能，包括内嵌的服务器、自动化的依赖管理和生产级的监控，极大地提高了开发效率。

### 入门示例

想象一下，你是一名初创公司的开发者，正在为一个新产品构建一个RESTful API。使用Spring-Boot，你可以通过简单的几行代码快速创建一个项目。首先，使用Spring Initializr生成项目骨架，然后在你的主类中添加一个简单的控制器：

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
}
```

启动应用程序后，你只需访问`http://localhost:8080/hello`，就能看到“Hello, World!”的响应。这种快速构建和测试的能力，使得开发者能够迅速迭代和验证想法，极大地提升了开发效率。

### Spring-Boot v3.3.8版本更新了什么

Spring-Boot v3.3.8版本主要更新了几个方面：修复了与Docker Compose和PostgreSQL相关的多个bug，改进了文档以更好地支持外部类型的描述和默认值元数据，更新了多个依赖项，包括ActiveMQ、FreeMarker和Postgresql等，以确保更好的性能和兼容性。

### 更新日志

## 🐞 Bug 修复
- 使用Bitnami PostgreSQL镜像与Docker Compose时，POSTGRESQL_USERNAME和POSTGRESQL_DATABASE被忽略。
- docker compose ps由于未知的--orphans标志在2.23或更早版本中失败。
- 构建信息时间戳被截断到秒。
- 用于SSL重载的FileWatcher不支持符号链接。
- BindableRuntimeHintsRegistrar应处理TypeNotPresentException。

## 📔 文档
- 文档说明@ConfigurationProperties注解处理器无法为外部类型生成描述和defaultValue元数据。
- 修复management.metrics.graphql.autotime.enabled的描述。
- 文档支持'base64:'前缀。
- 更新支持的监控系统中的OpenTelemetry部分以参考OTLP。
- DataSourceBuilder的Javadoc未引用所有支持的类型。
- Jakarta Messaging的Javadoc链接无效。
- Maven插件参考文档中的段落HTML标签按原样呈现。
- jakarta.xml.bind的Javadoc链接无效。
- 文档仍然有对'layertools'的引用。
- ConstructorBinding的Javadoc不应使用markdown格式。

## 🔨 依赖项升级
- 升级到ActiveMQ 6.1.5。
- 升级到FreeMarker 2.3.34。
- 升级到Infinispan 15.0.12.Final。
- 升级到Jersey 3.1.10。
- 升级到jOOQ 3.19.18。
- 升级到Logback 1.5.16。
- 升级到Micrometer 1.13.10。
- 升级到Micrometer Tracing 1.3.8。
- 升级到Netty 4.1.117.Final。
- 升级到Postgresql 42.7.5。
- 升级到Reactor Bom 2023.0.14。
- 升级到Spring Data Bom 2024.0.8。
- 升级到Spring Pulsar 1.1.8。

### 总结

在Spring-Boot v3.3.8版本中，开发团队专注于修复关键bug，改进文档的准确性，并升级了多个重要依赖项，以确保框架的稳定性和性能。这些更新不仅提升了开发者的使用体验，也为构建高效、可靠的应用程序提供了更强大的支持。