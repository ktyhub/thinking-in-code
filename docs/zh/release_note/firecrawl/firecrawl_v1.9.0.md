---
title: "firecrawl v1.9.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.9.0"
version: "v1.9.0"
published: "2025-05-16"
type: "minor"
lang: "zh"
---

# firecrawl v1.9.0

## Firecrawl v1.9.0 发布

### **新消息：**

**自托管改进**
- Supabase client 修复
- 修复了对 LLM 提供商的支持
- 现在爬行速度更快了
- 全球采用可缓存查找系统
- 更容易设置

**MCP 改进 (v1.11.0)**
- 大量改进（提示、示例以及如何正确使用参数）

**SDK 和 API 增强功能**
- 添加了对 SDK 2.0 的更改跟踪
- 抓取延迟支持与每次抓取并发限制
- 通过 OpenRouter 的新 Qwen3 爬虫示例
- 取消批量抓取端点

**性能和限制**
- 全球采用可缓存查找系统
- 将地图端点限制从 5,000 个链接增加到 30,000 个
- 搜索架构限制从 50 增加到 100

**修复和稳定性**
- 更好地处理 SSL 失败的错误
- 可选的链接错误修复
- firecrawl-py 中的 WaitAction 字段验证
- 并发队列重新设计为按时间而不是优先级确定优先级

**仪表板（云版本）**
- 新的活动日志

## 发生了什么变化
* (sdk/py) 由 @nickscamara 在 https://github.com/mendableai/firecrawl/pull/1506 中添加到 2.0 的更改跟踪
* 通过 @rafaelsideguide 在 https://github.com/mendableai/firecrawl/pull/1507 中修复 sdk/schemas
* 修复：通过 https://github.com/mendableai/firecrawl/pull/1508 中的 @devin-ai-integration 处理 actions 参数中的 dict 和 model 实例
* [feat] 实现 GCS 存储选项，以跨控制器抓取结果......由 https://github.com/mendableai/firecrawl/pull/1500 中的 @rafaelsideguide
*（批量/抓取）通过https://github.com/mendableai/firecrawl/pull/1509中的@nickscamara取消批量抓取端点
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1510 中添加使用 OpenRouter 的 Qwen3 网络爬虫示例
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1413 中添加抓取延迟功能和每次抓取并发限制 (FIR-249)
* 通过https://github.com/mendableai/firecrawl/pull/1514中的@devin-ai-integration为所有SDK中的爬网选项添加延迟参数
* 重构：https://github.com/mendableai/firecrawl/pull/1523 中的 @ftonato 将地图端点的最大链接限制从 5000 到 30000
* 修复（并发限制）：重新设计 cc 队列，使其按时间而不是优先级（FIR-1890）由 @mogery 在 https://github.com/mendableai/firecrawl/pull/1526 中工作
* 修复（queue-worker、scrape）：https://github.com/mendableai/firecrawl/pull/1521 中@mogery 的隐形代理定价更改（FIR-1847）
*壮举（acuc）：在https://github.com/mendableai/firecrawl/pull/1522中传播@mogery的团队旗帜（FIR-1879）
* [错误修复] 通过 https://github.com/mendableai/firecrawl/pull/1533 中的 @devin-ai-integration 在 firecrawl-py 中使 WaitAction 毫秒字段可选
* 使用 @y0hnn 在 https://github.com/mendableai/firecrawl/pull/1480 中的基本 url 参数创建 openAI 提供程序
* 重构：https://github.com/mendableai/firecrawl/pull/1545 中的 @ftonato 将搜索请求模式的最大限制从 50 增加到 100
* feat(scrapeURL)：@mogery 在 https://github.com/mendableai/firecrawl/pull/1552 中针对 SSL 失败提供了更好的错误
* 修复/可选链接运算符在 https://github.com/mendableai/firecrawl/pull/1549 中被 @tribixbite 丢失
* feat(api/extract/fire-0)：@mogery 在 https://github.com/mendableai/firecrawl/pull/1556 中记录错误 (FIR-1971)
* 壮举：在 https://github.com/mendableai/firecrawl/pull/1559 中@mogery 处处使用可缓存查找
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1560 中进行 Mog/cachable 查找
* 通过 https://github.com/mendableai/firecrawl/pull/1561 中的 @devin-ai-integration 在 GCS 中添加 RunPod PDF markdown 结果的缓存
* 修复 https://github.com/mendableai/firecrawl/pull/1534 中 @devin-ai-integration 的 USE_DB_AUTHENTICATION 为 false 时 Supabase client 配置错误

## 新贡献者
* @y0hnn 在 https://github.com/mendableai/firecrawl/pull/1480 中做出了第一个贡献
* @tribixbite 在 https://github.com/mendableai/firecrawl/pull/1549 中做出了第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.8.0...v1.9.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.9.0` · 📅 发布：2025-05-16 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
