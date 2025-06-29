# logging-log4j2 2.23.0

这次发布增加了对 LMAX Disruptor 4.x 的支持，并修复了若干性能和漏洞问题。

为了保持与 JRE 8 的兼容性，继续支持 LMAX Disruptor 3.x。

### 新增

- 增加了对 LMAX Disruptor 4.x 的支持 [#1821](https://github.com/apache/logging-log4j2/pull/1821)

### 变更

- 在从版本 `6.4.1` 升级到 `7.0.0` 后简化了 BND 配置

### 弃用

- 弃用配置属性 `verbose`（即 `<Configuration verbose="..."`）和 `StatusConsoleListener` 过滤器 [#2226](https://github.com/apache/logging-log4j2/pull/2226)
- 弃用 `RingBufferLogEventHandler` 类，将在 3.x 版本中从公共 API 中移除

### 修复

- 修复了 `JdkMapAdapterStringMap` 性能回归问题 [#2238](https://github.com/apache/logging-log4j2/issues/2238)
- 修复了 Log4j 1.2 桥接中的 `Logger#setLevel` 和 `Logger#getLevel` 行为 [#2282](https://github.com/apache/logging-log4j2/pull/2282)
- 修复了 `log4j-jul` 模块中 `CoreLogger#getLevel` 和 `CoreLogger#setLevel` 的行为 [#2282](https://github.com/apache/logging-log4j2/pull/2282)
- 允许反序列化所有允许类的数组 [LOG4J2-3680](https://issues.apache.org/jira/browse/LOG4J2-3680)
- 允许节点出现在配置元素中的任何位置
- 修复了 `RingBufferLogEvent#clear()` 中遗忘的 `threadName` 字段 [#2234](https://github.com/apache/logging-log4j2/issues/2234)
- 修复了递归访问时 `StringBuilder` 缓存损坏的问题
- 修复了 `LoaderUtil` 中 `SecurityManager` 的使用问题，只有在安装了 `SecurityManager` 时才应调用 `AccessController::doPrivileged`。某些运行时似乎没有此方法 [#2129](https://github.com/apache/logging-log4j2/issues/2129)
- 修复了 `log4j-spring-cloud-config-client` 依赖项，仅包含必要的依赖项 [#2157](https://github.com/apache/logging-log4j2/issues/2157)
- 修复了 Kubernetes `clientKeyData` 配置属性中的拼写错误

### 更新

- 更新 `com.fasterxml.jackson:jackson-bom` 到版本 `2.16.1` [#2126](https://github.com/apache/logging-log4j2/pull/2126)
- 更新 `commons-codec:commons-codec` 到版本 `1.16.1` [#2277](https://github.com/apache/logging-log4j2/pull/2277)
- 更新 `io.netty:netty-bom` 到版本 `4.1.107.Final` [#2284](https://github.com/apache/logging-log4j2/pull/2284)
- 更新 `org.apache.logging:logging-parent` 到版本 `10.6.0` [#2197](https://github.com/apache/logging-log4j2/pull/2197)
- 更新 `org.eclipse.jetty:jetty-bom` 到版本 `9.4.54.v20240208` [#2287](https://github.com/apache/logging-log4j2/pull/2287)
- 更新 `org.jctools:jctools-core` 到版本 `4.0.3` [#2270](https://github.com/apache/logging-log4j2/pull/2270)
- 更新 `org.springframework:spring-framework-bom` 到版本 `5.3.32` [#2293](https://github.com/apache/logging-log4j2/pull/2293)
- 更新 `org.zeromq:jeromq` 到版本 `0.6.0` [#2271](https://github.com/apache/logging-log4j2/pull/2271)
```