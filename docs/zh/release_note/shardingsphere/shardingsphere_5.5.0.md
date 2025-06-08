# shardingsphere 5.5.0
```markdown
### API 变更

1. 代理：移除代理中过时的 schemaName 配置。
2. 内核：移除 SQL 解析规则中的 sqlCommentParseEnabled 配置以减少代码复杂性。
3. SQL 解析器：考虑移除 SQL 解析规则中的 sqlCommentParseEnabled 配置。
4. 联邦：为 SQL 联邦添加 allQueryUseSQLFederation 配置。

### Bug 修复

1. 管道：修复提交/回滚迁移任务时未删除相关一致性检查任务的问题。
2. 管道：修复显示一致性检查状态的停止时间显示问题。
3. 代理：在单播后恢复 connectionSession 中的原始 databaseName。
4. 代理：修复在未使用数据库时可以执行 show tables 的问题。
5. 代理：修复单播路由后当前数据库不正确的问题。
6. 代理：修复在使用数据库之前可以执行 show tables 的问题。
7. 读写分离：修复使用影子数据源时的检查异常。
8. 治理：修复在 Etcd 注册中心创建逻辑数据库时的线程阻塞问题。
9. 治理：修复在使用独立模式时注册存储单元和创建功能规则失败的问题。
10. 元数据：修复在创建数据库时未构建数据库系统架构的问题。
11. 元数据：修复系统架构构建规则中的空指针异常（NPE）。
12. SQL 解析器：修复解析 PostgreSQL 列引用时的空指针异常（NPE）。
13. SQL 解析器：修复解析 MySQL 选择窗口语句时的空指针异常（NPE）。
14. 分片：修复在连接大写表时的路由错误。
15. 分片：修复删除大写表名的分片表异常。
16. 分片：修复生成大写列名的键。
17. 联邦：修复在 SQL 联邦中执行 select 1 from dual 时找不到对象 'DUAL' 的异常。
18. 事务：修复在 executeQuery 中的 XA 自动提交。
19. 代理：修复指定数据库名称的多语句问题。

### 增强

1. 管道：提高 CDC 的稳定性和性能。
2. 管道：MemoryPipelineChannel 支持可配置的零队列大小以减少内存消耗。
3. 管道：在模式类型不是集群时显示专用错误。
4. 权限：为用户添加 isSuper 选项。
5. 管道：在取消任务时忽略状态 DistSQL 结果中的错误消息。
6. DistSQL：使用 JSON 格式输出 RQL 中的属性。
7. DistSQL：优化刷新数据库元数据逻辑。
8. DistSQL：SHOW COMPUTE NODES 支持 JDBC 节点。
9. DistSQL：优化刷新数据库元数据的语法。
10. DistSQL：优化 SHOW TABLE METADATA 的输出。
11. 代理：添加 MySQL 预编译参数验证，以避免在 BenchmarkSQL 连接到代理时打开 rewriteBatchedStatements=true，导致代理参数计数超过 65535 时发生 ArrayIndexOutOfBoundsException 异常。
12. SQL 解析器：在解析 distsql 回滚迁移语句时添加 EOF 以抛出异常。
13. SQL 解析器：支持更多 plsql 语句解析并添加 plsql 解析断言逻辑。
14. SQL 解析器：支持解析索引提示。
15. SQL 解析器：支持解析 MySQL 交集组合操作 SQL。
16. SQL 解析器：支持解析 Oracle 的中文空白字符。
17. SQL 解析器：修复 MySQL TimeStampDiff 函数解析。
18. SQL 解析器：修复 SQL Server 不合格的简写解析。
19. SQL 解析器：支持 SQL Server SEARCH 非保留字解析。
20. SQL 解析器：添加 SQL Server MEMBER 非保留字。
21. 绑定器：为 Oracle MergeStatementBinder 添加 ParameterMarkerSegmentBinder 逻辑。
22. 联邦：支持 SQL 联邦中的 MySQL 交叉连接语句。
23. 事务：在 XATransactionCheckPrivilegeFailedException 中添加建议消息。
24. 分片：验证重复的分片实际数据节点。
25. 分片：支持空条件值路由。
26. 代理：修复协议中的 MySQL 客户端多语句选项。

### 新功能

1. DistSQL：查询插件（SPI）实现的新语法。
2. DistSQL：管理 SQL_TRANSLATOR 规则的新语法。

### 重构

1. JDBC：将 shardingsphere-jdbc-core 合并到 shardingsphere-jdbc 模块。
2. 代理：将 server.yaml 重命名为 global.yaml，将 config- 重命名为 database- 并保持与旧配置兼容。
3. 代理：将 `config-xxx.yaml` 重命名为 `database-xxx.yaml`。
4. 代理：优化 MySQLComStmtPrepareExecutor 逻辑。
5. 加密：重构加密接口并添加加密算法元数据。
6. 基础设施：在基础设施中创建新的算法模块，并将 snowflake 和 uuid 移动到该模块。
7. 基础设施：修改 unmarshal 方法以在 yaml 为空时返回默认对象。
8. 基础设施：优化 StandardParameterBuilder 逻辑。
```