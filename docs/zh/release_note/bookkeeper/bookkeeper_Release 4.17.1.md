# bookkeeper Release 4.17.1

发布 4.17.1 版本包含多个错误修复和少量依赖更新。

建议 Apache BookKeeper 用户如果正在使用 4.17.x 版本，升级到 4.17.1。以下是此版本的技术细节。

### 亮点

#### 错误修复

- 修复 TimedRunnable 日志 NPE [PR #4425](https://github.com/apache/bookkeeper/pull/4425)
- 修复 Auditor 忽略在 Auditor 启动前关闭的 bookies [PR #4419](https://github.com/apache/bookkeeper/pull/4419)
- 修复 OrderedExecutor 中丢失的 prometheus 指标 [PR #4374](https://github.com/apache/bookkeeper/pull/4374)
- 修复 JournalChannel 未完全初始化时的资源泄漏 [PR #4340](https://github.com/apache/bookkeeper/pull/4340)
- 修复 bookie http 端点信息总是返回 0.0.0.0 [PR #4325](https://github.com/apache/bookkeeper/pull/4325)
- 修复磁盘权重集合无限循环错误 [PR #4324](https://github.com/apache/bookkeeper/pull/4324)
- 修复 distributedlog 中的 guava 阴影错误 [PR #4319](https://github.com/apache/bookkeeper/pull/4319)
- 修复 ThreadRegistry#register 行为以确保正确的 Prom 指标 [PR #4300](https://github.com/apache/bookkeeper/pull/4300)
- 修复 PerChannelBookieClient 中的引用计数（retain/release）问题 [PR #4293](https://github.com/apache/bookkeeper/pull/4293)
- 修复 PerChannelBookClient 中的 ByteBuf 释放/保留问题 [PR #4289](https://github.com/apache/bookkeeper/pull/4289)
- 测试：修复 prometheus-metrics-provider 模块中的测试日志缺失问题 [PR #4279](https://github.com/apache/bookkeeper/pull/4279)
- 修复 NativeUtils 中临时目录的创建问题 [PR #4262](https://github.com/apache/bookkeeper/pull/4262)
- 修复由乐观锁引起的 ArrayIndexOutOfBoundsException [PR #4066](https://github.com/apache/bookkeeper/pull/4066)
- 防止当 bookie 禁止只读模式时，由于 rest api 导致的 bookie 关闭 [PR #3972](https://github.com/apache/bookkeeper/pull/3972)
- 修复 bookkeeper-benchmark 中百分位数的错误实现 [PR #3864](https://github.com/apache/bookkeeper/pull/3864)

#### 改进

- 调整 WriteEntryProcessor 中 LedgerFencedException 的日志级别 [PR #4327](https://github.com/apache/bookkeeper/pull/4327)
- 改进：将 GarbageCollectorThread 中的 scheduleAtFixedRate 改为 scheduleWithFixedDelay [PR #4296](https://github.com/apache/bookkeeper/pull/4296)
- 从 ByteBufVisitor 中移除未使用的代码 [PR #4383](https://github.com/apache/bookkeeper/pull/4383)
- 使用 vertx blockingHandlers 运行可能阻塞的 Bookkeeper http 处理程序 [PR #4266](https://github.com/apache/bookkeeper/pull/4266)

#### 依赖更新

- 将 jetcd 从 0.5.0 升级到 0.7.7 [PR #3849](https://github.com/apache/bookkeeper/pull/3849)
- 将 netty 从 4.1.107.Final 升级到 4.1.108.Final 以解决 CVE 列表 [PR #4426](https://github.com/apache/bookkeeper/pull/4426)
- 将 jackson 从 2.13.4.20221013 升级到 2.17.1 以解决 CVE 列表 [PR #4345](https://github.com/apache/bookkeeper/pull/4345)
- 升级 vertx-core 到 4.5.7 以解决 [CVE-2024-1300](https://github.com/advisories/GHSA-9ph3-v2vh-3qx7) [PR #4265](https://github.com/apache/bookkeeper/pull/4265)

### 详情

[https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.17.1+is%3Amerged+](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.17.1+is%3Amerged+)
```