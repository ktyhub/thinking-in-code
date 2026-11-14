---
title: "rocketmq rocketmq-all-5.3.3"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.3.3"
published: "2025-05-07"
type: "release"
lang: "zh"
summary: "该版本不再支持“ACL 1.0”相关功能，请使用“ACL 2.0”。 此外，此次要版本还包括一些常规错误修复。"
---

# rocketmq rocketmq-all-5.3.3

## 发生了什么变化
该版本不再支持“ACL 1.0”相关功能，请使用“ACL 2.0”。 
此外，此次要版本还包括一些常规错误修复。
* [问题 #8997] 确保当代理在 https://github.com/apache/rocketmq/pull/9137 中 @gaoyf 没有响应时有机会发送重试消息
* [问题 #9233] 由于 @bxfjb 在 https://github.com/apache/rocketmq/pull/9234 中未选择第一个正确的索引文件，分层存储中的查询消息可能会失败
* [ISSUE #9246] 支持 PopConsumerService 中的 init 偏移模式 by @lizhimins in https://github.com/apache/rocketmq/pull/9247
* 修复不稳定的测试：BrokerOuterAPITest.test_needRegister_timeout by @DivyanshIITB in https://github.com/apache/rocketmq/pull/9250
* [ISSUE #9249] 当交付失败时，@coolmoon101 在 https://github.com/apache/rocketmq/pull/9252 中的交付设置中存在不正确的起始偏移量
* [ISSUE #9241] RocksDBConsumeQueueStore 不需要通过 @qianye1001 在 https://github.com/apache/rocketmq/pull/9242 中更新 StoreCheckpoint
* [ISSUE #9244]避免https://github.com/apache/rocketmq/pull/9245中的@3424672656在消费模式下写入脏数据
* [问题 #8701] 修复 https://github.com/apache/rocketmq/pull/9263 中 @DivyanshIITB 中 MQClientInstance.java 中的brokerAddrTable 属性的文档
* [问题 #8243] 通过 https://github.com/apache/rocketmq/pull/9258 中的 @DivyanshIITB 更新 RocketMQ 5.x 兼容性的配置文档
* [ISSUE #9259] 删除 https://github.com/apache/rocketmq/pull/9260 中 @mxsm 对 StoreCheckpoint 的重复刷新操作
* [ISSUE #9266] 将 README 中的快速入门版本更新为 https://github.com/apache/rocketmq/pull/9267 中 @yx9o 的最新版本
* [ISSUE #7948] 防止 @yangxiaohui-coll 在 https://github.com/apache/rocketmq/pull/9265 中调用 queryMessage 方法导致 OOM
* [问题 #9271] 在 https://github.com/apache/rocketmq/pull/9272 中通过 @bxfjb 增强分层存储 getQueueOffsetByTimeAsync
* [问题 #9282] 通过 @yx9o 在 https://github.com/apache/rocketmq/pull/9283 中优化 BrokerController#printWaterMark
* [ISSUE #9304] 解决 https://github.com/apache/rocketmq/pull/9305 中 @ymwneu 的 DefaultMessageStore 中的冷数据读取控制问题
* [问题 #9300] @ymwneu 在 https://github.com/apache/rocketmq/pull/9301 中定期清理 StatsItemSet 中的非活动项目
* [问题 #9286] 在 https://github.com/apache/rocketmq/pull/9287 中通过 @ymwneu 通过 SQL92 过滤时计算过滤的消息
* [ISSUE #9284] 当 pullMessage 溢出 1 时，应该通过 @ymwneu 在 https://github.com/apache/rocketmq/pull/9285 中刷新 recordDiskFallBehind 数据
* [问题 #9279] 限制系统订阅组创建并添加 @ymwneu 在 https://github.com/apache/rocketmq/pull/9280 中的拉取请求拒绝策略
* 避免 NPE 处理 https://github.com/apache/rocketmq/pull/9308 中@lollipopjin 中的 notificationClientTermination 中的 client 设置 null
* [ISSUE #9297] 支持输出主题 put TPS by @ymwneu in https://github.com/apache/rocketmq/pull/9298
* [ISSUE #1918] 在 https://github.com/apache/rocketmq/pull/9278 中 @fuyou001 在 PullMessageService 线程运行方法中捕获 throwable
* [ISSUE #9302] SendMessageContext 通过 @ymwneu 在 https://github.com/apache/rocketmq/pull/9303 中添加消息类型
* https://github.com/apache/rocketmq/pull/9324中@RongtongJin优化tlsHelper的日志输出
* https://github.com/apache/rocketmq/pull/9295 中 @gaoyf 的 Prxoy 远程处理兼容批处理消息
* [ISSUE #9115] 优化https://github.com/apache/rocketmq/pull/9116中@yx9o对consumerId更改的broker的反向通知
* [ISSUE #9288] 支持 https://github.com/apache/rocketmq/pull/9293 中 @ymwneu 禁用生产者注册和快速通道关闭
* [问题 #9331] 在 https://github.com/apache/rocketmq/pull/9332 中由 @WJ66880 发现一个信息日志在代理启动期间丢失参数
* 确保通过 @lollipopjin 在 https://github.com/apache/rocketmq/pull/9327 中为“systemTopicClusterName”集群中的所有代理创建系统主题
* [ISSUE #9339] 修复 https://github.com/apache/rocketmq/pull/9340 中 @lizhimins 过滤消息时弹出更新消耗偏移
* [ISSUE #9358] 当 @bxfjb 在 https://github.com/apache/rocketmq/pull/9359 中从分层存储查询消息时，Timediff 应乘以 1000
* [ISSUE #9360] 修复 https://github.com/apache/rocketmq/pull/9361 中@lizhimins 在代理离线时某些服务不会关闭的问题
* [问题 #9351] 在 https://github.com/apache/rocketmq/pull/9352 中 @golden-yang 在 queryTopicConsumeByWho 命令中添加主题组映射
* [问题#9313]添加计划的清洁任务。作者：@GenerousMan，https://github.com/apache/rocketmq/pull/9314
* [ISSUE #9369] 修复 @lizhimins 在 https://github.com/apache/rocketmq/pull/9370 中使用 pop 消费者服务时重置偏移量提交拉取偏移量
* [ISSUE #9371] 在 https://github.com/apache/rocketmq/pull/9372 中 @lizhimins 删除分层存储中 CommitLog 之前的 ConsumeQueue 索引
* [ISSUE #9233] 修复https://github.com/apache/rocketmq/pull/9374中@dingshuangxi888在分层存储中的查询时间边界计算
* [ISSUE #9375] 使https://github.com/apache/rocketmq/pull/9376中的@qianye1001可以正确关闭client跟踪线程
* [ISSUE #9362] [RIP-77] 弃用并删除 https://github.com/apache/rocketmq/pull/9363 中的 @dingshuangxi888 的 ACL 1.0
* [问题 #9377] 修复了 https://github.com/apache/rocketmq/pull/9378 中 @kingkh1995 的“如果立即关闭生产者，发送跟踪数据可能会失败”的问题
* [问题 #9379] 通过 https://github.com/apache/rocketmq/pull/9384 中的 @lizhimins 修复 IndexService 中的 timeStoreTable 删除逻辑

## 新贡献者
* @janni1288 在 https://github.com/apache/rocketmq/pull/9238 中做出了第一个贡献
* @DivyanshIITB 在 https://github.com/apache/rocketmq/pull/9250 中做出了第一个贡献
* @coolmoon101 在 https://github.com/apache/rocketmq/pull/9252 中做出了第一个贡献
* @yangxiaohui-coll 在 https://github.com/apache/rocketmq/pull/9265 中做出了第一个贡献
* @WJ66880 在 https://github.com/apache/rocketmq/pull/9332 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/rocketmq/compare/rocketmq-all-5.3.2...rocketmq-all-5.3.3

---

> 📦 仓库：[apache/rocketmq](https://github.com/apache/rocketmq) · 🏷️ 版本：`rocketmq-all-5.3.3` · 📅 发布：2025-05-07 · [查看英文原版 Release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.3.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
