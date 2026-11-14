---
title: "orca v1.4.250"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.250"
version: "v1.4.250"
published: "2026-11-05"
type: "patch"
lang: "zh"
---

# orca v1.4.250

我们今天发布了两个版本！请务必查看 [v1.4.249 release notes](https://github.com/stablyai/orca/releases/tag/v1.4.249)，其中包括更简单的聊天或终端设置、对对话的更多控制以及重新设计的电话主页。

## 更低的终端内存使用、更清晰的聊天更改以及与 Chrome 兼容的密码管理器 ✨

- ⚡ **降低终端内存使用：** 停止重复读取和解析终端连字的字体文件，修复高内存使用源并在与许多终端的会话中启动崩溃。
- ⚡ **更快的工作树切换：** 性能改进使工作树之间的切换更快。
- 📝 **查看代理更改的内容：** 聊天轮流显示更改的文件和行数，并在桌面和手机上提供内联补丁。
- 🔐 **Chrome 兼容的密码管理器：** 在 **设置 → 浏览器** 中启用，以保存、填写、导入 Chrome 密码并管理登录信息，并使用操作系统的安全存储进行本地加密。
- 💬 **聊天 UI 与您的代理保持同步：** 长时间、需要大量工具的轮流在聊天 UI 中保持连接，除非您选择模型，否则新的聊天将遵循代理自己的模型配置。
- 🖥️ **更可靠的终端和主机：** 防止终端输出间隙后出现杂散转义序列文本，并使配对服务器工作人员和使用情况轮询在无头主机上可用。
- 📱 **更好的手机连续性：** 使用 Cmd/Ctrl+Enter 发送聊天，并让配对的设备遵循它们打开的选项卡。

## 亮点

- **性能：**工作树切换速度更快。终端连字不再解析每个终端的整个字体。在 PR 使用 Commit Mono 进行的 Windows 测试中，32 个终端重新启动，没有出现之前的内存不足崩溃情况；结果取决于字体和工作量。在长时间的代理轮流中关闭工具还可以避免扫描所有其他实时工具。
- **聊天：** 成功的 Claude 和 Codex 编辑在对话中显示为更改的文件摘要，并在选择时加载补丁详细信息。当超过 128 个实时文本或工具条目时，聊天 UI 不再中断正常的座席轮流。 Codex 聊天显示请求的等待持续时间并支持目标暂停、恢复和清除。
- **浏览器：** 在 Orca 浏览器中保存并填写登录信息，并在浏览器设置中管理它们。密码使用操作系统支持的加密；当安全存储不可用时，保管库也不可用。
- **终端和远程主机：** 终端流恢复避免在输出间隙后打印部分转义序列。无头主机启动配对服务器工作人员和使用情况轮询所需的服务。
- **工作区和入门：** 在入门期间选择聊天 UI，隐藏入门清单，查找项目分组之外隐藏的已发现工作树，并使用改进的非活动工作区清理界面。

## 兼容性和升级说明

- **终端连字：** 通用连字仍然可用。内置列表之外的特定于字体的连字可能不再与 GPU 渲染器连接。
- **浏览器密码：** 保管库可在桌面浏览器中使用，包括本地和 SSH 工作区页面；流式配对服务器页面和网络 client 没有保险库。需要安全操作系统加密。
- **聊天模型默认值：** 没有明确模型选择的新聊天使用代理的配置。在代理启动并报告其模型之前，显示的默认值可能会过时。
- **终端恢复：** 远程运行时流保留其现有的恢复行为。

---

## 产品体验
### 本机聊天和代理

*在上下文中查看更改的文件并保持更长的代理轮流移动。*

* 修复（聊天）：让 https://github.com/stablyai/orca/pull/37954 中的 @AmoabaKelvin 准备好待处理的工作区作曲家
* 在 https://github.com/stablyai/orca/pull/37951 中@brennanb2025 在 Codex 聊天中显示请求的等待时间
* 修复（聊天）：在 https://github.com/stablyai/orca/pull/38269 中由 @AmoabaKelvin 运行时，将 Codex 图像生成显示为生成
* 在 https://github.com/stablyai/orca/pull/38257 中 @brennanb2025 保持超过 128 个时间线条目的长代理活动
* 在 https://github.com/stablyai/orca/pull/38256 中的 @brennanb2025 的聊天轮次中直接显示更改的文件
* 当您没有在 https://github.com/stablyai/orca/pull/38252 中 @brennanb2025 选择一个模型时，新的聊天会运行代理的配置模型
* 修复（native-chat）：让箭头键到达https://github.com/stablyai/orca/pull/38285中@big-sheq的问题卡的答案字段
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/38250 中 @brennanb2025 的 Codex 聊天中运行 /goal 暂停、恢复和清除
* 修复（native-chat）：在https://github.com/stablyai/orca/pull/38319中@AmoabaKelvin的折叠聊天消息中显示列表号码
* 修复（native-chat）：在 https://github.com/stablyai/orca/pull/38325 中 @AmoabaKelvin 将长答案包装在问题卡的答案字段中
* 修复（听写）：当您使用https://github.com/stablyai/orca/pull/38327中@AmoabaKelvin的作曲家停止按钮停止时保留文字记录
* 修复（native-chat）：当 https://github.com/stablyai/orca/pull/38322 中的 @AmoabaKelvin 浮动面板移动时，将聊天建议保留在作曲家上方
* 修复（native-chat）：在https://github.com/stablyai/orca/pull/38328中@AmoabaKelvin在代理设置子菜单上方显示@和/建议
* 在 https://github.com/stablyai/orca/pull/38207 中 @brennanb2025 运行后台子代理时，保持 Pi 聊天处于唤醒状态

### 终端、性能和主机

*减少终端内存使用并提高流和无头主机可靠性。*

* 修复（终端）：阻止连字插件读取 https://github.com/stablyai/orca/pull/38240 中 @OrcaWin 的字体文件
* 修复（终端）：仅恢复 xterm 所在的终端流，因此 @nwparker 在 https://github.com/stablyai/orca/pull/38049 中永远不会打印转义尾部
* 修复（orcad）：在 https://github.com/stablyai/orca/pull/38263 中 @nwparker 的 ulimit -v 地址空间限制下停止托管服务器崩溃循环
* 修复（代理状态规则）：将 404 视为未发布任何内容，而不是 @nwparker 在 https://github.com/stablyai/orca/pull/38278 中发出的警告
*修复（服务）：为无头主机提供https://github.com/stablyai/orca/pull/37633中@nwparker启动的桌面窗口路径的服务
* 修复（终端）：每个终端选项卡关闭都会声明是谁询问的； https://github.com/stablyai/orca/pull/38284 中@nwparker 附近没有隐含用户
* 在 https://github.com/stablyai/orca/pull/38213 中使用 @brennanb2025 的共享代理选择器进行终端快速命令

### 浏览器

*保存登录信息并改进远程工作空间浏览器行为。*

* 修复（浏览器）：停止远程工作区中的终端链接，显示 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38262 中的代理发光
* 壮举（浏览器）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/33994 中在 Orca 浏览器中保存并填写密码

### 电话和配对设备

*保持聊天输入和选项卡导航在不同设备上保持一致。*

* 修复（移动）：通过 @brennanb2025 在 https://github.com/stablyai/orca/pull/38267 中使用 Cmd/Ctrl+Enter 发送聊天
* 当代理在 https://github.com/stablyai/orca/pull/38317 中通过 @brennanb2025 工作时，保持手机的聊天发送按钮与桌面相同
* 修复（会话选项卡）：配对设备会跟随它们打开的每个选项卡，而不仅仅是 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38336 中的第一个选项卡

### 工作空间、入职和自动化

*使设置、工作区导航和自动化运行更容易。*

* 在 https://github.com/stablyai/orca/pull/36204 中通过 @AmethystLiang 添加聊天 UI 选项
* 在 https://github.com/stablyai/orca/pull/38241 中的 @AmethystLiang 添加隐藏按钮到入职清单
* 修复（右侧栏）：当 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38261 中创建工作区时，隐藏前一个工作树的面板
* 修复（自动化）：让 Run Now 启动而不检查 https://github.com/stablyai/orca/pull/38029 中 @Jinwoo-H 的 GitHub 源工具
* 在 https://github.com/stablyai/orca/pull/38243 中 @brennanb2025 说明 Orca 在何处打开聊天 UI，从哪里切换回来
* 修复（侧边栏）：在 https://github.com/stablyai/orca/pull/38231 中显示 @brennanb2025 项目分组之外隐藏的已发现工作树
* 修复（侧边栏）：通过https://github.com/stablyai/orca/pull/38288中的@OrcaWin将工作区列表滚动条点击区域扩展到接缝之外
* 将分组工作区卡与 https://github.com/stablyai/orca/pull/38245 中的 @AmethystLiang 的侧边栏标题对齐
* 改进非活动工作区清理界面并在 https://github.com/stablyai/orca/pull/38281 中添加 @Jingyue-Wu 的存储库指示器

### 测试、CI 和维护

*维护测试和跨版本检查。*

* 在 https://github.com/stablyai/orca/pull/38233 中删除 @OrcaWin 的 129 个低价值测试用例和 45 个完整套件
* 删除 https://github.com/stablyai/orca/pull/38238 中 @OrcaWin 的 382 个低价值测试用例和 46 个完整套件
* 删除 https://github.com/stablyai/orca/pull/38255 中 @OrcaWin 的 552 个低价值测试注册和 58 个完整套件
* 测试（跨版本）：通过 @AmoabaKelvin 在 https://github.com/stablyai/orca/pull/38270 中解决发布签出中移动的共享模块
* 测试（e2e）：布局oracle重新启动比较尊重@brennanb2025在https://github.com/stablyai/orca/pull/38271中的terminalsRestart
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38276 中删除低值渲染器套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38292 中删除低值渲染器套件和未使用的装置
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38299 中删除低价值的渲染器套件和孤立的线束
* 测试：删除https://github.com/stablyai/orca/pull/38310中@OrcaWin的低值渲染器后续套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38316 中删除低价值的启动调色板和游览套件
* 测试：通过 @OrcaWin 在 https://github.com/stablyai/orca/pull/38323 中删除低价值帐户和表面设置套件
* 测试：在 https://github.com/stablyai/orca/pull/38330 中删除 @OrcaWin 的低值渲染器启动和设置套件
* 测试：删除https://github.com/stablyai/orca/pull/38337中@OrcaWin的低值外观和聊天设置测试
* 测试：删除https://github.com/stablyai/orca/pull/38339中@OrcaWin的低价值移动和存储库设置测试

## 新贡献者

* @big-sheq 在 https://github.com/stablyai/orca/pull/38285 中做出了第一个贡献

**完整 Changelog**：https://github.com/stablyai/orca/compare/v1.4.249...v1.4.250

---

> 📦 仓库：[stablyai/orca](https://github.com/stablyai/orca) · 🏷️ 版本：`v1.4.250` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/stablyai/orca/releases/tag/v1.4.250)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
