---
title: "chatbox v1.23.2"
project: "chatbox"
repo: "chatboxai/chatbox"
tag: "v1.23.2"
version: "v1.23.2"
published: "2026-09-10"
type: "patch"
lang: "en"
---

# chatbox v1.23.2

## v1.23.2 - 2026.09.10

### Downloads

- [macOS (Apple Silicon)](https://download.chatboxai.app/releases/Chatbox-1.23.2-arm64.dmg)
- [macOS (Intel)](https://download.chatboxai.app/releases/Chatbox-1.23.2.dmg)
- [Windows (x64)](https://download.chatboxai.app/releases/Chatbox-1.23.2-Setup.exe)
- [Linux (x64 DEB)](https://download.chatboxai.app/releases/Chatbox-1.23.2-amd64.deb)
- [Linux (ARM64 DEB)](https://download.chatboxai.app/releases/Chatbox-1.23.2-arm64.deb)
- [Android](https://download.chatboxai.app/releases/chatbox-1.23.2.apk)

### What’s Changed

1. Added OAuth authorization for remote MCP servers, with connection controls and a refreshable tool list in server settings
2. Added custom conversation compaction prompts and one-time instructions, with improved compaction scope and trigger accuracy
3. Added cached token usage to message statistics and configurable prompt cache duration for Claude
4. Added support for more plain-text uploads, including Typst, Patch, and Diff files
5. Added one-click undo for archived chats and improved recovery when a conversation fails to load at startup
6. Fixed replies sometimes remaining in the generating state after completion
7. Improved generated image loading, with an option to reload images that fail to display
8. Added reasoning effort controls for GPT-6 and later models, and improved Kimi, OpenCode, and model catalog compatibility
9. Fixed backup exports on HarmonyOS and improved window focus, small-screen layouts, and translations

### 更新说明

1. 远程 MCP 服务支持 OAuth 授权，可在配置窗口连接服务、查看和刷新工具列表
2. 对话压缩支持自定义提示词和临时补充要求，并优化压缩范围与触发判断
3. 消息用量新增缓存命中 Token 展示，Claude 支持设置提示词缓存时长
4. 支持上传更多纯文本文件，包括 Typst、Patch 和 Diff 文件
5. 归档对话后支持一键撤销，改善异常会话的启动恢复体验
6. 修复部分回复完成后仍显示生成中的问题
7. 改善生成图片的加载体验，加载失败时可重新加载
8. 支持 GPT-6 及后续模型的思考强度设置，改善 Kimi、OpenCode 和模型列表兼容性
9. 修复鸿蒙备份导出问题，并优化窗口焦点、小屏显示及多语言文案

---

> **Source** [chatboxai/chatbox](https://github.com/chatboxai/chatbox) · `v1.23.2` · 2026-09-10 · [upstream release](https://github.com/chatboxai/chatbox/releases/tag/v1.23.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
