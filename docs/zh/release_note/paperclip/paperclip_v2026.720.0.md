---
title: "paperclip v2026.720.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.720.0"
version: "v2026.720.0"
published: "2026-07-20"
type: "minor"
lang: "zh"
---

# paperclip v2026.720.0

# 纸clip v2026.720.0

> 发布时间：2026-07-20

## 亮点

- **Skill Studio 和技能组织** — 具有沙盒测试运行功能的三窗格技能 IDE，因此您可以在不离开 Paperclip 的情况下创作、编辑和尝试技能。现在，技能通过专用的“我的技能”视图组织到嵌套文件夹中，您可以直接从项目导入技能，并且公司技能政策默认开放，并通过核心用户体验来加强它。公司技能分支在落地之前会进行预检查，并且 Markdown 编辑会得到适当的脏跟踪并保存。 ([#9241](https://github.com/paperclipai/paperclip/pull/9241)、[#9235](https://github.com/paperclipai/paperclip/pull/9235)、[#9356](https://github.com/paperclipai/paperclip/pull/9356)、[#9633](https://github.com/paperclipai/paperclip/pull/9633)、[#9620](https://github.com/paperclipai/paperclip/pull/9620)、[#9564](https://github.com/paperclipai/paperclip/pull/9564))
- **注意力队列和决策** — 新的注意力队列和决策界面将需要您输入的所有内容都集中到一个地方，并具有更快的滚动速度和可读且适合移动设备的决策行。 ([#9380](https://github.com/paperclipai/paperclip/pull/9380)、[#9468](https://github.com/paperclipai/paperclip/pull/9468)、[#9472](https://github.com/paperclipai/paperclip/pull/9472))
- **更好的搜索** - 搜索获得过滤器、排序和运算符，具有命令调色板奇偶性，因此您可以在任何地方以相同的方式查找问题和实体，以及新的批量提取端点。 （[#9327]（https://github.com/paperclipai/paperclip/pull/9327），[#9507]（https://github.com/paperclipai/paperclip/pull/9507））
- **更严格的自我修复运行** — 运行重启恢复、工作区自我修复、配额感知重试和失败运行指标意味着您的实例在涉及您之前会更加努力。现在，恢复按故障原因进行路由，等待提供程序配额重置，限制串行重复，并通过速率警报报告可观察性指标。计划批准延续和外部等待活动在失败的唤醒中是持久的，并且解决的阻塞程序可靠地唤醒依赖于它们的任务。 ([#9183](https://github.com/paperclipai/paperclip/pull/9183)、[#9331](https://github.com/paperclipai/paperclip/pull/9331)、[#9373](https://github.com/paperclipai/paperclip/pull/9373)、[#9229](https://github.com/paperclipai/paperclip/pull/9229)、[#9634](https://github.com/paperclipai/paperclip/pull/9634)、[#9635](https://github.com/paperclipai/paperclip/pull/9635)、 [#9651](https://github.com/paperclipai/paperclip/pull/9651)、[#9644](https://github.com/paperclipai/paperclip/pull/9644))

## 改进

- **沙盒执行** - ACP 会话现在可以在沙盒执行目标中运行，并为 Grok 本地适配器提供沙盒支持、跨配置测试和保存应用的自定义映像快照，以及将沙盒挂钟后备功能提高到四个小时以进行长时间运行的工作。 ([#9390](https://github.com/paperclipai/paperclip/pull/9390)、[#9338](https://github.com/paperclipai/paperclip/pull/9338)、[#9385](https://github.com/paperclipai/paperclip/pull/9385)、[#9232](https://github.com/paperclipai/paperclip/pull/9232))
- **问题监视器随处可见** — 外部服务和问题监视器现在跨任务表面和问题属性显示，因此您可以一目了然地看到任务正在等待什么。 ([#9783](https://github.com/paperclipai/paperclip/pull/9783))
- **重新设计了具有工作表内代理访问权限的秘密对话框** — 重新设计了秘密对话框，您现在可以直接在工作表中授予每个代理秘密访问权限。 ([#9797](https://github.com/paperclipai/paperclip/pull/9797))
- **代理可以安全地整理收件箱** — 代理现在可以在受管理的收件箱存档访问策略下存档和整理用户收件箱。 ([#9724](https://github.com/paperclipai/paperclip/pull/9724)、[#9658](https://github.com/paperclipai/paperclip/pull/9658)、[#9654](https://github.com/paperclipai/paperclip/pull/9654))
- **主动公关园艺工作流程** — 新的公关园艺工作流程使开放的拉取请求保持移动。 ([#9510](https://github.com/paperclipai/paperclip/pull/9510))
- **稳定的工作区服务控件** — 工作区服务控制栏已稳定，因此启动/停止/重新启动控件的行为可预测。 ([#9705](https://github.com/paperclipai/paperclip/pull/9705))
- **活动日志上的责任用户归因** — 活动日志现在会标记责任用户，并且问题归因是明确的。 ([#9731](https://github.com/paperclipai/paperclip/pull/9731))
- **更清晰的被阻止问题消息传送** — 当消息无法重新打开被阻止问题时，UI 现在会解释原因（规则 C）。 ([#9417](https://github.com/paperclipai/paperclip/pull/9417))
- **可中断的排队运行** — 您现在可以中断排队的问题运行，而不是等待它们结束。 ([#9725](https://github.com/paperclipai/paperclip/pull/9725))
- **更清晰的任务级模型覆盖** - 问题属性现在澄清任务级模型覆盖。 ([#9710](https://github.com/paperclipai/paperclip/pull/9710))
- **设计系统融合** - 单源设计令牌、视觉回归套件和重新调整的主题，加上广泛的卡/徽章采用、乘法半径阶梯和统一的列表表面。任务状态字形现在使用 Lucide 图标。 ([#9134](https://github.com/paperclipai/paperclip/pull/9134)、[#9240](https://github.com/paperclipai/paperclip/pull/9240)、[#9395](https://github.com/paperclipai/paperclip/pull/9395))
- **活动门控例程** — 计划的运行可以根据外部活动进行门控，因此例程仅在有实际工作要做时才会触发。 ([#9436](https://github.com/paperclipai/paperclip/pull/9436))
- **ACP 是本地适配器的默认引擎** — 本地编码适配器现在默认通过 ACP 运行，出于安全考虑，本地编码进程受到限制，并且 Claude ACP client 已更新。 ([#9238](https://github.com/paperclipai/paperclip/pull/9238)、[#9504](https://github.com/paperclipai/paperclip/pull/9504)、[#9484](https://github.com/paperclipai/paperclip/pull/9484))
- **支出和成本遥测** — ACP 通道使用情况和成本现在流入支出遥测，记录未定价的 CLI 使用情况，并记录凭证运行状况保留。 ([#9471](https://github.com/paperclipai/paperclip/pull/9471)、[#9505](https://github.com/paperclipai/paperclip/pull/9505)、[#9248](https://github.com/paperclipai/paperclip/pull/9248)、@nickyleach)
- **持久运行日志** — 运行日志现在已镜像到持久对象存储支持的存储。 （[#8984]（https://github.com/paperclipai/paperclip/pull/8984），@stubbi）
- **Codex 和模型更新** — 更新了 Codex 适配器 GPT-5.6 默认值，并将 `gpt-5.4-mini` 添加到 Codex/OpenCode 选择（加上 `openai/gpt-5.5` 到 OpenCode）。 （[#9352]（https://github.com/paperclipai/paperclip/pull/9352），[#4357]（https://github.com/paperclipai/paperclip/pull/4357），@supertaz）
- **在代理运行时映像中发送 ripgrep** — `rg` 现在在基本代理映像中开箱即用。 （[#8976]（https://github.com/paperclipai/paperclip/pull/8976），@stubbi）
- **更少的冗余唤醒** - 冗余问题重新唤醒受到限制，并且每个新的心跳都会注入执行合约一次，从而减少重复的代币支出。 （[#9470]（https://github.com/paperclipai/paperclip/pull/9470），[#9469]（https://github.com/paperclipai/paperclip/pull/9469））
- **显示未发布版本的源 SHA** - 未正式发布的版本现在会显示其源 SHA，即使没有 Git 元数据也会保留。 （[#9508]（https://github.com/paperclipai/paperclip/pull/9508），[#9638]（https://github.com/paperclipai/paperclip/pull/9638））
- **代理指令的散文编辑器** — Markdown 代理指令现在使用散文编辑器。 ([#9332](https://github.com/paperclipai/paperclip/pull/9332))
- **健康门控开发服务** — Paperclip 开发服务现在需要在考虑之前做好健康准备。 ([#9269](https://github.com/paperclipai/paperclip/pull/9269))
- **更严格的环境删除** — 环境删除得到强化，现在显示其删除爆炸半径。 （[#9250]（https://github.com/paperclipai/paperclip/pull/9250），@nickyeach）
- **更快的版本验证** — 版本验证工作流程是并行的，并且 npm 注册表版本查询是批处理的。 （[#9168]（https://github.com/paperclipai/paperclip/pull/9168），[#9202]（https://github.com/paperclipai/paperclip/pull/9202））

## 实验性的

这些功能在实验设置后面提供 - 使他们能够在实验设置下尝试它们。

- **MCP 工具网关和应用程序** — 连接模型上下文协议工具的一流受管控方式。指定的 MCP 网关代理每个工具调用，受管理的访问合同和工具访问策略决定哪些代理和配置文件可以使用哪些工具，而新的工具、配置文件和应用程序界面可让您从 UI 连接、安装和冒烟测试连接。 ([#9556](https://github.com/paperclipai/paperclip/pull/9556)、[#9557](https://github.com/paperclipai/paperclip/pull/9557)、[#9558](https://github.com/paperclipai/paperclip/pull/9558)、[#9559](https://github.com/paperclipai/paperclip/pull/9559)、[#9560](https://github.com/paperclipai/paperclip/pull/9560)、[#9561](https://github.com/paperclipai/paperclip/pull/9561)、 [#9562](https://github.com/paperclipai/paperclip/pull/9562)、[#9563](https://github.com/paperclipai/paperclip/pull/9563))
- **内置摘要器和摘要槽** — 内置摘要器代理和摘要槽在 UI 中显示简洁、始终最新的摘要。 ([#9713](https://github.com/paperclipai/paperclip/pull/9713))
- **决策培训** — 新的决策培训库和检查器可让您捕获决策快照并查看代理如何随时间做出决策，并由快照基础和图像库支持，以通过视觉上下文进行决策。 ([#9702](https://github.com/paperclipai/paperclip/pull/9702)、[#9779](https://github.com/paperclipai/paperclip/pull/9779)、[#9532](https://github.com/paperclipai/paperclip/pull/9532))
- **案例** - 一个新的一流案例对象为您提供结构化的、有文档支持的记录，用于发布和社交线程等内容。 ([#9198](https://github.com/paperclipai/paperclip/pull/9198))

## 修复

- **跨租户存在预言关闭** — API 现在返回 `404` 而不是 `403`，因此它不再泄漏另一个租户的资源是否存在。 （[#3967]（https://github.com/paperclipai/paperclip/pull/3967），@stubbi）
- **更强的公共邀请** - 邀请令牌熵扩大，公共邀请端点受到速率限制。 （[#8979]（https://github.com/paperclipai/paperclip/pull/8979），@stubbi）
- **api压缩不再损坏身份验证** — 修复了 gzip clients 损坏或丢失更好的身份验证响应。 ([#9381](https://github.com/paperclipai/paperclip/pull/9381))
- **React 性能跟踪内存泄漏** — 收获了长期存在的选项卡中泄漏内存的 React 19.2 性能跟踪测量。 ([#9827](https://github.com/paperclipai/paperclip/pull/9827))
- **不再有重复任务或恢复循环** — 防止重复任务创建和恢复循环，重复创建进行重复数据删除，并停止取消的生产力审核循环。 ([#9648](https://github.com/paperclipai/paperclip/pull/9648)、[#9650](https://github.com/paperclipai/paperclip/pull/9650)、[#5210](https://github.com/paperclipai/paperclip/pull/5210)、@YanisThePie)
- **可靠的热重启** — 恢复热重启运行采用并修复热重启关闭死锁。 （[#9647]（https://github.com/paperclipai/paperclip/pull/9647），[#9670]（https://github.com/paperclipai/paperclip/pull/9670））
- **持久延续** — 接受的交互延续恢复受到限制，搁浅的恢复延续得到恢复，并且在实时延续期间抑制过时的切换警报。 ([#9656](https://github.com/paperclipai/paperclip/pull/9656)、[#9630](https://github.com/paperclipai/paperclip/pull/9630)、[#9695](https://github.com/paperclipai/paperclip/pull/9695))
- **Codex 身份验证强化** — 对刷新身份验证失败进行分类，主机不可用的 Codex 身份验证合并失败关闭，Codex 模型在启动时配置，输出不活动超时提高到 30 分钟，原始子输出计为活动，并标记阴影沙箱身份验证。 Codex auth-merge 脚本已移至具有出站复制回主资产恢复路径的适配器中。 ([#9598](https://github.com/paperclipai/paperclip/pull/9598)、[#9276](https://github.com/paperclipai/paperclip/pull/9276)、[#9700](https://github.com/paperclipai/paperclip/pull/9700)、[#9699](https://github.com/paperclipai/paperclip/pull/9699)、[#9632](https://github.com/paperclipai/paperclip/pull/9632)、[#9259](https://github.com/paperclipai/paperclip/pull/9259)、 [#9785](https://github.com/paperclipai/paperclip/pull/9785)、[#9787](https://github.com/paperclipai/paperclip/pull/9787)、[#9788](https://github.com/paperclipai/paperclip/pull/9788)、@nickyeach)
- **解释 AWS 秘密失败** — AWS 秘密创建失败现在在 UI 中进行解释，而不是默默地失败。 ([#9645](https://github.com/paperclipai/paperclip/pull/9645))
- **例行追赶合并** — 每小时一次的追赶运行被合并，这样积压的订单就不会蜂拥而至。 ([#9649](https://github.com/paperclipai/paperclip/pull/9649))
- **工作树端口冲突** — 防止重复发生的工作树端口冲突，并且适配器环境被转发到本地代理，同时运行时环境保持权威。 （[#9642]（https://github.com/paperclipai/paperclip/pull/9642），[#9617]（https://github.com/paperclipai/paperclip/pull/9617））
- **搜索和公关园艺强化** — 遵守摘录匹配限制，并强化公关园艺候选发现。 ([#9652](https://github.com/paperclipai/paperclip/pull/9652))
- **公司技能尊重负责任的用户授予** — 公司技能访问现在尊重负责任的用户授予。 ([#9571](https://github.com/paperclipai/paperclip/pull/9571))
- **决策卡在机器评论中幸存下来** — 机器撰写的评论不再取代决策卡。 （[#9015]（https://github.com/paperclipai/paperclip/pull/9015），@nsollazzo）
- **适配器的 PID 持久性** — `onSpawn` 被转发到 Hermes 和进程适配器，以便 PID 持续存在。 （[#8722]（https://github.com/paperclipai/paperclip/pull/8722），@machjesusmoto）
- **可靠的进程拆卸** — `runChildProcess` 现在在活性上升级为 `SIGKILL`，而不是 trusting `child.killed`。 （[#8598]（https://github.com/paperclipai/paperclip/pull/8598），@justinltodd）
- **系统评论显示为“您”** — 系统撰写的评论现在显示为“您”，而不是“Paperclip”。 （[#6330]（https://github.com/paperclipai/paperclip/pull/6330），@BorClaw）
- **正确的心跳活动归因** — 心跳调用/恢复现在使用 `run.id` 作为活动日志。 （[#3424]（https://github.com/paperclipai/paperclip/pull/3424），@tmartin2113）
- **前缀感知导出/导入链接** — 公司导出/导入链接在路径前缀后面再次具有前缀感知功能。 （[#6648]（https://github.com/paperclipai/paperclip/pull/6648），@qbamca）
- **容忍空配置文件名称** — 配置文件/会话解析中的空字符串用户名不再中断。 （[#8986]（https://github.com/paperclipai/paperclip/pull/8986），@stubbi）
- **工作树修复** — 修复脏和外部分支执行工作树，修复前需要目标证明，工作树执行仅在激活后开始。 ([#9297](https://github.com/paperclipai/paperclip/pull/9297)、[#9414](https://github.com/paperclipai/paperclip/pull/9414)、[#9374](https://github.com/paperclipai/paperclip/pull/9374))
- **工作区分支协调** - 添加了自动转发执行工作区分支协调及其路线，并避免在子实现之前冻结已接受的计划工作区分支。 ([#9172](https://github.com/paperclipai/paperclip/pull/9172)、[#9170](https://github.com/paperclipai/paperclip/pull/9170)、[#9233](https://github.com/paperclipai/paperclip/pull/9233)、@nickyeach)
- **请求风暴和轮询修复** — 修复了请求风暴轮询循环、问题列表合并、限制共享轮询缓存、对公司实时运行列表进行事件溯源，并减少导致选项卡内存膨胀的实时更新搅动。 ([#9190](https://github.com/paperclipai/paperclip/pull/9190)、[#9406](https://github.com/paperclipai/paperclip/pull/9406)、[#9627](https://github.com/paperclipai/paperclip/pull/9627)、[#9701](https://github.com/paperclipai/paperclip/pull/9701)、[#9624](https://github.com/paperclipai/paperclip/pull/9624))
- **实时运行可读性和内存** - 实时运行流文本更具可读性，实时代理运行转录缓冲区的上限为绑定选项卡内存，并且不再在每次渲染时重新创建 Markdown 提及观察者。 ([#9330](https://github.com/paperclipai/paperclip/pull/9330)、[#9569](https://github.com/paperclipai/paperclip/pull/9569)、[#3809](https://github.com/paperclipai/paperclip/pull/3809)、@LeonSGP43)
- **线程保持不变** — 当您阅读时，问题线程不再跳转到最新评论。 ([#9354](https://github.com/paperclipai/paperclip/pull/9354))
- **Markdown 渲染修复** — 渲染的 Markdown 列表标记保持可见，编号列表不再在左侧被截断。 ([#9359](https://github.com/paperclipai/paperclip/pull/9359))
- **收件箱和列表优化** - 收件箱未读徽章不再缩进行，未读徽章对齐已修复，收件箱悬停在列表重塑中与 j/k 键盘选择保持同步。代理名称在移动代理索引上保持可见，收件箱/任务列表嵌套、悬停性能和例程详细信息均已整理。 ([#9767](https://github.com/paperclipai/paperclip/pull/9767)、[#9685](https://github.com/paperclipai/paperclip/pull/9685)、[#9680](https://github.com/paperclipai/paperclip/pull/9680)、[#9236](https://github.com/paperclipai/paperclip/pull/9236)、[#9317](https://github.com/paperclipai/paperclip/pull/9317)、[#9383](https://github.com/paperclipai/paperclip/pull/9383))
- **环境编辑是一个路由页面** - 编辑环境现在是其自己的路线，并带有详细的未保存更改横幅，可防止草稿丢失。 （[#9386]（https://github.com/paperclipai/paperclip/pull/9386），[#9391]（https://github.com/paperclipai/paperclip/pull/9391））
- **实验自动恢复对话框** — 启用实验不再使 UI 变暗和锁定。 ([#9513](https://github.com/paperclipai/paperclip/pull/9513))
- **自定义映像设置** — 自定义映像设置获取适当的公司上下文，并且自定义映像快照保持应用于探测和保存。 （[#9028]（https://github.com/paperclipai/paperclip/pull/9028），[#9385]（https://github.com/paperclipai/paperclip/pull/9385））
- **Reflection Coach 和内置资产** — 当 Reflection Coach 资产丢失时，启动不再崩溃，并且内置代理资产保留在服务器构建中。 （[#9351]（https://github.com/paperclipai/paperclip/pull/9351），[#9339]（https://github.com/paperclipai/paperclip/pull/9339））
- **跳过技能路线的用户机密解析** — 技能路线不再尝试解析用户机密。
- **超时自描述** — `acpx_local` 超时现在是自描述的。 ([#9232](https://github.com/paperclipai/paperclip/pull/9232))
- **沙盒网络弹性** — 停滞的 Daytona Git 网络命令现在会快速失败。

## 升级指南

- 此版本为新的 MCP 工具网关、工具访问策略、OAuth 状态、连接安装、Smoke Lab、决策训练快照、摘要槽、收件箱存档策略和审计/活动归因添加了大量附加数据库迁移。迁移在启动时自动运行 - 无需手动操作。
- MCP 工具网关、案例、决策训练、内置摘要生成器和沙箱执行均位于实验设置后面。在实验设置下启用它们来尝试它们。

## 贡献者

此版本有来自 16 位贡献者的 195 次提交。感谢所有为此版本做出贡献的人！

@bluzername、@BorClaw、@justinltodd、@LeonSGP43、@machjesusmoto、@nickyleach、@nsollazzo、@qbamca、@RobinALG87、@stubbi、@supertaz、@tmartin2113、@YanisThePie

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.720.0` · 📅 发布：2026-07-20 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
