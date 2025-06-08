# clickhouse-java Release v0.7.0
### 为什么要使用clickhouse-java

在大数据时代，数据的处理速度和效率成为了企业竞争的关键。然而，许多开发者在选择数据库时面临着一个矛盾：传统的关系型数据库虽然稳定，但在处理海量数据时却显得力不从心；而新兴的NoSQL数据库虽然灵活，却常常缺乏强大的查询能力。此时，clickhouse-java应运而生，作为一个高性能的列式数据库驱动，它不仅能快速处理大规模数据，还能提供SQL查询的便利，帮助开发者在复杂的数据环境中游刃有余。

### clickhouse-java是什么

clickhouse-java是一个用于与ClickHouse数据库进行交互的Java客户端库。它提供了高效的API，支持各种数据操作，旨在帮助开发者轻松地在Java应用程序中集成和使用ClickHouse。

### 入门示例

想象一下，你是一家电商公司的数据分析师，每天需要处理成千上万的用户行为数据。使用clickhouse-java，你可以轻松地将这些数据存储到ClickHouse中，并通过简单的SQL查询快速获取用户行为分析结果。以下是一个简单的代码示例：

```java
import com.clickhouse.client.ClickHouseClient;
import com.clickhouse.client.ClickHouseResponse;
import com.clickhouse.client.ClickHouseStatement;

public class Example {
    public static void main(String[] args) {
        try (ClickHouseClient client = ClickHouseClient.newInstance("http://localhost:8123")) {
            ClickHouseStatement statement = client.createStatement("SELECT * FROM user_actions");
            ClickHouseResponse response = statement.execute();
            response.forEach(row -> System.out.println(row));
        }
    }
}
```

### clickhouse-java Release v0.7.0版本更新了什么

在v0.7.0版本中，clickhouse-java移除了过时的组件，默认使用新的传输层实现，并新增了设置自定义HTTP头和服务器设置的功能。此外，支持写入AggregateFunction值，并优化了连接创建和数据读取性能，显著提升了整体效率。

### 更新日志

## 弃用
- 移除了以下过时组件：
  - clickhouse-cli-client
  - clickhouse-grpc-client

## 重要变更
- 默认使用新的传输层实现，仍可通过设置`com.clickhouse.client.api.Client.Builder#useNewImplementation`为`false`切换回旧实现。

## 新特性
- [client-v2] 现在可以轻松设置全局和每个操作的自定义HTTP头。
- [client-v2] 现在可以为客户端和每个操作设置任何服务器设置。
- [client-v2] 新增对AggregateFunction值（位图序列化）的写入支持，读取将在下一个版本中添加。
- [r2dbc] 延迟连接创建，允许在每次订阅时创建新实例。

## 性能改进
- [client-v2] 改进了固定长度数据的读取，支持使用预分配的缓冲区以减少内存分配。
- [client-v2] 新增API方法直接将数据读取到POJO，优化性能。
- [client-v2] 优化了列的读取，避免了不必要的内部对象创建。

## 文档
- [client-v2] 为Kotlin添加了示例。
- [doc] 官方ClickHouse网站的主要文档已更新，每个客户端都有详细信息页面。

## Bug修复
- [client-v2] 修复了缺少操作指标导致的NPE问题。
- [client-v2] 修复了BinaryFormat读取器处理空结果的问题。
- [jdbc] 修复了'artifact 'clickhouse-jdbc-{version}-all.jar'的内容，确保包含所有必需的类。
- [client-v1, jdbc] 修复了端点定义解析，以正确处理属性。

### 总结

此次更新记录展示了clickhouse-java在功能、性能和文档方面的显著改进，特别是对新特性的支持和Bug修复，进一步提升了开发者的使用体验。

### 爆款标题提取

- "clickhouse-java v0.7.0：全新传输层与自定义HTTP头的强大组合！"
- "重磅更新！clickhouse-java v0.7.0提升性能与功能，助力大数据处理！"
- "告别过时组件！clickhouse-java v0.7.0带来全新体验！"
- "clickhouse-java v0.7.0：优化数据读取与连接创建，性能大幅提升！"
- "探索clickhouse-java v0.7.0：新特性与Bug修复，开发者必看！"