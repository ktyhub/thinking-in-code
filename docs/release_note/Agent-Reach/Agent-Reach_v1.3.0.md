---
title: "Agent-Reach v1.3.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.3.0"
version: "v1.3.0"
published: "2026-03-04"
type: "minor"
lang: "en"
summary: "微信公众号渠道 — Agent Reach 第 13 个渠道；搜索：miku_ai（搜狗微信搜索）按关键词搜公众号文章；阅读：wechat-article-for-ai（Camoufox 隐身浏览器）读取全文 Markdown；安装：pip install miku_ai camoufox[geoip] markdownify beautifulsoup4 httpx"
---

# Agent-Reach v1.3.0

## 🆕 新功能

- **微信公众号渠道** — Agent Reach 第 13 个渠道
  - 搜索：`miku_ai`（搜狗微信搜索）按关键词搜公众号文章
  - 阅读：`wechat-article-for-ai`（Camoufox 隐身浏览器）读取全文 Markdown
  - 安装：`pip install miku_ai camoufox[geoip] markdownify beautifulsoup4 httpx`

## 🐛 修复

- **Windows 中文系统 doctor 崩溃** (#64) — `text=True` 在 GBK 系统解码 UTF-8 报错
- **Windows .cmd 文件找不到** (#64) — npm 全局安装的工具用 `shutil.which()` 解析完整路径

## 📝 文档

- 澄清 agent-reach 没有 read/search 命令 (#58, #59)
- 修复小红书 SKILL.md 函数名 (#65)
- 新增 CONTRIBUTING.md (#62)
- README 中英文更新

## 更新命令

```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.3.0` · 2026-03-04 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
