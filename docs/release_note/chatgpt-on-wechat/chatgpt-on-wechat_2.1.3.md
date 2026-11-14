---
title: "chatgpt-on-wechat 2.1.3"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.3"
published: "2026-07-08"
type: "patch"
lang: "en"
summary: "Introducing the CowAgent Desktop client for macOS and Windows — your local super AI assistant, truly ready to use out of the box."
---

# chatgpt-on-wechat 2.1.3

🌐 [English](https://docs.cowagent.ai/releases/v2.1.3) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.3)

## 🖥 Desktop Client

Introducing the **CowAgent Desktop client** for **macOS and Windows** — your local super AI assistant, truly ready to use out of the box.

Download: [CowAgent Desktop](https://cowagent.ai/download/)

<img width="750" src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/desktop-chat-demo-en.png" alt="CowAgent Desktop client" />

Highlights:

- **Out of the box**: the full Agent runtime is bundled — launch right after install, no need to set up Python or other dependencies
- **Full chat experience**: streaming replies, session management, tool-call step display, Markdown rendering, plus sending and previewing images / videos / files
- **Visual management**: configuration, models, knowledge base, scheduled tasks, skills, and memory pages mirror the Web console, all manageable in the native UI
- **Channel onboarding**: connect messaging channels by scanning a QR code right inside the app
- **Auto update**: automatic version checks and one-click updates, with download speed optimized across regions
- **Native experience**: first-run onboarding, follows the system language, and platform-adaptive window interactions


## 📚 Knowledge Base

- **Create & import documents**: create new documents or import external ones directly from the UI
- **Automatic index maintenance**: the knowledge base index is rebuilt automatically from the actual directory tree, preventing index drift or lost documents
- **Vectorization fix**: the index now reuses the unified embedding provider, ensuring real semantic vectors instead of falling back to keyword search

Thanks @yangziyu-hhh

Docs: [Knowledge Base](https://docs.cowagent.ai/memory/knowledge)

## 🔌 On-demand MCP Tool Retrieval

To address context bloat when many MCP tools are connected, we added **on-demand tool retrieval**: relevant MCP tools are loaded on demand via RAG vector search based on the current task, reducing the context taken up by irrelevant tools. 

Thanks @fengyl07

Docs: [MCP Tools](https://docs.cowagent.ai/tools/mcp)

## 🌏 Traditional Chinese Support

The Web console, logs, and documentation now support **Traditional Chinese (zh-Hant)**; the interface language can follow the system or be switched manually. 

Thanks @anomixer (#2935)

## 🤖 New Models

- Added support for **claude-sonnet-5** and **claude-fable-5**
- Added support for **doubao-seed-2-1-pro** and **doubao-seed-2-1-turbo**

Docs: [Models](https://docs.cowagent.ai/models)

## 🔒 Security Hardening

- **Sensitive file read protection**: hardened access to credential and other sensitive files to prevent bypass reads. Thanks @fengyl07 (#2936)
- **Browser access protection**: blocks browser requests targeting internal network and cloud server internal endpoints, reducing the risk of being tricked into reaching internal services. Thanks @Jiangrong-W
- **Safer config parsing**: config content is parsed in a safer way to avoid potential code execution risks. Thanks @shunfeng8421

## 🛠 Improvements & Fixes

- **Custom provider support**: embedding and vision models can now use custom providers; also fixed a memory query issue on Windows. Thanks @HnBigVolibear
- **More reliable file editing**: better preserves original indentation, and fuzzy matching no longer touches unrelated content. Thanks @weijun-xia (#2942)
- **Command output encoding fix**: fixed garbled Chinese characters when a command produces large output. Thanks @weijun-xia (#2941)
- **Azure OpenAI fixes**: fixed streaming output and related configuration issues for Azure OpenAI. Thanks @Tunnello
- **WeCom Smart Bot**: added channel docs for the webhook (callback) mode. Thanks @6vision
- **Deep Dream toggle**: added a dedicated `deep_dream_enabled` switch to enable or disable Deep Dream distillation independently.
- **Stability**: improved connection recycling in the Web service and fixed several Self-Evolution issues (#2924 Thanks @santipongth, #2904 Thanks @YLChen-007)

## 📦 How to Upgrade

- **Desktop client**: get the latest version from the [download page](https://cowagent.ai/download/).
- **Source deployment**: run `cow update` for a one-click upgrade, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).

**Release date**: 2026.07.08 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.2...2.1.3)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.3` · 2026-07-08 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
