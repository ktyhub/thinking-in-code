---
title: "transformers v5.22.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.22.0"
version: "v5.22.0"
published: "2026-10-29"
type: "minor"
lang: "zh"
---

# transformers v5.22.0

## 新型号

### 米斯特拉尔大型 4（Le Chonk）

<img width="1329" height="780" alt="image" src="https://github.com/user-attachments/assets/1cff9ca7-19e3-4622-8db6-fb1cfa842579" />

Mistral Large 4 是 Mistral 迄今为止最大、功能最强大的模型：一个包含 1 万亿个参数的原生多模态专家混合模型，每个令牌有 490 亿个活动参数（520 亿个包括嵌入和输出层），在 Mistral 位于欧洲的自有数据中心的 3,800 个 NVIDIA Grace Blackwell GPU 上从头开始训练。

Mistral Large 4 将指令跟踪、推理、编码和代理工作流程统一在一组权重中。虽然是一个多面手模型，但它在网络安全、金融和法律等工作负载上表现出特别好的性能，并且在视觉基础上超越了前沿封闭模型。它精通 160 多种语言，包括欧盟的每种官方语言。

#### 主要特点

Mistral Large 4 包括以下架构选择：

- **~1T 总计 / ~52B 活跃参数**：细粒度专家混合，具有 128 个路由专家（每个代币 4 个活跃专家）和 1 个共享专家。
- **1M 上下文长度**，适用于长上下文工作负载。
- **多模式输入**：接受文本和图像输入，并输出文本。 Pixtral 风格的视觉编码器经过训练可以处理可变的图像尺寸和纵横比。
- **指令和推理功能**，具有函数调用、可根据请求配置的推理工作。

Mistral Large 4 提供以下功能：

- **推理模式**：三种推理工作 - `low`、`medium`、`high`（默认） - 因此同一模型可以回答快速聊天回复或完成复杂的代理运行。
- **视觉**：分析图像、图表、技术图纸和文档，在开放权重中具有最先进的视觉基础。
- **多语言**：精通 160 多种语言，包括欧盟的所有官方语言。
- **系统提示**：对系统提示的强烈遵守和支持。
- **代理**：本机函数调用、JSON 输出和严格的 JSON 模式强制执行。
- **网络安全**：安全工作的开放权重模型中最先进的技术，同时拒绝恶意请求。
- **大上下文窗口**：支持1M上下文窗口。

该模型根据 [**Mistral 生态系统开放权重许可证**](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE) 发布：MIT 许可证的修改版本，适用于商业和非商业用途 - 运营模型即服务业务需要获得 Mistral 的单独商业许可证。

#### 推荐设置

- **推理努力**：
  - `'low'` / `'medium'` / `'high'` — 默认为 `'high'`。
  - 使用 `reasoning_effort="high"` 进行复杂提示和代理使用，使用 `'low'` 进行快速聊天回复，使用 `'medium'` 进行日常使用。
- **采样**：对于所有推理工作，我们建议使用以下采样参数：
  - `temperature=1.0`
  - `top_p=0.95`
- **系统提示**：定义清晰的环境和用例，包括如何有效利用代理系统中的工具的指导。
- **工具**：保持工具集的明确定义，并将其数量限制为用例所需的最少数量。
- **上下文**：检查点支持 1M 上下文窗口。

## 重大变更

* 🚨 将 EP 逻辑分离到自己的文件中 (#49679) by @3outeille

## 量化
FP8 量化模型现在可用于适配器训练（例如带有 PEFT 的 LoRA）。向后传递被添加到密集和分组的 FP8 matmul 中，`is_trainable` 现在是 `True`。 Backward 还按块对专家进行反量化，并在推理时跳过 autograd，这会将 MoE 层中的峰值内存从大约 28.9 GiB 向后削减到 8k 令牌的 2.8 GiB。现在单独安装 AMD CI 映像


* FP8 向后：分块专家 dequant，跳过 autograd.Function at inference (#50117) by @ArthurZucker in [#50117]
* 在 FP8 权重之上训练适配器 (#50031)，由 @qgallouedec 在 [#50031] 中
* [AMD CI] 在 AMD 映像中安装 onnxscript、bitsandbytes 和 peft (#50046)，作者为 @Abdennacer-Badaoui，位于 [#50046]


## 错误修复和改进

* 处理器不必要的警告 (#49812) by @zucchini-nlp in [#49812]
* 修复 ClapFeatureExtractor 中的布尔填充 (#23648) (#49960) by @rudy-07 in [#49960]
* [修复] 将未初始化图层的裁剪计数为无操作 (#50104) by @remi-or in [#50104]
* [正在加载] 允许 `PermuteForRope` 在重命名时作用于单个张量 (#50092) by @Cyrilvallez in [#50092]
* 在 [#50084] 中添加 @eustlb 的 Nemotron 3.5 转录 (#50084)
* [Nemotron3Diarization] 添加左上下文支持 (#49283) by @eustlb in [#49283]
* [Janus] 修复处理器逐个字符迭代字符串提示的问题 (#50044)，作者：@tarekziade in [#50044]
* 修复（config）：将令牌 kwarg 转发到 PreTrainedConfig.from_pretrained 中的 get_config_dict （#50081），由 @ydshieh 在 [#50081] 中
* 修复 `rope_scaling` 设置器，用于在初始化期间分配它的配置 (#50080) by @hmellor in [#50080]
* [timesfm] 修复 _forward_transform 中 pad_val 上的 fp16 溢出 (#50021) by @tarekziade in [#50021]
* 由 @albertvillanova 在 [#50068] 中更新开发版本 (#50068)
* 由 @tarekziade 在 [#49802] 中固定共享 Hub MIC 队列数据集 (#49802)
* [文档] NVIDIA/Intel/CPU (#49650) by @stevhliu in [#49650]
* 记录如何在自定义模型中处理非持久缓冲区初始化 (#49880) by @Tialo in [#49880]
* 删除旧版基准测试/并禁用自动基准测试运行 (#50040) by @tarekziade in [#50040]
* 由 @Cyrilvallez 在 [#50034] 中删除候选生成器的弃用周期 (#50034)
* 修复测试 pil 导入泄漏 (#49915) by @guarin in [#49915]
* 修复：通过@BlazeSR10hawk 在默认数据整理器中保留 NumPy 整数标签数据类型 (#49900) [#49900]
* [ESMFold2] 不要为没有检查点的检查点构建 MSA 编码器 (#49890) by @jimburtoft in [#49890]
* [minimax_m3_vl] 由 @tarekziade 在 [#50025] 中对加速器总内存 (#50025) 进行集成测试
* 修复：在 LFM2.5 转换层中添加 kwargs (#50022)，由 @younesbelkada 在 [#50022] 中
* 由 @Rocketknight1 在 [#49832] 中将 code_revision 转发到每个管道加载器 (#49832)
* [moshi] 跳过检查点已消失的 Moshiko 集成测试 (#50017) by @tarekziade in [#50017]
* 在反转转换模式时保留捕获组的转义 (#49772) by @IlyasMoutawwakil in [#49772]
* perf(ci): 在 [#50007] 中 @nrenvo 的部分克隆 (#50007) 上跳过 `git blame` 中的惰性 blob 获取
* 修复（canary）：在测试测试器中设置layerdrop=0.0以防止@ydshieh在[#50012]中进行片状测试（#50012）
* 添加一个 WA 到 XPU 的 Docker 文件 (#50008) by @kaixuanliu in [#50008]
* 管道：延迟在 text_to_audio 和 token_classification 中导入急切的模型 (#50001) by @ydshieh in [#50001]
* [exporters] 延迟解析 @register_patch 路径以避免急切的模型导入 (#50000) by @ydshieh in [#50000]
* [修复] 删除无用的 kwargs (#49966) by @remi-or in [#49966]
* 修复模型的配置属性命名 (#49898) by @zucchini-nlp in [#49898]

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @tarekziade
    * 修复 7 个音频模型中的 `_init_weights` 差距并为其启用 `test_can_init_all_missing_weights` (#49386)
    * 修复 Pillow 13 的图像后端等效测试 (#50105)
    * [Janus] 修复处理器逐字符迭代字符串提示的问题 (#50044)
    * [timesfm] 修复 _forward_transform 中 pad_val 的 fp16 溢出问题 (#50021)
    * 固定共享 Hub MIC 队列数据集 (#49802)
    * 删除旧版基准测试/并禁用自动基准测试运行 (#50040)
    * [minimax_m3_vl] 对加速器总内存进行集成测试 (#50025)
    * [moshi] 跳过检查点消失的 Moshiko 集成测试 (#50017)
* @eustlb
    * 添加 Nemotron 3.5 转录 (#50084)
    * [Nemotron3Diarization] 添加左上下文支持 (#49283)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.22.0` · 📅 发布：2026-10-29 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.22.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
