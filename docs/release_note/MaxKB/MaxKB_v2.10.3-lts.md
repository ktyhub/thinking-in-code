---
title: "MaxKB v2.10.3-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.3-lts"
version: "v2.10.3-lts"
published: "2026-07-03"
type: "patch"
lang: "en"
summary: "Knowledge Base: Added visual progress display for file uploads; files that failed to upload support one-click re-upload. · Agent: Supported batch configuration for agent conversation log cleanup strategies (#6213)."
---

# MaxKB v2.10.3-lts

# Feature Optimizations
- **Knowledge Base**: Added visual progress display for file uploads; files that failed to upload support one-click re-upload.
- **Agent**: Supported batch configuration for agent conversation log cleanup strategies (#6213).
- **Agent (X-Pack)**: Enabled voice input capability for WeCom robot integration.
- **Agent**: Optimized copywriting on the overview page to align its visual style with the homepage.
- **Role Permissions (X-Pack)**: Added homepage view permission configuration for regular users and workspace administrators.

# Bug Fixes
- **Agent (X-Pack)**: Fixed the 500 error in conversations caused by multiple agents sharing the same `chat_session_id` when integrated with WeCom (#6325).
- **Agent**: Fixed the issue where variables for interface parameters in advanced agents could not be assigned values during debugging (#6271).
- **Agent (X-Pack)**: Fixed the UI issue where the mobile input box covers the like and dislike buttons after enabling the disclaimer (#6249).
- **Agent**: Fixed invalid visibility control logic for external user input parameters.
- **Q&A Page**: Fixed abnormal style rendering of video content in replies on mobile devices.
- **Knowledge Base**: Fixed parsing errors when uploading PDF files containing special characters.
- **Knowledge Base**: Fixed the issue that video files stored in the knowledge base were not exported during knowledge base export.
- **Knowledge Base**: Fixed permission errors that prevented regular users from loading the tool list via MCP call nodes in workflow knowledge bases.
- **Knowledge Base**: Fixed missing reference links for tools inside loop blocks after importing workflow knowledge bases, which made tool nodes unavailable.
- **Knowledge Base**: Fixed occasional duplicate display of segmented content in the segment preview after document upload.
- **Models**: Fixed errors when invoking the Qwen3-VL-Reranker-8B reranking model from the vLLM provider in multi-path recall nodes (#6321).
- **System Settings (X-Pack)**: Fixed the brief flash of the default MaxKB Logo after page refresh when a custom Logo is configured (#6295).

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.3-lts` · 2026-07-03 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.3-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
