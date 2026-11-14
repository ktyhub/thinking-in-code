---
title: "transformers v5.19.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.19.0"
version: "v5.19.0"
published: "2026-10-06"
type: "minor"
lang: "zh"
---

# transformers v5.19.0

# 发布v5.19.0


## 添加新模型

### 嵌入Gemma2

<img width="2716" height="2308" alt="image" src="https://github.com/user-attachments/assets/84734e74-163d-4d12-b166-ffcf6749d563" />

EmbeddingGemma 2 是 Google 在 Gemma 4 架构上构建的多模态嵌入模型。它将文本、图像、音频和视频单独或组合在一个输入中编码到共享的 768 维向量空间中，用于跨模式检索、语义相似性、聚类和分类。它使用 Matryoshka 表示学习，因此嵌入可以被截断为 512、256 或 128 维。它还提供可配置的视觉和视频令牌预算，并且可以在加载时禁用未使用的视觉或音频塔以节省内存。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/embedding_gemma2)
* Smthn smthn (#49364) by @vasqu in [#49364](https://github.com/huggingface/transformers/pull/49364)



## 重大变更

现在，其路由器计算 logits 的所有 MoE 模型都会在 `output_router_logits=True` 时返回它们，遵循 Qwen3-MoE 模式（基础模型上的 `router_logits` 记录器、来自主干的 `MoeModelOutputWithPast` 以及来自头部的 MoE 因果 LM 输出），因此依赖于先前输出或它们不存在的代码应该从这些输出类中读取路由器 logits。
* 🚨 从每个计算它们的 MoE 模型返回路由器日志 (#48920) by @qgallouedec

`Owlv2ForObjectDetection.embed_image_query` 现在选择具有最高对象性得分的查询框（如原始 OWLv2 笔记本中一样），而不是 OWL-ViT 启发式，因此图像引导的查询嵌入和检测可能与早期版本不同。
* 🚨 按对象性选择 OWLv2 图像查询 (#49200) by @qgallouedec

SDPA 和 flash 注意实现的 `"paged|"` 前缀已被弃用，因此用户应该为连续批处理设置常规注意实现（例如 `sdpa` 或 `flash_attention_2`），而不是 `paged|sdpa` 或 `paged|flash_attention_2`。
* 🚨 注意 🚨 弃用“paged|” SDPA 和 flash 的前缀 (#49112) by @remi-or

常规闪存和 SDPA 注意函数（`flash_attention.py`、`sdpa_attention.py`）现在直接支持连续批处理，并且这些函数的 `"paged|..."` 实现被重定向到它们，而 eager 仍然需要 `"paged|eager"` 前缀。
* 🚨 关注 🚨 定期关注支持 CB (#49101) by @remi-or

在连续批处理中，基于索引和块表路径的缓存更新现在融合到单个调用中，这会稍微改变缓存更新函数的行为并影响调用单独更新路径的任何自定义代码。
* 🚨 [CB] 🚨 索引和块表路径的熔丝更新 (#49088) by @remi-or

连续配料内部结构发生变化，准备移除 `"paged"`：`max
* 🚨 [CB] 🚨 删除 @remi-or 的“paged”（#49069）之前的一些小修复



## 并行化

专家并行性获得了令牌调度实现，通过新的 `ep_dispatch_experts` 计划规则进行选择，现在是 Qwen3 MoE 和 Mellum 的默认值，这消除了 EP 大小等于 TP 大小的要求。 `Trainer` 还经过调整，可以与专家并行一起使用，并且文档现在指出 PEFT 适配器支持张量并行。还包括针对管道并行 Chart2table 推理的 CI 相关修复。


* [`distributed`]：使 Trainer 适应专家并行工作 (#48873)，由 @3outeille 在 [#48873] 中
* [`distributed`] 添加专家并行令牌调度，默认为 Qwen3 MoE (#48865) by @3outeille in [#48865]
* 修复了 [#49225] 中 @zucchini-nlp 的 pp Chart2table 推断 (#49225)
* [文档] PEFT 适配器的 TP (#49060) by @stevhliu in [#49060]


## 缓存
此版本修复了量化缓存处理：`generate` 不再改变用户的 `cache_config`，并且 `QuantizedLayer.reorder_cache` 已修复。它还添加了每层缓存配置，因此 `DynamicCache` 和 `StaticCache` 从自己的配置（滑动窗口、注意力块大小、转换状态和注意力头计数）初始化每一层，以更好地支持异构模型。掩码和缓存的弃用周期分别


* 修复量化缓存 (#48700) by @jiqing-feng in [#48700]
* [CI] check_bad_commit：使用 EFS 缓存来避免 Xet FUSE OOM（出口 137）（#49273），@ydshieh 在 [#49273]
* 支持每层缓存配置 (#48178) by @eladsegal in [#48178]
* 删除掩码和缓存上的弃用周期 (#49231)，作者：@Cyrilvallez，位于 [#49231]


## 错误修复和改进

* 恢复@ydshieh 在 [#49362] 中的“[CI] 暂时禁用 AMD 计划 CI 触发器”(#49271) (#49362)
* ALM testx 修复... (#49355) by @zucchini-nlp in [#49355]
* 修复 DataCollatorForLanguageModeling 忽略种子 = 0 (#49349) by @akanyaani in [#49349]
* 通过 [#49339] 中的 @DimensionSTP 修复评估模型的显式核化模式 (#49339)
* 修复(cohere_compass): 将视频添加到 input_modalities (#49320) (#49323) by @destopianpirate in [#49323]
* GPT-OSS：从配置中读取固定的 SwiGLU 的 alpha 和限制 (#49346) by @IlyasMoutawwakil in [#49346]
* [`distributed`] 默认 MoE `ep_plans` 为 @3outeille 在 [#49160] 中的代币调度 (#49160)
* 将 CI 移动到 Python 3.11，版本设置在 `.python-version` (#49311) 中，@tarekziade 在 [#49311]
* 在 [#49350] 中@paulinebm 凹凸文档生成器主文档工作流程引脚 (#49350)
* [`distributed`] 通过 @3outeille 在 [#48859] 中解耦 tp_plan 和 ep_plan (#48859)
* [`distributed`] 在 [#48857] 中添加@3outeille 的密集且专业的设备网格 (#48857)
* 凹凸文档生成器工作流程引脚 (#49342) by @paulinebm in [#49342]
* 允许通过 @zucchini-nlp 在 [#48984] 中注册新的处理后端 (#48984)
* 通过 @LE0-Lin 在 [#49315] 中修复 WatermarkDetector 重复 ngram 计数 (#49315)
* 通过 @zucchini-nlp 在 [#49259] 中修复 minicpm 4.6V 视频批处理和 CI (#49259)
* 通过@3outeille 在 [#49314] 中删除 DeepseekV4 的 lm_head 的 colwise_gather_output (#49314)
* 由 @qgallouedec 在 [#49001] 中修复 CLIPSegForImageSegmentation 的 `labels` 文档字符串 (#49001)
* [CI] 暂时禁用 AMD 计划的 CI 触发器 (#49271) by @ydshieh in [#49271]
* 从 setup.py deps 中删除未使用的 pandas 条目 (#49329) by @tarekziade in [#49329]
* 修复 run_glue.py 标签 id 变成 pandas>=3 的字符串 (#49326) by @tarekziade in [#49326]
* [修复] 删除旧的测试文件和两个古老的测试 (#49280) by @remi-or in [#49280]
* 修复了带有多轴位置 ID 的分块预填充 (Qwen3-VL) (#49319) by @dacorvo in [#49319]
* 当你可以通过 @zucchini-nlp 在 [#49105] 中修复 `Mixin` (#49105) 时为什么要覆盖
* 使用 mul 而不是 matmul 进行 RoPE (#49265) by @Rocketknight1 in [#49265]
* 不推荐使用的管道应该重定向；删除的管道应该由 @LysandreJik 在 [#49308] 中引发 (#49308)
* 在 [#49207] 中@tengomucho 对即将推出的 `torch_tpu` 后端启用模型测试 (#49207)
* 修复批量扩展后编码器重复惩罚源行 (#49262) by @gitedmond in [#49262]
* 在指数衰减长度惩罚中保留屏蔽的 EOS 分数 (#49260) by @gitedmond in [#49260]
* [CI] 当只需要特定的工件时，避免获取所有工件 (#49282) by @ydshieh in [#49282]
* 恢复“[CI] ssh-runner：添加可选的cache_type 输入以在存储桶和 EFS 运行程序之间切换 (#49159)”(#49270) by @ydshieh in [#49270]
* 添加 Trainer.loss_is_scaled_for_ga 来声明compute_loss是否已经可以缩放梯度累积（#49240），由@qgallouedec在[#49240]中
* 修复预计算的 flash kwargs 冲突 (#47928) by @IlyasMoutawwakil in [#47928]
* 重新应用 @Cyrilvallez 的模块化示例 (#49230) [#49230]
* 删除一些不存在的东西 (#49232) by @Cyrilvallez in [#49232]
* 删除@Cyrilvallez 在 [#49228] 中的旋转弃用周期 (#49228)
* [`GTE`] 在 [#49234] 中添加 @vasqu 的内存混合 (#49234)
* [CB] 使 CB 更加与设备无关，并通过 @remi-or 在 [#49156] 中添加对 XPU (#49156) 的支持
* 由于从检查点 (#49208) 恢复而修正了最终指标，作者为 @SunMarc [#49208]
* [ESM/Persimmon/NllbMoe/ESMFold] 使用 safetensors 存储库修复存储桶 CI 运行器上的 Xet FUSE SIGBUS/IOError (#49194)，作者为 @ydshieh，位于 [#49194]
* 由 @vasqu 在 [#49212] 中进行的开发更新 (#49212)

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @vasqu
    * Smthn smthn (#49364)
    * [`GTE`] 添加内存混合 (#49234)
    * 开发更新 (#49212)
* @雷米-或
    * [修复] 删除带有两个古老测试的旧测试文件 (#49280)
    * [CB] 使 CB 更加与设备无关并添加对 XPU 的支持 (#49156)
    * 🚨 注意 🚨 弃用“paged|” SDPA 和闪存的前缀 (#49112)
    * 🚨 关注 🚨 定期关注支持 CB (#49101)
    * 🚨 [CB] 🚨 索引和块表路径的熔丝更新 (#49088)
    * [重构] 使一些 flash-attention 实用程序更具可读性 (#49071)
    * 🚨 [CB] 🚨 删除“paged”之前的一些小修复（#49069）

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.19.0` · 📅 发布：2026-10-06 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.19.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
