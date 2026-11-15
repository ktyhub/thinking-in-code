---
title: "open-webui v0.10.2"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-07-01"
type: "patch"
lang: "zh"
---

# open-webui v0.10.2

### 添加

- 💭 **流式推理显示。** 发出思考或推理的模型现在会在流式传输时显示该内容，并在聊天概述和导出的对话中正确呈现。 [提交](https://github.com/open-webui/open-webui/commit/0b75445ff9a42e37640c034812d0de9b84039e60)、[提交](https://github.com/open-webui/open-webui/commit/af1c0eee89810fa4c36e3eb7e4eba6de685bd7ca)、[提交](https://github.com/open-webui/open-webui/commit/4b08d65597e5b634b7191b0bd6d28feeafcc2a48)、[提交](https://github.com/open-webui/open-webui/commit/fa2abe4cb6a085a4c9045bf8d8ff4b6beffdef6a)
- 🗂️ **文件夹上传到知识库。** 将文件夹拖入知识库或同步文件夹，现在会重新创建其子文件夹结构，而不是将所有内容展平为松散的文件。 [#26130](https://github.com/open-webui/open-webui/issues/26130)，[提交](https://github.com/open-webui/open-webui/commit/2ed8934f5b2bc8a11c74ef2f34cdb62ef024809e)
- 🧠 **内存系统上下文切换。** 管理员现在可以使用管理设置中新的“内存系统上下文”切换，保持内存工具可用，同时选择不将存储的内存添加到系统上下文。 [提交](https://github.com/open-webui/open-webui/commit/4067e357b2ff9e2fb59866d24656e832908fb6fe)
- 🧹 **更整洁的自动记忆。** 自动保存的记忆现在专注于持久的细节，如偏好和目标，并跳过一次性的事情，如膳食、例行事件或情绪变化，除非您要求记住它们。 [提交](https://github.com/open-webui/open-webui/commit/80af65c24adac5140a39a2b5687a3b669b86719f)
- 🎙️ **语音转文本请求格式。** 兼容 OpenAI 的语音转文本现在可以以分段上传或 base64 JSON 的形式发送音频，可在管理音频设置中选择。 [提交](https://github.com/open-webui/open-webui/commit/989c6c13f5d4c5cc255aec77aea14725104d9cb3)
- 🧰 **通过环境进行 API 配置。** 管理员现在可以通过“OLLAMA_API_CONFIGS”和“OPENAI_API_CONFIGS”环境变量设置每个连接的 Ollama 和 OpenAI API 配置。 [提交](https://github.com/open-webui/open-webui/commit/19d8f03bd2c64013b510f2a0eeb3513d452814a3)
- 📡 **提供程序故障事件。** 失败的 Ollama 和 OpenAI 兼容的提供程序请求现在会发出一个结构化事件，描述错误类型、提供程序和状态，使管理员能够更清楚地了解上游故障。 [提交](https://github.com/open-webui/open-webui/commit/4351c78b1e45bb0c5824f9d9eb911b395e343646)
- 🏟️ **通过环境的竞技场模型。** 管理员现在可以通过“EVALUATION_ARENA_MODELS”环境变量定义评估竞技场模型。 [#26174](https://github.com/open-webui/open-webui/issues/26174)
- ♿ **更清晰的高对比度侧边栏选择。** 启用高对比度模式后，侧边栏中当前选择的聊天现在会以更强的颜色脱颖而出，从而更容易辨别哪个聊天处于活动状态。 [#26469](https://github.com/open-webui/open-webui/issues/26469)，[提交](https://github.com/open-webui/open-webui/commit/52ee5cb1b3aa8a8ad40b23d72d82db7c3522dbf8)
- 🔄 **一般改进。** 在整个应用程序中实施了各种改进，以增强性能、稳定性和安全性。
- 🌐 **翻译更新。** 泰语、葡萄牙语（巴西）、加泰罗尼亚语和西班牙语的翻译得到增强和扩展。

### 已修复

- 🛡️ **安全建议**：此版本包括安全和访问控制修复。我们建议您尽早更新生产部署。并非此版本中的所有安全修复程序都可以在“已修复”部分中列出 - 有些修复程序可能会暂时保留，以便管理员有时间进行升级。 [咨询](https://github.com/open-webui/open-webui/security)
- 🔐 **更少意外注销。** 返回授权错误的单个请求不再在会话仍然有效时将您注销，因为应用程序现在会在重定向到登录之前确认会话状态。 [提交](https://github.com/open-webui/open-webui/commit/56ee875e21cb3b137a5aa1eca6eb3c0731b14045)
- 🔒 **Web 搜索域过滤。** Web 搜索结果的域允许和阻止规则现在与主机进行匹配，从而弥补了某些 URL 可能漏过过滤器的差距。 [提交](https://github.com/open-webui/open-webui/commit/688bda09fbe26619613aa487beda8059a5fd55ef)
- 🕵️ **图像提示日志隐私。** 图像生成工作流程不再以默认日志级别写入服务器日志，从而使用户创作的提示内容远离操作员可见的日志。 [#26400](https://github.com/open-webui/open-webui/issues/26400)，[提交](https://github.com/open-webui/open-webui/commit/64b92ff08a09b1bf338d5d95b7bf6f9db0d7e857)
- 🗄️ **更安全的数据库升级。** 升级现有 SQLite 数据库不再在用户表迁移期间崩溃或损坏保存的用户设置，解决了升级后可能阻止启动或中断登录的故障。 [#26403](https://github.com/open-webui/open-webui/issues/26403)，[提交](https://github.com/open-webui/open-webui/commit/c416c6cad69cc4ce44faacdad87cc65862625fb4)
- ⚙️ **以非管理员身份保存设置。** 非管理员用户可以再次保存其界面设置，例如默认模型和主题，之前由于服务器错误而失败，而界面错误地报告成功。 [#26627](https://github.com/open-webui/open-webui/issues/26627)，[提交](https://github.com/open-webui/open-webui/commit/9866a02863c12c466100aed832f0006225759493)
- 🕒 **侧边栏聊天时间戳。** 侧边栏中的聊天现在显示上次活动的时间，而不是创建的时间，因此时间标签与其在列表中的位置匹配，并在每条新消息后刷新。 [#26454](https://github.com/open-webui/open-webui/pull/26454), [#26451](https://github.com/open-webui/open-webui/issues/26451)
- 🎯 **刷新后的默认模型。** 重新加载页面时，您选择的模型不再被清除，因为模型选择现在等待模型列表完成加载。 [提交](https://github.com/open-webui/open-webui/commit/b6d4baeb7ea9bc83e5486ca98b3cae07d3869aa7)
- ⏳ **工具对话框不再挂起。** 通过 clicking 关闭工具或功能输入对话框现在会取消挂起的请求，而不是让聊天无限期地旋转。 [#26417](https://github.com/open-webui/open-webui/issues/26417)，[提交](https://github.com/open-webui/open-webui/commit/0016266c0652757e32aa44f2e1fb7311ac08db51)
- 🐍 **可靠的代码执行加载。** 在聊天中运行 Python 代码现在可以可靠地加载其运行时，修复了最近版本中破坏代码执行和 Pyodide 文件查看器的沙箱启动故障。 [#26625](https://github.com/open-webui/open-webui/pull/26625), [#26390](https://github.com/open-webui/open-webui/issues/26390)
- 🤖 **具有空功能的模型。** 当涉及内存功能或自动化时，与未设置功能的模型聊天不再失败并出现错误。 [#26412](https://github.com/open-webui/open-webui/issues/26412)、[提交](https://github.com/open-webui/open-webui/commit/650b81792582268345073ce3757ac14356189d75)、[提交](https://github.com/open-webui/open-webui/commit/0016266c0652757e32aa44f2e1fb7311ac08db51)
- 🔎 **可搜索的响应。** 聊天搜索再次查找其文本存储为结构化输出的助理消息，这些消息之前被跳过。 [#26405](https://github.com/open-webui/open-webui/pull/26405)
- 🔔 **聊天通知预览。** 后台聊天完成通知和 toast 现在显示清晰的响应预览，而不是对于存储为结构化输出的消息显示为空白。 [提交](https://github.com/open-webui/open-webui/commit/c98d8ecaccc7284573b050e88b3857c4aeba3860)
- 💾 **横幅和配置启动。** 设置“WEBUI_BANNERS”等配置不再导致启动失败，因为现在无论数据类型如何，管理配置值都可以正确存储。 [#26431](https://github.com/open-webui/open-webui/issues/26431)，[提交](https://github.com/open-webui/open-webui/commit/ab22fe64bdd10ba86845dcd46dfd7f619b22366f)
- 📑 **RAG 模板可见性。** 现在，即使启用了绕过嵌入和检索，RAG 模板编辑器在管理文档设置中也保持可见，因为该模板仍然适用于该模式下的文档内容。 [#26126](https://github.com/open-webui/open-webui/issues/26126)，[提交](https://github.com/open-webui/open-webui/commit/8fe480250f649824441a7b4d725a502683134713)
- 🧬 **编辑派生模型。** 编辑工作区模型不再清除其基础模型，包括当该基础是预设或模型本身时。 [提交](https://github.com/open-webui/open-webui/commit/092b5857bbda01be53619e26f42b1fa9b64a2b44)、[提交](https://github.com/open-webui/open-webui/commit/54f31c630afa75e9c81acaa048e1bd901254ba92)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.10.2` · 📅 发布：2026-07-01 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.10.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
