# shardingsphere 5.1.2
```markdown
### 新功能

1. 内核：Alpha 版本支持 MySQL 和 PostgreSQL 的 SQL 方言翻译
2. 内核：支持 PostgreSQL 和 openGauss 的自定义模式
3. 内核：支持 PostgreSQL 和 openGauss 的创建/修改/删除视图语句
4. 内核：支持 openGauss 游标语句
5. 内核：支持使用自定义系统数据库
6. 内核：支持获取 openGauss 和 MySQL 创建 SQL
7. 内核：支持获取 PostgreSQL 创建 SQL
8. 代理：官方支持使用 Helm 在 Kubernetes 中快速部署带有 ZooKeeper 集群的 ShardingSphere-Proxy 集群
9. JDBC：支持 ShardingSphere JDBC 驱动
10. 扩展：支持 PostgreSQL 自动创建表
11. 扩展：支持 PostgreSQL 和 openGauss 中带有自定义模式的表扩展
12. 扩展：支持带有文本主键和无整数主键的表扩展
13. 模式：注册中心支持 PG/openGauss 三层结构
14. 模式：注册中心支持数据库级分布式锁

### 增强

1. 内核：支持 PostgreSQL 和 openGauss 的复制语句
2. 内核：支持 PostgreSQL 的修改/删除索引语句
3. 内核：支持 MySQL 的更新强制索引语句
4. 内核：支持 openGauss 的创建/修改/删除模式
5. 内核：优化 RoundRobinReplicaLoadBalanceAlgorithm 和 RoundRobinTrafficLoadBalanceAlgorithm 逻辑
6. 内核：优化前端数据库类型和后端数据库类型不同的元数据加载逻辑
7. 内核：重构元数据加载逻辑
8. 内核：优化显示进程列表语句
9. 内核：提高大表加载性能
10. 内核：支持执行注释语句
11. 内核：支持分片规则中的视图
12. 内核：支持解析 Oracle 中的 CREATE ROLLBACK SEGMENT
13. 内核：支持解析 openGauss 中的 DROP TYPE
14. 内核：支持解析 openGauss 中的 ALTER TYPE
15. 内核：支持解析 Oracle 中的 DROP DISKGROUP
16. 内核：支持解析 Oracle 中的 CREATE DISKGROUP
17. 内核：支持解析 Oracle 中的 DROP FLASHBACK ARCHIVE
18. 内核：支持解析 openGauss 中的 CHECKPOINT
19. 内核：支持解析 Oracle 中的 CREATE FLASHBACK ARCHIVE
20. 内核：添加 PostgreSQL 关闭语句
21. 内核：支持解析 openGauss 中的 DROP CAST
22. 内核：支持解析 openGauss 中的 CREATE CAST
23. 内核：支持解析 Oracle 中的 CREATE CONTROL FILE
24. 内核：支持解析 openGauss 中的 DROP DIRECTORY
25. 内核：支持解析 openGauss 中的 ALTER DIRECTORY
26. 内核：支持解析 openGauss 中的 CREATE DIRECTORY
27. 内核：添加 PostgreSQL 检查点语句
28. 内核：支持解析 openGauss 中的 DROP SYNONYM
29. 内核：支持解析 openGauss 中的 CREATE SYNONYM
30. 内核：支持解析 openGauss 中的 ALTER SYNONYM
31. 内核：添加 PostgreSQL 调用语句
32. 内核：支持解析 Oracle 中的 CREATE PFILE
33. 内核：支持解析 Oracle 中的 CREATE SPFILE
34. 内核：支持解析 Oracle 中的 ALTER SEQUENCE
35. 内核：支持解析 Oracle 中的 CREATE CONTEXT
36. 内核：支持解析 Oracle 中的 ALTER PACKAGE
37. 内核：支持解析 Oracle 中的 CREATE SEQUENCE
38. 内核：支持解析 Oracle 中的 ALTER ATTRIBUTE DIMENSION
39. 内核：支持解析 Oracle 中的 ALTER ANALYTIC VIEW
40. 内核：在 SQLVisitorFacade 中使用 ShardingSphere SPI
41. 内核：在 DatabaseTypedSQLParserFacade 中使用 ShardingSphere SPI
42. 内核：支持解析 Oracle 中的 ALTER OUTLINE
43. 内核：支持解析 Oracle 中的 DROP OUTLINE
44. 内核：支持解析 Oracle 中的 DROP EDITION
45. 内核：支持 SQLServer 的 WITH 公共表表达式
46. 内核：在 withClause 中排除 SubquerySegment 的括号起止索引
47. 内核：重构 JoinTableSegment
48. 内核：支持解析 Oracle 中的 DROP SYNONYM
49. 内核：支持解析 Oracle 中的 CREATE DIRECTORY
50. 内核：支持解析 Oracle 中的 CREATE SYNONYM
51. 内核：支持 SQLServer SELECT 语句的 XmlNamespaces 子句
52. 内核：支持解析 Oracle 中的 Alter Database Dictionary
53. 内核：支持 SQLServer SELECT 语句的 FOR 子句
54. 内核：支持解析 Oracle 中的 ALTER DATABASE LINK
55. 内核：支持解析 Oracle 中的 CREATE EDITION
56. 内核：支持解析 Oracle 中的 ALTER TRIGGER
57. 内核：添加 SQLServer REVERT 语句
58. 内核：支持解析 PostgreSQL 中的 DROP TEXT SEARCH
59. 内核：添加 PostgreSQL 的 drop server
60. 内核：支持解析 Oracle 中的 ALTER VIEW
61. 内核：添加 PostgreSQL 的 drop access method
62. 内核：支持解析 PostgreSQL 中的 DROP ROUTINE
63. 内核：校对 SQLServer DROP USER 语句
64. 内核：支持解析 Oracle 中的 DROP TRIGGER
65. 内核：支持解析 PostgreSQL 中的 Drop subscription
66. 内核：添加 PostgreSQL 的 drop operator class
67. 内核：支持解析 PostgreSQL 中的 DROP PUBLICATION
68. 内核：支持解析 Oracle 中的 DROP VIEW
69. 内核：支持解析 PostgreSQL 中的 DROP TRIGGER
70. 内核：支持解析 Oracle 中的 DROP DIRECTORY
71. 内核：支持解析 PostgreSQL 中的 DROP STATISTICS
72. 内核：添加 PostgreSQL 的 drop type SQL 解析器
73. 内核：支持解析 PostgreSQL 中的 DROP RULE
74. 内核：校对 SQLServer ALTER LOGIN 语句
75. 内核：支持解析 PostgreSQL 中的 DROP FOREIGN DATA WRAPPER
76. 内核：对 PostgreSQL DROP EVENT TRIGGER 语句进行小改动
77. 代理：ShardingSphere-Proxy MySQL 支持接收超过 16 MB 的 MySQL 数据包
78. 代理：支持在 ShardingSphere-Proxy 中配置 netty 参数 ChannelOption.SO_BACKLOG
79. 代理：优化 netty 中的 so-reuseaddr 以解决端口占用问题
80. 代理：ShardingSphere-Proxy 的 Docker 镜像支持 aarch64 平台
81. 代理：在 ShardingSphere-Proxy MySQL 中使服务器版本可配置
82. 代理：在 ShardingSphere-Proxy PostgreSQL/openGauss 中支持更多字符集
83. 代理：在 ShardingSphere-Proxy 中使默认端口可配置
84. 扩展：兼容 openGauss:3.0 的 HA 端口，当启用 thread_pool 时
85. 扩展：优化 PipelineJobExecutor 中的 ZooKeeper 事件处理，避免阻塞 ZooKeeper 事件
86. 扩展：在整个过程中使表名不区分大小写
87. 扩展：改进 PostgreSQL 和 openGauss 的复制槽清理
88. 扩展：改进作业准备的锁保护
89. 扩展：支持 PostgreSQL 的 insert on conflict do update
90. 扩展：在 GlobalDataSourceRegistry 中不缓存数据源，以避免可能的共享资源关闭问题
91. 扩展：尽可能重用数据源池，以减少工作数据库连接
92. 分布式 SQL：`REFRESH TABLE METADATA` 支持指定 PostgreSQL 的模式
93. 分布式 SQL：`ALTER SHARDING TABLE RULE` 添加绑定表验证
94. 模式：ShardingSphere-JDBC 支持配置数据库连接名称
95. 分布式事务：禁止在事务中执行分布式 SQL
96. 分布式事务：autocommit = 0 时，DDL 部分的 DML 将自动开启事务

### Bug 修复

1. 内核：修复 PostgreSQL 和 openGauss 的 show 语句解析错误
2. 内核：修复 PostgreSQL 和 openGauss 的时间提取函数解析错误
3. 内核：修复 PostgreSQL 和 openGauss 的 select mod 函数解析错误
4. 内核：修复在读写场景中执行多模式 join 语句时的 PSQLException
5. 内核：修复在加密场景中执行创建模式语句时的错误路由结果
6. 内核：修复执行 drop schema if exist 语句时的 npe
7. 内核：修复执行 `SELECT LAST_INSERT_ID() AS id;` 语句时的错误路由结果
8. 内核：修复在数据库不包含数据源时执行 use database 语句时的 npe
9. 内核：修复带有 set var 的创建函数
10. 代理：修复 PostgreSQLComDescribeExecutor 中由于列