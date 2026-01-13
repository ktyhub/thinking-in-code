# spring-cloud-config 5.0.0
## 为什么要使用 Spring Cloud Config

想象一下这样的场景：深夜，警报骤响，你的十几个微服务因一个错误的数据库连接字符串而相继崩溃。你不得不逐个登录服务器，在密密麻麻的配置文件中搜寻、修改、重启。灯火通明中，团队精疲力竭，而恢复时间却以小时计算。这不是灾难片桥段，而是微服务架构下，配置管理失控后每天都可能上演的现实。

这就是**配置地狱**。在微服务世界中，服务数量激增，配置散落在各处——属性文件、环境变量、甚至硬编码在代码中。任何细微的更改，都意味着一次充满风险的“扫雷”行动。你渴望一种力量，能将所有配置置于一处，实现统一管理、实时推送与安全管控。你渴望的，正是 Spring Cloud Config。它不是为了增加一个新组件，而是为了终结这场混乱，让你的团队从提心吊胆的配置运维中解放出来，专注于创造真正的业务价值。使用它，不是为了追赶潮流，而是为了夺回对系统稳定性的掌控权。

## Spring Cloud Config 是什么

简单来说，**Spring Cloud Config** 是微服务架构的“中央控制塔”。它是一个配置管理工具，允许你将所有微服务的配置文件（如 application.yml）集中存储在一个地方（例如 Git 仓库），并提供服务器和客户端支持。

*   **服务端（Config Server）**：一个独立的微服务，连接着你的 Git、SVN 等配置仓库。它对外提供 RESTful API，用于获取配置。
*   **客户端（Config Client）**：你的各个业务微服务。它们启动时或运行时，会向 Config Server 请求属于自己的配置信息。

如此一来，你的配置便拥有了“单一事实来源”，实现了集中化、版本化、环境分离（dev, test, prod）的管理。它就像一本所有服务都认可的、随时可查阅且唯一准确的“权威指南”。

## 入门示例

**真实场景**：假设你正在开发一个简单的电商系统，包含“用户服务”和“订单服务”。两个服务都需要连接同一个 Redis 缓存集群，并且这个 Redis 的地址在未来可能会变更。

**没有统一配置时**：你需要在两个服务的 `application.yml` 里分别写下 `redis.host: 192.168.1.100`。某天，Redis 迁移到了新机房，地址变了。你必须同时修改两个项目，重新打包、部署，过程繁琐且易出错。

**使用 Spring Cloud Config 后**：

**1. 创建配置仓库**
在 Git（如 GitHub、Gitee 或自建 GitLab）上创建一个名为 `microservice-config` 的仓库。在里面为不同环境（开发、生产）创建配置文件：
```
microservice-config/
├── user-service.yml        # 用户服务的通用配置
├── order-service.yml       # 订单服务的通用配置
├── user-service-dev.yml    # 用户服务开发环境特有配置
├── user-service-prod.yml   # 用户服务生产环境配置
└── application.yml         # 所有服务的全局配置
```
在 `application.yml` 中，集中定义 Redis 地址：
```yaml
spring:
  redis:
    host: redis-cluster.company.com
    port: 6379
```

**2. 构建配置中心（Config Server）**
使用 Spring Initializr 创建一个新项目，引入 `Spring Cloud Config Server` 依赖。
在主应用类上添加 `@EnableConfigServer` 注解：
```java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```
在 `application.yml` 中配置 Git 仓库地址：
```yaml
server:
  port: 8888
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          uri: https://gitee.com/your-account/microservice-config.git
```

**3. 改造微服务客户端（Config Client）**
在“用户服务”中，引入 `Spring Cloud Config Client` 依赖。
将其 `application.yml` 重命名为 `bootstrap.yml`（该文件优先级更高，用于引导阶段获取配置），并添加配置中心地址：
```yaml
spring:
  application:
    name: user-service  # 这个名字对应配置仓库中的 `user-service.yml`
  cloud:
    config:
      uri: http://localhost:8888  # Config Server 地址
      profile: dev  # 指定激活的环境
```
现在，“用户服务”启动时，会从 Config Server 获取它自己的配置以及全局的 `application.yml` 配置。Redis 地址被统一管理，一处修改，所有依赖它的服务在下次启动或刷新时都能自动获取新值。

## Spring Cloud Config 5.0.0 版本更新了什么

5.0.0 版本是一个与 Spring Boot 3.0 对齐的重大升级。其主要更新包括：
1.  **基线升级**：基于 Spring Boot 3.0 和 Spring Framework 6.0 构建，全面拥抱 Jakarta EE 9+（包名从 `javax` 改为 `jakarta`）。
2.  **JDK 要求**：最低需要 Java 17 或以上版本。
3.  **新特性与改进**：引入了对 Apache Commons Text 的支持以增强属性解析，改进了与 HashiCorp Vault 的集成。
4.  **配置导入**：支持使用 `spring.config.import` 属性来连接到配置服务器，提供了更现代化的配置方式。
5.  **依赖更新**：升级了相关依赖，并修复了之前版本的一些问题，提升了稳定性和安全性。

## 更新日志

### ❤️ 贡献者
感谢所有为本次发布做出贡献的开发者们。

## 总结
以上更新记录简要致谢了为 Spring Cloud Config 新版本贡献代码的开发者与自动化工具，这体现了开源项目由社区驱动和协作发展的核心精神。