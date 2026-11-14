---
title: "Agent-Reach v1.4.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.0"
version: "v1.4.0"
published: "2026-03-31"
type: "minor"
lang: "zh"
---

# Agent-Reach v1.4.0

## 核心变更：6大上游迁移

本版本对多个渠道的上游工具进行了大规模迁移，解决了已弃用工具、停用方案和部署渠道较高的问题。

### 上游迁移

| 渠道 | 旧方案 | 新方案 | 效果 |
|------|--------|--------|--------|
| **推特/X** |鸟 CLI（repo 已 404） | twitter-cli (2,137 ⭐) | 修复完全不可用的渠道 |
| **Reddit** | Exa爬行（经常超时） | rdt-cli (304 ⭐) | 搜索+全文+评论全通，消耗登录 |
| **小红书** | Docker MCP（部署高等教育） | xhs-cli (1,477 ⭐) | `pipx install` 一行搞定，tier 2→1 |
| **微信公众号** | miku_ai（停更20个月） | Exa 搜索+阅读 | 零配置，第 2 层→0 |
| **雪球饼干** | browser_cookie3（15月停更） | rookiepy (Rust 内核) | 更稳定，保留后备|
| **B站** | 纯yt-dlp | yt-dlp + bili-cli (590 ⭐) | 增加热门/排行/搜索 |

### 渠道调整

- ➕ B站增加 bili-cli 增强觉醒
- ➖ 删除Discord（仅元数据，不够实用）
- ➖ 移除头条（HTML 解析脆弱）

### 社区公关合并

- #225 修复(youtube): 跨平台 yt-dlp 配置路径 (@biyusku)
- #200 文档：日语自述文件 (@eltociear)
- #211 文档：抖音/小红书任选 MCP 文档 (@JNHFlow21)

### 纯度验证

所有16个渠道经过真实网络测试：
- ✅ Reddit: `rdt search` 返回真实帖子+全部评论
- ✅ Twitter: `twitter search` 返回真实推文+互动数据
- ✅ B站: `bili hot` 返回热门视频+播放量
- ✅ 微信：Exa 搜索返回公众号文章+全文阅读
- ✅小红书: `xhs` CLI 安装正常，登录后可用
- ✅ 通过 77 项测试

### 升级方式

```bash
pip install --upgrade agent-reach
agent-reach doctor
```

**注意**：Twitter用户需要重新安装工具：
```bash
pipx install twitter-cli
# bird CLI 已弃用，可卸载：npm uninstall -g @steipete/bird
```

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.4.0` · 📅 发布：2026-03-31 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
