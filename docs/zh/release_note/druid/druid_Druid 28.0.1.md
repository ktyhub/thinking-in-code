# druid Druid 28.0.1
```markdown
### 描述

Apache Druid 28.0.1 是一个修补版本，修复了 28.0.0 版本中的一些问题。有关更多详细信息，请参阅[完整的更改集](https://github.com/apache/druid/milestone/53?closed=1)。

## 重要的错误修复

- [#15405](https://github.com/apache/druid/pull/15405) 使 start-druid 脚本更加健壮
- [#15402](https://github.com/apache/druid/pull/15402) 修复了具有多个后聚合指标的 groupBy 查询的查询缓存错误
- [#15430](https://github.com/apache/druid/pull/15430) 修复了由于添加了新的任务操作 `RetrieveSegmentsToReplaceAction`，在滚动升级时 overlord 不可用而导致的任务失败问题
- [#15500](https://github.com/apache/druid/pull/15500) 修复了与默认 SQL 兼容模式常用的 NullFilter 相关的错误

## 致谢

感谢所有为此版本做出贡献的人！
```