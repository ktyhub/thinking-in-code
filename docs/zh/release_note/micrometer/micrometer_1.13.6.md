# micrometer 1.13.6
### 为什么要使用micrometer

在这个数据驱动的时代，企业面临着前所未有的挑战：如何在海量信息中提取有价值的洞察？想象一下，你的应用程序在高峰时段崩溃，而你却无从得知原因。使用Micrometer，开发者可以轻松地监控应用性能，捕捉关键指标，及时发现问题。它不仅能帮助你优化性能，还能为决策提供数据支持，避免因信息滞后而导致的损失。选择Micrometer，就是选择了一条通往高效与透明的道路。

### micrometer是什么

Micrometer是一个用于应用程序监控的指标收集库，旨在为Java应用提供简单而强大的度量功能。它支持多种监控系统，如Prometheus、Graphite和InfluxDB，允许开发者轻松集成和使用。通过Micrometer，开发者可以收集、记录和分析应用程序的性能数据，从而优化系统的运行效率。

### 入门示例

想象一下，你正在开发一个在线购物平台。为了确保用户体验流畅，你决定监控每个请求的响应时间。使用Micrometer，你可以在Spring Boot应用中轻松集成，只需添加以下代码：

```java
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingController {
    private final MeterRegistry meterRegistry;

    public ShoppingController(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @GetMapping("/purchase")
    public String purchase() {
        long startTime = System.currentTimeMillis();
        // 处理购买逻辑
        long endTime = System.currentTimeMillis();
        meterRegistry.timer("purchase.time").record(endTime - startTime, TimeUnit.MILLISECONDS);
        return "Purchase successful!";
    }
}
```

通过这种方式，你可以实时监控购买请求的响应时间，及时发现并解决性能瓶颈。

### micrometer 1.13.6版本更新了什么

Micrometer 1.13.6版本带来了多项重要更新，包括改进了StepBucketHistogram的内存使用，修复了Java 11 HttpClient在sendAsync调用中未重新抛出异常的问题，优化了时间单位映射以适应Dynatrace，解决了Aspects的tagsBasedOnJoinPoint可能抛出未捕获异常的情况，并在OTLP注册中设置了用户代理头。

### 更新日志

## ⭐ 新特性 / 增强
- 改进了StepBucketHistogram的内存使用。

## 🐞 Bug修复
- 修复了Java 11 HttpClient在sendAsync调用中未重新抛出异常的问题。
- 将时间单位映射到Dynatrace的UCUM格式。
- 解决了Aspects的tagsBasedOnJoinPoint可能抛出未捕获异常的问题。
- 在OTLP注册中设置了用户代理头。
- 修复了MicrometerHttpRequestExecutor在Apache HC 5.4中无法进行仪器化的问题。

## 📔 文档
- 移除了Micrometer文档中重复的上下文传播文档。
- [OTLP注册] 文档批量大小配置。

## 🔨 依赖升级
- 将dropwizard-metrics从4.2.27升级到4.2.28。
- 将context-propagation升级到1.1.2。

## 📝 任务
- 将org.junit:junit-bom从5.10.4升级到5.10.5。
- 将me.champeau.gradle:japicmp-gradle-plugin从0.4.3升级到0.4.4。
- 将jersey3从3.0.12升级到3.0.16。
- 不再包含以前删除的micrometer-samples-jetty12子项目。
- 将spring从5.3.37升级到5.3.39。
- 将org.junit.platform:junit-platform-launcher从1.10.4升级到1.10.5。
- 将org.mongodb:mongodb-driver-sync从4.11.3升级到4.11.4。
- 将uk.org.webcompere:system-stubs-jupiter从2.1.6升级到2.1.7。
- 将io.netty:netty-bom从4.1.112.Final升级到4.1.114.Final。
- 将io.spring.develocity.conventions从0.0.20升级到0.0.22。
- 将org.junit.platform:junit-platform-launcher从1.10.3升级到1.10.4。
- 将jetty9从9.4.55.v20240627升级到9.4.56.v20240826。
- 将junit从5.10.3升级到5.10.4。
- 将spring从5.3.37升级到5.3.39。

### 总结

Micrometer 1.13.6版本通过改进内存使用、修复多个Bug、优化文档和升级依赖，为开发者提供了更稳定和高效的监控工具。

### 爆款标题

- "Micrometer 1.13.6：内存优化与Bug修复，提升监控效率！"
- "新版本Micrometer 1.13.6发布，Java 11 HttpClient问题已解决！"
- "Micrometer 1.13.6：让你的应用监控更轻松，内存使用大幅改善！"
- "升级到Micrometer 1.13.6，享受更流畅的监控体验！"
- "Micrometer 1.13.6版本更新：Bug修复与依赖升级，监控更强大！"