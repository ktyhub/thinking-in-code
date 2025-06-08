# bookkeeper Release 4.16.4
```markdown
发布 4.16.4 版本包含多个错误修复和改进，同时我们还进行了几项依赖更新。

建议 Apache BookKeeper 用户如果正在使用 4.16.x 版本，升级到 4.16.4。此版本的技术细节总结如下。

### 亮点

#### 错误修复

- 修复使用 Java9IntHash 时计算校验和的问题 [PR #4140](https://github.com/apache/bookkeeper/pull/4140)
- 修复自动恢复失败的复制问题，添加条目围栏错误 [PR #4163](https://github.com/apache/bookkeeper/pull/4163)
- 修复使用 DirectEntryLogger 时的内存泄漏错误 [PR #4135](https://github.com/apache/bookkeeper/pull/4135)
- 修复 JournalQueueSize 为负数的错误 [PR #4077](https://github.com/apache/bookkeeper/pull/4077)
- 修复重新复制空账本时的 NoSuchElementException 错误 [PR #4039](https://github.com/apache/bookkeeper/pull/4039)
- 将 getUnderreplicatedFragments 方法改为包私有 [PR #4174](https://github.com/apache/bookkeeper/pull/4174)
- 修复审计选举执行器阻塞问题 [PR #4165](https://github.com/apache/bookkeeper/pull/4165)
- 修复审计线程泄漏问题 [PR #4162](https://github.com/apache/bookkeeper/pull/4162)
- 使用 Flaky 标志跳过 testBookieServerZKSessionExpireBehaviour 测试 [PR #4144](https://github.com/apache/bookkeeper/pull/4144)
- 在 setExplicitLac 函数中添加 ledgersCount.incrementAndGet [PR #4138](https://github.com/apache/bookkeeper/pull/4138)
- 修复重置所有 BK 机架后没有已知书籍的问题 [PR #4128](https://github.com/apache/bookkeeper/pull/4128)
- 修复压缩时慢速 GC 线程关闭问题 [PR #4127](https://github.com/apache/bookkeeper/pull/4127)
- 移除 CleanupLedgerManager.recordPromise 中未使用的日志 [PR #4121](https://github.com/apache/bookkeeper/pull/4121)
- 修复 Flaky 测试：HandleFailuresTest.testHandleFailureBookieNotInWriteSet [PR #4110](https://github.com/apache/bookkeeper/pull/4110)
- 在 RegionAwareEnsemblePlacementPolicy#newEnsemble 中忽略空的 `perRegionPlacement` [PR #4106](https://github.com/apache/bookkeeper/pull/4106)
- 修复 LedgerHandle `ensembleChangeCounter` 未使用的问题 [PR #4103](https://github.com/apache/bookkeeper/pull/4103)
- 调整 TestReplicationWorker 测试 [PR #4093](https://github.com/apache/bookkeeper/pull/4093)
- 增强 AuditorBookieTest#waitForNewAuditor [PR #4078](https://github.com/apache/bookkeeper/pull/4078)
- 打印压缩进度 [PR #4071](https://github.com/apache/bookkeeper/pull/4071)
- 修复 readEntry 参数顺序 [PR #4059](https://github.com/apache/bookkeeper/pull/4059)
- 在没有更改时跳过同步 RocksDB [PR #3904](https://github.com/apache/bookkeeper/pull/3904)
- 在压缩时尝试使用 JDK API 创建硬链接 [PR #3876](https://github.com/apache/bookkeeper/pull/3876)

#### 依赖更新

- 升级 Zookeeper 到 3.8.3 以解决 [CVE-2023-44981](https://github.com/advisories/GHSA-7286-pgfv-vxvh) [PR #4112](https://github.com/apache/bookkeeper/pull/4112)
- 更新 Jetty 依赖 [PR #4141](https://github.com/apache/bookkeeper/pull/4141)
- 升级 bc-fips 到 1.0.2.4 以修复 [CVE-2022-45146](https://github.com/advisories/GHSA-68m8-v89j-7j2p) [PR #3915](https://github.com/apache/bookkeeper/pull/3915)

#### 详情

[https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.4+is%3Amerged+](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.4+is%3Amerged+)
```