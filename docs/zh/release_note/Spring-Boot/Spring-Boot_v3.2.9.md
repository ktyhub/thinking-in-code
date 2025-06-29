# Spring-Boot v3.2.9
```markdown
## ⭐ 新特性

- 在 `JavaVersion` 枚举中添加 `TWENTY_THREE` [#41710](https://github.com/spring-projects/spring-boot/issues/41710)

## 🐞 Bug 修复

- 使用 WebFlux 时，当 `BindingResult` 异常是 `ResponseStatusException` 的原因时，`server.error.include-binding-errors=ALWAYS` 不再有效 [#41984](https://github.com/spring-projects/spring-boot/issues/41984)
- `spring-boot-testcontainers` 在 AOT 处理期间导致不必要的容器初始化 [#41838](https://github.com/spring-projects/spring-boot/issues/41838)
- 扩展 `DefaultErrorAttributes` 并重写 `getErrorAttributes()` 会被调用两次 [#41732](https://github.com/spring-projects/spring-boot/issues/41732)
- `PropertiesLauncher` 在将 `BOOT-INF/lib` 中的 jar 添加到类路径时不尊重 `classpath.idx` [#41719](https://github.com/spring-projects/spring-boot/issues/41719)
- 当类路径中没有 Reactor 时，`ReactiveElasticsearchRepositoriesAutoConfiguration` 应该退让 [#41672](https://github.com/spring-projects/spring-boot/issues/41672)
- 启动器的 `ClassLoader` 不再具有并行能力 [#41665](https://github.com/spring-projects/spring-boot/pull/41665)
- 使用 Gradle 的新文件权限 API 的实现方式阻止了旧 API 的移除 [#41599](https://github.com/spring-projects/spring-boot/issues/41599)
- 由于缺少键类型，`EnumMap` 的构造函数绑定失败 [#41550](https://github.com/spring-projects/spring-boot/issues/41550)
- Spring Boot Maven 插件 AOT 无法处理带有 `module-info.java` 的 Maven 模块 [#33383](https://github.com/spring-projects/spring-boot/issues/33383)
- 当 `publish` 选项为 `false` 时，Maven 插件配置中的 `Docker publishRegistry` 仍会被验证 [#29756](https://github.com/spring-projects/spring-boot/issues/29756)
- 当 `classifier` 设置为非默认值时，`mvn spring-boot:build-image` 失败 [#26721](https://github.com/spring-projects/spring-boot/issues/26721)

## 📔 文档

- 文档中的发布类型条件不起作用 [#41993](https://github.com/spring-projects/spring-boot/issues/41993)
- 统一参考文档中 `MyUserHandler` 的代码示例 [#41948](https://github.com/spring-projects/spring-boot/pull/41948)
- 解释启用虚拟线程会禁用传统线程池 [#41937](https://github.com/spring-projects/spring-boot/issues/41937)
- 改进记录属性描述和默认值的文档 [#41933](https://github.com/spring-projects/spring-boot/issues/41933)
- 修复重复的单词 [#41916](https://github.com/spring-projects/spring-boot/pull/41916)
- `slice test` 注释的 Javadoc 应更准确地描述哪些组件被考虑 [#41914](https://github.com/spring-projects/spring-boot/issues/41914)
- 记录环境变量属性映射何时适用 [#41877](https://github.com/spring-projects/spring-boot/issues/41877)
- 修正“使用 Maven 运行你的应用程序”中的语法 [#41868](https://github.com/spring-projects/spring-boot/issues/41868)
- 记录在直接使用 mock 服务器定制器时需要显式重置 mock 服务器 [#41848](https://github.com/spring-projects/spring-boot/issues/41848)
- Pulsar 配置在元数据中没有默认值 [#41682](https://github.com/spring-projects/spring-boot/issues/41682)
- `management.otlp.metrics.export.aggregation-temporality` 在元数据中没有默认值 [#41674](https://github.com/spring-projects/spring-boot/issues/41674)
- `management.newrelic.metrics.export.client-provider-type` 在元数据中没有默认值 [#41666](https://github.com/spring-projects/spring-boot/issues/41666)
- “使用 Spring Data 仓库” How-to 错误地引用了 `Repository` 注释 [#41625](https://github.com/spring-projects/spring-boot/issues/41625)
- 更新 `log4j-spring-boot` 文档链接 [#41612](https://github.com/spring-projects/spring-boot/pull/41612)
- 修复 Flyway 参考文档链接 [#41591](https://github.com/spring-projects/spring-boot/pull/41591)
- 记录配置属性绑定支持使用 `@Name` 自定义属性名称 [#41577](https://github.com/spring-projects/spring-boot/issues/41577)
- 定义自己的 `SecurityFilterChain` 对 Actuator 的影响在文档中不一致 [#41569](https://github.com/spring-projects/spring-boot/issues/41569)
- 更清楚地记录当设置 `spring.data.redis.url` 时不使用用户名和密码 [#41231](https://github.com/spring-projects/spring-boot/issues/41231)

## 🔨 依赖升级

- 升级到 ActiveMQ 5.18.5 [#41764](https://github.com/spring-projects/spring-boot/issues/41764)
- 升级到 Awaitility 4.2.2 [#41706](https://github.com/spring-projects/spring-boot/issues/41706)
- 升级到 Byte Buddy 1.14.19 [#41881](https://github.com/spring-projects/spring-boot/issues/41881)
- 升级到 Dropwizard Metrics 4.2.27 [#41938](https://github.com/spring-projects/spring-boot/issues/41938)
- 升级到 Hazelcast 5.3.8 [#41765](https://github.com/spring-projects/spring-boot/issues/41765)
- 升级到 Hibernate 6.4.10.Final [#41766](https://github.com/spring-projects/spring-boot/issues/41766)
- 升级到 Infinispan 14.0.30.Final [#41767](https://github.com/spring-projects/spring-boot/issues/41767)
- 升级到 Jakarta Servlet JSP JSTL 3.0.1 [#41842](https://github.com/spring-projects/spring-boot/issues/41842)
- 升级到 Jersey 3.1.8 [#41768](https://github.com/spring-projects/spring-boot/issues/41768)
- 升级到 Jetty 12.0.12 [#41770](https://github.com/spring-projects/spring-boot/issues/41770)
- 升级到 Jetty Reactive HTTPClient 4.0.6 [#41769](https://github.com/spring-projects/spring-boot/issues/41769)
- 升级到 jOOQ 3.18.18 [#41843](https://github.com/spring-projects/spring-boot/issues/41843)
- 升级到 Kotlin 1.9.25 [#41771](https://github.com/spring-projects/spring-boot/issues/41771)
- 升级到 Maven Deploy Plugin 3.1.3 [#41939](https://github.com/spring-projects/spring-boot/issues/41939)
- 升级到 Maven Install Plugin 3.1.3 [#41940](https://github.com/spring-projects/spring-boot/issues/41940)
- 升级到 Micrometer 1.12.9 [#41720](https://github.com/spring-projects/spring-boot/issues/41720)
- 升级到 Micrometer Tracing 1.2.9 [#41721](https://github.com/spring-projects/spring-boot/issues/41721)
- 升级到 MongoDB 4.11.3 [#41772](https://github.com/spring-projects/spring-boot/issues/41772)
- 升级到 Neo4j Java Driver 5.23.0 [#41730](https://github.com/spring-projects/spring-boot/issues/41730)
- 升级到 Netty 4.1.112.Final [#41773](https://github.com/spring-projects/spring-boot/issues/41773)
- 升级到 Pulsar Reactive 0.5.7 [#41882](https://github.com/spring-projects/spring-boot/issues/41882)
- 升级到 Reactor Bom 2023.0.9 [#41722](https://github.com/spring-projects/spring-boot/issues/41722)
- 升级到 RxJava3