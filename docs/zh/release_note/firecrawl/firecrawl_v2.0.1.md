# firecrawl v2.0.1
### 为什么要使用firecrawl

在信息爆炸的时代，数据如同深埋地底的宝藏，人人都想挖掘，却苦于无趁手工具。传统爬虫复杂笨重，犹如用铁铲挖掘金矿，效率低下且易触雷——被封IP、遭遇反爬、数据结构混乱，让人望而生畏。而**Firecrawl**的出现，正是为了解决这一矛盾：它像一把智能激光钻，精准、高效、安全地穿透互联网的层层壁垒，直抵目标数据核心。无论你是想监控竞品动态、聚合市场情报，还是训练AI模型，Firecrawl都能让你摆脱技术枷锁，专注于创新本身——毕竟，时代属于那些能快速驾驭数据的人。

---

### firecrawl是什么

Firecrawl 是一个开源网络爬虫工具，能够将任何网站或网页内容转换为结构化数据（如 Markdown 或 HTML）。它简化了数据抓取流程，支持自动解析、防阻塞机制和可扩展配置，让开发者更轻松地获取和处理网络信息。

---

### 入门示例

**真实场景**：假设你正在开发一个电商价格跟踪应用，需要每天抓取某在线商店的商品价格和描述。

**开发示例**：  
使用 Firecrawl，你可以快速编写一个脚本，自动提取商品信息并保存为结构化数据。以下是示例代码：

```python
from firecrawl import FirecrawlApp

# 初始化 Firecrawl 应用
app = FirecrawlApp(api_key="你的API密钥")

# 抓取指定 URL 页面
response = app.scrape_url('https://example.com/product-page', {
    'formats': ['markdown']
})

# 输出抓取结果
print(response['markdown'])
```

这段代码会返回页面的 Markdown 格式内容，方便进一步处理或存储。

---

### firecrawl v2.0.1版本更新了什么

- 修复了“通过恶意 Webhook 发起的 SSRF 漏洞”安全建议。
- 建议自托管用户立即升级至 v2.0.1 版本。
- 漏洞详细信息可查阅安全公告 GHSA-p2wg-prhf-jx79。
- 提升了系统安全性，防止潜在的网络攻击。
- 版本更新侧重于安全加固，无新增功能。

---

### 更新日志

本次发布修复了“通过恶意 Webhook 发起的 SSRF 漏洞”安全建议。建议使用 Firecrawl 自托管版本的用户立即升级至 v2.0.1 版本。更多信息请查看安全公告：[GHSA-p2wg-prhf-jx79](https://github.com/firecrawl/firecrawl/security/advisories/GHSA-p2wg-prhf-jx79)。

---

### 总结

此次更新主要针对安全漏洞进行紧急修复，强烈建议自托管用户升级以确保系统安全。