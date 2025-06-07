 




- 更新元数据
  - 消费者协调器执行poll逻辑
  - 消费者协调器查询最少连接节点













- 开始

- 调用KafkaConsumer的poll方法

- 获取轻量级锁然后检测消费者开启状态

- 消费者监控指标KafkaConsumerMetrics记录poll开始执行时间

- 如果 SubscriptionState 的subscriptionType类型为SubscriptionType.NONE则抛出异常

- 执行未超时则循环fetch处理逻辑

- ConsumerNetworkClient唤醒状态判断

- updateAssignmentMetadataIfNeeded尝试更新分配元数据，但不需要阻止加入组的计时器

- Fetcher触发发送逻辑调用的ConsumerNetworkClient类型的sendFetches

- prepareFetchRequests为在飞行队列中没有现有请求的分区分配的所有节点创建获取请求。 。

- ConsumerNetworkClient的send方法开始发送当前topic分区数据

- KafkaClient的.wakeup()唤醒客户端，以防它在轮询中阻塞，以便我们可以发送排队的请求

- ConsumerNetworkClient的poll

- 调用KafkaClient的send将给定请求排队，以便在后续轮询（长）调用中发送

- selector.poll执行IO事件

- 处理响应结果

- 结束

  