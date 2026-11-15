---
title: "orca v1.4.247"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.247"
version: "v1.4.247"
published: "2026-11-03"
type: "patch"
lang: "zh"
---

# orca v1.4.247

## 改进的聊天 UI、更丰富的手机评论以及更多方式让 Orca 成为您的 ✨

- 🔄 **使用限制重置后继续：** 可选设置会在使用限制重置时自动恢复聊天。
- 📱 **手机上更丰富的评论：** 浏览分支提交，在差异中的文件之间跳转，并在代码旁边阅读或添加拉取请求评论评论。
- 🎨 **让 Orca 成为您的：** 发现更多主题，以自己的字体预览字体，并导入 Ghostty 或 Kitty 配置文件。
- 🧩 **更强大的插件：** 构建自定义编辑器、实时状态项和面板，并将插件连接到代理提示、启动和工作区操作。
- 🤝 **更清晰的代理活动：** 正在运行的工作人员在协调员完成后保持可见，并且帐户切换更容易，交接卡更清晰。
- ⚡ **日常工作更顺畅：** 减少不必要的重画和离屏动画，保存的回复更可靠，并修复工作区、终端和模拟器预览。
- 💬 **改进的聊天用户界面：** 在聊天用户界面设置中为每个客服人员选择“聊天”或“CLI”，从终端继续操作时保留草稿，并清楚地看到您选择的权限模式。

## 亮点

- **聊天 UI：** 直接在聊天 UI 设置中为每个客服人员选择聊天或 CLI。权限选项保持可见，模型和工作量控件在选项刷新时仍然可用，并且集中于作曲家保持打开的覆盖层就位。
- **对话连续性：** 从终端进入聊天时保留未发送的文本，并在保存繁忙时保留收到的回复和工具结果。打开自动继续以在使用限制重置后恢复聊天。
- **手机源代码控制：** 在其自己的页面上查看每个分支提交，在文件之间跳转，折叠差异上下文，以及在代码旁边阅读或添加评论注释。拉取请求选项卡重点关注阻止合并的内容，并提供更清晰的下一步操作和自动刷新。
- **主题和字体：** 在外观控件中查找 GitHub、VS Code 和目录主题。以自己的字体预览每种字体，导入带有浅色/深色对的 Ghostty 主题，并引入 Kitty 配置文件。
- **插件：** 创建自定义编辑器，通过保存和重新加载、实时状态栏项目以及带有 Box 布局容器的组件面板来保留待处理的编辑。挂钩将插件连接到代理启动、提示、工具调用、终端发送和工作区创建；屏幕截图和测试工具可帮助检查结果。
- **代理和编排：** 正在运行的工作人员在协调器完成后仍保留在代理列表中。交接卡使委派的工作更容易遵循，Codex 和 Claude 帐户切换器更易于使用。
- **远程工作和工作区：** 在注册的工作区之外预览远程 HTML，在重新启动后查找已停止的 WSL 发行版中的项目，并查看更清晰的 Git 进度。子工作树保留在调用者的项目中，文件夹根保持可见，分支链接打开当前拉取请求。
- **响应能力和可靠性：** 屏幕外动画暂停，不相关的设置更改导致较少的差异重绘，并且释放了未使用的编辑器模型。终端修复可防止杂散转义文本，而模拟器预览则提供更清晰的连接和启动反馈。

## 兼容性和升级说明
- **每个客服人员聊天或 CLI：** 聊天 UI 已不再是实验性的。设置 → 聊天 UI 中还提供了共享启动控件，因此您可以选择每个代理打开哪个界面。
- **自动继续是可选的：** 如果您希望使用限制聊天在限制重置后自动继续，请启用它。
- **电话发送行为：** 电话遵循配对桌面的发送设置。更新 Orca Mobile 以及您的桌面或服务器以获取移动更改。
- **编排面板：** 实验性编排面板被禁用，同时解决了其应用程序范围的滞后问题。编排命令继续工作。

## 已知问题

**节省的聊天存储：**随着对话的增长，聊天历史记录可以继续使用更多的磁盘空间；此版本中不包含自动存储压缩。

**插件命令替换：** Orca 使用普通命令代替后，替换内置命令的插件仍然可以完成，导致操作发生两次。

---

## 产品体验

### 自动化

*选择是否运行自动化设置，并避免启动已取消的唤醒。*

* 通过 https://github.com/stablyai/orca/pull/36543 中的 @brennanb2025 将运行和跳过设置选项添加到自动化 CLI
* 自动唤醒会跳过 @nwparker 在 https://github.com/stablyai/orca/pull/37206 中火中清除的条目

### 原生聊天

*从聊天 UI 设置中选择聊天或 CLI，保持草稿和回复完整，并在使用限制重置后使用可选的自动继续。*

* 在 https://github.com/stablyai/orca/pull/36872 中的 @AmethystLiang 在窗格标题工具提示中显示拆分快捷方式
* 当其代理人将工作交给另一个代理人时，在聊天中显示一张卡片（https://github.com/stablyai/orca/pull/36848 中的 @brennanb2025）
* @brennanb2025 在 https://github.com/stablyai/orca/pull/37118 中进行无操作保存后，将聊天阅读器移至最新保存的步骤
* 当 https://github.com/stablyai/orca/pull/37216 中的 @AmoabaKelvin 日志保存队列繁忙时，保留每个收到的回复和工具结果
* 在 @brennanb2025 在 https://github.com/stablyai/orca/pull/37159 中回复后，保持 OpenCode 的默认工作可见
* 保持队列引导快捷方式与 @brennanb2025 在 https://github.com/stablyai/orca/pull/37166 中显示的消息对齐
* 通知卡仅针对 https://github.com/stablyai/orca/pull/37157 中的 @brennanb2025 覆盖的聊天输入提起
* 聊天也遵循 https://github.com/stablyai/orca/pull/37126 中 @brennanb2025 的工作结果帐户切换
* 聊天 UI 由 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37222 中推出实施
* https://github.com/stablyai/orca/pull/37247 中@AmethystLiang 在启动期间绑定代理日志队列
* 在 https://github.com/stablyai/orca/pull/37258 中 @AmethystLiang 的工作树聊天切换期间保留输入
* 在聊天 UI 中继续，在关闭终端之前打开聊天，并停止 https://github.com/stablyai/orca/pull/37227 中仍由 @brennanb2025 启动的 CLI
* 在 https://github.com/stablyai/orca/pull/37212 中 @brennanb2025 的 Claude 和 Grok 聊天中从 /goal 打开目标编辑器
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37148 中解释检测到的代理共享原始使用限制时的切换
* 在 https://github.com/stablyai/orca/pull/37168 中 @brennanb2025 恢复选项时保持聊天选择器可用
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/37200 中删除聊天工作区时，保持会话历史记录打开
* 在 https://github.com/stablyai/orca/pull/37211 中，@brennanb2025 将可读对话排除在会话历史警告之外
* 模型列表刷新时，力度、速度和快速控制仍然可用； https://github.com/stablyai/orca/pull/36870 中 @brennanb2025 的 id 派生模型标签中的点版本
* 将 Windows 和 Linux 聊天切换与 https://github.com/stablyai/orca/pull/37199 中的 @brennanb2025 的工作树快捷方式分开
* 在 https://github.com/stablyai/orca/pull/37191 中 @brennanb2025 的第一条聊天消息之前显示代理登录通知
* 在 https://github.com/stablyai/orca/pull/37189 中通过 @brennanb2025 报告丢失的已保存对话一次
* 在 https://github.com/stablyai/orca/pull/36842 中 @AmethystLiang 的聊天切换中保留有界工具证据
* 将 https://github.com/stablyai/orca/pull/36613 中的聊天设置重命名为 @AmethystLiang 的聊天 UI
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36659 中的设置面板中启动代理并提供第一个提示
* 当 @brennanb2025 在 https://github.com/stablyai/orca/pull/36873 重置使用限制时自动继续聊天
* 在聊天编辑器中显示终端未发送的输入，并在 https://github.com/stablyai/orca/pull/36493 中由 @AmoabaKelvin 发送时替换它
* 完全访问 Claude 聊天不再要求 https://github.com/stablyai/orca/pull/37246 中 @brennanb2025 的批准
* 当另一个终端在 https://github.com/stablyai/orca/pull/37397 中运行 @brennanb2025 的对话时，在关闭终端之前继续聊天 UI 会被拒绝
* 保持选定的 Codex 权限模式在 https://github.com/stablyai/orca/pull/37419 中由 @AmethystLiang 可见
* 在 https://github.com/stablyai/orca/pull/37403 中关注 @AmethystLiang 的聊天编辑器时，保持覆盖层打开
* 通过 https://github.com/stablyai/orca/pull/37607 中的 @brennanb2025 将共享启动控件添加到聊天 UI 设置

### 代理、集成和编排

*在协调员完成后让工作人员保持可见，更清楚地切换帐户，并查看所选的权限和工作量选择。*

* 说保持开放的工作人员保持开放状态，并在 https://github.com/stablyai/orca/pull/36963 中的 @Jinwoo-H 的工作人员列表中隐藏无操作注意
* 在 https://github.com/stablyai/orca/pull/36662 中的 @brennanb2025 使用代理仪表板中的常见链接操作
* 当worker_done在冻结的Orca上超时时显示重试命令，作者：https://github.com/stablyai/orca/pull/37170中的@Jinwoo-H
* 在 https://github.com/stablyai/orca/pull/37219 中的 @brennanb2025 协调员完成后，继续在代理列表中运行工作人员
* 当位置保存失败时保留聊天帐户视图 @brennanb2025 在 https://github.com/stablyai/orca/pull/37175
* 保持快速偏好独立于 https://github.com/stablyai/orca/pull/37194 中的 @brennanb2025 的路由可用性
* 将反重力内置技能文件保留在 https://github.com/stablyai/orca/pull/37167 中的 @brennanb2025 的存储库之外
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37255 中简化和改进 Codex 和 Claude 帐户切换器
* 匹配 OSC 7501 规范长度限制和 @nwparker 在 https://github.com/stablyai/orca/pull/37267 中的进度解析
* 即使 https://github.com/stablyai/orca/pull/37177 中的 @brennanb2025 没有作业，也显示 GitLab MR 的管道结果
* 即使 Orca 在 https://github.com/stablyai/orca/pull/36825 中的 @brennanb2025 第一次钩子之前看到 Claude，也可以记录 Claude 终端的过程
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37527 中禁用滞后实验编排面板

### SSH、托管服务器和远程

*通过更清晰的停止发行版消息和更安全的服务器启动，使 WSL 项目和主机在重新启动时可被发现。*

* 通过 @guangyu-reflexio 在 https://github.com/stablyai/orca/pull/36791 中预览注册工作区之外的远程 HTML
* 通过 https://github.com/stablyai/orca/pull/36003 中的 @AmethystLiang 将托管审核操作路由到拥有主机
* Codex 配额轮询控制它探测的发行版，而不是 https://github.com/stablyai/orca/pull/37043 中@nwparker 的默认发行版
* 在 https://github.com/stablyai/orca/pull/37380 中 @nwparker 显示保留终端的地方，命名停止的发行版，而不是其原始保留代码
* @nwparker 在 https://github.com/stablyai/orca/pull/37376 中重新加载移动窗口后登陆工作区视图
* 在从已由 @nwparker 在 https://github.com/stablyai/orca/pull/37377 中运行的发行版中添加文件夹时，提供现有主机
* 说明为什么要在 https://github.com/stablyai/orca/pull/37390 中的 @nwparker 的 WSL 移动对话框中移动项目
* 删除 https://github.com/stablyai/orca/pull/37388 中 @nwparker 未通过启动检查的新安装服务器
* 将 e2e 假 WSL 连接器排除在 https://github.com/stablyai/orca/pull/37378 中 @nwparker 的发布版本之外
* 在 https://github.com/stablyai/orca/pull/37389 中显示 WSL 主机行的企鹅图标和 @nwparker 的停止发行版通知
* @nwparker 在 https://github.com/stablyai/orca/pull/37396 中重新启动后，已停止的发行版仍会列出其所有项目

### 电话
*使用更丰富的差异、代码注释和更清晰的下一步操作来审查分支提交和拉取请求，并保持导航和发送与桌面一致。*

* 具有跳转到文件、折叠上下文和舞台/查看的差异屏幕 · @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/36998 中的下一个文件
* 停止清除 https://github.com/stablyai/orca/pull/37095 中 @AmoabaKelvin 从未发送过的电话提醒
* Commits 仅列出此分支，每个提交都会通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37050 中打开自己的页面
* GitHub 在 https://github.com/stablyai/orca/pull/37073 中由 @AmoabaKelvin 在 diff 屏幕上查看线程、查看同步和行注释
* 点击提交上的文件会在 https://github.com/stablyai/orca/pull/37113 中的 @AmoabaKelvin 的 diff 屏幕中打开它
* https://github.com/stablyai/orca/pull/37104 中的 @AmoabaKelvin 在两个源代码管理选项卡下都有一个下一步栏
* 围绕 https://github.com/stablyai/orca/pull/36999 中 @AmoabaKelvin 阻止合并的内容重建拉取请求选项卡
* PR 选项卡会自行刷新，审查线程会显示其代码，机器人会通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37023 中要求代理进行修复
* 当https://github.com/stablyai/orca/pull/37202中的@AmoabaKelvin加载项目图像失败时显示文件夹图标
* 将图像查看器的关闭按钮保留在 iPhone Duo 状态栏中 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37203 中
* 更改以文件名开头的选项卡行，放弃 https://github.com/stablyai/orca/pull/37214 中@AmoabaKelvin 的滑动操作
* PR 选项卡上的一项底部操作，以及 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37231 中曾经说过的冲突
* 使用对焦环以 3:1 的比例勾勒出每个文本字段的轮廓，并在 https://github.com/stablyai/orca/pull/37221 中通过 @AmoabaKelvin 放置作曲家阴影
* 在 https://github.com/stablyai/orca/pull/37234 中@AmoabaKelvin 的冲突框消失后保留 Resolve 及其反馈
* 在 https://github.com/stablyai/orca/pull/37218 的 @brennanb2025 的主页上为任务和自动化提供自己的部分
* 当标签点击打开其详细信息卡时，保持键盘打开（https://github.com/stablyai/orca/pull/36866 中的 @brennanb2025）
* 当较新的桌面通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37169 中发送未知值时，电话自动化保留它可以读取的所有自动化
* 让手机发送遵循https://github.com/stablyai/orca/pull/37315中@brennanb2025的配对桌面设置
* 从 https://github.com/stablyai/orca/pull/36956 中的 @AmoabaKelvin 从会话返回到其主机的会话列表中
* 在 https://github.com/stablyai/orca/pull/36905 中，@AmoabaKelvin 将聊天记录和选项卡条滚动条绘制为不透明
* 通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37458 中从工作区列表中打开每个代理行自己的选项卡

### 工作区、侧边栏和选项卡

*将项目、选项卡和任务列表保留在正确的位置，并提供更清晰的 Git 进度和更可靠的拉取请求链接。*

* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37131 中使用内在 CSS 大小调整盖帽标签宽度
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/36961 中使空的多功能框插入符更厚更快
* 将子工作树创建保留在 https://github.com/stablyai/orca/pull/35787 中 @brennanb2025 的调用者项目中
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37093 中澄清跨工作区的 Git 操作状态
* 通过 @AmethystLiang 在 https://github.com/stablyai/orca/pull/37154 中防止行控件上的活动预览
* 当本机聊天选项卡在 https://github.com/stablyai/orca/pull/37151 中的@brennanb2025 状态后到达时刷新侧边栏活动
* https://github.com/stablyai/orca/pull/37262 中@nwparker 工作区悬停卡中的紧凑问题和任务行
* 在 https://github.com/stablyai/orca/pull/37294 中@nwparker 在选定的工作区卡片上保留宿主药丸的轮廓
* @brennanb2025 在 https://github.com/stablyai/orca/pull/34245 中编辑对话框后，保持 GitHub 任务受让人和行为最新
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37232 中将普通目录打开为文件夹项目
* 在 https://github.com/stablyai/orca/pull/37224 中显示 @brennanb2025 的草稿和受限 GitHub 项目项目
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36539 中的设置确认继续修复检查和项目操作
* 任务源摘要、存储库链接和过滤器行遵循 https://github.com/stablyai/orca/pull/37226 中 @brennanb2025 的列表实际源
* 在添加之前发送的目录答案不再删除 @nwparker 在 https://github.com/stablyai/orca/pull/37384 中添加的项目
* 桌面上的圆形项目图像图标与https://github.com/stablyai/orca/pull/37383中@tianlrz的移动设备相匹配
* 在 https://github.com/stablyai/orca/pull/37444 中隐藏 @AmoabaKelvin 的默认分支时，保持文件夹项目根可见
* 链接分支的开放 PR，而不是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37452 中更新的封闭 PR

### 编辑器、文件和 Markdown

*从“查找”返回时保持丰富的 Markdown 稳定，显示可读的 Git 差异，并使主题和字体更容易发现和导入。*

* 当焦点从 https://github.com/stablyai/orca/pull/36781 中的 @brennanb2025 查找返回时，保留丰富的 Markdown
* 将加密文件和文本转换文件显示为文本差异，而不是 @hrithiksaini99 在 https://github.com/stablyai/orca/pull/37105 中的二进制文件
* 发布 GitHub 和 VS Code 主题，使主题在外观中可发现，并在 https://github.com/stablyai/orca/pull/36828 中的@nwparker 的选择器中提供目录主题
* 使自定义编辑器文档与 @nwparker 在 https://github.com/stablyai/orca/pull/37277 中接受的编辑保持一致
* 在 https://github.com/stablyai/orca/pull/37278 中由 @nwparker 关闭或重新加载之前移交挂起的自定义编辑器编辑
* 让自定义编辑器需要桌面应用程序的独立框架（@nwparker in https://github.com/stablyai/orca/pull/37298）
* Orca.document.session() 用于 https://github.com/stablyai/orca/pull/37285 中 @nwparker 的自定义编辑器
* 将 Match Terminal 的主机药丸标签保留在 4.5:1 中，由 @nwparker 在 https://github.com/stablyai/orca/pull/37309 中填写
* 插件：https://github.com/stablyai/orca/pull/37347 中的 @nwparker 的 editor.save.before 钩子（保存时格式化，或拒绝保存）
* 将磁盘写入合并到 https://github.com/stablyai/orca/pull/37343 中@nwparker 的自定义编辑器未保存的编辑中
* 资源管理器中忽略的文件在 https://github.com/stablyai/orca/pull/37355 中 @nwparker 的内置主题中满足 4.5:1
* 更改了分隔线颜色，还通过 @nwparker 在 https://github.com/stablyai/orca/pull/37342 中绘制工作区分割
* 通过 Chromium 而不是 PowerShell 列出 Windows 字体，并由 @nwparker 在 https://github.com/stablyai/orca/pull/37369 中列出表面故障
* 让 Ghostty 导入读取您在 https://github.com/stablyai/orca/pull/37353 中由 @nwparker 选择的配置文件
* 在https://github.com/stablyai/orca/pull/37356中通过@nwparker从主题选择器中删除导入的终端主题
* 在 https://github.com/stablyai/orca/pull/33254 中的 @Rayyan34 的字体选择器中以自己的字体预览每种字体
* 导入 Ghostty 主题，包括亮/暗对，作为 https://github.com/stablyai/orca/pull/37368 中@nwparker 的每个模式终端主题
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37375 中的共享终端配置导入管道导入 Kitty 配置

### 浏览器、技能和反馈

*在新选项卡中打开流式页面的链接，并为插件提供更多方式来构建编辑器、面板和代理工作流程。*

* Plugin shot --scenario：在不触及https://github.com/stablyai/orca/pull/37090中的@nwparker的实时插件的情况下截取检查场景
* 在 https://github.com/stablyai/orca/pull/37102 中 @AmoabaKelvin 将服务器（流式传输）页面中的 target=_blank 链接作为新选项卡打开
* 阻止插件更新审查 toast 导致网络崩溃 client by @nwparker in https://github.com/stablyai/orca/pull/37152
* 切勿打印安装会被 https://github.com/stablyai/orca/pull/37264 中的 @nwparker 拒绝的目录发布条目
* 跳过 dev 文件夹中的嵌套包并总结 https://github.com/stablyai/orca/pull/37300 中@nwparker 阻止的帧请求
* 状态栏项目插件可以通过 @nwparker 在 https://github.com/stablyai/orca/pull/37291 中实时更新
* 拒绝声明的工件路径，其大小写与https://github.com/stablyai/orca/pull/37307中@nwparker的文件不同
* 可以更改或阻止 @nwparker 在 https://github.com/stablyai/orca/pull/37287 中创建终端发送和工作区的挂钩
* 用于代理启动和提示的挂钩，以及 https://github.com/stablyai/orca/pull/37295 中 @nwparker 的插件开发挂钩
* 代理工具调用钩子（Claude Code 可以阻止或重写），由 @nwparker 在 https://github.com/stablyai/orca/pull/37303 中
* Check custom editors and test them with mockEditorHost by @nwparker in https://github.com/stablyai/orca/pull/37293
* Plugin shot --editor to screenshot and drive custom editors by @nwparker in https://github.com/stablyai/orca/pull/37302
* Workers can list and open workspaces, create and read terminals, launch agents by @nwparker in https://github.com/stablyai/orca/pull/37312
* 工作人员可以在 https://github.com/stablyai/orca/pull/37323 中通过 @nwparker 打开文件并运行内置操作
* Commands[].replaces 让 mod 接管 https://github.com/stablyai/orca/pull/37316 中 @nwparker 的内置操作
* Make the editor template the rich-editor recipe by @nwparker in https://github.com/stablyai/orca/pull/37349
* 插件：用于组件面板（目录 4）的盒子布局容器，作者：@nwparker，https://github.com/stablyai/orca/pull/37420

### 性能和可靠性

*减少不必要的重绘和离屏动画，释放未使用的编辑器模型，并改进终端和模拟器恢复。*

* Show serve-sim's camera error instead of no active emulator by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37119
* 显示每个设备的操作系统版本并禁用选择器中不可用的模拟器，作者：https://github.com/stablyai/orca/pull/37122 中的 @AmoabaKelvin
* 当 https://github.com/stablyai/orca/pull/34913 中的 @Misty-Star 的 ps 输出溢出时保留 iOS 助手
* @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37128 中仅安装 adb 时检测 Android 设备
* Type and paste into the Android emulator pane by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37139
* 将死的 Android 预览显示为未与 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37146 中的工作 Connect 连接
* 由 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/37137 报告 Android AVD 在 3 分钟后无法启动而不是超时的原因
* 仅列出工作树附加的模拟器，iOS 和 Android，作者：@AmoabaKelvin，位于 https://github.com/stablyai/orca/pull/37127
* 修复 https://github.com/stablyai/orca/pull/37172 中@AmethystLiang 在库存轮询期间的终端睡眠验证
* 停止单文件差异查看器在 https://github.com/stablyai/orca/pull/37150 中 @nwparker 写入的不相关设置上重新渲染
* 当 Xcode Device Hub 阻止 iOS 模拟器输入而不是通过 https://github.com/stablyai/orca/pull/37140 中的 @AmoabaKelvin 发出静默 ok 时进行报告
* @nwparker 在 https://github.com/stablyai/orca/pull/37229 中一次性计算折叠的子代理信号状态
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/36342 中检测物理 PTY 所有者的前景
* 当选项卡重新打开时保留正在运行的模拟器，而不是切换到 iPhone by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37132
* 停止 https://github.com/stablyai/orca/pull/37153 中 @nwparker 滚动到视图之外的代理旋转器
* 从终端前景为滚动条拇指着色，以便它显示在 https://github.com/stablyai/orca/pull/36583 中 @nwparker 的浅色主题上
* 每次外观翻转一份模式 2031 报告，在 https://github.com/stablyai/orca/pull/37163 中由 @nwparker 重新连接
* 在屏幕外暂停长期存在的状态动画并尊重 @nwparker 在 https://github.com/stablyai/orca/pull/37162 中的减少运动
* 当 https://github.com/stablyai/orca/pull/37188 中的 @nwparker 没有任何更改时，停止 client 托管的页面位置循环
* 在https://github.com/stablyai/orca/pull/37263中由@OrcaWin在选项卡组和更改模式下发布泄露的摩纳哥差异模型
* 将 xterm 升级到 6.1.0-beta.336 并通过 @nwparker 在 https://github.com/stablyai/orca/pull/37266 中重新生成补丁
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/37171 中识别带有标记输入框和默认隐藏光标的 Claude 草稿
* 保留阻止代理启动和 https://github.com/stablyai/orca/pull/37155 中@brennanb2025 设置的 AppImage CLI 的只读关闭错误
* 从 https://github.com/stablyai/orca/pull/37292 中 @nwparker 的重复后备列表中导入主要字体系列
* 返回 https://github.com/stablyai/orca/pull/37269 中 @nwparker 的繁忙窗格后，停止像“2C”打印这样的杂散逃逸尾部

### 中继服务

*在将新启动的备用服务器视为不可用之前，给它们一些时间上线。*

* @nwparker 在 https://github.com/stablyai/orca/pull/37225 中为新启动的备用电池提供死人引导恩典

### 已恢复
*恢复之前的CI检查安排。*

* 恢复 @nwparker 在 https://github.com/stablyai/orca/pull/37341 中的“ci：对主推送的全面检查、PR 上的更改文件 lint、主中断时的松弛警报 (#37282)”

### 测试、CI 和维护

*维护测试、构建检查和内部组织；编排面板工作仍保留在禁用的开关后面，并且在此版本中不可用。*

* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37098 中并置继电器分配存储和测试
* 在 https://github.com/stablyai/orca/pull/36715 中 @brennanb2025 将云包含在稀疏结帐中
* 删除https://github.com/stablyai/orca/pull/37106中@OrcaWin的116个低值测试
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37109 中对应用程序服务器传输和生命周期所有者进行分组
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37124 中对 Web 捆绑包转让所有者进行分组
* @nwparker 在 https://github.com/stablyai/orca/pull/37133 中的小组历史重播和追赶业主
* 在 https://github.com/stablyai/orca/pull/37101 中 @brennanb2025 在 PR 模板中添加风险部分
* 删除https://github.com/stablyai/orca/pull/37138中@OrcaWin的462个低值测试声明
* 通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/34890 中阅读每个代理的合作对象：其经理、工人和同事
* 群组代理查看所有者 @nwparker 在 https://github.com/stablyai/orca/pull/37147
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37195 中修复终端所有权 lint 和源代码控制装置
* CLI 组和 @nwparker 在 https://github.com/stablyai/orca/pull/37182 中的预加载所有者
* 删除https://github.com/stablyai/orca/pull/37201中@OrcaWin的208个低值测试声明
* 通过在https://github.com/stablyai/orca/pull/37174中@brennanb2025提取乘员运行时操作来恢复主要静态分析
* 通过https://github.com/stablyai/orca/pull/37196中的@AmethystLiang将自动化API操作提取到运行时层
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37223 中组织代理浏览器适配器和具体所有者导入
* @nwparker 在 https://github.com/stablyai/orca/pull/37239 中重构 AGENTS.md 以使其清晰和简洁
* 在 https://github.com/stablyai/orca/pull/37176 中@brennanb2025 清理夹具之前关闭种子日志数据库
* 修复 https://github.com/stablyai/orca/pull/37241 中 @nwparker 中 AGENTS.md 中 Footguns 部分的格式
* 在 @nwparker 在 https://github.com/stablyai/orca/pull/37184 中扩展 Spinner 基准测试装置中的子代理列表
* 将“聊天”或“CLI”选项指向“设置”→“https://github.com/stablyai/orca/pull/36871 中@brennanb2025 的代理”
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37235 中对本地 PTY 提供程序和 shell 准备模块进行分组
* 格式化AGENTS.md，以便https://github.com/stablyai/orca/pull/37243中的@brennanb2025通过主格式检查
* 在https://github.com/stablyai/orca/pull/37249中通过@OrcaWin完成AGENTS.md的格式化
* @nwparker 在 https://github.com/stablyai/orca/pull/37250 中进行的组工作区端口扫描和分配回归测试
* 在 https://github.com/stablyai/orca/pull/37253 中跳转到 0.0.62 和 Android 版本Code 26 by @AmoabaKelvin
* 删除https://github.com/stablyai/orca/pull/37240中@OrcaWin的73个低值测试声明
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37254 中对区域设置目录维护所有者进行分组
* 删除https://github.com/stablyai/orca/pull/37251中@OrcaWin的110个低值测试声明
* 滴铸部分； cast lint 解释了 @nwparker 在 https://github.com/stablyai/orca/pull/37244 中的政策
* 将防倾斜和棘轮与 https://github.com/stablyai/orca/pull/37248 中 @nwparker 的其他飞行前检查重叠
* 删除https://github.com/stablyai/orca/pull/37261中@OrcaWin的39个低值测试声明
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37265 中对工作树跳转调色板所有者进行分组
* 删除https://github.com/stablyai/orca/pull/37270中@OrcaWin的58个低值测试声明
* 将悬浮卡固定装置指向 https://github.com/stablyai/orca/pull/37276 中 @nwparker 移动的跳跃调色板固定装置
* 在 https://github.com/stablyai/orca/pull/37271 的 @AmoabaKelvin 的 iOS 版本存档中为 Metro 提供 4 GB 堆
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37272 中对底部抽屉的所有权和测试进行分组
* 需要检查：在 https://github.com/stablyai/orca/pull/37281 中 @nwparker 每次推送之前更改
* 删除https://github.com/stablyai/orca/pull/37280中@OrcaWin的88个低值测试
* 删除https://github.com/stablyai/orca/pull/37290中@OrcaWin的104个低值测试
* 拆分自定义编辑器主机类型，以便 main 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37314 中传递最大行数
* 从 https://github.com/stablyai/orca/pull/37297 中 @nwparker 定义的每个版本中加载移动的模块
* 对主推送的全面检查、PR 上的更改文件 lint、https://github.com/stablyai/orca/pull/37282 中 @nwparker 的主中断时的 Slack 警报
* 在 https://github.com/stablyai/orca/pull/37296 中删除 @OrcaWin 的 96 个低值测试用例
* 将statusBarItems添加到https://github.com/stablyai/orca/pull/37324中@nwparker的RPC批准测试装置中
* 通过 https://github.com/stablyai/orca/pull/37319 中的 @nwparker 从其模块导入自定义编辑器主机类型来恢复主要 lint
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37326 中使 CSP 拒绝 Electron 探针在 Linux 上具有确定性
* 从 https://github.com/stablyai/orca/pull/37329 中的@nwparker 的配置中读取 CSP 探针的结果路径，而不是 argv 的尾部
* https://github.com/stablyai/orca/pull/37306 中 @nwparker 的创作技巧中丰富的编辑器配方和框架主题变量
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37289 中组织会话选项和对话所有者（40 个动作）
* 将编辑器和状态栏配方指向 @nwparker 在 https://github.com/stablyai/orca/pull/37332 中拍摄的插件
* 修复 @nwparker 在 https://github.com/stablyai/orca/pull/37337 中自定义编辑器创作剪纸的问题
* 在https://github.com/stablyai/orca/pull/37327中删除@OrcaWin的17个低值测试用例
* 通过https://github.com/stablyai/orca/pull/37351中的@nwparker重新生成清单引用和架构
* 修复 @brennanb2025 在 https://github.com/stablyai/orca/pull/37346 中移动对话视图模块后 main 的类型检查
* 在https://github.com/stablyai/orca/pull/37345中恢复@brennanb2025对插件路由和提示收据的主机检查
* 停止单元测试等待真正的 5 秒回退（每次运行约 285 秒）并修复 @nwparker 在 https://github.com/stablyai/orca/pull/37362 中的两个片状测试
* 在https://github.com/stablyai/orca/pull/37373中删除@OrcaWin的21个低值测试用例
* 保持插件同意指纹与 Hermes 兼容，以便 https://github.com/stablyai/orca/pull/37370 中的 @brennanb2025 通过主要的移动检查
* 删除 https://github.com/stablyai/orca/pull/37385 中 @nwparker 的重画墙时间竞赛并缩小超大缩放群体（每次运行约 105 秒）
* 在https://github.com/stablyai/orca/pull/37333中删除@OrcaWin的16个低值测试用例
* 删除https://github.com/stablyai/orca/pull/37317中@OrcaWin的43个低值跨版本测试用例
* 删除 https://github.com/stablyai/orca/pull/37391 中@OrcaWin 的 12 个低值辅助测试
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37393 中刷新当前 5 次 12 分片运行的单位分片计时（保留分布 10.2% → 3.8%）
* 通过 https://github.com/stablyai/orca/pull/34891 中的 @brennanb2025 在其聊天或终端的面板中显示每个代理与谁一起工作
* 通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/37404 中删除 11 个文件中的 20 个低值测试
* 在 https://github.com/stablyai/orca/pull/34836 中使用 @brennanb2025 的一个 click 提及编排面板中的代理
* 将打开的 Orchestration 面板显示为 @brennanb2025 在 https://github.com/stablyai/orca/pull/37412 中的浮动卡
* 删除 https://github.com/stablyai/orca/pull/37430 中 @OrcaWin 的 41 个低价值测试和 15 个完整套件
* 在 https://github.com/stablyai/orca/pull/37441 中删除 @OrcaWin 的 33 个低价值测试和过时的基准运行程序
* 删除 https://github.com/stablyai/orca/pull/37453 中 @OrcaWin 的四个低值打字和布局基准套件
* 将 https://github.com/stablyai/orca/pull/37394 中 @nwparker 的两个 WSL 规范更新为已停止的发行版副本和仅服务设置
* 通过 @nwparker 在 https://github.com/stablyai/orca/pull/37334 中组织本机聊天输入和记录所有者
* 删除 30 个低价值测试并修复 https://github.com/stablyai/orca/pull/37421 中@OrcaWin 的选定主机文件夹激活问题
* 由 @nwparker 在 https://github.com/stablyai/orca/pull/37461 中完成直接所有者导入和审核清理
* 删除https://github.com/stablyai/orca/pull/37456中@OrcaWin的低值渲染器和终端测试
* 删除 https://github.com/stablyai/orca/pull/37465 中 @OrcaWin 的 137 个低值渲染器和终端测试
* 删除 https://github.com/stablyai/orca/pull/37471 中@OrcaWin 的 57 个低值渲染器测试
* 删除 https://github.com/stablyai/orca/pull/37474 中 @OrcaWin 的 37 个低值渲染器测试
* 在 https://github.com/stablyai/orca/pull/37479 中删除@OrcaWin 的低价值挂钩重播和瘦适配器套件
* 删除 https://github.com/stablyai/orca/pull/37483 中 @OrcaWin 的 110 个低值钩子测试和 5 个套件
* 删除 https://github.com/stablyai/orca/pull/37487 中@OrcaWin 的 185 个低值渲染器和代理启动测试
* 删除 https://github.com/stablyai/orca/pull/37490 中 @OrcaWin 的 282 个低值代理状态和渲染器帮助程序测试
* 删除https://github.com/stablyai/orca/pull/37496中@OrcaWin的219个低值渲染器投影和接线测试
* 删除 https://github.com/stablyai/orca/pull/37499 中@OrcaWin 的 49 个低值渲染器功能和附件测试
* 删除 https://github.com/stablyai/orca/pull/37504 中@OrcaWin 的 136 个低值预览和工作区操作测试
* 删除 https://github.com/stablyai/orca/pull/37513 中 @OrcaWin 的 270 个低价值路由和代理启动测试
* 删除 https://github.com/stablyai/orca/pull/37514 中 @OrcaWin 的 275 个低值渲染器测试
* 删除 https://github.com/stablyai/orca/pull/37517 中@OrcaWin 的 332 个低值渲染器测试

## 新贡献者
* @guangyu-reflexio 在 https://github.com/stablyai/orca/pull/36791 中做出了第一个贡献
* @Misty-Star 在 https://github.com/stablyai/orca/pull/34913 中做出了第一个贡献
* @hrithiksaini99 在 https://github.com/stablyai/orca/pull/37105 中做出了第一个贡献
* @Rayyan34 在 https://github.com/stablyai/orca/pull/33254 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.246...v1.4.247

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.247` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.247)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
