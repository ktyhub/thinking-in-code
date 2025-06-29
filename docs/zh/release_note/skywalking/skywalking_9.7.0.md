# skywalking 9.7.0

#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意事项

**请勿从本页面下载源代码。**  
如果您想自己构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。

#### 暗黑模式

默认样式模式已更改为暗黑模式，亮色模式仍然可用。

![dark-mode](https://private-user-images.githubusercontent.com/5441976/286682554-2f986beb-2979-4a9d-8202-9c6f4d1b64a8.png)

#### 新设计的日志视图

目前提供了新设计的日志视图。更容易定位日志，并为原始文本提供了更多空间。

![logs](https://private-user-images.githubusercontent.com/5441976/286682584-f1e19be9-86e5-4dec-b9b7-d61572b9cf27.png)

#### 项目

- 在端到端测试中将Java代理升级到9.1-dev。
- 将netty升级到4.1.100。
- 将Groovy 3更新到4.0.15。
- 支持在JDK21中打包项目。编译器源码和目标保持在JDK11。

#### OAP服务器

- ElasticSearchClient：添加`deleteById` API。
- 修复自定义报警规则被'resource/alarm-settings.yml'覆盖的问题。
- 支持Kafka监控。
- 支持Pulsar服务器和BookKeeper服务器监控。
- [重大变更] Elasticsearch存储合并所有管理数据索引到一个名为`management`的索引，包括`ui_template，ui_menu，continuous_profiling_policy`。
- 添加报警窗口过期时的释放机制，以防止OOM。
- 修复Zipkin跟踪接收器响应：将HTTP状态码从`200`改为`202`。
- 将BanyanDB Java客户端更新到0.5.0。
- 修复BanyanDB Metadata DAO中的getInstances查询。
- BanyanDBStorageClient：添加`keepAliveProperty` API。
- 修复JDBC存储插件中的表存在检查。
- 增强HTTP服务器库的可扩展性。
- 调整`AlarmRecord`报警消息列的长度至512。
- 修复`EventHookCallback`构建事件：从`Service's Layer`构建层。
- 修复`AlarmCore` doAlarm：为每个回调捕获异常，避免中断。
- 优化TraceQueryEsDAO中的queryBasicTraces。
- 修复`WebhookCallback`发送错误消息，为每个回调HTTP Post添加异常捕获。
- 修复报警规则表达式验证：为检查添加标记度量模拟数据。
- 支持收集ZGC内存池度量。
- 为Netty-http（ID=151）添加组件ID。
- 为Fiber（ID=5021）添加组件ID。
- BanyanDBStorageClient：添加`define(Property property, PropertyStore.Strategy strategy)` API。
- 纠正文件格式并修复监控Kafka端到端测试中文件名的拼写错误。
- 支持在LAL中从模式化日期时间字符串中提取时间戳。
- 支持在启动日志中输出关键参数。
- 修复在JDBC相关存储中无法使用`annotationQuery`参数查询zipkin跟踪的问题。
- 修复ES存储中`findEndpoint` API的`limit`不起作用的问题。
- 通过度量名称隔离MAL CounterWindow缓存。
- 修复JDBC日志查询顺序。
- 将DataCarrier IF_POSSIBLE策略更改为使用ArrayBlockingQueue实现。
- 将L1度量聚合工作中的队列（DataCarrier）策略更改为IF_POSSIBLE模式。
- 添加自我观测度量`metrics_aggregator_abandon`，用于计算放弃的度量数量。
- 支持Nginx监控。
- 修复`BanyanDB Metadata Query`：使查询单个实例/进程返回完整标签，以避免NPE。
- 将go2sky E2E替换为GO代理。
- 在UI模板和端到端测试中用MQE替换Metrics v2协议。
- 修复apisix度量otel规则不正确的问题。
- 支持`Scratch The OAP Config Dump`。
- 支持在`MQE`查询语言中使用`increase/rate`函数。
- 当端点具有高基数时，将服务端点分组到`_abandoned`。

#### UI

- 为Kafka监控添加新菜单。
- 修复独立小部件持续时间。
- 修复链接树结构的显示高度。
- 在服务小部件上用shortName替换名称。
- 重构：更新分页样式。视觉样式无变化。
- 在K8s层UI-模板上应用MQE。
- 修复跟踪树图中的图标显示。
- 修复：更新工具提示样式，以支持在度量图中滚动查看多个度量。
- 添加新小部件以显示jvm内存池详细信息。
- 修复：避免使用空参数查询数据。
- 为跟踪段添加标题和描述。
- 为Netty HTTP插件添加Netty图标。
- 添加Pulsar菜单i18n文件。
- 重构日志视图。
- 实现暗黑主题。
- 更改文本小部件的UI模板。
- 添加Nginx菜单i18n。
- 修复跟踪小部件的高度。
- 美化列表样式。
- 修复日志与跟踪的关联。
- 增强破损拓扑小部件的布局。
- 修复拓扑小部件的呼叫度量与呼叫类型。
- 修复拓扑小部件的度量配置更改。
- 修复选项卡小部件的路由。
- 移除与OpenFunction（FAAS层）相关的UI模板和菜单项。
- 修复：更改颜色以匹配暗黑主题的网络分析。
- 移除UI i18n中的OpenFunction描述。
- 减少组件块以提高页面加载资源时间。

#### 文档

- 将存储文档分离到不同文件，并添加BanyanDB的预计时间线（2023年底）。
- 在UI-Grafana文档中添加拓扑配置。
- 在`OpenTelemetry Metrics`文档中添加缺失的度量。
- 润色`概念和设计`文档。
- 修复slowCacheReadThreshold的错误注释。
- 更新OAP设置和集群协调器文档，解释日志中的新启动参数表，以及如何设置集群模式。

所有问题和拉取请求都在[这里](https://github.com/apache/skywalking/milestone/193?closed=1)
```