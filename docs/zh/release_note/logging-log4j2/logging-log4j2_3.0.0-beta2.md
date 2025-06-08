# logging-log4j2 3.0.0-beta2
```markdown
### 本次发布继续推进了 Log4j Core 的模块化进程

以下功能已移至单独的构件：

- 异步日志功能已移至 `log4j-async-logger`，并升级为使用 LMAX Disruptor 4.x。异步附加器仍默认在 `log4j-core` 中可用。
- YAML 配置现已在 `log4j-config-yaml` 中可用。
- Java 属性配置已被移除，并在新的 `log4j-config-properties` 构件中使用基于 `jackson-dataformat-properties` 的类似格式替代。

其他功能已被移除：

- 建议 Jetty 9.x 用户迁移到 Jetty 10.x 或更高版本，并用 `log4j-slf4j2-impl` 替换 `log4j-appserver`。
- Tomcat JULI 支持将由第三方提供（参见 [copernik-eu/log4j-plugins](https://github.com/copernik-eu/log4j-plugins)）。
- 建议 Apache Commons Logging 用户升级 `commons-logging` 至 1.3.0 或更高版本，并移除 `log4j-jcl`。
- XML 布局支持已被移除。
- JMX 支持已被移除，将被更新的技术替代。

### 新增

- 添加和更新用于设置测试和非测试代码依赖注入的 DSLs。
- 添加 `ConfigurationExtension` 机制，允许第三方 JAR 扩展 `<Configuration>` 元素。
- 添加基于 `jackson-dataformat-properties` 的新属性配置工厂。

### 变更

- 更改 `FormattedMessage` 格式化程序的评估顺序。消息仅在不符合 `java.text.MessageFormat` 或 `ParameterizedMessage` 格式时使用 `java.util.Format` 进行评估。
- 将异步日志支持拆分到新的 `log4j-async-logger` 模块。
- 将 YAML 配置拆分到新的 `log4j-config-yaml` 模块。

### 修复

- 重写消息参数格式化程序，改进了转义处理。
- MongoDb4 附加器现在支持配置 `collectionSize` 的长值。
- 如果映射是不可变的，将 `JdkMapAdapterStringMap` 标记为冻结。
- 修复 `JdkMapAdapterStringMap` 性能回归问题。
- 防止在尝试将 `SimpleLoggerContext` 分配给核心 `LoggerContext` 时出现 `ClassCastException`。
- 修复 `MongoDb4DocumentObject`、`MongoDbDocumentObject`、`DefaultNoSqlObject` 中可能的 `NullPointerException`。
- 修复 `CloseableThreadContext` 中的 NPE。
- 修复 `RollingFileManager` 中的 NPE。
- 修复 `log4j-spring-cloud-config-client` 依赖项，仅包含所需的依赖项。
- 解决影响 `log4j-slf4j-impl` 和 `log4j-mongodb3` 的 Coursier/Ivy 依赖解析错误。

### 移除

- 移除遗留的 `2.x` 属性配置工厂。
- 移除 `DefaultLogEventFactory`。
- 移除 `log4j-appserver` 模块。
- 移除 `org.apache.logging.log4j.core.parser` 及相关包。
- 移除 `log4j-jcl` 模块。
- 移除 JMX 支持。
- 移除 `log4j-layout-jackson` 模块。
- 移除 `log4j-layout-jackson-xml` 模块。
- 移除 `log4j2.enable.threadlocals` 属性。

### 更新

- 更新 `com.fasterxml.jackson:jackson-bom` 至版本 `2.16.1`。
- 更新 `commons-codec:commons-codec` 至版本 `1.16.1`。
- 更新 `io.netty:netty-bom` 至版本 `4.1.107.Final`。
- 更新 `org.apache.logging:logging-parent` 至版本 `10.6.0`。
- 更新 `org.apache.tomcat:tomcat-juli` 至版本 `10.1.18`。
- 更新 `org.eclipse.jetty:jetty-bom` 至版本 `9.4.54.v20240208`。
- 更新 `org.jctools:jctools-core` 至版本 `4.0.3`。
- 更新 `org.slf4j:slf4j-api` 至版本 `2.0.10`。
- 更新 `org.springframework.boot:spring-boot-autoconfigure` 至版本 `3.2.2`。
- 更新 `org.springframework.cloud:spring-cloud-context` 至版本 `4.1.1`。
- 更新 `org.springframework:spring-framework-bom` 至版本 `6.1.4`。
```