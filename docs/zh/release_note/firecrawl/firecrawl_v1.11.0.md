---
title: "firecrawl v1.11.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.11.0"
version: "v1.11.0"
published: "2025-06-13"
type: "minor"
lang: "zh"
---

# firecrawl v1.11.0

## Firecrawl v1.11.0 来了！

### 主要特点
- 推出了 Firecrawl 指数
     - 如果选择加入，抓取速度可提高 5 倍
- 改进的活动日志
     - 查看网络钩子事件
     - 主动抓取管理
- Fire Enrich 示例（开源 Clay）
- 社区 Java SDK
- 还有更多


### 特点
- 改进了 Playwright 测试和 webhook 测试覆盖率
- 添加了 `GET /crawl/ongoing` 端点
- 在变更跟踪中引入了标签支持
- 将 `integration` 字段添加到作业中并通过队列工作器传播
- runpod v2 和更新的 `mu` 的并行测试
- 将 `queryIndexAtSplitLevel` 移植到 RPC
- 增强了 SDK 的索引和缺失参数
- 删除了冗余的 GCS 检查以提高性能
- 添加了跨管道的 `credits_billed` 字段
- 启用域级索引拆分以实现更好的地图查询
- 在搜索和提取操作中使用索引
- 删除了未使用的索引列

### 修复和改进
- 修复了抓取预完成逻辑
- 重构了 `callWebhook` 并添加了日志记录
- 改进的索引测试（FIR-2214）
- 修复了 JS SDK 测试
- 澄清了自述文件中的抓取选项用法
- 修复了环境示例中缺失的 `PLAYWRIGHT_MICROSERVICE_URL`
- 改进并发限制通知电子邮件
- 删除了破坏提取的查询参数清理

### 贡献者
- @Arkit003 做出了他们的第一个贡献
- @pulbyte 做出了他们的第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.10.0...v1.11.0



## 发生了什么变化
*壮举(api/tests/scrape)：@mogery在https://github.com/mendableai/firecrawl/pull/1626中的剧作家测试改进
* feat(queue-worker)：修复 https://github.com/mendableai/firecrawl/pull/1628 中 @mogery 的抓取预完成逻辑 (FIR-2171)
* feat(api/tests)：添加 webhook 测试 + 重构批处理抓取库 (FIR-2219) by @mogery in https://github.com/mendableai/firecrawl/pull/1630
*壮举(api): GET /crawl/ongoing (FIR-2189) by @mogery in https://github.com/mendableai/firecrawl/pull/1620
* feat(changeTracking)：支持 @mogery 在 https://github.com/mendableai/firecrawl/pull/1631 中的标签 (FIR-1940)
* feat(api)：在https://github.com/mendableai/firecrawl/pull/1632中通过@ftonato向作业添加集成字段并更新相关控制器和类型
* feat(api)：通过https://github.com/mendableai/firecrawl/pull/1635中的@ftonato在队列工作人员作业处理中传播集成字段
* 壮举（scraper）：@tomkosm 在 https://github.com/mendableai/firecrawl/pull/1636 中进行 runpod v2 并行测试
* 壮举：通过 @tomkosm 在 https://github.com/mendableai/firecrawl/pull/1639 中更新 mu
* feat(api/index)：通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1640 中将 queryIndexAtSplitLevel 移植到 RPC (FIR-2241)
* feat(webhook)：重构 callWebhook 并通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1629 中添加 logWebhook (FIR-2218)
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1637 中的索引测试改进 (FIR-2214)
* feat(sdk)：索引参数+其他缺失参数(FIR-2240) by @mogery in https://github.com/mendableai/firecrawl/pull/1638
* feat(gcs-jobs)：在 https://github.com/mendableai/firecrawl/pull/1641 中@mogery 进行了将查找时间减少一半的检查
* fix(js-sdk/tests): 修复https://github.com/mendableai/firecrawl/pull/1644中@mogery的测试情况(FIR-2253)
* 修复（自述文件）：澄清 scrape_options 必须是 ScrapeOptions 实例crape_url 并修复 @Arkit003 在 https://github.com/mendableai/firecrawl/pull/1647 中的拼写错误
* 修复：apps/api/.env.example 中的 PLAYWRIGHT_MICROSERVICE_URL by @pulbyte in https://github.com/mendableai/firecrawl/pull/1654
* 改进 https://github.com/mendableai/firecrawl/pull/1658 中 @nickscamara 的并发限制电子邮件通知
*壮举：在https://github.com/mendableai/firecrawl/pull/1655中添加@mogery到处的credits_billed (FIR-2286)
*修复（api）：删除https://github.com/mendableai/firecrawl/pull/1661中@mogery破坏提取的查询参数清理（FIR-2307）
* feat(index): 通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1662 中删除未使用的列
* 壮举：在 https://github.com/mendableai/firecrawl/pull/1660 中的 @mogery 中使用索引进行搜索和提取 (FIR-2267)
* feat(index)：添加域分割以改进 @mogery 在 https://github.com/mendableai/firecrawl/pull/1666 中的地图查询

## 新贡献者
* @Arkit003 在 https://github.com/mendableai/firecrawl/pull/1647 中做出了第一个贡献
* @pulbyte 在 https://github.com/mendableai/firecrawl/pull/1654 中做出了第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.10.0...v1.11.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.11.0` · 📅 发布：2025-06-13 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.11.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
