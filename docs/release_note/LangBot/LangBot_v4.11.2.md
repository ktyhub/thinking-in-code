---
title: "LangBot v4.11.2"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.2"
version: "v4.11.2"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.2

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.
<hr/>

Patch release for dedicated (自建独立环境) deployments.

- #2755 修复独立环境 Space OAuth 登录 404（provider 行缺失导致回调 500/404 中断），以及「添加第一个模型」500
- #2757 插件安装拒绝 SDK 无法安全解压的压缩包条目名

In-place verified on a dedicated-space Core (edition=cloud, OSS runtime) at 4.11.1 + these patches: login on a fresh database returns a token, plugin install from archive works, and an agent pipeline executes in the nsjail sandbox.

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.2` · 2026-10-22 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
