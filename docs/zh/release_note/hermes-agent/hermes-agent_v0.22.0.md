---
title: "hermes-agent v0.22.0"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.22.0"
version: "v0.22.0"
published: "2026-10-14"
type: "minor"
lang: "zh"
---

# hermes-agent v0.22.0

#爱马仕代理v0.22.0

**发布日期：** 2026 年 10 月 13 日
**自 v0.21.0 起：** ~24,200 次提交 · ~6,080 个合并 PR · ~15,600 个文件已更改 · ~2,045,000 个插入 · ~1,140,000 个删除 · **~7,180 个问题已关闭** · ~2,520 个贡献者

> **阈值释放。** 赫耳墨斯是阈值之神：门口、十字路口、界石。 v0.21.0组装万神殿； v0.22.0 即将进门。现在，全新的桌面安装会在免费试用模型上运行的引导设置聊天中打开，因此新用户在拥有 API 密钥之前就可以与 Hermes 交谈。连接器将代理带到您已经使用的应用程序中，无需启动帐户。本地模型通过 one-click llama.cpp 运行时将其带入您自己的硬件。而且门槛本身变得更加坚固：经过测试的 SemVer 稳定版本默认安装，签名的桌面包（包括 Microsoft Store），以及所有内容下的一个包管理器。围绕着这个脊柱：一个包含 600 个插件的目录、Claude 5.5 / GPT-6 模型 Wave、浏览器的密码管理器登录、一个可以接管的机器人屏幕、一个后端和一个用于每个配置文件的网关，以及一个小三分之一的代码库。这是 Hermes 已发货的最大窗口，大约是 v0.21.0 周期的 2.5 倍，它汇总并完整记录了 v0.21.1–v0.21.7 补丁版本。

<!-- HERMES_BUILDS_TABLE -->

---

## ✨ 亮点

- **首次启动自行设置** — 在您从未使用过 Hermes 的计算机上打开桌面应用程序，它会启动简短的设置聊天而不是设置屏幕。它一次一张卡片询问您的姓名、强调色和布局、要连接哪些应用程序、要安装哪些插件，然后进行快速浏览并提供最多四个为您挑选的首要任务。它以免费试用模式运行（`nous/welcome`，每个操作系统用户一次），因此不需要密钥； **跳过设置**结束它，然后**设置→再次运行入门**将其恢复。该代理还获得了 `set_theme`，因此“使其紫色，深色模式”适用于任何桌面聊天。 ([#137429](https://github.com/NousResearch/hermes-agent/pull/137429)、[#137522](https://github.com/NousResearch/hermes-agent/pull/137522)、[#137807](https://github.com/NousResearch/hermes-agent/pull/137807)、[#134209](https://github.com/NousResearch/hermes-agent/pull/134209)、[#105258](https://github.com/NousResearch/hermes-agent/pull/105258) — @alt-glitch、@OutThisLife、 @ethernet8023，@rewebs）

- **连接器：Hermes 在您的应用程序内部工作** — 代理现在可以通过 Nous 工具网关在 Linear 和 Notion 等托管应用程序中进行操作：请求一个应用程序，在浏览器中登录一次，然后即可立即使用这些工具。您不需要 Nous 帐户即可启动；当您第一次使用应用程序时，Hermes 会创建一个免费的仅限连接器的身份。桌面有一个新的 **连接器** 页面，将托管应用程序和 MCP 服务器放在一个列表中（它取代了 MCP 选项卡），相同的设置卡出现在 TUI 和 CLI 中，您可以连接一个应用程序的多个指定帐户（`work` 和 `home` 帐户）并使用 `/connectors` 或 `hermes connectors` 管理它们。 ([#106842](https://github.com/NousResearch/hermes-agent/pull/106842)、[#111008](https://github.com/NousResearch/hermes-agent/pull/111008)、[#119074](https://github.com/NousResearch/hermes-agent/pull/119074)、[#135143](https://github.com/NousResearch/hermes-agent/pull/135143)、[#135072](https://github.com/NousResearch/hermes-agent/pull/135072)、 [#135097](https://github.com/NousResearch/hermes-agent/pull/135097)、[#135151](https://github.com/NousResearch/hermes-agent/pull/135151)、[#135173](https://github.com/NousResearch/hermes-agent/pull/135173)、[#137426](https://github.com/NousResearch/hermes-agent/pull/137426) — @alt-glitch、@rewbs)
- **一台 click 中的本地模型** — Hermes 现在可以完全在您的计算机上运行开放模型，无需任何操作：无需帐户，无需 API 密钥。它使用适合您的硬件（CPU、CUDA、Metal、Vulkan 或 ROCm）的引擎安装和维护 llama.cpp，根据您的 GPU 和 RAM 对每个目录模型进行评级，并选择适合的最高质量构建。下载暂停和恢复，服务器随 Hermes 启动和停止，引擎更新都是 click。从 Windows、macOS 和 Linux 上的 **设置 → 提供程序 → 本地模型** 开始，或者从终端中的 `hermes model` → **本地模型** 开始。该目录包括 Qwen3.8 27B、Qwen3.8 Flash Next（带有 MTP 推测头）、Qwen3.6 35B-A3B 和 DeepSeek V4 Flash，以及来自 Hugging Face 的任何 GGUF。 ([#100667](https://github.com/NousResearch/hermes-agent/pull/100667)、[#101823](https://github.com/NousResearch/hermes-agent/pull/101823)、[#128768](https://github.com/NousResearch/hermes-agent/pull/128768)、[#111423](https://github.com/NousResearch/hermes-agent/pull/111423)、[#133111](https://github.com/NousResearch/hermes-agent/pull/133111)、 [#134116](https://github.com/NousResearch/hermes-agent/pull/134116) — @jquesnelle, @ethernet8023)

- **稳定的发布渠道** — Hermes 现在发布经过测试的 SemVer 版本。每个版本都会通过源 CI、Docker、Nix，签名的桌面构建和安装/升级在发布之前在每个操作系统上运行，并且源安装现在默认从一个版本移动到另一个版本，而不是跟踪 `main` 上的每个提交。更喜欢前沿？ `hermes update --set-channel main`，或桌面**设置→关于**中的新频道开关。迁移到旧版本被标记为回滚，并且在没有询问的情况下永远不会发生，并且安装程序重新运行会让您保持在您选择的频道上。 ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765)、[#135847](https://github.com/NousResearch/hermes-agent/pull/135847)、[#135949](https://github.com/NousResearch/hermes-agent/pull/135949)、[#136313](https://github.com/NousResearch/hermes-agent/pull/136313)、[#137780](https://github.com/NousResearch/hermes-agent/pull/137780) — @ethernet8023、@KoNit-K)

- **签名的桌面包、Microsoft Store 和一个包管理器** — 桌面应用程序现在是一个密封的签名包，带有自己的 Python 和 Node 并进行自我更新，因此第一次启动不会构建任何内容。 Windows 通过 App Installer 或 Microsoft Store 获取签名的 MSIX（x64 和 ARM64）； macOS 获得了 Apple Silicon 的签名、公证版本。在下面，一个新的统一包管理器 (`hermes pm`) 拥有每个固定的、经过哈希检查的工具和 Python 环境：更新构建一个新环境，并且仅在通过检查后才进行切换，因此失败或终止的更新不会再让您半应用。 ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765)、[#132361](https://github.com/NousResearch/hermes-agent/pull/132361)、[#132386](https://github.com/NousResearch/hermes-agent/pull/132386)、[#120339](https://github.com/NousResearch/hermes-agent/pull/120339)、[#122221](https://github.com/NousResearch/hermes-agent/pull/122221) — @ethernet8023)


- **插件目录：600 个经过审核的插件** — 插件目录在本周期启动，并增长到 600 个条目，每个条目都固定到经过审核的提交，并可从 Hermes Desktop 或 CLI 安装。按类别和星级排名浏览每个插件和每个作者的页面；目录规则阻止列出的插件修补 Hermes 内部或发送不可扫描的二进制文件。内存提供商现在与他们的制造商（Honcho、Supermemory、Hindsight、Mem0、OpenViking、Holographic）共存，Home Assistant、Spotify 和 Langfuse 也是如此：现有用户会自动迁移，默认安装也变得更加精简。 ([#69446](https://github.com/NousResearch/hermes-agent/pull/69446)、[#111415](https://github.com/NousResearch/hermes-agent/pull/111415)、[#117808](https://github.com/NousResearch/hermes-agent/pull/117808)、[#113381](https://github.com/NousResearch/hermes-agent/pull/113381)、[#114732](https://github.com/NousResearch/hermes-agent/pull/114732)、 [#131267](https://github.com/NousResearch/hermes-agent/pull/131267)、[#132476](https://github.com/NousResearch/hermes-agent/pull/132476)、[#136436](https://github.com/NousResearch/hermes-agent/pull/136436) — @itpartypattaya、@happy5318 和 400 多个插件作者）
- **Claude 5.5 和 GPT-6 模型波** — Claude Fable 5.1、Opus 5.5、Sonnet 5.5 和 Haiku 5.5、GPT-6 Astra、Sol 和 Luna 加 GPT-6.1 Sol 和 Gemini 4 Argon 可在 Nous Portal、OpenRouter 和本地路线上选择哪里提供。现在默认情况下，每个可以读取它的提供者都会重播先前的推理，跨简历、分支和压缩，因此长时间的多步骤工作可以保持其思路。当提供者遇到困难时，Hermes 会在可见的有界周期中等待短暂的 503/529/超时，而不是结束你的回合。 ([#100577](https://github.com/NousResearch/hermes-agent/pull/100577)、[#119304](https://github.com/NousResearch/hermes-agent/pull/119304)、[#126842](https://github.com/NousResearch/hermes-agent/pull/126842)、[#134759](https://github.com/NousResearch/hermes-agent/pull/134759)、[#128248](https://github.com/NousResearch/hermes-agent/pull/128248)、 [#137955](https://github.com/NousResearch/hermes-agent/pull/137955)、[#136358](https://github.com/NousResearch/hermes-agent/pull/136358)、[#116353](https://github.com/NousResearch/hermes-agent/pull/116353) — @kshitijk4poor、@unsupportedpastels、@100yenadmin、@mssteuer、@xxxigm)

- **使用密码管理器登录网站** — 浏览器代理可以通过 1Password、Bitwarden 或 Hermes 自己的加密保管库登录来登录网站，并且模型永远不会看到密码。如果未保存任何内容，您会在 CLI、TUI 或桌面中收到保存提示，无需进入对话即可填写一次性代码，结帐时填写的卡和地址需要您确认。 ([#106480](https://github.com/NousResearch/hermes-agent/pull/106480)、[#107585](https://github.com/NousResearch/hermes-agent/pull/107585)、[#137084](https://github.com/NousResearch/hermes-agent/pull/137084))

- **机器人屏幕：观察您的机器人工作，在需要时接管** — 在 Linux 网关上运行的机器人可以拥有自己的桌面，Hermes 桌面可以实时流式传输。当它出现登录、2FA 提示或验证码时，您将占据屏幕，自己完成该步骤，然后在机器人继续进行会话时收回控制权。通过 Docker、SSH 或 Singularity 后端，机器人的屏幕、计算机使用和浏览器在沙箱内运行，而不是在您的主机上运行。 ([#108914](https://github.com/NousResearch/hermes-agent/pull/108914)、[#121169](https://github.com/NousResearch/hermes-agent/pull/121169)、[#121110](https://github.com/NousResearch/hermes-agent/pull/121110))

- **每个配置文件一个后端和一个网关** — Hermes 现在每台机器运行一个消息网关和一个桌面后端来为您的所有配置文件提供服务，而不是每个配置文件一个进程。创建配置文件使其机器人无需重新启动即可运行，每个配置文件都保留自己的凭据、白名单、cron 作业和会话，并且 `hermes update` 会自动迁移现有的每个配置文件设置。更少的进程，没有令牌冲突，启动和停止都是一件事。 ([#112854](https://github.com/NousResearch/hermes-agent/pull/112854)、[#108928](https://github.com/NousResearch/hermes-agent/pull/108928)、[#118273](https://github.com/NousResearch/hermes-agent/pull/118273)、[#117983](https://github.com/NousResearch/hermes-agent/pull/117983)、[#118246](https://github.com/NousResearch/hermes-agent/pull/118246)、 [#118027](https://github.com/NousResearch/hermes-agent/pull/118027))

- **实时查看和引导您的子代理** — 运行的子代理现在在 CLI (F6)、TUI (Ctrl+T) 和桌面中的作曲家上方保持可见，其中包含每个孩子的任务、经过的时间和实时记录，以及“转向”和“停止”按钮。 `/stop` 可以到达后台儿童并交回他们的部分工作，而 `delegate_task` 可以将屏幕截图和模拟传递给有视力的儿童。 ([#105593](https://github.com/NousResearch/hermes-agent/pull/105593)、[#115616](https://github.com/NousResearch/hermes-agent/pull/115616)、[#97689](https://github.com/NousResearch/hermes-agent/pull/97689))

- **了解您计划的模型选择器** — 为您最喜爱的模型加注星标，查看订阅量低（“剩余 17% · 下午 3:00 重置”）以及速率限制何时在选择器中解除，并在 `hermes model`、`/model` (`/model X --reasoning high`) 和桌面中选择推理工作作为选择模型的一部分。你可以在撞墙之前而不是撞墙之后切换。 ([#126535](https://github.com/NousResearch/hermes-agent/pull/126535)、[#133392](https://github.com/NousResearch/hermes-agent/pull/133392)、[#133408](https://github.com/NousResearch/hermes-agent/pull/133408)、[#110346](https://github.com/NousResearch/hermes-agent/pull/110346)、[#113117](https://github.com/NousResearch/hermes-agent/pull/113117) — @OutThisLife、@anotherchu)
- **Hermes 以您的语言，无处不在** — CLI、消息网关、TUI 和桌面中每个面向用户的字符串现在都会经过一个翻译目录，全面覆盖所有 16 种捆绑语言。新语言可以作为插件发布，任何配置文件都可以使用小 YAML 文件覆盖单个字符串。 ([#126296](https://github.com/NousResearch/hermes-agent/pull/126296))

- **在各个方面都更加精简** - 整个代码库得到了简化，行为变化为零：源代码从大约 106 万行减少到 698K 行 (−34%)，`gateway/run.py` 从 34,847 行缩减到 5,512 行。提示也变得更轻：大约 19 个很少使用的工具现在仅在代理搜索时加载，大致将每次调用时发送的桌面工具架构减半，另外约 2.1k 令牌来自固定提示。本地模型每次都会预填充较少的数据。 ([#102117](https://github.com/NousResearch/hermes-agent/pull/102117)、[#97979](https://github.com/NousResearch/hermes-agent/pull/97979)、[#106676](https://github.com/NousResearch/hermes-agent/pull/106676)、[#137084](https://github.com/NousResearch/hermes-agent/pull/137084) — @alt-glitch)

- **加起来的小舒适** - CLI 提示中的选择加入 vim 键、状态栏中的 git-branch 字段、Hermes 等待您时的铃声和桌面通知、清除草稿而不是杀死回合的 Ctrl+C、可编辑的 `/queue` 和 `hermes --native` 让您自己的终端处理 TUI 滚动和搜索。在桌面上，新的 **简单** 模式将应用程序变成一个普通的聊天窗口，并且错误现在会说明 one-click 修复出了什么问题。 ([#106412](https://github.com/NousResearch/hermes-agent/pull/106412)、[#106434](https://github.com/NousResearch/hermes-agent/pull/106434)、[#101284](https://github.com/NousResearch/hermes-agent/pull/101284)、[#101320](https://github.com/NousResearch/hermes-agent/pull/101320)、[#137065](https://github.com/NousResearch/hermes-agent/pull/137065)、 [#95999](https://github.com/NousResearch/hermes-agent/pull/95999)、[#121035](https://github.com/NousResearch/hermes-agent/pull/121035)、[#118587](https://github.com/NousResearch/hermes-agent/pull/118587)、[#111601](https://github.com/NousResearch/hermes-agent/pull/111601) — @saforem2、@TurgutKural、@glitchbunny0、@harshmoney123、@pierrenode、 @abhinav11082001-stack，@OutThisLife）

---

## ⚠️ 升级说明

- **Python 3.14 是托管安装的运行时**（包管理器为您安装它）。 KittenTTS 在 3.14 上不可用。 ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765))
- **Windows 桌面仅限 MSIX**，需要 Windows 11 22H2 或更高版本； NSIS/MSI 安装程序消失了。 macOS 应用程序仅在默认版本中是 Apple Silicon。 （[#102765]（https://github.com/NousResearch/hermes-agent/pull/102765），[#136603]（https://github.com/NousResearch/hermes-agent/pull/136603））
- **默认每台机器一个网关。** 当没有冲突时，`hermes update` 将每个配置文件网关折叠到多路复用默认网关中。 ([#112854](https://github.com/NousResearch/hermes-agent/pull/112854))
- **聊天不再在空闲/每日计时器上重置。** `session_reset` 空闲/每日模式已停用（仍然设置它们的配置会记录警告）； `/new` 或 `/reset` 全新开始。 （[#105021]（https://github.com/NousResearch/hermes-agent/pull/105021），[#126244]（https://github.com/NousResearch/hermes-agent/pull/126244））
- **旧会话会自动修剪。** `sessions.auto_prune` 现在默认为打开：90 天不活动的结束会话将在启动时删除。固定和打开的会话永远不会被触及；设置 `sessions.auto_prune: false` 保留所有内容。
- **内存提供商转向目录插件**（Honcho、Supermemory、Hindsight、Mem0、OpenViking、Holographic），Home Assistant、Spotify 和 Langfuse 也是如此。现有用户会在更新或首次启动时迁移，且数据完好无损。 ByteRover 和 RetainDB 仍然捆绑在一起。
- **插件作者：**旧的插件兼容性导入层已消失（[#126164](https://github.com/NousResearch/hermes-agent/pull/126164)），`hermes sync`（技能同步）已删除（[#132465](https://github.com/NousResearch/hermes-agent/pull/132465)），并且捆绑的提力扫描仪已删除（[#133832](https://github.com/NousResearch/hermes-agent/pull/133832)）。多个工具被重命名（`todo` → `todo_list`、`cronjob` → `cronjob_manage`、`process` → `process_manage`）；旧名称仍然有效。 ([#97979](https://github.com/NousResearch/hermes-agent/pull/97979))

---

## 🚪 入门、免费套餐、连接器和本地模型

### 首次运行入门
- **全新桌面安装上的引导设置聊天** *（请参阅亮点）*。现有安装和远程（SSH、URL、云）后端不会自动获取它；旧的设置配置文件流和 `/initiate-setup` 被删除。 ([#137420](https://github.com/NousResearch/hermes-agent/pull/137420)、[#134215](https://github.com/NousResearch/hermes-agent/pull/134215)、[#108292](https://github.com/NousResearch/hermes-agent/pull/108292) — @alt-glitch、@ethernet8023、@OutThisLife)
- **代理可以重新设计应用程序** - 新的 `set_theme` 工具设置重音（样本或任何 `#rrggbb`）、亮/暗/系统模式和布局，或显示选择器； “让它变成紫罗兰色”适用于任何桌面聊天。 ([#137522](https://github.com/NousResearch/hermes-agent/pull/137522) — @alt-glitch)

### Nous 免费套餐
- **首次桌面启动的免费模型** — 无需提供商或 Nous 帐户的首次桌面安装即可获得免费的 `nous/welcome` 模型作为一次性试用版（每个操作系统用户一次），因此入门不需要密钥。 CLI、TUI 和网关没有帐户或免费模型。 `HERMES_GUEST_ONBOARDING` 不见了。 ([#137807](https://github.com/NousResearch/hermes-agent/pull/137807)、[#105258](https://github.com/NousResearch/hermes-agent/pull/105258)、[#105260](https://github.com/NousResearch/hermes-agent/pull/105260) — @alt-glitch)
- **登录并保留您的应用程序** — 任何聊天或消息传递 DM 中的 `hermes auth upgrade` 或 `/login` 均可将免费身份升级为包含您连接的应用程序的完整 Nous 帐户。 ([#105259](https://github.com/NousResearch/hermes-agent/pull/105259)、[#105261](https://github.com/NousResearch/hermes-agent/pull/105261) — @alt-glitch)
- **明确限制** — 免费速率限制随着重置时间立即结束回合；每个免费层故障都有一个代码和一个简单的句子；该应用程序处理帐户服务的浏览器检查；免费套餐用户会看到条款和隐私声明。没有积分的 Nous 帐户可以选择按其持有的订阅计费的模型，并获得免费管理的快速网络搜索。 ([#134049](https://github.com/NousResearch/hermes-agent/pull/134049)、[#111970](https://github.com/NousResearch/hermes-agent/pull/111970)、[#133824](https://github.com/NousResearch/hermes-agent/pull/133824)、[#117079](https://github.com/NousResearch/hermes-agent/pull/117079) — @alt-glitch、@kshitijk4poor、@rewbs)

### 连接器
- **托管应用程序连接器、连接器页面和每个应用程序的多个帐户** *（请参阅亮点）*。连接器工具还可以将本地文件作为附件发送并保存它们返回的文件。 `nous.guest: false` 关闭访客身份； `tools.connectors.enabled: false` 关闭连接器。 ([#111238](https://github.com/NousResearch/hermes-agent/pull/111238)、[#138014](https://github.com/NousResearch/hermes-agent/pull/138014) — @alt-glitch)
- **到处都有一个连接流** — 托管应用程序和本地 MCP 服务器共享一张设置卡（桌面对话框、TUI 标注或 CLI 面板），并且代理可以同时使用新工具。在桌面上，`manage_connections` 可以显示可浏览的应用程序目录。 ([#111008](https://github.com/NousResearch/hermes-agent/pull/111008)、[#109517](https://github.com/NousResearch/hermes-agent/pull/109517)、[#137426](https://github.com/NousResearch/hermes-agent/pull/137426) — @alt-glitch)

### 本地模特
- **One-click 本地型号** *（参见亮点）*。另外：Hugging Face GGUF 下载具有暂停/恢复功能，以及在可以运行推荐模型的机器上安装后提供一次性安装优惠。 ([#129506](https://github.com/NousResearch/hermes-agent/pull/129506) — @alt-glitch)
- **引擎更新和更广泛的 GPU 支持** — **立即更新**提示更新 click 中的引擎。 Linux 上的 NVIDIA 获得 CUDA，AMD 和 Intel GPU 获得由自己的内存调整大小的 Vulkan，每个后端都运行 llama.cpp b11370。 ([#111423](https://github.com/NousResearch/hermes-agent/pull/111423)、[#133111](https://github.com/NousResearch/hermes-agent/pull/133111)、[#131782](https://github.com/NousResearch/hermes-agent/pull/131782) — @jquesnelle、@skyecon、@mbeattietex1-star、@Belaquaa)
- **更好的推荐** — 仅推荐完全适合 GPU 内存的型号，并且 27B 不再适用于运行性能不佳的硬件。 Qwen3.8 Flash Next 带有 MTP 头，适合 128 GB 机器； NVIDIA Spark 建议已调整。 ([#108429](https://github.com/NousResearch/hermes-agent/pull/108429)、[#135438](https://github.com/NousResearch/hermes-agent/pull/135438)、[#134116](https://github.com/NousResearch/hermes-agent/pull/134116)、[#112107](https://github.com/NousResearch/hermes-agent/pull/112107) — @jquesnelle、@RyanUnderhill)
- **您自己的本地服务器** — LM Studio 具有提供商配置文件，Ollama 选择器不再闪烁，自启动的 llama.cpp 服务器显示在 `/model` 中，并且可以回退到桌面管理模型。 ([#134320](https://github.com/NousResearch/hermes-agent/pull/134320)、[#113129](https://github.com/NousResearch/hermes-agent/pull/113129)、[#116679](https://github.com/NousResearch/hermes-agent/pull/116679)、[#131795](https://github.com/NousResearch/hermes-agent/pull/131795) — @kshitijk4poor、@DaxLee9988、@fangliquanflq、@Finn763、 @albeight）

## 📦 稳定版本、桌面包和包管理器

### 稳定的发布和更新渠道
- **经过测试的 SemVer 稳定版本和通道切换** *（参见亮点）*。 v0.21.6和v0.21.7率先通过新登机口；分叉保留在 `main` 上，最新版本之前的安装等待下一个版本。
- **更轻松的更新检查** — 每天调用一次 GitHub API，每 30 分钟替换一次 `git fetch`。 ([#107648](https://github.com/NousResearch/hermes-agent/pull/107648))

### 桌面捆绑包和 Microsoft Store
- **密封、签名的桌面包** *（参见亮点）*。在软件包中，`hermes update` 指向正确的更新程序（应用程序安装程序、商店或 macOS）。 ([#134911](https://github.com/NousResearch/hermes-agent/pull/134911))
- **打包安装端到端工作** - 代理的终端运行 `hermes`，卸载解释操作系统删除，Python 依赖插件安装在 MSIX 内。 ([#134051](https://github.com/NousResearch/hermes-agent/pull/134051)、[#135333](https://github.com/NousResearch/hermes-agent/pull/135333) — @alt-glitch)

### 统一的包管理器
- **`hermes pm`** *（参见亮点）*：Windows 上固定、哈希检查的 Python 3.14、uv、Node、ripgrep、FFmpeg、Chromium 和 Git/Bash，以及 `hermes pm doctor|status|repair|gc`。贡献者使用 `source ./activate`（或 `.ps1`/`.fish`）。
- **依赖环境是一代** - 新环境在使用前会被检查，因此失败的安装会保留工作环境；更新并 `hermes pm gc` 回收旧的（一台主机上 92 GB 到 18 GB）。 ([#124968](https://github.com/NousResearch/hermes-agent/pull/124968)、[#133808](https://github.com/NousResearch/hermes-agent/pull/133808) — @JoaoMarcos44)
- **首次使用时安装可选功能** — 选择加入 SDKs（Anthropic、Bedrock）在会话中加载，无需重新启动； `security.allow_lazy_installs: false` 将其关闭。 ([#122221](https://github.com/NousResearch/hermes-agent/pull/122221) — @ethernet8023)
- **插件声明 Python 依赖项** — 通过跨配置文件的核心进行解决；冲突被拒绝，更新禁用不再适合的插件。 Hindsight、Honcho、Supermemory、Mem0 和 Home Assistant 已移至目录并在使用时自动安装。 ([#113851](https://github.com/NousResearch/hermes-agent/pull/113851)、[#122103](https://github.com/NousResearch/hermes-agent/pull/122103)、[#114569](https://github.com/NousResearch/hermes-agent/pull/114569)、[#132469](https://github.com/NousResearch/hermes-agent/pull/132469) — @ethernet8023)

### 安装和更新
- **更新不能半应用** *（参见亮点）*。被终止的更新会在下次启动时自行修复。 （[#132361]（https://github.com/NousResearch/hermes-agent/pull/132361），[#120339]（https://github.com/NousResearch/hermes-agent/pull/120339））
- **更快的更新，更小的结帐** - 更新仅重建发生变化的内容（macOS 上的 16.5 与 32.5 ），克隆是无斑点的，并且部分克隆 `.git` 增长是固定的。 ([#135092](https://github.com/NousResearch/hermes-agent/pull/135092)、[#133016](https://github.com/NousResearch/hermes-agent/pull/133016)、[#131679](https://github.com/NousResearch/hermes-agent/pull/131679) — @kshitijk4poor、@ethernet8023、@liuhao1024、@whyyagswhy)
- **小型、经过哈希检查的安装程序** — `install.sh`/`install.ps1` 验证固定的 uv 和 Git，移交给 PM，登录到 `logs/install.log`，现在可以在 musl Linux（Alpine、Void）、Windows 10 和 Unicode Windows 路径上工作。 ([#124964](https://github.com/NousResearch/hermes-agent/pull/124964)、[#125598](https://github.com/NousResearch/hermes-agent/pull/125598)、[#132430](https://github.com/NousResearch/hermes-agent/pull/132430) — @JoaoMarcos44、@kshitijk4poor、@Finn763、@OutThisLife)
- **失败说明原因** - 通过选择遥测、安装、更新、技能和插件失败记录原因。 ([#133809](https://github.com/NousResearch/hermes-agent/pull/133809))

### Docker / Nix / Termux / Windows
- **Docker** — 固定 Debian 13 基础，带有完整的 Chromium； `stable`/`latest` 仅在已发布的版本上移动；重新启动后，内置的额外功能会返回。 ([#135726](https://github.com/NousResearch/hermes-agent/pull/135726)、[#135084](https://github.com/NousResearch/hermes-agent/pull/135084) — @unsupportedpastels)
- **Nix、Termux、Windows** — Nix 共享引脚；其桌面应用程序获得 Wayland； Termux 转向签名的 APT 包 (`pkg upgrade hermes-agent`)，尽管它的文档仍然警告它已损坏； Windows 更新在旧运行时正在使用时完成。 ([#128144](https://github.com/NousResearch/hermes-agent/pull/128144)、[#122146](https://github.com/NousResearch/hermes-agent/pull/122146)、[#131779](https://github.com/NousResearch/hermes-agent/pull/131779) — @ethernet8023、@janviernine)

### CI 和发布工程
- **发布门** — E2E 套件在发布版本上运行，完整套件在本机 Windows 上运行，并且 SSH/Docker 后端针对真实守护程序。 ([#135409](https://github.com/NousResearch/hermes-agent/pull/135409)、[#96458](https://github.com/NousResearch/hermes-agent/pull/96458)、[#136602](https://github.com/NousResearch/hermes-agent/pull/136602) — @ethernet8023)

## 🧠 提供商和模型

### 新提供商
- **提供程序作为插件** — ACP 和 CLI 驱动的提供程序通过 `hermes plugins install` 在树外安装； `--provider chatgpt` 选择 ChatGPT Codex OAuth。 ([#101456](https://github.com/NousResearch/hermes-agent/pull/101456)、[#115761](https://github.com/NousResearch/hermes-agent/pull/115761) — @AlexanderPrendota、@DarRahman)
- **提供商升级** — Bedrock 提供 GPT-6 (1M) 服务并强制执行 Claude Guardrails； Azure Foundry 列出部署； Gemini 采用完整的 JSON 架构工具； OpenCode Go 通过消息路由 Claude。 ([#133573](https://github.com/NousResearch/hermes-agent/pull/133573)、[#107815](https://github.com/NousResearch/hermes-agent/pull/107815)、[#115770](https://github.com/NousResearch/hermes-agent/pull/115770)、[#98928](https://github.com/NousResearch/hermes-agent/pull/98928)、[#134848](https://github.com/NousResearch/hermes-agent/pull/134848) — @victor-kyriazakos, @JoaoMarcos44、@xxxigm、@thejpanganiban、@pandacooming）
- **新旋钮** — `agent.text_verbosity` 设置响应答案长度；命名的自定义提供程序在 Codex 应用程序服务器上运行。 ([#115880](https://github.com/NousResearch/hermes-agent/pull/115880)、[#115905](https://github.com/NousResearch/hermes-agent/pull/115905) — @Beandon13、@cosin2077)
### 型号目录
- **Claude 5.x** — Opus 5.5 也在原生人类和基岩 (1M) 上。 ([#122633](https://github.com/NousResearch/hermes-agent/pull/122633) — @kshitijk4poor, @didodim)
- **GPT-6** — 标准、快速和灵活的 Astra/Astra Pro；选择加入 Codex `-900k`；根据计划，`/fast ultrafast` 适用于 Astra 和 6.1 Sol。 ([#103261](https://github.com/NousResearch/hermes-agent/pull/103261)、[#119410](https://github.com/NousResearch/hermes-agent/pull/119410)、[#136950](https://github.com/NousResearch/hermes-agent/pull/136950) — @daniil-grois、@sdalonzo)
- **Gemini 3.8 Flash 和 Gemini 4 Argon**。 ([#101450](https://github.com/NousResearch/hermes-agent/pull/101450)、[#137989](https://github.com/NousResearch/hermes-agent/pull/137989) — @kshitijk4poor、@dgkaaks)
- **更多** — DeepSeek V4.1 Flash、Qwen3.8-Max-0902、Grok 4.7、GLM-5.3-FlashX、Muse Spark 1.3、Solar Pro 4/Mini 4。（[#107489](https://github.com/NousResearch/hermes-agent/pull/107489)、[#100966](https://github.com/NousResearch/hermes-agent/pull/100966)、 [#118371](https://github.com/NousResearch/hermes-agent/pull/118371)、[#117435](https://github.com/NousResearch/hermes-agent/pull/117435)、[#101948](https://github.com/NousResearch/hermes-agent/pull/101948)、[#131645](https://github.com/NousResearch/hermes-agent/pull/131645) — @rob-maron、@am423)
### 授权和订阅
- **配置文件安全地共享 OAuth 登录** — 一次性授权永不分叉；保留个人资料自己的登录信息。 ([#100929](https://github.com/NousResearch/hermes-agent/pull/100929)、[#134574](https://github.com/NousResearch/hermes-agent/pull/134574) — @unsupportedpastels)
- **Nous 登录仍然存在** 每小时到期、并发子代理、门户中断和边缘检查。 ([#103526](https://github.com/NousResearch/hermes-agent/pull/103526)、[#121488](https://github.com/NousResearch/hermes-agent/pull/121488) — @kshitijk4poor、@zzragida)
- **死登录名被命名一次**，并修复了 `hermes auth add`； `auth.adopt_external_logins: false` 停止借用 Codex CLI/Claude Code 登录名。 （[#113816]（https://github.com/NousResearch/hermes-agent/pull/113816），[#115586]（https://github.com/NousResearch/hermes-agent/pull/115586））
- **密钥保留在主机上** — 配置的 `base_url` 在任何地方都受到尊重； Anthropic/OpenAI 密钥永远不会到达外部主机。 ([#121614](https://github.com/NousResearch/hermes-agent/pull/121614)、[#120299](https://github.com/NousResearch/hermes-agent/pull/120299) — @austinpickett、@686f6c61、@ahisblessed、@xuezhaolan、@leemove)
### 路由/回退/缓存
- **中断恢复** — `agent.auto_recovery_cycles`（默认 5）限制等待；后备返回到重新开放配额的 Codex 主版本。 ([#116353](https://github.com/NousResearch/hermes-agent/pull/116353)、[#130716](https://github.com/NousResearch/hermes-agent/pull/130716) — @kshitijk4poor、@xxxigm)
- **无意外计费** — 自动路由绝不会向您未选择的提供商收取费用； `provider_routing.models` 每个型号均引脚 OpenRouter。 （[#107366]（https://github.com/NousResearch/hermes-agent/pull/107366），[#104159]（https://github.com/NousResearch/hermes-agent/pull/104159））
- **提示缓存** — 选择加入 `cache_ttl: auto`（1 小时交互，500 万个子代理/cron）；大型会话确认了缓存破坏的 `/model`；压缩保留前缀。 ([#118337](https://github.com/NousResearch/hermes-agent/pull/118337)、[#95267](https://github.com/NousResearch/hermes-agent/pull/95267)、[#104455](https://github.com/NousResearch/hermes-agent/pull/104455) — @kshitijk4poor、@JoaoMarcos44)
### 推理
- **重播和努力** - 在每个阅读它的提供者上重播推理；每个选择器的努力，自定义层名称；人择快速模式遵循文档。 ([#136358](https://github.com/NousResearch/hermes-agent/pull/136358)、[#110346](https://github.com/NousResearch/hermes-agent/pull/110346)、[#115735](https://github.com/NousResearch/hermes-agent/pull/115735)、[#120517](https://github.com/NousResearch/hermes-agent/pull/120517) — @jquesnelle)

## 🏗️ 核心代理、会话和内存

### 代理循环和可靠性
- **停滞的回合恢复** — 看门狗（`agent.turn_liveness.timeout_s`，默认 600 秒）中断无进展的回合并释放其会话；重复的笔录修复现在会引发一个错误并发出通知。 ([#99758](https://github.com/NousResearch/hermes-agent/pull/99758)、[#99687](https://github.com/NousResearch/hermes-agent/pull/99687) — @kshitijk4poor、@Finn763、@HexLab98)
- **流失败较少并诚实报告** - 无文本死流重试，重复循环被切断，并且中断的轮次不会报告为已完成。 ([#113135](https://github.com/NousResearch/hermes-agent/pull/113135)、[#130551](https://github.com/NousResearch/hermes-agent/pull/130551)、[#112272](https://github.com/NousResearch/hermes-agent/pull/112272) — @kshitijk4poor)

### 压缩和上下文
- **压缩在实际令牌计数上触发** - 提供商报告的使用情况，而不是字节/4；受保护的尾部上限为 20%，因此小窗口型号紧凑。 ([#104555](https://github.com/NousResearch/hermes-agent/pull/104555)、[#117957](https://github.com/NousResearch/hermes-agent/pull/117957) — @686f6c61)
- **糟糕的摘要无法擦除上下文** - 拒绝和超载的摘要提供者不会影响记录，而未提交的压缩不会改变任何内容。 ([#118920](https://github.com/NousResearch/hermes-agent/pull/118920)、[#115906](https://github.com/NousResearch/hermes-agent/pull/115906)、[#136083](https://github.com/NousResearch/hermes-agent/pull/136083) — @kshitijk4poor、@fangliquanflq、@mnajafian-nv)
- **新旋钮** — 提供商范围内的 `compression.model_thresholds` 键和 `auxiliary.<task>.no_progress_timeout`。 ([#108061](https://github.com/NousResearch/hermes-agent/pull/108061)、[#115804](https://github.com/NousResearch/hermes-agent/pull/115804) — @chelsealong)

### 会话和 state.db
- **state.db 可靠性** — 锁定超时指定保留进程，繁忙的数据库不再杀死轮流，同级 PID 命名空间无法窃取租约。 ([#116967](https://github.com/NousResearch/hermes-agent/pull/116967)、[#134577](https://github.com/NousResearch/hermes-agent/pull/134577)、[#132161](https://github.com/NousResearch/hermes-agent/pull/132161) — @kshitijk4poor、@686f6c61)
- **state.db 停止增长** — 自动修剪默认开启（超过 90 天的会话结束）并关闭过时的 cron/kanban/subagent 会话； VACUUM 仅在 25% 可回收时运行。 ([#101316](https://github.com/NousResearch/hermes-agent/pull/101316)、[#100903](https://github.com/NousResearch/hermes-agent/pull/100903) — @stepanov1975)
- **修复命令** — `hermes sessions set-journal-mode delete|wal`、`repair-profiles`（交叉型材）和 `repair-prompts`。 ([#117684](https://github.com/NousResearch/hermes-agent/pull/117684)、[#115689](https://github.com/NousResearch/hermes-agent/pull/115689)、[#124200](https://github.com/NousResearch/hermes-agent/pull/124200) — @kshitijk4poor、@JoaoMarcos44)
- **更干净的会话列表** — 一次性运行远离选择器，`sessions.show_subagents` 列出标题子代理聊天，消息获得上下文引擎的稳定 ID。 ([#113826](https://github.com/NousResearch/hermes-agent/pull/113826)、[#122304](https://github.com/NousResearch/hermes-agent/pull/122304)、[#126687](https://github.com/NousResearch/hermes-agent/pull/126687) — @OutThisLife、@kshitijk4poor、@100yenadmin)

### 内存
- **内存提供者安全地离开核心** - OpenViking 和 Holographic 在更新或首次启动时移动到插件目录，数据完好无损，或者说为什么不。 ([#134350](https://github.com/NousResearch/hermes-agent/pull/134350)、[#136436](https://github.com/NousResearch/hermes-agent/pull/136436)、[#131269](https://github.com/NousResearch/hermes-agent/pull/131269))
- **内置内存写入土地** - 接受手动格式化的 MEMORY.md/USER.md，拒绝说明要修复的内容，在提供者看到它们之前将其清除。 ([#133038](https://github.com/NousResearch/hermes-agent/pull/133038)、[#134429](https://github.com/NousResearch/hermes-agent/pull/134429) — @aniruddhaadak80)

### 配置文件和配置
- **config.yaml 在糟糕的时刻幸存下来** - 损坏的文件回退到最后一个好的副本；读取错误无法擦除。 ([#109463](https://github.com/NousResearch/hermes-agent/pull/109463)、[#120343](https://github.com/NousResearch/hermes-agent/pull/120343) — @Shenrui-Ma、@huklaa)
- **更安全的 `hermes config`** — `get` 掩盖秘密（`--raw` 选择退出）； `set` 拒绝拼写错误路径并将环境样式名称存储在 `.env` 中。 ([#111341](https://github.com/NousResearch/hermes-agent/pull/111341)、[#112250](https://github.com/NousResearch/hermes-agent/pull/112250) — @webtecnica)
- **配置文件保持独立** - REST 路由作用于它们命名的配置文件，导出跳过 `.ssh`/`.aws`/`.gnupg`，而 `import-agent --sync` 保持导入最新。 ([#118275](https://github.com/NousResearch/hermes-agent/pull/118275)、[#132201](https://github.com/NousResearch/hermes-agent/pull/132201)、[#88855](https://github.com/NousResearch/hermes-agent/pull/88855) — @kshitijk4poor、@JerryLiu369)

### 语言 (i18n)
- **语言包** — 任何语言都可以作为插件 (`provides_locales`) 或每个配置文件的覆盖文件提供。 ([#126296](https://github.com/NousResearch/hermes-agent/pull/126296))

## 📱 消息平台（网关）

### 网关核心和多路复用
- **一个网关服务于每个配置文件** — `hermes gateway status` 解释了任何引导防护拒绝，`hermes gateway migrate --multiplex` 手动迁移，Webhook 平台为 `/p/<profile>/` 上的每个配置文件提供服务，`hermes -p X gateway stop|start` 停放一个配置文件，而 `gateway.standalone: true` 是临时选择退出。 ([#112854](https://github.com/NousResearch/hermes-agent/pull/112854)、[#108952](https://github.com/NousResearch/hermes-agent/pull/108952)、[#119774](https://github.com/NousResearch/hermes-agent/pull/119774)、[#119680](https://github.com/NousResearch/hermes-agent/pull/119680) — @victor-kyriazakos)
- **配置文件保持隔离** — 克隆会跳过机器人令牌，除非 `--clone-channels`； `profile_routes`可以通过发送者进行路由。 ([#109502](https://github.com/NousResearch/hermes-agent/pull/109502)、[#115642](https://github.com/NousResearch/hermes-agent/pull/115642) — @italodsfernandes)
- **会话和命令** — `/login` 从 DM 登录免费层用户；闲置/日常 `session_reset` 已退役，因此只有 `/new` 和 ZZPH100​​ZZ 重新开始； `/branch` 在 Discord、Telegram、Slack 和 Matrix 上打开同级线程（`--here` 保持旧行为）； `decline` 模式向未经授权的 DM 发送一条礼貌拒绝；选择加入的 `served_model` 页脚命名了已回答的型号。 ([#105261](https://github.com/NousResearch/hermes-agent/pull/105261)、[#126244](https://github.com/NousResearch/hermes-agent/pull/126244)、[#117450](https://github.com/NousResearch/hermes-agent/pull/117450)、[#88028](https://github.com/NousResearch/hermes-agent/pull/88028)、[#115925](https://github.com/NousResearch/hermes-agent/pull/115925) — @alt-glitch, @kshitijk4poor，@anpicasso）
- **文件和插件** — 来自 ssh/Modal/Daytona 沙箱的 `MEDIA:` 文件到达用户；插件可以通过 `post_gateway_admission` 声明消息。 ([#103600](https://github.com/NousResearch/hermes-agent/pull/103600)、[#133157](https://github.com/NousResearch/hermes-agent/pull/133157) — @kshitijk4poor、@tokou)

### 消息平台
- **Telegram** — 选择加入 `bots_require_mention` 可停止机器人回复循环，`extra.drop_pending_on_cold_boot: false` 保持离线时发送的消息，CJK 可以选择加入丰富的消息。 ([#106534](https://github.com/NousResearch/hermes-agent/pull/106534)、[#116134](https://github.com/NousResearch/hermes-agent/pull/116134)、[#111831](https://github.com/NousResearch/hermes-agent/pull/111831) — @kshitijk4poor、@kokhlo、@justcarlosm、@wang2)
- **Discord** — 设置验证令牌，链接消息内容意图并将您列入白名单；自由响应频道可以自动线程。 ([#132456](https://github.com/NousResearch/hermes-agent/pull/132456)、[#116168](https://github.com/NousResearch/hermes-agent/pull/116168) — @kshitijk4poor、@FunJim)
- **Slack** — 块套件 `/model` 拾取器；状态/头衔使用代理会话 API。 ([#103436](https://github.com/NousResearch/hermes-agent/pull/103436)、[#101477](https://github.com/NousResearch/hermes-agent/pull/101477) — @kshitijk4poor、@sohomsahaun)
- **WhatsApp** — 通过 `hermes send --mention` 原生提及，无 5 秒批处理延迟，每个配置文件上都有配对会话。 ([#115253](https://github.com/NousResearch/hermes-agent/pull/115253)、[#117104](https://github.com/NousResearch/hermes-agent/pull/117104)、[#132518](https://github.com/NousResearch/hermes-agent/pull/132518) — @kshitijk4poor、@unsupportedpastels、@Diaspar4u)
- **信号、矩阵、电子邮件、QQ 机器人** — 信号表呈现等宽字体； Element 中的 Matrix LaTeX 排版（实验室数学设置）；电子邮件拒绝欺骗性发件人，现在需要 `authserv_id` 密码（邮件会在设置前投递）； QQ机器人`send_message`投递媒体。 ([#106538](https://github.com/NousResearch/hermes-agent/pull/106538)、[#106515](https://github.com/NousResearch/hermes-agent/pull/106515)、[#132663](https://github.com/NousResearch/hermes-agent/pull/132663)、[#131927](https://github.com/NousResearch/hermes-agent/pull/131927) — @chelsealong、@romanovzky、@kshitijk4poor、@OutThisLife、@cadezhou)

### Webhooks 和 API 服务器
- **Webhooks** — 选择加入 `coalesce` 将事件突发折叠为一次运行，`cron_job` 在事件上路由触发 cron 作业，标准 Webhooks 签名验证，选择加入 `mirror_to_session` 提供回复上下文。 ([#92066](https://github.com/NousResearch/hermes-agent/pull/92066)、[#95262](https://github.com/NousResearch/hermes-agent/pull/95262)、[#104183](https://github.com/NousResearch/hermes-agent/pull/104183)、[#120825](https://github.com/NousResearch/hermes-agent/pull/120825) — @HwangJohn、@Potrock)
- **API 服务器** — 推理流到兼容 OpenAI 的 clients；流审批是有责任的。 ([#115797](https://github.com/NousResearch/hermes-agent/pull/115797)、[#121769](https://github.com/NousResearch/hermes-agent/pull/121769) — @kshitijk4poor、@liuhao1024)

### 中继和机器人聊天
- **机器人模式房间** — 编辑成员、回复 @handle、200 条消息历史记录、具有 `ALLOW_BOTS` 循环防护的发件人感知机器人 DM。 ([#113384](https://github.com/NousResearch/hermes-agent/pull/113384)、[#107520](https://github.com/NousResearch/hermes-agent/pull/107520) — @erosika、@69k4xmdfm2-blip)
- **中继** — 连接器检查 `send_message` 目标； 0.10.0 标签上的 NeMo 中继跟踪跨越工作目录。 ([#99220](https://github.com/NousResearch/hermes-agent/pull/99220)、[#135787](https://github.com/NousResearch/hermes-agent/pull/135787)、[#108345](https://github.com/NousResearch/hermes-agent/pull/108345) — @benbarclay、@mnajafian-nv、@afourniernv、@KoNit-K)

## 🖥️ 桌面应用程序

### 工作空间和布局
- **简单/高级模式** — 简单隐藏开发人员窗格；高级保持默认。 ([#118587](https://github.com/NousResearch/hermes-agent/pull/118587) — @OutThisLife)
- **窗口和选项卡** — 标题栏选项卡；配置文件在自己的窗口中打开或作为启动默认值打开。 ([#107099](https://github.com/NousResearch/hermes-agent/pull/107099)、[#113176](https://github.com/NousResearch/hermes-agent/pull/113176) — @OutThisLife)
- **侧边栏** — 按网关/配置文件分组，重用云实例，将新会话拖到窗格上。 ([#105813](https://github.com/NousResearch/hermes-agent/pull/105813)、[#70571](https://github.com/NousResearch/hermes-agent/pull/70571) — @abundantbeing)
- **导入会话** — 在 Hermes 中继续另一个编码代理的记录。 ([#104229](https://github.com/NousResearch/hermes-agent/pull/104229) — @Adolanium)
- **目标/循环/心跳卡** — 作曲家上方的实时暂停/恢复/停止。 ([#104246](https://github.com/NousResearch/hermes-agent/pull/104246) — @jerrygooch)
- **启动选项** — 开始新的聊天；选择加入托盘最小化并点击 Cmd+Option / Ctrl+Alt HUD。 ([#101304](https://github.com/NousResearch/hermes-agent/pull/101304)、[#118441](https://github.com/NousResearch/hermes-agent/pull/118441)、[#118446](https://github.com/NousResearch/hermes-agent/pull/118446) — @jinglun010-cpu、@OutThisLife)
### 聊天和作曲家
- **选择器和输入** — 推理努力药丸；通过 slug 添加模型； 3,000 多个字符粘贴以 .txt 形式附加；选择加入 macOS 窗口屏幕截图快捷方式。 ([#109907](https://github.com/NousResearch/hermes-agent/pull/109907)、[#120693](https://github.com/NousResearch/hermes-agent/pull/120693)、[#108901](https://github.com/NousResearch/hermes-agent/pull/108901)、[#113349](https://github.com/NousResearch/hermes-agent/pull/113349) — @OutThisLife)
- **可操作的错误** — 卡片指出问题并修复；使用限制卡显示重置时间并可以安排重试。 （[#111601]（https://github.com/NousResearch/hermes-agent/pull/111601），[#116288]（https://github.com/NousResearch/hermes-agent/pull/116288））
- **成绩单** — 稳定的审批队列；可隐藏的代码差异。 ([#107073](https://github.com/NousResearch/hermes-agent/pull/107073)、[#116569](https://github.com/NousResearch/hermes-agent/pull/116569) — @OutThisLife)
- **浏览器评论模式** - 用注释固定页面元素；作物、选择器和样式交给作曲家。 ([#100083](https://github.com/NousResearch/hermes-agent/pull/100083) — @Adolanium)
### 设置和插件
- **设置** — 可从 ⌘K 搜索的有序子页面；聊天字体（例如 OpenDyslexic）；俄语、法语、德语、西班牙语。 ([#117127](https://github.com/NousResearch/hermes-agent/pull/117127)、[#111226](https://github.com/NousResearch/hermes-agent/pull/111226)、[#100429](https://github.com/NousResearch/hermes-agent/pull/100429) — @OutThisLife、@warment、@FASTCHIP)
- **模型** — 每个任务的辅助推理工作；自定义端点选择 API 模式。 ([#110435](https://github.com/NousResearch/hermes-agent/pull/110435)、[#115851](https://github.com/NousResearch/hermes-agent/pull/115851) — @higgs1729、@SacrEllfarch)
- **插件** — 每个插件一行；作曲家和设置 APIs。 ([#107314](https://github.com/NousResearch/hermes-agent/pull/107314)、[#120907](https://github.com/NousResearch/hermes-agent/pull/120907) — @OutThisLife、@Heybinshao)
### 机器人模式
- **机器人屏幕** — Linux 网关机器人会传输桌面，您可以接管该桌面进行登录或 2FA。默认关闭；需要主机包。 ([#108914](https://github.com/NousResearch/hermes-agent/pull/108914))
- **群聊** — 重新排序房间；压缩成员的隐藏历史记录。 （[#105909]（https://github.com/NousResearch/hermes-agent/pull/105909），[#117015]（https://github.com/NousResearch/hermes-agent/pull/117015））
### 性能和平台
- **一个后端** — 桌面连接到正在运行的后端，为每个配置文件提供服务。 ([#118246](https://github.com/NousResearch/hermes-agent/pull/118246))
- **平台** — 更快的 Windows 启动； Linux 无需 sudo 即可在 WSLg/Wayland 下运行。 ([#111002](https://github.com/NousResearch/hermes-agent/pull/111002)、[#100136](https://github.com/NousResearch/hermes-agent/pull/100136)、[#113247](https://github.com/NousResearch/hermes-agent/pull/113247) — @codeJRV、@kvnloo、@austinpickett)

### 模型、聊天和工作区
- **模型选择器知道你的计划** - 明星最爱；提供商行显示速率限制何时解除以及“剩余 17% · 下午 3:00 重置”筹码（在您点击之前）。还可以选择按模型定价，包括缓存读取速率、超快速度层和步骤推理工作的关键。 ([#126535](https://github.com/NousResearch/hermes-agent/pull/126535)、[#133392](https://github.com/NousResearch/hermes-agent/pull/133392)、[#133408](https://github.com/NousResearch/hermes-agent/pull/133408)、[#126651](https://github.com/NousResearch/hermes-agent/pull/126651)、[#132445](https://github.com/NousResearch/hermes-agent/pull/132445)、 [#125800](https://github.com/NousResearch/hermes-agent/pull/125800) — @OutThisLife、@kshitijk4poor、@anotherchu)
- **更安全的倒带和诚实的停止** — 在存档多于一个后续回合之前重新生成或编辑询问；停止显示会话保存的部分回复。 ([#133748](https://github.com/NousResearch/hermes-agent/pull/133748)、[#121597](https://github.com/NousResearch/hermes-agent/pull/121597) — @kshitijk4poor)
- **阅读和布局** — 聊天文本大小与 UI 比例分开；主题排版；灯箱缩放/平移；上下文计量中的压缩计数；上下文感知右-click。 ([#128975](https://github.com/NousResearch/hermes-agent/pull/128975)、[#125904](https://github.com/NousResearch/hermes-agent/pull/125904)、[#127247](https://github.com/NousResearch/hermes-agent/pull/127247)、[#126653](https://github.com/NousResearch/hermes-agent/pull/126653)、[#131215](https://github.com/NousResearch/hermes-agent/pull/131215) — @OutThisLife、@unsupportedpastels、 @dskwe）
- **工作区和会话** — 会话遵循代理的 git 工作树和分支；审查窗格范围有效。浏览 SSH 工作区、将会话拖到项目上、搜索日志、查看和清除看板块。 ([#128428](https://github.com/NousResearch/hermes-agent/pull/128428)、[#127200](https://github.com/NousResearch/hermes-agent/pull/127200)、[#99538](https://github.com/NousResearch/hermes-agent/pull/99538)、[#126543](https://github.com/NousResearch/hermes-agent/pull/126543)、[#126658](https://github.com/NousResearch/hermes-agent/pull/126658)、 [#125647](https://github.com/NousResearch/hermes-agent/pull/125647) — @ethernet8023、@OutThisLife、@nateEc)
- **预览和语音** — 预览打开公共网页； YouTube 通过本地播放器播放。非流式 TTS 从第一句话开始说话；安静音频 STT 幻觉被过滤。 ([#130393](https://github.com/NousResearch/hermes-agent/pull/130393)、[#130975](https://github.com/NousResearch/hermes-agent/pull/130975)、[#121685](https://github.com/NousResearch/hermes-agent/pull/121685)、[#127275](https://github.com/NousResearch/hermes-agent/pull/127275) — @xxxigm、@OutThisLife、@kshitijk4poor、@embwl0x)

### 插件、更新和应用程序
- **设置 ▸ 插件和更大的 SDK** — 每个插件都有一个设置页面（来自其配置模式的代理插件）。桌面插件可以通过 ID 运行应用程序操作、通过宠物说话、添加外观控件和重新排序侧边栏导航。 ([#133182](https://github.com/NousResearch/hermes-agent/pull/133182)、[#136417](https://github.com/NousResearch/hermes-agent/pull/136417)、[#135504](https://github.com/NousResearch/hermes-agent/pull/135504)、[#120912](https://github.com/NousResearch/hermes-agent/pull/120912)、[#120922](https://github.com/NousResearch/hermes-agent/pull/120922) — @tobenwarrior)
- **您可以引导的更新** — 源安装在“设置”>“关于”中选择“稳定”或“每次提交”；更新对话框命名频道。该应用程序会在早于其后端时发出警告。 ([#135949](https://github.com/NousResearch/hermes-agent/pull/135949)、[#136313](https://github.com/NousResearch/hermes-agent/pull/136313)、[#122911](https://github.com/NousResearch/hermes-agent/pull/122911) — @OutThisLife)
- **应用程序优化** —“工作时”保持唤醒模式、macOS 26 分层图标、更清晰的 MSIX 图标、选择加入共享指标同意条。 ([#128984](https://github.com/NousResearch/hermes-agent/pull/128984)、[#122976](https://github.com/NousResearch/hermes-agent/pull/122976)、[#131669](https://github.com/NousResearch/hermes-agent/pull/131669)、[#125074](https://github.com/NousResearch/hermes-agent/pull/125074) — @kshitijk4poor、@jonpol01、@ethernet8023)

## ⌨️ CLI、TUI 和仪表板

### CLI
- **Vim 键、git 分支和响铃** — `display.vim_mode`、`git_branch` 状态字段、`display.bell_on_prompt`（响铃加 OSC 9 通知）；默认情况下全部关闭。 ([#106412](https://github.com/NousResearch/hermes-agent/pull/106412)、[#106434](https://github.com/NousResearch/hermes-agent/pull/106434)、[#101284](https://github.com/NousResearch/hermes-agent/pull/101284)、[#101320](https://github.com/NousResearch/hermes-agent/pull/101320) — @saforem2、@TurgutKural、@glitchbunny0、@harshmoney123)
- **更友好的按键** — Ctrl+T 打开子代理监视器；中间的多行粘贴是一条消息。 （[#105879]（https://github.com/NousResearch/hermes-agent/pull/105879），[#109146]（https://github.com/NousResearch/hermes-agent/pull/109146））
- **可编写脚本的命令** — `hermes usage --json`（配额，无会话）； `hermes worktree --json/--older-than`； `kanban edit --title/--body/--priority`； `-t` 选择 MCP 服务器启动。 ([#115899](https://github.com/NousResearch/hermes-agent/pull/115899)、[#95257](https://github.com/NousResearch/hermes-agent/pull/95257)、[#117632](https://github.com/NousResearch/hermes-agent/pull/117632)、[#101634](https://github.com/NousResearch/hermes-agent/pull/101634) — @himanusia、@kshitijk4poor、@SelfParody)
- **此外** — `hermes -z` 在失败时退出非零； `-m custom:<name>:<model>` 到达该提供商；页脚不再折叠为“窗口太小”。 ([#113234](https://github.com/NousResearch/hermes-agent/pull/113234)、[#115293](https://github.com/NousResearch/hermes-agent/pull/115293)、[#117439](https://github.com/NousResearch/hermes-agent/pull/117439) — @kshitijk4poor)
### 途易
- **本机终端模式** — `--native` 或 `display.tui_native`（选择加入）。 ([#121035](https://github.com/NousResearch/hermes-agent/pull/121035) — @OutThisLife)
- **运行转弯控制** — 双 Esc 中断、一键通切断语音、实时底座（CLI 也是如此）显示 `/goal` 和排队提示。 ([#125803](https://github.com/NousResearch/hermes-agent/pull/125803) — @OutThisLife)
- **打字修复** — 扩展键终端上的 Shift+字母、macOS Ctrl+D、Wayland 图像粘贴、稳定的空闲重画。 ([#90674](https://github.com/NousResearch/hermes-agent/pull/90674)、[#116851](https://github.com/NousResearch/hermes-agent/pull/116851)、[#116824](https://github.com/NousResearch/hermes-agent/pull/116824)、[#87907](https://github.com/NousResearch/hermes-agent/pull/87907) — @francip、@fangliquanflq)
- **重新连接和附件** — 附加的 TUI 重新加入其会话； `attachments.storage: workspace` 暂存沙盒代理可以读取的文件。 ([#112227](https://github.com/NousResearch/hermes-agent/pull/112227)、[#125816](https://github.com/NousResearch/hermes-agent/pull/125816) — @OutThisLife)
### 仪表板
- **在更多设备上聊天** — 屏幕阅读器、iPad 触摸滚动、无双移动键盘字符；第二个选项卡有自己的终端。 ([#133960](https://github.com/NousResearch/hermes-agent/pull/133960)、[#134181](https://github.com/NousResearch/hermes-agent/pull/134181)、[#116978](https://github.com/NousResearch/hermes-agent/pull/116978)、[#117061](https://github.com/NousResearch/hermes-agent/pull/117061) — @austinpickett)
- **错误、会话、分析** — 错误是一个句子和修复按钮，而不是原始的 JSON；标题搜索、实时切换器、每个 API 呼叫分析。 ([#111602](https://github.com/NousResearch/hermes-agent/pull/111602)、[#133981](https://github.com/NousResearch/hermes-agent/pull/133981)、[#134100](https://github.com/NousResearch/hermes-agent/pull/134100)、[#133991](https://github.com/NousResearch/hermes-agent/pull/133991) — @austinpickett)
- **自托管** — 反向代理子路径、OAuth 旁边的密码登录、永不过期的远程会话。 ([#133903](https://github.com/NousResearch/hermes-agent/pull/133903)、[#107018](https://github.com/NousResearch/hermes-agent/pull/107018)、[#110061](https://github.com/NousResearch/hermes-agent/pull/110061) — @austinpickett、@Doud-FR)
### 斜线命令
- **每个选择器的推理努力** - `hermes model`、aux 型号和 `/model` 增加了一个努力步骤； `/model X --reasoning high` 也可以工作。 ([#110346](https://github.com/NousResearch/hermes-agent/pull/110346))
- **可编辑 `/queue`** — 列出、编辑、移动或删除提示； `/s` = `/steer`。 ([#95999](https://github.com/NousResearch/hermes-agent/pull/95999)、[#125803](https://github.com/NousResearch/hermes-agent/pull/125803) — @abhinav11082001-stack、@OutThisLife)
- **`/context` 每个文件** — 显示每个指令文件已加载、截断或隐藏。 ([#91272](https://github.com/NousResearch/hermes-agent/pull/91272))

## 🔧 工具、MCP 和浏览器

### 工具和工具搜索
- **稀有工具按需加载** - Computer_use、session_search、image_generate、cron 和桌面 GUI 工具默认位于 `tool_search` 后面（桌面模式 13,367→6,883 个令牌；`defer: []` 选择退出）； `todo`/`cronjob`/`process` 变为 `todo_list`/`cronjob_manage`/`process_manage`（保留别名）。 ([#97979](https://github.com/NousResearch/hermes-agent/pull/97979) — @alt-glitch)
- **提示缓存保存所有会话** — 跨 TUI、`-q --resume` 和网关跃点的每个会话冻结工具列表。 ([#120289](https://github.com/NousResearch/hermes-agent/pull/120289))
- **循环护栏** — 无人值守网关/cron 会话硬停止工具循环； 5 次相同的重播会停止任何工具。 ([#100967](https://github.com/NousResearch/hermes-agent/pull/100967) — @plcunha, @benbenlijie)
- **更智能的文件和 Web 工具** — `read_file` 显示 SQLite 模式并标记合并冲突，`search_files` 直接运行 ripgrep（速度快 5-6 倍），无密钥 `web_search` 在免费供应商之间进行故障转移。 ([#115974](https://github.com/NousResearch/hermes-agent/pull/115974)、[#104502](https://github.com/NousResearch/hermes-agent/pull/104502)、[#134048](https://github.com/NousResearch/hermes-agent/pull/134048) — @kshitijk4poor、@alt-glitch)
### MCP
- **设备代码登录** — `hermes mcp login <server> --flow device` 适用于无头终端。 ([#104891](https://github.com/NousResearch/hermes-agent/pull/104891) — @wjorgensen)
- **更坚固的 OAuth** — 刷新令牌永远不会被删除、重复使用或发送给其他发行者； RFC 9207、Google 托管和 WAF 前端服务器登录；网关从不打开浏览器选项卡。 ([#106185](https://github.com/NousResearch/hermes-agent/pull/106185)、[#111186](https://github.com/NousResearch/hermes-agent/pull/111186) — @kshitijk4poor、@anhtahaylove)
- **更多服务器连接** - 仅 SSE 服务器回退，严格服务器连接（`sampling.tools` 选择加入），并且目录添加了官方 n8n 和 Asana V2。 ([#106432](https://github.com/NousResearch/hermes-agent/pull/106432)、[#131891](https://github.com/NousResearch/hermes-agent/pull/131891)、[#116048](https://github.com/NousResearch/hermes-agent/pull/116048) — @aieng-abdullah、@OutThisLife、@nikkoxgonzales、@alt-glitch)
- **启动和结果** — 启动一次连接 ≤ `mcp.discovery_concurrency` (4) 个服务器；视觉模型看到 MCP 图像；死掉的 stdio 服务器会重生而不重播呼叫。 ([#117956](https://github.com/NousResearch/hermes-agent/pull/117956)、[#133815](https://github.com/NousResearch/hermes-agent/pull/133815)、[#106546](https://github.com/NousResearch/hermes-agent/pull/106546) — @Halldrix、@sarahwu185、@100yenadmin)
### 浏览器和计算机使用
- **保险库和沙盒屏幕** - 密码管理器登录还会在您确认后填写卡片和地址； `hermes-sandbox:desktop` 是新的默认映像（保留现有沙箱）。 （[#106480]（https://github.com/NousResearch/hermes-agent/pull/106480），[#121169]（https://github.com/NousResearch/hermes-agent/pull/121169））
- **`browser_exec` 开箱即用** — 驱动捆绑的 Chromium（也是云回退）并通过 sidecar 打开本地主机。 ([#102986](https://github.com/NousResearch/hermes-agent/pull/102986) — @shadus)
- 另外：插件的 CDP 接缝；未更改的 `computer_use` 屏幕不重新发送。 ([#133552](https://github.com/NousResearch/hermes-agent/pull/133552)、[#98954](https://github.com/NousResearch/hermes-agent/pull/98954) — @web3blind)
### 终端和代码执行
- **长命令停止阻塞** - 超过 600 秒的前台超时变成后台作业，`heartbeat=N` 发送进度，实时工作坞会列出它们。 ([#103529](https://github.com/NousResearch/hermes-agent/pull/103529))
- **沙箱** — 结果标记了重新创建的环境； SSH 路径远程解析。 ([#107093](https://github.com/NousResearch/hermes-agent/pull/107093)、[#122657](https://github.com/NousResearch/hermes-agent/pull/122657) — @kshitijk4poor、@xxxigm)
- **LSP** — 通过 `lsp.servers` 和 `lsp.package_manager` 的自定义服务器；从不运行克隆存储库自己的解释器或 SDK。 ([#115714](https://github.com/NousResearch/hermes-agent/pull/115714)、[#126239](https://github.com/NousResearch/hermes-agent/pull/126239) — @ZHCHJ888、@kshitijk4poor、@jonpol01)
### 媒体（图像/视频/语音）
- **新型号** — GPT 图像 2.5、Kling 图像 v3；视频：Kling 3.0、Kling O3、LTX 2.5、Wan 3.0、MiniMax H3 Max Turbo、Gemini Omni Flash 1.1。 ([#105988](https://github.com/NousResearch/hermes-agent/pull/105988))
- **实时听写** — 选择加入 `stt.streaming` 在您说话时显示单词（CLI、TUI、桌面）；长录音可在所有云提供商上转录。 ([#133853](https://github.com/NousResearch/hermes-agent/pull/133853)、[#133825](https://github.com/NousResearch/hermes-agent/pull/133825) — @TimeLord2010、@Julientalbot、@kokhlo)
- **语音对话** — 选择加入 `voice.voice_chat_mode: gpt-live` 提供桌面全双工语音； `auxiliary.voice_chat` 在更快的型号上运行语音转弯； TTS 开始得更快。 ([#108137](https://github.com/NousResearch/hermes-agent/pull/108137)、[#133986](https://github.com/NousResearch/hermes-agent/pull/133986)、[#115846](https://github.com/NousResearch/hermes-agent/pull/115846) — @liuhao1024)

## 🧩 插件、技能和插件目录

### 插件目录
- **插件和作者页面** — [/docs/plugins](https://hermes-agent.nousresearch.com/docs/plugins) 在内存、桌面、平台、Web、工具、语音、自动化和模型下放置插件。页面显示描述、披露标注、屏幕截图、固定提交的自述文件、在 Hermes Desktop 中打开按钮和可复制的安装命令。 ([#111415](https://github.com/NousResearch/hermes-agent/pull/111415)、[#111547](https://github.com/NousResearch/hermes-agent/pull/111547)、[#117808](https://github.com/NousResearch/hermes-agent/pull/117808))
- **更易于阅读的卡片** — 版本标签位于网站、CLI 和桌面上固定提交 (`1.2.0 @ ad3f352b`) 的旁边；卡片获得了横幅图像、统一的尺寸和灯光模式。 ([#113381](https://github.com/NousResearch/hermes-agent/pull/113381)、[#125065](https://github.com/NousResearch/hermes-agent/pull/125065)、[#124001](https://github.com/NousResearch/hermes-agent/pull/124001) — @kshitijk4poor、@xxxigm)
- **已知问题警告** - 列表可以声明已知问题，`hermes plugins install` 和仪表板会在安装时显示这些问题。 ([#124058](https://github.com/NousResearch/hermes-agent/pull/124058) — @happy5318)
- **列出规则** — 桌面插件必须保留在 SDK 插槽中，修补内部的 11 个插件已被除名（已安装的副本继续工作），并且提交指南与 CI 强制执行的内容相匹配。 ([#115579](https://github.com/NousResearch/hermes-agent/pull/115579)、[#130860](https://github.com/NousResearch/hermes-agent/pull/130860)、[#131048](https://github.com/NousResearch/hermes-agent/pull/131048))

### 目录中的新内容
本周期所有 600 个列表均为新列表。
- **移出核心** - 除了五个内存提供商之外，Holographic 还增加了一个新的社区维护者； Home Assistant、Spotify、Langfuse 和 TouchDesigner 现已成为官方目录插件。 ([#114732](https://github.com/NousResearch/hermes-agent/pull/114732)、[#136196](https://github.com/NousResearch/hermes-agent/pull/136196)、[#132476](https://github.com/NousResearch/hermes-agent/pull/132476)、[#137130](https://github.com/NousResearch/hermes-agent/pull/137130) — @itpartypattaya)
- **官方** — Blender Lab、Snyk、NVIDIA App 和 NVIDIA Broadcast（仅限 Windows）、Telegram Business、Memory Wiki。 ([#119365](https://github.com/NousResearch/hermes-agent/pull/119365)、[#109084](https://github.com/NousResearch/hermes-agent/pull/109084) — @alt-glitch)
- **内存 (65)** — Cognee、LanceDB、ReMe、Memoria、HydraDB、Mnemosyne、YantrikDB、BetterDB。 **网络和搜索 (34)** — Apify、Parallel、Linkup、SerpApi、You.com、TinyFish、Oxylabs。 **模型提供商 (48)** — JetBrains Junie、Telnyx、NetMind、Groq、Chutes、Kiro、Opper、AIHubMix。 **平台 (32)** — Inline、Microsoft 365、Rocket.Chat、VK、Zalo、iMessage、Sendblue。 **语音 (18)** — Speechify、Deepgram、Fish Audio、Gemini Live。 **桌面窗格 (140)** — Telegram Client、配额、轨道、看板甘特图、监控仪表板。 **工具 (180)** — GitHub 应用程序、Coder、Devin、NetBox、金融数据集、MetaMask、Tempo MPP、DaVinci Resolve、vidIQ、Govee、SwitchBot、日本电子政务数据。 （[#112292](https://github.com/NousResearch/hermes-agent/pull/112292)、[#118231](https://github.com/NousResearch/hermes-agent/pull/118231)、[#118512](https://github.com/NousResearch/hermes-agent/pull/118512)、[#114202](https://github.com/NousResearch/hermes-agent/pull/114202) — @siillee、@georgeatparallel、@AlexanderPrendota 等等）

### 插件系统
- **模型提供程序作为插件** - 树外提供程序显示在模型选择器中，通过 `hermes auth`（内置 OAuth PKCE）登录并刷新令牌。 ([#116552](https://github.com/NousResearch/hermes-agent/pull/116552) — @ericmaddox, @ZenMux-1)
- **每个配置文件插件主机（选择加入）** — `plugins.isolation: host` 在每个配置文件进程中运行第三方插件，仅使用该配置文件的秘密。 ([#126911](https://github.com/NousResearch/hermes-agent/pull/126911))
- **新插件 APIs** — 用于中断转弯、辅助 LLM 调用和人工输入提示的挂钩；插件可以启动网关会话、添加自动化蓝图和辅助模型插槽、发送计算机使用的驱动程序并发出 Codex 签名的请求。 ([#118909](https://github.com/NousResearch/hermes-agent/pull/118909) — @zrmnelson、@JonZal、@hsy5571615、@webtecnica)
- **桌面插件 SDK** — `config_schema` 设置在功能 → 插件中呈现为表单；插件获得技能/工具集/配置文件桥和模型药丸/菜单插槽。 ([#118917](https://github.com/NousResearch/hermes-agent/pull/118917) — @LeonSGP43、@tobenwarrior)
- **安装、固定、更新** — 使用您的 git 凭据安装私人存储库，桌面将插件固定到提交，更新保留用户数据，并且插件技能以 `/plugin:skill` 运行。 ([#106981](https://github.com/NousResearch/hermes-agent/pull/106981)、[#107321](https://github.com/NousResearch/hermes-agent/pull/107321)、[#133175](https://github.com/NousResearch/hermes-agent/pull/133175) — @JoaoMarcos44、@pnpwin、@ctaylor86)
- **更坚固的加载程序和扫描仪** - `plugins.load_timeout_seconds`（10 秒）后会跳过挂起的导入，防护挂钩无法关闭，散文、固定装置和正则表达式文字不再阻止安装；插件依赖遵循插件的安全策略。 （[#118915]（https://github.com/NousResearch/hermes-agent/pull/118915），[#115954]（https://github.com/NousResearch/hermes-agent/pull/115954））
- **移出核心** — Spotify 和 Langfuse 成为官方插件（自动迁移）； tirith 已被删除，其密钥检查已内置。（[#135389](https://github.com/NousResearch/hermes-agent/pull/135389)、[#133832](https://github.com/NousResearch/hermes-agent/pull/133832)）
- **新插件** — reMarkable、hermes-pii、hermes-stt-enhance（目录）；元缪斯图像（捆绑）。 ([#117191](https://github.com/NousResearch/hermes-agent/pull/117191)、[#132154](https://github.com/NousResearch/hermes-agent/pull/132154)、[#134418](https://github.com/NousResearch/hermes-agent/pull/134418)、[#100959](https://github.com/NousResearch/hermes-agent/pull/100959) — @cygnostik、@lukefx、@dmmeteo、@mreso)

### 技能
- **新的可选技能** - pr-lens（动画公关图）、系统图集、解剖学（等距解释器）、单色（墨水打印图像）、梦想循环（3D概念艺术循环）、scrollcraft（滚动页面）、作者（电影网络）、ip-as-logo（吉祥物）、ai-presenter-video、live-dashboard（自动更新页面）、动态工作流程（扇出活动）、reddit 阅读、RSS 提要。 （[#109306]（https://github.com/NousResearch/hermes-agent/pull/109306），[#103821]（https://github.com/NousResearch/hermes-agent/pull/103821））
- **技能中心** — 索引再次建立，包含约 480 项科学技能；搜索还可以找到未索引的技能。 ([#109178](https://github.com/NousResearch/hermes-agent/pull/109178))
- **`skills.auto_load` 和 `skills.create_dir`** — 将技能固定到每个会话中；选择代理制作的技能的去向。 ([#92048](https://github.com/NousResearch/hermes-agent/pull/92048)、[#100377](https://github.com/NousResearch/hermes-agent/pull/100377) — @ctaylor86、@ArcherQAQ、@giwaov、@Frosti7)
- **更好的自我完善** - 学习和纠正融入到任务技能中；背景审查可以提高任何技能；在聊天中添加的技能到达下一条消息。 ([#102107](https://github.com/NousResearch/hermes-agent/pull/102107))
- **更轻的策展人** — 不再阻止 CLI 提示；一次安装从 1.9 GB 下降到约 200 MB； 30 天未使用的技能存档（原为 90 天）。 ([#115862](https://github.com/NousResearch/hermes-agent/pull/115862))
- **Skills Guard** — 421 个技能样本中被阻止的安装从 83 个下降到 68 个；内联 shell 仅限于非社区技能。 ([#135595](https://github.com/NousResearch/hermes-agent/pull/135595) — @Awshesh12、@liuhao1024、@FlashWayne)

## ⏰ Cron、看板和委托

### 克朗
- **作业遵循您的主模型** - 取消固定的作业使用触发时配置的模型； `pinned` 锁一。 ([#113679](https://github.com/NousResearch/hermes-agent/pull/113679))
- **自我修复计划** - 从未到达模型的火灾（例如唤醒后）会在 5 分钟、15 分钟和 30 分钟后重新运行，提供程序“重试”窗口会安静地停放作业，并且在重新启动期间错过的插槽会触发一次。 ([#108731](https://github.com/NousResearch/hermes-agent/pull/108731)、[#115843](https://github.com/NousResearch/hermes-agent/pull/115843))
- **更安静的警报** — 每个事件一个警报，加上每个 `cron.failure_repeat_alert_hours` 一次提醒； `failure_deliver` 重新路由或静音故障通知；代理可能会因 `[CRON_FAILURE]` 而导致运行失败。 ([#114807](https://github.com/NousResearch/hermes-agent/pull/114807)、[#101373](https://github.com/NousResearch/hermes-agent/pull/101373)、[#113155](https://github.com/NousResearch/hermes-agent/pull/113155)) — @victor-kyriazakos
- **新工作选项** — `--paused` 创建一个徒手工作； `--interpreter` 在您自己的 venv 上运行脚本。 ([#104984](https://github.com/NousResearch/hermes-agent/pull/104984)、[#125392](https://github.com/NousResearch/hermes-agent/pull/125392)) — @M1racleShih
- **配置文件和交付** — 多路复用网关使用该配置文件的环境和机密来运行每个配置文件的作业；交付需要确凿的证据，输出到处都经过秘密编辑，并且延迟或卫星运行被标记。 ([#118027](https://github.com/NousResearch/hermes-agent/pull/118027)、[#100908](https://github.com/NousResearch/hermes-agent/pull/100908)、[#112830](https://github.com/NousResearch/hermes-agent/pull/112830)) — @yoniebans

### 看板
- **工作人员摆脱了提供商的麻烦** - 失败的回合在上下文中重试；速率限制或 5xx 重新排队而不是刻录重试。 ([#112318](https://github.com/NousResearch/hermes-agent/pull/112318)、[#112500](https://github.com/NousResearch/hermes-agent/pull/112500)) — @EvgenyMettsler、@dmelkk-secondbrain
- **自我解释的板** — 卡片显示工人在失败时的最后输出；调度说明为什么持有该卡。 ([#112618](https://github.com/NousResearch/hermes-agent/pull/112618)) — @chelsealong
- **工作流程和工具** — 一个工作流程定义驱动列；工人获得`kanban_schedule`； `kanban create --body-file`；桌面跟随网关交换机。 ([#134340](https://github.com/NousResearch/hermes-agent/pull/134340)、[#130455](https://github.com/NousResearch/hermes-agent/pull/130455)、[#116791](https://github.com/NousResearch/hermes-agent/pull/116791)、[#119054](https://github.com/NousResearch/hermes-agent/pull/119054)) — @benbarclay、@unsupportedpastels、@fangliquanflq

### 委派和多代理
- **实时子代理、图像和/停止** *（参见亮点）*。 ([#105593](https://github.com/NousResearch/hermes-agent/pull/105593))
- **扇出损失更少** - 失败的子项立即浮出水面，所有者崩溃可以保留已完成的工作，子项可以将流程交给父项，并且每个任务的完成情况都是可选择的。 ([#103549](https://github.com/NousResearch/hermes-agent/pull/103549)、[#116707](https://github.com/NousResearch/hermes-agent/pull/116707)、[#105125](https://github.com/NousResearch/hermes-agent/pull/105125))
- **儿童路由** — `delegation.fallback_providers` 为孩子们提供了自己的链条； `child_timeout_seconds` 测量不活动状态。 ([#105347](https://github.com/NousResearch/hermes-agent/pull/105347)、[#117606](https://github.com/NousResearch/hermes-agent/pull/117606)) — @ayushnangia
- **/goal** — 与 CLI、桌面和消息传递一致；法官等待分代理人； `/goal pause for now` 不再覆盖目标；门在会话工作区中运行。 ([#104833](https://github.com/NousResearch/hermes-agent/pull/104833)、[#132251](https://github.com/NousResearch/hermes-agent/pull/132251)、[#125453](https://github.com/NousResearch/hermes-agent/pull/125453)) — @jayzhou2309

## 🔒 安全、隐私和代码库

### 安全与隐私
- **v0.21.6 安全修复** — 仪表板登录强化（欺骗 `X-Forwarded-For`、大小上限、仅环回登录代码）；自动 git 会跳过 repo 过滤程序；电子邮件白名单可防止显示名称欺骗。 ([#133367](https://github.com/NousResearch/hermes-agent/pull/133367)、[#130685](https://github.com/NousResearch/hermes-agent/pull/130685)、[#130661](https://github.com/NousResearch/hermes-agent/pull/130661)、[#125212](https://github.com/NousResearch/hermes-agent/pull/125212)) — @unsupportedpastels、@kshitijk4poor、@Froraut、@jonpol01、 @keeltrace
- **秘密保持不变** - 子进程不会继承适配器/仪表板秘密；远程 `execute_code` 将其令牌保留在 argv 之外；配置文件导出跳过凭证存储；刷新/回退时密钥永远不会到达外部主机。 ([#125755](https://github.com/NousResearch/hermes-agent/pull/125755)、[#124262](https://github.com/NousResearch/hermes-agent/pull/124262)、[#130525](https://github.com/NousResearch/hermes-agent/pull/130525)、[#120299](https://github.com/NousResearch/hermes-agent/pull/120299)) — @kshitijk4poor、@jonpol01、@beardthelion、@leemove
- **更清晰的修订** — 在截断之前调试共享修订；文件读取和终端输出掩码 `.env`/config 秘密； `hermes config get` 口罩，除非 `--raw`；内存切换被清除；普通的 `token=` 线条保持可见。 ([#132270](https://github.com/NousResearch/hermes-agent/pull/132270)、[#111422](https://github.com/NousResearch/hermes-agent/pull/111422)、[#111341](https://github.com/NousResearch/hermes-agent/pull/111341)、[#134429](https://github.com/NousResearch/hermes-agent/pull/134429)、[#100564](https://github.com/NousResearch/hermes-agent/pull/100564)) — @kshitijk4poor、@Froraut、 @shehjaddev、@webtecnica、@aniruddhaadak80、@fangliquanflq
- **所有者专用的静态文件** — 凭据、`state.db`、快照、浏览器配置文件、媒体缓存、任何 umask。 ([#109509](https://github.com/NousResearch/hermes-agent/pull/109509)、[#127229](https://github.com/NousResearch/hermes-agent/pull/127229)) — @JoaoMarcos44、@rohitsabu、@OutThisLife
- **更广泛的防护** - 更多的获取通过 SSRF 防护（`security.fake_ip_ranges` 用于假 IP 代理）；云元数据获取、zsh/dash 管道到 shell 和 `deno eval` 需要批准； `approvals.deny` 在沙箱中工作；内置规则取代了捆绑的 tiith。 ([#114887](https://github.com/NousResearch/hermes-agent/pull/114887)、[#113156](https://github.com/NousResearch/hermes-agent/pull/113156)、[#116726](https://github.com/NousResearch/hermes-agent/pull/116726)、[#103649](https://github.com/NousResearch/hermes-agent/pull/103649)、[#133832](https://github.com/NousResearch/hermes-agent/pull/133832)) — @beardthelion、@AYin-Z、 @fangliquanflq
- **漏洞已关闭** — MCP OAuth 回调停止反映 HTML； webhook、SMS 和 WhatsApp Cloud 入站拒绝空白签名密钥。 ([#92612](https://github.com/NousResearch/hermes-agent/pull/92612)、[#133257](https://github.com/NousResearch/hermes-agent/pull/133257)) — @memosr、@ahadvice
- **选择加入共享指标** — 只有在同意的情况下，每日使用统计数据才会到达 Nous；两个 `telemetry.shared_metrics` 均默认关闭，每个配置文件询问一次，输入 =“不，谢谢”。 ([#95278](https://github.com/NousResearch/hermes-agent/pull/95278)) — @benbarclay
### 代码库和性能
- **更精简的提示和工具** — 请求提示令牌减少约 2.1k 个，按需保管库工具，单程文件探测，`hermes -w` 不再在每次启动时重新打包。 ([#137084](https://github.com/NousResearch/hermes-agent/pull/137084), [#101599](https://github.com/NousResearch/hermes-agent/pull/101599)) — @yaojiejia
### 其他
- **更安全的备份** — `hermes backup` 保留最新的 3，标记不完整的存档； `hermes import`拒绝损坏的。 ([#106455](https://github.com/NousResearch/hermes-agent/pull/106455)、[#121498](https://github.com/NousResearch/hermes-agent/pull/121498)) — @buihongduc132、@kshitijk4poor
- **此外** — `KEY_2`…环境变量加入凭证池；一屏`hermes status`；选择加入 `display.suppress_warning_notifications`；桌面机器人名册部分；只使用Hermes自己的node/npm/uv；小米MiMo v2.6。 ([#112390](https://github.com/NousResearch/hermes-agent/pull/112390)、[#131034](https://github.com/NousResearch/hermes-agent/pull/131034)、[#114370](https://github.com/NousResearch/hermes-agent/pull/114370)、[#101290](https://github.com/NousResearch/hermes-agent/pull/101290)、[#125589](https://github.com/NousResearch/hermes-agent/pull/125589)、 [#118502](https://github.com/NousResearch/hermes-agent/pull/118502)) — @PhoeniXAbhisheK、@victor-kyriazakos、@fortun8te、@rob-maron
- **对于贡献者** — CODEOWNERS 取代了标签门； E2E（包括本机 Windows）仅在发布版本上运行；稳定版本默认跳过 macOS Intel/Termux。 ([#131726](https://github.com/NousResearch/hermes-agent/pull/131726)、[#136603](https://github.com/NousResearch/hermes-agent/pull/136603)) — @ethernet8023

## 🐛 值得注意的错误修复

**入门、连接器和本地模型**
- 托管 llama-server 不再在 Windows 上因 0xC0000374 崩溃，并且不再继承您的凭据 ([#116923](https://github.com/NousResearch/hermes-agent/pull/116923))
- Windows 本地模型服务器被包含并安全恢复孤立服务器；一起启动的两个后端启动一个路由器（[#111038](https://github.com/NousResearch/hermes-agent/pull/111038)、[#117600](https://github.com/NousResearch/hermes-agent/pull/117600) — @jquesnelle、@chelsealong）

**安装、更新和打包**
- Docker 代理在重新启动后不再丢失其内置 API 服务器、消息传递和 MCP 依赖性。 ([#135726](https://github.com/NousResearch/hermes-agent/pull/135726) — @unsupportedpastels)
- `hermes update` 在拉动过程中被杀死不再破坏每个入口点。 ([#120339](https://github.com/NousResearch/hermes-agent/pull/120339))

**提供商和模型**
- 速率受限的 Claude 模型不再为所有其他 Claude 模型提供整个凭证。 ([#113171](https://github.com/NousResearch/hermes-agent/pull/113171) — @KoNit-K)
- Codex 应用程序服务器会话现在获取 SOUL.md 和 Hermes 系统提示符。 ([#115759](https://github.com/NousResearch/hermes-agent/pull/115759) — @JonthanaHanh、@ooiuuii、@Momentum96)

**代理循环、会话和内存**
- 会话行被删除的聊天会重新创建它，而不是在以后的每个回合中默默地删除它 ([#124117](https://github.com/NousResearch/hermes-agent/pull/124117) — @kshitijk4poor、@strzhao）
- 网关关闭时刷新的消息将恢复到其会话中（[#114225](https://github.com/NousResearch/hermes-agent/pull/114225) — @kshitijk4poor、@spfcraze、@yoyodine-industries、@briandevans）

**网关和平台**
- Telegram 不再在洪水控制下停滞或保持连接但对楔形调度程序充耳不闻。 ([#116987](https://github.com/NousResearch/hermes-agent/pull/116987)、[#132162](https://github.com/NousResearch/hermes-agent/pull/132162) — @kshitijk4poor)
- Slack 原生流媒体停止发布答案两次。 ([#121762](https://github.com/NousResearch/hermes-agent/pull/121762) — @kshitijk4poor, @ms-elbdev)

**桌面**
- 回复不再显示两次、乱码或在恢复、引导、聊天切换或重新连接后消失（[#118890](https://github.com/NousResearch/hermes-agent/pull/118890)、[#120290](https://github.com/NousResearch/hermes-agent/pull/120290)、[#121061](https://github.com/NousResearch/hermes-agent/pull/121061) — @BearHuddleston）
- 按 Enter 键会回答屏幕上的澄清卡，而不是后台聊天的 ([#76472](https://github.com/NousResearch/hermes-agent/pull/76472) — @briandevans)
- 刷新、会话切换或重复使用工具调用 ID 后回复重复或消失（[#131758](https://github.com/NousResearch/hermes-agent/pull/131758)、[#128003](https://github.com/NousResearch/hermes-agent/pull/128003)、[#130553](https://github.com/NousResearch/hermes-agent/pull/130553) — @OutThisLife、@alt-glitch、@kshitijk4poor）
-“此设备”后端一小时后不再空闲终止；新聊天在您选择的网关上运行（[#134942](https://github.com/NousResearch/hermes-agent/pull/134942)、[#132538](https://github.com/NousResearch/hermes-agent/pull/132538) — @unsupportedpastels）

**CLI、TUI 和仪表板**
- 仪表板保存不再用屏蔽预览覆盖秘密 ([#121250](https://github.com/NousResearch/hermes-agent/pull/121250) — @kshitijk4poor)
- 调整 CLI 的大小不再重新附加对话以回滚（[#120321](https://github.com/NousResearch/hermes-agent/pull/120321) — @Jackal991）

**工具、MCP 和浏览器**
- 停放的 OAuth MCP 服务器不再在每个新会话上重播其失效刷新令牌，这可能会引发速率限制禁令 ([#137502](https://github.com/NousResearch/hermes-agent/pull/137502))。
- `computer_use` 元件 clicks 在 cua 驱动器 0.21+ 上再次工作；之前只有像素 clicks 有效（[#111313](https://github.com/NousResearch/hermes-agent/pull/111313) — @jeffjhunter）。

**插件和技能**
- `hermes plugins list` 和仪表板插件页面最多发出一个实时目录请求，而不是为每个已安装的插件等待一次超时。 ([#114811](https://github.com/NousResearch/hermes-agent/pull/114811))
- 在无树源签出时，插件清单不再需要 40-80 秒，这比桌面请求超时更长。 ([#125716](https://github.com/NousResearch/hermes-agent/pull/125716) — @liuhao1024)
- 从桌面、TUI 或仪表板启用插件不再剥离核心工具。 ([#135048](https://github.com/NousResearch/hermes-agent/pull/135048))
- 其插件在启动时无法加载的平台会在 `hermes status` 中进行标记，并且无需重新启动即可返回。 ([#130613](https://github.com/NousResearch/hermes-agent/pull/130613)、[#133289](https://github.com/NousResearch/hermes-agent/pull/133289)) — @kshitijk4poor

**Cron、看板和授权**
- 网关 `/goal` 门添加不再让非管理员访问主机 shell ([#101499](https://github.com/NousResearch/hermes-agent/pull/101499))
- 看板中的自动 git、工作树清理和子代理不再运行克隆存储库的挂钩或过滤器（[#130661](https://github.com/NousResearch/hermes-agent/pull/130661)）

**安全与杂项**
- 阿里巴巴内容护栏背后的 Qwen 模型以安全通知结束转弯，而不是重试四分钟。 ([#136425](https://github.com/NousResearch/hermes-agent/pull/136425))
- 检测到的密码管理器可以从“设置”中再次打开；切换是无操作的。 ([#109558](https://github.com/NousResearch/hermes-agent/pull/109558)) — @kokhlo

## ↩️ 在此窗口中恢复（不发货）

- **Collective Wisdom V1**（树内组织技能市场）被合并然后删除；此版本中没有智慧代码。 ([#94266](https://github.com/NousResearch/hermes-agent/pull/94266) — @shannonsands)
- **桌面卡片式技能/插件目录浏览器**及其网站“Install in Hermes”链接已恢复 3 次；桌面浏览功能作为带有嵌入式目录选择器的列表选项卡。 ([#119381](https://github.com/NousResearch/hermes-agent/pull/119381)、[#131252](https://github.com/NousResearch/hermes-agent/pull/131252))
- **批准并澄清等待答复**的提示被恢复； `approvals.timeout` 仍然适用。 ([#130167](https://github.com/NousResearch/hermes-agent/pull/130167))
- 机器人模式下的**并行群聊回合**已恢复；房间连续运行。 ([#101112](https://github.com/NousResearch/hermes-agent/pull/101112)、[#101139](https://github.com/NousResearch/hermes-agent/pull/101139))
- **在桌面机器人丢失共享登录后，恢复了命名配置文件与根 `auth.json` 的完全隔离；当个人资料拥有登录信息时，他们会保留自己的登录信息。 ([#113425](https://github.com/NousResearch/hermes-agent/pull/113425)、[#118373](https://github.com/NousResearch/hermes-agent/pull/118373)、[#134574](https://github.com/NousResearch/hermes-agent/pull/134574))
- **`hermes cron resnap`** 和创建时模型快照被主模型之后的 cron 替换（`pinned` 将作业锁定到一个模型）。 ([#106496](https://github.com/NousResearch/hermes-agent/pull/106496)、[#113679](https://github.com/NousResearch/hermes-agent/pull/113679))
- **经典默认皮肤调色板**和**提力斯目录插件**已恢复。 ([#130015](https://github.com/NousResearch/hermes-agent/pull/130015)、[#133838](https://github.com/NousResearch/hermes-agent/pull/133838))

## 👥 贡献者

### 核心团队（Nous Research）
- **@teknium1** — 发布方向、每个子系统的抢救活动以及约 2,800 个合并的 PR
- **@kshitijk4poor** (806 PR) — 提供者和推理重放、压缩、state.db、免费层、多路奇偶校验和数百个回收
- **@OutThisLife** (679 PR) — 桌面应用程序：模型选择器、设置 ▸ 插件、工作区、机器人模式 UI、连接器卡
- **@alt-glitch** (175 PR) — 首次运行入门、Nous 免费层、连接器、工具搜索、机器事实
- **@austinpickett** (160 PR) — 仪表板聊天、桌面 SSH/远程、机器人模式和恢复修复
- **@ethernet8023** (96 PR) — 统一的包管理器、签名的桌面包、稳定的发布管道、本地模型引擎
- **@unsupportedpastels** (60 PR) — CLI/TUI 中断和准入处理、cron 可靠性、Discord 语音、Docker 附加功能
- **@jquesnelle** (22 PR) — 本地模型：托管 llama.cpp 运行时、建议和引擎引脚
- **@helix4u** (20 PR) — 桌面中断、终端和会话修复、安装程序订购
- **@benbarclay**、**@victor-kyriazakos**、**@rewbs**、**@yoniebans**、**@rob-maron**、**@c2h5oh**、**@notwitcheer**、**@shannonsands** — 中继和仪表板身份验证、Slack 和 Bedrock、托管搜索和连接器令牌、安装 E2E、模型目录、CI 和 linting、文档

### 顶级社区贡献者（按合并 PR 计数）
- **@Adolanium** (44 PR) — 性能修复、应用内浏览器评论工具、会话导入和一系列目录插件
- **@apoapostolov** (29)、**@TakeshiTGAL** (22)、**@100yenadmin** (19)、**@olric3015** (18)、**@aydnOktay** (12)、**@cygnostik** (12)、**@anpicasso** (12)、**@itpartypattaya** (11)、**@jacobhausler** (9) - 插件目录的最大作者：推理和作曲家工具、日本政府数据、计划模式和董事会状态、流速度和账本、桌面工具、reMarkable 和桌面领域、Kiro 和批准、hermes-dreaming 和全息、工作流程和 Beads
- **@Finn763** (14)、**@liuhao1024** (13)、**@xxxigm** (12)、**@dskwe** (10)、**@KoNit-K** (8)、**@chelsealong** (8)、**@686f6c61** (7) — 桌面、Windows、SSH 和 Linux 可靠性、本地运行时内存定价、机器人屏幕粘贴、模型目录修复
- **@jonpol01** (13 PR) — 压缩正确性和精确字节文件修补

### 所有贡献者
感谢约 2,520 名贡献代码、共同编写修复程序或将其工作成果保留到此版本中的每一个人：

@0301chris @08085 @0bull @0disoft @0genlab @0x7s0lt1 @0xalydev @0xble @0xbyt4 @0xdany @0xDevNinja @0xGr1mm
@0xharryriddle @0xmosta @0xNyk @0xWhiteMage @0z1-ghb @100yenadmin @1052326311 @10ishq @122393594-ty @123456hyu
@123mikeyd @1960697431 @1RB @2025hcsmile2010-hue @29206394 @333Alden333 @33hodl @3DPrintPioneers @3L0935
@3ssiri @4adwentures @4dlt @52216165 @5uck1ess @686f6c61 @69k4xmdfm2-blip @6ylqq @895252509 @a-yeyang
@a1398394385 @a692570 @aadilghani1 @aaronlab @aashizpoudel @Abd0r @abderbj @abhibansal-sg @AbhijatSaxena
@Abnertheforeman @abualnassr @Abuarchiv @abundantbeing @acarsondave @acedatacloud-dev @acjsec @acsezen
@actualrat1984 @adamcap926 @adamking77 @adamkrawczyk @adammatski1972 @AdamPlatin123 @adanaleycio
@adarshdigievo @adavyas @addamsE @addelh @adecubed @adikpb @adleapnet @adolanium @AdrianBinDC @adriansotomora
@adurham @adybag14-cyber @aean0x @aeonsong @aerbaser @afifai @afourniernv @afurm @Agantila @agaarg21
@agentdynamic @agentlinker @aglowinthefield @agt-user @ahadvice @ahamSel @ahisblessed @ahmed-3li @AhmetArif0
@Ahmett101 @ahrazzle @ahtishamdilawar @ai-ag2026 @AIalliAI @aieng-abdullah @aimable100 @Aio777 @airo7 @AJ
@ajaynomics @ajbmachon @ajensenwaud @ajspig @ajzrva-sys @ak2k @AKAZIK-py @akivavh @Akloenx123 @akshan-main
@akugone @Al3xand3r1987 @alaamohanad169-ship-it @AlanBurningsuit @alanfwilliams @alanwilhelm @albeight
@albert748 @albertodepaola @AlchemistChaos @aldoeliacim @aleesposito85 @alelpoan @alessandrolamberti
@alex-heritier @alex107ivanov @AlexanderBFoley @AlexanderPrendota @alexandreroumieu-codeapprentice
@AlexFucuson9 @AlexGabbia @alexgunsberg @AlexMnrs @AlexTu2 @alexwill87 @AlexxRussell @alfred-amanda
@alfred-smith-0 @aliasocracy @Alicorn-Max-S @aliilhami @alimbaydoun @alireza78a @alissongalindo
@AllenRobinHubert @alloevil @AlphaPerseii3000 @alrcatraz @AlsayedHoota @alt-glitch @AltenLi @alvarobiano
@alvarosanchez @am423 @aman-merchant @amanning3390 @amansk @ambition0802 @amekala @ameobius @amethystani
@AMIK-coorporations @amir-ag @amitcse @aml1973 @an420eth @anablancovicente @analista @anatolijlaptev1991-ctrl
@AndreasHiltner @andreausderhood @andrewhomeyer @andrewhosf @andrewkangkr @andrewmadson-pplx @AndrewMoryakov
@andrexibiza @Andy @andynguyendk @andyst-dev @andyylin @angel12 @angelos @anhtahaylove @aniruddhaadak80
@ankinow @AnnasMazhar @annguyenNous @anombyte93 @anoopmehendale-cue @anotherchu @anpicasso @anuiit
@anuvratrarastogi @ap08960695 @AP3X-Dev @apexscaleai @apoapostolov @appletechie @aqilaziz @arasovic @arcabotai
@ArcanePivot @arceus77-7 @Archerouyang @ArcherQAQ @ArecaNon @ARegalado1 @Arguously1341 @arimu1 @arlai-mk
@armandokun @arminanton @aron-intframe @arrrry-HydraDB @arrufat @ascetx @asdlem @asheriif @ashishpatel26
@ashmoonori-afk @AshuJoshi @asimons81 @askclaw-vesper @aslater3 @asorry75 @aspire488 @AsterJisu @astraltrekkin
@AStrnbrg @atbrace @atmaksri @atostivint @Atroci @ats3v @atul-trycoral @Aum08Desai @aurel282
@aurorabotticus-svg @auroracapital @austinlaw076 @austinpickett @Automata-intelligentsia @Avery @awizemann
@Awshesh12 @AxDSan @axiom-agent-ai @aydnOktay @AYin-Z @ayushmanpadhi @ayushnangia @AzurePii @B0on @b13kjack
@b2089766906-droid @baau @baauzi @babatorik @bablobanov @babyblueviper1 @back1992 @Backroads4Me @badiyee85
@badkangaroo @bakhtiersizhaev @baleian @banditburai @baofuen @Baophan00 @Bardioc1977 @barnicskolaci
@bartcollet @Bartok9 @basilnas @BatataBF @bayrakdarerdem @BB-light @bb873 @bbasketballer75 @bblicke1
@Beandon13 @bear0328 @beardthelion @BearHuddleston @bedirhancode @beibi9966 @Belaquaa @benawad @benbarclay
@benbenlijie @benegessarit @benjamin-rousseau-shift @benjaminbrumbaugh @BenKalsky @bennybuoy @bennyhodl
@bennytimz @benperry6 @beplee @Bergmann89 @bergusdz @berkantay @berthelius @bgrablin @BGwill-OUTLOOK @bheji07
@bighamx @BigKelLearns @Bihruze @bill3wits @binhnt92 @bionicbutterfly13 @Biotrioo @bird @bixycler @BkashJEE
@BlackishGreen33 @BlakeB254 @blakehermes9 @bloodcarter @BlueBirdBack @bluefateludi @bmcfiv @bmtrnavsky @bo.fu
@bobaba76 @bogerman1 @BonesGit @Bonorinoa @BoredSexyJordan @bounce12340 @BowmanStephen @bradestes @Brammiebram
@brantzh6 @bravohenry @brendanjryan @BrethofAI @brian717 @briancaffey @briandevans @BrianFranco @briepala
@BrierAinz @Brixyy @BROCCOLO1D @BrokeSkill @brucexu-eth @BrunoBza @bryanneva @bsdnn @btorresgil
@buddhaholic420 @buihongduc132 @BullishMomentum56 @bwoliveira @byjaps @byungsker @C-Est-Dept @c-pompa
@c0d1ngHUB @c0debyeric @c0mrade @c2h5oh @c3115644151 @ca-shrimp @cadezhou @Caelier @caentzminger @callsamik
@calvinnwq @cameronbergh @camilb @capthvnsen @carlosapgomes @carlotestor @carrion256 @Carry00 @caseyanthony
@catapreta @caya8205-2 @ccbbccbb @ccook1963 @cdanis @cdb-lumen @cdbartholomew @cdepuy @cdnsteve @ce-dric
@cedanoagent @certaindaniel @cervantesh @CES4751 @Cesar-Azeredo @cez0060405 @cg2aigc @chadhouser @Chadmc9889
@chaithanyak42 @ChanPark03 @charan-rathore @CharlesMcquade @Charlesmpc @CharlieKerfoot @CharZhou @ChasLui
@chelsealong @chenfeijian95-ui @chenoak @chenhm @chenlichao @chenzeyan54-commits @cherrish333013 @cherryb16
@Chinmayrawat15 @chntllh @choaticpixels @Christopher-Schulze @christopherrobin88 @chrisworksai @chrisyoung2005
@chuenlye @chugiacan @chukirk-svg @Chukwuebuka-2003 @churnast @ciabata-git @CipherFrame @cipry0200 @CIRWEL
@cj52973 @Ckarey007 @ckomma @ckorhonen @clarkvines @claudioorjunior @claudiumio @claudlos @clayduncan
@ClintonEmok @Clippy @Cloeille @cloim @Clubheader @clyu168 @cmcejas @cmyyy @cnfi @cnkang @codebuff-team
@codeJRV @codeshipsingh @codexbt @Cody292 @Codyinked @coe0718 @cola-runner @CoLaOnline @ColdSlither @ColDSnit
@ColrWei @ComicBit @Commander @connns @Contentment003111 @conernaticspeter @Cortana @CortonKwok-GGD
@cosin2077 @Cossackx @cotghw @Cr4ckMe @CraigRichardsonRMPM @crazyief @crazywriter1 @crdesign8 @creeklava-svg
@cresslank @criptogus @cruzanstx @cruzlxyz @CryptoByz @CryptoDombili @cryptoyasenka @cspears32 @csreyes
@cswrld-net @ctaylor86 @cucurigoo @CupaJ12 @cuppett @cutepawss @cuuush @cuyua9 @cxxCoolStar @Cyber-Yichen
@cybertecla @cygnostik @cypres0099 @cyrkstudios @d31tcjg @d8joseph @Da7-Tech @daailouivan @dacheah @Dadmin88
@daedalus-opus @dafka007 @dagardner-nv @Dagulf795 @dajiao Huang @dalebetz @dalzio @DanBennettUK @dandacompany
@DaneelV3 @Danielmuzology @daniil-grois @danilofalcao @dankkush @danrudy33 @danspicytaco @dante32683 @daresan
@dariorapisardi @DarRahman @dasgltd @datanerdie @DatTheMaster @David-0x221Eight @david-bowiegxw @davidgut1982
@davidkarban @DavidMetcalfe @davidneyravyr @davidvv @davidxyuan @DaxLee9988 @dborodchuk @dborosev @dchenk
@deadczarvc @Deadtrix21 @deankerr @deas @deathxdefeat @DebadityaHait @Decent9967 @DECK6 @decofe @DECRUX9812
@deinte @delacaola @delltrak @deniqlab @DenisAraujo68 @denisqq @derekm @DeseretSaint @despotak @DESXIE
@DevAgarwal2 @devarticle @developersdigest @DevEverything01 @devorun @devsart95 @devseunggwan @DevvGwardo
@devwdave @Dezooyi @dgkaaks @dgpcboy @dhabibi @DhivinX @dhruv-kejriwal-mccain @Dhruv7201 @dhruvkej9 @Diaspar4u
@didida9527 @didodim @diegomarino @dieutx @diffen77 @Digitally-Challenged @dillweed @dimitrysuen @dirtyren
@djbclark @djennewe @djmango @djsanchezsuarez @djstunami @dkbjornn @dlcsouza @dlgrv @dlkakbs @dlshumway
@dmabry @dmahan93 @dmater01 @dmelkk-secondbrain @dmetcalfe @dmf01614-source @dmspark @dmyou @DoGMaTiiC
@DojoGenesis @Dolverin @domenicomassafra @DomGrieco @dominikamann @dominiquevidja @doncazper @dongxu0413
@doniocode @donovan-yohan @donramon77 @DonShelly @doo Jiang @doresa0 @doryani-ai @dot @Doud-FR @dparikh79
@dpersek @dpiers1 @dplush @DragonLi-Mi @DragonnZhang @draix @dreamfarer-space @DreamyMoonMouse @dredozubov
@DresvyanskiyDenis @drew-dot-com @drewTuzson @Drexuxux @drichar @drkpxl @dromai @dschnurbusch @dskwe
@dsr-restyn @Dusk1e @dusterbloom @duu261 @dwb1991 @dyiapanis @dynamite-bud @dzianisv @ea-s21 @Eapwrk
@eason2026 @easyvibecoding @eazye19 @echo931 @echohn @EdderTalmor @eddiewang @Edizzier @edosulai @edrethardo
@eduardo @EdwardIrby @efe-arv @Efistoffeles @egerev @egilewski @ehz0ah @eisene @Eji4h @ekkoitac @el-analista
@elashera @elbukott1 @eliasburlison @elisam0 @ellannjohnson @elmatadorgh @eloklam @eloktev @EloquentBrush0x
@elphamale @Elshayib @elvin-du @emadalsaba @eman062000 @EmanueleCornaggia @embwl0x @EmelyanenkoK @eminboydak
@eminogrande @emirsaffar-collab @emonty @emozilla @EmpireOperating @EMT5320 @Enchanted0911 @ennheng
@Enough1122 @entropidelic @entropy-0x @enwaiax @enzo-adami @eranbes @erenkarakus @erhnysr @eric-senyao
@ericmaddox @ErnestHysa @erosika @esketids @ether-btc @ethernet8023 @etrisnanto @euisuh @evan @evan-bradford
@EvanZhu0721 @eventh0riz0n @everm1nd @Everson-s8 @EvgenyMettsler @EvilDrag0n @EvilRan @Ex8-ca @ExitMaster
@Expri-commits @eyeonall @eynaudg @f3rs3n @F4TB0Yz @fabiantax @fabioaito @fabiomotta0311 @fabiosiqueira
@fahdad @faikwo @faisfamilytravel @FalconOrtiz @falkoro @fancyboi999 @fangliquanflq @FASTCHIP @fastfinge
@Fatmylin @fatwang2 @fazerluga-creator @fcarucci @fcavalcantirj @FeiyouG @felixdae @Felixkw12 @Feranmi10
@ferminquant @fernandezbaptiste @Fernandrewm @FestoneX @FEUAZUR @finn763 @firefly @FirmamentalSpring
@FlashWayne @FldBudin @flow-digital-ny @fluxkapacitor @flyer103 @flyingdoubleG @flyinhigh @fmercurio @foma
@foma-agent @foras910521-lab @forrestzhang107 @fortona-space @fortun8te @forumevi @forztf @fotedev @foxion37
@francip @franco314 @frankiethull @frankmendes1979 @fred0m @frendo @frizikk @frohsinnllc @Froraut @Frowtek
@frozen @fsaad1984 @ft-ioxcs @fujinice @FunJim @funkyotc @Futahua @g3org3yo @GabboAlarcon @gabbyong
@gabrielpaesland @gamewocao @Ganesh0690 @gaoanze888 @garadice @gas @Gateton @GauravPatil2515 @gauravsaxena1997
@gavasques @Gavin-Qiao @gbarany @gchablemeneses-web @geniok1980 @geoffreybutler94 @georgeatparallel
@georgejieh @gercamjr @gfriesen1 @ggascoigne @ggoldani @gh-dispatch @giggling-ginger @gilfoyle @girayk
@Git-on-my-level @gitabtion @gitcommit90 @GitmanIII @giwaov @gkd2323c @glasserai @glaw1300 @glesperance
@glitchbunny0 @globalvet2025 @gls774 @Glucksberg @gmoranxyz @gnanam1990 @gnanirahulnutakki @GoBeromsu
@godlin-gh @GodsBoy @Goitonthefloor @gokay-ai @gokhanyildirimlar @goku94123 @GoldenLoaf24h @gongyi
@gonzoblasco @googio @Gosuj @GottZ @gqwesleywang @Grey0202 @GrgaPalcic @Gridzilla @grimmjoww578 @grinco
@GroveMinting @gsy324 @GTHell @guanla-zz @GuardianZ71 @guberm @Guerilla-ops @gumclaw @gustavosmendes @gustbr
@gutslabs @gvago @h4ck200711 @haileymarshall @HaisamAbbas @haizaar @Halldrix @Han @hanamizuki @hansnow
@hanyu1212 @HanYunChenLuo @hanzckernel @happy5318 @hardwork9047 @hariNEzuMI928 @harjothkhara
@harrisonmedmedmetrics @harrylabsj @harryvgiunta @Harshkamdar67 @harshmoney123 @hassan-kamel @hassanhaidry
@haydster7 @hbizi @hcnimi @hdy2001 @HearthCore @heathley @hehehe0803 @hejuntt1014 @helingjun @helix4u
@HeLLGURD @hellofrommorgan @hellohanchen @hengm3467 @HenkDz @Henry-GGS @Hermes @Hermsi1337 @hernanda-git
@het0814 @HexLab98 @Heybinshao @HeyClos @heyf @heyhudson @hhhonzik @HiddenPuppy @higgs1729 @himanusia @Himess
@hinablue @Hinotoi-agent @Hiren @holny @HoneyTyagii @honor2030 @Hotragn @houko @hrnbld @hsy5571616 @hteo1337
@huangxun375-stack @huangyoje @huanshan5195 @hueilau @huklaa @HumphreySun98 @huntermonk @HwangJohn @Hygaard
@Hypn0sis @i-Hun @iacker @iainlane @iamagenius00 @iamfoz @iamlukethedev @iamwongeeeee @iap @IAvecilla
@ibhagwan @ibm2024 @iborazzi @ifastcc @ifrederico @igparkernz-coder @ikelvingo @ildunari @Imagineer99 @imgali
@Imgaojp @imgyf @imzacksong @InB4DevOps @inchargeautomation-lab @indigokarasu @indranilbanerjee
@infinitycrew39 @injaneity @insecurejezza @intelac @IntrepidBytes @ipriyaaanshu @IRONICBo @iRonin @irresi
@isaachuangGMICLOUD @isair @ishangodawatta @ishanparihar @ishardo @isheng-eqi @ishuowang @ismoilh
@isoenthusiast @israellot @IT-dreamer @italodsfernandes @itnkr @itpartypattaya @itsflownium @itskaism
@iveywest @Ivyleaguelawyer @izumi0uu @Izzy-Gottz @j-nolan @J0hnLawMississippi @Jaaneek @JabberELF @jacdevos
@Jack @Jackal991 @jackey8616 @JackHunzicker @jackjin1997 @JackLee992 @JackTheGit @jackulau @jacob3712
@jacobhausler @Jah-yee @jahazielhernandezbaubap @jahfaliabdulrahman-dev @Jaiminp007 @jakewvincent
@jakobbjelver @jakobdylanc @james47kjv @jangomango76 @JanHranicky @janviernine @jasm001 @jasonHav @jasonQin6
@jasonwu-ai @jatingodnani @jayzhou2309 @jbbottoms @jcjc81 @jcorrego @jcperdomoybarra @JE4NVRG
@jeeves-assistant @Jeffgithub0029 @jeffjhunter @jeffrobodie-glitch @jefuriiij @JeliTron @jerilynzheng
@jerrygooch @jerryhjones @JerryLiu369 @jervaise @jethac @jexbow @JezzaHehn @jflemieux @jfuenmayor @JiaDe-Wu
@Jiahui-Gu @jiankoumo @jiantaoliu-source @jimjsong @JimLiu @jimmyjohansson84 @jinglun010-cpu @jinlingzi-cmd
@jinliyl @JinUltimate1995 @JithendraNara @JiuYue0820 @jkobject @jmiguellucas @jmmaloney4 @jnbn @jneeee
@JoaoMarcos44 @joe-rodgers @joe050860 @joelbrilliant @JoelJJohnson @JoelMTaylor @Joeywrz @johnkattenhorn
@Johnny-xuan @johnnykor82 @johnsonAyo @jollyroger1480 @jon-nielsen @jonameijers @JonathanFeller @jondgilbert
@jonh-dev @jonotonfoto @jonpol01 @JonthanaHanh @JonZal @jooray @jordan-thirkle @jordimas
@joseph-mccarey-architect @josephsellers @JoshSnider @joshuadow @journeydan @JPeetz @jplew @jrcrittenden
@jroest @jslee-gif @jtstothard @JuaniLezcano @JulianCruzet @julio-cloudvisor @juliorobertoalvarez @Junass1
@jupiterx0910 @justascesnauskas @justcarlosm @justinsharpe @JustinUssuri @Justlrnal4 @jwilson411 @jxfjosh
@kagura-agent @Kailigithub @kaiomp @kaishi00 @kalice-vi @kallidean @kama-dev @Kame696 @KarateWilly @karmeleon
@Kartik @kaveone @kavioavio @kawanoii @KCAYAAI @kchuang1015 @KeaneYan @keanhardling @keeltrace @keenvc
@keepcalmqqf @keepConcentration @keiranhaax @kelsia14 @kelvmg @kendrickkester @Kenmege @kentimsit @keppy
@kernel-t1 @kerrz2020 @Kerubi-5 @Kesuek @Kev-fs @KevinMeinon @Kewe63 @KeyArgo @keyuyuan @kfchow-ai @KIAgent01
@kidrauhl123 @kilhyeonjun @Kiloris @Kimchi @Kingdomwarrior23 @kingpin44 @kingrubic @Kinkoolino-Hermes
@KiraKatana @kirkins @KiruyaMomochi @KIvanow @kiwipaulrob @kiwiwyl @kiyo-e @kleros109 @KnowBotDev @kohjunhao
@kohoj @kokhlo @Kolektori @koltyj @Komzpa @KoNit-K @konsisumer @Korkyzer @kosazoltan @kouyichi @krapwoo
@kriscolab @kristianvast @krunkosaurus @Kryptonator @kshitijk4poor @kstawiski @ksze @kuangmi-bit @kuehnberger
@kufufu9 @kumaxs @kuntao2011 @kvnloo @kweiner @kyan12 @kylecap9 @kyoto-aircon @kyssta-exe @kyzcreig
@l37525778-coder @L4XB @labyrinth-analytics @Lakescape @lakshyaag-tavily @lanyusea @LaPhilosophie @LarHope
@larrypang @lars-hagen @laulopezreal @LavyaTandel @lawcheck @lawyer112 @lazyants @Lazzdaycod @leakedd
@Leathal1 @leavedrop @Lee-Si-Yoon @leegunwoo98 @leemove @leepoweii @leewaiho @Legion-is-life @LehaoLin @Lei-k
@lekt9 @leomcamilo @leon7609 @LeonardoLGDS @LeonSGP43 @leoprodz @lepetitprince716-prog @lepkov @lesterlxt
@lesterppo @lesyuk @levest28 @lEWFkRAD @lewis4x4 @lexgenius @lfaus @lgy1027 @li-lizhe @liamsmith86 @libre-7
@lidises @lifeFedorovAlexey @LifeJiggy @lightcloud00 @lightx @lihengming @lijinxiao1982 @LikelyLucid
@lilShawtty-byte @linfeng961 @LINGJIAKUN @linxule @Lion-Leporidae @LionGateOS @lipebez @LironTTG
@LisandroNahuelH @littlewwwhite @liuhao1024 @Liuzikaii @liuzinann @liyoungc @lkevincc0 @llbn @lll @locker95
@lofibrainwav @LoicHmh @Lokee86 @Lokeshm24 @loongfay @loongzhao @loqimean @LordMelkor @lorencato23
@lorenzozanee @lost9999 @Louis-Anson @louiswalsh @loulanyue @LovePlayCode @loveRhythm1990 @Lqg97 @lsshawn
@luandiasrj @lubosxyz @Lubrsy706 @lucasfdale @lucaskvasirr @LucidPaths @luckystar2026 @lucvan @luinbytes
@lukefx @Luna161 @luojiesi @LuwenOosten @luxiaolu4827 @luxles @luyao618 @lvabarajithan @LVT382009 @ly6751
@lyswty @Lyti4 @lzmuhioin @m1k3s0 @M1racleShih @Mabolla @macd2 @Machbub @MacroAnarchy @Madkyotiger
@madpower2000 @Maero47 @Magaav @magicbluesmoke @MaheshBhushan @MaheshtheDev @mahgoub @maksir @malaiwah
@manateelazycat @ManniBr @mannnrachman @manny3 @manuelschipper @maoleidiss @mapu-og @Marc @marcolivierlavoie
@MarcosAlves90 @Marcus112-CS @marcusds @mario841859784 @mariomondev @Markgatcha @marko-niskala @markoub
@MarkTro1969 @MarkVLK @martinp09 @martinramos002-bot @MartyLake @mashenchina-max @Mat-London @matantsevs
@matebenyovszky @math0r-be @mathiashuque @MatthewHines @MattMaximo @MaxFreedomPollard @maximalang @MaximCrabbe
@maximilliangrand @MaxKerkula @maxmilian @maxpetrusenko @maxpetrusenkoagent @maxshafransky-a11y @maxtrigify
@MaxyMoos @maymuneth @MazenMkhinini @mazzanfar @mbeattietex1-star @MBK-fr @MCarlomagno @McClean @McHermes
@mcleay @mcpeezy @mdenil @mearls0501 @mechkw @mehmetkr-31 @mekenthompson @memosr @memtomem @Mengchee118
@mengtanx @mengyuyuan @menhguin @MestreY0d4-Uninter @meta Mindu @metamon-p @metricano @mettin4 @meviusisback
@mfurkanakinci @mfwagner @mha33 @mheals @Mi55ed @miadisabelle @Mibayy @micah-c02 @michaelversluis
@michaelzelbel @MicroWearld @miguelchaves997-creator @mijanx @mikeest1972 @MikeGibbsOnyx @MilaArtyNew @milkoor
@minchang @minh-alpon @minhngoc25a @Minksgo @mira-solari @miregal89 @MiseHinoha @misschloedupont @misterdas
@mjshorty @mkrb84 @MLcogTech @mmcallister8 @mmcclean-aws @mmchuangyt-ai @mmilutinovic371 @mnajafian-nv
@mnbf9rca @MNIK-YH @mochamgx @mochiNJ @moeadham @Moep90 @MohamadKanso @mohamedorigami-jpg @moisesvalero
@mojomast @moken627-hub @mollusk @Momentum96 @MongLong0214 @MonkeyLeeT @Montbra @Moodtuner997 @moonlight-lupin
@mooserini @mor44-AI @Morad37 @morajabi @MorAlekss @mormio @morolab @moxian @mr-3mm3 @mr-magaia @MrAbsaroka
@MrAtkeens @mrcharlesiv @mrchen0709 @mreso @MrSimonC @mrwanstudio @ms-alan @ms-elbdev @mssteuer @mudrii
@MuhammadUsamaMX @muhifni @Muno459 @murenovich @Mushisushi28 @MustafaKara7 @mwdearing @mxyhi @mykeura
@mzkarami @mzyas @n-leezy @n-WN @nabilaameena @Nagisa-3000 @Nami4D @NaMinhyeok @NanamiMio @nankingjing
@nanobro @napoleonmm83 @natebransc @nateEc @naterchrdsn @Navlem @nca7777 @Ne0teric @Nea74 @NealZhouPanda
@nebneo @Neboy72 @necoweb3 @neerazz @negm17111995 @neil771 @nekwo @nemofq @Neomail2 @neron82
@networthexplained @NexVeridian @nftpoetrist @ngelik @NgThachThanh @nicbj96 @nicecuprani @Nick @nickseelert
@nickzhu0977 @nicoechaniz @nicolasdmolina @nicoloboschi @nidhi-singh02 @nightq @nikkoxgonzales @niklaskie
@NikolaRHristov @nikolay-bratanov @NikolayGusev-astra @nikshepsvn @NingCiQiu @ningfangbin @Ninja @ninjmnky
@Ninso112 @nitishagar @niudakok @nmediaie @NMTZ-z @nnnet @nocoo @nocturnum91 @noestelar @nolanchic @Noor-Sol
@Noshkoto @nosleepcasette @nosliwhtes @NotGovernor @NoTimeforInfinity @notkisk @notwitcheer @NousResearch
@NPFernando @nrmjeremy @ns-fusion @nthrow @null-runner @nv-cho @nv-kasikritc @nv-pberard @NYTEMODEONLY @nyx573
@o3u6x @obierlaire @obtitus @octo-patch @Octopus @Octopustank @ocuclaw @oferlaor @officialasishkumar
@oheckmann74 @ohMyJason @ohmyskyhigh @okaris @oliver-mee @oliverhees @oliviaaaa7788 @olopez25 @olric3015
@oluwadareab12 @olympusbuildz @omar2535 @OmarB97 @omegazheng @omerkaz @omerlefaruk @omert11 @omid-io @OmniaZ1
@OMOX563 @OmX @Only-Code-A @onuraycicek @ooiuuii @OOOOOOAO @ooovenenoso @openclawcash @oppih @opriz @orangercat
@orcunulutas @original4422 @osadchiis @oswaldb22 @oswaldvalois @ottosulin @ourines @ous50 @ousiaresearch
@outdog-hwh @outpoints @outsourc-e @OutThisLife @overtoneblue @oxkenshin @oxngon @OYLFLMH @p-andhika
@pandacooming @paoloantinori @Paperclip @paraddox @Paramon @Parker-Fawcett @parsifal295 @pasmud
@patrykkopycinski @PaTTeeL @paultaki @pcaruba @pdmartins @pdonizete @PeaceMaker-best @pecalbezyshodnost-hue
@peetteerr @pefontana @penginman @penwyp @Per0-1 @perng @perqin @PeterFile @peteromallet @PeterTaras @Petra
@petrichor-op @peyton.lu @pgregg88 @phantomthedog @PhilipAD @philmossman @phippsbot-byte @phoebsie
@PhoeniXAbhisheK @phpoh @phuongvm @pierrenode @pincente @pinguarmy @PINKIIILQWQ @pintadoai @Pinutss
@PIR8-Software @piskooooo @pittosporum-seu @PixelAlchemist4 @pju-hoge @plarche-ux @PLASMA-FR @plcunha
@plluviera @Pluviobyte @pmaho @pminervini @pnascimento9596 @pnpwin @poijygfdyy @polkn @polnikale @Polybulle
@PolyphonyRequiem @poponline63 @portavales @Potrock @POWERFULMOVES @Poxel2 @ppazosp @pprism13 @pradeep7127
@praggybuilds @Prasanna28Devadiga @PRATHAMESH75 @praxis1244-consulting @predatorheard-byte @PRELVAS94
@preyevates @Prithvi1994 @privacydied @ProDrifterDK @professorpalmer @ProgramCaiCai @promptclickrun
@protas-box @psam-717 @psionic73 @ptichalouf @purzbeats @Pusch97 @PuvaanRaaj @pxdsgnco @pxls-kaneko @pyr0ken
@qd @qdivan @QDung210 @QifengKuang @清华南德江市 @qingshan89 @quangphucqp @quocanh261997 @quotumorg
@quqi1599 @qWaitCrypto @qwertyuiop97 @Qwinty @r00tedbrain-backup @r266-tech @r3x443 @raaaas @raajkumars
@rahlquist @rain-sk @rain610 @rainbowgore @raitoxlol @rajitkhanna @Raleighite @ramarivera @ramseshk @randimt
@rapsealk @rarf @rasitakyol @raulbcs @rayblennerhassett-byte @rayjun @raymondyan-zhijie @rayn1314 @rborkow
@rc-int @rcarrata @rchcorp @rcktmonk @re-ITRT @Realmagnum @Realtyxxx @Reaper-Forge @red4711 @redhelix @RegardV
@reinhold-ph @RelaxJonh @remi-td @RemyFevry @ReqX @rerdi92 @revaraver @rewbs @RFingAdam @RGerrish @Rhaphaello
@RHODIZSECURITY @rhushabhvaghela @riandradiva18 @Riccardo-Vecchi @richardcmckinney @ricki-io @RickyYii @RikETS
@rikkarth @Ringo6107 @rio-jeong @ritvikgautam @Rival @rivercrab26 @rjshrjndrn @rkfshakti @rlaope @Rmohid
@rob-maron @RobbertC5 @robbyczgw-cla @RobbyMo81 @robbyslmt @robchristiansen13 @robertaustinbell @roberttidball
@robinradx @Roblmvp @Rockey011 @rockminster @rocks737 @rod-nxtlevel @rodboev @Rodkillah @rodricksz4h5
@rodrigogs @RohiRIK @RohithPariki @rohitsabu @roli-lpci @romanovzky @Rook-CodeVolt @RootZ3n @roqianjas @roraag
@royalaid @RoySRose @rpridal @rrevenanttt @rroverin @rs545837 @rsayar @rshi0212 @rtcopenclawgh @ruangraung
@rudironsoni @rudrakshchahal @rudycelekli @ruizanthony @runninwithitmarketing @RunzhouLi @ruochu88s
@ruslanvasylev @Ruzzgar @rweddle @ryangu00 @ryantuc @RyanUnderhill @ryrenz @RyTsYdUp @s-jag @s905060
@SacrEllfarch @saforem2 @sagitario-jpn @SaguaroDev @sahibzada-allahyar @Sahil-SS9 @Sahilvishnaliya
@sahlbergalfred4-lgtm @saiteja-madha @sakhnenkoff @Sakujakira @salch-cred @salehelsayed @SaM13997 @samalone
@sambouli @samfoy @samplesabotage @samrusani @Samuek9 @samuelpatro @sanastasiou @SandroHub013 @Sanjays2402
@saotu @sarahwu185 @sarayd @sarbai @sarthak-707 @sarvesh1327 @sasan1200 @Sasni @sasquatch9818
@satirojordi-boop @SayHell0W0rld @sbe27 @ScaleLeanChris @schrodienieur @schwinguin @scottaki @scottgl9
@scottlowry @scroasdale @scross01 @sdalonzo @sdyckjq-lab @sealca @SeashoreShi @season179 @seb-almeida
@Sebuska29190 @secsson @see-k @SelfParody @seluvia @semirkabir @Sensie-agents @serefyarar @sergeikabuldzhanov
@Sergey0515 @sergioperezcheco @sgaofen @sgarrand @sgtworkman @Sha01in @shaase-ctrl @shadus @shafdev
@shagghiesuperstar @shali10 @shane9coy @shannonsands @shashwatgokhe @shaun0927 @shauryajain21 @shawnpana
@shehjaddev @shellybotmoyer @Shenrui-Ma @sherman-yang @Shimakaze514 @shivasymbl @shl0ms @shoesroom13
@shorehefei-ship-it @Shotflame @shreyanshj10 @shuanzhi @Shy7777 @SiaoZeng @siillee @silentpr0 @SilverNine
@simbam99 @SimoKiihamaki @simpolism @sinh2024 @Sisyphus @sitkarev @sjahlstrom @sjiantao2024 @sjungwon03 @sk
@skappafrost @skyc1e @skyeconcontracting-ctrl @skyer-flyyy @skyeyesec333 @skylarbpayne @slash1andy @Slobaka
@sloik @Slopez2023 @sly321-pixel @SmallNew2003 @SmelterLabs @smfworks @smtony @snipecoder @SNooZyy2
@snowdchike @socrates1024 @soddy022 @sohomsahaun @soichiyo @Soju06 @Soliud1nem @solovision24
@someoneexistsontheinternet @somewheresy @sonderhq @songshikang0111 @Sonnenwerk @Sora-bluesky @sorenisanerd
@soroush5 @soyami @soyelmismo @soymarketing @soynchux @spanishflu-est1918 @spfcraze @spideystreet
@spiky02plateau @spranab @sprmn24 @SquabbyZ @squevo @sroecker @srojk34 @ssep4u @ssiweifnag @SsSs
@stablegenius49 @StanleyStetson @stantheman0128 @starship-s @startakovsky @SteelPh0enix @StefanIsMe
@stefanpieter @StellarisW @stepanov1975 @stephan @Steve-prog001 @steveafrost @stevehsu0524 @steveonjava
@stods21 @StodsEcho5 @Stoltemberg @StreamOfRon @stremtec @strzhao @Studio729 @Subway2023 @successionbio
@sudhirpatil @sudoingx @suhas-svg @sujeet111 @SulthanZahran1 @sum117 @sunsakis @sunwz1115 @superafun
@superb-cation @supere989 @Superfly73 @superlowburn @superposition @supotato-ipj @supplefrog @Svector-anu
@sweetcornna @sxuff @sy0u1ti @sycamoregroupltd @sylvainCDA @sylvesterkaczmarek @Synero @synscott @szcharlesji
@szicely @SZWzz @szymonclawd @szzhoujiarui-sketch @t1mdurden @T910317 @tachyon-r @tainguyenphat74 @TakeshiTGAL
@TalOrbach @Tamaz-sujashvili @tancou @tangtaizong666 @tank321 @TaoMasterCoder @tarkilhk @TartarusLabs
@tauros1983 @taxbax @taylorwtf @tcconnally @teakesdev @teamster22 @teddychenfeiyang-png @Teknium @temalo
@ten-ltw @ten82e @tensorbit89-netizen @teo-nex @terminamike666 @Test @teyrebaz33 @TFOjojo @tfournet
@th3sull1van @thanhan-a17 @tharanee-bit @thatssoheil @the-cybersapien @the-repeter @The-x-35 @the3asic
@TheAirick @TheAngryPit @thebergerking91 @thebizfixer @TheBlueHouse75 @thedavidweng @thefiredev-cloud
@TheGardenGallery @thegoodguysla @thegreatesthoneybee @thejpanganiban @TheNeuralVault @theone139344
@thepetenetwork @ThereWasAYang @TheSmokeDev @TheStreamCode @thetasigmaio @thinkingsheep @thomasscottbeck-sudo
@ThyFriendlyFox @tian0cai @tianma-if @tianyu-liu @ticketclose-wontfix @tigercraft4 @Tigrannnnnnn @tim404x
@TimeLord2010 @timknip @timmy Cheng @timoteo7 @timrichardson @timsmykov @tinetwork @tjboudreaux @tjp2021
@tk-pkm111 @tkaufmann @tkwong @tmaarcxs @tmchow @tmielika @to-na @toannhu96 @tobenwarrior @tokou @tomatau
@tomekdot @Tomenatore @tomkubik @tommulkins @Tommy00748 @tomqiaozc @tony-simons-aiowa @Tormen28 @Tosko4
@Totoro-qaq @tpte @trac3r726 @Tranquil-Flow @tranquilflow @treatux @trevorgordon981 @trevornk @Treytucker05
@trippyogi @Triquetra @trnorga @Trounaldo @TroyMitchell911 @truenorth-lj @trwpang @tsemana @tsubasakong
@tsuk1nose @Tsuki-hash @tt-a1i @tuancookiez-hub @TUARAN @tudorpastorglencore @tugrulguner @tupe12334
@TurgayAcar49 @TurgutKural @turingcat @tutan0558 @TutkuEroglu @tw2818 @twe-cloud @twidtwid @twotnguyen @txhno
@tylerbrevard @tylman @tymrtn @tynamite @ubxty @Udjin79 @Ufonik88 @UfukNode @ugoenyioha @UltraInstinct0x
@umi008 @UnathiCodex @underthestars-zhy @UniversePeak @unmodeled-tyler @unsupportedpastels @usvimal
@uttkarsh-26 @uzairchhapra @uzaylisak @uzunkuyruk @vadimcomanescu @vaibhavarora14 @valda @valentt @valerdoskin
@vbcherepanov @vectorcmd @vectorcontext @vectorforge22 @VencentSoliman @Versun @vet402 @vgarlu @VGFreakXBL
@victor-kyriazakos @victorftrdba @victorGPT @victorjmilagres @VictorTran1023 @VictorYXL @vikyw89 @vilkasdev
@virattt @virtaava @Vissirexa @vitobotta @vjpixel @vKongv @vladzablotski-adaption @Vocllum @vollegrewar
@vominh1919 @VrtxOmega @vsd2807 @Vsemagush @vshulcz @vykhovanets @w-up @wa1939 @WadydX @walidboulanouar @wang2
@wangs1203 @wangtaotaotao95 @wanliqin @warabe1122 @warmheartrobot @waroffchange @WAXLYY @wdelarme @wdon
@web3blind @webdevfrancisco @webdevtodayjason @webtecnica @webtoolbox @Weidows @weidzhou @weltmaister
@文峰城 @wesleysimplicio @westkite1201 @whirmill @WhiteWorld @whoisdhana @whyyagswhy @WideLee
@will-lynas @willardgmoore @willfrombr @Willhong @williamtwomey @willy-scr @wilsen0 @wliu-dev @wnuuee1
@woaini30050 @wodesiku @WolframRavenwolf @WolftacDigital @woota @wooyongbin3-cpu @woriwka-ai @wollldz
@woshicby @wpengpeng168 @wukang Cheng1994 @WuKongAI-CMU @wuli666 @WuTianyi123 @wuwuzhijing @wxy-nlp @Wysie
@WYSTAF @wz-heng @wzslr321 @x1am1 @x7peeps @xiajiahang @xiaodu55 @XiaoXiao0221 @xiaoxinova @xiaoyaner0201
@xielevi @xinbenlv @Xingkai98 @Xipong @Xixiartemis @xjsns346 @xkam7ar @xm Huangzhijun-hue @Xowiek @xoy8n @xpk84
@xraysight @xrbs00 @XtremXpert @xuezhaolan @xushibo @Xuxyyy @xuyuann @xxxigm @xy200303 @xy952666680 @xz-dev
@y0shua1ee @Yabuku-xD @yagna @yahuo @yaleman @YanSte @yaojiejia @yaozhen @yashiels @yatesjalex @yavarb @ydmw74
@yehuosi @yellowdog01 @ygd58 @Yi Cheng-Mark @yingliang-zhang @yinkev @YLChen-007 @ymat19 @ymybxx @yoannes
@YonganZhang @Yong Cheng123 @yongli-abc @yoniebans @yotamleo @youcefcherid @Youssef @youssefea @youtiaowei
@yoyodine-industries @ypwcharles @yu-xin-c @YUAN @yuan Chenglu @yubingz @yuchenwang3 @yuexiongHNU
@yuga-hashimoto @YuhGuan @Yun。 @yungchentang @yunke98888-gif @yunze7373 @YuShu @YusukeOshima-5564 @YuYigeng
@yuzilongleif-collab @ywatanabe1989 @yy28 @yyovil @yyq4193 @yyzquwu @yzy806806 @z0zero @z23 @zaclanzon
@zagiscoming @zakiyys @zakolenko @zanzipanzi @zapabob @zay @zaze-oO @zccyman @zebadee2kk @Zechereh @zeejaytan
@zengzheqing @zenplace-system @ZenSchema @Zeraphim @zerone0x @ZeroOttantotto @Zeus-Deus @zhangxicen @zhao0112
@ZHCHJ888 @ZHJay @zhongwater123 @zhongyueming1121 @Zhou-Ruichen @zhouhe-xydt @Zhuzewen2023 @ZidoCode
@zihaofeng2001 @zilvinasu @zindar @ZishiW @ziwon @zjc-enigma @zmlgit @zohuyhieuzo03 @zoser69 @zqy1-1
@zrmnelson @zsuroy @ZT-Toolkit @zufeyan @zwcf5200 @zxcasongs @zxdvd @zyz619963502zyz @zzpigpinggai @zzragida
@zzz163519

另外：@Leanolf (Leanolf+212960991)、@ayushnangia (55181294+ayushnangia)、@DavidMetcalfe (dmetcalfe+hermes)、benoit.lavenier、Adrian Scott、Ahmed Khaled、Alberto Leal、Alex Ferrari、Andrei Ignat、Animesh Mishra、Bosco Barros、Chris DePuy、d4rk pr10r、Daniel van Strien、Dave Bunn、Dogila 开发者、Eduardo Christopher López Acevedo、George Shalhoub、Hermes Agent / OpenAI Codex / gpt-6-sol、Isaac Dobson、JP Lew、Konrad Czarski-Bonanaty、Lars van der Zande、leo yang、Lucas Nicolas、Magnus Ahmad、Marco Rutsch、Mark Sheppard、Martin Gontovnikas、Matt McFarland、Michał Dziwisz、namhyuk kim、Nikolas de Hor、Nils (Norya)、Paul Bergeron、Paulo Henrique、Robert Montelongo、Sebastian Bochna、Siddharth Balyan、Teo、Timo Karp、Val Alexander、wave-2 工人 D、Wes Hermes、Yannick Stephan、Yash Jain、你的名字、Ömer Faruk奥库穆斯，史官。

---

**完整 Changelog**：[v2026.8.31...v0.22.0](https://github.com/NousResearch/hermes-agent/compare/v2026.8.31...v0.22.0)

*此版本汇总并完整记录了 v0.21.1–v0.21.7 补丁版本（9 月 7 日至 10 月 11 日），其注释已推迟到此次要版本。*

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.22.0` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
