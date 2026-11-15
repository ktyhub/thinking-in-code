---
title: "claude-mem v15.11.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.11.1"
version: "v15.11.1"
published: "2026-11-07"
type: "patch"
lang: "zh"
---

# claude-mem v15.11.1

## 专业版登录再次正常

每次新安装插件时，从插件登录 cmem.ai Pro 都会返回 500 错误。该插件的安装不包括 `better-auth`，并且其表从未创建。该插件现在将 `better-auth` 和 `@better-auth/api-key` 作为依赖项提供，并在第一次需要时创建身份验证表（#5455，感谢 @0xABCD01）。

## 修复

- **Worker：**当运行在传输、速率限制或类似中止后暂停时，它现在会释放其声明，因此暂停的会话不再保留永远不会过期的待处理工作（#5457，感谢@akashpandey）。
- **工人：** 超出预算的压缩回复会被限制在预算范围内，而不是被丢弃（#5452，感谢@xunguangzlj-cloud）。
- **Worker：**无推理重试现在可以识别 OpenCode Go 的“无法表示”错误措辞（#5439，感谢 @akashpandey）。
- **钩子：** Stop 钩子直接读取 Claude Code 的 `last_assistant_message` 并跳过读取脚本（#5449，感谢 @xunguangzlj-cloud）。
- **上下文：** OAuth 提示和网关回退通知在安装上下文之前保留，因此 SessionStart 上下文保持在 Claude Code 的 10,000 个字符限制之下（#5441，感谢 @liuyinchu）。
- **Codex：** 过时的应用程序服务器子进程在身份验证恢复探针上回收（#5438，感谢@akashpandey）。
- **安装程序：** Goose YAML 配置是自动写入的，因此中断的安装或卸载不会再留下截断的 config.yaml （#5442，感谢 @DeryFerd）。
- **测试：** 同步矩阵在读取页面正文之前等待页面正文，修复浏览器就绪竞赛（#5448）。

## 也在这个版本中

- **我的工作：** 计划的刷新检查间隔现在是一个设置（#5437，感谢@weirui828）。
- **文档：** README 和文档中的一个故事：Claude-Mem 记得，您的编码代理在会话之间忘记了（#5447）。
- **文档：** 自述文件翻译保持围栏代码示例和单引号链接完好无损（#5458，感谢@Afloat16）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.11.0...v15.11.1

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.11.1` · 📅 发布：2026-11-07 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.11.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
