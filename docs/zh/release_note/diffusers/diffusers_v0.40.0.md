---
title: "diffusers v0.40.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-08-20"
type: "minor"
lang: "zh"
---

# diffusers v0.40.0

> [!提示]
> 此版本具有多个新管道，包括 LTX2.5、MiniMax H3 和 Wan Animate 2。我们还将模块化扩散器退出实验阶段并宣布其稳定支持。此外，此版本还包括对张量并行的最低限度支持。此版本中还有很多内容。因此，请参阅注释以了解详细信息。 

## 新管道

### MiniMax-H3

[**MiniMax-H3**](https://huggingface.co/docs/diffusers/main/api/pipelines/minimax_h3) 一起生成视频及其配乐。单个变压器对包含文本调节、调节媒体以及目标视频*和*潜在音频的一个打包序列进行去噪——没有单独的声码器，也没有事后音频通道。它的条件是 `Qwen3VLForConditionalGeneration`，其非标准化的第 50 解码器层隐藏状态被读取而不是最后一个。

MiniMax-H3 仅集成为 [模块化扩散器](https://huggingface.co/docs/diffusers/main/modular_diffusers/overview) 块 - `MiniMaxH3Blocks` 及其 `MiniMaxH3ModularPipeline` 是整体集成。该转换将两个检查点分区发送到一个存储库中，并公开三个工作流程（`t2va`、`fl2va`、`ref2va`），这些工作流程可以在 `from_pretrained` 时间进行修剪，以便仅声明和下载该任务的组件。

### MiniMax 音乐 3

[**MiniMax Music 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/minimax_music3) 可根据歌词和音乐描述生成长达五分钟的完整歌曲，具有富有表现力的声音和长音结构。它是自回归和扩散阶段的混合体：基于 8B Qwen3 的全局语言模型预测每帧一个语义音频标记，而小型深度解码器填充七个剩余 RVQ 码本，它们的融合隐藏状态调节 2.4B 流匹配变压器，该变压器在重叠块中产生 Flow-VAE 潜伏。 DAC 式解码器将潜在音频转换为 44.1 kHz 立体声音频。

### 稳定音频 3

[**Stable Audio 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/stable_audio_3) 是 Stability AI 的文本转音频模型，可生成 44.1 kHz 的高质量立体声音频。它使用以冻结 T5Gemma 文本编码器（通过交叉注意力）和持续时间（`StableAudio3DurationEmbedder` 嵌入的浮点并用于自适应层规范）为条件的整流流 DiT，并使用 SAME（语义对齐音乐编码器）自动编码器 `AutoencoderSAME` 进行解码。

船舶共有三条管道：`StableAudio3Pipeline`、`StableAudio3AudioToAudioPipeline` 和 `StableAudio3InpaintPipeline`。

感谢@buffett0323 的贡献（https://github.com/huggingface/diffusers/pull/14119）。

### LTX-2.5

[**LTX-2.5**](https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2#ltx-25) 重用现有的 `LTX2Pipeline` / `LTX2VideoTransformer3DModel` / `AutoencoderKLLTX2Video` 类 - 没有单独的管道类。用户可见的差异在于文本编码器：LTX-2.5 与 Gemma 4 (`gemma4_unified`) 检查点配对，从转换后的 LTX-2.5 存储库自动加载。

[`Lightricks/LTX-2.5-Diffusers`](https://huggingface.co/Lightricks/LTX-2.5-Diffusers) 提供蒸馏 DiT (`transformer/`) 和完整/SFT DiT (`transformer_full/`)，以及两阶段生成所需的一切。除了检查点支持之外，此版本还添加了：

- `LTX2VideoDiffusionDecoderModel` 和 `LTX2VideoDiffusionDecodePipeline` — 同一潜在空间上的第二个视频解码器，因此潜在空间在解码器之间可以互换。
- `duration_head` 从文本连接器输出预测镜头长度，因此当加载的管道有镜头长度时，默认情况下会自动预测 `num_frames`。
- 通过单独的现成 `google/gemma-4-E2B-it` 检查点 (`enable_prompt_enhancement=True`) 进行提示增强。
- `LTX25AutoBlocks` 用于模块化扩散器（[#14453](https://github.com/huggingface/diffusers/pull/14453)）。

### 万动画-2
阿里巴巴万团队的 [**Wan-Animate-2**](https://huggingface.co/docs/diffusers/main/api/pipelines/wan_animate_2) 使用驾驶视频的运动来制作参考角色图像的动画。驾驶视频以固定长度的片段进行处理：每个片段运行一个参考提取通道，在每个转换器层中缓存驾驶片段的 K/V，针对该缓存进行去噪，并在循环内进行解码，因为下一个片段取决于前一个片段的已解码尾帧。

有两种预设可用 - 具有无分类器指导的基本检查点样本，以及没有分类器指导的几个步骤的蒸馏检查点样本。引导由管道的引导组件拥有，因此没有 `guidance_scale` 参数。

感谢 @kelseyee 编写集成 (https://github.com/huggingface/diffusers/pull/14413)。

### JoyAI-图像-编辑-Plus

[**JoyAI-Image-Edit-Plus**](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit_plus) 将 JoyAI-Image 系列（8B MLLM 与 16B MMDiT 配对）扩展到多图像指令引导编辑。它接受 1-5 个参考图像加上文本指令，并将参考中的元素组合成新图像。

感谢@tangyanf 的贡献（ZZPH100​​ZZ）。

### Cosmos 3 后续行动

[**Cosmos 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3) 登陆 0.39.0 并在此版本中获得更多的覆盖范围：

- [Cosmos 3 模块化管道](https://github.com/huggingface/diffusers/pull/14110) (`Cosmos3OmniModularPipeline`)，具有[传输支持](https://github.com/huggingface/diffusers/pull/14150)，用于预先计算的控制视频（边缘、模糊、深度、分割、世界场景图），以块的形式自回归生成并自动缝合。
- [边缘支撑](https://github.com/huggingface/diffusers/pull/14181)。
- [蒸馏（几个步骤）文本到图像和图像到视频](https://github.com/huggingface/diffusers/pull/14177) 通过 `Cosmos3DistilledModularPipeline`。
- [模型并行度](https://github.com/huggingface/diffusers/pull/14054)。

感谢@yzhautouskay 和@aharvajoshi10 的贡献。

## 模块化管道支持

模块化扩散器 **不再标记为实验性** ([#14525](https://github.com/huggingface/diffusers/pull/14525)) — API 警告已被删除。

- 此版本的三个新集成 — **MiniMax-H3**、**MiniMax Music 3** 和 **Wan-Animate-2** — 仅作为模块化块提供，没有 `DiffusionPipeline` 一半。
- **Cosmos 3** ([#14110](https://github.com/huggingface/diffusers/pull/14110)、[#14150](https://github.com/huggingface/diffusers/pull/14150)、[#14177](https://github.com/huggingface/diffusers/pull/14177)) 和 **Krea 2** ([#14083](https://github.com/huggingface/diffusers/pull/14083)，感谢@Cedric-Perauer）获得了模块化管道，并且 **Anima** 获得了img2img 块（[#13929](https://github.com/huggingface/diffusers/pull/13929)，感谢@PreethamNoelP）。
- **特定于分支的输入默认值** ([#14234](https://github.com/huggingface/diffusers/pull/14234))：当 `ConditionalPipelineBlocks` 的同级块为同一输入声明不同的默认值时，`combine_inputs` 现在将默认值合并到 `None` 并将每个块的默认值记录在新的 `InputParam.defaults_by_block` 字段中。 `get_block_state` 回退到块自己声明的默认值，因此每个分支在实际运行时都会解析自己的默认值。文档字符串呈现冲突的默认值，例如*“默认为 None 或 189，具体取决于工作流程”*。
- [组卸载现在在自动卸载下工作](https://github.com/huggingface/diffusers/pull/14358)，并且修复了[组卸载设备不匹配](https://github.com/huggingface/diffusers/pull/14252)。
- [未使用的 `intermediate_inputs` 已清理](https://github.com/huggingface/diffusers/pull/14278)，[现在在 CI 中检测到过时的自动文档字符串](https://github.com/huggingface/diffusers/pull/14241)，并且[梅隆自定义块所需的输入处理已修复](https://github.com/huggingface/diffusers/pull/13888)。

> [!重要]
> 请尝试模块化扩散器并让我们知道您的反馈！

## 核心库

### 张量并行性

[张量并行推理](https://github.com/huggingface/diffusers/pull/13718) 现在支持 CUDA 和 AWS Neuron (Trainium/Inferentia) 上的模型推理，通过已用于上下文并行性的相同公共 API 公开：

```py
from diffusers import TensorParallelConfig

pipe.transformer.enable_parallelism(config=TensorParallelConfig(mesh=tp_mesh))
```
分片与模型无关，由平面 `_tp_plan` 驱动，该 `_tp_plan` 已添加到 FLUX.1、FLUX.2 和 Qwen-Image DiT 中。 Check out the [docs](https://huggingface.co/docs/diffusers/main/en/training/distributed_inference#tensor-parallelism) for more details.

### 新的量化后端

- [**SDNQ**](https://github.com/huggingface/diffusers/pull/14277) — 免训练后端，支持 int8 低至 2 位、FP8 和其他低位浮点格式，具有可选的 SVD 校正、Hadamard 旋转和量化 INT8/FP8 matmul。在 CUDA、ROCm、XPU、MPS 和 CPU 上运行。 【SDNQ MiniMax-H3加载】(https://github.com/huggingface/diffusers/pull/14398)也登陆了。感谢@asomoza。
- [**Nunchaku Lite**](https://github.com/huggingface/diffusers/pull/14100) for loading prequantized checkpoints, with [fused-kernel performance documented](https://github.com/huggingface/diffusers/pull/14458).感谢@rootonchair。

### 注意，内核和卸载

- [仅当用户请求时才下载内核](https://github.com/huggingface/diffusers/pull/14298)
- [ROCm FlashAttention 现在使用 `kernels-community/aiter-flash-attn-ck` Hub 内核](https://github.com/huggingface/diffusers/pull/14436)，删除了 `aiter` 依赖项。感谢@Abdennacer-Badaoui。
- [Sequence-parallel support for the `_flash_3_varlen_hub` backend](https://github.com/huggingface/diffusers/pull/13809) and a [mask-handling fix](https://github.com/huggingface/diffusers/pull/14115).感谢@zhtmike。
- 【分体式管道`DiffusionPipeline.device`扣除】(https://github.com/huggingface/diffusers/pull/14383)
- [Hook forward signatures are preserved](https://github.com/huggingface/diffusers/pull/14285).感谢@jloftin-nv。

### CLI

`diffusers-cli` 进行了重新设计以供代理使用（[#13966](https://github.com/huggingface/diffusers/pull/13966)），然后进行清理（[#14381](https://github.com/huggingface/diffusers/pull/14381)）：保存自定义块时写入 `modular_model_index.json`，以便 `ModularPipeline.from_pretrained` 可以作为管道加载和运行自定义块，自动 CPU 卸载适用于模块化管道，`workflow` 可以传递给模块化 pipelines, and output saving handles multimodal output (e.g. LTX video frames + audio) and batched video.

Skills are now installed through the CLI rather than the `Makefile` ([#14454](https://github.com/huggingface/diffusers/pull/14454)):

```bash
diffusers-cli skills list
diffusers-cli skills add <skill name>
```

## 🚨 重大变更和弃用

- **JAX/Flax support has been removed** ([#14169](https://github.com/huggingface/diffusers/pull/14169)) — roughly 12k lines deleted. All `Flax*` classes and the `flax` extras are gone.
- **没有 alpha 键的混合等级 LoRA 现在按其预期规模加载** ([#14409](https://github.com/huggingface/diffusers/pull/14409))。以前，`get_peft_kwargs` 从排名字典的第一个条目中获取 `lora_alpha` 并且从未重新访问它，因此排名与第一个键的排名不同的每个模块都会获得任意的、依赖于键顺序的比例。当检查点没有带来 alpha 信息时，等级现在会镜像到 alpha 中（扩散器/PEFT 约定：alpha == 等级，比例 1.0）。具有声明的 alpha 的适配器保留它，统一等级的适配器不受影响。 Existing mixed-rank, no-alpha LoRAs will now produce different (correct) results.
- **`torch_dtype` is deprecated in favour of `dtype`** ([#14205](https://github.com/huggingface/diffusers/pull/14205), [#14313](https://github.com/huggingface/diffusers/pull/14313)), following `transformers`. `torch_dtype` still works but warns, and will be removed in 1.0.0. A [`torch.dtype` alias](https://github.com/huggingface/diffusers/pull/14162) was added for the docs.
- **DDUF 已弃用** ([#14141](https://github.com/huggingface/diffusers/pull/14141))。 `dduf_file` warns and will be removed in **0.41.0**.

## 安全

- [Fixed a path-traversal / arbitrary out-of-directory file read via sharded checkpoint index files](https://github.com/huggingface/diffusers/pull/14182).感谢@buffett0323。
- [添加了 `SECURITY.md`](https://github.com/huggingface/diffusers/pull/14174)。

## 培训

- [Krea 2 和 Qwen-Image LoRA 脚本的字幕丢失和宽高比存储桶](https://github.com/huggingface/diffusers/pull/14089)，以及 [DreamBooth 脚本中的宽高比存储桶修复和动态存储桶](https://github.com/huggingface/diffusers/pull/14158)。感谢@linoytsaban。
- [Krea 2 LoRA cards are tagged with the Turbo base model first](https://github.com/huggingface/diffusers/pull/14171) so the inference widget works.
## 洛拉

- [ACE-Step LoRA 支持](https://github.com/huggingface/diffusers/pull/14193)。感谢@chenyangzhu1。
- [Fix LoRA hot-swapping recompilation with `different_shapes_for_compilation`](https://github.com/huggingface/diffusers/pull/14297).感谢@jiqing-feng。
- [只有在所有组件均未熔断时才从 `_merged_adapters` 上取下适配器](https://github.com/huggingface/diffusers/pull/14385)。
- [修复离线模式下本地LoRA权重自动发现](https://github.com/huggingface/diffusers/pull/14204)。感谢@fropych。

## 值得注意的修复

- [修复 Kandinsky 5 I2V 调节](https://github.com/huggingface/diffusers/pull/14282) — 图像潜伏不再注入 `visual_cond` 通道。
- [修复批量 DiffusionGemma 自适应停止](https://github.com/huggingface/diffusers/pull/14386)
- [修复 Cosmos 3 的图像预处理](https://github.com/huggingface/diffusers/pull/14519) 和 [Cosmos 3 边缘生成器 K 归一化](https://github.com/huggingface/diffusers/pull/14246)
- [修复 AuraFlow 模型并行设备不匹配](https://github.com/huggingface/diffusers/pull/14273) 和 [管道重用时的 AuraFlow VAE 数据类型不匹配](https://github.com/huggingface/diffusers/pull/14184)
- [使 `WanTransformer3DModel`](https://github.com/huggingface/diffusers/pull/14236) 和 [`SD3Transformer2DModel`](https://github.com/huggingface/diffusers/pull/14186) 隐藏状态连续
- [修复整流流时间调度程序](https://github.com/huggingface/diffusers/pull/14011)
- [修复 Helios 自动卸载解码](https://github.com/huggingface/diffusers/pull/14140)
- [Align `snapshot_download` with the latest `huggingface_hub`](https://github.com/huggingface/diffusers/pull/14118)
- [通过顺序卸载减少 FLUX int8 测试峰值内存](https://github.com/huggingface/diffusers/pull/13776)

## 测试和基础设施

此版本的很大一部分是测试现代化：管道测试继续迁移到新的 mixin 结构（Wan、Qwen-Image、FLUX.2、CogVideoX、Stable Diffusion 和 LoRA 管道测试）、`tests/others`、训练测试和注意力处理器测试移至 `pytest`、模型级和管道级量化测试标准化，并在管道测试中引入了 `output_shape` 属性。 The agent-facing docs and skills under `.ai/` were expanded to cover tests, model implementation, and blockset conventions. 

## 所有提交

* Fix model offloading and training tests + prevent examples timeout by @GiGiKoneti in #14091
* fix `_flash_3_varlen_hub` mask handling by @zhtmike in #14115
* 通过 @mishig25 在 #14131 中使文档构建速度更快
* [测试] 修复 autoencoderdc ml 训练修复。由 @sayakpaul 在 #14129
* [tests] fix tests for transformers latest stable.由 @sayakpaul 在 #14120
* fix rf time scheduler problem by @TheLovesOfLadyPurple in #14011
* docs: improve docstring scheduling_lcm.py by @delmalih in #14133
* feat: add JoyImage edit plus by @tangyanf in #14032
* update licensing for others to 2026. by @sayakpaul in #14128
* [fix] missing doc-builder imports by @stevhliu in #14134
* add SP support for `_flash_3_varlen_hub` backend by @zhtmike in #13809
* @sayakpaul 在 #14116 中发布 v0.39.0 后
* 弃用 dduf。作者：@sayakpaul（直接提交于 v0.40.0-release）
* 恢复“弃用 dduf”。作者：@sayakpaul（直接提交于 v0.40.0-release）
* docs: improve docstring scheduling_scm.py by @delmalih in #14136
* Cosmos3 ModularPipeline by @yzhautouskay in #14110
* docs: improve docstring scheduling_sasolver.py by @delmalih in #14148
* 修复了 @pzarzycki 在 #14140 中的 Helios 自动卸载解码
* docs: improve docstring scheduling_sde_ve.py by @delmalih in #14172
* 在 #14100 中添加 @rootonchair 的 Nunchaku Lite 单文件量化
* @yzhautouskay 在 #14150 中转移对 Cosmos3 ModularPipeline 的支持
* torch.dtype 别名，由 @stevhliu 在 #14162 中提供
* 要求分享@yiyixuxu 在 #14185 中的自我审查笔记
* 通过 @menglcai 在 #14186 中使 `SD3Transformer2DModel` 隐藏状态连续
* 调整 snapshot_download 以尊重 @sayakpaul 在 #14118 中的 hfh 最新版本
* [技能] 在我们的技能中添加关于模型实现的注释。由 @sayakpaul 在 #14191
* [lora 训练] 使用 Turbo 基础模型标记 krea2 LoRA 卡，首先启用 @linoytsaban 在 #14171 中的推理小部件
* docs: improve docstring scheduling_tcd.py by @delmalih in #14192
* 文档：通过@delmalih 在#14196 中改进文档字符串scheduling_unclip.py
* docs: improve docstring scheduling_repaint.py by @delmalih in #14199
* [核心] 在 #14141 中弃用 @sayakpaul 的 dduf
* 修复本地 LoRA 权重在离线模式下自动发现的问题，由 @fropych 在 #14204 中修复
* Add tests and agent docs for `kwargs_type` input/output by @yiyixuxu in #14157
* [Anima] 在 #13929 中添加 @PreethamNoelP 的 img2img 管道块
* update agent doc to cover more on tests + include it in review CI scope by @yiyixuxu in #14197
* Cosmos3 edge support by @atharvajoshi10 in #14181
* Fixing path traversal/arbitrary out-of-directory file read via sharde… by @buffett0323 in #14182
* 根据内部通知添加 security.md。 by @sayakpaul in #14174
* [量化] 修复 @yzhautouskay 在 #14188 中的 ModelOpt 预量化加载
* [测试] 由 @sayakpaul 在 #14113 中进行的管道测试重构
* docs: improve docstring scheduling_k_dpm_2_discrete.py by @delmalih in #14212
* @yzhautouskay 在 #14177 中对 Cosmos3 进行了蒸馏支持
* 将 not_params 添加到 ModularPipelineTesterMixin，由@yiyixuxu 在 #14207 中添加
* [agents doc] 关于何时为检查点变体创建新块集的注释，由 @yiyixuxu 在 #14208 中编写
* Fix AuraFlow VAE dtype mismatch on pipeline reuse by @IvenHsu01 in #14184
* [tests] fix autoencoderkl dtype tests by @sayakpaul in #14190
* refactor qwenimage pipeline tests to the new mixin structure by @akshan-main in #14220
* Add ace step lora support by @chenyangzhu1 in #14193
* [skills] update test skills for standard pipelines. by @sayakpaul in #14223
* 在 #14236 中 @menglcai 使 `WanTransformer3DModel` 隐藏状态在块循环之前连续
* refactor wan 2.2 image-to-video pipeline tests to the new mixin structure by @akshan-main in #14242
* 将 wan vace 管道测试重构为新的 mixin 结构（由 @akshan-main 在 #14231 中编写）
* 将 wan 2.2 管道测试重构为 @akshan-main 在 #14240 中的新 mixin 结构
* 将 wan 图像到视频管道测试重构为 @akshan-main 在 #14228 中的新 mixin 结构
* refactor wan pipeline tests to the new mixin structure by @akshan-main in #14224
* 将 wan 视频到视频管道测试重构为 @akshan-main 在 #14235 中的新 mixin 结构
* refactor wan animate pipeline tests to the new mixin structure by @akshan-main in #14239
* 修复 @sywangyi 在 #13892 中的 test_pag_sdxl::StableDiffusionXLPAGPipelineIntegrationTests
* [杂务] 从 lora 模块中删除实验性 api 警告。 by @sayakpaul in #14248
* [tests] fix cosmos3 tests by @sayakpaul in #14229
* 在 #14246 中由 @aharvajoshi10 修复 Cosmos3 Edge 生成器 K 标准化
* [核心] 弃用`torch_dtype`，更喜欢`dtype`以下变压器。 by @sayakpaul in #14205
* 在 #14169 中通过 @DN6 删除 JAX/Flax
* [测试] 端口注意处理器测试使用 @sayakpaul 在 #14161 中的 pytest
* [模块化扩散器] 修复@asomoza 在 #14252 中的组卸载设备不匹配问题
* [lora 训练] 修复 dreambooth 脚本中的宽高比分桶（+ 字幕丢失、动态分桶），由 @linoytsaban 在 #14158 中完成
* 通过@jiqing-feng 在 #13776 中通过顺序卸载减少 FLUX int8 测试峰值内存
*更新`diffusers-cli`以供@DN6在#13966中代理使用
* [模块化] 检测 CI 中过时的自动文档字符串 + 通过 @yiyixuxu 在 #14241 中重新生成当前文档字符串
* 修复了 @sywangyi 在 #14269 中的 Wan 和 Motif 视频管道快速测试失败问题
* Krea2 模块化管道支持、文档、测试用例，作者：@Cedric-Perauer，#14083
* [ci] 忽略 vq_diffusion 转换器中的标记。由 @sayakpaul 在 #14275
* Cosmos3 模型并行性，作者：@atharvajoshi10，#14054
* [测试] @sayakpaul 在 #13961 中进行的组件管理器测试
* [模块化] 清理#14278中@yiyixuxu未使用的intermediate_inputs
* 将 cogvideox 视频到视频管道测试重构为 @akshan-main 在 #14289 中的新 mixin 结构
* @akshan-main 在 #14276 中将 cogvideox 管道测试重构为新的 mixin 结构
* 将 cogvideox 图像到视频管道测试重构为 @akshan-main 在 #14283 中的新 mixin 结构
* 将 cogvideox 有趣的控制管道测试重构为 @akshan-main 在 #14284 中的新 mixin 结构
* [测试] 将训练测试迁移到 pytest。由 @sayakpaul 在 #14267
* [测试] 修复@sayakpaul 在 #14302 中的一些 CLI 命令测试
* [lora 训练] 将标题 dropout 和宽高比桶添加到 krea2 和 qwen-image by @linoytsaban in #14089
* 在 #14306 中添加了 @charchit7 的技术博客
* [核心] 根据标头大小限制量化配置的日志记录。由 @sayakpaul 在 #14262
* 文档：通过@delmalih 在#14226 中改进文档字符串scheduling_k_dpm_2_ancetstral_discrete.py
* [文档] 添加有关 device_map='cuda' 用法的警告注释。由 @sayakpaul 在 #14261
* [文档] @sayakpaul 在 #14301 中对量化表概述进行了小幅更正
* [文档] 在 #14313 中@stevhliu 弃用 torch_dtype 作为 dtype
* 将 qwenimage controlnet 管道测试重构为 @akshan-main 在 #14309 中的新 mixin 结构
* 将 qwenimage 编辑加上管道测试重构为 @akshan-main 在 #14315 中的新 mixin 结构
* 将 qwenimage 编辑管道测试重构为 @akshan-main 在 #14314 中的新 mixin 结构
* 保留 @jloftin-nv 在 #14285 中的钩子前向签名
* 通过 @jiqing-feng 在 #14297 中使用 `different_shapes_for_compilation` 修复 LoRA 热插拔重新编译
* 将 qwenimage img2img 管道测试重构为 @akshan-main 在 #14320 中的新 mixin 结构
* [文档] 删除@stevhliu 在 #14310 中的图像生成基准
* 文档：通过@delmalih 在#14319 中改进文档字符串scheduling_ddpm_wuerstchen.py
* [文档] 由 @stevhliu 在 #14312 中更新代理贡献指南
* [测试] 在 #14257 中统一 @sayakpaul 量化测试套件中的 keep_in_32 测试
* [量化] @asomoza 在 #14277 中加载 SDNQ 核心
* 文档：改进文档字符串调度文件夹 - 最后一批由 @delmalih 在 #14330 中完成
* 模块化分支特定默认值由 @yiyixuxu 在 #14234 中提供
* 修复 Mellon 自定义块所需的输入处理，由 @wunianze666-netizen 在#13888 中修复
* gguf：修复反量化。由 @sayakpaul 在 #14333
* [测试] 通过 @sayakpaul 在 #14332 中标准化模型级定量测试
* 通过 @4ktLuffy 在 #14354 中将缺少的 `Args:` 条目添加到调度程序文档字符串中
* 支持@yiyixuxu 在#14358 自动卸载下的组卸载
* 将 Flux2 klein inpaint 管道测试重构为 @akshan-main 在 #14337 中的新 mixin 结构
* [kernels] 当用户请求时下载内核。由 @sayakpaul 在 #14298
* 将 Flux2 Klein 管道测试重构为 @akshan-main 在 #14336 中的新 mixin 结构
* 将 Flux2 klein kv 管道测试重构为 @akshan-main 在 #14344 中的新 mixin 结构
* 通过@yiyixuxu 在 #14343 中的远程代码指导自动回复新模型请求
* 在 #14202 中添加 @jiqing-feng 为 `SlowBnb4BitFluxControlWithLoraTests::test_lora_loading` 设计的 XPU 预期切片
* [测试] 将`tests/others`迁移到`pytest`。 by @sayakpaul in #14299
* [Kandinsky 5] 修复 I2V 调节：不要将图像潜在注入到 Visual_cond 通道中，@sashakunitsyn 在 #14282 中
* 在 #14369 中@akshan-main 的迁移管道测试中使用assert_tensors_close
* 在 #14355 中添加 @apolinario 的 MiniMax-H3
* [量化] SDNQ Minimax H3 由 @asomoza 在 #14398 中加载
* 将 qwenimage inpaint 管道测试重构为 @akshan-main 在 #14321 中的新 mixin 结构
* @akshan-main 在 #14326 中将 Flux2 管道测试重构为新的 mixin 结构
* [测试] 在管道测试中引入`output_shape`属性。 by @sayakpaul in #14253
* 将 MiniMax-H3 文档安装说明指向 main by @apolinario in #14401
* [核心] 支持h3中的cp。 by @sayakpaul in #14407
* [测试] @sayakpaul 在 #14406 中对 `unload_components()` 进行严格测试
* [测试] 在 #14404 中 @sayakpaul 的 H3 后续模块化测试中实现待办事项
* [测试] 修复 @sayakpaul 在 #14258 中的 torchao 测试
* 修复（lora）：仅当 @AloysJehwin 在 #14385 中从所有组件中取消融合时，才从 _merged_adapters 中删除适配器
* [测试] @sayakpaul 在 #14434 中的 test_lora_loader_utils 中保护 peft 导入
* [核心] `DiffusionPipeline.device` 分体设备管道推导 by @JingyaHuang in #14383
* 🚨 在 #14409 中@apolinario 为没有 alpha 键的混合等级 LoRA 提供其预期的规模
* Ltx 2.5 by @sayakpaul 在 #14447
* 文档：添加@mfuntowicz 在 #14448 中针对 NVIDIA Spark (ARM64) 设备的安装说明
* Wan-Animate-2（作者：@kelseyee），作者：@yiyixuxu，#14413
* 通过@dg845 在 #14453 将 `LTX25AutoBlocks` 移动到具有新型号名称的新文件
* [测试] 加强 @sayakpaul 在 #14399 中的 keep_in_32 模块测试
* 修复 AuraFlow 模型并行设备不匹配并更新 XPU IP-Adap…由 @sywangyi 在 #14273 中
*壮举：清理peft相关的版本控制巫毒。 by @sayakpaul in #14463
* 文档：@rootonchair 在 #14458 中记录 Nunchaku Lite 指南中的融合内核性能
* [Agent 文档] 根据@yiyixuxu 在 #14452 中最近的集成进行了一些更新
* [CI][测试]修复LTX-2.5 Diffuson解码器平铺CI CPU超时由@dg845在＃14462
* 在 #14456 中添加 @apolinario 的 MiniMax Music 3
* 在 #14408 中添加 @apolinario 对 MiniMax-H3 的 LoRA 加载支持
* [FA2] 使用 `kernels-community/aiter-flash-attn-ck` Hub 内核进行 ROCm FlashAttention（删除 `aiter` 依赖项），由 @Abdennacer-Badaoui 在 #14436 中编写
* @sayakpaul 在 #14444 中将模块化管道中的测试分开
* svd failures.作者：@sayakpaul（直接提交于 v0.40.0-release）
* Revert "svd failures."作者：@sayakpaul（直接提交于 v0.40.0-release）
* 将 /examples/flux-control 中的 Bump 变压器从 4.47.0 更改为 5.5.0，作者为 @dependabot[bot]，位于 #14179
* 修复 LoRA 测试关于 @BenjaminBossan 在 #14476 中意外按键的警告
* [测试] 在 t5 上使用 eval() 以获得确定性结果。 by @sayakpaul in #14472
* 测试：修复 qwen 测试，避免在我们的 CI 中出现 oom'd。 by @sayakpaul in #14474
* 修复@sayakpaul 在 #14475 中的 SVD 测试
* 测试：修复cuda模型测试。 by @sayakpaul in #14464
* ci：删除过时的标记器<0.23.0 由@sayakpaul 在#14504 中覆盖
* 删除 #14525 中@yiyixuxu 的模块化扩散器的实验警告
* [测试] 跳过某些模型的并行性测试。由 @sayakpaul 在 #14505
* 在 #14386 中修复 @kashif 批量 DiffusionGemma 自适应停止问题
* 文档：修复 @iridescentWen 在 #14345 中的 Kandinsky 5.0 视频文档中的拼写错误
* 支持 DiffSynth-Studio MiniMax-H3 LoRA by @apolinario in #14484
* [测试] 由 @sayakpaul 在 #14339 中重构稳定的扩散管道测试
* [测试] 由 @sayakpaul 在 #14435 中重构管道级量化测试
* 将 krea2 的enable_gpa替换为repeat_interleave，作者为@yiyixuxu，在#14523中
* [CLI] @DN6 在 #14381 中对扩散器 CLI 进行清理和改进
* [CI] 允许单文件测试与 #14324 中的@DN6 的快速测试一样运行
* 壮举——稳定音频 3，作者：@buffett0323，#14119
* [核心] 支持模型推理（CUDA、Neuron）的张量并行，作者：@JingyaHuang 在#13718
* [CI] 修复 #14534 中 @DN6 对分叉 PR 的身份验证
* 修复：@aharvajoshi10 在 #14519 中对 cosmos3 进行图像预处理
* [测试] 迁移管道的 lora 测试以使用 @sayakpaul 在 #14268 中的新 mixins
* [分布式]修复环CP下梯度损坏的问题。由 @sayakpaul 在 #14274
* 重组基于 CLI 的安装的技能文件和参考指南。由 @DN6 在 #14454 中提供
* [CI] 通过@DN6 在 #14543 中修复发布工作流程中的构建和测试步骤
* 发布：@sayakpaul 的 v0.40.0-release（在 v0.40.0-release 上直接提交）

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.40.0` · 📅 发布：2026-08-20 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.40.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
