

# 5- Kafka的发送器对象的初始化

## 5.1 发送器对象的创建

对应Sender 对应代码：

```java
this.sender = newSender(logContext, kafkaClient, this.metadata);
```

Sender类型实现了Runnable接口

Sender对象处理向Kafka群集发送生产消息的请求的后台线程。该线程发出元数据请求以更新其集群视图，然后将生成请求发送到适当的节点。



```java
Sender newSender(LogContext logContext, KafkaClient kafkaClient, ProducerMetadata metadata) {
   //max.in.flight.requests.per.connection
    //客户端在阻塞之前将在单个连接上发送的未确认请求的最大数量。请注意，如果此配置设置为大于 1 并enable.idempotence设置为 false，则由于重试（即，如果启用重试），在发送失败后存在消息重新排序的风险。此外，启用幂等性要求此配置值小于或等于 5。如果设置了冲突的配置并且未显式启用幂等性，则禁用幂等性。
    int maxInflightRequests = producerConfig.getInt(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION);
  //request.timeout.ms 配置控制客户端等待请求响应的最长时间。如果在超时之前没有收到响应，客户端将在必要时重新发送请求，或者如果重试次数用尽，则请求失败。 默认30秒
    int requestTimeoutMs = producerConfig.getInt(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG);
   //KafkaChannel 发送消息的通道类型
    ChannelBuilder channelBuilder = ClientUtils.createChannelBuilder(producerConfig, time, logContext);
   //生产者监控指标对象创建
    ProducerMetrics metricsRegistry = new ProducerMetrics(this.metrics);
   //注意这个不是发送器是传感器对象，将连续的数值序列应用于一组相关度量
    Sensor throttleTimeSensor = Sender.throttleTimeSensor(metricsRegistry.senderMetrics);
  	//网络客户端 对象创建 用于异步请求/响应网络i/o的网络客户端。这是一个内部类，用于实现面向用户的生产者和消费者客户端。NetworkClient此类不是线程安全的！
    KafkaClient client = kafkaClient != null ? kafkaClient : new NetworkClient(
           //nioSelector接口，用于执行非阻塞多连接网络I/O。
      			//connections.max.idle.ms 空闲连接超时：服务器套接字处理器线程关闭空闲超过此时间的连接
            new Selector(producerConfig.getLong(ProducerConfig.CONNECTIONS_MAX_IDLE_MS_CONFIG),
                    this.metrics, time, "producer", channelBuilder, logContext),
            metadata,
            clientId,
            maxInflightRequests,
         //reconnect.backoff.ms 在尝试重新连接到给定主机之前等待的基本时间量。这避免了在紧密循环中重复连接到主机。此退避适用于客户端到代理的所有连接尝试。
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MS_CONFIG),
      //reconnect.backoff.max.ms 重新连接到反复连接失败的代理时等待的最长时间（以毫秒为单位）。如果提供，每台主机的退避将在每次连续连接失败时呈指数增长，直至达到此最大值。在计算回退增加后，添加 20% 的随机抖动以避免连接风暴。
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MAX_MS_CONFIG),
      
         //send.buffer.bytes 发送缓冲器字节数
            producerConfig.getInt(ProducerConfig.SEND_BUFFER_CONFIG),
       //receive.buffer.bytes 读取数据时使用的 TCP 接收缓冲区 (SO_RCVBUF) 的大小。如果值为 -1，将使用操作系统默认值。
            producerConfig.getInt(ProducerConfig.RECEIVE_BUFFER_CONFIG),
            requestTimeoutMs,
      //socket.connection.setup.timeout.ms 客户端等待套接字连接建立的时间。如果在超时之前没有建立连接，客户端将关闭套接字通道
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MS_CONFIG),
      //socket.connection.setup.timeout.max.ms 客户端等待建立套接字连接的最长时间。对于每个连续的连接失败，连接设置超时将成倍增加，直至达到此最大值。为避免连接风暴，将对超时应用 0.2 的随机化因子，从而产生低于计算值 20% 到高于 20% 的随机范围。
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MAX_MS_CONFIG),
            time,
            true,
            apiVersions,
            throttleTimeSensor,
            logContext);
	//acks 配置 生产者要求领导者在考虑完成请求之前收到的确认数量。这控制了发送的记录的持久性。允许以下设置：
			//acks=0如果设置为零，则生产者根本不会等待服务器的任何确认。该记录将立即添加到套接字缓冲区并被视为已发送。这种情况下不能保证服务器已经收到记录，retries配置不会生效（因为客户端一般不会知道有任何故障）。为每条记录返回的偏移量将始终设置为-1.
			//acks=1这意味着领导者会将记录写入其本地日志，但会在不等待所有追随者的完全确认的情况下做出响应。在这种情况下，如果领导者在确认记录后但在追随者复制它之前立即失败，那么记录将丢失。
			//acks=all这意味着领导者将等待完整的同步副本集来确认记录。这保证了只要至少一个同步副本保持活动状态，记录就不会丢失。这是最有力的保证。这相当于 acks=-1 设置。
    short acks = Short.parseShort(producerConfig.getString(ProducerConfig.ACKS_CONFIG));
    //发送器对象
    return new Sender(logContext,
            client,
            metadata,
            this.accumulator,
            maxInflightRequests == 1,
            //max.request.size  请求的最大大小（以字节为单位）。此设置将限制生产者在单个请求中发送的记录批次数，以避免发送大量请求。这实际上也是最大未压缩记录批量大小的上限。请注意，服务器对记录批量大小有自己的上限（如果启用压缩，则在压缩之后），这可能与此不同。
            producerConfig.getInt(ProducerConfig.MAX_REQUEST_SIZE_CONFIG),
            acks,
          //retries 设置大于零的值将导致客户端重新发送任何失败的请求，并可能出现暂时性错误。建议将该值设置为零或“MAX\u value”，并使用相应的超时参数来控制客户端应重试请求的时间。
            producerConfig.getInt(ProducerConfig.RETRIES_CONFIG),
            metricsRegistry.senderMetrics,
            time,
            requestTimeoutMs,
             //retry.backoff.ms  尝试重试对给定主题分区的失败请求之前等待的时间。这避免了在某些故障情况下在紧密循环中重复发送请求。
            producerConfig.getLong(ProducerConfig.RETRY_BACKOFF_MS_CONFIG),
            this.transactionManager,
            apiVersions);
}
```



可以简单总结下这个过程如下所示：

- 监控指标对象和传感器对象的创建
- KafkaClient对象的创建
- 发送器对象的创建Sender



发送器对象的创建过程有几个重要的类型我们是要看的，下面我们先来看KafkaClient类型对象的创建和初始化



## 5.2 网络客户端KafkaClient类型对象的创建于初始化

### 5.2.1 简介

网络客户端 对象创建 用于异步请求/响应网络i/o的网络客户端。这是一个内部类，用于实现面向用户的生产者和消费者客户端。NetworkClient此类不是线程安全的！

```java
//网络客户端 对象创建 用于异步请求/响应网络i/o的网络客户端。这是一个内部类，用于实现面向用户的生产者和消费者客户端。NetworkClient此类不是线程安全的！
    KafkaClient client = kafkaClient != null ? kafkaClient : new NetworkClient(
           //nioSelector接口，用于执行非阻塞多连接网络I/O。
      			//connections.max.idle.ms 空闲连接超时：服务器套接字处理器线程关闭空闲超过此时间的连接
            new Selector(producerConfig.getLong(ProducerConfig.CONNECTIONS_MAX_IDLE_MS_CONFIG),
                    this.metrics, time, "producer", channelBuilder, logContext),
            metadata,
            clientId,
            maxInflightRequests,
         //reconnect.backoff.ms 在尝试重新连接到给定主机之前等待的基本时间量。这避免了在紧密循环中重复连接到主机。此退避适用于客户端到代理的所有连接尝试。
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MS_CONFIG),
      //reconnect.backoff.max.ms 重新连接到反复连接失败的代理时等待的最长时间（以毫秒为单位）。如果提供，每台主机的退避将在每次连续连接失败时呈指数增长，直至达到此最大值。在计算回退增加后，添加 20% 的随机抖动以避免连接风暴。
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MAX_MS_CONFIG),
      
         //send.buffer.bytes 发送缓冲器字节数
            producerConfig.getInt(ProducerConfig.SEND_BUFFER_CONFIG),
       //receive.buffer.bytes 读取数据时使用的 TCP 接收缓冲区 (SO_RCVBUF) 的大小。如果值为 -1，将使用操作系统默认值。
            producerConfig.getInt(ProducerConfig.RECEIVE_BUFFER_CONFIG),
            requestTimeoutMs,
      //socket.connection.setup.timeout.ms 客户端等待套接字连接建立的时间。如果在超时之前没有建立连接，客户端将关闭套接字通道
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MS_CONFIG),
      //socket.connection.setup.timeout.max.ms 客户端等待建立套接字连接的最长时间。对于每个连续的连接失败，连接设置超时将成倍增加，直至达到此最大值。为避免连接风暴，将对超时应用 0.2 的随机化因子，从而产生低于计算值 20% 到高于 20% 的随机范围。
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MAX_MS_CONFIG),
            time,
            true,
            apiVersions,
            throttleTimeSensor,
            logContext);
```

### 5.2.2 Selector类型对象的创建

nioSelector接口，用于执行非阻塞多连接网络I/O。connections.max.idle.ms 空闲连接超时：服务器套接字处理器线程关闭空闲超过此时间的连接

下面我们先看下选择器类型对象的创建

Selector类型的构造器如下所示：

```java
public Selector(int maxReceiveSize,
        long connectionMaxIdleMs,
        int failedAuthenticationDelayMs,
        Metrics metrics,
        Time time,
        String metricGrpPrefix,
        Map<String, String> metricTags,
        boolean metricsPerConnection,
        boolean recordTimePerConnection,
        ChannelBuilder channelBuilder,
        MemoryPool memoryPool,
        LogContext logContext) {
    try {
       //创建一个nioSelector对象
        this.nioSelector = java.nio.channels.Selector.open();
    } catch (IOException e) {
        throw new KafkaException(e);
    }
  //单次网络通信最大接收字节数量 NetworkReceive.UNLIMITED配置为无限制
    this.maxReceiveSize = maxReceiveSize;
  //连接最大空闲时间，对应配置connections.max.idle.ms 超过最大空闲时间的连接将被关闭，NO_IDLE_TIMEOUT_MS配置为无上限
    this.time = time;
    this.channels = new HashMap<>();
  //
    this.explicitlyMutedChannels = new HashSet<>();
  // 内存是否溢出的标记变量，默认为false
    this.outOfMemory = false;
  //
    this.completedSends = new ArrayList<>();
  //
    this.completedReceives = new LinkedHashMap<>();
  //
    this.immediatelyConnectedKeys = new HashSet<>();
  //
    this.closingChannels = new HashMap<>();
  //
    this.keysWithBufferedRead = new HashSet<>();
  //
    this.connected = new ArrayList<>();
  //
    this.disconnected = new HashMap<>();
  //
    this.failedSends = new ArrayList<>();
  //
    this.log = logContext.logger(Selector.class);
  // 管理监控指标的传感器 这里用来监控Selector metricGrpPrefix监控前缀
    this.sensors = new SelectorMetrics(metrics, metricGrpPrefix, metricTags, metricsPerConnection);
  //为每个连接创建通道
    this.channelBuilder = channelBuilder;
  //连接评价时间
    this.recordTimePerConnection = recordTimePerConnection;
  //LRU算法管理的空闲连接
    this.idleExpiryManager = connectionMaxIdleMs < 0 ? null : new IdleExpiryManager(time, connectionMaxIdleMs);
  //内存池
    this.memoryPool = memoryPool;
  //内存池的十分之一为低内存阈值
    this.lowMemThreshold = (long) (0.1 * this.memoryPool.size());
  //最小认证失败延迟时间
    this.failedAuthenticationDelayMs = failedAuthenticationDelayMs;
  //延迟关闭的通道
    this.delayedClosingChannels = (failedAuthenticationDelayMs > NO_FAILED_AUTHENTICATION_DELAY) ? new LinkedHashMap<String, DelayedAuthenticationFailureClose>() : null;
}
```









## 5.2.3 NetworkClient网络客户端的初始化

初始化代码如下：

```java
public NetworkClient(MetadataUpdater metadataUpdater,
                     Metadata metadata,
                     Selectable selector,
                     String clientId,
                     int maxInFlightRequestsPerConnection,
                     long reconnectBackoffMs,
                     long reconnectBackoffMax,
                     int socketSendBuffer,
                     int socketReceiveBuffer,
                     int defaultRequestTimeoutMs,
                     long connectionSetupTimeoutMs,
                     long connectionSetupTimeoutMaxMs,
                     Time time,
                     boolean discoverBrokerVersions,
                     ApiVersions apiVersions,
                     Sensor throttleTimeSensor,
                     LogContext logContext,
                     HostResolver hostResolver) {
    /* It would be better if we could pass `DefaultMetadataUpdater` from the public constructor, but it's not
     * possible because `DefaultMetadataUpdater` is an inner class and it can only be instantiated after the
     * super constructor is invoked.
     */
   //用于更新和检索集群元数据的工具类 创建
    if (metadataUpdater == null) {
        if (metadata == null)
            throw new IllegalArgumentException("`metadata` must not be null");
        this.metadataUpdater = new DefaultMetadataUpdater(metadata);
    } else {
        this.metadataUpdater = metadataUpdater;
    }
  //IO 选择器
    this.selector = selector;
  //客户端id
    this.clientId = clientId;
  //配置max.in.flight.requests.per.connection  默认配置是5个 客户端单个请求的最大未确认数量
    this.inFlightRequests = new InFlightRequests(maxInFlightRequestsPerConnection);
  //连接集群的状态
    this.connectionStates = new ClusterConnectionStates(
            reconnectBackoffMs, reconnectBackoffMax,
            connectionSetupTimeoutMs, connectionSetupTimeoutMaxMs, logContext, hostResolver);
  //对应配置send.buffer.bytes 这个是TCP发送数据的缓冲区大小，如果为-1将使用操作系统默认的值
    this.socketSendBuffer = socketSendBuffer;
  //对应配置receive.buffer.bytes 这个是TCP通信接收数据的缓冲区大小，如果为-1将使用操作系统默认值
    this.socketReceiveBuffer = socketReceiveBuffer;
  //当前发送server的相关id
    this.correlation = 0;
    this.randOffset = new Random();
  //默认请求超时时间30秒
    this.defaultRequestTimeoutMs = defaultRequestTimeoutMs;
  //对应配置reconnect.backoff.ms 重连回退时间  50毫秒
    this.reconnectBackoffMs = reconnectBackoffMs;
  //SystemTime
    this.time = time;
  //默认为true 是否发现broker的版本
  //发送请求之前会先发送个版本请求的ApiVersionRequest
    this.discoverBrokerVersions = discoverBrokerVersions;
  //ApiVersions类型 用来封装节点的API信息NodeApiVersions
    this.apiVersions = apiVersions;
  //吞吐量传感器
    this.throttleTimeSensor = throttleTimeSensor;
    this.log = logContext.logger(NetworkClient.class);
  //当前状态
    this.state = new AtomicReference<>(State.ACTIVE);
}
```

