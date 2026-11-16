---
title: "context7 ctx7@0.10.0"
project: "context7"
repo: "upstash/context7"
tag: "ctx7@0.10.0"
version: "ctx7@0.10.0"
published: "2026-11-06"
type: "release"
lang: "zh"
---

# context7 ctx7@0.10.0

### 小改动

- 9783083：将 Pi 添加到 `ctx7 setup` 和 `ctx7 remove`。 `ctx7 setup --pi` 使用 `direct` 工具暴露将 Context7 MCP 服务器写入 `~/.pi/agent/mcp.json`（或 `.pi/mcp.json` 和 `--project`）。它还将 Context7 规则添加到 Pi 的上下文文件中，并将技能安装在 `~/.agents/skills` 中。 Pi 读取每个文件夹一个上下文文件，因此安装程序会将规则添加到现有的 `AGENTS.override.md` 或 `CLAUDE.md`，而不是创建隐藏它的 `AGENTS.md`。安装程序支持 `PI_CODING_AGENT_DIR`，并使用 `--oauth` 打印 `pi mcp login context7` 步骤。

### 补丁变更

- 505b812：当 `ctx7 setup` 或 `ctx7 remove` 接触 MCP 配置时保留您的评论。 `.vscode/mcp.json` 和 `.cursor/mcp.json` 是 JSONC，CLI 接受它们进行读取，但通过 `JSON.stringify` 将它们写回，因此您保留在文件中的每条评论和任何布局都会被悄悄删除。现在可以通过就地编辑添加或删除 Context7 条目，从而保留文件的其余部分（包括注释）。编辑无法安全处理的文件（例如其尾随逗号将被搁浅的文件）仍会像以前一样被整个重写。
- db66f7a：修复 `ctx7 setup` 和 `ctx7 remove` 在具有 CRLF 行结尾的 AGENTS.md 或 GEMINI.md 中留下 Context7 部分。
- ff0422f：添加 T3 代码设置选项和 --t3 设置/删除标志，用于配置其 Claude 代码和 Codex 提供程序。

---

> 📦 仓库：[upstash/context7](https://github.com/upstash/context7) · 🏷️ 版本：`ctx7@0.10.0` · 📅 发布：2026-11-06 · [查看英文原版 Release](https://github.com/upstash/context7/releases/tag/ctx7%400.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
