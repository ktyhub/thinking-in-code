---
title: "shardingsphere 5.5.2"
description: "通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。"
summary: "通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。"
---

# shardingsphere 5.5.2

### shardingsphere 是什么

通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。

### shardingsphere 5.5.2 版本更新了什么

## 发布 5.5.2

### API 变更

### 新功能

1. 内核：添加 firebird SQL 解析器模块和数据库类型 [#33773](https://github.com/apache/shardingsphere/pull/33773)

### 增强功能

1. 内核：创建 RouteUnit 时添加参数不为空检查 - [#33382](https://github.com/apache/shardingsphere/pull/33382)
1. 内核：为IndexColumnTokenGenerator添加索引列非空判断 - [#33384](https://github.com/apache/shardingsphere/pull/33384)
1. 内核：添加对所有者表的绑定 - [#33533](https://github.com/apache/shardingsphere/pull/33533)
1. 内核：添加对所有者表的绑定 - [#33533](https://github.com/apache/shardingsphere/pull/33533)
1. 内核：添加WithAvailable接口并加密、组合、插入选择支持检查器 - [#34175](https://github.com/apache/shardingsphere/pull/34175)
1. 元数据：将 load-table-metadata-batch-size 属性添加到并发加载表元数据 - [#34009](https://github.com/apache/shardingsphere/pull/34009)
1. DistSQL：使用内联分片算法创建分片规则时检查内联表达式 - [#33735](https://github.com/apache/shardingsphere/pull/33735)
1. SQL解析器：支持解析Doris BITXOR - [#33258](https://github.com/apache/shardingsphere/pull/33258)
1. SQL解析器：支持解析Doris INSTR - [#33289](https://github.com/apache/shardingsphere/pull/33289)
1. SQL解析器：支持解析Doris STRRIGHT - [#33393](https://github.com/apache/shardingsphere/pull/33393)
1. SQL Parser：支持根据 MySQL 8.4 doc 在 BaseRule.g4 文件中添加非保留关键字来解析 MySQL - [#33846](https://github.com/apache/shardingsphere/pull/33846)
1. SQL解析器：支持解析Doris EXTRACT\_URL\_PARAMETER - [#33571](https://github.com/apache/shardingsphere/pull/33571)
1. SQL 解析器：增强创建视图、更改视图、删除视图 sql 解析器 - [#34283](https://github.com/apache/shardingsphere/pull/34283)
1. SQL Binder：为建表语句添加sql绑定逻辑 - [#34074](https://github.com/apache/shardingsphere/pull/34074)
1. SQL Binder：支持创建索引语句sql绑定 - [#34112](https://github.com/apache/shardingsphere/pull/34112)
1. SQL Parser：支持 MySQL 更新和语句解析 - [#34126](https://github.com/apache/shardingsphere/pull/34126)
1. SQL Binder：删除 TablesContext#findTableNames 方法并实现 select order by、group by 绑定逻辑 - [#34123](https://github.com/apache/shardingsphere/pull/34123)
1. SQL Binder：支持select with语句sql绑定并添加绑定测试用例 - [#34141](https://github.com/apache/shardingsphere/pull/34141)
1. SQL Binder：支持使用当前 select 投影引用对 select 进行 sql 绑定 - [#34151](https://github.com/apache/shardingsphere/pull/34151)
1. SQL Binder：支持修改表、删除表sql绑定和添加测试用例 - [#34154](https://github.com/apache/shardingsphere/pull/34154)
1. SQL Binder：支持重命名表语句sql绑定和分割段绑定到ddl和dml包 - [#34158](https://github.com/apache/shardingsphere/pull/34158)
1. SQL Binder：支持复制语句sql绑定并添加绑定测试用例 - [#34159](https://github.com/apache/shardingsphere/pull/34159)
1. SQL Binder：支持截断表sql绑定并添加测试用例 - [#34162](https://github.com/apache/shardingsphere/pull/34162)
1. SQL Binder：支持create view、alter view、drop view sql绑定逻辑 - [#34167](https://github.com/apache/shardingsphere/pull/34167)
1. SQL Binder：支持加载数据和加载xml sql绑定并添加测试用例 - [#34177](https://github.com/apache/shardingsphere/pull/34177)
1. SQL Binder：支持优化表sql绑定并添加测试用例 - [#34242](https://github.com/apache/shardingsphere/pull/34242)
1. SQL Binder：支持显示创建表、显示列、显示索引语句绑定 - [#34271](https://github.com/apache/shardingsphere/pull/34271)
1. SQL Binder：支持拒绝用户sql绑定并添加测试用例 - [#34279](https://github.com/apache/shardingsphere/pull/34279)
1. SQL Binder：支持使用 UniqueCommonTableExpressionException 进行段绑定检查 - [#34163](https://github.com/apache/shardingsphere/pull/34163)
1. 存储：连接 HiveServer2 时支持为 jdbcURL 设置 `hive_conf_list`、`hive_var_list` 和 `sess_var_list` - [#33749](https://github.com/apache/shardingsphere/pull/33749)
1. 存储：支持通过HikariCP以外的数据库连接池连接HiveServer2 - [#33762](https://github.com/apache/shardingsphere/pull/33762)
1. 存储：部分支持连接嵌入式 ClickHouse `chDB` - [#33786](https://github.com/apache/shardingsphere/pull/33786)
1.事务：支持jdbc适配器中的保存点/释放保存点TCL语句 -[#34173](https://github.com/apache/shardingsphere/pull/34173)
1. 交易：将 Seata AT 集成的最低 Seata 客户端版本提升至 2.2.0 - [#33872](https://github.com/apache/shardingsphere/pull/33872)
1. SQL Federation：将方解石版本升级到 1.38.0 并更新 LICENSE 文件中的所有许可证信息 - [#33279](https://github.com/apache/shardingsphere/pull/33279)
1. JDBC: 执行 SHOW COMPUTE NODES 时为 JDBC 添加显示数据库名称 - [#33437](https://github.com/apache/shardingsphere/pull/33437)
1. JDBC：在 ResultSet 上支持 ZonedDateTime - [#33660](https://github.com/apache/shardingsphere/issues/33660)
1. 代理：添加查询参数并检查 MySQL Kill processId - [#33274](https://github.com/apache/shardingsphere/pull/33274)
1. 代理：PostgreSQL 代理支持表不存在异常 - [#33885](https://github.com/apache/shardingsphere/pull/33274)
1. Proxy Native：更改 ShardingSphere Proxy Native 的基础 Docker 镜像 - [#33263](https://github.com/apache/shardingsphere/issues/33263)
1. Proxy Native：支持在 GraalVM Native Image 中启用 ZooKeeper Service Discovery 连接到 HiveServer2 - [#33768](https://github.com/apache/shardingsphere/pull/33768)
1. Proxy Native：支持 GraalVM Native Image 下 ClickHouse 的本地事务 - [#33801](https://github.com/apache/shardingsphere/pull/33801)
1. Proxy Native：支持 GraalVM Native Image 中 Proxy Native 下的 Seata AT 集成 - [#33889](https://github.com/apache/shardingsphere/pull/33889)
1. Sharding：支持在 MySQL、OpenGauss、Doris 中聚合多个分片的 GroupConcat 功能 - [#33808](https://github.com/apache/shardingsphere/pull/33808)
1. Agent：简化Agent Docker Image的使用 - [#33356](https://github.com/apache/shardingsphere/pull/33356)
1. 模式：支持在独立模式下通过 props 修改 Hikari-CP 配置 [#34185](https://github.com/apache/shardingsphere/pull/34185)
1. 加密：支持insert语句重写use quote [#34259](https://github.com/apache/shardingsphere/pull/34259)
1. Infra: 支持通过包含 fdb 绝对路径的 jdbcUrl 连接到 Firebird - [#34335](https://github.com/apache/shardingsphere/pull/34335)

### 错误修复

1. SQL 解析器：修复 SQL 解析器中的 LiteralExpressionSegment 转换异常 - [#33332](https://github.com/apache/shardingsphere/pull/33332)
1. SQL Parser：修复 PostgreSQL 和 openGauss 时间提取函数解析周和季度错误 - [#33564](https://github.com/apache/shardingsphere/pull/33564)
1. SQL Parser：修复 MySQL 解析区域未保留关键字错误 - [#33720](https://github.com/apache/shardingsphere/pull/33720)
1. SQL Parser：修复使用表所有者时的 MySQL 范围解析错误 - [#33874](https://github.com/apache/shardingsphere/pull/33874)
1. SQL Binder: 修复使用 HintManager#setDatabaseName 透明时表不存在的异常 - [#33370](https://github.com/apache/shardingsphere/pull/33370)
1. SQL Binder：使用 Multimap 和 CaseInsensitiveString 替换 CaseInsensitiveMap，以支持具有相同表别名的 MySQL 多表连接 - [#33303](https://github.com/apache/shardingsphere/pull/33303)
1. SQL Binder：修复了bind时combine语句找不到外表的问题 - [#33357](https://github.com/apache/shardingsphere/pull/33357)
1. SQL Binder：修复了重复子查询获取导致的 SQL 性能问题 - [#33361](https://github.com/apache/shardingsphere/pull/33361)
1. SQL Binder：修复绑定时表达式段找不到外表的问题 - [#34015](https://github.com/apache/shardingsphere/pull/34015)
1. 存储：修复无法使用远程 Hive Metastore Server 连接到 HiveServer2 - [#33837](https://github.com/apache/shardingsphere/pull/33837)
1. 代理：修复了在代理适配器中执行 INSERT INTO ON DUPLICATE KEY UPDATE 时出现的 BatchUpdateException - [#33796](https://github.com/apache/shardingsphere/pull/33796)
1. 代理：修复了 MySQL 的 SELECT 权限验证期间无法识别“ALL PRIVILEGES ON `DB`.*”的问题 - [#34037](https://github.com/apache/shardingsphere/pull/34037)
1. 代理：修复代理协议返回的 MySQL longblob 错误列类型 - [#34121](https://github.com/apache/shardingsphere/pull/34121)
1. 代理：如果插入 SQL 包含更多不在插入值语法中的参数，则修复 MySQL 代理错误 - [#34287](https://github.com/apache/shardingsphere/pull/34287)
1. Sharding：暂时删除 ShardingRouteAlgorithmException 检查逻辑以支持不同的实际表名配置 - [#33367](https://github.com/apache/shardingsphere/pull/33367)
1. 分片：使用 GROUP BY 修复 SQL COUNT，以防止错误的行返回 - [#33380](https://github.com/apache/shardingsphere/pull/33380)
1. Sharding：修复 avg、sum、min、max 函数在没有查询结果返回时返回空数据的问题 - [#33449](https://github.com/apache/shardingsphere/pull/33449)
1. 加密：修复数据库中没有加密规则的合并异常 - [#33708](https://github.com/apache/shardingsphere/pull/33708)
1. 加密：在 EncryptInsertPredicateColumnTokenGenerator 中使用 sql 绑定信息以避免错误的列表映射 - [#34110](https://github.com/apache/shardingsphere/pull/34110)
1. 模式：修复 `JDBCRepository` 在内存模式下对 H2 数据库的不当处理 - [#33281](https://github.com/apache/shardingsphere/issues/33281)
1. 模式：修复 DDL 中索引更改时添加的重复列名 - [#33982](https://github.com/apache/shardingsphere/issues/33281)

### 更改日志

1. [里程碑](https://github.com/apache/shardingsphere/milestone/30)

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.5.2` · 📅 发布：2025-01-22 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.5.2)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
