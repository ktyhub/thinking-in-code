# grpc-go Release 1.68.0
### 为什么要使用grpc-go

在当今快速发展的技术世界中，微服务架构已成为构建高效、可扩展应用程序的标准。然而，随着服务数量的增加，如何高效地进行服务间通信成为了一个亟待解决的矛盾。grpc-go应运而生，它不仅提供了高性能的远程过程调用（RPC）框架，还通过其强大的功能和灵活性，帮助开发者克服了传统HTTP通信的种种限制。想象一下，您正在构建一个复杂的分布式系统，如何确保各个服务之间的高效协作？grpc-go正是您所需要的解决方案。

### grpc-go是什么

grpc-go是一个用于构建高性能、可扩展的远程过程调用（RPC）系统的开源框架。它基于Google的Protocol Buffers（protobuf）序列化机制，支持多种编程语言，提供了简单易用的API，帮助开发者快速实现服务间的高效通信。

### 入门示例

想象一下，您正在开发一个在线购物平台，前端需要与后端的多个微服务进行交互，比如用户服务、商品服务和订单服务。使用grpc-go，您可以轻松定义服务接口和消息格式。以下是一个简单的示例：

```go
// 定义服务
service ShoppingCart {
    rpc AddItem(Item) returns (Response);
}

// 定义消息
message Item {
    string id = 1;
    int32 quantity = 2;
}

message Response {
    bool success = 1;
}
```

通过这个定义，您可以快速生成客户端和服务器端代码，轻松实现购物车功能。grpc-go的高效性和易用性使得开发者能够专注于业务逻辑，而不是底层通信细节。

### grpc-go Release 1.68.0版本更新了什么

在1.68.0版本中，grpc-go进行了多项重要更新，包括：改进了OpenTelemetry的本地标签获取方式，增强了ORCA监听器的注册要求，优化了客户端连接关闭的处理方式，以及自动配置TLS凭证的CipherSuites和支持的TLS版本。此外，修复了一些关键的bug，提升了整体性能和稳定性。

### 更新日志

# 行为变化
- stats/opentelemetry/csm: 从"CSM_MESH_ID"环境变量获取mesh_id本地标签，而不是从引导文件解析。
- orca（实验性）：如果使用ORCA监听器，它现在必须仅在READY SubConn上注册，并且当连接丢失时，监听器将自动停止。
- client: `ClientConn.Close()`现在同时关闭传输，并在返回之前等待传输关闭。
- credentials: 通过`NewTLS`创建的TLS凭证将自动配置CipherSuites、支持的TLS版本和ALPN，这些之前仅在不使用`GetConfigForClient`选项的配置中设置。

# Bug修复
- transport: 防止在写入GOAWAY帧时出现死锁。
- mem: 通过使用切片容量而不是长度更准确地重用缓冲区。
- status: 修复status.Details()中的回归问题，导致在获取使用protoc-gen-go < v1生成的proto消息时返回包装类型。

# 依赖关系
- 将最低支持的Go版本提升至`go1.22.7`。

### 总结

在最新的1.68.0版本中，grpc-go通过多项行为变化和bug修复，进一步提升了其性能和稳定性。开发者可以期待更高效的服务间通信体验，同时也需要注意更新后的依赖关系要求。