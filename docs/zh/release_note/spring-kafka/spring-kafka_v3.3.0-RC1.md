# spring-kafka v3.3.0-RC1
### 为什么要使用spring-kafka

在当今快速发展的技术环境中，企业面临着数据流动性和实时处理的双重挑战。想象一下，一个在线零售平台在促销期间，订单量激增，系统是否能承受住压力？传统的消息传递方式往往无法满足这种需求，而Spring Kafka的出现恰恰解决了这个矛盾。它不仅提供了高吞吐量和低延迟的消息传递机制，还能与Spring生态系统无缝集成，让开发者在构建复杂的分布式系统时游刃有余。选择Spring Kafka，就是选择了一条通往高效、可靠和可扩展的道路。

### spring-kafka是什么

Spring Kafka是一个用于简化与Apache Kafka交互的Spring框架扩展。它提供了一系列的工具和API，使得开发者能够轻松地发送和接收消息，管理Kafka主题，以及处理消息的序列化和反序列化。通过Spring Kafka，开发者可以专注于业务逻辑，而不必过多关注底层的Kafka实现细节。

### 入门示例

假设你正在开发一个社交媒体应用，用户发布的每条消息都需要实时推送给关注该用户的其他用户。使用Spring Kafka，你可以轻松实现这一功能。首先，定义一个Kafka生产者，用于发送用户消息：

```java
@Autowired
private KafkaTemplate<String, String> kafkaTemplate;

public void sendMessage(String userId, String message) {
    kafkaTemplate.send("user-messages-" + userId, message);
}
```

然后，创建一个Kafka消费者，监听用户消息主题并处理接收到的消息：

```java
@KafkaListener(topics = "user-messages-${userId}", groupId = "user-group")
public void listen(String message) {
    System.out.println("Received message: " + message);
}
```

这样，当用户发布消息时，所有关注该用户的用户都能实时接收到通知。

### spring-kafka v3.3.0-RC1版本更新了什么

在v3.3.0-RC1版本中，Spring Kafka引入了多个新特性，包括为Kafka指标组件添加了`TaskScheduler`选项，改善了异步处理的可观察性，修复了多个Bug，并对文档进行了修正。此外，依赖项也进行了升级，确保了更好的兼容性和性能。

### 更新日志

## ⭐ 新特性
- 为Kafka指标组件添加了`TaskScheduler`选项。
- 改善了异步处理的可观察性（如`CompletableFuture`和`Mono`）。
- KafkaListener的属性覆盖：覆盖的属性未应用于键和值的反序列化器。
- 自定义KafkaStreams的实例化。
- 允许重写KafkaAdmin的createAdmin()方法。
- 批量监听器未添加KafkaHeaders.DELIVERY_ATTEMPT。
- `@RetryableTopic`在异步`@KafkaListener`返回类型中不工作。

## 🐞 Bug修复
- 修复了AbstractKafkaHeaderMapper中的NullPointerException。
- `@KafkaListener`的containerPostProcessor SpEL表达式未被评估。
- 文档中提到的`defaultRetryTopicKafkaTemplate`与`@RetryableTopic`的javadoc不一致。
- 文档中关于动态创建容器的代码示例错误。

## 📔 文档
- 修复了多个文档中的拼写错误。

## 🔨 依赖项升级
- 将org.junit:junit-bom从5.11.2升级到5.11.3。
- 将org.springframework.retry:spring-retry从2.0.9升级到2.0.10。
- 将mockitoVersion从5.14.1升级到5.14.2。
- 将org.junit:junit-bom从5.11.1升级到5.11.2。
- 将log4jVersion从2.24.0升级到2.24.1。
- 将org.junit:junit-bom从5.11.0升级到5.11.1。

### 总结

在v3.3.0-RC1版本中，Spring Kafka不仅引入了多项新特性和Bug修复，还对文档进行了完善，确保开发者能够更高效地使用该框架。同时，依赖项的升级也为项目的稳定性和性能提供了保障。

### 爆款标题提取

- Spring Kafka v3.3.0-RC1：新特性与Bug修复全解析！
- 你不能错过的Spring Kafka v3.3.0-RC1更新亮点！
- Spring Kafka v3.3.0-RC1：提升异步处理可观察性的新特性！
- 了解Spring Kafka v3.3.0-RC1的关键更新与改进！
- Spring Kafka v3.3.0-RC1发布：新功能与修复一网打尽！