---
title: "paperclip v2026.529.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.529.0"
version: "v2026.529.0"
published: "2026-05-30"
type: "minor"
lang: "zh"
---

# paperclip v2026.529.0

#v2026.529.0

> 发布时间：2026-05-29

## 亮点

- **内联文档注释和评论** - 问题文档现在支持内联、修订感知注释线程以及注释和稳定的锚点快照，因此代理和操作员可以讨论特定段落，而不是留下分离的问题评论或编辑整个文档。 （[#6733]（https://github.com/paperclipai/paperclip/pull/6733），@cryppadotta）
- **公司技能 CLI 和目录管理** - 技能现在是一流的：使用新的 CLI 和面板 UI 安装、重置、审核、导出和分配公司技能，并由打包的技能目录和跨捆绑、目录、运行时和适配器提供的技能的清晰来源模型提供支持。 （[#6782]（https://github.com/paperclipai/paperclip/pull/6782），@cryppadotta）
- **在侧边栏中隐藏项目和代理** - 用户范围的资源成员资格允许每个用户留下他们不想让侧边栏变得混乱的项目和代理，同时保持每个资源的可访问性，并由公司范围的成员资格 API 和更清晰、更易于扫描的项目列表提供支持。 （[#6677]（https://github.com/paperclipai/paperclip/pull/6677），@cryppadotta）
- **新的自托管部署的第一管理员声明流程** - 私有、无人声明的部署（例如 LAN 上的 Umbrel 安装）现在获得一次性浏览器声明，以便操作员可以在任何邀请存在之前创建第一个管理员，而公共部署和带有活动邀请的安装则保留现有的仅限邀请模型。 （[#6755]（https://github.com/paperclipai/paperclip/pull/6755），@cryppadotta）
- **实时 Claude 模型发现** - Claude Local 适配器现在可以从 UI 刷新其 Anthropic 模型目录，因此新发布的 Claude 模型无需等待代码发布即可显示 - 静态回退列表作为安全网保持最新状态。 （[#6953]（https://github.com/paperclipai/paperclip/pull/6953），@cryppadotta）

## 改进

- **捆绑插件现在显示在插件管理器中** - 实例设置 → 插件管理器列出了内置捆绑插件以及已安装的外部插件，因此全套可用插件在一个位置可见。 （[#6734]（https://github.com/paperclipai/paperclip/pull/6734），@cryppadotta）
- **更严格的工作空间生命周期保证** - 工作空间最终确定门和无远程 git 强制执行弥补了工作树合同中的漏洞 - 受让人之间不再有静默的 env 重用，相关问题在最终确定土地之前不再触发，并且 `issue.interaction.accept` 等待最终确定 - 因此相关问题可靠地看到一致的工作树。 （[#6969]（https://github.com/paperclipai/paperclip/pull/6969），@devinfoley）

## 修复

- **接受的计划仅分解一次** - 接受的计划修订现在受到保护，因此它们不能在重叠运行中多次分解，修复了当代理从审查决策中醒来并重用隔离工作区时可能发生的重复子任务扇出，以及更清晰的计划分解 UI 状态。 （[#6831]（https://github.com/paperclipai/paperclip/pull/6831），@devinfoley）

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.529.0` · 📅 发布：2026-05-30 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.529.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
