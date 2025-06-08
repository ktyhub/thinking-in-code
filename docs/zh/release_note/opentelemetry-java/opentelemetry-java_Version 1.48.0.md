# opentelemetry-java Version 1.48.0
# 为什么要使用opentelemetry-java  
在微服务架构中，开发团队常陷入"监控数据孤岛"的困境——每个服务使用不同的埋点工具，导致性能指标碎片化。当线上突发流量导致订单服务雪崩时，运维团队需要同时在Zipkin、Prometheus、Jaeger之间切换排查，宝贵的时间在工具跳转中流逝。OpenTelemetry-java正是为解决这种割裂而生，它像一把瑞士军刀，用统一的标准切割开可观测性的迷雾。更关键的是，它让开发者无需在"功能丰富性"和"维护成本"之间做选择题，一个SDK即可对接所有主流监控系统，将埋点代码维护成本降低70%以上。

# opentelemetry-java是什么  
OpenTelemetry-java是CNCF（云原生计算基金会）孵化的开源项目，提供自动化的应用性能监控数据采集能力。它通过标准化的API和SDK，帮助Java应用生成、收集并导出追踪（Traces）、指标（Metrics）、日志（Logs）三类遥测数据，支持对接Jaeger、Prometheus等主流观测平台，是构建云原生应用可观测性的基础设施。

# 入门示例  
**真实场景**：某电商平台需要监控订单服务的SQL查询性能  
```java
// Maven依赖
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-api</artifactId>
    <version>1.48.0</version>
</dependency>

// 代码示例
Span orderSpan = tracer.spanBuilder("processOrder")
    .setAttribute("user.id", userId)
    .startSpan();
try (Scope scope = orderSpan.makeCurrent()) {
    // 执行数据库查询
    executeSQL("SELECT * FROM orders WHERE user_id = ?", userId);
} finally {
    orderSpan.end();
}

// 初始化配置（以导出到Jaeger为例）
OpenTelemetrySdk.builder()
    .setTracerProvider(
        SdkTracerProvider.builder()
            .addSpanProcessor(BatchSpanProcessor.builder(
                JaegerGrpcSpanExporter.builder()
                    .setEndpoint("http://jaeger:14250")
                    .build()).build())
            .build())
    .buildAndRegisterGlobal();
```

# opentelemetry-java Version 1.48.0版本更新  
1. 引入声明式配置API，重构配置属性命名空间  
2. 优化批量日志/跨度处理器队列溢出警告机制  
3. 修复节流日志器重复打印问题  
4. 移除过时的指标基数限制API  
5. 增强OTLP导出器类加载器支持  

# 更新日志
### API
- 为`LogRecordBuilder`新增实用的日志属性记录方法

#### Incubator
- 引入ConfigProvider API，将`StructuredConfigProperties`重命名为`DeclarativeConfigProperties`并迁移至`opentelemetry-api-incubator`模块，`FileConfiguration`更名为`DeclarativeConfiguration`

### SDK
- 当BatchLogRecordProcessor和BatchSpanProcessor的`maxExportBatchSize`超过`maxQueueSize`时，记录警告并自动调整
- 修复`ThrottlingLogger`每分钟重复记录的问题

#### Metrics
- 移除已废弃的`SdkMeterProviderUtil#setCardinalitylimit` API

#### Traces
- 修复跨度事件丢弃属性计数不准确的缺陷

#### Exporters
- OTLP导出器移除被替换的`otel.java.experimental.exporter.memory_mode`配置
- OTLP导出器将发送参数抽取到配置载体类（孵化阶段API）
- 新增OTLP导出器服务类加载器设置支持

### Tooling
- 更新Android Animal Sniffer最低API版本至23

# 总结  
1.48.0版本聚焦于配置管理的革命性重构，通过声明式API提升可维护性。关键改进包括：优化处理器队列预警机制、修复多个核心模块的稳定性问题、增强OTLP导出器的扩展能力，标志着OpenTelemetry-java在云原生监控领域的成熟度迈上新台阶。