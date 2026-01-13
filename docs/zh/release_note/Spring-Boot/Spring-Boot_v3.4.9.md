# Spring-Boot v3.4.9
## 为什么要使用Spring-Boot

在软件开发的世界里，我们常常面临一个残酷的矛盾：我们渴望快速构建强大、可靠的应用，却又被无尽的配置、依赖管理和部署复杂度所拖累。传统开发就像在迷宫中摸索，每一个转折都可能遇到新的陷阱——依赖冲突、配置错误、部署失败，这些不仅消耗时间，更吞噬着开发者的激情与创造力。

而Spring Boot的出现，就像一道划破黑暗的光。它不是为了增加复杂性，而是为了简化一切。它理解开发者的痛苦，通过自动配置、内置服务器和一站式依赖管理，将你从繁琐的配置中解放出来。你不再需要为每一个细节绞尽脑汁；Spring Boot已经为你铺平了道路。你可以专注于业务逻辑和创新，而不是环境的纠缠。选择Spring Boot，就是选择效率、简洁和现代开发的智慧。

## Spring-Boot是什么

Spring Boot是一个基于Spring框架的开源项目，旨在简化Spring应用的初始搭建和开发过程。它通过自动配置和约定优于配置的原则，让开发者能够快速创建独立、生产级的应用程序，而无需进行繁琐的XML配置。Spring Boot内置了嵌入式服务器（如Tomcat），并提供了一系列“starter”依赖，使得项目依赖管理变得更加简单和高效。

## 入门示例

想象一下，你要为一个创业公司开发一个简单的用户管理API。在传统Spring中，你可能需要配置DispatcherServlet、设置组件扫描、定义视图解析器等，整个过程繁琐且容易出错。而使用Spring Boot，你可以在几分钟内搭建起一个可运行的RESTful服务。

首先，通过Spring Initializr（https://start.spring.io/）生成一个项目，选择依赖：Spring Web。

然后，创建一个简单的控制器：

```java
@RestController
public class UserController {

    @GetMapping("/users")
    public List<String> getUsers() {
        return Arrays.asList("Alice", "Bob", "Charlie");
    }
}
```

编写主应用程序类：

```java
@SpringBootApplication
public class UserManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserManagementApplication.class, args);
    }
}
```

运行main方法，Spring Boot会自动启动嵌入式Tomcat服务器。访问http://localhost:8080/users，你将立即看到返回的用户列表。无需任何XML配置，无需手动部署，一切如此简单高效。

## Spring-Boot v3.4.9版本更新了什么

Spring Boot 3.4.9版本主要进行了错误修复、文档改进和依赖升级。该版本解决了Hazelcast健康指示器状态错误、Stream API导致的追踪代码高开销、SpringLiquibaseCustomizer可见性问题等多个关键bug。文档方面补充了Kotlin示例并修正了方法描述。依赖升级包括Hibernate 6.6.26.Final、Spring Framework 6.2.10、Tomcat 10.1.44等，以提升稳定性和性能。

## 更新日志

### 🐞 Bug 修复

- 修复了当 Hazelcast 因内存不足错误关闭时，健康指示器报告错误状态的问题。
- 修复了由于使用 Stream API 导致性能关键追踪代码开销过高的问题。
- 修复了 SpringLiquibaseCustomizer 在其定义的可见性范围之外暴露的问题。
- 修复了 OutputCapture 中的竞争条件可能导致数据过时的问题。
- 修复了标注有 `@Name` 的字段未检测到默认值的问题。
- 修复了在 spring.main.lazy-initialization=true 时，上下文重启后 JpaMetamodel#CACHE 中内存未释放的问题。
- 修复了在报告配置错误的 OAuth 2 资源服务器 JWT 公钥位置时属性名不正确的问题。
- 修复了在使用 `@Name` 与构造函数绑定属性时缺少元数据的问题。
- 修复了未能发现基元默认值不应导致记录其默认值的问题。

### 📔 文档

- 参考指南中的可观测性示例补充了 Kotlin 版本。
- 修正了配置元数据的 Kotlin 样本位于错误包中的问题。
- 将 SslOptions 的 getCiphers 和 getEnabledProtocols 方法描述与 `@returns` 对齐。
- 参考指南中的追踪样本补充了 Kotlin 版本。
- 修复了 spring-boot-test-autoconfigure 应像其他模块一样使用配置属性注解处理器的问题。
- 补充了未记录的 spring.test.webtestclient.timeout 属性文档。
- 补充了未记录的 spring.test.mockmvc 属性文档。
- 调整了 management.health.influxdb.enabled 的弃用级别。
- 改进了虚拟线程部分，提及 Java 24 中的变化。

### 🔨 依赖升级

- 升级至 Angus Mail 2.0.4。
- 升级至 Hibernate 6.6.26.Final。
- 升级至 Hibernate Validator 8.0.3.Final。
- 升级至 Infinispan 15.0.19.Final。
- 升级至 Jersey 3.1.11。
- 升级至 Jetty 12.0.25。
- 升级至 Jetty Reactive HTTPClient 4.0.11。
- 升级至 jOOQ 3.19.25。
- 升级至 Micrometer 1.14.10。
- 升级至 Micrometer Tracing 1.4.9。
- 升级至 MySQL 9.4.0。
- 升级至 Netty 4.1.124.Final。
- 升级至 Pulsar 3.3.8。
- 升级至 Reactor Bom 2024.0.9。
- 升级至 REST Assured 5.5.6。
- 升级至 Spring Authorization Server 1.4.5。
- 升级至 Spring Data Bom 2024.1.9。
- 升级至 Spring Framework 6.2.10。
- 升级至 Spring Kafka 3.3.9。
- 升级至 Spring LDAP 3.2.14。
- 升级至 Spring Pulsar 1.2.9。
- 升级至 Spring RESTDocs 3.0.5。
- 升级至 Spring Security 6.4.9。
- 升级至 Spring Session 3.4.5。
- 升级至 Tomcat 10.1.44。

## 总结

本次更新主要针对已知错误进行了修复，提升了系统的稳定性和性能；同时完善了文档内容，增强了用户体验；并通过升级关键依赖库，确保了框架的现代性和安全性。