---
title: "chatgpt-on-wechat 2.1.8"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.8"
published: "2026-09-11"
type: "patch"
lang: "en"
summary: "CowAgent is now a multi-Agent framework. You can create multiple Agents, each with its own role, to form a team and collaborate on complex tasks within a single session."
---

# chatgpt-on-wechat 2.1.8

🌐 [English](https://docs.cowagent.ai/releases/v2.1.8) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.8)

## 🤝 Multi-Agent Teams

CowAgent is now a **multi-Agent framework**. You can create multiple Agents, each with its own role, to form a team and collaborate on complex tasks within a single session. Supported on the Web console, the desktop client, and channel integrations:

- **Team management**: create and maintain Agents, configure name, responsibilities, default model, skills, and knowledge, and copy the setup from an existing Agent.
- **Resource isolation**: each Agent has its own workspace, memory, and sessions; the knowledge base and skills can be shared or kept independent.

<Frame>
  <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/team-overview.png" alt="Agent team" width="800" />
</Frame>

- **Group collaboration**: add multiple Agents to one session and use `@` to direct a message to a specific member, with each Agent using its own configured model.
- **Task delegation**: a group chat has a lead Agent that can hand a task off to the member best suited for it based on their responsibilities, with support for multi-level delegation and configurable scope, depth, and timeout.

<Frame>
  <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/agent-group-chat-demo.png" alt="Agent-team-group" width="800"/>
</Frame>

- **Multiple channel instances**: an IM channel of the same type can now run multiple instances, each bound to a single Agent or an Agent team. Supported on WeChat, WeCom smart bots, Feishu, DingTalk, QQ, Telegram, Slack, Discord, and more.

<Frame>
  <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/channel-config.png" alt="Agent-team-channel" width="800"/>
</Frame>

Thanks @AaronZ345 (#2975, #2973), @zkjqd (#3096), @cowagent (#3118)

Docs: [Agent Teams](https://docs.cowagent.ai/multi-agent/team)

## ⏰ Scheduled Task Upgrades

Scheduled tasks can now be created and managed from the console, with channel recipients and execution records added:

- **Manual task creation**: create, edit, and run tasks directly on the tasks page, and select the channel instance and recipient.
- **Channel recipient management**: maintain trusted recipients per channel instance, so a task can be delivered to a designated recipient rather than only the channel where it was created. Thanks @dajiaohuang (#3043)
- **Execution records**: a new execution-records page lets you review the history list and the details of each run. Thanks @mengluo04 (#3107)
- **Concurrent-update fix**: fixed tasks being lost on concurrent updates (Thanks @Whxuan0701 #3062).

<Frame>
  <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/scheduler-create.png" width="800"/>
</Frame>


## 📊 Context-Usage Visualization

Context consumption is now visible and controllable, making token cost easier to manage:

- **Context-usage view**: a ring view replaces the previous clear-context button and shows a full breakdown of what makes up the context.
- **Context actions**: below the ring view you can trigger smart compaction, clear the context, or set the maximum context size.
- **Context calculation**: the usage breakdown is derived automatically from the model's reported usage, with `agent_max_context_tokens` available as a user-configurable cost cap.

Thanks @chimyves (#3087), @sufan721 (#3079)

<Frame>
  <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/context-pie.png" width="700"/>
</Frame>


## 🤖 Model Capabilities

- **New models**: added `deepseek-flash` (DeepSeek V4.1 Flash), `gpt-6-astra`, `claude-fable-5-1`, `qwen3.8-flash`, `glm-5.3-flash`, `gemini-3.8-flash`, and the vision model `deepseek-v4-flash-vision-exp` (Thanks @a1094174619 #3094).
- **Model fallback**: configure a fallback model under Model Config > Primary Model, which takes over automatically when the primary model fails, preventing interruptions from a single provider outage. Thanks @alanyz106 (#3099)
- **Six new search providers**:
  - **AnySearch** (supports anonymous mode). Thanks @WangPan59 (#3083)
  - **Serply** (Google/Bing SERP API). Thanks @googio (#3071)
  - **Parallel Search**. Thanks @georgeatparallel (#3116)
  - **Tavily** (search API optimized for LLMs). Thanks @1printf (#3124)
  - **SearXNG** (self-hosted search engine, only the instance URL is required). Thanks @1printf (#3124)
  - **Keenable** (supports anonymous mode, no API key required). Thanks @ilya-bogin-keenable (#3122)

## 📝 Workspace File Editing

Workspace files, long-term memory documents, and skill definitions can now be edited and saved directly in the Web console and the desktop client:

- **In-place editing**: text files in the workspace, memory, and skill modules (Markdown, code, CSV, HTML, plain text, and more) can be edited directly, with keyboard shortcuts for `Ctrl+S` to save, `Esc` to exit, and `Tab` to indent.
- **Safe saving**: saving checks for conflicts against the file's modification time when it was opened; if the Agent changed the file in the meantime, you are asked first instead of overwriting it. Closing the panel, switching files, switching sessions, or switching workspaces prompts for confirmation on unsaved changes.

Thanks @zkjqd (#3076)

## 🛠 Improvements & Fixes

- **Skill fixes**:
  - hardened tar archive extraction (Thanks @Whxuan0701 #3063)
  - resolve a repository's default branch instead of defaulting to `main` when installing a skill (Thanks @aniruddhaadak80 #3080)
- **MCP enhancements**:
  - support tool-name prefixes (Thanks @georgeatparallel #3116)
  - recover expired Streamable HTTP sessions (Thanks @yiheng-kkk ad1f686)
  - reuse the subprocess and drop duplicate load logs when multiple Agents share the same `mcp.json`
- **Image generation**:
  - fixed ModelScope `IMAGE_CREATE` failing due to a parameter mismatch (Thanks @Anai-Guo #3097)
  - fixed empty base64 data being misdetected and producing an empty image file (Thanks @c020627 #3133, @justinguo7777 #3131)
- **Sub-Agent fix**: fixed a sub-Agent clearing the parent session's fallback settings (Thanks @alanyz106 #3111).
- **Structured chunking**: Markdown memory and knowledge documents are chunked by heading structure, with a prompt to rebuild when the chunk version is outdated. Thanks @alanyz106 (#3115)
- **Streaming error fix**: fixed seven model bots raising a `NameError` on streaming errors because the generator closed over the already-cleared exception variable, masking the real upstream error (Thanks @Anai-Guo #3128).
- **Memory index fix**: fixed blank text chunks causing the embeddings API to error and the entire memory index build to fail, falling back to keyword search (Thanks @6vision #3121).
- **Interruption detection**: pass `stop_reason` through to the Agent loop to distinguish a model ending on its own from being cut off by the output limit (Thanks @6vision #3074).
- **Attachment detection**: match keyword attachment URLs against the resolved path (Thanks @Whxuan0701 #3061).
- **Gateway attribution**: add source attribution to OrcaRouter gateway requests (Thanks @Marc-oss-hub #3058).
- **Proxy rendering**: set the Content-Type on `/chat` so the console renders correctly behind a reverse proxy with nosniff (Thanks @alanyz106 #3110).
- **Avatar handling**: fixed avatar upload failing due to text decoding, now reading raw bytes (Thanks @mengluo04).
- **Evaluation tool**: added a minimal Agent trajectory evaluation flow. Thanks @yanzhiliaoliao (#3100)
- **DingTalk channel**: disable the proxy on streaming connections and back off on reconnect, eliminating recurring errors.
- **Windows client**: fixed an update installation breaking the shortcut.
- **Desktop client**: fixed numeric Agent settings like max context tokens not being clearable (Thanks @zkjqd #3130).
- **Backup and restore**: backups now include all Agent workspaces, with fixes for nested archiving, restore layout, and version compatibility in multi-Agent setups.
- **Docs**:
  - added a Traditional Chinese entry to the Japanese docs language switcher (Thanks @c020627 #3072)
  - added Kimi-related links (Thanks @oriengy #2885)

## 📦 How to Upgrade

- **Source deployment**: run `cow update` for a one-click upgrade, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).
- **Desktop client**: check for updates and update with one click inside the client, or get the latest version from the [download page](https://cowagent.ai/download/).

**Release date**: 2026.09.11 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.7...2.1.8)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.8` · 2026-09-11 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
