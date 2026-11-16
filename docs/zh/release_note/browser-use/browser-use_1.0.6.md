---
title: "browser-use 1.0.6"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.6"
version: "1.0.6"
published: "2026-11-16"
type: "patch"
lang: "zh"
---

# browser-use 1.0.6

`pip install 'browser-use==1.0.6'`

- **BU 4.0 是默认模型。** `Agent(task)` 和 `ChatBrowserUse()` 现在在浏览器使用网关上运行 `bu-4.0`，而不是 `bu-fast`。通过 `llm='bu-4.0-mini'` 以最低的成本完成简单的任务，或通过 `llm='bu-4.0-pro'` 完成最困难的任务 (#6430)。
- **如果您没有通过 `llm`，则成本会更高。** BU 4.0 代币的成本是 `bu-fast` 的 15 倍（每 1M 输入/输出代币 $1.80 / $9.00，相对于 $0.12 / $0.60），并且它在默认模式下以高推理而不是中推理运行。一个简短的测试任务花费 $0.022 而不是 $0.0014。要保留以前的型号和价格，请传递 `llm='bu-fast'`。价格：https://docs.browser-use.com/open-source/models
- 首次运行无需密钥打开浏览器使用登录并在批准后继续；云浏览器打印其实时查看链接（#6425）。
- 法官的陷阱要立足于运行中观察到的情况（#6418）。

PR：https://github.com/browser-use/browser-use/pull/6430, https://github.com/browser-use/browser-use/pull/6425, https://github.com/browser-use/browser-use/pull/6418, https://github.com/browser-use/browser-use/pull/6431

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`1.0.6` · 📅 发布：2026-11-16 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/1.0.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
