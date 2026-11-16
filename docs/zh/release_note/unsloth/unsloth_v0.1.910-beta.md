---
title: "unsloth v0.1.910-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.910-beta"
version: "v0.1.910-beta"
published: "2026-10-23"
type: "pre"
lang: "zh"
---

# unsloth v0.1.910-beta

Recursive 的 Flint、MOSS-Image 和 NVIDIA 的 Nemotron Bolt 4B 都在这里！在 Unsloth 本地运行它们。还有新功能：仅限聊天的 Unsloth 桌面安装、大于 Mac 内存的 MLX MoE 模型以及兼容 OpenAI 的微调 API。

## 亮点

- **Mac 上更大的 MoE 模型**：MLX MoE 模型对于内存而言太大，因此专家只能使用 SSD，因此 Qwen3.8-Flash-Next 在 32 GB Mac 上运行。
- **仅聊天安装**：用于 GGUF 聊天的更小的 Unsloth 桌面；稍后在“设置”中添加培训。
- **Flint**：Recursive 的 40B 编码代理 MoE，以 3 位运行在 24 GB [指南](https://unsloth.ai/docs/models/flint)
- **MOSS-Image**：专为顶级一代设计的5.1B图像模型 [GGUF](https://huggingface.co/unsloth/MOSS-Image-SFT-GGUF) + [FP8](https://huggingface.co/unsloth/MOSS-Image-SFT-FP8)
- **NVIDIA Nemotron 3.5 Bolt E4B**：NVIDIA 的新 Gemma 4 E4B 微调，Tau2-Bench 上的 63.2 与原始的 38.7 [指南](https://unsloth.ai/docs/models/nemotron-3.5-bolt)
- **MoE 专家修剪**：通过使用 REAP 删除 25% 或 50% 的最不有用的专家来导出较小的 MoE 模型。
- **UI大修**：Unsloth上新的+更一致的UI（API、圆度等）

## 图片+视频

- 使用 OpenMOSS 的 5.1B MOSS-Image、SFT 或 Base 生成包含英文或中文文本的图像。 [GGUF](https://huggingface.co/unsloth/MOSS-Image-SFT-GGUF) · [基础 GGUF](https://huggingface.co/unsloth/MOSS-Image-Base-GGUF)
- MOSS-Image，新的图像模型，在 16 GB GPU 上运行；其 GGUF 也可以在不支持 GPU 的 Mac 和计算机上运行。
- 大多数对于一个 GPU 来说太大的图像和视频模型现在会在您的 NVIDIA GPU 上分割（如果它们适合的话），而不是从系统内存中流式传输。
- 新的 Hires 一步一步修复了 SDXL、FLUX.1、Qwen-Image 和 Z-Image 上的渲染问题。
- 新的比较网格会呈现一个提示，同时在标记网格中改变最多三种设置，例如种子、CFG 或 LoRA 权重。
- SDXL safetensor 获得 AUTOMATIC1111 风格的提示加权、CLIP 跳过、CFG 重新缩放、变化种子和文本反转。
- 粘贴的 AUTOMATIC1111、Forge 或 Civitai 参数块填充图像页面设置。
- 如果尚未下载 SAM 3，则“文本蒙版”工具现在使用 SAM 3.1：较小，无需 Hugging Face 登录。

## 聊天 + 桌面

- 首次启动 Unsloth Desktop 时选择仅聊天 (GGUF)，以实现更小的安装；稍后在“设置”中添加培训。
- 设置 > 聊天现在可以让您查看、编辑、清除或关闭 Unsloth 发送到每个聊天的记忆笔记。
- 在文档搜索聊天中，显示段落会列出模型获得的确切文本，并在其页面上打开每个段落。
- 音频页面可以通过保存的 API 连接（例如 OpenAI 或本地服务器）进行语音和转录。
- Unsloth 安装、更新和 `pip install -U unsloth` 现在拒绝 eMudhra 受损的 emSign 证书，这让攻击者可以冒充网站。可选的 vLLM 和 SGLang 引擎仍然是 trust。

### 燧石

- 运行 Recursive 的 Flint，这是一个 40B MoE 模型，具有用于编码代理的 2.5B 活动参数，具有推理、工具使用和 256K 上下文。 [指南](https://unsloth.ai/docs/models/flint) · [GGUF](https://huggingface.co/unsloth/flint-GGUF)
- 在 3 位时，Flint 在短上下文中可容纳 24 GB。
- 在 SWE-bench Pro v2 上，Flint 得分为 89.7，而 Qwen 3.6 的得分为 73.8。

### NVIDIA Nemotron 3.5 Bolt E4B

- 运行并微调 NVIDIA 的 Gemma Nemotron 4B，这是一种用于工具调用和指令跟踪的 Gemma 4 E4B 推理调整。
- Gemma Nemotron 4B 在 21 项 NVIDIA 测试中的 16 项中击败了 Gemma 4 E4B，在工具使用和多回合聊天方面获得了最多的成绩。
- Gemma 4 E2B 和 E4B（包括 Gemma Nemotron 4B）上的 DPO 不再崩溃。
## 培训

- 使用 `FastModel` 微调 Whisper、Canary、Moonshine、Dia 和 CTC 语音模型不再失败。
- Parakeet、Canary 和 CTC 语音训练使用的内存最多可减少 55%。
- 数据配方中的新书籍和文档到文本配方可将电子书和文档转换为预训练文本数据集，无需模型。
- 在 Windows 和 Linux 上，“导出”页面现在可以使用 REAP 删除 MoE 模型中 25% 或 50% 最不有用的专家，但需要付出一定的质量成本。
- 在 Python 中，`reap_prune` 运行 REAP 专家修剪速度比 llm-compressor 快 54 倍。
- `unsloth train` 现在可以训练视觉模型和音频模型（Mac 除外）。
- Unsloth 现在支持 OpenAI 的微调 API，因此 OpenAI 的 SDK 可以上传数据集并运行本地模型的监督微调。

## 性能

- MLX MoE 型号对于您的 Mac 来说太大，需要 SSD 专家，但回复速度较慢。 Qwen3.8-Flash-Next 适合 32 GB Mac； DeepSeek-V4-Flash 和 GLM-5.3-Flash 所需的内存远小于其大小。
- DPO 和其他填充序列的训练在 NVIDIA Ampere 或更新版本上运行速度提高了 3.8 倍，内存更少。
- 在没有 bf16 的 GPU 上进行 Qwen3-MoE、Gemma 3 和 Gemma 4 训练现在使用火炬 2.13 或更早版本的注意力内存减少了 7 倍。

## 编码剂 + API

- 在聊天中，模型现在可以读取连接的 MCP 服务器上的文本文件和文档，而不仅仅是使用他们的工具。
- 启动编码代理时，`unsloth start` 不再通过 HTTP 代理以纯文本形式将其 Unsloth API 密钥发送到本地 Unsloth。
- 在 Windows 上，`unsloth start` 启动时不再破坏 Claude Code 挂钩或 Codex 登录。
- 使用 Unsloth API 密钥的请求无法再运行 Python 和未沙盒化的终端工具；只有 Unsloth UI 可以允许这样做。
- 聊天设置中的新“保存此模型”按钮使您的采样设置成为新聊天和 API 请求的默认模型。

## 模型+硬件

- 加载 `load_in_4bit = True` 的 BF16 gpt-oss 检查点不再获得随机专家和路由器权重。
- 模型选择器再次允许您在 Ryzen AI 300 系列和更新的 NPU 上运行模型，无需环境变量。
- 在某些具有系统范围 ROCm 的 Linux AMD PC 上，在 CPU 上运行的 GGUF 现在再次在 GPU 上运行。

## 下载 Unsloth 桌面

Unsloth Desktop 是**免费且开源的**。下载它的目的是：
<表>
  <tr>
    <td><b>平台</b></td>
    <td><b>链接</b></td>
  </tr>
  <tr>
    <td><b>Windows</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows.exe'>下载</a></td>
  </tr>
  <tr>
    <td><b>macOS</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-MacOS.dmg'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux x64 / Ubuntu (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu.deb'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux ARM64 / Ubuntu 24.04+ (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu-ARM64.deb'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux x64（AppImage）</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Linux.AppImage'>下载</a></td>
  </tr>
  <tr>
    <td><b>Windows ARM64</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows-ARM64.exe'>下载</a></td>
  </tr>
</表>

## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/14276 中的 @danielhanchen 的 unsloth>=2026.10.7、unsloth-zoo>=2026.10.7
*工作室：接受引用的当地训练基地并在https://github.com/unslothai/unsloth/pull/14236中@danielhanchen的拒绝中命名单文件检查点
* QLoRA 定量状态后备：每个权重的门，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14231 中的进程全局标志
* GatedDeltaNet fla op 从事培训； @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14233 中的大头自检在不可重入检查点中幸存下来
* Transformers 4.x 上没有 triton_kernels 的 gpt-oss MXFP4：在 https://github.com/unslothai/unsloth/pull/14275 中的 @danielhanchen 的模型 dtype 中保持密集的专家偏差
* FSDP2：收集 Push_to_hub、拒绝 GGUF / torchao 导出、大小卸载状态和每个分片的 4 位计数，由 https://github.com/unslothai/unsloth/pull/14205 中的 @danielhanchen 提供
* 大头关注后续：编译终止开关、4位分片自检、https://github.com/unslothai/unsloth/pull/14188中@danielhanchen强制跳过float32
* 优化器在推理模式之外停车；拒绝带有未量化 adamw_flash 时刻的 fp16 参数，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14201
* 审查后续内容：编译和 4 位下融合的 LoRA 丢失/偏差、Q-GaLore 卸载、GRPO 截断支持、变压器 4.x 上的 CP 保存（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14226 中）
* CI：将核心动物园工作上限从 25 分钟提高到 35 分钟，@danielhanchen，https://github.com/unslothai/unsloth/pull/14240
* Studio：从 API 页面的 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14225 中读取的插槽中更改并行插槽
* FSDP2 QLoRA：将打包的 4 位字节保留在加载程序数据类型传递之外，修复 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14165 中保存的 merged_4bit
* GRPO：减少几何模式的每个序列的 IS 比率度量和 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14192 中的 env 覆盖
* 当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14294 中占用该端口时，在新端口上重试 audio.cpp 服务器
* 修复（rag）：在 https://github.com/unslothai/unsloth/pull/14098 中通过 @ATAMAH 调用归档工具时避免长时间的 CPU 停顿
* 避免 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/14217 中对聊天生成进行不必要的附件重新索引
* Studio：通过https://github.com/unslothai/unsloth/pull/14266中的@oobabooga将外部llama.cpp默认端口更新为9931
* 导入修复：https://github.com/unslothai/unsloth/pull/14299 中 @danielhanchen 在 torch 2.6 (torch.utils._pytree.register_constant) 上的 torchao 0.17+
* 耳语.cpp：当 llama.cpp 领先于 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14302 中的每个版本时，跳过 macOS 发布流程
* Studio：图书馆聊天卡在 https://github.com/unslothai/unsloth/pull/14305 中由 @shimmyshimmer 保持其列宽和相等的填充
* 经过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14311 中的审查后，将 unsloth-zoo 2026.10.7 扫描结果作为基线
* Studio：SAM 3.1，用于文本掩码，带有 https://github.com/unslothai/unsloth/pull/14310 中 @danielhanchen 的预量化 INT8 / FP8 文件
* Studio：通过 https://github.com/unslothai/unsloth/pull/14227 中的 @danielhanchen 从托管 vLLM 和 SGLang 引擎提供 /v1/ 完成
* Studio：https://github.com/unslothai/unsloth/pull/14229 中 @danielhanchen 对 MLX 模型的 /v1/completions 和 /tokenize 进行 logprobs
* Studio：修复 FLUX.3 工作流程、控件、LoRA 和 @oobabooga 在 https://github.com/unslothai/unsloth/pull/14312 中的下载进度
* 添加 vLLM 后端到 https://github.com/unslothai/unsloth/pull/14228 中 @danielhanchen 的 unsloth eval
* 模型目录网络检查：通过https://github.com/unslothai/unsloth/pull/14316中@danielhanchen后端获取的镜像来判断FLUX.3 Klein
* SAM 3 骨架测试：与 float32 负载进行比较，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14318 中的任何拼写找到 RoPE 表
* 提高 https://github.com/unslothai/unsloth/pull/14319 中 @danielhanchen 的 FLUX.3 控件的启动捆绑包预算 (#14312)
* Studio：在 https://github.com/unslothai/unsloth/pull/14279 中的@NilayYadav 在浏览器面板中打开 Unsloth 文档和 Next.js 站点
* Studio：在 https://github.com/unslothai/unsloth/pull/14321 中加载 @danielhanchen 的 ComfyUI fp8mixed 文本编码器（nvfp4 / mxfp8 层）
* Studio：修复https://github.com/unslothai/unsloth/pull/14323中@wasimysaid在浏览器面板中的Claude API参考页面
* Studio：让浏览器代理通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14282 中的标签勾选单选按钮和复选框
* 原生 FSDP2：每个模型、LoRA、QLoRA 的每个块和根的 full_shard 以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14273 中的完全微调 (UNSLOTH_FSDP2=1)
* Studio：在 https://github.com/unslothai/unsloth/pull/14324 中的 @shimmyshimmer 在 Web UI 浏览器面板中建议 Unsloth Docs
* Studio Hub：根据创建日期的趋势排名最新，而不是由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14329 中最后修改
* Studio：现代拨动开关，34 x 20，带有平中心拇指，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14322 中设计
* 提高现代开关的启动捆绑预算 (#14322) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14331
* 将 Unsloth 文档链接指向 unsloth.ai/docs，而不是 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14333 中的 docs.unsloth.ai
* 分布式测试：选择短暂范围之外的 MASTER_PORT，通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14334 中自动写入视觉结果
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14255 中选择知识库时保留项目源
* 桌面版：提供仅聊天 (GGUF) 安装并通过 https://github.com/unslothai/unsloth/pull/14245 中的 @danielhanchen 进行修复
* Studio：让模型读取https://github.com/unslothai/unsloth/pull/14243中@danielhanchen的MCP服务器资源
* 将 Unsloth Studio MLX 引脚移至 https://github.com/unslothai/unsloth/pull/14307 中的 @Lyxot 的 mlx-vlm 0.7.9
* 预构建轮子：为 Linux torch 2.10 到 2.12 构建 causal-conv1d 和 mamba-ssm，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14336 中构建
* PEFT MoE 转换快照：在 https://github.com/unslothai/unsloth/pull/14344 中添加 @danielhanchen 的 Qwen3-Omni MoE 文本类型和 thinker 别名
* OpenAPI循环测试：在https://github.com/unslothai/unsloth/pull/14346中@danielhanchen在测量窗口之外构建真实模式
* 工作室扩散：https://github.com/unslothai/unsloth/pull/13725 中@danielhanchen 的多 GPU 组件放置和 CFG 并行
* Studio：在 https://github.com/unslothai/unsloth/pull/14293 中 @oobabooga 的安装程序中尊重 UNSLOTH_HOME
* Studio：使网页上的复制按钮在浏览器面板中工作，作者：@NilayYadav，https://github.com/unslothai/unsloth/pull/14284
* 修复（studio）：MLX 内存估计不再分配模型，并通过 @Lyxot 在 https://github.com/unslothai/unsloth/pull/14325 中调整 DeepSeek V4 / V4.1 的大小
* Studio：保持运行时 flash-attn 仅在 https://github.com/unslothai/unsloth/pull/14287 中由@oobabooga 安装轮子
* Studio：在 https://github.com/unslothai/unsloth/pull/14280 中 @NilayYadav 切换选项卡时，保留在浏览器面板页面中输入的文本
* 在 https://github.com/unslothai/unsloth/pull/14304 中 @ShryukGrandhi 将 ChatML 转换为 Alpaca 时标准化角色名称
* 修复（工作室）：通过 https://github.com/unslothai/unsloth/pull/14244 中的 @take-lying-flat 将 Whisper 训练标签与解码器前缀对齐
* Studio：当 unsloth-zoo 覆盖 https://github.com/unslothai/unsloth/pull/14148 中@danielhanchen 的解码时，跳过 Qwen3.5 / 3.6 / Qwen3-Next 的 causal-conv1d
* Studio：在下载 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14278 中发送的没有扩展名的程序之前发出警告
* unsloth start (Windows)：通过标准输入传递子代理任务，这样非 npm .cmd 垫片就不会被 https://github.com/unslothai/unsloth/pull/14300 中的 @LeoBorcherding 破坏它
* Studio：在顶部打开每个“设置”选项卡，而不是 https://github.com/unslothai/unsloth/pull/14353 中 @danielhanchen 的上一个选项卡的滚动偏移量
* Studio：在https://github.com/unslothai/unsloth/pull/14286中保存@NilayYadav的书签时保持页面打开
* Studio：在 https://github.com/unslothai/unsloth/pull/14051 中下载@oobabooga 预构建的内核轮子一次
* Studio：在 https://github.com/unslothai/unsloth/pull/14351 中 @danielhanchen 的 /v1/images/Generations 上尊重宽度、高度、步长、指导、种子和 negative_prompt
* Studio：API密钥在沙盒中运行工具；完全访问需要 https://github.com/unslothai/unsloth/pull/14345 中 @danielhanchen 的 Unsloth UI
* 修复：通过 https://github.com/unslothai/unsloth/pull/14251 中的@take-lying-flat 保留快速 Llama/Qwen2 中的无填充 DPO 样本边界
* Unsloth Studio：引用 <tool_call> 的 JSONL 回复不再使工具解析器停顿，并且 https://github.com/unslothai/unsloth/pull/14097 中 @LeoBorcherding 的 RecursionError 导致回合失败
* Studio扩散：在第一次编译之前固定Triton libdevice，以便重新启动时命中@danielhanchen在https://github.com/unslothai/unsloth/pull/13713中的FX图形缓存
* Studio：停止配方对话框，在 https://github.com/unslothai/unsloth/pull/13668 中由 @keyiyu0331 打开时打开提示工具提示
* Studio：来自 Apple 快速核心的 sd.cpp 线程池大小，作者：https://github.com/unslothai/unsloth/pull/13349 中的 @danielhanchen
* Studio：修剪无效启动记录并保留 https://github.com/unslothai/unsloth/pull/14301 中 @oobabooga 的进程身份
* 工作室扩散：https://github.com/unslothai/unsloth/pull/13787 中 @danielhanchen 从主机内存流式传输的 DiT 的单卡 CFG 批处理
* Studio：当 unsloth-zoo 在 https://github.com/unslothai/unsloth/pull/14160 中的 @danielhanchen 在 Triton 上运行转换时，Mamba-2 混合动力使用无扩展的 mamba-ssm 轮
* 保持 SFT kwargs 在简单的 TrainingArguments 旁边传递，而不是回退到 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/14094 中的 trl 默认值
* Unsloth Studio (AMD/Windows)：在“设置”>“关于”上显示 iGPU 自己的内存，而不是 https://github.com/unslothai/unsloth/pull/14317 中 @LeoBorcherding 可以借用的系统 RAM
* Studio编译缓存：在重新保存时保留每个图形，并通过https://github.com/unslothai/unsloth/pull/14341中的@danielhanchen保存在torch的编译锁下
*修复：保留句子编码器适配器并通过https://github.com/unslothai/unsloth/pull/14246中的@take-lying-flat导出密集的16位权重
* Studio扩散：将运行时量化降噪器缓存为https://github.com/unslothai/unsloth/pull/13715中@danielhanchen的本地预量化检查点
* load_in_fp8=True 量化没有 FP8 存储库的模型，而不是通过 https://github.com/unslothai/unsloth/pull/14093 中的 @LeoBorcherding 将其静默加载到 bf16 中
* check_tokenizer：修复变形金刚 5.x 上词汇外添加的令牌，并在 https://github.com/unslothai/unsloth/pull/14096 中的 @LeoBorcherding 无法修复时引发
* save_pretrained_gguf：停止使用https://github.com/unslothai/unsloth/pull/14095中@LeoBorcherding的BOS剥离模板重写重用的本地检查点的标记器
* Studio sd.cpp：MiniMax-H3 的显式 VRAM 预算和 https://github.com/unslothai/unsloth/pull/13714 中 @danielhanchen 的 CUDA 功能回退
* MoE 分组 GEMM：要求在每个可见卡上都安装 sm90 以进行 TMA，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14358 中的操作数设备上启动
* 工作室扩散：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14367 中每次渲染运行 FLUX.3 基础调节块一次
* 通过 @Sneakr 在 https://github.com/unslothai/unsloth/pull/14076 中修复聊天上下文计数和令牌使用详细信息
* 安装程序：不要在 CUDA 13 之前的 Jetson 上安装通用 aarch64 CUDA torch，作者为 @danielhanchen，位于 https://github.com/unslothai/unsloth/pull/14363
* 阻止 fix_executorch 隐藏 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14375 中安装的 torchtune
* 测试：在 https://github.com/unslothai/unsloth/pull/14383 中的 @danielhanchen 的 GPU 主机上保持 gloo FSDP2 测试排名
* 修复：通过 https://github.com/unslothai/unsloth/pull/13438 中的 @li-lizhe 在 vLLM 恢复/拆卸路径上的活动加速器释放设备缓存
* 修复 Gemma3 和 LoRA 的电话部署 QAT，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14376 中编写匹配的 ExecuTorch 导出配置
* Studio：通过单位规模 GEMM 以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13793 中的融合规模尾声运行 Ada FP8 精确累加
* Studio：将 FLUX.3 提示上采样器固定到 HIP 掩模下的图像模型的卡上以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14356 中构建的 Vulkan 上
* T4 上的 NF4 解码：使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14386 中 GEMV 行上限上方的 bitsandbytes 4 位 GEMM
* Studio扩散：在https://github.com/unslothai/unsloth/pull/14387中仅由@danielhanchen在第一次渲染时记录提示长度的CUDA图
* Studio：无论如何都要加载统一内存扩散拒绝，并修复 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14379 中的预下载检查的容量
* Studio/CLI：报告 Rosetta，在图灵之前的 GPU 上跳过 audio.cpp CUDA，在 MPS/XPU 上通过 doctor，在 https://github.com/unslothai/unsloth/pull/14374 中隐藏 @danielhanchen 的 XPU 从令牌预览中
* llama.cpp 预构建：接受上游 win-rocm 捆绑包，在 Rosetta 下运行本机 arm64，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14373 中在 Jetson 上进行源代码构建
* 在本机支持上控制 XPU bf16，在混合 NVIDIA 主机上提示 CUDA_DEVICE_ORDER，阅读 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14371 中的 MLX bf16 Metal GPU 系列
* 提高 Rosetta 仅聊天消息的启动捆绑预算 (#14374)，作者：https://github.com/unslothai/unsloth/pull/14407 中的 @danielhanchen
* 块编译：在 https://github.com/unslothai/unsloth/pull/14396 中 @danielhanchen 的 DeepSpeed ZeRO-3 下保持库存前进
* Studio：在自动 GGUF 放置中更喜欢独立 GPU，而不是统一内存 APU；通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14372 中将 Vulkan 免费钳位到总计
* 使用 fast_inference 拒绝 load_in_8bit，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13019 中静默加载 16 位 vLLM
* Studio：当 https://github.com/unslothai/unsloth/pull/11813 中的 @cedric66 拒绝自定义提供程序（LM Studio）时，将 json_object 重试为 json_schema
* Studio：修复https://github.com/unslothai/unsloth/pull/14401中@danielhanchen在FLUX.2上的第一块缓存（双流头，单流尾）
* Studio：卸载优先重试 OOM VAE 解码，通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13802 中的结构将 GroupNorm+SiLU 融合到未覆盖的 VAE 上
* sm89 以下的 FP8 块 dequant：在 https://github.com/unslothai/unsloth/pull/14408 中由@danielhanchen 在一次 Triton 传递中解码 e4m3fn 字节
* int4 打包：跟踪 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14385 中 torch.compile 内的训练反量化
* 块编译：在 https://github.com/unslothai/unsloth/pull/14397 中按结构查找解码器层并包装每个类的混合堆栈（@danielhanchen）
* 本机 FSDP2：在 https://github.com/unslothai/unsloth/pull/14384 中的 @danielhanchen 中保留在根单元 (Zamba2) 中共享参数的块
* Studio：通过全块定时探针而不是 https://github.com/unslothai/unsloth/pull/13792 中 @danielhanchen 的模型表来选择 ROCm 闪光注意力
* Studio：对 Wan clips 进行编码，而 VAE 由@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14405 中进行解码
* FastLanguageModel LoRA / QLoRA：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14398 中将每个解码器块编译为一个区域
* Studio：使用其 32 头输出组运行 MiniMax-H3 PDD 检查点，拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14410 中无法运行的检查点
* DeepSpeed ZeRO-2 / ZeRO-3：负载阶段检测、MoE 和融合 LoRA 叶、精确重新同步、可重入检查点（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14394 中）
* 将解码残差添加到 https://github.com/unslothai/unsloth/pull/14382 中的@danielhanchen 的 RMSNorm（每个标准一次 Triton 发射）中
* 测试：在 https://github.com/unslothai/unsloth/pull/14414 中 @danielhanchen 的三个新测试文件中读取签入源作为 UTF-8
* QAT 测试：在 https://github.com/unslothai/unsloth/pull/14415 中 @danielhanchen 在无 GPU 运行器上的 unpickling 子进程中欺骗 CUDA
* Studio：显示 @yejonz 在 https://github.com/unslothai/unsloth/pull/13987 中进行文档搜索后检索到的段落
* 工作室视频流编码：失败的最终刷新会回退，而不是在 https://github.com/unslothai/unsloth/pull/14413 中由 @danielhanchen 挂起渲染
* DeepSpeed ZeRO-3 下的 GRPO：使用聚集的头进行评分，no_grad 而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14395 中的 inference_mode
* FP8 字节 dequant：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14416 中启动时传递 enable_fp_fusion
* Studio：将 Rosetta sysctl 探针解码为 https://github.com/unslothai/unsloth/pull/14419 中 @danielhanchen 的 UTF-8
* DDP：gradient_as_bucket_view用于完全微调，选择bf16 / fp16梯度全归约由https://github.com/unslothai/unsloth/pull/14399中的@danielhanchen
* Studio 无火炬运行时：引脚证书 2026.10.19，地板 fastmcp-slim 现在需要 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14418
* 测试：在一个命名空间中运行精度模板，使块编译打包测试远离 https://github.com/unslothai/unsloth/pull/14425 中@danielhanchen 泄漏的环境
* RoPE：多头瓷砖，一次启动 Q 和 K，无克隆（每次调用 2-2.7 倍），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14417
* gpt-oss：来自 BF16 检查点的 load_in_4bit 不再加载 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14400 中的随机专家和路由器
* Studio Hub：列出https://github.com/unslothai/unsloth/pull/14421中@shimmyshimmer推荐下的所有图像和视频模型
* 工作室扩散：组件拆分下的 VAE OOM、CFG 路由器中的扩展时间步长以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14420 中的测试修复
* Studio扩散：仅在本地模型自己的路径上匹配系列关键字，并在https://github.com/unslothai/unsloth/pull/14435中@danielhanchen的速度测试中撤消火炬2.13切片补丁
* Studio：在 https://github.com/unslothai/unsloth/pull/14412 中按 @danielhanchen 的块范围在 GPU 上拆分一个扩散降噪器
* 安装程序（WSL 上的 ROCm）：https://github.com/unslothai/unsloth/pull/14433 中@danielhanchen 的配置文件中没有空的 LD_LIBRARY_PATH 条目
* Studio：取消桌面上的种子密码，并将 API 呼叫者保留在 https://github.com/unslothai/unsloth/pull/14422 中的 @danielhanchen 沙盒高位上
* Studio：在 https://github.com/unslothai/unsloth/pull/14424 中强化 @danielhanchen 的数据配方引擎输入
* Studio：强化服务器以防止停顿、长登录名、可读日志和托管帐户获取（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14426 中）
* Studio：托管数据集媒体解码保留在可读文件上，Arrow 数据文件由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14430 中进行验证
* Studio：管理帐户无法使用其他帐户加载的模型或由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14432 中导出工作人员
* ROCm：急切的批量 1 NF4 解码采用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14440 中的 Triton GEMV（在 gfx1151 上进行 1.8 倍解码）
* Dependabot：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14441 中使用 GTK3 / WebView2 引脚固定 cairo-rs 和 windows-core
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/13832 中对 /studio/backend/core/data_recipe/oxc-validator 中的 npm-oxc-validator 组进行 3 次更新
* 通过 https://github.com/unslothai/unsloth/pull/13835 中的 @dependabot[bot] 将操作组跨越 1 个目录进行 8 次更新
* 工作室：批准等待释放他们的插槽，深度研究荣誉 --disable-tools，首次运行关闭在 https://github.com/unslothai/unsloth/pull/14434 中 @danielhanchen 的读取错误中幸存下来
* Studio：加强 https://github.com/unslothai/unsloth/pull/14423 中 @danielhanchen 的托管帐户工具限制
* 安装程序（WSL 上的 ROCm）：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14449 中的 LD_LIBRARY_PATH 修复从提交中获取帮助程序
* Studio：Linux torch 2.10 到 2.12 采用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14338 中的 causal-conv1d 和 mamba-ssm 轮
* Studio扩散：由https://github.com/unslothai/unsloth/pull/14448中的@danielhanchen在无图步骤上手动编译块记录的张量类型（无需在新的提示长度上重新编译）
* Studio Train：https://github.com/unslothai/unsloth/pull/14451 中 @shimmyshimmer 在暗模式下更清晰地选择选项卡、切换开关和目标模块
* Studio：通过 https://github.com/unslothai/unsloth/pull/14429 中的 @danielhanchen 强化主机启动、探针和工作目录路径周围的工具沙箱
* Studio：仅当 https://github.com/unslothai/unsloth/pull/14454 中的 @shimmyshimmer 回退到 HTTPS 时才显示自动下载原因
* Studio：保持图表、重定向链接和批准卡诚实，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14427
* Studio：项目新聊天按钮、侧边栏菜单中的项目主页，甚至 https://github.com/unslothai/unsloth/pull/14456 中 @shimmyshimmer 的菜单填充
* 尊重 every_n_layers 并在 https://github.com/unslothai/unsloth/pull/14403 中@danielhanchen 的gradient_checkpointing_enable 中删除冗余卸载
* 梯度检查点：checkpoint_skip_layers = "auto" 和 UNSLOTH_GC_KEEP_LAYERS by @danielhanchen in https://github.com/unslothai/unsloth/pull/14404
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/14467 中对 /studio/backend/core/data_recipe/oxc-validator 中的 npm-oxc-validator 组进行 3 次更新
* Studio：管理帐户路径在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14428 中打开时进行检查
* Studio 和 Core：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14437 中关闭 Sentence Transformers、GGUF 导出、扫描和分词器路径中的远程代码门间隙
* 将应用程序命名为 Unsloth 或 Unsloth Studio，而不是 https://github.com/unslothai/unsloth/pull/14473 中@shimmyshimmer 的裸工作室
* unsloth start dsh：当加载的上下文没有留下回复空间时发出警告，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14352
* Studio：截断过长的 /v1/embeddings 输入，而不是在 https://github.com/unslothai/unsloth/pull/14364 中 @danielhanchen 失败
* Studio：管理帐户保留配置的决策检查点；已注销的集线器中继隐藏 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14462 中的上游错误
* Studio：一个滑块随处可见，充满 https://github.com/unslothai/unsloth/pull/14471 中@shimmyshimmer 的口音
* Unsloth Studio：重新设计的 API 页面、多模型支持以及 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14455 中修复的运行设置
* Studio：让浏览器页面打开 target=_blank 链接并在 https://github.com/unslothai/unsloth/pull/14360 中显示 @danielhanchen 的警报
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/14468 中对 /studio/src-tauri 中的 Cargo-tauri 组进行 26 次更新
* Studio Images：说明为什么 LoRA 在 Speed=Auto 编译后消失，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14359 中提供重新加载
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14392 中训练 Alpaca 数据集的系统列
* Studio：将仅桌面聊天用户指向 https://github.com/unslothai/unsloth/pull/14438 中 @oobabooga 的“导出”页面上的“修复安装”
* Studio：在 https://github.com/unslothai/unsloth/pull/14475 中 @danielhanchen 将可回收的活动文件缓存计为 cgroup 限制下的可用主机 RAM
* Studio：Z-Image 卸载测试适用于没有 ROPE_PER_DEVICE 的扩散器，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14478 中进行
* Studio：在https://github.com/unslothai/unsloth/pull/14393中读取@NilayYadav的Word文件时保留插入>符号字符
* 核心：每用户 fp8 缓存，SyntheticDataKit 将 vLLM 绑定到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14460 中的环回
* 桌面和 Windows 安装程序：浏览器面板捕获提示、https://github.com/unslothai/unsloth/pull/14464 中 @danielhanchen 的自定义 Studio 主页的私有 ACL
* Studio：当 API 请求在 https://github.com/unslothai/unsloth/pull/14369 中加载@danielhanchen 的语音模型时，保持聊天模型的加载
* Studio：在 GIL 上初始化 CUDA 驱动程序，以便加载进度民意调查保持响应（https://github.com/unslothai/unsloth/pull/14452 中的 @danielhanchen）
* 修复：[Bug] 安装程序硬编码 PyPI.org，而不是尊重 https://github.com/unslothai/unsloth/pull/13748 中 @SIDDARTHAREDDY8 的 PIP_INDEX_URL / UV_INDEX_URL
* Dependabot：将手动保存的引脚留在版本矩阵中，并在 https://github.com/unslothai/unsloth/pull/14470 中保存 @danielhanchen 的 GTK3 和深层链接箱
* 工作室：在 https://github.com/unslothai/unsloth/pull/14402 中通过@take-lying-flat 进行仅完成音频 VLM 培训
* Studio：在 https://github.com/unslothai/unsloth/pull/14486 中 @danielhanchen 停止服务器时绝不走 init 的后代
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14285 中从浏览器面板页面内的下载按钮保存文件
* Studio：https://github.com/unslothai/unsloth/pull/14390 中的@NilayYadav 在其应用程序中打开聊天文件后保持工具正常工作
* Studio：阻止两个 Studio 窗口撤消彼此的浏览器数据，@NilayYadav 在 https://github.com/unslothai/unsloth/pull/14277 中
* https://github.com/unslothai/unsloth/pull/14388 中 @NilayYadav 的 Unsloth 聊天中回合思维模式的示例 Qwen3 模型
* MoE 分组 GEMM：将专家 dW 累积到 https://github.com/unslothai/unsloth/pull/14480 中 @danielhanchen 的现有 param.grad 中
* Studio：将运行时更新卡修剪为 https://github.com/unslothai/unsloth/pull/14436 中 @oobabooga 的一个摘要行和两个操作
* Studio：在 https://github.com/unslothai/unsloth/pull/14391 中@NilayYadav 完成的聊天回复中保留单独的星号和反引号
* Studio：选择预设不再覆盖 https://github.com/unslothai/unsloth/pull/14128 中 @danielhanchen 记忆的模型采样
* FP8 块 dequant：不规则/矩形 e4m3fn 块在 https://github.com/unslothai/unsloth/pull/14450 中的 @danielhanchen 上采用每个 NVIDIA GPU (4-16x) 上的字节解码器
* Studio：让所有者与https://github.com/unslothai/unsloth/pull/14365中@danielhanchen的每个帐户共享连接
* Studio 扩散：允许在 https://github.com/unslothai/unsloth/pull/14479 中 @danielhanchen 在离散 ROCm 卡上分割多 GPU 层
* Studio：使浏览器面板中的“返回”像 https://github.com/unslothai/unsloth/pull/14283 中的 @NilayYadav 的浏览器一样工作
* Studio：每个 B200 服务器上的 FLUX.2 Klein 和 Z-Image（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14483 中）具有相同的扩散像素
* Studio：每用户临时文件夹、更严格的工具沙箱授权、@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14461 中的托管帐户没有 UNC 路径
* Studio：MCP 小部件审批卡显示 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14458 中发送的参数
* Unsloth Studio / Desktop：将浮动面板保留在调整大小时留下的位置，最小化并重新启动（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14355 中）
* Studio：在 https://github.com/unslothai/unsloth/pull/14357 中的“设置”>“@danielhanchen 聊天”中查看、编辑和关闭聊天内存
* Studio：https://github.com/unslothai/unsloth/pull/14459 中 @danielhanchen 的反向代理后面的登录限制器和无密钥访问
* Studio：使 CPU RAG 在 Windows ROCm torch 上快速嵌入，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14354 中尊重 Windows CPU 亲和力
* Studio：媒体解码不开放任何协议，数据配方名称保留在 @danielhanchen 的 https://github.com/unslothai/unsloth/pull/14463 文件夹中
* 在 https://github.com/unslothai/unsloth/pull/14389 中通过 @NilayYadav 的 unsloth 训练训练视觉和音频模型
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14504 中的 gpt-oss 和 gc-skip 测试中读取真实加速器跳过防护和 utf-8
* 块编译：通过https://github.com/unslothai/unsloth/pull/14065中的@indrajeetapache测试检查点提前停止不会降级该层
* 阻止 has_internet 通过 @vineethsaivs 在 https://github.com/unslothai/unsloth/pull/14378 中设置进程范围的套接字超时
* 对 https://github.com/unslothai/unsloth/pull/14495 中 @danielhanchen 的 fp16 LoRA 激活数据类型中的 FP8 权重进行反量化
* 交叉熵：16384 / 8 扭曲在 T4 和 A100 上向前分块，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14498 中
* GRPO：选择加入 logprobs 作为旧策略 (UNSLOTH_GRPO_ROLLOUT_LOGPROBS_AS_OLD)，作者：https://github.com/unslothai/unsloth/pull/14489 中的 @danielhanchen
* 工作室扩散：保持模型卸载降噪器的步骤热切，而不是在 https://github.com/unslothai/unsloth/pull/14497 中 @danielhanchen 的每次渲染时重新记录其 CUDA 图形
* Studio：将 krea2 GGUF 路由到图像，而不是通过 @indrajeetapache 在 https://github.com/unslothai/unsloth/pull/14477 中将它们作为聊天模型打开
* 将 uv 约束文件复制到 https://github.com/unslothai/unsloth/pull/14507 中 @danielhanchen 没有 8.3 名称的 Windows 卷上的无空间路径
* 修复 https://github.com/unslothai/unsloth/pull/14517 中 @danielhanchen 的 #14437、#14455 和 #14473 之后主程序的红色 CI
* CLI: --parallel 帮助描述了 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14340 中的共享 KV 缓存
* FSDP2 gloo 测试：存根训练器包装器调用的每个助手，而不是 https://github.com/unslothai/unsloth/pull/14518 中 @danielhanchen 的固定列表
* Windows 安装程序：恢复 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14520 中 setup.ps1 中的分割布局注释（Defender ML 误报）
* 测试：遵循 #14473 在沙盒中的 Unsloth 措辞、xformers 和 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14522 中的 autoopt 奇偶校验检查
* 在 https://github.com/unslothai/unsloth/pull/13834 中为 @danielhanchen 添加针对 MoE 模型的 REAP 专家修剪
* Studio：在 https://github.com/unslothai/unsloth/pull/14130 的 @danielhanchen 的导出页面上选择加入 REAP 专家修剪
* Studio：将 TTS 语言发送到 Supertonic，并在 https://github.com/unslothai/unsloth/pull/14511 中添加 @danielhanchen 的说话语言选择器
* unsloth start openclaw：停止编写 OpenClaw 2026.8.1+ 拒绝在 https://github.com/unslothai/unsloth/pull/14343 中使用 @danielhanchen 运行的遗留 exec-approvals.json
* Studio：whisper.cpp 与 llama.cpp 一起更新，而不是在 https://github.com/unslothai/unsloth/pull/13862 中打开 @danielhanchen 的更新卡
* QAT：qat_scheme =“nvfp4”，并在 @danielhanchen 保存到 https://github.com/unslothai/unsloth/pull/14512 之前剥离 NVFP4 / MX QAT 线性
* 工作室扩散：unsloth 镜像上的关键学习峰值由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13847 中全新安装下载
* 在 FastLanguageModel 中对 16 位负载上的细粒度 fp8 检查点进行反量化，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14516 中将它们保存为 16 位
* 工作室扩散：将 @danielhanchen 学习到的峰值中的 bf16 和 GGUF / int8 打包降噪器放置在 https://github.com/unslothai/unsloth/pull/13860 中
* 在 https://github.com/unslothai/unsloth/pull/14531 中 @danielhanchen 在低于 sm89 的 GPU 上加载反量化为 16 位的 FP8 检查点
* 将 float32 激活转换为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14532 中的 Falcon-H1 / Nemotron-H fp16 负载的 float16 投影
* NVFP4 fused dX：当输出已经填满 https://github.com/unslothai/unsloth/pull/14536 中的 @danielhanchen 的 GPU 时，跳过 sm89 上的 split K
* MoE 分组 GEMM：在相同的卡上共享自动调谐器；通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14490 中修复单 GPU 主机和 macOS 上的 TMA 测试
* Jetson / Rosetta 后续行动：显式 GPU 索引打破了 Jetson CPU 记录，JetPack 7 脱离了 CPU，作者为 @danielhanchen，https://github.com/unslothai/unsloth/pull/14494
* 工作室扩散：在延迟配置文件的钩子下方编译组卸载块，并用于 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14528 中的计划卸载视频
* 等待 https://github.com/unslothai/unsloth/pull/14542 中 @danielhanchen 项目文件夹浏览器中 Unsloth 管理的文件夹标签冒烟
* Studio：Z-Image 引导步骤在引导关闭批次中运行，因此在 https://github.com/unslothai/unsloth/pull/14541 中打开 CFG 不会重新编译 @danielhanchen 的任何内容
* 保持两个后端 CI 测试在 uv 0.13 和 https://github.com/unslothai/unsloth/pull/14535 中 @danielhanchen 没有加速器的跑步者上有效
* 格式化分组的 GEMM 单次飞行包装器，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14544 中再次通过 pre-commit.ci
* Studio：拒绝单文件扩散加载，这会耗尽主机 RAM，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14510 中崩溃
* 当前设备上的 XPU bf16，在 XPU 上保持显式 bf16，MLX 完全微调在 https://github.com/unslothai/unsloth/pull/14493 中保持 @danielhanchen 的默认 dtype
* 将真实的 loader_utils 助手加载到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14545 中的精确冲突测试工具中
* Studio：FLUX.3 上采样器引脚遵循 Torch 供应商的要求，单 GPU 主机像以前一样启动，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14491 中的非阻塞 Vulkan 探针
* Studio：离散优先的 GGUF 放置保持明确的设备选择，匹配上下文上限； @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14492 中进行的 Rosetta 进程内检查
* MoE 分组 GEMM：https://github.com/unslothai/unsloth/pull/14550 中@danielhanchen 的每专家 dW 内核
* 工作室图像：粘贴生成参数、修复蒙版模糊和仅蒙版区域、@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14508 中的种子按钮
* 在 https://github.com/unslothai/unsloth/pull/14560 中@danielhanchen 的计算缓冲区接线测试中，从 #14492 开始计算上下文上限的每设备保留门
* MoE 自动调整：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14559 中从编译块调用时，急切地运行内核调整
* Studio：https://github.com/unslothai/unsloth/pull/14551 中 @danielhanchen 在静态步骤跳过和 CFG 并行下分割 Z-Image CFG
* 在 https://github.com/unslothai/unsloth/pull/14561 中 @danielhanchen 进行的块 dequant 主机 RAM 检查测试中取三个 RssAnon 峰值中的最小值
* Studio：再次默认显示 AMD NPU，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14524 中提供了更清晰的设置通知
* Studio 图片：https://github.com/unslothai/unsloth/pull/14563 中 @danielhanchen 的流匹配模型和 SDXL 文本反转嵌入的每代 Shift
* 柠檬水 2026.43.3，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14567
* Studio：固定 master-982 stable-diffusion.cpp 预构建，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14565 中加载 MOSS-Image GGUF
* 在 #14524 将其设置为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14571 中自己的构建后，再次给予启动转移预算空间
* 跳过在记录的真实 CUDA 上编译的 MoE 自动调谐测试，而不是 https://github.com/unslothai/unsloth/pull/14577 中@danielhanchen 的欺骗探针
* MoE 自动调谐缓存：将设备功能作为元组进行比较，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14578 中重用保存的配置
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14579 中测量新流程中的块 dequant 峰值
* MoE 后备内核配置：为 https://github.com/unslothai/unsloth/pull/14576 中的 @danielhanchen 适配 float32 操作数的设备共享内存
* 工作室扩散：将 fp8 单文件权重存储在 fp8 中，其中加宽将卸载或挤满 https://github.com/unslothai/unsloth/pull/14549 中的 @danielhanchen 主机 RAM
* Studio：在默认速度层上保持 CFG 并行，并在 https://github.com/unslothai/unsloth/pull/14564 中@danielhanchen 在两张卡上运行 Z-Image 的引导分支
* 工作室扩散：默认打开测量安全优化（fused FLUX RoPE、CFG 批处理、Blackwell 原生注意力、BF16 小 DiT），作者：https://github.com/unslothai/unsloth/pull/14566 中的 @danielhanchen
* 工作室视频：使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14581 中使用一个 clip 宽调色板（大约快 3 倍）导出 GIF
* 工作室扩散：锁定失败的融合 fp16 RoPE 和 AdaLN 在 https://github.com/unslothai/unsloth/pull/14583 中由@danielhanchen 发射用于负载
* RoPE缓存：在inference_mode之外构建cos/sin，以便GRPO在https://github.com/unslothai/unsloth/pull/14584中保留@danielhanchen编译的解码器块
* 在 https://github.com/unslothai/unsloth/pull/14540 中的 @NilayYadav 在仅 CPU 的 Docker 主机上保留 docker rm 后的 Unsloth Studio 数据
* 快速解码：在一次启动中旋转 Q 和 K，并将 Qwen3 q/k 范数与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14599 中的 RoPE 融合
* 尊重 @tompipe 在 https://github.com/unslothai/unsloth/pull/14548 中对 Studio Qwen3-ASR 转录所要求的语言
* Studio：在 https://github.com/unslothai/unsloth/pull/14602 中的 @shimmyshimmer 的 Hub 模型卡中显示相对和斑点拥抱脸部图像
* Studio：https://github.com/unslothai/unsloth/pull/14587 中@shimmyshimmer 的聊天分叉修复和更清晰的分叉可供性
* Studio：通过聊天活动了解项目的最新情况，减少 https://github.com/unslothai/unsloth/pull/14586 中 @shimmyshimmer 的项目和来源背后的轮询
* QAT：qat_scheme =“mxfp8”，并让MX QAT线性在https://github.com/unslothai/unsloth/pull/14607中@danielhanchen的自动施法下采用float32激活
* 不懒惰启动：修复 https://github.com/unslothai/unsloth/pull/14591 中的 Studio 发现、代理、Hermes 上下文、Claude hooks 和 @shimmyshimmer 的 Codex 登录
* Studio：https://github.com/unslothai/unsloth/pull/14588 中@shimmyshimmer 提供更快、更清晰的模型文件夹管理
* MoE 分组 GEMM：不锁定缓存的自动调谐器启动； @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14605 中读取每张卡的 SM 计数一次
* Studio：代币活动显示了一年中四分位阴影天数，其背后有 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14600 中的准确计数
* Studio：修复了非美国布局、Esc 和 Cmd-K 的快捷方式，以及 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14597 中提供的更清晰的设置
* FLUX.3 上采样器：将较旧的 NVIDIA Vulkan 设备命名为 NVIDIA，在 https://github.com/unslothai/unsloth/pull/14604 中 @danielhanchen 每个窗口探测一次空答案
* Studio：@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14594 中进行更准确的连接检查和更清晰的错误
* Studio 运行设置：在新编辑器上恢复保存的设置、显示保存状态、按 https://github.com/unslothai/unsloth/pull/14589 中的@shimmyshimmer 对高级行进行分组
* 向后快速 LayerNorm：当只有 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14609 中的权重/偏差训练之一时，没有别名梯度缓冲区
* 融合解码 RoPE：在 https://github.com/unslothai/unsloth/pull/14611 中的@danielhanchen 中删除分割模型上的每层主机消耗
* Studio：通过变换调整滑动药丸的大小，使其与 @Etherll 在 https://github.com/unslothai/unsloth/pull/14361 中的移动保持同步
* Studio：https://github.com/unslothai/unsloth/pull/14496 中 @danielhanchen 的 OpenAI 兼容微调作业 API（/v1/files、/v1/fine_tuning/jobs）
* MoE 自动调整缓存：https://github.com/unslothai/unsloth/pull/14617 中的 @danielhanchen 版本磁盘条目和重新调整加载的配置
* 工作室图像：SDXL 提示加权、CLIP 跳过、CFG 重新缩放和 https://github.com/unslothai/unsloth/pull/14562 中 @danielhanchen 的变化种子
* NF4 位和字节 GEMM 门：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14608 中的 torch.compile 下进行延迟设置之前返回
* Studio：当附加图像超过 https://github.com/unslothai/unsloth/pull/14538 中 @NilayYadav 的 20 MB 限制时
* Studio：接受https://github.com/unslothai/unsloth/pull/14537中@NilayYadav的描述带有未引用冒号的技能
* Studio：将 Decision API 模型保留在 https://github.com/unslothai/unsloth/pull/14580 中 @NilayYadav 的聊天模型选择器之外
*工作室：拒绝Laya选择问题，其选项将被@NilayYadav在https://github.com/unslothai/unsloth/pull/14558中缩短
* 为 https://github.com/unslothai/unsloth/pull/14632 中的 @danielhanchen 提供融合解码 RoPE 内核的单行缓存注意力工具 CPU 替代品
* Studio：https://github.com/unslothai/unsloth/pull/14633 中@shimmyshimmer 的瑞士/土耳其数字和弦和 Esc 停止的快捷方式后续#14597
* 工作室：最繁忙的一天保持最暗的代币活动阴影（后续#14600），作者：@shimmyshimmer，https://github.com/unslothai/unsloth/pull/14630
* Studio：保留项目页面重命名并删除等待 https://github.com/unslothai/unsloth/pull/14634 中@shimmyshimmer 的流式回复
* Studio：将文件夹身份查找保留在扫描预算内（后续#14588），作者：https://github.com/unslothai/unsloth/pull/14638 中的 @shimmyshimmer
* Studio：在 https://github.com/unslothai/unsloth/pull/14636 中 @shimmyshimmer 的第一个回复（后续 #14587）后命名一个无标题聊天的分支
* unsloth 启动：仅将 auth.json 硬链接到 Codex 父覆盖层（后续 #14591），@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14635 中
* Studio：默认的无方案公共提供商 URL 为 https（后续为 #14594），作者为 https://github.com/unslothai/unsloth/pull/14629 中的 @shimmyshimmer
* NVFP4 融合 GEMM：遵循 https://github.com/unslothai/unsloth/pull/14625 中 @danielhanchen 的 autocast dtype 并检查 dX 的 K 对齐
* MoE LoRA：当 down_proj 已经与 https://github.com/unslothai/unsloth/pull/14628 中的@danielhanchen 匹配时，扩大 gateway_up_proj 以拆分 gateway_proj / up_proj 专家
* Studio：设置中的引擎版本和更新，通过 API 用于图像和视频，更短的通知，https://github.com/unslothai/unsloth/pull/14590 中 @shimmyshimmer 的更圆润波形
* Studio 设置：停止在 https://github.com/unslothai/unsloth/pull/14649 中 @shimmyshimmer 打开的每个设置上强制执行 GitHub 版本查找
* Studio：阻止长 MLX 聊天每回合重新阅读整个聊天内容，@NilayYadav 在 https://github.com/unslothai/unsloth/pull/14574 中
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14620 中由 @danielhanchen 分割的两张卡 FLUX.2 层上测试第一个块缓存
* Studio：通过跳过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14573 中读取的词汇，更快地加载 GGUF 模型
* 修复了 save_pretrained_torchao，以便在 https://github.com/unslothai/unsloth/pull/14639 中由@danielhanchen 对变形金刚 5 进行全面微调 QAT
* RMSNorm：在 https://github.com/unslothai/unsloth/pull/14637 中使用 @danielhanchen 的 DPP 缩减顺序在 ROCm 上启用窄行内核
* Studio：阻止 Clef 决策模型比 https://github.com/unslothai/unsloth/pull/14556 中的 @NilayYadav 崩溃的 Unsloth 寿命更长
* Unsloth Studio：通过 @Lyxot 在 https://github.com/unslothai/unsloth/pull/14612 中加载 MLX 模型的库提供服务
* 工作室作曲家图标检查：当开发页面重新加载中间情况时重新测量情况，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14647 中进行
* 修剪 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13859 中的 Studio 前端测试中的注释
* 修剪 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13874 中的 Studio 后端测试中的注释
* Studio：打开 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14290 中在桌面浏览器面板中输入的本地主机地址
* 在真实的 CUDA 设备上进行融合解码 RoPE 测试，而不是 https://github.com/unslothai/unsloth/pull/14661 中@danielhanchen 的欺骗探针
* Windows UI 通道：在停止的服务器释放 auth.db 时重试权限套件的身份验证擦除，作者：https://github.com/unslothai/unsloth/pull/14658 中的 @danielhanchen
* 工作室：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14288 中的音频页面上保存的连接进行讲话
* 原生 FSDP2 float16：修复了 https://github.com/unslothai/unsloth/pull/14663 中 @danielhanchen 第一步中融合 AdamW 崩溃的问题
* 聊天：作曲家码头停止搜索每个com上的整个线程......由https://github.com/unslothai/unsloth/pull/14585中的@Sneakr
* Studio：默认情况下保持图像信息标记关闭，配方保留在https://github.com/unslothai/unsloth/pull/14669中@danielhanchen的元数据中
* Studio：https://github.com/unslothai/unsloth/pull/14595 中@shimmyshimmer 削减轮询探针成本并更快释放内存
* Studio：停止显示 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14575 中加载的崩溃聊天模型
* 壮举：在 https://github.com/unslothai/unsloth/pull/14453 中添加 @HughScott2002 加载的 EPUB 和可选 MOBI 数据集
* Studio：在“设置”>“https://github.com/unslothai/unsloth/pull/14500 中@danielhanchen 聊天”中可选回复时间
* Studio：当 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14555 中加载另一个模型时卸载空闲决策模型
* FastSentenceTransformer：https://github.com/unslothai/unsloth/pull/13639 中 @danielhanchen 编码器模型 DDP 下的非重入梯度检查点
* Studio：停止 SDPA 探测器报告 @Lyxot 在 https://github.com/unslothai/unsloth/pull/14488 中对 MPS 的融合注意力
* Studio：在 https://github.com/unslothai/unsloth/pull/14499 中 @danielhanchen 的 Data Recipes 文档种子中提取电子书、Office 文件和电子邮件
* FP8：在https://github.com/unslothai/unsloth/pull/14678中由@danielhanchen保存之前保留每个作用域转换器并清理每个反量化负载
* 注意路由测试：遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14672 中的 torch 自己的 GQA 内核选择（修复了 torch 2.14 上的两个故障）
* Studio：https://github.com/unslothai/unsloth/pull/14592 中@shimmyshimmer 提供的更轻的系统轮询和更清晰的统一内存监控
* 工作室设置：通过 @shimmyshimmer 修复 https://github.com/unslothai/unsloth/pull/14596 中的 API、连接、远程访问和 LAN 问题
* Studio：将 https://github.com/unslothai/unsloth/pull/13427 中的 @Shooter3k 的多 GPU 扩展的 VRAM 预算下限降低至 10%
* MoE 分组 GEMM：当显式图块溢出每个专家共享内存时，保留旧版 dW 内核，作者：https://github.com/unslothai/unsloth/pull/14723 中的 @danielhanchen
* Studio：当 GGUF 对于 Apple 统一内存来说紧张时发出警告，@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14598 中
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14289 中的音频页面上保存的连接转录音频
* Studio：让所有者关闭 Decision API，同时 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14557 中加载模型
* 测试：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14741 中进行 fp8 保存策略测试后恢复变形金刚的 Fp8Dequantize
* FP8 dequant：在 https://github.com/unslothai/unsloth/pull/14677 中将 @danielhanchen 的 fp16 输出乘以 fp32 中的每个张量和行尺度
* Studio：将仅桌面聊天安装从 https://github.com/unslothai/unsloth/pull/14593 中的@oobabooga 设置升级为完整安装
* NVFP4：在https://github.com/unslothai/unsloth/pull/14750中由@danielhanchen在自动转换下的激活数据类型中保持快速解码调用者
* 壮举（工作室）：@Lyxot 在 https://github.com/unslothai/unsloth/pull/14326 中的 Unsloth Studio 中进行 MLX PLE 和专家卸载
* Unsloth Studio (Vulkan)：在https://github.com/unslothai/unsloth/pull/12650中@LeoBorcherding在混合引脚中的共享内存iGPU之前填充独立GPU
* CFG-并行：将更改的 Python 编号、存储偏移量或自动转换视为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14614 中的冷调用
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14652 中，@danielhanchen 为没有设备计时器（CPU、MPS）的常驻降噪器保持 CFG 批处理关闭
* 图片：拒绝由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14613 中构建 NaN sigmas 的 Flux 基数/最大偏移值
* Studio扩散：为存储的fp8降噪器提供自己的规划器标签，而不是https://github.com/unslothai/unsloth/pull/14631中@danielhanchen的密集标签
* Studio sd.cpp：默认情况下 BF16 文本编码器（Q8_0 / Q4_K_M 更改像素），在 https://github.com/unslothai/unsloth/pull/14697 中由@danielhanchen 选择较低精度
* NVFP4 QAT：要求 in_features 能被 32 整除，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14703 中
* 工作室扩散：https://github.com/unslothai/unsloth/pull/14656 中@danielhanchen 的图像和视频状态报告编译和 CUDA 图形参与
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14666 中重播模型卸载的降噪器的 CUDA 图，并在 https://github.com/unslothai/unsloth/pull/14666 中通过 @danielhanchen 固定 torchao int8 主机权重
* Studio 扩散：arm FLUX.1 提示长度动态形状，因此 int8 不会在 https://github.com/unslothai/unsloth/pull/14689 中的@danielhanchen 的长提示或新大小上重新编译
* FSDP2 QLoRA：在 https://github.com/unslothai/unsloth/pull/14724 中 @danielhanchen 在 Push_to_hub_merged 中的一台设备上保留 4 位合并操作数
* Studio扩散：arm Z-Image的提示长度输入，由@danielhanchen在https://github.com/unslothai/unsloth/pull/14715中编译为int8 / fp8
* 块编译：让封闭的 torch.compile 拥有 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14704 中包装的解码器层
* Studio sd.cpp：Linux 上每个可用物理核心一个 CPU 线程，作者：https://github.com/unslothai/unsloth/pull/14694 中的 @danielhanchen
* Studio：通过https://github.com/unslothai/unsloth/pull/14222中的@roydonsequeira夹紧模型传递到search_knowledge_base的top_k
* Studio NVFP4：将未选通和选通失败的视频构建排除在 Auto 之外，根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14659 中的选通记录检查 flashinfer
* 编译块：打包的 GatedDeltaNet 操作，训练块中的 Flex 主内核，PrefixGrouper 调用跳过块（0 个图表中断），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14782 中完成
* 4 位解码：无需从 eager 设置重新编译，自动转换下的一种输出 dtype，刷新 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14754 中缓存的 LoRA 转换
* MoE LoRA 目标：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14745 中列出注意模块时，保留请求的同级路由器
* 双 GPU 解码 RoPE 测试：在 https://github.com/unslothai/unsloth/pull/14752 中检查 @danielhanchen 按位复制和 2 ulp 舍入
* 工作室图片：在 https://github.com/unslothai/unsloth/pull/14651 中雇用@danielhanchen 修复和 ESRGAN 模型升级器
* 工作室扩散：更改烘焙的 LoRA 子集和权重，无需重新编译或由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14692 中重新捕获
* Studio：在推理模式之外构建 CFG 并行副本，并捕获 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14626 中对推理权重的就地编辑
* perf(studio)：在 https://github.com/unslothai/unsloth/pull/14466 中 @Lyxot 专家在磁盘上时，在计划步骤中预填充 MLX 负载
* 测试：在 https://github.com/unslothai/unsloth/pull/14789 中 @danielhanchen 覆盖 split-reduction hook 后，将 fused-NVFP4 env 保持在适当的位置
* FP8 行式解码：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14791 中针对 2 至 16 个令牌启动一次多行 GEMV
* FP8 块解码：https://github.com/unslothai/unsloth/pull/14792 中的@danielhanchen 将 act_quant 和窄 N GEMM 融合为 1 到 16 个标记
* RMSNorm 内核：不专门研究 https://github.com/unslothai/unsloth/pull/14786 中 @danielhanchen 的行计数和行步长
* MoE 自动调整缓存：为 https://github.com/unslothai/unsloth/pull/14751 中的@danielhanchen 选择操作数 GPU 的内核配置
* Studio：显示检查点的训练损失，当该步骤也由https://github.com/unslothai/unsloth/pull/13879中的@MohammadHijjawi97评估时
* 工作室图像：在 https://github.com/unslothai/unsloth/pull/14627 中的 @danielhanchen 的仅 CPU 主机上的 stable-diffusion.cpp 上运行 Krea 2 GGUF
* 工作室扩散：自动多 GPU 放置修复和 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14657 中的状态放置决定
* Studio：https://github.com/unslothai/unsloth/pull/14735 中@danielhanchen 在图像选择器中托管文件中自动量化文本编码器的大小
* GRPO 路由重放：在编译和评分 PEFT 参考之前先使用路由公式，无需重放 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14756 中
* MoE dW 累积：当 autograd Node hooks 可以通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14759 重写 dW 时回退
* Gemma 4 vLLM 后备：检查引擎的 GPU，而不是 https://github.com/unslothai/unsloth/pull/14778 中 @danielhanchen 的当前 GPU
* 融合偏好损失：当 lm_head 具有 https://github.com/unslothai/unsloth/pull/14788 中 @danielhanchen 的模块向后钩子时回退
* 工作室图像：比较网格（X/Y/Z 图），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14624
* MXFP4 封装线性：通过 https://github.com/unslothai/unsloth/pull/14784 中的@danielhanchen 的可用内存绑定低于 sm_80 权重解码
* 工作室扩散：https://github.com/unslothai/unsloth/pull/14734 中 @danielhanchen 的 CFG 批量和 CFG 并行参数检查中的每个引导步骤由一台主机读取
* 工作室图像：从他们自己的配置中检测 v-prediction SDXL 微调，而不是 https://github.com/unslothai/unsloth/pull/14746 中 @danielhanchen 的名字
* Studio：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14771 中返回 int8 fused 安装之前，解决 torchao 的 int8 GEMM 主目录
* 工作室扩散：从 https://github.com/unslothai/unsloth/pull/14654 中的 @danielhanchen 的每个快速通道门的轮子标签中读取 ROCm
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14720 中@danielhanchen 测量的峰值的默认层和最大层上种子密集的 fp16 降噪器
* 工作室视频：在 ROCm bf16 VAE 下对 Wan clips 进行流编码，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14653 中进行解码
* MoE 分组 GEMM：跳过内核信息日志记录工作，除非 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14787 中启用了调试日志记录
* Studio MLX 图像：当平铺的图像不适合 https://github.com/unslothai/unsloth/pull/14796 中的 @danielhanchen 时，平铺 VAE 解码
* QAT：在 https://github.com/unslothai/unsloth/pull/14702 中@danielhanchen 在 float32 和 Accelerate-hooked 路径上伪造量化 Gemma 嵌入
* FP8 块解码：仅权重 GEMV，它击败块 GEMM，融合小 M，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14813 中直接调用
* Studio MLX 图像：在 https://github.com/unslothai/unsloth/pull/14794 中转换 @danielhanchen 的 Q4_K / Q5_K / Q6_K 和 Q5_0 / Q5_1 GGUF
* Studio MLX 图像：计划文本编码器和来自 https://github.com/unslothai/unsloth/pull/14793 中 @danielhanchen 的 Metal 工作集的密集位
* Studio：在 https://github.com/unslothai/unsloth/pull/14802 中@danielhanchen 为 MLX 图像引擎设置 Pillow 低于 13
* 工作室测试：将卡片名称固定在 https://github.com/unslothai/unsloth/pull/14804 中的 @danielhanchen 的 learn-peaks 商店固定装置中
* 工作室扩散：https://github.com/unslothai/unsloth/pull/14767 中 @danielhanchen 的 low_vram 卸载的快速全组件交换
* Fused LoRA：针对 https://github.com/unslothai/unsloth/pull/14806 中的 @danielhanchen 的变体、禁用或合并的适配器、可训练的碱基和 autocast dtype 不匹配，回退到 PEFT
* 注意：让 SDPA GQA 在 https://github.com/unslothai/unsloth/pull/14779 中 @danielhanchen 在 torch.compile(dynamic=True) 下进行探针跟踪
* FSDP2 NF4 保存：在 CPU 上暂存打包字节，在 https://github.com/unslothai/unsloth/pull/14739 中 @danielhanchen 在完全 DCP 负载上恢复 QuantState
* Studio 测试：将 MLX 快照路径作为路径进行比较，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14809 中的 posix 字符串
* 工作室测试：跳过 ROCm 上的两卡快速引脚测试，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14618 中出错
* 将 repo 格式化程序应用于 https://github.com/unslothai/unsloth/pull/14817 中 @danielhanchen 合并的 26 个文件
* Studio MCP：在 https://github.com/unslothai/unsloth/pull/14825 中的 @danielhanchen 解决后，删除排队的视频请求和呼叫者
* 工作室图像：将常驻 GGUF 的基本存储库保留在 Reapply 上，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14828 中进行本机重新加载
* 工作室视频：将流编码挂钩保留在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14822 中编译的 VAE 解码图之外
* Studio：在https://github.com/unslothai/unsloth/pull/14826中@danielhanchen更换失败后恢复保留媒体模型的价格
* 格式化 test_video_stream_encode.py，在 https://github.com/unslothai/unsloth/pull/14852 中的 @danielhanchen 的 #14822 中合并，无需 repo 格式化程序
* 工作室扩散：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14832 中固定的块加载 torchao int8 / fp8 权重
* Studio：选择每个设备的视觉投影仪精度，而不是 F16 for MiMo-VL by @danielhanchen in https://github.com/unslothai/unsloth/pull/14679
* Studio MLX 图像：在 https://github.com/unslothai/unsloth/pull/14839 中@danielhanchen 不支持的 GGUF 拒绝中列出 Q5_0 / Q5_1
* 工作室扩散：对 FLUX.2 klein 关闭 cudnn.benchmark，以便种子在 https://github.com/unslothai/unsloth/pull/14770 中的 @danielhanchen 的每个进程中解码相同的图像
* 工作室：预算 HunyuanImage-2.1 的自动 int8 文本编码器，位于 https://github.com/unslothai/unsloth/pull/14833 中@danielhanchen 的托管文件中
* Studio：按住图像渲染槽，同时@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14830 中启动冷 FLUX.3 上采样器
* Studio：API 密钥无法使数据配方从 https://github.com/unslothai/unsloth/pull/14699 中的 @danielhanchen 的服务器环境读取凭据
* Studio：只有 trust llama-server 的 /health 当我们自己的孩子在 https://github.com/unslothai/unsloth/pull/14706 中由 @danielhanchen 持有端口时
* 修复了 https://github.com/unslothai/unsloth/pull/14705 中 @danielhanchen 切换参考适配器后的 Gemma 4 E2B / E4B DPO 检查点错误
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14701 中的 SSRF 保护获取来获取 VLM 数据集行图像 URL
* GPT-OSS 模板：在 https://github.com/unslothai/unsloth/pull/14700 中@danielhanchen 进行思考时，在最终频道上保留早期答案
* Studio MLX 图像：在 https://github.com/unslothai/unsloth/pull/14795 中 @danielhanchen 每生成一次后释放 MLX 的缓冲区缓存
* 工作室扩散：将 CFG 并行权重探针保留在 https://github.com/unslothai/unsloth/pull/14844 中@danielhanchen 的大型推理权重内
* Studio 图像：运行 Hires 修复潜在编码，其中卸载的 SDXL VAE 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14851 中计算
* Studio：从 https://github.com/unslothai/unsloth/pull/14819 中 @danielhanchen 的共享 Hub blob 存储下的 repo blob 读取 prequant 源 etag
* Studio更新程序：当https://github.com/unslothai/unsloth/pull/14834中的索引落后于@danielhanchen时，安装匹配的unsloth + unsloth-zoo对
* 桌面版：当 WEBKIT_DISABLE_COMPOSITING_MODE=0 离开 https://github.com/unslothai/unsloth/pull/14837 中 @danielhanchen 的合成时保持环境
* Studio 浏览器：将临时聊天的隐藏页面保留在历史记录中，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14855
* 工作室扩散：锁定每个负载和跨进程的 CFG 批次判决，以便种子在 https://github.com/unslothai/unsloth/pull/14849 中保持 @danielhanchen 的一条路径
* 在 https://github.com/unslothai/unsloth/pull/14878 中 @danielhanchen 的 #14834 和 #14819 中格式化两个合并的文件，无需 repo 格式化程序
* Studio：帐户管理需要 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14872 中的 UI 会话
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14821 中的 @danielhanchen 重试之前释放失败的组卸载设置
* Studio：在 https://github.com/unslothai/unsloth/pull/14861 中的训练提示和导出横幅中安装训练按钮（@danielhanchen）
* 测试：名称文本编码和门 CUDA 在 https://github.com/unslothai/unsloth/pull/14871 中@danielhanchen 的 has_real_cuda 上跳过
* 工作室扩散：使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14621 中使用 torchao float8 权重编译 MiniMax-H3
* Studio H3：让自动驻留在 ROCm 和 NVIDIA 上再次看到该卡，无需 nvidia-smi，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14820 中
* 工作室扩散：在 EOS 上池 SDXL 文本反转提示，作者为 https://github.com/unslothai/unsloth/pull/14846 中的 @danielhanchen
* Studio：标记一个仅包含点和斜线的 module.json 文件夹，将 @danielhanchen 的模型留在 https://github.com/unslothai/unsloth/pull/14527 中
* Studio：分号或中线后的美人鱼风格声明无法通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14526 中获取
* Studio：拒绝第一跳不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14529 中的存档的链式数据集媒体路径
* 工作室：聊天音频的 librosa 后备也拒绝播放列表，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14530
* Studio：托管帐户自己的 Hub 令牌涵盖由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14533 中从 Hub 缓存加载的居民
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14534 中读取 trusted 代理背后的每个转发标头字段
* Studio：批准的主机调用将聊天安装的软件包、帮助程序模块和 @danielhanchen 的 CLI 保留在 https://github.com/unslothai/unsloth/pull/14543 中
* install.sh：修复陈旧的 ROCm-on-WSL 插件，无需由 https://github.com/unslothai/unsloth/pull/14641 中的 @danielhanchen 提供交互式密码提示
* Studio：让浏览器代理遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14642 页面上显示的搜索结果重定向链接
* 桌面：仅由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14643 中写入当前用户的 Windows 登录条目
* Studio：数据配方列名称再次带有斜杠；验证器文件名由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14644 中确保安全
* Studio：/run/media 驱动器上的注册模型文件夹和 HF 缓存对所有者保持沉默，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14646
* 桌面版：拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14879 中受损的 eMudhra/emSign 中间体 (rustls-webpki 0.103.16)
* Studio 和 Core：certifi 2026.10.19 和 pip 26.2.2 楼层（删除受感染的 emSign 根），作者：@danielhanchen，位于 https://github.com/unslothai/unsloth/pull/14887
*工作室扩散：使用空的transformer_2插槽存储Wan管道的请求峰值，因此由@danielhanchen在https://github.com/unslothai/unsloth/pull/14864中测量驻留运行
* FP8 每个张量/行方向反量化：一个 Triton 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14886 中传递 e4m3fn 字节
* 在 https://github.com/unslothai/unsloth/pull/14885 中 @danielhanchen 的 #14821 和 #14886 中格式化两个合并的文件，无需 repo 格式化程序
* Studio NVFP4：使用一次性激活量化器标记编译缓存键，以便热缓存无法绕过 https://github.com/unslothai/unsloth/pull/14853 中的 @danielhanchen 的开关
* Studio sd.cpp：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14862 中无法获取 BF16 默认值时，加载缓存的早期文本编码器数量
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14842 中缺少默认值时，使用缓存的早期 FLUX.3 上采样器量化
* Studio：在数据集加载时安装数据集图像 URL 防护，而不是在 https://github.com/unslothai/unsloth/pull/14888 中的 @danielhanchen 启动时安装
* Studio：MOSS-Image（树内端口、量化构建、GGUF 通过 stable-diffusion.cpp），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14552
* Studio扩散：在https://github.com/unslothai/unsloth/pull/14777中@danielhanchen在块卸载下的每个提示编码上停止刷新CUDA分配器
* Studio sd.cpp：将服务器模式图像 LoRA 作为硬链接，以便 sd-server 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14860 中列出它们
* Studio扩散：一旦VMM arena失败，就停止记录CUDA图，并通过https://github.com/unslothai/unsloth/pull/14867中的@danielhanchen将其分离
* 将 Gemma 3n AltUp 系数保留在 https://github.com/unslothai/unsloth/pull/14729 中 @danielhanchen 的动态 4 位量化之外
* 加载 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14716 中保存在 qwen-asr 包布局中的 Qwen3-ASR 检查点
* @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14744 中默认通过 FastModel 微调 Whisper、Canary、Moonshine、CTC、音频分类、Dia 和 Higgs Audio
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14781 中的 FastModel 加载 VibeVoice-ASR、MusicGen、Audio Flamingo 3 和 Music Flamingo
* XPU bf16：判断正在使用的XPU，而不是https://github.com/unslothai/unsloth/pull/14769中@danielhanchen的每个可见的XPU
* gpt-oss bnb 4 位：探测检查点变压器负载并保持融合专家量化状态由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14740 中保存
* 工作室图像：Hires 修复潜在升级直接插入基本潜在，如 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14863 中的 ComfyUI 的 LatentUpscale
* 工作室图像：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14876 中的拱肩描述符运行 ESRGAN 升标器
* 测试：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14903 中重写 no-torch format_conversionharness 中的 Remote_images 导入
* Studio：由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14896 中重新设计键盘快捷键页面
* 安全审核：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14870 中对 pandas 3.1.0 find_stack_level 测试进行基线测试
* 在 https://github.com/unslothai/unsloth/pull/14908 中@danielhanchen 的 #14769 中格式化两个合并的文件，无需 repo 格式化程序
* Studio ROCm：保留存储的 flash-attention 判决，防止每个存储桶重新编译，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14869 中对 CFG 副本进行门控
* 同时获取 get_statistics 存储库，以便 from_pretrained 不会等待 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14476 中的四次 HF 往返
* FP8 per-tensor / rowwise dequant under torch.compile under sm89：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14913 中的一个不透明字节解码操作
* Studio：将标签悬停在 https://github.com/unslothai/unsloth/pull/14927 中的作曲家 + 按钮上，作者为 @shimmyshimmer
* 工作室视频：适合流媒体层上的每个请求驻留以及 https://github.com/unslothai/unsloth/pull/14865 中 @danielhanchen 的 HunyuanVideo-1.5
* 工作室扩散：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14866 中第一次加载时测量的峰值来种子 FLUX.2 klein 驻留
* 工作室图像：发送否定提示时比较网格计数 Hires CFG，并记录 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14875 中的 Hires 设置
* FSDP2 QLoRA 合并保存：在 CPU 上暂存打包的 4 位基础，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14823 中一次合并一层
* Studio：更稳定的运行设置控件、灰色滑块、18px 拇指，作者：@shimmyshimmer，https://github.com/unslothai/unsloth/pull/14926
* 在 https://github.com/unslothai/unsloth/pull/14930 中 @danielhanchen 的 #14913 和 #14823 中格式化合并的四个文件，无需 repo 格式化程序
* 安装程序：固定 uv 0.13.5 并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14894 中替换早于 0.13.4 的 uv（emSign 根）
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14797 中告诉网站 macOS 浏览器面板是 Safari
* Studio 图像：通过记住 https://github.com/unslothai/unsloth/pull/14873 中@danielhanchen 的每个快照的在线标记，对仅缓存的 SDXL 负载保持 v 预测检测
* Studio：水平滚动长 API 使用示例，由 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14798 中提供
* Studio：列出 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14931 中名为 <model>-<QUANT>-imatrix.gguf 的 imatrix 加权量化
* Studio：通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14939 中从浏览器设置选项卡中删除新徽章
* 大头注意：保持 CUDA 图形捕获远离掩码扫描并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14790 中绑定 int32 行偏移
* GRPO：在 TRL < 0.28 上将 LoRA 权重同步到 TRL 自己的 vLLM 引擎，拒绝 https://github.com/unslothai/unsloth/pull/14831 中@danielhanchen 的量化基础
* 原生 FSDP2：为自定义加速器循环保持加速 FSDP2，支持 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14882 上在 torch 2.6 / 2.7 上进行非分片生成
* 将 checkpoint_skip_layers="auto" 规划器保留在 https://github.com/unslothai/unsloth/pull/14928 中 @danielhanchen 的 torch.compile 区域之外
* Studio：门将连接密钥保存在带有标记的密钥用途上，而不是 https://github.com/unslothai/unsloth/pull/14824 中 @danielhanchen 的密钥名称
* gfx11 ROCm 上的 FP8 块 dequant：参差不齐/矩形 e4m3fn 块采用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14936 中的字节解码器
* Studio：模型选择器隐藏空上传并淡化该设备无法在 https://github.com/unslothai/unsloth/pull/14935 中由 @shimmyshimmer 运行的模型
* Studio：保存每个模型的采样默认值，并将其用于 https://github.com/unslothai/unsloth/pull/14515 中 @danielhanchen 的 API 请求
* 当 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14810 中请求编辑时，保持 HTML 预览可见
* FP8 gfx11 字节解码器：收紧 https://github.com/unslothai/unsloth/pull/14947 中 @danielhanchen 的 #14936 的评论
* Studio 聊天：当 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/14568 中加载聊天模型时，返回该模型
* Studio：一种固定半径比例，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14919 中应用于共享图元
* 工作室：在 https://github.com/unslothai/unsloth/pull/14768 中保留@oobabooga 轮流的对话存档顺序和附件
* 修复 https://github.com/unslothai/unsloth/pull/14671 中 @Imagineer99 生成的音频延迟播放的问题
* Studio：https://github.com/unslothai/unsloth/pull/14934 中的 @danielhanchen 将聊天模板限制从 64 KiB 提高到 512 KiB
* DiffusionGemma：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14942 中为每个 DataParallel 副本构建前缀缓存
* 注意：在一次 xformers 调用中保留打包的 fp32，在 https://github.com/unslothai/unsloth/pull/14805 中阅读@danielhanchen 从 Q 设备向下转换的 fp32
* Studio：将托管数据集媒体 URL 固定到 https://github.com/unslothai/unsloth/pull/14840 中 @danielhanchen 提取的存档成员和 Hub 范围
* 测试：遵循 https://github.com/unslothai/unsloth/pull/14957 中 @danielhanchen 的标题栏和远程访问合同中的半径比例
* 检查 https://github.com/unslothai/unsloth/pull/14952 中 @danielhanchen 点命名的 Sentence Transformers 模块文件夹的权重索引
* 格式化 dataset_media.py，在 https://github.com/unslothai/unsloth/pull/14963 中 @danielhanchen 的 #14840 中合并，无需 repo 格式化程序
* CodeQL：每周运行并仅由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14953 调度
* Studio：在 https://github.com/unslothai/unsloth/pull/14265 中@alkinun 的搜索之间重用模型中心过滤器元数据
* 修复（导出）：在 https://github.com/unslothai/unsloth/pull/14722 中通过 @ryder777777 传递 trust_remote_code 以进行检查点导出
* Studio (Windows)：将保留的手电筒 2.12 与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14684 中的 triton-windows 3.7 配对
* Studio：为 https://github.com/unslothai/unsloth/pull/14685 中的 @danielhanchen 的 Qwen3.5 / Qwen3-Next 远程实现保留 causal-conv1d
* Studio 设置：将无扩展的 mamba-ssm 保留在过时的内核中，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14687 中进行检查
* 安装程序 (Windows)：回退到 https://github.com/unslothai/unsloth/pull/14686 中的 @danielhanchen 的 python-build-standalone 镜像，用于 uv 管理的 Python
* Studio (AMD Linux)：当系统 ROCm 前置隐藏 GPU 时，保留捆绑的 ROCm 运行时（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14933 中）
* 通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/14718 中修复音频和音乐结果的居中问题
* Studio：更简单的 API 使用示例，https://github.com/unslothai/unsloth/pull/14914 中没有 @shimmyshimmer 的 Pi / Mistral Vibe 出站链接
* CI：在 https://github.com/unslothai/unsloth/pull/14971 中 @danielhanchen 的草案拉取请求中跳过 Windows、macOS 和 Tauri 作业
* Studio：整理日志查看器并通过 https://github.com/unslothai/unsloth/pull/14965 中的 @shimmyshimmer 调整其大小
* 工作室扩散：将分割的主卡报告为扩散器 ModularPipeline（两张卡上的 FLUX.3）的执行设备，作者为 https://github.com/unslothai/unsloth/pull/14917 中的 @danielhanchen
* Studio：https://github.com/unslothai/unsloth/pull/14938 中 @shimmyshimmer 的中性灰色而不是绿色
* Studio：通过 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/14814 中为英特尔 XPU Triton 提供一个可在 Windows 上运行的 C++ 工具链
* Studio：https://github.com/unslothai/unsloth/pull/14972 中 @shimmyshimmer 的实时监视器详细视图行上方没有分隔线
* Studio：删除https://github.com/unslothai/unsloth/pull/14967中@shimmyshimmer未使用的图像资源
* 将 @danielhanchen 的 FastFlowLM v1.0.10 固定在 https://github.com/unslothai/unsloth/pull/14978 中
* Studio：在https://github.com/unslothai/unsloth/pull/14901中由@danielhanchen在生成时保留重命名的audio.cpp选项
* Studio：拖放文件工具栏控件，在 https://github.com/unslothai/unsloth/pull/14976 中重复 @shimmyshimmer 的可见按钮
* Studio：在 https://github.com/unslothai/unsloth/pull/14980 中修剪 @shimmyshimmer 的文件工具栏注释
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14945 加载和 QLoRA-train Moonshine Streaming 检查点
* Studio：附加重复命名的文本文件，如 LICENSE(1)，并说明为什么 https://github.com/unslothai/unsloth/pull/14977 中的 @shimmyshimmer 无法附加文件
* Studio：停止 macOS 桌面应用程序为 https://github.com/unslothai/unsloth/pull/14815 中的 @debojyoti-dev 未处理的按键输入杂散控制字符
* Unsloth Studio：https://github.com/unslothai/unsloth/pull/14681 中 @shimmyshimmer 的浏览器使用修复和更清晰的代理进度
* 工作室扩散：CFG 并行路由器保留 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14918 中封装的转发签名（CFG 并行下的 FLUX.3）
* Studio：当聊天正在等待 https://github.com/unslothai/unsloth/pull/14877 中 @oobabooga 的工具批准时显示
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14961 中合并集线器目标线束中的存根 _unmerge_flags_on_error
* FP8 e4m3fn 缩放 dequant：像 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14969 中的所有其他发布一样传递 enable_fp_fusion
* Studio：数据集图像防护使所有者流程保持正常运行（选择加入、WSL 路径、未编码空间），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14966
* 工作室扩散：在其自己的捕获流上记录每张卡的 CUDA 图形，因此第二个 GPU 上的编译渲染是正确的（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14915 中）
* Studio：让 HTTP/SSE MCP 工具调用在 https://github.com/unslothai/unsloth/pull/14308 中的@SauravBellam 的整个最大工具调用持续时间内运行
* Studio：轮流使用外部提供商的压缩包，可通过 https://github.com/unslothai/unsloth/pull/14731 中的 @debojyoti-dev 进行搜索
* Studio：拒绝在 https://github.com/unslothai/unsloth/pull/14799 中的 @NilayYadav 提示的上下文中启动 Claude Code 或 OpenCode
* Studio sd.cpp：在小型 SMT 主机上保留 sd.cpp 的全 CPU 线程数，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14847 中没有任何限制
* Studio：修复主机内存检查并改进 @VTplus 在 https://github.com/unslothai/unsloth/pull/14514 中加载 GGUF 图像的日志记录
* Windows：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14856 中的变压器 5.0 - 5.16 上读取 safetensors 分片
* Studio：仅在编译降噪器或在 https://github.com/unslothai/unsloth/pull/14868 中重放 @danielhanchen 的图表时分割 Z-Image 引导步骤

## 新贡献者
* @ATAMAH 在 https://github.com/unslothai/unsloth/pull/14098 中做出了第一个贡献
* @ShryukGrandhi 在 https://github.com/unslothai/unsloth/pull/14304 中做出了第一个贡献
* @keyiyu0331 在 https://github.com/unslothai/unsloth/pull/13668 中做出了第一个贡献
* @cedric66 在 https://github.com/unslothai/unsloth/pull/11813 中做出了第一个贡献
* @yejonz 在 https://github.com/unslothai/unsloth/pull/13987 中做出了第一个贡献
* @SIDDARTHAREDDY8 在 https://github.com/unslothai/unsloth/pull/13748 中做出了第一个贡献
* @tompipe 在 https://github.com/unslothai/unsloth/pull/14548 中做出了第一个贡献
* @Shooter3k 在 https://github.com/unslothai/unsloth/pull/13427 中做出了第一个贡献
* @roydonsequeira 在 https://github.com/unslothai/unsloth/pull/14222 中做出了第一个贡献
* @ryder777777 在 https://github.com/unslothai/unsloth/pull/14722 中做出了第一个贡献
* @SauravBellam 在 https://github.com/unslothai/unsloth/pull/14308 中做出了第一个贡献
* @VTplus 在 https://github.com/unslothai/unsloth/pull/14514 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.909-beta...v0.1.910-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.910-beta` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
