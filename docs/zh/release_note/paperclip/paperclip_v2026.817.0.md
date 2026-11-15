---
title: "paperclip v2026.817.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.817.0"
version: "v2026.817.0"
published: "2026-08-18"
type: "minor"
lang: "zh"
---

# paperclip v2026.817.0

# 纸clip v2026.817.0

> 发布时间：2026-08-17

Paperclip v2026.817.0 是自 2026.722.0 以来的第一个稳定版本，也是通过新的金丝雀 → 每晚 → beta → 稳定发布渠道发布的第一个稳定版本。这个确切的版本作为金丝雀发布，经过冒烟测试并升级为每晚，浸泡为 `2026.811.0-beta.0`，然后才升级为稳定版本。它包含 311 项提交，涵盖一流的决策工作流程、全保真公司导入/导出、托管的 CLI 安装生命周期、聊天式任务视图以及一长串修复和性能工作。

## 重大变更

这些都不需要典型安装的操作，但在升级之前请通读：

- **Docker `:latest` 现在意味着稳定。** 之前 `:latest` 跟踪每个主合并。如果您依赖这种行为，请切换到 `:canary`（或 `:nightly` 用于每日烟雾门）。稳定的图像还会获得 `:YYYY.MDD.P` 版本标签，并且每个图像都会获得 `:sha-<short-sha>` 以进行精确固定。 ([#11006](https://github.com/paperclipai/paperclip/pull/11006))
- **实验性云同步已删除。** 主机到主机同步传输（以前是标志门控）已消失；公司导入/导出是单一受支持的数据移动路径。迁移 `0196` 会删除旧的同步状态表。您的公司数据未受影响 - 仅删除了实验运输自身的簿记。 ([#10507](https://github.com/paperclipai/paperclip/pull/10507))
- **标准 trust 代理可以写入公司可见的问题。** 评论、问题更新、子任务创建和分配现在遵循基于问题可见性的默认开放规则，而不是按渠道所有权授予。公司、用户、trust 范围和运行生命周期控制仍然适用，并且包含和归因跨问题副作用。 （[#10804]（https://github.com/paperclipai/paperclip/pull/10804），[#10837]（https://github.com/paperclipai/paperclip/pull/10837））
- **存档的项目从默认项目列表路由中排除。** 通过显式过滤器以包含它们。 ([#10146](https://github.com/paperclipai/paperclip/pull/10146))

## 亮点

- **发布渠道：canary → nightly → beta → stable** — Paperclip 现在通过四个渠道发货。 `canary` 在每次合并到 master 时发布； `nightly` 每晚重新发布一次最新的绿色金丝雀，但只有在完整发布的烟雾套件（真正的 Docker 容器，浏览器驱动的入门）通过确切发布的工件之后； `beta` 是一个由维护者在批准门后每晚推广的项目，发布后重新抽签；每个马厩必须首先作为测试版浸泡至少 3 天。与 `npx paperclipai@latest`（稳定）、`@beta`、`@nightly` 或 `@canary` 一起安装，或拉动 `ghcr.io/paperclipai/paperclip:latest` / `:beta` / `:nightly` / `:canary`。 Docker `:latest` 现在意味着**稳定** - 请参阅上面的重大更改。详细信息请参见 `doc/CHANNELS.md`。 （[#11006]（https://github.com/paperclipai/paperclip/pull/11006），[#11008]（https://github.com/paperclipai/paperclip/pull/11008））
- **决策：一流的提议/决策工作流程** - 代理现在可以提出多选项操作而不是执行它们，并且人类从受管理的、可审计的界面中做出决定。 Decisions v1 添加了提议模式本身（类型化选项和输入、过时目标检测、审核效果执行）、具有优先级、立即决定排序注意力源的持久决策队列，以及具有分类控制、老化货架和可逆保留的决策台。已完成的目标决策会自动退出并链接回其目标。 ([#10010](https://github.com/paperclipai/paperclip/pull/10010)、[#10651](https://github.com/paperclipai/paperclip/pull/10651)、[#10672](https://github.com/paperclipai/paperclip/pull/10672)、[#10785](https://github.com/paperclipai/paperclip/pull/10785)、[#10474](https://github.com/paperclipai/paperclip/pull/10474)、[#10892](https://github.com/paperclipai/paperclip/pull/10892))
- **全保真公司导入/导出取代了云同步** — 实验性的主机到主机云同步传输已消失；导入/导出现在是在实例（自托管↔云或普通备份）之间移动公司的单一方式，没有可访问性或跨实例身份验证要求。捆绑包（schemaVersion 6）现在带有标签、阻止程序、问题文档、工作产品、监视器和每个附件，作为在写入单行之前验证的内容寻址 sha256 blob。导入作为持久异步作业运行，具有批量插入和完整性保护，包上传为压缩 zip，上传上限现在为 1 GB，操作员可通过 `PAPERCLIP_IMPORT_ZIP_MAX_BYTES` 配置。 ([#10507](https://github.com/paperclipai/paperclip/pull/10507)、[#10523](https://github.com/paperclipai/paperclip/pull/10523)、[#10531](https://github.com/paperclipai/paperclip/pull/10531)、[#10538](https://github.com/paperclipai/paperclip/pull/10538)、[#11184](https://github.com/paperclipai/paperclip/pull/11184))
- **CLI 中的托管安装、更新和服务生命周期** — `paperclipai` CLI 现在可以将 Paperclip 安装为持久的自我更新服务，而不是临时的 `npx` 进程：使用每用户有效负载存储和稳定的命令填充程序进行托管安装，使用更新前备份和保留回滚状态进行并行更新，以及`service`、`uninstall`、`doctor` 和跨 Linux、macOS、容器和 WSL 的引导安装程序支持。托管更新会保留您的 env 文件和扩展名。 ([#10045](https://github.com/paperclipai/paperclip/pull/10045)、[#10980](https://github.com/paperclipai/paperclip/pull/10980)、[#11005](https://github.com/paperclipai/paperclip/pull/11005))
- **“谁更改了什么”的一个活动页面** — 基本活动列表和单独的审核页面合并为一个基于审核提要构建的丰富活动页面：完整历史记录、过滤器、所有参与者与仅代理操作的范围切换，以及针对代理详细信息的每个代理审核选项卡。没有审核权限的成员将隐藏特权控制，跨任务代理写入现在带有归属、审核收据和可操作的拒绝消息。 ([#10838](https://github.com/paperclipai/paperclip/pull/10838)、[#10831](https://github.com/paperclipai/paperclip/pull/10831)、[#9744](https://github.com/paperclipai/paperclip/pull/9744)、[#10843](https://github.com/paperclipai/paperclip/pull/10843))

## 改进

- **多项目工作区同步，默认开启** — 引用多个项目的运行现在默认将每个引用的项目同步到工作区中，每个项目的授权在运行准备时得到解决，并在运行时出现部分同步警告。 @提到的项目也通过有限的运输进入远程沙箱。 ([#10473](https://github.com/paperclipai/paperclip/pull/10473)、[#10469](https://github.com/paperclipai/paperclip/pull/10469)、[#10380](https://github.com/paperclipai/paperclip/pull/10380)、[#10564](https://github.com/paperclipai/paperclip/pull/10564))
- **共享工作区并发控制** — 共享工作区上运行的问题通过有限的繁忙延迟进行序列化，并且可以通过工作区策略编辑器配置并发限制。 ([#10699](https://github.com/paperclipai/paperclip/pull/10699)、[#10759](https://github.com/paperclipai/paperclip/pull/10759)、[#10771](https://github.com/paperclipai/paperclip/pull/10771))
- **人类批准的秘密提案** - 在工作中遇到凭证的特工可以将其作为惰性提案提交给 Paperclip；在经过授权的人员审查和批准之前，任何事情都不会成为真正的秘密或具有约束力。秘密细节还获得了外部值和深层链接的直写编辑。 （[#9934]（https://github.com/paperclipai/paperclip/pull/9934），[#10196]（https://github.com/paperclipai/paperclip/pull/10196））
- **代理到代理的治理表面** - 问题线程交互支持受治理的代理收件人，因此一个代理可以明确地向另一个代理发送响应，并具有服务器端授权、撤回和终端问题到期功能。代理可以根据明确的审查裁决策略解决审查确认问题，审查轮次的上限是升级到负责人的耗尽审查，拒绝返回到开放祖先创建者的委派循环，并且拒绝分配给暂停的代理（当升级路径路由到暂停的经理时会发出警告）。 ([#10252](https://github.com/paperclipai/paperclip/pull/10252)、[#10251](https://github.com/paperclipai/paperclip/pull/10251)、[#10939](https://github.com/paperclipai/paperclip/pull/10939)、[#10931](https://github.com/paperclipai/paperclip/pull/10931)、[#10650](https://github.com/paperclipai/paperclip/pull/10650)、[#10658](https://github.com/paperclipai/paperclip/pull/10658)、 [#10648](https://github.com/paperclipai/paperclip/pull/10648)、[#10657](https://github.com/paperclipai/paperclip/pull/10657))
- **针对受限运行的任务范围的出口授权** - 在 Kubernetes 限制上，合法需要 GitHub 或包注册表的任务可以请求狭窄的、问题范围的出口授权，这些授权将成为运行标签选择的网络策略，而不是由操作员启用广泛的命名空间范围的出口。被拒绝的请求解释了管理政策以及如何请求拨款。 ([#10155](https://github.com/paperclipai/paperclip/pull/10155))
- **缓存调整的运行成本** - 适配器可以在提示缓存折扣后报告提供商计费的成本，因此大量缓存的运行不会在成本分类帐中被定价错误。 ([#10349](https://github.com/paperclipai/paperclip/pull/10349))
- **例程：活动门控运行策略** — 例程可以控制最近活动的高级运行，通过编辑器和 API 公开，并且例程按文件夹名称列出组。 ([#10225](https://github.com/paperclipai/paperclip/pull/10225)、[#9438](https://github.com/paperclipai/paperclip/pull/9438)、[#10201](https://github.com/paperclipai/paperclip/pull/10201))
- **模型目录更新** — Claude Opus 5 和 Claude Sonnet 5 加入了 Claude 适配器的静态模型回退，并且 GPT-5.6 模型元数据在 Codex 的源头得到解析。现在，新代理默认禁用廉价模型配置文件：适配器的 `cheap` 配置文件需要在代理创建时显式操作员选择加入，并且 Codex 的廉价配置文件不再默认为硬编码模型（现有代理保持不变）。 ([#10327](https://github.com/paperclipai/paperclip/pull/10327)、[#10280](https://github.com/paperclipai/paperclip/pull/10280)、[#9780](https://github.com/paperclipai/paperclip/pull/9780)、[#10019](https://github.com/paperclipai/paperclip/pull/10019))
- **Daytona 沙箱改进** — 代理输出流从 Daytona 沙箱实时输出（不再有主机输出轮询），会话通过简单的命令调度保持持久，并且带有功能探针的咨询 bwrap 包装器强化了执行；在权限下降之前确保应用程序主所有权。 ([#11049](https://github.com/paperclipai/paperclip/pull/11049)、[#10941](https://github.com/paperclipai/paperclip/pull/10941)、[#10541](https://github.com/paperclipai/paperclip/pull/10541)、[#10554](https://github.com/paperclipai/paperclip/pull/10554)、[#10805](https://github.com/paperclipai/paperclip/pull/10805)、[#10530](https://github.com/paperclipai/paperclip/pull/10530))
- **更安静、更清晰的系统消息传递** — 恢复通知被结构化和人性化为紧凑的行，并按需提供证据，恢复更新总体上更安静，恢复和阻止通知副本以简单语言重写，工作区就绪注释呈现为紧凑的系统通知。 ([#11075](https://github.com/paperclipai/paperclip/pull/11075)、[#10542](https://github.com/paperclipai/paperclip/pull/10542)、[#10065](https://github.com/paperclipai/paperclip/pull/10065)、[#10636](https://github.com/paperclipai/paperclip/pull/10636))
- **UI 生活质量** — 任务聊天编辑器草稿在导航中保持不变，任务列表获得了新近度分隔符，复制和反馈操作返回到代理气泡页脚，任务标识符显示在任务详细信息面包屑中，页面加载获得了动画 paperclip 加载器。任务优先级控件在 UI 中隐藏（数据模型、API 和搜索 DSL 完好无损）。 ([#11076](https://github.com/paperclipai/paperclip/pull/11076)、[#10454](https://github.com/paperclipai/paperclip/pull/10454)、[#11025](https://github.com/paperclipai/paperclip/pull/11025)、[#10933](https://github.com/paperclipai/paperclip/pull/10933)、[#10456](https://github.com/paperclipai/paperclip/pull/10456)、[#11024](https://github.com/paperclipai/paperclip/pull/11024))
- **每用户文档加注星标** — 为您自己加注星标文档，而不影响其他任何人。 ([#9952](https://github.com/paperclipai/paperclip/pull/9952))
- **更快的稳态服务器** - 仪表板中的稳态数据库热路径、注意力和生产力扫描被削减，注意力提要查询并行运行而不是严格顺序运行（当 Postgres 连接网络时这是一个巨大的胜利），并且新索引涵盖了恢复扫描查找。 ([#10992](https://github.com/paperclipai/paperclip/pull/10992)、[#10795](https://github.com/paperclipai/paperclip/pull/10795)、[#10969](https://github.com/paperclipai/paperclip/pull/10969))
- **更快的沙箱启动** - 沙箱运行启动全面减少往返：git-workspace 暂存合并为一个受限同步，死启动往返被折叠，两个桥设置并行运行，启动的沙箱句柄按租约缓存，远程脚本写入跳过内容哈希匹配，每个远程会话发生一次暂存，并且 exec 包装器使用选择加入的无配置文件快速路径删除 nvm 源。 ([#10488](https://github.com/paperclipai/paperclip/pull/10488)、[#10485](https://github.com/paperclipai/paperclip/pull/10485)、[#10334](https://github.com/paperclipai/paperclip/pull/10334)、[#10335](https://github.com/paperclipai/paperclip/pull/10335)、[#10377](https://github.com/paperclipai/paperclip/pull/10377)、[#10089](https://github.com/paperclipai/paperclip/pull/10089)、 [#10443](https://github.com/paperclipai/paperclip/pull/10443)、[#10352](https://github.com/paperclipai/paperclip/pull/10352))
- **更快捷的 UI 导航** — 问题详细信息导航在 click 之前得到了预热。 ([#10416](https://github.com/paperclipai/paperclip/pull/10416))
- **可观察性** - 沙箱启动和执行现在发出细粒度的 OpenTelemetry 跨度（提供者往返、打包/传输、缓存命中标志、每步计时归因），并且手动跨度正确导出。 ([#10758](https://github.com/paperclipai/paperclip/pull/10758)、[#10764](https://github.com/paperclipai/paperclip/pull/10764)、[#10999](https://github.com/paperclipai/paperclip/pull/10999)、[#10204](https://github.com/paperclipai/paperclip/pull/10204)、[#10565](https://github.com/paperclipai/paperclip/pull/10565))

## 实验性的

这些在实验设置切换后面进行。

- **聊天式任务视图** — 选择加入的“聊天式任务”实验将问题详细信息页面转变为对话：线程引导，作曲家位于底部，实时工具活动折叠成紧凑的摘要，属性/计划/工件移至标题选项卡。第二次迭代添加了带有附件芯片、实时旁白和移动布局的富文本编辑器。 （[#10606]（https://github.com/paperclipai/paperclip/pull/10606），[#10707]（https://github.com/paperclipai/paperclip/pull/10707））
- **应用程序和连接** — Notion 通过 MCP OAuth 与 PKCE 和动态 client 注册连接 — 无需手动设置 OAuth 凭证 — 并且公司可以与同一提供商保持多个连接，并对隔离操作进行明确的审查决定。 ([#11009](https://github.com/paperclipai/paperclip/pull/11009)、[#11060](https://github.com/paperclipai/paperclip/pull/11060)、[#11040](https://github.com/paperclipai/paperclip/pull/11040))
- **状态卡** — 实验性状态卡视图编译单提示、代理生成的状态更新，将摘要提到的问题加入到监视集中。 ([#10101](https://github.com/paperclipai/paperclip/pull/10101)、[#10202](https://github.com/paperclipai/paperclip/pull/10202)、[#10205](https://github.com/paperclipai/paperclip/pull/10205))
- **简化英语交互** — 实验性标志以简体英语呈现代理交互，并在目录中提供可选的 `/simplified-english` 技能。 （[#10934]（https://github.com/paperclipai/paperclip/pull/10934），[#10410]（https://github.com/paperclipai/paperclip/pull/10410））

## 修复
- **真实版本号无处不在** - 发布的 Docker 图像现在标记真实的构建版本而不是 `package.json` 占位符，烘焙构建提交，并在未经身份验证的健康响应上公开正在运行的提交 - 因此 `--version`、UI 和 `/health` 最终就您正在运行的内容达成一致。 ([#10257](https://github.com/paperclipai/paperclip/pull/10257)、[#10566](https://github.com/paperclipai/paperclip/pull/10566)、[#10563](https://github.com/paperclipai/paperclip/pull/10563))
- **配置保存** - 托管配置修复保留扩展并保护无效修复，托管环境漂移在启动后仍然存在，并且技能同步/包导入不再默默地替换操作员的技能选择 - 替换现在需要显式合并模式。 ([#11005](https://github.com/paperclipai/paperclip/pull/11005)、[#10979](https://github.com/paperclipai/paperclip/pull/10979)、[#10978](https://github.com/paperclipai/paperclip/pull/10978))
- **收件箱正确性** - 人类用户完成的任务正确存档，被动问题视图不属于我的，您存档的项目保持存档，收件箱重新排序遵循注意力边界，因此项目停止在阅读中跳跃，空搜索部分隐藏，外部对象摘要不再泄漏到收件箱中。 ([#10668](https://github.com/paperclipai/paperclip/pull/10668)、[#10581](https://github.com/paperclipai/paperclip/pull/10581)、[#10623](https://github.com/paperclipai/paperclip/pull/10623)、[#10700](https://github.com/paperclipai/paperclip/pull/10700)、[#10020](https://github.com/paperclipai/paperclip/pull/10020))
- **工作空间弹性** - 记录分支不再存在的执行工作空间可以自我修复，当基础 CLI 损坏时，隔离的工作空间配置可以自我修复，针对合并基础的沙箱 git 回拷捆绑包因此仍然可以导入分叉或重置的工作空间，可以识别交付的工作空间并收获终端工作树，并且隔离的设置会推迟到运行时启动。 ([#10578](https://github.com/paperclipai/paperclip/pull/10578)、[#10574](https://github.com/paperclipai/paperclip/pull/10574)、[#10601](https://github.com/paperclipai/paperclip/pull/10601)、[#10908](https://github.com/paperclipai/paperclip/pull/10908)、[#10653](https://github.com/paperclipai/paperclip/pull/10653))
- **Codex 适配器可靠性** — 中转线束崩溃在结构上被分类为可重试的基础设施错误，保留静默活动构建，在沙箱运行中保留控制平面访问，沙箱运行可以使用沙箱映像自己的 Codex 登录，并且重复的 `--skip-git-repo-check` 标志注入消失了。 ([#10210](https://github.com/paperclipai/paperclip/pull/10210)、[#10153](https://github.com/paperclipai/paperclip/pull/10153)、[#10152](https://github.com/paperclipai/paperclip/pull/10152)、[#10582](https://github.com/paperclipai/paperclip/pull/10582)、[#10595](https://github.com/paperclipai/paperclip/pull/10595))
- **插件运行时修复** - 插件代理会话轮流和回复提供可靠的、新启动的插件工作人员接收其存储的配置，并且主动工作人员到主机的调用解决公司范围。 ([#10137](https://github.com/paperclipai/paperclip/pull/10137)、[#10092](https://github.com/paperclipai/paperclip/pull/10092)、[#10103](https://github.com/paperclipai/paperclip/pull/10103))
- **备份保留遵循日历月** - 每月备份修剪现在使用日历月边界而不是固定的 30 天近似值，因此它不再提前删除有效的月末备份。孤立的工作树开发实例也会停止调度自己的冗余备份流。 （[#3718]（https://github.com/paperclipai/paperclip/pull/3718），[#10520]（https://github.com/paperclipai/paperclip/pull/10520））
- **服务器强化** - 公司导出的 YAML 迭代渲染以阻止大公司的堆栈溢出，启动时不再需要 `PAPERCLIP_DECISION_SIGNING_SECRET`（不存在时使用安全的持久实例密钥），防止重复的内置代理并进行自我修复，例行检查冲突返回 409，并且自动声明到期的计时器间隔。 ([#10854](https://github.com/paperclipai/paperclip/pull/10854)、[#10594](https://github.com/paperclipai/paperclip/pull/10594)、[#10223](https://github.com/paperclipai/paperclip/pull/10223)、[#3790](https://github.com/paperclipai/paperclip/pull/3790)、[#10584](https://github.com/paperclipai/paperclip/pull/10584))
- **UI剪纸** - 浅色模式聊天气泡上的白对白文本、实时徽章和工作微光幸存任务拆解、对 Markdown 编辑器转义为 `\>` 的块引用、通过纯 HTTP 进行 clipboard 复制、计划未显示在计划窗格中、终止后代理详细信息挥之不去以及未加载的完整选定时间线窗口均已修复。 ([#10952](https://github.com/paperclipai/paperclip/pull/10952)、[#10985](https://github.com/paperclipai/paperclip/pull/10985)、[#10466](https://github.com/paperclipai/paperclip/pull/10466)、[#10875](https://github.com/paperclipai/paperclip/pull/10875)、[#10930](https://github.com/paperclipai/paperclip/pull/10930)、[#10451](https://github.com/paperclipai/paperclip/pull/10451)、 [#9576](https://github.com/paperclipai/paperclip/pull/9576))

## 升级指南

- **迁移**：此版本添加了 28 个数据库迁移（`0184` 到 `0211`），涵盖决策、状态卡、文档成员资格、交互治理和新索引。迁移在启动时自动运行 - 无需手动操作。请注意，`0196` 会删除属于已删除的实验性 Cloud Sync 传输的表（请参阅重大更改）。
- **新的可选环境变量**（都有合理的默认值；仅在需要时设置）：
  - `PAPERCLIP_IMPORT_ZIP_MAX_BYTES` — 公司导入 zip 上传上限（默认 1 GB）。 ([#11184](https://github.com/paperclipai/paperclip/pull/11184))
  - `DATABASE_PREPARED_STATEMENTS`、`DATABASE_POOL_MAX`、`DATABASE_IDLE_TIMEOUT_SECONDS`、`DATABASE_CONNECT_TIMEOUT_SECONDS` — DB client 调校；通过事务模式池化器（pgbouncer、Supavisor、Neon 池化主机）连接时设置 `DATABASE_PREPARED_STATEMENTS=false`。 ([#10795](https://github.com/paperclipai/paperclip/pull/10795))
  - `RUN_LOG_S3_INFLIGHT_MIRROR_SECONDS` — 选择将运行日志节流镜像到 S3，并进行正常关闭刷新； unset 表示没有改变。 ([#10512](https://github.com/paperclipai/paperclip/pull/10512))
  - `PAPERCLIP_DECISION_SIGNING_SECRET` — 可选覆盖决策签名；如果不存在，则会自动使用安全的持久实例密钥。 ([#10594](https://github.com/paperclipai/paperclip/pull/10594))
- **Docker 用户**：决定您想要哪个频道。如果您跟踪 `:latest` 进行主构建，则该通道现在是 `:canary`；从现在开始，`:latest` 仅在稳定版本上移动。
- **跨渠道降级**（例如，每晚恢复到稳定）可能意味着运行比创建数据时更旧的架构 - 将降级视为恢复并首先备份数据目录。

## 贡献者

此版本有来自 17 位贡献者的 311 次提交。感谢所有为此版本做出贡献的人！

@bluzername、@LeonSGP43、@myaji35、@noahrasheta、@samrusani、@santhiprakash、@scokeepa、@sparkeros

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.817.0` · 📅 发布：2026-08-18 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
