# druid Druid 27.0.0

Apache Druid 27.0.0 包含超过 316 个新功能、错误修复、性能增强、文档改进和额外的测试覆盖。

[查看完整的更改集以获取更多详细信息](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A27.0+sort%3Aupdated-desc+)，包括[错误修复](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A27.0+sort%3Aupdated-desc+label%3ABug)。

在升级到 Druid 27.0.0 之前，请查看升级说明和不兼容的更改。

# 亮点

## Web 控制台中的新 Explore 视图（实验性）

Explore 视图是一个简单的、无状态的、基于 SQL 的数据探索视图。它允许用户通过点击和可视化来探索 Druid 中的数据，而不是编写 SQL 并查看表格。这可以为新用户提供更快的价值实现时间，并允许资深用户快速绘制他们关心的数据。

![image-4](https://private-user-images.githubusercontent.com/95239065/258625984-7ae3a826-ba61-4a54-81c2-88b9fb6d1f9f.png)

Explore 视图可以从标题中的 **More (...)** 菜单访问：

![image-5](https://private-user-images.githubusercontent.com/95239065/258626059-9b2b923d-0bc5-47d7-9d2e-18cb0d3f589e.png)

## 从深度存储查询（实验性）

Druid 现在支持查询仅存储在深度存储中的段。当从深度存储查询时，可以查询更大的数据，而不必扩展历史进程以容纳更多数据。要利用潜在的存储节省，请确保配置加载规则，以便不将所有段加载到历史进程中。

请注意，数据源的至少一个段必须加载到历史进程中，以便 Broker 可以规划查询。它可以是任何段。

更多信息，请参见以下内容：

- [从深度存储查询](https://druid.apache.org/docs/latest/querying/query-deep-storage.html)
- [从深度存储查询教程](https://druid.apache.org/docs/latest/tutorials/tutorial-query-deep-storage.html)

## 模式自动发现和数组列类型

类型感知的模式自动发现现已普遍可用。Druid 可以确定您要摄取的数据的模式，而无需手动定义模式。

作为类型感知模式发现改进的一部分，数组列类型现已普遍可用。Druid 可以确定您的模式的列类型，并在使用类型感知模式自动发现和 `auto` 列类型摄取数据时将它们分配给这些数组列类型。

更多信息，请参见以下内容：

- [类型感知模式发现](https://druid.apache.org/docs/latest/ingestion/schema-design.html#type-aware-schema-discovery)
- [26.0.0 版本说明：模式自动发现](https://github.com/apache/druid/releases#26.0.0-highlights-auto-type-column-schema-%28experimental%29-schema-auto-discovery-%28experimental%29)
- [26.0.0 版本说明：数组列类型](https://github.com/apache/druid/releases#26.0.0-highlights-auto-type-column-schema-%28experimental%29)

## 智能段加载

协调器现在更加稳定和用户友好。在新的 smartSegmentLoading 模式下，它动态计算多个配置的值，以最大化性能。

协调器现在可以优先加载较新的段和完全不可用的段，而不是加载已经在集群中加载了一些副本的段。它还可以重新评估先前运行中的决策，并取消不再需要的操作。此外，由段平衡启动的移动操作不会与不可用段的加载竞争，从而减少集群中变化的反应时间并加快段分配决策。

此外，领导权变更的影响现在较小，即使在协调器运行过程中重新选举发生，协调器也不会卡住。

最后，`cost` 平衡策略现在表现更好，能够在单个协调器运行中移动更多段。这些改进借鉴了 `cachingCost` 策略的想法。我们建议使用 `cost` 而不是 `cachingCost`，因为 `cachingCost` 现已弃用。

更多信息，请参见以下内容：

- [智能段加载相关的配置更改升级说明](#segment-loading-config-changes)
- [新的协调器指标](#new-coordinator-metrics)
- [智能段加载文档](https://druid.apache.org/docs/latest/configuration/index.html#smart-segment-loading)

## 新的查询过滤器

Druid 现在支持以下过滤器：

- 等值：替代选择器过滤器。它永远不会匹配空值。
- 空值：匹配空值。替代选择器过滤器。
- 范围：过滤维度值的范围。替代绑定过滤器。它永远不会匹配空值。

请注意，当 `druid.generic.useDefaultValueForNull=false` 或 SQL 查询上下文中的 `sqlUseBoundAndSelectors` 设置为 false 时，Druid 的 SQL 规划器默认使用这些新过滤器替代其旧版本。

您可以使用这些过滤器来过滤 ARRAY 列上的等值和范围，而不仅仅是使用以前的选择器和绑定过滤器过滤字符串。

更多信息，请参见 [查询过滤器](https://druid.apache.org/docs/latest/querying/filters.html)。

## 子查询结果的防护栏

用户现在可以通过在 Broker 的配置中设置 `druid.server.http.maxSubqueryRows` 或在查询上下文中设置 `maxSubqueryRows` 来添加防护栏，以防止子查询结果超过设定的字节数。建议使用此防护栏而不是基于行的限制。

此功能目前为实验性，如果无法准确获取查询消耗的结果大小，则默认回退到基于行的限制。

## 新增 OSHI 系统监视器

新增了一个新的 OSHI 系统监视器 (`OshiSysMonitor`) 以替代 `SysMonitor`。新的监视器对不同的机器架构（包括 ARM 实例）有更广泛的支持。我们建议切换到新的监视器。`SysMonitor` 现已弃用，并将在未来版本中移除。

## Java 17 支持

Druid 现在完全支持 Java 17。

## Hadoop 2 弃用

对 Hadoop 2 的支持现已弃用。它将在未来的版本中移除。

更多信息，请参见 [升级说明](#hadoop-2-deprecated-1)。

# 其他功能和改进

## 基于 SQL 的摄取

### 改进的查询规划行为

如果 CLUSTERED BY 列包含降序，Druid 现在会在查询规划时失败。之前，如果任何 CLUSTERED BY 列包含降序，查询会成功规划。

MSQ 错误 `InsertCannotOrderByDescending` 已弃用。包含 CLUSTERED BY 表达式的 INSERT 或 REPLACE 查询不能为降序。Druid 的段生成代码仅支持升序。现在，Druid 会抛出查询 `ValidationException` 而不是错误。

### 改进的段大小

默认的 `clusterStatisticsMergeMode` 现在是 `S...
```