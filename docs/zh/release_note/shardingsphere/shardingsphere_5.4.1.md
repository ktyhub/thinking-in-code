# shardingsphere 5.4.1
```markdown
### 新功能

1. 代理：支持 dbcp 和 c3p0 连接池
2. 元数据：独立模式适应元数据新结构
3. 治理：治理支持注册实例级数据源

### 增强功能

1. 模式：改进独立模式 JDBC 类型实现，初始化时重置数据
2. 扩展：在管道中隔离 ShardingSphereDataSource 独立存储库
3. 扩展：在管道中禁用系统模式元数据
4. JDBC：将 jdbc 核心 META-INF/services/java.sql.Driver 从测试移至主目录
5. 扩展：在 SHOW MIGRATION CHECK ALGORITHMS DistSQL 结果中添加算法列
6. 扩展：在 SHOW MIGRATION CHECK ALGORITHMS DistSQL 结果中添加 type_aliases 列
7. 加密：为派生列和逻辑列添加重复名称检查
8. 加密：在代理中拒绝对密文列的 DDL 操作
9. 加密：为派生列添加默认类型 varchar(4000)

### Bug 修复

1. 扩展：修复在断点恢复时表名相似导致的获取库存位置不正确的问题
2. 扩展：修复在断点恢复时第一个库存任务完成后 CDC 导入器未启动的问题
3. 单表：修复在 CREATE/DROP 表修改单规则配置时未切换活动版本的问题
4. JDBC：修复 5.4.0 版本中 MySQL 的 JDBC 内存泄漏问题

### 变更日志

1. [里程碑](https://github.com/apache/shardingsphere/milestone/27)
```