# Sentinel v1.8.6
这次发布包含了一些增强功能和漏洞修复。

此外，Sentinel OpenSergo 数据源已进入 Beta 版本（`com.alibaba.csp:sentinel-datasource-opensergo:0.1.0-beta`），开发者可以使用 [OpenSergo 容错 CRD](https://github.com/opensergo/opensergo-specification/tree/main/specification) 以统一的方式配置 Sentinel 规则（在 Kubernetes 环境下，结合 [OpenSergo 控制平面](https://github.com/opensergo/opensergo-control-plane)）。

## 新功能 / 增强功能

- 在 Rule 实体中添加 `id` 字段，并在阻断日志中记录规则 ID（[#2853](https://github.com/alibaba/Sentinel/pull/2853)）

## 漏洞修复

- 修复 Dubbo 3.x 适配器中的 Dubbo SPI 路径问题（[#2822](https://github.com/alibaba/Sentinel/pull/2822)）
- 修复当出现错误时，`SpiLoader#closeResources` 可能未记录异常的问题（[#2890](https://github.com/alibaba/Sentinel/pull/2890)）

## 控制台

- 改进 SentinelApiClient 和规则控制器中的 IP 验证

感谢所有贡献者！