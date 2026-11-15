---
title: "crawl4ai v0.7.0"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.0"
version: "v0.7.0"
published: "2025-07-12"
type: "minor"
lang: "zh"
---

# crawl4ai v0.7.0

# 🚀 Crawl4AI v0.7.0：自适应智能更新

*2025 年 1 月 28 日 • 阅读时间 10 分钟*

---

今天我发布了 Crawl4AI v0.7.0——自适应智能更新。此版本对 Crawl4AI 通过自适应学习、智能内容发现和高级提取功能处理现代 Web 复杂性的方式进行了根本性改进。

## 🎯 新功能一览

- **自适应抓取**：您的抓取工具现在可以学习并适应网站模式
- **虚拟滚动支持**：从无限滚动页面中完整提取内容
- **具有 3 层评分的链接预览**：智能链接分析和优先级排序
- **异步 URL Seeder**：通过智能过滤在几秒钟内发现数千个 URL
- **PDF解析**：从PDF文档中提取数据
- **性能优化**：显着的速度和内存改进

## 🧠 自适应爬行：通过模式学习实现智能

**问题：** 网站发生变化。类名发生变化。身份证消失。你精心设计的选择器会在凌晨 3 点中断，你醒来时会看到空的数据集和愤怒的利益相关者。

**我的解决方案：** 我实现了一个自适应学习系统，该系统可以观察模式、建立置信度分数并动态调整提取策略。这就像一个初级开发人员随着他们抓取的每一个页面而使他们的工作变得更好。

### 技术深入探讨

自适应爬虫为每个域维护持久状态，跟踪：
- 模式成功率
- 选择器随时间的稳定性  
- 内容结构变化
- 提取置信度分数

```python
from crawl4ai import AdaptiveCrawler, AdaptiveConfig, CrawlState

# Initialize with custom learning parameters
config = AdaptiveConfig(
    confidence_threshold=0.7,    # Min confidence to use learned patterns
    max_history=100,            # Remember last 100 crawls per domain
    learning_rate=0.2,          # How quickly to adapt to changes
    patterns_per_page=3,        # Patterns to learn per page type
    extraction_strategy='css'   # 'css' or 'xpath'
)

adaptive_crawler = AdaptiveCrawler(config)

# First crawl - crawler learns the structure
async with AsyncWebCrawler() as crawler:
    result = await crawler.arun(
        "https://news.example.com/article/12345",
        config=CrawlerRunConfig(
            adaptive_config=config,
            extraction_hints={  # Optional hints to speed up learning
                "title": "article h1",
                "content": "article .body-content"
            }
        )
    )
    
    # Crawler identifies and stores patterns
    if result.success:
        state = adaptive_crawler.get_state("news.example.com")
        print(f"Learned {len(state.patterns)} patterns")
        print(f"Confidence: {state.avg_confidence:.2%}")

# Subsequent crawls - uses learned patterns
result2 = await crawler.arun(
    "https://news.example.com/article/67890",
    config=CrawlerRunConfig(adaptive_config=config)
)
# Automatically extracts using learned patterns!
```

**预期的现实世界影响：**
- **新闻聚合**：即使新闻网站更新其模板，也能保持 95% 以上的提取准确性
- **电子商务监控**：跟踪数百家商店的产品变化，无需持续维护
- **研究数据收集**：构建强大的学术数据集，以适应网站重新设计
- **减少维护**：将频繁更改的站点的选择器更新时间缩短 80%

## 🌊 虚拟滚动：完整的内容捕获

**问题：** 现代网络应用程序仅渲染可见内容。向下滚动，新内容出现，旧内容消失在虚空中。传统的爬虫会捕获第一个视口并错过 90% 的内容。这就像只阅读每本书的第一页。

**我的解决方案：** 我构建了模拟人类浏览行为的虚拟滚动支持，在加载内容时捕获内容并在浏览器的垃圾收集器启动之前保存它。

### 实施细节

```python
from crawl4ai import VirtualScrollConfig

# For social media feeds (Twitter/X style)
twitter_config = VirtualScrollConfig(
    container_selector="[data-testid='primaryColumn']",
    scroll_count=20,                    # Number of scrolls
    scroll_by="container_height",       # Smart scrolling by container size
    wait_after_scroll=1.0,             # Let content load
    capture_method="incremental",       # Capture new content on each scroll
    deduplicate=True                   # Remove duplicate elements
)

# For e-commerce product grids (Instagram style)
grid_config = VirtualScrollConfig(
    container_selector="main .product-grid",
    scroll_count=30,
    scroll_by=800,                     # Fixed pixel scrolling
    wait_after_scroll=1.5,             # Images need time
    stop_on_no_change=True            # Smart stopping
)

# For news feeds with lazy loading
news_config = VirtualScrollConfig(
    container_selector=".article-feed",
    scroll_count=50,
    scroll_by="page_height",           # Viewport-based scrolling
    wait_after_scroll=0.5,
    wait_for_selector=".article-card",  # Wait for specific elements
    timeout=30000                      # Max 30 seconds total
)

# Use it in your crawl
async with AsyncWebCrawler() as crawler:
    result = await crawler.arun(
        "https://twitter.com/trending",
        config=CrawlerRunConfig(
            virtual_scroll_config=twitter_config,
            # Combine with other features
            extraction_strategy=JsonCssExtractionStrategy({
                "tweets": {
                    "selector": "[data-testid='tweet']",
                    "fields": {
                        "text": {"selector": "[data-testid='tweetText']", "type": "text"},
                        "likes": {"selector": "[data-testid='like']", "type": "text"}
                    }
                }
            })
        )
    )
    
    print(f"Captured {len(result.extracted_content['tweets'])} tweets")
```

**关键能力：**
- **DOM Recycling 感知**：检测并处理虚拟 DOM 元素 recycling
- **智能滚动物理**：三种模式 - 容器高度、页面高度或固定像素
- **内容保存**：在内容被销毁之前捕获内容
- **智能停止**：没有新内容出现时停止
- **内存效率**：流式传输内容而不是将所有内容保存在内存中

**预期的现实世界影响：**
- **社交媒体分析**：捕获包含数百条回复的整个 Twitter 帖子，而不仅仅是前 10 条
- **电子商务 Scraping**：从无限滚动目录中提取 500 多种产品，而传统方法则为 20-50 种  
- **新闻聚合**：从现代新闻网站获取所有文章，而不仅仅是首屏内容
- **研究应用**：使用虚拟分页从学术数据库中完整提取数据
## 🔗 链接预览：智能链接分析和评分

**问题：** 您抓取一个页面并获得 200 个链接。哪些重要？哪个导致您真正想要的内容？传统的爬虫迫使您遵循一切或构建复杂的过滤器。

**我的解决方案：** 我实施了一个三层评分系统，可以像人类一样分析链接 - 考虑它们的位置、上下文以及与您的目标的相关性。

### 三层评分系统

```python
from crawl4ai import LinkPreviewConfig

# Configure intelligent link analysis
link_config = LinkPreviewConfig(
    # What to analyze
    include_internal=True,
    include_external=True,
    max_links=100,              # Analyze top 100 links
    
    # Relevance scoring
    query="machine learning tutorials",  # Your interest
    score_threshold=0.3,        # Minimum relevance score
    
    # Performance
    concurrent_requests=10,     # Parallel processing
    timeout_per_link=5000,      # 5s per link
    
    # Advanced scoring weights
    scoring_weights={
        "intrinsic": 0.3,       # Link quality indicators
        "contextual": 0.5,      # Relevance to query
        "popularity": 0.2       # Link prominence
    }
)

# Use in your crawl
result = await crawler.arun(
    "https://tech-blog.example.com",
    config=CrawlerRunConfig(
        link_preview_config=link_config,
        score_links=True
    )
)

# Access scored and sorted links
for link in result.links["internal"][:10]:  # Top 10 internal links
    print(f"Score: {link['total_score']:.3f}")
    print(f"  Intrinsic: {link['intrinsic_score']:.1f}/10")  # Position, attributes
    print(f"  Contextual: {link['contextual_score']:.1f}/1")  # Relevance to query
    print(f"  URL: {link['href']}")
    print(f"  Title: {link['head_data']['title']}")
    print(f"  Description: {link['head_data']['meta']['description'][:100]}...")
```

**评分要素：**

1. **内在分数（0-10）**：基于链接质量指标
   - 页面位置（导航、内容、页脚）
   - 链接属性（rel、标题、类名）
   - 锚文本质量和长度
   - URL结构和深度

2. **上下文得分 (0-1)**：与您的查询的相关性
   - 使用嵌入的语义相似性
   - 链接文本和标题中的关键字匹配
   - 元描述分析
   - 内容预览评分

3. **总分**：最终排名的加权组合

**预期的现实世界影响：**
- **研究效率**：仅通过高分链接查找相关论文的速度提高 10 倍
- **竞争分析**：自动识别竞争对手网站上的重要页面
- **内容发现**：构建以主题为中心的爬虫，使其保持在正轨上
- **SEO 审核**：识别并优先考虑高价值的内部链接机会

## 🎣 异步 URL Seeder：大规模自动 URL 发现

**问题：** 您想要抓取整个域，但只有主页。或者更糟糕的是，您需要跨数千个页面的特定内容类型。手动 URL 发现？这是机器的工作，而不是人类的工作。

**我的解决方案：** 我构建了 Async URL Seeder——一个涡轮增压的 URL 发现引擎，它将多个源与智能过滤和相关性评分相结合。

### 技术架构

```python
from crawl4ai import AsyncUrlSeeder, SeedingConfig

# Basic discovery - find all product pages
seeder_config = SeedingConfig(
    # Discovery sources
    source="sitemap+cc",        # Sitemap + Common Crawl
    
    # Filtering
    pattern="*/product/*",      # URL pattern matching
    ignore_patterns=["*/reviews/*", "*/questions/*"],
    
    # Validation
    live_check=True,           # Verify URLs are alive
    max_urls=5000,             # Stop at 5000 URLs
    
    # Performance  
    concurrency=100,           # Parallel requests
    hits_per_sec=10           # Rate limiting
)

seeder = AsyncUrlSeeder(seeder_config)
urls = await seeder.discover("https://shop.example.com")

# Advanced: Relevance-based discovery
research_config = SeedingConfig(
    source="crawl+sitemap",    # Deep crawl + sitemap
    pattern="*/blog/*",        # Blog posts only
    
    # Content relevance
    extract_head=True,         # Get meta tags
    query="quantum computing tutorials",
    scoring_method="bm25",     # Or "semantic" (coming soon)
    score_threshold=0.4,       # High relevance only
    
    # Smart filtering
    filter_nonsense_urls=True,  # Remove .xml, .txt, etc.
    min_content_length=500,     # Skip thin content
    
    force=True                 # Bypass cache
)

# Discover with progress tracking
discovered = []
async for batch in seeder.discover_iter("https://physics-blog.com", research_config):
    discovered.extend(batch)
    print(f"Found {len(discovered)} relevant URLs so far...")

# Results include scores and metadata
for url_data in discovered[:5]:
    print(f"URL: {url_data['url']}")
    print(f"Score: {url_data['score']:.3f}")
    print(f"Title: {url_data['title']}")
```

**发现方法：**
- **站点地图挖掘**：解析 robots.txt 和所有链接的站点地图
- **Common Crawl**：查询历史URL的Common Crawl索引
- **智能爬行**：通过智能深度控制跟踪链接
- **模式分析**：学习 URL 结构并生成变体

**预期的现实世界影响：**
- **迁移项目**：在 60 秒内从旧站点发现 10,000 多个 URL
- **市场研究**：自动绘制整个竞争对手的生态系统
- **学术研究**：无需手动收集 URL 即可构建全面的数据集
- **SEO 审核**：查找每个可索引页面的内容评分
- **内容存档**：确保站点迁移期间不会留下任何内容

## ⚡ 性能优化

此版本通过优化资源处理、更好的并发管理和减少内存占用，显着提高了性能。

### 我们优化了什么

```python
# Before v0.7.0 (slow)
results = []
for url in urls:
    result = await crawler.arun(url)
    results.append(result)

# After v0.7.0 (fast)
# Automatic batching and connection pooling
results = await crawler.arun_batch(
    urls,
    config=CrawlerRunConfig(
        # New performance options
        batch_size=10,              # Process 10 URLs concurrently
        reuse_browser=True,         # Keep browser warm
        eager_loading=False,        # Load only what's needed
        streaming_extraction=True,  # Stream large extractions
        
        # Optimized defaults
        wait_until="domcontentloaded",  # Faster than networkidle
        exclude_external_resources=True, # Skip third-party assets
        block_ads=True                  # Ad blocking built-in
    )
)

# Memory-efficient streaming for large crawls
async for result in crawler.arun_stream(large_url_list):
    # Process results as they complete
    await process_result(result)
    # Memory is freed after each iteration
```

**性能提升：**
- **启动时间**：浏览器初始化速度加快 70%
- **页面加载**：通过智能资源阻止减少 40%
- **提取**：使用编译的 CSS 选择器速度提高 3 倍
- **内存使用**：通过流处理减少 60%
- **并发抓取**：处理 5 倍以上的并行请求

## 📄 PDF 支持

Crawl4AI 现在原生支持 PDF 提取。

```python
# Extract data from PDF documents
result = await crawler.arun(
    "https://example.com/report.pdf",
    config=CrawlerRunConfig(
        pdf_extraction=True,
        extraction_strategy=JsonCssExtractionStrategy({
            # Works on converted PDF structure
            "title": {"selector": "h1", "type": "text"},
            "sections": {"selector": "h2", "type": "list"}
        })
    )
)
```

## 🔧 重要变化

### 重大变化
- `link_extractor` 重命名为 `link_preview`（更好地体现功能）
- 最低 Python 版本现在为 3.9
- `CrawlerConfig`分为`CrawlerRunConfig`和`BrowserConfig`

### 迁移指南
```python
# Old (v0.6.x)
from crawl4ai import CrawlerConfig
config = CrawlerConfig(timeout=30000)

# New (v0.7.0)
from crawl4ai import CrawlerRunConfig, BrowserConfig
browser_config = BrowserConfig(timeout=30000)
run_config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS)
```
## 🤖 即将推出：智能 Web 自动化

我目前正在致力于为 Crawl4AI 引入先进的自动化功能。这包括：

- **爬网代理**：自主爬网程序，了解您的目标并调整其策略
- **自动 JS 生成**：自动生成复杂交互的 JavaScript 代码
- **智能表单处理**：智能表单检测和填写
- **上下文感知操作**：理解页面上下文并做出决策的爬虫

这些功能正在积极开发中，将彻底改变我们实现网络自动化的方式。敬请关注！

## 🚀 开始吧

```bash
pip install crawl4ai==0.7.0
```

查看[更新的文档](https://docs.crawl4ai.com)。

问题？问题？我总是在听：
- GitHub：[github.com/unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)
- 不和谐：[discord.gg/crawl4ai](https://discord.gg/jP8KfhDhyN)
- Twitter：[@unclecode](https://x.com/unclecode)

快乐爬行！ 🕷️

---

*附注如果您在生产中使用 Crawl4AI，我很想听听。您的用例激发了下一个功能。*

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.0` · 📅 发布：2025-07-12 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
