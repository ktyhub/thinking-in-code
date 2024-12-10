# redisson redisson-3.38.0
### 为什么要使用redisson

在当今快速发展的技术世界中，开发者面临着越来越多的挑战，尤其是在处理分布式系统和高并发场景时。传统的解决方案往往无法满足性能和可扩展性的需求，导致开发者在选择技术栈时陷入两难。此时，Redisson作为一个强大的Redis客户端，凭借其简洁的API和丰富的功能，成为了开发者的理想选择。它不仅能够简化复杂的分布式操作，还能有效提升应用的性能和响应速度，让开发者从繁琐的底层细节中解放出来，专注于业务逻辑的实现。

### redisson是什么

Redisson是一个Java客户端库，旨在简化与Redis数据库的交互。它提供了丰富的功能，包括分布式对象、分布式锁、消息队列等，帮助开发者轻松构建高性能的分布式应用。通过Redisson，开发者可以利用Redis的强大功能，而无需深入了解底层的实现细节。

### 入门示例

想象一下，你正在开发一个在线购物平台，用户在高峰期同时下单，系统需要确保订单处理的准确性和高效性。使用Redisson，你可以轻松实现分布式锁，确保同一时间只有一个线程能够处理特定的订单。以下是一个简单的示例代码：

```java
RLock lock = redisson.getLock("orderLock");
try {
    lock.lock();
    // 处理订单逻辑
} finally {
    lock.unlock();
}
```

通过这种方式，你可以有效避免订单重复处理的问题，提升用户体验。

### redisson-3.38.0版本更新了什么

在Redisson 3.38.0版本中，新增了对Live Object Service的本地缓存支持，增加了RClientSideCaching对象以通过RESP3协议实现客户端缓存，支持Tomcat 11，并新增了RBatch.getSearch()和RedissonClient.getMultiLock()方法。此外，修复了一些已知问题，提升了整体性能和稳定性。

### 更新日志

- 新增功能：支持Live Object Service的本地缓存。
- 新增功能：添加了RClientSideCaching对象，通过RESP3协议实现客户端缓存。
- 新增功能：支持Tomcat 11。
- 新增功能：添加了RBatch.getSearch()方法。
- 新增功能：添加了RedissonClient.getMultiLock()方法，用于对象锁定。
- 重大变更：RLongAdder和RDoubleAdder主题频道名称已更改。
- 改进：RRateLimiter的timeToLive参数已重命名为keepAliveTime。
- 修复：解决了在集群模式下lazyInitialization=true无效的问题。
- 修复：Spring Cache与反应式类型或CompletableFuture不兼容的问题。
- 修复：Pub/Sub连接随机断开的问题。
- 修复：RLiveObjectService.persist()和merge()方法在调用多个参数时返回的对象问题。
- 修复：RJsonBucketReactive和RJsonBucketRx使用反应式类型作为参数的问题。
- 修复：LiveObject过期时抛出ClassNotFoundException的问题。
- 修复：Micronaut和Quarkus的本地镜像构建问题。
- 修复：RSearch.info()方法在处理无穷值时抛出异常的问题。

### 总结

Redisson 3.38.0版本的更新不仅增强了功能，还修复了多个关键问题，提升了性能和稳定性。这些改进使得Redisson在构建高效的分布式应用时更加得心应手，为开发者提供了更强大的支持。