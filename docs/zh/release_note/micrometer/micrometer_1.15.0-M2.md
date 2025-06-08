# micrometer 1.15.0-M2
### 为什么要使用micrometer

在现代软件开发中，性能监控和指标收集变得至关重要。然而，许多开发者在选择监控工具时常常面临一个矛盾：是选择一个功能强大但复杂的工具，还是一个简单易用但功能有限的工具？Micrometer恰好填补了这个空白。它不仅提供了丰富的功能，还能轻松集成到各种应用程序中，让开发者在监控性能的同时，保持代码的简洁和可维护性。选择Micrometer，意味着你可以在复杂的监控需求和简单的实现之间找到完美的平衡。

### micrometer是什么

Micrometer是一个用于应用程序性能监控的工具，它提供了一个简单的API来收集和报告指标。它支持多种监控系统，如Prometheus、Graphite和InfluxDB，允许开发者轻松地将应用程序的性能数据发送到这些系统中进行分析和可视化。通过Micrometer，开发者可以更好地理解应用程序的运行状态，从而优化性能和用户体验。

### 入门示例

假设你正在开发一个电商网站，希望监控用户的购买行为。使用Micrometer，你可以轻松地在代码中添加计时器来记录每个购买请求的处理时间。以下是一个简单的示例：

```java
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

public class PurchaseService {
    private final MeterRegistry meterRegistry;

    public PurchaseService(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    public void purchaseItem(String itemId) {
        Timer timer = meterRegistry.timer("purchase.time");
        timer.record(() -> {
            // 模拟购买逻辑
            processPurchase(itemId);
        });
    }

    private void processPurchase(String itemId) {
        // 处理购买逻辑
    }
}
```

在这个示例中，`purchase.time`计时器会记录每次购买操作的处理时间，帮助你分析和优化购买流程的性能。

### micrometer 1.15.0-M2版本更新了什么

Micrometer 1.15.0-M2版本带来了几个重要更新，包括将里程碑发布到Maven Central、移除对404/301状态的特殊处理、以及弃用micrometer-registry-signalfx。此外，新增了直接调用equals方法的功能，改进了Timer和LongTaskTimer在LoggingMeterRegistry中的输出格式。

### 更新日志

## ⚠️ 重要事项
- 将里程碑发布到Maven Central。
- 移除OkHttp仪器中的404/301状态的特殊处理。
- 弃用micrometer-registry-signalfx。

## ⭐ 新特性 / 增强
- 使用直接的equals调用替代Objects.equals包装。
- 移除JDK HTTP客户端仪器中的404/301状态的特殊处理。
- 在LoggingMeterRegistry中使Timer和LongTaskTimer的输出格式相似。
- 移除Jetty客户端仪器中的404和重定向状态的特殊处理。
- 创建SignalFxMeterRegistry时记录弃用警告。
- 在CountedAspect和TimedAspect中记录指标录制失败。
- 支持ExecutorServiceMetrics中的AutoShutdownDelegatedExecutorService。
- 当调用LoggerContext#reconfigure时重新绑定Log4j2Metrics。
- 通过OTLP注册表以任何协议发送指标。
- 改进DefaultLongTaskTimer在无序停止时的平均性能。

## 🐞 错误修复
- 修复Log4j2Metrics在多个注册表和非根记录器中无法正常工作的问题。
- 修复LoggingMeterRegistry中LongTaskTimer输出的问题。
- 修复LoggingMeterRegistry中Timer和FunctionTimer之间的单位不一致问题。
- 修复Distribution bucket_counts总和不等于计数的问题。

## 📔 文档
- 从Stackdriver文档中移除过时的GraalVM原生镜像编译部分。
- 更新文档以正确描述MeterFilter的合同。

## 🔨 依赖升级
- 将com.google.auth:google-auth-library-oauth2-http从1.30.1升级到1.32.1。
- 将software.amazon.awssdk:cloudwatch从2.29.46升级到2.30.15。
- 将com.netflix.spectator:spectator-reg-atlas从1.8.3升级到1.8.4。
- 将com.signalfx.public:signalfx-java从1.0.47升级到1.0.49。
- 将org.apache.httpcomponents.client5:httpclient5从5.4.1升级到5.4.2。

## 📝 任务
- 添加测试以验证Apache (Async) HTTP客户端没有对404的特殊处理。
- 将构建JDK升级到23.0.2。
- 修复JDK17+的gradle check问题。

### 总结

Micrometer 1.15.0-M2版本的更新不仅修复了多个错误，还引入了新的特性和增强功能，提升了性能监控的灵活性和准确性。这些改进将帮助开发者更好地集成和使用Micrometer，进一步优化应用程序的性能监控。