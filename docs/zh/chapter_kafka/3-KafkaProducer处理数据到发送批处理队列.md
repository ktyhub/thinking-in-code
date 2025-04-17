 

KafkaProducer处理数据到发送批处理队列

- 开始
- 封装消息的TOPIC、KEY 、MESSAGE到 ProducerRecord类型对象
- 调用KafkaProducer类型的 send方法
  - 执行拦截器 ProducerInterceptors的的 onSend方法
  - 调用KafkaProducer类型的 doSend方法
    - 如果生产者sender对象已经关闭则抛出异常直接结束
    - 本地MetadataCache缓存中查询集群信息Cluster waitOnMetadata方法
      - invalidTopics过滤
      - 本地内存集群信息Cluster缓存中获取Topic的分区数这个时候本地是没有分区的
      - **更新元数据:**调用ProducerMetadata的requestUpdate 改变标记变量needUpdate = true;与请求版本号等待网络IO的执行来更新元数据
      - **唤醒IO执行元数据请求：**调用Sender对象的wakeup()方法唤醒网络IO 
        - 调用到NetworkClient的wakeup()，
          - 再调用Selectable的wakeup()
            - java.nio.channels.Selector nioSelector的wakeup()
              - mac电脑执行KQueueSelectorImpl的wakeup()执行逻辑
                - 执行IOUtil.write1(fd1, (byte)0); 这个是个native方法
      - **等待元数据的IO请求结果：**调用ProducerMetadata类型的awaitUpdate等待60秒（配置为max.block.ms默认60秒）obj.wait等待元数据请求（IO线程会拉取元数据）
- **IO线程**：拉取元数据Metadata中的handleMetadataResponse方法处理元数据的响应将数据放到本地缓存
- **IO线程：**调用生产者元数据对象的notifyAll方法唤醒发送线程
- **序列化KEY:** 调用keySerializer的serialize方法序列化KEY
- **序列化VALUE: **调用valueSerializer对象的serialize方法序列化VALUE
- **对KEY执行分区计算：**调用分区器Partitioner的partition方法对KEY进行分区默认是Hash取模
- 发送记录大小校验
  - 预估发送数据大小计算方式为： magic + keySize + valueSize
  - 发送的数据长度不能超过请求大小max.request.size配置
  - 发送的数据长度不能超过内存大小buffer.memory配置
- 数据存放在记录累加器RecordAccumulator中（内存池与内存队列批量发送使用）
  - 为当前主题分区TopicPartition创建对应的批处理队列Deque<ProducerBatch>
  - **批处理队列与分区信息映射关系存储**：映射结果存放在分区记录器的成员变量ConcurrentMap<TopicPartition, Deque<ProducerBatch>> batches中
  - 内存池分配：调用BufferPool类型对象free的allocate方法 （使用ByteBuffer来创建的）
  - 将请求加入批处理队列中：创建批处理对象ProducerBatch
  - 将数据通过ByteBufferOutputStream写入ByteBuffer中
  - 封装结果到RecordAccumulator.RecordAppendResult类型中
- **唤醒网络IO：** 批处理已满或者首次创建批处理对象则调用Sender类型的wakeup方法唤醒网络IO
  - Sender类型的wakeup
    - KafkaClient的wakeup
      - Selectable类型的wakeup
        - java.nio.channels.Selector的wakeup
          - mac电脑执行KQueueSelectorImpl的wakeup()执行逻辑
            - IOUtil.write1(fd1, (byte)0);
- 返回一个Future对象可以同步等待结果
- 结束







KafkaProducer类型的doSend方法如下：



```java
private Future<RecordMetadata> doSend(ProducerRecord<K, V> record, Callback callback) {
    TopicPartition tp = null;
    try {
        throwIfProducerClosed();
        // first make sure the metadata for the topic is available
        ClusterAndWaitTime clusterAndWaitTime;
        try {
            clusterAndWaitTime = waitOnMetadata(record.topic(), record.partition(), maxBlockTimeMs);
        } catch (KafkaException e) {
            if (metadata.isClosed())
                throw new KafkaException("Producer closed while send in progress", e);
            throw e;
        }
        long remainingWaitMs = Math.max(0, maxBlockTimeMs - clusterAndWaitTime.waitedOnMetadataMs);
        Cluster cluster = clusterAndWaitTime.cluster;
        byte[] serializedKey;
        try {
            serializedKey = keySerializer.serialize(record.topic(), record.headers(), record.key());
        } catch (ClassCastException cce) {
            throw new SerializationException("Can't convert key of class " + record.key().getClass().getName() +
                    " to class " + producerConfig.getClass(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG).getName() +
                    " specified in key.serializer", cce);
        }
        byte[] serializedValue;
        try {
            serializedValue = valueSerializer.serialize(record.topic(), record.headers(), record.value());
        } catch (ClassCastException cce) {
            throw new SerializationException("Can't convert value of class " + record.value().getClass().getName() +
                    " to class " + producerConfig.getClass(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG).getName() +
                    " specified in value.serializer", cce);
        }
        int partition = partition(record, serializedKey, serializedValue, cluster);
        tp = new TopicPartition(record.topic(), partition);

        setReadOnly(record.headers());
        Header[] headers = record.headers().toArray();

        int serializedSize = AbstractRecords.estimateSizeInBytesUpperBound(apiVersions.maxUsableProduceMagic(),
                compressionType, serializedKey, serializedValue, headers);
        ensureValidRecordSize(serializedSize);
        long timestamp = record.timestamp() == null ? time.milliseconds() : record.timestamp();
        log.trace("Sending record {} with callback {} to topic {} partition {}", record, callback, record.topic(), partition);
        // producer callback will make sure to call both 'callback' and interceptor callback
        Callback interceptCallback = new InterceptorCallback<>(callback, this.interceptors, tp);

        if (transactionManager != null && transactionManager.isTransactional())
            transactionManager.maybeAddPartitionToTransaction(tp);

        RecordAccumulator.RecordAppendResult result = accumulator.append(tp, timestamp, serializedKey,
                serializedValue, headers, interceptCallback, remainingWaitMs);
        if (result.batchIsFull || result.newBatchCreated) {
            log.trace("Waking up the sender since topic {} partition {} is either full or getting a new batch", record.topic(), partition);
            this.sender.wakeup();
        }
        return result.future;
        // handling exceptions and record the errors;
        // for API exceptions return them in the future,
        // for other exceptions throw directly
    } catch (ApiException e) {
        log.debug("Exception occurred during message send:", e);
        if (callback != null)
            callback.onCompletion(null, e);
        this.errors.record();
        this.interceptors.onSendError(record, tp, e);
        return new FutureFailure(e);
    } catch (InterruptedException e) {
        this.errors.record();
        this.interceptors.onSendError(record, tp, e);
        throw new InterruptException(e);
    } catch (BufferExhaustedException e) {
        this.errors.record();
        this.metrics.sensor("buffer-exhausted-records").record();
        this.interceptors.onSendError(record, tp, e);
        throw e;
    } catch (KafkaException e) {
        this.errors.record();
        this.interceptors.onSendError(record, tp, e);
        throw e;
    } catch (Exception e) {
        // we notify interceptor about all exceptions, since onSend is called before anything else in this method
        this.interceptors.onSendError(record, tp, e);
        throw e;
    }
}
```