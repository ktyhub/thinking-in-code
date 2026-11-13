# Spring-Boot v3.3.11
# 为什么要使用Spring-Boot

在代码的海洋里，每位开发者都曾是「配置炼金术士」。你永远记得那些被XML配置文件支配的深夜——颤抖着双手在applicationContext.xml中添加bean定义，在web.xml中编织过滤器链，稍有不慎就会触发「NoSuchBeanDefinitionException」的死亡诅咒。直到某天，你在POM文件中添加了spring-boot-starter-web依赖，发现应用竟能自动装配Tomcat服务器，那一刻仿佛目睹了摩西分海的神迹。

Spring Boot不是框架，是开发者与配置地狱的和解协议。它用约定优于配置的哲学，将原本需要200行XML的JPA集成简化为一句spring.datasource.url。当竞争对手还在争论该用Jetty还是Undertow时，你的应用早已通过内嵌容器启动，连/actuator健康检查接口都为你准备好了。这就是为什么全球76%的Java开发者选择Spring Boot——不是因为它完美，而是它理解程序员的痛。

# Spring-Boot是什么

Spring Boot是Java世界的瑞士军刀，将复杂的Spring生态封装成即插即用的「starter」模块。它通过自动配置机制，只需一个@SpringBootApplication注解，就能智能装配数据源、Web MVC框架、安全模块等组件。内嵌Tomcat/Jetty服务器让「java -jar」直接启动Web应用成为可能，而starter-parent提供的依赖管理，则终结了版本冲突的噩梦。

# 入门示例

**场景**：为智能咖啡机开发REST API，支持远程下单和冲泡状态查询

1. 访问[start.spring.io](https://start.spring.io)，勾选Web、JPA、H2依赖，生成项目
2. 创建咖啡实体：
```java
@Entity
public class Coffee {
    @Id
    @GeneratedValue
    private Long id;
    private String name; // 如"量子拿铁"
    private BrewStatus status = BrewStatus.PENDING;
}
```
3. 开发魔幻控制器：
```java
@RestController
public class CoffeeController {
    @PostMapping("/brew")
    public Coffee brewCoffee(@RequestBody String name) {
        return coffeeRepository.save(new Coffee(name));
    }

    @GetMapping("/status/{id}")
    public String checkStatus(@PathVariable Long id) {
        return coffeeRepository.findById(id)
               .map(c -> "您的"+c.getName()+"正在曲率驱动冲泡中")
               .orElse("该咖啡已跨越事件视界");
    }
}
```
4. 运行mvn spring-boot:run，访问http://localhost:8080/brew
这个示例在30行代码内实现了数据库集成、REST端点、JSON序列化，甚至包含H2控制台（访问/h2-console），这就是Spring Boot的魔法。

# Spring-Boot v3.3.11版本更新

本次更新聚焦稳定性提升：修复Podman构建原生镜像的目录权限问题；解决Hikari连接池在使用未知驱动时的NPE崩溃；优化JMX集成中的BeanPostProcessor警告。同步升级Spring生态至最新补丁版本（Spring Framework 6.1.19/Security 6.3.9），并改进OAuth2授权服务器的条件装配逻辑。文档方面强化了多执行器配置说明，修正WebFlux安全文档的错误类引用。

# 更新日志

## 🐞 缺陷修复

- 修复在Podman上构建原生镜像时的目录权限问题
- 修正MessageSourceMessageInterpolator未替换参数的问题
- 解决使用JMX时IntegrationMbeanExporter的BeanPostProcessor警告
- 修复OAuth2AuthorizationServerJwtAutoConfiguration的错误条件注解
- 避免ImagePlatform引发"OS must not be empty"异常
- 补全MongoDB Kotlin协程驱动的依赖管理
- 优化TypeUtils对泛型相同名称不同位置的处理
- 修复Hikari在未知驱动JDBC URL时的空指针问题
- 解决jOOQ在空数据库名时的异常翻译问题
- 改进Hikari数据源类名与驱动类名的兼容性
- 修正Neo4jReactiveDataAutoConfiguration的Bean依赖假设
- 优化EmbeddedLdapAutoConfiguration的销毁机制
- 调整DataSourceTransactionManager自动配置顺序
- 增强SSL配置对符号链接文件变更的监控

## 📔 文档改进

- 将`@Component`注解转换为Javadoc链接
- 修正buildpacks.io文档链接
- 转义spring-application.adoc中的星号
- 在授权服务器示例中展示令牌属性用法
- 修正WebFlux安全文档的错误Servlet类引用
- 新增Styra OPA Spring Boot SDK参考
- 明确多Executor场景下的任务执行逻辑
- 澄清多环境profile表达式的使用规范
- 移除未实际管理的依赖坐标说明
- 优化SpringProfileAction的Javadoc
- 补充metrics端点用途说明

## 🔨 依赖升级

- AspectJ 1.9.24
- Jaybird 5.0.7.java11 
- Jetty 12.0.19
- jOOQ 3.19.22
- Lombok 1.18.38
- MariaDB 3.3.4
- Micrometer 1.13.13
- Micrometer Tracing 1.3.11
- Neo4j Driver 5.28.4
- Reactor 2023.0.17
- Spring生态组件全系升级（AMQP/Authorization Server/Data/Security等）
- Tomcat 10.1.40

# 版本总结

Spring Boot 3.3.11作为维护版本，重点修复了容器构建、数据源管理、文档指引等23处关键问题，同步升级全栈依赖至最新稳定版本。此次更新如同给代码引擎更换了精密的涡轮增压器——既强化了原生镜像构建的兼容性，又优化了Hikari连接池的异常处理机制，更通过详尽的文档修正让开发者少踩坑。对于生产环境用户，这是保持系统稳健运行的必选升级。