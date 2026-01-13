# bookkeeper Release 4.14.8

发布 4.14.8 版本包含多个错误修复和一些依赖项的 CVE 修复。

鼓励 Apache BookKeeper 用户升级到 4.14.8。以下是此版本的技术细节。

### 亮点

#### 错误修复

- 修复配置多个账本目录时的数据丢失问题 [PR #3329](https://github.com/apache/bookkeeper/pull/3329)
- 允许在单个 rocksdb 批处理中设置最大操作数 [PR #4044](https://github.com/apache/bookkeeper/pull/4044)
- 最终回收 LongWrapper 以避免内存泄漏 [PR #4007](https://github.com/apache/bookkeeper/pull/4007)
- 修复 httpServerEnabled 时的任意文件上传漏洞 [PR #3982](https://github.com/apache/bookkeeper/pull/3982)
- 在 channelInactive 时清除通道 [PR #3966](https://github.com/apache/bookkeeper/pull/3966)
- 修复遍历 pendingLedgersUpdates 和 pendingDeletedLedgers 时的空指针异常 [PR #3955](https://github.com/apache/bookkeeper/pull/3955)
- 修复 prometheus 客户端生成的一些没有类型信息的指标 [PR #3927](https://github.com/apache/bookkeeper/pull/3927)
- 修复账本复制失败块的 bookie 退役过程 [PR #3917](https://github.com/apache/bookkeeper/pull/3917)
- 在发生各种异常时回收丢弃的读写请求 [PR #3912](https://github.com/apache/bookkeeper/pull/3912)
- 修复 SingleDirectoryDbLedgerStorage#flushMutex 在所有异常路径上不释放锁的问题 [PR #3909](https://github.com/apache/bookkeeper/pull/3909)
- 修复 ReclaimedSpaceViaDeletes 统计不正确的问题 [PR #3906](https://github.com/apache/bookkeeper/pull/3906)
- 修复 EntryLocationIndex 中 ledgersToDelete 为空时的键泄漏问题 [PR #3903](https://github.com/apache/bookkeeper/pull/3903)
- 修复运行时异常阻塞垃圾回收的问题 [PR #3901](https://github.com/apache/bookkeeper/pull/3901)
- 如果新创建则返回 activeLogChannel [PR #3894](https://github.com/apache/bookkeeper/pull/3894)
- 防止在强制只读模式激活时转换为可写模式 [PR #3881](https://github.com/apache/bookkeeper/pull/3881)
- 在 finally 中执行清理索引 [PR #3772](https://github.com/apache/bookkeeper/pull/3772)
- 修复 ReadEntryProcessor v2 SchedulingDelayStats [PR #3758](https://github.com/apache/bookkeeper/pull/3758)
- 修复 RegionAwareEnsemblePlacementPolicy.newEnsemble 有时失败的问题 [PR #3725](https://github.com/apache/bookkeeper/pull/3725)
- 修复启用读取节流时 checkAllLedgers 可能卡住的问题 [PR #3655](https://github.com/apache/bookkeeper/pull/3655)
- 修复 prometheus 类型的重复类型行 [PR #3137](https://github.com/apache/bookkeeper/pull/3137)
- 修复 deletedLedgers 计数 [PR #4026](https://github.com/apache/bookkeeper/pull/4026)

#### 改进

- 避免压缩触发额外的刷新 DbLedgerStorage [PR #3959](https://github.com/apache/bookkeeper/pull/3959)
- 在垃圾回收中添加小文件检查 [PR #3631](https://github.com/apache/bookkeeper/pull/3631)
- 将 pendingDeletedLedgers 更改为 ConcurrentHashSet [PR #3989](https://github.com/apache/bookkeeper/pull/3989)
- 支持在回复日志阶段跳过无效的日志记录 [PR #3956](https://github.com/apache/bookkeeper/pull/3956)
- 使用 ReferenceCountUtil.release() 代替 ReferenceCountUtil.safeRelease() [PR #3798](https://github.com/apache/bookkeeper/pull/3798)
- 为选定失败的合奏添加日志 [PR #3779](https://github.com/apache/bookkeeper/pull/3779)
- 新合奏首先选择不同的机架 [PR #3721](https://github.com/apache/bookkeeper/pull/3721)
- 在日志中显示 isFenced 的结果 [PR #3678](https://github.com/apache/bookkeeper/pull/3678)

#### 依赖更新

- 升级 rocksDB 版本到 6.29.4.1 [PR #3947](https://github.com/apache/bookkeeper/pull/3947)
- 升级 jetty 版本到 9.4.51.v20230217 [PR #3937](https://github.com/apache/bookkeeper/pull/3937)
- 升级 docker 基础镜像以解决 [CVE-2023-0286](https://github.com/advisories/GHSA-x4qr-2fvf-3mr5) [PR #3916](https://github.com/apache/bookkeeper/pull/3916)
- 从 hadoop-common 中移除 avro、hadoop-auth 和 jersey-json 依赖项以解决 [CVE-2019-10202](https://github.com/advisories/GHSA-c27h-mcmw-48hv)、[CVE-2023-1370](https://github.com/advisories/GHSA-493p-pfq6-5258) 和 [CVE-2022-45685](https://github.com/advisories/GHSA-7rf3-mqpx-h7xg) [PR #3911](https://github.com/apache/bookkeeper/pull/3911)

#### 详情

[https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.14.8+is%3Amerged](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.14.8+is%3Amerged)
```