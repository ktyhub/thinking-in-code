---
title: "LocalAI v4.8.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.8.0"
version: "v4.8.0"
published: "2026-08-05"
type: "minor"
lang: "zh"
---

# LocalAI v4.8.0

# 🎉 LocalAI 4.8.0 发布！ 🚀

<h1对齐=“中心”>
  <br>
  <img高度=“300”src=“https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png”>
  <br>
  <br>
</h1>

LocalAI 4.8.0 出来了！

22 天、386 个拉取请求和三种新模式。此版本引入了 **vllm.cpp**，这是一个由 LocalAI 团队维护的 C++20 引擎，它最初是作为 vLLM 端口，现在具有自己的功能集，作为 **alpha 开发版本** 中的 `vllm-cpp` 后端发布。围绕它：**3D生成**作为一种新的模式，多系列**audio.cpp**引擎，安装硬件可以实际运行的构建的图库条目，以及由生产事件驱动的分布式模式的深度可靠性传递。

**亮点：**

- 🚀 **vllm.cpp (alpha)** - 由 LocalAI 团队维护的 C++20 引擎，最初是 vLLM 端口，并保留 vLLM 作为其参考实现：V1 服务架构（分页 KV 缓存、连续批处理、前缀缓存、调度程序、采样器），推理时没有 Python、PyTorch 或 ggml。在 Qwen3.6-27B NVFP4 上以 1.045x vLLM 在并发性 1 下测量，每个令牌的输出都相同。加载安全张量和 GGUF，在引擎内强制执行结构化输出，并在 CPU、CUDA、Metal 和 Vulkan 上运行。 Apple Silicon 构建附带了 MLX GEMM 提供程序，在 M4 上测量为 1.5 倍到 2.2 倍。作为 alpha 开发版本发布：尝试一下，不要依赖它。
- 🧊 **3D 生成** - 端到端的新模式：`Generate3D` RPC、`FLAG_3D` 功能、`POST /v1/3d/generations`、`trellis2cpp` 图像到 3D 后端以及带有本机 GLB 查看器和打印重新网格化的 UI 页面。
- 🔊 **audio.cpp** - 一个后端进程为多个模型系列的六个音频端点提供服务，这些端点选自 GGUF 自己的元数据：语音、转录、VAD、二值化、源分离和声音生成。
- 🎛️ **一个模型，多个构建** - 画廊条目可以声明 `variants:`，LocalAI 会安装您的主机实际可以运行的最大构建。不再需要在画廊中寻找正确的量化。
- ⚡ **更轻量级的 Web UI** - 线上 gzip、哈希资产的不可变缓存以及分页跟踪端点：React 包缩小了 3.48 倍，跟踪轮询从 21 MB 下降到 7 KB。
- 📊 **活动页面** - 堆叠的操作栏折叠成一行，新的管理活动页面保留安装、失败或取消的记录，而不是在完成后立即将其丢弃。
- 📦 **拥抱面部工件物化** - 不可变的快照分辨率、具有真实进度的经过身份验证的下载以及远程工作人员可以绑定的分阶段工件。
- 🎚️ **VRAM 预算** - 每个节点 LocalAI 可以使用的卡容量上限，以百分比 (`80%`) 或绝对金额 (`12GB`) 形式表示。
- 🗣️ **两个新的 TTS 引擎** - `magpie-tts-cpp`（NVIDIA Magpie 多语言，5 种语音，9 种以上语言）和 `moss-tts-cpp`（48 kHz 立体声，带参考音频语音克隆）。
- 🌳 **亚 2 位模型** - 新的 `bonsai` 后端服务于 Qwen3 和 Qwen3.6-27B 的 1 位和三元 Bonsai 量化。
- 🖧 **分布式模式强化** - 收割机不再删除活动且繁忙的后端的行，幻影副本被清理，并且 `in_flight` 计数器停止泄漏。

加上 Valkey 矢量存储、systemd 套接字激活、持久跟踪历史记录、两个安全修复、专门针对入门的文档检修以及新的 localai.io。

<p对齐=“中心”>
<img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-home.png" alt="LocalAI 主页" width="900">
</p>

---

## 📊 此版本的数量

| | |
|---|---|
|合并请求请求 | **386** |
|承诺 | 392 | 392
|文件已更改 | 1,204 (**+152,918** / -42,012) |
|发展窗口| 22 天 (2026-07-14 至 2026-08-05) |
|贡献者 | 25 人，其中 **11 人是第一次** |
|新后端 | **7** （`vllm-cpp`、`audio-cpp`、`trellis2cpp`、`valkey-store`、`bonsai`、`magpie-tts-cpp`、`moss-tts-cpp`）|
|画廊条目| 1,221 至 **1,515** (+294) |

工作落地的地方：

|面积 |改变|
|---|---|
| `core/` | +54,974 / -8,291 跨 546 个文件 |
| `gallery/` | +39,193 / -29,119（变体梯子重写了大部分索引）|
| `backend/` | 256 个文件中的 +25,668 / -1,305 |
| `pkg/` | +9,678 / -385 |
| `.github/` | +7,526 / -61 |
| `docs/` | +4,285 / -2,461（设计上接近持平：重复数据删除过程删除的内容与添加的内容一样多）|
| `website/` | +4,479（新项目网站）|
| `scripts/` | +3,373 / -175 |

---

## 📌 太长；博士

|面积 |总结|
|------|---------|
| 🚀 **vllm.cpp** (alpha) |由 LocalAI 团队维护并在自己的存储库中开发的 Apache-2.0 C++20 引擎，最初是作为 vLLM 端口，在其稳定的 C ABI v5 上作为 `vllm-cpp` 后端的 **alpha 开发版本** 发布。它使用 vLLM 作为参考实现和基准，并实现 vLLM 的 V1 架构（分页 KV 缓存、连续批处理、前缀缓存、调度程序、采样器），推理时无需 Python、PyTorch 或 ggml。 Safetensors + GGUF，引擎内结构化输出（JSON 模式/正则表达式/选择/GBNF）。聊天和工具调用使用 llama.cpp 自动解析器路径：完整的 Minja 模板、`tool_choice: auto` 作为惰性结构标签约束、30 种工具方言和 7 个推理解析器、流式传输 `ChatDelta`/`ToolCallDelta`。 CPU amd64/arm64、CUDA 12/13 (Blackwell)、L4T、Vulkan 和 Darwin Metal，最后一个由 MLX GEMM 提供程序提供（M4 上为 1.5 倍到 2.2 倍）。 |
| 🧊 **3D 生成** |一种新的端到端有线模式：`Generate3D` RPC、`FLAG_3D` 功能、`POST /v1/3d/generations`、TRELLIS.2 上的 `trellis2cpp` 图像到 3D 后端，以及带有本机 GLB 查看器、IndexedDB 历史记录和可预览打印重新网格化的 UI 页面。 |
| 🔊 **音频.cpp** |基于 [audio.cpp](https://github.com/0xShug0/audio.cpp) 的新原生 C++ 后端，一种多系列 ggml 音频引擎：一个进程提供 `/v1/audio/speech`（supertonic、chatterbox、irodori-voicedesign）、`/v1/audio/transcriptions`（citrinet、nemotron、forced-aligner）、`/v1/audio/vad`、`/v1/audio/diarize`（sortformer）、`/audio/transform` （htdemucs 4 词干分离、语音转换、语音到语音）和 `/v1/sound-generation`。系列来自 GGUF 自己的 `audiocpp.model_spec.family` 密钥，因此没有每个型号的后端选项。 13 个画廊条目。 CPU、CUDA 12/13、Vulkan、金属。 |
| 📊 **活动页面** |堆叠的操作栏变成永久的单行条带（`✕` 现在隐藏而不是取消），并带有新的管理 `/app/activity` 页面：带有每个节点故障的正在进行的详细信息、带有取消和重试的“需要注意”通道，以及已完成的有界 50 条目记录。 |
| 🗄️ **Valkey 矢量商店** |新的 `valkey-store` 后端添加了 Valkey 搜索作为矢量存储选项。 |
| 🌐 **新 localai.io** |该站点分为根目录下的项目站点和 `/docs/` 下的文档，并带有 214 个生成的重定向存根，因此每个已发布的 URL 都可以继续工作。添加由 YAML、博客、生态系统乐队和 `ADOPTERS.md` 驱动的引擎页面。 |
| 🎛️ **图库变体** |一个条目可以声明引用其他条目的 `variants:`。安装时选择会删除主机无法运行 (`IsBackendCompatible`) 或无法容纳的版本（VRAM 或 CPU 主机上的 cgroup 感知 RAM），然后选择适合的最大版本。使用 `POST /models/apply`、`local-ai models install --variant`、`install_model` MCP 工具或 UI 拆分按钮上的 `variant` 覆盖。 `GET /api/models?has_variants=true` 缩小了列表范围。较旧的 clients 会忽略该密钥并像以前一样安装该条目。 |
| 📦 **高频伪影** |不可变的快照分辨率、经过身份验证的进度下载、图库安装和预加载实现、运行时绑定到分阶段工件以及 UI 进度报告。 Python 后端重用 Go 下载路径。 |
| ⚡ **HTTP 性能** | gzip 中间件（`--disable-http-compression`、`--http-compression-min-length`），显式跳过流路径。 `/assets/*`服务于`immutable`、`index.html`、`no-cache`。 `/api/traces` 和 `/api/backend-traces` 默认接受 `limit`/`offset`/`full` 并汇总，`GET /api/traces/{id}` 为完整记录。 React 包 2,815,513 B 至 807,918 B；后端跟踪民意调查 21,131,097 B 至 7,201 B。
| 🎚️ **显存预算** | `LOCALAI_VRAM_BUDGET=80%` 或 `=12GB`（也称为 `--vram-budget`），适用于 `local-ai` 和 `local-ai worker`。独立时，它是一个硬性的每进程上限，由上下文适合、GGUF 警告和看门狗继承；分布式它是调度程序遵守的放置上限。通过 `PUT`/`DELETE /api/nodes/:id/vram-budget` 和 `set_node_vram_budget` MCP 工具进行管理员覆盖。未设置表示所有检测到的 VRAM。 |
| 🗣️ **喜鹊-tts-cpp** |基于 [magpie-tts.cpp](https://github.com/mudler/magpie-tts.cpp) 的新 Go/purego 后端，这是嵌入 NanoCodec 的 NVIDIA Magpie TTS 多语言 357M 的 ggml 端口。 5 种声音，9 种以上语言，22.05 kHz 单声道，一种独立的 GGUF。 |
| 🗣️ **moss-tts-cpp** | MOSS-TTS-Local v1.5 的新 Go/purego 后端 [moss-tts.cpp](https://github.com/mudler/moss-tts.cpp)。 48 kHz 立体声，可选参考音频语音克隆，推理时无 Python。 |
| 🌳 **盆景** | [PrismML llama.cpp fork](https://github.com/PrismML-Eng/llama.cpp) 上的新后端，这是 Q1_0 和 Q2_0 量化格式的唯一解码器。盆景 8B/27B 和三元盆景 8B/27B 的八个画廊条目，来自 ~1.15 GB。 |
| 🖧 **分布式可靠性** |不再收获繁忙的后端：直接向工作人员询问新的 `models.running` 主题，并且端口探测回退区分 `DeadlineExceeded`（繁忙）和 `Unavailable`（消失），需要连续三次未命中。当没有健康副本剩余时，前端模型存根将被删除，`in_flight` 泄漏将被关闭，并且模型加载截止日期会随着检查点大小而缩放。 |
| 🛡️ **安全** | `POST /api/fine-tuning/jobs`中的内联GRPO奖励代码将被拒绝，除非操作员设置`LOCALAI_TRL_ALLOW_INLINE_REWARD=true`；以前的内置白名单可以在默认情况下未经身份验证的端点上执行任意代码。还获得了 CVE-2026-54290 的 hono 4.12.25。 |
| 🧠 **模型** | MiniMax-M3、Gemma 4 llama.cpp MTP 变体、Qwen3.5-4B DFlash、MOSS-TTS-Local v1.5、作为变体梯子的 APEX 系列以及 Bonsai 系列。删除重复的条目并检查是否重复出现。 |
| 📖 **文档** |入门大修：一个模型从安装到第一个 API 调用、新的“构建您的第一个代理”演练、基于文字错误字符串的运行时错误参考、代理操作目录和新的操作部分。 |

---

## 🚀 新功能和主要增强功能

### 🚀 介绍 vllm.cpp（alpha）

<p对齐=“中心”>
  <img src="https://raw.githubusercontent.com/mudler/vllm.cpp/master/benchmarks/media/concurrency_race.gif" alt="vllm.cpp 和 vLLM 在 Qwen3.6-27B" width="900"> 上并行生成
<br><em>vllm.cpp 与 Qwen3.6-27B 上的 vLLM 对比，每个并发的输出相同。</em>
</p>

**[vllm.cpp](https://github.com/mudler/vllm.cpp) 是 Apache-2.0，由 LocalAI 团队维护，最初是 vLLM 的 C++20 端口。** 我们希望它是社区优先的引擎，而不是仅 LocalAI 的引擎，因此它位于自己的存储库中，拥有自己的文档、基准测试记录和问题跟踪器，并且在没有 LocalAI 的任何地方都可以使用。它在便携式张量运行时上实现了 vLLM 的 V1 服务架构（分页 KV 缓存、连续批处理、前缀缓存、调度程序、采样器），**在推理时没有 Python、PyTorch 和 ggml**，并使用 vLLM 本身作为其参考实现：通过将输出与它进行比较来检查正确性，并保持基准记分板与之相对。

此后，它发展了 vLLM 所不具备的功能集，而这正是移植的目的。它加载 GGUF 以及 Hugging Face safetensor，在 CPU、Apple Metal 和 Vulkan 以及 NVIDIA CUDA 上运行，提供推测解码和 KV 卸载，并在引擎内强制执行结构化输出（JSON 模式、正则表达式、选择、GBNF）。它的基准页面现在针对 llama.cpp、MLX-LM 和 DwarfStar 以及 vLLM 进行衡量，因为这些是它在该硬件上实际竞争的引擎。

**该项目预计将更名**，新名称尚未确定。它与 vLLM 相差太远，称其为移植就低估了它，称其为 vllm.cpp 最终会产生误导。

### 数字，来自项目自己的记分牌

<p对齐=“中心”>
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-vllm-cpp-scoreboard.png" alt="vllm.cpp 相对于每个参考引擎的吞吐量" width="900">
</p>

这些来自 [vllm.cpp 的 BENCHMARKS.md](https://github.com/mudler/vllm.cpp/blob/master/docs/BENCHMARKS.md)，它将平局报告为平局，将损失报告为损失。吞吐量是 vllm.cpp 超过参考值，因此上面的 1.0 领先。

|参考|工作量|结果 |
|---|---|---|
|法学硕士 | Qwen3.6-27B NVFP4、GB10 |并发度 1 时为 1.045x，c2 到 c32 时为 1.007x 到 1.017x，输出令牌对令牌相同 |
|法学硕士 | Qwen3.6-35B-A3B NVFP4、GB10 | c16 时为 1.010x，c32 时为 1.013x；在 c1 到 c8 处落后（c1 处 0.817 倍）|
|法学硕士 | DeepSeek-V2-Lite MLA，GB10 | 0.86 倍至 0.95 倍吞吐量，TTFT 在 c4 和 c8 上领先 |
|骆驼.cpp | Qwen3.5-2B GGUF，CPU aarch64 |预填充 1.18x、解码平局、内存奇偶校验、字节相同输出 |
| MLX-LM | Qwen3-0.6B，苹果M4 | 97.6 占温暖总数的%，提前预填充 |
|矮星 (ds4) | DeepSeek-V4-Flash IQ2_XXS，一台 DGX Spark | 18.69 与 16.33 tok/s 解码，**1.144x**，相同的输出 |
|法学硕士 |拉古纳-XS-2.1 NVFP4，GB10 | 44.46 与 43.10 tok/s，**1.03x**，相同输出 |

上游页面对自己的噪声带很谨慎：在 27B 网格上，它称 c2 到 c32 为平局，而不是获胜，因为运行间差值为 0.5%，而这些边际落在 0.7% 和 1.7% 之间。 c1 结果就是它所代表的结果。

DeepSeek-V4-Flash 行显示了该项目距离 vLLM 移植有多远。它在**单个 DGX Spark** 上以大约 2 位（IQ2_XXS 混合，大约 80 GB）运行 DeepSeek-V4-Flash，以 18.69 tok/s 与 DwarfStar 的 16.33 进行解码。在总参数超过 300B+ 时，即使 4 位检查点也需要 156 GB 或更多，因此 2 位 GGUF 适合 Spark 的 119 GiB 统一池，而读取 GGUF 则使之成为可能。
这个数字在一周内移动了两次，第二次移动来自一个杠杆。密集的 Q8_0 投影塔是通过统一内存从 GGUF mmap 读取的，GB10 的每个 GEMV 读取速度比设备内存慢约 20%。在加载时暂存约 6 GiB 塔设备驻留，相同的字节和相同的内核，从 16.23 解码到 18.69，生成相同的令牌并且不再使用峰值内存。同样的变化使 Laguna-XS-2.1 从 vLLM 的 87% 提高到领先它的 1.03 倍。

推测性解码的形状类似：Qwen3.6-27B NVFP4 上的 MTP 生成与 vLLM 的 MTP 相同的令牌，并且在并发数 1 下运行速度快约 4%。

它作为 **`vllm-cpp`** 后端提供，通过 purego 释放引擎的稳定 C ABI (v5)。并发请求在引擎的共享调度程序内连续批处理而不是序列化，因此后端在 `base.Base` 而不是 `SingleThread` 上运行。

**工具调用通过构造在 llama.cpp 奇偶校验**，因为聊天重用相同的自动解析器路径。使用 `use_tokenizer_template`，引擎渲染模型自己的聊天模板（GGUF `tokenizer.chat_template` 或 `tokenizer_config.json`，完整的 minja）并自行处理其余部分：

- `tool_choice: auto` 降低为惰性结构标签解码约束； `required` 和命名选择强制使用家族的本机语法来表达。
- 按方言流式解析器涵盖 **30 个工具方言和 7 个推理解析器**，在工具解析之前进行 `<think>` 推理拆分。
- `ChatDelta`、`ToolCallDelta` 和推理流与 llama-cpp 后端完全相同。

`tool_parser:` 和 `reasoning_parser:` 是型号选项，未设置时会自动检测。

开始是正常的后端安装：

```yaml
name: qwen3-vllm
backend: vllm-cpp
context_size: 8192
parameters:
  model: Qwen3-4B      # a safetensors directory or a .gguf file
options:
- max_num_seqs:16      # also: block_size:<n>, num_blocks:<n>
```

构建矩阵涵盖 CPU amd64/arm64、CUDA 12/13（包括 Blackwell `120a;121a`）、GB10 的 L4T arm64、Vulkan 和 Darwin Metal，以及图库元数据和 12 个图像条目。 llama-cpp GGUF 和 vllm safetensors 导入程序获得了优先交换，因此可以在导入时选择后端。

**Apple Silicon 获得了 MLX GEMM 提供商。** darwin 构建供应商 vllm.cpp 的可选 MLX 后端，上游默认情况下将其关闭，因为它必须获得约 124 MB 的位置。在 M4 上测量（Qwen3-1.7B-bf16，p=512 g=128，臂在一个二进制文件上切换，因此不存在构建差异混淆）：

|批量| MLX 托克/秒 |本地tok/s |加速| MLX TTFT |原生 TTFT |
|--:|--:|--:|--:|--:|--:|
| 1 | 5.79 | 3.08 | **1.88x** | 3.32|| 7.68 |
| 4 | 15.75 | 10.24 | **1.54x** | 9.63 | 18.77 |
| 16 | 16 38.65 | 17.69 | **2.19x** | 18.33 | 54.48 |

将这些视为指示性而非约束性的：两次代表的差价达到 9.4%，因此乘数约为 +/-10%。该差距远大于噪声，并且首次标记的时间在该范围内大约减半。

**这些是 alpha 开发版本，而不是已发布的后端。** vllm.cpp 是早期的。它以 4.8 形式提供，因此想要尝试它的人可以，而不是因为它已经为您所依赖的任何内容做好了准备，而 `llama-cpp` 保留了实际使用的默认值。预计会有粗糙的边缘。
CPU 路径通过完整的 Ginkgo 套件针对 `Qwen3.5-2B-UD-Q8_K_XL.gguf` 进行端到端验证：阻塞和流式字节奇偶校验、贪婪确定性、停用词、GBNF 约束生成、并发流、真实模板渲染、推理分割、返回模式有效参数的 `required` 工具调用以及引擎使用工具本身并流解析的增量的 ZZPH100​​ZZ 运行。 GPU 图像构建并发布，但它们的运行时行为尚未通过该大门。没有声称与上游 vLLM 进行吞吐量比较。请报告发生了什么问题。

> 🔗 PR：#11100、#11137

### 🧊 3D 生成，端到端

<p对齐=“中心”>
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/3d-generation.gif" alt="生成的 3D 美洲驼在 GLB 查看器中转动" width="760">
  <br><em>trellis2-4b，2,502,928 个顶点，在浏览器中打开。</em>
</p>

LocalAI 获得了新的模式。 Image-to-3D 连接整个堆栈，而不是固定到现有端点：`backend.proto` 中的 `Generate3D` RPC、`FLAG_3D` 功能（以便加载程序知道哪些后端可以为其提供服务）以及 `POST /v1/3d/generations`。

其背后的第一个引擎是 **`trellis2cpp`**，一个基于 TRELLIS.2 的本机图像到 3D 后端。 React UI 获得一个带有本机 GLB 查看器的 3D 生成页面、IndexedDB 支持的历史记录（以便您的生成能够在重新加载后幸存）以及可预览的打印重新网格化，以便您想要实际打印的输出。

> 🔗 PR：#10979

### 🔊audio.cpp：一个后端，六个音频端点

**`audio-cpp`** 包装了 [audio.cpp](https://github.com/0xShug0/audio.cpp)，一个多系列 ggml 音频引擎。单个后端进程不是每个模型系列一个后端，而是通过一个运行时词汇表为多个不相关的系列提供服务，并从 GGUF 自己的 `audiocpp.model_spec.family` 元数据密钥中选择系列，因此模型不需要加载特定于后端的选项。

|端点 |家庭 |
|---|---|
| `/v1/audio/speech`（批量+流式传输）| supertonic、chatterbox（语音克隆）、irodori-voicedesign（通过 `instructions` 进行语音设计）|
| `/v1/audio/transcriptions`（批量、流式传输、实时）| citrinet、nemotron、强制对准器 |
| `/v1/audio/vad` | silero-vad、marblenet-vad |
| `/v1/audio/diarize` |分类器 |
| `/audio/transform` | htdemucs（4 词干分离）、chatterbox（语音转换）、seedvc-singing、vevo2（语音到语音）|
| `/v1/sound-generation` |稳定音频 sfx |

附带了 13 个图库条目，引擎实际可以服务的每种任务类型都有一个代表性模型。如果它不能诚实地支持 RPC，它会返回 `UNIMPLEMENTED` 并给出原因，而不是空洞的成功，并且失败的加载是 gRPC 错误而不是 `success: false`，因此加载程序的贪婪后端探针永远不会默默地为它无法服务的模型选择它。

有两个变化超出了后端范围。 `backend.proto` 增益 `AudioTransformStem` 和 `AudioTransformResult.stems`，因此源分离可以返回整个主干集，而不是单个混音。 `/audio/transform` 不再硬编码 16 kHz 单折叠：该折叠使得 4 干分离无法通过构造实现，因此它成为每个后端的功能，现有后端明确保留它，并且未注册后端的默认设置是单独保留上传。

平台：Linux 上的 CPU（amd64 和 arm64）、CUDA 12、CUDA 13 和 Vulkan，以及 darwin-arm64 上的 Metal。无 ROCm，上游不支持。

> 🔗 PR：#11141

### 📊 一条单行条和一个活动页面

<p对齐=“中心”>
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-activity.png" alt="正在运行四个安装的活动页面" width="900">
<br><em>四个后端安装正在进行中，并记录了已完成的内容。</em>
</p>

操作栏在每个页面上方针对每个进行中的操作呈现一行。将四个模型安装和一个后端排队，每条路线都占用了大部分视口，直到最后一个完成。两件事被混为一谈：全局“某事正在发生”信号（需要一行）和正在发生的事情的详细信息（需要一页）。

该条现在永久折叠成一条线，显示使用 `+N more` 药丸的一次操作（首先失败，否则是最不先进的运行操作）。它的 `✕` **隐藏条带并且从不取消**，这是一个故意的更改：相同的字形之前在一行中取消了 17 GB 下载，并在下一行中忽略了一条消息。取消移动到页面，位于带标签的按钮后面。

`/app/activity` 上的新的仅限管理的“活动”页面包含条带必须删除的详细信息（阶段、字节、剩余时间以及集群安装的每个节点细分）、用于取消和重试的未确认故障的“需要注意”通道，以及完成情况的记录。该记录是一个有界的 50 个条目环，它弥补了一个真正的差距：`/api/operations` 在成功时就放弃了操作，因此离开的用户无法了解安装是否已完成、失败或从未开始。

在此过程中修复了几个潜在的 UI 错误：重试失败的删除会重新下载模型，使用微调器将操作渲染为“正在安装”排队，一条长错误消息将每一页推过视口约 270 像素，并且每当验证时，每个操作的 ETA 都会显示为空白。

> 🔗 PR：#11163

### 🎛️ 一个画廊条目，多个构建

<p对齐=“中心”>
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-model-variants.png" alt="列出每个变体的模型详细信息窗格" width="900">
  <br><em>一个条目，四个构建。 LocalAI 选择最大的适合并将其标记为自动选择。</em>
</p>

画廊条目现在可以声明 `variants:`，这是对其他画廊条目的引用列表，这些条目是相同权重的替代版本：

```yaml
- name: nanbeige4.1-3b-q4      # still a normal, complete, installable entry
  url: github:mudler/LocalAI/gallery/nanbeige4.1.yaml@master
  overrides: {parameters: {model: nanbeige4.1-3b-q4_k_m.gguf}}
  files: [...]
  variants:
    - model: nanbeige4.1-3b-q8
```

安装时选择，顺序为：

1. 删除后端无法运行的变种。 MLX 在 Linux 上消失，CUDA 在 Mac 上消失。源自后端名称，因此作者从不写硬件条件。
2. 删除不适合的内容：GPU 主机上的 VRAM、CPU 主机上的 cgroup 感知系统 RAM，以便容器看到自己的限制。
3. 取剩下的最大的一个，因为相同重量的情况下，占地面积越大越好。

该条目自己的构建在该排名中竞争并且永远不会被过滤掉，因此选择总是以可安装的东西结束。

大小来自现有的 `pkg/vram` 估计器（远程 GGUF 标头、HTTP `HEAD`、声明的 `size:`，然后是 HF 存储库列表）。无需下载任何内容来决定，并且探测失败永远不会导致安装失败。

自动选择是默认设置，每个曲面都可以覆盖它：`POST /models/apply` 上的 `variant` 和 `POST /api/models/install/:id`、`local-ai models install <name> --variant <variant>`、`install_model` MCP 工具上的 `variant` 参数以及模型表中的拆分按钮菜单。即使显式选择不适合，也会受到警告，因为这是故意的操作员覆盖。
现有安装不受影响：每个发布的 LocalAI 都会实时读取 `gallery/index.yaml` 并忽略它不理解的密钥，因此较旧的 client 会删除 `variants:` 并像以前一样安装该条目。规范通过遗留结构重新解析真实索引以保持真实。

值得一提的已知差距：在分布式模式下，`InstallModel` 针对前端而不是为模型提供服务的工作人员进行解析，因此具有小型前端和大型工作人员的集群会保守选择。单个条目内的探测仍然是串行且无上限的。

> 🔗 PR：#10943、#10983、#10992、#11027、#11139

### 📦 抱脸模型神器

Hugging Face 的模型工件现在具体化为托管快照流：不可变的快照分辨率、带有进度报告的经过身份验证的下载、库安装和预加载的具体化、运行时绑定到分阶段工件以及 UI 中显示的进度。 Python 后端重用 Go 下载路径，而不是自行获取。

随之而来的是大量后续措施：每个文件恢复中断的物化而不是重新开始，每个编写器分阶段进入自己的部分树，伴随工件持续存在，以便远程工作人员接收 `base_model` 选项，从文件而不是目录加载单文件 HF 快照，由后端门控推断物化，CIFS `EACCES` 被视为锁争用而不是失败，以及多文件安装进度在验证期间保持成比例。

> 🔗 PR：#10825、#10908、#10909、#10910、#10949、#10986、#10995、#11071、#11075、#11117

### ⚡ 更轻量级的 Web UI 和跟踪 API

三个 HTTP 层问题，全部在实时部署中测量，并一起修复，因为它们都会影响网络上的情况。

无论 `Accept-Encoding` 是什么，服务器根本没有发送 `Content-Encoding`。现在有 gzip 中间件，默认打开并可通过 `--disable-http-compression` / `LOCALAI_DISABLE_HTTP_COMPRESSION` 和 `--http-compression-min-length` / `LOCALAI_HTTP_COMPRESSION_MIN_LENGTH` （默认 1024）进行控制。流响应被显式跳过，因为在 gzip 编写器后面缓冲它们会破坏增量刷新并读取为挂起流：SSE `Accept` 标头、WebSocket 升级以及完成、实时、语音、转录、代理作业和日志尾路径前缀。已经压缩的格式也会被跳过，因为 gzip 使这些格式稍微变大。

Vite 对捆绑文件名进行内容哈希处理，因此 `/assets/` URL 永远无法更改内容，但它们并未附带 `Cache-Control`、`ETag` 或 `Last-Modified`。它们现在携带 `public, max-age=31536000, immutable`，`index.html` 明确是 `no-cache`，因此部署会被拾取，并且未散列的区域设置 JSON 会获得 5 分钟策略。

`/api/traces` 返回一个 21 MB 未分页的 blob，UI 每 5 秒轮询一次。两个列表端点现在都接受 `limit`（默认 50，最大 1000，全部为 `0`）、`offset` 和 `full`，并默认汇总：主体和标头被删除，字节计数器被保留，以便 UI 仍然可以报告丢失的内容。每个跟踪都带有进程生命周期 `id`，`GET /api/traces/{id}` 提供扩展或导出的完整记录。分页元数据位于 `X-Total-Count`、`X-Trace-Offset` 和 `X-Trace-Limit` 中，因此列表主体对于现有消费者来说仍然是普通的 JSON 数组。

| |之前 |之后 |改变|
|---|---|---|---|
|在线 React JS + CSS | 2,815,513 乙 | 807,918 乙 | **小 3.48 倍** |
|所有嵌入资源（包括字体）| 3,953,917 乙 | 1,559,787 乙 |缩小 2.53 倍 |
|重复导航资产转移|完全重新下载| 0 字节 |淘汰|
| `/api/backend-traces` 轮询负载 | 21,131,097 乙 | 7,201 乙 | **~小 2900 倍** |

> 🔗 PR：#11056

### 🎚️ 每节点 VRAM 分配预算

操作员现在可以限制 LocalAI 在节点上用于模型分配的 VRAM 量，以百分比 (`80%`) 或绝对量 (`12GB`) 的形式。 LocalAI 在任何地方都会读取 VRAM 来做出分配决定，现在它使用 `min(detected, budget)`，这是一个永远不会将可用 VRAM 提高到物理之上的硬上限。超过100%的比例被拒绝；高于物理值的绝对值被限制。

```
LOCALAI_VRAM_BUDGET=80%
LOCALAI_VRAM_BUDGET=12GB
```

它适用于 `local-ai` 和 `local-ai worker`（也包括 `--vram-budget`），并且可以从独立设置页面和分布式节点 UI 中的每个节点进行实时编辑。

这两条路径故意不对称：

- **独立**，每个进程的硬上限。 `xsysinfo` 将其保留为进程全局默认值，因此硬件默认值、上下文自动适应、GGUF 警告和看门狗都继承了它。
- **分布式**，有放置上限。工作人员报告原始 VRAM 及其预算字符串；注册表会解析它并在注册和检测信号时限制存储的 `available_vram`，因此 SQL 调度程序不需要更改查询。工作人员仍然可以看到其完整的卡片以适合自己的上下文。

通过 `PUT`/`DELETE /api/nodes/:id/vram-budget` 进行的管理员覆盖在工作程序重新启动后仍然有效，并作为 `set_node_vram_budget` MCP 工具公开。

默认取消设置意味着所有检测到的 VRAM，因此现有部署保持不变。

> 🔗 PR：#10833

### 🗣️ 两个新的文本转语音引擎

**magpie-tts-cpp** 包装 [magpie-tts.cpp](https://github.com/mudler/magpie-tts.cpp)，这是 NVIDIA Magpie TTS 多语言 357M 的 C++17/ggml 端口，嵌入了 NanoCodec 声码器：5 种声音（Aria、Jason、John、Leo、Sofia）、9 种以上语言、22.05 kHz 单声道，来自一个独立的推理时没有 Python 或 PyTorch 的 GGUF。 GGUF 发布于 [mudler/magpie-tts.cpp-gguf](https://huggingface.co/mudler/magpie-tts.cpp-gguf)。实时 gRPC 检查返回有效的非静默 WAV，该 WAV 完全通过 ASR 往返，并且上游引擎针对每个组件的 NeMo 进行奇偶校验（教师强制重放最大绝对差异 3.6e-5）。

**moss-tts-cpp** 包装 [moss-tts.cpp](https://github.com/mudler/moss-tts.cpp)，OpenMOSS MOSS-TTS 系列的 ggml 端口，为 MOSS-TTS-Local v1.5（通过 MOSS-Audio-Tokenizer-v2 解码的 GPT-J 本地转换器）提供服务。它可产生 48 kHz 立体声，并带有可选的参考音频语音克隆。 GGUF 位于 [mudler/MOSS-TTS-Local-Transformer-v1.5-GGUF](https://huggingface.co/mudler/MOSS-TTS-Local-Transformer-v1.5-GGUF)。图像涵盖 CPU、CUDA 12/13、Intel SYCL f16/f32、Vulkan、ROCm、NVIDIA L4T 和 Darwin Metal。

> 🔗 PR：#11115、#10860、#10877

### 🌳 具有盆景后端的亚 2 位模型

[盆景模型](https://huggingface.co/prism-ml) 是 Qwen3 8B 密集和 Qwen3.6-27B 混合注意力的 1 位 (Q1_0) 和三元/1.58-bit (Q2_0) 量化。它们的定量格式只能由 [PrismML fork of llama.cpp](https://github.com/PrismML-Eng/llama.cpp) 解码，因为 Stock llama.cpp 没有 Q1_0/Q2_0 内核，因此它们需要一个与 `ik-llama-cpp` 和 `turboquant` 形状相同的专用 fork 后端。

后端通过一个仅交换 `LLAMA_REPO` 和 `LLAMA_VERSION` 的薄包装器 Makefile 重复使用 `backend/cpp/llama-cpp/grpc-server.cpp` 来对抗前叉的 `libllama`，因此这些模型通过与库存 `llama-cpp` 相同的 OpenAI 兼容 API 提供服务。重用的服务器使用零偏差补丁针对分叉进行编译。

附带八个画廊条目：
|家庭|变体 |笔记|
|---|---|---|
| `bonsai-8b-1bit` | Q1_0 | Qwen3-8B，〜1.15国标|
| `ternary-bonsai-8b` | Q2_0、`-q2-g64`、`-pq2` | Qwen3-8B，〜2.18国标|
| `bonsai-27b-1bit` | Q1_0 | Qwen3.6-27B 混合注意力、视觉、~3.9 GB |
| `ternary-bonsai-27b` | Q2_0、`-pq2`、`-q2-g64` | Qwen3.6-27B 混合注意力、视觉、~7.2 GB |

如果 Q1_0 和 Q2_0 登陆主线 llama.cpp，则该后端可以退出，以支持库存 `llama-cpp` 上的例行 `LLAMA_VERSION` 碰撞。

> 🔗 PR：#10834、#10866

### 🖧 分布式模式可靠性

调查显示在主页上已加载但在集群中没有节点上出现的模型时发现了四个单独的错误，均已在此处修复。

收割者正在删除活动且正在工作的后端的行。 `probeLoadedModels` 在一次失败的 1 秒运行状况检查后收获了 `node_models` 行，并且繁忙的后端无法应答：单线程 Python 后端在请求内阻塞几分钟。

- 新的 `models.running` 主题直接询问工作人员，因为它持有进程句柄并且不会被后端阻止。协调器在进行任何端口探测之前将其进程密钥与注册表进行比较。
- 不应答的工作进程将被跳过，而不是假定为空，因此 NATS blip 无法删除节点的行。
- 端口探测器现在将 `DeadlineExceeded`（忙）与 `Unavailable`（消失）分开，并且在连续三次未命中后，只有后者才计数。

每个路由模型还在前端的 `ModelLoader` 中留下了一个进程内存根，并且删除路径仅删除数据库行，因此存根比副本的寿命更长，并且模型被报告为永久加载。副本删除的钩子变成了一个列表，一旦集群范围内没有健康的副本，新的本地存根失效器就会删除存根。

除此之外：`in_flight` 计数器可能会泄漏高电平并固定副本的 VRAM 以防止驱逐；模型加载截止日期现在根据检查点大小和进度而不是挂钟来缩放；分阶段验证算作进展而不是停滞；后端发现不再将工作人员安装的后端或仅 GPU 的后端隐藏在控制器的文件系统和功能后面；调度程序不会将模型放置在无法存储模型的节点上；开放响应在副本之间可见且可取消。

工作端，一个后端进程，其目录被重新安装替换，永远不会被重用，gRPC 端口分配器受到限制，并停止泄漏死后端的端口，删除的后端被收获，并且工作线程拥有一个真正的健康端点，具有模式感知的 `HEALTHCHECK`。

> 🔗 PR：#11142、#11121、#11030、#11029、#11026、#11019、#11000、#10999、#10990、#10970、#10968、#10967、#10966、#10956、#10948、 #10947, #10838, #11054, #10551

### 🧰 值得了解的小功能

- **Valkey 搜索向量存储** (#11196)：新的 `valkey-store` 后端将 Valkey 添加为向量存储选项以及现有选项。
- **systemd 套接字激活** (#11169)：`local-ai` 使用通过 Linux 上的 systemd 套接字激活协议继承的 TCP 侦听器，因此它可以按需启动。当不存在激活侦听器、拒绝不明确的多个侦听器以及针对实际继承地址运行公共绑定身份验证安全检查时，普通 `--address` / `LOCALAI_ADDRESS` 绑定不会更改。与 Podman 描述符传递要求一起记录。
- **持久跟踪历史记录** (#11203)：API 和后端跟踪历史记录现在保留在配置的数据路径下，并在重新启动后继续存在，作为 `traces/api` 和 `traces/backend` 下有界的每条记录 JSON 文件。无数据库依赖性，保留现有的 `tracing_max_items` 边界，提前恢复 ID 以避免冲突，跳过损坏的记录而不是阻止启动。
- **编辑已保存的聊天消息** (#11189)：对已保存的用户提示和助理响应进行内联编辑/保存/取消，通过本地聊天历史记录进行持久化，无需推理请求，保留结构化内容块和附件元数据。
- **独立的 Intel SYCL 后端** (#10991)：Intel llama.cpp 后端现在可以在任何主机上运行，​​而不需要匹配的 oneAPI 运行时。
- `stablediffusion-ggml` 的 **可配置 VAE 平铺** (#11216)，以及通过分类器/VAD 路径对低功耗设备进行语音控制** (#10804)。
- **人为提示缓存断点** (#11158)：云代理转换模式下的可选缓存断点。
- **`/v1/detokenize`** (#9620) 和 **确定性、类型过滤的后端自动检测** (#10286)，因此后端选择根据探测顺序而停止。
- **MLX TTS 路由** (#11267)：MLX TTS 模型现在导入到 `mlx-audio` 而不是通用文本后端。

### 🛡️ 内联微调奖励代码现已可选择加入

`POST /api/fine-tuning/jobs` 接受 `reward_functions[].code`，这是针对手动内置允许列表执行的内联 Python 主体。该允许列表不是安全边界：标准 CPython 内省到达真正的 `os` 模块并在主机上产生任意代码执行。执行在作业启动时的冒烟测试期间同步发生，默认情况下微调端点未经身份验证。

现在，除非操作员在后端明确选择使用 `LOCALAI_TRL_ALLOW_INLINE_REWARD=true`，否则内联奖励代码将被拒绝，而不是尝试强化允许列表。内置奖励功能不受影响，无需配置即可继续工作。该文档不再将允许列表描述为沙箱，并明确指出内联代码是任意执行的。

在同一周期中还有两个进一步的强化修复：

- **逃逸提取根目录的 Tar 硬链接被拒绝** (#11266)。 `ExtractArchive` 预先扫描成员并拒绝符号链接，但 tar 硬链接条目携带常规文件模式并通过了该检查，而 `Header.Linkname` 从未经过验证，因此存档可以创建指向目标目录外部路径的链接。 Linkname 现在获得与成员名称相同的路径检查；根目录内的硬链接解析仍然提取，因此普通档案不受影响。
- **JSON 模式语法中的 Cyclic `$ref` 被拒绝** (#11041)，而不是递归到堆栈溢出崩溃。

此版本还获得了 CVE-2026-54290 的荣誉 4.12.25。

> 🔗 PR：#11068、#11266、#11041、#11023

### 🔍 跟踪获得请求身份

API Traces 面板记录了每个请求的发出者，但从未显示出来，也从未捕获调用者的网络身份。该表现在有一个可排序的用户列，展开的行包含来自 echo 的 `RealIP()` 的用户、Client IP 和用户代理（纪念 trusted 代理后面的 `X-Forwarded-For` / `X-Real-IP`）。字段仅在存在时呈现，因此较旧的缓冲跟踪和未经身份验证的本地请求会完全降级。时间列现在也显示日期。

> 🔗 PR：#10907、#10905

---
## 🐛 错误修复（回顾）

- `fix(distributed)`：收割者收割实时后端、幽灵模型存根、`in_flight` 泄漏、sidecar 分段失控 - #11142
- `fix(distributed)`：使用检查点大小缩放远程模型加载期限 - #11030
- `fix(distributed)`：使冷负载保持秤有进度，而不是挂钟 - #11019
- `fix(distributed)`：将暂存验证视为进度，而不是停滞 - #11026
- `fix(distributed)`：拒绝后端和其余模式的错误模型请求 - #10970、#10990
- `fix(distributed)`：后端发现隐藏了工作人员安装的后端和仅 GPU 的后端 - #10967、#10947
- `fix(distributed)`：可配置的远程模型加载超时，并在超时时获取负载 - #10948
- `fix(distributed)`：使每个节点后端升级实际上升级 - #10838
- `fix(nodes)`：永远不要将模型调度到无法存储它的节点上 - #11054
- `fix(openresponses)`：使响应在副本之间可见且可取消 - #11000
- `fix(worker)`：永远不要重用其目录被重新安装替换的后端进程 - #11029
- `fix(worker)`：绑定 gRPC 端口分配器并停止泄漏死后端端口 - #10968
- `fix(worker)`：收获已删除的后端并停止工作人员上的模型 - #10956
- `fix(worker)`：为工作人员提供真正的健康端点和模式感知的健康检查 - #10999
- `fix(downloader)`：在发出恢复请求之前对部分文件进行哈希处理 - #11099
- `fix(downloader)`：绑定等待响应标头，以便楔入源无法挂起安装 - #11053
- `fix(downloader)`：区分读取和写入失败并重试瞬时失败 - #10985
- `fix(modelartifacts)`：恢复每个文件中断的物化，而不是从头开始 - #11071
- `fix(modelartifacts)`：将每个作家的工件放在自己的部分树中 - #10995
- `fix(modelartifacts)`：将 CIFS EACCES 视为锁争用，而不是失败 - #10986
- `fix(model-artifacts)`：保留伴随工件，以便远程工作人员获得 `base_model` 选项 - #11075
- `fix(model-artifacts)`：从文件而不是目录加载单文件 HF 快照 - #10909
- `fix(model-artifacts)`：后端通过门推断工件物化 - #10910
- `fix(model-artifacts)`：在控制器上具体化 longcat-video，并支持配套存储库 - #10949
- `fix(gallery)`：合并拥抱面部神器进度 - #11117
- `fix(gallery)`：在验证期间保持多文件 HF 安装进度成比例 - #10908
- `fix(galleryop)`：使承认的操作可查询并在失败的操作中幸存 - #11044
- `fix(gpu-libs)`：仅在使用时捆绑 cuDNN，并在使用时完成 - #10946
- `fix(gpu)`：当不存在 pci.ids 数据库时通过 sysfs 检测 GPU - #10966
- `fix(watchdog)`：强制杀死卡住的繁忙后端而不是死锁加载程序 - #10578
- `fix(watchdog)`：用 `watchdogMutex` 保护 `StopWatchdog` 以防止双重关闭 - #10859
- `fix(config)`：仅在 llama.cpp 路径上注入 llama.cpp 服务选项 - #10822
- `fix(runtime-settings)`：在启动时应用持久线程/context_size/f16 - #10853
- `fix(model)`：使后端关闭模型范围 - #10865
- `fix(model)`：仅在实际发生负载时才在 INFO 处宣布负载 - #11017
- `fix(completions)`：拒绝流中的空 `PromptStrings` 以避免索引超出范围恐慌 - #11028
- `fix(tts)`：将 OpenAI `speed` 字段转发到后端 - #11120
- `fix(realtime)`：接受 `output_modalities` 的旧 `modalities` 别名 - #11104
- `fix(vision)`：探测固定 llama.cpp 后端变体的媒体标记 - #10955
- `fix(audio-transform)`：序列化 WebSocket 写入以避免并发写入恐慌 - #10857
- `fix(qwen-asr)`：将 ISO 语言代码映射到 Qwen3-ASR 期望的名称 - #10959
- `fix(ollama)`：限制 `num_ctx`，因此在转换为 int32 时不能换行负数 - #11032
- `fix(ollama)`：通过嵌入式 `LLMConfig` 设置 `ContextSize`，以便构建包 - #11049
- `fix(webui)`：使用相对资源库，以便字体和惰性块尊重 `X-Forwarded-Prefix` - #10904
- `fix(agent-ui)`：在代理聊天中重置生成边界处的流文本 - #10664
- `fix(mcp)`：绑定 MCP 会话连接，因此无法访问的服务器无法挂起小部件 - #10884
- `fix(http)`：使 `/readyz` 反映启动准备情况 - #10989
- `fix(upgrade-check)`：不要按控制器功能过滤升级候选者 - #11024
- `fix(cloud-proxy)`：发布后端图库条目 - #10858
- `fix(backend)`：不要在无效的 `cutstrings`/`extract_regex` 上使整个过程崩溃 - #10855
- `fix(backends)`：从 protobuf 运行时派生协议生成器 - #11057
- `fix(backend/python)`：不要等待 `AsyncModelIdentityInterceptor` 中的同步服务程序行为 - #10980
- `fix(sglang)`：实现状态 RPC 以解锁后端监视器轮询 - #10867
- `fix(vllm)`：生成 protobuf 6 兼容存根 - #10944
- `fix(vibevoice)`：从 PyPI 安装扩散器而不是 git main - #10972
- `fix(kokoro)`：固定兼容的 Intel XPU 运行时 - #10823
- `fix(ace-step)`：在 `SoundGeneration` 中删除不存在的 `Get*` 原型访问器 - #11072
- `fix(trl)`：默认禁用内联 GRPO 奖励代码 (RCE) - #11068
- `fix(turboquant)`：取代陈旧的依赖项 - #11064
- `fix(turboquant,bonsai)`：不要将供应商的 llama.cpp 补丁应用于分叉树 - #10866
- `fix(llama-cpp)`：在 GPU 构建中保留 CPU 变体 - #11255，对于turboquant 也是如此 - #11276
- `fix(llama-cpp)`：在选项直通期间保留 GPU 层 - #11193
- `fix(utils)`：拒绝逃逸提取根的 tar 硬链接 - #11266
- `fix(grammars)`：拒绝 JSON 架构语法中的 cyclic `$ref` 以防止堆栈溢出崩溃 - #11041
- `fix(grammars)`：在 llama31 语法装置中恢复反斜杠 escaping - #11242
- `fix(model)`：确定性、类型过滤后端自动检测 - #10286
- `fix(oci)`：在没有符号链接的文件系统上安装后端 - #11166
- `fix(oci)`：识别签名验证请求 - #11244
- `fix(realtime)`：在 `response.created` 和 `response.done` 上回显 `response.metadata` - #11198
- `fix(worker)`：报告 RAM 和 GPU 内存 - #11167
- `fix(vllm)`：在引擎初始化之前应用 `Options[]` 引擎标志 - #11147
- `fix(mlx-vlm)`：在 Metal 上安装 torch 依赖项 - #11164
- `fix(kokoro)`：添加 CPU 后端后备 - #11161
- `fix(chatterbox)`：固定 cublas12 火炬/变压器和设置工具，以便后端加载 - #11074
- `fix(gallery)`：正确的 Nanbeige 4.2 文物 - #11269
- 视频：WAN 2.1 GGML 条目从未设置 `known_usecases`，因此它们解析为图像而不是视频，而 `/video` 拒绝了它们 - #11214

### 🖧P2P专区

- `fix(p2p)`：序列化对 `p2pCtx`/`p2pCancel` 的访问 - #10861

---

## 👒 依赖关系

本周期有 121 个依赖项更新，大部分是夜间引擎碰撞：

|发动机|颠簸|
|---|---|
| CrispStrobe/CrispASR | 17 | 17
| ikawrakow/ik_llama.cpp | 12 | 12
| leejet/stable-diffusion.cpp | 10 | 10
| ServeurpersoCom/qwentts.cpp | 8 |
| ggml-org/llama.cpp | 7 |
| |ServeurpersoCom/omnivoice.cpp | 6 |
| PrismML-Eng/llama.cpp | 5 |
| mudler/parakeet.cpp | 4 |
| ggml-org/whisper.cpp | 4 |
|防雷兹/ds4 | 3 |
| 0xShug0/音频.cpp | 2 |
| magpie-tts.cpp、locate-anything.cpp、深度-anything.cpp、trellis2cpp、rf-detr.cpp、ced.cpp、llama-cpp-turboquant |各 1 个 |

加上 Python、JavaScript 和 GitHub 操作的 20 个依赖机器人更新，以及用于并发 `Run` 修复的 `go-processmanager` 提升。

注意：一个 `ggml-org/llama.cpp` 碰撞 (`d2a8182`) 在周期内被恢复，并且不包括在这些注释中。

---

## 📖 文档

该文档接受了以入职为中心的大修（#10895），由映射的每页审核而不是页面日期驱动，每个事实声明都根据代码、后端、图库和 CLI 进行验证：

- **准确性**：CPU 映像标签更正为 `localai/localai:latest`（没有 `latest-cpu`）、统一注册表、从示例中删除失效的 `llama-stable` 后端、更正 `mitm-proxy` 标志文档、删除不存在的 `/sound` 端点、语音活动检测示例变得可运行，以及刷新 CLI 参考`agent`、`mcp-server`、`agent-worker` 和 `p2p-worker`。
- **重复数据删除**：重复和陈旧的页面折叠到规范的主页中，所有入站链接都重新指向，并通过别名保留旧的 URL。
- **入门**：一个具体模型 (`qwen3-4b`) 现在可完成安装、Web UI 聊天和 API 卷曲，以及新的 **构建您的第一个代理** 演练，明确指出嵌入了 LocalAGI。
- **错误**：新的**运行时错误和故障排除**参考键入用户看到的文字错误字符串，加上从附带的操作注册表中获取的新**代理操作目录**。
- **结构**：安装合并在一个线性安装到首次运行主干的入门下，一个面向操作员的页面的新**操作**部分以及按旅程排序的导航。
- **流程**：PR 模板中的文档复选框和代理指令中的文档与代码规则，因此面向用户的代码更改会在同一更改中更新文档。

另外：`grpc.attempts` 计时和调优指南 (#10868)、Opus 后端实时安装说明的修复 (#11018)、反向代理和长推理超时指南 (#11195、#11065)、持久容器存储澄清 (#11190) 以及 ROCm 7.x / RDNA 3.5 (Strix Halo、 gfx1151) 添加到 GPU 加速指南 (#9229)。

### 🌐 一个新的 localai.io

该站点一分为二：项目站点位于根目录，文档移至 `/docs/` 下。 Hugo 文档网站一直是 localai.io，没有任何地方可以解释 LocalAI 是什么或展示团队构建的内容。

每个之前发布的 URL 都可以继续使用。 GitHub 页面没有服务器端重写，因此生成器会遍历构建的文档输出，并在每个旧根路径处留下元刷新、规范链接和 `noindex`：**214 重定向存根**，覆盖裸 `.html` 文件以及目录索引，并且永远不会覆盖根站点拥有的路径。
新站点添加了一个完全由 YAML 数据文件驱动的 `/engines/` 页面（因此添加引擎是一次编辑，而不是在两个地方手写 HTML）、一个 `/blog/`、一个真正的 POSIX `install.sh` 和一个连接到实际 `/readyz` 和 `/healthz` 端点的 Kubernetes 清单。生态系统范围列出了工程师做出贡献的公司、集成 LocalAI 的项目以及 LocalAI 的相关文章，每个都由不同的、规定的证据标准支持，`ADOPTERS.md` 作为任何想要列出的人的自助服务机制。

> 🔗 PR：#11243、#11248

### 🧹 CI 成本和正确性

构建管道上的持续传递，其中大部分对用户不可见，但负责改变土地的速度：完整的后端矩阵现在仅在破坏 `backend.proto` 编辑时重建 (#11192)，图像和 Go PR 工作流程会跳过他们看不到的内容 (#11218、#11223、#11224)、本机引擎构建在注册表缓存可以实际恢复的层中 (#11221)，以及堆叠运行的三个工作流程每次 PR 推送都会进行重复数据删除 (#11058)。 Go 后端现在根据链接的 `pkg/` 更改和矩阵条目编辑进行重建（#10988、#10975）。

---

## 🙌 新贡献者

本周期有 11 人完成了他们的第一个 LocalAI 贡献：

- @ankit-aglawe 在 #10930
- @anupamme #11023
- @futurehua #10879
- @ghshhf #10323
- @jimmykarily 在 #10991
- @nandanadileep 在 #10578
- @owezzy #11195
- @ResearchForumOnline #11138
- #11068 中的 @wuisabel-gif
- @Zelys-DFKH #11266
- @zjuzhongwen #10960

谢谢大家，也感谢本周期提出问题、测试构建和报告回归的所有人。

---

**完整 Changelog**：https://github.com/mudler/LocalAI/compare/v4.7.1...v4.8.0

---

> 📦 仓库：[mudler/LocalAI](https://github.com/mudler/LocalAI) · 🏷️ 版本：`v4.8.0` · 📅 发布：2026-08-05 · [查看英文原版 Release](https://github.com/mudler/LocalAI/releases/tag/v4.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
