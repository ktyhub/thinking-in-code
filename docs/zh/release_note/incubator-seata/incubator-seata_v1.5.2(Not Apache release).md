# incubator-seata v1.5.2(Not Apache release)
以下是整理后的内容，并且转换为Markdown格式：

# Seata 1.5.2 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

此次版本更新内容如下：

### 新特性：
- 支持XID一致性负载均衡
- 支持通过挂载SLB暴露Nacos服务
- 支持批量消息并行处理
- 支持 `where` 方法条件（`find_in_set`）

### Bug修复：
- 修复在未使用数据库时 `SeataTCCFenceAutoConfiguration` 出错问题
- 修复 PostgreSQL 控制台模块中 SQL 异常
- 修复 RedisTransactionStoreManager 更新映射时的异常问题
- 修复未配置 `transport.enableRmClientBatchSendRequest` 缓存穿透错误
- 修复命令行参数缺失问题
- 修复跳过锁检查时的错误
- 修复 Oracle 数据库插入值错误
- 修复批量消息发送可能返回 `NullPointException` 问题
- 修复 `AspectTransactional.rollbackForClassName` 设置错误值问题
- 修复 `INSERT_ON_DUPLICATE` SQL 中主键非数字时的SQL异常问题

### 优化：
- 修复部分安全漏洞
- 优化 `branchResultMessageExecutor` 线程池大小
- 优化回滚事务指标
- 优化控制台导航栏
- 修复 `maven-compiler-plugin` 和 `maven-resources-plugin` 执行失败问题
- 分离部署中的库依赖
- 优化 `pom` 描述
- 升级 `logback` 依赖到1.2.9版本
- 支持发布包中集成MySQL8
- 替换 `flatten-maven-plugin` 为 `easyj-maven-plugin` 以修复 `shade` 和 `flatten` 的冲突
- 更新全局会话时检查状态关系
- 使 `EnhancedServiceLoader` 更易读

### 测试：
- 优化 `TransactionContextFilterTest` 中的 `jackson` 依赖
- 修复 `AsyncWorkerTest` 和 `LockManagerTest` 中的单元测试失败问题

我们收到了许多来自社区的宝贵问题和建议，感谢大家的支持。