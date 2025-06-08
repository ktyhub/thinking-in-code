# druid druid-29.0.1
```markdown
# Druid 29.0.1

Apache Druid 29.0.1 是一个修补版本，修复了 Druid 29.0.0 版本中的一些问题。

## Bug 修复

- 为 INSERT 和 REPLACE 添加了类型验证，以确保字符串和字符串数组不会混合使用 [#15920](https://github.com/apache/druid/pull/15920)
- [并发替换](https://druid.apache.org/docs/latest/ingestion/concurrent-append-replace) 现在允许使用 Supervisor 升级待处理的 Peon 段 [#15995](https://github.com/apache/druid/pull/15995)
- 将 `targetDataSource` 属性更改为返回包含数据源名称的字符串。这恢复了 Druid 29.0.0 中引入的 INSERT 和 REPLACE MSQ 查询的破坏性更改 [#16004](https://github.com/apache/druid/pull/16004) [#16031](https://github.com/apache/druid/pull/16031)
- 减小了分发 Docker 镜像的大小 [#15968](https://github.com/apache/druid/pull/15968)
- 修复了基于 SQL 的摄取问题，其中字符串输入（如 CSV、TSV 或 JSON 中的字符串值字段）在被类型化为 LONG 或 BIGINT 时被摄取为 null 值 [#15999](https://github.com/apache/druid/pull/15999)
- 修复了 Web 控制台生成的 Kafka 监督规范中 `flattenSpec` 位置错误的问题 [#15946](https://github.com/apache/druid/pull/15946)
- 修复了表达式虚拟列索引上的过滤器在某些情况下错误地将值视为 null 的问题，这些表达式将 null 值转换为非 null 值 [#15959](https://github.com/apache/druid/pull/15959)
- 修复了数据加载器在无法解析传入数据时崩溃的问题 [#15983](https://github.com/apache/druid/pull/15983)
- 改进了 Web 控制台中的 DOUBLE 类型检测 [#15998](https://github.com/apache/druid/pull/15998)
- Web 控制台生成的查询现在仅在明确选择使用数组时才设置上下文参数 `arrayIngestMode` 为 `array` [#15927](https://github.com/apache/druid/pull/15927)
- Web 控制台现在通过 [EXTERN](https://druid.apache.org/docs/latest/multi-stage-query/reference#extern-function) 函数显示写入外部目标的 MSQ 查询结果 [#15969](https://github.com/apache/druid/pull/15969)

## 不兼容的更改

### EXPLAIN 查询中 `targetDataSource` 的更改

Druid 29.0.1 包含一个破坏性更改，将 `targetDataSource` 的行为恢复到 28.0.0 及更早版本的状态，与 Druid 29.0.0 不同。在 29.0.0 中，`targetDataSource` 返回一个包含数据源名称的 JSON 对象。在所有其他版本中，`targetDataSource` 返回一个包含数据源名称的字符串。

如果您从 29.0.0 以外的任何版本升级，则行为没有变化。

如果您从 29.0.0 升级，这是一个不兼容的更改。

[#16004](https://github.com/apache/druid/pull/16004)

## 依赖更新

- 更新了 PostgreSQL JDBC 驱动程序版本至 42.7.2 [#15931](https://github.com/apache/druid/pull/15931)

## 致谢

- abhishekagarwal87
- adarshsanjeev
- AmatyaAvadhanula
- clintropolis
- cryptoe
- dependabot[bot]
- ektravel
- gargvishesh
- gianm
- kgyrtkirk
- LakshSingla
- somu-imply
- techdocsmith
- vogievetsky
```