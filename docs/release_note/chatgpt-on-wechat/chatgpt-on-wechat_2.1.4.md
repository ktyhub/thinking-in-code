---
title: "chatgpt-on-wechat 2.1.4"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.4"
published: "2026-07-20"
type: "patch"
lang: "en"
summary: "🌐 English | 中文"
---

# chatgpt-on-wechat 2.1.4

🌐 [English](https://docs.cowagent.ai/releases/v2.1.4) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.4)

## 🖥 Desktop Client

Following the desktop client launched in the previous release, this version further improves browser capabilities, system compatibility, and overall experience:

- **Browser tool support**: the client bundles browser capabilities and prefers reusing the system's installed Chrome / Edge, with optimized browser startup and access performance.
- **UI polish**: refined visuals and interactions for the chat view, message bubbles, tool-call steps, and channel pages.
- **Windows code signing**: Windows installers are now code-signed, reducing security warnings during installation.
- **Windows 7/8 support**: added client support for legacy systems such as Windows 7/8, covering more environments.
- **Knowledge base link fix**: fixed in-document links in the desktop knowledge base that failed to navigate.
- **Password login**: the desktop client supports setting a login password, and fixes an issue where the window failed to load after a password was set.

Download: [CowAgent Desktop](https://cowagent.ai/download/)

Docs: [Desktop Client](https://docs.cowagent.ai/guide/desktop)

## 🔌 MCP OAuth Authorization

Remote MCP servers now support **OAuth authorization**. When connecting to third-party MCP servers that require login, authentication can be completed via the standard OAuth flow — no more manually configuring and maintaining tokens.

Docs: [MCP Tools](https://docs.cowagent.ai/tools/mcp)

## ⏰ Scheduled Tasks

- **Silent mode**: create silently-running scheduled tasks that execute in the background without pushing messages — ideal for undisturbed scenarios like data organization or periodic archiving. (#2954)
- **Manual run**: manually trigger an existing task to run immediately from the console, without waiting for the next schedule. (#2958)
- **Preserve config on edit**: fixed an issue where editing a task in the Web console could drop hidden fields such as the mode type. (#2959)
- **Cross-channel task command**: added the `/tasks` management command, compatible across channels. (#2965)

Thanks @AaronZ345

Docs: [Scheduled Tasks](https://docs.cowagent.ai/tools/scheduler)

## 💬 Feishu Channel Improvements

The Feishu channel gains a series of message-display and interaction enhancements for a better experience.

- **Streaming card polish**: streaming cards add collapsible panels showing the thinking process, tool calls, and execution time. (#2963)
- **Markdown formatting**: for non-streaming replies and scheduled pushes, messages containing Markdown are rendered as cards for clearer display. (#2962)
- **Scheduler cards**: the `/tasks` command is presented as cards, with the ability to enable or disable tasks right from the card. (#2961)
- **Quoted message context**: when a user quotes a message, the quoted content is automatically added to the context sent to the Agent. (#2966)
- **Remote image rendering**: remote image links can now be rendered inside Feishu cards. (#2967)
- **Cancel on message recall**: recalling a Feishu message automatically cancels its corresponding running or queued task. (#2978)

Thanks @AaronZ345

Docs: [Feishu](https://docs.cowagent.ai/channels/feishu)

## 💾 Data Backup & Restore

Added the `cow backup` and `cow restore` commands to export and restore local data — configuration, knowledge base, memory, and more — with one command, making migration and backup easy. Thanks @AaronZ345 (#2957)

Docs: [Data Backup](https://docs.cowagent.ai/cli/backup)

## 🤖 New Models

- Added support for **kimi-k3**
- Added support for **gpt-5.6-luna**, **gpt-5.6-terra**, and **gpt-5.6-sol**

Docs: [Models](https://docs.cowagent.ai/models)

## 🛠 Improvements & Fixes

- **Active-task steering**: added the `/steer` command to inject new instructions during task execution, guiding or redirecting the running task on the fly. Thanks @AaronZ345 (#2977)
- **File editing**: fixed an issue where fuzzy matching could locate the wrong position when editing files. Thanks @weijun-xia (#2945)

## 📦 How to Upgrade

- **Source deployment**: run `cow update` for a one-click upgrade, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).
- **Desktop client**: check for updates and update with one click inside the client, or get the latest version from the [download page](https://cowagent.ai/download/).

**Release date**: 2026.07.20 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.3...2.1.4)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.4` · 2026-07-20 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
