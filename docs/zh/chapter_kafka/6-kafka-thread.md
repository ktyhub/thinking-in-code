
# 6- Kafka客户端的IO线程KafkaThread
## 6.1 简介

回到前面说的KafkaProducer的构造器的初始化在发送器执行之后将会执行创建KafkaThread和启动线程的代码如下代码：

KafkaProducer构造器中的部分代码

```java
this.errors = this.metrics.sensor("errors");
this.sender = newSender(logContext, kafkaClient, this.metadata);
//IO线程名字 前缀为kafka-producer-network-thread 排查问题时候可以用到
String ioThreadName = NETWORK_THREAD_PREFIX + " | " + clientId;
//创建io线程 注意这里的线程Runnable对象为前面我们说到的sender对象核心的线程逻辑在发送器里面
this.ioThread = new KafkaThread(ioThreadName, this.sender, true);
//启动线程
this.ioThread.start();
//打印未使用到的配置信息
config.logUnused();
//注册jmx  kafka.producer
AppInfoParser.registerAppInfo(JMX_PREFIX, clientId, metrics, time.milliseconds());
log.debug("Kafka producer started");
```





## 6.2 KafkaThread构造器

这个线程类型做的事情不多主要设置一下线程名字，然后将线程设置为守护线程如下代码所示：



KafkaThread类型的构造器如下所示：

```java
public KafkaThread(final String name, Runnable runnable, boolean daemon) {
    super(runnable, name);
    configureThread(name, daemon);
}

private void configureThread(final String name, boolean daemon) {
    setDaemon(daemon);
    setUncaughtExceptionHandler((t, e) -> log.error("Uncaught exception in thread '{}':", name, e));
}
```





## 6.3 发送器Sender中执行线程的I/O主循环核心逻辑

前面我们看到了 线程类型在初始化的时候传递了Sender对象来执行线程逻辑，Sender类型实现了Runnable接口，并重写了run方法，那接下来就来看Sender类型的run方法的线程逻辑吧，代码如下所示：

发送线程主循环逻辑：

```java
@Override
public void run() {
    //I/O线程启动先打印个debug日志
    log.debug("Starting Kafka producer I/O thread.");

    // main loop, runs until close is called
  //在关闭之前一直持续运行的I/O主循环,这里借助volatile修饰的成员标记变量running来
    while (running) {
        try {
            runOnce();
        } catch (Exception e) {
            log.error("Uncaught error in kafka producer I/O thread: ", e);
        }
    }

    log.debug("Beginning shutdown of Kafka producer I/O thread, sending remaining records.");

    // okay we stopped accepting requests but there may still be
    // requests in the transaction manager, accumulator or waiting for acknowledgment,
    // wait until these are completed.
    while (!forceClose && ((this.accumulator.hasUndrained() || this.client.inFlightRequestCount() > 0) || hasPendingTransactionalRequests())) {
        try {
            runOnce();
        } catch (Exception e) {
            log.error("Uncaught error in kafka producer I/O thread: ", e);
        }
    }

    // Abort the transaction if any commit or abort didn't go through the transaction manager's queue
    while (!forceClose && transactionManager != null && transactionManager.hasOngoingTransaction()) {
        if (!transactionManager.isCompleting()) {
            log.info("Aborting incomplete transaction due to shutdown");
            transactionManager.beginAbort();
        }
        try {
            runOnce();
        } catch (Exception e) {
            log.error("Uncaught error in kafka producer I/O thread: ", e);
        }
    }

    if (forceClose) {
        // We need to fail all the incomplete transactional requests and batches and wake up the threads waiting on
        // the futures.
        if (transactionManager != null) {
            log.debug("Aborting incomplete transactional requests due to forced shutdown");
            transactionManager.close();
        }
        log.debug("Aborting incomplete batches due to forced shutdown");
        this.accumulator.abortIncompleteBatches();
    }
    try {
        this.client.close();
    } catch (Exception e) {
        log.error("Failed to close network client", e);
    }

    log.debug("Shutdown of Kafka producer I/O thread has completed.");
}


```

这个代码看着很长其实主要分为两个地方，第一个就是业务逻辑执行的主循环，另外一个就是关闭的逻辑



## 6.4 发送器Sender中执行线程的消息发送逻辑

前面在一个无限循环中执行了发送消息的代码来进行消息的发送，消息是如何发送到kafka的我们可以继续看如下代码所示：

```
/**
 * Run a single iteration of sending
 *
 */
void runOnce() {
   //这个if里面是事务管理器的逻辑
    if (transactionManager != null) {
       ...这个逻辑后面再看
    }

    long currentTimeMs = time.milliseconds();
    //发送数据
    long pollTimeout = sendProducerData(currentTimeMs);
    //拉取数据
    client.poll(pollTimeout, currentTimeMs);
}
```

### 6.4.1 发送数据逻辑sendProducerData

这里我来贴一下Sender类型中的发送生产者数据的代码，如下所示：

```java
private long sendProducerData(long now) {
   //对象类型为ProducerMetadata 这里是获取缓存的集群信息Cluster
    Cluster cluster = metadata.fetch();
    // get the list of partitions with data ready to send
   //记录累加器RecordAccumulator
    RecordAccumulator.ReadyCheckResult result = this.accumulator.ready(cluster, now);

    // if there are any partitions whose leaders are not known yet, force metadata update
    //存在领导者的分区本地还不知道（数据不一致）则强制更新元数据
    if (!result.unknownLeaderTopics.isEmpty()) {
        // The set of topics with unknown leader contains topics with leader election pending as well as
        // topics which may have expired. Add the topic again to metadata to ensure it is included
        // and request metadata update, since there are messages to send to the topic.
        for (String topic : result.unknownLeaderTopics)
            this.metadata.add(topic, now);

        log.debug("Requesting metadata update due to unknown leader topics from the batched records: {}",
            result.unknownLeaderTopics);
        this.metadata.requestUpdate();
    }

    // remove any nodes we aren't ready to send to
   //移除一些状态不满足的的节点
    Iterator<Node> iter = result.readyNodes.iterator();
    long notReadyTimeout = Long.MAX_VALUE;
    while (iter.hasNext()) {
        Node node = iter.next();
        if (!this.client.ready(node, now)) {
            iter.remove();
            notReadyTimeout = Math.min(notReadyTimeout, this.client.pollDelayMs(node, now));
        }
    }

    // create produce requests 
  //为每个节点分别创建合适大小的批量请求数据  
    Map<Integer, List<ProducerBatch>> batches = this.accumulator.drain(cluster, result.readyNodes, this.maxRequestSize, now);
  //添加到飞行窗口 在飞行批处理队列中: Map<TopicPartition, List<ProducerBatch>> inFlightBatches每个批处理分区队列按创建时间排序
  //A per-partition queue of batches ordered by creation time for tracking the in-flight batches
    addToInflightBatches(batches);
   //标记变量生产者是否应该在代理节点上保证消息的顺序性在，注意最大飞行窗口配置maxInflightRequests为1时候这个标记变量就为true了 ，如果我们要保证消息顺序性这个飞行窗口最大值需要保证为1
    if (guaranteeMessageOrder) {
        // Mute all the partitions drained
       //合并所有分区
        for (List<ProducerBatch> batchList : batches.values()) {
            for (ProducerBatch batch : batchList)
                this.accumulator.mutePartition(batch.topicPartition);
        }
    }
	//重置下个批次的过期时间
    accumulator.resetNextBatchExpiryTime();
    List<ProducerBatch> expiredInflightBatches = getExpiredInflightBatches(now);
    List<ProducerBatch> expiredBatches = this.accumulator.expiredBatches(now);
   //过期列表
    expiredBatches.addAll(expiredInflightBatches);

    // Reset the producer id if an expired batch has previously been sent to the broker. Also update the metrics
    // for expired batches. see the documentation of @TransactionState.resetIdempotentProducerId to understand why
    // we need to reset the producer id here.
    if (!expiredBatches.isEmpty())
        log.trace("Expired {} batches in accumulator", expiredBatches.size());
    for (ProducerBatch expiredBatch : expiredBatches) {
        String errorMessage = "Expiring " + expiredBatch.recordCount + " record(s) for " + expiredBatch.topicPartition
            + ":" + (now - expiredBatch.createdMs) + " ms has passed since batch creation";
        failBatch(expiredBatch, new TimeoutException(errorMessage), false);
        if (transactionManager != null && expiredBatch.inRetry()) {
            // This ensures that no new batches are drained until the current in flight batches are fully resolved.
            transactionManager.markSequenceUnresolved(expiredBatch);
        }
    }
   //传感器更新监控指标数据
    sensors.updateProduceRequestMetrics(batches);

    // If we have any nodes that are ready to send + have sendable data, poll with 0 timeout so this can immediately
    // loop and try sending more data. Otherwise, the timeout will be the smaller value between next batch expiry
    // time, and the delay time for checking data availability. Note that the nodes may have data that isn't yet
    // sendable due to lingering, backing off, etc. This specifically does not include nodes with sendable data
    // that aren't ready to send since they would cause busy looping.
    //拉取超时时间
    long pollTimeout = Math.min(result.nextReadyCheckDelayMs, notReadyTimeout);
    pollTimeout = Math.min(pollTimeout, this.accumulator.nextExpiryTimeMs() - now);
    pollTimeout = Math.max(pollTimeout, 0);
    //存在准备中的节点
    if (!result.readyNodes.isEmpty()) {
        log.trace("Nodes with data ready to send: {}", result.readyNodes);
        // if some partitions are already ready to be sent, the select time would be 0;
        // otherwise if some partition already has some data accumulated but not ready yet,
        // the select time will be the time difference between now and its linger expiry time;
        // otherwise the select time will be the time difference between now and the metadata expiry time;
        pollTimeout = 0;
    }
    //发送生产者请求
    sendProduceRequests(batches, now);
    return pollTimeout;
}
```





## 6.5 批量请求发送方法sendProduceRequests

直接来看代码

```java
private void sendProduceRequests(Map<Integer, List<ProducerBatch>> collated, long now) {
   //遍历所有批处理请求列表
    for (Map.Entry<Integer, List<ProducerBatch>> entry : collated.entrySet())
        sendProduceRequest(now, entry.getKey(), acks, requestTimeoutMs, entry.getValue());
}
```





### 6.5.1 批量请求中的单个请求发送sendProduceRequest

```java
private void sendProduceRequest(long now, int destination, short acks, int timeout, List<ProducerBatch> batches) {
   //批处理请求为空直接返回
    if (batches.isEmpty())
        return;

    final Map<TopicPartition, ProducerBatch> recordsByPartition = new HashMap<>(batches.size());

    // find the minimum magic version used when creating the record sets
   //最小可用api版本
    byte minUsedMagic = apiVersions.maxUsableProduceMagic();
    for (ProducerBatch batch : batches) {
        if (batch.magic() < minUsedMagic)
            minUsedMagic = batch.magic();
    }
    ProduceRequestData.TopicProduceDataCollection tpd = new ProduceRequestData.TopicProduceDataCollection();
    for (ProducerBatch batch : batches) {
        //批处理分区 例如：topic1-0
        TopicPartition tp = batch.topicPartition;
        //使用直接内存ByteBuffer 保存的消息记录MemoryRecords获取
        MemoryRecords records = batch.records();

        // down convert if necessary to the minimum magic used. In general, there can be a delay between the time
        // that the producer starts building the batch and the time that we send the request, and we may have
        // chosen the message format based on out-dated metadata. In the worst case, we optimistically chose to use
        // the new message format, but found that the broker didn't support it, so we need to down-convert on the
        // client before sending. This is intended to handle edge cases around cluster upgrades where brokers may
        // not all support the same message format version. For example, if a partition migrates from a broker
        // which is supporting the new magic version to one which doesn't, then we will need to convert.
        if (!records.hasMatchingMagic(minUsedMagic))
            records = batch.records().downConvert(minUsedMagic, 0, time).records();
      //初始化请求需要的topic数据
        ProduceRequestData.TopicProduceData tpData = tpd.find(tp.topic());
        if (tpData == null) {
            tpData = new ProduceRequestData.TopicProduceData().setName(tp.topic());
            tpd.add(tpData);
        }
       //初始化分区数据，包含分区的索引和分区的记录 然后将分区数据添加到topic数据对象中
        tpData.partitionData().add(new ProduceRequestData.PartitionProduceData()
                .setIndex(tp.partition())
                .setRecords(records));
      //然后将包含分区和数据的topic对象存放到recordsByPartition 哈希表中
        recordsByPartition.put(tp, batch);
    }

   //事务id初始化
    String transactionalId = null;
    if (transactionManager != null && transactionManager.isTransactional()) {
        transactionalId = transactionManager.transactionalId();
    }

   //创建生产者请求，包含两部分一部分是生产者请求参数，一部分是具体数据如：topic，分区，数据
    ProduceRequest.Builder requestBuilder = ProduceRequest.forMagic(minUsedMagic,
            new ProduceRequestData()
                    .setAcks(acks)
                    .setTimeoutMs(timeout)
                    .setTransactionalId(transactionalId)
                    .setTopicData(tpd));
    RequestCompletionHandler callback = response -> handleProduceResponse(response, recordsByPartition, time.milliseconds());

    String nodeId = Integer.toString(destination);
    ClientRequest clientRequest = client.newClientRequest(nodeId, requestBuilder, now, acks != 0,
            requestTimeoutMs, callback);
    client.send(clientRequest, now);
    log.trace("Sent produce request to {}: {}", nodeId, requestBuilder);
}
```

 