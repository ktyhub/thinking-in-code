# firecrawl v2.0.0
## 为什么要使用Firecrawl

在数据泛滥的时代，信息就像一片无边无际的海洋，而传统的网络爬虫工具却像是笨重的渔船，需要复杂的操作、漫长的等待，还常常空手而归。你是否厌倦了手动处理反爬机制、解析混乱的HTML结构，或是为了获取几KB的数据而编写数百行代码？这种低效与挫败感，正是Firecrawl要终结的噩梦。

Firecrawl的出现，直指传统数据采集的核心矛盾：**开发者对高效、精准数据的渴望**与**繁琐技术实现之间的巨大鸿沟**。它不仅仅是一个工具，更是一次解放生产力的革命。当你还在为IP被封、数据格式不统一而头疼时，Firecrawl用户早已轻松获取了干净、结构化的内容，并开始专注于真正的业务逻辑。选择Firecrawl，就是选择告别蛮力爬虫的黑暗时代，拥抱智能、优雅的数据未来。

## Firecrawl是什么

Firecrawl 是一个强大的API优先的网络爬虫平台，旨在将任何网站转换为干净、可用的Markdown或结构化数据。它简化了网络数据提取的流程，让开发者无需关心底层复杂的抓取、解析和抗封锁逻辑，即可高效、可靠地获取所需内容。

## 入门示例

**真实场景：** 假设你是一名市场分析师，需要快速监控竞争对手官网的最新产品发布信息和定价策略。

**开发示例（使用JavaScript SDK）：**

```javascript
// 1. 安装SDK: npm install @mendableai/firecrawl
// 2. 导入并初始化
import Firecrawl from '@mendableai/firecrawl';

const firecrawl = new Firecrawl({ apiKey: 'fc-YOUR-API-KEY' });

// 3. 发起抓取请求，直接获取竞争对手产品页的Markdown摘要
const url = 'https://competitor.com/new-product';
const scrapeResult = await firecrawl.scrape(url, {
  formats: ['markdown', 'summary'] // 同时获取原始Markdown和AI生成的摘要
});

// 4. 使用结果
console.log(scrapeResult.data.markdown); // 完整的页面Markdown内容
console.log(scrapeResult.data.summary); // AI提炼的页面核心内容摘要
// 接下来，你可以将数据存入数据库或进行进一步分析
```

这个示例展示了如何用几行代码就完成了以往需要大量工作的事情，极大地提升了开发效率。

## Firecrawl v2.0.0版本更新了什么

V2.0.0 是一次重大升级，核心是更智能、更快速、更统一。它默认启用缓存和多项优化（如屏蔽广告），让请求速度更快。新增了直接的“summary”格式来获取页面摘要。JSON提取和截图功能采用了新的对象参数格式，更清晰强大。搜索新增了“news”和“images”来源。最亮眼的是引入了智能爬取功能，只需用自然语言描述你的目标，系统便能自动推导出爬取路径和限制。

## 更新日志

### 介绍 v2.0.0

#### 主要改进

*   **默认速度更快**：请求默认缓存（`maxAge` 默认为2天），并启用了合理的默认值，如 `blockAds`、`skipTlsVerification` 和 `removeBase64Images`。
*   **新的摘要格式**：您现在可以指定 `"summary"` 作为格式，以直接接收页面内容的简明摘要。
*   **更新的 JSON 提取功能**：JSON 提取和变更跟踪现在使用对象格式：`{ type: "json", prompt, schema }`。旧的 `"extract"` 格式已重命名为 `"json"`。
*   **增强的截图选项**：使用对象形式：`{ type: "screenshot", fullPage, quality, viewport }`。
*   **新的搜索源**：通过设置 `sources` 参数，除了网络结果外，还可以搜索 `"news"` 和 `"images"`。
*   **智能提示爬取**：传递自然语言 `prompt` 来进行爬取，系统会自动推导路径/限制。使用新的 crawl-params-preview 端点来在开始作业前检查推导出的选项。

#### 快速迁移清单

*   将 v1 客户端用法替换为 v2 客户端：
    *   JS: `const firecrawl = new Firecrawl({ apiKey: 'fc-YOUR-API-KEY' })`
    *   Python: `firecrawl = Firecrawl(api_key='fc-YOUR-API-KEY')`
    *   API: 使用新的 `https://api.firecrawl.dev/v2/` 端点。
*   更新格式：
    *   在需要的地方使用 `"summary"`
    *   JSON 模式：使用 `{ type: "json", prompt, schema }` 进行 JSON 提取
    *   Screenshot 和 Screenshot@fullPage：在指定选项时使用截图对象格式
*   在 SDK 中采用标准化的异步流程：
    *   爬取：`startCrawl` + `getCrawlStatus`（或 `crawl` 等待器）
    *   批量：`startBatchScrape` + `getBatchScrapeStatus`（或 `batchScrape` 等待器）
    *   提取：`startExtract` + `getExtractStatus`（或 `extract` 等待器）
*   爬选项映射（见下文）
*   使用 `crawl-params-preview` 检查爬取 `prompt`

#### SDK 接口 (v2)

##### JS/TS

###### 方法名称变更 (v1 → v2)

**Scrape、Search 和 Map**

| v1 (FirecrawlApp) | v2 (Firecrawl) |
| :---------------- | :------------- |
| `scrapeUrl(url, ...)` | `scrape(url, options?)` |
| `search(query, ...)` | `search(query, options?)` |
| `mapUrl(url, ...)` | `map(url, options?)` |

**爬取 (Crawling)**

| v1 | v2 |
| :--- | :--- |
| `crawlUrl(url, ...)` | `crawl(url, options?)` (等待器) |
| `asyncCrawlUrl(url, ...)` | `startCrawl(url, options?)` |
| `checkCrawlStatus(id, ...)` | `getCrawlStatus(id)` |
| `cancelCrawl(id)` | `cancelCrawl(id)` |
| `checkCrawlErrors(id)` | `getCrawlErrors(id)` |

**批量抓取 (Batch Scraping)**

| v1 | v2 |
| :--- | :--- |
| `batchScrapeUrls(urls, ...)` | `batchScrape(urls, opts?)` (等待器) |
| `asyncBatchScrapeUrls(urls, ...)` | `startBatchScrape(urls, opts?)` |
| `checkBatchScrapeStatus(id, ...)` | `getBatchScrapeStatus(id)` |
| `checkBatchScrapeErrors(id)` | `getBatchScrapeErrors(id)` |

**提取 (Extraction)**

| v1 | v2 |
| :--- | :--- |
| `extract(urls?, params?)` | `extract(args)` |
| `asyncExtract(urls, params?)` | `startExtract(args)` |
| `getExtractStatus(id)` | `getExtractStatus(id)` |

**其他 / 已移除**

| v1 | v2 |
| :--- | :--- |
| `generateLLMsText(...)` | (不在 v2 SDK 中) |
| `checkGenerateLLMsTextStatus(id)` | (不在 v2 SDK 中) |
| `crawlUrlAndWatch(...)` | `watcher(jobId, ...)` |
| `batchScrapeUrlsAndWatch(...)` | `watcher(jobId, ...)` |

###### 类型名称变更 (v1 → v2)

**核心文档类型**

| v1 | v2 |
| :--- | :--- |
| `FirecrawlDocument` | `Document` |
| `FirecrawlDocumentMetadata` | `DocumentMetadata` |

**Scrape、Search 和 Map 类型**

| v1 | v2 |
| :--- | :--- |
| `ScrapeParams` | `ScrapeOptions` |
| `ScrapeResponse` | `Document` |
| `SearchParams` | `SearchRequest` |
| `SearchResponse` | `SearchData` |
| `MapParams` | `MapOptions` |
| `MapResponse` | `MapData` |

**爬取类型 (Crawl Types)**

| v1 | v2 |
| :--- | :---