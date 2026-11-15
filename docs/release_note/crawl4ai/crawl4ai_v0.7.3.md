---
title: "crawl4ai v0.7.3"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.3"
version: "v0.7.3"
published: "2025-08-09"
type: "patch"
lang: "en"
summary: "Welcome to Crawl4AI v0.7.3! This release brings powerful new capabilities for stealth crawling, intelligent URL configuration, memory optimization, and enhanced data extraction."
---

# crawl4ai v0.7.3

# 🚀 Crawl4AI v0.7.3: The Multi-Config Intelligence Update

Welcome to Crawl4AI v0.7.3! This release brings powerful new capabilities for stealth crawling, intelligent URL configuration, memory optimization, and enhanced data extraction. Whether you're dealing with bot-protected sites, mixed content types, or large-scale crawling operations, this update has you covered.

## 💖 GitHub Sponsors Now Live!

After powering **51,000+ developers** and becoming the **#1 trending web crawler**, we're launching GitHub Sponsors to ensure Crawl4AI stays independent and innovative forever.

### 🏆 Be a Founding Sponsor (First 50 Only!)

- **🌱 Believer ($5/mo)**: Join the movement + sponsors-only Discord
- **🚀 Builder ($50/mo)**: Priority support + early feature access  
- **💼 Growing Team ($500/mo)**: Bi-weekly syncs + optimization help
- **🏢 Data Infrastructure Partner ($2000/mo)**: Full partnership + dedicated support

**Why sponsor?** Own your data pipeline. No API limits. Direct access to the creator.

[**Become a Sponsor →**](https://github.com/sponsors/unclecode) | [See Benefits](https://github.com/unclecode/crawl4ai/blob/main/SPONSORS.md)

---

## 🎯 Major Features

### 🕵️ Undetected Browser Support
Break through sophisticated bot detection systems with our new stealth capabilities:

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

**What it enables:**
- Access previously blocked corporate sites and databases
- Gather competitor data from protected sources  
- Monitor pricing on e-commerce sites with anti-bot measures
- Collect news and social media content despite protection systems

### 🎨 Multi-URL Configuration System
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

**Perfect for:**
- Mixed content sites (blogs, docs, downloads)
- Multi-domain crawling with different needs per domain
- Eliminating complex conditional logic in extraction code
- Optimizing performance by giving each URL exactly what it needs

### 🧠 Memory Monitoring & Optimization
Track and optimize memory usage during large-scale operations:

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

**Benefits:**
- Prevent memory-related crashes in production services
- Right-size server resources based on actual usage patterns
- Identify bottlenecks for performance optimization
- Plan horizontal scaling based on memory requirements

### 📊 Enhanced Table Extraction
Direct pandas DataFrame conversion from web tables:

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

**Improvements:**
- Faster transition from web data to analysis-ready DataFrames
- Cleaner integration with data processing pipelines  
- Simplified table extraction for automated reporting
- Better table structure preservation

### 🐳 Docker LLM Provider Flexibility
Switch between LLM providers without rebuilding images:

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

Create `.llm.env` file:
```bash
LLM_PROVIDER=openai/gpt-4o-mini
OPENAI_API_KEY=your-openai-key
GROQ_API_KEY=your-groq-key
```

Override per request when needed:
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

## 🔧 Bug Fixes & Improvements

- **URL Matcher Fallback**: Resolved edge cases in pattern matching logic
- **Memory Management**: Fixed memory leaks in long-running sessions
- **Sitemap Processing**: Improved redirect handling in sitemap fetching
- **Table Extraction**: Enhanced detection and extraction accuracy  
- **Error Handling**: Better messages and recovery from network failures

## 📚 Documentation & Architecture

- **Architecture Refactoring**: Moved 2,450+ lines to backup for cleaner codebase
- **Real-World Examples**: Added practical use cases with actual URLs
- **Migration Guides**: Complete transition from `result.media` to `result.tables`
- **Comprehensive Guides**: Full documentation for undetected browsers and multi-config

## 📦 Installation & Upgrade

### PyPI Installation
```bash
# Fresh install
pip install crawl4ai==0.7.3

# Upgrade from previous version
pip install --upgrade crawl4ai==0.7.3
```

### Docker Images
```bash
# Specific version
docker pull unclecode/crawl4ai:0.7.3

# Latest (points to 0.7.3)
docker pull unclecode/crawl4ai:latest

# Version aliases
docker pull unclecode/crawl4ai:0.7    # Minor version
docker pull unclecode/crawl4ai:0      # Major version
```

### Migration Notes
- `result.tables` replaces `result.media.get('tables')` 
- Undetected browser requires `browser_type="undetected"`
- Multi-config uses `url_matcher` parameter in `CrawlerRunConfig`

## 🎉 What's Next?

This release sets the foundation for even more advanced features coming in v0.8:
- AI-powered content understanding
- Advanced crawling strategies  
- Enhanced data pipeline integrations
- More stealth and anti-detection capabilities

## 📝 Complete Documentation

- **[Full Release Notes](https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.7.3.md)** - Detailed technical explanations
- **[Changelog](https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md)** - Complete list of changes
- **[Documentation](https://docs.crawl4ai.com)** - Full API reference and guides
- **[Discord Community](https://discord.gg/crawl4ai)** - Get help and share experiences

---

**Live Long and `import crawl4ai`**

*Crawl4AI continues to evolve with your needs. This release makes it stealthier, smarter, and more scalable. Try the new undetected browser and multi-config features—they're game changers!*

*- The Crawl4AI Team*

---

*📝 This release draft was composed and edited by human but rewritten and finalized by AI. If you notice any mistakes, please [raise an issue](https://github.com/unclecode/crawl4ai/issues).*

---

> **Source** [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · `v0.7.3` · 2025-08-09 · [upstream release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
