 



这个主要是介绍下常见的类型有了这些类型做铺垫后面看消费者消费消息的代码会相对容易一些，这里并没有特别复杂的逻辑前面例子代码主要通过如下代码进行调用：

```java
KafkaConsumer consumer = new KafkaConsumer<>(props);
```



构造器的大致逻辑如下：

- 开始

- **基础配置**初始化

  - 配置转ConsumerConfig
  - 初始化重负载均衡配置GroupRebalanceConfig对象
  - enable.auto.commit自动提交配置初始化
  - ConsumerInterceptor消费拦截器对象初始化
  - Metrics相关监控指标对象创建

  - keySerializer对象创建序列化KEY使用
  - valueSerializer对象创建序列化VALUE使用
  - 偏移量重置策略OffsetResetStrategy类型对象创建
  - 订阅状态跟踪器SubscriptionState类型对象创建
  - ClusterResourceListeners集群资源监听器
  - ConsumerMetadata消费者元数据对象初始化（后续IO发起的时候会拉取全量元数据）

- **网络相关配置**初始化

  - 根据配置初始化通道构建器ChannelBuilder
  - NetworkClient对象创建
  - 再封装ConsumerNetworkClient网络客户端

- **消费者协调配置**初始化

  - 初始化消费者分区管理器ConsumerPartitionAssignor
  - 初始化消费者协调器ConsumerCoordinator
  - 初始化消费者数据获取器Fetcher

- 结束



KafkaConsumer的构造器

```java
public KafkaConsumer(Properties properties) {
    this(properties, null, null);
}
```



```java
public KafkaConsumer(Properties properties,
                     Deserializer<K> keyDeserializer,
                     Deserializer<V> valueDeserializer) {
    this(new ConsumerConfig(ConsumerConfig.addDeserializerToConfig(properties, keyDeserializer, valueDeserializer)),
         keyDeserializer, valueDeserializer);
}
```



下面这个构造器看着很长其实大部分都是在创建对象可以了解一些细节：



```java
private KafkaConsumer(ConsumerConfig config, Deserializer<K> keyDeserializer, Deserializer<V> valueDeserializer) {
    try {
      //基础配置初始化
        String clientId = config.getString(ConsumerConfig.CLIENT_ID_CONFIG);
       //如果没有配置消费者id 自动生成一个
        if (clientId.isEmpty())
            clientId = "consumer-" + CONSUMER_CLIENT_ID_SEQUENCE.getAndIncrement();
        this.clientId = clientId;
        this.groupId = config.getString(ConsumerConfig.GROUP_ID_CONFIG);

        LogContext logContext;
        // If group.instance.id is set, we will append it to the log context.
        String groupInstanceId = config.getString(ConsumerConfig.GROUP_INSTANCE_ID_CONFIG);
        if (groupInstanceId != null) {
            JoinGroupRequest.validateGroupInstanceId(groupInstanceId);
            this.groupInstanceId = Optional.of(groupInstanceId);
            logContext = new LogContext("[Consumer instanceId=" + groupInstanceId + ", clientId=" + clientId + ", groupId=" + groupId + "] ");
        } else {
            this.groupInstanceId = Optional.empty();
            logContext = new LogContext("[Consumer clientId=" + clientId + ", groupId=" + groupId + "] ");
        }

        this.log = logContext.logger(getClass());
      //enable.auto.commit自动提交配置初始化
        boolean enableAutoCommit = config.getBoolean(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG);
        if (groupId == null) { // overwrite in case of default group id where the config is not explicitly provided
            if (!config.originals().containsKey(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG))
                enableAutoCommit = false;
            else if (enableAutoCommit)
                throw new InvalidConfigurationException(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG + " cannot be set to true when default group id (null) is used.");
        } else if (groupId.isEmpty())
            log.warn("Support for using the empty group id by consumers is deprecated and will be removed in the next major release.");

        log.debug("Initializing the Kafka consumer");
        this.requestTimeoutMs = config.getInt(ConsumerConfig.REQUEST_TIMEOUT_MS_CONFIG);
        this.defaultApiTimeoutMs = config.getInt(ConsumerConfig.DEFAULT_API_TIMEOUT_MS_CONFIG);
        this.time = Time.SYSTEM;
        this.metrics = buildMetrics(config, time, clientId);
        this.retryBackoffMs = config.getLong(ConsumerConfig.RETRY_BACKOFF_MS_CONFIG);

        // load interceptors and make sure they get clientId
        Map<String, Object> userProvidedConfigs = config.originals();
        userProvidedConfigs.put(ConsumerConfig.CLIENT_ID_CONFIG, clientId);
        List<ConsumerInterceptor<K, V>> interceptorList = (List) (new ConsumerConfig(userProvidedConfigs, false)).getConfiguredInstances(ConsumerConfig.INTERCEPTOR_CLASSES_CONFIG,
                ConsumerInterceptor.class);
      
      //ConsumerInterceptor消费拦截器对象初始化
        this.interceptors = new ConsumerInterceptors<>(interceptorList);
      
       //key值序列化工具
        if (keyDeserializer == null) {
            this.keyDeserializer = config.getConfiguredInstance(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, Deserializer.class);
            this.keyDeserializer.configure(config.originals(), true);
        } else {
            config.ignore(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG);
            this.keyDeserializer = keyDeserializer;
        }
      //value值序列化工具
        if (valueDeserializer == null) {
            this.valueDeserializer = config.getConfiguredInstance(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, Deserializer.class);
            this.valueDeserializer.configure(config.originals(), false);
        } else {
            config.ignore(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG);
            this.valueDeserializer = valueDeserializer;
        }
      
      //偏移量重置策略  没有初始化偏移量的时候自动重置到开头还是末尾或者是抛出异常等策略
        OffsetResetStrategy offsetResetStrategy = OffsetResetStrategy.valueOf(config.getString(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG).toUpperCase(Locale.ROOT));
        this.subscriptions = new SubscriptionState(logContext, offsetResetStrategy);
        ClusterResourceListeners clusterResourceListeners = configureClusterResourceListeners(keyDeserializer,
                valueDeserializer, metrics.reporters(), interceptorList);
        
      //元数据缓存相关的用来存储broker集群信息
      this.metadata = new ConsumerMetadata(retryBackoffMs,
                config.getLong(ConsumerConfig.METADATA_MAX_AGE_CONFIG),
                !config.getBoolean(ConsumerConfig.EXCLUDE_INTERNAL_TOPICS_CONFIG),
                config.getBoolean(ConsumerConfig.ALLOW_AUTO_CREATE_TOPICS_CONFIG),
                subscriptions, logContext, clusterResourceListeners);
        List<InetSocketAddress> addresses = ClientUtils.parseAndValidateAddresses(
                config.getList(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG), config.getString(ConsumerConfig.CLIENT_DNS_LOOKUP_CONFIG));
        this.metadata.bootstrap(addresses, time.milliseconds());
        String metricGrpPrefix = "consumer";

        FetcherMetricsRegistry metricsRegistry = new FetcherMetricsRegistry(Collections.singleton(CLIENT_ID_METRIC_TAG), metricGrpPrefix);
        //下面都是跟网络交互相关的  
      ChannelBuilder channelBuilder = ClientUtils.createChannelBuilder(config, time);
        IsolationLevel isolationLevel = IsolationLevel.valueOf(
                config.getString(ConsumerConfig.ISOLATION_LEVEL_CONFIG).toUpperCase(Locale.ROOT));
        Sensor throttleTimeSensor = Fetcher.throttleTimeSensor(metrics, metricsRegistry);
        int heartbeatIntervalMs = config.getInt(ConsumerConfig.HEARTBEAT_INTERVAL_MS_CONFIG);

        ApiVersions apiVersions = new ApiVersions();
        NetworkClient netClient = new NetworkClient(
                new Selector(config.getLong(ConsumerConfig.CONNECTIONS_MAX_IDLE_MS_CONFIG), metrics, time, metricGrpPrefix, channelBuilder, logContext),
                this.metadata,
                clientId,
                100, // a fixed large enough value will suffice for max in-flight requests
                config.getLong(ConsumerConfig.RECONNECT_BACKOFF_MS_CONFIG),
                config.getLong(ConsumerConfig.RECONNECT_BACKOFF_MAX_MS_CONFIG),
                config.getInt(ConsumerConfig.SEND_BUFFER_CONFIG),
                config.getInt(ConsumerConfig.RECEIVE_BUFFER_CONFIG),
                config.getInt(ConsumerConfig.REQUEST_TIMEOUT_MS_CONFIG),
                ClientDnsLookup.forConfig(config.getString(ConsumerConfig.CLIENT_DNS_LOOKUP_CONFIG)),
                time,
                true,
                apiVersions,
                throttleTimeSensor,
                logContext);
        this.client = new ConsumerNetworkClient(
                logContext,
                netClient,
                metadata,
                time,
                retryBackoffMs,
                config.getInt(ConsumerConfig.REQUEST_TIMEOUT_MS_CONFIG),
                heartbeatIntervalMs); //Will avoid blocking an extended period of time to prevent heartbeat thread starvation
      
      
       //分区策略神器
        this.assignors = config.getConfiguredInstances(
                ConsumerConfig.PARTITION_ASSIGNMENT_STRATEGY_CONFIG,
                PartitionAssignor.class);

        int maxPollIntervalMs = config.getInt(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG);
        int sessionTimeoutMs = config.getInt(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG);
        // no coordinator will be constructed for the default (null) group id
       //客户端协调器  
      this.coordinator = groupId == null ? null :
            new ConsumerCoordinator(logContext,
                    this.client,
                    groupId,
                    this.groupInstanceId,
                    maxPollIntervalMs,
                    sessionTimeoutMs,
                    new Heartbeat(time, sessionTimeoutMs, heartbeatIntervalMs, maxPollIntervalMs, retryBackoffMs),
                    assignors,
                    this.metadata,
                    this.subscriptions,
                    metrics,
                    metricGrpPrefix,
                    this.time,
                    retryBackoffMs,
                    enableAutoCommit,
                    config.getInt(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG),
                    this.interceptors,
                    config.getBoolean(ConsumerConfig.LEAVE_GROUP_ON_CLOSE_CONFIG));
       //获取器用来拉取数据 
      this.fetcher = new Fetcher<>(
                logContext,
                this.client,
                config.getInt(ConsumerConfig.FETCH_MIN_BYTES_CONFIG),
                config.getInt(ConsumerConfig.FETCH_MAX_BYTES_CONFIG),
                config.getInt(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG),
                config.getInt(ConsumerConfig.MAX_PARTITION_FETCH_BYTES_CONFIG),
                config.getInt(ConsumerConfig.MAX_POLL_RECORDS_CONFIG),
                config.getBoolean(ConsumerConfig.CHECK_CRCS_CONFIG),
                config.getString(ConsumerConfig.CLIENT_RACK_CONFIG),
                this.keyDeserializer,
                this.valueDeserializer,
                this.metadata,
                this.subscriptions,
                metrics,
                metricsRegistry,
                this.time,
                this.retryBackoffMs,
                this.requestTimeoutMs,
                isolationLevel,
                apiVersions);

        //日志和监控 日志会打印出来未使用的配置提醒用户
        config.logUnused();
        AppInfoParser.registerAppInfo(JMX_PREFIX, clientId, metrics, time.milliseconds());
        log.debug("Kafka consumer initialized");
    } catch (Throwable t) {
        // call close methods if internal objects are already constructed; this is to prevent resource leak. see KAFKA-2121
        close(0, true);
        // now propagate the exception
        throw new KafkaException("Failed to construct kafka consumer", t);
    }
}
```

//todo 这里出现的配置都要解释下