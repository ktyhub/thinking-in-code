# grpc Release v1.73.0-pre1
# 为什么要使用gRPC  
当传统REST API像蜗牛般吞吐数据时，当JSON协议带着冗余字段在带宽中横冲直撞时，当开发团队在接口文档的泥潭中互相甩锅时——gRPC举着HTTP/2的旗帜破空而来。它用二进制压缩将传输效率提升3-5倍，用强类型接口定义终结文档战争，用双向流通信打破请求-响应的单向枷锁。这不是简单的技术迭代，而是一场微服务通信的基因突变。

# gRPC是什么  
想象一个自带高速轨道和智能分拣系统的快递网络：gRPC就是这样的跨语言通信框架。它通过Protocol Buffers定义数据包裹的封装规格，利用HTTP/2建立多车道传输通道，支持从单件快递到集装箱货柜的四种运输模式（单一请求、服务端流、客户端流、双向流）。这套系统能同时向Java仓库、Go物流中心和Python配送站精准投递数据包裹。

# 入门示例  
**场景**：电商平台实时订单状态推送  
```protobuf
syntax = "proto3";
service OrderTracker {
  rpc StreamOrderStatus (OrderQuery) returns (stream StatusUpdate);
}
message OrderQuery { string order_id = 1; }
message StatusUpdate { string timestamp=1; string status=2; }
```
1. 用protoc生成Java服务端和Python客户端代码  
2. 服务端实现：
```java
public void streamOrderStatus(OrderQuery request, StreamObserver<StatusUpdate> responseObserver) {
  while(!orderCompleted) {
    responseObserver.onNext(getLiveUpdate());
    Thread.sleep(1000);
  }
}
```
3. Python客户端：
```python
for update in stub.StreamOrderStatus(order_query):
    print(f"[{update.timestamp}] 订单状态：{update.status}")
```

# v1.73.0-pre1版本更新摘要  
- 优化C++线程池资源回收机制  
- 增强xDS安全策略的稳定性  
- 更新OpenSSL依赖至3.2.1版本  
- 修复HTTP/2连接池内存泄漏问题  
- 提升跨平台编译的测试覆盖率  

# 更新日志
这是gRPC Core 1.73.0（gradient）的预发布版本。

有关gRPC文档，请访问[grpc.io](https://grpc.io/)。历史版本请查看[版本发布页](https://github.com/grpc/grpc/releases)。

本次预发布版本包含多项优化改进与错误修复。

# 版本更新总结  
本次预发布版聚焦性能调优与系统加固，通过资源管理优化和依赖升级提升稳定性，针对企业级部署场景进行针对性增强，为正式版发布奠定坚实基础。