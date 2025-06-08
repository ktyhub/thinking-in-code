# logging-log4j2 2.23.1
```markdown
本次发布包含若干小修复和一些依赖项更新。

### 更改

- 改进了 `CloseableThreadContext#closeMap()` 的性能 [#2296](https://github.com/apache/logging-log4j2/pull/2296)

### 修复

- 修复了 `LoggerContextAware` 查找的处理 [#2309](https://github.com/apache/logging-log4j2/issues/2309)
- 修复了 `PatternProcessor` 中 `UNIX_MILLIS` 模式的空指针异常 (NPE) [#2346](https://github.com/apache/logging-log4j2/issues/2346)
- 修复了参数化消息格式化在参数不足时不抛出异常的问题 [#2343](https://github.com/apache/logging-log4j2/pull/2343)
- 修复了在启用调试模式时 `StatusLogger` 日志级别过滤的问题 [#2337](https://github.com/apache/logging-log4j2/issues/2337)
- 添加了 `log4j2.StatusLogger.dateFormatZone` 系统属性，用于设置 `StatusLogger` 格式化 `java.time.Instant` 时使用的时区。否则，访问时区特定字段（例如，纪元年）的格式化模式会导致失败 [#2322](https://github.com/apache/logging-log4j2/pull/2322)
- 修复了 `StatusLogger` 正确读取 `log4j2.StatusLogger.properties` 资源的问题 [#2354](https://github.com/apache/logging-log4j2/pull/2354)
- 修复了 `StatusLogger` 中的堆栈溢出问题 [#2322](https://github.com/apache/logging-log4j2/pull/2322)

### 更新

- 更新 `jakarta.activation:jakarta.activation-api` 到版本 `2.1.3` [#2335](https://github.com/apache/logging-log4j2/pull/2335)
- 更新 `jakarta.mail:jakarta.mail-api` 到版本 `2.1.3` [#2348](https://github.com/apache/logging-log4j2/pull/2348)
- 更新 `org.apache.commons:commons-compress` 到版本 `1.26.0` [#2304](https://github.com/apache/logging-log4j2/pull/2304)
- 更新 `org.apache.commons:commons-dbcp2` 到版本 `2.12.0` [#2344](https://github.com/apache/logging-log4j2/pull/2344)
- 更新 `org.apache.kafka:kafka-clients` 到版本 `3.7.0` [#2326](https://github.com/apache/logging-log4j2/pull/2326)
- 更新 `org.eclipse.angus:angus-activation` 到版本 `2.0.2` [#2336](https://github.com/apache/logging-log4j2/pull/2336)
- 更新 `org.eclipse.angus:jakarta.mail` 到版本 `2.0.3` [#2349](https://github.com/apache/logging-log4j2/pull/2349)
```