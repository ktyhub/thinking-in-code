# skywalking v10.1.0
### 为什么要使用skywalking

在当今快速发展的技术环境中，企业面临着前所未有的挑战。系统的复杂性与日俱增，监控和优化性能的需求愈发迫切。Skywalking作为一款强大的应用性能监控工具，能够帮助开发者和运维团队深入了解系统的运行状态，及时发现并解决问题。然而，许多团队在选择监控工具时却常常陷入选择的困境：是选择一个功能强大的工具，还是一个易于使用的工具？Skywalking的出现，恰好填补了这一矛盾，它不仅功能强大，而且易于集成，成为了众多企业的首选。

### skywalking是什么

Skywalking是一个开源的应用性能监控（APM）工具，旨在帮助开发者和运维团队监控、追踪和分析微服务架构下的应用性能。它提供了丰富的可视化界面，支持多种数据源，能够实时监控应用的健康状态，识别性能瓶颈，并提供详细的调用链分析。

### 入门示例

假设你正在开发一个电商平台，使用微服务架构来处理用户请求、订单管理和支付等功能。通过集成Skywalking，你可以实时监控每个微服务的性能，查看请求的响应时间和错误率。例如，当用户在结账时遇到延迟，你可以通过Skywalking的调用链追踪，迅速定位到是哪个服务出现了问题，从而及时进行优化和修复。这种实时监控和分析的能力，极大地提升了用户体验和系统稳定性。

### skywalking v10.1.0版本更新了什么

Skywalking v10.1.0版本带来了显著的性能提升，特别是在用户界面和查询性能方面。更新包括对GraphQL引擎的并行查询支持，显著改善了OTEL指标处理的性能，降低了CPU和GC成本。此外，采用了BanyanDB 0.7，提升了数据库的性能和稳定性。

### 更新日志

#### 下载
[下载链接](https://skywalking.apache.org/downloads/)

#### 注意
**请勿从此页面下载源代码。如果您想自行构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。**

#### 性能版本
- 巨大的用户界面性能提升，利用GraphQL能力捆绑指标小部件查询。
- GraphQL引擎支持并行查询，提升查询性能。
- 显著改善OTEL指标处理的性能，减少CPU和GC成本。
- 采用BanyanDB 0.7，提升原生数据库性能和稳定性。

#### 项目
- E2E：将opentelemetry-collector版本提升至0.102.1。
- 推送快照数据生成器docker镜像至ghcr.io。
- 提升skywalking-infra-e2e以应对GHA移除docker-compose v1。
- 提升CodeQL GitHub Actions。
- 修复delombok插件的错误阶段，减少构建警告。
- 使用ci友好的修订版本设置项目版本。

#### OAP服务器
- 修复与eBPF Profiling相关模型中的错误索引。
- 支持在eBPF访问日志接收器中排除特定命名空间流量。
- 为Elasticsearch添加Golang支持。
- 移除不必要的BanyanDB刷新日志（信息）。
- 增加SW_CORE_GRPC_MAX_MESSAGE_SIZE至50MB。
- 支持通过PromQL查询关系指标。
- 支持调试的MQE查询跟踪。
- 为Solon框架添加组件ID（158）。
- 修复浏览器接收器插件的HTTP处理程序中的指标标签。
- 将alarm_record#message列长度从200增加至2000。
- 移除alarm_record#message列索引。
- 为Pulsar添加Python支持。
- 为PersistenceTimer中的persistence_timer_bulk_prepare_latency、persistence_timer_bulk_execute_latency和persistence_timer_bulk_all_latency指标创建更合适的直方图桶。
- [破坏性更改]将Nacos版本更新至2.3.2，Nacos 1.x服务器无法作为集群协调器和配置服务器。
- 支持调试的跟踪查询（SkyWalking和Zipkin）。
- 修复BanyanDB指标查询：使用错误的Downsampling类型查找模式。
- 支持获取cilium流以监控cilium服务之间的网络流量。
- 在OAL引擎中支持labelCount函数。
- 支持BanyanDB内部测量查询执行跟踪。
- BanyanDB客户端配置：将默认maxBulkSize提升至10000，添加flushTimeout并设置默认值为10秒。
- 优化BanyanDB组和模式创建逻辑，以修复分布式竞争条件下的模式创建失败问题。
- 支持调试的跟踪拓扑查询。
- 修复MySQL仪表板中的图表Current QPS表达式。
- 支持调试的跟踪日志查询。
- BanyanDB：修复标签自动完成数据存储和查询。
- 支持PromQL查询中的聚合运算符。
- 更新kubernetes HTTP延迟相关指标源单位从ns到ms。
- 支持BanyanDB内部流查询执行跟踪。
- 修复Elasticsearch、MySQL、RabbitMQ仪表板中的拼写错误和缺失表达式。
- BanyanDB：Zipkin模块将服务设置为实体以提高查询性能。
- MQE：在进行二进制操作之前检查指标值以提高鲁棒性。
- 用Armeria原生支持的上下文路径替换解决方法。
- 为健康检查添加http端点包装。
- 提升Armeria及其传递依赖项的版本。
- BanyanDB：如果模型列已经是@BanyanDB.TimestampColumn，则在其上设置@BanyanDB.NoIndexing以减少索引。
- BanyanDB：流排序查询，使用内部时间序列而不是索引以提高查询性能。
- 提升graphql-java至21.5。
- 当接收到Kubernetes对等地址在当前集群中不被识别时，添加Unknown Node。
- 修复CounterWindow并发增加导致的NPE问题。
- 修复空字符串格式化的端点名称。
- 支持复合GraphQL查询的异步查询。
- 按时间戳降序获取端点列表。
- 支持对由eBPF接收器生成的指标进行排序查询。
- 修复使用label_values查询变量时与Grafana 11的兼容性。
- Nacos作为配置服务器和集群协调器支持配置contextPath。
- 更新eBPF访问日志接收器中的端点名称格式为<Method>:<Path>。
- 为OpenTelemetry接收器添加自观察性指标。
- 支持在eBPF访问日志接收器中缺少pod上下文时的服务级别指标聚合。
- 修复查询getGlobalTopology时未找到任何服务时抛出异常。
- 修复ALS k8s-mesh分析器中缺失的先前分析结果。
- 修复findEndpoint查询在使用BanyanDB时需要keyword的问题。
- 支持分析eBPF访问日志接收器中的ztunnel映射IP地址和mTLS模式。
- 适配BanyanDB Java Client 0.7.0。
- 添加SkyWalking Java Agent自观察性仪表板。
- 为GoFrame框架添加组件ID（5022）。
- 提升protobuf java依赖项至3.25.5。
- BanyanDB：支持在查询findEndpoint和getAlarm中使用原生术语搜索keyword。
- BanyanDB：支持TLS连接和配置。
- PromQL服务：查询API支持RFC3399时间格式。
- 改善OTEL指标处理的性能。
- PromQL服务：修复运算符结果缺失rangeExpression标志。
- BanyanDB：使用TimestampRange改善BanyanDB的events查询。
- 优化network_address_alias表以减少索引数量。
- PromQL服务：支持圆括号运算符。
- 支持查询Alarm消息标签以实现自动完成。

#### 文档
- 更新zabbix接收器支持的版本描述。
- 将官方仪表板文档移动到市场文档。
- 在快速开始菜单下添加市场介绍文档，以减少查找功能文档的困惑。
- 更新Windows指标（Swap -> Virtual Memory）。

### 总结

Skywalking v10.1.0版本的更新记录显示了其在性能、功能和用户体验方面的显著提升，特别是在数据库支持、查询性能和用户界面方面的改进，为开发者和运维团队提供了更强大的工具来监控和优化应用性能。

### 爆款标题

- "Skywalking v10.1.0：性能飞跃，GraphQL引擎并行查询助力应用监控"
- "全新Skywalking v10.1.0发布：OTEL指标处理性能大幅提升"
- "Skywalking v10.1.0更新：BanyanDB 0.7带来数据库性能革命"
- "Skywalking v