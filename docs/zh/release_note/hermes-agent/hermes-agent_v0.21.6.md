---
title: "hermes-agent v0.21.6"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.21.6"
version: "v0.21.6"
published: "2026-10-08"
type: "patch"
lang: "zh"
---

# hermes-agent v0.21.6

#爱马仕代理v0.21.6

**发布日期：** 2026 年 10 月 8 日

> 补丁发布。该标签将自 v0.21.5 以来合并的约 2,100 个 PR 汇总为 Docker 和 Hermes Cloud 的稳定标记版本。 v0.22.0 的这艘窗户船的完整策划笔记。

<!-- HERMES_BUILDS_TABLE -->

## 关于此版本

这是新的稳定版本管道的第一个版本：一次尝试参考、经过测试的 Docker 图像以及发布时的收据标签。它附带标签、此 GitHub 版本和 Docker 图像。桌面应用程序、Termux 软件包和 Microsoft Store 目前仍保留当前版本，并随下一个捆绑版本一起移动。

在提交 `818c13be1dc4fd28987e1e881a9408224afd4535` 时测量，自 v0.21.5 以来的窗口包含 **8,867 个非合并提交**，涉及 **8,342 个更改文件** (+772,490 / −225,600)、**2,106 个合并 PR** 和 **3,027 个已关闭问题**。

同样在窗口中，故意未记录在此处：当您在 CLI、TUI 和桌面 (`stt.streaming`) 上讲话时进行实时转录；口语语音转路由到自己的模型 (`auxiliary.voice_chat`)，默认情况下推理关闭；在每个配置文件插件主机 (`plugins.isolation: host`) 中运行的第三方插件和一个设置 ▸ 插件主页用于其设置页面；桌面选择器顶部最喜欢和固定的模型，订阅遇到障碍之前的使用筹码，以及说明原因和截止时间的速率限制提供商； `hermes model` 中的本地模型以及 llama.cpp Linux x64 和 arm64 上的 CUDA；跨核心、桌面和 TUI 的可插拔分层语言包；总结优先 `hermes status` (`--short`, `--full`);审查窗格差异范围选择器（未提交/分支/最后回合）和在回合之后保持清醒；当 cron 存储变得不可写时，cron、`doctor` 和 home-channel 警告；凭证上传的批准标志和终端命令中不可见的 Unicode；检查机器人令牌并打印邀请链接的 Discord 设置；统一的看板工作流程定义； `activate.fish`;目录中的 GPT-6.1 Sol 和 Claude Sonnet 5.5 / Haiku 5.5；以及数十个新的社区插件。

**此窗口的完整策划 release note 与 v0.22.0 一起发布**，它将记录从 v0.21.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。
- CLI（git 安装）：`hermes update`，或重新运行安装程序一行。
- 桌面应用程序和 Termux：此版本中没有变化；他们会随着下一个捆绑版本的更新而更新。

## 安全修复

**仪表板身份验证强化**

- 欺骗性的 `X-Forwarded-For` 标头可能会重置密码登录速率限制并绕过本机登录的每个 IP 上限 (#133367)
- 未经身份验证的登录请求可能会将无限制的值写入身份验证审核日志 (#133369)
- 公共 `/auth/` 路线没有请求正文大小限制（#133370）
- 本机登录可以将登录代码发送到非环回重定向，从而允许会话接管 (#130685)

感谢 Tenable Research 报告了所有四个问题（TRA-725、TRA-726、TRA-727、TRA-728）。本机登录重定向问题也已独立报告并由 @Froraut 修复。 `X-Forwarded-For` 修复基于 @hinotoi-agent 和 @BearHuddleston 的社区工作 (#40285)。

**存储库 git 过滤器强化**
- 自动 git 调用（会话工作区快照、子代理工作树、看板、工作树清理、`hermes -w`）可以在第一个提示之前运行由 untrusted 存储库自己的配置定义的 `clean`/`smudge`/`process` 过滤器程序 (#130661)

感谢燕涛私下举报此事。 @jonpol01 (#126017, #126019) 和 @JoaoMarcos44 (#126075) 也公开报告并修复了该问题。

**电子邮件网关发件人强化**

- `From` 标头中引用的显示名称（例如 `"Victim <victim@example.com>" <attacker@evil.test>`）可能会使攻击者的邮件作为允许的发件人通过电子邮件白名单 (#125212)

感谢 Daniel Steele (@keeltrace) 报告此问题并编写修复程序 (#124322)。


**完整 Changelog**：[v2026.9.24...v0.21.6](https://github.com/NousResearch/hermes-agent/compare/v2026.9.24...v0.21.6)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.21.6` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
