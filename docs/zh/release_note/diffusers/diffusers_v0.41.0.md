---
title: "diffusers v0.41.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.41.0"
version: "v0.41.0"
published: "2026-10-06"
type: "minor"
lang: "zh"
---

# diffusers v0.41.0

> [!提示]
> 此版本为 Diffusers 带来了 Qwen-Image 2.1，具有文本到图像生成、图像编辑、原生透明度和 LoRA 训练功能。
>
> 从本版本开始，我们采用 Transformers 发布理念：围绕新模型集成协调次要版本，同时包含自上一版本以来合并的其他更改。补丁发布仍然侧重于修复。请参阅我们的[发布政策](https://huggingface.co/docs/diffusers/main/en/conceptual/contribution#when-new-model-or-pipeline-support-is-released)。

## **Qwen-图像 2.1**

[Qwen-Image 2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) 将图像生成和编辑统一在一个模型中。其视觉生成组件有7B个参数，支持多个参考图像和透明图像的原生RGBA输出。查看[文档](https://huggingface.co/docs/diffusers/main/en/api/pipelines/qwenimage21) 了解更多详细信息。

感谢 [@naykun](https://github.com/naykun) 的模型集成 ([#14804](https://github.com/huggingface/diffusers/pull/14804))。

**其他亮点**

- **张量并行检查点加载：**每个rank直接读取自己的分片权重切片，减少加载过程中所需的内存。 ([#14544](https://github.com/huggingface/diffusers/pull/14544))
- **LTX-2.5 DFR：** 新管道支持使用关键帧槽和可组合的空间和时间细化进行生成。 ([#14567](https://github.com/huggingface/diffusers/pull/14567))
- **Cosmos 3：** SeaCache 支持 ModelOpt FP8 检查点的混合 W8A8/W8A16 去噪。 （[#14663]（https://github.com/huggingface/diffusers/pull/14663），[#14664]（https://github.com/huggingface/diffusers/pull/14664））
- **模块化扩散器：** Wan 2.2 VACE 获得模块化块，并且从现有本地路径加载避免了不必要的重量下载。 （[#14432]（https://github.com/huggingface/diffusers/pull/14432），[#14797]（https://github.com/huggingface/diffusers/pull/14797））
- **更多单文件加载器：** 支持 Krea 2 和 MiniMax-H3。 （[#14914]（https://github.com/huggingface/diffusers/pull/14914），[#14839]（https://github.com/huggingface/diffusers/pull/14839））
- **测试：** 我们删除了单一的 `test_pipelines_common.py` 测试套件，以建立更多的模块化和透明的测试实施。更多详情请参阅 https://github.com/huggingface/diffusers/pull/14669/。

**弃用和兼容性**

🚨 ONNX 支持已弃用；使用 Optimum for ONNX 运行时工作流程。 ([#14658](https://github.com/huggingface/diffusers/pull/14658))

之前弃用的 API 已被删除，包括 `LuminaText2ImgPipeline` 和 `Lumina2Text2ImgPipeline` 别名。请改用 `LuminaPipeline` 和 `Lumina2Pipeline`。较旧的集成应在升级之前检查[已删除的代码路径](https://github.com/huggingface/diffusers/pull/14838)。

感谢所有为此版本做出贡献的人！

## 所有提交

* [文档] 清理 #14535 中 @stevhliu 的链接
* 文档：修复@iridescentWen 在 #14541 中的文档、评论和文档字符串中的 14 个拼写错误
* [文档] LTX-2.5 模块化管道文档，作者：@dg845，#14450
* [代理文档] 添加 lora 测试说明。由 @sayakpaul 在 #14549
* @akshan-main 在 #14547 中将 bria 管道测试重构为新的 mixin 结构
* 壮举：改进问题提醒工作流程并引入 @sayakpaul 在 #14477 中的条件自动关闭
* [测试] AOT 编译失败由 @sayakpaul 在 #14553 中修复
* [测试] 跳过 @sayakpaul 在 #14551 中进行的 hunyuan 框架组卸载测试
* [测试] 删除 autoencodertestermixin 并重命名新的。由 @sayakpaul 在 #14555
* 测试：修复 @sayakpaul 在 #14554 中 VidTok 切片/平铺测试中的 CUDA OOM
* 将 bria fibo 编辑管道测试重构为 @akshan-main 在 #14577 中的新 mixin 结构
* 将 bria fibo 管道测试重构为 @akshan-main 在 #14570 中的新 mixin 结构
* 如果管道测试由 @akshan-main 在 #14580 中对新的 mixin 结构进行重构，则重构 deepfloyd
* 弃用 @sayakpaul 在 #14583 中的 CLI 文档中的“fp16_safetensors”命令
* 修复@Sreekant13 在 #14287 中的消息和文档字符串中的重复单词和拼写错误
* Fibo 编辑：@ShivamShrrirao 在 #14566 中的多参考调节和批处理
* [测试] 添加配置以从叶级组卸载中排除模块 by @dg845 in #14564
* [测试] 由 @sayakpaul 在 #14557 中重构通量控制 lora 测试
* [测试] 迁移 `test_pipelines.py` 以使用 pytest。由 @sayakpaul 在 #14222
* [核心] 将扩散器库名称传递给 @sayakpaul 在 #14441 中的内核调用
* [测试] hunyuan, ltx, ltx2 by @sayakpaul in #14587
* 在 #14414 中@kaixuanliu 在文档中制作与设备无关的示例
* 将 `LTX2Guidance` Guider 移至 `guiders/` 文件夹，由 @dg845 在 #14558 中完成
* 如果 img2img 管道测试 @akshan-main 在 #14596 中对新的 mixin 结构进行重构，则重构 deepfloyd
* 如果将管道测试修复到新的 mixin 结构，则由 @akshan-main 在 #14602 中重构 deepfloyd
* 如果超分辨率管道测试@akshan-main 在#14603 中对新的 mixin 结构进行重构，则重构 deepfloyd
* 如果 img2img 超分辨率管道测试由 @akshan-main 在 #14604 中对新的 mixin 结构进行重构，则重构 deepfloyd
* 文档：更正@yiyixuxu 在#14561 中的enable_gqa / cuDNN 解释
* 如果将超分辨率管道测试修复到新的 mixin 结构，则重构 deepfloyd，由 @akshan-main 在 #14606 中进行
* [测试] 迁移@sayakpaul 在 #14582 中的 acestep、auraflow、cogview4 和 helios 测试
* 如果 @akshan-main 在 #14611 中共享测试 mixin，则删除已死的 deepfloyd
* [代理文档]在#14531中添加@yiyixuxu的报告指南
* 将 cogvideox lora 测试迁移到 @akshan-main 在 #14615 中的管道级 mixin
* [测试] 迁移flux2 lora。由 @sayakpaul 在 #14610
* 将 wan vace lora 测试迁移到 @akshan-main 在 #14614 中的管道级 mixin
* @sayakpaul 在 #14545 中发布 0.40.0 后
* 将 wan lora 测试迁移到 @akshan-main 在 #14613 中的管道级 mixins
* 测试：为管道添加 ideogram4 测试。由 @sayakpaul 在 #14599
* [测试] 修复远程解码测试并禁用编码测试。由 @sayakpaul 在 #14601
* [测试] 迁移剩余的通量管道测试以使用 @sayakpaul 在 #14560 中的新 mixins
* [测试] @sayakpaul 在 #14563 中重构 zimage 和 krea2 管道测试
* [测试] 重构 sdxl 测试。由 @sayakpaul 在 #14619
* [测试] 删除双币种测试。由 @sayakpaul 在 #14254
* 测试：从 #14559 中@sayakpaul 的tests/lora 迁移测试
* ci：修复编译测试的调用。由 @sayakpaul 在 #14552
* 修复 Ideogram 4 回调处理和测试，由 @dg845 在 #14621 中完成
* 修复 #14416 中 @LuShadowX 从未在去噪循环中绑定的回调张量输入
* [CI] 修复@stevhliu 在 #14627 中损坏的链接
* 将 ideogram4 lora 测试迁移到 @akshan-main 在 #14628 中的管道级 mixin
* @akshan-main 在 #14629 中将 lumina2 管道测试重构为新的 mixin 结构
* [测试] 重构d系列管道测试。由 @sayakpaul 在 #14630
* [测试] 重构*管道测试。由 @sayakpaul 在 #14622
* [测试] @sayakpaul 在 #14625 中重构 b* 管道测试
* [测试] @sayakpaul 在 #14631 中重构 e 和 g 系列管道测试
* [测试] @sayakpaul 在 #14633 中重构 h 和 i 系列管道
* [测试] @sayakpaul 在 #14632 中重构 j 系列管道测试
* [下载] 在 #14340 中@Wauplin 在 from_pretrained 开头解决一次修订
* 添加@alexanderar 在 #14567 中的 LTX-2.5 DFR 管道（关键帧槽、空间细节、平铺时间回合）
* 对于无 cuda 设备，请跳过这些情况，因为建模包含 cuda ... by @sywangyi in #14656
* [测试] 由 @sayakpaul 在 #14654 中重构剩余的 s 系列管道
* [测试] @sayakpaul 在 #14636 中重构 k 系列管道测试
* [测试] 由 @sayakpaul 在 #14653 中重构 v 系列管道测试
* [测试] @sayakpaul 在 #14638 中重构 m 和 n 系列管道测试
* [测试] 由 @sayakpaul 在 #14637 中重构 l 系列管道测试
* [测试] 重构 c* 管道测试。由 @sayakpaul 在 #14626
* [测试] @sayakpaul 在 #14646 中重构 o 和 p 系列管道测试
* [测试] 由 @sayakpaul 在 #14655 中重构 ltx2 dfr 管道测试
* [核心] @sayakpaul 在 #14658 中弃用 onnx
* 文档：纠正 @iridescentWen 在 #14578 中 Chroma 管道文档字符串中规定的默认值
* [测试] 修复@sayakpaul 在 #14687 中的 SVD 测试
* [测试] 拆分管道组卸载块级和叶级测试，由 @dg845 在 #14635 中进行
* [测试] 修复 ci 上的 sana bf16 测试。由 @sayakpaul 在 #14688
* 不要在 #14677 中具体化 @DavidBert 的 PRX 注意力掩模
* [Cosmos 3] 通过 @dg845 在 #14693 中修复 Cosmos 3 组卸载测试
* 修复 PriorTransformer Group Offloading Bug by @dg845 in #14695
* [train_text_to_image_decoder.py] 在 #14542 中@shoutoutuoadi325 在分布式训练环境中传递 num_train_epochs 时修复 LR 调度程序
* ModularPipeline.save_pretrained：将默认的 `overwrite_modular_index` 更改为 True by @yiyixuxu in #14659
* 通过 @akshan-main 在 #14432 中为 wan 2.2 vace 添加模块化模块集
* 在 #14093 中 @SuryanshSS1011 启用/禁用缓存时使 HookRegistry 子注册表缓存无效
* 在剩余的 FlowMatch 管道中设置调度程序开始索引，以避免 @shoemoney 在 #14576 中进行 DtoH 同步
* 测试：为模块化添加 lora tester mixin 并迁移 minimax h3。由 @sayakpaul 在 #14605
* 代理文档：在 #14709 中添加 @yiyixuxu 进行公关通信的要求
* [社区] 添加 CachedSearch 脚本：用于视频管道的更便宜的 best-of-N，由 @shreshthsaini 在 #14735 中编写
* [测试] 部分修复了 @sayakpaul 在 #14689 中的 sd2 高档测试
* [httpx 迁移] #14753 中 @Wauplin 从 Huggingface_hub 导入 httpx
* [文档] 通过 @stevhliu 在 #14537 中改进导航
* 通过@wunianze666-netizen 在 #14682 中的记录器路由非交互式库消息
* 修复自动管道映射之外的系列的模块化管道类解析，由 @akshan-main 在 #14736 中进行
* 文档：修复了两个文档字符串，这些文档字符串引用了代码中没有的 @iridescentWen 在 #14733 中的名称
* [Cosmos3] @ConstBob 在 #14664 中对 ModelOpt FP8 检查点进行混合 W8A8/W8A16 去噪
* [torchao]：修复了 #14686 中 @sayakpaul 解析和处理 FqnConfig 的方式
* [CI] 在 #14623 中 @DN6 的 `@diffusers-bot` 下整合样式、Serge 审查和 GPU 测试机器人
* 修复（ci）：通过@hf-security-analysis[bot]在#14788中强化GitHub操作工作流程（#14623）
* @sayakpaul 在 #14798 中对 pr_link_issue_reminder 工作流程的更改
* 修复（ci）：通过 @hf-security-analysis[bot] 在 #14800 中强化 GitHub 操作工作流程（#14798）
* [文档] 重构 @stevhliu 在 #14783 中的入门部分
* 文档：@simpleqt 在 #14757 中将八个小文档修复合并到一个 PR 中
* 在 #14804 中添加 @naykun 的 Qwen-Image 2.1
* 添加 SeaCache 对 Cosmos3 管道的支持，由 @yzhautouskay 在 #14663 中添加
* 扩展测试/其他/test_cli_commands.py::TestRunCommand::test_group_… by @sywangyi in #14697
* 在卸载到磁盘之前同步计算流，作者：@jiqing-feng #14657
* 修复了 torch.compile 下的 flash/sage varlen prep，其中 @ShivamShrirao 在 #14568 中使用动态形状
* [核心] 修复了分割设备管道的组件设备放置，由 @JingyaHuang 在 #14739 中完成
* 在 #14288 中修复@meng ChengTang 的 Ascend NPU RMSNorm 和融合注意力掩模形状
* [文档] @ariG23498 在 #14826 中的超链接拼写错误
* [文档] 修复与 #14778 中 @revanth-045 的签名不匹配的文档字符串参数
* [文档] 使用@stevhliu 在 #14805 中的扩散管道
* [文档] 修复 @Wauplin 在 #14830 中遗留的 hf CLI 引用（扩散器）
* 由 @wunianze666-netizen 在 #14748 中修复分布式 epoch 的 Wuerstchen LoRA 调度程序步骤
* 在 #14836 中添加 @DN6 对 Qwen 2.1 的单文件支持
* 基于 xet dedup 的文件共享的测试和文档。由 @sayakpaul 在 #14835
* 每个作业的范围 GITHUB_TOKEN 权限由 @hf-security-analysis[bot] 在 #14852 中
* 通过 @hf-security-analysis[bot] 在 #14853 中固定 GitHub 提交 SHA 的操作
* [LoRA] 在 #14808 中添加 @linoytsaban 对 Qwen Image 2.1 的 LoRA 训练
* [文档] @stevhliu 在 #14842 中的适配器
* 修复当特征形状在步骤之间发生变化时 TaylorSeer 缓存崩溃的问题，@hide3tu 在 #14831 中
* @SammyTourani 在 #14767 中在无 fp64 后端的设备传输中降低 MiniMax-H3 的位置 ID
* [MInimax H3] 修复@asomoza 在 #14754 中的 VAE 解码
* [realfill] 当 num_train_epochs 在分布式训练环境中通过 @825pranav 在 #14885 中传递时修复 LR 调度程序
* [LoRA] 转换仅携带融合 qkv 的 Z-Image LoRA，并由 @christopher5106 在 #14875 中暴露注意力密钥
* 通过 @BeyondBirthday07 在 #14872 中修复扁平化 CLIP 文本编码器的 LoRA 加载
* [扩散器-cli] 为扩散器 cli hf 作业添加一个 docker 文件，由 @sayakpaul 在 #14550 中完成
* [核心]传播圣人注意力更新。由 @sayakpaul 在 #14584
* [文档] @sayakpaul 在 #14904 中的文档发布理念
* 在 #14847 中 @sayakpaul 提取 PR 的 GPU 测试时将输出吐出到 stderr
* 在 #14838 中删除 @DN6 已弃用的代码路径
* [Cosmos3] 通过 @yzhautouskay 在 #14897 中的控制 CFG 修复 Transfer SeaCache 工件
* [修复] 在#14874中添加@stevhliu的返回类型
* [核心] 在加载和保存时分片张量并行检查点，由 @JingyaHuang 在 #14544 中提供
* [模块化] #14797 中通过 @DN6 从现有本地路径加载时避免下载权重
* 在 #14839 中通过 @DN6 添加对 Minimax H3 的单文件支持
* 在 #14792 中整合 @DN6 的火炬设备后端调度
* 杂务：添加一个额外的复制自 qwenimage 2.1 vae by @sayakpaul in #14810
* 在 #14914 中通过 @DN6 添加对 Krea 2 的单文件支持
* 由 @tbsbngrtz 在 #14925 中将 Krea 2 文本编码器输出标记为 denoiser_input_fields
* [错误修复] 修复 Cosmos3 FP8 张量并行性，由 @yzhautouskay 在 #14921 中修复
*代理文档：仅支持@yiyixuxu在#14750中使用的已发布检查点
* 修复：@ariG23498 在 #14781 中弃用 Siglip2ImageProcessorFast
* [模块化] Echo 团队欢乐未来学院 jd echo by @Gelercatty by @sayakpaul in #14941
* [测试] 重构@sayakpaul 在 #14701 中的管道级注意力处理器测试
* 在 QwenImage21Pipeline 上配置固定采样 sigmas 由 @naykun 在 #14950 中
* [杂务] 在 #14946 中由 @sayakpaul 从自动编码器 Flux2 中删除force_upcast
* [测试] 在 #14669 中删除 @sayakpaul 的 `test_pipelines_common.py`
* 发布：@sayakpaul 的 v0.41.0-release（直接提交到 v0.41.0-release）

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @dg845
    * [文档] LTX-2.5 模块化管道文档 (#14450)
    * [测试] 添加配置以从叶级组卸载中排除模块 (#14564)
    * 将 `LTX2Guidance` Guider 移动到 `guiders/` 文件夹 (#14558)
    * 修复 Ideogram 4 回调处理和测试 (#14621)
    * [测试] 拆分管道组卸载块级和叶级测试 (#14635)
    * [Cosmos 3] 修复 Cosmos 3 组卸载测试 (#14693)
    * 修复 PriorTransformer 组卸载错误 (#14695)
* @akshan-main
    * 将 bria 管道测试重构为新的 mixin 结构 (#14547)
    * 将 bria fibo 编辑管道测试重构为新的 mixin 结构 (#14577)
    * 将 bria fibo 管道测试重构为新的 mixin 结构 (#14570)
    * 如果管道测试为新的 mixin 结构，则重构 deepfloyd (#14580)
    * 如果 img2img 管道测试为新的 mixin 结构，则重构 deepfloyd (#14596)
    * 如果将管道测试修复为新的 mixin 结构，则重构 deepfloyd (#14602)
    * 如果超分辨率管道测试新的 mixin 结构，则重构 deepfloyd (#14603)
    * 如果 img2img 超分辨率管道测试重构 deepfloyd 到新的 mixin 结构 (#14604)
    * 如果将超分辨率管道测试修复为新的 mixin 结构，则重构 deepfloyd (#14606)
    * 如果共享测试 mixin，则删除已死的 deepfloyd (#14611)
    * 将 cogvideox lora 测试迁移到管道级 mixins (#14615)
    * 将 wan vace lora 测试迁移到管道级 mixins (#14614)
    * 将 wan lora 测试迁移到管道级 mixins (#14613)
    * 将 ideogram4 lora 测试迁移到管道级 mixins (#14628)
    * 将 lumina2 管道测试重构为新的 mixin 结构 (#14629)
    * 为 wan 2.2 vace 添加模块化模块组 (#14432)
    * 修复自动管道映射之外的系列的模块化管道类解析 (#14736)
* @kaixuanliu
    * 在文档中制作与设备无关的示例 (#14414)
* @亚历山大
    * 添加 LTX-2.5 DFR 管道（关键帧槽、空间细节、平铺时间轮）(#14567)
* @ConstBob
    * [Cosmos3] ModelOpt FP8 检查点的混合 W8A8/W8A16 去噪 (#14664)
* @naykun
    * 添加 Qwen-Image 2.1 (#14804)
    * 在 QwenImage21Pipeline 上配置固定采样西格玛 (#14950)
* @yzhautouskay
    * 添加 SeaCache 对 Cosmos3 管道的支持 (#14663)
    * [Cosmos3] 使用控制 CFG 修复 Transfer SeaCache 工件 (#14897)
    * [错误修复] 修复 Cosmos3 FP8 张量并行性 (#14921)

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.41.0` · 📅 发布：2026-10-06 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.41.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
