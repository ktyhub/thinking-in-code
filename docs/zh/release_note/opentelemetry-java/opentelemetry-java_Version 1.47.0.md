# opentelemetry-java Version 1.47.0
### 为什么要使用opentelemetry-java

在当今快速发展的软件开发环境中，监控和追踪应用程序的性能已成为企业成功的关键。然而，许多开发者在面对复杂的分布式系统时，常常感到无从下手。opentelemetry-java的出现，正是为了打破这一困境。它不仅提供了一种统一的方式来收集和分析应用程序的性能数据，还能帮助开发者快速识别和解决潜在问题。想象一下，你的应用程序在高峰时段突然崩溃，而你却无法找到根本原因。opentelemetry-java将为你提供清晰的可视化数据，帮助你在危机中找到解决方案。

### opentelemetry-java是什么

opentelemetry-java是一个开源项目，旨在为Java应用程序提供统一的监控和追踪解决方案。它允许开发者轻松地收集、处理和传输性能数据，支持多种后端存储和分析工具。通过opentelemetry-java，开发者可以实现对应用程序的全面观察，提升系统的可观测性和性能。

### 入门示例

想象一下，你正在开发一个电商平台，用户在高峰时段频繁下单。为了确保系统的稳定性和响应速度，你决定使用opentelemetry-java来监控应用程序的性能。首先，你需要在项目中引入opentelemetry-java的依赖：

```xml
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-api</artifactId>
    <version>1.47.0</version>
</dependency>
```

接下来，你可以在代码中创建一个Tracer实例，并在关键操作中添加追踪信息：

```java
Tracer tracer = GlobalOpenTelemetry.getTracer("ecommerce");
Span span = tracer.spanBuilder("placeOrder").startSpan();
try {
    // 处理下单逻辑
} finally {
    span.end();
}
```

通过这种方式，你可以实时监控用户下单的性能，及时发现并解决问题。

### opentelemetry-java Version 1.47.0版本更新了什么

在1.47.0版本中，opentelemetry-java进行了多项重要更新，包括简化了ExtendedTracer的使用，新增了ExtendedLogRecordBuilder#setEventName方法，并且移除了事件API/SDK。此外，修复了与span限制和批处理处理器相关的bug，增强了SDK的稳定性和性能。

### 更新日志

#### API
- 孵化器
  - 使ExtendedTracer更易于使用。
  - 添加ExtendedLogRecordBuilder#setEventName及相应的SDK和OTLP序列化。
  - 重大变更：移除事件API/SDK。

#### SDK
- 从稳定组件的运行时类路径中移除-alpha工件。

#### 跟踪
- 修复bug：遵循span限制和批处理器的规范。
- 添加实验性SdkTracerProvider.setScopeConfigurator(ScopeConfigurator)以在运行时更新TracerConfig。

#### 配置文件
- 向常见的OTLP导出器添加AttributeKeyValue抽象。
- 改进配置文件属性表的处理。

#### 导出器
- 将超时零值解释为无限制。
- 修复OTLP：修复并发span可重用数据的序列化器。
- OTLP：添加自定义重试异常谓词的能力。
- OTLP：扩展默认OkHttp发送器的重试异常谓词。

#### 扩展
- 自动配置：在otel.{signal}.exporter=none时一致应用导出器自定义。
- 自动配置：将EnvironmentResourceProvider提升为公共API。
- 自动配置：确保OTEL_PROPAGATORS在OTEL_SDK_DISABLED=true时仍然有效。

#### 测试
- 将W3CBaggagePropagator添加到OpenTelemetryRule和OpenTelemetryExtension。

### 总结

在1.47.0版本的更新中，opentelemetry-java通过简化API、修复bug和增强功能，进一步提升了开发者的使用体验。这些改进不仅使得监控和追踪变得更加高效，也为开发者提供了更强大的工具，以应对复杂的应用程序性能挑战。