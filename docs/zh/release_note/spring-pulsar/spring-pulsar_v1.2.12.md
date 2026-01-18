# spring-pulsar v1.2.12
### 为什么要使用spring-pulsar

你是否曾在构建微服务时，感到自己深陷于消息队列的复杂配置与繁琐样板代码的泥潭之中？你是否渴望一种力量，能让你像使用`@Autowired`注入一个Bean那样自然地去处理异步消息，而不是被底层的连接、监听器工厂和序列化细节所淹没？

这就是矛盾的核心所在：我们迫切需要消息队列来实现解耦与弹性，却又在实现过程中被其固有的复杂性所拖累，消耗了大量本该用于业务创新的精力。而**Spring Pulsar**，正是Spring生态为这一经典矛盾提供的优雅答案。它并非另一个消息中间件，而是将强大的Apache Pulsar消息引擎无缝集成到你所熟悉的Spring世界中的一座桥梁。使用它，意味着你可以用声明式的、Spring惯用的方式（想想`@Autowired`， `@Value`）去发布和消费消息，将复杂度降到最低，从而让你真正专注于编写有价值的业务逻辑，而非基础设施代码。

它的存在，就是为了让你**告别复杂，重拾优雅与高效**。

### spring-pulsar是什么

简单来说，**Spring Pulsar** 是 Spring 官方为 Apache Pulsar 提供的一个集成项目。它将 Pulsar 的客户端功能深度融入到 Spring 框架中，让你能够使用熟悉的 Spring 风格（如注解、自动配置、外部化配置）来轻松地发送和接收 Pulsar 消息。

你可以把它理解为 Spring 生态与 Pulsar 消息系统之间的“适配器”或“粘合剂”。它抽象了 Pulsar 客户端的底层细节，提供了更高级、更符合 Spring 开发者习惯的 API，极大地简化了在 Spring Boot 应用中使用 Pulsar 进行消息通信的开发体验。

### 入门示例

让我们想象一个真实的电商场景：用户成功下单后，系统需要异步地发送订单确认邮件，并更新库存。

**1. 添加依赖**
在你的 `pom.xml` 中引入 Spring Pulsar 的 Spring Boot Starter：

```xml
<dependency>
    <groupId>org.springframework.pulsar</groupId>
    <artifactId>spring-pulsar-spring-boot-starter</artifactId>
    <version>1.2.12</version>
</dependency>
```

**2. 发布消息（生产者）**
当订单创建时，你只需注入一个 `PulsarTemplate`，即可像调用普通方法一样发送消息到指定的主题（例如 `order-created-topic`）。

```java
import org.springframework.pulsar.core.PulsarTemplate;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final PulsarTemplate<OrderCreatedEvent> pulsarTemplate;

    public OrderService(PulsarTemplate<OrderCreatedEvent> pulsarTemplate) {
        this.pulsarTemplate = pulsarTemplate;
    }

    public void createOrder(Order order) {
        // 1. 保存订单到数据库...
        // 2. 发送领域事件
        OrderCreatedEvent event = new OrderCreatedEvent(order.getId(), order.getDetails());
        pulsarTemplate.send("order-created-topic", event); // 简洁得像发送一封邮件
    }
}
```

**3. 消费消息（消费者）**
邮件服务和库存服务可以分别独立订阅这个主题。它们只需使用 `@PulsarListener` 注解一个方法，Spring Pulsar 便会自动创建监听器并处理消息。

```java
import org.springframework.pulsar.annotation.PulsarListener;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    // 邮件服务：监听订单创建事件，发送确认邮件
    @PulsarListener(subscriptionName = "email-subscription", topics = "order-created-topic")
    public void handleOrderCreatedEvent(OrderCreatedEvent event) {
        System.out.println(“发送订单确认邮件给用户，订单ID: ” + event.getOrderId());
        // 调用邮件发送逻辑...
    }
}
```

```java
@Service
public class InventoryService {
    // 库存服务：监听同一个事件，扣减库存
    @PulsarListener(subscriptionName = "inventory-subscription", topics = "order-created-topic")
    public void updateInventory(OrderCreatedEvent event) {
        System.out.println(“为订单 [” + event.getOrderId() + “] 扣减库存...”);
        // 更新库存逻辑...
    }
}
```

通过这个示例，你可以看到，复杂的消息监听器创建、反序列化、并发控制等都被隐藏在注解和框架自动配置之后。开发者只需关注**事件是什么**以及**收到事件后要做什么**，这正是 Spring Pulsar 带来的最大便利。

### spring-pulsar v1.2.12版本更新了什么

Spring Pulsar 1.2.12 版本是一个维护性更新，主要聚焦于问题修复和底层依赖库的升级。它解决了一个关于发布制品中包含无效元数据信息的Bug，并统一升级了Spring Framework、Micrometer（指标追踪与度量）、Reactor响应式库以及Jackson数据绑定库等多个核心依赖的版本，以获取这些依赖项带来的稳定性改进、性能优化和安全补丁。

### 更新日志

#### 🐞 错误修复
*   将“已发布的构件包含无效的 META-INF 信息”的修复向后移植到 1.2.x 分支。

#### 🔨 依赖升级
*   将 org.springframework:spring-framework-bom 从 6.2.12 升级至 6.2.13。
*   将 io.micrometer:micrometer-tracing-bom 从 1.4.11 升级至 1.4.12。
*   将 io.micrometer:micrometer-bom 从 1.14.12 升级至 1.14.13。
*   将 io.projectreactor:reactor-bom 从 2024.0.11 升级至 2024.0.12。
*   将 com.fasterxml.jackson:jackson-bom 从 2.18.4.1 升级至 2.18.5。

**完整更新日志**：[v1.2.11...v1.2.12](https://github.com/spring-projects/spring-pulsar/compare/v1.2.11...v1.2.12)

### 总结概括

总而言之，本次 1.2.12 版本的更新是一个典型的“稳固基石”式的发布。它通过修复一个关键的构建元数据问题，并系统性地升级了所有主要底层依赖的版本，确保了项目在安全、稳定性和兼容性上保持最新状态，为上层应用提供了更可靠的基础。