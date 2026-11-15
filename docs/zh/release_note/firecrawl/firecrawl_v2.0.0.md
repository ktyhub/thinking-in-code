---
title: "firecrawl v2.0.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.0.0"
version: "v2.0.0"
published: "2025-08-19"
type: "major"
lang: "zh"
---

# firecrawl v2.0.0

# 介绍 v2.0.0

### 关键改进

* **默认情况下更快**：请求缓存，`maxAge` 默认为 2 天，并且启用 `blockAds`、`skipTlsVerification` 和 `removeBase64Images` 等合理的默认值。

* **新摘要格式**：您现在可以指定 `"summary"` 作为直接接收页面内容的简洁摘要的格式。

* **更新了 JSON 提取**：JSON 提取和更改跟踪现在使用对象格式：`{ type: "json", prompt, schema }`。旧的 `"extract"` 格式已重命名为 `"json"`。

* **增强的屏幕截图选项**：使用对象形式：`{ type: "screenshot", fullPage, quality, viewport }`。

* **新搜索源**：通过设置 `sources` 参数，除了 Web 结果之外，还可以在 `"news"` 和 `"images"` 中进行搜索。

* **带提示的智能爬行**：传递自然语言`prompt`进行爬行，系统自动导出路径/限制。使用新的crawl-params-preview端点在开始作业之前检查派生选项。

## 快速迁移清单

* 将 v1 client 用法替换为 v2 clients：
  * JS：`const firecrawl = new Firecrawl({ apiKey: 'fc-YOUR-API-KEY' })`
  * Python: `firecrawl = Firecrawl(api_key='fc-YOUR-API-KEY')`
  * API：使用新的 `https://api.firecrawl.dev/v2/` 端点。
* 更新格式：
  * 需要时使用 `"summary"`
  * JSON模式：使用`{ type: "json", prompt, schema }`进行JSON提取
  * Screenshot 和 Screenshot\@fullPage: 指定选项时使用屏幕截图对象格式
* 在 SDK 中采用标准化异步流程：
  *爬行：`startCrawl` + `getCrawlStatus`（或`crawl`服务员）
  * 批次：`startBatchScrape` + `getBatchScrapeStatus`（或`batchScrape`服务员）
  *摘录：`startExtract` + `getExtractStatus`（或`extract`服务员）
* 抓取选项映射（见下文）
* 检查爬行 `prompt` 与 `crawl-params-preview`

## SDK 表面 (v2)

### JS/TS

#### 方法名称更改 (v1 → v2)

**抓取、搜索和地图**

| v1 (FirecrawlApp) | v2（火爬行）|
| -------------------- | ---------------------------------- |
| `scrapeUrl(url, ...)` | `scrape(url, options?)` |
| `search(query, ...)` | `search(query, options?)` |
| `mapUrl(url, ...)` | `map(url, options?)` |

**爬行**

| v1 | v2 |
| --------------------------------------- | ------------------------------------------- |
| `crawlUrl(url, ...)` | `crawl(url, options?)`（服务员）|
| `asyncCrawlUrl(url, ...)` | `startCrawl(url, options?)` |
| `checkCrawlStatus(id, ...)` | `getCrawlStatus(id)` |
| `cancelCrawl(id)` | `cancelCrawl(id)` |
| `checkCrawlErrors(id)` | `getCrawlErrors(id)` |

**批次 Scraping**

| v1 | v2 |
| --------------------------------- | ----------------------------------- |
| `batchScrapeUrls(urls, ...)` | `batchScrape(urls, opts?)`（服务员）|
| `asyncBatchScrapeUrls(urls, ...)` | `startBatchScrape(urls, opts?)` |
| `checkBatchScrapeStatus(id, ...)` | `getBatchScrapeStatus(id)` |
| `checkBatchScrapeErrors(id)` | `getBatchScrapeErrors(id)` |

**提取**

| v1 | v2 |
| -------------------------------------- | ---------------------------------- |
| `extract(urls?, params?)` | `extract(args)` |
| `asyncExtract(urls, params?)` | `startExtract(args)` |
| `getExtractStatus(id)` | `getExtractStatus(id)` |

**其他/删除**

| v1 | v2 |
| --------------------------------- | -------------------- |
| `generateLLMsText(...)` | （v2 SDK 中没有）|
| `checkGenerateLLMsTextStatus(id)` | （v2 SDK 中没有）|
| `crawlUrlAndWatch(...)` | `watcher(jobId, ...)` |
| `batchScrapeUrlsAndWatch(...)` | `watcher(jobId, ...)` |

#### 类型名称更改 (v1 → v2)

**核心文档类型**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `FirecrawlDocument` | `Document` |
| `FirecrawlDocumentMetadata` | `DocumentMetadata` |
**抓取、搜索和地图类型**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `ScrapeParams` | `ScrapeOptions` |
| `ScrapeResponse` | `Document` |
| `SearchParams` | `SearchRequest` |
| `SearchResponse` | `SearchData` |
| `MapParams` | `MapOptions` |
| `MapResponse` | `MapData` |

**抓取类型**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `CrawlParams` | `CrawlOptions` |
| `CrawlStatusResponse` | `CrawlJob` |

**批量操作**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `BatchScrapeStatusResponse` | `BatchScrapeJob` |

**动作类型**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `Action` | `ActionOption` |

**错误类型**

| v1 | v2 |
| ---------------------------- | ---------------------------- |
| `FirecrawlError` | `SdkError` |
| `ErrorResponse` | `ErrorDetails` |

***

### Python（同步）

#### 方法名称更改 (v1 → v2)

**抓取、搜索和地图**

| v1 | v2 |
| ----------------- | ------------- |
| `scrape_url(...)` | `scrape(...)` |
| `search(...)` | `search(...)` |
| ZZPH100​​ZZ | `map(...)` |

**爬行**

| v1 | v2 |
| ---------------------------------- | ------------------------ |
| `crawl_url(...)` | `crawl(...)`（服务员）|
| `async_crawl_url(...)` | `start_crawl(...)` |
| `check_crawl_status(...)` | `get_crawl_status(...)` |
| `cancel_crawl(...)` | `cancel_crawl(...)` |

**批次 Scraping**

| v1 | v2 |
| ------------------------------ | ------------------------------ |
| `batch_scrape_urls(...)` | `batch_scrape(...)`（服务员）|
| `async_batch_scrape_urls(...)` | `start_batch_scrape(...)` |
| `get_batch_scrape_status(...)` | `get_batch_scrape_status(...)` |
| `get_batch_scrape_errors(...)` | `get_batch_scrape_errors(...)` |

**提取**

| v1 | v2 |
| ---------------------------------- | ---------------------------------- |
| `extract(...)` | `extract(...)` |
| `start_extract(...)` | `start_extract(...)` |
| `get_extract_status(...)` | `get_extract_status(...)` |

**其他/删除**

| v1 | v2 |
| ------------------------------------------------ | ---------------------------------- |
| `generate_llms_text(...)` | （v2 SDK 中没有）|
| `get_generate_llms_text_status(...)` | （v2 SDK 中没有）|
| `watch_crawl(...)` | `watcher(job_id, ...)` |

***

### Python（异步）

* `AsyncFirecrawl` 镜像相同的方法（全部等待）。

## 格式和抓取选项

* 使用字符串格式作为基础知识：`"markdown"`、`"html"`、`"rawHtml"`、`"links"`、`"summary"`。
* 使用 `parsers: [ { "type": "pdf" } | "pdf" ]` 代替 `parsePDF`。
* 使用 JSON 的对象格式、更改跟踪和屏幕截图：

### JSON 格式

 ```bash
  curl -X POST https://api.firecrawl.dev/v2/scrape \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev/",
        "formats": [{
          "type": "json",
          "prompt": "Extract the company mission from the page."
        }]
      }'
 ```

### 截图格式

```bash cURL
  curl -X POST https://api.firecrawl.dev/v2/scrape \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev/",
        "formats": [{
          "type": "screenshot",
          "fullPage": true,
          "quality": 80,
          "viewport": { "width": 1280, "height": 800 }
        }]
      }'
 ```

## 抓取选项映射 (v1 → v2)

| v1 | v2 |
| ------------------------ | ---------------------------------------------------------------- |
| `allowBackwardCrawling` | （已删除）使用`crawlEntireDomain` |
| `maxDepth` | （已删除）使用`maxDiscoveryDepth` |
| `ignoreSitemap`（布尔）| `sitemap`（例如，`"only"`、`"skip"` 或 `"include"`）|
| （无）| `prompt` |

## 抓取提示+参数预览

请参阅抓取参数预览示例：

```bash
  curl -X POST https://api.firecrawl.dev/v2/crawl-params-preview \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev",
        "prompt": "Extract docs and blog"
      }'
```


## 发生了什么变化
* 通过 @micahstairs 在 https://github.com/firecrawl/firecrawl/pull/1816 中向我们的阻止列表中添加几个例外
* 修复（api/v1/types）：如果https://github.com/firecrawl/firecrawl/pull/1821中@mogery的URL无效，深度检查会抛出错误
* (feat/rtxt) 通过 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/1820 中的标志改进了机器人对抓取的控制
* 修复/actions dict attributeError by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/1824
* feat(types)：将 JSON 模式验证添加到 extractO 中的模式选项…由 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/1803 中
* 修复（python-sdk）：在https://github.com/firecrawl/firecrawl/pull/1825中通过@devin-ai-integration[bot]将max_age参数添加到scrape_url验证
* 在https://github.com/firecrawl/firecrawl/pull/1822中恢复@mogery的Rust链接过滤逻辑
* 壮举：修改了 docker 映像，使其可以由 https://github.com/firecrawl/firecrawl/pull/1819 中的 @expruc 的任何 UID 运行
* 修复（api）：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1829 中更新易受攻击的 pkg
* 修复：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1831 中出现更多包装漏洞
* 杂务（deps）：通过 https://github.com/firecrawl/firecrawl/pull/1832 中的 @dependabot[bot] 将 /apps/js-sdk 中的表单数据从 4.0.0 碰撞到 4.0.4
* 杂务（deps）：通过https://github.com/firecrawl/firecrawl/pull/1833中的@dependabot[bot]将/apps/js-sdk中的axios从1.6.8提升到1.11.0
* 杂务（deps）：在 /apps/js-sdk 中通过 @dependabot[bot] 在 https://github.com/firecrawl/firecrawl/pull/1834 中碰撞 esbuild 和 tsx
* 修复（js-sdk）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1835 中剩余的 pkg 漏洞
* 修复（爬网）：如果 https://github.com/firecrawl/firecrawl/pull/1837 中的@mogery 启用了changeTracking (ENG-2900)，则仅在预完成时扩展 URL
* 修复（queue-worker）：清理停滞的作业，以免被 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1838 中的抓取卡住（ENG-2902）
*修复（queue-worker）：通过@mogery在https://github.com/firecrawl/firecrawl/pull/1839中改进停滞的作业清理器（ENG-2907）
* 壮举：通过 https://github.com/firecrawl/firecrawl/pull/1840 中的 @devin-ai-integration[bot] 将站点地图 XML 解析从 JavaScript 重写为 Rust (ENG-2904)
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/1843 中修复 robots.txt 解析器的内容类型验证错误
* 通过https://github.com/firecrawl/firecrawl/pull/1847中的@devin-ai-integration[bot]将allowTeammateInvites标志添加到TeamFlags类型
* 修复了 https://github.com/firecrawl/firecrawl/pull/1846 中 @devin-ai-integration[bot] 在 URL 重复数据删除中忽略的ignoreQueryParameters - ENG-2804
* ENG-2829：通过 @devin-ai-integration[bot] 修复 https://github.com/firecrawl/firecrawl/pull/1845 中的 isSubdomain 错误
* 修复（爬虫/站点地图）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1842 中的改进
* 添加 __experimental_omceDomain 标志，以便通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/1844 中进行调试和基准测试
* 壮举：通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/1850 中添加包含标签和排除标签的 iframe 选择器转换
* 修复（worker/antistall/kickoff）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1859 中的错误检查（ENG-2936）
* 由@nickscamara 在 https://github.com/firecrawl/firecrawl/pull/1860 中更新batch_billing.ts
* @mogery 在 https://github.com/firecrawl/firecrawl/pull/1861 中进行的修补程序
*修复（队列服务）：通过https://github.com/firecrawl/firecrawl/pull/1862中的@mogery更快地摆脱已完成的计费工作
* @mogery 在 https://github.com/firecrawl/firecrawl/pull/1863 中进一步记录
* @mogery 在 https://github.com/firecrawl/firecrawl/pull/1864 中的更多日志
* 修复#1870：在 https://github.com/firecrawl/firecrawl/pull/1871 中正确 @wwhurley 的 maxConcurrency 计算
* 修复（html-to-markdown）：为 https://github.com/firecrawl/firecrawl/pull/1872 中的@mogery 的每次转换（ENG-2956）重新初始化转换器库
* 在 https://github.com/firecrawl/firecrawl/pull/1873 中恢复 @mogery 的 Docker 文件中的 go 版本
*修复（爬行状态）：在https://github.com/firecrawl/firecrawl/pull/1875中@mogery检查后移动count_jobs_of_crawl_team
* 通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1876 中更新 koffi
* feat(v2): 添加自然语言提示支持，通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/1877 中抓取 API
* 修复 robots.txt HTML 过滤，以通过 https://github.com/firecrawl/firecrawl/pull/1880 中的 @devin-ai-integration[bot] 检查内容结构
* 修复（go）：添加互斥锁以防止 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1883 中的 html-to-markdown 中并发访问问题
* 壮举：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1857 中实现更好的日志属性传播 (ENG-2934)
* 修复（js-sdk）：通过@devin-ai-integration[bot]在https://github.com/firecrawl/firecrawl/pull/1893中为monitorJobStatus（ENG-3029）中的套接字挂起错误添加重试逻辑
* 修复 Pydantic 字段名称遮蔽问题，导致 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/1800 中导入 NameError
* 壮举：添加crawlTtlHours团队标志，以在https://github.com/firecrawl/firecrawl/pull/1899中用@devin-ai-integration[bot]替换teamIdsExcludedFromExpiry
* feat(crawler)：通过 https://github.com/firecrawl/firecrawl/pull/1895 中的 @devin-ai-integration[bot] 将 robotstxt 库替换为 ENG-3016 的 texting_robots
*队列工作人员：通过https://github.com/firecrawl/firecrawl/pull/1879中的@mogery将抓取工作人员移动到单独的线程（ENG-3008）
*修复（crawl-redis）：尝试在https://github.com/firecrawl/firecrawl/pull/1901中由@mogery清理爬行内存
* 修复：通过 https://github.com/firecrawl/firecrawl/pull/1894 中的 @devin-ai-integration[bot] 将 Python SDK 中的超时从毫秒转换为秒
* feat(python-sdk)：通过@devin-ai-integration[bot]在https://github.com/firecrawl/firecrawl/pull/1896中实现缺少的crawl_entire_domain参数
* 改进 Python SDK 中针对非 JSON 响应的错误处理（@rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/1827 中）
* 壮举：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1902 中进行队列复用
* 修复（文档）：https://github.com/firecrawl/firecrawl/pull/1904 中 @ChetanGoti 正确链接到地图
* feat(v2)：解析器+与https://github.com/firecrawl/firecrawl/pull/1907中@mogery的main合并
*（壮举/索引）@nickscamara 在 https://github.com/firecrawl/firecrawl/pull/1908 中的域频率聚合器
* 修复（api）：在https://github.com/firecrawl/firecrawl/pull/1909中添加数据库回退以通过@mogery抓取错误端点
* feat(v2): 在 https://github.com/firecrawl/firecrawl/pull/1910 中为 @mogery 的屏幕截图添加视口参数
* feat(scrape-v2)：通过@mogery在https://github.com/firecrawl/firecrawl/pull/1911中实现对fetch和playwright引擎的skipTlsVerification支持
* feat(v2)：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1915 中将抓取端点的默认 maxAge 设置为 4 小时
* 修复 v1 API JSON/提取格式在 https://github.com/firecrawl/firecrawl/pull/1917 中 @mogery 对 v2 的向后兼容性
* 修复：在 https://github.com/firecrawl/firecrawl/pull/1922 中由 @Josh-M42 处理工作线程的 --max-old-space-size 标志
* 壮举：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1928 中集成 langfuse
* ENG-3088：通过 https://github.com/firecrawl/firecrawl/pull/1931 中的 @mogery 将解析器参数从对象更改为数组格式
* feat(python-sdk)：通过https://github.com/firecrawl/firecrawl/pull/1919中的@devin-ai-integration[bot]为scrape_url方法添加代理参数支持
* 修复：防止使用 parsePDF:false 的 PDF 刮擦被 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1933 中索引
* feat(crawl-redis)：将 Redis 中的 `crawl:<id>:visited` 尺寸减小 16 倍，@mogery 在 https://github.com/firecrawl/firecrawl/pull/1936 中
* 壮举：通过 @ftonato 在 https://github.com/firecrawl/firecrawl/pull/1852 中添加按需搜索端点
*修复（queue-worker）：在https://github.com/firecrawl/firecrawl/pull/1941中由@mogery关闭沙盒抓取工作人员中的useWorkerThreads
* 修复（scrapeURL/pdf）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1942 中更好地处理 PDF 抓取的超时错误
* 壮举（scrape-worker）：重新引入 OTEL，以通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1943 中准确跟踪 LLM 成本
* feat(api/ai-sdk)：在https://github.com/firecrawl/firecrawl/pull/1944中通过@mogery向顶点/谷歌调用添加标签
* test(v2/crawl): 通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1929 中实现带有提示参数的爬行 API 测试
* feat(ci)：在https://github.com/firecrawl/firecrawl/pull/1947中通过@mogery审核PR上的NPM包
*修复（测试/抓取）：在https://github.com/firecrawl/firecrawl/pull/1946中@mogery的索引测试中明确`maxAge: 0`
* ENG-3089：在 https://github.com/firecrawl/firecrawl/pull/1932 中 @mogery 在 v2 scrape API 中支持字符串和对象格式输入
* 壮举（v2/超时）：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1950 中最初的新瀑布系统（ENG-2922）
* feat(v2)：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1955 中提取
* feat(v2)：@mogery 在 https://github.com/firecrawl/firecrawl/pull/1957 中的错误处理
* @tomkosm 在 https://github.com/firecrawl/firecrawl/pull/1958 中测试新的 mu 版本
* 通过 @tomkosm 在 https://github.com/firecrawl/firecrawl/pull/1959 中更新 mu
* feat(api/admin)：prometheus 关于 https://github.com/firecrawl/firecrawl/pull/1963 中 @mogery 的 cc 限制队列的指标
* 修复（api）：停止在 https://github.com/firecrawl/firecrawl/pull/1962 中使用 @mogery 的 bulljobs_teams 表
*修复（队列服务）：减少https://github.com/firecrawl/firecrawl/pull/1966中@mogery到BullMQ的redis连接
* 修复(crawl-status, extract-status): 减少https://github.com/firecrawl/firecrawl/pull/1968中@mogery对BullMQ getState的使用
*壮举（api）：在https://github.com/firecrawl/firecrawl/pull/1969中@mogery到处添加OTEL
* feat(crawl-status): 由 @mogery 在 https://github.com/firecrawl/firecrawl/pull/1971 中重构
* (feat/api) v2 由 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/1841 中

## 新贡献者
* @expruc 在 https://github.com/firecrawl/firecrawl/pull/1819 中做出了第一个贡献
* @wwhurley 在 https://github.com/firecrawl/firecrawl/pull/1871 中做出了第一个贡献
* @ChetanGoti 在 https://github.com/firecrawl/firecrawl/pull/1904 中做出了第一个贡献
* @Josh-M42 在 https://github.com/firecrawl/firecrawl/pull/1922 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v1.15.0...v2.0.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.0.0` · 📅 发布：2025-08-19 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.0.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
