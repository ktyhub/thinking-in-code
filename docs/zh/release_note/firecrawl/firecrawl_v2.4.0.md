---
title: "firecrawl v2.4.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.4.0"
version: "v2.4.0"
published: "2025-10-13"
type: "minor"
lang: "zh"
---

# firecrawl v2.4.0

## v2.4.0

### 新功能
- **新的 PDF 搜索类别** - 您现在可以通过我们的 v2/搜索端点指定 .pdf 类别仅搜索 pdf
- **Gemini 2.5 Flash CLI 图像编辑器** — 使用 Firecrawl + Gemini 2.5 Flash 集成直接在 CLI 中创建和编辑图像 ([#2172](https://github.com/firecrawl/firecrawl/pull/2172))
- **x402 搜索端点 (`/v2/x402`)** — 添加了下一代搜索 API，提高了准确性和速度 ([#2218](https://github.com/firecrawl/firecrawl/pull/2218))
- **RabbitMQ 事件系统** — Firecrawl 作业现在支持基于事件的通信和从 Postgres 预取（[#2230](https://github.com/firecrawl/firecrawl/pull/2230)、[#2233](https://github.com/firecrawl/firecrawl/pull/2233)）
- **改进爬网状态 API** — 使用新的 `crawl_status_2` RPC 进行更准确和实时的爬网状态报告 ([#2239](https://github.com/firecrawl/firecrawl/pull/2239))
- **低结果和 Robots.txt 警告** - 当抓取受到 robots.txt 限制或产生很少结果时，用户现在会收到清晰的反馈 ([#2248](https://github.com/firecrawl/firecrawl/pull/2248))
- **增强跟踪 (OpenTelemetry)** - 大大改进了分布式跟踪，以实现更好的跨服务可观察性 ([#2219](https://github.com/firecrawl/firecrawl/pull/2219))
- **指标和分析** - 为抓取和搜索端点添加了请求级指标（[#2216](https://github.com/firecrawl/firecrawl/pull/2216)）
- **自托管 Webhook 支持** — Webhook 现在可以传送到自托管环境的专用 IP 地址 ([#2232](https://github.com/firecrawl/firecrawl/pull/2232))

### 改进
- **减少 Docker 图像大小** - 仅安装 Chromium，剧作家服务图像大小减少 **1 GB** ([#2210](https://github.com/firecrawl/firecrawl/pull/2210))
- **Python SDK 增强** — 添加了 `"cancelled"` 作业状态处理和轮询间隔修复（[#2240](https://github.com/firecrawl/firecrawl/pull/2240)、[#2265](https://github.com/firecrawl/firecrawl/pull/2265)）
- **更快的节点 SDK 超时** — Axios 超时现在可以正确传播，提高重负载下的可靠性 ([#2235](https://github.com/firecrawl/firecrawl/pull/2235))
- **改进了爬网参数预览** - 增强了爬网参数预览的提示和验证（[#2220](https://github.com/firecrawl/firecrawl/pull/2220)）
- **Zod 架构验证** — 更严格的 API 参数验证，拒绝额外字段 ([#2058](https://github.com/firecrawl/firecrawl/pull/2058))
- **更好的 Redis 作业处理** - 修复了 `getDoneJobsOrderedUntil` 中的边缘情况，以实现更稳定的 Redis 检索（[#2258](https://github.com/firecrawl/firecrawl/pull/2258)）
- **Markdown 和 YouTube 修复** — 修复了 YouTube 缓存和空 Markdown 摘要错误（[#2226](https://github.com/firecrawl/firecrawl/pull/2226)、[#2261](https://github.com/firecrawl/firecrawl/pull/2261)）
- **更新了文档和元数据** — 自述文件更新和新元数据字段添加到 JS SDK ([#2250](https://github.com/firecrawl/firecrawl/pull/2250)、[#2254](https://github.com/firecrawl/firecrawl/pull/2254))
- **改进了 API 端口配置** — API 现在尊重环境定义的端口 ([#2209](https://github.com/firecrawl/firecrawl/pull/2209))

### 修复
- 修复了递归 `$ref` 模式验证边缘情况（[#2238](https://github.com/firecrawl/firecrawl/pull/2238)）
- 修复了枚举数组被错误转换为对象的问题 ([#2224](https://github.com/firecrawl/firecrawl/pull/2224))
- 修复了线束超时和自托管 `docker-compose.yaml` 问题（[#2242](https://github.com/firecrawl/firecrawl/pull/2242)、[#2252](https://github.com/firecrawl/firecrawl/pull/2252)）

### 新贡献者
- @Chadha93 ([#2155](https://github.com/firecrawl/firecrawl/pull/2155))
- @MAVRICK-1 ([#2172](https://github.com/firecrawl/firecrawl/pull/2172))
- @bernie43 ([#2210](https://github.com/firecrawl/firecrawl/pull/2210))
- @abimaelmartell ([#2209](https://github.com/firecrawl/firecrawl/pull/2209))
- @th3w1zard1 ([#2252](https://github.com/firecrawl/firecrawl/pull/2252))

**🔗 完整 Changelog:** [v2.3.0 → v2.4.0](https://github.com/firecrawl/firecrawl/compare/v2.3.0...v2.4.0)


## 发生了什么变化
* 修复：在https://github.com/firecrawl/firecrawl/pull/2155中通过@Chadha93在观察者中添加缺少的`poll_interval`参数
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2172 中添加 @MAVRICK-1 的 Firecrawl + Gemini 2.5 Flash 图像 CLI 编辑器
* 添加环境变量以通过https://github.com/firecrawl/firecrawl/pull/2197中的@amplitudesxd禁用阻止列表
* 修复 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2198 中的 ARM 构建
* 修复（v1/search）：如果 f-e 搜索可用，则仅在 https://github.com/firecrawl/firecrawl/pull/2199 中使用@mogery 的搜索
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2195 中升级 html 到 markdown 依赖项 (ENG-3563)
* feat(map)：在https://github.com/firecrawl/firecrawl/pull/2203中通过@ftonato向作业日志添加爬虫和抓取选项
* 重构：在https://github.com/firecrawl/firecrawl/pull/2213中@ftonato将服务商集成到支付中间件中
*（功能/指标）@nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2216 中的抓取和搜索请求指标
* (feat/big-query) 大查询，作者：@nickscamara，https://github.com/firecrawl/firecrawl/pull/2217
* feat(api)：通过https://github.com/firecrawl/firecrawl/pull/2218中的@ftonato将x402搜索端点添加到/v2
*壮举（api/otel）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2219 中大大改进了跟踪
* 修复：通过 https://github.com/firecrawl/firecrawl/pull/2058 中的 @devin-ai-integration[bot] 添加 Zod 验证以拒绝模式参数中的 extraProperties
* 通过在 https://github.com/firecrawl/firecrawl/pull/2210 中仅安装 @bernie43 的 Chromium，将剧作家服务图像大小减少 1 GB
*修复：https://github.com/firecrawl/firecrawl/pull/2224中的@Chadha93将枚举数组转换为对象
* feat(nuq)：RabbitMQ 支持作业完成事件并通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2230 中等待
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2209 中使用@abimaelmartell 的 API 的 env.PORT 端口
* feat(nuq/rabbitmq)：通过@mogery在https://github.com/firecrawl/firecrawl/pull/2233中添加从psql到rabbitmq的预取作业
* 修复：当 https://github.com/firecrawl/firecrawl/pull/2226 中的 @devin-ai-integration[bot] 为空时跳过摘要生成
* 通过 https://github.com/firecrawl/firecrawl/pull/2235 中的 @amplitudesxd 将超时传播到节点 SDK (ENG-3474) 中的 Axios
*壮举（api/crawl-status）：在https://github.com/firecrawl/firecrawl/pull/2239中使用@mogery的crawl_status_2 RPC
* 允许 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2232 中将自托管 Webhook 传送到私有 IP 地址
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2242 中更新线束超时
* python-sdk：在 CrawlJob.status 中包含“已取消”，并在取消时退出等待循环（修复＃2190），由 @Jeelislive 在 https://github.com/firecrawl/firecrawl/pull/2240 中
* feat(api/ci)：在https://github.com/firecrawl/firecrawl/pull/2241中@mogery在产品上使用RabbitMQ进行测试
*（修复/爬行参数）通过https://github.com/firecrawl/firecrawl/pull/2220中的@nickscamara进一步增强爬行参数预览提示
* 构建（deps）：https://github.com/firecrawl/firecrawl/pull/2115 中的 @dependabot[bot] 将操作/结帐从 3 次增加到 5 次
* 修复：https://github.com/firecrawl/firecrawl/pull/2249 中@amplitudesxd 提供的安全带
* 修复了由 @th3w1zard1 最近在 https://github.com/firecrawl/firecrawl/pull/2252 中进行的 Firecrawl 更改导致的自托管 docker-compose.yaml 错误
* 修复：通过 @Chadha93 在 https://github.com/firecrawl/firecrawl/pull/2238 中处理 `$ref` 进行递归模式验证
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2250 中将缺失的元数据字段添加到 JS SDK (ENG-3439)
* 由 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2254 中更新 README.md
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2258 中 @ftonato 处理 Redis 作业检索的 getDoneJobsOrderedUntil 函数中的边缘情况
* 通过 @devin-ai-integration[bot] 修复 https://github.com/firecrawl/firecrawl/pull/2261 中的 YouTube 缓存降价错误
*壮举（api）：在https://github.com/firecrawl/firecrawl/pull/2248中由@ftonato在地图和抓取控制器中添加低结果警告和robots.txt限制
* @tomkosm 在 https://github.com/firecrawl/firecrawl/pull/2263 中测试新的 mu 替代方案
* 杂务（python-sdk）：将版本升级到 4.3.7，以通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2265 中修复 poll_interval
* 在 https://github.com/firecrawl/firecrawl/pull/2267 中通过 @tomkosm 完成/测试新的 mu alt
* (feat/search-index) @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2268 中的搜索索引
* 在 https://github.com/firecrawl/firecrawl/pull/2270 中通过 @tomkosm 完成/测试新的 mu alt
* (feat/search-index) @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2271 的单独服务
* 修复：@Chadha93 在 https://github.com/firecrawl/firecrawl/pull/2272 中为 nuq 架构添加 `queue_scrape`
*（壮举/搜索）@nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2276 中的 Pdf 搜索类别

## 新贡献者
* @Chadha93 在 https://github.com/firecrawl/firecrawl/pull/2155 中做出了第一个贡献
* @MAVRICK-1 在 https://github.com/firecrawl/firecrawl/pull/2172 中做出了第一个贡献
* @bernie43 在 https://github.com/firecrawl/firecrawl/pull/2210 中做出了第一个贡献
* @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2209 中做出了第一个贡献
* @th3w1zard1 在 https://github.com/firecrawl/firecrawl/pull/2252 中做出了第一个贡献
**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.3.0...v2.4.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.4.0` · 📅 发布：2025-10-13 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
