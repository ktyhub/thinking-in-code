---
title: "Scrapling v0.4.1"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.1"
version: "v0.4.1"
published: "2026-02-27"
type: "patch"
lang: "en"
summary: "A new update with many important changes"
---

# Scrapling v0.4.1

**A new update with many important changes**

## 🚀 New Stuff and quality of life changes
- **Improved regex precision** for Cloudflare challenge detection (Thanks to @Rinz27 [#133](https://github.com/D4Vinci/Scrapling/pull/133))
- **Improved the speed and efficiency** of the Cloudflare solver. Now it is nearly twice as fast.
- **Improved the Cloudflare solver** to handle the case where websites sometimes show the Cloudflare page twice before redirecting to the main website.
- **Improved the stealthy browser**'s stealth mode and speed by removing the injected JS files.
- **Improved the MCP schema** to be acceptable by OpenCode (Thanks to @robin-ede [#137](https://github.com/D4Vinci/Scrapling/pull/137))
- **Made the MCP schema even more MCP-friendly** to be accepted by VS Code Copilot and other strict tools. (Solves #150 )
- **Improved the MCP server tokens consumption** by a large margin through stripping useless HTML tags while the `main_content_only` option is activated.
- Fixed the PyPI page and added the files to register the MCP server to the MCP servers registry.
- Added a new code snippet to show how to install the browsers deps through code instead of using the commandline to allow easier automation.
- Improved all workflows by using the latest actions versions (Thanks to @salmanmkc [#143](https://github.com/D4Vinci/Scrapling/pull/143)/[#144](https://github.com/D4Vinci/Scrapling/pull/144))

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.1` · 2026-02-27 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
