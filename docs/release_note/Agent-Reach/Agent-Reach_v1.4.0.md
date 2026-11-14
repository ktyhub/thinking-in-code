---
title: "Agent-Reach v1.4.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.0"
version: "v1.4.0"
published: "2026-03-31"
type: "minor"
lang: "en"
summary: "本版本对多个渠道的上游工具进行了大规模迁移，解决了已弃用工具、不稳定方案和部署门槛高的问题。"
---

# Agent-Reach v1.4.0

## 核心变更：6 大上游迁移

本版本对多个渠道的上游工具进行了大规模迁移，解决了已弃用工具、不稳定方案和部署门槛高的问题。

### 上游迁移

| 渠道 | 旧方案 | 新方案 | 效果 |
|------|--------|--------|------|
| **Twitter/X** | bird CLI（repo 已 404） | twitter-cli (2,137 ⭐) | 修复完全不可用的渠道 |
| **Reddit** | Exa crawling（经常超时） | rdt-cli (304 ⭐) | 搜索+全文+评论全通，无需登录 |
| **小红书** | Docker MCP（部署门槛高） | xhs-cli (1,477 ⭐) | `pipx install` 一行搞定，tier 2→1 |
| **微信公众号** | miku_ai（停更 20 个月） | Exa 搜索+阅读 | 零配置，tier 2→0 |
| **雪球 Cookie** | browser_cookie3（停更 15 月） | rookiepy (Rust 内核) | 更稳定，保留 fallback |
| **B站** | 纯 yt-dlp | yt-dlp + bili-cli (590 ⭐) | 增加热门/排行/搜索 |

### 渠道调整

- ➕ B站增加 bili-cli 增强后端
- ➖ 移除 Discord（仅元数据，不够实用）
- ➖ 移除头条（HTML 解析脆弱）

### 社区 PR 合并

- #225 fix(youtube): 跨平台 yt-dlp 配置路径 (@biyusku)
- #200 docs: 日文 README (@eltociear)
- #211 docs: 抖音/小红书可选 MCP 文档 (@JNHFlow21)

### 端到端验证

所有 16 个渠道经过真实网络测试：
- ✅ Reddit: `rdt search` 返回真实帖子+全部评论
- ✅ Twitter: `twitter search` 返回真实推文+互动数据
- ✅ B站: `bili hot` 返回热门视频+播放量
- ✅ 微信: Exa 搜索返回公众号文章+全文阅读
- ✅ 小红书: `xhs` CLI 安装正常，登录后可用
- ✅ 77 tests passing

### 升级方式

```bash
pip install --upgrade agent-reach
agent-reach doctor
```

**注意**：Twitter 用户需要重新安装工具：
```bash
pipx install twitter-cli
# bird CLI 已弃用，可卸载：npm uninstall -g @steipete/bird
```

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.4.0` · 2026-03-31 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
