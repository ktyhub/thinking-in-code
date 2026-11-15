---
title: "ComfyUI v0.44.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.44.0"
version: "v0.44.0"
published: "2026-11-04"
type: "minor"
lang: "zh"
---

# ComfyUI v0.44.0

## 发生了什么变化
* [合作伙伴节点] feat(Patina)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17384中添加Patina纹理节点
* [合作伙伴节点] feat(VEED): 在https://github.com/Comfy-Org/ComfyUI/pull/17388中添加@bigcat88的VEED Dubbing节点
* 通过https://github.com/Comfy-Org/ComfyUI/pull/17391中的@comfyui-wiki将工作流程模板更新为v0.11.98
* 通过 @comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17398 中将 pylint py 版本切换为 3.12
*匿名文件：绕过python，通过https://github.com/Comfy-Org/ComfyUI/pull/17386中的@rattus128进行memfd_create
* 通过 @comfy-pr-bot 在 https://github.com/Comfy-Org/ComfyUI/pull/17375 中将 comfyui-frontend-package 升级到 1.58.1
* 对没有 v 前缀的固定版本使用缓存前端。作者：@christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/17348
* 通过标签查找固定的前端版本，而不是列出每个版本。作者：@christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/17402
* 如果只有一个条件，则跳过 concat。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17413
* [合作伙伴节点] feat(BFL)：通过 @bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17394 中将 1080p、2K 和 4K 目标添加到 Flux Video Upscale V2 节点
* 支持 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/17412 中的 MiniMax-H3 潜在升级模型
* 如果多个条件中只有一个条件，则跳过连接。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17414
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17411 中支持 @kijai 的 MiniMax Sol-H3-VAE
* [合作伙伴节点] feat(WaveSpeed)：通过https://github.com/Comfy-Org/ComfyUI/pull/17319中的@bigcat88将FlashVSR和图像高档节点移动到Comfy Router
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17432 中的工作流程模板更新为 v0.11.100
* 支持 https://github.com/Comfy-Org/ComfyUI/pull/17425 中 @kijai 的 MiniMax-H3 上下文窗口
* [合作伙伴节点] feat(Ideogram)：在https://github.com/Comfy-Org/ComfyUI/pull/17428中通过@bigcat88为Ideogram 4.5精确编辑添加上下文窗口区域编辑
* 当两个张量相同时，不要调用 torch.equal 。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17439
* 添加一个节点来设置 VAE 计算数据类型。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17450
* [合作伙伴节点] feat(Pruna): 在https://github.com/Comfy-Org/ComfyUI/pull/17443中添加@bigcat88的P-Video Upscale节点
* [合作伙伴节点] feat(MiniMax)：在 https://github.com/Comfy-Org/ComfyUI/pull/17424 中添加 @bigcat88 的 H3 Max Recast、Extend、Reframe、Insert、Lip Sync 和 Camera Control 节点
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17434 中 @christian-byrne 的第一次预发布中停止分页 GitHub 版本
* 在https://github.com/Comfy-Org/ComfyUI/pull/17397中@christian-byrne返回作业详细信息中的execution_meta
* 支持 prores 并使用不同的色度子采样来保存视频。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17463
* 修复 https://github.com/Comfy-Org/ComfyUI/pull/17180 中 @christian-byrne 预取队列清理 (CORE-644) 中的 MTTPHead 解包崩溃问题
* 删除 https://github.com/Comfy-Org/ComfyUI/pull/17482 中 @comfyanonymous 中 AGENTS.md 中过时的指南
* 通过 @CyrilB1531 在 https://github.com/Comfy-Org/ComfyUI/pull/16941 中修复 fp8_e4m3fn_fast 通过动态 VRAM 回退到 bf16 计算
* [合作伙伴节点] feat(Topaz)：将Wonder 4模型添加到https://github.com/Comfy-Org/ComfyUI/pull/17491中@bigcat88的Topaz Image Enhance
* 修复 https://github.com/Comfy-Org/ComfyUI/pull/17487 中 @DoronGenzelHass 在 LTX 2.5 扩散 VAE 解码器上的 VAE 计算 Dtype 崩溃问题
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17492 中添加 @kijai 的带有自动增长图像输入的 TextGenerateV2
* 验证色度子采样输入。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17501
* [合作伙伴节点] feat(Sonilo): 在https://github.com/Comfy-Org/ComfyUI/pull/17475中添加@bigcat88的Sonilo Music 1.5节点
* [合作伙伴节点] Chore(ByteDance)：在 https://github.com/Comfy-Org/ComfyUI/pull/17507 中弃用 @bigcat88 的 Seedance 1.x 视频节点
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/17506 中支持 @kijai 的 PH3Image (CORE-697)
* [合作伙伴节点] feat(OpenAI)：在https://github.com/Comfy-Org/ComfyUI/pull/17493中添加@bigcat88的GPT-6.1 Terra和Sol模型
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17512 中的工作流程模板更新为 v0.11.101
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17513 中的嵌入文档更新为 v0.5.16
* @dante01yoon 在 https://github.com/Comfy-Org/ComfyUI/pull/17490 中默认开启 local_web_sso 和partner_node_token
* 恢复https://github.com/Comfy-Org/ComfyUI/pull/17514中@dante01yoon的“默认打开local_web_sso和partner_node_token”

## 新贡献者
* @CyrilB1531 在 https://github.com/Comfy-Org/ComfyUI/pull/16941 中做出了第一个贡献

**完整 Changelog**：https://github.com/Comfy-Org/ComfyUI/compare/v0.43.0...v0.44.0

---

> 📦 仓库：[comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · 🏷️ 版本：`v0.44.0` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.44.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
