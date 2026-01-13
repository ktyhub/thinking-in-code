# pulsar v3.0.4

## 变更内容

### Broker

- [修复][broker] 避免在命名空间被删除时执行 `prepareInitPoliciesCacheAsync` ([#22268](https://github.com/apache/pulsar/pull/22268))
- [修复][broker] 避免在检查过期消息时因账本关闭时间导致未关闭的过期账本 ([#22335](https://github.com/apache/pulsar/pull/22335))
- [修复][broker] 在将游标添加到 `waitingCursors` 之前检查游标状态 ([#22191](https://github.com/apache/pulsar/pull/22191))
- [修复][broker] 关闭因 `dispatcher.consumerList` 和 `dispatcher.consumerSet` 不匹配而卡住的调度器 ([#22270](https://github.com/apache/pulsar/pull/22270))
- [修复][broker] 修复 `OpReadEntry.skipCondition` 空指针异常问题 ([#22367](https://github.com/apache/pulsar/pull/22367))
- [修复][broker] 修复 `ResourceGroup` 本地使用情况报告 ([#22340](https://github.com/apache/pulsar/pull/22340))
- [修复][broker] 修复 `ResourceGroups` 加载问题 ([#21781](https://github.com/apache/pulsar/pull/21781))
- [修复][broker] 修复在处理 `GetSchema` 请求时未设置字段 `topic` 的问题 ([#22377](https://github.com/apache/pulsar/pull/22377))
- [修复][broker] 修复调度器中 `readOnActiveConsumerTask` 的双重检查锁定问题 ([#22279](https://github.com/apache/pulsar/pull/22279))
- [修复][broker] 修复 `dispatcher.consumerList` 和 `dispatcher.consumerSet` 不匹配问题 ([#22283](https://github.com/apache/pulsar/pull/22283))
- [修复][ml] 暴露账本时间戳 ([#22338](https://github.com/apache/pulsar/pull/22338))
- [改进][admin] 修复 `createMissingPartitions` 无法正确响应的问题 ([#22311](https://github.com/apache/pulsar/pull/22311))
- [改进][broker] 为 `RawReader` 构造函数添加 `createTopicIfDoesNotExist` 选项 ([#22264](https://github.com/apache/pulsar/pull/22264))
- [改进][broker] 为命名空间/主题管理端点添加细粒度授权 ([#22309](https://github.com/apache/pulsar/pull/22309))
- [改进][broker] 添加用于缓存追赶读取的缺失配置键 ([#22295](https://github.com/apache/pulsar/pull/22295))
- [改进][broker] 更改日志级别以减少重复日志 ([#22147](https://github.com/apache/pulsar/pull/22147))

### Client

- [修复][client] 因批量消息确认的竞争条件导致消费者丢失消息确认 ([#22353](https://github.com/apache/pulsar/pull/22353))
- [修复][client] 修复按时间戳查找后 `hasMessageAvailable` 和 `readNext` 返回错误结果的问题 ([#22363](https://github.com/apache/pulsar/pull/22363))
- [修复][client] `GenericProtobufNativeSchema` 未实现 `getNativeSchema` 方法 ([#22204](https://github.com/apache/pulsar/pull/22204))
- [修复][client] 创建具有相同主题的消费者时错误信息不明确 ([#22255](https://github.com/apache/pulsar/pull/22255))
- [修复][client] 修复 `Reader.hasMessageAvailable` 在查找到最新位置后可能返回 `true` 的问题 ([#22201](https://github.com/apache/pulsar/pull/22201))
- [修复][client] 修复在同一进程中访问多个集群时获取错误的 `maxMessageSize` 值的问题 ([#22306](https://github.com/apache/pulsar/pull/22306))
- [改进][client] 为 `seek` 添加退避机制 ([#20963](https://github.com/apache/pulsar/pull/20963))

### Pulsar IO 和 Pulsar Functions

- [修复][fn] 启用 Go 函数令牌认证和 TLS ([#20468](https://github.com/apache/pulsar/pull/20468))

### 其他

- [改进][misc] 移除对 `sun InetAddressCachePolicy` 的调用 ([#22329](https://github.com/apache/pulsar/pull/22329))
- [修复][misc] 使 `ConcurrentBitSet` 线程安全 ([#22361](https://github.com/apache/pulsar/pull/22361))
- [修复][ws] 在启动 WebSocket 服务前检查配置的有效性 ([#22231](https://github.com/apache/pulsar/pull/22231))

### 库更新

- [修复][sec] 升级 `jose4j` 到 0.9.4 ([#22273](https://github.com/apache/pulsar/pull/22273))
- [修复][sec] 将 `google.golang.org/grpc` 从 1.38.0 升级到 1.56.3 ([#21444](https://github.com/apache/pulsar/pull/21444))
- [修复][sec] Go Functions 安全更新 ([#21844](https://github.com/apache/pulsar/pull/21844))
- [修复][sec] 升级 `Zookeeper` 到 3.9.2 以解决 [CVE-2024-23944](https://github.com/advisories/GHSA-r978-9m6m-6gm6) ([#22275](https://github.com/apache/pulsar/pull/22275))
- [修复][sec] 升级 `prometheus client_golang` 到 v1.12.2 以修复 [CVE-2022-21698](https://github.com/advisories/GHSA-cg3q-j54f-5p7p) ([#20579](https://github.com/apache/pulsar/pull/20579))
- [修复][build] 升级 `alluxio` 版本到 2.9.3 以修复 [CVE-2023-38889](https://github.com/advisories/GHSA-xrrh-h86w-pwfj) ([#21715](https://github.com/apache/pulsar/pull/21715))
- [改进][misc] 为 `Netty` 包含原生 `epoll` 库以支持 `arm64` ([#22319](https://github.com/apache/pulsar/pull/22319))
- [改进][misc] 在 `pulsar-io/alluxio` 中固定 `Netty` 版本 ([#21728](https://github.com/apache/pulsar/pull/21728))
- [改进][misc] 升级 `Netty` 版本到 4.1.105.Final ([#21923](https://github.com/apache/pulsar/pull/21923))

### 测试与 CI

- [修复][ci] 容忍 CI 中挂载选项更改失败 ([#22241](https://github.com/apache/pulsar/pull/22241))
- [修复][ci][branch-3.0] 将 Maven 的堆大小从 1024m 增加到 1500m
- [修复][test] 修复不稳定的 `ManagedLedgerErrorsTest.recoverAfterZnodeVersionError` 测试 ([#22368](https://github.com/apache/pulsar/pull/22368))
- [修复][test] 修复不稳定的 `RGUsageMTAggrWaitForAllMsgsTest` 测试 ([#22252](https://github.com/apache/pulsar/pull/22252))
- [修复][test] 修复不稳定的 `BrokerServiceAutoSubscriptionCreationTest` 测试 ([#22190](https://github.com/apache/pulsar/pull/22190))
- [修复][test] 修复不稳定的 `ManagedLedgerTest.testGetNumberOfEntriesInStorage` 测试 ([#22344](https://github.com/apache/pulsar/pull/22344))
- [修复][test][branch-3.0] 修复 `ManagedLedgerTest.testGetNumberOfEntriesInStorage` 测试
- [修复][test] 修复具有相同命名空间名称的测试 ([#22240](https://github.com/apache/pulsar/pull/22240))
- [改进][test][branch-3.0] 改进 `ManagedLedgerTest.testGetNumberOfEntriesInStorage`
- [改进][misc] 升级 `checkstyle` 到 10.14.2 ([#22291](https://github.com/apache/pulsar/pull/22291))

欲了解完整列表，请查看[完整变更日志](https://github.com