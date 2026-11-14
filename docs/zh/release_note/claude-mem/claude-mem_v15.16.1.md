---
title: "claude-mem v15.16.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.16.1"
version: "v15.16.1"
published: "2026-11-11"
type: "patch"
lang: "zh"
---

# claude-mem v15.16.1

## 关键修复

- **手动在具有旧手动会话的项目中再次保存工作。** 在 v15.16.0 中，`save_memory`（和 `POST /api/memory/save`）在手动会话是在 15.16.0 之前使用旧会话 ID 形状创建的任何项目中返回 HTTP 500 和 `UNIQUE constraint failed: sdk_sessions.memory_session_id`。该项目中的每次保存都失败。 claude-mem 现在查找并重用旧会话，而不是尝试创建副本。已删除的会话仍会获得新的 ID，如 15.16.0 (#5842) 中所示。

如果您使用的是 15.16.0，请更新到 15.16.1。

## 新（默认情况下均关闭）

- **选择退出捆绑技能：** 在 `~/.claude-mem/settings.json` 中列出 `CLAUDE_MEM_SKILLS_DISABLED` 中的技能名称，以逗号分隔的字符串或 JSON 数组（例如 `"make-plan,do,smart-explore"`）。该列表在安装、维修和市场更新后重新应用；新技能将保持启用状态，除非您命名它们（#5837，感谢@liuyinchu，关闭#5132）。
- **文件上下文中的行锚点：**将 `CLAUDE_MEM_LINE_ANCHORS_ENABLED` 设置为 `"true"` 以及过去对文件点的观察结果位于该代码现在所在的行 (`@L123`)，或者在它移开时说 `(code changed since)`。没什么可猜测的。设置关闭后，不会记录任何内容，并且钩子输出也不会改变（#5841，感谢@devkancheti4-design，关闭#4943）。

## 修复

- **OpenClaw：**安装程序再次在 OpenClaw 2026.11.2 上运行，当前的 OpenClaw 会记录提示、注入上下文并总结会话，而无需删除 `before_agent_start` 挂钩。旧版 OpenClaw 的行为与以前一样（#5840，修复#5838，由 @JesseFranzen 报告）。
- **Warp卸载：** `npx claude-mem uninstall`现在删除`install --ide warp`添加到`~/.warp/.mcp.json`的`claude-mem` MCP服务器，而不是让它指向已删除的插件（#5839，感谢@tanishqbaweja）。
- **遥测 ID：** 记录同意决定（安装程序提示、`telemetry enable`、`telemetry disable`）会保留保存的匿名 ID，因此一次安装不再显示为两次。 `telemetry enable` 披露现在列出了实际发送的事件（#5836，感谢 @wiesenthal）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.16.0...v15.16.1

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.16.1` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.16.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
