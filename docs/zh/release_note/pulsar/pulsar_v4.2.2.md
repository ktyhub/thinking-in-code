---
title: "pulsar v4.2.2"
project: "pulsar"
repo: "apache/pulsar"
tag: "v4.2.2"
published: "2026-06-08"
type: "patch"
lang: "zh"
summary: "[修复][秒] 将 org.asynchttpclient:async-http-client 从 2.14.5 提升到 2.15.0 (#25818)；[修复][秒] 将 commons-configuration2 升级到 2.15.0 以解决 CVE-2026-45205 (#25844)；[修复][秒]将 Netty 升级到 4.1.133.Final 以解决 CVE (#25670)"
---

# pulsar v4.2.2

#### 2026-06-08

### 库更新

- [修复][秒] 将 org.asynchttpclient:async-http-client 从 2.14.5 提升到 2.15.0 ([#25818](https://github.com/apache/pulsar/pull/25818))
- [修复][秒] 将 commons-configuration2 升级到 2.15.0 以解决 CVE-2026-45205 ([#25844](https://github.com/apache/pulsar/pull/25844))
- [修复][秒]将 Netty 升级到 4.1.133.Final 以解决 CVE ([#25670](https://github.com/apache/pulsar/pull/25670))
- [改进][杂项]将 Netty 升级到 4.1.134 ([#25870](https://github.com/apache/pulsar/pull/25870))
- [修复][秒]将 Netty 升级到 4.1.135.Final 以解决多个 CVE ([#25918](https://github.com/apache/pulsar/pull/25918))
- [修复][秒] 将 thrift 升级到 0.23.0 以解决 CVE-2026-43869 ([#25744](https://github.com/apache/pulsar/pull/25744))
- [修复][秒]将 vert.x 升级到 4.5.25 以解决 CVE-2026-6860 ([#25737](https://github.com/apache/pulsar/pull/25737))
- [修复][秒] 将 vertx 升级到 4.5.27 以解决 CVE-2026-6860 ([#25745](https://github.com/apache/pulsar/pull/25745))
- [改进][杂项]将 vert.x 升级到 4.5.28 ([#25924](https://github.com/apache/pulsar/pull/25924))
- [改进][构建] 删除 kotlin-stdlib 覆盖；升级 okhttp3 5.3.2 和 okio 3.17.0 ([#25855](https://github.com/apache/pulsar/pull/25855))
- [改进][构建]将 org.apache.kerby:kerb-simplekdc 从 1.1.1 升级到 2.1.1 ([#25785](https://github.com/apache/pulsar/pull/25785))
- [改进][杂项]将 Jetty 升级到 12.1.9 ([#25752](https://github.com/apache/pulsar/pull/25752))
- [改进][杂项]将 Jetty 升级到 12.1.10 ([#25943](https://github.com/apache/pulsar/pull/25943))
- [改进][杂项]将咖啡因升级到 3.2.4 ([#25663](https://github.com/apache/pulsar/pull/25663))

### 经纪人

- [修复][broker] 清理 BookkeeperSchemaStorage 中并发初始模式创建时的孤儿账本 ([#25514](https://github.com/apache/pulsar/pull/25514))
- [修复][broker] 关闭 BacklogQuotaManager 中待处理的 acks 清理间隙（[#25624](https://github.com/apache/pulsar/pull/25624)）
- [修复][经纪人] ConcurrentLongHashMap 抛出 ArrayIndexOutOfBoundsException ([#25644](https://github.com/apache/pulsar/pull/25644))
- [修复][broker]更正了跟踪器代码中的两个竞争条件以及 InMemoryDelayedDeliveryTracker 中因 NoSuchElementException 失败的逻辑错误（[#25681](https://github.com/apache/pulsar/pull/25681)）
- [修复][broker]当removeAllUpTo删除挂起的ack时减少未确认的计数器（[#25581](https://github.com/apache/pulsar/pull/25581)）
- [fix][broker] 修复压缩游标重置可能会丢失标记删除属性 ([#25862](https://github.com/apache/pulsar/pull/25862))
- [修复][broker]修复 ManagedLedgerImpl.advanceCursorsIfNecessary() 方法可能会在竞争条件下丢失非持久游标属性 ([#25796](https://github.com/apache/pulsar/pull/25796))
- [修复][broker]修复主题压缩期间未删除的非批量空值消息（[#25817](https://github.com/apache/pulsar/pull/25817)）
- [fix][broker] 修复 PersistentMessageExpiryMonitor findEntryComplete() 方法可能会在竞争条件下丢失标记删除属性 ([#25803](https://github.com/apache/pulsar/pull/25803))
- [修复][broker]通过用 DoubleAdder 替换 LongAdder 来修复 DataSketchesSummaryLogger 中的精度损失以进行总和累加 ([#25594](https://github.com/apache/pulsar/pull/25594))
- [修复][broker] 修复 PulsarService.closeAsync，其中 Condition.signalAll 在不持有锁的情况下被调用（[#25777](https://github.com/apache/pulsar/pull/25777)）
- [修复][经纪人]修复了 redeliverUnacknowledgedMessages 中待处理的确认删除中的竞争（[#25589](https://github.com/apache/pulsar/pull/25589)）
- [修复][经纪人]修复 SharedConsumerAssignor 允许跟踪中卡住的块 ([#25620](https://github.com/apache/pulsar/pull/25620))
- [修复][broker] 合并代理卸载额外配置 ([#25736](https://github.com/apache/pulsar/pull/25736))
- [修复][broker] 将挂起的确认清理移至选定的标记删除回调（[#25592](https://github.com/apache/pulsar/pull/25592)）
- [修复][broker] 竞争条件导致内部主题永久积压 ([#25572](https://github.com/apache/pulsar/pull/25572))
- [修复][经纪人]跳过受隔离/关闭主题的积压配额驱逐（[#25684](https://github.com/apache/pulsar/pull/25684)）
- [修复][代理]对额外配置使用有效的卸载策略（[#25781](https://github.com/apache/pulsar/pull/25781)）
- [修复][经纪人]重试之前等待孤立模式分类账清理（[#25579](https://github.com/apache/pulsar/pull/25579)）
- [修复][broker][修复][broker]当集群是单向复制的目标集群时，复制统计信息为空（[#25583](https://github.com/apache/pulsar/pull/25583)）
- [修复][broker]由于无法读取条目，复制被卡住 ([#25625](https://github.com/apache/pulsar/pull/25625))
- [修复][bk] 当策略类不匹配时，修复IsolatedBookieEnsemblePlacementPolicy 中的 NPE ([#25825](https://github.com/apache/pulsar/pull/25825))
- [修复][元]修复 PulsarZooKeeperClient 异步 addWatch 回调重试行为 ([#25913](https://github.com/apache/pulsar/pull/25913))
- [修复][元]修复 PulsarZooKeeperClient.clientCreator 中的 ZooKeeper 会话重新连接竞争条件 ([#25910](https://github.com/apache/pulsar/pull/25910))
- [改进][broker]优化namespaceBundle验证以修复卸载整个命名空间期间单线程100% CPU的问题([#25626](https://github.com/apache/pulsar/pull/25626))
- [改进][代理]防止终止后陈旧的复制器挂起读取（[#25767](https://github.com/apache/pulsar/pull/25767)）
- [改进][卸载]合并自动卸载触发器以减少重试循环和账本扫描（[#25793](https://github.com/apache/pulsar/pull/25793)）
- [修复][broker][branch-4.2] Txn 待确认主题中的 URL 编码子名称 [#25727](https://github.com/apache/pulsar/pull/25727) ([#25728](https://github.com/apache/pulsar/pull/25728))

### Client

- [修复][client] 在没有类加载器的情况下解码模式时应用 Avro 逻辑类型转换 ([#25759](https://github.com/apache/pulsar/pull/25759))
- [修复][client] 使用 ack 超时退避取消订阅主题时清理未确认的消息 ([#25916](https://github.com/apache/pulsar/pull/25916))
- [修复][client] 修复由于以下错误而无法关闭消费者：参数内存大小为负值 ([#25805](https://github.com/apache/pulsar/pull/25805))
- [修复][client] 使 ClientBuilder 可序列化 ([#25730](https://github.com/apache/pulsar/pull/25730)) ([#25739](https://github.com/apache/pulsar/pull/25739))
- [修复][client]删除未确认消息时匹配逻辑主题（[#25921](https://github.com/apache/pulsar/pull/25921)）
- [修复][client] 在 FieldParser 映射值中保留等于 ([#25907](https://github.com/apache/pulsar/pull/25907))
- [修复][client] 防止重复的 ServiceUrlProvider 初始化 ([#25899](https://github.com/apache/pulsar/pull/25899))
- [修复][client] 在 SameAuthParamsLookupAutoClusterFailover 中恢复时重置较高索引状态 ([#25826](https://github.com/apache/pulsar/pull/25826))
- [修复][client] 针对并发入队/获取稳定scaleReceiverQueueHint ([#25578](https://github.com/apache/pulsar/pull/25578))
- [修复][client]如果关闭状态正在注册模式的生产者，则代理端生产者句柄泄漏（[#25725](https://github.com/apache/pulsar/pull/25725)）
- [改进][client] 当 ackReceiptEnabled=false 时，尽力重试单个/批量索引确认发送失败（[#25525](https://github.com/apache/pulsar/pull/25525)）
- [改进][client] 在多主题使用者中删除主题时清理未确认的消息跟踪器 ([#25923](https://github.com/apache/pulsar/pull/25923))
- [改进][client] 为 AuthenticationOAuth2 实现 tls_client_auth ([#25538](https://github.com/apache/pulsar/pull/25538))
- [改进][client] 如果存在消息丢失风险，请将日志级别调整为错误 ([#25854](https://github.com/apache/pulsar/pull/25854))

### Pulsar IO 和 Pulsar 函数

- [fix][fn] 修复以 http url 形式提供工件的功能更新问题 ([#25840](https://github.com/apache/pulsar/pull/25840))
- [fix][fn] 修复 Go 函数运行时以在用户异常后继续并添加 neg-ack 测试 ([#25867](https://github.com/apache/pulsar/pull/25867))
- [fix][fn] 修复 WorkerUtils.createExclusiveProducerWithRetry 中创建超时的孤儿独占生产者 ([#25942](https://github.com/apache/pulsar/pull/25942))
- [改进][fn] 获取死进程运行时状态时避免 gRPC 超时 ([#25819](https://github.com/apache/pulsar/pull/25819))
- [改进][fn]使内置连接器重新加载增量([#25773](https://github.com/apache/pulsar/pull/25773))
- [改进][fn]使内置函数重新加载增量([#25868](https://github.com/apache/pulsar/pull/25868))
- [重构][fn] 对于连接器/函数 API 类型使用 Map 而不是 TreeMap ([#25790](https://github.com/apache/pulsar/pull/25790))
- [改进][功能]允许在 Function Worker 中自定义 Kubernetes 服务域后缀 ([#25872](https://github.com/apache/pulsar/pull/25872))

### 其他

- [修复][代理]当管理代理遵循带有正文的请求的代理重定向时，避免间歇性 502 ([#25919](https://github.com/apache/pulsar/pull/25919))
- [修复][代理]连接失败时关闭通道 ([#25770](https://github.com/apache/pulsar/pull/25770))
- [改进][cli] 在“pulsar-admin主题分析积压”cli中添加client侧循环以避免潜在的HTTP调用超时([#25126](https://github.com/apache/pulsar/pull/25126))

### 测试和 CI

- [修复][测试] 在 ResendRequestTest.testSharedSingleAckedPartitionedTopic 中添加初始接收超时 ([#25828](https://github.com/apache/pulsar/pull/25828))
- [修复][测试] 修复不稳定的 ExtensibleLoadManagerImplTest.testLoadBalancerServiceUnitTableViewSyncer ([#25596](https://github.com/apache/pulsar/pull/25596))
- [修复][测试] 修复不稳定的 OneWayReplicatorDeduplicationTest.testDeduplication ([#25679](https://github.com/apache/pulsar/pull/25679))
- [修复][测试] 修复不稳定的 ProducerCleanupTest 计时器清理 ([#25864](https://github.com/apache/pulsar/pull/25864))
- [修复][测试] 修复不稳定的 PulsarFunctionTlsTest.testFunctionsCreation() 测试 ([#25889](https://github.com/apache/pulsar/pull/25889))
- [修复][测试] 修复不稳定的 ResendRequestTest.testSharedSingleAckedPartitionedTopic() 测试 ([#25852](https://github.com/apache/pulsar/pull/25852))
- [修复][测试] 修复不稳定的 SameAuthParamsLookupAutoClusterFailoverTest.testAutoClusterFailover() 测试 ([#25892](https://github.com/apache/pulsar/pull/25892))
- [修复][测试] 修复不稳定的 testGetExcludedBookiesWithIsolationGroups ([#25640](https://github.com/apache/pulsar/pull/25640))
- [修复][测试] 修复 NonPersistentTopicTest 中不稳定的 testMsgDropStat ([#25426](https://github.com/apache/pulsar/pull/25426))
- [修复][测试]使 NamespacesTest.cleanupAfterMethod 能够容忍短暂的基础设施故障（[#25641](https://github.com/apache/pulsar/pull/25641)）
- [修复][测试]减少 testLoadBalancerServiceUnitTableViewSyncer 中的不稳定（[#25638](https://github.com/apache/pulsar/pull/25638)）
- [修复][测试] 稳定 testSecondaryIsolationGroupsBookiesNegative() 测试 ([#25900](https://github.com/apache/pulsar/pull/25900))
- [修复][测试]稳定WebService速率限制测试([#25866](https://github.com/apache/pulsar/pull/25866))
- [改进][测试]将diskUsageThreshold设置为0.999进行测试以有效禁用检查([#25677](https://github.com/apache/pulsar/pull/25677))
- [修复][测试][分支-4.2] 修复 PersistentMessageExpiryMonitorTest

如需完整列表，请查看[完整 changelog](https://github.com/apache/pulsar/compare/v4.2.1...v4.2.2)。

---

> 📦 仓库：[apache/pulsar](https://github.com/apache/pulsar) · 🏷️ 版本：`v4.2.2` · 📅 发布：2026-06-08 · [查看英文原版 Release](https://github.com/apache/pulsar/releases/tag/v4.2.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
