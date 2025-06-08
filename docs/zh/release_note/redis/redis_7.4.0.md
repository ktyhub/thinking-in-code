# redis 7.4.0
```markdown
这是 Redis 社区版 7.4 的正式发布版本。

# 7.4 新特性变更（与 7.4 RC2 相比）

- [#13391](https://github.com/redis/redis/pull/13391), [#13438](https://github.com/redis/redis/pull/13438) 哈希 - 单个字段过期：RDB 文件格式更改
- [#13372](https://github.com/redis/redis/pull/13372) 哈希 - 单个字段过期：重命名并修正 `expired_subkeys` 计量
- [#13372](https://github.com/redis/redis/pull/13372) 哈希 - 单个字段过期：重命名 `INFO` keyspace 字段为 `subexpiry`

# 配置参数

- [#13400](https://github.com/redis/redis/pull/13400) 添加 hide-user-data-from-log - 允许在日志文件中隐藏用户数据

# Bug 修复

- [#13407](https://github.com/redis/redis/pull/13407) 在执行 `SCRIPT LOAD` 后触发 Lua GC
- [#13380](https://github.com/redis/redis/pull/13380) 修复由于无效命令导致的 OOM 崩溃问题
- [#13383](https://github.com/redis/redis/pull/13383) `FUNCTION FLUSH` - 改进 Lua GC 行为并修复 ASYNC 模式下的线程竞争问题
- [#13408](https://github.com/redis/redis/pull/13408) `HEXPIRE` 类命令在过期时间已过时应触发 `HDEL` keyspace 通知
```