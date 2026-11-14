---
title: "shardingsphere 5.5.3"
description: "通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。"
summary: "通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。"
---

# shardingsphere 5.5.3

### shardingsphere 是什么

通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。

### shardingsphere 5.5.3 版本更新了什么

## 发布 5.5.3

### CVE

1. 修复 CVE-2025-55163、CVE-2025-58056、CVE-2025-58057 [#36758](https://github.com/apache/shardingsphere/pull/36758)
1. 修复 CVE-2025-48924 [#36085](https://github.com/apache/shardingsphere/pull/36085)
1. 修复 CVE-2024-7254 [#36153](https://github.com/apache/shardingsphere/pull/36153)
1. 修复 CVE-2015-5237、CVE-2024-7254、CVE-2022-3171、CVE-2021-22569、CVE-2021-22570 [#37888](https://github.com/apache/shardingsphere/pull/37888)
1. 修复 CVE-2024-12798、CVE-2024-12801、CVE-2025-11226 [#37936](https://github.com/apache/shardingsphere/pull/37936)
1. 修复 CVE-2023-39017 [#38039](https://github.com/apache/shardingsphere/pull/38039)
1. 修复 CVE-2024-22399、CVE-2021-32824、CVE-2025-5222、CVE-2016-1000027 [#38040](https://github.com/apache/shardingsphere/pull/38040)
1. 修复 CVE-2023-2976、CVE-2024-29131、CVE-2025-27821 [#38042](https://github.com/apache/shardingsphere/pull/38042)

### 元数据存储更改

1. 删除分片规则元数据保留上的 `default_strategies` 前缀 - [#34664](https://github.com/apache/shardingsphere/pull/34664)

### API 变更

1. 删除 SQL 格式化功能 - [#35390](https://github.com/apache/shardingsphere/pull/35390)
1. 删除日志规则功能 - [#35458](https://github.com/apache/shardingsphere/pull/35458)
1. 删除配置属性键 `system-log-level` - [#35493](https://github.com/apache/shardingsphere/pull/35493)
1.将ShardingSphere SQL日志主题从`ShardingSphere-SQL`更改为`org.apache.shardingsphere.sql` - [#37022](https://github.com/apache/shardingsphere/pull/37022)
1. 添加临时配置密钥 `instance-connection-enabled` - [#37694](https://github.com/apache/shardingsphere/pull/37694)
1. 添加属性配置键 `proxy-frontend-connection-idle-timeout` - [#38045](https://github.com/apache/shardingsphere/pull/38045)

### 新功能

1.添加ShardingSphere BOM - [#36866](https://github.com/apache/shardingsphere/issues/36866)
1. 将功能模块解耦为可插拔 - [#36086](https://github.com/apache/shardingsphere/pull/36086)
1. 将数据库类型解耦为可插拔 - [#35346](https://github.com/apache/shardingsphere/pull/35346)
1. 将注册中心类型解耦为可插拔 - [#36087](https://github.com/apache/shardingsphere/pull/36087)
1. 代理：支持 Firebird 代理 - [#35937](https://github.com/apache/shardingsphere/pull/35937)
1. JDBC：支持 ZooKeeper 和 ETCD URL 格式 - [#37037](https://github.com/apache/shardingsphere/pull/37037)
1. 代理：自动关闭代理的空闲前端连接 - [#38045](https://github.com/apache/shardingsphere/pull/38045)

### 增强功能

1. Build：支持在OpenJDK 24和25下编译和使用ShardingSphere - [#36688](https://github.com/apache/shardingsphere/issues/36688)
1. 元数据：支持 IPv6 进行 JDBC 连接 URL - [#35289](https://github.com/apache/shardingsphere/issues/35289)
1. 元数据：支持加载 PostgreSQL 分区表 - [#34346](https://github.com/apache/shardingsphere/pull/34346)
1. 元数据：支持连接到 Presto 的 Memory Connector - [#34432](https://github.com/apache/shardingsphere/pull/34432)
1. 内核：添加 LocalDate 数据类型支持 - [#37053](https://github.com/apache/shardingsphere/pull/37053)
1. SQL Parser：支持解析 MySQL 的存储过程语法 - [#36690](https://github.com/apache/shardingsphere/pull/36690)
1. SQL Parser：支持为 MySQL 解析更多 SQL 语句 - [#36689](https://github.com/apache/shardingsphere/issues/36689)
1. SQL Parser：支持为 SQLServer 解析更多 SQL 语句 - [#36695](https://github.com/apache/shardingsphere/issues/36695)
1. SQL Parser：支持为Oracle解析更多SQL语句 - [#36696](https://github.com/apache/shardingsphere/issues/36696)
1. SQL Parser：支持为 Hive 解析更多 SQL 语句 - [#36694](https://github.com/apache/shardingsphere/pull/36694) [#37074](https://github.com/apache/shardingsphere/pull/37074)
1. SQL 解析器：支持解析 Doris 的 CREATE MATERIALIZED VIEW - [#31499](https://github.com/apache/shardingsphere/pull/31499)
1. SQL Parser：支持对 PostgreSQL 和 openGauss 解析带有 $$ 符号的 CREATE FUNCTION - [#35947](https://github.com/apache/shardingsphere/pull/35947)
1. SQL 解析器：支持 Oracle SQL 解析器正确提取 REGEXP_SUBSTR 参数 - [#37924](https://github.com/apache/shardingsphere/pull/37924)
1. SQL Parser：修复 SQL 中转义 '\' 导致 DialectSQLParsingException - [#37943](https://github.com/apache/shardingsphere/pull/37943)
1. SQL Parser: 修复前端协议为 og 时解析 \l 命令 SQL 语句错误 - [#37953](https://github.com/apache/shardingsphere/pull/37953)
1. SQL Parser：修复在 ORDER BY 子句中使用保留字 `order` 时出现 SQLParsingException - [#37958](https://github.com/apache/shardingsphere/pull/37958)
1. SQL Parser：修复 SQLServer 会话 `SET QUOTED_IDENTIFIER` 和 `SET TEXTSIZE` 语句的解析错误 - [#38005](https://github.com/apache/shardingsphere/pull/38005)
1. SQL 解析器：支持 PostgreSQL 和 openGauss 中的 '2'::int 语句 - [#37962](https://github.com/apache/shardingsphere/pull/37962)
1. SQL Parser：支持 PostgreSQL 中不带引号的范围类型构造函数 - [#37994](https://github.com/apache/shardingsphere/pull/37994)
1. SQL Parser：支持解析MySQL存储过程语法- [#38017](https://github.com/apache/shardingsphere/pull/38017)
1. SQL Binder：支持绑定更多SQL语句 - [#36697](https://github.com/apache/shardingsphere/pull/36697)
1. SQL Binder：添加 ALTER TABLE 元数据检查 - [#35877](https://github.com/apache/shardingsphere/pull/35877)
1. SQL Binder：支持 Grant 语句 SQL 绑定 - [#36207](https://github.com/apache/shardingsphere/pull/36207)
1. SQL Router：添加带有 UNION ALL 路由的 SELECT 到多数据源检查 - [#35037](https://github.com/apache/shardingsphere/pull/35037)
1. SQL Router：改进对使用单个数据源执行无表 SQL 的支持 - [#35659](https://github.com/apache/shardingsphere/pull/35659)
1. SQL Router：添加 `max-union-size-per-datasource` 属性以批量 UNION ALL 重写每个数据源并保持并行执行 - [#37405](https://github.com/apache/shardingsphere/pull/37405)
1. DistSQL：在`SHOW MIGRATION LIST`的查询结果中添加作业分片节点信息 - [#35053](https://github.com/apache/shardingsphere/pull/35053)
1. DistSQL：为单个规则中使用的查询存储单元添加DistSQL - [#35131](https://github.com/apache/shardingsphere/pull/35131)
1. 代理：为 PostgreSQL 协议实现 write bool 二进制数据类型 - [#35831](https://github.com/apache/shardingsphere/pull/35831)
1. 代理：为 MySQL 添加 SQL `SHOW CREATE DATABASE` 权限检查 - [#36862](https://github.com/apache/shardingsphere/pull/36862)
1. 代理：MySQLTextResultSetRowPacket 和 MySQLDateBinaryProtocolValue 在值包含比例时支持 LocalDateTime 和 LocalTime - [#37881](https://github.com/apache/shardingsphere/pull/37881)
1. 分片：使用缓存避免内联表达式解析造成内存溢出 - [#22196](https://github.com/apache/shardingsphere/issues/22196)
1. 分片：添加数字后缀检查与绑定表名 - [#35293](https://github.com/apache/shardingsphere/issues/35293)
1. 加密：使用 EncryptDerivedColumnSuffix 增强加密表子查询重写逻辑 - [#34829](https://github.com/apache/shardingsphere/pull/34829)
1. 加密：添加引号以加密重写派生列 - [#34950](https://github.com/apache/shardingsphere/pull/34950)
1. 加密：加密功能支持 NOT LIKE 运算符 - [#35984](https://github.com/apache/shardingsphere/pull/35984)
1. 读写分割：将事务性读取查询策略默认类型更新为 PRIMARY - [#36477](https://github.com/apache/shardingsphere/pull/36477)
1. Pipeline：改进管道作业进度增量latestActiveTimeMillis持久性 - [#34655](https://github.com/apache/shardingsphere/pull/34655)
1. Pipeline：改进异构数据库迁移 - [#35424](https://github.com/apache/shardingsphere/pull/35424)
1. Pipeline：改进 DATA_MATCH 数据一致性检查以使用范围流式查询 - [#35740](https://github.com/apache/shardingsphere/pull/35740)
1. Pipeline：在MySQL分片表的DATA_MATCH一致性检查中添加streaming-range-type属性和LARGE impl以获得更好的性能 - [#35786](https://github.com/apache/shardingsphere/pull/35786)
1. Pipeline：改进迁移一致性检查以动态反映存储单元 maxPoolSize - [#36507](https://github.com/apache/shardingsphere/pull/36507)
1. Pipeline：改进“显示迁移检查状态”inventory_finished_percentage 列结果不准确 - [#36509](https://github.com/apache/shardingsphere/pull/36509)
1. 管道：兼容 COMPLEX_INLINE allowed-range-query-with-inline-sharding - [#36524](https://github.com/apache/shardingsphere/pull/36524)
1. Pipeline：支持重新启动后管道作业实时反映代理全局属性 - [#36749](https://github.com/apache/shardingsphere/pull/36749)
1. Pipeline：InventoryDumper 重用表库存计算器以获得更好的功能和性能 - [#36830](https://github.com/apache/shardingsphere/pull/36830)
1. Pipeline：改进“更改传输规则”：验证STREAM_CHANNEL TYPE NAME - [#36864](https://github.com/apache/shardingsphere/pull/36864)
1. Pipeline：支持多列唯一键第一个整数列分割 - [#36935](https://github.com/apache/shardingsphere/pull/36935)
1. Pipeline：支持唯一键第一个整数列精确分割 - [#37517](https://github.com/apache/shardingsphere/pull/37517)
1. Pipeline: 支持唯一键第一个整数列可能为空值 - [#37522](https://github.com/apache/shardingsphere/pull/37522)
1. Pipeline：支持基于数据稀疏性的唯一键第一个整数列精确或估计分割 - [#37542](https://github.com/apache/shardingsphere/pull/37542)
1. Pipeline：支持唯一键第一个大整数列分割 - [#37574](https://github.com/apache/shardingsphere/pull/37574)
1. Pipeline：支持唯一键第一个字符串列精确分割 - [#37543](https://github.com/apache/shardingsphere/pull/37543)
1. Pipeline：支持唯一键第一个二进制（例如 MySQL VARBINARY）列精确拆分 - [#38041](https://github.com/apache/shardingsphere/pull/38041)
1. Pipeline：支持多列唯一键非第一列可为空 - [#37647](https://github.com/apache/shardingsphere/pull/37647)
1. 加密：支持在加密中处理显示创建视图结果修饰 - [#37299](https://github.com/apache/shardingsphere/pull/37299)
1. JDBC：增强 ResultSetUtils 以支持灵活的字符串日期/时间转换 - [37424](https://github.com/apache/shardingsphere/pull/37424)

### 错误修复

1. 内核：修复在 INSERT 语句中设置 null 时不返回生成密钥的问题 - [35783](https://github.com/apache/shardingsphere/pull/35783)
1. 内核：添加AllowNotUseDatabaseSQLStatementAttribute以支持某些mysql dal语句不使用数据库执行 - [#37033](https://github.com/apache/shardingsphere/pull/37033)
1. 元数据：修复执行 ALTER SCHEMA 时重命名 schema 名称的异常 - [#34465](https://github.com/apache/shardingsphere/pull/34465)
1. SQL 解析器：支持 Oracle 的带有 Pivot 和 Unpivot 子句的多个列名 - [#35586](https://github.com/apache/shardingsphere/pull/35586)
1. SQL 解析器：修复 PostgreSQL 的 INSERT 上设置的 OnDuplicateKeyColumnsSegment - [#34425](https://github.com/apache/shardingsphere/pull/34425)
1. SQL 解析器：修复 SQL 包含 MySQL 的隐式 concat 表达式时的 SQL 解析器错误 - [#34660](https://github.com/apache/shardingsphere/pull/34660)
1. SQL 解析器：修复当 SQL 包含带有 Oracle 别名的子查询时 SQL 解析器错误 - [#35239](https://github.com/apache/shardingsphere/pull/35239)
1. SQL Parser：修复包含逗号时的多个 SQL 拆分错误 - [#31609](https://github.com/apache/shardingsphere/pull/31609)
1. SQL Parser：修复函数包含占位符时参数计数解析错误的问题 [#38019](https://github.com/apache/shardingsphere/pull/38019)
1. SQL Binder：修复在 NotExpressionBinder 中找不到外表的问题 - [36135](https://github.com/apache/shardingsphere/pull/36135)
1. SQL Binder：修复 ExistsSubqueryExpressionBinder 中无法找到外表的问题 - [#36068](https://github.com/apache/shardingsphere/pull/36068)
1. SQL Binder：修复oracle XMLELEMENT函数第一个参数不带引号引起的列绑定异常 - [#36963](https://github.com/apache/shardingsphere/pull/36963)
1. SQL Binder：修复 HAVING 中的相关子查询无法引用外部查询列 - [#37872](https://github.com/apache/shardingsphere/pull/37872)
1. 事务：修复 BASE 事务集成模块的冲突依赖项 - [#35142](https://github.com/apache/shardingsphere/pull/35142)
1.事务：缓解SEATA客户端抛出异常导致的连接泄漏 - [#34463](https://github.com/apache/shardingsphere/pull/34463)
1.事务：修复XA数据源登记失败导致连接泄漏 - [37593](https://github.com/apache/shardingsphere/pull/37593)
1. SQL Federation：修复使用 SQL Federation 时 ResultSet 关闭后不允许操作的异常 - [#35206](https://github.com/apache/shardingsphere/pull/35206)
1. DistSQL：修复显示规则使用带有读写分割规则的存储单元时的重复结果 - [#35129](https://github.com/apache/shardingsphere/pull/35129)
1. DistSQL：修复 `ALTER SQL_FEDERATION RULE` 中缺少逗号的问题 - [#35523](https://github.com/apache/shardingsphere/pull/35523)
1. DistSQL：修复加载具有特定模式的单个表 - [#37535](https://github.com/apache/shardingsphere/pull/37535)
1. JDBC：修复一些错误的 JDBC 数据库元数据检索逻辑 - [#34959](https://github.com/apache/shardingsphere/pull/34959)
1. JDBC：修复从 SQL 语句上下文获取数据库名称 - [#34960](https://github.com/apache/shardingsphere/pull/34960)
1. JDBC：支持使用 java.time.Duration 设置数据源属性类型 - [#35241](https://github.com/apache/shardingsphere/pull/35241)
1. JDBC：解决创建多个语句时的语句管理器泄漏问题 - [#35665](https://github.com/apache/shardingsphere/pull/35665)
1. JDBC：修复DriverDatabaseConnectionManager中缓存连接未及时释放的问题 - [35834](https://github.com/apache/shardingsphere/pull/35834)
1. JDBC：调用clearBatch方法时清除批量生成的键结果集 - [37204](https://github.com/apache/shardingsphere/pull/37204)
1. JDBC：修复 Oracle TIMESTAMP WITH TIME ZONE ORDER BY 异常 - [#37181](https://github.com/apache/shardingsphere/pull/37181)
1. JDBC：修复 PostgreSQL SINGLE 表的生成键检索 - [#38024](https://github.com/apache/shardingsphere/pull/38024)
1. 代理：修复 `SHOW PROCESSLIST` 不等待所有节点 - [#35348](https://github.com/apache/shardingsphere/pull/35348)
1. Proxy: 修复在没有当前数据库的情况下执行 MySQL SHOW VARIABLES 时出现 NoSuchElementException 异常 - [#35550](https://github.com/apache/shardingsphere/pull/35550)
1. 代理：修复 PostgreSQL 字符串二进制协议值的列长度 - [35840](https://github.com/apache/shardingsphere/pull/35840)
1. Proxy：修复Proxy中回滚失败导致的连接泄漏 - [35867](https://github.com/apache/shardingsphere/pull/35867)
1. Proxy：修复 select 内置函数名称带空格的行为差异 -[#36537](https://github.com/apache/shardingsphere/pull/36537)
1. 代理：修复 MySQL 文本协议日期时间小数秒输出 - [#37410](https://github.com/apache/shardingsphere/pull/37410)
1. 代理：修复路由到管理路径的 MySQL no-FROM 多投影 SELECT 的 IndexOutOfBoundsException - [#37391](https://github.com/apache/shardingsphere/pull/37391)
1. 代理：修复 MySQL 二进制协议日期时间/时间小数秒精度 - [#37294](https://github.com/apache/shardingsphere/pull/37294)
1. 代理：修复 PostgreSQL 布尔文本输出以根据协议返回 `t`/`f` - [#37184](https://github.com/apache/shardingsphere/pull/37184)
1. 代理：修复 PostgreSQL 文本协议 bytea 输出以使用十六进制编码并避免截断 - [#37772](https://github.com/apache/shardingsphere/pull/37772)
1. Proxy：修复当 `MYSQL_TYPE_STRING` 用于字符分片列时 MySQL 准备好的语句分片失败 - [#37993](https://github.com/apache/shardingsphere/issues/37993)
1. 代理：处理 MySQL 准备语句中的 `byte[]` 分页参数（`LIMIT ?`、`LIMIT ?, ?`） - [#38057](https://github.com/apache/shardingsphere/pull/38057)
1. Proxy：修复使用openGauss驱动执行事务中语句时命令类型错误 - [37749](https://github.com/apache/shardingsphere/pull/37749)
1. 模式：修复 drop schema 无法在独立模式下工作的问题 - [#34470](https://github.com/apache/shardingsphere/pull/34470)
1. Sharding：修复 mod sharding 算法判断 -[#36386](https://github.com/apache/shardingsphere/pull/36386)
1. 分片：修复表规则中的内联分片算法检查 - [#36999](https://github.com/apache/shardingsphere/pull/36999)
1. 分片：修复大小写敏感的分片列时错误的分片条件合并 - [#37389](https://github.com/apache/shardingsphere/pull/37389)
1. Sharding：修复由于类型分片值不同而导致错误的合并分片条件逻辑 - [#37528](https://github.com/apache/shardingsphere/pull/37528)
1. 分片：防止 SELECT DISTINCT 重写丢失跨分片的全局重复数据删除 - [#37857](https://github.com/apache/shardingsphere/pull/37857)
1. 加密：解决嵌套 concat 函数中的重写问题 - [#35815](https://github.com/apache/shardingsphere/pull/35815)
1. Pipeline: 恢复迁移增量导入器批量大小的值 - [#34670](https://github.com/apache/shardingsphere/pull/34670)
1. Pipeline：修复 InventoryDumper 首次在多列唯一键表上转储 SQL 而无需 ORDER BY - [#34736](https://github.com/apache/shardingsphere/pull/34736)
1. Pipeline：修复服务器上需要 SSL 时 MySQL JDBC 查询属性扩展 - [#36581](https://github.com/apache/shardingsphere/pull/36581)
1. Pipeline：修复迁移可能会在作业重新启动后跳过大表上的一些记录 - [#36878](https://github.com/apache/shardingsphere/pull/36878)
1. Pipeline: 修复无符号数列值类型在库存和增量中不一致的问题 - [#37280](https://github.com/apache/shardingsphere/pull/37280)
1. Pipeline: 修复由于 locale 格式的序列值导致的 PostgreSQL 迁移创建表 SQL 生成失败的问题 - [#28360](https://github.com/apache/shardingsphere/issues/28360)
1. Pipeline：MySQLBinlogClient 兼容异步异常 - [#37631](https://github.com/apache/shardingsphere/issues/37631)
1. Pipeline: 修复 ALTER MIGRATION RULE without STREAM_CHANNEL 时 SHOW MIGRATION RULE 始终显示默认值的问题 - [#37737](https://github.com/apache/shardingsphere/issues/37737)
1.DistSQL：消除DistSQL执行器的并发安全风险。 - [#38097](https://github.com/apache/shardingsphere/pull/38097)

### 更改日志

1. [里程碑](https://github.com/apache/shardingsphere/milestone/31)

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.5.3` · 📅 发布：2026-02-28 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.5.3)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
