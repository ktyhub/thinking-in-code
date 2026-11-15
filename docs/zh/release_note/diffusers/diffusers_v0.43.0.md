---
title: "diffusers v0.43.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.43.0"
version: "v0.43.0"
published: "2026-11-12"
type: "minor"
lang: "zh"
---

# diffusers v0.43.0

> [!提示]
> 此版本添加了五个模块化模型集成，用于图像生成、编辑、音频视频、语音驱动动画和世界模拟。它还改进了注意力后端、张量并行性、LoRA 处理和检查点保存。

## MiniMax-H3-图像

MiniMax-H3-Image 支持使用一张或多张参考图像生成文本到图像并进行编辑。该集成包括专用图像转换器和自动编码器，具有固定的六步采样计划和精炼指导。单独的提示增强工作流程可扩展简短的请求并建议宽高比。

通过`ModularPipeline.from_pretrained(...)`加载它，然后调用`load_components(...)`。 [MiniMax-H3-Image 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/minimax_h3_image) 涵盖参考图像提示、输出大小、提示增强和组件卸载。

## 皮卡 H3 Flex

Pika H3 Flex 基于 MiniMax-H3 构建，可通过六个步骤生成视频和同步立体声音频。它通过单独的模块化工作流程支持文本提示、第一帧和/或最后一帧以及多模式引用。该集成包括 LoRA 适配器加载以及在两个管道之间共享已加载的 MiniMax-H3 组件的指南。

有关工作流程选择、适配器加载和组件重用的信息，请参阅 [Pika H3 Flex 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/pika_h3_flex)。

## P-H3-图像

Pruna AI 的 P-H3-Image 提供文本到图像生成和基于指令的编辑，最多可处理八个输入图像。其模块化管道包括一个提示上采样器，可将请求转换为详细的生成或编辑提示、图像自动编码器和文本连接器。检查点使用八个采样步骤和精炼指导。

有关图像大小调整、参考图像编辑、提示上采样和卸载的信息，请参阅 [P-H3-图像文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/p_h3_image)。感谢 @nifleisch 在 [#15171](https://github.com/huggingface/diffusers/pull/15171) 中的集成。

## 康定斯基 S2V 1.0

Kandinsky S2V 1.0 根据参考图像和语音录音制作人物动画，包括与语音对齐的全身运动。它以五秒块的形式生成视频，并在块之间携带 FramePack 内存。提供的语音提供配乐；模型生成视频。

模块化集成支持 Lite 和 Pro 检查点，包括使用 `PiflowScheduler` 的精简变体，默认为 16 个步骤。有关音频准备、检查点设置和内存要求，请参阅 [Kandinsky S2V 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/kandinsky_s2v)。感谢@nvsm 在#15164 中的集成。

## 潘 2

PAN 2 根据描述动作和摄像机随时间移动的提示来模拟场景。该版本通过文本到视频和图像到视频模块化工作流程集成了 29B 生成模拟器。支持上下文并行性以及 FirstBlockCache、MagCache 和 TaylorSeer 缓存。默认情况下启用提示和视频安全检查，并且需要单独的 `pan2-guardrail` 软件包。

有关加载、护栏和分布式推理的信息，请参阅 [PAN 2 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/pan2)。集成涵盖了模拟器；编写其提示的单独推理模型是从模型文档链接的。感谢@wu-qing-157 在#15202 中的集成。

### 其他亮点
- **MiniMax-H3 张量并行性：** 将变压器跨设备分片，包括其大型调制投影。在张量并行加载期间，复制的参数也保留其预期的数据类型。请参阅：[#14609](https://github.com/huggingface/diffusers/pull/14609)、[#15147](https://github.com/huggingface/diffusers/pull/15147)。
- **AMD 注意力支持：** 新的 `aiter_sage_hub` 后端将 Hub 托管的 SageAttention 内核引入 RDNA4 gfx1201 GPU，并针对不支持的输入形状提供本机 SDPA 回退。请参阅#15060。
- **注意后端修复：** 在一个模型上选择后端不再更改不相关模型的后端。现在，各个注意力模块在选择后端时会检查要求并下载 Hub 内核，并且 FlashAttention-2 集成可与较新的 Hub 内核版本配合使用。参见#14335、#15000。
- **LoRA 修复：** 组件权重字典现在可以在多个适配器之间正确广播，并且 Kohya 文本编码器 LoRA 保留其每个模块的 alpha 值。适配器权重文档和类型提示也阐明了支持的格式。请参阅：#15128、#15157。
- **检查点保存：** `save_pretrained()` 在用单文件检查点替换分片检查点时保留其他变体的分片并删除过时的索引。请参阅 [#14844](https://github.com/huggingface/diffusers/pull/14844)。
- **模块化缓存：** 有状态缓存挂钩在每次管道调用（包括引发异常的调用）后重置，因此后续生成从新的缓存状态开始。请参阅 [#15212](https://github.com/huggingface/diffusers/pull/15212)。
- **训练示例：** 修复文本到图像 LoRA 和 SDXL LCM LoRA 脚本中的梯度 clipping，更新当前 Transformers 的 FLUX 量化嵌入准备，并删除导致 `--revision` 训练崩溃的过期弃用块。请参阅：[#15184](https://github.com/huggingface/diffusers/pull/15184)、[#15144](https://github.com/huggingface/diffusers/pull/15144)、[#15118](https://github.com/huggingface/diffusers/pull/15118)。
- **文档：**重新组织了分布式推理指南，更新了本机 TorchNeuron 的 AWS Trainium 示例，并更正了 Cosmos3 FP8 检查点位置。请参阅：[#15172](https://github.com/huggingface/diffusers/pull/15172)、[#15138](https://github.com/huggingface/diffusers/pull/15138)、[#15236](https://github.com/huggingface/diffusers/pull/15236)。

### 弃用和兼容性

- **依赖项检查：**可用性检查现在强制执行支持的依赖项版本。低于支持的最低限度的已安装软件包将被视为不可用，并显示升级消息。例如，这些检查现在强制执行现有的 `torch>=2.6` 和 `transformers>=4.41.2` 最小值。 ([#15148](https://github.com/huggingface/diffusers/pull/15148))
- **重新定位的模型组件：** 潜在升级器和条件嵌入器移动到 `diffusers.models` 下。现有检查点仍然可加载，而旧的管道模块导入已被弃用并在 1.0.0 中删除。使用公共导入，例如 `from diffusers import LTX2TextConnectors`。请参阅：[#15111](https://github.com/huggingface/diffusers/pull/15111)。
- **模块化输入默认值：** 显式传递 `None` 会保留该值。省略的输入接收读取它们的第一个块的默认值。声明为必需且具有非 `None` 默认值的 `InputParam` 被视为可选并发出警告。请参阅：[#15135](https://github.com/huggingface/diffusers/pull/15135)、[#14521](https://github.com/huggingface/diffusers/pull/14521)。
- **训练行为：** `--max_grad_norm` 现在在受影响的 LoRA 示例中生效。因此，以高于 clipping 阈值的梯度运行的行为可能与早期版本不同。请参阅：[#15184](https://github.com/huggingface/diffusers/pull/15184)。
- **组件加载：**存储库配置不再导致任意组件库导入。受支持的库集之外的自定义组件模块必须已由调用者导入，并且模块化自定义块加载会在处理要求之前检查远程代码 trust。请参阅：[3076605](https://github.com/huggingface/diffusers/commit/30766058a7364244d0bdf5d3bc476a64a687243f)。

感谢所有贡献代码、文档、评论和问题报告的人！

## 所有提交

- 从 @A-Raphie 在 [#15118](https://github.com/huggingface/diffusers/pull/15118) 中的训练示例中删除过期的 non_ema_revision 弃用块。
- 由 @sywangyi 在 [#15039](https://github.com/huggingface/diffusers/pull/15039) 中将 CLI 编译和注意力后端测试扩展到其他设备。
- 修复了@gorkadabo1 在 [#15128](https://github.com/huggingface/diffusers/pull/15128) 中的共享 LoRA 组件权重广播。
- [代理文档] 更喜欢命名参数而不是 @yiyixuxu 在 [#15129](https://github.com/huggingface/diffusers/pull/15129) 中的嵌套字典。
- 当 InputParam 既是必需的又具有默认值时：设置 required = False 并由 @yiyixuxu 在 [#14521](https://github.com/huggingface/diffusers/pull/14521) 中发出警告。
- 限制存储库指定的组件导入，并在[3076605](https://github.com/huggingface/diffusers/commit/30766058a7364244d0bdf5d3bc476a64a687243f)中@LinZiyuu和@DN6的要求之前检查自定义块trust。
- 修复了 @sywangyi 在 [#15086](https://github.com/huggingface/diffusers/pull/15086) 中的 Marigold 内在集成测试。
- [核心]将潜在的升级器和条件嵌入器从[#15111](https://github.com/huggingface/diffusers/pull/15111)中的@sayakpaul移出管道。
- [CI] 在 [#15106](https://github.com/huggingface/diffusers/pull/15106) 中通过 @DN6 使用 HF Trusted 发行商 OIDC 代币。
- [文档] AWS Trainium：由 @JingyaHuang 在 [#15138](https://github.com/huggingface/diffusers/pull/15138) 中重写本机 TorchNeuron 支持指南。
- 由 @Shan2L 在 [#15060](https://github.com/huggingface/diffusers/pull/15060) 中为 AMD RDNA4 (gfx1201) 添加 `aiter_sage_hub` 关注后端。
- 修复：@AloysJehwin 在 [#14844](https://github.com/huggingface/diffusers/pull/14844) 中将 save_pretrained 碎片清理范围限制为已保存的变体（避免删除另一个变体的碎片）。
- Pika h3 flex 由 @yiyixuxu 在 [#15150](https://github.com/huggingface/diffusers/pull/15150) 中。
- [文档] Pika H3 Flex：在 [#15153](https://github.com/huggingface/diffusers/pull/15153) 中添加 @yiyixuxu 关于重用 minimax h3 组件的部分。
- [组件管理器] 当组件再次注册时：警告 -> 由 @yiyixuxu 在 [#15152](https://github.com/huggingface/diffusers/pull/15152) 中进行调试。
- 由 @kahlun 在 [#15144](https://github.com/huggingface/diffusers/pull/15144) 中修复/通量 lora 量化计算嵌入。
- 由 @nvsm 在 [#15164](https://github.com/huggingface/diffusers/pull/15164) 中添加 Kandinsky S2V 1.0（语音转视频）作为模块化管道。
- 在 [#15171](https://github.com/huggingface/diffusers/pull/15171) 中添加 @nifleisch 的 P-H3-Image。
- 修复 @raghulchandramouli 在 [#14335](https://github.com/huggingface/diffusers/pull/14335) 中跨模型的注意力后端泄漏问题。
- 文档：仅构建英语，其他语言由@mishig25在[#15149](https://github.com/huggingface/diffusers/pull/15149)中机器翻译。
- [核心] 在 [#15075](https://github.com/huggingface/diffusers/pull/15075) 中@deep1blue 在 AttentionModuleMixin.set_attention_backend 中下载 hub 内核。
- [文档] 由 @mlzerotoheroyoutube 在 [#15174](https://github.com/huggingface/diffusers/pull/15174) 中修复 docs/source/en 中的 22 个死外部链接。
- 由 @gorkadabo1 在 [#15157](https://github.com/huggingface/diffusers/pull/15157) 中澄清 LoRA 适配器重量文档和类型提示。
- 通过@yzhautouskay 在 [#15147](https://github.com/huggingface/diffusers/pull/15147) 中修复张量并行加载期间的复制参数数据类型。
- [示例] 由 @gorkemgul 在 [#15184](https://github.com/huggingface/diffusers/pull/15184) 中修复 `train_text_to_image_lora.py` 和 `train_lcm_distill_lora_sdxl.py` 中的梯度 clipping。
- [feat] MiniMax-H3 的张量并行性，由 @JingyaHuang 在 [#14609](https://github.com/huggingface/diffusers/pull/14609) 中实现。
- 修复了 [#15151](https://github.com/huggingface/diffusers/pull/15151) 中 @sarankumar1325 移动和重命名文件的过时链接。
- 代理：在建模参考中添加关于 _tp_plan 的部分。作者：@sayakpaul，[#15194](https://github.com/huggingface/diffusers/pull/15194)。
- @sayakpaul 在 [#15198](https://github.com/huggingface/diffusers/pull/15198) 中更改了样式。
- [docs/CI] 贡献指南更新，在问题模板上添加上下文项，更新@yiyixuxu 在 [#15179](https://github.com/huggingface/diffusers/pull/15179) 中的问题链接提醒。
- 将剩余的论坛链接替换为 [#15200](https://github.com/huggingface/diffusers/pull/15200) 中 @yiyixuxu 的 GitHub 讨论。
- [模块化] 填充读取它的第一个块中缺失的输入，在 [#15135](https://github.com/huggingface/diffusers/pull/15135) 中保留 @yiyixuxu 传递的 None。
- 由 @yiyixuxu 在 [#15201](https://github.com/huggingface/diffusers/pull/15201) 中将 hf-doc-builder 固定到 0.6.0。
- [ci]：解决训练 e 示例问题的 protobuf 问题。作者：@sayakpaul，[#15206](https://github.com/huggingface/diffusers/pull/15206)。
- 在 [#15212](https://github.com/huggingface/diffusers/pull/15212) 中@yiyixuxu 每次调用 ModularPipeline 后重置状态缓存挂钩。
- [文档] 不鼓励模块化存储库的交叉存储库引用。作者：@sayakpaul，[#15081](https://github.com/huggingface/diffusers/pull/15081)。
- [模块化] 在 [#15202](https://github.com/huggingface/diffusers/pull/15202) 中添加 @wu-qing-157 的 PAN 2。
- 修复：更喜欢[#15000](https://github.com/huggingface/diffusers/pull/15000)中@drbh的最新Flash attn2。
- MiniMax H3 图片由 @sayakpaul 在 [#15230](https://github.com/huggingface/diffusers/pull/15230) 中提供。
- [文档] @stevhliu 在 [#15172](https://github.com/huggingface/diffusers/pull/15172) 中的分布式推理。
- 由 @Hisernberg 在 [#15231](https://github.com/huggingface/diffusers/pull/15231) 中的 create_dataset 文档中更新已失效的 Kaggle Cats vs Dogs 下载 URL。
- 碰撞文档构建器以在 [#15223](https://github.com/huggingface/diffusers/pull/15223) 中的@mishig25 的文档字符串描述中呈现数学。
- 修复了 [#15238](https://github.com/huggingface/diffusers/pull/15238) 中 @yiyixuxu 的 PAN 2 上下文并行文档链接。
- 将 Cosmos3 Nano、Super 和 Edge FP8 记录为 @ConstBob 在 [#15236](https://github.com/huggingface/diffusers/pull/15236) 中的独立存储库。
- [核心] 在 [#15148](https://github.com/huggingface/diffusers/pull/15148) 中@DN6 强制执行可用性检查中支持的最低版本。
- 修复：由@akhil9tiet 在 [#14972](https://github.com/huggingface/diffusers/pull/14972) 中从 LoRA 模块名称派生文本编码器 alpha_pattern 键。
- [杂务] 删除烟雾测试文件。作者：@sayakpaul，作者：[#15160](https://github.com/huggingface/diffusers/pull/15160)。
- [杂务] 更新模型的返回类型注释。作者：@sayakpaul，[#15089](https://github.com/huggingface/diffusers/pull/15089)。
- 0.42.0 发布后。作者：@sayakpaul，[#15243](https://github.com/huggingface/diffusers/pull/15243)。
- 发布：v0.43.0-release，作者：@sayakpaul（[发布提交](https://github.com/huggingface/diffusers/commit/423ab90580b2847998591669b8326f47b6d14d8b)）。

## 重大社区贡献

- @nifleisch：P-H3-图像生成、编辑和提示上采样。 ([#15171](https://github.com/huggingface/diffusers/pull/15171))
- @nvsm：Kandinsky S2V 1.0 语音驱动视频生成。 ([#15164](https://github.com/huggingface/diffusers/pull/15164))
- @wu-qing-157：PAN 2 模块化视频生成和世界模拟。 ([#15202](https://github.com/huggingface/diffusers/pull/15202))
- @Shan2L：AMD RDNA4 SageAttention 后端。 ([#15060](https://github.com/huggingface/diffusers/pull/15060))
- @raghulchandramouli、@deep1blue 和 @drbh：attention 后端隔离、Hub 内核加载和 FlashAttention-2 兼容性。 ([#14335](https://github.com/huggingface/diffusers/pull/14335)、[#15075](https://github.com/huggingface/diffusers/pull/15075)、[#15000](https://github.com/huggingface/diffusers/pull/15000))
- @gorkadabo1 和 @akhil9tiet：LoRA 权重广播、文档和文本编码器 alpha 处理。 ([#15128](https://github.com/huggingface/diffusers/pull/15128)、[#15157](https://github.com/huggingface/diffusers/pull/15157)、[#14972](https://github.com/huggingface/diffusers/pull/14972))
- @AloysJehwin 和 @yzhautouskay：检查点变量保存和张量并行加载精度。 （[#14844]（https://github.com/huggingface/diffusers/pull/14844），[#15147]（https://github.com/huggingface/diffusers/pull/15147））
- @gorkemgul、@kahlun 和 @A-Raphie：梯度 clipping、量化嵌入准备和训练启动修复。 ([#15184](https://github.com/huggingface/diffusers/pull/15184)、[#15144](https://github.com/huggingface/diffusers/pull/15144)、[#15118](https://github.com/huggingface/diffusers/pull/15118))

## 感谢我们的问题记者

这些作者提出了通过合并到此版本中的 PR 解决的问题。感谢您帮助改进扩散器！

- @andre-menutole：文本编码器 LoRA alpha 处理 — [#14970](https://github.com/huggingface/diffusers/issues/14970) → [#14972](https://github.com/huggingface/diffusers/pull/14972)。
- @gorkadabo1：LoRA 权重广播和文档 — [#15127](https://github.com/huggingface/diffusers/issues/15127) → [#15128](https://github.com/huggingface/diffusers/pull/15128)； [#15146](https://github.com/huggingface/diffusers/issues/15146) → [#15157](https://github.com/huggingface/diffusers/pull/15157)。
- @gorkemgul：无效梯度 clipping — [#15178](https://github.com/huggingface/diffusers/issues/15178) → [#15184](https://github.com/huggingface/diffusers/pull/15184)。
- @kahlun：FLUX 量化嵌入准备 — [#15145](https://github.com/huggingface/diffusers/issues/15145) → [#15144](https://github.com/huggingface/diffusers/pull/15144)。
- @Marius-Graml：缺少 Hub 内核下载 — [#13284](https://github.com/huggingface/diffusers/issues/13284) → [#15075](https://github.com/huggingface/diffusers/pull/15075)。
- @Pdevadiga45：检查点变体碎片被删除 - [#14719](https://github.com/huggingface/diffusers/issues/14719) → [#14844](https://github.com/huggingface/diffusers/pull/14844)。
- @pratikgx：损坏的文档链接 - [#14886](https://github.com/huggingface/diffusers/issues/14886) → [#15174](https://github.com/huggingface/diffusers/pull/15174)。
- @SeverinVisionary：`--revision` 训练崩溃 — [#15115](https://github.com/huggingface/diffusers/issues/15115) → [#15118](https://github.com/huggingface/diffusers/pull/15118)。
- @Shan2L：RDNA4 SageAttention 支持 — [#15014](https://github.com/huggingface/diffusers/issues/15014) → [#15060](https://github.com/huggingface/diffusers/pull/15060)。

**完整 changelog：** [v0.42.0 到 v0.43.0 发布提交](https://github.com/huggingface/diffusers/compare/v0.42.0...423ab90580b2847998591669b8326f47b6d14d8b)

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.43.0` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.43.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
