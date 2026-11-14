---
title: "MaxKB v2.10.7-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.7-lts"
version: "v2.10.7-lts"
published: "2026-10-15"
type: "patch"
lang: "en"
---

# MaxKB v2.10.7-lts

## Enhancements
- Knowledge Base: Special characters such as \, /, ?, *, and [] are now disallowed when renaming documents.
- Agent: A confirmation prompt is now shown when deleting conversation history, to prevent accidental deletion.
- Q&A Page: Tables in AI responses now support horizontal scrolling when the number of columns exceeds the visible width.

## Bug Fixes
- Agent: Fixed an issue where content wrapped in html_render tags was rendered blank when exported to PDF or image (#7222).
- Agent: Fixed an issue where long-term memory could be saved without specifying a trigger interval in scheduled trigger mode.
- Agent: Fixed incorrect field name labels in the long-term memory settings panel.
- Agent: Fixed an issue where, when adding agents created at nearly the same time as skills in an AI conversation node, only one of them took effect.
- Agent: Fixed an issue where the execution details of workflow tools were displayed in the wrong order in conversation records (#7221).
- Agent: Fixed an issue where using the long-form writing agent template from Template Center resulted in a "conversation does not exist" error during chat.
- Agent: Fixed an issue where clicking the like or dislike button below an answer caused a system error.
- Agent: Fixed an issue where, after selecting a tool in an MCP node, parameters not marked as required were all treated as required.
- Agent: Visibility rules for user input parameters — optional parameters now filter out unavailable parameters from global variables (#7224).
- Trigger: Fixed an issue where scheduled trigger tasks did not execute and a backend error occurred when saving.
- Knowledge Base: Fixed an issue where, after importing a PDF containing images, the image links were parsed but the images were not displayed.
- Knowledge Base: Fixed an issue where importing large documents into a general knowledge base failed (#7062).
- Knowledge Base: Fixed an issue where the tools bundled with a Template Center template became unavailable after the template was applied in a workflow knowledge base (#7302).
- Knowledge Base: Fixed an issue where full-text search only returned content that exactly matched the keyword (#7234).

## Security Fixes
- Security: Fixed a vulnerability where the signing key for Celery task messages could be derived, leading to remote code execution (NVDB-CAIVD-2026894112).
- Security: Fixed a missing function-level authorization (BFLA) vulnerability in the admin oss/get_url endpoint, which could lead to unauthorized access and SSRF (NVDB-CAIVD-2026080673).
- Security: Fixed a vulnerability where chat_record_id could be used to overwrite other visitors' conversation records (session integrity).
- Security: Fixed a vulnerability where the like and dislike endpoints still accepted cross-client operations.
- Security: Fixed an Eval injection vulnerability in the "Init Param" validation rules of custom tools, which allowed arbitrary JavaScript execution.
- Security: Fixed a path traversal vulnerability in knowledge base names that allowed writing arbitrary .xlsx files and poisoning instance-wide import templates.
- Security: Fixed an account takeover vulnerability.
- Security: Fixed an unauthenticated SSRF vulnerability in the chat file proxy caused by an incomplete host denylist.
- Security: Fixed a vulnerability where the MCP configuration URL was not validated, allowing users with the USER role to perform SSRF against arbitrary addresses and read back responses (direct connection from the web process, bypassing the sandbox).
- Security: Fixed a vulnerability where the login CAPTCHA was not destroyed after successful validation, enabling unauthenticated online password brute-forcing (admin takeover).
- Security: Fixed a vulnerability where authenticated users could access cross-tool execution records through an unscoped cache hit.

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.7-lts` · 2026-10-15 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.7-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
