# pulsar v4.0.0
### 为什么要使用pulsar

在当今数据驱动的世界中，信息的流动速度和可靠性至关重要。然而，许多传统消息队列系统在处理高并发和大规模数据时显得力不从心。Pulsar的出现，正是为了打破这一局限。它不仅支持多租户和高可用性，还具备强大的扩展性和灵活的消息处理能力。想象一下，一个全球性的电商平台，如何在促销期间处理成千上万的订单请求，Pulsar便是其背后的强大引擎。选择Pulsar，就是选择了一条通往高效、可靠和灵活的数据传输之路。

### pulsar是什么

Apache Pulsar是一个开源的分布式消息队列系统，旨在提供高吞吐量、低延迟和高可用性的消息传递服务。它支持多种消息传递模式，包括发布/订阅和点对点，并且具备强大的多租户支持。Pulsar的架构设计使其能够在大规模环境中高效运行，适用于实时数据流处理和大数据分析等场景。

### 入门示例

想象一下，你正在开发一个实时数据分析平台，用户希望能够实时接收和处理来自不同传感器的数据。使用Pulsar，你可以轻松地创建一个主题（topic），然后将传感器数据发布到该主题上。开发者可以使用Pulsar的客户端库，快速编写代码来订阅这个主题，并实时处理数据。例如，使用Java编写的简单代码如下：

```java
PulsarClient client = PulsarClient.builder()
        .serviceUrl("pulsar://localhost:6650")
        .build();

Consumer<String> consumer = client.newConsumer(Schema.STRING)
        .topic("sensor-data")
        .subscriptionName("sensor-subscription")
        .subscribe();

while (true) {
    Message<String> msg = consumer.receive();
    System.out.printf("Received message: %s%n", msg.getValue());
    consumer.acknowledge(msg);
}
```

通过这种方式，你可以实现实时数据流的处理，帮助用户快速做出决策。

### pulsar v4.0.0版本更新了什么

Pulsar v4.0.0版本引入了一系列重要更新，包括支持强制加载主题以处理不可恢复的错误，SSL工厂插件以自定义SSL上下文和引擎生成，消费者状态中增加角色字段，主题加载阶段触发卸载，以及允许禁用管理的Ledger卸载延迟等。这些更新提升了系统的灵活性和安全性，进一步增强了Pulsar的功能。

### 更新日志

#### 2024-10-21
自3.3.0版本发布准备以来，4.0.0版本进行了多项更改。  
有关完整列表，请查看[完整变更日志](https://github.com/apache/pulsar/compare/188355b...v4.0.0)和[完整PR列表](https://github.com/apache/pulsar/pulls?q=is%3Apr+is%3Amerged+milestone%3A4.0.0+sort%3Acreated-asc)。

#### 自3.0.0版本以来接受的PIP
##### 在4.0.0版本中接受的PIP
- PIP-327: 支持强制加载主题以处理不可恢复的错误
- PIP-337: SSL工厂插件以自定义SSL上下文和引擎生成
- PIP-347: 在消费者状态中增加角色字段
- PIP-348: 在主题加载阶段触发卸载
- PIP-349: 为TTL检查添加额外的SystemCursorNames忽略列表
- PIP-350: 允许禁用管理的Ledger卸载延迟
- PIP-351: 为Pulsar-Test客户端添加支持KeyStore的TLS的额外选项
- PIP-352: 基于事件时间的主题压缩器
- PIP-353: 改进事务消息的可见性
- PIP-354: 将topK机制应用于ModularLoadManagerImpl
- PIP-355: 增强Pulsar的Broker级别指标
- PIP-356: 支持Geo-Replication从最早位置开始
- PIP-357: 修正负载均衡模块中的配置名称
- PIP-358: 使资源权重适用于OverloadShedder、LeastLongTermMessageRate、ModularLoadManagerImpl
- PIP-359: 支持特定订阅的自定义消息监听器执行器
- PIP-360: 添加API以显示Schema元数据
- PIP-363: 向方法org.apache.pulsar.client.impl.SendCallback.sendComplete添加回调参数
- PIP-364: 引入新的负载均衡算法AvgShedder
- PIP-366: 支持为配置和本地元数据存储指定不同的配置
- PIP-367: 提议为Pulsar创建贡献者库
- PIP-368: 支持基于查找属性的查找
- PIP-369: 基于标志的选择性卸载以更改ns-isolation-policy
- PIP-370: 在地理复制中可配置的远程主题创建
- PIP-374: 消费者的receiverQueue中消息的可见性
- PIP-376: 使主题策略服务可插拔
- PIP-378: 添加ServiceUnitStateTableView抽象（仅限ExtensibleLoadMangerImpl）
- PIP-379: 改进消息排序的Key_Shared排水哈希
- PIP-381: 处理大型PositionInfo状态
- PIP-383: 支持为多个主题授予/撤销权限
- PIP-384: ManagedLedger接口解耦

### 总结

Pulsar v4.0.0版本带来了多项重要更新，增强了系统的灵活性、安全性和功能性。这些更新不仅提升了用户体验，也为开发者提供了更强大的工具，助力构建高效的消息传递系统。

### 爆款标题

- “Pulsar v4.0.0：强制加载主题与SSL插件的革命性更新”
- “全新Pulsar v4.0.0发布：提升消息处理的灵活性与安全性”
- “Pulsar v4.0.0：解锁多租户支持与主题管理新功能”
- “Pulsar v4.0.0更新：从事件时间压缩到Geo-Replication的全面升级”
- “探索Pulsar v4.0.0：增强Broker级别指标与自定义消息监听器的强大功能”