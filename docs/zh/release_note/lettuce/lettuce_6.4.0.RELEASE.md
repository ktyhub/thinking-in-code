# lettuce 6.4.0.RELEASE
### 为什么要使用lettuce

在当今快速发展的技术世界中，选择合适的工具至关重要。Lettuce作为一个高性能的Redis客户端，提供了异步和反应式编程的支持，能够处理大量并发请求。然而，许多开发者在选择时却面临着一个矛盾：是选择传统的同步方式，还是拥抱现代的异步编程？Lettuce的出现，正是为了解决这一困惑。它不仅能提高应用的响应速度，还能简化代码的复杂性，让开发者专注于业务逻辑，而非底层实现。

### lettuce是什么

Lettuce是一个开源的Redis客户端，支持Java和其他JVM语言。它提供了异步和反应式编程的功能，允许开发者以非阻塞的方式与Redis进行交互。Lettuce的设计旨在提供高性能和灵活性，适合各种规模的应用程序。

### 入门示例

想象一下，你正在开发一个在线购物平台，用户可以实时查看商品库存。使用Lettuce，你可以轻松实现这一功能。以下是一个简单的代码示例：

```java
import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;

public class InventoryChecker {
    public static void main(String[] args) {
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");
        StatefulRedisConnection<String, String> connection = redisClient.connect();
        RedisCommands<String, String> syncCommands = connection.sync();

        // 检查库存
        String stock = syncCommands.get("product:123:stock");
        System.out.println("当前库存: " + stock);

        connection.close();
        redisClient.shutdown();
    }
}
```

在这个示例中，我们通过Lettuce连接到Redis，获取特定商品的库存信息，简单而高效。

### lettuce 6.4.0.RELEASE版本更新了什么

Lettuce 6.4.0.RELEASE版本引入了一系列新特性和修复，包括实现了多个新的Redis命令如HPEXPIRE和HEXPIRE，标记dnsResolver为弃用，支持PUBSUB SHARDCHANNELS和SUNSUBSCRIBE等。此外，修复了一些bug，提升了整体稳定性和性能。

### 更新日志

## ⭐ 新特性
- 实现了`HPEXPIRE`、`HPEXPIREAT`、`HPEXPIRETIME`、`HTTL`和`HPTTL`。
- 实现了`HEXPIRE`、`HEXPIREAT`、`HEXPIRETIME`和`HPERSIST`。
- 标记dnsResolver为弃用。
- 实现了`PUBSUB SHARDCHANNELS`。
- 添加对`SUNSUBSCRIBE`和`SPUBLISH`的支持。
- 添加了一个接受脚本作为`String`的`evalReadOnly`重载。
- 支持从流中读取最后一条消息的`XREAD`。
- 以“火并忘”的方式发送`CLIENT SETINFO`命令。
- 添加对`CLIENT KILL [MAXAGE]`的支持。
- 支持带有`NOVALUES`参数的`HSCAN`。
- 解决了缺失键返回空列表的问题。

## 🐞 Bug修复
- 移除非只读命令。
- 处理NPE（空指针异常）。

## 💡 其他
- 修复了发布流程。
- 将下一个版本设置为6.4.x。
- 更新了多个Maven插件版本。
- 添加了发布草稿工作流。
- 每次运行Maven构建时应用代码格式化。
- 尝试稳定集成测试。
- 更新了GitHub问题模板。

### 总结

Lettuce 6.4.0.RELEASE版本通过引入新特性和修复bug，进一步提升了其性能和稳定性。新命令的实现和对现有功能的增强，使得开发者能够更高效地与Redis进行交互，简化了开发流程。