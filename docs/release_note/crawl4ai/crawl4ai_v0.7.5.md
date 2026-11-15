---
title: "crawl4ai v0.7.5"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.5"
version: "v0.7.5"
published: "2025-10-21"
type: "patch"
lang: "en"
summary: "Inject custom Python functions at 8 key pipeline points for authentication, performance optimization, and content processing."
---

# crawl4ai v0.7.5

# 🚀 Crawl4AI v0.7.5: Docker Hooks & Security Update

## 🎯 What's New

### 🔧 Docker Hooks System
Inject custom Python functions at 8 key pipeline points for authentication, performance optimization, and content processing.

**Function-Based API** with IDE support:
```python
from crawl4ai import hooks_to_string

async def on_page_context_created(page, context, **kwargs):
    """Block images to speed up crawling"""
    await context.route("**/*.{png,jpg,jpeg,gif,webp}", lambda route: route.abort())
    return page

hooks_code = hooks_to_string({"on_page_context_created": on_page_context_created})
```

8 Available Hook Points: 
`on_browser_created`, `on_page_context_created`, `before_goto`, `after_goto`, `on_user_agent_updated`, `on_execution_started`, `before_retrieve_html`, `before_return_html`

🤖 Enhanced LLM Integration

- Custom temperature parameter for creativity control
- Multi-provider support (OpenAI, Gemini, custom endpoints)
- base_url configuration for self-hosted models
- Improved Docker API integration

🔒 HTTPS Preservation

New `preserve_https_for_internal_links` option maintains secure protocols throughout crawling — critical for authenticated sessions and security-conscious applications.

🛠️ Major Bug Fixes

- URL Processing: Fixed '+' sign preservation in query parameters (#1332)
- JWT Authentication: Resolved Docker JWT validation issues (#1442)
- Playwright Stealth: Fixed stealth features integration (#1481)
- Proxy Configuration: Enhanced parsing with new proxy_config structure
- Memory Management: Fixed leaks in long-running sessions
- Docker Serialization: Resolved JSON encoding errors (#1419)
- LLM Providers: Fixed custom provider integration for adaptive crawler (#1291)
- Performance: Resolved backoff strategy failures (#989)

---
📦 Installation

PyPI:
pip install crawl4ai==0.7.5

Docker:
docker pull unclecode/crawl4ai:0.7.5
docker pull unclecode/crawl4ai:latest

Platforms Supported: Linux/AMD64, Linux/ARM64 (Apple Silicon, AWS Graviton)

---
⚠️ Breaking Changes

1. Python 3.10+ Required (upgraded from 3.9)
2. Proxy Parameter Deprecated - Use new proxy_config structure
3. New Dependency - cssselect added for better CSS handling

---
📚 Resources

- 📖 Full Release Notes: https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.7.5.md
- 📘 Documentation: https://docs.crawl4ai.com
- 💬 Discord Community: https://discord.gg/jP8KfhDhyN
- 🐛 Issues: https://github.com/unclecode/crawl4ai/issues

---
🙏 Contributors

Thank you to everyone who reported issues, provided feedback, and contributed to this release!

Full Changelog: https://github.com/unclecode/crawl4ai/compare/v0.7.4...v0.7.5

---

> **Source** [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · `v0.7.5` · 2025-10-21 · [upstream release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
