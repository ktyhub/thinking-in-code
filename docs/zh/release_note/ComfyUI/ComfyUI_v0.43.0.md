---
title: "ComfyUI v0.43.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.43.0"
version: "v0.43.0"
published: "2026-10-27"
type: "minor"
lang: "zh"
---

# ComfyUI v0.43.0

## 发生了什么变化
* model_prefetch：同步 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/17178 中的所有图形清理
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17172 中为 @kijai 的 MOSS-image 添加绳索缩放支持
* [合作伙伴节点] 通过https://github.com/Comfy-Org/ComfyUI/pull/16943中的@dante01yoon更新API节点中的合作伙伴节点登录令牌
* [合作伙伴节点] feat(HeyGen)：在 https://github.com/Comfy-Org/ComfyUI/pull/17043 中添加 @bigcat88 的 HeyGen Voice 即时克隆和文本转语音功能
* [合作伙伴节点] feat(ClarityAI)：在https://github.com/Comfy-Org/ComfyUI/pull/17192中添加@bigcat88的Crystal Video Upscaler节点
* [合作伙伴节点] feat(BFL)：@bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17200 中为 FLUX 3 视频节点添加 2K/4K 分辨率
* https://github.com/Comfy-Org/ComfyUI/pull/17206中支持@kijai的MOSS图像颜色深度控制
* 在 Readme 中添加支持 MOSS 图像。通过 @comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17212
* [合作伙伴节点] feat(BFL): 通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17202中添加FLUX 3 Max节点
* 修复：通过 @curealb 在 https://github.com/Comfy-Org/ComfyUI/pull/17221 中更正 top-p 采样阈值
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17234 中的工作流程模板更新为 v0.11.92
* [合作伙伴节点] feat(Bria): FIBO 2.0 图像 由 @bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17229 中生成/编辑节点
* 将单头 LoRA 应用到 https://github.com/Comfy-Org/ComfyUI/pull/17239 中 @kijai 的 MiniMax-H3 PDD 头组
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17238 中的工作流程模板更新为 v0.11.93
* 通过 @comfy-pr-bot 在 https://github.com/Comfy-Org/ComfyUI/pull/17244 中将 comfyui-frontend-package 升级到 1.57.1
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/17240 中添加 @kijai 的 Fibo 2.0 支持
* 在要求中设置最低 Pillow 版本。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17249
* 通过 @DoronGenzelHass 在 https://github.com/Comfy-Org/ComfyUI/pull/17224 中添加带镜像填充的 Pad Image 节点和 pad to multiple
* 通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/17241 中通过 comfy-agent 的 v1 主机加载可选的本地代理
* [合作伙伴节点]修复(HeyGen)：在https://github.com/Comfy-Org/ComfyUI/pull/17257中通过@bigcat88更新HeyGen Voice价格徽章
* [合作伙伴节点] feat(Krea): 在https://github.com/Comfy-Org/ComfyUI/pull/17260中@bigcat88为Krea 3 Image节点添加超思维模式
* [合作伙伴节点] feat(VEED)：在 https://github.com/Comfy-Org/ComfyUI/pull/17242 中添加 Fabric 1.0、Lipsync 2.0 和 @bigcat88 的其他节点
* [合作伙伴节点] feat(Mirelo)：通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17265中添加Mirelo SFX节点
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17268 中的 @comfyui-wiki 将工作流程模板更新为 v0.11.94
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17279 中通过 @comfyanonymous 将模型集成指令添加到 AGENTS.md
* 由 @Nynxz 在 https://github.com/Comfy-Org/ComfyUI/pull/17220 中修复 Gemma 4 31B 全局注意力（k_eq_v，4 个全局 KV 头）
* 支持 https://github.com/Comfy-Org/ComfyUI/pull/17296 中 @kijai 的 MOSS-Image 编辑 LoRA
* qwen 3.x 性能改进第三部分 - 自适应树 MTP by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17273
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17297 中@rattus128 窃取 pin 之前同步卸载流
* Fibo 2.0：https://github.com/Comfy-Org/ComfyUI/pull/17290 中的 @kijai 将 RoPE 缩放更改为 NTK 感知
* 修复 https://github.com/Comfy-Org/ComfyUI/pull/17285 中 @kijai 处理 Fibo2.0 T2I 负提示的问题
* 舒适应该只包含与模型相关的内容。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17307
* Comfy-Aimdo 0.6.0 + 动态 VRAM KV 将 @rattus128 的第一部分缓存在 https://github.com/Comfy-Org/ComfyUI/pull/17274 中
* [合作伙伴节点] feat(Meshy): 在 https://github.com/Comfy-Org/ComfyUI/pull/17280 中添加 @bigcat88 的 Meshy T2.5 智能拓扑 tnodes
* [合作伙伴节点] feat(PixVerse): 在https://github.com/Comfy-Org/ComfyUI/pull/17287中添加@bigcat88的PixVerse V6-Max模型
* [合作伙伴节点] feat(Bria)：@bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/17289 添加 3 个新节点
* [合作伙伴节点] feat(Ideogram): 在https://github.com/Comfy-Org/ComfyUI/pull/17298中添加@bigcat88的Ideogram Vector生成SVG节点
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17301 中的工作流程模板更新为 v0.11.96
* 通过https://github.com/Comfy-Org/ComfyUI/pull/17271中的@0xDELUXA在AMD上的VAE中启用pytorch注意力
* 通过 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/17196 中的 comfy-kitchen 熔断并剥离 Flux2 VAE
* 添加 ACEScg 来转换图像色彩空间并保存图像（高级）EXR (CORE-657) by @DoronGenzelHass in https://github.com/Comfy-Org/ComfyUI/pull/17023
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17052 中添加 @guill 的舒适 API 控制台提示
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17320 中为 @kijai 编辑的 MOSS-Image 添加注意偏差调节和图像强度
* 不要在 https://github.com/Comfy-Org/ComfyUI/pull/17323 中 @kijai 在 gfx11 上使用 pytorch 注意 来处理高于 256 的头部亮度
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17331 中的 @comfyanonymous 更新 AGENTS.md 中的架构边界
* 稍微降低峰值 MOSS 内存。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17338
* 在 https://github.com/Comfy-Org/ComfyUI/pull/17203 中添加 @guill 部署到云端点和功能标志
* 通过@AustinMroz在https://github.com/Comfy-Org/ComfyUI/pull/16383中添加一个分支节点
* 为 MOSS 添加特定于模型的合并节点。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/17349
* [合作伙伴节点]修复(client): 在https://github.com/Comfy-Org/ComfyUI/pull/17346中尊重@bigcat88的代理环境变量
* 文档：将华为品牌添加到 https://github.com/Comfy-Org/ComfyUI/pull/17359 中 @yzeyu71 的 README 中的 Ascend NPU 部分
* 通过 @comfy-pr-bot 在 https://github.com/Comfy-Org/ComfyUI/pull/17329 中将 comfyui-frontend-package 升级到 1.57.4
* [合作伙伴节点] feat(Kling): 通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/17364中添加Kling 4.0节点
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17366 中的 @comfyui-wiki 将嵌入文档更新为 v0.5.15
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/17368 中的 @comfyui-wiki 将工作流程模板更新为 v0.11.97

## 新贡献者
* @curealb 在 https://github.com/Comfy-Org/ComfyUI/pull/17221 中做出了第一个贡献
* @DoronGenzelHass 在 https://github.com/Comfy-Org/ComfyUI/pull/17224 中做出了第一个贡献
* @Nynxz 在 https://github.com/Comfy-Org/ComfyUI/pull/17220 中做出了第一个贡献
* @yzeyu71 在 https://github.com/Comfy-Org/ComfyUI/pull/17359 中做出了第一个贡献

**完整 Changelog**：https://github.com/Comfy-Org/ComfyUI/compare/v0.42.0...v0.43.0

---

> 📦 仓库：[comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · 🏷️ 版本：`v0.43.0` · 📅 发布：2026-10-27 · [查看英文原版 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.43.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
