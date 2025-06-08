# mockito v5.16.1
# 为什么要使用opentelemetry-java-instrumentation
当你的Java应用在深夜突然崩溃，而你的运维团队还在通过翻查日志大海捞针时；当你的微服务链路复杂到连架构师都难以描绘完整调用关系时——这正是现代开发者最真实的困境。传统监控工具如同盲人摸象，而opentelemetry-java-instrumentation就像为系统装上了全息投影仪。它不仅能自动捕获每个跨服务调用的黄金数据，更以零代码侵入的方式将分布式追踪、指标采集和日志关联熔铸成三位一体的观测体系。当其他方案还在为兼容性焦头烂额时，它已悄然成为云原生时代的观测标准语言。

# opentelemetry-java-instrumentation是什么
OpenTelemetry Java Instrumentation是面向Java应用的自动埋点工具集，通过Java Agent或程序化接入方式，无需修改业务代码即可采集分布式追踪数据、指标和日志。它遵循OpenTelemetry标准协议，提供对主流框架的开箱即用支持，是构建云原生可观测性体系的核心组件。

# 入门示例
**场景**：电商系统中订单服务调用支付服务时出现延迟异常  
1. 在Spring Boot应用的启动参数添加：
```bash
-javaagent:opentelemetry-javaagent.jar
-Dotel.service.name=order-service
-Dotel.traces.exporter=logging
```
2. 支付服务配置：
```java
OpenTelemetrySdk.builder()
    .setTracerProvider(SdkTracerProvider.builder()
        .addSpanProcessor(SimpleSpanProcessor.create(LoggingSpanExporter.create()))
    .buildAndRegisterGlobal();
```
3. 当用户下单时，控制台将输出完整的调用链路：
```
'POST /createOrder' : 1500ms
|-- 'POST /payment/gateway' : 1200ms
|   |-- 'DB INSERT payment_record' : 300ms
```

# Version 2.14.0更新亮点
1. 新增AWS Bedrock生成式AI服务监控支持  
2. 支持Spring Pulsar消息组件自动埋点  
3. 优化HTTP客户端查询参数脱敏机制  
4. 修复Akka/Pekko框架的多线程上下文传播缺陷  
5. 引入@WithSpan注解强制创建新追踪上下文的能力

# 更新日志

## 版本目标
本版本基于 OpenTelemetry SDK 1.48.0 构建。

请注意，许多构件仍带有 `-alpha` 版本后缀，表明其处于 alpha 阶段并可能包含破坏性变更。详细版本策略请参阅 [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning)。

## 迁移说明
- `java.net.http.HttpClient` 插件的包名从 `io.opentelemetry.instrumentation.httpclient` 变更为 `io.opentelemetry.instrumentation.javahttpclient`
- 实验性指标 `jvm.buffer.memory.usage` 更名为 `jvm.buffer.memory.used` 以符合语义约定
- 简化 Http `*TelemetryBuilder` 的泛型签名

## 新增Javaagent插件
- 支持 AWS Bedrock 服务监控（遵循[Gen AI语义约定](https://github.com/open-telemetry/semantic-conventions/tree/main/docs/gen-ai#semantic-conventions-for-generative-ai-systems)）
- ActiveJ HTTP 服务端监控
- Spring Pulsar 消息组件监控

## 新增库插件
- AWS Bedrock 客户端监控（遵循Gen AI语义约定）

## 功能增强
- Spring Scheduling 支持虚拟线程
- HTTP 客户端查询参数值脱敏
- JMX指标定义支持属性小写修饰符
- Pekko 路由匹配优化
- 支持最新 Axis2 版本
- 新增 Lambda Java接口 HandleStreamRequest 监控
- 移除gRPC内部API依赖
- 增加禁用gRPC消息级事件选项
- `@WithSpan` 支持脱离当前上下文新建追踪链路

## 缺陷修复
- 修复 Akka 插件的 `NoSuchElementException` 异常
- 修复 Spring Boot Starter 在 Logback 中无法注入 `trace_id` 的问题
- 优化 OpenJ9 的动态调用机制
- 修复 Pekko 服务超时场景的跨度记录
- 避免覆盖 Log4j MDC 中的用户自定义 `trace_id`
- 修正 gRPC 消息ID属性记录

# 版本总结
2.14.0版本聚焦AI服务监控与异步框架优化，新增AWS Bedrock深度支持，强化Spring生态集成，同时修复多个关键框架的上下文传播缺陷。本次更新既拓展了生成式AI时代的观测边界，又夯实了Java高并发场景的监控可靠性，为现代化应用提供了更完备的可观测性基座。