---
title: "LangBot v4.11.4"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.4"
version: "v4.11.4"
published: "2026-10-29"
type: "patch"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.4

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.
<hr/>

Patch release that folds in 4.11.3 and the fixes made since.

### 主要更新 / Highlights

- **插件 / Plugins**：官方插件（LocalAgent、LangRAG、DifyAgent 等）迁入主仓并独立发版，可单独升级，不再跟随 Core 发布；调试插件包可直接上传到 LangBot Space，支持可选 GitHub 关联。
- **图片资源 / Media**：会话、监控与执行详情共享同一份资源 URL 目录，OneBot 过期的图片链接会在历史记录与模型请求中自动刷新。
- **存储 / Storage**：SQLite 改用增量方式回收空间，Docker 镜像随附修补后的 SQLite（Debian trixie）。
- **SDK**：`langbot-plugin` 由 0.7.16 固定到 0.7.19。

### 修复 / Fixed

- 数据库：修复资源 URL 迁移的规范化与作用域 SQL 失败，并让 `alembic_runner downgrade` 回滚可用；移除不再使用的索引。
- 插件运行时：持久化 v4 运行时状态、容忍 Runner 注册缺口；本地挂载插件补齐 setting 能力；托管 Runtime 尊重 `display_plugin_debug_url` 端口。
- Agent：取消执行时保留终态事件，执行不再卡在“进行中”。
- 平台适配：QQ 官方机器人修正群内 @ 与回复序列、接收全量群消息；企业微信回调解耦并用 Push API 主动推送、流式分片按窗口节流；Line 与 HTTP Bot 会话上下文修复。
- 事件：毫秒时间戳在转换前归一化。
- MCP：不支持的 mode 在落库前拒绝。
- 依赖：python-multipart 下限提到锁定版本。

### 发布验证 / Release verification

以真实的 4.11.2 数据库（PostgreSQL 与 SQLite）升级到本版本：迁移到 head 无报错，升级后 schema 与全新安装逐列一致，历史图片消息仍按原始 URL 读回；LocalAgent、LangRAG、DifyAgent 三个插件完成端到端对话验证。
Upgraded real 4.11.2 databases (PostgreSQL and SQLite) to this release: migrations reach head without errors, the upgraded schema matches a fresh install column by column, historical image payloads still read back as their original URLs, and LocalAgent, LangRAG and DifyAgent completed end-to-end conversations.

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.4` · 2026-10-29 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
