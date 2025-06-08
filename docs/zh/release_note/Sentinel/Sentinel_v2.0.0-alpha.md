# Sentinel v2.0.0-alpha
这是 Sentinel 2.0 的首个预览版本，带来了流量路由和负载均衡的构建模块及基本实现。

## 新功能 / 增强
- 增加流量路由和负载均衡的构建模块和基本实现 [#3024](https://github.com/alibaba/Sentinel/pull/3024)
- 为 OpenSergo 容错规范添加数据源扩展 [#2842](https://github.com/alibaba/Sentinel/pull/2842)
- 添加默认熔断规则支持 [#2232](https://github.com/alibaba/Sentinel/pull/2232)
- 优化 FlowRule 的限流控制行为，提升准确性并支持 maxQps > 1000 [#2951](https://github.com/alibaba/Sentinel/pull/2951)
- 更新 JMX MetricBeanWriter 扩展中的指标名称，优化监控选择 [#2976](https://github.com/alibaba/Sentinel/pull/2976)

## Bug 修复
- 修复在记录规则 ID 时 `LogSlot#entry` 出现的 NPE 问题 [#2980](https://github.com/alibaba/Sentinel/pull/2980)
- 修复 JMX 指标导出时资源名称包含 '*' 导致的错误问题 [#2992](https://github.com/alibaba/Sentinel/pull/2992)
- 修复 EtcdDataSource 的线程阻塞问题 [#2991](https://github.com/alibaba/Sentinel/pull/2991)
- 修复关闭 NacosDataSource 时可能出现的连接泄漏问题 [#2962](https://github.com/alibaba/Sentinel/pull/2962)

## Dashboard
- 为 Sentinel 仪表板添加简单的 Dockerfile [#2970](https://github.com/alibaba/Sentinel/pull/2970)

## 依赖项
- 升级 curator-recipes 至 5.1.0，以解决 ZooKeeper 数据源的 API 变更问题 [#2963](https://github.com/alibaba/Sentinel/pull/2963)