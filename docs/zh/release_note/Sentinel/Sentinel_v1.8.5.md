# Sentinel v1.8.5
```markdown
## 特性 / 增强

- 为 Apache Dubbo 3.x 添加适配器 [#2789](https://github.com/alibaba/Sentinel/pull/2789)
- 当在 ParamFlowSlot 中被阻塞时，自动从 ParamFlowArgument 中提取值 [#2776](https://github.com/alibaba/Sentinel/pull/2776)

## 仪表盘

- 重构 MachineRegistryController 中的 IP 验证逻辑以支持 JDK 17 [#2694](https://github.com/alibaba/Sentinel/pull/2694)
- 修复 application.properties 中已弃用的 Spring 配置键 [#2713](https://github.com/alibaba/Sentinel/pull/2713)

## 依赖

- 将 fastjson 升级到 `1.2.83_noneautotype`
```