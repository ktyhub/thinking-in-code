# firecrawl v2.1.0
### 为什么要使用Firecrawl

在信息泛滥的时代，数据是新的石油，但获取高质量数据却如同大海捞针。传统爬虫工具要么复杂难用，要么功能有限，让你在数据泥潭中越陷越深。Firecrawl 的出现，正是为了解决这一矛盾——它让数据提取变得简单、高效，且强大到足以应对各种复杂场景。无论你是开发者、研究员，还是数据驱动型企业的决策者，Firecrawl 都能帮你从杂乱无章的网页中提炼出有价值的信息，让你专注于洞察而非技术细节。

---

### Firecrawl是什么

Firecrawl 是一个开源的网络爬虫和数据提取工具，旨在帮助用户轻松地从网页中抓取和结构化数据。它支持多种数据格式和网站类型，并提供简洁的 API 和 SDK，使开发者能够快速集成和使用。

---

### 入门示例

假设你正在开发一个市场分析工具，需要从多个电商网站提取产品信息、价格和评论。使用 Firecrawl，你可以通过几行代码实现这一需求：

```python
from firecrawl import FirecrawlApp

# 初始化 Firecrawl 应用
app = FirecrawlApp(api_key="你的API密钥")

# 抓取指定URL的数据
response = app.scrape_url("https://example.com/product-page", params={
    "extract_rules": {
        "title": "h1",
        "price": ".price",
        "description": ".product-description"
    }
})

print(response)
```

这段代码会提取指定页面的标题、价格和描述，并以结构化的 JSON 格式返回数据。Firecrawl 还支持批量抓取和自定义提取规则，适合各种复杂场景。

---

### Firecrawl v2.1.0版本更新内容

Firecrawl v2.1.0 引入了多项新功能和改进，包括：
1. 支持按类别筛选搜索结果，如 GitHub 和研究类网站。
2. 新增图像提取功能，并支持抓取 `data-*` 属性。
3. 改进了 Google Drive 文件（TXT、PDF、Sheets）的抓取能力。
4. 增强了 API 功能，支持最多 10 万条结果的映射端点。
5. 提升了安全性和错误处理能力。

---

### 更新日志

# Firecrawl v2.1.0 发布！

## ✨ 新功能

- **搜索分类**：使用 `categories` 参数按特定类别筛选搜索结果：
  - `github`：在 GitHub 仓库、代码、问题和文档中搜索
  - `research`：在学术和研究网站（如 arXiv、Nature、IEEE、PubMed 等）中搜索
  - 更多分类即将推出

- **图像提取**：在 v2 版本的 scrape 端点中新增图像提取支持。

- **数据属性抓取**：现在支持提取 `data-*` 属性。

- **基于哈希的路由**：爬虫端点现在支持基于哈希的路由。

- **改进的 Google Drive 抓取**：新增对 Google Drive 中 TXT、PDF 和 Sheets 文件的抓取能力。

- **PDF 增强**：提取 PDF 标题并在元数据中显示。

- **API 增强**：
  - 映射端点支持最多 **10 万条结果**。

- **Helm Chart**：新增用于 Firecrawl 部署的初始 Helm chart。

- **安全性**：改进对 XFF 欺骗的防护能力。

## 🛠 修复

- 修复了 Google 搜索爬虫中的 UTF-8 编码问题。
- 恢复了预览模式中的爬虫状态显示。
- 修复了 Python SDK 中缺失的方法。
- 修正了使用 `scrapeOptions.formats` 时 v2 搜索的 JSON 响应处理。
- 修复了 v0 版本 scrape 中 `credits_billed` 字段的填充问题。
- 改进了 v2 搜索中的文档字段覆盖逻辑。

🔗 [完整更新日志](https://github.com/firecrawl/firecrawl/compare/v2.0.1...v2.1.0)

---

### 总结

Firecrawl v2.1.0 版本带来了多项重要更新，包括搜索分类、图像提取、数据属性抓取等新功能，同时改进了 Google Drive 抓取能力和 PDF 处理效率。此外，API 功能的增强和安全性的提升进一步优化了用户体验。此次更新不仅丰富了工具的功能性，还修复了多个已知问题，确保了系统的稳定性和可靠性。