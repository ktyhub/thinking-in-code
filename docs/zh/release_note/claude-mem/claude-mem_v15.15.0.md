---
title: "claude-mem v15.15.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.15.0"
version: "v15.15.0"
published: "2026-11-10"
type: "minor"
lang: "zh"
---

# claude-mem v15.15.0

## 关键修复

- **工作人员不再冻结在其第一个图像上（#5601）：**从没有 `node_modules` （克劳德代码市场克隆）的插件根启动的工作人员可能会永久冻结。 Bun 的自动安装加载了 Sharp 的 wasm 构建，它的第一次调用阻塞了 Bun 的主线程，因此计时器和 `/api/health` 停止了，并且钩子不断回收工作线程。现在，每个工作程序、服务器和插件生成都运行 `bun --no-install`，安装程序从刚刚运行 `bun install` 的插件缓存副本启动工作程序，并且媒体转换器在解码之前拒绝 Sharp 的 wasm 构建，因此工作程序以其他方式启动报告 `decoder_unavailable` 而不是冻结（#5653）。感谢@vieGPT 的报告以及@Kirat0201 的复制和提出方法。

## 新

- **会话开始时的一条规则 + 工具行：** SessionStart 标头（项目和时间、模式、图例、格式、获取、统计）现在是一行，`Access Claude-Mem Rules + Tools: ~/.claude-mem/RULES-AND-TOOLS.md`。该文件保存格式、图例、模式、如何获取详细信息、工作状态规则和内存使用指南，并且仅在其文本更改时才被重写。终端横幅现在以带有查看器链接的结束行结束，并显示了多少条时间线 (#5654)。
- **删除了储蓄设置：** 上下文标题不再打印储蓄行，因此 `CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT` 和 `CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT` 及其查看器切换消失了。仍然带有它们的设置文件像以前一样加载（#5654）。

## 修复

- **安装程序：**安装状态在浏览器打开之前准备好，因此不再删除快速的第一选择，并且安装程序不再等待您已经做出的选择（#5631，感谢@Afloat16）。
- **上下文：** 启动时显示的先前会话回复是从脚本末尾读取的，而不是加载整个文件，因此长会话启动速度更快，并且非常大的脚本保留该上下文（#5625，感谢@Afloat16）。
- **终端横幅：** 当横幅剪切恰好落在行边界上时，将保留适合的整行，并且行计数还会对普通块格式中的行进行计数（#5654）。
- **测试：** 服务器的语义上下文路由仅在 pgvector 存在的情况下探测嵌入模型，因此 CI 不再在冷模型下载时超时 (#5659)。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.14.0...v15.15.0

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.15.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.15.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
