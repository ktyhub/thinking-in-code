---
title: "MaxKB v2.10.1-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.1-lts"
version: "v2.10.1-lts"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "Knowledge Base: Fixed the issue where the QA pair template content was displayed incorrectly when downloaded."
---

# MaxKB v2.10.1-lts

# Bug Fixes
- **Knowledge Base**: Fixed the issue where the QA pair template content was displayed incorrectly when downloaded.
- **Agent**: Fixed the issue where questions could not be sent during debugging for agents with user input parameters.
- **Agent**: Fixed the required field error when directly asking a question with the default value kept for an external toggle parameter whose default value is `false`.
- **Agent**: Fixed the issue where clicking the "More Parameters" button during debugging/conversation affected the state of external toggle parameters.
- **Agent**: Fixed the issue where the Skill execution directory could be randomly cleared under concurrent scenarios (#6185).
- **Agent**: Fixed the issue where variables referenced in the system prompts of Image Understanding and Video Understanding nodes were not resolved (#6180).
- **Tools**: Fixed the dependency not found error when using `pymysql` in Python scripts (#6182).

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.1-lts` · 2026-06-10 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.1-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
