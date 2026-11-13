---
title: "chatgpt-on-wechat 2.2.1"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.2.1"
published: "2026-10-14"
type: "patch"
lang: "en"
summary: "🌐 English | 中文"
---

# chatgpt-on-wechat 2.2.1

🌐 [English](https://docs.cowagent.ai/releases/v2.2.1) | [中文](https://docs.cowagent.ai/zh/releases/v2.2.1)

## 📁 Artifacts

A new **Artifacts** page brings together the files created in your conversations, in both the Web console and the desktop client:

- **Automatic collection**: documents, web pages, images, and videos your Agents create show up in Artifacts automatically, on one timeline across all Agents.
- **Preview and trace back**: filter by type or Agent, search, preview in place, and jump back to the conversation that produced a file (Thanks @rudycelekli #3732).
- **Pin and manage**: pin, rename, or remove artifacts; a file card in a conversation takes you straight to it in Artifacts. The Artifacts page is hidden by default and can be turned on in the menu editor.

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-artifacts.png" alt="Artifacts" width="800" />

Related docs: [Web Console - Artifacts](https://docs.cowagent.ai/channels/web#artifacts)

## 🧭 Custom Menu & Console Improvements

- **Custom menu**: customize the groups, order, names, icons, and visibility of menu entries in the Web console and desktop client, with one shared configuration; artifacts and web links can be added as menu entries. See [Custom Menu](https://docs.cowagent.ai/extensions/custom-menu).
- **Token usage**: each reply shows the tokens actually used in that turn, including cache hits. Thanks @Harbor404 (#3440)
- **Mermaid diagrams**: Mermaid code blocks can switch to a rendered diagram, with zoom and full screen. Thanks @akushonkamen (#3620)
- **Faster long sessions**: long sessions with many tool calls open faster.
- **Fixes**: new session titles are no longer lost, and session actions on the default Agent no longer fail (Thanks @6vision #3625, #3617); settings saved together now all take effect, and workspace files are saved under the Agent they belong to (Thanks @aniruddhaadak80 #3454, #3488).
- **Collapsible sidebar**: the Web console sidebar can collapse into an icon rail.

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-custom-menu.png" alt="Custom menu" width="800" />

## 🔌 Open Agent Chat API

Agents are now available through a standard chat API, so you can connect third-party clients or call an Agent directly from your own systems:

- **Switch and key**: turn the API on and generate an API key in one click on the Config page; the key is kept when the API is turned off. It can also be enabled through the config file or environment variables (Thanks @AaronZ345 #3068, @Bdysj #3342).
- **Agent and model selection**: choose the Agent with `agent_id` and the model with `model`; without a model, the Agent's default model is used.
- **Multi-turn conversations**: by default the caller sends the full message history; with a `conversation_id`, the server keeps the history and only the latest message needs to be sent.
- **Complete output**: streaming and non-streaming responses, including reasoning, token usage, and the tool call trace (Thanks @AaronZ345 #3068, @c020627 #3545, #3588).

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-chat-api-config.png" alt="Chat API" width="700" />

Related docs: [Chat API](https://docs.cowagent.ai/extensions/chat-api)

## 📐 Prompt Caching & Context Cost

- **Claude prompt caching**: the system prompt, tool definitions, and conversation prefix are cached, greatly improving cache hit rates and cutting token cost and latency. The cache lifetime is configurable via `claude_cache_ttl`.
- **Headroom after trimming**: trimming the context now leaves headroom, so the prefix stays unchanged for the next several turns and long sessions keep hitting the cache.
- **Budget changes apply immediately**: changes to the context budget and maximum steps apply to running Agents right away, without clearing the session.
- **Tool records kept in compaction**: compacted turns keep a summary of their tool calls, so the model does not make up results (Thanks @tsumon #3634).
- **Fixes**: messages arriving during compaction are no longer lost, and orphaned tool results are cleaned up more accurately (Thanks @c020627 #3518, @rudycelekli #3652, #3653).

## 🤖 Model Capabilities

- **Claude extended thinking**: the connection stays open during long thinking, and when output stalls the request is retried at a lower thinking effort.
- **Custom headers**: custom model providers support `headers`, with support for OpenCode Go.
- **Model discovery**: when editing a model list, available models can be fetched from the provider automatically. Thanks @Harbor404 (#3441)
- **Reasoning content**: both `reasoning` and `thinking` fields are supported, and an unclosed `<think>` tag no longer cuts off the reply (Thanks @a1094174619 #3601, @fly0sheep-1734 #3538).
- **Fallback models**: the fallback model is reset at the start of each turn instead of staying in use.
- **OpenAI**: improved handling of the Responses API and streaming responses (Thanks @rudycelekli #3659, #3660, #3661, #3663, @aniruddhaadak80 #3486).
- **Model list**: fixed concurrent edits overwriting each other, custom primary models not taking effect, and capability tag matching (Thanks @rudycelekli #3577, #3662, #3666, @aniruddhaadak80 #3501).
- **Other providers**: fixed compatibility issues with MiniMax, ModelScope, Baidu ERNIE, and Azure DALL·E (Thanks @aniruddhaadak80 #3464, #3476, #3479, #3507, #3512, @rudycelekli #3678).
- **Error handling**: rejected requests are no longer resent, errors are recognized more accurately, and context usage shows real token counts (Thanks @c020627 #3442, #3443, #3445, @aniruddhaadak80 #3505, @6vision #3624).
- **Images**: image generation keeps the original format and prompt, and image understanding on macOS no longer upscales images (Thanks @aniruddhaadak80 #3503, #3504, @rudycelekli #3568).

## 🧠 Memory & Knowledge Base

- **Knowledge editing and skill authoring**: edit knowledge base pages directly in the console with the index updated automatically, write skills from scratch, and edit the files in a skill's directory. Thanks @zkjqd (#3377)
- **Hit-based ranking**: a new optional `memory.hit_boost` ranks frequently retrieved memories slightly higher. Off by default. Thanks @foreverjix (#3621)
- **Time decay**: applies only to daily memory files, so dated knowledge base pages are no longer ranked down (Thanks @fly0sheep-1734 #3376).
- **Indexing**: fixed content lost on very long lines, chunks exceeding the budget, and stale index entries after clearing notes (Thanks @fly0sheep-1734 #3585, @rudycelekli #3426, #3578, #3616).
- **Retrieval**: improved full-text search fallback, Unicode keywords, and handling of invalid parameters and vectors (Thanks @aniruddhaadak80 #3480, #3481, #3482, #3483, @rudycelekli #3559, #3656, #3658).
- **Memory writes**: failed writes can be retried, and session data from older versions can be imported (Thanks @aniruddhaadak80 #3406, @c020627 #3590, @rudycelekli #3387).
- **Knowledge base**: fixed graph paths on Windows and documents with upper-case extensions not showing, and tightened import path validation (Thanks @Lesereingrape #3332, @rudycelekli #3612, #3649, #3651).

## 🤝 Multi-Agent Collaboration

- **Permissions and delegation**: delegation and handoff keep the initiator's permission mode, and the receiving Agent re-checks the delegation allowlist, depth, and wait time (Thanks @c020627 #3541, #3546, #3547, #3548, #3552).
- **Default Agent aliases**: always resolved to the default Agent's real ID (Thanks @c020627 #3553, #3554).
- **Team sessions**: deleting a team session now removes it for every participant; fixed the model setting display and follow-up message delivery (Thanks @c020627 #3519, #3537, #3549, #3550, #3613).
- **Sub-agents**: stopping a task also stops its sub-agents; fixed prompt parsing (Thanks @rudycelekli #3637, #3638, #3639).
- **Sessions and projects**: fixed error handling for session settings and project paths (Thanks @c020627 #3551, @rudycelekli #3640, #3654).

## 🧩 Tools & Skills

- **File read/write**: the original file is kept when a write fails; fixed line ending detection, concurrent edits overwriting each other, and argument parsing (Thanks @aniruddhaadak80 #3365, #3404, #3413, @rudycelekli #3525, #3531, #3563, #3566, #3567, #3667).
- **Document parsing**: Word tables, Excel formulas, and PowerPoint tables are preserved in full (Thanks @rudycelekli #3393, #3394, #3560, #3629, #3631).
- **File search**: falls back automatically when the external search command fails; fixed filter rules, case handling, and special files (Thanks @aniruddhaadak80 #3400, @rudycelekli #3391, #3533, #3534, #3558, #3570, #3571, #3630, #3675, #3679).
- **Web fetch**: detects charsets and document types correctly, and limits transfer time and size (Thanks @aniruddhaadak80 #3401, #3478, @rudycelekli #3392, #3569, #3574, #3632, #3669, #3670, #3671).
- **Browser**: pages follow the window size (Thanks @zkjqd #3623); the bundled Chromium is detected correctly in Docker, and installation no longer needs `sudo` (Thanks @handoing #3743, #3744); fixed cleanup after failed launches, scrolling, and element interactions (Thanks @c020627 #3524, @aniruddhaadak80 #3490, @rudycelekli #3562, #3573).
- **Terminal**: fixed truncated multi-byte characters, misreported exit codes, and `.env` parsing (Thanks @rudycelekli #3530, #3564, #3668).
- **MCP**: commands such as `npx` and `uvx` start correctly on Windows (Thanks @6vision #3408); tools can be fetched with pagination, and structured results and errors are passed through (Thanks @rudycelekli #3672, #3673, #3674, @aniruddhaadak80 #3425); connection timeouts and config saving are more reliable (Thanks @aniruddhaadak80 #3414, #3452, #3466, #3469, @c020627 #3438, #3523, #3542, #3610, #3615).
- **Skills**: more GitHub directory layouts are supported; fixed install paths, directory loops, and YAML parsing (Thanks @aniruddhaadak80 #3379, @rudycelekli #3389, #3594, #3597, #3598, @c020627 #3516, #3682).
- **Scheduled tasks**: one-time tasks set in the past are rejected; fixed daylight saving time, task type validation, task file recovery, and delivery targets; compatible with Python versions below 3.9 (Thanks @aniruddhaadak80 #3359, #3374, #3375, #3429, @c020627 #3540, #3604, #3683, @rudycelekli #3390, #3526, #3532, #3575, #3576, #3593, #3636).

## 📡 Channels

- **WeChat**: more stable login; credentials are removed when an instance is deleted; fixed attachments with the same name overwriting each other and leftover temporary files (Thanks @c020627 #3277, #3544, #3581, #3589, #3622, @6vision #3609, @aniruddhaadak80 #3498, @rudycelekli #3635).
- **WeCom**: recovers automatically after a failed token refresh; fixed the WeCom Bot reply stream, image conversion, and duplicate callbacks; temporary files are cleaned up promptly (Thanks @c020627 #3345, #3435, #3529, #3611, #3614, @aniruddhaadak80 #3397, #3497, @rudycelekli #3645).
- **WeChat Customer Service**: retries automatically when saving the message cursor fails (Thanks @rudycelekli #3677).
- **WeChat Official Account**: fixed video replies being dropped and users getting no response after a passive reply (Thanks @aniruddhaadak80 #3360, #3411, @c020627 #3536, #3543, #3606).
- **Feishu**: Markdown image syntax inside code is kept as is (Thanks @huiq777 #3434); fixed token request timeouts and app re-registration (Thanks @aniruddhaadak80 #3358, @c020627 #3539).
- **DingTalk**: code blocks in card replies are kept as is (Thanks @huiq777 #3420); fixed send result checks and image captions being sent twice (Thanks @aniruddhaadak80 #3396, #3496, @c020627 #3432, #3517, #3586).
- **QQ**: sends files larger than 5 MB (Thanks @HnBigVolibear #3647); supports image replies; fixed reconnecting after a disconnect (Thanks @c020627 #3341, @aniruddhaadak80 #3405).
- **Telegram**: fixed formatted message handling stopping midway and link rendering (Thanks @fly0sheep-1734 #3522, @rudycelekli #3665, @aniruddhaadak80 #3416).
- **Slack / Discord**: retries automatically when sending fails (Thanks @aniruddhaadak80 #3415).
- **General**:
  - Expired attachments are no longer sent with the next message (Thanks @SEVEN-us #3407); fixed attachment concurrency, cache cleanup, and file extensions (Thanks @c020627 #3437, @rudycelekli #3561, #3644).
  - The deduplication cache is cleaned up periodically, so memory no longer keeps growing on long-running instances (Thanks @Bdysj #3340).
  - Fixed interrupted message handling, cancellation deadlocks, channel shutdown, and credentials being overwritten (Thanks @c020627 #3348, #3515, @aniruddhaadak80 #3373, #3395, #3410, @rudycelekli #3384, #3648, #3655).

## 🛡 Security Hardening

- **Permissions**: read-only mode now blocks git write operations it previously missed (Thanks @aniruddhaadak80 #3352, @drakeo338 #3357); dangerous operations such as command substitution, writes through arguments, and deleting the root directory are detected (Thanks @c020627 #3579, #3602, @aniruddhaadak80 #3506); outside full-access mode, the MCP config and session permissions cannot be changed.
- **Path access**: stricter path checks for uploads, static assets, skill uninstall, backup restore, and more, and credential files are blocked (Thanks @aniruddhaadak80 #3409, #3460, #3461, #3463, @c020627 #3446, @rudycelekli #3527, #3528, @Harbor404 #3436).
- **External resources**: a unified download size limit, with media URLs and certificates validated (Thanks @c020627 #3327, #3328, #3329, #3336, #3555, #3556, #3557, @rudycelekli #3428, @aniruddhaadak80 #3457, #3477).
- **Log redaction**: access tokens and secrets are no longer written to logs in plain text (Thanks @c020627 #3356, #3444, @aniruddhaadak80 #3369, #3399, #3511).
- **Robust config**: `.env` rejects values containing line breaks (Thanks @Lesereingrape #3344); config files with a BOM are supported, with stricter type checks and atomic writes (Thanks @c020627 #3412, #3433, #3447, #3448, @aniruddhaadak80 #3431, #3499, @rudycelekli #3641).

## 🛠 Other Improvements & Fixes

- **Artifacts**: fixed upgrades from older databases, Windows paths, and locating earlier messages (Thanks @Lesereingrape #3450, #3514, @aniruddhaadak80 #3402).
- **Agent execution**: fixed tool exceptions, the step limit overriding the answer, cancellation, and concurrency issues (Thanks @aniruddhaadak80 #3383, #3403, #3424, @c020627 #3582, #3583, #3587, @rudycelekli #3388, #3643, #3650).
- **Voice**: the text reply is still sent when text-to-speech fails; fixed timeouts and error handling in several voice services (Thanks @c020627 #3684, @aniruddhaadak80 #3330, #3363, #3491).
- **Plugins**: fixed plugin reloading, duplicate registration, empty messages, and the keyword and role plugins (Thanks @aniruddhaadak80 #3367, #3398, @c020627 #3520, #3521, #3584, @rudycelekli #3664, #3728).
- **Self-evolution**: snapshot restore and backups are more reliable (Thanks @rudycelekli #3385, #3657, @c020627 #3600).
- **Agent management**: deleting an Agent also removes its avatar and sessions (Thanks @c020627 #3580, #3603).
- **CLI and backup**: `/status` shows loaded MCP servers (Thanks @HnBigVolibear #3474); fixed backups, config loading, knowledge base listing, and updates in Git worktrees (Thanks @rudycelekli #3592, #3595, #3596, #3599, #3607).
- **Logs**: the Logs page loads more reliably, and live logs no longer drop lines (Thanks @c020627 #3349, @rudycelekli #3642).
- **Chinese conversion**: corrected the Simplified–Traditional Chinese mapping table (Thanks @aniruddhaadak80 #3347).
- **Docker**: the Compose template enables the Web console by default, so models can be configured in the console after the first start.
- **Desktop client**: shortcuts are restored after reinstalling, and the update channel is kept when using a custom update source.
- **Docs**:
  - Documented the data directory for Docker upgrades (Thanks @Frank-zhu2000 #3680).
  - Fixed links on the Japanese models page (Thanks @pratikgx #3681).
  - Aligned the MCP docs with the console wording (Thanks @c020627 #3418).

## 📦 How to Upgrade

- **Source deployment**: run `cow update` for a one-click upgrade, update from the version menu in the Web console sidebar, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).
- **Desktop client**: check for updates and update with one click inside the client, or get the latest version from the [download page](https://cowagent.ai/download/).

**Release date**: 2026.10.14 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.2.0...2.2.1)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.2.1` · 2026-10-14 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
