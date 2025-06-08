# dynamic-tp v1.2.0(Feb 17, 2025)
### 为什么要使用dynamic-tp

在当今快速发展的技术环境中，应用程序的性能和可扩展性是成功的关键。然而，随着用户需求的不断增加，传统的线程池管理方式往往无法满足高并发场景下的需求。这时，dynamic-tp应运而生，它不仅提供了灵活的线程池配置，还能动态调整资源分配，确保系统在高负载下依然保持稳定。想象一下，当你的应用在流量高峰期崩溃时，dynamic-tp能够帮助你避免这种尴尬局面，成为你开发中的得力助手。

### dynamic-tp是什么

dynamic-tp是一个高性能的动态线程池管理框架，旨在解决Java应用程序中的线程管理问题。它允许开发者根据实际需求动态调整线程池的参数，从而提高系统的响应速度和资源利用率。通过简单的配置，开发者可以轻松实现对线程池的监控和管理，确保应用在不同负载下都能高效运行。

### 入门示例

假设你正在开发一个电商平台，用户在促销活动期间访问量激增。使用dynamic-tp，你可以在应用启动时配置一个动态线程池，设置初始线程数和最大线程数。比如，初始线程数设置为10，最大线程数设置为50。当用户访问量增加时，dynamic-tp会自动扩展线程池，确保请求能够及时处理。以下是一个简单的代码示例：

```java
DynamicThreadPoolConfig config = new DynamicThreadPoolConfig();
config.setCorePoolSize(10);
config.setMaxPoolSize(50);
config.setQueueCapacity(100);
DynamicThreadPoolExecutor executor = new DynamicThreadPoolExecutor(config);
executor.execute(() -> {
    // 处理用户请求
});
```

### dynamic-tp v1.2.0版本更新了什么

dynamic-tp v1.2.0是一个重要版本，主要功能是将Spring相关特性解耦为独立模块，方便在非Spring项目中使用。此版本移除了核心模块对Spring的依赖，增强了兼容性。此外，修复了一些关键bug，包括Dubbo版本兼容性、Redis限流器错误、以及调度任务取消的异常等。同时，优化了线程池配置提示功能和etcd的超时控制，提升了整体性能。

### 更新日志

v1.2.0 是一个大版本，主要功能是对 Spring 做了解耦，Spring 相关特性以独立 Module 的形式提供，其他非 Spring 框架集成 DynamicTp 时通过引入核心模块即可。

#### 特性
- 核心模块中移除对 Spring 的依赖，方便在其他非 Spring 项目中使用。

#### Bug修复
- 兼容当 Dubbo 版本在 3.0.9 到 3.1.8 之间时，替换的执行器命名为 INTERNAL_SERVICE_EXECUTOR。
- 修复 Redis 限流器在 Redis Cluster 模式下报错问题。
- 修复执行 scheduledFuture cancel 报错问题。
- 修复 adapter-grpc 模块，grpc client channel executor 被关闭的问题。
- 兼容高版本 okhttp3 Dispatcher 中线程池字段为 executorServiceOrNull 的情况。

#### 优化
- 优化线程池配置文件提示功能。
- etcd kvClient get 添加超时时间控制。
- zookeeper-starter 客户端初始化支持 zk 认证。
- 部分代码设计优化重构。

### 总结

dynamic-tp v1.2.0版本通过解耦Spring特性、修复多个关键bug和优化功能，显著提升了框架的灵活性和稳定性，使其在多种项目中都能高效应用。