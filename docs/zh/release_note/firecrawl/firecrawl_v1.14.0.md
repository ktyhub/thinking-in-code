---
title: "firecrawl v1.14.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.14.0"
version: "v1.14.0"
published: "2025-07-04"
type: "minor"
lang: "zh"
---

# firecrawl v1.14.0

## v1.14.0 发布

我们很高兴地宣布 Firecrawl v1.14.0 发布，其中包含很酷的更新。

- 经过身份验证的 scraping（加入等候名单[此处](https://firecrawl.dev/authenticated-scraping)）
- 企业零数据保留（请发送电子邮件至 [help@firecrawl.com](mailto:help@firecrawl.com) 以启用它）
- 提高了 p75 速度
- 新的 MCP 版本，带 maxAge + 更好的工具调用
- 开放研究员示例（开源研究员）。请参阅[存储库](https://github.com/mendableai/open-researcher)
- 还有更多🔥

## 发生了什么变化
* 修复 @mogery 在 https://github.com/mendableai/firecrawl/pull/1729 中搜索时的 json 格式 (ENG-2529)
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1727 中使用的代理改进
* 添加 pdf 预取日志以供调试 (ENG-2542) by @mogery in https://github.com/mendableai/firecrawl/pull/1734
*（壮举/分类帐）@nickscamara 在 https://github.com/mendableai/firecrawl/pull/1728 中的分类帐事件
* 修复（auto_charge）：https://github.com/mendableai/firecrawl/pull/1736 中 @mogery 的每小时计数器逻辑错误
* 壮举：通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1735 中使用 Punycode 编码实现 IDN 支持
* feat(scrapeURL)：如果 @mogery 在 https://github.com/mendableai/firecrawl/pull/1739 中出现 DOM.getDocument 或 queryAXTree 错误，请用户增加超时
*壮举（queue-worker）：减少工作锁定时间，以更快地从 https://github.com/mendableai/firecrawl/pull/1737 中的 @mogery 接替死亡工人的工作
*壮举（爬行状态）：更好的信用使用字段由@mogery在https://github.com/mendableai/firecrawl/pull/1738
* (fix/sdk) 修复了使用 show_sources=True 提取导致 https://github.com/mendableai/firecrawl/pull/1740 中 @nickscamara 出现 JSON 解析错误的问题
* 修复（地图）：通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1741 中传递超时以获取站点地图
*壮举（api）：https://github.com/mendableai/firecrawl/pull/1687中@mogery的零数据保留（ENG-2376）
* 修复 https://github.com/mendableai/firecrawl/pull/1742 中 @nickscamara 的 Firecrawl 服务中的协议更改
* 通过 https://github.com/mendableai/firecrawl/pull/1747 中的 @devin-ai-integration 修复自托管环境的队列工作线程活跃端点 (ENG-2587)
* feat(firecrawl)：在 https://github.com/mendableai/firecrawl/pull/1715 中添加集成参数支持并增强 @ftonato 的 kwargs 处理
* 由 @rafaelsideguide 在 https://github.com/mendableai/firecrawl/pull/1749 中修复 Zero_data_retention 参数和 certifi 依赖项
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1752 中添加 Playwright 服务 (ENG-2585) 的健康检查端点
* 通过 https://github.com/mendableai/firecrawl/pull/1753 中的 @devin-ai-integration 添加 URL 深度验证以抓取请求 (ENG-2617)
* 修复（api/deep-research）：错误的默认值导致 @mogery 在 https://github.com/mendableai/firecrawl/pull/1754 中的自托管上出现错误
* 通过 @micahstairs 在 https://github.com/mendableai/firecrawl/pull/1758 中使向后爬行的错误消息更加清晰
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1756 中实现仅 JavaScript 的基本 href 处理 (ENG-2302)
* 修复（html-transformer）：在https://github.com/mendableai/firecrawl/pull/1761中通过@mogery解析相对URL时检查基本标签
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1762 中对 html-transformer 进行了改进
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1759 中实现 onlyMainContent scraping (ENG-2499) 的回退机制
* 通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1760 中添加深度研究功能的端到端测试 (ENG-2627)
* 壮举：添加 waitFor 验证规则，通过 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1751 中强制执行 waitFor <= timeout/2
* 修复：用https://github.com/mendableai/firecrawl/pull/1714中@devin-ai-integration的calculateCreditsToBeBilled替换硬编码的搜索计费
* feat(scrapeURL/fire-engine): 在 https://github.com/mendableai/firecrawl/pull/1763 中通过 @mogery 启动 AB 测试


**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.13.0...v1.14.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.14.0` · 📅 发布：2025-07-04 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.14.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
