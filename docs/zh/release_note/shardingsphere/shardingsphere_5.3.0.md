# shardingsphere 5.3.0
```markdown
### API 变更

1. DistSQL: 重构语法 API，请参考用户手册
2. Proxy: 更改全局规则的配置样式，移除感叹号
3. Proxy: 允许零配置启动，当没有权限配置时启用默认账户 root/root
4. Proxy: 移除默认的 logback.xml，使用 API 初始化
5. JDBC: 移除 Spring 配置，改用 Driver + YAML 配置

### 增强功能

1. DistSQL: 新增语法 REFRESH DATABASE METADATA，刷新逻辑数据库元数据
2. Kernel: 支持 DistSQL REFRESH DATABASE METADATA 从治理中心加载配置并重建 MetaDataContext
3. 支持 postgresql/openGauss 设置事务隔离级别
4. Scaling: 增加库存任务进度更新频率
5. Scaling: DATA_MATCH 一致性检查支持断点续传
6. Scaling: 支持通过 DistSQL 删除一致性检查任务
7. Scaling: 在任务列表 DistSQL 响应中将列名从 sharding_total_count 重命名为 job_item_count
8. Scaling: 在增量任务 SQL 中添加分片列以避免广播路由
9. Scaling: 在生成 SQL 时可以更新分片列
10. Scaling: 改进 DATA_MATCH 一致性检查的列值读取器
11. DistSQL: 优化加密 DistSQL 语法，支持 like 查询算法
12. DistSQL: 在 REGISTER STORAGE UNIT 时添加属性值检查
13. DistSQL: 在 DROP RULE 时同时移除无用的算法
14. DistSQL: EXPORT DATABASE CONFIGURATION 支持广播表
15. DistSQL: REGISTER STORAGE UNIT 支持异构数据源
16. Encrypt: 支持 Encrypt LIKE 功能
17. 执行跨多个分片的 DML 语句时自动启动分布式事务
18. Kernel: 支持 PostgreSQL 和 openGauss 的客户端 \d
19. Kernel: 支持当列包含空值时的 select group by, order by 语句
20. Kernel: 支持解析 PostgreSQL/openGauss Insert 的 RETURNING 子句
21. Kernel: SQL HINT 性能提升
22. Kernel: 支持解析 mysql case when then 语句
23. Kernel: 支持数据源级别的异构数据库网关
24. (实验) Sharding: 添加分片缓存插件
25. Proxy: 支持更多 PostgreSQL 日期时间格式
26. Proxy: 支持 MySQL COM_RESET_CONNECTION
27. Scaling: 改进 MySQLBinlogEventType.valueOf 以支持未知事件类型
28. Kernel: 支持联邦中的 case when

### Bug 修复

1. Scaling: 修复在删除任务时创建的屏障节点
2. Scaling: 修复在 DATA_MATCH 一致性检查中部分列值可能被忽略的问题
3. Scaling: 修复一致性检查中 jdbc url 参数未更新的问题
4. Scaling: 修复表分片算法类型 INLINE 区分大小写的问题
5. Scaling: 修复 MySQL 增量任务需要 mysql 系统数据库权限的问题
6. Proxy: 修复在没有存储节点时执行 select SQL 的 NPE 问题
7. Proxy: 支持在单播场景中进行 DATABASE_PERMITTED 权限验证
8. Kernel: 修复 show compute nodes 中 worker-id 的错误值
9. Kernel: 修复当可读数据源数量与权重算法的权重配置不相等时的路由错误
10. Kernel: 修复多个读写分离组引用相同负载均衡器名称时负载均衡器失效的问题
11. Kernel: 修复无法禁用和启用计算节点的问题
12. JDBC: 修复在 ShardingSphereDriver 集群模式下启动时数据源关闭的问题
13. Kernel: 修复当绑定表的逻辑表名与实际表名部分一致时的错误重写结果
14. Kernel: 修复在未配置规则的情况下使用 SpringBoot 启动时的异常
15. Encrypt: 修复 Encrypt 值为空时的空指针异常
16. Kernel: 修复 oracle 解析不支持 varchar2 指定类型的问题
17. Kernel: 修复事务中序列标志判断错误
18. Kernel: 修复由于 wasNull 变化导致的游标获取错误
19. Kernel: 修复刷新元数据时的 alter transaction rule 错误
20. Encrypt: 修复在 Encrypt 场景下执行调用过程语句时出现的 EncryptRule 转换为 TransparentRule 异常
21. Encrypt: 修复由简写投影中的 ExpressionProjection 引起的异常
22. Proxy: 修复 PostgreSQL Proxy int2 负值解码不正确的问题
23. Proxy: PostgreSQL/openGauss 支持描述插入返回子句
24. Proxy: 修复连接 Proxy 时 gsql 3.0 可能卡住的问题
25. Proxy: 修复在 Proxy 后端检查 SQL 时参数丢失的问题
26. Proxy: 启用 MySQL Proxy 编码大包
27. Kernel: 修复 oracle 解析注释时没有空格的问题
28. DistSQL: 修复加密表的 show create table

### 重构

1. Scaling: 在生成 SQL 时如果是 SQL 关键字则反转表名和列名
2. Scaling: 改进增量任务失败处理
3. Kernel: 治理中心节点调整，统一驼峰为下划线

### 变更日志

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/22)
```