# druid Druid 25.0.0

Apache Druid 25.0.0 包含了来自 51 位贡献者的 300 多个新功能、错误修复、性能增强、文档改进和额外的测试覆盖。

[查看完整的更改集以获取更多详细信息](https://github.com/apache/druid/milestone/48)。

# 亮点

## MSQ 任务引擎现已投入生产使用

用于基于 SQL 的数据摄取的多阶段查询 (MSQ) 任务引擎现已投入生产使用。可用于任何支持的工作负载。更多信息请参见以下页面：

- [数据摄取](https://druid.apache.org/docs/latest/ingestion/index.html)
- [基于 SQL 的数据摄取](https://druid.apache.org/docs/latest/multi-stage-query/index.html)

## 简化的 Druid 部署

新的 `start-druid` 脚本极大地简化了在单服务器上部署任何组合的 Druid 服务。它预打包了所需的配置，只需调用 `./start-druid` 即可启动一个完全功能的 Druid 集群。对于有经验的 Druid 用户，它还提供了对运行时属性和 JVM 参数的完全控制，以便配置一个完全符合需求的集群。

`start-druid` 脚本取代了现有的 `start-micro-quickstart` 和 `start-nano-quickstart` 配置文件。这些配置文件可能会在未来的版本中被移除。更多信息请参见[单服务器部署](https://druid.apache.org/docs/latest/operations/single-server.html)。

## 字符串字典压缩（实验性）

新增对前编码字符串字典的支持，用于较小的字符串列，从而在大多数 Druid 查询中仅以较小的性能损失减少段大小。

可以通过设置 `IndexSpec.stringDictionaryEncoding` 为 `{"type":"frontCoded", "bucketSize": 4}` 来启用，其中 `bucketSize` 是小于或等于 128 的 2 的幂。设置此属性会指示索引任务使用指定桶大小的压缩字典写入段。

> 使用字符串字典压缩写入的任何段都无法被旧版本的 Druid 读取。

更多信息请参见[前编码](https://druid.apache.org/docs/latest/ingestion/ingestion-spec.html#front-coding)。

## Kubernetes 原生任务

Druid 现在可以使用 Kubernetes 启动和管理任务，消除了对中间管理器的需求。

要使用此功能，请在 Overlord 进程的扩展加载列表中启用 `druid-kubernetes-overlord-extensions`。

## Hadoop-3 兼容二进制文件

Druid 现在为 Hadoop-3 用户打包了一个专用的二进制文件，其中包含与 Hadoop-3 兼容的 jar 文件。如果您的 Druid 集群不使用 Hadoop-3，您可以继续使用经典的二进制文件。

# 多阶段查询 (MSQ) 任务引擎

## Docker 启用 MSQ

MSQ 任务查询引擎现在默认在 Docker 中启用。

## 查询历史记录

多阶段查询不再显示在查询历史记录对话框中。它们仍然可以在**最近的查询任务**面板中找到。

## CLUSTERED BY 列的限制

使用 MSQ 任务引擎摄取数据时，可以在 CLUSTERED BY 子句中传递的列数现在限制为 1500。

## 支持字符串字典压缩

MSQ 任务引擎支持字符串字典的前编码以实现更好的压缩。可以通过在查询上下文中将 `indexSpec` 设置为有效的 JSON 字符串来为 INSERT 或 REPLACE 语句启用此功能。

## Sketch 合并模式

工作者现在可以顺序或并行地收集用于生成分区边界的关键统计数据。在查询上下文中将 `clusterStatisticsMergeMode` 设置为 `PARALLEL`、`SEQUENTIAL` 或 `AUTO` 以使用相应的 sketch 合并模式。更多信息请参见[Sketch 合并模式](https://druid.apache.org/docs/latest/multi-stage-query/reference.html#sketch-merging-mode)。

## 性能和操作改进

- **错误消息**：对于某些类型的 MSQ 警告，现在将警告作为错误显示。
- **机密信息**：对于包含敏感密钥的 SQL 任务，Druid 现在通过正则表达式在日志记录时屏蔽密钥。
- **降采样精度**：MSQ 任务引擎现在在降采样数据时使用字节数而不是键数。
- **内存使用**：在确定分区边界时，MSQ 使用的内部 sketch 的堆内存占用现在限制为可用内存的 10% 或 300 MB，以较小者为准。之前的限制严格为 300 MB。
- **任务报告**：在工作者报告中添加了 `pendingTasks` 和 `runningTasks` 字段。有关相关的 Web 控制台更改，请参见[查询任务状态信息](#query-task-status-information)。

# 查询

## JDBC 的异步读取

通过在批量获取时间过长时返回空批次，防止 JDBC 在长查询时超时。使用异步模型并发运行结果获取与 JDBC 请求。

## 改进的 IN 过滤器值检查算法

为了适应由大型 IN 过滤器或作为 IN 过滤器推送的连接产生的大型值集，Druid 现在使用排序合并算法来合并较大值的集合和字典。

## 增强的查询上下文安全性

新增以下配置属性，以优化由 `druid.auth.authorizeQueryContextParams` 控制的查询上下文安全模型：

- `druid.auth.unsecuredContextKeys`：不需要安全检查的查询上下文键的 JSON 列表。
- `druid.auth.securedContextKeys`：需要安全检查的查询上下文键的 JSON 列表。

如果两者都设置，则 `unsecuredContextKeys` 作为 `securedContextKeys` 的例外。

## HTTP 响应头

SQL 查询的 HTTP 响应现在正确设置响应头，与本地查询相同。

# 指标

## 新指标

新增了以下指标。更多详细信息请参见[完整的 Druid 指标列表](https://druid.apache.org/docs/latest/operations/metrics.html)。

### 批量段分配

这些指标与[批量段分配](#25-operations-batch-allocation)相关。

| 指标 | 描述 | 维度 |
| --- | --- | --- |
| `task/action/batch/runTime` | 执行一批任务操作所花费的毫秒数。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskActionType=segmentAllocate` |
| `task/action/batch/queueTime` | 一批任务操作在队列中花费的毫秒数。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskActionType=segmentAllocate` |
| `task/action/batch/size` | 在发射期间执行的一批任务操作的数量。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskActionType=segmentAllocate` |
| `task/action/batch/attempts` | 单批任务操作的执行尝试次数。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskActionType=segmentAllocate` |
| `task/action/success/count` | 在发射期间成功执行的任务操作数量。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskId`，`taskType`，`taskActionType=segmentAllocate` |
| `task/action/failed/count` | 在发射期间失败的任务操作数量。目前仅为[批量 `segmentAllocate` 操作](#25-operations-batch-allocation)发出 | `dataSource`，`taskId`，`taskType`，`taskActionType=segmentAllocate` |
```