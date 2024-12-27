# spring-cloud-tencent 2.0.0.0-Hoxton.SR12 (stable version)
### 为什么要使用spring-cloud-tencent

在当今快速发展的技术环境中，企业面临着如何高效管理微服务架构的挑战。传统的解决方案往往无法满足快速迭代和高可用性的需求，而这正是spring-cloud-tencent所能解决的矛盾。它不仅提供了强大的服务发现和配置管理功能，还能与腾讯云的生态系统无缝集成，帮助开发者在复杂的微服务环境中游刃有余。选择spring-cloud-tencent，意味着选择了一条通往高效、灵活和可扩展的微服务之路。

### spring-cloud-tencent是什么

spring-cloud-tencent是一个基于Spring Cloud的微服务框架，旨在为开发者提供一套完整的解决方案，以便在腾讯云环境中构建、部署和管理微服务。它集成了服务发现、配置管理、负载均衡等功能，帮助开发者更轻松地构建高可用的分布式系统。

### 入门示例

假设你正在开发一个电商平台，平台需要处理用户的订单、支付和物流等多个微服务。使用spring-cloud-tencent，你可以轻松地实现服务发现和负载均衡。比如，你可以通过配置中心集中管理各个微服务的配置，确保在不同环境下的灵活性。同时，利用服务网关，你可以实现统一的API入口，简化前端与后端的交互。以下是一个简单的代码示例：

```java
@SpringBootApplication
@EnableDiscoveryClient
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
```

在这个示例中，我们启用了服务发现功能，使得订单服务能够在微服务架构中自动注册和发现。

### spring-cloud-tencent 2.0.0.0-Hoxton.SR12 (stable version)版本更新了什么

在最新的2.0.0.0-Hoxton.SR12版本中，spring-cloud-tencent引入了多个重要特性和增强，包括对腾讯云TSF的支持、配置SDK的独立化、对Consul配置的支持、修复了路由属性加载的bug，以及增强了API的熔断器功能。这些更新旨在提升框架的稳定性和可用性。

### 更新日志

#### 依赖版本
- Spring Cloud Tencent: 2.0.0.0-Hoxton.SR12
- Spring Cloud: Hoxton.SR12
- Spring Boot: 2.3.12.RELEASE
- Spring Framework: 5.2.25.RELEASE

#### 完整更新日志
[1.13.4-Hoxton.SR12...2.0.0.0-Hoxton.SR12](https://github.com/Tencent/spring-cloud-tencent/compare/1.13.4-Hoxton.SR12...2.0.0.0-Hoxton.SR12)

#### 特性 / 增强
- **发现**: 增加零保护，支持腾讯云TSF。
- **配置**: 重新构建配置SDK上下文，支持Consul配置及数据。
- **路由**: 修复附近路由属性加载bug，支持TSF路由，升级附近路由并添加命名空间附近路由。
- **速率限制**: 支持并发速率限制。
- **熔断器**: 升级API熔断器。
- **合约**: 修复用户使用自定义OpenAPI bean时应用启动失败的问题。
- **插件**: 增加追踪报告支持，支持无损配置及热启动，增加管理HTTP处理程序，升级追踪插件。

#### 修复
- 修复PolarisCircuitBreakerConfiguration在通过通配符API调用时未清除的问题。
- 修复来自Actuator名称的警告。

#### 如何升级
此版本与之前的相应版本兼容，只需将spring-cloud-tencent-dependencies版本升级到此版本。如果需要更改Spring Cloud版本，请参考文档进行同步修改。

### 总结

在spring-cloud-tencent 2.0.0.0-Hoxton.SR12版本中，开发者将受益于多个新特性和修复，特别是在服务发现、配置管理和熔断器功能方面的增强。这些更新不仅提升了框架的稳定性，也为开发者提供了更灵活的工具，以应对日益复杂的微服务架构。