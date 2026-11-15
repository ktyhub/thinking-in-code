---
title: "ruflo v3.73.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.73.0"
version: "v3.73.0"
published: "2026-11-09"
type: "minor"
lang: "zh"
---

# ruflo v3.73.0

## 前五分钟更快

- **`init` 以您的项目结尾，而不是命令列表**（#4871、#4875）。它会打印一个快速的本地快照：跟踪的文件、热门语言、过去 90 天内更改最多的文件以及您的测试命令。然后它会提示您将该文件粘贴到 Claude Code 中。快照仅使用 git，没有网络调用和 2 秒上限，并且永远不会失败 `init`。
- **自述文件：** 顶部有一个推荐的安装路径 (`npx ruflo@latest init`)，加上 30 秒的控制台导览 (#4869)。还有一个中文快速入门和一个与 CrewAI、LangGraph、AutoGen 和 Claude Code 子代理的来源比较页面（#4873、https://ruvnet.github.io/ruflo/compare.html）。

## 遥测：尊重选择退出、选择加入激活事件

- **选择退出现在停止消息获取。** `ruflo funnel disable` 和所有其他选择退出现在停止后台消息获取，而不仅仅是促销行 (#4860)。获取的用户代理仅携带版本和操作系统系列。参见 `docs/privacy/funnel-legitimate-interest-assessment.md`。
- **选择加入激活事件** (#4870)：`init_completed`、`first_agent_run` 和 `session_active` 仅在 `ruflo funnel telemetry on` 明确同意的情况下发送。 `init` 询问一次，默认为否。使用 `--no-telemetry-prompt` 跳过该问题。
- **可以计算仅使用插件的用户** (#4872)。当 ruflo-core 插件启动 MCP 服务器时，现有的 6 小时获取标记为 `surface/plugin`，具有相同的退出选项。

## 修复和强化

- 传输：Ed25519 签名用于模式存储发布和下载。
- Healthcare-clinical：审核条目存储 SHA-256 查询指纹。
- 浏览器：安装后步骤安装固定的代理浏览器范围。
- deps：开放范围限制插件和性能；市场代理流3.4.0；联邦中流^0.3.2； aidefence agentdb ^3.6.0（#4858，#4868）。
- ruflo/server.json 和 `mcpName` 准备 `io.github.ruvnet/ruflo` MCP 注册表列表 (#4874)。

## 上游

- `@ruvector/ruvllm-gpu-loop@1.1.2`（引擎 `>=20`）修复了 npm 10 / Node 20 从全新安装中删除 ruvector 子树的问题。
- **节点 20 保留 ruvector。** `agentic-flow` 现在是 `@claude-flow/cli` 的常规依赖项。在 npm 10 / Node 20 上，可选的 `pipenet`（引擎 >=22，通过 agentic-flow → fastmcp → mcp-proxy 到达）使 npm 从全新安装中删除 ruvector、agentic-flow、`@ruvector/attention` 和 Transformer。这也影响了 3.72.2。在节点：20 和节点：22 上使用新鲜的 `npm install ruflo@3.73.0` 进行验证。
- **捆绑 `plugin-agent-federation` 1.0.7** 从其对等范围中排除agentic-flow ≤2.0.13 (GHSA-vcv2-r9jh-99m5) (#4890)。
- **init 将 ADR-150 `metaharness score` 尖端保留在项目快照下。

**安装：** `npx ruflo@latest init`。对于 `ruflo`、`claude-flow` 和 `@claude-flow/cli`，`latest` 是 3.73.0。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.73.0` · 📅 发布：2026-11-09 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.73.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
