---
title: "diffusers v0.42.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.42.0"
version: "v0.42.0"
published: "2026-10-23"
type: "minor"
lang: "zh"
---

# diffusers v0.42.0

> [!提示]
> 此版本为 Diffusers 带来了 FLUX.3 Image Klein、Bria Fibo 2.0、Kandinsky 6、SANA-WM 和 RFD4-Proteína，以及新的适配器支持、硬件集成和模块化管道。
> 🚨 现在需要 Python 3.11 或更新版本。

## FLUX.3 图像克莱因

Black Forest Labs 的 FLUX.3 Image Klein 支持使用一张或多张参考图像进行文本到图像的生成和编辑。基本检查点和逐步蒸馏检查点都可以通过 `ModularPipeline` 获得，并带有集成的提示上采样器，可将简短的请求转换为详细的标题，并支持带有边界框的布局指令。该集成还包括单列变压器加载以及 BFL FP8r 和 NVFP4 检查点。

使用 `ModularPipeline.from_pretrained(...)` 加载管道，然后使用 `load_components(...)` 加载其重量。有关提示上采样、编辑和内存使用的示例和指南，请参阅 [FLUX.3 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/flux3)。

## 布里亚·斐波 2.0

Bria Fibo 2.0 支持从结构化 JSON 字幕生成图像，并通过 `BriaFibo2Pipeline` 编辑最多五个参考图像。该集成包括开发检查点和编辑涡轮检查点，该检查点分四个步骤运行，无需无分类器指导。有关支持的提示格式，请参阅 [Fibo 2.0 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/bria_fibo2)。

包含 LoRA 加载和 DreamBooth LoRA 培训示例，用于文本到图像和图像编辑。感谢 [@muhammadali-afridi](https://github.com/muhammadali-afridi) 的模型集成 (#14991)。

## 康定斯基 6

Kandinsky 6 通过 `Kandinsky6TI2VAPipeline` 从文本或参考图像生成带有同步音频的视频。单独的 `Kandinsky6SRPipeline` 提供视频超分辨率。该集成支持 Pro 和 Lite 生成检查点，包括蒸馏变体，并为蒸馏模型引入了 `PiflowScheduler`。有关检查点特定的设置和超分辨率要求，请参阅 [Kandinsky 6 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/kandinsky6)。感谢 @lefff 的模型集成 (#14949)。

## SANA-WM

SANA-WM 根据起始图像、文本提示和摄像机轨迹生成视频。使用明确的姿势或 WASD/IJKL 动作字符串控制相机，然后可以选择使用单独的 LTX-2 优化器优化输出。有关两阶段工作流程，请参阅 [SANA-WM 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/sana_wm)。

感谢 [@lawrence-cj](https://github.com/lawrence-cj) 的集成 (#13881)。

## RFD4-Proteína

Baker 实验室和 NVIDIA 的 RFD4-Proteína 为扩散器带来了生物分子设计。它共同生成蛋白质序列和全原子结构，同时调节分子背景，例如结合靶标、基序或配体。集成包括管道、变压器、自动编码器、调度器和 LoRA 加载。准备模型输入和编写 CIF 文件使用单独的 `rfd4-proteina-prep` 包；请参阅 [RFD4-Proteína 文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/rfd4_proteina)。

感谢 [@kierandidi](https://github.com/kierandidi) 的集成 (#15088)。

### 其他亮点

- **Qwen-Image 2.1：** 新的模块化管道和张量并行支持。 （[#14976]（https://github.com/huggingface/diffusers/pull/14976），[#14865]（https://github.com/huggingface/diffusers/pull/14865））
- **更多硬件支持：** TorchTPU 集成涵盖急切执行、`torch.compile` 和张量并行性。张量并行性也获得了 Intel XPU 的支持。 （[#14039]（https://github.com/huggingface/diffusers/pull/14039），[#15013]（https://github.com/huggingface/diffusers/pull/15013））
- **LoKr 适配器：** 加载适用于 Z-Image 和 FLUX.2 的 LyCORIS Kronecker 产品适配器，包括 Klein。 ([#14163](https://github.com/huggingface/diffusers/pull/14163))
- **LTX-2 运动控制：** `motion_speed` 独立于播放帧速率控制位置时基。使用兼容适配器来获得远离默认速度的速度，例如 LTX-2.5 慢动作控制 LoRA。 ([#14967](https://github.com/huggingface/diffusers/pull/14967))
- **KVAE-Audio：** `AutoencoderKLKVAEAudio` 添加了 48 kHz 音频的编码和解码。 ([#14384](https://github.com/huggingface/diffusers/pull/14384))
- **缓存：** MagCache 现在支持 FLUX.2。 ([#14756](https://github.com/huggingface/diffusers/pull/14756))
- **适配器修复：** Z-Image 遵循 `joint_attention_kwargs` 中的 LoRA 比例，Qwen-Image 将 `.alpha` 比例应用于 `lora_A`/`lora_B` 检查点，并且文本编码器正确报告活动适配器。 ([#15015](https://github.com/huggingface/diffusers/pull/15015)、[#15016](https://github.com/huggingface/diffusers/pull/15016)、[#14961](https://github.com/huggingface/diffusers/pull/14961))
- **管道修复：** 在 `FlowMatchEulerDiscreteScheduler` 中保留显式时间步，修复 Anima 文本编码器导出和独立核心去噪，并在未提供掩码时保留从 `InpaintProcessor.preprocess` 的三值返回。 ([#14956](https://github.com/huggingface/diffusers/pull/14956)、[#14943](https://github.com/huggingface/diffusers/pull/14943)、[#14481](https://github.com/huggingface/diffusers/pull/14481))

### 弃用和兼容性

- **Python 3.10 支持已删除。** 在安装此版本之前升级到 Python 3.11 或更高版本。 ([#15030](https://github.com/huggingface/diffusers/pull/15030))
- **模块化潜在输出：** FLUX、Krea 2 和 LTX-Video 现在在其核心降噪组中解包潜在内容。自定义工作流程应将解包的潜在变量传递到其解码块。在 0.47.0 中，不推荐删除打包潜在变量的后备。 ([#14737](https://github.com/huggingface/diffusers/pull/14737))
- **集线器兼容性：** 支持的 `huggingface_hub` 系列现在是 `>=1.32.0,<3.0`。 ([#14863](https://github.com/huggingface/diffusers/pull/14863))
- **TorchAO 导入：** 安装早于 0.15 的 TorchAO 版本不再破坏模型导入。 TorchAO 量化仍然需要 0.15 或更高版本。 ([#15095](https://github.com/huggingface/diffusers/pull/15095))

感谢所有为此版本做出贡献的人！

## 所有提交

- 通过 [@yiyixuxu](https://github.com/yiyixuxu) 在 [#14956](https://github.com/huggingface/diffusers/pull/14956) 中修复 https://github.com/huggingface/diffusers/issues/14461
- Kandinsky6 by [@sayakpaul](https://github.com/sayakpaul) 在 [#14949](https://github.com/huggingface/diffusers/pull/14949)
- 由 [@paulinebm](https://github.com/paulinebm) 在 [#14957](https://github.com/huggingface/diffusers/pull/14957) 中凹凸文档生成器工作流程引脚
- [文档] [@stevhliu](https://github.com/stevhliu) 在 [#14926](https://github.com/huggingface/diffusers/pull/14926) 中的工作指南
- [文档] [@stevhliu](https://github.com/stevhliu) 在 [#14973](https://github.com/huggingface/diffusers/pull/14973) 中的社区方法
- 通过 [#14961](https://github.com/huggingface/diffusers/pull/14961) 中的 [@Subodh-17](https://github.com/Subodh-17) 修复文本编码器的活动适配器检测
- 修复（image_processor）：当[#14481]（https://github.com/huggingface/diffusers/pull/14481）中的[@patrickswedish]（https://github.com/patrickswedish）掩码为None时，在InpaintProcessor.preprocess中维护3元组返回契约
- [ci] 合并 PR 上的标签。由 [@sayakpaul](https://github.com/sayakpaul) 在 [#14911](https://github.com/huggingface/diffusers/pull/14911)
- [LoRA] 通过 [#14163](https://github.com/huggingface/diffusers/pull/14163) 中的 [@christopher5106](https://github.com/christopher5106) 添加 LoKr 适配器支持（Z-Image、Flux2/Klein）
- [TPU] TorchTPU 后端集成 - eager / torch.compile / tp by [@JingyaHuang](https://github.com/JingyaHuang) in [#14039](https://github.com/huggingface/diffusers/pull/14039)
- [cli] 通过 [#15001](https://github.com/huggingface/diffusers/pull/15001) 中的 [@yiyixuxu](https://github.com/yiyixuxu) 检测 `custom_blocks` 中的复合块类
- 通过 [#14943](https://github.com/huggingface/diffusers/pull/14943) 中的 [@lucasruan1618](https://github.com/lucasruan1618) 修复 Anima 文本编码器导出和独立核心去噪
- [#14863](https://github.com/huggingface/diffusers/pull/14863) 中的 [@Wauplin](https://github.com/Wauplin) 将 Huggingface_hub 上限提升至 <3.0（扩散器）
- 通过 [#15010](https://github.com/huggingface/diffusers/pull/15010) 中的 [@sywangyi](https://github.com/sywangyi) 使稳定扩散设备映射比较具有确定性
- xpu 也支持 TP，通过 [#15013](https://github.com/huggingface/diffusers/pull/15013) 中的 [@sywangyi](https://github.com/sywangyi)
- 通过 [#13881](https://github.com/huggingface/diffusers/pull/13881) 中的 [@lawrence-cj](https://github.com/lawrence-cj) 添加 SANA-WM 相机控制的图像到视频管道
- [Z-Image] 应用 [#15015](https://github.com/huggingface/diffusers/pull/15015) 中的 [@Sergasgr](https://github.com/Sergasgr) 通过 joint_attention_kwargs 传递的 LoRA 尺度
- [utils] 在 [#13803](https://github.com/huggingface/diffusers/pull/13803) 中的 [@javierdejesusda](https://github.com/javierdejesusda) 中保留 apply_forward_hook 中的方法元数据
- 更新 FlashAttention Hub 集成并通过 [@sywangyi](https://github.com/sywangyi) 在 [#15024](https://github.com/huggingface/diffusers/pull/15024) 中保护仅 CUDA 的测试
- [hooks] 在 [#14756](https://github.com/huggingface/diffusers/pull/14756) 中的 [@rootonchair](https://github.com/rootonchair) 支持 MagCache 中的 Flux2
- 🔒 固定 GitHub 操作以通过 [#15028](https://github.com/huggingface/diffusers/pull/15028) 中的 [@paulinebm](https://github.com/paulinebm) 提交 SHA
- [CI] 通过 [#14988](https://github.com/huggingface/diffusers/pull/14988) 中的 [@DN6](https://github.com/DN6) 清理 `test_modeling_common.py`
- ci：移至 python 3.11。作者：[@sayakpaul](https://github.com/sayakpaul) 在 [#15030](https://github.com/huggingface/diffusers/pull/15030)
- [核心] [#14865](https://github.com/huggingface/diffusers/pull/14865) 中 [@JingyaHuang](https://github.com/JingyaHuang) 的 Qwen-Image-2.1 张量并行性
- 重构：通过 [#15042](https://github.com/huggingface/diffusers/pull/15042) 中的 [@JingyaHuang](https://github.com/JingyaHuang) 删除 Qwen 图像中的 Neuron RoPE 路径
- 通过[@akshan-main](https://github.com/akshan-main)在[#14976](https://github.com/huggingface/diffusers/pull/14976)中为qwen-image 2.1添加模块化管道
- Flux3 图像由 [@sayakpaul](https://github.com/sayakpaul) 在 [#15046](https://github.com/huggingface/diffusers/pull/15046) 中提供
- [文档] FLUX.3：需要提示上采样器，我们的或 [#15059](https://github.com/huggingface/diffusers/pull/15059) 中的 [@stephen37](https://github.com/stephen37) 的任何 LLM
- FLUX.3 通过 [#15058](https://github.com/huggingface/diffusers/pull/15058) 中的 [@yiyixuxu](https://github.com/yiyixuxu) 提示上采样器块
- [文档] FLUX.3：仅模块化注释、延迟加载、[#15069](https://github.com/huggingface/diffusers/pull/15069) 中的 [@yiyixuxu](https://github.com/yiyixuxu) 回调
- FLUX.3：与[#15073](https://github.com/huggingface/diffusers/pull/15073)中的[@yiyixuxu](https://github.com/yiyixuxu)匹配发布的BFL参考图像尺寸
- [@sayakpaul](https://github.com/sayakpaul) 在 [#15062](https://github.com/huggingface/diffusers/pull/15062) 中发布 0.41.0
- 通过 [#14737](https://github.com/huggingface/diffusers/pull/14737) 中的 [@akshan-main](https://github.com/akshan-main) 将解包从 Flux、krea2 和 ltx 解码器移至核心降噪组
- [feat] 通过 [@ivnvalex](https://github.com/ivnvalex) 在 [#14384](https://github.com/huggingface/diffusers/pull/14384) 中添加 KVAE-Audio 自动编码器
- [#15082](https://github.com/huggingface/diffusers/pull/15082) 中的 [@sayakpaul](https://github.com/sayakpaul) 修复了 CPU CI 中 PyArrow 的兼容性
- 在 [#14991](https://github.com/huggingface/diffusers/pull/14991) 中添加 [@muhammadali-afridi](https://github.com/muhammadali-afridi) 的 Bria fibo-2
- 通过 [@kierandidi](https://github.com/kierandidi) 在 [#15088](https://github.com/huggingface/diffusers/pull/15088) 中添加 RFD4-Proteina
- [测试] [#14977](https://github.com/huggingface/diffusers/pull/14977) 中 [@sayakpaul](https://github.com/sayakpaul) 的一些 kandinsky6 测试失败
- 当 torchao 早于 0.15 时修复模型导入 [#15095](https://github.com/huggingface/diffusers/pull/15095) 中的 [@usmanmateen](https://github.com/usmanmateen)
- [ci] 使用元数据时使用 python 3.11。作者：[@sayakpaul](https://github.com/sayakpaul) 在 [#15093](https://github.com/huggingface/diffusers/pull/15093)
- [ci]通过[#15094](https://github.com/huggingface/diffusers/pull/15094)中的[@sayakpaul](https://github.com/sayakpaul)修复push_tests.yml中错误命名的测试步骤
- [LTX-2] 添加 `motion_speed`，通过 [#14967](https://github.com/huggingface/diffusers/pull/14967) 中的 [@christopher5106](https://github.com/christopher5106) 来调节位置时基与播放帧速率的区别
- [ci] 跳过 T4 上的 bf16 精度测试。作者：[@sayakpaul](https://github.com/sayakpaul) 在 [#15091](https://github.com/huggingface/diffusers/pull/15091)
- [#15096](https://github.com/huggingface/diffusers/pull/15096) 中的 [@coyotte508](https://github.com/coyotte508) 在 update_metadata 工作流程中使用 HF Trusted 发布者令牌
- [LoRA] 将 .alpha 应用于 [#15016](https://github.com/huggingface/diffusers/pull/15016) 中的 [@dcaayushd](https://github.com/dcaayushd) 的 Qwen-Image lora_A/lora_B LoRA
- [ci] 修复编译 CI。作者：[@sayakpaul](https://github.com/sayakpaul) 在 [#15092](https://github.com/huggingface/diffusers/pull/15092)
- 通过 [@linoytsaban](https://github.com/linoytsaban) 在 [#15084](https://github.com/huggingface/diffusers/pull/15084) 中添加 fibo-2 LoRA 训练和加载
- 发布：v0.42.0-release，作者：[@sayakpaul](https://github.com/sayakpaul)（[直接发布提交](https://github.com/huggingface/diffusers/commit/95f9b8925c34469ccac829866d7ad4e3fca1bd89)）

## 重大社区贡献

以下贡献者在此版本中添加了模型和功能：

- [@muhammadali-afridi](https://github.com/muhammadali-afridi)：Bria Fibo 2.0 集成。 ([#14991](https://github.com/huggingface/diffusers/pull/14991))
- [@lawrence-cj](https://github.com/lawrence-cj)：SANA-WM 摄像机控制的视频生成和细化。 ([#13881](https://github.com/huggingface/diffusers/pull/13881))
- [@kierandidi](https://github.com/kierandidi)：RFD4-Proteína 生物分子设计集成。 ([#15088](https://github.com/huggingface/diffusers/pull/15088))
- [@ivnvalex](https://github.com/ivnvalex)：KVAE-音频自动编码器。 ([#14384](https://github.com/huggingface/diffusers/pull/14384))
- [@christopher5106](https://github.com/christopher5106)：LoKr 适配器支持和 LTX-2 运动速度控制。 （[#14163]（https://github.com/huggingface/diffusers/pull/14163），[#14967]（https://github.com/huggingface/diffusers/pull/14967））
- [@akshan-main](https://github.com/akshan-main)：Qwen-Image 2.1 模块化管道和模块化降噪组的一致解包潜在输出。 （[#14976]（https://github.com/huggingface/diffusers/pull/14976），[#14737]（https://github.com/huggingface/diffusers/pull/14737））
- [@sywangyi](https://github.com/sywangyi)：Intel XPU 张量并行性、FlashAttention Hub 集成更新和确定性设备映射测试。 ([#15013](https://github.com/huggingface/diffusers/pull/15013)、[#15024](https://github.com/huggingface/diffusers/pull/15024)、[#15010](https://github.com/huggingface/diffusers/pull/15010))
- [@rootonchair](https://github.com/rootonchair)：MagCache 对 FLUX.2 的支持。 ([#14756](https://github.com/huggingface/diffusers/pull/14756))

**完整的 changelog：** [v0.41.0 到 v0.42.0 发布提交](https://github.com/huggingface/diffusers/compare/v0.41.0...95f9b8925c34469ccac829866d7ad4e3fca1bd89)

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.42.0` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.42.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
