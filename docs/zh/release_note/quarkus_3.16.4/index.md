# quarkus 3.16.4
为什么要使用quarkus

在当今快速发展的软件开发环境中，开发者面临着不断变化的需求和技术挑战。传统的Java框架往往显得臃肿，难以适应现代微服务架构的灵活性和高效性。而Quarkus的出现，正是为了打破这种僵局。它不仅提供了极致的性能和快速的启动时间，还支持云原生开发，让开发者能够轻松构建和部署微服务应用。使用Quarkus，开发者可以在享受Java生态系统的同时，获得更快的开发速度和更低的资源消耗，这种矛盾的解决方案让它成为了现代开发的理想选择。

quarkus是什么

Quarkus是一个为Java虚拟机（JVM）和原生云环境优化的全栈框架。它旨在为Java开发者提供一个现代化的开发体验，支持微服务架构，具有快速启动时间和低内存占用。Quarkus集成了众多流行的Java库和框架，允许开发者使用熟悉的工具和技术，同时提供了对Kubernetes和云原生环境的原生支持。

入门示例

想象一下，你是一名开发者，正在为一家初创公司构建一个在线购物平台。你希望这个平台能够快速响应用户请求，并且能够轻松扩展。使用Quarkus，你可以快速创建一个RESTful API，处理用户的购物请求。通过Quarkus的命令行工具，你可以生成一个新的项目，并使用其内置的扩展来集成数据库和消息队列。比如，你可以使用Hibernate ORM来处理数据库操作，使用Kafka来处理异步消息。这样，你不仅能够快速开发出一个功能齐全的应用，还能确保它在生产环境中的高效运行。

quarkus 3.16.4版本更新了什么

Quarkus 3.16.4版本带来了多个重要更新，包括Flyway扩展生成Kubernetes资源的改进、对扩展成熟度模型的解释、Gradle构建服务的显式声明以及对Kotlin原生Jackson序列化的修复。此外，还修复了一些反射相关的错误和日志记录问题，提升了整体稳定性和性能。

更新日志

### 完整更新日志
- Flyway扩展生成Kubernetes资源时，现将quarkus.flyway.enabled视为运行时属性。
- 增加了扩展成熟度模型的解释和概念。
- 修复了Gradle 3.16缺少必需属性additionalForcedProperties的问题。
- 在QuarkusBuildTask中显式声明构建服务。
- 修复了反射无序列化器导致的ArrayIndexOutOfBoundsException错误。
- Gradle的buildForkOptions自quarkus 3.16.1起不再使用。
- 支持短小且不常见的字段名称，如set、get和is。
- 在Kubernetes资源中使用QUARKUS_FLYWAY_ACTIVE环境变量替代QUARKUS_FLYWAY_ENABLED。
- 修复了Kotlin原生Jackson序列化回归问题：EmptyList和EmptyMap缺失。
- 修复了在websockets-next中null代码导致的空指针异常。
- 在QuarkusBuildTask中使用BuildForkOptions。
- 注册Kotlin的空列表和映射以供反射使用。
- 在smallrye-jwt和oauth2扩展中记录未提供Bearer访问令牌时的日志。
- 修复了otel日志信号未设置时间戳的问题。
- 更新Infinispan至15.0.11.Final版本。
- 协调Vert.x 4.5.11的升级。
- 修正了图像文件名以解决图像损坏的问题。
- 更新smallrye-jwt至4.6.1版本。
- 修复了在JacksonCodeGenerator中注册类型时ParameterizedType参数的错误索引。
- 更新CacheJsonRPCService.java的引用。
- 修正了en-us的语法错误。

总结

Quarkus 3.16.4版本的更新记录显示了对Kubernetes支持的增强、扩展成熟度模型的明确化以及多个bug的修复，提升了框架的稳定性和开发者的使用体验。这些改进使得Quarkus在现代云原生应用开发中愈发重要。