---
title: "LocalAI v4.9.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.9.0"
version: "v4.9.0"
published: "2026-08-20"
type: "minor"
lang: "zh"
---

# LocalAI v4.9.0

# 🎉 LocalAI 4.9.0 发布！ 🚀

<h1对齐=“中心”>
  <br>
  <img高度=“300”src=“https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png”>
  <br>
  <br>
</h1>

LocalAI 4.9.0 出来了！

十三天和 146 个拉取请求，花在你每天接触的 LocalAI 部分上，而不是花在新引擎上。现在默认拒绝身份验证，聊天获得了端到端上下文压缩，模型和后端各自拥有一个规范页面而不是三个，并且 `vllm-cpp` 开发了一种为 MiniMax-H3 提供真实音轨的视频模式。

**亮点：**

- 🔐 **默认情况下身份验证被拒绝** - 每个 HTTP 路由都需要凭据，除非它出现在显式公共注册表中。这会关闭一类绕过，其中无前缀别名（例如 `/moderations`、`/models`、`/backends` 和 `/mcp/chat/completions`）落在旧的受保护前缀列表之外。由 [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/) 报道。
- 🗜️ **聊天上下文压缩** - 每个模型选择加入，较早的完整回合在推理之前通过 LocalAI 模型进行压缩，保留系统提示、最新消息和整个工具调用单元。比率和持续时间作为响应元数据和指标返回。
- 🖥️ **每个资源一页** - `/app/models` 现在拥有“探索”和“已安装”，`/app/backends` 拥有“目录”和“已安装”，并且嵌套的主机视图消失了。旧的 `/app/manage` 书签仍然有效。
- 🎬 **MiniMax-H3 视频生成** - `vllm-cpp` 为 H3 检查点集打开第二个引擎句柄，并联合渲染视频和音频，因此 MP4 带有真正的 AAC 轨道。要求在提示中讲话，模型会对其进行口型同步。
- 🗣️ **llama.cpp 上的 Qwen3-TTS** - 在已提供的用于文本生成的完整加速器矩阵上进行文本到语音转换（CUDA、ROCm、SYCL、Vulkan、Metal、L4T），使用上游自己的 GGUF 转换。
- 🧭 **KNN 作为一流的路由器** - 对精心策划的、持久的标记提示语料库进行相似性加权投票。没有分类器模型，并且与任何标记不同的提示被视为不可判定而不是猜测。
- 📊 **全局准入控制和实时后端跟踪** - 进程范围的 HTTP 准入界限，运行中的后端操作在运行时显示，并且 UI 直接链接到其日志。
- 🕵️ **可逆的 PII 假名** - 屏蔽值成为请求范围内的确定性假名 (`EMAIL_001`)，并且如果后端在 JSON 和 SSE 令牌拆分写入时回显它们，则将其恢复。
- 📦 **并行拥抱脸部下载** - 快照物化一次运行多达 N 个完整文件传输，因此分成许多分片的存储库不再将其挂钟花在每个文件的延迟上。
- 🖧 **冷模型负载是持久的工作** - 每个模型的咨询锁不再跨越多 GB 传输，这使得 35.7 GB 负载看起来从操作员座位上永久损坏，而在下面的分级进展正常。
- 🎮 **vllm-cpp 涵盖您拥有的卡** - CUDA 构建从一两个架构增加到 amd64 上的八个架构，arm64 上的五个架构，包括 A100、L4、4090、H100/H200、B200、Jetson Orin 和 Jetson Thor。

加上用于实时的单个共享 WebRTC UDP 端口，Metal 实际上在 macOS Stable Diffusion 和 Parakeet 版本中启用，默认日志级别的后端崩溃诊断以及葡萄牙语（巴西）和印度尼西亚语 UI 翻译。

<p对齐=“中心”>
  <img width="2880" height="1800" alt="ui-models-explore" src="https://github.com/user-attachments/assets/7dd68a4a-e707-43e6-af1a-dcc3922469eb" />
<br><em>模型和后端各有一个规范页面，其中“探索”和“已安装”作为视图而不是单独的目的地。</em>
</p>



---

## 📊 此版本的数量

| | |
|---|---|
|合并请求请求 | **146** |
|承诺 | 148 | 148
|文件已更改 | 420 (**+27,788** / -4,670) |
|发展窗口| 13 天 (2026-08-07 至 2026-08-20) |
|人类贡献者 | 10，其中 **3 是第一次** |
|画廊条目| 1,622 至 **1,707** (+85) |

工作落地的地方：

|面积 |改变|
|---|---|
| `core/` | 279 个文件中的 +17,193 / -4,187 |
| `gallery/` | +3,808 / -62 |
| `backend/` | 60 个文件中 +3,298 / -177 |
| `pkg/` | 31 个文件+1,180 / -113 |
| `swagger/` | +1,095 / -5 |
| `docs/` | +952 / -98 跨 23 个文件 |

---

## 📌 太长；博士

|面积 |总结|
|------|---------|
| 🔐 **默认授权** |每个方法和路径都需要凭据，除非在显式公共注册表中列出。 API 指令、Swagger GET、LocalAI 知名文档以及运行状况、登录、OAuth、SPA、资产、品牌和节点注册令牌引导流程保持公开。 **迁移：** 配置数据库身份验证或旧版 API 密钥后，`/version` 和生成的音频、图像、视频和 3D URL 现在需要凭据。嵌入式部署可以通过 `ApplicationConfig.PathWithoutAuth` 添加窄前缀，并且旧版 GET 豁免标志仍保留为显式兼容性覆盖。 |
| 🗜️ **上下文压缩** |选择加入每个型号的 `compression` 配置。在推理之前、PII 过滤和 Assistant/MCP 提示注入（包括后来的 MCP 迭代）之后，较旧的完整轮次通过配置的 LocalAI 模型进行压缩。保留领先的系统/开发人员提示、最新消息和完整的工具调用/结果单元；工具模式和完成空间是通过保守的离线令牌界限来考虑的。元数据利用非流式响应和流式使用预告片，并导出事件、比率和持续时间指标。默认禁用；云代理直通被拒绝（翻译模式有效）。 |
| 🖥️ **统一的生命周期 UI** | `/app/models` 拥有 **Explore** 和 **Installed** 以及 URL 支持的搜索、状态和选择； `/app/backends` 拥有**目录**和**已安装**，同时保留变体、开发版本和目标节点范围。 Explore 提供功能感知的开放和管理安装；破坏性模型控件保留在“已安装”状态。操作概览显示来自其共享摘要轮询器的主机容量，并且嵌套的主机目标被删除。 `/app/manage` 进行重定向，同时保留旧查询状态。 API 没有变化。 |
| 📥 **导入表单重建** |导入页面移动到 `page--medium`，旁边有一个工作列和格式参考，而不是在封闭的 V 形后面。源字段是主角，并带有自己的“导入”按钮，这会删除仅因为实际操作位于 `<form>` 之外而存在的 `aria-hidden` 提交。简单和高级模式消失了（大约 80% 相同的表面）；真正的区别是源还是 YAML，现在是两个选项卡。还修复了两个类错误：根本没有 `className` 的主按钮落入浏览器 chrome，以及 `class="btn btn-primary fas fa-save fa-upload"` 将 Font Awesome 设置为按钮自己的字体，而两个图标争夺一个 `::before`。 |
| 🎬 **MiniMax-H3 视频** | `vllm-cpp` 通过 vllm.cpp ABI v12。第二个引擎句柄加载 H3 检查点集（DiT 为 `parameters.model`，文本编码器和两个 VAE 以 `options:` 命名），`GenerateVideo` 将视频和音频联合渲染为具有真正 AAC 轨道的 MP4。 DiT 分区已声明，但未检测到：社区量化会剥离发布元数据，并且 FL2VA 和 Ref2VA DiT 的字节结构相同，因此 `checkPartitionConditioning` 在引擎运行之前拒绝参考条件 FL2VA 请求（否则它将渲染数小时并返回彩色网格）。 ffmpeg 来自主机：libvllm 组成 mux argv 并且不生成任何内容。新画廊条目 `minimax-h3-fl2va-q4`。 |
| 🗣️ ** llama-cpp 上的 Qwen3-TTS** |通过 CUDA、ROCm、SYCL、Vulkan、Metal 和 L4T 上的 `llama-cpp` 后端进行 TTS，使用上游的 GGUF 转换。作为基于槽的 `SERVER_TASK_TYPE_TTS` 任务实现，这是并发安全集成，因为 `server_context` 拥有 `llama_context` 并在其自己的线程上运行槽调度程序。携带仍草稿的上游服务器块为 `patches/0002-add-server-task-type-tts.patch`（在合并 ggml-org/llama.cpp#26603 时删除）。画廊：`qwen3-tts-llamacpp` 和 `qwen3-tts-llamacpp-q4`。现有的 `qwen3-tts-cpp` 后端保持不变，仍然是单独的路径。 |
| 🧭 **KNN 路由** | `classifier: knn` 通过对标记示例提示进行相似性加权投票进行路由，因此不需要分类器模型，并且标记知识存在于您播种和管理的语料库中。 `knn.similarity_threshold`以下的参赛作品不能投票；当没有人清除它时，路由器将采取回退，并且 `nearest_similarity` 会记录在决策和回退中。 `<data path>/router-corpus` 下的每个路由器有一个 JSONL 文件是事实来源，内存中索引在分类器构建时重建，并且在嵌入模型更改时重新嵌入条目。语料库输入在设计上仅限 API：`POST /api/router/{name}/corpus`、`GET .../corpus/stats`（仅计算标签，从不返回文本）、`DELETE .../corpus`、管理门控并公开为 MCP 工具。 |
| 📊 **入场和踪迹** |进程范围的 HTTP 准入控制，限制了以前仅针对每个后端的内容。后端操作在运行时显示，并且运行后端跟踪会在 UI 中显示并带有即时日志链接。 |
| 🕵️ **PII 化名** |选择加入 `pii.reverse_in_response`。屏蔽的请求值将成为请求中唯一的确定性假名（`EMAIL_001`、`EMAIL_002`），并且如果后端返回它们，则将其恢复，包括跨响应写入拆分的 SSE 令牌。替换映射是请求本地的并且从不持久。不可逆 `[REDACTED:...]` 仍为默认值。 |
| 📦 **并行 HF 下载** | `DownloadFilesWithConcurrency` 通过 `errgroup` 和 `SetLimit` 运行最多 N 个完整文件传输。单个文件永远不会拆分，因此 `.partial` 恢复和每个文件 SHA 验证不会受到影响，并且两个非工件调用者通过限制为 1 的包装器保持顺序排序和快速失败行为。 `completedBytes` 变成了 `atomic.Int64`（竞争检测器报告了三个竞争），并且调用者的状态回调保持序列化。 |
| 📞 **实时 WebRTC 端口** | `--web-rtc-udp-port` / `LOCALAI_WEBRTC_UDP_PORT` 在实时调用中重复使用一台 Pion ICE UDP 复用器，通过记录的信令和容器/防火墙设置显示绑定失败。后续修复使 `LOCALAI_WEBRTC_ICE_INTERFACES` 在设置固定端口时保持有效，而该端口已被默默忽略：通配符复用器使 pion 枚举每个接口本身，从而使浏览器无法路由 `172.x` 候选者，一旦 ICE 同意检查失败，这些候选者就会被丢弃。 |
| 🖧 **耐久冷负载** |每个模型的咨询锁是一个以毫秒为单位的重复数据删除决策，而不是传输的生命周期。冷加载现在作为持久作业运行，而不是在后端安装、多 GB 暂存和检查点加载中保持它，并且 `WithLockCtx` 现在可以防御 `statement_timeout` 和 `lock_timeout`（两者都中止相同的阻塞 `pg_advisory_lock`，只是后者被覆盖）。 |
| 🎮 **vllm-cpp CUDA 覆盖率** | amd64 从 `120a;121a` 到 `80;86;89;90a;100a;103a;120a;121a`，arm64 从 `121a` 到 `87;90a;100a;110;121a`，按硅存在的位置划分。未列出的卡运行速度并没有变慢，它在第一次请求 `no kernel image is available for execution on the device` 时就死掉了，在安装报告成功很久之后。 CUDA 13 防护现在覆盖两个分支，并且 Triton-AOT 保持运行。 |
| 🌍 **两种新语言** |葡萄牙语（巴西），一个完整的 14 个命名空间翻译，与 `en/` 完全一致，以及用于管理、媒体和导航界面的印度尼西亚语。 |
| 🧠 **模型** | 85 个新图库条目：Qwen3.8（9B、27B、Ridge 和小型变体）、Gemma 4 agentic 和 Scotoma 2、DeepSeek V4 Pro 0813、Ling 3.0 Flash、Nemotron 3.5 Lightning 30B、Tess 4 27B、Ornith 1.0 和 1.5 9B、 LFM2.5 230M 和 VL 1.6B、HunyuanOCR 和 OvisOCR2、Higgs Audio v3 TTS、MiniMax-H3 Ref2VA，以及 vllm.cpp 文本生成条目和第一个 Carbon 基因组系列。 |

---

## 🚀 新功能和主要增强功能

### 🔐 身份验证现在默认拒绝

先前的分类器通过前缀对选择的 API 样式路径进行门控。任何不在该列表中的路径都是公共的，这意味着无前缀的别名（`/mcp/chat/completions`、`/moderations`、`/models`、`/backends`、`/import-model`）可以绕过全局身份验证，并且任何新注册的路由默认都会继承相同的弱点。

中间件现在具有方法感知能力，并且默认情况下拒绝：仅当其方法和路径出现在显式公共注册表中时，路由才是公共的。保持公开的是引导和可发现所需的集合：API 指令、Swagger GET 路由、LocalAI 知名文档以及运行状况、登录、OAuth、SPA、资产、品牌和节点注册令牌流程。全路由器覆盖是在测试中确定的，因此新路由不会因遗漏而被公开。

**迁移影响。** 配置数据库身份验证或旧版 API 密钥时，`/version` 和生成的音频、图像、视频和 3D URL 现在需要凭据。嵌入式部署仍然可以通过 `ApplicationConfig.PathWithoutAuth` 添加窄前缀，并且旧版 GET 豁免标志仍然可用作显式兼容性覆盖。

感谢 [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/) 报告此类身份验证绕过。

> 🔗 PR：#11602

### 🗜️ 端到端上下文压缩

长时间的谈话最终会变得不合适。压缩是每个模型的选择加入，启用后，它会在推理之前通过配置的 LocalAI 模型压缩旧的完整回合，而不是截断它们。

它不会触及的内容：领先的系统和开发人员安全提示、最新消息以及完整的工具调用/结果单元，这些单元都保持完整，因此压缩的历史记录永远不会留下没有结果的调用。它在 PII 过滤之后和 Assistant/MCP 提示注入之后运行，包括在以后的 MCP 迭代中，因此被压缩的是实际发送的提示。工具模式和完成空间是通过保守的离线令牌限制来考虑的。
压缩元数据在非流式响应和流式使用预告片中公开，压缩事件、比率和持续时间作为指标导出。云代理直通配置拒绝压缩，因为 LocalAI 无法安全地重写不透明的提供者有效负载；支持翻译模式。已启动流中的延迟失败将作为带内 SSE 错误返回，后跟 `[DONE]`。

> 🔗 PR：#11556

### 🖥️ 每个资源一个规范页面

模型有一个画廊和一个单独的主机管理界面。后端有一个用于安装二进制文件的嵌套主机视图。在它们之间，资源所在的位置并不明显，并且常见的生命周期操作比它们需要的更深一层。

现在每个资源都有一个页面。 `/app/models` 拥有 **Explore** 和 **Installed**，`/app/backends` 拥有 **Catalog** 和 **Installed**，两者都具有 URL 支持的搜索、状态和选择，后端保留其变体、开发版本和目标节点范围。探索呈现功能感知的**打开**和**管理安装**操作，而破坏性模型控件保留在已安装状态。操作概览从其共享摘要轮询器读取主机容量，并删除嵌套的主机目标。当您从详细视图返回时，缩小列表/详细视图会将焦点恢复到原始行。

API 中的任何内容都没有更改，并且现有的 `/app/manage` 书签通过保留旧模型和后端查询状态的替换重定向继续工作。

<p对齐=“中心”>
  <img width="2880" height="1800" alt="ui-backends-catalog" src="https://github.com/user-attachments/assets/c18e9272-70bd-4875-bda0-319bea616637" />
  <br><em>作为一页视图进行目录和安装，目标节点范围完好无损。</em>
</p>


> 🔗 PR：#11548

### 📥 导入表单，重建

导入页面采用了新的调色板，但保留了旧的布局：一个 760 像素的列，其主要操作与其提交的表单分离。其中两个问题是彻头彻尾的错误。

`ImportModel.jsx:808` 根本没有 `className`，因此页面最重要的一个控制落到了用户代理按钮上，带有系统镶边、系统字体、错误的半径和没有设计系统聚焦环。旁边，`class="btn btn-primary fas fa-save fa-upload"`将Font Awesome设置为按钮自己的字体系列，其标签文本继承了该字体系列，而`fa-save`和`fa-upload`则争夺`::before`。

布局移至 `page--medium`，旁边有一个工作列和格式参考，因为该参考回答了第一次管理员遇到的唯一问题，并且习惯坐在默认关闭的 V 形后面。低于 1024px 时，它会被披露而不是消失。源字段是主角，等宽字体，因为它包含您粘贴的内容，并且带有自己的导入按钮，该按钮删除了 `aria-hidden` 提交，该提交的存在只是为了补偿位于 `<form>` 之外的实际操作。简单模式和高级模式消失了：它们大约 80% 是相同的表面，并且重叠需要模式开关、本地存储键和三按钮保留/丢弃/取消对话框，该对话框唯一的作用是保护开关隐藏的状态。真正不同的是输入类型，现在有两个选项卡：源或 YAML。大小和 VRAM 估计报告在生成它的字段下，而不是作为页面标题上方的横幅。
后续操作在 UI 的其余部分中清除了同一类错误：七个页面上的八个标题控件有两个或三个元素的类折叠成一个字符串。

<p对齐=“中心”>
  <img width="2880" height="1800" alt="ui-import-model" src="https://github.com/user-attachments/assets/d8abd9d6-81fa-4ef7-8062-4bcf3836a27a" />
  <br><em>一个表单、一个可折叠选项面板以及您可以阅读的格式参考。</em>
</p>


> 🔗 PR：#11461、#11462、#11488

### 🎬 MiniMax-H3：视频和音频联合

vllm.cpp 的稳定 C ABI 在 v12 上增加了一个视频片段，`vllm-cpp` 现在提供两件事。文本生成不变。当模型配置声明 H3 检查点集时，`Load` 将打开视频引擎，而 `GenerateVideo` 通过 LocalAI 现有的 `/video` 端点渲染 clip，并联合生成**视频和音频**，因此 MP4 会返回真正的 AAC 轨道而不是无声。要求在提示中讲话，模型会对其进行口型同步。

三件事塑造了整合：

**视频引擎是第二个手柄，而不是第一个手柄的模式。** H3 不是模型目录。 DiT、文本编码器和两个 VAE 是单独的工件，并且 vllm.cpp 的两个加载器拒绝彼此的检查点。 `parameters.model` 是 DiT；该集的其余部分被命名为 `options:`。

**DiT 分区已声明，但未检测到。** FL2VA DiT 服务于 `t2va` 和 ZZPH100​​ZZ； `ref2va` 是一个不同的检查点。社区 GGUF 和 NVFP4 量化会剥离发布元数据，并且两个 DiT 的字节结构相同，因此引擎拒绝生成，直到被告知它具有哪个 DiT。将参考调节交给 FL2VA DiT 会渲染数小时，并在框架上返回彩色晶格，因此 `checkPartitionConditioning` 在调用引擎之前会拒绝该组合。

**ffmpeg 来自主机。** libvllm 写入帧和 WAV 并组成 mux argv，然后不生成任何内容，这是有意的上游进程边界。后端替换`argv[0]`并执行它。

画廊条目 `minimax-h3-fl2va-q4`（Q4_K_M FL2VA 套装）和 `minimax-h3-ref2va-q4` 随附。

> 🔗 PR：#11424、#11439

### 🗣️ Qwen3-TTS 通过 llama.cpp 后端

Qwen3-TTS 现在在 `llama-cpp` 后端上运行，这意味着使用上游自己的 GGUF 转换在已用于文本生成（CUDA、ROCm、SYCL、Vulkan、Metal、L4T）的同一加速器矩阵上进行文本到语音转换。

`grpc-server.cpp` 是 llama.cpp 共享 `server_context` 上的适配器，它拥有 `llama_context` 并在自己的线程上运行插槽调度程序，因此驱动 gen-audio 循环本身的 gRPC 处理程序将与该调度程序竞争。使 TTS 成为基于槽的 `SERVER_TASK_TYPE_TTS` 任务是并发安全集成，遵循树中已有的 `0001-add-server-task-type-score.patch` 先例。 llama.cpp 将 Qwen3-TTS 合并到 ggml-org/llama.cpp#26254 中； #26603 中的服务器管道仍然是一个草案，因此它被作为 `patches/0002-add-server-task-type-tts.patch` 携带，并且应该在合并后删除。 `disable-tts-task.sh` 保持turboquant 和bonsai 编译，因为它们在没有我们的补丁的情况下将`grpc-server.cpp` 复制到fork 中。

两条路径均在 CPU 上进行端到端验证，返回包含真实语音的有效 24 kHz 单声道 16 位 WAV，经过测量而不是目测。画廊条目：`qwen3-tts-llamacpp` 和 `qwen3-tts-llamacpp-q4`。

qwentts.cpp 上现有的 `qwen3-tts-cpp` 后端保持不变。这是第二条独立的路径，而不是替代路径。

> 🔗 PR：#11392

### 🧭 KNN 作为一流路由器
`classifier: knn` 将 KNN 搜索从分类器的缓存提​​升到主请求路由器。与 `score` 或 `colbert` 不同，它不需要分类器模型：标签知识存在于您通过管理员 API 播种和管理的带标签示例提示的语料库中，因此路由决策是确定性的、可审计的，并且基于分级经验而不是模型的意见。

有一个明确的认知门。 `knn.similarity_threshold` 以下的语料库条目无法投票，当没有人清除它时，分类器不会激活任何标签，路由器会进行后备：与所有带标签的体验不同的提示被视为不可判定，而不是猜测。决策记录 `nearest_similarity`，也在后备行上，因此您可以看到最近的标记体验实际有多远，“路由”选项卡解释了语料库外后备并显示每个标签的语料库计数。

持久性是 `<data path>/router-corpus` 下的每个路由器一个 JSONL 文件，保存文本、标签、矢量和嵌入器指纹。该文件是真相的来源；本地存储索引在分类器构建时从中重建，并保持纯粹的内存中索引，并且在不同嵌入模型下记录的条目在加载时重新嵌入。这也纠正了文档关于本地存储集合持续存在的说法：嵌入缓存从未在重新启动后幸存下来，并且仍然没有，而语料库却如此。

语料库输入在设计上仅为 API，因为条目可能包含示例用户内容：`POST /api/router/{name}/corpus` 种子（根据声明的策略验证标签、嵌入服务器端、立即索引）、`GET .../corpus/stats` 仅检查和返回标签计数（任何表面都不会返回条目文本）和 `DELETE .../corpus` 擦除。所有管理都像同级路由器端点一样，并作为 MCP 工具公开。

> 🔗 PR：#10652

### 📊 全局准入控制和运行后端跟踪

每个后端都存在准入控制，这不会对整个过程留下任何限制，并且跟踪列表可以无限增长。 HTTP 准入现在在进程范围内受到限制。

除此之外，后端操作在仍在运行时而不是仅在完成后才会显示，并且运行后端跟踪会在 UI 中显示，并立即链接到其日志，因此您可以查看耗时过长的操作，而不是等待。

<p对齐=“中心”>
  <img width="2880" height="1800" alt="ui-activity-inflight" src="https://github.com/user-attachments/assets/fe0acd52-3688-4c20-ae1d-cef9f8b2825e" />
  <br><em>操作在仍在运行时进行表示，而不仅仅是在完成后进行表示。</em>
</p>


> 🔗 PR：#11560

### 🕵️ 在往返过程中保留的 PII 假名

PII 中间件不可逆地屏蔽了值，这对于日志来说是正确的，但对于对话来说是错误的：被交给 `[REDACTED:EMAIL]` 两次的模型无法判断它是否看到了一个地址或两个地址，并且它所说的任何关于它们的信息都无法使用。

选择加入 `pii.reverse_in_response` 将屏蔽的请求值转换为请求中唯一的确定性假名（`EMAIL_001`、`EMAIL_002`），并在后端返回它们时恢复它们。恢复处理跨响应写入拆分的正常 JSON 和 SSE 令牌。替换映射保留在请求本地并且永远不会持久化。不可逆 `[REDACTED:...]` 仍为默认值。

> 🔗 PR：#11272

### 📦 有界并行 Hugging Face 下载
快照物化通过顺序执行器获取每个文件，因此分成许多分片的存储库将其大部分挂钟花费在每个文件的请求延迟上，而不是移动字节。

`DownloadFilesWithConcurrency` 现在通过 `errgroup` 和 `SetLimit` 一次运行最多 N 个完整文件传输。只有整个文件并行运行：单个文件永远不会被分割，因此 `.partial` 恢复机制和每个文件的 SHA 检查不会受到影响。两个非工件调用者（`core/gallery/models.go` 和 `core/config/model_config_loader.go`）通过传递限制 1 的包装器准确地保留其先前的行为，因此任务仍然按切片顺序运行，并且在任何后续任务开始之前仍然会返回第一个失败。

并行路径的两个后果值得了解：`completedBytes` 现在是 `atomic.Int64`，这不是预防措施（使用普通的 `int64` 竞争检测器报告三个竞争），并且调用者的状态回调被序列化以保留顺序路径隐式提供的保证。 `AfterDownload` 故意不串行化，因为它执行并行性存在重叠的验证和提升工作。

> 🔗 PR：#11162

### 📞 一个 UDP 端口上的实时 WebRTC

`--web-rtc-udp-port` / `LOCALAI_WEBRTC_UDP_PORT` 在实时 WebRTC 调用中重复使用单个 Pion ICE UDP 复用器，因此容器或防火墙需要一个规则而不是一个范围。 UDP 绑定失败通过信号发送而不是不透明地失败，并且容器和防火墙设置已记录。

后续行动弥补了它所打开的差距。每当设置固定 UDP 端口时，`LOCALAI_WEBRTC_ICE_INTERFACES` 就会被默默地忽略，这正是操作员所追求的组合：固定端口以写入防火墙规则并限制接口以将无法访问的 `docker0` 和 `veth` 地址排除在候选列表之外，通常是一起进行的。通配符复用器通过使用 nil 过滤器枚举接口本身来派生 pion 候选地址，因此在具有 docker 桥接的主机上，浏览器收到 `172.18.0.1`、`172.17.0.1`、`10.10.10.1` 和朋友，在良好的配对上连接，然后在 ICE 同意检查其他人失败时丢弃。

> 🔗 PR：#11436、#11466

### 🖧 冷模型加载作为持久作业运行

在两个副本的前端，将 35.7 GB GGUF 加载到新添加的 Jetson Thor 工作人员上，使该模型可以从操作员座椅上永久卸载，而实际上，部署在下面正常进行。副本 A 在大约 20 分钟的传输过程中持有每个模型的咨询锁；副本 B 在相同模型的 `pg_advisory_lock` 上被阻止，并在 60 秒被角色的 `statement_timeout` 杀死，并且每次 UI 重试都会重现它。

这一症状背后隐藏着两个缺陷。锁的生命周期就是传输的生命周期，`Route` 包装了 `advisorylock.WithLockCtx` 中的后端安装、多 GB 暂存和检查点负载，这将毫秒的重复数据删除决策转变为该模型的集群范围中断。 `WithLockCtx` 覆盖了 `lock_timeout`，但没有覆盖 `statement_timeout`，尽管两者都中止了相同的阻塞调用。

冷负载现在作为持久作业运行，因此锁定仅针对其存在的决策而保留。

> 🔗 PR：#11514

### 🎮 vllm-cpp 为人们拥有的卡而构建

`vllm-cpp` CUDA 映像仅针对 Blackwell 构建：amd64 上的 `120a;121a` 和 arm64 上的 `121a` 单独构建，属于 vllm.cpp 自己的发布存档版本的十种架构。
值得一提的是故障模式。未列出的卡并不慢，它会在 `no kernel image is available for execution on the device` 第一次请求时死掉，而在 `local-ai backends install vllm-cpp` 报告成功很久之后。这是在安装了后端但无法提供任何服务的 Jetson Thor 节点上发现的。

| |之前|之后|
|---|---|---|
| amd64 | `120a;121a` | `80;86;89;90a;100a;103a;120a;121a` |
| ARM64 | `121a` | `87;90a;100a;110;121a` |

分裂遵循芯片存在的地方：Jetson（`87` Orin、`110` Thor）仅支持arm64，桌面版`120a`仅支持amd64，而`90a`/`100a`则由于SBSA部件而同时存在。添加了 A100、A10/3090、L4/4090/RTX 6000 Ada、H100/H200、B200、B300、Jetson Orin 和 Jetson Thor。 CUDA 13 防护现在覆盖两个分支，而不是单独覆盖 amd64，并且 Triton-AOT 保持不变。

> 🔗 PR：#11512

### 🌍 葡萄牙语（巴西）和印度尼西亚语

WebUI 的完整 `pt-BR` 翻译：14 个命名空间与 `en/` 具有完全密钥奇偶校验，包括 `modelEditor.json`，并保留每个 i18next 插值变量和 `_one`/`_other` 复数密钥。印度尼西亚语涵盖管理、媒体和导航字符串。两者都保留品牌、型号和技术标识符不翻译，以匹配现有的区域设置约定。

> 🔗 PR：#11427、#11493

### 🧰 值得了解的小功能

- **Metal 实际上在两个 macOS 后端中打开。** `stablediffusion-ggml` 在运行程序从未定义的 `OS=Darwin` 变量上门控其 Metal 标志，因此 Darwin 工作流程的 `BUILD_TYPE=metal` 生成了一个没有 `GGML_METAL_EMBED_LIBRARY=ON` 的构建，传送了无法公开 `kernel_mul_mv_ext_bf16_f32_r1_5` 的运行时源路径。 `parakeet-cpp` 根本没有将 `BUILD_TYPE=metal` 转发到 `PARAKEET_GGML_METAL`：在 M1 Air 上，相同的五分钟样本从 82.57 秒变为 50.18 秒，输出字节相同。现在，试运行构建合同测试守护着稳定扩散标志。
- **后端崩溃说明原因。** 意外的运行时退出仅在调试级别记录其 stderr，因此在默认日志级别操作员只看到退出代码而没有其他内容。最后的非空 stderr 行现在带有意外退出警告，并且失败的 gRPC 准备状态会保留进程退出代码以及限制为 4 KiB 的最后一个 stderr 诊断。
- **MCP 服务器在发生故障时保持可见。** 每当连接设置或工具发现失败时，模型级 MCP 服务器就会从聊天中消失，隐藏容器 DNS、路由和 VPN 可访问性问题。它们现在仍列为禁用错误行，并带有每个服务器错误，在安全关闭部分创建的会话时重试发现，并且模型编辑器记录了预期的 `mcp.remote` 和 `mcp.stdio` 格式。
- **校验和不匹配重试。** 下载后 SHA 不匹配现在被视为暂时传输失败：LocalAI 删除不匹配的部分，并让有界规划器重试陈旧或损坏的 CDN 响应，同时仍然拒绝未经验证的字节。直接 `URI.DownloadFile` 调用者仍然会立即看到不匹配的情况。
- **音频转换拒绝错误的合约。** 音频转换 WebSocket 接受 `realtime_audio` 模型并打开基于帧的 `AudioTransformStream` RPC，在与 `NotImplementedError` 握手后对于任意模型（如 `liquid-audio`）失败。现在，用例会在后端加载之前进行验证，并且任意调用者都会指向 OpenAI Realtime API。
- **无效的预加载 JSON 名称本身。** `PRELOAD_MODELS` / `--preload-models` 现在可以识别哪个输入无效，并拒绝错误中具有预期形状的非数组顶级值（包括布尔值和 `null`）。

> 🔗 PR：#11531、#11492、#11532、#11447、#11495、#11536、#11565、#11434

---

## 🐛 错误修复（回顾）

- `fix(auth)`：默认保护 HTTP 路由 - #11602
- `fix(distributed)`：将冷模型加载作为持久作业运行，而不是持有咨询锁 - #11514
- `fix(vllm-cpp)`：构建平台可以托管的每个 CUDA 架构 - #11512
- `fix(realtime)`：保持 ICE 接口允许列表与固定 UDP 端口一起工作 - #11466
- `fix(stablediffusion)`：嵌入金属库 - #11531
- `fix(parakeet-cpp)`：在 macOS 版本中启用 Metal - #11492
- `fix(model)`：报告后端崩溃诊断 - #11532
- `fix(model)`：表面后端启动退出 - #11447
- `fix(downloader)`：重试校验和不匹配 - #11536
- `fix(audio)`：拒绝不兼容的变换流 - #11565
- `fix(gallery)`：正确解析 gpt-oss-* 模型的和谐输出 - #11518
- `fix(gallery)`：识别无效预载 JSON - #11434
- `fix(gallery)`：修复 DeepSeek V4 后备 - #11480
- `fix(gallery)`：正确的 Higgs Audio v3 校验和 - #11459
- `fix(fish-speech)`：保留 ROCm PyTorch - #11568
- `fix(vllm)`：将英特尔基础套件运行时与 oneAPI 2025.3.2 对齐 - #11437
- `fix(kokoros)`：将缺少的 `upscale_image` 存根添加到后端特征实现 - #11414
- `fix`：在 UI 中显示 MCP 连接错误 - #11495
- `fix(ui)`：取消合并在浏览器 Chrome 中留下按钮的类字符串 - #11462
- `fix(ui)`：保持代理导入操作可见 - #11488
- `fix`：换行长 TTS 请求文本而不是加宽页面 - #11576

---

## 🧠 模型

本周期新增 85 个画廊条目，指数从 1,622 升至 1,707。

文本生成：Qwen3.8 in 9B、27B、Ridge 和小型变体、Gemma 4 Agentic 和 Gemma 4 Scotoma 2、DeepSeek V4 Pro 0813、Ling 3.0 Flash、Nemotron 3.5 Lightning 30B、Tess 4 27B、Ornith 1.0 和 1.5 9B、 Muse Glimmer 30B、Grug 12B、BigBang v1、Genesis Hermes V7、TwIL-LM3、BTL-4 Compact、XYZ Aquila mini、North Mini Code、AREX Turbo、Fara1.5 4B、MiniCPM5 1B Q8、Shieldstral 1.0 3B 和 UI-Mate 9B。

视觉和OCR：HunyuanOCR、OvisOCR2、LFM2.5 VL 1.6B和LFM2.5 230M并列。

音频和视频：Higgs Audio v3 TTS、Qwen3-TTS llama.cpp 条目以及 MiniMax-H3 FL2VA 和 Ref2VA 视频集。

还有第一个 Carbon 基因组学家族，以及 `vllm-cpp` 后端的文本生成条目。

> 🔗 PR：#11622、#11603、#11599、#11598、#11594、#11584、#11573、#11571、#11561、#11559、#11557、#11552、#11551、#11549、#11547、 ＃11540，＃11533，＃11526，＃11519，＃11511，＃11490，＃11479，＃11478，＃11477，＃11458，＃11456，＃11455，＃11449，＃11446，＃11443，＃11441， #11439, #11438, #11435

---

## 👒 依赖关系

子模块和引脚在本周期中发生碰撞：

|项目|颠簸|
|---|---|
| CrispStrobe/CrispASR | 10 | 10
| ikawrakow/ik_llama.cpp | 9 |
| vllm-金属（达尔文）| 7 |
|穆德勒/vllm.cpp | 6 |
| 0xShug0/音频.cpp | 5 |
| ggml-org/llama.cpp | 4 |
| ggml-org/whisper.cpp | 3 |
| leejet/stable-diffusion.cpp | 2 |
| antirez/ds4、mudler/parakeet.cpp、mudler/深度-anything.cpp、NVIDIA/NeMo-Speech.cpp、vllm-project/vllm cu130 轮 |各 1 个 |
加上 `golang.org/x/net` 到 v0.55.0、vllm 0.26.0 和 Python 后端中的变压器 >=5.15.0、句子变压器 5.7.0、包装 26.3、dompurify 3.4.13、Kokoros 源引脚、从 unsloth 刷新的推理默认值和七个图库校验和刷新。

---

## 📖 文档

用于上下文压缩和 `vllm-cpp` 的新页面、涵盖 PII 假名和压缩表面的大幅扩展的中间件页面，以及记录默认拒绝更改后的公共和受保护路由表面的重写身份验证页面。

视频生成获得了 MiniMax-H3 设置、文本到音频的 Qwen3-TTS llama.cpp 路径、分布式模式的持久冷负载行为、MCP 配置格式和容器网络含义，以及实时共享 UDP 端口和防火墙指导。嵌入、模型库、后端和 API 发现都进行了更正，破碎的星星计数器也从网站中出来了。

> 🔗 PR：#11448、#11581、#11582、#11415

---

## 🙌 新贡献者

- @tom-mi 在 #11518 中做出了第一个贡献
- @kassane 在 #11427 中做出了第一个贡献
- @fieryWaters 在 #11492 中做出了第一个贡献

还要感谢 @richiejp、@jimmykarily、@Dennisadira、@dedyf5、@ALameLlama 和 @walcz-de，以及 [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/) 的身份验证绕过报告。

<!-- 使用 master 上的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 重大变化🛠
* 修复（auth）：https://github.com/mudler/LocalAI/pull/11602 中@localai-bot 默认保护 HTTP 路由
### 错误修复：错误：
* 修复（kokoros）：通过 @mudler 和 https://github.com/mudler/LocalAI/pull/11414 中的 @Copilot 将缺少的 `upscale_image` 存根添加到后端特征实现
*修复（画廊）：通过@localai-org-maint-bot在https://github.com/mudler/LocalAI/pull/11434中识别无效的预加载JSON
* 修复（vllm）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11437 中对齐 Intel Basekit 运行时
* 修复（模型）：https://github.com/mudler/LocalAI/pull/11447 中@localai-org-maint-bot 的表面后端启动退出
* 修复（ui）：取消合并https://github.com/mudler/LocalAI/pull/11462中@localai-bot在浏览器chrome中留下按钮的类字符串
* 修复（实时）：让 ICE 接口允许列表与 https://github.com/mudler/LocalAI/pull/11466 中的 @jimmykarily 的固定 UDP 端口一起工作
* 修复（parakeet-cpp）：在https://github.com/mudler/LocalAI/pull/11492中@fieryWaters在macOS构建中启用Metal
* 修复：在 https://github.com/mudler/LocalAI/pull/11495 中 @richiejp 在 UI 中显示 MCP 连接错误
*修复（vllm-cpp）：构建平台可以由https://github.com/mudler/LocalAI/pull/11512中的@localai-bot托管的每个CUDA架构
* 修复（图库）：正确解析 https://github.com/mudler/LocalAI/pull/11518 中 @tom-mi 的 gpt-oss-* 模型的和谐输出 (#8037)
* 修复（ui）：在 https://github.com/mudler/LocalAI/pull/11488 中保持 @localai-org-maint-bot 可见代理导入操作
* 修复（stablediffusion）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11531 中嵌入 Metal 库
* 修复（模型）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11532 中报告后端崩溃诊断
* 修复（分布式）：将冷模型加载作为持久作业运行，而不是通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11514 中持有咨询锁
* 修复（下载器）：在 https://github.com/mudler/LocalAI/pull/11536 中重试 @localai-org-maint-bot 的校验和不匹配
* 修复（fish-speech）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11568 中保留 ROCm PyTorch
* 修复（音频）：在 https://github.com/mudler/LocalAI/pull/11565 中拒绝 @localai-org-maint-bot 不兼容的转换流
* 修复：@ALameLlama 在 https://github.com/mudler/LocalAI/pull/11576 中的 tts 文本换行
### 令人兴奋的新功能🎉
* feat(modelartifacts)：支持 @Dennisadira 在 https://github.com/mudler/LocalAI/pull/11162 中进行有界并行 Hugging Face 文件下载
* feat(i18n)：在 https://github.com/mudler/LocalAI/pull/11427 中添加 @kassane 的 pt-BR 翻译
* feat(vllm-cpp)：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11424 中生成 MiniMax-H3 视频+音频
* feat(pii)：通过 https://github.com/mudler/LocalAI/pull/11272 中的 @localai-org-maint-bot 恢复请求范围内的假名
* feat(llama-cpp)：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11392 中的 llama.cpp 后端提供 Qwen3-TTS
* feat(realtime): 通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11436 添加共享 WebRTC UDP 端口
* feat(ui)：在https://github.com/mudler/LocalAI/pull/11461中通过@localai-bot在重新设计的设计语言上重建导入表单
* i18n(id)：通过 https://github.com/mudler/LocalAI/pull/11493 中的 @dedyf5 将管理、媒体和导航 UI 字符串翻译为印度尼西亚语
* feat(ui)：通过https://github.com/mudler/LocalAI/pull/11548中的@localai-bot统一模型和后端生命周期
* 壮举：绑定全局准入并公开 @richiejp 在 https://github.com/mudler/LocalAI/pull/11560 中的运行后端跟踪
* 壮举（路由器）：使 KNN 成为一流的分类器，具有 @richiejp 在 https://github.com/mudler/LocalAI/pull/10652 中持久保存的、精选的语料库
* feat(chat)：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11556 中添加端到端上下文压缩
### 🧠 模型
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11438 中添加 @localai-org-maint-bot 的 Grug 12B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11441 中添加 @localai-org-maint-bot 的 Shieldstral 1.0 3B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11435 中添加 @localai-org-maint-bot 的 Genesis Hermes V7 变体
* feat(gallery)：添加 minimax-h3-ref2va-q4 - Ref2VA 分区，由 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11439 中验证一致
* 壮举（画廊）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11443 中添加 BigBang v1 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11458 中添加 @localai-org-maint-bot 的 Gemma 4 Scotoma 2 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11446 中添加 @localai-org-maint-bot 的 Muse Glimmer 30B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11456 中添加 @localai-org-maint-bot 的 Higgs Audio v3 TTS
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11449 中添加 @localai-org-maint-bot 的 BTL-4 Compact
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11455 中添加@localai-org-maint-bot 的 XYZ Aquila 迷你变体
* 修复（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11459 中更正 Higgs Audio v3 校验和
* 杂务：https://github.com/mudler/LocalAI/pull/11270 中的 @github-actions[bot] 的碰撞推理默认来自 unsloth
* 修复（图库）：在 https://github.com/mudler/LocalAI/pull/11476 中通过 @localai-org-maint-bot 对齐 Higgs 音频校验和测试
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11477 中添加 @localai-org-maint-bot 的 Nemotron 3.5 Lightning 30B
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11478 中添加 TwIL-LM3 变体
* 修复（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11480 中修复 DeepSeek V4 回退
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11479 中添加 @localai-org-maint-bot 的 Fara1.5 4B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11490 中添加 @localai-org-maint-bot 的 LFM2.5 VL 1.6B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11519 中添加 @localai-org-maint-bot 的 Qwen3.8 27B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11533 中添加 @localai-org-maint-bot 的 DeepSeek V4 Pro 0813
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11526 中添加 @localai-org-maint-bot 的 LFM2.5 230M 变体
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11511 中添加 @localai-bot 的 vllm.cpp 文本生成模型
*壮举（画廊）：在https://github.com/mudler/LocalAI/pull/11540中添加@localai-org-maint-bot的HunyuanOCR变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11547 中添加 @localai-org-maint-bot 的 Tess 4 27B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11551 中添加 @localai-org-maint-bot 的 AREX Turbo 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11549 中添加 OvisOCR2 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11557 中添加 @localai-org-maint-bot 的 Qwen3.8 9B 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11552 中添加 Ornith 1.0 9B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11573 中添加 @localai-org-maint-bot 的 Qwen3.8 Ridge 变体
*壮举（画廊）：在https://github.com/mudler/LocalAI/pull/11571中添加@localai-org-maint-bot的Qwen3.8小变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11561 中添加 @localai-org-maint-bot 的 MiniCPM5 1B Q8 变体
* 杂务（模型库）：：机器人：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11596 中的库代理添加 1 个新模型
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11559 中添加 @localai-org-maint-bot 的 North Mini Code 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11584 中添加 UI-Mate 9B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11598 中添加 @localai-org-maint-bot 的 Ling 3.0 Flash 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11599 中添加 Hy-MT2 1.8B 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11594 中添加碳基因组变体
* 杂务（模型库）：：机器人：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11605 中的库代理添加 1 个新模型
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11603 中添加 @localai-org-maint-bot 的 Ornith 1.5 9B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11622 中添加 @localai-org-maint-bot 的 Gemma 4 代理变体
### 📖 文档和示例
* 文档：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11415 中的 @localai-bot 更新文档版本 mudler/LocalAI
* 文档：删除 https://github.com/mudler/LocalAI/pull/11448 中 @richiejp 的破碎星星计数器
* 文档（采用者）：通过 @walcz-de 在 https://github.com/mudler/LocalAI/pull/11581 中添加 walcz.de
* 文档（生态系统）：通过 https://github.com/mudler/LocalAI/pull/11582 中的 @walcz-de 将 Walcz 添加到贡献者中
### 👒 依赖关系
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11416 中的 @localai-bot 将 ggml-org/whisper.cpp 更新为 `592feef04a1802b18cbeffd0fd0eb5d02570c2ec`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11418中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11403 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `40dffce6857b4fe051f096379dc464764c718458`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11404 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `17a6cc99422bfafadf7161e96dd7294c89da9c36`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11421 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `f2328aa0c19954d0ab31a3de60fbf50e47c2429f`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11423中的@localai-bot更新校验和
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11432 中的 @localai-bot 将 antirez/ds4 更新为 `84cc882352757baf628a1776badf7cc54d584e28`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11431 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `a7c81affa48c6800d63111bdb33469a01d062daa`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11433中的@localai-bot更新校验和
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11401 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `748c5e28f6a7228b8f38ad7142ca97d29584544b`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11422 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `8898b0fee199b1765321a5d0d8314aee51a34583`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11425 中的 @dependabot[bot] 将 npm_and_yarn 组中 /core/http/react-ui 中的 dompurify 从 3.4.12 提升到 3.4.13 跨 1 个目录
* 杂务: :arrow_up: 通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11452 中将 ikawrakow/ik_llama.cpp 更新为 `5763a901de3f525b65ed5574fd57623905685755`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11450 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `8b91f4c5490b88ae6193673c35644d91d8695821`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11451 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `9d6e7b39236e0151ad28a70fab0d538b84ce8718`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11453中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11454 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `030ebb558a5820b444a8f836ed5cdd46c9b4bd7a`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11385 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `24306364ab8beaed9197604a042a56aaccfde493`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11475 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `26ceed9d4091a1696cf50e2ed87e5767d5811d81`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11471中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11481 中的 @localai-bot 将 mudler/depth-anything.cpp 更新为 `54abd5c0abfd1f394e01cb3c38f2e3af4daedf85`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11472 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `9fd9e8f34408d5dd21d7f9385e96fc755708950b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11482 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `c46ffaa5665cfb2d6cf372c9a054dbab896e14fe`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11467 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260812005333`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11468 中的 @localai-bot 将 vllm-project/vllm cu130 轮更新为 `0.27.1`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11470 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `ce521ee178867ceaa5fdc11803616578c8936c19`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11469 中的 @localai-bot 将 leejet/stable-diffusion.cpp 更新为 `de298c225bed97c3f9026b73cd7b71e7879bd41b`
*杂务（deps）：由https://github.com/mudler/LocalAI/pull/11496中的@dependabot[bot]将后端/rust/kokoros/sources/Kokoros从`7089168`撞到`29e99ad`
*杂务（deps）：在/backend/python/coqui中从26.2到26.3的碰撞包装，由@dependabot[bot]在https://github.com/mudler/LocalAI/pull/11497中
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11473 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `84e908c625fb60992b4cdef8180fb12fa9b4c4bf`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11500 中的 @dependabot[bot] 将 /backend/python/transformers 中的变压器要求从 >=5.14.1 更新为 >=5.15.0
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11507 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260813121949`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11509 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `981e5ea0d7579b4803c86afbb09a7cd7d7bf3bb8`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11510 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `cb082743c456ac77aec0947de36e6420a933da04`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11527 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `43afea46c25a12aae6db1e3105643267164898b4`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11525中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11522 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260814013332`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11523 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `cc498701f1a68d88dd489803ebad10053a924322`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11524 中的 @localai-bot 将 ggml-org/whisper.cpp 更新为 `1fe009caeda75f69bc864d6370b10674e45a92bd`
* 杂务（deps）：将/backend/python/transformers中的句子变压器从5.6.1撞到5.7.0，由@dependabot[bot]在https://github.com/mudler/LocalAI/pull/11499中
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11402 中的 @dependabot[bot] 在 /backend/python/vllm 中将 vllm 从 0.25.1 提升到 0.26.0
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11542 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `8337e4cd3861406fc04e0854b1409cd1b027fbc9`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11541 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260815085651`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11544 中的 @localai-org-maint-bot 将 golang.org/x/net 切换到 v0.55.0
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11515 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `4880c5715f36445a30bd39d3349a06dc96085a11`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11553 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260816085229`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11554 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `3721d402f7bcc911dd4143a58e3da1cc67f09cc2`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11570 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260817081527`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11569 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `007fda47128aaba7e2ce2279b0947a1c13800d68`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11508 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `0021a77de0a8966059dc94548fb3b96654e0bb12`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11555 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `76f2a6d84e41cc9a593146a9a958f63645542731`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11474 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `3407559d7c83b543bd60ca8fa2b630374e71083f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11586 中的 @localai-bot 将 vllm-metal (darwin) 更新为 `v0.3.0.dev20260818075955`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11587 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `92816fc5c48d33a58171b49678ccf884d70142fb`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11588 中的 @localai-bot 将 ggml-org/whisper.cpp 更新为 `4834a2327d008ace3ec5a9ed00f51454bcabbc1c`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11589 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `6e99e4540b8d0811542a9d7690dc9aa0bda5812f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11590 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `60addddf3c567c43ec3caf70fc953fba3572d96f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11591 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `a117d433855ecc36b0cb20bd1abddd852902ed13`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11592 中的 @localai-bot 将 mudler/parakeet.cpp 更新为 `e75de9b6b9b688fd293aa22f7e27aa724ea286f8`
* 杂务: :arrow_up: 通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11612 中将 mudler/vllm.cpp 更新为 `438305e1577768ec0f75729456a4c8b9f425e2ee`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11613 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `a61da671b6a81c79071500954eea3c91c1a383dd`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11616 中的 @localai-bot 将 leejet/stable-diffusion.cpp 更新为 `97d2990807fe6d558e395f8764198d7c7e7b411c`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11615中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11611 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `a153b09b37c90cd55cd9336fccbdf3ba7a289596`
* 杂务：：arrow_up：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11417 中将 NVIDIA/NeMo-Speech.cpp 更新为 `4f9676226f667d14608487df744f375db87127f8`
### 其他变化
* 修复（ci）：通过 https://github.com/mudler/LocalAI/pull/11457 中的 @localai-org-maint-bot 解析当前 vllm-metal 版本引脚
* 修复（ci）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11572 中的 PR 刷新站点计数器
* feat(swagger): 在https://github.com/mudler/LocalAI/pull/11585中通过@localai-bot更新swagger
* 修复（ci）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11595 中测试分割包中的陈旧块

**完整 Changelog**：https://github.com/mudler/LocalAI/compare/v4.8.2...v4.9.0

---

> 📦 仓库：[mudler/LocalAI](https://github.com/mudler/LocalAI) · 🏷️ 版本：`v4.9.0` · 📅 发布：2026-08-20 · [查看英文原版 Release](https://github.com/mudler/LocalAI/releases/tag/v4.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
