# servicecomb-java-chassis Apache ServiceComb Java-Chassis 3.2.1
### servicecomb-java-chassis是什么

ServiceComb Java Chassis是一个开源的微服务框架，旨在简化Java开发者构建和管理微服务的过程。它提供了一系列工具和库，帮助开发者快速构建、部署和监控微服务应用。通过ServiceComb，开发者可以轻松实现服务注册、发现、负载均衡、熔断、限流等功能，从而提高应用的可用性和可维护性。

### 为什么要使用servicecomb-java-chassis?

使用ServiceComb Java Chassis的理由有很多。首先，它支持多种微服务架构模式，能够满足不同业务需求。其次，框架内置了丰富的功能，如服务治理、监控和日志管理，极大地降低了开发和运维的复杂性。此外，ServiceComb还提供了良好的扩展性，开发者可以根据需要自定义功能，灵活应对业务变化。最后，作为一个开源项目，ServiceComb拥有活跃的社区支持，开发者可以获得及时的帮助和更新。

### servicecomb-java-chassis Apache ServiceComb Java-Chassis 3.2.1版本更新了什么

在Apache ServiceComb Java-Chassis 3.2.1版本中，进行了多项重要更新和修复。以下是一些主要的更新内容：

- 支持在请求头中使用数组类型的参数。
- 支持配置操作传输。
- 引入WebSocket编程模型。
- 允许设置每个窗口的最大RST_STREAM。
- 增加了控制路由规则不匹配时返回空实例的开关。
- 允许禁用消费者和提供者的区域感知。
- 添加了对使用旧版配置的警告。
- 支持工厂Bean的RpcReference的急切注入。
- 修复了服务名称不能包含点字符的问题。
- 更新了多个依赖项以提高安全性和性能。

### 更新日志

## What's Changed
- 支持请求头参数的数组类型。
- 支持配置操作传输。
- 支持WebSocket编程模型。
- 允许设置每个窗口的最大RST_STREAM。
- 增加了控制路由规则不匹配时返回空实例的开关。
- 允许禁用消费者和提供者的区域感知。
- 添加了对使用旧版配置的警告。
- 支持工厂Bean的RpcReference的急切注入。
- 修复了服务名称不能包含点字符的问题。
- 对Netty进行了更新，增加了maxFormBufferedBytes和maxFormFields。

## Dependencies update
- 更新了多个依赖项，包括commons-logging、maven-failsafe-plugin、vertx.version等，以提高安全性和性能。

**完整更新日志**: [3.2.0...3.2.1](https://github.com/apache/servicecomb-java-chassis/compare/3.2.0...3.2.1)