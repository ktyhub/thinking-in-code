# 3-从一个Kafka的Demo说起
## 3.1 简介
为了在理论中可以更好的理解一些细节,我们通过一个Demo开始来详细看kafka的实现原理,首先我们要做的是本地启动一个kafka,关于启动kakfa可以看前面这个文章: [《1-Kaka知识点全解析》](https://blog.csdn.net/songjunyan/article/details/124723196)


启动完kafka之后我们就来编写一个生产者的示例代码,关于生产者的Demo来源于,kafka官方源码中的example模块,不过这里稍加改造,方便理解。

这里先贴下生产者的Demo项目目录:

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Z0sF0IZH-1653699614116)(/Users/song/Library/Application Support/typora-user-images/image-20220526074340859.png)\]](https://img-blog.csdnimg.cn/46e757a6248d48f5bee5063e503fd7f8.png)


## 3.2 Demo编写
### 3.2.1 引入依赖配置日志
首先引入依赖如下所示:

```xml
<!-- https://mvnrepository.com/artifact/org.apache.kafka/kafka-clients -->
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.2.0</version>
</dependency>
<!--   我们使用log4j 日志实现 将日志打印到控制台方便调试     -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.25</version>
</dependency>
```



然后我们来编写Demo源码,这里客户端都以Java为例子:


为了打印方便我们将使用log4j的slf4j的日志实现将日志打印到控制台配置log4j.properties如下:

```properties
###set log levels###
log4j.rootLogger=info, stdout
###output to the console###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=[%d{dd/MM/yy HH:mm:ss:SSS z}] %t %5p %c{2}: %m%n
```



### 3.2.2 生产者例子

最后开始编写生产者Demo代码如下所示:

```java
package link.elastic.kafka.producer;

import java.util.Properties;
import java.util.concurrent.ExecutionException;

import org.apache.kafka.clients.producer.Callback;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.IntegerSerializer;
import org.apache.kafka.common.serialization.StringSerializer;

public class ProduceDemo {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost" + ":" + "9092");
        props.put("client.id", "DemoProducer");
        props.put("key.serializer", IntegerSerializer.class.getName());
        props.put("value.serializer", StringSerializer.class.getName());
        props.put("transaction.timeout.ms", -1);
        props.put("enable.idempotence", false);

        KafkaProducer producer = new KafkaProducer<>(props);

        int messageKey = 0;
        int recordsSent = 0;
        int numRecords = 1000;
        boolean isAsync = false;
        String topic = "topic1";
        while (recordsSent < numRecords) {
            String messageStr = "Message_" + messageKey;
            long startTime = System.currentTimeMillis();

            // Send synchronously
            try {
                producer.send(new ProducerRecord<>(topic,
                        messageKey,
                        messageStr)).get();
                System.out.println("Sent message: (" + messageKey + ", " + messageStr + ")");
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
            messageKey += 2;
            recordsSent += 1;
        }
        System.out.println("Producer sent " + numRecords + " records successfully");
    }

}
```







### 3.2.3 消费者例子
关于消费者的Demo代码如下:

```java
package link.elastic.kafka.consumer;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

public class ConsumerDemo {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "8.131.79.126" + ":" + "9092");
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

        KafkaConsumer consumer = new KafkaConsumer<>(props);
        String topic = "topic1";
        consumer.subscribe(Collections.singletonList(topic));
        while (true) {
            long count = 0;
            ConsumerRecords<Integer, String> records = consumer.poll(Duration.ofSeconds(1));
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

### 3.2.4 观察节点与topic信息

点击运行按钮接下来我们观察Zookeeper上的节点就可以看到了当前节点的分区信息和节点信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/2d3f3d0c8f7a42e39e2c4a83617c683c.png)

也可以在kafka manager控制台看到topic1的存在

![在这里插入图片描述](https://img-blog.csdnimg.cn/35183175002244dc9fa8ac4e7a763605.png)
