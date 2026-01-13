# clickhouse-java Release v0.9.2
## 为什么要使用clickhouse-java

在数据驱动的时代，企业面临着一个尖锐的矛盾：数据量爆炸式增长，但处理速度却远远跟不上业务需求。传统的数据库解决方案在亿级数据面前显得力不从心，查询延迟从秒级到分钟级甚至更长，直接影响了决策的实时性和用户体验。而ClickHouse作为一款高性能的列式数据库，以其惊人的查询速度脱颖而出，成为大数据分析领域的明星。但如何让Java这一世界上最流行的编程语言与ClickHouse无缝对接，充分发挥其威力？这就是clickhouse-java要解决的核心问题——它不仅是简单的桥梁，更是释放ClickHouse真正潜力的钥匙。选择clickhouse-java，意味着选择在数据洪流中乘风破浪，而不是被淹没。

## clickhouse-java是什么

clickhouse-java是ClickHouse官方提供的Java客户端库。它允许Java应用程序通过JDBC驱动或原生客户端两种方式与ClickHouse数据库进行高效交互，执行数据查询、插入和管理操作。该库旨在为Java开发者提供一个强大、灵活且性能优化的工具，以便更好地利用ClickHouse处理海量数据。

## 入门示例

假设你正在开发一个电商大数据平台，需要实时分析用户行为日志。这些日志每天产生数十亿条记录，存储在ClickHouse中。使用clickhouse-java，你可以轻松地从Java应用中查询这些数据。

首先，通过Maven引入依赖：

```xml
<dependency>
    <groupId>com.clickhouse</groupId>
    <artifactId>clickhouse-jdbc</artifactId>
    <version>0.9.2</version>
</dependency>
```

然后，使用以下代码片段连接ClickHouse并执行查询：

```java
import java.sql.*;
import com.clickhouse.jdbc.ClickHouseDriver;

public class ClickHouseExample {
    public static void main(String[] args) {
        String url = "jdbc:ch://localhost:8123/ecommerce";
        String sql = "SELECT user_id, count() as page_views FROM user_clicks WHERE date = today() GROUP BY user_id ORDER BY page_views DESC LIMIT 10";

        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                System.out.println("User: " + rs.getLong("user_id") + ", Page Views: " + rs.getLong("page_views"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

这个示例展示了如何快速查询当日页面浏览量最高的前十用户，体现了clickhouse-java在实时数据分析场景下的高效与便捷。

## clickhouse-java Release v0.9.2版本更新了什么

v0.9.2版本引入了新的全依赖jar包，可能影响通过SLF4J等公共API的集成。JDBC v2的多个类被移至公共API，并新增了ResultSet和Connection的相关方法实现，如isBeforeFirst和createArray。此外，该版本增加了对预定义路径JSON列的支持，并修复了多项关键问题，包括嵌套数组读取、依赖项冲突和元数据返回格式等。

## 更新日志

### Important

新增了一个 artifact：[clickhouse-jdbc-0.9.2-all-dependencies.jar](https://github.com/ClickHouse/clickhouse-java/releases/download/v0.9.2/clickhouse-jdbc-0.9.2-all-dependencies.jar)。该版本包含了所有依赖项，甚至包含了如 SLF4J 这样的公共 API。在需要通过此类接口与应用程序集成时，可能会引发问题。

### Improvements

- [jdbc-v2] 将 `com.clickhouse.jdbc.ClientInfoProperties` 和 `com.clickhouse.jdbc.DriverProperties` 类移至公共 API。
- [jdbc-v2] 为 `ResultSet` 和 `ResultSetMetaData` 实现了 `isBeforeFirst`、`isAfterLast`、`isFirst`、`isLast` 方法。同时提升了 `ResultSetImpl` 的测试覆盖率。
- [jdbc-v2] 为 `Connection` 接口实现了 `createArray` 和 `createStruct` 方法。`createStruct` 方法应用于创建 `Tuple` 值，`createArray` 方法则用于创建各种数组。
- [jdbc-v2] 实现了 `Connection` 接口的 `setNetworkTimeout` 方法，用于在网络操作失败时快速失败，解决与陈旧连接相关的问题。
- [client-v2] 新增了对带有预定义路径的 JSON 的支持。之前不支持像 `JSON(a String, b.c Int32)` 这样的列定义。

### Bug Fixes

- [jdbc-v2] 修复了使用 `Connection` 接口的 `createArray` 方法创建元组数组时的问题。
- [jdbc-v2] 修复了读取嵌套数组时的问题。
- [jdbc-v2] 修复了未遮蔽的 antlr4-runtime 依赖项问题，这可能对 Apache Spark 用户造成潜在影响。
- [jdbc-v2] 修复了解析预处理语句中的 CTE（通用表表达式）时的问题。
- [jdbc-v2] 修复了解析包含视图参数的 SQL 时的问题。
- [jdbc-v2] 修复了 `InsertSettings` 的问题：当两个并发插入操作共享同一个设置对象时，可能会插入错误的列或插入到错误的表中。
- [jdbc-v2] 修复了批处理插入在执行后未被清除的问题。现在即使在失败后，批处理也会在执行后被清除。
- [jdbc-v2] 修复了 `DatabaseMetadataImpl`，使其返回符合规范定义结构的结果集，解决了许多依赖元数据的数据库工具的问题。
- [jdbc-v2] 修复了 `DatabaseMetadataImpl`，使其在适当情况下返回空结果集。
- [jdbc-v2] 修复了详细日志记录的问题。
- [client-v2] 修复了读取带有预定义路径的 JSON 时的问题。

## 总结

第五小节的更新日志详细记录了 v0.9.2 版本的多项重要改进和问题修复，涵盖了公共API的扩展、新方法的实现、功能增强以及诸多稳定性提升，显著优化了开发体验与系统集成可靠性。