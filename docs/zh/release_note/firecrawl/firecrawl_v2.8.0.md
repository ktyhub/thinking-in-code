---
title: "firecrawl v2.8.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.8.0"
version: "v2.8.0"
published: "2026-02-03"
type: "minor"
lang: "zh"
---

# firecrawl v2.8.0

#v2.8.0

## Firecrawl v2.8.0 来了！

Firecrawl v2.8.0 为 API 和 SDK 上的代理工作流程、开发人员工具和自托管部署带来了重大改进，包括我们的新技能。

* 并行代理可同时运行数千个 `/agent` 查询，由我们新的 Spark 1 Fast 模型提供支持。
* Firecrawl CLI 完全支持抓取、搜索、抓取和地图命令。
* Firecrawl 技能，使 AI 代理（Claude Code、Codex、OpenCode）能够自主使用 Firecrawl。
* 支持 /agent 的三种新模型：用于即时检索的 Spark 1 Fast（目前仅在 Playground 中可用）、用于复杂研究查询的 Spark 1 Mini 以及用于高级提取任务的 Spark 1 Pro。
* 代理增强功能，包括 webhook、模型选择和新的 MCP 服务器工具。
* 平台范围内的性能改进，包括更快的搜索执行和优化的 Redis 调用。
* SDK 改进，包括 Zod v4 兼容性。

还有更多，请查看下面！

## 新功能

* **并行代理**  
  与自动故障处理和智能瀑布执行并行执行数千个 `/agent` 查询。由 Spark 1-Fast 提供支持，可实现即时检索，自动升级到 Spark 1 Mini 以进行需要全面研究的复杂查询。

* **火行CLI**  
  Firecrawl 的新命令行界面完全支持抓取、搜索、抓取和地图命令。使用 `npm install -g firecrawl-cli` 安装。

* **火行技能**  
  使 Claude Cursor、Codex 和 OpenCode 等代理能够使用 Firecrawl 进行 Web scraping 和数据提取，可通过 `npx skills add firecrawl/cli.` 安装
  
* **Spark 模型系列**  
  为 /agent 提供支持的三种新模型：**Spark 1 Fast** 用于即时检索（目前在 Playground 中可用），**Spark 1 Mini**（默认）用于以降低 60% 的成本执行日常提取任务，以及 **Spark 1 Pro** 用于需要最高准确度的复杂多领域研究。 Spark 1 Pro 的召回率约为 50%，而 Mini 的召回率约为 40%，两者的性能均明显优于每项任务成本高出 4-7 倍的工具。

* **Firecrawl MCP 服务器代理工具**  
  新的 `firecrawl_agent` 和 `firecrawl_agent_status` 工具可通过支持 MCP 的代理进行自主 Web 数据收集。

* **代理 Webhooks**  
  代理端点现在支持 Webhook，以获取有关作业完成和进度的实时通知。

* **代理模型选择**  
  代理端点现在接受 `model` 参数，并在状态响应中包含模型信息。

* **多架构 Docker 图像**  
  除了 `amd64` 之外，自托管部署现在还支持 `linux/arm64` 架构。

* **仅站点地图抓取模式**  
  新的抓取选项专门使用站点地图 URL，无需跟踪链接。

* **`ignoreCache` 地图参数**  
  映射 URL 时绕过缓存结果的新选项。

* **`/map` 的自定义标头**  
  地图端点现在支持自定义请求标头。

* **背景图像提取**  
  Scraper 现在从 CSS 样式中提取背景图像。

* **改进的错误消息**  
  所有面向用户的错误消息现在都包含详细说明，以帮助诊断问题。

---

## API 改进

* 搜索没有并发限制——搜索中的抓取现在直接执行，没有队列开销。
* 当可用引擎不支持请求的操作时，对于不支持的操作返回 `400`，并出现明显错误。
* 职位 ID 现在包含在搜索元数据中，以便于跟踪。
* 元数据响应现在包括检测到的时区。
* 如果丢失，则从 `og:title` 或 `twitter:title` 回填元数据标题。
* 重写 Google 表格 URL 时保留 `gid` 参数。
* 修复了批量抓取状态分页中的 v2 路径。
* 附加到现有爬网时验证团队所有权。
* 具有自定义视口或质量设置的屏幕截图现在绕过缓存。
* 优化了跨端点的 Redis 调用。
* 减少了过多的 `robots.txt` 获取和解析。
* 现在可配置最小请求超时参数。

---

## SDK 改进

### JavaScript SDK

* **Zod v4 兼容性** — 架构转换现在可与 Zod v4 配合使用，并改进了错误检测。
* **观察者导出** — `Watcher` 和 `WatcherOptions` 现在从 SDK 入口点导出。
* **代理 Webhook 支持** — 用于代理呼叫的新 Webhook 选项。
* **错误重试轮询** — SDK 在发生瞬时错误后重试轮询。
* **异常中的作业 ID** — 错误异常现在包括用于调试的 `jobId`。

### Python SDK

* 用于迭代结果的手动分页助手。
* 代理 client 添加了代理 Webhook 支持。
* 代理端点现在接受模型选择参数。
* 元数据现在包括并发限制信息。
* 修复了抓取请求中的 `max_pages` 处理。

---

## 仪表板改进

* 现在支持深色模式。
* 在使用页面上，您现在可以查看按天细分的积分使用情况。
* 在活动日志页面上，您现在可以按使用的 API 密钥进行过滤。
* Playground 现在支持“图像”输出格式。
* 所有管理员现在都可以管理其团队的订阅。

---

## 质量和性能

* 跳过大型 HTML 文档的 Markdown 转换检查。
* 将 Google 文档导出为 HTML 而不是 PDF，以提高性能。
* 改进了品牌格式，为 PDF 和文档提供了更好的徽标检测和错误消息。
* 改进了 `lopdf` 元数据加载性能。
* 更新了 `html-to-markdown` 模块，修复了多个错误。
* 增加了 Markdown 服务正文限制并添加了请求 ID 日志记录。
* 更好的哨兵过滤取消的作业和引擎错误。
* 修复了提取竞争条件和 RabbitMQ 毒丸处理。
* 跨代码库的集中 Firecrawl 配置。
* 修复多个安全漏洞，包括 CVE-2025-59466 和 lodash 原型污染。

---

## 自托管改进

* 通过 `firecrawl --api-url http://localhost:3002` 为本地实例提供 CLI 自定义 API URL 支持。
* 通过 Apple Silicon 和 ARM 服务器的多架构映像支持 ARM64 Docker。
* 修复了开箱即用的 docker-compose 数据库凭据。
* 修复了 Chromium 路径问题导致的 Playwright 服务启动问题。
* 将 Node.js 更新为主要版本 22，而不是固定的次要版本。
* 添加了 RabbitMQ 健康检查端点。
* 修复了 docker-compose 中 PostgreSQL 端口暴露的问题。

---

## 新贡献者

* @gemyago
* @洛加纳登
* @pcgeek86
* @dmlarionov

---

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.7.0...v2.8.0

## 发生了什么变化
*重构（api）：通过https://github.com/firecrawl/firecrawl/pull/2496中的@amplitudesxd集中firecrawl配置
* 修复（配置）：将 .catch 添加到 NUQ 工作端口默认值，以便 https://github.com/firecrawl/firecrawl/pull/2505 中的 @amplitudesxd 进行错误处理
* (sdk) 现在由 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2503 修复/与 api 相同的超时
* (sdks)在 https://github.com/firecrawl/firecrawl/pull/2502 中通过 @rafaelsideguide 在元数据中添加并发信息
* 修复：https://github.com/firecrawl/firecrawl/pull/2515 中 @Chadha93 在 HTML 转换中使 srcset URL 绝对化
* feat(api/admin/crawl-monitor)：在https://github.com/firecrawl/firecrawl/pull/2518中添加@mogery用于监控爬行系统的端点
* feat(api/logRequest)：通过https://github.com/firecrawl/firecrawl/pull/2519中的@mogery将请求与API键关联起来
* 修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2506 中测试时的配置负载
* feat(api)：通过https://github.com/firecrawl/firecrawl/pull/2520中的@amplitudesxd将模型使用更新为gpt-4o-mini
* feat(api/scrapeURL): engpicker integ by @mogery in https://github.com/firecrawl/firecrawl/pull/2523
* 修复（playwright-service-ts）：由于 https://github.com/firecrawl/firecrawl/pull/2512 中的 @dmlarionov 在 /tmp/.cache 下缺少 chromium，因此无法启动
* 在 https://github.com/firecrawl/firecrawl/pull/2526 中 @rafaelsideguide 在元数据响应中添加时区
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2489 中增加 Go 服务写入超时
* (python-sdk)fix/max_pages by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2527
* 使用 @micahstairs 在 https://github.com/firecrawl/firecrawl/pull/2532 中对某些扩展包使用发票计费
* 修复 docker 中的 PostgreSQL 端口暴露问题，由 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2530 中撰写
* (壮举/合作伙伴) 允许合作伙伴 API 的电子邮件是可选的，作者为 https://github.com/firecrawl/firecrawl/pull/2533 中的 @nickscamara
* @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2535 中的递归模式的高级模型
*壮举（api）：通过https://github.com/firecrawl/firecrawl/pull/2536中的@amplitudesxd将gpt-4o用法更新为gpt-4.1
*修复（api）：https://github.com/firecrawl/firecrawl/pull/2537中@amplitudesxd的成本跟踪
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2529 中更新 Sentry 以实现 ZDR 合规性
* 清理空字节字符串并通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2538 中向 Sentry 报告稳健插入失败
* 不要将功能 Flog 错误记录到 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2540 中的 Sentry
* 在 https://github.com/firecrawl/firecrawl/pull/2539 中调试日志以提取 @abimaelmartell 的更新
* 更新@abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2543 中构建的测试站点
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2544 中通过 @delong3 增加预抓取限制
* 修复（api）：机器人和抓取引擎 + https://github.com/firecrawl/firecrawl/pull/2545 中 @delong3 减少了站点地图限制
* Webhook 调度程序由 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2534 中提供
*（壮举/合作伙伴集成）通过@nickscamara在https://github.com/firecrawl/firecrawl/pull/2547中旋转端点
*修复：通过https://github.com/firecrawl/firecrawl/pull/2548中的@amplitudesxd提取竞争条件
* 修复：将 https://github.com/firecrawl/firecrawl/pull/2550 中的 @amplitudesxd 的属性名称从“success”更正为“is_successful”
* 壮举：更新根端点以返回 JSON，其中 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2552 中返回带有文档 URL 的 JSON
* @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2438 中改进品牌格式
* 在https://github.com/firecrawl/firecrawl/pull/2556中添加@abimaelmartell的更多哨兵过滤
* 恢复“feat(crawl)：在爬行con中实现URL修改处理...由https://github.com/firecrawl/firecrawl/pull/2558中的@amplitudesxd
* 修复：导出 URL 架构以供 https://github.com/firecrawl/firecrawl/pull/2559 中的 @amplitudesxd 外部使用
* 壮举：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2560 中添加可配置的线束启动超时
* 修复（api）：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2561 中进行 scrapeURL/index-metrics 日志记录
*修复（api）：https://github.com/firecrawl/firecrawl/pull/2562中@amplitudesxd过多的robots.txt获取/解析
* feat(api)：通过@amplitudesxd在https://github.com/firecrawl/firecrawl/pull/2564中优化redis调用
* 在 https://github.com/firecrawl/firecrawl/pull/2567 中 @abimaelmartell 的品牌格式 LLM 调用中添加 strictJsonSchema
* 在 https://github.com/firecrawl/firecrawl/pull/2568 中修复 @abimaelmartell 的 docker-compose 数据库凭据
* 在 https://github.com/firecrawl/firecrawl/pull/2569 中修复 @abimaelmartell 的部门审计
*壮举(api): ab/b by @mogery in https://github.com/firecrawl/firecrawl/pull/2570
* 壮举(api): ab/bs by @mogery in https://github.com/firecrawl/firecrawl/pull/2571
*壮举(api): ab/bsrch by @mogery in https://github.com/firecrawl/firecrawl/pull/2572
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2573 中更新 html-to-markdown 模块
* python-sdk：https://github.com/firecrawl/firecrawl/pull/2579 中的 @abimaelmartell 更新代理 Client
* 修复（摘录）：rabbitmq + https://github.com/firecrawl/firecrawl/pull/2581 中 @mogery 处理的毒丸
* 杂务（api）：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2584 中重新路由 fire-1
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2578 中添加bypassCreditChecks 团队标志，以通过 @devin-ai-integration[bot] 进行无限优雅的信用检查
* 修复（api/搜索）：https://github.com/firecrawl/firecrawl/pull/2585 中 @mogery 的更清晰的计费逻辑
* feat(api)：https://github.com/firecrawl/firecrawl/pull/2593 中 @amplitudesxd 对 /map 的自定义标头支持
* 修复（api）：https://github.com/firecrawl/firecrawl/pull/2598 中的 @delong3 向后兼容索引指标
* 将redis.sadd("billed_teams", team_id)添加到clearACUCTeam中，以便https://github.com/firecrawl/firecrawl/pull/2602中的@devin-ai-integration[bot]进行集中跟踪
* 当 https://github.com/firecrawl/firecrawl/pull/2601 中的 @micahstairs 将 v3-beta 传递到 /extract 时抛出错误
* 修复 #2583 添加 RabbitMQ 健康检查并通过 @pcgeek86 在 https://github.com/firecrawl/firecrawl/pull/2605 中更新 API 依赖项
* js-sdk：错误后重试轮询，将 jobId 添加到 https://github.com/firecrawl/firecrawl/pull/2608 中的@abimaelmartell 错误异常
* 允许 https://github.com/firecrawl/firecrawl/pull/2603 中 @abimaelmartell 的代理架构格式
* feat(api)：通过https://github.com/firecrawl/firecrawl/pull/2611中的@amplitudesxd提取背景图像
* 不要将 EngineError 记录到 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2613 中的 Sentry
* 忽略 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2614 中取消的 Sentry 作业
* feat(api)：在https://github.com/firecrawl/firecrawl/pull/2618中@amplitudesxd将jobId包含在搜索响应元数据中
* 由 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2620 中更新 html-to markdown 版本
* 将 request_id 添加到 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2621 的 Markdown 日志中
* 在 https://github.com/firecrawl/firecrawl/pull/2623 中修复 @abimaelmartell 的 NPM 审计
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2624 中向 Go Markdown 服务添加错误详细信息
* 将请求 ID 添加到 https://github.com/firecrawl/firecrawl/pull/2630 中的 @abimaelmartell 的 Markdown 服务记录器
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2629 中增加 Markdown 服务主体限制
* @gemyago 在 https://github.com/firecrawl/firecrawl/pull/2555 中为 playwright 和 api 提供 linux/arm64 支持的多架构镜像
*修复（nuq）：https://github.com/firecrawl/firecrawl/pull/2633中@mogery的僵尸pg clients
* https://github.com/firecrawl/firecrawl/pull/2628 中 @amplitudesxd 的代理 Webhooks
* 由 https://github.com/firecrawl/firecrawl/pull/2634 中的 @abimaelmartell 更新 firecrawl/html-to-markdown
* 修复：添加 Number() 强制转换，以防止 https://github.com/firecrawl/firecrawl/pull/2635 中 @devin-ai-integration[bot] 在信用计算中出现字符串串联
* 恢复 @devhims 在 https://github.com/firecrawl/firecrawl/pull/2636 中的“修复：添加 Number() 强制以防止信用计算中的字符串连接”
*修复（api）：在https://github.com/firecrawl/firecrawl/pull/2637中通过@amplitudesxd附加到现有爬网时验证团队所有权
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2638 中添加 402 信用检查失败的调试日志记录
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2645 中实现 num_results for searchxng
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2646 中将 auth_credit_usage_chunk_38 映射到 auth_credit_usage_chunk_39
* 尝试修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2644 中的无限循环
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2642 中更新 lopdf 以使用 load_metadata 方法以获得更好的性能
* 修复：当 @devhims 在 https://github.com/firecrawl/firecrawl/pull/2650 中丢失时，从 og:title 或 twitter:title 回填元数据标题
*修复（安全）：修复audit-ci漏洞并清理@mogery在https://github.com/firecrawl/firecrawl/pull/2657中的白名单
* 杂务（api）：通过https://github.com/firecrawl/firecrawl/pull/2652中的@amplitudesxd将gdocs导出为HTML而不是PDF
* 跳过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2622 中对大型 HTML 文档进行 Markdown 检查
* feat(sdk)：通过https://github.com/firecrawl/firecrawl/pull/2663中的@firecrawl-spring[bot]将模型参数添加到代理端点
*修复（安全）：通过https://github.com/firecrawl/firecrawl/pull/2664中的@firecrawl-spring [bot]添加新的hono漏洞到审核白名单
* 由 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2667 中更新审核工作流程
* 修复（nuq）：将 RabbitMQ 到期时间与锁收割机对齐，以防止 https://github.com/firecrawl/firecrawl/pull/2672 中 @firecrawl-spring[bot] 的振荡
* 修复（nuq-postgres）：通过 https://github.com/firecrawl/firecrawl/pull/2673 中的 @firecrawl-spring[bot] 调整检查点和自动清理以减少作业预取停顿
* 壮举（计费）：在 https://github.com/firecrawl/firecrawl/pull/2674 中跳过 @firecrawl-spring[bot] 对组织团队的信用检查
* 修复（缓存）：通过 @firecrawl-spring[bot] 在 https://github.com/firecrawl/firecrawl/pull/2677 中跳过具有自定义视口或质量设置的屏幕截图的缓存
* .github/workflows：通过https://github.com/firecrawl/firecrawl/pull/2680中的@blacksmith-sh[bot]将工作流程迁移到铁匠跑步者
* 修复（ci）：https://github.com/firecrawl/firecrawl/pull/2681 中 @firecrawl-spring[bot] 将 npm 审核中的新漏洞列入白名单
* 修复（nuq-postgres）：https://github.com/firecrawl/firecrawl/pull/2679 中 @firecrawl-spring[bot] 进行积极的检查点调整以防止队列停顿
* 杂务（ci）：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2683 中调整跑步者
* 杂务（ci）：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2685 中调整跑步者
* 修复（js-sdk）：检测 Zod schema.shape 的错误使用，并通过 https://github.com/firecrawl/firecrawl/pull/2684 中的 @firecrawl-spring[bot] 提供有用的错误
* 修复（ci）：https://github.com/firecrawl/firecrawl/pull/2682 中@firecrawl-spring[bot] 允许列入低严重性 npm 审核漏洞
* 修复（ci）：通过 @firecrawl-spring[bot] 在 https://github.com/firecrawl/firecrawl/pull/2688 中添加新漏洞以审核白名单
* feat(api): 在https://github.com/firecrawl/firecrawl/pull/2686中添加ignoreCache参数以通过@firecrawl-spring[bot]映射端点
* 杂务（api）：更新 A/B 测试以使用 FIRE_ENGINE_AB_URL 而不是 FIRE…由 @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2689
* 杂务：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2690 中将审计运行器从 4c 更新到 2c
* 修复（scraper）：通过https://github.com/firecrawl/firecrawl/pull/2694中的@firecrawl-spring[bot]在变压器中保留后处理器降价
* 由 @loganaden 在 https://github.com/firecrawl/firecrawl/pull/2695 中修复 CVE-2025-59466
*修复（docker）：使用节点22主要版本而不是https://github.com/firecrawl/firecrawl/pull/2696中@firecrawl-spring [bot]固定的22.22
* feat(search)：删除 NuQ 队列并直接执行抓取，无并发限制，@abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2668 中
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2693 中通过 @devin-ai-integration[bot] 重写 Google Sheets URL 时保留 gid 参数
* feat(api)：@amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2699 中的消防车动作元数据
* 不要暴露内部错误 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2700
* 文档：修复 https://github.com/firecrawl/firecrawl/pull/2703 中 @firecrawl-spring[bot] 中的自述文件中的拼写错误
* feat(sdk)：通过https://github.com/firecrawl/firecrawl/pull/2705中的@firecrawl-spring[bot]为Node.js和Python SDKs添加代理webhook支持
* 当请求操作但没有引擎支持时返回 400 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2704
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2706 中添加 @amplitudesxd 的消防车 A/B 比较
* 杂务：通过 https://github.com/firecrawl/firecrawl/pull/2707 中的 @amplitudesxd 删除 DB webhook 逻辑
* 修复：https://github.com/firecrawl/firecrawl/pull/2708 中 @amplitudesxd 的 a/b 测试逻辑
* 壮举：https://github.com/firecrawl/firecrawl/pull/2709 中 @amplitudesxd 的测试比较允许轻微差异
* 壮举：https://github.com/firecrawl/firecrawl/pull/2714 中 @amplitudesxd 进行 A/B 比较中的 HTML 到 Markdown 转换
* feat: https://github.com/firecrawl/firecrawl/pull/2710 中 @delong3 请求超时参数 min
* 壮举：https://github.com/firecrawl/firecrawl/pull/2720 中 @amplitudesxd 的 word jaccard diff
*修复（api）：在https://github.com/firecrawl/firecrawl/pull/2722中@firecrawl-spring [bot]在批量抓取状态下一个URL中使用正确的v2路径
* 修复(js-sdk): 在https://github.com/firecrawl/firecrawl/pull/2724中添加Zod v4兼容性，以通过@firecrawl-spring[bot]进行架构转换
* feat(crawl)：在https://github.com/firecrawl/firecrawl/pull/2726中添加@firecrawl-spring[bot]仅支持站点地图
* 修复（deps）：解决https://github.com/firecrawl/firecrawl/pull/2728中@firecrawl-spring[bot]的lodash原型污染漏洞
* 通过 @firecrawl-spring[bot] 在 https://github.com/firecrawl/firecrawl/pull/2727 中为 Python SDK 添加手动分页助手
*壮举（代理）：在https://github.com/firecrawl/firecrawl/pull/2717中@firecrawl-spring[bot]的状态响应中包含模型
* feat(errors)：改进所有面向用户的错误消息，并由 @firecrawl-spring[bot] 在 https://github.com/firecrawl/firecrawl/pull/2697 中提供详细解释
* Chore(codeowners)：添加 abimaelmartell 作为 https://github.com/firecrawl/firecrawl/pull/2735 中 @firecrawl-spring[bot] 的品牌文件所有者
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2737 中@abimaelmartell 处理 415 不支持的媒体类型而不重试
* 修复（品牌）：在 https://github.com/firecrawl/firecrawl/pull/2746 中使用展开运算符而不是 Array.from 进行 @abimaelmartell 的 Set 转换
*修复（js-sdk）：通过https://github.com/firecrawl/firecrawl/pull/2754中的@firecrawl-spring [bot]从SDK入口点导出Watcher和WatcherOptions
* 修复（审计）：修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2757 中的 pnpm 审计问题
* 修复（审核）：升级 eslint 以修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2765 中的 ingestion-ui 中的 GHSA-p5wg-g6qr-c7cg 漏洞
*壮举（api）：通过https://github.com/firecrawl/firecrawl/pull/2759中的@firecrawl-spring [bot]添加增强的代理选项作为隐身别名
*壮举（api）：如果我们已经在https://github.com/firecrawl/firecrawl/pull/2767中拥有@tomsideguide的页面，则仅加载更多页面
*修复（api）：更新https://github.com/firecrawl/firecrawl/pull/2769中@firecrawl-spring[bot]地址的通知电子邮件
* @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2770 中对代理互操作进行了集中提升
* 杂务（api）：删除 https://github.com/firecrawl/firecrawl/pull/2768 中 @abimaelmartell 的 jest-junit 测试报告
* 杂务（api）：在 https://github.com/firecrawl/firecrawl/pull/2771 中添加 @abimaelmartell 的片状地图重定向测试日志记录
* 修复（品牌）：通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2749 中改进徽标检测
* feat(api)：通过@tomsideguide在https://github.com/firecrawl/firecrawl/pull/2773中提升并发队列回填中的作业
* 修复（安全）：https://github.com/firecrawl/firecrawl/pull/2775 中 @abimaelmartell 的许可名单快速 xml 解析器漏洞 GHSA-37qj-frw5-hhjh
* 修复（品牌）：改进 https://github.com/firecrawl/firecrawl/pull/2776 中@abimaelmartell 的 PDF 和文档的错误消息
* 杂务：通过 https://github.com/firecrawl/firecrawl/pull/2777 中的 @firecrawl-spring[bot] 从 ZDR 清理器中删除 firecrawl_jobs 清理
* 修复（计费）：通过 https://github.com/firecrawl/firecrawl/pull/2779 中的 @firecrawl-spring[bot] 跳转到 update_tally_8_team
* 修复（api）：通过 https://github.com/firecrawl/firecrawl/pull/2780 中的 @firecrawl-spring[bot] 将“增强”添加到 OpenAPI 规范中的代理枚举
* 琐事：https://github.com/firecrawl/firecrawl/pull/2782 中的 @firecrawl-spring[bot] 将 auth_credit_usage_chunk_39 提升到 auth_credit_usage_chunk_40
*壮举（rust-sdk）：在https://github.com/firecrawl/firecrawl/pull/2778中添加v2 API命名空间，并由@abimaelmartell提供代理支持

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.8.0` · 📅 发布：2026-02-03 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
