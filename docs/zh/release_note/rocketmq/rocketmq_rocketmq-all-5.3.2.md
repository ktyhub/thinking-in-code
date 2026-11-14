---
title: "rocketmq rocketmq-all-5.3.2"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.3.2"
published: "2025-03-08"
type: "release"
lang: "zh"
summary: "此版本引入了基于 RocksDB 的 Pop 消费的新实现（处于 alpha 阶段，详细信息请参阅 RIP-73）。它改进并提供了使用 RocksDB 存储消费队列索引的能力的迁移计划，增加了对取消预定消息能力的支持，增强了优雅的在线和离线能力，并包含大量与 HA、ACL、Metrics 和 Pop 消费相关的常规细节修复。"
---

# rocketmq rocketmq-all-5.3.2

## 发生了什么变化

此版本引入了基于 RocksDB 的 Pop 消费的新实现（处于 alpha 阶段，详细信息请参阅 RIP-73）。它改进并提供了使用 RocksDB 存储消费队列索引的能力的迁移计划，增加了对取消预定消息能力的支持，增强了优雅的在线和离线能力，并包含大量与 HA、ACL、Metrics 和 Pop 消费相关的常规细节修复。

* [问题 #8784] PrintMessageSubCommand 支持 @RongtongJin 在 https://github.com/apache/rocketmq/pull/8785 中的 lmq
* [ISSUE #8790] 添加用于将标头放入元数据的实用程序，以避免 https://github.com/apache/rocketmq/pull/8792 中的 @dingshuangxi888 重复数据
* [ISSUE #8802] 在https://github.com/apache/rocketmq/pull/8803中更新@luozonle01的控制器design.md
* [问题 #8798] 修复 @luozongle01 在 https://github.com/apache/rocketmq/pull/8799 中的拼写错误
* [ISSUE #8804] 在https://github.com/apache/rocketmq/pull/8805中@leizhiyuan删除组偏移时清除偏移
* [ISSUE #8806] 修复连接多个 RocketMQ 集群时的 autoBatch 错误。作者：@luozongle01 在 https://github.com/apache/rocketmq/pull/8807
* [问题 #8810] 修复 @chi3316 在 https://github.com/apache/rocketmq/pull/8812 中独立执行 e2e 和基准部署的问题
* [问题 #8816] 修复日志拼写错误。作者：@luozongle01 在 https://github.com/apache/rocketmq/pull/8817
* [问题 #8764] 在 https://github.com/apache/rocketmq/pull/8800 中通过 @LetLetMe 在 cqrocksdb 存储中实现消耗滞后估计
* [ISSUE #8824] 修复 https://github.com/apache/rocketmq/pull/8825 中 @yx9o 逻辑错误导致的 IllegalStateException
* [ISSUE #8780] 在 https://github.com/apache/rocketmq/pull/8727 中实现 ack/ck 消息的异步存储以提高性能（@RongtongJin）
* [ISSUE #8835] 当 ck 在缓冲区中时，不完整的 ack 将导致消息重复。作者：https://github.com/apache/rocketmq/pull/8836 的@GenerousMan
* [问题 #8820] 修复 https://github.com/apache/rocketmq/pull/8821 中 @mawen12 的变量匹配注释 (@RocketMQResource)
* [问题 #8830] 修复 https://github.com/apache/rocketmq/pull/8830 中 @lizhanhui 的原子刷新错误使用和清理代码
* [问题 #8829] 修复了 https://github.com/apache/rocketmq/pull/8841 中 @lizhanhui 可配置的 ConsumeQueueStore 最底层压缩类型
* [ISSUE #8839] https://github.com/apache/rocketmq/pull/8840 中@lizhanhui 删除不必要的同步以提高并发性
* [问题 #8833] 将 netty 版本更新为 4.1.114，以修复 https://github.com/apache/rocketmq/pull/8832 中 @ShannonDing 的 CVE-2023-34462
* [问题 #8846] 修复 registerProducer 不应受到并发 scanNotAct 的影响…作者：@lizhanhui，https://github.com/apache/rocketmq/pull/8847
* [问题 #8829] 如果消费队列存储基于 RocksDB，则支持 LMQ 调度，作者：https://github.com/apache/rocketmq/pull/8842 中的 @lizhanhui
* [ISSUE #8850] 在 https://github.com/apache/rocketmq/pull/8851 中使用 @mawen12 的正确日志方法
* [问题 #8772] 在 https://github.com/apache/rocketmq/pull/8774 中删除 @redlsz 广播模式重新平衡中的锁定 mq 步骤
* [ISSUE #8442] [RIP-70] 在https://github.com/apache/rocketmq/pull/8663中通过@3424672656提取自适应锁定机制
* [ISSUE #8829] Feat：在 https://github.com/apache/rocketmq/pull/8856 中提供 ConfigManagerV2 以充分利用 RocksDB by @lizhanhui
* [ISSUE #8822] 双写cq，通过https://github.com/apache/rocketmq/pull/8823中的@LetLetMe减少不必要的开关
* [问题 #8875] 修复 https://github.com/apache/rocketmq/pull/8876 中@crazywen 的 HAConnection 泄漏问题
* [问题#8725] https://github.com/apache/rocketmq/pull/8726 中的 @yuz10 启动失败后清理 DefaultMQPushConsumer
* [ISSUE #8829] 重新加载时保留数据版本，并且 XXXConfigManagerV2 在 https://github.com/apache/rocketmq/pull/8891 中关闭 @lizhanhui 的同步
* [ISSUE #8885] 解决@RongtongJin在https://github.com/apache/rocketmq/pull/8886中CK号码统计不准确的问题
* [问题 #8808] 解决 @taomaree 在 https://github.com/apache/rocketmq/pull/8809 中针对 JDK21 不支持的“UseBiasedLocking”VM 选项
* [ISSUE #8882] 更改 acl 签名的比较方法以提高安全性。作者：@dingshuangxi888 在 https://github.com/apache/rocketmq/pull/8883
* [ISSUE #8889] 在 https://github.com/apache/rocketmq/pull/8890 中通过 @mawen12 处理循环外的命名空间
* [ISSUE #8906] 在https://github.com/apache/rocketmq/pull/8907 中@mawen12 在循环外将字符串处理为UpperCase
* [问题 #8599] 两次接收 GO_AWAY 来关闭通道时抛出异常。作者：@qianye1001 在 https://github.com/apache/rocketmq/pull/8862
* [ISSUE #8917] https://github.com/apache/rocketmq/pull/8919 中 @dingshuangxi888 的 gRPC client 主题路由返回无权限消息队列
* [问题 #8921] 通过 @zk-drizzle 在 https://github.com/apache/rocketmq/pull/8922 中为 AIO 添加 isWakeCommitWhenPutMessage
* [ISSUE #8925] 修复https://github.com/apache/rocketmq/pull/8926中@dingshuangxi888更新ACL 2.0用户的bug
* [问题 #8909] 将 nullcheck 移至 https://github.com/apache/rocketmq/pull/8910 中的 @jjastan 前面
* [问题 #8942] 通过 https://github.com/apache/rocketmq/pull/8943 中的 @RongtongJin 将 incGroupAckNums 和 incGroupCkNums 添加到 LmqBrokerStatsManager
* [问题 #8829] 支持在 https://github.com/apache/rocketmq/pull/8939 中使用 RocksDB 在 Config V1 中持久保存 LMQ 消费者偏移量
* [ISSUE #8945] 通过https://github.com/apache/rocketmq/pull/8946中的@3424672656从关键部分删除不必要的操作
* [问题 #8940] 修复 https://github.com/apache/rocketmq/pull/8941 中 @RongtongJin 的 exportMetadataInRocksDBCommand 的错误路径
* [问题 #8935] 修复 https://github.com/apache/rocketmq/pull/8936 中 @GenerousMan 计时器消息存储中的指标单位错误
* [ISSUE #8765] 修复https://github.com/apache/rocketmq/pull/8766中@yuz10启用rocksdb消费队列时延迟消息性能低下的问题
* [ISSUE #8953] 通过 https://github.com/apache/rocketmq/pull/8954 中的 @3424672656 改进异步交付流程的 IO
* [ISSUE #8829] 修复 https://github.com/apache/rocketmq/pull/8956 中 @lizhanhui 存在大量 LMQ CQ 时避免内存开销的问题
* [ISSUE #8947] 在 https://github.com/apache/rocketmq/pull/8949 中的 @lizhimins 计算消费者延迟之前通知 pop 请求
* [ISSUE #8933] 壮举：DefaultPullConsumer 添加平衡开关。通过 @humkum 在 https://github.com/apache/rocketmq/pull/8934
* [ISSUE #8929] 代理在https://github.com/apache/rocketmq/pull/8930中@qianye1001以grpc协议发送时添加消息正文空检查
* [ISSUE #8877] 重构 ReceiptHandleGroup 中的锁，使将来无法完成时可以正确释放锁。作者：@qianye1001 在 https://github.com/apache/rocketmq/pull/8916
* [ISSUE #8955] 修复消息缓冲区未释放并在分层存储中分派线程退出的问题，作者为 https://github.com/apache/rocketmq/pull/8965 中的 @lizhimins
* [ISSUE #8972] 添加 EnableLmqStats 选项允许 https://github.com/apache/rocketmq/pull/8973 中的 @RongtongJin 在运行时监控 LMQ 统计信息
* [ISSUE #8961] https://github.com/apache/rocketmq/pull/8962 中 @dingshuangxi888 的主机自动识别主题路由中的地址方案
* [问题 #8460] 当 @lizhimins 在 https://github.com/apache/rocketmq/pull/8981 中 revive 发现没有经纪人名称字段的确认时设置默认经纪人名称
* [问题 #8982] 在 https://github.com/apache/rocketmq/pull/8985 中动态安装 @chi3316 的 e2e 管道的最新 Go 版本
* [ISSUE #8976] 通过@lizhimins修改https://github.com/apache/rocketmq/pull/8977中的文件段构造方法
* [问题 #8963] 修复 https://github.com/apache/rocketmq/pull/8964 中 @yx9o 发送到 ns 的 code36 请求
* [ISSUE #8968] 引入clearRetryTopicWhenDeleteTopic选项，以实现@RongtongJin在https://github.com/apache/rocketmq/pull/8969中精确的外部删除主题
* [问题 #8991] 默认情况下，不应通过 @weihubeats 在 https://github.com/apache/rocketmq/pull/8992 中设置PrepareHeartbeatData 的订阅数据集数据
* [ISSUE #7199] GrpcClientChannel header 在https://github.com/apache/rocketmq/pull/7238中添加@weihubeats的空判断
* [ISSUE #9009] 优化https://github.com/apache/rocketmq/pull/9010中@qianye1001在DefaultPullConsumer中的消息累积显示和Metrics
* [问题 #8984] 修复 @redlsz 在 https://github.com/apache/rocketmq/pull/8986 中代理开关 enableMixedMessageType 不起作用的问题
* [问题 #8950] 删除 https://github.com/apache/rocketmq/pull/8951 中 @jjastan 对 configPath 的冗余空检查
* [ISSUE #8966] 功能：将远程地址信息添加到 https://github.com/apache/rocketmq/pull/8967 中 @humkum 的 acl perm 错误
* [ISSUE #9007] 通过 @weihubeats 在 https://github.com/apache/rocketmq/pull/9008 中修复 RemotingClient 中的 client 连接本地 ip 为空
* [问题 #9014] 修复 @yx9o 在 https://github.com/apache/rocketmq/pull/9017 中 clusterAclConfigVersion 命令执行失败的问题
* [ISSUE #7480] 修复https://github.com/apache/rocketmq/pull/7488中commitlog和consumeQueue被@RongtongJin截断时timerCheckPoint中的偏移量不会被纠正
* [ISSUE #9015] 同步 SysFlag 和消息正文膨胀状态；允许 https://github.com/apache/rocketmq/pull/9016 中的 @lizhanhui 省略消息正文
* [ISSUE #8979] 通过 https://github.com/apache/rocketmq/pull/8980 中的 @chi3316 添加计时器消息重试逻辑的可配置开关
* [问题 #9034] 重构（LmqBrokerStatsManager）：@asapple 在 https://github.com/apache/rocketmq/pull/9034 中重构 LmqBrokerStatsManager 中的冗余代码
* [ISSUE #8974] 支持 https://github.com/apache/rocketmq/pull/8975 中 @imzs 调用延迟消息
* [问题 #9042] 通过 @chi3316 在 https://github.com/apache/rocketmq/pull/9041 中使用新参数更新 createTimerMessageStore 调用
* [ISSUE #9021] 更正 https://github.com/apache/rocketmq/pull/9022 中 @yx9o 的 acl 命令错误消息
* [ISSUE #8970] 通过 @weihubeats 在 https://github.com/apache/rocketmq/pull/8971 中删除多余的心跳
* [问题 #8988] 支持 @guyinyou 在 https://github.com/apache/rocketmq/pull/8989 中的dispatchBehindMilliseconds
* [ISSUE #9028] 通过 @absolute8511 在 https://github.com/apache/rocketmq/pull/9027 中调整 SYSTEM_ERROR 的一些错误代码
* [ISSUE #9054] 优化https://github.com/apache/rocketmq/pull/9055中@mxsm在client以pop模式消费消息时的日志打印
* [ISSUE #9002] 当字节缓冲区不够时，不要抛出异常 by @leizhiyuan in https://github.com/apache/rocketmq/pull/9003
* [ISSUE #9072] 修复重试主题获取主题路由的权限检查。作者：@dingshuangxi888 在 https://github.com/apache/rocketmq/pull/9073
* [ISSUE #9025] [RIP-73] https://github.com/apache/rocketmq/pull/9048 中 @lizhimins 基于 RocksDB 的流行消费改进
* [问题 #8957] 通过 @3424672656 在 https://github.com/apache/rocketmq/pull/8958 中删除多余的流量并修复缓存不一致问题
* [ISSUE #9069] 修复 https://github.com/apache/rocketmq/pull/9071 中 @wangshaojie4039 分层存储中的 IndexFile ConcurrentModificationException
* [问题 #9075] 避免在消息同步场景中验证消息类型。作者：@dingshuangxi888 在 https://github.com/apache/rocketmq/pull/9076
* [ISSUE #9080] 修复 https://github.com/apache/rocketmq/pull/9079 中 @yuz10 从分层存储中的缓存获取大消息时的传输逻辑
* [ISSUE #8974] 添加召回功能开关，默认关闭。通过 @imzs 在 https://github.com/apache/rocketmq/pull/9067
* [问题 #9080] 未在 https://github.com/apache/rocketmq/pull/9086 中的 @lizhimins 的 fetcher 中保留最终消息存储配置
* [ISSUE #9025] [RIP-73] 修复重置偏移在 https://github.com/apache/rocketmq/pull/9087 中@lizhimins 的流行消耗中无效的问题
* [ISSUE #9025] [RIP-73] 由 @lizhimins 在 https://github.com/apache/rocketmq/pull/9100 中修改 Pop Conspiration RocksDB 初始化配置
* [问题 #9106] 修复恢复退避重试在基于 https://github.com/apache/rocketmq/pull/9107 中的 @redlsz 的 RocksDB 的 Pop 消耗中无效的问题
* [ISSUE #8998] 当https://github.com/apache/rocketmq/pull/8999中的@3424672656剩余时间达到零时，不需要重试
* [ISSUE #9105] 修复 https://github.com/apache/rocketmq/pull/9101 中 @RongtongJin 在 LMQ 中重复消费的问题
* [问题 #9108] 在 https://github.com/apache/rocketmq/pull/9109 中由 @yx9o 重构 ColdDataCgCtrService#getColdDataFlowCtrInfo
* [ISSUE #9064] 通过https://github.com/apache/rocketmq/pull/9062中的@LilMosey优化交易消息回调检查逻辑
* [ISSUE #9112] 加速流行消耗中的恢复扫描并支持https://github.com/apache/rocketmq/pull/9113中@lizhimins的服务器端重置偏移量
* [ISSUE #9121] 修复 https://github.com/apache/rocketmq/pull/9122 中 @guyinyou 当值为 0 时 CRC32 检查失败的问题
* [ISSEU #6426] 修复从属代理 SubscriptionGroupConfig 和 MessageRequestMode 由 @AuroraTwinkle 在 https://github.com/apache/rocketmq/pull/8983 中自动更新
* [ISSUE #9111] 支持将代理 RocksDB 配置导出到 https://github.com/apache/rocketmq/pull/9114 中的 @qianye1001 到 json 文件
* [ISSUE #8895]修复broker关闭时的NPE并优化https://github.com/apache/rocketmq/pull/9094中@qianye1001的日志
* [ISSUE #9128] 修复 https://github.com/apache/rocketmq/pull/9129 中 @qianye1001 更改代理后，gRPC client 立即收到确认消息时的 NPE
* [ISSUE #4570] 修复：Docker 使用可能会在卷映射参数中出现错误，通过 @OneCodeMonkey 在 https://github.com/apache/rocketmq/pull/9096 中进行简单修复
* [ISSUE #9119] 调用异步应该处理原始异常，而不是 https://github.com/apache/rocketmq/pull/9120 中 @gaoyf 的 CompletionException
* [ISSUE #9160] 确保 requestCode 在 https://github.com/apache/rocketmq/pull/9159 中按 @KiteSoar 顺序递增
* [ISSUE #9152] Broker getConsumeStats 支持在 https://github.com/apache/rocketmq/pull/9153 中通过 @qianye1001 输入多个主题
* [ISSUE #9149] 即使订阅密钥不存在，也要在 offsetTable 中分配偏移量。作者：@dingshuangxi888 在 https://github.com/apache/rocketmq/pull/9150
* [问题 #9156] 在 https://github.com/apache/rocketmq/pull/9157 中的 @yx9o 在 AclUtils#getAclRPCHook 中使用 fastjson2
* [问题 #9174] 在 https://github.com/apache/rocketmq/pull/9175 中添加一组预定义组和通用Che...由 @ltamber
* [ISSUE #9172] 当 @lizhimins 在 https://github.com/apache/rocketmq/pull/9173 中删除订阅组时，清除拉动偏移并重置偏移
* [问题 #9181] 在 https://github.com/apache/rocketmq/pull/9180 中更新 @ltamber 的 fastjson 版本
* [问题 #9182] 修复当 @gaoyf 在 https://github.com/apache/rocketmq/pull/9183 中将 needWaitForService 设置为 true 时，NameServer 将永远无法准备好
* [ISSUE #9187] 在https://github.com/apache/rocketmq/pull/9186中通过@RongtongJin更改不可见时间时，如果queueOffset等于maxOffset，则请求应该被拒绝
* [问题 #9201] 清理死代码模式并提高可读性和可维护性。作者：@Kris20030907 在 https://github.com/apache/rocketmq/pull/9202
* [ISSUE #9191] 提供通过 https://github.com/apache/rocketmq/pull/9192 中的 @f1amingo 替换代理和代理的远程处理层实现的能力
* [ISSUE #9203] 将数字替换为https://github.com/apache/rocketmq/pull/9204中@xinzhuxiansheng在RequestCode中定义的静态变量
* [ISSUE #9206] 修复 https://github.com/apache/rocketmq/pull/9207 中@fujian-zfj 在rocksdb ha 中的从同步主题子
* [问题 #8340] RuntimeInfo 和 ClusterListSubCommand 在 https://github.com/apache/rocketmq/pull/8339 中显示 @RongtongJin 的 ackThreadPoolQueueSize 和 ackThreadPoolQueueHeadWaitTimeMills
* [ISSUE #8589] 优化 https://github.com/apache/rocketmq/pull/9212 中 @qianye1001 使用 DoubleWriteCQ 时 RocksDB CQ 关闭
* [ISSUE #9213] 修复https://github.com/apache/rocketmq/pull/9214中@lizhimins在分层存储中清理数据时获取最早时间的错误
* [ISSUE #9196] 经纪人在 https://github.com/apache/rocketmq/pull/9197 中收到 @qianye1001 的通知时返回流行统计数据
* [问题 #9217] 修复 @lizhimins 在 https://github.com/apache/rocketmq/pull/9218 中启用 pop 消费者服务时代理的传输和可用消息计数不正确的问题
* [问题 #9221] 通过 @yx9o 在 https://github.com/apache/rocketmq/pull/9222 中提取 BrokerPathConfigHelper 中的一些常用代码
* [ISSUE #8127] https://github.com/apache/rocketmq/pull/8128中@3424672656优化时间轮的度量计算逻辑
* [ISSUE #9184] 优化https://github.com/apache/rocketmq/pull/9185中@mxsm Pop中的QueueLockManager#tryLock方法

## 新贡献者
* @mawen12 在 https://github.com/apache/rocketmq/pull/8821 中做出了第一个贡献
* @taomaree 在 https://github.com/apache/rocketmq/pull/8809 中做出了第一个贡献
* @jjastan 在 https://github.com/apache/rocketmq/pull/8910 中做出了第一个贡献
* @asapple 在 https://github.com/apache/rocketmq/pull/9034 中做出了第一个贡献
* @draw233 在 https://github.com/apache/rocketmq/pull/9037 中做出了他们的第一个贡献
* @LilMosey 在 https://github.com/apache/rocketmq/pull/9062 中做出了第一个贡献
* @AuroraTwinkle 在 https://github.com/apache/rocketmq/pull/8983 中做出了第一个贡献
* @OneCodeMonkey 在 https://github.com/apache/rocketmq/pull/9096 中做出了第一个贡献
* @Kris20030907 在 https://github.com/apache/rocketmq/pull/9124 中做出了第一个贡献
* @KiteSoar 在 https://github.com/apache/rocketmq/pull/9159 中做出了第一个贡献
* @Lynxhide 在 https://github.com/apache/rocketmq/pull/9158 中做出了第一个贡献
* @xinzhuxiansheng 在 https://github.com/apache/rocketmq/pull/9204 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/rocketmq/compare/rocketmq-all-5.3.1...rocketmq-all-5.3.2

---

> 📦 仓库：[apache/rocketmq](https://github.com/apache/rocketmq) · 🏷️ 版本：`rocketmq-all-5.3.2` · 📅 发布：2025-03-08 · [查看英文原版 Release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.3.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
