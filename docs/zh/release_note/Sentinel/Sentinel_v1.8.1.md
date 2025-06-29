# Sentinel v1.8.1
```markdown
**注意**: 自1.8.1版本起，Sentinel需要JDK 1.8或更高版本。

## 功能 / 增强

- 重构`SpiLoader`并增强SPI机制（[#1383](https://github.com/alibaba/Sentinel/pull/1383)）
- 在令牌服务器模块中增加了集群并发限制的基础实现（[#1631](https://github.com/alibaba/Sentinel/pull/1631)）
- 增加Motan RPC适配器实现（[#1825](https://github.com/alibaba/Sentinel/pull/1825)）
- 改进Dubbo 2.6.x适配器中的默认阻止回退逻辑，避免序列化问题（[#1794](https://github.com/alibaba/Sentinel/pull/1794)）
- 支持通过`SentinelConfig`属性设置指标日志的刷新间隔（[#1919](https://github.com/alibaba/Sentinel/pull/1919)）
- 在传输心跳模块中支持HTTP和HTTPS协议（[#1896](https://github.com/alibaba/Sentinel/pull/1896)）
- 使令牌客户端`NettyTransportClient.getCurrentId()`线程安全（[#1707](https://github.com/alibaba/Sentinel/pull/1707)）

## Bug修复

- 修复在路由/API第一次请求前更新网关流量规则和参数流量规则时的NPE问题（[#1729](https://github.com/alibaba/Sentinel/pull/1729), [#1901](https://github.com/alibaba/Sentinel/pull/1901)）
- 修复Zuul 1.x适配器中`getServletPath()`在URL匹配时可能返回空值的Bug（[#1605](https://github.com/alibaba/Sentinel/pull/1605)）
- 修复当`slowRatioThreshold`为100%时请求永远不会被阻止的问题（[#1779](https://github.com/alibaba/Sentinel/pull/1779)）

## 控制台

- 在`DegradeRule`对话框中添加`statIntervalMs`字段（[#1781](https://github.com/alibaba/Sentinel/pull/1781)）
- 支持在`authFilterExcludeUrls`中匹配路径模式如`/xx/**`（[#1971](https://github.com/alibaba/Sentinel/pull/1971)）
- 修复实时监控页面中的内存泄漏问题（[#1905](https://github.com/alibaba/Sentinel/pull/1905)）
- 改进在并发条件下的`MetricFetcher`（[#1918](https://github.com/alibaba/Sentinel/pull/1918)）

## 依赖

- 升级`fastjson`至1.2.75版本
- 在`sentinel-cluster-server-envoy-rls`模块中升级`snakeyaml`至1.26版本
```