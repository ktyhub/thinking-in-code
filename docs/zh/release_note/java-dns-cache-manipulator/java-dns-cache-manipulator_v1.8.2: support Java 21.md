# java-dns-cache-manipulator v1.8.2: support Java 21
### java-dns-cache-manipulator是什么

java-dns-cache-manipulator是一个用于操作Java DNS缓存的库。它允许开发者在Java应用程序中灵活地管理DNS缓存，提供了对DNS解析的控制和优化，帮助提高网络请求的效率和可靠性。

### 为什么要使用java-dns-cache-manipulator?

使用java-dns-cache-manipulator的原因主要有以下几点：

- **性能优化**：通过有效管理DNS缓存，可以减少DNS解析的延迟，提高应用程序的响应速度。
- **灵活性**：开发者可以根据需求动态调整DNS缓存策略，适应不同的网络环境和应用场景。
- **故障恢复**：在DNS服务器出现问题时，可以通过缓存的记录继续提供服务，增强系统的稳定性。

### java-dns-cache-manipulator v1.8.2: support Java 21版本更新了什么

在v1.8.2版本中，java-dns-cache-manipulator增加了对Java 21的支持。这一更新包括：

- **新特性**：支持Java 21，确保库能够与最新的Java版本兼容。
- **文档改进**：更新了README文件，提供更清晰的使用指南。
- **构建改进**：更新了CI配置，增加了对JDK 21和22的支持，并升级了Maven Wrapper到3.9.6版本。

### 更新日志

- **特性**
  - 支持Java 21
- **文档**
  - 改进README文件
  - 更新徽章和版本说明
- **重构/改进**
  - 小幅重构和清理
- **构建/杂项**
  - 更新CI，添加JDK 21/22支持
  - 升级Maven Wrapper到3.9.6
  - 添加pom版本检查
  - 改进pom和构建脚本
  - 升级依赖和插件

### Java Dns Cache Manipulator Library

- [用户指南与文档](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.8.2/README.md)
- [Java API文档](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.8.2/index.html)

Maven依赖：

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.8.2</version>
</dependency>
```

已部署到 [Maven中央仓库](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.8.2/jar)。

### Java Dns Cache Manipulator Tool

- [用户指南与文档](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.8.2/README.md#java-dns-cache-manipulator-tool)
- 下载 [dcm-1.8.2.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.2/dcm-1.8.2.tar.gz)