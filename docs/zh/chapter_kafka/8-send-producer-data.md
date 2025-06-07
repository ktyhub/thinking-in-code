
## **发送器Sender类型的的sendProducerData 模版方法**

当前方法的代码大纲如下：

- 元数据相关：
    - 集群信息缓存查询
    - 主题分区缓存查询
    - 无leader主题分区更新元数据
- 批处理数据相关：
    - 遍历准备发送数据的节点
    - 批处理记录的创建
    - 所有请求添加到飞行窗口
- 批处理关联网络通道
    - 遍历批处理batches列表转换为内存记录列表
    - 将本批次的内存记录列表数据放入飞行集合中
    - 请求头信息放入对应IO通道KafkaChannel



下面是发送器Sender类型的的sendProducerData 模版方法源码直接看的话会比较枯燥可以结合代码大纲进行了解，主要分为三大部分：**元数据处理** ，**批处理记录与飞行窗口处理** ，**批处理存放到对应网络通道**：

```java
private long sendProducerData(long now) {
  //-------------------------------元数据处理开始-------------------------------------//
  //**集群信息查询：**MetadataCache中获取集群元数据信息Cluster
    Cluster cluster = metadata.fetch();
    // get the list of partitions with data ready to send
  //获取准备发送数据的分区列表，记录累加器中获取准备准备发送数据的主题分区
    RecordAccumulator.ReadyCheckResult result = this.accumulator.ready(cluster, now);

    // if there are any partitions whose leaders are not known yet, force metadata update
  //**无leader主题分区更新元数据：**如果存在主题分区对应的leader为空则强制更新无leader的主题分区对应的元数据
    if (!result.unknownLeaderTopics.isEmpty()) {
        // The set of topics with unknown leader contains topics with leader election pending as well as
        // topics which may have expired. Add the topic again to metadata to ensure it is included
        // and request metadata update, since there are messages to send to the topic.
        for (String topic : result.unknownLeaderTopics)
            this.metadata.add(topic);

        log.debug("Requesting metadata update due to unknown leader topics from the batched records: {}",
            result.unknownLeaderTopics);
        this.metadata.requestUpdate();
    }

    // remove any nodes we aren't ready to send to
  //遍历准备发送数据的节点集合Set<Node> readyNodes
    Iterator<Node> iter = result.readyNodes.iterator();
    long notReadyTimeout = Long.MAX_VALUE;
    while (iter.hasNext()) {
        Node node = iter.next();
        if (!this.client.ready(node, now)) {
            iter.remove();
            notReadyTimeout = Math.min(notReadyTimeout, this.client.pollDelayMs(node, now));
        }
    }
 //-------------------------------元数据处理结束-------------------------------------//
 
 
  //-----------------------------批处理记录与飞行窗口处理开始----------------------------//
  // create produce requests
  //RecordAccumulator记录累加器调用drain方法从批处理队列中排出所有映射节点对应的可以进行发送消息的批处理队列
    Map<Integer, List<ProducerBatch>> batches = this.accumulator.drain(cluster, result.readyNodes, this.maxRequestSize, now);
  //将所有请求添加到飞行窗口 
   //这个方法遍历所有的批处理记录将批处理存放在飞行窗口集合中
  //飞行集合： Map<TopicPartition, List<ProducerBatch>> inFlightBatches
    addToInflightBatches(batches);
    if (guaranteeMessageOrder) {
        // Mute all the partitions drained
        for (List<ProducerBatch> batchList : batches.values()) {
            for (ProducerBatch batch : batchList)
                this.accumulator.mutePartition(batch.topicPartition);
        }
    }

    accumulator.resetNextBatchExpiryTime();
  //遍历inFlightBatches集合 查看消息是否超过了deliveryTimeoutMs
  //把超时的消息从飞行集合中移除，然后存放到expiredInflightBatches集合中
    List<ProducerBatch> expiredInflightBatches = getExpiredInflightBatches(now);
  //遍历原始的批处理集合batches： ConcurrentMap<TopicPartition, Deque<ProducerBatch>>查看消息是否超过了deliveryTimeoutMs
  //把超时的批处理消息从批处理集合中移除然后放到expiredBatches集合中
    List<ProducerBatch> expiredBatches = this.accumulator.expiredBatches(now);
  //待发送的飞行集合中的过期消息和批处理中的过期消息都放到一个集合中
    expiredBatches.addAll(expiredInflightBatches);

    // Reset the producer id if an expired batch has previously been sent to the broker. Also update the metrics
    // for expired batches. see the documentation of @TransactionState.resetProducerId to understand why
    // we need to reset the producer id here.
  //
    if (!expiredBatches.isEmpty())
        log.trace("Expired {} batches in accumulator", expiredBatches.size());
    for (ProducerBatch expiredBatch : expiredBatches) {
        String errorMessage = "Expiring " + expiredBatch.recordCount + " record(s) for " + expiredBatch.topicPartition
            + ":" + (now - expiredBatch.createdMs) + " ms has passed since batch creation";
        failBatch(expiredBatch, -1, NO_TIMESTAMP, new TimeoutException(errorMessage), false);
        if (transactionManager != null && expiredBatch.inRetry()) {
            // This ensures that no new batches are drained until the current in flight batches are fully resolved.
            transactionManager.markSequenceUnresolved(expiredBatch.topicPartition);
        }
    }
    sensors.updateProduceRequestMetrics(batches);

    // If we have any nodes that are ready to send + have sendable data, poll with 0 timeout so this can immediately
    // loop and try sending more data. Otherwise, the timeout will be the smaller value between next batch expiry
    // time, and the delay time for checking data availability. Note that the nodes may have data that isn't yet
    // sendable due to lingering, backing off, etc. This specifically does not include nodes with sendable data
    // that aren't ready to send since they would cause busy looping.
    long pollTimeout = Math.min(result.nextReadyCheckDelayMs, notReadyTimeout);
    pollTimeout = Math.min(pollTimeout, this.accumulator.nextExpiryTimeMs() - now);
    pollTimeout = Math.max(pollTimeout, 0);
    if (!result.readyNodes.isEmpty()) {
        log.trace("Nodes with data ready to send: {}", result.readyNodes);
        // if some partitions are already ready to be sent, the select time would be 0;
        // otherwise if some partition already has some data accumulated but not ready yet,
        // the select time will be the time difference between now and its linger expiry time;
        // otherwise the select time will be the time difference between now and the metadata expiry time;
        pollTimeout = 0;
    }
  //---------------------------批处理记录与飞行窗口处理结束----------------------------//
  
  
  //-----------------------------批处理存放到对应网络通道开始----------------------------// 
    sendProduceRequests(batches, now);
  //-----------------------------批处理存放到对应网络通道结束----------------------------//
  
    return pollTimeout;
}
```





## **批处理消息存放到网络通道中**



前面对用户待发消息的批处理队列进行了处理得到最终需要发送的批处理消息集合然后遍历每个节点对应的批处理集合，将其存放在网络通道中等后续IO逻辑执行的时候将Kafka通道中存放的消息发送出去

Sender类型的sendProduceRequests方法

```java
private void sendProduceRequests(Map<Integer, List<ProducerBatch>> collated, long now) {
    for (Map.Entry<Integer, List<ProducerBatch>> entry : collated.entrySet())
        sendProduceRequest(now, entry.getKey(), acks, requestTimeoutMs, entry.getValue());
}
```



单个节点的批处理列表进行处理为其创建网络请求对象然后存放到网络通道

Sender类型的sendProduceRequest方法

```java
private void sendProduceRequest(long now, int destination, short acks, int timeout, List<ProducerBatch> batches) {
    if (batches.isEmpty())
        return;
		//内存记录内部通过字节缓冲区ByteBuffer来对记录进行存储（ByteBuffer有两种一种是堆字节缓冲，直接是直接内存字节缓冲区） 这里内存记录使用堆缓冲区HeapByteBuffer
    Map<TopicPartition, MemoryRecords> produceRecordsByPartition = new HashMap<>(batches.size());
   
    final Map<TopicPartition, ProducerBatch> recordsByPartition = new HashMap<>(batches.size());

    // find the minimum magic version used when creating the record sets
    byte minUsedMagic = apiVersions.maxUsableProduceMagic();
    for (ProducerBatch batch : batches) {
        if (batch.magic() < minUsedMagic)
            minUsedMagic = batch.magic();
    }
   //遍历批处理队列
    for (ProducerBatch batch : batches) {
        TopicPartition tp = batch.topicPartition;
        MemoryRecords records = batch.records();

        // down convert if necessary to the minimum magic used. In general, there can be a delay between the time
        // that the producer starts building the batch and the time that we send the request, and we may have
        // chosen the message format based on out-dated metadata. In the worst case, we optimistically chose to use
        // the new message format, but found that the broker didn't support it, so we need to down-convert on the
        // client before sending. This is intended to handle edge cases around cluster upgrades where brokers may
        // not all support the same message format version. For example, if a partition migrates from a broker
        // which is supporting the new magic version to one which doesn't, then we will need to convert.
        //版本兼容处理
        if (!records.hasMatchingMagic(minUsedMagic))
            records = batch.records().downConvert(minUsedMagic, 0, time).records();
      
       //主题分区-内存记录映射 key：主题分区,value: 内存记录
        produceRecordsByPartition.put(tp, records);
       //主题分区-批处理映射  key：主题分区，value: 生产者批处理
        recordsByPartition.put(tp, batch);
    }

  	//事务逻辑
    String transactionalId = null;
    if (transactionManager != null && transactionManager.isTransactional()) {
        transactionalId = transactionManager.transactionalId();
    }
  
  //请求构建器 用于创建生产者请求对象ProduceRequest
    ProduceRequest.Builder requestBuilder = ProduceRequest.Builder.forMagic(minUsedMagic, acks, timeout,
            produceRecordsByPartition, transactionalId);
    RequestCompletionHandler callback = new RequestCompletionHandler() {
        public void onComplete(ClientResponse response) {
            handleProduceResponse(response, recordsByPartition, time.milliseconds());
        }
    };
		
  //客户端请求对象创建 ClientRequest类型对象
    String nodeId = Integer.toString(destination);
    ClientRequest clientRequest = client.newClientRequest(nodeId, requestBuilder, now, acks != 0,
            requestTimeoutMs, callback);
  
    client.send(clientRequest, now);
    log.trace("Sent produce request to {}: {}", nodeId, requestBuilder);
}
```



KafkaClient 是一个封装客户端的一个接口，仅有的实现类型为NetworkClient



NetworkClient的send方法

```java
public void send(ClientRequest request, long now) {
    doSend(request, false, now);
}
```



队列消息为待发送节点

NetworkClient的doSend方法

```java
private void doSend(ClientRequest clientRequest, boolean isInternalRequest, long now) {
    //发送之前的连接状态验证
    ensureActive();
    //节点id获取
    String nodeId = clientRequest.destination();
    ////验证网络连接状态，飞行集合状态...
    AbstractRequest.Builder<?> builder = clientRequest.requestBuilder();
    try {
        //版本兼容处理 ...
        // The call to build may also throw UnsupportedVersionException, if there are essential
        // fields that cannot be represented in the chosen version.
        doSend(clientRequest, isInternalRequest, now, builder.build(version));
    } catch (UnsupportedVersionException unsupportedVersionException) {
        // If the version is not supported, skip sending the request over the wire.
      ....
}
```



NetworkClient的doSend方法

```java
private void doSend(ClientRequest clientRequest, boolean isInternalRequest, long now, AbstractRequest request) {
    String destination = clientRequest.destination();
   //请求头处理
    RequestHeader header = clientRequest.makeHeader(request.version());
    //省略掉debug日志代码...
    //目的地和请求头转发送对象 序列化为NetworkSend类型的网络发送实体对象
    Send send = request.toSend(destination, header);
    //封装目的地，请求头，消息记录，发送时间等信息到飞行请求对象中
    InFlightRequest inFlightRequest = new InFlightRequest(
            clientRequest,
            header,
            isInternalRequest,
            request,
            send,
            now);
  //将待发请求都放到飞行管理器中中InFlightRequests类型为飞行管理器，
   //内部的飞行集合为requests对象类型为ap<String, Deque<NetworkClient.InFlightRequest>> key为destination也就是节点id，值
    this.inFlightRequests.add(inFlightRequest);
    selector.send(send);
}
```



kafka Selector类型的的send方法队列给定的请求

```java
public void send(Send send) {
    String connectionId = send.destination();
   //获取当前连接id的通道 Selector中的channels中缓存 每个连接id都会对应一个KafkaChannel
    KafkaChannel channel = openOrClosingChannelOrFail(connectionId);
  
    //连接已经关闭就无需发送
    if (closingChannels.containsKey(connectionId)) {
        // ensure notification via `disconnected`, leave channel in the state in which closing was triggered
        this.failedSends.add(connectionId);
    } else {
        try {
            //将待发送的数据放入KafkaChannel
            channel.setSend(send);
        } catch (Exception e) {
           //....
        }
    }
}
```



KafkaChannel的setSend方法设置待发送数据

```java
public void setSend(Send send) {
    if (this.send != null)
        throw new IllegalStateException("Attempt to begin a send operation with prior send operation still in progress, connection id is " + id);
    this.send = send;
    this.transportLayer.addInterestOps(SelectionKey.OP_WRITE);
}
```

NetworkSend类型的待发数据中存储的是请求目的地和请求头数据，而真实的数据是在飞行窗口中存储着的



PlaintextTransportLayer类型的addInterestOps添加写事件

```java
public void addInterestOps(int ops) {
    key.interestOps(key.interestOps() | ops);
}
```

切换当前事件为写事件，等待IO逻辑来执行事件



最后对上面代码做一个总结：

消息请求放入Kafka通道

- 开始调用sendProducerData方法
- **集群信息查询：** MetadataCache中获取集群元数据信息Cluster
- **主题分区查询：** 获取准备发送数据的分区列表，记录累加器中获取准备准备发送数据的主题分区
    - 查询遍历缓存的主题分区与批处理队列集合ConcurrentMap<TopicPartition, Deque<ProducerBatch>> batches
        - 从主题分区信息中获取leader节点信息：Node leader
        - 根据批处理队列Deque<ProducerBatch> 中的第一个元素判断是否需要发送如果需要发送则将leader节点对象添加到准备发送节点集合Set<Node> readyNodes中然后将其返回
- **无leader主题分区更新元数据：** 如果存在主题分区对应的leader为空则强制更新无leader的主题分区对应的元数据
- **遍历准备发送数据的节点：** 集合Set<Node> readyNodes
    - 连接移除或者无法正常建立连接的节点则直接移除
    - 如果连接状态建立正常则直接返回true继续
    - 如果还未建立连接状态则执行initiateConnect方法设置连接IO事件SelectionKey.OP_CONNECT
        - 调用Selectable selector的connect方法
            - 配置SocketChannel
                - configureBlocking(false)
                - socket.setKeepAlive(true);
                - socket.setSendBufferSize(sendBufferSize);
                - socket.setReceiveBufferSize(receiveBufferSize);
                - socket.setTcpNoDelay(true);
            - channel.connect(address);
            - registerChannel(id, socketChannel, SelectionKey.OP_CONNECT);
                - socketChannel.register(nioSelector, interestedOps); 这里仅仅执行了事件的添加并未执行网络IO
                    - interestedOps存放在SelectorImpl类型的INTERESTOPS对象中
            - ChannelBuilder进行调用buildChannel方法进行构建KafkaChannel
                - 创建PlaintextTransportLayer类型对象
                - 创建PlaintextAuthenticator类型对象
                - 创建KafkaChannel类型对象
            - 将KafkaChannel对象绑定在SelectionKey对象中
            - 将节点id nodeConnectionId与KafkaChannel存入通道集合Map<String, KafkaChannel> channels
            - IdleExpiryManager 连接过期管理器对当前连接进行管理
                - 将连接的connectionId和连接创建时间存入IdleExpiryManager的LRU集合中Map<String, Long> lruConnections
- **批处理记录的创建：** RecordAccumulator记录累加器调用 **drain方法** 进行记录的创建
    - 遍历当前所有准备好的节点集合Set<Node> readyNodes;
        - 从元数据中获取当前节点id的分区信息：List<PartitionInfo> parts，然后循环分区数据
            - 开始创建主题分区对象TopicPartition
            - 获取当前分区对应的批处理队列Deque<ProducerBatch> 从集合ConcurrentMap<TopicPartition, Deque<ProducerBatch>> batches中获取
            - 获取第一个ProducerBatch
            - batch.close();
            - 将批处理存放在List<ProducerBatch> ready集合中
            - 最终放到节点id映射批处理集合中进行返回：Map<Integer, List<ProducerBatch>> batches
- **所有请求添加到飞行窗口** ：将所有请求添加到飞行窗口addToInflightBatches(batches);
    - 遍历批量处理列表
    - 获取当前分区的飞行窗口批处理列表，如果不存在则创建一个List<ProducerBatch> inflightBatchList
    - 飞行窗口中存放当前分区的批处理列表 Map<TopicPartition, List<ProducerBatch>> inFlightBatches
- **遍历批处理batches列表：  发送的请求处理 ** 调用 ** sendProduceRequests方法** 开始遍历批处理batches列表 每个节点对应的每个批处理队列Map<Integer, List<ProducerBatch>> batches
    - 处理当前节点的批处理队列 List<ProducerBatch> batches
    - 遍历当前节点的批处理队列 List<ProducerBatch> batches
        - 处理当前批处理消息ProducerBatch batch
        - KafkaClient创建请求对象 **ClientRequest**
        - KafkaClient调用send方法发送ClientRequest
        - 调用NetworkClient的doSend执行发送逻辑
            - 根据版本、ACK、和分区内存数据等变量 **创建ProduceRequest对象**
            - 创建 **请求头RequestHeader**
            - 将节点id destination变量和请求头RequestHeader对象封装为 **NetworkSend对象**
            - 再将数据封装为 **InFlightRequest inFlightRequest对象**
            - 将其添加到 **InFlightRequests inFlightRequests集合中**
            - 调用Selectable的send方法
                - 获取当前连接的KafkaChannel
                - 将待发送的任务NetworkSend对象存放在KafkaChannel通道中
                - TransportLayer触发SelectionKey的interestOps设置 **OP_WRITE**
- 结束

