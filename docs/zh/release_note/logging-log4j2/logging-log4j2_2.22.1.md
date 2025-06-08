# logging-log4j2 2.22.1
```markdown
这次发布仅包含依赖项升级和错误修复，不会改变工件的行为。

在保持与 Java 8 兼容的同时，此版本的工件是使用 JDK 17 生成的，而版本 `2.22.0` 使用的是 JDK 11。

### 修复

- 如果映射是不可变的，则将 `JdkMapAdapterStringMap` 标记为冻结。[#2098](https://github.com/apache/logging-log4j2/issues/2098)
- 修复 `CloseableThreadContext` 中的 NPE。[#1426](https://github.com/apache/logging-log4j2/issues/1426)
- 使用库版本 `1.2.16+` 的 Conversant Media Disruptor 模块名称。
- 修复 `RollingFileManager` 中的 NPE。[#1645](https://github.com/apache/logging-log4j2/issues/1645)
- 修复 `log4j-to-slf4j` JPMS 和 OSGi 描述符。[#1983](https://github.com/apache/logging-log4j2/issues/1983)
- 解决影响 `log4j-slf4j-impl` 和 `log4j-mongodb3` 的 Coursier/Ivy 依赖解析错误。[#2065](https://github.com/apache/logging-log4j2/issues/2065)

### 更新

- 将构建所需的最低 Java 版本提升到 Java 17。运行时要求保持不变。[#2021](https://github.com/apache/logging-log4j2/pull/2021)
- 更新 `com.github.luben:zstd-jni` 到版本 `1.5.5-11`。[#2030](https://github.com/apache/logging-log4j2/pull/2030)
- 更新 `com.google.guava:guava` 到版本 `33.0.0-jre`。[#2110](https://github.com/apache/logging-log4j2/pull/2110)
- 更新 `commons-codec:commons-codec` 到版本 `1.16.0`。[#2042](https://github.com/apache/logging-log4j2/pull/2042)
- 更新 `commons-io:commons-io` 到版本 `2.15.1`。[#2034](https://github.com/apache/logging-log4j2/pull/2034)
- 更新 `commons-logging:commons-logging` 到版本 `1.3.0`。[#2050](https://github.com/apache/logging-log4j2/pull/2050)
- 更新 `io.netty:netty-bom` 到版本 `4.1.104.Final`。[#2095](https://github.com/apache/logging-log4j2/pull/2095)
- 更新 `org.apache.commons:commons-compress` 到版本 `1.25.0`。[#2045](https://github.com/apache/logging-log4j2/pull/2045)
- 更新 `org.apache.commons:commons-dbcp2` 到版本 `2.11.0`。[#2048](https://github.com/apache/logging-log4j2/pull/2048)
- 更新 `org.apache.commons:commons-lang3` 到版本 `3.14.0`。[#2047](https://github.com/apache/logging-log4j2/pull/2047)
- 更新 `org.apache.commons:commons-pool2` 到版本 `2.12.0`。[#2057](https://github.com/apache/logging-log4j2/pull/2057)
- 更新 `org.apache.kafka:kafka-clients` 到版本 `3.6.1`。[#2068](https://github.com/apache/logging-log4j2/pull/2068)
- 更新 `org.apache.logging:logging-parent` 到版本 `10.5.0`。[#2119](https://github.com/apache/logging-log4j2/pull/2119)
- 更新 `org.jctools:jctools-core` 到版本 `4.0.2`。[#1984](https://github.com/apache/logging-log4j2/pull/1984)
- 更新 `org.springframework.boot:spring-boot` 到版本 `2.7.18`。[#1998](https://github.com/apache/logging-log4j2/pull/1998)
- 更新 `org.springframework.cloud:spring-cloud-dependencies` 到版本 `2021.0.9`。[#2109](https://github.com/apache/logging-log4j2/pull/2109)
```