# logging-log4j2 2.24.0
### logging-log4j2是什么

logging-log4j2是Apache Log4j的一个重要版本，它是一个功能强大的日志记录库，广泛用于Java应用程序中。Log4j2提供了灵活的日志记录功能，支持多种输出格式和目标，使开发者能够轻松地记录和管理应用程序的日志信息。

### 为什么要使用logging-log4j2?

使用logging-log4j2的原因有很多。首先，它提供了高性能的日志记录功能，能够处理大量的日志信息而不会显著影响应用程序的性能。其次，Log4j2支持异步日志记录，这意味着日志记录操作不会阻塞应用程序的主线程。此外，Log4j2的配置灵活性使得开发者可以根据需求自定义日志格式、输出目标和日志级别，从而更好地满足不同应用场景的需求。

### logging-log4j2 2.24.0版本更新了什么

在2.24.0版本中，Log4j API进行了增强，包含了来自3.x分支的更改，并将被Log4j 2 Core和Log4j 3 Core版本使用。主要更新包括：

- 更快的默认`ThreadContextMap`。
- 增强的GraalVM支持：使用Log4j API的本地二进制文件将不再需要额外的GraalVM配置。
- 配置属性子系统现在仅接受官方的pre-2.10属性名称和标准化的post-2.10名称。请检查您的配置以确保没有拼写错误。

### 更新日志

- **Log4j API的2.24.0版本**进行了增强，包含来自3.x分支的更改，将被Log4j 2 Core和Log4j 3 Core版本使用。更改包括：
  - 更快的默认`ThreadContextMap`。
  - 增强的GraalVM支持：使用Log4j API的本地二进制文件将不再需要额外的GraalVM配置。
  - 配置属性子系统现在仅接受官方的pre-2.10属性名称和标准化的post-2.10名称。请检查您的配置以确保没有拼写错误。

- **文档**  
  Apache Log4j 2网站几乎完全重写，以提供更好的文档和更快的信息访问。

- **桥接**  
  JUL到Log4j API和Log4j 1到Log4j API将不再能够默认修改Log4j Core的配置。如果需要此功能，必须显式启用。

- **模块**  
  以下Log4j Core附加模块已被移除：
  - `log4j-flume-ng`：该模块不再是发布过程的一部分，将遵循自己的发布生命周期。请使用`log4j-bom`管理依赖项，以始终使用其最新版本。
  - `log4j-kubernetes`：该模块已移至Fabric8.io Kubernetes项目，并遵循Fabric8.io的发布生命周期。
  - `log4j-mongodb3`：基于MongoDB Java客户端版本3.x的模块已被移除。请迁移到`log4j-mongodb`（客户端版本5.x）或`log4j-mongodb4`（客户端版本4.x）。

- **JMX更改**  
  从2.24.0版本开始，JMX支持默认禁用，可以通过`log4j2.disableJmx=false`系统属性重新启用。

- **新增功能**  
  - 添加更快的`DefaultThreadContextMap`实现。
  - 在`log4j-slf4j-impl`和`log4j-slf4j2-impl`中添加Logback throwable-consuming语义作为选项。用户可以通过将属性`log4j2.messageFactory`设置为`org.apache.logging.slf4j.message.ThrowableConsumingMessageFactory`来启用它。
  - 在`GcpLayout.json`中添加跟踪上下文字段。
  - 在网站上添加“插件参考”，这是一个专注于Log4j插件的Javadoc增强版本。
  - 使用新CI基础设施自动化网站部署。

- **更改**  
  - 修复在GraalVM中使用`log4j-api`时缺少的可达性数据。
  - 忽略PropertySources抛出的异常。
  - 在`PropertiesUtil`中添加日志记录并修复`Duration`解析器。
  - 默认情况下禁用通过JUL修改级别。
  - 在`Provider`类中集中初始化，并弃用`log4j2.loggerContextFactory`属性。
  - 移除`log4j-kubernetes`查找。用户应迁移到`io.fabric8:kubernetes-log4j`。
  - 默认禁用JMX支持。需要将`log4j2.disableJmx`设置为`false`以启用JMX支持。
  - 替换一些`DateTimeFormatter#toString()`的用法为`DateTimeFormatter#formatTo(StringBuilder)`以减少分配。
  - 如果`log4j1.compatibility`为`false`，则在Log4j 1 Bridge中禁用编程配置。
  - 改进缺失插件描述符警告。
  - 移除配置属性缓存和（未记录的）模糊属性名称匹配。
  - 修复属性源排序，以考虑具有相同优先级的不同源。
  - 优先考虑用户定义的`log4j2.enableThreadLocals`、`log4j2.garbagefreeThreadContextMap`和`log4j2.shutdownHookEnabled`的值。
  - 禁止JSON模板布局模板中的重复键。
  - 在Log4j Core中弃用`log4j2.defaultStatusLevel`属性，改为使用`log4j2.statusLoggerLevel`。
  - 添加模块log4j-mongodb以跟踪当前MongoDB驱动程序（当前版本5）。
  - 移除模块log4j-mongodb3，使用log4j-mongodb，log4j-mongodb4已弃用待移除。

- **弃用**  
  - 弃用`Message#getFormat()`，由于语义不清和实现不一致。
  - 弃用`org.apache.logging.log4j.EventLogger`以待移除。
  - 弃用`org.apache.logging.log4j.core.appender.rolling.action.Duration`类以待移除。
  - 弃用`log4j-mongodb4`模块，改为使用`log4j-mongodb`。

- **修复**  
  - 在RFC5424布局中使用FQDN。
  - 修复自定义线程上下文数据提供程序在查找和过滤器中的处理。
  - 修复`log4j2.messageFactory`和`log4j2.flowMessageFactory`属性的处理。
  - 丢弃`PropertiesUtil`中的空白键。
  - 修复`log4j2.debug`的处理。
  - 修复模式布局中`%F`和`%file`键的位置信息要求。
  - 修复`JsonLayout`在JPMS下的失败。
  - 修复`TruncatingBufferedWriter`的空字符串处理。
  - 修复参数化消息格式化在参数不足时抛出异常的问题。
  - 修复LMAX Disruptor 3初始化中的`ClassCastException`。
  - 修复在禁用JMX时对`java.management`模块的要求。
  - 网站迁移到Antora，并进行了多项格式和链接修复。

- **移除**  
  - 将Flume Appender移至其自己的发布生命周期。

- **更新**  
  - 更新`com.fasterxml.jackson:jackson-bom`到版本`2.17.2`。
  - 更新`com.github.luben:zstd-jni`到版本`1.5.6-5`。
  - 更新`commons-codec:commons-codec`到版本`1.17.1`。
  - 更新`commons-logging:commons-logging`到版本`1.3.4`。
  - 更新`github/codeql-action`到版本`3.25.1`。
  - 更新`io.fabric8:docker-maven-plugin`到版本`0.45.0`。
  - 更新`org.apache.cassandra:cassandra-all`到版本`3.11.17`。
  - 更新`org.apache.commons:commons-compress`到版本`1.27.1`。
  - 更新`org.apache.commons:commons-csv`到版本`1.11.0`。
  - 更新`org.apache.commons:commons-lang3`到版本`3.17.0`。
  - 更新`org.apache.kafka:kafka-clients`到版本`3.8.0`。
  - 更新`org.apache.logging:logging-parent`到版本`11.2.0`。
  - 更新`org.eclipse.jetty:jetty-bom`到版本`9.4.55.v20240627`。
  - 更新`org.jctools:jctools-core`到版本`4.0.5`。
  - 更新log4j-mongodb4 `org.mongodb:*`从`4.11.1`到`4.11.2`。
  - 更新`org.mongodb:bson`到版本`5.1.3`。
  -