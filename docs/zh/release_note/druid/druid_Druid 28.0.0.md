# druid Druid 28.0.0

Apache Druid 28.0.0 包含了超过 420 个新功能、错误修复、性能增强、文档改进和额外的测试覆盖。

查看[完整的变更集](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A28.0+sort%3Aupdated-desc+)以获取更多详细信息，包括错误修复。

在升级到 Druid 28.0.0 之前，请查看[升级说明](https://github.com/apache/druid/issues/15326#28.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes)和[不兼容的变更](https://github.com/apache/druid/issues/15326#28.0.0-upgrade-notes-and-incompatible-changes-incompatible-changes)。

# 重要功能、变更和弃用

在 Druid 28.0.0 中，我们对查询进行了重大改进，使系统更符合 ANSI SQL 标准。这包括处理 NULL 和布尔值以及布尔逻辑的变更。同时，Apache Calcite 库已升级到最新版本。虽然我们记录了已知的查询行为变更，但请仔细阅读[升级说明](#upgrade-notes)部分。在广泛生产环境中部署之前，请测试您的应用程序并密切监控查询状态。

## SQL 兼容性

Druid 继续使 SQL 查询执行更符合标准 SQL 的行为。然而，如果需要，可以使用特性标志恢复旧行为。

### 三值逻辑

Druid 原生过滤器现在默认遵循 SQL [三值逻辑](https://en.wikipedia.org/wiki/Three-valued_logic#SQL)（`true`、`false` 或 `unknown`），当以下默认设置适用时：

- `druid.generic.useThreeValueLogicForNativeFilters = true`
- `druid.expressions.useStrictBooleans = true`
- `druid.generic.useDefaultValueForNull = false`

### 严格布尔值

`druid.expressions.useStrictBooleans` 现在默认启用。Druid 现在严格使用 `1`（true）或 `0`（false）处理布尔值。以前，true 和 false 可以分别表示为 `true` 和 `false` 以及 `1` 和 `0`。此外，Druid 现在对于布尔比较如 `True && NULL` 返回 null 值。

如果您未在 `runtime.properties` 中显式配置此属性，集群现在会对任何摄取的布尔值以及变换和查询时操作的布尔函数输出使用 LONG 类型。更多信息，请参见[升级说明中的 SQL 兼容性](#sql-compatibility-1)。

### NULL 处理

`druid.generic.useDefaultValueForNull` 现在默认禁用。Druid 现在区分空记录和 null 记录。以前，Druid 可能将空记录视为空或 null。更多信息，请参见[升级说明中的 SQL 兼容性](#sql-compatibility-1)。

## SQL 规划器改进

Druid 使用 Apache Calcite 进行 SQL 规划和优化。从 Druid 28.0.0 开始，Calcite 版本已从 1.21 升级到 1.35。此升级带来了许多 SQL 规划中的错误修复。

### 动态参数

作为 Calcite 升级的一部分，动态参数的类型推断行为发生了变化。为了避免任何类型干扰问题，请在 SQL 查询中显式 `CAST` 所有动态参数为特定数据类型。例如，使用：

```sql
SELECT (1 * CAST (? as DOUBLE))/2 as tmp
```

不要使用：

```sql
SELECT (1 * ?)/2 as tmp
```

## 异步查询和从深度存储查询

[从深度存储查询](https://druid.apache.org/docs/latest/querying/query-deep-storage/)不再是实验性功能。当您从深度存储查询时，无需扩展历史服务即可为查询提供更多数据。要利用从深度存储查询提供的空间节省，请配置加载规则以从历史服务中卸载数据。

### 支持多种结果格式

从深度存储查询现在支持多种结果格式。以前，`/druid/v2/sql/statements/` 端点仅支持 `object` 格式的结果。现在，结果可以以 `resultFormat` 参数指定的任何格式写入。有关 Druid SQL API 支持的结果参数的更多信息，请参见[响应](https://druid.apache.org/docs/latest/api-reference/sql-api#responses)。

### 扩展深度存储查询的访问权限

具有 `STATE` 权限的用户可以与深度存储查询的状态 API 交互。以前，只有提交查询的用户可以使用这些 API。这使得 Web 控制台可以监控查询的运行状态。具有 `STATE` 权限的用户可以访问查询结果。

## 实时任务的 MSQ 查询

MSQ 任务引擎现在可以在查询结果中包含实时段。为此，请使用 `includeSegmentSource` 上下文参数并将其设置为 `REALTIME`。

## MSQ 支持 UNION ALL 查询

您现在可以使用 MSQ 任务引擎运行带有 `UnionDataSource` 的 UNION ALL 查询。

## 从多个 Kafka 主题摄取到单个数据源

您现在可以使用单个监督器从多个 Kafka 主题摄取流数据到一个数据源。您可以使用正则表达式模式作为 IO 配置中 `topicPattern` 的值来配置监督器规范的主题。如果您向 Kafka 添加与正则表达式匹配的新主题，Druid 会自动开始从这些新主题中摄取数据。

如果您为数据源启用了多主题摄取，降级将导致监督器失败。更多信息，请参见[降级前停止从多个 Kafka 主题摄取的监督器](#stop-supervisors-that-ingest-from-multiple-kafka-topics-before-downgrading)。

## SQL UNNEST 和摄取扁平化

UNNEST 函数不再是实验性功能。

Druid 现在支持 SQL 基于批量摄取和从深度存储查询中的 UNNEST，因此您可以轻松地扁平化数组。更多信息，请参见[UNNEST](https://druid.apache.org/docs/latest/querying/sql/#unnest)和[列内数组扁平化](https://druid.apache.org/docs/latest/tutorials/tutorial-unnest-arrays/)。

您不再需要包含上下文参数 `enableUnnest: true` 来使用 UNNEST。

### SQL UNNEST 的推荐语法

SQL UNNEST 的推荐语法已更改。我们建议在大多数查询中使用 CROSS JOIN 而不是逗号，以防止优先级问题。例如，使用：

```sql
SELECT column_alias_name1 FROM datasource CROSS JOIN UNNEST(source_ex...)
```
```