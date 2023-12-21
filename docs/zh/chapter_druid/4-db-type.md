# 4-DruidDataSource初始化时的神操作之自动解析DbType与驱动类
## 4.1 简介
前面那个博客《3-Connection连接数据库之前的初始化操作》我们简单介绍了连接时候的初始化操作，其中有两个地方调用了JdbcUtils 来通过配置的jdbc url来自动解析数据库类型和驱动的代码，这里将会简单介绍下，方便我们了解Druid支持的数据库操作，如果在开发工作中有手动配置数据源和数据库类型的地方可以参考这两个方法实现，也可以直接把代码拷贝过去：
![在这里插入图片描述](https://img-blog.csdnimg.cn/bfbdd6d75adf48e2b86a0fa4475643dd.png)

JdbcUtils中自动解析的代码并不是特别复杂的逻辑，这里介绍一下主要方便我们了解下Druid支持的底层数据库类型，以MySQL这个Demo为例 ，这里我们传递的jdbcUrl参数如下：

```java
jdbc:mysql://localhost:3306/druid?allowMultiQueries=true
```

## 4.3 自动解析数据库类型
下面这段代码如果让查看这个博客的同学来写的话可能写的更优雅，不过我们不讨论代码写的好坏，主要来增长下见识，说实话下面很多数据库类型我都是第一次见。

JdbcUtils工具类中的通过jdbcUrl解析驱动类型的代码如下：

```java
public static String getDriverClassName(String rawUrl) throws SQLException {
        if (rawUrl == null) {
            return null;
        }
        //完全用java编写的数据库，Derby是一个Open source的产品，基于Apache License 2.0分发。Apache Derby非常小巧，核心部分derby.jar只有2M，所以既可以做为单独的数据库服务器使用，也可以内嵌在应用程序中使用
        if (rawUrl.startsWith("jdbc:derby:")) {
            return "org.apache.derby.jdbc.EmbeddedDriver";
        } else if (rawUrl.startsWith("jdbc:mysql:")) {
        //MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。
          //mysql 高版本的驱动类型和低版本的驱动类型不太一样 带cj的是版本6的驱动包 这两个驱动包之间的差别可以自行百度
            if (mysql_driver_version_6 == null) {
                mysql_driver_version_6 = Utils.loadClass("com.mysql.cj.jdbc.Driver") != null;
            }

            if (mysql_driver_version_6) {
                return MYSQL_DRIVER_6;
            } else {
                return MYSQL_DRIVER;
            }
        } else if (rawUrl.startsWith("jdbc:log4jdbc:")) {
        //log4jdbc 是一个 JDBC 驱动器，能够记录 SQL 日志和 SQL 执行时间等信息。log4jdbc 使用 SLF4J（Simple Logging Facade）作为日志系统
            return LOG4JDBC_DRIVER;
        } else if (rawUrl.startsWith("jdbc:mariadb:")) {
        //MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可 MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。
            return MARIADB_DRIVER;
        } else if (rawUrl.startsWith("jdbc:oracle:") //
                   || rawUrl.startsWith("JDBC:oracle:")) {
                   //Oracle公司（甲骨文）是全球最大的信息管理软件及服务供应商，成立于1977年，总部位于美国加州Redwood shore，面向全球开放oracle认证。Oracle开发的关系数据库产品因性能卓越而闻名，Oracle数据库产品为财富排行榜上的前1000家公司所采用，许多大型网站也选用了Oracle系统，是世界最好的数据库产品。此外，Oracle公司还开发其他应用程序和软件。同时，Oracle在英语里还是“神谕”的意思，意为“替神说话的”，寓指Oracle公司的发展目标和决心地位
            return ORACLE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:alibaba:oracle:")) {
            return ALI_ORACLE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:oceanbase:")) {
        //OceanBase是由蚂蚁集团完全自主研发的国产原生分布式数据库 [38]  ，始创于2010年。创新推出“三地五中心”城市级容灾新标准 [33]  ，是一个在TPC-C和TPC-H测试上都刷新了世界纪录的国产原生分布式数据库。 [34]  产品采用自研的一体化架构，兼顾分布式架构的扩展性与集中式架构的性能优势，用一套引擎同时支持TP和AP的混合负载， [38]  具有数据强一致、高可用、高性能、在线扩展、高度兼容SQL标准和主流关系数据库、低成本等特点。
            return OCEANBASE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:microsoft:")) {
            return "com.microsoft.jdbc.sqlserver.SQLServerDriver";
        } else if (rawUrl.startsWith("jdbc:sqlserver:")) {
            return "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        } else if (rawUrl.startsWith("jdbc:sybase:Tds:")) {
            return "com.sybase.jdbc2.jdbc.SybDriver";
        } else if (rawUrl.startsWith("jdbc:jtds:")) {
            return "net.sourceforge.jtds.jdbc.Driver";
        } else if (rawUrl.startsWith("jdbc:fake:") || rawUrl.startsWith("jdbc:mock:")) {
            return "com.alibaba.druid.mock.MockDriver";
        } else if (rawUrl.startsWith("jdbc:postgresql:")) {
            return POSTGRESQL_DRIVER;
        } else if (rawUrl.startsWith("jdbc:edb:")) {
            return ENTERPRISEDB_DRIVER;
        } else if (rawUrl.startsWith("jdbc:odps:")) {
            return ODPS_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hsqldb:")) {
            return "org.hsqldb.jdbcDriver";
        } else if (rawUrl.startsWith("jdbc:db2:")) {
            // Resolve the DB2 driver from JDBC URL
            // Type2 COM.ibm.db2.jdbc.app.DB2Driver, url = jdbc:db2:databasename
            // Type3 COM.ibm.db2.jdbc.net.DB2Driver, url = jdbc:db2:ServerIP:6789:databasename
            // Type4 8.1+ com.ibm.db2.jcc.DB2Driver, url = jdbc:db2://ServerIP:50000/databasename
            String prefix = "jdbc:db2:";
            if (rawUrl.startsWith(prefix + "//")) { // Type4
                return DB2_DRIVER; // "com.ibm.db2.jcc.DB2Driver";
            } else {
                String suffix = rawUrl.substring(prefix.length());
                if (suffix.indexOf(':') > 0) { // Type3
                    return DB2_DRIVER3; // COM.ibm.db2.jdbc.net.DB2Driver
                } else { // Type2
                    return DB2_DRIVER2; // COM.ibm.db2.jdbc.app.DB2Driver
                }
            }
        } else if (rawUrl.startsWith("jdbc:sqlite:")) {
        //SQLite，是一款轻型的数据库，是遵守ACID的关系型数据库管理系统，它包含在一个相对小的C库中。它是D.RichardHipp建立的公有领域项目。它的设计目标是嵌入式的
            return SQLITE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:ingres:")) {
        //Ingres 是比较早的数据库系统，开始于加利福尼亚大学柏克莱分校的一个研究项目，该项目开始于 70 年代早期，在 80 年代早期结束。像柏克莱大学的其他研究项目一样，它的代码使用BSD许可证。从 80 年代中期，在Ingres 基础上产生了很多商业数据库软件，包括 Sybase、Microsoft SQL Server、NonStop SQL、Informix 和许多其他的系统。
            return "com.ingres.jdbc.IngresDriver";
        } else if (rawUrl.startsWith("jdbc:h2:")) {
        //H2是一个Java编写的关系型数据库，它可以被嵌入Java应用程序中使用，或者作为一个单独的数据库服务器运行。
            return H2_DRIVER;
        } else if (rawUrl.startsWith("jdbc:mckoi:")) {
        //Mckoi SQL Database 是一个为客户机/服务器架构下的数据库服务器软件，支持多个客户端。可以用来嵌入到 Java应用程序中提供独立的数据库服务功能。
            return "com.mckoi.JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:cloudscape:")) {
        //cloudscape是derby数据库的商业版本，以 Java 类库形式提供的、轻量级的、可嵌入的关系引擎。
            return "COM.cloudscape.core.JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:informix-sqli:")) {
            return "com.informix.jdbc.IfxDriver";
        } else if (rawUrl.startsWith("jdbc:timesten:")) {
        //Oracle内存数据库 TimesTen 是一个优化内存的关系数据库，提供了响应时间极短且吞吐量极高的应用程序，可满足各行业应用程序的需求，特别是拥有实时业务的企业（例如，资本市场）的需求。
            return "com.timesten.jdbc.TimesTenDriver";
        } else if (rawUrl.startsWith("jdbc:as400:")) {
            return "com.ibm.as400.access.AS400JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:sapdb:")) {
        //APMaxDB数据库（SAPDB）是一个由SAPAG开发并支持的兼容关系型企业数据库系统。SAP MaxDB数据库监控被设计用来帮助数据库管理员调优其SAPMaxDB，确保生产数据库的可用性和性能，以及收集操作系统级数据，从基础结构和应用程序到最终用户体验
            return "com.sap.dbtech.jdbc.DriverSapDB";
        } else if (rawUrl.startsWith("jdbc:JSQLConnect:")) {
            return "com.jnetdirect.jsql.JSQLDriver";
        } else if (rawUrl.startsWith("jdbc:JTurbo:")) {
            return "com.newatlanta.jturbo.driver.Driver";
        } else if (rawUrl.startsWith("jdbc:firebirdsql:")) {
            return "org.firebirdsql.jdbc.FBDriver";
        } else if (rawUrl.startsWith("jdbc:interbase:")) {
            return "interbase.interclient.Driver";
        } else if (rawUrl.startsWith("jdbc:pointbase:")) {
            return "com.pointbase.jdbc.jdbcUniversalDriver";
        } else if (rawUrl.startsWith("jdbc:edbc:")) {
            return "ca.edbc.jdbc.EdbcDriver";
        } else if (rawUrl.startsWith("jdbc:mimer:multi1:")) {
            return "com.mimer.jdbc.Driver";
        } else if (rawUrl.startsWith("jdbc:dm:")) {
            return JdbcConstants.DM_DRIVER;
        } else if (rawUrl.startsWith("jdbc:kingbase:")) {
            return JdbcConstants.KINGBASE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:kingbase8:")) {
            return JdbcConstants.KINGBASE8_DRIVER;
        } else if (rawUrl.startsWith("jdbc:gbase:")) {
            return JdbcConstants.GBASE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:xugu:")) {
            return JdbcConstants.XUGU_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hive:")) {
            return JdbcConstants.HIVE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hive2:")) {
            return JdbcConstants.HIVE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:phoenix:thin:")) {
            return "org.apache.phoenix.queryserver.client.Driver";
        } else if (rawUrl.startsWith("jdbc:phoenix://")) {
            return JdbcConstants.PHOENIX_DRIVER;
        } else if (rawUrl.startsWith("jdbc:kylin:")) {
            return JdbcConstants.KYLIN_DRIVER;
        } else if (rawUrl.startsWith("jdbc:elastic:")) {
            return JdbcConstants.ELASTIC_SEARCH_DRIVER;
        } else if (rawUrl.startsWith("jdbc:clickhouse:")) {
            return JdbcConstants.CLICKHOUSE_DRIVER;
        } else if(rawUrl.startsWith("jdbc:presto:")) {
            return JdbcConstants.PRESTO_DRIVER;
        } else if(rawUrl.startsWith("jdbc:trino:")) {
            return JdbcConstants.TRINO_DRIVER;
        } else if (rawUrl.startsWith("jdbc:inspur:")) {
            return JdbcConstants.KDB_DRIVER;
        } else if (rawUrl.startsWith("jdbc:polardb")) {
            return JdbcConstants.POLARDB_DRIVER;
        } else if (rawUrl.startsWith("jdbc:highgo:")) {
            return "com.highgo.jdbc.Driver";
        } else {
            throw new SQLException("unknown jdbc driver : " + rawUrl);
        }
    }
```

数据库类型好多呀 ，看的眼花缭乱。

## 4.4 自动解析数据库类型
原理与自动解析驱动类型是相似的
```java
public static DbType getDbTypeRaw(String rawUrl, String driverClassName) {
        if (rawUrl == null) {
            return null;
        }

        if (rawUrl.startsWith("jdbc:derby:") || rawUrl.startsWith("jdbc:log4jdbc:derby:")) {
            return DbType.derby;
        } else if (rawUrl.startsWith("jdbc:mysql:") || rawUrl.startsWith("jdbc:cobar:")
                || rawUrl.startsWith("jdbc:log4jdbc:mysql:")) {
            return DbType.mysql;
        } else if (rawUrl.startsWith("jdbc:mariadb:")) {
            return DbType.mariadb;
        } else if (rawUrl.startsWith("jdbc:oracle:") || rawUrl.startsWith("jdbc:log4jdbc:oracle:")) {
            return DbType.oracle;
        } else if (rawUrl.startsWith("jdbc:alibaba:oracle:")) {
            return DbType.ali_oracle;
        } else if (rawUrl.startsWith("jdbc:oceanbase:oracle:")) {
            return DbType.oceanbase_oracle;
        } else if (rawUrl.startsWith("jdbc:oceanbase:")) {
            return DbType.oceanbase;
        } else if (rawUrl.startsWith("jdbc:microsoft:") || rawUrl.startsWith("jdbc:log4jdbc:microsoft:")) {
            return DbType.sqlserver;
        } else if (rawUrl.startsWith("jdbc:sqlserver:") || rawUrl.startsWith("jdbc:log4jdbc:sqlserver:")) {
            return DbType.sqlserver;
        } else if (rawUrl.startsWith("jdbc:sybase:Tds:") || rawUrl.startsWith("jdbc:log4jdbc:sybase:")) {
            return DbType.sybase;
        } else if (rawUrl.startsWith("jdbc:jtds:") || rawUrl.startsWith("jdbc:log4jdbc:jtds:")) {
            return DbType.jtds;
        } else if (rawUrl.startsWith("jdbc:fake:") || rawUrl.startsWith("jdbc:mock:")) {
            return DbType.mock;
        } else if (rawUrl.startsWith("jdbc:postgresql:") || rawUrl.startsWith("jdbc:log4jdbc:postgresql:")) {
            return DbType.postgresql;
        } else if (rawUrl.startsWith("jdbc:edb:")) {
            return DbType.edb;
        } else if (rawUrl.startsWith("jdbc:hsqldb:") || rawUrl.startsWith("jdbc:log4jdbc:hsqldb:")) {
            return DbType.hsql;
        } else if (rawUrl.startsWith("jdbc:odps:")) {
            return DbType.odps;
        } else if (rawUrl.startsWith("jdbc:db2:")) {
            return DbType.db2;
        } else if (rawUrl.startsWith("jdbc:sqlite:")) {
            return DbType.sqlite;
        } else if (rawUrl.startsWith("jdbc:ingres:")) {
            return DbType.ingres;
        } else if (rawUrl.startsWith("jdbc:h2:") || rawUrl.startsWith("jdbc:log4jdbc:h2:")) {
            return DbType.h2;
        } else if (rawUrl.startsWith("jdbc:mckoi:")) {
            return DbType.mock;
        } else if (rawUrl.startsWith("jdbc:cloudscape:")) {
            return DbType.cloudscape;
        } else if (rawUrl.startsWith("jdbc:informix-sqli:") || rawUrl.startsWith("jdbc:log4jdbc:informix-sqli:")) {
            return DbType.informix;
        } else if (rawUrl.startsWith("jdbc:timesten:")) {
            return DbType.timesten;
        } else if (rawUrl.startsWith("jdbc:as400:")) {
            return DbType.as400;
        } else if (rawUrl.startsWith("jdbc:sapdb:")) {
            return DbType.sapdb;
        } else if (rawUrl.startsWith("jdbc:JSQLConnect:")) {
            return DbType.JSQLConnect;
        } else if (rawUrl.startsWith("jdbc:JTurbo:")) {
            return DbType.JTurbo;
        } else if (rawUrl.startsWith("jdbc:firebirdsql:")) {
            return DbType.firebirdsql;
        } else if (rawUrl.startsWith("jdbc:interbase:")) {
            return DbType.interbase;
        } else if (rawUrl.startsWith("jdbc:pointbase:")) {
            return DbType.pointbase;
        } else if (rawUrl.startsWith("jdbc:edbc:")) {
            return DbType.edbc;
        } else if (rawUrl.startsWith("jdbc:mimer:multi1:")) {
            return DbType.mimer;
        } else if (rawUrl.startsWith("jdbc:dm:")) {
            return JdbcConstants.DM;
        } else if (rawUrl.startsWith("jdbc:kingbase:") || rawUrl.startsWith("jdbc:kingbase8:")) {
            return JdbcConstants.KINGBASE;
        } else if (rawUrl.startsWith("jdbc:gbase:")) {
            return JdbcConstants.GBASE;
        } else if (rawUrl.startsWith("jdbc:xugu:")) {
            return JdbcConstants.XUGU;
        } else if (rawUrl.startsWith("jdbc:log4jdbc:")) {
            return DbType.log4jdbc;
        } else if (rawUrl.startsWith("jdbc:hive:")) {
            return DbType.hive;
        } else if (rawUrl.startsWith("jdbc:hive2:")) {
            return DbType.hive;
        } else if (rawUrl.startsWith("jdbc:phoenix:")) {
            return DbType.phoenix;
        } else if (rawUrl.startsWith("jdbc:kylin:")) {
            return DbType.kylin;
        } else if (rawUrl.startsWith("jdbc:elastic:")) {
            return DbType.elastic_search;
        } else if (rawUrl.startsWith("jdbc:clickhouse:")) {
            return DbType.clickhouse;
        } else if (rawUrl.startsWith("jdbc:presto:")) {
            return DbType.presto;
        } else if (rawUrl.startsWith("jdbc:trino:")) {
            return DbType.trino;
        } else if (rawUrl.startsWith("jdbc:inspur:")) {
            return DbType.kdb;
        } else if (rawUrl.startsWith("jdbc:polardb")) {
            return DbType.polardb;
        } else if (rawUrl.startsWith("jdbc:highgo:")) {
            return DbType.highgo;
        } else if (rawUrl.startsWith("jdbc:pivotal:greenplum:")||rawUrl.startsWith("jdbc:datadirect:greenplum:")) {
            return DbType.greenplum;
        } else {
            return null;
        }
    }
```
