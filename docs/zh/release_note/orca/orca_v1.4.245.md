---
title: "orca v1.4.245"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.245"
version: "v1.4.245"
published: "2026-10-30"
type: "patch"
lang: "zh"
---

# orca v1.4.245

## 更快的 Orca、插件和后台计算机使用 ⚡

- ⚡ **更快的 Orca：** 流畅地启动数百个聊天，在您键入和切换选项卡时减少延迟。
- 🧩 **使用图标主题、语法突出显示和自定义编辑器自定义 Orca**。
- 🖱️ **继续工作**，同时客服人员在后台使用 Chrome、Blender 和其他 Mac 应用程序。
- 🎙️ **在手机上听写**并在说话时查看您的话。
- 💬 **尝试新的聊天 UI：** 在“设置”中搜索“聊天 UI”将其打开，然后右键 click 选项卡在聊天 UI 和 TUI 之间实时切换。

## 亮点

- **更快的 Orca：** 具有数百个聊天的快速应用程序。当您使用其他选项卡时，打字的响应速度会更快，并且隐藏的聊天会减少工作量。
- **插件：** 从“设置”→“插件”添加图标主题、语法突出显示和自定义编辑器。社区发布即将推出，因此您将能够共享自己的插件。
- **Mac 上的后台计算机使用：** 让代理在 Chrome、Blender 和其他应用程序中工作，同时您继续使用鼠标和键盘。 Orca 的应用内浏览器已经在后台运行；现在电脑的使用也是如此。有些操作仍需要应用程序提前进行。
- **聊天：** 享受非常精美的聊天用户界面，停止后再次发送，并预览聊天中的链接。在“设置”中搜索“聊天 UI”将其打开，然后右键 click 选项卡在聊天 UI 和 TUI 之间实时切换。
- **终端：** 在设置 → 终端 → 高级中为每台计算机设置运行终端限制。
- **WSL：** 停止的发行版将保持停止状态，直到您选择“开始”。终端会记住它们的文件夹。
- **浏览器：** 在 Mac 上按 Cmd+Opt+B 进行浏览器拆分。现在使用粘贴的图像发送较短的注释反馈。
- **工作区：** 您的工作区名称再次成为其分支名称。源代码控制操作获得模型和工作量控制。
- **电话：** 在说话时查看听写，并阅读更清晰的代码、表格和图表。

## 兼容性和升级说明

- **新终端主机：** 此版本为新终端启动一个新的终端主机。更新前已打开的终端将继续在之前的主机上运行并保持连接状态。新的运行终端限制设置需要新的主机，并且 ble.sh 启动修复和 macOS 上更轻的进程检查等修复也需要新的主机。这些适用于您更新后打开的终端。
- **默认情况下插件处于打开状态：** 安装插件（包括来自 `orca://plugins` 链接的插件）只会首先打开一个审核屏幕。运行代码的插件在安装之前会征求您的同意，一旦获得批准，它们就会以对您计算机的完全访问权限运行。
- **运行终端限制：** 默认值现在遵循每台计算机：其系统终端限制的一半，最多 4096，或者当 Orca 无法读取该限制时为以前的 256。您在“设置”中设置的值或使用环境变量设置的值优先。升高或降低它永远不会关闭正在运行的终端。运行较旧 Orca 的远程服务器可以继续工作，但在更新之前无法更改限制。
- **聊天命名：** 聊天现在默认由自己的代理和帐户命名。您在继续工作之前保存的命名代理、自定义命令或参数，以及命名代理选择已移至“设置”→“聊天”→“聊天命名”中的“高级”下。
- **跨帐户的 Codex 历史记录：** 默认情况下，新的开关“设置”→“代理”→“跨帐户共享 Codex 历史记录”处于打开状态，并保留今天的行为。启用此功能后，当您切换回系统默认值时，Orca 管理帐户的历史记录现在也会显示在您自己的 ~/.codex 中。关闭它会停止新的共享并且不会删除任何内容。在运行旧版 Orca 的 SSH 或 WSL 主机上，开关将保持禁用状态，直到该主机更新为止。
- **macOS 和 Linux 上的 Codex：** Orca 现在在关闭粘贴猜测的情况下启动 Codex，因此从手机或另一台 client 键入的提示会发送，而不是留在编辑器中。真正的糊剂仍然以糊剂的形式到达。
- **Mac 上的计算机使用：** 代理现在默认在后台运行。代理仍然可以使用 `--restore-window` 请求旧的前台模式，这会拖入仍然需要的 Chromium 和 Electron 应用程序。
- **浏览器注释：** 发送和复制现在为代理提供每个注释的简短摘要。在“发送”菜单中选中**包含页面详细信息**以获取旧的完整输出；该选择持续适用于该浏览器窗格。
- **工作区分支名称：** 您为新工作区键入的名称将再次用作其分支，即使打开了工作中的自动重命名分支也是如此。自动重命名仅替换 Orca 编造的名称。
- **自动化：** 由自动化启动的代理会跳过 CLI 的启动更新提示，因此提示无法吞掉任务。您自己启动的代理不会改变。
- **源代码控制操作：** Orca 加载时，保存在操作参数中的模型和工作量标记会移至新的模型和工作量控件中；其他参数保持原样。旧 Orca 上的电话或远程服务器可能会使用不同的模型或工作来启动这些操作，直到更新为止。
- **新快捷方式：** Cmd/Ctrl+Shift+X 打开插件（文本字段外部），macOS 上的 Cmd+Opt+B 在右侧拆分中打开浏览器选项卡。 Cmd+Opt+B 可以在“设置”→“键盘”中更改。
- **已知限制，降级：** 如果您返回到 v1.4.244，源代码控制 AI 操作的自定义模型和工作量选择将重置为代理的默认值，并且再次更新不会将它们恢复。

---

## 产品体验

### 原生聊天

*许多聊天、链接预览、使用聊天自己的代理命名以及停止后有效的发送不再出现启动冻结的情况。*

* 在启动时将聊天显示为“已中断”或“已完成”，无需读取其历史记录，因此 Orca 在启动后不再冻结，并在 https://github.com/stablyai/orca/pull/32146 中与 @brennanb2025 进行数百个聊天
* 显示 GitHub PR 的悬停卡并在 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35199 的聊天中发布链接
* 在聊天中显示网页链接的预览卡，从不获取私人网络地址（@AmoabaKelvin in https://github.com/stablyai/orca/pull/35221）
* 默认情况下，使用自己的代理和帐户为每个聊天命名，其他命名代理则由https://github.com/stablyai/orca/pull/32106中的@brennanb2025在高级下命名
* 在https://github.com/stablyai/orca/pull/34653中通过@brennanb2025停止强制杀死聊天代理后让下一条消息通过
* 防止 @nwparker 在 https://github.com/stablyai/orca/pull/36031 中的巨大完整粘贴冻结聊天
* 在 https://github.com/stablyai/orca/pull/35592 中为 @brennanb2025 聊天中的每个代理运行 `op run -- codex` 等启动器命令
* 当您在 https://github.com/stablyai/orca/pull/34549 中批准 @brennanb2025 的计划时，请退出克劳德计划模式
* 在 https://github.com/stablyai/orca/pull/35878 中 @nwparker 早于 --effort 的 Claude 代码版本上节省的精力恢复聊天
* 保持模型选项在它显示的内容中接受聊天并由 @brennanb2025 在 https://github.com/stablyai/orca/pull/31208 中发送
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/31927 中刷新模型列表时，保持聊天的选项控件正常工作
* 在 https://github.com/stablyai/orca/pull/34654 中@brennanb2025 在聊天目标模式下处理大量粘贴
* 无需重新扫描 @OrcaWin 在 https://github.com/stablyai/orca/pull/34945 中的文字记录即可排序排队的聊天轮流
* 通过https://github.com/stablyai/orca/pull/35069中的@brennanb2025停止休息聊天延迟本机命令菜单
* 从 @AmethystLiang 在 https://github.com/stablyai/orca/pull/35247 聊天中的 OpenCode 失败中恢复
* 保留供应商列表中缺少的模型，可在 @brennanb2025 在 https://github.com/stablyai/orca/pull/35266 的聊天中找到
* 在 https://github.com/stablyai/orca/pull/35572 中 @OrcaWin 运行一次处理大量图像的转录本
* 在 https://github.com/stablyai/orca/pull/35866 中重新打开旧工具运行，而不跳转到陈旧的滚动位置 @brennanb2025
* 在 https://github.com/stablyai/orca/pull/35913 中 @nwparker 停止在每次击键时重新渲染聊天编辑器控件
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36047 中减少隐藏聊天和选项卡更新的工作
* 将聊天会话记录文件保持在https://github.com/stablyai/orca/pull/36056中@brennanb2025的文件名长度限制内
* 使设置权限菜单与https://github.com/stablyai/orca/pull/36104中@brennanb2025的聊天权限选择器相匹配
* 阻止保存的聊天状态编写器记住 https://github.com/stablyai/orca/pull/36105 中@brennanb2025 的每个已关闭聊天
* 防止@nwparker 在 https://github.com/stablyai/orca/pull/36141 中重新渲染仅状态更新的成绩单
* 在https://github.com/stablyai/orca/pull/36142中由@brennanb2025降级到v1.4.244后，保持以Stop结束的聊天可读
* 跳过 WSL 发行版在 https://github.com/stablyai/orca/pull/36152 中通过 @nwparker 在这台计算机上查看聊天记录

### 插件

*图标主题、语法包和自定义编辑器、一个具有一步安装功能的插件列表，以及从状态栏快速访问。*

* 插件 Alpha：图标主题、语法包和自定义编辑器、一个可一步安装的插件列表，以及 @nwparker 在 https://github.com/stablyai/orca/pull/35470 中的 `orca://plugins` 链接
* 通过 https://github.com/stablyai/orca/pull/36153 中的 @AmethystLiang 从状态栏按钮或 Cmd/Ctrl+Shift+X 打开插件
* 显示一个插件列表，其中包含已安装的徽章、内联开关、安装状态过滤器、类别芯片和 @nwparker 在 https://github.com/stablyai/orca/pull/36100 中编写的 trusted 代码的简单文字
* 在四列中显示插件目录，并清晰地显示全部和查看 @nwparker 在 https://github.com/stablyai/orca/pull/35849 中的所有链接
* 尝试应用该插件，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/35846 中打开其页面
* 将大小写不同的自托管插件存储库路径视为 https://github.com/stablyai/orca/pull/35640 中 @nwparker 的不同存储库
* 当您在 https://github.com/stablyai/orca/pull/35642 中通过 @nwparker 关闭插件自动更新时，停止正在进行的更新
* 保持 Try it and Switch back toasts 足够长的时间，直到 @nwparker 在 https://github.com/stablyai/orca/pull/35650 中的 click
* 当您在 https://github.com/stablyai/orca/pull/35674 中通过 @nwparker 安装时，应用可见的单模式主题
* 对插件面板和编辑器使用一个加载程序，并保留 https://github.com/stablyai/orca/pull/35680 中 @nwparker 标记为失败的挂起面板
* 在 https://github.com/stablyai/orca/pull/35698 中 @nwparker 的重命名、重新加载和重复选项卡中保留插件二进制编辑器中未保存的编辑
* 加载已安装的插件，其最低 Orca 版本早于 @nwparker 在 https://github.com/stablyai/orca/pull/35756 中的字段
* https://github.com/stablyai/orca/pull/36085 中的 @AmethystLiang 将插件面板保持在侧边栏的高度内
* 通过 https://github.com/stablyai/orca/pull/36089 中的 @nwparker 将插件预览缓存限制为当前版本
* 计算 @nwparker 在 https://github.com/stablyai/orca/pull/36132 中从 Orca 公共目录安装的插件数量
* @nwparker 在 https://github.com/stablyai/orca/pull/36151 中更新插件后重新加载活动图标主题

### 浏览器

*浏览器拆分快捷方式、带有粘贴图像的较短注释反馈以及在浏览器中工作的 SSH 代理。*
* 使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35994 中使用快捷方式（在 macOS 上为 Cmd+Opt+B）在右侧的拆分中打开浏览器选项卡
* 默认情况下发送紧凑的注释反馈，并带有“包含页面详细信息”复选框，以获取 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35990 中的完整详细信息
* 将图像粘贴到注释注释中并通过https://github.com/stablyai/orca/pull/36004中的@AmoabaKelvin发送给代理
* 通过 https://github.com/stablyai/orca/pull/36022 中的 @nwparker 在 SSH 工作区的浏览器中通过 SSH 主机的代理访问站点
* 在 https://github.com/stablyai/orca/pull/35991 中通过 @AmoabaKelvin 重新启动或更新后保留您选择的默认浏览器配置文件
* 根据https://github.com/stablyai/orca/pull/35992中@AmoabaKelvin的open-links-in-Orca设置打开Orca自带的按钮和链接
* 在https://github.com/stablyai/orca/pull/31145中通过@chucoding调整浏览器窗格大小时显示页面的视口大小
* 通过 @promptprobe 在 https://github.com/stablyai/orca/pull/14562 中使 Next.js 服务器操作通过工作树的 *.orca.localhost 地址工作
* 在 https://github.com/stablyai/orca/pull/35286 中通过 @OrcaWin 关注 Chrome Web Store 重定向之前先检查它们
* 包含 @OrcaWin 在 https://github.com/stablyai/orca/pull/35291 中格式错误的浏览器自动化消息
* 在 https://github.com/stablyai/orca/pull/35326 中通过 @OrcaWin 检查站点权限时跳过未使用的帧扫描
* 在 https://github.com/stablyai/orca/pull/35327 中列出 @OrcaWin 的扩展选项卡时重用选项卡快照
* 在https://github.com/stablyai/orca/pull/35344中通过@OrcaWin从废弃的扩展本机帮助程序中释放启动数据
* 避免 @OrcaWin 在 https://github.com/stablyai/orca/pull/35346 中对扩展本机帮助器端口进行重复清理扫描
* 在 https://github.com/stablyai/orca/pull/35359 中通过 @OrcaWin 从扩展本机助手复制头数据
* 关闭扩展弹出窗口，在 https://github.com/stablyai/orca/pull/35360 中@OrcaWin 失去焦点时会自行关闭
* 在 https://github.com/stablyai/orca/pull/35362 中限制 @OrcaWin 对扩展本机助手的待处理写入
* 在 https://github.com/stablyai/orca/pull/35368 中通过 @OrcaWin 从扩展本机帮助程序中释放使用的缓冲区
* 跳过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35377 中转换过时的页面快照
* 通过设置为“服务器（流式传输）”的服务器加载页面，即使它无法通过 https://github.com/stablyai/orca/pull/35381 中的 @nwparker 进行流式传输
* 在https://github.com/stablyai/orca/pull/35397中通过@OrcaWin在同一浏览器会话中保持页面打开的弹出窗口
* 在 https://github.com/stablyai/orca/pull/35692 中由 @OrcaWin 在 client 托管浏览器中关闭整页导航中的“查找”
* 拒绝具有可见限制的第 21 页注释，而不是删除 https://github.com/stablyai/orca/pull/35979 中的@AmoabaKelvin 最旧的注释
* 以文本模式打印 `orca console` 和 `orca network` 条目并尊重 --limit by @AmoabaKelvin in https://github.com/stablyai/orca/pull/35981
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35982 中为代理设备和视口 `--mobile` 设置触摸输入和粗指针
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35989 中将 cookie 文件导入到远程服务器下的 client 托管浏览器中
* 当页面更改时，通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36007 中使用代理浏览器 0.39.4，使代理 clicks 保持在目标上
* 当工作树没有保存浏览器选项卡时立即返回 `orca tab list` by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36017
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36021 中预览来自配对主机的超过 512 KiB 的 HTML 文件

### 代理启动、状态和帐户

*Mac 应用程序在后台驱动，Codex 历史记录可按帐户分开保存，以及更稳定的 Grok、Antigravity 和移动模拟器支持。*

* 让代理默认在后台驱动 macOS 应用程序，无需移动指针或转移焦点（@AmoabaKelvin in https://github.com/stablyai/orca/pull/36005）
* 由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36020 报告 macOS 计算机使用操作没有任何改变、读回错误或挂起
* 返回计算机使用操作后发生的变化，并在https://github.com/stablyai/orca/pull/36023中添加@AmoabaKelvin的`get-app-state --query`
* 停止在每次状态检查时重新启动 macOS 权限助手，这会导致 https://github.com/stablyai/orca/pull/36028 中的 @nwparker 拒绝访问时鼠标无法使用
* @nwparker 在 https://github.com/stablyai/orca/pull/36150 中将每个 macOS 权限助手启动限制为每 5 秒一次
* 添加设置 → 代理 → 跨帐户共享 Codex 历史记录（默认情况下打开），并通过 @nwparker 在 https://github.com/stablyai/orca/pull/34981 中将管理帐户的 Codex 历史记录默认带入系统默认的 ~/.codex
* 在 macOS 和 Linux 上启动 Codex，无需进行粘贴猜测，因此会从 @nwparker 在 https://github.com/stablyai/orca/pull/35975 中发送的远程 clients 中输入提示
* 在 https://github.com/stablyai/orca/pull/34637 中通过 @brennanb2025 在 Windows 上切换反重力帐户
* 通过 https://github.com/stablyai/orca/pull/19309 中的 @brennanb2025 阻止任务文本中提到的代理名称接管窗格
* 对反重力模型进行分组并通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/34518 中刷新他们的努力选择
* 在 https://github.com/stablyai/orca/pull/34644 中带回 @brennanb2025 的 OMP 提交消息和聊天名称
* 从 https://github.com/stablyai/orca/pull/35051 中的 @brennanb2025 从会话历史记录而不是存储数据库中打开对话文件
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/35052 中恢复符号链接工作区的会话历史记录对话
* https://github.com/stablyai/orca/pull/35329 中 @OrcaWin 最后一点后连接关闭时完成移动模拟器手势
* 当 Esc 或 Ctrl+C 没有取消其转动时，保持 Grok 窗格工作 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35417
* 在 https://github.com/stablyai/orca/pull/35495 中 @AmoabaKelvin 取消后，保持 Grok 的后台 shell 和子代理可见
* 等待 @OrcaWin 在 https://github.com/stablyai/orca/pull/35503 中的移动模拟器中完成 scrcpy 下载
* 等待 https://github.com/stablyai/orca/pull/35536 中 @OrcaWin 所请求的 Android 虚拟设备在移动模拟器中启动
* 下一回合开始时，@brennanb2025 在 https://github.com/stablyai/orca/pull/35547 中清除 Orca 自己的 Codex“准备就绪”标题
* 在 https://github.com/stablyai/orca/pull/35561 中引用 @OrcaWin 在移动模拟器中发送到 Android 设备的文本
* 在 https://github.com/stablyai/orca/pull/35566 中的 @OrcaWin 的移动模拟器后台启动 scrcpy
* 当https://github.com/stablyai/orca/pull/35593中的@OrcaWin移动模拟器重新连接时重置部分视频帧
* 通过 https://github.com/stablyai/orca/pull/35599 中的 @OrcaWin 在移动模拟器中通过 Orca 的进程主机运行 Android 命令
* 在 https://github.com/stablyai/orca/pull/35616 中通过 @OrcaWin 在移动模拟器中重用设备路由
* 由 @OrcaWin 在 https://github.com/stablyai/orca/pull/35623 中报告移动模拟器中 Android 应用程序启动失败
* 在https://github.com/stablyai/orca/pull/35635中@OrcaWin的移动模拟器中遵循Android视频的真实尺寸
* 当 Orca 在 https://github.com/stablyai/orca/pull/35649 中为代理保持唤醒状态后退出时，让您的 Mac 再次睡眠
* 在 https://github.com/stablyai/orca/pull/35748 中 @brennanb2025 从工作项启动时使用共享默认代理选择
* 避免 https://github.com/stablyai/orca/pull/35749 中 @brennanb2025 不支持的 Claude 工作流代理视图
* 通过 https://github.com/stablyai/orca/pull/35768 中的 @nwparker 加载捆绑的代理状态规则，无需再次检查它们
* 将无法启动的代理 CLI 报告为缺失，而不是启动失败（@nwparker 在 https://github.com/stablyai/orca/pull/35770 中）
* 重新启动后添加到会话搜索索引，而不是通过 https://github.com/stablyai/orca/pull/35941 中的 @nwparker 重写大型记录
* 每次启动检查时，在 https://github.com/stablyai/orca/pull/35967 中的 @nwparker 在 Windows 上的主线程中查找一次 Codex CLI
* 通过 https://github.com/stablyai/orca/pull/35988 中的 @nwparker 为运行 AI Vault 的主机的操作系统恢复 AI Vault 会话
* 在 https://github.com/stablyai/orca/pull/35995 中引用 @nwparker 为主机自己的操作系统和 shell 提供的恢复命令
* 跳过将应用程序向前推进以实现可访问性 clicks by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36006
* 在 https://github.com/stablyai/orca/pull/36119 中选择 @brennanb2025 的 Claude hook 事件时，忽略启动器自己的版本
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/36127 的追赶过程中一次通过找到保留的克劳德提示回合

### 编排和 CLI

*代理之间的消息以卡片形式、聊天工作人员嵌套在协调员之下，以及更安静的自动化启动。*

* 通过 https://github.com/stablyai/orca/pull/34824 中的 @brennanb2025 将代理之间的消息显示为带有其他代理状态的卡片
* 在 https://github.com/stablyai/orca/pull/36168 中@brennanb2025 在代理消息卡上说“协调员”和“工作人员”
* 将聊天工作人员嵌套在https://github.com/stablyai/orca/pull/34601中@brennanb2025在工作区代理列表中启动它们的代理下
* 跳过代理 CLI 更新提示，由 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36133 中进行无人值守的自动化启动
* 当 https://github.com/stablyai/orca/pull/35791 中 @Venius24 拒绝工人的调度前导码时，包括提供者的错误
* 切勿在 https://github.com/stablyai/orca/pull/35371 中将捆绑的 `orca` 启动器注册为 @Hotragn 自身的链接
* 让 `orca worktree rm` 报告删除是否有效，而不仅仅是 @nwparker 在 https://github.com/stablyai/orca/pull/35459 中接受了删除
* 停止 `orca serve` 在 Linux 上添加的 `orca` 命令隐藏 GNOME 屏幕阅读器，并使用 https://github.com/stablyai/orca/pull/35578 中 @nwparker 的 CLI 将其删除
* 让主机为 https://github.com/stablyai/orca/pull/35978 中 @nwparker 运行的另一个所有者的自动化创建工作区
* 为主机使用 @nwparker 在 https://github.com/stablyai/orca/pull/35986 中运行的桌面自己的自动化功能创建的标签工作区

### 终端

*每台计算机运行的终端限制，ble.sh 提示不再停止启动命令，以及 macOS 上更轻的进程检查。*

* 添加设置→终端→高级→每台计算机的最大运行终端数，包括https://github.com/stablyai/orca/pull/31396中的@brennanb2025连接的远程计算机
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/35401 中达到运行终端限制时，保持睡眠对话准备恢复
* 当 ble.sh 拥有 bash 提示符时发送 shell 就绪信号，因此启动命令不再等待 15 秒 by @nwparker in https://github.com/stablyai/orca/pull/36163
* 告诉您在 https://github.com/stablyai/orca/pull/35581 中的 @nwparker 未发送连接远程终端之前键入的密钥的情况
* 读取 Orca 内的 macOS 进程表，而不是在 https://github.com/stablyai/orca/pull/35987 中 @nwparker 的每次检查时启动 `ps`
* @nwparker 在 https://github.com/stablyai/orca/pull/35596 中正确读取 nushell 中的文件夹报告
* 使终端文件夹报告在 https://github.com/stablyai/orca/pull/35606 中 @nwparker 的空格、控制字符和 % 上达成一致
* 刷新编辑器选项卡，终端文件链接由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/35656 中打开
* 将 Orca 自己的输入和输出句柄保留在它在 Windows 上启动的每个程序中（https://github.com/stablyai/orca/pull/35678 中的@nwparker）
* 记录 @nwparker 在 https://github.com/stablyai/orca/pull/35734 中听到的终端出口 no client
* 停止链接检测扫描 https://github.com/stablyai/orca/pull/35767 中 @nwparker 无法继续 URL 的过去行
* 一旦与https://github.com/stablyai/orca/pull/35783中的@nwparker匹配，就停止在每次写入时重新读取终端大小
* 在https://github.com/stablyai/orca/pull/35889中通过@nwparker恢复终端时删除替换程序的标题和输入模式
* 通过https://github.com/stablyai/orca/pull/35920中@nwparker的屏幕标题来判断如何重新连接实时代理
* 在https://github.com/stablyai/orca/pull/36008中@AmethystLiang更新活动之前将键入的密钥发送到终端
* 仅保留 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36088 中键入诊断的时间

### SSH、WSL 和远程服务器

*停止了保持停止状态的 WSL 发行版、在您离开的位置重新打开的 WSL 终端以及更快的 SSH 登录和上传。*

* 在已恢复的发行版已停止的 WSL 终端上显示启动卡，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/35813 中启动发行版
* 将已停止的 WSL 发行版的工作树保留在侧边栏中，并在 @nwparker 在 https://github.com/stablyai/orca/pull/35733 中运行后刷新它们
* 仅当您切换到其工作区或通过 https://github.com/stablyai/orca/pull/35867 中的 @nwparker 展开文件夹时才启动已停止的 WSL 发行版
* 在 https://github.com/stablyai/orca/pull/35385 中 @nwparker 重新打开您所在文件夹中恢复的 WSL 终端
* 在 https://github.com/stablyai/orca/pull/35517 中的 @nwparker 每次提示时报告 WSL 终端中鱼壳的文件夹
* 在 https://github.com/stablyai/orca/pull/35597 中的 @nwparker 每次提示时从 WSL 终端中的 sh、dash 和 ash shell 报告文件夹
* 在 WSL 终端中启动早于 2.7 的鱼壳，而不是在 https://github.com/stablyai/orca/pull/35579 中由 @nwparker 失败
* 让第二个桌面使用 SSH 主机，另一个桌面已由 @nwparker 在 https://github.com/stablyai/orca/pull/35879 中设置
* 不要为 https://github.com/stablyai/orca/pull/35792 中的 @nwparker 中已有的 Orca 机器导入 SSH 配置条目
* 通过 https://github.com/stablyai/orca/pull/35348 中的 @OrcaWin 重叠小文件，更快地将文件夹上传到 SSH 主机
* 通过 https://github.com/stablyai/orca/pull/35318 中的 @OrcaWin 立即发送小数据包，更快地登录 SSH 主机
* 在 https://github.com/stablyai/orca/pull/35911 中@nwparker 在首次使用时而不是在启动时加载 SSH 支持
* 让远程服务器的浏览器助手仅在该机器上监听 @teamauresta in https://github.com/stablyai/orca/pull/31896
* @OrcaWin 在 https://github.com/stablyai/orca/pull/35302 中限制慢速中继连接的排队数据
* 读取会话历史记录，无需启动 https://github.com/stablyai/orca/pull/35367 中 @nwparker 停止的 WSL 发行版
* 在 https://github.com/stablyai/orca/pull/35387 中 @nwparker 启动已停止的 WSL 发行版时保持帐户同步和使用情况预览
* 保留后台 Git、GitHub 和 GitLab 从 @nwparker 在 https://github.com/stablyai/orca/pull/35410 中启动停止的 WSL 发行版时读取的内容
* 保持后台启动检查和代理检测，防止 https://github.com/stablyai/orca/pull/35411 中 @nwparker 启动已停止的 WSL 发行版
* 保持设置检查 CLI 的状态、修复、运行状况以及在 https://github.com/stablyai/orca/pull/35412 中启动 @nwparker 停止的 WSL 发行版的链接
* 阻止来自手机、网络和 CLI 的后台请求启动 @nwparker 在 https://github.com/stablyai/orca/pull/35430 中停止的 WSL 发行版
* 在后台步骤之前等待正在运行的 WSL 发行版的最新列表，以便 @nwparker 在 https://github.com/stablyai/orca/pull/35433 中不会重新启动正在关闭的发行版
* 在每个 Codex 修复批次之前再次检查，因此停止的 WSL 发行版仍由 https://github.com/stablyai/orca/pull/35448 中的 @nwparker 保持停止状态
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/35483 中保存列表时，切勿恢复从服务器设备列表中删除的设备
* 在https://github.com/stablyai/orca/pull/35484中@nwparker跳过对计算机未更改的远程服务器的重复启动检查
* 通过https://github.com/stablyai/orca/pull/35486中的@nwparker更快地启动远程服务器的终端主机
* 切勿将 @nwparker 在 https://github.com/stablyai/orca/pull/35510 中保存时丢弃的子设备的令牌交给已配对的设备
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/35513 中强化远程服务器的启动检查
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/35527 中进行下一次检查时，停止从磁盘上删除的设备登录
* 在 https://github.com/stablyai/orca/pull/35533 中 @nwparker 删除的子设备的同一同步中发出新令牌
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/35539 中保留部分损坏的设备列表时，保持其他配对设备处于登录状态
* @nwparker 在 https://github.com/stablyai/orca/pull/35568 中稍早启动远程服务器
* 拒绝 https://github.com/stablyai/orca/pull/35583 中 @OrcaWin 的格式错误的加密连接握手
* 通过仅启动 https://github.com/stablyai/orca/pull/35659 中@nwparker 停止的 WSL 发行版来分享技能
* 切勿在后台扫描 https://github.com/stablyai/orca/pull/35677 中的 @nwparker 的 WSL Codex 历史源
* 将远程终端的屏幕状态保持在服务器的实时深度，并限制等待 @nwparker 在 https://github.com/stablyai/orca/pull/35679 中的聊天快照
* 在启动后进行完整的 Codex 历史扫描，同时历史记录位于 https://github.com/stablyai/orca/pull/35703 中 @nwparker 的 WSL 中
* 切勿启动已停止的默认 WSL 发行版，因为 Windows 上缺少 gh 或 glab by @nwparker in https://github.com/stablyai/orca/pull/35709
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/35725 中重试技能共享时，仅启动尚未读取的 WSL 发行版
* 缩小会话扫描可能启动已停止的 WSL 发行版的差距，作者为 https://github.com/stablyai/orca/pull/35729 中的 @nwparker
* 不要启动已停止的 WSL 发行版来读取 @nwparker 在 https://github.com/stablyai/orca/pull/35778 中的存储库的默认基本分支
* 一旦 https://github.com/stablyai/orca/pull/35808 中的 @nwparker 运行删除的启动，就释放远程服务器的唤醒保持
* 使用确认的主文件夹进行 WSL 成绩单查找，将 WSL 删除视为您自己的操作，并翻译 @nwparker 在 https://github.com/stablyai/orca/pull/35810 中的结转通知
* 再次向配对主机询问它拒绝的默认基础分支，并通过 https://github.com/stablyai/orca/pull/35812 中的 @nwparker 缩小时间间隔
* 保持 Codex WSL 挂钩安装并检查 @nwparker 在 https://github.com/stablyai/orca/pull/35827 中启动已停止的发行版
* 保持设置发出命令和路径检查，以启动 https://github.com/stablyai/orca/pull/35829 中 @nwparker 停止的 WSL 发行版
* 重试在 https://github.com/stablyai/orca/pull/35845 中 @nwparker 启动其发行版时失败的监视 WSL 文件夹
* 仅当您在 https://github.com/stablyai/orca/pull/35854 中通过 @nwparker 询问时，才从已停止的 WSL 发行版加载提交历史记录
* 切勿为 @nwparker 在 https://github.com/stablyai/orca/pull/35857 中运行的计划自动化启动已停止的 WSL 发行版
* 保留恢复的终端环境设置，以防止 @nwparker 在 https://github.com/stablyai/orca/pull/35858 中启动已停止的 WSL 发行版
* 说 Orca 无法检查持有终端的 WSL 发行版时，而不是说它被 https://github.com/stablyai/orca/pull/35860 中的 @nwparker 停止
* 保持 Orca 的后台终端从启动 @nwparker 在 https://github.com/stablyai/orca/pull/35865 中停止的 WSL 发行版开始
* 当 https://github.com/stablyai/orca/pull/35869 中的节点下载没有得到 @nwparker 的答复时，第一次 WSL 设置会快速失败
* 保留源代码管理的 PR 推送目标，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/35885 中启动已停止的 WSL 发行版来创建 PR 检查
* 在检查其文件夹之前保留恢复的 WSL 终端，无论它们以 https://github.com/stablyai/orca/pull/35895 中的 @nwparker 启动的方式
* 仅当 @nwparker 在 https://github.com/stablyai/orca/pull/35897 中最近切换时才唤醒工作区切换上的资源管理器和 Git 状态
* 切勿启动已停止的 WSL 发行版来检查 https://github.com/stablyai/orca/pull/35899 中的 @nwparker 的文件夹工作区路径
* 修复问题命令后续操作：无操作保存、WSL Git 存储库和 @nwparker 在 https://github.com/stablyai/orca/pull/35900 中配对的主机
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/35907 中阻止端口扫描器解析已停止的 WSL 发行版的工作空间路径
* 用简单的句子解释持有的 WSL 终端，并启动您在 https://github.com/stablyai/orca/pull/35935 中由 @nwparker 自己创建的工作树的终端
* 切勿在停止的 WSL 发行版中启动自动化的启动终端，就像您在 https://github.com/stablyai/orca/pull/35970 中通过 @nwparker 启动它一样
* 在文件夹检查之前保留 Orca 的后台 WSL 启动，并让您自己的启动通过 @nwparker 在 https://github.com/stablyai/orca/pull/35971 中检查 WSL 文件夹
* 阅读 @nwparker 在 https://github.com/stablyai/orca/pull/36077 中运行的 WSL 发行版列表一次以进行启动
* 将 AI Vault 的 WSL 会话结转限制为 @nwparker 在 https://github.com/stablyai/orca/pull/36090 中的最新范围
* 每次启动时读取一次 WSL 发行版的驱动器安装文件夹，包括 https://github.com/stablyai/orca/pull/36097 中 @nwparker 的默认 /mnt/
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36139 中诊断中继连接的桌面时钟漂移
* 为后台 WSL 启动准备环境，无需唤醒 https://github.com/stablyai/orca/pull/36149 中的 @nwparker 发行版

### 源代码控制和集成
*凭证远离 Git 错误、源代码控制操作的模型和工作量控制，以及更少的 GitHub 请求。*

* 在 https://github.com/stablyai/orca/pull/36205 中的@AmethystLiang 显示之前从 Git 远程错误中删除凭据
* 为源代码控制操作提供自己的模型和工作量控件，而不是 https://github.com/stablyai/orca/pull/34275 中 @brennanb2025 的参数中的标志
* 当origin使用@YiGeon在https://github.com/stablyai/orca/pull/35688中重命名的存储库的旧URL时，保留相同的存储库PR
* 跳过由 @brennanb2025 在 https://github.com/stablyai/orca/pull/34219 中已知在 GitHub 之外托管的项目的任务请求
* 将纯项目表格单元格居中，并通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/34532 中标记链接的 PR 溢出
* 在 https://github.com/stablyai/orca/pull/34747 中加载 @OrcaWin 没有重复的 GitHub 请求的 PR 对话
* 将 PR 参与者和 @OrcaWin 在 https://github.com/stablyai/orca/pull/34842 中查看的文件请求结合起来
* 重用https://github.com/stablyai/orca/pull/34848中@OrcaWin读取的存储库合并设置
* 一旦启动它们的操作以https://github.com/stablyai/orca/pull/35020中的@brennanb2025结束，停止线性写入
* 在 https://github.com/stablyai/orca/pull/35295 中合并 @OrcaWin 的 PR 字段和堆栈摘要请求
* 将您发布的评论合并到 @OrcaWin 在 https://github.com/stablyai/orca/pull/35306 中获取的 PR 评论历史记录中
* 在 https://github.com/stablyai/orca/pull/35315 中 @OrcaWin 解决 PR 线程失败时，同时保留评论更改
* 当 @OrcaWin 在 https://github.com/stablyai/orca/pull/35351 中加载新创建的问题时，保留您的位置
* 跳过 https://github.com/stablyai/orca/pull/35524 中 @OrcaWin 完成的检查的空注释读取
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35525 中重命名 PR，无需额外查找
* 重用 https://github.com/stablyai/orca/pull/35546 中@OrcaWin 公开对话中的问题详细信息
* 在 https://github.com/stablyai/orca/pull/35552 中重用 @OrcaWin 读取的 GitHub 工作项中的搜索计数和游标
* 共享存储库受让人在 https://github.com/stablyai/orca/pull/35564 中通过 @OrcaWin 读取任务行
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35575 中更新 PR 审阅者，无需额外查找
* 在 https://github.com/stablyai/orca/pull/35653 中 @OrcaWin 的 PR 上的新提交中回滚失败的审核线程解析
* 忽略 https://github.com/stablyai/orca/pull/35655 中 @OrcaWin 已解决的审核线程上的第二个解决
* 在 https://github.com/stablyai/orca/pull/36027 中 @AmethystLiang 的推送错误中保留陈旧租约拒绝的详细信息
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36041 中识别来自 Git 的彩色陈旧租约拒绝
* 通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/36107 中设置 Jira 项目排序一次
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/36156 中使用一次 Git 调用而不是每个远程调用一次来检查远程分支

### 工作区、侧边栏和日常润色

*再次输入工作区名称作为分支，您可以重新打开现有的远程分支，以及许多 Markdown 和编辑器修复。*

* 使用https://github.com/stablyai/orca/pull/35815中@nwparker再次输入的工作区名称作为其分支
* 在 https://github.com/stablyai/orca/pull/34295 中的 @AmethystLiang 在桌面、手机和远程主机上打开您为新工作区选择的现有远程分支，而不是创建新的后缀分支
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/35852 中运行代理时，每隔几秒停止保留和重写约 2 MB 未使用的使用统计信息
* 在通知卡上方显示 toast，并使 Codex ~/.codex 注意到 @nwparker 在 https://github.com/stablyai/orca/pull/36167 中的卡片
* 在 https://github.com/stablyai/orca/pull/35588 中 @nwparker 在 Windows 上卸载时删除 Orca 的代理挂钩和 PATH 条目
* 当 Orca 安装记录在 https://github.com/stablyai/orca/pull/35668 中 @nwparker 指定无安装位置时，在 Windows 上保持代理挂钩
* 阻止 Windows 快捷方式标签溢出上下文菜单，作者：https://github.com/stablyai/orca/pull/35726 中的 @nwparker
* 在 Windows 和 Linux 快捷方式标签中显示 ⇧，作者：@nwparker，https://github.com/stablyai/orca/pull/35754
* 在 https://github.com/stablyai/orca/pull/35735 中将 CMakeLists.txt 突出显示为 @nwparker 的 CMake
* 在 https://github.com/stablyai/orca/pull/35573 中通过 @OrcaWin 在手机上突出显示 Justfile 食谱和 HCL 作业
* 即使在 https://github.com/stablyai/orca/pull/14654 中 @brennanb2025 的长期状态历史记录之后，侧栏中的代理行仍按会话开始时间排序
* 在 https://github.com/stablyai/orca/pull/34798 中通过 @OrcaWin 从编辑器中过大的 Markdown 检查中释放内存
* 在 https://github.com/stablyai/orca/pull/34800 中通过@OrcaWin 重用跨应用程序状态更新的文件夹连接检查
* 在 https://github.com/stablyai/orca/pull/34810 中通过 @OrcaWin 切换编辑器选项卡时保持折叠和水平滚动
* 通过 https://github.com/stablyai/orca/pull/34816 中的 @OrcaWin 将每个文件恢复的读取位置分开
* 当引文粘贴回退到 https://github.com/stablyai/orca/pull/34827 中的 @OrcaWin 的纯文本时，保留文字
* 在 https://github.com/stablyai/orca/pull/34829 中运行@OrcaWin 在编辑器中查找之前等待输入暂停
* 在阅读 https://github.com/stablyai/orca/pull/34839 中 @OrcaWin 的 clipboard 之前，请在编辑器中接受大量粘贴
* @OrcaWin 在 https://github.com/stablyai/orca/pull/34875 中分别停止空闲的 TypeScript 和 JavaScript 语言工作者
* 跳过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34876 中重复或放弃的代码摘录的语法着色
* 当 https://github.com/stablyai/orca/pull/34898 中的@OrcaWin 打开丰富模式时，从丰富模式的差异中打开源选项卡
* 将合并冲突导航保留在 https://github.com/stablyai/orca/pull/34902 中 @OrcaWin 所属的窗格中
* 限制 Orca 在 https://github.com/stablyai/orca/pull/34903 中通过 @OrcaWin 跟踪多少个关闭的编辑器内容
* 当 https://github.com/stablyai/orca/pull/34904 中的 @OrcaWin 更改目标文件时取消粘贴
* 在读取之前处理文件更改事件，并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34920 中共享窗格快照
* 当 @OrcaWin 在 https://github.com/stablyai/orca/pull/34921 中打开编辑器时重用文件快照
* 从 https://github.com/stablyai/orca/pull/34922 中的 @OrcaWin 所属文件中复制装订线链接
* 在 https://github.com/stablyai/orca/pull/34934 中重用 @OrcaWin 未更改的审阅块的行计数
* 在https://github.com/stablyai/orca/pull/34952中通过@OrcaWin在单元格和选项卡开关之间保留笔记本单元格撤消
* 在https://github.com/stablyai/orca/pull/34957中用@OrcaWin替换整个单词时保持组合标记
* @OrcaWin 在 https://github.com/stablyai/orca/pull/34963 中进行编辑后，保留评论要点
* 仅将延迟审阅笔记保存到 https://github.com/stablyai/orca/pull/34964 中@OrcaWin 所属的草稿中
* https://github.com/stablyai/orca/pull/34969中让Escape在Find中完成文本合成，而不是通过@OrcaWin关闭它
* https://github.com/stablyai/orca/pull/34970中@OrcaWin缩进时保留所选代码
* 在https://github.com/stablyai/orca/pull/34971中@OrcaWin将斜杠和文档触发器保留为代码内的纯文本
* 在 https://github.com/stablyai/orca/pull/34972 中查找 @OrcaWin 提供的带有额外空格、图像和文档链接的目录标题
* 当 https://github.com/stablyai/orca/pull/34975 中的 @OrcaWin 的另一个窗格更改文件时，保持 Markdown 补全可用
* 在 https://github.com/stablyai/orca/pull/34976 中通过 @OrcaWin 在大型粘贴中保留 Windows 行结尾
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34980 中改进编辑器选择器的关闭方式、主题和屏幕阅读器名称
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34983 中将美人鱼图的读取位置在窗格之间分开
* 在 https://github.com/stablyai/orca/pull/34986 中通过 @OrcaWin 收集每个布局的审阅注释元素一次
* 在 https://github.com/stablyai/orca/pull/34992 中保留完成菜单并通过 @OrcaWin 看到键盘选择的结果
* 在https://github.com/stablyai/orca/pull/34998中通过@OrcaWin将小图像保留在图像缓存目标之外
* 在 https://github.com/stablyai/orca/pull/35001 中通过 @OrcaWin 缩放时重用图像标识
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35028 中保持渲染图像细节同步
* 恢复https://github.com/stablyai/orca/pull/35031中@OrcaWin渲染后美人鱼图的读取位置
* 在 https://github.com/stablyai/orca/pull/35034 中通过 @OrcaWin 恢复文件源后修复笔记本滚动跟踪
* 当https://github.com/stablyai/orca/pull/35055中的文档没有@OrcaWin的链接时，跳过Markdown结构扫描
* 在https://github.com/stablyai/orca/pull/35057中接受@OrcaWin在代码编辑器自己的处理程序之前粘贴源代码
* 在https://github.com/stablyai/orca/pull/35059中@OrcaWin使用非常规文件之前拒绝恢复文件
* 当 https://github.com/stablyai/orca/pull/35067 中的 @brennanb2025 工作区文件夹消失时停止 Git 元数据观察程序
* 打开https://github.com/stablyai/orca/pull/35071中@OrcaWin修改过的链接-clicked
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35072 中检查内部消息，工作量更少
* 在 https://github.com/stablyai/orca/pull/35075 中@OrcaWin 跳转到内容之前展开折叠部分
* 在 https://github.com/stablyai/orca/pull/35077 中通过@OrcaWin 在丰富模式和预览模式下将标题与非英文字符匹配
* 在 https://github.com/stablyai/orca/pull/35111 中保留 @OrcaWin 未突出显示的纯文本代码块
* 在 https://github.com/stablyai/orca/pull/35112 中为每个编辑器安装一个 @OrcaWin 的代码高亮插件
* 在 https://github.com/stablyai/orca/pull/35116 中 @OrcaWin 映射替换之前删除过时的代码突出显示
* 在https://github.com/stablyai/orca/pull/35162中通过@OrcaWin在选定单元格旁边插入时保持表格列宽度
* 在 https://github.com/stablyai/orca/pull/35176 中通过@OrcaWin 进行缩进时保持尾随混合列表项
* 在 https://github.com/stablyai/orca/pull/35187 中正确解析任务列表，并在编号的父项下正确列出 @OrcaWin 的包装标记、延续行和裸标记
* 在 https://github.com/stablyai/orca/pull/35224 中通过@OrcaWin 在 Markdown 表中保留修改后的换行符
* 在https://github.com/stablyai/orca/pull/35227中发布@OrcaWin最后一个封闭的丰富Markdown编辑器
* @OrcaWin 在 https://github.com/stablyai/orca/pull/35236 中保留空列表项时保留嵌套列表内容
* 取消 @OrcaWin 在 https://github.com/stablyai/orca/pull/35261 中过时的评论注释位置更新
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35332 中保持文本、图像和文件的复制顺序
* 限制 @OrcaWin 在 https://github.com/stablyai/orca/pull/35373 中进行连续外部编辑期间预览选择等待的时间
* 在 https://github.com/stablyai/orca/pull/35374 中重用 @OrcaWin 的跨段落结尾的 Markdown 解析工作
* https://github.com/stablyai/orca/pull/35383 中的@OrcaWin 在页面消失时关闭本机编辑菜单
* 通过 https://github.com/stablyai/orca/pull/35418 中的 @AmoabaKelvin 停止从终端保存同一文件的两次相互覆盖
* 当 @OrcaWin 在 https://github.com/stablyai/orca/pull/35419 中关闭待处理的 PDF 导出图像回复时，删除待处理的 PDF 导出图像回复
* 在 https://github.com/stablyai/orca/pull/35458 中 @nwparker 拒绝在停止其终端之前删除子模块签出
* 处理后期诊断请求错误，直到https://github.com/stablyai/orca/pull/35496中的@OrcaWin关闭连接
* 让您在 https://github.com/stablyai/orca/pull/35545 中消除 @nwparker 的工作区自动命名失败
* 在 https://github.com/stablyai/orca/pull/35556 中跳过 @OrcaWin 取消的请求启动文件观察程序
* 仅针对https://github.com/stablyai/orca/pull/35570中@OrcaWin更改的路径刷新组合差异状态
* 加载您首先查看的组合差异行，并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35594 中删除过时的排队加载
* 当 @OrcaWin 在 https://github.com/stablyai/orca/pull/35611 中仅更改文件详细信息时，保留合并的差异内容
* 在https://github.com/stablyai/orca/pull/35625中保存@OrcaWin的Markdown时保留粘贴的聊天图像
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35647 中复制带有反斜杠的本地 Windows 路径
* 通过https://github.com/stablyai/orca/pull/35720中的@nwparker解释如何在创建工作树超时时提高限制
* 在 https://github.com/stablyai/orca/pull/35730 中取消@AmoabaKelvin 的听写后立即释放语音引擎
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35743 中保持笔记文件夹之间的相对链接有效
* 在 https://github.com/stablyai/orca/pull/35789 中复制和粘贴 @OrcaWin 的丰富 Markdown 时保留文件链接
* 在第一个窗口打开后加载遥测数据，以便 @ctolkien 在 https://github.com/stablyai/orca/pull/35798 中更快启动
* 直接比较工作区行，而不是在 @nwparker 在 https://github.com/stablyai/orca/pull/35824 中的每次写入时序列化它们
* 当 https://github.com/stablyai/orca/pull/35940 中的 @nwparker 环境覆盖禁用遥测时，保持遥测关闭
* 切勿在 https://github.com/stablyai/orca/pull/35949 中延迟发送 @nwparker 保留的启动遥测事件
* 通过 Orca 的网络 client 发送遥测数据，以便它通过 https://github.com/stablyai/orca/pull/35972 中的 @nwparker 跟踪您的代理
* 通过https://github.com/stablyai/orca/pull/35977中的@AmoabaKelvin，通过其侧边栏名称而不是其类型来命名“发送注释至”中的每个代理
* 跳过 https://github.com/stablyai/orca/pull/36002 中 @AmethystLiang 关闭菜单和批量远程侧边栏订单更新的工作
* 停止在 https://github.com/stablyai/orca/pull/36009 中 @AmethystLiang 在 Markdown 中突出显示不明确的 Unicode 字符
* 在侧边栏的每个主机部分显示跨主机项目的标头，作者：https://github.com/stablyai/orca/pull/36012 中的@nwparker
* 软化文件显示闪光并跳过它以查看 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36039 中的新视图
* 停止在 https://github.com/stablyai/orca/pull/36071 中 @nwparker 重新设计每个侧边栏调整框架大小上的整个窗口
* @nwparker 在 https://github.com/stablyai/orca/pull/36098 中重新设计窗口整个部分的焦点样式
* 修复@nwparker 在 https://github.com/stablyai/orca/pull/36103 扫描中发现的六个性能问题
* 当 @nwparker 在 https://github.com/stablyai/orca/pull/36165 中删除工作树时，忘记选项卡选择状态

### 语言和翻译

*以您的语言显示的日期和数字，以及应用程序中翻译的错误消息。*

* 在https://github.com/stablyai/orca/pull/35671中@OrcaWin以UI语言显示日期和数字
* 翻译 https://github.com/stablyai/orca/pull/35413 中 @OrcaWin 的任务页面、自动化和共享组件中的剩余副本
* 翻译 https://github.com/stablyai/orca/pull/35416 中的右侧边栏、GitHub 和 @OrcaWin 的 PR 页面剩余内容
* 在 https://github.com/stablyai/orca/pull/35440 中通过 @OrcaWin 翻译编辑器、聊天、技能和入门中的复数和剩余副本
* 在 https://github.com/stablyai/orca/pull/35443 中翻译 @OrcaWin 的侧边栏、状态栏、选项卡栏和工作区清理副本
* 在 https://github.com/stablyai/orca/pull/35602 中跳过 @OrcaWin 重新加载未更改的插件语言包
* 在 https://github.com/stablyai/orca/pull/35605 中使用 @OrcaWin 的正确复数形式进行后台任务和子代理计数
* 对审阅标签、打开方式、删除对话框、时间线和 orca 使用整句翻译。yaml trust by @OrcaWin in https://github.com/stablyai/orca/pull/35608
* 在https://github.com/stablyai/orca/pull/35615中通过@OrcaWin在启动时加载内置翻译一次
* 在 https://github.com/stablyai/orca/pull/35626 中翻译 @OrcaWin 的创建项目失败和快捷方式警告
* 将稳定 ID 与 https://github.com/stablyai/orca/pull/35627 中 @OrcaWin 的清理芯片、仿真器选项卡和 CSV 错误的翻译标签分开
* 翻译 WSL 主机状态详细信息并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35664 中添加拒绝
* 在https://github.com/stablyai/orca/pull/35666中翻译@OrcaWin的自动化运行跳过和失败原因
* 翻译 @OrcaWin 在 https://github.com/stablyai/orca/pull/35669 中提交、PR 和 Jira 标题的 AI 文本生成失败
* 在https://github.com/stablyai/orca/pull/35689中翻译@OrcaWin的GitHub和GitLab操作失败
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35697 中翻译源代码控制 AI 设置和生成计划失败
* 在 https://github.com/stablyai/orca/pull/35702 中使用 @OrcaWin 的原生复数表示精确的一个情况
* 在 https://github.com/stablyai/orca/pull/35705 中翻译 @OrcaWin 的 PR/MR 起点和堆叠 PR 创建失败
* 翻译 @OrcaWin 的 https://github.com/stablyai/orca/pull/35736 功能导览和功能提示
* 翻译 @OrcaWin 在 https://github.com/stablyai/orca/pull/35737 中共享的验证错误、语音模型、设置源和项目组副本
* 在 https://github.com/stablyai/orca/pull/35742 中翻译 @OrcaWin 的移动模拟器、PDF 导出和诊断故障
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35747 中翻译临时虚拟机设置和清理失败
* 在 https://github.com/stablyai/orca/pull/35750 中翻译 @OrcaWin 的 AI Vault 扫描问题和聊天自动命名失败问题
* 翻译 https://github.com/stablyai/orca/pull/35832 中 @OrcaWin 的启动失败和安装文件夹恢复文本
* 在 https://github.com/stablyai/orca/pull/35833 中翻译 @OrcaWin 的更新程序失败消息
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35843 中翻译远程服务器配对、主机登录和 Bitbucket 连接失败
* 在 https://github.com/stablyai/orca/pull/35844 中通过 @OrcaWin 翻译 AI 文本生成中的代理输出和 Kimi 失败消息
* 在 https://github.com/stablyai/orca/pull/35855 中翻译 @OrcaWin 的浏览器 cookie 导入失败
* 翻译 @OrcaWin 在 https://github.com/stablyai/orca/pull/35861 中的宠物导入和仓库图标上传错误
* 在 https://github.com/stablyai/orca/pull/35893 中翻译@OrcaWin 的源代码控制远程错误提示
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35914 中翻译子模块、代理摘要、过滤器计数和自动化中的剩余内容

### 电话和网络

*通过语音计和更稳定的电话连接进行实时听写。*

* 在您打电话时显示听写的单词，并将其插入到光标处，作者：https://github.com/stablyai/orca/pull/35502 中的 @AmoabaKelvin
* 在手机上听写时显示语音计和计时器，并在启动和停止时使用触觉反馈，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/35500 中提供
* 在 https://github.com/stablyai/orca/pull/35777 中@AmoabaKelvin 重新发送手机连接断开时丢失的听写音频
* 在 https://github.com/stablyai/orca/pull/35834 中 @AmoabaKelvin 在电话上听写时，注意到几秒钟内无声连接断开
* 沉默一分钟后停止手机上的点击模式听写 @AmoabaKelvin in https://github.com/stablyai/orca/pull/35716
* 停止听写并保留您在电话上第一次按“后退”时所说的话，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/35477
* 在 https://github.com/stablyai/orca/pull/35441 中通过 @AmoabaKelvin 在手机上显示听写麦克风何时启动、保持模式和屏幕阅读器状态
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/34456 中为手机上的聊天代码、表格、报价和图表提供更清晰的布局
* 在 https://github.com/stablyai/orca/pull/34462 中显示 @AmoabaKelvin 存储在手机配对桌面上的聊天图像
* https://github.com/stablyai/orca/pull/36120 中的 @AmoabaKelvin 转发 iOS 键盘键和 Shift+Enter
* 在 https://github.com/stablyai/orca/pull/36083 中@AmoabaKelvin 打字时增加电话聊天编辑器
* 在 https://github.com/stablyai/orca/pull/36109 中@AmoabaKelvin 保持实时输入焦点并恢复手机上失败的发送
* 在 https://github.com/stablyai/orca/pull/31473 中@nwparker 在手机上保持长终端和聊天粘贴的完整性
* 显示实时文本插入符号并在 https://github.com/stablyai/orca/pull/31477 中的@nwparker 的电话输入中保留选择编辑
* 通过电话上的一张卡回答代理问题，并通过 https://github.com/stablyai/orca/pull/31663 中的 @nwparker 联系长问题
* 保持未加载的桌面浏览器选项卡在手机上可见且可关闭，作者：https://github.com/stablyai/orca/pull/31665 中的 @nwparker
* 按照 @nwparker 在 https://github.com/stablyai/orca/pull/31691 中更改电话语音设置的顺序保留电话语音设置
* 阻止手机上的复习笔记消失，或者在 https://github.com/stablyai/orca/pull/31699 中@nwparker 删除它们后又回来
* 仅当计算机接受 https://github.com/stablyai/orca/pull/31703 中 @nwparker 的 Clear 后，才清除手机上的终端输出
* 当之前的发送失败时，在手机上保持新的浏览器输入 @nwparker in https://github.com/stablyai/orca/pull/31710
* 在https://github.com/stablyai/orca/pull/34825中通过@OrcaWin释放手机上关闭的浏览器窗格的指针队列
* https://github.com/stablyai/orca/pull/34837 中@OrcaWin 跳过手机不再需要的排名文件搜索结果
* @OrcaWin 在 https://github.com/stablyai/orca/pull/34841 中进行空搜索后，限制手机的文件搜索缓存
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34843 中为无法在手机上加载的服务器保留缓存的工作区行
* 在 https://github.com/stablyai/orca/pull/34846 中@OrcaWin 仍在加载手机应用程序时保留您选择的文本大小
* 拒绝从手机上的隐藏页面打开 PDF，@OrcaWin 在 https://github.com/stablyai/orca/pull/34869 中
* 通过 https://github.com/stablyai/orca/pull/34872 中的@OrcaWin 在手机上删除过时的文件预览读取和权限重试
* 跳过准备手机已在 https://github.com/stablyai/orca/pull/34873 中被 @OrcaWin 放弃的差异回复
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/34949 中发布旧手机连接的技能扫描
* 当您在 https://github.com/stablyai/orca/pull/34951 中通过 @OrcaWin 返回手机上的会话时刷新自定义快捷方式
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35056 手机上进行丰富的 Markdown 编辑来保留代码、引号和代码块
* 在https://github.com/stablyai/orca/pull/35259中通过@OrcaWin在手机上保存丰富的Markdown时保留表格和列表换行符、项目段落和列表代码块
* 立即通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35311 中重试过期的 Web client 连接
* @OrcaWin 在 https://github.com/stablyai/orca/pull/35535 中发布了手机上关闭终端的详细信息
* https://github.com/stablyai/orca/pull/35537 中@OrcaWin 在手机上选择“放弃”后停止文件保存后续操作
* https://github.com/stablyai/orca/pull/35540 中@OrcaWin 跳过手机不再需要的型号设置
* 在 https://github.com/stablyai/orca/pull/35586 中释放 @OrcaWin 为手机上关闭的屏幕保存的存储空间
* 在 https://github.com/stablyai/orca/pull/35589 中通过@OrcaWin 删除手机上已关闭选项卡的作曲家状态
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35609 中避免手机上缓慢的图像标记匹配
* 修复 https://github.com/stablyai/orca/pull/35842 中@AmethystLiang 终端连接较晚时手机终端覆盖的问题
* 在 https://github.com/stablyai/orca/pull/36061 中 @nwparker 在手机上加载源代码管理状态时跳过行计数
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36112 中在几秒钟内检测手机上失效的直接连接
* 在 https://github.com/stablyai/orca/pull/36115 中@AmoabaKelvin 在手机上准确显示任务页面和查看状态
* 在 https://github.com/stablyai/orca/pull/36116 中通过 @AmoabaKelvin 在手机上保持快捷滑动以发送按键
* 从 https://github.com/stablyai/orca/pull/36121 中的 @AmoabaKelvin 恢复手机屏幕错误
* 将@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36122 中键入的终端输入返回到手机上的提示符
* 更新手机的 URL 解码器，以获取 @nwparker 在 https://github.com/stablyai/orca/pull/36124 中发出的拒绝服务警告
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36128 中解释扫描的下载二维码
* 使用 https://github.com/stablyai/orca/pull/36130 中 @AmoabaKelvin 的防火墙帮助中的配对端口
* 停止在电话上显示不可用的终端，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/36135
* 批量 iPhone 通知解雇由 @nwparker 在 https://github.com/stablyai/orca/pull/36145 中撰写

### 测试、构建和维护

*WSL 主机以及将 WSL 项目移至其上的基础工作（内部，在此版本中关闭），免费托管运行器上的 CI，删除了更多低价值测试，以及继续本机聊天和 Jira 代码组织。*

<详情>
<summary>所有测试、构建和维护更改</summary>

*修复（wsl-host）：新主机的第一个代理启动等待https://github.com/stablyai/orca/pull/29576中@nwparker的桌面帐户
* feat(wsl)：在 https://github.com/stablyai/orca/pull/33097 中的 @nwparker 在 Windows 驱动器 WSL 项目的设置 (D1c-3) 中提供适用于 Windows 的 Git
* feat(wsl)：@nwparker 在 https://github.com/stablyai/orca/pull/33108 中转换 UNC Windows 驱动项目 (D1c-4a) 的范围和路径图
* feat(wsl)：默认 WSL 下的新 Windows 驱动项目默认为 https://github.com/stablyai/orca/pull/33122 中 @nwparker 的 Git for Windows (D1c-5)
* feat(wsl)：通过 @nwparker 在 https://github.com/stablyai/orca/pull/33128 中重新键入 UNC Windows 驱动器项目的配置文件，将其转换为驱动器路径 (D1c-4b)
* feat(wsl)：通过 @nwparker 在 https://github.com/stablyai/orca/pull/33135 中将 UNC Windows 驱动器项目转换为重启后的驱动器路径 (D1c-4c)
* feat(wsl): 在项目设置中提供驱动器路径转换，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/33143 中转换窗口的存储 (D1c-4d)
* 修复（wsl）：每个本地 Git 调用都遵循其项目的运行时，除非它说明为什么不（D1c-6）由 @nwparker 在 https://github.com/stablyai/orca/pull/33531
* feat(wsl-host)：配对的手机到达桌面的 WSL 主机，并且永远不会启动其发行版 (E6) by @nwparker in https://github.com/stablyai/orca/pull/33911
* ci：在免费托管的 ARM 上将 PR 单元分片作为 12 个分片由 @OrcaWin 在 https://github.com/stablyai/orca/pull/34906 中运行
* 杂务（wsl）：将睡眠文件夹和桥出口线保留在https://github.com/stablyai/orca/pull/35378中@nwparker的本地跟踪中
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/35394中删除17个低价值案例和7个套件
* 修复（wsl-mover）：假设一个移动等待项目返回，而不是 @nwparker 在 https://github.com/stablyai/orca/pull/35406 中的另一个移动
* i18n(wsl-mover)：由 @nwparker 在 https://github.com/stablyai/orca/pull/35414 中将项目移动器翻译成每种 UI 语言
* 重构（共享）：在 https://github.com/stablyai/orca/pull/35425 中并置 @nwparker 的本机聊天转行归因
* 修复（wsl-host）：Start 连接一次已停止的发行版，并在失败时通过 https://github.com/stablyai/orca/pull/35438 中的 @brennanb2025 命名它
* 修复（wsl-mover）：当 @nwparker 在 https://github.com/stablyai/orca/pull/35449 中拒绝撤消使主机终端处于睡眠状态时
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/35456 中更新 AGENTS.md
* test(worktree)：检查并发创建名称，而不是https://github.com/stablyai/orca/pull/35457中的@nwparker首先到达Git的创建名称
* 重构（运行时）：将持久提示传递探针移出 https://github.com/stablyai/orca/pull/35460 中的 @AmoabaKelvin 的 orca-runtime-get-status.ts
* 杂务：格式化 AGENTS.md，以便 https://github.com/stablyai/orca/pull/35464 中的 @nwparker 通过主格式检查
* i18n(wsl-mover)：将撤消运行拒绝翻译成https://github.com/stablyai/orca/pull/35473中@nwparker的每种UI语言
* 杂务（移动）：在 https://github.com/stablyai/orca/pull/35505 中撞到 0.0.60 和 Android 版本Code 24 by @AmoabaKelvin
* 修复（脚本）：显示检查：更改进度并通过 @nwparker 在 https://github.com/stablyai/orca/pull/35507 中绑定每个步骤
* 测试（运行时）：在 https://github.com/stablyai/orca/pull/35516 中的 @nwparker 同步读取时钟之前修复陈旧的编排上下文时间戳
* 测试（e2e）：仅当 https://github.com/stablyai/orca/pull/35522 中的 @nwparker 按键到达 tty 时才释放早期键入 rc
* 测试（wsl）：测量通道在https://github.com/stablyai/orca/pull/35526中@nwparker在一个保持的套接字上重新启动
* feat(wsl)：通过 @nwparker 在 https://github.com/stablyai/orca/pull/35528 中获取并缓存远程 WSL 主机策略（kill switch、远程 half 1/2）
* feat(wsl)：让缓存的远程策略关闭 WSL 主机门（终止开关，远程一半 2/2），@nwparker 在 https://github.com/stablyai/orca/pull/35529 中
* test(wsl)：通过https://github.com/stablyai/orca/pull/35530中的@nwparker记录重启阶段基线以进行分阶段准备
*修复（wsl）：通过https://github.com/stablyai/orca/pull/35543中的@nwparker将解析的WSL主机门状态发布到子进程（终止开关后续）
* 重构（wsl）：https://github.com/stablyai/orca/pull/35567 中 @nwparker 的停止发行版拒绝（E9）的一个匹配器
* feat(orcad)：每个功能准备就绪闩锁并要求：https://github.com/stablyai/orca/pull/35571 中 @nwparker 的 RPC 方法
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/35574中删除20个低价值案例和10个套件
* 修复(ci)：将移动本地化排除在 https://github.com/stablyai/orca/pull/35576 中 @nwparker 的仅桌面测试安装之外
* 测试（e2e）：后台工作永远不会启动由 @nwparker 在 https://github.com/stablyai/orca/pull/35580 中停止的 WSL 主机发行版（E9 防护）
* 测试（e2e）：在真正的 WSL 通道上，后台工作永远不会启动 @nwparker 在 https://github.com/stablyai/orca/pull/35590 中停止的发行版（E9 防护）
* perf(wsl)：通过https://github.com/stablyai/orca/pull/35591中的@nwparker在一个命令中读取连接的预围栏激活状态
* 测试（运行时）：为 tab-delta 第一帧等待提供真实的套接字预算，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/35600 中将空的 client 命名
* test(wsl): 等待聊天提供商的报告解决，而不是通过 @nwparker 在 https://github.com/stablyai/orca/pull/35603 中读取一次
* 测试（ssh）：让Linux在https://github.com/stablyai/orca/pull/35612中由@nwparker断言它们关闭之前完成上传fd的释放
* 重构：https://github.com/stablyai/orca/pull/35617 中 @nwparker 的群组原生聊天切换通知
* 重构（i18n）：在https://github.com/stablyai/orca/pull/35621中由@OrcaWin在主渲染器和渲染器之间共享一个i18next设置
* 重构：https://github.com/stablyai/orca/pull/35630 中 @nwparker 报告的群组原生聊天技能处理
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35634 中删除 15 个低价值案例和 5 个套件
* 重构（i18n）：调用站点处的本机 i18next 复数，https://github.com/stablyai/orca/pull/35637 中 @OrcaWin 的复数感知提取
* 插件：@nwparker 在 https://github.com/stablyai/orca/pull/35638 中再次在 Linux 上运行二进制自定义编辑器 e2e
* ci：在 https://github.com/stablyai/orca/pull/35652 中 @OrcaWin 在 PR 关键路径之外的免费托管 ARM 上运行预检
* 重构：https://github.com/stablyai/orca/pull/35654 中 @nwparker 分组本机聊天 href 路由
* test(terminal): 通过 xterm by @nwparker in https://github.com/stablyai/orca/pull/35661 运行渲染器的 OSC 7 协议案例
* 测试（wsl）：在https://github.com/stablyai/orca/pull/35662中由@nwparker重新启动发行版后测量旧桥的ConPTY终端
* 修复（wsl）：从失败的连接快照中回退，并仅从 @nwparker 在 https://github.com/stablyai/orca/pull/35663 中读取的自己的记录中进行提示
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/35667中删除12个低价值案例和四个套件
* 插件：删除 https://github.com/stablyai/orca/pull/35676 中 @nwparker 从插件推出中留下的无效代码
* 测试：封面编辑器显示覆盖由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/35683 中重新启动
* 插件：在 https://github.com/stablyai/orca/pull/35686 中分享 @nwparker 的活跃度检查和跨贡献类型的列表挂钩
* perf(wsl)：通过 @nwparker 在 https://github.com/stablyai/orca/pull/35690 中折叠连接的剩余只读来宾探针
* 修复（wsl）：WSL 主机桥拨号、准备好的 clients 和支架重新确保永远不会启动 @nwparker 在 https://github.com/stablyai/orca/pull/35707 中停止的发行版（E9）
* perf(wsl)：在https://github.com/stablyai/orca/pull/35708中@nwparker在相同版本的连接上采取一个激活栅栏
* 壮举(orcad)：登机口代理在准备状态下启动，并拒绝在 https://github.com/stablyai/orca/pull/35710 中 @nwparker 等待时离开的呼叫者
* 测试（dev）：停止运行电子vite-dev网络测试@nwparker在https://github.com/stablyai/orca/pull/35713中孤立的夹具进程
* 重构：由 @nwparker 在 https://github.com/stablyai/orca/pull/35714 中组织本机聊天合并和配对窗口规范
* perf(test)：重用 Vitest 在 https://github.com/stablyai/orca/pull/35715 中由 @nwparker 进行的本地运行转换
* perf(orcad)：https://github.com/stablyai/orca/pull/35718 中的 @nwparker 将 Codex PATH 扫描保持在 WSL 准备状态之外
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35722 中删除五个低值字符串和谓词套件
*修复（wsl-host）：满足其停止发行版的终端显示开始，并由https://github.com/stablyai/orca/pull/35732中的@nwparker返回
* 修复（wsl）：以代码 1 退出的持有者注意到其发行版可能已由 https://github.com/stablyai/orca/pull/35738 中的 @nwparker 停止（E9）
* 测试（运行时）：为 https://github.com/stablyai/orca/pull/35744 中的 @nwparker 为每个启动重试生成等待重试退避空间
* 测试（worktrees）：覆盖https://github.com/stablyai/orca/pull/35745中@brennanb2025的两种表情符号分支命名模式
* 修复（wsl）：一旦 @nwparker 在 https://github.com/stablyai/orca/pull/35759 中解决了围栏问题，就会忘记中断唤醒的令牌
*测试（wsl）：在https://github.com/stablyai/orca/pull/35761中@nwparker的车道收据中报告热启动门和冷启动门
* feat(wsl)：WSL 主机块可以通过 https://github.com/stablyai/orca/pull/35762 中的 @nwparker 请求已移回的项目（带回 1/4）
* test(wsl): 将子端门继承案例保留在https://github.com/stablyai/orca/pull/35765中@nwparker的门旁边
* 测试（wsl）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/35766 中证明真实 WSL 通道中发行版内的 OpenCode 聊天
* test(orcad)：通过 https://github.com/stablyai/orca/pull/35772 中的 @nwparker 保护节点服务器通道中空闲 WSL 主机 orcad 树的常驻内存
* 测试（native-chat）：将静态克劳德目录的技能发现保留在 https://github.com/stablyai/orca/pull/35781 中的 @nwparker 的真实家庭之外
* 修复（wsl）：缓存下载的 WSL 主机策略，而不是由 @nwparker 在 https://github.com/stablyai/orca/pull/35782 中重新序列化
* 测试（代理状态）：捕获重写检查并查看 @nwparker 在 https://github.com/stablyai/orca/pull/35797 中的 schema walker 中的每个容器内部
* 修复（Windows）：启动仅使用 NUL 句柄的 WSL 持有者，由 https://github.com/stablyai/orca/pull/35799 中的 @nwparker 继承
* 修复（wsl-host）：说明 https://github.com/stablyai/orca/pull/35800 中的 @nwparker 未在哪个 WSL 发行版中安装代理
* 文档：https://github.com/stablyai/orca/pull/35803中@AmethystLiang更新微信社区二维码
* 重构：https://github.com/stablyai/orca/pull/35807 中@nwparker 分组本机聊天图像引用所有者
* ci：在 https://github.com/stablyai/orca/pull/35809 中 @OrcaWin 的免费托管运行器上运行布局预言机门
* 测试：通过 @nwparker 在 https://github.com/stablyai/orca/pull/35817 中修复仅限 macOS 的测试漂移（真实家庭写入，#34058 记录保留）
* 修复（wsl-host）：停止主机后续操作：没有卡住的启动卡、卡规则重试和点、https://github.com/stablyai/orca/pull/35822 中@nwparker 的 SSH pin
* 修复（wsl）：在停止后一秒内显示停止的 WSL 主机，从不通过 @nwparker 在 https://github.com/stablyai/orca/pull/35823 中执行它
* 测试（wsl）：在真正的 WSL 通道上停止中间回复的发行版，然后由 @nwparker 在 https://github.com/stablyai/orca/pull/35826 中启动并继续
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/35847中删除五个低价值套件和冗余案例
* 测试（运行时）：保持继承的 GIT_* env 不将工作树删除测试瞄准 https://github.com/stablyai/orca/pull/35853 中 @nwparker 的外部存储库
* 测试：每个测试文件清除一次继承的 GIT_* env，这样真实的 Git 套件就无法通过 https://github.com/stablyai/orca/pull/35859 中的 @nwparker 写入外部存储库
* 修复（wsl-host）：聊天在其 WSL 发行版停止时保持发送状态，直到 https://github.com/stablyai/orca/pull/35864 中的 @nwparker 开始
* 文档（故障排除）：通过 https://github.com/stablyai/orca/pull/35875 中的 @nwparker 解释 SSH 和 WSL 的首次连接节点下载
* 测试：删除https://github.com/stablyai/orca/pull/35882中@OrcaWin的低值错误复制和原始模式测试
* 测试：在 https://github.com/stablyai/orca/pull/35890 中删除 @OrcaWin 的副本库存和冗余格式化程序重放
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/35906 中删除低值包装器和标量存储套件
* feat(wsl)：停止发行版的主窗格显示 https://github.com/stablyai/orca/pull/35927 中 @nwparker 的开始卡
* 测试（e2e）：在https://github.com/stablyai/orca/pull/35936中由@nwparker强制在实时重新附加模式下检查陈旧标题窗口
* 修复（wsl）：在 https://github.com/stablyai/orca/pull/35938 中对 @nwparker 停止的 WSL 发行版进行守护进程关闭恢复
* 测试（wsl）：将停止的发行版固定在 https://github.com/stablyai/orca/pull/35969 中的 @nwparker 的 WSL UNC 文件夹中的非 WSL shell
* 测试：删除 https://github.com/stablyai/orca/pull/36011 中 @OrcaWin 的标量设置套件和模拟状态收据
* 重构（jira）：https://github.com/stablyai/orca/pull/36013 中 @nwparker 分组链接读取和源身份所有者
*测试：删除https://github.com/stablyai/orca/pull/36018中@OrcaWin的能力清单和投影收据
* 从 https://github.com/stablyai/orca/pull/36029 中的@AmethystLiang 的移动文档中删除过时的 TestFlight 预览链接
* 测试：删除https://github.com/stablyai/orca/pull/36032中@OrcaWin的浏览器功能清单和模拟收据
* 重构（jira）：https://github.com/stablyai/orca/pull/36036 中 @nwparker 的群组搜索和回退通知所有者
* 测试：通过 https://github.com/stablyai/orca/pull/36040 中的 @OrcaWin 删除模式清单和冗余功能检查
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/36051 中并置 Jira 缓存和项目选择所有者
* 测试：修复 Claude launcher-prefix 标志支持 @nwparker 在 https://github.com/stablyai/orca/pull/36052 中的调用
* 测试（侧边栏）：放弃 @nwparker 在 https://github.com/stablyai/orca/pull/36054 中进行的片状挂钟紧急发布计时测试
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36058 中更新命令前缀的结构化会话装置
* 修复：在 https://github.com/stablyai/orca/pull/36065 中恢复 @nwparker 的记录 lint 和会话夹具验证
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36066 中删除低价值元数据和注册库存
* 测试：删除https://github.com/stablyai/orca/pull/36075中@OrcaWin的低值模式、紧凑和语言测试
* 修复：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36080 中修复侧边栏 lint 和采用测试命令装置
* 测试：从https://github.com/stablyai/orca/pull/36081中@nwparker的采用测试的启动解析器返回结构化命令
* 重构（jira）：https://github.com/stablyai/orca/pull/36082 中@nwparker 的组状态和快速过滤所有者
* 重构（浏览器）：通过 https://github.com/stablyai/orca/pull/36087 中的@AmoabaKelvin 将抓钩类型移至其所有者
*修复（ci）：解决https://github.com/stablyai/orca/pull/36096中@AmethystLiang现有的最大行数和命令夹具违规问题
* 修复（ci）：在 https://github.com/stablyai/orca/pull/36101 中删除 @nwparker 重复的抓取注释类型和拆分聊天订阅性能测试
* ci：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36106 中将 Git 兼容性作为免费托管矩阵运行
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36114 中删除低价值功能、复制和源库存
*修复（wsl）：卸载结束了其命令行证明的持有者，即使没有https://github.com/stablyai/orca/pull/36126中的@nwparker的开始时间
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/36129 中删除低价值工作流程、库存和复制套件
* 通过 https://github.com/stablyai/orca/pull/36131 中的 @brennanb2025 运行强制在节点上进行垃圾收集的单元测试
* 测试（native-chat）：在 https://github.com/stablyai/orca/pull/36134 中删除@OrcaWin 的片状静态准入边界测试
* 重构（jira）：https://github.com/stablyai/orca/pull/36138 中的 @nwparker 组状态元数据所有者
* 测试：在https://github.com/stablyai/orca/pull/36140中删除@OrcaWin的低价值主题和复制套件
* 修复（编辑器）：将 useRichMarkdownSearch.ts 保留在 https://github.com/stablyai/orca/pull/36147 中 @Jinwoo-H 的 300 行上限内
*修复（wsl）：拒绝驱动器/UNC转换，该转换将分割https://github.com/stablyai/orca/pull/36155中@nwparker的嵌套重复项目
* 重构（jira）：https://github.com/stablyai/orca/pull/36157 中 @nwparker 分组最喜欢的选择器所有者
* 测试：在 https://github.com/stablyai/orca/pull/36159 中删除@OrcaWin 的低价值副本和 CI 夹具检查
* 测试：删除https://github.com/stablyai/orca/pull/36175中@OrcaWin跨目录和源代码防护的49个低价值测试
* 测试（中继）：在 https://github.com/stablyai/orca/pull/36181 中通过 @nwparker 断言漏极布局争用，但没有时序比

</详情>

## 新贡献者
* @promptprobe 在 https://github.com/stablyai/orca/pull/14562 中做出了第一个贡献
* @teamauresta 在 https://github.com/stablyai/orca/pull/31896 中做出了第一个贡献
* @Hotragn 在 https://github.com/stablyai/orca/pull/35371 中做出了第一个贡献
* @YiGeon 在 https://github.com/stablyai/orca/pull/35688 中做出了第一个贡献
* @Venius24 在 https://github.com/stablyai/orca/pull/35791 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.244...v1.4.245

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.245` · 📅 发布：2026-10-30 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.245)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
