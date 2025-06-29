# bookkeeper Release 4.16.2

发布 4.16.2 版本包含多个错误修复和一些依赖项的 CVE 修复。

建议 Apache BookKeeper 用户升级到 4.16.2。以下是此版本的技术细节总结。

### 亮点

#### 错误修复

- 修复触发 GC 不工作的问题 [PR #3998](https://github.com/apache/bookkeeper/pull/3998)
- 使 slogger 使用当前类 [PR #3994](https://github.com/apache/bookkeeper/pull/3994)
- 修复 Journal 不刷新问题 [PR #3979](https://github.com/apache/bookkeeper/pull/3979)
- 修复遍历 pendingLedgersUpdates 和 pendingDeletedLedgers 时的 NPE 问题 [PR #3955](https://github.com/apache/bookkeeper/pull/3955)
- 修复账本复制失败阻塞 bookie 退役过程的问题 [PR #3917](https://github.com/apache/bookkeeper/pull/3917)
- SingleDirectoryDbLedgerStorage#flushMutex 在所有异常路径上不释放锁 [PR #3909](https://github.com/apache/bookkeeper/pull/3909)
- 修复 ReclaimedSpaceViaDeletes 统计不正确的问题 [PR #3906](https://github.com/apache/bookkeeper/pull/3906)
- 修复 EntryLocationIndex 中 ledgersToDelete 为空时的键泄漏问题 [PR #3903](https://github.com/apache/bookkeeper/pull/3903)
- 修复垃圾回收被运行时异常阻塞的问题 [PR #3901](https://github.com/apache/bookkeeper/pull/3901)
- 总是创建一个孤立账本 [PR #3813](https://github.com/apache/bookkeeper/pull/3813)
- 修复配置多个账本目录时的数据丢失问题 [PR #3329](https://github.com/apache/bookkeeper/pull/3329)
- 修复直接内存条目记录器中的直接内存泄漏问题 [PR #3983](https://github.com/apache/bookkeeper/pull/3983)
- 修复在禁用 ledgerReplication 时错误更新 checkAllLedgersTime 的问题 [PR #3939](https://github.com/apache/bookkeeper/pull/3939)
- 修复 prometheus 客户端生成的一些没有类型信息的指标 [PR #3927](https://github.com/apache/bookkeeper/pull/3927)

#### 改进

- 统一 DirectIO 组件的 ByteBufAllocator [PR #3985](https://github.com/apache/bookkeeper/pull/3985)
- 修复 httpServerEnabled 时的任意文件上传漏洞 [PR #3982](https://github.com/apache/bookkeeper/pull/3982)
- 检查 indexBaseDir 是否与 ledgerBaseDir 指定 [PR #3967](https://github.com/apache/bookkeeper/pull/3967)
- 在 channelInactive 时清除通道 [PR #3966](https://github.com/apache/bookkeeper/pull/3966)
- 减少不必要的 ReplicationEnableCb 对象创建 [PR #3960](https://github.com/apache/bookkeeper/pull/3960)
- 避免压缩触发额外的 DbLedgerStorage 刷新 [PR #3959](https://github.com/apache/bookkeeper/pull/3959)
- 当执行器已关闭时，不安排任务 [PR #3946](https://github.com/apache/bookkeeper/pull/3946)
- 从 shell 命令中删除无效的 entryFormat 参数 [PR #3938](https://github.com/apache/bookkeeper/pull/3938)
- 启用 PCBC completionObjects 自动收缩以减少内存使用和垃圾回收 [PR #3913](https://github.com/apache/bookkeeper/pull/3913)
- 在发生各种异常时回收丢弃的读写请求 [PR #3912](https://github.com/apache/bookkeeper/pull/3912)
- 清理 CbThreadFactory [PR #3907](https://github.com/apache/bookkeeper/pull/3907)
- 如果新创建，则返回 activeLogChannel [PR #3894](https://github.com/apache/bookkeeper/pull/3894)
- 在强制只读模式激活时，防止转换为可写模式 [PR #3881](https://github.com/apache/bookkeeper/pull/3881)
- 在 finally 中执行清理索引 [PR #3772](https://github.com/apache/bookkeeper/pull/3772)
- 使用 ChannelVoidPromise 避免创建无用的承诺对象 [PR #3733](https://github.com/apache/bookkeeper/pull/3733)

#### 依赖更新

- 升级 grpc 和 protobuf 以解决 [CVE-2023-32732](https://github.com/advisories/GHSA-9hxf-ppjv-w6rq) [PR #3992](https://github.com/apache/bookkeeper/pull/3992)
- [Branch-4.16] 降级 grpc 和 protobuf 以避免引入破坏性更改 [PR #4001](https://github.com/apache/bookkeeper/pull/4001)
- 修复客户端在运行时与旧版 grpc 的二进制兼容性问题 [PR #3997](https://github.com/apache/bookkeeper/pull/3997)
- 升级 snappy-java 以解决多个 CVE [PR #3993](https://github.com/apache/bookkeeper/pull/3993)
- 升级 Netty 到 4.1.93.Final [PR #3975](https://github.com/apache/bookkeeper/pull/3975)
- 升级 jetty 版本到 9.4.51.v20230217 [PR #3937](https://github.com/apache/bookkeeper/pull/3937)
- 升级 docusaurus 到 2.4.0 [PR #3936](https://github.com/apache/bookkeeper/pull/3936)
- 升级 docker 基础镜像以解决 [CVE-2023-0286](https://github.com/advisories/GHSA-x4qr-2fvf-3mr5) [PR #3916](https://github.com/apache/bookkeeper/pull/3916)
- 从 hadoop-common 中移除 avro、hadoop-auth 和 jersey-json 依赖项以解决 [CVE-2019-10202](https://github.com/advisories/GHSA-c27h-mcmw-48hv)、[CVE-2023-1370](https://github.com/advisories/GHSA-493p-pfq6-5258) 和 [CVE-2022-45685](https://github.com/advisories/GHSA-7rf3-mqpx-h7xg) [PR #3911](https://github.com/apache/bookkeeper/pull/3911)

### 详情

[https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.2+is%3Aclosed](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.2+is%3Aclosed)
```