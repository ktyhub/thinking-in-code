---
title: "claude-mem v15.18.5"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.5"
version: "v15.18.5"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# claude-mem v15.18.5

## 关键修复

- **树守护者 CLI 安装在其下载脚本不断失败的网络上**（#6110，感谢 @rigel905，关闭#6109）。在某些网络上，tree-sitter-cli 自己的 `install.js` 的请求每次都会重置，或者在截断的文件上退出 0。固定的 SHA-256 检查正确地拒绝了该文件，但此后没有任何恢复，因此 `smart_search`、`smart_outline`、`smart_unfold` 和文件读取门在每次工作进程启动时保持关闭状态，并且 `npx claude-mem repair` 中止。现在，当脚本失败或留下除固定可执行文件之外的任何内容时，claude-mem 会在相同的安装时间预算内直接获取相同的发布资产一次，并且仅在解压到相同的固定 SHA-256 后才运行它。该脚本仍然首先运行，因此 `HTTPS_PROXY` 继续工作。用尽全部预算的脚本将不会再进行第二次尝试。
- **损坏的 Chroma 集合被丢弃一次，而不是每次并行回填一次**（#6115，感谢 @mohitdixit02 和 @0xABCD01，关闭 #6113）。当大型集合的 HNSW 段损坏时，命中它的每个并行的每个项目回填都会在第一次删除完成之前通过“仅删除一次”检查，并将其自己的删除与 chroma-mcp 排队。在 #6113 中，一次运行 19 次测试，并将 chroma-mcp 内存占用推至 312 GB，导致 32 GB Mac 停止运行。呼叫者现在加入已经为该集合运行的one drop并分享其结果。失败的丢弃会花费重试预算中的一次尝试，而不是每个调用者一次，并且不同的集合仍然独立丢弃。该报告中的其余要求（chroma-mcp 上的内存绑定、无法确认掉落时停止写入、测量 macOS 上的占用空间）在 #3610 中进行跟踪。

## 修复

- **`--help` 打印帮助而不是运行命令**（#6142，感谢@liuyinchu）。 `npx claude-mem mcp --help`用于启动stdio服务器，`status`、`doctor`和`hook`进入其运行时路径； `t3code` 及其别名拒绝了该标志。 `-h` 和 `--help` 现在在调度这些命令之前进行处理。普通 `mcp` 仍然启动服务器。

## 文档

- **OmO Native 回忆指南**（#6087，感谢 @mschoi0411）。如何通过现有的 stdio MCP 服务器将 OmO Native 连接到本地工作人员：工具发现、按项目和观察 ID 调用、故障排除和断开连接。

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.18.5` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
