# incubator-seata v1.5.2

# Seata 1.5.2 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

该版本更新如下：

### 新特性：

- [#4661](https://github.com/seata/seata/pull/4713) 支持 xid 一致性负载均衡
- [#4676](https://github.com/seata/seata/pull/4676) 支持服务器通过挂载 SLB 暴露 Nacos 服务
- [#4642](https://github.com/seata/seata/pull/4642) 支持批量消息并行处理
- [#4567](https://github.com/seata/seata/pull/4567) 支持 where 方法条件（find_in_set）

### Bug 修复：

- [#4515](https://github.com/seata/seata/pull/4515) 修复数据库未使用时 SeataTCCFenceAutoConfiguration 的错误
- [#4661](https://github.com/seata/seata/pull/4661) 修复 PostgreSQL 模块控制台中的 SQL 异常
- [#4682](https://github.com/seata/seata/pull/4682) 修复 RedisTransactionStoreManager 在迭代期间更新 map 的异常
- [#4678](https://github.com/seata/seata/pull/4678) 修复未配置时 key transport.enableRmClientBatchSendRequest 缓存穿透的错误
- [#4701](https://github.com/seata/seata/pull/4701) 修复缺失的命令行参数
- [#4607](https://github.com/seata/seata/pull/4607) 修复跳过锁检查的错误
- [#4696](https://github.com/seata/seata/pull/4696) 修复 Oracle 数据库插入值的问题
- [#4726](https://github.com/seata/seata/pull/4726) 修复批量消息发送可能返回 NullPointException 的问题
- [#4729](https://github.com/seata/seata/pull/4729) 修复设置 AspectTransactional.rollbackForClassName 错误值的问题
- [#4653](https://github.com/seata/seata/pull/4653) 修复 INSERT_ON_DUPLICATE SQL 中主键为非数字时的 SQL 异常

### 优化：

- [#4650](https://github.com/seata/seata/pull/4650) 修复一些安全漏洞
- [#4670](https://github.com/seata/seata/pull/4670) 优化 branchResultMessageExecutor 的线程池大小
- [#4662](https://github.com/seata/seata/pull/4662) 优化回滚事务指标
- [#4693](https://github.com/seata/seata/pull/4693) 优化控制台导航栏
- [#4700](https://github.com/seata/seata/pull/4700) 修复 maven-compiler-plugin 和 maven-resources-plugin 执行失败的问题
- [#4711](https://github.com/seata/seata/pull/4711) 分离部署的库依赖
- [#4720](https://github.com/seata/seata/pull/4720) 优化 pom 描述
- [#4728](https://github.com/seata/seata/pull/4728) 升级 logback 依赖到 1.2.9
- [#4745](https://github.com/seata/seata/pull/4745) 支持发布包中的 mysql8
- [#4626](https://github.com/seata/seata/pull/4626) 用 easyj-maven-plugin 替换 flatten-maven-plugin 以修复 shade 和 flatten 之间的冲突
- [#4629](https://github.com/seata/seata/pull/4629) 更新全局会话时检查前后状态的关系
- [#4662](https://github.com/seata/seata/pull/4662) 使 EnhancedServiceLoader 更易读

### 测试：

- [#4544](https://github.com/seata/seata/pull/4544) 优化 TransactionContextFilterTest 中的 jackson 依赖
- [#4731](https://github.com/seata/seata/pull/4731) 修复 AsyncWorkerTest 和 LockManagerTest 中的 UT 失败

感谢以下贡献者的代码提交。如有遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [pengten](https://github.com/pengten)
- [YSF-A](https://github.com/YSF-A)
- [tuwenlin](https://github.com/tuwenlin)
- [Ifdevil](https://github.com/Ifdevil)
- [wingchi-leung](https://github.com/wingchi-leung)
- [liurong](https://github.com/robynron)
- [opelok-z](https://github.com/opelok-z)
- [a364176773](https://github.com/a364176773)
- [2129zxl](https://github.com/2129zxl)
- [Smery-lxm](https://github.com/Smery-lxm)
- [doubleDimple](https://github.com/doubleDimple)
- [wangliang181230](https://github.com/wangliang181230)
- [Bughue](https://github.com/Bughue)
- [AYue-94](https://github.com/AYue-94)
- [lingxiao-wu](https://github.com/lingxiao-wu)
- [caohdgege](https://github.com/caohdgege)

同时，我们也收到了来自社区的许多宝贵问题和建议。感谢大家。
```