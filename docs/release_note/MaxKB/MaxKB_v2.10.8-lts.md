---
title: "MaxKB v2.10.8-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.8-lts"
version: "v2.10.8-lts"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "■ Security (X-Pack): Fixed a vulnerability where the login authentication configuration endpoint did not redact sensitive fields, exposing third-party login app credentials (such as DingTalk app_key, corp_id, and…"
---

# MaxKB v2.10.8-lts

# Security Fixes
■ Security (X-Pack): Fixed a vulnerability where the login authentication configuration endpoint did not redact sensitive fields, exposing third-party login app credentials (such as DingTalk app_key, corp_id, and app_secret) in plaintext, which could lead to enterprise app takeover.

# Bug Fixes
■ Knowledge Base: Fixed an issue where special characters such as \, /, :, *, and ? could be entered when quickly creating a blank document.

■ Knowledge Base: Fixed an issue where users with only the workspace administrator role were redirected to the agent list page when clicking Import Document in a Feishu knowledge base.

■ Knowledge Base: Fixed an issue where headings with the same content but different levels in a Markdown file were incorrectly recognized during segmentation.

■ Knowledge Base: Fixed an issue where deleting a document after uploading it to a general knowledge base by a custom role returned an error indicating no permission.

■ Knowledge Base: Fixed an issue where the document tag retrieval node passed query parameters when retrieving the tags of the selected knowledge bases, causing the length limit to be exceeded when there were many knowledge bases (#7199).

■ Knowledge Base: Fixed an issue where an empty document list output by the data source tool caused the write to the knowledge base to fail.

■ Agent: Fixed an issue where the button for generating the system prompt was not automatically activated when the default model was used in an AI conversation node.

■ Agent (X-Pack): Fixed an issue where a regular user was prompted with no permission when clicking Save after creating a new agent that referenced a shared tool (#7360).

■ Agent: Fixed an issue where the page title did not display the agent name after refreshing the agent conversation page.

■ Agent (X-Pack): Fixed an issue where the shared tool list incorrectly displayed MCP and Skills items that should be filtered out when adding a tool component in a workflow (#7361).

■ Shared Tool (X-Pack): Fixed an issue where a regular user could not call a shared tool at workflow runtime after adding it to a workflow knowledge base.

■ Resource Management (X-Pack): Fixed an issue where the system administrator failed to import documents into a workflow knowledge base in Resource Management.

■ Resource Management (X-Pack): Fixed an issue where shared tools that had not been granted workspace authorization could be added when editing an agent under a workspace in Resource Management.

■ Resource Management (X-Pack): Fixed an issue where the system administrator failed to download the original document of a knowledge base and was prompted with no permission.

■ Resource Management (X-Pack): Fixed an issue where the document creator was empty when the system administrator created a document for a knowledge base in Resource Management.

■ Resource Management (X-Pack): Fixed an issue where the system administrator failed to view the release history of an agent.

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.8-lts` · 2026-10-22 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.8-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
