---
title: "paperclip v2026.525.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.525.0"
version: "v2026.525.0"
published: "2026-05-25"
type: "minor"
lang: "zh"
---

# paperclip v2026.525.0

#v2026.525.0

> 发布时间：2026-05-25

## 亮点

- **Modal 沙箱提供程序现在是第一方插件** - Paperclip 提供了 Modal 沙箱提供程序插件，因此公司可以在 Modal 的托管沙箱上与 E2B、Cloudflare 和 Daytona 一起运行代理，并连接 CI 发布和冷启动友好的探测超时。 ([#6245](https://github.com/paperclipai/paperclip/pull/6245)、[#6289](https://github.com/paperclipai/paperclip/pull/6289)、 [#6290]（https://github.com/paperclipai/paperclip/pull/6290），@devinfoley）
- **工作区差异是一流的查看器插件** - 新的工作区差异插件通过主机服务和插件插槽呈现暂存、未暂存、头部、重命名、二进制、超大和未跟踪的更改，具有拆分/统一窗格、粘性标题和可靠的默认基本引用。 （[#6071]（https://github.com/paperclipai/paperclip/pull/6071），[#6383]（https://github.com/paperclipai/paperclip/pull/6383），@cryppadotta）
- **例程可以携带自己的秘密** - 例程 env 现在通过具有持久修订、`agent < project < routine` 优先级和例程 UI/历史记录中的安全秘密元数据的运行时合约进行流动，而不会在日志或访问事件中暴露秘密值。 （[#6212]（https://github.com/paperclipai/paperclip/pull/6212），@cryppadotta）
- **本地云上游同步已启用** - 新的云上游流程附带共享类型、服务器路由、持久运行架构、CLI 同步助手、主板 UI 和设置入口点，以便操作员可以预览、解决冲突并激活本地到云同步。 （[#6548]（https://github.com/paperclipai/paperclip/pull/6548），@cryppadotta）
- **ACPX-Claude 适配器开箱即用无缝工作** - `acpx_local` 适配器现在可以解析裸露的 Claude 模型 ID，显示真实的诊断详细信息而不是不透明的“内部错误”日志，并尊重用户 `~/.claude/settings.json` 权限，因此首次运行的 Claude 本地 ACPX 代理不会陷入困境。 （[#6590]（https://github.com/paperclipai/paperclip/pull/6590），@devinfoley）

## 改进

- **作用域代理权限和分配控制** - 问题和代理分配突变现在通过真正的授权服务运行，具有受保护的分配实施、用于公司设置插槽和策略/授予管理的插件 SDK/主机 API、针对被阻止问题的立即重试功能以及增量主体访问兼容性回填。 （[#6386]（https://github.com/paperclipai/paperclip/pull/6386），@cryppadotta）
- **AWS 提供商保管库设置方便操作员** - Secrets 页面现在提供 AWS 提供商保管库发现功能，包括预填充、删除流程和 Storybook 覆盖范围，因此外部保管库配置不再需要手动输入元数据。 （[#6381]（https://github.com/paperclipai/paperclip/pull/6381），@cryppadotta）
- **SecretBindingPicker 连接到插件配置表单** - JSON-schema 秘密引用字段（E2B、Modal、Cloudflare、Daytona 等）现在呈现规范秘密选择器而不是普通密码输入，因此绑定存储的秘密不再需要复制粘贴 UUID。 （[#6339]（https://github.com/paperclipai/paperclip/pull/6339），@devinfoley）
- **外部代理邀请移至添加代理模式** - 自带代理加入现在位于本地/托管代理创建旁边，具有面向代理的提示结果视图和后退导航，而不是隐藏在特定于 OpenClaw 的公司邀请设置后面。 （[#6183]（https://github.com/paperclipai/paperclip/pull/6183），@aronprins）
- **移动板流程感觉更流畅** - 移动新问题对话框高度、优先级溢出、公司设置导航、插件路由侧边栏选择、主屏幕应用程序模式下的浏览器控件以及小触摸目标/菜单滚动错误都已修复。 （[#6550]（https://github.com/paperclipai/paperclip/pull/6550），[#6384]（https://github.com/paperclipai/paperclip/pull/6384），@cryppadotta）
- **插件运行时的范围对其公司更严格** - 插件工作人员到主机的调用现在传播主机拥有的调用上下文，`performAction` 携带经过身份验证的参与者上下文，公司调用范围在桥接调用上强制执行，并且插件操作问题不属于正常问题表面。 （[#6547]（https://github.com/paperclipai/paperclip/pull/6547），@cryppadotta）
- **运行时和租户导入路径更可靠** - 嵌入式 Postgres 现在在 CLI/server/test 启动之前引导本机运行时，异步租户导入作业已延迟验证，并且 trusted 云租户导入不再使合法服务器到服务器流量的浏览器源防护失败。 （[#6549]（https://github.com/paperclipai/paperclip/pull/6549），[#6378]（https://github.com/paperclipai/paperclip/pull/6378），@cryppadotta）
- **控制平面状态转换更严格** - 更新问题列表上的分页排序清晰，计划重试评论行为，待定插件迁移在热重载时重新应用，插件模式工作树种子安全恢复，过时请求确认在用户评论后过期，反馈导出关闭在没有数据库不可用循环的情况下耗尽。 （[#6380]（https://github.com/paperclipai/paperclip/pull/6380），@cryppadotta）
- **廉价恢复模型与实际工作隔离** - 仅状态恢复现在带有显式保护上下文，路由保护在廉价运行期间阻止可交付的突变，并且廉价配置文件提示不再泄漏到正常的源工作重试中。 （[#6371]（https://github.com/paperclipai/paperclip/pull/6371），@cryppadotta）
- **5 月 17 日分支土地的邀请流程、项目和工作区完善** - 邀请登陆重用共享公司查询助手，恢复现有成员邀请行为和复制后备，正确选择可重用工作区选择，修复工作树身份验证和静态 SPA 后备，固定 Markdown 包装和插件槽注册，以及项目页面排序土地。 （[#6604]（https://github.com/paperclipai/paperclip/pull/6604），[#6210]（https://github.com/paperclipai/paperclip/pull/6210），@cryppadotta）
- **沙盒提供者插件不再混乱实例设置** - 仅驱动程序插件（E2B、exe.dev、Modal）从每个插件侧边栏组中隐藏，因为它们没有自己的设置页面并且已经重定向到环境。 （[#6341]（https://github.com/paperclipai/paperclip/pull/6341），@devinfoley）
- **收件箱行更加干净** - 琥珀色“规划”药丸已从 `IssueRow` 中移除；计划模式本身、作曲家切换和工作模式合同均未受影响。 （[#6269]（https://github.com/paperclipai/paperclip/pull/6269），@cryppadotta）
- **插件创作指南反映了托管资源** - 插件创作文档针对当前的托管功能模型进行了更新，因此插件作者不会根据过时的指南进行编写。 （[#6261]（https://github.com/paperclipai/paperclip/pull/6261），@cryppadotta）

## 修复

- **E2B 心跳在 5/11 分钟时停止失败** - 工作区 tar 上传现在会删除 GNU tar 在 Linux 上拒绝的 macOS `LIBARCHIVE.xattr.*` PAX 标头，并且 `timeoutMs`/`sleepAfter` 每次执行都会刷新，因此 E2B 和 Cloudflare 沙箱不会在心跳之间过期。 （[#6560]（https://github.com/paperclipai/paperclip/pull/6560），@devinfoley）
- **登录后邀请页面不再变为空白** - `CompanyProvider` 和邀请登陆页面现在共享单个公司查询形状，修复了 React Query 键键冲突导致的 `companiesQuery.data?.some is not a function` 崩溃。 （[#6433]（https://github.com/paperclipai/paperclip/pull/6433），@aronprins）
- **公司创建在包装前缀冲突中幸存下来** - 重试检测器现在会针对 `companies_issue_prefix_idx` 唯一约束遍历 Drizzle 0.45.x 错误原因链，因此生成的前缀冲突会重试，而不是 500-ing。 （[#6423]（https://github.com/paperclipai/paperclip/pull/6423），@aronprins）
- **自动完成在新问题对话框中工作** - 通过主体级门户呈现的浮动自动完成菜单现在被标记为允许的对话框外部 UI，因此可以在 Radix Dialog 内选择完成项目，而无需吃掉指针事件。 （[#6311]（https://github.com/paperclipai/paperclip/pull/6311），@cryppadotta）
- **`paperclip worktree init --force` 不再擦除 `<repo>/.paperclip/worktrees/`** - 初始化路径停止递归删除整个 `<repo>/.paperclip/` 目录，现在仅重写 `config.json` 和 `.env`。 （[#6240]（https://github.com/paperclipai/paperclip/pull/6240），@devinfoley）
- **新的秘密形式在长值中保持可用** - 共享的 `Textarea` 原语现在应用 `min-w-0 max-w-full`，因此长的牢不可破的秘密不再将创建/取消按钮推离屏幕。 （[#6222]（https://github.com/paperclipai/paperclip/pull/6222），@devinfoley）
- **冷启动沙箱探针不再超时** - `environmentProbe` 工作线程 RPC 超时提高到 120 秒，以便 Modal（和其他冷启动提供程序）在探针失败之前完成启动。 （[#6289]（https://github.com/paperclipai/paperclip/pull/6289），@devinfoley）
- **Docker 构建 find `link-plugin-dev-sdk.mjs`** - Dockerfile `deps` 阶段现在会在 `pnpm install` 之前复制脚本，因此 `plugin-workspace-diff` 安装后挂钩不会因 `Cannot find module` 而失败。 （[#6338]（https://github.com/paperclipai/paperclip/pull/6338），@devinfoley）

## 贡献者

感谢所有为此版本做出贡献的人！

@aronprins

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.525.0` · 📅 发布：2026-05-25 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.525.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
