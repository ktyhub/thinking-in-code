---
title: "claude-mem v15.12.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.12.1"
version: "v15.12.1"
published: "2026-11-08"
type: "patch"
lang: "zh"
---

# claude-mem v15.12.1

## 两个关键修复

- **macOS 12（系统 SQLite 3.37）：** 每次写入时都无法保存观察结果并显示“SQL 逻辑错误”。使用 `RETURNING` 的语句现在用 `.all()` 读取，因此观察结果再次存储（#5499，感谢 @xunguangzlj-cloud；由 @hamadikante0-ship-it 在 #5497 中报告）。
- **CMEM Pro 登录：** 自 15.11.0 起，登录在第一步时停止并显示“无法启动 OAuth 登录”。安装程序现在接受 cmem.ai 回显到其登录链接中的安装 ID（#5502；由 @luciano-fiandesio 在 #5493 中报告）。

## 其他修复

- **Cursor：**安装程序以原子方式写入 `hooks.json`，因此中断的安装或卸载不会再给 Cursor 留下损坏的钩子文件（#5484，感谢 @DeryFerd）。
- **工作人员安全性：**操作员处理路由拒绝来自外国本地主机的请求（#5482，感谢@DeryFerd）。
- **时间轴：** `#123` 锚点被读取为观察 ID，而不是日期（#5479，感谢 @rudycelekli）。
- **提示导入：** Claude 代码记录和设置在设置时从 `CLAUDE_CONFIG_DIR` 读取（#5476，感谢 @rudycelekli）。
- **服务器：**在生成提示中截断事件有效负载可以使表情符号和其他代理对保持完整（＃5478，感谢@rudycelekli）。
- **服务器：** 当规范密钥为空时，传统的 `SERVER_BETA` 密钥会轮换（#5477，感谢 @rudycelekli）。
- **OpenClaw：** `/claude-mem-search 4019` 搜索数字而不是将其作为结果限制读取（#5474，感谢@rudycelekli）。
- **OpenClaw：** 工作会话帖子标有平台源 `openclaw` （#5475，感谢 @rudycelekli）。

## 也在这个版本中

- **CI:** 被取代的运行被取消，并且 5-OS 图像矩阵仅针对图像更改运行 (#5481)。
- **测试：** 孤立进程快照会跳过 Windows 上不相关的系统进程（#5501，感谢 @liuyinchu）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.12.0...v15.12.1

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.12.1` · 📅 发布：2026-11-08 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.12.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
