---
title: "pulsar v4.2.3"
project: "pulsar"
repo: "apache/pulsar"
tag: "v4.2.3"
published: "2026-07-06"
type: "patch"
lang: "zh"
---

# pulsar v4.2.3

#### 2026-07-06

### 向后移植的 PIP

- [feat][pip] PIP-469：遗留主题策略后端路由和元数据存储主题策略（[#25547](https://github.com/apache/pulsar/pull/25547)）

### 库更新

- [修复][秒] 在 /pulsar-function-go 中将 github.com/go-jose/go-jose/v4 从 4.1.3 映射到 4.1.4 ([#26142](https://github.com/apache/pulsar/pull/26142))
- [修复][秒] 将 jline 升级到 4.2.1，将 picocli 升级到 4.7.7，删除未使用的 jline2 ([#26068](https://github.com/apache/pulsar/pull/26068))
- [修复][秒] 将 pulsar-function-go 中的 pulsar-client-go 升级到 v0.20.0，同时解决 CVE ([#26140](https://github.com/apache/pulsar/pull/26140))
- [改进][fn] 将 pulsar-client-python 升级到 3.12.0 ([#26033](https://github.com/apache/pulsar/pull/26033))
- [改进][fn] 将 pulsar-client-python 升级到 3.13.0 ([#26139](https://github.com/apache/pulsar/pull/26139))
- [改进][杂项]升级 Apache Commons 库和 Apache Http 组件 ([#25963](https://github.com/apache/pulsar/pull/25963))
- [修复][秒][分支-4.2] 将 Jackson 版本升级到 2.18.8 ([#26099](https://github.com/apache/pulsar/pull/26099))
- [改进][元]将 Oxia client 升级到 0.8.0 ([#25964](https://github.com/apache/pulsar/pull/25964))
- [修复][构建][分支-4.2] 将 docker/setup-qemu-action 升级到 v4.1.0

### 经纪人

- [修复][代理]避免在订阅时将消费者附加到迁移的非持久主题（[#26075](https://github.com/apache/pulsar/pull/26075)）
- [修复][代理]重定向迁移的生产者/消费者时避免阻止在 IO 线程上读取元数据（[#26051](https://github.com/apache/pulsar/pull/26051)）
- [修复][代理]避免阻塞每个包元数据读取的包吞吐量查找（[#26054](https://github.com/apache/pulsar/pull/26054)）
- [修复][经纪人]避免在延迟交付跟踪器关闭时阻塞调度程序关闭路径（[#26053](https://github.com/apache/pulsar/pull/26053)）
- [修复][broker]不要让正在关闭的主题策略读取器中止并发缓存初始化重新加载（[#26132](https://github.com/apache/pulsar/pull/26132)）
- [修复][broker]不要让卡住或中止的主题策略缓存初始化使命名空间的主题不可加载（[#26025](https://github.com/apache/pulsar/pull/26025)）
- [修复][broker]负载均衡器配置错误时快速失败，而不是回退到 SimpleLoadManagerImpl ([#26031](https://github.com/apache/pulsar/pull/26031))
- [修复][broker]修复压缩读取可能会永远卡住或由于光标标记删除而导致消息丢失([#25998](https://github.com/apache/pulsar/pull/25998))
- [修复][broker]修复压缩过程中强制主题/命名空间删除挂起或失败的问题 ([#26016](https://github.com/apache/pulsar/pull/26016))
- [修复][代理]修复当压缩读取器重新连接停止时强制主题/命名空间删除仍然挂起的问题（[#26026](https://github.com/apache/pulsar/pull/26026)）
- [修复][代理]修复发布到远程集群失败后异地复制卡住的问题 ([#26002](https://github.com/apache/pulsar/pull/26002))
- [修复][代理]修复当光标倒带跳过正在进行的读取时复制停止的问题 ([#26106](https://github.com/apache/pulsar/pull/26106))
- [修复][代理]修复复制器在速率限制器限制下卡住的问题，并在默认读取路径上尊重 readBatchSize/maxReadSizeBytes ([#26005](https://github.com/apache/pulsar/pull/26005))
- [修复][broker] 修复 ServiceUnitStateTableViewSyncer 中的表视图分歧，导致测试不稳定 ([#25946](https://github.com/apache/pulsar/pull/25946))
- [修复][broker] 初始化失败后转发主题策略更新 ([#26110](https://github.com/apache/pulsar/pull/26110))
- [修复][broker]保护 BucketDelayedDeliveryTracker.nextDeliveryTime 防止空队列（[#26080](https://github.com/apache/pulsar/pull/26080)）
- [修复][broker]防止订阅速率限制导致压缩停止和阻止强制删除（[#26015](https://github.com/apache/pulsar/pull/26015)）
- [修复][broker]使用缓冲侦听器包装器防止主题策略初始化竞争（[#26044](https://github.com/apache/pulsar/pull/26044)）
- [修复][broker] 对主题策略更新路径运行消息过期检查 ([#26040](https://github.com/apache/pulsar/pull/26040))
- [修复][broker] 在主题排序执行器上运行主题策略通知 ([#26042](https://github.com/apache/pulsar/pull/26042))
- [修复][broker]如果复制仍处于活动状态，则不触发主题 GC ([#25915](https://github.com/apache/pulsar/pull/25915))
- [修复][元]在选举周期中保留领导者值并使领导者读取权威（[#26000](https://github.com/apache/pulsar/pull/26000)）
- [修复][元]在元数据存储侦听器线程中运行分类帐复制不足通知回调（[#26065](https://github.com/apache/pulsar/pull/26065)）
- [改进][broker]通过循环求和条目字节来提高调度性能（[#26055](https://github.com/apache/pulsar/pull/26055)）
- [改进][代理]在非持久主题加载上加载主题策略并控制策略重播（[#26134](https://github.com/apache/pulsar/pull/26134)）
- [改进][broker]删除分类帐时修剪孤立的存储桶快照（[#25984](https://github.com/apache/pulsar/pull/25984)）
- [feat][broker]通过主题内部统计信息公开托管账本属性（[#26079](https://github.com/apache/pulsar/pull/26079)）
- [feat][broker] PIP-469：遗留主题策略后端路由和元数据存储主题策略（[#25707](https://github.com/apache/pulsar/pull/25707)）
- [修复][broker]修复延迟消息因 isDelayedDeliveryDeliverAtTimeStrict=true 而停止的问题 ([#26012](https://github.com/apache/pulsar/pull/26012))
- [修复][ml] 修复驱逐触发竞赛，清除正在进行的标记（[#25988](https://github.com/apache/pulsar/pull/25988)）
- [修复][ml] recycling RangeCacheEntryWrapper 时重置 messageMetadataInitialized ([#25987](https://github.com/apache/pulsar/pull/25987))

### Client

- [修复][client] 在 Netty 事件循环线程中运行故障转移运行状况探测 ([#26064](https://github.com/apache/pulsar/pull/26064))
- [修复][client] 当 DNS 解析器关闭失败时，防止 client 关闭泄漏事件循环线程 ([#26045](https://github.com/apache/pulsar/pull/26045))

### Pulsar IO 和 Pulsar 函数

- [修复][fn] 使 FunctionMetaDataManager 中的 ExclusiveLeaderProducer 易失性 ([#26046](https://github.com/apache/pulsar/pull/26046))
- [修复][fn]重新排序功能工作线程关闭以在运行时管理器之前停止调度程序（[#26136]（https://github.com/apache/pulsar/pull/26136））

### 其他

- [修复][代理]避免阻塞冷代理缓存上的代理 IO 线程（[#26052](https://github.com/apache/pulsar/pull/26052)）
- [修复] 功能：在消费者事件侦听器线程上运行工作领导者选举 ([#26059](https://github.com/apache/pulsar/pull/26059))

### 测试和 CI

- [修复][测试]通过重试强制删除命名空间来 Deflake TopicPoliciesTest.setupTestTopic ([#25974](https://github.com/apache/pulsar/pull/25974))
- [修复][测试] 修复不稳定的 AuditorBookieTest.testBookieClusterRestart ([#26122](https://github.com/apache/pulsar/pull/26122))
- [修复][测试] 通过在initializeState中重新提供通道主题来修复不稳定的ExtensibleLoadManagerImplTest ([#25976](https://github.com/apache/pulsar/pull/25976))
- [修复][测试] 通过恢复楔入通道所有权来修复不稳定的 ExtensibleLoadManagerImplTest.initializeState ([#25977](https://github.com/apache/pulsar/pull/25977))
- [修复][测试] 修复并发 Mockito 存根导致的片状 PersistentTopicsTest 设置 ([#26083](https://github.com/apache/pulsar/pull/26083))
- [修复][测试] 修复不稳定的 SchemaServiceTest.testSchemaRegistryMetrics ([#25645](https://github.com/apache/pulsar/pull/25645))
- [修复][测试] 修复不稳定的 testPrepareInitPoliciesCacheAsyncThrowExceptionAfterCreateReader ([#26049](https://github.com/apache/pulsar/pull/26049))
- [修复][测试] 使 SameAuthParamsLookupAutoClusterFailoverTest 对时间不那么敏感 ([#25675](https://github.com/apache/pulsar/pull/25675))
- [修复][测试]在调用者提供的执行器上运行 makeReadEntryProbFail 的 errorOrNot ([#26123](https://github.com/apache/pulsar/pull/26123))
- [改进][测试]添加测试：test/testTopicPartitionCannotBeCreatedAfterTopicDeleted ([#26038](https://github.com/apache/pulsar/pull/26038))
- [修复][测试][分支-4.2] 将 ConfigurationDataUtilsTest 调整为 Jackson 2.18.8 InetSocketAddress 反序列化

如需完整列表，请查看[完整 changelog](https://github.com/apache/pulsar/compare/v4.2.2...v4.2.3)。

---

> 📦 仓库：[apache/pulsar](https://github.com/apache/pulsar) · 🏷️ 版本：`v4.2.3` · 📅 发布：2026-07-06 · [查看英文原版 Release](https://github.com/apache/pulsar/releases/tag/v4.2.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
