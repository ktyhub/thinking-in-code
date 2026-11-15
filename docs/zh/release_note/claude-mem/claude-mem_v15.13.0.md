---
title: "claude-mem v15.13.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.13.0"
version: "v15.13.0"
published: "2026-11-09"
type: "minor"
lang: "zh"
---

# claude-mem v15.13.0

## 关键修复

- **光标摘要：** 光标会话在本机 Windows 上没有摘要，或者当工作空间路径中包含 `_`、空格或点文件夹时。 claude-mem 现在会在 Cursor 实际命名的项目文件夹中查找记录，因此这些会话会再次获得摘要（#5544，感谢 @tanishqbaweja；@wbingli 在 #2248 中首次报告了相同的症状）。

## 新

- **在 33% 上下文时自动清除（默认情况下关闭）：** 使用 `CLAUDE_MEM_AUTO_CLEAR_ENABLED=true` 将其打开。当 Claude Code 对话到达上下文窗口的三分之一时，Claude 保存其工作状态，claude-mem 运行 `/clear` 并发送 `continue`，新的对话将重新拾取工作。不保存意味着不明确（#5486）。
- **标准计算预设**，适用于 openai 兼容提供商（#5492，感谢 @henrikdukefoss）。
- **PopNow 预设** 用于 openai 兼容提供商（#5434，感谢 @kyuminjo）。

## 修复

- **Chroma：**一次删除许多观察结果不再堆积锁定 chroma-mcp 数小时的清理工作；他们现在一次运行一个（#5496，感谢@xunguangzlj-cloud；由@voyvodka 在#5495 中报道）。
- **CLI:** `claude-mem --help`、`-h` 和错误输入的命令打印用法，而不是启动前台工作程序（#5491，感谢 @ryrenz；@ukdataservices-admin 在 #5490 中报告）。
- **CLI：** `--flag=value` 适用于 `server api-key`、`memory ingest` 和 `adopt`，因此 `--scope=memories:read` 确实是一个只读密钥（#5469，感谢 @rudycelekli）。
- **博士：** `npx claude-mem doctor` 在 Windows 上退出时不再崩溃（#5465，感谢 @tng7576650-commits）。
- **CMEM Pro 登录：** 当 cmem.ai 在没有消息的情况下拒绝登录启动时，安装程​​序会显示 HTTP 状态而不是连接建议（#5498，感谢 @xunguangzlj-cloud）。
- **编辑：** 在工具输出中的行开头打印的供应商密钥现在已被编辑（#5521）。
- **Cowork：** Cowork shim 编辑了工作人员已经编辑的 NVIDIA、Runcrate、Groq、xAI 和 Perplexity 密钥（#5483，感谢 @DeryFerd）。
- **Windsurf：** 安装程序以原子方式写入 `hooks.json` 和规则文件，因此中断的安装不会让 Windsurf 留下损坏的钩子文件（#5542，感谢 @DeryFerd）。
- **服务器：**查看器提要端点绑定 `offset`，client 可以发送（#5485，感谢 @DeryFerd）。
- **安装：** 使用 UTF-8 BOM 保存的 OpenCode、Kimi 和 Antigravity 配置文件可以正确读取（#5472，感谢 @rudycelekli）。
- **启动器：** 当记录空钩子负载时，`CLAUDE_MEM_DATA_DIR` 开头的 `~` 会展开，而不是在项目中创建 `~` 文件夹（#5473，感谢 @rudycelekli）。
- **导入：**重新导入导出可以保持项目合并（`merged_into_project`）（#5471，感谢@rudycelekli）。
- **DSH：** 摄取的工具内存保留配置的 `platformSource` （#5470，感谢 @rudycelekli）。
- **CLAUDE.md：** 在 monorepo 中，文件夹 CLAUDE.md 行以该文件夹中的文件开头（#5468，感谢 @rudycelekli）。
- **我的工作：** 使用 `git commit -m "$(cat <<'EOF' ...)"` 进行的提交和每个 `gh pr` 标题表单都可以正确读取（#5480，感谢 @rudycelekli）。
- **搜索：**文件过滤器匹配路径是否使用`/`或`\`（#5466，感谢@liuyinchu）。
- **Hermes：** 格式错误的端点和截断的响应会干净地回退，即使最终事件失败，会话也会结束，并且长提示的召回会在查询限制处停止（＃5462，感谢@Afloat16）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.12.1...v15.13.0

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.13.0` · 📅 发布：2026-11-09 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.13.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
