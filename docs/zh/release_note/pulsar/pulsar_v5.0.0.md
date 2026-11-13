---
title: "pulsar v5.0.0"
description: "Apache Pulsar - 分布式发布-订阅消息系统"
---

# pulsar v5.0.0

### pulsar 是什么

Apache Pulsar - 分布式发布-订阅消息系统

### pulsar v5.0.0 版本更新了什么

#### 2026-10-05

### 里程碑发行说明

5.0.0 版本还包括这些里程碑版本的更改：

* [脉冲星 5.0.0-M1](https://github.com/apache/pulsar/releases/tag/v5.0.0-M1)
* [脉冲星 5.0.0-M2](https://github.com/apache/pulsar/releases/tag/v5.0.0-M2)

### 批准的 PIP

- [改进][pip] PIP-441：为跳过的不可恢复数据添加代理级指标 ([#24716](https://github.com/apache/pulsar/pull/24716))
- [改进][pip] PIP-494：可扩展主题客户端规范 - 权威参考和更改流程 ([#26447](https://github.com/apache/pulsar/pull/26447))
- [改进][pip] PIP-496：V5 客户端和可扩展主题的 Pulsar 功能和 IO 支持 ([#26698](https://github.com/apache/pulsar/pull/26698))

### 库更新

- [改进][经纪人]将簿记员升级到4.18.1 ([#26574](https://github.com/apache/pulsar/pull/26574))
- [修复][秒]将异步 HTTP 客户端升级到 3.0.14，将 Netty Reactive Streams 升级到 2.0.20 ([#26764](https://github.com/apache/pulsar/pull/26764))
- [修复][秒] 将 at.yawk.lz4:lz4-java 升级到 1.11.4 ([#26758](https://github.com/apache/pulsar/pull/26758))
- [修复][秒]将 zstd-jni 升级到 1.5.7-20 ([#26766](https://github.com/apache/pulsar/pull/26766))
- [修复][build]将 Conscrypt 升级到 2.6.3 ([#26660](https://github.com/apache/pulsar/pull/26660))
- [修复][build]将 LightProto 升级到 0.8.2 ([#26623](https://github.com/apache/pulsar/pull/26623))
- [改进][zk] 将 ZooKeeper 升级到 3.9.6 ([#26750](https://github.com/apache/pulsar/pull/26750))
- [改进][构建]升级 Bouncy Castle 库 ([#26753](https://github.com/apache/pulsar/pull/26753))
- [改进][构建]将咖啡因升级到 3.3.0 ([#26755](https://github.com/apache/pulsar/pull/26755))
- [改进][构建]将 Gradle 升级到 9.8.0 并更新插件 ([#26752](https://github.com/apache/pulsar/pull/26752))
- [改进][构建]将 gRPC 升级到 1.84.0 ([#26762](https://github.com/apache/pulsar/pull/26762))
- [改进][构建]将 Guava 升级到 33.7.1-jre ([#26760](https://github.com/apache/pulsar/pull/26760))
- [改进][构建]将 Jackson 升级到 2.21.7 ([#26754](https://github.com/apache/pulsar/pull/26754))
- [改进][构建]将 OpenTelemetry 库升级到 1.66.0 级别 ([#26756](https://github.com/apache/pulsar/pull/26756))
- [改进][构建]将 Protobuf 升级到 4.36.2 ([#26757](https://github.com/apache/pulsar/pull/26757))
- [改进][构建]将 SnakeYAML 升级到 2.7 ([#26761](https://github.com/apache/pulsar/pull/26761))
- [改进][杂项]将 Jetty 升级到 12.1.13 ([#26738](https://github.com/apache/pulsar/pull/26738))

### 经纪人

- [修复][broker] 对齐非持久主题的条目过滤器策略检查 ([#26774](https://github.com/apache/pulsar/pull/26774))
- [修复][broker] 将分区主题截断检查与非分区主题对齐 ([#26776](https://github.com/apache/pulsar/pull/26776))
- [修复][broker]将 ManagedLedgerContinueCachingAddedEntriesAfterLastActiveCursorLeavesMillis 应用到托管账本 ([#26785](https://github.com/apache/pulsar/pull/26785))
- [修复][broker]将订阅策略应用于命名空间和主题订阅操作 ([#26767](https://github.com/apache/pulsar/pull/26767))
- [修复][broker]将角色日志匿名器应用于主题授权拒绝日志（[#26642](https://github.com/apache/pulsar/pull/26642)）
- [修复][经纪人]避免在关闭期间误导所有权锁到期日志（[#26633](https://github.com/apache/pulsar/pull/26633)）
- [修复][broker] 绑定经典 Key_Shared 调度程序重播队列前瞻 ([#26677](https://github.com/apache/pulsar/pull/26677))
- [修复][broker]启动地理复制器时绑定本地分区元数据重试（[#26681](https://github.com/apache/pulsar/pull/26681)）
- [修复][broker] 使用自己的身份验证数据检查代理 HTTP 请求的原始主体 ([#26748](https://github.com/apache/pulsar/pull/26748))
- [修复][broker] 检查二进制 GetSchema 和 GetOrCreateSchema 的主题权限 ([#26643](https://github.com/apache/pulsar/pull/26643))
- [修复][broker] 检查添加到事务的分区和订阅的主题权限 ([#26644](https://github.com/apache/pulsar/pull/26644))
- [修复][代理]解码可扩展主题迁移端点中的主题名称（[#26711](https://github.com/apache/pulsar/pull/26711)）
- [修复][代理]从原始本地名称派生可扩展的主题身份（[#26668](https://github.com/apache/pulsar/pull/26668)）
- [修复][broker] 不要在可扩展主题段上启用复制订阅 ([#26679](https://github.com/apache/pulsar/pull/26679))
- [修复][代理]不要在可扩展主题分段主题上启动经典地理复制器（[#26691](https://github.com/apache/pulsar/pull/26691)）
- [修复][代理]修复名称空间策略读取失败时查找许可证泄漏（[#26606](https://github.com/apache/pulsar/pull/26606)）
- [修复][broker] 继续接受写为对象的 Avro 命名类型引用 ([#26586](https://github.com/apache/pulsar/pull/26586))
- [修复][broker] 在代理启动时仅记录非默认设置（[#26612](https://github.com/apache/pulsar/pull/26612)）
- [修复][broker]在账本关闭失败时保留压缩状态（[#26665](https://github.com/apache/pulsar/pull/26665)）
- [修复][broker] 在激活时保留复制的订阅活动 ([#26780](https://github.com/apache/pulsar/pull/26780))
- [修复][broker] 保留主题初始化失败 ([#26775](https://github.com/apache/pulsar/pull/26775))
- [修复][broker]防止缓慢的 Key_Shared 套接字阻碍其他消费者（[#26635](https://github.com/apache/pulsar/pull/26635)）
- [修复][经纪人]将捆绑拆分失败传播到完成未来（[#26735](https://github.com/apache/pulsar/pull/26735)）
- [修复][broker]在授权完成之前读取 GetOrCreateSchema 的生产者名称 ([#26770](https://github.com/apache/pulsar/pull/26770))
- [修复][broker] 释放压缩缓冲区并允许刷新失败 ([#26576](https://github.com/apache/pulsar/pull/26576))
- [修复][broker] getReplicatedSubscriptionStatus 中 307 重定向的虚假错误日志 ([#26706](https://github.com/apache/pulsar/pull/26706))
- [修复][admin]恢复 Pulsar 4.x 兼容 PackageMetadata 的串行版本UID ([#26784](https://github.com/apache/pulsar/pull/26784))
- [修复][ml]关闭废弃的写账本句柄以防止泄漏（[#26585](https://github.com/apache/pulsar/pull/26585)）
- [修复][ml] 托管账本终止时添加失败 ([#26678](https://github.com/apache/pulsar/pull/26678))
- [修复][ml]在分类帐翻转期间终止托管分类帐时，排队添加失败（[#26680](https://github.com/apache/pulsar/pull/26680)）
- [fix][ml] 修复取消跟踪后的活动光标位置跟踪 ([#26629](https://github.com/apache/pulsar/pull/26629))
- [修复][ml] 修复账本滚动期间待处理写入的积压估计 ([#26647](https://github.com/apache/pulsar/pull/26647))
- [修复][ml]传播游标账本删除失败（[#26734](https://github.com/apache/pulsar/pull/26734)）
- [修复][ml]重用回收的 EntryImpl 时重置延迟缓存位置（[#26707](https://github.com/apache/pulsar/pull/26707)）
- [修复][ml][经纪人]在每个影子管理的分类账修剪、删除和卸载路径上保留源分类账数据（[#26746](https://github.com/apache/pulsar/pull/26746)）
- [修复][元] ZKMetadataStore 构建失败时关闭资源 ([#26673](https://github.com/apache/pulsar/pull/26673))
- [修复][元]跟踪显式获取的复制不足的账本锁（[#26670](https://github.com/apache/pulsar/pull/26670)）
- [改进][broker] 添加配置以启用影子主题 ([#26739](https://github.com/apache/pulsar/pull/26739))
- [改进][经纪人]添加按时间戳查找消息位置的指标（[#26751](https://github.com/apache/pulsar/pull/26751)）
- [改进][代理]升级到 5.x 时允许禁用可扩展主题（[#26740](https://github.com/apache/pulsar/pull/26740)）
- [改进][broker]允许动态更新主题加载超时（[#26781](https://github.com/apache/pulsar/pull/26781)）
- [改进][broker]避免 Key_Shared 消费者选择中的读锁（[#26591](https://github.com/apache/pulsar/pull/26591)）
- [改进][代理]避免独占/故障转移的冗余读取完成执行程序切换（[#26619](https://github.com/apache/pulsar/pull/26619)）
- [改进][代理]避免主题范围的重复数据删除锁定（[#26763](https://github.com/apache/pulsar/pull/26763)）
- [改进][broker] 将命名空间捆绑包的默认数量更改为 32 并使系统命名空间捆绑包数量可配置 ([#26610](https://github.com/apache/pulsar/pull/26610))
- [改进][broker] 默认禁用订阅线程调度 ([#26578](https://github.com/apache/pulsar/pull/26578))
- [改进][broker]使 AvgShedder 成为默认的负载卸载和放置策略（[#26609](https://github.com/apache/pulsar/pull/26609)）
- [改进][经纪人]优化共享订阅的消费者选择（[#26593](https://github.com/apache/pulsar/pull/26593)）
- [改进][经纪人] PIP-379：删除经典的 Shared 和 Key_Shared 调度程序实现 ([#26687](https://github.com/apache/pulsar/pull/26687))
- [改进][broker] 将默认调度程序MaxReadBatchSize 从 100 提高到 500 ([#26744](https://github.com/apache/pulsar/pull/26744))
- [改进][代理]减少读取后的缓存保留并在启动时应用保留设置（[#26627](https://github.com/apache/pulsar/pull/26627)）
- [改进][broker]当消费者通道变得可写时恢复共享调度（[#26630](https://github.com/apache/pulsar/pull/26630)）
- [改进][broker] 跳过未使用的复制订阅时间戳更新 ([#26655](https://github.com/apache/pulsar/pull/26655))
- [改进][经纪人]加速自动分割Key_Shared消费者选择([#26654](https://github.com/apache/pulsar/pull/26654))
- [改进][broker]将延迟确认完成状态存储在数组中（[#26592](https://github.com/apache/pulsar/pull/26592)）
- [改进][broker]跟踪主题加载延迟和超时状态（[#26666](https://github.com/apache/pulsar/pull/26666)）
- [改进][broker] 对 BookKeeper 客户端使用单独的 IO 线程 ([#25812](https://github.com/apache/pulsar/pull/25812))
- [改进][管理]重新设计可扩展的主题统计信息并添加每个分段的统计信息（[#26639](https://github.com/apache/pulsar/pull/26639)）
- [修复][txn] 改进交易管理检查 ([#26773](https://github.com/apache/pulsar/pull/26773))
- [修复][txn]防止排队快照写入停止（[#26565](https://github.com/apache/pulsar/pull/26565)）
- [fix][txn] 停止挂起的 ack 重播循环永远旋转 ([#26369](https://github.com/apache/pulsar/pull/26369))
- [改进][ml] 允许内联读取完成并保留复制顺序 ([#26620](https://github.com/apache/pulsar/pull/26620))
- [改进][ml] 批量托管账本跨线程边界添加到账本执行器 ([#26717](https://github.com/apache/pulsar/pull/26717))
- [改进][ml] 在最后确认的条目处完成读取，而不是在分类帐执行器上扩展它（[#26743](https://github.com/apache/pulsar/pull/26743)）
- [改进][ml] 推迟缓存消息元数据解析直到第一次读取（[#26628](https://github.com/apache/pulsar/pull/26628)）
- [改进][ml] 通过 BookKeeper 构建器 API 打开分类帐 ([#26598](https://github.com/apache/pulsar/pull/26598))
- [改进][ml] 使用 withOrderingKey 将分类帐回调固定到托管分类帐线程（[#26599](https://github.com/apache/pulsar/pull/26599)）
- [改进][ml]通过卸载分类帐中的时间戳减少搜索的分层存储读取（[#26778](https://github.com/apache/pulsar/pull/26778)）
- [改进][ml]对托管账本缓存副本使用自适应分配（[#26603](https://github.com/apache/pulsar/pull/26603)）
- [改进][卸载]从同一数据块中学习的偏移量恢复卸载读取（[#26782](https://github.com/apache/pulsar/pull/26782)）
- [改进][txn] 将 TransactionCoordinatorClient 移至公共 API ([#26646](https://github.com/apache/pulsar/pull/26646))
- [feat][broker] PIP-441：为不可恢复的数据跳过添加代理级指标（[#24726](https://github.com/apache/pulsar/pull/24726)）
- [feat][ml] 独立配置和跟踪命名的 Pulsar 分配器 ([#26597](https://github.com/apache/pulsar/pull/26597))
- [feat][ml] 支持 Bookkeeper 批量读取 API ([#25280](https://github.com/apache/pulsar/pull/25280))
- [修复][经纪人] 在升级过程中保留独立的博彩公司身份 ([#26790](https://github.com/apache/pulsar/pull/26790))

### 客户端

- [修复][客户端]应用V5连接退避初始和最大间隔（[#26799](https://github.com/apache/pulsar/pull/26799)）
- [修复][客户端]在客户端关闭时完成 v5 发送（[#26686](https://github.com/apache/pulsar/pull/26686)）
- [修复][客户端]应用消息后完成表视图刷新（[#26566](https://github.com/apache/pulsar/pull/26566)）
- [修复][客户端]客户端关闭时不要关闭共享 DNS 解析器组的地址解析器 ([#26723](https://github.com/apache/pulsar/pull/26723))
- [修复][客户端]删除已删除生产者的发送收据，而不是连接（[#26618](https://github.com/apache/pulsar/pull/26618)）
- [修复][客户端]启用 TableView 压缩读取短主题名称 ([#26626](https://github.com/apache/pulsar/pull/26626))
- [修复][客户端]修复发送失败路径上的缓冲区所有权([#26455](https://github.com/apache/pulsar/pull/26455))
- [修复][客户端]在组合大小限制下刷新确认组（[#26594](https://github.com/apache/pulsar/pull/26594)）
- [修复][客户端]保留已消失片段的生产者，直到布局将其删除（[#26617](https://github.com/apache/pulsar/pull/26617)）
- [修复][客户端]防止生产者发送失败时的重复清理和泄漏（[#26641](https://github.com/apache/pulsar/pull/26641)）
- [修复][客户端]释放关闭后打开的连接([#26733](https://github.com/apache/pulsar/pull/26733))
- [修复][客户端]在关闭的客户端上停止 DAG 监视重新连接并安静地执行工具 Ctrl-C 关闭（[#26613](https://github.com/apache/pulsar/pull/26613)）
- [改进][客户端]合并消息侦听器耗尽调度（[#26531](https://github.com/apache/pulsar/pull/26531)）
- [改进][客户端]在调试时记录 V5 段消失的发送重试 ([#26615](https://github.com/apache/pulsar/pull/26615))
- [改进][客户端] Pull v5 阻止直接从接收缓冲区接收 ([#26614](https://github.com/apache/pulsar/pull/26614))
- [改进][客户端]减少 V5 队列接收完成阶段 ([#26596](https://github.com/apache/pulsar/pull/26596))
- [改进][客户端]跳过 v5 流消费者中冗余的每段累积确认（[#26616](https://github.com/apache/pulsar/pull/26616)）
- [feat][客户端] PIP-445：添加构建器方法来创建基于消息的 TableView ([#24809](https://github.com/apache/pulsar/pull/24809))

### Pulsar IO 和 Pulsar 函数

- [修复][fn] 将工作连接器列表检查应用于已弃用的功能连接器端点（[#26745](https://github.com/apache/pulsar/pull/26745)）
- [修复][fn] 检查函数、源和接收器包 URL 的包权限 ([#26771](https://github.com/apache/pulsar/pull/26771))
- [修复][fn]触发函数时检查输入主题的生产权限([#26777](https://github.com/apache/pulsar/pull/26777))
- [修复][fn] 从 pulsar-function-go 中删除已弃用的 github.com/golang/protobuf 依赖项 ([#26587](https://github.com/apache/pulsar/pull/26587))
- [修复][fn] 一致地验证包名称组件和存储路径 ([#26768](https://github.com/apache/pulsar/pull/26768))
- [feat][fn] PIP-496：支持 Pulsar 函数和 IO 中的 V5 客户端和 topic:// 主题 ([#26697](https://github.com/apache/pulsar/pull/26697))

### 其他

- [修复][ws] 检查 WebSocket 消费者的死信主题权限 ([#26772](https://github.com/apache/pulsar/pull/26772))
- [修复][cli]避免继承工具中的代理初始堆设置（[#26736](https://github.com/apache/pulsar/pull/26736)）
- [修复][cli]正确生成管理命令文档（[#26649](https://github.com/apache/pulsar/pull/26649)）
- [改进][cli] 从 pulsar-perf 和 pulsar-client 中的主题域中选择 v4 或 V5 客户端 ([#26693](https://github.com/apache/pulsar/pull/26693))
- [改进][杂项] 在 bin/pulsar、pulsar-perf 和 CLI 工具中默认禁用 Netty 泄漏检测 ([#26783](https://github.com/apache/pulsar/pull/26783))
- [改进][杂项]使用可增长数组减少执行器队列分配（[#26588](https://github.com/apache/pulsar/pull/26588)）
- [改进][杂项]使用共享容量预算修剪执行器队列（[#26589](https://github.com/apache/pulsar/pull/26589)）
- [改进][杂项]在 JDK 25 和 26 上使用紧凑对象头（[#26719](https://github.com/apache/pulsar/pull/26719)）
- [改进][杂项]使用 Netty 的自适应分配器作为 Pulsar 的默认分配器 ([#26720](https://github.com/apache/pulsar/pull/26720))
- [修复][客户端]允许分块消息丢弃路径中的泄漏（[#26661](https://github.com/apache/pulsar/pull/26661)）
- [feat][misc] 支持具有可配置分配器类型和指标的 AdaptiveByteBufAllocator ([#26595](https://github.com/apache/pulsar/pull/26595))
- [doc][spec] PIP-494：可扩展主题客户端规范 ([#26805](https://github.com/apache/pulsar/pull/26805))
- [修复] 修复在标记删除持久性期间跳过不可恢复条目时游标死锁的问题 ([#26570](https://github.com/apache/pulsar/pull/26570))
- [改进] 在基于 Alpine 的 Pulsar 镜像中预加载 mimalloc ([#26791](https://github.com/apache/pulsar/pull/26791))

### 测试和 CI

- [修复][构建]在 Gradle 中恢复测试 JAR 出版物 ([#26622](https://github.com/apache/pulsar/pull/26622))
- [修复][ci] 确保复制测试的磁盘空间 ([#26559](https://github.com/apache/pulsar/pull/26559))
- [修复][ci] 跳过 apache/pulsar 之外的拉取请求标题检查 ([#26645](https://github.com/apache/pulsar/pull/26645))
- [修复][ci] 将 GraalVM 设置操作更新为 ASF 批准的版本 ([#26571](https://github.com/apache/pulsar/pull/26571))
- [修复][测试]允许在功能集成测试中启动 CLI ([#26564](https://github.com/apache/pulsar/pull/26564))
- [修复][测试]避免在分类帐关闭测试中阻止公共池工作人员（[#26560](https://github.com/apache/pulsar/pull/26560)）
- [修复][测试]避免共享集群测试之间不安全的清理（[#26611](https://github.com/apache/pulsar/pull/26611)）
- [修复][测试] 在多消费者测试中等待两个 DLQ 生产者 ([#26561](https://github.com/apache/pulsar/pull/26561))
- [修复][测试]覆盖调度程序关闭成员锁死锁（[#26557](https://github.com/apache/pulsar/pull/26557)）
- [修复][测试]禁用原始账本测试条目的 Pulsar 消息解析 ([#26604](https://github.com/apache/pulsar/pull/26604))
- [修复][测试] 修复不稳定的 LatencyTracerTest.testTraceFuture ([#26741](https://github.com/apache/pulsar/pull/26741))
- [修复][测试]修复不稳定的 ManagedLedgerBkTest.verifyConcurrentUsage ([#26637](https://github.com/apache/pulsar/pull/26637))
- [修复][测试]修复不稳定的 NonDurableCursorTest.subscribeToEarliestPositionWithDeferredDeletion ([#26747](https://github.com/apache/pulsar/pull/26747))
- [修复][测试] 修复不稳定的 OneWayReplicatorDeduplicationTest.testDeduplication ([#26737](https://github.com/apache/pulsar/pull/26737))
- [修复][测试] 修复片状 RawReaderTest.testPauseAndResumeWithUnloading ([#26690](https://github.com/apache/pulsar/pull/26690))
- [修复][测试]修复不稳定的 V5CumulativeAckTest.testRetryingAnAckThatFailedWhileDisconnectedAdvancesTheCursor ([#26789](https://github.com/apache/pulsar/pull/26789))
- [修复][测试] 修复不稳定的 V5ProducerBackPressureTest.retriesAcrossASegmentSplitKeepTheAccountingBalanced ([#26792](https://github.com/apache/pulsar/pull/26792))
- [修复][测试]修复 v5 测试中的可扩展主题统计信息访问 ([#26650](https://github.com/apache/pulsar/pull/26650))
- [修复][测试]隔离测试方法之间的可变代理装置（[#26563](https://github.com/apache/pulsar/pull/26563)）
- [修复][测试]将令牌 CLI 测试输出与后台日志记录隔离（[#26657](https://github.com/apache/pulsar/pull/26657)）
- [修复][测试]使 TopicOwnerTest 包分配具有确定性（[#26624](https://github.com/apache/pulsar/pull/26624)）
- [修复][测试]在代理拦截器装置中保留类加载（[#26567](https://github.com/apache/pulsar/pull/26567)）
- [修复][测试]恢复 Gradle 和 CI 测试的 NETTY_LEAK_DETECTION ([#26605](https://github.com/apache/pulsar/pull/26605))
- [修复][测试] 在 V5StreamConsumerAckWatermarkTest 中倒回之前等待确认持续存在（[#26684](https://github.com/apache/pulsar/pull/26684)）
- [改进][构建]添加经过验证的 API/SPI 发布子集 ([#26579](https://github.com/apache/pulsar/pull/26579))
- [改进][构建]将版本提升到 5.0.0-SNAPSHOT ([#26580](https://github.com/apache/pulsar/pull/26580))
- [改进][构建]服务器需要 Java 21，同时保留 Java 17 客户端兼容性 ([#26769](https://github.com/apache/pulsar/pull/26769))
- [改进][构建]延迟解析集成测试提交 ID，以保持配置缓存可重用（[#26638](https://github.com/apache/pulsar/pull/26638)）
- [改进][ci] 检查先决条件中的 ASF 操作允许列表 ([#26572](https://github.com/apache/pulsar/pull/26572))
- [改进][ci] 配置 SSH 访问操作默认值并更新 Upterm ([#26575](https://github.com/apache/pulsar/pull/26575))
- [改进][ci] 通过 .asf.yaml 在拉取请求上启用“更新分支”按钮（[#26573](https://github.com/apache/pulsar/pull/26573)）
- [改进][ci]固定最新的 Develocity 和通用自定义用户数据插件版本 ([#26608](https://github.com/apache/pulsar/pull/26608))
- [改进][ci] 支持较小的运行程序和受限的分叉环境 ([#26558](https://github.com/apache/pulsar/pull/26558))
- [改进][测试] 将磁盘限制选项和 A/B 比较图表添加到 Pulsar 性能测试框架 ([#26800](https://github.com/apache/pulsar/pull/26800))
- [改进][测试] 在性能测试中添加主机和每个容器的 CPU 和性能计数器采样、默认 bookie 缓存大小和瓶颈分析指南 ([#26749](https://github.com/apache/pulsar/pull/26749))
- [改进][测试]添加物联网遥测性能场景（[#26653](https://github.com/apache/pulsar/pull/26653)）
- [改进][测试]将 YAML 场景添加到分析工具中 ([#26600](https://github.com/apache/pulsar/pull/26600))
- [改进][测试]改进性能实验、分析工具和代理指导 ([#26715](https://github.com/apache/pulsar/pull/26715))
- [改进][测试]记录 Netty 的分配器事件和每个分析组件的其他 JFR 设置，以及 Alpine 上的分析（[#26787](https://github.com/apache/pulsar/pull/26787)）
- [改进][测试]减少TestNG夹具的重叠([#26562](https://github.com/apache/pulsar/pull/26562))
- [改进][测试]将物联网预热与性能测量分开（[#26667](https://github.com/apache/pulsar/pull/26667)）
- [改进][测试]加强自动分割选择器并发测试([#26779](https://github.com/apache/pulsar/pull/26779))
- [改进][测试]支持隔离的 v4 性能客户端 ([#26601](https://github.com/apache/pulsar/pull/26601))
- [feat][test] 添加基于 Docker 的性能测试框架，具有分析、指标和 AI 代理支持 ([#26714](https://github.com/apache/pulsar/pull/26714))

如需完整列表，请查看[完整变更日志](https://github.com/apache/pulsar/compare/v5.0.0-M2...v5.0.0)。

---

> 📦 仓库：[apache/pulsar](https://github.com/apache/pulsar) · 🏷️ 版本：`v5.0.0` · 📅 发布：2026-10-05 · [查看英文原版 Release](https://github.com/apache/pulsar/releases/tag/v5.0.0)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
