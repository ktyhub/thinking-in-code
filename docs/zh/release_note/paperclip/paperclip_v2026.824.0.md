---
title: "paperclip v2026.824.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.824.0"
version: "v2026.824.0"
published: "2026-08-25"
type: "minor"
lang: "zh"
---

# paperclip v2026.824.0

# 纸clip v2026.824.0

> 发布时间：2026-08-24

Paperclip v2026.824.0 是 2026.817.0 的快速追随者，也是第一个完整走完金丝雀 → 夜间 → 测试版 → 稳定快乐之路的稳定版，在升级前与 `2026.818.0-beta.1` 一样浸泡。它包含 172 项提交：聊天式任务从实验过渡到默认体验，托管运行时预览可以通过 Tailscale HTTPS 访问，沙箱执行获得经过验证的提供商功能合同，您可以从产品内部登录到 Claude 和 Codex，大公司导入可以在连接中断的情况下幸存下来，以及大量长期存在的社区修复土地。

## 重大变更

这些都不需要典型安装的操作，但在升级之前请通读：

- **聊天式任务是默认设置。**“聊天式任务”实验切换消失了；任务详细信息页面现在是每个人的对话视图。新的“经典任务界面”首选项（`enableClassicTaskInterface`，替换实例设置中的 `enableTaskChatRedesign`）恢复了聊天前页面 - 页面级标题、普通评论线程、固定的属性侧边栏 - 但仅聊天功能不可用。 ([#11101](https://github.com/paperclipai/paperclip/pull/11101))
- **沙盒会话输出流现在是能力驱动的，并且三个操作员标志消失了。** 服务器的 `streamAgentSessionOutput` 设置和 Daytona 插件的 `useSessions` 和 `useLogStream` 密钥不再存在；经过验证的提供商能力快照是唯一的流决策，具有自动轮询回退功能。保存的配置仍然带有已删除的密钥，可以正常加载 - 这些密钥只是惰性的。 （[#11463]（https://github.com/paperclipai/paperclip/pull/11463），[#11557]（https://github.com/paperclipai/paperclip/pull/11557））
- **托管开发运行时现在默认为 Tailscale HTTPS 预览。** 当主机代理可用时，符合条件的 Paperclip 托管工作树运行时将公开为 `tailscale_https`，而不是环回 HTTP。设置 `PAPERCLIP_MANAGED_RUNTIME_HTTPS=off` 以保留旧行为，或设置 `force` 在代理丢失时无法关闭。托管运行时控制路由还获得了两个新的 `409` 响应（`workspace_runtime_control_in_progress`、`workspace_runtime_lease_conflict`）——假设控件始终启动的调用者必须处理冲突。 （[#11524]（https://github.com/paperclipai/paperclip/pull/11524），[#11525]（https://github.com/paperclipai/paperclip/pull/11525））
- **对于新交互，交互解析器策略默认为 `anyone`。** 现在，每种交互类型都会经过一个具有记录来源的解析器策略评估器，而不是阻止有效代理的每条路由规则。迁移 `0218` 故意**不**扩大任何已挂起的内容：现有行以新名称保留其旧限制（`board_or_agents` → `not_creator`、`board_only` → `human_only`）。 ([#11376](https://github.com/paperclipai/paperclip/pull/11376))
- **决策训练界面已从决策台中移除** — 训练库路线、行操作和抽屉。后端快照合约不变，不进行数据迁移。 ([#11225](https://github.com/paperclipai/paperclip/pull/11225))

## 亮点
- **聊天式任务，现在是默认体验** - 上一个版本的实验性对话视图现在是每个任务的工作方式，并且它不断发展：更清晰的消息间距和代理气泡、属性窗格中的可搜索分配和子任务树、停靠在侧边沟中的文档注释以及显示每个问题文档和代理工件的聊天侧边栏。被阻止的任务将其阻止程序显示为与线程中实时、有序的阻止程序工作的链接，实时运行的问题会显示平静的飞行通知，而不是错误警报。入职也是聊天优先：完成向导后，您将直接进入第一个任务的对话，代理会向您打招呼，询问澄清问题，并提出您逐项批准的计划。 ([#11101](https://github.com/paperclipai/paperclip/pull/11101)、[#11263](https://github.com/paperclipai/paperclip/pull/11263)、[#11226](https://github.com/paperclipai/paperclip/pull/11226)、[#11456](https://github.com/paperclipai/paperclip/pull/11456)、[#11487](https://github.com/paperclipai/paperclip/pull/11487)、[#11423](https://github.com/paperclipai/paperclip/pull/11423))
- **通过 Tailscale 实现托管运行时的 HTTPS 预览** — 托管运行时服务用于侦听普通环回 HTTP，因此无法通过电话或第二台计算机访问代理的分支预览。 Paperclip 现在可以在尾网上的真实 HTTPS URL 上公开它，该 URL 构建在三个深思熟虑的层中：一个单独的最低权限主机代理，用于授权每个映射（对等凭据、固定端口范围、受保护端口拒绝、仅附加审核）、具有持久问题拥有的运行时租约和有界控制恢复的公开生命周期，因此搁浅的控制永远不会永远阻塞通道，以及单个端口对调解器，因此启动永远不会与另一个启动冲突或采用另一个问题的服务 - 每个不匹配都无法关闭并命名冲突。 ([#11524](https://github.com/paperclipai/paperclip/pull/11524)、[#11525](https://github.com/paperclipai/paperclip/pull/11525)、[#11526](https://github.com/paperclipai/paperclip/pull/11526))
- **从 Paperclip 内部登录到 Claude 和 Codex** — 新代理页面现在在您创建代理之前在两个测试通道上提供 Claude 订阅登录，诊断信息保存在经过编辑的服务器日志中，并且登录 URL 已标准化为白名单的 Anthropic 主机。在底层，受保护的设置令牌流通过具有所有者绑定会话和一次性令牌传递的沙箱伪终端驱动 `claude setup-token`，Codex 适配器获得等效的沙箱设备登录，仅在准备就绪检查后提升凭据，然后删除临时沙箱。 TLS 终止平台边缘（Railway、Render、Fly 等）后面的部署可以声明 `CLAUDE_LOGIN_EDGE_TLS_TERMINATED=true`，以便传输防护停止对用户的 HTTPS 连接发出警告，并且升级的设备登录凭据现在可以在托管主目录重新播种后继续存在。 ([#11347](https://github.com/paperclipai/paperclip/pull/11347)、[#11286](https://github.com/paperclipai/paperclip/pull/11286)、[#11237](https://github.com/paperclipai/paperclip/pull/11237)、[#11579](https://github.com/paperclipai/paperclip/pull/11579)、[#11578](https://github.com/paperclipai/paperclip/pull/11578))
- **沙箱提供商的真正能力合同** - 最新版本引入了 Daytona 的实时输出流和持久会话；此版本使这些行为可证明而不是配置。提供者在其清单中声明功能，实时工作人员验证它们，服务器将有效集失败关闭解析为声明、验证和配置的交集 - 声明的功能永远不会授予工作人员未证明的方法。现在，只要经过验证的快照允许，流式传输和持久会话就会打开，并具有自动轮询回退功能，并且用于控制它们的三个操作员标志也消失了（请参阅重大更改）。 （[#11463]（https://github.com/paperclipai/paperclip/pull/11463），[#11557]（https://github.com/paperclipai/paperclip/pull/11557））
- **分块、可恢复的公司导入** — 最新版本将导入上限提高到 1 GB；此次发布让此次转让变得物有所值。在 90% 时断开的连接用于开始整个上传 — 导入现在以经过验证的约 32 MB 部分移动到带有持久运行分类账的磁盘上，因此中断的传输会从已上传的部分恢复（跨越断开的连接、页面刷新和服务器重新启动），并且峰值上传内存会下降到一个部分。导入页面和 CLI 获得了可恢复上传和分块预览，捆绑包现在通过导出/导入保留任务时间戳和层次结构，导入的代理保留自己的适配器而不是强制到目标的 CEO 适配器，并且新导入的任务在生产力审查扫描下保持静止。 ([#11223](https://github.com/paperclipai/paperclip/pull/11223)、[#11224](https://github.com/paperclipai/paperclip/pull/11224)、[#11193](https://github.com/paperclipai/paperclip/pull/11193)、[#11192](https://github.com/paperclipai/paperclip/pull/11192)、[#11191](https://github.com/paperclipai/paperclip/pull/11191))
## 改进

- **入职在您所在的地方与您见面** — 没有代理的公司会自动进入入职，在正确的步骤打开：当公司已经有代理时，会跳过任务步骤，将现有任务带入向导，步骤一次性决定，而不是跳到中流客户下面。向导的代理和连接模型步骤针对聊天优先流程进行了重新设计，不再选择不可见的禁用适配器，并且装饰面板遵循您的主题。 ([#11352](https://github.com/paperclipai/paperclip/pull/11352)、[#11416](https://github.com/paperclipai/paperclip/pull/11416)、[#11429](https://github.com/paperclipai/paperclip/pull/11429)、[#11371](https://github.com/paperclipai/paperclip/pull/11371)、[#11379](https://github.com/paperclipai/paperclip/pull/11379))
- **Paperclip Cloud 入职种子** — 实例现在可以接收在 Paperclip Cloud 注册期间收集的任务、第一个代理和第一个任务，并在激活时应用它们，因此种子堆栈将打开准备工作，而无需再次询问。 ([#11098](https://github.com/paperclipai/paperclip/pull/11098))
- **托管沙箱部署** - 租户可以在平台托管的沙箱环境上编辑环境变量（仅此而已），并且仅托管沙箱模式完全隐藏本地执行，运行选择失败关闭。捆绑提供商记录的凭据环境变量（例如 `DAYTONA_API_KEY`）现在可以到达其插件工作人员，并且合成的“本地”默认选项遵循该模式。 （[#11200]（https://github.com/paperclipai/paperclip/pull/11200），[#11244]（https://github.com/paperclipai/paperclip/pull/11244））
- **存档的工作在适当的位置重新打开** — 可以在原来的位置重新打开存档的隔离执行工作区，包括托管结账项目的存档 git 工作树。归档公司 URL 上的冷到达内容将被退回到带有一 click 取消归档的清晰页面。 ([#11322](https://github.com/paperclipai/paperclip/pull/11322)、[#11395](https://github.com/paperclipai/paperclip/pull/11395)、[#11302](https://github.com/paperclipai/paperclip/pull/11302))
- **审核治理** - 审核策略判决是序列化和事务性的，判决不再可以通过降级绕过策略，请求者以原子方式持久保存，并且当审核策略限制批准时，UI 会标记审核策略。 （[#11405]（https://github.com/paperclipai/paperclip/pull/11405），[#10938]（https://github.com/paperclipai/paperclip/pull/10938））
- **代理可以按名称查找机密** - 只读 `/secrets/catalog` 端点将机密名称映射到代理连接环境绑定的 ID - 无值，无提供程序配置。问题文档注释也包含在代理审阅上下文中，因此文档上留下的反馈会到达对其执行操作的代理。 （[#9530]（https://github.com/paperclipai/paperclip/pull/9530），[#11332]（https://github.com/paperclipai/paperclip/pull/11332））
- **可扩展的搜索** — 父问题选择器在服务器而不是加载的页面上进行搜索，并且问题列表 API 获得了 `updatedSince` 过滤器。 （[#11334]（https://github.com/paperclipai/paperclip/pull/11334），[#9050]（https://github.com/paperclipai/paperclip/pull/9050））
- **可观察性** - 主机端 `stage.sync` 步骤已进行检测，代理进程跨度已正确定位，继续上一个版本的沙箱启动跟踪工作。 ([#11301](https://github.com/paperclipai/paperclip/pull/11301))
- **使用 `paperclipai channels` 查看您的频道** — 新命令显示每个发布通道（稳定版、测试版、夜间版、金丝雀版）、每个版本当前解析的版本以及您安装的版本。 ([#11210](https://github.com/paperclipai/paperclip/pull/11210))

## 修复

- **身份验证代理背后的部署端到端工作** - 实时事件 WebSocket 现在对云代理浏览器进行身份验证（以前它永远无法通过身份验证终止代理进行连接），服务工作人员的获取回退始终以真正的 `Response` 而不是空白页面进行应答，Web 应用程序清单使用凭据获取，并且 UI 在冷后端的首次加载中仍然存在。可能将会话陷入重定向循环的存档公司选择乒乓球已经消失。 ([#11290](https://github.com/paperclipai/paperclip/pull/11290)、[#11292](https://github.com/paperclipai/paperclip/pull/11292)、[#11245](https://github.com/paperclipai/paperclip/pull/11245)、[#11246](https://github.com/paperclipai/paperclip/pull/11246)、[#11300](https://github.com/paperclipai/paperclip/pull/11300))
- **所有内容都仅限于登录帐户** — 邀请会员资格检查、公司选择和查询缓存都以实际登录的帐户为关键，注销时缓存会清除，并且存储的公司在公司请求失败时仍然有效，而不是被删除。入职草稿会根据此会话获取的列表验证所有权，并且永远不会恢复用户不拥有的公司的向导状态。 ([#11417](https://github.com/paperclipai/paperclip/pull/11417)、[#11430](https://github.com/paperclipai/paperclip/pull/11430)、[#11380](https://github.com/paperclipai/paperclip/pull/11380)、[#11477](https://github.com/paperclipai/paperclip/pull/11477)、[#11382](https://github.com/paperclipai/paperclip/pull/11382)、[#11370](https://github.com/paperclipai/paperclip/pull/11370))
- **安全强化** - 工具访问路由不再泄漏跨租户 ID 预言机，例行 Webhook 拒绝 HMAC 重播，例行详细信息响应排除受让人配置，页面发布上传者凭据的范围仅限于发布帮助程序，执行工作区摘要被隔离，仅突出显示可访问的工作区文件链接，心跳后备注释永远无法发布原始记录，向用户显示的 CLI 指导通过安全的 `npx` 表单。 ([#9589](https://github.com/paperclipai/paperclip/pull/9589)、[#9994](https://github.com/paperclipai/paperclip/pull/9994)、[#9818](https://github.com/paperclipai/paperclip/pull/9818)、[#10894](https://github.com/paperclipai/paperclip/pull/10894)、[#10790](https://github.com/paperclipai/paperclip/pull/10790)、[#11090](https://github.com/paperclipai/paperclip/pull/11090)、 [#10143](https://github.com/paperclipai/paperclip/pull/10143)、[#11343](https://github.com/paperclipai/paperclip/pull/11343)、[#11400](https://github.com/paperclipai/paperclip/pull/11400))
- **运行保持其上下文** - 代理会话在执行切换中重用，并在问题注释中保留，注释唤醒决策读取插入后问题状态，已完成问题的陈旧关闭注释唤醒停止，成功运行的切换恢复跳过恢复操作驱动和插件管理的运行，ACP 运行生命周期更正解决故障，同步回工作空间并正确清理租约。 ([#9917](https://github.com/paperclipai/paperclip/pull/9917)、[#10111](https://github.com/paperclipai/paperclip/pull/10111)、[#10068](https://github.com/paperclipai/paperclip/pull/10068)、[#8656](https://github.com/paperclipai/paperclip/pull/8656)、[#9010](https://github.com/paperclipai/paperclip/pull/9010)、[#9047](https://github.com/paperclipai/paperclip/pull/9047)、 [#11454](https://github.com/paperclipai/paperclip/pull/11454))
- **沙箱管道弹性** - 沙箱标准输入文件竞赛通过原子写入和容错轮询器关闭，标准输入写入在进程会话桥中排序，回调桥轮询循环具有每次迭代超时和看门狗，桥流量转发到本地侦听源，代理雇用技能的路由通过回调桥，命中提供程序工作人员重新启动窗口重试而不是失败设置的运行，Daytona 活跃度调用每次调用都受到限制，以及`syncOut` 接受 bsdtar tarball 列表。 ([#11235](https://github.com/paperclipai/paperclip/pull/11235)、[#11406](https://github.com/paperclipai/paperclip/pull/11406)、[#11341](https://github.com/paperclipai/paperclip/pull/11341)、[#10017](https://github.com/paperclipai/paperclip/pull/10017)、[#8978](https://github.com/paperclipai/paperclip/pull/8978)、[#10212](https://github.com/paperclipai/paperclip/pull/10212)、 [#11408](https://github.com/paperclipai/paperclip/pull/11408)、[#11289](https://github.com/paperclipai/paperclip/pull/11289))
- **适配器可靠性** — Claude 通过 stdin 本地管道打印提示，并且不再失败仅 root 权限跳过； Codex local 在派生回退错误时会跳过良性 stderr 警告； OpenCode 在瞬态争用下重试其模型预检，并将可用性探测视为非致命； Grok 报告真实的代币使用情况和成本，而不是硬编码的零；游标云丢弃无法到达的API回调；租用实例无法运行的适配器被拒绝；适配器在 Windows 上加载（动态导入之前为 `pathToFileURL`）。 ([#9500](https://github.com/paperclipai/paperclip/pull/9500)、[#9463](https://github.com/paperclipai/paperclip/pull/9463)、[#10003](https://github.com/paperclipai/paperclip/pull/10003)、[#9225](https://github.com/paperclipai/paperclip/pull/9225)、[#10294](https://github.com/paperclipai/paperclip/pull/10294)、[#10433](https://github.com/paperclipai/paperclip/pull/10433)、 [#8546](https://github.com/paperclipai/paperclip/pull/8546)、[#10256](https://github.com/paperclipai/paperclip/pull/10256)、[#4287](https://github.com/paperclipai/paperclip/pull/4287))
- **服务器正确性** - `DELETE /api/issues/:id` 成功解决了依赖项的问题（评论和读取状态级联；成本和财务记录在其问题参考被清除的情况下保留），非 UUID 公司参考返回 404 而不是 500，跨包 Zod 错误被识别，PATCH 中的接线阻止程序不再隐式重新打开被阻止的问题，未签名的询问优先请求保留在审查队列中而不被取消，终端工作区收割机停止饥饿其最旧的候选者，代理运行 JWT 默认 TTL 与记录的 48h 对齐，因此挂起的笔记本电脑运行将停止使用过期的凭据唤醒，显式的 `PAPERCLIP_API_URL` 会覆盖 run env 中的派生运行时 URL，基本 URL 端口仅针对环回主机进行重写，并且 Hermes 流表面中的静默非零退出作为失败。 ([#11331](https://github.com/paperclipai/paperclip/pull/11331)、[#9959](https://github.com/paperclipai/paperclip/pull/9959)、[#10168](https://github.com/paperclipai/paperclip/pull/10168)、[#10269](https://github.com/paperclipai/paperclip/pull/10269)、[#11338](https://github.com/paperclipai/paperclip/pull/11338)、[#11238](https://github.com/paperclipai/paperclip/pull/11238)、 [#10176](https://github.com/paperclipai/paperclip/pull/10176)、[#10339](https://github.com/paperclipai/paperclip/pull/10339)、[#10258](https://github.com/paperclipai/paperclip/pull/10258)、[#10107](https://github.com/paperclipai/paperclip/pull/10107))
- **工作区 Git 扫描是有界的** — 一个有界调度程序现在合并并限制每个昂贵的工作区 Git 扫描（请求风暴曾经产生约 270 个并发 `git status` 进程和缺乏运行状况检查），并且浏览器仅在文件面板打开且可见时才开始扫描。 ([#11572](https://github.com/paperclipai/paperclip/pull/11572))
- **UI 剪纸** — 排队消息中断操作回来了，代理秘密访问移至可搜索的秘密选项卡，斜线自动完成在对话框内滚动，收件箱存档获得了撤消 toast 并记住折叠的子任务，收件箱路由遵循已保存的明确目标策略，董事会批准散文呈现为降价，创建对话框徽章使用真实问题前缀，问题文档深层链接正确路由，截断的问题描述被标记，生成的邀请链接更喜欢公众基本 URL、选定的运行生命周期和日志保持最新状态，移动任务聊天获得了阻止操作、与线程对齐的作曲家以及位于键盘上方的新任务对话框。 ([#11374](https://github.com/paperclipai/paperclip/pull/11374)、[#11283](https://github.com/paperclipai/paperclip/pull/11283)、[#11222](https://github.com/paperclipai/paperclip/pull/11222)、[#11220](https://github.com/paperclipai/paperclip/pull/11220)、[#11069](https://github.com/paperclipai/paperclip/pull/11069)、[#11221](https://github.com/paperclipai/paperclip/pull/11221)、 [#9817](https://github.com/paperclipai/paperclip/pull/9817)、[#8550](https://github.com/paperclipai/paperclip/pull/8550)、[#11551](https://github.com/paperclipai/paperclip/pull/11551)、[#4771](https://github.com/paperclipai/paperclip/pull/4771)、[#7619](https://github.com/paperclipai/paperclip/pull/7619)、[#10169](https://github.com/paperclipai/paperclip/pull/10169)、 [#11282](https://github.com/paperclipai/paperclip/pull/11282)、[#11296](https://github.com/paperclipai/paperclip/pull/11296)、[#11281](https://github.com/paperclipai/paperclip/pull/11281))
- **零碎** — 技能同步会刷新项目文件夹而不是替换它们，通过板密钥写入问题无论受让人如何工作，环境秘密绑定在首次保存时解析其公司上下文，并且工作树模式开发实例在嵌入式 Postgres 数据目录位于操作系统临时目录中时发出警告。 ([#11066](https://github.com/paperclipai/paperclip/pull/11066)、[#9025](https://github.com/paperclipai/paperclip/pull/9025)、[#11291](https://github.com/paperclipai/paperclip/pull/11291)、[#8283](https://github.com/paperclipai/paperclip/pull/8283))

## 升级指南

- **迁移**：此版本添加了 11 个数据库迁移（`0212` 到 `0222`），涵盖每个公司一个的入职第一项任务 (`0212`)、可恢复的公司传输运行 (`0213`)、适配器设备登录会话（`0214`、`0215`）、云入职种子 (`0216`)、问题删除外键策略 (`0217`)、交互解析器策略默认值和出处 (`0218`)、运行时暴露状态 (`0219`)、执行工作空间运行时租用 (`0220`)、Claude 设置令牌会话 (`0221`) 以及在环境删除后仍然存在的环境租用引用 (`0222`)。迁移在启动时自动运行 - 无需手动操作。没有什么会删除表或删除数据；请注意，`0218` 重写现有待处理交互上的解析器策略值（保守地 - 请参阅重大更改），而 `0217`/`0222` 更改删除时依赖行发生的情况。
- **新的可选环境变量**（都有合理的默认值；仅在需要时设置）：
  - `PAPERCLIP_MANAGED_RUNTIME_HTTPS` — `auto`（默认）、`off` 或 `force`；控制托管运行时预览的 Tailscale HTTPS 默认值（请参阅重大更改）。 `PAPERCLIP_TAILSCALE_BROKER_SOCKET` 和 `PAPERCLIP_TAILSCALE_DNS_NAME` 覆盖代理套接字路径和尾网 DNS 名称； `PAPERCLIP_VITE_HMR_PROTOCOL` (`ws`/`wss`) 固定开发预览 HMR 协议。 （[#11524]（https://github.com/paperclipai/paperclip/pull/11524），[#11525]（https://github.com/paperclipai/paperclip/pull/11525））
  - `CLAUDE_LOGIN_TRUSTED_PROXIES` — Claude 登录传输防护的允许代理对等点； `CLAUDE_LOGIN_EDGE_TLS_TERMINATED=true` — 在代理地址未知的托管平台上声明平台边缘 TLS 终止。 （[#11286]（https://github.com/paperclipai/paperclip/pull/11286），[#11579]（https://github.com/paperclipai/paperclip/pull/11579））
  - `PAPERCLIP_ONBOARDING_SEED_ADAPTER_TYPE` — 由云入职种子创建的代理的适配器类型。 ([#11098](https://github.com/paperclipai/paperclip/pull/11098))
  - `SANDBOX_ORPHAN_CLEANUP_SPOOL_DIR` — 持久沙箱清理记录的假脱机位置； `PAPERCLIP_PROCESS_SESSION_STDIN_MAX_RETRIES` — 沙盒标准输入轮询器的重试上限。 （[#11347]（https://github.com/paperclipai/paperclip/pull/11347），[#11235]（https://github.com/paperclipai/paperclip/pull/11235））
- **删除配置键**：`streamAgentSessionOutput`（服务器）和 `useSessions` / `useLogStream`（Daytona 插件）不再执行任何操作 - 闲暇时从保存的配置中删除它们；它们负载但惰性。 ([#11557](https://github.com/paperclipai/paperclip/pull/11557))
- **代理运行 JWT TTL**：服务器默认值现在与记录的 48h (`PAPERCLIP_AGENT_JWT_TTL_SECONDS=172800`) 匹配。如果您依赖旧的隐式 1 小时到期时间，请显式设置该变量。 ([#10176](https://github.com/paperclipai/paperclip/pull/10176))
- **HTTPS 预览**：要使用它们，请在主机上安装 Tailscale 并运行新代理（请参阅 `@paperclipai/tailscale-https-broker` 自述文件）；要选择退出，请设置 `PAPERCLIP_MANAGED_RUNTIME_HTTPS=off`。对于非托管或自定义服务，没有其他任何变化。

## 贡献者

此版本有来自 32 位贡献者的 172 次提交。感谢所有为此版本做出贡献的人！

@0xopaque、@adamteale、@ApolinarioRatio、@austinpilz、@christianlappin、@cucurigoo、@dmndbrp-oss、@dylanroy、@edgardfrz、@fronc、@futhgar、@panbanda、@raviy06、@samrusani、@santastabber、@sauerdaniel、@seb-veto、 @Sergio-LPA、@stubbi、@ulisavo、@vmarchaud、@webdevdot

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.824.0` · 📅 发布：2026-08-25 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
