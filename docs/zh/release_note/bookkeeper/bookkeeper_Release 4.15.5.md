# bookkeeper Release 4.15.5

发布 4.15.5 包含多个错误修复和改进，同时我们还进行了几项依赖更新。

鼓励 Apache BookKeeper 用户升级到 4.15.5，如果您正在使用 4.15.x。此版本的技术细节总结如下。

### 亮点

之前的版本使用 ARM 平台编译，这意味着 JNI 库仅适用于 MacOS，这将导致性能下降（例如：CRC 库）或无法工作（在 CPU 亲和性的情况下）。

现在的构建平台通过 [PR #4060](https://github.com/apache/bookkeeper/pull/4060) 标记为 `linux/amd64`。

#### 错误修复

- 修复重置所有 BK 机架后没有已知的 bookies [PR #4128](https://github.com/apache/bookkeeper/pull/4128)
- 修复 AutoCloseableLifecycleComponent 关闭异常日志 [PR #4042](https://github.com/apache/bookkeeper/pull/4042)
- 修复重新复制空账本时的 NoSuchElementException [PR #4039](https://github.com/apache/bookkeeper/pull/4039)
- 修复 deletedLedgers 计数 [PR #4026](https://github.com/apache/bookkeeper/pull/4026)
- 修复执行器抛出 RejectedExecutionException 时的读写请求泄漏 [PR #4024](https://github.com/apache/bookkeeper/pull/4024)
- 最终回收 LongWrapper 以避免内存泄漏 [PR #4007](https://github.com/apache/bookkeeper/pull/4007)
- 修复触发 GC 不工作 [PR #3998](https://github.com/apache/bookkeeper/pull/3998)
- 修复 httpServerEnabled 时的任意文件上传漏洞 [PR #3982](https://github.com/apache/bookkeeper/pull/3982)
- 在 channelInactive 时清除通道 [PR #3966](https://github.com/apache/bookkeeper/pull/3966)
- 修复遍历 pendingLedgersUpdates 和 pendingDeletedLedgers 时的 npe [PR #3955](https://github.com/apache/bookkeeper/pull/3955)
- 修复 prometheus 客户端生成的一些没有类型信息的指标 [PR #3927](https://github.com/apache/bookkeeper/pull/3927)
- 修复账本复制失败阻止 bookie 退役过程 [PR #3917](https://github.com/apache/bookkeeper/pull/3917)
- 在发生各种异常时回收丢弃的读写请求 [PR #3912](https://github.com/apache/bookkeeper/pull/3912)
- SingleDirectoryDbLedgerStorage#flushMutex 在所有异常路径上不释放锁 [PR #3909](https://github.com/apache/bookkeeper/pull/3909)
- 修复 ReclaimedSpaceViaDeletes 统计不正确问题 [PR #3906](https://github.com/apache/bookkeeper/pull/3906)
- 修复 ledgersToDelete 为空时 EntryLocationIndex 中的键泄漏 [PR #3903](https://github.com/apache/bookkeeper/pull/3903)
- 修复垃圾收集被运行时异常阻塞 [PR #3901](https://github.com/apache/bookkeeper/pull/3901)
- 如果新创建则返回 activeLogChannel [PR #3894](https://github.com/apache/bookkeeper/pull/3894)
- 将错误的 rocksDB 配置 level_compaction_dynamic_level_bytes 修改为 CFOptions [PR #3860](https://github.com/apache/bookkeeper/pull/3860)
- 修复 ReadEntryProcessor v2 SchedulingDelayStats [PR #3758](https://github.com/apache/bookkeeper/pull/3758)
- 修复配置多个账本目录时的数据丢失 [PR #3329](https://github.com/apache/bookkeeper/pull/3329)

#### 改进

- 修复压缩时 GC 线程关闭缓慢的问题 [PR #4127](https://github.com/apache/bookkeeper/pull/4127)
- 移除 CleanupLedgerManager.recordPromise 中未使用的日志 [PR #4121](https://github.com/apache/bookkeeper/pull/4121)
- 在 RegionAwareEnsemblePlacementPolicy#newEnsemble 中忽略空的 `perRegionPlacement` [PR #4106](https://github.com/apache/bookkeeper/pull/4106)
- 打印压缩进度 [PR #4071](https://github.com/apache/bookkeeper/pull/4071)
- 强制使用 linux/amd64 构建发布 [PR #4060](https://github.com/apache/bookkeeper/pull/4060)
- 移除 underreplicaiton 回调 [PR #4058](https://github.com/apache/bookkeeper/pull/4058)
- 允许在单个 rocksdb 批处理中设置最大操作数 [PR #4044](https://github.com/apache/bookkeeper/pull/4044)
- 将 pendingDeletedLedgers 更改为 ConcurrentHashSet [PR #3989](https://github.com/apache/bookkeeper/pull/3989)
- 避免压缩触发额外的刷新 DbLedgerStorage [PR #3959](https://github.com/apache/bookkeeper/pull/3959)
- 支持在重放日志阶段跳过无效的日志记录 [PR #3956](https://github.com/apache/bookkeeper/pull/3956)
- 优化 getEntryLogMetadata [PR #3948](https://github.com/apache/bookkeeper/pull/3948)
- 从 shell 命令中删除无效的 entryFormat 参数 [PR #3938](https://github.com/apache/bookkeeper/pull/3938)
- 启用 PCBC completionObjects 自动收缩以减少内存使用和 GC [PR #3913](https://github.com/apache/bookkeeper/pull/3913)
- 防止在强制只读模式激活时转换为可写模式 [PR #3881](https://github.com/apache/bookkeeper/pull/3881)
- 使读取条目请求可回收 [PR #3842](https://github.com/apache/bookkeeper/pull/3842)
- 修复组快速排序中的枢轴选择 [PR #3800](https://github.com/apache/bookkeeper/pull/3800)
- 最终执行清理索引 [PR #3772](https://github.com/apache/bookkeeper/pull/3772)
- 在垃圾收集中添加小文件检查 [PR #3631](https://github.com/apache/bookkeeper/pull/3631)

#### 依赖更新

- 更新 Jetty 依赖 [PR #4141](https://github.com/apache/bookkeeper/pull/4141)
- 将 guava 版本从 31.0.1-jre 提升到 32.0.1-jre [PR #4008](https://github.com/apache/bookkeeper/pull/4008)
- 升级 snappy-java 以解决多个 CVE [PR #3993](https://github.com/apache/bookkeeper/pull/3993)
- 升级 grpc 和 protobuf 以解决 [CVE-2023-32732](https://github.com/advisories/GHSA-9hxf-ppjv-w6rq) [PR #3992](https://github.com/apache/bookkeeper/pull/3992)
- 降级 grpc 和 protobuf 以避免引入破坏性更改 [PR #4001](https://github.com/apache/bookkeeper/pull/4001)
- 修复客户端在运行时与旧 grpc 版本的二进制兼容性问题 [PR #3997](https://github.com/apache/bookkeeper/pull/3997)
- 将 jetty 版本升级到 9.4.51.v20230217 [PR #3937](https://github.com/apache/bookkeeper/pull/3937)
- 升级 docker 基础镜像以解决 [CVE-2023-0286](https://github.com/advisories/GHSA-x4qr-2fvf-3mr5) [PR #3916](https://github.com/apache/bookkeeper/pull/3916)
- 升级 bc-fips 到 1.0.2.4 以修复 [CVE-2022-45146](https://github.com/advisories/GHSA-68m8-v89j-7j2p) [PR #3915](https://github.com/apache/bookkeeper/pull/3915)
- 从 hadoop-common 中移除 avro、hadoop-auth 和 jersey-json 依赖以解决 [CVE-2019-10202](https://github.com/advisories/GHSA-c27h-mcmw-48hv)、[CVE-2023-1370](https://github.com/advisories/GHSA-493p-pfq6-5258) 和 [CVE-2022-45685](https://github.com/advisories/GHSA-7rf3-mqpx-h7xg) [PR #3911](https://github.com/apache/bookkeeper/pull/3911)
- 在许可证中同步依赖版本与源版本 [PR #3633](https://github.com/apache/bookkeeper/pull/3633)
- 将 grpc 从 1.45.1 提升到 1.47.0，解决依赖检查 FP [PR #3305](https://github.com/apache/bookkeeper/pull/3305)
- 优化 Bookkeeper 中的