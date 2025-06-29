# spring-kafka v3.3.3
### 为什么要使用spring-kafka

在当今这个信息爆炸的时代，企业面临着如何高效处理海量数据的挑战。Kafka作为一种强大的消息队列系统，能够帮助企业实现实时数据流处理。然而，使用Kafka并非易事，尤其是在复杂的应用场景中。此时，spring-kafka应运而生，它不仅简化了Kafka的使用，还提供了与Spring生态系统的无缝集成。想象一下，您可以轻松地将消息处理与Spring的其他组件结合，快速构建出高效、可靠的微服务架构。这种便利性与强大功能的结合，正是开发者们选择spring-kafka的原因所在。

### spring-kafka是什么

spring-kafka是一个Spring框架的扩展项目，旨在简化与Apache Kafka的集成。它提供了易于使用的API，使开发者能够轻松地发送和接收Kafka消息，同时支持Kafka的各种特性，如事务、分区和消费者组。通过spring-kafka，开发者可以充分利用Spring的依赖注入和配置管理功能，从而提升开发效率和代码的可维护性。

### 入门示例

想象一下，一个在线购物平台需要实时处理用户订单。当用户下单时，系统需要将订单信息发送到Kafka，以便后端服务进行处理。使用spring-kafka，开发者可以轻松实现这一功能。首先，创建一个Kafka配置类，设置Kafka的生产者和消费者。然后，定义一个订单服务类，使用KafkaTemplate发送订单消息。最后，创建一个消费者类，监听订单主题并处理接收到的消息。通过这种方式，开发者能够快速构建出一个高效的订单处理系统，确保用户体验的流畅性。

### spring-kafka v3.3.3版本更新了什么

在v3.3.3版本中，spring-kafka进行了若干重要更新。首先，修复了ConcurrentMessageListenerContainer部分文档的混淆问题。其次，改进了错误度量收集，确保消费者方法抛出的错误能够被正确报告。此外，解决了异步挂起函数监听器未自动确认的问题。最后，修复了KafkaMessageListenerContainer.getAssignedPartitions方法的安全性问题。

### 更新日志

## 🐞 Bug 修复
- 使用ConcurrentMessageListenerContainer部分文档时存在一些混淆。
- 错误度量收集始终报告相同的错误“ListenerExecutionFailedException”，无论消费者方法中抛出什么错误。
- 异步挂起函数监听器未能自动确认的问题。
- KafkaMessageListenerContainer.getAssignedPartitions方法的安全性问题。

## 🔨 依赖升级
- 将org.springframework.data:spring-data-bom从2024.1.2升级到2024.1.3。
- 将io.projectreactor:reactor-bom从2024.0.2升级到2024.0.3。
- 将io.micrometer:micrometer-tracing-bom从1.4.2升级到1.4.3。
- 将org.springframework:spring-framework-bom从6.2.2升级到6.2.3。
- 将io.micrometer:micrometer-bom从1.14.3升级到1.14.4。

### 总结

在v3.3.3版本中，spring-kafka不仅修复了多个关键的bug，还进行了依赖项的升级，进一步提升了系统的稳定性和性能。这些更新将帮助开发者更好地利用spring-kafka构建高效的消息处理系统。