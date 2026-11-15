---
title: "paperclip v2026.707.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.707.0"
version: "v2026.707.0"
published: "2026-07-07"
type: "minor"
lang: "zh"
---

# paperclip v2026.707.0

# 纸clip v2026.707.0

> 发布时间：2026-07-07

此版本获得了 **8 位贡献者的 89 次提交**。

## 亮点

- **用户特定的运行时秘密** - 秘密的范围现在可以限于个人操作员，而不仅仅是公司。定义用户特定的秘密定义、存储每个用户的值、将它们绑定到环境，并且借助新的负责用户运行归因，Paperclip 可以确定性地检查运行背后的人员在调度之前是否确实提供了运行所需的值。这是安全多用户和云执行的真正先决条件。 （[#8825]（https://github.com/paperclipai/paperclip/pull/8825），@cryppadotta）
- **工作时间线** - 新的公司范围内的工作时间线页面呈现紧凑的甘特式 SVG 视图，显示代理何时工作、交接如何发生以及工作重叠的位置 - 因此您可以一目了然地扫描整个公司的多代理执行情况，而不是逐一打开运行。该时间表由具有强化安全过滤器的专用公司端点支持。 ([#8938](https://github.com/paperclipai/paperclip/pull/8938)、[#8880](https://github.com/paperclipai/paperclip/pull/8880)、[#8875](https://github.com/paperclipai/paperclip/pull/8875)、[#8923](https://github.com/paperclipai/paperclip/pull/8923)、@cryppadotta)
- **使用内置 SSH 终端自定义沙箱映像** - 构建可重用的自定义沙箱映像并在无需离开浏览器的情况下进行设置：嵌入式 SSH 终端允许您直接从环境配置流程安装包并准备映像，并且自定义映像现在的范围仅限于其实例环境。不再需要将 SSH 命令复制到外部终端中。 ([#8911](https://github.com/paperclipai/paperclip/pull/8911)、[#8794](https://github.com/paperclipai/paperclip/pull/8794)、[#8850](https://github.com/paperclipai/paperclip/pull/8850)、@devinfoley)
- **重新设计的环境变量编辑器** - 旧版 env-var 编辑器被替换为在配置环境变量的任何地方（代理、项目、例程、公司环境）使用的单个可重用编辑器。它一致地处理文本值、秘密引用、草稿行和敏感值警告，并提供更清晰的将普通值转换为秘密引用的功能。 （[#8930]（https://github.com/paperclipai/paperclip/pull/8930），@cryppadotta）
- **One-click 发散工作恢复** - 恢复卡现在可以诊断任务分支何时偏离其基础，并提供 one-click 隔离重新发布，因此您可以恢复卡住或冲突的工作，而无需手动解开 git 状态。 （[#9136]（https://github.com/paperclipai/paperclip/pull/9136），@nickyleach）
- **侧边栏中的加星标资源** - 将您最常接触的项目、代理和任务固定到侧边栏中的专用加星标部分，以供单 click 访问。 （[#9085]（https://github.com/paperclipai/paperclip/pull/9085），@cryppadotta）

## 改进

- **可选的 Ramp 技能** - 新的可选目录技能将代理连接到 Ramp 的财务设置手册（帐户注册、卡片和支出控制），同时使每个操作都服从于 Paperclip 的批准门和失败关闭的主机白名单。公司可以选择加入，审阅者可以在一份已发货的目录条目中查看源模型和安全规则。 （[#9157]（https://github.com/paperclipai/paperclip/pull/9157），@cryppadotta）
- **更快地加载问题详细信息** - 问题详细信息和活动分类帐响应被修剪到这些视图实际需要的字段，从而删除大型嵌入式项目、工作区和运行时元数据有效负载。现在，工作区的活动问题加载速度明显加快，而无需更改底层持久性模型。 （[#9125]（https://github.com/paperclipai/paperclip/pull/9125），@cryppadotta）
- **在 ⌘K 命令选项板中提前输入项目** - 匹配的项目现在在命令选项板中的任务之上排名，因此键入项目名称会直接跳转到该项目名称，而不是将其隐藏在任务下，并且项目名称始终在行中可见。 （[#8773]（https://github.com/paperclipai/paperclip/pull/8773），@scotttong）
- **Gemini 3.1 Pro 型号** - `gemini-local` 适配器添加了 Gemini 3.1 Pro 型号。 （[#1602]（https://github.com/paperclipai/paperclip/pull/1602），@woosal1337）
- **运行日志中的实时检测信号进度** - 实时代理运行查看器现在将检测信号进度事件呈现为系统日志行，因此在长时间操作期间会显示有用的进度文本，而不是在另一个事件到达之前保持不可见。 （[#8965]（https://github.com/paperclipai/paperclip/pull/8965），@devinfoley）
- **沙盒运行期间更好的实时反馈** - 沙盒运行在执行时呈现更清晰的实时代理反馈。 （[#8915]（https://github.com/paperclipai/paperclip/pull/8915），@devinfoley）
- **收件箱行中的实时后代状态** - 收件箱行现在显示后代工作的实时状态，因此父任务反映了其子任务实际正在执行的操作。 （[#8876]（https://github.com/paperclipai/paperclip/pull/8876），@cryppadotta）
- **操作员问题工作流程完善** - 面向操作员的问题工作流程 UI 获得了清理通行证，以获得更清晰的状态和下一步的可供性。 （[#9091]（https://github.com/paperclipai/paperclip/pull/9091），@cryppadotta）
- **更干净的问题属性窗格** - 问题属性窗格获得了清理通道，并且问题媒体附件库现在跨表面统一。 （[#8941]（https://github.com/paperclipai/paperclip/pull/8941），[#8785]（https://github.com/paperclipai/paperclip/pull/8785），@cryppadotta）
- **管道自动化标题模板** - 管道自动化支持标题模板，因此生成的问题可以获得一致的模板化标题。 （[#8787]（https://github.com/paperclipai/paperclip/pull/8787），@cryppadotta）
- **重复数据删除的管道自动化运行状况警告** - 管道自动化运行状况警告已进行重复数据删除，因此不会多次报告同一问题。 （[#9090]（https://github.com/paperclipai/paperclip/pull/9090），@cryppadotta）
- **重复数据删除的看门狗审查唤醒** - 开放式看门狗审查唤醒已进行重复数据删除，因此单次审查不会触发重复唤醒。 （[#9148]（https://github.com/paperclipai/paperclip/pull/9148），@cryppadotta）
- **捆绑的 UI Web 字体** - 应用程序现在捆绑其 UI Web 字体，而不是在运行时获取它们，因此即使离线或在锁定的网络中，界面也会以一致的版式呈现。 （[#9020]（https://github.com/paperclipai/paperclip/pull/9020），@cryppadotta）
- **只读诊断端点** - 新的只读诊断端点公开问题子树、问题阻止程序和工作区分支祖先状态，从而可以更轻松地检查工作陷入困境的原因，而无需更改任何内容。 ([#9135](https://github.com/paperclipai/paperclip/pull/9135)、[#9114](https://github.com/paperclipai/paperclip/pull/9114)、[#9117](https://github.com/paperclipai/paperclip/pull/9117)、@nickyleach)
- **分支不连贯遏制** - 托管工作区现在包含分支不连贯情况，而不是让它们级联，因此单个错误的分支状态不会阻碍下游运行。 （[#9131]（https://github.com/paperclipai/paperclip/pull/9131），@nickyeach）
- **更快的升级** - 缓慢的问题评论归因回填已重新定位为快速、幂等的迁移，因此升级可以更快、更安全地重新运行。 （[#9108]（https://github.com/paperclipai/paperclip/pull/9108），@nickyleach）
- **复选框选择包含在连续唤醒中** - 复选框选择现在包含在连续唤醒中，因此恢复任务的代理会保留您所做的选择。 （[#8893]（https://github.com/paperclipai/paperclip/pull/8893），@cryppadotta）
- **在唤醒期间保留计划审查上下文** - 当代理被唤醒时，计划审查上下文会被保留，因此长时间运行的计划工作不会丢失其线程。 （[#8649]（https://github.com/paperclipai/paperclip/pull/8649），@cryppadotta）
- **依赖唤醒协调后备** - 协调后备使依赖驱动的唤醒更加可靠，因此当阻止程序解决时，被阻止的任务不会陷入困境。 （[#8943]（https://github.com/paperclipai/paperclip/pull/8943），@nickyeach）
- **询问用户问题在被取代时过期** - 一旦稍后的评论取代了待处理的询问用户问题，它们就会过期，因此过时的提示不会持续存在。 （[#8799]（https://github.com/paperclipai/paperclip/pull/8799），@cryppadotta）
- **标准化适配器显示标签** - 适配器显示标签经过标准化，以在整个 UI 中保持一致的外观。 （[#8913]（https://github.com/paperclipai/paperclip/pull/8913），@devinfoley）
- **遥测数据合约** - 此版本添加了记录的遥测数据合约、生成的 client 遥测类型以及交互解析的遥测信号 - 为更可靠、类型良好的匿名使用见解奠定了基础。 ([#8886](https://github.com/paperclipai/paperclip/pull/8886)、[#8818](https://github.com/paperclipai/paperclip/pull/8818)、[#8824](https://github.com/paperclipai/paperclip/pull/8824)、@nickyeach)
- **辅助功能改进** - 问题视图切换和目标树展开按钮获得正确的 ARIA 属性和工具提示，日期预设和星期切换按钮现在公开 `aria-pressed`。 ([#1937](https://github.com/paperclipai/paperclip/pull/1937)、[#1939](https://github.com/paperclipai/paperclip/pull/1939)、[#1913](https://github.com/paperclipai/paperclip/pull/1913)、@bluzername)

## 修复

- **工作时间轴演员头像** - 演员头像现在可以在工作时间轴上正确渲染，而不是显示丢失或错误的图像。 （[#9152]（https://github.com/paperclipai/paperclip/pull/9152），@cryppadotta）
- **iOS 收件箱存档手势** - 收件箱滑动存档控件不再跨行共享一个待处理状态门，因此在移动设备上存档一项不会再让其他收件箱存档手势感到卡住。 （[#9154]（https://github.com/paperclipai/paperclip/pull/9154），@cryppadotta）
- **删除重复的与适配器无关的配置键** - 与适配器无关的配置键不再重复，因此在切换适配器时代理配置保持干净。 （[#9058]（https://github.com/paperclipai/paperclip/pull/9058），@nickyeach）
- **切换适配器类型时保留技能选择** - 更改代理的适配器类型不再删除您已经做出的技能选择。 ([#8975](https://github.com/paperclipai/paperclip/pull/8975), @fengwuqingchen)
- **负责用户迁移强化** - 对负责用户迁移路径的一批修复：收件箱重新填充已就位更正，迁移时间戳已修复，并且心跳运行标识符引用已正确迁移 - 因此收件箱在升级后不会重新显示过时的工作。 ([#9111](https://github.com/paperclipai/paperclip/pull/9111)、[#9146](https://github.com/paperclipai/paperclip/pull/9146)、[#9107](https://github.com/paperclipai/paperclip/pull/9107)、@cryppadotta、@nickyleach)
- **数据库备份运行状况警报** - 数据库备份运行状况警报再次正确触发，而不是误报运行状况良好的备份。 （[#9147]（https://github.com/paperclipai/paperclip/pull/9147），@cryppadotta）
- **无项目工作树工作区快速失败** - 没有项目的 Git-worktree 工作区现在在检测信号设置期间失败，而不是启动无法成功的运行。 （[#9118]（https://github.com/paperclipai/paperclip/pull/9118），@nickyeach）
- **唤醒诊断编辑** - 唤醒诊断现在编辑低 trust 标识符引用，防止 untrusted 标识符泄漏到诊断输出中。 （[#9133]（https://github.com/paperclipai/paperclip/pull/9133），@nickyleach）
- **源安装版本报告** - 源安装现在从 git 元数据报告其版本，因此运行版本在标记版本之外是准确的。 （[#9103]（https://github.com/paperclipai/paperclip/pull/9103），@nickyleach）
- **OpenClaw 网关协议版本** - OpenClaw 网关适配器将 `PROTOCOL_VERSION` 提高到 4 以匹配网关，修复版本不匹配的握手问题。 （[#5984]（https://github.com/paperclipai/paperclip/pull/5984），@sparkeros）
- **UI 中的干净终端输出** - Hermes 终端输出在 UI 解析器中去除了 ANSI 转义码，因此日志可以干净地呈现，而不是显示原始转义序列。 （[#8731]（https://github.com/paperclipai/paperclip/pull/8731），@neerajdad123字节）
- **代理撰写的评论正确归属** - 代理撰写的评论现在归属于代理，而不是呈现为“论坛”。 （[#8833]（https://github.com/paperclipai/paperclip/pull/8833），@scotttong）
- **强调气泡上的降价对比度** - 修复了在强调颜色的聊天气泡上呈现的低对比度降价文本。 （[#8689]（https://github.com/paperclipai/paperclip/pull/8689），@aronprins）
- **工作空间重用和分支一致性** - 一批托管工作空间修复：继承的工作空间重用正确回退，在完成时恢复干净的分支漂移，修复分支一致性恢复，并在重用工作空间之前刷新运行配置，以便运行不会从过时的设置开始。 ([#8963](https://github.com/paperclipai/paperclip/pull/8963)、[#8914](https://github.com/paperclipai/paperclip/pull/8914)、[#8826](https://github.com/paperclipai/paperclip/pull/8826)、[#8797](https://github.com/paperclipai/paperclip/pull/8797)、@devinfoley)
- **沙盒可靠性** - 沙盒桥凭证和停滞的审查恢复已修复，沙盒恢复失败现在可以发出更好的诊断，并且沙盒 Claude 和 Codex 探测行为已得到纠正。 ([#8844](https://github.com/paperclipai/paperclip/pull/8844)、[#8903](https://github.com/paperclipai/paperclip/pull/8903)、[#8775](https://github.com/paperclipai/paperclip/pull/8775)、@devinfoley)
- **主动心跳运行 reaping** - 不再错误地收获主动心跳运行。 （[#8776]（https://github.com/paperclipai/paperclip/pull/8776），@devinfoley）
- **问题创建响应关系摘要** - 创建问题现在会在响应中返回正确的关系摘要。 （[#8901]（https://github.com/paperclipai/paperclip/pull/8901），@nickyeach）
- **看门狗属性窗格缓存** - 修复了看门狗属性窗格中的过时缓存。 （[#8786]（https://github.com/paperclipai/paperclip/pull/8786），@cryppadotta）
- **过时的服务器信息调试元数据** - 清除过时的服务器信息调试元数据。 （[#8753]（https://github.com/paperclipai/paperclip/pull/8753），@devinfoley）

## 贡献者

感谢所有为此版本做出贡献的人！

@aronprins、@bluzername、@fengwuqingchen、@ms-moar、@neerajdad123-byte、@nickyleach、@sparkeros、@woosal1337

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.707.0` · 📅 发布：2026-07-07 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.707.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
