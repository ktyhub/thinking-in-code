# brave Brave 6
### 为什么要使用brave

在当今复杂的微服务架构中，追踪请求的流动变得至关重要。然而，许多开发者在选择追踪工具时面临着选择的困境：是选择一个功能强大但复杂的工具，还是一个简单易用但功能有限的工具？Brave正是解决这一矛盾的理想选择。它不仅提供了强大的追踪功能，还简化了集成过程，让开发者能够专注于构建高效的应用，而不是在工具的使用上耗费时间。

### brave是什么

Brave是一个开源的分布式追踪库，旨在帮助开发者轻松地收集和分析微服务之间的请求数据。它通过提供简单的API和灵活的配置选项，使得在Java应用中实现追踪变得更加高效。Brave与Zipkin紧密集成，能够帮助开发者快速识别性能瓶颈和错误，从而提升应用的整体性能。

### 入门示例

想象一下，你正在开发一个电商平台，用户在浏览商品时，系统需要从多个微服务获取数据。使用Brave，你可以轻松地在每个微服务中添加追踪代码。比如，在Spring Boot应用中，你只需在启动类中添加以下代码：

```java
@Bean
public Tracing tracing() {
    return Tracing.newBuilder()
        .localServiceName("ecommerce-service")
        .spanReporter(AsyncReporter.create(OkHttpSender.create("http://localhost:9411/api/v2/spans")))
        .build();
}
```

这样，当用户浏览商品时，Brave会自动记录每个请求的追踪信息，帮助你在Zipkin中查看请求的流动，快速定位问题。

### brave 6版本更新了什么

Brave 6移除了所有在Brave 5.x中被弃用的模块和功能，彻底摆脱了对io.zipkin.zipkin2:zipkin的依赖。此版本仍然支持Java 6，并通过brave-example库进行集成测试。此外，用户需要自行管理zipkin-reporter的版本，而不再依赖Brave。最后，Brave 6的体积更小，提升了性能。

### 更新日志

Brave 6移除了所有在Brave 5.x中被弃用的模块和功能，彻底摆脱了对io.zipkin.zipkin2:zipkin的依赖。此版本仍然支持Java 6，并通过brave-example库进行集成测试。用户需要自行管理zipkin-reporter的版本，而不再依赖Brave。Brave 6的体积更小，提升了性能。

### 总结

Brave 6的更新标志着一个重要的里程碑，简化了依赖关系，提升了性能，并确保了对旧版Java的支持。这些改进将使得开发者在追踪微服务时更加高效，助力于构建更高性能的应用。