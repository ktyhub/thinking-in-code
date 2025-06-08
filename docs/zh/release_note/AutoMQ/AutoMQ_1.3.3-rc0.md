# AutoMQ 1.3.3-rc0
### 为什么要使用AutoMQ  
想象这样一个场景：你的消息队列系统像一台永不满足的吞金兽，吞噬着服务器资源，而流量高峰时却依然卡顿崩溃；你的运维团队夜以继日地扩容缩容，却总在「资源浪费」和「性能不足」的夹缝中挣扎。这就是传统消息队列的困局——**资源利用率与弹性能力的终极矛盾**。  
AutoMQ的出现，像一把斩断枷锁的利剑。它用「云原生」重构消息队列的基因，让系统在秒级自动伸缩，成本直降80%的同时，吞吐量翻倍。当竞争对手还在用「堆机器」解决问题时，AutoMQ已让消息队列真正成为「按需呼吸」的智能器官。

---

### AutoMQ是什么  
AutoMQ是一款彻底云原生的分布式消息系统，兼容Kafka协议，核心数据层直接构建在对象存储（如AWS S3）之上。它通过存算分离架构实现极致弹性，无需预置资源，能像水一样自由伸缩，是云时代消息中间件的终极形态。

---

### 入门示例  
**真实场景**：某电商平台在大促期间面临流量脉冲，传统Kafka集群频繁触发扩容告警，但AutoMQ仅需3节点即可动态承载10倍流量冲击。  
**开发示例**：  
```java
// 生产者（完全兼容Kafka客户端）
Properties props = new Properties();
props.put("bootstrap.servers", "automq-cluster:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("instant-scale-topic", "闪电级扩容实现！"));

// 消费者
Consumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(Collections.singletonList("instant-scale-topic"));
while (true) {
    ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
    records.forEach(record -> System.out.println(record.value()));
}
```

---

### AutoMQ 1.3.3-rc0版本更新  
1. 新增Kafka协议对接接口，强化生态兼容性  
2. 写入对象存储流量智能限速，防止突发流量冲击  
3. 优化WAL内存释放机制，降低内存碎片风险  
4. 控制器增加动态配置接口，提升运维灵活性  
5. 重构Kafka连接相关配置命名，增强可读性  

---

### 更新日志  
#### What's Changed  
- **新增功能**：实现Kafka协议对接接口  
- **性能优化**：限制对象存储写入流量，避免突发流量过载  
- **缺陷修复**：提前释放WAL内存分配，减少内存碎片  
- **架构重构**：  
  - 新增控制器动态配置方法 `ControllerServer#reconfigurables`  
  - 重命名Kafka连接配置项，提升可维护性  
  - 将ProducerRouter更名为TrafficInterceptor  
- **接口变更**：使用linkId更新消费组API  

**完整更新记录**：查看[版本对比](https://github.com/AutoMQ/automq/compare/1.3.2...1.3.3-rc0)  

---

### 版本总结  
1.3.3-rc0版本聚焦于**协议兼容性强化**与**系统稳定性提升**，通过流量管控、内存优化、配置标准化三大手段，让AutoMQ在复杂场景下的表现更加游刃有余。此次更新如同为引擎加装智能涡轮——既保持爆发力，又确保持久性。