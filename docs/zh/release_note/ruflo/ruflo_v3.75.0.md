---
title: "ruflo v3.75.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.0"
version: "v3.75.0"
published: "2026-11-10"
type: "minor"
lang: "zh"
---

# ruflo v3.75.0

此版本修复了 @sparkling 和 Dream Cycle 报告的 25 个问题。

## 修复

- **原子写入写入每个字节**（#4888，#4909）。 `writeFileAtomic` 用于检查一个 `writeSync` 调用。在简短的写入中，它将截断的文件重命名到位，并且仍然报告成功。
- **报告失败的模式保存**（#4880，#4913）。 `flushToDisk()`写入失败时返回`false`，保持标记为未保存的模式，并在持久化状态中记录`lastFlushError`。
- **`memory_search_unified`**（#4876，#4913）：
  - 它报告哪些名称空间失败（`namespaceErrors`）。
  - `searchTime` 现在是搜索花费的时间。
  - 一次最多搜索 4 个命名空间，排名不变。
- **模式搜索**（#4714，#4916）。未找到任何内容的搜索将返回 `degraded: false` 和简单的“不匹配”。读取失败现在将报告为错误，而不是空结果。
- **`aidefence_learn`**（#4862，#4914）。有关个人数据 (PII) 的反馈不再记录为错过的提示注入。 `retract: true` 恰好删除了一个记录的未命中。
- **AIDefence CORE-005**（#4715、#4915；`@claude-flow/aidefence` 3.1.2）。以“……你现在在哪里”结尾的散文。不再被标记为角色切换。伪装的形式仍然被发现。
- **工具模式说明了真正的限制**（#4886、#4892、#4887、#4912）：
  - `aidefence_scan.input` 和 `agentdb_hierarchical-store.value` 仅限于 10000 个 UTF-16 代码单元。
  - `hooks_post-task` 标识符字段现在规定允许的字符和长度。
- **`agent_spawn` 的确切型号 ID**（#3215、#4917）。它接受精确的提供者模型 ID，而不仅仅是五个内置别名。
- **使用配置的嵌入模型**（#2305，#4919）。内存读取 `.claude-flow/embeddings.json`。已经保存向量的存储保留它们的维度。
- **持久状态遵循项目根**（#2633、#4928；`@claude-flow/cli-core` 3.7.7）。当您从子目录运行命令时，内存、自动驾驶仪、神经网络和指标状态会解析为项目根目录。
- **女王协调员**（#4902，#4908；`@claude-flow/swarm` 3.0.5）。现在荣誉为 `enableFailover` 和 `maxDelegationAttempts`。
- **学习桥**（#4884、#4924；`@claude-flow/memory` 3.3.0）。整合后获得的洞察开始了新的轨迹，因此它不断贡献学习信号。
- **生成 AGENTS.md** (#3153、#4918)。它仅命名已注册的 MCP 工具。测试会检查每个模板。

## 新

- **`ruflo start all`**（#1177，#4918）。如果需要，运行项目 init，然后运行内存 init，启动守护进程（如果守护进程未运行），然后启动会话。
- **`ruflo plugins host install|update|uninstall|enable|disable|sync|status`**（#2854，#4921）。一起管理 Claude Code 和 Codex 插件。它从不运行 shell，并且 `--dry-run` 打印精确的 argv。
- **双重初始化**（#2638、#2640、#4925；`@claude-flow/codex` 3.0.8）：
  - AGENTS.md 是共享部分的单一来源，CLAUDE.md 导入它。
  - `init` 跳过已安装的 ruflo 插件已提供的内容。通过 `--full` 复制所有内容。
- **内存范围**（#1227，#4923）。用于内存存储、检索和搜索的可选 `scope`（`project`、`local`、`user`）以及 `memory_list_scopes` 工具。
- **库存工具**：
  - `agentdb_hierarchical-list` 和 `agentdb_hierarchical-get` (#4712, #4924) 通过持久存储进行分页，包括超过 5,000 个条目的缓存。
  - `agentdb_pattern-list`、`agentdb_skill-list`、`agentdb_skill-get` 和 `agentdb_hierarchical-stats`（#4707、#4926）。
- **自动内存**（#4851、#4852、#4922）：
  - 钩子在新工作树中自行找到 `@claude-flow/memory`。
  - 具有重复条目的键现在会列出匹配的 ID。
  - 新的 `read --all`、`read-id` 和 `dedupe` 命令。 `dedupe` 只能预览，除非您通过了 `--apply`。
- **插件 PII 切换**（#4861、#4920）。联盟、情报和控制台有一个单独的 `piiGuard` 选项，因此可以在秘密筛选保持打开状态时关闭个人数据拒绝。

## 还包括

- zod ^4.6.7 跨声明、挂钩和 12 v3 插件 (#4904)。
- 从插件中删除未注册的可选依赖项 (#4901)。

## 与此列车一起发布的软件包

`@claude-flow/memory` 3.3.0、`@claude-flow/cli-core` 3.7.7、`@claude-flow/aidefence` 3.1.2、`@claude-flow/swarm` 3.0.5、`@claude-flow/codex` 3.0.8、`agentdb` 3.7.7 （#3175：本机 better-sqlite3 加载失败现在会发出警告，而不是打印绿色成功行）。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.75.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
