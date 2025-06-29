# pulsar v3.3.5
### 为什么要使用pulsar

在当今这个信息爆炸的时代，数据流动的速度和规模前所未有。企业面临着如何高效处理和传输海量数据的挑战。Apache Pulsar作为一个分布式消息流平台，提供了强大的解决方案。然而，许多企业仍在犹豫：是选择传统的消息队列，还是转向更现代的流处理平台？在这个选择的背后，隐藏着对性能、可扩展性和灵活性的深刻思考。Pulsar不仅能满足高吞吐量和低延迟的需求，还支持多租户和地理分布式架构，成为解决数据流动难题的理想选择。

### pulsar是什么

Apache Pulsar是一个开源的分布式消息流平台，旨在处理实时数据流。它支持多种消息传递模式，包括发布/订阅和点对点通信，能够处理大规模的数据流。Pulsar具有高可扩展性和高可用性，适用于各种应用场景，如物联网、实时分析和大数据处理。

### 入门示例

想象一下，一个在线购物平台需要实时处理用户的订单和库存信息。使用Pulsar，开发者可以创建一个订单服务，将每个订单作为消息发布到Pulsar主题中。与此同时，库存服务可以订阅该主题，实时更新库存状态。这种架构不仅提高了系统的响应速度，还确保了数据的一致性和可靠性。以下是一个简单的开发示例：

```java
// 创建Pulsar客户端
PulsarClient client = PulsarClient.builder()
        .serviceUrl("pulsar://localhost:6650")
        .build();

// 发送消息
Producer<String> producer = client.newProducer(Schema.STRING)
        .topic("orders")
        .create();

producer.send("Order ID: 12345");

// 订阅消息
Consumer<String> consumer = client.newConsumer(Schema.STRING)
        .topic("orders")
        .subscriptionName("inventory-subscription")
        .subscribe();

while (true) {
    Message<String> msg = consumer.receive();
    System.out.printf("Received message: %s%n", msg.getValue());
    consumer.acknowledge(msg);
}
```

### pulsar v3.3.5版本更新了什么

在Pulsar v3.3.5版本中，主要更新包括：升级了Oxia Java客户端至0.5.0，修复了基础镜像中的Alpine版本问题，升级了json-smart至2.5.2，并对Netty进行了多项安全和性能改进。此外，修复了多个与Broker和客户端相关的bug，提升了系统的稳定性和性能。

### 更新日志

#### 2025-02-27

**库更新**
- [特性][杂项] 升级Oxia Java客户端至0.5.0
- [修复] 在基础镜像中使用Alpine 3.21
- [修复][构建] 升级json-smart至2.5.2
- [改进] 升级至Netty 4.1.117.Final
- [修复][安全] 升级至Netty 4.1.118以解决CVE-2025-24970

**Broker**
- [修复][Broker] 修复RangeCache中的bug，确保不同实例的键能够匹配
- [修复][Broker] 关闭的主题不会从缓存中移除
- [修复][Broker] 如果一个HTTP认证提供者失败，继续使用下一个提供者
- [修复][Broker] 修复BucketDelayedDeliveryTracker的线程安全问题
- [修复][Broker] 修复在活动消费者断开连接时的NPE
- [修复][Broker] 修复ackReceipt启用时的acknowledgeCumulativeAsync阻塞问题
- [修复][Broker] 修复当maxUnackedMessagesPerConsumer为1时的blockedConsumerOnUnackedMsgs值
- [修复][Broker] 修复启用批量索引ack时可能出现的标记删除NPE
- [修复][Broker] 修复速率限制器令牌桶和时钟一致性问题，导致过度限流和连接超时
- [修复][Broker] 修复重复获取待处理读取配额的问题
- [修复][Broker] 修复MetadataCache#readModifyUpdateOrCreate中的重试机制
- [修复][Broker] 解决地理复制中因去重不当导致的消息丢失或频繁失败问题
- [修复][Broker] 使InflightReadsLimiter异步，并将其应用于重放队列读取
- [修复][Broker] 修复速率限制器的问题，确保速率不会超过限制
- [修复][Broker] 修复延迟队列的指标名称
- [修复][Broker] 从internalGetPartitionedStats中移除阻塞调用
- [修复][Broker] 支持大量未确认消息存储以便光标恢复
- [修复][Broker] 修复Broker识别错误的卡住主题问题
- [修复][Broker] 修复Broker可能丢失机架信息的问题
- [修复][Meta] 修复创建持久znode的临时Zookeeper放置问题
- [修复][Meta] 修复ZK节点的临时处理和MockZooKeeper的临时及ZK状态处理
- [修复][ML] 修复在切换配置unackedRangesOpenCacheSetEnabled时的光标元数据兼容性问题
- [修复][ML] 修复PendingReadsManager中的死锁问题
- [修复][ML] 修复因重复的RangeCache值保留操作导致的内存泄漏
- [修复][ML] 修复ManagedCursorInfo和ManagedLedgerInfo解压和压缩中的内存泄漏
- [修复][ML] 修复因并发修剪账本和非持久光标创建导致的非持久光标的积压问题
- [改进][Broker] 避免PersistentReplicator.expireMessages逻辑重复计算积压
- [改进][Broker] 避免在订阅期间连接问题时记录错误
- [改进][Broker] 避免在ServerCnx中打印IncompatibleSchemaException的日志
- [改进][Broker] 在使用Admin API时不打印NotFound或Conflict错误的错误日志
- [改进][Broker] 不打印ProducerBusyException的错误日志
- [改进][Broker] 修复非持久系统主题的模式兼容性
- [改进][Broker] 提高Consumer.equals的性能
- [改进][Broker] 使估计的条目大小更准确
- [改进][Broker] 减少不必要的REPLICATED_SUBSCRIPTION_SNAPSHOT_REQUEST
- [改进][Broker] 移除自定义管理账本的冗余日志
- [改进][Broker] 支持在ConcurrentBitmapSortedLongPairSet中使用高达2^32的值
- [改进][Meta] 简化在ZKMetadataStore中获取父路径的过程
- [改进][ML] 在InflightReadsLimiter中使用无锁队列，因为没有并发访问

**客户端**
- [修复] 避免在关闭未初始化的SameAuthParamsLookupAutoClusterFailover时出现NPE
- [修复] 在尝试使用事务协调器之前初始化UrlServiceProvider
- [修复][客户端] 修复LoadManagerReport未找到的问题
- [修复][客户端] 修复ClientCnx.newLookup中的内存泄漏问题
- [修复][客户端] 修复当消息大小超过最大消息大小且启用批处理时的内存泄漏
- [修复][客户端] 修复在并发调用生产者关闭和重连时的孤立生产者问题
- [修复][客户端] 调用重交1条消息但实际发送了2条消息
- [修复][客户端] 修复使用独占模式的重试主题
- [改进][客户端] 避免在创建生产者时记录可重试错误的日志
- [改进][CLI] 在peek消息命令中支持V1主题的附加消息元数据

**Pulsar IO和Pulsar Functions**
- [修复][IO] 修复pulsar-io:pom未找到的问题
- [改进] 在Functions工具中验证用户路径
- [改进][函数] 为ListFunctions命令设置默认租户和命名空间
- [改进][IO] 允许跳过连接器部署

**其他**
- [修复] 修复代码扫描警报第48号：路径表达式中使用了不受控的数据
- [修复][构建] 为Alpine 3.20使用amazoncorretto:21-alpine3.20 JDK构建
- [修复][构建] 为构建工具添加开发者
- [修复][杂项] 在log4j2.yaml中遵循动态日志级别
- [改进][代理] 使Pulsar Proxy中的保持活动间隔可配置

**测试与CI**
- [改进][测试] 为