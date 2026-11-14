---
title: "pulsar v4.2.5"
description: "Apache Pulsar - 分布式发布-订阅消息系统"
summary: "Apache Pulsar - 分布式发布-订阅消息系统"
---

# pulsar v4.2.5

### pulsar 是什么

Apache Pulsar - 分布式发布-订阅消息系统

### pulsar v4.2.5 版本更新了什么

#### 2026-08-03

### 库更新

- [改进][经纪人][branch-4.2]将簿记员升级到4.17.4 ([#26219](https://github.com/apache/pulsar/pull/26219))
- [修复][秒] 将 /pulsar-function-go/examples 中的 google.golang.org/grpc 从 1.79.3 提升到 1.82.1 ([#26231](https://github.com/apache/pulsar/pull/26231))
- [修复][秒] 在 /pulsar-function-go 中将 google.golang.org/grpc 从 1.82.1 提升到 1.83.1 ([#26446](https://github.com/apache/pulsar/pull/26446))
- [修复][秒] 将 /pulsar-function-go 中的 google.golang.org/grpc 从 1.83.1 提升到 1.83.2 ([#26541](https://github.com/apache/pulsar/pull/26541))
- [修复][秒] 将 log4j2 从 2.26.0 提升到 2.26.1 ([#26329](https://github.com/apache/pulsar/pull/26329))
- [修复][秒] 将 at.yawk.lz4:lz4-java 升级到 1.11.4 ([#26758](https://github.com/apache/pulsar/pull/26758))
- [修复][秒] 将 avro 升级到 1.12.2 ([#24992](https://github.com/apache/pulsar/pull/24992))
- [修复][秒] 将 pulsar-function-go 中的 grpc 升级到 1.82.1 以修复 GHSA-hrxh-6v49-42gf ([#26235](https://github.com/apache/pulsar/pull/26235))
- [修复][秒]将 Jackson 升级到 2.18.10 ([#26339](https://github.com/apache/pulsar/pull/26339))
- [修复][秒] 将 lz4-java 升级到 1.11.1 以解决 CVE-2026-59949 ([#26250](https://github.com/apache/pulsar/pull/26250))
- [修复][秒][branch-4.2] 将 BouncyCastle 升级到 1.85，将 BouncyCastle FIPS 升级到 2.0.2 以解决 CVE ([#26370](https://github.com/apache/pulsar/pull/26370))
- [修复][秒][branch-4.2] 将 Netty 升级到 4.1.137 以解决多个 CVE 和错误 ([#26301](https://github.com/apache/pulsar/pull/26301))
- [修复][秒][branch-4.2] 将 Spring 升级到 7.0.8 ([#26270](https://github.com/apache/pulsar/pull/26270))
- [修复][秒][branch-4.x] 将 async-http-client 升级到 2.16.1 ([#26436](https://github.com/apache/pulsar/pull/26436))
- [修复][秒][branch-4.x] 将 lz4-java 升级到 1.11.2 ([#26439](https://github.com/apache/pulsar/pull/26439))
- [fix][sec][branch-4.x] 将 Netty 升级到 4.1.138 以解决多个 CVE 和错误 ([#26515](https://github.com/apache/pulsar/pull/26515))
- [修复][秒][branch-4.x] 将 Thrift 升级到 0.24.0 ([#26438](https://github.com/apache/pulsar/pull/26438))
- [修复][秒][branch-4.x] 将 vertx 升级到 4.5.32 ([#26437](https://github.com/apache/pulsar/pull/26437))
- [修复][build]将 Conscrypt 升级到 2.6.3 ([#26660](https://github.com/apache/pulsar/pull/26660))
- [改进][zk] 将 ZooKeeper 升级到 3.9.6 ([#26750](https://github.com/apache/pulsar/pull/26750))
- [改进][构建]升级 Apache Commons 库 ([#26348](https://github.com/apache/pulsar/pull/26348))
- [改进][构建]升级 Bouncy Castle 库 ([#26753](https://github.com/apache/pulsar/pull/26753))
- [改进][构建]将咖啡因升级到 3.3.0 ([#26755](https://github.com/apache/pulsar/pull/26755))
- [改进][构建]将 Guava 升级到 33.7.1-jre ([#26760](https://github.com/apache/pulsar/pull/26760))
- [改进][构建]将 Oxia Java 客户端升级到 0.9.5 ([#26538](https://github.com/apache/pulsar/pull/26538))
- [改进][杂项]将 Conscrypt 升级到 2.6.1 以添加 aarch64 本机支持 ([#26314](https://github.com/apache/pulsar/pull/26314))
- [改进][杂项]将 Conscrypt 升级到 2.6.2 以恢复本机库 glibc 基线 ([#26315](https://github.com/apache/pulsar/pull/26315))
- [改进][杂项]将 Jetty 升级到 12.1.12 ([#26302](https://github.com/apache/pulsar/pull/26302))
- [改进][杂项]将 Jetty 升级到 12.1.13 ([#26738](https://github.com/apache/pulsar/pull/26738))
- [改进][杂项] 将 log4j 升级到 2.26.0，将 slf4j 升级到 2.0.18 ([#25973](https://github.com/apache/pulsar/pull/25973))
- [改进][杂项][branch-4.x] 将 Jackson 升级到 2.18.11 ([#26759](https://github.com/apache/pulsar/pull/26759))
- [修复][测试][branch-4.2] 修复因 Avro 1.12.2 升级而损坏的连接器测试

### 经纪人

- [修复][代理]为可扩展负载管理器添加缺少的捆绑 Prometheus 指标（[#26192](https://github.com/apache/pulsar/pull/26192)）
- [修复][broker] 对齐非持久主题的条目过滤器策略检查 ([#26774](https://github.com/apache/pulsar/pull/26774))
- [修复][broker] 将分区主题截断检查与非分区主题对齐 ([#26776](https://github.com/apache/pulsar/pull/26776))
- [修复][broker]将 ManagedLedgerContinueCachingAddedEntriesAfterLastActiveCursorLeavesMillis 应用到托管账本 ([#26785](https://github.com/apache/pulsar/pull/26785))
- [修复][broker]将订阅策略应用于命名空间和主题订阅操作 ([#26767](https://github.com/apache/pulsar/pull/26767))
- [修复][broker]将角色日志匿名器应用于主题授权拒绝日志（[#26642](https://github.com/apache/pulsar/pull/26642)）
- [修复][经纪人]避免前领导者的负载脱落和元数据写入（[#26253](https://github.com/apache/pulsar/pull/26253)）
- [修复][经纪人]避免在关闭期间误导所有权锁到期日志（[#26633](https://github.com/apache/pulsar/pull/26633)）
- [修复][broker] 绑定经典 Key_Shared 调度程序重播队列前瞻 ([#26677](https://github.com/apache/pulsar/pull/26677))
- [修复][broker]启动地理复制器时绑定本地分区元数据重试（[#26681](https://github.com/apache/pulsar/pull/26681)）
- [修复][broker] 绑定由复制集群删除触发的主题删除重试 ([#26432](https://github.com/apache/pulsar/pull/26432))
- [修复][broker] 取消主题关闭时的排队事务快照恢复 ([#26335](https://github.com/apache/pulsar/pull/26335))
- [修复][broker] 取消主题关闭时的排队事务快照恢复 ([#26335](https://github.com/apache/pulsar/pull/26335))
- [修复][代理]使用自己的身份验证数据检查代理 HTTP 请求的原始主体 ([#26748](https://github.com/apache/pulsar/pull/26748))
- [修复][broker] 检查二进制 GetSchema 和 GetOrCreateSchema 的主题权限 ([#26643](https://github.com/apache/pulsar/pull/26643))
- [修复][broker] 检查添加到事务的分区和订阅的主题权限 ([#26644](https://github.com/apache/pulsar/pull/26644))
- [修复][broker]仅在消费者实际被删除时借记未确认的消息（[#26422](https://github.com/apache/pulsar/pull/26422)）
- [修复][broker]当租户不存在时不记录错误([#26361](https://github.com/apache/pulsar/pull/26361))
- [修复][broker] 不要从 init future 尚未完成的缓存提供主题策略 ([#26513](https://github.com/apache/pulsar/pull/26513))
- [修复][代理]修复可扩展负载管理器中的分配和所有权清理竞争（[#26520](https://github.com/apache/pulsar/pull/26520)）
- [修复][broker] 使用稳定的捆绑包名称修复 AvgShedder 分配缓存键控 ([#26246](https://github.com/apache/pulsar/pull/26246))
- [修复][broker]修复当delayedDeliveryMaxNumBuckets为1-3时延迟交付桶合并失败的问题 ([#26242](https://github.com/apache/pulsar/pull/26242))
- [修复][broker]修复dispatcherPauseOnAckStatePersistentEnabled和schemaValidationEnforced在apply=true时返回错误值（[#26472](https://github.com/apache/pulsar/pull/26472)）
- [修复][broker]修复 SplitManager 和 UnloadManager 中的提前完成和错误超时 ([#26363](https://github.com/apache/pulsar/pull/26363))
- [修复][代理]修复名称空间策略读取失败时查找许可证泄漏（[#26606](https://github.com/apache/pulsar/pull/26606)）
- [修复][经纪人]修复多角色授权回归并优化嵌套检查（[#26551](https://github.com/apache/pulsar/pull/26551)）
- [修复][broker]修复未配置 AppendIndexMetadataInterceptor 时 ManagedLedgerInterceptorImpl 中的 NPE ([#26497](https://github.com/apache/pulsar/pull/26497))
- [修复][经纪人]修复OwnershipCache中的所有权生成竞争，removeOwnership和锁定到期清理（[#26197](https://github.com/apache/pulsar/pull/26197)）
- [修复][代理]修复共享订阅频繁重新连接期间因许可证丢失而导致的持续吞吐量下降（[#26289](https://github.com/apache/pulsar/pull/26289)）
- [修复][broker] 继续接受以对象形式写入的 Avro 命名类型引用 ([#26586](https://github.com/apache/pulsar/pull/26586))
- [修复][broker] PulsarMetadataEventSynchronizer 故障路径中的日志异常 ([#26203](https://github.com/apache/pulsar/pull/26203))
- [修复][broker]在账本关闭失败时保留压缩状态（[#26665](https://github.com/apache/pulsar/pull/26665)）
- [修复][broker] 在激活时保留复制的订阅活动 ([#26780](https://github.com/apache/pulsar/pull/26780))
- [修复][broker] 保留主题初始化失败 ([#26775](https://github.com/apache/pulsar/pull/26775))
- [修复][经纪人]防止 TTL 自动过期而跳过阅读器消息 ([#26505](https://github.com/apache/pulsar/pull/26505))
- [修复][broker] 防止主题末尾的 Key_Shared 无序重播饥饿 ([#26268](https://github.com/apache/pulsar/pull/26268))
- [修复][broker]当最后一个 ACK 与粘性哈希重新分配竞争时防止 NPE ([#26471](https://github.com/apache/pulsar/pull/26471))
- [修复][经纪人]将捆绑拆分失败传播到完成未来（[#26735](https://github.com/apache/pulsar/pull/26735)）
- [修复][broker] 释放压缩缓冲区并允许刷新失败 ([#26576](https://github.com/apache/pulsar/pull/26576))
- [修复][broker] 通过前缀解析复制器远程集群，以便包含点的集群名称有效 ([#26451](https://github.com/apache/pulsar/pull/26451))
- [修复][broker] 发送 ActiveConsumerChange 进行非持久故障转移订阅 ([#26482](https://github.com/apache/pulsar/pull/26482))
- [修复][broker] getReplicatedSubscriptionStatus 中 307 重定向的虚假错误日志 ([#26706](https://github.com/apache/pulsar/pull/26706))
- [修复][代理]停止将故意的所有权释放报告为过期的资源锁（[#26533](https://github.com/apache/pulsar/pull/26533)）
- [修复][broker]具有 AUTO_PRODUCE 模式的生产者无法重新连接，这是由于模式不兼容造成的（[#25437](https://github.com/apache/pulsar/pull/25437)）
- [修复][admin] 允许 defaultNumPartitions 进行非分区 autoTopicCreation 覆盖 ([#25163](https://github.com/apache/pulsar/pull/25163))
- [修复][管理员] 如果禁用自动创建，则避免在查看消息时创建订阅 ([#26279](https://github.com/apache/pulsar/pull/26279))
- [修复][admin]拒绝空集群迁移 URL：修复倒置的 ClusterUrl.isEmpty() ([#26473](https://github.com/apache/pulsar/pull/26473))
- [修复][ml]关闭废弃的写账本句柄以防止泄漏（[#26585](https://github.com/apache/pulsar/pull/26585)）
- [修复][ml] 托管账本终止时添加失败 ([#26678](https://github.com/apache/pulsar/pull/26678))
- [修复][ml]在分类帐翻转期间终止托管分类帐时，排队添加失败（[#26680](https://github.com/apache/pulsar/pull/26680)）
- [fix][ml] 修复取消跟踪后的活动光标位置跟踪 ([#26629](https://github.com/apache/pulsar/pull/26629))
- [fix][ml] 修复活动游标保留和延迟更新同步 ([#26511](https://github.com/apache/pulsar/pull/26511))
- [修复][ml] 修复账本滚动期间待处理写入的积压估计 ([#26647](https://github.com/apache/pulsar/pull/26647))
- [fix][ml] 修复从 MetadataStore 恢复游标时批量 ACK 索引丢失的问题 ([#26474](https://github.com/apache/pulsar/pull/26474))
- [修复][ml]即使托管账本缓存被禁用，飞行中读取限制器也能工作（[#26296](https://github.com/apache/pulsar/pull/26296)）
- [修复][ml] 从缓存保留的缓冲区中解析缓存条目的消息元数据 ([#26495](https://github.com/apache/pulsar/pull/26495))
- [修复][ml]从不可读的游标分类帐恢复时保留游标属性（[#26512](https://github.com/apache/pulsar/pull/26512)）
- [修复][ml]在打开时恢复最后一个分类帐时保留分类帐属性（[#26509](https://github.com/apache/pulsar/pull/26509)）
- [修复][ml]传播游标账本删除失败（[#26734](https://github.com/apache/pulsar/pull/26734)）
- [修复][ml]重用回收的 EntryImpl 时重置延迟缓存位置（[#26707](https://github.com/apache/pulsar/pull/26707)）
- [修复][ml] 在读取期间跳过连续删除的范围（[#26299](https://github.com/apache/pulsar/pull/26299)）
- [修复][ml] 允许并发创建托管账本 z 节点 ([#26247](https://github.com/apache/pulsar/pull/26247))
- [修复][ml][经纪人]在每个影子管理的分类账修剪、删除和卸载路径上保留源分类账数据（[#26746](https://github.com/apache/pulsar/pull/26746)）
- [修复][卸载]在 BlobStoreBackedReadHandleImpl 中跳过时发现缓存和重用条目偏移量 ([#26424](https://github.com/apache/pulsar/pull/26424))
- [修复][卸载]规范卸载器缓存目录路径 ([#26372](https://github.com/apache/pulsar/pull/26372))
- [修复][元] ZKMetadataStore 构建失败时关闭资源 ([#26673](https://github.com/apache/pulsar/pull/26673))
- [修复][元] 跟踪显式获取的复制不足的账本锁 ([#26670](https://github.com/apache/pulsar/pull/26670))
- [改进][broker] 添加配置以启用影子主题 ([#26739](https://github.com/apache/pulsar/pull/26739))
- [改进][broker] 添加 pulsar_subscription_storage_backlog_age_seconds 指标 ([#26313](https://github.com/apache/pulsar/pull/26313))
- [改进][broker]允许动态更新主题加载超时（[#26781](https://github.com/apache/pulsar/pull/26781)）
- [改进][broker]避免在 BrokerInterceptors 热路径中分配迭代器并恢复配置的排序（[#26462](https://github.com/apache/pulsar/pull/26462)）
- [改进][broker]将分区元数据未找到日志更改为警告（[#26381](https://github.com/apache/pulsar/pull/26381)）
- [改进][broker] 合并并发 readMoreEntries 调用 ([#26539](https://github.com/apache/pulsar/pull/26539))
- [改进][broker]在添加代理条目元数据时将小条目复制到平面缓冲区中（[#26464](https://github.com/apache/pulsar/pull/26464)）
- [改进][broker] 默认禁用订阅线程调度 ([#26578](https://github.com/apache/pulsar/pull/26578))
- [改进][broker] 在 ManagedLedger 中公开复制器的接口，而不是强制转换类 ([#26298](https://github.com/apache/pulsar/pull/26298))
- [改进][经纪人]使公开主题级别指标动态化（[#21006](https://github.com/apache/pulsar/pull/21006)）
- [改进][代理]减少读取后的缓存保留并在启动时应用保留设置（[#26627](https://github.com/apache/pulsar/pull/26627)）
- [改进][broker] 跳过未使用的复制订阅时间戳更新 ([#26655](https://github.com/apache/pulsar/pull/26655))
- [改进][broker]支持 OpenID 多角色授权并改进代理身份验证默认值 ([#26549](https://github.com/apache/pulsar/pull/26549))
- [改进][broker]减少 SimpleCache 的锁定范围以增强性能 ([#25293](https://github.com/apache/pulsar/pull/25293))
- [修复][txn] 当无法清除中止的 txn 快照时，主题删除不会失败 ([#26431](https://github.com/apache/pulsar/pull/26431))
- [fix][txn] 修复 X-Pulsar-txn-uncommissed header 语义并为 peek 消息添加 X-Pulsar-txn-consumable ([#26073](https://github.com/apache/pulsar/pull/26073))
- [修复][txn] 改进交易管理检查 ([#26773](https://github.com/apache/pulsar/pull/26773))
- [修复][txn]防止排队快照写入停止（[#26565](https://github.com/apache/pulsar/pull/26565)）
- [fix][txn] 停止挂起的 ack 重播循环永远旋转 ([#26369](https://github.com/apache/pulsar/pull/26369))
- [改进][ml] 避免捕获缓存插入参数 ([#26524](https://github.com/apache/pulsar/pull/26524))
- [改进][ml] 在条目缓存插入时解析消息元数据，而不是在包装器写锁定下（[#26463](https://github.com/apache/pulsar/pull/26463)）
- [改进][ml] 在批处理中共享读取许可释放回调 ([#26523](https://github.com/apache/pulsar/pull/26523))
- [feat][broker] PIP-441：为不可恢复的数据跳过添加代理级指标（[#24726](https://github.com/apache/pulsar/pull/24726)）
- [修复][broker]加载不允许集群访问的主题时出现受防护错误 ([#26276](https://github.com/apache/pulsar/pull/26276))

### 客户端

- [修复][客户端]在创建生产者时应用无内存限制生产者队列默认值（[#26342](https://github.com/apache/pulsar/pull/26342)）
- [修复][客户端]在首次接收之前避免 ConsumerImpl hasMessageAvailable 中出现异常（[#25857](https://github.com/apache/pulsar/pull/25857)）
- [修复][客户端]应用消息后完成表视图刷新（[#26566](https://github.com/apache/pulsar/pull/26566)）
- [修复][客户端] 在发送超时时将 op cmd 释放推迟到写入事件循环 ([#26456](https://github.com/apache/pulsar/pull/26456))
- [修复][客户端]仅在明确设置时才划分跨分区预算（[#26384](https://github.com/apache/pulsar/pull/26384)）
- [修复][客户端]客户端关闭时不要关闭共享 DNS 解析器组的地址解析器 ([#26723](https://github.com/apache/pulsar/pull/26723))
- [修复][客户端]删除已删除生产者的发送收据，而不是连接（[#26618](https://github.com/apache/pulsar/pull/26618)）
- [修复][客户端]启用 TableView 压缩读取短主题名称 ([#26626](https://github.com/apache/pulsar/pull/26626))
- [修复][客户端]修复发送失败路径上的缓冲区所有权([#26455](https://github.com/apache/pulsar/pull/26455))
- [修复][客户端]修复分区生产者的 OTel 跨度中不正确的主题 ([#25896](https://github.com/apache/pulsar/pull/25896))
- [修复][客户端]修复 OpenTelemetryProducerInterceptor 由于合格检查而未执行的问题 ([#25585](https://github.com/apache/pulsar/pull/25585))
- [修复][客户端]在组合大小限制下刷新确认组（[#26594](https://github.com/apache/pulsar/pull/26594)）
- [修复][客户端]将跟踪上下文注入消息属性以实现生产者-消费者跨度关联（[#25749](https://github.com/apache/pulsar/pull/25749)）
- [修复][客户端]将事务性和非事务性消息保存在单独的批次中（[#26547](https://github.com/apache/pulsar/pull/26547)）
- [修复][客户端]防止生产者发送失败时的重复清理和泄漏（[#26641](https://github.com/apache/pulsar/pull/26641)）
- [修复][客户端]释放关闭后打开的连接([#26733](https://github.com/apache/pulsar/pull/26733))
- [修复][客户端]发送序列化失败时释放命令头([#26492](https://github.com/apache/pulsar/pull/26492))
- [修复][客户端]在终端状态下发送失败时仅释放一次保留内存([#26476](https://github.com/apache/pulsar/pull/26476))
- [修复][客户端]反序列化后恢复 OAuth2 HTTP 客户端 ([#26324](https://github.com/apache/pulsar/pull/26324))
- [修复][客户端]停止跟踪非持久主题上的确认超时（[#26548](https://github.com/apache/pulsar/pull/26548)）
- [改进][客户端]避免为传出消息分配急切的代理元数据（[#26521](https://github.com/apache/pulsar/pull/26521)）
- [改进][客户端]避免默认回调使用未使用的发送统计快照（[#26519](https://github.com/apache/pulsar/pull/26519)）
- [改进][客户端]合并消息侦听器耗尽调度（[#26531](https://github.com/apache/pulsar/pull/26531)）
- [修复][客户端]修复OTel跨度中多主题消费者的不正确主题
- [修复][客户端]使用条目级消息id删除死信候选条目

### Pulsar IO 和 Pulsar 函数

- [修复][fn] 允许在 Go 函数上保留KeyOrdering ([#26421](https://github.com/apache/pulsar/pull/26421))
- [修复][fn] 将工作连接器列表检查应用于已弃用的功能连接器端点（[#26745](https://github.com/apache/pulsar/pull/26745)）
- [修复][fn]从 BookKeeper 下载绑定函数包并阻止 SchedulerManager.close() 挂在卡住的调度轮次上 ([#26556](https://github.com/apache/pulsar/pull/26556))
- [修复][fn] 检查函数、源和接收器包 URL 的包权限 ([#26771](https://github.com/apache/pulsar/pull/26771))
- [修复][fn]触发函数时检查输入主题的生产权限([#26777](https://github.com/apache/pulsar/pull/26777))
- [修复][fn] 在 Go 函数运行时中尊重 negativeAckRedeliveryDelayMs ([#26415](https://github.com/apache/pulsar/pull/26415))
- [修复][fn] 在 Python 函数运行时中尊重 negativeAckRedeliveryDelayMs ([#26413](https://github.com/apache/pulsar/pull/26413))
- [修复][fn] 在 Go 函数运行时中尊重 ProducerSpec 批处理配置 ([#26393](https://github.com/apache/pulsar/pull/26393))
- [修复][fn] 在 Python 函数运行时中尊重 ProducerSpec 批处理配置 ([#26392](https://github.com/apache/pulsar/pull/26392))
- [修复][fn] 在Go函数运行时尊重retainOrdering和retainKeyOrdering ([#26414](https://github.com/apache/pulsar/pull/26414))
- [修复][fn] 从 pulsar-function-go 中删除已弃用的 github.com/golang/protobuf 依赖项 ([#26587](https://github.com/apache/pulsar/pull/26587))
- [修复][fn] 返回未知 JSON 属性的描述性错误 ([#26441](https://github.com/apache/pulsar/pull/26441))
- [修复][fn] 一致地验证包名称组件和存储路径 ([#26768](https://github.com/apache/pulsar/pull/26768))
- [改进][fn] 标准化 log4j2 根记录器配置以使用系统属性 ([#26121](https://github.com/apache/pulsar/pull/26121))

### 其他

- [修复][ws] 检查 WebSocket 消费者的死信主题权限 ([#26772](https://github.com/apache/pulsar/pull/26772))
- [修复][cli] 在 bin/pulsar-perf 中应用 PULSAR_MEM 和 PULSAR_GC ([#26465](https://github.com/apache/pulsar/pull/26465))
- [修复][cli]避免继承工具中的代理初始堆设置（[#26736](https://github.com/apache/pulsar/pull/26736)）
- [修复][cli]正确生成管理命令文档（[#26649](https://github.com/apache/pulsar/pull/26649)）
- [修复][cli] pulsar-perf：使用 picocli 而不是实例注册子命令类 ([#26467](https://github.com/apache/pulsar/pull/26467))
- [修复][cli]为 Java 24+ 上的 CLI 工具设置 --enable-native-access=ALL-UNNAMED ([#26365](https://github.com/apache/pulsar/pull/26365))
- [fix][cli][branch-4.2] 不要将未设置的 pulsar-perf 待处理消息选项传递给生产者 ([#26371](https://github.com/apache/pulsar/pull/26371))
- [修复][杂项] 当没有上下文属性时，从日志行中删除不必要的“ {}”后缀（[#26285](https://github.com/apache/pulsar/pull/26285)）
- [修复][杂项][branch-4.2] 将 webServiceTlsCiphers 传递到 Jetty 工厂 ([#26423](https://github.com/apache/pulsar/pull/26423))
- [改进][cli] 默认 pulsar-perf 客户端内存限制为 JVM 最大直接内存的一半 ([#26491](https://github.com/apache/pulsar/pull/26491))
- [改进][cli] pulsar-perf：将延迟直方图内存减少约 100 倍，修复范围单位和静态统计状态 ([#26466](https://github.com/apache/pulsar/pull/26466))
- [fix][misc][branch-4.2] 对 Log4j 测试配置使用正确的 log4j 模式
- [修复][客户端]允许分块消息丢弃路径中的泄漏（[#26661](https://github.com/apache/pulsar/pull/26661)）
- [修复][常见]处理来自未来供应商的同步失败（[#25939](https://github.com/apache/pulsar/pull/25939)）
- [修复] 修复在标记删除持久性期间跳过不可恢复条目时游标死锁的问题 ([#26570](https://github.com/apache/pulsar/pull/26570))
- [修复] 修复 ManagedLedgerImpl 的pendingAddEntries 泄漏。 ([#25240](https://github.com/apache/pulsar/pull/25240))

### 测试和 CI

- [improve][ci][branch-4.2] 升级 GitHub Actions 内置操作版本
- [修复][测试]允许在功能集成测试中启动 CLI ([#26564](https://github.com/apache/pulsar/pull/26564))
- [修复][测试]避免在分类帐关闭测试中阻止公共池工作人员（[#26560](https://github.com/apache/pulsar/pull/26560)）
- [修复][测试] 在多消费者测试中等待两个 DLQ 生产者 ([#26561](https://github.com/apache/pulsar/pull/26561))
- [修复][测试]在seek()之后等待阅读器重新连接以修复不稳定的TopicReaderTest断言([#26141](https://github.com/apache/pulsar/pull/26141))
- [修复][测试]覆盖调度程序关闭成员锁死锁（[#26557](https://github.com/apache/pulsar/pull/26557)）
- [修复][测试]修复由于brokerShutdownTimeoutMs泄露导致的不稳定的AdminApiTest ([#26249](https://github.com/apache/pulsar/pull/26249))
- [修复][测试]通过等待初始机架配置加载来修复不稳定的IsolatedBookieEnsemblePlacementPolicyTest ([#26429](https://github.com/apache/pulsar/pull/26429))
- [修复][测试]修复不稳定的 NonDurableCursorTest.subscribeToEarliestPositionWithDeferredDeletion ([#26747](https://github.com/apache/pulsar/pull/26747))
- [修复][测试] 修复不稳定的 OneWayReplicatorDeduplicationTest.testDeduplication ([#26737](https://github.com/apache/pulsar/pull/26737))
- [修复][测试] 修复片状 RawReaderTest.testPauseAndResumeWithUnloading ([#26690](https://github.com/apache/pulsar/pull/26690))
- [修复][测试] 修复 OneWayReplicatorSchemaValidationEnforcedTest 与复制器的远程主题创建竞争 ([#26382](https://github.com/apache/pulsar/pull/26382))
- [修复][测试]隔离测试方法之间的可变代理装置（[#26563](https://github.com/apache/pulsar/pull/26563)）
- [修复][测试]将令牌 CLI 测试输出与后台日志记录隔离（[#26657](https://github.com/apache/pulsar/pull/26657)）
- [修复][测试]在断言其最后一个消息 ID 之前加入分配尾部 ([#26536](https://github.com/apache/pulsar/pull/26536))
- [修复][测试]使一致性哈希消费者选择测试具有确定性（[#26534](https://github.com/apache/pulsar/pull/26534)）
- [修复][测试]在代理拦截器装置中保留类加载（[#26567](https://github.com/apache/pulsar/pull/26567)）
- [改进][ci] 配置 SSH 访问操作默认值并更新 Upterm ([#26575](https://github.com/apache/pulsar/pull/26575))
- [改进][ci] 在 CI 中运行 Python 函数实例测试 ([#26399](https://github.com/apache/pulsar/pull/26399))
- [修复][build][branch-4.2] 添加缺少的包信息文件
- [fix][ci][branch-4.2] 使用 ASF 批准的 docker/setup-qemu-action 版本
- [修复][测试]修复授权测试中的导入顺序
- [修复][测试][branch-4.2] 将 pulsar-perf 待定限制测试调整为 [#26342](https://github.com/apache/pulsar/pull/26342) 向后移植
- [修复][测试][branch-4.2] 仅在 CmdProduce 要求时创建 CLI 测试生成器
- [修复][测试][branch-4.x] 测试挂起消息默认值时显式禁用内存限制

---

> 📦 仓库：[apache/pulsar](https://github.com/apache/pulsar) · 🏷️ 版本：`v4.2.5` · 📅 发布：2026-10-05 · [查看英文原版 Release](https://github.com/apache/pulsar/releases/tag/v4.2.5)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
