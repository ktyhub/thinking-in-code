# java-dns-cache-manipulator v1.8.3
### java-dns-cache-manipulator是什么

Java DNS Cache Manipulator是一个用于操作Java DNS缓存的库。它允许开发者在Java应用程序中灵活地管理DNS缓存，提供了对DNS解析的更高控制能力。这对于需要频繁更新DNS记录的应用程序尤为重要，能够有效减少因DNS缓存导致的延迟和错误。

### 为什么要使用java-dns-cache-manipulator?

使用Java DNS Cache Manipulator的原因主要有以下几点：

- **灵活性**：它允许开发者在运行时动态更新DNS缓存，避免了因DNS记录变更而导致的服务中断。
- **性能优化**：通过控制DNS缓存，可以减少DNS查询的频率，从而提升应用程序的性能。
- **简化开发**：提供了简单易用的API，使得开发者可以更方便地管理DNS缓存，减少了复杂的手动操作。

### java-dns-cache-manipulator v1.8.3版本更新了什么

在v1.8.3版本中，Java DNS Cache Manipulator进行了以下更新：

- **功能增强**：支持通过JVM的`-javaagent`命令行选项进行使用。
- **重构与改进**：将默认的QA注释移至包中。
- **构建与维护**：升级了Maven Wrapper至3.9.9，添加了IntelliJ IDEA项目字典，升级了bash-buddy并改进了集成测试，更新了依赖和插件，并移除了非LTS的Java 20版本。

### 更新日志

- **功能**：
  - 支持通过JVM `-javaagent`命令行选项使用。

- **重构/改进**：
  - 将默认QA注释移至包中。

- **构建/维护**：
  - 升级Maven Wrapper至3.9.9。
  - 添加IntelliJ IDEA项目字典。
  - 升级bash-buddy并改进集成测试。
  - 更新依赖和插件。
  - 移除非LTS的Java 20版本。

- **Java Dns Cache Manipulator库**：
  - [用户指南与文档](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.8.3/README.md)
  - [Java API文档](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.8.3/index.html)

- **Maven依赖**：
```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.8.3</version>
</dependency>
```
已部署至[ Maven中央仓库](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.8.3/jar)。

- **Java Dns Cache Manipulator工具**：
  - [用户指南与文档](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.8.3/README.md#java-dns-cache-manipulator-tool)
  - 下载[dcm-1.8.3.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.3/dcm-1.8.3.tar.gz)