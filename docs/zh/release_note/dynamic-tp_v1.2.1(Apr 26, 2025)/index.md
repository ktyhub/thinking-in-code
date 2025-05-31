# dynamic-tp v1.2.1(Apr 26, 2025)
# 为什么要使用dynamic-tp

你是否经历过这样的噩梦？凌晨三点，服务器突然告警，CPU飙升到90%，查了半小时日志才发现是线程池队列溢出；线上促销活动流量激增，手动调整线程池参数却引发连锁故障；明明配置了拒绝策略，但任务丢失的警报依然此起彼伏......这些血淋淋的教训，都指向传统线程池管理的致命缺陷——**静态配置的僵化与监控的缺失**。

Dynamic-tp就像给系统安装了一个智能心脏起搏器，它让线程池参数在运行时动态呼吸：根据流量波动自动扩容核心线程，队列满载时智能触发拒绝策略告警，甚至能在服务重启时自动恢复最优配置。开发者再也不用在业务代码和线程调优之间反复横跳，真正实现**配置即代码，监控可视化**的革命性突破。

# dynamic-tp是什么

Dynamic-tp是面向Java应用的动态线程池治理框架，如同线程池领域的"自动驾驶系统"。它通过轻量级配置实现线程池参数的实时热更新，提供多维度的运行时监控指标，并内置智能告警机制。支持SpringBoot/SpringCloud等主流框架无缝集成，让线程池管理从"配置即终结"的原始状态，进化到"动态调优+智能预警"的运维新范式。

# 入门示例

**真实场景**：某电商平台秒杀系统，常规线程池配置导致大促期间频繁触发拒绝策略，引发客诉。

**开发实战**：
1. 引入依赖
```xml
<dependency>
    <groupId>org.dromara</groupId>
    <artifactId>dynamic-tp-spring-boot-starter</artifactId>
    <version>1.2.1</version>
</dependency>
```

2. 配置智能线程池
```yaml
dynamictp:
  executors:
    - threadPoolName: seckillExecutor
      corePoolSize: 20
      maximumPoolSize: 100
      queueCapacity: 2000
      allowCoreThreadTimeOut: true
      notifyItems:
        - type: capacity
          threshold: 60
          period: 30
```

3. 注解注入使用
```java
@DynamicTp("seckillExecutor")
public void handleSeckillRequest(OrderRequest request) {
    // 秒杀业务逻辑
}
```

当瞬时流量冲击时，框架自动扩容线程至100个，队列使用率达60%触发预警，系统吞吐量提升300%且零任务丢失。

# dynamic-tp v1.2.1版本更新

1. 重构告警规则体系，新增统计周期与静默配置
2. 监控端点dynamic-tp更名为dynamictp消除SpringBoot告警
3. 引入JMH基准测试模块量化性能指标
4. 采用ByteBuddy替换CGLIB实现动态代理
5. 升级Dubbo/Apollo等核心依赖版本

# 更新日志

## 升级注意事项

### DtpEndpoint 端点名称修改
实时指标监控端点名称从 `dynamic-tp` 修改为 `dynamictp`，消除 SpringBoot 的非法字符警告。

### 告警规则重构
v1.2.1 之前的告警规则通过 `threshold` 和 `interval` 字段控制，存在以下问题：
- 缺乏时间窗口统计概念
- 单次触发即告警的灵敏度过高
- 无法关闭静默期

新版告警规则引入四个核心字段：
```yaml
notifyItems:
  - type: capacity
    threshold: 80    # 触发阈值
    count: 2         # 统计周期内触发次数
    period: 30       # 统计窗口（秒）
    silencePeriod: 0 # 静默时长（0表示不静默）
```

## Feature
- 新增 JMH 基准测试模块

## Refactor
- 使用 ByteBuddy 重构动态代理
- 优化告警规则减少无效告警
- 修改监控端点名称

## Bugfix
- 修复 SpringBoot DevTool 重启导致的线程池异常
- 修复缺少 Jackson 依赖时的静默报错问题
- 优化潜在 NPE 风险

## Dependency
- Dubbo 3.0.7 → 3.0.14
- Apollo 1.5.0 → 2.0.0
- SkyWalking 8.11.0 → 9.1.0

# 版本更新总结

本次升级重点重构了告警机制，引入四维触发规则让告警更精准；优化监控端点命名规范，消除框架警告；通过基准测试量化性能，并全面升级主流中间件适配版本。这些改进如同为线程池装上高精度传感器，让系统稳定性监控进入毫秒级响应时代。