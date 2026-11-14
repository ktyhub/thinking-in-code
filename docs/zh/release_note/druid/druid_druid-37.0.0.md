---
title: "druid druid-37.0.0"
description: "Apache Druid：高性能实时分析数据库。"
summary: "Apache Druid：高性能实时分析数据库。"
---

# druid druid-37.0.0

### druid 是什么

Apache Druid：高性能实时分析数据库。

### druid druid-37.0.0 版本更新了什么

Apache Druid 37.0.0 包含超过 255 个新功能、错误修复、性能增强、文档改进以及来自 29 个贡献者的额外测试覆盖范围。

请参阅[完整的更改集](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A37.0.0+sort%3Aupdated-desc+) 了解更多详细信息，包括错误修复。

在升级到 Druid 37.0.0 之前，请查看[升级说明](#upgrade-notes) 和[不兼容更改](#inknown-changes)。
如果您要跨多个版本进行升级，请参阅[升级说明](upgrade-notes.md)页面，其中列出了最新 Druid 版本的升级说明。

## 重要功能、更改和弃用

本节包含有关新功能和现有功能的重要信息。

### 基于 Hadoop 的摄取

对基于 Hadoop 的摄取的支持已被删除。该功能在 Druid 34 中已被弃用。

使用 Druid 支持的其他摄取方法之一，例如基于 SQL 的摄取或使用 Kubernetes 的无 MiddleManager 摄取。

[#19109](https://github.com/apache/druid/pull/19109)

### 查询黑名单

您现在可以使用代理 API (`/druid/coordinator/v1/config/broker`) 创建查询阻止列表，以按数据源、查询类型或查询上下文动态阻止查询。阻止列表无需重新启动 Druid 即可生效。阻止规则使用 `AND` 逻辑，这意味着所有条件都必须匹配。

以下示例阻止 `wikipedia` 数据源上的所有 groupBy 查询，查询上下文参数 `priority` 等于 `0`：

```
POST /druid/coordinator/v1/config/broker
  {
    "queryBlocklist": [
      {
        "ruleName": "block-wikipedia-groupbys",
        "dataSources": ["wikipedia"],
        "queryTypes": ["groupBy"],
        "contextMatches": {"priority": "0"}
      }
    ]
  }
```

[#19011](https://github.com/apache/druid/pull/19011)

### 基于 Overlord 的压缩的小型压缩（实验性）

现在，您可以配置次要压缩以仅压缩新摄取的段，同时升级现有压缩的段。当Druid升级Segment时，它会更新元数据，而不是使用资源再次压缩它。您可以使用本机压缩引擎或 MSQ 任务引擎。

使用 `mostFragmentedFirst` 压缩策略并为次要压缩设置基于行或基于字节的阈值百分比。

[#19059](https://github.com/apache/druid/pull/19059) [#19205](https://github.com/apache/druid/pull/19205) [#19016](https://github.com/apache/druid/pull/19016)

### 级联重建索引（实验性）

使用级联重新索引，您现在可以定义基于年龄的规则，以根据数据的年龄自动应用不同的压缩配置。标准自动压缩在整个数据源中应用单一平面配置，而级联重新索引可让您根据数据的特征定制压缩设置。

例如，您可以将最新数据保留在每小时分段中，同时在 90 天后自动滚动到每日分段以减少分段数量。您还可以分层基于年龄的行删除（例如从较旧的数据中删除机器人流量）、更改压缩设置或随着数据老化而转向使用更粗查询粒度的汇总。规则是在主管规范中内联定义的。

您必须将压缩管理程序与 MSQ 任务引擎结合使用才能使用级联重新索引。

[#18939](https://github.com/apache/druid/pull/18939) [#19213](https://github.com/apache/druid/pull/19213) [#19106](https://github.com/apache/druid/pull/19106) [#19078](https://github.com/apache/druid/pull/19078)

### 多主管摄取

多主管摄取现在已普遍可用。您可以运行多个流管理器来摄取同一数据源。

[#18983](https://github.com/apache/druid/pull/18983)

### 只读授权者

为 Druid 添加了 `ReadOnly` 授权者。这是Druid的第一个全球授权者。授权者对所有非 READ 操作实施全局限制，无论单个用户权限如何，都会拒绝这些操作。您可以使用此功能来确保特定授权者的所有用户都仅限于读取访问。

有一个已知的限制，即某些端点当前需要写入访问权限，尽管是只读的，例如 `GET /druid/indexer/v1/supervisor`。这些操作将会失败。

[#19243](https://github.com/apache/druid/pull/19243)

### Thrift 输入格式
作为 Thrift 贡献者扩展的一部分，Druid 现在支持使用 `InputFormat` 的 Kafka 和 Kinesis 流式摄取的 Thrift 编码数据。此前，Druid 通过解析器支持此功能，但已在 Druid 37 中删除。

[#19111](https://github.com/apache/druid/pull/19111)

要使用此功能，您必须将 `druid-thrift-extensions` 添加到扩展加载列表中。

### 增量缓存

增量段元数据缓存（`useIncrementalCache`）现已普遍可用，默认为`ifSynced`。 Druid 会阻止从缓存中读取数据，直到成为领导者后至少与元数据存储同步一次。

[#19252](https://github.com/apache/druid/pull/19252)

### 基于 Kubernetes 的任务管理

此扩展现已普遍可用。

[#19128](https://github.com/apache/druid/pull/19128)

### 动态默认查询上下文

您现在可以将默认查询上下文参数作为动态配置添加到代理中。这允许您覆盖运行时属性中设置的静态默认值，而无需重新启动部署或不必单独更新多个查询。 Druid 根据以下优先级应用查询上下文参数：

1. 查询包含的查询上下文
1.在Broker上设置为动态配置的查询上下文
1.运行时属性中设置的查询上下文参数
1. Druid 附带的默认设置

请注意，与其他 Broker 动态配置一样，这是尽力而为的。设置可能不适用于某些情况
情况，例如 Broker 最近启动但尚未收到配置，或者如果
经纪人无法联系协调员。如果查询上下文参数对于所有查询都至关重要，请在运行时属性中设置它。

[#19144](https://github.com/apache/druid/pull/19144)

### `sys.queries` 表（实验）

新的系统查询表提供有关使用 Dart 引擎的当前运行和最近完成的查询的信息。该表默认处于关闭状态。要启用该表，请设置以下内容：

```
druid.sql.planner.enableSysQueriesTable = true
```

作为此更改的一部分，`/druid/v2/sql/queries` API 现在支持显示最近完成的查询的 `includeComplete` 参数。

[#18923](https://github.com/apache/druid/pull/18923)

### 使用压实管理器进行自动压实

 使用压缩管理器的自动压缩已得到改进，现在普遍可用，并且是推荐的默认值。自动压缩任务现在以 `auto` 为前缀，而不是 `coordinator-issued`。

作为改进的一部分，压缩状态现在存储在一个中央位置，即一个新的 `indexingStates` 表中。各个段只需要存储其完全压缩状态的唯一引用（`indexing_state_fingerprint`）。

由于单个数据源中的许多段共享相同的底层压缩状态，因此这大大减少了自动压缩的元数据存储要求。

为了向后兼容，Druid 继续保留每个段中的详细压缩状态。此功能将在未来版本中删除。

您可以通过在集群压缩配置中将 `storeCompactionStatePerSegment` 设置为 `false` 来停止存储详细的压缩状态。如果您将其关闭并需要降级，Druid 需要重新压缩自您更改配置以来已压缩的所有段。

此更改对元数据存储和元数据缓存有升级影响。有关更多信息，请参阅[使用压缩管理器进行自动压缩的元数据存储](#metadata-storage-for-auto-compaction-with-compaction-supervisors)升级说明。

[#19113](https://github.com/apache/druid/pull/19113) [#18844](https://github.com/apache/druid/pull/18844) [#19252](https://github.com/apache/druid/pull/19252)

### 实时服务器的代理层选择

在代理上添加了 `druid.broker.realtime.select.tier` 和 `druid.broker.realtime.balancer.type`，可以选择覆盖代理的层选择和实时服务器的平衡器策略。如果未设置这些属性（默认设置），实时服务器将继续使用适用于历史服务器和实时服务器的现有 `druid.broker.select` 和 `druid.broker.balancer` 配置。
[#19062](https://github.com/apache/druid/pull/19062)

### Web 控制台中的手动代理路由

您现在可以配置路由器使用哪个代理来处理从 Web 控制台发出的查询。如果存在无法查看某些数据层的代理，并且您知道您正在查询仅在特定层上可用的数据，您可能需要执行此操作。

要指定 Broker，请将以下配置添加到 `web-console/console-config.js`：

```js
consoleBrokerService: 'druid/BROKER_NAME'
```

[#19069](https://github.com/apache/druid/pull/19069)

### 领事扩展

贡献者扩展 `druid-consul-extensions` 让 Druid 集群使用 Consul 进行服务发现和
协调员/霸主领导者选举而不是 ZooKeeper。该扩展支持 ACL、TLS/mTLS 和指标。 

在切换到Consul之前，需要设置
`druid.serverview.type=http` 和 `druid.indexer.runner.type=httpRemote` 簇宽。

[#18843](https://github.com/apache/druid/pull/18843)

## 功能区域及相关变更

本节包含按区域分隔的详细发行说明。

### 网络控制台

#### 更改存储列显示

对 Web 控制台中存储列的显示方式进行了以下改进：

- 改进了压缩配置视图 
- 将**当前尺寸**重命名为**指定尺寸**。
- 将**最大尺寸**重命名为**有效尺寸**。现在显示 `max_size` 和 `storage_size` 之间较小的值。最大尺寸仍显示为工具提示。
- 更改了使用计算以使用 `effective_size`

[#19007](https://github.com/apache/druid/pull/19007)

#### 其他 Web 控制台改进

- 将 `workerDesc` 添加到 `WorkerStats`，这使得更容易识别工作人员在哪里运行 [#19171](https://github.com/apache/druid/pull/19171)
- 将 Dart 唯一执行 ID (`dartQueryId`) 和 `sqlQueryId` 添加到 Web 控制台中的 **详细信息** 窗格 [#19185](https://github.com/apache/druid/pull/19185)
- 添加了对在 Web 控制台中显示已完成的 Dart 查询的支持 [#18940](https://github.com/apache/druid/pull/18940)
- 在 **服务** 页面添加了详细信息对话框 [#18960](https://github.com/apache/druid/pull/18960)
- 添加了图标来指示数据何时加载到虚拟存储中，包括显示数据的所有计数器的工具提示 [#19010](https://github.com/apache/druid/pull/19010)
- 添加了对 Dart 报告的支持 [#18897](https://github.com/apache/druid/pull/18897)
- 更改了活跃工作线程的标准：任何非零行、文件、字节、帧或挂起时间都足以视为活跃工作线程 [#19183](https://github.com/apache/druid/pull/19183)
- 更改了 **取消查询** 选项，以仅在查询处于已接受或正在运行状态时显示 [#19182](https://github.com/apache/druid/pull/19182)
- 更改了当前 Dart 查询面板的顺序，以按以下顺序显示查询：正在运行、已接受、然后已完成。 RUNNING 和 ACCEPTED 查询按最近的第一个进行排序（基于时间戳）。已完成的查询按完成时间排序 [#19237](https://github.com/apache/druid/pull/19237)

### 摄入

#### 截断字符串列

使用 `StringColumnFormatSpec` 配置设置您摄取的字符串维度列的最大长度：

- 对于特定尺寸：`dimensionSchema.columnFormatSpec.maxStringLength`
- 对于特定工作：`indexSpec.columnFormatSpec.maxStringLength`
- 集群范围：`druid.indexing.formats.maxStringLength`

Druid 截断任何超过指定长度的字符串。默认情况下不截断字符串值。 

[#19146](https://github.com/apache/druid/pull/19146) [#19258](https://github.com/apache/druid/pull/19258) (https://github.com/apache/druid/pull/19198)

#### 其他摄取改进

- 加快了 Overlord 上的任务调度 [#19199](https://github.com/apache/druid/pull/19199)

#### 基于 SQL 的摄取

##### 其他基于 SQL 的摄取改进

- 在执行基于 SQL 的摄取时添加了对虚拟存储结构的支持 [#18873](https://github.com/apache/druid/pull/18873)
- 添加了对 `StorageMonitor` 的支持，以便 MSQ 任务引擎任务始终发出 `taskId` 和 `groupId` [#19048](https://github.com/apache/druid/pull/19048)
- 改进了工人取消[#18931](https://github.com/apache/druid/pull/18931)
- 改进了异常处理 [#19234](https://github.com/apache/druid/pull/19234)

#### 流媒体摄取

##### 更改了自动缩放任务的启动方式

`taskCountMin` 和 `taskCountStart` 的行为已更改以进行自动缩放。 Druid 现在通过按以下顺序检查配置来计算要启动的初始任务数：`taskCountStart`（可选），然后 `taskCount`（在 `ioConfig` 中），然后 `taskCountMin`。
[#19091](https://github.com/apache/druid/pull/19091)

##### 改进的查询隔离

在流管理器规范（Kafka、Kinesis 和 Rabbit）中添加了 `serverPriorityToReplicas` 参数。这允许操作员跨不同服务器优先级分配任务副本以执行实时索引任务。与历史分层类似，这可以实现 Peons 上混合工作负载场景的查询隔离，从而允许某些任务副本处理特定优先级的查询。

[#19040](https://github.com/apache/druid/pull/19040)

##### 其他流媒体摄取改进

- 改进了高滞后场景中基于成本的自动缩放器性能 [#19045](https://github.com/apache/druid/pull/19045)
- 通过在 `TaskQueue` 上按优先级对调度请求进行排序，提高了实时任务调度的性能 [#19203](https://github.com/apache/druid/pull/19203)

### 查询

#### groupBy 查询配置

添加了新的 groupBy 查询配置属性 `druid.query.groupBy.maxSpillFileCount` 以限制每个查询创建的溢出文件的最大数量。当超出限制时，查询会失败并显示明确的错误消息，而不是导致历史节点在溢出文件合并期间耗尽内存。还可以使用查询上下文参数 `maxSpillFileCount` 覆盖每个查询的限制。

[#19141](https://github.com/apache/druid/pull/19141)

#### 改进了嵌套聚合的处理

Druid 现在可以合并两个聚合，并在它们之间进行投影。例如，以下查询：

```sql
SELECT
  hr,
  UPPER(t1.x) x,
  SUM(t1.cnt) cnt,
  MIN(t1.mn) mn,
  MAX(t1.mx) mx
FROM (
  SELECT
    floor(__time to hour) hr,
    dim2 x,
    COUNT(*) cnt,
    MIN(m1 * 5) mn,
    MAX(m1 + m2) mx
  FROM druid.foo
  WHERE dim2 IN ('abc', 'def', 'a', 'b', '')
  GROUP BY 1, 2
) t1
WHERE t1.x IN ('abc', 'foo', 'bar', 'a', '')
GROUP BY 1, 2
```

可以简化为：

```sql
SELECT
  FLOOR(__time TO hour) hr,
  UPPER(dim2) x,
  COUNT(*) cnt,
  MIN(m1 * 5) mn,
  MAX(m1 + m2) mx
FROM druid.foo
WHERE dim2 IN ('abc', 'a', '')
GROUP BY 1, 2
```

[#18498](https://github.com/apache/druid/pull/18498)

#### 其他查询改进

- 将 `durationMs` 添加到 Dart 查询报告 [#19169](https://github.com/apache/druid/pull/19169)
- 改进了错误处理，以便在列分析遇到错误时保留行签名列顺序 [#19162](https://github.com/apache/druid/pull/19162)
- 改进了 GROUP BY 性能 [#18952](https://github.com/apache/druid/pull/18952)
- 改进了表达式过滤器，以尽可能利用专门的虚拟列，从而提高查询性能 [#18965](https://github.com/apache/druid/pull/18965)

### 集群管理

#### 新经纪商等级选择策略

操作员现在可以配置两个新的 Broker `TierSelectorStrategy` 实现：

- `strict` - 仅选择优先级与配置列表匹配的服务器。配置示例：`druid.broker.select.tier=strict` 和 `druid.broker.select.tier.strict.priorities=[1]`。
- `pooled` - 跨配置的优先级汇集服务器并在其中进行选择，允许查询使用多个优先级来提高可用性。配置示例：`druid.broker.select.tier=pooled` 和 `druid.broker.select.tier.pooled.priorities=[2,1]`。

您还可以使用 `druid.broker.realtime.select.tier` 为实时服务器配置这些策略。

[#19094](https://github.com/apache/druid/pull/19094)

#### 德鲁伊干员

Druid 操作员现在驻留在自己的存储库中：[`apache/druid-operator`](https://github.com/apache/druid-operator)。

[#19156](https://github.com/apache/druid/pull/19156)

#### 基于成本的自动缩放算法

基于成本的自动缩放算法已更改：

- 当每个分区的滞后有意义时，更积极地扩展
- 根据滞后严重性和余量放宽每个任务的分区增加限制
- 在 `taskCountMax` 附近保持行为保守并避免负面的净空影响 

[#18936](https://github.com/apache/druid/pull/18936)

#### 其他集群管理改进

- 添加了用于服务健康状况的 `/status/ready` 端点，以便外部负载均衡器可以更好地处理正常关闭 [#19148](https://github.com/apache/druid/pull/19148)
- 添加了一个可配置选项，用于在任务运行时缩小基于成本的自动缩放器 [#18958](https://github.com/apache/druid/pull/18958)
- 在 `sys.servers` 中添加了 `storage_size`，以便在使用虚拟存储结构时检索历史记录的磁盘缓存大小 [#18979](https://github.com/apache/druid/pull/18979)
- 为基于成本的自动缩放器添加了新任务计数计算的日志 [#18929](https://github.com/apache/druid/pull/18929)
- 将缩放的计算方式从基于平方根的缩放公式更改为对数公式，该公式可以在低任务数和数百万延迟的情况下提供更好的紧急恢复[#18976](https://github.com/apache/druid/pull/18976)
- 提高了历史启动期间缓存段的加载速度 [#18489](https://github.com/apache/druid/pull/18489)
- 通过并行化缓冲区初始化来改进代理启动时间 [#19025](https://github.com/apache/druid/pull/19025)
- 改进了 MSQ 任务引擎工作故障的堆栈跟踪，以便保留它们 [#19049](https://github.com/apache/druid/pull/19049)
- 改进了基于成本的自动缩放器在加载滞后条件下的性能 [#18991](https://github.com/apache/druid/pull/18991)

### 数据管理

#### 每段超时配置

您现在可以使用动态配置为特定数据源中的段设置超时：

```
POST /druid/coordinator/v1/config/broker
  {
    "perSegmentTimeoutConfig": {
      "my_large_datasource": { "perSegmentTimeoutMs": 5000, "monitorOnly": false },
      "my_new_datasource": { "perSegmentTimeoutMs": 3000, "monitorOnly": true }
    }
  }
```

当不同的数据源具有不同的性能特征时，这非常有用 - 例如，允许更大的数据集更长的超时。

[#19221](https://github.com/apache/druid/pull/19221)

#### 耐用的存储清洁剂

持久存储清理器现在支持 MSQ 查询结果的可配置基于时间的保留。以前，查询结果会保留所有已知任务，这对于已完成的任务来说是不可靠的。通过此更改，查询结果将根据任务创建时间保留一段可配置的时间段。

新的配置属性 `druid.msq.intermediate.storage.cleaner.durationToRetain` 控制查询结果的保留期限。默认保留期限为 6 小时。

[#19074](https://github.com/apache/druid/pull/19074)

#### 其他数据管理改进

- 添加了 `druid.storage.transfer.asyncHttpClientType` 配置，指定用于 S3 传输的异步 HTTP 客户端：`crt` 用于 Amazon CRT 或 `netty` 用于 Netty NIO [#19249](https://github.com/apache/druid/pull/19249)
- 添加了自动清理 HDFS 存储上的中间文件的机制 [#19187](https://github.com/apache/druid/pull/19187)

### 指标和监控

#### `buildRevision` 字段

所有 Druid 指标现在都包含 `buildRevision` 字段，以帮助识别发出指标的 Druid 服务器的 Git 构建版本。您可以使用此信息来验证集群中的所有节点是否都在运行预期的版本。

[#19123](https://github.com/apache/druid/pull/19123)

#### 监控supervisor状态

在 `druid.monitoring.monitors` 中启用 `SupervisorStatsMonitor` 时添加了新的 `supervisor/count` 指标。该指标报告每个主管的状态，例如 Prometheus、StatsD 和其他指标系统的 `RUNNING` 或 `SUSPENDED`。

[#19114](https://github.com/apache/druid/pull/19114)

#### 改进的 `groupBy` 指标

`GroupByStatsMonitor` 现在提供以下指标：

- `mergeBuffer/bytesUsed` 
- `mergeBuffer/maxBytesUsed` 
- `mergeBuffer/maxAcquisitionTimeNs`
- `groupBy/maxSpilledBytes`
- `groupBy/maxMergeDictionarySize`

[#18731](https://github.com/apache/druid/pull/18731) [#18970](https://github.com/apache/druid/pull/18970) [#18934](https://github.com/apache/druid/pull/18934)

#### 过滤指标

操作员可以设置 `druid.emitter.logging.shouldFilterMetrics=true` 来限制日志记录发射器写入的指标。或者，他们可以将 `druid.emitter.logging.allowedMetricsPath` 设置为 JSON 对象文件，其中键是指标名称。缺少自定义文件会导致警告并使用捆绑的 `loggingEmitterAllowedMetrics.json`。警报和其他非指标事件始终会被记录。

[#19030](https://github.com/apache/druid/pull/19030) [#19359](https://github.com/apache/druid/pull/19359)

#### 新经纪商指标

添加了 `segment/schemaCache/rowSignature/changed` 和 `segment/schemaCache/rowSignature/column/count` 指标，以在代理初始化和更新每个数据源的段元数据缓存中的行签名时公开事件。

[#18966](https://github.com/apache/druid/pull/18966)

#### 其他指标和监控改进

- 在 Prometheus 的默认值中添加了以下指标：`mergeBuffer/bytesUsed` 和 `mergeBuffer/maxBytesUsed` [#19110](https://github.com/apache/druid/pull/19110)
- 为 `compact/task/count` 指标添加了压缩模式 [#19151](https://github.com/apache/druid/pull/19151)
- 添加了对记录和发出 SQL 动态参数值的支持 [#19067](https://github.com/apache/druid/pull/19067)
- 添加了 `ingest/rows/published`，所有任务类型都会发出该值来表示成功发布的段的总行数 [#19177](https://github.com/apache/druid/pull/19177)
- 添加了 `queries` 和 `totalQueries` 计数器，它们反映对实时服务器进行的查询以检索实时数据 [#19196](https://github.com/apache/druid/pull/19196)
- 为协调器添加了 `tier/storage/capacity` 指标。该指标保证反映在层中所有历史记录中配置的总 `StorageLocation` 大小 [#18962](https://github.com/apache/druid/pull/18962)
- 向 MSQ 任务引擎 `ChannelCounters` 添加了虚拟存储结构的新指标：`loadBytes`、`loadTime`、`loadWait` 和 `loadFiles` [#18971](https://github.com/apache/druid/pull/18971)
- 在 `StorageMonitor` 中添加了 `storage/virtual/hit/bytes`、`storage/virtual/hold/count` 和 `storage/virtual/hold/bytes` 公制
[#18895](https://github.com/apache/druid/pull/18895) [#19217](https://github.com/apache/druid/pull/19217)
- 将流任务的 `supervisorId` 维度添加到 `TaskCountStatsMonitor` [#18920](https://github.com/apache/druid/pull/18920)
- 将 `StorageMonitor` 更改为始终开启 [#19048](https://github.com/apache/druid/pull/19048)
- 改进了自动缩放器的指标，以便它们都发出相同的指标：`supervisorId`、`dataSource` 和 `stream` [#19097](https://github.com/apache/druid/pull/19097)

### 扩展

#### 库伯内特斯

在 `kubernetes-overlord-extensions` 中为 Vert.x HTTP 客户端添加了新的 `WebClientOptions` 直通。操作员现在可以使用 Druid 运行时属性在底层 Vert.x `WebClientOptions` 对象上配置任何属性。您可以配置的一些选项包括连接池大小、保持活动超时和空闲超时。这对于具有关闭空闲连接的中间负载均衡器的环境特别有用。大多数 Druid 部署不需要此配置。

[#19071](https://github.com/apache/druid/pull/19071)

#### gRPC 

现在，当客户端取消或断开连接时，gRPC 查询扩展会取消正在进行的查询。

[#19005](https://github.com/apache/druid/pull/19005)

#### 冰山 

##### GCS仓库

Iceberg 输入源现在支持 GCS 仓库。要使用此功能，除了 Iceberg 扩展之外，还必须加载 `druid-google-extensions` 扩展。
[#19137](https://github.com/apache/druid/pull/19137)

##### 过滤器

现在，您可以在使用 Iceberg 输入源时为非分区列配置残留过滤器。将 Iceberg 输入源中的 `residualFilterMode` 设置为以下之一：

- `ignore`：（默认）摄取带有警告日志的残留行，除非经过 `transformSpec` 过滤。
- `fail`：当检测到残留过滤器时，摄取作业失败。使用此选项可确保仅过滤目标分区列。

[#18953](https://github.com/apache/druid/pull/18953)

#### HDFS 存储

添加了对 `lz4` 压缩的支持。作为此更改的一部分，现在可以使用以下指标：

- `hdfs/pull/size`
- `hdfs/pull/duration`
- `hdfs/push/size`
- `hdfs/push/duration`

[#18982](https://github.com/apache/druid/pull/18982)

## 升级说明和不兼容的更改

### 升级注意事项

#### 基于 Hadoop 的摄取

对基于 Hadoop 的摄取的支持已被删除。该功能在 Druid 34 中已被弃用。

使用 Druid 支持的其他摄取方法之一，例如基于 SQL 的摄取或使用 Kubernetes 的无 MiddleManager 摄取。

[#19109](https://github.com/apache/druid/pull/19109)

#### AWS 开发工具包 v2

由于 SDK v1 已终止，Druid 现在使用 AWS SDK 版本 `2.40.0`。 

[#18891](https://github.com/apache/druid/pull/18891)

#### 默认情况下分段元数据缓存处于打开状态

从 Druid 37 开始，段元数据缓存默认开启。此功能允许代理缓存从协调器轮询的段元数据，而不必为针对 `sys.segments` 表的每个查询获取元数据。这提高了性能，但增加了代理的内存使用量。

`druid.sql.planner.metadataSegmentCacheEnable` 配置控制此功能。

[#19075](https://github.com/apache/druid/pull/19075)

#### 解析器更改

##### 流媒体摄取 `parser`

对于 Kafka 和 Kinesis 等流式摄取任务，已删除对已弃用的 `parser` 的支持。操作员现在必须在主管规范的 `ioConfig` 上指定 `inputSource`/`inputFormat`，并且 `dataSchema` 不得指定解析器。在升级到 Druid 37 或更高版本之前执行此操作。

[#19173](https://github.com/apache/druid/pull/19173) [#19166](https://github.com/apache/druid/pull/19166)

##### 删除了 `ParseSpec` 并弃用了解析器

用于本机批处理任务和流摄取索引服务的解析器已被删除。如果可能，请改用输入格式。请注意，`JavascriptParseSpec` 和 `JSONLowercaseParseSpec` 没有等效的 InputFormat。 

Druid 支持自定义文本数据格式，并且可以使用 Regex 输入格式来解析它们。但是，请注意这样做是为了
解析数据的效率低于编写本机 Java `InputFormat` 扩展或使用外部流处理器。我们欢迎新输入格式的贡献。

[#19239](https://github.com/apache/druid/pull/19239)


#### 从 0.23 版本之前的 Druid 版本滚动升级
您无法从 Druid 0.23 之前的版本执行滚动升级。

[#18961](https://github.com/apache/druid/pull/18961)

#### 使用压缩管理器进行自动压缩的元数据存储

监督者的自动压缩需要在 Overlord 上缓存增量段元数据和一个新的元数据存储表；如果您使用以下配置的默认设置，则无需执行任何操作：

- `druid.manager.segments.useIncrementalCache` 
- `druid.metadata.storage.connector.createTables`

如果`druid.manager.segments.useIncrementalCache`设置为`never`，请将其更新为`ifSynced`或`always`。有关配置的更多信息，请参阅[段元数据缓存](https://druid.apache.org/docs/latest/configuration/#segment-metadata-cache-experimental)。

如果将 `druid.metadata.storage.connector.createTables` 配置设置为 `false`，则需要手动更改段表并创建 `compactionStates` 表。下面提供了 Postgres DDL 作为指南：

```
-- create the indexing states lookup table and associated indices
CREATE TABLE druid_indexingStates (
    created_date VARCHAR(255) NOT NULL,
    datasource VARCHAR(255) NOT NULL,
    fingerprint VARCHAR(255) NOT NULL,
    payload BYTEA NOT NULL,
    used BOOLEAN NOT NULL,
    pending BOOLEAN NOT NULL,
    used_status_last_updated VARCHAR(255) NOT NULL,
    PRIMARY KEY (fingerprint),
  );

  CREATE INDEX idx_druid_compactionStates_used ON druid_compactionStates(used, used_status_last_updated);
```

```
-- modify druid_segments table to have a column for storing compaction state fingerprints
ALTER TABLE druid_segments ADD COLUMN indexing_state_fingerprint VARCHAR(255);
```

您可能必须调整语法以适应您的表命名前缀和元数据存储后端。

[#18844](https://github.com/apache/druid/pull/18844)

#### 段锁定

段锁定和 `NumberedOverwriteShardSpec` 已弃用，并将在未来版本中删除。请改用时间块锁定。您可以通过将 `druid.indexer.tasklock.forceTimeChunkLock` 设置为 `true`（这是默认值）来确保仅使用时间块锁定。

[#19050](https://github.com/apache/druid/pull/19050)

### 不兼容的更改

#### 删除了 `defaultProcessingRate` 配置

此配置允许在第一个指标可用之前开始扩展操作。 

[#19028](https://github.com/apache/druid/pull/19028)

#### 前置编码格式

如果启用，Druid 现在默认使用前端编码格式的 v1，而不是版本 0。版本 1 是在 Druid 26 中引入的。如果您在版本 0 中启用了前端编码，则降级到 26 之前的 Druid 版本或从该版本升级可能需要重新索引。

[#18984](https://github.com/apache/druid/pull/18984)

### 开发者笔记

- 将 `typecheck` 添加到 `npm run test-unit` 以确保在调用 `test-unit` 时进行 TypeScript 类型检查 [#19251](https://github.com/apache/druid/pull/19251)
- 为 `dependabot` 更新添加了 14 天的冷却时间，以防止尚未发现的回归和安全问题 [#19241](https://github.com/apache/druid/pull/19241)
- 添加了 `AGENTS.md` [#19084](https://github.com/apache/druid/pull/19084)
- 添加了使用[常规提交语法](https://www.conventionalcommits.org/en/v1.0.0/) [#19089](https://github.com/apache/druid/pull/19089) 的要求
- 将 `checkstyle` 从 `3.0.0` 更新为 `3.6.0` [#19064](https://github.com/apache/druid/pull/19064)

#### 依赖项更新

以下依赖项已更新：

- 添加了 `software.amazon.awssdk` 以支持 `WebIdentityTokenProvider` [#19178](https://github.com/apache/druid/pull/19178)
- `org.apache.iceberg` 从 `1.6.1` 到 `1.7.2` [#19172](https://github.com/apache/druid/pull/19172)
- `diff` 节点模块从 4.0.1 到 4.0.4 [#18933](https://github.com/apache/druid/pull/18933)
- `org.apache.avro` 从 1.11.4 到 1.11.5 [#19103](https://github.com/apache/druid/pull/19103)
- `bytebuddy` 从 `1.17.7` 到 `1.18.3` [#19000](https://github.com/apache/druid/pull/19000)
- `slf4j` 从 `2.0.16` 到 `2.0.17` [#18990](https://github.com/apache/druid/pull/18990)
- Apache Commons 编解码器从 `1.16.1` 到 `1.17.1` [#18990](https://github.com/apache/druid/pull/18990)
- `jacoco` 从 `0.8.12` 到 `0.8.14` [#18990](https://github.com/apache/druid/pull/18990)
- `docker-java-bom` 从 `3.6.0` 到 `3.7.0` [#18990](https://github.com/apache/druid/pull/18990)
- `assertj-core` 从 `3.24.2` 到 `3.27.7` [#18994](https://github.com/apache/druid/pull/18994)
- `maven-surefire-plugin` 从 `3.2.5` 到 `3.5.4` [#18847](https://github.com/apache/druid/pull/18847)
- `guice` 从 `5.1.0` 到 `6.0.0` [#18986](https://github.com/apache/druid/pull/18986)
- JDK 编译器从 11 到 17 [#18977](https://github.com/apache/druid/pull/18977)
- `vertx` 从 `4.5.14` 到 `4.5.24` [#18947](https://github.com/apache/druid/pull/18947)
- `fabric8` 从 `7.4.0` 到 `7.5.2` [#18947](https://github.com/apache/druid/pull/18947)
- `mockito` 从 `5.14.2` 到 `5.23` [#19145](https://github.com/apache/druid/pull/19145)
- `easymock` 从 `5.2.0` 到 `5.6.0` [#19145](https://github.com/apache/druid/pull/19145)
- `equalsverifier` 从 `3.15.8` 到 `4.4.1` [#19145](https://github.com/apache/druid/pull/19145)
- `bytebuddy` 从 `1.18.3` 到 `1.18.5` [#19145](https://github.com/apache/druid/pull/19145)
- 添加了 `objenesis` `3.5` [#19145](https://github.com/apache/druid/pull/19145)
- `org.apache.zookeeper` 从 3.8.4 到 3.8.6 [#19135](https://github.com/apache/druid/pull/19135)
- `com.lmax.disruptor` 从 `3.3.6` 到 `3.4.4` [#19122](https://github.com/apache/druid/pull/19122)
- `org.junit.junit-bom` 从 `5.13.3` 到 `5.14.3` [#19122](https://github.com/apache/druid/pull/19122)
- `io.fabric8:kubernetes-client` 7.5.2 → 7.6.0 [#19071](https://github.com/apache/druid/pull/19071)
- `io.kubernetes:client-java` 19.0.0 → 25.0.0-旧版 [#19071](https://github.com/apache/druid/pull/19071)
- `com.squareup.okhttp3:okhttp` 4.12.0 → 5.3.2 [#19071](https://github.com/apache/druid/pull/19071)
- `org.jetbrains.kotlin:kotlin-stdlib` 1.9.25 → 2.2.21 [#19071](https://github.com/apache/druid/pull/19071)
- `commons-codec:commons-codec` 1.17.1 → 1.20.0 [#19071](https://github.com/apache/druid/pull/19071)
- `org.apache.commons:commons-lang3` 3.19.0 → 3.20.0 [#19071](https://github.com/apache/druid/pull/19071)
- `com.google.code.gson:gson` 2.12.0 → 2.13.2 [#19071](https://github.com/apache/druid/pull/19071)
- `com.amazonaws:aws-java-sdk` 1.12.784 → 1.12.793 [#19071](https://github.com/apache/druid/pull/19071)
- `caffeine` 从 `2.8.0` 到 `2.9.3` [#19208](https://github.com/apache/druid/pull/19208)
- `commons-io` 从 `2.17.0` 到 `2.21.0` [#19208](https://github.com/apache/druid/pull/19208)
- `commons-collections4` 从 `4.2` 到 `4.5.0` [#19208](https://github.com/apache/druid/pull/19208)
- `commons-compress` 从 `1.27.0` 到 `1.28.0` [#19208](https://github.com/apache/druid/pull/19208)
- `zstd-jni` 从 `1.5.2-3` 到 `1.5.7-7` [#19208](https://github.com/apache/druid/pull/19208)
- `scala-library` 从 `2.12.7` 到 `2.13.16` [#19208](https://github.com/apache/druid/pull/19208)
- `iceberg` 从 `1.7.2` 到 `1.10.0` [#19232](https://github.com/apache/druid/pull/19232)
- `parquet` 从 `1.15.2` 到 `1.16.0` [#19232](https://github.com/apache/druid/pull/19232)
- `avro` 从 `1.11.5` 到 `1.12.0` [#19232](https://github.com/apache/druid/pull/19232)
- `jackson` 从 `2.19.2` 到 `2.20.2` [#19248](https://github.com/apache/druid/pull/19248)
- `netty4` 从 `4.2.6.Final` 到 `4.2.12.Final` [#19248](https://github.com/apache/druid/pull/19248)
- `errorprone` 从 `2.35.1` 到 `2.41.0` [#19248](https://github.com/apache/druid/pull/19248)
- `bcprov-jdk18on` / `bcpkix-jdk18on` 从 `1.81` 到 `1.82` [#19248](https://github.com/apache/druid/pull/19248)
- `RoaringBitmap` 从 `0.9.49` 到 `1.6.13` [#19248](https://github.com/apache/druid/pull/19248)
- `jedis` 从 `5.1.2` 到 `7.0.0` [#19248](https://github.com/apache/druid/pull/19248)
- `snakeyaml` 从 `2.4` 到 `2.5` [#19248](https://github.com/apache/druid/pull/19248)
- `aircompressor` 从 `0.21` 到 `2.0.2` [#19248](https://github.com/apache/druid/pull/19248)
- `reflections` 从 `0.9.12` 到 `0.10.2` [#19248](https://github.com/apache/druid/pull/19248)
- `httpclient5` 从 `5.5` 到 `5.5.1` [#19248](https://github.com/apache/druid/pull/19248)
- `jakarta.activation` 从 `1.2.2` 到 `2.0.1` [#19248](https://github.com/apache/druid/pull/19248)
- `netty-tcnative-boringssl-static` 从 `2.0.73.Final` 到 `2.0.75.Final` [#19248](https://github.com/apache/druid/pull/19248)
- `maven-compiler-plugin` 从 `3.11.0` 到 `3.14.1` [#19248](https://github.com/apache/druid/pull/19248)

# 学分
@317布莱恩
@abhishekrb19
@aho135
@阿克沙特-贾恩
@amaechler
@aruraghuwanshi
@ashwintumma23
@bsmithgall
@capistrant
@cecemei
@clintropolis
@飞风格
@弗兰克陈021
@ginm
@GWphua
@jaykanakiya
@jtuglu1
@kfaraz
@kgyrtkirk
@maytasm
@mshahid6
@puzpuzpuz
@razinbouzar
@santosh-d3vpl3x
@sarangv
@沃吉维茨基
@vtlim
@wuguowei1994
@zhan7236

---

> 📦 仓库：[apache/druid](https://github.com/apache/druid) · 🏷️ 版本：`druid-37.0.0` · 📅 发布：2026-05-08 · [查看英文原版 Release](https://github.com/apache/druid/releases/tag/druid-37.0.0)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
