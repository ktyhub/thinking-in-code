# opentelemetry-java Version 1.45.0
### 为什么要使用opentelemetry-java

在当今复杂的软件生态系统中，开发者面临着前所未有的挑战。应用程序的性能监控和故障排查变得愈发困难，尤其是在微服务架构中。opentelemetry-java应运而生，成为解决这一矛盾的强大工具。它不仅提供了全面的可观察性，还能帮助开发者在问题发生时迅速定位根源，提升系统的稳定性与用户体验。选择opentelemetry-java，意味着选择了一条通往高效开发与运维的道路。

### opentelemetry-java是什么

opentelemetry-java是一个开源的观察性框架，旨在为Java应用程序提供统一的跟踪、度量和日志记录功能。它支持多种后端系统，允许开发者轻松集成和使用，帮助他们更好地理解和优化应用程序的性能。

### 入门示例

想象一下，你在开发一个电商平台，用户在购物车中添加商品时，系统需要实时跟踪这一过程。使用opentelemetry-java，你可以在添加商品的代码中插入跟踪逻辑，记录每个操作的时间和状态。以下是一个简单的代码示例：

```java
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;

public class ShoppingCart {
    private static final Tracer tracer = OpenTelemetry.getGlobalTracer("shopping-cart");

    public void addItemToCart(String itemId) {
        Span span = tracer.spanBuilder("addItemToCart").startSpan();
        try {
            // 添加商品到购物车的逻辑
            System.out.println("Adding item: " + itemId);
        } finally {
            span.end();
        }
    }
}
```

在这个示例中，`addItemToCart`方法会创建一个新的跟踪跨度，帮助你监控这一操作的性能。

### opentelemetry-java Version 1.45.0版本更新了什么

在1.45.0版本中，opentelemetry-java引入了多个重要更新，包括为SpanBuilder添加了便捷方法以设置属性，扩展了TextMapGetter以支持实验性的GetAll()方法。此外，SimpleSpanProcessor和SimpleLogRecordProcessor都进行了线程安全的同步处理，确保了数据的安全导出。最后，OTLP导出器也进行了多项修复和更新，以提升整体性能和稳定性。

### 更新日志

#### API
- 为SpanBuilder添加了便捷方法`setAttribute(Attribute<Long>, int)`，与Span中的现有便捷方法相匹配。
- 扩展了TextMapGetter，增加了实验性的GetAll()方法，并在W3CBaggagePropagator中实现了该方法的使用。

#### SDK
##### 跟踪
- 为SimpleSpanProcessor添加了同步处理，以确保跨度的线程安全导出。

##### 指标
- 延迟初始化ReservoirCells。

##### 日志
- 为SimpleLogRecordProcessor添加了同步处理，以确保日志的线程安全导出。

##### 导出器
- OTLP：将opentelementry-proto更新至1.4。
- OTLP：重命名内部Marshaler#writeJsonToGenerator方法，以允许jackson的runtimeOnly依赖。
- OTLP：修复JSON的重复字符串序列化问题。
- OTLP：修复缺失的unsafe可用性检查。

#### 扩展
- 声明式配置：在引用自定义组件时不再需要空对象。

#### 工具
- 为实验性类添加了javadoc模板内部注释v2。
- 更新develocity配置。

### 总结

在opentelemetry-java的1.45.0版本中，开发者们可以期待更便捷的API、更安全的SDK处理以及更高效的导出器功能。这些更新不仅提升了框架的可用性，也为开发者提供了更强大的工具，以应对日益复杂的应用程序监控需求。