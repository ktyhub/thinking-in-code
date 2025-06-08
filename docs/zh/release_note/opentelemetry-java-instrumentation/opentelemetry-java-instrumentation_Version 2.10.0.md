# opentelemetry-java-instrumentation Version 2.10.0
### 为什么要使用opentelemetry-java-instrumentation

在当今软件开发的世界中，性能监控和可观察性已成为成功的关键。然而，许多开发者在实现这些目标时面临着巨大的挑战：如何高效地收集、处理和分析应用程序的性能数据？opentelemetry-java-instrumentation正是为了解决这一矛盾而诞生的。它不仅提供了一种简单的方式来集成监控工具，还能帮助开发者深入了解应用程序的运行状态，及时发现并解决潜在问题。使用opentelemetry-java-instrumentation，开发者可以在复杂的系统中获得清晰的视图，确保应用程序的高效运行。

### opentelemetry-java-instrumentation是什么

opentelemetry-java-instrumentation是一个开源项目，旨在为Java应用程序提供自动化的监控和追踪功能。它基于OpenTelemetry标准，允许开发者轻松地在其应用程序中集成分布式追踪和指标收集。通过使用该工具，开发者可以获得关于应用程序性能的深入洞察，帮助他们优化代码和提升用户体验。

### 入门示例

想象一下，你正在开发一个电子商务网站，用户在浏览商品时，页面加载速度至关重要。使用opentelemetry-java-instrumentation，你可以轻松地在应用程序中添加追踪代码，监控每个请求的响应时间。例如，你可以在Spring Boot应用中集成opentelemetry-java-instrumentation，只需在启动类中添加相关依赖和配置，便能自动收集请求的追踪信息。这样，当用户体验不佳时，你可以迅速定位到具体的服务或数据库查询，进行针对性的优化。

### opentelemetry-java-instrumentation Version 2.10.0版本更新了什么

Version 2.10.0针对OpenTelemetry SDK 1.44.1进行了更新。许多构件的版本号带有“-alpha”后缀，表明它们仍处于alpha阶段，可能会有破坏性更改。新增了Ktor 3的javaagent和库的仪器支持。Spring Boot Starter Scheduling的仪器范围名称已更改，以反映模块名称。AWS Lambda的默认刷新超时已从1秒更改为10秒，以匹配AWS Lambda库的刷新超时。

### 更新日志

此版本针对OpenTelemetry SDK 1.44.1进行了优化。

请注意，许多构件的版本号带有“-alpha”后缀，表明它们仍处于alpha质量阶段，并将继续有破坏性更改。有关更多详细信息，请参见[VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning)。

#### 🌟 新增javaagent仪器
- Ktor 3仪器

#### 🌟 新增库仪器
- Ktor 3仪器

#### 迁移说明
- Spring Boot Starter Scheduling的仪器范围名称已从`io.opentelemetry.spring-scheduling-3.1`更改为`io.opentelemetry.spring-boot-autoconfigure`，以反映模块名称。
- AWS Lambda javaagent的默认刷新超时已从1秒更改为10秒，以匹配AWS Lambda库的刷新超时。

#### 📈 增强功能
- 将java包的加载委托给平台加载器。
- 在otel SDK初始化之前设置虚拟字段转换。
- 更新azure-core-tracing-opentelemetry版本，并在Azure SDK追踪被禁用时改善HTTP抑制。
- Ktor2 HTTP客户端使用低级仪器。
- 将logback mdc仪器添加到Spring Boot Starter。
- 仅运行一次类加载监听器。
- 移除重复的byte buddy类以减少代理jar文件大小。
- 在服务名称资源检测器中支持额外的JVM参数语法。

#### 🛠️ Bug修复
- 修复derby目录连接字符串解析器。
- 改进oracle jdbc URL解析器中的空白处理。
- 修复无法桥接的span的SpanKey桥接。
- 修复lettuce仪器和测试以通过最新版本。
- 修复Kafka初始化偶尔因并发注入OpenTelemetryMetricsReporter而失败的问题。

#### 🙇 感谢
本次发布得益于许多贡献者的精彩想法和出色的拉取请求。

### 总结

在Version 2.10.0中，opentelemetry-java-instrumentation进行了多项重要更新，包括对OpenTelemetry SDK的支持、新增Ktor 3的仪器、迁移说明以及多项增强和Bug修复。这些改进将进一步提升开发者在监控和追踪Java应用程序时的体验和效率。