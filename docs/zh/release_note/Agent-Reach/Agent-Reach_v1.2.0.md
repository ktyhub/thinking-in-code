---
title: "Agent-Reach v1.2.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.2.0"
version: "v1.2.0"
published: "2026-02-26"
type: "minor"
lang: "zh"
---

# Agent-Reach v1.2.0

## 🎉 v1.2.0

### ✨新增
- **抖音（Douyin）渠道** — 基于 [douyin-mcp-server](https://github.com/yzfly/douyin-mcp-server)，通过 mcporter 调用
  - 支持视频解析（分享链接→视频信息+下载URL）
  - 无需认证，安装即用
  - 与小红书MCP同架构，部署方式一致

### 🗑️ 移除
- **Instagram** — 上游工具不成熟，暂时移除

### 📝 文档改进
- Cookie-Editor统一为所有cookie平台的首选登录方式（#27）
- 更新 install.md / SKILL.md / README 文档

### 📊渠道状态
| 渠道 | 工具| 状态 |
|------|------|------|
|推特/X |鸟 CLI | ✅ |
|红迪网 |卷曲 + OAuth | ✅ |
| YouTube | yt-dlp | ✅ |
| GitHub | gh CLI | ✅ |
|哔哩哔哩 |卷曲 | ✅ |
| 小红书 |小红书-MCP | ✅ |
| **抖音** | **抖音-mcp-服务器** | **✅新增** |
|领英 | linkedin-scraper-mcp | ✅ |
|老板直聘| mcp-bosszp | ⚠️上游待修复 |
|网页 |吉娜读者| ✅ |
|埃克 | Exa MCP | ✅ |
| RSS | feedparser | ✅ |

### 安装/升级
```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.2.0` · 📅 发布：2026-02-26 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
