# pulsar v2.11.4
```markdown
## 变更内容

### Broker
- [修复][broker] 修复了因 PIP-145 错误导致无法使用后缀匹配的正则表达式订阅分区主题的问题 ([#21885](https://github.com/apache/pulsar/pull/21885))
- [修复][broker] 修复了字符串格式错误 ([#21829](https://github.com/apache/pulsar/pull/21829))
- [修复][broker] 启用批处理导致由于确认和交付并发而出现负未确认消息数 ([#22090](https://github.com/apache/pulsar/pull/22090))
- [修复][broker] 修复无法使用后缀匹配的正则表达式订阅分区主题的问题 ([#22025](https://github.com/apache/pulsar/pull/22025))
- [修复][broker] 修复当主题未找到时 lookupRequestSemaphore 泄漏问题 ([#21646](https://github.com/apache/pulsar/pull/21646))
- [修复][broker] 修复了主题可能被删除的问题 ([#21704](https://github.com/apache/pulsar/pull/21704))
- [修复][broker] 修复将所有压缩的条目写入压缩主题 ([#21917](https://github.com/apache/pulsar/pull/21917))
- [修复][broker] 由于卸载主题失败导致复制停止 ([#21947](https://github.com/apache/pulsar/pull/21947))
- [修复][broker] 在 apply-config-from-env.py 脚本中记录前对值进行消毒 ([#22044](https://github.com/apache/pulsar/pull/22044))
- [修复][broker] 支持以 gid != 0 运行 docker 容器 ([#22081](https://github.com/apache/pulsar/pull/22081))
- [修复][broker] 当抛出某些异常时尽可能更新主题策略 ([#21810](https://github.com/apache/pulsar/pull/21810))
- [修复][broker] 修复 BrokerService.maxUnackedMsgsPerDispatcher 的错误值 ([#21765](https://github.com/apache/pulsar/pull/21765))
- [修复][broker] 当主题被删除时删除压缩账本 ([#21745](https://github.com/apache/pulsar/pull/21745)) ([#21850](https://github.com/apache/pulsar/pull/21850))
- [修复][broker] 修复 NonPersistentDispatcherMultipleConsumers ArrayIndexOutOfBoundsException ([#21856](https://github.com/apache/pulsar/pull/21856))
- [修复][broker][branch-3.1] 避免 PublishRateLimiter 使用已关闭的 RateLimiter ([#22011](https://github.com/apache/pulsar/pull/22011))
- [修复][ml] 修复删除账本的重试机制以使其失效 ([#21869](https://github.com/apache/pulsar/pull/21869))
- [改进][admin] internalGetMessageById 不应该在分区主题上允许 ([#19013](https://github.com/apache/pulsar/pull/19013))
- [改进][broker] 为保留管理 API 添加细粒度授权 ([#22163](https://github.com/apache/pulsar/pull/22163))
- [改进][broker] 获取 bundle 列表时避免打印重定向异常日志 ([#20846](https://github.com/apache/pulsar/pull/20846))
- [改进][broker] 一致性地为 REST API 添加细粒度授权 ([#22202](https://github.com/apache/pulsar/pull/22202))
- [改进][broker] 当调用 `Admin API` 且主题不存在时，不要在响应 `HTTP-404` 时打印错误日志 ([#21995](https://github.com/apache/pulsar/pull/21995))
- [改进][broker] 使从 bundle 获取列表的 Admin API 异步 ([#20652](https://github.com/apache/pulsar/pull/20652))
- [重构][broker] 当消息过期失败时抑制错误日志 ([#19778](https://github.com/apache/pulsar/pull/19778))

### Misc
- [改进][build] 升级 Apache ZooKeeper 到 3.9.1 ([#20933](https://github.com/apache/pulsar/pull/20933))
- [修复][misc] 升级 GRPC 版本到 1.55.3 以修复 CVE ([#21057](https://github.com/apache/pulsar/pull/21057))
- [修复][sec] 升级 avro 版本到 1.11.3 以解决 [CVE-2023-39410](https://github.com/advisories/GHSA-rhrv-645h-fjfh) ([#21341](https://github.com/apache/pulsar/pull/21341))
- [修复][sec] 从 hadoop-client 中排除 avro ([#21719](https://github.com/apache/pulsar/pull/21719))
- [修复][sec] 升级 Jetty 到 9.4.53 以解决 [CVE-2023-44487](https://github.com/advisories/GHSA-qppj-fm5r-hxr3) ([#21395](https://github.com/apache/pulsar/pull/21395))
- [修复][sec] 升级 Jetty 到 9.4.54.v20240208 以解决 [CVE-2024-22201](https://github.com/advisories/GHSA-rggv-cv7r-mw98) ([#22144](https://github.com/apache/pulsar/pull/22144))
- [修复][sec] 升级 Netty 到 4.1.100 以解决 [CVE-2023-44487](https://github.com/advisories/GHSA-qppj-fm5r-hxr3) ([#21397](https://github.com/apache/pulsar/pull/21397))
- [修复][sec] 升级 commons-compress 到 1.26.0 ([#22086](https://github.com/apache/pulsar/pull/22086))
- [修复][sec] cve: 在 canal.protocol 中排除 ch.qos.logback 以解决 [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m) ([95e1de7](https://github.com/apache/pulsar/commit/95e1de78eb0243fa6dfbfb1bb6cb35742eb77cfa))
- [修复][test] 修复 PerformanceProducer 发送计数错误 ([#21706](https://github.com/apache/pulsar/pull/21706))
- [修复][test] 修复测试 testTransactionBufferMetrics ([#22117](https://github.com/apache/pulsar/pull/22117))
- [修复][test] 使基础测试类方法受保护，以便通过 ReportUnannotatedMethods 验证 ([#21976](https://github.com/apache/pulsar/pull/21976))
- [修复][test] testModularLoadManagerRemoveBundleAndLoad ([#19710](https://github.com/apache/pulsar/pull/19710))

### Proxy
- [改进][proxy] 修正关于 enableProxyStatsEndpoints 的注释 ([#21757](https://github.com/apache/pulsar/pull/21757))

### Functions
- [修复][fn] 修复 Functions Worker LeaderService 的死锁问题 ([#21711](https://github.com/apache/pulsar/pull/21711))
- [改进][fn] 为连接器和函数包 URL 源添加配置 ([#22184](https://github.com/apache/pulsar/pull/22184))
- [改进][fn] 通过懒加载和直接 zip/字节码访问优化 Function Worker 启动 ([#22122](https://github.com/apache/pulsar/pull/22122))

### Clients
- [修复][client] 修复如果确认了一半批量消息则会产生巨大许可的问题 ([#22091](https://github.com/apache/pulsar/pull/22091))

**完整变更日志**: [v2.11.3...v2.11.4](https://github.com/apache/pulsar/compare/v2.11.3...v2.11.4