---
title: "unsloth v0.1.911-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.911-beta"
version: "v0.1.911-beta"
published: "2026-10-26"
type: "pre"
lang: "zh"
---

# unsloth v0.1.911-beta

此版本添加了计划任务、FLUX-3 编辑支持、性能改进等。另外还有新产品：MiniMax-M3.1-Flash、图像面部修饰以及 Mac 上更快的性能和聊天。

## 亮点

- **计划任务**：使用本地模型或 API 按计划运行提示
- **MiniMax-M3.1-Flash**：MiniMax 的 428B MoE（23B 活动）[指南](https://unsloth.ai/docs/models/minimax-m3.1-flash)
- **FLUX 3 编辑**：FLUX 3 现在支持带提示的图像编辑
- **性能改进**：大型 Mac 性能提升、延迟减少、二进制文件大小减小
- **保存的预设**：将您的运行设置保存为每个模型的命名预设

## 计划任务

- 从侧边栏的“更多”菜单中打开“计划”，以每天、工作日、每周或每月运行一次提示；每个答案都会保存为新的聊天。
- 每个任务都可以在加载的模型、设备上的模型或来自连接的 API 提供商的模型上运行。
- 当任务的模型未加载时，Unsloth 会在加载之前进行询问，除非您打开 **当我离开时自动切换**。
- 每个任务可以在每次运行后通知您，只有当它失败时，或者从不通知您。
- 任务仅在 Unsloth 运行时运行，无需工具或网络搜索。

## 用户界面 + 用户体验

- 将模型选择器中的运行设置保存为每个模型的命名预设，然后重命名、删除或在它们之间切换。
- 您上次选择的预设是该模型下次加载的预设，包括通过 API 加载。
- 聊天设置可以记住您的模型采样设置，或将其重置为模型的推荐值。
- GGUF 聊天现在在回复开始之前显示处理长提示时的进度和剩余时间。
- API 页面现在显示每个服务模型的上下文使用、速度和请求计数。
- 现在应用程序中的每种按钮和图标看起来都一样。
- 设置中的库和系统页面将存储显示为使用栏，分为模型、缓存和可用空间。

## 麦克

- MLX 聊天现在使用草稿模型的回复速度提高了 16%。
- 附带内置草图模型的 MLX 模型现在会自动使用它，无需单独下载。
- 图像和视频渲染最终需要的内存要少得多，因此低内存 Mac 很少会因交换而减慢速度。
- 在 Apple Silicon 上，Z-Image GGUF 现在默认使用 MLX 引擎从文本生成图像，1.5-2x 比以前更快。

## 图片+视频

- 使用“视频”页面上的 NVIDIA Cosmos3-Edge 从文本或图像制作视频。
- 在“图像”页面上，打开“细节设计器”以更高分辨率重新绘制脸部、手部或您命名的其他物体；它需要 SAM 3 和一个可以修复的模型。
- 在早于 RTX 30 系列的 NVIDIA GPU 上，Wan2.1 1.3B 文本到视频 clips 的渲染速度提高了约 5 倍。
- 在 NVIDIA GPU 上，许多图像和视频模型在首次加载后加载速度更快，因为 Unsloth 会保存其在首次加载时构建的版本。
- FLUX.3 Klein 现在可以在“图像”>“编辑”中编辑照片，并保持照片的尺寸。

## 培训

- 将模型的每一层拆分到 GPU 上进行 LoRA 和 QLoRA 训练，因此每个 GPU 占用的空间更少：将 `UNSLOTH_TP_SIZE` 设置为 GPU 数量并使用 `torchrun` 启动。
- 微调 Unsloth 的 4 位 gpt-oss 检查点不再在第一个训练步骤中崩溃。
- 使用 vLLM 生成的 GRPO 在配备 NVIDIA GPU 的 Linux 上使用 16 位 LoRA，每步运行速度提高了 1.9 倍。
- 对于 Llama 和 Qwen3，在 NVIDIA GPU 上，无需 vLLM 生成的 GRPO 每步运行速度提高了 4.4 倍。
## 编码剂 + API

- 使用 Unsloth API 密钥的应用程序无法再批准自己的 Python 或终端调用在沙箱外运行。
- Unsloth 不再默认转发 client IP；在您自己的反向代理后面，设置 `UNSLOTH_STUDIO_TRUST_FORWARDED=1` 或所有用户共享一个登录速率限制。

## 模型+硬件

- 运行 MiniMax-M3.1-Flash，MiniMax 的 MoE 模型，用于编码、工具使用和代理工作流程，具有高达 1M 的上下文令牌。 [GGUF](https://huggingface.co/unsloth/MiniMax-M3.1-Flash-GGUF)
- 在 1 位时，MiniMax-M3.1-Flash 需要至少 130 GB RAM 和 VRAM 组合。
- 在某些 Windows PC 上，GGUF 模型会再次加载，而不是每次都因“llama-server 启动失败”而失败。

## 下载 Unsloth 桌面

Unsloth Desktop 是**免费且开源的**。下载它的目的是：
<表>
  <tr>
    <td><b>平台</b></td>
    <td><b>链接</b></td>
  </tr>
  <tr>
    <td><b>Windows</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows.exe'>下载</a></td>
  </tr>
  <tr>
    <td><b>macOS</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-MacOS.dmg'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux x64 / Ubuntu (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu.deb'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux ARM64 / Ubuntu 24.04+ (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu-ARM64.deb'>下载</a></td>
  </tr>
  <tr>
    <td><b>Linux x64（AppImage）</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Linux.AppImage'>下载</a></td>
  </tr>
  <tr>
    <td><b>Windows ARM64</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows-ARM64.exe'>下载</a></td>
  </tr>
</表>

## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/14994 中的 @danielhanchen 的 unsloth>=2026.10.8、unsloth-zoo>=2026.10.8
* Studio：在https://github.com/unslothai/unsloth/pull/14940中通过@Lyxot同步Apple MPS上的VAE解码和编码调用
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14995 修复主工作室安装检查红色
* MTP：在 https://github.com/unslothai/unsloth/pull/14912 中保存 @danielhanchen 命名的 PEFT 适配器时，保持经过训练的头部
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14990 中修复 main 上的 test_every_resolver_probe_forwards_the_trust_decision
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14997 中格式化 unsloth/models/speculative.py
* Studio：在 https://github.com/unslothai/unsloth/pull/14941 中 @Lyxot 在 torch 2.13+ 上每次调用时使用 MPS SDPA 预填充内核
* Studio扩散：测量MOSS-Image和FLUX.3 Klein碱的激活行；图层分割价格 Z-Image 从 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14950 中测量的行
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14991 中修复主线上的四个红色检查
* 在 https://github.com/unslothai/unsloth/pull/15003 中由 @danielhanchen 修复主干线上的另外两个红色后端检查
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/14937 中@danielhanchen 删除流步骤图后（Wan2.2-TI2V-5B at 8 / 12 GB）保持每个请求的驻留拟合
* ROCm 上的 FP8 块反量化：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14992 中将 fp32 舍入到 fp16
* get_peft_model：通过https://github.com/unslothai/unsloth/pull/14910中的@danielhanchen将标量layers_to_transform作为列表传递给PEFT
* 工作室扩散：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14951 中固定 2 GiB 离散卡储备（ComfyUI 风格的固定储备加上激活估计）
* 工作室扩散：fp32 VAE upcasts 保持卸载的 VAE 的固定主机权重（SDXL 级force_upcast VAE），作者：https://github.com/unslothai/unsloth/pull/14946 中的 @danielhanchen
* 工作室视频：MiniMax-H3 融合 VAE 解码器遵循混合精度负载，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14986 中编码重叠解码
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14884 中使用预标记的 input_ids 截断completion_mask / Assistant_masks
* Studio：从 https://github.com/unslothai/unsloth/pull/14181 中的 @samihsq 的技能对话框中以 ZIP 格式导入和导出技能
* 工作室扩散：限制预取器的固定分段，以便引导 Z-Image-Turbo 在 https://github.com/unslothai/unsloth/pull/14975 中的 @danielhanchen 在 31 GB 主机 (Kaggle T4x2) 上渲染
* 工作室扩散：块卸载重新引脚落在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14765 中记录的步骤图的地址处
* Studio扩散：通过@danielhanchen在https://github.com/unslothai/unsloth/pull/14982中削减int8 ConvRot开销（每个共享输入一次旋转，SwiGLU融合到下量化，因子旋转内核）
* 在 https://github.com/unslothai/unsloth/pull/15015 中@danielhanchen 在步骤图捕获流发布测试中固定 CUDA 可用性
* 代理指导 CI：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15013 解决 openclaw 腿的最新 Node 24
* 工作室扩散：每个渲染阶段学习峰值，因此稍后的加载使文本编码器驻留在 https://github.com/unslothai/unsloth/pull/14979 中的 @danielhanchen
* Studio sd.cpp：将所有 Q8_0 图像 GGUF 路由到 BF16 cuBLAS，将 k 量子保留在 https://github.com/unslothai/unsloth/pull/14983 中的 @danielhanchen 的 MMQ 上
* Studio：在 https://github.com/unslothai/unsloth/pull/14954 中的@danielhanchen 具有自己的前缀 KV 缓存的副本上运行 Qwen-Image-2.1 CFG 分支
* Studio MLX 图像：LoRA 负载保留 sd.cpp 或扩散器，而不是路由到 https://github.com/unslothai/unsloth/pull/14874 中 @danielhanchen 的 MLX 拒绝
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15017 中的 AST 检查 load_model 上的 GGUF 负载标记
* Studio sd.cpp：当 Studio 的策略在 https://github.com/unslothai/unsloth/pull/14859 中 @danielhanchen 关闭直接卷积时，传递 --conv-direct off
* 将 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15018 中的 test_pretokenized_dataset 中读取的 trainer.py 上的编码命名为
* MLX 后端测试：存根动物园的新 fused_drafter_ops，作者：@danielhanchen，位于 https://github.com/unslothai/unsloth/pull/15020
* 工作室扩散：将未调谐的拱门 (sm86 / 90 / 100 / 121) 路由到 https://github.com/unslothai/unsloth/pull/14988 中 @danielhanchen 的探针和延迟检查后面的分解 ConvRot 内核上
* 原生 FSDP2：更快的 native_clip_grad_norm_ 遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14973 中的 torch clip_grad_norm_ dtypes
* 原生 FSDP2 float16：当 https://github.com/unslothai/unsloth/pull/14996 中的@danielhanchen 在 fused AdamW 下每个等级溢出时跳过该步骤
* 块编译：router_logits capture 不再重新编译 https://github.com/unslothai/unsloth/pull/14998 中 @danielhanchen 的每一层
* 编译块：让 xformers 替代 SDPA 远离 cuDNN 的关注，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15009
* 工作室图像：在解码和流常驻组处决定 VAE 平铺，因此卸载编辑解码直至 https://github.com/unslothai/unsloth/pull/15006 中的 @danielhanchen
* SFT：在 https://github.com/unslothai/unsloth/pull/15010 中通过 @danielhanchen 保持单专家配置 (Jamba) 的路由器辅助丢失
* 扫描基线：重新审查 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15031 中移动的 8 个非树懒动物园站点 2026.10.8
* Studio：当组卸载离开 https://github.com/unslothai/unsloth/pull/14955 中的每个组居民时，保持 Z-Image CFG 拆分
* 工作室图片：细节设计师（面部修复）通过 SAM 3 并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14616 进行修复
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14964 中以线程方式本地记录 CUDA 图形，并将其他线程的同步排除在 @danielhanchen 的记录之外
* 选择 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15007 中进行的 torchao float8 培训以进行全面微调
* 将冻结的 load_in_fp8 权重排除在 FSDP2 分片和 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15001 中广播的 DDP 之外
* 设置选项卡冒烟：在 https://github.com/unslothai/unsloth/pull/15032 中按 @danielhanchen 的 Backspace 之前按住快捷录音机框
* 工作室扩散：更正 https://github.com/unslothai/unsloth/pull/15035 中@danielhanchen 的融合 RMSNorm 精度注释
* FSDP2 QLoRA：重复使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15011 中计划的 NF4 dequant 发布来获取所有收集的权重
* Studio：默认将 Apple Silicon 图像请求路由到 MLX 引擎，其余部分由 https://github.com/unslothai/unsloth/pull/14883 中的 @danielhanchen 进行扩散器 MPS
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15040 中的 test_diffusion_zimage_cfg_split 中命名另外两个扩散.py 读取的编码
* FSDP2：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15008 中步进本地分片来保持位和字节 8 位 AdamW 状态
* Unsloth Studio / Desktop：当 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/14816 中规划卸载时，图像生成会忽略 VRAM 预算设置
* Unsloth Studio / Desktop：记住 https://github.com/unslothai/unsloth/pull/14845 中 @LeoBorcherding 的每个图像模型的文本编码器和 VAE 文件
* Studio：在 https://github.com/unslothai/unsloth/pull/15036 中 @danielhanchen 在渲染结束时将视频渲染的固定主机内存返回给驱动程序
* 块编译：保留调用者的 Flex BACKEND，而不是在 https://github.com/unslothai/unsloth/pull/15044 中添加 @danielhanchen 的 FORCE_USE_FLEX_ATTENTION
* FSDP2 Optimizer_cls 测试：遵循 #15008，将位和字节 Adam / AdamW 保留在 https://github.com/unslothai/unsloth/pull/15049 中 @danielhanchen 的本地分片上
* 解码 LoRA 转换缓存：https://github.com/unslothai/unsloth/pull/15052 中 @danielhanchen 的融合优化器步骤后刷新
* FSDP2 原生：https://github.com/unslothai/unsloth/pull/15023 中 @danielhanchen 的梯度累积和检查点重新计算下的集体更少
* 注意：在 https://github.com/unslothai/unsloth/pull/15019 中@danielhanchen 在 SM100 上继续训练 SDPA，使其脱离 cuDNN 注意力
* mxfp4_packed_matmul：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15060 中需要梯度的输入的精确梯度
* 后端 CI：在 https://github.com/unslothai/unsloth/pull/15061 中由 @danielhanchen 分割 3.13 分片 a-f / g-r 而不是 a-k / l-r
* 原生 FSDP2 float16：在 https://github.com/unslothai/unsloth/pull/15033 中 @danielhanchen 向后缩放一个 GPU 时开始损失缩放
* 工作室扩散：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14857 中的 low_vram 卸载中更改 dtype 后，删除陈旧的固定主机布局条目
* Studio sd.cpp：仅当进程加载的每个 GGUF 都是 Q8_0 时，才对 Q8_0 使用 BF16 cuBLAS，作者为 https://github.com/unslothai/unsloth/pull/15054 中的 @danielhanchen
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15048 中@danielhanchen 的解码时间驻留版本中保持 VRAM 预算储备免费
* 当没有找到 GPU 时在 CPU 上训练，而不是在 https://github.com/unslothai/unsloth/pull/14717 中拒绝 @danielhanchen 导入
* 工作室扩散：在重量量化上关键 CFG 批量判决，而不仅仅是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15047 中的模块布局
* Studio 扩散：当 https://github.com/unslothai/unsloth/pull/15039 中的 @danielhanchen 无法访问 Hub 时，每个进程一个有界 Hub 探针
* MOSS-Image：在 https://github.com/unslothai/unsloth/pull/14929 中 @danielhanchen 在 CUDA 之外的 CPU 上构建 float64 时间步长正弦曲线
* Studio：在https://github.com/unslothai/unsloth/pull/15057中@danielhanchen在后台编译录制渲染上分割引导Z图像
* Studio：fp32 VAE upcast 释放每个 16 位设备张量，因为它是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15058 中投射的
* Studio：https://github.com/unslothai/unsloth/pull/15064 中的 @danielhanchen 未完成的 VAE 拟合检查不会将 CUDA 图形池缓存视为免费
* Studio MLX：重试被拒绝的共存扩散器回退，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15056 中卸载 MLX
* MoE per-expert dW：计算流水线共享内存，适应 https://github.com/unslothai/unsloth/pull/15070 中 @danielhanchen 溢出卡的图块
* 编译下的 FP8 dequant：在没有本机 bf16 的卡上保留 bf16 的火炬路径，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15071 中
* Studio：在 https://github.com/unslothai/unsloth/pull/14726 中 @vineethsaivs 的视觉训练中保留带有空标题的行
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15074 中格式化 MoE 每专家 dW 共享内存文件
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15065 中 @danielhanchen 的 2048 年最坏情况下，不要将驻留变压器降级为整个模块卸载
* 原生 FSDP2：权重的分片简历读取和 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15042 中选择加入的分片优化器检查点
* FastDiffusionModel：记录明确的 float32 请求，以便 T4 训练保持 float32 by @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15062
* 原生 FSDP2：跨等级同步初始可训练权重； @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15012 中对 FastSentenceTransformer 和 FastDiffusionModel 进行分片
* 忘记 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15072 中后端测试之间的最后一个 NVML 库存
* Studio：CFG 批处理、H3 预算和流驻留拟合检查不将 CUDA 图形池缓存视为免费，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15067 中
* Studio NVFP4：在两种开关状态下标记编译缓存，以便旧版缓存永远不会与 https://github.com/unslothai/unsloth/pull/15055 中的 @danielhanchen 匹配
* 工作室传播/视频：在 https://github.com/unslothai/unsloth/pull/15059 中通过 @danielhanchen 共享缓存加载调用的集线器可达性判定
* 工作室图片：在 https://github.com/unslothai/unsloth/pull/15063 中运行 Detailer inpaints，@danielhanchen 热切且无法计数
* Studio：在 https://github.com/unslothai/unsloth/pull/15066 中的 @danielhanchen 的 MLX 路由器扩散器回退之前运行图像加载门
* Studio：命名图像和视频加载，以便卸载仅结束由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14827 中完成
* Studio：多阶段配套和 CFG 副本适合检查不将 CUDA 图形池缓存视为免费，作者：https://github.com/unslothai/unsloth/pull/15069 中的 @danielhanchen
* Studio：在 https://github.com/unslothai/unsloth/pull/15077 中@danielhanchen 保持主机内存在集成 GPU 上不固定
* 在 https://github.com/unslothai/unsloth/pull/15086 中@danielhanchen 的 NVFP4 act-quant 测试中将扩散.py 读取为 UTF-8
* 为嵌入器卸载竞赛测试空间提供 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15082 中的缓慢发布
* @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15041 中进行 DPO 和 GRPO 培训的上下文并行 (Ulysses)
* @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15075 中对包量化压缩张量检查点进行完全微调
* 将两个扩散路线测试假货带到 https://github.com/unslothai/unsloth/pull/15090 中 @danielhanchen 的负载 id 路线
* 不要让间隙工作线程锁定测试死锁其自己的工作线程 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15091
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15081 中的组预取器流式传输卸载的 ControlNet
* 工作室扩散：将下一个转发的第一个卸载组带入 https://github.com/unslothai/unsloth/pull/15088 中@danielhanchen 的空闲复制尾部
* FP8 测试：在 sm89+ 上相同的自动反量化路线，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15078 中的文件之间没有 Fp8Dequantize 泄漏
* 使用 eager 加载 Mamba / FalconMamba，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15076 中拒绝的 sdpa
* GRPO 训练员：跟随动物园的火炬 < 2.12 门，在 https://github.com/unslothai/unsloth/pull/15100 中@danielhanchen 实现持久性 TMA matmul
* 在 https://github.com/unslothai/unsloth/pull/15092 中恢复火炬 AdamW 和 bnb 8 位的本机 FSDP2 优化器检查点，作者为 @danielhanchen
* Studio：在https://github.com/unslothai/unsloth/pull/15094中由@danielhanchen在VAE解码之前释放Qwen-Image-2.1前缀KV缓存
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15096 中，当 gfx1151 超出 L2 时，SDPA 之前的连续 k/v
* 工作室扩散：让降噪器驻留在 https://github.com/unslothai/unsloth/pull/15099 中 @danielhanchen 的文本编码器之前
* FP8 到 NF4 负载测试：比较 https://github.com/unslothai/unsloth/pull/15103 中 @danielhanchen 没有 bf16 的 GPU 上的负载数据类型
* Studio UI 完善：https://github.com/unslothai/unsloth/pull/15080 中的项目、API 页面、音频输入、设置布局由@shimmyshimmer 完成
* 块编译：标记批处理暗淡动态，以便不均匀的最后一批不会重新编译 https://github.com/unslothai/unsloth/pull/15106 中的 @danielhanchen 的每一层
* Studio：https://github.com/unslothai/unsloth/pull/15085 中的 @shimmyshimmer 在明暗中为每个红色按钮提供一个红色阴影
* Studio：API 页面的语言和平台选项卡代码示例由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15084 中提供
* FP8 电感器全图测试：在 GPU 上允许一个 ulp，其中电感器在 https://github.com/unslothai/unsloth/pull/15107 中融合 @danielhanchen 的 dequant
* 在其行中查找 LAN 地址的操作，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15109 中的文本的父级
* 工作室扩散：将前端组卸载引脚打包到 @danielhanchen 的 https://github.com/unslothai/unsloth/pull/15105 板中
* Studio：https://github.com/unslothai/unsloth/pull/15108 中@danielhanchen 交叉前向预取视频渲染
* 从https://github.com/unslothai/unsloth/pull/15114中@danielhanchen的project_folders中的组件中读取工作文件夹选择器标签
* MXFP4 压缩线性测试：fp16，其中 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15113 中不支持 bf16
* 融合 LoRA：merge_and_unload / unload 后的普通线性投影不再崩溃，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15119 中
* 等待沙箱选择落地，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15120 中固定的 5 毫秒滴答声
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15095 中进行惰性先向解压缩后，解开压缩张量卸载缓存
* 预提交：使用 ruff-unsloth 格式，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14993 中对 Stock ruff 进行三遍处理
* Studio：更短的特工权限描述，甚至 https://github.com/unslothai/unsloth/pull/15124 中 @shimmyshimmer 的卡片填充
* 本机 FSDP2 Optimizer.pt 恢复：保存的运行参数从未由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15050 中步进
* 将 Mamba dt_proj 保留在 4 位之外，以便 QLoRA 在 https://github.com/unslothai/unsloth/pull/15079 中转发@danielhanchen 的作品
* 当 unsloth 启动更改上下文时保留推理限制 @NilayYadav in https://github.com/unslothai/unsloth/pull/15027
* MXFP4 torch 解码：torch < 2.12 上的 fp32 中的 fp16，其中 https://github.com/unslothai/unsloth/pull/15121 中的 @danielhanchen ldexp 溢出
* 工作室视频：将 MiniMax-H3 的延迟流式传输块固定到位，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15118 中进行流预取
* 在 https://github.com/unslothai/unsloth/pull/15131 中由 @danielhanchen 恢复后端测试之间的集线器源和端点环境
* 仅在 https://github.com/unslothai/unsloth/pull/15101 中 @danielhanchen 加载的 Unsloth 模型上运行 Unsloth 的补丁转发
* 保持托管 vLLM 和 SGLang 环境在 https://github.com/unslothai/unsloth/pull/15024 中 @NilayYadav 的 Docker 更新中可用
* 修复 https://github.com/unslothai/unsloth/pull/15045 中 @Imagineer99 在 CSP 下加载书籍和文档配方的问题
* Studio：修复模型选择器在 https://github.com/unslothai/unsloth/pull/14985 中由 @NilayYadav 打开空的“设备上”选项卡的问题
* 在重新读取 https://github.com/unslothai/unsloth/pull/15000 中@danielhanchen 存储在电感器还原环路（火炬 < 2.14）中的缓冲区之前进行同步
* 将 Unsloth 提供程序添加到 OpenClaw 在 https://github.com/unslothai/unsloth/pull/15028 中由 @NilayYadav 选择的配置
* 让 OpenClaw 应用程序设置读取 https://github.com/unslothai/unsloth/pull/15029 中 @NilayYadav 的有效 JSON5
* 在https://github.com/unslothai/unsloth/pull/14693中@Imagineer99加载MOSS-TTS-Nano之前解释禁用的SentencePiece
* 训练 SDPA：火炬选择 cuDNN 的存储桶序列长度，因此填充批次停止重建计划（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15134 中）
* 在 https://github.com/unslothai/unsloth/pull/15068 中通过@take-lying-flat 保留蒸馏主干转发中的填充掩码
* Studio：记住 https://github.com/unslothai/unsloth/pull/15025 中@NilayYadav 登录时每个帐户的聊天偏好
* 上下文并行强化学习：隐藏状态的单张量全收集和向后减少分散，作者：https://github.com/unslothai/unsloth/pull/15132 中的 @danielhanchen
* 当unsloth启动在https://github.com/unslothai/unsloth/pull/15026中通过@NilayYadav命名加载的模型时保留运行时设置
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15129 中@danielhanchen 保持 bf16 降噪器的整个模块卸载通过流媒体地板
* FP8 块 GEMM：TMA 描述符内核，在 B200 上具有 4 级 K 循环，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15136
* 从 https://github.com/unslothai/unsloth/pull/15133 中的 @danielhanchen 从每步训练路径中删除隐藏的主机设备同步
* 交叉熵：在 https://github.com/unslothai/unsloth/pull/15141 中 @danielhanchen 在 B200 上的分块转发中，在 4 个扭曲处有 8192 个宽块
* FSDP2：在 https://github.com/unslothai/unsloth/pull/15135 中@danielhanchen 在没有主机同步的情况下复制梯度同步，每个梯度累积周期一次
* Studio：集中 GGUF 身份规则并排除 @oobabooga 在 https://github.com/unslothai/unsloth/pull/15073 中不完整的 GGUF 分割
* Studio：显示即时进度、实时生成详细信息以及 @oobabooga 在 https://github.com/unslothai/unsloth/pull/14909 中加载 GGUF 的位置
* 工作室扩散：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15144 中测量的激活情况，将 SDXL 驻留在 15-16 GB 卡上
* 尊重 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15145 中的 use_gradient_checkpointing=False 优于 TRL 的gradient_checkpointing=True 默认值
* Studio扩散：在 https://github.com/unslothai/unsloth/pull/15146 中的 @danielhanchen 的管道加载中读取本地 int8 / fp8 预量化缓存
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15148 中由 @danielhanchen 卸载时，解码 Wan VAE 直至或以最少的适合块数
* FP8 块 GEMM：找到 torchao 0.18 blockwise_fp8_gemm 并将每个调用路由到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15153 中更快的内核
* Studio：在 https://github.com/unslothai/unsloth/pull/15151 中的 @danielhanchen 计算每个整个模块阶段中的 LTX-2.5 编码器工作线程上下文
* Studio扩散：将延迟编译从https://github.com/unslothai/unsloth/pull/15150中的@danielhanchen卸载和Qwen-Image-2.1降噪器的渲染中移出
* 张量并行性 v1：apply_tensor_parallel 用于密集解码器（LoRA / QLoRA），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15137
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15147 中的 @danielhanchen 仅支持 fp16 的 GPU 上将 Wan2.1-T2V-1.3B 保留在 fp16 中
* 工作室扩散：从 https://github.com/unslothai/unsloth/pull/15149 中 @danielhanchen 测量的 FLUX.1 峰值中播种密集的 bf16 位置
* 无填充：通过简单的 autograd 调用 flash varlen。 https://github.com/unslothai/unsloth/pull/15160 中 @danielhanchen 的 eager 函数
* 在梯度检查点 (UNSLOTH_BLOCK_CUDAGRAPHS=1) 下选择加入编译块的 CUDA 图，作者为 https://github.com/unslothai/unsloth/pull/15154 中的 @danielhanchen
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15152 中缓存每个专家卸载的本机 int8 DiT（Wan2.2-A14B 热加载 210 秒到 21 秒）
* DDP：在纯文本批次上找到完全微调的 VLM 未使用的参数；本机 FSDP2 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15156 中命名专家并行性
* FSDP2：可用内存适合检查、无需重新计算的 MFU（单独的 HFU）、@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15158 中对小型 GPU 的 nccl2 警告
* 将 test_studio_root_resilience 保留在 https://github.com/unslothai/unsloth/pull/15165 中的@danielhanchen 的后端实用程序和记录器上
* 清除 https://github.com/unslothai/unsloth/pull/15167 中 @danielhanchen 的 CUDA 图测试块中的编译终止开关
* 在 https://github.com/unslothai/unsloth/pull/15162 中 @danielhanchen 的 return-logits 测试中提升 for_inference 的张量并行助手
* 工作室扩散：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15163 中的步数来选择每个请求的整个模块与流式卸载
* 块编译：https://github.com/unslothai/unsloth/pull/15157 中 @danielhanchen 在 torch 2.13+ 上使用isolate_recompiles 进行按区域重新编译限制
* 解码：将 K/V 直接写入缓存槽，并选择 https://github.com/unslothai/unsloth/pull/15171 中@danielhanchen 的解码步骤的 CUDA 图形重放
* 工作室视频：缓存 Wan 文本对每个文本进行编码，因此 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15166 中对未更改的否定提示进行一次编码
* Studio：随处可见的一个音频图标，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15112 中实现文本转语音的 ai-speech
* Studio：在 https://github.com/unslothai/unsloth/pull/15104 中固定运行设置页脚，半径刻度上的模型选择器由 @shimmyshimmer 提供
* Studio：重新设计库和系统存储部分，作为 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15083 中的使用概述
* Studio：API 页面字体，https://github.com/unslothai/unsloth/pull/15111 中@shimmyshimmer 在聊天设置中采样页脚
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15173 中@danielhanchen 在模型/顺序卸载下流式传输 Wan 编码
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/15051 中跨 1 个目录将 python 安全组中的 84.0.0 的安装工具从 84.0.0 提升到 84.1.0
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/14675 中碰撞 github/codeql-action/init
* 通过 https://github.com/unslothai/unsloth/pull/14503 中的 @dependabot[bot] 进行 2 次更新，将 Cargo-tauri 组跨越 1 个目录
* 在 https://github.com/unslothai/unsloth/pull/14442 中通过 @dependabot[bot] 在工作室/前端中凹凸 vite、@modelcontextprotocol/sdk 和 dompurify
* Studio：采样页脚等待 https://github.com/unslothai/unsloth/pull/15177 中 @shimmyshimmer 的 Remember and Save 之前读取的已保存采样
* 按规则查找“运行设置”页脚，而不是按 https://github.com/unslothai/unsloth/pull/15181 中 @danielhanchen 的 div 计数
* 通过 https://github.com/unslothai/unsloth/pull/14932 中的 @dependabot[bot] 将 npm_and_yarn 组中 /docker/jupyter/unsloth_labext 中的 dompurify 从 3.4.16 提升到 3.4.17 跨 1 个目录
* 管道并行性 v1：适用于密集解码器（GPipe、1F1B）的 apply_pipeline_parallel，作者：https://github.com/unslothai/unsloth/pull/15175 中的 @danielhanchen
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15178 中跳过集成 GPU 上的卸载成本探针的固定缓冲区，由 @danielhanchen 提供
* Studio：20px xl 角半径，作者：@shimmyshimmer，https://github.com/unslothai/unsloth/pull/15123
* 在 https://github.com/unslothai/unsloth/pull/15182 中为单行解码工具提供 @danielhanchen 真正的 _decode_graphs 助手
* 工作室视频：在https://github.com/unslothai/unsloth/pull/15179中@danielhanchen按其尺寸固定卸载重量，而不是2的幂
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/15053 中将 pip 组跨越 1 个目录进行 2 次更新
* Studio：https://github.com/unslothai/unsloth/pull/15122 中@shimmyshimmer 为每个主按钮提供一个填充
* LayerNorm / RMSNorm：https://github.com/unslothai/unsloth/pull/15180 中 @danielhanchen 的每 GPU num_warps 表
* Studio扩散：由@danielhanchen在https://github.com/unslothai/unsloth/pull/15183中将急切的本机int8 W8A8线性作为一个编译函数（位相同，1.33x流）运行
* SFT：当 https://github.com/unslothai/unsloth/pull/15185 中的 @danielhanchen 绑定微批次时，选择填充批次 + 块编译而不是填充
* 默认情况下为 RL 训练器生成解码图，由@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15188 返回训练时发布
* 融合 Qwen3 QK 规范 + RoPE：在 https://github.com/unslothai/unsloth/pull/15189 中 @danielhanchen 在 NVIDIA CUDA 上默认启用
* 张量并行 v2：分片加载、数据并行 x 张量并行，以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15174 中的 Trainer
* 在 https://github.com/unslothai/unsloth/pull/15194 中 @danielhanchen 跳过真实 CUDA 探针上的标准扭曲 CUDA 情况
* Gemma 3：仅在其 head_dim 256 模板适合 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14670 中的卡片时保持灵活注意
* Flex 注意：在 https://github.com/unslothai/unsloth/pull/15193 中 @danielhanchen 调整 A100 上的向后图块以获得 head_dim 256（Gemma 3 LoRA 1.9-2.7x 更快）
* Clef：在 float32 路径上保持 fp16 损失缩放（修复 Gemma 3 不在 T4 上训练），@indrajeetapache 在 https://github.com/unslothai/unsloth/pull/14482 中
* Studio：计划任务，按计划运行提示，并将每个答案保存为 @alkinun 在 https://github.com/unslothai/unsloth/pull/13871 中的新聊天
* FP8 块 GEMM：通过 https://github.com/unslothai/unsloth/pull/15205 中的 @danielhanchen 将空输入路由到 Triton 内核
* Studio扩散：int8 prequant读回命中编译包，@danielhanchen在https://github.com/unslothai/unsloth/pull/15192中保存的运行时量化
* 命名张量并行索引读取上的编码；通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15209 中进行 PPO 解包测试 _decode_graphs
* 打包元数据：将张量路径保留在 torch.compile 下，回退到 https://github.com/unslothai/unsloth/pull/15199 中 @danielhanchen 的可分页副本
* 跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15211 中真实 CUDA 探针上的 torchao 块式 GEMM CUDA 案例
* Studio：离线audio.cpp列表检查@danielhanchen在https://github.com/unslothai/unsloth/pull/14829中磁盘池上的帐户授予
* 测试：在记录的真实 CUDA 上跳过 QAT MX 和 FP8 块 GEMM GPU 案例，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14785 中的欺骗性探针
* Studio：API 密钥无法批准 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14757 中从沙箱中调用主机路径工具
* adamw_flash：将未量化的 bf16 Adam 方差保留在 fp32 中，以便它可以通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14749 中衰减
* llama.cpp 安装程序：将 Qualcomm Adreno 保留在预构建的 CPU 上，除非 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14709 中请求 Vulkan
* Studio：继续增强 https://github.com/unslothai/unsloth/pull/14836 中@danielhanchen 已下载的 FLUX.3 上采样器定量的提示
* Studio 起草者：在 seq_lengths 处分割 TRL 打包行，在 https://github.com/unslothai/unsloth/pull/14911 中由 @danielhanchen 导出时重新连接集线器完全微调的 MTP 头
* Studio 安装程序（AMD、Linux）：用于单个 gfx90c 的 CPU 火炬，而不是 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/15002 中的无内核 ROCm 轮子
* Studio：在https://github.com/unslothai/unsloth/pull/14755中@danielhanchen的剩余上传解码器的入口处拒绝播放列表
* Studio：trust 仅在 https://github.com/unslothai/unsloth/pull/14753 中选择加入的代理或 @danielhanchen 管理的隧道后面转发标头
* 测试：在 https://github.com/unslothai/unsloth/pull/14711 中由 @danielhanchen 在 no_sync 内向前运行 DDP no_sync 累积步骤
* DeepSeek-V4.1 上下文划痕：在 https://github.com/unslothai/unsloth/pull/14838 中 @danielhanchen 关闭 Flash 注意力时，对密集的 KQ 分数进行充电
* Studio：从https://github.com/unslothai/unsloth/pull/14818中@danielhanchen的预标记行和范围检查标签中修剪屏蔽填充
* 交叉熵：在 torch.compile 下对 https://github.com/unslothai/unsloth/pull/14712 中 @danielhanchen 高于 65536 的词汇正确梯度
* Studio GGUF放置：dGPU仅在不丢失上下文的情况下赢得Auto；显式选择将仅主机字节保留在 https://github.com/unslothai/unsloth/pull/14615 中的 @danielhanchen 的 dGPU 上
* 填充选择：根据计算能力阈值，RTX PRO 6000 / RTX 5090 峰值由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15216 中实现
* 安装程序：每次运行读取一次 lspci 和 audio.cpp 驱动程序版本，通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14984 中对两个 AMD 扫描进行一次 WMI 查询
* 交叉熵：https://github.com/unslothai/unsloth/pull/14713 中 @danielhanchen 的全 -inf 词汇块不再将损失变成 NaN
* 工作室扩散：根据https://github.com/unslothai/unsloth/pull/15198中的@danielhanchen，根据其自己学习的峰值对编译层的请求进行定价（卸载的bf16在编译后保留其驻留位置）
* head_dim 512 注意：将 mask 加 is_causal 留给 SDPA，依靠 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14691 中的 mask-scan OOM
* Studio：保留 AMD gfx 目标和 HIP id 映射，直到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14970 中重新检测到硬件
* Studio：判断权重名称的 .. 文件系统发送它的位置，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14800 中的文本
* 线性输入投射钩子：跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14690 中的 float8-weight Linears
* gpt-oss：修复不可读的单独 .bin 建议，并将布局探测顺序固定到 https://github.com/unslothai/unsloth/pull/14763 中 @danielhanchen 的变压器解析器
* 预取：保留根安全张量索引映射到 https://github.com/unslothai/unsloth/pull/15184 中 @danielhanchen 的子文件夹权重
* Studio sd.cpp：丢失的 Vulkan 设备不是罢工； Arc/ROCm 保留 Vulkan；卡旁边的 UHD iGPU 不再否决 Vulkan，作者：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14610 中
* MoE 分组 GEMM 自动调谐：在 https://github.com/unslothai/unsloth/pull/14719 中 @danielhanchen 在专家自己的 GPU 上键入、调整和安装图块
* Studio：文本掩码在 bf16 中运行 SAM 3.1，除非卡内存不足 by @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14736 中
* 工作室扩散：使用背景 pinner 固定流式图像文本编码器，以及 https://github.com/unslothai/unsloth/pull/15206 中@danielhanchen 适合的前缀
* Generation 在 DeepSpeed ZeRO-1/2 上保留 inference_mode；只有 ZeRO-3 需要 no_grad by @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14673
* RMSNorm / LayerNorm：不要在 https://github.com/unslothai/unsloth/pull/14727 中的 @danielhanchen 的启动设置缓存中散列符号宽度
* Studio：在没有 float64 的设备上将 MiniMax-H3 PDD float64 数学保留在主机上，作者：https://github.com/unslothai/unsloth/pull/14848 中的 @danielhanchen
* Studio：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14737 中的未设置请求，保留 LTX-2.5 的 bf16 文本编码器
* 在 https://github.com/unslothai/unsloth/pull/15200 中@danielhanchen 构建后，在配置上分配渐变检查点
* Studio：在模型名称包含 https://github.com/unslothai/unsloth/pull/14733 中@danielhanchen 的 NVFP4 的存储库中，每个构建保留一行 GGUF
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/14758 中 @danielhanchen 在 fp8 存储保留处限制单文件主机 RAM 拒绝保留
* RoPE：https://github.com/unslothai/unsloth/pull/14714 中 @danielhanchen 过去 2**31 个元素的表的 64 位 cos / sin 行偏移
* XPU：在 fp16 习惯用法下训练 bf16 中的显式 bf16 负载，并在 https://github.com/unslothai/unsloth/pull/14606 中的 @danielhanchen 拒绝 bf16 时匹配 vLLM 的 dtype
* NVFP4 QAT：接受 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14780 中的 fp16 自动施放和非连续激活
* FSDP2 merged_4bit：当 lora_bias 合并到 https://github.com/unslothai/unsloth/pull/14801 中的 @danielhanchen 时，保持 GPU 上的基本偏差
* Studio：在 https://github.com/unslothai/unsloth/pull/14732 中，在没有火炬上下文的情况下，在 ROCm 上阅读 @danielhanchen 的 MiniMax-H3 卡 VRAM
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14738 中取消设置文本编码器设置时，保留本地文件夹自己的文本编码器
* Studio扩散：加载后写入运行时int8 / fp8 prequant缓存，关闭https://github.com/unslothai/unsloth/pull/15202中@danielhanchen的第一张图像
* 在反量化的 fp8 负载上不标记任何位和字节配置，并在 https://github.com/unslothai/unsloth/pull/14803 中的 @danielhanchen 标记之前读取 quantization_config 对象
* FSDP2：在https://github.com/unslothai/unsloth/pull/14747中@danielhanchen在完整的DCP负载上恢复检查点的4位QuantState
* Studio：当自动选择的 Vulkan 驱动程序挂起或没有设备时，在 https://github.com/unslothai/unsloth/pull/14521 中@danielhanchen 在 CPU 上加载 GGUF
* 安装程序：适用于 ROCm GPU 的 Vulkan llama.cpp，无需捆绑包或 hipcc；将 Strix 轮子保持在 https://github.com/unslothai/unsloth/pull/14662 中 @danielhanchen 的 ROCm 7.13 以下
* Fused LoRA：对部分合并的块运行 PEFT，其输入不需要 https://github.com/unslothai/unsloth/pull/14748 中的 @danielhanchen 的 grad
* RoPE 缓存：已编译块内的冷构建再次跟踪（编译下没有 is_inference_mode_enabled），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14728 中
* 上下文并行收集：torch.compile 下的正确梯度，以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15231 中对返回张量进行就地编辑的保护
* 原生 FSDP2：在 https://github.com/unslothai/unsloth/pull/14762 中由 @danielhanchen 生成后恢复准确的 reshard-after-forward 设置
* 原生 FSDP2：在 https://github.com/unslothai/unsloth/pull/14760 中 @danielhanchen 在 XPU / NPU / 其他非 CUDA 安装上保持 UNSLOTH_FSDP2=1 的加速 FSDP2
* Studio扩散：在推理模式之外流式卸载副本，因此每个编译块都会在https://github.com/unslothai/unsloth/pull/15223中由@danielhanchen跟踪一次
* Flex 向后调整：将调用方块和小稀疏块留给 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15228 中的电感器
* 原生 FSDP2：通过 https://github.com/unslothai/unsloth/pull/14761 中的 @danielhanchen 从网格自身的第一等级写入子网格保存
* 混合 NVIDIA 主机：bf16 并按照当前设备进行编译；检查 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14622 加载后重物着陆的位置
* 块 CUDA 图：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15207 中将参数梯度从图池中复制出来
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15239 的 torchao 路线测试中删除重复的 has_real_cuda 导入
* 将 ORPO、CPO、KTO、DPO 和 TRL 1.15 的融合头路由到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14185 中的动物园融合线性内核
* Studio：继续从 https://github.com/unslothai/unsloth/pull/14835 中的 @danielhanchen 加载下载的已退役 FLUX.3 完整副本
* 交叉熵：在https://github.com/unslothai/unsloth/pull/15140中保留@mlzoo的置信标记的损失和标签梯度
* 电感器读回屏障：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15208 中设置用户通行证时，键入编译缓存
* Studio扩散：在https://github.com/unslothai/unsloth/pull/15195中读取@danielhanchen在fp16负载上的管道的.fp16权重文件（SDXL读取6.5 GB，而不是12.9 GB）
* MoE dW：当每个专家的图块溢出并且 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15238 中不知道更小的图块时，回退到旧内核
* Studio：提供、大小和引脚每个 MIG GPU 实例 CUDA 在 R570+ 驱动程序上枚举，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14981 中提供
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15236 中的 @danielhanchen 的缓存不完整的情况下，从其 bf16 表中对已发布的管道进行定价
* https://github.com/unslothai/unsloth/pull/15204 中 @danielhanchen 的密集解码器的管道并行 x 原生 FSDP2 数据并行 x 张量并行
* Studio：在https://github.com/unslothai/unsloth/pull/15242中@danielhanchen的编码器引脚结构测试中将diffusion.py读取为utf-8
* 在新流程中训练 float8 FSDP2 参考，例如 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15250 中的分片排名
* 编译块：打包行在 https://github.com/unslothai/unsloth/pull/14808 中 @danielhanchen 的图外运行 varlen 注意力
* 解码图：增加 KV 缓存而不是保留 max_new_tokens，并由 https://github.com/unslothai/unsloth/pull/15237 中的 @danielhanchen 在模型的 GPU 上捕获
* Studio：https://github.com/unslothai/unsloth/pull/15246 中的 @shimmyshimmer 在将负载溢出到 CPU 之前保持多个已加载模型卸载空闲模型
* Studio：在 https://github.com/unslothai/unsloth/pull/15248 中@shimmyshimmer 回复流时显示一个作曲家按钮
* RoPE：constexpr 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15243 中固定的每个模型的步幅和头数
* 拒绝在 Unsloth SFT 下加速配置 cp_size，而不仅仅是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15212 中的 TrainingArguments
* 在 Unsloth DPO 和 GRPO 下拒绝变压器/加速 cp_size by @danielhanchen in https://github.com/unslothai/unsloth/pull/15229
* SFT：在 TRL 的融合 LM 头上计算 loss_type="dft"，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15213 中静默训练 NLL
* 将 PPO、RLOO、BCO、Online DPO、XPO、Nash-MD 和 GKD 路由到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15244 中的动物园融合线性内核
* MoE dW 累积测试：就地与 grad + dW 进行比较，仅通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15254 中检查 CUDA 上的确切 1
* Studio：让设置选择的嵌入器在 https://github.com/unslothai/unsloth/pull/15256 中的 @danielhanchen 的 Hub 中可见
* 在 https://github.com/unslothai/unsloth/pull/15261 中 @danielhanchen 调用的 CPU 回退下面定义 _recover_vulkan_stall
* TP x FSDP2 奇偶校验测试：将 AdamW 排除在 https://github.com/unslothai/unsloth/pull/15264 中 @danielhanchen 的 lm_head 副本上的 eps cliff 之外
* GRPO 截断支撑门测试：在 https://github.com/unslothai/unsloth/pull/15267 中提升 @danielhanchen 绑定 _support_kwargs 的块
* Studio：当 psutil 在 https://github.com/unslothai/unsloth/pull/15034 中 @debojyoti-dev 误报其侦听器时，停止在 Windows 上拒绝我们自己的 llama-server (#15022)
* Studio：让 --no-reasoning-preserve 和自定义聊天模板关闭 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/15170 中的 Qwen3.8 Reserve_thinking 默认值
* Studio：当选项卡“日期”与 https://github.com/unslothai/unsloth/pull/15087 中的@Souravrajvi0 不一致时，允许编辑刷新的回复
* Fused偏好损失测试：以TRL自己的训练师作为https://github.com/unslothai/unsloth/pull/15269中@danielhanchen的参考
* Studio：为网络搜索引擎提供连接超时，以便阻止的网络快速失败（#15143），作者：https://github.com/unslothai/unsloth/pull/15161 中的 @debojyoti-dev
* 解码图 KV 增长测试：门控其 CUDA 在 https://github.com/unslothai/unsloth/pull/15270 中的 @danielhanchen 上跳过 has_real_cuda()
* cuDNN 上的 SDPA：存储桶屏蔽和预填充调用，保持解码关闭 cuDNN，火炬将在 https://github.com/unslothai/unsloth/pull/15268 中由 @danielhanchen 选择它
* PP gloo 奇偶校验测试：https://github.com/unslothai/unsloth/pull/15273 中的 @danielhanchen 为 gemma3 提供了自己的每个元素梯度容差
* Flex 注意：在 sm86 / sm89（L4、A10、RTX 4090）上安装 Gemma 3 的图块，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15271 中的 eager
* DPO：TRL 1.x DPOTrainer._compute_loss 上的 UNSLOTH_FUSED_PREFERENCE_LOSS，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15277
* PP gloo 奇偶校验测试：大小 gemma3 的梯度与其在 AVX2 内核上的噪声的界限，作者：https://github.com/unslothai/unsloth/pull/15286 中的 @danielhanchen
* Studio：缓存图像本机 int8 在 https://github.com/unslothai/unsloth/pull/15283 中的 @danielhanchen 构建于本地 prequant 缓存中
* Studio 后端测试：忘记 https://github.com/unslothai/unsloth/pull/15287 中 @danielhanchen 测试之间的 MCP 发现状态
* Studio：在 https://github.com/unslothai/unsloth/pull/15289 中@danielhanchen 在缓存未命中时为每个张量构建本机 int8 图像转换器
* 后端 CI：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15291 自己的 Repo 测试分片中运行多等级 gloo 套件
* 测试：加载由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15296 中构建的帮助器 ORPO 重写器常量
* Studio：让 FLUX.3 Klein 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15263 中的编辑工作流程进行编辑
* 工作室视频：使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15297 中的背景 pinner 固定 MiniMax-H3 的延迟流式传输块
* 融合偏好损失测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15301 中从 Transformer 自己的 Llama 构建 CPU float64 模型
* Studio GGUF：在 https://github.com/unslothai/unsloth/pull/15014 中的 @debojyoti-dev 中对适合和工具结果尺寸计数中的图像进行充电 (#14968)
* 本机 FSDP2：保留分配的收集权重，以便阻止 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15215 中重播 CUDA 图表
* Studio：控制高度、作曲家淡入淡出、API 页面布局、由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15232 中进行设置润色
* Studio：在 https://github.com/unslothai/unsloth/pull/15233 中的 @shimmyshimmer 的模型选择器中显示新下载的已加载 GGUF 的量化
* Studio：缓存 fp32-shard 视频组件，转换为 float16，以便稍后由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15303 中加载
* Studio：每个模型一个运行设置下拉菜单，最后使用的设置是 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15247 中加载的设置
* Studio：在https://github.com/unslothai/unsloth/pull/15249中由@shimmyshimmer推荐的加载模型上显示设置和行菜单
* Studio：整个应用程序中每个作业都有一个图标，由 https://github.com/unslothai/unsloth/pull/15299 中的 @shimmyshimmer 提供
* Studio：在https://github.com/unslothai/unsloth/pull/15089中@Souravrajvi0的项目聊天中显示浏览器
* 通过 https://github.com/unslothai/unsloth/pull/15235 中的 @takeing-lying-flat 修复融合和未融合 RoPE 中的非连续位置索引
* 模型选择器合约：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15319 中的别名读取多量化父行的装订线
* 在https://github.com/unslothai/unsloth/pull/15234中通过@take-lying-flat应用注意力蒙版时通过外部inputs_embeds修复梯度
* 在 https://github.com/unslothai/unsloth/pull/14380 中 @vineethsaivs 在 RawTextDataLoader 中读取大于 128 KB 的 CSV 文本单元格
* 将 Gemma 嵌入标准化器放在 https://github.com/unslothai/unsloth/pull/15308 中@danielhanchen 的外部输入嵌入中
* Studio：使用 @vineethsaivs 在 https://github.com/unslothai/unsloth/pull/15282 中的连接模型对 /v1/messages 上的超出范围采样进行 400 响应
* Studio：拒绝 https://github.com/unslothai/unsloth/pull/14721 中 @vineethsaivs 的训练请求中的 NaN Weight_decay
* GRPO 保留设置拒绝：停止说 UNSLOTH_GRPO_TRUNCATED_SUPPORT=1 是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15307 中设置的
* Studio：在https://github.com/unslothai/unsloth/pull/15255中恢复@danielhanchen的计划任务模型选择器和模型加载
* 在https://github.com/unslothai/unsloth/pull/15294中@Imagineer99在GGUF入场之前计算准备好的API提示
* Studio 图像：每个提示编码一个降噪器流输出，Z-Image CFG 负片由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15310 中编码一次
* Studio扩散：在bf16和图像路径上为fp32-shard组件投射缓存（Z-Image-Turbo读取11.5 GiB，而不是22.9）由@danielhanchen在https://github.com/unslothai/unsloth/pull/15321中
* TP / PP：每个因果 LM 架构都像一个进程一样训练，或者在 https://github.com/unslothai/unsloth/pull/15230 中被@danielhanchen 预先拒绝
* 修剪 unsloth、unsloth_cli 中的注释以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/12968 中的测试
* Studio：拒绝 @vineethsaivs 在 https://github.com/unslothai/unsloth/pull/15176 中预先超出 numpy 范围的训练 random_seed
* Studio：当 Advisor 映射在 https://github.com/unslothai/unsloth/pull/14999 中携带 @vineethsaivs 的元数据时，保留系统列
* 工作室扩散：读取我们已经发布的托管文件（LTX-2 fp8 DiT、Qwen-Image-2.1 bf16 VAE），并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15318 中命名缺失的 int8 文本编码器文件
* Honor YaRN 在 https://github.com/unslothai/unsloth/pull/15214 中通过 @danielhanchen 在 FastModel 上作为 Rope_parameters 和 Rope_scaling 传递
* 通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/15168 中修复设备上的 MOSS-Image GGUF 发现
* 在 https://github.com/unslothai/unsloth/pull/15295 中对齐系统标题控件并避免 @Imagineer99 的关闭按钮
* 在 https://github.com/unslothai/unsloth/pull/15222 中通过@take-lying-flat 修复生成响应后的 GKD 标准化
* GKD：在 https://github.com/unslothai/unsloth/pull/15328 中，@danielhanchen 永远不会传递零生成令牌计数
* Studio：https://github.com/unslothai/unsloth/pull/15258 中@danielhanchen 词汇未对齐 logits 行时 CPU 上的 Vulkan 草稿示例
* 工作室视频：加载后将卸载的本机 int8 版本写入 prequant 缓存（Wan2.2-A14B 第一个 clip 97 秒更早）由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15331 中
* 工作室：Cosmos3-Nano 和 Cosmos3-Edge 视频系列，作者：@sbabamohamad，位于 https://github.com/unslothai/unsloth/pull/14554
* 工作室扩散：从 https://github.com/unslothai/unsloth/pull/15330 中的@danielhanchen 测量峰值（12.7 GB T4 上的 FLUX.2-klein：30.4 到 10.6 每个图像）播种小型主机 int8 位置
* 原生 FSDP2：修复 https://github.com/unslothai/unsloth/pull/15311 中 @danielhanchen 的 QAT 转换后生成（混合 torch.Tensor 和 DTensor）
* Studio：在https://github.com/unslothai/unsloth/pull/15276中@debojyoti-dev的图像条中打开右侧click的图块自己的菜单
* 原生 FSDP2：内存可扩展 16 位加载（每个等级仅读取其分片），以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15225 中的子网格上的 fp16 起始缩放
* Studio：保持图像、视频和集线器搜索输入响应，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15306 中
* 修复 https://github.com/unslothai/unsloth/pull/15343 中 @danielhanchen 在变压器 >= 5.3 上的 TRL 0.27-0.28 GRPOTrainer 导入（没有名为“weave”的模块）
* 编译块：打包行在 https://github.com/unslothai/unsloth/pull/15325 中由 @danielhanchen 运行图中的 flash varlen 内核
* Studio：当自定义 Hub 端点将下载重定向到 https://github.com/unslothai/unsloth/pull/15329 中 @danielhanchen 的 Huggingface.co 时发出警告
* torchrun：普通 Trainer DDP find_unused 默认值，FSDP2-collective SentenceTransformer 由 @danielhanchen 保存在 https://github.com/unslothai/unsloth/pull/15324 中
* Intel XPU：在 https://github.com/unslothai/unsloth/pull/15322 中由 @danielhanchen 修复普通（非双量化）absmax 上的 4 位反量化和 gemv
* 在 https://github.com/unslothai/unsloth/pull/12967 中由 @danielhanchen 修剪 Studio 后端中的评论
* 修剪 https://github.com/unslothai/unsloth/pull/12969 中 @danielhanchen 的安装程序、脚本和 CI 配置中的注释
* 修剪 https://github.com/unslothai/unsloth/pull/15333 中 @danielhanchen 的安装程序入口脚本中的注释
* Studio扩散：在https://github.com/unslothai/unsloth/pull/15340中的@danielhanchen将FLUX.2-klein的reduction-config过滤器固定在每个拱门上（相同的种子，跨进程的相同图像）
* 修剪 https://github.com/unslothai/unsloth/pull/12966 中 @danielhanchen 的 Studio 前端和 Tauri shell 中的注释
* Studio：从 https://github.com/unslothai/unsloth/pull/15334 中的 @danielhanchen 的 GPU 内存计算中排除 NVIDIA NPU
* 不使用 Triton 导入：根据 Zoo Triton 存根定义 Unsloth 的内核，只有 https://github.com/unslothai/unsloth/pull/15346 中的 @danielhanchen 对 unsloth 可见
* 测试：在 gloo 导出保护中命名编码，并在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15351 中的 YaRN 负载检查中将裸设备索引视为 CUDA
* 修复（studio）：区分 https://github.com/unslothai/unsloth/pull/15341 中 @danielhanchen 的媒体 RAM 卸载和内存不足
* 来自 UNSLOTH_TP_SIZE 的张量并行，用于未修改的训练脚本，带有训练器检查点和 https://github.com/unslothai/unsloth/pull/15326 中 @danielhanchen 的 8 位 AdamW
* 测试：遵循 TRL 在 https://github.com/unslothai/unsloth/pull/15355 中由 @danielhanchen 重命名的 tiny Phi-3 和 Qwen3.5 存储库
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15335 中识别下载进度中的模型
* 工作室：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15337 中展示扩散训练准备进度
* Studio：从https://github.com/unslothai/unsloth/pull/15336中@danielhanchen的聊天设备列表中排除扩散模型
* 不要将 inference_mode 打包元数据提供给 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15347 中进行的训练转发
* Studio：阻止 macOS 沙盒探针泄漏永久旋转的进程，作者：https://github.com/unslothai/unsloth/pull/15345 中的 @shimmyshimmer
* CI：按速度对 apt 镜像进行排名，因此缓慢的 Azure 镜像不会使 apt 步骤超时，作者：https://github.com/unslothai/unsloth/pull/15350 中的 @danielhanchen
* FP8 fp16 dequant：在 https://github.com/unslothai/unsloth/pull/15354 中通过 @danielhanchen 保持 autograd 以获得可训练的重量或比例
* Studio：更安全地保存运行设置、始终加载以及 https://github.com/unslothai/unsloth/pull/15338 中的 @shimmyshimmer 的 API 选项卡整理
* 在 https://github.com/unslothai/unsloth/pull/15366 中通过 @dependabot[bot] 在 / 中碰撞 trufflesecurity/trufflehog
* 在https://github.com/unslothai/unsloth/pull/15362中通过@dependabot[bot]在/中碰撞step-security/harden-runner
* Studio扩散：提示编码仅流式传输@danielhanchen在https://github.com/unslothai/unsloth/pull/15348中的可用内存不足
* Studio扩散：cast-cache写入从https://github.com/unslothai/unsloth/pull/15357中的@danielhanchen的主机副本中读取块流张量
* 块编译：在 https://github.com/unslothai/unsloth/pull/15359 中 @danielhanchen 的 DDP (DeepSeek-OCR torchrun) 下保持每个编译块的完整性
* Studio：在 --fit-target 中保留 DSpark/DFlash sidecar，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14431 中从 Metal 内存不足中恢复
* Studio：当 https://github.com/unslothai/unsloth/pull/15349 中的@shimmyshimmer 的描述位于行下方时，通过其标题保持行的控制
* Studio：对 llama-server 的每个请求都有一个所有者，因此崩溃的服务器会在 https://github.com/unslothai/unsloth/pull/15138 中 @oobabooga 的每条 API 路由上恢复
* 工作室视频：保持流编码器下未完成的解码门可见，跳过非有限潜伏上的 fp32 VAE 重新运行，通过 https://github.com/unslothai/unsloth/pull/15339 中的 @danielhanchen 明确拒绝 NaN clips
* Studio：每个聊天模型加载一个请求，由 https://github.com/unslothai/unsloth/pull/15139 中的 @oobabooga 发送到 /validate 和 /load
* FSDP2：在排名 0 上运行 GGUF、torao、OpenVINO 和 GGML 导出，而不是 https://github.com/unslothai/unsloth/pull/15353 中的 @danielhanchen 拒绝它们
* 工作室扩散：将 int8 SwiGLU MLP 融合到 https://github.com/unslothai/unsloth/pull/15370 中 @danielhanchen 的块流式 Qwen-Image-2.1 降噪器上
* Studio：提示编辑框、菜单标题芯片、集线器运行、文件面板、https://github.com/unslothai/unsloth/pull/15375 中 @shimmyshimmer 加载的行菜单

## 新贡献者
* @samihsq 在 https://github.com/unslothai/unsloth/pull/14181 中做出了第一个贡献
* @mlzoo 在 https://github.com/unslothai/unsloth/pull/15140 中做出了第一个贡献
* @sbabamohamad 在 https://github.com/unslothai/unsloth/pull/14554 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.910-beta...v0.1.911-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.911-beta` · 📅 发布：2026-10-26 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.911-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
