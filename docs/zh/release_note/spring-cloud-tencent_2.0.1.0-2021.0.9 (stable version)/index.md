# spring-cloud-tencent 2.0.1.0-2021.0.9 (stable version)
### 为什么要使用spring-cloud-tencent  
当微服务架构成为互联网企业的标配，开发者却在「配置地狱」和「服务雪崩」的泥潭中越陷越深。传统的Spring Cloud生态虽强大，却像一台需要手动组装的精密仪器——服务发现、配置中心、熔断限流需逐一集成，版本兼容性问题频发，更遑论灰度发布、分布式事务等高阶需求。  

而spring-cloud-tencent如同一位全栈工程师，将腾讯十年级分布式系统实战经验封装为开箱即用的工具链。它不满足于「能用」，而是追求「极简」：一键接入北极星（Polaris）服务治理体系，让配置动态生效像呼吸一样自然，让熔断规则像智能导航般自动规避流量高峰。当你的竞品还在为服务调用超时焦头烂额时，你的团队已通过「零代码侵入」实现全链路灰度——这就是技术选择的降维打击。  

---

### spring-cloud-tencent是什么  
它是腾讯开源的Spring Cloud增强工具包，深度整合北极星（Polaris）服务治理能力，提供配置中心、服务注册发现、熔断限流等微服务核心功能的企业级实现。通过标准化Starter组件，开发者可快速构建高可用、易观测的分布式系统，获得与腾讯内部同源的云原生技术支撑。

---

### 入门示例  
**场景**：电商系统需实现「库存服务」动态配置热更新，并在订单服务调用时自动熔断。  

**步骤**：  
1. 添加依赖（pom.xml）  
```xml
<dependency>
    <groupId>com.tencent.cloud</groupId>
    <artifactId>spring-cloud-starter-tencent-polaris-config</artifactId>
</dependency>
<dependency>
    <groupId>com.tencent.cloud</groupId>
    <artifactId>spring-cloud-starter-tencent-circuitbreaker</artifactId>
</dependency>
```

2. 配置北极星地址（bootstrap.yml）  
```yaml
spring:
  cloud:
    polaris:
      address: grpc://127.0.0.1:8091
```

3. 动态读取库存阈值  
```java
@RefreshScope
@ConfigurationProperties(prefix = "inventory")
public class InventoryConfig {
    private Integer threshold; // 配置中心修改值后自动生效
}
```

4. 熔断保护订单服务  
```java
@CircuitBreaker(name = "orderService")
@GetMapping("/create")
public String createOrder() {
    // 调用库存服务时自动触发熔断逻辑
}
```

---

### spring-cloud-tencent 2.0.1.0-2021.0.9版本更新  
1. **配置中心**：修复动态监听异常，优化RefreshScope刷新逻辑  
2. **熔断增强**：支持单配置刷新、默认实例级熔断规则、指标可视化  
3. **事件体系**：新增北极星事件监听，服务发现与统计事件联动  
4. **网关优化**：修复上下文路由404问题，完善Feign预加载机制  
5. **依赖升级**：Spring Boot升级至2.7.18，增强稳定性  

---

### 更新日志  

#### 依赖版本  
- Spring Cloud Tencent: 2.0.1.0-2021.0.9  
- Spring Cloud: 2021.0.9  
- Spring Boot: 2.7.18  
- Spring Framework: 5.3.39  

#### 完整更新记录  
[查看版本差异](https://github.com/Tencent/spring-cloud-tencent/compare/2.0.0.0-2021.0.9...2.0.1.0-2021.0.9)  

#### 功能增强  
**配置中心**  
- 修复TSF配置监听问题  
- 支持配置变更事件驱动  

**熔断器**  
- 实现插件化熔断规则  
- 新增熔断指标上报功能  
- 支持默认实例级熔断规则  

**上下文**  
- 集成北极星事件体系  
- 优化第三方依赖管理  
- 增强服务发现事件统计  

**插件**  
- 网关上下文支持默认值预加载  
- 修复网关熔断计数异常  

**RPC增强**  
- 优化请求上下文序列化逻辑  

#### 问题修复  
- 解决JavaAgent限流协议兼容性问题  

#### 文档/工程  
- 简化GitHub Actions配置  
- 更新JDK版本说明  

#### 升级指南  
该版本与历史版本兼容，只需升级`spring-cloud-tencent-dependencies`依赖。如需调整Spring Cloud版本，请参考[版本管理文档](https://github.com/Tencent/spring-cloud-tencent/wiki/Spring-Cloud-Tencent-%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86)同步修改其他依赖。  

---

### 版本更新总结  
2.0.1.0版本聚焦稳定性与功能深度：配置中心修复关键监听问题，熔断器新增指标可视化与规则扩展，网关模块增强上下文处理能力，同时全面升级底层依赖版本。此次更新标志着spring-cloud-tencent向生产级可用性迈进关键一步。