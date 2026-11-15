---
title: "crawl4ai v0.7.3"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.3"
version: "v0.7.3"
published: "2025-08-09"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.3

# 🚀 Crawl4AI v0.7.3: The Multi-Config Intelligence Update

欢迎来到Crawl4AI v0.7.3！此版本带来了强大的新功能，包括隐形爬行、智能 URL 配置、内存优化和增强的数据提取。无论您是处理受机器人保护的网站、混合内容类型还是大规模爬网操作，此更新都能满足您的需求。

## 💖 GitHub 赞助商现已上线！

在为 **51,000 多名开发者**提供支持并成为 **#1 趋势网络爬虫**之后，我们推出 GitHub 赞助商，以确保 Crawl4AI 永远保持独立和创新。

### 🏆 成为创始赞助商（仅限前 50 名！）

- **🌱 Believer ($5/mo)**: Join the movement + sponsors-only Discord
- **🚀 Builder ($50/mo)**: Priority support + early feature access  
- **💼 Growing Team ($500/mo)**: Bi-weekly syncs + optimization help
- **🏢 数据基础设施合作伙伴（2000 美元/月）**：全面合作 + 专门支持

**为什么赞助？** 拥有您的数据管道。无 API 限制。直接访问创建者。

[**成为赞助商→**](https://github.com/sponsors/unclecode) | [查看好处](https://github.com/unclecode/crawl4ai/blob/main/SPONSORS.md)

---

## 🎯 主要特点

### 🕵️ 未检测到的浏览器支持
利用我们新的隐形功能突破复杂的机器人检测系统：

```python
from crawl4ai import AsyncWebCrawler, BrowserConfig

# Enable stealth mode for undetectable crawling
browser_config = BrowserConfig(
    browser_type="undetected",  # Use undetected Chrome
    headless=True,              # Can run headless with stealth
    extra_args=[
        "--disable-blink-features=AutomationControlled",
        "--disable-web-security"
    ]
)

async with AsyncWebCrawler(config=browser_config) as crawler:
    # Successfully bypass Cloudflare, Akamai, and custom bot detection
    result = await crawler.arun("https://protected-site.com")
    print(f"✅ Bypassed protection! Content: {len(result.markdown)} chars")
```

**它能实现什么：**
- 访问以前被阻止的公司网站和数据库
- 从受保护的来源收集竞争对手数据  
- Monitor pricing on e-commerce sites with anti-bot measures
- 尽管有保护系统，仍收集新闻和社交媒体内容

### 🎨 多 URL 配置系统
Apply different crawling strategies to different URL patterns automatically:

```python
from crawl4ai import CrawlerRunConfig

# Define specialized configs for different content types
configs = [
    # Documentation sites - aggressive caching, include links
    CrawlerRunConfig(
        url_matcher=["*docs*", "*documentation*"],
        cache_mode="write",
        markdown_generator_options={"include_links": True}
    ),
    
    # News/blog sites - fresh content, scroll for lazy loading
    CrawlerRunConfig(
        url_matcher=lambda url: 'blog' in url or 'news' in url,
        cache_mode="bypass",
        js_code="window.scrollTo(0, document.body.scrollHeight/2);"
    ),
    
    # API endpoints - structured extraction
    CrawlerRunConfig(
        url_matcher=["*.json", "*api*"],
        extraction_strategy=LLMExtractionStrategy(
            provider="openai/gpt-4o-mini",
            extraction_type="structured"
        )
    ),
    
    # Default fallback for everything else
    CrawlerRunConfig()
]

# Crawl multiple URLs with perfect configurations
results = await crawler.arun_many([
    "https://docs.python.org/3/",      # → Uses documentation config
    "https://blog.python.org/",        # → Uses blog config  
    "https://api.github.com/users",    # → Uses API config
    "https://example.com/"             # → Uses default config
], config=configs)
```

**适合：**
- 混合内容网站（博客、文档、下载）
- 多域爬行，每个域有不同的需求
- 消除提取代码中复杂的条件逻辑
- Optimizing performance by giving each URL exactly what it needs

### 🧠 内存监控和优化
跟踪和优化大规模操作期间的内存使用情况：

```python
from crawl4ai.memory_utils import MemoryMonitor

# Monitor memory during crawling
monitor = MemoryMonitor()
monitor.start_monitoring()

# Perform memory-intensive operations
results = await crawler.arun_many([
    "https://heavy-js-site.com",
    "https://large-images-site.com", 
    "https://dynamic-content-site.com"
] * 100)  # Large batch

# Get detailed memory report
report = monitor.get_report()
print(f"Peak memory usage: {report['peak_mb']:.1f} MB")
print(f"Memory efficiency: {report['efficiency']:.1f}%")

# Automatic optimization suggestions
if report['peak_mb'] > 1000:  # > 1GB
    print("💡 Consider batch size optimization")
    print("💡 Enable aggressive garbage collection")
```

**好处：**
- Prevent memory-related crashes in production services
- Right-size server resources based on actual usage patterns
- Identify bottlenecks for performance optimization
- 根据内存需求规划水平扩展

### 📊 增强的表提取
从 Web 表直接转换 pandas DataFrame：

```python
result = await crawler.arun("https://site-with-tables.com")

# New streamlined approach
if result.tables:
    print(f"Found {len(result.tables)} tables")
    
    import pandas as pd
    for i, table in enumerate(result.tables):
        # Instant DataFrame conversion
        df = pd.DataFrame(table['data'])
        print(f"Table {i}: {df.shape[0]} rows × {df.shape[1]} columns")
        print(df.head())
        
        # Rich metadata available
        print(f"Source: {table.get('source_xpath', 'Unknown')}")
        print(f"Headers: {table.get('headers', [])}")

# Old way (now deprecated)
# tables_data = result.media.get('tables', [])  # ❌ Don't use this
```

**改进：**
- 从网络数据到分析就绪的数据框架的更快转换
- 与数据处理管道更清晰的集成  
- 简化表格提取以实现自动报告
- 更好的表结构保存

### 🐳 Docker LLM 提供者的灵活性
在 LLM 提供商之间切换而无需重建镜像：

```bash
# Option 1: Direct environment variables
docker run -d \
  -e LLM_PROVIDER="groq/llama-3.2-3b-preview" \
  -e GROQ_API_KEY="your-key" \
  -p 11235:11235 \
  unclecode/crawl4ai:0.7.3

# Option 2: Using .llm.env file (recommended for production)
docker run -d \
  --env-file .llm.env \
  -p 11235:11235 \
  unclecode/crawl4ai:0.7.3
```

创建 `.llm.env` 文件：
```bash
LLM_PROVIDER=openai/gpt-4o-mini
OPENAI_API_KEY=your-openai-key
GROQ_API_KEY=your-groq-key
```

需要时覆盖每个请求：
```python
# Use cheaper models for simple tasks, premium for complex ones
response = requests.post("http://localhost:11235/crawl", json={
    "url": "https://complex-page.com",
    "extraction_strategy": {
        "type": "llm",
        "provider": "openai/gpt-4"  # Override default
    }
})
```

## 🔧 错误修复和改进

- **URL Matcher Fallback**：解决了模式匹配逻辑中的边缘情况
- **内存管理**：修复了长时间运行会话中的内存泄漏
- **站点地图处理**：改进了站点地图获取中的重定向处理
- **表提取**：增强检测和提取精度  
- **错误处理**：更好的消息和从网络故障中恢复

## 📚 文档和架构

- **架构重构**：移动了 2,450 多行以进行备份，以实现更清晰的代码库
- **真实世界示例**：添加了具有实际 URL 的实际用例
- **迁移指南**：从 `result.media` 到 `result.tables` 的完整过渡
- **综合指南**：未检测到的浏览器和多配置的完整文档

## 📦 安装和升级

### PyPI 安装
```bash
# Fresh install
pip install crawl4ai==0.7.3

# Upgrade from previous version
pip install --upgrade crawl4ai==0.7.3
```

### Docker 图像
```bash
# Specific version
docker pull unclecode/crawl4ai:0.7.3

# Latest (points to 0.7.3)
docker pull unclecode/crawl4ai:latest

# Version aliases
docker pull unclecode/crawl4ai:0.7    # Minor version
docker pull unclecode/crawl4ai:0      # Major version
```

### 迁移注意事项
- `result.tables` 取代 `result.media.get('tables')` 
- 未检测到的浏览器需要 `browser_type="undetected"`
- 多重配置在`CrawlerRunConfig`中使用`url_matcher`参数

## 🎉 接下来是什么？

此版本为 v0.8 中的更高级功能奠定了基础：
- 人工智能驱动的内容理解
- 高级抓取策略  
- 增强的数据管道集成
- 更强的隐身和反探测能力

## 📝 完整的文档

- **[完整 Release Note](https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.7.3.md)** - 详细的技术说明
- **[Changelog](https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md)** - 完整的变更列表
- **[文档](https://docs.crawl4ai.com)** - 完整的 API 参考和指南
- **[Discord 社区](https://discord.gg/crawl4ai)** - 获取帮助并分享经验

---

**万岁和`import crawl4ai`**

*Crawl4AI 会根据您的需求不断发展。此版本使其更隐秘、更智能且更具可扩展性。尝试新的未检测到的浏览器和多配置功能 - 它们是游戏规则的改变者！*

*- Crawl4AI 团队*

---

*📝 此发布草案由人类撰写和编辑，但由人工智能重写和最终确定。如果您发现任何错误，请[提出问题](https://github.com/unclecode/crawl4ai/issues)。*

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.3` · 📅 发布：2025-08-09 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
