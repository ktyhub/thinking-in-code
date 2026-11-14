---
title: "open-webui v0.13.0"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.13.0"
version: "v0.13.0"
published: "2026-11-03"
type: "minor"
lang: "zh"
---

# open-webui v0.13.0

### 添加

- 📑 **选项卡式工作区。** 聊天顶部的选项卡按钮现在可打开文件、多个终端会话、工件、预览、语音通话和评论的工作区。从 + 菜单添加选项卡，拖动以重新排序，然后创建新文件并将其直接保存到选定的终端中。在编码、分析数据或查看生成的文档时，将对话及其工作文件放在一起。 [提交](https://github.com/open-webui/open-webui/commit/2d7cf5ec99c3fa5c7ee48b91823fb8021b846cf3)、[提交](https://github.com/open-webui/open-webui/commit/5b58b1ebc03024fca1efd498aeabe4d9880dc3aa)、[提交](https://github.com/open-webui/open-webui/commit/a06aa230f75cc2d3512d1bca197a98f3c35da96f)、[提交](https://github.com/open-webui/open-webui/commit/cdc6feecd3769aac41844d81bd775dfb69b44912)
- 🖥️ **打开终端桌面选项卡以供计算机使用。** 从 + 菜单打开桌面选项卡，以查看和控制连接的开放终端提供的桌面，并提供鼠标、键盘、clipboard 和音频支持（如果有）。借助可以调用其桌面工具的模型，您可以在同一桌面中遵循计算机使用工作流程并自行介入：操作图形应用程序、检查生成的文档或处理需要手动输入的步骤。需要启用桌面支持的开放终端连接。 [提交](https://github.com/open-webui/open-webui/commit/b51e68fbb3e641e7f9027f5164fcf6b0e111cf27)、[提交](https://github.com/open-webui/open-webui/commit/3bd0cdd0f3cc075420540462f2bf246c73236495)、[提交](https://github.com/open-webui/open-webui/commit/03401a6e331d25425533933da85d3e5496deca3f)、[提交](https://github.com/open-webui/open-webui/commit/6dd3cc216f63085d2a1105117c65064c3e0ca3b6)
- 🌐 **用于浏览器使用和 Web 应用程序测试的浏览器选项卡。** 在聊天旁边打开网站和本地开发服务器，带有导航控件、多个选项卡和移动视口。在兼容的开放终端连接上，Chrome 模式为您和模型提供共享浏览器会话，以实现浏览器自动化：导航站点、与表单交互以及测试模型构建的 Web 应用程序。您可以亲自观看作品并与页面互动；代理模式仍然可用于预览。需要所选终端上的浏览器支持，并且浏览器使用工具需要 Chrome 可用。 [提交](https://github.com/open-webui/open-webui/commit/fbe69b01fd58a374211d348a28eb5988b11d41de)、[提交](https://github.com/open-webui/open-webui/commit/3bd0cdd0f3cc075420540462f2bf246c73236495)、[提交](https://github.com/open-webui/open-webui/commit/9260e312fb4238b504652eff0d8ca45445ca0821)
- ↔️ **全角选项卡。** 在较大的屏幕上，展开选项卡式工作区以填充聊天区域，并将主要对话保留为其自己的选项卡。在聊天、代码、浏览器和桌面之间切换，以获得更多工作空间，或返回并排布局；您的布局选择将被记住。 [提交](https://github.com/open-webui/open-webui/commit/09030d5dd2def4324d98c25f92cf54b1ec1844f1)、[提交](https://github.com/open-webui/open-webui/commit/1ce8616ab9587ca717015d5af9cb26ee4296311f)
- 💻 **Open WebUI 桌面 0.1.x。** 适用于 macOS、Windows 和 Linux 的单独安装的应用程序现在专注于在您自己的计算机上设置和运行 Open WebUI，并具有可选的 llama.cpp 本地模型。 0.1.0–0.1.4 更新带来了更简洁的界面、可搜索设置、启动日志、可选的自动桌面更新、启动托盘控件以及图像复制和保存。它们还改进了屏幕共享、知识文件夹上传、Linux 图形和快捷方式以及 NVIDIA/AMD 本地模型设置和更新。将其用于托管本地安装和本地 AI 工作流程。 [台式机changelog](https://github.com/open-webui/desktop/blob/v0.1.4/CHANGELOG.md)、[下载v0.1.4](https://github.com/open-webui/desktop/releases/tag/v0.1.4)
- 🌿 **侧面板中的 Git。** 当所选终端的文件夹是 Git 存储库时，选项卡式侧面板中的 Git 面板现在可让您查看差异、暂存、放弃和提交更改、管理分支和工作树、推送和拉取、浏览历史记录并使用 GitHub 拉取请求，并且打开的文件可以通过显示差异显示其更改。 [提交](https://github.com/open-webui/open-webui/commit/58926cfe7b98aab83c2544714d26cdbcc90722a3)、[提交](https://github.com/open-webui/open-webui/commit/3e24a08f8ec8472dcbbc46e7e39ab35aaa4a6f4f)、[提交](https://github.com/open-webui/open-webui/commit/30f0779d12072f98b2c3ce1b08819c72ab9c66d8)、[提交](https://github.com/open-webui/open-webui/commit/295b0778938cb9a133712b1bda4a18df92406375)、[提交](https://github.com/open-webui/open-webui/commit/250108302e6d73406c643a51eb5d9f80d39ddc03)
- ⚡ **实时终端更新。** 在支持它的终端上，Git 面板、开放端口列表和正在运行的进程及其输出现在会在发生变化时立即更新，而不是每隔几秒更新一次。 [提交](https://github.com/open-webui/open-webui/commit/c4c10aa2559e10883797e3dd6702e16dc36eff19)、[提交](https://github.com/open-webui/open-webui/commit/70c5e38fc7ce3864426b484c07ee201cba2b9d07)
- 💭 **侧面聊天。** 在聊天中输入“/side”或“/btw”，或在侧面板中选择“侧面聊天”，现在可以使用聊天内容作为上下文打开临时侧面对话。提出一个简短的问题或探索替代方案，而不需要绕道主要对话；当您关闭其选项卡时，侧边聊天就会消失。可供管理员和拥有新的“允许侧聊天”权限的用户使用（默认情况下该权限处于关闭状态）。 [提交](https://github.com/open-webui/open-webui/commit/321701c1af09d58f9ed6b67a22416ab8ddcfa165)、[提交](https://github.com/open-webui/open-webui/commit/151f7a84d1ca6949234671cd86d697abbce76444)、[提交](https://github.com/open-webui/open-webui/commit/27963030eccda5b8b27905ec0a35d5d9f09788e6)
- 💬 **评论线程。** 管理员现在可以在“管理设置”>“常规”中或使用“ENABLE_COMMENTS”打开评论，这使用户可以在他们可以打开的聊天、笔记、模型、知识库、提示、技能和工具上留下带有回复、反应和提及的评论，包括聊天消息的选定段落，然后在回复中保持突出显示，或在注释页面中突出显示，显示在聊天侧面板的“评论”选项卡中，其中“/comments”打开，工作区列表中包含评论计数。 [提交](https://github.com/open-webui/open-webui/commit/9d1b4ef362f103f2dda05760a44c96df82c064fd)、[提交](https://github.com/open-webui/open-webui/commit/91e8deee74c627fee29c4c81833766040334170f)、[提交](https://github.com/open-webui/open-webui/commit/63312766f8de94bc8a054d7923f2f83410b841a2)、[提交](https://github.com/open-webui/open-webui/commit/04d78a483de671dbe789082b79638f9e44078819)
- 🔔 **通知收件箱。** 侧边栏中的新收件箱收集对您的项目的评论、对您评论的回复、评论和频道中的提及、频道中的回复、失败的自动化运行以及带有未读计数的即将到来的日历事件，管理员可以在管理设置 > 常规中或使用“ENABLE_NOTIFICATIONS”将其关闭。 [提交](https://github.com/open-webui/open-webui/commit/3814b7b2f152c671fd3789e5a0099313d5316467)、[提交](https://github.com/open-webui/open-webui/commit/1a870d9481630861fe6d63de835d983df50b72c3)、[#19539](https://github.com/open-webui/open-webui/issues/19539)
- 🧩 **聊天中的 MCP 应用程序。** 来自 MCP 服务器的交互式应用程序附带的工具现在在运行后立即在聊天中显示该应用程序，在只能到达服务器声明的站点的沙盒框架中，并且调用应用程序想要调用的每个工具都等待您确认。 [提交](https://github.com/open-webui/open-webui/commit/0e0ba872a4d3e70c4e19e5c62b05fd7187b917f3)、[提交](https://github.com/open-webui/open-webui/commit/4ab90a6c1ff9526640e73ad37e67e88e693e2172)、[#21040](https://github.com/open-webui/open-webui/discussions/21040)、[#20915](https://github.com/open-webui/open-webui/discussions/20915)
- ✨ **从顶部栏生成标题。** 打开聊天顶部的重命名字段现在具有与侧边栏相同的闪光按钮，它可以从对话中生成标题并立即保存。 [#33382](https://github.com/open-webui/open-webui/pull/33382)
- 📐 **平板电脑上的侧面板。** 在 768 像素宽的屏幕上，例如平板电脑和窄窗口，频道线程和页面列表以及笔记中的聊天现在在内容旁边而不是内容上方打开，选择一个终端也会在聊天旁边打开其文件，搜索对话框默认显示其预览，并记住您是否在任何窗口大小打开或关闭它。 [提交](https://github.com/open-webui/open-webui/commit/cbeb8e3630cafd7ef6fd28b552bf7114729f21b9), [提交](https://github.com/open-webui/open-webui/commit/c5981aaea6b25bb9b9601e62b9ff75da33aaaf4e)
- 📊 **更多 PowerPoint 图表。** PowerPoint 预览现在可以绘制饼图、圆环图和水平条形图以及低于零的值，并且对于无法绘制的图表显示“图表预览不可用”。 [提交](https://github.com/open-webui/open-webui/commit/09fbbd6d69293084d9e09cbb7d3b93e5d305ec5c)，[#32884](https://github.com/open-webui/open-webui/issues/32884)
- 🧊 **3D 模型预览。** 终端文件浏览器中的 GLB、glTF、STL、OBJ 和 PLY 文件以及聊天回复中显示的文件现在可以在 3D 查看器中打开，您可以旋转和缩放。 [提交](https://github.com/open-webui/open-webui/commit/fe0d22cc24ddc2421b4e36a66a174188cc61d265)
- 🔘 **打开和关闭工具。** 工作区中的工具 > 工具现在为每个可以编辑它们的人提供了打开和关闭开关，并且关闭的工具无法再在任何聊天中选择或运行，包括已选择的聊天。 [提交](https://github.com/open-webui/open-webui/commit/9d1b4ef362f103f2dda05760a44c96df82c064fd)
- 🛠️ **通过聊天创建工具。** 当您要求时，具有本机函数调用的模型现在可以在工作区中为允许创建工作区工具的管理员和用户创建私有 Python 工具，并且可以在模型编辑器的内置工具中的“工具创建”下为每个模型关闭该工具。 [提交](https://github.com/open-webui/open-webui/commit/91241306e2541e984591435d8c25e9ab1442db6b)
- 🤝 **多模型子代理。** 模型编辑器现在允许您为模型选择其他模型来委派工作，从而启用多代理工作流程，例如将研究、编码和审查分配给不同的模型。父模型在用户可以访问的配置模型中进行选择；以前，子代理始终使用与父代理相同的模型。 [提交](https://github.com/open-webui/open-webui/commit/789a0f402abe05e028bc8e0a8824d58b94e26d8f)
- 📏 **知识库文件限制。** 管理员现在可以在管理设置 > 文档中或使用“KNOWLEDGE_MAX_FILE_COUNT”、“KNOWLEDGE_MAX_FILE_SIZE”和“KNOWLEDGE_MAX_UPLOAD_COUNT”来限制知识库保存的文件数量、每个文件的大小以及一次上传的文件数量，并且知识库的所有者可以设置自己的文件数量和大小创建时在“高级”下或从其菜单中的“设置”中进行限制，而全局限制始终适用。 [提交](https://github.com/open-webui/open-webui/commit/7618df3f53a8db2ad5352a789c88673a736b07a4)、[提交](https://github.com/open-webui/open-webui/commit/5c4fb61d862b011cf9efda6b2289de637ba8d6bb)、[#33318](https://github.com/open-webui/open-webui/issues/33318)、[#24845](https://github.com/open-webui/open-webui/discussions/24845)
- 📄 **预览中的文件大小。** 打开的终端文件现在会在文件工具栏中显示其大小，因此您可以检查文档或生成的输出，而无需离开其预览。 [提交](https://github.com/open-webui/open-webui/commit/2e55c365645e538c54b0d31b7bc8a977f6bb8b85)
- 🗂️ **按添加日期对文件进行排序。** 在报告创建时间的终端上，终端文件浏览器现在可以按文件添加时间（名称、大小和修改日期）对文件进行排序。 [提交](https://github.com/open-webui/open-webui/commit/8c308e4e88c48924209f0018d73beb82a4ba2d94)
- ↕️ **移动笔记中的块。** 笔记中的每个段落、标题和其他块现在旁边都有一个手柄，您可以拖动该手柄来移动该块，或者使用 click 来上下移动它。 [提交](https://github.com/open-webui/open-webui/commit/3bb962f2bbd82ebe8ccad6f64304956aee2f4f97)
- 📋 **复制笔记中的代码。** 笔记中的代码块现在有一个复制按钮，并在浅色模式下使用更清晰的语法颜色。 [提交](https://github.com/open-webui/open-webui/commit/ab71357980dab80de23b3597a13a41557a11df99)、[提交](https://github.com/open-webui/open-webui/commit/ee8b69e718aa7f0b962309e0137aa81f557093eb)、[#33455](https://github.com/open-webui/open-webui/issues/33455)
- ⏸️ **侧边栏中显示批准。** 侧边栏中的聊天现在显示“等待批准”标记，同时其中的工具调用等待您允许或拒绝。 [提交](https://github.com/open-webui/open-webui/commit/ddb43c83bac60553b002f148265db0900bc2b9f4)、[提交](https://github.com/open-webui/open-webui/commit/2840f0e07b398b76db04978334e3232fe8b89c31)
- 🏷️ **角色提示变量。** 通过 API 的系统提示、保存的提示和聊天请求现在可以使用“{{USER_ROLE}}”，它被替换为登录用户的角色，例如管理员或用户。 [#33441](https://github.com/open-webui/open-webui/pull/33441), [#4765](https://github.com/open-webui/open-webui/discussions/4765)
- ♿ **辅助功能改进。** 屏幕阅读器用户现在可以听到每个窗口、表单字段、设置和图标按钮的名称，包括管理设置、阀门、过滤器和通道消息操作，键盘用户可以回答工具批准、关闭通知、在管理分析中打开模型详细信息、对分析和组成员表进行排序、调整侧边栏大小、打开笔记本单元格进行编辑、在阀门中使用多选列表、选择状态表情符号、选择标签和语音建议、打开 Web 搜索源、使用菜单在“搜索”窗口中，留在全尺寸图像查看器和侧抽屉内，直到它们关闭并到达日历上的每个事件。关闭从菜单打开的窗口现在会将焦点返回到菜单按钮，选项卡取消快捷方式记录，任务列表复选框按其文本命名，未选择的分析选项卡在辅助功能模式下具有更好的对比度。 [提交](https://github.com/open-webui/open-webui/commit/a671146b9172407d11240b8130eda9e92dfb2225)、[提交](https://github.com/open-webui/open-webui/commit/0171427a10f168da0d5b733fa5d0786c4d63b851)、[提交](https://github.com/open-webui/open-webui/commit/51cef9e26f17ad5baf1f6d51f72d87651d7e98e4)、[提交](https://github.com/open-webui/open-webui/commit/0a18dfc1841f99b143ae697eff0e51a24057d4fd)
- 🔄 **一般改进。** 在整个应用程序中实施了各种改进，以增强性能、稳定性和安全性。
- 🌐 **翻译更新。** 葡萄牙语（巴西）、拉脱维亚语、阿塞拜疆语、巴斯克语、孟加拉语、波斯尼亚语、保加利亚语、宿务语、克罗地亚语、捷克语、丹麦语、荷兰语、爱沙尼亚语、法罗语、菲律宾语、加利西亚语、德语、希腊语、希伯来语、匈牙利语、印度尼西亚语、爱尔兰语、日语、韩语、立陶宛语、马来语、挪威语、波斯语、波兰语、旁遮普语、罗马尼亚语、俄语、塞尔维亚语、斯洛伐克语、斯洛文尼亚语、西班牙语（西班牙）、泰米尔语、土耳其语、土库曼语、乌克兰语和越南语得到增强和扩展。

### 已修复

- 🛡️ **安全建议**：此版本包含**安全修复**。我们**强烈建议**尽快**更新**所有部署，以安装最新的安全修复程序。这些修复**未在此 changelog 中列出**；我们将在 CVE 分配后立即为他们发布安全公告。 [咨询](https://github.com/open-webui/open-webui/security)
- 🔃 **新聊天保持同步。** 从主页启动的聊天在创建后会再次与服务器同步，因此从聊天控件中删除的文件在重新加载后不再返回，并且与“允许回复”共享的聊天的所有者会再次在其他人的回复中重新生成。 [#33377](https://github.com/open-webui/open-webui/pull/33377), [#33376](https://github.com/open-webui/open-webui/issues/33376)
- 📂 **文件夹页面上的临时聊天。** 使用顶部的按钮或“/temporary”在文件夹页面上打开或关闭临时聊天，现在使您保持在文件夹页面上，因此下一次聊天仍保存在文件夹中并获取其系统提示、默认模型和知识。 [#33456](https://github.com/open-webui/open-webui/pull/33456), [#33448](https://github.com/open-webui/open-webui/issues/33448)
- 🧵 **话题回复焦点。** 在频道消息上选择“在话题中回复”现在会将光标置于话题的回复框中，当话题面板已打开时也是如此。 [#33467](https://github.com/open-webui/open-webui/pull/33467), [#33466](https://github.com/open-webui/open-webui/issues/33466)
- 🪟 **线程消息操作可见。** 将鼠标悬停在频道线程中的顶部消息现在会显示其整个操作工具栏，而不是在面板边缘切断其上半部分。 [提交](https://github.com/open-webui/open-webui/commit/08f197ad8d87b4f71be311888541c601942e96b9)，[#33472](https://github.com/open-webui/open-webui/issues/33472)
- 📞 **中断实时通话。** 当报告的播放位置与音频不匹配时，在实时语音通话中说话时打断模型不再结束整个通话。 [提交](https://github.com/open-webui/open-webui/commit/e5a2e6438e6f7455c7f0dcc304cd1b08329afe8b)，[#33550](https://github.com/open-webui/open-webui/issues/33550)
- 📶 **重新连接后的临时聊天。** 现在，在连接断开和恢复后，仍在临时聊天中写入的回复会不断到达，而无法完成的回复会显示“连接丢失。请重试”。而不是永远加载。 [提交](https://github.com/open-webui/open-webui/commit/321701c1af09d58f9ed6b67a22416ab8ddcfa165)
- 🏠 **新的聊天初始化。** 现在打开或重新加载主页或文件夹会选择模型并再次应用聊天 URL 参数，而不是将模型留空并忽略链接的设置。 [提交](https://github.com/open-webui/open-webui/commit/082df44d92178b6895153774bf6656c538cbce40)
- ✍️ **恢复聊天草稿。** 保存的草稿文本现在会在新聊天编辑器安装后返回到消息输入，而不是在初始化期间消失。 [提交](https://github.com/open-webui/open-webui/commit/4ea29c0d6198e44a84aae01475b003c8bc192e5b)
- 🧩 **嵌套代码预览。** 预览现在可以打开列表、引号和详细信息块内的代码块，因此可以直接检查嵌入的示例和生成的工件。 [提交](https://github.com/open-webui/open-webui/commit/aec5796a535beaf3730e8c8a8b0426a94b3b1b44)
- 🖼️ **从照片应用程序中删除图像。** 当源省略文件类型（包括从 macOS 照片中拖动的照片）时，现在可以从其内容中识别放入聊天和频道中的图像，而不是被视为通用文件。 [提交](https://github.com/open-webui/open-webui/commit/563d621854e7a465a7713a811e996729a3e23499)
- 📏 **实时上下文使用情况估计。** 上下文指示器现在会考虑最新报告的令牌使用情况之后到达的输出，并避免在结构化输出中出现时对助理文本进行两次计数，从而更容易在长时间代理运行期间跟踪上下文窗口的使用情况。 [提交](https://github.com/open-webui/open-webui/commit/8e61cc02106e4f698494c7813fa6602fd46f5f87)
- 🔌 **支持响应的 API 流。** 使用 Open WebUI 聊天完成 API 的 Client 现在即使上游模型使用响应 API 也会收到预期的流格式，包括文本、推理、工具调用、令牌使用和完成原因。 [提交](https://github.com/open-webui/open-webui/commit/e789513ea62eb0c56f36d7c48996f084931f1c49)
- 😀 **频道反应名称。** 将反应悬停在频道消息上现在会显示当这些名称可用时谁做出反应，而不是仅显示计数。 [提交](https://github.com/open-webui/open-webui/commit/ea1c60fbdf3cfc08ddf4128ab33007380228e86c)
- 📊 **分析活动滚动。** 活动图表现在跟踪实际滚动的元素，在浏览较长的活动列表时保持其可见行同步。 [提交](https://github.com/open-webui/open-webui/commit/f0e7d718caaba875621bf686c13c9c021d28643d)
- 🔑 **已保存的 OAuth 提供程序设置。** OAuth 提供程序现在会在 Open WebUI 启动时加载其已保存的连接设置。管理设置还解释说，对提供商连接的更改需要重新启动每个 Open WebUI 实例。 [提交](https://github.com/open-webui/open-webui/commit/bab66b2c2ff0e48b2a07a278d73e490b6577297c)

### 已更改

- ⚠️ **数据库迁移**：此版本包括数据库架构更改；我们强烈建议您在生产环境中升级之前备份数据库和所有关联数据。如果您正在运行多工作线程、多服务器或负载平衡部署，则所有实例必须同时更新，不支持滚动更新，并且会因架构不兼容而导致应用程序失败。
- 🎛️ **模型菜单中的控件。** 聊天文件、阀门、系统提示和高级参数从聊天顶部的“控件”面板移至消息输入旁边的模型控件菜单中的“控件”，顶部的按钮现在可打开选项卡式侧面板。 [提交](https://github.com/open-webui/open-webui/commit/2d7cf5ec99c3fa5c7ee48b91823fb8021b846cf3), [提交](https://github.com/open-webui/open-webui/commit/950da84bdb57423d9d2ddd6d29659d56174d8c22)
- 🗺️ **聊天菜单中的概述。** 聊天概述（所有消息及其分支的地图）现在从聊天菜单中的概述中作为全屏窗口打开，而不是作为聊天控件中的选项卡。 [提交](https://github.com/open-webui/open-webui/commit/fe0d22cc24ddc2421b4e36a66a174188cc61d265)
- 🔁 **更高的工具调用限制。** 使用本机函数调用的单个响应现在可以运行最多 1024 轮工具调用，然后才会因“达到工具调用限制”而停止，高于 256 轮，并且将“CHAT_RESPONSE_MAX_TOOL_CALL_ITERATIONS”设置为 256 会保留旧限制。 [#33384](https://github.com/open-webui/open-webui/pull/33384)
- 🔓 **默认无子代理限制。** 管理设置中的子代理限制以及通过“SUBAGENTS_MAX_CONCURRENT”、“SUBAGENTS_MAX_ASYNC”、“SUBAGENTS_MAX_ITERATIONS”和“SUBAGENTS_MAX_OUTPUT”现在默认为无限制，留空表示无限制，默认为一次 20 个、后台 20 个、工具 30 个循环输出每个 30000 个字符。 [提交](https://github.com/open-webui/open-webui/commit/f0cc1bb86e52ec629993f5cd26f5f001bd5b72a6)
- 🧠 **上下文压缩和提示缓存。** 当同一模型处理会话及其压缩摘要时，符合条件的请求现在会重用会话的提示结构，以便提供者可以使用其提示缓存。这可以降低总结长对话和座席工作流程的成本；其他请求保留单独的摘要路径。 [提交](https://github.com/open-webui/open-webui/commit/a8b478ed7b8d22fe5b8f96be3c4cfd08cd30affb)
- 💻 **桌面 0.1.x 升级更改。** Open WebUI Desktop 不再在远程服务器之间切换，捆绑 Open Terminal，或提供旧的 Spotlight 和全局语音覆盖。现有远程连接用户应查看 [Open WebUI Tether](https://github.com/open-webui/tether)。上述“打开终端桌面”和“浏览器”选项卡使用单独配置的“打开终端”连接。 [台式机0.1.0 release notes](https://github.com/open-webui/desktop/releases/tag/v0.1.0)
- 📭 **文件处理警报已删除。** 设置 > 通知中的个人通知不再提供“检索内容处理失败”，因此当文件处理失败时，通知 Webhook 不再收到警报。 [提交](https://github.com/open-webui/open-webui/commit/3814b7b2f152c671fd3789e5a0099313d5316467)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.13.0` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.13.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
