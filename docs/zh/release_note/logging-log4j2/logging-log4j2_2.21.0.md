# logging-log4j2 2.21.0
```markdown
这次发布主要集中在增强对OSGi和JPMS的支持，并包含若干错误修复。它将是第一个由CI使用[ASF Logging Services Release Manager GPG key](https://keyserver.ubuntu.com/pks/lookup?search=077E8893A6DCC33DD4A4D5B256E73BA9A0B592D0&op=index)构建和签名的版本，该密钥在[KEYS](https://www.apache.org/dist/logging/KEYS)中共享。

Log4j 2.21.0 API及其他工件保持与之前版本的二进制兼容性。

Apache Log4j 2.21.0需要Java 8运行，构建需要JDK 11并生成可重现的二进制文件。

有关Apache Log4j 2的完整信息，包括如何提交错误报告、补丁、获取支持或改进建议，请参见[Apache Log4j 2网站](http://logging.apache.org/log4j/2.x/)。

### OSGi 变化

所有发布的工件都是OSGi包或片段。

此版本引入了包符号名称的更改，以允许它们作为JPMS模块名称：将之前版本中包名称中的所有连字符`-`替换为点`.`。

### JPMS 变化

所有发布的工件已从自动模块迁移到命名的JPMS模块。所有在Javadoc中标记为私有的包都不会导出。

四个桥接模块（`log4j-slf4j-impl`、`log4j-slf4j2-impl`、`log4j-to-jul`和`log4j-to-slf4j`）的模块名称已更改，以遵循与OSGi包名称相同的约定。

### 新增

- 为`JsonTemplateLayout`添加了标记父支持。
- 添加了[ZStandard压缩](https://facebook.github.io/zstd/)支持。
- 添加了对高亮样式语法错误的警告。

### 变更

- 开放`FileExtension`方法以允许在自定义`RolloverStrategy`中使用。
- 将构建所需的最低Java版本提升到JDK 11。运行时要求保持不变。
- 将`LevelRangeFilter`的默认`minLevel`和`maxLevel`设置为`OFF`和`ALL`。
- 移除了`AsyncLoggerConfig`中的额外`isFiltered`检查。
- 在`StackLocator`中使用Java版本特定的警告。
- 当包没有有效的`BundleContext`用于服务类型时，开始记录状态错误事件而不是NPE。
- 实现了基于CI的发布流程。
- 更新Eclipse Angus Activation到版本[2.0.1](https://github.com/eclipse-ee4j/angus-activation/releases/tag/2.0.1)。
- 更新Eclipse Angus Mail到版本[2.0.2](https://github.com/eclipse-ee4j/angus-mail/releases/tag/2.0.2)。
- 更新`com.datastax.cassandra:cassandra-driver-core`到版本3.11.5。
- 更新Apache Cassandra到版本[3.11.16](https://github.com/apache/cassandra/blob/cassandra-3.11/CHANGES.txt)。
- 更新Apache Commons Compress到版本[1.24.0](https://commons.apache.org/proper/commons-compress/changes-report.html#a1.24.0)。
- 更新Apache Commons CSV到版本[1.10.0](https://commons.apache.org/proper/commons-csv/changes-report.html#a1.10.0)。
- 更新Jackson到版本[2.15.2](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.15.2)。
- 更新Jakarta Activation API到版本[2.1.2](https://jakarta.ee/specifications/activation/2.1/changelog/)。
- 更新Jakarta Mail API到版本[2.1.2](https://jakarta.ee/specifications/mail/2.1/changelog/)。
- 更新JCTools到版本[4.0.1](https://github.com/JCTools/JCTools/blob/master/RELEASE-NOTES.md)。
- 更新Apache Kafka到版本[3.4.0](https://archive.apache.org/dist/kafka/3.4.0/RELEASE_NOTES.html)。
- 更新Kubernetes客户端到版本[5.12.4](https://github.com/fabric8io/kubernetes-client/releases?q=5.12.4)。
- 更新`org.mongodb:mongodb-driver-core`到版本4.10.2。
- 更新`io.netty:netty-bom`到版本4.1.97。
- 更新Spring Boot到版本[2.7.15](https://github.com/spring-projects/spring-boot/releases/tag/v2.7.15)。
- 更新Spring Framework到版本[5.3.29](https://github.com/spring-projects/spring-framework/releases/tag/v5.3.29)。
- 更新Tomcat JULI到版本10.0.27。
- 更新Woodstox到版本[6.5.1](https://github.com/FasterXML/woodstox/blob/master/release-notes/VERSION)。

### 移除

- 将`log4j-jmx-gui`移至[其自己的存储库](https://github.com/apache/logging-log4j-jmx-gui/actions)并拥有自己的发布周期。

### 修复

- 为滚动文件管理器路径条件添加了验证。
- 适配`log4j-to-slf4j`的OSGi元数据以与SLF4J 1和2一起工作。为实现这一点，使用了`[1.7,3)`的版本范围。
- 修复了Javadoc失败。
- 移除了依赖于区域设置的`toLowerCase/toUpperCase`调用。
- 将旧的`/<module>/apidocs` URL（在2.20.0中损坏）重定向到`/javadoc/<module>`。
- 添加了环境变量仲裁器。
- 通过在Log4J尝试调用`java.util.Date.toInstant()`之前附加它来修复`java.sql.Date`对象的日志记录。
- 适配`log4j-api`、`log4j-core`、`log4j-slf4j-impl`和`log4j-slf4j2-impl`的OSGi元数据，以在访问时激活包。为实现这一点，将log4j包的`Bundle-ActivationPolicy`设置为`lazy`。
- 避免在`JsonTemplateLayout`的`StackTraceStringResolver`中使用已释放的对象。
- 为`MongoDb4Provider`构建器添加了缺失的`connectionStringSource`设置器。
- 修复了`PluginElementVisitor`中的NPE。
- 为列映射`type`属性添加了`columnType`别名。
- 恢复了SLF4J适配器中的`Log4jMarker`可见性。
- 修复了`Log4jFixedFormatter`日期时间格式化器中的缓冲区大小。
- 正确传播`RollingFileManager`和`FileRenameAction`中的同步操作失败。
- 修复了`RollingFileManager`以正确传播失败的同步操作。
- 在`StackLocator`中将警告的`System.out`替换为`System.err`。
- 修复了`PatternLayout`中的并发日期时间格式化问题。
- 修复了运行时依赖文档。
- 通过实现`CallerBoundaryAware`允许在`Log4jEventBuilder`中覆盖FQCN。
- 将MongoDB测试迁移到JUnit 5和Flapdoodle Embedded MongoDB 4。
- 重写了消息参数格式化器，改进了转义处理。
- 改进了JDK 9+上的`StackTraceElement`格式化和序列化。
- 修复了JRE 9+上的`MemoryMappedFileAppender`缓冲区解除映射。
- 修复了Log4j 1.x兼容层中的滚动策略。
- 移除了对`base64`查找的错误提及并改进了其余的查找手册。
- 实现了`JsonTemplateLayout`的`LocationAware`，因为这导致位置未传递到底层附加器。
- 在MongoDb 4附加器中添加了对配置`collectionSize`的`long`值支持。
- 仅在最后一个`Log4jServletContextListener`执行后关闭Log4j。
- 允许在没有Spring环境的情况下使用Spring Arbiter。
- 修复了在使用全异步日志记录器上下文时`<AsyncLogger>`组件的上下文数据丢失。
- 修复了在自定义日志级别上抛出的`JsonTemplateLayout` NPE。
- 改进了`Log4j-config.xsd`模式。
- 修复了`ContextSelector`中的NPE。
- 避免在禁用时在`AbstractLogger`中分配`ThreadLocal`，因为这会导致由于在Web应用程序中保留对类加载器的引用而导致的内存泄漏。
- 修复了`PatternLayout`