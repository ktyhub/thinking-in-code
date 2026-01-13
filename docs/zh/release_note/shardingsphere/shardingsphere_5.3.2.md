# shardingsphere 5.3.2

### API 变更

1. 代理：新增属性 `system-log-level`，支持通过 DistSQL 动态更改日志级别。
2. DistSQL：移除与 Hint 相关的 DistSQL，用户可以使用 `SQL Hint` 代替。

### 新功能

1. 扩展：支持任意类型的列唯一键表。

### 增强功能

1. 扩展：使用流查询进行库存转储和数据一致性检查。
2. 扩展：兼容 MySQL binlog 解析中的 `VARBINARY` 列类型。
3. 扩展：将 `AbstractSimplePipelineJob.execute` 重构为阻塞模式。
4. 扩展：改进表记录计数计算。
5. 扩展：支持迁移任务中代理分片规则缺失的情况。
6. 扩展：为 MySQL 上的管道任务添加 `useServerPrepStmts=false`。
7. 扩展：改进 MySQL binlog 的日期时间/时间解析。
8. 扩展：为准备阶段添加全局状态。
9. 扩展：为 MySQL 上的管道任务添加 `netTimeoutForStreamingResults`。
10. 权限：支持指定密码认证方法。
11. 权限：为 openGauss 协议添加 md5 认证支持。
12. 代理：为 JDBC 添加更多指标。
13. 内核：ShardingSphere 驱动配置支持 Apollo。
14. 内核：调整 `SKIP_ENCRYPT_REWRITE SQL` Hint 为 `SKIP_SQL_REWRITE` 以支持更多场景。
15. 内核：支持 openGauss 的 `EXPLAIN PERFORMANCE`。
16. 加密：支持 concat 函数。

### Bug 修复

1. 扩展：修复 PostgreSQL 增量任务中的 Unicode 字符和特殊字符解码问题。
2. 扩展：修复迁移不支持 PostgreSQL json 类型的问题。
3. DistSQL：`CREATE SHARDING TABLE RULE` 支持 `NONE` 策略。
4. 内核：修复数据源为空时使用系统数据库的错误。
5. 内核：修复在独立模式下设置 worker-id 无效的问题。
6. 内核：删除读写分离和数据库发现规则时清除存储节点信息。
7. 内核：修复单表复杂查询中列索引超出范围的异常问题。
8. 内核：修复 PostgreSQL 小写失败的问题。
9. 内核：修复前后数据库类型不一致时内置元数据库数据收集的异常。
10. 内核：修复某些表名下的路由错误报告问题。
11. 内核：修复 MySQL 创建过程解析错误。
12. 内核：修复联合提取表名 NPE。
13. 内核：修复大写表约束未重写错误。
14. 内核：修复解析包含货币类型的 PostgreSQL / openGauss SQL 失败的问题。
15. 内核：修复 PostgreSQL / openGauss 位置参数规则。
16. 内核：修复 PostgreSQL / openGauss 解析带类型转换的常量失败的问题。
17. 内核：修复使用 SQL 联邦引擎执行 select 时中文字符编码异常的问题。
18. 内核：修复在 JDBC 适配器中执行 set 变量语句时的 `IndexOutOfBoundsException`。
19. 内核：修复执行 drop 索引语句时索引不存在异常。
20. 代理：正确处理 MySQL 代理二进制协议中的数字符号。
21. 代理：修复 PostgreSQL 代理处理 bytea 数据类型失败的问题。
22. 代理：修复 PostgreSQL 代理解析带微秒的时间值失败的问题。
23. 代理：修复 PostgreSQL 协议二进制格式中的日期类型编码问题。
24. 代理：修复可能的 CCE `PostgreSQLInt2BinaryProtocolValue`。
25. 代理：修复客户端传递带引号的字符集到 PostgreSQL/openGauss 代理时可能的错误。

### 变更日志

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/24)
```