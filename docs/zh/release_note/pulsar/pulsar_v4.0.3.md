# pulsar v4.0.3
### 为什么要使用pulsar

在当今数据驱动的时代，企业面临着前所未有的信息流动和处理需求。想象一下，一个全球性的电商平台，每天要处理数百万条订单信息，实时更新库存，确保客户体验的流畅性。然而，传统的消息队列往往无法满足如此高效、低延迟的需求，这时，Apache Pulsar应运而生。它不仅解决了数据流动中的瓶颈问题，还提供了强大的多租户支持和灵活的扩展性。选择Pulsar，意味着选择了一条通往高效、可靠和可扩展的数据处理之路。

### pulsar是什么

Apache Pulsar是一个开源的分布式消息传递系统，旨在处理大规模的数据流。它支持多种消息传递模式，包括发布/订阅和点对点通信，具有高吞吐量、低延迟和强大的持久性。Pulsar的设计使其能够在多租户环境中高效运行，支持动态扩展和灵活的消息存储选项。

### 入门示例

想象一下，你是一家在线音乐流媒体服务的开发者。你需要实时处理用户的播放列表更新、歌曲推荐和用户反馈。使用Pulsar，你可以创建一个主题（Topic），将所有用户的播放列表更新发送到这个主题。然后，多个消费者可以同时订阅这个主题，实时处理这些更新。例如，当用户添加一首新歌时，Pulsar会立即将这个事件推送给所有相关的服务，确保推荐系统能快速响应，提升用户体验。以下是一个简单的代码示例：

```java
// 创建Pulsar客户端
PulsarClient client = PulsarClient.builder()
    .serviceUrl("pulsar://localhost:6650")
    .build();

// 创建生产者
Producer<String> producer = client.newProducer(Schema.STRING)
    .topic("music-playlist-updates")
    .create();

// 发送消息
producer.send("User123 added 'Song A' to their playlist.");

// 关闭生产者和客户端
producer.close();
client.close();
```

### pulsar v4.0.3版本更新了什么

Pulsar v4.0.3版本带来了多个重要更新，包括对Oxia Java客户端的升级、修复了Solr核心的版本问题、改进了基础镜像的Alpine版本、升级了json-smart库，并对Netty进行了安全性修复。这些更新旨在提升系统的稳定性和安全性，确保用户能够享受到更高效的服务。

### 更新日志

#### 2025-02-27

**库更新**
- [特性][杂项] 升级Oxia Java客户端至0.5.0
- [修复] 将org.apache.solr:solr-core从8.11.3升级至9.8.0
- [修复] 在基础镜像中使用Alpine 3.21
- [修复][构建] 升级json-smart至2.5.2
- [改进] 升级至Netty 4.1.117.Final
- [修复][安全] 升级至Netty 4.1.118以解决CVE-2025-24970

**代理**
- [修复][代理] 修复RangeCache中的错误，确保不同实例的键能够匹配
- [修复][代理] 对于共享和键共享订阅，重放读取时也应用dispatcherMaxReadSizeBytes
- [修复][代理] 关闭的主题不会从缓存中移除
- [修复][代理] 修复BucketDelayedDeliveryTracker的线程安全性
- [修复][代理] 修复在活动消费者断开时的NPE
- [修复][代理] 修复当maxUnackedMessagesPerConsumer为1时的blockedConsumerOnUnackedMsgs值
- [修复][代理] 修复速率限制器的令牌桶和时钟一致性问题，避免过度限制和连接超时

**客户端**
- [特性][客户端] 支持ZTS服务器的正向代理
- [修复] 避免在关闭未初始化的SameAuthParamsLookupAutoClusterFailover时出现NPE
- [修复] 在尝试使用事务协调器之前初始化UrlServiceProvider
- [修复][客户端] 修复LoadManagerReport未找到的问题
- [修复][客户端] 修复在消息大小超过最大消息大小且启用批处理时的内存泄漏

**其他**
- [修复] 修复代码扫描警报第48号：路径表达式中使用了不受控的数据
- [修复][构建] 使用amazoncorretto:21-alpine3.20 JDK构建Alpine 3.20
- [改进][代理] 使Pulsar Proxy中的保持活动间隔可配置

### 总结

在Pulsar v4.0.3版本中，开发团队进行了多项重要更新和修复，旨在提升系统的稳定性和安全性。这些改进不仅增强了库的功能，还优化了代理和客户端的性能，确保用户在使用Pulsar时能够享受到更高效、更安全的服务体验。