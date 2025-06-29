# jmeter v5.6.3
### JMeter是什么

JMeter是一个开源的性能测试工具，主要用于对Web应用程序进行负载测试和性能评估。它能够模拟多种用户请求，支持多种协议，包括HTTP、HTTPS、FTP等。JMeter不仅可以用于性能测试，还可以用于功能测试、压力测试和负载测试等多种场景。

### 为什么要使用JMeter？

使用JMeter的原因有很多。首先，它是一个开源工具，用户可以免费使用并根据需要进行定制。其次，JMeter支持多线程，能够模拟大量用户同时访问应用程序，从而帮助开发团队识别性能瓶颈。此外，JMeter的用户界面友好，易于上手，适合各种技术水平的用户。最后，JMeter提供丰富的报告功能，可以帮助团队分析测试结果，优化应用性能。

### JMeter v5.6.3版本更新了什么

在JMeter v5.6.3版本中，进行了多项重要更新和修复，包括：

- 修复了摘要报告中最小值的计算问题。
- 允许在`ConstantThroughputTimer.throughput`和`PreciseThroughputTimer`中使用变量。
- 记录了JMeter启动测试时发生的错误。
- 将`JDBCSampler.maxRows`传递给`Statement.setMaxRows`，以避免从数据库中获取额外的行。
- 恢复了生成的`pom.xml`文件中的引用。

### 更新日志

## 更新内容
- 修复了摘要报告中最小值的计算问题。
- 允许在`ConstantThroughputTimer.throughput`和`PreciseThroughputTimer`中使用变量。
- 记录了JMeter启动测试时发生的错误。
- 将`JDBCSampler.maxRows`传递给`Statement.setMaxRows`，以避免从数据库中获取额外的行。
- 恢复了生成的`pom.xml`文件中的引用。

## 非功能性更改
- 在停止测试主机之前添加了空格。
- 修复了指向错误数据库的链接。
- 解决了checkstyle缓存未命中的问题。
- 修复了多种语言中的中文翻译错误。
- 将Java 22版本（被忽略）添加到构建矩阵。
- 将Gradle升级到8.5。
- 将现有的Groovy测试迁移到Kotlin，移除了构建管道中的Groovy编译器。
- 将JUnit 3和JUnit 4测试重构为JUnit 5，移除了JUnit 4的依赖。
- 更新了5.6.3的变更日志。

## 更新依赖
- 更新了多个依赖项，包括`org.neo4j.driver:neo4j-java-driver`、`org.jetbrains.kotlinx:kotlinx-coroutines-bom`等。

## 新贡献者
- 新增了几位贡献者，他们在多个问题中做出了首次贡献。

**完整变更日志**: [查看完整变更](https://github.com/apache/jmeter/compare/rel/v5.6.2...rel/v5.6.3)