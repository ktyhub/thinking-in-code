 
#  **KafkaProducer生产者对象的长篇源码解析简介**

##   **简介**

生产者用来发送消息到kafka代理服务器，我们先来看下KafkaProducer类型的官方说明：

KafkaProducer是将记录发布到Kafka群集的Kafka客户端。
生产者是线程安全的，跨线程共享单个生产者实例通常比拥有多个实例更快。
下面是一个简单的示例，使用producer发送包含序列号的字符串作为键/值对的记录。

```java
 Properties props = new Properties();
 props.put("bootstrap.servers", "localhost:9092");
 props.put("linger.ms", 1);
 props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
 props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

 Producer  producer = new KafkaProducer<>(props);
 for (int i = 0; i < 100; i++)
     producer.send(new ProducerRecord ("my-topic", Integer.toString(i), Integer.toString(i)));

 producer.close();
```



生产者包括一个缓冲区池，其中保存尚未传输到服务器的记录，以及一个后台I/O线程，负责将这些记录转换为请求并将其传输到集群。使用后未关闭生产者将泄漏这些资源。

- send() 方法是异步的。调用时，它将记录添加到挂起记录发送的缓冲区中，并立即返回。这使制作人能够将单个记录批处理在一起，以提高效率

- acks配置控制将请求视为完成的条件。默认设置“all”将导致阻止记录的完全提交，这是最慢但最持久的设置。

- 如果请求失败，生产者可以自动重试。重试设置默认为整数Integer.MAX_VALUE，建议使用delivery.timeout.ms 控制重试行为，而不是重试。

- 生产者为每个分区维护未发送记录的缓冲区。这些缓冲区的大小由 batch.size 配置。将其变大可能会导致更多的批处理，但需要更多的内存（因为通常每个活动分区都有一个这样的缓冲区）。

- 默认情况下，即使缓冲区中有额外的未使用空间，也可以立即发送缓冲区。但是，如果要减少请求数，可以设置linger.ms 设置为大于0的值。这将指示生产者在发送请求之前等待该毫秒数，希望更多记录将到达以填充同一批。这类似于TCP中的Nagle算法。例如，在上面的代码片段中，可能所有100条记录都将在一个请求中发送，因为我们将延迟时间设置为1毫秒。然而，如果我们没有填满缓冲区，这个设置会给等待更多记录到达的请求增加1毫秒的延迟。请注意，及时到达的记录通常会一起批处理，即使存在 linger.ms=0。因此，在负载比较大的情况下，无论延迟linger配置如何，都会进行批处理；但是，如果将其设置为大于0的值，则在不处于最大负载的情况下，可能会导致更少、更高效的请求，而代价是很小的延迟

- buffer.memory控制生产者可用于缓冲的内存总量。如果记录的发送速度超过了它们传输到服务器的速度，那么该缓冲区空间将耗尽。当缓冲区空间耗尽时，其他发送调用将被阻止。阻止时间的阈值由max.block.m确定。之后，它抛出TimeoutException。

- key.serializer 和value.serializer 指示如何将用户随其ProducerRecord提供的键和值对象转换为字节。对于简单的字符串或字节类型，可以使用包含的org.apache.kafka.common.serialization.ByteArraySerializer或org.apache.kafka.common.serialization.StringSerializer 。

- 从Kafka 0.11开始，KafkaProducer支持两种附加模式：幂等生产者和事务生产者。幂等生产者将Kafka的传递语义从至少一次传递加强到了完全一次传递。特别是生产者重试将不再引入重复。事务生产者允许应用程序将消息原子的发送到多个分区（和主题！）
- 从Kafka  3.0开始，enable.idempotence配置默认为true。启用幂等时，重试配置将默认为Integer.MAX_VALUE，acks配置将默认为all。幂等生产者没有API更改，因此不需要修改现有应用程序来利用此功能

- 为了利用幂等生产者，必须避免应用程序级的重新发送，因为这些数据不能重复消除。因此，如果应用程序启用了幂等性，建议不要设置重试配置，因为它将默认为Integer.MAX_VALUE。此外，如果发送（ProducerRecord）返回错误，即使无限次重试（例如，如果消息在发送之前在缓冲区中过期），则建议关闭生产者并检查最后生成的消息的内容，以确保其不重复。最后，生产者只能保证在单个会话中发送的消息的幂等性。
- 要使用事务生产者和助理API，必须设置transactional.id配置属性。如果transactional.id设置后，幂等性将自动启用，同时生产者配置幂等性所依赖的。此外，应配置事务中包含的主题以确保持久性。特别是， replication.factor应至少为3，这些主题的min.insync.replicas应设置为2。最后，为了从端到端实现事务性保证，还必须将使用者配置为只读提交的消息

- transactional.id的目的是支持跨单个生产者实例的多个会话进行事务恢复。它通常是从分区的、有状态的应用程序中的碎片标识符派生出来的。因此，对于在分区应用程序中运行的每个生产者实例，它应该是唯一的。
  所有新的事务性API都处于阻塞状态，并且在出现故障时会引发异常。下面的示例说明了如何使用新的API。它与上面的示例类似，只是所有100条消息都是单个事务的一部分

 
```java
 Properties props = new Properties();
 props.put("bootstrap.servers", "localhost:9092");
 props.put("transactional.id", "my-transactional-id");
 Producer  producer = new KafkaProducer<>(props, new StringSerializer(), new StringSerializer());

 producer.initTransactions();

 try {
     producer.beginTransaction();
     for (int i = 0; i < 100; i++)
         producer.send(new ProducerRecord<>("my-topic", Integer.toString(i), Integer.toString(i)));
     producer.commitTransaction();
 } catch (ProducerFencedException | OutOfOrderSequenceException | AuthorizationException e) {
     // We can't recover from these exceptions, so our only option is to close the producer and exit.
     producer.close();
 } catch (KafkaException e) {
     // For all other exceptions, just abort the transaction and try again.
     producer.abortTransaction();
 }
 producer.close();
```

正如示例中所提示的，每个生产者只能有一个未结束的事务。在beginTransaction() 和commitTransaction() 调用之间发送的所有消息都将是单个事务的一部分。当事务。如果指定了id，则生产者发送的所有消息都必须是事务的一部分。

事务生产者使用异常来传递错误状态。 特别是，不需要为producer.send() 指定回调，也不需要在返回的将来指定回调到call .get()：

如果任何一个producer.send() 或事务调用在事务期间遇到不可恢复的错误。有关从事务性发送中检测错误的更多详细信息，请参阅send（ProducerRecord）文档。
调用 producer.abortTransaction() 在接收到KafkaException时，我们可以确保任何成功的写入都标记为已中止，从而保留事务保证。

此客户端可以与版本为0.10.0或更新版本的代理通信。较旧或较新的代理可能不支持某些客户端功能。例如，事务性API需要broker版本0.11.0或更高版本。当调用在运行的代理版本中不可用的API时，您将收到UnsupportedVersionException。

关于Kafka生产者的设计也是相对独立没有特别复杂的类型继承关系如下图

![3-4-kafka.png](/zh/chapter_kafka/3-4-kafka.png)

##  **KafkaProducer对象初始化过程**

前面了解了当前的配置信息，这里我们来看下生产者对象KafkaProducer的初始化过程

参数为属性的构造器：

```java
public KafkaProducer(Properties properties) {
    this(properties, null, null);
}
```


使用配置来调用重载的构造器方法，关于参数配置可以参阅官网[生产者配置](https://kafka.apache.org/documentation.html#producerconfigs)

重载的3个参数的构造器

```java
public KafkaProducer(Properties properties, Serializer<K> keySerializer, Serializer<V> valueSerializer) {
    this(Utils.propsToMap(properties), keySerializer, valueSerializer);
}
```

这个构造器额外增加了key和value的序列化的参数 ，前面我们例子中的代码使用了Properties来传递了参数效果是一样的。

```java
public KafkaProducer(Map<String, Object> configs, Serializer<K> keySerializer, Serializer<V> valueSerializer) {
    this(new ProducerConfig(ProducerConfig.appendSerializerToConfig(configs, keySerializer, valueSerializer)),
            keySerializer, valueSerializer, null, null, null, Time.SYSTEM);
}
```

属性参数转换成了Map<String, Object>类型，然后这里继续进行转换，转换为ProducerConfig类型进行属性封装，关于这个配置对象这里先不细说，可以先来了解配置信息

关于接下来重载的构造器就是执行了核心逻辑的构造器如下所示,代码略微有点长 后面我给总结一下：

```java
// visible for testing
@SuppressWarnings("unchecked")
KafkaProducer(ProducerConfig config,
              Serializer<K> keySerializer,
              Serializer<V> valueSerializer,
              ProducerMetadata metadata,
              KafkaClient kafkaClient,
              ProducerInterceptors<K, V> interceptors,
              Time time) {
    try {
        //生产者配置成员变量内存存储
        this.producerConfig = config;
      	//系统时间参数赋值给成员变量
        this.time = time;
			  //事务id参数获取transactional.id
        String transactionalId = config.getString(ProducerConfig.TRANSACTIONAL_ID_CONFIG);
			  //客户端参数id获取 client.id
        this.clientId = config.getString(ProducerConfig.CLIENT_ID_CONFIG);

      	//日式上下文初始化 指定了事务id和clientid的会打印到日志中
        LogContext logContext;
        if (transactionalId == null)
            logContext = new LogContext(String.format("[Producer clientId=%s] ", clientId));
        else
            logContext = new LogContext(String.format("[Producer clientId=%s, transactionalId=%s] ", clientId, transactionalId));
        log = logContext.logger(KafkaProducer.class);
        log.trace("Starting the Kafka producer");

      	//初始化监控指标配置 标签client-id配置
       //关于生产者的监控指标可以看官网文档：https://kafka.apache.org/documentation/#producer_monitoring
        Map<String, String> metricTags = Collections.singletonMap("client-id", clientId);
        MetricConfig metricConfig = new MetricConfig().samples(config.getInt(ProducerConfig.METRICS_NUM_SAMPLES_CONFIG))
                .timeWindow(config.getLong(ProducerConfig.METRICS_SAMPLE_WINDOW_MS_CONFIG), TimeUnit.MILLISECONDS)
                .recordLevel(Sensor.RecordingLevel.forName(config.getString(ProducerConfig.METRICS_RECORDING_LEVEL_CONFIG)))
                .tags(metricTags);
        List<MetricsReporter> reporters = config.getConfiguredInstances(ProducerConfig.METRIC_REPORTER_CLASSES_CONFIG,
                MetricsReporter.class,
                Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId));
        //jmx 方式提供的监控
        JmxReporter jmxReporter = new JmxReporter();
        jmxReporter.configure(config.originals(Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId)));
        reporters.add(jmxReporter);
        //监控指标上下文 （容器）
        MetricsContext metricsContext = new KafkaMetricsContext(JMX_PREFIX,
                config.originalsWithPrefix(CommonClientConfigs.METRICS_CONTEXT_PREFIX));
        this.metrics = new Metrics(metricConfig, reporters, time, metricsContext);
       //生产者指标对象 
        this.producerMetrics = new KafkaProducerMetrics(metrics);
        this.partitioner = config.getConfiguredInstance(
                ProducerConfig.PARTITIONER_CLASS_CONFIG,
                Partitioner.class,
                Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId));
       //retry.backoff.ms 重试回退时间，在尝试重试对给定主题分区的失败请求之前等待的时间量。这避免了在某些故障情况下在紧密循环中重复发送请求。
        long retryBackoffMs = config.getLong(ProducerConfig.RETRY_BACKOFF_MS_CONFIG);
        //key的序列化器初始化key.serializer
        if (keySerializer == null) {
            this.keySerializer = config.getConfiguredInstance(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
                                                                                     Serializer.class);
            this.keySerializer.configure(config.originals(Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId)), true);
        } else {
            config.ignore(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG);
            this.keySerializer = keySerializer;
        }
       //值序列化器的初始化value.serializer
        if (valueSerializer == null) {
            this.valueSerializer = config.getConfiguredInstance(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
                                                                                       Serializer.class);
            this.valueSerializer.configure(config.originals(Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId)), false);
        } else {
            config.ignore(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG);
            this.valueSerializer = valueSerializer;
        }
			 // 拦截器列表的初始化interceptor.classes
        List<ProducerInterceptor<K, V>> interceptorList = (List) config.getConfiguredInstances(
                ProducerConfig.INTERCEPTOR_CLASSES_CONFIG,
                ProducerInterceptor.class,
                Collections.singletonMap(ProducerConfig.CLIENT_ID_CONFIG, clientId));
        if (interceptors != null)
            this.interceptors = interceptors;
        else
            this.interceptors = new ProducerInterceptors<>(interceptorList);
      
        //这个监听器是用于元数据更新时候的通知 ，这里是注册监听器的只有这个资源类型实现了ClusterResourceListener接口才会被添加到监听器里面
        ClusterResourceListeners clusterResourceListeners = configureClusterResourceListeners(keySerializer,
                valueSerializer, interceptorList, reporters);
        //max.request.size参数初始化 请求的最大大小（以字节为单位） 
        this.maxRequestSize = config.getInt(ProducerConfig.MAX_REQUEST_SIZE_CONFIG);
       //buffer.memory 生产者可用于缓冲等待发送到服务器的记录的内存总字节数。 
        this.totalMemorySize = config.getLong(ProducerConfig.BUFFER_MEMORY_CONFIG);
       //compression.type 生产者生成的所有数据的压缩类型。默认值为无（即不压缩）。 
        this.compressionType = CompressionType.forName(config.getString(ProducerConfig.COMPRESSION_TYPE_CONFIG));
			//max.block.ms 配置控制KafkaProducer's send()、partitionsFor()、initTransactions()、sendOffsetsToTransaction()和方法将阻塞commitTransaction()多长时间。 
        this.maxBlockTimeMs = config.getLong(ProducerConfig.MAX_BLOCK_MS_CONFIG);
       //delivery.timeout.ms send()调用返回后报告成功或失败的时间上限。 
        int deliveryTimeoutMs = configureDeliveryTimeout(config, log);
			
      //维护节点api版本，以便在NetworkClient（信息的来源）之外进行访问。该模式类似于对主题元数据使用元数据。注：此类仅用于卡夫卡内部使用。
        this.apiVersions = new ApiVersions();
      
      	//TransactionManager对象的初始化
        this.transactionManager = configureTransactionState(config, logContext);
      
      	//此类充当队列，将记录累积到MemoryRecords实例中，以发送到服务器。累加器使用有限的内存，当内存耗尽时，append调用将被阻止，除非明确禁用此行为
        this.accumulator = new RecordAccumulator(logContext,
                 //batch.size 批处理大小参数 见后面解释
                config.getInt(ProducerConfig.BATCH_SIZE_CONFIG),
                 //压缩类型
                this.compressionType,
                //linger.ms 等待延迟 参数 见后面解释                                 
                lingerMs(config),
                //重试的回退时间
                retryBackoffMs,
                //报告成功或者失败的时间上限
                deliveryTimeoutMs,
                //监控埋点
                metrics,
                PRODUCER_METRIC_GROUP_NAME,
                time,
                apiVersions,
                transactionManager,
                //内存池
                new BufferPool(this.totalMemorySize, config.getInt(ProducerConfig.BATCH_SIZE_CONFIG), metrics, time, PRODUCER_METRIC_GROUP_NAME));
				//bootstrap.servers kafka 代理服务器地址
        List<InetSocketAddress> addresses = ClientUtils.parseAndValidateAddresses(
                config.getList(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG),
                config.getString(ProducerConfig.CLIENT_DNS_LOOKUP_CONFIG));
        //生产者元数据对象初始化
        if (metadata != null) {
            this.metadata = metadata;
        } else {
            
            this.metadata = new ProducerMetadata(retryBackoffMs,
                    //metadata.max.age.ms 即使我们没有看到任何分区领导层更改以主动发现任何新代理或分区，我们也强制刷新元数据的时间段（以毫秒为单位）                        
                    config.getLong(ProducerConfig.METADATA_MAX_AGE_CONFIG),
                    //metadata.max.idle.ms 控制生产者为空闲主题缓存元数据的时间。如果自上次生成主题以来经过的时间超过了元数据空闲持续时间，则该主题的元数据将被遗忘，并且下一次对其的访问将强制执行元数据获取请求。
                    config.getLong(ProducerConfig.METADATA_MAX_IDLE_CONFIG),
                    logContext,
                    clusterResourceListeners,
                    Time.SYSTEM);
            //元数据初始化
            this.metadata.bootstrap(addresses);
        }
        this.errors = this.metrics.sensor("errors");
        //创建一个发送对象 处理向Kafka集群发送PRODUCT请求的后台线程。该线程发出元数据请求以更新其集群视图，然后将生成请求发送到适当的节点。
        this.sender = newSender(logContext, kafkaClient, this.metadata);
        //io线程名字 kafka-producer-network-thread + clientId
        String ioThreadName = NETWORK_THREAD_PREFIX + " | " + clientId;
        //io线程对象创建
        this.ioThread = new KafkaThread(ioThreadName, this.sender, true);
        //io线程穷
        this.ioThread.start();
        //打印未使用的配置
        config.logUnused();
        //jmx监控信息注册
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


看完了生产者的对象初始化过程，发现这个方法设计的太长了那就简单总结下：

- 基本配置的初始化
- 监控配置的初始化
- 元数据配置的初始化
- 发送对象的初始化
- io线程的初始化



##  **基本配置的初始化**
###  **基本配置详细说明**
关于Kafka生产者的参数配置，详情可以查阅官网：关于参数配置可以参阅官网[生产者配置](https://kafka.apache.org/documentation.html#producerconfigs)

基本配置详细说明

这里列举下在前面代码注释中没有详细说的一些配置，上面有一些配置比较长的就列在下面感兴趣的可以详细看一下：

- **retry.backoff.ms** 重试回退时间，在尝试重试对给定主题分区的失败请求之前等待的时间量。这避免了在某些故障情况下在紧密循环中重复发送请求。

- **max.request.size** 参数初始化 请求的最大大小（以字节为单位）。此设置将限制生产者在单个请求中发送的记录批次数，以避免发送大量请求。这实际上也是最大未压缩记录批量大小的上限。请注意，服务器对记录批量大小有自己的上限（如果启用压缩，则在压缩之后），这可能与此不同。

- **buffer.memory** 生产者可用于缓冲等待发送到服务器的记录的内存总字节数。如果记录的发送速度快于它们可以传递到服务器的速度，则生产者将阻塞，max.block.ms之后它将引发异常。此设置应大致对应于生产者将使用的总内存，但不是硬性限制，因为并非生产者使用的所有内存都用于缓冲。一些额外的内存将用于压缩（如果启用压缩）以及维护正在进行的请求。

- **compression.type** 生产者生成的所有数据的压缩类型。默认值为无（即不压缩）。有效值为none、gzip、snappy、lz4或zstd。压缩是整批数据，所以批处理的效果也会影响压缩率（更多的批处理意味着更好的压缩）

- **delivery.timeout.ms**  send()调用返回后报告成功或失败的时间上限。这限制了记录在发送之前将被延迟的总时间、等待代理确认的时间（如果需要）以及可重试发送失败所允许的时间。如果遇到不可恢复的错误，重试已用尽，或者记录被添加到到达较早交付到期期限的批次中，生产者可能会报告未能在此配置之前发送记录。此配置的值应大于或等于 和 之request.timeout.ms和linger.ms。

- **max.block.ms** 配置控制KafkaProducer's send()、partitionsFor()、initTransactions()、sendOffsetsToTransaction()和方法将阻塞commitTransaction()多长时间。abortTransaction()对于send()此超时限制等待元数据获取和缓冲区分配的总时间（用户提供的序列化程序或分区程序中的阻塞不计入此超时）。对于partitionsFor()此超时限制，如果元数据不可用，则等待元数据所花费的时间。与事务相关的方法总是阻塞，但如果事务协调器无法被发现或在超时内没有响应，则可能会超时。

- **batch.size** 每当多个记录被发送到同一个分区时，生产者将尝试将记录一起批处理成更少的请求。这有助于客户端和服务器的性能。此配置控制默认批量大小（以字节为单位）。不会尝试批处理大于此大小的记录。发送到代理的请求将包含多个批次，每个分区都有一个可发送的数据。小批量将使批处理不太常见，并且可能会降低吞吐量（批量大小为零将完全禁用批处理）。一个非常大的批处理大小可能会更浪费内存，因为我们总是会分配一个指定批处理大小的缓冲区以预期额外的记录。注意：此设置给出了要发送的批量大小的上限。如果我们为这个分区积累的字节数少于这个数量，我们将“徘徊”`linger.ms`等待更多记录出现的时间。此设置默认为 0，这意味着即使累积的批量大小在此设置`linger.ms`下，我们也会立即发送一条记录。`batch.size`

- **linger.ms** 生产者将在请求传输之间到达的任何记录组合成一个批处理请求。通常，这仅在记录到达速度快于发送速度时才会在负载下发生。但是在某些情况下，即使在中等负载下，客户端也可能希望减少请求的数量。此设置通过添加少量人为延迟来实现这一点——也就是说，生产者不会立即发送记录，而是等待给定的延迟以允许发送其他记录，以便可以将发送一起批处理。这可以被认为类似于 TCP 中的 Nagle 算法。这个设置给出了批处理延迟的上限：一旦我们得到`batch.size`不管这个设置如何，它都会立即发送一个分区的记录，但是如果我们为这个分区积累的字节数少于这个数量，我们将“徘徊”指定的时间，等待更多的记录出现。此设置默认为 0（即无延迟）。`linger.ms=5`例如，设置会产生减少发送请求数量的效果，但会给在没有负载的情况下发送的记录增加最多 5ms 的延迟。

- **BufferPool** 保持在给定内存限制下的ByteBuffers池。该类型相当特定于生产者的需求。特别是它具有以下特性：

    - 有一种特殊的“内存池大小”，这种大小的缓冲区保存在一个列表中并循环使用

    - 这是公平的。也就是说，所有内存都会分配给等待时间最长的线程，直到它有足够的内存为止。这可以防止线程请求大量内存并需要阻塞直到释放多个缓冲区时出现饥饿或死锁。

- **bootstrap.servers** 用于建立与 Kafka 集群的初始连接的主机/端口对列表。客户端将使用所有服务器，无论此处指定哪些服务器进行引导——此列表仅影响用于发现完整服务器集的初始主机。此列表应采用`host1:port1,host2:port2,...`. 由于这些服务器仅用于初始连接以发现完整的集群成员（可能会动态更改），因此此列表不需要包含完整的服务器集（但您可能需要多个服务器，以防服务器停机）

- **client.dns.lookup** 控制客户端如何使用 DNS 查找。如果设置为`use_all_dns_ips`，则依次连接到每个返回的 IP 地址，直到建立成功的连接。断开连接后，使用下一个 IP。一旦所有 IP 都被使用过一次，客户端会再次从主机名解析 IP（然而，JVM 和操作系统都会缓存 DNS 名称查找）。如果设置为`resolve_canonical_bootstrap_servers_only`，则将每个引导地址解析为规范名称列表。在引导阶段之后，它的行为与`use_all_dns_ips`.



###  **分区器Partitioner**

对应配置 partitioner.class

用于确定生成记录时要发送到哪个分区的类。可用选项有：

-   `org.apache.kafka.clients.producer.internals.DefaultPartitioner`：默认分区器。此策略将尝试坚持一个分区，直到批次已满或 linger.ms已完成。它适用于以下策略：
    - 如果未指定分区但存在键，则根据键的散列选择分区
    - 如果不存在分区或键，请选择在批处理已满或`linger.ms`已启动时更改的粘性分区。
-   `org.apache.kafka.clients.producer.RoundRobinPartitioner`：这种分区策略是一系列连续记录中的每条记录将被发送到不同的分区（无论是否提供'key'），直到我们用完分区并重新开始。注意：有一个已知问题会在创建新批次时导致分布不均。详情请查看 KAFKA-9965。
-   `org.apache.kafka.clients.producer.UniformStickyPartitioner`：此分区策略将尝试坚持一个分区（无论是否提供了“密钥”），直到批次已满或已满`linger.ms`。

实现该`org.apache.kafka.clients.producer.Partitioner`接口允许您插入自定义分区器。默认为org.apache.kafka.clients.producer.internals.DefaultPartitioner


###   **拦截器**

对应配置interceptor.classes

用作拦截器的类列表。实现该`org.apache.kafka.clients.producer.ProducerInterceptor`接口允许您在将生产者收到的记录发布到 Kafka 集群之前拦截（并可能改变）这些记录。默认情况下，没有拦截器。

###  **事务的一些配置**

事务的配置对应类型事务管理器TransactionManager类型

- enable.idempotence

  当设置为“true”时，生产者将确保每条消息的一个副本被写入流中。如果为“false”，生产者由于代理失败等原因重试，可能会在流中写入重试消息的副本。请注意，启用幂等性要求max.in.flight.requests.per.connection小于或等于 5（保留任何允许值的消息顺序），retries大于 0，并且acks必须为“全部”。如果没有设置冲突配置，则默认启用幂等性。如果设置了冲突配置并且没有显式启用幂等性，则禁用幂等性。如果显式启用了幂等性并且设置了冲突的配置，ConfigException则抛出 a。

- transactional.id 用于事务交付的 TransactionalId。这启用了跨越多个生产者会话的可靠性语义，因为它允许客户端保证在开始任何新事务之前已完成使用相同 TransactionalId 的事务。如果没有提供 TransactionalId，则生产者仅限于幂等交付。如果配置了 TransactionalId，`enable.idempotence`则暗示。默认情况下没有配置 TransactionId，这意味着不能使用事务。请注意，默认情况下，事务需要至少三个代理的集群，这是生产的推荐设置；对于开发，您可以通过调整代理设置来更改此设置`transaction.state.log.replication.factor`。

- transaction.timeout.ms 事务协调器在主动中止正在进行的事务之前等待生产者的事务状态更新的最长时间（毫秒）。如果此值大于代理中的 transaction.max.timeout.ms 设置，则请求将失败并出现`InvalidTxnTimeoutException`错误 默认：	60000（1 分钟）

##  **监控配置**

###  **配置 MetricConfig**

- samples 样品配置

- metrics.sample.window.ms 配置 计算指标样本的时间窗口 单位毫秒 默认值为30000 (30 seconds)

- metrics.recording.level 指标的最高记录级别。默认为INFO 可以配置INFO, DEBUG, TRACE

- tags 监控标签，这里增加了一个client-id指标 ，后续其他指标也会加入



###  **配置监控报告器MetricsReporter**

用作度量报告器的类的列表。实现org.apache.kafka.common.metrics.MetricsReporter 接口允许插入将被通知创建新度量的类。始终包含JmxReporter以注册JMX统计信息。

###  **配置 指标上下文MetricsContext**

作为MetricsContext的一个实现，它封装了Kafka服务和客户端所需的metrics上下文属性

###  **配置 指标 Metrics**

传感器和指标的注册。

- 指标是一种命名的数字指标。

- 传感器是一个处理器，用于记录发生的数值测量。

我是这样理解的，指标是数据的标签和数据的值，传感器是用来计算和管理指标的

每个传感器都有零个或多个相关指标。例如，传感器可能表示消息大小，我们可能会将平均、最大或其他统计信息的度量与此传感器关联，这些统计信息是根据传感器记录的消息大小序列计算出来的。
用法如下所示：

```java
 // set up metrics:
   Metrics metrics = new Metrics(); // this is the global repository of metrics and sensors
   Sensor sensor = metrics.sensor("message-sizes");
   MetricName metricName = new MetricName("message-size-avg", "producer-metrics");
   sensor.add(metricName, new Avg());
   metricName = new MetricName("message-size-max", "producer-metrics");
   sensor.add(metricName, new Max());
   
   // as messages are sent we record the sizes
   sensor.record(messageSize);
```





KafkaProducerMetrics 生产者度量类，用于处理生产者的一些监控指标

官网提供了生产者指标的说明如链接：[生产者监控](https://kafka.apache.org/documentation/#producer_monitoring)



##  **生产者元数据**
###  **ProducerMetadata**
这里主要来看生产者元数据对象的创建ProducerMetadata和启动方法：

```java
this.metadata.bootstrap(addresses);
```



关于Metadata

封装元数据周围的一些逻辑的类。
此类由客户端线程（用于分区）和后台发送方线程共享。元数据仅为主题的一个子集维护，可以随时间添加到其中。当我们为主题请求元数据时，我们没有任何元数据，因为它将触发元数据更新。
如果为元数据启用了主题过期，则在更新后，将从元数据刷新集中删除过期时间间隔内未使用的任何主题。使用者禁用主题过期，因为他们显式管理主题，而生产者依赖主题过期来限制刷新集。

方法来自ProducerMetadata的父类型Metadata的启动方法bootstrap

```
public synchronized void bootstrap(List<InetSocketAddress> addresses) {
    this.needFullUpdate = true;
    this.updateVersion += 1;
    this.cache = MetadataCache.bootstrap(addresses);
}
```


###  **MetadataCache**
然后调用元数据缓存MetadataCache的bootstrap方法

```
static MetadataCache bootstrap(List<InetSocketAddress> addresses) {
    Map<Integer, Node> nodes = new HashMap<>();
    int nodeId = -1;
    //地址转换为节点类型然后存储在节点map中
    for (InetSocketAddress address : addresses) {
        nodes.put(nodeId, new Node(nodeId, address.getHostString(), address.getPort()));
        nodeId--;
    }
    //创建元数据缓存对象
    return new MetadataCache(null, nodes, Collections.emptyList(),
            Collections.emptySet(), Collections.emptySet(), Collections.emptySet(),
            null, Collections.emptyMap(), Cluster.bootstrap(addresses));
}
```



MetadataCache

Kafka集群中节点、主题和分区的内部可变缓存。这将保持最新的群集实例，该实例针对读取访问进行了优化。

这个方法大致了解下元数据缓存存储了哪些数据即可，没有太复杂的逻辑需要重点看

```java
private MetadataCache(String clusterId,
                      Map<Integer, Node> nodes,
                      Collection<PartitionMetadata> partitions,
                      Set<String> unauthorizedTopics,
                      Set<String> invalidTopics,
                      Set<String> internalTopics,
                      Node controller,
                      Map<String, Uuid> topicIds,
                      Cluster clusterInstance) {
    this.clusterId = clusterId;
    this.nodes = nodes;
    this.unauthorizedTopics = unauthorizedTopics;
    this.invalidTopics = invalidTopics;
    this.internalTopics = internalTopics;
    this.controller = controller;
    this.topicIds = topicIds;

    this.metadataByPartition = new HashMap<>(partitions.size());
    for (PartitionMetadata p : partitions) {
        this.metadataByPartition.put(p.topicPartition, p);
    }

    if (clusterInstance == null) {
        computeClusterView();
    } else {
        this.clusterInstance = clusterInstance;
    }
}
```

这里还有一行代码需要注意：

```java
//使用给定的主机/端口列表创建“引导”群集
Cluster.bootstrap(addresses)
```

###   **Cluster**

Cluster 为Kafka集群中节点、主题和分区子集的不变表示。

Cluster的启动方法



```
public static Cluster bootstrap(List<InetSocketAddress> addresses) {
    List<Node> nodes = new ArrayList<>();
    int nodeId = -1;
    ///地址转节点信息封装
    for (InetSocketAddress address : addresses)
        nodes.add(new Node(nodeId--, address.getHostString(), address.getPort()));
    return new Cluster(null, true, nodes, new ArrayList<>(0),
        Collections.emptySet(), Collections.emptySet(), Collections.emptySet(), null, Collections.emptyMap());
}
```

Cluster的构造器 这个方法大致了解下元数据缓存存储了哪些数据即可，没有太复杂的逻辑需要重点看

需要注意的是这里已经把服务端代理地址打乱了

```
private Cluster(String clusterId,
                boolean isBootstrapConfigured,
                Collection<Node> nodes,
                Collection<PartitionInfo> partitions,
                Set<String> unauthorizedTopics,
                Set<String> invalidTopics,
                Set<String> internalTopics,
                Node controller,
                Map<String, Uuid> topicIds) {
    this.isBootstrapConfigured = isBootstrapConfigured;
    this.clusterResource = new ClusterResource(clusterId);
    // make a randomized, unmodifiable copy of the nodes
    List<Node> copy = new ArrayList<>(nodes);
    //使用默认随机性对指定的列表元素进行随机重新排序来工作 打乱节点排序好像是要做客户端的随机负载均衡
    Collections.shuffle(copy);
    //下面几行代码是把节点id转为 这里要存储的类型Map<Integer, Node> key为节点id value为具体节点
    this.nodes = Collections.unmodifiableList(copy);

    // Index the nodes for quick lookup
    Map<Integer, Node> tmpNodesById = new HashMap<>();
    Map<Integer, List<PartitionInfo>> tmpPartitionsByNode = new HashMap<>(nodes.size());
    for (Node node : nodes) {
        tmpNodesById.put(node.id(), node);
        // Populate the map here to make it easy to add the partitions per node efficiently when iterating over
        // the partitions
        tmpPartitionsByNode.put(node.id(), new ArrayList<>());
    }
    this.nodesById = Collections.unmodifiableMap(tmpNodesById);
     //上面几行代码是把节点id转为 这里要存储的类型Map<Integer, Node> key为节点id value为具体节点
     
     
     
     
    // index the partition infos by topic, topic+partition, and node
    // note that this code is performance sensitive if there are a large number of partitions so we are careful
    // to avoid unnecessary work
    //按主题、主题+分区和节点索引分区信息
		//请注意，如果有大量分区，则此代码对性能敏感，因此我们要小心
		//避免不必要的工作
    Map<TopicPartition, PartitionInfo> tmpPartitionsByTopicPartition = new HashMap<>(partitions.size());
    Map<String, List<PartitionInfo>> tmpPartitionsByTopic = new HashMap<>();
    for (PartitionInfo p : partitions) {
        tmpPartitionsByTopicPartition.put(new TopicPartition(p.topic(), p.partition()), p);
        tmpPartitionsByTopic.computeIfAbsent(p.topic(), topic -> new ArrayList<>()).add(p);

        // The leader may not be known
        if (p.leader() == null || p.leader().isEmpty())
            continue;

        // If it is known, its node information should be available
        List<PartitionInfo> partitionsForNode = Objects.requireNonNull(tmpPartitionsByNode.get(p.leader().id()));
        partitionsForNode.add(p);
    }

    // Update the values of `tmpPartitionsByNode` to contain unmodifiable lists
    for (Map.Entry<Integer, List<PartitionInfo>> entry : tmpPartitionsByNode.entrySet()) {
        tmpPartitionsByNode.put(entry.getKey(), Collections.unmodifiableList(entry.getValue()));
    }

    // Populate `tmpAvailablePartitionsByTopic` and update the values of `tmpPartitionsByTopic` to contain
    // unmodifiable lists
    Map<String, List<PartitionInfo>> tmpAvailablePartitionsByTopic = new HashMap<>(tmpPartitionsByTopic.size());
    for (Map.Entry<String, List<PartitionInfo>> entry : tmpPartitionsByTopic.entrySet()) {
        String topic = entry.getKey();
        List<PartitionInfo> partitionsForTopic = Collections.unmodifiableList(entry.getValue());
        tmpPartitionsByTopic.put(topic, partitionsForTopic);
        // Optimise for the common case where all partitions are available
        boolean foundUnavailablePartition = partitionsForTopic.stream().anyMatch(p -> p.leader() == null);
        List<PartitionInfo> availablePartitionsForTopic;
        if (foundUnavailablePartition) {
            availablePartitionsForTopic = new ArrayList<>(partitionsForTopic.size());
            for (PartitionInfo p : partitionsForTopic) {
                if (p.leader() != null)
                    availablePartitionsForTopic.add(p);
            }
            availablePartitionsForTopic = Collections.unmodifiableList(availablePartitionsForTopic);
        } else {
            availablePartitionsForTopic = partitionsForTopic;
        }
        tmpAvailablePartitionsByTopic.put(topic, availablePartitionsForTopic);
    }

    this.partitionsByTopicPartition = Collections.unmodifiableMap(tmpPartitionsByTopicPartition);
    this.partitionsByTopic = Collections.unmodifiableMap(tmpPartitionsByTopic);
    this.availablePartitionsByTopic = Collections.unmodifiableMap(tmpAvailablePartitionsByTopic);
    this.partitionsByNode = Collections.unmodifiableMap(tmpPartitionsByNode);
    this.topicIds = Collections.unmodifiableMap(topicIds);
    Map<Uuid, String> tmpTopicNames = new HashMap<>();
    topicIds.forEach((key, value) -> tmpTopicNames.put(value, key));
    this.topicNames = Collections.unmodifiableMap(tmpTopicNames);

    this.unauthorizedTopics = Collections.unmodifiableSet(unauthorizedTopics);
    this.invalidTopics = Collections.unmodifiableSet(invalidTopics);
    this.internalTopics = Collections.unmodifiableSet(internalTopics);
    this.controller = controller;
}
```







##  **发送器对象的创建**

对应Sender 对应代码：

```java
this.sender = newSender(logContext, kafkaClient, this.metadata);
```

Sender类型实现了Runnable接口

Sender对象处理向Kafka群集发送生产消息的请求的后台线程。该线程发出元数据请求以更新其集群视图，然后将生成请求发送到适当的节点。







```java
Sender newSender(LogContext logContext, KafkaClient kafkaClient, ProducerMetadata metadata) {
    int maxInflightRequests = producerConfig.getInt(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION);
    int requestTimeoutMs = producerConfig.getInt(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG);
    ChannelBuilder channelBuilder = ClientUtils.createChannelBuilder(producerConfig, time, logContext);
    ProducerMetrics metricsRegistry = new ProducerMetrics(this.metrics);
    Sensor throttleTimeSensor = Sender.throttleTimeSensor(metricsRegistry.senderMetrics);
    KafkaClient client = kafkaClient != null ? kafkaClient : new NetworkClient(
            new Selector(producerConfig.getLong(ProducerConfig.CONNECTIONS_MAX_IDLE_MS_CONFIG),
                    this.metrics, time, "producer", channelBuilder, logContext),
            metadata,
            clientId,
            maxInflightRequests,
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MS_CONFIG),
            producerConfig.getLong(ProducerConfig.RECONNECT_BACKOFF_MAX_MS_CONFIG),
            producerConfig.getInt(ProducerConfig.SEND_BUFFER_CONFIG),
            producerConfig.getInt(ProducerConfig.RECEIVE_BUFFER_CONFIG),
            requestTimeoutMs,
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MS_CONFIG),
            producerConfig.getLong(ProducerConfig.SOCKET_CONNECTION_SETUP_TIMEOUT_MAX_MS_CONFIG),
            time,
            true,
            apiVersions,
            throttleTimeSensor,
            logContext);

    short acks = Short.parseShort(producerConfig.getString(ProducerConfig.ACKS_CONFIG));
    return new Sender(logContext,
            client,
            metadata,
            this.accumulator,
            maxInflightRequests == 1,
            producerConfig.getInt(ProducerConfig.MAX_REQUEST_SIZE_CONFIG),
            acks,
            producerConfig.getInt(ProducerConfig.RETRIES_CONFIG),
            metricsRegistry.senderMetrics,
            time,
            requestTimeoutMs,
            producerConfig.getLong(ProducerConfig.RETRY_BACKOFF_MS_CONFIG),
            this.transactionManager,
            apiVersions);
}
```
 