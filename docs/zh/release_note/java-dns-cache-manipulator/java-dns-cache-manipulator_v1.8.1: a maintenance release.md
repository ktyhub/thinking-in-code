# java-dns-cache-manipulator v1.8.1: a maintenance release
### servicecomb-java-chassis是什么

ServiceComb Java Chassis 是一个开源的微服务框架，旨在帮助开发者快速构建和管理微服务应用。它提供了丰富的功能，包括服务注册与发现、负载均衡、熔断、监控等，支持多种通信协议和数据格式，使得微服务的开发和部署更加高效和灵活。

### 为什么要使用servicecomb-java-chassis?

使用 ServiceComb Java Chassis 的原因包括：

- **高效性**：框架提供了多种内置功能，减少了开发者的重复工作，提高了开发效率。
- **灵活性**：支持多种协议和数据格式，适应不同的业务需求。
- **可扩展性**：框架设计支持插件机制，方便用户根据需求扩展功能。
- **社区支持**：作为 Apache 的一部分，拥有活跃的社区支持和丰富的文档资源。

### servicecomb-java-chassis Apache ServiceComb Java-Chassis 3.2.1版本更新了什么

在 3.2.1 版本中，ServiceComb Java Chassis 进行了多项重要更新，主要包括：

- **支持数组类型的header参数**。
- **支持配置操作传输**。
- **支持 WebSocket 编程模型**。
- **能够设置每个窗口的最大 RST_STREAM**。
- **添加开关以控制路由规则不匹配时返回空实例**。
- **能够禁用消费者和提供者的区域感知**。
- **添加对使用旧版配置的警告**。
- **支持工厂 Bean 的 RpcReference 的急切注入**。
- **修复服务名称不能包含点字符的问题**。
- **更新了多个依赖项以提高性能和安全性**。

### 更新日志

## What's Changed
- header 参数支持数组类型
- 支持配置操作传输
- 支持 WebSocket 编程模型
- 能够设置每个窗口的最大 RST_STREAM
- 添加开关以控制路由规则不匹配时返回空实例
- 能够禁用消费者和提供者的区域感知
- 添加对使用旧版配置的警告
- 支持工厂 Bean 的 RpcReference 的急切注入
- 修复服务名称不能包含点字符的问题
- 对 netty 的 maxFormBufferedBytes 和 maxFormFields 进行了更改

## Dependencies update
- 更新 commons-logging:commons-logging 从 1.3.2 到 1.3.3
- 更新 org.apache.maven.plugins:maven-failsafe-plugin 从 3.3.0 到 3.3.1
- 更新 vertx.version 从 4.5.8 到 4.5.9
- 更新 org.apache.maven.plugins:maven-project-info-reports-plugin 从 3.6.1 到 3.6.2
- 更新 io.fabric8:docker-maven-plugin 从 0.44.0 到 0.45.0
- 更新 org.apache.maven.plugins:maven-javadoc-plugin 从 3.7.0 到 3.8.0
- 更新 org.owasp:dependency-check-maven 从 9.2.0 到 10.0.3
- 更新 org.apache.maven.plugins:maven-surefire-plugin 从 3.3.0 到 3.3.1
- 更新 com.fasterxml.jackson:jackson-bom 从 2.17.1 到 2.17.2
- 更新 org.assertj:assertj-core 从 3.26.0 到 3.26.3
- 更新 com.alibaba.nacos:nacos-client 从 2.3.3 到 2.4.0
- 更新 org.apache.commons:commons-lang3 从 3.14.0 到 3.15.0
- 更新 com.github.spotbugs:spotbugs-maven-plugin 从 4.8.6.1 到 4.8.6.2
- 更新 io.netty:netty-bom 从 4.1.111.Final 到 4.1.112.Final
- 更新 org.apache.maven.plugins:maven-release-plugin 从 3.1.0 到 3.1.1
- 更新 io.micrometer:micrometer-bom 从 1.13.1 到 1.13.2
- 更新 spring-boot.version 从 3.3.1 到 3.3.2
- 添加测试和文档，确保 header 在非 ASCII 时进行编码

**完整变更日志**: [3.2.0...3.2.1](https://github.com/apache/servicecomb-java-chassis/compare/3.2.0...3.2.1)