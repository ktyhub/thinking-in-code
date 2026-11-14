---
title: "orca v1.4.255"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.255"
version: "v1.4.255"
published: "2026-11-09"
type: "patch"
lang: "zh"
---

# orca v1.4.255

## 更快的会话搜索、手机上的代理以及更流畅的聊天切换 ✨

我们快速连续发布了两个版本：昨天的 1.4.254 和今天的 1.4.255。请参阅 [1.4.254 release notes](https://github.com/stablyai/orca/releases/tag/v1.4.254) 了解 Git Graph、聊天分叉、设备上电话听写、更具弹性的移动工作以及配对和 trust 改进。

少一点等待，多一点流动。此更新使大型会话历史记录更易于搜索，将您的代理集中在手机上，并简化了切换帐户、模型和工作区的日常工作。

- ⚡ **查找过去的工作而不减慢速度：** 会话历史记录搜索在应用程序的主线程中运行，在您键入时保持结果可见，并在刷新后重新启动后立即显示您的最后一个列表。搜索也适用于 SSH 和远程服务器主机。
- 📱 **您的客服人员，一起在您的手机上：** 新的“客服人员”选项卡列出了您连接的桌面上的客服人员。将它们标记为已读或从列表中清除它们，并使用桌面提供的活动状态。当您重新打开应用程序时，保存的任务列表和主机标签会更快显示。
- 💬 **保持聊天畅通无阻：** 切换 Codex 帐户会将您打开的 Codex 聊天移动到您选择的帐户。分叉保留聊天历史记录，粘贴的富文本保留其链接，排队消息在重新启动后恢复。
- 🎛️ **选择设置的更清晰方式：** 代理速度现在只需一键即可打开，模型设置会打开并突出显示您当前的选择，并且搜索“codex”会将 Codex 代理置于其他代理的 Codex 命名模型之前 - 包括当您按 Enter 时。
- 🌳 **从您所在的位置做更多事情：** 从 Git Graph 签出、挑选或恢复提交。直接从聊天编辑器下的分支名称打开分支选择器，然后从更简单的空拆分窗格中选择下一步操作。

## 亮点

- **会话历史记录和性能：** 在工作线程中运行搜索时，大型历史记录保持响应。工作空间和项目过滤器查询自己的会话，未更改的历史记录行避免额外的渲染，搜索索引和配置文件保存减少磁盘工作。
- **聊天和代理：** 打开 Codex 聊天会跟随帐户切换，新安装的技能会在您的第一条消息之前出现在 Codex 的 `$` 菜单中，反重力聊天会显示已安装的技能。 OpenCode 2 从您选择的模型开始。清除聊天会立即隐藏旧的记录，失败的模型或工作更改会影响其消息而不是整个聊天。
- **电话和远程主机：** “代理”选项卡将跨桌面的活动集中到一处。通过预热，页面打开得更快，当 Git 更改时，Review 会刷新分支比较，并且文件预览恢复栏位于键盘上方。停滞的 LAN 重新连接可以回退到中继，并且当主机密钥未更改时，恢复的虚拟机将保持其设备配对。
- **工作区和源代码控制：** Git Graph 获得签出、挑选和恢复操作。您可以在删除父工作区时保留符合条件的子工作区，从空文件夹工作区为每个存储库创建工作树，并在已使用存储库名称时克隆到单独的文件夹中。侧边栏分隔器可靠地调整侧边栏的大小。
- **浏览器、编辑器和终端：** 远程浏览器选项卡显示网站图标、在新选项卡中打开的网站链接，并且 CLI 可以列出和重新加载已安装的浏览器扩展。 PDF 适合预览窗格的宽度。终端窗格会解释另一个窗口何时保持其大小并提供撤消它的方法。
- **日常修饰：** 长设置列表使用可搜索选择器，较旧的聊天消息显示日期，实时代理在未读过滤器中保持可见。此版本还修复了过时的浏览器、线性工具栏和使用工具提示显示，以及关闭日语 IME 后的第一个 Enter 按键。

**完整 Changelog:** https://github.com/stablyai/orca/compare/v1.4.254...v1.4.255

---

## 发生了什么变化
* @AmethystLiang 在 https://github.com/stablyai/orca/pull/39784 中提供更准确的聊天 ui 调用计数
*测试：删除https://github.com/stablyai/orca/pull/39797中@OrcaWin的988个低值测试
* feat(cli)：一个封闭工作空间规则，--environment local，可复制地址，以及@Jinwoo-H在https://github.com/stablyai/orca/pull/39733中的--parent-environment
* 修复（移动）：在 https://github.com/stablyai/orca/pull/39809 中 @nwparker 重新安装聊天后防止重复排队发送
* 在 https://github.com/stablyai/orca/pull/39168 中通过 @brennanb2025 分叉时保留聊天记录
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39801 中简化删除工作区对话框
* 使用 Appearance 的可搜索选择器来获取 https://github.com/stablyai/orca/pull/39800 中 @nwparker 的终端主题
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39813 中阻止工作单元拆解控制台竞赛失败的单元碎片
* 测试：删除 https://github.com/stablyai/orca/pull/39814 中 @OrcaWin 的 154 个低值测试和冗余中继检查点
* 在 https://github.com/stablyai/orca/pull/39234 中通过 @brennanb2025 分割聊天 UI 窗格时打开登陆而不是终端
* 修复（agent-hooks）：让最后状态节流应用于 https://github.com/stablyai/orca/pull/39826 中@nwparker 的例程挂钩事件
* 在 https://github.com/stablyai/orca/pull/39815 中使用 @nwparker 的可搜索选择器来获取长设置列表
* 修复（shell）：当 cwd 在 https://github.com/stablyai/orca/pull/39820 中具有 @nwparker 的匹配条目时，保留用户的 claude/codex 函数
* 修复（bitbucket）：在 https://github.com/stablyai/orca/pull/39118 中 @1aifanatic 在连接对话框中列出所需的 API 令牌范围
*修复（设置）：在https://github.com/stablyai/orca/pull/39199中由@luisgonzaleznf按一种类型比例排列代理的启动字段
* 修复（侧边栏）：当 @yohangwak 在 https://github.com/stablyai/orca/pull/39230 中删除活动工作区时，不要唤醒兄弟姐妹隐藏睡眠保持隐藏
* 通过 https://github.com/stablyai/orca/pull/39575 中的 @brennanb2025 从空文件夹工作区为每个存储库创建一个工作树
* 修复（打包）：通过 https://github.com/stablyai/orca/pull/39602 中的 @mancunianez 在 /bin/sh 中运行终端主机 PTY 探针
* Git Graph：由 @brennanb2025 在 https://github.com/stablyai/orca/pull/39069 中提交操作（签出、挑选、恢复）
* 修复（反重力）：通过 https://github.com/stablyai/orca/pull/39398 中的 @Manho 通过 antigravity-acp/acp_token.json 检测 Orca 聊天登录
*测试：删除https://github.com/stablyai/orca/pull/39829中@OrcaWin的712个低值测试
* 修复（浏览器）：通过 @RoastFried-RF 在 https://github.com/stablyai/orca/pull/39319 中保留本机弹出窗口最小内容大小和第一个 Windows 固定错误
* 测试：将 GitHub 和 GitLab 模拟从运行时 setup.spec 中分离出来，以修复 @nwparker 在 https://github.com/stablyai/orca/pull/39837 中的主要 lint
* perf(orchestration)：后退失败的联合中继，而不是通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39734 中每秒轮询
* perf(skills)：在行走之前读取技能文件夹，由 @OrcaWin 在 https://github.com/stablyai/orca/pull/39836 中一次读取三个
* perf(test): 默认检查：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39849 中将单元测试更改为两个 Vitest 工作人员
* perf(mobile)：在https://github.com/stablyai/orca/pull/39851中@OrcaWin打开第一页之前，在iOS上预热WebKit的进程
* perf(main): 重叠独立的 fs 探针；跳过 @nwparker 在 https://github.com/stablyai/orca/pull/39729 中的每个条目副本
*测试：删除https://github.com/stablyai/orca/pull/39850中@OrcaWin的231个低值测试
* perf(codex)：通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39805 中桥接帐户历史记录和异步目录差异
*测试：删除https://github.com/stablyai/orca/pull/39853中@OrcaWin的128个低值测试
* 修复（hermes）：允许状态钩子中删除的cwd，这样pre_tool_call就不会被https://github.com/stablyai/orca/pull/39833中的@nwparker阻止
* 修复（ime）：在 https://github.com/stablyai/orca/pull/39834 中通过 @nwparker 用 Hankaku/Zenkaku 关闭日语 IME 后不要吞下第一个 Enter
*测试：删除https://github.com/stablyai/orca/pull/39858中@OrcaWin的四个冗余终端测试
* 测试：删除 https://github.com/stablyai/orca/pull/39859 中 @OrcaWin 的 95 个低值渲染器测试
* 测试：删除https://github.com/stablyai/orca/pull/39866中@OrcaWin的27个低值挂钩和终端测试
* 修复（codex）：不计算https://github.com/stablyai/orca/pull/39862中@OrcaWin桥接的悬空链接进入目标
* 修复（窗口）：取消退出提示会清除退出锁存器，因此以后的关闭不会被 https://github.com/stablyai/orca/pull/39597 中的 @tomarai85 视为退出
* 杂务（lint）：oxlint 1.91，廉价的性能/正确性规则，@nwparker 在 https://github.com/stablyai/orca/pull/39730 中的返回等待修复
* 测试：删除 https://github.com/stablyai/orca/pull/39871 中 @OrcaWin 的 14 个低值渲染器测试
* perf(tasks)：仅在https://github.com/stablyai/orca/pull/39860中由@OrcaWin在手机上查找GitLab评论查看器
* 重构（共享）：通过@nwparker在https://github.com/stablyai/orca/pull/39776中组织执行和自动化定义所有者
* 测试：将抓取目标悬停在 https://github.com/stablyai/orca/pull/39868 中 @OrcaWin 的分割抓取 e2e 中的 clicking 之前
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39875中的5个低价值代理启动测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39881中的6个低价值简历和生命周期测试
* 重构（移动）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39846 中组织配对、会话、RPC 和主机所有者
*测试：删除https://github.com/stablyai/orca/pull/39885中@OrcaWin的6个低值渲染器测试
* 重构（技能）：https://github.com/stablyai/orca/pull/39874 中 @nwparker 的组发现、安装、云和转移所有者
* 测试：删除 https://github.com/stablyai/orca/pull/39889 中 @OrcaWin 的 23 个低值钩子测试
* 测试：删除 https://github.com/stablyai/orca/pull/39892 中 @OrcaWin 的 13 个低值钩子测试
* 测试：删除 https://github.com/stablyai/orca/pull/39893 中 @OrcaWin 的 11 个低值代理状态测试
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/39896 中的 7 个低价值工作区存储测试
* 重构（acp）：https://github.com/stablyai/orca/pull/39897 中 @nwparker 的组传输、会话、启动和时间线所有者
*测试：删除https://github.com/stablyai/orca/pull/39899中@OrcaWin的8个低值技能测试
*测试：删除https://github.com/stablyai/orca/pull/39903中@OrcaWin的5个低值技能测试
* 重构（技能）：在 https://github.com/stablyai/orca/pull/39902 中取消 @nwparker 的仅测试删除服务
*测试：删除https://github.com/stablyai/orca/pull/39911中@OrcaWin的12个低值技能测试
* 按照 @brennanb2025 在 https://github.com/stablyai/orca/pull/39658 中的桌面设置，在桌面和手机上将 CI 结果显示为单行卡
* 从https://github.com/stablyai/orca/pull/39692中@brennanb2025的聊天编辑器下的分支名称中打开分支选择器
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/39569 中将搜索结果代理设置打开为悬停子菜单
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39922 中更新自述文件下载徽章
* 测试：删除 https://github.com/stablyai/orca/pull/39921 中 @OrcaWin 的 19 个低值技能和渲染器测试
*修复（github）：当@brennanb2025在https://github.com/stablyai/orca/pull/39581中的速率限制缓存过期时，停止PR页面和GitHub请求永远挂起
* 修复（运行时）：在 https://github.com/stablyai/orca/pull/39681 中 @AmoabaKelvin 在退出时关闭其流之前发送终端的第一个屏幕
* feat(runtime)：当 git 状态发生变化时告诉手机 @AmoabaKelvin in https://github.com/stablyai/orca/pull/39672
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/39925中删除6个低值测试用例
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/39927中删除10个低价值移动测试用例
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39774 中降低模型选择器的最大高度
*壮举（运行时）：告诉手机@AmoabaKelvin在https://github.com/stablyai/orca/pull/39718中更改了哪些设置
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/39934中删除8个低值测试用例
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/39939中删除8个低价值移动测试用例
* 壮举（代理）：在 https://github.com/stablyai/orca/pull/39243 中通过 @AmoabaKelvin 与配对手机共享桌面代理列表
* 壮举（移动）：添加一个代理选项卡，列出 https://github.com/stablyai/orca/pull/39244 中的@AmoabaKelvin 桌面上的每个代理
*修复（ai-vault）：通过更广泛的FTS合并和更少的真空来减少会话搜索索引磁盘写入，由@AmoabaKelvin在https://github.com/stablyai/orca/pull/39314中进行
* 修复（ai-vault）：在 https://github.com/stablyai/orca/pull/39325 中输入 @AmoabaKelvin 的会话历史记录时，将搜索结果保留在屏幕上
* 修复（会话历史记录）：在 https://github.com/stablyai/orca/pull/39936 中 @AmoabaKelvin 的范围恢复中匹配更多 Claude 和 Pi 文件夹名称
* 修复（toasts）：将 toast 操作按钮与 @brennanb2025 在 https://github.com/stablyai/orca/pull/39935 中的 Orca 按钮相匹配
*壮举（移动）：标记代理从https://github.com/stablyai/orca/pull/39245中的@AmoabaKelvin的“代理”选项卡中读取并清除它们
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/39941中删除17个低价值移动测试用例
* 在 https://github.com/stablyai/orca/pull/39250 中显示 @brennanb2025 获取的项目中的私人 GitHub 附件图像
* 让本机聊天完成 https://github.com/stablyai/orca/pull/38727 中@brennanb2025 缓慢的代理启动
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39947中的9个低值IPC和SQLite测试
* perf(ai-vault)：跳过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39944 中重新渲染未更改的会话历史记录行
* 修复（native-chat）：从https://github.com/stablyai/orca/pull/39950中的@AmoabaKelvin的文件链接菜单中删除“在新选项卡中打开”
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39953中的6个低值查询和缓存测试
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39937 中由具体所有者组织 SSH 和托管服务器模块
* 允许在 https://github.com/stablyai/orca/pull/39956 中通过 @AmethystLiang 从活动栏中禁用插件
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39957中的92个低价值移动测试
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39955中的61个低价值移动测试
* perf(runtime)：通过头索引删除旧终端恢复输出，而不是通过https://github.com/stablyai/orca/pull/39931中的@AmoabaKelvin进行拼接
* perf(mobile)：在 https://github.com/stablyai/orca/pull/39948 中@AmoabaKelvin 启动之间在手机上保留任务列表
* 修复（移动）：当 https://github.com/stablyai/orca/pull/39929 中的 @AmoabaKelvin 更改工作树行时刷新本机主页
* 测试：删除https://github.com/stablyai/orca/pull/39961中@OrcaWin的26个低价值移动测试
* perf(notebook)：在https://github.com/stablyai/orca/pull/39888中通过@OrcaWin绑定来自噪声单元的保留输出
*测试：删除https://github.com/stablyai/orca/pull/39963中@OrcaWin的21个低值CLI和GitHub测试
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/39965 中由 @AmoabaKelvin 重新启动而恢复中断的聊天后发送排队消息
*测试：删除https://github.com/stablyai/orca/pull/39968中@OrcaWin的15个低值SSH测试
* 重构：通过 https://github.com/stablyai/orca/pull/39969 中的 @nwparker 组织代理挂钩安装和服务器所有者
* 打开代理设置，并在 https://github.com/stablyai/orca/pull/39923 中使用 @brennanb2025 突出显示的当前模型
*测试：删除2个低价值金库并重新启动@OrcaWin在https://github.com/stablyai/orca/pull/39970中的测试
* 杂务（棘轮）：在 Electron main 上添加同步 fs 调用的 PR 失败，或者 @brennanb2025 在 https://github.com/stablyai/orca/pull/39930 中的新 setInterval 轮询
* 测试（perf）：在 https://github.com/stablyai/orca/pull/39954 中由 @brennanb2025 渲染和识别代理状态、侧边栏、选项卡条和聊天的合约
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39975 中组织浏览器扩展请求和规则所有者
* 杂务（棘轮）：将同步 fs 基线指向 @OrcaWin 在 https://github.com/stablyai/orca/pull/39986 中移动的代理挂钩文件
* 测试：删除 https://github.com/stablyai/orca/pull/39979 中 @OrcaWin 的 18 个低价值 SSH 和托管服务器测试
* 修复（终端）：在 https://github.com/stablyai/orca/pull/39981 中通过@OrcaWin 在保留的重播帧上保留子像素文本
* 测试（e2e）：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39982 中更新五个陈旧或活跃的终端和代理规范
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/39994中的31个低值性能、SSH和图像测试
* perf(profile-state)：将大域存储为每个条目行，以便仅重写 @nwparker 在 https://github.com/stablyai/orca/pull/39974 中更改的内容
* 修复（claude）：在 https://github.com/stablyai/orca/pull/39978 中 @brennanb2025 的每个个人资料中匹配 Claude Code 主题之前先询问
* 测试(e2e)：遵循 https://github.com/stablyai/orca/pull/39983 中@OrcaWin 的设置审核对话框、GitLab 工作项列表、聊天登录探针和入职 trust 提示
* 修复（浏览器）：验证 https://github.com/stablyai/orca/pull/39984 中的 @OrcaWin 在 dom-ready 时无法读取其 ID 的来宾
* 修复（编辑器）：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39985 中防止后期自动对焦框架移动 Markdown 插入符
* 修复（运行时）：当https://github.com/stablyai/orca/pull/39972中的@OrcaWin用户数据太长时，将本地RPC套接字移动到短路径
* perf(session-history)：在https://github.com/stablyai/orca/pull/39971中@AmoabaKelvin从他们自己的会话中回答工作空间和项目
* perf(agent-hooks)：每隔几分钟由https://github.com/stablyai/orca/pull/39995中的@nwparker将代理状态保存为每窗格SQLite行
* perf(persistence)：每隔几分钟由 @nwparker 在 https://github.com/stablyai/orca/pull/39993 中将 GitHub 缓存保存为每条目 SQLite 行
* 修复（运行时）：在服务重启后保持恢复的选项卡处于选中状态；通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39980 中更新过时的配对 e2e 规范
*修复（编排）：拒绝回复已完成的工人报告，并命名https://github.com/stablyai/orca/pull/39802中@Jinwoo-H的后续工作
* test(ai-vault): 恢复 @OrcaWin 在 https://github.com/stablyai/orca/pull/40005 中合并的仅作用域案例使用的 sameFolder 帮助程序
* 在 https://github.com/stablyai/orca/pull/40001 中显示 @AmethystLiang 的旧聊天消息的日期
* 中继边缘：https://github.com/stablyai/orca/pull/40010 中的@nwparker 在不唤醒对象的情况下应答了主机发送的保活状态
* 修复（编排）：在 https://github.com/stablyai/orca/pull/39962 中 @Jinwoo-H 进行任何等待之前，拒绝在繁忙的终端上启动工作程序
* 测试：删除 https://github.com/stablyai/orca/pull/39998 中 @OrcaWin 的 54 个低值代理挂钩、SSH 和 PTY 测试
* 通过https://github.com/stablyai/orca/pull/40011中的@AmethystLiang更新日志效率
* 修复（编排）：在 https://github.com/stablyai/orca/pull/37732 中 @gsxdsm 运行时重新启动后唤醒空闲的 Hermes 工作人员
* 测试：删除 https://github.com/stablyai/orca/pull/40015 中 @OrcaWin 的 23 个低值缓存、模型选择器和 SSH 测试
* 在https://github.com/stablyai/orca/pull/39795中通过@AmethystLiang删除父级时允许保留子级工作区
* 修复（活动）：通过 https://github.com/stablyai/orca/pull/40016 中的@AmethystLiang 使实时代理在未读过滤器中保持可见
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/40019 中的 @AmethystLiang 在新选项卡中打开网站链接
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39996 中组织浏览器来宾生命周期所有者
* 防止后台代理在 https://github.com/stablyai/orca/pull/39778 中通过 @AmethystLiang 错误标记终端选项卡
* 测试（运行时）：在 https://github.com/stablyai/orca/pull/39246 中覆盖 @nwparker 共享一个运行时终端的多个 clients
* 修复（native-chat）：在https://github.com/stablyai/orca/pull/39213中@AmoabaKelvin粘贴富文本时保留链接，并在粘贴URL时链接选定的单词
* 测试：删除 https://github.com/stablyai/orca/pull/40021 中 @OrcaWin 的 19 个低价值聊天、库存和 SSH 测试
* perf(persistence): 将通知解除和模型目录存储为 https://github.com/stablyai/orca/pull/39997 中 @nwparker 的 SQLite 行
* 在 https://github.com/stablyai/orca/pull/39804 中@Jinwoo-H 为聊天模式编排工作人员展示诚实的活跃度
* feat(vm-recipes)：https://github.com/stablyai/orca/pull/39238 中 @nwparker 的配方生命周期命令的可选每步超时
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/40029中的37个低值PTY和浏览器测试
* 测试（笔记本）：当 @OrcaWin 在 https://github.com/stablyai/orca/pull/40031 中保存读取到达写入中间时，继续轮询
* 使用 @brennanb2025 在 https://github.com/stablyai/orca/pull/39991 中选择的模型启动 OpenCode 2
* 重构（浏览器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/40002 中组织自动化、cookie 和会话策略所有者
* Fork 复制了 @brennanb2025 在 https://github.com/stablyai/orca/pull/39823 中的原始聊天回复
* 修复（远程运行时）：在 https://github.com/stablyai/orca/pull/39225 中 @nwparker 未更改其主机密钥时，保留已恢复的虚拟机的设备配对
*测试：删除https://github.com/stablyai/orca/pull/40035中@OrcaWin的10个低值测试和三个套件
* 修复（源代码控制）：将 Git Graph 按钮与 https://github.com/stablyai/orca/pull/40025 中 @brennanb2025 的提交标头操作相匹配
* feat(terminal)：解释并撤消https://github.com/stablyai/orca/pull/39249中@nwparker以另一个窗口大小保存的窗格
* 在 https://github.com/stablyai/orca/pull/40027 的 @brennanb2025 的反重力聊天中显示已安装的技能
* 重构（设置）：在 https://github.com/stablyai/orca/pull/40037 中使用 @nwparker 的具体移动配对和状态所有者
* 修复（vm-recipes）：在创建运行之前记录每个虚拟机，这样退出或崩溃就不会通过https://github.com/stablyai/orca/pull/39241中的@nwparker泄漏它
* 修复（移动）：当会话中 LAN 重拨停止时，比赛中继（STA-14363），作者：https://github.com/stablyai/orca/pull/40026 中的 @Jinwoo-H
* 当https://github.com/stablyai/orca/pull/39217中的@nwparker更改ORCA_INSTANCE_ID时，轮换服务器配对标识
* 重构（sqlite）：在https://github.com/stablyai/orca/pull/40028中@nwparker在SQLite支持的缓存之间共享一行缓存
* 修复（工作树）：保留 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/40008 中退休的长路径和 WSL 根 Claude 历史名称
*修复（会话历史记录）：重新启动后立即显示最后一个列表，同时由https://github.com/stablyai/orca/pull/39380中的@AmoabaKelvin重新扫描
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/40045 中更新自述文件下载徽章
* 重构（浏览器）：将命令和合约连接到https://github.com/stablyai/orca/pull/40042中@nwparker定义的所有者
*测试：删除https://github.com/stablyai/orca/pull/40041中@OrcaWin的12个低值测试
* 在 https://github.com/stablyai/orca/pull/40043 中添加@AmethystLiang 受保护的遥测里程碑
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/40049 中的@AmoabaKelvin 在远程主机上运行的浏览器选项卡上显示站点图标
*测试：删除https://github.com/stablyai/orca/pull/40053中@OrcaWin的10个低值测试
* 保持会话历史记录对大型历史记录的响应：通过 https://github.com/stablyai/orca/pull/38945 中的 @brennanb2025 将会话搜索 SQLite 移至工作线程
* 重构（设置）：将 @nwparker 与所有者共享的主机功能和终端目录放置在 https://github.com/stablyai/orca/pull/40051 中
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/40054 中 @AmoabaKelvin 发送 /clear 时隐藏旧记录
* perf(terminal)：在https://github.com/stablyai/orca/pull/40009中@brennanb2025每次停车时索引一次睡眠记录和启动代理选项卡
* perf(terminal)：每张地图对公园豁免睡眠记录进行一次分组；通过 https://github.com/stablyai/orca/pull/40014 中的 @brennanb2025 按叶子索引捕获的窗格
* 杂务（克劳德）：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/39940 中将克劳德代理 SDK 更新为 0.3.318
*修复（codex）：识别@brennanb2025在https://github.com/stablyai/orca/pull/39943中通过Codex 0.167添加的16个应用程序服务器通知
* 测试：删除 https://github.com/stablyai/orca/pull/40060 中 @OrcaWin 的低值烟雾脚本、验证器和基准测试
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/40059 中组织提供者和存储库设置所有者
* 当 Orca 无法证明终端已停止时，让“继续”在聊天 UI 中切换，并通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/40033 中开始未保存的对话
* 未答复的模型或工作更改仅会失败其消息，并且每个代理进程结束都会由 @brennanb2025 在 https://github.com/stablyai/orca/pull/40038 中记录其原因
* 测试：跨单元文件共享工作模块缓存，可以通过 https://github.com/stablyai/orca/pull/40067 中的 @OrcaWin 在文件之间重置
* 重构（移动）：将 shell 的 Web 视图移动到屏幕上由 https://github.com/stablyai/orca/pull/39946 中的 @AmoabaKelvin 保存的文档对象中
*壮举（cli）：列出并重新加载@ggpepperstech在https://github.com/stablyai/orca/pull/39613中安装的浏览器扩展
* 壮举（查看器）：通过 https://github.com/stablyai/orca/pull/39966 中的 @AmoabaKelvin 将 PDF 预览调整为窗格宽度
* perf(mobile)：在显示主页时预热一页，因此打开页面会跳过 https://github.com/stablyai/orca/pull/40018 中 @AmoabaKelvin 启动的 WebView
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/40012 中 @AmoabaKelvin 的第一条消息之前，在 Codex $ 菜单中显示新安装的技能
* 修复（移动版）：翻译 Markdown 阅读器的状态标签并删除 https://github.com/stablyai/orca/pull/40068 中 @AmoabaKelvin 未使用的阅读器
* 修复（移动版）：https://github.com/stablyai/orca/pull/40075 中 @AmoabaKelvin 将文件预览恢复栏提升至键盘上方
* 修复：修复主会话注册表导入并隔离 https://github.com/stablyai/orca/pull/40074 中 @AmoabaKelvin 的弹出 Electron 固定装置
* 修复（移动）：在 https://github.com/stablyai/orca/pull/40086 中 @AmoabaKelvin 重新启动时，从手机商店绘制主机标签和中继服务器行
* 修复（移动）：当桌面报告 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/40088 中的 git 更改时，刷新 Review 的分支比较
* 修复（克隆）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/40066 中使用存储库名称时，让克隆使用自己的文件夹
* 测试：隔离观察者容量状态并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/40076 中删除 RPC 调用库存
*修复（服务）：在身份重置中保留崩溃通知；在 https://github.com/stablyai/orca/pull/40081 中删除 @nwparker 的杂散暂存身份文件
* perf(mobile)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/40096 中存储的主机列表查询读取新工作区主机标签
* 在 https://github.com/stablyai/orca/pull/40094 中@AmethystLiang 改变资格时保护儿童
* 构建：为 https://github.com/stablyai/orca/pull/39811 中的 @OrcaWin 的渲染器和 Web 构建启用 React 编译器
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/40070 中组织设置和定义所有者的帐户
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/40072中删除45个低价值套件和冗余案例
* perf(native-chat)：给旧代理 1 秒的时间退出 /clear by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40103

### 精挑细选的修复

*修复（agent-picker）：在https://github.com/stablyai/orca/pull/39806中@nwparker设置的其他代理模型设置之前列出搜索命名的代理
* 将座席速度显示为一键式，而不是 https://github.com/stablyai/orca/pull/40052 中 @brennanb2025 的标准/快速切换器
* 修复（侧边栏）：让分隔线调整大小，而不是通过 https://github.com/stablyai/orca/pull/40087 中的 @nwparker 滚动工作区列表
* feat(tab-group)：将空的分割窗格重新设计为https://github.com/stablyai/orca/pull/40113中@AmoabaKelvin的操作列表
* 修复（orcad）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/40133 中将会话搜索工作人员条目发送到远程主机
* 修复（会话搜索）：将工具行清除绑定到 @nwparker 在 https://github.com/stablyai/orca/pull/40134 中高于持续高水位线的 rowids
* 修复（native-chat）：将打开的 Codex 聊天移动到您在 https://github.com/stablyai/orca/pull/40148 中由 @AmoabaKelvin 切换到的帐户
* 修复：过时的渲染在 https://github.com/stablyai/orca/pull/40162 中的 @brennanb2025 的浏览器运行按钮、线性工具栏和使用工具提示中引入了 React Compiler
* 修复https://github.com/stablyai/orca/pull/40173中@brennanb2025的速度按钮未知、Flex和聊天选项转义情况

## 新贡献者
* @luisgonzaleznf 在 https://github.com/stablyai/orca/pull/39199 中做出了第一个贡献
* @yohangwak 在 https://github.com/stablyai/orca/pull/39230 中做出了第一个贡献
* @mancunianez 在 https://github.com/stablyai/orca/pull/39602 中做出了第一个贡献
* @RoastFried-RF 在 https://github.com/stablyai/orca/pull/39319 中做出了他们的第一个贡献
* @ggpepperstech 在 https://github.com/stablyai/orca/pull/39613 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.254...v1.4.255

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.255` · 📅 发布：2026-11-09 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.255)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
