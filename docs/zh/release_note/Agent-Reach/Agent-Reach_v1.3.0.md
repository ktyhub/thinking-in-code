---
title: "Agent-Reach v1.3.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.3.0"
version: "v1.3.0"
published: "2026-03-04"
type: "minor"
lang: "zh"
---

# Agent-Reach v1.3.0

## 🆕新功能

- **微信公众号渠道** — Agent Reach第13个渠道
  - 搜索：`miku_ai`（搜狗微信搜索）按关键词搜公众号文章
  - 阅读：`wechat-article-for-ai`（Camoufox 隐身浏览器）读取全文 Markdown
  - 安装：`pip install miku_ai camoufox[geoip] markdownify beautifulsoup4 httpx`

## 🐛 修复

- **Windows 中文系统医生崩溃** (#64) — `text=True` 在 GBK 系统解码 UTF-8 报错
- **Windows .cmd 文件缺少** (#64) — npm 全局安装的工具使用 `shutil.which()` 解析完整路径

## 📝 文档

- 澄清代理-到达没有读取/搜索命令（#58，#59）
- 修复小红书 SKILL.md 函数名 (#65)
- 新增 CONTRIBUTING.md (#62)
- 自述文件中文更新

## 更新命令

```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.3.0` · 📅 发布：2026-03-04 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
