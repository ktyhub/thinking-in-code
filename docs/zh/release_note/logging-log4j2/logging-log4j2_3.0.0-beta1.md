# logging-log4j2 3.0.0-beta1
```markdown
这是即将发布的主要版本的第一个测试版，即 `3.0.0`。

### 新增

- 添加空值注解。([LOG4J2-1477](https://issues.apache.org/jira/browse/LOG4J2-1477))
- 移除已弃用的代码。([LOG4J2-2493](https://issues.apache.org/jira/browse/LOG4J2-2493))
- 添加一个更通用的依赖注入系统到插件中，灵感来自 JSR 330。([LOG4J2-2803](https://issues.apache.org/jira/browse/LOG4J2-2803))
- 添加和增强结构化属性，用于配置文件之外的每个上下文设置。([LOG4J2-3299](https://issues.apache.org/jira/browse/LOG4J2-3299), [#1473](https://github.com/apache/logging-log4j2/pull/1473))
- 自动化工件发布和版本准备。([LOG4J2-3466](https://issues.apache.org/jira/browse/LOG4J2-3466))
- 添加对插件注入到容器类型的支持，如 `Optional<T>`、`Collection<T>`、`Set<T>`、`Stream<T>`、`List<T>` 和 `Map<String, T>`。([LOG4J2-3496](https://issues.apache.org/jira/browse/LOG4J2-3496))
- 在插件类中添加对 `ConstraintValidator` 的支持。([LOG4J2-3497](https://issues.apache.org/jira/browse/LOG4J2-3497))

### 变更

- 移除 liquibase-log4j2 maven 模块。([#1193](https://github.com/apache/logging-log4j2/pull/1193))
- 使注解处理的输出可重现。([#1520](https://github.com/apache/logging-log4j2/issues/1520))
- 用锁替换 `synchronized` 块，以提高虚拟线程的性能。([#1532](https://github.com/apache/logging-log4j2/issues/1532))
- 移除 `AsyncLoggerConfig` 中的额外 `isFiltered` 检查。([#1550](https://github.com/apache/logging-log4j2/issues/1550))
- 忽略 PropertySources 抛出的异常。消除使用 SimpleLoggerContext 时的 ClassCastException。([spring-projects/spring-boot#33450](https://github.com/spring-projects/spring-boot/issues/33450), [#1799](https://github.com/apache/logging-log4j2/issues/1799))
- 更新 `com.lmax:disruptor` 到版本 `4.0.0`。([#1829](https://github.com/apache/logging-log4j2/issues/1829))
- 将大多数测试迁移到 JUnit 5。这包括一组更强大的测试扩展。([LOG4J2-2653](https://issues.apache.org/jira/browse/LOG4J2-2653))
- 使 Log4j 使用其自己的 BOM。([LOG4J2-3511](https://issues.apache.org/jira/browse/LOG4J2-3511))
- 将 HTTP 基本身份验证的编码更改为 UTF-8。([#1970](https://github.com/apache/logging-log4j2/pull/1970))
- 将所需的编译器版本升级到 Java 17。
- 将所需的运行时版本升级到 Java 17。
- 更新 `actions/checkout` 到版本 `4.1.1`。([#1869](https://github.com/apache/logging-log4j2/pull/1869))
- 更新 `actions/setup-java` 到版本 `3.13.0`。([#1809](https://github.com/apache/logging-log4j2/pull/1809))
- 更新 `actions/setup-python` 到版本 `4.7.1`。([#1831](https://github.com/apache/logging-log4j2/pull/1831))
- 更新 `ch.qos.logback:logback-classic` 到版本 `1.4.14`。([#2028](https://github.com/apache/logging-log4j2/pull/2028))
- 更新 `com.datastax.cassandra:cassandra-driver-core` 到版本 `3.11.5`。([#1889](https://github.com/apache/logging-log4j2/pull/1889))
- 更新 `com.fasterxml.jackson:jackson-bom` 到版本 `2.16.0`。([#1974](https://github.com/apache/logging-log4j2/pull/1974))
- 更新 `com.github.luben:zstd-jni` 到版本 `1.5.5-11`。([#2032](https://github.com/apache/logging-log4j2/pull/2032))
- 更新 `com.github.spotbugs:spotbugs-maven-plugin` 到版本 `4.7.3.6`。([#1879](https://github.com/apache/logging-log4j2/pull/1879))
- 更新 `com.github.tomakehurst:wiremock-jre8` 到版本 `2.35.1`。([#1765](https://github.com/apache/logging-log4j2/pull/1765))
- 更新 `com.google.code.java-allocation-instrumenter:java-allocation-instrumenter` 到版本 `3.3.4`。([#2102](https://github.com/apache/logging-log4j2/pull/2102))
- 更新 `com.google.errorprone:error_prone_core` 到版本 `2.23.0`。([#1871](https://github.com/apache/logging-log4j2/pull/1871))
- 更新 `com.google.guava:guava-testlib` 到版本 `32.1.3-jre`。([#1934](https://github.com/apache/logging-log4j2/pull/1934))
- 更新 `com.h2database:h2` 到版本 `2.2.224`。([#1917](https://github.com/apache/logging-log4j2/pull/1917))
- 更新 `commons-codec:commons-codec` 到版本 `1.16.0`。([#2054](https://github.com/apache/logging-log4j2/pull/2054))
- 更新 `commons-io:commons-io` 到版本 `2.15.1`。([#2035](https://github.com/apache/logging-log4j2/pull/2035))
- 更新 `commons-logging:commons-logging` 到版本 `1.3.0`。([#2046](https://github.com/apache/logging-log4j2/pull/2046))
- 更新 `de.flapdoodle.reverse:de.flapdoodle.reverse` 到版本 `1.7.2`。([#2000](https://github.com/apache/logging-log4j2/pull/2000))
- 更新 `io.netty:netty-bom` 到版本 `4.1.104.Final`。([#2097](https://github.com/apache/logging-log4j2/pull/2097))
- 更新 `net.java.dev.jna:jna` 到版本 `5.14.0`。([#2082](https://github.com/apache/logging-log4j2/pull/2082))
- 更新 `org.apache.aries.spifly:org.apache.aries.spifly.dynamic.bundle` 到版本 `1.3.7`。([#2053](https://github.com/apache/logging-log4j2/pull/2053))
- 更新 `org.apache.commons:commons-compress` 到版本 `1.25.0`。([#2055](https://github.com/apache/logging-log4j2/pull/2055))
- 更新 `org.apache.commons:commons-csv` 到版本 `1.10.0`。([#2041](https://github.com/apache/logging-log4j2/pull/2041))
- 更新 `org.apache.commons:commons-dbcp2` 到版本 `2.11.0`。([#2044](https://github.com/apache/logging-log4j2/pull/2044))
- 更新 `org.apache.commons:commons-lang3` 到版本 `3.14.0`。([#2036](https://github.com/apache/logging-log4j2/pull/2036))
- 更新 `org.apache.commons:commons-pool2` 到版本 `2.12.0`。([#2038](https://github.com/apache/logging-log4j2/pull/2038))
- 更新 `org.apache.groovy:groovy-bom` 到版本 `4.0.16`。([#2039](https://github.com/apache/logging-log4j2/pull/2039))
- 更新 `org.apache.maven:maven-core` 到版本 `3.9.6`。([#2049](https://github.com/apache/logging-log4j2/pull/2049))
- 更新 `org.apache.maven.surefire:surefire-junit47` 到版本 `3.2.3`。([#2091](https://github.com/apache/logging-log4j2/pull/2091))
- 更新