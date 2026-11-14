---
title: "chatgpt-on-wechat 2.1.2"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.2"
published: "2026-06-18"
type: "patch"
lang: "en"
summary: "This release adds several visual management capabilities to the Web Console, so more configuration can be done in the UI without editing files"
---

# chatgpt-on-wechat 2.1.2

🌐 [English](https://docs.cowagent.ai/releases/v2.1.2) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.2)

## 💬 Web Console Improvements

This release adds several visual management capabilities to the Web Console, so more configuration can be done in the UI without editing files:

- **Scheduled task management**: View, edit, enable/disable, and delete any scheduled task directly in the console. The task list is sorted by enabled status first, then by next run time. Thanks @HnBigVolibear (#2892)
- **Knowledge base categories and document management**: The knowledge base can now be organized by category, with documents under each category managed in the UI. Thanks @yangziyu-hhh (#2893)
- **Multiple custom model providers**: Configure multiple OpenAI-compatible providers and switch the active one with a single click, fully compatible with existing configuration. Thanks @kirs-hi (#2877)
- **Session renaming**: Rename sessions manually to tell parallel tasks apart (#2897)
- **Bash streaming output**: Long-running Bash commands now stream their progress in real time. Thanks @yangziyu-hhh (#2879)

## 🧬 Self-Evolution Improvements

Building on the Self-Evolution introduced in the previous release, this version refines it further:

- **Lower trigger thresholds**: The default review thresholds are lowered, so everyday collaboration turns into improvements sooner
- **No concurrent reviews**: When a single turn runs long, the idle review no longer fires by mistake, avoiding interference with the active conversation
- **Better review summary**: Refined the summary prompt to keep summaries concise, raise their information density, and output them in the conversation language

Documentation: [Self-Evolution](https://docs.cowagent.ai/memory/self-evolution)

## 🤖 New Models

- **kimi-k2.7-code**: Added and set as the default Kimi model, with `kimi-k2.7-code-highspeed` also available
- **glm-5.2**: Added and set as the default GLM model

Documentation: [Models Overview](https://docs.cowagent.ai/models)

## 🏢 WeCom Smart-Bot Callback Mode

The WeCom smart-bot channel adds an **HTTP callback mode** alongside the existing long connection, so deployments that cannot keep a long connection open can still connect reliably:

- **Mode switching**: Switch between `websocket` (long connection) and `webhook` (callback) via `wecom_bot_mode`
- **Encrypted transport**: Callback mode fully supports URL verification, message decryption, and passive-reply encryption
- **Stability fixes**: Fixed reply interruption, premature stream termination, and temporary image file leaks

Thanks @6vision (#2896 #2869)

Documentation: [WeCom Smart Bot](https://docs.cowagent.ai/channels/wecom-bot)

## 🔒 Security Hardening

- **Vision tool SSRF protection**: Validates the target address before resolving an image URL, blocking requests to internal, loopback, and cloud server metadata endpoints. Thanks @kirs-hi (#2886)
- **Web fetch SSRF protection**: `web_fetch` validates the target address before fetching and re-validates every redirect hop, preventing redirects from bypassing the check to reach internal addresses. Thanks @christop (#2900)
- **Skill install path traversal protection**: Validates the path when installing a skill, preventing a malicious skill name from escaping the `skills/` directory through path traversal and writing to an unauthorized location. Thanks @kirs-hi (#2886)

## 🛠 Improvements & Fixes

- **CLI self-restart**: Added the `cow self-restart` command so the agent can restart its own process
- **Windows compatibility**: Persist the cow CLI directory to the user PATH; fixed `python -c` long commands exceeding the `cmd.exe` length limit; avoid building greenlet from source during install
- **Custom roles**: The role plugin supports customization via standalone prompt files under `roles/*.json`. Thanks @sufan721 (#2891)
- **Stability fixes**: Fixed a KeyError on `/cancel` and an infinite loop in image compression (Thanks @kirs-hi #2888)
- **Install improvements**: Updated the startup script and default config; fixed ASR/TTS defaults, the self-evolution flag, and install hangs
- **Vision tool stability**: Increased the vision tool timeout and max_tokens
- **Memory distillation**: Removed the output length cap in deep-dream distillation to avoid truncating a large `MEMORY.md`

## 📦 Upgrade

Source-code deployments can run `cow update` for a one-click upgrade, or pull the latest code and restart manually. See the [Upgrade Guide](https://docs.cowagent.ai/guide/upgrade) for details.

**Release Date**: 2026.06.18 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.1...2.1.2)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.2` · 2026-06-18 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
