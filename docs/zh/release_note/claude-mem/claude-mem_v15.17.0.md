---
title: "claude-mem v15.17.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.17.0"
version: "v15.17.0"
published: "2026-11-11"
type: "minor"
lang: "zh"
---

# claude-mem v15.17.0

## 新功能：用于 eve 代理的 claude-mem 内存

- **`claude-mem/eve`** 是 `claude-mem` npm 包的新导出。它是 [eve](https://eve.dev) 的内存提供程序，Vercel 的持久后端代理框架。 eve 代理现在可以使用您的 [cmem.ai](https://cmem.ai) 内存（来自 cmem.ai/pro/key 的密钥）回忆您在 Claude Code、Codex 和其他 claude-mem clients 中所做的事情 (#5863)。
  - **回忆：** 每回合前进行一次搜索。没有推理花费。匹配作为转义数据到达模型，而不是作为指令。
  - **工具：** `<slot>__search` 用于进一步查看，`<slot>__remember` 用于保存注释。两者都绑定到插槽的范围。
  - **每个调用者都有单独的内存：** 默认情况下，每个 eve 范围都有自己的 claude-mem 项目。 `searchAllProjects` 读取整个帐户，并且仅适用于单一所有者代理。
  - **无自动捕获：** eve 可以重播捕获步骤，这将保存同一回合两次，因此仅当模型调用 `remember` 时才会发生保存。
  - **故障保持可见：**如果无法到达 cmem.ai，转弯仍会运行，记录故障，并告知模型内存不可用。
  - 需要 eve 0.84.0 或更高版本以及 Node.js 24 或更高版本。 `eve` 和 `zod` 是可选的对等依赖项，因此现有安装不会发生任何变化。
- **One-click eve 个人代理模板**，位于 [`integrations/eve/template`](https://github.com/thedotmack/claude-mem/tree/main/integrations/eve/template)：使用您的 claude-mem 内存进行受密码保护的网络聊天。使用 Vercel 进行部署并输入两个值：`EVE_CHAT_PASSWORD` 和 `CLAUDE_MEM_API_KEY`。 iMessage 是一个 eve 附加组件（`npx eve add channel/linq` 或 `channel/photon`）；只有来自 `CLAUDE_MEM_OWNER_PHONE` 的文本才能获得您的记忆。

现有 eve 代理的快速入门：

```bash
npm install claude-mem
```

```ts
// agent/memory/claude-mem.ts
import { claudeMem } from "claude-mem/eve";
import { defineMemory } from "eve/memory";
import { byPrincipal } from "eve/memory/scope";

export default defineMemory({
  description: "Recall and save durable context for the current user.",
  provider: claudeMem({ apiKey: process.env.CLAUDE_MEM_API_KEY }),
  scope: byPrincipal,
});
```

文件：https://docs.claude-mem.ai/eve-integration

此版本中 Claude Code 插件的 capture、worker 或 hooks 没有变化。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.16.1...v15.17.0

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.17.0` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
