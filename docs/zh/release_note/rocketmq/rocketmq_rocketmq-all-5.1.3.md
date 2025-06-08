# rocketmq rocketmq-all-5.1.3
## 变更内容

- [问题 [#6576](https://github.com/apache/rocketmq/issues/6576)] 修复了弹出 lmq 消息的问题，在 [#6577](https://github.com/apache/rocketmq/pull/6577) 中完成。
- [问题 [#5866](https://github.com/apache/rocketmq/issues/5866)] 修复了客户端侧不活动通道的内存泄漏问题，在 [#5867](https://github.com/apache/rocketmq/pull/5867) 中完成。
- [问题 [#6889](https://github.com/apache/rocketmq/issues/6889)] 为 SubscriptionGroupConfig 添加属性，在 [#6891](https://github.com/apache/rocketmq/pull/6891) 中完成。
- [问题 [#6720](https://github.com/apache/rocketmq/issues/6720)] [RIP-64] 心跳优化，在 [#6724](https://github.com/apache/rocketmq/pull/6724) 中完成。
- [问题 [#6884](https://github.com/apache/rocketmq/issues/6884)] 解决了代理发送消息到 broker 和找不到 ACL 配置相关的问题，在 [#6885](https://github.com/apache/rocketmq/pull/6885) 中完成。
- [问题 [#6900](https://github.com/apache/rocketmq/issues/6900)] 为 BrokerMetricsManager 添加 attributesBuilderSupplier，在 [#6901](https://github.com/apache/rocketmq/pull/6901) 中完成。
- [问题 [#6908](https://github.com/apache/rocketmq/issues/6908)] 修复了集群模式下代理获取 broker 错误地址的问题，在 [#6909](https://github.com/apache/rocketmq/pull/6909) 中完成。
- [问题 [#6863](https://github.com/apache/rocketmq/issues/6863)] 支持 SQL 表达式中的 CONTAINS 操作，在 [#6864](https://github.com/apache/rocketmq/pull/6864) 中完成。
- [问题 [#6841](https://github.com/apache/rocketmq/issues/6841)] 为 pushConsumer 添加批量 ack 操作，在 [#6842](https://github.com/apache/rocketmq/pull/6842) 中完成。
- [问题 [#6929](https://github.com/apache/rocketmq/issues/6929)] 临时忽略在 Linux 平台上的 testQueryMessageAsync 测试，在 [#6930](https://github.com/apache/rocketmq/pull/6930) 中完成。
- [问题 [#6904](https://github.com/apache/rocketmq/issues/6904)] 修复了 mapped file size 为 0 时 broker 无法启动的问题，在 [#6903](https://github.com/apache/rocketmq/pull/6903) 中完成。
- [问题 [#6926](https://github.com/apache/rocketmq/issues/6926)] 修复了 replicasManager 初始化顺序错误导致的控制器模式无法启动的问题，在 [#6927](https://github.com/apache/rocketmq/pull/6927) 中完成。
- [问题 [#6931](https://github.com/apache/rocketmq/issues/6931)] 为 setSubscriptionGroupTable 方法设置表格引用相同对象，在 [#6932](https://github.com/apache/rocketmq/pull/6932) 中完成。
- [问题 [#6917](https://github.com/apache/rocketmq/issues/6917)] 修复了无法查询相同 msgId 的所有消息的问题，在 [#6918](https://github.com/apache/rocketmq/pull/6918) 中完成。
- [问题 [#6910](https://github.com/apache/rocketmq/issues/6910)] 提取了 fetchNameServerAddr 的间隔时间，在 [#6912](https://github.com/apache/rocketmq/pull/6912) 中完成。
- [问题 [#6933](https://github.com/apache/rocketmq/issues/6933)] 支持在本地 cq 和分层存储偏移不匹配时重新创建文件，在 [#6934](https://github.com/apache/rocketmq/pull/6934) 中完成。
- [问题 [#6916](https://github.com/apache/rocketmq/issues/6916)] 在 SQL 过滤中支持 startsWith 和 endsWith 操作。

---

通过这次更新，Apache RocketMQ 的功能得到了显著的提升，修复了一系列问题，并引入了新的功能和优化。这些变更将帮助用户更好地管理和使用 RocketMQ 系统，提高其可靠性和性能。