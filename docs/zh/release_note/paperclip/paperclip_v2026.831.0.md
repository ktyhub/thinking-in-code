---
title: "paperclip v2026.831.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.831.0"
version: "v2026.831.0"
published: "2026-09-02"
type: "minor"
lang: "zh"
---

# paperclip v2026.831.0

# 纸clip v2026.831.0

> 发布时间：2026-08-31

Paperclip v2026.831.0 被浸泡为 `2026.828.0-beta.0` 并进行了 175 次提交。公司技能库现在实际上可以在运行时到达您的代理，Kimi Code 加入适配器阵容，为其他人托管 Paperclip 的操作员可以真正控制用户看到的设置表面，沙箱回调桥在有界 HTTP/2 传输上重建，并且入职流程放弃了其任务步骤，以缩短代理前端和中心的弧线。它还将 Node.js 下限提高到 24 — 在更新源安装之前请阅读升级指南。

## 重大变更

- **需要 Node.js 24.11.0 或更新版本。** 每个包清单都声明新楼层，并且 Docker 映像在节点 24 上发布。只有托管安装 (`paperclipai install`) 在旧节点上完全拒绝； npm 安装并在节点 22/23 上直接启动服务器打印不支持版本警告并继续。警告不支持 - 在发布此版本之前升级节点。 （[#11792]（https://github.com/paperclipai/paperclip/pull/11792），[#11890]（https://github.com/paperclipai/paperclip/pull/11890））
- **无效的代理凭据将被拒绝而不是降级。** 验证失败的承载令牌现在会返回 401，指出原因（过期、无法验证、终止代理、错误的公司等），而不是默默地落入匿名本地用户参与者。任何依赖于该失败的集成都会开始看到 401——该失败就是错误。 ([#11589](https://github.com/paperclipai/paperclip/pull/11589))
- **公司品牌颜色和每个公司的附件大小限制消失了。** 这些字段已从公司常规页面、创建/更新 API 和可移植性清单中删除；迁移 `0229` 会删除列。带有旧字段的导出包仍然会导入 - 这些值将被忽略。 ([#12291](https://github.com/paperclipai/paperclip/pull/12291))
- **静默运行检测不再自行采取操作。** 输出静默仍然在 UI 中的活动运行摘要中显示为可疑/严重级别，但它不再产生评估问题、恢复操作、注释或唤醒请求。搁浅任务恢复同样会停止自动接管：耗尽且不安全的恢复现在会路由到董事会拥有的操作，而不是自行重新分配工作。 （[#12242]（https://github.com/paperclipai/paperclip/pull/12242），[#11961]（https://github.com/paperclipai/paperclip/pull/11961））
- **代理认为文本不包含在自动问题注释中。** ACPX 运行摘要仅限于最终输出段，并且故意忽略旧的完整摘要设置，因此配置无法绕过遏制。 （[#11801]（https://github.com/paperclipai/paperclip/pull/11801），@nearfolk）
- **Grok 不再将 `--permission-mode` 默认为 `dontAsk`。** 除非显式配置，否则适配器不会传递任何权限模式标志； `--always-approve` 仍然是无人值守的政策。 ([#11898](https://github.com/paperclipai/paperclip/pull/11898))

## 亮点
- **你的技能库现在到达你的代理** - 技能曾经是你安装和希望的东西。现在，每个运行的代理在其指令中都包含公司技能库的确定性清单，代理可以通过 MCP 列出技能，新聘用的首席执行官默认获得五项核心 Paperclip 技能，并且安装技能提供了“为代理启用”步骤，可预先选择每个具有技能的代理。当某项技能无法实现时，失败会在运行输出中显现出来，并显示其原因，而不是该技能默默消失，而遗留的运行者会被固定回规范的操作技能。 ([#12147](https://github.com/paperclipai/paperclip/pull/12147)、[#12138](https://github.com/paperclipai/paperclip/pull/12138)、[#12136](https://github.com/paperclipai/paperclip/pull/12136)、[#12146](https://github.com/paperclipai/paperclip/pull/12146)、[#12225](https://github.com/paperclipai/paperclip/pull/12225))
- **Kimi Code 是一流的适配器** — `kimi_local` 默认在共享 ACP 引擎上运行 Moonshot 的 Kimi Code CLI — 实时流转录、工具调用生命周期、与 Claude、Codex 和 Gemini 相同的机制 — 当 ACP 先决条件缺失时，自动无头 CLI 回退。 （[#9967]（https://github.com/paperclipai/paperclip/pull/9967），@hawikk）
- **操作员可以塑造用户看到的内容** - 对于为其他人托管 Paperclip 的任何人：`PAPERCLIP_HIDDEN_SETTINGS` 按键隐藏设置界面 - 实例页面、个人实验标志、公司页面（如成员、邀请、秘密、导出和导入），甚至单个选项卡（如提供商库和提案）。隐藏 `company.import` 也会地板 API，并且云托管实例地板无条件导入。 `PAPERCLIP_SETTING_DEFAULTS` 会覆盖所选实例设置的架构默认值，而不保留任何内容，并且仅托管沙箱模式完全隐藏主机路径和执行引擎表面。 ([#11823](https://github.com/paperclipai/paperclip/pull/11823)、[#12199](https://github.com/paperclipai/paperclip/pull/12199)、[#12284](https://github.com/paperclipai/paperclip/pull/12284)、[#12285](https://github.com/paperclipai/paperclip/pull/12285)、[#12293](https://github.com/paperclipai/paperclip/pull/12293))
- **沙盒回调桥，重建后不会翻倒** - 让沙盒代理回调到 Paperclip 的桥现在更喜欢有界节点 HTTP/2 双工传输，将文件轮询中继降级为软弃用的回退：字节端到端保持二进制，每个资源维度由进程拥有的字节分类帐预算（路由数据、代理转发、解码器缓冲区、挂起写入），沙箱内网关生存准备就绪后出现故障，并在准备就绪之前严重失败，并且双工通道在运行中死亡导致运行无法关闭，而不是让它“成功”结束并丢失写入。已退役的 v1 传输将被彻底删除。 ([#12120](https://github.com/paperclipai/paperclip/pull/12120)、[#11769](https://github.com/paperclipai/paperclip/pull/11769)、[#12003](https://github.com/paperclipai/paperclip/pull/12003)、[#12060](https://github.com/paperclipai/paperclip/pull/12060)、[#11966](https://github.com/paperclipai/paperclip/pull/11966)、[#12171](https://github.com/paperclipai/paperclip/pull/12171))
- **入门进入正题** — 任务步骤消失了；向导会在创建代理时打开，它只要求提供名称，仅此而已（每个入职员工均以 `general` 角色开始）。这些步骤在一张卡片上重建，品牌药丸横跨它们——在您设置时处于休眠状态，在您查看时处于活动状态——并且授权页面带有新的品牌锁定。闲置的“测试你的环境”卡也消失了；该调查仍在 Connect 上运行，并且仍会阻止失败的招聘。 ([#11935](https://github.com/paperclipai/paperclip/pull/11935)、[#11905](https://github.com/paperclipai/paperclip/pull/11905)、[#12274](https://github.com/paperclipai/paperclip/pull/12274)、[#12074](https://github.com/paperclipai/paperclip/pull/12074))

## 改进
- **选择使用 Sentry 进行错误监控** — 设置 `SENTRY_DSN` 并安装可选的 `@sentry/node` 对等点以获取服务器端错误捕获； DSN 依赖经过身份验证的会话响应，因此浏览器也会在 React 错误边界后面进行报告。一切都是失败开放的：没有DSN，没有包，没有Sentry，没有问题。 ([#12190](https://github.com/paperclipai/paperclip/pull/12190)、[#12249](https://github.com/paperclipai/paperclip/pull/12249)、[#12270](https://github.com/paperclipai/paperclip/pull/12270))
- **公司进口情况更好** — 最新版本使大量进口得以恢复；这个版本让到达变得愉快。导入的公司会获得重复名称，已导入的捆绑包会为其登陆的公司命名，每个导入结果都以仪表板 CTA 结尾，导入暂停的代理会带有专用的暂停原因，并在线程中显示可见的通知和恢复按钮，仪表板会在导入的代理暂停时显示带有“恢复全部”的横幅。 ([#12145](https://github.com/paperclipai/paperclip/pull/12145)、[#12144](https://github.com/paperclipai/paperclip/pull/12144)、[#12143](https://github.com/paperclipai/paperclip/pull/12143)、[#12140](https://github.com/paperclipai/paperclip/pull/12140)、[#12142](https://github.com/paperclipai/paperclip/pull/12142))
- **设置，统一** — 公司和实例设置共享一个导航；实例常规控件位于公司常规页面上；邀请移至“会员”页面的选项卡中；单独的实例 Heartbeats 页面消失了；面向用户的副本现在显示“组织”，而以前则显示“公司”。托管租户还会在重命名后获得从组织名称派生的问题前缀。 ([#11789](https://github.com/paperclipai/paperclip/pull/11789)、[#12289](https://github.com/paperclipai/paperclip/pull/12289)、[#12282](https://github.com/paperclipai/paperclip/pull/12282)、[#12243](https://github.com/paperclipai/paperclip/pull/12243)、[#12292](https://github.com/paperclipai/paperclip/pull/12292))
- **您可以实际管理的环境** - 现在删除环境将引导您完成它：在同一操作中重新分配代理，列出租约持有者，并销毁可重用的沙箱是一个单独的同意标签选择。自定义映像模板报告与启动相关的归因漂移，并且可以在一个 click 中重新链接，并且托管默认环境按其名称（“Paperclip 计算机”）显示，而不是其驱动程序密钥。 ([#12053](https://github.com/paperclipai/paperclip/pull/12053)、[#11751](https://github.com/paperclipai/paperclip/pull/11751)、[#11641](https://github.com/paperclipai/paperclip/pull/11641)、[#11838](https://github.com/paperclipai/paperclip/pull/11838))
- **更快的沙箱文件移动** - 入站工作区、资产和引用项目同步在提供商选择的情况下并行运行，并且 Daytona 文件上传通过原始回退进行透明 zstd 压缩。引用的项目最终在暂存期间遵循 `.gitignore`，并且报告的传输字节数是真实的。 ([#11736](https://github.com/paperclipai/paperclip/pull/11736)、[#12271](https://github.com/paperclipai/paperclip/pull/12271)、[#12184](https://github.com/paperclipai/paperclip/pull/12184)、[#12180](https://github.com/paperclipai/paperclip/pull/12180))
- **托管工作区在重新启动时保持不变** - 具有租用心跳和身份检查的共享端口注册表可在控制平面重新启动时保持运行时的可靠性，检测到降级的嵌入式数据库并用有界重新启动监督进行替换，克隆工作树隔离其复制的服务而不是与原始服务相冲突，延迟的数据库种子是具有经过验证的证据的一流操作，工作区登录切换是在真正准备就绪的情况下进行签名的一次性票据。 macOS 工作树现在也可以采用其端口所有者。 ([#11740](https://github.com/paperclipai/paperclip/pull/11740)、[#11651](https://github.com/paperclipai/paperclip/pull/11651)、[#11653](https://github.com/paperclipai/paperclip/pull/11653)、[#11706](https://github.com/paperclipai/paperclip/pull/11706)、[#11671](https://github.com/paperclipai/paperclip/pull/11671)、[#11763](https://github.com/paperclipai/paperclip/pull/11763)、 @tf00185077)
- **唤醒和恢复变得更加精确** - 问题答案通过专用交付账本持久交付，阻止程序解决的唤醒是级别触发的和周期感知的，因此终端重置不会使依赖者陷入困境，恢复重试可以在有界谱系的重新启动中幸存下来，工作恢复时暂时失败的例行运行会自行清除，并且代理恢复通过直接授权进行授权。 ([#12307](https://github.com/paperclipai/paperclip/pull/12307)、[#11732](https://github.com/paperclipai/paperclip/pull/11732)、[#11979](https://github.com/paperclipai/paperclip/pull/11979)、@zach-hermes、[#11817](https://github.com/paperclipai/paperclip/pull/11817)、[#9689](https://github.com/paperclipai/paperclip/pull/9689)、 [#12047](https://github.com/paperclipai/paperclip/pull/12047))
- **生活质量** - “代理模式”现在是“自动模式”，模式芯片上带有完整标签，每个收件箱项目都可以存档，停放的浏览器选项卡在一小时内获取新版本，而不是在硬刷新之前提供陈旧的 UI，并且开发运行程序遵循 `--data-dir` 隔离。 ([#11866](https://github.com/paperclipai/paperclip/pull/11866)、[#11636](https://github.com/paperclipai/paperclip/pull/11636)、[#12198](https://github.com/paperclipai/paperclip/pull/12198)、[#12193](https://github.com/paperclipai/paperclip/pull/12193))
- **基础工作，故意关闭** — 本机 Codex 执行运行程序（适配器 `paperclip_runner`）及其持久性合约和传输位于默认关闭的 `enableNativeRunner` 实例标志后面。它拒绝雇用并在旗帜关闭时运行；现有适配器没有任何变化。 ([#12188](https://github.com/paperclipai/paperclip/pull/12188)、[#12169](https://github.com/paperclipai/paperclip/pull/12169)、[#12176](https://github.com/paperclipai/paperclip/pull/12176))

## 修复

- **在 Better Auth 1.7 上注册和登录工作** — 升级需要 Better Auth 期望的 `issuer` 列；迁移`0230`添加并回填它。 （[#11886]（https://github.com/paperclipai/paperclip/pull/11886），[#12396]（https://github.com/paperclipai/paperclip/pull/12396））
- **富文本编辑器再次呈现** - 来自陈旧覆盖的第二个词法副本破坏了节点标识；树又回到了一个固定的副本，并且包含尖括号的散文不再将您踢出丰富的编辑器。 （[#12317]（https://github.com/paperclipai/paperclip/pull/12317），[#12290]（https://github.com/paperclipai/paperclip/pull/12290））
- **Docker 孤儿被收获** - `tini` 在服务器映像中是 PID 1，因此在其父出口之后采用的进程被清理，而不是累积为僵尸； CI 中的行为探针保持了这种状态。 （[#12137]（https://github.com/paperclipai/paperclip/pull/12137），@zannis）
- **适配器** — Hermes 显示 `reasoning.available` 事件的真实推理文本，而不是占位符（[#9237](https://github.com/paperclipai/paperclip/pull/9237)，@harjothkhara）；当默认模型哨兵不在发现列表中时，Grok 停止警告（[#12062](https://github.com/paperclipai/paperclip/pull/12062)）； Claude/Codex/Gemini ACP 适配器共享一个工作区恢复拆卸 ([#12196](https://github.com/paperclipai/paperclip/pull/12196))；适配器测试通道使用默认拒绝的探测环境验证每个 Claude ACP 目标的身份验证。 ([#11810](https://github.com/paperclipai/paperclip/pull/11810))
- **插件** — 错误的插件在启动时重试而不是保持死机，插件详细信息选项卡深层链接在重新加载后仍然存在，并且插件包获得主机的真实 JSX 运行时。 （[#12054]（https://github.com/paperclipai/paperclip/pull/12054），[#11826]（https://github.com/paperclipai/paperclip/pull/11826））
- **任务聊天** - 作曲家在您发送时清除（并在失败时恢复草稿），实时尾部显示运行的实际状态而不是“等待成绩单...”，并且插入符排队。 （[#11772]（https://github.com/paperclipai/paperclip/pull/11772），[#11802]（https://github.com/paperclipai/paperclip/pull/11802））
- **Git 工作区同步** — 嫁接没有共同祖先的导入历史记录而不是运行失败，同步创建的合并提交带有确定性身份，PR 准备可以附加到现有分支而不触及它。 ([#11638](https://github.com/paperclipai/paperclip/pull/11638)、[#11637](https://github.com/paperclipai/paperclip/pull/11637)、[#11703](https://github.com/paperclipai/paperclip/pull/11703))
- **服务器正确性** - 图像上传命名空间接受身份提供者字符，并彻底拒绝遍历，设置令牌启动防护固定到所服务的适配器，沙箱驱动程序环境跳过主机配置命令，渲染的 Markdown 代码块遵循活动主题，工作区收割机在收集终端工作区的工作树之前获得可配置的冷却时间。 ([#12288](https://github.com/paperclipai/paperclip/pull/12288)、[#12179](https://github.com/paperclipai/paperclip/pull/12179)、[#11626](https://github.com/paperclipai/paperclip/pull/11626)、[#11591](https://github.com/paperclipai/paperclip/pull/11591)、[#11642](https://github.com/paperclipai/paperclip/pull/11642))

此范围内的入职服务修复（`npx` 上载留下崩溃循环后台服务、重复的前台启动提示、入职结束而不打开仪表板）已作为 [v2026.824.1](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.1) 交付给稳定用户。

## 升级指南

- **Node.js**：现在最小值为 **24.11.0**。 Docker 用户获得带有镜像的节点 24。源安装和自定义基础映像必须首先升级。托管安装在较旧的节点上拒绝并出现错误； npm 在 Node 22/23 上安装和直接服务器启动会发出警告并继续，这在服务日志中很容易被忽略 - 在升级之前检查 `node --version` 而不是依赖警告。
- **迁移**：此版本添加了 8 个数据库迁移（`0223` 到 `0230`）：秘密提案 → 交互链接 (`0223`)、统一适配器身份验证会话替换 Claude 特定表（`0224`、`0225`）、处置修复重复数据删除索引 (`0226`)、本机运行程序合约表 — 在标志关闭 (`0227`)、持久问答交付 (`0228`)、删除公司品牌颜色和附件限制列 (`0229`) 以及带回填的 Better Auth `issuer` 列 (`0230`)。它们在启动时自动运行。只有 `0229` 丢弃数据，并且只有这两个已删除的字段。
- **新的可选环境变量**（默认保留当前行为）：
  - `PAPERCLIP_HIDDEN_SETTINGS` — 要隐藏的逗号分隔设置表面，供为其他人托管 Paperclip 的操作员使用；隐藏`company.import`还地板进口API。 （[#11823]（https://github.com/paperclipai/paperclip/pull/11823），[#12199]（https://github.com/paperclipai/paperclip/pull/12199））
  - `PAPERCLIP_SETTING_DEFAULTS` — JSON 对象覆盖所选实例设置的架构默认值。 ([#12285](https://github.com/paperclipai/paperclip/pull/12285))
  - `SENTRY_DSN` — 选择加入错误监控；还安装 `@sentry/node@10.71.0` 可选对等点以进行服务器端捕获。 ([#12190](https://github.com/paperclipai/paperclip/pull/12190))
  - `PAPERCLIP_WORKSPACE_REAPER_COOLDOWN_DAYS` — 终端工作区在其工作树被收获之前被单独保留的天数（默认为 7，`0` 禁用冷却时间）。 ([#11642](https://github.com/paperclipai/paperclip/pull/11642))
- **删除了 API 字段**：`brandColor` 和 `attachmentMaxBytes` 已从公司创建/更新/品牌 API 和可移植性清单中消失。 Clients 仍然向他们发送验证错误；携带它们的导出捆绑包进口罚款。
- **需要注意的行为更改**：不良代理承载令牌现在为 401（请参阅重大更改），静默运行和搁浅任务不再触发自动恢复操作，并且 Grok 的隐式 `--permission-mode dontAsk` 消失了。

## 贡献者

此版本有 13 位贡献者的 175 次提交。感谢所有为此版本做出贡献的人！

@aaymeloglu、@harjothkhara、@hawikk、@nearfolk、@tf00185077、@zach-hermes、@zannis

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.831.0` · 📅 发布：2026-09-02 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
