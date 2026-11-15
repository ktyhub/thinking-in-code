---
title: "firecrawl v1.13.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.13.0"
version: "v1.13.0"
published: "2025-06-27"
type: "minor"
lang: "zh"
---

# firecrawl v1.13.0

## 火行 v1.13.0 Changelog

- 添加AU、FR、DE到[隐身模式](https://docs.firecrawl.dev/features/proxies#location-based-proxy-selection)
- 使用 [allowSubdomains](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-allow-subdomains) 抓取子域
- 谷歌幻灯片 scraping
- 生成当前页面的 PDF。请参阅[文档](https://docs.firecrawl.dev/api-reference/endpoint/scrape#generate-pdf)
- 具有[质量参数]的更高分辨率屏幕截图(https://docs.firecrawl.dev/api-reference/endpoint/scrape#screenshot)
- 仪表板上的使用情况每周视图
- Fireplexity 示例（开源 Perplexity）。请参阅[存储库](https://github.com/mendableai/fireplexity)
- 还有更多！

### 特点
- 通过 `safeFetch` 支持 `scrapeURL` 中的 cookie
- 添加谷歌幻灯片 scraping
- 将 PDF 操作添加到 API、Python 和 JS SDK
- 截图质量配置
- Python 和 JS SDK 中的 `parsePDF` 支持
- 允许国际 URL
- 在SDKs中启用子域爬行
- 作业排队前检查工人的活跃度

### 改进和修复
- 删除了旧的缓存系统（Redis、PDF缓存等）
- 增强的错误消息（TLS、DNS）
- 改进了作业计数查询和错误处理
- 修复了 `pdf`、`credits` 范围、`ignoreInvalidURLs` 错误
- 减少并发限制中的过度登录
- 为 Faire 团队添加了特殊的工作到期绕过
- JS SDK 中统一后备逻辑

## 发生了什么变化
* 删除旧的缓存机制（redis 缓存、PDF 缓存、抓取地图等）(FIR-2266) by @mogery in https://github.com/mendableai/firecrawl/pull/1667
* feat(scrapeURL): 支持 @mogery 在 https://github.com/mendableai/firecrawl/pull/1688 中的 safeFetch 中的 cookie
* 修复（搜索）：尊重 @mogery 在 https://github.com/mendableai/firecrawl/pull/1690 定价中的 parsePDF
* 壮举（scrape）：在 https://github.com/mendableai/firecrawl/pull/1693 中支持 @meetsoni1214 的 Google 幻灯片
* 修复(api): CI by @mogery in https://github.com/mendableai/firecrawl/pull/1692
* 修复（api）：通过@mogery在https://github.com/mendableai/firecrawl/pull/1697中使用结构化错误对象改进错误日志记录
* 修复（api）：通过 @mogery 在 https://github.com/mendableai/firecrawl/pull/1698 中使用可选的 ACUC 数据增强错误处理程序
* 修复（api）：https://github.com/mendableai/firecrawl/pull/1699 中@mogery 更好地处理 redis 无爬行状态中的错误
* feat(api)：通过@mogery在https://github.com/mendableai/firecrawl/pull/1700中优化作业计数查询并改进错误处理
* 修复（api/v1/crawl/ongoing）：只有爬行，没有 @mogery 在 https://github.com/mendableai/firecrawl/pull/1701 中的批量抓取
* 壮举(api)：pdf 动作 + 内务处理，作者：@mogery，https://github.com/mendableai/firecrawl/pull/1702
* 修复（v1）：在 https://github.com/mendableai/firecrawl/pull/1703 中检查 @mogery 的积分变量作用域冲突
* 修复（api）：pdf bug + @mogery 在 https://github.com/mendableai/firecrawl/pull/1704 中测试 bug
* 修复（api/batch/scrape）：在 https://github.com/mendableai/firecrawl/pull/1705 中使用 @mogery 的ignoreInvalidURLs 时 maxConcurrency 字段支持
* 修复（api）：@mogery 在 https://github.com/mendableai/firecrawl/pull/1706 中仅实例化一次存储
* 壮举(api/ci): idmux by @mogery in https://github.com/mendableai/firecrawl/pull/1707
* 修复（并发限制）：在 https://github.com/mendableai/firecrawl/pull/1708 中扫描而不是接受 @mogery 的作业
* 修复（并发限制）：@mogery 在 https://github.com/mendableai/firecrawl/pull/1709 中过度记录
* 修复（api）：缓存的 acuc 没有由 @mogery 在 https://github.com/mendableai/firecrawl/pull/1712 中设置 is_extract 标志（ENG-2468）
* 修复（js-sdk/extract）：在 https://github.com/mendableai/firecrawl/pull/1711 中使用 @mogery 相同的 zod 后备逻辑
* 通过https://github.com/mendableai/firecrawl/pull/1716中的@devin-ai-integration为Faire团队ID添加临时例外以绕过作业过期
* feat(python-sdk)：通过https://github.com/mendableai/firecrawl/pull/1713中的@devin-ai-integration添加parsePDF参数支持
* 允许国际 URL 通过 @micahstairs 在 https://github.com/mendableai/firecrawl/pull/1717 中的验证
* 壮举：@nickscamara 在 https://github.com/mendableai/firecrawl/pull/1721 中的截图质量
*壮举（sdk/python）：在https://github.com/mendableai/firecrawl/pull/1722中添加@mogery的pdf操作（ENG-2515）
* feat(scrapeURL/skipTlsVerification)：通过@mogery在https://github.com/mendableai/firecrawl/pull/1723中改进错误消息
* 壮举：改进 @mogery 在 https://github.com/mendableai/firecrawl/pull/1724 中的 DNS 解析错误消息
* 通过https://github.com/mendableai/firecrawl/pull/1719中的@devin-ai-integration修复爬虫filterURL方法中无法访问的allowSubdomains代码
* 通过https://github.com/mendableai/firecrawl/pull/1720中的@devin-ai-integration向JS SDK添加parsePDF参数
*壮举（api/worker）：队列中的活性检查——当工人死亡时不接受工作（ENG-2519）由https://github.com/mendableai/firecrawl/pull/1725中的@mogery
* (feat/sdk) 允许 sdk 中的子域 (@nickscamara) 在 https://github.com/mendableai/firecrawl/pull/1726 中

## 新贡献者
* @meetsoni1214 在 https://github.com/mendableai/firecrawl/pull/1693 中做出了第一个贡献
* @micahstairs 在 https://github.com/mendableai/firecrawl/pull/1717 中做出了第一个贡献

**完整 Changelog**：https://github.com/mendableai/firecrawl/compare/v1.12.0...v1.13.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v1.13.0` · 📅 发布：2025-06-27 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v1.13.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
