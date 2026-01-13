# lettuce 7.1.0.RELEASE
### 为什么要使用Lettuce

想象一下这个场景：深夜，你的服务器监控仪表盘突然飙红，每秒数万次的Redis操作让连接池不堪重负，线程在无尽的等待和超时中挣扎。隔壁团队的“性能狂人”又在鼓吹他基于最新异步框架手写的客户端，代码复杂得像一座迷宫，而你的“稳定至上”派系则死死守着那个老旧的、同步阻塞的驱动，虽然缓慢，但至少不会半夜宕机。

这，就是许多开发者在选择Redis Java客户端时面临的经典矛盾：**在极致性能与可靠稳定之间，你是否必须二选一？**

答案是否定的。这就是你该选择Lettuce的时刻。它并非又一个激进的实验品，也不是一个笨重的老古董。Lettuce是一位清醒的颠覆者，它用纯异步、非阻塞的Netty内核，为你带来风暴般的吞吐量，却将复杂的线程管理与连接池烦恼一并抹去。它支持从Redis 2.6到8.x的全栈协议，让你在拥抱Redis最新功能（如Redis Streams、集群、哨兵）时毫无后顾之忧。更重要的是，它的API既富有表达力又直观，将你从繁琐的底层通信中解放出来，专注于业务逻辑本身。

选择Lettuce，意味着你拒绝在性能与稳定之间妥协。你选择了一条更优雅的道路：在风暴中心，享受宁静。

### Lettuce是什么

简而言之，Lettuce是一个**高级的、可扩展的Redis Java客户端**。

它构建于Netty之上，天生支持异步、非阻塞通信，同时提供了同步、异步和响应式（Reactive）API。它就像一把为Redis量身定制的瑞士军刀，支持集群、哨兵、管道、发布订阅、事务、数据序列化等所有核心与高级功能，让你能够以高效、可靠的方式与Redis进行交互。

### 入门示例

让我们置身于一个真实的场景：一个正在经历“秒杀”活动的电商平台。瞬时涌入的海量请求需要快速缓存商品库存，并确保扣减的准确性。

**1. 添加依赖（以Maven为例）**
```xml
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>7.1.0.RELEASE</version>
</dependency>
```

**2. 连接Redis并执行操作**
```java
import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;

public class SeckillService {
    public static void main(String[] args) {
        // 1. 创建RedisClient。这里连接单机Redis，也支持 RedisURI 构建集群或哨兵连接。
        RedisClient client = RedisClient.create("redis://localhost:6379/0");
        
        // 2. 获取一个线程安全的连接
        StatefulRedisConnection<String, String> connection = client.connect();
        
        // 3. 获取同步命令接口。你也可以获取 .async() 或 .reactive() 接口。
        RedisCommands<String, String> commands = connection.sync();
        
        // 模拟秒杀：设置商品库存，并使用原子操作扣减
        String productKey = "seckill:stock:product_1001";
        
        // 初始化库存
        commands.set(productKey, "1000");
        
        // 用户抢购时，使用 DECR 原子扣减库存
        Long remainingStock = commands.decr(productKey);
        
        if (remainingStock >= 0) {
            System.out.println("抢购成功！剩余库存：" + remainingStock);
            // ... 后续订单处理逻辑
        } else {
            // 库存已扣为负数，说明已售罄，需要回滚刚才的扣减
            commands.incr(productKey);
            System.out.println("抢购失败，商品已售罄。");
        }
        
        // 4. 关闭连接和客户端
        connection.close();
        client.shutdown();
    }
}
```
这个示例展示了Lettuce的核心使用模式：创建客户端 -> 获取连接 -> 执行命令。在秒杀的高并发压力下，Lettuce的异步非阻塞特性可以更高效地处理网络I/O，而其丰富的原子命令（如`DECR`）是保证数据一致性的关键。

### Lettuce 7.1.0.RELEASE版本更新了什么

Lettuce 7.1.0 主要围绕支持即将发布的 Redis 8.4 新特性进行更新。它新增了对 `XREADGROUP` 命令中 `CLAIM` 参数的支持，便于更好地处理Pending状态的流消息。同时，引入了 `MSETEX` 命令，用于原子性地设置多个键值对并指定过期时间。此外，还通过扩展 `DIGEST`、`DELEX` 和 `SET` 命令，实现了字符串键的原子比较并设置（CAS）与比较并删除（CAD）操作。本次更新也正式将 Redis 8.4 加入测试矩阵并设为默认版本，并修复了若干Bug。

### 更新日志

Lettuce 团队很高兴地宣布 Lettuce 7.1.0 小版本发布！

此版本提供了对即将成为 Redis 8.4 版本一部分的新功能的支持，例如在 `XREADGROUP` 命令中使用 `CLAIM` 参数；使用 `MSETEX` 原子地设置多个字符串键并更新其过期时间，以及通过扩展 `DIGEST`、`DELEX` 和 `SET` 命令对字符串键进行原子的比较并设置（CAS）和比较并删除（CAD）操作。

Lettuce 7.1.0 支持从 Redis 2.6+ 到 Redis 8.x 的版本。在 Java 运行环境方面，Lettuce 至少需要 Java 8，并兼容 Java 24。该驱动已在 Redis 8.4、8.2、8.0、7.4 和 7.2 版本上通过测试。

完整的更新日志请见本文档末尾。

感谢所有使 Lettuce 7.1.0.RELEASE 成为可能的贡献者。

**📗 链接**
*   参考文档：<https://lettuce.io/core/7.1.0.RELEASE/reference/>
*   Javadoc：<https://lettuce.io/core/7.1.0.RELEASE/api/>

**⭐ 新功能**

*   添加对 XREADGROUP CLAIM 参数的支持
*   添加对 CAS/CAD（比较并设置/比较并删除）的支持
*   实现 msetex 命令

**🐞 Bug 修复**

*   在解析 SearchReplies 时保留空值
*   将官方 Redis 8.4 添加到测试矩阵并设其为默认版本
*   修复 io_uring 类名
*   减少设置跟踪标签所消耗的 CPU 周期

**💡 其他**

*   无

**❤️ 新贡献