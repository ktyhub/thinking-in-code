---
title: "orca v1.4.252"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.252"
version: "v1.4.252"
published: "2026-11-07"
type: "patch"
lang: "zh"
---

# orca v1.4.252

## 从任何回复中分叉聊天、计划模式和更快的手机 ✨

- 📱 **更流畅的手机体验：** 手机打开和重新连接速度更快，滚动和流式传输聊天更加流畅，更好地阅读 Markdown 和数学，并在重新连接时保留未发送的聊天、审阅和任务文本。
- 🗂️ **跨机器组织工作空间：** 将工作空间嵌套在文件夹工作空间下，包括其他机器上的工作空间。
- 🌿 **使用聊天 UI 执行更多操作：** 分叉任何已完成的响应以尝试另一个方向，同时原始聊天保持原样。在 Claude 或 Codex 聊天中，键入 `/plan` 切换到计划模式，该模式在您重新打开聊天时仍然存在。
- 🖥️ **更可靠的终端：** 终端窗格保持缩放并恢复滚动，复制的文件粘贴为完整路径，繁忙的终端输出需要更少的渲染工作。
- 🤖 **更好的代理支持：** 从聊天中打开正在运行的子代理，查看 Codex 批准中的建议文件和差异，回答 OpenCode 选择问题，并使用 Gemini Enterprise 登录反重力聊天。
- 🎙️ **更好的听写：** 选择您的听写语言，保留第一个和最后一个单词，在模型加载时查看“聆听”，并以大约三分之一的速度返回设备上的文本。
- 🧭 **了解聊天在哪里运行：** 聊天编辑器显示计算机、工作区和分支，并且聊天为代理打开的每个拉取请求显示一张卡片。
- ⚡ **更快捷的桌面聊天：** 一个聊天的状态更改不再唤醒每个聊天，模型选择器打开时无需遍历每个工作树，长回复流无需重新渲染。

## 亮点

- **聊天：** 从任何已完成的响应中分叉，在 Claude 和 Codex 聊天中使用计划模式，并从代理条中打开正在运行的子代理。 Codex 批准显示建议的文件和差异，OpenCode 可以提出选择问题，Claude 的内置服务器工具显示为普通工具卡。在繁忙的聊天中按住 Cmd/Ctrl 会显示 Cmd/Ctrl+Enter 将执行的操作，应用程序快捷方式可以在聊天编辑器中使用，超大的粘贴图像会缩小以适应而不是失败。注销的 OpenCode、Pi 和 OMP 聊天提供登录按钮。
- **电话：** Markdown 更易于阅读和渲染数学、GitHub 警报、任务框和图像。从菜单中重命名工作区，查看自动继续和使用限制通知上的切换帐户，并在连接断开时保留聊天发送、PR 文本、审阅注释和任务草稿。电话在上次工作时立即拨打中继，通过网络交换机保持终端输出，并流式传输繁忙的终端而不会落后。
- **代理和帐户：** Antigravity Chat 可以使用 Gemini Enterprise 登录，报告每个已保存帐户的配额并管理 WSL 内的帐户。 `orca account` 可以选择和删除任何已保存的帐户。 Antigravity IDE 加入了 Open In 预设。
- **远程主机：** SSH 清楚地表明，当主机现在为不同的 Orca 服务器提供服务时，会断开您停止其服务器的主机的连接，并在手动主机上尊重 IdentitiesOnly。当任何 client 打开休眠配方虚拟机时，它们就会被唤醒，`orca serve` 可以绑定到一个地址，并且在高延迟链接上浏览配对服务器的速度更快。浏览器选项卡会显示 SSH 主机何时控制它们，并提供停止它的方法。
- **源代码控制和任务：** 当电话分支交换机要移动未提交的工作或在 rebase 中着陆时，电话分支交换机会被拒绝，原因很简单。检查显示他们何时跑步以及花费了多长时间。任务可以按州以及撰写或审阅者筛选 GitHub PR 和 GitLab MR，并在发布 GitHub 草稿之前粘贴上传的图像。
- **工作区和插件：** 多存储库文件夹工作区可以作为父工作区，并且工作区可以嵌套在其他计算机上的父工作区下。 `orca plugin` 安装、更新和删除插件并管理目录，插件页面显示有关其发布者的更多信息，并且相似的插件名称显示谁发布了它们。

## 兼容性和升级说明

- **macOS 13.4 最低：** Orca 现在需要 macOS 13.4 或更高版本（之前为 macOS 12）。旧版本的 Mac 通过应用内更新程序保持最新的兼容版本并看到通知，并且 Homebrew 拒绝在 macOS 13.0–13.3 上升级。 macOS 13 上的任何 Mac 都可以更新到 macOS 13.7 以持续获取 Orca 更新。
- **听写模型：** 不再提供 Zipformer EN 听写模型。如果您选择了它，Orca 会将您移至 Parakeet v2，您可能需要在“设置”>“语音”中下载该版本，然后听写才能起作用。
- **新配置文件：** 新的桌面配置文件在主文件夹的文件夹工作区中打开，名为 `~`。现有配置文件保持不变。现在，入职中的“稍后设置”会打开您的默认代理。
- **配对码过期：** 未使用的桌面配对码现已过期：手机二维码在 10 分钟后过期，与另一台计算机的配对链接在 60 分钟后过期。已配对的设备不受影响。
- **聊天 UI 设置：** 更改的文件卡和打开的拉取请求卡现在通过设置 › 聊天 UI › 转向活动进行控制，如转向差异和打开的拉取请求。
- **本地浏览器代理：** 本地浏览器控制代理现在需要每个会话令牌，只有 Orca 自己的代理浏览器启动才能接收该令牌，因此您计算机上的其他程序无法再使用它。
- **降级：** 如果降级，v1.4.251 将无法打开使用计划模式的聊天。当您升级回来后，它们会再次打开。

---

## 产品体验

### 本机聊天和代理

*从任何回复中分支聊天，在构建之前进行计划，查看聊天在哪里进行并保持快速的长时间聊天。*

* 从 @brennanb2025 在 https://github.com/stablyai/orca/pull/38326 中完成的任何回复中分叉聊天 UI 聊天
* 在 https://github.com/stablyai/orca/pull/38286 中支持@brennanb2025 聊天中的原生计划模式
* 在 https://github.com/stablyai/orca/pull/38253 中的 @brennanb2025 的聊天编辑器下方显示机器、工作区和分支
* 修复（聊天）：缩小作曲家工作区页脚并将其文本居中于 https://github.com/stablyai/orca/pull/39261 中的 @brennanb2025 的图标上
* 在聊天中显示一张卡片，以获取代理在 https://github.com/stablyai/orca/pull/38750 中 @brennanb2025 打开的拉取请求
* feat(native-chat)：显示 https://github.com/stablyai/orca/pull/38892 中 @brennanb2025 已知主机上任何存储库的链接卡的详细信息
* 在聊天 UI 下对转向差异进行分组并打开 PR › https://github.com/stablyai/orca/pull/39127 中 @brennanb2025 的转向活动
* 让用户在https://github.com/stablyai/orca/pull/38756中通过@brennanb2025隐藏聊天中更改的文件卡
* 在繁忙的聊天中按住 Cmd/Ctrl 显示 @brennanb2025 在 https://github.com/stablyai/orca/pull/38749 中 Cmd/Ctrl+Enter 将执行的操作
* Cmd/Ctrl+Enter 在 https://github.com/stablyai/orca/pull/38877 中 @brennanb2025 停止后发送第一个排队的卡
* feat(native-chat)：在https://github.com/stablyai/orca/pull/38640中通过@brennanb2025从代理条中打开一个子代理
* feat(native-chat)：在https://github.com/stablyai/orca/pull/38335中@big-sheq的左和右问题卡的问题之间步进
* 在 @brennanb2025 的 https://github.com/stablyai/orca/pull/38872 聊天中显示 OpenCode 选择问题
* 显示 @brennanb2025 在 https://github.com/stablyai/orca/pull/37960 中 Codex 批准中建议的文件和差异
*修复：在https://github.com/stablyai/orca/pull/38811中@brennanb2025的聊天和历史记录中显示Claude服务器工具
* 将 Claude 插件 UI 排除在聊天之外，并恢复 https://github.com/stablyai/orca/pull/37965 中 @brennanb2025 阻止的回复
* 在 https://github.com/stablyai/orca/pull/39012 中的@brennanb2025 在本机代理聊天中提供终端登录恢复
* 在 https://github.com/stablyai/orca/pull/38815 中 @brennanb2025 重新打开 ACP 聊天时保留保存的模型
* 以 @brennanb2025 在 https://github.com/stablyai/orca/pull/39066 中实时聊天显示的方式导入 Codex 命令历史记录
* 修复（omp）：在 https://github.com/stablyai/orca/pull/38713 中 @brennanb2025 在聊天和工作人员中使用 OMP 模型角色、选择器和工作量
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38724 中的聊天消息编辑器保持应用程序快捷方式正常工作
* 修复（native-chat）：让 Cmd+R 在 https://github.com/stablyai/orca/pull/38388 中通过 @big-sheq 重命名聊天选项卡
* 修复（native-chat）：通过 @sungman-cho 在 https://github.com/stablyai/orca/pull/37755 中从聊天 UI 窗格运行均衡窗格大小快捷方式
* 在https://github.com/stablyai/orca/pull/38703中启用@AmethystLiang的聊天UI后显示切换回注释
* 缩小超大的粘贴图像以适应而不是因 https://github.com/stablyai/orca/pull/39050 中的 @brennanb2025 的“Clipboard 图像太大”而失败
* 在 https://github.com/stablyai/orca/pull/39219 中突出显示 @AmethystLiang 已打开的结构化代理窗格
* 修复：恢复https://github.com/stablyai/orca/pull/39163中@AmethystLiang在会话列表中的删除操作
* 将受支持的只读控件应用于https://github.com/stablyai/orca/pull/38558 中@brennanb2025 的隐藏文本助手
* 使已发布的活动选项卡与 https://github.com/stablyai/orca/pull/38844 中 @brennanb2025 的当前选择保持一致
* 修复（运行时）：在 https://github.com/stablyai/orca/pull/38761 中重新连接的屏幕显示 @nwparker 的对话框时，保留恢复的权限等待阻止提示
* 修复（acp）：让 https://github.com/stablyai/orca/pull/38968 中的 @nwparker 保持 ACP 运行临时文件夹足够短，以适合 unix 套接字
*修复（技能）：停止编排存根在https://github.com/stablyai/orca/pull/37850中重复@Sn1perdog的描述
* 修复（agent-hooks）：阻止 CodeBuddy PermissionRequest 将窗格标记为 https://github.com/stablyai/orca/pull/38009 中 @EdgerHao 正在等待
* 修复（代理）：列出 @nwparker 在 https://github.com/stablyai/orca/pull/39178 中通过自定义命令路径找到的代理
* 修复（codex）：将 clipboard SSH 标记保留在 @nwparker 在 https://github.com/stablyai/orca/pull/38914 中运行的 Codex 命令之外
* 一次聊天的状态更改只会唤醒 @brennanb2025 在 https://github.com/stablyai/orca/pull/38883 中的聊天
* 在 https://github.com/stablyai/orca/pull/38920 中阅读 @brennanb2025 的旧消息后保持本机聊天响应
* 避免 JSON 往返桌面聊天更新（@brennanb2025 在 https://github.com/stablyai/orca/pull/38936 中）
* 打开聊天模型选择器，无需遍历 https://github.com/stablyai/orca/pull/38660 中的 @brennanb2025 的每个工作树
* perf(native-chat)：通过会话 ID 查找记录，无需遍历 https://github.com/stablyai/orca/pull/38895 中 @brennanb2025 的整个历史记录
* perf(native-chat)：在 https://github.com/stablyai/orca/pull/38874 中由 @brennanb2025 显示子代理时跳过未使用的工作
* perf(native-chat)：停止重新扫描https://github.com/stablyai/orca/pull/38887中@brennanb2025滚动渲染上的每个转录行
* perf(native-chat)：提及 Vec<T> 的流回复，无需重新渲染 @brennanb2025 在 https://github.com/stablyai/orca/pull/38879 中的整个回复
* perf(agent-session)：流式传输聊天文本，由 https://github.com/stablyai/orca/pull/39051 中的 @AmoabaKelvin 附加

### 代理和账户

*使用 Gemini Enterprise 登录 Antigravity，管理更多帐户并使 Antigravity 在 Linux 和 WSL 上更加稳定。*

* 允许 Gemini Enterprise 登录 https://github.com/stablyai/orca/pull/38737 中的 @brennanb2025 进行反重力聊天
* feat(antigravity)：在https://github.com/stablyai/orca/pull/39007中由@nwparker管理所选WSL发行版中的帐户
*壮举（反重力）：报告@nwparker在https://github.com/stablyai/orca/pull/39005中每个保存帐户的最后已知配额
* feat(cli)：在 https://github.com/stablyai/orca/pull/38944 中选择并删除 @nwparker 从 `orca account` 中保存的所有代理帐户
* 壮举（入门）：在 https://github.com/stablyai/orca/pull/39172 中由 @nwparker 在显式设置终端中安装 Antigravity
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/38901 中签出 agy 时，反重力工作人员的准备速度会很快失败
* 修复（agent-hooks）：在 https://github.com/stablyai/orca/pull/38899 中由 @nwparker 安装 Windows 或擦除配置后修复反重力钩子
* 修复（反重力）：@nwparker 在 https://github.com/stablyai/orca/pull/38985 中从选定的 WSL 运行时读取配额
*修复（反重力）：说反重力聊天在Windows上不可用，而不是通过@nwparker在https://github.com/stablyai/orca/pull/38997中静默打开终端
* 修复（反重力）：通过 https://github.com/stablyai/orca/pull/38996 中的 @nwparker 通过 Linux Secret Service 密钥环切换 agy 帐户
*修复（反重力）：在https://github.com/stablyai/orca/pull/38939中粘贴@nwparker的延续上下文之前等待agy的作曲家
*修复（反重力）：在WSL发行版中写入工作区trust，代理在https://github.com/stablyai/orca/pull/38981中由@nwparker运行
* 阅读 @nwparker 在 https://github.com/stablyai/orca/pull/38930 中自定义 statusLine 上方的空闲反重力作曲家
*修复（自动化）：接受https://github.com/stablyai/orca/pull/39161中@nwparker的反重力模型和努力额外参数
* 壮举（设置）：将 Antigravity IDE 添加到 @nwparker 在 https://github.com/stablyai/orca/pull/39237 中的 Open In Apps 预设中
* 修复（trust）：仅删除 Codex 和 agy 工作区 trust 条目 Orca 在 @nwparker 在 https://github.com/stablyai/orca/pull/38969 中删除工作树时创建
* 文档：由 @nwparker 在 https://github.com/stablyai/orca/pull/38880 中阐明 Codex 和 Antigravity 的多帐户设置和并发性

### 听写和语音

*选择您的听写语言，保留您所说的每一个字并更快收到短信。*

* 修复（语音）：添加 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39102 中 Whisper、SenseVoice 和 OpenAI 使用的听写语言设置
* 修复（语音）：保留 https://github.com/stablyai/orca/pull/39107 中 @AmoabaKelvin 的流式听写的第一个单词
* 修复（听写）：当你停止听写 https://github.com/stablyai/orca/pull/39109 中的 @AmoabaKelvin 时保留最后一句话
* 修复（听写）：当设置更改或窗口失去焦点时，保持听写会保留您所说的内容（https://github.com/stablyai/orca/pull/39132 中的 @AmoabaKelvin）
* 修复（听写）：处理云听写的 10 分钟上限、上传停滞和 https://github.com/stablyai/orca/pull/39114 中的 @AmoabaKelvin 的错误 API 密钥
* 修复（听写）：在加载语音模型时显示“聆听”，并将开始祝酒词链接到 https://github.com/stablyai/orca/pull/39136 中 @AmoabaKelvin 的语音设置
* 修复（语音）：仅当https://github.com/stablyai/orca/pull/39108中的@AmoabaKelvin更改时才发送听写的实时文本
* perf(speech)：在https://github.com/stablyai/orca/pull/39104中通过@AmoabaKelvin在最多4个线程上解码设备上的听写
* 修复（终端）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39112 中听写或叠加将焦点移动到粘贴中间时，在终端中完成粘贴
* 修复（语音）：停止提供 Zipformer EN 听写模型，并将其用户移至 https://github.com/stablyai/orca/pull/39173 中 @AmoabaKelvin 的 Parakeet v2

### 终端、性能和更新

*迁移到 macOS 13.4，保持终端滚动和缩放，粘贴文件路径，并在每个开关上减少工作量。*

* 修复（打包）：需要 macOS 13.4，@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39135 中运行设备上语音引擎的最低版本
* 将 macOS 13.0–13.3 Homebrew 用户保留在 Orca 上，他们可以通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39264 中打开
* 修复（发布）：拒绝 macOS 最低要求，更新门无法通过 @nwparker 在 https://github.com/stablyai/orca/pull/38822 中精确映射
* 在 https://github.com/stablyai/orca/pull/37685 中 @vorabrijesh 从 macOS 权利中删除allow-dyld-environment-variables
* 修复（终端）：当 @mmarabel 在 https://github.com/stablyai/orca/pull/8588 中重新安装终端窗格时，保持每个窗格的缩放
* 修复（终端）：将复制的文件粘贴为完整路径，而不是 @nwparker 在 https://github.com/stablyai/orca/pull/38970 中的名称
* 修复（终端）：在 https://github.com/stablyai/orca/pull/38878 中 @nwparker 重新启动时隐藏的选项卡中保留冷恢复滚动
* 修复（终端）：当 @emmahyde 在 https://github.com/stablyai/orca/pull/38228 中调整大小后 xterm 夹紧时重试回滚锚恢复
* 修复（终端）：读取以 CR CR LF 结尾的行，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/38838 中将它们返回为空
* 修复（终端）：当 https://github.com/stablyai/orca/pull/38730 中的 @nwparker 离开时，向 ?1004 个节目报告焦点移出情况
* 修复（Windows）：拒绝失败的进程表快照，而不是通过https://github.com/stablyai/orca/pull/37820中的@registered2nd使终端主机崩溃
* 杂务（诊断）：在 https://github.com/stablyai/orca/pull/38873 中记录 @nwparker 删除终端选项卡的三个静默路径
* 修复（shell）：父本机文件选择器到 https://github.com/stablyai/orca/pull/37779 中 @ethznn 请求它们的窗口
* perf(terminal): 在https://github.com/stablyai/orca/pull/38482中通过@OrcaWin为每个输出块复制一次保留的转录窗口
* perf(terminal)：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38489 中削减彩色输出上渲染器每块分类器的成本
* perf(renderer)：在 https://github.com/stablyai/orca/pull/38505 中通过 @OrcaWin 削减每存储写入选择器扇出和 DOM 闪烁切换开关
* perf(renderer)：通过https://github.com/stablyai/orca/pull/38797中的@OrcaWin导出状态而不是在效果（表面）中同步它
* perf（渲染器）：在渲染期间重置对话框状态，而不是在https://github.com/stablyai/orca/pull/38803中@OrcaWin的效果（对话框）中重置对话框状态
* perf：避免在 https://github.com/stablyai/orca/pull/39232 中 @brennanb2025 清除工作区期间重复发布者扫描

### SSH 和远程服务器

*清楚地解释 SSH 和服务器问题，保持远程终端诚实并从任何地方唤醒休眠的虚拟机。*

*修复（ssh）：保持未链接的主机断开连接，并在项目需要其服务器时通过@nwparker在https://github.com/stablyai/orca/pull/38746中命名它
* 修复（ssh）：假设托管主机现在为不同的 Orca 服务器提供服务，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/38745 中删除 SSH 隧道上的 Tailscale 提示
* 修复（ssh）：通过 https://github.com/stablyai/orca/pull/37926 中的 @nwparker 在内置传输上应用手动目标的 IdentitiesOnly 设置
* 修复（ssh）：归咎于 SSH 目录上传失败的原因，而不是 https://github.com/stablyai/orca/pull/38772 中 @nwparker 的退出命令
*修复（远程）：让Remove删除https://github.com/stablyai/orca/pull/39048中@nwparker在两个SSH别名下保存的托管服务器
* 将自动化运行历史记录从 @nwparker 在 https://github.com/stablyai/orca/pull/38718 中签名的 SSH 迁移清单中移出
*修复（远程）：当https://github.com/stablyai/orca/pull/38758中的@nwparker的服务器关闭选项卡时，删除恢复的代理的行
* 结束一个远程窗格，该窗格的会话在 https://github.com/stablyai/orca/pull/38747 中的 @nwparker 准备好之前就退出了
*修复（终端）：采用的守护进程终端通过https://github.com/stablyai/orca/pull/38760中的@nwparker从其流中获取标题和输出
* 修复（终端）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38715 中为远程 Windows 窗格提供 ConPTY 调整大小模型
* 在创建时将服务主机终端绑定到其工作区，以便删除一个工作区无法阻止另一个工作区的代理（@nwparker in https://github.com/stablyai/orca/pull/38864）
*修复（orcad）：受监督的服务器在没有终端守护程序的情况下无法启动，并且orcad通过https://github.com/stablyai/orca/pull/38709中的@nwparker保护其实例锁定
* 修复（orcad）：保留 Snap Chromium 配置文件，让 @nwparker 在 https://github.com/stablyai/orca/pull/38843 中可以写入快照
* feat(serve): 在https://github.com/stablyai/orca/pull/35095中通过@ddlw添加绑定地址选项
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/38735 中通过共享控制连接路由联合确认和导入
* 让配对的主机在https://github.com/stablyai/orca/pull/38711中@nwparker在其终端打印的路径中扩展〜
* 以 @nwparker 在 https://github.com/stablyai/orca/pull/38742 中打开工作区文件的方式打开授权的主机文件
* perf(runtime): 在 https://github.com/stablyai/orca/pull/38820 中，@nwparker 授予文件下载一次哈希值，而不是每页一次
* 修复（终端）：带有窗口的主机保留一个窗格，将配对的 client 移动到 https://github.com/stablyai/orca/pull/38840 中的 @nwparker 的新选项卡
* 修复（代理睡眠）：https://github.com/stablyai/orca/pull/38768 中的 @nwparker 正在使用配对的 client 显示或输入的选项卡
*修复（工作空间）：给配方VM唤醒一个所有者，由https://github.com/stablyai/orca/pull/38842中的@nwparker通过暂停进行序列化
*修复（工作空间）：当client通过https://github.com/stablyai/orca/pull/39038中的@nwparker打开其工作空间时唤醒正在睡眠的食谱VM

### 浏览器和模拟器

*显示主机何时驱动您的浏览器选项卡，更快地浏览远程服务器并快速找到模拟器设备。*

* feat(browser)：显示 SSH 主机何时控制 Orca 浏览器选项卡，并让人们通过 https://github.com/stablyai/orca/pull/39212 中的 @nwparker 停止它
* 修复（浏览器）：当 @nwparker 在 https://github.com/stablyai/orca/pull/38762 中 open-url 找不到浏览器主机时，要求连接的桌面进行托管
*修复（浏览器）：用于高延迟链接的更大隧道窗口，受https://github.com/stablyai/orca/pull/38839中@nwparker的连接信用限制
* 修复（浏览器）：保持绘图中的屏幕截图按 https://github.com/stablyai/orca/pull/38827 中 @AmoabaKelvin 的页面滚动偏移量移动
* 修复（浏览器）：https://github.com/stablyai/orca/pull/38771 中的 HTML 预览注释中的预览文件由 @nwparker 命名
* 修复（浏览器）：当 macOS 阻止 @gavande1 在 https://github.com/stablyai/orca/pull/38497 中导入 cookie 时，请求完全磁盘访问
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/38046 中 @jeky22 覆盖的临时选项卡 UA 下保持 client 提示处于活动状态
* perf（浏览器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38821 中控制密码检测器整个文档
* feat(emulator): 通过 @gentslava 在 https://github.com/stablyai/orca/pull/36548 中对设备选择器进行分组和搜索
*壮举（模拟器）：记住@gentslava在https://github.com/stablyai/orca/pull/36558中最后成功的设备

### 源代码控制和编辑器

*安全地切换分支，查看检查何时运行，并按谁撰写或审查 PR 来过滤任务。*

* 拒绝不安全的分支交换机，并通过 https://github.com/stablyai/orca/pull/38744 中的 @brennanb2025 在手机和桌面上共享一项检查
* 显示每项检查的运行时间以及运行时间（由 @brennanb2025 在 https://github.com/stablyai/orca/pull/38731 中显示）
* 在悬停时显示检查的状态，而不是在其图标旁边由 @brennanb2025 在 https://github.com/stablyai/orca/pull/38897 中显示
* 在 https://github.com/stablyai/orca/pull/38928 中发布 @brennanb2025 的 GitHub 草稿之前上传图像
* feat(github)：按州和谁过滤任务 PR，例如 @brennanb2025 在 https://github.com/stablyai/orca/pull/38903 中的 GitLab MR
* feat(gitlab)：过滤任务将请求合并到您在 https://github.com/stablyai/orca/pull/38766 中由 @brennanb2025 撰写或审阅的请求
* 修复（github-project）：使用https://github.com/stablyai/orca/pull/38818中@brennanb2025的内容值进行内置分组和排序
*修复（github-project）：按https://github.com/stablyai/orca/pull/38212中的@daghantektepe使用每行的父问题按父问题对项目视图进行分组
*修复（gitlab）：对管道作业进行分页并桥接@brennanb2025在https://github.com/stablyai/orca/pull/39046中过去的100个项目
* 修复（任务）：在 https://github.com/stablyai/orca/pull/38802 中跳过 @AmoabaKelvin 在 GitHub 选项卡上自托管的 GitLab 项目
* 修复（编辑器）：在 https://github.com/stablyai/orca/pull/38442 中使用 @qq2144 的 Razor 语言突出显示 Blazor .razor 文件
* 修复（编辑器）：阻止 Markdown 中的全角标点符号通过 https://github.com/stablyai/orca/pull/33861 中的 @DaydreamCoding 触发 Unicode 警告
* 修复（编辑器）：将插件新文件保留在https://github.com/stablyai/orca/pull/37878中@Hunter-Pittman的浮动工作区中

### 电话和配对设备

*使手机打开速度更快，阅读更方便，并且不太可能丢失您输入的内容。*

* 壮举（移动）：让 Markdown 更容易在手机上阅读 @AmoabaKelvin in https://github.com/stablyai/orca/pull/38870
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38809 中通过 @AmoabaKelvin 在 Markdown 中渲染 GitHub 警报、任务框、内联标签和图像
* 壮举（移动）：在聊天和 PR 描述中呈现数学，并使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38682 中提供的 GitHub 行计数表
* feat(mobile)：通过 https://github.com/stablyai/orca/pull/38728 中的 @AmoabaKelvin 从工作区菜单重命名工作区
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38298 中 @AmoabaKelvin 的聊天使用限制通知中显示自动继续和切换帐户
* 修复（移动版）：在放弃 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38929 中编辑的自动化之前询问
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38912 中保持 @AmoabaKelvin 的取消和刷新 PR 创建、编辑和评论文本
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38935 中通过 @AmoabaKelvin 重新连接和项目更新保留任务草稿
* 修复（移动版）：停止清除 https://github.com/stablyai/orca/pull/38917 中 @AmoabaKelvin 重新打开时的审核和文件注释
* 修复（移动版）：告诉用户 https://github.com/stablyai/orca/pull/39014 中的 @AmoabaKelvin 是否通过重新连接发布了任务评论
* 修复（移动）：将未确认的聊天发送回https://github.com/stablyai/orca/pull/39055中@AmoabaKelvin的作曲家中
*修复（移动）：保持重命名表打开，直到桌面接受https://github.com/stablyai/orca/pull/38934中的@AmoabaKelvin
* 修复（移动设备）：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38919 中保持键盘上方可触及的高聊天控件
* 将电话聊天菜单保留在键盘上方，作者：https://github.com/stablyai/orca/pull/38834 中的 @brennanb2025
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38829 中由 @AmoabaKelvin 关闭并重新打开旧 Orca 服务器上的任务中的 GitHub 问题
* 修复（移动）：通过 https://github.com/stablyai/orca/pull/39034 中的 @AmoabaKelvin 将终端输出通过 LAN 保持到继电器开关
* 在 https://github.com/stablyai/orca/pull/38847 中@brennanb2025 统计配对手机聊天和启动的使用统计数据
* 壮举（配对）：未扫描的桌面配对码过期（二维码 10 分钟，链接 60 分钟），作者：@nwparker，https://github.com/stablyai/orca/pull/37957
*修复（网络）：在配对链接替换https://github.com/stablyai/orca/pull/37936中@nwparker保存的服务器之前进行确认
* 修复（android）：在https://github.com/stablyai/orca/pull/38022中@gentslava拖动文本句柄时防止出现黑框
* 修复（移动）：防止 iPhone Duo 在第一个 Web 视图键盘上分屏崩溃，作者为 https://github.com/stablyai/orca/pull/37260 中的 @gsxdsm
* 修复（移动）：通过 @terminalchai 在 https://github.com/stablyai/orca/pull/37904 中统一诊断导航
* 壮举（移动）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38924 中使用专用发布密钥签署 Android 发布版本
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38954 中添加 @AmoabaKelvin 的加密设备上商店
* feat(mobile): 让主页在https://github.com/stablyai/orca/pull/39062中通过@AmoabaKelvin在自己的文档中打开一个目标
* perf(mobile)：当最后一条好路径如此说时，立即拨打中继，@AmoabaKelvin in https://github.com/stablyai/orca/pull/38960
* perf(mobile)：在 https://github.com/stablyai/orca/pull/39057 中通过@AmoabaKelvin 立即显示主页的标头并并行读取钥匙串令牌
* perf(mobile)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39003 中将聊天保持安装在其终端后面
* perf(mobile)：仅解析不断增长的降价块并以 30 Hz 的频率显示上限，作者为 https://github.com/stablyai/orca/pull/39031 中的 @AmoabaKelvin
* perf(mobile)：停止实时输入和键盘高度重新渲染整个会话由@AmoabaKelvin在https://github.com/stablyai/orca/pull/39032
* perf(mobile)：在 https://github.com/stablyai/orca/pull/38953 中切片终端写入并跳过 @AmoabaKelvin 的页面回显合并器
* perf(runtime)：绑定电话终端输出，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38983 中提供端到端信用
* perf(native-chat)：在 https://github.com/stablyai/orca/pull/38956 中重用 @brennanb2025 未更改的电话记录行
* perf(mobile)：从内存中重新打开源代码管理的更改列表，而不是由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38988 中重新扫描
* perf(mobile)：在 https://github.com/stablyai/orca/pull/38958 中@AmoabaKelvin 在没有登录 shell 的情况下重新验证“+”代理列表
* perf(runtime): 在https://github.com/stablyai/orca/pull/38977中缓存@AmoabaKelvin发现的OMP和Grok模型
* perf(mobile)：在https://github.com/stablyai/orca/pull/38916中通过@AmoabaKelvin在主机门中重用连接的状态探针
* perf(mobile)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39047 中探测空闲中继会话
* perf(mobile)：在 https://github.com/stablyai/orca/pull/39011 中由@AmoabaKelvin 在每个主机连接上共享一个 clientEvents 流
* perf(mobile)：在 https://github.com/stablyai/orca/pull/39019 中由 @AmoabaKelvin 序列化桥接回复一次
* perf(mobile)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39053 中的本机绑定来密封和解码套接字帧
* perf(ios): 在 https://github.com/stablyai/orca/pull/39056 中重用 @AmoabaKelvin 编译的网络块规则
* perf(mobile): 通过@AmoabaKelvin 在https://github.com/stablyai/orca/pull/39063 中缩短页面封面淡入淡出
* perf（移动）：修剪家庭和主机列表，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39076 中重新渲染
* perf(mobile)：在https://github.com/stablyai/orca/pull/38796中通过@OrcaWin导出状态而不是在效果中同步它
* 保留电话终端流并通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38798 中一起准备详细信息卡
* 修复（移动端）：失败的页面会重新加载而不是重新下载；截止日期仅计算 https://github.com/stablyai/orca/pull/38868 中 @Jinwoo-H 的前台时间
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38918 中 @AmoabaKelvin 良好恢复后重置 WebView 重新安装预算
* perf(runtime)：@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38979 中每秒最多统计一次设备注册表

### 工作区、侧边栏和入门

*在您的主文件夹中启动新的配置文件，跨计算机嵌套工作区并整理侧边栏。*

* 在 https://github.com/stablyai/orca/pull/37898 中 @brennanb2025 在 ~ 文件夹工作区中打开新的桌面配置文件
* 稍后在 https://github.com/stablyai/orca/pull/38028 中通过 @brennanb2025 设置时默认为荣誉代理
* 让多存储库文件夹工作区成为父工作区和嵌套工作区，包括在 https://github.com/stablyai/orca/pull/38904 中的 @Jinwoo-H 的其他计算机上
* 在 https://github.com/stablyai/orca/pull/38740 中 @Jinwoo-H 在其他机器上将工作空间嵌套在父级下
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/39018 中将现有工作树附加到 CLI 中的文件夹工作区
* 限制 @brennanb2025 在 https://github.com/stablyai/orca/pull/38773 中声称的工作树准备的生命周期
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38824 中保持长设置命令不隐藏工作区设置控件
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38367 中突出显示工作区卡座席行中@qq2144 的焦点聊天
* 修复（侧边栏）：包括固定在 https://github.com/stablyai/orca/pull/39145 中@AmethystLiang 折叠的所有项目中
* 修复（侧边栏）：使所选卡片的主机药丸轮廓在 https://github.com/stablyai/orca/pull/39054 中 @nwparker 的昏暗主题中可见
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38841 中通过@nwparker 安静选定工作区卡上的主机药丸轮廓
* 修复（自动化）：现在运行返回保存的挂起行； https://github.com/stablyai/orca/pull/38217 中@Jinwoo-H 的启动器奇偶校验
* 修复（自动化）：运行列表发送字节限制的预览；运行详细信息在 https://github.com/stablyai/orca/pull/38218 中读取 @Jinwoo-H 的一整行
* 修复（i18n）：翻译 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39233 中最近的桌面和移动副本

### 插件和 CLI

*管理 CLI 的插件，区分相似的插件并保持 CLI 命令正常工作。*

* cli：在 https://github.com/stablyai/orca/pull/36647 中添加 orca 插件安装、更新、卸载和目录列表/add/rm by @nwparker
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/39181 中重新设计插件详细信息
* 当两个插件或主题在 https://github.com/stablyai/orca/pull/39205 中共享 @nwparker 的名称时，向发布者显示
* 修复（插件）：在 https://github.com/stablyai/orca/pull/38751 中@nwparker 在打包版本中发送插件作者输入
* 修复（插件）：转发 editor.merges，由 @emaarco 在 https://github.com/stablyai/orca/pull/38546 中从独立的来宾编辑器框架中合并
*修复（插件）：重新审查任何插件，其目录将其移动到https://github.com/stablyai/orca/pull/36643中的@nwparker的另一个存储库
*修复（插件）：说完全访问插件也可以通过https://github.com/stablyai/orca/pull/37933中的@nwparker控制Orca
* 修复（插件）：当语言包在 https://github.com/stablyai/orca/pull/39187 中翻译 @nwparker 受保护的安全文本时，发出警告，而不是失败
*壮举（cli）：添加orca主机rm，并在https://github.com/stablyai/orca/pull/38774中的@nwparker在main中每次删除SSH目标后进行清理
* 壮举(cli)：使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38719 中的 Orca 聊天重命名来重命名聊天选项卡
* 修复（cli）：在 https://github.com/stablyai/orca/pull/38793 中通过 @nwparker 将位置终端句柄指向 --terminal
*修复（cli）：当cwd位于https://github.com/stablyai/orca/pull/38086中@anmol0b的每个工作树之外时，使用终端的工作树
*修复（cli）：在https://github.com/stablyai/orca/pull/37734中通过@gsxdsm发送超大本地运行时请求之前拒绝它们
*修复（cli）：当https://github.com/stablyai/orca/pull/39052中的@nwparker无法记录环境使用情况时，保持远程只读命令正常工作

### 安全与 trust

*在运行您未批准的代码之前询问并锁定本地服务器、文件和配对。*

*修复（钩子）：仅当其内容与https://github.com/stablyai/orca/pull/37977中@nwparker批准的脚本匹配时才运行工作树设置
* 修复（钩子）：一旦创建的工作树的内容被https://github.com/stablyai/orca/pull/37978中的@nwparker批准，就运行创建的工作树的设置
* 修复（hooks）：在 https://github.com/stablyai/orca/pull/37931 中运行 @nwparker 提交的 .orca/issue-command 之前询问
*修复（自动化）：存储批准的设置哈希并在运行分支与https://github.com/stablyai/orca/pull/37979中的@nwparker不同时跳过设置
* 修复（设置）：在 @nwparker 在 https://github.com/stablyai/orca/pull/37937 中保存之前，在对话框中查看导入的设置脚本
* 修复（shell）：在编辑器中打开链接脚本并显示程序，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/37930 中启动它们
* 修复（编辑器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/37934 中的设置中通过 id 启动“在编辑器中打开”
* 修复（浏览器）：https://github.com/stablyai/orca/pull/37938 中的 @nwparker 在本地 CDP 代理上需要每个会话令牌
* feat(runtime)：限制每个源未经身份验证的 WebSocket 连接，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/39206 中记录 client 源类
* 修复（配对）：注册表保存无法再恢复 @nwparker 在 https://github.com/stablyai/orca/pull/39192 中写入时撤销的设备
*修复（文件）：通过https://github.com/stablyai/orca/pull/36343中的@Adolanium将分阶段保存限制为其所有者
* 修复（中继）：在 https://github.com/stablyai/orca/pull/36346 中 @Adolanium 读取请求正文之前授权保留路由

### 测试、CI 和维护

*修剪低价值测试，按所有者重新组织代码，修复 e2e 规范并维护 CI。*

* 测试：在 https://github.com/stablyai/orca/pull/38961 中 @nwparker 从 PATH 运行真实代理 CLI 的单元测试失败
*测试：删除https://github.com/stablyai/orca/pull/38817中@OrcaWin的1148个低值IPC和文件系统测试
*测试：删除https://github.com/stablyai/orca/pull/38812中@OrcaWin的1186个低价值Git和IPC测试
* 测试：删除 https://github.com/stablyai/orca/pull/38828 中 @OrcaWin 的 1292 个低值 IPC、SSH 和工作区测试
*测试：删除https://github.com/stablyai/orca/pull/38837中@OrcaWin的1296个低值模拟和投影测试
*测试：删除https://github.com/stablyai/orca/pull/38755中@OrcaWin的137个低价值自动化和帐户测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38754中的286个低价值会话历史测试
*测试：删除https://github.com/stablyai/orca/pull/38783中@OrcaWin的319个低值守护进程和终端测试
* 测试：删除https://github.com/stablyai/orca/pull/38770中@OrcaWin的383个低值运行时和帐户测试
* 测试：删除 https://github.com/stablyai/orca/pull/38905 中 @OrcaWin 的 431 个低值配置文件、守护进程和日志测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38778中的477个低价值代理和平台测试
*测试：删除https://github.com/stablyai/orca/pull/38846中@OrcaWin的497个低值模拟和投影测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38973中的507个低值会话和浏览器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38922中的513个低值持久性和基准测试
* 测试：删除https://github.com/stablyai/orca/pull/38909中@OrcaWin的52个低价值插件、检查和运行时测试
*测试：删除https://github.com/stablyai/orca/pull/38965中@OrcaWin的548个低价值使用和生命周期测试
*测试：删除https://github.com/stablyai/orca/pull/38881中@OrcaWin的561个低值模拟和投影测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38775中的594个低值Codex测试
*测试：删除https://github.com/stablyai/orca/pull/38913中@OrcaWin的599个低值持久性和迁移测试
* 测试：删除 https://github.com/stablyai/orca/pull/38790 中 @OrcaWin 的 607 个低值守护进程和终端测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38885中的677个低值模拟和投影测试
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38932中的697个低值代理和插件测试
* 测试：删除https://github.com/stablyai/orca/pull/38763中@OrcaWin的859个低值运行时和帐户测试
* 测试：删除https://github.com/stablyai/orca/pull/38871中@OrcaWin的864个低价值聊天和移动测试用例
*测试：删除https://github.com/stablyai/orca/pull/38943中@OrcaWin的872个低值PTY和shell测试
* 测试：删除https://github.com/stablyai/orca/pull/38799中@OrcaWin的987个低值运行时和Git测试
* 重构（主要）：https://github.com/stablyai/orca/pull/38813 中 @nwparker 按功能所有权对 RPC 和编排模块进行分组
* 重构（主要）：https://github.com/stablyai/orca/pull/38638 中 @nwparker 所有者的组会话生命周期和日志模块
* 重构（渲染器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38845 中组织启动、工作区、浏览器和搜索所有者
* 重构（渲染器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39134 中组织终端 PTY 传输所有者
* 重构（终端）：https://github.com/stablyai/orca/pull/39146 中 @nwparker 分组渲染和停车业主
* 重构（终端）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39113 中组织输入、clipboard、链接和完成所有者
* 重构（终端）：通过https://github.com/stablyai/orca/pull/39188中的@nwparker组织PTY连接生命周期所有者
* 重构（ipc）：删除https://github.com/stablyai/orca/pull/37928中@nwparker未使用的shell：copyFile处理程序
* 重构（native-chat）：在https://github.com/stablyai/orca/pull/38978中通过@brennanb2025在行限制下分割转录槽
* 重构（agent-session）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/39023 中与手机共享模型快照规则
* 通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38835 中解决一个共享模块中的工作区沿袭父级
*测试（acp）：将恢复模型测试指向https://github.com/stablyai/orca/pull/39144中@brennanb2025移动的主机测试装置
*修复（测试）：将ACP恢复模型测试指向https://github.com/stablyai/orca/pull/39140中@Jinwoo-H移动的主机测试助手
* 修复（测试）：跟随 https://github.com/stablyai/orca/pull/39097 中 @1aifanatic 移动的终端 RPC 模块
* 修复（工具）：在 https://github.com/stablyai/orca/pull/38941 中 @AmoabaKelvin 移动的脚本中点 orca.yaml 设置和移动类型检查
* 修复（移动版）：将类型检查脚本指向 https://github.com/stablyai/orca/pull/38925 中 @brennanb2025 移动的类型检查运行器
* 修复（移动）：在 https://github.com/stablyai/orca/pull/39094 中 @AmoabaKelvin 的速度批处理（审查测试、页面预算）后取消中断主程序
* ci(e2e)：将听写路由删除到https://github.com/stablyai/orca/pull/39149中@brennanb2025删除的规范
* ci(mobile): 修复 https://github.com/stablyai/orca/pull/39133 中 @brennanb2025 未通过路径文字检查的移动日志文件路径
* 测试（agent-hooks）：在 @nwparker 在 https://github.com/stablyai/orca/pull/39171 中计时 Windows 负载传送之前，对 PowerShell 进行热编码
* 测试（e2e）：将 GitHub 项目板规格与 click-wake 和 @nwparker 在 https://github.com/stablyai/orca/pull/39193 中的本地化错误 toast 对齐
* 测试（e2e）：在 https://github.com/stablyai/orca/pull/38757 中 @brennanb2025 关闭断开连接的托管 SSH 选项卡时回答关闭确认
* 测试（e2e）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/39208 中检查两个真实主机上的相同路径编辑器模型
* 测试（e2e）：在 https://github.com/stablyai/orca/pull/39202 中由 @nwparker 驱动代理自动权限中的其他代理权限菜单
* 测试(e2e)：在 https://github.com/stablyai/orca/pull/39190 中的 @nwparker 开始尊重应用内首选项后，修复配对的 HTML 预览链接规范
* 测试(e2e)：在 https://github.com/stablyai/orca/pull/39196 中的 @nwparker 的 csv-url-links 中为每个 CSV 预览提供自己的链接
* 测试（e2e）：将 client 托管的浏览器游览保持在 https://github.com/stablyai/orca/pull/39197 中 @nwparker 的地址栏融合规范之外
* 测试（e2e）：通过https://github.com/stablyai/orca/pull/39201中的@nwparker将后代杀死替身的标记路径保留在argv之外
* 测试（e2e）：根据 @nwparker 在 https://github.com/stablyai/orca/pull/39195 中的窗格底部填充测量终端链接工具提示几何形状
* 测试（e2e）：将运行时主机恢复规范与 https://github.com/stablyai/orca/pull/39198 中的 @nwparker 的两个不同服务器配对
* 测试（e2e）：从 https://github.com/stablyai/orca/pull/39200 中 @nwparker 保留的阶段启动恢复中重新启动 WSL 移动栅栏规范
* 测试（e2e）：在 https://github.com/stablyai/orca/pull/39204 中的 @nwparker 获得焦点之前，等待编辑器看到每个指针选择
* test(e2e): 在 https://github.com/stablyai/orca/pull/39203 中 @nwparker 执行启动后等待 shell 就绪的最后期限
* ci：通过 https://github.com/stablyai/orca/pull/28784 中的@zanmlakar 将拉取请求工作流程中的每个作业与超时分钟绑定起来
* 修复（ci）：当 https://github.com/stablyai/orca/pull/38819 中的 @nwparker 更改扫描仪脚本时运行依赖性审核
* 文档：添加一个安全策略，指向https://github.com/stablyai/orca/pull/38926中@nwparker的私人漏洞报告
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/38752 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39026 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/39125 中更新自述文件下载徽章

## 新贡献者
* @Sn1perdog 在 https://github.com/stablyai/orca/pull/37850 中做出了第一个贡献
* @registered2nd 在 https://github.com/stablyai/orca/pull/37820 中做出了第一个贡献
* @EdgerHao 在 https://github.com/stablyai/orca/pull/38009 中做出了第一个贡献
* @sungman-cho 在 https://github.com/stablyai/orca/pull/37755 中做出了第一个贡献
* @jeky22 在 https://github.com/stablyai/orca/pull/38046 中做出了第一个贡献
* @emaarco 在 https://github.com/stablyai/orca/pull/38546 中做出了第一个贡献
* @emmahyde 在 https://github.com/stablyai/orca/pull/38228 中做出了第一个贡献
* @qq2144 在 https://github.com/stablyai/orca/pull/38367 中做出了第一个贡献
* @daghantektepe 在 https://github.com/stablyai/orca/pull/38212 中做出了第一个贡献
* @Hunter-Pittman 在 https://github.com/stablyai/orca/pull/37878 中做出了第一个贡献
* @gavande1 在 https://github.com/stablyai/orca/pull/38497 中做出了第一个贡献
* @terminalchai 在 https://github.com/stablyai/orca/pull/37904 中做出了第一个贡献
* @DaydreamCoding 在 https://github.com/stablyai/orca/pull/33861 中做出了第一个贡献
* @vorabrijesh 在 https://github.com/stablyai/orca/pull/37685 中做出了第一个贡献
* @ddlw 在 https://github.com/stablyai/orca/pull/35095 中做出了第一个贡献
* @Adolanium 在 https://github.com/stablyai/orca/pull/36346 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.251...v1.4.252

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.252` · 📅 发布：2026-11-07 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.252)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
