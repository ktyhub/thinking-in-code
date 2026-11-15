---
title: "crawl4ai v0.7.5"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.5"
version: "v0.7.5"
published: "2025-10-21"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.5

# 🚀 Crawl4AI v0.7.5：Docker 挂钩和安全更新

## 🎯 新消息

### 🔧 Docker 挂钩系统
在 8 个关键管道点注入自定义 Python 函数，以进行身份验证、性能优化和内容处理。

**基于函数的 API**，具有 IDE 支持：
```python
from crawl4ai import hooks_to_string

async def on_page_context_created(page, context, **kwargs):
    """Block images to speed up crawling"""
    await context.route("**/*.{png,jpg,jpeg,gif,webp}", lambda route: route.abort())
    return page

hooks_code = hooks_to_string({"on_page_context_created": on_page_context_created})
```

8 个可用的挂钩点： 
`on_browser_created`、`on_page_context_created`、`before_goto`、`after_goto`、`on_user_agent_updated`、`on_execution_started`、`before_retrieve_html`、`before_return_html`

🤖 增强法学硕士整合

- 自定义温度参数，实现创意控制
- 多提供商支持（OpenAI、Gemini、自定义端点）
- 自托管模型的base_url配置
- 改进了 Docker API 集成

🔒 HTTPS 保存

新的 `preserve_https_for_internal_links` 选项在整个爬行过程中维护安全协议 - 对于经过身份验证的会话和安全意识应用程序至关重要。

🛠️ 主要错误修复

- URL 处理：修复了查询参数中的“+”号保留问题 (#1332)
- JWT 身份验证：解决了 Docker JWT 验证问题 (#1442)
- 剧作家潜行：修复了潜行功能集成（#1481）
- 代理配置：使用新的 proxy_config 结构增强解析
- 内存管理：修复了长时间运行会话中的泄漏
- Docker 序列化：解决了 JSON 编码错误 (#1419)
- LLM 提供商：修复了自适应爬虫的自定义提供商集成（#1291）
- 性能：解决了退避策略失败问题（#989）

---
📦 安装

皮伊：
pip installcrawl4ai==0.7.5

Docker：
docker拉unclecode/crawl4ai:0.7.5
docker拉unclecode/crawl4ai:最新

支持的平台：Linux/AMD64、Linux/ARM64（Apple Silicon、AWS Graviton）

---
⚠️ 重大变化

1. Python 3.10+ 必选（3.9升级）
2. 不推荐使用代理参数 - 使用新的 proxy_config 结构
3. 新的依赖项 - 添加了 cssselect 以实现更好的 CSS 处理

---
📚 资源

- 📖 完整 Release Note：https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.7.5.md
- 📘 文档：https://docs.crawl4ai.com
- 💬 不和谐社区：https://discord.gg/jP8KfhDhyN
- 🐛 问题：https://github.com/unclecode/crawl4ai/issues

---
🙏 贡献者

感谢所有报告问题、提供反馈并为此版本做出贡献的人！

完整 Changelog: https://github.com/unclecode/crawl4ai/compare/v0.7.4...v0.7.5

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.5` · 📅 发布：2025-10-21 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
