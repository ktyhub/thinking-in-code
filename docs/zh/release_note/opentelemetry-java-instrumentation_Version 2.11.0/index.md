# opentelemetry-java-instrumentation Version 2.11.0
### 为什么要使用opentelemetry-java-instrumentation

在当今快速发展的软件开发环境中，监控和追踪应用程序的性能变得至关重要。然而，许多开发者在选择合适的监控工具时面临着困惑：是选择复杂的解决方案，还是忍受缺乏可见性的问题？opentelemetry-java-instrumentation正是为了解决这一矛盾而诞生的。它不仅提供了强大的追踪和监控功能，还能与现有的应用程序无缝集成，让开发者能够轻松获取关键的性能数据，从而优化应用程序的表现。

### opentelemetry-java-instrumentation是什么

opentelemetry-java-instrumentation是一个开源项目，旨在为Java应用程序提供自动化的监控和追踪功能。它基于OpenTelemetry标准，允许开发者轻松地收集、处理和传输应用程序的性能数据，帮助团队更好地理解和优化其软件系统的运行状况。

### 入门示例

想象一下，你正在开发一个电子商务平台，用户在浏览商品时，系统需要实时跟踪每个请求的响应时间和错误率。通过使用opentelemetry-java-instrumentation，你可以在几分钟内集成这一工具。只需在你的Spring Boot应用中添加相应的依赖，并在启动类中启用自动追踪，便可以开始收集数据。这样，你不仅能实时监控用户体验，还能在出现问题时迅速定位并解决。

### opentelemetry-java-instrumentation Version 2.11.0版本更新了什么

在Version 2.11.0中，opentelemetry-java-instrumentation针对OpenTelemetry SDK 1.45.0进行了优化。许多功能被标记为-alpha，表明它们仍处于实验阶段，可能会有破坏性更改。此外，更新中还包括对HTTP库的稳定化准备、多个类的重命名和分拆，以及对Spring、Hibernate等框架的增强支持。

### 更新日志

此版本针对OpenTelemetry SDK 1.45.0。

请注意，许多工件的版本号后附有-alpha后缀，反映出它们仍处于alpha质量，并将继续有破坏性更改。有关更多详细信息，请参见[VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning)。

#### 迁移说明
为尽快稳定HTTP库的仪器化：
- 在一些*TelemetryBuilder类中，addAttributeExtractor方法已被弃用并重命名为addAttributesExtractor（大多数方法已经如此命名）。
- setEmitExperimental*方法已被弃用并移至内部/实验类，具体位置请参见Javadoc @deprecated。
- ApacheHttpClient5*类已被弃用并重命名为ApacheHttpClient*。
- RatpackTelemetry*类已被弃用并拆分为RatpackClientTelemetry*和RatpackServerTelemetry*。
- SpringWebfluxTelemetry*类已被弃用并拆分为SpringWebfluxClientTelemetry*和SpringWebfluxServerTelemetry*。
- ArmeriaTelemetry*类已被弃用并拆分为ArmeriaClientTelemetry*和ArmeriaServerTelemetry*。
- *KtorClientTracing*和*KtorServerTracing*已被弃用并重命名为*KtorClientTelemetry*和*KtorServerTelemetry*。
- 实验性选择性属性spring-webflux.handler.type已被移除，以支持标准的code.*属性。

#### 📈 增强功能
- 将lettuce 5.1的db.namespace映射到db.name（除非使用实验性数据库语义稳定性选择）。
- Log4j2：添加填充代码属性的选项。
- 在jdk8上为jvm.thread.count指标填充jvm.thread.state属性。
- 更新Spring Scheduling的code.*属性提取，以支持最新版本的Spring Scheduling。
- 为更好的原生映像支持，将jctools类添加到reflect-config.json中。
- 支持Pulsar客户端发送带事务的消息。
- 实现读取简单的键值Logstash JSON标记属性。
- 为Ratpack 1.7+添加代理仪器化。
- 将spring-scheduling.enabled属性添加到spring-configuration-metadata.json中。
- 从spring-boot-autoconfigure源jar中移除类文件。
- 更新Camel规则，添加route.started、route.added和线程池的pool.core_size。
- 添加数据库客户端指标（当使用实验性数据库语义稳定性选择时）。
- 为aws v1_11 sdk添加dynamodb仪器。
- 从代理中移除公共后缀列表。
- 添加选项以禁用spring starter中的自动kafka拦截器配置。
- 为spring webmvc控制器跨度添加代码属性。
- Hibernate 6：在NoResultException上不记录错误。
- 添加对缺失的spring列表属性的支持。
- Ktor：支持设置自定义spanNameExtractor。
- 将"db.client.connections.usage"重命名为"db.client.connection.count"（当使用实验性数据库语义稳定性选择时）。
- 支持Struts 7.0。
- 支持最新的Ktor版本。

#### 🛠️ Bug修复
- Logback：不将日志事件的MDCPropertyMap设为不可变。
- 避免在redisson地址为null时引发异常。
- 添加关闭以修复CWE-404。

#### 🙇 感谢
此版本的发布得益于许多贡献者分享的精彩想法和出色的拉取请求。

### 总结

在这一版本更新中，opentelemetry-java-instrumentation不仅针对OpenTelemetry SDK进行了优化，还引入了多项重要的功能增强和bug修复，进一步提升了其在Java应用监控和追踪中的实用性和稳定性。