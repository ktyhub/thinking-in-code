---
title: "firecrawl v1.12.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.12.0"
version: "v1.12.0"
published: "2025-06-20"
type: "minor"
lang: "zh"
---

# firecrawl v1.12.0

## Firecrawl v1.12.0 来了！

- 新的并发系统 - 通过请求指定最大并发数以实现更好的控制。 [参见文档](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-max-concurrency)。
- 抓取整个域参数 - 跟踪同级或父 URL 的内部链接，而不仅仅是子路径（以前的allowBackwardLinks）。 [参见文档](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-crawl-entire-domain)。
- Google Docs Scraping - 我们现在正式支持 scraping Google Docs 文件
- 改进的活动日志 - 更好地支持 FIRE-1 请求。 [在此处查看您的日志。](https://www.firecrawl.dev/app/logs)
- /search Playground 增强 - 添加了位置参数。 [看看操场。](https://www.firecrawl.dev/playground?mode=search)
- Firestarter 示例 - 开源聊天机器人构建平台。 [此处回购。](https://github.com/mendableai/firestarter)
- 加上大量的性能改进和错误修复。 

附：对 v1.13.0 有反馈或想法吗？点击回复并告诉我们。我们始终倾听社区的意见来构建您最需要的功能。




## 发生了什么变化
* feat(vertex)：修复 vertex ai 提供程序错误并更新模型参考…由 https://github.com/mendableai/firecrawl/pull/1668 中的 @tomkosm
* 通过 https://github.com/mendableai/firecrawl/pull/1676 中的 @devin-ai-integration 改进具有特定拒绝原因的 URL 过滤错误消息 (FIR-2352)
* feat(index)：在 https://github.com/mendableai/firecrawl/pull/1677 中存储 @mogery 的短标题和描述 (FIR-2356)
* 壮举：@tomkosm 在 https://github.com/mendableai/firecrawl/pull/1678 中测试 mu v3
* 通过https://github.com/mendableai/firecrawl/pull/1681中的@devin-ai-integration将部署类型字段添加到错误报告模板中
* feat(crawl-status)：在https://github.com/mendableai/firecrawl/pull/1664中由@mogery重构redis刷新(FIR-2271)后工作
* 修复（抓取）：由 @mogery 在 https://github.com/mendableai/firecrawl/pull/1682 中正确记录失败时计费的 FIRE-1 积分 (FIR-2331)
* feat(scrape, extract)：creditsUsed、tokensUsed 字段 (FIR-2336) by @mogery in https://github.com/mendableai/firecrawl/pull/1683
* 并发限制重构 + `maxConcurrency` 参数 (FIR-2191) by @mogery in https://github.com/mendableai/firecrawl/pull/1643
* 壮举（scrape）：支持 https://github.com/mendableai/firecrawl/pull/1686 中 @mogery 的 Google Docs (FIR-1365)
* 壮举：添加 followInternalLinks 参数作为 @devin-ai-integration 在 https://github.com/mendableai/firecrawl/pull/1684 中对 allowedBackwardLinks 的语义替换


**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.11.0...v1.12.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.12.0` · 📅 发布：2025-06-20 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.12.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
