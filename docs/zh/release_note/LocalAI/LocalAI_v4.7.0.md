---
title: "LocalAI v4.7.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.7.0"
version: "v4.7.0"
published: "2026-07-14"
type: "minor"
lang: "zh"
---

# LocalAI v4.7.0

# 🎉 LocalAI 4.7.0 发布！ 🚀

<h1对齐=“中心”>
  <br>
  <img高度=“300”src=“https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png”>
  <br>
  <br>
</h1>

LocalAI 4.7.0 出来了！

此版本扩展了 LocalAI 可以生成的内容以及驱动它的方式：UI 管理的语音克隆库、本地视频和音频驱动的头像生成，以及与工具调用一起进行的交错推理。它还引入了新的音频引擎（一次性日记转录、F5-TTS、真正的流式 TTS）以及跨身份验证、转录和模型库的一批可靠性修复。

**亮点：**

- 🎙️ **托管语音克隆** - 在 UI 中记录或上传同意的引用，将其保存为可重复使用的配置文件，并从任何具有稳定 `localai://voice-profiles/<id>` URI 的具有克隆功能的 TTS 后端引用它。不再需要手动编辑 YAML 或将音频复制到模型文件夹中。
- 🎬 **本地视频和头像** - 新的 `longcat-video` 后端带来了文本到视频、图像到视频和音频驱动的说话头像生成功能，通过音频和参考图像控件连接到 Studio UI。
- 🧠 **与工具调用的交错思维** - 助手轮现在可以将 `reasoning` 和 `tool_calls` 一起携带，并在工具结果循环中保持推理，并具有 `reasoning_content` 入站别名和人类 `thinking` 块支持。
- 🗣️ **新音频引擎** - 一次性日记转录 (`moss-transcribe-cpp`)、CrispASR 中的 F5-TTS 语音克隆以及 vivivoice-cpp 中的真正流式 TTS（首次音频时间为 2.38 秒 vs CPU 上的 39.96 秒）。
- 🎚️ **自动完整上下文** - `context_size: -1` 在其完整训练的上下文窗口中运行模型，从每个模型的 GGUF 元数据中读取，并带有 VRAM 适合警告。
- 🖥️ **更清晰的控制** - 选择 llama.cpp 卸载到 (`devices:`) 的 GPU，新的模型加载冷却时间可阻止确定性失败的模型在每次轮询时重新生成其后端并泄漏 VRAM。

加上 DFlash 推测解码库模型、针对 EC/PS/EdDSA 签名令牌的 OIDC 修复、到达后端的转录语言/翻译设置以及常用的依赖项更新集。

<p对齐=“中心”>
  <em><img width="2880" height="1800" alt="ui-home" src="https://github.com/user-attachments/assets/7a114654-5729-45b9-8437-22af7ab76e4f" /></em>


</p>

---

## 📌 太长；博士

|面积 |总结|
|------|---------|
| 🎙️ **语音库** |管理员管理的语音克隆配置文件：在 UI 中录制/上传同意的参考音频，通过 `localai://voice-profiles/<id>` 进行预览和参考。新的 `GET/POST/DELETE /api/voice-profiles`、MCP 工具 (`list/create/delete_voice_profile`) 和类型化的 `tts.voice_cloning` 配置。克隆被声明为跨 12 个以上 TTS 后端的功能（自我发现，无硬编码后端名称）。 |
| 🎬 **LongCat 视频和头像** |新的 `longcat-video` Python 后端：文本转视频、图像转视频和 LongCat-Video-Avatar 1.5 音频驱动头像。画廊条目 `longcat-video` 和 `longcat-video-avatar-1.5`；新的 `known_input_modalities`/`known_output_modalities` 配置字段； `/video` 端点扩展了分级音频。 CUDA 12/13 x86_64 + CUDA 13 ARM64 图像。 |
| 🧠 **交错思维** |辅助轮将 `reasoning` + `tool_calls` 一起承载，并在整个工具循环中保留推理。接受 `reasoning_content` 作为入站别名；人择消息本地路径往返 `thinking` 块（在 `thinking: {type: "enabled"}` 上门控）。 |
| 🗣️ **moss-transcribe-cpp** |基于 C++/ggml MOSS-Transcribe-Diarize 端口的新 Go 后端：一次性联合多说话者转录 + 二值化 + 时间戳。图库型号 `moss-transcribe-cpp-0.9b`。离线； 1.6-2.2x 在 CPU 上比参考更快，在 CUDA 上位精确。 |
| ⚡ **vibevoice 流式 TTS** |通过 `vv_capi_tts_stream` 实现真正的增量流：TTFA 2.38 秒与 `VibeVoice-Realtime-0.5B` CPU 上的 39.96 秒批处理（~17 倍）。 |
| 🎨 **F5-TTS** | F5-TTS 链接到 CrispASR + `f5-tts-crispasr` 画廊模型（24kHz，通过 `voice:`/`voice_text:` 选项进行语音克隆）。 |
| 🎚️ **context_size：-1** |负 `context_size`（或 `LOCALAI_CONTEXT_SIZE=-1`）从 GGUF 元数据解析为模型的 `n_ctx_train`，并带有仅 GPU VRAM 适合警告和安全钳位，因此后端不会看到负窗口。 |
| 🖥️ **llama.cpp 设备选择** | `options: [devices:CUDA1,CUDA2]` 将卸载限制为指定 GPU（来自 `--list-devices`）。 |
| 🛡️ **模型加载冷却时间** |失败的加载进入冷却时间（默认 `10s`，几何增长上限为 5m），因此轮询 clients 会得到 `503 + Retry-After`，而不是重生崩溃的后端和泄漏 GPU 内存。 |
| 🧠 **推测解码模型** |四个 Qwen DFlash 画廊条目（4B / 9B / 27B / 35B-A3B），每个捆绑目标 + 起草者，`spec_type:draft-dflash`。 |

---

## 🚀 新功能和主要增强功能

### 🎙️ 托管语音克隆配置文件（语音库）

<p对齐=“中心”>
  <em><img width="2880" height="1800" alt="ui-voice-library" src="https://github.com/user-attachments/assets/ea99bb2d-42b5-42b8-8c33-761090290e3f" /></em>
  <br><em>记录或上传同意的参考，将其保存为可重复使用的配置文件，并从任何支持克隆的 TTS 后端引用它。</em>
</p>

语音克隆成为一流的、UI 驱动的工作流程。在 React UI 中记录或上传同意的参考音频，将其标准化为 WAV，预览它，并将其保存为命名配置文件。使用稳定的 `localai://voice-profiles/<id>` URI 从 TTS UI 或 `/v1/audio/speech` 引用配置文件，无需 YAML 编辑，也无需将音频复制到模型目录中。

- 新的 REST 表面：`GET /api/voice-profiles`、`GET /api/voice-profiles/:id/audio`、`POST /api/voice-profiles`（管理员）、`DELETE /api/voice-profiles/:id`（管理员），出现在 Swagger、`/api/instructions` 和身份验证功能注册表中。 MCP 管理工具 `list_voice_profiles`、`create_voice_profile`、`delete_voice_profile`。
- 新类型的配置 `tts.voice_cloning`（布尔）选择自定义模型名称或不兼容语音库； `false` 还拒绝使用 HTTP 400 保存的配置文件引用。请求优先级为 `voice` -> `tts.voice` -> `tts.audio_path`；现有选项仍然有效，没有重大变化。
- 兼容性是服务器从后端功能发现的（前端硬编码没有后端名称），并提供在不存在时安装的图库模型。在 `vllm-omni`、`vibevoice-cpp`、`coqui`、`pocket-tts`、`qwen-tts`、`qwen3-tts-cpp`、`faster-qwen3-tts`、`fish-speech`、`neutts`、`chatterbox`、`voxcpm`、`omnivoice-cpp` 和模型相关的 `crispasr` 的功能注册表中声明克隆。
- 跨后端合约：参考 WAV + 通过 `params.ref_text` 的精确转录。在 qwen3-tts-cpp 上进行了 E2E 验证（4.47s 参考产生了非静音 3.44s 24kHz WAV）。

> 🔗 PR：#10799

### 🎬 LongCat 视频和头像生成

新的 `longcat-video` Python 后端为 LocalAI 带来了本地视频生成功能：文本到视频、图像到视频以及用于音频驱动的会说话的化身的 LongCat-Video-Avatar 1.5。它通过音频和参考图像控件连接到 React Studio UI。

- 图库条目`longcat-video`（文本+图像输入，视频输出）和`longcat-video-avatar-1.5`（文本+图像+音频输入，视频输出）。后端映像：CUDA 12 和 CUDA 13 x86_64，加上 CUDA 13 ARM64（包括 DGX Spark / NVIDIA ARM64 指南）。
- 引入声明性功能元数据：新的 `known_input_modalities` / `known_output_modalities` 配置字段，以便通用代码发现检查点接受的内容，而不是在后端或检查点名称上分支。 HF 导入器发出匹配的自描述配方元数据。
- `/video` 端点通过分布式音频分级（输入限制为 128 MiB）获得分级音频和视频生成参数。 Avatar 模式支持多段生成、BF16 或可选的 INT8 量化以及蒸馏设置，记录在新的 `features/longcat-video.md` 页面中。

> 🔗 PR：#10792

### 🧠 与工具调用的交错思维

辅助转弯现在可以将 `reasoning` 和 `tool_calls` 一起承载，并且推理可以在跨转弯的工具结果循环中幸存下来。这是统一的、经过测试和记录的行为，而不是每个后端的事故。

- OpenAI 聊天消息接受 `reasoning_content` 作为规范 `reasoning` 字段的入站别名（vLLM/DeepSeek/cogito 风格的 clients 发出它）；当两者都存在时，发射不变，并且规范场获胜。
- Anthropic Messages 本地路径往返 `thinking` 块：入站 `thinking` 块解析为消息推理，并且在非流式和流式响应上的 `tool_use` 之前发出 `thinking` 块，在请求参数 `thinking: {type: "enabled"}` 上门控。云代理直通路径未受影响。
- 已验证现场：`lfm2.5-8b-a1b` 和 `gemma-4-e2b` 在单回合中返回 `reasoning` 加上结构化的 `tool_calls`。新的 `features/interleaved-thinking.md` 文档与模型配置、文本生成和功能指南进行交叉链接。

> 🔗 PR：#10744

### 🗣️ 新音频引擎：日记式转录、F5-TTS 和流式 TTS

三项新增内容拓宽了音频范围：

- **moss-transcribe-cpp** (#10756)：一个新的 Go 后端，可打开 C++/ggml MOSS-Transcribe-Diarize 端口，在一次离线传递中进行联合多说话人转录、二值化和时间戳。图库型号 `moss-transcribe-cpp-0.9b`（默认 `q5_k` GGUF）。 ggml 端口对于参考 PyTorch 是字节精确的，1.6-2.2x 在 CPU 上速度更快，在 CUDA 上是位精确的（在 Blackwell / Jetson Thor 上验证）。跨完整 Linux 矩阵以及 Darwin/Metal 进行构建。
- **CrispASR 中的 F5-TTS** (#10753)：将 F5-TTS 静态运行时链接到 CrispASR 构建（SWivid、MIT；带有内置 Vocos 声码器的 22 层 DiT 流匹配模型）并提供 `f5-tts-crispasr` 图库模型。产生 24kHz 单声道音频并自动检测为 `f5-tts`（无 `backend:` 选择器）。通过`options: [voice:/path/ref.wav, voice_text:Transcript...]`进行语音克隆；注意 F5-TTS 运行 32 步 ODE 求解器，因此 CPU 综合计算量很大。
- **vibevoice-cpp 真正的流** (#10764)：通过新的 `vv_capi_tts_stream` 回调 ABI，用真正的增量流替换整个 clip-then-chunk 合成。在 `VibeVoice-Realtime-0.5B` 的仅 CPU 盒子上，首次播放音频的时间从 39.96 秒（批处理）下降到 2.38 秒（流媒体），大约缩短了 17 倍。范围是realtime-0.5B模型；非流路径不变。

> 🔗 PR：#10756、#10753、#10764

### 🎚️ 使用 `context_size: -1` 自动完整上下文

`context_size: -1` 哨兵（任何负值）现在使模型在其完整训练的上下文中运行，在加载时从 GGUF `n_ctx_train` 元数据解析每个模型。即使图库 YAML 已经固定了一个值，您也可以将模型选择为其真正的最大窗口，而无需对数字进行硬编码。全局等效项 `LOCALAI_CONTEXT_SIZE=-1` / ZZPH100​​ZZ 使每个模型解析为自己训练的最大值，而明确的每个模型值仍然获胜。
三层防御层确保其安全：如果元数据缺乏可用最大值，GGUF 分辨率会降级为默认值并发出警告；当窗口可能不适合时，仅 GPU 的 `warnIfContextExceedsVRAM` 帮助程序会记录（从不阻塞）；并且后端选项层将任何剩余负数限制为默认值，因此后端不会收到负数 `n_ctx`。以前的唯一路径（未设置 `context_size`）保持不变。

> 🔗 PR：#10752

### 🖥️ GPU 设备选择和模型加载冷却

- **llama.cpp 设备选择** (#10724)：llama.cpp `options:` 数组中的新 `device` / `devices` 选项映射到上游 `--device`，因此您可以将卸载限制到特定 GPU（例如排除显示或调试 GPU）。示例：`options: [devices:CUDA1,CUDA2,CUDA3]`。设备名称来自 `llama-server --list-devices`。
- **模型加载失败冷却** (#10728)：加载失败后，在冷却窗口期间拒绝新的独立加载触发器，返回映射到 `503 + Retry-After` 的类型错误，而不是在每次轮询时重新生成后端。这可以阻止确定性失败的模型泄漏 GPU/CUDA 状态（记者看到泄漏的上下文 climb 到 ~58 GB），并且在 `LOCALAI_SINGLE_ACTIVE_BACKEND` 下，阻止从健康模型中窃取活动插槽。可通过 `--model-load-failure-cooldown` / `LOCALAI_MODEL_LOAD_FAILURE_COOLDOWN` 配置（默认 `10s`，`0` 禁用）；每次连续失败冷却时间加倍，上限为 5m，并在成功加载时重置。真正并发爆发的联合追随者仍然可以重试一次。

> 🔗 PR：#10724、#10728

---

## 🧠 模型

- **Qwen DFlash 推测解码模型** (#10791)：`llama-cpp` 后端的四个图库条目，每个条目捆绑一个完整的目标模型及其小型块扩散绘图器（绘图器不是独立的聊天模型）：`qwen3-4b-dflash`、`qwen3.5-9b-dflash`、`qwen3.6-27b-dflash`、`qwen3.6-35b-a3b-dflash`。每个条目的配置为 `flash_attention: on`、`draft_model:`、`use_jinja:true`、`spec_type:draft-dflash`、`spec_n_max:15`。需要具有上游 DFlash 支持的固定 llama.cpp；每个捆绑的起草者都经过验证 `general.architecture = dflash`（仅叉 `dflash-draft` GGUF 被故意排除，因为它们无法加载）。推荐使用 GPU。
- **推理默认值** (#10741)：为 `deepseek-v4` 添加建议的采样默认值（从 unsloth 自动生成），因此 LocalAI 自动为系列应用正确的生成参数。
- 加上通过画廊代理添加的新画廊模型（#10743，#10755）。

---

## 🐛 错误修复（回顾）

- `fix(auth)`：接受 EC/PS/EdDSA 签名的 OIDC ID 令牌，而不仅仅是 RS256（OIDC 登录在使用 EC 签名令牌的回调时为 500ing，例如 Authentik） - #10736
- `fix(transcription)`：尊重模型配置 `parameters.language`/`parameters.translate` 和 OpenAI `language` 表单字段，这些字段在分段上传时被默默忽略 - #10731
- `fix(backends)`：`opus` 和 `local-store` 现在拒绝外部模型加载，因此没有显式后端的 LLM 无法在后端探测期间静默绑定到音频编解码器或矢量存储 - #10769
- `fix(gallery)`：后端（重新）安装现在是一个干净的原子替换（阶段、验证、交换、回滚）而不是覆盖，因此先前版本中的陈旧文件不再影响新版本 - #10726
- `fix(vram)`：报告最大的单个 GGUF 量化，而不是对 HF 存储库中的每个量化求和，因此 9B 模型不再显示为 71 GB/“可能不适合” - #10707
- `fix(logs)`：默认情况下在单一模式下将后端 stdout/stderr 捕获到日志存储中，因此后端日志页面是开箱即用的 - #10742
- `fix(vllm)`：将 L4T arm64 后端固定到 `vllm==0.24.0` 以实现 GB10 / DGX Spark 稳定性（0.23 在冷负载和固定 GPU 内存上确定性崩溃） - #10725
- `fix(ds4)`：捆绑完整的传递运行时依赖闭包，以便从头开始的 DS4 映像不再在缺少的 gRPC 库上退出 127 - #10783
- `fix(diffusers,vllm-omni,tinygrad)`：将生成的图像显式保存为 PNG，修复成功推理后的 `unknown file extension: .tmp` 崩溃 - #10729
- `fix(react-ui)`：重新生成非最后一个答案时保留上传的文件内容（分叉并重新生成文件轮后附件被悄悄删除） - #10819
- `fix(ui)`：防止大型数据表破坏 Flexbox 布局并强制使用页面范围的水平滚动条 - #10754

---

## 👒 依赖关系

子模块和后端会颠簸这个周期：

- `ggml-org/llama.cpp` x7
- `CrispStrobe/CrispASR` x7
- `vllm-metal`（达尔文）x6
- `ServeurpersoCom/qwentts.cpp` x4
- `ServeurpersoCom/omnivoice.cpp` x4
- `leejet/stable-diffusion.cpp` x3
- `ikawrakow/ik_llama.cpp` x3
- `ggml-org/whisper.cpp` x2
- `mudler/moss-transcribe.cpp` x1
- `mudler/locate-anything.cpp` x1
- `vllm-project/vllm` 0.24.0 -> 0.25.0（Python 后端）和 cu130 轮到 `0.25.0`

加上 `grpcio` 1.81.1 -> 1.82.1、`charset-normalizer` >=3.4.9 和 GitHub 动作凹凸（`actions/cache` 4 -> 6、`actions/stale` 10.3.0 -> 10.4.0）。

---

## 📖 文档

- 刷新了 LocalAI 主页，将该项目构建为模块化多模式 AI 运行时：宽度通道（推理、听和说、创建、查看、行动）、小核加按需后端架构、LocalAI 团队构建的本机引擎，以及从笔记本电脑到团队服务器再到集群的扩展路径 - #10780
- 文档站点版本提升 - #10709

---

## 🙌 新贡献者

- @rvmz 在 #10724 中做出了第一个贡献
- @hogeheer499-commits 在 #10783 中做出了第一个贡献
- @ajuijas 在 #10819 中做出了第一个贡献

---

**完整 Changelog**：https://github.com/mudler/LocalAI/compare/v4.6.2...v4.7.0

---

> 📦 仓库：[mudler/LocalAI](https://github.com/mudler/LocalAI) · 🏷️ 版本：`v4.7.0` · 📅 发布：2026-07-14 · [查看英文原版 Release](https://github.com/mudler/LocalAI/releases/tag/v4.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
