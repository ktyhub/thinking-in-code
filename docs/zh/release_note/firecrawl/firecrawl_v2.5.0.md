---
title: "firecrawl v2.5.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.5.0"
version: "v2.5.0"
published: "2025-10-30"
type: "minor"
lang: "zh"
---

# firecrawl v2.5.0

## v2.5.0 - 世界上最好的网络数据 API

我们现在拥有最高质量和最全面的网络数据 API，由我们的新语义索引和自定义浏览器堆栈提供支持。

请参阅下面的基准：

<img width="1200" height="675" alt="image" src="https://github.com/user-attachments/assets/96a2ba36-0c7f-4fa3-829e-d6ac91b53705" />


## 新功能
- 为 `.xlsx` (Excel) 文件实现了 scraping。
- 引入了新的爬行架构和NUQ并发跟踪系统。
- 每个所有者/组的并发限制+动态并发计算。
- 添加了小组积压处理并改进了小组操作。
- 添加了 `/search` 定价更新
- 添加了团队旗帜以跳过国家/地区检查。
- 始终填充 NUQ 指标以提高可观察性。
- 用于改进 CI 测试的新测试站点应用程序。
- 从文档头提取元数据以获得更丰富的输出。

### 增强和改进
- 改进了阻止列表加载和不受支持的站点错误消息。
- 更新了 x402-express 版本。
- 改进了子域的 includePaths 处理。
- 更新了自托管搜索以使用 DuckDuckGo。
- JS 和 Python SDK 不再需要 API 密钥进行自托管部署。
- Python SDK 超时处理改进。
- Rust client 现在使用 `tracing` 而不是 `print`。
- 减少自动充电 Slack 通知中的噪音。

### 修复
- 确保抓取 robots.txt 警告可靠地出现。
- 解决了并发死锁和重复作业处理。
- 修复了搜索国家默认值和定价逻辑错误。
- 修复了线束环境中的端口冲突。
- 修复了 Playwright 中的视口尺寸支持和屏幕截图行为。
- 解决了 CI 测试不稳定问题（剧作家缓存、产品测试）。

### 👋 新贡献者
- @delong3
- @c4nc
- @codetheweb

**完整差异：** https://github.com/firecrawl/firecrawl/compare/v2.4.0...v2.5.0


## 发生了什么变化
* @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2277 中出现更详细的阻止列表加载错误
* 由 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2279 更新 x402-express 版本
* 修改 https://github.com/firecrawl/firecrawl/pull/2286 中 @micahstairs 不支持的站点错误消息
* 壮举：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2289 中进行索引预抓取
* 修复：当 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2278 中启用 allowedSubdomains 时，确保 includePaths 应用于子域
* 当https://github.com/firecrawl/firecrawl/pull/2283中的@devin-ai-integration[bot]设置位置时，修复搜索国家参数默认为未定义
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2285 中修复 Harness 中的端口冲突
* js-sdk：仅适用于 https://github.com/firecrawl/firecrawl/pull/2237 中 @abimaelmartell 的云 API（非自托管）需要 API 密钥
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2284 中实现 @abimaelmartell 的 Scraping Excel xlsx 文件
* feat(nuq)：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2291 中进行并发跟踪
* 修复（爬行）：@ftonato 在 https://github.com/firecrawl/firecrawl/pull/2287 中可靠地显示 robots.txt 警告
* feat(nuq)：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2293 中添加 max_concurrency 源
* feat(nuq/concurrency-tracking)：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2295 中修复死锁
* 将自托管 Google 替换为 https://github.com/firecrawl/firecrawl/pull/2225 中 @amplitudesxd 的 DDG 搜索 (ENG-3499)
* python-sdk：修复 https://github.com/firecrawl/firecrawl/pull/2288 中 @abimaelmartell 跨 api 调用的超时处理
* python-sdk：在 https://github.com/firecrawl/firecrawl/pull/2290 中运行 @abimaelmartell 自托管时不需要 API 密钥
* 添加团队标志以跳过 https://github.com/firecrawl/firecrawl/pull/2300 中的 @devin-ai-integration[bot] 的国家/地区检查
* 通过 https://github.com/firecrawl/firecrawl/pull/2299 中的 @devin-ai-integration[bot] 将 /search 端点定价更新为每 10 个搜索结果 2 个积分
* 通过 @devin-ai-integration[bot] 修复 https://github.com/firecrawl/firecrawl/pull/2301 中的搜索定价错误
* feat(nuq)：https://github.com/firecrawl/firecrawl/pull/2302 中 @mogery 的每所有者每组并发限制
* 更新：在 https://github.com/firecrawl/firecrawl/pull/2298 中的 @Chadha93 中处理循环引用以及递归模式
* feat(nuq): 在https://github.com/firecrawl/firecrawl/pull/2305中通过@mogery动态计算当前并发数
* feat(nuq)：https://github.com/firecrawl/firecrawl/pull/2309 中 @mogery 的 group_id、作业积压和组添加操作
* feat(ci)：新的测试站点应用程序 + @delong3 在 https://github.com/firecrawl/firecrawl/pull/2312 中更新的玩笑测试
* 壮举：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2320 中的新爬网架构
* 在https://github.com/firecrawl/firecrawl/pull/2323中@c4nc创建表后移动积压查询的索引
* 修复（ci）：剧作家缓存 + 由 @delong3 在 https://github.com/firecrawl/firecrawl/pull/2314 中进行的产品测试
* 改进 https://github.com/firecrawl/firecrawl/pull/2325 中@micahstairs 的体重秤自动充值的松弛通知
* 通过 @micahstairs 在 https://github.com/firecrawl/firecrawl/pull/2327 中减少自动充值通知的噪音
* 修复：https://github.com/firecrawl/firecrawl/pull/2329 中 @ftonato 对 Playwright 引擎屏幕截图的视口尺寸支持
* 壮举：始终通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2328 中填充 nuq 指标
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2330 中通过 @amplitudesxd 抓取视口测试
* 恢复“合并拉取请求#2329，来自 firecrawl/devin/ENG-3639-175924…，作者：https://github.com/firecrawl/firecrawl/pull/2332 中的@micahstairs
* 修复（nuq）：https://github.com/firecrawl/firecrawl/pull/2336 中 @mogery 的每个实例侦听通道 ID
* 修复(auto_charge): 在https://github.com/firecrawl/firecrawl/pull/2338中@mogery为新的充能路线添加冷却时间
* 杂务：通过 https://github.com/firecrawl/firecrawl/pull/2339 中的 @amplitudesxd 更新最后一次抓取 RPC
* Rust client：使用`tracing`代替@codetheweb在https://github.com/firecrawl/firecrawl/pull/2324中打印
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2342 中从文档头 (ENG-3822) 中提取元数据
* fix(nuq,concurrency-limit): 如果 https://github.com/firecrawl/firecrawl/pull/2343 中的 @mogery 并发队列中有重复作业，则进行处理

## 新贡献者
* @delong3 在 https://github.com/firecrawl/firecrawl/pull/2289 中做出了他们的第一个贡献
* @c4nc 在 https://github.com/firecrawl/firecrawl/pull/2323 中做出了第一个贡献
* @codetheweb 在 https://github.com/firecrawl/firecrawl/pull/2324 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.4.0...v2.5.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.5.0` · 📅 发布：2025-10-30 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
