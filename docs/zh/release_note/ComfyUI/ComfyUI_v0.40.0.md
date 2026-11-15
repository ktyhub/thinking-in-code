---
title: "ComfyUI v0.40.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-10-13"
type: "minor"
lang: "zh"
---

# ComfyUI v0.40.0

## 发生了什么变化
* [Server.py] 更新 CSP 以允许 @S0yKaf 在 https://github.com/Comfy-Org/ComfyUI/pull/15565 中使用 `blob:` 和 `data:`
* 通过 @comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16806 中为其余模型添加 comfy_attention 和 AttentionTensorContainer 支持
* 通过 @jtydhr88 在 https://github.com/Comfy-Org/ComfyUI/pull/16578 本地实现资产导出 API (CORE-454)
* 通过 @jtydhr88 在 https://github.com/Comfy-Org/ComfyUI/pull/16200 中将每个 3D 节点的 3D 模型报告为标准 3D 输出项
* feat(camera-info): CreateCameraInfo 节点 + CameraInfoState 小部件由 @jtydhr88 在 https://github.com/Comfy-Org/ComfyUI/pull/14964 中输入
* 壮举（资产）：在 https://github.com/Comfy-Org/ComfyUI/pull/15180 中通过 @jtydhr88 摄取和扫描时将视频元数据提取到 system_metadata 中
* 添加一种将元数据附加到提示的 websocket 消息的方法。作者：@christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/16763
*修复：在https://github.com/Comfy-Org/ComfyUI/pull/16377中保留@jaeone94的动态输入验证和延迟执行
* 重构：保持 DynamicGroup 内部，同时通过 https://github.com/Comfy-Org/ComfyUI/pull/16811 中的 @jaeone94 进行稳定
* 壮举：在https://github.com/Comfy-Org/ComfyUI/pull/16251中添加带有camera_info的CameraAngle节点和@jtydhr88的拍摄提示输出
* [合作伙伴节点] feat(Google)：在https://github.com/Comfy-Org/ComfyUI/pull/16822中添加@bigcat88的Nano Banana 2.1模型
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/16823 中的工作流程模板更新为 v0.11.77
* 通过 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/16820 中改进 qwen 3.5 LLM 的低 VRAM 性能
* 当 @tvukovic-amd 在 https://github.com/Comfy-Org/ComfyUI/pull/16726 中不适合 L2 时，使 gfx1151 上的 k/v 在 SDPA 之前连续
* 通过 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/16816 中将线性前向 API 与序言/尾声融合路径合并
* 还将元数据附加到提示的预览图像帧。作者：@christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/16809
* 通过 @guill 在 https://github.com/Comfy-Org/ComfyUI/pull/16167 中添加自定义节点的治理实施
* 模型文件中的 comfy_attention 配置现在可以使用 kitchen sol 注意。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16831
* 通过 @comfy-pr-bot 在 https://github.com/Comfy-Org/ComfyUI/pull/16736 中将 comfyui-frontend-package 升级到 1.55.14
* [合作伙伴节点] feat(Quiver)：添加带有每个模型输入的 V2 SVG 节点，并在 https://github.com/Comfy-Org/ComfyUI/pull/16775 中弃用 @bigcat88 的原始节点
* [合作伙伴节点] feat(Vidu): 在https://github.com/Comfy-Org/ComfyUI/pull/16849中为@bigcat88为Vidu Q4模型添加节点
* [合作伙伴节点] feat(ClarityAI)：在https://github.com/Comfy-Org/ComfyUI/pull/16817中添加@bigcat88的Crystal Upscaler节点
* [合作伙伴节点] feat(Kling): 在https://github.com/Comfy-Org/ComfyUI/pull/16844中添加@bigcat88的Kling Virtual Try-On节点
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/16851 中的工作流程模板更新为 v0.11.78
* 更改模型代码以使用 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/16861 中进行线性调用的函数包装器
* 修复旁路 loras 和融合路径的问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16862
* 对 GLB 纹理使用 PNG 压缩级别 4，以便 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/16867 中更快地保存
* 舒适的 Aimdo 0.5.6 + 在 https://github.com/Comfy-Org/ComfyUI/pull/16870 中通过 @rattus128 修复低 VRAM 条件下的 qwen 2.1 盗贼
* 修复了 @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/16877 中的 Qwen3.5 MTP 嵌入卸载
* Loras 现在可以替换模型上的每层注意力配置。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16880
* 链接 @christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/16769 中的 CodeRabbit 评论中的相关存储库
* 壮举：通过 @jaeone94 在 https://github.com/Comfy-Org/ComfyUI/pull/16309 中添加本机 LoRA 堆栈加载器节点 (CORE-186)
* 默认开启资产系统；通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16884 中添加 --disable-assets
* [合作伙伴节点] feat(HeyGen)：通过 @bigcat88 在 https://github.com/Comfy-Org/ComfyUI/pull/16876 中为 HeyGen Video 1.0 节点添加 2k 分辨率
* 将 LatentOperationBlend 和开始/结束百分比添加到 LatentApplyOperatio…，作者为 https://github.com/Comfy-Org/ComfyUI/pull/16923 中的 @comfyanonymous
* 禁用输出资产扫描。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16926
* 在 https://github.com/Comfy-Org/ComfyUI/pull/16922 中通过 @kijai 在 Qwen3.5 上启用带有图像的 MTP
* 将 MiniMax H3 单图像解码为 @kijai 在 https://github.com/Comfy-Org/ComfyUI/pull/16881 中的 clip 的第一个潜在图像
* 修复（资产）：通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16810 中按文件的 mtime 扫描资产的日期
* 对保存的 EXR 启用压缩。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16948
* 修复使用 pyav 加载半浮点文件的问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16949
* 保持链接存储库的发现由 @christian-byrne 在 https://github.com/Comfy-Org/ComfyUI/pull/16920 中重点关注
* 删除一些过时的代码。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16960
* 除非 --enable-assets 否则关闭资源，并通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16929 中再次扫描输出文件夹
* 通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16928 中为 Windows 独立构建打开资产系统
* 添加 ARM64 nvidia 便携式。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16985
* 删除加密包依赖。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16988
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/16981 中的嵌入文档更新为 v0.5.14
* [合作伙伴节点] feat(Higgsfield)：https://github.com/Comfy-Org/ComfyUI/pull/16913 中 @bigcat88 的 Genjutsu Motion Transfer 节点
* feat(assets)：EXR 资源预览，由 SaveImageAdvanced 编写，用于 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16898 中的输出
* [合作伙伴节点] feat(FishAudio)：在https://github.com/Comfy-Org/ComfyUI/pull/16999中添加@bigcat88的Drama 3模型
* 通过 @comfyui-wiki 将 https://github.com/Comfy-Org/ComfyUI/pull/17001 中的工作流程模板更新为 v0.11.82
* 由 @AustinMroz 在 https://github.com/Comfy-Org/ComfyUI/pull/17004 中将 comfyui-frontend-package 升级到 1.55.17

## 新贡献者
* @S0yKaf 在 https://github.com/Comfy-Org/ComfyUI/pull/15565 中做出了第一个贡献

**完整 Changelog**：https://github.com/Comfy-Org/ComfyUI/compare/v0.39.0...v0.40.0

---

> 📦 仓库：[comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · 🏷️ 版本：`v0.40.0` · 📅 发布：2026-10-13 · [查看英文原版 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.40.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
