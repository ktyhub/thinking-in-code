# feign OpenFeign 13.4
### feign是什么

Feign是一个声明式的Web服务客户端，旨在简化HTTP API的调用。通过使用注解，开发者可以轻松地定义RESTful服务的接口，并通过Feign自动生成实现。这使得与远程服务的交互变得更加简单和直观。

### 为什么要使用feign?

使用Feign的主要原因包括：

- **简化代码**：通过注解方式定义HTTP请求，减少了样板代码的编写。
- **集成支持**：Feign可以与Spring Cloud等框架无缝集成，支持负载均衡、熔断等功能。
- **可扩展性**：支持自定义编码器、解码器和错误处理器，满足不同的需求。
- **易于测试**：Feign的接口可以轻松地进行单元测试。

### feign OpenFeign 13.4版本更新了什么

在OpenFeign 13.4版本中，进行了多项重要更新，包括：

- 为`RetryableException`添加了描述。
- 改进了`feign-metrics`的文档。
- 允许在`RequestTemplate`中添加字面值的头部值。
- 自动重写功能的增强。
- 更新了`receive-pr.yml`以使用`master`分支。
- 修复了在接收“空”响应时的空指针异常。
- 关闭了Logger中的`Response.body()`以避免资源泄漏。
- 对静态嵌套测试类进行了优化。

### 更新日志

## 更新内容

- 为`RetryableException`添加了描述。
- 改进了`feign-metrics`的文档。
- 允许在`RequestTemplate`中添加字面值的头部值。
- 增强了自动重写功能。
- 更新`receive-pr.yml`以使用`master`分支。
- 修复了在接收“空”响应时的空指针异常。
- 关闭Logger中的`Response.body()`以避免资源泄漏。
- 对静态嵌套测试类进行了优化。

---

### 更新库版本的PR列表

- 将`org.springframework:spring-context`从6.1.9更新到6.1.10。
- 将`org.apache.maven.plugins:maven-jar-plugin`从3.4.1更新到3.4.2。
- 将`org.skyscreamer:jsonassert`从1.5.1更新到1.5.2。
- 将`org.junit:junit-bom`从5.10.2更新到5.10.3。
- 将`org.moditect:moditect-maven-plugin`从1.2.1.Final更新到1.2.2.Final。
- 将`org.codehaus.mojo:versions-maven-plugin`从2.16.2更新到2.17.0。
- 将`org.skyscreamer:jsonassert`从1.5.2更新到1.5.3。
- 将`jackson.version`从2.17.1更新到2.17.2。
- 将`micrometer.version`从1.13.1更新到1.13.2。
- 将`org.assertj:assertj-core`从3.26.0更新到3.26.3。
- 将`reactor.version`从3.6.7更新到3.6.8。
- 将`maven-surefire-plugin.version`从3.3.0更新到3.3.1。
- 将`org.springframework.cloud:spring-cloud-dependencies`从2023.0.2更新到2023.0.3。
- 将`org.springframework:spring-context`从6.1.10更新到6.1.11。
- 将`metrics5`版本更新。
- 将`org.codehaus.mojo:versions-maven-plugin`从2.17.0更新到2.17.1。
- 将`commons-codec:commons-codec`从1.17.0更新到1.17.1。
- 将`netty.version`从4.1.111.Final更新到4.1.112.Final。
- 将`org.openrewrite.recipe:rewrite-migrate-java`从2.20.0更新到2.21.0。
- 将`org.openrewrite.maven:rewrite-maven-plugin`从5.36.0更新到5.37.0。
- 将`com.alibaba.fastjson2:fastjson2`从2.0.49更新到2.0.52。
- 将`org.openrewrite.recipe:rewrite-testing-frameworks`从2.14.0更新到2.15.0。
- 将`org.apache.maven.plugins:maven-javadoc-plugin`从3.7.0更新到3.8.0。
- 将`org.openrewrite.maven:rewrite-maven-plugin`从5.37.0更新到5.37.1。
- 将`org.apache.maven.plugins:maven-release-plugin`从3.1.0更新到3.1.1。
- 将`jersey.version`从2.43更新到2.44。

### 新贡献者

- 新贡献者包括多位开发者，他们在多个PR中做出了首次贡献。