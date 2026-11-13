---
title: "chatgpt-on-wechat 2.1.6"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.6"
published: "2026-08-12"
type: "patch"
lang: "en"
summary: "🌐 English | 中文"
---

# chatgpt-on-wechat 2.1.6

🌐 [English](https://docs.cowagent.ai/releases/v2.1.6) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.6)

## 🤝 Sub Agents

The main Agent can hand independent tasks off to sub agents and run them in parallel — improving results, lowering context cost, and speeding up work that can happen at the same time:

- **Isolated context**: the intermediate work stays out of the main conversation, saving tokens and keeping the model focused.
- **Parallel execution**: several sub agents can run at once, and the main Agent gathers their results when they finish. Both the Web console and the desktop client show the full run.
- **Customizable**: two built-in types, `general-purpose` and `explore`, plus your own — drop a `.md` file under the workspace `subagents/` directory to define a type with its own system prompt and tool set.
- **On by default**: no setup needed; the main Agent decides when to delegate. Toggle it under Config → Agent, and tune nesting depth, concurrency, and timeout in `config.json`.

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/cow-subagent-demo.png" width="800" />

Thanks @AaronZ345 (#2976)

Docs: [Sub Agents](https://docs.cowagent.ai/multi-agent/subagent)

## 🖥 Desktop Client

- **Scheduled-task notifications**: the client receives scheduled and pushed messages and raises OS notifications.
- **Update panel**: the update dialog now links to the release notes, so you can see what changed.
- **Custom provider models**: custom providers get a free-form model input.
- **Startup fixes**: fixed the backend startup hanging, added automatic port retry, and surfaced the real error on failure.

Download: [CowAgent Desktop](https://cowagent.ai/download/)

Docs: [Desktop Client](https://docs.cowagent.ai/guide/desktop)

## 🧠 Reasoning Effort & Thinking

- **Reasoning-effort settings**: native `reasoning_effort` configuration across Claude, Qwen, Kimi, and more, remembered per model. Thanks @tshicheng (#3007, #3009)
- **Claude thinking**: Claude's thinking process can now be shown in the Web console and the desktop client, making its reasoning easier to follow.

## 🔒 Security Hardening

- **Guarded self-evolution writes**: unattended writes now get validation and rollback, writes are serialized per workspace, and the protected write paths were narrowed so task files in the workspace are no longer touched by mistake. Thanks @lisheng-SenLee (#3011, #3016)
- **Skill path validation**: skill install validates each file path more thoroughly. Thanks @LHMQ878 (#3006)
- **Dependency upgrades**: the desktop client bumps js-yaml and linkify-it, fixing two exploitable denial-of-service issues. Thanks @anupamme

## 💾 Memory & Retrieval

- **Pluggable vector backend**: memory's vector storage and retrieval sit behind a single interface, with SQLite as the default, making it easy to plug in an external vector store later. Thanks @AaronZ345 (#3021)
- **Index repair**: fixed trigram FTS5 index corruption on chunk updates; a corrupted shared database now self-repairs.

Docs: [Memory](https://docs.cowagent.ai/memory)

## 🛠 Improvements & Fixes

- **Custom image providers**: image generation supports custom providers, with live credential refresh and cleanup on deletion. Thanks @AaronZ345 (#3022)
- **Reliable SSE reconnection**: the Web SSE lifecycle is now complete, reconnecting with event replay after a network drop and cutting message loss on long tasks. Thanks @lisheng-SenLee (#3014)
- **Reasoning display**: fixed several issues with tool cards, file links, and image display in reasoning mode.
- **Rate-limit backoff**: capped the backoff when the LLM is rate-limited, avoiding long waits. Thanks @tim-korso (#3018)
- **Quiet scheduled tasks**: a scheduled task with nothing to report no longer sends an empty message. Thanks @kowkowhuang (#3001)
- **Service stop time**: fixed an end-of-day time (such as 23:59) being rejected as a service stop time. Thanks @Iams4kura (#3020)
- **Domain scheme**: fixed an explicit http/https scheme in `WEBSITES_DOMAIN` not being honored. Thanks @6vision (#3015)
- **WeChat media**: fixed personal WeChat failing to send or receive images, files, and other media over unreliable networks, and refined image recognition.
- **Feishu channel**: fixed new messages being dropped when their delivery lagged.
- **Telegram**: fixed Markdown rendering and a long summary dropping attached files.
- **File replies**: fixed a file reply dropping the accompanying text and other attachments, and a tool's file link stranding the client's tool card.
- **Docker**: installs tzdata so the `TZ` environment variable takes effect.

## 📦 How to Upgrade

- **Source deployment**: run `cow update` for a one-click upgrade, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).
- **Desktop client**: check for updates and update with one click inside the client, or get the latest version from the [download page](https://cowagent.ai/download/).

**Release date**: 2026.08.12 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.5...2.1.6)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.6` · 2026-08-12 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
