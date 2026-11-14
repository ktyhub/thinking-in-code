---
title: "rocketmq rocketmq-all-5.3.4"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.3.4"
published: "2025-11-27"
type: "release"
lang: "zh"
---

# rocketmq rocketmq-all-5.3.4

这是一个错误修复版本，包含许多改进以增强稳定性、性能和正确性。主要亮点包括关键依赖项升级（例如，Netty、OpenTelemetry）、显着的稳定性增强（例如用于可靠恢复的 TimerWheel 快照机制）以及跨模块（例如 Broker、Proxy 和 Client）的广泛错误修复。 

## 发生了什么变化
* [问题 #9337] 由 @weihubeats 在 https://github.com/apache/rocketmq/pull/9338 中将 Netty 升级到 4.1.119.Final
* [ISSUE #9253] 当响应过程在 https://github.com/apache/rocketmq/pull/9255 中遇到 @redlsz 错误时，使消息更早可见
* [ISSUE #8651] 修复 @redlsz 在 https://github.com/apache/rocketmq/pull/8652 中的恢复主题进程滞后指标计算
* [问题 #8629] 在 https://github.com/apache/rocketmq/pull/8630 中添加代理 RocketmqTraffic 记录器附加程序以分隔流量日志（@redlsz）
* [ISSUE #8232] 修复 https://github.com/apache/rocketmq/pull/8233 中 @redlsz 代理远程线程池隔离不生效的问题
* [ISSUE #9414] 将自述文件中的快速入门版本更新为 https://github.com/apache/rocketmq/pull/9415 中的 @mxsm 的 5.3.3
* [ISSUE #9412] 在 https://github.com/apache/rocketmq/pull/9413 中 @GenerousMan 删除原始文件之前刷新 bak 指标文件
* [ISSUE #9403] 修复 https://github.com/apache/rocketmq/pull/9404 中主题具有 @RongtongJin 属性时主从之间元数据同步失败的问题
* [ISSUE #9416] 修复批量发送消息在 https://github.com/apache/rocketmq/pull/9417 中被 @qianye1001 消费时具有相同消息 id 的问题
* [ISSUE #9379] 当 @lizhimins 在 https://github.com/apache/rocketmq/pull/9419 中 timeStoreTable 为空时设置紧凑时间戳
* [问题 #9418] 修复 https://github.com/apache/rocketmq/pull/9420 中 @lizhimins 在 PopConsumerRocksdbStore 中 ColumnFamilyHandle 未关闭的问题
* [ISSUE #9352] 通过 @golden-yang 在 https://github.com/apache/rocketmq/pull/9424 中修复主题组缓存中的错误值
* [问题 #9441] 在 https://github.com/apache/rocketmq/pull/9442 中的 @lizhimins 在 IndexService 中添加文件长度检查
* [问题 #9443] 修复 https://github.com/apache/rocketmq/pull/9444 中 @yx9o 在 ConsumerManager 中向 topicGroupTable 添加错误值的问题
* [ISSUE #9254] 在https://github.com/apache/rocketmq/pull/9256中添加CombineConsumeQueue以支持@qianye1001的CQ迁移
* [ISSUE #9439] 在 https://github.com/apache/rocketmq/pull/9440 中 @Crazylychee 返回代理配置的方法中添加 win 的转义
* [ISSUE #9451] 将背压默认值优化为 1024。作者：https://github.com/apache/rocketmq/pull/9452 中的@GenerousMan
* [ISSUE #9454] 确保 @qianye1001 在 https://github.com/apache/rocketmq/pull/9457 中使用 RocksDB CQ 时可以删除主题
* 修复 https://github.com/apache/rocketmq/pull/9408 中 @hepengju 触发过早关闭导致应用关闭时出现 IllegalStateException 的问题
* [问题 #9335] 在 https://github.com/apache/rocketmq/pull/9474 中使用 MixAll.ROCKETMQ_HOME_DIR 作为 @WJ66880 的主目录
* [问题 #9481] 修复问题 4050 没有被 @WJ66880 在 https://github.com/apache/rocketmq/pull/9482 中完全修复
* [问题 #9489] 通过 https://github.com/apache/rocketmq/pull/9490 中的 @3424672656 修复 #removeOffset 中的干净拉动偏移
* [ISSUE #8920] 重构 SSL 上下文加载过程以支持 https://github.com/apache/rocketmq/pull/9483 中 @EnableAsync 的多协议动态加载
* [ISSUE #9491] 删除https://github.com/apache/rocketmq/pull/9492中@huanzhikang在GroupCommitService类中requestsWrite和requestsRead这两个变量的易失性声明
* [问题 #9486] 修复 https://github.com/apache/rocketmq/pull/9487 中 @WJ66880 缺少 valueOfCurrentMinusBorn 等于 checkImmunityTime 的问题
* [ISSUE #9497] 修复在 IPv6 环境中运行时 getEarliestMessageTime 中的 IndexOutOfBoundsException，作者为 https://github.com/apache/rocketmq/pull/9498 中的@woaishixiaoxiao
* [ISSUE #9479] 在 https://github.com/apache/rocketmq/pull/9480 中 @Allenhuangrui 创建重试和 dlq 主题时放宽主题长度限制
* [问题#9476]在DefaultTransactionalMessageCheckListener#toMessageExtBrokerInner中将queueId设置为0以提高https://github.com/apache/rocketmq/pull/9477中@mxsm的性能
* [问题 #9447] 通过 https://github.com/apache/rocketmq/pull/9459 中的 @AROP-REPLICATION 避免 InputStream 中可能出现的资源泄漏
* [ISSUE #9467] 在 https://github.com/apache/rocketmq/pull/9468 中通过 @ltamber 实现主题和订阅组信息的分页检索
* [问题 #8920] 通过 https://github.com/apache/rocketmq/pull/9513 中的 @EnableAsync 配置 TLS 证书监视间隔
* 修复 https://github.com/apache/rocketmq/pull/9511 中 @datagramsocket 的 CONTRIBUTING.md 拼写错误
* [问题 #9501] 更正 https://github.com/apache/rocketmq/pull/9502 中 @yx9o 的不匹配评论
* [ISSUE #9515] 当https://github.com/apache/rocketmq/pull/9516中的changeInvisibleDuration遇到@qianye1001的流量限制时，将原始句柄返回给消费者
* [问题#9254]修复了combineCQ额外的搜索commitLog文件以供https://github.com/apache/rocketmq/pull/9526中的@qianye1001恢复
* [ISSUE #9309] 避免 https://github.com/apache/rocketmq/pull/9310 中的 @3424672656 在 #assignResetOffset 中生成脏数据
* [ISSUE #9530] 通过https://github.com/apache/rocketmq/pull/9530中的@3424672656减少adaptiveBackOffSpinLock中不必要的内存分配
* [ISSUE #9520] 在 https://github.com/apache/rocketmq/pull/9521 中启用 @RongtongJin 启用拆分注册时，删除不必要的 topicConfig 数据版本更改
* [ISSUE #9254] 优化https://github.com/apache/rocketmq/pull/9528中@qianye1001的消息存储日志
* [ISSUE #9537] MQClientAPIFactory 通过 @qianye1001 在 https://github.com/apache/rocketmq/pull/9538 中实现 NameServerUpdateCallback 接口
* [ISSUE #9544] 在 https://github.com/apache/rocketmq/pull/9545 中 @lizhimins 初始化文件段时必须更正文件大小
* [问题 #9539] 通过 https://github.com/apache/rocketmq/pull/9540 中的 @1782935682 修复 ACL 2.0 中的比较策略条目逻辑
* [ISSUE #9534] 删除https://github.com/apache/rocketmq/pull/9533中@RongtongJin无意义的brokerVersion
* [ISSUE #9555] 修复https://github.com/apache/rocketmq/pull/9556中@1782935682当subscriptionDataSet为null时hashCode方法中的npe
* [问题 #9553] 通过避免 https://github.com/apache/rocketmq/pull/9554 中 @yx9o 重复 get(key) 来提高性能
* 将组最大长度限制为 120。作者：https://github.com/apache/rocketmq/pull/9563 中的 @lollipopjin
* [ISSUE #9254]重构RocksDBConsumeQueueStore中的notifyMessageArriveInBatch以适应https://github.com/apache/rocketmq/pull/9566中@qianye1001的CombineConsumeQueueStore
* [问题 #9572] @yx9o 在 https://github.com/apache/rocketmq/pull/9573 中清理不必要的代码注释
* 修复 https://github.com/apache/rocketmq/pull/9560 中 @co63oc 的拼写错误
* [ISSUE #9254] 通过https://github.com/apache/rocketmq/pull/9599中的@qianye1001优化CombineConsumeQueueStore中的innerConsumeQueueStoreList顺序
* [ISSUE #9596] 优化https://github.com/apache/rocketmq/pull/9597中@1782935682当addr为空时invokeSync的登录
* [问题 #9605] 修复了 @yx9o 在 https://github.com/apache/rocketmq/pull/9606 中潜在的资源泄漏
* [ISSUE #9589] 通过 @qianye1001 在 https://github.com/apache/rocketmq/pull/9598 中优化代理指标初始化
* [问题 #9611] 应该在 https://github.com/apache/rocketmq/pull/9612 中基于 @lizhimins 的 Rocksdb impl 在 Pop 中执行回调
* [ISSUE #9600] 删除https://github.com/apache/rocketmq/pull/9608中@3424672656在rpc中发送消息的回调中的错误逻辑
* [问题 #9626] 在 https://github.com/apache/rocketmq/pull/9627 中 @lizhimins 防止消费者记录刷新之前过早提交偏移量
* [ISSUE #9542, #9609] 通过 https://github.com/apache/rocketmq/pull/9610 中的 @xuhongxu96 修复 bazel CI 并减少依赖关系
* [ISSUE #9652] 通过 @GabrielDUX 在 https://github.com/apache/rocketmq/pull/9653 中增强 MQClientInstance 的测试
* [问题 #9648] 修复 https://github.com/apache/rocketmq/pull/9649 中 @GabrielDUX 中的 getOffsetInQueueByTime 在 tieredMessageStore 中缺少的 borderType
* 通过 @redlsz 在 https://github.com/apache/rocketmq/pull/7838 中修复 DefaultMessagingProcessor 的 start() 和 shutdown()
* [ISSUE #9663] 在 https://github.com/apache/rocketmq/pull/9665 中采用 @cvictory 的 Maven 修订机制（需要 Maven >= 3.5.0）
* [问题 #9650] https://github.com/apache/rocketmq/pull/9651 中 @yx9o 统一常见问题解答相关 URL
* [ISSUE #9620] https://github.com/apache/rocketmq/pull/9621 中 @yx9o 的占位符替换字符串连接
* [ISSUE #9581] https://github.com/apache/rocketmq/pull/9579 中@RongtongJin 优化 LMQ 场景下 pollingMap 和 topicCidMap 的资源膨胀
* [问题 #9764] 修复 https://github.com/apache/rocketmq/pull/9675 中@yx9o 的 bazel 编译（ubuntu-latest）错误
* [ISSUE #9666] 通过 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9667 中使用 SYNC_FLUSH 为 RocksDB 存储添加加速启动恢复功能
* [ISSUE #9634] 通过 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9635 中改进 BrokerContainer 的可扩展性和模块结构
* [问题 #9547] 如果 https://github.com/apache/rocketmq/pull/9679 中的 @1782935682 属性不为空，则修复同步组
* [问题 #9682] 在 https://github.com/apache/rocketmq/pull/9683 中 @mxsm 将扫描不活动代理的初始延迟增加到 5000 毫秒
* [ISSUE #9680] 改进 RocksDB 压缩过滤器工厂资源管理，作者：@RongtongJin，https://github.com/apache/rocketmq/pull/9681
* [ISSUE #9677] 通过 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9678 中解决 BrokerContainer 模式下的指标静态变量冲突
* [ISSUE #9695] 在 https://github.com/apache/rocketmq/pull/9696 中 @lizhimins 使用 pop 有序消费时不使用拉动偏移
* [ISSUE #9693] 添加 writeWithoutMmap 配置以防止 https://github.com/apache/rocketmq/pull/9694 中的@guyinyou 设备变为只读时 JVM 崩溃
* [问题 #9701] 同步指标关闭以防止 https://github.com/apache/rocketmq/pull/9702 中 @guyinyou 在代理关闭期间 JVM 崩溃
* [ISSUE #9703] https://github.com/apache/rocketmq/pull/9704 中 @qianye1001 删除主题时删除拉动偏移并重置偏移
* [ISSUE #9707] 将 RunningFlags 与 MappedFile 系统集成，以实现更好的错误处理和状态管理，作者：https://github.com/apache/rocketmq/pull/9708 中的 @guyinyou
* [问题 #9713] 通过 https://github.com/apache/rocketmq/pull/9714 中的 @guyinyou 提高 DefaultMappedFile 刷新方法中的数据一致性
* [ISSUE #9699] 由 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9700 中优化关闭过程和资源管理
* [ISSUE #9705] 提高 persist() 方法的可靠性，以防止断电后代理启动失败，@guyinyou 在 https://github.com/apache/rocketmq/pull/9706
* [ISSUE #9709] 在 https://github.com/apache/rocketmq/pull/9710 中添加 @guyinyou 为 CommitLog 添加 enableRunningFlagsInFlush 配置开关
* [ISSUE #9716] 重构：https://github.com/apache/rocketmq/pull/9715 中 @RongtongJin 将 RandomAccessFile 替换为 FileChannel
* [问题 #9717] 修复 RaftBrokerHeartBeatManager#scanNotActiveBroker 实际上并未由 @redlsz 在 https://github.com/apache/rocketmq/pull/9718 中执行
* [ISSUE #9721] 修复 https://github.com/apache/rocketmq/pull/9722 中 @RongtongJin 关闭后 TimerDequeueGetService 线程不退出的问题
* [ISSUE #9689] 修复 https://github.com/apache/rocketmq/pull/9690 中 @redlsz 未及时更新主传输纪元的问题
* [ISSUE #9719] 修复多代理指标管理中的静态变量冲突，作者：@RongtongJin，https://github.com/apache/rocketmq/pull/9720
* 通过 @cvictory 在 https://github.com/apache/rocketmq/pull/9724 中修复/更新 v2 配置中的元数据错误
* [ISSUE #9726] 抽象 StoreMetricsManager 接口，支持 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9727 中的非 DefaultMessageStore 实现
* [问题 #9687] 清理 https://github.com/apache/rocketmq/pull/9688 中 @majialoong 的 BrokerHeartbeatManager 代码
* [ISSUE #9732] 当 https://github.com/apache/rocketmq/pull/9733 中的 @qianye1001 本地进程超时时，修复请求仍可能被调用
* [问题 #9658] 将 https://github.com/apache/rocketmq/pull/9659 中的 @yx9o 的 JUnit 5 导入替换为 JUnit 4
* [问题 #9743] 在 https://github.com/apache/rocketmq/pull/9744 中修复 @yx9o 的 ReceiptHandleProcessorTest
* 修复 https://github.com/apache/rocketmq/pull/9748 中 @survivant 的文档/hacktoberfest 中的拼写错误和语言错误
* 修复 @LittleBoy18 在 https://github.com/apache/rocketmq/pull/9746 中获取 dledger mod 存储路径
* [ISSUE #9741] 通过 @yx9o 在 https://github.com/apache/rocketmq/pull/9742 中优化身份验证白名单查找效率
* [ISSUE #9739] 在 https://github.com/apache/rocketmq/pull/9749 中由 @lizhimins 恢复在 macos 环境中跳过的测试用例
* [ISSUE #9750] 修复 https://github.com/apache/rocketmq/pull/9751 中 @RongtongJin 的 isAsyncSendEnable 为 false 时的 NPE
* [ISSUE #9756] 修复https://github.com/apache/rocketmq/pull/9755中@RongtongJin使用brokerStartup启动broker时端口始终为10911的问题
* [ISSUE #9752] https://github.com/apache/rocketmq/pull/9753 中的 @dingshuangxi888 将时间出队延迟单位修复为毫秒
* [问题 #9761] 修复 https://github.com/apache/rocketmq/pull/9762 中 @majialoong 中的 AuthorizationMetadataManagerImpl 中的获取身份验证和授权元数据提供程序错误
* [ISSUE #9758] 修复资源过滤器在 https://github.com/apache/rocketmq/pull/9759 中 @majialoong 的 listAcl 中不生效的问题
* [问题 #9765] 通过 https://github.com/apache/rocketmq/pull/9766 中的 @yx9o 改进文件操作中的空处理
* [问题 #9767] 修复 https://github.com/apache/rocketmq/pull/9768 中的 @majialoong 在 DefaultAuthorizationContextBuilder 中 UnlockBatchRequestBody 的错误解码方法
* [问题 #9769] 在 https://github.com/apache/rocketmq/pull/9770 中的 @carlvine500 在系统属性中添加 tls.ciphers 和 tls.protocols
* [问题#9771]从https://github.com/apache/rocketmq/pull/9772中的@RongtongJin从transactionalMessageCheckListener executorService中删除静态以支持brokercontainer中的多代理
* [ISSUE #9763] 修复 https://github.com/apache/rocketmq/pull/9764 中@majialoong 授权中无效的用户禁用状态检查
* [问题 #9773] 在 https://github.com/apache/rocketmq/pull/9774 中为代理配置实现 @qianye1001 的共享 RocksDB 实例
* [ISSUE #9776] 通过 https://github.com/apache/rocketmq/pull/9775 中的 @RongtongJin 通过 MessageStoreConfig.maxMessageSize 配置 SharedByteBuffer 大小
* [问题 #9773] 修复 @qianye1001 在 https://github.com/apache/rocketmq/pull/9783 中关闭代理两次时的核心转储
* 将 https://github.com/apache/rocketmq/pull/9788 中的 @majialoong 的方法名称从 updateDateVersion 更正为 updateDataVersion
* [问题 #9784] 修复策略比较器，将 DENY 优先于 ALLOW，作者为 https://github.com/apache/rocketmq/pull/9785 中的 @majialoong
* [ISSUE #9798] 减少https://github.com/apache/rocketmq/pull/9799中@qianye1001通过代理发送消息时不必要的线程切换
* [ISSUE #9811] 修复了 @lizhimins 在 https://github.com/apache/rocketmq/pull/9812 中的信誉服务中循环迭代过多的问题
* [ISSUE #9816] 修复 https://github.com/apache/rocketmq/pull/9817 中 @lizhimins 计算消费者延迟时并发修改 opentelemetry 记录的问题
* [ISSUE #9813] 通过 https://github.com/apache/rocketmq/pull/9818 中的 @lizhimins 修复分层存储中的缓冲区获取线程池饥饿问题
* 修复了https://github.com/apache/rocketmq/pull/9825中@TheRealHaui的CommandUtil.fetchMasterAddrByBrokerName的错误消息
* [ISSUE #9802] 修复@lizhimins在https://github.com/apache/rocketmq/pull/9803中分层存储索引服务中删除逻辑的问题
* [ISSUE #9819] 将 OpenTelemetry 升级到 https://github.com/apache/rocketmq/pull/9820 中的 @RongtongJin 版本 1.44.1
* [ISSUE #9735] 添加 TimerWheel 快照机制以实现可靠恢复（@guyinyou 在 https://github.com/apache/rocketmq/pull/9736 中）
* 通过@lizhimins在https://github.com/apache/rocketmq/pull/9836抽象类中添加按时间戳偏移的查询消息
* [ISSUE #9821] 修复 @yx9o 在 https://github.com/apache/rocketmq/pull/9822 中 getBrokerConfig 对空参数无响应的问题
* [问题 #9794] 在 https://github.com/apache/rocketmq/pull/9795 中 @yx9o 的文档中将 JDK 先决条件从 1.7+ 更改为 1.8+
* 修复 https://github.com/apache/rocketmq/pull/9845 中 @LittleBoy18 的控制器模式 scanControllerAddress
* [#ISSUE 9841] 改进 TimerWheel 中的资源管理以防止文件句柄泄漏，作者：@guyinyou，https://github.com/apache/rocketmq/pull/9842
* [问题 #9632] 修复：https://github.com/apache/rocketmq/pull/9828 中 @qianye1001 的 V1 重试消息的 Pop 长轮询未唤醒
* [问题 #9838] 当 @RongtongJin 在 https://github.com/apache/rocketmq/pull/9839 中磁盘不可写入时，IndexStoreService 使用forceShutdown
* [问题 #9834] 支持 https://github.com/apache/rocketmq/pull/9835 中 @RongtongJin 在 IndexStoreFile 中的 writeWithoutMmap
* 修复https://github.com/apache/rocketmq/pull/9840中@RongtongJin关闭IndexStoreFile时的资源泄漏问题
* [ISSUE #9593] 优化 @yx9o 在 https://github.com/apache/rocketmq/pull/9594 中的 Deflater 资源释放
* [ISSUE #9847] 减少 HandleData 对象上的锁争用，以防止 @qianye1001 在 https://github.com/apache/rocketmq/pull/9848 中挂起线程
* [ISSUE #9857] 通过在https://github.com/apache/rocketmq/pull/9858中删除@qianye1001不必要的重试检查来优化通知的性能
* [ISSUE #9807] 优化https://github.com/apache/rocketmq/pull/9808中@yx9o发送方法中log.warn的时间消耗
* [ISSUE #9737] 修复 https://github.com/apache/rocketmq/pull/9740 中 @qianye1001 连接失败导致 client 内存泄漏
* [问题 #9849] 通过 https://github.com/apache/rocketmq/pull/9850 中的 @majialoong 更正 ClusterMetadataService 中的 ACL 缓存加载器错误日志
* [ISSUE #9741] 优化https://github.com/apache/rocketmq/pull/9760中@majialoong的授权白名单查找效率
* [ISSUE #9809] 当https://github.com/apache/rocketmq/pull/9810中的@majialoong主题为空时修复getAcl中的NPE
* [ISSUE #9789] LitePullConsumer 支持在 https://github.com/apache/rocketmq/pull/9790 中手动添加 @qianye1001 在 Heartbeat 中报告的订阅
* [ISSUE #9862] [Bug] 修复 https://github.com/apache/rocketmq/pull/9863 中 @dingshuangxi888 启用代理 ACL 时 POP 请求中出生时间缺失的问题
* [问题 #9870] 确保 https://github.com/apache/rocketmq/pull/9871 中的 @majialoong 正确关闭元数据提供程序缓存执行器
* [ISSUE #9779] 修复“DirectBuffer 在 9+ JDK 版本中会导致错误”的问题。通过 @sinberCS 在 https://github.com/apache/rocketmq/pull/9801
* [问题 #9663] 在 https://github.com/apache/rocketmq/pull/9866 中添加 @lizhimins 的 flatten-maven-plugin 插件
* [ISSUE #9816] 修复了 @lizhimins 在 https://github.com/apache/rocketmq/pull/9873 中使用 opentelemetry 计算消费者滞后的问题
* [问题 #9875] 优化 useSingleRocksDBForAllConfigs 设置为 true 时的 RocksDB 配置关闭逻辑，以防止 JVM 崩溃。作者：https://github.com/apache/rocketmq/pull/9874 @RongtongJin
* [ISSUE #9734] 准备在 https://github.com/apache/rocketmq/pull/9861 中由 @lizhimins 发布 Apache RocketMQ 5.3.4

## 新贡献者
* @hepengju 在 https://github.com/apache/rocketmq/pull/9408 中做出了第一个贡献
* @EnableAsync 在 https://github.com/apache/rocketmq/pull/9483 中做出了第一个贡献
* @huanzhikang 在 https://github.com/apache/rocketmq/pull/9492 中做出了第一个贡献
* @woaishixiaoxiao 在 https://github.com/apache/rocketmq/pull/9498 中做出了第一个贡献
* @Allen Huangrui 在 https://github.com/apache/rocketmq/pull/9480 中做出了第一个贡献
* @AROP-REPLICATION 在 https://github.com/apache/rocketmq/pull/9459 中做出了第一个贡献
* @datagramsocket 在 https://github.com/apache/rocketmq/pull/9511 中做出了第一个贡献
* @1782935682 在 https://github.com/apache/rocketmq/pull/9540 中做出了第一个贡献
* @co63oc 在 https://github.com/apache/rocketmq/pull/9560 中做出了第一个贡献
* @xuhongxu96 在 https://github.com/apache/rocketmq/pull/9610 中做出了第一个贡献
* @GabrielDUX 在 https://github.com/apache/rocketmq/pull/9653 中做出了第一个贡献
* @cvictory 在 https://github.com/apache/rocketmq/pull/9665 中做出了第一个贡献
* @majialoong 在 https://github.com/apache/rocketmq/pull/9688 中做出了第一个贡献
* @survivant 在 https://github.com/apache/rocketmq/pull/9748 中做出了第一个贡献
* @TheRealHaui 在 https://github.com/apache/rocketmq/pull/9825 中做出了第一个贡献
* @sinberCS 在 https://github.com/apache/rocketmq/pull/9801 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/rocketmq/compare/rocketmq-all-5.3.3...rocketmq-all-5.3.4

---

> 📦 仓库：[apache/rocketmq](https://github.com/apache/rocketmq) · 🏷️ 版本：`rocketmq-all-5.3.4` · 📅 发布：2025-11-27 · [查看英文原版 Release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.3.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
