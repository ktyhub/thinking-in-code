# micrometer 1.15.0-M3
### 为什么要使用Micrometer

当你的代码在深夜崩溃时，你是否还在原始森林般的日志中举着火把寻找线索？当老板追问系统吞吐量时，你是否还在十几个监控系统间反复横跳？这就是现代开发者面临的监控悖论——我们比任何时候都更接近数据，却比任何时候都更难看清真相。Micrometer像一位精准的调音师，用标准化的API消除监控噪音，让Prometheus、Datadog、NewRelic等监控工具演奏出和谐的乐章，更让开发者从"监控适配地狱"中解脱，真正实现"一次埋点，全栈观测"的终极理想。

### Micrometer是什么

它是横亘在应用代码与监控系统之间的透明桥梁，一个为Java世界量身打造的度量指标门面（Metrics Facade）。就像货币兑换商处理各国纸币，Micrometer将应用指标自动转换为Prometheus的text格式、Datadog的HTTP报文或CloudWatch的统计数据，开发者只需关心业务逻辑的度量维度。

### 入门示例

想象你正在开发一个电商订单服务，需要监控下单接口的吞吐量和延迟。在Spring Boot应用中引入`micrometer-core`和`micrometer-registry-prometheus`依赖后：

```java
@RestController
public class OrderController {
    private final MeterRegistry registry;
    private final Timer orderTimer;

    public OrderController(MeterRegistry registry) {
        this.registry = registry;
        this.orderTimer = Timer.builder("order.process.time")
                .tag("service", "order")
                .register(registry);
    }

    @PostMapping("/order")
    public String createOrder(@RequestBody Order order) {
        return orderTimer.record(() -> {
            // 业务处理逻辑
            registry.counter("order.count", "payment", order.getPaymentType()).increment();
            return "Order created";
        });
    }
}
```

配置Prometheus端点后，访问`/actuator/prometheus`即可看到：
```
order_process_time_seconds_count{service="order"} 42
order_count_total{payment="alipay"} 30
```

### Micrometer 1.15.0-M3版本更新

1. 支持通过方法返回值动态生成监控标签（#3058）
2. 优化OpenTelemetry协议发送接口（#5994）
3. 新增仪表级指数直方图配置（#5459）
4. 修复Log4j2动态日志配置失效问题（#5901）
5. 升级AWS CloudWatch等10+核心依赖

### 更新日志

#### ⭐ 新特性
- 允许TimedAspect/CountedAspect根据方法结果创建标签 (#3058)
- 优化OtlpMetricsSender API设计 (#5994)
- 支持在仪表级别配置指数直方图 (#5459)

#### 🐞 Bug修复
- 修复Log4j2Metrics无法识别程序化添加LoggerConfig的问题 (#5901)
- 解决当分布值计数为0时出现非零均值错误日志的问题 (#5927)

#### 🔨 依赖升级
- google-auth-library-oauth2-http 1.32.1 → 1.33.1
- google-cloud-monitoring 3.58.0 → 3.60.0
- libraries-bom 26.54.0 → 26.56.0
- spectator-reg-atlas 1.8.4 → 1.8.6
- prometheus-metrics-bom 1.3.5 → 1.3.6
- AWS CloudWatch SDK 2.30.15 → 2.30.32

### 总结

本次更新带来三大革新：动态标签赋予监控更多维度，Otlp协议优化提升可观测性基建兼容性，指数直方图配置让数据聚合更精准。同时修复关键日志组件集成问题，并全面升级云服务SDK，为分布式系统监控注入新的活力。