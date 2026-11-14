---
title: "hermes-agent v0.22.6"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.22.6"
version: "v0.22.6"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# hermes-agent v0.22.6

#爱马仕特工v0.22.6

**发布日期：** 2026 年 11 月 2 日

> 补丁发布。此标签汇总了自 v0.22.5 以来合并到 GitHub 版本（CLI 和安装程序）、Microsoft Store 应用程序、Docker 和 Hermes Cloud 的稳定版本中的约 776 个 PR。 v0.23.0 的这艘窗户船的完整策划笔记。

<!-- HERMES_BUILDS_TABLE -->

## 关于此版本

在提交 `f0d94882e89` 时测量，自 v0.22.5 以来的窗口包含 **3,448 个非合并提交**，涉及 **4,316 个更改文件** (+248,579 / −94,077)、**776 个合并 PR** 和 **385 个已关闭问题**。

同样在窗口中，这里故意未记录：Web应用程序从网关自己的侦听器提供服务（`hermes webapp`，一个桌面Web访问窗格，用于在您的网络上打开它或您自己的Nous登录后的URL，以及在浏览器选项卡中加载的桌面插件），`/model reset`用于清除会话的模型引脚而不丢失历史记录，针对自主写入的每个技能锁定（可从桌面功能窗格锁定），选择加入准备压缩(`compression.prepare_ahead`)、`hermes cron cancel` 加上每个作业错过运行的策略和桌面 cron 编辑器中的停止按钮、为下一个会话保存的 `/delegation` 选择、`hermes migrate` 和设置移动 Grok Bot 和 OpenBot 用户、选择用于保管库密钥的操作系统钥匙串存储、在插件安装和更新时强制执行目录的 `requires_hermes`、代理在 `text_to_speech` 中选择的 ElevenLabs 声音、 `pre_llm_call` 钩子可以在推理之前阻止转弯，桌面群聊重命名、解散、提及和附件粘贴，每个配置文件显示为桌面侧边栏部分，Telegram 视频笔记，线程上下文中的 Slack 表情符号反应，以及包管理器中的可恢复下载。

**此窗口的完整策划的 release note 与 v0.23.0 一起发布**，它将记录从 v0.22.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- Microsoft Store 应用程序：通过商店更新。
- 从安装程序安装的桌面应用程序（.exe / .dmg）：此版本中没有变化；它会随着下一个捆绑版本的更新而更新。
- CLI：`hermes update`，或重新运行安装程序一行。
- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。

**完整 Changelog**：[v0.22.5...v0.22.6](https://github.com/NousResearch/hermes-agent/compare/v0.22.5...v0.22.6)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.22.6` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
