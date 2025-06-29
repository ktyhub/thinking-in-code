# Sentinel v1.8.7

## 功能 / 增强

- 增加默认熔断器规则支持 [#2232](https://github.com/alibaba/Sentinel/pull/2232)
- 更新 JMX MetricBeanWriter 扩展中的指标名称，以便更好地选择监控 [#2976](https://github.com/alibaba/Sentinel/pull/2976)
- 优化 FlowRule 的限流控制行为：提高精度并支持 maxQps > 1000 [#2951](https://github.com/alibaba/Sentinel/pull/2951)
- 为 sentinel-datasource-redis 增加 SSL 支持 [#3045](https://github.com/alibaba/Sentinel/pull/3045)
- 增加令牌桶的基本实现以进行流量控制 [#3106](https://github.com/alibaba/Sentinel/pull/3106)
- 移除 entry.exit() 中批量计数和参数的携带要求 [#3114](https://github.com/alibaba/Sentinel/pull/3114)
- 将默认的基于 JUL 的日志记录设为异步 [#3136](https://github.com/alibaba/Sentinel/pull/3136)
- 将所有 ThreadPool 设为 static final [#3243](https://github.com/alibaba/Sentinel/pull/3243)
- 为 Sentinel 指标增加 Prometheus 导出模块 [#3173](https://github.com/alibaba/Sentinel/pull/3173)
- 资源规则（流控/降级/参数/授权）支持正则表达式匹配 [#3251](https://github.com/alibaba/Sentinel/pull/3251)

## Bug 修复

- 修复 LogSlot#entry 在记录规则 ID 时的 NPE 问题 [#2980](https://github.com/alibaba/Sentinel/pull/2980)
- 修复当资源名称包含 "*" 时，JMX 指标导出器出现的错误 [#2992](https://github.com/alibaba/Sentinel/pull/2992)
- 修复 EtcdDataSource 的线程阻塞问题 [#2991](https://github.com/alibaba/Sentinel/pull/2991)
- 修复关闭 NacosDataSource 时潜在的连接泄漏问题 [#2962](https://github.com/alibaba/Sentinel/pull/2962)
- 修复 SofaRpcFallbackRegistryTest 中依赖顺序的问题 [#3282](https://github.com/alibaba/Sentinel/pull/3282)

## 控制面板

- 为 Sentinel 控制面板增加简单的 Dockerfile [#2970](https://github.com/alibaba/Sentinel/pull/2970)

## 依赖

- 在 sentinel-cluster/sentinel-cluster-server-envoy-rls 模块中将 snakeyaml 更新至 1.32 [#2921](https://github.com/alibaba/Sentinel/pull/2921)
- 在 sentinel-demo/sentinel-demo-apache-dubbo 模块中将 dubbo 更新至 2.7.18 [#2923](https://github.com/alibaba/Sentinel/pull/2923)
- 更新适配模块的 protobuf & gRPC 版本以修复 macOS aarch64 编译错误 [#2993](https://github.com/alibaba/Sentinel/pull/2993)
- 升级 curator-recipes 至 5.1.0 以修复 ZooKeeper 数据源的 API 变更 [#2963](https://github.com/alibaba/Sentinel/pull/2963)
```