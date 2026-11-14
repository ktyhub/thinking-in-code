---
title: "MaxKB v2.10.6-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.6-lts"
version: "v2.10.6-lts"
published: "2026-09-03"
type: "patch"
lang: "en"
summary: "Security: Fixed a security vulnerability where Chat file uploads could spoof APPLICATION attribution and be read anonymously, allowing content injection into the application namespace."
---

# MaxKB v2.10.6-lts

### Security Vulnerability Fixes
- Security: Fixed a security vulnerability where Chat file uploads could spoof APPLICATION attribution and be read anonymously, allowing content injection into the application namespace.
- Security: Fixed a security vulnerability where document/paragraph migration only validated source knowledge base permissions, leading to cross-tenant content injection and RAG poisoning.
- Security: Fixed a security vulnerability where XLSX embedded image decompression lacked a pixel count limit, allowing authenticated users to trigger memory-exhaustion denial of service (DoS).
- Security: Fixed a security vulnerability where problem/batch_association lacked ownership validation, leading to cross-tenant paragraph content disclosure (IDOR).
- Security: Fixed a security vulnerability where the anonymous application profile endpoint over-serialized data, causing sensitive configuration disclosure (/chat/api/application/profile).
- Security: Fixed a security vulnerability where the password reset verification code endpoint lacked a guessing attempt limit, allowing unauthorized account takeover.
- Security: Fixed a security vulnerability where the function library sandbox could be bypassed (dlopen stack check bypassable + dlsym(RTLD_NEXT) not intercepted) (CVE-2026-79919).
- Security: Fixed a security vulnerability where Python's support for file descriptor form os.execve(fd,...) could be leveraged to enter the libc fexecve call path, causing sandbox bypass (NVDB-CAIVD-2026208648).
- Security: Fixed a security vulnerability where guest session ownership validation was missing, leading to cross-guest-session writes (Session Integrity Violation).
- Security: Fixed a security vulnerability where the default hardcoded Django SECRET_KEY allowed signed tokens to be forged offline, resulting in unauthorized file access.

### New Features
- Workflow Default Model Settings
In the MaxKB v2.10.6 LTS community edition, workflow default model settings have been introduced for agent workflows, knowledge base workflows, and workflow tools. Previously, multi-AI-node workflows required opening each node individually to modify model configurations, which was relatively cumbersome. Now, a single configuration takes effect globally, significantly reducing maintenance costs and improving the consistency and efficiency of batch model switching. Core features of the default model settings include:
- A workflow-level default model configuration entry;
- Newly created nodes automatically inherit the default model;
- Nodes support flexible model selection modes (Default / Custom / Reference Variable, depending on node type);
- The default model can be applied to all nodes with one click, uniformly switching all nodes' model sources to the default model;
- A single change to the default model takes effect across multiple nodes;
- Configuration completeness is ensured before publishing.
- Tencent Hunyuan & Tencent Cloud Providers Merged into the New "Tencent Cloud" Provider (Integrated with Tencent Cloud TokenHub)
Due to adjustments by Tencent Cloud, in the MaxKB v2.10.6 LTS community edition, the Tencent Hunyuan and Tencent Cloud providers have been merged into a new "Tencent Cloud" provider. All models previously configured based on the Tencent Hunyuan or legacy Tencent Cloud provider integration will no longer be usable after the upgrade. After upgrading, please go to the "Model Providers" page, select "Tencent Cloud" from the provider list, and reconfigure your model access information according to the TokenHub integration requirements. Once configured, the models will be available again.
Feature Optimizations
- Knowledge Base: The knowledge base/document list selector now supports search when migrating documents/paragraphs.
- Agent: The knowledge base component in the user input area now supports search.
- Agent: In the "Add to Knowledge Base" feature on the conversation log page, the knowledge base and document list selectors now support search.

### Bug Fixes
- Knowledge Base: Fixed an issue where importing a CSV file with over-sized cell content resulted in empty reads and a "field larger than field limit (131072)" error in the backend (#6756).
- Knowledge Base: Fixed an issue where importing Excel spreadsheets without recognizing data boundaries caused large numbers of empty columns to be imported, leading to import timeouts (#6355).
- Knowledge Base: Fixed an issue where entering 33 consecutive "-" characters in full-text search during hit testing caused a search error.
- Agent: Fixed an issue where conversations errored when output content contained null characters (\u0000, \x00, etc.) (#6722).
- Agent: Fixed an issue where AI nodes in advanced agents could not receive data passed from previous nodes when using the Ascend MindIE large model (#6681).
- Agent: Fixed an issue where calling the model errored when the "Role Setting" of an advanced orchestration AI node was empty (#6662).
- Agent: Fixed an issue where, after invoking a tool, the execution source shown in tool execution records displayed the tool name instead of the agent name (#6647).
- Agent: Fixed an issue where files uploaded to workflow knowledge bases were temporary files, causing preview and download failures after the files were cleaned up (#6785).
- Agent: Fixed an issue where an agent used as a skill of an AI conversation node could not pass parameters other than message.
- Agent: Fixed an issue in advanced agents where the default knowledge base could not be set after changing the component type of user input parameters to knowledge base.
- Agent: Fixed an issue where an error occurred when clearing chat logs (#6690).
- Model: Fixed an issue where the MiniMax H3 text-to-video model reported errors during use after successful integration.

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.6-lts` · 2026-09-03 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.6-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
