---
title: "playwright-mcp v0.0.64"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.64"
version: "v0.0.64"
published: "2026-02-06"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.64

### 🕶️ 默认隐身

浏览器配置文件现在默认位于内存中 - 每个会话都以干净的方式启动，没有剩余状态。

使用 `--persistent` 选择持久配置文件，或使用 `--profile=<path>` 指定自定义配置文件目录：

```sh
> playwright-cli open example.com                       # incognito, clean slate
> playwright-cli open example.com --persistent          # persistent profile
> playwright-cli open example.com --profile=./my-data   # custom profile directory
```

---

### 🔀 简化的会话管理

`--session` 标志已替换为较短的 `-s=`。会话生命周期得到简化——不再有“停止”状态；会话要么正在运行，要么消失。

```sh
> playwright-cli -s=myapp open example.com
> playwright-cli -s=myapp click e5
> playwright-cli -s=myapp close
> playwright-cli -s=myapp delete-data
```

新的会话管理命令取代了旧的 `session-*` 系列：

```sh
> playwright-cli list        # list all sessions
> playwright-cli close-all   # close all browsers
> playwright-cli kill-all    # forcefully kill all browser processes
```

---

### 🏗️ 工作区范围的守护进程

每个工作区现在都有自己的守护进程，防止跨项目干扰并支持直接守护进程启动，以实现更快、更可靠的操作。

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.64` · 📅 发布：2026-02-06 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.64)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
