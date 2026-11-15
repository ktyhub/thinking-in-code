---
title: "ruflo v3.75.2"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.2"
version: "v3.75.2"
published: "2026-11-10"
type: "patch"
lang: "zh"
---

# ruflo v3.75.2

套接字标记了 `ruflo@3.75.1` 中的六个文件。它们是 `ruflo/src/` 下的聊天 UI、MCP 桥和部署脚本，CLI 永远不会读取这些脚本。此版本停止发货并修复了警报指出的两个实际缺陷。

## 变化

- **`ruflo` 仅提供包装器。** tarball 从 531 个文件（8.2 MB 解压）减少到 3 个文件。如果包装了 `bin/`、`dist/`、`package.json`、`README.md` 或 `LICENSE` 之外的任何内容，测试现在会失败。
- **MCP 桥接出站 URL 防护**（两个桥接副本，#4945）。旧的正则表达式允许 `https://[::1]/`、`169.254.169.254`、`100.64.0.0/10`、`*.internal`、IPv4 映射环回和 `LOCALHOST.`，并错误地拒绝以 `fc` 或 `fd` 开头的公共主机。新的 `url-guard.js` 还会检查主机名解析到的每个地址，并拒绝重定向。如果 `SEARCH_API_URL` 或 `RESEARCH_API_URL` 指向私有地址或重定向，网桥现在会拒绝它。
- **固定桥后端。** `agentic-flow@alpha` 固定到 `3.0.0-alpha.2`（标记指向的版本），因此其工具未更改。第三方`gemini-mcp-server`固定到`1.2.2`。生成的后端不再继承桥的 `MCP_AUTH_TOKEN`。
- **删除了 `chat-ui/patch-mcp-url-safety.sh`。** 在当前上游图像上，它不匹配任何内容并退出 0。在匹配的地方，它放松了对每个 URL 的 URL 检查。

`@claude-flow/cli` 和 `claude-flow` 仅更改版本。

🤖 使用 [RuFlo](https://github.com/ruvnet/ruflo) 生成

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.75.2` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
