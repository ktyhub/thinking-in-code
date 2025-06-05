# brpc Apache bRPC 1.11.0
### 为什么要使用brpc

在当今这个快速发展的技术时代，开发者面临着越来越多的挑战。如何在保证高性能的同时，确保系统的稳定性和可扩展性，成为了一个亟待解决的矛盾。brpc（百度RPC）正是为了解决这一难题而生。它不仅提供了高效的远程过程调用（RPC）框架，还具备灵活的扩展性和丰富的功能，帮助开发者在复杂的分布式系统中游刃有余。选择brpc，意味着选择了一条通向高效、稳定和可扩展的开发之路。

### brpc是什么

brpc（百度RPC）是一个高性能的远程过程调用框架，旨在简化分布式系统中的服务间通信。它支持多种传输协议和序列化方式，能够在不同的编程语言和平台之间无缝对接。brpc的设计理念是高效、灵活和易用，使得开发者能够快速构建和部署分布式应用。

### 入门示例

想象一下，你正在开发一个电商平台，需要处理用户的订单请求。使用brpc，你可以轻松地创建一个订单服务，并通过RPC调用来处理订单。以下是一个简单的示例：

```cpp
#include <brpc/server.h>

class OrderServiceImpl : public OrderService {
public:
    void PlaceOrder(google::protobuf::RpcController* controller,
                    const PlaceOrderRequest* request,
                    PlaceOrderResponse* response,
                    google::protobuf::Closure* done) {
        // 处理订单逻辑
        response->set_order_id("12345");
        done->Run();
    }
};

int main(int argc, char* argv[]) {
    brpc::Server server;
    OrderServiceImpl order_service;
    server.AddService(&order_service, brpc::SERVER_OWNS_SERVICE);
    server.Start(8080, nullptr);
    server.Run();
    return 0;
}
```

在这个例子中，我们定义了一个订单服务，并实现了一个处理订单的接口。通过brpc，服务可以轻松地与其他服务进行通信，确保订单处理的高效性。

### brpc Apache bRPC 1.11.0版本更新了什么

在1.11.0版本中，brpc引入了多个重要更新，包括支持pthread互斥锁死锁检测、bzlmod、Wireshark解析多个RPC、jemalloc分析器和统计打印等功能。此外，还增强了RPC protobuf消息工厂接口和流的批量创建与接收能力，修复了多个bug，提升了整体性能和稳定性。

### 更新日志

#### 特性：
- 支持pthread互斥锁死锁检测。
- 支持bzlmod。
- 支持在Wireshark解析器中解析baidu_std协议的多个RPC。
- 支持jemalloc分析器和统计打印。
- 支持RPC protobuf消息工厂接口。
- 支持arena RPC pb消息工厂。
- 支持备份请求策略。
- 支持bthread的信号量和读写锁。
- 支持批量创建和接收流。
- 支持快速/挂钩pthread和bthread::Mutex的定时锁。

#### Bug修复：
- 修复由竞争分析器引起的malloc死锁。
- 修复rdma编译错误。
- 修复百度主服务泄漏。
- 修复TCP连接中断。
- 修复butil::ObjectPoolAllocator中的内存泄漏。
- 修复rdma移除消费者错误。
- 修复SerializedResponse的编译错误。
- 修复unittest在cmake中的问题。
- 修复Stream的无效fd检查失败。

#### 增强：
- 在macOS上添加openSSL_ROOT_DIR检查。
- 为bthread互斥锁实现主动自旋和队列旧bthread。
- 使periodic_task.h成为自包含的头文件。
- 支持不可复制的同步对象。
- 使用ManualConstructor(AlignedMemory)替代已在C++23中弃用的std::aligned_storage。
- 当身份验证失败时向客户端发送未授权响应。
- 优化keytablelist实现。
- 将类名用单引号包裹。
- 添加方法选项以禁用服务器端的过载检查。
- 仅支持批量但以相同标签唤醒的butex。
- 添加对bthread_setconcurrency_by_tag的检查。
- 添加所需头文件以修复unittest编译。
- 将bzlmod中的boost依赖切换为bcr。

### 总结

在1.11.0版本中，brpc不仅增强了功能，修复了多个bug，还提升了整体性能和稳定性。这些更新使得brpc在高并发和复杂分布式环境中的应用更加可靠，进一步巩固了其作为高性能RPC框架的地位。选择brpc，意味着选择了一条通向高效、稳定和可扩展的开发之路。