# rocketmq rocketmq-all-4.9.8
## 变更内容

- [ISSUE #7579](https://github.com/apache/rocketmq/issues/7579) 修复 `globalWhiteRemoteAddressStrategy` 并发问题，[PR #7580](https://github.com/apache/rocketmq/pull/7580)
- [ISSUE #7663](https://github.com/apache/rocketmq/issues/7663) 将 `snakeyaml` 版本从 1.32 升级到 2.0，[PR #7663](https://github.com/apache/rocketmq/pull/7663)
- [ISSUE #7649](https://github.com/apache/rocketmq/issues/7649) 添加代理/名称服务器配置更新命令的验证，[PR #7649](https://github.com/apache/rocketmq/pull/7649)
- [ISSUE #7653](https://github.com/apache/rocketmq/issues/7653) 从管理和服务器中移除 `getBrokerClusterAclConfig`，[PR #7653](https://github.com/apache/rocketmq/pull/7653)
- [ISSUE #7688](https://github.com/apache/rocketmq/issues/7688) 将 `guava` 版本从 31.1-jre 升级到 32.0.1-jre，[PR #7688](https://github.com/apache/rocketmq/pull/7688)
- [ISSUE #7716](https://github.com/apache/rocketmq/issues/7716) `MQFaultStrategy` 检查队列是否可写，[PR #7716](https://github.com/apache/rocketmq/pull/7716)
- [ISSUE #7783](https://github.com/apache/rocketmq/issues/7783) 修复 `selectOneMessageQueue` 以避免永久更改 `messageQueue`，[PR #7783](https://github.com/apache/rocketmq/pull/7783)
- [ISSUE #7740](https://github.com/apache/rocketmq/issues/7740) 优化 `LocalFileOffsetStore`，[PR #7745](https://github.com/apache/rocketmq/pull/7745)
- [ISSUE #7538](https://github.com/apache/rocketmq/issues/7538) 修复如果消息体在消费者回调中更改，`cachedMsgSize` 错误的问题，[PR #7820](https://github.com/apache/rocketmq/pull/7820)
- [ISSUE #7849](https://github.com/apache/rocketmq/issues/7849) 当验证参数无法修改时及时返回响应，[PR #7849](https://github.com/apache/rocketmq/pull/7849)

**完整更新日志**：[rocketmq-all-4.9.7...rocketmq-all-4.9.8](https://github.com/apache/rocketmq/compare/rocketmq-all-4.9.7...rocketmq-all-4.9.8)