---
title: "claude-mem v15.18.4"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.4"
version: "v15.18.4"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# claude-mem v15.18.4

## 修复

- **Claude Code 一次获得 claude-mem 的规则和工具** (#6179)。在此之前，Claude Code 会话从最多三个位置获得相同的指导：MCP 服务器指令、本地激活脚本写入 `CLAUDE.md` 的内存块以及指向 `RULES-AND-TOOLS.md` 的指针线（其时间线图例从未实际加载）。现在只有一条路了。 `MY-RULES.md`（您的 `CLAUDE.md` 已导入）以 `RULES-AND-TOOLS.md` 的导入结束，克劳德代码从那里加载它。
  - 当 Claude 代码中的导入链完成时，MCP 服务器不发送任何指令，并且 SessionStart 挂钩会删除 `Access Claude-Mem Rules + Tools:` 指针行。仅当导入的文件准确包含要发送的文本时，服务器才会跳过其指令。
  - 其他主持人和从未设置“我的规则”的 Claude Code 用户保持不变。
  - 工作人员在启动时将导入添加到现有的 `MY-RULES.md` 中，因此当前用户无需执行任何操作即可获得它。它从不创建该文件。写入 `MY-RULES.md` 还可以确保 `RULES-AND-TOOLS.md` 存在，因此导入永远不会指向丢失的文件。
  - `scripts/activate-progressive-memory-local.mjs` 不再将内存块写入克劳德的 `CLAUDE.md` 中。 Codex `AGENTS.md` 保留它，因为 `AGENTS.md` 没有进口。
- **工作程序列表端点在偏移量 10,000 处停止**（#6083，感谢 @xunguangzlj-cloud）。 `/api/observations`、`/api/summaries`、`/api/prompts`、会话源和 `/api/tool-uses` 用于将任何偏移量直接传递到 SQLite，其中深度偏移量使数据库扫描并丢弃每个跳过的行。现在，他们会使用与职位列表相同的信息来回答 10,000 以上的 400 个问题。查看器源会标记其最后一页，因此查看器会显示“此列表停在最新的 10,000 个项目”，而不是错误。
- **名称以两个点开头的文件夹保留在排除的目录中**（#6062，感谢@Afloat16）。名为 `..cache` 的子文件夹被误认为是父目录路径，因此它跳过了观察者会话、插件缓存和市场运行时的排除，并且 Claude 的配置文件夹下的标记可能成为项目根目录。
- **成本报告使用您的名字，而不是维护者的**（#6085，感谢@MaxWang007）。其余基于名称的检查（“在 <name> 上阻止”、中继、人工审核检测）从 `--owner-name`、`ACR_OWNER_NAME`、`git config user.name` 获取名称，并在未设置任何名称时使用无名称模式。仅名字也可以匹配，并且非拉丁名字也可以。

## 性能

- **查看器中更快的项目过滤会话列表**（#6053，感谢@Afloat16）。关于项目、开始时间和 ID 的新索引使查看者可以阅读长项目历史记录的一页，而无需对每个会话进行排序。现有数据库在下一个工作进程启动时获取索引。
- **在近乎重复的扫描过程中降低峰值内存**（#6052，感谢@Afloat16）。配对计数现在一次只处理一个标题，而不是在内存中保存每个共享标题对。结果是一样的。

## 文档和示例

- **Vercel Chat SDK 显式项目内存示例**（#6084，感谢 @Kirat0201）。本地的、经过身份验证的聊天可以保存注释、搜索其项目并获取观察结果。没有模型，也没有自动捕获。它需要 `CLAUDE_MEM_WORKER_URL` 设置，指南显示如何找到您的工作端口。
- 更新了自述文件徽标（#6104）。

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.18.4` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
