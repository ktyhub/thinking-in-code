---
title: "transformers v5.14.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.14.0"
version: "v5.14.0"
published: "2026-07-15"
type: "minor"
lang: "zh"
---

# transformers v5.14.0

# 发布v5.14.0

## 添加新模型

### Inkling（来自 Thinking Machines 的新版本）：总计 975B，活跃 41B

* 添加 Inkling 模型 #47347，作者：@molbap @Cyrilvallez @eustlb 和 @zucchini-nlp 

<img 宽度=“3840”高度=“2160” alt=“图像”src=“https://github.com/user-attachments/assets/051f819a-512f-4987-9bee-6e2fa2af3db7”/>


Inkling 是一种通用多模式模型，可接受文本、图像和音频输入，
生成文本输出。它旨在用于英语和其他语言，并跨
多种编码语言。该模型旨在供构建 AI 的开发人员使用
驱动的应用程序，包括代理和工具使用系统、编码助手、聊天机器人和
检索增强生成系统，适用于通用会话
使用、遵循指令以及其他自然语言和多模式任务。它是与发布
开放权重以支持研究、微调和集成到第三方产品中
下游开发商。




### TIPSv2
<img width="1555" height="1306" alt="image" src="https://github.com/user-attachments/assets/2d9f21e5-05f8-4c36-93ef-22f03c089f52" />

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/tipsv2)
* 在 [#46347](https://github.com/huggingface/transformers/pull/46347) 中添加 @Ternura143 的 TIPSv2 (#46347)

### TIPSv2 DPT
<img width="794" height="245" alt="image" src="https://github.com/user-attachments/assets/09c0d4da-6c1c-4229-bf02-a512ed435e50" />

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/tipsv2_dpt)
* 在 [#46347](https://github.com/huggingface/transformers/pull/46347) 中添加 @Ternura143 的 TIPSv2 (#46347)



## :rotating_light：重大更改

GPTNeoX 现在将 `embed_out` 重新映射到 `lm_head`，并且 GPTBigCode 启用了 `_supports_attention_backend = True` 以实现 vLLM 兼容性；依赖于这些模型之前的权重命名或注意力后端行为的用户应该相应地更新他们的代码。
* :rotating_light：修复 vLLM 的 Transformers 建模后端的 GPTBigCode 和 GPTNeoX (#47198) by @hmellor


## 内核

进行了一些与内核相关的修复和改进，包括将 `kernels` 依赖项固定到基准工作流程中的兼容版本，从 `LocalLayerRepository` 中删除已弃用的 `package_name` 参数，以及在 `CUDA_HOME` 未设置或配置错误时使 DeepGEMM Triton 回退更加稳健。此外，SDPA 预填充已更新，以利用带有 `StaticCache` 的 FlashAttention 内核，从而显着提高性能（对于大输入大小，速度提高高达 260%）。


* 将内核固定到基准工作流程中的兼容版本 (#47339)，作者为 @tarekziade，位于 [#47339]
* [修复] 通过 @remi-or 在 [#47100] 中删除 `kernels` 调用 (#47100) 中已弃用的参数
* [修复] 让 DeepGEMM triton 后备更加强大 (#47126) by @remi-or in [#47126]
* [sdpa] 允许预填充将 FA 内核与 StaticCache 结合使用 (#47094)，作者为 @Cyrilvallez，位于 [#47094]


## 一代

生成改进包括添加多令牌预测 (MTP) 解码支持、用于推测性解码的静态集成验证以提高草案令牌接受率，以及修复使用不同令牌生成器的贪婪辅助生成中的崩溃问题。连续批处理模式下 `synced_gpus` 的误导性双负警告消息也已得到纠正。


* [生成]修复连续批处理中误导性的synced_gpus警告（#47158），由@Partha-Shankar在[#47158]中
* [生成] 添加适当的 MTP 支持 (#46229) by @Cyrilvallez in [#46229]
* 通过@Sunt-ing 在 [#46936] 中修复使用不同分词器的贪婪辅助生成中的崩溃问题 (#46936)
* [生成] 在 [#45979] 中添加 @kasakh 的有损推测解码的静态集成验证 (#45979)


## 性能
修复了影响 Qwen3-VL 等模型的 Flash Attention 性能回归，并解决了 MoE 解码优化错误，其中分组到批量矩阵乘法开关未应用于驻留在子模型中的专家（例如，具有嵌套文本配置的 VLM）。


* 由 @andreasgoulas 在 [#47134] 中修复 FA 性能回归 (#47134)
* 修复生活在子模型中的专家的 MoE 解码优化 (#47107)，由 @IlyasMoutawwakil 在 [#47107] 中
* 使文档构建速度更快 (#47099) by @mishig25 in [#47099]


## 缓存

通过为滑动层和静态层引入显式层类型映射，简化了缓存调度逻辑，降低了缓存路由的复杂性。此外，还修复了 CPU CI 环境中的只读缓存故障以及 Apple Silicon 上可变长度批量训练期间 MPS 图形缓存增长的问题。


* 通过在 [#47043] 中@ydshieh 修补conftest 中的cached_files (#47043) 来修复 CI 只读缓存故障
* 训练器：通过 torch_empty_cache_steps 清除 MPS 图形缓存 (#45818) by @anagnorisis2peripeteia in [#45818]
* [缓存] 简化基于layer_types的缓存调度 (#47118) by @Cyrilvallez in [#47118]


## 错误修复和改进

* ci: 也覆盖 xet (运行时错误) (#47338) by @tarekziade in [#47338]
* [文档] TokenizersBackend 后备 (#47302) by @stevhliu in [#47302]
* 解决运行时连续批处理 XPU 可用性检查 (#47185) by @kaixuanliu in [#47185]
* [Nit] 通过 @remi-or 在 [#47318] 中将 kernels_fallback_ok kwarg 添加到 is_flash_attn_N_available (#47318)
* [Nit] 在 [#47311] 中添加 @remi-or 对 H100 (#47311) 上 gemma4 测试的期望
* [文档] DeepGEMM 要求 (#47324) by @stevhliu in [#47324]
* DeepGEMM 不应填充 SM90 (#47313)，作者：@IlyasMoutawwakil [#47313]
* 修复 DETR 系列正弦位置嵌入中的半精度 torch.compile 崩溃 (#47238)，作者为 @David-Wu1119，位于 [#47238]
* 修复 siglip 检查点/词汇加载中的硬编码路径 (#47178) by @XanxusCrypto in [#47178]
* 由 @Abdennacer-Badaoui 在 [#47307] 中将 AMD CI 运行组更新为 amd-mi300 (#47307)
* 在 [#47255] 中@lefft 指向 Gemma4ForCausalLM 文档字符串示例 (#47255) 中的 Gemma 4 模型
* 修复 Qwen Omni 批量文本后处理 (#47197)，由 @Sunt-ing 在 [#47197] 中
* 将 AqlmConfig 错误消息修复为“int”而不是“float”(#47089)，由 @Sreekant13 在 [#47089] 中
* 修复了 [#47283] 中 @smart8986 对 _style 函数中交互式标准输出的检查 (#47283)
* 修复 get_json_schema 在非字符串文档字符串选择上崩溃 (#47072) by @Sreekant13 in [#47072]
* 让 `MODEL_IDS_TO_TOKENIZERS_BACKEND` 捕获 @hmellor 在 [#47296] 中的所有 DeepSeek R1 蒸馏结果 (#47296)
* 更新文档预处理正则表达式以防止 ReDoS (#47187) by @WilliamRoyNelson in [#47187]
* 读取 Dtensor 感知时的碎片 (#46717) by @3outeille in [#46717]
* 将 AMD daily CI 切换到 mi300 runners (#47259)，作者：@Abdennacer-Badaoui，位于 [#47259]
* 测试：通过使用小型集线器检查点来减少处理器测试内存使用量 (#47213) by @ydshieh in [#47213]
* Torch 编译后端默认为“neuron”（#47035），作者：@michaelbenayoun，位于 [#47035]
* 修复被 setuptools 83 破坏的 flash-attn Docker 构建，删除 pkg_resources (#47251) by @ydshieh in [#47251]
* 添加异构配置支持（每层配置）(#45333) by @eladsegal in [#45333]
* [修复] 由@eustlb 在 [#47146] 中更新集成测试值 (#47146)
* 由 @sshivampeta 在 [#47073] 中修复 DeepSpeed SP 丢失聚合和 LocalLayerRepository kwargs (#47073)
* 仅针对@3outeille 中的前 10 个下载模型进行测试 (#47244) [#47244]
* 修复 openai>=2.34.0 的 InputTokensDetails 缺少cache_write_tokens (#47248) by @ydshieh in [#47248]
* 恢复@ydshieh 在 [#47249] 中的“触发计划运行”(#47249)
* 从 CI 中删除 Executorch，直到最新版本受支持并在 CI env (#47242) 上由 @IlyasMoutawwakil 在 [#47242] 中进行全面测试
* 使用 `remap_legacy_layer_types` 对于自定义模型 (#47245) 更具防御性，由 @hmellor 在 [#47245] 中
* 通过 @3outeille 在 [#47237] 中修复未实现的 sp_plan 的 DistributedConfig 文档字符串 (#47237)
* 将 mlinter 切换为 0.1.2 (#47172)，由 @tarekziade 在 [#47172] 中
* 由 @ydshieh 在 [#47209] 中触发计划运行 (#47209)
* 使 executorch 导出器测试始终使用 xnnpack 后端 (#47201) by @tarekziade in [#47201]
* @Rocketknight1 在 [#45790] 中没有代理 PR 描述 (#45790)
* 澄清不带 __len__ 的数据集需要 max_steps (#47155) by @albertvillanova in [#47155]
* 清理管道，停止物化生成器 (#47142) by @Rocketknight1 in [#47142]
* 当 no_split_modules 具有不同大小时修复 device_map 计算 (#47203) by @Cyrilvallez in [#47203]
* 添加原生 FSDP2 模块 + 迁移 (#46707) by @3outeille in [#46707]
* 修复专家在两个位置的实现 (#47097) by @remi-or in [#47097]
* [修复] 从输出记录器中删除旧的自动交叉注意模式 (#47117) by @remi-or in [#47117]
* 🌐 [i18n-KO] 将 Accelerator_selection.md 翻译为韩语 (#47157) by @kkwjk2718 in [#47157]
* [i18n-KO] 将 optimization.md 翻译为韩语并修复 Furiosa 拼写错误 (#47156) by @kkwjk2718 in [#47156]
* [文档] 将大引号渲染为直引号 (#47135)，由 @clijo 在 [#47135] 中修复
* 修复不知道新线性图层类型名称的自定义代码 (#47174) by @hmellor in [#47174]
* 拒绝 `transformers_weights` 配置字段中的路径遍历 (#46890) by @LinZiyuu in [#46890]
* [文档] 自定义代码转换映射 (#47114) by @stevhliu in [#47114]
* 添加导出器最低版本要求和测试跳过 (#47161) by @IlyasMoutawwakil in [#47161]
* 测试：减少处理器测试内存使用量并使用微小的测试资产 (#47168)，作者：@ydshieh，位于 [#47168]
* 通过 @samyuktahegde 在 [#47136] 中澄清 Quicktour 推理示例 (#47136) 中的输入设备放置
* 将连续批处理内存预测测试扩展到 XPU (#47159)，由 @sywangyi 在 [#47159] 中
* 修复@hmellor 在 [#47148] 中向 `_LazyAutoMapping.register` 传递 `str` 密钥的情况 (#47148)
* [文档] MoE 解码切换 (#47149) by @stevhliu in [#47149]
* 添加 minicpm3 测试的 XPU 输出期望 (#47092) by @kaixuanliu in [#47092]
* Diffusion gemma：修复失败的测试用例（#47025），作者：@kaixuanliu [#47025]
* 添加 XPU 对 cosmos3_omni 测试的期望 (#46880) by @kaixuanliu in [#46880]
* 通过在 [#47147] 中@pariidanDKE 恢复池化器来修复 XLMRoberta/Camembert ForMultipleChoice 中的 IndexError 错误 (#47147)
* 跳过 Neuron 上的 caching_allocator_warmup （没有重用池来预热；当前 OOM）（#47029），作者：@dacorvo，在 [#47029]
* [文档] 连续批处理（卸载行为、最大批处理令牌、最小块大小）(#46925) 作者：@stevhliu，在 [#46925]
* [文档] 修复自动链接 (#46968) by @stevhliu in [#46968]
* 恢复 #47121 (#47144) by @eustlb in [#47144]
* 修复 AudioFlamingo3（及相关）模型的输出标签 (#47112)，由 @ebezzam 在 [#47112] 中
* 修复训练器文档字符串中的错误 __len__ 声明 (#47131)，作者为 @albertvillanova，位于 [#47131]
* 处理器测试：使用微型 Hub 存储库来减少 CI 内存 (#47115) by @ydshieh in [#47115]
* [serge] 修复模型 `dac` 的 12 个集成测试因 `output_mismatch` 失败（张量值不同 (6)，其他 (6)） (#47121)，由 @sergereview[bot] 在 [#47121] 中
* 修复 CLI 与 Huggingface_hub 1.22 的兼容性 (#47059) (#47064) by @dhruv7477 in [#47064]
* 我们想要在 [#47125] 中的 @tarekziade 的发布分支中运行 CI (#47125)
* @Cyrilvallez 在 [#47128] 中的小改进 (#47128)
* [模型] 支持 `use_cache=False` for DeepSeek V4 (#46965) by @kylesayrs in [#46965]
* 文档修复：序列分类指南中的 IMDb 数据集链接 (#47062)，作者：@abhishhekkapoorx，位于 [#47062]
* 修复 AltCLIP 文本嵌入调整大小测试 (#47079) by @IMvision12 in [#47079]
* 修复掩码返回类型合约回归，并为 [#47019] 中@kaixuanliu 的 (#47019) 添加正确性保护
* 通过卸载和权重转换修复 save_pretrained (#47018) by @Cyrilvallez in [#47018]
* 由 @vasqu 在 [#47044] 中更新开发 (#47044)
* [`Gemma4`] 由 @vasqu 在 [#47042] 中更新 1 集成测试 (#47042)


## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @ArthurZucker
    * v5.14.0
* @tarekziade
    * ci: 也覆盖 xet (运行时错误) (#47338)
    * 将内核固定到基准工作流程中的兼容版本 (#47339)
    * 将 mlinter 切换为 0.1.2 (#47172)
    * 使 executorch 导出器测试始终使用 xnnpack 后端 (#47201)
    * 从所有最新 GPU 映像中删除 executorch + 添加火炬烟雾测试 (#47196)
    * 我们想要在发布分支中运行 CI (#47125)
* @雷米-或
    * [Nit] 将 kernels_fallback_ok kwarg 添加到 is_flash_attn_N_available (#47318)
    * [Nit] 添加对 H100 上 gemma4 测试的期望 (#47311)
    * [修复] 从 `kernels` 调用中删除已弃用的参数 (#47100)
    * [修复] 使 DeepGEMM triton 后备更加稳健 (#47126)
    * 修复专家在两个位置的实现 (#47097)
    * [修复] 从输出记录器中删除旧的自动交叉注意模式 (#47117)
* @ydshieh
    * 测试：通过使用小型集线器检查点减少处理器测试内存使用量 (#47213)
    * 修复因 setuptools 83 删除 pkg_resources 而损坏的 flash-attn Docker 构建 (#47251)
    * 修复 openai>=2.34.0 的 InputTokensDetails 缺少cache_write_tokens (#47248)
    * 恢复“触发预定运行”(#47249)
    * 通过修补conftest中的cached_files来修复CI只读缓存故障（#47043）
    * 触发预定运行 (#47209)
    * 测试：减少处理器测试内存使用并使用微小的测试资产（#47168）
    * 处理器测试：使用微型 Hub 存储库来减少 CI 内存 (#47115)
* @eladsegal
    * 添加异构配置支持（每层配置）(#45333)
* @eustlb
    * [修复] 更新集成测试值 (#47146)
    *恢复#47121（#47144）
* @Ternura143
    * 添加 TIPSv2 (#46347)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.14.0` · 📅 发布：2026-07-15 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.14.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
