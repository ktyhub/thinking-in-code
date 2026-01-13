# spring-cloud-gateway 5.0.0
## 为什么要使用spring-cloud-gateway

想象一下，你正带领一支舰队航行在数字海洋中。每一艘船都是一个微服务，它们敏捷、独立，但同时也带来了新的风暴——服务发现、负载均衡、安全防护、流量管控的复杂性，让每一次航行都充满不可预知的挑战。这时，你需要的不再是更多的水手，而是一座智慧的灯塔，一个统一的指挥中心。这就是 Spring Cloud Gateway 登场的时刻。

在微服务的浪潮中，我们常常陷入一种矛盾：追求服务的极致解耦与独立部署，却不得不面对随之而来的交互混乱与运维黑洞。旧式的、散落在各处的路由规则和过滤器，就像海图上相互矛盾的标记，让系统在流量洪峰前变得脆弱不堪。Spring Cloud Gateway 的出现，正是为了终结这种无序。它并非仅仅是另一条可选的路由，而是为你提供了构建强大、优雅、可观测的 API 边界的蓝图，将混沌拒之门外，让创新的航路清晰而稳固。

## spring-cloud-gateway是什么

Spring Cloud Gateway 是 Spring 官方基于 Project Reactor 和 Spring Boot 2.x 构建的 API 网关。它就像您所有微服务的前置“智能路由器”，为进入系统的请求提供路由、监控、安全、限流等关键能力。其核心思想是：所有的请求先经过网关，由网关决定将它们指向何处，并可在途中进行各种加工和处理。

## 入门示例

**场景**：假设我们正在开发一个简易的电商平台，包含用户服务 (`user-service`) 和商品服务 (`product-service`)。我们希望对外提供统一的 API 入口 (`api.example.com`)，并将请求智能地转发到对应的后端服务。

**开发示例**：

1.  **创建项目**：使用 Spring Initializr 创建一个新的 Spring Boot 项目，添加 `Spring Cloud Gateway` 和 `Discovery Client` (如 Nacos) 依赖。

2.  **配置路由**：在 `application.yml` 中定义路由规则。
    ```yaml
    spring:
      cloud:
        gateway:
          routes:
            - id: user-service-route # 路由ID
              uri: lb://user-service # 目标服务地址，lb://表示从注册中心负载均衡
              predicates: # 断言：匹配条件
                - Path=/api/users/**
              filters:
                - StripPrefix=1 # 过滤器：去除路径中的第一个前缀（/api）
            - id: product-service-route
              uri: lb://product-service
              predicates:
                - Path=/api/products/**
              filters:
                - StripPrefix=1
                - AddRequestHeader=X-Request-Color, Blue # 过滤器：添加请求头
    ```

3.  **启动与验证**：启动网关和你的微服务。现在，访问 `http://api.example.com:8080/api/users/1` 的请求会被网关自动转发到 `user-service` 的 `/users/1` 接口；访问 `/api/products/123` 的请求则会被转发到 `product-service`，并在请求中附加上一个 `X-Request-Color: Blue` 的头部。

这个简单的示例展示了网关最核心的路由与过滤功能，为构建复杂的流量治理策略奠定了基础。

## spring-cloud-gateway 5.0.0版本更新了什么

Spring Cloud Gateway 5.0.0 版本主要适配了 Spring Framework 6 和 Spring Boot 3，标志着其对 Jakarta EE 9+（包名从 `javax` 改为 `jakarta`）的全面支持。此版本移除了对已弃用 Netty 访问日志配置的支持，并引入了新的 `Forwarded` 头部处理机制。它要求运行环境至少为 Java 17，是一次面向未来技术栈的重大升级。

## 更新日志

### 🐞 Bug 修复

*   修复了 `Bucket4jFilterFunctions.rateLimit()` 方法中出现的 `ClassCastException` 异常 [#3983](https://github.com/spring-cloud/spring-cloud-gateway/issues/3983)。
*   修复了 Spring Cloud Gateway Proxyexchange Webmvc 构件缺少配置元数据文件的问题 [#3979](https://github.com/spring-cloud/spring-cloud-gateway/issues/3979)。

## 总结

本次更新主要集中在对两个关键问题的修复上，一是解决了在特定条件下使用 Bucket4j 限流功能时可能引发的类型转换异常，二是补充了 WebMVC 集成模块中缺失的配置元数据文件，提升了项目的稳定性和开发体验。