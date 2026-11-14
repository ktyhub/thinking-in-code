---
title: "open-webui v0.13.3"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.13.3"
version: "v0.13.3"
published: "2026-11-08"
type: "patch"
lang: "en"
---

# open-webui v0.13.3

### Added

- 🦾 **Agents in automations.** The automation editor now lets you choose a terminal and working folder, then select a coding agent available there. Scheduled runs use that saved terminal and folder, and check that the terminal and agent are still available before starting. Agent automations send their results to a chat; channel destinations remain available for ordinary models. [Commit](https://github.com/open-webui/open-webui/commit/21fc016141c73a0e11b428c61bde20527bbc228a)
- 📂 **Change terminal and folder during a chat.** You can now choose a different terminal or working folder after sending messages, including in temporary chats. Both controls remain disabled while a reply is being generated. [Commit](https://github.com/open-webui/open-webui/commit/a518ff1630b74ed6edd62538c5da4bb26cc6dd20)
- 🇧🇷 **Brazilian Portuguese translations.** Added missing translations for terminal and folder controls, Git actions, spreadsheet editing, voice notes, tab shortcuts, notification sounds and tool settings. Updated the explanations for document retrieval, tool permissions and voice settings. [#33945](https://github.com/open-webui/open-webui/pull/33945)

### Fixed

- 📂 **Files tabs follow terminal changes.** Switching a chat to another terminal now updates its open Files tabs to show that terminal's files, instead of leaving the previous terminal's folders on screen. With a terminal set to "Per chat", the Files tab also switches to the chat's own files after the first message. [#33954](https://github.com/open-webui/open-webui/pull/33954)
- 🧭 **Agents in unsupported model pickers.** Connecting a terminal no longer adds its coding agents to Admin Models, base-model selectors, Arena candidates, task-model settings, group defaults, sub-agent settings, channel mentions or the Playground. Notes also stop choosing a terminal agent for title generation. Agents cannot be saved or imported as custom models or their base models, and their chat menu no longer offers Edit. [Commit](https://github.com/open-webui/open-webui/commit/21fc016141c73a0e11b428c61bde20527bbc228a), [Commit](https://github.com/open-webui/open-webui/commit/6d3123b5b4a90962bff44c69c7e0bae0c65557d5)
- 🔌 **Agent list after switching terminals.** Changing terminals immediately removes the previous terminal's agents from the chat's model list while the new list loads. A model-list request from a chat you have left can no longer replace the current list. [Commit](https://github.com/open-webui/open-webui/commit/21fc016141c73a0e11b428c61bde20527bbc228a)
- 📋 **Copy buttons over plain HTTP.** At a plain HTTP address on your local network, copying comment links, search links, shared-chat links, webhook URLs, chat IDs, Git branch names, commit hashes and spreadsheet cells now works. Copy Formatted Text preserves formatting, and copied text keeps its final line break. [#33939](https://github.com/open-webui/open-webui/pull/33939)
- 📝 **Clipboard prompts and Auto-Copy Response over plain HTTP.** Prompts using the clipboard placeholder now insert into chats and channels even when the browser blocks clipboard access, with a message explaining that the clipboard could not be read. Auto-Copy Response stays off and shows a permission message instead of silently failing to turn on; turning it off no longer requires clipboard access. [#33939](https://github.com/open-webui/open-webui/pull/33939)
- 🧠 **DeepSeek thinking mode with skills, knowledge and memories.** These chats no longer fail with a missing reasoning error when the connection's Provider is set to "llama.cpp". DeepSeek thinking mode still requires that setting; connections using "Default" are unchanged. [#33950](https://github.com/open-webui/open-webui/pull/33950)
- 🏷️ **Labels on grouped tool calls.** With Tool Call Labels enabled, a group of tool calls keeps the labels that are present even if one call has none. The unlabeled call shows its tool name instead of making the whole group lose its labels. [#33932](https://github.com/open-webui/open-webui/pull/33932)
- 💬 **Tool labels in later replies.** The model now sees the labels it wrote for earlier tool calls when continuing a reply or answering another message, removing a reason it could stop writing labels as the conversation continued. [#33953](https://github.com/open-webui/open-webui/pull/33953)
- 🔎 **Knowledge searches containing punctuation.** Searches in knowledge files now find text such as "Art. 40" when the model marks the period as literal punctuation, instead of returning no matches. [#33936](https://github.com/open-webui/open-webui/pull/33936)
- 🪟 **Side Chat with Temporary Chat disabled.** Leaving Enforce Temporary Chat switched on while disabling Temporary Chat no longer prevents users from sending and saving side chats or dragging an existing chat into the side panel. [#33930](https://github.com/open-webui/open-webui/pull/33930)
- 🏠 **Home folder tab title.** A Files tab at the connected machine's home directory now says "Home" instead of showing the directory name, including when reopening saved tabs. Other folders keep their names. [Commit](https://github.com/open-webui/open-webui/commit/241c8c0e47e19b0adeb13d577ca538d2252b0ad4)
- 🦙 **Missing Ollama in Docker images.** Building the image that includes Ollama now fails if Ollama was not installed, instead of producing an image that cannot start Ollama after its download failed. [#33944](https://github.com/open-webui/open-webui/pull/33944)
- 📄 **Errors after leaving a chat.** Closing or leaving a chat while its tab layout is being saved no longer fills the server log with an error report for the dropped connection. [#33929](https://github.com/open-webui/open-webui/pull/33929)

---

> **Source** [open-webui/open-webui](https://github.com/open-webui/open-webui) · `v0.13.3` · 2026-11-08 · [upstream release](https://github.com/open-webui/open-webui/releases/tag/v0.13.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
