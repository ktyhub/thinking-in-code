---
title: "LangBot v4.11.1"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.1"
version: "v4.11.1"
published: "2026-10-20"
type: "patch"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.1

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.

## LangBot v4.11.1

本次更新改进监控性能、消息处理和插件兼容性。
This maintenance release improves monitoring performance, message handling, and plugin compatibility.

### Highlights / 主要更新

- **监控与存储 / Monitoring and storage**：优化会话查询，修复任务终态处理，改进历史图片存储和迁移兼容性。Optimize session queries, fix terminal execution states, and improve historical image storage and migration compatibility.
- **消息与插件 / Messages and plugins**：修复消息过滤、插件安装诊断、显式附件发送及部分平台消息处理。Fix message filtering, plugin installation diagnostics, explicit attachment delivery, and platform-specific message handling.
- **SDK**：精确固定 `langbot-plugin==0.7.16`，避免对无事件监听器的插件执行不必要的事件 RPC。Pin `langbot-plugin==0.7.16` and avoid unnecessary event RPC calls for plugins without event listeners.

### Release verification / 发布验证

PyPI 包、双架构 Docker 镜像、源码 ZIP 和 fnOS FPK 已发布并读回验证；全新安装与隔离 Linux 启动检查通过。
PyPI packages, dual-architecture Docker images, the source ZIP, and fnOS FPK were published and verified. Clean installation and isolated Linux startup checks passed.

### Contributors / 贡献者

感谢本版本的所有贡献者（含共同作者）！
Thanks to everyone who contributed to this release, including co-authors!

@BiFangKNT, @carfeii, @dadachann, @fluo-rite, @HaiYangBG1, @haoxuanjng-lang, @huanghuoguoguo, @Jonathan-Improving, @Li-john1021, @MuonChaser, @Nikarhub, @qingshungLI, @RockChinQ, @ShaoLOWu

自动化与 AI 协作 / Automation and AI assistance: @claude, @multica-agent.

### New Contributors / 首次贡献者

* @MuonChaser 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2714
* @ShaoLOWu 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2654
* @carfeii 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2628
* @Jonathan-Improving 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2620
* @Li-john1021 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2658
* @haoxuanjng-lang 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2626
* @fluo-rite 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2656
* @qingshungLI 首次贡献 / made their first contribution: https://github.com/langbot-app/LangBot/pull/2631

**Full Changelog**: https://github.com/langbot-app/LangBot/compare/v4.11.0...v4.11.1

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.1` · 2026-10-20 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
