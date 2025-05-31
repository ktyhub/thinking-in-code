# opentelemetry-java-instrumentation Version 2.13.0
### 为什么要使用opentelemetry-java-instrumentation

在当今复杂的微服务架构中，开发者面临着无数的挑战，尤其是在监控和调试方面。想象一下，你的应用程序在高峰期突然崩溃，而你却无法快速定位问题的根源。这种情况不仅浪费了宝贵的时间，还可能导致客户流失和收入损失。opentelemetry-java-instrumentation的出现，正是为了打破这种困境。它提供了一种统一的方式来收集和分析应用程序的性能数据，让开发者能够轻松地追踪请求的流动，识别瓶颈，并优化系统性能。通过使用这个工具，你不仅能够提升应用的稳定性，还能增强用户体验，最终实现业务的成功。

### opentelemetry-java-instrumentation是什么

opentelemetry-java-instrumentation是一个开源项目，旨在为Java应用程序提供自动化的监控和追踪功能。它基于OpenTelemetry标准，允许开发者轻松地集成分布式追踪和指标收集，从而获得对应用程序性能的深入洞察。这个工具支持多种流行的Java框架和库，帮助开发者在复杂的微服务环境中更好地理解和优化他们的应用。

### 入门示例

假设你正在开发一个电子商务平台，用户在下单时需要经过多个微服务的调用，如库存检查、支付处理和订单确认。使用opentelemetry-java-instrumentation，你可以在每个微服务中自动插入追踪代码，记录每个请求的处理时间和状态。比如，当用户下单时，系统会生成一个唯一的追踪ID，所有相关的服务调用都会关联到这个ID上。这样，当用户反馈订单处理缓慢时，你可以迅速追踪到具体的服务瓶颈，进行针对性的优化。

### opentelemetry-java-instrumentation Version 2.13.0版本更新了什么

Version 2.13.0针对OpenTelemetry SDK 1.47.0进行了优化，许多构件的版本号附加了“-alpha”后缀，表明它们仍处于alpha阶段，可能会有重大变化。此版本移除了之前两个版本中弃用的类和方法，并引入了新的jdk.httpserver的自动化监控功能。此外，数据库客户端指标和运行时指标也得到了增强，提升了整体性能和稳定性。

### 更新日志

此版本针对OpenTelemetry SDK 1.47.0进行了优化。请注意，许多构件的版本号附加了“-alpha”后缀，表明它们仍处于alpha质量，未来可能会有重大变化。  
#### 迁移说明  
- io.opentelemetry.instrumentation.api.incubator.semconv.util.SpanNames已被弃用，替换为稳定的io.opentelemetry.instrumentation.api.semconv.util.SpanNames。  
- 为了稳定HTTP库的监控，之前两个版本中弃用的类和方法已被移除。  
- 弃用的Dubbo监控方法已被移除。  

#### 🌟 新的javaagent监控  
- jdk.httpserver监控功能。  

#### 🌟 新的库监控  
- jdk.httpserver监控功能。  

#### 📈 增强功能  
- 为Lettuce监控添加数据库客户端指标。  
- 稳定io.opentelemetry.instrumentation.api.semconv.util.SpanNames。  
- 在HTTP服务器监控中实现ExtendedTextMapGetter。  
- 在Kafka客户端监控中实现ExtendedTextMapGetter。  
- 从进程资源属性值中清除系统属性秘密。  
- 为AWS SDK 2.x DynamoDB监控添加数据库客户端指标。  
- 为Spring Boot启动器添加运行时指标。  

#### 🛠️ Bug修复  
- 修复akka关闭时挂起的问题。  
- 修复z/OS上的MalformedInputException。  
- 修复AWS SDK监控中的作用域泄漏。  
- 修复当OTEL_SDK_DISABLED设置为true时MapConverter未初始化的问题。  
- 修复Android上的logback附加器。  
- 修复Ktor 3的CallLogging和StatusPages未包含Trace ID的问题。  
- 修复Micrometer-bridge破坏Spring Actuator指标的问题。  

#### 🙇 感谢  
本次发布得益于众多贡献者的精彩想法和出色的拉取请求。  

### 总结

在Version 2.13.0中，opentelemetry-java-instrumentation不仅针对OpenTelemetry SDK进行了优化，还引入了新的监控功能和增强了现有功能，解决了多个bug，提升了整体性能和稳定性。这些更新将帮助开发者更好地监控和优化他们的Java应用程序。