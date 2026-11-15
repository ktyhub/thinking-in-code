---
title: "ComfyUI v0.45.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.45.0"
version: "v0.45.0"
published: "2026-11-10"
type: "minor"
lang: "zh"
---

# ComfyUI v0.45.0

## 发生了什么变化
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17442 中的 @comfy-pr-bot 将 comfyui-frontend-package 映射到 1.58.5
* 为错误选择pixel_space VAE 时添加更好的错误。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17518
* 通过 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/17508 中使 SeedVR2 VAE 切片长度适应释放内存
* [合作伙伴节点] feat(Pika)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17509中添加Pika H3 Flex节点
* [合作伙伴节点] feat(Pika)：在 https://github.com/Comfy-Org/ComfyUI/pull/17328 中添加 @bigcat88 的 Pika Soundtrack、SFX 和 Music 节点
* [合作节点] feat(腾讯): 通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17534添加腾讯HY LLM节点
* @dante01yoon 在 https://github.com/Comfy-Org/ComfyUI/pull/17540 中默认开启 local_web_sso 和partner_node_token
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17541 中的工作流程模板更新为 v0.11.102
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17542 中的 @comfyanonymous 将 comfy-kitchen 版本更新为 0.2.41
* 修复潜在的崩溃问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17543
* qwen 3.x 的性能改进（第 4 部分）- 由 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/17361 中组合并行线性权重
* 在 agent_requirements.txt (CORE-692) 中命名 comfy-agent，但没有版本，作者为 https://github.com/Comfy-Org/ComfyUI/pull/17454 中的 @christian-byrne
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17531 中修复 @kijai 导入的网格物体上的重新网格物体
* 支持 https://github.com/Comfy-Org/ComfyUI/pull/17511 中 @kijai 的 RelayVSR (CORE-701)
* [合作伙伴节点] feat(Kling)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17536中将Kling 4.0 Flash模型和原始音频选项添加到Kling 4.0节点
* [合作伙伴节点] feat(OpenAI): 在https://github.com/Comfy-Org/ComfyUI/pull/17558中添加@bigcat88的GPT图像2.6模型
* [合作伙伴节点] feat(Qwen)：通过https://github.com/Comfy-Org/ComfyUI/pull/17527中的@bigcat88将Qwen Image节点移动到Comfy Router
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17563 中的工作流程模板更新为 v0.11.103
* [合作伙伴节点] feat(Gemini)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17560中将Omni Flash 1.2添加到Omni视频节点
* 通过 @GACLove 在 https://github.com/Comfy-Org/ComfyUI/pull/17555 中修复分辨率选择器 megapixel 精度
* 由 @alexisrolland 在 https://github.com/Comfy-Org/ComfyUI/pull/17569 中更新 api-node.md
* 将 run_cpu 可移植脚本移至 https://github.com/Comfy-Org/ComfyUI/pull/17571 中 @comfyanonymous 的 ./advanced
* 通过 @comfyui-wiki 在 https://github.com/Comfy-Org/ComfyUI/pull/17575 中使合作伙伴节点团队代码拥有者 comfy_api_nodes
* [合作伙伴节点] feat(ByteDance)：通过 @bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17579 中为 Seedance 2.5 添加 4k 分辨率
* 将可移植的快速 fp16 脚本移至 https://github.com/Comfy-Org/ComfyUI/pull/17570 中 @comfyanonymous 的 ./advanced
* 通过 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/17582 中为 Qwen 3.x 添加视频输入支持
* 添加固体模式以从 https://github.com/Comfy-Org/ComfyUI/pull/17497 中的@kijai 的 Splat 中提取网格
* 修复潜在的数据库问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17602
* 获取视频组件：在 https://github.com/Comfy-Org/ComfyUI/pull/17562 中通过@synap5e 保存解码帧一次，而不是两次
* 修复使用 UNetSelfAttentionMultiply 节点时的崩溃问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17603
* [合作伙伴节点] feat(OpenAI)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17591中添加GPT Image V3、GIF和SVG节点
* [合作伙伴节点] 杂务（Grok）：更新 @bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17532 中退役图像模型的价格和工具提示
* 修复 qwen fp8 生成文本时崩溃的问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17620
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/17632 中支持 @kijai 的 WeVisOne-VL (CORE-690)
* 避免 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/17625 中混合使用预取和非预取的组合线性
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17635 中 @kijai 在贪婪解码中应用重复/存在惩罚
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/17636 中添加纹理重新烘焙并支持 @kijai 的 UltraTex (CORE-606)
* 更新https://github.com/Comfy-Org/ComfyUI/pull/17650中@comfyanonymous自述文件中的图像编辑模型
* [合作伙伴节点] feat(Breeze)：在https://github.com/Comfy-Org/ComfyUI/pull/17611中添加@bigcat88的Breeze TTS 2语音和文本转语音节点
* [合作伙伴节点] feat(ByteDance): 在https://github.com/Comfy-Org/ComfyUI/pull/17631中添加@bigcat88的Seedream 5.5模型
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/17655 中支持 @kijai 的 MiniMax-H3-image (CORE-708)
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17658 中的工作流程模板更新为 v0.11.105

## 新贡献者
* @GACLove 在 https://github.com/Comfy-Org/ComfyUI/pull/17555 中做出了第一个贡献

**完整 Changelog**：https://github.com/Comfy-Org/ComfyUI/compare/v0.44.0...v0.45.0

---

> 📦 仓库：[comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · 🏷️ 版本：`v0.45.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.45.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
