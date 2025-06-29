# dynamic-tp 1.1.7 (Apr 1, 2024)
### 为什么要使用dynamic-tp

在当今快速发展的技术环境中，应用程序的性能和响应速度至关重要。然而，许多开发者在面对高并发请求时，常常感到无能为力。dynamic-tp的出现，正是为了解决这一矛盾。它不仅能动态调整线程池的配置，还能根据实时需求优化资源使用，帮助开发者在复杂的场景中游刃有余。选择dynamic-tp，就是选择了一条通往高效与灵活的道路。

### dynamic-tp是什么

dynamic-tp是一个动态线程池管理框架，旨在帮助开发者在Java应用中高效地管理线程池。它提供了灵活的配置选项，能够根据实时负载自动调整线程池的参数，从而优化资源使用和提高系统性能。通过使用dynamic-tp，开发者可以更轻松地应对高并发场景，提升应用的稳定性和响应速度。

### 入门示例

想象一下，一个电商平台在促销期间，用户访问量激增。为了应对这种突发的高并发请求，开发者可以使用dynamic-tp来动态调整线程池的大小。以下是一个简单的示例：

```java
DynamicTpConfig config = new DynamicTpConfig();
config.setCorePoolSize(10);
config.setMaxPoolSize(50);
config.setKeepAliveTime(60);
DynamicThreadPoolExecutor executor = new DynamicThreadPoolExecutor(config);

executor.submit(() -> {
    // 处理用户请求
});
```

在这个场景中，dynamic-tp能够根据实时的请求量，自动调整线程池的大小，确保系统始终保持高效运行。

### dynamic-tp 1.1.7 (Apr 1, 2024)版本更新了什么

在1.1.7版本中，dynamic-tp引入了多个新特性和优化，包括增加了tryInterrupt字段以控制任务超时后的线程中断，新增了PriorityDtpExecutor以支持任务优先级处理，改进了指标数据采集方式，增强了告警平台配置的简便性，并修复了一系列bug，提升了整体稳定性和性能。

### 更新日志

## 特性
- 线程池配置增加tryInterrupt字段，控制任务执行超时后是否需要中断当前线程。
- 新增PriorityDtpExecutor，适用于可以指定任务的处理优先级场景。
- 指标数据采集器新增jmx方式。
- 线程池配置新增env字段，控制告警信息里的环境取值。
- 告警平台配置增加webhook字段，降低配置复杂度。

## Bug修复
- 修复上下文刷新后，DtpMonitor重复创建调度任务的问题。
- 修复OpenTelemetryWrapper未将traceId传入DynamicTp框架的问题。
- 修复告警时，tid错乱问题。
- 修复dubbo 2.7.5以下版本动态线程池不生效的问题。
- 修复异常拒绝任务时跳过afterReject执行的问题。
- 修复飞书告警，机器人签名不为空时报错的问题。

## 优化
- 优化spring-configuration-metadata，配置提示完整化。
- 支持apache dubbo最新版本。
- 完善示例。
- 部分代码优化重构。

## 重构
- 将通知告警基础包从core模块移动到common模块。
- 将plugin插件包从core模块移动到common模块。

### 总结

在dynamic-tp 1.1.7版本中，新增了多个特性以增强线程池的灵活性和可配置性，同时修复了一系列影响稳定性的bug，优化了代码结构和示例，确保开发者能够更高效地使用这一强大的工具。