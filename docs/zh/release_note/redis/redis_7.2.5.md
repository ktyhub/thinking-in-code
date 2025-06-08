# redis 7.2.5
下面是将内容翻译并整理后的中文版本，使用了markdown语法：

```markdown
**升级紧急程度：中等**  
建议对服务器进行升级，但目前并不紧迫。

# Bug修复

- 单个分片集群在CLUSTER SLOTS中保留失败的副本，而不是移除它们 [#12824](https://github.com/redis/redis/pull/12824)
- 在LSET命令中替换小项目并超过4GB时发生崩溃 [#12955](https://github.com/redis/redis/pull/12955)
- 阻塞命令的超时时间因重新处理命令而重置 [#13004](https://github.com/redis/redis/pull/13004)
- 在将Lua参数中的数字转换为Redis参数时可能失败，该问题在7.2.0版本中引入 [#13115](https://github.com/redis/redis/pull/13115)

# CLI工具中的Bug修复

- `redis-cli`: `--count`（用于`--scan`、`--bigkeys`等）在未使用`--pattern`时被忽略 [#13092](https://github.com/redis/redis/pull/13092)
- `redis-check-aof`: 错误地将清单格式中的数据视为MP-AOF [#12958](https://github.com/redis/redis/pull/12958)
```

这样整理后，移除了不必要的符号，确保内容简洁且通顺。