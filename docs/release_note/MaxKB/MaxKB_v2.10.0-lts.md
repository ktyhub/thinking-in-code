---
title: "MaxKB v2.10.0-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.0-lts"
version: "v2.10.0-lts"
published: "2026-06-04"
type: "minor"
lang: "en"
summary: "Homepage: Added workspace homepage statistics, enabling administrators to overview all workspace resources, operation monitoring trends and resource usage rankings."
---

# MaxKB v2.10.0-lts

# New Features
- **Homepage**: Added workspace homepage statistics, enabling administrators to overview all workspace resources, operation monitoring trends and resource usage rankings.
- **Knowledge Base**: Added customizable terminology library; custom terms are prioritized during document word segmentation and retrieval (#5031).
- **Agent**: Full multimodal input support for AI Conversation nodes (#5276).
- **Agent**: User input parameters can be displayed inline directly within input boxes for configuration.
- **Agent**: Visibility condition configuration available for parameters of user input and form collection nodes to realize linkage between fields.
- **System**: Support for custom language packs; custom locale files can be placed under `/opt/maxkb/local/locales` inside MaxKB container, and custom languages become selectable after service restart (#5120).

# Feature Optimizations
- **Q&A Page**: Hide user input parameters when starting a new conversation (#5298).
- **Agent**: Display the name of currently running node alongside AI responses on Q&A page (#5092).
- **Agent**: Added visibility toggle for parameters inside form collection nodes.
- **Agent**: Added output parameter `Result List for Direct Reply` for multi-recall nodes.
- **Knowledge Base**: Freeze operation buttons at top-right corner during document segmentation preview (#965).
- **Knowledge Base**: Render segmented content in Markdown format on segmentation preview.
- **Models**: MiniMax provider newly supports text-to-image, text-to-video and image-to-video models.
- **Models**: Alibaba Cloud Bailian added multimodal embedding model support (#5142).
- **Models**: Alibaba Cloud Bailian supports Wan2.7 image-to-video model (#5232).
- **Models**: Parameter configuration is available for reranking models of all providers.
- **Role Management (X-Pack)**: Split agent creation permission and copy permission into independent permission bits (#5284).

# Bug Fixes
- **Security Vulnerability**: Fixed post-authentication RCE vulnerability caused by MCP permission bypass in MaxKB.
- **Knowledge Base**: Fixed failure to upload documents in workflow knowledge base without corresponding workflow authorization (#5296).
- **Agent**: Fixed abnormal display for embedded mobile layout, floating window layout and shared page style (#6130).
- **Agent**: Fixed issue where all ECharts charts get overwritten by the first chart after page refresh when multiple charts are generated in one conversation.
- **Agent**: Fixed uploaded files disappearing after page refresh once conversation ends in advanced agent (#5253).
- **Agent**: Fixed exported conversation logs only showing username instead of full name, hindering user matching.
- **Shared Knowledge Base (X-Pack)**: Fixed empty result after importing to create shared knowledge base (#5274).
- **User Management**: Fixed validation error when admin resets user passwords (#5301).
- **System Login (X-Pack)**: Fixed missing operation logs upon third-party user login.

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.0-lts` · 2026-06-04 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.0-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
