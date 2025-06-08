# skywalking 10.0.0
#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意事项

**请勿从此页面下载源代码。**  
如果您想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。

#### 服务层级

| 服务层级 | 层级图 |
| --- | --- |
| ![服务层级图](https://private-user-images.githubusercontent.com/5441976/329275238-54f52e45-fa1f-4a72-b77c-0946a79e6827.png) | ![层级图](https://private-user-images.githubusercontent.com/5441976/329275319-1568adcd-b7f1-463c-9160-b7898e8fc7e6.png) |

#### 在集群模式下使用 BanyanDB 0.6 运行

![BanyanDB 0.6 集群模式](https://private-user-images.githubusercontent.com/5441976/329417162-4cec5330-2d94-4e3a-9995-8475680a9fcc.png)

#### 项目

- 支持 Java 21 运行时。
- 支持 oap-java21 镜像用于 Java 21 运行时。
- 在所有端到端测试中将 `OTEL collector` 版本升级到 `0.92.0`。
- 将 CI macOS 运行器切换到 m1。
- 升级 PostgreSQL 驱动到 `42.4.4` 以修复 [CVE-2024-1597](https://github.com/advisories/GHSA-24rp-q3w6-vc56)。
- 从镜像中移除 CLI（`swctl`）。
- 从 Makefile 构建中移除 CLI_VERSION 变量。
- 在 docker-compose 快速启动中添加 BanyanDB。
- 为了修复 CVEs，提升 Armeria、jackson、netty、jetcd 和 grpc 的版本。
- 将 BanyanDB Java 客户端提升到 0.6.0。

#### OAP 服务器

- 添加 `layer` 参数到全局拓扑图 GraphQL 查询。
- 在 MQE 中添加 `is_present` 函数，用于检查列表指标是否有值。
- 移除 gRPC 线程执行器的不合理默认配置。
- 移除 `gRPCThreadPoolQueueSize (SW_RECEIVER_GRPC_POOL_QUEUE_SIZE)` 配置。
- 允许在作为服务元数据最终解析方法时，排除某些命名空间中的 ServiceEntries。
- 将服务、实例、端点和进程关系实体中的源和目标 ID 长度设置为 250（原为 200）。
- 支持构建服务/实例层级并查询。
- 如果字符串字段在 Elasticsearch 存储中设置超过 `32766` 长度，则将其从 `keyword` 类型更改为 `text` 类型。
- [重大变更] 将 Elasticsearch 存储中的 `ui_template` 和 `ui_menu` 配置字段从 `keyword` 类型更改为 `text` 类型。
- 支持服务层级自动匹配，添加自动匹配层级关系（上层 -> 下层）如下：
  - MESH -> MESH_DP
  - MESH -> K8S_SERVICE
  - MESH_DP -> K8S_SERVICE
  - GENERAL -> K8S_SERVICE
- 为 `K8S_SERVICE_NAME_RULE/ISTIO_SERVICE_NAME_RULE` 和 `metadata-service-mapping.yaml` 默认添加 `namespace` 后缀。
- 允许 ALS 接收器使用专用端口。
- 修复 `JDBCLogQueryDAO` 中通过 traceId 查询日志的问题。
- 支持处理 eBPF 访问日志协议。
- 修复 SumPerMinFunctionTest 错误函数。
- 从 Meter Functions 中移除不必要的注释和函数。
- 为 MAL 降采样添加 `max` 和 `min` 函数。
- 修复 TopN 统计的无控制内存消耗的严重错误。将 topN 组键从 `StorageId` 更改为 `entityId + timeBucket`。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - MYSQL -> K8S_SERVICE
  - POSTGRESQL -> K8S_SERVICE
  - SO11Y_OAP -> K8S_SERVICE
  - VIRTUAL_DATABASE -> MYSQL
  - VIRTUAL_DATABASE -> POSTGRESQL
- 添加 Golang 作为 AMQP 支持的语言。
- 支持拓扑中服务的可用层级。
- 为 MAL 添加 `count` 聚合函数。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - NGINX -> K8S_SERVICE
  - APISIX -> K8S_SERVICE
  - GENERAL -> APISIX
- 添加 Golang 作为 RocketMQ 支持的语言。
- 支持 Apache RocketMQ 服务器监控。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - ROCKETMQ -> K8S_SERVICE
  - VIRTUAL_MQ -> ROCKETMQ
- 修复服务实例 `in` 查询。
- 模拟 PromQL API 的 `/api/v1/status/buildinfo`。
- 修复 JDBC 存储插件中的表存在检查。
- 修复 JDBC 存储中基于天的表滚动时间范围策略。
- 添加 `maxInboundMessageSize (SW_DCS_MAX_INBOUND_MESSAGE_SIZE)` 配置，以更改 DCS 的最大入站消息大小。
- 修复在 EventHookCallback 中构建事件时的服务层级问题。
- 添加 Golang 作为 Pulsar 支持的语言。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - RABBITMQ -> K8S_SERVICE
  - VIRTUAL_MQ -> RABBITMQ
- 移除内核中的 Column#function 机制。
- 使查询 `readMetricValue` 始终返回持续时间的平均值。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - KAFKA -> K8S_SERVICE
  - VIRTUAL_MQ -> KAFKA
- 支持 ClickHouse 服务器监控。
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - CLICKHOUSE -> K8S_SERVICE
  - VIRTUAL_DATABASE -> CLICKHOUSE
- 添加服务层级自动匹配层级关系（上层 -> 下层）如下：
  - PULSAR -> K8S_SERVICE
  - VIRTUAL_MQ -> PULSAR
- 添加 Golang 作为 Kafka 支持的语言。
- 支持在服务器启动期间从 OAP 和 UI 显示服务监听的端口。
- 重构 data-generator 以支持生成指标。
- 修复 `AvgHistogramPercentileFunction` 的遗留名称。
- [重大变更] 标记指标支持多个标签。
  - 存储：存储所有标签名称和值，而不仅仅是值。
  - MQE：
    - 支持通过多个标签（名称和值）查询，而不是使用 `_` 作为匿名标签名称。
    - `aggregate_labels` 函数支持通过特定标签聚合。
    - `relabels` 函数需要目标标签，并重命名标签名称和值。
  - PromQL：
    - 支持通过多个标签（名称和值）查询，而不是使用 `lables` 作为匿名标签名称。
    - 移除通用标签 `labels/relabels/label` 函数。
    - API `/api/v1/labels` 和 `/api/v1/label/<label_name>/values` 支持返回匹配的指标标签。
  - OAL：
    - 弃用 `percentile` 函数，改为引入 `percentile2` 函数。
- 提升 Kafka 版本