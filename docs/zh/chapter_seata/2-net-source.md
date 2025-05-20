Getting Started with Seata Network Communication Source Code
Seata 网络通信源代码入门
[https://seata.apache.org/blog/](https://seata.apache.org/blog/)

1. 总体类层次结构
   • AbstractNettyRemoting：作为顶层抽象类，提供同步（`sendSync`）和异步（`sendAsync`）等基础RPC方法。

   • RemotingServer 和 RemotingClient：继承自 `AbstractNettyRemoting`，分别处理服务器和客户端的通信逻辑，体现Client-Server架构设计。


2. 服务器启动流程
   • 启动入口：通过Spring Boot的`CommandLineRunner`启动，核心逻辑在`NettyRemotingServer`初始化。

   • 处理器注册：使用`processorTable`哈希表关联消息类型、处理器（如`ServerOnRequestProcessor`）及线程池，支持事务请求、心跳等消息处理。

   • Netty初始化：配置`ServerBootstrap`，监听端口，支持多版本协议解码器`MultiProtocolDecoder`，动态替换编解码器。


3. 客户端启动流程
   • TM/RM初始化：`GlobalTransactionScanner`创建`TmNettyRemotingClient`和`RmNettyRemotingClient`，注册不同处理器（如
   `ClientOnResponseProcessor`）。

   • 通道管理：通过`NettyClientChannelManager`管理连接，使用`GenericKeyedObjectPool`对象池复用Channel，按角色（TM/RM）生成
   `NettyPoolKey`。


4. 消息发送与处理
   • 同步调用：通过`MessageFuture`和`CompletableFuture`实现异步转同步，利用哈希表跟踪请求ID，阻塞等待响应。

   • 异步调用：直接调用Netty的`writeAndFlush`，无阻塞。

   • 批量发送：

   ◦ 客户端：合并多个请求为`MergedWarpMessage`，通过`mergeSendExecutorService`线程池定时发送。

   ◦ 服务器：处理合并消息，支持`MergeResultMessage`（全处理完成响应）和`BatchResultMessage`（并行处理，快速响应）。


5. 通道管理机制
   • 客户端：通过对象池复用Channel，`acquireChannel`方法检查连接有效性，失败时重连。

   • 服务器：`ChannelManager`维护客户端连接，处理TM/RM注册请求，记录`RpcContext`和资源映射，支持按`resourceId`和`clientId`
   查找通道。


6. 性能优化与设计亮点
   • 多版本协议：动态切换编解码器，兼容不同版本客户端。

   • 线程池策略：按消息类型分配线程池，避免资源竞争（如分支事务结果单独处理）。

   • 批量处理优化：Seata 1.5+引入`BatchResultMessage`，并行处理提升响应速度。


7. 关键类与组件
   • MessageFuture：封装请求-响应映射，实现同步阻塞。

   • NettyPoolableFactory：管理Channel对象池，处理连接创建、销毁和验证。

   • RpcContext：维护客户端注册信息（如应用ID、资源组），支持事务上下文传递。

总结
Seata的通信模块通过抽象类分层、Netty异步框架、对象池复用及多版本协议支持，实现了高效的分布式事务协调。其同步/异步调用机制、批量消息优化和动态线程池策略，确保了高并发场景下的性能与可靠性。