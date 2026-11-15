---
title: "orca v1.4.248"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.248"
version: "v1.4.248"
published: "2026-11-04"
type: "patch"
lang: "zh"
---

# orca v1.4.248

## 更可靠的终端、可靠的聊天和更简单的人工智能选择 ✨

- 🖥️ **更可靠的终端：** 保持活动的远程流连接，在守护进程重新启动时保留代理身份，改进 Windows Codex 的有序移动输入和长消息，并在字体加载后正确渲染 Nerd Font 符号。
- 💬 **更可靠的对话：** 在提示后保持流式回复，在轮流失败时保留排队的后续行动，并将粘贴的文本和终端草稿与聊天发送分开。
- 🎛️ **选择 AI 为您编写的方式：** 从源代码管理设置中选择提交消息、拉取请求描述、分支名称和聊天名称的模型和工作量。
- ⚡ **减少不必要的聊天工作：** 预览更新避免复制完整加载的对话，并且此版本删除了可能会阻碍大型聊天的实时历史记录清理。
- 📱 **更好的电话连续性：** 从缓存的消息中重新打开聊天，保持选项最新，并更可靠地将长消息发送到 Windows Codex。
- ⏳ **选择更新到达时间：** 在“设置”中添加可选的更新延迟，并提供一次性选项来跳过等待。
- 📝 **编辑器和工作区改进：** 选择保存格式、搜索主题选择器，并在聊天选项卡上使用熟悉的右 click 操作。

## 亮点

- **终端：** 输出流动时远程流保持连接，代理身份在守护程序重新启动后仍然存在，移动输入按顺序进行管道传输，长电话消息到达 Windows Codex。一旦字体加载，Nerd Font 符号就会重新绘制，关闭的终端工作人员可以从他们的编排卡中重新打开。
- **聊天连续性：** 流式回复在他们回答提示后保留。轮次失败后，后续操作仍会排队，发送被拒绝时会识别过期附件，并且可以从结构化聊天中打开粘贴的文本。
- **代理启动和选择：** 第一次尝试后显示最终启动拒绝，而不是重复重试；暂时的故障仍然可以恢复。当您未选择覆盖时，聊天会保留配置的工作量，并且源代码管理文本操作使用“模型”和“工作量”菜单。
- **电话：** 缓存的聊天在获取更改之前重新打开。聊天选项、终端设置、分支和拉取请求详细信息刷新更可靠；长电话消息到达 Windows Codex，桌面服务器托管的浏览器选项卡可以流式传输到电话。
- **更新和 Windows：** 选择更新延迟，在更新期间保留移动的 Windows 安装位置，并在安装不完整时获得更清晰的解释。
- **编辑器和导航：** 启用保存格式、搜索主题选择、突出显示选定的 Markdown 表格单元格以及在编辑器选项卡外使用图像缩放快捷方式。
- **编排和插件：** Orchestration 面板再次作为实验性选择提供。关闭的终端工作人员可以从他们的卡中重新打开，本机聊天接收完整的编排消息，并且启用的状态栏插件使他们的工作人员保持运行。
- **性能和可靠性：** 聊天预览更新避免了冗余的完整历史记录副本，缓存文本滚动避免了整个文件布局更新，诊断日志记录使用更少的数据。预览更改消除了不必要的工作；没有声称整个应用程序的延迟有所改善。

## 兼容性和升级说明
- **更新延迟是可选的：** 设置 → 常规 → 更新提供无、1、3、7、14 或 30 天。 None 仍为默认值，并且 **Skip Delay Once** 会绕过保留的更新。
- **保存格式是可选的：** 现有编辑行为保持不变，直到您启用它。
- **编排面板：** 此版本恢复了早期面板禁用后的实验性选择加入。
- **手机更改：** 手机应用程序更改需要更新的 Orca Mobile 应用程序以及兼容的桌面或服务器。
- **保存的聊天记录：** 之前添加的实时历史记录清理已回滚。现有保存的对话，包括已经压缩的历史记录，仍然可读。

## 已知问题

**保存的聊天存储：** 实时历史记录压缩已暂停，因此聊天存储可以随着对话的继续而增长。此版本并不声称消除了聊天停滞的所有来源。

**较长的更新延迟：** 如果有 14 天或 30 天的延迟，版本可能会在符合条件之前离开更新源。无和**跳过延迟一次**仍然可用。

**旧配对服务器上的 GitHub 问题：** 通过存储库或 URL 打开问题可能会使标题、标签和受让人编辑不可用。本地和项目始发路线不受影响； **在 GitHub 上打开**仍然可用。

**插件命令替换：** Orca 使用普通命令代替后，替换内置命令的插件仍然可以完成，导致操作发生两次。

---

## 产品体验

### 原生聊天

*保持消息有序，保留配置的选择，并避免不必要的完整历史记录工作。*

* 保留 @brennanb2025 在 https://github.com/stablyai/orca/pull/37322 中手动压缩造成的提供程序失败原因
* 在 https://github.com/stablyai/orca/pull/37409 中 @brennanb2025 开始回复之前显示 Claude 正在压缩的时间
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/37546 中 @AmoabaKelvin 将长翻译的占位符包装在代理设置提示中
* 修复（native-chat）：当https://github.com/stablyai/orca/pull/37549中保存的记录密钥被@AmoabaKelvin损坏时重置历史记录
* 修复了 @brennanb2025 在 https://github.com/stablyai/orca/pull/37555 中与对话一起保存的 Grok 聊天屏幕截图
* 在 https://github.com/stablyai/orca/pull/37590 中保留由 @brennanb2025 标记为发送的待处理本机聊天消息
* 修复（native-chat）：通过 https://github.com/stablyai/orca/pull/37565 中的 @AmoabaKelvin 向代理发送 /compact 指令
* 修复（native-chat）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37552 中拒绝发送时，命名并标记过期附件
* 在 https://github.com/stablyai/orca/pull/35636 中打开 @brennanb2025 在结构化聊天中粘贴的文本
* 在 https://github.com/stablyai/orca/pull/37543 中接受 @brennanb2025 的输入之前，请尊重所选的聊天权限
* 修复（native-chat）：当https://github.com/stablyai/orca/pull/37406中的@phatloi0010关闭终端匹配时，尊重editorFontFamily的代码块
* 从 https://github.com/stablyai/orca/pull/37715 中的@AmethystLiang 从聊天工具栏中删除重复的关闭按钮
* 在https://github.com/stablyai/orca/pull/37181中@brennanb2025在代理轮流失败后保留排队的后续行动
* 修复（聊天）：在 https://github.com/stablyai/orca/pull/37773 中 @AmoabaKelvin 的提示后继续流式回复
* 修复（聊天）：隔离 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37774 中从终端草稿发送的内容
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/37797 中没有选择聊天工作时，尊重配置的工作
* 避免在 https://github.com/stablyai/orca/pull/37922 中复制 @brennanb2025 的仅预览更新的聊天记录

### 代理和编排

*及时显示启动拒绝，保持工人沟通完整，并恢复实验小组选择加入。*

* 修复（编排）：本机聊天通过 https://github.com/stablyai/orca/pull/28567 中的 @brennanb2025 获取整个编排消息，而不是检查指针
* 在 https://github.com/stablyai/orca/pull/36978 中 @Jinwoo-H 的后续操作拿走其终端后，停止将某个工人列为保留的工人
* 修复（编排）：当该终端仍绑定到 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37548 中的较旧运行时，让协调器到达其工作人员
* 修复（agent-hooks）：在 https://github.com/stablyai/orca/pull/37556 中 @AmoabaKelvin 的钩子之间保留 Claude 的开始文件夹和工作量
* 告诉编排工作人员何时通过 https://github.com/stablyai/orca/pull/37550 中的 @Jinwoo-H 向协调员发送消息
* @Jinwoo-H 在 https://github.com/stablyai/orca/pull/37210 中从其编排卡重新打开已关闭的终端工作人员
* 在 https://github.com/stablyai/orca/pull/37541 中通过 @brennanb2025 将代理消息状态标记为圆圈
*修复：删除https://github.com/stablyai/orca/pull/37560中@brennanb2025的编排面板CPU放大
* 修复（代理）：停止代理行将粘贴的数据显示为 https://github.com/stablyai/orca/pull/37551 中 @AmoabaKelvin 的名称
* 修复（帐户）：阻止 Claude 窗格共享会话由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37564 中重新启动
* 修复（编排）：当代理退出其 shell 时，@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37563 中立即失败工作启动
* 代理消息卡通过 https://github.com/stablyai/orca/pull/36660 中的 @brennanb2025 在与侧边栏相同的商店中找到发件人的代理和状态
* 修复（omp）：保留 https://github.com/stablyai/orca/pull/37665 中 @AmoabaKelvin 被自动忙轮拒绝的提示
* 使用本机子菜单由 @nwparker 在 https://github.com/stablyai/orca/pull/37576 中进行新选项卡代理设置
* 恢复代理启动提交图标并清除陈旧的悬停突出显示，由 @nwparker 在 https://github.com/stablyai/orca/pull/37675 中完成
* 让代理消息名称使用https://github.com/stablyai/orca/pull/37657中@brennanb2025的可用卡宽度
* 在 https://github.com/stablyai/orca/pull/37616 中恢复 @brennanb2025 实验性选择加入的 Orchestration 面板
* 修复（cli）：转发 OpenCode --method 和 --answer 来自 @Alonsojrr14 在 https://github.com/stablyai/orca/pull/37622 中添加的帐户
* 停止重试 https://github.com/stablyai/orca/pull/37213 中 @brennanb2025 的最终本机代理启动拒绝

### 电话

*从缓存的消息中重新打开聊天并改进设置、源代码控制、浏览器和终端连续性。*

* 修复（移动）：在 https://github.com/stablyai/orca/pull/37554 中 @AmoabaKelvin 返回聊天时立即显示聊天的最后选项
* feat(native-chat)：从缓存的行中重新打开电话聊天，并仅获取https://github.com/stablyai/orca/pull/37561中@AmoabaKelvin更改的内容
*修复（移动）：在https://github.com/stablyai/orca/pull/37626中@AmoabaKelvin选择选项之前等待运行时准备就绪
* 修复（移动版）：@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37629 每次打开时获取 GitLab 任务详细信息
* perf(mobile)：将插件验证排除在https://github.com/stablyai/orca/pull/36914中@gentslava的复数查找之外
* 修复（移动）：在 https://github.com/stablyai/orca/pull/37677 中 @AmoabaKelvin 保留主机终端在 toast 中创建错误
* 修复（移动）：在 https://github.com/stablyai/orca/pull/37690 中@AmoabaKelvin 在配对主机之间重用捆绑包
* 修复（移动）：刷新当前分支并通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37694 中拉取请求
*修复（移动）：需要匹配控制探针@AmoabaKelvin在https://github.com/stablyai/orca/pull/37764的回复
* 修复（移动版）：让缓慢的自动化目录读取由 @brennanb2025 在 https://github.com/stablyai/orca/pull/37669 中完成
* 修复（移动）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37772 中刷新打开的终端设置
* 修复（移动版）：澄清 PR 细节并在 https://github.com/stablyai/orca/pull/37689 中通过 @AmoabaKelvin 一次性展示全部舞台
* 修复（移动）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37705 中流式传输桌面托管的服务器浏览器选项卡
* 修复（移动版）：解释文件拒绝并复制 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37762 中的完整路径

### 源代码控制、任务和集成

*选择人工智能写作模型和工作量，并保持评论和任务细节最新。*

* 在 https://github.com/stablyai/orca/pull/37156 中 @brennanb2025 审核操作失败后刷新检查
* 在 https://github.com/stablyai/orca/pull/37204 中的@brennanb2025 的工作区副本上保留审查注释更改
* 将桌面分支拉取请求保留在 @brennanb2025 在 https://github.com/stablyai/orca/pull/36172 中打开的存储库中
* 修复：在 https://github.com/stablyai/orca/pull/37562 中隐藏 @AmethystLiang 的仅元数据 PR 审查摘要
* 在 https://github.com/stablyai/orca/pull/37559 中显示@AmethystLiang 的检查修复操作以及冲突解决方案
* 修复（source-control-ai）：副驾驶生成在 https://github.com/stablyai/orca/pull/36174 中 @OrcaWin 计划隐藏的模型上不再失败
* 阅读@brennanb2025 在 https://github.com/stablyai/orca/pull/37656 中阅读一张用于规划的完整线性票和用于排队的普通票
* 在 https://github.com/stablyai/orca/pull/37663 中 @brennanb2025 的一个问题查询中加载线性抽屉字段
* perf（线性）：通过https://github.com/stablyai/orca/pull/37667中的@brennanb2025加载带有父页面的嵌套子页面
* 在工作区中使用共享代理选择器，并由 @brennanb2025 在 https://github.com/stablyai/orca/pull/35802 中启动源代码管理
* 在 https://github.com/stablyai/orca/pull/37205 中为 @brennanb2025 选择源代码控制文本操作的模型和工作量

### 工作区、侧边栏和选项卡

*使工作区卡片、选项卡操作和结帐选择更加一致。*

* 聊天选项卡通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37442 中获取终端的正确 click 操作
* 标签宽度为 300 像素，作者：@AmethystLiang，https://github.com/stablyai/orca/pull/37523
* 修复：在 https://github.com/stablyai/orca/pull/37542 中使用 @AmethystLiang 的工作区源结果的设计系统变体
* 从 @nwparker 在 https://github.com/stablyai/orca/pull/37647 中的模板（卡片插件，第 1 阶段）绘制工作区卡片
* 在 https://github.com/stablyai/orca/pull/37672 中使用 @nwparker 的紧凑工作树身份图标
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37678 中修复工作树图标鼠标焦点悬停
*修复（新工作空间）：在https://github.com/stablyai/orca/pull/36180中由@OrcaWin列出创建工作树选择器中的每个相同主机签出
* 在 https://github.com/stablyai/orca/pull/37730 中 @brennanb2025 将合并的链接 PR 保留在工作区卡片中的紫色
* 修复（运行时）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37768 中的扫描超时保留工作树名称

### 编辑器、文件和浏览器

*添加可选的保存格式、可搜索主题以及更可靠的文件和浏览器操作。*

* 修复（编辑器）：通过 @bokeeeey 在 https://github.com/stablyai/orca/pull/37521 中将 Cmd/Ctrl +/-/0 发送到编辑器选项卡外部打开的图像查看器
* 修复（浏览器）：当服务器页面通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37547 中更改其 URL 时，更新配对地址栏
* feat(browser): --expect-url 当页面位于 https://github.com/stablyai/orca/pull/37575 中的 @AmoabaKelvin 的另一个 URL 时拒绝浏览器命令
* 修复（编辑器）：在 https://github.com/stablyai/orca/pull/37624 中突出显示 @AmoabaKelvin 选定的 Markdown 表格单元格
* 在 https://github.com/stablyai/orca/pull/37644 中通过 @brennanb2025 滚动缓存文本时避免整个文件布局更新
* 修复（combined-diff）：图像行在其自己的边界中加载，因此组合的 diff 无法循环到 @OrcaWin 在 https://github.com/stablyai/orca/pull/31552 中的 React #185
* 使设置主题选择器可通过 https://github.com/stablyai/orca/pull/37692 中的 @nwparker 进行搜索
*壮举（编辑器）：在https://github.com/stablyai/orca/pull/37716中@nwparker添加选择加入格式

### 更新、终端和远程工作

*提供可选的更新延迟并改进 Windows 安装、终端输入和远程连续性。*

* feat(updater)：通过 @nwparker 在 https://github.com/stablyai/orca/pull/37447 中添加可配置的更新延迟
* 修复（中继）：在 SIGTERM 时立即退出，而不是等待 https://github.com/stablyai/orca/pull/37443 中 @nwparker 的 docker 停止超时
* 修复（dsh）：当配置文件缺少 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37446 中的钩子包时，将 DSH 钩子显示为部分
* 修复（窗口）：不要在 @nwparker 在 https://github.com/stablyai/orca/pull/37676 中启动退出拆卸的进程中打开窗口
* 修复（终端）：在 https://github.com/stablyai/orca/pull/37688 中 @nwparker 加载捆绑的 Nerd Font 符号后，重新绘制 WebGL 图集
* 修复（终端）：通过 https://github.com/stablyai/orca/pull/35558 中的 @OrcaWin 将长电话消息发送到 Windows Codex，而不是将它们留在输入框中
* 修复（窗口）：在 https://github.com/stablyai/orca/pull/36827 中解决 Windows 渲染器启动拒绝问题，而不是在 1 秒后由 @OrcaWin 进行提示
* 修复（windows）：通过 https://github.com/stablyai/orca/pull/34447 中的 @OrcaWin 解释未完成的安装而不是崩溃循环窗口
* 修复（更新程序）：当 @OrcaWin 在 https://github.com/stablyai/orca/pull/36831 中更新时，将移动的 Windows 安装保留在适当的位置
* 修复（linux）：在https://github.com/stablyai/orca/pull/36183中@OrcaWin继承的零RLIMIT_RTTIME下拒绝实时音频调度
*修复（远程终端）：阻止流看门狗拆除https://github.com/stablyai/orca/pull/33971中@OrcaWin的输出仍在流动的终端
*修复（中继）：承认@AmoabaKelvin在https://github.com/stablyai/orca/pull/37687中重新分配的组合主机
* 修复（终端）：在 https://github.com/stablyai/orca/pull/37703 中 @AmoabaKelvin 保留守护进程死亡时的特工身份
* 修复（终端）：管道由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37738 中订购移动输入
* 修复（运行时）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37771 中的配对撤销分叉密钥

### 自动化和插件

*保留有效的历史记录并保持批准的挂钩和启用的插件工作人员的工作。*

* 在 https://github.com/stablyai/orca/pull/37336 中由 @brennanb2025 修复损坏的配置文件时保留有效的自动化历史记录
* 修复(cli): 让worktree set --comment "" 清除https://github.com/stablyai/orca/pull/37515中@maxmilian的注释
* 修复（hooks）：当@maxmilian在https://github.com/stablyai/orca/pull/37520中勾选Always trust时，保留批准的脚本哈希
* 在 https://github.com/stablyai/orca/pull/37367 中运行 @brennanb2025 挑选的用于 AI 文本生成的 Claude 模型
*插件：在https://github.com/stablyai/orca/pull/37630中由@nwparker启用时保持状态栏插件的工作人员运行

### 已恢复

*删除阻止实时聊天历史记录清理和未使用的代码。*

* 在https://github.com/stablyai/orca/pull/37759中恢复@Jinwoo-H未使用的代码
* 删除 https://github.com/stablyai/orca/pull/37873 中 @brennanb2025 阻止的实时聊天历史记录清理

### 测试、CI 和维护

*维护测试、检查和内部模块组织。*

*测试：通过@OrcaWin在https://github.com/stablyai/orca/pull/37522中删除245个低值渲染器案例
*测试：删除https://github.com/stablyai/orca/pull/37526中@OrcaWin的114个低值渲染器测试
*测试：删除https://github.com/stablyai/orca/pull/37530中@OrcaWin的203个低值渲染器测试
*测试：删除https://github.com/stablyai/orca/pull/37533中@OrcaWin的89个低值渲染器测试
*测试：删除https://github.com/stablyai/orca/pull/37537中@OrcaWin的160个低值渲染器测试
*测试：删除https://github.com/stablyai/orca/pull/37539中@OrcaWin的170个低值渲染器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37544中的659个低值渲染器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37545中的389个低值渲染器测试
*测试：删除https://github.com/stablyai/orca/pull/37553中@OrcaWin的235个低值渲染器运行时测试
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/37558 中进行组工作区清理和空间诊断
* 测试：https://github.com/stablyai/orca/pull/37579 中的 @AmethystLiang 将浮动选项卡宽度覆盖范围与 300px 上限对齐
*测试：删除https://github.com/stablyai/orca/pull/37566中@OrcaWin的399个低值渲染器运行时测试
* 测试：删除 https://github.com/stablyai/orca/pull/37581 中 @OrcaWin 的 407 低值会话和布局测试
*测试：删除https://github.com/stablyai/orca/pull/37583中@OrcaWin的215个低值渲染器存储测试
*测试：删除https://github.com/stablyai/orca/pull/37586中@OrcaWin的220个低值代理状态和浏览器测试
* ci：拒绝 @brennanb2025 在 https://github.com/stablyai/orca/pull/37584 中退役的 E2E 源路由目标
* 测试：删除https://github.com/stablyai/orca/pull/37591中@OrcaWin的128个低值编辑器和工作区状态测试
* 测试：删除https://github.com/stablyai/orca/pull/37595中@OrcaWin的153个低值编辑器缓冲区和布局测试
*测试：删除https://github.com/stablyai/orca/pull/37596中@OrcaWin的174个低值工作区和GitHub缓存测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37597中的147个低价值提供商商店测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37598中的102个低值渲染器存储测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37602中的64个低值渲染器目录测试
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/37600 中对桌面集成和生命周期所有者进行分组
* 测试：删除 https://github.com/stablyai/orca/pull/37603 中 @OrcaWin 的 61 个低值渲染器存储测试
* 重构：https://github.com/stablyai/orca/pull/37606 中的 @nwparker 组主机存储和工作基础设施
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37608中的152个低值渲染器存储测试
* 重构：https://github.com/stablyai/orca/pull/37612 中 @nwparker 的组代理启动和工作区挂钩所有者
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37613中的211个低值渲染器存储测试
* 重构：https://github.com/stablyai/orca/pull/37614 中 @nwparker 的小组工作区创建和准备所有者
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/37620 中删除群组工作空间和退休所有者
*修复（历史）：保留@AmoabaKelvin在https://github.com/stablyai/orca/pull/37628中不可读的转录错误
* 测试：删除 https://github.com/stablyai/orca/pull/37623 中 @OrcaWin 的 427 个低值渲染器存储测试
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/37632 中整合更新程序生命周期和发布所有者
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37638中的164个低值渲染器存储测试
* 测试：将移动聊天返回与 @nwparker 在 https://github.com/stablyai/orca/pull/37645 中保存的权限意图对齐
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37639中的139个低值渲染器存储测试
* 测试（中继）：仅在 https://github.com/stablyai/orca/pull/37636 中的 @nwparker 开始关闭后发送重复的 SIGTERM
* 修复（i18n）：由 @Tomk2d 在 https://github.com/stablyai/orca/pull/37460 中更正 Host、Idle、Actions 和 Source 的韩语措辞
* 修复（终端）：通过 @pqminh27 在 https://github.com/stablyai/orca/pull/37449 中保留 HTTP 链接中 IPv6 主机的右括号
*测试：删除https://github.com/stablyai/orca/pull/37648中@OrcaWin的131个低值渲染器存储测试
* 重构：https://github.com/stablyai/orca/pull/37641 中 @nwparker 的组工作区目录和执行主机所有者
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37658中的75个低值渲染器存储测试
* 测试：删除 https://github.com/stablyai/orca/pull/37668 中 @OrcaWin 的 194 个低值渲染器 Web 测试
* 测试：删除 https://github.com/stablyai/orca/pull/37673 中 @OrcaWin 的 78 个低值共享监听器测试
* 测试：删除 https://github.com/stablyai/orca/pull/37686 中 @OrcaWin 的 153 个低值共享钩子测试
* 重构（主要）：https://github.com/stablyai/orca/pull/37660 中 @nwparker 的生命周期所有者对终端进行分组支持
* 测试（线性）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37711 中修复子查询选择装置
*测试：删除https://github.com/stablyai/orca/pull/37695中@OrcaWin的474个低价值共享代理测试
* perf(ci)：从https://github.com/stablyai/orca/pull/37699中的@nwparker的PR关键路径中删除影子规划
* 重构（主要）：通过https://github.com/stablyai/orca/pull/37722中的@nwparker组织WSL发现文件系统和执行所有者
* 重构（主要）：https://github.com/stablyai/orca/pull/37728 中 @nwparker 分组 WSL 主机和 orcad 生命周期所有者
* 重构(ci)：由 @nwparker 在 https://github.com/stablyai/orca/pull/37737 中在一处导出选定的单元规划草案
* 重构（ai-vault）：由 @nwparker 在 https://github.com/stablyai/orca/pull/37742 中对历史扫描仪和服务所有者进行分组
* 修复（聊天）：在 https://github.com/stablyai/orca/pull/37776 中@AmoabaKelvin 的回执上显示设备名称
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37724中的103个低价值共享代理测试
* 重构（git）：https://github.com/stablyai/orca/pull/37783 中的@nwparker 对工作树操作和引用所有者进行分组
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37729中的174个低价值共享代理测试
*测试：删除https://github.com/stablyai/orca/pull/37791中@OrcaWin的167个低价值共享代理测试
* 重构（设置）：@nwparker 在 https://github.com/stablyai/orca/pull/37796 中的组演示和表单控件所有者
* 测试：删除 https://github.com/stablyai/orca/pull/37794 中 @OrcaWin 的 114 个低值单元和插件示例测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37800中的20个低值渲染器存储测试
* 测试：删除 https://github.com/stablyai/orca/pull/37809 中 @OrcaWin 的 18 个低值渲染器和 Web 测试
* 重构（设置）：https://github.com/stablyai/orca/pull/37804 中的 @nwparker 组运行时和主机所有者
* 测试：删除https://github.com/stablyai/orca/pull/37814中@OrcaWin的30个低价值网络和兼容性测试
* 重构（设置）：https://github.com/stablyai/orca/pull/37817 中的 @nwparker 组代理、帐户和存储库所有者
*测试：删除46个低值client和https://github.com/stablyai/orca/pull/37818中@OrcaWin的基准测试
* 测试：删除 https://github.com/stablyai/orca/pull/37825 中@OrcaWin 的 131 个低价值线束、主要和渲染器测试
*测试：删除@OrcaWin在https://github.com/stablyai/orca/pull/37830中的73个低值主进程测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/37835 中删除 30 个整个套件中的 83 个低值检查
*测试：删除https://github.com/stablyai/orca/pull/37841中@OrcaWin的54个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/37847中@OrcaWin的68个低值测试声明
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/37851 中删除跨桌面和移动设备的 71 个低价值测试
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/37853 中删除跨桌面、工具和移动设备的 58 个低价值测试
* 测试：删除 https://github.com/stablyai/orca/pull/37854 中 @OrcaWin 的 52 个低值测试和 6 个完整套件
*测试：删除https://github.com/stablyai/orca/pull/37856中@OrcaWin的49个低值测试和四个套件
*测试：删除https://github.com/stablyai/orca/pull/37857中@OrcaWin的39个低值测试和两个套件
*测试：删除https://github.com/stablyai/orca/pull/37860中@OrcaWin的47个低值测试和两个套件
*测试：删除https://github.com/stablyai/orca/pull/37863中@OrcaWin的64个低值测试和四个套件
* 重构（ipc）：https://github.com/stablyai/orca/pull/37823 中的@nwparker 对功能处理程序和资源所有者进行分组
* 在https://github.com/stablyai/orca/pull/37751中通过@AmethystLiang减少记录数据大小

## 新贡献者

* @phatloi0010 在 https://github.com/stablyai/orca/pull/37406 中做出了第一个贡献
* @Tomk2d 在 https://github.com/stablyai/orca/pull/37460 中做出了第一个贡献
* @Alonsojrr14 在 https://github.com/stablyai/orca/pull/37622 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.247...v1.4.248

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.248` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.248)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
