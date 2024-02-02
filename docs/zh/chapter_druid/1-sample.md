
# 1-从一个Demo出发
## 1.1 简介
这里主要是通过一个数据库连接池的例子来看下优秀的数据库连接池Druid的实现原理：
如果是想要了解如何使用可以查阅下官方的wiki即可，这里主要是对源码执行的过程和相关设计原理的分析，方便在使用本数据库连接池时遇到问题可以及时诊断与优化。

## 1.2 代码获取
克隆代码：

```bash
git clone git@github.com:alibaba/druid.git
```
切换分支：

```bash
git checkout 1.2.11
```

获取到的代码如下图：
![1-druid-github.png](/img/chapter_druid/1-druid-github.png)

1.2.8的tag最后版本被改为了1.2.9_preview_01 ，这个代码管理稍微不规范了些，不过不影响我们分析


## 1.3 Demo编写
### 1.3.1 创建数据库与表
为了方便测试我们创建一个druid数据库来进行测试

```sql
CREATE DATABASE `druid` CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin'

CREATE TABLE `t_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `druid`.`t_users`(`id`, `name`) VALUES (1, 'zhangsan');
INSERT INTO `druid`.`t_users`(`id`, `name`) VALUES (2, 'lisi');
```

### 1.3.2 引入依赖
新建maven项目，引入依赖
然后导入如下Druid依赖，下面我们以1.2.8分支的对应的代码

```xml
    <dependencies>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.2.11</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.29</version>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-log4j12</artifactId>
            <version>1.7.25</version>
        </dependency>
    </dependencies>
```

### 1.3.3引入日志
log4j.properties

```java
###set log levels###
log4j.rootLogger=info, stdout
###output to the console###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=[%d{dd/MM/yy HH:mm:ss:SSS z}] %t %5p %c{2}: %m%n

```

### 1.3.4 测试类
新建Demo类用于测试如下所示：


```java
package link.elastic.druid;

import com.alibaba.druid.pool.DruidDataSource;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DruidDemo {

    public static void main(String[] args) throws SQLException {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/druid?allowMultiQueries=true");
        dataSource.setUsername("root");
        dataSource.setPassword("123456");
        dataSource.setFilters("log4j");
        dataSource.setValidationQuery("SELECT 1");
        dataSource.setTestOnBorrow(true);
        dataSource.setTestWhileIdle(true);

        Connection connection = dataSource.getConnection();

        Statement stmt = connection.createStatement();
        stmt.execute("select * from t_users");

        ResultSet rs = stmt.getResultSet();

        rs.close();
        stmt.close();
        connection.close();
    }
}


```

先这样吧可以运行测试后面详细说每个细节


 