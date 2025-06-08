# sofa-boot v4.3.0
### 什么是 Sofa-Boot？

Sofa-Boot 是一个基于 Spring Boot 的微服务框架，旨在简化微服务的开发和部署。它结合了 SOFA（Service-Oriented Framework Architecture）架构的优势，提供了一系列功能强大的工具和组件，帮助开发者快速构建高效、可扩展的微服务应用。

### 为什么要使用 Sofa-Boot？

使用 Sofa-Boot 的原因有很多。首先，它提供了开箱即用的配置和自动化功能，减少了开发者的工作量。其次，Sofa-Boot 支持多种微服务架构模式，能够灵活应对不同的业务需求。此外，它还具备良好的性能和可扩展性，适合大规模的企业级应用。最后，Sofa-Boot 拥有活跃的社区支持，开发者可以轻松获取帮助和资源。

### Sofa-Boot v4.3.0 版本更新了什么？

在 v4.3.0 版本中，Sofa-Boot 进行了多项重要更新，包括：

- 支持 PolarisRegistryConfiguration。
- 在监控开始时添加 queueRemainingSize 日志。
- 在 sofa-boot-actuator-autoconfigure 模块中添加 spring-boot-configuration-processor。
- 支持 Sofa 线程池监控。
- 支持 Kubernetes 注册配置。
- 支持 Mac M1（osx-aarch_64）编译和测试。
- 更新 Spring Boot 至 3.2.6。

### 更新日志

**⭐️ 新特性**
- 支持 PolarisRegistryConfiguration。
- 在监控开始时添加 queueRemainingSize 日志。
- 在 sofa-boot-actuator-autoconfigure 模块中添加 spring-boot-configuration-processor。
- 支持 Sofa 线程池监控。
- 支持 Kubernetes 注册配置。
- 支持 Mac M1（osx-aarch_64）编译和测试。
- 更新 Spring Boot 至 3.2.6。

**🔨 优化**
- 优化 getBiz 方法，减少 Map.toArray() 的调用。
- 移除 DynamicJvmServiceInvoker 中的 ThreadLocal。
- 添加新的测试用例。
- 添加代码扫描操作。
- 将 GitHub Action 版本升级至 v4。
- 更新社区联系方式。
- 应用启动时更新注册顺序。
- 在异步调用方法中添加 runnable/callable 类。

**🐞 Bug 修复**
- 修复健康检查双重检查成功后，异步注册的问题。
- 修复 jvmfilterholder 中的并发问题。
- 修复并行检查场景中的就绪健康检查列表错误。
- 修复构建状态的 README。
- 修复拼写错误。
- 修复 lazyinit 值传递问题。
- 修复 beans 信息丢失的 parentId。
- 修复 sofaruntime 管理器在未关闭时销毁的问题。

**新贡献者**
- NTP1996 在 #1287 中做出了首次贡献。
- wangchengming666 在 #1290 中做出了首次贡献。
- JAYDIPSINH27 在 #1299 中做出了首次贡献。
- Duan-0916 在 #1274 中做出了首次贡献。

**完整变更日志**: [v4.2.0...v4.3.0](https://github.com/sofastack/sofa-boot/compare/v4.2.0...v4.3.0)