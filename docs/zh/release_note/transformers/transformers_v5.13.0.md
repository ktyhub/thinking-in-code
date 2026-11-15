---
title: "transformers v5.13.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.13.0"
version: "v5.13.0"
published: "2026-07-03"
type: "minor"
lang: "zh"
---

# transformers v5.13.0

# 发布v5.13.0


## 添加新模型

### KimiK 2.5、2.6 和 2.7

<img width="1097" height="400" alt="image" src="https://github.com/user-attachments/assets/c24d2232-a9b4-413b-a2c8-58d013b6dfbd" />

此版本包括 2.5-2.7 使用的 Kimi 2.5 架构：

Kimi K2.5 是一种开源的原生多模式代理模型，可提高长期编码、编码驱动设计、主动自主执行和基于群体的任务编排方面的实用能力。该模型在[Kimi K2.5: Visual Agentic Intelligence](https://www.kimi.com/en/blog/kimi-k2-5)中提出，并在[Kimi K2.6: Advancing Open-Source Coding](Kimi K2.5: Visual Agentic Intelligence)中进一步改进。

Kimi K2.5 在复杂的端到端编码任务上实现了显着改进，跨编程语言（Rust、Go、Python）和跨越前端、DevOps 和性能优化的领域进行了稳健的泛化。该模型能够将简单的提示和视觉输入转换为可生产的界面和轻量级全栈工作流程，生成结构化布局、交互元素和丰富的动画，并具有精心设计的美学精度。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/kimi_k25)
* 添加新模型：Kimi2-6 (#45630) by @zucchini-nlp in [#45630](https://github.com/huggingface/transformers/pull/45630)

### MiMo-V2-闪存

<img width="6900" height="904" alt="image" src="https://github.com/user-attachments/assets/8bd8d5f0-0381-4f8c-8ada-0203e11ff494" />

**MiMo-V2-Flash** 是小米 MiMo 团队开发的混合专家 (MoE) 语言模型。该模型旨在在长上下文建模能力和推理效率之间建立新的平衡，旨在在复杂推理和代理任务中提供强大的性能。 MiMo-V2-Flash 在具有本机 32k 序列长度的 27T 令牌上进行训练，无缝支持扩展的 **256K 上下文窗口**，同时与标准全局注意力模型相比，显着减少了 KV 缓存存储。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/mimo_v2_flash)
* 添加@casinca 的小米 MiMo-V2 (#45144) [#45144](https://github.com/huggingface/transformers/pull/45144)

### Nemotron 3.5 ASR

<img width="1632" height="735" alt="image" src="https://github.com/user-attachments/assets/597bbb9c-b046-4e47-b9fd-f242e0a5b04d" />

Nemotron 3.5 ASR 是 NVIDIA 的 6 亿参数多语言语音识别模型，专为低延迟流和高吞吐量批处理设置中的高质量转录而构建，具有原生标点符号和 capitalization。对于流媒体，它提供可配置的块大小 - 80 毫秒、160 毫秒、560 毫秒和 1120 毫秒，让用户可以在延迟和准确性之间进行权衡，以适应他们的应用程序。其缓存感知的 FastConformer-RNNT 架构是此功能的核心：与重复重新处理重叠音频窗口的传统缓冲流不同，该模型仅处理每个新的传入块，同时重用先前块中的缓存编码器上下文。这消除了冗余计算，显着提高了效率，并在不牺牲准确性的情况下最大限度地减少了端到端延迟，使其非常适合实时转录工作负载。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron3_5_asr)
* 添加 Nemotron 3.5 ASR 流媒体 (#46565) by @eustlb in [#46565](https://github.com/huggingface/transformers/pull/46565)

### NemotronAsrStreaming
Nemotron ASR Streaming 是 NVIDIA 的 6 亿参数英语语音识别模型，专为低延迟流和高吞吐量批处理设置中的高质量转录而构建，具有原生标点符号和 capitalization。对于流媒体，它提供可配置的块大小 - 80 毫秒、160 毫秒、560 毫秒和 1120 毫秒，让用户可以在延迟和准确性之间进行权衡，以适应他们的应用程序。其缓存感知的 FastConformer-RNNT 架构是此功能的核心：与重复重新处理重叠音频窗口的传统缓冲流不同，该模型仅处理每个新的传入块，同时重用先前块中的缓存编码器上下文。这消除了冗余计算，显着提高了效率，并在不牺牲准确性的情况下最大限度地减少了端到端延迟，使其非常适合实时转录工作负载。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron_asr_streaming)
* 添加 Nemotron ASR Streaming (#46332) by @eustlb in [#46332](https://github.com/huggingface/transformers/pull/46332)

### Qwen3 ASR

<img width="3646" height="2036" alt="image" src="https://github.com/user-attachments/assets/41ed13e3-a0bf-463a-8473-bc6beb8ebd73" />

Qwen3 ASR 是阿里巴巴 Qwen 团队的自动语音识别模型，它将 Whisper 风格的音频编码器与 Qwen3 语言模型解码器相结合，用于语音到文本的转录。该模型支持自动语言检测和多语言转录。

还包括强制对准器模型。它可用于为所提供的文字记录及其音频添加时间戳。它使用相同的音频编码器模型和预测单词长度的分类头。该模型可与任何 ASR 模型的转录本一起使用（请参阅下面的 Parakeet CTC 示例）。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/qwen3_asr)
* Qwen3 ASR 和强制对准器 (#43838)，作者：@mbtariq82，位于 [#43838](https://github.com/huggingface/transformers/pull/43838)

###扎亚

<img width="1200" height="628" alt="image" src="https://github.com/user-attachments/assets/2935eba8-ab74-455c-9d44-f088636b2785" />

ZAYA1是Zyphra训练的760M活跃/8.4B总参数MoE语言模型。它结合了压缩
卷积注意力 (CCA)、非线性 ZAYA1 路由器和残差缩放。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/zaya)
* [新模型] 添加Zyphra/ZAYA1-8B (#45862) by @JJJYmmm in [#45862](https://github.com/huggingface/transformers/pull/45862)

### 视频棱镜

VideoPrism 模型是 Google DeepMind 在论文 [VideoPrism: A Foundational Visual Encoder for Video Understanding](https://huggingface.co/papers/2402.13217) 中提出的（[博客文章](https://research.google/blog/videoprism-a-foundational-visual-encoder-for-video-understanding/)）。

VideoPrism 是一种通用视频编码器，可使用单个冻结模型处理各种视频理解任务。该模型在包含 36M 高质量视频字幕对和 582M 视频 clips 以及带有噪声并行文本（例如 ASR 转录本）的大规模异构语料库上进行预训练。预训练方法通过语义视频嵌入的全局局部蒸馏和令牌洗牌方案改进了屏蔽自动编码，使模型能够主要关注视频模态，同时利用与视频相关的文本。 VideoPrism 在 33 个视频理解基准测试中的 31 个上实现了最先进的性能，涉及四个广泛的任务组，从网络视频问答到科学计算机视觉。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/videoprism)
* 在 [#39895](https://github.com/huggingface/transformers/pull/39895) 中添加 @MHRDYN7 的 Videoprism (#39895)

### 广播
[RADIO](https://huggingface.co/papers/2312.06709)（Reduce All Domains Into One）是 NVIDIA 的一系列视觉基础模型，通过多教师蒸馏（例如 CLIP、DINOv2、SAM）训练成单个 ViT 主干。它生成图像级 `summary` 嵌入和密集空间 `features`，并通过裁剪位置嵌入 (CPE) 补丁生成器支持可变输入分辨率。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/radio)
* 添加对 RADIO 模型的支持 (#46425) by @meatybobby in [#46425](https://github.com/huggingface/transformers/pull/46425)

### 最小每千次展示费用3

MiniCPM3 是 OpenBMB 的第三代 MiniCPM 密集语言模型。 4B 变体
([`openbmb/MiniCPM3-4B`](https://huggingface.co/openbmb/MiniCPM3-4B)) 优于许多 7B–9B 开放式
标准基准上的模型，同时保持足够轻量以供设备上使用。

MiniCPM3 结合了多种架构思想：

- 来自 DeepSeek-V2 的 **多头潜在注意力 (MLA)**，它压缩键/值缓存
  进入低等级潜在表示，同时仍然在一部分上使用旋转嵌入
  查询/关键头。
- 标准 SwiGLU MLP（无 MoE）。
- 控制信号流的三个标量缩放因子：
  - `scale_emb` — 缩放输入嵌入。
  - `scale_depth / sqrt(num_hidden_layers)` — 缩放剩余连接。
  - `hidden_size / dim_model_base` — 在语言模型头之前缩放隐藏状态。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/minicpm3)
* 添加 MiniCPM3 (#41116) by @bzantium in [#41116](https://github.com/huggingface/transformers/pull/41116)



## 重大变更

为了标准化层声明、掩码/缓存构造和混合注意力处理，已经进行了一系列广泛的建模更改，使许多模型可以干净地导出（ONNX、`torch.export`、ExecuTorch）和全图编译 - 依赖内部建模 API 的用户可能需要相应地更新其代码。
* 🚨 导出、编译和混合注意力标准化的建模更改（#46738），作者：@IlyasMoutawwakil

Gemma 3/4 模型中图像标记的注意力掩蔽已修复，以正确尊重局部层中的滑动窗口边界，这会改变模型行为并可能影响先前结果的可重复性。
* 🚨 [gemma 3/4] 修复跨越滑动窗口边界的双向注意掩蔽 (#46850) by @douglas-reid

专家并行 (EP) 路由器契约已在许多模型中得到纠正，并且 FP8 比例格式处理已得到修复，要求使用受影响模型的 EP 或 FP8 量化用户验证其配置并可能更新转换映射。
* 🚨 EP：修复许多型号的 EP 路由器合约 + 尊重 FP8 比例格式 (#46818) by @IlyasMoutawwakil

`Kernels` 集成已同步到最新版本，其中包括一个重大更改，即内核接口不再接受模型类型存储库 - 用户必须迁移到更新的内核存储库格式，如更新的测试中所示。
* :rotating_light: [`Kernels`] 同步到最新版本 (#46039) by @vasqu


## HfExporters：PyTorch / ONNX / ExecuTorch 的本机、统一导出

<img alt="缩略图" src="https://github.com/user-attachments/assets/3ba5751b-c99e-4945-b5a8-b2b29231f5df" />

一个原生的 Transformers 导出管道 — 一个基类 (`HfExporter`)、我们关心的运行时的三个子类、一个统一的 API：

|出口商|输出|运行时|
|---|---|---|
| `DynamoExporter` | `ExportedProgram` |任何 PyTorch 运行时、AOT 编译 |
| `OnnxExporter` | `ONNXProgram` |任何 ONNX 运行时（ORT、TensorRT、OpenVINO 等）|
| `ExecutorchExporter` | `ExecutorchProgramManager` |移动和边缘 (ExecuTorch) |
这三个呼叫形状相同。默认情况下是动态形状。生成式模型自动分为预填充 + 解码（+ VLM 的视觉/音频子编码器）。

```python
from transformers import AutoModelForMaskedLM, AutoTokenizer
from transformers.exporters import OnnxExporter, OnnxConfig

model_id = "hf-internal-testing/tiny-random-BertForMaskedLM"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForMaskedLM.from_pretrained(model_id).eval()
inputs = tokenizer(["Hello, my dog is cute"] * 2, return_tensors="pt")
onnx_program = OnnxExporter().export(model, inputs, config=OnnxConfig(dynamic=True))

new_input = tokenizer("Hello, my cat is so adorable!", return_tensors="pt")
torch.testing.assert_close(
    onnx_program.call_reference(**new_input)[0],   # numpy reference
    onnx_program(**new_input)[0],                  # onnxruntime
    rtol=1e-4, atol=1e-4,
)
```

将一条线路交换为另一条运行时间 — `DynamoExporter()` / `DynamoConfig` 或 `ExecutorchExporter()` / `ExecutorchConfig(backend=...)`。

对于生成模型，预填充/解码分割是自动捕获的：

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers.exporters import OnnxExporter, OnnxConfig

model_id = "hf-internal-testing/tiny-random-LlamaForCausalLM"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id).eval()
inputs = tokenizer(["Hello, my dog is cute"] * 2, return_tensors="pt")

artifacts = OnnxExporter().export_for_generation(model, inputs, config=OnnxConfig(dynamic=True))
# {"prefill": ONNXProgram, "decode": ONNXProgram}
# For VLMs: also vision_encoder, audio_encoder, multi_modal_projector, language_model, lm_head
```


## 内核

**内核：** 修复了使用 `head_dim > 256`（例如 Gemma4）的 GQA 模型的静默 SDPA 数学内核回退，该回退会导致 O(S²) 内存物化，并解决了 `use_kernels=True` 无法应用内核映射的回归。其他改进包括延迟加载默认内核映射以防止因不兼容的内核版本而导致导入失败、ROCm 路由到 AMD GPU 的 AITER Triton 内核、对 Qwen3.6 Gated DeltaNet 的 GB10/SM121 Hub 内核支持以及内核 API 的扩展文档。


* 当键/值 head_dim > 256 或与 [#46960] 中的@Butterfingrz 不同时，修复 GQA 的静默 SDPA 数学内核回退（#46960）
* [文档] AITER 内核 (#46871) by @stevhliu in [#46871]
* @michaelbenayoun 的内核 API (#46754) 文档 [#46754]
* 由 @Abdennacer-Badaoui 在 [#46810] 中更新 kernels-community/aiter-rope 版本 (#46810)
* 通过 @AzeezIsh 在 [#46423] 中为 Qwen3.6 Gated DeltaNet 添加 GB10/SM121 Hub-kernel 路径 (#46423)
* [`Kernels`] 在 [#46755] 中 @vasqu 在 `use_kernels=True` (#46755) 上触发正确的内核化
* 懒惰地构建默认内核映射，以将 `kernels` 与正常变压器使用分离（#46681），作者：@jiqing-feng，在 [#46681] 中
* 通过 @Abdennacer-Badaoui 在 [#46268] 中为 ROCm 添加一些 AITER 内核路由 (#46268)
* 修复：上游旋转内核中不存在位置 ID (#46619)，由 @NanoCode012 in [#46619]
* docs(zh): 在 [#46621] 中添加 @shoushinya123 的 kernels.md 中文翻译 (#46621)


## 一代

修复了多个生成错误，包括混合模型（Zamba2、Nemotron-H、Bamba、FalconH1、GraniteMoeHybrid）的 Mamba2 分块预填充和推测解码、Mamba 模型的波束搜索、没有 EOS 令牌的提示查找解码崩溃以及 LFM2 的错误状态模型处理。其他改进包括减少不必要的生成警告、修复连续批处理输出突变，以及在生成期间将输入张量保留在 CPU 上以避免在 Neuron/TPU 设备上进行回溯的新选项。


* 通过 @Sunt-ing 在 [#46741] 中修复 Zamba2、Nemotron-H、Bamba、FalconH1 和 GraniteMoeHybrid (#46741) 的 Mamba2 分块预填充/推测解码
* 删除一些不必要的生成警告 (#46955) by @Cyrilvallez in [#46955]
* 拒绝 LFM2 和 LFM2-MoE 的辅助生成（设置 _is_stateful）（#46937），由 @Sunt-ing 在 [#46937] 中
* 修复了曼巴模型的波束搜索 (#46819)，由@Cyrilvallez 在 [#46819] 中
* 修复在[#46790]中@Sunt-ing未配置EOS令牌时提示查找解码崩溃的问题(#46790)
* [连续批处理] 快照生成输出而不改变请求状态 (#46670) by @Incheonkirin in [#46670]
* [文档] 将生成张量保留在 cpu 上 (#46675) by @stevhliu in [#46675]
*壮举（生成）：允许用户将输入张量保留在CPU上（#46590），由@dacorvo在[#46590]中


## 注意
此版本修复了几个与注意力相关的错误，包括大头部尺寸的 GQA 的静默 SDPA 数学内核回退、`StaticCache` 的 Flash Attention 损坏、Xcodec2 中不正确的因果屏蔽、Blip2 中的交叉注意力重塑回归以及 Evolla 中急切的 GQA 支持。使用线性注意的模型还纠正了加速钩子处理，以防止在卸载过程中出现无提示的错误结果。


* 通过 @Cyrilvallez 在 [#46978] 中修复所有使用线性注意力模型的加速钩子 (#46978)
* 修复 Xcodec2 注意为非因果。 （#46963）由 @ebezzam 在 [#46963]
* 使用 StaticCache 修复闪存注意力 (#46914)，作者：@Cyrilvallez，位于 [#46914]
* 修复 Evolla 对 GQA 文本解码器的热切关注 (#46860)，作者：@jiqing-feng，在 [#46860]
* [文档] 金属闪光注意 (#46349) by @stevhliu in [#46349]
* [`Blip2`] 修复交叉注意力重塑 (#46695) by @vasqu in [#46695]


## 缓存

通过将冗余 getter 合并到更干净的 `get_max_length` 方法并相应更新文档，对缓存 API 进行了改进。还应用了多个错误修复，包括纠正滑动窗口之外的掩码生成、修复累积长度跟踪中的尺寸问题、解决混合模型卸载缓存中的设备不匹配问题，以及修复从符号链接本地缓存加载 trust_remote_code 模型时发生的崩溃。


* [文档] 由 @stevhliu 在 [#46892] 中更新缓存 apis (#46892)
* 由 @Cyrilvallez 在 [#46862] 中重新设计一些旧的缓存获取器/属性 (#46862)
* 修复了缓存累积长度中扩展暗淡的问题 (#46856)，由 @Cyrilvallez 在 [#46856] 中实现
* 修复生成超出滑动窗口时的掩码 (#46839) by @zucchini-nlp in [#46839]
* 通过 [#46748] 中的 @Sunt-ing 修复混合模型上卸载的缓存设备不匹配 (#46748)
* 修复 trust_remote_code 模型上的动态模块符号链接缓存 (#46618)，由 @ldkhang1201 在 [#46618] 中


## 发球

对 Serve 功能进行了多项修复和改进，包括延迟导入以防止在未安装可选的 `serve` extra 时 CLI 崩溃、修复子类 Pydantic 模型序列化期间删除的属性，以及添加内核 API 的文档。


* 修复（cli/serve）：延迟导入服务处理程序，这样 CLI 就可以在没有 `serve` 额外的情况下工作（#46473），@<NOT FOUND> in [#46473]
* [修复] Serve 在序列化时删除一些属性 (#46680) by @remi-or in [#46680]
* 将 GitHub API 调用中的 per_page 从 100 减少到 50，以避免服务器错误 (#46678) by @ydshieh in [#46678]


## 量化

修复了使用 BitsAndBytes 量化时 Gemma4 的视觉和音频多模式嵌入器中的数据类型转换错误，其中输入被错误地转换为整数存储数据类型 (`uint8`/`int8`)，而不是实际的计算数据类型。还在量化权重之前将 FP8 量化校正为舍入块比例，确保反量化为 `ue8m0`（DeepSeek-V4 样式）格式生成正确的值。


* [Gemma4] 修复量化视觉/音频嵌入器的 dtype 转换 (#46933)，由 @sharmax-vikas 在 [#46933] 中
* 修复量化多模态嵌入器的 dtype 转换 (#46904)，作者为 @praful-srinivasan-027，位于 [#46904]
* 在量化之前对 ue8m0 FP8 比例进行舍入，以便 dequant 与 @Incheonkirin 在 [#46763] 中存储的逆 (#46763) 相匹配


## 错误修复和改进
* 更新工作流调用者以使用 `transformers-ci` (#47040) by @ydshieh in [#47040]
* 添加 @Mi-Jiazhi 的魂源 VL 模型 (#46417) [#46417]
* 通过 @ydshieh 在 [#47005] 中为 ProcessorTesterMixin 添加 tiny_model_id 支持以进行内存敏感测试 (#47005)
* 杂务（linter）：在[#46259]中添加@tarekziade的TRF018建模规则（#46259）
* [PoC] HF 出口商 (#41992) 由 @IlyasMoutawwakil 在 [#41992]
* 如果 PEFT 版本太低，TST 跳过 PEFT 测试 (#47027) by @BenjaminBossan in [#47027]
* CI 在 [#47021] 中添加 @BenjaminBossan 的 PEFT 集成测试 (#47021)
* [glm-mode-dsa] 索引器在 [#46842] 中使用@pcuenca 的交错绳索 (#46842)
* 在 Mllama 中使用标准参数名称 (#46977) by @zucchini-nlp in [#46977]
* Bump min peft 0.19.1 删除重量转换重复代码 (#46442) by @BenjaminBossan in [#46442]
* 由 @Rocketknight1 在 [#46980] 中提出缺少前缀的响亮错误 (#46980)
* 修复 Qwen3 ASR no_split_module (#47002) 中的拼写错误，作者为 @ebezzam，位于 [#47002]
* 仅在 @tarekziade 的原始存储库 (#46982) 中 [#46982]
* 修复 Gemma 4 Assistant 文档 (#46975) 中的拼写错误，作者为 @RaunaqDavidNath，位于 [#46975]
* CI 状态应该是 @tarekziade 在 [#46976] 中的评论 (#46976)
* QwenVL 模型转换 (#46881) by @zucchini-nlp in [#46881]
* 删除 FusedRMSNormGated 模块中的默认数据类型 (#46953) by @Cyrilvallez in [#46953]
* 修复 PEFT 测试更改的错误类型 (#46959) by @BenjaminBossan [#46959]
* 通过 tokenizer_config.json 中的词汇文件参数修复路径遍历 (#46279) by @LinZiyuu in [#46279]
* docs(conditional_detr): 修复文档字符串中的 num_queries 默认值 (100 -> 300) (#46939) by @Kropiunig in [#46939]
* 使用常见的 float_list 方法进行特征提取器测试。 （#46956）由 @ebezzam 在 [#46956]
* 修复当 num_feature_levels 超过骨干网时 RT-DETR 索引错误… (#46833) by @c1prk in [#46833]
* 修复 Florence2 训练损失双班（与 Moonshine #… (#46898) by @sharmax-vikas in [#46898] 相同的模式）
* [Olmo3] 每层类型不同的 RoPE (#46911)，作者：@zucchini-nlp，[#46911]
* 使用inspect.getsource代替open()在_can_set_*_implementation (#46207)中通过@rasmi在[#46207]中进行源代码读取
* 不要使用硬编码设备将门控增量网络范数固定到 `cuda:0` (#46817)，@Sunt-ing 在 [#46817] 中
* 修复远程代码的自动映射注册并修复一些自定义代码问题 (#46876)，作者：@Cyrilvallez，位于 [#46876]
* 修复损坏的内部文档链接 (#46945)，作者：@sezer-muhammed，位于 [#46945]
* 在 @tarekziade 的 PR (#46774) 中插入 Grafana 徽章 [#46774]
* [NemotronAsrStreaming] 修复管道 (#46870) by @eustlb in [#46870]
* [NemotronAsrStreaming] 不带模块化处理器 (#46865) by @eustlb in [#46865]
* [`Dia`] 修复@vasqu 中的文档 (#46923) [#46923]
* [文档] 修复全磁盘卸载文档 (#46905) by @kylesayrs in [#46905]
* [CB] 更改以增加 max_batch_tokens (#46712) by @remi-or in [#46712]
* 重定向到文档中的扩散器管道以获取实验功能 (#46875) by @zucchini-nlp in [#46875]
* 由 @ydshieh 在 [#46910] 中安装在 docker (#46910) 中
* [CI] 在 `test_new_models_require_torchvision_backend` (#46882) 中使用预先计算的 `_OLD_MODELS`，作者：@ydshieh [#46882]
* 在夜间运行中调用 Transformers-ci (#46811)，作者为 @tarekziade，位于 [#46811]
* [文档] 全磁盘卸载 (#46893) by @stevhliu in [#46893]
* TST 在正常 CI 中运行快速 PEFT 测试 (#45679)，作者：@BenjaminBossan，位于 [#45679]
* nemotron_asr_streaming：将 _supports_flex_attn 设置为 False (#46878) by @kaixuanliu in [#46878]
* 添加本机屏蔽 MSE 损失，由 @Sainava 在 [#46764] 中为 Sapiens2ForPoseEstimation (#46764) 添加本机屏蔽 MSE 损失
* blip 2 修复 (#46816) 由 @itazap 在 [#46816]
* 为了简洁起见，使用网格网格 (#46861) by @zucchini-nlp in [#46861]
* 在 [#44178] 中添加 @ebezzam 的 xcodec2 模型 (#44178)
* 防止 @zucchini-nlp 在 [#46844] 中修改所有模型的自动分类 (#46844)
* 在 [#46852] 中添加 @delcenjo 的 torch.compile 页面的西班牙语翻译 (#46852)
* 文档：由 @adil-a 在 [#46857] 中更新 NeMo AutoModel 文档示例 (#46857)
* [文档] 分布式训练 (#44420) by @stevhliu in [#44420]
* [文档] 需要 trust_remote_code 来进行 custom_generate (#46677) by @stevhliu in [#46677]
* 通过 @3outeille 在 [#46705] 中添加分布式配置 (#46705)
* [卸载] [错误修复] 修复具有显式张量 dtypes 的模型的磁盘卸载 (#46849) by @kylesayrs in [#46849]
* 流式聊天解析 (#45847) 由 @Rocketknight1 在 [#45847]
* 修复 BitNet 打包权重解包数据类型（`F.linear` 数据类型不匹配）(#46808)，作者：@jiqing-feng，在 [#46808]
* 修复代码中的拼写错误 (#46579) by @cyyever in [#46579]
* 修复 Moonshine 训练损失双班（针对标签训练，而不是标签[..., 1:]）（#46784），作者：@Incheonkirin，在 [#46784]
* [CB] 修复 FA 读/写问题 (#46765) by @remi-or in [#46765]
* 切换装饰器顺序 (#46853) by @Cyrilvallez in [#46853]
* 文档（训练器）：将 JIT 检查点添加到训练器配方中（#46826），由 @efazal 在 [#46826] 中
* 在 [#46841] 中的@boringcrypto 在模型初始化中导入diffusion_gemma (#46841)
* [技能] 帮助您的代理入门 (#45732) by @stevhliu in [#45732]
* 修复 use_cache 的 seq_len > 1 (#46032) (#46084) by @Ramshankar07 in [#46084]
* [卸载] 支持全磁盘卸载 (#46749) by @kylesayrs in [#46749]
* 修复：通过 @sharmax-vikas 在 [#46753] 中为 `apply_chat_template` 中的空对话引发 `ValueError` (#46753)
* 修复 VideoPrismForVideoClassification 将 last_hidden_state 返回为 h… (#46830) by @sharmax-vikas in [#46830]
* 避免在 `create_mm_token_type_ids` 中弃用 NumPy 2.0 `__array__` 复制关键字 (#46827) by @qgallouedec in [#46827]
* 文档：使用安全张量 `0.8.0` 的好处更新苹果芯片文档 (#46744)，作者：@McPatate，在 [#46744]
* [`CB`] 将 FA2 添加到快速路径 (#46729) by @vasqu in [#46729]
* 修复 `get_seq_length` 返回张量时创建 flex_attention 块掩码的问题 (#46802)，作者：[#46802]中的 @jiqing-feng
* 通过 [#46782] 中的 @Sunt-ing 修复 `BioGptForSequenceClassification` 中的左填充标记选择 (#46782)
* 修复模型文档中损坏的内部链接 (#46807)，作者：@ShamSaleem，位于 [#46807]
* DiffusionGemma：掩模布局和 CI (#46654) by @zucchini-nlp in [#46654]
* 在每个令牌解码循环中使用缓存的添加令牌字典 (#46535) by @ishan-1010 in [#46535]
* 修复@zucchini-nlp 中的另一个不稳定测试 (#46767) [#46767]
* 修复在 slack 报告中下载工件时的次要速率限制 (#46796) by @ydshieh in [#46796]
* 文档：将 SmolLM3 移至 _toctree.yml 中的文本模型类别 (#46770)，由 @yyouretoast 在 [#46770] 中
* 修复了 `cache_implementation=static` (#46446) 中的几个错误，作者为 @dacorvo [#46446]
* [CI] 修复 self-comment-ci 工作流程中的工件下载路径 (#46769) by @ydshieh in [#46769]
* 由 @ArthurZucker 在 [#46719] 中修复了每头 minimaxm3 (#46719)
* [`CI`] 修复我自己引入的一些故障:grimacing: (#46751) by @vasqu in [#46751]
* 通过 [#46592] 中的 @<NOT FOUND> 修复了 ProcessorMixin._load_tokenizer_from_pretrained 中根标记器的回归 (#46592)
* 修复（aria）：在 get_number_of_image_patches 中使用 math.ceil 来匹配 @arnavkewalram 在 [#46732] 中的实际补丁计数（#46732）
* 从语义分割后处理中返回 logits (#46163) by @guarin in [#46163]
* 通过 [#46743] 中的 @Sunt-ing 回退到 CPU 上的 for 循环 grouped_mm (#46743)
* 内核重构 (#46520) by @michaelbenayoun in [#46520]
* ci：添加注释解释为什么安全门（#46750）中的秘密没有被@ydshieh继承[#46750]
* ci：在 ci-* 分支上触发 PR CI (#46746) by @ydshieh in [#46746]
* 细粒度 v3 (#46742) 由 @IlyasMoutawwakil 在 [#46742]
* 改进 AutoImageProcessor 后端不可用的错误 (#46727)，由 @sisaman 在 [#46727] 中
* 跳过装饰器必须出现在 pytest 中的 @parameterized.expand 之后 (#46737) by @rasmi in [#46737]
* [RecurrentGemma] 支持 attn_implementation 调度 (#46320) by @YangKai0616 in [#46320]
* [文档] 由 @stevhliu 在 [#46698] 中阐明初始化模块的用法 (#46698)
* 壮举：将安全张量提升至 `0.8.0` (#46523)，由 @McPatate 在 [#46523] 中实现
* ci：通过将配置替换为无操作来禁用 CircleCI (#46721) by @ydshieh in [#46721]
* [CB] 修复@remi-or 的卸载 (#46587) [#46587]
* [`Templates`] 由 @vasqu 在 [#46720] 中更新成员 (#46720)
* feat[vLLM x v5]：在 [#46472] 中@harshaljanjani 公开 VibeVoiceAsrConfig 上的 max_source_positions (#46472)
* Laguna：支持每个元素的输出门控（#46690），作者：@joerowell [#46690]
* ci: grant pull-requests:write to the security gateway caller (#46715) by @ydshieh in [#46715]
* 当整个骨干网连接时的多 GPU 加载 (#46625) by @zucchini-nlp in [#46625]
* 如果与 [#46284] 中 @zucchini-nlp 的自动文档 (#46284) 中的相同，则删除文档字符串
* 由 @Dovis01 在 [#46703] 中更新 GLM-5.2 文档 (#46703)
* 通过 @molbap 在 [#46691] 中添加 EUPE 的转换脚本 (#46691)
* [文档] 编译级别和批处理/调度限制 (#46676) by @stevhliu in [#46676]
* [blip_2] 支持 attn_implementation 调度 (#46401) by @YangKai0616 in [#46401]
* [CTRL] 支持 attn_implementation 调度 (#46073) by @YangKai0616 in [#46073]
* Lfm2：还通过 ShortConv.slow_forward（非快速路径）（#46633）通过 @ChangyiYang 在 [#46633] 中将 `seq_idx` 线程化
* feat(pipelines): 在 ImageClassificationPipeline 中接受 numpy 数组和张量 (#39607) (#46573) by @kamran-nizamani in [#46573]
* Smovlm：将视频填充到最大帧数 (#46662)，由 @zucchini-nlp 在 [#46662] 中
* 米斯特拉尔公共后端修复 (#46667) 由 @itazap 在 [#46667]
* [pr 模板] 由 @stevhliu 在 [#46606] 中更新 (#46606)
* 修复当 model_class 缺少 config_class 时 auto_factory 中的 AttributeError (#46669) by @aharv1945 in [#46669]
* [CB] 在模型中对 logits 进行切片 (#46660) by @remi-or in [#46660]
* ci：添加 NO_COLOR=1 以抑制 CI 输出中的 ANSI 颜色代码 (#46659) by @ydshieh in [#46659]
* 修复动态 RoPE 当 Layer_type 为 None 时不重置 inv_freq (#46624) by @Incheonkirin in [#46624]
* @zucchini-nlp 在 [#46374] 中更好的处理测试 (#46374)
* ci：通过@ydshieh 在 [#46668] 中将 merge_group 触发器添加到 pr-ci-caller.yml (#46668)
* 跳过 [#46368] 中 @kaixuanliu 对 nemotron_h 的无效 quant_cache 测试 (#46368)
* 恢复@ydshieh 在 [#46652] 中的“在周末禁用来自分叉存储库的 PR 的 PR CI 工作流程”(#46652)
* [CB] 修复 seqlens 并使用 @remi-or 的 TypedDict (#46593) [#46593]
* 禁用分叉存储库中 PR 的 PR CI 工作流程。周末期间 (#46609) by @ydshieh in [#46609]
* 由 @vasqu 在 [#46608] 中更新发布后 (#46608)
* 由 @hmellor 在 [#46605] 中修复 `peft` 下限 (#46605)
* 修复导致 Sphinx autodoc 警告的文档字符串格式问题 (#46596)，作者：@kurtmckee [#46596]

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @ydshieh
    * 更新工作流调用者以使用 `transformers-ci` (#47040)
    * 将tiny_model_id 支持添加到ProcessorTesterMixin 以进行内存敏感测试 (#47005)
    * 安装在 docker (#46910)
    * [CI] 在 `test_new_models_require_torchvision_backend` 中使用预先计算的 `_OLD_MODELS` (#46882)
    * 修复在 Slack 报告中下载工件时的二级速率限制 (#46796)
    * [CI] 修复 self-comment-ci 工作流程中的工件下载路径 (#46769)
    * ci：添加注释解释为什么安全门中不继承秘密（#46750）
    * ci：在 ci-* 分支上触发 PR CI (#46746)
    * ci：通过用 no-op 替换配置来禁用 CircleCI (#46721)
    * ci: grant pull-requests:write to the security gateway caller (#46715)
    * 将 GitHub API 调用中的 per_page 从 100 减少到 50，以避免服务器错误 (#46678)
    * ci：添加 NO_COLOR=1 以抑制 CI 输出中的 ANSI 颜色代码 (#46659)
    * ci：将 merge_group 触发器添加到 pr-ci-caller.yml (#46668)
    * 恢复“在周末禁用来自分叉存储库的 PR 的 PR CI 工作流程”(#46652)
    * 禁用分叉存储库中 PR 的 PR CI 工作流程。周末期间 (#46609)
* @米嘉智
    * 添加魂源VL模型(#46417)
* @tarekziade
    * 杂务（linter）：添加 TRF018 建模规则（#46259）
    * 仅在原始仓库中 (#46982)
    * CI 状态应该是注释 (#46976)
    * 在 PR 中插入 Grafana 徽章 (#46774)
    * 在夜间运行中调用 Transformers-ci (#46811)
* @casinca
    * 添加小米 MiMo-V2 (#45144)
* @JJJYmmm
    * [新模型] 添加Zyphra/ZAYA1-8B (#45862)
* @ebezzam
    * 修复 Qwen3 ASR no_split_module 中的拼写错误 (#47002)
    * 修复 Xcodec2 注意为非因果。 (#46963)
    * 使用常见的 float_list 方法进行特征提取器测试。 (#46956)
    * 添加 xcodec2 模型 (#44178)
* @meatybobby
    * 添加对 RADIO 型号的支持 (#46425)
* @道格拉斯-里德
    * 🚨 [gemma 3/4] 修复跨越滑动窗口边界的双向注意力掩蔽 (#46850)
* @Sunt-ing
    * 修复 Zamba2、Nemotron-H、Bamba、FalconH1 和 GraniteMoeHybrid 的 Mamba2 分块预填充/推测解码 (#46741)
    * LFM2 和 LFM2-MoE 的拒绝辅助生成（设置 _is_stateful）（#46937）
    * 不要使用硬编码设备将门控增量网络范数固定到 `cuda:0` (#46817)
    * 修复未配置 EOS 代币时提示查找解码崩溃的问题 (#46790)
    * 修复 `BioGptForSequenceClassification` 中的左侧填充标记选择 (#46782)
    * 修复混合模型上卸载的缓存设备不匹配的问题 (#46748)
    * 回退到 CPU 上的 for 循环 grouped_mm (#46743)
* @eustlb
    * 添加 Nemotron 3.5 ASR 流媒体 (#46565)
    * [NemotronAsrStreaming] 修复管道 (#46870)
    * [NemotronAsrStreaming] 没有模块化的处理器 (#46865)
    * 添加 Nemotron ASR 流媒体 (#46332)
    * [修复] 在 load_audio 中启用 base64 str 音频 (#46694)
* @vasqu
    * [`Dia`] 修复文档 (#46923)
* [`CB`] 将 FA2 添加到快速路径 (#46729)
    * [`Kernels`] 在 `use_kernels=True` 上触发正确的内核化 (#46755)
    * [`CI`] 修复我自己引入的一些失败:grimacing: (#46751)
    * :rotating_light: [`Kernels`] 同步到最新版本 (#46039)
    * [`Templates`] 更新成员 (#46720)
    * [`Blip2`] 修复交叉注意力重塑 (#46695)
    * 更新发布后 (#46608)
* @mbtariq82
    * Qwen3 ASR 和强制对准器 (#43838)
* @雷米-或
    * [CB] 增加 max_batch_tokens 的更改 (#46712)
    * [CB] 修复 FA 读/写问题 (#46765)
    * [CB] 修复卸载 (#46587)
    * [修复] Serve 在序列化时删除一些属性 (#46680)
    * [CB] 在模型内部切片 logits (#46660)
    * [CB] 修复 seqlens 并使用 TypedDict (#46593)
* @jiqing-feng
    * 修复 BitNet 打包重量解包数据类型（`F.linear` 数据类型不匹配）(#46808)
    * 修复 Evolla 对 GQA 文本解码器的热切关注 (#46860)
    * 修复 `get_seq_length` 返回张量时创建 flex_attention 块掩码的问题 (#46802)
    * 延迟构建默认内核映射，以将 `kernels` 与正常变压器使用分离 (#46681)
* @bzantium
    * 添加 MiniCPM3 (#41116)
* @MHRDYN7
    * 添加Videoprism (#39895)
* @杨凯0616
    * [RecurrentGemma] 支持 attn_implementation 调度 (#46320)
    * [blip_2] 支持 attn_implementation 调度 (#46401)
    * [CTRL] 支持 attn_implementation 调度 (#46073)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.13.0` · 📅 发布：2026-07-03 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.13.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
