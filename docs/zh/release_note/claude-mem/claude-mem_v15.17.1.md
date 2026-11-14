---
title: "claude-mem v15.17.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.17.1"
version: "v15.17.1"
published: "2026-11-11"
type: "patch"
lang: "zh"
---

# claude-mem v15.17.1

## 更新后打开的会话继续捕获

自 15.16.0 起，工作人员会在启动后五分钟从 Claude Code 的插件缓存中清除旧插件版本，然后每小时清除一次。更新到达时已打开的 Claude Code 会话将继续从旧版本文件夹运行。一旦扫描删除了该文件夹，Claude Code 就拒绝运行该会话的每个 claude-mem 挂钩（“插件目录不存在”），因此该会话默默地停止保存提示、工具调用、观察结果和摘要。

现在，扫描会读取 Claude Code 为每个插件版本保留的 `.in_use` 记录，并在从其加载的任何会话仍在运行时保留一个版本。没有正在运行的会话使用的文件夹仍会在下次扫描时删除，因此 15.16.0 的磁盘清理仍会保留。工人的扫地机、`npx claude-mem prune`（及其 `--dry-run`）和安装程序都遵循相同的规则（#5971，感谢@rigel905，修复#5970）。

## 修复

- **上下文：** 明确为空的项目选择不显示任何内容，而是显示每个项目的观察结果（#5866，感谢 @Afloat16）。
- **上下文：** 读取成本和节省估计对存储的事实进行一次计数，而不是对没有事实的行计算额外的转义字符和发明的 `[]` （#5980，感谢 @Afloat16）。
- **观察者：** 作为拒绝到达的流式答案算作生成的输出，因此中断的流不会再次发送并收取两次费用（#5843，感谢@Afloat16）。
- **我的工作：** API 代理拒绝提供者用 `content_filter` 剪切的答案，而不是保存不完整的报告（#5878，感谢 @Afloat16）。
- **同步：**同步记录的拉取页面等待另一个写入器，而不是立即因“数据库已锁定”而失败，因此大型第一次拉取不再后退几分钟（#5996）。
- **我的工作：** 每次更改时，工作人员都会读取一次“我的工作”的共享历史记录，而不是在每次同步传递时重新读取所有历史记录 (#5986)。
- **云查看器：** 启动缓慢的云查看器会重新加载其“起始”页面，直到工作人员应答，并且隐藏的云“我的工作”选项卡会关闭其实时源，直到再次显示（#5988、#5953）。

## 集成

新的经过验证的代理框架内存工作流程，每个工作流程仅限于一个项目：Vercel AI SDK (#5951)、LangGraph (#5954)、Pydantic AI (#5955)、Microsoft Agent Framework (#6017)、Haystack (#6018)、LlamaIndex (#6019)、Google ADK (#6020)、CrewAI (#6021)、Strands Agents (#6023)、OpenAI Agents SDK (#6024)、Agno (#6025)、SmolAgents (#6026)、AG2 (#6027) 和 AutoGen (#6028)。感谢@Afloat16 所做的一切。

## 也在这个版本中

- **云查看器：**将每个登录帐户路由到其自己的应用程序的基础工作；生产行为保持不变 (#5952)。
- **eve template：** 模板的锁定文件包含 claude-mem 15.17.0，因此会安装其部署按钮 (#5968)。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.17.0...v15.17.1

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.17.1` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.17.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
