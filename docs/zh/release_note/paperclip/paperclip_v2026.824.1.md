---
title: "paperclip v2026.824.1"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.824.1"
version: "v2026.824.1"
published: "2026-08-25"
type: "patch"
lang: "zh"
---

# paperclip v2026.824.1

# 纸clip v2026.824.1

> 发布时间：2026-08-25

Paperclip v2026.824.1 是 v2026.824.0 上的一个补丁版本，它端到端地修复了登录的后台服务部分：该服务现在实际上从船上的 `npx` 开始，登录之后不再引导您进入安全检查错误，并通过在浏览器中向您提供仪表板来完成。

## 修复

- **在 `npx` 载入期间接受后台服务提示不再安装损坏的服务。 ** 服务定义以托管命令 shim 为目标，但临时运行永远不会安装它 - 服务在载入时在丢失的二进制文件上崩溃循环，相信服务正在处理事情，跳过了自己的前台启动：第一次运行以没有任何服务结束。现在，服务步骤在注册服务之前实现托管安装（有效负载和命令填充程序，固定到正在加载的版本），并且当它不能（自定义 `PAPERCLIP_SHIM_PATH` 或安装失败）时，它会使用修复命令来实现。 ([#12148](https://github.com/paperclipai/paperclip/pull/12148))
- **载入不再提供服务已涵盖的前台启动。** 成功安装服务后，交互式载入仍询问“现在启动 Paperclip 吗？” — 接受将第二台服务器运行到已经运行的实例防护中，以错误结束成功的加载。服务运行后，将跳过该提示。 （[#12153]（https://github.com/paperclipai/paperclip/pull/12153））
- **Onboarding 在仪表板处结束，而不是完全停止。** 服务启动后，Onboarding 现在会等待它报告实际绑定的端点（包括配置的端点繁忙时的回退端口），打印仪表板 URL，并在交互式终端上的浏览器中打开它。无头运行打印 URL； `PAPERCLIP_NO_BROWSER=1` 禁用浏览器打开。如果服务没有准备好，入职会这样说并指向 `paperclipai service logs`，而不是声称成功。 ([#12164](https://github.com/paperclipai/paperclip/pull/12164))
- **`paperclipai doctor` 正是如此诊断丢失的服务二进制文件。** 当服务的二进制文件丢失时，服务运行时检查不再建议停止不存在的冲突进程（它命名丢失的路径并指向 `paperclipai install`），并且运行状况检查归因于不是托管服务的健康响应程序，而不是报告简单的“运行状况”。 ([#12148](https://github.com/paperclipai/paperclip/pull/12148))

## 升级指南

- 无需迁移，也无需更改配置。
- 如果之前的板载留下了崩溃循环的后台服务：运行 `paperclipai install`，然后运行 ​​`paperclipai service start`。一旦其二进制文件存在，失效的服务定义就会被重用。

## 贡献者

此版本有核心团队的 3 项提交。

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.824.1` · 📅 发布：2026-08-25 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
