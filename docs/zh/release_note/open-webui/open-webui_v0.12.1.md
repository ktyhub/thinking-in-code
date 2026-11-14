---
title: "open-webui v0.12.1"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.12.1"
version: "v0.12.1"
published: "2026-10-14"
type: "patch"
lang: "zh"
---

# open-webui v0.12.1

### 添加

- 🧱 **频道中的外部应用程序。** 管理员现在可以在管理设置 > 常规中打开应用程序，或使用“ENABLE_APPS”打开应用程序，并通过 HTTPS 地址在管理设置的新应用程序选项卡中连接外部应用程序，检查每个应用程序要求的权限，例如阅读其提及、阅读频道消息或发布消息，以及选择谁可以使用它；然后，频道管理员可以通过频道信息中的“添加成员”将应用程序添加到频道，该应用程序会与成员及其个人资料图片一起列出，并使用@提及它，使其在频道中回答，并提供仅向提问者显示的回复，显示带有标题、字段和缩略图的卡片，提供按钮或链接，跟进较长任务的后续消息或提供要下载的 Markdown 文件。一旦专用网络地址上的应用程序的地址列在“APP_ALLOWED_PRIVATE_ORIGINS”中，就可以通过普通 HTTP 访问该应用程序。 Open WebUI 保持与每个应用程序的实时连接，管理设置 > 应用程序会显示其是否已连接，并且连接失败会列出原因，例如 API 密钥被拒绝、公钥错误或无法访问的地址。 [提交](https://github.com/open-webui/open-webui/commit/04bccecb8e3289c9336404c1ab4c6d124fabdc2f)、[提交](https://github.com/open-webui/open-webui/commit/774007d7284f6266b4df728eb661c50e165cf2b2)、[提交](https://github.com/open-webui/open-webui/commit/2ba35625b35b2bd92fa34033dedfc29d2ab1e5fb)、[提交](https://github.com/open-webui/open-webui/commit/2d4712824218faa96d9da7d7772f78f2872f25db)、[提交](https://github.com/open-webui/open-webui/commit/4ab60527e70ffb3c75c6bf9d1ce12578dcf15e96)、[提交](https://github.com/open-webui/open-webui/commit/e9635596ddef29589ab3c747da4e7563bd77ad2f)、[提交](https://github.com/open-webui/open-webui/commit/d823ebd96d2996e2d8a5cd4cf5596c5e8b8db1fd)、[提交](https://github.com/open-webui/open-webui/commit/1786d6cdb0a9db80649816eaa987da4aba5de0ed)、[提交](https://github.com/open-webui/open-webui/commit/03f5191acab77a5e3ab9ed3c09f9e2e8ba889c20)、 [提交](https://github.com/open-webui/open-webui/commit/be6f0a66562920f38fcb0a876ce54970a47d169c)
- 🎭 **标准语音通话中的头像。** 模型的头像现在也会出现在使用标准通话模式的语音通话中，随着语音回复移动，并且当模型使用本机函数调用时可以播放模型的手势，其中头像和手势仅在实时通话中起作用；即使实时关闭，模型编辑器中的语音头像设置现在也会显示。 [提交](https://github.com/open-webui/open-webui/commit/78613d86f7564d1927ebf5f11292419fdeadb18c)
- 🪪 **个人资料图片中的个人资料卡。** Cli 现在，在共享聊天中写入消息的人、侧边栏中共享聊天所有者的照片或侧边栏中直接消息合作伙伴的照片会打开他们的个人资料卡。 [提交](https://github.com/open-webui/open-webui/commit/a165c8385843c4f87e3eeb5797527004765e5708)
- 🗂️ **在新选项卡中打开侧边栏文件夹。** 现在可以使用中间的 click 或 Ctrl 或 Cmd click 在新选项卡中打开侧边栏中的文件夹，并且可以从浏览器的上下文菜单复制其链接。 [提交](https://github.com/open-webui/open-webui/commit/ed3caa5619b8a577d0fc2fe2b6bdae90fc47ac69)，[#29750](https://github.com/open-webui/open-webui/issues/29750)
- 🔀 **比较和合并修订版。** 模型编辑器中的技能文件编辑器、提示编辑器和系统提示符都有一个“比较修订版”按钮，聊天输入在其 + 菜单中具有“比较文本”和一个 /compare 命令，每个命令都会打开一个并排视图，您可以在其中粘贴建议的修订版（例如由模型编写的修订版），单步执行每个更改，沿任一方向复制更改并将结果应用到草稿，技能文件编辑器还为打开的文件提供一个“复制”按钮，并比较文件中的两个文件终端文件浏览器，带有选择比较和与选定内容比较的功能，现在可以打开相同的视图。 [提交](https://github.com/open-webui/open-webui/commit/ab518a43218e5d1549292f7d995895cf4e8afd93)、[提交](https://github.com/open-webui/open-webui/commit/b374e0bb263d3793f024af1038e40e15a7f14867)、[提交](https://github.com/open-webui/open-webui/commit/cae8a7e19943332cae6f1f35bbe8f7b51eadf48c)、[提交](https://github.com/open-webui/open-webui/commit/ff502881e0d3e4acf58d4d756e3144fde259e042)、[提交](https://github.com/open-webui/open-webui/commit/1045d74c757bdd08151e2c18e0d44155a590495f)、[提交](https://github.com/open-webui/open-webui/commit/d51fffb4688d84310abba73301bc2f0c76c62c89)、[提交](https://github.com/open-webui/open-webui/commit/de642f1dba23d0cb5b2305704947e381c26f53c0)、[提交](https://github.com/open-webui/open-webui/commit/b0ba137551e1290062d8d1f3dba8ab7c6f884a1d)
- 🔕 **静音频道。** 频道或直接消息的菜单现在有一个通知设置，其中提及仅将其静音，因此它不再显示未读计数或通知您，除非有人@提及您。 [提交](https://github.com/open-webui/open-webui/commit/e5c80682b9dc9a38274dc81eeb35a3c41be6dfd0)
- 📤 **将技能导出为 .skill 文件。** 技能菜单具有导出 .skill，它将一项技能及其所有文件下载为单个 .skill 存档，并且 .skill 文件可以像 ZIP 文件一样从磁盘或链接导入。 [提交](https://github.com/open-webui/open-webui/commit/fe0e725997a7f7be16e7463b3731f0340b5a62ab)
- 📣 **在频道中键入提及。** 现在，当名称与成员、模型、应用程序或频道匹配，并且从另一条消息粘贴的提及不断指向同一个人时，在频道消息中写入 @ name 或 #channel 而无需从列表中选择，现在会将其转换为真正的提及。 [提交](https://github.com/open-webui/open-webui/commit/f9c524d31d7737239aa990751cca4705e3872cb8), [提交](https://github.com/open-webui/open-webui/commit/ba3e2273586850f3c69f61d70bfa7e603f32634b)
- 👥 **谁在共享聊天中写入。** 共享文件夹中的聊天现在显示在其中写入的每个人的照片，最多三张，其余的计数，每个人都会打开该人的个人资料卡。 [提交](https://github.com/open-webui/open-webui/commit/35c927ba99bea3997f57899008df2a2abd8b9354)
- 🗂 **悬停时文件夹预览。** 将文件夹悬停在侧边栏中会显示一张卡片，其中包含默认模型、知识和聊天计数，以及用于编辑文件夹的按钮。 [提交](https://github.com/open-webui/open-webui/commit/e5c80682b9dc9a38274dc81eeb35a3c41be6dfd0)
- 🎠 **转动和缩放语音头像。** 在语音通话和模型编辑器预览中，现在可以通过拖动来转动语音头像，用右键拖动、Shift 拖动或两根手指平移，用鼠标滚轮或捏合缩放，并用双 click 重置。 [#32378](https://github.com/open-webui/open-webui/pull/32378)
- 🔍 **更快的单字聊天搜索。** 在聊天中搜索单个字现在速度提高了约 40%，因为每个聊天都会检查一次而不是两次。 [#32268](https://github.com/open-webui/open-webui/pull/32268), [#32266](https://github.com/open-webui/open-webui/issues/32266)
- 👯 **每个模型的消息对。** 生成消息对，Ctrl+Shift+Enter，现在为每个选定的模型并排添加一个占位符回复，其中只有第一个模型有一个，并且并排视图在重新加载后保持不变。 [#32309](https://github.com/open-webui/open-webui/pull/32309)
- 🔆 **通话期间屏幕打开。** 现在，屏幕在实时语音通话和标准通话期间保持打开状态，并且可以在通话结束后再次关闭，其中实时通话会使其变暗，而标准通话在结束通话后会使其保持打开状态。 [提交](https://github.com/open-webui/open-webui/commit/a9227421d847eb51d7c59ec336420bbb20dfbcc8)，[#32251](https://github.com/open-webui/open-webui/issues/32251)
- ☁️ **Azure OpenAI 实时通话。** 实时语音通话现在可以使用 Azure OpenAI：在音频设置的语音通话部分，管理员选择 Azure OpenAI 作为提供程序，输入 Azure 终结点和部署名称，并使用 API 密钥或 Microsoft Entra ID 登录，更清晰的错误现在指向错误的凭据或错误的 URL 或部署，其中包含“AUDIO_REALTIME_PROVIDER”和新设置的“AUDIO_REALTIME_AUTH_TYPE”环境变量。 [提交](https://github.com/open-webui/open-webui/commit/3ec07745036897f52bacf24351dd71f999902034)，[#32343](https://github.com/open-webui/open-webui/issues/32343)
- 📊 **分析中的输入和输出令牌。** Analytics 仪表板现在在一个带有模型和用户开关的表中显示模型使用情况和用户活动，两个列表都将输入、输出和总令牌显示为单独的列，每个列都可以排序，其中它们显示单个令牌列。 [提交](https://github.com/open-webui/open-webui/commit/00f12c0e47fb47b1318a20e97bacc753e769612b)、[提交](https://github.com/open-webui/open-webui/commit/21322d9cb192060b51857769c0ad9f9f14e1185d)
- 🎚️ **实时输入参数。** 管理员现在可以在音频设置的语音通话部分的输入参数下为实时语音通话的音频输入添加额外的设置，如 JSON，例如降噪，或使用“AUDIO_REALTIME_INPUT_PARAMS”环境变量。 [提交](https://github.com/open-webui/open-webui/commit/00f12c0e47fb47b1318a20e97bacc753e769612b)
- 🔄 **一般改进。** 在整个应用程序中实施了各种改进，以增强性能、稳定性和安全性。
- 🌐 **翻译更新。** 葡萄牙语（巴西）、意大利语、捷克语、罗马尼亚语、荷兰语、乌克兰语、波兰语、泰语、西班牙语、马来语、波斯语、韩语、阿拉伯语、日语、印度尼西亚语、俄语、越南语、土耳其语、印地语、德语、希腊语、匈牙利语、希伯来语、保加利亚语、瑞典语、爱沙尼亚语、挪威语、立陶宛语、克罗地亚语、斯洛伐克语、波斯尼亚语、丹麦语、斯洛文尼亚语、加利西亚语、拉脱维亚语、藏语、塞尔维亚语、孟加拉语、宿务语、阿塞拜疆语、巴斯克语、爱尔兰语、格鲁吉亚语、卡比尔语、旁遮普语、法罗语、泰米尔语、维吾尔语、乌尔都语、菲律宾语和土库曼语得到增强和扩展。

### 已修复

- 🔓 **通过纯 HTTP 实现技能编辑器等。** 当通过网络地址通过纯 HTTP 打开 Open WebUI 时，技能编辑器、向模型控件添加选项、向语音头像添加手势、实时语音通话和 Playground 聊天现在可以正常工作，但它们会失败并显示“crypto.randomUUID 不是函数”，并且技能编辑器保持禁用状态。 [提交](https://github.com/open-webui/open-webui/commit/d786ed56c98e9b0fd4c8af111e1c95d4e00c7789)、[提交](https://github.com/open-webui/open-webui/commit/2eb77fc27f08924252d0abf5fe19182532075511)、[#32238](https://github.com/open-webui/open-webui/issues/32238)
- 📑 **外部知识引用的页面标题。** 来自外部知识库（例如 Qdrant、Milvus 或 pgvector，其来源为网址）的引用现在会在答案下方的来源列表中显示页面标题，与文本中的编号标记相匹配，其中显示了完整的地址。 [#32232](https://github.com/open-webui/open-webui/pull/32232), [#32231](https://github.com/open-webui/open-webui/issues/32231)
- 🧭 **Redis Sentinel 主名称带有 capital 字母。** 对于 Redis Sentinel，“REDIS_URL”中带有 capital 字母的主名称，例如 myMaster，OT-Container-Kit redis-operator 的默认值，现在可以使用，它是小写的，并且每个Redis 呼叫失败，并显示“未找到主设备”。 [#32234](https://github.com/open-webui/open-webui/pull/32234), [#31918](https://github.com/open-webui/open-webui/issues/31918)
- 🔐 **带有密码的 Redis Sentinels。** 使用密码保护的 Redis Sentinels 现在可以工作，因为“REDIS_URL”和“WEBSOCKET_REDIS_URL”中的凭据也用于 Sentinels，其中每个 Redis 调用都会失败并显示“未找到主设备”； “WEBSOCKET_REDIS_OPTIONS”中设置的 Sentinel 凭据仍然优先。 [#32241](https://github.com/open-webui/open-webui/pull/32241), [#32240](https://github.com/open-webui/open-webui/issues/32240)
- 🔗 **外部知识引用链接。** Cli 从外部知识库（例如 Qdrant、Milvus 或 pgvector）引用引用的标题或内容链接现在会打开引用的网页，或者当来源不是网址时将标题显示为纯文本，从而导致未找到错误。 [#32233](https://github.com/open-webui/open-webui/pull/32233), [#32231](https://github.com/open-webui/open-webui/issues/32231)
- 🧰 **新聊天中选择的工具。** 从集成菜单中选择的工具、网络搜索切换和新聊天中选择的技能现在在切换到另一个聊天并返回或重新加载后保持不变，其中聊天会回退到模型的默认工具并破坏提示缓存。 [#32235](https://github.com/open-webui/open-webui/pull/32235), [#32084](https://github.com/open-webui/open-webui/issues/32084)
- 📅 **重复自动化运行一次。** 使用“每日”、“每周”或“每月”选择器设置的自动化现在在您自己的时区中选择的确切分钟运行，其中它们可以一次运行两次，并且服务器时区后面的用户可以将其第一次运行移至第二天。 [#32264](https://github.com/open-webui/open-webui/pull/32264), [#32263](https://github.com/open-webui/open-webui/issues/32263)
- 📵 **共享聊天中没有语音通话。** 语音模式按钮不再显示在您可以回复的共享聊天中，并且当您切换到通话时，打开的通话将关闭。 [提交](https://github.com/open-webui/open-webui/commit/3a54306c50f351e5d6e89e296cb32518535712ee)
- 🙆 **VRM 0.x 头像休息姿势。** 以较旧的 VRM 0.x 格式制作的语音头像现在手臂向下休息，以正确的方式呼吸和摇摆，其中手臂举起，空闲动作被镜像。 [#32270](https://github.com/open-webui/open-webui/pull/32270), [#32269](https://github.com/open-webui/open-webui/issues/32269)
- 🕶️ **临时聊天中的后续建议。** 临时聊天中的后续建议现在基于刚刚编写的回复，它们是在没有回复的情况下生成的。 [提交](https://github.com/open-webui/open-webui/commit/53a8f131f305a3beb87376d5dbc05889883fb950)
- 🔁 **登录后没有重新连接循环。** 您在不重新加载页面的情况下登录的选项卡现在会在连接断开（例如睡眠、网络更改或服务器重新启动）后重新连接登录，自 0.12.0 以来，它每秒重新连接几次，直到页面重新加载并对服务器造成沉重负载。 [#32341](https://github.com/open-webui/open-webui/pull/32341), [#32338](https://github.com/open-webui/open-webui/issues/32338)
- 📎 **笔记上传不再卡住。** 在保存另一个文件或编辑时上传到笔记的文件现在已完成并在重新加载后保持附加状态，它会继续旋转并在没有文件的情况下保存。 [#32328](https://github.com/open-webui/open-webui/pull/32328), [#32327](https://github.com/open-webui/open-webui/issues/32327)
- 🪟 **重新生成后并排回复。** 添加第二个模型并按“重新生成”现在可以在重新加载后并排保留两个回复，其中第二个回复显示为第一个回复的另一个版本。 [#32326](https://github.com/open-webui/open-webui/pull/32326), [#32325](https://github.com/open-webui/open-webui/issues/32325)
- 👎 **保留评分原因和评论。** 当生成的标签到达时，保存在评分表单中的原因和评论不再在几秒钟后被擦除，无论是在回复中还是在管理面板 > 评估 > 反馈中。 [#32334](https://github.com/open-webui/open-webui/pull/32334), [#32333](https://github.com/open-webui/open-webui/issues/32333)
- 🐙 **带有符号链接的 GitHub 技能导入。** 现在，当存储库在技能文件夹外部具有符号链接（例如根目录中的 CLAUDE.md 链接）时，可以从 GitHub 链接导入技能，该链接会失败并显示“存档不能包含链接或特殊文件”。 [#32313](https://github.com/open-webui/open-webui/pull/32313), [#32312](https://github.com/open-webui/open-webui/issues/32312)
- 🗒️ **带有注释的生产版本。** 当模型附加了注释作为知识时，现在可以将旧模型版本设置为生产版本，但失败并显示“参考知识不可用”。 [#32317](https://github.com/open-webui/open-webui/pull/32317), [#32316](https://github.com/open-webui/open-webui/issues/32316)
- 📂 **打开的知识文件保持打开状态。** 删除知识库中的文件夹不再关闭查看器中打开的文件，除非删除操作删除了该文件。 [#32319](https://github.com/open-webui/open-webui/pull/32319), [#32318](https://github.com/open-webui/open-webui/issues/32318)
- 💾 **保存隐藏在其他人的消息中。** 在允许回复的共享聊天中，编辑其他人写的消息不再显示静默还原文本的“保存”按钮；发送并另存为副本保留。 [#32321](https://github.com/open-webui/open-webui/pull/32321), [#32320](https://github.com/open-webui/open-webui/issues/32320)
- 👁️ **重新启用的模型保持打开状态。** 在“管理设置”>“模型”中，重新打开模型或再次显示模型现在会在重新加载后保持不变，并且该模型出现在聊天模型选择器中，对于在第二次更改之前从未编辑过的模型，该模型看起来已保存但已丢失。 [#32354](https://github.com/open-webui/open-webui/pull/32354)、[#32353](https://github.com/open-webui/open-webui/issues/32353)、[#32368](https://github.com/open-webui/open-webui/pull/32368)、[#32365](https://github.com/open-webui/open-webui/issues/32365)
- 💲 **询问和解释中的美元符号。** 对所选文本进行询问和解释现在在所选文本和问题中保留美元符号，例如“$5”或“$&”，这些符号已被删除或替换为其他文本。 [#32356](https://github.com/open-webui/open-webui/pull/32356), [#32355](https://github.com/open-webui/open-webui/issues/32355)
- ▶️ **代码块显示其最后的值。** 在浏览器中运行最后一行返回数字、列表或其他值（例如 square(7)）的代码块，现在显示该值，该值停留在运行状态一分钟，并以“超出执行时间限制”结束。 [#32360](https://github.com/open-webui/open-webui/pull/32360), [#32359](https://github.com/open-webui/open-webui/issues/32359)
- 🔔 **移动日历事件的提醒。** 日历事件在提醒消失后移动到新时间，现在会在新开始之前再次提醒您，而它不再提醒。 [#32358](https://github.com/open-webui/open-webui/pull/32358), [#32357](https://github.com/open-webui/open-webui/issues/32357)
- 🌩️ **Cloudflare 背后的 MCP OAuth。** 当提供商的登录页面位于 Cloudflare 机器人保护后面时，连接 OAuth MCP 工具服务器（例如 Canva）现在可以正常工作，失败并显示“OAuth client 注册在重新注册后仍然无效”。 [#32364](https://github.com/open-webui/open-webui/pull/32364), [#32363](https://github.com/open-webui/open-webui/issues/32363)
- 🗃️ **没有附件的管道和工具的文件列表。** 管道和工具现在在没有附件的消息上获得一个空文件列表，其中没有任何内容，并且循环文件的插件失败。 [#32380](https://github.com/open-webui/open-webui/pull/32380), [#32379](https://github.com/open-webui/open-webui/issues/32379)
- 🈯 **模型编辑器语言切换。** 将模型编辑器中的编辑语言从一种翻译语言切换到另一种翻译语言现在会显示该语言的名称和描述，其中字段保留之前显示的语言的文本。 [#32224](https://github.com/open-webui/open-webui/pull/32224), [#32223](https://github.com/open-webui/open-webui/issues/32223)
- 🗣️ **通话中的 Kokoro 语音。** 当管理员没有设置服务器语音引擎时，语音通话现在会使用您设置中选择的 Kokoro.js（浏览器）语音进行回复，而使用浏览器自己的语音。 [Commit](https://github.com/open-webui/open-webui/commit/78613d86f7564d1927ebf5f11292419fdeadb18c)
- 🧩 **丰富的 UI 嵌入控制台错误。** 当 iframe 沙箱允许同源关闭或嵌入来自其他站点时，丰富的 UI 工具嵌入不再在每次加载时在浏览器控制台中记录安全错误；嵌入工作与以前一样。 [#32226](https://github.com/open-webui/open-webui/pull/32226), [#32222](https://github.com/open-webui/open-webui/issues/32222)
- 🔎 **更清晰的 Top K 描述。** 管理设置 > 文档中的 Top K 和 Top K Reranker 描述现在表示 Top K Reranker 是重排序器传递给模型的块数，而混合搜索的 Top K 是发送到重排序器的候选数，其中旧文本导致管理员为模型提供的块数比预期少得多。 [#32225](https://github.com/open-webui/open-webui/pull/32225), [#32221](https://github.com/open-webui/open-webui/issues/32221)
- 🔌 **日志中的 MCP 连接错误。** 当 MCP 服务器在聊天期间无法连接时，原因（例如拒绝连接或来自服务器的 401）现在被记录为错误，仅在调试级别记录，从未到达默认安装的日志。 [#32229](https://github.com/open-webui/open-webui/pull/32229)、[#32213](https://github.com/open-webui/open-webui/issues/32213)
- 🗑️ **删除一种语言的自定义翻译。** 在“管理设置”>“常规”>“翻译”中，“删除”现在仅删除所显示语言的翻译，并保留该行，而其他语言仍然有文本，其中删除了该行及其每种语言的翻译。 [Commit](https://github.com/open-webui/open-webui/commit/1283b2701ecb0037cc2c374e34e69976c302a25c)
- 💬 **翻译的模型提示建议。** 编辑使用另一种语言的默认建议的模型的提示建议现在从管理员对该语言的默认建议开始，其中列表为空。 [Commit](https://github.com/open-webui/open-webui/commit/1283b2701ecb0037cc2c374e34e69976c302a25c)
- 🏷️ **语音通话聊天的标题。** 通过实时语音通话开始的聊天现在会在创建聊天后立即获得生成的标题和标签，遵循自动标题和标签设置，它们的名称为“新聊天”。 [提交](https://github.com/open-webui/open-webui/commit/8ea808850deabb4709391602417b0aa00f2857cf)，[#32258](https://github.com/open-webui/open-webui/issues/32258)
- 🪝 **用于群组和直接消息的 Webhooks。** 群组频道和直接消息的成员现在会收到其频道消息 Webhook 通知，其中只有常规频道发送它们，并且将此类频道静音会阻止它们（提及该成员的消息除外）。 [#32404](https://github.com/open-webui/open-webui/pull/32404)、[提交](https://github.com/open-webui/open-webui/commit/3b2b89205e4fff7e4546ca4034e0293e2d1bd3f3)、[#32403](https://github.com/open-webui/open-webui/issues/32403)
- 📄 **保存的临时聊天中的文件。** 保存临时聊天后，模型不再尝试打开其中附加的文件并收到“文件未找到”，因为此类文件从未存储且其文本已在提示中。 [提交](https://github.com/open-webui/open-webui/commit/97a66ef73e84f9ebb4aa4324b8eac9aadeaca22e)，[#32351](https://github.com/open-webui/open-webui/issues/32351)
- 🔑 **SCIM 用户的 SSO 登录。** 通过 SCIM 创建的用户可以再次使用 SSO 登录，他们从 0.12.0 开始收到“401 无效的身份验证请求”，因为没有为他们创建登录记录；数据库迁移会为现有帐户添加缺失的记录，而无需向其提供可用的密码，SCIM 电子邮件更改现在也会更新登录电子邮件，通过 SCIM 删除用户也会删除登录记录。 [提交](https://github.com/open-webui/open-webui/commit/00f12c0e47fb47b1318a20e97bacc753e769612b)，[#32347](https://github.com/open-webui/open-webui/issues/32347)
- ✂️ **在聊天中删除消息。** 在聊天中删除消息不再使模型忘记每条较早的消息，而聊天仍然显示它们。 [#32332](https://github.com/open-webui/open-webui/pull/32332)、[提交](https://github.com/open-webui/open-webui/commit/29289f5ba67d39255837a6385e5394192733a12e)、[#32331](https://github.com/open-webui/open-webui/issues/32331)
- 🪧 **询问和解释弹出窗口被切断。** 当您选择回复末尾附近的文本时，询问和解释弹出窗口不再被切断，并且在滚动时保持在所选内容旁边。 [#32330](https://github.com/open-webui/open-webui/pull/32330)、[提交](https://github.com/open-webui/open-webui/commit/7129cc1d843b35516428c61af413b3815aee2e3b)、[#32329](https://github.com/open-webui/open-webui/issues/32329)
- 🌬️ **实时通话中的背景噪音。** 风声或背景噪音不再在实时语音通话中打断模型的中途句子，因为其口头回复现在只会暂停，直到语音确认并在噪音后恢复，并且不被理解为语音的噪音也会从语音模型的对话中删除，因此不再混淆后面的答案。 [提交](https://github.com/open-webui/open-webui/commit/a70e96525d88f9cb362b6451e5451c9b72618a92)、[#32248](https://github.com/open-webui/open-webui/issues/32248)、[#32250](https://github.com/open-webui/open-webui/issues/32250)
- 🧠 **自动化中的内存。** 当用户打开内存时，自动化会按照用户的设置、默认界面设置或每个人的内存设置（他们被遗漏的地方）获取内存工具。 [提交](https://github.com/open-webui/open-webui/commit/a70e96525d88f9cb362b6451e5451c9b72618a92)，[#32337](https://github.com/open-webui/open-webui/issues/32337)
- 🗜️ **长时间工具运行期间的压缩。** 上下文压缩现在也会根据提供程序报告的令牌使用情况在一系列长工具调用期间运行，并且压缩的摘要与回复一起保存，以便下一条消息继续从它开始，其中长时间工具运行可能会达到模型的上下文限制。 [提交](https://github.com/open-webui/open-webui/commit/bcf540a98935566537b05911a6bb4ace03c5648d)，[#32306](https://github.com/open-webui/open-webui/issues/32306)

### 已更改

- ⚠️ **数据库迁移**：此版本包括数据库架构更改；我们强烈建议您在生产环境中升级之前备份数据库和所有关联数据。如果您正在运行多工作线程、多服务器或负载平衡部署，则所有实例必须同时更新，不支持滚动更新，并且会因架构不兼容而导致应用程序失败。
- 💡 **后续消息作为下一条消息。** 默认的后续提示现在会以您自己的语气和最新语言以请求或问题的形式建议您接下来最有可能发送的消息，而无需重复已完成的工作，首先提出最强的建议，​​并且仅读取聊天的第一条消息和最后四条消息，每条消息减少到 1,000 个字符，因此长时间聊天保持快速，仅在最后六条消息中询问问题；具有自定义后续提示的实例不受影响。 [提交](https://github.com/open-webui/open-webui/commit/7ae09967459151433be79c2e98f096c171fc5b18), [提交](https://github.com/open-webui/open-webui/commit/53a8f131f305a3beb87376d5dbc05889883fb950)
- 📖 **大型技能以预览形式加载。** 打开技能内置工具后，SKILL.md 长度超过 20,000 个字符的技能现在会以 5,000 个字符的开头预览形式到达模型，并且模型从预览结束处以 read_skill_file 进行读取，现在每次调用最多返回 20,000 个字符，而不是 100,000 个字符，以及新的 grep_skill_files工具允许模型在技能文件中搜索单词或模式，从而防止长技能填充上下文。 [提交](https://github.com/open-webui/open-webui/commit/200b9514917a070c88d112e3c0aba9df3322c5e1)、[提交](https://github.com/open-webui/open-webui/commit/d34f73066d837428ab198e14f285c09ad1ce2450)、[提交](https://github.com/open-webui/open-webui/commit/c314239558cdb47e4d1eaddf011bb4178e0742c2)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.12.1` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.12.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
