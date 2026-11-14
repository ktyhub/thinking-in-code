---
title: "orca v1.4.251"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.251"
version: "v1.4.251"
published: "2026-11-06"
type: "patch"
lang: "zh"
---

# orca v1.4.251

## 更丰富的电话聊天、随时随地添加聊天以及更稳定的终端✨

- 📱 **在电话上进行更多聊天：** 倒回到之前的消息，继续停止的回复，将代理的计划固定在编辑器上方，粘贴图像和长文本，管理聊天目标并查看上下文使用情况，并在应用程序重新启动时保留未发送的草稿。
- 📎 **添加任何内容进行聊天：** 将文件、Markdown 预览或终端中的选择发送到工作区中的任何代理，或用它启动一个新代理。
- 🔁 **重启后聊天恢复：** Orca 退出或更新后，新安装会自动恢复工作聊天，并且对于每个打开它的人来说，恢复都更可靠。
- 🤖 **工作人员可以启动自己的工作人员：** 默认情况下允许嵌套工作人员，完成的工作人员可以继续向其协调员发送消息，停止工作人员会停止其助手。
- ⚡ **更快的日常工作：** Launch 跳过第二次登录 shell 捕获，源代码控制和选项卡栏减少了重复工作，并且长时间聊天保持响应。
- 🖥️ **更稳定的终端：** 守护进程重新连接后终端重新连接，在繁忙的应用程序中生存，并且新的 GPU 画布不再闪烁空白。
- 🗂️ **更轻松的项目组织：** 折叠或展开所有项目，从上下文菜单创建子工作树并刷新文件夹项目组。

## 亮点

- **聊天：** 将文件、Markdown 预览或终端选择添加到聊天中。代理消息在桌面和电话上使用单行卡，本机聊天显示在 Cmd+J 最近记录和标题搜索中，而空编辑器上的 Cmd/Ctrl+Enter 则引导第一个排队的消息。克劳德聊天在第一次回复后保持工作量可变，并在克劳德自行结束请求时清除卡住的“需要许可”状态。 Codex 聊天显示 `/usage` 和子代理任务名称。
- **电话：** 倒回并继续聊天、固定计划、粘贴图像和长文本、设置和管理目标、查看上下文使用环、执行后台任务、复制或共享图像、复制文件路径、选择链接打开位置以及从注销的聊天中登录。
- **编排：**工作人员可以启动自己的工作人员，完成后继续向协调员发送消息，并在停止时停止他们的助手。 Mail 会等待您正在输入的草稿，包括在 OpenCode 中以及重新启动后。
- **性能：** 启动、源代码控制冲突标记和分支比较、选项卡栏、浏览器登录检测、Pi 终端生成和插件目录图像都减少了重复工作。长聊天不再在每次状态更新时重新扫描整个历史记录。与 ACP 代理的聊天也会停止在聊天的整个生命周期中保留已完成的工具和消息记录。
- **终端和远程主机：** 守护程序重新连接后终端重新连接，并通过主进程冻结保持其链接。 SSH 解释主机的服务器设置何时因已知原因停止并停止重新启动不断崩溃的服务器。服务器操作重新连接断开连接的服务器。

## 兼容性和升级说明

- **嵌套工作线程深度：** 现在默认值为 4。现有配置文件设置为 1，升级时改为 4；您可以在“设置”中将其重新设置，Orca 会保留该选择。
- **重新启动后恢复工作聊天：** 默认情况下仅适用于新安装。现有用户保留他们保存的选择，而从未选择过的现有配置文件将保持关闭状态。
- **克劳德权限状态：** 清除克劳德自行结束的“需要权限”状态需要克劳德 2.1.118 或更高版本。 Orca 为其安装了另一个受管理的 Claude hook；旧的克劳德版本保留了以前的行为。
- **macOS 更新：** 低于某个版本最低 macOS 的 Mac 会保留其最新的兼容版本并获得一次性通知。最低版本仍然是 macOS 12，所以还没有任何变化。
- **聊天 UI 菜单：** “Fork Agent Session…”不再出现在聊天 UI 的菜单中。终端保留它。

---

## 产品体验

### 本机聊天和代理

*在聊天中引入更多背景信息，保持长时间聊天的响应性并平滑 Claude、Codex 和 OpenCode 的详细信息。*

* 在 https://github.com/stablyai/orca/pull/38251 中通过@brennanb2025 在聊天中添加文件、Markdown 预览或终端选择
* @brennanb2025 在 https://github.com/stablyai/orca/pull/37984 中分割聊天 UI 窗格时打开终端
* 在空聊天编辑器上使用 Cmd/Ctrl+Enter 控制 https://github.com/stablyai/orca/pull/38732 中 @brennanb2025 的第一条排队消息
* 在 Ctrl+PageUp/PageDown 中包含本机聊天选项卡 cycling by @brennanb2025 in https://github.com/stablyai/orca/pull/37952
* 在 Cmd+J 中显示本机聊天记录和 @brennanb2025 在 https://github.com/stablyai/orca/pull/38574 中的标题搜索
* 在 https://github.com/stablyai/orca/pull/38615 中使用@brennanb2025 在桌面和电话上使用单行卡发送所有代理消息
* 在 https://github.com/stablyai/orca/pull/38498 中@brennanb2025 在文件夹聊天的第一条消息之前显示模型和努力
* 使 Claude 聊天工作与其 https://github.com/stablyai/orca/pull/38338 中 @brennanb2025 的已解决设置保持一致
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/38272 中首次回复后，保持 Claude 聊天的努力可改变
* feat(native-chat): 显示 https://github.com/stablyai/orca/pull/38352 中 @brennanb2025 的 /usage 的聊天 Codex 使用卡
* Codex 子代理行显示其任务名称，而不是 https://github.com/stablyai/orca/pull/38491 中的 @brennanb2025 全部显示“worker”
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38651 聊天中保持价格可读
* feat(native-chat)：用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38676 中的主题链接颜色对聊天链接进行颜色设置
* 修复（native-chat）：使终端支持的计划批准中的文件链接可由https://github.com/stablyai/orca/pull/38495中的@brennanb2025操作
* feat(omp)：在https://github.com/stablyai/orca/pull/38684中@AmoabaKelvin在聊天视图中提出多项选择题和批量问题
* 修复（native-chat）：@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38698 中打开聊天后立即列出 OpenCode 自己的和自定义的斜杠命令
* 修复（claude）：在 https://github.com/stablyai/orca/pull/38743 中由 @nwparker 回退到斜杠命令时，删除本地命令警告
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38646 中从聊天 UI 菜单中删除 Fork Agent 会话
* 修复（native-chat）：在https://github.com/stablyai/orca/pull/38679中由@AmoabaKelvin命名从该会话之后的会话恢复的聊天
*修复（ai-vault）：保留与@AmoabaKelvin在https://github.com/stablyai/orca/pull/38666的最新回合中的会话标题相匹配的回复
* 修复（claude）：在 https://github.com/stablyai/orca/pull/38248 中的 @brennanb2025 的本机聊天会话中打开 Artifact 工具
* 修复（聊天）：通过 https://github.com/stablyai/orca/pull/38389 中的 @brennanb2025 修复帐户设置并恢复启动重试
* 修复（代理）：配对主机代理选项卡使用 https://github.com/stablyai/orca/pull/38301 中 @brennanb2025 的主机启动设置
* 修复(acp): 来自代理自己工作的权限提示在 https://github.com/stablyai/orca/pull/38488 中由 @brennanb2025 等待您
* 当 Claude 在 https://github.com/stablyai/orca/pull/38648 中通过 @brennanb2025 自行结束请求时，清除 Claude 权限等待
* 在https://github.com/stablyai/orca/pull/38649中@brennanb2025为新用户默认重新启动后恢复工作聊天
* 保持长聊天响应：停止重新扫描 https://github.com/stablyai/orca/pull/38627 中 @brennanb2025 的每个状态更新和子代理名称的整个历史记录
* 由 @brennanb2025 在 https://github.com/stablyai/orca/pull/38767 中发布过时的 ACP 工具和消息簿记

### 编排
*让员工自己做更多事情，并在适当的时候投递邮件。*

* 让worker默认启动自己的worker（嵌套worker深度4） by @Jinwoo-H in https://github.com/stablyai/orca/pull/38348
* 让完成的工作人员通过 https://github.com/stablyai/orca/pull/38357 中的@Jinwoo-H 向其协调员发送消息
* 当https://github.com/stablyai/orca/pull/38373中的@Jinwoo-H停止工人时，停止工人的助手
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/38465 中使临时工横幅更加突出
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37966 中将编排消息与其实际代理身份相关联
* 修复（编排）：当 SQLite 无法通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38358 中写入临时文件时，让worker_done解决
* 修复（编排）：删除 https://github.com/stablyai/orca/pull/38349 中 @Jinwoo-H 禁止推送的工人简短行
*修复（编排）：不要让暗淡的提示建议将@Jinwoo-H在https://github.com/stablyai/orca/pull/38370中的邮件作为草稿保存
*修复（编排）：保留@Jinwoo-H在https://github.com/stablyai/orca/pull/38398中Orca重新启动之前键入的草稿的邮件
* 修复（编排）：将邮件保留在 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38451 中输入 OpenCode 的草稿后面
* 修复（终端）：一旦作曲家在 https://github.com/stablyai/orca/pull/38401 中显示 @Jinwoo-H 粘贴的提示，请按 Enter

### 终端、性能和更新

*保持终端连接和喷漆，启动更快，并使旧的 Mac 保持在可以运行的版本上。*

*修复（运行时）：在https://github.com/stablyai/orca/pull/38704中重新连接由@nwparker分离的每个终端守护程序重新连接
* 修复（守护进程）：主进程冻结不再破坏 https://github.com/stablyai/orca/pull/38695 中 @nwparker 的终端守护进程链接
* 修复（终端）：通过打开的同步帧绘制新的 WebGL 画布，而不是由 @nwparker 在 https://github.com/stablyai/orca/pull/37604 中闪烁空白
* 修复（终端）：当 Orca 无法判断 https://github.com/stablyai/orca/pull/38697 中的@AmoabaKelvin 是否正在运行代理时，在关闭选项卡之前询问
* 修复（运行时）：@nwparker 在 https://github.com/stablyai/orca/pull/38706 中的 PTY 状态转换中仅显示标题代理状态
* 终端选项卡显示代理会话的名称，而不是 https://github.com/stablyai/orca/pull/38518 中 @brennanb2025 的第一个提示标题
* 修复（选项卡）：重命名的会话在几秒钟内显示 @brennanb2025 在 https://github.com/stablyai/orca/pull/38628 中的新名称
* 修复（选项卡）：会话自己的名称在 https://github.com/stablyai/orca/pull/38677 中用 @brennanb2025 替换快速命令选项卡名称
* perf(startup): 在 https://github.com/stablyai/orca/pull/38480 中 @OrcaWin 每次启动时停止第二次登录 shell 捕获
* perf(pi): 在 https://github.com/stablyai/orca/pull/38481 中通过 @OrcaWin 在每个终端生成上跳过重写当前托管扩展
* perf(tab-bar)：在https://github.com/stablyai/orca/pull/38467中@OrcaWin写入的不相关存储中重用每个选项卡的活动状态
* 将已删除的 macOS 更新程序保留在其最新的兼容版本上，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/38777 中解释原因

### SSH 和远程服务器

*解释服务器设置失败并保持远程服务器连接。*

* 修复（ssh）：由 @nwparker 在 https://github.com/stablyai/orca/pull/38508 中说明当主机的服务器设置因已知原因停止时该怎么做
* 修复（ssh）：停止重新启动不断崩溃的托管 orcad，并通过 @nwparker 在 https://github.com/stablyai/orca/pull/38308 中说明原因
* 修复（运行时）：显式服务器操作连接断开连接的服务器；将此次发布会命名为 @nwparker 在 https://github.com/stablyai/orca/pull/38530
*修复（运行时）：仅在其操作替换https://github.com/stablyai/orca/pull/38532中的@nwparker的传输后恢复服务器的状态
* 修复（托管服务器）：一旦主机的激活在 https://github.com/stablyai/orca/pull/38700 中由 @nwparker 移动，就会删除过时的更新延迟
*修复（orcad）：仅从工件缓存中逐出真实版本槽，因此共享节点运行时可以在https://github.com/stablyai/orca/pull/38717中@nwparker的升级中幸存下来
* 取消 https://github.com/stablyai/orca/pull/38690 中 @nwparker 打开但从未准备就绪的共享控制套接字
* 修复（服务）：在 https://github.com/stablyai/orca/pull/38515 中通过 @nwparker 探测登录 shell 时保持 `orca serve` 运行
* 在 https://github.com/stablyai/orca/pull/38693 中通过@nwparker 以页面形式而不是整个形式下载授权的主机文件

### 浏览器

*使登录更轻松，浏览器下载可与远程主机配合使用。*

* perf（浏览器）：仅扫描页面表单以查找 https://github.com/stablyai/orca/pull/38468 中 @OrcaWin 导航到的登录文档
*修复（浏览器）：将浏览器下载的工作区主机固定到https://github.com/stablyai/orca/pull/38721中的@nwparker的服务器工作区中
* 修复（浏览器）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38722 中将桌面浏览器桥连接到环境配方 SSH 主机
* 修复（浏览器）：在页面中键入转义符退出元素抓取、查找和密码列表（@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38741 中）

### 源代码控制和编辑器

*更快加载差异，保持 PR 状态准确和文件编辑整洁。*

* 使用共享代理选择器在 https://github.com/stablyai/orca/pull/38019 中由 @brennanb2025 进行源代码管理创作
* 修复（combined-diff）：通过 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38265 中一次加载最多三个 diff 部分（STA-12716）
* 修复（diff）：在https://github.com/stablyai/orca/pull/38266中@Jinwoo-H布置窗格后立即为可见的差异线着色（STA-12770）
* perf（源代码控制）：停止不相关的工作树写入，以重新探测https://github.com/stablyai/orca/pull/38471中@OrcaWin的陈旧冲突徽章
* perf(source-control)：https://github.com/stablyai/orca/pull/38492 中 @OrcaWin 每次伪造检测时读取一次存储库的远程 URL
* perf(source-control): 当https://github.com/stablyai/orca/pull/38476中的@OrcaWin首次加载分支时跳过冗余分支比较
* 保留部分检查详细信息，以免通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38514 中替换完整的 PR 状态
* 通过@nwparker 在 https://github.com/stablyai/orca/pull/38691 中通过存储库的 GitHub 凭证所有者进行路由检查面板 PR 评论编辑/删除
* 修复（git）：仅保留代理终端凭证保护标量，以便 env 磨砂不能通过 https://github.com/stablyai/orca/pull/38716 中的 @brennanb2025 破坏 git
* 修复（文件资源管理器）：在文件夹名称上快速 clicks 切换它，而不是在 https://github.com/stablyai/orca/pull/38321 中由 @AmoabaKelvin 开始重命名
* 修复（编辑器）：在 https://github.com/stablyai/orca/pull/38672 中 @AmoabaKelvin 的 URL 后停止 CJK 标点符号处的富编辑器链接
* 修复（选择器）：@nwparker 在 https://github.com/stablyai/orca/pull/38688 中一次仅打开一个本机文件选择器
* 修复（快速打开）：在https://github.com/stablyai/orca/pull/38736中列出@nwparker选择的主机上的文件夹孪生文件

### 电话和配对设备

*将更多的桌面聊天功能带到手机上。*

*壮举（移动）：将聊天回放到 https://github.com/stablyai/orca/pull/38344 中 @AmoabaKelvin 的较早消息
* 壮举（移动）：将代理的计划固定在 https://github.com/stablyai/orca/pull/38359 中 @AmoabaKelvin 的聊天编辑器上方
* feat（移动）：将图像和长文本粘贴到https://github.com/stablyai/orca/pull/38591中@AmoabaKelvin的聊天编辑器中
* feat(mobile)：在 https://github.com/stablyai/orca/pull/38371 中 @AmoabaKelvin 在聊天编辑器中显示上下文使用环及其细分
* 壮举（移动）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38447 中通过手机设置、暂停、恢复和清除聊天目标
*壮举（移动）：继续在 https://github.com/stablyai/orca/pull/38287 中被 @AmoabaKelvin 打断的 Orca 停止的聊天
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38268 中 @AmoabaKelvin 重新启动应用程序时保留未发送的聊天草稿和技能选择
* feat(mobile)：在https://github.com/stablyai/orca/pull/38264中@AmoabaKelvin的聊天记录中显示后台任务行
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38309 中@AmoabaKelvin 在排队的聊天消息上命名并链接发送代理
* 壮举（移动）：从 https://github.com/stablyai/orca/pull/38303 中的 @AmoabaKelvin 的全屏图像查看器复制、保存和共享图像
* feat(mobile)：通过https://github.com/stablyai/orca/pull/38622中的@AmoabaKelvin从文件浏览器复制文件名或相对路径
* feat(mobile)：询问在 https://github.com/stablyai/orca/pull/33525 中@radut 在聊天中点击的链接在哪里打开
* 壮举（移动）：桌面聊天链接和手机上的代码包装，作者：@AmoabaKelvin，https://github.com/stablyai/orca/pull/38294
* 壮举（移动）：使用 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38611 中共享的 Markdown 渲染器渲染 PR 描述和评论
* feat（移动）：从未登录的聊天中登录，并在https://github.com/stablyai/orca/pull/38295中通过@AmoabaKelvin在作曲家上方命名离线主机
* 修复（移动）：使手机计划批准中的文件链接可由 https://github.com/stablyai/orca/pull/38510 中的 @brennanb2025 操作
* 移动设备：在代理问题中打开文件路径，例如 @brennanb2025 在 https://github.com/stablyai/orca/pull/38620 中的聊天的其余部分
* 修复（移动版）：在 https://github.com/stablyai/orca/pull/38626 中将历史扫描通知与 @AmoabaKelvin 跳过的记录分开显示
* 修复（移动设备）：让 iPad 页面标题远离窗口控件（https://github.com/stablyai/orca/pull/38635 中的 @AmoabaKelvin）
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38699 中的@AmoabaKelvin 在提交时将提交的 IME 文本发送到终端
*修复（移动）：说明为什么设置为聊天的代理在https://github.com/stablyai/orca/pull/38696中由@AmoabaKelvin作为终端打开
* 修复（移动）：当 https://github.com/stablyai/orca/pull/38242 中的 @AmoabaKelvin 无法访问当前桌面时，停止要求更新当前桌面
* 修复（本地聊天）：在 https://github.com/stablyai/orca/pull/38683 中 @AmoabaKelvin 保持桌面上的聊天关闭，远离手机的代理行
*修复（ai-vault-search）：让配对的桌面恢复会话在https://github.com/stablyai/orca/pull/38707中搜索@nwparker的点击

### 工作区、侧边栏和入门

*用更少的 click 组织项目和工作树。*

* 在https://github.com/stablyai/orca/pull/38634中添加@AmethystLiang的折叠和展开所有项目控件
* 通过https://github.com/stablyai/orca/pull/38410中的@AmethystLiang将子工作树创建添加到上下文菜单
* 在https://github.com/stablyai/orca/pull/38423中添加@nwparker对文件夹项目组的刷新操作
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38655 中通过 @AmethystLiang 打开菜单时保持项目标题按钮静止
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38705 中通过 @brennanb2025 将调整大小控件保留在工作区窗格上方
*修复（新工作空间）：在https://github.com/stablyai/orca/pull/38680中由@nwparker恢复代理选择器上的右click“设置为默认值”
* 在https://github.com/stablyai/orca/pull/38378中由@Jinwoo-H在桌面重新启动后保留嵌套的服务器工作区嵌套
* 在 https://github.com/stablyai/orca/pull/38478 中更新 @AmethystLiang 的聊天 ui 公告

### 插件 & CLI

*扩展插件并保持CLI输出电流。*

* 壮举（插件）：在 https://github.com/stablyai/orca/pull/38524 中添加 @nwparker 许可的桌面外观出版物
* perf(plugins)：在 https://github.com/stablyai/orca/pull/38463 中通过 @OrcaWin 读取批量 Git 调用中的目录图像
* 修复（cli）：帐户列表 --json 刷新 https://github.com/stablyai/orca/pull/38314 中@nwparker 过时的使用情况而不是无

### 测试、CI 和维护

*修剪低价值测试，按所有者重新组织代码并维护 CI。*

* 测试：通过https://github.com/stablyai/orca/pull/38346中的@OrcaWin删除低值设置UI和持久化管道
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38356 中删除低价值渲染器库存和模拟管道
* 测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38351中的低值终端、VM和语音设置测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38360 中删除低价值浏览器和仪表板测试清单
* 测试：删除低价值仪表板并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38362 中预览测试
* 测试：删除https://github.com/stablyai/orca/pull/38364中@OrcaWin的低值仪表板状态和配置文件测试
* 测试：在 https://github.com/stablyai/orca/pull/38366 中删除@OrcaWin 的低值编辑器道具和辅助测试
* 测试：删除https://github.com/stablyai/orca/pull/38368中@OrcaWin的低价值编辑器库存和模拟测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38372 中删除多余的 Markdown 和编辑器测试
* 重构（工具）：由 @nwparker 在 https://github.com/stablyai/orca/pull/38130 中组织构建、CI 和测试所有者
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38375 中删除多余的编辑器助手和模拟套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38377 中修剪冗余笔记本和编辑器测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38383 中删除假菜单和弱光奇偶校验套件
* 测试：修剪合成视口并通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38387 中保存回调测试
* 测试：删除https://github.com/stablyai/orca/pull/38384中@OrcaWin的模拟图像导入和链接路由套件
* 测试：在 https://github.com/stablyai/orca/pull/38393 中修剪渲染器模拟和 @OrcaWin 的私人工作断言
* 测试：在 https://github.com/stablyai/orca/pull/38391 中删除 @OrcaWin 的仅模拟编辑器删除和重试套件
* 重构（中继）：https://github.com/stablyai/orca/pull/38374 中 @nwparker 的组路由、转发和连接所有者
* 重构（native-chat）：删除 https://github.com/stablyai/orca/pull/38395 中 @nwparker 无法访问的答案输入粘贴原始分支
* 测试：在 https://github.com/stablyai/orca/pull/38396 中删除 @OrcaWin 的渲染器标志清单和伪造的 React 套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38399 中修剪项目视图清单和重复的对话框案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38402 中删除本机聊天库存和多余的作曲家案例
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38405 中修剪聊天渲染库存和合成布局套件
* 测试：删除 https://github.com/stablyai/orca/pull/38408 中 @OrcaWin 的低值成绩单和权限选择器测试
* 重构（ci）：将分片计时目录与@nwparker在https://github.com/stablyai/orca/pull/38409中的分片并置
* 测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/38414中修剪聊天队列、提示和收据测试清单
* 测试：在 https://github.com/stablyai/orca/pull/38417 中删除 @OrcaWin 的低价值聊天会话和选择器测试
*测试：删除https://github.com/stablyai/orca/pull/38420中@OrcaWin的低价值附件和工具演示测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38422 中修剪低价值会话桥和发送器测试
* 测试：在 https://github.com/stablyai/orca/pull/38428 中修剪低价值的本机聊天附件和标头测试（@OrcaWin）
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38426 中修剪低价值的作曲家和草案测试清单
* 测试：在 https://github.com/stablyai/orca/pull/38430 中修剪低价值聊天所有权和 @OrcaWin 的成绩单测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38441 中修剪低价值结构化会话和状态测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38438 中修剪低价值聊天传输和子代理测试
* 测试：删除https://github.com/stablyai/orca/pull/38448中@OrcaWin的低价值聊天钩子测试
* 测试：删除https://github.com/stablyai/orca/pull/38444中@OrcaWin的低值作曲家和队列测试
* 测试：删除https://github.com/stablyai/orca/pull/38453中@OrcaWin的低价值聊天钩子测试
* 重构（工具）：https://github.com/stablyai/orca/pull/38407 中的 @nwparker 由域所有者组织剩余的脚本
* 测试：删除https://github.com/stablyai/orca/pull/38454中@OrcaWin的低价值聊天钩子测试
* 测试：删除https://github.com/stablyai/orca/pull/38474中@OrcaWin的低值源连接测试
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/38466 中的低值渲染器挂钩和选择器测试
* 测试：删除https://github.com/stablyai/orca/pull/38477中@OrcaWin的低价值编排和插件测试
* 测试：删除https://github.com/stablyai/orca/pull/38483中@OrcaWin的低值渲染器库存测试
* 测试：删除https://github.com/stablyai/orca/pull/38490中@OrcaWin的低价值端口和AI Vault测试
* 测试：删除https://github.com/stablyai/orca/pull/38493中@OrcaWin的低价值会话启动和演示测试
* 重构（守护进程）：https://github.com/stablyai/orca/pull/38462 中的 @nwparker 组端点、提供者、会话和传输所有者
* 测试：删除低价值的AI Vault并通过@OrcaWin在https://github.com/stablyai/orca/pull/38499中进行评论测试
*测试：删除https://github.com/stablyai/orca/pull/38500中@OrcaWin的低值检查面板测试
* 测试：删除https://github.com/stablyai/orca/pull/38503中@OrcaWin的低价值审查操作和文件浏览器测试
* 测试：删除 https://github.com/stablyai/orca/pull/38506 中@OrcaWin 的低值文件浏览器测试
* 重构（运行时）：通过 https://github.com/stablyai/orca/pull/38504 中的 @nwparker 定义所有者来对集成命令进行分组
*测试：在https://github.com/stablyai/orca/pull/38507中删除@OrcaWin的低值侧边栏测试
*测试：删除https://github.com/stablyai/orca/pull/38511中@OrcaWin的低价值源代码控制测试
*测试：删除https://github.com/stablyai/orca/pull/38512中@OrcaWin的低价值源代码控制同步测试
* 测试：删除https://github.com/stablyai/orca/pull/38516中@OrcaWin的低价值应用程序外壳和侧边栏测试
* 测试：删除https://github.com/stablyai/orca/pull/38520中@OrcaWin的低价值侧边栏工作流程测试
* 测试：删除低价值的侧边栏活动并审查 @OrcaWin 在 https://github.com/stablyai/orca/pull/38521 中的测试
* 重构（运行时）：通过@nwparker在https://github.com/stablyai/orca/pull/38517中对终端执行所有者进行分组
* 测试：删除低值侧边栏卡并通过@OrcaWin在https://github.com/stablyai/orca/pull/38523中进行拖动测试
* 测试：删除低值侧边栏分组并列出 @OrcaWin 在 https://github.com/stablyai/orca/pull/38525 中的测试
*测试：删除https://github.com/stablyai/orca/pull/38527中@OrcaWin的低值状态栏和选项卡栏测试
* 测试：删除https://github.com/stablyai/orca/pull/38526中@OrcaWin的低值侧边栏和技能测试
*测试：删除https://github.com/stablyai/orca/pull/38531中@OrcaWin的低值选项卡栏和GitHub任务测试
*测试：删除https://github.com/stablyai/orca/pull/38536中@OrcaWin的低值终端运行时测试
*测试：删除https://github.com/stablyai/orca/pull/38544中@OrcaWin的低值终端运行时测试
*测试：删除https://github.com/stablyai/orca/pull/38548中@OrcaWin的低价值终端准备测试
* 测试：在 https://github.com/stablyai/orca/pull/38552 中删除 @OrcaWin 的低价值本机帮助程序测试
*测试：删除https://github.com/stablyai/orca/pull/38553中@OrcaWin的低价值本机验证测试
* 测试：删除https://github.com/stablyai/orca/pull/38557中@OrcaWin的低价值本机所有权和谓词测试
* 重构（运行时）：https://github.com/stablyai/orca/pull/38534 中的 @nwparker 组工作区创建和生命周期所有者
* 测试：删除 https://github.com/stablyai/orca/pull/38562 中@OrcaWin 的定速继电器负载基准和琐碎的防护示例
*测试：删除https://github.com/stablyai/orca/pull/38568中@OrcaWin的低值中继准入模拟和守卫示例
*测试：删除https://github.com/stablyai/orca/pull/38572中@OrcaWin的低价值中继测试库存和模拟工作套件
* 重构（运行时）：由 @nwparker 在 https://github.com/stablyai/orca/pull/38565 中对结构化代理运行时所有者进行分组
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/38577中删除冗余的小区准入和保留测试套件
*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/38578中删除低价值主机控制和连接测试库存
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38580 中删除低价值中继 SQL 和生命周期测试库存
* 重构（主要）：通过在 https://github.com/stablyai/orca/pull/38576 中通过 @nwparker 定义所有者来对浏览器运行时代码进行分组
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38582 中删除低价值构建和 CI 测试库存
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38587 中删除低价值工作流程和编译器测试清单
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38593 中删除低价值构建和打包测试库存
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38596 中删除低价值移动和脚本测试库存
* 重构（主要）：https://github.com/stablyai/orca/pull/38584 中的 @nwparker 组 client RPC 配对和主机运行时所有者
* 测试：删除https://github.com/stablyai/orca/pull/38598中@OrcaWin的低价值移动浏览器测试
* 测试：删除https://github.com/stablyai/orca/pull/38600中@OrcaWin的低价值移动浏览器测试
* 重构：https://github.com/stablyai/orca/pull/38602 中@nwparker 按具体所有者组织运行时语义操作
*测试：删除https://github.com/stablyai/orca/pull/38605中@OrcaWin的209个低值测试和20个整个套件
*测试：删除https://github.com/stablyai/orca/pull/38613中@OrcaWin的141个低价值测试和13个完整套件
*测试：删除https://github.com/stablyai/orca/pull/38614中@OrcaWin的143个低值测试和13个完整套件
*测试：删除https://github.com/stablyai/orca/pull/38616中@OrcaWin的75个低价值测试和11个完整套件
*测试：删除https://github.com/stablyai/orca/pull/38619中@OrcaWin的181个低值测试和15个完整套件
*测试：删除https://github.com/stablyai/orca/pull/38623中@OrcaWin的91个低价值测试和15个整个套件
*测试：删除https://github.com/stablyai/orca/pull/38629中@OrcaWin的31个低价值测试和13个完整套件
*测试：删除https://github.com/stablyai/orca/pull/38631中@OrcaWin的60个低价值测试和13个完整套件
* 测试：删除 https://github.com/stablyai/orca/pull/38637 中 @OrcaWin 的 98 个低价值移动测试和 15 个完整套件
* 测试：删除 @OrcaWin 在 https://github.com/stablyai/orca/pull/38642 中的 79 个低价值云、挂钩和搜索测试
*测试：删除https://github.com/stablyai/orca/pull/38647中@OrcaWin的180个低值扫描仪、密码和浏览器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38650中的156个低值浏览器测试
* 通过 @buf0-bot[bot] 在 https://github.com/stablyai/orca/pull/31749 中更新自述文件下载徽章
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38656中的229个低值浏览器主机测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38659中的109个低值浏览器cookie测试
* 测试：删除https://github.com/stablyai/orca/pull/38664中@OrcaWin的171个低值浏览器预览测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38668中的129个低价值浏览器扩展测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38678中的237个低值浏览器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38681中的216个低值浏览器网络和会话测试
*测试：删除https://github.com/stablyai/orca/pull/38685中@OrcaWin的92个低值继电器测试
* 测试：在 https://github.com/stablyai/orca/pull/38692 中删除 @OrcaWin 的 125 个低值中继和构建脚本测试
* 测试：删除 https://github.com/stablyai/orca/pull/38694 中 @OrcaWin 的 269 个低价值工作流程、构建和本机测试
*测试：删除https://github.com/stablyai/orca/pull/38712中@OrcaWin的166个低价值预构建和发布测试
*测试：删除https://github.com/stablyai/orca/pull/38723中@OrcaWin的112个低值静态门和运行时测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38725中的133个低价值工作流程、移动和CLI测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38733中的184个低价值移动、CLI和ACP测试
* 自述文件：在 https://github.com/stablyai/orca/pull/38726 中由 @Jinwoo-H 刷新英雄和特色动画
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/38738中的161个低值ACP测试
* 测试：删除 https://github.com/stablyai/orca/pull/38739 中 @OrcaWin 的 220 个低值钩子、时间线和 Ruby 测试
* ci：自动合并 https://github.com/stablyai/orca/pull/38658 中@Jinwoo-H 的自述文件下载徽章 PR
*测试：删除https://github.com/stablyai/orca/pull/38748中@OrcaWin的419个低值挂钩和搜索测试

## 新贡献者

* @radut 在 https://github.com/stablyai/orca/pull/33525 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.250...v1.4.251

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.251` · 📅 发布：2026-11-06 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.251)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
