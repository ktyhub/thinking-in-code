---
title: "paperclip v2026.609.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.609.0"
version: "v2026.609.0"
published: "2026-06-09"
type: "minor"
lang: "zh"
---

# paperclip v2026.609.0

#v2026.609.0

> 发布时间：2026-06-09

## 亮点

- **公司工件** - 您的代理生成的文件、媒体和文档现在都是一流的。新的公司范围的工件页面对跨问题和运行的每个工作产品进行索引，默认情况下按任务堆栈对它们进行分组，并支持上传和丰富的播放（包括视频工件缩略图），因此您可以检查代理所做的内容，而无需逐一打开每个问题。 ([#7621](https://github.com/paperclipai/paperclip/pull/7621)、[#7654](https://github.com/paperclipai/paperclip/pull/7654)、[#7667](https://github.com/paperclipai/paperclip/pull/7667)、[#7248](https://github.com/paperclipai/paperclip/pull/7248)、@cryppadotta)
- **可折叠的侧栏栏和接管窗格** - 主导航现在可以通过悬停/焦点查看折叠为持久栏，从而提供上下文页面（尤其是公司设置和插件路线）更多的水平空间，同时使全局导航保持一click的距离。 （[#7824]（https://github.com/paperclipai/paperclip/pull/7824），@cryppadotta）
- **带有视频的丰富问题附件** - 问题现在接受视频附件并呈现丰富的内联预览，包括独立的 PWA 浏览器控件和内联视频播放，因此屏幕录制和媒体直接进入线程，而不是作为不透明的下载。 （[#7361]（https://github.com/paperclipai/paperclip/pull/7361），[#7360]（https://github.com/paperclipai/paperclip/pull/7360），@cryppadotta）
- **复选框确认交互** - 问题线程交互现在可以要求董事会或用户通过结构化复选框有效负载确认一个或多个选项，并在 API、CLI、插件帮助程序和 UI 上进行一致验证 - 并且自由文本“其他”答案现在呈现为正确的链接。 （[#7649]（https://github.com/paperclipai/paperclip/pull/7649），@cryppadotta）
- **信息架构刷新（实验性）** - 项目和代理界面的可选视觉刷新使高频工作流程更易于扫描，实例设置现在位于公司设置下，因此可以从一个地方发现配置。 （[#7543]（https://github.com/paperclipai/paperclip/pull/7543），@scotttong；[#7680]（https://github.com/paperclipai/paperclip/pull/7680），@cryppadotta）
- **自动 PR 质量和安全门** - `commitperclip` 现在对传入的 PR 运行自动质量和安全门 - 检查链接的问题、测试覆盖范围、完整的模板和干净的锁定文件，以及重复数据删除搜索检查 - 因此贡献者可以获得快速、一致的反馈，维护人员可以在重要的地方花费审查时间。与新的低 trust 审核遏制相结合，为 untrusted 内容的审核者提供范围狭窄、快速注入抵抗的权限预设。 （[#6469]（https://github.com/paperclipai/paperclip/pull/6469），@brandonburr；[#7632]（https://github.com/paperclipai/paperclip/pull/7632），[#7530]（https://github.com/paperclipai/paperclip/pull/7530），@cryppadotta）

## 改进

- **工作更努力的代理** - 操作员通过新的清除错误代理操作和实时运行停止最终确定操作获得直接、经过审核的恢复路径，同时集中阻止无效代理（终止、暂停、待批准）接收新的分配或运行 - 因此您的实例保持一致，并在您参与之前更加努力。 ([#7695](https://github.com/paperclipai/paperclip/pull/7695)、[#7679](https://github.com/paperclipai/paperclip/pull/7679)、[#7663](https://github.com/paperclipai/paperclip/pull/7663)、@cryppadotta)
- **更清晰的唤醒边界** - 文档范围的评论现在被视为审阅上下文，而不是触发与顶级问题评论相同的唤醒路径，并且问题评论唤醒切换得到了改进 - 因此代理唤醒了实际需要它们的活动。 （[#7766]（https://github.com/paperclipai/paperclip/pull/7766），[#7678]（https://github.com/paperclipai/paperclip/pull/7678），@cryppadotta）
- **内置适配器的外部适配器覆盖** - 外部适配器插件现在可以通过内置适配器类型（例如较新的 `hermes` 实现）进行热安装，同时保持内置适配器可用作后备，以匹配注册表的现有覆盖行为。 （[#7394]（https://github.com/paperclipai/paperclip/pull/7394），@HenkDz）
- **Gemini CLI 捆绑在映像中** - 生产 Docker 映像现在在 Gemini CLI 中烘焙，因此 `gemini_local` 适配器可以与 `claude`、`codex` 和 `opencode` 一起开箱即用。 （[#7693]（https://github.com/paperclipai/paperclip/pull/7693），@davison）
- **选择器中的新 Claude 模型** - `claude_local` 适配器的模型选择器中现在提供 Claude Fable 5 和 Mythos 5（Opus 4.8 保持默认）。 （[#7826]（https://github.com/paperclipai/paperclip/pull/7826），@cryppadotta）
- **例程尊重暂停的项目** - 当项目暂停时，计划的例程标记现在被抑制，存档的例程从例程页面隐藏，并且例程视图现在默认按项目分组。 （[#7502]（https://github.com/paperclipai/paperclip/pull/7502），@dosthcpp）
- **删除的评论被编辑** - 删除的问题评论现在以原子方式编辑，并具有回归覆盖，因此删除的内容不会在线程中徘徊。 （[#7554]（https://github.com/paperclipai/paperclip/pull/7554），@cryppadotta）
- **更强的 CLI 和 API 奇偶校验** - CLI 现在发送 `X-Paperclip-Run-Id`，以便代理可以通过 CLI 改变自己的问题，加上更广泛的 OpenAPI 规范覆盖范围、身份验证元数据和 CLI/API 奇偶校验测试。 ([#7642](https://github.com/paperclipai/paperclip/pull/7642)、[#4579](https://github.com/paperclipai/paperclip/pull/4579)、[#6626](https://github.com/paperclipai/paperclip/pull/6626)、@aronprins)
- **登录可访问性** - 登录屏幕现在提供适当的可访问性和密码管理器元数据，以实现更顺畅的登录。 （[#7660]（https://github.com/paperclipai/paperclip/pull/7660），@cryppadotta）
- **更安全的工作空间** - Git 敏感的适配器工作空间现在受到保护，存档公司不再唤醒代理，并且实验设置在退役的功能标志中仍然存在。 （[#7644]（https://github.com/paperclipai/paperclip/pull/7644），[#7478]（https://github.com/paperclipai/paperclip/pull/7478），@cryppadotta）

## 修复

- **外部跟踪器密钥不再链接为 Paperclip 问题** - 文本中其他跟踪器的密钥不再错误地变成 Paperclip 问题链接。 （[#7511]（https://github.com/paperclipai/paperclip/pull/7511），@pmn4）
- **代理可以使用插件工具** - 代理颁发的 JWT 现在被插件工具端点 (`GET/POST /api/plugins/tools`) 接受，因此代理实际上可以调用为其构建的插件功能。 （[#7480]（https://github.com/paperclipai/paperclip/pull/7480），@devinfoley）
- **插件工作人员解析** - 插件工具调度程序现在传播 `pluginDbId`，因此 `worker.isRunning` 可以正确解析。 （[#5671]（https://github.com/paperclipai/paperclip/pull/5671），@Ramon-nassa）
- **问题锚点绑定** - `anchor.createdAt` 现在在 postgres 绑定之前强制转换为 `Date`，修复了注释锚点上的插入失败。 （[#5220]（https://github.com/paperclipai/paperclip/pull/5220），@aperim-agent）
- **Hermes 恢复状态** - Hermes 恢复会话状态现在在心跳期间受到保护，因此恢复的运行可以干净地恢复。 （[#7516]（https://github.com/paperclipai/paperclip/pull/7516），@andrewylies）
- **开发者快照竞赛** - 修复了开发者快照竞赛和文档评论面板分层，并具有回归覆盖。 （[#7362]（https://github.com/paperclipai/paperclip/pull/7362），@cryppadotta）

## 贡献者

感谢所有为此版本做出贡献的人！

@andrewylies、@aperim-agent、@aronprins、@brandonburr、@davison、@dosthcpp、@HenkDz、@pmn4、@Ramon-nassa

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.609.0` · 📅 发布：2026-06-09 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.609.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
