# logging-log4j2 2.22.0

这次发布提供了每个工件的 [CycloneDX 软件物料清单 (SBOM)](https://cyclonedx.org/capabilities/sbom)，并包含了修复 JPMS 和 OSGi 基础设施问题的补丁，这些问题在 `2.21.0` 版本中进行了大幅改进。此外，还进行了依赖项更新和一些其他的小修小改。

### CycloneDX 软件物料清单 (SBOM)

这是**第一个 Log4j 版本**，它为每个工件提供了 [CycloneDX 软件物料清单 (SBOM)](https://cyclonedx.org/capabilities/sbom)。生成的 SBOM 作为带有 `cyclonedx` 分类器和 XML 扩展名的工件附加，即 `<artifactId>-<version>-cyclonedx.xml`。它们包含对 [CycloneDX 漏洞披露报告 (VDR)](https://cyclonedx.org/capabilities/vdr) 的 `vulnerability-assertion` 引用，Apache Logging Services 用于其维护的所有项目。这个 VDR 可以通过以下 URL 访问：[https://logging.apache.org/cyclonedx/vdr.xml[]](https://logging.apache.org/cyclonedx/vdr.xml[])

SBOM 的生成由 `logging-parent` 简化，详情请参见 [其网站](https://logging.apache.org/logging-parent/latest/#cyclonedx-sbom)。

### 变更

- 更改 `FormattedMessage` 格式化程序的评估顺序。消息仅在不符合 `java.text.MessageFormat` 或 `ParameterizedMessage` 格式时才使用 `java.util.Format` 进行评估。（[#1223](https://github.com/apache/logging-log4j2/issues/1223)）
- 将 HTTP 基本认证的默认编码更改为 UTF-8，并添加 `log4j2.configurationAuthorizationEncoding` 属性以覆盖它。（[#1970](https://github.com/apache/logging-log4j2/pull/1970)）
- 更新 `com.fasterxml.jackson:jackson-bom` 到版本 `2.16.0`（[#1974](https://github.com/apache/logging-log4j2/pull/1974)）
- 更新 `com.github.luben:zstd-jni` 到版本 `1.5.5-10`（[#1940](https://github.com/apache/logging-log4j2/pull/1940)）
- 更新 `com.google.guava:guava` 到版本 `32.1.3-jre`（[#1875](https://github.com/apache/logging-log4j2/pull/1875)）
- 更新 `io.netty:netty-bom` 到版本 `4.1.101.Final`（[#1960](https://github.com/apache/logging-log4j2/pull/1960)）
- 更新 `org.eclipse.persistence:org.eclipse.persistence.jpa` 到版本 `2.7.13`（[#1900](https://github.com/apache/logging-log4j2/pull/1900)）
- 更新 `org.fusesource.jansi:jansi` 到版本 `2.4.1`（[#1907](https://github.com/apache/logging-log4j2/pull/1907)）
- 更新 `org.mongodb:bson` 到版本 `4.11.1`（[#1957](https://github.com/apache/logging-log4j2/pull/1957)）
- 更新 `org.springframework:spring-framework-bom` 到版本 `5.3.30`
- 更新 `org.springframework.boot:spring-boot` 到版本 `2.7.17`（[#1874](https://github.com/apache/logging-log4j2/pull/1874)）
- 更新 `org.springframework:spring-framework-bom` 到版本 `5.3.31`（[#1973](https://github.com/apache/logging-log4j2/pull/1973)）
- 更新 `org.zeromq:jeromq` 到版本 `0.5.4`（[#1878](https://github.com/apache/logging-log4j2/pull/1878)）

### 移除

- 移除了未使用的 `FastDateParser`，它导致了不必要的堆内存开销（[LOG4J2-3672](https://issues.apache.org/jira/browse/LOG4J2-3672), [#1848](https://github.com/apache/logging-log4j2/pull/1848)）

### 修复

- 修复了 MDC 模式转换器导致的 `%notEmpty` 问题（[#1922](https://github.com/apache/logging-log4j2/issues/1922)）
- 导出 `log4j-layout-template-json` 和 `log4j-1.2-api` 中缺失的 OSGi 和 JPMS 模块（[#1895](https://github.com/apache/logging-log4j2/issues/1895)）
- 修复 `spring-test` 依赖范围更改问题（[LOG4J2-3675](https://issues.apache.org/jira/browse/LOG4J2-3675)）
- 修复 JPMS 描述符导致的 `jlink` 问题（[#1896](https://github.com/apache/logging-log4j2/issues/1896)）
- 添加缺失的 `Implementation-` 和 `Specification-` 条目到 `MANIFEST.MF`（由 `logging-parent` 版本 `10.3.0` 更新实现）（[#1923](https://github.com/apache/logging-log4j2/issues/1923)）
- 修复了当 `Logger` 使用 `ReusableMessageFactory` 序列化时抛出的 `NotSerializableException`（[#1884](https://github.com/apache/logging-log4j2/issues/1884)）
```