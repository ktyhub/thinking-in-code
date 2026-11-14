---
title: "orca v1.4.259"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.259"
version: "v1.4.259"
published: "2026-11-14"
type: "patch"
lang: "zh"
---

# orca v1.4.259

**先前版本：[1.4.258](https://github.com/stablyai/orca/releases/tag/v1.4.258)** — 工作空间更流畅，恢复了手机滚动和副驾驶聊天。

## 更流畅的大型工作区、自动清理和集中的子代理视图 ✨

Orca 1.4.259 减少了显示拥挤的侧边栏和长时间聊天工具运行的工作，在创建新工作区时保持 Git 读取移动，并在不阻塞磁盘读取窗口的情况下恢复终端历史记录。新的清理控件可帮助您管理遗留的工作区。

- 🧹 **根据您的条件清除已完成的工作：** 设置 → 工作区清理可让您查看匹配的工作区、启用自动清理并检查其活动。为各个项目制定自己的规则。
- 💬 **一次关注一个子代理：** 在专用视图中打开其任务、实时步骤和最终答案，然后返回到您上次中断的主要对话。
- 🤖 **在聊天中使用 Kimi 代码：** 与 Kimi 的模型选择器、权限控制、问题和 `/compact` 支持开始对话。
- 🎙️ **观看听写成形：** Nemotron 3.5 现在可以传输实时文本； Parakeet Unified EN 添加了纯英语流媒体选项。可选的人工智能清理功能可以在插入之前处理标点符号和语音更正。
- 📱 **找到需要您的手机标签：** 标签栏显示打开的标签、计数和添加按钮。点击计数可查看所有选项卡的分组视图，包括等待您回答的选项卡。

## 亮点

- **在客服人员使用工具时继续工作：** 客服人员创建的终端分割使您的键盘保持在原来的位置。代理打开的浏览器弹出窗口和新选项卡链接保留在后台。服务器代理的新浏览器选项卡可以在您配对的桌面上打开；如果没有配对的桌面，它会保留在服务器上。
- **无需停止工作即可组织：** 从侧边栏隐藏项目，同时其代理、终端和自动化保持运行。在**隐藏项目**下再次找到它。在共享的配对服务器上，隐藏其项目适用于连接到那里的每个人。
- **检查长运行：** 扩展工具运行绘制可见行，同时保留查找、复制和键盘导航。子代理名册显示每个代理的模型、当前工作和结果。

## 兼容性和升级说明

- **清理是可选择的：**规则开始。在启用之前查看删除预览；匹配的工作空间可能会在确认后几秒钟内被删除。存档控件不可用。
- **Kimi 聊天** 需要 Kimi 代码 **2.5.0+** 并登录。
- **语音：** 在语音设置中下载 Parakeet Unified EN 来使用它。 AI 清理功能默认处于关闭状态，并会在向您选择的客服人员发送口述文本、词汇和说明之前进行询问。失败或超时插入原词。在同时听写的情况下，只有一个直播。
- **电话：** 这些更改包括桌面服务的电话页面；此桌面更新不安装本机手机应用程序。如果提示**更新手机**，请更新手机应用程序并重新连接。
- **源代码控制：** 合并工作区清理通知及其删除工作区操作已撤回；先前的审阅刷新和睡眠工作区行为已恢复。

---

## 发生了什么变化

### 📱 电话和手机

*电话选项卡、触摸输入、远程控制和移动渲染。*

* 修复（移动）：在桌面 Mac 浏览器中通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41330 中使用 Cmd+Enter 发送聊天
* feat(mobile)：仅显示打开的选项卡，包含选项卡计数和每个选项卡的工作表，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41345 中提供
* 修复（移动）：https://github.com/stablyai/orca/pull/41404 中的@AmoabaKelvin 关闭会话选项卡失败时显示错误
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/41453 中澄清移动配对访问和丢失设备撤销
* 修复（移动）：排除覆盖权限并清除 https://github.com/stablyai/orca/pull/41455 中 @nwparker 的已删除主机诊断
* 允许主持人在 https://github.com/stablyai/orca/pull/41456 中禁用 @nwparker 的移动推送传送
* 修复（浏览器）：https://github.com/stablyai/orca/pull/41501 中的@AmoabaKelvin 从手机收回的选项卡立即返回到桌面大小
* 修复（移动）：在 https://github.com/stablyai/orca/pull/41514 中由 @AmoabaKelvin 上传之前，将聊天照片缩小到 2000 像素
* 修复（移动）：从 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41522 中在主页上打开的代理一键返回到代理
* 修复（移动）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41626 中选择聊天时，将 Android HEIC 照片转换为 JPEG
* 壮举（移动）：浮动答题卡，在 https://github.com/stablyai/orca/pull/41611 中@AmethystLiang 在其上方排队消息
* 修复（移动版）：通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41633 中按队列的当前顺序放置失败的排队行
* perf(renderer)：在https://github.com/stablyai/orca/pull/41557中通过@brennanb2025删除移动驱动程序覆盖的背景模糊
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/11140 中改进桌面、远程和移动设备的错误报告模板
* 在https://github.com/stablyai/orca/pull/36078中@AmethystLiang在移动聊天中打开链接的工作树目录
* 在https://github.com/stablyai/orca/pull/35235中打开@AmethystLiang从移动AI操作启动的代理
* 修复（移动版）：忘记 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41802 中离开队列的消息的排队行高度
* perf(mobile): 仅当工作表由 https://github.com/stablyai/orca/pull/41819 中的 @AmethystLiang 显示时构建所有选项卡工作表行
* 修复（中继）：手机数据连接一直失败时重新询问导演；通过 @nwparker 在 https://github.com/stablyai/orca/pull/41991 中缩小协调员恢复差距
* 修复（移动中继）：持久 4404 上的有限解析、扩大超时解析、速率限制延迟日志（@nwparker 在 https://github.com/stablyai/orca/pull/41994 中）

### 💬 聊天和会话历史记录

*聊天代理、子代理视图、对话呈现和保存的会话发现。*

* 修复（native-chat）：发送超过 5 MB 的克劳德图像，而不是拒绝 https://github.com/stablyai/orca/pull/41333 中 @AmoabaKelvin 的消息
* 修复(native-chat): https://github.com/stablyai/orca/pull/41023中@Luoqiu1重新打开选择器时刷新技能
* 修复（native-chat）：将分支悬停在 https://github.com/stablyai/orca/pull/41340 中 @brennanb2025 的标签旁边
* 跳过 https://github.com/stablyai/orca/pull/41355 中 @brennanb2025 没有别名的聊天的重命名迁移所有者查找
* 修复（native-chat）：将超过 5 MB 的图像发送到 Pi 1.5.1 以及 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41391 中的更新版本
* 在 https://github.com/stablyai/orca/pull/41390 中停止 @brennanb2025 重复审批监视的聊天主机查找
* 修复（native-chat）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41400 中将最多 20 MB 内联图像发送到 ACP 代理，而不是作为文件路径
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/40820 中 Cmd/Ctrl 预览由 @brennanb2025 引导时保持发送的回合大小
* 修复（native-chat）：将 SVG、BMP 和 ICO 作为文件附加，而不是拒绝 https://github.com/stablyai/orca/pull/41394 中 @AmoabaKelvin 的消息
* 修复（native-chat）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41507 中的响应没有使用时，在压缩后保留 Claude 的上下文环
* 壮举（插件）：托管 API 1.9 — 代理会话历史记录、恢复过去的会话、@nwparker 在 https://github.com/stablyai/orca/pull/41542 中的任务标题
* perf(chat)：由 @brennanb2025 在 https://github.com/stablyai/orca/pull/41575 中每页解码一次 OpenCode 转录消息
*壮举（native-chat）：答案卡作为单独的选项图块，作者：https://github.com/stablyai/orca/pull/41602 中的 @AmethystLiang
* 反重力设置：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41531 中压平为 agy 终端和聊天卡
* 修复（native-chat）：在https://github.com/stablyai/orca/pull/41635中输入所选答案确认，而不是通过@AmethystLiang取消选择
* 修复（native-chat）：通过https://github.com/stablyai/orca/pull/41440中的@AmethystLiang保持最终回复间距一致
*修复（native-chat）：在https://github.com/stablyai/orca/pull/41665中通过@AmoabaKelvin在您切换到的帐户上继续进行使用限制的聊天
* 在 https://github.com/stablyai/orca/pull/41491 中的 @brennanb2025 进行本机聊天空闲清理期间保持 OMP 后台工作处于活动状态
* feat(native-chat)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41661 的 ACP 服务器上运行 Chat 中的 Kimi 代码
* 在 https://github.com/stablyai/orca/pull/41504 中 @brennanb2025 托管的反重力聊天中遵守用户规则
* 反重力聊天设置：从聊天 UI 设置安装，通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41506 中的聊天中登录
* 修复（本地聊天）：在没有 GitHub 存储库的聊天中预览 GitHub PR 链接，由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41359 中提供
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41666 中改进聊天 UI 提示
* 将终端的 Orca ID 项命名为 Copy Orca Session ID，匹配 @brennanb2025 在 https://github.com/stablyai/orca/pull/41725 中的聊天
* perf(native-chat)：仅绘制由 @brennanb2025 在 https://github.com/stablyai/orca/pull/41552 中运行的打开工具的可见行
*修复（opencode）：将@提到的文件附加到https://github.com/stablyai/orca/pull/41932中@AmoabaKelvin的OpenCode聊天提示中
* 修复（native-chat）：旧版浏览器运行的“显示”按钮会打开自己的页面，或者不会打开任何页面，永远不会是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41939 中的最新页面
* 修复(native-chat): @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41956 中无法打开页面时，浏览器显示按钮显示原因
* 修复（native-chat）：在笔记本电脑休眠时保持 Claude 聊天的开始，而不是拒绝 https://github.com/stablyai/orca/pull/41965 中 @AmoabaKelvin 的消息
* 修复（native-chat）：/compact 在 Claude 聊天的后台子代理由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41945 中运行时运行
* feat(native-chat)：在 https://github.com/stablyai/orca/pull/41766 中 @AmoabaKelvin 的聊天中显示每个子代理的模型、当前工具和结果
* feat(native-chat)：在自己的视图中打开一个子代理，并显示其提示、步骤和@AmoabaKelvin在https://github.com/stablyai/orca/pull/42066的回复
* perf(native-chat): 避免 https://github.com/stablyai/orca/pull/42162 中 @brennanb2025 的每次提交日志 fsync
* 修复（native-chat）：当https://github.com/stablyai/orca/pull/42254中的@AmoabaKelvin关闭选项卡时，忘记聊天选项卡的打开子代理

### 🤝 工人和协调

*工作人员提示、协调、消息传递和远程运行管理。*

* perf(orchestration): 停止协调器检查和工作者列表重新扫描 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/41293 中的运行历史记录
* perf(orchestration)：关闭空闲远程中继并仅拉取https://github.com/stablyai/orca/pull/41311中@Jinwoo-H的待处理对等回复
*修复（编排）：在https://github.com/stablyai/orca/pull/41377中@Jinwoo-H标记后续工人卡、门远程拥有的启动卡
*壮举（编排）：让协调员批准https://github.com/stablyai/orca/pull/41306中@Jinwoo-H的工人权限提示（选择加入）
*修复（编排）：隐藏帮助中的批准； @Jinwoo-H 在 https://github.com/stablyai/orca/pull/41403 的批准后续行动
* perf(orchestration)：从原始版本读取已发布的工作输出，而不是 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/41374 中保存的副本
*修复（编排）：通过https://github.com/stablyai/orca/pull/29925中的@MsCNotes404将仅终端窗格指向其自己的直接邮箱
* perf(orchestration)：一旦这里没有任何东西需要它，就结束配对服务器的邮件拉循环由https://github.com/stablyai/orca/pull/41426中的@Jinwoo-H
* perf(orchestration)：在 https://github.com/stablyai/orca/pull/41779 中 @Jinwoo-H 的 Run 中一次通过对空检查提示候选进行排名
* perf(orchestration)：配对服务器邮件拉取仅检查 https://github.com/stablyai/orca/pull/41834 中 @AmethystLiang 拉取的每个服务器自己的服务器
*修复（编排）：重用启动需要代理在中途而不是等待https://github.com/stablyai/orca/pull/42114中@Jinwoo-H的空闲
* 修复（编排）：在重用启动时命名重用代理，该代理在 https://github.com/stablyai/orca/pull/42111 中从未通过 @Jinwoo-H 绑定
* perf(orchestration)：在一条语句中询问拉环问题，而无需由https://github.com/stablyai/orca/pull/42122中的@AmethystLiang临时设置
*修复（编排）：在绑定之前失败的重用启动读取为https://github.com/stablyai/orca/pull/42112中的@Jinwoo-H从未启动过
*修复（编排）：在https://github.com/stablyai/orca/pull/41979中@yasyf回复时标记已读问题

### 🤖 代理、模特和账户

*代理启动、模型选择、登录、状态和使用情况报告。*

* 修复（活动）：在 https://github.com/stablyai/orca/pull/41127 中@Eotel 的代理列表中按自己的标题命名恢复的会话
* 在 https://github.com/stablyai/orca/pull/41019 中的 @brennanb2025 在每个模型选择器中以相同的方式折叠旧模型
* 修复（agent-hooks）：通过 https://github.com/stablyai/orca/pull/41058 中的 @innocarpe 将 Claude 会话模型保持在钩子状态
*修复（cli）：代理挂钩状态报告正在运行的应用程序及其SQLite文件由https://github.com/stablyai/orca/pull/41445中的@AmoabaKelvin
* 修复（侧边栏）：将会话名称放在 https://github.com/stablyai/orca/pull/41458 中 @AmoabaKelvin 的监控代理行的第一位
* 在 https://github.com/stablyai/orca/pull/41459 中通过 @brennanb2025 在没有整个文档字符串的情况下流式传输大量使用的源缓存
* 在 https://github.com/stablyai/orca/pull/41478 中通过 @brennanb2025 流式传输受保护的使用缓存，无需整个文件缓冲区
* 停止在 @brennanb2025 在 https://github.com/stablyai/orca/pull/41467 中运行的模型旁边列出 Claude 简称行
* 将模型选择器与 @brennanb2025 在 https://github.com/stablyai/orca/pull/41512 中选择的模型关联起来（后续#40906）
*修复（claude-accounts）：拒绝切换到https://github.com/stablyai/orca/pull/41680中的@AmoabaKelvin删除了Claude登录的帐户
* 从https://github.com/stablyai/orca/pull/9250中@AmethystLiang的PR评论提示中删除hostResolvableThreads数组
* 修复（速率限制）：在 https://github.com/stablyai/orca/pull/41758 中 @AmoabaKelvin 完成另一次刷新时，运行使用刷新排队
* 修复（ui）：https://github.com/stablyai/orca/pull/41853 中@AmethystLiang 代理启动菜单中的 36 像素行和 13 像素文本
* feat(usage): 在 https://github.com/stablyai/orca/pull/41921 中添加 @nwparker 的 Claude 使用轮询开关
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/42160 发现期间停止重读未更改的法典历史副本
*修复（cli）：在https://github.com/stablyai/orca/pull/42185中由@AmoabaKelvin暂时断开连接后，停止告诉代理运行orca open
* perf：当CLI输入在https://github.com/stablyai/orca/pull/41976中被@brennanb2025更改时刷新代理模型
* perf(codex)：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/42190 中对每个文档解码一次配置节标题

### 🧹 工作区清理和生命周期

*选择加入清理规则、活动、远程删除和工作空间安全。*

* feat(workspace-cleanup)：将清理规则存储在https://github.com/stablyai/orca/pull/41398中@AmoabaKelvin的每个项目覆盖的设置中
* 修复（工作空间清理）：显示合并和未更改的工作空间，而不是将已落地的提交标记为 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41408 中未推送
* 壮举（工作空间清理）：通过 https://github.com/stablyai/orca/pull/41454 中的 @AmoabaKelvin 扫描并删除配对主机和 SSH 主机上的工作空间
* 修复（工作空间清理）：在删除工作空间被忽略的本地文件（如 https://github.com/stablyai/orca/pull/41446 中 @AmoabaKelvin 的 .env）之前发出警告
* https://github.com/stablyai/orca/pull/41457 中 @brennanb2025 的范围工作区删除侧边栏选择快捷方式
* feat(workspace-cleanup)：通过@AmoabaKelvin在https://github.com/stablyai/orca/pull/41738中对完成的自动化运行工作区进行分类
* feat(workspace-cleanup)：对https://github.com/stablyai/orca/pull/41763中@AmoabaKelvin发布的编排工作人员工作区进行分类
* feat(workspace-cleanup)：https://github.com/stablyai/orca/pull/41760 中的 @AmoabaKelvin 在每台主机的后台自动运行清理规则
* perf(workspace-cleanup)：使清理扫描保持离线状态，速度提高约 4 倍，以便 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41765 中每小时运行一次
* 壮举（工作空间清理）：在 https://github.com/stablyai/orca/pull/41785 中保留 @AmoabaKelvin 配对桌面上未保存编辑的工作空间
* feat(workspace-cleanup)：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41808 中启用规则时，删除已完成的自动化运行和已发布的工作空间
*壮举（cli）：添加orca工作区清理预览，由@AmoabaKelvin在https://github.com/stablyai/orca/pull/41831中运行和报告
* 修复（worktree-delete）：当https://github.com/stablyai/orca/pull/41835中的@AmethystLiang关闭删除预览时，取消本地有风险的忽略文件扫描
* 壮举（设置）：在 https://github.com/stablyai/orca/pull/42039 中添加一个工作区清理设置页面，其中包含规则、立即运行和 @AmoabaKelvin 的活动
* feat(settings)：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/42055 中将每个项目工作区清理规则添加到项目设置中
* 在 https://github.com/stablyai/orca/pull/41858 中恢复 @brennanb2025 在服务器主机上删除的工作区
* perf(workspace-cleanup): 仅重新检查 https://github.com/stablyai/orca/pull/42252 中被 @AmoabaKelvin 删除的工作区

* 工作区签出存档/恢复基础（仅后端；不公开存档控制），作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/41833

### 🗂️ 工作区、窗口和导航

*项目准入、工作区导航、窗口、WSL 和桌面布局。*

* 在 https://github.com/stablyai/orca/pull/41324 中的 @nwparker 域迁移过程中接受 orca.dev 工件源
* 修复（运行时）：当 https://github.com/stablyai/orca/pull/41159 中的@innocarpe 桌面窗口消失时，关闭配对的会话选项卡
* 修复（wsl）：当 WSL 主机由 https://github.com/stablyai/orca/pull/41343 中的 @nwparker 启动时，显示正在连接而不是过时的读取错误
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/41376 中指向 orca.dev 的网站、文档和下载链接
* 默认情况下，在 Windows 上将已注册的 WSL 发行版显示为工作区主机，作者为 https://github.com/stablyai/orca/pull/36501 中的 @nwparker
* 修复（选项卡）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41430 中重新打开欢迎屏幕中最后关闭的选项卡
* 修复（cli）：为 https://github.com/stablyai/orca/pull/41444 中的 @nwparker 添加简洁的组级根 --help 条目，用于不可发现的命令组
* 修复（附件）：停止在 https://github.com/stablyai/orca/pull/41448 中命名@AmoabaKelvin 无法识别的图像上传 .png
*壮举（选项卡组）：分割窗格作为命令卡登陆，由@AmethystLiang在https://github.com/stablyai/orca/pull/41441中
* 修复（侧边栏）：显示您在 https://github.com/stablyai/orca/pull/41470 中设置的工作区名称，而不是 @AmoabaKelvin 的链接任务标题
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/25108 中通过 @ggbdpq 显示工作区时，将视口保持在可见的固定副本上
*修复（自动化）：在https://github.com/stablyai/orca/pull/41517中@nwparker在背景clicks上保持编辑后的自动化草稿打开
* 在https://github.com/stablyai/orca/pull/41529中@nwparker从侧边栏隐藏项目而不停止它们
* 修复（反重力）：在 https://github.com/stablyai/orca/pull/41511 中通过 @brennanb2025 保持托管本地连接远离代理
* perf(worktrees)：https://github.com/stablyai/orca/pull/41480 中@brennanb2025 为每个存储库的工作树列表指定一个所有者
*修复（gh）：关闭Orca的gh调用的gh遥测以停止https://github.com/stablyai/orca/pull/41608中@mousepotato03的Windows控制台闪烁
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41378 中改进入职流程
* 使封闭的 PR 清理能够容忍 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41646 中的快速重新打开
* 防止丢失工作区名称导致 https://github.com/stablyai/orca/pull/10062 中@AmethystLiang 的清理和排序崩溃
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/13731 中改进网页侧边栏默认设置
*修复（选项卡组）：在https://github.com/stablyai/orca/pull/41249中的@AmethystLiang在狭窄的选项卡组条中保留可抓取的选项卡
*修复（技能）：停止在https://github.com/stablyai/orca/pull/40706中通过@AmethystLiang调用过时的另一个Orca构建的技能副本
* 修复（选项卡）：工作区中的一个新选项卡，其布局比其组寿命更长，成为 https://github.com/stablyai/orca/pull/41664 中 @nwparker 的布局
* 修复（自动化）：@AmethystLiang 在 https://github.com/stablyai/orca/pull/41052 中对自动化细节重新设计的后续工作
* 修复（远程）：在 https://github.com/stablyai/orca/pull/41773 中 @AmoabaKelvin 的配对会话中 Cmd+D 后聚焦新窗格
* 在 https://github.com/stablyai/orca/pull/41764 中的 @brennanb2025 进行 macOS 权限帮助器清理期间保持 Orca 响应
* perf（侧边栏）：在https://github.com/stablyai/orca/pull/41788中由@nwparker折叠时跳过隐藏项目主机标签
*修复（通知）：将吐司和角卡提升到https://github.com/stablyai/orca/pull/41628中的@AmethystLiang的共享通知表面上
* perf：避免构建启动路线以供@nwparker在https://github.com/stablyai/orca/pull/41803中阅读的偏好
* 修复（wsl-hosts）：当 @nwparker 在 https://github.com/stablyai/orca/pull/41868 中没有注册任何发行版时，不要为发行版列表运行 wsl.exe
* 在https://github.com/stablyai/orca/pull/41864中@OrcaWin在工作区刷新期间保持删除对话框稳定
* 简化删除对话框并使按钮状态通过 https://github.com/stablyai/orca/pull/41870 中的 @OrcaWin 可见
* perf(侧边栏)：在 https://github.com/stablyai/orca/pull/41060 中 @nwparker 的活动预测中重用选项卡所有权
* perf：窗口扩展侧边栏工作区系列，作者：@brennanb2025，https://github.com/stablyai/orca/pull/41237
* 修复（mac）：为 Orca 的主要可执行文件提供自己的 UUID，以便通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/41676 中进行本地网络访问
* 在 https://github.com/stablyai/orca/pull/42050 中 @brennanb2025 停止每次重新测量时侧边栏通知行的增长
* 修复（崩溃报告）：当 https://github.com/stablyai/orca/pull/42133 中的 @brennanb2025 内存保持较高水平时，停止强制每 30 秒执行一次渲染器 GC
* 修复（ui）：https://github.com/stablyai/orca/pull/42171 中 @nwparker 的范围按钮概述了对话框页脚操作
* 修复（配对）：从不通过 https://github.com/stablyai/orca/pull/41982 中的 @nwparker 通告或拨打链路本地直接端点
*修复（中继）：探测逾期的保活确认； @nwparker 在 https://github.com/stablyai/orca/pull/41992 中新命名的故障单元的 60 秒重试上限
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41744 中运行项目组文件夹工作区的设置脚本

### ⌨️ 终端和 clipboard

*终端输入、渲染、会话生命周期和 clipboard 行为。*

*修复（运行时）：保持tui-idle直到冷启动的Claude由@AmethystLiang在https://github.com/stablyai/orca/pull/40539中绘制
* feat(cmd-j)：额外的源可以通过https://github.com/stablyai/orca/pull/41360中的@Jinwoo-H引导空列表并在工作区行框中绘制
* 修复（终端）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41442 中将未选择的 Ctrl+Shift+C 传递给 Linux/Windows 上的 Kitty TUI
* 修复（浮动终端）：https://github.com/stablyai/orca/pull/41443 中的 @nwparker 使东调整大小手柄远离终端滚动条
* 修复（守护进程）：当 https://github.com/stablyai/orca/pull/41510 中的 @nwparker 停止 macOS PTY 登录探测时，获得挂起的登录(1)
*修复（gitlab）：停止报告@Bensonluo在https://github.com/stablyai/orca/pull/41202中的空合并请求的冲突
* 修复（终端）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41530 中链接 Windows 驱动器工作区中的 Git Bash /c/... 路径
* 修复（终端）：当 TUI 在 https://github.com/stablyai/orca/pull/41644 中使用 @AmoabaKelvin 的 kitty 键盘时，让 macOS 菜单快捷方式起作用
* 修复（终端）：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41247 中的一个输出位置捕获重放快照
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/40178 中改进终端错误呈现
* perf: 在https://github.com/stablyai/orca/pull/41660中通过@brennanb2025恢复没有同步IPC的终端历史记录
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41286 中为终端代理提供持久的代理 ID 和复制代理 ID
* 修复（终端）：在https://github.com/stablyai/orca/pull/41736中@nwparker首次聚焦之前在重新安装的窗格中绘制硬件光标
*修复（自动化）：在https://github.com/stablyai/orca/pull/41846中通过@AmoabaKelvin关闭自动化运行的终端后释放它
*修复（wsl）：通过stdin写入Claude帐户指针，而不是https://github.com/stablyai/orca/pull/41869中@nwparker的空参数
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41848 中将终端代理主机与 Orca 分开命名
* 修复（终端）：当代理在 https://github.com/stablyai/orca/pull/42204 中通过 @AmoabaKelvin 分割终端时，保持用户的键盘焦点

### 🌐 浏览器和预览

*浏览器放置、后台交互、选项卡、预览和嵌入页面。*

* 修复（浏览器）：保持弹出窗口打开，防止特工将 Orca 带到前面（@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41317 中）
* 修复（浏览器）：重新加载报告脱机失败并加载 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41347 中从未完成加载的页面
* 修复（浏览器）：阻止原始 exec 命令通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41344 打开系统文件选择器
*修复（浏览器）：通过https://github.com/stablyai/orca/pull/41349中的@AmoabaKelvin在用户当前选项卡后面打开代理clicks的链接
* 修复（浏览器）：当用户通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41415 中的原始栏弹出窗口返回时显示等待弹出窗口
*修复（编辑器）：在https://github.com/stablyai/orca/pull/33885中通过@yigitozen33重新安装时保持媒体预览音量、静音和每clip的速度
* 通过 https://github.com/stablyai/orca/pull/41489 中的 @brennanb2025 将浏览器恢复完成交付给需要它的 clients
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/41438 中@AmethystLiang 在地址栏图标上显示悬停反馈
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36190 中改进浏览器扩展发现
* 修复（浏览器）：通过 https://github.com/stablyai/orca/pull/40931 中的 @AmethystLiang 将访客文本输入绑定到其 webContents
* 修复（选项卡组）：通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41335 中保持分割分隔线可在浏览器组旁边拖动
*壮举（markdown）：在Orca中打开clicked URL，在系统浏览器中打开中间click，并在https://github.com/stablyai/orca/pull/41767中通过@nwparker悬停时显示链接菜单
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41830 中提高浏览器性能
* 停止路由 GitHub 链接预览重新扫描 @AmethystLiang 在 https://github.com/stablyai/orca/pull/41809 中的不相关商店更新的存储库
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/41952 中的 @AmoabaKelvin 在流式浏览器选项卡上显示实时标题、加载和后退/前进状态
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/41960 中由 @AmoabaKelvin 在桌面上显示流式传输页面的 JavaScript 对话框
* 修复（浏览器）：不要在 https://github.com/stablyai/orca/pull/41967 中的@AmoabaKelvin 在本机上打开流式页面的服务器本地主机 URL
* 修复（浏览器）：从 https://github.com/stablyai/orca/pull/41973 中的 @AmoabaKelvin 的“此设备”页面打开弹出窗口和新选项卡链接
* 修复（浏览器）：从 https://github.com/stablyai/orca/pull/41971 中的@AmoabaKelvin 的“此设备”页面返回大量结果和实际错误
* 修复（浏览器）：创建选项卡后代理的下一个命令使用其新选项卡，而不是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41953 中的用户的“此设备”页面
* 壮举（浏览器）：服务器代理的新选项卡在 https://github.com/stablyai/orca/pull/41989 中的 @AmoabaKelvin 在配对桌面上打开
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/42077 中 @AmoabaKelvin 的睡眠配对桌面上创建的代理选项卡最多等待一次
* 修复（快捷方式）：https://github.com/stablyai/orca/pull/36744 中@AmethystLiang 从本地浏览器页面转发插件快捷方式
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41490 中防止恢复的浏览器选项卡返回空白
* 修复（浏览器）：弹出窗口上的代理 clicks 不再占据您的键盘焦点（https://github.com/stablyai/orca/pull/42186 中的@AmoabaKelvin）
*修复（浏览器）：在代理在后台安静下来后，保持页面打开的选项卡，并且系统浏览器打开到用户的click（作者：https://github.com/stablyai/orca/pull/42199中的@AmoabaKelvin）

### 🔀 源代码控制和集成

*Git 操作、审查显示、问题和连接服务。*

* 在 https://github.com/stablyai/orca/pull/41332 中观看 @brennanb2025 的 PR 检查时避免重复的 Git 工作
* 让自动 Git 维护在 https://github.com/stablyai/orca/pull/41370 中的 @brennanb2025 的后台活动中幸存下来
* 修复（新工作空间）：在 @nwparker 在 https://github.com/stablyai/orca/pull/41399 中打开作曲家时保持 GitLab 源稳定
* 修复（ime）：阻止没有 keyup 的提交键阻止 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41425 中的下一个 Enter
* perf（侧边栏）：避免在 https://github.com/stablyai/orca/pull/41318 中 @nwparker 的审查可见性报告中重复 DOM 扫描
* 避免在 https://github.com/stablyai/orca/pull/41384 中通过 @brennanb2025 重新获取窗口焦点上每个链接的线性徽章
* 修复（codex-hooks）：在 https://github.com/stablyai/orca/pull/41487 中 @AmoabaKelvin 在 macOS 和 Linux 上的 Codex 钩子审查中命名 Orca 的 Codex 钩子
* 修复（新工作空间）：将 Linear 和 Jira 范围选取器移动到 https://github.com/stablyai/orca/pull/41472 中 @nwparker 的源结果弹出窗口中
* feat（线性）：在https://github.com/stablyai/orca/pull/41382中@yodakaEngineer在问题视图中显示子问题状态
* 修复（worktree）：在 https://github.com/stablyai/orca/pull/18462 中通过 @domuk-k 检测签出分支的大小写和 Unicode 别名
* 在 https://github.com/stablyai/orca/pull/41583 中关闭 @brennanb2025 的 GitHub 草稿时取消图像上传
* 通过 https://github.com/stablyai/orca/pull/41500 中的 @brennanb2025 减少未聚焦和隐藏窗口中的 Git 状态工作
* 修复（源代码控制）：在 https://github.com/stablyai/orca/pull/41100 中 @AmethystLiang 进行等效本地变基后，保持合并评论可见
* perf(git)：在 https://github.com/stablyai/orca/pull/41558 中 @brennanb2025 的搜索中重用分支快照
* 支持https://github.com/stablyai/orca/pull/21108中@AmethystLiang在差异编辑器窗格中的原生水平滚轮输入
* 在 https://github.com/stablyai/orca/pull/41325 中通过 @brennanb2025 赋予 Git 需求并异步设置路径发现
* 修复（ime）：保留简单提交的韩文，以便 macOS 2-Set 可以通过 @nwparker 在 https://github.com/stablyai/orca/pull/41884 中重建它
* 在 https://github.com/stablyai/orca/pull/41927 中的@brennanb2025 工作树创建突发期间保持 Git 读取响应
*修复（git）：在https://github.com/stablyai/orca/pull/41862中@AmethystLiang并发引用更新后重试获取
*修复（github）：当GitHub遥控器在https://github.com/stablyai/orca/pull/42121中未由@AmoabaKelvin命名为origin时加载任务问题
* 批准 https://github.com/stablyai/orca/pull/41823 中 @brennanb2025 创建工作区的分支的工作区设置
* perf(github)：在https://github.com/stablyai/orca/pull/42033中共享自动PR读取并重用@brennanb2025的主机预算

### 📝 编辑器和文件

*文件打开、编辑、链接、搜索和文档处理。*

* 修复（编辑器）：使用 https://github.com/stablyai/orca/pull/41337 中的@AmoabaKelvin 的 Cmd/Ctrl-click 从标签上的任何位置打开维基链接和引文链接
* 显示在https://github.com/stablyai/orca/pull/41874中由@brennanb2025启动重新启动主机的观察程序时创建的远程文件
* perf(session-search)：https://github.com/stablyai/orca/pull/41948 中@brennanb2025 的绑定保留清理和单独清除计时
* 修复（dev）：在 https://github.com/stablyai/orca/pull/42137 中通过 @AmethystLiang 播种配置文件时省略搜索选择加入

### 🎙️ 设置、语音和扩展

*听写、首选项、插件、食谱和本地化。*

* 修复（语音）：在 https://github.com/stablyai/orca/pull/41297 中 @AmoabaKelvin 的句子中间停顿后停止 capi 口述单词的计算
* feat(settings)：将“删除项目”移动到 https://github.com/stablyai/orca/pull/41020 中 @brennanb2025 的“项目设置”底部的确认行
* 致电 orca.dev 获取反馈、插件列表和更新说明；接受 @nwparker 在 https://github.com/stablyai/orca/pull/41380 中的 orca.dev 分享和下载链接
* 修复（i18n）：在 https://github.com/stablyai/orca/pull/41413 中使用 @AmethystLiang 的标准韩语撤消、退出和停止措辞
* 修复（i18n）：澄清 @AmethystLiang 在 https://github.com/stablyai/orca/pull/40908 中的听写和 SSH 启动副本
* 修复（插件）：接受 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41411 中超过 8 个字符的语法注释标记
* 修复（插件）：停止语法插件在 https://github.com/stablyai/orca/pull/41451 中自动插入 @AmoabaKelvin 的长括号文本
* 在 https://github.com/stablyai/orca/pull/41460 中突出显示 @AmethystLiang 的特色插件和新添加的插件
* 壮举（插件）：主机 API 1.7 — 工作区 ID、项目/终端列表、终端焦点/由 https://github.com/stablyai/orca/pull/41508 中的 @nwparker 关闭
* 修复（状态栏）：将本地化使用标题保留在 https://github.com/stablyai/orca/pull/41114 中 @gentslava 的帐户菜单中的一行上
* 壮举（插件）：托管 API 1.8 — 在 https://github.com/stablyai/orca/pull/41528 中由 @nwparker 创建工作区、恢复代理和自动化
* 修复（插件）：主机 API 1.8/1.9 发布楼层为 https://github.com/stablyai/orca/pull/41565 中 @nwparker 的 1.4.258
* feat(plugins): project.setHidden — 在 https://github.com/stablyai/orca/pull/41582 中隐藏和显示 @nwparker 插件中的项目
* 反重力设置：每部分一张卡，@brennanb2025 在 https://github.com/stablyai/orca/pull/41632 中没有嵌套卡
* 保持 Codex 消息排队，直到 https://github.com/stablyai/orca/pull/41476 中的 @brennanb2025 应用它们的设置
* 壮举（语音）：当您在 https://github.com/stablyai/orca/pull/41428 中由 @AmoabaKelvin 说话时，逐字显示 Nemotron 3.5 听写
* 壮举（听写）：可选的人工智能清理听写文本，并由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41497 中提供更正词
* 壮举（语音）：在 https://github.com/stablyai/orca/pull/41464 中添加 Parakeet Unified EN，这是一个由 @AmoabaKelvin 提供实时文本的英文模型
* 修复（设置）：将健康的 orca.yaml 状态显示为 @brennanb2025 在 https://github.com/stablyai/orca/pull/41395 中折叠的行
* @brennanb2025 在 https://github.com/stablyai/orca/pull/40959 中为每个“设置”窗格提供相同的卡片结构
* 平衡 https://github.com/stablyai/orca/pull/41734 中的“设置”→“代理”中的权限卡填充，作者为 @brennanb2025
* 在https://github.com/stablyai/orca/pull/40852中@brennanb2025的设置搜索中将匹配的设置显示为结果列表
* 修复（插件）：主机 API 1.7-1.9 发布楼层为 1.4.259，由 @nwparker 在 https://github.com/stablyai/orca/pull/41789 中
* perf(plugins)：在 @nwparker 在 https://github.com/stablyai/orca/pull/41787 中的一次批量写入中暂停插件的自动化
*修复（听写）：仅停止https://github.com/stablyai/orca/pull/41817中@AmethystLiang跳过或超时的清理代理
* 修复（语音）：纠正字典术语的差点拼写，例如 https://github.com/stablyai/orca/pull/41703 中 @AmoabaKelvin 的 Superbase 到 Supabase
* 修复（设置）：删除 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/42251 中留下历史记录的运行的清理活动切换状态

### ⚡ 启动和后台工作

*进程启动、持久化、调度和后台资源使用。*

* 修复：在 https://github.com/stablyai/orca/pull/41483 中 @brennanb2025 完成后台清理时隐藏已删除的工作区
* 重用 @brennanb2025 在 https://github.com/stablyai/orca/pull/42155 中启动 Mac 进程的可执行路径

### 🖥️ 模拟器和桌面自动化

*桌面控制、快照、模拟器行为和平台集成。*

* 修复（计算机）：停止 macOS 输入文本和粘贴文本，由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41339 中输入文本两次
* 修复（计算机使用）：在 https://github.com/stablyai/orca/pull/40422 中通过 @sbosell 捕获带有严峻的 Wayland 窗口
* 修复（计算机）：停止操作结果重复 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41479 中代理编写的值或文本
* 修复（计算机）：将 macOS 类型文本后备键放置在 https://github.com/stablyai/orca/pull/41541 中@AmoabaKelvin 的原始插入符号处
* 修复（计算机）：Windows 屏幕截图显示被覆盖的窗口、提升的应用程序拒绝输入、挂起的应用程序超时（https://github.com/stablyai/orca/pull/41468 中的 @AmoabaKelvin）
* 修复（计算机）：在 https://github.com/stablyai/orca/pull/41469 中选择 click 未由 @AmoabaKelvin 选择的 macOS 列表和表格行
* 修复（计算机使用）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41564 中的桌面门户截屏 KDE Wayland 窗口
*修复（计算机）：检查macOS click目标是否已启用，在clicking之前由@AmoabaKelvin在https://github.com/stablyai/orca/pull/41519中查看和发现
* 壮举（计算机使用）：在 https://github.com/stablyai/orca/pull/41433 中添加 Orca 计算机等待文本、启用的控件和窗口标题（由 @AmoabaKelvin 提供）
*壮举（计算机）：显示快照被剪切的位置并由@AmoabaKelvin在https://github.com/stablyai/orca/pull/41482中读取一个元素的子树
*修复（计算机）：拒绝退出，注销和锁定快捷方式，除非https://github.com/stablyai/orca/pull/41412中的@AmoabaKelvin明确允许
* 修复（计算机）：通过在 https://github.com/stablyai/orca/pull/41402 中读取 @AmoabaKelvin 的字段来验证 macOS 类型文本和粘贴文本
* 修复（计算机使用）：在 https://github.com/stablyai/orca/pull/41429 中使用 @AmoabaKelvin 的 UI 自动化进行 Windows 滚动、展开和滑块操作
* feat(computer)：在 Linux 和 macOS 上，在命名文本字段中输入内容，而不将其聚焦在 https://github.com/stablyai/orca/pull/41421 中的 @AmoabaKelvin
* 壮举（macos）：重新设计全磁盘访问 toast，并在 https://github.com/stablyai/orca/pull/41849 中由 @AmethystLiang 提供提示计数插图
* 修复（计算机）：https://github.com/stablyai/orca/pull/41832 中 @AmethystLiang 重复读取时绑定子树快照保留
* 修复（计算机使用）：停止 Windows clicks、滚动和拖动，无需使用 https://github.com/stablyai/orca/pull/42161 中的 @AmoabaKelvin 的 --restore-window 来占据屏幕
*修复（计算机使用）：拒绝打开菜单或对话框的macOS背景clicks，并停止拒绝https://github.com/stablyai/orca/pull/42158中@AmoabaKelvin的普通AX按下
* 修复（计算机使用）：将 Linux 操作保留在后台，并拒绝需要前台的操作（https://github.com/stablyai/orca/pull/42157 中的@AmoabaKelvin）
* 修复（计算机）：在 https://github.com/stablyai/orca/pull/42181 中使用 @AmoabaKelvin 的 --restore-window 重试之前询问用户
* 壮举（计算机使用）：在后台 Linux 窗口中滚动并选择列表行，并瞄准 GTK 4 clicks by @AmoabaKelvin in https://github.com/stablyai/orca/pull/42201

### 🛠️ 维护和开发

*依赖关系、内部组织、发布工具和测试套件维护。*

*测试：删除https://github.com/stablyai/orca/pull/41305中@OrcaWin的低价值套件和内部工作检查
*测试：删除34个低值测试，包括@OrcaWin在https://github.com/stablyai/orca/pull/41321中的五个完整套件
* 杂务（deps）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41291 中安全地更新工作区中经过审查的依赖关系
* 重构（git）：https://github.com/stablyai/orca/pull/41322 中@nwparker 按具体域所有者对根模块进行分组
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41323 中删除查询计划和资格测试噪音
* 测试：删除低值 GitHub 并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41326 中启动默认覆盖
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41329 中删除低价值浏览器、图像和 ACP 套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41331 中删除工人审批烟雾和重复拒绝案例
* 测试：删除低价值工作区并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41336 中启动套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41342 中删除狭窄的移动、提供商和实用程序套件
* 测试：删除导入器、附件，并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41346 中启动投影案例
* 文档（编排）：工作人员报告来自 https://github.com/stablyai/orca/pull/41356 中 @AmethystLiang 的 --effort 的努力，而不是 Reasoning_effort
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41358 中删除低价值技能、主机和 WSL 套件
* 测试：删除低价值日志，在https://github.com/stablyai/orca/pull/41368中通过@OrcaWin输入和捕获示例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41375 中删除通知、图标和本机策略清单
* 重构（工作空间布局）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41350 中组织具体的域所有者
*测试：删除56个低值演示，CLI，并通过@OrcaWin在https://github.com/stablyai/orca/pull/41389中重新加载测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41397 中删除狭窄的策略和解析器样本
* 重构（codex-accounts）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41388 中组织具体的域所有者
* 重构（设置）：由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41406 中从其功能模块组成工作区清理设置
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41407 中删除低值解析器和本机投影套件
* 重构（移动任务）：https://github.com/stablyai/orca/pull/41410 中的 @nwparker 按具体功能所有者对模块进行分组
*测试：删除https://github.com/stablyai/orca/pull/41420中@OrcaWin的九个低价值审批和云套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41436 中删除低价值的移动和主机策略套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41439 中删除低价值工人和模型库存案例
* 测试：在 https://github.com/stablyai/orca/pull/41447 中删除 @OrcaWin 的低价值帐户包装和路由检查
* 重构（claude）：https://github.com/stablyai/orca/pull/41437 中的 @nwparker 按具体所有者对根模块进行分组
*测试：删除https://github.com/stablyai/orca/pull/41452中@OrcaWin的低值CLI、快捷方式和中继检查
* 测试：在 https://github.com/stablyai/orca/pull/41462 中删除 @OrcaWin 的低值渲染器适配器和投影检查
* 测试（插件）：当 git 的默认分支是 https://github.com/stablyai/orca/pull/41466 中 @AmoabaKelvin 的 main 时，CLI 安装测试通过
*测试：删除https://github.com/stablyai/orca/pull/41465中@OrcaWin的低值共享和CLI检查
*测试：在https://github.com/stablyai/orca/pull/41474中删除@OrcaWin的低价值目录和共享检查
* 测试：删除https://github.com/stablyai/orca/pull/41481中@OrcaWin的低值输入、命名和本机解码器检查
* 测试：删除 https://github.com/stablyai/orca/pull/41484 中 @OrcaWin 的低值输入、媒体和浏览器示例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41485 中删除 15 个低价值媒体注册表和观察器案例
* 重构(rpc)：通过https://github.com/stablyai/orca/pull/41475中的@nwparker定义所有者来对根模块进行分组
*测试：在https://github.com/stablyai/orca/pull/41493中删除@OrcaWin的低值烟雾和夹具断言
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41495 中删除低价值的移动格式和适配器套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41505 中删除低值运行时和 Codex 包装器案例
* 测试：在 https://github.com/stablyai/orca/pull/41515 中淘汰 @OrcaWin 的低价值浏览器、VM 和遥测案例
* 测试：@OrcaWin 在 https://github.com/stablyai/orca/pull/41518 中淘汰低价值运行时和缓存案例
* 重构（ai-vault）：通过 https://github.com/stablyai/orca/pull/41520 中的 @nwparker 定义所有者来对扫描仪模块进行分组
* ci(e2e)：在 https://github.com/stablyai/orca/pull/41527 中删除 @nwparker 删除的 e2e 规范的路由
* 测试：在 https://github.com/stablyai/orca/pull/41526 中取消 @OrcaWin 的 21 个低值运行时兼容性定义
*重构（cli）：组织功能所有者并删除https://github.com/stablyai/orca/pull/41534中@nwparker的格式桶
* 测试：淘汰 40 个低价值运行时案例，并在 https://github.com/stablyai/orca/pull/41533 中重复@OrcaWin 的本机断言
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41539 中删除 60 个低值运行时和本机案例
* 重构（cli）：https://github.com/stablyai/orca/pull/41543 中@nwparker 的组工作区、终端和主机所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41547 中删除 76 个低值运行时和提取器案例
* 测试：删除https://github.com/stablyai/orca/pull/41551中@OrcaWin的低价值脚本、队列和文档覆盖率
* 重构（cli）：https://github.com/stablyai/orca/pull/41549 中 @nwparker 分组插件和技能实现所有者
* 测试：在 https://github.com/stablyai/orca/pull/41554 中通过 @OrcaWin 修剪共享防护和手动 Swift 策略检查
*测试：删除https://github.com/stablyai/orca/pull/41559中的边缘CLI和@OrcaWin的移动图像套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41560 中修剪 CLI 防护和投影套件
* 测试：https://github.com/stablyai/orca/pull/41563 中 @OrcaWin 修剪终端、工作区和扫描仪策略案例
*测试：删除低价值的AI Vault政策和@OrcaWin在https://github.com/stablyai/orca/pull/41567中的模拟调查
* 测试：删除https://github.com/stablyai/orca/pull/41571中@OrcaWin的90个低价值插件、移动和共享测试
* 测试：删除 63 个低价值插件生命周期并由 @OrcaWin 在 https://github.com/stablyai/orca/pull/41576 中编写测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41580 中删除低价值的编排和终端套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41581 中删除低价值的隐藏项目套件
* 测试：删除 https://github.com/stablyai/orca/pull/41584 中@OrcaWin 的低值终端、传输和布局测试
* 重构(cli)：通过@nwparker在https://github.com/stablyai/orca/pull/41562中组织命令调度和编排所有者
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/41591中删除低价值的夹具、继电器和恢复案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41600 中删除低价值流程、恢复和 UI 案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41606 中删除低值编辑、显示和 PTY 套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41609 中删除低价值的入口、移动和降价案例
* 重构(github)：通过@nwparker在https://github.com/stablyai/orca/pull/41601中组织具体的功能所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41612 中淘汰低价值守护进程、脚本和激活覆盖率
* 测试：@OrcaWin 在 https://github.com/stablyai/orca/pull/41614 中淘汰低价值草稿、加密货币、文件夹和生命周期覆盖范围
* 测试：在 https://github.com/stablyai/orca/pull/41617 中取消 @OrcaWin 的移动存在和本机聊天固定套件
* 重构（启动）：https://github.com/stablyai/orca/pull/41613 中 @nwparker 的群组启动和平台启动所有者
* 测试：@OrcaWin 在 https://github.com/stablyai/orca/pull/41621 中退出扫描仪、运行时状态和聊天窗口套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41623 中淘汰低价值扫描仪、帐户、浏览器和终端套件
* 重构（启动）：通过https://github.com/stablyai/orca/pull/41624中的@nwparker组织剩余的生命周期和服务所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41629 中删除低值弹出窗口、插件可见性和拆卸检查
* 重构（窗口）：由 @nwparker 在 https://github.com/stablyai/orca/pull/41634 中组织 clipboard、生命周期、安全性和中继所有者
*测试：删除https://github.com/stablyai/orca/pull/41636中@OrcaWin的低价值启动和合同测试以及未使用的固定装置
* 测试：删除https://github.com/stablyai/orca/pull/41638中@OrcaWin的低值模式和未使用的阅读器测试
* 测试：删除 https://github.com/stablyai/orca/pull/41645 中 @OrcaWin 的插件主机缓存计数和名义示例
* 重构（native-chat）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41643 中组织启动、记录和对话所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41647 中删除低价值插件架构库存
*测试：删除https://github.com/stablyai/orca/pull/41648中@OrcaWin的低价值清单和配置文件检查
* 测试（artifacts）：恢复https://github.com/stablyai/orca/pull/41364中@AmethystLiang的发布权限回归测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41655 中删除低价值目录和市场库存
* 测试：删除插件策略清单并由 @OrcaWin 在 https://github.com/stablyai/orca/pull/41662 中生成相等性检查
* 重构（orcad）：通过https://github.com/stablyai/orca/pull/41659中的@nwparker组织运行时、启动和主机生命周期所有者
* 测试：修剪低价值插件工件并由 @OrcaWin 在 https://github.com/stablyai/orca/pull/41663 中进行贡献测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41675 中删除低价值插件策略和图形 GC 套件
* 测试：在 https://github.com/stablyai/orca/pull/41678 中通过@brennanb2025 保持实时 zsh 钩子检查与已安装的 Claude 隔离
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41679 中删除低价值插件策略和框架套件
* 重构：https://github.com/stablyai/orca/pull/41681 中@nwparker 按生命周期所有者组织移动云中继
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41683 中删除低价值插件模式和花名册案例
* 测试（语音）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/41328 中使用假引擎覆盖 transcribe-cpp 识别器的提交、覆盖和取消
* 测试：删除低价值创作、CLI 以及 https://github.com/stablyai/orca/pull/41688 中 @OrcaWin 的预加载套件
*测试：在https://github.com/stablyai/orca/pull/41692中由@OrcaWin删除13个低价值的移动、焦点和提示案例
* 重构：https://github.com/stablyai/orca/pull/41690 中@nwparker 按持久性所有者组织终端拓扑
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/41694中删除四个低值浏览器输入案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41696 中删除四个低值 Composer 和 focus-guard 案例
* 测试：在 https://github.com/stablyai/orca/pull/41699 中淘汰@OrcaWin 的低价值移动作曲家和 CDP 套件
* 测试：淘汰低价值草稿和 CDP 生命周期示例（@OrcaWin 在 https://github.com/stablyai/orca/pull/41704 中）
* 测试：在 https://github.com/stablyai/orca/pull/41708 中淘汰 @OrcaWin 的低价值反重力元数据和规则示例
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41698 中组织具体所有者的侧边栏输入
* 测试：取消@OrcaWin 在 https://github.com/stablyai/orca/pull/41712 中的狭窄自动化时间和文件夹帐户示例
* 测试（自动化）：@AmethystLiang 在 https://github.com/stablyai/orca/pull/41709 中进行提示预览的组件测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41713 中删除低价值代理身份计数和规模案例
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41716 中组织工人和联邦生命周期所有者
* 测试：https://github.com/stablyai/orca/pull/41720 中 @OrcaWin 删除低值侧边栏和提示披露套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41733 中删除低值应力和草图镜像套件
* 重构（自动化）：按https://github.com/stablyai/orca/pull/41737中@nwparker的所有权分组运行生命周期模块
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41743 中删除船员成本探测和未经证实的服务员覆盖范围
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41748 中删除重复的联合和入职策略案例
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/41755中删除低价值的生命周期、后续和缓存案例
* 测试：在 https://github.com/stablyai/orca/pull/41759 中 @OrcaWin 修剪车队变体和范围自动化装置
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41769 中删除低值清理、游标和配额情况
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41777 中删除狭窄的自动化策略套件
* 测试：在 https://github.com/stablyai/orca/pull/41782 中删除 @OrcaWin 的窄标记和编排检查
* 测试：https://github.com/stablyai/orca/pull/41796 中@OrcaWin 修剪发布检查并删除预检查套件
* 测试：在 https://github.com/stablyai/orca/pull/41792 中删除 @OrcaWin 的狭窄发布和迁移检查
* 重构：通过 https://github.com/stablyai/orca/pull/41772 中的 @nwparker 定义所有者来组织提供程序模块
* 测试：在 https://github.com/stablyai/orca/pull/41801 中修剪自动化生命周期并回复 @OrcaWin 的投影案例
*测试（github）：在https://github.com/stablyai/orca/pull/41790中@nwparker在作业日志保留基准中对移动的gh下载器进行存根
* 测试：在 https://github.com/stablyai/orca/pull/41807 中删除 @OrcaWin 的窄唤醒和工作输出检查
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41810 中修剪问题标签覆盖率以实现突变协调
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41811 中删除低价值的移动和源代码控制套件
* 测试：在 https://github.com/stablyai/orca/pull/41813 中取消 @OrcaWin 的窄运行时和导航示例
* 重构：https://github.com/stablyai/orca/pull/41812 中 @nwparker 通过 Git 操作对源代码管理模块进行分组
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41818 中删除狭窄的移动和设置导航示例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41825 中删除低价值提供程序和分支清理套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/41826中删除整个移动队列和权限套件
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41838 中围绕具体所有者组织文本生成
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41839 中删除 56 个低价值运行时、守护进程和自动化案例
* 测试：在 https://github.com/stablyai/orca/pull/41842 中删除 @OrcaWin 的 20 个子流程和移动导航投影
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41844 中删除五个低价值运行时管道套件
* 测试：在 https://github.com/stablyai/orca/pull/41851 中删除 @OrcaWin 的 13 个低价值工作区拆解案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41863 中删除合成邮箱和准入管道案例
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/41852 中的具体所有权来组织 WSL 来宾模块
*测试：删除https://github.com/stablyai/orca/pull/41872中@OrcaWin的选项卡切换模拟投影套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41877 中删除低价值的 repo 通知程序和模式缓存套件
* 重构：由 @nwparker 在 https://github.com/stablyai/orca/pull/41875 中的具体业主组织特色墙
* 测试：在 https://github.com/stablyai/orca/pull/41883 中删除终端关闭并导入 @OrcaWin 的 setter 投影套件
* 测试：删除 https://github.com/stablyai/orca/pull/41885 中 @OrcaWin 模拟的工具运行布局套件
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/41890 中模拟的自动化投影和重试套件
* 重构：由 @nwparker 在 https://github.com/stablyai/orca/pull/41887 中由具体所有者组织工作区清理
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41895 中删除合成门户循环和静态 WSL 移动套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41898 中删除低值缓存、视觉探针和环境案例
*测试：在https://github.com/stablyai/orca/pull/41900中通过@OrcaWin删除路由转发和内部移动标记案例
* 重构：https://github.com/stablyai/orca/pull/41905 中的 @nwparker 按域对新工作区模块进行分组
* 测试：在 https://github.com/stablyai/orca/pull/41909 中删除重复的语言包装器和 @OrcaWin 的孤立主机拆卸
* 测试：在 https://github.com/stablyai/orca/pull/41925 中删除 @OrcaWin 的低值烟雾、包装和复制断言
* 测试：删除低价值工作区包装并注意 https://github.com/stablyai/orca/pull/41938 中 @OrcaWin 的情况
*测试：删除https://github.com/stablyai/orca/pull/41941中@OrcaWin的低价值清理套件和生成重放
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41944 中删除生成重播和缓存计数器案例
* 测试：删除 https://github.com/stablyai/orca/pull/41947 中 @OrcaWin 的即时传输重播和秘密簿记案例
* 重构：https://github.com/stablyai/orca/pull/41940 中的 @nwparker 按域对预加载模块进行分组
* 测试：在 https://github.com/stablyai/orca/pull/41951 中删除 @OrcaWin 的钩子和生成重放以及缓存断言
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/41966 中的 Git 暂存和状态重播
* 测试：在 https://github.com/stablyai/orca/pull/41974 中删除 @OrcaWin 的上游和传输重放
*测试：删除https://github.com/stablyai/orca/pull/41981中@OrcaWin的RPC工作预算和多余的推送租赁案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/41983 中删除重复的准备情况和遥测模式案例
* 重构：https://github.com/stablyai/orca/pull/41968 中的 @nwparker 按域对代理挂钩提供商进行分组
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/41988 中的文件系统规模和遥测模式重放
* 重构：https://github.com/stablyai/orca/pull/41995 中的 @nwparker 按域对 GitHub 任务页面模块进行分组
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42000中删除计算器烟雾和冗余覆盖
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42007 中删除原生烟雾和重复输入检查
* 重构：https://github.com/stablyai/orca/pull/42009 中的 @nwparker 按域对 Jira 和 Linear 任务页面模块进行分组
* 测试：删除 https://github.com/stablyai/orca/pull/42011 中 @OrcaWin 重复的本机策略检查
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42017中删除低值继电器套件和探针
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/42019 中组织移动文件和主机屏幕域所有者
*测试：删除https://github.com/stablyai/orca/pull/42022中@OrcaWin的低价值移动和CLI运行时测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42026 中删除低价值传输和共享套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42031中删除低值继电器分配套件和案例
* 重构（移动）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/42030 中按功能组织平台适配器
* 测试：删除https://github.com/stablyai/orca/pull/42029中@OrcaWin的低价值云测试和未使用的支持
*测试：在https://github.com/stablyai/orca/pull/42034中删除@OrcaWin的低值继电器启动和JWKS检查
*测试：在https://github.com/stablyai/orca/pull/42037中删除@OrcaWin的低价值重新归位并保留模拟套件
* 重构（移动）：https://github.com/stablyai/orca/pull/42040 中@nwparker 按职责组织终端模块
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/42042中的低价值预订、座位和连接测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42047 中删除低价值连接和租赁案例
* 重构（移动）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/42046 中组织终端会话功能所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42049 中删除低价值凭证和数据库案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42053 中删除低价值中继和合约套件
* 重构（预加载）：在 https://github.com/stablyai/orca/pull/42051 中按 @nwparker 的功能所有者组织 API 模块
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42056 中删除低价值构建和 CI 套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42062 中删除低价值工作流程和打包套件
* 重构（rpc）：https://github.com/stablyai/orca/pull/42063 中 @nwparker 按功能所有者分组请求合同
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42064中删除低价值的运行时打包和诊断套件
* 测试：删除https://github.com/stablyai/orca/pull/42070中@OrcaWin的低价值本地化和移动测试
* 重构（移动）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/42073 中按功能所有者组织源代码控制
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42076 中删除低价值的移动和本机构建案例
* 测试：去掉低值包装并通过@OrcaWin在https://github.com/stablyai/orca/pull/42078中发布测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42082 中删除低值运行时和静态分析案例
* 重构：按https://github.com/stablyai/orca/pull/42081中@nwparker的所有权对运行时环境IPC进行分组
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42086 中删除低值图像、运行时和清理测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42087 中删除低价值移动设备和示例覆盖范围
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42090 中删除低价值移动 Markdown 编辑器覆盖范围
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42094 中修剪重复的移动和内部固定装置断言
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42098中删除低价值的移动套件和冗余的本机输入覆盖
* 重构：https://github.com/stablyai/orca/pull/42093 中@nwparker 按功能对共享工作树模块进行分组
*测试：在https://github.com/stablyai/orca/pull/42105中删除@OrcaWin的低值桥接和本机检查
* 重构（git）：共享准入版本，以便 git-exec-file.ts 适合 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/42109 中的行上限
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42108 中删除低价值的移动和 lint 套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42118中删除低价值的移动套件和冗余案例
* 重构：https://github.com/stablyai/orca/pull/42107 中的 @nwparker 按域组织共享侧边栏模块
* 测试：在 https://github.com/stablyai/orca/pull/42120 中删除 @OrcaWin 的 76 个低价值 RPC 录音及其黄金
* 测试：删除https://github.com/stablyai/orca/pull/42123中@OrcaWin的78个低值RPC记录测试
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42125中删除50个低价值录音和调度系列
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/42130中的41个低价值会话和语音录音
*测试：删除https://github.com/stablyai/orca/pull/42135中@OrcaWin的低价值任务记录和分配检查
* 重构：https://github.com/stablyai/orca/pull/42124 中 @nwparker 按生命周期所有者组织终端商店模块
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42139中删除低价值的中继覆盖和过时的装置
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42140 中删除低价值单元和主机会话套件
*测试：通过https://github.com/stablyai/orca/pull/42142中的@OrcaWin删除冗余中继工作流程和关闭探针
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42154中删除冗余的浏览器套件和适配器工作流程
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42159 中修剪冗余的浏览器计时和投影情况
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42163 中删除重复的浏览器来宾快捷方式案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42167 中修剪多余的浏览器清理和预览覆盖范围
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42170 中删除低值预览和设置映射覆盖范围
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/42178中删除多余的浏览器恢复覆盖
* 测试：去除@OrcaWin在https://github.com/stablyai/orca/pull/42183中的弱观察和重复恢复测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42191 中删除边际生命周期和协议案例
* 测试（浏览器）：在 Windows 上检查代理浏览器输入是否将用户的应用程序保留在 https://github.com/stablyai/orca/pull/42194 中的 @AmoabaKelvin 前面
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42198 中删除低价值布局和守护进程套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/42202 中删除低值兼容性和流案例
* 重构（菜单）：通过 https://github.com/stablyai/orca/pull/41847 中的 @AmethystLiang 共享菜单行样式并添加紧凑的密度
* 测试：删除https://github.com/stablyai/orca/pull/42203中@OrcaWin的浅遥测模式和白名单套件
* perf(hooks): 跳过 lint-staged 的串行工作树在 https://github.com/stablyai/orca/pull/42184 中由 @AmethystLiang 进行的预提交
*测试（浏览器）：通过@brennanb2025在https://github.com/stablyai/orca/pull/42269中重置固定装置边界处的代理解析器

* @brennanb2025 在 https://github.com/stablyai/orca/pull/41532 中自动保存完整的 macOS 冻结诊断
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/41027 中捕获执行堆栈和机器挂起状态
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/41401 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/41622 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/41742 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/42012 中更新自述文件下载徽章
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/42097 中更新自述文件下载徽章
* 修复（测试）：在 https://github.com/stablyai/orca/pull/41625 中使用 @nwparker 定义的 GitHub 图像功能所有者
* 修复（ci）：在 https://github.com/stablyai/orca/pull/42110 中并置 Git 缓冲区选项类型以恢复 @nwparker 的 lint
* https://github.com/stablyai/orca/pull/41950 中 @brennanb2025 的字段跟踪中的属性 Git 执行
*修复（可观察性）：通过https://github.com/stablyai/orca/pull/42151中的@brennanb2025从其移动的合同路径导入git准入层

### ↩️ 恢复和之前发布的更改

*为撤回的更改和已在 1.4.258 中交付的工作保留积分。*

* 菜单优先添加带有主机选择的项目流程（已在 1.4.258 中提供），作者：https://github.com/stablyai/orca/pull/41303 中的 @nwparker
* 通过 https://github.com/stablyai/orca/pull/41259 中的 @Jinwoo-H 回答协调员（已在 1.4.258 中发货）的工人权限提示
* 聊天列表/读取/发送/等待和等待修复恢复（已在 1.4.258 中发货）由 @brennanb2025 在 https://github.com/stablyai/orca/pull/41241 中
* 在 https://github.com/stablyai/orca/pull/41578 中恢复手机网络聊天触摸滚动（已在 1.4.258 中提供）由 @Jinwoo-H
* 在 https://github.com/stablyai/orca/pull/41735 中通过 @AmethystLiang 聊天换行可见性和淡入淡出更改（在此版本中由 #41804 恢复）
* 合并工作区清理通知和审查刷新更改（在此版本中由 #42275 撤回），作者为 https://github.com/stablyai/orca/pull/41200 中的 @AmethystLiang
* 恢复 https://github.com/stablyai/orca/pull/41804 中 @AmethystLiang 之前的聊天换行行为
* 删除合并工作区清理通知并恢复 https://github.com/stablyai/orca/pull/42275 中 @AmethystLiang 之前的审核刷新和睡眠工作区行为

## 贡献者

@AmethystLiang、@AmoabaKelvin、@Bensonluo、@brennanb2025、@buf0-bot[bot]、@domuk-k、@Eotel、@gentslava、@ggbdpq、@innocarpe、@Jinwoo-H、@Luoqiu1、@mousepotato03、@MsCNotes404、@nwparker、@OrcaWin、 @sbosell、@yasyf、@yigitozen33、@yodakaEngineer。

其他来源：@hrithiksaini99、@silee9019、@teddychan、@Tomk2d、@wowpotato、alpenshtokk、bbingz、Duncan、liaoxingyu、Neil、Sibyl、Tobias Diez、Vyacheslav Scherbinin、Wooseong Kim。

## 新贡献者

* @Luoqiu1 在 https://github.com/stablyai/orca/pull/41023 中做出了第一个贡献
* @sbosell 在 https://github.com/stablyai/orca/pull/40422 中做出了第一个贡献
* @yodakaEngineer 在 https://github.com/stablyai/orca/pull/41382 中做出了第一个贡献
* @MsCNotes404 在 https://github.com/stablyai/orca/pull/29925 中做出了第一个贡献
* @domuk-k 在 https://github.com/stablyai/orca/pull/18462 中做出了第一个贡献
* @yasyf 在 https://github.com/stablyai/orca/pull/41979 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.258...v1.4.259

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.259` · 📅 发布：2026-11-14 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.259)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
