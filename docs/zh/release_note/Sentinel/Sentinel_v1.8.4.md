# Sentinel v1.8.4
```markdown
## 功能 / 增强

- 为传输命令处理器添加拦截器 SPI 支持
- 为常见日志添加日志级别配置支持
- 改进 AuthorityRuleManager：更新规则时替换规则映射而非清除后再插入

## Bug 修复

- 修复 StatisticSlot 中 fireExit 的参数缺失问题
- 修复 `GatewayRuleManager#isValidRule` 中 maxQueueingTimeoutMs 校验逻辑的问题
- 修复 DynamicSentinelProperty 同步监听器集合迭代器的竞争条件问题
- 使用 CopyOnWriteArraySet 以避免集群 `ConnectionGroup#connectionSet` 迭代器快速失败的问题

## 集成

- 为 Spring Cloud Gateway 和 Zuul 适配器添加自定义 ConfigurableRequestItemParser 支持
- 在 Spring WebFlux 适配器中默认使用统一的入口上下文名称

## 控制面板

- 修复断路器规则对话框中 intervalMs 验证的错误警告信息
- 修复在存在多个相同 IP 服务器时无法删除 token 服务器的问题

## 依赖

- 更新 Spring Boot starter 至 2.5.12 版本以支持 Sentinel 控制面板
- 将 nacos-client 升级至 1.4.2 版本以支持 `sentinel-datasource-nacos`
```