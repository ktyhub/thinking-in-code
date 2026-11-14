---
title: "MaxKB v2.10.4-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.4-lts"
version: "v2.10.4-lts"
published: "2026-07-16"
type: "patch"
lang: "en"
summary: "Vulnerability: Fixed a system file permission flaw that allowed anonymous access to resources"
---

# MaxKB v2.10.4-lts

# Security Vulnerability Fixes
- **Vulnerability**: Fixed a system file permission flaw that allowed anonymous access to resources;
- **Vulnerability**: Fixed an IDOR vulnerability in admin chat logs which allowed bypassing application path authentication to read cross-application chat records;
- **Vulnerability**: Added independent authorization verification mechanism for agent and workflow tool scheduling;
- **Vulnerability**: Fixed missing host validation when UpdateStoreTool fetches external app store URLs;
- **Vulnerability**: Fixed the horizontal privilege escalation issue that enabled users to access and modify unauthorized documents and segments across knowledge bases;
- **Vulnerability**: Fixed expired agent API keys being usable at the `/chat/api/mcp` endpoint;
- **Vulnerability**: Fixed horizontal privilege escalation caused by defective MCP tool authorization logic;
- **Vulnerability**: Fixed exposure of application IDs on the homepage ranking page, which could lead to unauthorized calls to other users' application nodes;
- **Vulnerability**: Fixed the risk of cross-workspace privilege escalation when viewing and editing model parameter forms;
- **Vulnerability**: Fixed prompt injection vulnerability to mitigate the risk of agent command execution;
- **Vulnerability**: Improved internal IP validation for web document import and sync crawlers to remediate SSRF risks.

# Bug Fixes
- **Agent**: Fixed the issue that newly added vision models for image understanding nodes in advanced agents were not displayed in the model list in real time (#6402);
- **Agent**: Fixed incorrect prompt messages during conversations after deleting the LLM bound to basic agents;
- **Agent**: Fixed failures when agents call shared models with the error "Model does not exist";
- **Knowledge Base**: Fixed misclassification of segmented text as table content when there is no blank line between tables and subsequent content in Word files (#6396);
- **Knowledge Base**: Fixed cross-document contamination of segment position data when dragging and reordering document segments (#6373);
- **Homepage**: Fixed the issue where agents without user permissions could be searched by name on the ranking detail page;
- **Trigger**: Fixed duplicated task display in task details of scheduled trigger lists;
- **Trigger**: Fixed missing default value passing for user input parameters of advanced agents under trigger scenarios, resulting in empty parameter values (#6320);
- **Trigger**: Fixed parameter passing errors when agent user inputs include toggle-type parameters in triggers;
- **User Management**: Fixed the issue that the user listing API only returns the first 200 users and cannot fetch all user records (#6375).

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.4-lts` · 2026-07-16 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.4-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
