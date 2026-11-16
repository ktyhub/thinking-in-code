---
title: "MaxKB v2.10.1-lts"
project: "MaxKB"
repo: "1Panel-dev/MaxKB"
tag: "v2.10.1-lts"
version: "v2.10.1-lts"
published: "2026-06-10"
type: "patch"
lang: "zh"
---

# MaxKB v2.10.1-lts

# 错误修复
- **知识库**：修复了下载时QA对模板内容显示不正确的问题。
- **代理**：修复了在调试具有用户输入参数的代理时无法发送问题的问题。
- **代理**：修复了直接提问时保留默认值的外部切换参数（默认值为 `false`）的必填字段错误。
- **代理**：修复了 cli 在调试/对话期间点击“更多参数”按钮影响外部切换参数状态的问题。
- **Agent**：修复了并发场景下技能执行目录会被随机清除的问题(#6185)。
- **Agent**：修复图像理解和视频理解节点的系统提示中引用的变量未解析的问题（#6180）。
- **工具**：修复了在 Python 脚本中使用 `pymysql` 时找不到依赖项的错误 (#6182)。

---

> 📦 仓库：[1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) · 🏷️ 版本：`v2.10.1-lts` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/1Panel-dev/MaxKB/releases/tag/v2.10.1-lts)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
