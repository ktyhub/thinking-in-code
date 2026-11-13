---
title: "druid druid-38.0.0"
description: "Apache Druid：高性能实时分析数据库。"
---

# druid druid-38.0.0

### druid 是什么

Apache Druid：高性能实时分析数据库。

### druid druid-38.0.0 版本更新了什么

<!--将 {{DRUIDVERSION}} 替换为正确的 Druid 版本。-->

Apache Druid 38.0.0 包含超过 250 个新功能、错误修复、性能增强、文档改进以及来自 37 个贡献者的额外测试覆盖范围。

<!--
将 {{MILESTONE}} 替换为正确的里程碑编号。例如：https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A28.0+sort%3Aupdated-desc+
-->

请参阅[完整的更改](https://github.com/apache/druid/milestone/68?closed=1) 了解更多详细信息，包括错误修复。

在升级到 Druid 38.0.0 之前，请查看[升级说明](#upgrade-notes) 和[不兼容更改](#inknown-changes)。
如果您要跨多个版本进行升级，请参阅[升级说明](upgrade-notes.md)页面，其中列出了最新 Druid 版本的升级说明。

<!-- 
该文件是一个协作正在进行的工作。向此文件添加发行说明并不能保证其在下一个版本中存在，直到发布分支被删除并且发行说明最终确定为止。

该文件包含以下部分：
- 重要功能、更改和弃用
- 功能区域及相关变更
- 升级说明和不兼容的更改

请将您的发行说明添加到相应的部分，并包含以下内容：
- 详细标题
- 针对 Druid 用户的更改摘要（几句话）
- 相关 PR 链接

如果您的发行说明包含图像，请将图像放入release-info/assets 文件夹中。

有关如何编写良好的发行说明的提示，请参阅[发行说明](https://github.com/apache/druid/blob/master/CONTRIBUTING.md#release-notes)。
-->

## 重要功能、更改和弃用

本节包含有关新功能和现有功能的重要信息。

#### Java

Druid 现在支持 Java 25。虽然仍然支持 Java 21，但我们建议您升级到 Java 25。

对 Java 17 的支持已被放弃。

[#19304](https://github.com/apache/druid/pull/19304) [#19336](https://github.com/apache/druid/pull/19336)

#### 历史层别名

您可以使用 `historicalTierAliases` 协调器动态配置将虚拟层名称映射到多个真实历史层。这会为一组历史层创建一个标识符。当加载/删除规则引用别名时，协调器会将其替换为实际层。例如，如果您将历史层 `hot_1` 和 `hot_2` 映射到别名 `hot`，则规则 `{"hot": 2}` 会将每个层的 2 个副本加载到 `hot_1` 和 `hot_2` 上。

[#19204](https://github.com/apache/druid/pull/19204) [#19667](https://github.com/apache/druid/pull/19667)

#### 实时分段模式查询上下文

`realtimeSegmentsOnly` 查询上下文参数已被弃用并替换为 `realtimeSegmentsMode`。 

您可以将 `realtimeSegmentsMode` 设置为以下之一：

- `include`（默认）：查询所有段，包括实时段
- `exclude`：跳过查询的实时段
- `exclusive`：仅查询实时段 

当执行蓝/绿部署之类的操作并且您只想查询新的历史副本自动缩放组而不触及任何“活动”节点（既不是实时节点也不是历史节点）时，这非常有用。

[#19486](https://github.com/apache/druid/pull/19486)

#### 更快的分段元数据搜索

您可以将 `druid.segment.timeline.fastIntervalSearch` 设置为 `true`，以便 Druid 使用基于区间树的索引将该元数据存储在内存中，以便更快地识别和检索。

该功能默认关闭。

[#19138](https://github.com/apache/druid/issues/19138) [#19850](https://github.com/apache/druid/issues/19850)

#### 在后台获取文件

MSQ 任务引擎现在支持工作人员从云存储异步获取输入文件。这使得下载与处理重叠，这通常会在读取大量文件时提高吞吐量。否则，工作人员在处理每个文件时直接从云存储中流式传输每个文件。

该功能默认开启，并由 `backgroundFetchExternalFiles` 设置控制。

[#19539](https://github.com/apache/druid/pull/19539)

#### Dart 的段预取
Dart 现在支持运行时属性 `druid.msq.dart.worker.segmentLoadAheadCount`，它控制 Dart 预取的段数。如果为工作人员设置大于 0，则此设置将成为该工作人员的默认 `segmentLoadAheadCount` 值。如果查询包含 `segmentLoadAheadCount` 查询上下文参数，则查询上下文优先。

[#19559](https://github.com/apache/druid/pull/19559)

#### 改进了 Web 控制台中的转换为 SQL

Web 控制台现在支持将流管理器转换为基于 SQL 的摄取查询。这使您可以更轻松地以一次性批量摄取的形式运行流任务。

从查询视图的 **...** 菜单中选择 **将 Supervisor 转换为 SQL** 选项。您可以从现有主管中进行选择，也可以为新主管提供 JSON。

[#19547](https://github.com/apache/druid/pull/19547)

#### 弃用旧版 ZSTD 框架

Druid 38 将是最后一个支持从旧版 v0.4-v0.7 ZSTD 帧读取的主要 Druid 版本。在未来的版本中，将删除对这些帧的批量和流式摄取的支持。

此弃用的主要原因是底层库 `zstd-jni` 删除了版本 1.5.7-13 及以后版本中对旧帧的解码。

## 功能区域及相关变更

本节包含按区域分隔的详细发行说明。

### 网络控制台

#### 其他 Web 控制台改进

- 在历史服务的 **服务** 视图中添加了以下状态详细信息：从另一个历史服务克隆、涡轮加载模式、退役模式 [#19253](https://github.com/apache/druid/pull/19253)
- 添加了对将 Supervisor 重置为最新偏移量和回填的支持 [#19533](https://github.com/apache/druid/pull/19533)
- 改进了新选项卡的处理 [#19483](https://github.com/apache/druid/pull/19483)
- 改进了主页视图的**服务**卡。现在，它会报告集群上的 Overlord、Coordinator、Router、Broker 和 Indexer 计数，其中 Web 控制台无需 SQL 访问即可与 Coordinator 进行对话 [#19481](https://github.com/apache/druid/pull/19481)  

### 摄入

* 现在，您可以在摄取时使用表达式聚合器来为折叠和组合表达式生成 LONG 或 DOUBLE [#19508](https://github.com/apache/druid/pull/19508)
* 添加了 `now()` 表达式函数，返回当前系统时间戳（自纪元以来的毫秒数）。在摄取时用于解决管道延迟问题（例如，`now() - __time`）。注意：`now()` 是不确定的，因为它对每一行进行计算，因此它可能会破坏幂等性。这可以添加到除 `__time` 之外的任何列 [#19386](https://github.com/apache/druid/pull/19386)
* 提高了从 S3 摄取时的弹性。 Druid 现在重试 `SSLException` 和暂时性凭证错误，而不是失败 [#19617](https://github.com/apache/druid/pull/19617) [#19558](https://github.com/apache/druid/pull/19558)
* 改进了 S3 性能 [#19394](https://github.com/apache/druid/pull/19394)
* 更新了默认的 S3 连接池大小，以便根据可用处理器的数量计算 [#19536](https://github.com/apache/druid/pull/19536)

#### 基于 SQL 的摄取

##### S3 的 EXTERN 现在支持角色 ARN

现在，您可以在运行 INSERT INTO EXTERN 查询时包含角色 ARN。例如：

```
INSERT INTO
EXTERN(
  s3(bucket => 'test2', prefix => 'export', assumeRoleArn => 'arn:aws:iam::00000:role/test-20260520'))
AS CSV
SELECT ...
```

[#19317](https://github.com/apache/druid/pull/19317)

##### 其他基于 SQL 的摄取改进

- 添加了存储计数器，用于记录写入本地和持久存储的字节和文件数量以及本地 `ByteTracker` 的状态。每个工作人员的存储计数器也已添加到 Web 控制台 [#19316](https://github.com/apache/druid/pull/19316)

#### 流媒体摄取

##### 缩放冷却

您现在可以配置不同的冷却持续时间来扩大和缩小流任务自动缩放器。

[#19286](https://github.com/apache/druid/pull/19286)

##### 改进了主管重新启动

Supervisor 不再因所有更改而重新启动。根据更改的类型，可能会发生以下情况之一：

- Druid 无需重启即可保留更新后的规范。
- Druid 重新启动 Supervisor，但正在运行的任务不受影响。
- Druid 重新启动 Supervisor 重新启动并终止其任务，这是此更改之前的默认行为。

例如，对主管规范的外观更改不再触发重新启动。

[#19700](https://github.com/apache/druid/pull/19700) [#19720](https://github.com/apache/druid/pull/19720)

此外，用于确定规范更改的算法也得到了改进。例如，如果启用了自动扩展，对 `ioConfig.taskCount` 的更改不会触发 Supervisor 重新启动。

[#19541](https://github.com/apache/druid/pull/19541)

######最新偏移和回填

对于 Kafka 和 RabbitMQ，您现在可以将监控程序重置为最新偏移量，并启动新的有界回填监控程序以从跳过的范围中摄取数据。对于操作 Druid 集群来说，这是一个有用的功能，其中最新数据是最重要的，例如警报场景。

请注意以下要求：

- 主管的 `useEarliestSequenceNumber` 属性必须是 `false`。
- 主管上下文必须将 `useConcurrentLocks` 设置为 `true`，以允许回填主管的任务与主主管的任务同时写入。
- Supervisor 必须处于 `RUNNING` 状态。

使用 `POST` `/druid/indexer/v1/supervisor/{supervisorId}/resetToLatestAndBackfill` 或 Web 控制台执行此操作。

[#19477](https://github.com/apache/druid/pull/19477)

##### 用于流式传输已发布片段的可修剪分片规范

Kafka 摄取现在可以发布 Broker 在查询时修剪的段，而无需等待压缩。将 `tuningConfig.streamingPartitionsSpec.partitionDimensions` 设置为中低基数维度的列表；每个任务记录
它观察到的每个维度的不同值并将其标记到新的 `dim_value_set` 分片规范上。根据声明的维度进行筛选的查询会跳过值不匹配的段。 

该功能是可选的，仅限 Kafka，并且由以下人员禁用
默认；未设置时，行为不变。

`dim_value_set` 是一种新的核心分片规格类型，没有后备功能，因此它不向前兼容。在启用 `streamingPartitionsSpec` 之前升级所有服务。 `dim_value_set` 段发布后，不支持降级
直到它们被压实或 `streamingPartitionsSpec` 被移除。

在 `streamingPartitionsSpec` 基础上添加了 `maxValuesPerDimension`（可选）。
  
[#19571](https://github.com/apache/druid/pull/19571) [#19596](https://github.com/apache/druid/pull/19596)

##### 其他流媒体摄取改进

- 在 `SeekableStreamSupervisorIOConfig` 中添加了一个名为 `boundedStreamConfig` 的属性，它允许操作员启动仅消耗指定偏移范围的 Supervisor [#19372](https://github.com/apache/druid/pull/19372)
- 改进了基于成本的自动缩放器以提高吞吐量[#19646](https://github.com/apache/druid/pull/19646)

### 查询

#### 新的查询通道策略

`weighted` 查询通道策略根据查询违反的阈值数量（段计数、间隔持续时间、数据期限、段范围）对查询进行评分，并将它们分配给具有不同容量限制的可配置分级通道，从而提供比现有二进制高/低策略更细致的通道分配。

加权查询通道策略支持可选的每阈值成本权重：

- `periodWeight`
- `durationWeight`
- `segmentCountWeight`
- `segmentRangeWeight`

这些阈值权重默认为 1。

[#19225](https://github.com/apache/druid/pull/19225) [#19665](https://github.com/apache/druid/pull/19665) [#19696](https://github.com/apache/druid/pull/19696)

#### 其他查询改进

- 将可为空的 `minTime/maxTime` 长字段添加到 `ProjectionMetadata` [#19398](https://github.com/apache/druid/pull/19398)
- 为 `LikeDimFilter` 添加了 `getDimensionRangeSet` 支持，以实现相等和前缀情况 [#19524](https://github.com/apache/druid/pull/19524)
- 添加了对具有集群段的聚合投影的支持 [#19599](https://github.com/apache/druid/pull/19599)
- 优化了 groupBy 查询聚合器的性能 [#19423](https://github.com/apache/druid/pull/19423)

### 集群管理

#### 改进的`diskNormalized`平衡器策略

`diskNormalized` 策略现在更加可调。  `utilizationThreshold` 配置的工作方式更加直观：增加阈值会增加策略的“容错性”，而降低阈值则会使节点的磁盘利用率更加接近。

[#19663](https://github.com/apache/druid/pull/19663)

#### MiddleManager 和 Indexer 重新启动
MiddleManager 和 Indexers 现在在重新启动后仍保留其启用或禁用状态。如果您更喜欢旧的行为，即服务器在重新启动后重新启用自身，请设置 `druid.worker.startAlwaysEnabled = true`。

[#19373](https://github.com/apache/druid/pull/19373)

#### Kafka 空闲信号

改进了 Kafka 基于成本的自动缩放器。 `poll-idle ratio`仅反映轮询所花费的时间，是否有空闲处理能力。您现在可以将自动缩放器配置为使用利用率： 

```
1 - (avgProcessingRate / maxObservedRate)
```

将 `useUtilizationRatio` 设置为 `true` 以使用此新比率进行自动缩放。 

[#19622](https://github.com/apache/druid/pull/19622)


#### 其他集群管理改进

- 将 `datasource` 过滤器下推添加到 `sys.segments` 表 [#19718](https://github.com/apache/druid/pull/19718) [#19731](https://github.com/apache/druid/pull/19731)
- 在 Supervisor POST 端点响应中添加了 `restarted` 布尔字段，以指示 Supervisor 是否实际重新启动 [#19349](https://github.com/apache/druid/pull/19349)
- 在 `sys.server_properties` 表中添加了 `error_message` 列，并使该表能够适应无法访问的服务器。以前，如果任何服务器无法访问，整个查询就会失败；现在返回一行，其中填充了 `error_message`。该表现在还支持过滤器和投影下推 [#19459](https://github.com/apache/druid/pull/19459)
- 添加了 `druid.expressions.useVectorApi` 配置以支持孵化 JDK Vector API。要使用 API，请将配置设置为 `true` 并使用 `--add-modules=jdk.incubator.vector` 标志启动 Druid [#19512](https://github.com/apache/druid/pull/19512)
- 如果设置了调试标志，则在 INFO 级别添加了投影的调试日志记录 [#19613](https://github.com/apache/druid/pull/19613)
- 当在上下文中设置 `debug` 时，MSQ 任务引擎现在会记录完整的堆栈跟踪 [#19361](https://github.com/apache/druid/pull/19361)
- 改进了基于成本的自动缩放器，使其能够缩减运行在理想空闲率之上且低延迟的超额配置管理程序 [#19562](https://github.com/apache/druid/pull/19562)
- 改进了 Druid 处理 Java 的方式。 MiddleManagers 现在荣誉 `JAVA_HOME` [#19709](https://github.com/apache/druid/pull/19709)

### 数据管理

#### 其他数据管理改进

* 改进了压实管理器规格的启动方式。他们不再尝试使用无效配置创建任务 [#19223](https://github.com/apache/druid/pull/19223)
* 更改了历史层，使其只能与一层别名相关联 [#19595](https://github.com/apache/druid/pull/19595)
* 加速段元数据缓存同步 [#19672](https://github.com/apache/druid/pull/19672)

### 指标和监控

#### 新的元数据缓存指标

为段元数据缓存添加了以下指标：

- `segment/metadataCache/unused/count`
- `segment/metadataCache/fetchIds/time`
- `segment/metadataCache/fetchPayloads/time`
- `segment/metadataCache/fetchPending/time`
- `segment/metadataCache/fetchSchemas/time`
- `segment/metadataCache/fetchIndexingStates/time`
- `segment/metadataCache/updateIds/time`
- `segment/metadataCache/updateSnapshot/time`
- `segment/metadataCache/schema/skipped`
- `segment/metadataCache/indexingState/added`
- `segment/metadataCache/indexingState/deleted`

[#19672](https://github.com/apache/druid/pull/19672)

#### 更改了基于成本的自动扩展的指标

删除了以下指标：

- `task/autoScaler/costBased/lagCost`
- `task/autoScaler/costBased/idleCost`

添加了以下指标：

- `task/autoScaler/costBased/avgProcessingRate`
- `task/autoScaler/costBased/avgPollIdleRatio`
- `task/autoScaler/costBased/lagWeight`
- `task/autoScaler/costBased/costWeight`

[#19631](https://github.com/apache/druid/pull/19631)

#### 身份验证指标

您现在可以配置 Druid 来发出授权事件的指标。

`auth/forbidden`和`auth/exception`指标有以下维度，支持安全事件的精准报警：

- `identity`
- `authorizerName`
- `resourceName`
- `resourceType`
- `action`
- `errorMessage`（如适用）


要启用此功能，请将 `druid.auth.emitAuthMetrics` 设置为 `true`。

[#19552](https://github.com/apache/druid/pull/19552)

#### 存储指标

现在，`storage/load/bytes` 和 `storage/virtual/load/bytes` 指标会在加载完成后进行测量。此前，他们测量了负载启动的时间。

此外，还推出了`storage/load/begin/bytes`和`storage/virtual/load/begin/bytes`，并具有`storage/load/bytes`和`storage/virtual/load/bytes`之前的功能。

`count` 指标也已更新以反映这一点。

[#19451](https://github.com/apache/druid/pull/19451)

#### 并发追加和替换

添加了以下实时摄取任务中并发追加和替换的指标：

- `ingest/segmentUpgrade/count`
- `ingest/segmentUpgrade/notified`
- `ingest/segmentUpgrade/unmatched`
- `ingest/segmentUpgrade/sendFailed`
- `ingest/segmentUpgrade/announced`
- `ingest/segmentUpgrade/skipped`

[#19651](https://github.com/apache/druid/pull/19651)

#### 其他指标和监控改进

* 添加了指标 `segment/allocated/count` 来跟踪分配的挂起段的 ID [#19674](https://github.com/apache/druid/pull/19674)
* 添加了用于 JDBC/Avatica 查询的 `remoteAddress` 维度到以下指标：`sqlQuery/time`、`sqlQuery/bytes` 和 `sqlQuery/planningTimeMs` [#19231](https://github.com/apache/druid/pull/19231)
* 在路由器的 `query/time` 指标上添加了 `identity` 维度 [#19342](https://github.com/apache/druid/pull/19342)
* 添加了`kafka/consumer/pollIdleRatio`，对应Kafka消费者`poll-idle-ratio-avg` [#19366](https://github.com/apache/druid/pull/19366)
* 将 `supervisorId` 添加到 Kafka 消费者指标 [#19525](https://github.com/apache/druid/pull/19525)
* 在一些分层指标中添加了 `tierAlias` 维度，从而更容易跨别名聚合以进行监控和警报 [#19595](https://github.com/apache/druid/pull/19595)
* 将 `query/segments/count` 指标添加到数据节点 [#19624](https://github.com/apache/druid/pull/19624)
* 添加了以下虚拟存储指标：`storage/virtual/read/count`、`storage/virtual/read/bytes`、`storage/virtual/read/time ` [#19632](https://github.com/apache/druid/pull/19632)
* 更改了 `query/node/{bytes/time}` 和背压指标，即使在数据节点查询失败时也会发出 [#19453](https://github.com/apache/druid/pull/19453)
* 改进了部分段加载的指标 [#19632](https://github.com/apache/druid/pull/19632)
* 改进了路由器日志记录，使其始终包含 `statusCode` 尺寸 [#19668](https://github.com/apache/druid/pull/19668)

### 扩展

#### 雷迪斯

您现在可以为 Redis 连接启用 TLS 支持。

[#19666](https://github.com/apache/druid/pull/19666)

#### `pac4j` OIDC认证

`druid-pac4j` OIDC 身份验证扩展的用户现在可以使用新的可选 `clientAuthenticationMethod` 参数显式配置其首选客户端身份验证方法。这解决了 `pac4j` `5.7.3` 引入的兼容性问题，其中在未配置非对称 JWT 方法时，宣传 `private_key_jwt` 的 OIDC 提供商会导致身份验证失败。

支持的值包括：`client_secret_basic`、`client_secret_post`、`client_secret_jwt`、`private_key_jwt` 和 `none`。如果未指定，`pac4j` 将继续使用其自动检测行为。

[#19020](https://github.com/apache/druid/pull/19020)

#### 库伯内特斯

- 为 k8s peons 添加了 `sys` 指标 [#19305](https://github.com/apache/druid/pull/19305)
- 添加了对跨多个 Kubernetes 集群运行 Kubernetes 索引任务的实验性支持。设置 `druid.indexer.runner.type=multik8s` 并配置 `druid.indexer.runner.clusters` 以从单个 Overlord 跨多个 Kubernetes 集群调度任务 [#19433](https://github.com/apache/druid/pull/19433)
- `jvm.config` ConfigMap 现在受到 Peons 的尊重 [#19364](https://github.com/apache/druid/pull/19364)
- 现在，您可以在任务上下文中设置 `podTemplateSelectionKey` 以选择特定的配置 Pod 模板（例如 `druid.indexer.runner.k8s.podTemplate.<selectionKey>`），而无需配置 `selectorBased` 策略。覆盖优先于默认策略和 `selectorBased` 策略。该功能由新的运行时属性 `druid.indexer.runner.allowTaskPodTemplateSelection` 控制，默认为 `false`。如果未配置指定模板，任务将无法启动。 [#19419](https://github.com/apache/druid/pull/19419)

#### T-摘要草图

现在，您可以使用 `druid.tdigest.maxCompression` 参数将最大可用压缩固定在 T-digest 运算符上以绑定资源。

[#19310](https://github.com/apache/druid/pull/19310)

#### 开放血统

添加了 `extensions-contrib/openlineage-emitter` 作为社区扩展。它使用 `RequestLogger` 转换谱系信息并将其发送到任何 OpenLineage 兼容的 API。

[#19107](https://github.com/apache/druid/pull/19107)

## 升级说明和不兼容的更改

### 升级注意事项

#### Java

Druid 现在支持 Java 25。虽然仍然支持 Java 21，但我们建议您升级到 Java 25。

对 Java 17 的支持已被放弃。

[#19304](https://github.com/apache/druid/pull/19304) [#19336](https://github.com/apache/druid/pull/19336)

#### `JAVA_HOME`

当 Druid 在启动期间使用捆绑的 `bin/run-java` 脚本时，它会遵循 `DRUID_JAVA_HOME`/`JAVA_HOME` 环境变量。否则，德鲁伊会在 `PATH` 上退回到 `java`。

[#19709](https://github.com/apache/druid/pull/19709)

#### 基于 ZooKeeper 的任务运行器

基于 ZooKeeper 的 `RemoteTaskRunner` (`druid.indexer.runner.type=remote`) 已被删除。自 Druid 25.0.0 以来，基于 HTTP 的 `httpRemote` 运行器一直是默认运行器，现在是唯一受支持的分布式任务运行器。 `local`（进程内）仍然支持单进程测试，并且 Kubernetes 扩展中的 `k8s` 运行程序不受影响。
如果您的配置设置为 `druid.indexer.runner.type=remote`，则启动失败。删除该属性或将其设置为 `httpRemote`（默认值）以继续。

以下配置属性不再被识别，应从 `common.runtime.properties` 中删除：

- `druid.indexer.runner.maxZnodeBytes`
- `druid.indexer.runner.taskShutdownLinkTimeout`
- `druid.indexer.runner.compressZnodes`
- `druid.zk.paths.indexer.base`
- `druid.zk.paths.indexer.announcementsPath`
- `druid.zk.paths.indexer.tasksPath`
- `druid.zk.paths.indexer.statusPath`

ZooKeeper 仍然用于 Coordinator/Overlord 领导者选举以及服务（节点）公告和发现。

[#19500](https://github.com/apache/druid/pull/19500)

#### 基于 ZooKeeper 的分段公告和发现已删除

基于 ZooKeeper 的分段公告和库存视图已被弃用并在多个版本中默认关闭，现已删除。基于 HTTP 的路径（`druid.serverview.type=http` 的默认路径）现在是唯一受支持的选项。

如果您的配置将 `druid.serverview.type` 设置为 `http` 以外的任何值，则启动现在会失败并显示明确的错误消息。删除该属性（或将其设置为 `http`，这是默认值）以继续。

以下配置属性不再被识别，应从 `common.runtime.properties` 中删除：

- `druid.announcer.segmentsPerNode`
- `druid.announcer.maxBytesPerNode`
- `druid.announcer.skipLoadSpec`
- `druid.announcer.skipDimensionsAndMetrics`
- `druid.announcer.skipSegmentAnnouncementOnZk`
- `druid.zk.paths.announcementsPath`
- `druid.zk.paths.liveSegmentsPath`
- `druid.zk.paths.propertiesPath`
- `druid.zk.paths.connectorPath`

ZooKeeper 仍然用于领导者选举、服务（节点）公告和发现以及 Overlord 到 MiddleManager 的任务管理。

[#19377](https://github.com/apache/druid/pull/19377)

#### 杰克逊更新

如果外部代码在同一参数上同时具有 `@JacksonInject` 和 `@JsonProperty`，并且依赖于提供时获胜的 JSON 值，请将显式 `useInput = OptBoolean.TRUE` 添加到注释中（或保留 Jackson `2.20.x`）。 Druid 本身的所有此类站点均已更新。

[#19528](https://github.com/apache/druid/pull/19528)

### 不兼容的更改

#### Java 17

对 Java 17 的支持已被放弃。 [#19304](https://github.com/apache/druid/pull/19304)

### 开发者笔记

* 将分片规范收集器更改为接口以使扩展性更容易 [#19744](https://github.com/apache/druid/pull/19744)
* 更改根 pom 中的 `iceberg.core.version` 并对齐嵌入式测试以使用 `1.10.0`
* 更新了 `druid-processing` 中的测试以使用 JUnit 5 [#19601](https://github.com/apache/druid/pull/19601)
* 更新了 `apache/druid` 和 `apache/druid-website-src` 存储库，以便在构建网站时使用 Docusaurus 3.10 [#19522](https://github.com/apache/druid/pull/19522)
* 更新了 IntelliJ 设置以匹配 Druid 支持的 Java 版本 [#19661](https://github.com/apache/druid/pull/19661)

#### 依赖项更新

以下依赖项的版本已更改：

* `org.apache.logging.log4j` 从 `2.25.4` 到 `2.26.0` [#19629](https://github.com/apache/druid/pull/19629)
* `com.fasterxml.jackson` 从 `2.21.3` 到 `2.21.4` [#19618](https://github.com/apache/druid/pull/19618)
* `io.netty` 从 `4.2.12.Final` 到 `4.2.15.Final` [#19566](https://github.com/apache/druid/pull/19566)
* `caffeine` 从 `2.9.3` 到 `3.2.4` [#19527](https://github.com/apache/druid/pull/19527)
* `errorprone` 从 `2.41.0` 到 `2.49.0` [#19527](https://github.com/apache/druid/pull/19527)
* `jackson` 从 `2.20.2` 到 `2.21.3` [#19528](https://github.com/apache/druid/pull/19528)
* `derby` 从 `10.14.2.0` 到 `10.17.1.0` [#19492](https://github.com/apache/druid/pull/19492)
* `postgres` 从 `42.7.2` 到 `42.7.11` [#19474](https://github.com/apache/druid/pull/19474)
* `org.bouncycastle` 从 `1.82` 到 `1.84` [#19473](https://github.com/apache/druid/pull/19473)
- Apache Kafka 客户端和代理依赖项从 `3.9.2` 到 `4.2.3` [#19441](https://github.com/apache/druid/pull/19441) [#19584](https://github.com/apache/druid/pull/19584)
- `axios` 从 1.15.0 到 1.15.2 [#19430](https://github.com/apache/druid/pull/19430)
- `pac4j` 从 `5.7.3` 到 `5.7.10` [#19388](https://github.com/apache/druid/pull/19388)
- `jose.jwt` 从 `9.37.2` 到 `9.37.3` [#19388](https://github.com/apache/druid/pull/19388)
- `log4j` 从 `2.25.3` 到 `2.25.4` [#19388](https://github.com/apache/druid/pull/19388)
- `RoaringBitmap` 从 `1.6.13` 到 `1.6.14` [#19688](https://github.com/apache/druid/pull/19688)

# 学分

@317布莱恩
@abhishekrb19
@adarshsanjeev
@Adithya-Shetty100
@aho135
@amaechler
@ashwintumma23
@avaamsel
@beenhead
@capistrant
@cecemei
@clintropolis
@cryptoe
@dependabot[机器人]
@dervoeti
@EdwinIngJ
@飞风格
@弗兰克陈021
@ginm
@github-actions[机器人]
@GWphua
@jaykanakiya
@jtuglu1
@JWuCines
@kfaraz
@LakshSingla
@maytasm
@mshahid6
@穆昆达卡塔
@林奇诺夫
@rmn7
@谢哈拉贾克
@沃吉维茨基
@vtlim
@温史密斯
@wlswo
@约曼兹

---

> 📦 仓库：[apache/druid](https://github.com/apache/druid) · 🏷️ 版本：`druid-38.0.0` · 📅 发布：2026-10-01 · [查看英文原版 Release](https://github.com/apache/druid/releases/tag/druid-38.0.0)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
