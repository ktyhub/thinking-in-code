---
title: "druid druid-33.0.0"
project: "druid"
repo: "apache/druid"
tag: "druid-33.0.0"
published: "2025-04-29"
type: "release"
lang: "zh"
summary: "Apache Druid 33.0.0 包含超过 190 个新功能、错误修复、性能增强、文档改进以及来自 44 位贡献者的额外测试覆盖范围。"
---

# druid druid-33.0.0

<!--
  ~ 已获得 Apache Software Foundation (ASF) 的许可
  ~ 或更多贡献者许可协议。  请参阅通知文件
  ~ 与本作品一起分发以获取更多信息
  〜关于版权所有权。  ASF 许可该文件
  ~ 根据 Apache 许可证，版本 2.0（
  〜“许可证”）；除非符合规定，否则您不得使用此文件
  〜与许可证。  您可以在以下位置获取许可证副本：
  ～
  ~http://www.apache.org/licenses/LICENSE-2.0
  ～
  ~ 除非适用法律要求或书面同意，
  ~ 根据许可证分发的软件分布在
  ~ “按原样”基础，无任何保证或条件
  ~ 善良，无论是明示的还是暗示的。  请参阅许可证
  ~ 管理权限和限制的特定语言
  ~ 根据许可证。
  -->

<!--将 {{DRUIDVERSION}} 替换为正确的 Druid 版本。-->

Apache Druid 33.0.0 包含超过 190 个新功能、错误修复、性能增强、文档改进以及来自 44 位贡献者的额外测试覆盖范围。

<!--
将 {{MILESTONE}} 替换为正确的里程碑编号。例如：https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A28.0+sort%3Aupdated-desc+
-->

请参阅[完整的更改](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A33.0.0+sort%3Aupdated-desc+) 了解更多详细信息，包括错误修复。

在升级到 Druid 33.0.0 之前，请查看[升级说明](#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes)。
如果您要跨多个版本进行升级，请参阅[升级说明](https://druid.apache.org/docs/33.0.0/release-info/upgrade-notes/)页面，其中列出了最新 Druid 版本的升级说明。

<!-- 
该文件是一个协作正在进行的工作。将 release note 添加到此文件并不能保证它在下一个版本中存在，直到发布分支被切断并且 release note 被最终确定。

该文件包含以下部分：
- 重要功能、更改和弃用
- 功能区域及相关变更
- 升级说明和不兼容的更改

请将您的 release note 添加到相应部分并包含以下内容：
- 详细标题
- 针对 Druid 用户的更改摘要（几句话）
- 相关 PR 链接

如果您的 release note 包含图像，请将图像放入release-info/assets 文件夹中。

有关如何编写良好的 release note 的提示，请参阅 [Release notes](https://github.com/apache/druid/blob/master/CONTRIBUTING.md#release-notes)。
-->

## <a name="33.0.0-important-features%2C-changes%2C-and-deprecations" href="#33.0.0-important-features%2C-changes%2C-and-deprecations">#</a> 重要功能、更改和弃用

本节包含有关新功能和现有功能的重要信息。

### <a name="33.0.0-important-features%2C-changes%2C-and-deprecations-increase-segment-load-speed" href="#33.0.0-important-features%2C-changes%2C-and-deprecations-increase-segment-load-speed">#</a> 提高分段加载速度

现在，您可以通过为协调器动态配置 `turboLoadingNodes` 提供服务器列表来提高历史记录上加载段的速度。对于这些服务器，协调器忽略 `druid.coordinator.loadqueuepeon.http.batchSize` 并使用相应的 `numLoadingThreads` 的值。请注意，将历史数据置于涡轮加载模式可能会影响查询性能，因为段加载线程将使用更多资源。

[#17775](https://github.com/apache/druid/pull/17775)

### <a name="33.0.0-important-features%2C-changes%2C-and-deprecations-overlord-apis-for-compaction-%28experimental%29" href="#33.0.0-important-features%2C-changes%2C-and-deprecations-overlord-apis-for-compaction-%28experimental%29">#</a> Overlord APIs 用于压缩（实验）
您可以使用以下 Overlord 压缩 API 来管理压缩状态和配置。无论是否启用压实管理器，这些 API 都能无缝工作。

有关详细信息，请参阅[压缩 APIs](#33.0.0-functional-area-and-related-changes-data-management-compaction-apis)

[#17834](https://github.com/apache/druid/pull/17834)

### <a name="33.0.0-important-features%2C-changes%2C-and-deprecations-scheduled-batch-ingestion-%28experimental%29" href="#33.0.0-important-features%2C-changes%2C-and-deprecations-scheduled-batch-ingestion-%28experimental%29">#</a> 计划批量摄取（实验性）

现在，您可以使用计划的批处理管理程序来安排 MSQ 任务引擎的批处理摄取。您可以通过将 `type` 字段设置为 `unix` 或 `quartz`，使用标准 Unix cron 语法或 Quartz cron 语法来指定计划。 Unix 还支持 `@daily` 等宏表达式。

将您的主管规范提交到 `/druid/v2/sql/task/` 端点。

以下示例计划批量管理规范每 5 分钟提交一次 REPLACE 查询：

```json
{
    "type": "scheduled_batch",
    "schedulerConfig": {
        "type": "unix",
        "schedule": "*/5 * * * *"
    },
    "spec": {
        "query": "REPLACE INTO foo OVERWRITE ALL SELECT * FROM bar PARTITIONED BY DAY"
    },
    "suspended": false
}
```

[#17353](https://github.com/apache/druid/pull/17353)

### <a name="33.0.0-important-features%2C-changes%2C-and-deprecations-improved-s3-upload-" href="#33.0.0-important-features%2C-changes%2C-and-deprecations-improved-s3-upload-">#</a> 改进了 S3 上传 

Druid 现在可以使用 AWS S3 Transfer Manager 进行 S3 上传，这可以显着减少分段上传时间。该功能默认开启，并通过 `common.runtime.properties` 中的以下配置进行控制： 

```
    druid.storage.transfer.useTransferManager=true
    druid.storage.transfer.minimumUploadPartSize=20971520
    druid.storage.transfer.multipartUploadThreshold=20971520
```

[#17674](https://github.com/apache/druid/pull/17674)

## <a name="33.0.0-functional-area-and-related-changes" href="#33.0.0-functional-area-and-related-changes">#</a> 功能区域及相关变更

本节包含按区域分隔的详细 release note。

### <a name="33.0.0-functional-area-and-related-changes-web-console" href="#33.0.0-functional-area-and-related-changes-web-console">#</a> Web 控制台

#### <a name="33.0.0-functional-area-and-related-changes-web-console-merge-into" href="#33.0.0-functional-area-and-related-changes-web-console-merge-into">#</a> 合并到

MERGE INTO 关键字现在在 Web 控制台中突出显示，并且查询被视为插入查询。 

[#17679](https://github.com/apache/druid/pull/17679)

#### <a name="33.0.0-functional-area-and-related-changes-web-console-other-web-console-improvements" href="#33.0.0-functional-area-and-related-changes-web-console-other-web-console-improvements">#</a> 其他 Web 控制台改进

- 添加了在表过滤器中进行多项选择的功能，并向任务和主管以及服务类型的 **状态** 字段添加了建议 [#17765](https://github.com/apache/druid/pull/17765)
- 探索视图现在支持时区 [#17650](https://github.com/apache/druid/pull/17650)
- 从 Web 控制台导出的数据现在已标准化为 Druid 导出数据的方式。此外，您现在可以将结果导出为 Markdown 表 [#17845](https://github.com/apache/druid/pull/17845)


### <a name="33.0.0-functional-area-and-related-changes-ingestion" href="#33.0.0-functional-area-and-related-changes-ingestion">#</a> 摄取

#### <a name="33.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion" href="#33.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion">#</a> 基于 SQL 的摄取

##### <a name="33.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion-other-sql-based-ingestion-improvements" href="#33.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion-other-sql-based-ingestion-improvements">#</a> 其他基于 SQL 的摄取改进

#### <a name="33.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion" href="#33.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion">#</a> 流式传输

#### <a name="33.0.0-functional-area-and-related-changes-ingestion-query-parameter-for-restarts" href="#33.0.0-functional-area-and-related-changes-ingestion-query-parameter-for-restarts">#</a> 重启查询参数

您现在可以对 `/druid/indexer/v1/supervisor` 端点使用名为 `skipRestartIfUnmodified` 的可选查询参数。如果规格不变，您可以将 `skipRestartIfUnmodified=true` 设置为不重新启动 Supervisor。

例如：

```bash
curl -X POST --header "Content-Type: application/json" -d @supervisor.json localhost:8888/druid/indexer/v1/supervisor?skipRestartIfUnmodified=true
```

[#17707](https://github.com/apache/druid/pull/17707)

##### <a name="33.0.0-functional-area-and-related-changes-ingestion-query-parameter-for-restarts-other-streaming-ingestion-improvements" href="#33.0.0-functional-area-and-related-changes-ingestion-query-parameter-for-restarts-other-streaming-ingestion-improvements">#</a> 其他流媒体摄取改进

- 通过从内存中获取活动任务来提高流式摄取的效率。这减少了对活动数据源任务负载的元数据存储的调用次数 [#16098](https://github.com/apache/druid/pull/16098)

### <a name="33.0.0-functional-area-and-related-changes-querying" href="#33.0.0-functional-area-and-related-changes-querying">#</a> 查询

#### <a name="33.0.0-functional-area-and-related-changes-querying-improved-the-query-results-api-" href="#33.0.0-functional-area-and-related-changes-querying-improved-the-query-results-api-">#</a> 改进了查询结果 API
查询结果 API (`GET /druid/v2/sql/statements/{queryId}/results`) 现在支持可选的 `filename` 参数。提供后，响应会指示 Web 浏览器将结果保存为文件，而不是内联显示它们（通过 `Content-Disposition` 标头）。

[#17840](https://github.com/apache/druid/pull/17840)

#### <a name="33.0.0-functional-area-and-related-changes-querying-group-by-and-order-by-for-nulls" href="#33.0.0-functional-area-and-related-changes-querying-group-by-and-order-by-for-nulls">#</a> 用于空值的 GROUP BY 和 ORDER BY

SQL 查询现在支持空类型的 GROUP BY 和 ORDER BY。

[#16252](https://github.com/apache/druid/pull/16252)

#### <a name="33.0.0-functional-area-and-related-changes-querying-other-querying-improvements" href="#33.0.0-functional-area-and-related-changes-querying-other-querying-improvements">#</a> 其他查询改进

- 包含带有大量参数的函数（例如 CASE 语句）的查询现在运行速度更快 [#17613](https://github.com/apache/druid/pull/17613)

### <a name="33.0.0-functional-area-and-related-changes-cluster-management" href="#33.0.0-functional-area-and-related-changes-cluster-management">#</a> 集群管理

#### <a name="33.0.0-functional-area-and-related-changes-cluster-management-controller-task-management" href="#33.0.0-functional-area-and-related-changes-cluster-management-controller-task-management">#</a> 控制器任务管理

现在，您可以使用以下配置来控制可用于 MSQ 任务引擎控制器任务的任务槽数量：

|物业 |描述 |默认值 |
|--------|--------------|--------|
| `druid.indexer.queue.controllerTaskSlotRatio` | （可选）可分配给 MSQ 任务引擎控制器任务的可用任务槽的比例。这是一个介于 0 和 1 之间的浮点值 |空 |
| `druid.indexer.queue.maxControllerTaskSlots` | （可选）可以分配给控制器任务的最大任务槽数。这是一个整数值，定义可用于 MSQ 任务引擎控制器任务的任务槽数量的硬限制。 |空 |

[#16889](https://github.com/apache/druid/pull/16889)

#### <a name="33.0.0-functional-area-and-related-changes-cluster-management-other-cluster-management-improvements" href="#33.0.0-functional-area-and-related-changes-cluster-management-other-cluster-management-improvements">#</a> 其他集群管理改进

- 改进了权限问题的日志记录 [#17754](https://github.com/apache/druid/pull/17754)
- 改进了 `druid.broker.balancer.type` 设置为 `connectionCount` 时的查询分布 [#17764](https://github.com/apache/druid/pull/17764)

### <a name="33.0.0-functional-area-and-related-changes-data-management" href="#33.0.0-functional-area-and-related-changes-data-management">#</a> 数据管理

#### <a name="33.0.0-functional-area-and-related-changes-data-management-compaction-supervisors-%28experimental%29" href="#33.0.0-functional-area-and-related-changes-data-management-compaction-supervisors-%28experimental%29">#</a> 压实管理器（实验）

现在，您可以使用以下协调器压缩配置来配置压缩管理器：

- `useSupervisors` - 启用压缩作为霸主上的主管运行，而不是作为协调员职责
- `engine` - 在 `native` 和 `msq` 之间选择来运行压缩任务。 `msq` 设置使用 MSQ 任务引擎，并且仅当 `useSupervisors` 为 true 时才能使用。

之前，您使用了 Overlord 的运行时属性。对这些的支持已被删除。

[#17782](https://github.com/apache/druid/pull/17782)

#### <a name="33.0.0-functional-area-and-related-changes-data-management-compaction-apis" href="#33.0.0-functional-area-and-related-changes-data-management-compaction-apis">#</a> 压缩 APIs

您可以使用以下 Overlord API 来管理压缩：

|方法|路径|描述|所需权限|
|--------|------------------------------------------------------------------------|------------------------|--------------------|
|GET|`/druid/indexer/v1/compaction/config/cluster`|获取集群级压缩配置|读取配置|
|POST|`/druid/indexer/v1/compaction/config/cluster`|更新集群级压缩配置|写入配置|
|GET|`/druid/indexer/v1/compaction/config/datasources`|获取所有数据源的压缩配置|读取数据源|
|GET|`/druid/indexer/v1/compaction/config/datasources/{dataSource}`|获取单个数据源的compaction配置|读取数据源|
|POST|`/druid/indexer/v1/compaction/config/datasources/{dataSource}`|更新单个数据源的压缩配置|写入数据源|
|GET|`/druid/indexer/v1/compaction/config/datasources/{dataSource}/history`|获取单个数据源的压缩配置历史|读取数据源|
|GET|`/druid/indexer/v1/compaction/status/datasources`|获取所有数据源的压缩状态|读取数据源|
|GET|`/druid/indexer/v1/compaction/status/datasources/{dataSource}`|获取单个数据源的压缩状态|读取数据源|
#### <a name="faster-segment-metadata-operations" href="#faster-segment-metadata-operations">#</a> 更快的段元数据操作

使用运行时属性 `druid.manager.segments.useCache` 在 Overlord 上启用段元数据缓存。该功能默认关闭。  

您可以将该属性设置为以下值： 

- `never`：缓存已禁用（默认）
- `always`：读取始终从缓存中完成。服务启动将被阻止，直到缓存与元数据存储至少同步一次。事务将被阻塞，直到缓存在成为领导者后与元数据存储至少同步一次。 
- `ifSynced`：仅当缓存已与元数据存储同步时，才会从缓存中进行读取。与 `always` 设置不同，此模式不会阻止服务启动或事务。

作为此更改的一部分，引入了其他指标。有关这些指标的更多信息，请参阅[分段元数据缓存指标](#segment-metadata-cache-metrics)。

[#17653](https://github.com/apache/druid/pull/17653) [#17824](https://github.com/apache/druid/pull/17824)

#### <a name="33.0.0-functional-area-and-related-changes-data-management-automatic-kill-task-interval" href="#33.0.0-functional-area-and-related-changes-data-management-automatic-kill-task-interval">#</a> 自动杀死任务间隔

协调器可以选择发出终止任务来清理未使用的段。从此版本开始，默认情况下，单个终止任务仅限于处理 30 天或更少的段。这提高了单个终止任务的性能。

可以通过设置 `druid.coordinator.kill.maxInterval = P0D.` 来恢复之前的行为（每个终止任务的间隔没有限制）

[#17680](https://github.com/apache/druid/pull/17680)

#### <a name="33.0.0-functional-area-and-related-changes-data-management-other-data-management-improvements" href="#33.0.0-functional-area-and-related-changes-data-management-other-data-management-improvements">#</a> 其他数据管理改进

- 元数据查询现在返回 `maxIngestedEventTime`，这是数据源最新摄取事件的时间戳。对于实时数据源，如果使用 `queryGranularity`，则这可能晚于 `MAX(__time)`。对于非实时数据源，这相当于 `MAX(__time)` [#17686](https://github.com/apache/druid/pull/17686)
- 元数据终止查询现在更加高效。他们考虑自最后一个片段被杀死以来的最大结束时间[#17770](https://github.com/apache/druid/pull/17770)
- 新添加的段加载速度更快 [#17732](https://github.com/apache/druid/pull/17732)

### <a name="33.0.0-functional-area-and-related-changes-metrics-and-monitoring" href="#33.0.0-functional-area-and-related-changes-metrics-and-monitoring">#</a> 指标和监控

#### <a name="33.0.0-functional-area-and-related-changes-metrics-and-monitoring-custom-histogram-buckets-for-prometheus" href="#33.0.0-functional-area-and-related-changes-metrics-and-monitoring-custom-histogram-buckets-for-prometheus">#</a> Prometheus 的自定义直方图存储桶

现在，您可以使用 `histogramBuckets` 参数为来自 Prometheus 发射器的 `timer` 指标配置自定义直方图存储桶。 

如果未提供自定义存储桶，则使用以下默认存储桶：`[0.1, 0.25, 0.5, 0.75, 1.0, 2.5, 5.0, 7.5, 10.0, 30.0, 60.0, 120.0, 300.0]`。如果用户未指定自己的 JSON 文件，则使用默认映射。

[#17689](https://github.com/apache/druid/pull/17689)

#### <a name="segment-metadata-cache-metrics" href="#segment-metadata-cache-metrics">#</a> 分段元数据缓存指标

添加了以下指标：

作为段元数据缓存性能改进的一部分，引入了以下指标。

- `segment/metadataCache/sync/time`
- `segment/metadataCache/transactions/readOnly`
- `segment/metadataCache/transactions/writeOnly`
- `segment/metadataCache/transactions/readWrite`

有关段元数据缓存的更多信息，请参阅[更快的段元数据操作](#faster-segment-metadata-operations)。

[#17653](https://github.com/apache/druid/pull/17653)

#### <a name="33.0.0-functional-area-and-related-changes-metrics-and-monitoring-streaming-ingestion-lag-metrics" href="#33.0.0-functional-area-and-related-changes-metrics-and-monitoring-streaming-ingestion-lag-metrics">#</a> 流媒体摄取延迟指标

Kafka Supervisor 现在包含额外的延迟指标，用于衡量 Druid 数据落后了多少分钟：

|指标|描述|默认值|
|-|-|-|
|`ingest/kafka/updateOffsets/time`|从 Kafka 流和摄取任务获取最新偏移量所需的总时间（以毫秒为单位）。|`dataSource`、`taskId`、`taskType`、`groupId`、`tags`|通常最多几秒。|
|`ingest/kafka/lag/time`|所有分片中 Kafka 索引任务消耗的当前消息序列号与 Kafka 中的最新序列号之间的总延迟时间（以毫秒为单位）。该指标的最短发射周期为一分钟。仅当 `pusblishLagTime` 在 Supervisor 配置上设置为 true 时才启用。|`dataSource`、`stream`、`tags`|大于 0，最长为最大 kafka 保留期（以毫秒为单位）。 |
|`ingest/kafka/maxLag/time`|所有分片中 Kafka 索引任务消耗的当前消息序列号与 Kafka 中的最新序列号之间的最大延迟时间（以毫秒为单位）。该指标的最短发射周期为一分钟。仅当 `pusblishLagTime` 在 Supervisor 配置上设置为 true 时才启用。|`dataSource`、`stream`、`tags`|大于 0，最长为最大 kafka 保留期（以毫秒为单位）。 |
|`ingest/kafka/avgLag/time`|所有分片中 Kafka 索引任务消耗的当前消息序列号与 Kafka 中的最新序列号之间的平均延迟时间（以毫秒为单位）。该指标的最短发射周期为一分钟。仅当 `pusblishLagTime` 在主管配置上设置为 true 时才启用。|`dataSource`、`stream`、`tags`|大于 0，最长为最大 kafka 保留期（以毫秒为单位）。 |
|`ingest/kinesis/updateOffsets/time`|从 Kafka 流和摄取任务获取最新偏移量所需的总时间（以毫秒为单位）。|`dataSource`、`taskId`、`taskType`、`groupId`、`tags`|通常最多几秒。|

[#17735](https://github.com/apache/druid/pull/17735)

#### <a name="33.0.0-functional-area-and-related-changes-metrics-and-monitoring-other-metrics-and-monitoring-changes" href="#33.0.0-functional-area-and-related-changes-metrics-and-monitoring-other-metrics-and-monitoring-changes">#</a> 其他指标和监控变化

- 添加了 `ingest/processed/bytes` 指标，用于跟踪基于 JSON 的批处理、基于 SQL 的批处理和流式摄取任务的摄取任务期间处理的字节总数 [#17581](https://github.com/apache/druid/pull/17581)

### <a name="33.0.0-functional-area-and-related-changes-extensions" href="#33.0.0-functional-area-and-related-changes-extensions">#</a> 扩展

#### <a name="33.0.0-functional-area-and-related-changes-extensions-kubernetes-" href="#33.0.0-functional-area-and-related-changes-extensions-kubernetes-">#</a> Kubernetes 

- 现在，当使用 HDFS 作为深度存储进行无中间管理器摄取时，您可以摄取大于 128 KiB 的有效负载 [#17742](https://github.com/apache/druid/pull/17742)
- 您现在可以在与集群其他部分不同的命名空间中运行任务 Pod [#17738](https://github.com/apache/druid/pull/17738)
- 您现在可以使用 `druid.indexer.runner.k8sTaskPodNamePrefix` 命名 K8s 作业名称 [#17749](https://github.com/apache/druid/pull/17749)
- 日志记录级别现在设置为信息。以前，它被设置为调试 [#17752](https://github.com/apache/druid/pull/17752)
- Druid 现在支持 pod 模板的延迟加载，以便您所做的任何配置更改都可以更快地部署 [#17701](https://github.com/apache/druid/pull/17701)
- 删除了启动探针，以便 peon 任务可以正常启动而不会被 Kubernetes 杀死 [#17784](https://github.com/apache/druid/pull/17784)

### <a name="33.0.0-functional-area-and-related-changes-documentation-improvements" href="#33.0.0-functional-area-and-related-changes-documentation-improvements">#</a> 文档改进

## <a name="33.0.0-upgrade-notes-and-incompatible-changes" href="#33.0.0-upgrade-notes-and-incompatible-changes">#</a> 升级说明和不兼容的更改

### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes">#</a> 升级说明

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-%60usemaxmemoryestimates%60" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-%60usemaxmemoryestimates%60">#</a> `useMaxMemoryEstimates`

对于 MSQ 任务引擎任务，`useMaxMemoryEstimates` 现在设置为 false。此外，该属性已被弃用，并将在未来的版本中删除。将其设置为 false 可以更好地估计堆上内存。

[#17792](https://github.com/apache/druid/pull/17792)

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-automatic-kill-tasks-interval" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-automatic-kill-tasks-interval">#</a> 自动杀死任务间隔
自动终止任务现在限制为每个任务 30 天或更少的段。

可以通过设置 `druid.coordinator.kill.maxInterval = P0D` 来恢复以前的行为（每个终止任务的间隔没有限制）。

[#17680](https://github.com/apache/druid/pull/17680)

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-kubernetes-deployments" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-kubernetes-deployments">#</a> Kubernetes 部署

默认情况下，如果您在 Kubernetes 中运行 Druid，Docker 映像现在使用规范主机名在 ZooKeeper 中注册服务以进行内部通信。否则，它使用 IP 地址。 [#17697]（https://github.com/apache/druid/pull/17697）。 

您可以将环境变量 `DRUID_SET_HOST_IP` 设置为 `1` 以恢复旧行为。

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-updated-configs" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-updated-configs">#</a> 更新配置

各种配置在以前的版本中已被弃用，现在已被删除。下表列出了已删除的配置及其替换：

|删除配置 |更换配置|
|-|-|
|`druid.processing.merge.task.initialYieldNumRows `|`druid.processing.merge.initialYieldNumRows`|
|`druid.processing.merge.task.targetRunTimeMillis`|`druid.processing.merge.targetRunTimeMillis`|
|`druid.processing.merge.task.smallBatchNumRows`|`druid.processing.merge.smallBatchNumRows`|
|`druid.processing.merge.pool.awaitShutdownMillis`|
|`druid.processing.merge.awaitShutdownMillis`|
|`druid.processing.merge.pool.parallelism`|`druid.processing.merge.parallelism`|
|`druid.processing.merge.pool.defaultMaxQueryParallelism`|`druid.processing.merge.defaultMaxQueryParallelism`|

[#17776](https://github.com/apache/druid/pull/17776)

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-segment-metadata-cache-configs" href="#33.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-segment-metadata-cache-configs">#</a> 段元数据缓存配置

如果您需要降级到 Druid 不支持段元数据缓存的版本，则必须在升级之前将 `druid.manager.segments.useCache` 配置设置为 false 或将其删除。

此功能是在 Druid 33.0 中引入的。

[#17653](https://github.com/apache/druid/pull/17653)

### <a name="33.0.0-upgrade-notes-and-incompatible-changes-developer-notes" href="#33.0.0-upgrade-notes-and-incompatible-changes-developer-notes">#</a> 开发者说明

#### <a name="33.0.0-upgrade-notes-and-incompatible-changes-developer-notes-dependency-updates" href="#33.0.0-upgrade-notes-and-incompatible-changes-developer-notes-dependency-updates">#</a> 依赖项更新

- 添加了 `GraalJS` 以启用 Javascript 支持的选择器策略 [#17843](https://github.com/apache/druid/pull/17843)


以下依赖项的版本已更改：

- `netty4` 至版本 4.1.118 
- `async-http-client` 至版本 3.0.1 [#17646](https://github.com/apache/druid/pull/17646)
- `jetty` 至版本 9.4.57.v20241219 [#17879](https://github.com/apache/druid/pull/17879)
- `parquet-avro` 至版本 1.15.1 [#17874](https://github.com/apache/druid/pull/17874)




# <a name="33.0.0-credits" href="#33.0.0-credits">#</a> 制作人员
@317布莱恩
@abhishekrb19
@adarshsanjeev
@adithyachakilam
@aho135
@阿克沙特-贾恩
@akulabs8
@AmatyaAvadhanula
@applike-ss
@ashwintumma23
@capistrant
@cecemei
@chetanpatidar26
@clintropolis
@cmick
@cryptoe
@ektravel
@伊曼纽尔-费德曼
@findingrish
@弗兰克陈021
@georgew5656
@ginm
@GWphua
@infvg
@janjwerner-汇合
@jtuglu-netflix
@kfaraz
@kgyrtkirk
@lfrancke
@maytasm
@neha-ellur
@nozjkoitop
@omkenge
@pagrawal10
@彼得马沙利奥
@suraj-goel
@techdocsmith
@托马斯·杜福尔
@umisan
@沃吉维茨基
@vtlim
@weishiuntsai
@作家吉尔
@yurmix

---

> 📦 仓库：[apache/druid](https://github.com/apache/druid) · 🏷️ 版本：`druid-33.0.0` · 📅 发布：2025-04-29 · [查看英文原版 Release](https://github.com/apache/druid/releases/tag/druid-33.0.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
