# pulsar v3.2.2

## 变更内容

### Broker

- [修复][broker] 避免在命名空间被删除时执行 `prepareInitPoliciesCacheAsync` ([#22268](https://github.com/apache/pulsar/pull/22268))
- [修复][broker] 在检查过期消息时避免未关闭的过期账本 ([#22335](https://github.com/apache/pulsar/pull/22335))
- [修复][broker] 在将游标添加到 `waitingCursors` 之前检查游标状态 ([#22191](https://github.com/apache/pulsar/pull/22191))
- [修复][broker] 关闭由于 `dispatcher.consumerList` 和 `dispatcher.consumerSet` 不匹配而卡住的调度器 ([#22270](https://github.com/apache/pulsar/pull/22270))
- [修复][broker] 修复 `OpReadEntry.skipCondition` 空指针异常问题 ([#22367](https://github.com/apache/pulsar/pull/22367))
- [修复][broker] 修复 `ResourceGroup` 本地使用情况报告 ([#22340](https://github.com/apache/pulsar/pull/22340))
- [修复][broker] 修复 `ResourceGroups` 加载问题 ([#21781](https://github.com/apache/pulsar/pull/21781))
- [修复][broker] 修复处理 `GetSchema` 请求时未设置字段 `topic` 的问题 ([#22377](https://github.com/apache/pulsar/pull/22377))
- [修复][broker] 修复调度器中 `readOnActiveConsumerTask` 的双重检查锁定问题 ([#22279](https://github.com/apache/pulsar/pull/22279))
- [修复][broker] 修复 `dispatcher.consumerList` 和 `dispatcher.consumerSet` 不匹配问题 ([#22283](https://github.com/apache/pulsar/pull/22283))
- [修复][ml] 暴露账本时间戳 ([#22338](https://github.com/apache/pulsar/pull/22338))
- [修复][offload] 修复 `Offload readHandle` 无法多次关闭的问题 ([#22162](https://github.com/apache/pulsar/pull/22162))
- [修复][txn] 修复 `TopicTransactionBuffer` 潜在的线程安全问题 ([#22149](https://github.com/apache/pulsar/pull/22149))
- [改进][admin] 修复 `createMissingPartitions` 无法正确响应的问题 ([#22311](https://github.com/apache/pulsar/pull/22311))
- [改进][broker] 为 `RawReader` 构造函数添加 `createTopicIfDoesNotExist` 选项 ([#22264](https://github.com/apache/pulsar/pull/22264))
- [改进][broker] 为命名空间/主题管理端点添加细粒度授权 ([#22305](https://github.com/apache/pulsar/pull/22305))
- [改进][broker] 为缓存补充读取添加缺失的配置键 ([#22295](https://github.com/apache/pulsar/pull/22295))
- [改进][broker] 支持基于配置创建 `RawReader` ([#22280](https://github.com/apache/pulsar/pull/22280))

### Client

- [修复][client] 由于批量消息确认中的竞争条件导致消费者丢失消息确认 ([#22353](https://github.com/apache/pulsar/pull/22353))
- [修复][client] 当禁用 `allowAutoSubscriptionCreation` 时，不再重试错误的订阅未找到 ([#22164](https://github.com/apache/pulsar/pull/22164))
- [修复][client] 修复按时间戳查找后 `hasMessageAvailable` 和 `readNext` 的错误结果 ([#22363](https://github.com/apache/pulsar/pull/22363))
- [修复][client] `GenericProtobufNativeSchema` 未实现 `getNativeSchema` 方法 ([#22204](https://github.com/apache/pulsar/pull/22204))
- [修复][client] 创建具有相同主题的消费者时错误信息不明确 ([#22255](https://github.com/apache/pulsar/pull/22255))
- [修复][client] 修复 `Reader.hasMessageAvailable` 在查找到最新时可能返回 `true` 的问题 ([#22201](https://github.com/apache/pulsar/pull/22201))
- [修复][client] 修复在同一进程中访问多个集群时获取错误的 `maxMessageSize` 值 ([#22306](https://github.com/apache/pulsar/pull/22306))

### 其他

- [修复][misc] 使 `ConcurrentBitSet` 线程安全 ([#22361](https://github.com/apache/pulsar/pull/22361))
- [改进][misc] 移除对 `sun InetAddressCachePolicy` 的调用 ([#22329](https://github.com/apache/pulsar/pull/22329))
- [修复][ws] 在启动 WebSocket 服务前检查配置的有效性 ([#22231](https://github.com/apache/pulsar/pull/22231))

### 库更新

- [修复][sec] 升级 `jose4j` 到 0.9.4 ([#22273](https://github.com/apache/pulsar/pull/22273))
- [修复][sec] `Go Functions` 安全更新 ([#21844](https://github.com/apache/pulsar/pull/21844))
- [修复][sec] 升级 `Zookeeper` 到 3.9.2 以解决 [CVE-2024-23944](https://github.com/advisories/GHSA-r978-9m6m-6gm6) ([#22275](https://github.com/apache/pulsar/pull/22275))
- [改进][misc] 为 `Netty` 添加 `arm64` 的本地 `epoll` 库 ([#22319](https://github.com/apache/pulsar/pull/22319))
- [改进][misc] 升级 `Netty` 版本到 4.1.105.Final ([#21923](https://github.com/apache/pulsar/pull/21923))

### 测试 & CI

- [修复][ci] 为 `branch-3.2` 启用 CI ([#22287](https://github.com/apache/pulsar/pull/22287))
- [修复][ci] 容忍 CI 中挂载选项更改失败 ([#22241](https://github.com/apache/pulsar/pull/22241))
- [修复][test] 修复不稳定的 `ManagedLedgerErrorsTest.recoverAfterZnodeVersionError` 测试 ([#22368](https://github.com/apache/pulsar/pull/22368))
- [修复][test] 修复不稳定的 `RGUsageMTAggrWaitForAllMsgsTest` 测试 ([#22252](https://github.com/apache/pulsar/pull/22252))
- [修复][test] 修复不稳定的 `BrokerServiceAutoSubscriptionCreationTest` 测试 ([#22190](https://github.com/apache/pulsar/pull/22190))
- [修复][test] 修复不稳定的 `ManagedLedgerTest.testGetNumberOfEntriesInStorage` 测试 ([#22344](https://github.com/apache/pulsar/pull/22344))
- [修复][test] 修复 `TopicPoliciesAuthZTest` 中的线程泄漏问题 ([#22257](https://github.com/apache/pulsar/pull/22257))
- [修复][test][branch-3.2] 修复 `ManagedLedgerTest.testGetNumberOfEntriesInStorage` 测试
- [修复][fn] 修复 `function-go` 测试 ([#22260](https://github.com/apache/pulsar/pull/22260))
- [修复][test] 修复具有相同命名空间名称的测试 ([#22240](https://github.com/apache/pulsar/pull/22240))
- [修复][build] 修复 `pulsar-bom/pom.xml` 中的版本问题并修复 `src/set-project-version.sh`
- [改进][test][branch-3.2] 改进 `ManagedLedgerTest.testGetNumberOfEntriesInStorage`
- [改进][misc] 升级 `checkstyle` 到 10.14.2 ([#22291](https://github.com/apache/pulsar/pull/22291))

完整列表请查看[完整变更日志](https://github.com/apache/pulsar/compare/v3.2.1...v3.2.2)。
```