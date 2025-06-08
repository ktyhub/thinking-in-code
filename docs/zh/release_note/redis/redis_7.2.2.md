# redis 7.2.2
```markdown
## 紧急升级通知：安全性

### 安全修复
- (CVE-2023-45145) 错误的 `listen(2)` 和 `chmod(2)` 调用顺序导致了竞争条件，可能被其他进程利用，绕过启动时的 Unix 套接字权限。

### 平台/工具链支持相关更改
- 修复 MacOS 13 上的编译错误 [#12611](https://github.com/redis/redis/pull/12611)

### Bug 修复
- 在没有写入流量的情况下，如果创建了新的 AOF 文件，而 AOF 重写无法立即启动，WAITAOF 可能会超时 [#12620](https://github.com/redis/redis/pull/12620)

### Redis 集群
- 修复在 7.0 和 7.2 混合集群节点中运行再平衡命令时的崩溃问题 [#12604](https://github.com/redis/redis/pull/12604)
- 修复集群分片中的插槽号返回类型为整数，使其与之前的行为保持一致 [#12561](https://github.com/redis/redis/pull/12561)
- 修复从模块或脚本中调用 CLUSTER 命令时正确返回 TLS 信息 [#12569](https://github.com/redis/redis/pull/12569)

### CLI 工具变更
- redis-cli 修复了在重新连接时处于 SUBSCRIBE 模式下的崩溃问题 [#12571](https://github.com/redis/redis/pull/12571)

### 模块 API 更改
- 修复下一个定时器事件溢出计算问题 [#12474](https://github.com/redis/redis/pull/12474)
```