---
title: "MaxKB v2.10.2-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.2-lts"
version: "v2.10.2-lts"
published: "2026-06-18"
type: "patch"
lang: "en"
summary: "Q&A Page: Optimized voice input logic to append transcribed text instead of overwriting existing input content (#6212) · Q&A Page: Added a clear input content function after users type content in the input box (#6212)"
---

# MaxKB v2.10.2-lts

# Feature Optimizations
- **Q&A Page**: Optimized voice input logic to append transcribed text instead of overwriting existing input content (#6212);
- **Q&A Page**: Added a clear input content function after users type content in the input box (#6212);
- **Q&A Page**: Users can normally send new questions after switching to Session 2 while Session 1 is generating replies;
- **Agent**: Files submitted via forms can be downloaded from conversation logs (#5271);
- **Agent**: The `sendMessage` method in the `html_render` tag of advanced agent opening remarks supports passing API parameters and user input parameters;
- **Agent**: Added tool source information display in the operation menu of tool nodes for advanced agents;
- **Agent (X-Pack)**: Added permission control configuration for conversation sharing in display settings;
- **Agent (X-Pack)**: Input "/new" to automatically create a brand-new conversation for third-party application integrations;
- **Knowledge Base**: Columns in the document list support manual width adjustment;
- **Knowledge Base**: Added a creator field to the document list, and the creator of newly uploaded documents will be recorded (#5240);
- **Knowledge Base**: Provided two export modes allowing users to choose whether to export original source files when exporting a knowledge base (#6137);
- **Knowledge Base**: Optimized pagination logic for tag management to prevent frontend lag caused by excessive data under a single tag;
- **Models**: Added support for the Imagen image generation model under the Gemini provider (#5234);
- **Models**: Added support for the VEO video generation model under the Gemini provider (#5234);
- **Models**: Updated the model dropdown list of all model providers to show the latest models;
- **Permission Management**: Users who only have tool view permission are prohibited from accessing the tool editing page;
- **Workspace (X-Pack)**: Optimized lazy loading performance of the workspace list.

# Bug Fixes
- **Q&A Page**: Fixed the issue that the display of node execution progress was not controlled by the execution detail toggle switch;
- **Q&A Page**: Hide node execution progress when AI reply is paused, and resume displaying progress after clicking Continue;
- **Agent (X-Pack)**: Fixed the failure to preview PDF files from knowledge sources in third-party integrated conversations (#6202);
- **Tools**: Fixed the missing required field marker for the name input box when creating a new MCP tool;
- **Knowledge Base**: Fixed corrupted downloaded DOCX source files after upgrading from v2.3.1 to v2.10.1 (#6238);
- **Knowledge Base**: Fixed execution errors thrown by the Write-to-Knowledge-Base node during workflow debugging;
- **Models**: Fixed errors when adding the qwen3-tts-flash model from Alibaba Cloud Bailian provider (#6236);
- **Login Settings**: Fixed the vulnerability allowing Community Edition users to log in without captcha verification (#6214).

---

> **Source** [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · `v2.10.2-lts` · 2026-06-18 · [upstream release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.2-lts)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
