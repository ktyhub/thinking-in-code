# druid Druid 30.0.0

Apache Druid 30.0.0 包含超过 407 个新功能、错误修复、性能增强、文档改进和额外的测试覆盖。

查看 [完整的更改集](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A30.0.0+sort%3Aupdated-desc) 以获取更多详细信息，包括错误修复。

在升级到 Druid 30.0.0 之前，请查看 [升级说明](#upgrade-notes) 和 [不兼容的更改](#incompatible-changes)。如果您跨多个版本升级，请参阅 [升级说明](https://github.com/apache/druid/blob/druid-30.0.0/upgrade-notes.md) 页面，其中列出了最近的 Druid 版本的升级说明。

## 即将移除的功能

作为 Druid 持续改进的一部分，我们正在弃用某些功能和行为，以支持提供更强大功能并更符合标准 ANSI SQL 的新迭代。许多这些新功能在多个版本中已经是新部署的默认设置。

以下功能已被弃用，我们计划在 Druid 32.0.0 中移除支持：

- **非 SQL 兼容的空值处理**：默认情况下，Druid 现在区分空字符串和无数据记录，以及空数值记录和 `0`。更多信息请参见 [NULL 值](https://github.com/apache/druid/blob/querying/sql-data-types.md#null-values)。有关 SQL 兼容逻辑的教程，请参见 [空值处理教程](https://github.com/apache/druid/blob/tutorials/tutorial-sql-null.md)。
- **非严格布尔处理**：Druid 现在严格使用 `1`（真）或 `0`（假）。之前，真和假可以分别表示为 `true` 和 `false` 或 `1` 和 `0`。此外，Druid 现在对于布尔比较如 `True && NULL` 返回空值。更多信息请参见 [布尔逻辑](https://github.com/apache/druid/blob/querying/sql-data-types.md#boolean-logic)。有关使用 SQL 兼容逻辑的过滤器示例，请参见 [查询过滤器](https://github.com/apache/druid/blob/querying/filters.md)。
- **两值逻辑**：默认情况下，Druid 现在在摄取和查询中使用三值逻辑。这主要影响使用逻辑非操作符的过滤器在包含 NULL 值的列上的行为。更多信息请参见 [布尔逻辑](https://github.com/apache/druid/blob/querying/sql-data-types.md#boolean-logic)。有关使用 SQL 兼容逻辑的过滤器示例，请参见 [查询过滤器](https://github.com/apache/druid/blob/querying/filters.md)。

## 重要功能、变更和弃用

本节包含有关新功能和现有功能的重要信息。

### 并发追加和替换改进

流式摄取监督器现在支持并发追加，即流式任务可以与替换任务（压缩或重新索引）并发运行，如果它也使用并发锁。设置上下文参数 `useConcurrentLocks` 为 true 以启用并发追加。

一旦您将监督器更新为 `"useConcurrentLocks": true`，并发追加的过渡将无缝进行，不会导致摄取延迟或任务失败。

Druid 现在通过跟踪使用这些挂起段的任务集来主动清理陈旧的挂起段。这允许并发追加和替换仅升级最小集的挂起段，从而提高性能并消除错误。此外，它有助于减少元数据存储的负载。

### 复杂列上的分组

Druid 现在支持在复杂列和嵌套数组上进行分组。这意味着本地查询和 MSQ 任务引擎都可以在复杂列和嵌套数组上进行分组并返回结果。

此外，MSQ 任务引擎可以在摄取期间对支持的复杂列（如 JSON 列）进行汇总和排序。

### 移除基于 ZooKeeper 的段加载

由于已知问题，基于 ZooKeeper 的段加载将被移除。它已被弃用多个版本。对 Druid 协调器的最近改进显著增强了基于 HTTP 的段加载性能。

### 改进的 groupBy 查询

在 Druid 将实时段推送到深度存储之前，这些段由溢出文件组成。段指标如 `query/segment/time` 现在报告每个实时段的每个溢出文件，而不是整个段。这一变化消除了在堆上物化结果的需求，从而提高了 groupBy 查询的性能。

### 改进的 AND 过滤器性能

Druid 查询处理现在自适应地确定何时应计算 AND 过滤器子项的索引以及何时在扫描期间简单匹配行，基于其他过滤器的选择性。这种称为过滤器分区的技术可以显著提高性能，具体取决于查询中过滤器的顺序。

例如，考虑一个查询 `SELECT SUM(longColumn) FROM druid.table WHERE stringColumn1 = '1000' AND stringColumn2 LIKE '%1%'`。之前，Druid 在处理过滤器时如果有索引可用就使用索引。这并不总是理想的；想象一下如果 `stringColumn1 = '1000'` 匹配 100 行。使用索引时，我们必须找到每个 `stringColumn2 LIKE '%1%'` 的值来计算过滤器的索引。如果 `stringColumn2` 有超过 100 个值，这比简单地检查剩余的 100 行中的匹配项更糟糕。

使用新逻辑，Druid 现在在处理 AND 过滤器的每个子句时检查索引的选择性。如果它确定计算索引比匹配剩余行需要更多工作，Druid 将跳过计算索引。

在查询的 WHERE 子句中编写过滤器的顺序可以提高查询的性能。更多改进即将到来，但您可以通过重新排序查询来尝试现有的改进。将计算强度较低的索引如 `IS NULL`、`=` 和比较（`>`、`>=`、`<` 和 `<=`）放在 AND 过滤器的开头，以便 Druid 更有效地处理您的查询。不按这种方式排序过滤器不会降低以前版本的性能，因为回退行为是 Druid 之前的做法。

### 集中数据源模式（alpha）

您现在可以配置 Druid 在协调器上集中管理数据源模式。之前，Brokers...
```