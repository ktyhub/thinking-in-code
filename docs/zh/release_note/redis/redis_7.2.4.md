# redis 7.2.4
```markdown
### 更新紧急程度：安全性问题

请查看下方的安全修复内容。

## 安全修复

- (CVE-2023-41056) 在某些情况下，Redis 可能错误地处理内存缓冲区的调整大小，导致缓冲区大小的错误计算，进而引发堆内存溢出和潜在的远程代码执行。

## Bug 修复

- 修复在 7.0 和 7.2 混合版本的集群命令中导致的崩溃问题 [#12805](https://github.com/redis/redis/pull/12805), [#12832](https://github.com/redis/redis/pull/12832)。
- 修复节点删除插槽时，插槽所有权处理不当的问题 [#12564](https://github.com/redis/redis/pull/12564)。
- 修复 RedisModuleEvent_Key 模块 API 事件中的原子性问题 [#12733](https://github.com/redis/redis/pull/12733)。
```