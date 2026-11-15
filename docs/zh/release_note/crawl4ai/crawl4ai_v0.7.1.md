---
title: "crawl4ai v0.7.1"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.1"
version: "v0.7.1"
published: "2025-07-17"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.1

# 🛠️ Crawl4AI v0.7.1：小型清理更新

*2025 年 7 月 17 日 • 阅读 2 分钟*

---

一个小型维护版本，删除未使用的代码并改进文档。

## 🎯 发生了什么变化

- **从 `crawl4ai/browser_manager.py` 中删除了未使用的 StealthConfig**
- **更新了文档**，提供了更好的示例和参数解释
- **修复了文档中的虚拟滚动配置**示例

## 🧹 代码清理

删除了代码库中未使用的未使用的 `StealthConfig` 导入和配置。该项目通过 JavaScript 注入使用自己的自定义隐形实现。

```python
# Removed unused code:
from playwright_stealth import StealthConfig
stealth_config = StealthConfig(...)  # This was never used
```

## 📖 文档更新

- 修复自适应抓取参数示例
- 更新了会话管理文档
- 更正了虚拟滚动配置示例

## 🚀 安装

```bash
pip install crawl4ai==0.7.1
```

无重大变化 - 直接从 v0.7.0 升级。

 - -

问题？问题？ 
- GitHub：[github.com/unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)
- 不和谐：[discord.gg/crawl4ai](https://discord.gg/jP8KfhDhyN)

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.1` · 📅 发布：2025-07-17 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
