 

Send发送者线程的主限循环逻辑

- 开始Sender类型的run方法
- while (running)主循环
- 调用runOnce()方法
  - transactionManager处理事务消息
  - 请求放入本地通道等待发送
- 执行IO事件将通道中的请求发送到服务端





```java
public void run() {
    log.debug("Starting Kafka producer I/O thread.");

    // main loop, runs until close is called
    while (running) {
        try {
            runOnce();
        } catch (Exception e) {
            log.error("Uncaught error in kafka producer I/O thread: ", e);
        }
    }
```