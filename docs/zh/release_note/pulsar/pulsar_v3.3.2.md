# pulsar v3.3.2
### 为什么要使用pulsar

在当今数据驱动的世界中，信息的流动速度和可靠性至关重要。然而，许多传统消息队列系统在处理高并发和大规模数据时显得力不从心。Pulsar的出现，正是为了打破这种局限。它不仅支持多租户和高可用性，还具备强大的扩展性和灵活性，能够在瞬息万变的市场中为企业提供无缝的数据流动体验。选择Pulsar，就是选择了一条通往未来的高速公路。

### pulsar是什么

Apache Pulsar是一个开源的分布式消息传递系统，旨在处理大规模数据流。它支持多种消息传递模式，包括发布/订阅和点对点，同时具备高可用性和持久性。Pulsar的架构设计使其能够在云环境和本地环境中灵活部署，适用于各种应用场景。

### 入门示例

想象一下，一个在线购物平台需要实时处理用户的订单和库存信息。使用Pulsar，开发者可以创建一个生产者，将每个订单信息发送到一个特定的主题。与此同时，多个消费者可以订阅这个主题，实时接收订单信息并更新库存。这种方式不仅提高了系统的响应速度，还确保了数据的一致性和可靠性。以下是一个简单的代码示例：

```java
// 创建生产者
Producer<String> producer = client.newProducer(Schema.STRING)
    .topic("orders")
    .create();

// 发送订单信息
producer.send("Order ID: 12345, Item: Laptop, Quantity: 1");

// 创建消费者
Consumer<String> consumer = client.newConsumer(Schema.STRING)
    .topic("orders")
    .subscriptionName("order-subscription")
    .subscribe();

// 接收订单信息
Message<String> msg = consumer.receive();
System.out.println("Received: " + msg.getValue());
```

### pulsar v3.3.2版本更新了什么

Pulsar v3.3.2版本进行了多项重要更新，包括安全性修复，升级了Avro和Vert.x库以解决已知漏洞。此外，增强了Broker的性能，修复了多个潜在的bug，提高了系统的稳定性和可靠性。最后，Python客户端也得到了更新，提升了用户体验。

### 更新日志

#### 2024-10-04

**库更新**
- [修复][安全] 将Avro升级到1.11.4，以解决CVE-2024-47561。
- [修复][安全] 将Vert.x升级到4.5.10，以解决CVE-2024-8391。
- [修复][安全][branch-3.3] 将protobuf-java升级到3.25.5。
- [改进][杂项] 将Netty升级到4.1.113和netty-tcnative到2.0.66。
- [修复] 将commons-io:commons-io从2.8.0升级到2.14.0。

**Broker**
- [修复][Broker] 取消可能的挂起重放读取。
- [修复][Broker] 在准备接受请求之前按顺序执行挂起的回调。
- [修复][Broker] 如果可扩展负载管理器启动失败，则快速失败。
- [修复][Broker] 修复“禁用复制订阅控制器”的逻辑和日志。

**客户端**
- [修复] DLQ正确处理字节键。
- [修复][客户端] 将orderingKey复制到重试信件主题和DLQ消息，并修复复制中的错误。

**Pulsar IO和Pulsar Functions**
- [修复][IO] 在DebeziumMsSqlContainer中升级mssql服务器docker标签。
- [改进][函数] 添加对通过PF_additionalJavaRuntimeArguments环境变量覆盖additionalJavaRuntimeArguments的支持。

**其他**
- [修复][日志] 调用获取主题元数据时，如果租户/命名空间不存在，则不打印错误日志。
- [改进][杂项] 改进AES-GCM密码性能。

### 总结

此次更新记录涵盖了多个重要的修复和改进，特别是在安全性和性能方面。通过升级关键库和修复潜在问题，Pulsar v3.3.2版本为用户提供了更稳定和安全的消息传递体验。

### 爆款标题

- "Pulsar v3.3.2发布：安全性升级与性能提升，助力数据流动"
- "重磅更新！Pulsar v3.3.2修复多项安全漏洞，提升系统稳定性"
- "Pulsar v3.3.2来了：全新功能与修复，开启消息传递新纪元"
- "升级你的消息系统！Pulsar v3.3.2带来安全与性能双重保障"
- "Pulsar v3.3.2版本更新：从安全修复到性能优化，全面提升用户体验"