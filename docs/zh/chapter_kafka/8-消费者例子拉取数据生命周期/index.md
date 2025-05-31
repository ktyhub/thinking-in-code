 

先用一个大纲开头

- 开始
- 初始化
  - 属性Properties初始化
  - KafkaConsumer类型生产者对象创建
- 订阅
  - 消费者订阅topic
- 拉取数据
  - 消费者调用poll命令拉取数据ConsumerRecords
- 消费者处理数据
  - 自行处理数据
  - 消费者自动提交偏移量
- 关闭连接
- 结束



```java
public class ConsumerDemo {
    public static void main(String[] args) {
      //初始化属性的地方
        Properties props = new Properties();
        props.put("bootstrap.servers", "127.0.0.1" + ":" + "9092");
        String groupId = "DemoConsumer";
        props.put("group.id", groupId);
        props.put("enable.auto.commit", "true");
        props.put("auto.commit.interval.ms", "1000");
        props.put("session.timeout.ms", "30000");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.IntegerDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        boolean readCommitted = false;
        if (readCommitted) {
            props.put("isolation.level", "read_committed");
        }
        props.put("auto.offset.reset", "earliest");
				//初始化消费者对象
        KafkaConsumer consumer = new KafkaConsumer<>(props);
      
        //订阅主题
        String topic = "topic1";
        consumer.subscribe(Collections.singletonList(topic));
       
       //执行循环拉取数据
        while (true) {
            long count = 0;
           //每秒拉取一批数据 一批数据大小由配置max.poll.records决定 默认为500
            ConsumerRecords<Integer, String> records = consumer.poll(1000);
            for (ConsumerRecord<Integer, String> record : records) {
                System.out.println(groupId + " received message : from partition " + record.partition()
                        + ", (" + record.key() + ", " + record.value() + ") at offset " + record.offset());
                count++;
            }
             System.out.println(groupId + " finished reading " + count + " messages");
        }
    }
}
```

消费者例子与生产者类似，先初始化再执行，唯一不同的是消费者需要提前订阅主题，然后在循环中执行poll方法来批量拉取消息，参数间隔时间可以根据实际调整，调整过大节省CPU空转的资源，但是延迟会较大，调整的过小延迟较小，对CPU资源占用会更多。另外就是单次拉取的数据数量是使用配置max.poll.records来决定的 默认值为500，不考虑消费者处理消息的时间，这两个参数决定了消费者消费消息的吞度量，另外消费完消息之后需要提交偏移量，这里通过enable.auto.commit参数将提交默认设置为自动提交消息已经过消费完成之后可以自动提交了。