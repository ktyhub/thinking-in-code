---
title: "chatgpt-on-wechat 2.1.1"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.1"
published: "2026-06-09"
type: "patch"
lang: "en"
summary: "CowAgent introduces Self-Evolution, letting the agent go beyond completing a single task and keep improving through everyday collaboration with you"
---

# chatgpt-on-wechat 2.1.1

🌐 [English](https://docs.cowagent.ai/releases/v2.1.1) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.1)

## 🧬 Self-Evolution

CowAgent introduces **Self-Evolution**, letting the agent go beyond completing a single task and keep improving through everyday collaboration with you:

- **Automatic review after idle**: Once a conversation goes idle, the agent reviews it in the background to fix problems a skill exposed in use, create reusable new skills, follow up on unfinished tasks, and record important information into memory and the knowledge base
- **Silent by default, notify on demand**: It reports what it changed only when it actually made a change, and stays silent otherwise
- **Safe and reversible**: Every review is backed up beforehand and can be undone at any time. Built-in skills are protected, and all reads and writes stay within the workspace

Enabled by default for new installs. Existing users can turn it on with a single click in the Web Console under **Settings → Agent Config**.

<img width="750" src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-evolution-demo.png" alt="Self-Evolution conversation example" />

Documentation: [Self-Evolution](https://docs.cowagent.ai/memory/self-evolution)

## 💬 Web Console Upgrades

The Web Console chat experience gets several enhancements:

- **Message management**: Edit, delete, and regenerate both user and bot messages; code blocks now include language labels and a one-click copy button
- **Parallel sessions**: Run multiple sessions at the same time without interference, with live streaming automatically resumed when you switch back to a session
- **Refinements**: Drag and drop files anywhere in the chat view; automatically switch to a sibling session after deleting the active one

Thanks @core-power (#2865)

## 🧩 Cross-platform MCP Enhancements

- **Windows compatibility fix**: Fixed `stdio` communication failing on Windows, and made the server timeout configurable via `mcp.json`
- **Concurrent calls**: The `sse` and `streamable-http` transports now support concurrent calls across sessions for faster multi-tool responses

Thanks @xliu123321 (#2859)

Documentation: [MCP Tools](https://docs.cowagent.ai/tools/mcp)

## 🤖 New Models & Improvements

- **MiniMax-M3**: Added and set as the default model, with the M2.7 series kept as an option. Thanks @octo-patch (#2855)
- **Qwen3.7-plus**: Added support for multi-modal conversations
- **Selectable ASR model**: The Web Console can now select and persist the ASR (speech recognition) model. Thanks @nightwhite (#2857)
- **Simplified install menu**: The one-line install script streamlines the model menu and adds the Xiaomi MiMo option

Documentation: [Models Overview](https://docs.cowagent.ai/models)

## 🛠 Improvements & Fixes

- **Python 3.13 support**: Fixed installation and dependency compatibility on Python 3.13
- **Internationalization**: The channel list is now ordered by the interface language; refined the automatic language fallback under `auto` mode
- **More reliable cancellation**: Fixed cases where a streaming reply could not be interrupted
- **CLI**: `cow status` now shows the current project path
- **Hardened deployment security**: The credential-file block is narrowed to `~/.cow/.env` so other directories are no longer affected (Thanks @orbisai0security #2863); the WeChat Official Account now rejects webhook requests when `wechatmp_token` is empty
- **Group task board plugin**: Added the group task board plugin source. Thanks @Wyh-max-star (#2853)

## 📦 Upgrade

Source-code deployments can run `cow update` for a one-click upgrade, or pull the latest code and restart manually. See the [Upgrade Guide](https://docs.cowagent.ai/guide/upgrade) for details.

**Release Date**: 2026.06.09 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.0...2.1.1)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.1` · 2026-06-09 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
