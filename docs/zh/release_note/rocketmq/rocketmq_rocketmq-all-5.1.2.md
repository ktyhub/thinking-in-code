# rocketmq rocketmq-all-5.1.2

## 变化内容

- [ISSUE #6747](https://github.com/apache/rocketmq/issues/6747) 添加 INNER_MULTI_DISPATCH 检查，不能包含路径分隔符 [#6746](https://github.com/apache/rocketmq/pull/6746)
- [ISSUE #6761](https://github.com/apache/rocketmq/issues/6761) 支持 Broker 的可重入通知有序 [#6762](https://github.com/apache/rocketmq/pull/6762)
- [ISSUE #6765](https://github.com/apache/rocketmq/issues/6765) org.apache.rocketmq.util.cache 看起来没有被使用 [#6766](https://github.com/apache/rocketmq/pull/6766)
- [ISSUE #6745](https://github.com/apache/rocketmq/issues/6745) 移除冗余变量 [#6740](https://github.com/apache/rocketmq/pull/6740)
- [ISSUE #6771](https://github.com/apache/rocketmq/issues/6771) 合并 PullMessageProcessor#composeResponseHeader 方法中的一些情况 [#6772](https://github.com/apache/rocketmq/pull/6772)
- [ISSUE #6774](https://github.com/apache/rocketmq/issues/6774) 更新 README.md 中的 RocketMQ 版本到 5.1.1 [#6775](https://github.com/apache/rocketmq/pull/6775)
- [ISSUE #6789](https://github.com/apache/rocketmq/issues/6789) 修改 DefaultMQProducerImpl 中的占位符 [#6790](https://github.com/apache/rocketmq/pull/6790)
- [ISSUE #6792](https://github.com/apache/rocketmq/issues/6792) 修复 send 方法在 log.warn 上长时间阻塞的 bug [#6793](https://github.com/apache/rocketmq/pull/6793)
- [ISSUE #6785](https://github.com/apache/rocketmq/issues/6785) 按组隔离 remoteChannel [#6786](https://github.com/apache/rocketmq/pull/6786)
- [ISSUE #6797](https://github.com/apache/rocketmq/issues/6797) 支持在 PopBufferMergeService 中批量确认 [#6798](https://github.com/apache/rocketmq/pull/6798)
- 修复 operation.md 中的拼写错误 [#6799](https://github.com/apache/rocketmq/pull/6799)
- [ISSUE#6595] 修复 NPE 和重复访问密钥日志 [#6596](https://github.com/apache/rocketmq/pull/6596)
- [ISSUE #6816](https://github.com/apache/rocketmq/issues/6816) 优化 persistent_unique_broker_id 文档 [#6817](https://github.com/apache/rocketmq/pull/6817)
- [ISSUE #6803](https://github.com/apache/rocketmq/issues/6803) 基准测试支持 reportInterval 选项 [#6804](https://github.com/apache/rocketmq/pull/6804)
- [ISSUE #6819](https://github.com/apache/rocketmq/issues/6819) 重命名 brokerHeartbeatExecutorService 执行器名称 [#6820](https://github.com/apache/rocketmq/pull/6820)
- [ISSUE #6828](https://github.com/apache/rocketmq/issues/6828) 返回与 order consumer 消息队列数相等的分配数 [#6829](https://github.com/apache/rocketmq/pull/6829)
- [ISSUE #6777](https://github.com/apache/rocketmq/issues/6777) 支持控制器中的指标 [#6778](https://github.com/apache/rocketmq/pull/6778)
- [ISSUE #6624](https://github.com/apache/rocketmq/issues/6624) 支持 TieredFileSegmentInputStream 的 mark() 和 reset() [#6625](https://github.com/apache/rocketmq/pull/6625)
- [ISSUE #6845](https://github.com/apache/rocketmq/issues/6845) 使用 bazel 构建控制器 [#6846](https://github.com/apache/rocketmq/pull/6846)
- 修复命名错误 [#6843](https://github.com/apache/rocketmq/pull/6843)
- [ISSUE #6849](https://github.com/apache/rocketmq/issues/6849) 修复三副本中增加 RT 的问题 [#6850](https://github.com/apache/rocketmq/pull/6850)
- [ISSUE #6779](https://github.com/apache/rocketmq/issues/6779) 支持 LMQ 的定时消息 [#6780](https://github.com/apache/rocketmq/pull/6780)
- [ISSUE #6336](https://github.com/apache/rocketmq/issues/6336) [RIP-62] 冷读控制 [#6507](https://github.com/apache/rocketmq/pull/6507)
- [ISSUE #6858](https://github.com/apache/rocketmq/issues/6858) 为未来扩展传递 ProxyContext [#6859](https://github.com/apache/rocketmq/pull/6859)
- [ISSUE #6154](https://github.com/apache/rocketmq/issues/6154) 支持 TieredStorage 中的 Amazon S3 后端 [#6495](https://github.com/apache/rocketmq/pull/6495)
- [ISSUE #6861](https://github.com/apache/rocketmq/issues/6861) 修改 CURRENT_VERSION 为 5.1.2 [#6862](https://github.com/apache/rocketmq/pull/6862)
- [ISSUE #6866](https://github.com/apache/rocketmq/issues/6866) 移动 grpc TLS 模式的判断逻辑以提高 ProtocolNegotiator 的可扩展性 [#6867](https://github.com/apache/rocketmq/pull/6867)
- [ISSUE #6824](https://github.com/apache/rocketmq/issues/6824) 添加 golang e2e 测试 [#6825](https://github.com/apache/rocketmq/pull/6825)
- [ISSUE #6633](https://github.com/apache/rocketmq/issues/6633) [RIP-65] 改进分层存储实现 [#6781](https://github.com/apache/rocketmq/pull/6781)
- [ISSUE #6881](https://github.com/apache/rocketmq/issues/6881) 修复定时消息被重放的 bug [#6882](https://github.com/apache/rocketmq/pull/6882)
- [ISSUE #6800](https://github.com/apache/rocketmq/issues/6800) 将配置变量 isEnableBatchPush 更改为 enableBatchPush [#6801](https://github.com/apache/rocketmq/pull/6801)

## 新贡献者

- [@DL1231](https://github.com/DL1231) 在 [#6790](https://github.com/apache/rocketmq/pull/6790) 中做出了他们的第一次贡献
- [@maclong1989](https://github.com/maclong1989) 在 [#6799](https://github.com/apache/rocketmq/pull/6799) 中做出了他们的第一次贡献
- [@xiaochangbai](https://github.com/xiaochangbai) 在 [#6820](https://github.com/apache/rocketmq/pull/6820) 中做出了他们的第一次贡献
- [@zk-drizzle](https://github.com/zk-drizzle) 在 [#6507](https://github.com/apache/rocketmq/pull/6507) 中做出了他们的第一次贡献
- [@gaoyf](https://github.com/gaoyf) 在 [#6882](https://github.com/apache/rocketmq/pull/6882) 中做出了他们的第一次贡献

**完整变更日志**: [rocketmq-all-5.1.1...rocketmq-all-5.1.2](https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.1...rocketmq-all-5.1.2)
```