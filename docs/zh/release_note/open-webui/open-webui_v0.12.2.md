---
title: "open-webui v0.12.2"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.12.2"
version: "v0.12.2"
published: "2026-10-14"
type: "patch"
lang: "zh"
---

# open-webui v0.12.2

### 添加

- 📑 **MinerU 4.x 服务器。** MinerU 文档引擎现在可与自托管 MinerU 4.x 服务器配合使用，其中每个文档都会因 404 错误而失败，因为 4.x 删除了旧的解析接口； 3.x 服务器像以前一样工作，4.x 服务器采用层（闪存、基本、标准或高级）并在 MinerU 参数中启用_ocr，而语言和 model_version 仅保留 3.x，并且 4.x 在文档文本中返回的图像被排除在索引内容之外。 [#32422](https://github.com/open-webui/open-webui/pull/32422)、[提交](https://github.com/open-webui/open-webui/commit/81f5b8adf80e49bd2213390b59dc867074c3738e)、[#31516](https://github.com/open-webui/open-webui/issues/31516)
- 🤝 **比较时保留两个更改。** 比较修订版本视图现在有一个保留两个按钮，可将所选更改的原始文本和建议文本放入建议修订版本中，原始文本在前，因此您不再需要选择一侧。 [提交](https://github.com/open-webui/open-webui/commit/97b7ed73c84767611d3a26d594c36f63619d92ea)
- 📚 **从预览中打开附加知识。** Cli 现在，在附加知识集合的预览中检查名称会在工作区中打开该集合，文件和链接名称是在新选项卡中打开的真实链接。 [提交](https://github.com/open-webui/open-webui/commit/40bf4a1b99aa0aae316095eff100c07570c542da)
- 🏷️ **自定义标头中的模型 ID。** 连接和工具服务器上的自定义标头现在可以使用 {{MODEL_ID}}，它保存处理聊天请求的模型的 ID、工作区模型自己的 ID 以及多模型聊天中每个模型自己的 ID，因此下游服务可以路由或记录每个模型的使用情况。 [#32426](https://github.com/open-webui/open-webui/pull/32426)、[提交](https://github.com/open-webui/open-webui/commit/bae22752d3995f573a373ee1ae4735b746d952a9)、[#30006](https://github.com/open-webui/open-webui/issues/30006)
- 🧾 **审核日志中请求的模型。** 用于聊天和完成请求的审核日志条目（包括 OpenAI、Ollama 和 Anthropic 兼容端点）现在带有一个 model_id 字段，其中包含 client 在每个 AUDIT_LOG_LEVEL 请求的模型，其中模型仅出现在请求正文中，当 MAX_BODY_LOG_SIZE 剪切长提示时会丢失；其他请求将其记录为空。 [#32429](https://github.com/open-webui/open-webui/pull/32429)、[提交](https://github.com/open-webui/open-webui/commit/fb3d92a6ef56b5a8a6820f615f6e6294c44eaad7)、[#30097](https://github.com/open-webui/open-webui/issues/30097)
- 🔐 **Milvus 的自定义 TLS 证书。** Open WebUI 现在可以通过在普通和多租户模式下将新的“MILVUS_SERVER_PEM_PATH”环境变量指向证书文件来连接到具有自签名或公司颁发的 TLS 证书的 Milvus 服务器。 [#32427](https://github.com/open-webui/open-webui/pull/32427)、[提交](https://github.com/open-webui/open-webui/commit/3bc82bb2c110fc3ed7064e6107a4731b8d9ab5ae)、[#31632](https://github.com/open-webui/open-webui/issues/31632)
- 🧭 **call_tool 用于工具搜索。** 打开工具搜索后，模型现在会获取一个新的 call_tool 工具，并通过它运行使用 search_tools 找到的工具，传递工具的名称及其参数，而不是通过严格提供者拒绝的请求工具列表中不存在的名称直接调用延迟工具；批准和其他工具行为保持不变。 [提交](https://github.com/open-webui/open-webui/commit/7b47c3b22ce983d57f4a13073748a935c4614889)，[#32243](https://github.com/open-webui/open-webui/issues/32243)
- 🔄 **一般改进。** 在整个应用程序中实施了各种改进，以增强性能、稳定性和安全性。

### 已修复

- 🔏 **频道消息元数据保留在服务器端。** 通过 API 发布或编辑的频道消息不再从请求中获取元数据，因此用户无法再使消息看起来来自频道 Webhook 或模型。 [#32421](https://github.com/open-webui/open-webui/pull/32421)，[提交](https://github.com/open-webui/open-webui/commit/44953df70ed758a6321f7a2e139c93aca29129f1)
- 👮 **SCIM 无法删除管理员。** 身份提供商无法再通过 SCIM 删除请求删除管理员帐户，包括第一个管理员，该请求现在以 403 应答并将帐户保留在原位，因此修剪未分配用户的同步无法再在没有管理员的情况下离开实例；管理员已在管理面板中删除。 [#32415](https://github.com/open-webui/open-webui/pull/32415)、[提交](https://github.com/open-webui/open-webui/commit/6276e81cec38f5c5cce067e4be905c5710c2d7d6)、[#27662](https://github.com/open-webui/open-webui/issues/27662)
- 🗝️ **集合名称检查为存储。** 检索访问检查现在按照向量存储解析集合名称的方式比较集合名称，忽略字母大小写并以相同方式对待连字符和下划线，因此以不同方式编写的名称不能再作为随后读取的集合以外的名称通过检查。 [#32435](https://github.com/open-webui/open-webui/pull/32435)，[提交](https://github.com/open-webui/open-webui/commit/30f3c49fb02c22269b42fe3b310209926ee7e8f9)
- 📱 **Android Chrome 上的语音。** Android Chrome 上的语音通话和听写在大约十次使用后不再静音或挂在“聆听”状态，直到页面重新加载，因为麦克风级别显示现在在每次转动后都会释放其音频输出。 [#32417](https://github.com/open-webui/open-webui/pull/32417)、[提交](https://github.com/open-webui/open-webui/commit/f35b1993271e6f0cf1ffc55375d634a65c9e0ab1)、[#29969](https://github.com/open-webui/open-webui/issues/29969)
- 🖥️ **每个聊天终端文件操作。** 将“打开终端”聊天上下文设置为“每个聊天”后，打开 HTML 文件、运行笔记本、保存编辑的文件、创建新文件、删除多个选定的文件以及将文件夹或选择下载为 zip 现在使用聊天自己的工作区，其中 HTML 文件显示“找不到文件”，并且保存的文件从未出现在聊天中。 [#32418](https://github.com/open-webui/open-webui/pull/32418)、[提交](https://github.com/open-webui/open-webui/commit/77fd8aea613c42e0d590804c7f9fdcf6f5f4af02)、[#29965](https://github.com/open-webui/open-webui/issues/29965)
- 🧮 **内存重新索引速率限制。** 重新索引内存，通过管理“重新索引知识和内存向量”按钮，用户重置其内存向量或在嵌入模型更改后自动重新索引，现在遵循嵌入并发请求限制和批量大小，其中它一次为每个内存发送一个请求，并且速率受限的提供程序因 429 个错误而失败了大多数请求。 [#32420](https://github.com/open-webui/open-webui/pull/32420)、[提交](https://github.com/open-webui/open-webui/commit/8bddf9bc62c3ffcaa3e6433bc5ac0f1d04a94421)、[#32212](https://github.com/open-webui/open-webui/issues/32212)
- ⏰ **自动化运行结果。** 现在，只有在回复完成后，自动化运行才会被记录为成功，而失败或取消的回复将被记录为链接到聊天的错误，一旦回复开始，运行就会被视为成功。 [提交](https://github.com/open-webui/open-webui/commit/de446952c2db1168dca5c6e3da6d961e6f55a8eb)
- 📜 **长轮询不包含在审核日志中。** 关闭 websocket 支持后，每个 socket.io 长轮询请求不再作为自己的条目写入审核日志，这会淹没审核日志并且无法使用 AUDIT_EXCLUDED_PATHS 进行过滤，因此审核日志在两种传输方式下看起来都相同。 [#32425](https://github.com/open-webui/open-webui/pull/32425)、[提交](https://github.com/open-webui/open-webui/commit/209b15b9633c63ce1b7cf3c1fdc6e032d67978c6)、[#31871](https://github.com/open-webui/open-webui/issues/31871)
- 📎 **批准工具的来源。** 通过设置询问工具批准，用户批准的知识或文件工具现在会在回复下方保存并显示其来源，而批准后这些来源会丢失。 [#32439](https://github.com/open-webui/open-webui/pull/32439)、[提交](https://github.com/open-webui/open-webui/commit/5fde0485a5adda046d283416a5c4c7a543d7a5fe)、[#32436](https://github.com/open-webui/open-webui/issues/32436)
- 🗂️ **侧边栏悬停预览。** 将指针从一个侧边栏文件夹移动到下一个文件夹不再使第一个文件夹的预览打开或使下一个文件夹无法打开，并且当指针停留在名称周围的填充上时，文件夹和聊天预览现在也会打开。 [#32438](https://github.com/open-webui/open-webui/pull/32438)、[提交](https://github.com/open-webui/open-webui/commit/5e2748a03edd2459d07fcfea168daf740092bf94)、[#32437](https://github.com/open-webui/open-webui/issues/32437)

### 已更改
- 🔖 **标记为 Open WebUI 的 Valkey 连接。** Open WebUI 的 Valkey 矢量存储连接现在将其库名称报告为 GlidePySync(open-webui)，因此共享 Valkey 或 ElastiCache 的操作员可以区分其流量；这需要 valkey-glide-sync 2.5.2 或更新版本，因此使用 VECTOR_DB=valkey 与旧手动安装版本的安装必须对其进行升级，否则启动失败。 [#32428](https://github.com/open-webui/open-webui/pull/32428)、[提交](https://github.com/open-webui/open-webui/commit/980225e5823808de7ace86a8ee73a0b880b37023)、[#31654](https://github.com/open-webui/open-webui/issues/31654)

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.12.2` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.12.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
