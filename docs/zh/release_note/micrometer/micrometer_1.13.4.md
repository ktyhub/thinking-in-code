# micrometer 1.13.4
### micrometer是什么

Micrometer是一个用于应用程序监控的指标库，它提供了一种简单的方式来收集和报告应用程序的性能指标。它支持多种监控系统，如Prometheus、Graphite和InfluxDB，使开发者能够轻松地集成和使用这些工具来监控应用的健康状况和性能。

### 为什么要使用micrometer?

使用Micrometer的主要原因在于它提供了一种统一的方式来收集和报告指标。无论是微服务架构还是单体应用，Micrometer都能帮助开发者轻松地获取应用的性能数据。此外，它的灵活性和可扩展性使得开发者可以根据需要选择不同的监控后端，确保应用的可观察性和可维护性。

### micrometer 1.13.4版本更新了什么

在Micrometer 1.13.4版本中，主要更新包括以下内容：

- 修复了BOM中包含无法解析的依赖项的问题。
- 解决了在Dynatrace仪表中可能缺失零百分位数的情况。
- 文档中修正了一个拼写错误。
- 更新了多个依赖项，包括com.netflix.spectator、dropwizard-metrics和org.postgresql等。

### 更新日志

## 🐞 Bug 修复
- BOM中包含一个无法解析的依赖项：io.micrometer:concurrency-tests
- Dynatrace仪表中可能缺失零百分位数

## 📔 文档
- 修正了meters.adoc中的一个拼写错误

## 🔨 依赖项升级
- 将com.netflix.spectator:spectator-reg-atlas从1.7.18升级到1.7.19
- 将dropwizard-metrics从4.2.26升级到4.2.27
- 将com.signalfx.public:signalfx-java从1.0.44升级到1.0.45

## 📝 任务
- 将org.apache.maven:maven-resolver-provider从3.9.8升级到3.9.9
- 将io.spring.develocity.conventions从0.0.19升级到0.0.20
- 将io.projectreactor:reactor-bom从2022.0.21升级到2022.0.22
- 将spring-javaformat从0.0.42升级到0.0.43
- 将org.postgresql:postgresql从42.7.3升级到42.7.4
- 修复GuavaCacheMetricsTest和CaffeineCacheMetricsTest

感谢所有参与此次发布的贡献者！