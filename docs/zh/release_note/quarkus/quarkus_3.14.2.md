# quarkus 3.14.2
### Quarkus是什么？

Quarkus是一个为Java虚拟机（JVM）和原生云环境优化的开源框架。它旨在为开发人员提供一个快速、轻量级的开发体验，特别适合微服务架构。Quarkus通过结合传统的Java EE和Spring生态系统的最佳实践，提供了一个现代化的开发平台，支持快速启动和低内存占用，适合云原生应用。

### 为什么要使用Quarkus？

使用Quarkus的理由有很多。首先，它提供了极快的启动时间和低内存占用，使得微服务的部署更加高效。其次，Quarkus支持热重载，开发者可以在不重启应用的情况下进行代码更改，极大提高了开发效率。此外，Quarkus与众多流行的Java库和框架兼容，允许开发者利用现有的技术栈，同时享受现代化的开发体验。最后，Quarkus的原生编译支持使得应用可以在容器中以更小的体积运行，进一步提升了云环境中的性能。

### Quarkus 3.14.2版本更新了什么？

Quarkus 3.14.2版本带来了多项重要更新和修复，以下是一些关键改动：

- 修复了使用虚拟线程和Jacoco时的运行时异常。
- 解决了在使用OIDC时，包含分号的请求路径导致的未经身份验证请求的服务器异常。
- 修复了Spring Data API扩展属性表达式在处理列表时不工作的bug。
- 解决了在添加Maven依赖quarkus-opentelemetry后REST请求失败的问题。
- 修复了由于ObservabilityIntegrationRecorder使用自身方法获取路径而导致的越界问题。
- 解决了Kotlin junit参数化测试在3.13.0.CR1版本中不再工作的bug。
- 确保数组始终作为数组进行克隆。
- 增强了生成的reflect-config.json中的注释（原因）功能，并改善了层次注册跟踪。
- 修复了在native image构建时出现的多个问题。

### 更新日志

#### 完整更新日志

- [#31375](https://github.com/quarkusio/quarkus/issues/31375) - 使用虚拟线程和Jacoco时的运行时异常
- [#31802](https://github.com/quarkusio/quarkus/issues/31802) - 使用OIDC时，包含分号的请求路径导致的未经身份验证请求的服务器异常
- [#34395](https://github.com/quarkusio/quarkus/issues/34395) - Spring Data API扩展属性表达式处理列表时不工作
- [#41854](https://github.com/quarkusio/quarkus/issues/41854) - 添加Maven依赖quarkus-opentelemetry后REST请求失败
- [#41927](https://github.com/quarkusio/quarkus/pull/41927) - 修复由于ObservabilityIntegrationRecorder使用自身方法获取路径而导致的越界问题
- [#42098](https://github.com/quarkusio/quarkus/issues/42098) - Kotlin junit参数化测试在3.13.0.CR1版本中不再工作
- [#42109](https://github.com/quarkusio/quarkus/pull/42109) - 确保数组始终作为数组进行克隆
- [#42136](https://github.com/quarkusio/quarkus/pull/42136) - 如果在单例中注入原始类型Claim，则使OIDC构建失败
- [#42205](https://github.com/quarkusio/quarkus/pull/42205) - 在生成的reflect-config.json中启用注释（原因）并改善层次注册跟踪
- [#42228](https://github.com/quarkusio/quarkus/issues/42228) - 使用`-Dquarkus.native.report-errors-at-runtime`时native image构建失败
- [#42301](https://github.com/quarkusio/quarkus/issues/42301) - 包含Enum的记录在3.13.0中仍不支持`@ParameterizedTest`
- [#42394](https://github.com/quarkusio/quarkus/issues/42394) - 在无反射Jackson序列化程序中考虑`@JsonProperty`
- [#42466](https://github.com/quarkusio/quarkus/issues/42466) - quarkus.knative.app-config-map未将卷添加到ksvc模板
- [#42485](https://github.com/quarkusio/quarkus/pull/42485) - 修复quarkus.knative.app-config-map未将卷添加到ksvc模板
- [#42491](https://github.com/quarkusio/quarkus/pull/42491) - 更改dekorate模板以使用预期的knative对象
- [#42535](https://github.com/quarkusio/quarkus/pull/42535) - 添加“如何编写开发服务”的文档
- [#42578](https://github.com/quarkusio/quarkus/issues/42578) - OTEL + `quarkus.http.test-timeout` -> NullPointerException: 无法调用"io.vertx.core.spi.observability.HttpResponse.headers()"因为"httpResponse"为null
- [#42619](https://github.com/quarkusio/quarkus/issues/42619) - Jackson构建时序列化程序可以使用SerializableString字段名
- [#42651](https://github.com/quarkusio/quarkus/pull/42651) - 使用SerializableString字段名 + 在无反射Jackson序列化程序中支持`@JsonProperty`
- [#42661](https://github.com/quarkusio/quarkus/pull/42661) - 将Micrometer升级到1.13
- [#42684](https://github.com/quarkusio/quarkus/pull/42684) - 在OIDC cookie中编码URL
- [#42702](https://github.com/quarkusio/quarkus/pull/42702) - 更新到Infinispan 15.0.8.Final
- [#42703](https://github.com/quarkusio/quarkus/pull/42703) - 更新安全文档
- [#42705](https://github.com/quarkusio/quarkus/pull/42705) - 修复基于集合和泛型解析实体字段的问题
- [#42707](https://github.com/quarkusio/quarkus/pull/42707) - 更新OAuth2文档以反映Bearer token检查的变化
- [#42714](https://github.com/quarkusio/quarkus/issues/42714) - 在3.13中，无法通过pom.xml配置连续测试exclude-tags或exclude-engines
- [#42718](https://github.com/quarkusio/quarkus/pull/42718) - 将flyway.version从10.17.1升级到10.17.2
- [#42733](https://github.com/quarkusio/quarkus/issues/42733) - Qute模板异常未打印来源
- [#42745](https://github.com/quarkusio/quarkus/pull/42745) - 移除无用的枚举转换器分配
- [#42752](https://github.com/quarkusio/quarkus/issues/42752) - `quarkus`cli始终返回1作为插件命令的退出代码
- [#42755](https://github.com/quarkusio/quarkus/pull/42755) - 从单个GH运行器上传native构建统计信息
- [#42761](https://github.com/quarkusio/quarkus/issues/42761) - Qute: 忽略名称中包含空格的模板文件
- [#42766](https://github.com/quarkusio/quarkus/pull/42766) - 使用初始Quarkus Dev配置进行测试标签和引擎
- [#42773](https://github.com/quarkusio/quarkus/pull/42773) - 出于性能原因，移除jakarta.json.Json的使用
- [#42774](https://github.com/quarkusio/quarkus/issues/42774) - `quarkus.rest.jackson.optimization.enable-reflection-free-serializers=true`导致StartStopTS微服务应用的native构建失败
- [#42778](https://github.com/quarkusio/quarkus/issues/42778) - Rest Client（以前为反应式）继续使用DEFAULT_MAX_POOL_SIZE
- [#42779](https://github.com/quarkusio/quarkus/pull/42779) - QuarkusComponentTest: 改进程序化查找
- [#42783](https://github.com/quarkusio/quarkus/pull/42783) - Qute: 忽略名称中包含空格的模板文件
- [#42786](https://github.com/quarkusio/quarkus/issues/42786) - Quarkus CLI目录在添加/删除新插件时清空内容
- [#42787](