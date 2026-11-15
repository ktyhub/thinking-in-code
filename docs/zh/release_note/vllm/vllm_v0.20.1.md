---
title: "vllm v0.20.1"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.1"
version: "v0.20.1"
published: "2026-05-04"
type: "patch"
lang: "zh"
---

# vllm v0.20.1

# vLLM v0.20.1

This is a patch release on top of `v0.20.0` primarily focused on **DeepSeek V4 stabilization and performance improvements**, along with several important bug fixes.

### DeepSeek V4
* Base model support (#41006).
* 多流预关注 GEMM (#41061)、可配置的预关注 GEMM 旋钮 (#41443) 和调整的默认 `VLLM_MULTI_STREAM_GEMM_TOKEN_THRESHOLD` (#41526)。
* BF16 和 MXFP8 对 FlashInfer 单侧通信的全面支持 (#40960)。
* PTX `cvt` 指令可实现更快的 FP32->FP4 转换 (#41015)。
* 集成瓦片内核 (`head_compute_mix_kernel`)，用于优化头部计算 (#41255)。
* Guard megamoe flag with Pure TP (#41522).
* Fixed persistent topk cooperative deadlock at TopK=1024 (#41189) and inter-CTA init race on RadixRowState (#41444), with temporary disable of persistent topk as a workaround (#41442).
* 修复了由于 AOT 编译缓存加载而导致的导入错误 (#41090)。
* Fixed torch inductor error (#41135).
* 修复了重复的 RoPE 缓存初始化 (#41148)。
* 修复了 DSV3.2/V4 中非流工具调用缺失的类型转换 (#41198)。

### 错误修复
* 修复了 `max_num_batched_token` 未在 CUDA 图中捕获的问题 (#40734)。
* 修复了 `num_gpu_blocks_override` 未计入 `max_model_len` 检查的问题 (#41069)。
* 自动禁用 cumem 内存池周围的 `expandable_segments` (#40812)。
* 修复了 BailingMoE V2.5 (#41185) 的 BailingMoE 线性层 (#40859) 和 MLA RoPE 旋转。
* 修复了推理解析器 kwargs 未传递到结构化输出的问题 (#41199)。
* [ROCm] 修复了 Quark W4A8 GPT-OSS 的 `input_ids` 和 `expert_map` 参数 (#41165)。

## List of contributors
@BugenZhao, @chaunceyjiang, @gau-nernst, @ghphotoframe, @Isotr0py, @jeejeelee, @khluu, @njhill, @Rohan138, @wzhao18, @youkaichao, @ywang96, @ZJY0516, @zixi-qi, @zyongye

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.20.1` · 📅 发布：2026-05-04 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.20.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
