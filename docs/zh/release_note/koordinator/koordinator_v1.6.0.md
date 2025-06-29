# koordinator v1.6.0
### 为什么要使用koordinator

在当今快速发展的技术环境中，企业面临着资源管理的巨大挑战。随着应用程序的复杂性和对计算资源的需求不断增加，传统的资源调度方法往往显得力不从心。koordinator的出现，正是为了打破这种困境。它不仅提供了高效的资源调度解决方案，还能智能地优化资源的使用，确保每个应用程序都能获得所需的资源。想象一下，一个企业在高峰期的流量中，如何通过koordinator的智能调度，避免资源浪费和系统崩溃，这正是它的魅力所在。

### koordinator是什么

koordinator是一个开源的资源调度管理工具，旨在优化Kubernetes环境中的资源分配。它通过智能调度算法，帮助用户更高效地管理和分配计算资源，确保应用程序在运行时能够获得最佳性能。koordinator支持多种资源类型的调度，包括CPU、内存和GPU等，能够满足不同应用场景的需求。

### 入门示例

想象一下，一个在线游戏公司在推出新游戏时，流量激增，服务器负载骤增。使用koordinator，开发团队可以设置资源预留策略，确保在高峰期游戏服务器能够获得足够的CPU和内存资源。具体来说，开发者可以通过简单的配置文件，定义游戏服务器的资源需求，koordinator会自动识别并分配这些资源，确保游戏的流畅运行。以下是一个简单的配置示例：

```yaml
apiVersion: scheduling.koordinator.sh/v1
kind: Reservation
metadata:
  name: game-server-reservation
spec:
  resources:
    requests:
      cpu: "4"
      memory: "8Gi"
```

### koordinator v1.6.0版本更新了什么

koordinator v1.6.0版本带来了多项重要更新，包括改进了调度器的保留消息处理，增强了对NUMA资源的支持，修复了多个并发读写问题，并优化了调度性能。此外，增加了对设备拓扑策略的支持，使得资源调度更加灵活高效。

### 更新日志

## 更新内容
- 调度器：如果其他插件过滤掉的匹配保留消息进行了优化。
- 添加了ZiMengSheng到审批者别名中。
- 调度器：修复了保留插件在并发读写时的克隆问题。
- 调度器：修复了弹性配额TestPlugin_OnPodDelete的随机崩溃问题。
- 调度器：更改了保留事件消息格式。
- 调度器：在保留级别事件中添加节点信息。
- 调度器：支持消费保留的NUMA资源。
- 调度器：添加了新的Pod估算与负载感知插件。
- koord-descheduler：限制Pod驱逐的总数量。
- koord-descheduler：在LowNodeLoad中平衡生产Pod在节点之间的分布。
- 调度器：Pod更新不应更新时间戳。
- koord-descheduler：通过将对象限制器移动到协调器进行修复。
- koord-descheduler：增强LowNodeLoad评分器。
- koord-descheduler：支持在迁移控制器中驱逐所有裸Pod。
- koordlet：更新resctrl qos提案。
- koordlet：在状态通知中添加taskids。
- koord-manager：修复prom指标处理程序。
- koord-descheduler：修复调度器日志。
- 调度器：支持Pod请求精确匹配保留。
- 调度器：减少保留的cycleState开销。
- 调度器：修复reserveNUMAResource的bug。
- koordlet：添加allpods协调器功能。
- 调度器：减少设备共享内存开销。
- webhook：添加配额评估webhook。
- koordlet：升级nri到0.6.1。
- koord-manager：支持手动配置默认CPU归一化设置。
- koordlet：为netqos添加tc插件。
- koord-descheduler：修复生产阈值后低节点负载测试。
- koord-scheduler：Pod更新时不应更新时间戳。
- koord-descheduler：修复对象限制器。
- koord-descheduler：增强LowNodeLoad评分器。
- koord-descheduler：支持全局最大迁移限制。
- 调度器：跳过不必要的Filter&Score插件。
- 所有：支持优先级和抢占策略转换器。
- 调度器：弹性配额忽略终止Pod。
- koord-descheduler：修复maxMigratingGlobally参数的json标签。
- 调度器：支持多GPU共享。
- 调度器：当cpuPolicy不满足时返回framework.Unschedulable。
- koord-manager：修复资源放大中的无效分配。
- koordlet：添加一些信息以提高日志可读性。
- ci：为E2E作业添加磁盘GC。
- 调度器：修复NUMANode等于-1时的崩溃问题。
- 调度器：修复过多的ut日志。
- 调度器：支持调度器配置v1。
- 调度器：添加协同调度的preEnqueue。
- koordlet：为Pod级别添加resctrl运行时钩子。
- koord-manager：当节点标签更新时，nodeslo-controller入队请求。

### 总结

在koordinator v1.6.0版本中，开发团队进行了多项重要更新，旨在提升资源调度的灵活性和效率。这些更新不仅修复了多个已知问题，还增强了对NUMA资源的支持，优化了调度性能，使得用户在使用koordinator时能够获得更好的体验。