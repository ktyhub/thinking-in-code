# micrometer tracing 1.3.4
### micrometer tracing是什么

Micrometer Tracing是一个用于微服务架构的追踪库，旨在帮助开发者收集和分析分布式系统中的性能数据。它与OpenTelemetry等标准兼容，能够提供丰富的追踪信息，帮助开发者更好地理解应用程序的行为和性能瓶颈。

### 为什么要使用micrometer tracing?

使用Micrometer Tracing的主要原因在于它能够提供深入的可观察性，帮助开发者识别和解决性能问题。通过追踪请求在微服务之间的流动，开发者可以获得更清晰的视图，了解系统的整体健康状况。此外，它还支持多种后端存储，便于与现有的监控工具集成。

### micrometer tracing 1.3.4版本更新了什么

在1.3.4版本中，由于OTel依赖性的问题，此次发布实际上进行了降级处理：

- 将`io.opentelemetry.instrumentation:opentelemetry-instrumentation-api-semconv`从`1.33.5-alpha`降级至`1.33.3-alpha`
- 将`io.opentelemetry:opentelemetry-api`从`1.40.0`降级至`1.38.0`

这次降级是因为在补丁版本中通常不升级次要版本，但由于OTel进行了升级，导致在早期的补丁版本中不小心将`io.opentelemetry:opentelemetry-api`从`1.38.0`升级至`1.40.0`。为了避免在补丁版本中出现意外的次要版本升级，此次发布恢复了与`1.3.0`相同的OTel次要版本。

### 更新日志

- 由于OTel依赖性的问题，此次发布进行了降级处理：
  - 将`io.opentelemetry.instrumentation:opentelemetry-instrumentation-api-semconv`从`1.33.5-alpha`降级至`1.33.3-alpha`
  - 将`io.opentelemetry:opentelemetry-api`从`1.40.0`降级至`1.38.0`

#### ⚠️ 重要事项
- OTel依赖性收敛问题

#### 🐞 Bug修复
- OTel依赖性收敛问题

#### 🔨 依赖升级
- 将`io.micrometer:micrometer-bom`从`1.13.3`升级至`1.13.4`

#### 📝 任务
- 将`io.spring.develocity.conventions`从`0.0.19`升级至`0.0.20`
- 将`ch.qos.logback:logback-classic`从`1.5.6`升级至`1.5.7`
- 将`spring`从`5.3.37`升级至`5.3.39`
- 将`io.projectreactor:reactor-bom`从`2022.0.21`升级至`2022.0.22`
- 将`io.spring.javaformat:spring-javaformat-gradle-plugin`从`0.0.42`升级至`0.0.43`
- 将`io.spring.javaformat:spring-javaformat-checkstyle`从`0.0.42`升级至`0.0.43`
- 在上下文传播测试中使用`TestObservationRegistry`