# skywalking 9.5.0
```markdown
#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意

**不要从此页面下载源代码。  
如果你想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。**

#### 新拓扑布局

[![image](https://private-user-images.githubusercontent.com/5441976/245800104-34ca963d-43f7-437e-8836-1e93d3b779be.png)](https://private-user-images.githubusercontent.com/5441976/245800104-34ca963d-43f7-437e-8836-1e93d3b779be.png)

#### Elasticsearch 服务器监控

[![image](https://private-user-images.githubusercontent.com/5441976/245801094-9c363aad-9af7-4fe4-bda2-2011f0ba3383.png)](https://private-user-images.githubusercontent.com/5441976/245801094-9c363aad-9af7-4fe4-bda2-2011f0ba3383.png)

#### 项目

- 修复由于 `delombok` 目标导致的 `Duplicate class found` 问题。

#### OAP 服务器

- 修复 DynamoDB 监控中 `user error` 指标的错误层级。
- 在 OAP 运行于 `no-init` 模式时，ElasticSearch 存储不检查字段类型。
- 支持将 TLS 状态绑定为服务拓扑组件的一部分。
- 修复组件 ID 优先级错误。
- 修复由于存储层错误导致的拓扑组件 ID 重叠问题。
- [重大变更] 通过合并表和管理基于天的表滚动来增强 JDBC 存储。
- [重大变更] 移除 Sharding-MySQL 实现和测试，因为我们默认有基于天的滚动机制。
- 修复 otel k8s-cluster 规则添加命名空间维度用于 MAL 聚合计算（部署状态，部署规格副本）。
- 支持连续分析功能。
- 支持收集进程级别相关指标。
- 修复 K8sRetag 由于可能的命名空间不匹配从缓存中读取错误的 k8s 服务。
- [重大变更] 支持跨线程跟踪分析。数据结构和查询 API 已更改。
- 修复 PromQL HTTP API `/api/v1/labels` 响应缺少 `service` 标签。
- 修复初始化 `IntList` 时可能的 NPE。
- 支持解析 PromQL 表达式中括号内的空标签用于元数据查询。
- 支持告警指标操作 `!=`。
- 支持指标查询指示值是否等于 0 代表实际为零或无数据。
- 修复在 ElasticSearch 存储中查询不存在的系列索引时的 `NPE`。
- 支持在 VM 监控中收集内存缓冲区/缓存指标。
- PromQL：从查询结果中移除空值，修复 `/api/v1/metadata` 参数 `limit` 可能导致越界。
- 支持监控 k8s StatefulSet 和 DaemonSet 的总数指标。
- 支持 Amazon API Gateway 监控。
- 提升 graphql-java 以修复 cve。
- 提升 Kubernetes Java 客户端。
- 支持 Redis 监控。
- 为 amqp、amqp-producer 和 amqp-consumer 添加组件 ID。
- 支持 aws-firehose 接收器的无代理模式。
- 提升 armeria 到 1.23.1。
- 支持 Elasticsearch 监控。
- 修复 PromQL HTTP API `/api/v1/series` 响应在匹配指标时缺少 `service` 标签。
- 支持 BanyanDB 的服务器端 TopN。
- 为 Jersey 添加组件 ID。
- 移除 OpenCensus 支持，相关代码和文档已[被弃用](https://opentelemetry.io/blog/2023/sunsetting-opencensus/)。
- 支持可搜索的 TracesTags 动态配置。
- 支持通过 Kafka 通道仅导出错误状态跟踪段的 `exportErrorStatusTraceOnly`。
- 为 Grizzly 添加组件 ID。
- 修复 Zipkin 接收器中 `Span` 缺少某些字段时的潜在 NPE。
- 过滤未知集群的指标数据。
- 支持 RabbitMQ 监控。
- 支持 Redis 慢日志收集。
- 修复查询连续分析任务记录时的数据丢失问题。
- 适配连续分析任务查询 GraphQL。
- 支持指标查询表达式（MQE），允许用户通过表达式进行简单的查询阶段计算。
- 废弃指标查询 v2 协议。
- 废弃记录查询协议。
- 为 go-redis 添加组件 ID。
- 将 OpenSearch 2.8.0 添加到测试用例中。
- 添加 `ai-pipeline` 模块。
- 支持通过 `ai-pipeline` 进行 HTTP URI 格式化以进行模式识别。
- 添加新的 HTTP URI 分组引擎和基准测试。
- [重大变更] 使用新的 HTTP URI 分组引擎替换旧的正则表达式机制。
- 支持 `MAL` 中的 `sumLabeled`。
- 从 kubernetes-client/java 迁移到 fabric8 客户端。
- Envoy ALS 生成的关系指标考虑到 HTTP 状态码 >= 400 在客户端有错误。
- 添加查询连续分析任务时的原因消息字段。

#### UI

- 回退：cpm5d 功能。此功能已从后端取消。
- 修复：拓扑上的告警链接中断。
- 重构拓扑小部件，使其更加层次化。
  1. 选择 `User` 作为第一个节点。
  2. 如果没有 `User` 节点，选择最繁忙的节点（调用次数最多的节点）。
  3. 进行从左到右的流程处理。
  4. 在同一级别上，按字母顺序从上到下列出节点。
- 修复 ReadRecords 指标与跟踪关联时的过滤 ID。
- 添加 AWS API Gateway 菜单。
- 更改跟踪分析协议。
- 添加 Redis 菜单。
- 优化数据类型。
- 支持指标查询的 isEmptyValue 标志。
- 添加 Elasticsearch 菜单。
- [升级前清理 UI 模板] 设置 `showSymbol: true`，并使数据点显示在折线图上。  
  请清理 Elasticsearch 存储中的 `ui_template` 索引或 JDBC 存储中的表。
- [升级前清理 UI 模板] UI 模板：简化带标签的指标名称。
- 添加 MQ 菜单。
- 添加 Jersey 图标。
- 修复：使用 URL 参数正确设置端点和实例选择器。
- 提升依赖版本 icons-vue 1.1.4、element-plus 2.1.0、nanoid 3.3.6、postcss 8.4.23。
- 添加 OpenTelemetry 日志协议支持。
- [重大变更] 配置键 `enabledOtelRules` 重命名为 `enabledOtelMetricsRules`，  
  对应的环境变量重命名为 `SW_OTEL_RECEIVER_ENABLED_OTEL_METRICS_RULES`。
- 添加 Grizzly 图标。
- 修复：实例列表数据显示错误。
- 修复：将 topN 类型设置为 Number。
- 支持指标查询表达式（MQE），允许用户通过表达式进行简单的查询阶段计算。
- 提升 zipkin ui 依赖到 2.24.1。
- 提升 vite 到 4.0.5。
- 在 `General` 和 `Virtual-Database` 层 UI 模板上应用 MQE。

#### 文档

- 添加分析相关文档。
- 添加 `SUM_PER_MIN` 到 MAL 文档。
- 使日志相关文档更加清晰，并更易于支持更多格式。
- 更新集群管理和高级部署文档。

所有问题和拉取请求在[这里](https://github.com/apache/skywalking/milestone/169?closed=1)。
```