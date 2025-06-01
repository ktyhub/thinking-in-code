# lettuce 6.6.0.BETA2
### 为什么要使用lettuce

在当今快速发展的技术世界中，开发者面临着无数选择，尤其是在处理数据存储和访问时。选择一个合适的工具，往往意味着在性能、易用性和功能之间进行艰难的权衡。Lettuce作为一个异步Redis客户端，正是在这种矛盾中脱颖而出。它不仅提供了高性能的连接和操作，还支持多种编程语言的集成，极大地提升了开发效率。然而，许多开发者仍在犹豫：是选择传统的同步方式，还是迈向更高效的异步编程？Lettuce的出现，正是为了打破这种困境，让开发者在享受高效的同时，避免复杂的实现细节。

### lettuce是什么

Lettuce是一个开源的异步Redis客户端，旨在为Java应用程序提供高效、灵活的Redis访问。它支持多种Redis特性，包括事务、发布/订阅、管道等，允许开发者以异步方式与Redis进行交互，从而提高应用程序的性能和响应速度。Lettuce的设计理念是简洁易用，能够轻松集成到现有的Java项目中。

### 入门示例

想象一下，你正在开发一个电商平台，需要实时更新库存信息。使用Lettuce，你可以轻松地实现一个异步库存更新功能。以下是一个简单的示例代码：

```java
import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;

public class InventoryUpdater {
    public static void main(String[] args) {
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");
        StatefulRedisConnection<String, String> connection = redisClient.connect();
        RedisCommands<String, String> syncCommands = connection.sync();

        // 更新库存
        syncCommands.set("product:123:stock", "50");
        System.out.println("库存更新成功：产品123的库存为50");

        connection.close();
        redisClient.shutdown();
    }
}
```

在这个示例中，我们创建了一个Redis客户端，连接到本地的Redis服务器，并更新了产品123的库存信息。通过Lettuce，开发者可以轻松实现高效的库存管理。

### lettuce 6.6.0.BETA2版本更新了什么

Lettuce 6.6.0.BETA2版本引入了多项重要更新，包括支持基于令牌的身份验证和Microsoft Entry ID集成，替代了过时的STRALGO命令并实现了LCS。此外，修复了阻塞事件循环线程的问题，确保了写入和通知通道的FIFO顺序，并添加了使用SNI启用TLS连接的示例配置。

### 更新日志

## 📗 链接
- 参考文档: [https://lettuce.io/core/6.6.0.RELEASE/reference/](https://lettuce.io/core/6.6.0.RELEASE/reference/)
- Javadoc: [https://lettuce.io/core/6.6.0.RELEASE/api/](https://lettuce.io/core/6.6.0.RELEASE/api/)

此版本解决了在发布前未成功跨移植的基于令牌的身份验证问题。

## ⭐ 新特性
- 支持基于令牌的身份验证，并通过新的核心身份验证扩展集成Microsoft Entry ID。
- 废弃STRALGO命令，并实现LCS作为替代。

## 🐞 Bug修复
- 修复：通过用HashIndexedQueue替换ArrayDeque，防止阻塞事件循环线程。
- 修复：确保写入和通知通道之间的FIFO顺序。

## 💡 其他
- 添加了使用SNI启用TLS连接的示例配置。
- 禁用在运行测试时调用compose的docker镜像。
- 每周运行基准测试的工作流程。

## ❤️ 新贡献者
- Dltmd202、andy-stark-redis和okg-cxf等新贡献者在多个请求中做出了首次贡献。

**完整更新日志**: [6.5.1.RELEASE...6.6.0.RC1](https://github.com/redis/lettuce/compare/6.5.1.RELEASE...6.6.0.RC1)

### 总结

Lettuce 6.6.0.BETA2版本通过引入基于令牌的身份验证、替代过时命令以及修复多个bug，进一步提升了其性能和易用性。此外，新增的示例配置和工作流程也为开发者提供了更好的支持，展现了Lettuce在现代开发中的重要性。