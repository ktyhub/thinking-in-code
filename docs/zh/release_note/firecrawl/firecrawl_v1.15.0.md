---
title: "firecrawl v1.15.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.15.0"
version: "v1.15.0"
published: "2025-07-18"
type: "minor"
lang: "zh"
---

# firecrawl v1.15.0

## Firecrawl v1.15.0 来了！

- 企业单点登录
- 改进了 scraping 的可靠性
- 搜索参数添加到活动日志中 
- FireGEO 示例
- 合并了 50 多个 PR，以解决错误和改进 🔥


### 改进
- `scrapeURL` 和 HTML 转换器中的 OMCE 支持
- 改进的日志记录（搜索参数、缓存期限）
- `/crawl/active` 响应中的新 `created_at` 字段
- 不区分大小写的 URL 协议检查
- `filterLinks` 移植到 Rust

### 修复
- HTML 转换器稳定性（阿拉伯语、基本标签、panic）
- `scrapeURL` 索引错误和 waitFor 排除
- `parsePDF=false` 的 PDF 计费错误
- 抓取仅返回 1 个结果（边缘情况）
- 爬虫无节错误
- 记录器方法命名
- API 中的超时处理
- `crawl-status` 弹出作业的弹性

### SDK 和基础设施
- SDK 标头参数修复和异步错误处理
- Express 端口现在可以通过环境变量进行配置
- 临时抓取到期豁免

### 文档
- Kubernetes 设置更新

## 发生了什么变化
* 通过https://github.com/mendableai/firecrawl/pull/1748中的@devin-ai-integration[bot]通过环境变量配置worker Express服务器端口
* 修复（logger）：https://github.com/mendableai/firecrawl/pull/1731 中 @ahnafatef 调用的 logger.child 中的正确方法名称
* feat(html-transformer, scrapeURL)：@mogery 在 https://github.com/mendableai/firecrawl/pull/1764 中提供 omce 支持
* 将created_at字段添加到https://github.com/mendableai/firecrawl/pull/1718中@devin-ai-integration[bot]的/crawl/active端点响应中
* 壮举：@tomkosm 在 https://github.com/mendableai/firecrawl/pull/1771 中测试 RunPod MU 新版本
* 文档：kubernetes 由 @mogery 在 https://github.com/mendableai/firecrawl/pull/1772 中进行简单更新
* 修复（api）：https://github.com/mendableai/firecrawl/pull/1774 中 @mogery 的 f-e 超时处理
* 修复（api/html-transformer）：停止https://github.com/mendableai/firecrawl/pull/1773中@mogery在阿拉伯语网站上的恐慌
* 修复（api/html-transformer）：@mogery 在 https://github.com/mendableai/firecrawl/pull/1776 中处理相对基本标签 URL
* html-transformer：https://github.com/mendableai/firecrawl/pull/1778 中的@mogery 永远不要惊慌
* feat(search): 通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1777 中改进参数记录
* 修复（scrapeURL/index）：@mogery 在 https://github.com/mendableai/firecrawl/pull/1780 中出现可怕的、不好的、非常糟糕的索引 url 错误
* feat(index): 存储https://github.com/mendableai/firecrawl/pull/1782中@mogery预爬的请求频率
* feat(scrapeURL)：在https://github.com/mendableai/firecrawl/pull/1784中@mogery记录请求频率中的缓存年龄
* 修复(scrapeURL/index): 排除https://github.com/mendableai/firecrawl/pull/1787中@mogery的等待
* 壮举：通过 https://github.com/mendableai/firecrawl/pull/1788 中的 @devin-ai-integration[bot] 使 URL 协议检查不区分大小写
* 恢复 https://github.com/mendableai/firecrawl/pull/1789 中@micahstairs 的“为特定团队添加临时例外以绕过工作过期”
* 修复（摘录）：通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1790 中改进执行
* 在 https://github.com/mendableai/firecrawl/pull/1786 中通过 @mogery 刮擦时插入 omce 作业
* [sdk] 修复了 https://github.com/mendableai/firecrawl/pull/1795 中@rafaelsideguide 中 scrape_url 中缺少的标头参数
* 在 https://github.com/mendableai/firecrawl/pull/1796 中添加 @micahstairs 的抓取到期临时豁免
* 修复（crawl-status）：即使 https://github.com/mendableai/firecrawl/pull/1799 中的 @mogery 从 bullmq 中弹出作业，也能继续工作
* 壮举：https://github.com/mendableai/firecrawl/pull/1783 中 @mogery 的预抓取工作人员
* sdk-修复：确保 AsyncFirecrawlApp 方法中的异步错误处理，向上…由 @rafaelsideguide 在 https://github.com/mendableai/firecrawl/pull/1802 中
* feat(crawler): 端口过滤器链接到 https://github.com/mendableai/firecrawl/pull/1801 中的 @mogery 的 Rust
* 修复 https://github.com/mendableai/firecrawl/pull/1806 中 @devin-ai-integration[bot] 的 parsePDF=false 时的搜索端点 PDF 计费问题
* 修复有时导致 @micahstairs 在 https://github.com/mendableai/firecrawl/pull/1810 中爬行仅返回 1 个结果的错误
*（修复/爬虫）@nickscamara 在 https://github.com/mendableai/firecrawl/pull/1814 中修复了无部分边缘情况

## 新贡献者
* @ahnafatef 在 https://github.com/mendableai/firecrawl/pull/1731 中做出了第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.14.0...v1.15.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.15.0` · 📅 发布：2025-07-18 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.15.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
