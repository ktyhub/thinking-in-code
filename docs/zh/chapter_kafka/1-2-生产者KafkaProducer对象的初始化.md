 

# 2 生产者KafkaProducer对象的初始化

## 2.1 简介

这个类型是将记录发布到Kafka群集的Kafka客户端。
生产者是线程安全的，跨线程共享单个生产者实例通常比拥有多个实例快。


下面是一个使用生产者发送记录的简单示例，其中包含序列号作为键/值对的字符串。

```java
 Properties props = new Properties();   
 props.put("bootstrap.servers", "localhost:9092");   
 props.put("acks", "all");   
 props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");   
 props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");    Producer<String, String> producer = new KafkaProducer<>(props);   
 for (int i = 0; i < 100; i++)       
     producer.send(new ProducerRecord<String, String>("my-topic", Integer.toString(i), Integer.toString(i)));      
 producer.close();
```

生产者包括一个缓冲区池，其中保存尚未传输到服务器的记录，以及一个后台I/O线程，负责将这些记录转换为请求并将其传输到集群。使用后未关闭生产者将泄漏这些资源。



- **send() 方法是异步的**。调用时，它将记录添加到挂起**记录发送的缓冲区**中，并立即返回。这使制作人能够将单个记录批处理在一起，以提高效率

- **acks配置控制将请求视为完成的条件**。默认设置“all”将导致阻止记录的完全提交，这是最慢但最持久的设置。

- **如果请求失败，生产者可以自动重试**。重试设置默认为整数Integer.MAX_VALUE，建议使用**delivery.timeout.ms** 控制重试行为，而不是重试。

- **生产者为每个分区维护未发送记录的缓冲区**。这些缓冲区的大小由 **batch.size** 配置。将其变大可能会导致更多的批处理，但需要更多的内存（因为通常每个活动分区都有一个这样的缓冲区）。

- 默认情况下，**即使缓冲区中有额外的未使用空间，也可以立即发送缓冲区**。但是，如果要减少请求数，可以设置**linger.ms** 设置为大于0的值。这将指示生产者在**发送请求之前等待该毫秒数**，希望更多记录将到达以填充同一批。这**类似于TCP中的Nagle算法**。例如，在上面的代码片段中，可能所有100条记录都将在一个请求中发送，因为我们将延迟时间设置为1毫秒。然而，如果我们没有填满缓冲区，这个设置会给等待更多记录到达的请求增加1毫秒的延迟。请注意，及时到达的记录通常会一起批处理，即使存在 linger.ms=0。因此，在负载比较大的情况下，无论延迟linger配置如何，都会进行批处理；但是，如果将其设置为大于0的值，则在不处于最大负载的情况下，可能会导致更少、更高效的请求，而代价是**很小的延迟**

- **buffer.memory控制生产者可用于缓冲的内存总量**。如果记录的发送速度超过了它们传输到服务器的速度，那么该缓冲区空间将耗尽。当**缓冲区空间耗尽时，其他发送调用将被阻止**。阻止时间的阈值由**max.block.m**确定。之后，它抛出**TimeoutException**。

- **key.serializer** 和**value.serializer** 指示如何将用户随其ProducerRecord提供的**键和值对象转换为字节**。对于简单的字符串或字节类型，可以使用包含的org.apache.kafka.common.serialization.ByteArraySerializer或org.apache.kafka.common.serialization.StringSerializer 。

- 从**Kafka 0.11开始**，KafkaProducer支持**两种附加模式**：**幂等生产者**和**事务生产者**。**幂等生产者将Kafka的传递语义从至少一次传递加强到了完全一次传递**。特别是**生产者重试将不再引入重复**。**事务生产者允许应用程序将消息原子的发送到多个分区（和主题！）**
- 从**Kafka  3.0开始**，**enable.idempotence配置默认为true**。启用幂等时，**重试配置将默认为Integer.MAX_VALUE，acks配置将默认为all**。幂等生产者没有API更改，因此不需要修改现有应用程序来利用此功能

- 为了利用幂等生产者，必须避免应用程序级的重新发送，因为这些数据不能重复消除。因此，如果应用程序启用了幂等性，建议不要设置重试配置，因为它将默认为Integer.MAX_VALUE。此外，如果发送（ProducerRecord）返回错误，即使无限次重试（例如，如果消息在发送之前在缓冲区中过期），则建议关闭生产者并检查最后生成的消息的内容，以确保其不重复。最后，生产者只能保证在单个会话中发送的消息的幂等性。
- 要使用事务生产者和助理API，必须设置transactional.id配置属性。如果transactional.id设置后，幂等性将自动启用，同时生产者配置幂等性所依赖的。此外，应配置事务中包含的主题以确保持久性。特别是， replication.factor应至少为3，这些主题的min.insync.replicas应设置为2。最后，为了从端到端实现事务性保证，还必须将使用者配置为只读提交的消息

- transactional.id的目的是支持跨单个生产者实例的多个会话进行事务恢复。它通常是从分区的、有状态的应用程序中的碎片标识符派生出来的。因此，对于在分区应用程序中运行的每个生产者实例，它应该是唯一的。
  所有新的事务性API都处于阻塞状态，并且在出现故障时会引发异常。下面的示例说明了如何使用新的API。它与上面的示例类似，只是所有100条消息都是单个事务的一部分



 

## 2.2 构造器代码

### 2.2.1 构造器代码逻辑大纲

- 开始
- 配置转换
  - Properties配置转 Map<String, Object>
  - Map<String, Object>配置 转ProducerConfig
- KafkaProducer基础属性初始化
  - producerConfig
  - time
  - clientId 默认为producer-自增长的id
- 可观测性对象的初始化
  - 初始化Logger类型日志 对象log
  - 初始化监控指标配置 MetricConfig类型对象
  - 加载指标报告器 List<MetricsReporter>
  - JmxReporter对象初始 化
  - KafkaProducerMetrics监 控指对象创建标对象
- 消息发送相关对象初始化
  - 分区器Partitioner类型对 象初始化
  - keySerializer对象创建序 列化KEY使用
  - valueSerializer对象创建 序列化VALUE使用
- 过滤器拦截器增强功能对象初始化
  - ProducerInterceptors 生产者拦截器对象初始 化
  - ClusterResourceListeners 集群资源监听器
- 其他对象的初始化
  - RecordAccumulator记录 累加器初始化
  - ProducerMetadata 生产者元数据对象初始 化
- 发送器创建于IO线程的启动调用
  - Sender发送器对象初始 化
  - KafkaThread IO线程对 象创建
  - ioThread.start()启动IO 线程
- 注册AppInfo信息到JMX
- 结束



KafkaProducer的构造器

```java
public KafkaProducer(Properties properties) {
        //配置转换 Properties配置转 Map<String, Object>
        this(propsToMap(properties), null, null, null, null, null, Time.SYSTEM);
    }
```



KafkaProducer 重载的构造器 

```java
KafkaProducer(Map<String, Object> configs,
              Serializer<K> keySerializer,
              Serializer<V> valueSerializer,
              ProducerMetadata metadata,
              KafkaClient kafkaClient,
              ProducerInterceptors interceptors,
              Time time) {
   //配置转换 Map<String, Object>配置 转ProducerConfig
    ProducerConfig config = new ProducerConfig(ProducerConfig.addSerializerToConfig(configs, keySerializer,
            valueSerializer));
    try {
      //KafkaProducer基础属性初始化
        Map<String, Object> userProvidedConfigs = config.originals();
        this.producerConfig = config;
        this.time = time;
        String clientId = config.getString(ProducerConfig.CLIENT_ID_CONFIG);
        if (clientId.length() <= 0)
            clientId = "producer-" + PRODUCER_CLIENT_ID_SEQUENCE.getAndIncrement();
        this.clientId = clientId;

        String transactionalId = userProvidedConfigs.containsKey(ProducerConfig.TRANSACTIONAL_ID_CONFIG) ?
                (String) userProvidedConfigs.get(ProducerConfig.TRANSACTIONAL_ID_CONFIG) : null;
       //初始化Logger类型日志 对象log
        LogContext logContext;
        if (transactionalId == null)
            logContext = new LogContext(String.format("[Producer clientId=%s] ", clientId));
        else
            logContext = new LogContext(String.format("[Producer clientId=%s, transactionalId=%s] ", clientId, transactionalId));
        log = logContext.logger(KafkaProducer.class);
        log.trace("Starting the Kafka producer");
			
      	//初始化监控指标配置 MetricConfig类型对象
        Map<String, String> metricTags = Collections.singletonMap("client-id", clientId);
        MetricConfig metricConfig = new MetricConfig().samples(config.getInt(ProducerConfig.METRICS_NUM_SAMPLES_CONFIG))
                .timeWindow(config.getLong(ProducerConfig.METRICS_SAMPLE_WINDOW_MS_CONFIG), TimeUnit.MILLISECONDS)
                .recordLevel(Sensor.RecordingLevel.forName(config.getString(ProducerConfig.METRICS_RECORDING_LEVEL_CONFIG)))
                .tags(metricTags);
        List<MetricsReporter> reporters = config.getConfiguredInstances(ProducerConfig.METRIC_REPORTER_CLASSES_CONFIG,
                MetricsReporter.class,
                Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId));
        reporters.add(new JmxReporter(JMX_PREFIX));
        this.metrics = new Metrics(metricConfig, reporters, time);
        this.partitioner = config.getConfiguredInstance(ProducerConfig.PARTITIONER_CLASS_CONFIG, Partitioner.class);
        long retryBackoffMs = config.getLong(ProducerConfig.RETRY_BACKOFF_MS_CONFIG);
        if (keySerializer == null) {
            this.keySerializer = config.getConfiguredInstance(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
                                                                                     Serializer.class);
            this.keySerializer.configure(config.originals(), true);
        } else {
            config.ignore(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG);
            this.keySerializer = keySerializer;
        }
        if (valueSerializer == null) {
            this.valueSerializer = config.getConfiguredInstance(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
                                                                                       Serializer.class);
            this.valueSerializer.configure(config.originals(), false);
        } else {
            config.ignore(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG);
            this.valueSerializer = valueSerializer;
        }

        // load interceptors and make sure they get clientId
        userProvidedConfigs.put(ProducerConfig.CLIENT_ID_CONFIG, clientId);
        ProducerConfig configWithClientId = new ProducerConfig(userProvidedConfigs, false);
        List<ProducerInterceptor<K, V>> interceptorList = (List) configWithClientId.getConfiguredInstances(
                ProducerConfig.INTERCEPTOR_CLASSES_CONFIG, ProducerInterceptor.class);
        if (interceptors != null)
            this.interceptors = interceptors;
        else
            this.interceptors = new ProducerInterceptors<>(interceptorList);
        ClusterResourceListeners clusterResourceListeners = configureClusterResourceListeners(keySerializer,
                valueSerializer, interceptorList, reporters);
        this.maxRequestSize = config.getInt(ProducerConfig.MAX_REQUEST_SIZE_CONFIG);
        this.totalMemorySize = config.getLong(ProducerConfig.BUFFER_MEMORY_CONFIG);
        this.compressionType = CompressionType.forName(config.getString(ProducerConfig.COMPRESSION_TYPE_CONFIG));

        this.maxBlockTimeMs = config.getLong(ProducerConfig.MAX_BLOCK_MS_CONFIG);
        this.transactionManager = configureTransactionState(config, logContext, log);
        int deliveryTimeoutMs = configureDeliveryTimeout(config, log);

        this.apiVersions = new ApiVersions();
        this.accumulator = new RecordAccumulator(logContext,
                config.getInt(ProducerConfig.BATCH_SIZE_CONFIG),
                this.compressionType,
                lingerMs(config),
                retryBackoffMs,
                deliveryTimeoutMs,
                metrics,
                PRODUCER_METRIC_GROUP_NAME,
                time,
                apiVersions,
                transactionManager,
                new BufferPool(this.totalMemorySize, config.getInt(ProducerConfig.BATCH_SIZE_CONFIG), metrics, time, PRODUCER_METRIC_GROUP_NAME));
        List<InetSocketAddress> addresses = ClientUtils.parseAndValidateAddresses(
                config.getList(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG),
                config.getString(ProducerConfig.CLIENT_DNS_LOOKUP_CONFIG));
        if (metadata != null) {
            this.metadata = metadata;
        } else {
            this.metadata = new ProducerMetadata(retryBackoffMs,
                    config.getLong(ProducerConfig.METADATA_MAX_AGE_CONFIG),
                    logContext,
                    clusterResourceListeners,
                    Time.SYSTEM);
            this.metadata.bootstrap(addresses, time.milliseconds());
        }
        this.errors = this.metrics.sensor("errors");
        this.sender = newSender(logContext, kafkaClient, this.metadata);
        String ioThreadName = NETWORK_THREAD_PREFIX + " | " + clientId;
        this.ioThread = new KafkaThread(ioThreadName, this.sender, true);
        this.ioThread.start();
        config.logUnused();
        AppInfoParser.registerAppInfo(JMX_PREFIX, clientId, metrics, time.milliseconds());
        log.debug("Kafka producer started");
    } catch (Throwable t) {
        // call close methods if internal objects are already constructed this is to prevent resource leak. see KAFKA-2121
        close(Duration.ofMillis(0), true);
        // now propagate the exception
        throw new KafkaException("Failed to construct kafka producer", t);
    }
}
```