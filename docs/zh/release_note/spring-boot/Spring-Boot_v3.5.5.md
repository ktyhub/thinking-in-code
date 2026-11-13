# Spring-Boot v3.5.5
### 为什么要使用Spring-Boot

你是否曾在深夜里与繁琐的配置搏斗，只为让一个简单的Web服务跑起来？你是否厌倦了无数个XML文件和永无止境的依赖冲突？传统Spring框架的强大毋庸置疑，但它的复杂性却像一座高墙，将无数开发者挡在快速交付的门外。这就是Spring-Boot诞生的意义——它不仅是技术的进化，更是开发体验的革命。它撕掉了繁琐的配置外衣，让你专注于业务逻辑而非环境搭建。当你受困于传统开发的泥沼时，Spring-Boot就是那把带你突围的利刃。

### Spring-Boot是什么

Spring-Boot是Spring家族中的一款开创性框架，旨在简化Spring应用的初始搭建和开发过程。它通过自动配置和约定优于配置的原则，让开发者仅用最少的代码就能快速构建生产级的独立应用。本质上，它是一个“开箱即用”的工具集，内嵌Web服务器、提供强大的Starter依赖管理，并集成了丰富的监控和诊断功能。

### 入门示例

想象你要为一个电商平台开发用户查询接口。传统方式可能需要配置DispatcherServlet、加载ApplicationContext、设置数据源和事务管理器——仅起步就要耗费数小时。而使用Spring-Boot，你只需：

1. 通过 [start.spring.io](https://start.spring.io/) 生成项目基础结构，选择「Web」依赖
2. 创建核心类：
```java
@SpringBootApplication
public class UserApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class, args);
    }
}

@RestController
class UserController {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return new User(id, "Spring-Boot实战用户");
    }
}

record User(Long id, String name) {}
```
3. 运行主类，访问 http://localhost:8080/users/1  
无需配置服务器、无需编写XML，30秒内即可获得一个可运行的REST服务。这种效率提升正是Spring-Boot被全球开发者推崇的原因。

### Spring-Boot v3.5.5版本更新内容

该版本主要包含依赖项升级和关键问题修复：  
1. 同步升级至Spring Framework 6.2.10、Spring Security 6.5.3等核心框架  
2. 修复Hazelcast内存错误时健康状态误报问题  
3. 优化追踪代码性能，减少Stream API带来的开销  
4. 修正OAuth2资源服务器配置错误的属性名提示  
5. 完善Kotlin样例代码包结构及虚拟线程文档

### 更新日志

#### 🐞 Bug 修复

- Hazelcast 健康指示器在因内存不足错误关闭时报告错误状态 #46909
- 由于使用 Stream API，性能关键的追踪代码开销过高 #46844
- SpringLiquibaseCustomizer 在其定义的可见范围外被暴露 #46758
- OutputCapture 中的竞争条件可能导致数据过时 #46721
- 自动配置的 WebClient 不再使用上下文中的 ReactorResourceFactory #46673
- 带有 `@Name` 注解的字段未检测到默认值 #46666
- 在构造函数绑定的属性中使用 `@Name` 时缺少元数据 #46663
- 缺少 Spring Authorization Server PAR 端点的属性 #46641
- 报告配置错误的 OAuth 2 资源服务器 JWT 公钥位置时属性名不正确 #46636
- 在 spring.main.lazy-initialization=true 时，JpaMetamodel#CACHE 中的上下文重启后内存未释放 #46634
- 自动配置的 MockMvc 忽略 `@FilterRegistration` 注解 #46605
- 未能发现基本类型默认值不应导致记录其默认值 #46561

#### 📔 文档

- 配置元数据的 Kotlin 示例位于错误的包中 #46857
- 参考指南中的可观察性示例缺少 Kotlin 版本 #46798
- 将 SslOptions 的 getCiphers 和 getEnabledProtocols 方法描述与 `@returns` 对齐 #46769
- 参考指南中的追踪示例缺少 Kotlin 版本 #46767
- 改进虚拟线程部分，提及 Java 24 中的变化 #46610
- 未记录 spring.test.webtestclient.timeout 属性 #46588
- spring-boot-test-autoconfigure 应像其他模块一样使用配置属性注解处理器 #46585
- 调整 management.health.influxdb.enabled 的弃用级别 #46580
- 未记录 spring.test.mockmvc 属性 #46578

#### 🔨 依赖升级

- 升级至 Angus Mail 2.0.4 #46725
- 升级至 AssertJ 3.27.4 #46726
- 升级至 Byte Buddy 1.17.7 #46883
- 升级至 Couchbase Client 3.8.3 #46794
- 升级至 Elasticsearch Client 8.18.5 #46830
- 升级至 Hibernate 6.6.26.Final #46884
- 升级至 Hibernate Validator 8.0.3.Final #46728
- 升级至 HikariCP 6.3.2 #46729
- 升级至 Jersey 3.1.11 #46730
- 升级至 Jetty 12.0.25 #46831
- 升级至 Jetty Reactive HTTPClient 4.0.11 #46885
- 升级至 jOOQ 3.19.25 #46808
- 升级至 MariaDB 3.5.5 #46779
- 升级至 Maven Javadoc Plugin 3.11.3 #46886
- 升级至 Micrometer 1.15.3 #46701
- 升级至 Micrometer Tracing 1.5.3 #46702
- 升级至 MySQL 9.4.0 #46732
- 升级至 Netty 4.1.124.Final #46832
- 升级至 Pulsar 4.0.6 #46733
- 升级至 Reactor Bom 2024.0.9 #46703
- 升级至 REST Assured 5.5.6 #46849
- 升级至 Spring Authorization Server 1.5.2 #46704
- 升级至 Spring Data Bom 2025.0.3 #46705
- 升级至 Spring Framework 6.2.10 #46706
- 升级至 Spring Kafka 3.3.9 #46871
- 升级至 Spring LDAP 3.3.3 #46707
- 升级至 Spring Pulsar 1.2.9 #46708
- 升级至 Spring RESTDocs 3.0.5 #46920
- 升级至 Spring Security 6.5.3 #46709
- 升级至 Spring Session 3.5.2 #46710
- 升级至 Tomcat 10.1.44 #46734

### 总结

本次更新聚焦于三大维度：通过关键Bug修复提升运行时稳定性，完善文档减少使用误区，并系统性升级核心依赖以保持生态兼容性。这些改进持续强化了Spring-Boot作为企业级开发基石的可靠性。