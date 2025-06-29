# clickhouse-java Release v0.6.5
### 为什么要使用clickhouse-java

在数据驱动的时代，选择合适的工具至关重要。ClickHouse以其卓越的性能和高效的数据处理能力而闻名，但如何将这种强大能力融入Java应用程序中呢？这正是clickhouse-java的价值所在。它不仅提供了与ClickHouse的无缝连接，还能在高并发环境下保持稳定性。然而，许多开发者在选择数据库连接工具时常常面临选择的困惑：是追求性能，还是兼顾易用性？clickhouse-java恰好解决了这一矛盾，让你在享受高效性能的同时，也能轻松上手。

### clickhouse-java是什么

clickhouse-java是一个Java客户端库，旨在为开发者提供与ClickHouse数据库的高效连接和操作。它支持异步查询、流式数据处理和多种数据类型，帮助开发者轻松实现高性能的数据存取。

### 入门示例

想象一下，你正在开发一个实时数据分析平台，用户需要快速查询海量数据。使用clickhouse-java，你可以轻松实现这一目标。以下是一个简单的示例：

```java
import com.clickhouse.client.ClickHouseClient;
import com.clickhouse.client.ClickHouseResponse;
import com.clickhouse.client.ClickHouseStatement;

public class ClickHouseExample {
    public static void main(String[] args) {
        try (ClickHouseClient client = ClickHouseClient.newInstance("http://localhost:8123")) {
            ClickHouseStatement statement = client.createStatement();
            ClickHouseResponse response = statement.query("SELECT * FROM my_table").execute();
            response.forEach(row -> System.out.println(row));
        }
    }
}
```

在这个示例中，你只需几行代码即可连接到ClickHouse并执行查询，极大地简化了数据处理流程。

### clickhouse-java Release v0.6.5版本更新了什么

在v0.6.5版本中，clickhouse-java进行了多项重要更新，包括：弃用clickhouse-cli-client和clickhouse-grpc-client组件，优化了queryAll()方法以减少内存使用，新增了Client.Builder#setClientNetworkBufferSize方法以提升性能，并修复了多个bug，确保更稳定的使用体验。

### 更新日志

## 弃用
- 以下组件将在0.7.0版本中弃用并移除：
  - clickhouse-cli-client
  - clickhouse-grpc-client
- 项目cli-client和grpc-client不再包含在发布和构建中。
- 不再为非LTS Java版本构建，Java 9的发布构建将不再提供。

## 性能改进
- [client-v2] 优化了queryAll()方法以减少内存使用。
- [client-v2] 新增Client.Builder#setClientNetworkBufferSize方法，允许增加用于从套接字缓冲区传输数据到应用内存的缓冲区大小，显著减少系统调用次数，提高性能。

## 新特性
- [client-v2] 当使用Apache HTTP客户端时，客户端将在NoHttpResponseException时重试，避免因连接池中的关闭或过期连接导致的失败。

## Bug修复
- [client-v2] 修正了读取DateTime值时使用的时区，影响session_timezone的使用。
- [client-v2] 修复了读取大整数时导致的错误值。
- [client-v2] 修复了在并发使用客户端实例时的服务器压缩问题。
- [client-v2] 修复了将数组作为列表读取的问题，也影响了嵌套数组的读取。
- [client-v1] 修复了写操作的摘要元数据处理，之前导致元数据为空。

### 总结

在v0.6.5版本中，clickhouse-java不仅进行了组件的弃用和性能优化，还引入了新的特性和多项bug修复，进一步提升了用户体验和稳定性。

### 爆款标题

- "点击即用：clickhouse-java v0.6.5版本带来的性能革命！"
- "告别旧版！clickhouse-java v0.6.5更新，助你轻松连接ClickHouse！"
- "重磅发布：clickhouse-java v0.6.5优化与新特性全解析！"
- "从此告别bug！clickhouse-java v0.6.5版本更新带来的稳定性提升！"
- "提升你的数据处理能力：clickhouse-java v0.6.5版本新特性揭秘！"