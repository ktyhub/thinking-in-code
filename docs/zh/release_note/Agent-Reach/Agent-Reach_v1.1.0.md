---
title: "Agent-Reach v1.1.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.1.0"
version: "v1.1.0"
published: "2026-02-25"
type: "minor"
lang: "zh"
---

# Agent-Reach v1.1.0

## 🆕 新渠道/新增渠道

### 📷 Instagram
- 通过 [instaloader](https://github.com/instaloader/instaloader) 阅读公开帖子和个人资料 (⭐9.8K)
- 通过 Exa 搜索（免费，无 API 密钥）
- 私人内容的可选 cookie 登录

### 💼 领英
- 通过 [linkedin-scraper-mcp](https://github.com/stickerdaniel/linkedin-mcp-server) 阅读个人资料、公司页面和工作详细信息
- 通过 MCP 搜索人员和工作，并提供 Exa 后备
- 未配置 MCP 时回退到 Jina Reader

### 🏢 Boss直聘（BOSS直聘）
- 通过 [mcp-bosszp](https://github.com/mucsbr/mcp-bosszp) 二维码登录
- 通过 MCP 进行求职和招聘人员问候
- 回退到 Jina Reader 来阅读工作页面

## 📈 改进 / 改进
- 通道数：9 → **12**（12/12 通过 `agent-reach doctor`）
- CLI：添加了 `search-instagram`、`search-linkedin`、`search-bosszhipin` 子命令
- 更新了安装指南，其中包含新频道的设置说明
- 添加了`CHANGELOG.md`

## 📦 升级/升级
```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

**完整 Changelog**：https://github.com/Panniantong/Agent-Reach/compare/v1.0.0...v1.1.0

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.1.0` · 📅 发布：2026-02-25 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
