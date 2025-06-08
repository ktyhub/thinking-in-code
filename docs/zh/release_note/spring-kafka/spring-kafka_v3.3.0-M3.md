# spring-kafka v3.3.0-M3
### 为什么要使用spring-kafka

在当今这个信息爆炸的时代，数据的流动速度和处理能力成为了企业成功的关键。然而，许多开发者在面对复杂的消息传递系统时，常常感到无从下手。spring-kafka的出现，正是为了打破这种困境。它不仅简化了Kafka的使用，还提供了强大的功能，使得开发者能够轻松构建高效、可靠的消息驱动应用。想象一下，如果你能在几行代码内实现复杂的消息传递逻辑，那将是多么令人兴奋的事情！

### spring-kafka是什么

spring-kafka是一个Spring框架的扩展，旨在简化与Apache Kafka的集成。它提供了易于使用的API，使开发者能够轻松地发送和接收消息，同时支持Kafka的所有核心功能，如主题、分区和消费者组。通过spring-kafka，开发者可以专注于业务逻辑，而无需深入了解Kafka的底层实现。

### 入门示例

想象一下，你正在开发一个电商平台，需要处理订单消息。使用spring-kafka，你可以轻松地创建一个Kafka生产者，将订单信息发送到指定的主题。以下是一个简单的示例：

```java
@Autowired
private KafkaTemplate<String, Order> kafkaTemplate;

public void sendOrder(Order order) {
    kafkaTemplate.send("orders", order.getId(), order);
}
```

在消费者端，你可以使用@KafkaListener注解来接收消息：

```java
@KafkaListener(topics = "orders", groupId = "order_group")
public void listen(Order order) {
    // 处理订单
}
```

通过这种方式，你可以快速构建一个高效的消息处理系统，确保订单信息的及时传递。

### spring-kafka v3.3.0-M3版本更新了什么

在v3.3.0-M3版本中，spring-kafka进行了多项重要更新，包括更新KafkaEvent子类的toString()方法，代码重构，修复了KafkaTemplate.afterSingletonsInstantiated中服务器引导地址的错误比较，允许在父类中定义@DltHandler方法，以及增加了自定义DeadLetterPublishingRecovererFactory日志的可能性。

### 更新日志

## ⭐ 新特性
- 更新KafkaEvent子类中的toString()方法。
- 进行了代码重构。
- 修复了KafkaTemplate.afterSingletonsInstantiated中服务器引导地址的错误比较。
- 允许在父类中定义@DltHandler方法。
- 增加了自定义DeadLetterPublishingRecovererFactory日志的可能性。

## 🐞 Bug修复
- 修复了使用AnnotationEnhancer时的警告日志。

## 🔨 依赖升级
- 将org.springframework.data:spring-data-bom从2024.0.3升级到2024.0.4。
- 将org.springframework.retry:spring-retry从2.0.8升级到2.0.9。

### 总结

在spring-kafka v3.3.0-M3版本中，新增了多个特性和修复了若干Bug，同时对依赖进行了升级。这些更新不仅提升了库的稳定性和可用性，也为开发者提供了更灵活的功能选择，进一步增强了与Kafka的集成体验。