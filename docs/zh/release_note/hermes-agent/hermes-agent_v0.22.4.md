---
title: "hermes-agent v0.22.4"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.22.4"
version: "v0.22.4"
published: "2026-10-21"
type: "patch"
lang: "zh"
---

# hermes-agent v0.22.4

#爱马仕特工v0.22.4

**发布日期：** 2026 年 10 月 21 日

> 补丁发布。桌面不再在作曲家上方显示建议药丸，以及针对 CLI 和安装程序、Microsoft Store 应用程序、Docker 和 Hermes Cloud 的小插件和仪表板修复。

<!-- HERMES_BUILDS_TABLE -->

## 修复

- **桌面不再在作曲家上方显示建议药丸。** 这些药丸的出现没有明确的原因，主要是促使您设置 MCP 服务器。他们和只有他们使用的帮手都消失了。 ([#142559](https://github.com/NousResearch/hermes-agent/pull/142559))
- **不安装任何内容的插件会跳过依赖项同意步骤。** 声明不依赖项或 `pyproject.toml` 不安装任何内容的插件现在无需空同意提示即可启用。 ([#142569](https://github.com/NousResearch/hermes-agent/pull/142569))
- **仪表板：注销后可以安全地重新配对 WhatsApp。** ([#142439](https://github.com/NousResearch/hermes-agent/pull/142439))
- **桌面插件审查：** 表面 lint 不再标记原型写入；审稿人手工检查它们。 ([#142586](https://github.com/NousResearch/hermes-agent/pull/142586))
- **桌面：批准模式芯片遵循活动配置文件的模式。** ([#142565](https://github.com/NousResearch/hermes-agent/pull/142565))
- **发布构建：** 当存储速度较慢时，桌面捆绑包的预构建检查有足够的时间来验证存档的构建输入。 ([#142623](https://github.com/NousResearch/hermes-agent/pull/142623))

插件目录中还有新功能：bubblewrap（Linux 上的 bwrap 终端后端）、Singularity/Apptainer、mcp-serve（Hermes 作为 MCP 服务器）、代理导入器（`hermes import-agent`，现在带有 Cursor）、来自 Hermes Labs 的收件箱和工作流程记录。 Telegram Business 迁移到 Hermes Labs 社区层。

## 关于此版本

在提交 `4d04303818b` 时测量，自 v0.22.3 以来的窗口包含 **14 个非合并提交**，跨越 **82 个更改文件** (+1,475 / −3,022) 和 **13 个合并 PR**。

## 更新中

- Microsoft Store 应用程序：通过商店更新。
- 从安装程序安装的桌面应用程序（.exe / .dmg）：此版本中没有变化；它会随着下一个捆绑版本的更新而更新。
- CLI：`hermes update`，或重新运行安装程序一行。
- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。

**完整 Changelog**：[v0.22.3...v0.22.4](https://github.com/NousResearch/hermes-agent/compare/v0.22.3...v0.22.4)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.22.4` · 📅 发布：2026-10-21 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
