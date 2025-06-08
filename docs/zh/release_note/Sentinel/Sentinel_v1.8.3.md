# Sentinel v1.8.3
```markdown
## 特性 / 增强功能

- 在 `sentinel-cluster-server-envoy-rls` 令牌服务器模块中添加对 Envoy RLS v3 API 的支持。
- 添加导出扩展，用于通过 JMX 导出 Sentinel 指标。

## Bug 修复

- 修复系统规则的入站 QPS 模式：使用 passQps 替代 completeQps，并支持 batchCount。
- 修复 ScGatewayApiMatcherManager 中的遗留 API 匹配器在 API 组删除后未移除的问题。

## 集成

- 为 Consul 数据源添加 ACL 令牌支持。

## 控制面板

- 修复在自定义后端 context-path 时仪表板 logo 问题。
- 在 MachineRegistryController 的 API 中添加 IP 验证。
```