---
title: "orca v1.4.254"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.254"
version: "v1.4.254"
published: "2026-11-08"
type: "patch"
lang: "zh"
---

# orca v1.4.254

## Git Graph、电话听写和聊天中的附带问题 ✨

- 🌳 **查看整个存储库：** 新的 Git Graph 选项卡显示本地和远程分支和标签，以及每个提交的详细信息和更改的文件。文件夹工作区现在获得源代码管理，每个附加存储库都有一张卡，源代码管理中的分支名称会切换或创建一个分支。
- 💬 **在不破坏聊天的情况下提问：** 在聊天 UI 中，`/btw` 在聊天旁边的分支中提出一个附带问题，同时原始问题继续运行，而 `/fork` 从最新的响应中分支出来。当 CI 通过或失败时，打开或推送拉取请求的聊天会显示一条短线。
- 🎙️ **从任何地方听写：** 手机可以将语音转换为设备上的文本（iOS 26 或更高版本的 iPhone 以及 Android），并以计算机作为后备。计算机、手机和网络 client 可以同时听写，并且设备上的听写在自己的进程中运行，因此语音引擎崩溃或挂起不再导致 Orca 停机。
- 📱 **一部可以继续工作的手机：** 当桌面无法访问时，聊天会发送队列，并在桌面返回时按顺序出去。聊天草稿、附件、未保存的文件编辑和自动化草稿在应用程序被杀死后仍然存在，并且屏幕会从手机已有的内容重新打开。
- ⌨️ **Codex 帐户不再出现输入延迟：** Orca 在帐户之间链接 Codex 历史记录时，输入可能会出现延迟。该工作不再阻止该应用程序。远程终端还立即发送单独的击键并从远程主机读取压缩输出。
- 🔐 **更安全的配对和 trust：** 一旦使用它的设备保存自己的登录信息，配对代码就会停止工作，桌面和 CLI 与远程服务器的连接使用较新的加密，并且 `orca serve` 拒绝来自公共互联网地址的连接，除非有理由允许它们。 Orca 在为代理进行 trust 之前，会询问每个新存储库一次。
- 🎨 **让 Orca 成为您的：** 导入您自己的应用程序图标，让主题插件播放循环背景视频并提供自己的字体，并阅读标题卡中的设置。如果您同意，Claude Code 可以匹配您的 Orca 终端主题。
- 🤖 **更好的代理支持：** 反重力聊天可以在主机自己的 agy 上运行，包括完全访问聊天，并且 Muse 在状态栏中显示其订阅配额。

## 亮点

- **聊天：** `/btw` 在叉子中提出一个附带问题，而 `/fork` 从最新的回复中叉出一个问题，在叉子打开时带有一个旋转器。聊天显示他们打开或推送的拉取请求的 CI 结果，并且每条等待消息、命令和引导现在都位于一个有序队列中，您可以从中移动、删除或发送。
- **电话：** 在桌面离线时发送，在应用程序终止时保留草稿、附件、文件编辑和自动化草稿，并在刷新时查看工作区列表、会话选项卡和内存审阅。大型文件夹可通过“搜索全部”一次加载 500 个条目，“审阅”会预取下一个和上一个文件，标题下的细线会显示缓存数据何时刷新。
- **听写：** 手机可以在设备上转录，并且每个设备都可以同时听写。在桌面上，语音模型会在您第一次听写之前加载（新设置选择何时卸载它），听写在一分钟静默后停止并保留您所说的内容，听写文本在其前面有一个空格，而无法插入的文本将被复制。配对的网络 client 可以通过主机进行指令。
- **源代码控制和编辑器：** Git Graph、文件夹工作区的源代码控制以及源代码控制标题中的就地分支选择器。全新和删除的文件显示一种干净的色调，Markdown 在插件主题下保留其语法颜色，HTML 预览在编辑器自己的选项卡组中打开，当图像太大时，复制为 PNG 表示而不是声称已复制。
- **代理和帐户：** Codex 帐户历史记录输入延迟已修复。登录后，反重力聊天可以在主机 agy 上运行，AI Vault 中的反重力会话可以显示其工件文件夹，Muse 显示其配额并在后台子代理运行时保持窗格正常工作。新选项卡启动菜单更简单，代理选择器从其子菜单中查找模型，并且在重新启动后代理被告知完成原始任务。
- **远程主机：** 远程终端更快地响应击键，远程主机上的桌面聊天仅传输新文本，当 Orca 窗口可见但未聚焦时，轮询速度会减慢。托管 SSH 服务器会在 ProxyCommand 登录缓慢后以及更多服务器失效的情况下恢复，并且托管 SSH 主机的自动化会转到其自己的 Orca 服务器。
- **外观和感觉：** 导入自定义应用程序图标，使用主题菜单和更清晰的分段控件，并使用网络字体和插件中的循环背景视频。主题插件还可以设置聊天文本和选择的样式，现在在黑暗模式下更容易阅读。文件和浏览器选项卡适合其标题，因此在选项卡条滚动之前更适合。

## 兼容性和升级说明

- **Claude Code 主题匹配：** Orca 现在可以将 Claude Code 的主题与您的 Orca 终端主题匹配。所有人都关闭了，包括新的个人资料。下次克劳德·科德运行时，奥卡偶尔会问一次。除非您接受，否则 `~/.claude/settings.json` 中的任何内容都不会发生变化，并且您可以稍后在“设置”>“外观”>“终端”中更改它。
- **搜索快捷方式：** 新的 Mac 配置文件使用 Cmd+K 打开搜索，并且没有用于清除终端的默认快捷方式。新的 Windows 和 Linux 配置文件使用 Ctrl+K。现有配置文件保留其快捷方式，包括自定义和禁用的快捷方式。
- **代理文件夹 trust：** 第一次在新存储库中启动代理时，Orca 会询问是否要 trust 存储库或让每个代理自行询问。您已经使用的存储库将像以前一样继续工作，没有任何提示。您可以在存储库的设置中更改答案。
- **一次性配对码：** 当更新的手机、浏览器或 Orca 与更新的桌面配对时，它会切换到自己的登录方式，并且其使用的二维码或链接将停止工作。运行旧版应用程序的设备仍可继续工作，并且“设置”会标记仍使用原始配对代码或旧版加密的设备，以便您知道要更新哪些设备。
- **`orca serve` 和公共地址：** `orca serve` 默认接受本地主机、LAN 和 Tailscale 连接，并且仅在有理由时才接受公共互联网地址。现有设置保持连接。
- **语音模型记忆：** 打开语音后，Orca 现在会在您第一次听写之前加载设备上的语音模型。使用“设置”>“语音”中的新“卸载语音模型”设置可以更快地释放该内存。桌面听写现在也会在一分钟的沉默后自行停止。
- **Windows 终端字体粗细：** Windows 上的终端文本现在默认使用字体的常规粗细，而不是 Windows 绘制为 SemiBold 的 Medium。 macOS 和 Linux 没有变化。
- **新选项卡启动菜单：** 权限和参数不再出现在新选项卡代理启动菜单中。它们仍然来自代理设置。
- **入门：** 入门中的反重力安装按钮消失了。 Antigravity 具有与其他代理相同的安装说明链接。

---

## 产品体验

### 本机聊天和代理

*在分叉中提出附带问题，从最新回复中分叉，在聊天中查看 CI 结果并继续按顺序等待消息。*

* /btw 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/39268 聊天旁边的一个分支中提出了一个附带问题
* 添加 /fork 以从 @brennanb2025 在 https://github.com/stablyai/orca/pull/39257 的最新回复中分叉聊天
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/39255 中打开 fork 时，在本机聊天 Fork 按钮上显示一个微调器
* 保留 @brennanb2025 在 https://github.com/stablyai/orca/pull/39577 中选择的 /fork 后输入的文本
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/39020 打开或推送拉取请求的聊天中显示 CI 结果
* 在 https://github.com/stablyai/orca/pull/39271 中继续等待@brennanb2025 在一个有序队列中输入聊天内容
* 在 https://github.com/stablyai/orca/pull/38999 中使用@brennanb2025 的聊天卡共享隐藏按钮
* 切勿在 https://github.com/stablyai/orca/pull/39214 中 @brennanb2025 的对话周围绘制聚焦环
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/39223 中加载工作选项时，保持重新打开的 OpenCode 聊天发送
* 将降价渲染为半粗体粗体，就像 https://github.com/stablyai/orca/pull/39377 中@nwparker 的聊天标题一样
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39420 中改进聊天 ui 的推出
* 在 https://github.com/stablyai/orca/pull/39647 中@nwparker 在每个流表面上逐块渲染流 Markdown

### 代理和账户

*在 Codex 历史记录跨帐户链接时输入无延迟，在您自己的 agy 上运行反重力聊天，查看 Muse 配额并可选择将 Claude Code 与您的终端主题匹配。*

* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39805 中桥接帐户历史记录和异步目录差异
* 不要将 https://github.com/stablyai/orca/pull/39862 中 @OrcaWin 桥接的悬空链接计入目标
* 让最后状态节流应用于 https://github.com/stablyai/orca/pull/39826 中 @nwparker 的常规挂钩事件
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/39006 中兼容时，在主机的 agy acp 上运行聊天
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39471 中的主机 agy 上运行完全访问聊天
* 在状态栏中显示 Muse 订阅配额 by @nwparker in https://github.com/stablyai/orca/pull/38907
* 将 Claude Code 的主题与 @nwparker 在 https://github.com/stablyai/orca/pull/39447 中的 Orca 终端主题相匹配
* 在 https://github.com/stablyai/orca/pull/39978 中 @brennanb2025 的每个个人资料中匹配 Claude Code 主题之前先询问
* 后退失败的联合中继，而不是在 https://github.com/stablyai/orca/pull/39734 中通过 @OrcaWin 每秒轮询
* 当代理启动无法准备其工作区时，https://github.com/stablyai/orca/pull/37220 中的 @brennanb2025 显示一个可操作的错误
* Hooks 轮流承认领导者的最终答复；启动器在 https://github.com/stablyai/orca/pull/38239 中记录了 @Jinwoo-H 未传递的提示和经过验证的退出
* 在 https://github.com/stablyai/orca/pull/38394 中的 @Jinwoo-H 中查看提示的轮次开始，而儿童工作让代理很忙
* 拒绝 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38460 中模糊的编排检查调用者
* 在 https://github.com/stablyai/orca/pull/38475 中保留 @Jinwoo-H 启动时终端死机的工作人员的输出
* 在 https://github.com/stablyai/orca/pull/38484 中 @Jinwoo-H 每条协调员消息报告一次空闲工人
* 写入工作区 trust，光标代理在 https://github.com/stablyai/orca/pull/38807 中由 @Jackylee1992 读取它
* 停止轮询 https://github.com/stablyai/orca/pull/38902 中@nwparker 已静默的 Muse 会话日志
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/38911 中生成后台子代理时，保持窗格正常工作
* @brennanb2025 在 https://github.com/stablyai/orca/pull/39248 中重新设计反重力聊天登录设置
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/39279 中简化新标签代理启动菜单
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39295 中显示反重力会话的工件文件夹
* 持有一位 agy 作曲家，其草稿读起来就像 https://github.com/stablyai/orca/pull/39296 中 @nwparker 的编辑模式
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/39301 中完成后台命令时，保持反重力运行正常运行
* 停止在 https://github.com/stablyai/orca/pull/39302 中扫描@AmoabaKelvin 的每会话文件夹中的 Claude 成绩单
* 在 https://github.com/stablyai/orca/pull/39317 中 @nwparker 准备好 Copilot 的作曲家后，立即粘贴 Copilot 启动草稿
* https://github.com/stablyai/orca/pull/39322中的@AmethystLiang重启后恢复原来未完成的任务
* https://github.com/stablyai/orca/pull/39349 中 @AmethystLiang 的 Condense 重启继续提示
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39392 中让 Gemini Enterprise 聊天远离主持人 agy
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39402 中也为桌面 IPC 缓存 OMP 和 Grok 模型发现
* 在 https://github.com/stablyai/orca/pull/39444 中 @AmethystLiang 刷新列表时搜索后备模型并显示缓存模型
* 仅当主机的登录在 https://github.com/stablyai/orca/pull/39452 中由 @nwparker 提供会话时才选择主机的 agy
* 说明为什么下载的聊天运行时未能通过 @nwparker 在 https://github.com/stablyai/orca/pull/39456 中进行启动检查
* 在行走前阅读技能文件夹，由 @OrcaWin 在 https://github.com/stablyai/orca/pull/39836 中一次阅读三遍

### 听写和语音

*同时从多个设备对手机本身进行口述，并在语音引擎崩溃时保持 Orca 运行。*

* 在手机上转录听写，用计算机作为后备 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39386
* 使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39410 中的 Apple 设备上语音模型在 iPhone 上转录听写
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39428 中在 Android 手机上转录听写
* 让电脑、手机和网络同时听写 client @AmoabaKelvin in https://github.com/stablyai/orca/pull/39305
* 在自己的进程中运行设备上的听写，这样引擎崩溃或挂起就无法让 Orca 瘫痪 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39297
* 在第一次听写之前加载语音模型，并通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39327 中进行卸载设置
* 默哀一分钟后停止桌面听写 @AmoabaKelvin in https://github.com/stablyai/orca/pull/39131
* 将现有文本中的口述文本隔开，并复制 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39111 中无法插入的内容
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39126 中的主机在配对网络 client 中进行口述
* 在 https://github.com/stablyai/orca/pull/39142 中的 @AmoabaKelvin 使听写在运行缓慢或睡眠的桌面上可靠地启动
* 在 https://github.com/stablyai/orca/pull/39290 中使用 @AmoabaKelvin 的抗混叠滤波器在 AudioWorklet 中将桌面听写重新采样至 16 kHz
* 每 150 毫秒发送一次电话听写音频，最多有四个块在飞行中，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39341 中发送
* 将桌面听写音频直接发送到语音进程，而不是通过https://github.com/stablyai/orca/pull/39346中的@AmoabaKelvin的主进程
* 准确的卸载设置描述，可在 https://github.com/stablyai/orca/pull/39347 中通过@AmoabaKelvin 在语音关闭时进行设置
* 迄今为止的号码电话听写文本，因此较旧的回复无法替换 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39396 中的新文本
* 在 https://github.com/stablyai/orca/pull/39430 中 @AmoabaKelvin 的语音引擎崩溃后停止显示“Orca 意外关闭”
* 将缓慢的 Android 语音服务报告为繁忙，https://github.com/stablyai/orca/pull/39476 中的 @AmoabaKelvin 不支持
* 显示电话语音下载大小并删除已取消会话的迟到文本，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39479 中提供
* 保持 iPhone 听写文本修订在 https://github.com/stablyai/orca/pull/39481 中@AmoabaKelvin 的会话中不断增加
* 将缓慢的电话语音服务视为繁忙，https://github.com/stablyai/orca/pull/39489 中的 @AmoabaKelvin 不支持
* 在 https://github.com/stablyai/orca/pull/39492 中通过@AmoabaKelvin 在通话、闹钟或离开应用程序时完成 Android 听写
* 仅显示英语的电话语音下载大小，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/39496

### 电话和配对设备

*在桌面离开时排队聊天发送，在应用程序终止时保留草稿和编辑，并从手机已有的屏幕中打开屏幕。*

* 在 https://github.com/stablyai/orca/pull/39423 中 @AmoabaKelvin 在桌面离线时队列聊天发送
* 在 https://github.com/stablyai/orca/pull/39809 中 @nwparker 重新安装聊天后防止重复排队发送
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39342 中保留跨应用程序杀戮的聊天草稿、附件和未发送消息
* 在 https://github.com/stablyai/orca/pull/39710 中 @AmoabaKelvin 杀死应用程序后，提供恢复未保存的文件和 Markdown 编辑的功能
* 在 https://github.com/stablyai/orca/pull/39683 中保持 @AmoabaKelvin 的杀戮自动化草稿
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39719 中启动之间保留手机上的屏幕数据
* 让页面通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39147 中读写设备存储
* 使用会话加载新选项卡代理列表，并通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39148 中的“修复”标签共享它
* xterm 在 https://github.com/stablyai/orca/pull/39151 中通过 @AmoabaKelvin 解析后确认终端输出
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39152 中打开聊天后立即显示模型选择器的模型
* 从 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39156 中已收到的电话终端中恢复电话终端
* 在 https://github.com/stablyai/orca/pull/39158 中使用 @AmoabaKelvin 的最后一个选项卡条打开一个会话
* 使用 @AmoabaKelvin 已在 https://github.com/stablyai/orca/pull/39159 中加载的更改数据打开审核
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39165 加入 Wi-Fi 后立即返回 LAN
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39170 中刷新缓存数据时，在标题下显示一条细刷新线
* 首先渲染缓存的页面构建，仅在 https://github.com/stablyai/orca/pull/39174 中的 @AmoabaKelvin 做出连接判断后才进行对话
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39175 中重新打开内存中的文件夹
* 通过 https://github.com/stablyai/orca/pull/39182 中的 @AmoabaKelvin 将页面包修剪回原来的预算
* 在 https://github.com/stablyai/orca/pull/39183 中使用 @AmoabaKelvin 的仅限移动设备的聊天合并并显示时间
* 跳过 https://github.com/stablyai/orca/pull/39184 中 @AmoabaKelvin 页面启动时的 Suspense 回退
* 将截屏视频帧归功于 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39189 中的手机
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39209 中回复流时，保持停放的聊天阅读器稳定
* 在 https://github.com/stablyai/orca/pull/39210 中 @AmoabaKelvin 停止每次更改时重新获取隐藏的主机列表
* 电话聊天：空的 Cmd/Ctrl+Enter 会引导第一个排队的消息，按住 Cmd/Ctrl 会显示 @brennanb2025 在 https://github.com/stablyai/orca/pull/39215 中它将执行的操作
* 停止重新计算 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39216 中的每次提交的聊天行键和投影
* 通过 https://github.com/stablyai/orca/pull/39258 中 @AmoabaKelvin 发送的未经确认的聊天带回附件
* 当其他人在 https://github.com/stablyai/orca/pull/39259 中 @AmoabaKelvin 发布相同的文本时，保留未经确认的任务评论草稿
* 当屏幕打开或应用程序返回时重新读取源代码控制设置（@AmoabaKelvin in https://github.com/stablyai/orca/pull/39266）
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39313 中的设备存储保留 TanStack 查询
* 将页面包的小共享块合并为一个，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39343 中完成
* 在 https://github.com/stablyai/orca/pull/39345 中的 @AmoabaKelvin 中重用自动化编辑器中的连接状态和聊天功能检查
* 在 https://github.com/stablyai/orca/pull/39350 中 @AmoabaKelvin 失败或快速工作树切换后重试更改分支比较
* 在 https://github.com/stablyai/orca/pull/39355 中预取 @AmoabaKelvin 审阅中的下一个和上一个文件
* 停止在窗格上打开的会话，以免页面出现故障，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/39357
* 在 https://github.com/stablyai/orca/pull/39359 中，@nwparker 为列表屏幕的创建按钮提供深色模式的重音填充
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39379 中进行聊天之前，让模型药丸进行选择
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39387 中从记忆中重新打开代理会话历史记录
* 阻止错误的 Wi-Fi 到达并更新 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39391 中的中继门文本
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39403 中对保留回复、每次聊天缩放和流式数学进行聊天跟进
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39408 中确保设备存储的大小计算和页面写入安全
* 告诉隐藏的 Android 页面，它被 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39409 中隐藏
* 打开一个会话，读取一个终端列表并在 https://github.com/stablyai/orca/pull/39412 中的 @AmoabaKelvin 的缓存选项卡下加载正文
* 手机在后台回收其 WebView 后保留页面 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39415
* 仅在 https://github.com/stablyai/orca/pull/39419 中 @AmoabaKelvin 判定连接后才重播页面的流
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39438 中对手机上的大文件夹进行分页，显示 500 个以上内容并搜索全部内容
* 在 https://github.com/stablyai/orca/pull/39448 中@AmoabaKelvin 在桌面离线时处理重命名和工作区列表
* 显示内存中的工作区列表并在 https://github.com/stablyai/orca/pull/39453 中 @AmoabaKelvin 的桌面更改上刷新它
* 在桌面离线时将草稿保存到手机，@AmoabaKelvin in https://github.com/stablyai/orca/pull/39464
* 在 https://github.com/stablyai/orca/pull/39470 中 @AmoabaKelvin 的后期读取和帐户切换中保留保存的模型列表
* 在 https://github.com/stablyai/orca/pull/39474 中由 @AmoabaKelvin 打开主机文档中的跳转返回和通知
* 停止保存 https://github.com/stablyai/orca/pull/39622 中 @AmoabaKelvin 在聊天第一轮后发送的读取中的模型列表
* 仅勾选主机列表上的代理行，并在 https://github.com/stablyai/orca/pull/39636 中 @AmoabaKelvin 的民意调查中保留存储库查找
* 重新探测空的“+”代理列表并通过 https://github.com/stablyai/orca/pull/39651 中的@AmoabaKelvin 导出工作表状态
* 在client事件流结束后重新订阅主页和后续偏好由https://github.com/stablyai/orca/pull/39655中的@AmoabaKelvin
* 当桌面报告更改时停止自动轮询 @AmoabaKelvin in https://github.com/stablyai/orca/pull/39664
* 确认 clientMessageId 在 https://github.com/stablyai/orca/pull/39667 中 @AmoabaKelvin 发送的结构化聊天记录的第一页
* 在 https://github.com/stablyai/orca/pull/39668 中 @AmoabaKelvin 刷新时显示每个过滤器的最后一个任务列表
* 当两个 shell 获取相同的构建和过时的缓存生成时页面更新（@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39677 中）
* 推送工作树行更改；主机列表民意调查成为 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39688 中的 10 秒后盾
* 在 https://github.com/stablyai/orca/pull/39702 中@AmoabaKelvin 从 W8b 的后续内容跳回
* 切换回终端而不重建它，作者：@AmoabaKelvin in https://github.com/stablyai/orca/pull/39705
* 打开 PR 选项卡及其最后状态，并仅刷新 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39709 中更改的写入内容
* 停止在https://github.com/stablyai/orca/pull/39727中@OrcaWin在共享读取器中加载不相关的RPC模式

### 终端、性能和更新

*绑定GPU终端内存，在Windows上使用真正的常规字体粗细，并阻止杂散颜色回复登陆shell。*

* 绑定 WebGL 图集页面并释放 @nwparker 在 https://github.com/stablyai/orca/pull/39715 中删除的页面纹理
* 在 Windows 上默认使用常规重量，作者为 https://github.com/stablyai/orca/pull/39457 中的 @nwparker
* 在 https://github.com/stablyai/orca/pull/37402 中@nwparker 询问的程序退出后，切勿在 shell 中输入颜色回复
* 在https://github.com/stablyai/orca/pull/38801中通过@OrcaWin导出状态而不是在效果（面板）中同步它
* 让默认匹配的单元格背景遵循 @nwparker 在 https://github.com/stablyai/orca/pull/39372 中的背景不透明度
* 在退出时保留终端的最后一个输出，并停止对 https://github.com/stablyai/orca/pull/39384 中的 @AmoabaKelvin 丢弃的截屏视频帧进行充电
* 在 @OrcaWin 在 https://github.com/stablyai/orca/pull/39445 中的每个资源管理器轮询中运行不带 shell 的 ps
* 停止在非 Windows DOM 终端上绘制两次繁忙的 TUI 框架，@nwparker 在 https://github.com/stablyai/orca/pull/39462 中
* 避免在 https://github.com/stablyai/orca/pull/39482 中重新解析 @nwparker 的 xterm 内联颜色样式
* 在 https://github.com/stablyai/orca/pull/39615 中保留 @nwparker 对 DOM 块字形的装饰
* 在 https://github.com/stablyai/orca/pull/39725 中停放并推迟恢复的普通外壳选项卡，这些选项卡的会话不再存在 @OrcaWin
* 重叠独立的 fs 探头；跳过 @nwparker 在 https://github.com/stablyai/orca/pull/39729 中的每个条目副本

### SSH 和远程服务器

*使远程终端和聊天更加灵敏，在更多情况下恢复托管 SSH 服务器，并为新的中继服务奠定基础。*

* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39663 中减少远程击键延迟和每帧复制
* 桌面和 CLI 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39659 中从远程主机读取压缩帧
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39657 中将附加内容（而不是整个项目）流式传输到远程主机上的桌面聊天
* 在配对主机上创建的工作区使用 @brennanb2025 在 https://github.com/stablyai/orca/pull/38670 中的主机启动设置
* 通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/39160 中将托管 SSH 主机自动化发送到其 Orca 服务器
* 在 https://github.com/stablyai/orca/pull/39332 中隐藏 @nwparker 从进程列表中保留的文件夹行
* @nwparker 在 https://github.com/stablyai/orca/pull/39362 中负责接力边缘的导演边缘队列（默认为黑色）
* Cloudflare Worker + Durable Objects 由 @nwparker 在 https://github.com/stablyai/orca/pull/39363 中中继
* 通过https://github.com/stablyai/orca/pull/39435中的@nwparker使旧的中继通道远离主机自己的SSH连接
* @nwparker 在 https://github.com/stablyai/orca/pull/39616 中将 zsh 的小写“没有这样的进程”视为死亡的托管服务器
* 在放弃受管理隧道的 ssh -L 转发（https://github.com/stablyai/orca/pull/39618 中的@nwparker）之前等待缓慢的 ProxyCommand 登录
* 一旦 https://github.com/stablyai/orca/pull/39621 中的 @nwparker 最后一个中继时代终端退出，即可完成向托管服务器的迁移
* https://github.com/stablyai/orca/pull/39650 中的 @nwparker 在 Orca 窗口可见但未聚焦时远程轮询速度缓慢
* @nwparker 在 https://github.com/stablyai/orca/pull/39660 中为可见但未聚焦的远程终端窗格合并输出时间更长
* 在 https://github.com/stablyai/orca/pull/39706 中通过 @nwparker 控制任何帧的活跃度、签名的排水操作、小容量警报
* 在 https://github.com/stablyai/orca/pull/39707 中 @nwparker 允许在中断时边缘导出跳过、群组退出排水清扫、区域范围帐户
* 在 https://github.com/stablyai/orca/pull/39735 中为慢速远程链接上的交替屏幕流选择自适应 ACK 调速，作者为 @nwparker
* 一次性管理令牌 (jti)、签名密钥轮换、@nwparker 在 https://github.com/stablyai/orca/pull/39738 中的身份验证刷新指标
* 重试失败的边缘栅栏、盖帽边缘在行锁下推送、边缘管理令牌上的 jti，作者：@nwparker，https://github.com/stablyai/orca/pull/39740
* 阻止恢复快照在慢速链接上堆积；让选择加入的节奏在 https://github.com/stablyai/orca/pull/39765 中的@nwparker 的洪水下进行
* 通过 https://github.com/stablyai/orca/pull/39772 中的 @nwparker 的 JWKS 中断、深度对象探测、队列规模警报来保持有效的桌面
* 运行时继电器边缘控制（kill/down/permille），跳过导出时没有设备复活，@nwparker 在 https://github.com/stablyai/orca/pull/39773 中更快疏散

### 配对、安全和 trust

*使配对代码一次性使用，将远程连接移至更新的加密，并在 trusting 代理存储库之前询问。*

* 让clients通过@nwparker在https://github.com/stablyai/orca/pull/38937中交换自己的代币的配对码
* 将扫描的配对码兑换成 @nwparker 在 https://github.com/stablyai/orca/pull/38938 中保存在手机上的令牌
* 浏览器保存的设备密钥会废弃 @nwparker 在 https://github.com/stablyai/orca/pull/38947 中提供的配对链接
* 添加服务器和orca环境添加通过https://github.com/stablyai/orca/pull/38948中的@nwparker交换自己的令牌的链接
* 显示哪些设备仍使用 https://github.com/stablyai/orca/pull/38949 中 @nwparker 的原始配对码登录
* 使用 E2EE v2 进行桌面和 CLI 到远程运行时的连接，作者为 https://github.com/stablyai/orca/pull/39218 中的 @nwparker
* 使用 E2EE v2 作为 https://github.com/stablyai/orca/pull/39220 中 @nwparker 纯 http 页面上的配对令牌
* 显示哪些配对设备仍使用 https://github.com/stablyai/orca/pull/39222 中 @nwparker 的旧加密方式登录
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/38946 中预 trusting 代理文件夹之前，每个存储库询问一次
* 拒绝 orca 服务上的公共源地址，除非 https://github.com/stablyai/orca/pull/39207 中的 @nwparker 允许
* 首次保存失败时保留登录设备；由 @nwparker 在 https://github.com/stablyai/orca/pull/39337 中报告降级锁定主机上的已撤销设备
* 记住批准的安装脚本；让自动化重新批准 @nwparker 在 https://github.com/stablyai/orca/pull/39354 中跳过的设置
* 在 https://github.com/stablyai/orca/pull/39436 中记住 @nwparker 的每个存储库最多 20 个已批准的设置脚本

### 源代码控制和编辑器

*在 Git Graph 选项卡中浏览整个存储库，在文件夹工作区中使用源代码管理并就地切换分支。*

* Git Graph 选项卡：https://github.com/stablyai/orca/pull/6746 中 @brennanb2025 的所有分支、提交详细信息和文件更改
* 在 https://github.com/stablyai/orca/pull/38831 中显示 @brennanb2025 的文件夹工作区的源代码管理
* 将每个文件夹源代码控制存储库显示为其自己的卡，由 @brennanb2025 在 https://github.com/stablyai/orca/pull/39277 中显示
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38836 中从源代码控制标头切换或创建分支
* 当图像太大而无法复制时，显示“Copied as PNG” by @brennanb2025 in https://github.com/stablyai/orca/pull/39260
* 对 https://github.com/stablyai/orca/pull/39358 中@nwparker 的全新文件和已删除文件保留一种色调
* 在https://github.com/stablyai/orca/pull/39367中@AmethystLiang在编辑器选项卡组中打开HTML预览
* 在 https://github.com/stablyai/orca/pull/39389 中 @nwparker 的插件主题下保留 Markdown 语法颜色
* 确认作者在 GitLab 和 GitHub REST 上的丢失任务评论，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39422 中读取
* 在https://github.com/stablyai/orca/pull/39442中通过@OrcaWin选择活动工作树的git状态和扩展目录
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39699 中的提交对缓存分支比较合并基础和前面/后面
* 使用 git 的未跟踪缓存并重用 @nwparker 在 https://github.com/stablyai/orca/pull/39721 中读取的状态中未更改的行统计信息
* 重用分支比较更改文件列表，而 https://github.com/stablyai/orca/pull/39747 中的 @nwparker 未更改其输入

### 工作区、侧边栏和选项卡

*使用 Cmd/Ctrl+K 搜索新配置文件、在组之间放置项目并在更整洁的菜单中查找工作区操作。*

* 使用 Cmd+K 在 https://github.com/stablyai/orca/pull/38884 中搜索 @AmethystLiang 的新 Mac 配置文件
* 使用 Ctrl+K 在 Windows 和 Linux 上搜索 https://github.com/stablyai/orca/pull/39767 中的@AmethystLiang
* 允许 https://github.com/stablyai/orca/pull/39768 中的 @AmethystLiang 在侧边栏中交错项目和组
* 在https://github.com/stablyai/orca/pull/39739中通过@AmethystLiang重新组织工作树上下文菜单
* 从主窗口启动桌面运行，而不是 https://github.com/stablyai/orca/pull/39247 中 @Jinwoo-H 的渲染器窗口
* 在 https://github.com/stablyai/orca/pull/39280 中@Jinwoo-H 在文件夹工作区卡上显示机器
* 恢复 @nwparker 在 https://github.com/stablyai/orca/pull/39282 中的载入反重力安装程序 (#39172)
* 将文件和浏览器选项卡调整到其内容，由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39328 中实现
* 使用 Ctrl+C 退出的运行被记录为中断，而不是由 https://github.com/stablyai/orca/pull/39397 中的 @Jinwoo-H 完成
* 在https://github.com/stablyai/orca/pull/39411中添加@AmethystLiang的微信社区二维码
* 在 https://github.com/stablyai/orca/pull/39638 中隐藏工作区卡上的合并徽章 @AmethystLiang
*仅对https://github.com/stablyai/orca/pull/39723中@OrcaWin移动的工作树进行重新排名
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39757 中防止悬停预览阻塞上下文菜单
* https://github.com/stablyai/orca/pull/39763 中@AmethystLiang 切换侧边栏选项卡时聚焦会话搜索
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/39764 中添加项目对话框延迟加载时，保持项目列表关闭
* 将侧边栏活动徽章与 https://github.com/stablyai/orca/pull/39783 中的@AmethystLiang 可见代理对齐

### 设置和外观

*导入自定义应用程序图标，读取标题卡中的设置并获取匹配的吐司按钮。*

* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39443 中从外观设置导入自定义应用程序图标
* 将每个设置组显示为 @brennanb2025 在 https://github.com/stablyai/orca/pull/39253 中的标题卡
* 主题菜单、清晰的分段控件、https://github.com/stablyai/orca/pull/39361 中@nwparker 的滚动配置导入预览
* 将吐司操作按钮与 @brennanb2025 在 https://github.com/stablyai/orca/pull/39935 中的 Orca 按钮相匹配

### 插件、主题和 CLI

*让主题播放循环背景视频并发送字体，并从 CLI 管理文件夹工作区和配对。*

* 在 https://github.com/stablyai/orca/pull/39450 中播放@nwparker 在应用程序主题后面的循环视频
* 让插件为 https://github.com/stablyai/orca/pull/39416 中的 @nwparker 为终端、编辑器和界面提供 Web 字体
* https://github.com/stablyai/orca/pull/39432 中@nwparker 用于聊天文本样式和可读聊天选择的主题标记
* @bbingz 在 https://github.com/stablyai/orca/pull/12606 中显示本地分叉的保留身份安装错误
* 不要将睡眠时间算作工人空闲时间 by @petersindex in https://github.com/stablyai/orca/pull/28299
* 通过 @sunfmin 在 https://github.com/stablyai/orca/pull/36469 中通过 `orca pair` 将 clients 与正在运行的 Orca 配对
* https://github.com/stablyai/orca/pull/37939 中 @agustin2606 的插件框架的前向侧边栏和缩放快捷方式
* 通过 @be0hhh 在 https://github.com/stablyai/orca/pull/38289 中隔离开发观察者重试
* 通过 https://github.com/stablyai/orca/pull/38671 中的 @Pr1p 解析远程活动工作空间的工作空间上下文
* 让插件键绑定遵循 https://github.com/stablyai/orca/pull/39348 中 @nwparker 的终端快捷方式策略
* 停止针对 https://github.com/stablyai/orca/pull/39383 中 @nwparker 无人听到的座席状态事件的终端清单
* 当失败关闭的钩子在 https://github.com/stablyai/orca/pull/39393 中返回 @nwparker 的格式错误的拒绝时拒绝
* 阻止后期替换命令重复 https://github.com/stablyai/orca/pull/39407 中 @nwparker 的内置操作
* 保留 @nwparker 在 https://github.com/stablyai/orca/pull/39413 中切换工作区之前所做的工作区范围面板编辑
* 按路径：和名称：匹配文件夹工作区，在 https://github.com/stablyai/orca/pull/39637 中通过 @Jinwoo-H 保持相同 id 的 ps 行分开
* 通过 https://github.com/stablyai/orca/pull/39670 中的 @Jinwoo-H 的文件夹工作区 RPC 设置和 rm 文件夹工作区

### 测试、CI 和维护

*修剪低价值测试，按所有者重新组织代码，为 React 编译器准备 UI 并保持 CI 绿色。*

* 从 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39157 中读取每个连接的一个状态来读取主机功能
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39242 中组织终端窗格生命周期和布局所有者
* 通过 https://github.com/stablyai/orca/pull/39269 中的@brennanb2025 从新家导入resolveQueuedInitialCwd
* 由 https://github.com/stablyai/orca/pull/39270 中的 @nwparker 按所有者组织剩余的窗格功能
* 修复 https://github.com/stablyai/orca/pull/39273 中 @brennanb2025 合并后的主文件夹源代码管理和窗格生命周期
* 在 https://github.com/stablyai/orca/pull/39284 中的 @AmoabaKelvin 在共享会话状态机上运行桌面听写控制器
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39291 中更新自述文件下载徽章
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39292 中组织运行时 clients 和功能状态所有者
* 在 https://github.com/stablyai/orca/pull/39293 中由 @AmoabaKelvin 听写时停止打开未使用的扬声器路径
* 将窗格生命周期引用声明为 @OrcaWin 在 https://github.com/stablyai/orca/pull/39315 中的顶级钩子调用
* 删除 https://github.com/stablyai/orca/pull/39318 中@OrcaWin 的 439 个低值浏览器和运行时测试
* 组织主机和终端所有者并删除 @nwparker 在 https://github.com/stablyai/orca/pull/39320 中的转发 shell
* 删除 https://github.com/stablyai/orca/pull/39321 中 @OrcaWin 的 76 个低值分叉和 UI 测试
* 在https://github.com/stablyai/orca/pull/39323中@OrcaWin在窗格渲染期间停止读取和写入引用
* Gate React 编译器与 https://github.com/stablyai/orca/pull/39324 中@OrcaWin 的棘轮兼容性
* 将 https://github.com/stablyai/orca/pull/39329 中 @OrcaWin 的 getState-in-render live-agent memos 替换为纪元键选择器
* 删除 https://github.com/stablyai/orca/pull/39334 中 @OrcaWin 的 212 个低值手机 shell 和路由测试
* 在 https://github.com/stablyai/orca/pull/39335 中通过 @OrcaWin 反应性地导出拖动标签和活动模拟器选项卡，而不是渲染中的 getState
* 在 https://github.com/stablyai/orca/pull/39339 中通过 @OrcaWin 拼写出 React Compiler 尚无法解析的逻辑赋值
* 删除 https://github.com/stablyai/orca/pull/39351 中 @OrcaWin 的 181 个低价值测试和 27 个完整套件
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39353 中使渲染路径翻译响应 UI 语言（hook、codemod、ratchet；native-chat）
* https://github.com/stablyai/orca/pull/39356 中@OrcaWin 在设置（存储库、浏览器、终端、运行时环境、ssh）中进行反应式翻译
* 删除 https://github.com/stablyai/orca/pull/39365 中 @OrcaWin 的 364 个低价值测试和 45 个完整套件
* https://github.com/stablyai/orca/pull/39366 中@OrcaWin 设置中的反应式翻译（外观、帐户、代理、源代码控制、移动设备、快捷方式、编辑器、语音）
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39371 中的设置（剩余窗格）中的反应式翻译
* https://github.com/stablyai/orca/pull/39375 中 @OrcaWin 在侧边栏中进行反应式翻译（工作区卡、工作树列表）
* 删除 https://github.com/stablyai/orca/pull/39376 中 @OrcaWin 的 235 个低价值测试和 14 个完整套件
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39382 中在侧边栏（剩余）中进行反应式翻译
* 右侧边栏中的反应式翻译（源代码控制、托管审阅）由@OrcaWin 在 https://github.com/stablyai/orca/pull/39385 中进行
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39388 中在右侧边栏（剩余面板）中进行反应式翻译
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39394 编辑器中进行反应式翻译
* 在 https://github.com/stablyai/orca/pull/39399 中 @OrcaWin 在浏览器窗格和功能墙中进行反应式翻译
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39400 中对插件和技能进行反应式翻译
* https://github.com/stablyai/orca/pull/39401 中@OrcaWin 在状态栏中进行响应式翻译
* 删除 https://github.com/stablyai/orca/pull/39404 中 @OrcaWin 的 186 个低价值测试和 11 个完整套件
* https://github.com/stablyai/orca/pull/39406 中 @OrcaWin 的任务页面和自动化中的反应式翻译
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39414 中使备忘录失效器和布局刷新编译器安全
* 导入定义所有者并提取 @nwparker 在 https://github.com/stablyai/orca/pull/39417 中的 ACP 启动
* https://github.com/stablyai/orca/pull/39418 中的 @OrcaWin 在终端窗格、选项卡栏和工作项对话框中进行反应式翻译
* 拉取请求页面、代理、入职、统计、新工作区和功能提示中的响应式翻译（@OrcaWin 在 https://github.com/stablyai/orca/pull/39421 中）
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39424 中对较小组件区域进行反应式翻译（通过维护进行活动）
* 在 https://github.com/stablyai/orca/pull/39425 中 @OrcaWin 在较小的组件区域中进行反应式翻译（通过 WSL 移动管理运行时）
* 拆分设备注册表和摩纳哥主题挂钩，以便 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39426 中再次通过 PR lint
* @OrcaWin 在 https://github.com/stablyai/orca/pull/39427 中对剩余渲染器文件（顶级组件、应用程序 shell、入口点、钩子、lib）进行反应式翻译
* 删除 https://github.com/stablyai/orca/pull/39429 中 @OrcaWin 的 321 个低价值测试和 22 个完整套件
* 失败的编译器兼容基线仅在 https://github.com/stablyai/orca/pull/39440 中 @OrcaWin 触及的文件中收缩
* 删除 https://github.com/stablyai/orca/pull/39449 中@OrcaWin 的 221 个低价值云、移动和期刊测试
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39451 中共同定位设置和目录状态所有者
* 删除 https://github.com/stablyai/orca/pull/39459 中 @OrcaWin 的 18 个低价值本机聊天会话测试
* 删除 https://github.com/stablyai/orca/pull/39460 中 @OrcaWin 的 131 个低价值终端、会话和传输测试
* 删除 https://github.com/stablyai/orca/pull/39475 中@OrcaWin 的 32 个低价值共享帮助程序测试
* 整理铁路尾流钩并添加 @nwparker 在 https://github.com/stablyai/orca/pull/39477 中的测试
* 主题背景视频在 1.4.254 中由 @nwparker 在 https://github.com/stablyai/orca/pull/39478 中发布
* 删除 https://github.com/stablyai/orca/pull/39480 中 @OrcaWin 的 295 个低值测试
* 删除https://github.com/stablyai/orca/pull/39483中@OrcaWin的158个低值测试
* 删除 https://github.com/stablyai/orca/pull/39487 中 @OrcaWin 的 242 个低值测试
* 删除 https://github.com/stablyai/orca/pull/39491 中 @OrcaWin 的 65 个低值测试
* 删除 https://github.com/stablyai/orca/pull/39494 中 @OrcaWin 的 295 个低值测试
* 删除https://github.com/stablyai/orca/pull/39498中@OrcaWin的665个低值测试
* 删除https://github.com/stablyai/orca/pull/39500中@OrcaWin的264个低值测试
* 删除 https://github.com/stablyai/orca/pull/39504 中 @OrcaWin 的 263 个低值测试
* 删除https://github.com/stablyai/orca/pull/39506中@OrcaWin的193个低值测试
* 删除 https://github.com/stablyai/orca/pull/39507 中 @OrcaWin 的 244 个低值测试
* 将渲染器存储状态与 @nwparker 定义的功能所有者放置在 https://github.com/stablyai/orca/pull/39508 中
* 删除https://github.com/stablyai/orca/pull/39509中@OrcaWin的124个低值测试
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39511 中对本机聊天媒体、链接和外观所有者进行分组
* 删除https://github.com/stablyai/orca/pull/39513中@OrcaWin的125个低值测试
* 删除https://github.com/stablyai/orca/pull/39522中@OrcaWin的137个低值测试
* 删除https://github.com/stablyai/orca/pull/39525中@OrcaWin的328个低值测试
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39526 中组织本地聊天会话和交付所有者
* 删除 https://github.com/stablyai/orca/pull/39527 中 @OrcaWin 的 279 个低值测试
* 删除https://github.com/stablyai/orca/pull/39533中@OrcaWin的283个低值测试
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39534 中组织本地聊天编辑器和对话所有者
* 删除https://github.com/stablyai/orca/pull/39539中@OrcaWin的414个低值测试
* 删除https://github.com/stablyai/orca/pull/39546中@OrcaWin的571个低值测试
* 删除https://github.com/stablyai/orca/pull/39547中@OrcaWin的660个低值测试
* 删除https://github.com/stablyai/orca/pull/39550中@OrcaWin的676个低值测试
* 删除https://github.com/stablyai/orca/pull/39553中@OrcaWin的587个低值测试
* 删除 https://github.com/stablyai/orca/pull/39558 中 @OrcaWin 的 835 个低值测试
* 删除https://github.com/stablyai/orca/pull/39560中@OrcaWin的329个低值测试
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39561 中更新自述文件下载徽章
* 删除https://github.com/stablyai/orca/pull/39565中@OrcaWin的265个低值测试
* 删除https://github.com/stablyai/orca/pull/39568中@OrcaWin的395个低值测试
* 删除https://github.com/stablyai/orca/pull/39570中@OrcaWin的354个低值测试
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/39571 中按功能所有权组织渲染器运行时
* 删除https://github.com/stablyai/orca/pull/39576中@OrcaWin的618个低值测试
* 删除https://github.com/stablyai/orca/pull/39580中@OrcaWin的438个低值测试
* 删除 https://github.com/stablyai/orca/pull/39585 中 @nwparker 的铁路唤醒评论
* 通过@OrcaWin在https://github.com/stablyai/orca/pull/39586中解释本地Vitest变换缓存
* 删除 https://github.com/stablyai/orca/pull/39587 中 @OrcaWin 的 255 个低值测试
* 删除https://github.com/stablyai/orca/pull/39592中@OrcaWin的313个低值测试
* 在https://github.com/stablyai/orca/pull/39595中通过@OrcaWin设置组卡后同步渲染路径翻译基线
* 删除https://github.com/stablyai/orca/pull/39600中@OrcaWin的585个低值测试
* 删除 https://github.com/stablyai/orca/pull/39604 中 @OrcaWin 的 763 个低值测试
* 删除https://github.com/stablyai/orca/pull/39608中@OrcaWin的581个低值测试
* 删除https://github.com/stablyai/orca/pull/39614中@OrcaWin的468个低值测试
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39623 中将 Vitest 缓存注释缩短为一行
* 通过https://github.com/stablyai/orca/pull/39625中的@nwparker定义所有者来组织后端运行时
* 替换最后两个裸空读取 React Compiler 将在 https://github.com/stablyai/orca/pull/39626 中由 @OrcaWin 删除
* 关键外部存储读取@OrcaWin 在 https://github.com/stablyai/orca/pull/39628 中已经采用的订阅版本
*关键渲染读取他们已经在https://github.com/stablyai/orca/pull/39629中由@OrcaWin调用的版本挂钩
* 标记废弃的订阅并存储快照React Compiler将通过https://github.com/stablyai/orca/pull/39630中的@OrcaWin进行缓存
* 删除https://github.com/stablyai/orca/pull/39632中@OrcaWin的282个低值测试
* 删除https://github.com/stablyai/orca/pull/39639中@OrcaWin的158个低值测试
* 关键选项支持和终端读取 @OrcaWin 在 https://github.com/stablyai/orca/pull/39641 中已拍摄的快照
* 删除https://github.com/stablyai/orca/pull/39644中@OrcaWin的140个低值测试
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39648 中的五个渲染器测试中传递新输入而不是改变它们
* 从 https://github.com/stablyai/orca/pull/39654 中 @OrcaWin 的设置超预算文件中的 useTranslate 读取渲染路径翻译
* 将 useTranslate 的 t 传递到侧边栏部分标题和 https://github.com/stablyai/orca/pull/39656 中 @OrcaWin 的设置提示
* 删除 https://github.com/stablyai/orca/pull/39661 中 @OrcaWin 的 559 个低值测试
* https://github.com/stablyai/orca/pull/39662 中 @OrcaWin 的 useTranslate t 上的关键工具运行和后台任务单词
* 在https://github.com/stablyai/orca/pull/39665中@OrcaWin读取的失败上键入命名失败输出读取器
* https://github.com/stablyai/orca/pull/39669 中@OrcaWin 停止调度程序默认导入每个 RPC 方法
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39671 中为结构化工作人员重试套件提供负载证明准备预算
* 删除https://github.com/stablyai/orca/pull/39673中@OrcaWin的292个低值测试
* 从 https://github.com/stablyai/orca/pull/39674 中 @OrcaWin 的源代码控制超预算文件中的 useTranslate 读取渲染路径翻译
* 在其所有者测试中渲染装订线菜单并阅读 @OrcaWin 在 https://github.com/stablyai/orca/pull/39675 中的 useTranslate
* 从 https://github.com/stablyai/orca/pull/39678 中 @OrcaWin 的 useTranslate 读取笔记本错误回退并复制按钮标题
* https://github.com/stablyai/orca/pull/39679 中@OrcaWin 的代理钩子助手和 CLI 重启切换套件缩短了约 70 秒的 CI 测试时间
* https://github.com/stablyai/orca/pull/39680 中 @nwparker 在本地牧马人配置中将中继合约子路径别名为源
* 在 https://github.com/stablyai/orca/pull/39684 中@OrcaWin 删除默认的 RPC 清单保护，其中没有保留默认值
* 假时钟代理会话启动退避；将 @OrcaWin 的 CLI 所有者选择工作计数套件放在 https://github.com/stablyai/orca/pull/39685 中
* 按照 @OrcaWin 在 https://github.com/stablyai/orca/pull/39686 中配对的 HTML 预览规范中编辑器的预览按钮
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39687 中从 codex app-server、--no-daemon shell 和 grid-serialize 套件中减少约 20 秒的 CI 测试时间
* 删除https://github.com/stablyai/orca/pull/39689中@OrcaWin的182个低值测试
* 在 100 毫秒轮询上运行发行版持有者脚本，并等待 https://github.com/stablyai/orca/pull/39690 中 @OrcaWin 发出的自己的信号
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39693 中将 useTranslate 的 t 传递到插件管理器的列表条目中
* 在 https://github.com/stablyai/orca/pull/39696 中 @OrcaWin 的评论动画视觉效果中阅读 useTranslate 的渲染路径翻译
* 拆分浏览器和功能墙超预算文件并读取 @OrcaWin 在 https://github.com/stablyai/orca/pull/39698 中的 useTranslate
* 删除 https://github.com/stablyai/orca/pull/39701 中 @OrcaWin 的 259 个低值测试
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/39708 中完成状态栏的渲染路径翻译
* 停止在 https://github.com/stablyai/orca/pull/39711 中 @OrcaWin 的 pty-connection 套件中的每个测试中重新评估 connect-pane-pty
* 在https://github.com/stablyai/orca/pull/39717中完成@OrcaWin的IssueDialog和useTranslate上的运行历史计数标签
* 删除https://github.com/stablyai/orca/pull/39720中@OrcaWin的297个低值测试
* 在 https://github.com/stablyai/orca/pull/39726 中完成 @OrcaWin 的 useTranslate 上的 EditorFileTab 和检查选项卡操作
* 在测试中渲染使用图表并阅读 @OrcaWin 在 https://github.com/stablyai/orca/pull/39737 中的 useTranslate
* 删除https://github.com/stablyai/orca/pull/39743中@OrcaWin的357个低值测试
* 解决 https://github.com/stablyai/orca/pull/39744 中 @OrcaWin 的 useTranslate 的 diff 注释弹出框的默认标签
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/39746 中组织文件操作、搜索和保护存储所有者
* 在 https://github.com/stablyai/orca/pull/39748 中删除@OrcaWin 的工作区清理方面行的工作计数断言
* 在https://github.com/stablyai/orca/pull/39754中通过@OrcaWin在TranslationScopeProvider中安装设置导航语言测试
* 完成审阅笔记发送菜单和恢复组使用https://github.com/stablyai/orca/pull/39755 中的@OrcaWin 翻译
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39760 中更新自述文件下载徽章
* 从 https://github.com/stablyai/orca/pull/39761 中 @OrcaWin 的 useTranslate 中读取 AgentLaunchSetupPanel 的副本
* 删除 https://github.com/stablyai/orca/pull/39781 中 @OrcaWin 的 244 个低值测试

## 新贡献者
* @sunfmin 在 https://github.com/stablyai/orca/pull/36469 中做出了第一个贡献
* @be0hhh 在 https://github.com/stablyai/orca/pull/38289 中做出了第一个贡献
* @Jackylee1992 在 https://github.com/stablyai/orca/pull/38807 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.253...v1.4.254

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.254` · 📅 发布：2026-11-08 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.254)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
