# skywalking 9.6.0
```markdown
#### 下载

[https://skywalking.apache.org/downloads/](https://skywalking.apache.org/downloads/)

#### 注意

**不要从此页面下载源代码。**  
**如果您想自行构建源代码，请遵循[构建文档](https://github.com/apache/skywalking/tree/master/docs/en/guides/How-to-build.md#build-from-github)。**

#### 新的告警内核

- 支持MQE（指标查询表达式）和新的通知机制。  
  ![alerting-rules](https://private-user-images.githubusercontent.com/5441976/265070740-ae4cb3f5-c950-4d8f-921b-735c667df7cb.png)

#### 支持Loki LogQL

- 新增对Loki LogQL和Grafana Loki Dashboard的支持，用于SkyWalking收集的日志。  
  ![grafana-logql](https://private-user-images.githubusercontent.com/5441976/265071315-4c833d4f-c737-4956-94b8-23904cfe33a8.png)

#### 警告

- 移除了ElasticSearch 6存储相关的测试。由于官方已停止维护，不再保证其工作。

#### 项目

- 将Guava升级到32.0.1，以避免由于[CVE-2020-8908](https://github.com/advisories/GHSA-5mg8-w23w-74h3)而被列为易受攻击的库。此API从未使用过。
- Maven工件`skywalking-log-recevier-plugin`重命名为`skywalking-log-receiver-plugin`。
- 将CLI版本从0.11升级到0.12。
- 将ASF父POM版本升级到v30。
- 使构建可重复用于自动发布CI。

#### OAP服务器

- 添加Neo4j组件ID（112），语言：Python。
- 添加Istio ServiceEntry注册以解决ALS中的未知IP。
- 将`deleteProperty` API包装到BanyanDBStorageClient中。
- [重大变更] 从`HttpUriRecognitionService#feedRawData`中移除`matchedCounter`。
- 从`HttpUriRecognitionService#feedRawData`中移除模式，并为每个模式添加最多10个原始URI候选项。
- 添加WebSphere组件ID。
- 修复AI Pipeline URI缓存NullPointer和IllegalArgument异常。
- 修复指标查询中的NPE，当指标不存在时。
- 移除Istio < 1.15和ElasticSearch < 7.16.3的E2E测试，它们可能仍然工作但不再支持。
- 在ElasticSearch存储中滚动所有结果并重构滚动逻辑，包括服务、实例、端点、进程等。
- 改进Kubernetes协调器以移除集群中的`Terminating` OAP Pods。
- 支持`SW_CORE_SYNC_PERIOD_HTTP_URI_RECOGNITION_PATTERN`和`SW_CORE_TRAINING_PERIOD_HTTP_URI_RECOGNITION_PATTERN`，以控制HTTP URI识别模式的训练和同步周期。并将默认周期缩短为10秒用于同步和60秒用于训练。
- 修复ElasticSearch滚动器错误。
- 添加Aerospike组件ID（149）。
- 将名称为`recevier`的包重命名为`receiver`。
- `BanyanDBMetricsDAO`在`multiGet`中处理`storeIDTag`以支持`BanyanDBModelExtension`。
- 修复端点分组相关逻辑并增强PatternTree检索性能。
- 修复使用`mysql-connector-java`时批量插入后的指标会话缓存保存问题。
- 支持动态UI菜单查询。
- 为`docker/.env`添加注释以解释用法。
- 修复环境变量名称错误，将`SW_OTEL_RECEIVER_ENABLED_OTEL_RULES`修正为`SW_OTEL_RECEIVER_ENABLED_OTEL_METRICS_RULES`。
- 修复JDBC实现中的实例查询。
- 将`SW_QUERY_MAX_QUERY_COMPLEXITY`的默认值设置为3000（之前为1000）。
- 接受事件参数值`length=4000`，之前为2000。
- 容忍非法JSON格式的参数值。
- 更新BanyanDB Java客户端到0.4.0。
- 支持在MQE中聚合`Labeled Value Metrics`。
- [重大变更] 将MQE中的默认标签名称从`label`更改为`_`。
- 将grpc版本升级到1.53.0。
- [重大变更] 从shell脚本中移除`&`符号以避免OAP服务器进程作为后台进程运行。
- 部分回滚[#10616](https://github.com/apache/skywalking/pull/10616)以修复意外更改：如果没有数据，我们应该返回一个包含`0`的数组，但在[#10616](https://github.com/apache/skywalking/pull/10616)中，返回了一个空数组。
- 在内存中缓存所有服务实体以供查询。
- 将jackson版本升级到2.15.2。
- 增加默认内存大小以避免OOM。
- 将graphql-java升级到21.0。
- 添加Echo组件ID（5015），语言：Golang。
- 修复`aggregate_labels` MQE函数中的索引越界异常。
- 支持由OTEL提供的MongoDB服务器/集群监控。
- 不在日志中打印配置值以避免敏感信息泄露。
- 在通过别名检索索引之前创建最新索引以避免404异常。这只是防止一些手动操作的干扰。
- 添加更多Go VM指标，因为新的skywalking-go代理自0.2版本起提供。
- 添加Lock组件ID（5016）。
- [重大变更] 调整`alarm-settings.yml`中的钩子结构。支持每种钩子的多个配置，并在告警规则中指定钩子。
- 将Armeria升级到1.24.3。
- 修复BooleanMatch和BooleanNotEqualMatch进行布尔比较的问题。
- 支持LogQL HTTP查询API。
- 添加Mux Server组件ID（5017），语言：Golang。
- 从我们的客户端库测试中移除ElasticSearch 6.3.2。
- 将ElasticSearch服务器8.8.1升级到8.9.0以进行最新的e2e测试。8.1.0、7.16.3和7.17.10仍在测试中。
- 将OpenSearch 2.8.0添加到我们的客户端库测试中。
- 使用监听模式实现Apollo动态配置。
- 在MQE中添加`view_as_seq`函数以按给定优先级顺序列出指标。
- 修复`k8sServiceNameRule`的默认值错误，如果未明确设置。
- 改进PromQL以允许在单个查询中进行多个指标操作。
- 修复MQE中标记指标与其他类型值结果之间的二元操作。
- 添加Nacos组件ID（150）。
- 支持MQE中的`Compare Operation`。
- 修复Kubernetes资源缓存未刷新问题。
- 修复启动时可能导致OOM的错误类路径。
- 通过在MAL中添加`delimiter`和`component`字段的设置来增强`serviceRelation`。
- [重大变更] 在告警中支持MQE。告警规则配置（alarm-settings.yml），添加`expression`字段并移除`metrics-name/count/threshold/op/only-as-condition`字段，并移除`composite-rules`配置。
- 根据上下游而不是每个日志检查ALS中的结果。
- 修复GraphQL查询`listInstances`未使用endTime查询。
- 在初始化模式下不启动服务器和Kafka消费者。
- 添加Iris组件ID（5018）。
- 添加OTLP Tracing支持作为Zipkin跟踪输入。

#### UI

- 修复`Browser-Root`仪表板中的指标名称`browser_app_error_rate`。
- 修复`General-Service`仪表板中端点列表的`endpoint_cpm`显示名称。
- 实现自定义菜单和市场页面。
- 修复minTraceDuration和maxTraceDuration类型。
- 修复初始化minTime为Infinity。
- 升级依赖项以修复漏洞。
- 添加scss变量。
- 修复实例列表的标题和持续分析中的通知。
- 添加链接以解释表达式指标，在持续分析小部件中添加单位。
- 计算字符串宽度以设置标签名称宽度。
- [重大变更] 从shell脚本中移除`&`符号以避免Web应用程序服务器进程作为后台进程运行。
- 重置图表标签。
- 修复服务关联实例。
- 移除node-sass。
- 修复Windows上的提交错误。
- 在`MYSQL`、`POSTGRESQL`、`REDIS`、`ELASTICSEARCH`和`DYNAMODB`层UI模板上应用MQE。
- 在Virtual-Cache层UI模板上应用MQE。
- 在APISIX、AWS_EKS、AWS_GATEWAY和AWS_S3层UI模板上应用MQE。
- 在RabbitMQ仪表板上应用MQE。
- 在Virtual-MQ层UI模板上应用MQE。
- 在Infra-Linux层UI模板上应用MQE。
- 在Infra-Windows