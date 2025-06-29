# shardingsphere 5.2.0

### 新特性

1. 支持分片功能的SQL审计
2. 支持MySQL的`show processlist`和`kill process list id`功能
3. 扩容：为数据迁移添加专用的DistSQL
4. 扩容：基础支持将数据迁移到异构数据库
5. DistSQL：新增语法`CREATE MIGRATION PROCESS CONFIGURATION`
6. DistSQL：新增语法`ALTER MIGRATION PROCESS CONFIGURATION`
7. DistSQL：新增语法`SHOW MIGRATION PROCESS CONFIGURATION`
8. DistSQL：新增语法`ADD MIGRATION SOURCE RESOURCE`
9. DistSQL：新增语法`SHOW SQL_TRANSLATOR RULE`
10. DistSQL：新增语法`CREATE SHARDING AUDITOR`
11. DistSQL：新增语法`ALTER SHARDING AUDITOR`
12. DistSQL：新增语法`SHOW SHARDING AUDIT ALGORITHMS`

### 增强功能

1. 支持MySQL、Oracle、SQLServer和H2的列可见性功能
2. 支持读写分离的笛卡尔积配置
3. 支持SQL翻译器的Spring命名空间和Spring Boot使用
4. 支持JSR-310中的Year和Month在IntervalShardingAlgorithm中
5. 支持广播表更新/删除限制语句
6. 支持在配置加密时重写`create index on table(column)`语句
7. 支持openGauss游标、fetch、move、close语句的分片、读写分离
8. 支持在谓词中执行列为null时的加密列重写
9. 支持加密`show create table`返回逻辑列
10. 支持在配置加密时重写`create table with index`语句
11. 支持PostgreSQL创建操作符语句解析
12. 支持PostgreSQL创建物化视图语句解析
13. 支持PostgreSQL嵌套注释解析
14. 支持PostgreSQL修改订阅语句解析
15. 支持PostgreSQL创建组语句解析
16. 支持PostgreSQL修改统计信息语句解析
17. 支持PostgreSQL创建外部表语句解析
18. 支持PostgreSQL修改服务器语句解析
19. 支持PostgreSQL创建外部数据包装器语句解析
20. 支持PostgreSQL创建事件触发器语句解析
21. 支持PostgreSQL安全标签语句解析
22. 支持PostgreSQL重建索引语句解析
23. 支持PostgreSQL重新分配所有权语句和刷新物化视图语句解析
24. 支持PostgreSQL准备事务语句解析
25. 支持PostgreSQL创建排序规则语句解析
26. 支持PostgreSQL锁定语句解析
27. 支持PostgreSQL修改规则语句解析
28. 支持PostgreSQL通知语句解析
29. 支持PostgreSQL取消监听语句解析
30. 支持Oracle修改函数和修改层次结构语句解析
31. 支持Oracle修改可插拔数据库语句解析
32. 支持Oracle修改物化视图日志语句解析
33. 支持Oracle修改磁盘组语句解析
34. 支持Oracle修改操作符语句解析
35. 支持Oracle修改集群语句解析
36. 支持Oracle修改审计策略语句解析
37. 支持Oracle修改索引类型语句解析
38. 支持Oracle锁定表语句解析
39. 支持Oracle修改Java语句解析
40. 支持Oracle内联约束语句解析
41. 支持openGauss几何操作符语句解析
42. 优化MySQL创建/修改表语句中可见/不可见的解析
43. 支持MySQL SET语句解析中以@@为前缀的变量范围
44. 支持MySQL创建过程与创建视图解析
45. 支持在创建索引的表语句中解析列段
46. 支持openGauss游标、fetch、move、close语句的分片、读写分离
47. 支持在谓词中执行列为null时的加密列重写
48. 支持加密`show create table`返回逻辑列
49. 支持在配置加密时重写`create table with index`语句
50. 支持Oracle解析`ALTER LOCKDOWN PROFILE`
51. 支持Oracle解析`ALTER MATERIALIZED VIEW`
52. 支持Oracle解析`ALTER MATERIALIZED ZONEMAP`
53. 支持Oracle解析`ALTER LIBRARY`
54. 支持Oracle解析`ALTER INMEMORY JOIN GROUP`
55. 支持Oracle解析`DROP OPERATOR`
56. 支持Oracle解析`DROP RESTORE POINT`
57. 支持Oracle解析`CREATE RESTORE POINT`
58. 支持Oracle解析`DROP INMEMORY JOIN GROUP`
59. 支持MySQL解析`create_bit_xor_table`
60. 支持MySQL解析DO语句
61. 支持openGauss解析`DropServer`
62. 支持openGauss解析`CREATE AGGREGATE`
63. 支持PostgreSQL解析`ALTER ROUTINE`
64. 添加PostgreSQL创建转换语句
65. 添加PostgreSQL创建聚合语句
66. 支持PostgreSQL解析fetch/move/close游标语句
67. 支持PostgreSQL解析`ALTER PUBLICATION`
68. 添加PostgreSQL创建访问方法语句
69. 支持PostgreSQL解析`ALTER POLICY`
70. 支持PostgreSQL解析`ALTER OPERATOR`
71. 添加PostgreSQL复制语句
72. 添加PostgreSQL注释语句
73. 支持PostgreSQL解析监听语句
74. 支持DECLARE游标语句
75. 在helm图表中添加默认的serverConfig
76. 将openGauss JDBC驱动程序组装到Proxy分发中
77. ShardingSphere-Proxy监听指定的IP地址
78. 支持MySQL Proxy中的`COM_STMT_SEND_LONG_DATA`
79. MySQL Proxy中的`SELECT VERSION()`支持别名
80. 修复openGauss Proxy在未定义资源时无法连接的问题
81. 支持在ShardingSphere-Proxy的启动脚本中使用JAVA_HOME中定义的JRE
82. 避免在ShardingSphere-Proxy发生OOM时客户端被阻塞
83. 支持在ShardingSphere-JDBC中使用c3p0
84. 支持带双引号值的`SET NAMES`
85. ShardingSphere-JDBC中的`Connection.prepareStatement`支持带列参数
86. 扩容：改进MySQL连接和重连
87. 扩容：修复MySQL json列可能导致增量任务泄漏的问题
88. 扩容：为PostgreSQL数据源添加权限检查
89. 扩容：增量迁移支持MySQL MGR模式
90. 扩容：改进作业进度持久化
91. 扩容：DistSQL执行作业并同步返回
92. 扩容：库存迁移支持表具有主键和唯一键
93. 扩容：停止作业时关闭底层ElasticJob
94. 扩容：改进PostgreSQL和openGauss的逻辑复制槽名称生成
95. 扩容：使查询DistSQL在未选择数据库时也能执行
96. DistSQL：在`SHOW INSTANCE LIST`和`SHOW INSTANCE INFO`的结果集中添加worker_id
97. DistSQL：改进`EXPORT DATABASE CONFIG`的结果
98. DistSQL：支持更多数据库的`FORMAT SQL`
99. DistSQL：优化`CREATE TRAFFIC RULE`的执行逻辑
100. DistSQL：为RDL READWRITE_SPLITTING RULE添加参数`writeDataSourceQueryEnabled`
101. DistSQL：为Encrypt RDL支持`assistEncryptor`
102. DistSQL：在`CREATE SHARDING TABLE RULE`时添加分片算法类型检查