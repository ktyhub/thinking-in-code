# bookkeeper Release 4.16.3
```markdown
## 4.16.3

版本 4.16.3 包含多个错误修复和一些依赖项的 CVE 修复。

鼓励 Apache BookKeeper 用户升级到 4.16.3。以下是此版本的技术细节总结。

### 亮点

#### 错误修复

- 修复 AutoCloseableLifecycleComponent 关闭异常日志 [PR #4042](https://github.com/apache/bookkeeper/pull/4042)
- 使 DefaultEntryLogger 和 DirectEntryLogger 兼容 [PR #4041](https://github.com/apache/bookkeeper/pull/4041)
- 修复 deletedLedgers 计数 [PR #4026](https://github.com/apache/bookkeeper/pull/4026)
- 修复当执行器抛出 `RejectedExecutionException` 时的读写请求泄漏 [PR #4024](https://github.com/apache/bookkeeper/pull/4024)
- 最终回收 LongWrapper 以避免内存泄漏 [PR #4007](https://github.com/apache/bookkeeper/pull/4007)
- 移除 underreplication 回调 [PR #4058](https://github.com/apache/bookkeeper/pull/4058)

#### 改进

- 强制使用 linux/amd64 构建发布版本 [PR #4060](https://github.com/apache/bookkeeper/pull/4060)
- 允许在单个 rocksdb 批处理中设置最大操作数 [PR #4044](https://github.com/apache/bookkeeper/pull/4044)
- 将 pendingDeletedLedgers 更改为 ConcurrentHashSet [PR #3989](https://github.com/apache/bookkeeper/pull/3989)
- 在 log4j 配置中启用 kv 日志 [PR #3986](https://github.com/apache/bookkeeper/pull/3986)
- 支持在重放日志阶段跳过无效的日志记录 [PR #3956](https://github.com/apache/bookkeeper/pull/3956)
- 优化 getEntryLogMetadata [PR #3948](https://github.com/apache/bookkeeper/pull/3948)

#### 依赖项更新

- 将 guava 版本从 31.0.1-jre 升级到 32.0.1-jre [PR #4008](https://github.com/apache/bookkeeper/pull/4008)
- 升级 Netty 到 4.1.94.Final 以解决 [CVE-2023-34462](https://github.com/advisories/GHSA-6mjq-h674-j845) [PR #3999](https://github.com/apache/bookkeeper/pull/3999)

### 详情

[https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.3+is%3Aclosed](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.3+is%3Aclosed)
```