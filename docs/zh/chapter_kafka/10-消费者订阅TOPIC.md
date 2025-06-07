 



- 校验
  - topic合法性校验
  - 分区器校验
- 订阅
  - 默认订阅模式设置为AUTO_TOPICS
  - 更新订阅状态订阅信息
  - 请求执行网络IO来更新元数据

消费者订阅主题调用的代码很简单如下所示：

```java
String topic = "topic1";
consumer.subscribe(Collections.singletonList(topic));
```





KafkaConsumer类型的subscribe方法

```java
public void subscribe(Collection<String> topics) {
    subscribe(topics, new NoOpConsumerRebalanceListener());
}
```



```java
public void subscribe(Collection<String> topics, ConsumerRebalanceListener listener) {
    acquireAndEnsureOpen();
    try {
        maybeThrowInvalidGroupIdException();
        //前面两个是topic合法性校验
        if (topics == null)
            throw new IllegalArgumentException("Topic collection to subscribe to cannot be null");
        if (topics.isEmpty()) {
            // treat subscribing to empty topic list as the same as unsubscribing
            this.unsubscribe();
        } else {
          //这里开始订阅
            for (String topic : topics) {
               //订阅之前先进行合法性校验
                if (topic == null || topic.trim().isEmpty())
                    throw new IllegalArgumentException("Topic collection to subscribe to cannot contain null or empty topic");
            }
				   //这里如果未配置分区器则抛出异常 ，对应配置为partition.assignment.strategy 不配置其实也有默认值默认值为RangeAssignor策略 根据范围平均分片
            throwIfNoAssignorsConfigured();
          //清除掉缓冲区中本次未订阅的数据
            fetcher.clearBufferedDataForUnassignedTopics(topics);
            log.info("Subscribed to topic(s): {}", Utils.join(topics, ", "));
          //开始订阅
            if (this.subscriptions.subscribe(new HashSet<>(topics), listener))
               //请求IO执行
                metadata.requestUpdateForNewTopics();
        }
    } finally {
        release();
    }
}
```

SubscriptionState类型的subscribe方法

```java
public synchronized boolean subscribe(Set<String> topics, ConsumerRebalanceListener listener) {
    registerRebalanceListener(listener);
    setSubscriptionType(SubscriptionType.AUTO_TOPICS);
    return changeSubscription(topics);
}
```

这里仅仅将订阅重新负载均衡器，订阅类型，和订阅的TOPIC等数据更新到了SubscriptionState类型的对象中服务端还未感知到，后续网络IO执行具体的请求来实现TOPIC的订阅











- 
- 开始
- 调用订阅方法KafkaConsumer的subscribe
- 消费者获取轻量级锁然后检测消费者状态是否正常
- groupId为空则抛出异常
- topic为空则执行取消订阅逻辑
- 遍历topic列表循环订阅每个topic
- topic为空则抛出异常
- 如果未配置分区管理器则ConsumerPartitionAssignor则抛出异常
- Fetcher清除当前主题分区不属于新分配分区的缓冲数据
- SubscriptionState执行订阅逻辑subscribe
- 注册重新平衡监听器
- 设置订阅类型SubscriptionType.AUTO_TOPICS
- 为SubscriptionState设置成员变量subscription（用户请求的主题列表）需要订阅的topic 集合Set
- 调用ConsumerMetadata的requestUpdateForNewTopics更新请求版本（后面异步IO去执行这个请求） 
- 释放消费者轻量级锁
- 结束

