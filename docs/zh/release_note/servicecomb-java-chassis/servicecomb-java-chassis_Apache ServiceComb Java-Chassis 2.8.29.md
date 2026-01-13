# servicecomb-java-chassis Apache ServiceComb Java-Chassis 2.8.29
# 为什么要使用servicecomb-java-chassis

你是否曾被困在微服务的迷宫里？每个服务像孤岛一样各自为政，通信协议五花八门，监控和治理如同盲人摸象。日复一日，你在服务拆分的自由与系统复杂度的牢笼之间挣扎。这时，你需要的不是又一个框架，而是一张地图、一位向导——ServiceComb Java-Chassis 正是为此而生。

它直击微服务开发的本质矛盾：我们追求敏捷与自治，却不得不面对由此衍生的混乱与维护负担。Java-Chassis 以一套优雅的架构，将你从协议适配、服务发现、熔断限流、观测运维的泥潭中解放。它不添加束缚，而是赋予秩序，让你在享受微服务带来的迭代速度的同时，掌控全局的稳定性。选择它，意味着选择在创新的道路上轻装前行，而非背负沉重的技术债踉跄跋涉。

# ServiceComb Java-Chassis是什么

Apache ServiceComb Java-Chassis 是一个开源微服务开发框架。它旨在帮助开发者快速构建基于 Java 的微服务应用，并提供了服务注册发现、契约化通信、负载均衡、熔断容错、分布式事务等一系列开箱即用的分布式能力。其核心是“契约先行”理念，通过定义服务接口契约，自动生成客户端和服务端代码，确保服务间通信的一致性，简化开发与集成。

# 入门示例

**真实场景**：假设我们正在开发一个简单的电商订单系统，包含“用户服务”和“订单服务”。订单服务需要调用用户服务来获取用户信息。

**开发示例**：

1.  **定义契约接口**（在订单服务模块中）：
    使用 `@RestSchema` 注解定义用户服务的客户端接口。

    ```java
    @RestSchema(schemaId = "userApi")
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public interface UserService {
        @GET
        @Path("/{id}")
        User getUser(@PathParam("id") String id);
    }

    public class User {
        private String id;
        private String name;
        // getters and setters...
    }
    ```

2.  **实现服务提供者**（在用户服务应用中）：
    实现相同的接口，并暴露为 REST 端点。

    ```java
    @RestSchema(schemaId = "userApi")
    public class UserServiceImpl implements UserService {
        @Override
        public User getUser(String id) {
            // 从数据库查询用户逻辑
            return new User(id, "张三");
        }
    }
    ```

3.  **注入并调用**（在订单服务中）：
    通过 `@RpcReference` 注入客户端，像调用本地方法一样进行远程调用。

    ```java
    @RestController
    public class OrderController {
        @RpcReference(microserviceName = "user-service", schemaId = "userApi")
        private UserService userService;

        @GetMapping("/order/{orderId}")
        public Order getOrder(@PathVariable String orderId) {
            // 业务逻辑...
            User user = userService.getUser("user123"); // 远程调用
            return new Order(orderId, user);
        }
    }
    ```

4.  **配置与运行**：
    在 `application.yml` 中配置服务中心（如 ServiceCenter）地址，启动应用后，服务会自动注册与发现。

# Apache ServiceComb Java-Chassis 2.8.29版本更新概要

本次2.8.29版本是一个维护性更新，主要包含两项重要改动。一是升级了内嵌的Tomcat核心组件至9.0.108版本，这通常意味着引入了漏洞修复、性能改进或兼容性更新。二是修复了一个在启用RBAC（基于角色的访问控制）认证的双引擎灾备场景下，微服务无法注册的问题，提升了框架在特定安全和高可用配置下的稳定性。这些更新旨在确保框架基础组件的安全性与特定复杂环境下的可靠性。

# 更新日志

## What‘s Changed

*   [#4985] 将 org.apache.tomcat.embed:tomcat-embed-core 升级至 9.0.108。
*   [#5013] 修复了在双引擎灾备场景下启用 RBAC 认证时微服务无法注册的问题。

**完整更新日志**：[2.8.28...2.8.29](https://github.com/apache/servicecomb-java-chassis/compare/2.8.28...2.8.29)

# 总结

综上所述，2.8.29版本的更新虽看似细微，却至关重要。它既通过升级底层依赖来巩固安全基石，又精准修复了特定高可用安全场景下的关键缺陷，体现了项目对生产环境稳定性和安全性的持续守护。