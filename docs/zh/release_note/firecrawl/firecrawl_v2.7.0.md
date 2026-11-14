---
title: "firecrawl v2.7.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.7.0"
version: "v2.7.0"
published: "2025-12-05"
type: "minor"
lang: "zh"
---

# firecrawl v2.7.0

## Firecrawl v2.7.0 来了！

- 为企业客户提供 ZDR 搜索支持。
- 改进的品牌格式，具有更好的检测能力。
- 合作伙伴集成 API 现已处于封闭测试阶段。
- 更快、更准确的屏幕截图。
- 自托管改进

还有更多增强功能，请在下面查看！


## **新功能**
- **改进的品牌提取物**  
  更好的徽标和颜色检测，以获得更准确的品牌提取结果。

- **NOQ 刮擦系统（实验性）**  
  新的抓取管道具有更高的稳定性和集成的并发检查。

- **增强重定向处理**  
  现在，URL 在映射之前解析，具有更安全的重定向链检测和新的中止超时。

- **企业搜索参数**  
  新的企业级选项可用于 `/search` 端点。

- **基于集成的用户创建**  
  现在可以在来自引用集成时自动创建用户。

- **`minAge` 刮削参数**  
  允许在重新 scraping 之前要求最低缓存期限。

- **提取账单积分**  
  提取作业现在使用与其他端点相同的信用计费系统。

- **自托管：可配置的抓取并发**  
  自托管部署现在可以设置自定义并发限制。

- **哨兵增强**  
  添加了 Vercel AI 集成、可配置采样率并改进了异常过滤。

- **UUIDv7 ID**  
  所有新资源均使用可按字典顺序排序的 UUIDv7。

## **API 改进**
- **DNS 解析错误现在返回 200** 以实现更一致的故障处理。
- **改进了 URL 映射逻辑**，包括站点地图 `maxAge` 修复、递归站点地图支持、Vue/Angular 路由器规范化以及跳过 IP 地址的子域逻辑。
- **多源搜索的部分结果**，而不是使所有源失败。
- **添加并发元数据**以抓取作业响应。
- **增强指标**，包括总等待时间、LLM 使用情况和格式详细信息。
- **批量抓取升级**  
  - 添加了缺失的 `/v2/batch/scrape/:jobId/errors` 端点  
  - 修复了分页差一的错误
- **更强大的错误处理**，适用于 PDF/文档引擎、pydantic 解析、Zod 验证、URL 验证和计费边缘情况。

---

## **SDK 改进**
### **JavaScript SDK**
- 从同步方法返回**作业 ID**。
- 改进了 **WebSocket `document` 事件** 处理。
- 修复了 **类型**、**Deno WS**，并添加了对 `ignoreQueryParameter` 的支持。
- 版本提升并进行内部清理。

### **Python SDK**
- 添加了额外的元数据字段。
- 改进了批量验证处理。

---

## **质量和性能**
- 减少了日志文件大小并改进了 tmp 文件清理。
- 更新了 Express 版本并修补了易受攻击的软件包。
- 禁用站点地图抓取的降价转换以提高性能。
- 更好的预抓取日志记录和格式化。
- 跳过已发布的 Google 文档的 URL 重写。
- 防止 webhook 回调期间出现空 cookie 标头。

---

## **自托管改进**
- 禁用自托管模式的并发限制强制执行。
- PostgreSQL 凭据现在可以通过环境变量进行配置。
- Docker-修复了构建指令。

---

## 👥 新贡献者
- @奥玛斯  
- @davidkhala  
- @DraPraks  
- @devhims  

---

**全Changelog：** https://github.com/firecrawl/firecrawl/compare/v2.6.0...v2.7.0

## 发生了什么变化
* (feat/dns) DNS 解析错误应该是 200 by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2402
* 改进 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2362 中对品牌摘录的徽标和颜色检测
* (js-sdk) 修复：@rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2415 中实现 ws 'document' 事件
* (js-sdk): 从 https://github.com/firecrawl/firecrawl/pull/2414 中 @abimaelmartell 的同步方法返回作业 ID
* (js-sdk)：由 @abimaelmartell 修复 https://github.com/firecrawl/firecrawl/pull/2416 中的类型
* (js-sdk)：@abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2417 中的凹凸版本
*修复（api）：在https://github.com/firecrawl/firecrawl/pull/2418中通过@delong3禁用gcs日志记录而无需数据库身份验证
* 壮举：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2419 中的 noq 抓取系统
* Muv2 exp 在 https://github.com/firecrawl/firecrawl/pull/2421 中添加 @tomkosm 的更多日志
* feat(api)：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2424 中集成 noq 并发检查
* 修复 https://github.com/firecrawl/firecrawl/pull/2425 中 @micahstairs 的并发回填错误
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2426 中通过 @amplitudesxd 命中主 api 端点时重定向到文档
* feat(api)：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2428 中的请求指标中的总等待时间
*（修复/搜索）rm 传统外部搜索 apis by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2420
* 修复（api）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2431 中的各种易受攻击的软件包（2025/11/21）
* 修复（api）：pdf + 文档引擎不尊重 zZPH22ZZ 中 @delong3 的 uncidi 的skipTlsVerification 标志和错误处理
* 修复（api）：/map 返回较少的 url，其中站点地图包含 @delong3 在 https://github.com/firecrawl/firecrawl/pull/2440 中
* 壮举：在 https://github.com/firecrawl/firecrawl/pull/2439 中通过 @amplitudesxd 映射 url 之前解析重定向
* 修复（api）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2430 中重新设计了计数系统
* 修复（api）：更新https://github.com/firecrawl/firecrawl/pull/2442中@amplitudesxd对已解析重定向的URL处理
*修复（api）：https://github.com/firecrawl/firecrawl/pull/2443中@delong3不透明的消防车删除+轮询间隔
* feat(api)：在https://github.com/firecrawl/firecrawl/pull/2444中通过@amplitudesxd为resolveRedirects添加中止超时
* (python-sdk) 壮举：@rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2441 中向元数据添加了额外字段
*修复（api）：通过@amplitudesxd在https://github.com/firecrawl/firecrawl/pull/2446中处理tallyBilling功能中没有计费团队的情况
*修复：在https://github.com/firecrawl/firecrawl/pull/2429中的@Chadha93的地图SDKs中添加对ignoreQueryParameter的支持
* 修复（api）：https://github.com/firecrawl/firecrawl/pull/2447 中的 @delong3 进行 vue + 角度路由器 url 规范化
* feat(api)：https://github.com/firecrawl/firecrawl/pull/2448 中 @delong3 的请求指标中使用的 Llm + 格式
* feat(api)：在https://github.com/firecrawl/firecrawl/pull/2449中通过@mogery切换到uuidv7
* 在 https://github.com/firecrawl/firecrawl/pull/2451 中添加 @abimaelmartell 的哨兵设置
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2453 中过滤哨兵异常
* 在 https://github.com/firecrawl/firecrawl/pull/2452 中通过 @amplitudesxd 添加 minAge 参数来抓取 (ENG-4073)
* 修复 https://github.com/firecrawl/firecrawl/pull/2457 中 @omahs 的拼写错误
* 修复 https://github.com/firecrawl/firecrawl/pull/2406 中 @davidkhala 的 docker-compose 服务构建说明
* 从 https://github.com/firecrawl/firecrawl/pull/2455 中@abimaelmartell 的 downloadFile 中清理 tmp 文件
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2456 中优化日志文件大小
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2465 中更新快速版本
* 由 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2462 中注释 CI 上的测试失败
* 修复（api/预爬）：https://github.com/firecrawl/firecrawl/pull/2466 中@delong3 的预爬日志记录 + 格式 + 跳过索引
* 修复(go-html-to-md): @delong3 在 https://github.com/firecrawl/firecrawl/pull/2467 中请求正文最大 60MB
*修复（api）：https://github.com/firecrawl/firecrawl/pull/2469中@delong3的dns +抓取拒绝错误
* 在 https://github.com/firecrawl/firecrawl/pull/2461 中禁用 @abimaelmartell 的站点地图抓取的 Markdown 转换
* 通过 https://github.com/firecrawl/firecrawl/pull/2471 中的 @devin-ai-integration[bot] 添加缺失的 /v2/batch/scrape/:jobId/errors 端点
* 修复：改进 pydantic 解析错误处理 | ENG-4070 作者：@Chadha93，https://github.com/firecrawl/firecrawl/pull/2450
* 修复：通过 https://github.com/firecrawl/firecrawl/pull/2388 中的@DraPraks 环境变量使 PostgreSQL 凭证可配置
* feat(api)：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2463 中引用集成来创建用户
* 壮举：@tomkosm 在 https://github.com/firecrawl/firecrawl/pull/2472 中的 muv2 exp apikey env
* (feat/search) Enterprise params by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2412
* 从 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2392 的请求中的 URL 验证 UUID
* 在 https://github.com/firecrawl/firecrawl/pull/2475 中禁用@abimaelmartell 自托管的并发限制
* (js sdk)由 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2476 中修复/ws deno
* 修复（api）：https://github.com/firecrawl/firecrawl/pull/2479 中 @delong3 的地图请求的站点地图最大年龄
* 修复（api）：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2480 中的递归站点地图的站点地图最大年龄
* 壮举：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2445 中设计的新应用程序数据库形状
* 杂务（api）：在 https://github.com/firecrawl/firecrawl/pull/2483 中禁用 @amplitudesxd 的 x-powered-by
* 跳过 https://github.com/firecrawl/firecrawl/pull/2477 中 @abimaelmartell 的 IP 地址子域逻辑
* 尝试修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2478 中的搜索测试
*修复（api）：在https://github.com/firecrawl/firecrawl/pull/2484中@amplitudesxd不支持隐形代理的情况下不计费
* 壮举（摘录）：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2482 中移植到计费积分
* feat: [self-host] - 添加对https://github.com/firecrawl/firecrawl/pull/2193中@Chadha93爬行配置并发的支持
* 将 https://github.com/firecrawl/firecrawl/pull/2369 中的 AI SDK 更新至 @abimaelmartell 的最新版本
* 通过 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2488 中修复 V0 上的 Zod 错误处理
* 修复：@devhims 在 https://github.com/firecrawl/firecrawl/pull/2492 中批量抓取分页中的差一错误
* 修复：使自动充值电子邮件显示实际信用金额，而不是 https://github.com/firecrawl/firecrawl/pull/2485 中 @devin-ai-integration[bot] 硬编码的 1000
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2490 中通过 @devin-ai-integration[bot] 搜索多个源时允许部分结果
* gitignore 测试结果 xml by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2493
* 修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2494 中的最新咨询问题
*壮举（api）：通过@amplitudesxd在https://github.com/firecrawl/firecrawl/pull/2473中添加sentry vercel ai集成
* feat(api/sentry)：通过https://github.com/firecrawl/firecrawl/pull/2495中的@amplitudesxd通过环境变量配置采样率
* Python sdk 通过 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2399 中修复/批量验证限制
* 杂务（哨兵）：通过https://github.com/firecrawl/firecrawl/pull/2498中的@amplitudesxd将默认TRACE_SAMPLE_RATE设置为0
* 杂务（api）：在 https://github.com/firecrawl/firecrawl/pull/2499 中禁用 @amplitudesxd 的 vercel 输入/输出跟踪
* feat(api)：@delong3 在 https://github.com/firecrawl/firecrawl/pull/2497 中抓取元数据中的并发限制信息
* engpicker POC by @mogery in https://github.com/firecrawl/firecrawl/pull/2501
* 修复：跳过 @devhims 在 https://github.com/firecrawl/firecrawl/pull/2500 中发布的 Google 文档的 URL 重写
* 修复：防止 @devhims 在 https://github.com/firecrawl/firecrawl/pull/2504 的 webhook 回调中出现空 cookie 标头

## 新贡献者
* @omahs 在 https://github.com/firecrawl/firecrawl/pull/2457 中做出了第一个贡献
* @davidkhala 在 https://github.com/firecrawl/firecrawl/pull/2406 中做出了第一个贡献
* @DraPraks 在 https://github.com/firecrawl/firecrawl/pull/2388 中做出了第一个贡献
* @devhims 在 https://github.com/firecrawl/firecrawl/pull/2492 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.6.0...v2.7.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.7.0` · 📅 发布：2025-12-05 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
