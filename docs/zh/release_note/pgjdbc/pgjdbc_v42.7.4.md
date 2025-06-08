# pgjdbc v42.7.4
### 为什么要使用pgjdbc

在当今数据驱动的世界中，选择合适的数据库连接工具至关重要。pgjdbc作为PostgreSQL的官方JDBC驱动，提供了高效、稳定的连接方式。然而，许多开发者在选择时却面临着一个矛盾：是选择一个功能强大的工具，还是选择一个易于使用的工具？pgjdbc恰好解决了这个矛盾，它不仅具备强大的功能，还提供了简洁的API，使得开发者能够快速上手，提升开发效率。

### pgjdbc是什么

pgjdbc是PostgreSQL数据库的Java数据库连接（JDBC）驱动程序。它允许Java应用程序通过标准的JDBC接口与PostgreSQL数据库进行交互，支持各种数据库操作，包括查询、更新和事务管理。

### 入门示例

假设你正在开发一个在线商店应用程序，需要从PostgreSQL数据库中获取产品信息。使用pgjdbc，你可以轻松地连接到数据库并执行查询：

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ProductFetcher {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/mydb";
        String user = "myuser";
        String password = "mypassword";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM products")) {

            while (rs.next()) {
                System.out.println("Product ID: " + rs.getInt("id"));
                System.out.println("Product Name: " + rs.getString("name"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

在这个示例中，pgjdbc使得连接数据库和执行查询变得简单明了，极大地提高了开发效率。

### pgjdbc v42.7.4版本更新了什么

pgjdbc v42.7.4版本进行了多项重要更新，包括修复了PgInterval对区间字符串大小写的忽略问题，改进了性能以避免在接收int4和int2时的额外复制，并更新了依赖项以支持PostgreSQL 15及以上版本。此外，文档也进行了更新，以更清晰地说明binaryTransfer和prepareThreshold的使用。

### 更新日志

## 更新日志

- 为42.7.4版本发布做准备。
- 修复：从internalExecuteBatch中移除preDescribe。
- Bug报告：PgInterval忽略表示区间字符串的大小写。
- 调整localhost和auth-test的顺序。
- 更新到17beta3版本。
- 性能优化：在PGStream中接收int4和int2时避免额外复制。
- 将“greater to”替换为“greater than”。
- 弃用所有9.1版本之前的PostgreSQL版本。
- 使用docker v2，改变docker-compose为docker compose。
- 文档：澄清binaryTransfer和prepareThreshold的使用。
- 清理依赖许可证，现已包含在原始JAR中。
- 更新SCRAM依赖到3.1并支持通道绑定。
- 更新use.md，修正拼写错误。
- 在ResultSet.getObject中添加对Infinity::numeric值的支持。
- 实现直接SSL ALPN连接。
- 确保getDouble结果的顺序。
- 将PostgreSQL 15、16和17beta1添加到CI测试中。
- 测试正负无穷大双精度值。
- 性能优化：用非同步的PgBufferedOutputStream替换BufferedOutputStream，允许配置不同的Java和SO_SNDBUF缓冲区大小。
- 修复SSL测试。
- 添加韩文翻译文件。
- 修复：支持preferQueryMode=simple中的bytea。
- 重构：合并PgPreparedStatement#setBinaryStream的int和long方法。
- 测试：在DatabaseMetaDataTest中创建连接时测试binaryMode=true和false。
- 修复所有源代码和文档中的拼写错误。
- 修复：为存储过程调用返回-1作为更新计数。
- 修复：TIME '24:00'的转换在二进制模式下中断。
- 移除自托管运行器。
- 通过解析字节而不是字符串加速getDate。
- 修复：支持PreparedStatement.setBlob(1, Blob)和PreparedStatement.setClob(1, Clob)对于返回-1的Lob。
- 修正jre7的下载。
- 文档：在README中添加cancelSignalTimeout。
- 文档：在README中记录READ_ONLY_MODE。
- 在PGStatement构造函数中验证resultsetParams，使用assertThrow。
- 验证resultset参数。
- 将版本提升至42.7.4。