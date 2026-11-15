---
title: "open-webui v0.11.2"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.11.2"
version: "v0.11.2"
published: "2026-08-31"
type: "patch"
lang: "zh"
---

# open-webui v0.11.2

### 添加

- 🖼️ **终端文件的预览更丰富。** 在终端中生成的 Word 文档和幻灯片现在预览为完成的文档而不是近似值，每个文档预览都会在侧面获得一个带有编号缩略图的页面条，您可以 click 直接跳转到页面，并且警告预览可能与下载不同的通知现在已经消失了。 [提交](https://github.com/open-webui/open-webui/commit/061fb434328ea8365cc4961519e8adbe5ac7b0c1)、[提交](https://github.com/open-webui/open-webui/commit/9d95a0148b3180ba48186bc6928713f969a69047)、[提交](https://github.com/open-webui/open-webui/commit/ae549d3e4af672a63a809e8fe2a6c91e0bfc1067)、[提交](https://github.com/open-webui/open-webui/commit/78d8c9166f1b6626b9aa559a812183ce216eef4f)、[提交](https://github.com/open-webui/open-webui/commit/492ccf3ac0d9aec1f3f2bc6825a3e6d3b32aa0d1)
- ⚡ **每条消息的开销更少。** 未配置管道的部署（这是默认设置）不再为每条聊天消息和后台任务支付安装费用。 [#29146](https://github.com/open-webui/open-webui/pull/29146)
- 🏎️ **更轻量的模型列表刷新。** 在运行多个工作线程的部署中，发现模型列表未更改的刷新不再需要每个工作线程将整个列表重写到共享缓存，从而减少每次刷新成本的工作和流量。 [#29264](https://github.com/open-webui/open-webui/pull/29264)
- 🧵 **繁忙的 Websocket 服务器更加顺畅。** 由 Redis 支持的大型 Websocket 部署现在花费更少的时间来清理旧会话、从 Redis 读回自己的会话数据以及检查每个传出的 Websocket 消息中是否存在 Open WebUI 不发送的文件附件，因此频道帖子、协作更新、心跳和实时聊天更新会减轻繁忙服务器上的负载。 [#28835](https://github.com/open-webui/open-webui/pull/28835), [#28180](https://github.com/open-webui/open-webui/pull/28180)
- 🧰 **新的请求过滤器步骤。** 过滤器作者现在可以在每次模型调用之前使用 `request` 调整有效负载，包括使用工具后的后续调用，而现有的 `inlet`、`stream` 和 `outlet` 过滤器继续像以前一样工作。 [提交](https://github.com/open-webui/open-webui/commit/2daa610cba514dfe2eae008b1fc440d4ddb0e470)、[提交](https://github.com/open-webui/open-webui/commit/2a4ef46ac86ada3447eb6d6c50fd4c1241eebd4d)
- 🤏 **触摸屏上的文件预览有更多空间。** 手机和平板电脑上的文件预览不再显示位于已经很小的预览上方的缩放按钮，只需捏合缩放即可完成工作。 [#29176](https://github.com/open-webui/open-webui/pull/29176), [#29152](https://github.com/open-webui/open-webui/issues/29152)
- 👆 **通过触摸调整面板大小。** 主侧边栏或侧面板旁边的分隔线现在可以在触摸屏上或使用手写笔进行拖动，并且当鼠标离开窗口时，用鼠标进行的拖动会继续跟随指针。 [提交](https://github.com/open-webui/open-webui/commit/cfa2d25317b426c80dca43829afbf113eeccc365)、[提交](https://github.com/open-webui/open-webui/commit/f0ffa7508e75946434794941378675e0c7151eae)、[提交](https://github.com/open-webui/open-webui/commit/e250be48ee16d71202651e4109a175910a6519bb)
- 🔤 **界面字体的选择。** 界面设置现在提供了一个字体系列字段，您可以在其中命名计算机上安装的字体，并在您键入时观察它在界面上的应用，其中一个空字段将返回标准字体。 [提交](https://github.com/open-webui/open-webui/commit/b9765fe97943831e17a68490cd01c70a6ccf1c43)
- ♿ **更广泛的辅助功能模式覆盖范围。** 辅助功能模式现在提高了更多界面的对比度，包括静音文本、表格文本、图标、悬停时颜色元素更改，以及您指向的侧边栏和菜单项后面的突出显示，因此低对比度区域满足辅助功能指南在浅色和深色主题中要求的级别，并且文件夹对话框上的关闭按钮现在向屏幕阅读器宣布，文档和幻灯片预览也是如此，现在可以通过键盘进行访问。 [提交](https://github.com/open-webui/open-webui/commit/e6031ea6daec897eddbcf0c8b03c2d6fad2b506e)、[提交](https://github.com/open-webui/open-webui/commit/797b4c51d1e31f614c8e6eba14ee347c61ad0c7a)、[#29160](https://github.com/open-webui/open-webui/pull/29160)、[提交](https://github.com/open-webui/open-webui/commit/e4694f82ebd2e916c099e5e921c0ca8445ba88a7)、[提交](https://github.com/open-webui/open-webui/commit/120409ef016c1e866247e2aa1eba7606f797a20c)
- 🌐 **翻译更新。** 波兰语、简体中文、德语、爱尔兰语、加泰罗尼亚语和葡萄牙语（巴西）翻译已得到扩展、更正并更新为新的界面文本。 [#29029](https://github.com/open-webui/open-webui/pull/29029)、[#29043](https://github.com/open-webui/open-webui/pull/29043)、[#29108](https://github.com/open-webui/open-webui/pull/29108)、[#29151](https://github.com/open-webui/open-webui/pull/29151)、[#29184](https://github.com/open-webui/open-webui/pull/29184)、[#29179](https://github.com/open-webui/open-webui/pull/29179)、 [#29247](https://github.com/open-webui/open-webui/pull/29247), [#29217](https://github.com/open-webui/open-webui/pull/29217)

### 已修复

- 🛡️ **安全建议**：此版本包括安全和访问控制修复。我们建议您尽早更新生产部署。修复部分中并未列出此版本中的所有安全修复。有些可能会被暂时保留，以便管理员有时间进行升级。 [咨询](https://github.com/open-webui/open-webui/security)
- 💥 **回复停止在聊天中中断。** 对话不再在浏览器中失败，并停止显示助理回复，直到您重新加载，并且已保存在该状态下的聊天会显示并可以再次编辑。 [#29250](https://github.com/open-webui/open-webui/pull/29250), [#29244](https://github.com/open-webui/open-webui/issues/29244)
- ⌨️ **预览快捷键保留在预览中。** 箭头键现在仅在预览具有焦点时才分页文档或幻灯片预览，而不是从页面上的任何位置分页并将箭头键从您输入的任何内容中移开。[提交](https://github.com/open-webui/open-webui/commit/b356b80f8c86d110951301b83607de245b4ef6cc)、[提交](https://github.com/open-webui/open-webui/commit/e4694f82ebd2e916c099e5e921c0ca8445ba88a7)
- 🧊 **流式传输不再在推理模型上停滞。** 来自推理模型的回复现在会流式传输到最后，而不是显示其前几个单词，然后冻结直到生成完成。 [#29053](https://github.com/open-webui/open-webui/pull/29053), [#29035](https://github.com/open-webui/open-webui/issues/29035)
- 💭 **思考停留在想法中。** 模型使用工具后，其下一步的推理现在会显示在折叠的想法部分中，而不是作为普通文本写入回复中。 [#29052](https://github.com/open-webui/open-webui/pull/29052), [#29040](https://github.com/open-webui/open-webui/issues/29040)
- 🧠 **大型工具调用通过与 Anthropic 兼容的 clients 传输速度更快。** 当流式工具调用发送大量参数时，Open WebUI 现在会等到该块实际完成后再检查它，而不是对每个小部分再次进行相同的昂贵检查。 [#28858](https://github.com/open-webui/open-webui/pull/28858)
- 🛑 **停止跨实例工作。** 停止响应现在对将人员分布在 Redis 集群支持的多个实例上的部署生效，而不是无论如何继续到最后的答复。 [#29165](https://github.com/open-webui/open-webui/pull/29165)、[#19840](https://github.com/open-webui/open-webui/issues/19840)
- 🎯 **减少不必要的聊天重新加载。** 包含较旧的未完成回复的对话不再在每次其中其他响应完成时重新加载，仅针对更新实际涉及的回复重新加载。 [提交](https://github.com/open-webui/open-webui/commit/22379ded1aebf0537e1ee3f00a20809d47646bf6)
- 📖 **带有下划线文本的横幅。** 包含下划线文本的横幅现在会显示，而不是无法呈现。 [#29118](https://github.com/open-webui/open-webui/pull/29118), [#29115](https://github.com/open-webui/open-webui/issues/29115)
- 🧰 **固定模型从自己的工具开始。** 从侧边栏中的固定模型开始聊天现在会应用该模型的工具和技能，而不是继承您上次使用的模型中的工具和技能。 [#29058](https://github.com/open-webui/open-webui/pull/29058), [#29050](https://github.com/open-webui/open-webui/issues/29050)
- ❓ **拒绝的ask_user调用不再终止回复。**如果模型以Open WebUI拒绝的方式向用户询问问题，模型现在会收到该错误并可以继续或重试，而不是让聊天停止而没有答案。 [#29252](https://github.com/open-webui/open-webui/pull/29252), [#29077](https://github.com/open-webui/open-webui/issues/29077)
- 🚫 **禁用的模型不再消失。** 在管理模型列表中关闭模型现在会将其保留在视图中，以便您可以将其重新打开，而不是它消失而无法恢复。 [#29037](https://github.com/open-webui/open-webui/pull/29037), [#29036](https://github.com/open-webui/open-webui/issues/29036)
- ✂️ **消息文本保持完整。** 包含尖括号和美元符号的文本不再被误认为是技能提及，并在消息到达模型之前被悄悄删除。 [#29051](https://github.com/open-webui/open-webui/pull/29051), [#29041](https://github.com/open-webui/open-webui/issues/29041)
- 📆 **移动的日历事件保持可见。** 更改事件的日期不再使其从日历中消失，并且已经陷入该状态的事件会再次显示。 [#29085](https://github.com/open-webui/open-webui/pull/29085), [#29067](https://github.com/open-webui/open-webui/issues/29067)
- 🔁 **重复遵循事件。** 重复事件现在可以从其自己的日期和时间计算出其发生情况，其中带有自己的开始日期的重复规则可能会将它们置于错误的工作日或错误的时间。 [提交](https://github.com/open-webui/open-webui/commit/a93c5080380447e3ab9113cacb73b61c57cbc308)
- 🔟 **重复自动化保持计数。** 设置为运行固定次数的自动化不再显示为运行一次，并在您下次打开并保存时悄悄地重写为单次运行。 [#29261](https://github.com/open-webui/open-webui/pull/29261), [#29263](https://github.com/open-webui/open-webui/pull/29263)
- 🗓️ **计划在保存后仍然存在。** 带有开始日期的自动化现在在列表中显示其真实计划，并在保存时保留其每周或每月设置，而不是显示原始规则文本并回退到每日。 [#29263](https://github.com/open-webui/open-webui/pull/29263)
- 🧩 **自定义自动化计划保持自定义。** 使用自定义重复规则重新打开自动化不再丢失编辑器中的自定义规则。 [#29260](https://github.com/open-webui/open-webui/pull/29260)
- 🔢 **准确的管理员用户计数。** 管理员用户选项卡上的计数现在会跟随您的搜索并在您切换选项卡时重置，而不是显示陈旧或未经过滤的数字。 [#29080](https://github.com/open-webui/open-webui/pull/29080), [#29079](https://github.com/open-webui/open-webui/issues/29079)
- 🧷 **侧边栏文件夹不再表现陈旧。** 已从侧边栏删除的文件夹现在也从内部侧边栏注册表中删除，因此以后的侧边栏操作不会针对不再在屏幕上的文件夹。 [#29121](https://github.com/open-webui/open-webui/pull/29121)
- 📱 **小屏幕上可读的模型列表。** 工作区模型列表中的模型标识符和时间戳不再与窄显示屏上的模型名称重叠。 [#29084](https://github.com/open-webui/open-webui/pull/29084), [#29083](https://github.com/open-webui/open-webui/issues/29083)
- 🧱 **长设置值不会压坏标签。** 设置行现在可以让长控件在可用空间内收缩，而不是挤压它们旁边的标签。 [#29229](https://github.com/open-webui/open-webui/pull/29229)
- 🧭 **模型默认面板保持可用。** 管理设置中的模型功能和提示建议部分现在在面板内滚动，而不是超出可用空间。 [#29235](https://github.com/open-webui/open-webui/pull/29235)
- 📲 **下拉菜单保留在屏幕上。** 窄屏幕边缘附近的下拉菜单现在会向内移动以保持完全可见，而不是在选项标签被切断的情况下打开越过边缘。 [#29226](https://github.com/open-webui/open-webui/pull/29226), [#29225](https://github.com/open-webui/open-webui/issues/29225)
- 🌗 **下拉列表遵循主题。** 下拉列表打开的列表现在采用界面其余部分的浅色或深色，而不是系统默认颜色。 [提交](https://github.com/open-webui/open-webui/commit/58a3fadbf336029733d6e5fdde05fd5a24e656fa)
- 🎛️ **阀门对话框保持在边界内。** 其所选选项形成长线的阀门不再将其输入延伸到对话框的边缘及其后面的页面上。 [#29203](https://github.com/open-webui/open-webui/pull/29203), [#29202](https://github.com/open-webui/open-webui/issues/29202)
- 🧹 **共享聊天搜索重置。** 重新打开共享聊天对话框现在会以空搜索框和完整列表开始，而不是未过滤结果上方的剩余搜索词。 [#29082](https://github.com/open-webui/open-webui/pull/29082), [#29081](https://github.com/open-webui/open-webui/issues/29081)
- 🔎 **英语以外的不区分大小写的搜索。** 在 SQLite 支持的安装中，按标签搜索和过滤现在会忽略重音和非拉丁文本的字母大小写，其中仅匹配不重音的英文字母，无论大小写。 [提交](https://github.com/open-webui/open-webui/commit/26f37426b7ef6c0c3b1363f413ac9a83ccaaeb71)
- 🏷️ **带有冒号的标签和示例 URL 可以正确翻译。** `Warning:`、`http://localhost:8000` 和 `https://mineru.net/api/v4` 等界面文本现在可以正确显示，而不会被翻译系统误读。 [#29161](https://github.com/open-webui/open-webui/pull/29161), [#29154](https://github.com/open-webui/open-webui/issues/29154)
- 🔑 **SQLite 上的精确帐户匹配。** 通过身份提供商登录现在可以根据其确切标识符匹配您的帐户，因此标识符为异常长或零填充数字的帐户不再面临与另一个帐户混淆的风险。 [提交](https://github.com/open-webui/open-webui/commit/17cc566707cd2ee78b460e39c7fad23b9c258c70)
- 🗃️ **知识列表可靠加载。** 工作区中的知识页面现在会在打开时填充其列表，而不是偶尔保持空白。 [提交](https://github.com/open-webui/open-webui/commit/e6031ea6daec897eddbcf0c8b03c2d6fad2b506e)
- 🎟️ **没有密钥的工具服务器。** 没有密钥保存的工具服务器连接不再发送空的授权标头，某些服务器会直接拒绝该标头。 [提交](https://github.com/open-webui/open-webui/commit/26f37426b7ef6c0c3b1363f413ac9a83ccaaeb71)
- 🐍 **代码解释器在 Windows 上启动。** 内置代码解释器现在使用 Windows 主机有时会覆盖的浏览器安全文件类型为其脚本和 WebAssembly 文件提供服务，因此 Pyodide 可以在代码运行之前加载而不是失败。 [#29139](https://github.com/open-webui/open-webui/pull/29139), [#29133](https://github.com/open-webui/open-webui/issues/29133)

### 已更改

- ⏱️ **每日重复次数限制。** 日历事件不能再设置为每天重复一次以上，并且现在会拒绝保存重复次数较多的事件，并显示一条解释限制的消息。 [提交](https://github.com/open-webui/open-webui/commit/a93c5080380447e3ab9113cacb73b61c57cbc308)
- 🏷️ **高对比度模式现在为辅助功能模式。** 之前称为“高对比度模式”的界面设置现在称为“辅助功能模式”，在相同位置具有相同的开关。 [提交](https://github.com/open-webui/open-webui/commit/e6031ea6daec897eddbcf0c8b03c2d6fad2b506e)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.11.2` · 📅 发布：2026-08-31 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.11.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
