# skywalking 9.1.0
```markdown
#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意

**不要从此页面下载源代码。**  
**如果你想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。**

#### eBPF 分析

![eBPF 分析](https://user-images.githubusercontent.com/5441976/172566434-6a22090b-d2bb-4012-91c1-b34dfcff13f7.png)

#### 按需 Pod 日志

![按需 Pod 日志](https://user-images.githubusercontent.com/5441976/172566534-6beaac1d-849e-4440-a313-cd8b2e026ebd.png)

#### 项目

- **[重要]** 移除 InfluxDB 1.x 和 Apache IoTDB 0.X 作为存储选项，详情请查看[这里](https://github.com/apache/skywalking/discussions/9059)。移除 converter-moshi 2.5.0、influx-java 2.15、iotdb java 0.12.5、thrift 0.14.1、moshi 1.5.0、msgpack 0.8.16 依赖。移除 InfluxDB 和 IoTDB 相关代码和 E2E 测试。
- 升级 OAP 依赖 zipkin 到 2.23.16，H2 到 2.1.212，Apache Freemarker 到 2.3.31，gRPC-java 1.46.0，netty 到 4.1.76。
- 升级 Webapp 依赖，spring-cloud-dependencies 到 2021.0.2，logback-classic 到 1.2.11。
- **[重要]** 添加 BanyanDB 存储实现。注意 BanyanDB 目前处于活跃开发中，不应在生产集群中使用。

#### OAP 服务器

- 为 `Apache ShenYu (incubating)` 添加组件定义（ID=127）。
- 修复 Zipkin 接收器：解码跨度错误，V9 缺少 `Layer`，生成服务和端点的时间桶错误。
- [重构] 将 SQLDatabase（H2/MySQL/PostgreSQL）、ElasticSearch 和 BanyanDB 特定配置移出列。
- 支持 BanyanDB 全局索引。日志和段记录实体声明此新功能。
- 移除模板列中的不必要分析器设置。许多是由于分析器的默认值添加的。
- 简化集群模式下的 Kafka Fetch 配置。
- **[重大变更]** 将 eBPF 分析任务更新到服务级别，请删除索引/表：`ebpf_profiling_task`，`process_traffic`。
- 修复事件无法将服务 ID 分成两部分的问题。
- 修复 OAP 自我观察指标 `GC Time` 计算。
- 将 `SW_QUERY_MAX_QUERY_COMPLEXITY` 默认值设置为 `1000`。
- 启用 Webapp 模块（用于 UI）压缩。
- **[重大变更]** 为事件添加层字段，不允许报告没有层的事件。
- 修复 ES 刷新线程在刷新计划任务抛出异常（如 ElasticSearch 刷新失败）时停止的问题。
- 修复 ES BulkProcessor 在 BatchProcessEsDAO 中被多次初始化并创建多个 ES 刷新计划任务的问题。
- HTTPServer 支持允许的 HTTP 方法的处理程序注册。
- **[关键]** 回滚[增强 DataCarrier#MultipleChannelsConsumer 以添加优先级](https://github.com/apache/skywalking/pull/8664)以避免消费问题。
- 修复使用 kafkaConsumerConfig 属性扩展配置时，由于覆盖顺序，某些配置（如 group.id）未生效的问题。
- 从 OAP 版本中移除构建时间。
- 添加 data-generator 模块以测试模式运行 OAP，生成模拟数据进行测试。
- 支持从 gRPC 协议接收 Kubernetes 进程。
- 修复 es 索引（TimeSeriesTable，例如 endpoint_traffic，alarm_record）即使在重新运行 init-mode 后也未创建的问题。此问题导致 OAP 服务器在停机超过一天后无法启动。
- 支持在日志查询中自动完成标签。
- **[重大变更]** 将所有配置 `**_JETTY_**` 替换为 `**_REST_**`。
- 在进程实体中添加支持 eBPF 分析字段。
- E2E：修复日志测试缺少验证 LAL 和指标。
- 增强内核级别的转换器机制，使 BanyanDB 原生功能更有效。
- 添加 TermsAggregation 属性 collect_mode 和 execution_hint。
- 为聚合和拓扑查询添加 "execution_hint": "map", "collect_mode": "breadth_first"，以提高 5-10 倍性能。
- 使用后清理滚动上下文。
- 支持在日志查询中自动完成标签。
- 增强 Deprecated MetricQuery(v1) getValues 查询到异步并发查询。
- 修复在 Kubernetes 环境中服务具有多个选择器时的 pod 匹配错误。
- VM 监控适配 `opentelemetry-collector` 0.50.0。
- 添加 Envoy 内部成本指标。
- 从 `ServiceInstance` 中移除 `Layer` 概念。
- 从 gRPC `onError` 回调中移除不必要的 `onCompleted`。
- 从 `Process` 中移除 `Layer` 概念。
- 更新以列出所有 eBPF 分析调度程序而不带持续时间。
- 存储（ElasticSearch）：添加搜索选项以容忍不存在的索引。
- 修复 `MQ` 具有错误的 `Layer` 类型的问题。
- 修复 NoneStream 模型具有错误的降采样（应为分钟，而不是秒）。
- SQL 数据库：提供 `@SQLDatabase.AdditionalEntity` 以支持从模型创建附加表。
- **[重大变更]** SQL 数据库：移除 SQL 数据库配置 `maxSizeOfArrayColumn` 和 `numOfSearchableValuesPerTag`。
- **[重大变更]** SQL 数据库：将 `Tags list` 从 `Segment`、`Logs`、`Alarms` 移动到它们的附加表。
- **[重大变更]** 从跟踪、日志、事件、浏览器日志和警报列表查询中移除 `total` 字段。
- 支持 `OFF_CPU` eBPF 分析。
- 修复 SumAggregationBuilder#build 应使用 SumAggregation 而不是 MaxAggregation。
- 添加 TiDB、OpenSearch、Postgres 存储选项到 Trace 和 eBPF 分析 E2E 测试。
- 添加 OFF CPU eBPF 分析 E2E 测试。
- 修复 searchableTag 为 `rpc.status_code` 和 `http.status_code`。`status_code` 已被移除。
- 修复滚动查询失败异常。
- 在 Elasticsearch 存储中添加 `profileDataQueryBatchSize` 配置。
- 添加按需查询 Pod 日志的 API。
- 移除 OAL 事件。
- 简化 ES 存储中的格式索引名称逻辑。
- 在 MAL 中添加实例属性提取器。
- 支持 Zipkin 跟踪收集和 Zipkin 跟踪查询 API。
- **[重大变更]** Zipkin 接收器机制更改，跟踪不再流入 OAP 段。

#### UI

- 通用服务实例：将 `Thread Pool` 从 JVM 移到概览，修复 `JVM GC Count` 计算。
- 添加 Apache ShenYu（孵化中）组件 LOGO。
- 在仪表板上的服务/实例/端点列表中显示更多指标。
- 支持在服务/列表/端点表小部件上显示指标的平均值，并带有弹出线性图。
- 修复 viewLogs 按钮查询无数据。
- 修复页面加载时的 UTC。
- 在仪表板上实现 eBPF 分析小部件。
- 优化跟踪小部件。
- 避免无效的拓扑指标查询。
- 添加警报和日志标签提示。
- 修复跨度详情和任务日志。
- 验证查询参数以避免无效查询。
- 移动终端适配。
- 修复：为 Tab 小部件设置下拉菜单，初始化实例/端点关系选择器，更新桑基图。
- 在通用服务、服务网格和 Kubernetes 选项卡中添加 eBPF 分析小部件。
- 修复跳转到端点关系仪表板模板。
- 修复设置图表选项。
- 从实例和进程中移除 `Layer` 字段。
- 修复设置小时为 `0` 时日期时间选择器显示。
- 为跟踪和日志实现标签自动完成。
- 支持火焰图的多棵树。
- 修复 URL 更改时页面不需要重新渲染。
- 移除导出仪表板时的意外