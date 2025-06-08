# shardingsphere 5.2.1
```markdown
### 新功能

1. 添加 ShardingSphere 默认系统数据库以支持全局元数据管理
2. 支持异步数据一致性检查
3. 增加对 Consul 治理中心的支持
4. 增加对 Nacos 治理中心的支持
5. 增加治理中心视图功能的支持

### 增强

1. SQL 联邦引擎增加高级执行器并适配 openGauss 数据库
2. 支持在读写分离的读数据库禁用后启动 ShardingSphere Proxy
3. SQL HINT 支持强制分片路由
4. 显示 processlist 支持显示 Proxy 连接（睡眠，活跃）
5. 优化 ShardingSphere-JDBC 数据源配置错误信息
6. ShardingSphere-JDBC 支持 SpringBoot 3.x 版本
7. 支持加载 MySQL、PostgreSQL、openGauss 和 SQLServer 视图元数据
8. 更新 Snakeyaml 到 1.33 并开放 YAML 3MB 限制
9. 尽可能重用缓存连接进行单播分片
10. 支持解析 Oracle 中的 ALTER ROLE
11. 增加对 Oracle 中 ALTER RESOURCE COST 的支持
12. 支持解析 Oracle 中的 Drop Materialized View
13. 支持解析 Oracle 中的 DROP LIBRARY
14. 支持解析 Oracle 中的 DROP JAVA
15. 支持解析 Oracle 中的 DROP PLUGGABLE DATABASE
16. 支持解析 Oracle 中的 DROP INDEX TYPE
17. 支持解析 openGauss 中的 ALTER PACKAGE
18. 支持 openGauss 中 select offset, count 语句解析并移除 PostgreSQL 语法中的无用语法
19. 为 openGauss 语法添加 max_size
20. 优化 alter view/drop view 解析逻辑并修复 alter view 刷新器错误
21. 为 ParseCancellationException 添加 SQL 解析错误详情
22. 增加对 PostgreSQL 中 OptOnConflict 解析的支持
23. 增强对 PostgreSQL 中 ALTER TABLE 和 ALTER VIEW 的支持
24. 在 PostgreSQL 声明语句中添加缺失的关键字
25. 为 MySQL 解析器添加 json 函数支持
26. ShardingSphere-Proxy 在 Docker 环境中自动适应 cgroup 内存限制
27. 显示迁移状态 DistSQL 响应新增的 error_message 列
28. 显示迁移状态响应新增的 processed_records_count 列
29. 支持 MySQL 8 增量转储中的 caching_sha2_password 认证
30. 改进删除管道过程配置
31. 支持唯一键表迁移
32. 支持将表迁移到新名称表
33. 改进管道任务和运行器中的线程池使用
34. 支持可取消的数据一致性检查
35. DistSQL：在创建或修改读写分离规则时检查重复的写或读资源
36. DistSQL：为 `ALTER SHARDING BINDING TABLE RULES` 添加有效性检查
37. 独立模式 H2 支持持久化元数据
38. 修复 openGauss 在 xa 事务中执行游标的问题
39. 增加与事务相关的异常

### Bug 修复

1. 重写时为 PostgreSQL 生成正确的占位符
2. 修复 openGauss 更新集解析异常
3. 修复执行带负值的插入语句时的解析异常
4. 修复 OracleDataSourceMetaData 中错误的 connectDescriptorUrlPattern
5. 修复在特殊规则下分片重写后的插入 SQL 乱码
6. 修复执行 `select * from information_schema.tables` 时的异常
7. 修复执行 `alter view rename` 时的异常
8. 修复 PostgreSQL 使用 rolsuper 时检查数据源权限的问题
9. DistSQL：修复在没有资源时 `REFRESH TABLE METADATA` 的 NPE
10. 修复修改规则时未修改的表元数据
11. 修复数据库发现问题
12. 修复 MySQL.NORMAL_REPLICATION 算法无法找到主节点的问题
13. 修复使用 etcd 构建集群事件未感知的问题
14. 修复未创建事务管理时发生的 NPE
15. 修复当 InlineShardingAlgorithm 算法的分片值超过 Integer 时发生的路由异常

### API 变更

1. SQL HINT 语法格式调整为 SQL 风格格式
2. DistSQL：移除 `COUNT DATABASE RULES` 语法
3. ShardingSphere 模式移除覆盖配置
4. 代理：优化 agent.yaml 配置

### 变更日志

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/21)
```