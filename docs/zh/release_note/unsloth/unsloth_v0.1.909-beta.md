---
title: "unsloth v0.1.909-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.909-beta"
version: "v0.1.909-beta"
published: "2026-10-19"
type: "pre"
lang: "zh"
---

# unsloth v0.1.909-beta

DeepSeek-V4.1-Flash-1017 和 FLUX.3 Image Klein 来了！在 Unsloth 中本地运行两者。还有新功能：聊天中的图像和视频、使用 FSDP2（alpha）进行多 GPU 训练以及用于编码代理的单命令 MCP 设置。

## 亮点

- **DeepSeek-V4.1-Flash-1017**：552B（16B 活动）- 在 ~125 GB 上以 1 位运行，其 Engram 表位于 SSD [指南](https://unsloth.ai/docs/models/deepseek-v4.1-flash)
- **FLUX.3 Image Klein**：在 24 GB 上运行并编辑最多 10 个参考图像 [GGUF](https://huggingface.co/unsloth/flux-3-image-klein-GGUF)
- **单命令 MCP 设置**：`unsloth mcp add` 将 Claude Code、Codex 或 Cursor 连接到 Unsloth。
- **聊天中的图像和视频**：本地聊天模型使用旁边加载的图像或视频模型。
- **Qwen-Image-Edit-2509 和 2511**：一次最多编辑 3 个图像。
- **令牌预览**：在训练开始之前查看您的模型将学习什么。

## DeepSeek-V4.1

- 运行 DeepSeek-V4.1-Flash-1017，这是 DeepSeek-V4.1-Flash 的更新版本，具有更好的推理、编码和代理结果以及更短的输出。它有 552B 个参数，加上 Engram 表中的 196B 个参数，大约 16B 个活动参数，以及 1M 个上下文标记。当 Engram 表保留在 SSD 上时，它在 1 位时运行在大约 125 GB 内存中，在 4 位时运行在 300 GB 内存中。 [指南](https://unsloth.ai/docs/models/deepseek-v4.1-flash) · [GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF)
- DeepSeek-V4.1-Flash-1017 在 Terminal-Bench 4.0 上的得分为 42.3，高于早期 DeepSeek-V4.1-Flash 的 31.2。
- 高度努力时默认开启思考。从低到最大选择任何努力，或者关闭思考。

## FLUX.3 图像克莱因

- 使用 Black Forest Labs 的 FLUX.3 Image Klein 生成和编辑图像，这是一个 5.6B 模型，可渲染文本并使用最多 10 个参考图像进行编辑。它在 24 GB GPU 内存上运行，其 GGUF 也可以在没有受支持 GPU 的计算机上运行，​​并且也可以使用未蒸馏的 Klein Base。 [GGUF](https://huggingface.co/unsloth/flux-3-image-klein-GGUF) · [基础 GGUF](https://huggingface.co/unsloth/flux-3-image-klein-base-GGUF)
- 增强提示，默认情况下处于启用状态，将简短的提示扩展为详细的标题，从而修复了硬姿势中大多数扭曲的身体。预览显示标题，以便您可以复制或编辑它。

## 图片+视频

- Qwen-Image-Edit-2509 和 Qwen-Image-Edit-2511 现在每次编辑最多接受 3 个图像。
- 在创建视频中设置自定义视频尺寸和宽高比，或选择模型的训练尺寸之一。
- 直接从图像库或库中的图像菜单开始编辑，或将生成的图像拖到图像页面上的图像选择器上。
- 具有大型文本编码器的图像和视频模型现在默认加载 GPU 支持的量化编码器，从而将编码器的内存减少一半并且加载速度更快。 LTX-2.5 不再需要 Hugging Face 登录。

## 聊天 + 桌面

- 图像、视频和朗读语音模型现在可以在具有专用 GPU 的计算机上与聊天模型一起保持加载状态。在“设置”>“资源”>“模型内存”中选择“当它们适合时”或“始终”。
- 启用图像药丸后，本地聊天模型可以使用旁边加载的图像或视频模型在聊天中制作图像和可播放的视频。
- 在图像或视频模型替换 GGUF 聊天模型后，只要启用“跨卸载保持聊天上下文”，聊天就会继续，而无需重新阅读对话。
- 在 Unsloth Desktop 中，创建项目时选择现有工作文件夹。
- Unsloth Desktop 在旧版 macOS 上启动时不再崩溃，其浏览器面板可在 macOS 27 上运行并遵循 Clash 等系统代理。

＃＃ 训练
- 在 Python 中，使用 FSDP2 在 GPU 上传播 LoRA、QLoRA 和全面微调，并使用 `context_parallel_size` 分割长序列（包括打包序列）。首先用`unsloth doctor --gpus`检查机器。
- 在“训练”页面上，预览标记显示模型训练数据集的哪些部分，并标记样本被上下文限制截断。 Data Recipe 聊天现在训练为多轮对话，Qwen 微调保留数据集的 `thinking` 文本。
- 使用 `optim = "adamw_flash"` 削减完全微调优化器内存，或设置 `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1` 以在步骤之间将优化器状态保留在系统内存中，但会降低速度。

## 性能

- 使用工具的本地 GGUF 聊天现在显示回复的速度与模型写入回复的速度一样快，因此下一个工具调用不再等待，长回复也不再随着增长而减慢。
- 使用 `lora_dropout` 或 `lora_bias` 进行 LoRA 训练现在在 Unsloth 的融合内核上运行，每步速度提高约 28%。
- Gemma 4 的全局注意力层在 NVIDIA Ampere 或更新的 GPU 上的新内核上进行训练，注意力速度提高了 1.4 倍到 2.1 倍，注意力内存减少了 4.9 倍。
- MLX 上的 Qwen3.8-Flash-Next 在 M5 Mac 上速度提高了 1.4 倍，在 M1 至 M4 Mac 上速度提高了 1.2 倍。
- 在 M1 至 M4 Mac 上，4 位和 8 位 MLX 模型可同时生成多个聊天，速度提高 1.8 倍。

## 编码代理

- 使用 `unsloth mcp add claude-code`（或 `codex`、`cursor`）将 Claude Code、Codex 或 Cursor 连接到 Unsloth 的 MCP 服务器。
- 代理可以上传数据集，开始训练并加载生成的检查点。
- 代理还可以提前下载模型，预览模型加载将下载或卸载的内容，并对视频生成作业进行排队。

## 模型+设置

- 按功能或格式过滤下载的模型，包括导出和微调，并搜索 DeepSeek 或 Meta 等制造商以列出 Unsloth 上传的模型。
- QwenCloud 和 Z.ai 现已作为 API 提供商提供。
- 将配置文件统计信息中的令牌使用情况导出为 CSV。
- `unsloth run` 不变地传递 llama-server 短标志，例如 `-ctv`、`-dev` 和 `-ctxcp`。

## 硬件兼容性

- 没有 NVIDIA GPU 或 ROCm 的 PC，例如 Snapdragon 笔记本电脑和 Linux ARM 板，现在通过 Vulkan 而不是 CPU 在 GPU 上运行 GGUF。
- NVIDIA MIG 切片的大小和选择正确，混合 GPU 代的机器获得设置，并且 llama.cpp 构建每个 GPU 都可以运行。
- 在具有 AMD Strix APU 和独立 AMD GPU 的 Linux 计算机上，为独立 GPU 安装 PyTorch。在配备 HIP SDK 的 Windows AMD PC 上，“设置”>“系统”不再要求管理员访问权限。
- ARM PC 上的 Windows 现在可以在“设置”>“沙箱”中打开“沙箱高”。
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
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/Unsloth-Desktop-Windows-ARM64.exe'>下载</a></td>
  </tr>
</表>



## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/13918 中的 @danielhanchen 的 unsloth>=2026.10.6、unsloth-zoo>=2026.10.6
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13850 训练之前预览令牌和完成掩码
* 通过其形状找到 MTP 起草者下降后备，而不是 https://github.com/unslothai/unsloth/pull/13922 中 @danielhanchen 的一种拼写
* 修复 https://github.com/unslothai/unsloth/pull/13930 中 @danielhanchen 的 #13850 和 #13806 后主程序的红色后端 CI
* Studio：在https://github.com/unslothai/unsloth/pull/13790中@drakeo338断开连接后不要重新发送图像生成POST
* NVFP4：在 https://github.com/unslothai/unsloth/pull/13840 中解码 GEMM 内的权重块，以进行小批量转发和 dX，作者为 @danielhanchen
* 修复主程序的红色 CI：令牌预览中的 UI 字体令牌，https://github.com/unslothai/unsloth/pull/13936 中 @danielhanchen 的真实 CUDA 跳过防护
* NVFP4 测试：真正的 CUDA 跳过防护，并格式化 https://github.com/unslothai/unsloth/pull/13937 中 @danielhanchen 留下的文件 #13840
* Studio：更喜欢 NVIDIA Wayland dmabuf，而不是 @indrajeetapache 在 https://github.com/unslothai/unsloth/pull/13892 中进行的静态合成
* 经过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13949 中的审查后，对 unsloth-zoo 2026.10.6 和 Transformers 5.20.0 扫描结果进行基线分析
* 添加上下文并行支持（仅限 SDPA），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/4257 中添加
* 预构建 CUDA 轮子：将@danielhanchen 固定在 https://github.com/unslothai/unsloth/pull/13954 中的 NVIDIA 重新发布的 CUDA 13.4.1 清单 (win_arm64)
* GRPO：在 https://github.com/unslothai/unsloth/pull/13856 中使用 @danielhanchen 的 vLLM 时保留 TRL 的旧 logprob 门
* 拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13857 下 FSDP / DeepSpeed 下的显式 offload_layers 交换
* RMSNorm：在 https://github.com/unslothai/unsloth/pull/13868 中选择保存规范输出而不是其输入 (UNSLOTH_RMSNORM_SAVE_OUTPUT)
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13869 中为 Gemma-4 全局层添加 Triton head_dim 512 注意力内核
* 使用侧流卸载钩子进行非重入梯度检查点，作者：https://github.com/unslothai/unsloth/pull/13872 中的 @danielhanchen
* GRPO：在https://github.com/unslothai/unsloth/pull/13866中由@danielhanchen在推出期间选择在主机上停放优化器状态和梯度
* Studio：自动图像/视频加载选择最空闲的 GPU，GPU 选择尊重 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13928 中每张卡可以运行的内容
* Studio 安装程序 (Windows AMD)：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13925 中选择 gfx 目标时，将 hipinfo 输出视为已经经过掩码过滤
* 上下文并行：带有打包和 varlen 注意力的 Ulysses 后端，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13848
* GRPO 打包 logprobs：OOM 限制了打包长度，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13877 中禁用打包
* 仅在 https://github.com/unslothai/unsloth/pull/13855 中 @danielhanchen 使用 RoPE cos/sin 缓存的设备上构建 RoPE cos/sin 缓存
* 在 https://github.com/unslothai/unsloth/pull/13878 中选择 @danielhanchen 的代币平衡和代币预算 SFT 微批次
* GRPO：从clip_ratio指标中排除@danielhanchen在https://github.com/unslothai/unsloth/pull/13883中的单令牌完成的屏蔽行
* Studio 安装程序：在 https://github.com/unslothai/unsloth/pull/13924 中选择 @danielhanchen 的 llama.cpp CUDA 捆绑包时，覆盖 GPU CUDA_VISIBLE_DEVICES 隐藏的内容
* 上下文并行：Ulysses for Gated DeltaNet Hybrids（Qwen3.5、Qwen3-Next），作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13920
* 核心：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13923 中决定混合主机上每个可见 NVIDIA GPU 的 bfloat16、编译和 TMA 选项
* Studio：机器人检查页面的 Unsloth 桌面链接打开 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13958 中开始使用
* 修复 RMSNorm 和 LayerNorm 向后覆盖 https://github.com/unslothai/unsloth/pull/13888 中 @danielhanchen 传入的梯度
* DPO、ORPO、CPO：选择加入融合偏好损失 (UNSLOTH_FUSED_PREFERENCE_LOSS=1)，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13870
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13882 中添加选择加入优化器状态 CPU 卸载 (UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1)
* Studio：深入研究位于 https://github.com/unslothai/unsloth/pull/13959 中 @shimmyshimmer 的 + 菜单中的“工具”下
* 修复（studio）：加载https://github.com/unslothai/unsloth/pull/13897中@Imagineer99从自定义文件夹中选择的音频GGUF
* Studio：命名开放连接，使用 https://github.com/unslothai/unsloth/pull/13964 中 @shimmyshimmer 的自定义新 OpenRouter 徽标引导提供商菜单
* FSDP2：一流的 LoRA 和全面微调，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13865 中保持每个块融合的 LoRA 内核
* Studio：比例图像附件、附件卡和聊天文件由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13970 中进行抛光
* 安装程序（AMD、Linux）：Strix APU 将火炬推迟到独立卡，并且单独的 gfx1153 发出警告，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13931 中获取无内核轮子
* 在 https://github.com/unslothai/unsloth/pull/13962 中由@danielhanchen 在单 GPU 主机上保留普通功能缓存
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13881 中添加 optim = "adamw_flash" （来自 flashoptim 的 FlashAdamW）以降低优化器内存
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13890 中融合 Qwen3 q_norm / k_norm RMSNorm + RoPE Triton 内核（选择加入）
* GRPO：选择加入零方差组排除和提示级损失聚合，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13891 中提供
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13982 中对真实 CUDA 设备上的优化器状态卸载 CUDA 情况进行门控
* Studio：通过 https://github.com/unslothai/unsloth/pull/13983 中 @danielhanchen 的 587079569a 以来的增长来提高启动捆绑包预算
* Studio：让 safetensors 和 MLX 视觉模型在 https://github.com/unslothai/unsloth/pull/13939 中读取@NilayYadav 的透明图像
* 工作室：在 https://github.com/unslothai/unsloth/pull/13927 中按 @danielhanchen 的切片尊重 MIG 掩模和尺寸 MIG 卡
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13979 中使用 Q-GaLore 权重量化修复优化器状态卸载崩溃
* 上下文并行：在 https://github.com/unslothai/unsloth/pull/13910 中 @danielhanchen 在 (dp_shard, cp) 网格上与 FSDP2 组合
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13940 中将结构化专栏对话训练为多轮聊天
* Studio：将作曲家与 https://github.com/unslothai/unsloth/pull/13965 中的 @shimmyshimmer 的 macOS 桌面应用程序中的聊天栏对齐
* Studio：在https://github.com/unslothai/unsloth/pull/13913中@NilayYadav对MLX和变压器进行工具调用后修复上下文计量器
* Studio：可调整大小的模型中心分割视图、较小的行烤肉串、@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13966 中居中的令牌图标
* Studio：通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13969 中根据趋势权衡发布年龄对最新 Unsloth 模型进行排名
* Studio：在 https://github.com/unslothai/unsloth/pull/13973 中绘制带有悬停控件和居中展开对话框的聊天 Markdown 表格，作者为 @shimmyshimmer
* Studio：模型面板部分卡，甚至表格页脚，OpenRouter标记在https://github.com/unslothai/unsloth/pull/13974中的@shimmyshimmer的新文件名下
* Studio：https://github.com/unslothai/unsloth/pull/13972 中 @shimmyshimmer 的 Hub 过滤器弹出窗口中的间距甚至为 17px
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13901 中的几个 load_weights 调用将完整的微调权重同步到并置的 vLLM
* Studio：当https://github.com/unslothai/unsloth/pull/13951中的@oobabooga在转弯中途压实重置时，保持转弯的工具结果
* GRPO：在 TRL < 0.28 上保持 TRL vLLM 权重同步，除非 fast_inference 在 https://github.com/unslothai/unsloth/pull/13911 中共享 @danielhanchen 的权重
* RMSNorm 保存输出：跳过推理张量权重，保持默认路径不受 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13981 中的选择加入检查
* Studio：在 https://github.com/unslothai/unsloth/pull/13945 中@oobabooga 启用拟合过滤器时隐藏超过 VRAM 的安全张量模型
* GRPO 无梯度包装：在 https://github.com/unslothai/unsloth/pull/13980 中@danielhanchen 压平 ids 之前检查 OOM 长度上限
* FSDP2：带有融合 LoRA 内核的分片 QLoRA 4 位权重，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13880 中保留
* FSDP2：save_pretrained、合并保存和分片模型的 4 位检查点，由 https://github.com/unslothai/unsloth/pull/13895 中的 @danielhanchen 提供
* 在 https://github.com/unslothai/unsloth/pull/13884 中添加 @danielhanchen 的 `unsloth doctor --gpus` 多 GPU 预检和 UNSLOTH_DEBUG_DISTRIBUTED
* GRPO：在https://github.com/unslothai/unsloth/pull/13968中@danielhanchen将训练器的自动投射精度锁定在有效的logprob路径上
* Studio：通过 https://github.com/unslothai/unsloth/pull/13991 中 @danielhanchen 的 17901061d1 以来的增长来提高启动捆绑包预算
* Studio：与文件聊天 X 隐藏面板、应用程序工具提示和 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13989 中的高对比度轨迹
* head_dim 512 注意：仅限 sm80+，没有 256 MB 自动调谐缓冲区，OOM 回退到 SDPA，https://github.com/unslothai/unsloth/pull/13977 中的@danielhanchen 没有每次调用掩码同步
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13994 中的真实 CUDA 设备上对新的 Q-GaLore 卸载 CUDA 案例进行门控
* Studio：通过 https://github.com/unslothai/unsloth/pull/13995 中@danielhanchen 的 #13989 增长来提高启动捆绑包预算
* Studio：使用 https://github.com/unslothai/unsloth/pull/13996 中的 @danielhanchen 的 UI 字体大小缩放扩展的 Markdown 表格的文本
* 覆盖显式 RoPE 位置 ID 并计算 https://github.com/unslothai/unsloth/pull/13976 中 @danielhanchen 的 CPU 上的起始缓存
* Studio：隐藏的“与文件聊天”面板在 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13999 中发出第一条消息后保持隐藏状态
* Studio：模型选择器排名 由模型中心 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13993 的最新排名推荐
* Studio：在模型中心搜索模型制作者会列出 Unsloth 在 https://github.com/unslothai/unsloth/pull/13998 中 @shimmyshimmer 上传的模型
* 代币预算：按 https://github.com/unslothai/unsloth/pull/13978 中 @danielhanchen 的代币计数对分割块 TRL 指标进行权重
* 添加选择加入 TFLOP 和 MFU 日志记录，其中 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13885 中支持 LoRA 感知 FLOP 计数
* Studio：通过 https://github.com/unslothai/unsloth/pull/14004 中@danielhanchen 的 #13998 增长来提高启动捆绑包预算
* PEFT MoE 转换快照：添加光束，变压器主现在在 https://github.com/unslothai/unsloth/pull/14005 中由 @danielhanchen 融合为 qwen2_moe
* studiobench CI：启动 Studio 并关闭更新检查，因此中期运行的 llama.cpp 版本无法覆盖 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14007 中的场景
* 融合 LoRA 内核：支持 lora_dropout 和 lora_bias by @danielhanchen in https://github.com/unslothai/unsloth/pull/13898
* RMSNorm：在 https://github.com/unslothai/unsloth/pull/13984 中恢复 @danielhanchen 的预规范解码器规范的就地 dX
* 将选择加入的 bnb 4 位 MoE 专家保留在 https://github.com/unslothai/unsloth/pull/13946 中 @danielhanchen 的编译块之外
* Studio：改进 AMD NPU 发现、CLI 支持以及 @oobabooga 在 https://github.com/unslothai/unsloth/pull/13797 中的聊天反馈
* Studio：使用 TypeScript 7 进行更快的前端类型检查，并使用 @Etherll 在 https://github.com/unslothai/unsloth/pull/13986 中进行面包检查
* GRPO：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13900 中选择加入时，对旧的和参考的 logprobs 进行评分以超过截断的采样支持
* GRPO：当 https://github.com/unslothai/unsloth/pull/13916 中的 @danielhanchen UNSLOTH_GRPO_ROUTING_REPLAY=1 时安装 MoE 路由重放
* 内核后续工作：在 HIP 上规范启动并进行编译，分组 GEMM 冻结操作数，https://github.com/unslothai/unsloth/pull/13967 中 @danielhanchen 在 H100 上没有 CE 驱逐提示
* Windows hipinfo：完全隐藏的 ROCR 掩码仍然意味着没有 ROCm 目标，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14019 中
* 优化器状态卸载：在 https://github.com/unslothai/unsloth/pull/14025 中 @danielhanchen 的未分块 Q-GaLore Weight_quant 步骤中保持主机上的非活动状态
* perf(studio)：通过 https://github.com/unslothai/unsloth/pull/13975 中的 @Lyxot 在 Unsloth Studio 的 MLX 路径上输入 Zoo 的推理范围注册表
* 将 Unsloth Studio MLX 堆栈移至 https://github.com/unslothai/unsloth/pull/13992 中的 @Lyxot 的 mlx 0.32.4 和 mlx-lm 0.32.2
* Blackwell + Triton 3.3 上的 FP8 GEMV：在火炬 2.7 下没有图形中断，保持 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14026 中更快的精确 GEMV 形状
* NF4 GEMV：将桌子负载保持在 https://github.com/unslothai/unsloth/pull/14027 中 @danielhanchen 的 256 宽瓷砖上
* 上下文并行：在 https://github.com/unslothai/unsloth/pull/14028 中 @danielhanchen 在 Transformers 4.x 上的 save_model 中收集 FSDP2 状态字典
* @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14023 中对 GRPO 奖励局部变量和 FSDP2 混合精度合并的后续操作
* 代币预算：按 https://github.com/unslothai/unsloth/pull/14024 中 @danielhanchen 的 TRL 1.3 到 1.14 上的标签对熵进行权重分割
* AMD：Strix 仅遵循可安装的通用标签； gfx1153 健康门在 https://github.com/unslothai/unsloth/pull/14022 的 @danielhanchen 的库存刷新时分类
* Studio：列出在 https://github.com/unslothai/unsloth/pull/13957 中 @oobabooga 的自定义文件夹中共享量化的每个 GGUF 构建
* Studio：https://github.com/unslothai/unsloth/pull/14050 中 @shimmyshimmer 创建视频的自定义视频尺寸和图像样式提示字段
* Studio：在 https://github.com/unslothai/unsloth/pull/14042 中以 @shimmyshimmer 的强调色显示完成的聊天侧边栏点
* Studio Hub：侧边栏匹配的药丸图标，在 https://github.com/unslothai/unsloth/pull/14049 中删除 @shimmyshimmer 的内存统计数据
* Studio：API 页面工具栏在 https://github.com/unslothai/unsloth/pull/14048 中由@shimmyshimmer 获得更清晰的图标和悬停工具提示
* Studio：从 nvidia-smi 行读取整个 GPU uuid 掩码，并在 https://github.com/unslothai/unsloth/pull/14017 中缓存 @danielhanchen 设置的 MIG
* Studio：在 https://github.com/unslothai/unsloth/pull/14020 中的@danielhanchen 在普通主机上保持自动 GPU 放置惰性
* 聊天 UI 冒烟：启动 Studio，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14053 中检查更新
* CUDA 欺骗：在无 GPU 的运行器上覆盖 CUDA 轮，而不仅仅是 https://github.com/unslothai/unsloth/pull/14056 中 @danielhanchen 的 CPU 轮
* 笔记本电脑冒烟：按照 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14058 中的 Colab 的方式运行安装单元
* Studio：将 toast 图标与 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14082 中的多行 toast 上的第一行对齐
* Studio Hub：设备上的过滤器和排序、导出和微调、unsloth.ai 链接（由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14083 中提供）
* Studio：在https://github.com/unslothai/unsloth/pull/14030中@Etherll在每个分段开关上滑动选定的药丸
* Studio：在 Hub 中使用内联 Markdown 表格样式，在 https://github.com/unslothai/unsloth/pull/14087 中使用 @shimmyshimmer 的文件预览和作曲家草稿
* Studio：浏览器面板遵循 https://github.com/unslothai/unsloth/pull/14029 中 @Lyxot 的 macOS、Windows 和 Linux 上的系统代理
* Studio：托管帐户的集线器数据集卡可能无法使服务器通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14091 中拨打 http(s) URL
* CI：将 Arrow 和 sqlite-vec 标记为 Windows ARM 驾驶室标志，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14092 中提交
* 测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14116 中对每个主机进行 --help、媒体扫描、安装程序比较器和线束解析器检查
* Studio：自动 GPU 放置缓存失败的探针，跳过 MIG 获胜者，从不阻止 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14118 中的事件循环
* 工作室：通过 Think off 和 GLM 通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14013 告诉 Gemma 4 今天的约会
* 让 Gemma-4 聊天模板格式化 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14015 中的工具调用对话
* 在将 LoRA GGUF 推送到 https://github.com/unslothai/unsloth/pull/13915 中@NilayYadav 的修订之前创建分支
* Studio：将Docker中创建的技能保留在https://github.com/unslothai/unsloth/pull/13912中@NilayYadav的unsloth-studio卷上
* Studio：使知识库块适合https://github.com/unslothai/unsloth/pull/14045中@NilayYadav的嵌入模型的输入限制
* Studio：将聊天文件移入 https://github.com/unslothai/unsloth/pull/14044 中 @NilayYadav 的项目后，将聊天文件保留在库中
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/14111 中 @Souravrajvi0 保护 Mac 桌面启动时丢失的滚动条装订线
* Studio：读取 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14014 中为嵌入训练编写的上传的 CSV 单元格
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14047 中使用 Hugging Face CLI 登录将导出推送到集线器
* Studio：在https://github.com/unslothai/unsloth/pull/14016中@NilayYadav训练Qwen模型时保留数据集的思考文本
* Studio：在 https://github.com/unslothai/unsloth/pull/14124 中@danielhanchen 的捆绑类型计数之下命名未知的 GGUF 定量类型
* Studio：让浏览器面板和网络获取在https://github.com/unslothai/unsloth/pull/14127中@danielhanchen的假IP DNS代理后面工作
* Studio：当 https://github.com/unslothai/unsloth/pull/14131 中的@danielhanchen 拒绝其确定写入时，请编辑完成的回复
* Unsloth Studio / Desktop（AMD、Windows）：阻止 amd-smi 在 https://github.com/unslothai/unsloth/pull/14041 中的 @LeoBorcherding 在系统页面上弹出 UAC/DiskPart 提示
* 以 4 位加载 6 个旧模型，而不是 https://github.com/unslothai/unsloth/pull/13941 中@NilayYadav 缺失的存储库
* Studio：跳过 MXC 无法授予的终端路径条目，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14129 中的每次启动失败
* Studio：让项目源面板隐藏在 https://github.com/unslothai/unsloth/pull/14125 中 @danielhanchen 的项目聊天中
* 模型选择器合约：按照 https://github.com/unslothai/unsloth/pull/14138 中的 @danielhanchen 的 On Device 过滤器进入 Discover 的功能选择
* Studio：将 GGUF 变体列表保留在默认线程池之外，以便停止的集线器无法阻止 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14134 中下载的模型
* Studio：在 https://github.com/unslothai/unsloth/pull/13917 中@NilayYadav 卸载本地模型而不停止外部提供商聊天
* Studio：保留https://github.com/unslothai/unsloth/pull/14043中@NilayYadav的llama.cpp和vLLM连接的默认系统提示
* Studio：当 CPU 绑定的主机具有 Vulkan GPU 时，默认使用 Vulkan llama.cpp 捆绑包（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13599 中）
* Studio：在 https://github.com/unslothai/unsloth/pull/14126 中的 @danielhanchen 的“系统”选项卡 GPU 通知中命名一个关闭的 AMD 设备节点
* Studio：在 https://github.com/unslothai/unsloth/pull/13914 中的@NilayYadav 聊天文件夹太大而无法检查时，请在有风险的呼叫之前进行询问
* 通过 https://github.com/unslothai/unsloth/pull/14002 中的 @takeing-lying-flat 修复 Nemotron 梯度累积损失归一化
* 内核后续工作：NVFP4 形状感知融合门、MoE 后备瓷砖、火炬 2.10 的测试修复 - 2.14 by @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14122
* Studio：在 https://github.com/unslothai/unsloth/pull/14071 中 @Etherll 的“设置”中包装长命令并大写 API 示例
* Studio：在 ffmpeg 或 pandoc 在沙箱外写入之前询问 https://github.com/unslothai/unsloth/pull/13942 中的@NilayYadav
* 在https://github.com/unslothai/unsloth/pull/14060中通过@take-lying-flat对GRPO log-probs进行评分时读取当前的FSDP2输出头
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14033 添加 QwenCloud 作为 API 提供商
* 通过 https://github.com/unslothai/unsloth/pull/14006 中的@take-lying-flat 修复融合 CE 中的 LM 头重量假量化
* 在本机 bailing_hybrid 上加载 Ling 3.x 低排名查询并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14136 中修复其导出
* 通过 https://github.com/unslothai/unsloth/pull/14011 中的 @takeing-lying-flat 修复 Qwen PLE 中的打包文档边界
* Studio：FLUX.3 Image Klein（蒸馏和基础），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13933 提供 INT8 / FP8 / GGUF 支持
* Studio：从https://github.com/unslothai/unsloth/pull/14133中@danielhanchen落后于PyPI的包索引安装
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14034 添加 Z.ai 作为 API 提供商
* Studio：将 Claude 的网络搜索保留在 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/14046 中要求的网站上
* Studio：audio.cpp v0.9.2 在 https://github.com/unslothai/unsloth/pull/14073 中由 @Etherll 支持
* 工作室：FLUX.3 Image Klein 在 https://github.com/unslothai/unsloth/pull/14144 中的 @danielhanchen 的本机 sd.cpp 引擎上
* Studio (macOS)：根据 Metal 工作集加载图像大小，而不是 RAM 减去 20% by @oobabooga in https://github.com/unslothai/unsloth/pull/13776
* Studio：从 @oobabooga 在 https://github.com/unslothai/unsloth/pull/13786 中集成 AMD GPU 上的 sd.cpp 预算中保留 MiniMax-H3 的固定权重
* Studio：视频系列默认使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14000 中托管的量化文本编码器
* Studio：FLUX.3 通过 https://github.com/unslothai/unsloth/pull/14137 中 @danielhanchen 的 llama.cpp sidecar 进行提示上采样（增强提示）
* Studio：从 https://github.com/unslothai/unsloth/pull/14008 中@danielhanchen 的 unsloth 存储库中获取每个图像组件
* Studio：图像系列默认为 https://github.com/unslothai/unsloth/pull/14009 中 @danielhanchen 托管的量化文本编码器
* Studio：从 https://github.com/unslothai/unsloth/pull/14003 中 @danielhanchen 的 unsloth 存储库中获取每个视频组件
* RMSNorm：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14139 中将隐藏状态返回给调用者时，保留最终范数自己的 dX 缓冲区
* AMD 安装后续内容：可安装推断目标、gfx1153 lspci 对等体、覆盖 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14117 中的运行状况提示
* 日志预算：测量 https://github.com/unslothai/unsloth/pull/14167 中@danielhanchen 的 FLUX.3 提示上采样器状态民意调查
* 测试：阻止 GPU 选择路由测试将 CHAT 所有者泄漏到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14169 中的上采样器测试中
* Studio：让下载按钮远离手机上的聊天编辑器，作者：https://github.com/unslothai/unsloth/pull/14163 中的 @shimmyshimmer
* Studio：audio.cpp 模型由 @Etherll 在 https://github.com/unslothai/unsloth/pull/14072 中登陆正确的页面
* Studio：https://github.com/unslothai/unsloth/pull/14077 中 @Etherll 的单命令 MCP 设置、配方提示、模型目录和工具注释
* Studio：更清晰的audio.cpp错误，更清晰的Speak/Clone，@Etherll在https://github.com/unslothai/unsloth/pull/14075中可重现的效果
* Studio：图像和视频生成遵循每个模型的默认值和提示提示，/v1/videos 在 https://github.com/unslothai/unsloth/pull/14078 中采用 @Etherll 的 Unsloth Studio 控制
* Studio：将图像条形图块拖放到图像选择器上，以通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14166 中使用它
* Studio：将编辑图像添加到 https://github.com/unslothai/unsloth/pull/14162 中的 @shimmyshimmer 的图像库项目菜单中
* GRPO：仅在 vLLM 下锁定自动转换，https://github.com/unslothai/unsloth/pull/14123 中 @danielhanchen 在 1.6 之前对 TRL 进行零方差排除
* Studio：在https://github.com/unslothai/unsloth/pull/14062中添加@alkinun在选项卡关闭时停止聊天和深度研究的设置
* Studio：MCP 音频报告其应用的内容、解释音频错误、通过 @Etherll 在 https://github.com/unslothai/unsloth/pull/14080 中检查拍摄和取消
* Studio：图像丸在 https://github.com/unslothai/unsloth/pull/14110 中与@Etherll 加载的本地模型聊天时制作图像和视频
* Studio：MCP 返回无密钥下载链接，并通过 @Etherll 在 https://github.com/unslothai/unsloth/pull/14079 中再次找到媒体、语音和视频帧
* Studio：添加“始终”选项以保持多个模型加载，跟踪 GPU 上的每个模型，并报告 https://github.com/unslothai/unsloth/pull/14088 中 @Etherll 加载卸载的每个模型
* Studio：图像和视频模型在 @Etherll 在 https://github.com/unslothai/unsloth/pull/14106 中适合时，会在聊天旁边保持加载状态
* Studio：MCP 错误、取消和聊天控制代理可以通过 https://github.com/unslothai/unsloth/pull/14081 中的 @Etherll 进行操作
* Studio：MCP 代理在一次调用中跟踪长时间工作，并查看 @Etherll 在 https://github.com/unslothai/unsloth/pull/14089 中卸载的每个模型
* Studio：选择“关闭”、“当它们适合时”或“始终在模型内存中”，并在图像或视频模型在 https://github.com/unslothai/unsloth/pull/14108 中通过 @Etherll 占用 GPU 时保留聊天上下文
* Studio：在https://github.com/unslothai/unsloth/pull/14171中由@shimmyshimmer在Hub卡的下载栏上显示运行步骤
* Studio：MCP 代理在 https://github.com/unslothai/unsloth/pull/14090 中选择模型加载方式和位置、预览加载以及通过@Etherll 对视频进行排队
* Studio：MCP 代理通过 @Etherll 在 https://github.com/unslothai/unsloth/pull/14107 中上传数据集、加载他们训练的内容并提前下载模型
* Studio MCP：在 https://github.com/unslothai/unsloth/pull/14175 中@danielhanchen 的音频错误上保留一个 [code] 标签
* Studio：通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/14170 中将编辑图像添加到库图像菜单
* Studio：通过 https://github.com/unslothai/unsloth/pull/14173 中的@danielhanchen 加载已退役的 FLUX.3 完整副本
* Studio：https://github.com/unslothai/unsloth/pull/14177中@danielhanchen默认下载UD-Q4_K_XL FLUX.3提示上采样器
* Studio：在 https://github.com/unslothai/unsloth/pull/14179 中使用文件作曲家丸文件而不是 @shimmyshimmer 的 RAG 来标记聊天
* Studio：将字母快捷方式与https://github.com/unslothai/unsloth/pull/14113中@Souravrajvi0的布局类型的字母相匹配
* 桌面版：当 https://github.com/unslothai/unsloth/pull/14141 中的环境关闭合成时，请在 NVIDIA Wayland 上保持 DMA-BUF 关闭（@danielhanchen）
* Studio：较暗的未选择模型选择器切换，折叠图标，用于https://github.com/unslothai/unsloth/pull/14183中@shimmyshimmer的紧凑对话
* CLI：doctor --mcp 仅将 API 密钥发送给由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14178 中证明其身份的工作室
* Studio：在采用 Microsoft ARM64 的 ARM64 PC 上运行 Windows 沙箱 (MXC)，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14176 中构建
* Studio：随处可见的一种工具提示设计，在 https://github.com/unslothai/unsloth/pull/14172 中匹配 @shimmyshimmer 的浅色和深色聊天文本颜色
* Studio：将 FLUX.3 Image Klein (Fast FP8) 固定到 https://github.com/unslothai/unsloth/pull/14184 中 @danielhanchen 的图像选择器顶部
* 桌面版：将 rustls 升级为 0.23.46，将 quinn-proto 升级为 0.11.19，以获得 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14186 中提供的 RustSec 咨询
* Studio：将提示上采样器 client 保留在启动块之外，将启动预算重置为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14168 中的构建
* Studio：https://github.com/unslothai/unsloth/pull/14189 中的 @danielhanchen 将 Lemonade 更新为 2026.42.1，将 FastFlowLM 更新为 v1.0.9
* 笔记本 CI：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14182 中将 Colab 预言机快照刷新到当前 GPU 运行时
* Studio：管理帐户使用服务器自己的 HF 端点来获取 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14187 中的配方种子
* Studio：打开//主机链接作为网页链接；通过绝对路径运行 apt-get；忽略 https://github.com/unslothai/unsloth/pull/14190 中@danielhanchen 的开发工作室主页
* Studio：提高启动捆绑预算 #14190 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14198
* Studio：将 FLUX.3 Image Klein GGUF 行保留在 https://github.com/unslothai/unsloth/pull/14197 中 @danielhanchen 的图像选择器顶部的 Fast FP8 行下方
* Studio：从流文本中剥离工具标记，无需重新扫描 https://github.com/unslothai/unsloth/pull/14143 中 @danielhanchen 的每个标记的整个回合
* Studio：提高 https://github.com/unslothai/unsloth/pull/14203 中@danielhanchen 的 #14197 启动捆绑预算
* 混合打包+块编译：修复 https://github.com/unslothai/unsloth/pull/13956 中 @Etherll 的 Guard crash、skipped varlen 和跨文档泄漏
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14211 中为每个提示长度编译 FLUX.3 Klein 一次
* 在 https://github.com/unslothai/unsloth/pull/13454 中复制 @vineethsaivs 的 Granite 快速解码中的就地范数之前的残差
* Studio：在 KV 宽度和 int8 预填充设置中遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14210 中的同型号 MLX 重新加载
* Studio：根据 @AlbertoLMa 的要求在 https://github.com/unslothai/unsloth/pull/14157 中安装 S3 SDK
* Studio：在 https://github.com/unslothai/unsloth/pull/14208 中 @danielhanchen 开启增强提示时启动 FLUX.3 提示上采样器
* 由 @vineethsaivs 在 https://github.com/unslothai/unsloth/pull/13906 中修复填充预填充滑动窗口一键太宽的问题
* Studio：修复 https://github.com/unslothai/unsloth/pull/14018 中 @Imagineer99 的浏览器工具栏对齐和狭窄布局
* GRPO：通过 model.training 文件计算损失指标，而不是 @vineethsaivs 在 https://github.com/unslothai/unsloth/pull/14112 中的 control.should_evaluate
* Studio：https://github.com/unslothai/unsloth/pull/14151 中的@Etherll 在 auth.db 繁忙时保持用户登录
* Fused QKNorm + RoPE：保留混合 dtype 表的类型提升，在 https://github.com/unslothai/unsloth/pull/14200 中 @danielhanchen 的可训练范数后备中重用 grad
* Studio：将 https://github.com/unslothai/unsloth/pull/14213 中的 @danielhanchen 从个人资料统计数据中的代币使用情况导出为 CSV
* Studio：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14135 中保存事件时，继续读取持久的聊天输出
* unsloth run：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14224 中传递 llama-server 短标志，如 -ctv、-dev、-ctxcp
* 上下文并行性：将每个环步骤留下的 SDPA 包装器放入 https://github.com/unslothai/unsloth/pull/14193 中的 @danielhanchen 的 torch 注册表中
* head_dim 512 注意：使用https://github.com/unslothai/unsloth/pull/14202中@danielhanchen在推理模式下制作的掩码的内核
* 通过https://github.com/unslothai/unsloth/pull/14150中的@vineethsaivs将layers_to_transform、use_rslora和modules_to_save传递到SentenceTransformer快速编码器路径上的LoraConfig
* 修复（工作室）：在https://github.com/unslothai/unsloth/pull/14209中@Imagineer99启动之前拒绝超大金属与负载一起
* 块编译：将 GatedDeltaNet 自检排除在 https://github.com/unslothai/unsloth/pull/14195 中 @oobabooga 的不可重入检查点之外
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14230 中对 Qwen-Image-Edit 进行多图像编辑
* Studio：通过 @Sneakr 在 https://github.com/unslothai/unsloth/pull/13919 中修复聊天滚动条在长代码围栏上冻结的问题
* Studio：按需恢复 Qwen causal-conv1d，缩小致命的 mamba-ssm，在 https://github.com/unslothai/unsloth/pull/13971 中由 @danielhanchen 导出提供 SSM 内核
* 注意：GQA 从不强制 SDPA 数学，cuDNN-over-varlen 仅在 sm100 上，在 xformers 之前由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14158 中原生
* 预置轮子：drop-lineinfo、无法到达的 SASS 和 flash-attn PTX；在 https://github.com/unslothai/unsloth/pull/14142 中添加 @danielhanchen 的无扩展名 mamba-ssm
* Studio：在 https://github.com/unslothai/unsloth/pull/14212 中的 @danielhanchen 继承 Windows 上父 ACL 的目录中进行阶段预构建安装
* 优化器状态卸载：在 https://github.com/unslothai/unsloth/pull/14155 中由 @danielhanchen 恢复时跟踪主机上加载的 DTensor 状态
* doctor --gpus：将 NVML P2P 枚举常量读取为 https://github.com/unslothai/unsloth/pull/14164 中 @danielhanchen 的整数
* RoPE：在 GPU 上再次构建增长的缓存，一次 32768 行，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14206 中构建
* FP8 GEMV 长索引测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14220 中的种子输入和最后一位容差
* Studio：@Imagineer99在https://github.com/unslothai/unsloth/pull/13873中创建项目时选择工作文件夹
* Qwen3 解码：通过显式位置读取 RoPE 的大小，而不仅仅是 https://github.com/unslothai/unsloth/pull/14156 中 @danielhanchen 的 KV 长度
* Studio：在 https://github.com/unslothai/unsloth/pull/14191 中将 @Etherll 的朗读语音模型加载到聊天模型旁边
* Studio：在 https://github.com/unslothai/unsloth/pull/14242 中滚动 @danielhanchen 的长聊天时保持代码颜色
* Studio：在 https://github.com/unslothai/unsloth/pull/14216 中路由 clicks 并滚动到 macOS 27 上的 @danielhanchen 的浏览器页面
* 预提交：削减 kwarg 格式化程序的 CPU 6.5x 并阻止 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14249 中的 ruff fork 炸弹 (#14174)
* Studio：在 https://github.com/unslothai/unsloth/pull/14239 中由 @danielhanchen 在事件循环之外构建 OpenAPI 架构
* FSDP2 QLoRA：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14204 中将所有收集的 4 位权重恢复到其 Params4bit 类和 3D 形状
* Studio：开发者模式选择加入 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14247 中生成实验性 CPU 视频
* Studio：提高启动捆绑预算 #14247 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14258
* 通过 https://github.com/unslothai/unsloth/pull/14021 中的@vineethsaivs 的正则表达式 target_modules 来尊重layers_to_transform 和finetune_last_n_layers
* feat(studio)：通过 @Mathews-Tom 在 https://github.com/unslothai/unsloth/pull/11937 中添加隐藏 macOS 菜单栏图标的设置
* CI：保留一代前缀恢复缓存，通过https://github.com/unslothai/unsloth/pull/14263中的@danielhanchen共享Core的pip缓存
* Studio：使用 https://github.com/unslothai/unsloth/pull/14223 中的 @danielhanchen 的删除键删除选定的配方块
* 工作室图片：https://github.com/unslothai/unsloth/pull/14232 中@danielhanchen 为 GGUF 选择的每个负载引擎选择（LoRA 的本地 sd.cpp）
* Studio：在 DeepSeek-V4.1-Flash-1017 (deepseek41) 中通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14260 中连线
* Studio：提高 https://github.com/unslothai/unsloth/pull/14264 中@danielhanchen 的 #11937 启动捆绑预算
* 工作室：使用 https://github.com/unslothai/unsloth/pull/14235 中的 @danielhanchen 的 SAM 3 制作修复和本地化编辑蒙版
* Studio 安装程序：在 https://github.com/unslothai/unsloth/pull/14248 中 @danielhanchen 的新版本旁边显示以前的 unsloth 版本
* Studio：在 API 监视器中显示长提示的结尾，作者：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14241 中
* 上下文并行：仅当训练器在 https://github.com/unslothai/unsloth/pull/14152 中由 @danielhanchen 启用 CP（火炬 2.10 步时间）时，才包装训练器方法
* Studio：在自己的 GPU 上保持负载不足，不再卸载其他 GPU 或 CPU 上的模型（https://github.com/unslothai/unsloth/pull/14234 中的 @danielhanchen）
* 解码：覆盖 Gemma2、Cohere、Granite 和 FalconH1 中经过惰性 RoPE 缓存的显式位置（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14199 中）
* 全图下的 MFU 日志记录、分布式调试下的 NCCL 日志记录、@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14207 中跨等级的代币预算指标
* Studio：让经过批准的 rm 运行，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14238 中的递归运行
* Studio：从https://github.com/unslothai/unsloth/pull/14161中的@NilayYadav的加载模型卡中弹出一个正在运行聊天的模型
* Unsloth Studio / Desktop：以模型、标题和日期命名聊天导出，并在 https://github.com/unslothai/unsloth/pull/12586 中重新打开 @LeoBorcherding 的最后一个保存文件夹
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/14268 中读取 /proc 统计数据时，孙子收获了计数
* 测试：在图像文本编码器中回显 gguf_filename 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14269 中制作的剧作家状态存根
* 测试：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14272 中进行图像引擎选择和图像掩码文本类型检查
* Studio：为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14254 中的 GGUF 聊天每隔一个采样视频帧添加时间戳
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14270 中格式化两个文件 #14247 离开格式化程序固定点
* unsloth start vscode：打印组而不是在https://github.com/unslothai/unsloth/pull/14237中@danielhanchen的普通容器中写入死文件
* Studio：聊天会记住它最后使用的模型，而不仅仅是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14259 中开始的模型
* 测试：在https://github.com/unslothai/unsloth/pull/14271中@danielhanchen在没有驻留GPU仲裁器的情况下开始每个diffusion_segment测试

## 新贡献者
* @AlbertoLMa 在 https://github.com/unslothai/unsloth/pull/14157 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.908-beta...v0.1.909-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.909-beta` · 📅 发布：2026-10-19 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.909-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
