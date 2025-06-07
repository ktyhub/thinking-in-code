# feign OpenFeign 13.6
# 为什么要使用Feign

当微服务架构成为技术标配，每个开发者都在经历着这样的困境：每接入一个新服务，就要重复编写数百行HTTP调用代码；每次接口变更，都要像考古学家一样在代码堆里翻找调用点；每当需要添加重试机制，都不得不在业务逻辑中插入机械的循环代码。这种重复劳动正在吞噬开发者的创造力，而Feign就是打破这种魔咒的银弹。

# Feign是什么

Feign是一个声明式的HTTP客户端框架，开发者只需用Java接口定义服务契约，就能自动生成远程调用代码。它将RESTful服务调用简化为本地方法调用，支持负载均衡、服务熔断等特性，是构建微服务体系的瑞士军刀。

# 入门示例

**电商系统订单查询场景**  
假设订单服务需要调用用户服务获取买家信息：

```java
// 声明式接口
@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{userId}")
    User getUser(@PathVariable("userId") String userId);
}

// 注入即用
@Service
public class OrderService {
    @Autowired
    private UserClient userClient;

    public OrderDetail getOrderWithUser(String orderId) {
        Order order = orderRepository.findById(orderId);
        User user = userClient.getUser(order.getUserId()); // 如同调用本地方法
        return new OrderDetail(order, user);
    }
}
```

配置文件中只需添加：
```yaml
feign:
  client:
    config:
      default:
        connectTimeout: 5000
        readTimeout: 5000
```

# Feign OpenFeign 13.6版本更新

1. 集中修复6个跨站脚本(XSS)漏洞，强化安全防线  
2. 集成Feign Vertx模块到主项目，支持响应式编程范式  
3. 新增请求体可选配置，优化空参数处理机制  
4. 引入GZIP/Deflate压缩支持，提升HTTP/2传输效率  
5. 迁移CI到GitHub Actions，重构构建流水线

# 更新日志

## 主要变更

- 修复多个跨站脚本漏洞
- 优化持续集成工作流环境配置
- 将Feign Vertx模块整合至主项目
- 在所有模块应用代码重构规则
- 禁止feign-form模块测试写入日志
- 支持可选请求体配置
- 在功能概览中添加Vertx模块说明
- 修复路径样式表达式取值问题
- 为Http2Client添加压缩支持
- 启用本地构建缓存优化
- 迁移构建流水线至GitHub Actions
- 更新README文档
- 基于Vertx WebClient重构feign-vertx
- 修复Java 11项目中的JSON断言问题

## 依赖更新

- 升级Kotlin版本至2.0.21
- 更新Rewrite测试框架至2.20.1
- 提升Spring Boot Starter至3.3.5
- 优化Micrometer监控组件至1.14.0
- 升级Netty网络框架至4.1.115.Final
- 更新Jackson JSON处理器至2.18.1
- 提升Mockito测试框架至5.14.2

# 总结

13.6版本堪称安全加固里程碑，不仅系统性地修复了关键安全漏洞，更通过Vertx集成打开了响应式编程的大门。构建系统的现代化改造使持续交付更高效，而压缩支持和可选请求体等改进则显著提升了框架的工程实践价值。