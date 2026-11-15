---
title: "open-webui v0.11.3"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.11.3"
version: "v0.11.3"
published: "2026-08-31"
type: "patch"
lang: "zh"
---

# open-webui v0.11.3

### 添加

- ♿ **辅助功能模式到达菜单。** 辅助功能模式现在会在下拉菜单、子菜单以及模型选择器及其过滤器和比较控件中标记您指向的菜单项和已选择的具有更强背景的模型，因此这些提示带有辅助功能指南在两个主题中所要求的对比。 [提交](https://github.com/open-webui/open-webui/commit/a6f9751401589ee73208295b6f6a7f6eae9c1b44)、[提交](https://github.com/open-webui/open-webui/commit/471b5cbbb16c3996c32e68808dde6f8898f64ecd)
- 🔄 **一般改进。** 在整个应用程序中实施了各种改进，以增强性能、稳定性和安全性。
- 🌐 **翻译更新。** 印度尼西亚语翻译得到增强和扩展。

### 已修复

- 💥 **聊天分支在重新加载后保持连接。** 保存在较早消息下的回复现在保留在该消息下列出，因此分支箭头、导出、重新加载和稍后的编辑可以使整个对话保持在视图中，并且已保存但缺少该链接的聊天在打开时会得到修复。 [#29299](https://github.com/open-webui/open-webui/issues/29299)
- 🧱 **升级明显失败，而不是开始更新一半。** 失败的数据库升级现在会在导致它的迁移错误处停止，而不是无论如何启动并稍后报告丢失的表或列，例如“chat.timer_at”，这是从 0.11.0、0.11.1 或 0.11.2 迁移后看到的升级失败。 [#29280](https://github.com/open-webui/open-webui/issues/29280)
- 🔤 **自定义界面字体可以覆盖应用程序的更多内容。** 在界面设置中选择的字体现在适用于下拉菜单和以前回退到标准字体的其他界面文本。 [提交](https://github.com/open-webui/open-webui/commit/1457000ba66547b24bd98012aa35ac16fd4bc696)
- 🔌 **仅在存在 OAuth 的情况下断开 OAuth 连接。** 通过 MCP 到达的工具服务器上的断开连接控制现在仅在该服务器通过 OAuth 登录并连接帐户的情况下出现，而不是在根本不使用登录的服务器上出现。 [#29296](https://github.com/open-webui/open-webui/issues/29296)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.11.3` · 📅 发布：2026-08-31 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.11.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
