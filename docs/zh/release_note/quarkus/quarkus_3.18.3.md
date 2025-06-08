# quarkus 3.18.3
### 为什么要使用quarkus

在当今快速发展的技术环境中，开发者面临着一个矛盾：如何在保证应用性能的同时，快速响应市场需求。Quarkus正是为了解决这一难题而诞生的。它不仅能够显著提升Java应用的启动速度和内存占用，还提供了丰富的扩展功能，帮助开发者在微服务架构中游刃有余。想象一下，您正在开发一个需要快速迭代的项目，传统的Java框架却让您感到束手无策，而Quarkus的出现，仿佛为您打开了一扇通往高效开发的新大门。

### quarkus是什么

Quarkus是一个开源的Java框架，旨在为云原生应用提供最佳的开发体验。它结合了现代开发的最佳实践，支持GraalVM和HotSpot，使得Java应用能够在容器中以极低的内存占用和快速的启动时间运行。Quarkus的设计理念是“为 Kubernetes 而生”，使得开发者能够轻松构建和部署微服务。

### 入门示例

假设您正在开发一个在线购物平台，您需要一个快速响应的后端服务来处理用户请求。使用Quarkus，您可以通过简单的命令行工具快速创建一个新的项目。只需几行代码，您就可以定义RESTful API，处理用户的订单请求。比如，您可以创建一个`OrderResource`类，使用`@Path`注解定义路径，并通过`@GET`和`@POST`注解处理HTTP请求。Quarkus的热重载功能让您在开发过程中无需重启应用，实时查看更改效果，极大提升了开发效率。

### quarkus 3.18.3版本更新了什么

Quarkus 3.18.3版本带来了多个重要更新，包括修复Hibernate Reactive中的双向一对一关系的持久化错误，恢复OidcUtils中的两个JWT解码方法，解决Qute模板全局类生成的问题，以及修复了与OpenTelemetry扩展相关的健康检查端点追踪问题。此外，该版本还升级了多个依赖库，提升了整体性能和稳定性。

### 更新日志

#### 完整更新日志
- 修复了在Hibernate Reactive中执行`persist()`方法时与双向一对一关系相关的错误。
- 在小版本更新中删除了公共方法，导致语义版本控制的破坏，且没有任何警告。
- 恢复了OidcUtils中的两个JWT解码方法。
- 修复了Qute模板全局类在开发模式下生成的问题。
- QuarkusTest的TestProfile污染了QuarkusComponentTest的环境。
- 升级到Jandex 3.2.4。
- OpenTelemetry扩展在配置了自定义根路径时追踪健康端点。
- 优先执行简单的JUnit测试和`@QuarkusComponentTest`。
- 修复了在使用Hibernate Envers与自定义修订实体时的类加载器内存泄漏问题。
- 升级到Hibernate ORM 6.6.7.Final。
- 升级到Hibernate Reactive 2.4.5.Final。
- 升级到Vert.x 4.5.13和Netty 4.1.118.Final。

### 总结

Quarkus 3.18.3版本通过修复多个关键问题和升级依赖库，进一步提升了框架的稳定性和性能，为开发者提供了更强大的支持。这些更新不仅解决了开发过程中遇到的常见问题，还增强了Quarkus在云原生应用开发中的竞争力。