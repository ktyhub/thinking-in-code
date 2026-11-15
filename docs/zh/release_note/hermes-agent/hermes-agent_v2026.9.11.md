---
title: "hermes-agent v2026.9.11"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v2026.9.11"
version: "v2026.9.11"
published: "2026-09-11"
type: "patch"
lang: "zh"
---

# hermes-agent v2026.9.11

# Hermes Agent v0.21.2 (v2026.9.11) — state.db 补丁发布

**发布日期：** 2026 年 9 月 11 日

> 补丁发布。 v0.21.0 对会话存储的连接处理进行了大量重写，对于某些安装，它使 `state.db` 变得脆弱：第二个写入者取消彼此的锁，健康的数据库报告为损坏，一个坏行杀死了 `sessions list`。此版本结束了该课程，并汇总了自 v0.21.1 以来四天内登陆 `main` 的所有其他内容。

## 关于此版本

在提交 `04dd80a977f40b05e5b2054111747af07a61886a` 时测量，自 v0.21.1 以来的窗口包含 **947 个非合并提交**，涉及 **1,869 个更改文件** (+182,504 / −15,564) 和 **312 个合并 PR**。 **140 名贡献者**出现在提交、共同作者预告片或抢救积分中。

## ✨ 亮点

### state.db 可靠性活动（6 个 PR，已解决 44 个问题）

如果您的 `state.db` 在 0.21.0 之后损坏，那么这个版本适合您。六项 PR 解决根本原因而不是症状：

- **不再有第二个写入器。** 配置文件网关每 5 秒将托管房间状态写入 *root* `state.db` 中；仪表板在启动时打开一个可写句柄； cron 的生命周期防护在实时数据库上执行了原始 `open()`（这取消了网关的 POSIX 锁 - 经典的“如何破坏 SQLite”配方）； `doctor --fix` 将在实时支架下检查点。所有四个都消失了：托管房间位于 `shared-state.db`，仪表板首先以只读方式打开，警卫通过跟踪的连接注册表，而 `doctor --fix` 拒绝它无法证明安全的检查点。 （#108076 - 打捞#103489 @RikETS，#102682 @JoaoMarcos44，#108012 @Halldrix，#105428 @TaoMasterCoder）
- **健康的 WAL 数据库停止楔入。** OpenZFS `(deleted)` 目录项和与 `append_message` 竞争的 `close()` 都在完美的商店中生成了粘性的 `DeletedWalGenerationError`；读取池是在未确认的日志模式下分发的； WSL2 上的瞬态 `disk I/O error` 在第一次尝试时杀死了 `get_session`；并且在锁定已清除后，会广播“state.db 已锁定”横幅。 （#108082 — 打捞#107411 @chelsealong、#105578 @ca-shrimp、#105711 @gaoanze888、#106958 @nikkoxgonzales；合着@QDung210、@fangliquanflq、@Sahilvishnaliya）
- **FTS 损坏不再杀死你的回合。** 全文搜索索引范围内的错误被归类为整个文件损坏并失败关闭对话。现在是 `fts_index`：搜索降级，索引稍后重建，记录存储未受影响。同样的 PR：医生诚实地命名结构损坏而不是“FTS 写入损坏”，FTS 写入探针捕获在每次写入失败时通过每次检查的过时索引形状，`.recover` 输出不再在孤立的 FTS5 影子表上启动失败，标头归零的数据库恢复而不是被拒绝，仪表板分析轮询器每天返回 503 而不是 520K 回溯。 (#108130 — 打捞#97843 @SulthanZahran1 + #97841 @Finn763, #88604 #56824 #103657 @liuhao1024, #106890 @nftpoetrist, #103321 @jangomango76, #91413 @leegunwoo98, #102808 @TaoMasterCoder）
- **一个损坏的行不再杀死 `sessions list`、导出或见解。** 用于使整个列表崩溃的 TEXT 时间戳或 `1e30` 纪元；畸形标记 JSON 导致 `json_extract` 崩溃；超过 999 个 ID 崩溃了批量删除/修剪。每个读取器上都有一个 `coerce_epoch()` 帮助程序（坏行会渲染 `?`，并带有命名会话的警告）、一个 `json_valid` 防护、IN-列表分块和批量导出水合作用。 （#108086 — 打捞#106071 @Xipong、#101726 @efe-arv、#94701 @liuhao1024、#102679 @mssteuer、#100658 @Mi55ed）
- **会话永远不会绑定到或读取另一个配置文件的数据库。** 桌面启动后端可能会在 HERMES_HOME 覆盖竞赛下将自身固定到错误的配置文件的 `state.db` ； `session_search`通过裸ID默默地扫描了每一份个人资料并返回了别人的成绩单；恢复指导指向错误的文件；配置文件删除使句柄保持打开状态（WinError 32）。 （#108074 — 打捞#102534 @HexLab98，#106975 @Sora-bluesky）
- **当没有任何内容需要写入时，打开 state.db 不再采用写入锁定。** 在繁忙的网关后面打开存储的一次性 `hermes` 进程停滞了 4-20 秒，然后失败并显示“数据库已锁定”。现在是0.01。 （＃108067 - 打捞＃106751 @kshitijk4poor，＃101881 @jonpol01）

同样在同一子系统的窗口中：新的 `state.db` 在拥有重建锁之前不再发布 FTS 表（#106311），丢失 WAL 生成的句柄不再在关闭时检查过时的帧（#106315，#106840），被破坏的第一页与其 WAL 隔离而不是破坏性地打开（#106587），WAL 设置留下了无法验证的数据库未触及（#106568），隔离句柄拒绝 VACUUM/FTS 优化（#106343，#106349）。其中大部分是由 @kshitijk4poor 挽救的社区诊断。

### 多配置文件隔离强化

针对在一个网关（多路复用）下运行多个配置文件的安装进行的一系列修复：辅助配置文件机器人不再继承默认配置文件的允许列表 (#107616)，适配器不再将凭据发送到默认配置文件的主机 (#107617)，stdio MCP 服务器不再接收默认配置文件的保管库机密 (#107630)，`MEDIA:` 传送不再附加另一个配置文件的 `.env` / `auth.json` / `state.db` (#107609)，飞书驱动回调和 `/p/<profile>/` webhook 回复保留在路由配置文件上 (#107620，#107626)，辅助配置文件不再从每个进程备忘录中获取同级的 Nous 持有者 (#107611)。

### 桌面后端衍生风暴结束

机器人模式用于在启动时和每个名册勾选时为每个配置文件生成或拨打一个后端，悬停机器人名册会在每行生成一个后端，并且配置文件切换可能会生成重复的主后端。 （#108069、#108107、#108118、#108134、#107969、#108112 — 抢救#102512、#103634、#103399、#107997 等，作者：@kshitijk4poor）

### 密码盲凭证库

代理现在可以登录、付款并填写来自 1Password、Bitwarden 或当地 Hermes 金库的地址，而无需看到任何秘密；双因素代码来自保存的验证器密钥或在用户 UI 中要求（#106480、#107585）。私人 git 插件使用用户存储的凭据进行安装 (#106981)。

### 插件目录和一个插件页面
一个精心策划的 SHA 固定插件索引，包含 CLI、准入 CI、文档和仪表板 (#69446)；桌面获得一个插件页面，拥有代理 + 桌面插件、安装、目录和每次提交固定（#107212、#107314、#107321）；无线电作为选择加入的 SDK 插件提供（#107072）。

### Nous 免费套餐和引导式首次启动

开箱即用的免费推理和连接器，只需一个登录命令（#105258、#105260）、聊天中的 `/login`（#105261）、可通过 `tool_search` 搜索的连接器工具（Gmail、Linear、Notion 等）（#106842），以及 `HERMES_GUEST_ONBOARDING=1` 背后的引导式首次启动（#107697、#107958） ＃107985，＃108211）。

## 🐛 值得注意的错误修复

**网关和平台**
- config.yaml 中的裸 `display:` 密钥不再在每次网关转弯时崩溃（#106305）；被平台拒绝的排队通道决赛被记录并重新发送（#106316）；停止的 WebSocket 发送不再阻塞每个后续事件 (#106581)；第一轮不再等待 Python 工具链探针 (#106556)。
- 当 `bots_require_mention` 开启时，Telegram 机器人必须 @mention，打破机器人到机器人的循环 (#106534)； Matrix 渲染 LaTeX (#106515)； Signal 渲染降价表 (#106538)； WhatsApp 回复查看一次消息时保留其报价 (#106541)；仅媒体回复报告到处都是成功（#106557）。

**提供商和路由**
- `/model` 和辅助汽车永远不会向您未选择的提供商收取费用（#107366）；永远不要自动切换到您没有凭据的提供商（#107281）； Bedrock Claude/Converse/Mantle 模型在 `/model` 中幸存，回退和恢复（#107621、#107658）；强制实施基岩护栏（#107815）。
- Codex：补丁预算图像 400 缩小并重试（#106525）；未授权的主要 + 后备不再振荡（#106549）； Azure Foundry 重播推理拒绝分类和修剪 (#106718 @erosika)。 MCP OAuth 刷新不再擦除刷新令牌 (#106185)。 Anthropic clients 只发送一份凭证 (#107978)。
- Nous Portal 和 OpenRouter 选择器上的 DeepSeek V4.1 Flash (#107489)；通过 OpenAI 和 FAL 的 GPT 图像 2.5 (#105988)；原生 Anthropic 选择器上的 Opus 5 / Fable 5.1 (#106636 @xxxigm)。

**代理循环和压缩**
- 一个被阻止的定期回调不再停止租约刷新（#106308）；中转 `/steer` 作为其自己的用户行保留（#106317、#106344）；本地推理内存上限拒绝会退缩，而不是压缩历史记录 (#106307)；部分流结束回合后上下文溢出 (#106567)；当提示填满窗口时，长度继续停止（#106571）；辅助重试时压缩不再默默地超时（#106866）； `model_thresholds` 密钥可以是提供商范围内的 (#108061)。
- Surface switch (Desktop↔TUI) 不再重建系统提示并破坏提示缓存 (#105844)； CLI 保留了 `api_content` sidecar，因此缓存可以在早期持久化中幸存下来 (#105842)。

**CLI、TUI 和桌面**
- `hermes -z --resume` 继续会话（#106313）； Shift+字母和 Cmd+Shift+Z 在扩展键终端上工作（#90674 @francip，#105493）； `browser_exec` 超时杀死整个进程树（#106589）；更新检查每天轮询 GitHub API 一次，而不是每 30 分钟进行一次 git 抓取 (#107648)； `hermes update` 指出了真正的原因，并且无法挂起停止的获取 (#108053)。
- 桌面：UI 语言在更新重新启动后仍然存在（#106476），过期的 OAuth 授权可以获得一 click 重新登录（#106965），HUD 模式再次显示记录并始终返回窗口（#107491，#107423），后端在其桌面父级死亡时退出（#107977），Windows 更新停止报告错误故障（#106175，#107183），WSLg 在 Windows GPU 上渲染（#106528），使用从仪表板移植的 QR 进行 Telegram 快速设置（#107242），以及大约 60 个主要来自 @OutThisLife 和 @kshitijk4poor 的桌面修复。

**Cron 和看板**
- 关闭勾选“立即运行”不再取消下一次计划的运行（#106306）；被杀死的手动运行不再阻塞下一个运行 5 分钟（#106733）；一次射击改为重复射击（#106532）；未固定的作业在其创建快照模型上运行（#106499）； `--clone-all` 不再复制 cron 作业 (#106478)； `kanban promote` 拒绝撤销父母（#106550）； `kanban_request_review` 拒绝未知的审阅者资料 (#106547)。

**工具和内存**
- stdio MCP 服务器在调用过程中死亡不再重播工具调用 (#106546)；仅技能背景审查无法再删除内存条目（#106310）； mem0 内存不再下降长回合（#106542）； `tool_search` 不返回任何内容，而是共享一个单词的五个工具 (#106676)；远程 NOPASSWD sudo 不再提示 (#107939)；默认情况下不再激活 RSS 和 Reddit 阅读 (#105873)。

**客房服务**
- `config.yaml` 备份位于一个有界的 `backups/config/` 目录中 (#106388)； `hermes backup` 保留最新的 3 个拉链 (#106455)； `hermes setup --reset` 备份真实配置 (#106453)；在 dpaste 回退中，`debug share` 保留时间缩短至 1 天 (#106531)。

## 👥 贡献者

感谢 **140 名贡献者**，他们的提交、共同创作的预告片和抢救的 PR 都出现在这个窗口中。

**state.db 活动 - 挽救公关作者：** @RikETS、@JoaoMarcos44、@Halldrix、@TaoMasterCoder、@chelsealong、@ca-shrimp、@gaoanze888、@nikkoxgonzales、@QDung210、@fangliquanflq、@Sahilvishnaliya、@kshitijk4poor、@jonpol01、@HexLab98、 @Sora-bluesky、@Xipong、@efe-arv、@liuhao1024、@mssteuer、@Mi55ed、@SulthanZahran1、@Finn763、@nftpoetrist、@jangomango76、@leegunwoo98、@ggoldani。

**state.db 活动 - 问题记者**（这些线程中的取证通常比修复更好）：@thedigitalcarpenterdad、@Rroven、@aoeman84、@StephanRosin、@rubensandrade-sketch、@wanliqin、@chenzheshushi-commits、@CarlosReyesPena、@revazone、@reservassai-art、@Cuttingwater、@soroush5、 @e-shizz、@shobhit-87labs、@shivanathd、@hoelzl、@i8ei、@Ace-Kelly、@YinsenWANG、@zbabiarz、@Sravanjangam、@0gl20shk0sbt36、@RChina、@bronder、@ccwssy、@bottenbenny 和 @Hitman117890 的 Discord 报告启动了该活动关闭。
**窗口中的每个人（按字母顺序排列）：** @0genlab、@0xalydev、@100yenadmin、@1052326311、@686f6c61、@69k4xmdfm2-blip、@abundantbeing、@Adolanium、@Ahmett101、@albert748、@AlexxRussell、@alt-glitch、 @auroracapital、@austinpickett、@babatorik、@Bartok9、@benbarclay、@bennybuoy、@brian717、@briandevans、@buihongduc132、@ca-shrimp、@cervantesh、@Cesar-Azeredo、@ChanPark03、@chelsealong、@ckomma、@ClintonEmok、 @crazyief、@ctaylor86、@dalzio、@DavidMetcalfe、@Drexuxux、@edosulai、@efe-arv、@emozilla、@ericmaddox、@erosika、@ethernet8023、@everm1nd、@FalconOrtiz、@fangliquanflq、@Finn763、@FirmamentalSpring、@francip、@g3org3yo、 @gaoanze888、@ggoldani、@Halldrix、@haydster7、@hbizi、@helix4u、@HexLab98、@huklaa、@IAvecilla、@infinitycrew39、@jahfaliabdulrahman-dev、@jangomango76、@JoaoMarcos44、@jonpol01、@jwilson411、@KeyArgo、 @kokhlo、@KoNit-K、@kshitijk4poor、@kyssta-exe、@leegunwoo98、@lesterlxt、@liuhao1024、@Mabolla、@manuelschipper、@MaxFreedomPollard、@mearls0501、@mengyuyuan、@Mi55ed、@MiseHinoha、@mjshorty、@mkrb84、 @moisesvalero、@moken627-hub、@mssteuer、@nateEc、@nftpoetrist、@nickseelert、@nikkoxgonzales、@notwitcheer、@onuraycicek、@outdog-hwh、@OutThisLife、@philmossman、@phuongvm、@pierrenode、@portavales、@PRATHAMESH75、@QDung210、 @rewbs、@RikETS、@romanovzky、@ryantuc、@Sahilvishnaliya、@salch-cred、@sgarrand、@shannonsands、@simpolism、@Solitud1nem、@somewheresy、@Sora-bluesky、@sprmn24、@squevo、@StellarisW、@Stoltemberg、@SulthanZahran1、@Svector-anu、 @szicely、@TaoMasterCoder、@teknium1、@ten82e、@thedavidweng、@tkaufmann、@Totoro-qaq、@Tranquil-Flow、@tuancookiez-hub、@TurgutKural、@ugoenyioha、@unsupportedpastels、@victor-kyriazakos、@webtecnica、@wliu-dev、 @wukang Cheng1994、@Xipong、@Xixiartemis、@xkam7ar、@xxxigm、@yavarb、@yoniebans、@Youssef、@yoyodine-industries、@yuan Chenglu、@YuhGuan、@Zeus-Deus。

另：尤瑟夫.

## 更新中

- 现有安装：`hermes update`
- 全新安装：`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`
- 托管部署应使用新标签通过其部署工具进行更新。
- 如果您的`state.db`已经被0.21.0/0.21.1损坏：先运行`hermes doctor`；现在，它可以正确命名结构损坏与索引损坏，并在重建不够时指向 `hermes sessions recover --inspect-only`（轮廓固定）。

**完整 Changelog:** [v2026.9.7...v2026.9.11](https://github.com/NousResearch/hermes-agent/compare/v2026.9.7...v2026.9.11)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v2026.9.11` · 📅 发布：2026-09-11 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
