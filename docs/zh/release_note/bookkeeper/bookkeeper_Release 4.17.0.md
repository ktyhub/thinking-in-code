# bookkeeper Release 4.17.0
```markdown
发布 4.17.0 版本包含多个重要功能、改进、错误修复和一些依赖项的 CVE 修复。

以下是此版本的技术细节总结。

### 重大变更

无重大变更。一些默认值有所不同，但总体上没有兼容性问题。

### 功能

- BP-62 批量读取 API

### 重要变更

- 默认启用 bk 客户端的读取顺序重排 [PR #4139](https://github.com/apache/bookkeeper/pull/4139)
- 修复 prometheus 客户端生成的一些没有类型信息的指标 [PR #3927](https://github.com/apache/bookkeeper/pull/3927)
- 修复启用 httpServer 时的任意文件上传漏洞 [PR #3982](https://github.com/apache/bookkeeper/pull/3982)
- 在 log4j 配置中启用 kv 日志 [PR #3986](https://github.com/apache/bookkeeper/pull/3986)
- 使 DefaultEntryLogger 和 DirectEntryLogger 兼容 [PR #4041](https://github.com/apache/bookkeeper/pull/4041)

#### Bookie

- 修复负数 JournalQueueSize 的错误 [PR #4077](https://github.com/apache/bookkeeper/pull/4077)
- 修复压缩节流不精确的问题 [PR #3192](https://github.com/apache/bookkeeper/pull/3192)
- 修复配置多个账本目录时的数据丢失问题 [PR #3329](https://github.com/apache/bookkeeper/pull/3329)
- 在压缩时重命名文件时尝试使用 jdk api 创建硬链接 [PR #3876](https://github.com/apache/bookkeeper/pull/3876)
- [功能] [服务器] 添加 dbStorage_readAheadCacheBatchBytesSize 属性以提前读取条目 [PR #3895](https://github.com/apache/bookkeeper/pull/3895)
- 修复 EntryLocationIndex 中 ledgersToDelete 为空时的键泄漏问题 [PR #3903](https://github.com/apache/bookkeeper/pull/3903)
- 修复运行时异常阻塞垃圾回收的问题 [PR #3901](https://github.com/apache/bookkeeper/pull/3901)
- 无更改时跳过同步 RocksDB [PR #3904](https://github.com/apache/bookkeeper/pull/3904)
- 启用 PCBC completionObjects 自动收缩以减少内存使用和垃圾回收 [PR #3913](https://github.com/apache/bookkeeper/pull/3913)
- [修复] 在发生各种异常时回收丢弃的读写请求 [PR #3912](https://github.com/apache/bookkeeper/pull/3912)
- 修复账本复制失败阻止 bookie 退役过程 [PR #3917](https://github.com/apache/bookkeeper/pull/3917)
- 支持在回复日志阶段跳过无效的日志记录 [PR #3956](https://github.com/apache/bookkeeper/pull/3956)
- 避免压缩触发额外的 DbLedgerStorage 刷新 [PR #3959](https://github.com/apache/bookkeeper/pull/3959)
- 修复直接内存条目记录器中的直接内存泄漏 [PR #3983](https://github.com/apache/bookkeeper/pull/3983)
- 统一 DirectIO 组件的 ByteBufAllocator [PR #3985](https://github.com/apache/bookkeeper/pull/3985)
- 打印压缩进度 [PR #4071](https://github.com/apache/bookkeeper/pull/4071)
- 优化 bookie 退役检查等待间隔 [PR #4070](https://github.com/apache/bookkeeper/pull/4070)
- 修复触发 GC 不工作的问题 [PR #3998](https://github.com/apache/bookkeeper/pull/3998)
- 允许在单个 rocksdb 批处理中设置最大操作数 [PR #4044](https://github.com/apache/bookkeeper/pull/4044)
- 为账本检查器添加读取失败日志 [PR #4010](https://github.com/apache/bookkeeper/pull/4010)
- 修复执行器抛出 RejectedExecutionException 时的读写请求泄漏问题 [PR #4024](https://github.com/apache/bookkeeper/pull/4024)
- 提高 DefaultEntryLogger 的读取性能 [PR #4038](https://github.com/apache/bookkeeper/pull/4038)

#### 客户端

- [错误] 总是创建一个孤立的账本 [PR #3813](https://github.com/apache/bookkeeper/pull/3813)
- 修复当负载为 CompositeByteBuf 且 readerIndex > 0 时的校验和计算错误 [PR #4196](https://github.com/apache/bookkeeper/pull/4196)
- 修复重置所有 BK 的机架后没有已知 bookies 的问题 [PR #4128](https://github.com/apache/bookkeeper/pull/4128)
- 修复客户端运行时与旧版 grpc 的二进制兼容性问题 [PR #3997](https://github.com/apache/bookkeeper/pull/3997)
- 条目写入支持本地节点区域感知放置策略 [PR #4063](https://github.com/apache/bookkeeper/pull/4063)
- 机架感知放置策略支持通过主机名感知本地节点 [PR #4057](https://github.com/apache/bookkeeper/pull/4057)
- 使用 netty-bom 对齐 netty 库版本，添加 linux-aarch_64 的 epoll 支持 [PR #4204](https://github.com/apache/bookkeeper/pull/4204)

#### 自动恢复

- 使 AutoRecovery 默认启用 stickyReadS [PR #4125](https://github.com/apache/bookkeeper/pull/4125)
- 支持自动恢复的重试逻辑 [PR #3799](https://github.com/apache/bookkeeper/pull/3799)
- 修复审计员选举执行器阻塞问题 [PR #4165](https://github.com/apache/bookkeeper/pull/4165)
- 修复由于添加条目围栏错误导致的自动恢复失败复制问题 [PR #4163](https://github.com/apache/bookkeeper/pull/4163)
- 修复审计员线程泄漏问题 [PR #4162](https://github.com/apache/bookkeeper/pull/4162)
- 自动恢复支持批量读取 [PR #4211](https://github.com/apache/bookkeeper/pull/4211)

#### 其他

- 添加 CLI 命令以在没有 bookie 的情况下启动状态存储服务 [PR #2648](https://github.com/apache/bookkeeper/pull/2648)
- 添加符合放置策略的合奏重新定位命令 [PR #2931](https://github.com/apache/bookkeeper/pull/2931)
- 调整池并发性 [PR #3432](https://github.com/apache/bookkeeper/pull/3432)
- 修复 docker 镜像中的日志配置问题 [PR #4137](https://github.com/apache/bookkeeper/pull/4137)
- [发布] 强制使用 linux/amd64 构建发布 [PR #4060](https://github.com/apache/bookkeeper/pull/4060)

### 依赖项变更

升级了重要的依赖项并解决了 CVEs，包括：

- 升级 snappy-java 以解决多个 CVEs [PR #3993](https://github.com/apache/bookkeeper/pull/3993)
- 升级 grpc 和 protobuf 以解决 [CVE-2023-32732](https://github.com/advisories/GHSA-9hxf-ppjv-w6rq) [PR #3992](https://github.com/apache/bookkeeper/pull/3992)
- 升级 Zookeeper 到 3.8.3 以解决 [CVE-2023-44981](https://github.com/advisories/GHSA-7286-pgfv-vxvh) [PR #4112](https://github.com/apache/bookkeeper/pull/4112)
- 升级 Netty 到 4.1.107.Final 和 io_uring 到 0.0.25.Final [PR #4224](https://github.com/apache/bookkeeper/pull/4224)
- 将 org.apache.commons:commons-compress 从 1.21 升级到 1.26.0 [PR #4214](https://github.com/apache/bookkeeper/pull/4214)
- 将 datasketches 版本从 0.8.3 升级到 3.2.0 [PR #3264](https://github.com/apache/bookkeeper/pull/3264)
- 解决日志配置在 docker 镜像中损坏的问题 [PR #4137](https://github.com/apache/bookkeeper/pull/4137)
- 升级 rocksdb 版本以避免校验和不匹配错误 [PR #3568](https://github.com/apache/bookkeeper/pull/3568)
- 升级 commons-codec 到 1.13 [PR #3508](https://github.com/apache/bookkeeper/pull/3508)
- 从 hadoop-common 中移除 avro、hadoop-auth 和 jersey-json 依赖项以解决 [CVE-2019-