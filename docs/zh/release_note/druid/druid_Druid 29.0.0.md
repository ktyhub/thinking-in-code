# druid Druid 29.0.0
```markdown
Apache Druid 29.0.0 包含超过 350 个新功能、错误修复、性能增强、文档改进和额外的测试覆盖，来自 67 位贡献者。

查看 [完整的变更集](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A29.0.0+sort%3Aupdated-desc) 以获取更多详细信息，包括错误修复。

在升级到 Druid 29.0.0 之前，请查看 [升级说明](#upgrade-notes)。如果您跨多个版本升级，请参阅 [升级说明](https://github.com/apache/druid/blob/druid-29.0.0/upgrade-notes.md) 页面，其中列出了最近 Druid 版本的升级说明。

## 重要功能、变更和弃用

本节包含有关新功能和现有功能的重要信息。

### MSQ 导出语句（实验性）

Druid 29.0.0 为 MSQ 任务引擎添加了对导出语句的实验性支持。这允许查询任务通过 [EXTERN 函数](https://druid.apache.org/docs/latest/multi-stage-query/reference#extern-function) 将数据写入外部目的地。

### SQL PIVOT 和 UNPIVOT（实验性）

Druid 29.0.0 添加了对 SQL PIVOT 和 UNPIVOT 操作符的实验性支持。

PIVOT 操作符执行聚合并将行转换为输出中的列。以下是 PIVOT 操作符的一般语法：

```sql
PIVOT (aggregation_function(column_to_aggregate)
  FOR column_with_values_to_pivot
  IN (pivoted_column1 [, pivoted_column2 ...])
)
```

UNPIVOT 操作符将现有列值转换为行。以下是 UNPIVOT 操作符的一般语法：

```sql
UNPIVOT (values_column 
  FOR names_column
  IN (unpivoted_column1 [, unpivoted_column2 ... ])
)
```

### 窗口函数中的范围支持（实验性）

窗口函数（实验性）现在支持范围，其中两个端点都是无界的或当前行。范围在严格模式下工作，这意味着 Druid 将失败不支持的查询。您可以通过将上下文参数 `windowingStrictValidation` 设置为 `false` 来关闭严格模式。

以下示例显示了带有 RANGE 框架规范的窗口表达式：

```sql
(ORDER BY c)
(ORDER BY c RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
(ORDER BY c RANGE BETWEEN CURRENT ROW AND UNBOUNDED PRECEDING)
```

### 改进的 INNER 连接

Druid 现在支持任意的 INNER 连接条件。任何无法作为连接的一部分评估的子条件都会转换为连接后的过滤器。改进的连接功能使 Druid 能够更有效地支持像 Tableau 这样的应用程序。

### 改进的并发追加和替换（实验性）

您不再需要手动确定并发追加和替换（实验性）的任务锁类型。Druid 现在可以自动为您确定。您可以为单个任务和数据源使用上下文参数 `"useConcurrentLocks": true`，或在集群级别启用并发追加和替换。

### 双精度、浮点和长整型数据类型的首尾聚合器

Druid 现在支持双精度、浮点和长整型类型的首尾聚合器，适用于本地和 MSQ 吞吐规范和 MSQ 查询。之前，它们仅支持本地查询。更多信息，请参见 [首尾聚合器](https://druid.apache.org/docs/latest/querying/aggregations/#first-and-last-aggregators)。

此外，以下函数现在可以返回数值：

- EARLIEST 和 EARLIEST_BY
- LATEST 和 LATEST_BY

您可以在摄取时将这些函数用作聚合器。

### 支持记录审计事件

增加了记录审计事件的支持，并改进了审计的 REST API 端点覆盖范围。要启用记录审计事件，请在 Coordinator 和 Overlord 或 `common.runtime.properties` 中将配置 `druid.audit.manager.type` 设置为 `log`。当您将 `druid.audit.manager.type` 设置为 `sql` 时，审计事件会持久化到元数据存储中。

在这两种情况下，Druid 审计以下事件：

- Coordinator
  - 更新加载规则
  - 更新查找
  - 更新协调器动态配置
  - 更新自动压缩配置
- Overlord
  - 提交任务
  - 创建/更新监督器
  - 更新工作配置
- 基本安全扩展
  - 创建用户
  - 删除用户
  - 更新用户凭据
  - 创建角色
  - 删除角色
  - 为用户分配角色
  - 设置角色权限

还修复了基本身份验证集成测试的问题，不再将日志持久化到数据库。

### 启用空摄取查询

MSQ 任务引擎现在默认允许空摄取查询。之前，生成无数据的摄取查询会因 `InsertCannotBeEmpty` MSQ 错误而失败。更多信息，请参见 [升级说明中的空摄取查询](#enabled-empty-ingest-queries)。

在 Web 控制台中，您可以使用切换开关来控制摄取查询是否因生成无数据而失败。

### MSQ 支持 Google Cloud Storage

MSQ 任务引擎现在支持 Google Cloud Storage (GCS)。您可以使用 GCS 进行持久存储。更多信息，请参见 [持久存储配置](https://druid.apache.org/docs/latest/multi-stage-query/reference#durable-storage-configurations)。

### 实验性扩展

Druid 29.0.0 添加了以下扩展。

#### DDSketch

一个新的 DDSketch 扩展作为社区贡献可用。DDSketch 扩展 (`druid-ddsketch`) 提供对使用 [DDSketch](https://github.com/datadog/sketches-java) 库的近似分位数查询的支持。

#### Spectator 直方图

一个新的直方图扩展作为社区贡献可用。基于 Spectator 的直方图扩展 (`druid-spectator-histogram`) 提供基于 [Spectator](https://netflix.github.io/atlas-docs/spectator/) 固定桶直方图的近似直方图聚合器和百分位后聚合器。

#### Delta Lake

一个新的 Delta Lake 扩展作为社区贡献可用。Delta Lake 扩展...
```