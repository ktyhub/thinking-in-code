# skywalking 9.2.0

#### 下载
[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意事项
**请勿从此页面下载源代码。**  
如果您想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。

#### eBPF 网络性能分析针对 K8s Pod
![eBPF Network Profiling for K8s Pod](https://user-images.githubusercontent.com/5441976/187399382-907788dc-9c03-4a66-a560-07d28fd2de07.png)

#### 事件和指标关联
![Event and Metrics Association](https://user-images.githubusercontent.com/5441976/187399575-d716b172-ea96-4beb-9728-29138ff9dc52.png)

#### MySQL 服务器监控
![MySQL Server Monitoring](https://user-images.githubusercontent.com/5441976/187399685-3c430a65-641c-4e89-950b-596148c8256e.png)

#### PostgreSQL 服务器监控
![PostgreSQL Server Monitoring](https://user-images.githubusercontent.com/5441976/187399758-b020589e-7ef4-449c-b65f-f286ac389338.png)

#### 项目
- [关键] 修复了 ElasticSearch 存储实现中指标持久化的低性能问题。自 8.8.0 至 9.1.0 版本以来，单个指标可能不必要地等待 7~10 秒（系统环境变量 `SW_STORAGE_ES_FLUSH_INTERVAL`）。
- 升级 Armeria 至 1.16.0，Kubernetes Java 客户端至 15.0.1。

#### OAP 服务器
- 为 Zipkin 添加更多实体以提高性能。
- ElasticSearch：滚动时应更新滚动 ID，因为它可能会变化。
- Mesh：修复在 metadata-service-mapping.yaml 中定义多个规则时，只有最后一个规则生效的问题。
- 支持将告警消息发送到 PagerDuty。
- 支持 Zipkin kafka 收集器。
- 为网络性能分析的进程添加 `VIRTUAL` 检测类型。
- 为 Java Hutool 插件添加组件 ID(128)。
- 添加 Zipkin 查询异常处理器，对非法参数响应错误消息。
- 修复端点分析中的空指针异常，可能导致跟踪中缺少与 MQ 相关的 `LocalSpan`。
- 在 MAL 表达式中添加 `forEach`、`processRelation` 函数。
- 在 MAL 配置中添加 `expPrefix`、`initExp`。
- 为 Python Bottle 插件添加组件 ID(7015)。
- 移除遗留的 OAL `percentile` 函数，`p99`、`p95`、`p90`、`p75`、`p50` 函数。
- 撤销 [#8066](https://github.com/apache/skywalking/pull/8066)。即使是默认值，也保持所有指标的持久化。
- 如果文件夹为空或不存在，则跳过加载 UI 模板。
- 优化 ElasticSearch 查询性能，使用 `_mGet` 和物理索引名称而不是别名，在以下场景中：(a) 指标聚合 (b) Zipkin 查询 (c) 指标查询 (d) 日志查询
- 支持 eBPF Profiling 任务的 `NETWORK` 类型。
- 支持在 `MAL` 中使用 `sumHistogram`。
- [重大变更] 使 eBPF Profiling 任务支持到服务实例级别，升级前版本需要重新创建索引/表 `ebpf_profiling_task`。
- 修复 Banyandb 存储中的竞争条件。
- 支持在 `MAL` 中使用 `SUM_PER_MIN` 降采样。
- 支持在 `MAL` 中使用 `sumHistogramPercentile`。
- 为 Layer 添加 `VIRTUAL_CACHE`，以修复猜测的 Redis 服务器，其图标无法在拓扑上显示。
- [重大变更] Elasticsearch 存储合并所有指标/仪表和记录（无超级数据集）索引到一个物理索引模板 `metrics-all` 和 `records-all` 的默认设置上。提供系统环境变量（`SW_STORAGE_ES_LOGIC_SHARDING`）将指标/仪表索引分片为多个物理索引，如前几个版本（每个指标/仪表聚合函数一个索引模板）。在当前一个索引模式中，用户仍然可以选择调整 ElasticSearch 的分片数量（`SW_STORAGE_ES_INDEX_SHARDS_NUMBER`）以扩展。更多详情请参考 [9.2.0 中新的 ElasticSearch 存储选项解释](https://skywalking.apache.org/docs/main/next/en/faq/new-elasticsearch-storage-option-explanation-in-9.2.0/) 和 [后端存储文档](/apache/skywalking/blob/setup/backend/backend-storage.md)。
- [重大变更] 索引/表 `ebpf_profiling_schedule` 添加了新列 `ebpf_profiling_schedule_id`，H2/Mysql/Tidb/Postgres 存储用户在升级前版本时需要重新创建它。
- 修复 Zipkin 跟踪查询跨度的最大尺寸。
- 为网络性能分析添加 `tls` 和 `https` 组件 ID。
- 支持 Elasticsearch 列别名，以兼容存储逻辑分片模型和无逻辑分片模型之间的兼容性。
- 支持 MySQL 监控。
- 支持 PostgreSQL 监控。
- 修复当 Elasticsearch 存储 `SW_STORAGE_ES_QUERY_MAX_SIZE` > 10000 时，通过 serviceId 查询服务的错误。
- 支持将告警消息发送到 Discord。
- 修复查询历史进程数据失败。
- 优化 Elasticsearch 存储的 TTL 机制，在一个 TTL 旋转中跳过已执行的索引。
- 添加 Kubernetes 支持模块，以在模块之间共享代码并减少对 Kubernetes API 服务器的调用。
- 升级 Kubernetes Java 客户端以修复 cve。
- 适配 OpenTelemetry 原生指标协议。
- [重大变更] 将配置文件夹从 `otel-oc-rules` 重命名为 `otel-rules`。
- [重大变更] 将配置字段从 `enabledOcRules` 重命名为 `enabledOtelRules`，环境变量名从 `SW_OTEL_RECEIVER_ENABLED_OC_RULES` 重命名为 `SW_OTEL_RECEIVER_ENABLED_OTEL_RULES`。
- [重大变更] 修复 JDBC TTL 以删除额外表数据。SQL 数据库需要在 OAP 启动前移除 `segment`、`segment_tag`、`logs`、`logs_tag`、`alarms`、`alarms_tag`、`zipkin_span`、`zipkin_query`。
- SQL 数据库：添加 `@SQLDatabase.ExtraColumn4AdditionalEntity` 以支持从父表到附加表添加额外列。
- 为 Java Micronaut 插件添加组件 ID(131)。
- 为 Nats java 客户端插件添加组件 ID(132)。

#### UI
- 修复浏览器日志的查询条件。
- 实现一个 URL 参数以激活标签索引。
- 切换自动刷新至关闭时，修复清除间隔失败的问题。
- 优化日志表格。
- 修复日志详细弹出页面不工作的问题。
- 当没有设置指标时，优化表格小部件以隐藏整个指标列。
- 实现事件小部件。移除 `event` 菜单。
- 修复跨度详情文本重叠。
- 添加 Python Bottle 插件 Logo。
- 实现小部件（线形、条形、区域图）与时间的关联。
- 修复标签下拉样式。
- 当 db.statement 为空时，隐藏复制按钮。
- 修复拓扑图例