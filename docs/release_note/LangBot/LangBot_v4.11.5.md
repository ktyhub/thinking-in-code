---
title: "LangBot v4.11.5"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.5"
version: "v4.11.5"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.5

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.

## LangBot v4.11.5

This patch release opens the Workspace and execution APIs to plugins and Agents, adds speech models and cross-platform interactive cards, reworks how Runners receive media, and fixes a range of platform and runtime issues.

### Highlights

- **Workspace API / 工作区 API**：插件与 Agent 可通过统一 API 调用工作区与执行能力，包括市场搜索与安装、读取工作区语言。Plugins and Agents can call Workspace and execution APIs, including Marketplace search/install and the Workspace language.
- **Speech / 语音**：新增 TTS 与 STT 模型层和流水线阶段，并同步 LangBot Space 的 TTS/ASR 模型。Adds TTS/STT models and pipeline stages, with Space TTS/ASR model sync.
- **Interactive cards / 交互卡片**：QQ、企业微信、飞书、钉钉支持跨平台交互卡片。Cross-platform interactive cards for QQ, WeCom, Feishu and DingTalk.
- **Runner media / Runner 媒体输入**：Runner 输入的媒体统一为一个有序列表，附件按 ref 按需读取；官方 Runner（Dify、Coze、Tbox、ACP 等）已适配。Runner input media is one ordered list and attachments are read by ref; official Runners are updated.
- **Monitoring / 监控**：记录插件处理的消息、被流水线规则丢弃的阶段，以及插件在流水线外发起的 LLM 调用。Monitoring shows plugin-handled messages, the rule stage that dropped a message, and plugin LLM calls outside a pipeline.
- **Platforms & models / 平台与模型**：新增原生事件驱动的 LINE 适配器（旧版标记为 legacy）、Slack 线程、公众号自动模式主动发送、QQ 官方表情解析；新增 NVIDIA NIM 与 MiniMax 发现/推理回放。Native event-based LINE adapter, Slack threads, Official Account proactive sends, QQ Official faces; NVIDIA NIM and MiniMax discovery/reasoning replay.
- **Plugins / 插件**：支持批量升级各工作区的市场插件；新增 MulticaAgent、HandoffBridge、LeadCapture 官方插件。Operator sweep to upgrade Marketplace plugins across Workspaces; new official MulticaAgent, HandoffBridge and LeadCapture plugins.
- **Fixes / 修复**：不再路由到已删除的流水线与 Agent；非流式平台逐条发送 Runner 消息；HTTP Bot `/sync` 每条回复只返回一次；企业微信心跳失败自动重连；Box 运行时归属跨重启保留；执行租约随在途任务数伸缩；Windows 上由 Core 启动的插件/Box 运行时改用 stdio。Stop routing to deleted Pipelines/Agents, per-message delivery on non-streaming platforms, single replies from HTTP Bot `/sync`, WeCom heartbeat reconnect, persisted Box runtime ownership, proportional execution leases, and stdio runtimes on Windows.
- **SDK**：`langbot-plugin` 由 0.7.19 固定到 0.7.23。`langbot-plugin` is pinned from 0.7.19 to 0.7.23.

### Release verification

- Unit tests (Python 3.11/3.12/3.13), fast integration, PostgreSQL contract, Box integration, E2E startup, Core smoke, regression tools, compiled CLI HTTP contract, official plugin identity contract, Ruff and frontend lint passed on the release commit.
- `langbot-plugin==0.7.23` is published on PyPI and pinned in `pyproject.toml` and `uv.lock` from the registry, with no VCS dependency.
- Official plugins changed since their last listing were republished to LangBot Space from this source: LocalAgent 0.2.9, ACPAgentRunner 0.1.21, CozeAgent 0.2.4, DeerFlowAgent 0.2.3, DifyAgent 0.2.7, N8nAgent 0.2.4 and TboxAgent 0.2.4.

### Contributors

@RockChinQ, @huanghuoguoguo, @Nikarhub, @TyperBody, @jry21223, @leonoxo, @fdc310, @ShaoLOWu, @wangcham, @pratikgx, @ShryukGrandhi, @richa-nvidia

### New Contributors

- @pratikgx made their first contribution in https://github.com/langbot-app/LangBot/pull/2726
- @ShryukGrandhi made their first contribution in https://github.com/langbot-app/LangBot/pull/2826
- @richa-nvidia made their first contribution in https://github.com/langbot-app/LangBot/pull/2816

**Full Changelog**: https://github.com/langbot-app/LangBot/compare/v4.11.4...v4.11.5

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.5` · 2026-11-10 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
