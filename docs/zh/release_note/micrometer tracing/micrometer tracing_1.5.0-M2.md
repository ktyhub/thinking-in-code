# micrometer tracing 1.5.0-M2
### 为什么要使用micrometer tracing

在现代软件开发中，性能监控和故障排查是至关重要的。然而，随着微服务架构的普及，系统的复杂性也随之增加，开发者常常面临着难以追踪的性能瓶颈和难以定位的错误。micrometer tracing应运而生，它不仅能帮助开发者实时监控应用程序的性能，还能提供详细的调用链信息，揭示系统内部的复杂交互。想象一下，当你的应用程序出现问题时，能够迅速找到问题的根源，而不是在无尽的日志中苦苦寻找，这正是micrometer tracing所能带来的巨大优势。

### micrometer tracing是什么

micrometer tracing是一个用于微服务架构的性能监控工具，它提供了对应用程序请求的追踪能力。通过集成分布式追踪，开发者可以轻松地获取请求在各个服务之间的流转信息，从而更好地理解系统的性能表现和潜在问题。

### 入门示例

假设你正在开发一个电商平台，用户在下单时需要经过多个服务：用户服务、库存服务和支付服务。使用micrometer tracing，你可以在每个服务中集成追踪功能，记录用户请求的每一步。比如，当用户提交订单时，micrometer tracing会记录下请求的开始时间、经过的服务、每个服务的响应时间以及最终的结果。这样，当用户反馈支付失败时，你可以迅速查看追踪信息，找到是哪个服务导致了延迟或错误，从而进行针对性的优化。

### micrometer tracing 1.5.0-M2版本更新了什么

micrometer tracing 1.5.0-M2版本的更新包括：将里程碑版本发布到Maven Central，弃用ArrayListSpanProcessor，转而支持InMemorySpanExporter。此外，依赖项也进行了升级，包括opentelemetry-instrumentation和micrometer-bom的版本更新。最后，针对自动升级和依赖管理进行了优化，以提高项目的稳定性和可维护性。

### 更新日志

## ⚠️ 重要事项
- 将里程碑版本发布到Maven Central。

## ⭐ 新特性 / 增强
- 弃用ArrayListSpanProcessor，支持InMemorySpanExporter。

## 🔨 依赖项升级
- 将io.opentelemetry.instrumentation:opentelemetry-instrumentation-bom-alpha从2.11.0-alpha升级到2.12.0-alpha。
- 将io.micrometer:micrometer-bom从1.15.0-M1升级到1.15.0-M2。

## 📝 任务
- 不自动升级OTel依赖项，除非在“main”分支。
- 处理Dependabot自动合并的PR。
- 从Dependabot配置中移除1.2.x版本。
- 在Micrometer 1.15.0-M2发布到Maven Central后，移除里程碑仓库。
- 将actions/checkout从3升级到4。
- 将me.champeau.jmh:jmh-gradle-plugin从0.7.2升级到0.7.3。
- 将com.gradle.develocity从3.19升级到3.19.1。
- 将org.assertj:assertj-core从3.27.2升级到3.27.3。

### 总结

micrometer tracing 1.5.0-M2版本的更新不仅提升了依赖项的版本，增强了功能，还优化了项目的管理和维护，确保开发者能够在复杂的微服务环境中更高效地进行性能监控和故障排查。