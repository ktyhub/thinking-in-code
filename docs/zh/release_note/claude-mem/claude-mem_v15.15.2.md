---
title: "claude-mem v15.15.2"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.15.2"
version: "v15.15.2"
published: "2026-11-10"
type: "patch"
lang: "zh"
---

# claude-mem v15.15.2

## 关键修复

- **从 14.x 升级后，反重力不再拒绝每个工具调用 (#5670)：** 从旧安装进行的就地升级在 `~/.gemini/config/hooks.json` 中留下了 `PreToolUse` 挂钩（和 `PreInvocation` 上下文挂钩）。 agy 在每次工具调用之前都会触发它，当前适配器没有做出任何决定，并且 agy 拒绝每次调用，直到您重新运行安装。现在，Antigravity 安装程序会找到这些过时的条目，并使用相同的合并安装执行将文件迁移到位。它仅在某些内容过时时才写入，从不抛出异常，并且不会影响损坏的文件。工作人员在启动和反重力挂钩调用时运行此治疗，因此更新就足够了。感谢 @jiezhiyong 的报告 (#5665) 和 @0xABCD01 的修复。

## 修复

- **Antigravity：**仅调用工具的模型调用不再成为“AntigravityProvider returned Completed”内存。仅记录具有真实回复的步骤，因此观察者停止写入错误记忆，例如“陷入重试循环”（#5667，感谢@ryrenz；@jiezhiyong 在#5665 中报告）。
- **编辑：** 使用 `CLAUDE_MEM_REDACT_ENABLED=true`，服务器捕获现在在捕获离开计算机之前应用配置的编辑器，并在存储会话和事件元数据之前应用配置的编辑器。之前，打开提示或工具负载中的未标记凭据可以通过 HTTP 未经编辑地发送（#5774，感谢 @Afloat16）。
- **医生：** `claude-mem doctor` 现在检查 macOS 启动器的代码签名。 macOS 会杀死的启动器会得到明确的提示（当 Bun 低于 1.4.1 时，首先是 `bun upgrade`，否则 `npx claude-mem install` 会重建它）；仍然运行的启动器只会发出警告（#5657，感谢@Kirat0201）。
- **cmem-pro 0.2.1：** Cowork 插件版本已升级，因此安装的副本会拾取 0.2.0 之后进行的修订和失败捕获修复。

## 新

- **土耳其语我的工作：** 我的工作页面现在提供土耳其语版本（#5656，感谢@Kirat0201）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.15.1...v15.15.2

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.15.2` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.15.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
