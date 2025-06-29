# Spring-Boot v3.3.3
```markdown
## ⭐ 新功能

- 在 `JavaVersion` 枚举中添加 `TWENTY_THREE` [#41716](https://github.com/spring-projects/spring-boot/issues/41716)

## 🐞 Bug 修复

- 扩展 `DefaultErrorAttributes` 并重写 `getErrorAttributes()` 会被调用两次 [#41995](https://github.com/spring-projects/spring-boot/issues/41995)
- 使用 WebFlux 时，当 `BindingResult` 异常是 `ResponseStatusException` 的原因时，`server.error.include-binding-errors=ALWAYS` 不再有效 [#41987](https://github.com/spring-projects/spring-boot/issues/41987)
- `PropertiesLauncher` 在将 `BOOT-INF/lib` 中的 jar 添加到类路径时不尊重 `classpath.idx` [#41970](https://github.com/spring-projects/spring-boot/issues/41970)
- SBOM 端点的 Web 扩展在 `/cloudfoundryapplication` 下不可用 [#41890](https://github.com/spring-projects/spring-boot/issues/41890)
- 启动器的 `ClassLoader` 不再具有并行能力 [#41873](https://github.com/spring-projects/spring-boot/issues/41873)
- `spring-boot-testcontainers` 在 AOT 处理期间导致不必要的容器初始化 [#41859](https://github.com/spring-projects/spring-boot/issues/41859)
- 当类路径中没有 `Reactor` 时，`ReactiveElasticsearchRepositoriesAutoConfiguration` 应该退让 [#41678](https://github.com/spring-projects/spring-boot/issues/41678)
- 当 `classifier` 设置为非默认值时，`mvn spring-boot:build-image` 失败 [#41661](https://github.com/spring-projects/spring-boot/issues/41661)
- Spring Boot Maven 插件 AOT 无法处理包含 `module-info.java` 的 Maven 模块 [#41647](https://github.com/spring-projects/spring-boot/issues/41647)
- 当发布选项为 false 时，Maven 插件配置中的 `Docker publishRegistry` 仍被验证 [#41641](https://github.com/spring-projects/spring-boot/issues/41641)
- 使用 Gradle 的新文件权限 API 的实现方式阻止了旧 API 的移除 [#41607](https://github.com/spring-projects/spring-boot/issues/41607)
- 一些 `@ControllerEndpoint` 和 `@RestControllerEndpoint` 基础设施未被弃用 [#41596](https://github.com/spring-projects/spring-boot/pull/41596)
- 由于缺少键类型，`EnumMap` 的构造函数绑定失败 [#41563](https://github.com/spring-projects/spring-boot/issues/41563)

## 📔 文档

- 改进记录属性描述和默认值的文档 [#41989](https://github.com/spring-projects/spring-boot/issues/41989)
- 解释启用虚拟线程会禁用传统线程池 [#41976](https://github.com/spring-projects/spring-boot/issues/41976)
- 在参考文档中统一 `MyUserHandler` 的代码示例 [#41949](https://github.com/spring-projects/spring-boot/issues/41949)
- 记录环境变量属性映射何时适用 [#41945](https://github.com/spring-projects/spring-boot/issues/41945)
- 更准确地描述切片测试注释的 Javadoc 中考虑的组件 [#41935](https://github.com/spring-projects/spring-boot/issues/41935)
- 修复重复的单词 [#41920](https://github.com/spring-projects/spring-boot/issues/41920)
- 记录在直接使用模拟服务器自定义器时需要显式重置模拟服务器 [#41849](https://github.com/spring-projects/spring-boot/issues/41849)
- 修正“使用 Maven 运行您的应用程序”中的语法错误 [#41840](https://github.com/spring-projects/spring-boot/pull/41840)
- 更清楚地记录当设置 `spring.data.redis.url` 时不使用用户名和密码 [#41748](https://github.com/spring-projects/spring-boot/issues/41748)
- Pulsar 配置在元数据中没有默认值 [#41683](https://github.com/spring-projects/spring-boot/issues/41683)
- `management.otlp.metrics.export.aggregation-temporality` 在元数据中没有默认值 [#41676](https://github.com/spring-projects/spring-boot/issues/41676)
- `management.newrelic.metrics.export.client-provider-type` 在元数据中没有默认值 [#41670](https://github.com/spring-projects/spring-boot/issues/41670)
- `server.error.include-path` 在元数据中没有默认值 [#41667](https://github.com/spring-projects/spring-boot/issues/41667)
- 定义自己的 `SecurityFilterChain` 对 Actuator 的影响记录不一致 [#41638](https://github.com/spring-projects/spring-boot/issues/41638)
- “使用 Spring Data 仓库”操作指南错误地引用了 `Repository` 注释 [#41628](https://github.com/spring-projects/spring-boot/issues/41628)
- 更新 `log4j-spring-boot` 文档链接 [#41622](https://github.com/spring-projects/spring-boot/issues/41622)
- 修复 Flyway 参考文档链接 [#41593](https://github.com/spring-projects/spring-boot/issues/41593)
- 记录配置属性绑定支持使用 `@Name` 自定义属性名称 [#41585](https://github.com/spring-projects/spring-boot/issues/41585)
- 添加 Flyway 新依赖项的提示 [#41574](https://github.com/spring-projects/spring-boot/pull/41574)
- 记录 `spring-boot:repackage` 不应从命令行运行 [#22317](https://github.com/spring-projects/spring-boot/issues/22317)

## 🔨 依赖升级

- 升级到 ActiveMQ 6.1.3 [#41782](https://github.com/spring-projects/spring-boot/issues/41782)
- 升级到 Awaitility 4.2.2 [#41707](https://github.com/spring-projects/spring-boot/issues/41707)
- 升级到 Byte Buddy 1.14.19 [#41886](https://github.com/spring-projects/spring-boot/issues/41886)
- 升级到 Couchbase Client 3.6.3 [#41967](https://github.com/spring-projects/spring-boot/issues/41967)
- 升级到 CycloneDX Maven Plugin 2.8.1 [#41783](https://github.com/spring-projects/spring-boot/issues/41783)
- 升级到 Infinispan 15.0.7.Final [#41784](https://github.com/spring-projects/spring-boot/issues/41784)
- 升级到 Jakarta Servlet JSP JSTL 3.0.1 [#41845](https://github.com/spring-projects/spring-boot/issues/41845)
- 升级到 Jersey 3.1.8 [#41785](https://github.com/spring-projects/spring-boot/issues/41785)
- 升级到 Jetty 12.0.12 [#41828](https://github.com/spring-projects/spring-boot/issues/41828)
- 升级到 Jetty Reactive HTTPClient 4.0.6 [#41786](https://github.com/spring-projects/spring-boot/issues/41786)
- 升级到 jOOQ 3.19.11 [#41846](https://github.com/spring-projects/spring-boot/issues/41846)
- 升级到 Kotlin 1.9.25 [#41787](https://github.com/spring-projects/spring-boot/issues/41787)
- 升级到 Logback 1.5.7 [#41887](https://github.com/spring-projects/spring-boot/issues/41887)
- 升级到 Maven Deploy Plugin 3.1.3 [#41942](https://github.com/spring-projects/spring-boot/issues/41942)
- 升级到 Maven Install Plugin 3.1.3 [#41943](https://github.com/spring-projects/spring-boot/issues/41943)
- 升级到 Micrometer 1.13.3 [#41733](https://github.com/spring-projects/spring-boot/issues/41733)
- 升级到 Micrometer Tracing 1.3.3 [#41734](https://github.com/spring-projects/spring-boot/issues/41734)
- 升级到 Neo4j Java Driver 5.23.0 [#41743](https://github.com/spring-projects/spring-boot/issues/41743