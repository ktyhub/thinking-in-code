# shardingsphere 5.4.0

### API 变更

1. 元数据：将分片广播表更改为全局广播表
2. JDBC：移除全局规则中的感叹号（!）
3. DistSQL：简化加密 DistSQL 中的关键字 ASSISTED_QUERY 和 LIKE_QUERY
4. DistSQL：优化 SQL_PARSER 规则语法
5. 加密：调整加密 yaml API 以区分加密、LIKE 和辅助查询配置
6. 加密：移除加密功能中的明文列和 queryWithCipherColumn 配置
7. 读写分离：重构读写分离 API
8. 代理：移除属性 proxy-instance-type 配置
9. 代理：移除属性 proxy-backend-executor-suitable
10. 代理：移除属性 proxy-mysql-default-version
11. 扩展：重构提交回滚流以删除流
12. 分片：将 ShardingCacheRule 合并到 ShardingRule（实验性）

### 新功能

1. DistSQL：新增语法以管理 SQL_FEDERATION 规则
2. 代理：支持 Unix 域套接字

### 增强功能

1. 扩展：CDC 支持纯增量模式
2. 扩展：CDC 支持按事务导出数据
3. 扩展：CDC 支持 MySQL 和 PostgreSQL
4. 扩展：CDC 支持单表
5. 扩展：CDC 支持所有 openGauss 数据类型
6. 扩展：CDC 支持复制重新连接
7. 扩展：移除 DataConsistencyCalculateAlgorithmChooser
8. 扩展：提高整数唯一键表库存数据拆分的性能
9. 扩展：调整进程配置默认值以减少资源消耗
10. 扩展：自动刷新迁移的表元数据
11. 扩展：兼容 openGauss 现有复制槽在数据库不存在时的重用
12. 扩展：显示数据一致性检查状态结果应为空当未完成时
13. 扩展：启用源和目标上的并发 CRC32 匹配
14. 扩展：管道作业兼容分片规则审计策略
15. 元数据：重构元数据持久化结构
16. 元数据：优化加载单表元数据的过程
17. 元数据：支持 MySQL/PostgreSQL/openGauss 系统表空查询
18. DistSQL：添加对读写分离规则的 transactionalReadQueryStrategy 支持
19. DistSQL：增强算法属性检查
20. 事务：添加权限检查
21. 事务：移除 TransactionTypeHolder 并仅创建当前事务管理器
22. 解析器：支持 MySQL LOAD DATA 和 LOAD XML 语句与单表或广播表
23. 解析器：改进 MySQL 测试程序测试结果中高优先级 SQL 语句的解析支持
24. 解析器：Oracle 方言解析器现在支持中文逗号
25. 加密：在使用加密功能时支持投影子查询中的加密列查询
26. 内核：为 INSERT、DELETE、UPDATE 和 SELECT 语句添加表存在性元数据检查
27. JDBC：为 ShardingSphereStatement 实现批量执行
28. 代理：前端支持 SSL/TLS
29. 代理：支持 PostgreSQL/openGauss 代理的 Flush 消息
30. 代理：支持 PostgreSQL 代理的数据类型 bit 和 bool

### Bug 修复

1. 扩展：修复管道作业失败状态持久化和使用问题
2. 扩展：修复 CDC DELETE 事件 Record.beforeList 为空的问题
3. 扩展：修复 openGauss mppdb 解码插件单引号问题
4. 扩展：修复作业停止后执行引擎未关闭的问题
5. 扩展：修复任务启动前停止作业的问题
6. 元数据：修复使用 H2 数据库加载架构元数据时的大小写敏感问题
7. 元数据：修复将 PostgreSQL/openGauss 架构名称配置为数据库名称时的 "对象未找到" 异常
8. DistSQL：修复执行 SHOW DIST VARIABLE 时 check_table_metadata_enabled 的错误结果
9. 加密：修复使用 PostgreSQL/openGauss 加密 LIKE 功能时的 SQL 重写异常
10. 分片：支持将空分片条件传递给分片算法以允许用户控制空值路由
11. 解析器：支持 MySQL 投影中的 BETWEEN AND 表达式解析
12. 掩码：修复配置 KEEP_FROM_X_TO_Y 时 from-x 和 to-y 值相同的错误掩码结果
13. 基础设施：修复缺少 pgjdbc 时可能发生的 ClassNotFoundException
14. 代理：修复客户端发送流水线请求时 MySQL 数据包顺序错误的问题

### 变更日志

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/25)
```