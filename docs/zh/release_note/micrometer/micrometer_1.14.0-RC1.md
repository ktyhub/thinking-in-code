# micrometer 1.14.0-RC1
### 为什么要使用micrometer

在当今快速发展的技术环境中，监控和性能优化已成为企业成功的关键。然而，许多开发者在选择监控工具时面临着一个矛盾：市面上有太多选择，如何找到既强大又易于使用的解决方案？Micrometer正是为了解决这一矛盾而生。它不仅提供了丰富的功能，还能与多种监控系统无缝集成，让开发者在复杂的环境中轻松掌控应用性能。

### micrometer是什么

Micrometer是一个用于应用程序监控的库，它提供了一种简单的方式来收集和报告应用程序的性能指标。它支持多种监控系统，如Prometheus、Graphite和InfluxDB，使得开发者可以轻松地将应用程序的性能数据发送到他们选择的监控平台。

### 入门示例

想象一下，你正在开发一个电商平台，用户在购物时的体验至关重要。使用Micrometer，你可以轻松地监控用户在结账过程中的每一步。通过在代码中添加简单的注解，你可以记录每个步骤的响应时间和成功率，从而快速识别出性能瓶颈。例如：

```java
@Timed(value = "checkout.time", description = "Time taken to complete checkout")
public void checkout(User user, Cart cart) {
    // 结账逻辑
}
```

这样，你不仅能实时监控结账过程的性能，还能在出现问题时迅速采取措施，提升用户体验。

### micrometer 1.14.0-RC1版本更新了什么

Micrometer 1.14.0-RC1版本引入了一系列新特性和改进，包括：支持将TestObservationRegistry暴露为AssertJ的AssertProvider，改进了ObservationContextAssert的IDE体验，优化了合并Tags和KeyValues实例的性能，并允许用户自定义调度器来定期绑定KafkaMetrics。此外，还修复了一些bug，提升了整体稳定性。

### 更新日志

这是一个预发布里程碑，旨在进行早期测试。  
## ⭐ 新特性  
- 将TestObservationRegistry暴露为AssertJ的AssertProvider  
- 使用实际和预期消息的失败来改善ObservationContextAssert的IDE体验  
- 将@Nonnull(when = When.MAYBE)替换为@CheckForNull  
- 提醒Prometheus计量器注册失败  
- 改进合并两个Tags/KeyValues实例的性能  
- 允许用户提供自定义调度器以定期绑定KafkaMetrics  
- 允许为HighCardinalityTagsDetector指定meterNameConsumer  
- 虚拟线程指标  
- 允许tagsBasedOnJoinPoint覆盖CountedAspect的extraTags  
- 可配置的_source.enabled Elastic映射属性  

## 🐞 Bug修复  
- 恢复Timed.percentiles()在TimedAspect中的处理  

## 🔨 依赖升级  
- 将com.google.cloud:google-cloud-monitoring从3.49.0升级到3.52.0  
- 将com.google.cloud:google-cloud-monitoring从3.52.0升级到3.53.0  
- 将com.google.cloud:libraries-bom从26.45.0升级到26.48.0  
- 将com.google.auth:google-auth-library-oauth2-http从1.24.1升级到1.28.0  
- 将com.netflix.spectator:spectator-reg-atlas从1.7.19升级到1.7.21  
- 将com.signalfx.public:signalfx-java从1.0.45升级到1.0.46  
- 将dropwizard-metrics从4.2.27升级到4.2.28  
- 将software.amazon.awssdk:cloudwatch从2.27.17升级到2.28.18  
- 将software.amazon.awssdk:cloudwatch从2.28.18升级到2.28.19  

### 总结

Micrometer 1.14.0-RC1版本带来了多项新特性和性能优化，旨在提升开发者的使用体验和应用程序的监控能力。

### 爆款标题

- "Micrometer 1.14.0-RC1：新特性与性能优化，提升监控体验！"
- "探索Micrometer 1.14.0-RC1：让你的应用监控更智能！"
- "Micrometer 1.14.0-RC1发布：新功能助力开发者提升性能！"
- "全新Micrometer 1.14.0-RC1：监控工具的革命性升级！"
- "Micrometer 1.14.0-RC1：让监控变得简单高效的秘密武器！"