---
title: "orca v1.4.246"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.246"
version: "v1.4.246"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# orca v1.4.246

## Orchestrator V3、改进的终端、实验性的聊天 UI 以及更新的手机应用程序 ✨

- 🤝 **Orchestrator V3：** 代币更加高效和可靠。与 CLI 代理和聊天 UI 配合使用，聊天 UI 中的可视工作人员指示器可帮助您跟踪进度。
- 🔕 **更安静的通知：** Orca 现在会在编排期间过滤掉工作代理通知。
- 📱 **焕然一新的 Orca Mobile：** 选择**浅色、深色或系统**，然后在“设置”中选择您的**显示语言**。享受更干净的屏幕、更平滑的工作表和更快的工作区列表。
- 💬 **聊天 UI 已不再是实验性的：** 为每个客服人员选择“聊天”或 CLI，在工作时排队跟进，并在达到使用限制时继续使用另一个帐户或客服工具。
- ⌨️ **改进的终端：** 终端代理的输入速度更快，会话恢复更可靠，以及文本渲染、链接和填充的修复。
- 🎨 **让 Orca 成为您的：** 选择独立于应用程序的编辑器主题、添加背景图像或将整个窗口与您的终端主题相匹配。
- 🧩 **探索社区插件：** 浏览社区目录，尝试语法主题，并使用 TypeScript 和 TSX 构建您自己的面板。
- 🖱️ **改进计算机使用和浏览器使用：** 更可靠的后台浏览、登录弹出窗口、上传和下载，以及 Windows 和 Linux 上的计算机使用修复。

## 亮点

- **移动主题和语言选择器：** 为手机应用程序选择**浅色、深色或系统**，并在“设置”→“外观和语言”中选择您的**显示语言**。
- **焕然一新的手机应用程序：** 主屏幕专注于您的需求、紧凑的顶部栏、底部搜索、过滤芯片、更清晰的列表和更平滑的表格。工作区列表加载数据较少，图像和美人鱼图支持捏合缩放，iOS 可以显示内联 HTML 卡和预览。也可以从您的手机运行自动化。
- **插件：** 社区目录默认可见，具有公共安装计数和更清晰的发布者信息。插件作者无需单独的构建步骤即可获得 TypeScript 和 TSX、基于组件的面板、工作人员通信、热重载以及用于测试和屏幕截图的 CLI 工具。
- **聊天用户界面：** 聊天处于实验阶段。在每个客服人员的“设置”行中选择“聊天”或“CLI”，并提供默认模型和工作量选择。代理工作时默认后续消息队列； Cmd/Ctrl+Enter 直接发送一个进入运行回合。切换帐户以进行开放聊天，或继续与另一个帐户或代理工具进行使用限制的对话。
- **主题和编辑器：** 设置单独的代码编辑器主题，调整编辑器排版，使用背景图像，并在整个窗口中应用匹配终端。在图像旁边预览 SVG 源，click 缩放图像，按住 Alt 拖动平移。
- **源代码控制：**解决桌面或手机上的冲突并完成合并。从移动差异屏幕打开每个更改的文件，从配对的手机返回草稿拉取请求，并使用当前提供商数据刷新检查和评论。
- **浏览器和计算机使用：** 代理可以使用登录和付款弹出窗口、通过嵌套框架中的文件选择器按钮上传、应答页面对话框并将下载保存到请求的路径。当客服人员使用后台浏览器页面时，它们会保持活动状态。
- **Orchestrator V3：** 令牌效率更高且更可靠。当工作人员报告回来时，协调员结束轮班并醒来，CLI 状态和收件箱输出较短。它在聊天 UI 中效果很好，其中可视化工作人员卡和活动指示器可帮助您跟踪进度。给已完成的工人分配后续任务并重新开放关闭的工人。
- **日常速度和改进：** 更少的整个应用程序与许多聊天的连接，更快的 shell 提交，更快的工作树签出，以及更少的聊天和差异重绘。子代理开始崩溃，闲置代理在桌面和电话上分组在一起。

## 兼容性和升级说明

- **每个客服人员聊天或 CLI：** 聊天 UI 不再需要实验开关。现有用户保留其启动首选项，现有对话保留其表面。新安装从终端开始。在设置 → 代理中选择聊天或 CLI 以及默认模型和工作量。
- **默认情况下跟进队列：** 当代理工作时，Enter 会将您的下一条消息排队。 Cmd/Ctrl+Enter 将其发送到正在运行的回合。在“设置”→“聊天”→“行为”中关闭**队列跟进**以更改默认值。在电话上，按住“发送”以选择“队列”或“引导”。手机遵循其主机的设置；较旧的 clients 或没有队列支持的主机继续立即发送。
- **移动应用程序更新：** 本机设置更改（包括主题和语言选择器）需要更新的移动应用程序。更新 Orca Mobile 以及您的桌面或服务器以获得完整体验。
- **插件 trust 和更新：** Orca 在 trust 使用非官方插件之前发出警告。请求更多访问权限的更新等待单独审核，并在加载时再次验证已安装的插件内容。
- **独立的桌面插件视图：** 插件面板和自定义编辑器现在使用单独的进程和存储，并阻止直接网络访问。浏览器和服务 clients 保留其现有的 iframe 行为。
- **WSL 主机：** 恢复或切换工作区时，停止的发行版保持停止状态，并且阻止的窗格提供“启动”。关闭 WSL 主机设置会停止新主机并移动，同时保存的主机继续提供服务。空闲的 WSL 服务器可以在五分钟后退出，而无需在您自己的 shell 中设置空闲超时。
- **逆戟鲸技能：** 未经编辑的捆绑技能会自动更新。您更改的技能仍会提示进行审核。

---

## 产品体验

### 终端

*更快的提示提交、更可靠的恢复以及文本粗细、链接、填充和 Windows 启动错误的修复。*

* 绑定进程内 macOS 进程表的阻塞调用和 ps 回退 (#31783) by @nwparker in https://github.com/stablyai/orca/pull/36282
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/16870 中修复 macOS 守护进程 PTY kqueue 描述符泄漏
* 重启后停止终端文本变为粗体 (STA-4042) by @nwparker in https://github.com/stablyai/orca/pull/36463
* 通过 https://github.com/stablyai/orca/pull/36482 中的 @AmoabaKelvin 链接包裹在每行表格单元格内的 URL
* 跳过 @nwparker 在 https://github.com/stablyai/orca/pull/36490 中对 WinPTY 窗格进行的 ConPTY 输入读取器检查
* 通过 https://github.com/stablyai/orca/pull/36422 中的 @brennanb2025 解释终端启动失败时 Git Bash 控制台耗尽的情况
* 为 https://github.com/stablyai/orca/pull/16991 中的 @brennanb2025 保留未受影响的 Windows 启动失败的 Git Bash 容量覆盖
* 在 https://github.com/stablyai/orca/pull/36171 中添加 @brennanb2025 的聊天 UI 升级提示和聊天/终端默认图块
* 在 https://github.com/stablyai/orca/pull/36483 中 @alpenshtokk 的 Agent Dashboard 终端预览中的 Mod+click 上打开 OSC 8 超链接
* 在https://github.com/stablyai/orca/pull/36614中@nwparker在提示符下立即提交到空闲的shell
* 在https://github.com/stablyai/orca/pull/36753中@AmethystLiang结束多个PTY而不阻塞资源管理器
* 当守护进程报告 https://github.com/stablyai/orca/pull/36620 中的 @Pr1p 会话消失时，Respawn 会静默恢复本地窗格
* 在 https://github.com/stablyai/orca/pull/36732 中 @brennanb2025 继续聊天之前关闭终端
* 在https://github.com/stablyai/orca/pull/36789中通过@anmol0b对每个轴的两个边缘应用填充
* 当默认代理为 https://github.com/stablyai/orca/pull/36927 中的 @AmoabaKelvin 自动时，在空工作区中打开 shell，而不是未经请求的聊天

### 原生聊天

*排队跟进、帐户交接和更清晰的对话卡，更少的重画和更可靠的问题和答复。*

* 代理消息卡不再为 https://github.com/stablyai/orca/pull/36189 中 @brennanb2025 的复制按钮保留一行
* 防止不相关的代理状态更新在 https://github.com/stablyai/orca/pull/34596 中通过 @brennanb2025 重新绘制每个本机聊天
* 在https://github.com/stablyai/orca/pull/35758中@brennanb2025的代理通知后保持异步问题控件可用
* 隐藏取消的异步问题并显示 @brennanb2025 在 https://github.com/stablyai/orca/pull/35870 中提出的新问题
* Right-click Copy 不再提供 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36405 中错过的 click 选项
* 通过 https://github.com/stablyai/orca/pull/36306 中的代理通知和 @brennanb2025 未送达的回复保留待决问题
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/35624 中运行许多聊天时，减少整个应用程序的故障
* 在 https://github.com/stablyai/orca/pull/34933 中 @brennanb2025 重新启动 Orca 后保留未发送的移交消息
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/36113 中发现期间保持模型选择器选择稳定
* 停止取消的图像，在 https://github.com/stablyai/orca/pull/36448 中 @AmoabaKelvin 的隐藏聊天消息中留下额外的空间
* 删除的屏幕截图由 @brennanb2025 在 https://github.com/stablyai/orca/pull/31779 中写入一次，直接写入聊天的附件存储中
* 停止已完成的回合，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36474 中向屏幕阅读器宣布“响应”
* 聊天重命名还会重命名https://github.com/stablyai/orca/pull/34192中@brennanb2025的代理自己的对话
* 聊天 UI 处于实验阶段：每个代理的聊天或 CLI 选择决定 @brennanb2025 在 https://github.com/stablyai/orca/pull/36110 中打开的内容
* 在 https://github.com/stablyai/orca/pull/36515 中 @AmoabaKelvin 重新打开后保留钩子阻止提示的 Worked for line
* 在 https://github.com/stablyai/orca/pull/36488 中通过 @AmoabaKelvin 滚动或加载时保持聊天图像缩略图呈方形
* 停止将恢复的 ACP 回复归因于 @brennanb2025 在 https://github.com/stablyai/orca/pull/36302 中的外部活动
* 共享聊天选项，通过 https://github.com/stablyai/orca/pull/36582 中的 @brennanb2025 在桌面和手机上读取所有权
* @brennanb2025 在 https://github.com/stablyai/orca/pull/36597 中无人认领的聊天上传将在 7 天后过期
* 将每个聊天更改保存为密钥记录，并从 https://github.com/stablyai/orca/pull/36024 中的 @brennanb2025 的最新版本重新打开
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/34987 中发布空闲渲染器完成提要所有者
* 通过@brennanb2025 在 https://github.com/stablyai/orca/pull/36624 中跨桌面和手机共享聊天选项
* 本机聊天：在代理工作时对发送的消息进行排队（默认情况下打开，设置切换，Cmd/Ctrl+Enter 立即发送），由 @brennanb2025 在 https://github.com/stablyai/orca/pull/36588 中发送
* 新的聊天模型选择器打开时显示完整列表，而不是 @brennanb2025 在 https://github.com/stablyai/orca/pull/36646 中的部分列表
* 原生聊天：当您键入后续内容时，停止会变成发送，并在 https://github.com/stablyai/orca/pull/36655 中通过 @brennanb2025 提供快捷方式提示
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36430 中恢复来保留排队命令和卡顺序
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/31241 中继续与另一个帐户或代理工具进行使用限制的聊天
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/36653 中找不到代理时，代理消息卡会保留发件人的代理图标
* 在 https://github.com/stablyai/orca/pull/36893 中@AmoabaKelvin 的问题卡文本中保留换行符
* 聊天 UI 由 @nwparker 在 https://github.com/stablyai/orca/pull/36891 中启动
* @AmethystLiang 在https://github.com/stablyai/orca/pull/36943更新14组微信社区二维码
* 在 https://github.com/stablyai/orca/pull/36917 中通过 @OrcaWin 引导异步问题答案而不是排队重复问题
* 当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36944 中通过 Stop 钩子发回 Claude 的回复时，保持 Claude 的回复可见
* 使https://github.com/stablyai/orca/pull/37096中的@AmethystLiang更容易扫描代理活动卡时间戳

### 电话和网络

*浅色、深色和系统主题、显示语言选择器、刷新的屏幕、更快的列表和手机上更丰富的预览。*

* 为手机应用程序选择浅色、深色或系统，并在设置 → 外观和语言中选择其显示语言。
* 在 https://github.com/stablyai/orca/pull/35081 中通过 @OrcaWin 从当前任务文本中命名任务复选框
* 在https://github.com/stablyai/orca/pull/35085中通过@OrcaWin保存和重新加载来保留空任务
* 在https://github.com/stablyai/orca/pull/35110中通过@OrcaWin格式化内联代码时保留块和图像
* 将任务复选框与 https://github.com/stablyai/orca/pull/35157 中的 @OrcaWin 的第一个文本行对齐
* 在https://github.com/stablyai/orca/pull/35171中通过@OrcaWin切换配色方案时保留编辑器样式
* 在 https://github.com/stablyai/orca/pull/36125 中恢复警报，无需本地推送 @AmoabaKelvin
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36160 中解决合并冲突并从手机完成合并
* 在 https://github.com/stablyai/orca/pull/36208 中 @AmoabaKelvin 执行斜杠命令后，将移动聊天附加到空闲的 Claude 窗格
* 将每个文本输入匹配到聊天编辑器，并通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36166 中重建终端底座
* 在 https://github.com/stablyai/orca/pull/34955 中完全取消 @OrcaWin 重命名的文件
* iPhone Duo 键轨，带方向键、分离式终端面板和半折叠布局，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35177 中设计
* 当 https://github.com/stablyai/orca/pull/36321 中的 @brennanb2025 的功能更改时刷新电话选项卡流
* 点击会议标题即可查看其全名、路径和主持人（@brennanb2025 在 https://github.com/stablyai/orca/pull/30389 中）
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36437 中统一整个应用程序的角半径
* 在 https://github.com/stablyai/orca/pull/36464 中使用 @AmoabaKelvin 的对话名称引导工作区列表代理行
* 翻译 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36489 中最近的桌面和移动副本
* 按住电话发送，直到 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36494 上出现新的 Claude 标签的作曲家
* 当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36507 中将历史记录设置为无限制时，显示每个会话
* 让 Markdown 编辑器选择在长文件深处可见，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/36505
* 在 https://github.com/stablyai/orca/pull/36395 中点击 @brennanb2025 的电话会话选项卡时显示详细信息卡
* 在 https://github.com/stablyai/orca/pull/36516 中 @AmoabaKelvin 在 Android 终端中绘制 Claude Code 的 ⏵⏵ 模式标记
* 紧凑的顶部栏、底部搜索和过滤芯片由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36535 中提供
* 围绕需要您的地方重建家园，@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36520 中将操作固定在底部
* 支持 @brennanb2025 在 https://github.com/stablyai/orca/pull/31617 中 Orca Mobile 的自动化
* 让手机用户在 @brennanb2025 https://github.com/stablyai/orca/pull/36451 的结构化回复中选择下一条消息的型号
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36304 中在桌面和手机上保持已确定的许可通知紧凑
* 由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36585 中重新设计工作表、选择器和列表屏幕
* 绘制 SVG 文件并缩放每个图像预览，Android 由 @nwparker 包含在 https://github.com/stablyai/orca/pull/36608 中
* 捏缩放美人鱼图，并在不缩放页面的情况下缩放图像，作者：https://github.com/stablyai/orca/pull/36648 中的@nwparker
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36799 中将工作树目录轮询作为行增量发送
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36800 中的目录增量读取主工作树计数
* 在 https://github.com/stablyai/orca/pull/36315 中通过@brennanb2025 在手机上打开本地聊天
* Gzip 大框架，适用于通过 @nwparker 在 https://github.com/stablyai/orca/pull/36801 中读取它们的手机
* 在 https://github.com/stablyai/orca/pull/36162 中@brennanb2025 在电话聊天中显示代理消息卡
* @nwparker 在 https://github.com/stablyai/orca/pull/36802 中进行拨号时停止呼叫主机已断开连接
* 由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36713 中完善新闻反馈、纸张运动、状态、间距和布局跳跃
* 通过 https://github.com/stablyai/orca/pull/36859 中的 @nwparker 将配对服务器工作区轮询作为行增量发送
* 将设置、源代码管理和剩余列表放在 https://github.com/stablyai/orca/pull/36719 中的 @AmoabaKelvin 的共享行和顶栏上
* 当 https://github.com/stablyai/orca/pull/36860 中的@nwparker 的仓库保持不变时，回答主机屏幕的仓库投票不变
* 在 https://github.com/stablyai/orca/pull/36861 中 @nwparker 已经证明其 shell 的状态下打开页面
* 在 https://github.com/stablyai/orca/pull/36862 中的 @nwparker 到达主机的完整目录时绘制主机的第一行
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/36863 中的拨号仍在重试时，保持首次打开检查
* 只要桌面允许，就可以直接握手，@nwparker in https://github.com/stablyai/orca/pull/36864
* https://github.com/stablyai/orca/pull/36885 中的 @AmoabaKelvin 随处按下反馈、更平滑的运动以及减少纸张运动
* https://github.com/stablyai/orca/pull/36530 中 @Moran45 通过 scrcpy 控制套接字发送 Android 输入
* 防止目录快照延迟回复，并通过 https://github.com/stablyai/orca/pull/36902 中的 @nwparker 修剪快照路径
* 更轻的活性探针、免预览的终端列表、更便宜的终端 gzip（https://github.com/stablyai/orca/pull/36903 中的 @nwparker）
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36481 中从手机删除工作区时运行存储库的存档挂钩
* 当 https://github.com/stablyai/orca/pull/36922 中的 @AmoabaKelvin 阻止桌面请求时，保持附加照片正常工作
* 当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36933 中从手机切换帐户时，重新启动正在运行的 Claude 会话
* 默认折叠子代理列表并通过 @nwparker 在 https://github.com/stablyai/orca/pull/36939 中对空闲子代理进行分组
* 当分体式键盘打开时，阻止展开的 iPhone Duo 崩溃 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36948
* 在 https://github.com/stablyai/orca/pull/36949 中 @AmoabaKelvin 在 Android 滚动期间绘制历史记录时停止聊天跳跃
* 在 https://github.com/stablyai/orca/pull/36986 中由 @AmoabaKelvin 在 iOS 上渲染内联 HTML 卡和预览
* 无头主机记录终端活动，以便手机的最近排序由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36974 中移动
* 以名为 .jpg 的 JPEG 格式发送 iPhone 库照片，而不是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36989 中以名为 .png 的 HEIC 格式发送
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36970 中的会话 Markdown 选项卡中显示工作区图像
* 在 Android 上进入分屏时保持应用程序的状态和布局 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36977
* 在 https://github.com/stablyai/orca/pull/36947 中点击 @AmoabaKelvin 在 Android 上自动更正的单词时保留光标和键盘
* 在 @AmoabaKelvin 的 https://github.com/stablyai/orca/pull/36966 丰富的 Markdown 编辑器中横向滚动宽表格
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37058 中从带有空格的结帐路径构建 iOS
* 将需求输入警报与桌面和手机上的已完成警报分开，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/36941
* 在https://github.com/stablyai/orca/pull/36953中显示@AmoabaKelvin在移动设备上读取的屏幕截图和内联降价图像
* 排队消息面板适合其行，保存/取消适合其标签，作者：https://github.com/stablyai/orca/pull/36928 中的 @AmoabaKelvin
* 让配对的手机将拉取请求重新转换为 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37000 中的草稿
* 在 https://github.com/stablyai/orca/pull/36937 中由 @AmoabaKelvin 打开 diff 屏幕上的每个更改的文件

### 插件

*社区目录、更清晰的 trust 和更新评论、独立的桌面视图和更完整的 TypeScript 插件开发工作流程。*

* 将插件快捷方式保留到 https://github.com/stablyai/orca/pull/36176 中的@AmethystLiang 聚焦的浏览器页面
* 在trusting非官方插件之前发出警告；在 https://github.com/stablyai/orca/pull/36218 中一一查看 @nwparker 的访问增长更新
* 停止报告 https://github.com/stablyai/orca/pull/36214 中 @nwparker 的插件卸载情况（安装计数是累积的）
* 保护 trust 对话框、输入对和插件名称免受 @nwparker 在 https://github.com/stablyai/orca/pull/36220 中的数据插件的影响
* 仅打开安装源存储库链接并仅渲染 https://github.com/stablyai/orca/pull/36270 中 @nwparker 提供的主机服务插件图像
* 在 https://github.com/stablyai/orca/pull/36277 中@nwparker 在每次加载时重新验证已安装的插件内容
* 需要明确批准 https://github.com/stablyai/orca/pull/36279 中 @nwparker 授予的 RPC 插件指纹
* 从存储库所有者派生发布者，就像 https://github.com/stablyai/orca/pull/36281 中 @nwparker 的 Go 模块路径
* 在https://github.com/stablyai/orca/pull/36280中添加由@nwparker创建、验证和检查的orca插件
* 修复 orca 插件在没有发布者的情况下验证清单的问题，由 @nwparker 在 https://github.com/stablyai/orca/pull/36296 中进行
* https://github.com/stablyai/orca/pull/36294中@nwparker默认显示社区目录
* 在https://github.com/stablyai/orca/pull/36288中添加orca插件开发加载/卸载/重新加载、列表、日志、启用和禁用@nwparker
* 澄清所选主题并确认 https://github.com/stablyai/orca/pull/35926 中@vale-c 选择的其他模式
* 显示省略 xmlns 的图标主题 SVG（最小图标什么也不显示），作者：https://github.com/stablyai/orca/pull/36436 中的 @nwparker
* 显示目录条目自己的发布者，而不是 https://github.com/stablyai/orca/pull/36466 中 @nwparker 的目录所有者
* 让启用的插件语法击败 Orca 在 https://github.com/stablyai/orca/pull/36468 中 @nwparker 猜测的语言
* 当自动更新等待您在 https://github.com/stablyai/orca/pull/36462 中的 @nwparker 审核时告知一次
* 停止在 https://github.com/stablyai/orca/pull/36471 中通过 @nwparker 绘制禁用插件的终端主题
* 在 https://github.com/stablyai/orca/pull/36479 中 @nwparker 在第二个 click 上关闭切换插件设置
* 在 https://github.com/stablyai/orca/pull/36486 中添加 @nwparker 的新官方语法插件的 Try it 示例
* 将插件页面链接到 https://github.com/stablyai/orca/pull/36527 中@nwparker 固定版本中的自述文件
* 接受 @nwparker 在 https://github.com/stablyai/orca/pull/36525 中安装的 Git 中的普通存储库、发布和标记页面 URL
* 通过 https://github.com/stablyai/orca/pull/36219 中的 @nwparker 保护语言包中的每个安全性和破坏性字符串
* 显示 @nwparker 在 https://github.com/stablyai/orca/pull/36537 插件目录中的公共安装计数
* 在 https://github.com/stablyai/orca/pull/36271 中安装 @nwparker 的任何非官方插件之前，请询问“确保您 trust <发布者>”
* 当 SVG 在 https://github.com/stablyai/orca/pull/36636 中的 @nwparker 就地更改时刷新开发文件夹图标主题
* 在语法插件上尝试一下，通过 @nwparker 在 https://github.com/stablyai/orca/pull/36637 中打开一个空白的无标题文件
* I18n（插件）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/36642 中翻译所有语言环境中缺少的插件字符串
* 将社区插件链接到作者的存储库，而不是https://github.com/stablyai/orca/pull/36638中@nwparker的镜像
* https://github.com/stablyai/orca/pull/36565 中@nwparker 插件图标主题中的每个文件夹名称图标
* 避免插件删除线快捷方式冲突 by @AmethystLiang in https://github.com/stablyai/orca/pull/36741
* 在无头服务器上连接插件服务，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/36838 中从 CLI 打开插件
* 拒绝 https://github.com/stablyai/orca/pull/36812 中 @nwparker 来自插件框架的主窗口权限请求
* 独立的插件框架，https://github.com/stablyai/orca/pull/36813 中的 @nwparker 默认关闭
* https://github.com/stablyai/orca/pull/36918 中 @nwparker 的无构建 TS/TSX 插件、打字和创作工具
* https://github.com/stablyai/orca/pull/36814 中 @nwparker 的组件 (TSX) 插件面板
* @nwparker 在 https://github.com/stablyai/orca/pull/36821 中默认打开隔离插件框架
* 插件测试套件：orca/testing、orca 插件测试和 @nwparker 在 https://github.com/stablyai/orca/pull/36969 中的 orca 插件检查
* 插件开发循环：TS 工作人员、带状态的热重载、orca 插件开发观察、@nwparker 在 https://github.com/stablyai/orca/pull/36982 中的创作技巧
* 插件面板与他们的工作人员对话； @nwparker 在 https://github.com/stablyai/orca/pull/37013 中的面板存储、设置和代理事件
* 插件开发循环：orca 插件打开/拍摄、开发发射和 @nwparker 在 https://github.com/stablyai/orca/pull/37008 中修复
* 组件目录 2 和工作人员测试：表单、选项卡、表格、树、markdown、代码、图像，由 @nwparker 在 https://github.com/stablyai/orca/pull/36997 中提供
* 插件开发发出到达面板；修改 https://github.com/stablyai/orca/pull/37026 中 @nwparker 的插件创作技巧
* 插件检查运行worker；检查场景；相对时间，@nwparker，https://github.com/stablyai/orca/pull/37047
* 插件开发循环：开发请求、shot --act、worker-panel 模板、@nwparker 在 https://github.com/stablyai/orca/pull/37049 中的输出优化
* Workspace.changed 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37044 中告诉每个新监听器当前的工作空间
* 插件检查显示绘制的内容；响应式表列；更安静的桌子和堆栈由 @nwparker 在 https://github.com/stablyai/orca/pull/37062
* 插件镜头等待工作人员并在 --act 之后恢复； https://github.com/stablyai/orca/pull/37066 中 @nwparker 的终端批准提示

### 主题、编辑器和预览

*独立的编辑器主题、应用程序背景、排版控件以及更好的 SVG、图像、美人鱼和 PDF 预览。*

* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36173 中保持缩放 PDF 详细文本清晰
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/35004 中使用键盘导航滚动组合差异
* @OrcaWin 在 https://github.com/stablyai/orca/pull/34768 中绑定非活动组合差异主体保留
* 在 https://github.com/stablyai/orca/pull/34791 中保留 @OrcaWin 超出查看历史记录限制的组合差异草稿
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36456 中关闭 Markdown Find 后，立即在 Cmd/Ctrl+F 上重新打开 Markdown Find
* 通过 @Pr1p 在 https://github.com/stablyai/orca/pull/36345 中将文件图标主题应用到编辑器选项卡
* 在 https://github.com/stablyai/orca/pull/9059 中添加 @kevinlangleyjr 的 Slatewave 终端主题
* https://github.com/stablyai/orca/pull/36595 中@AmethystLiang 柔化暗模式应用文本对比度
* 将美人鱼图扩展到 https://github.com/stablyai/orca/pull/36575 中@nwparker 的平移和缩放查看器中
* https://github.com/stablyai/orca/pull/36756 中@AmethystLiang 将默认深色主题文本调整为中点灰色
* https://github.com/stablyai/orca/pull/36581 中 @nwparker 的范围终端颜色覆盖其浅色/深色主题插槽
* 将美人鱼展开按钮保留在 https://github.com/stablyai/orca/pull/36631 中 @nwparker 的 PDF 和 HTML 导出中
* SVG 预览 + 源，以及 @nwparker 在 https://github.com/stablyai/orca/pull/36576 中的拖动平移图像查看器
* 避免由 @nwparker 在 https://github.com/stablyai/orca/pull/25621 中的 Mermaid Preview 代码包装器中出现空白 PDF 页面
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/25554 中安全地渲染格式化的美人鱼标签
* 将 @nwparker 在 https://github.com/stablyai/orca/pull/36823 中带有 HTML 标签的 SVG 图像复制为 PNG
* 内置颜色对符合 WCAG AA，暗模式表面在 https://github.com/stablyai/orca/pull/36561 中保持 @nwparker 的主题
* 适用于每个 Monaco 表面的一个版式解析器 + 由 @nwparker 在 https://github.com/stablyai/orca/pull/36577 中选择加入粗细、线高、连字、尺寸和 macOS 平滑
* https://github.com/stablyai/orca/pull/36578 中 @nwparker 的差异、git 状态、选项卡、分隔线、行、链接的公共标记
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36867 中使暗模式复选框边框可见
* https://github.com/stablyai/orca/pull/36589 中 @nwparker 的应用主题背景图片
* Click 缩放图像查看器，如 Chromium，在 https://github.com/stablyai/orca/pull/36898 中由 @nwparker 按住 Alt 键拖动平移
* 在 https://github.com/stablyai/orca/pull/36570 中选择独立于应用程序主题的代码编辑器主题 @nwparker
* 停止组合差异部分重新渲染 @nwparker 在 https://github.com/stablyai/orca/pull/36921 中写入的不相关设置
* Match Terminal 成为 https://github.com/stablyai/orca/pull/36567 中 @nwparker 的整个窗口的真正应用程序主题
* 通过@nwparker在https://github.com/stablyai/orca/pull/36796中的本地聊天显示主题背景图片
* 在 macOS、Windows 和 Linux 上工作背景不透明度和模糊，作者：@nwparker，https://github.com/stablyai/orca/pull/36580

### 浏览器和计算机使用
*更可靠的后台浏览、弹出窗口、对话框、上传和下载，以及 Windows 和 Linux 计算机使用修复。*

* 当用户在 https://github.com/stablyai/orca/pull/36108 中选择或打开另一个代理时，将代理保留在自己的选项卡上（@AmoabaKelvin）
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36234 中验证 Linux 窗口恢复
* 在 Windows 中保留 Unicode，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36244 中输入
* 停止后台工作树中的代理选项卡每约 10 秒重新加载一次，作者为 https://github.com/stablyai/orca/pull/36245 中的 @AmoabaKelvin
* 将代理下载保存到请求的 --path 中，并在 https://github.com/stablyai/orca/pull/36240 中的 @AmoabaKelvin 没有启动时快速失败
* 当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36251 中进行选项卡切换后使用来自另一个选项卡快照的引用时，会因 browser_stale_ref 失败
* 代理填写、选择、上传并输入更改页面或因 https://github.com/stablyai/orca/pull/36263 中的@AmoabaKelvin 原因而失败
* 当您在 https://github.com/stablyai/orca/pull/36266 中通过 @AmoabaKelvin 切换回来时，防止重新加载 SSH 工作区浏览器页面
* 快照参考可在使用外部 Chromium 的服务器浏览器上使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36276 中
* 让代理和用户在 https://github.com/stablyai/orca/pull/36268 中通过 @AmoabaKelvin 在其页面上回答页面警报、确认和提示对话框
* 在 https://github.com/stablyai/orca/pull/36307 中 @AmoabaKelvin 重新加载窗口后，在第一个代理命令上找到隐藏选项卡
* 返回执行批处理的每一步，而不是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36246 中的“未知浏览器错误”
* 代理浏览器操作报告其更改的内容：导航、选项卡、对话框、下载、控制台错误和页面行（@AmoabaKelvin in https://github.com/stablyai/orca/pull/36278）
* 输入的快照标志、保存为文件的屏幕截图，以及由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36257 中保持浏览器在 Orca 中正常工作的指南
* 在https://github.com/stablyai/orca/pull/36383中通过@AmoabaKelvin初始化Windows控制代理
* 让代理在 https://github.com/stablyai/orca/pull/36253 中以 @AmoabaKelvin 的页面形式驱动登录和付款弹出窗口
* 在 https://github.com/stablyai/orca/pull/36388 中 @AmoabaKelvin 在 Linux 焦点搜索期间保留包装器
* 通过任何框架中的文件选择器按钮上传，包括 https://github.com/stablyai/orca/pull/36390 中 @AmoabaKelvin 的跨源 iframe
* 在 https://github.com/stablyai/orca/pull/36382 中保留 @AmoabaKelvin 在 Linux 上的合成 Unicode 打字
* Orca 下载将新选项卡和弹出页面下载保存到 https://github.com/stablyai/orca/pull/36397 中 @AmoabaKelvin 的 --path
* 在选项卡列表中列出重新启动后恢复的浏览器选项卡，并将它们加载到 https://github.com/stablyai/orca/pull/35563 中的 @AmoabaKelvin 的开关上
* 在 https://github.com/stablyai/orca/pull/35665 中使用 @AmoabaKelvin 的 `tab create --split` 在分割窗格中打开浏览器选项卡
* 阻止双向配对桌面将您的浏览器选项卡发送回自己的选项卡，作者：https://github.com/stablyai/orca/pull/36447 中的 @AmoabaKelvin
* 让 Grab 和 Annotate 在 https://github.com/stablyai/orca/pull/36518 中的 @AmoabaKelvin 中选取模式对话框和弹出窗口中的元素
* 在 https://github.com/stablyai/orca/pull/36519 中的 @AmoabaKelvin 在 Google 登录页面上展示 Electron 自己的用户代理
* 删除 @nwparker 在 https://github.com/stablyai/orca/pull/36834 中留下的崩溃的 orcad 浏览器 sidecar 配置文件
* 使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36900 中的serve-sim 报告的方向垂直显示 iOS 模拟器
* 在 https://github.com/stablyai/orca/pull/37076 中 @AmoabaKelvin 驱动代理时，将代理的页面绘图保留在隐藏的工作树中
* 外部 Chromium 服务器浏览器上的代理填充、选择、键入和全选失败，而不是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37080 中假装成功
* 当面板打开时将浏览器页面聚焦在前面，作者：https://github.com/stablyai/orca/pull/37079 中的 @AmoabaKelvin
* 让重型页面通过 https://github.com/stablyai/orca/pull/37087 中的 @AmoabaKelvin 的配对隧道打开所有连接

### 代理启动、状态和帐户

*选择聊天或 CLI，每个代理的默认模型和工作量，以及更可靠的帐户切换、发现和状态。*
* 第一条消息之前的思考菜单与 @brennanb2025 在 https://github.com/stablyai/orca/pull/34592 中的聊天相匹配
* 设置：在每个坐席行选择聊天或CLI；删除 https://github.com/stablyai/orca/pull/36185 中 @brennanb2025 的聊天 → 提供商
* 让侧边栏卡属性隐藏 https://github.com/stablyai/orca/pull/36026 中 @brennanb2025 的特工模型徽章
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/34728 中从新选项卡菜单中选择代理设置
* 在https://github.com/stablyai/orca/pull/36158中恢复@brennanb2025对非运行模型的OMP思维选择
* 为除 Pi 之外的代理保留未经确认的工作量菜单（修复主要 OMP 测试），作者为 https://github.com/stablyai/orca/pull/36242 中的 @nwparker
* 在 https://github.com/stablyai/orca/pull/36074 中 @brennanb2025 代理退出和启动失败后，保持现有的继续操作可靠
* 由 https://github.com/stablyai/orca/pull/36229 中的 @nwparker 报告主管无法生成的 ACP 或 Pi CLI 丢失
* 在 https://github.com/stablyai/orca/pull/36194 中使用 @brennanb2025 发现的共享模型菜单和默认值
* 在 https://github.com/stablyai/orca/pull/36318 中的 @brennanb2025 在新选项卡菜单中显示有效的代理快捷方式
* 让自动化在 https://github.com/stablyai/orca/pull/34332 中的 @brennanb2025 的 Chat 中运行
* 将 Copilot 助手 ID 排除在 https://github.com/stablyai/orca/pull/36324 中的 @brennanb2025 的终端恢复之外
* 将 Hermes 和反重力助手 ID 排除在 https://github.com/stablyai/orca/pull/36349 中的 @brennanb2025 的终端恢复之外
* 选择 OpenCode 2 进行 https://github.com/stablyai/orca/pull/36292 中 @brennanb2025 的管理帐户登录
* Settle 在 https://github.com/stablyai/orca/pull/35930 中通过 @brennanb2025 杀死了 Claude 后台助手
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36210 中为代理选择默认模型和工作量
* 在https://github.com/stablyai/orca/pull/35392中@brennanb2025的会话历史记录详细信息中显示每个聊天的帐户
* 在https://github.com/stablyai/orca/pull/36472中通过@AmoabaKelvin切换工作空间时清除会话历史记录搜索
* https://github.com/stablyai/orca/pull/36457 中@brennanb2025 终端退出时立即失败就绪
* 在 https://github.com/stablyai/orca/pull/36265 中捆绑 CodeBuddy 图标，而不是 @qiuziz 的 Google favicon 后备图标
* 在 https://github.com/stablyai/orca/pull/36394 中显示 @david-arcade-dev 对团队限制帐户的光标使用情况
* 当https://github.com/stablyai/orca/pull/36034中的@ggbdpq为空时，保持代理环境编辑器可访问
* 在 https://github.com/stablyai/orca/pull/35954 中发现用于聊天命名的 nvm/version-manager CLI 和 @gentslava 的一次性生成器
* 接受 @nwparker 在 https://github.com/stablyai/orca/pull/36480 中的 grok 的启动时间 --model 和 --effort
* 在 https://github.com/stablyai/orca/pull/36495 中 @AmoabaKelvin 的钩子阻止提示后，停止显示克劳德为工作
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36455 中让每个聊天代理都可以看到声明的默认工作量
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/30955 中发送下一条消息之前，打开的聊天会移至您切换到的帐户
* 新选项卡菜单：无论是在 https://github.com/stablyai/orca/pull/36840 中通过 @brennanb2025 设置为“聊天”还是 CLI，客服人员都会保持其通常的顺序
* 代理设置面板不再在 https://github.com/stablyai/orca/pull/36839 中 @brennanb2025 的新选项卡菜单后面呈现
* 在 https://github.com/stablyai/orca/pull/36822 中@bbingz 轮流后保留会话标题
* 按技能默默更新未经编辑的 Orca 技能； @nwparker 在 https://github.com/stablyai/orca/pull/36889 中仅提示其余部分
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36874 中改进代理选择器更新和菜单指针切换

### 编排和 CLI

*Orchestrator V3 的代币效率和可靠性要高得多，聊天 UI 中具有可视化工作指示器。当工人报告时唤醒协调员，跟进完成的工人并保持面向代理的 CLI 输出简洁。*

* 当 https://github.com/stablyai/orca/pull/35263 中的 @brennanb2025 启动工作程序时，在协调员的聊天中显示一张卡片
* @nwparker 在 https://github.com/stablyai/orca/pull/36224 中给 Windows 用户路径写入 15 秒并重试一次
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/35769 中保留跨 Linux PID 命名空间的运行时访问
* Orchestration v3：协调员结束轮流，Orca 在 https://github.com/stablyai/orca/pull/36137 中通过 @Jinwoo-H 唤醒他们
* 让协调员对 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36445 中完成的聊天工作人员进行后续工作
* 为代理打印简洁的编排 CLI 输出，用 --full 表示 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36498 中的完整记录
* 一旦 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36511 中输入编排唤醒，就始终提交编排唤醒
* 在 https://github.com/stablyai/orca/pull/36545 中通过 @Jinwoo-H 将 --spec-file 和一个保持打开的名称添加到编排工作命令中
* 在https://github.com/stablyai/orca/pull/36599中@Jinwoo-H的编排恢复参考中命名worker-keep-open
* 让我们向任何州的工作人员发送对话，重新开放关闭的工作人员以进行后续工作，@Jinwoo-H 在 https://github.com/stablyai/orca/pull/36533
* 通过 https://github.com/stablyai/orca/pull/36622 中的 @Jinwoo-H 保持编排列表输出简短
* 在 https://github.com/stablyai/orca/pull/36625 中保护简洁的编排列表输出，防止 @Jinwoo-H 的长文本
* 让工作人员通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36663 中跟进自己完成的助手
*编排指南：保持开放工作人员，用户将继续使用https://github.com/stablyai/orca/pull/36764中的@Jinwoo-H
* 编排：保持开放工作人员在 https://github.com/stablyai/orca/pull/36782 中的 @Jinwoo-H 的新工作区中启动
* 通过 https://github.com/stablyai/orca/pull/36626 中的 @Jinwoo-H 保持编排收件箱输出简短
* 仅检查 https://github.com/stablyai/orca/pull/36644 中@Jinwoo-H 在输入边缘有邮件的编排邮箱
* 通过一个简短的任务启动工人跟进，并通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36774 正常投递邮件
* 不要再将 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36811 中报道的转向归咎于聊天工作者的后续行动
* 编排指南：https://github.com/stablyai/orca/pull/36833 中的@Jinwoo-H 在不需要返回任何内容时进行切换
*编排：修复 https://github.com/stablyai/orca/pull/36803 中 @Jinwoo-H 误导工作人员和协调员的代理指令
* 在 https://github.com/stablyai/orca/pull/36954 中 @Jinwoo-H 的后续工作中保持保持开放的工作人员开放
* 将编排工作人员完成的任务交给 https://github.com/stablyai/orca/pull/36968 中@AmoabaKelvin 的协调员
* 保持“完成”状态，直到 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36992 中完成后台子代理和工作人员等待

### SSH、WSL 和远程服务器

*让停止的 WSL 发行版保持睡眠状态，通过“启动”恢复阻塞的工作区，并减少空闲服务器和连接工作。*

* 在 Orca 的工作之外启动 WSL 持有者，这样崩溃就不会导致它崩溃 by @nwparker in https://github.com/stablyai/orca/pull/36178
* @nwparker 在 https://github.com/stablyai/orca/pull/36144 中暂停已耗尽的结算凭证收获 5 分钟
* 委派设备遵循设备文件，隔离区保留https://github.com/stablyai/orca/pull/36222中@nwparker的外部添加
* 通过 https://github.com/stablyai/orca/pull/36243 中的 @nwparker 让空闲 WSL 主机的 orcad 在 5 分钟后退出
* 从已删除的发行版中删除 WSL 命令会忘记 @nwparker 在 https://github.com/stablyai/orca/pull/36227 中的注册
* 当 main 持有 https://github.com/stablyai/orca/pull/36228 中由 @nwparker 启动的终端时，以用户的语言命名停止的发行版
* 无 cwd gh 上的用户 clicks 可能会在 https://github.com/stablyai/orca/pull/36230 中启动 @nwparker 停止的默认发行版
* Orca 唤醒发行版后，最多每 5 分钟重新读取发行版的自动挂载根目录，作者为 https://github.com/stablyai/orca/pull/36225 中的 @nwparker
* 针对 https://github.com/stablyai/orca/pull/35053 中@OrcaWin 的所有缓冲 git 读取设置 Fence WSL 登录 shell 标准输出
* 使服务器的空闲窗口远离用户 shell；需要代理发现 @nwparker 在 https://github.com/stablyai/orca/pull/36492 中发现的工作菜单
* 当 https://github.com/stablyai/orca/pull/36500 中的 @nwparker 打开 WSL 主机时预取固定的节点存档
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/36514 中运行延迟的节点预取之前重新检查 WSL 主机
* 修补中继并将图像推送到节点 24.22.2 以及 @nwparker 在 https://github.com/stablyai/orca/pull/36560 中当前的 Alpine 修复
* 在缓冲 HTTP 请求主体之前对其进行限制，包括 @nwparker 在 https://github.com/stablyai/orca/pull/36562 中分块的请求主体
* 提供 \\wsl.localhost 项目的发行版作为主机； @nwparker 在 https://github.com/stablyai/orca/pull/36615 中解释 WSL 1 和空发行版列表
* 当 wsl.exe 在 https://github.com/stablyai/orca/pull/36616 中删除 @nwparker 的重定向列表输出时查找发行版
* 在卸载时停止每个 WSL 主机的服务器，以便其发行版可以通过 https://github.com/stablyai/orca/pull/36612 中的 @nwparker 停止
* 启动 CLI 协调从不检查发行版 Orca 在 https://github.com/stablyai/orca/pull/36683 中没有 @nwparker 的记录
* 一旦运行时主机通过 https://github.com/stablyai/orca/pull/36684 中的 @nwparker 应答，资源管理器和源代码管理就会再次加载
* 恢复或切换到 WSL 主机工作区永远不会启动 https://github.com/stablyai/orca/pull/36688 中 @nwparker 停止的发行版
* 在释放持有者之前停止 WSL 主机服务器，@nwparker 在 https://github.com/stablyai/orca/pull/36769 的固定预算内
* 将主机的发射标记保持在其外壳之外；损坏的 WSL 存储仅隐藏 https://github.com/stablyai/orca/pull/36772 中 @nwparker 的 WSL 主机
* 第 1 阶段是选择加入：报价仅移动其项目，D1c Git 遵循 @nwparker 在 https://github.com/stablyai/orca/pull/36773 中的设置
* 保持 WSL exec 检查主线程并共享 @nwparker 在 https://github.com/stablyai/orca/pull/36777 中读取的运行列表
* 在 https://github.com/stablyai/orca/pull/36786 中停止的 WSL 主机离开被 @nwparker 卡住的工作区时提供“开始”
* @nwparker 在 https://github.com/stablyai/orca/pull/36776 中学习到的 WSL 主机块立即停止新工作
* 恢复的聊天或网络钩子检查永远不会启动 @nwparker 在 https://github.com/stablyai/orca/pull/36779 中停止的发行版 (E9)
* 当 WSL 主机在 https://github.com/stablyai/orca/pull/36808 中 @nwparker 没有进行新工作时，隐藏 D1c 设置行
* 重试 setup-runner .git 链接读取并回退到 https://github.com/stablyai/orca/pull/36792 中 @nwparker 的发行版 Git
* 自动发布路径，永远不会启动发行版或休眠终端（带回 2/4），作者：https://github.com/stablyai/orca/pull/36809 中的 @nwparker
* 在未知的默认发行版上关闭失败，在停止时停止无启动连接，并在 WSL 无法应答 (E9) 时显示未知 (https://github.com/stablyai/orca/pull/36797 中的 @nwparker)
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/35881 中推迟更新时，修剪被取代的分阶段服务器构建
* 从 AppImage 安装的服务使其启动保持在 https://github.com/stablyai/orca/pull/36819 中 @nwparker 的 PATH 之外
* 已停止发行版的消息显示“开始”或新终端启动它，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/36771 中切换项目
* 一旦 Start 通过 https://github.com/stablyai/orca/pull/36784 中的 @nwparker 返回主机，由停止的主机停放的窗格将重新打开
* 关闭 WSL 主机设置可保持保存的主机服务；它仅停止新主机并由 @nwparker 在 https://github.com/stablyai/orca/pull/36783 中移动
* 主机行开始遵循与其他表面相同的优先级； https://github.com/stablyai/orca/pull/36934 中的 @nwparker 无法唤醒 Start 的重新加载
* 自动唤醒不再引导主机进行 @nwparker 在 https://github.com/stablyai/orca/pull/36981 中已运行的运行
* 共享后台通行证不会继承 https://github.com/stablyai/orca/pull/36993 中 @nwparker 的 WSL 用户行为

### 源代码控制和集成

*解决桌面和手机上的冲突，保持评论最新并更可靠地处理分支、重命名和子模块。*

* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35347 中解决删除/修改冲突并完成面板合并
* 在 https://github.com/stablyai/orca/pull/36205 中@AmethystLiang 进行凭据编辑之前清理 Git 远程错误
* 在 https://github.com/stablyai/orca/pull/34778 中读取 @OrcaWin 没有修订路径回退的差异 blob
* 在https://github.com/stablyai/orca/pull/35040中通过@OrcaWin解决当前分支没有标签歧义的问题
* 在 https://github.com/stablyai/orca/pull/35658 中保留@OrcaWin 遗留历史装饰中的逗号
* 省略 https://github.com/stablyai/orca/pull/35390 中@OrcaWin 的分支清理樱桃检查中的提交主题
* 在https://github.com/stablyai/orca/pull/35682中通过@OrcaWin隐藏或清理后停止过时的冲突批次
* 在https://github.com/stablyai/orca/pull/34997中通过@OrcaWin在选择器中保留准确的本地分支名称
* 通过@OrcaWin在https://github.com/stablyai/orca/pull/35012中解析包含空格的子模块路径
* @OrcaWin 在 https://github.com/stablyai/orca/pull/34765 中按分辨率批量读取用户名配置
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35283 中读取文字子模块 gitlink 路径
* 在 https://github.com/stablyai/orca/pull/34991 中隐藏 @OrcaWin 对当前子模块 gitlinks 的丢弃
* 在 https://github.com/stablyai/orca/pull/34779 中保留 @OrcaWin 的分阶段差异审查中的重命名源
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35010 中识别本地 SHA-256 工作区基数
* 仅从 https://github.com/stablyai/orca/pull/35350 中的@OrcaWin 的上游补丁等效探针请求樱桃标记
* 在https://github.com/stablyai/orca/pull/35042中通过@OrcaWin在维护期间保留外部引用锁
* 将不相关的分叉 PR 保留在 https://github.com/stablyai/orca/pull/36299 中的 @brennanb2025 的工作区分支之外
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36314 中从 Create-worktree 搜索连接的线性工作空间
* 在 https://github.com/stablyai/orca/pull/36301 中由@brennanb2025 在源代码管理中突出显示活动提交的文件
* 尊重 @brennanb2025 在 https://github.com/stablyai/orca/pull/35023 中保存的 PR 请求的项目帐户
* 在 https://github.com/stablyai/orca/pull/34591 中保持 @brennanb2025 刷新的线性任务行最新
* 在由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36458 中禁用的 Create PR/MR 上说“查找失败”而不是“未准备好”
* 通过 @vherrera1991 在 https://github.com/stablyai/orca/pull/36424 中协商旧版 Azure DevOps 服务器的 API 版本
* 在 https://github.com/stablyai/orca/pull/19646 中通过 @brennanb2025 将 GitLab MR 标记为就绪时，保持并发标题编辑
* 从 https://github.com/stablyai/orca/pull/36506 中的 @brennanb2025 删除 GitLab 列表错误中的 IPC 包装器
* 在 https://github.com/stablyai/orca/pull/36198 中 @AmethystLiang 的 git 评论中渲染 CodeRabbit 评论图标
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36522 中明确托管评论刷新获取当前提供商状态
* Make Checks 刷新启动 @brennanb2025 在 https://github.com/stablyai/orca/pull/36651 中阅读的新 PR
* 将 numstat 重命名检测与状态相匹配，以便移动的文件通过 @bbingz 在 https://github.com/stablyai/orca/pull/36698 中获取行计数
* 为 https://github.com/stablyai/orca/pull/36896 中 @nwparker 的仅上游项目提供跨存储库 GitHub 链接的项目切换
* Git.history 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36962 中对分支自己的提交进行分页并推送状态

### 工作区、侧边栏和日常润色

*创建工作区时打开聊天，对子代理进行分组并改进选项卡、菜单和日常导航。*

* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36191 中再次打开指向项目外部的文件夹链接
* 通知卡升到聊天编辑器上方，他们将在 https://github.com/stablyai/orca/pull/36233 中由 @nwparker 覆盖
* 在 https://github.com/stablyai/orca/pull/36269 中由@AmethystLiang 独立地对相同 ID 的工作树进行重新排序
* 保留工作树分支，除非 @brennanb2025 在 https://github.com/stablyai/orca/pull/35948 中请求删除 CLI
* 在 https://github.com/stablyai/orca/pull/35917 中 @GoyoBjS 显示具有展开子项的父项时，不要滚动到最后一个子项
* 保持选项卡右侧 - click 菜单通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36308 中打开发布
* @brennanb2025 在 https://github.com/stablyai/orca/pull/34104 中重新打开窗口后保持当前状态
* 通过 https://github.com/stablyai/orca/pull/33984 中的 @bbingz 将配置文件备份临时名称保持在 eCryptfs 的 143 字节限制内
* 在 https://github.com/stablyai/orca/pull/36460 中停止 clipping 经典卡中的子工作区芯片（@nwparker）
* 由 @bercedev 在 https://github.com/stablyai/orca/pull/36435 中重写派生分支名称中的尾随 .lock
* 永远不要杀死一个无法观察其出口的孤立儿童，@nwparker 在 https://github.com/stablyai/orca/pull/36521
* 范围卡布局变量到其读卡器而不是 :root by @nwparker in https://github.com/stablyai/orca/pull/36531
* 在 https://github.com/stablyai/orca/pull/35643 中 @SandeepSAulakh 在 Linux .deb 安装命令中跳过 apt 的 _apt 沙箱通知
* 查看 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36559 中包含所有核心的新工作树
* 在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36556 中创建工作树时打开本机聊天
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36757 中扩大快速命令下拉列表
* 在 https://github.com/stablyai/orca/pull/36763 中通过 @AmethystLiang 恢复托管页面之外的本机 DevTools 路由
* 使 https://github.com/stablyai/orca/pull/36761 中的 @AmethystLiang 可以发现工作区名称表情符号选择器
* 通过https://github.com/stablyai/orca/pull/36826中的@nwparker从标头本身解析标头的创建主机和主机标签
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36832 中提交保留分阶段保存
* 通过https://github.com/stablyai/orca/pull/36899中的@AmethystLiang简化侧边栏中的工作区加载状态
* 重用现有的选项卡组以供 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36915 中打开的链接
* 在https://github.com/stablyai/orca/pull/36951中@nwparker显示子开关内的子活动计数
* 通过 @allangnutzmans 在 https://github.com/stablyai/orca/pull/36895 中将“在子菜单中打开”添加到资源管理器行上下文菜单
* 默认折叠子代理列表，并通过 https://github.com/stablyai/orca/pull/36936 中的@nwparker 对空闲子代理进行分组
* Toasts 位于模态框的背景后面，直到被按下，而不是看起来是活的，但却是死的，@nwparker in https://github.com/stablyai/orca/pull/36888
* 重新放置标题大小的选项卡作为实验，通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/34527 中的代理重命名来保持宽度
* 保持待处理聊天可见，直到 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36920 中打开工作树聊天
* 仅当 https://github.com/stablyai/orca/pull/37085 中的标题为 @AmethystLiang 的 cli 时才显示选项卡预览

### 语言和翻译

*更新了桌面、移动和插件翻译。*

* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36215 中翻译新的插件列表、过滤和访问每种语言的字符串

### 测试、构建和维护

*测试清理、重点验证、构建修复和内部组织。*

* 测试：在 https://github.com/stablyai/orca/pull/36192 中删除 @OrcaWin 的低价值副本、布局和等效性检查
* 警告 macOS 12 用户有关 https://github.com/stablyai/orca/pull/36182 中 @nwparker 即将进行的支持更改
* 测试：在 https://github.com/stablyai/orca/pull/36202 中删除 @OrcaWin 的低值包装、复制和主题检查
* 恢复 https://github.com/stablyai/orca/pull/36209 中 @nwparker 的“警告 macOS 12 用户即将发生的支持变更”
* 测试（计算机）：在 https://github.com/stablyai/orca/pull/36216 中测量 @AmoabaKelvin 独立验证的任务
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36231 中明确何时运行切换检查
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36226中删除28个低值测试套件
* 重构（cli）：将重试 PATH 命令保留给 @nwparker 在 https://github.com/stablyai/orca/pull/36237 中的幂等写入
* 测试（计算机）：通过 https://github.com/stablyai/orca/pull/36239 中的 @AmoabaKelvin 验证任务事件负载
* ci(windows): 在 @nwparker 在 https://github.com/stablyai/orca/pull/36248 中进行 Windows 边界测试之前安装一次 Electron
* test(acp)：等待升级的第一次检查和交付，而不是由 @nwparker 在 https://github.com/stablyai/orca/pull/36238 中进行固定的事件循环轮次
* 测试（e2e）：重试一次 WSL 终止，当 Orca 在 https://github.com/stablyai/orca/pull/36256 中 @nwparker 启动任何内容时，该终止从未发生过
* 测试（windows）：获取孤立生成器套件启动的每个进程，包括 https://github.com/stablyai/orca/pull/36249 中 @nwparker 跳过的路径
* docs(wsl)：说明除了持有者之外，是什么让 WSL 发行版保持正常运行，作者：https://github.com/stablyai/orca/pull/36241 中的 @nwparker
* 文档：更喜欢 https://github.com/stablyai/orca/pull/36264 中 @AmethystLiang 的代理指令中的集中验证
* 修复（e2e）：从 WSL 引导护罩的每个路径返回，以便主的 e2e 类型检查棘轮再次由 https://github.com/stablyai/orca/pull/36261 中的 @AmoabaKelvin 变为绿色
* 文档（插件）：在 https://github.com/stablyai/orca/pull/36275 中添加 @nwparker 的插件列表策略
* 重构（jira）：通过@nwparker在https://github.com/stablyai/orca/pull/36203中对保存的过滤器选择器所有者进行分组
* 文档（插件）：删除https://github.com/stablyai/orca/pull/36291中@nwparker的捐赠链接和描述URL列表规则
* 允许 https://github.com/stablyai/orca/pull/36273 中的@AmethystLiang 从插件面板进行冲突安全私人存储
* 恢复 https://github.com/stablyai/orca/pull/36316 中 @AmethystLiang 的“允许从插件面板进行冲突安全私有存储”
* 杂务（deps）：通过https://github.com/stablyai/orca/pull/36323中的@nwparker将Electron更新为43.8.4
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36336中删除40个低价值测试套件
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36389中删除39个低价值测试套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36396中删除45个低价值套件（审核843）
* 杂务（移动）：在 https://github.com/stablyai/orca/pull/36402 中撞到 0.0.61 和 Android 版本Code 25 by @AmoabaKelvin
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36403中删除46个低值测试套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36407中删除46个低价值套件（审核845）
* 重构（源代码控制）：将更改的文件树构建器移动到 https://github.com/stablyai/orca/pull/36433 中的 @AmoabaKelvin 的 src/shared
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36434中删除25个低价值套件（审核846）
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36446中删除29个低价值套件（审核847）
* 重构（jira）：在 https://github.com/stablyai/orca/pull/36362 中并置 @nwparker 的行交互测试
*测试：从https://github.com/stablyai/orca/pull/36461中的@OrcaWin的审核批次848中删除17个低价值套件
* 测试（Windows）：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36465 中给凭证装置冷 Python 启动 30 秒
* 测试（插件）：按照 https://github.com/stablyai/orca/pull/36473 中 @nwparker 的 e2e 更新中的每个插件审查来获取访问量增长的更新
* ci(e2e)：将插件系统源路由到https://github.com/stablyai/orca/pull/36477中@nwparker的插件e2e规范
* 文档（编排）：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36335 中解释重复工作进程启动失败后的恢复
* 修复（自述文件链接）：在 https://github.com/stablyai/orca/pull/36213 中的 @blueDaydreaming725 检查 README 链接检查中的混合大小写 src/href/srcset 属性
*测试：从https://github.com/stablyai/orca/pull/36491中的@OrcaWin的审核批次849中删除39个低价值套件
* 测试：从https://github.com/stablyai/orca/pull/36512中的@OrcaWin的审核批次850中删除31个低价值套件
* 杂务（脚本）：从空闲工作树中回收历史测试缓存，而无需在https://github.com/stablyai/orca/pull/36532中通过@nwparker进行--tests-stopped
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36528中删除30个低价值测试套件
*测试：在https://github.com/stablyai/orca/pull/36549中通过@OrcaWin删除17个低价值的模拟和转发套件
* 测试（wsl）：在 @nwparker 在 https://github.com/stablyai/orca/pull/36523 的车道收据中 orcad 空闲退出后跟踪重新打开 Orca
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36566 中删除 16 个低价值转发和身份套件
* 测试（Windows）：在https://github.com/stablyai/orca/pull/36547中由@brennanb2025创建工作区之前关闭聊天UI提示
* 稳定 @brennanb2025 在 https://github.com/stablyai/orca/pull/36517 中的 Git 观察程序升级扇出测试
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36584中删除13个低价值转发和演示套件
*测试：删除https://github.com/stablyai/orca/pull/36592中@OrcaWin的14个低值模拟转发套件
*测试（终端）：通过https://github.com/stablyai/orca/pull/36586中的@brennanb2025将unifiedTabsByWorktree添加到鱼颜色方案测试的商店固定装置中
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36600中删除24个低价值夹具和转发套件
* 测试（wsl）：在没有代理粘贴的情况下对通道的第一个输出进行计时 在https://github.com/stablyai/orca/pull/36598中输入由@nwparker解决
* ci：删除 @nwparker 在 https://github.com/stablyai/orca/pull/36611 中的依赖性审查 Slack 通知作业
*测试：删除https://github.com/stablyai/orca/pull/36617中@OrcaWin的14个低价值套件和119个个体案例
* ci：从 @brennanb2025 在 https://github.com/stablyai/orca/pull/36621 的发布剪切权限测试中删除已删除的通知作业
*测试：删除https://github.com/stablyai/orca/pull/36629中@OrcaWin的9个低价值套件和147个个体案例
* ci(e2e)：将功能区域源路由到 https://github.com/stablyai/orca/pull/36639 中的 @nwparker 的仅限夜间的 e2e 规范
* 修复（测试）：将单元测试工具保留在 @nwparker 在 https://github.com/stablyai/orca/pull/36657 中的嵌套签出中的存储库根中
*测试：删除https://github.com/stablyai/orca/pull/36650中@OrcaWin的8个低价值套件和198个个体案例
* 修复（检查）：接受 @nwparker 在 https://github.com/stablyai/orca/pull/36664 中故意空的 oxlint 选择
* 重构（云）：https://github.com/stablyai/orca/pull/36665 中 @nwparker 的组中继分配余量模块
* 重构（云）：@nwparker 在 https://github.com/stablyai/orca/pull/36671 中进行的组中继分配锁定测试
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36672中删除10个低价值套件和130个个体案例
* 重构（渲染器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/36677 中对 Jira 排序测试进行分组
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36682 中进行团体期刊主体准入和生产者测试
*测试：删除https://github.com/stablyai/orca/pull/36681中@OrcaWin的19个低价值套件和200个个体案例
* 重构（移动）：在 https://github.com/stablyai/orca/pull/36690 中并置聊天捏合手势钩子并由 @nwparker 进行测试
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36693中删除14个低价值套件和241个个体案例
* 重构（移动）：在 https://github.com/stablyai/orca/pull/36699 中并置本机聊天可读性挂钩和 @nwparker 测试
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/36700中删除17个低价值套件和133个个体案例
* 重构（移动）：@nwparker 在 https://github.com/stablyai/orca/pull/36702 中并置聊天配对窗口回归测试
*测试：删除https://github.com/stablyai/orca/pull/36703中@OrcaWin的11个低价值套件和157个个体案例
* 重构（共享）：由 @nwparker 在 https://github.com/stablyai/orca/pull/36708 中并置结构化会话事件合并器
*测试：删除https://github.com/stablyai/orca/pull/36710中@OrcaWin的16个低价值套件和138个个体案例
* 重构（共享）：在 https://github.com/stablyai/orca/pull/36711 中并置 @nwparker 的遗留会话子工作投影
*测试：删除https://github.com/stablyai/orca/pull/36717中@OrcaWin的266个低值测试
* 重构（共享）：由 @nwparker 在 https://github.com/stablyai/orca/pull/36720 中并置会话线程目标合约
*测试：删除https://github.com/stablyai/orca/pull/36724中@OrcaWin的187个低值测试
* 重构（共享）：在 https://github.com/stablyai/orca/pull/36727 中并置 @nwparker 的会话失败详细信息读取器
*测试：删除https://github.com/stablyai/orca/pull/36737中@OrcaWin的226个低值测试
*测试：删除https://github.com/stablyai/orca/pull/36750中@OrcaWin的272个低值测试
*测试：删除https://github.com/stablyai/orca/pull/36759中@OrcaWin的206个低值测试
* 重构（共享）：在 https://github.com/stablyai/orca/pull/36738 中由 @nwparker 并置压缩和命令条目所有者
*测试：删除https://github.com/stablyai/orca/pull/36766中@OrcaWin的287个低值测试
* 文档：澄清 @OrcaWin 在 https://github.com/stablyai/orca/pull/36768 中的低价值测试删除指南
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36770 中并置结构化会话工具调用投影
*测试：删除https://github.com/stablyai/orca/pull/36780中@OrcaWin的246个低值测试
* 重构：从 https://github.com/stablyai/orca/pull/36785 中 @nwparker 定义所有者导入 Codex 会话类型
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36798 中并置后台任务会话合约
*测试：删除https://github.com/stablyai/orca/pull/36794中@OrcaWin的512个低值测试
* 重构：在 https://github.com/stablyai/orca/pull/36807 中通过 @nwparker 并置结构化会话实时读取和重新连接调度
* 重构：在 https://github.com/stablyai/orca/pull/36816 中并置 @nwparker 的本地聊天代理支持
* 重构：在 https://github.com/stablyai/orca/pull/36820 中并置 @nwparker 的本地聊天代理配置文件
* 文档（插件）：主题和语法条目采用 https://github.com/stablyai/orca/pull/36706 中 @ggbdpq 的标题，而不是标签
*测试（自动化）：在https://github.com/stablyai/orca/pull/36829中@nwparker将Q→S操作边界固定在20和100个先前回合，而不是1000个
* 重构：在 https://github.com/stablyai/orca/pull/36824 中并置 @nwparker 的本机聊天噪声过滤
* 重构：在 https://github.com/stablyai/orca/pull/36837 中并置 @nwparker 的本机聊天推理顺序合约规范
*测试：删除174个低值测试，包括@OrcaWin在https://github.com/stablyai/orca/pull/36844中的23个套件
* 修复（运行时）：通过 https://github.com/stablyai/orca/pull/36852 中的 @nwparker 将运行时身份状态恢复到大小上限以下
* 重构（移动）：通过https://github.com/stablyai/orca/pull/36818中的@nwparker将桥接快照移动到自己的模块中
*测试：删除247个低值测试，包括@OrcaWin在https://github.com/stablyai/orca/pull/36857中的22个套件
* 修复（编排）：通过 https://github.com/stablyai/orca/pull/36875 中的 @nwparker 将 federated-worker-start 恢复到大小上限之下
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36843 中群组共享本机聊天模型和成绩单所有者
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36878 中对共享代理会话选项和目录进行分组
*测试：删除317个低值测试，包括@OrcaWin在https://github.com/stablyai/orca/pull/36877中的31个套件
*测试：删除326个低值测试，包括@OrcaWin在https://github.com/stablyai/orca/pull/36894中的16个套件
* 测试：删除262个低值测试用例，其中包括@OrcaWin在https://github.com/stablyai/orca/pull/36901中的39个套件
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/36882 中组共享日志和请求合同
* 重构(github)：在https://github.com/stablyai/orca/pull/36904中通过@AmoabaKelvin与移动端分享内联PR评论行规则
* 重构（代理会话）：对故障模块进行分组并使用 https://github.com/stablyai/orca/pull/36906 中 @nwparker 的直接所有者导入
* 测试：删除253个低值测试用例，其中包括@OrcaWin在https://github.com/stablyai/orca/pull/36907中的28个套件
* 修复(ci)：在 https://github.com/stablyai/orca/pull/36912 中 @nwparker 在 Windows SSH 签出中包含云配置
* 测试：删除411个低价值测试用例，其中包括@OrcaWin在https://github.com/stablyai/orca/pull/36916中的30个套件
* 测试（移动）：修复听写桥预算测试在 https://github.com/stablyai/orca/pull/36938 中 @nwparker 的 Bun 下的 main 上失败的问题
* 文档：@AmethystLiang 在 https://github.com/stablyai/orca/pull/36940 中澄清交接前的范围验证
* 重构（代理会话）：https://github.com/stablyai/orca/pull/36909 中@nwparker 对生命周期合约和记录进行分组
* 文档：通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36946 中使范围验证示例可移植
* @nwparker 在 https://github.com/stablyai/orca/pull/36971 中重构 AGENTS.md 以使其清晰和重要
* 修复 https://github.com/stablyai/orca/pull/36972 中 @nwparker 的 AGENTS.md 中的拼写错误并提高清晰度
* 文档：恢复https://github.com/stablyai/orca/pull/36985中@nwparker的AGENTS.md标题后的空行
*测试：删除205个低值测试声明，其中包括@OrcaWin在https://github.com/stablyai/orca/pull/36975中的30个套件
* 重构（共享）：由 @nwparker 在 https://github.com/stablyai/orca/pull/36979 中组织会话合约和预测
* 删除https://github.com/stablyai/orca/pull/37002中@OrcaWin的699个低值测试声明和116个套件
* 重构（渲染器）：在 https://github.com/stablyai/orca/pull/37006 中通过@nwparker 并置 Jira 板并列出所有者
* 修复（自述文件链接）：在 https://github.com/stablyai/orca/pull/36957 中检查@blueDaydreaming725 的自述文件链接时，在 srcset URL 中保留逗号
*测试：删除https://github.com/stablyai/orca/pull/37007中@OrcaWin的278个低值声明和31个套件
* 重构：https://github.com/stablyai/orca/pull/37018 中的 @nwparker 组渲染器会话启动所有者
*测试：删除https://github.com/stablyai/orca/pull/37024中@OrcaWin的181个低值测试和2个套件
*测试：删除https://github.com/stablyai/orca/pull/37038中@OrcaWin的157个低价值测试和路由合同套件
* 重构：https://github.com/stablyai/orca/pull/37036 中的 @nwparker 组 Claude 结构化会话所有者
* 测试：删除https://github.com/stablyai/orca/pull/37053中@OrcaWin的167个低价值测试和两个CI工具套件
* 重构（移动）：由 @nwparker 在 https://github.com/stablyai/orca/pull/37054 中组织本机聊天视图和转录模块
*测试：删除https://github.com/stablyai/orca/pull/37057中@OrcaWin的56个低值测试和两个套件
* 重构：https://github.com/stablyai/orca/pull/37070中@nwparker组织运行时会话记录和生命周期所有者
*测试：删除https://github.com/stablyai/orca/pull/37077中@OrcaWin的240个低值测试
* 修复（测试）：由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37088 中正确导入结构化会话生命周期
* 重构（持久性）：用 @nwparker 在 https://github.com/stablyai/orca/pull/37081 中的具体所有者导入替换转发条目
* 构建（移动）：通过 https://github.com/stablyai/orca/pull/37014 中的 @AmoabaKelvin 将页面包的代码围栏从 9 提高到 9.5 MiB
* 文档：@AmethystLiang 在 https://github.com/stablyai/orca/pull/37094 中每隔七分钟检查 CI

## 新贡献者
* @GoyoBjS 在 https://github.com/stablyai/orca/pull/35917 中做出了第一个贡献
* @vale-c 在 https://github.com/stablyai/orca/pull/35926 中做出了第一个贡献
* @qiuziz 在 https://github.com/stablyai/orca/pull/36265 中做出了第一个贡献
* @david-arcade-dev 在 https://github.com/stablyai/orca/pull/36394 中做出了第一个贡献
* @vherrera1991 在 https://github.com/stablyai/orca/pull/36424 中做出了第一个贡献
* @kevinlangleyjr 在 https://github.com/stablyai/orca/pull/9059 中做出了第一个贡献
* @SandeepSAulakh 在 https://github.com/stablyai/orca/pull/35643 中做出了第一个贡献
* @alpenshtokk 在 https://github.com/stablyai/orca/pull/36483 中做出了第一个贡献
* @Moran45 在 https://github.com/stablyai/orca/pull/36530 中做出了第一个贡献
* @allangnutzmans 在 https://github.com/stablyai/orca/pull/36895 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.245...v1.4.246

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.246` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.246)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
