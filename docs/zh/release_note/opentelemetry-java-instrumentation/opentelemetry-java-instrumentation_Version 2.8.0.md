# opentelemetry-java-instrumentation Version 2.8.0
### 为什么要使用opentelemetry-java-instrumentation

在当今快速发展的软件开发环境中，监控和追踪应用程序的性能变得至关重要。然而，许多开发者面临着一个矛盾：在追求高效和灵活性的同时，如何确保系统的可观察性？opentelemetry-java-instrumentation正是为了解决这个问题而生。它不仅提供了强大的追踪和监控功能，还能与现有的技术栈无缝集成，让开发者在不牺牲性能的情况下，获得全面的可视化数据。这是一个让你在复杂的系统中找到秩序的工具。

### opentelemetry-java-instrumentation是什么

opentelemetry-java-instrumentation是一个用于Java应用程序的开源库，旨在帮助开发者轻松地收集和传输应用程序的性能数据。它支持多种框架和库，能够自动化地插入追踪和监控代码，从而提供实时的可观察性。通过这个工具，开发者可以更好地理解应用程序的行为，快速定位问题。

### 入门示例

想象一下，你正在开发一个电商平台，用户在下单时，系统需要调用多个微服务来处理支付、库存和物流。使用opentelemetry-java-instrumentation，你可以轻松地在这些微服务中插入追踪代码。比如，在支付服务中，你可以通过简单的配置来监控每个请求的响应时间和成功率。当用户反馈支付失败时，你可以迅速追踪到具体的服务调用，找出问题所在，提升用户体验。

### opentelemetry-java-instrumentation Version 2.8.0版本更新了什么

Version 2.8.0更新了OpenTelemetry SDK至1.42.1，许多构件仍处于alpha阶段，可能会有破坏性更改。更新包括将Java 17 JFR基础的度量单位从毫秒改为秒，以符合语义约定。此外，增强了对Pulsar、OkHttp 3.0和CXF 4.0的支持，并修复了一些bug，提升了整体稳定性。

### 更新日志

此版本的发布目标是OpenTelemetry SDK 1.42.1。请注意，许多构件的版本号后附有-alpha后缀，反映出它们仍处于alpha质量，并将继续有破坏性更改。有关更多详细信息，请参阅VERSIONING.md。

#### 迁移说明
- 选择性启用Java 17 JFR基础的度量单位已从毫秒更新为秒，以符合语义约定。如果您使用Java代理，只有在通过`otel.instrumentation.runtime-telemetry-java17.enable-all=true`选择启用时才会受到影响。

#### 📈 增强功能
- 更新Pulsar的插装以支持下一个Pulsar版本。
- 在OkHttp 3.0插装中捕获`network.peer.address`。
- 添加对CXF 4.0 JAX-WS的支持。
- 添加规则以捕获通过JMX MBeans暴露的Apache Camel度量。
- 使RocketMQ跨度状态提取器委托给默认提取器。
- 允许日志主体的任何值桥接。
- 为资源提供者添加声明性配置支持。

#### 🛠️ Bug修复
- 修复Java代理与`java.net.spi.InetAddressResolverProvider`不兼容的问题。
- 修复Oracle UCP 11度量未发出的错误。
- 修复使用Apache ShardingSphere时捕获的数据库信息错误。
- 修复RabbitMQ的NullPointerException。
- 修复Play插装中的可能NullPointerException。
- 修复Ktor中成功请求的错误跨度状态。
- 使OpenTelemetryHandlerMappingFilter处理来自`ServletRequestPathUtils.parseAndCache()`的异常。
- 修复在使用异步日志记录器的log4j库插装中捕获上下文的问题。

### 总结

此次更新为opentelemetry-java-instrumentation带来了重要的功能增强和bug修复，特别是在支持新版本的框架和提升稳定性方面，确保开发者能够更好地监控和追踪他们的Java应用程序。

### 爆款标题

- "解锁性能监控：opentelemetry-java-instrumentation 2.8.0版本重磅更新！"
- "提升可观察性：opentelemetry-java-instrumentation 2.8.0版本全新功能解析"
- "从此告别bug：opentelemetry-java-instrumentation 2.8.0版本修复与增强"
- "Java开发者必看：opentelemetry-java-instrumentation 2.8.0版本更新亮点"
- "全面升级！opentelemetry-java-instrumentation 2.8.0版本带来的新机遇"