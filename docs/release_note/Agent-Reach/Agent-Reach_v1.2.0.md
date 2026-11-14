---
title: "Agent-Reach v1.2.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.2.0"
version: "v1.2.0"
published: "2026-02-26"
type: "minor"
lang: "en"
summary: "抖音（Douyin）渠道 — 基于 douyin-mcp-server，通过 mcporter 调用；支持视频解析（分享链接 → 视频信息 + 下载URL）；无需认证，安装即用；与小红书 MCP 同架构，部署方式一致"
---

# Agent-Reach v1.2.0

## 🎉 v1.2.0

### ✨ 新增
- **抖音（Douyin）渠道** — 基于 [douyin-mcp-server](https://github.com/yzfly/douyin-mcp-server)，通过 mcporter 调用
  - 支持视频解析（分享链接 → 视频信息 + 下载URL）
  - 无需认证，安装即用
  - 与小红书 MCP 同架构，部署方式一致

### 🗑️ 移除
- **Instagram** — 上游工具不成熟，暂时移除

### 📝 文档改进
- Cookie-Editor 统一为所有 cookie 平台的首选登录方式（#27）
- 更新 install.md / SKILL.md / README 文档

### 📊 渠道状态
| 渠道 | 工具 | 状态 |
|------|------|------|
| Twitter/X | bird CLI | ✅ |
| Reddit | curl + OAuth | ✅ |
| YouTube | yt-dlp | ✅ |
| GitHub | gh CLI | ✅ |
| Bilibili | curl | ✅ |
| 小红书 | xiaohongshu-mcp | ✅ |
| **抖音** | **douyin-mcp-server** | **✅ 新增** |
| LinkedIn | linkedin-scraper-mcp | ✅ |
| Boss直聘 | mcp-bosszp | ⚠️ 上游待修复 |
| Web | Jina Reader | ✅ |
| Exa | Exa MCP | ✅ |
| RSS | feedparser | ✅ |

### 安装/升级
```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.2.0` · 2026-02-26 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
