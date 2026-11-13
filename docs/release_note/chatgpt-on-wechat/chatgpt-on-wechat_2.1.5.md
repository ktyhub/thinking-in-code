---
title: "chatgpt-on-wechat 2.1.5"
project: "chatgpt-on-wechat"
repo: "zhayujie/chatgpt-on-wechat"
tag: "2.1.5"
published: "2026-07-29"
type: "patch"
lang: "en"
summary: "🌐 English | 中文"
---

# chatgpt-on-wechat 2.1.5

🌐 [English](https://docs.cowagent.ai/releases/v2.1.5) | [中文](https://docs.cowagent.ai/zh/releases/v2.1.5)

## 🗂 Workspace & File Preview

The chat page gains a visual view of the workspace: documents, web pages, and images the Agent produces can be previewed in place. Both the Web console and the desktop client support it.

- **Workspace browsing**: browse the files under the workspace directory from the panel, with search and download to local.
- **File preview**: HTML pages, documents, and images open directly in the side panel, and file paths in a reply are rendered as clickable cards.
- **File references**: drag a workspace file into the conversation, or use `@` in the input box to reference files and directories and pull them into the context.

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/workspace-file-preview-demo-en.png" width="800" />

## 🔧 Core Tool Improvements

A systematic pass over file search, read, write, edit, and shell tools, strengthening the Agent's file handling and coding abilities.

- **New file search tool**: `search_files` searches the workspace by content or by file name, backed by ripgrep by default — markedly faster on large directories. Thanks @Maaayhan (#2982)
- **Line-numbered read output**: `read` output now always carries line numbers, making it easier to locate and cite specific lines.
- **More accurate edits**: `edit` no longer rewrites the surrounding indentation on a fuzzy match, and no longer lands on the wrong occurrence when the text repeats; replace-all was added; a file modified outside the Agent is now flagged.
- **Write-time syntax checks**: `write` / `edit` validate the format of structured files before writing, and parse source files to report syntax errors back to the Agent.
- **Background commands**: `bash` can run a command in the background, for long-running work such as starting a service or following logs; the default timeout for foreground commands was raised.
- **Cancellation takes effect immediately**: clicking stop or running `/cancel` terminates the command that is currently running.

Docs: [File Search](https://docs.cowagent.ai/tools/search-files)

## 🧠 Context Management

- **Context compaction**: the new `/compact` command summarizes and compacts the conversation context on demand, effectively cutting token usage.
- **Unified commands**: `/clear` now uniformly clears the current session's context, with `/context clear` kept as an alias.
- **Larger default window**: the default context limit was raised, so long conversations start trimming later.

Docs: [Context Management](https://docs.cowagent.ai/memory/context)

## 🖥 Desktop Client

- **Native on Mac**: fixed the macOS arm64 installer carrying an x64 backend, substantially speeding up the main process and the browser tool on Apple Silicon machines.
- **Feishu channel added**: fixed the Feishu channel missing from the client. The Feishu SDK is now a trimmed dependency (about 1 MB) downloaded on demand the first time the channel is enabled. Thanks @EvanProgramming (#2988)
- **Update prompt**: the update dialog for a given version only opens automatically once.
- **Bundled search backend**: the Windows client ships with ripgrep, so file search works out of the box.

Download: [CowAgent Desktop](https://cowagent.ai/download/)

Docs: [Desktop Client](https://docs.cowagent.ai/guide/desktop)

## ✨ One-Click Prompt Optimization

The Web input box can now expand what you typed into a more complete and explicit instruction, and the optimization rules support custom templates. Thanks @sufan721 (#2989)

## 🔒 Security Hardening

- **MCP and file-write hardening**: fixed an attack chain exploitable through prompt injection — malicious content could lead the Agent into rewriting the MCP config, and from there run arbitrary commands and steal keys. Thanks @Correctover (#2968)
- **Credential file protection**: fixed the `edit` tool bypassing credential protection to read and write `~/.cow/.env`.

## 🛠 Improvements & Fixes

- **bash config honored**: fixed `tools.bash.timeout` and `tools.bash.safety_mode` in `config.json` being ignored. Thanks @EvanProgramming (#2986)
- **Memory workspace path**: fixed the workspace path being resolved incorrectly in the global memory config. Thanks @Maaayhan (#2992)
- **Conversation history protection**: fixed memory index self-repair that could clear conversation history along with it.
- **Session deletion**: fixed a reply still in flight writing a deleted session back into the list.
- **Browser launch**: fixed launching a duplicate instance when the browser was already running.
- **Accurate tool results**: fixed misleading failures from several tools — exit codes from `grep` / `find` judged wrong, browser scripts falsely reported as syntax errors, relative image paths failing to resolve — reducing pointless retries.

## 📦 How to Upgrade

- **Source deployment**: run `cow update` for a one-click upgrade, or pull the latest code and restart. See the [upgrade guide](https://docs.cowagent.ai/guide/upgrade).
- **Desktop client**: check for updates and update with one click inside the client, or get the latest version from the [download page](https://cowagent.ai/download/).

**Release date**: 2026.07.29 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.1.4...2.1.5)

---

> **Source** [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) · `2.1.5` · 2026-07-29 · [upstream release](https://github.com/zhayujie/CowAgent/releases/tag/2.1.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
