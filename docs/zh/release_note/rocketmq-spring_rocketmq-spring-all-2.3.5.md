# rocketmq-spring rocketmq-spring-all-2.3.5
### 为什么要使用rocketmq-spring

在微服务的星辰大海中，你是否曾陷入这样的困境：业务逻辑如野草般疯长，而系统模块间的通信却成了拖慢整个航速的枷锁？你渴望一种轻盈、可靠且威力巨大的消息传递方式，就像为你的应用安装上一枚精心设计的火箭推进器。这就是 **RocketMQ-Spring** 登场的时刻。

传统的集成方式往往意味着繁琐的配置、僵硬的代码耦合，以及令人头疼的容错处理。开发者不得不在业务创新与基础设施的泥沼中艰难跋涉。而 RocketMQ-Spring 的诞生，正是为了粉碎这一矛盾。它并非另一个增加复杂度的框架，而是将久经沙场的 RocketMQ 消息队列的强大能力，化为 Spring 生态中自然流淌的血液。它让你用声明式的优雅注解，替代冗长的样板代码；用熟悉的 Spring 风格，驾驭高并发、高可用的异步通信。选择它，意味着你将从底层通信的琐碎中彻底解放，将全部创造力倾注于构建真正引人入胜的业务逻辑，让你的应用一飞冲天。

### rocketmq-spring是什么

简而言之，**RocketMQ-Spring** 是 Apache RocketMQ 官方提供的 Spring Boot/Spring 框架集成项目。它将 RocketMQ 的客户端能力完美地融入到 Spring 的编程模型中，让开发者能够像使用 Spring 内置组件一样，轻松地在应用中实现消息的发送与消费。你无需再直接操作复杂的原生 API，而是通过简单的注解和配置，即可快速构建起可靠的消息驱动微服务。

### 入门示例

想象一个真实的电商场景：用户成功下单后，系统需要同时执行扣减库存、发放积分、发送通知短信等多个操作。如果同步执行，响应时间会很长且任一环节失败都会导致整个订单失败。使用 RocketMQ-Spring，我们可以优雅地将其解耦为异步流程。

**1. 添加依赖：**
在 `pom.xml` 中引入 starter。
```xml
<dependency>
    <groupId>org.apache.rocketmq</groupId>
    <artifactId>rocketmq-spring-boot-starter</artifactId>
    <version>2.3.5</version>
</dependency>
```

**2. 配置连接：**
在 `application.yml` 中配置 NameServer 地址。
```yaml
rocketmq:
  name-server: 127.0.0.1:9876
  producer:
    group: order-producer-group
```

**3. 发送订单消息（生产者）：**
在订单创建的服务中，注入 `RocketMQTemplate` 并发送消息。
```java
@Service
public class OrderService {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    public void createOrder(Order order) {
        // 1. 本地事务：创建订单记录
        orderDao.insert(order);

        // 2. 发送异步消息，触发下游操作
        rocketMQTemplate.convertAndSend("ORDER_TOPIC:PAID", order);

        System.out.println("订单创建成功，消息已发送。");
    }
}
```

**4. 处理库存与积分（消费者）：**
在库存和积分微服务中，使用 `@RocketMQMessageListener` 注解来监听并处理消息。
```java
// 库存服务
@Service
@RocketMQMessageListener(topic = "ORDER_TOPIC", selectorExpression = "PAID", consumerGroup = "inventory-consumer-group")
public class InventoryConsumer implements RocketMQListener<Order> {
    @Override
    public void onMessage(Order order) {
        System.out.println("收到订单消息，开始扣减库存，订单ID：" + order.getId());
        // 执行扣减库存业务逻辑...
    }
}
```

```java
// 积分服务
@Service
@RocketMQMessageListener(topic = "ORDER_TOPIC", selectorExpression = "PAID", consumerGroup = "credit-consumer-group")
public class CreditConsumer implements RocketMQListener<Order> {
    @Override
    public void onMessage(Order order) {
        System.out.println("收到订单消息，开始增加积分，用户ID：" + order.getUserId());
        // 执行增加积分业务逻辑...
    }
}
```
通过这个示例，订单服务只需快速完成主流程并发出消息，库存、积分等服务独立并行消费，系统响应更快，稳定性更高，完美展现了消息驱动架构的魅力。

### rocketmq-spring-all-2.3.5版本更新了什么

此版本主要包含以下优化与修复：
1.  **初始化扩展生产者时，主题（Topic）变为可选参数**，提供了更大的灵活性。
2.  **优化了内部判断逻辑的方法**，提升了代码的健壮性。
3.  **从日志中移除了敏感信息**（如accessKey/secretKey），增强了安全性。
4.  **增强了 `@RocketMQMessageListener` 注解的代理检测**，并支持与 `@RefreshScope` 等Spring Cloud特性更好地协同工作，同时增加了对RocketMQ 5.x（v4协议）的测试覆盖。

### 更新日志

**更新内容**

-   **[ISSUE #754]** 初始化扩展生产者时，主题（Topic）现在是可选参数。
-   **[ISSUE #755]** 修改了内部判断方法。
-   **[ISSUE #758]** 从日志中删除了访问密钥（accessKey/secretKey）信息。
-   **[ISSUE #746]** 修复了 `@RocketMQMessageListener` 的代理检测机制，增强了其鲁棒性；增加了与 `@RefreshScope` 共用时的警告提示；并补充了针对 v4 协议（RocketMQ 5.x）的测试。

**新贡献者**

-   欢迎新贡献者 contrueCT 提交了首次代码。

**完整更新日志**： [rocketmq-spring-all-2.3.4...rocketmq-spring-all-2.3.5](https://github.com/apache/rocketmq-spring/compare/rocketmq-spring-all-2.3.4...rocketmq-spring-all-2.3.5)

### 总结

总的来说，**RocketMQ-Spring 2.3.5** 是一个专注于**优化开发者体验、增强安全性、提升框架健壮性**的版本。它在初始化灵活性、敏感信息保护、与Spring Cloud生态的兼容性以及对新版RocketMQ的支持方面都做出了有价值的改进。