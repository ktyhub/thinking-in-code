---
title: "open-webui v0.10.2"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-07-01"
type: "patch"
lang: "en"
summary: "💭 Streamed reasoning display. Models that emit thinking or reasoning now show that content as it streams, and it renders correctly in the chat overview and in exported conversations. Commit, Commit, Commit, Commit"
---

# open-webui v0.10.2

### Added

- 💭 **Streamed reasoning display.** Models that emit thinking or reasoning now show that content as it streams, and it renders correctly in the chat overview and in exported conversations. [Commit](https://github.com/open-webui/open-webui/commit/0b75445ff9a42e37640c034812d0de9b84039e60), [Commit](https://github.com/open-webui/open-webui/commit/af1c0eee89810fa4c36e3eb7e4eba6de685bd7ca), [Commit](https://github.com/open-webui/open-webui/commit/4b08d65597e5b634b7191b0bd6d28feeafcc2a48), [Commit](https://github.com/open-webui/open-webui/commit/fa2abe4cb6a085a4c9045bf8d8ff4b6beffdef6a)
- 🗂️ **Folder uploads to knowledge bases.** Dragging a folder into a knowledge base, or syncing one, now recreates its subfolder structure instead of flattening everything into loose files. [#26130](https://github.com/open-webui/open-webui/issues/26130), [Commit](https://github.com/open-webui/open-webui/commit/2ed8934f5b2bc8a11c74ef2f34cdb62ef024809e)
- 🧠 **Memory system context toggle.** Administrators can now keep memory tools available while choosing not to add stored memories to the system context, using the new 'Memory System Context' toggle in admin settings. [Commit](https://github.com/open-webui/open-webui/commit/4067e357b2ff9e2fb59866d24656e832908fb6fe)
- 🧹 **Tidier automatic memories.** Automatically saved memories now focus on enduring details like preferences and goals and skip one-off things like meals, routine events, or passing mood unless you ask to remember them. [Commit](https://github.com/open-webui/open-webui/commit/80af65c24adac5140a39a2b5687a3b669b86719f)
- 🎙️ **Speech-to-text request format.** OpenAI-compatible speech-to-text can now send audio as either a multipart upload or base64 JSON, selectable in admin audio settings. [Commit](https://github.com/open-webui/open-webui/commit/989c6c13f5d4c5cc255aec77aea14725104d9cb3)
- 🧰 **API configs via environment.** Administrators can now set per-connection Ollama and OpenAI API configurations through the "OLLAMA_API_CONFIGS" and "OPENAI_API_CONFIGS" environment variables. [Commit](https://github.com/open-webui/open-webui/commit/19d8f03bd2c64013b510f2a0eeb3513d452814a3)
- 📡 **Provider failure events.** Failed Ollama and OpenAI-compatible provider requests now emit a structured event describing the error type, provider, and status, giving administrators clearer visibility into upstream failures. [Commit](https://github.com/open-webui/open-webui/commit/4351c78b1e45bb0c5824f9d9eb911b395e343646)
- 🏟️ **Arena models via environment.** Administrators can now define evaluation arena models through the "EVALUATION_ARENA_MODELS" environment variable. [#26174](https://github.com/open-webui/open-webui/issues/26174)
- ♿ **Clearer high-contrast sidebar selection.** With high-contrast mode enabled, the currently selected chat in the sidebar now stands out with stronger colors, making it easier to tell which chat is active. [#26469](https://github.com/open-webui/open-webui/issues/26469), [Commit](https://github.com/open-webui/open-webui/commit/52ee5cb1b3aa8a8ad40b23d72d82db7c3522dbf8)
- 🔄 **General improvements.** Various improvements were implemented across the application to enhance performance, stability, and security.
- 🌐 **Translation updates.** Translations for Thai, Portuguese (Brazil), Catalan, and Spanish were enhanced and expanded.

### Fixed

- 🛡️ **Security Advisory**: This release includes security and access-control fixes. We recommend updating production deployments at your earliest convenience. Not all security fixes in this version may be enumerated in the fixed section — some may be withheld for a short time to give administrators time to upgrade. [Advisories](https://github.com/open-webui/open-webui/security)
- 🔐 **Fewer unexpected logouts.** A single request returning an authorization error no longer signs you out while your session is still valid, since the app now confirms the session status before redirecting to login. [Commit](https://github.com/open-webui/open-webui/commit/56ee875e21cb3b137a5aa1eca6eb3c0731b14045)
- 🔒 **Web search domain filtering.** Domain allow and block rules for web search results are now matched against the host, closing a gap where some URLs could slip past the filter. [Commit](https://github.com/open-webui/open-webui/commit/688bda09fbe26619613aa487beda8059a5fd55ef)
- 🕵️ **Image prompt log privacy.** Image generation workflows are no longer written to server logs at the default log level, keeping user-authored prompt content out of operator-visible logs. [#26400](https://github.com/open-webui/open-webui/issues/26400), [Commit](https://github.com/open-webui/open-webui/commit/64b92ff08a09b1bf338d5d95b7bf6f9db0d7e857)
- 🗄️ **Safer database upgrades.** Upgrading an existing SQLite database no longer crashes during the user-table migration or corrupts saved user settings, resolving failures that could block startup or break login after an upgrade. [#26403](https://github.com/open-webui/open-webui/issues/26403), [Commit](https://github.com/open-webui/open-webui/commit/c416c6cad69cc4ce44faacdad87cc65862625fb4)
- ⚙️ **Saving settings as a non-admin.** Non-admin users can once again save their interface settings, such as the default model and theme, which previously failed with a server error while the interface incorrectly reported success. [#26627](https://github.com/open-webui/open-webui/issues/26627), [Commit](https://github.com/open-webui/open-webui/commit/9866a02863c12c466100aed832f0006225759493)
- 🕒 **Sidebar chat timestamps.** Chats in the sidebar now show when they were last active instead of when they were created, so the time label matches their position in the list and refreshes after each new message. [#26454](https://github.com/open-webui/open-webui/pull/26454), [#26451](https://github.com/open-webui/open-webui/issues/26451)
- 🎯 **Default model after refresh.** Your selected model is no longer cleared when you reload the page, as model selection now waits for the model list to finish loading. [Commit](https://github.com/open-webui/open-webui/commit/b6d4baeb7ea9bc83e5486ca98b3cae07d3869aa7)
- ⏳ **Tool dialogs no longer hang.** Dismissing a tool or function input dialog by clicking outside it now cancels the pending request instead of leaving the chat spinning indefinitely. [#26417](https://github.com/open-webui/open-webui/issues/26417), [Commit](https://github.com/open-webui/open-webui/commit/0016266c0652757e32aa44f2e1fb7311ac08db51)
- 🐍 **Reliable code execution loading.** Running Python code in chat now loads its runtime reliably, fixing sandbox startup failures that broke code execution and the Pyodide file viewer in recent releases. [#26625](https://github.com/open-webui/open-webui/pull/26625), [#26390](https://github.com/open-webui/open-webui/issues/26390)
- 🤖 **Models with null capabilities.** Chatting with a model whose capabilities are unset no longer fails with an error when the memory feature or automations are involved. [#26412](https://github.com/open-webui/open-webui/issues/26412), [Commit](https://github.com/open-webui/open-webui/commit/650b81792582268345073ce3757ac14356189d75), [Commit](https://github.com/open-webui/open-webui/commit/0016266c0652757e32aa44f2e1fb7311ac08db51)
- 🔎 **Searchable responses.** Chat search again finds assistant messages whose text is stored as structured output, which were previously skipped. [#26405](https://github.com/open-webui/open-webui/pull/26405)
- 🔔 **Chat notification previews.** Background chat completion notifications and toasts now show a clean response preview instead of appearing blank for messages stored as structured output. [Commit](https://github.com/open-webui/open-webui/commit/c98d8ecaccc7284573b050e88b3857c4aeba3860)
- 💾 **Banner and config startup.** Setting configuration such as "WEBUI_BANNERS" no longer causes a startup failure, since admin configuration values are now stored correctly regardless of their data type. [#26431](https://github.com/open-webui/open-webui/issues/26431), [Commit](https://github.com/open-webui/open-webui/commit/ab22fe64bdd10ba86845dcd46dfd7f619b22366f)
- 📑 **RAG Template visibility.** The RAG Template editor now stays visible in admin document settings even when Bypass Embedding and Retrieval is enabled, since the template still applies to document content in that mode. [#26126](https://github.com/open-webui/open-webui/issues/26126), [Commit](https://github.com/open-webui/open-webui/commit/8fe480250f649824441a7b4d725a502683134713)
- 🧬 **Editing derived models.** Editing a workspace model no longer clears its base model, including when that base is a preset or the model itself. [Commit](https://github.com/open-webui/open-webui/commit/092b5857bbda01be53619e26f42b1fa9b64a2b44), [Commit](https://github.com/open-webui/open-webui/commit/54f31c630afa75e9c81acaa048e1bd901254ba92)

---

> **Source** [open-webui/open-webui](https://github.com/open-webui/open-webui) · `v0.10.2` · 2026-07-01 · [upstream release](https://github.com/open-webui/open-webui/releases/tag/v0.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
