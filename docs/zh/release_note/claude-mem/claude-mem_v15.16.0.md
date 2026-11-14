---
title: "claude-mem v15.16.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.16.0"
version: "v15.16.0"
published: "2026-11-11"
type: "minor"
lang: "zh"
---

# claude-mem v15.16.0

## 新

- **您的 API 提供商上的“我的工作”刷新（选择加入）：** 设置 `CLAUDE_MEM_WORK_VIEW_AGENT=api` 在您已选择的提供商（`openrouter`、`openai-compatible` 或旧版 `cmem` 拼写）上运行“我的工作”刷新。没有登录 Claude Code、Codex 或 Gemini CLI（例如 OpenCode 或 DSH 主机）的安装现在可以使用“我的工作”。选择 API 提供程序且设置为空后，刷新不再回退到登录的 Claude 代码：在您选择一个代理之前，不会运行任何代理，也不会花费任何费用（#5674，感谢 @bulanovk）。
- **我的工作中的 GitHub MCP 拉取请求：** 通过 GitHub 的官方 MCP `create_pull_request` 工具创建的拉取请求现在显示为我的工作产品。仅接受 URL 与请求的存储库匹配的已完成结果（#5809，感谢 @Afloat16）。
- **UberLLM 预设：** `uberllm` 现在是 `openai-compatible` 提供商的预设（`https://api.uberllm.dev/v1`，默认型号 `deepseek/deepseek-v4.1-flash`）（#5706，感谢 @PSA-Team-source）。
- **可调整的实时切换超时：** `CLAUDE_MEM_HOOK_HANDOFF_TIMEOUT_MS`（默认 250）设置从挂钩到工作人员的单次实时切换的预算，并且错过的切换现在记录在 WARN 而不是 DEBUG （#5831，感谢 @mohitdixit02）。

## 值得注意的修复

- **插件缓存清理：**工作人员现在会修剪 Claude Code 的市场更新留在 `~/.claude/plugins/cache/thedotmack/claude-mem/` 中的旧版本文件夹（一份报告：21 个版本，约 16 GB）。它保留运行副本和注册版本，并在启动稳定后进行扫描，然后每小时进行扫描（#5685，感谢@MaxWang007）。
- **Windows 防病毒噪音：** 当启动器文件夹已位于 PATH 上时，安装、更新和启动器重建不再启动隐藏的 PowerShell，卡巴斯基标记的模式（#5835，由 @Ali-Sabri-0 报告）。
- **我的工作语言：** 当 `CLAUDE_MEM_WORK_VIEW_TEXT_LANGUAGE` 为空时，每个刷新步骤现在都以系统区域设置的语言写入，因此一次运行不再混合语言（#5669，感谢 @0xABCD01）。
- **我的工作空闲成本：** 空闲轮询不再重新扫描每个同步行，并且实时概览、焦点区域合并和重型面板每次更新的工作量更少 (#5834)。
- **备份：** declined 备份运行返回失败，保存的备份与保留错误分开报告，遵守超出计时器限制的备份间隔，并且恢复拒绝丢失工作表的标记快照（#5750、#5781、#5784、#5684，感谢 @Kirat0201）。
- **Shell 设置：** 启动器 PATH 块和遗留卸载别名以原子方式写入，Cowork 在主机设置时在 `$HOME` 下暂存假脱机事件，Hermes 将永久 HTTP client 错误保留在其断路器之外（#5680、#5679、#5677、#5678，感谢 @DeryFerd）。
- **OpenCode：** bash 工具报告为 `Bash`，因此 `SKIP_BASH_PATTERNS` 适用（#5668，感谢 @ryrenz）。
- **同步：**重试删除后色度清理失败（#5673，感谢@Zhong-fan）。
- **SessionStart：** 缓存读取和撰写步骤共享一个正文预算，因此仅在适合时才提供缓存正文（#5686，感谢@Varshith-Kali）。

## 更多修复

@Afloat16 进行了大约 130 个较小的修复，涉及捕获、同步、搜索、上下文、导入、转录、媒体、服务器以及 Codex、OpenCode、OpenClaw、Hermes、Grok、Kimi、Gemini、Pi、Goose、Notion 和 Telegram 集成。亮点：
- **搜索和上下文：** 通过调用、合并和缓存保留文字项目密钥和文件路径； Unicode 和组合标记不受查询词和片段限制；缓存的上下文在恢复和行替换后过期；保留最大的拟合时间线前缀。
- **同步和记忆：** 会话标题提交其发件箱突变并获得接收者编辑；手动保存和新提示在会话删除后起作用；注意修订在标题重复数据删除后仍然存在。
- **转录和导入：**多部分法典消息、配对补丁结果和 zstd 框架接缝被正确读取；推理不属于最终答案； OpenCode、Gemini 和恢复的摘要导入不会重复或丢失提示。
- **服务器和提供商：** API 密钥派生不参与请求循环；取消通过重试和压缩传播；分割令牌的使用是根据兼容的回复来计量的；内存内容在存储之前经过清理。
- **媒体：**图像序号，跨路径拼写读取证据，并保留广告图像尺寸范围；仅对接受的图像收取内联津贴。

同样来自 @Kirat0201：文件历史记录遵循整个项目合并，交互式时间线搜索尊重项目列表，统一搜索保留文字 `filePath` 值（#5789、#5787、#5785）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.15.2...v15.16.0

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.16.0` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.16.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
