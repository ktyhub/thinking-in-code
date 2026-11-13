---
title: "druid druid-36.0.0"
description: "Apache Druid：高性能实时分析数据库。"
---

# druid druid-36.0.0

### druid 是什么

Apache Druid：高性能实时分析数据库。

### druid druid-36.0.0 版本更新了什么

<!--将 {{DRUIDVERSION}} 替换为正确的 Druid 版本。-->

Apache Druid 36.0.0 包含超过 189 个新功能、错误修复、性能增强、文档改进以及来自 34 个贡献者的额外测试覆盖范围。

<!--
将 {{MILESTONE}} 替换为正确的里程碑编号。例如：https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A28.0+sort%3Aupdated-desc+
-->

请参阅[完整的更改集](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A36.0.0+sort%3Aupdated-desc+) 了解更多详细信息，包括错误修复。

在升级到 Druid 36.0.0 之前，请查看[升级说明](#upgrade-notes)。
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

## 功能区域及相关变更

本节包含按区域分隔的详细发行说明。

#### 德鲁伊干员

Druid Operator 是一个 Kubernetes 控制器，用于管理 Druid 集群的生命周期。 Operator 通过可通过以下方式配置的自定义逻辑简化了 Druid 集群的管理
Kubernetes CRD。

[#18435](https://github.com/apache/druid/pull/18435)

#### 基于成本的流摄取自动缩放

Druid 现在支持基于成本的流式摄取自动缩放，通过平衡延迟减少和资源效率来优化任务计数。此自动缩放策略使用以下公式：

```
totalCost = lagWeight × lagRecoveryTime + idleWeight × idlenessCost
```

其中考虑了清除积压的时间和计算时间：

```
lagRecoveryTime = aggregateLag / (taskCount × avgProcessingRate) — time to clear backlog
idlenessCost = taskCount × taskDuration × predictedIdleRatio — wasted compute time
```

[#18819](https://github.com/apache/druid/pull/18819)

#### Kubernetes 客户端模式（实验）

在 `kubernetes-overlord-extensions` 中添加了实验性 Kubernetes 客户端模式。新模式使用`fabric8` `SharedInformers`来缓存k8s元数据。这大大减少了 Overlord 和 k8s 控制平面之间的 API 流量。您可以使用以下配置尝试此功能：

```
druid.indexer.runner.useK8sSharedInformers=true
```

[#18599](https://github.com/apache/druid/pull/18599)

#### cgroup v2 支持

现在支持 cgroup v2，并且所有 cgroup 指标现在都会发出 `cgroupversion` 来识别正在使用哪个版本。

如果检测到 v2，以下指标将自动切换到 v2：`CgroupCpuMonitor`、`CgroupCpuSetMonitor`、`CgroupDiskMonitor`、`MemoryMonitor`。如果检测到 v2，`CpuAcctDeltaMonitor` 会正常失败。

此外，`CgroupV2CpuMonitor` 现在还发射 `cgroup/cpu/shares` 和 `cgroup/cpu/cores_quota`。

[#18705](https://github.com/apache/druid/pull/18705)

#### Dart 查询报告

Dart 现在支持正在运行的查询和最近完成的查询的查询报告。可以从 `/druid/v2/sql/queries/<sqlQueryId>/reports` 端点获取报告。

响应的格式是一个带有两个键的 JSON 对象，“query”和“report”。 “query”键与现有 `/druid/v2/sql/queries` 端点提供的信息相同。 “报告”键是包括MSQ报告的报告图。

您可以使用以下配置控制报告的保留行为：

* `druid.msq.dart.controller.maxRetainedReportCount`：保留的报告的最大数量。默认值为 0，表示不保留报告
* `druid.msq.dart.controller.maxRetainedReportDuration`：报告以 ISO 8601 持续时间格式保留多长时间。默认为 `PT0S`，表示关闭基于时间的过期时间

[#18886](https://github.com/apache/druid/pull/18886)
#### 新的段格式

新版本 10 段格式在版本 9 的基础上进行了改进。默认情况下它处于关闭状态，并且与旧的段格式版本不兼容。

设置 `druid.indexer.task.buildV10=true` 以新格式制作段。

如果降级，则必须使用受支持的段格式版本重新索引数据。

您可以使用 `bin/dump-segment` 工具查看分段元数据。该工具输出序列化的 JSON。

[#18880](https://github.com/apache/druid/pull/18880) [#18901](https://github.com/apache/druid/pull/18901) 

### 网络控制台

#### Web 控制台中提供的新信息

Web 控制台现在包含有关可用处理器数量和总内存（以二进制字节为单位）的信息。

此信息也可通过 `sys.servers` 表获取。

[#18613](https://github.com/apache/druid/pull/18613)

#### 其他 Web 控制台改进

* 添加了对 MSQ 执行阶段不活动工作人员的跟踪 [#18768](https://github.com/apache/druid/pull/18768)
* 添加了 JSON 视图和舞台查看器的刷新按钮 [#18768](https://github.com/apache/druid/pull/18768)
* 现在可以在查询视图中定义 `ARRAY` 类型参数 [#18586](https://github.com/apache/druid/pull/18586)
* 更改系统表查询现在自动使用本机引擎 [#18857](https://github.com/apache/druid/pull/18857)
* 改进了时间图表以支持多种措施 [#18701](https://github.com/apache/druid/pull/18701)

### 摄入

* 添加了对 AWS `InternalError` 代码重试的支持 [#18720](https://github.com/apache/druid/pull/18720)
* 改进摄取，使其更有弹性。如果任务日志上传失败并出现异常，摄取任务不再失败 [#18748](https://github.com/apache/druid/pull/18748)
* 改进了 Druid 处理数据与预期类型不匹配的情况的方式 [#18878](https://github.com/apache/druid/pull/18878)
* 改进了 JSON 摄取，以便 Druid 可以直接从字典或索引结构计算 JSON 值，从而允许摄取完全跳过持久保存的原始 JSON 数据。这减少了磁盘存储大小 [#18589](https://github.com/apache/druid/pull/18589)
* 现在，您可以在嵌套列中的长/双精度字段的完全基于字典的索引和仅空索引之间进行选择[#18722](https://github.com/apache/druid/pull/18722)

#### 基于 SQL 的摄取

##### 额外的摄取配置

您现在可以使用以下配置来控制数据的获取和存储方式：

* `maxInputFilesPerWorker`：控制每个worker的输入文件或段的最大数量。
* `maxPartitions`：控制任何单个阶段的最大输出分区数，这会影响摄取期间生成的段数。

[#18826](https://github.com/apache/druid/pull/18826)

##### 其他基于 SQL 的摄取改进

* 添加 `maxRowsInMemory` 以替换 `rowsInMemory`。 `rowsInMemory` 现在充当提供该配置的替代方式，如果指定了 `maxRowsInMemory`，则该配置将被忽略。以前，仅存在 `rowsInMemory` [#18832](https://github.com/apache/druid/pull/18832)

#### 流媒体摄取

#####记录偏移量和分区

您现在可以使用 `KafkaInputFormat` 摄取记录偏移量 (`offsetColumnName`) 和分区 (`partitionColumnName`)。它们的默认名称分别为 `kafka.offset` 和 `kafka.partition`。

[#18757](https://github.com/apache/druid/pull/18757)

##### 其他流媒体摄取改进

* 改进了主管，使他们无法在主管停止时终止任务 [#18767](https://github.com/apache/druid/pull/18767)
* 改进了基于延迟的自动缩放器，用于流式传输 [#18745](https://github.com/apache/druid/pull/18745)
* 改进了 `SeekableStream` 管理程序自动缩放器，以等待任务完成后再尝试后续缩放操作。这有助于防止重复的主管历史记录条目 [#18715](https://github.com/apache/druid/pull/18715)

### 查询

#### 其他查询改进

* 改进了无效 `regex_exp` 查询的用户体验。现在返回错误 [#18762](https://github.com/apache/druid/pull/18762)

### 集群管理

#### 基于 Kubernetes 的部署的动态容量

Druid 现在可以动态调整任务运行程序的容量。

在对 `/druid/indexer/v1/k8s/taskrunner/executionconfig` 的 POST API 调用中包含 `capacity` 字段。以这种方式设置值会覆盖 `druid.indexer.runner.capacity`。

[#18591](https://github.com/apache/druid/pull/18591)

#### 服务器属性表
`sys.server_properties` 表公开了为每个 Druid 服务器配置的运行时属性。每行代表与特定服务器关联的单个属性键值对。

[#18692](https://github.com/apache/druid/pull/18692)

#### 其他集群管理改进

* 为 Overlord 添加了服务质量过滤，以便运行状况检查线程不会被阻塞 [#18033](https://github.com/apache/druid/pull/18033)

### 数据管理

#### 其他数据管理改进

* 添加了 `mostFragmentedFirst` 压缩策略，该策略优先考虑具有最小未压缩段的间隔 [#18802](https://github.com/apache/druid/pull/18802)
* 改进了段文件的删除方式，以防止在删除操作期间发生故障时保留部分段文件 [#18696](https://github.com/apache/druid/pull/18696)
* 改进了压缩，以便识别可以生成维度模式的多值维度 [#18760](https://github.com/apache/druid/pull/18760)
* 提高了拉动段时的可靠性 [#18821](https://github.com/apache/druid/pull/18821)

### 指标和监控

#### 任务指标

所有任务指标现在都会发出以下维度：`taskId`、`dataSource`、`taskType`、`groupId` 和 `id`。请注意，发出 `id` 是为了向后兼容。在未来的版本中，它将被删除，取而代之的是 `taskId` 尺寸。

[#18876](https://github.com/apache/druid/pull/18876)

#### 摄取指标

以下流式和批处理任务的指标现在发出实际值而不是 0：`ingest/merge/time`、`ingest/merge/cpu` 和 `ingest/persists/cpu`。

[#18866](https://github.com/apache/druid/pull/18866)

##### `statsd` 指标

以下指标已添加到 `statsd` 的默认列表中：

* `task/action/run/time`
* `task/status/queue/count`
* `task/status/updated/count`
* `ingest/handoff/time`

[#18846](https://github.com/apache/druid/pull/18846)

#### 其他指标和监控改进

* 在 `ingest/events/thrownAway` 公制基础上添加了 `reason` 尺寸。这可以提高对为什么某些事件在逻辑上被排除在摄取之外的可观察性 [#188855](https://github.com/apache/druid/pull/18855)
* 在启动或停止之前为阶段的所有处理程序添加了日志记录，这可以帮助您了解执行顺序 [#18662](https://github.com/apache/druid/pull/18662)
* 添加了新的 Jetty 线程池指标来捕获请求服务线程统计信息：`jetty/threadPool/utilized`、`jetty/threadPool/ready` 和 `jetty/threadPool/utilizationRate` [#18883](https://github.com/apache/druid/pull/18883)
* 在 `segments/max` 公制中添加了 `tier` 和 `priority` 尺寸 [#18890](https://github.com/apache/druid/pull/18890)
* 添加了 `GroupByStatsMonitor`，其中包括用于在 Peons 上发出的指标的 `dataSource` 和 `taskId` 维度 [#18711](https://github.com/apache/druid/pull/18711)
* 添加了 `task/waiting/time` 指标，该指标测量将任务放置到任务运行程序上进行调度和运行所需的时间 [#18735](https://github.com/apache/druid/pull/18735)
* 将 `supervisorId` 添加到流任务指标中，以帮助澄清多个主管将数据提取到单个数据源中的情况 [#18803](https://github.com/apache/druid/pull/18803)
* 在 `druid.monitoring.monitors` 中添加了 `StorageMonitor`，以通过段缓存测量存储和虚拟存储使用情况 [#18742](https://github.com/apache/druid/pull/18742)
* Druid 现在记录以下内容： 
  * 达到最大分散收集字节限制时收集的总字节数 [#18841](https://github.com/apache/druid/pull/18841)
  * `query/bytes` 指标，即使是失败的请求 [#18842](https://github.com/apache/druid/pull/18842)
* 更改了 Prometheus 发射器 TTL 跟踪以考虑所有标签值组合，而不仅仅是指标名称。未设置 TTL 时不会跟踪标签 [#18718](https://github.com/apache/druid/pull/18718) [#18689](https://github.com/apache/druid/pull/18689)
* 将生命周期 `stop()` 更改为在 `info` 级别记录以匹配 `start()` [#18640](https://github.com/apache/druid/pull/18640)
* 更改了指标发射的触发器，以便在任务完成时随时发射指标 [#18766](https://github.com/apache/druid/pull/18766) 


* 改进了指标发射器，使其发出所有任务完成情况的指标 [#18766](https://github.com/apache/druid/pull/18766)

### 扩展

#### SpectatorHistogram 扩展

* 添加了 `SPECTATOR_COUNT` 和 `SPECTATOR_PERCENTILE` SQL 函数 [#18885](https://github.com/apache/druid/pull/18885)
* 通过矢量化改进了 SpectatorHistogram 扩展的性能 [#18813](https://github.com/apache/druid/pull/18813)

## 升级说明和不兼容的更改

### 升级注意事项

#### MSQ 控制器任务
从 Druid 30 或更早版本升级时，MSQ `query_controller` 任务可能会在滚动更新期间失败，因为添加了与这些旧版本不向后兼容的新计数器。您可以在更新完成后重试任何失败的查询；或者，您可以在滚动更新期间需要运行的任何 MSQ 作业的查询上下文中将 `includeAllCounters` 设置为 `false`；或者您可以先升级到德鲁伊31-35，然后再升级到德鲁伊36。

[#18761](https://github.com/apache/druid/pull/18761)

#### 段格式 

Druid 36.0.0 支持段格式版本 10。以前版本的 Druid 不支持版本 10。如果降级，则必须使用支持的段格式版本重新索引数据。

[#18880](https://github.com/apache/druid/pull/18880)

#### 已弃用的指标

之前从 `JettyMonitor`、`OshiSysMonitor`、`JvmMonitor`、`JvmCpuMonitor`、`JvmThreadsMonitor` 和 `SysMonitor` 发出 `id` 维度来表示任务 ID 的 peons 上的监视器已被弃用，并将在未来版本中删除。请改用 `taskId` 尺寸。

[#18709](https://github.com/apache/druid/pull/18709)

#### 删除的指标

以下过时的指标已被删除：

* `segment/cost/raw` [#18846](https://github.com/apache/druid/pull/18846)
* `segment/cost/normalized` [#18846](https://github.com/apache/druid/pull/18846)
* `segment/cost/normalization` [#18846](https://github.com/apache/druid/pull/18846)
* `task/action/log/time` [#18649](https://github.com/apache/druid/pull/18649)

### 开发者笔记

#### 段文件接口

定义了新的 `SegmentFileBuilder` 和 `SegmentFileMapper` 接口来取代 `FileSmoosher` 和 `SmooshedFileMapper` 的直接使用，以抽象段构建和读取过程。

对于具有自定义列实现的扩展编写器来说，开发人员可见的主要变化是 `Serializer` 接口更改了 `writeTo` 方法：

* 现在接受 `SegmentFileBuilder` 而不是 `FileSmoosher`
* `ColumnBuilder` 方法 `getFileMapper` 现在返回 `SegmentFileMapper` 而不是 `SmooshedFileMapper`。 

不提供自定义列实现的扩展不应受到这些更改的影响。

[#18608](https://github.com/apache/druid/pull/18608)

#### 其他开发人员改进

* 添加了覆盖默认 Kafka 图像以进行测试的功能 [#18739](https://github.com/apache/druid/pull/18739)
* 将 `fastDecompressor` 更改为 `safeDecompressor` [#18930](https://github.com/apache/druid/pull/18930)
* 扩展现在可以提供查询工具包实现 [#18875](https://github.com/apache/druid/pull/18875)
* 删除了各个 `pom` 文件中的版本覆盖。有关完整列表，请参阅拉取请求 [#18708](https://github.com/apache/druid/pull/18708)

#### 依赖项更新

以下依赖项的版本已更改：

* `org.apache.logging.log4j:log4j-core` 从 `2.22.1` 到 `2.25.3` [#18874](https://github.com/apache/druid/pull/18874)
* `org.mozilla:rhino` 从 `1.7.14` 到 `1.7.14.1` [#18868](https://github.com/apache/druid/pull/18868)
* 用于 Oshi 显示器的 `net.java.dev.jna` 和 `net.java.dev.jna` 版本，从 `5.13.0` 到 `5.18.1` [#18848](https://github.com/apache/druid/pull/18848)
* `com.github.oshi:oshi-core from` 从 `6.4.4` 到 `6.9.1` [#18839](https://github.com/apache/druid/pull/18839)
* `bcpkix-jdk18on` 从 `1.78.1` 到 `1.79` [#18834](https://github.com/apache/druid/pull/18834)
* `org.eclipse.jetty` 从 `12.0.25` 到 `12.0.30` [#18773](https://github.com/apache/druid/pull/18773)
* `hamcrest` 从 `1.3` 到 `2.2` [#18708](https://github.com/apache/druid/pull/18708)
* `org.apache.commons:commons-lang3` 从 `3.18.0` 到 `3.19.0` [#18695](https://github.com/apache/druid/pull/18695)
* `org.apache.maven.plugins:maven-shade-plugin`从`3.5.0`到`3.6.1`
* `com.netflix.spectator` 从 `1.7.0` 到 `1.9.0` [#18887](https://github.com/apache/druid/pull/18887)
* `org.bouncycastle:bcpkix-jdk18on`从`1.79`到`1.81`以解决`SONATYPE-2025-001911`

# 学分

@317布莱恩
@abhishekrb19
@阿德海普辛格
@aho135
@阿克沙特-贾恩
@amaechler
@ashwintumma23
@capistrant
@cecemei
@clintropolis
@cryptoe
@dependabot[机器人]
@EdwinIngJ
@飞风格
@加布里埃尔CWT
@gargvishesh
@ginm
@GWphua
@hfukada
@因波诺马列夫
@jtuglu1
@keoliva
@kfaraz
@kgyrtkirk
@潘卡杰260100
@拉斯纳尔
@rohangarg
@赵诗阳
@泰莎IO
@廷努
@uds5501
@沃吉维茨基
@vtlim
@作家吉尔

---

> 📦 仓库：[apache/druid](https://github.com/apache/druid) · 🏷️ 版本：`druid-36.0.0` · 📅 发布：2026-02-09 · [查看英文原版 Release](https://github.com/apache/druid/releases/tag/druid-36.0.0)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
