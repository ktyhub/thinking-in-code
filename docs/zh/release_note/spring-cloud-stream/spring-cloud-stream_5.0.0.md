# spring-cloud-stream 5.0.0
## 为什么要使用 Spring Cloud Stream

想象一下，你正构建一个庞大的微服务帝国。服务之间需要交谈，于是你引入了消息中间件——Kafka、RabbitMQ 的王国。起初，一切井然有序。但很快，帝国扩张了，你发现每个服务都在与消息中间件的原生 API 搏斗：序列化、反序列化、错误处理、连接管理……重复的代码像野草一样滋生。更可怕的是，当有一天，国王决定将消息中枢从 RabbitMQ 迁往 Kafka，你发现需要发动一场波及所有服务的“迁移战争”，代价惨重。

这就是重复劳动与厂商锁定的双重诅咒。你厌倦了在业务逻辑和底层通信细节之间反复横跳，更恐惧于被某个中间件技术牢牢绑死。

此时，你需要一位“外交官”与“翻译官”。**Spring Cloud Stream** 应运而生。它并非另一个消息队列，而是一个声明式的、智能的抽象层。它让你用纯粹的业务逻辑语言（`@StreamListener`, `Supplier`, `Function`）来定义消息的输入与输出，而将肮脏的、复杂的中间件交互细节隐藏起来。你的代码从此只关心“消息内容”，而非“如何传递”。切换消息中间件？只需修改一个依赖和配置，业务代码稳如泰山。它的价值，在于将你从无休止的底层适配中解放，让你能专注于构建真正有价值的业务逻辑，同时为你的架构赋予了前所未有的灵活性与韧性。使用它，不是为了追随潮流，而是为了夺回开发的主导权，构建一个更自由、更健壮的系统。

## Spring Cloud Stream 是什么

简单来说，Spring Cloud Stream 是一个用于构建**消息驱动微服务**的框架。

它基于 Spring Boot 和 Spring Integration，其核心是提供一个统一的编程模型，通过“绑定器（Binder）”抽象，让您的应用程序代码能够轻松、一致地与不同的消息中间件（如 Kafka, RabbitMQ, RocketMQ 等）进行交互。你写一次代码，就能在任何支持的消息中间件上运行。

## 入门示例

**真实场景：订单处理流水线**

假设我们有一个电商系统。当用户下单后，需要依次触发：1）库存锁定；2）优惠券核销；3）通知发货。

**传统方式**：服务 A 调用服务 B，B 调用 C，耦合紧密，任一环节失败都可能导致整个交易失败。

**Stream 方式**：将“订单创建”作为一个事件发布到消息通道。库存、优惠券、发货服务各自监听这个通道，异步、独立地处理自己的任务，实现解耦和最终一致性。

**开发示例**：

1.  **引入依赖** (以 Kafka Binder 为例)：
    ```xml
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-stream-binder-kafka</artifactId>
    </dependency>
    ```

2.  **定义绑定接口**（声明输入/输出通道）：
    ```java
    public interface OrderProcessor {
        String OUTPUT = "orderCreatedOutput";
        String INPUT = "orderCreatedInput";

        @Output(OUTPUT)
        MessageChannel orderCreated();

        @Input(INPUT)
        SubscribableChannel orderCreatedSink();
    }
    ```

3.  **生产者服务**（订单服务）：
    ```java
    @RestController
    @EnableBinding(OrderProcessor.class) // 启用绑定
    public class OrderService {
        @Autowired
        private OrderProcessor processor;

        @PostMapping("/order")
        public String createOrder(@RequestBody Order order) {
            // 1. 保存订单到数据库...
            // 2. 将订单创建事件发送到消息通道
            processor.orderCreated().send(MessageBuilder.withPayload(order).build());
            return "Order Created!";
        }
    }
    ```

4.  **消费者服务**（库存服务）：
    ```java
    @Service
    @EnableBinding(OrderProcessor.class)
    public class InventoryService {
        // 监听名为`orderCreatedInput`的通道
        @StreamListener(OrderProcessor.INPUT)
        public void handleOrderCreated(Order order) {
            System.out.println("库存服务收到订单，开始锁定库存: " + order.getId());
            // 业务逻辑：减库存...
        }
    }
    ```

5.  **配置文件** `application.yml`：
    ```yaml
    spring:
      cloud:
        stream:
          bindings:
            # 定义生产者将消息发送到哪个目标（这里是一个Kafka Topic）
            orderCreatedOutput:
              destination: orders
              content-type: application/json
            # 定义消费者从哪个目标消费
            orderCreatedInput:
              destination: orders
              group: inventory-service # 消费组，用于负载均衡和持久化
              content-type: application/json
    ```
就这样，订单服务发布的事件，会自动发送到 Kafka 的 `orders` Topic，而库存服务会自动监听这个 Topic 并进行处理。如果你想换成 RabbitMQ，几乎只需更换 Binder 依赖和连接配置。

## Spring Cloud Stream 5.0.0 版本更新了什么

参考其发布日志，5.0.0 版本的主要更新可概括为：**持续优化 Kafka 集成，增强了对 Kafka Streams 中 KTable 的控制能力，并修复了一些关键的绑定器与配置传递问题**。具体包括为消费者引入优先级设置；为 KTable 物化新增了缓存和日志控制开关；将 Kafka 绑定器升级至使用新的非弃用事务管理器 API；同时解决了依赖项注入、容器设置传播以及协议头不正确等多个缺陷。

## 更新日志

### ⭐ 新功能
*   新增消费者优先级功能 [#3147](https://github.com/spring-cloud/spring-cloud-stream/pull/3147)
*   为 KTable 物化添加缓存和日志控制选项 [#3136](https://github.com/spring-cloud/spring-cloud-stream/pull/3136)
*   KafkaMessageChannelBinder 已切换为使用 `ContainerProperties` 中的 `setKafkaAwareTransactionManager` 方法，因为 `setTransactionManager` 方法已被弃用并计划移除 [#3130](https://github.com/spring-cloud/spring-cloud-stream/issues/3130)
*   为 Kafka Streams 绑定器添加 `CacheEnabled` 和 `LoggingEnabled` 属性，以增强对 KTable 的控制 [#3094](https://github.com/spring-cloud/spring-cloud-stream/issues/3094)

### 🐞 错误修复
*   修复了在具有非空属性的自定义 KafkaMessageChannelBinder 中依赖项未正确注入的问题 [#3148](https://github.com/spring-cloud/spring-cloud-stream/issues/3148)
*   修复了容器设置未传播到单个监听器的问题 [#3124](https://github.com/spring-cloud/spring-cloud-stream/issues/3124)
*   修复了对于非 Kafka 或 Rabbit 绑定器，目标协议头不正确的问题 [#2222](https://github.com/spring-cloud/spring-cloud-stream/issues/2222)

## 总结概括

第五小节的更新记录显示，Spring Cloud Stream 5.0.0 是一次以 **“增强与修复”** 为核心的迭代。它着重提升了与 Kafka 生态，特别是 Kafka Streams 的整合深度与可控性，同时致力于解决框架在实际应用中暴露出的配置与行为一致性隐患，体现了框架在追求功能强大的同时，对稳定性和开发者体验的持续打磨。