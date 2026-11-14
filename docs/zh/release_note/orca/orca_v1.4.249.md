---
title: "orca v1.4.249"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.249"
version: "v1.4.249"
published: "2026-11-04"
type: "patch"
lang: "zh"
---

# orca v1.4.249

## 设置更简单，对聊天的控制更多，工作空间更整洁 ✨

- 🎛️ **从一开始就选择聊天或终端：** 现在，入职允许您选择聊天 UI 或终端，然后选择代理并安装该设置的技能。
- 💬 **保持对话控制：** 通过不确定的传送和停止保留聊天输入，选择发送是否移动滚动位置，并决定空闲聊天代理何时停止或保持运行。
- 🗂️ **保持项目整洁：** 添加项目可以隐藏发现的工作树，同时创建和克隆一致的符号链接父文件夹。
- 📝 **自己阅读和编辑：** 设置默认 Markdown 视图，可以选择在保存时插入最终换行符，并从窗格标题调整聊天宽度。
- 📱 **更清晰的手机主页：** 更新后的手机应用程序将源、使用情况、自动化和设置分开，显示更多代理使用情况，并命名最近的对话。
- 🧩 **日常工作中的小修复：** 保持输入上的终端滚动位置，在工作区中打开文件链接，在 PR 评论中渲染美人鱼，以及从自己的工具栏中关闭浮动浏览器拆分。

## 亮点

- **设置和技能：** 在入职期间选择聊天或终端，使用更新的代理选择器和主题步骤，并在此计算机上安装所选提供商的聊天技能。当支持该路由时，新添加的空项目可以打开所选的聊天代理。
- **聊天行为：** 输入和排队的后续操作通过不确定的传递和停止而保留。新设置控制发送时和空闲聊天代理停止时的滚动位置。加载的聊天图像在滚动和工作区切换时保持可见，并且 Pi 压缩会保留发送直到完成。
- **代理选择：** 当默认值未更改时，托管 Claude 帐户会保留稍后的 `/model` 和工作量选择。在不更改保存的模型选择的情况下显示克劳德后备； OpenCode 工作遵循所选模型，Claude chat 添加 Ultracode 工作。
- **项目和导航：** 添加项目会隐藏发现的工作树。项目创建和克隆一致地解决符号链接的父项；新工作区代理选择器中的手动工作区顺序和搜索类型得到修复。
- **编辑器和浏览器：** 选择默认的 Markdown 视图，启用保存时插入最终换行符，在文件预览中保留聊天 HTML 外观，并关闭浮动浏览器拆分而不关闭旁边的终端。
- **电话：**更新的应用程序添加了“主页”选项卡、更多代理的使用以及“跳回”中的对话名称。它还改进了终端输入、工作量控制、HTML 预览和 Android 主题/导航行为。
- **自动化和通知：** 自动化使用共享代理选择器，接受 Pi 模型/思考参数并在项目更改时刷新。中断的终端自动化运行被记录为失败，确认的桌面警报被清除，OpenCode 完成通知处理 OSC 7501。

## 兼容性和升级说明

- **现有设置选项：** 新的入职选项使用现有的界面和座席首选项。此版本不会重置每个人的默认代理或将每个现有工作区切换为聊天。具有现有选项卡的工作区会保留它们；新项目聊天路径取决于支持的运行时和代理。
- **聊天设置：** 发送时滚动和空闲代理停止是可配置的。如果您希望空闲的聊天代理继续运行，请选择 **从不**；停止空闲代理与删除对话是分开的。
- **托管 Claude 帐户：** 未更改的默认值在设置同步后停止覆盖以后的帐户选择。这不会恢复被旧版本覆盖的选择，并且更改的默认键仍然适用。
- **配对服务器：** 配对服务器文件链接的改进使用可用的新功能；旧服务器保留其现有路径。没有针对设置更改的新的最低服务器版本。 GitHub 较旧服务器的问题限制仍然如下。
- **手机更改：** 本机手机 UI 和 Android 修复需要更新的 Orca Mobile 应用程序以及兼容的桌面或服务器。 Orca Mobile 0.0.64 中包含了移动设备的更改；单独更新桌面不会安装本机手机版本。
- **编排面板：** 实验面板及其设置再次暂时禁用。编排消息传递更改与该面板的可用性无关。

## 已知问题

**没有默认代理的聊天设置：** 在启用聊天 UI 并在“设置”中清除默认代理的情况下，设置指南的 **安装技能** 按钮可以保持禁用状态，无需任何解释。安装前选择默认代理，例如 Claude。

**冷重启后的 Shell 历史记录：** 一些 Mac shell 窗格可以在完全重新启动应用程序和终端后重新打开，而不显示其之前的输出。 v1.4.248 上也观察到此类故障；原因仍未解决。此版本并未声称修复该问题。

**旧配对服务器上的 GitHub 问题：** 通过存储库或 URL 打开问题可能会使标题、标签和受让人编辑不可用。电话问题关闭/重新打开也可以拒绝较旧的服务器或中介。 **在 GitHub 上打开**仍然可用。

**保存的聊天存储和性能：** 实时历史记录压缩保持暂停，因此存储可以随着对话的继续而增长。此版本并不声称消除了聊天停滞的所有来源。挂钩更改减少了子进程工作，但未测量整个应用程序延迟、CPU 和堆的改进。

**较长的更新延迟：** 如果有 14 天或 30 天的延迟，版本可能会在符合条件之前离开更新源。无和**跳过延迟一次**仍然可用。

**插件命令替换：** Orca 使用普通命令代替后，替换内置命令的插件仍然可以完成，导致操作发生两次。

---

## 产品体验

### 原生聊天

*通过中断传递保持输入可用，调整聊天行为，并使对话更易于阅读。*

* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37753 中将聊天宽度设置添加到窗格标题
* 在 https://github.com/stablyai/orca/pull/37911 中打开 @brennanb2025 的链接时关闭本机聊天链接预览
* 保持问题答案可见，直到 @brennanb2025 在 https://github.com/stablyai/orca/pull/37883 中完成交付
* 修复 @brennanb2025 在 https://github.com/stablyai/orca/pull/37950 中对所选模型的 OpenCode 工作选择
* 在 https://github.com/stablyai/orca/pull/37992 中的 @brennanb2025 的聊天问题 clickable 中建立链接
* 将 Ultracode 添加到 @brennanb2025 在 https://github.com/stablyai/orca/pull/38010 中的 Claude 聊天工作中
* 通过不确定的传递保留聊天输入并在 https://github.com/stablyai/orca/pull/32267 中通过 @brennanb2025 停止
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/38176 中的 @AmoabaKelvin 中，通过滚动和工作区切换将加载的聊天图像保留在屏幕上
* 修复（pi）：在聊天中显示压缩并保持发送直到https://github.com/stablyai/orca/pull/38191中的@AmoabaKelvin结束
* feat(native-chat): 添加一个设置，以在 https://github.com/stablyai/orca/pull/38162 中由 @manuelmeurer 发送时保持滚动位置
* feat(native-chat)：让用户选择闲置聊天代理何时停止，或永不停止，作者：https://github.com/stablyai/orca/pull/38202 中的 @AmoabaKelvin
* 在 https://github.com/stablyai/orca/pull/38044 中由 @AmethystLiang 从聊天 UI 中删除新分隔线

### 代理和编排

*在设置过程中选择聊天或终端，保持提供商选择不变，并改进代理消息和状态。*

* 修复（技能）：将 https://github.com/stablyai/orca/pull/37659 中 @AmoabaKelvin 的计算机使用重命名为 orca-computer-use
* 在 https://github.com/stablyai/orca/pull/37891 中显示 @brennanb2025 没有代理信封的编排消息内容
* 在 https://github.com/stablyai/orca/pull/37924 中更新 @AmethystLiang 的聊天 ui 介绍
* 修复（agent-hooks）：在 https://github.com/stablyai/orca/pull/37955 中通过 @AmoabaKelvin 保留嵌套钩子的反重力所有权
* 修复（claude）：在 https://github.com/stablyai/orca/pull/37958 中反映回退而不更改 @AmoabaKelvin 保存的模型
* 将编排通知保留在 https://github.com/stablyai/orca/pull/37968 中 @brennanb2025 的单行可扩展卡中
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37994 中增加 Orchestration 面板和选项卡对比度
* 澄清https://github.com/stablyai/orca/pull/38056中@AmethystLiang的帐户切换和会话重启提示
*修复（编排）：在远程服务器上启动的配对client的工作树是https://github.com/stablyai/orca/pull/38034中@Jinwoo-H的client
* 在 https://github.com/stablyai/orca/pull/38041 中@brennanb2025 在活动轮次期间发送编排邮件
* 通过 https://github.com/stablyai/orca/pull/38074 中的 @brennanb2025 从代理卡中删除多余的“显示较少”按钮
* 缩小编排消息状态背景，作者：https://github.com/stablyai/orca/pull/38079 中的 @brennanb2025
* 修复（ai-vault）：在https://github.com/stablyai/orca/pull/38203中@AmoabaKelvin在特工会话历史记录中显示关闭的反重力聊天
* 修复（claude-accounts）：在 https://github.com/stablyai/orca/pull/38219 中由 @AmoabaKelvin 管理的 Claude 帐户上保留 /model 和工作量选择
* perf(agent-hooks)：每个 Claude hook 事件启动 7 个进程，而不是 https://github.com/stablyai/orca/pull/38180 中 @rikbrown 启动的 17 个进程
* 修复（通知）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38222 中完成 OSC 7501 上的 OpenCode 转换时发出通知
* 在 https://github.com/stablyai/orca/pull/36204 中通过 @AmethystLiang 添加聊天 UI 选项
* 壮举（入门）：带有颜色模式的主题步骤 + https://github.com/stablyai/orca/pull/38021 中 @nwparker 的可选主题轮播
* 修复（claude）：将“允许此会话”规则保留在 https://github.com/stablyai/orca/pull/37895 中 @King-Dylan 的设置文件中

### 电话

*在更新的手机应用程序中改进主页导航、使用可见性、聊天控制和终端输入。*

* 修复（移动设备）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37919 中以全宽重新打开工作区选项
* 修复（移动端）：https://github.com/stablyai/orca/pull/37912中@Jinwoo-H在Sync决定是否推送前检查上游状态回复
* 在 https://github.com/stablyai/orca/pull/37643 中@brennanb2025 在手机本机聊天中显示失败详细信息
* 将手机分叉拉取请求保留在 @brennanb2025 在 https://github.com/stablyai/orca/pull/36762 中选择的存储库上
* 修复（移动）：通过 https://github.com/stablyai/orca/pull/37917 中的 @Jinwoo-H 从共享合约中键入桌面回复，并将电话列表事实保留在桌面行旁边
* 修复（移动）：让 Android 导航栏与 https://github.com/stablyai/orca/pull/37989 中 @AmoabaKelvin 的 Orca 主题保持一致
* 在 https://github.com/stablyai/orca/pull/38042 中通过 @AmethystLiang 在移动预览中渲染 HTML 文件
* feat(mobile)：通过@AmoabaKelvin在https://github.com/stablyai/orca/pull/37900中改进移动端输入
* 修复（移动）：使应用程序图标全出血，以便 iOS 通过 https://github.com/stablyai/orca/pull/37074 中的 @tianlrz 干净地遮盖它
* 壮举（移动）：在 https://github.com/stablyai/orca/pull/38187 中的 @AmoabaKelvin 在帐户屏幕上显示每个代理桌面轨迹的使用情况
* feat(mobile): title 跳转回 https://github.com/stablyai/orca/pull/38194 中 @AmoabaKelvin 的对话名称行
* 修复（移动）：将https://github.com/stablyai/orca/pull/38200中@AmoabaKelvin的每个模型的工作量控制保持在一个地方
* 壮举（移动）：通过 https://github.com/stablyai/orca/pull/38206 中的 @AmoabaKelvin 将主页分为 Feed、Usage、Automations 和 Settings 选项卡
* 修复（移动）：在 https://github.com/stablyai/orca/pull/38225 中 @AmoabaKelvin 保持新项目的部分在手机上折叠
* 修复（移动）：解决 https://github.com/stablyai/orca/pull/38226 中 @AmoabaKelvin 的 Android 自动退出问题
* 杂务（移动）：在 https://github.com/stablyai/orca/pull/38230 中撞到 0.0.64 和 Android 版本Code 28 by @AmoabaKelvin

### 源代码控制、任务和集成

*保持GitHub任务源一致并使检查和图表更清晰。*

* 使 GitHub 任务源更改与 https://github.com/stablyai/orca/pull/37387 中的 @brennanb2025 保持一致
* 区分被取消的 PR 检查和 @brennanb2025 在 https://github.com/stablyai/orca/pull/37789 中的失败
* 修复（检查）：在 https://github.com/stablyai/orca/pull/38215 中 @AmoabaKelvin 的 PR 评论中渲染美人鱼图

### 工作区、侧边栏和选项卡

*保持项目准入、工作区排序和选择器导航一致。*

* 修复（侧边栏）：通过 https://github.com/stablyai/orca/pull/37948 中的 @OrcaWin 阻止调整大小手柄覆盖工作区列表滚动条
* 修复：尊重 @davefano 在 https://github.com/stablyai/orca/pull/37557 中围绕主要结账的手动工作区顺序
* 防止 @brennanb2025 在 https://github.com/stablyai/orca/pull/38039 中创建文件夹工作区
* 在新工作区代理选择器上恢复搜索类型，并跳过 https://github.com/stablyai/orca/pull/38073 中 @nwparker 选项卡上的表情符号按钮
* 保留分割提示，直到用户通过 https://github.com/stablyai/orca/pull/38097 中的 @brennanb2025 分割或关闭它
* 修复（项目）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38196 中创建其工作空间之一时，拒绝删除项目
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38208 中添加 @brennanb2025 项目时，隐藏发现的工作树

### 编辑器、文件和浏览器

*添加保存和 Markdown 首选项、保留 HTML 预览并改进浏览器拆分行为。*

*壮举（编辑器）：在 https://github.com/stablyai/orca/pull/37786 中添加 @nwparker 在保存时插入最终换行符
*修复（浏览器）：代理设置的视口比窗格滚动更宽，而不是在https://github.com/stablyai/orca/pull/38005中被@Jinwoo-H切断
* 修复（浏览器）：在 https://github.com/stablyai/orca/pull/38006 中，@Jinwoo-H 创建的拆分选项卡会加入调用者旁边已经存在的浏览器窗格
* 在 https://github.com/stablyai/orca/pull/37890 中保留 @brennanb2025 的文件预览中的聊天 HTML 外观
* 壮举（编辑器）：默认 Markdown 视图设置 + @nwparker 在 https://github.com/stablyai/orca/pull/38106 中的视图切换器上的 right-click
* 修复（浏览器）：当相互配对的桌面回显本地浏览器选项卡时，@AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38186 中保留本地浏览器选项卡
*修复（浮动终端）：关闭https://github.com/stablyai/orca/pull/38175中@younghwan91从其自己的工具栏分离的浏览器

### 更新、终端和远程工作

*保留终端位置和文件链接上下文，并澄清通知和更新卡。*

* 在 https://github.com/stablyai/orca/pull/37884 中将更新卡保留在状态栏上方 @AmethystLiang
* 在https://github.com/stablyai/orca/pull/30889中通过@mvanhorn输入保持终端滚动位置
* 修复（终端）：将 https://github.com/stablyai/orca/pull/37920 中 @AmoabaKelvin 的链接弹出框行“在该组中打开”重命名为“在新选项卡中打开”
* 修复（终端）：本地文件链接在https://github.com/stablyai/orca/pull/37953中的cli由@nwparker插入的工作区中打开
* 修复（终端）：配对服务器文件链接在 https://github.com/stablyai/orca/pull/38072 中的 @nwparker 插入的 cli 工作区中打开
* 修复（通知）：清除 https://github.com/stablyai/orca/pull/37974 中 @AmoabaKelvin 确认的桌面警报
* 在https://github.com/stablyai/orca/pull/37999中使用@AmethystLiang对终端资源限制使用中性样式

### 自动化和插件

*刷新自动化列表，接受 Pi 参数并准确报告中断的运行。*
* 在 https://github.com/stablyai/orca/pull/37962 中将中断的终端自动化运行记录为 @Jinwoo-H 失败
* 当https://github.com/stablyai/orca/pull/37964中的@Jinwoo-H项目更改时刷新自动化列表
* 修复（自动化）：接受 Pi 模型并思考 @Jinwoo-H 在 https://github.com/stablyai/orca/pull/38020 中的额外参数
* 在 https://github.com/stablyai/orca/pull/37941 中使用@brennanb2025 的自动化共享代理选择器

### 已恢复

*暂时删除实验性的 Orchestration 面板。*

* 暂时禁用编排面板并通过https://github.com/stablyai/orca/pull/38045中的@brennanb2025删除其设置

### 测试、CI 和维护

*更新依赖关系和翻译，组织内部所有者，并维护有针对性的检查和测试。*

* 修复 https://github.com/stablyai/orca/pull/37876 中 @AmethystLiang 的 AI 代币翻译
*测试：删除https://github.com/stablyai/orca/pull/37870中@OrcaWin的151个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/37882中@OrcaWin的96个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/37885中@OrcaWin的37个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/37887中@OrcaWin的74个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/37888中@OrcaWin的63个低值测试声明
* 重构（浏览器）：https://github.com/stablyai/orca/pull/37872 中 @nwparker 的组路由和 client 主机所有者
* 通过https://github.com/stablyai/orca/pull/37877中的@AmethystLiang提高应用程序加载效率
* 重构：https://github.com/stablyai/orca/pull/37910 中 @nwparker 分组浏览器生命周期和扩展所有者
* 修复（deps）：将 Electron 更新为 43.8.6 并解决 https://github.com/stablyai/orca/pull/37916 中 @nwparker 的开放安全建议
*测试：删除https://github.com/stablyai/orca/pull/37894中@OrcaWin的11个低值声明和批量历史结账提取
*测试：删除https://github.com/stablyai/orca/pull/37947中@OrcaWin的31个低值声明和三个套件
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/37915 中的团体代理启动合同和初创公司所有者
* 在 https://github.com/stablyai/orca/pull/37956 中删除 @OrcaWin 跨构建、移动和预加载的 35 个低价值测试
* 删除 https://github.com/stablyai/orca/pull/37963 中 @OrcaWin 的 30 个低价值测试和一个未使用的重放装置
* 测试：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37905 中修复历史兼容性设置可靠性
* 删除 44 个低价值测试，包括 https://github.com/stablyai/orca/pull/37969 中@OrcaWin 的十个完整套件
* 测试：删除 https://github.com/stablyai/orca/pull/37972 中 @OrcaWin 的 28 个低值测试和 5 个套件
* 修复（i18n）：翻译 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37976 中最近的桌面和移动副本
* 重构：通过https://github.com/stablyai/orca/pull/37961中的@nwparker组织代理状态和生命周期所有者
* 修复（i18n）：正确的葡萄牙语和土耳其语副本由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37988 中
* 测试：删除 https://github.com/stablyai/orca/pull/37982 中 @OrcaWin 的 145 个低值测试和 9 个套件
*测试：删除https://github.com/stablyai/orca/pull/37991中@OrcaWin的63个低值测试声明
* 修复（deps）：@nwparker 在 https://github.com/stablyai/orca/pull/37981 中向后移植 minimatch、glob 和 deepmerge 安全修复
*测试：删除https://github.com/stablyai/orca/pull/37997中@OrcaWin的78个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38002中@OrcaWin的72个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38004中@OrcaWin的228个低值测试声明
* 文档（代理）：默认不进行新测试并收紧https://github.com/stablyai/orca/pull/37993中@nwparker的反模式列表
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/37990 中组织源代码控制合约所有者
* 测试：删除 454 个低值测试并复制 @OrcaWin 在 https://github.com/stablyai/orca/pull/38014 中的基准测试
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38011 中组织终端和运行时合约所有者
* 修复（ci）：将 PR LoC 表放在 ELI5 之后，以便 https://github.com/stablyai/orca/pull/38025 中的 @nwparker 保持链接展开状态可读
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38018 中组织工作区和远程运行时合约所有者
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38023 中组织 Codex 传输、trust 和历史所有者
* 重构：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38033 中组织笔记本、差异和检查详细所有者
*测试：删除https://github.com/stablyai/orca/pull/38030中@OrcaWin的2,816个低值测试声明和395个完整套件
* 重构：在https://github.com/stablyai/orca/pull/38037中通过@nwparker组织markdown、编辑模型并保存所有者
* 删除 https://github.com/stablyai/orca/pull/38013 中@Jinwoo-H 遗留的编排接管指南
* 重构：@nwparker 在 https://github.com/stablyai/orca/pull/38061 中与具体业主签订终端和工作区合同
* 重构：https://github.com/stablyai/orca/pull/38068 中的 @nwparker 组侧边栏准入和工作区创建所有者
*测试：删除https://github.com/stablyai/orca/pull/38058中@OrcaWin的997个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38082中@OrcaWin的1,460个低值测试声明
* 重构（侧边栏）：https://github.com/stablyai/orca/pull/38081 中@nwparker 按所有者组织工作区卡片和操作
* 重构（侧边栏）：通过 @nwparker 在 https://github.com/stablyai/orca/pull/38092 中按所有者组织工作区列表板和目录
* 重构（插件）：https://github.com/stablyai/orca/pull/38095 中 @nwparker 的组面板和框架所有权
*测试：删除https://github.com/stablyai/orca/pull/38087中@OrcaWin的1,015个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38113中@OrcaWin的2,191个低值测试声明
* 重构（渲染器）：按https://github.com/stablyai/orca/pull/38101中@nwparker的功能所有权组织右侧边栏模块
*测试：删除https://github.com/stablyai/orca/pull/38129中@OrcaWin的675个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38137中@OrcaWin的336个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38145中@OrcaWin的482个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38147中@OrcaWin的137个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38157中@OrcaWin的280个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38160中@OrcaWin的208个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38169中@OrcaWin的189个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38177中@OrcaWin的158个低值测试声明
*测试：删除https://github.com/stablyai/orca/pull/38182中@OrcaWin的152个低值测试声明
* 删除 https://github.com/stablyai/orca/pull/38198 中 @OrcaWin 的 249 个低价值测试用例和 10 个完整套件
* 在 https://github.com/stablyai/orca/pull/38209 中删除 @OrcaWin 的 390 个低价值测试用例和 18 个完整套件
* 删除 https://github.com/stablyai/orca/pull/38223 中 @OrcaWin 的 230 个低价值测试用例和 19 个完整套件

## 新贡献者

* @davefano 在 https://github.com/stablyai/orca/pull/37557 中做出了第一个贡献
* @manuelmeurer 在 https://github.com/stablyai/orca/pull/38162 中做出了第一个贡献
* @King-Dylan 在 https://github.com/stablyai/orca/pull/37895 中做出了第一个贡献
* @rikbrown 在 https://github.com/stablyai/orca/pull/38180 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.248...v1.4.249

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.249` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.249)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
