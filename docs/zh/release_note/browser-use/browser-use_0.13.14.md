---
title: "browser-use 0.13.14"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.14"
version: "0.13.14"
published: "2026-10-26"
type: "patch"
lang: "zh"
---

# browser-use 0.13.14

此版本保留了 Python 代理及其现有模型。 Pi 迁移仍然是独立的。

自上次 PyPI 版本以来的更改：
- 添加 OpenAI 浏览器工具和共享 Bash 帮助程序。
- 改进有界页面观察、表单状态、文件访问和浏览器恢复。
- 修复临时空的云选项卡 URL。
- 在缩放显示上保持屏幕截图、裁剪和 click 对齐。
- 清理失败的浏览器重新连接初始化。
- 改进云浏览器的缺失键错误。
- 支持浏览器使用云SDK V4导入。
- 将 aiohttp 从 3.14.3 更新为 3.14.5。
- 刷新云指导和保存的任务重播示例。

验证：
- GitHub 检查传递确切的发布源。
- 版本更改的预提交通行证。
- 轮子和源码包构建成功。
- 包元数据和所有五个 CLI 条目均通过验证。
- 所有 171 个打包的 Python 文件均与现有 Python 运行时匹配。
- 安装的车轮运行 `browser-use --help`。

使用 `uv add browser-use==0.13.14` 或 `pip install browser-use==0.13.14` 安装。

受保护的发布工作流程需要另一位发布审阅者。 PyPI 发布将在该批准之后进行。

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.14` · 📅 发布：2026-10-26 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.14)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
