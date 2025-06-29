# pgjdbc v42.7.5
### 为什么要使用pgjdbc

在现代应用程序开发中，数据库的选择至关重要。PostgreSQL以其强大的功能和灵活性而闻名，但如何高效地与之交互却常常成为开发者的难题。此时，pgjdbc作为PostgreSQL的Java数据库连接器，便成为了一个不可或缺的工具。它不仅提供了高效的数据库访问，还能帮助开发者在复杂的业务逻辑中保持代码的简洁与可维护性。然而，随着技术的不断演进，pgjdbc也面临着如何适应新需求和解决旧问题的挑战。使用pgjdbc，开发者能够在享受PostgreSQL强大功能的同时，轻松应对这些挑战。

### pgjdbc是什么

pgjdbc是PostgreSQL的Java数据库连接器，它允许Java应用程序与PostgreSQL数据库进行交互。通过pgjdbc，开发者可以执行SQL查询、更新数据库记录，并处理结果集。它为Java开发者提供了一种简单而高效的方式来利用PostgreSQL的强大功能。

### 入门示例

想象一下，你正在开发一个在线购物平台，用户可以浏览商品并下单。为了实现这一功能，你需要将商品信息存储在PostgreSQL数据库中，并通过Java应用程序进行访问。使用pgjdbc，你可以轻松地连接到数据库并执行查询。例如：

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ShoppingApp {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/mydatabase";
        String user = "myuser";
        String password = "mypassword";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM products")) {

            while (rs.next()) {
                System.out.println("Product: " + rs.getString("name") + ", Price: " + rs.getDouble("price"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

在这个示例中，pgjdbc使得连接数据库和执行查询变得简单明了，帮助你快速实现在线购物平台的核心功能。

### pgjdbc v42.7.5版本更新了什么

pgjdbc v42.7.5版本进行了多项重要更新，包括更新了变更日志和Gradle属性文件以支持新版本发布，修复了PgDatabaseMetaData实现中的参数和返回值问题，支持Java Postgres客户端的默认GSS凭据，修复了XAResource.recover方法中的事务访问问题，并增强了元查询性能。

### 更新日志

## 变更
- 更新变更日志并在gradle.properties中增加版本以支持发布。
- 回退了之前的一个更改。
- 修复了PgDatabaseMetaData实现中的catalog参数和返回值。
- 支持Java Postgres客户端的默认GSS凭据。
- 修复了XAResource.recover方法中仅返回当前用户可访问的事务。
- 不再强制为PostgreSQL >= 12发送extra_float_digits。
- 从主键列表中排除“include columns”。
- 通过指定oid增强元查询性能。
- 支持getObject(int, byte[].class)用于bytea类型。
- 文档更新，增加了对无穷大值的说明及其他小修改。
- 增加检查主要服务器版本的方法，修复了对RULE的检查。
- 修复了getSchemas()方法。
- 更新了rpm postgresql-jdbc.spec.tpl以支持scram-client。
- 在ResultSet的close()方法中清除thisRow和rowBuffer。
- 将包重命名为maven-bundle-plugin。
- 从版本18开始，移除了RULE权限。
- 修复了使用缓冲输入流创建GSSInputStream的问题。
- 移除了8.4和9.0的pg版本，使用>=jdk版本17。
- 更改了docker-compose版本，并重命名了说明中的脚本文件以匹配实际文件名。
- 不再假设DatabaseMetaDataTransactionIsolationTest中的“test”数据库。
- 尝试对依赖项进行分类。

## 依赖项
- 更新了多个依赖项和插件，确保项目的最新性和稳定性。

### 总结

pgjdbc v42.7.5版本的更新记录展示了开发团队在提升性能、修复问题和增强功能方面的持续努力。这些改进不仅提升了pgjdbc的稳定性和可用性，也为开发者提供了更强大的工具，以便更高效地与PostgreSQL数据库进行交互。