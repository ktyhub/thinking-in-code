---
title: "open-webui v0.13.2"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.13.2"
version: "v0.13.2"
published: "2026-11-08"
type: "patch"
lang: "en"
---

# open-webui v0.13.2

### Fixed

- 🔓 **Chat over plain HTTP.** Opening Open WebUI over plain HTTP at a LAN or Docker address now loads new and existing chats instead of staying on a spinner with "crypto.randomUUID is not a function". [#33919](https://github.com/open-webui/open-webui/issues/33919)
- 📝 **Comments and Markdown editing over plain HTTP.** Creating, replying to and editing comments, and editing Markdown files containing rendered blocks such as Mermaid diagrams or callouts, no longer fail with the same UUID error. [Commit](https://github.com/open-webui/open-webui/commit/3c400952cbb30e8eb72652d83b2af2f75a3b9341)
- 🎛️ **Side Chat permission switch.** The Allow Side Chat switch is now visible even when Temporary Chat is off, so administrators can configure the two permissions independently. [#33920](https://github.com/open-webui/open-webui/pull/33920)

---

> **Source** [open-webui/open-webui](https://github.com/open-webui/open-webui) · `v0.13.2` · 2026-11-08 · [upstream release](https://github.com/open-webui/open-webui/releases/tag/v0.13.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
