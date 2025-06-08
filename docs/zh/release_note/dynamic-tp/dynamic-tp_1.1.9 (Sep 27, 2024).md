# dynamic-tp 1.1.9 (Sep 27, 2024)
### 为什么要使用dynamic-tp

在当今快速发展的技术环境中，应用程序的性能和可扩展性至关重要。然而，许多开发者在处理线程池时常常面临着配置复杂、性能瓶颈和资源浪费等矛盾。dynamic-tp的出现，正是为了打破这一困局。它不仅提供了灵活的线程池管理，还能动态调整配置，帮助开发者在高并发场景下实现更高的效率和更低的资源消耗。选择dynamic-tp，意味着选择了一条通往高效开发的捷径。

### dynamic-tp是什么

dynamic-tp是一个动态线程池管理框架，旨在简化Java应用程序中的线程池配置和管理。它允许开发者根据实际需求动态调整线程池的参数，提升应用程序的性能和响应速度。通过提供灵活的配置选项，dynamic-tp帮助开发者更好地应对高并发场景，优化资源使用。

### 入门示例

想象一下，你正在开发一个电商平台，用户在促销期间的访问量激增。使用dynamic-tp，你可以轻松配置多个线程池来处理不同的任务。例如，你可以为订单处理、支付和库存管理分别创建线程池，并根据实时流量动态调整它们的大小。以下是一个简单的配置示例：

```yaml
spring:
  dynamic:
    tp:
      executors:
        - threadPoolName: orderExecutor
          corePoolSize: 10
          maximumPoolSize: 50
          queueCapacity: 1000
        - threadPoolName: paymentExecutor
          corePoolSize: 5
          maximumPoolSize: 20
          queueCapacity: 500
```

### dynamic-tp 1.1.9 (Sep 27, 2024)版本更新了什么

在1.1.9版本中，dynamic-tp新增了AgentAware功能，解决了在其他agent增强Runnable时的统计问题。引入了全局配置功能，简化了多线程池的配置。新增了autoCreate字段，允许开发者选择是否自动生成DtpExecutor实例。此外，Liteflow线程池适配模块也被引入，增强了框架的灵活性。最后，修复了一系列bug，提升了整体稳定性。

### 更新日志

## 特性
- 新增AgentAware，解决在有其他agent增强Runnable情况下的统计功能，1.1.7及之前版本为了防止内存泄露会关闭这些功能。
- 新增全局配置功能，减少配置量，项目中可能会定义多个线程池，新增globalExecutorProps配置项。
- 线程池配置新增autoCreate字段，标识是否自动生成DtpExecutor实例，默认为true。
- 新增规则引擎框架Liteflow线程池适配模块。
- ScheduledDtpExecutor支持TaskWrapper任务包装。

## Bug修复
- 修复Spring ThreadPoolTaskExecutor被框架管理后，线程池装饰器失效问题。
- 修复RocketMQ线程池适配模块的NoSuchMethodError错误。
- 修复TaskEnhanceAware在多Wrapper包装后taskName丢失问题。
- 修复JMX报错InstanceAlreadyExistsException问题。
- 修复飞书报警消息接受人为空问题。
- 修复钉钉告警@所有人不生效问题。
- 修复动态更新taskWrappers后导致线程池任务装饰器丢失问题。

## 优化
- 三方中间件线程池支持运行过程异常打印。
- Undertow线程池支持任务包装器。
- juc线程池、spring线程池支持更多参数动态调整。
- 部分代码设计优化重构。

### 总结

在1.1.9版本中，dynamic-tp通过新增特性、修复bug和优化设计，进一步提升了线程池管理的灵活性和稳定性。无论是全局配置的引入，还是对Liteflow的支持，都为开发者提供了更强大的工具，以应对复杂的应用场景。

### 爆款标题

- "dynamic-tp 1.1.9：全新AgentAware功能助力高效线程管理！"
- "解锁dynamic-tp 1.1.9：全局配置与Liteflow适配模块重磅上线！"
- "dynamic-tp 1.1.9版本更新：让你的线程池管理更简单！"
- "提升性能！dynamic-tp 1.1.9带来全新线程池配置体验！"
- "dynamic-tp 1.1.9：修复多项bug，优化线程池管理的最佳选择！"