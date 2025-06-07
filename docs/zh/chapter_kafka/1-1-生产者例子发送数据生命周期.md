 
# 从一个生产者的Demo出发

## 简介

为了在理论中可以更好的理解一些细节,我们通过一个Demo开始来详细看kafka的实现原理,首先我们要做的是本地启动一个kafka,关于启动kakfa可以看前面这个文章.



启动完kafka之后我们就来编写一个生产者的示例代码,关于生产者的Demo来源于,kafka官方源码中的example模块,不过这里稍加改造,方便理解

这里先贴下生产者的Demo项目目录:

//todo这里有个图

## 依赖

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



## 日志配置

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





## 生产者Demo



### 源码大纲

生产者例子发送数据生命周期

- 开始

- 属性Properties初始化

- KafkaProducer类型生产者对象创建

- 调用生产者对象的send方法发送数据

- 关闭连接

- 结束

### 生产者将用到的配置说明



生产者用到的配置：

| 配置                   | 说明                                                         | 例子                              |
| ---------------------- | ------------------------------------------------------------ | --------------------------------- |
| bootstrap.servers      | 用于建立与 Kafka 集群的初始连接的主机/端口对列表。客户端将使用所有服务器，无论此处指定哪些服务器进行引导——此列表仅影响用于发现完整服务器集的初始主机。此列表应采用`host1:port1,host2:port2,...`. 由于这些服务器仅用于初始连接以发现完整的集群成员（可能会动态更改），因此此列表不需要包含完整的服务器集（但您可能需要多个服务器，以防服务器停机） . | localhost:9092                    |
| client.id              | 发出请求时传递给服务器的 id 字符串。这样做的目的是通过允许将逻辑应用程序名称包含在服务器端请求日志中来跟踪请求的来源，而不仅仅是 ip/port。 | DemoProducer                      |
| key.serializer         | 实现`org.apache.kafka.common.serialization.Serializer`接口的键的序列化程序类。 | IntegerSerializer.class.getName() |
| value.serializer       | 实现`org.apache.kafka.common.serialization.Serializer`接口的值的序列化程序类。 | StringSerializer.class.getName()  |
| transaction.timeout.ms | 事务协调器在主动中止正在进行的事务之前等待生产者的事务状态更新的最长时间（毫秒）。如果此值大于代理中的 transaction.max.timeout.ms 设置，则请求将失败并出现`InvalidTxnTimeoutException`错误 | -1                                |
| enable.idempotence     | 当设置为“true”时，生产者将确保每条消息的一个副本被写入流中。如果为“false”，生产者由于代理失败等原因重试，可能会在流中写入重试消息的副本。请注意，启用幂等性要求`max.in.flight.requests.per.connection`小于或等于 5（保留任何允许值的消息顺序），`retries`大于 0，并且`acks`必须为“全部”。 | false                             |



### 完整的示例源码

最后开始编写生产者Demo代码如下所示:

完整的源码如下：

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
        //属性Properties初始化开始//
        Properties props = new Properties();
        props.put("bootstrap.servers", "127.0.0.1" + ":" + "9092");
        props.put("client.id", "DemoProducer");
        props.put("key.serializer", IntegerSerializer.class.getName());
        props.put("value.serializer", StringSerializer.class.getName());
        props.put("transaction.timeout.ms", -1);
        props.put("enable.idempotence", false);
				//属性Properties初始化结束//

        //KafkaProducer类型生产者对象创建开始//
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
               //调用生产者对象的send方法发送数据
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
       //关闭连接
        producer.close();
        System.out.println("Producer sent " + numRecords + " records successfully");
    }

}

```



## 观察

点击运行按钮接下来我们观察Zookeeper上的节点就可以看到了当前节点的分区信息和节点信息

![image-20220526080054347](/Users/song/Library/Application Support/typora-user-images/image-20220526080054347.png)





也可以在kafka manager控制台看到topic1的存在

![image-20220526081145741](/Users/song/Library/Application Support/typora-user-images/image-20220526081145741.png)



## 总结

可以看到生产者发送的代码编写起来相对来说比较简单，需要我们重点去了解各个参数的配置与使用方式，生产者对象再创建与消息发送的时候内部与Kafka服务端做了很多的交互，具体做了哪些交互操作就需要我们继续看下面的文章一点点详细来了解了。

