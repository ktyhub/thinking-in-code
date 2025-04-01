# clickhouse-java Release v0.8.1
### 为什么要使用clickhouse-java

在数据驱动的时代，选择合适的数据库连接工具至关重要。ClickHouse作为一款高性能的列式数据库，能够处理海量数据并提供快速查询。然而，许多开发者在使用ClickHouse时却面临着复杂的连接和操作问题。此时，clickhouse-java应运而生，成为解决这些矛盾的利器。它不仅简化了与ClickHouse的交互，还提升了开发效率，让开发者能够专注于业务逻辑，而不是繁琐的数据库操作。

### clickhouse-java是什么

clickhouse-java是一个用于Java的ClickHouse客户端库，旨在提供高效、简单的方式与ClickHouse数据库进行交互。它支持多种数据类型和操作，使得开发者能够轻松地执行查询、插入和数据管理任务。通过这个库，Java开发者可以充分利用ClickHouse的强大功能，快速构建高性能的数据应用。

### 入门示例

想象一下，你是一家电商公司的开发者，负责分析用户行为数据。你需要从ClickHouse中提取用户的购买记录并进行分析。使用clickhouse-java，你可以轻松地连接到ClickHouse并执行查询。以下是一个简单的示例代码：

```java
import com.clickhouse.client.ClickHouseClient;
import com.clickhouse.client.ClickHouseResponse;
import com.clickhouse.client.ClickHouseStatement;

public class ClickHouseExample {
    public static void main(String[] args) {
        try (ClickHouseClient client = ClickHouseClient.newInstance("http://localhost:8123")) {
            ClickHouseStatement statement = client.createStatement();
            ClickHouseResponse response = statement.query("SELECT * FROM purchases WHERE user_id = 123").execute();
            response.forEach(row -> System.out.println(row));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

通过这段代码，你可以快速获取特定用户的购买记录，进而进行深入分析。

### clickhouse-java Release v0.8.1版本更新了什么

在v0.8.1版本中，clickhouse-java引入了对RowBinary格式的变体数据类型、动态数据类型和JSON数据类型的支持，增强了POJO的序列化和反序列化功能。此外，新增了对ZonedDateTime的支持，并为Apache HTTP客户端连接池添加了micrometer指标功能。多个bug也得到了修复，提升了整体稳定性和兼容性。

### 更新日志

## 新特性
- [client-v2] - 为RowBinary格式添加了对变体数据类型的支持。可以读取为POJO或使用读取器。写入仅支持POJO。
- [client-v2] - 为RowBinary格式添加了对动态数据类型的支持。可以读取为POJO或使用读取器。写入仅支持POJO。
- [client-v2] - 为RowBinary格式添加了对JSON数据类型的支持。可以读取为POJO或使用读取器。写入仅支持POJO。
- [client-v2] - 在POJO序列化和反序列化中添加了对ZonedDateTime的支持。
- [client-v2] - 为Apache HTTP客户端连接池添加了micrometer指标支持。现在可以通过调用`com.clickhouse.client.api.Client.Builder.registerClientMetrics(registry, groupName)`获取在micrometer注册的指标。

## Bug修复
- [client-v2] - 修复了`getTableSchema(tableName, databaseName)`，现在不再忽略数据库名称。
- [client-v2] - 修复了`returnGeneratedValues`以避免抛出异常。请注意，ClickHouse不支持在`INSERT`语句的响应中返回任何内容。此更改旨在使客户端与某些框架兼容。
- [jdbc-v2] - 修复了通过`USE`语句更改数据库的问题。
- [jdbc-v2] - 修复了`ResultSetMetadata.getColumnClassName()`以返回null而不是抛出异常。此更改仅用于允许某些框架与客户端一起使用。
- [jdbc-v2] - 修复了在JDBC v2中使用`WITH`语句时导致的NPE问题。
- [repo] - 修复了在Windows中尝试定位包含保留字符的文件路径时失败的测试。

### 总结

在v0.8.1版本中，clickhouse-java不仅增加了对多种数据类型的支持，还修复了多个关键bug，提升了库的稳定性和兼容性。这些更新使得开发者在使用ClickHouse时更加得心应手，能够更高效地进行数据操作。