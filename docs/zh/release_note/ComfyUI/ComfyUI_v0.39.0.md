---
title: "ComfyUI v0.39.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.39.0"
version: "v0.39.0"
published: "2026-10-05"
type: "minor"
lang: "zh"
---

# ComfyUI v0.39.0

## 发生了什么变化
* 支持 https://github.com/Comfy-Org/ComfyUI/pull/16657 中 @kijai 的 LynnReal light Minimax-H3 vae
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/16618 中的 @comfyui-wiki 将嵌入文档更新为 v0.5.13
* 使用更高质量的默认值来保存视频编码。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16663
* 壮举：在 https://github.com/Comfy-Org/ComfyUI/pull/16260 中添加 @jaeone94 输入的 DynamicGroup 小部件
* 修复（资产）：不要让无法列出的模型类别中止 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16658 中的扫描
* 修复（资产）：当驱动器返回并通过 https://github.com/Comfy-Org/ComfyUI/pull/16646 中的 @synap5e 进行哈希处理时恢复记录
* 修复在 https://github.com/Comfy-Org/ComfyUI/pull/16667 中 @comfyanonymous 在 qwen 图像 2.1 中选择 int8 或 int4 缓存时崩溃的问题
* [合作伙伴节点] feat(Anthropic)：在https://github.com/Comfy-Org/ComfyUI/pull/16647中添加@bigcat88的Sonnet 5.5模型
* [合作伙伴节点] feat(Ideogram): 在https://github.com/Comfy-Org/ComfyUI/pull/16689中为@bigcat88为Ideogram 4.5模型添加节点
* 修复 minimax vae 卸载问题。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16698
* [合作伙伴节点] feat(HeyGen)：在https://github.com/Comfy-Org/ComfyUI/pull/16695中为@bigcat88为HeyGen Video 1.0模型添加节点
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/16693 中的 @comfyui-wiki 将工作流程模板更新为 v0.11.73
* 为 Save EXR 添加 16 位浮点支持。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16706
* 通过 @comfy-pr-bot 在 https://github.com/Comfy-Org/ComfyUI/pull/16456 中将 comfyui-frontend-package 升级到 1.53.10
* 在 https://github.com/Comfy-Org/ComfyUI/pull/16677 中由 @Tokha233 发布打包的 MiniMax H3 在块之前嵌入临时块
* 将“exr”选项的默认位深度更新为 16 位浮点数。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16715
* 壮举：添加 --offline 和 --disable-partner-nodes，通过 @deepme987 在 https://github.com/Comfy-Org/ComfyUI/pull/16672 中弃用 --disable-api-nodes
* [合作伙伴节点] feat(BFL): 通过@bigcat88在https://github.com/Comfy-Org/ComfyUI/pull/16716中添加FLUX 3 Image节点
* [合作伙伴节点] feat(Grok): 在https://github.com/Comfy-Org/ComfyUI/pull/16721中添加@bigcat88的grok-imagine-video-1.5-lite模型
* 通过 @purzbeats 在 https://github.com/Comfy-Org/ComfyUI/pull/16724 中将工作流程模板更新为 v0.11.74
* 修复（资产）：批量前缀过滤器，以便扫描可通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16645 中处理许多模型文件夹
* 通过 @comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16738 中将 comfy-kitchen 版本更新为 0.2.37
* [合作伙伴节点] Chore(Luma)：在 https://github.com/Comfy-Org/ComfyUI/pull/16741 中通过 @bigcat88 弃用 Ray 2 节点
* 通过 https://github.com/Comfy-Org/ComfyUI/pull/16739 中的 @comfyui-wiki 将工作流程模板更新为 v0.11.76
* @rattus128 在 https://github.com/Comfy-Org/ComfyUI/pull/16746 中自动禁用集成 GPU 上的固定内存
* feat(assets)：报告扫描CPU和暂停时间，并通过https://github.com/Comfy-Org/ComfyUI/pull/16719中的@synap5e对扫描失败进行分类
* 修复（资产）：资产关闭时不获取数据库锁；当 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16742 中持有它时发出警告
* 将创建边界框背景作为 @jtydhr88 在 https://github.com/Comfy-Org/ComfyUI/pull/16636 中的 UI 预览进行回显
* perf(assets)：让部分实时路径索引通过 @synap5e 在 https://github.com/Comfy-Org/ComfyUI/pull/16659 中进行实时行路径查找
* [合作伙伴节点] feat(ElevenLabs)：在https://github.com/Comfy-Org/ComfyUI/pull/16737中添加@bigcat88的11个v4和v4 Turbo模型
* [合作伙伴节点] 修复(OpenAI): 删除 https://github.com/Comfy-Org/ComfyUI/pull/16744 中 @bigcat88 的 GPT 图像 2 的透明背景
*修复（资产）：在短批次中写入修剪和离线标记，这样保存就不会被https://github.com/Comfy-Org/ComfyUI/pull/16696中的@synap5e锁定
* 通过 @comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16762 中向 AGENTS.md 添加新的关注和编译器内容
* 为更多模型添加 comfy_attention 和 AttentionTensorContainer 支持。作者：@comfyanonymous 在 https://github.com/Comfy-Org/ComfyUI/pull/16766
* 修复（资产）：在短事务中写入扫描插入，因此上传和输出保存不会被锁定 + 使用 WAL synchronous=NORMAL by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16748
* 修复（资产）：一旦https://github.com/Comfy-Org/ComfyUI/pull/16765中的@synap5e提示队列为空，恢复后台扫描
* 修复（资产）：在 https://github.com/Comfy-Org/ComfyUI/pull/16764 中 @synap5e 的文件夹遍历和文件统计期间暂停启动扫描
* 修复（资产）：当目标位于 https://github.com/Comfy-Org/ComfyUI/pull/16722 中的 @synap5e 的另一个卷上时，将上传内容复制到位

## 新贡献者
* @jaeone94 在 https://github.com/Comfy-Org/ComfyUI/pull/16260 中做出了第一个贡献
* @Tokha233 在 https://github.com/Comfy-Org/ComfyUI/pull/16677 中做出了他们的第一个贡献

**完整 Changelog**：https://github.com/Comfy-Org/ComfyUI/compare/v0.38.0...v0.39.0

---

> 📦 仓库：[comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · 🏷️ 版本：`v0.39.0` · 📅 发布：2026-10-05 · [查看英文原版 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.39.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
