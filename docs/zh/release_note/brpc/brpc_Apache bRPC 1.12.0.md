# brpc Apache bRPC 1.12.0
### 为什么要使用brpc

在当今这个快速发展的技术时代，企业面临着前所未有的挑战。如何在复杂的微服务架构中实现高效的通信，成为了许多开发者的心头之痛。传统的RPC框架往往无法满足高并发、低延迟的需求，导致系统性能下降，用户体验受损。而brpc的出现，正是为了打破这一僵局。它不仅提供了高效的通信机制，还具备灵活的扩展性和易用性，帮助开发者在复杂的环境中游刃有余。选择brpc，意味着选择了一条通向高效能和高可用性的道路。

### brpc是什么

brpc（百度RPC）是一个高性能的RPC框架，旨在简化分布式系统中的服务间通信。它支持多种传输协议和序列化方式，能够满足不同场景下的需求。brpc的设计理念是高效、灵活和易用，适合用于微服务架构、云计算和大数据处理等领域。

### 入门示例

想象一下，你正在开发一个电商平台，用户在浏览商品时需要实时获取库存信息。使用brpc，你可以轻松地实现一个库存服务，并通过brpc与前端进行高效的通信。以下是一个简单的示例：

```cpp
// 定义库存服务
service InventoryService {
    rpc GetStock (GetStockRequest) returns (GetStockResponse);
}

// 实现库存服务
class InventoryServiceImpl : public InventoryService {
    void GetStock(const GetStockRequest* request, GetStockResponse* response) {
        // 查询库存逻辑
        response->set_stock(100); // 假设库存为100
    }
};
```

通过这种方式，你可以快速构建一个高效的库存查询服务，提升用户体验。

### brpc Apache bRPC 1.12.0版本更新了什么

Apache bRPC 1.12.0版本带来了多个重要更新，包括支持任务追踪、添加非反射消息和支持Protobuf v5、方法级选项以忽略服务器过载、增加bthread CPU使用情况的支持等。此外，修复了一些内存泄漏问题和构建失败的错误，增强了系统的稳定性和性能。

### 更新日志

#### 特性：
- 支持任务追踪。
- 添加非反射消息并支持Protobuf v5。
- 方法级选项以忽略服务器过载。
- 增加bthread CPU使用情况的支持。

#### Bug修复：
- 修复ArenaRpcPBMessageFactory的内存泄漏。
- 修复keytable列表的内存泄漏。
- 修复通用引用问题。
- 指示LeakSanitizer忽略指定的内存泄漏。

#### 增强：
- 支持MultiDimension的set_max_stats_count。
- 支持回溯日志。
- 支持ResourcePool和ObjectPool的可变参数。
- 支持ParallelChannel的成功限制。

#### 其他：
- 文档及其他改进。

### 总结

在Apache bRPC 1.12.0版本中，新增了多项特性和增强功能，修复了多个bug，提升了系统的稳定性和性能。这些更新将进一步推动开发者在构建高效、可靠的分布式系统时的能力。