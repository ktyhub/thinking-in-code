---
title: "firecrawl v1.10.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.10.0"
version: "v1.10.0"
published: "2025-06-03"
type: "minor"
lang: "zh"
---

# firecrawl v1.10.0

我们很高兴地宣布推出新的 Search API 端点，它将网络搜索与 Firecrawl 强大的 scraping 功能相结合。

### 搜索功能：
- 搜索网络并通过一次 API 呼叫从结果中获取完整内容
- 选择特定的输出格式（markdown、HTML、链接、屏幕截图）
- 自定义搜索参数（语言、国家、时间范围、结果数量）
- 完全支持 Python 和 Node.js

### 更多功能
- scraping（`scrapeURL`、`js-sdk`）的自动模式代理[#1551](https://github.com/mendableai/firecrawl/pull/1551)、[#1602](https://github.com/mendableai/firecrawl/pull/1602)
- `scrapeURL/pdf` 的超时处理和内容类型改进 [#1570](https://github.com/mendableai/firecrawl/pull/1570)、[#1604](https://github.com/mendableai/firecrawl/pull/1604)、[#1592](https://github.com/mendableai/firecrawl/pull/1592)
- Redis 改进：单独的非驱逐 Redis 支持 [#1600](https://github.com/mendableai/firecrawl/pull/1600)
- 搜索改进：`ignoreBlockedURLs`，忽略并发限制 [#1580](https://github.com/mendableai/firecrawl/pull/1580)、[#1617](https://github.com/mendableai/firecrawl/pull/1617)
- 用于并发日志记录的新 `/cclog` 端点 [#1589](https://github.com/mendableai/firecrawl/pull/1589)
- 元数据提取现在包括 `itemprop` 属性 [#1624](https://github.com/mendableai/firecrawl/pull/1624)
- 自托管：可部署的 Playwright 图像 [#1625](https://github.com/mendableai/firecrawl/pull/1625)

### 修复和改进
- 更好地处理 `LLMs.txt` + 绕过选项 [#1557](https://github.com/mendableai/firecrawl/pull/1557)
- 改进了 URL 验证和特殊字符处理 [#1547](https://github.com/mendableai/firecrawl/pull/1547)
- 僵尸工作者清理 + 提取状态的 TTL 处理 [#1575](https://github.com/mendableai/firecrawl/pull/1575)、[#1599](https://github.com/mendableai/firecrawl/pull/1599)
- 修复并发队列逻辑和速率限制器覆盖 [#1595](https://github.com/mendableai/firecrawl/pull/1595)、[#1593](https://github.com/mendableai/firecrawl/pull/1593)
- 更好地记录搜索分页和强大的获取 [#1572](https://github.com/mendableai/firecrawl/pull/1572)、[#1588](https://github.com/mendableai/firecrawl/pull/1588)
- 小修复：`og:locale:alternate`、adblock 切换、剧作家专用逻辑、格式错误的元数据数组 [#1597](https://github.com/mendableai/firecrawl/pull/1597)、[#1616](https://github.com/mendableai/firecrawl/pull/1616)、[#1574](https://github.com/mendableai/firecrawl/pull/1574)

### 测试和文档
- 添加 `MAX_RAM` 和 `MAX_CPU` 环境变量文档 [#1581](https://github.com/mendableai/firecrawl/pull/1581)
- 测试基础设施改进 [#1623](https://github.com/mendableai/firecrawl/pull/1623)

## 发生了什么变化
* 修复 LLMs.txt 子域缓存错误，并通过 https://github.com/mendableai/firecrawl/pull/1557 中的 @devin-ai-integration 添加绕过选项
* FIR-1951：通过 https://github.com/mendableai/firecrawl/pull/1547 中的 @devin-ai-integration 修复查询参数中特殊字符的 URL 验证
* feat(scrapeURL): 代理自动模式 (FIR-1853) by @mogery in https://github.com/mendableai/firecrawl/pull/1551
* feat(scrapeURL/pdf/mu)：添加超时和created_at (FIR-2008) by @mogery in https://github.com/mendableai/firecrawl/pull/1570
* 修复（auto_charge）：修复 @mogery 在 https://github.com/mendableai/firecrawl/pull/1571 中的 ACUC 清除（FIR-1805）
* 修复（api/搜索）：正确记录页面选项（FIR-2015），作者：https://github.com/mendableai/firecrawl/pull/1572 中的@mogery
* 更新 https://github.com/mendableai/firecrawl/pull/1566 中 @emircanerkul 的 docker-compose.yaml 评论
* 修补程序：杀死僵尸工人，更好地尊重超时（FIR-2034），作者：@mogery，https://github.com/mendableai/firecrawl/pull/1575
* 修复：通过 https://github.com/mendableai/firecrawl/pull/1574 中的 @devin-ai-integration 将元数据数组连接成字符串，但有例外
* 修复 https://github.com/mendableai/firecrawl/pull/1578 中 @rafaelsideguide 的 sdk/未定义响应句柄错误
*壮举（python-sdk/CrawlWatcher）：通过https://github.com/mendableai/firecrawl/pull/1577中的@mogery从WebSocket（FIR-2038）中删除最大有效负载大小
* FIR-2006：通过 https://github.com/mendableai/firecrawl/pull/1569 中的 @devin-ai-integration 修复 Deep Research API 中的 maxUrls 和 timeLimit 参数
* 文档：在 https://github.com/mendableai/firecrawl/pull/1581 中添加 @devin-ai-integration 的 MAX_RAM 和 MAX_CPU 环境变量文档
* 壮举（搜索）：ignoreBlockedURLs (FIR-1954) by @mogery in https://github.com/mendableai/firecrawl/pull/1580
* 修复（queue-worker）：如果所有可添加的 URL 已被 @mogery 在 https://github.com/mendableai/firecrawl/pull/1582 中锁定（FIR-1936），则完成抓取
* feat(api/extract)：将提取物显示为源自 https://github.com/mendableai/firecrawl/pull/1584 中的 @mogery 的刮擦 (FIR-2061) 的来源
*壮举（api/v1/extract）：ignoreInvalidURLs（FIR-1948）由https://github.com/mendableai/firecrawl/pull/1585中的@mogery
* 修复（robustFetch）：@mogery 在 https://github.com/mendableai/firecrawl/pull/1588 中选择性记录（FIR-2072）
* feat(scrapeURL, logJob)：将 pdf 页数记录到 https://github.com/mendableai/firecrawl/pull/1587 中 @mogery 的数据库 (FIR-2068)
* feat(concurrency-log): 通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1589 中添加 cclog 端点 (FIR-2067)
* 壮举：在 fc 端解析 PDF，如果超时时间太长则拒绝 (FIR-2083) by @mogery in https://github.com/mendableai/firecrawl/pull/1592
* feat(queue-worker/afterJobDone)：@mogery 在 https://github.com/mendableai/firecrawl/pull/1595 中改进了 ccq 插入逻辑 (FIR-2082)
* 修复（v1）：避免使用https://github.com/mendableai/firecrawl/pull/1593中的@mogery的FIRE-1速率限制器（FIR-2090）覆盖rateLimiterMode
* 修复(html-transformer): og:locale:alternate (FIR-2101) 的错误 outName，作者为 https://github.com/mendableai/firecrawl/pull/1597 中的 @mogery
* 修复（extract-status）：即使在 TTL 失效后也能够通过 https://github.com/mendableai/firecrawl/pull/1599 中的 @mogery 获取提取状态
* feat(scrapeURL)：为 https://github.com/mendableai/firecrawl/pull/1601 中的 @mogery 匹配 DX (FIR-2137) 的 url 添加 unnormalizedSourceURL
* feat(apps/api)：在https://github.com/mendableai/firecrawl/pull/1600中添加@mogery对单独的、非驱逐的Redis的支持
* feat(js-sdk)：https://github.com/mendableai/firecrawl/pull/1602 中 @mogery 的自动模式代理 (FIR-2145)
* feat(scrapeURL)：通过 https://github.com/mendableai/firecrawl/pull/1604 中的 @mogery 在 Markdown 转换 (FIR-2159) 中更好地处理 contentType JSON
*壮举（scrapeURL / pdf）：每页账单n个学分（FIR-1934）由@mogery在https://github.com/mendableai/firecrawl/pull/1553中
* [rust-sdk] 用于在 https://github.com/mendableai/firecrawl/pull/1609 中由 @palsp 抓取的 webhook 参数
* feat(search): 忽略 @mogery 在 https://github.com/mendableai/firecrawl/pull/1617 中搜索的并发限制 (FIR-2187)
*修复（scrapeURL）：仅允许在https://github.com/mendableai/firecrawl/pull/1616中通过@mogery禁用剧作家（FIR-2200）上的广告拦截
* feat(api/scrape)：credits_billed 列 + 在工作端处理 `/scrape` 调用的计费，并通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1607 中执行更严格的超时执行 (FIR-2162)
* 在 https://github.com/mendableai/firecrawl/pull/1622 中@nickscamara 绕过搜索预览计费
* 壮举：通过 https://github.com/mendableai/firecrawl/pull/1624 中的 @ftonato 在 HTML 中包含“itemprop”属性来增强元数据提取
* feat(selfhost)：在 https://github.com/mendableai/firecrawl/pull/1625 中部署 @mogery 的剧作家图像
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1623 中测试改进 (FIR-2209)
* @mogery 在 https://github.com/mendableai/firecrawl/pull/1605 中的索引 (FIR-2177)

## 新贡献者
* @emircanerkul 在 https://github.com/mendableai/firecrawl/pull/1566 中做出了第一个贡献
* @palsp 在 https://github.com/mendableai/firecrawl/pull/1609 中做出了第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.9.0...v.10.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.10.0` · 📅 发布：2025-06-03 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
