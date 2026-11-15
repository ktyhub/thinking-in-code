---
title: "Scrapling v0.4"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4"
version: "v0.4"
published: "2026-02-15"
type: "minor"
lang: "zh"
---

# Scrapling v0.4

** Scrapling 迄今为止最大的版本 - 引入了 Spider 框架、代理轮换和主要解析器改进**

此版本带来了完全异步的蜘蛛/爬行框架、智能代理管理和重大 API 更改，使 Scrapling 更加强大和一致。升级前请仔细查看重大更改部分。

🕷️ 蜘蛛框架
===========

一个基于 `anyio` 构建的新异步爬取框架，用于结构化、大规模 scraping：

```python
from scrapling.spiders import Spider, Response

class MySpider(Spider):
  name = "demo"
  start_urls = ["https://example.com/"]

  async def parse(self, response: Response):
      for item in response.css('.product'):
          yield {"title": item.css('h2::text').get()}

MySpider().start()
```
- **类似 Scrapy 的蜘蛛 API**：使用 `start_urls`、异步 `parse` 回调、`Request`/`Response` 对象和优先级队列定义蜘蛛。
- **并发抓取**：可配置的并发限制、每个域的限制和下载延迟。
- **多会话支持**：HTTP 请求的统一接口，以及单个蜘蛛中的隐形无头浏览器 - 通过 ID 将请求路由到不同的会话。支持延迟会话初始化。
- **暂停和恢复**：基于检查点的爬网持久性。按Ctrl+C优雅关机；然后重新启动以从上次中断的位置继续。
- **流模式**：通过 `async for item in spider.stream()` 传输抓取的项目，并提供实时统计信息 - 非常适合 UI、管道和长时间运行的爬网。
- **阻止的请求检测**：使用可定制的逻辑自动检测和重试阻止的请求。
- **内置导出**：通过钩子和您自己的管道或分别带有 `result.items.to_json()` / `result.items.to_jsonl()` 的内置 JSON / JSONL 导出结果。
- **生命周期挂钩**：`on_start()`、`on_close()`、`on_error()`、`on_scraped_item()` 以及更多用于完全控制爬网生命周期的挂钩。
- **详细的爬网统计信息**：跟踪请求、响应、字节、状态代码、代理、每个域/会话细分、日志级别计数等。
- **uvloop 支持**：将 `use_uvloop=True` 传递到 `spider.start()`，以便在可用时加快异步执行速度。

网站上添加了一个包含完整详细信息的新部分。 Click [此处](https://scrapling.readthedocs.io/en/latest/spiders/architecture.html)

🔄 代理轮换
===========

* 新的 `ProxyRotator` 类具有线程安全旋转。适用于所有获取器和会话：
  ```python
  from scrapling import ProxyRotator
  rotator = ProxyRotator(["http://proxy1:8080", "http://proxy2:8080"])
  Fetcher.get(url, proxy_rotator=rotator)
  ```
* **自定义轮换策略**：制作您自己的代理轮换逻辑
* **按请求代理覆盖**：将 `proxy=` 传递给任何单独的 `get()`/`post()`/`fetch()` 调用以覆盖该请求的会话代理。

🌐 浏览器获取器改进
===========

* **域阻止**：`DynamicFetcher`/`StealthyFetcher` 上的新 `blocked_domains` 参数可阻止对特定域（自动匹配的子域）的请求。
* **自动重试**：浏览器获取器现在使用 `retries`（默认值：3）和 `retry_delay`（默认值：1s）参数在失败时重试。包括代理感知错误检测。
* **响应元数据**：`Response.meta` dict自动存储使用的代理，并合并请求元数据。
* **Response.follow()**：创建具有自动引用流的后续 `Request` 对象，专为蜘蛛系统而设计。
* **无自动播放**：浏览器会话现在阻止自动播放内容，这在之前引起了问题。
* **速度**：通过调整浏览器标志提高隐秘性和速度。

🔧 错误修复和改进
===========
- **解析器优化**：优化了重复操作的解析器，提高了性能。
- **错误页面**：修复了页面出现错误时导致浏览器无法关闭的错误。
- **空体**：用空体处理响应。
- **Playwright 循环**：解决 CDP 连接失败时使 Playwright 循环保持打开状态的问题
- **类型安全**：修复了所有 mypy 错误并在非类型化函数体中添加了类型提示。将 mypy 和 Pyright 添加到 CI 工作流程中。

⚠️ 重大变化
===========

* **删除了 `css_first`/`xpath_first`**：使用 `css('.selector').first`、`css('.selector')[0]` 或 `css('.selector').get()` 代替。
* **所有选择现在都返回 `Selectors`**：`css('::text')`、`xpath('//text()')`、`css('::attr(href)')` 和 `xpath('//@href')` 现在返回 `Selectors`（用 `tag="#text"` 包装 `Selector` 对象中的文本节点）而不是 `TextHandlers`。这使得 ZZPH100​​ZZ 在所有选择方法和类型提示中保持一致。
* **`Response.body` 始终为 `bytes`**：以前可能是 `str` 或 `bytes`，现在始终返回 `bytes`。
* **`get()`/`getall()` 行为**：在 `Selector` 上：`get()` 返回 `TextHandler`（序列化 HTML 或文本值），`getall()` 返回 `TextHandlers`。别名：`extract_first = get`、`extract = getall`。 `Selectors` 上的旧 `get_all()` 已被移除。
* **`Selectors.first`/`.last`**：返回 `Selector | None` 而不是引发 `IndexError` 的安全访问器。
* **内部常量重命名**：`DEFAULT_FLAGS` → `DEFAULT_ARGS`、`DEFAULT_STEALTH_FLAGS` → `STEALTH_ARGS`、`HARMFUL_DEFAULT_ARGS` → `HARMFUL_ARGS`、`DEFAULT_DISABLED_RESOURCES` → `EXTRA_RESOURCES`。

🔨 其他变化
===========

* **依赖项更改**：用 `tld` 替换 `tldextract`，删除内部 `_html_utils.py` 以支持 `w3lib.html.replace_entities`，添加 `typing_extensions` 作为硬性要求。
* **文档大修**：从 MkDocs 完全切换到 Zensical，新的蜘蛛文档部分，更新了所有现有页面，并添加了新的 API 参考。

_🙏 特别感谢我们的 [Discord 社区](https://discord.gg/EMgGbDceNQ) 的持续测试和反馈_

---

### 向我们最大的赞助商致敬
<a href="https://www.scrapeless.com/en?utm_source=official&utm_term=scrapling" target="_blank" title="面向企业和开发人员的轻松 Web Scraping 工具包"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/scrapeless.jpg"></a> <a href="https://www.thordata.com/?ls=github&lk=github" target="_blank" title="不可阻止的代理和 scraping 基础设施，提供实时、可靠的网络数据来支持 AI 模型"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/thordata.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价 $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="抓取 Google 和其他搜索引擎SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a><a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="免费尝试最高效的住宅代理"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a><a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供先进的 VPS托管。"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png"></a><a href="https://hasdata.com/?utm_source=github&utm_medium=banner&utm_campaign=D4Vinci" target="_blank" title="真正击败反机器人系统的网络 scraping 服务！"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/hasdata.png"></a><a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="机器人防护绕过 API适用于 Akamai、DataDome、Incapsula 和 Kasada"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png"></a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4` · 📅 发布：2026-02-15 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
