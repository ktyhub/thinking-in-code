# nightingale v7.7.0
### 为什么要使用nightingale

在这个数据驱动的时代，企业面临着前所未有的挑战：如何有效监控和管理庞大的数据流？传统的监控工具往往无法满足快速变化的需求，导致企业在关键时刻失去对系统的控制。Nightingale应运而生，它不仅提供了强大的监控能力，还能够灵活适应不同的业务场景。想象一下，当系统出现异常时，Nightingale能够迅速发出警报，帮助团队及时响应，避免损失。选择Nightingale，就是选择了一种更高效、更智能的监控方式。

### nightingale是什么

Nightingale是一个开源的监控系统，旨在帮助用户实时监控和管理其应用程序和基础设施。它提供了丰富的功能，包括数据收集、告警管理和可视化展示，支持多种数据源的接入，能够满足不同规模和需求的企业使用。

### 入门示例

假设你是一家在线电商平台的运维工程师，最近你们的用户反馈网站加载速度变慢。使用Nightingale，你可以快速设置监控规则，实时收集网站的性能数据。当加载时间超过设定阈值时，Nightingale会自动触发告警，通知你和开发团队进行排查。通过这种方式，你不仅能及时发现问题，还能通过数据分析找到根本原因，从而优化网站性能。

### nightingale v7.7.0版本更新了什么

Nightingale v7.7.0版本带来了多项重要更新，包括告警规则数据源筛选功能，支持反选和模糊匹配；告警规则查询条件现在可以设置“单位”；新增“覆盖全局回调”设置；Prometheus数据源预览中添加了Step设置；以及对仪表盘详情页和TDengine数据源的兼容性进行了优化。

### 更新日志

## 变更记录
- feat: 告警规则数据源筛选，支持反选和模糊匹配
- feat: 告警规则查询条件支持设置 "单位"
- feat: 告警规则支持 "覆盖全局回调" 设置
- feat: 告警规则 Prometheus 源数据源预览添加 Step 设置
- refactor: 仪表盘详情页添加返回仪表盘列表链接
- refactor: TDengine 数据源，兼容 v2 版本
- fix: 修复仪表盘 Elasticsearch 源 legend 模板不支持变量名包含字符 "." 的问题
- fix: edge 模块，机器失联告警，标签丢失问题
- doc: 告警规则告警级别名称优化
- doc: 增加 Doris 仪表盘和告警模板

### 总结

Nightingale v7.7.0版本通过新增和优化多项功能，提升了告警规则的灵活性和可用性，增强了用户体验，确保用户能够更高效地监控和管理其系统。