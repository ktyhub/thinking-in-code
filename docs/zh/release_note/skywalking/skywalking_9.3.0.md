# skywalking 9.3.0

#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意

**不要从此页面下载源代码。**  
**如果你想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。**

#### 指标关联

| 仪表盘 | 弹出追踪查询 |
| ------ | ------------ |
| ![image](https://user-images.githubusercontent.com/5441976/205303766-2753afe2-c6bf-40f3-b207-c4c1090c77b1.png) | ![image](https://user-images.githubusercontent.com/5441976/205303953-93e89424-e44b-4696-b823-1f1babe519e0.png) |

#### APISIX 仪表盘

![image](https://user-images.githubusercontent.com/5441976/205304384-303fbf58-06fb-4e62-81dc-730c60ecca7e.png)

#### 使用分片 MySQL 作为数据库

![image](https://user-images.githubusercontent.com/5441976/205304473-9a1adb99-643f-48d2-beea-814c6e3c5686.png)

#### 虚拟缓存性能

![image](https://user-images.githubusercontent.com/5441976/205304619-80a90451-511e-4f8d-be89-c709bd81b625.png)

#### 虚拟 MQ 性能

![image](https://user-images.githubusercontent.com/5441976/205305186-1f6496dd-7a11-40ef-851f-2087bff9676f.png)

#### 项目

- 提升 OAP Docker 镜像中嵌入的 `swctl` 版本。

#### OAP 服务器

- 为 impala JDBC Java 代理插件添加组件 ID(133)，为 impala 服务器添加组件 ID(134)。
- 在 H2SQLExecutor#getByIDs 中使用 prepareStatement（无功能变化）。
- 将 snakeyaml 升级到 1.32 以修复 CVE。
- 修复 `DurationUtils.convertToTimeBucket` 缺少日期格式验证。
- 增强 LAL 以支持将 LogData 转换为 DatabaseSlowStatement。
- **[重大变更]** 更改 LAL 脚本格式（添加层属性）。
- 适配 ElasticSearch 8.1+，从已移除的 API 迁移到推荐的 API。
- 支持监控 MySQL 慢 SQL。
- 支持分析缓存相关的跨度，以提供客户端缓存服务的指标和慢命令。
- 优化虚拟数据库，修复动态配置观察者在默认值为 null 时的 NPE。
- 移除物理索引存在性检查，仅保留模板存在性检查，以避免在 `no-init` 模式下无意义的 `retry wait`。
- 确保在 TTL 处理器中实例列表有序，以避免 TTL 计时器永远不运行。
- 支持监控 PostgreSQL 慢 SQL。
- **[重大变更]** 支持通过 [Shardingsphere-Proxy](https://shardingsphere.apache.org/document/current/en/overview/#shardingsphere-proxy) 分片 MySQL 数据库实例和表。SQL-Database 需要在 OAP 启动前移除 `log_tag/segment_tag/zipkin_query` 表，如果从之前的版本升级。
- 修复在降采样时 `avgHistogram`、`avgHistogramPercentile`、`avgLabeled`、`sumHistogram` 数据冲突的问题。
- 强制对 `readLabeledMetricsValues` 结果进行排序，以防存储（数据库）返回的数据与参数列表不一致。
- 修复 Kubernetes 观察者中的错误观察语义，导致某些 Kubernetes 集群对 API 服务器产生大量流量。我们应该使用 `Get State and Start at Most Recent` 语义而不是 `Start at Exact`，因为我们不需要更改历史事件，参见 [https://kubernetes.io/docs/reference/using-api/api-concepts/#semantics-for-watch](https://kubernetes.io/docs/reference/using-api/api-concepts/#semantics-for-watch)。
- 统一查询服务和 DAO 代码的时间范围条件为 `Duration`。
- **[重大变更]** 移除 prometheus-fetcher 插件，请使用 OpenTelemetry 抓取 Prometheus 指标并设置 SkyWalking OpenTelemetry 接收器。
- Bug 修复：发送到 MAL 的直方图指标应被视为 OpenTelemetry 风格，而不是 Prometheus 风格：
  ```plaintext
  (-infinity, explicit_bounds[i]] for i == 0
  (explicit_bounds[i-1], explicit_bounds[i]] for 0 < i < size(explicit_bounds)
  (explicit_bounds[i-1], +infinity) for i == size(explicit_bounds)
  ```
- 支持 Golang 运行时指标分析。
- 添加 APISIX 指标监控。
- 支持 skywalking-client-js 报告空的 `service version` 和 `page path`，将默认版本设置为 `latest`，默认页面路径设置为 `/`（根路径）。修复错误 `fetching data (/browser_app_page_pv0) : Can't split endpoint id into 2 parts`。
- **[重大变更]** 限制 trace/log/alarm 标签的 `key=value` 最大长度，将表 `log_tag/segment_tag/alarm_record_tag` 中的 `tags` 列、`zipkin_query` 表中的 `query` 列和 `tag_autocomplete` 表中的 `tag_value` 列的最大长度设置为 256。SQL-Database 需要在 OAP 启动前更改这些列的长度或移除这些表，如果从之前的版本升级。
- 优化分析任务的创建条件。
- 延迟加载 Kubernetes 元数据，并从事件驱动切换到轮询。之前我们设置观察者来监视 Kubernetes 元数据的变化，这在部署变化时非常完美，SkyWalking 可以实时响应变化。然而，当集群有很多事件（如在大型集群或某些特殊的 Kubernetes 引擎如 OpenShift 中），SkyWalking 发送的请求变得不可预测，即 SkyWalking 可能会向 Kubernetes API 服务器发送大量请求，导致 API 服务器负载过重。此 PR 从观察机制切换到轮询机制，SkyWalking 在指定的间隔内轮询元数据，因此发送到 API 服务器的请求是可预测的（每个 `interval` 大约 10 个请求，3 分钟），请求数量与集群的变化无关。然而，随着此更改，SkyWalking 无法及时响应集群变化，但延迟在我们的情况下是可以接受的。
- 优化 ProfileTaskCache 中任务的查询时间。
- 修复在警报内核中将指标放入错误窗口槽的问题。
- 支持 `sumPerMinLabeled` 在 `MAL` 中。
- 提升 jackson databind、snakeyaml、grpc 依赖项。
- 支持通过 Kafka 导出 `Trace` 和 `Log`。
- 添加模块提供者的新配置初始化机制。这是 ModuleManager 库内核级别的更改。
- **[重大变更]** 支持新的记录查询协议，将名为 `service_id` 的列重命名为 `entity_id` 以支持不同实体。请重新创建 `top_n_database_statement` 索引/表。
- 移除 JvmMetricsHandler（用于 Kafka 通道）中的不当自我观察指标。
- 当客户端取消流时，gRPC 流取消代码不会记录为错误。客户端在 pod 终止时取消流。
- **[重大变更]** 更改加载 MAL 规则的方式（支持模式）。
- 将 k8s 相关的 MAL 文件移动到 `/otel-rules/k8s`。
- **[重大变更]** 重构服务网格 protobuf 定义，并将 TCP 相关指标拆分为单独定义。
- 添加 `TCP{Service,ServiceInstance,ServiceRelation,ServiceInstanceRelation}` 源，并将 TCP 相关实体从原始 `Service,ServiceInstance,ServiceRelation,ServiceInstanceRelation` 中拆分出来。
- **[重大变更]** TCP 相关源名称已更改，TCP 相关源的字段已更改，请参阅最新的 `oal/tcp.oal` 文件。
- 当创建 ElasticSearch 索引失败时，如果索引已存在，不记录错误日志。
- 为本地追踪添加虚拟 MQ 分析。
- 支持 Python 运行时指标分析。
- 支持 `sampledTrace` 在 LAL 中。
- 支持在 LAL 脚本的同一层下具有不同名称的多个规则。
- （优化）减少 MAL（仅）指标流的缓冲区大小（队列）。将 L1 队列大小设置为 1/20，L2 队列大小设置为 1/2。
- 支持在集群模式下监控 MySQL/PostgreSQL。
- **[重大变更]** 迁移到 BanyanDB v0.2.0。
  - 采用新的 OR 逻辑运算符，
    1