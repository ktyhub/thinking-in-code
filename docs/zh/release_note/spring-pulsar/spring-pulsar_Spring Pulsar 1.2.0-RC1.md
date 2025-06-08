# spring-pulsar Spring Pulsar 1.2.0-RC1
### 为什么要使用spring-pulsar

在当今快速发展的技术环境中，开发者面临着日益复杂的系统架构和数据流处理需求。传统的消息队列往往无法满足高并发和低延迟的要求，而这正是Spring Pulsar的强项。它不仅提供了强大的消息处理能力，还能与Spring生态系统无缝集成，帮助开发者更高效地构建微服务架构。然而，许多开发者仍在犹豫，是否应该转向这个新兴的解决方案。难道不值得尝试吗？

### spring-pulsar是什么

Spring Pulsar是一个基于Apache Pulsar的Spring框架扩展，旨在简化消息驱动应用程序的开发。它提供了高效的消息传递、流处理和事件驱动架构的支持，使得开发者能够轻松构建和管理复杂的分布式系统。

### 入门示例

想象一下，你正在开发一个电商平台，需要处理用户订单和库存管理。使用Spring Pulsar，你可以轻松地创建一个消息生产者，将用户订单发送到一个主题中。然后，多个消费者可以同时从这个主题中读取消息，处理订单并更新库存。这种方式不仅提高了系统的响应速度，还能有效地处理高并发请求。以下是一个简单的代码示例：

```java
@Autowired
private PulsarTemplate<String> pulsarTemplate;

public void sendOrder(Order order) {
    pulsarTemplate.send("orders-topic", order);
}
```

### spring-pulsar Spring Pulsar 1.2.0-RC1版本更新了什么

在Spring Pulsar 1.2.0-RC1版本中，主要更新包括：支持在toLowerCase和toUpperCase中指定区域设置，解决了非阴影protobuf-java导致的类不匹配问题，并在使用lambda生产者自定义器时向用户发出警告。此外，多个依赖项也得到了升级，以提高整体性能和稳定性。

### 更新日志

## 🪜 改进
- 在toLowerCase|toUpperCase中指定区域设置
- 解决非阴影protobuf-java导致的类不匹配问题
- 当使用lambda生产者自定义器时，向用户发出警告

## 🔨 依赖项升级
- 将ch.qos.logback:logback-classic从1.5.9升级到1.5.11
- 将io.micrometer:micrometer-bom从1.14.0-M3升级到1.14.0-RC1
- 将io.micrometer:micrometer-tracing-bom从1.4.0-M3升级到1.4.0-RC1
- 将io.projectreactor:reactor-bom从2024.0.0-M6升级到2024.0.0-RC1
- 将org.springframework.retry:spring-retry从2.0.9升级到2.0.10
- 将org.springframework:spring-framework-bom从6.2.0-RC1升级到6.2.0-RC2
- 将pulsar-reactive从0.5.7升级到0.5.8
- 更新到Jackson 2.18.0
- 更新到Pulsar 3.3.2

### 总结

在Spring Pulsar 1.2.0-RC1版本中，开发者将受益于多个重要的改进和依赖项升级，提升了系统的稳定性和性能，特别是在处理消息时的灵活性和效率。

### 爆款标题

- "Spring Pulsar 1.2.0-RC1：提升消息处理效率的全新改进！"
- "解锁Spring Pulsar 1.2.0-RC1：依赖项升级带来的性能飞跃！"
- "Spring Pulsar 1.2.0-RC1发布：让消息驱动应用更强大！"
- "Spring Pulsar 1.2.0-RC1：解决类不匹配问题，提升开发体验！"
- "Spring Pulsar 1.2.0-RC1：新特性与依赖升级，助力高效开发！"