---
title: "unsloth v0.1.908-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.908-beta"
version: "v0.1.908-beta"
published: "2026-10-15"
type: "pre"
lang: "zh"
---

# unsloth v0.1.908-beta

在 Unsloth 中本地运行 NVIDIA 的新 Nemotron 3.5 模型和 Meta 的新 Muse Spark Open。新内容：文本传播法学硕士、DeepSpeed 训练和更好的编码代理提示缓存。

## 亮点

- **NVIDIA Nemotron 3.5 Bolt**：在 24 GB 内存上运行。 [使用指南](https://unsloth.ai/docs/models/nemotron-3.5-bolt)
- **NVIDIA Nemotron 3.5 Super VL**：120B（12B 活动）[指南](https://unsloth.ai/docs/models/nemotron-3.5-super-vl)
- **Meta Muse Spark Open**：816B（42.7B 活动）- 在 256GB 上运行 [指南](https://unsloth.ai/docs/models/muse-spark-open)
- **更好的编码代理提示缓存**：本地 GGUF 模型上的 Claude Code、Codex 等重新处理的每个提示要少得多。
- **浏览器使用**：始终允许每个聊天正常工作、光标和单独的选项卡。
- **通过您的连接生成图像**：使用 sd-server、Ollama、Lemonade 和其他图像服务器生成。
- **Diffusion LLM**：使用实时降噪画布与 LLaDA、Dream、SDAR 等进行训练和聊天。

## Nemotron 3.5

- 运行 NVIDIA Nemotron 3.5 Super VL，这是一个 120B 模型，具有 12B 活动参数和多达 1M 上下文标记，专为文档理解、计算机使用和长期运行代理而构建。 Super VL 在 1 位时运行大约 64 GB 内存，在 4 位时运行在 128 GB 内存中。 [指南](https://unsloth.ai/docs/models/nemotron-3.5-super-vl) · [GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-GGUF)
- 运行 NVIDIA Nemotron 3.5 Bolt，这是一个具有 9B 活动参数和 128K 上下文的 74B 模型，由 Super VL 压缩。 Bolt 以 1 位或 2 位运行在大约 32 GB 内存中。 [指南](https://unsloth.ai/docs/models/nemotron-3.5-bolt) · [GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-GGUF)
- Nemotron 3.5 Super VL 在 100K 输入下的生成速度比 Inkling Small 快约 5 倍，且具有相似的智能。
- 默认情况下，Unsloth 运行带有 DSpark 绘图器的 Nemotron 3.5 Bolt（大约多出 1 到 2 GB 内存）和带有内置 MTP 的 Super VL，以实现更快的输出。两者都可以在设置中关闭。 [MTP指南](https://unsloth.ai/docs/models/mtp)

## Muse Spark 开放

- 运行 Meta 的 Muse Spark Open，这是一个 816B MoE 模型，具有约 42.7B 活动参数和 1M 上下文令牌，专为多模式推理、编码和代理工作流程而构建。 Muse Spark Open 在 2 位时运行在约 256 GB 内存中。 [指南](https://unsloth.ai/docs/models/muse-spark-open) · [GGUF](https://huggingface.co/unsloth/Muse-Spark-Open-816B-A42B-GGUF)
- Muse Spark Open 将文本、图像、视频和音频作为输入，推理工作量从低到高。
- Muse Spark Open 接受了长期编码任务的培训，包括整个存储库生成、大型端到端项目和自动研究。

## 培训

- 在 Unsloth 应用程序中与文本传播法学硕士进行训练和聊天，包括 LLaDA、Dream、SDAR、LLaDA2、Nemotron-Labs-Diffusion 和 DiffusionGemma。聊天回复显示实时降噪画布。
- 使用 DeepSpeed ZeRO-2 和 ZeRO-3 进行训练，包括 4 位 QLoRA、全面微调、DPO 和 CPU 卸载。使用 DDP 和梯度检查点的 LoRA 训练也不再崩溃。
- 带有 `fast_inference` 的 GRPO 现在可以在 Nemotron 3 Nano 和 block-FP8 MoE 模型上运行，与 vLLM 共享权重。
- 在“训练”页面上，当评估损失停止改善时尽早停止，并在预标记化数据集上进行训练。随机种子现在还设置 LoRA 起始权重。

## 性能

- 当 Claude Code、Codex 或 OpenCode 在本地 GGUF 模型上运行时，后续轮次重新处理的对话量会少得多，并且新的 Claude Code 会话的第一个回复启动速度快 4 倍。
- 在 Python 中，Llama 和 Qwen3 型号的单提示 `model.generate` 在 32K 上下文中速度提高了 2.7 倍。
- 在 Python 中，使用位和字节 4 位模型一次生成 2 到 4 个提示在某些 NVIDIA GPU 上速度提高了 2.8 倍。
- 默认情况下，在 Nemotron 3 Nano 上使用 `fast_inference` 进行 GRPO 部署速度提高了 30%。

## 浏览器使用

- 查看型号 cli 所在的光标并键入，或在“设置”>“浏览器”>“浏览器使用”>“显示光标”中将其关闭。
- 浏览器使用提示现在具有“始终允许”功能，这会批准网站上的此类操作以进行其余的聊天。脚本仍然每次都会询问。
- 每个聊天都保留自己的浏览器选项卡，并且在桌面中，浏览器的使用在屏幕之外的聊天中仍然有效。
- 在 Web UI 中，浏览器页面会记住页面之间的站点首选项、从自己的站点加载数据以及全屏播放视频。

## 图片+视频

- 通过连接的图像服务器（例如 sd-server、Ollama、Lemonade、vLLM、llama.cpp 或自定义 OpenAI 兼容 URL）在“图像”页面上生成图像。
- 图像和视频模型现在跳过它们从不使用的文本编码器层，从而在每次加载时节省内存。

## 聊天 + 桌面

- 从桌面的首次运行屏幕中选择 Unsloth 在 Windows 上的安装位置。
- 切换嵌入模型后重新嵌入您的文档，无需再次上传。
- 与文件聊天可以折叠成一排药丸，其引用在引用的页面上打开 PDF，新添加的 Word 和 HTML 文件保留其列表编号。
- 从聊天标题菜单压缩对话，并且在没有文件更改时“倒带”不再要求确认。

## 模型+设置

- 当 Claude Code、OpenCode 或 Codex 在云模型上运行时，将 `--auto-route` 添加到 `unsloth start`，以将常规编码工作（例如读取文件、搜索和运行命令）发送到本地模型。
- Codex 可以将其 MCP 和子代理工具与本地模型结合使用，并且 Claude Code、Codex 和 OpenCode 可以通过“设置”>“与 `unsloth start --model` 的连接”在模型上运行。
- 在“设置”>“API”>“模型别名”中命名一次模型，这样当别名背后的模型发生变化时，使用 Unsloth API 的应用程序仍能继续工作。
- vLLM 连接和 Unsloth 自己的 vLLM 引擎支持思维努力水平和保留思维，并且该引擎现在可以自动压缩长聊天。 vLLM 和 SGLang 负载还可以设置 FP8 KV 缓存、GPU 内存限制和种子。
- 从发布多种精度的 MLX 存储库中选择 2 位、4 位、6 位或 8 位，就像选择 GGUF 量化一样。 Xing4.0 和 MiniCPM-V 4.7 现在使用 MLX 运行和训练。

## 硬件兼容性

- 具有早于 CUDA 12 的 NVIDIA 驱动程序的 Windows PC 安装 Vulkan 或 CPU llama.cpp 版本而不是失败。
- ROCm 不支持的 AMD GPU（例如 RDNA 1 和 Polaris）现在即使安装了 ROCm 或另一个 AMD GPU 支持它，也可以获得 Vulkan llama.cpp 版本。
- 当 PyTorch 仅使用 CPU 时，GGUF 图像生成在适用于 AMD 和 Intel Arc GPU 的 Vulkan 上运行。
- PyTorch 2.10 和 2.11 上的 Windows 安装获得预构建的 flash-attn、causal-conv1d 和 mamba-ssm。
- 混合 GPU 代的多 GPU 机器现在为每个 GPU 选择注意力后端，并且带有 conda-forge xformers 的 Hopper GPU 不再崩溃。

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
*修复：更新Codex client版本以恢复https://github.com/unslothai/unsloth/pull/13581中@Imagineer99的模型发现
* Studio：改变思维设置也会重置https://github.com/unslothai/unsloth/pull/13625中@shimmyshimmer的扩展思维
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/13627 中的 @danielhanchen 的 unsloth>=2026.10.5
* Studio MCP：切勿从 https://github.com/unslothai/unsloth/pull/13605 中 @danielhanchen 的聊天工具运行服务器端工具
* Nemotron-H fast_inference 通过 vLLM 权重共享（回退到旧的 unsloth_zoo）；在 https://github.com/unslothai/unsloth/pull/13440 中@danielhanchen 的回退中删除仅 vLLM 的 kwargs
* 扩散 LM 训练：编译了 0 个图表中断的分块损失，以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13341 中的每族采样器
* Studio：提供 MLX 存储库的精确文件夹，例如 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13565 中的 GGUF Quants
* Studio：在 https://github.com/unslothai/unsloth/pull/13485 中 @NilayYadav 的 Chat with files 中保持选中 Word 表单复选框
* 测试：click 将内联删除按钮 #13615 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13634 中放回操作栏上
* Studio：按住强制对齐器以防止文件夹删除；按 https://github.com/unslothai/unsloth/pull/13633 中的 @danielhanchen 顺序匹配复合 audio.cpp 大小范围
* 工作室：vLLM 思维努力水平、保留思维和自动压缩，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13571
* Studio：停止在 https://github.com/unslothai/unsloth/pull/13489 中 @NilayYadav 没有结束标记的菜单后删除页面文本
* 在 https://github.com/unslothai/unsloth/pull/13640 中@danielhanchen 的音频选择器和思维融合后重新测量 Studio 启动预算
* Studio：让Python工具在https://github.com/unslothai/unsloth/pull/13487中打开@NilayYadav的SQLite文件
* FP8 LoRA：在https://github.com/unslothai/unsloth/pull/13270中通过@danielhanchen在向后像门中对down_proj进行反量化
* ROCm 上的 FP8：在没有 e4m3fn Triton 支持的拱门上使用 dequant 路径，由 https://github.com/unslothai/unsloth/pull/13331 中的 @danielhanchen 提供
* 在 Trainer.train() 期间冻结设置时间堆；在 https://github.com/unslothai/unsloth/pull/13332 中添加 @danielhanchen 的恢复奇偶校验和内存平坦 GPU 测试
* 工作室：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13342 中与每个文本扩散 LM 家族进行训练和聊天
* Studio：防止本地 Claude 代理在 https://github.com/unslothai/unsloth/pull/13477 中的@NilayYadav 的小上下文窗口上停止
* Studio：默认在 GPU 上运行 Laya，并在 https://github.com/unslothai/unsloth/pull/13479 中由 @NilayYadav 卸载时释放它
* Studio：将 Codex MCP 和子代理工具传递给 https://github.com/unslothai/unsloth/pull/13483 中 @NilayYadav 的 /v1/responses 上的模型
* DDP LoRA：默认 find_unused_parameters=False，因此梯度检查点不会崩溃 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13267
* Studio：KV 缓存数据类型、GPU 内存限制以及 vLLM 和 SGLang 加载的种子，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13596 中提供
* 扩散 LM：快速推理、实时降噪帧和环内消除，作者：https://github.com/unslothai/unsloth/pull/13592 中的@danielhanchen
* fast_cross_entropy_loss：https://github.com/unslothai/unsloth/pull/13325 中@danielhanchen 的全屏蔽标签给出损失 0 而不是 NaN
* Studio：@NilayYadav 在 https://github.com/unslothai/unsloth/pull/13482 中卸载 Clef 的训练结束后立即重新加载 Clef
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13478 中使用 unsloth start --auto-route 将常规编码工作发送到本地模型
* 测试：接受 https://github.com/unslothai/unsloth/pull/13646 中 @danielhanchen 对 Path.read_text / write_text 的位置编码
* QAT：回退到 https://github.com/unslothai/unsloth/pull/13280 中 @danielhanchen 融合 LoRA 中 torchao NVFP4 / MX 线性模块的前向模块
* 测试：一旦动物园采用 https://github.com/unslothai/unsloth/pull/13269 中 @danielhanchen 的编辑，保持动物园 num_proc 锚点测试有意义
* Studio：当@NilayYadav在https://github.com/unslothai/unsloth/pull/13480中加载多个模型时，点unsloth从正确的模型开始
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13593 中用于变压器扩散 LM 的实时降噪画布
* FP8 MoE + fast_inference：在加载 vLLM 之前拒绝不受支持的检查点，并带有 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13277 中起作用的提示
* 将 https://github.com/unslothai/unsloth/pull/13484 中 @NilayYadav 运行的每辆 Unsloth 列车保存在自己的文件夹中
* Studio：将数据配方种子检查保存在 https://github.com/unslothai/unsloth/pull/13611 中的@danielhanchen 管理帐户的工作区中
* GRPO DDP 梯度同步：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13268 中将每个平均存储桶复制回一个 _foreach_copy_
* 本机解码：在 https://github.com/unslothai/unsloth/pull/13271 中通过 @danielhanchen 就地读取 GQA KV 头，而不是按查询头复制它们
* Studio：在扩散器模块上键入 i2v 可用性缓存，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13667 中的 ID
* Studio CI：click 在 https://github.com/unslothai/unsloth/pull/13670 中 @danielhanchen 的 dismiss_on_composer 探针中检查作曲家本身
* Studio UI 测试：等待聊天 shell 稳定下来，而不仅仅是 https://github.com/unslothai/unsloth/pull/13672 中 @danielhanchen 的作曲家
* 使用 https://github.com/unslothai/unsloth/pull/13657 中的 @NilayYadav 的 <|return|> 结束最后一个 gpt-oss 训练回合，而不是 <|end|>
* Studio：LTX-2.5 默认遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13618 中的 ComfyUI（托管 INT8-ConvRot DiT，选择加入 int8 文本编码器）
* 工作室：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13654 进行的 Wan2.2-TI2V-5B LoRA 培训
* Studio：在https://github.com/unslothai/unsloth/pull/13682中@danielhanchen在日志预算中声明Hub的/api/引擎重试
* 工作室：崩溃思维的 V 形点由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13669 中指出
* Studio：在每个宽度和缩放下将编辑器调整到消息列的大小，并停止 clipping @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13675 中思考文本
* Studio：在https://github.com/unslothai/unsloth/pull/13390中通过@Imagineer99配置第一个令牌等待限制
* 模型配置 UI 测试：将从未报告其结束的 /validate 视为丢失事件（https://github.com/unslothai/unsloth/pull/13689 中的 @danielhanchen）
* Studio：Windows torch 2.11 内核来自 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13564 中预构建的轮子
* Studio：与文件聊天搜索行列出了其文档，这些文档由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13681 中的附件查看器中打开
* Studio：聊天中的一个滚动附件行，甚至在 https://github.com/unslothai/unsloth/pull/13678 中 @shimmyshimmer 的输入上方留有间距
* Studio：将结构化食谱列训练为 JSON，而不是 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13635 中的 Python 指令
*工作室：每项技能未勾选时，技能药丸都会保留；它的 X 或 + 菜单可关闭 https://github.com/unslothai/unsloth/pull/13687 中 @shimmyshimmer 的技能
* 将手电筒的捆绑闪光灯保留在 Blackwell 上，用于 https://github.com/unslothai/unsloth/pull/13631 中 @danielhanchen 的 UNSLOTH_FLASH_ATTENTION_IMPL=auto 下的简短文档
* 已声明的民意调查探针：仅计数该工作室由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13690 提供服务的请求
* Studio：将聊天文件折叠到一排药丸中，并在 https://github.com/unslothai/unsloth/pull/13686 中通过@shimmyshimmer 显示全部
* Studio：将杂散分隔线放在 https://github.com/unslothai/unsloth/pull/13692 中 @shimmyshimmer 工具的创建文件行上方
* Studio：更简单的倒带确认，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13676 中跳过仅对话倒带
* Studio：删除作曲家附件不再重新加载https://github.com/unslothai/unsloth/pull/13677中@shimmyshimmer的其他附件
* Studio：在浅色模式下文本#0f1114，在深色模式下文本#fcfcfc，@shimmyshimmer在https://github.com/unslothai/unsloth/pull/13693中思考文本更容易阅读
* Studio：与文件引用芯片聊天，在 https://github.com/unslothai/unsloth/pull/13691 中 @shimmyshimmer 在引用的页面上打开 PDF
* Studio：让我们大声朗读超过 2048 个标记，并在 https://github.com/unslothai/unsloth/pull/13648 中被@NilayYadav 缩短时发出警告
* Studio：在https://github.com/unslothai/unsloth/pull/13659中通过@NilayYadav导入数据配方时，将SSE MCP服务器保留为SSE
* Studio：重新排序聊天+菜单，通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13679 中进行深入研究和浏览器使用
* Studio：让JSON-回复API请求仍然在https://github.com/unslothai/unsloth/pull/13658中@NilayYadav在MLX模型上调用他们的工具
* Studio：设置下拉菜单在深色模式下以窗格颜色发光，作者：https://github.com/unslothai/unsloth/pull/13703 中的 @shimmyshimmer
* 使用处理器打包 Qwen3.5 文本 SFT，并修复 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13624 中运行的打包文本上的 eval_loss
* 修复主要 CI：倒回和技能字符串、代币计数工具、深度研究合约、https://github.com/unslothai/unsloth/pull/13701 中 @danielhanchen 的动物园 2026.10.5 扫描基线
* CI：合并每个工作流程的主推运行，以便合并突发停止超出运行者池，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13705
* 工作室：在 https://github.com/unslothai/unsloth/pull/13626 中添加@danielhanchen 对评估损失的早期停止耐心
* CI：绑定 CodeQL 覆盖基础缓存搅动，通过 https://github.com/unslothai/unsloth/pull/13704 中的 @danielhanchen 解决缓存管理器饥饿问题
* Unsloth Studio：在 https://github.com/unslothai/unsloth/pull/13499 中 @LeoBorcherding 的研究查询中的授权方案后编辑凭证
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13641 中使用 TRL 1.15 的融合 LM 头修复跨 GPU 的模型上的 DPO
* 当 tokenizer 在 https://github.com/unslothai/unsloth/pull/13628 中 @danielhanchen 发出 pad token 时，保留 pad 嵌入行
* 修复了 https://github.com/unslothai/unsloth/pull/12647 中 @YashwanthNomula 的 Voxtral 处理器保存和 Voxtral 实时训练
* 当构建没有 sm_90a 内核时，在 https://github.com/unslothai/unsloth/pull/13619 中 @shimmyshimmer 跳过 H100 上的 xformers FA3
* 跳过每层 RoPE 流同步，除非模型跨越 https://github.com/unslothai/unsloth/pull/13609 中的 @danielhanchen 的多个设备
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13587 中使用 DeepSpeed ZeRO-2 和 ZeRO-3 进行训练
* CI：在 https://github.com/unslothai/unsloth/pull/13709 中 @danielhanchen 关闭时取消拉取请求的剩余排队和正在运行的运行
* CI：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13707 中的 UI 烟雾作业中安装 Unsloth 来重叠浏览器安装和缓存恢复
* CI：在 Windows Smoke 和后端 CI 中并行运行 lint 检查并重叠独立设置，作者为 https://github.com/unslothai/unsloth/pull/13710 中的 @danielhanchen
* 聊天 UI 测试：在 https://github.com/unslothai/unsloth/pull/13708 中关闭过时的页面浏览器端，而不是等待其渲染器 @danielhanchen
* Studio：使用浏览器 在作曲期间始终允许规则 由@wasimysaid 在 https://github.com/unslothai/unsloth/pull/13700 中完全访问
* Studio Desktop：在 Windows 任务栏上方保留一个最大化的窗口，作者：https://github.com/unslothai/unsloth/pull/13647 中的 @danielhanchen
* CI：让临时存储库在 https://github.com/unslothai/unsloth/pull/13711 中的 @danielhanchen 上保存上游主干上的依赖项缓存
* CI：在 https://github.com/unslothai/unsloth/pull/13712 中 @danielhanchen 的 Playwright Smoke、后端测试和 Stop Unsloth 步骤中等待事件而不是固定睡眠
* 修复（studio）：在https://github.com/unslothai/unsloth/pull/13606中@sahacha设置期间锚定相对路径条目
* 工作室前端：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13718 上次提高后的测量增长来提高启动捆绑预算
* Studio：在 https://github.com/unslothai/unsloth/pull/13645 中保留 @danielhanchen 的 API clients 和编码代理的提示缓存
* Studio：https://github.com/unslothai/unsloth/pull/13723 中 @shimmyshimmer 扩大面板时保留浏览器页面背景
* CI：运行 34 个模拟 GPU 选择测试，删除死动物园取消选择，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13706 中打印跳过原因
* Studio Hub：最新和最近更新的在 https://github.com/unslothai/unsloth/pull/13632 中 @danielhanchen 推荐下列出了超过 Unsloth 模型
* 将 Unsloth Studio MLX 引脚移至 https://github.com/unslothai/unsloth/pull/13699 中的 @Lyxot 的 mlx-vlm 0.7.8
* 壮举：通过 @Lyxot 在 https://github.com/unslothai/unsloth/pull/13579 中的聊天菜单中添加紧凑的对话
* Studio：在 https://github.com/unslothai/unsloth/pull/13722 中通过@shimmyshimmer 在聊天、页面和选项卡中保存作曲家草稿
* Lint CI：扫描提交的文件，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13728 中写入后台通道的树
* Studio：停止扩展思维，重新设计 https://github.com/unslothai/unsloth/pull/13665 中 @oobabooga 的整个跟踪
* Studio：在 https://github.com/unslothai/unsloth/pull/13735 中的 @danielhanchen 之间移动时显示悬停图标的工具提示
* 预建 CUDA 轮子：https://github.com/unslothai/unsloth/pull/13740 中的 @danielhanchen 用于 Windows x64 的 Torch 2.10
* Studio 安装程序（AMD、Linux）：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13694 中安装 ROCm 时，适用于 RDNA 1 和 Polaris 的 Vulkan llama.cpp
* Studio (macOS)：当 https://github.com/unslothai/unsloth/pull/13695 中的 @danielhanchen 缺少 MLX 时，从 torch 读取 Metal 工作集
* Lint CI：在https://github.com/unslothai/unsloth/pull/13736中@danielhanchen跳过全树扫描中的.lanes
* 恢复 https://github.com/unslothai/unsloth/pull/13744 中@shimmyshimmer 的“Studio Hub：最新和最近更新的列表超过推荐下的 Unsloth 模型”
* Studio：按 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13601 中搜索和加载大型 MCP 工具目录
* Studio：https://github.com/unslothai/unsloth/pull/13720 中 @indrajeetapache 默认导出加载到 offload_layers=auto
* MLX：Unsloth Studio 中的 Clef Omni，决策 API 中的音频和 https://github.com/unslothai/unsloth/pull/13538 中 @Lyxot 的决策训练
* Composer 浏览器模拟：在 https://github.com/unslothai/unsloth/pull/13745 中@danielhanchen 重试时记录浏览器进程
* 混合打包：在 https://github.com/unslothai/unsloth/pull/13721 中 @danielhanchen 加速的 unwrap_model (Qwen3.5 / 3.6 GRPO) 后保持 varlen 向前工作
* 在 https://github.com/unslothai/unsloth/pull/13698 中@danielhanchen 在混合代多 GPU 主机上选择每个设备的注意力后端
* Studio：当 Torch 在 AMD 或 Arc GPU 上仅使用 CPU 时，在 Vulkan 上运行本机图像生成，作者：https://github.com/unslothai/unsloth/pull/13697 中的 @danielhanchen
* 轻推重试取消测试：限制悬挂，而不是跑步者的速度，作者：https://github.com/unslothai/unsloth/pull/13750 中的 @danielhanchen
* 当https://github.com/unslothai/unsloth/pull/13594中的@danielhanchen可训练范数权重时，计算RMSNorm权重梯度
* 工作室：向 Gemini 发送刚刚在 https://github.com/unslothai/unsloth/pull/13636 中 @NilayYadav 的充满图像的聊天中附加的图像
* Studio：在 https://github.com/unslothai/unsloth/pull/13614 中阻止 @wasimysaid 隐藏运行设置的工具提示
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13732 中解释为什么 Sandbox High 在没有任何可安装内容的情况下不可用
* 使用 NF4 GEMV 解码小 4 位批次，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13642 中对每个标记进行反量化
* Studio：在 https://github.com/unslothai/unsloth/pull/13652 中 @NilayYadav 的纯文本 GGUF 图像后保持 Claude 会话正常工作
* Studio：在https://github.com/unslothai/unsloth/pull/13661中通过@NilayYadav在地址栏搜索llama.cpp等文件名
* Studio：从 https://github.com/unslothai/unsloth/pull/13731 中 @danielhanchen 折叠的侧边栏打开图像和音频工作流程
* 将残差保留在Gemma 和Gemma2 float32 快速解码中，由https://github.com/unslothai/unsloth/pull/13643 中的@vineethsaivs 进行
* 在 https://github.com/unslothai/unsloth/pull/13660 中保留 @NilayYadav 的 docker rm 之后 Docker 笔记本及其保存的模型
* Studio：保持“开始导出”关闭以进行集线器推送，直到 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13651 中命名存储库
* Studio：保留对话中的 Anthropic 系统消息，以便新会话重用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13727 中的提示缓存
* Studio：将音频 API 卡添加到“设置”中，并从 https://github.com/unslothai/unsloth/pull/12821 中 @Etherll 的“音频”页面打开它
* Studio：当 GPU llama 服务器不断崩溃时，将 RAG 嵌入器移至 CPU（https://github.com/unslothai/unsloth/pull/13739 中的 @danielhanchen）
* Studio：一旦 @Etherll 在 https://github.com/unslothai/unsloth/pull/13630 中更新集线器缓存列表，就会忘记已删除的音频模型
* Studio：报告消息和响应 API 上的提示缓存命中，并通过 https://github.com/unslothai/unsloth/pull/13741 中的 @danielhanchen 向 vLLM 和 SGLang 询问它们
* 修复 https://github.com/unslothai/unsloth/pull/13572 中 @Imagineer99 浅色背景上的安装程序警告颜色
* Studio：在请求之间保留无线程对话的剪切，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13743 中重用提示缓存
* Studio：在 https://github.com/unslothai/unsloth/pull/13622 中的@danielhanchen 重新加载失败之前，给被杀死的 llama-server 时间退出
* Studio：让浏览器面板页面通过@oobabooga在https://github.com/unslothai/unsloth/pull/13664中调用自己站点的API
* 通过 https://github.com/unslothai/unsloth/pull/13730 中的 @takeing-lying-flat 修复 Gemma2 跨注意力后端的滑动窗口边界
* Studio：在桌面更新停止正在进行的下载之前询问 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13650
* 工作室前端：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13752 上次提高后的测量增长来提高启动捆绑预算
* Studio：使用 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13637 中的随机种子设置为 LoRA 初始化播种
* Studio：让附件的开头大于 https://github.com/unslothai/unsloth/pull/13620 中 @danielhanchen 的上下文窗口
* Studio：将美元符号中的数字渲染为数学，而不是 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13649 中的价格
* Studio：删除 GGUF 行不再删除 https://github.com/unslothai/unsloth/pull/13368 中 @alkinun 相同数量的其他构建
* Studio：在https://github.com/unslothai/unsloth/pull/13702中通过@Lyxot切换嵌入模型后重新嵌入文档
* 将 studio/backend/routes/inference.py 格式化回 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13765 中的钩子固定点
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/13621 中@Sneakr 模型卸载时保留聊天工具选择
* Studio：安装最新的audio.cpp版本并通过@Etherll在https://github.com/unslothai/unsloth/pull/13589的更新中提供它
* Studio passthrough：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13769 的剪切范围内的 getattr 读取后端的身份
* Studio：将启动捆绑包预算提高#13589（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13789 中测量的增长）
* Studio：当桌面浏览器页面作为 https://github.com/unslothai/unsloth/pull/13734 中的@danielhanchen 对话框打开时，保持桌面浏览器页面处于活动状态
* Studio：通过@kevin9327在https://github.com/unslothai/unsloth/pull/13683中参考图像内容缓存编辑模式文本编码
* Studio：Windows torch 2.10 内核来自 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13742 中预构建的轮子
* 测量简历字形在 viewBox 单位中的居中，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13799 中绘制的矩形
* Studio：将添加MXC内置容器的Windows更新命名为https://github.com/unslothai/unsloth/pull/13798中的@danielhanchen
* 预构建的 CUDA 轮子：https://github.com/unslothai/unsloth/pull/13807 中 @danielhanchen 用于 Windows x64 的 Torch 2.12
* 为数据设置驱动程序的冷首次加载提供与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13809 中的安装等待相同的 120 秒
* Studio：停止模型加载不会留下 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13803 中的启动模型状态
* Studio：在 https://github.com/unslothai/unsloth/pull/13810 中 @danielhanchen 列出的 API id 下卸载模型
* Unsloth Studio / Desktop（AMD、Windows）：当设备 0 没有 HIP 捆绑包时，安装 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/13680 中预构建的 Vulkan llama.cpp
* Pin 害虫：1.9.0 在 https://github.com/unslothai/unsloth/pull/13818 中 @danielhanchen 的有效 3.5 语法上无法通过后端地板 lint
* Studio：让 YuE2 歌曲运行到自己的结局，而不是 https://github.com/unslothai/unsloth/pull/13371 中 @danielhanchen 的 1.5 倍长度
* unsloth start opencode：永远不要在裸机启动时传递 --model ； OpenCode 2 在 https://github.com/unslothai/unsloth/pull/13783 中拒绝了@YogeshSeeni
* Studio：在https://github.com/unslothai/unsloth/pull/13754中通过@NilayYadav在网络搜索中阅读GitHub文件链接背后的代码
* Studio：每个聊天都保留自己的浏览器选项卡，浏览器代理在 https://github.com/unslothai/unsloth/pull/13800 中的 @danielhanchen 的屏幕外聊天中运行
* Studio：在https://github.com/unslothai/unsloth/pull/13785中@oobabooga的相同答案中保持工具调用之间的连接思考
* Studio：在 https://github.com/unslothai/unsloth/pull/13671 中 @oobabooga 早于 CUDA 12 的 Windows NVIDIA 驱动程序上安装 Vulkan 或 CPU llama.cpp 捆绑包
* Studio：https://github.com/unslothai/unsloth/pull/13817 中@shimmyshimmer 在聊天模型选择器上更紧密的悬停药丸
* Studio：让浏览器面板中的视频全屏显示 @NilayYadav in https://github.com/unslothai/unsloth/pull/13759
* 工作室：继续在 https://github.com/unslothai/unsloth/pull/13757 中转录@NilayYadav 损坏的音频帧
* 通过 https://github.com/unslothai/unsloth/pull/13758 中的 @NilayYadav 在 16 位（而不是 4 位）中使用 unsloth eval 进行 16 位微调
* Studio：告诉模型网站的机器人保护何时阻止 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13760 中获取页面
* Studio：训练 ShareGPT 工具在 https://github.com/unslothai/unsloth/pull/13824 中的 @danielhanchen 本地调用处理器加载的模型
* Studio：使用本机 Linux 浏览器选项卡和 https://github.com/unslothai/unsloth/pull/13717 中 @wasimysaid 的 GTK 覆盖大小调整
* Studio：在 https://github.com/unslothai/unsloth/pull/13777 中添加@NilayYadav 始终允许浏览器代理提示
* Studio：在 https://github.com/unslothai/unsloth/pull/13811 中 @danielhanchen 关闭自动压缩时让工具结果使用窗口
* Studio：在 https://github.com/unslothai/unsloth/pull/13755 中的 @NilayYadav 的 Word 和 HTML 知识库文件中保留列表编号
* Studio：显示浏览器代理光标 cli 的位置和类型，通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13729 中进行设置切换
* Studio：有限 MPS 内存上限和 macOS 上的 sd.cpp --mmap，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13763
* Studio Hub：删除紧凑列表视图，使网格和分割视图响应式由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13822 中实现
* Studio：让 Linux 工具沙箱在 NixOS 和 FHS 启动器中使用 bubblewrap，作者：https://github.com/unslothai/unsloth/pull/13768 中的 @oobabooga
* 从快速 LayerNorm 返回权重和偏差梯度，并支持 https://github.com/unslothai/unsloth/pull/13801 中@danielhanchen 的偏差=False
* Studio：探索 ROCm 上的区域扩散编译，而不是 https://github.com/unslothai/unsloth/pull/13774 中的 @danielhanchen 拒绝它
* Studio：停止重新提示已完成的工具答案，该答案由 @oobabooga 在 https://github.com/unslothai/unsloth/pull/13653 中逐步标记其结果
* Studio：https://github.com/unslothai/unsloth/pull/13767 中 @danielhanchen 的用于扩散和视频的通用文本编码器死尾截断
* Studio：在 https://github.com/unslothai/unsloth/pull/13773 中，@danielhanchen 在 Vulkan 和 ROCm 上保持 sd.cpp 直接转换关闭
* Studio NVFP4：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13804 中为 torchao 的 to_nvfp4 提供的一次激活量化器
* 工作室扩散：学习激活峰值、组卸载设置中的 OOM 重试、固定 GGUF 主机副本、@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13724 中的捆绑权重组
* Studio：添加一个选择加入设置开关，以隐藏 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13814 中不适合的模型
* Studio：当浏览器面板页面需要系统浏览器时由@NilayYadav in https://github.com/unslothai/unsloth/pull/13761说
* 阅读 https://github.com/unslothai/unsloth/pull/13836 中 @danielhanchen 的门控 invoke_handler 闭包内的 Tauri 命令列表
* Studio：在 https://github.com/unslothai/unsloth/pull/13762 中的 @NilayYadav 在浏览器面板中跨页面保留站点设置
* Studio：在https://github.com/unslothai/unsloth/pull/13764中@Etherll按每个型号的推荐值启动audio.cpp选项
*允许https://github.com/unslothai/unsloth/pull/13805中的@danielhanchen在FastLanguageModel中的modules_to_save中使用规范层
* Studio：通过@NilayYadav在https://github.com/unslothai/unsloth/pull/13756中通过外部连接生成图像
* Studio：Hub Run 拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13812 中音频和聊天都无法运行的音频模型
* Studio：接受 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13839 中的 Parquet 文件作为本地数据配方种子
* Studio 桌面：选择 Unsloth 在 Windows 上的安装位置（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13446 中）
* Studio Hub：https://github.com/unslothai/unsloth/pull/13749 中 @shimmyshimmer 提供的一个过滤器弹出窗口，用于显示功能、大小、上下文和上传者、作曲家风格的菜单
* 修剪 https://github.com/unslothai/unsloth/pull/13844 中 @danielhanchen 测试中的评论
* AsyncGRPOTrainer：https://github.com/unslothai/unsloth/pull/13820 中@danielhanchen 可选的 SAO 风格重要性采样掩码
* Studio：通过 https://github.com/unslothai/unsloth/pull/13782 中的 @NilayYadav 通过 Ctrl+C 阻止 llama-server 在 macOS 上崩溃
* Studio：在 https://github.com/unslothai/unsloth/pull/13816 中 @danielhanchen 训练预标记化数据集（input_ids/attention_mask/labels）
* Studio：保持 Mac LoRA 的聊天模板在 https://github.com/unslothai/unsloth/pull/13826 中 @danielhanchen 的多模态基础模型上进行训练
* 修复 https://github.com/unslothai/unsloth/pull/13770 中 @take-lying-flat 打包前 bfd_split 截断溢出的问题
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13361 中为兼容 OpenAI 的 API 提供的模型别名
* Studio：Apple Silicon 上通过 Metal int8 内核实现的仅 int8 权重转换器量化，作者为 https://github.com/unslothai/unsloth/pull/13344 中的 @danielhanchen
* Studio：停止将 GGUF 借用的文本编码器和 VAE 列为 https://github.com/unslothai/unsloth/pull/13778 中 @LeoBorcherding 的选择器中的模型
* Studio：在 https://github.com/unslothai/unsloth/pull/13481 中 @NilayYadav 在连接模型上运行编码代理
* 工作室配方：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13845 中将已完成运行的泵关闭到下一次运行
* unsloth 运行：在 https://github.com/unslothai/unsloth/pull/13838 中添加 --engine-parallelism 和 --gpus 以用于 @danielhanchen 的多 GPU 服务
* 由 @heychaeyin 在 https://github.com/unslothai/unsloth/pull/13813 中以两个并行组运行 Linux 前端浏览器检查
* Studio：以每个模型在https://github.com/unslothai/unsloth/pull/13791中由@Etherll读取的形式发送audio.cpp请求字段
* 通过 https://github.com/unslothai/unsloth/pull/13780 中的 @take-lying-flat 修复 DiffusionGemma 采样前缀缓存保留
* Studio：在 https://github.com/unslothai/unsloth/pull/13842 中接受 @danielhanchen 的 x-api-key 标头中的 sk-unsloth API 密钥
* Studio：让 Orpheus TTS 在 https://github.com/unslothai/unsloth/pull/13853 中选择@danielhanchen 的内置声音之一
* 通过https://github.com/unslothai/unsloth/pull/13751中的@vineethsaivs将layers_pattern从FastLanguageModel.get_peft_model传递到LoraConfig
* 在https://github.com/unslothai/unsloth/pull/13849中通过@danielhanchen加载没有unsloth_zoo的包初始化的zoo Hub下载帮助程序
* 修复 SDAR 空掩码重采样以匹配 https://github.com/unslothai/unsloth/pull/13771 中@take-lying-flat 的参考
* 将 dtype 选项添加到 save_pretrained_merged，用于 https://github.com/unslothai/unsloth/pull/13823 中的 @danielhanchen 的 float32 合并
* fast_inference：Gemma 4 Unified、Muse Glimmer、密集 Gemma 4；当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13825 中没有 -bnb-4bit 存储库时，4 位回退
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13819 中对非 PEFT 模型进行 16 位保存时，将仅包含 fp32 的张量（MoE 路由器偏差）保留在 fp32 中
* MLX 存根：在 https://github.com/unslothai/unsloth/pull/13863 中回答@danielhanchen 动物园的 fused_verify_attention
* Studio Desktop：打开操作系统文件夹对话框，在 https://github.com/unslothai/unsloth/pull/13843 中添加 @danielhanchen 的模型文件夹
* 工作室：由 @Lyxot 在 https://github.com/unslothai/unsloth/pull/13796 中提供来自 MLX 模型的 /v1/ 完成
* 预构建的 CUDA 轮子：在 https://github.com/unslothai/unsloth/pull/13854 中压缩 @danielhanchen 的 fatbins (flash-attn 1.49 GB -> ~285 MB)
* 内核：明确请求enable_fp_fusion=True，领先于 https://github.com/unslothai/unsloth/pull/13828 中 @danielhanchen 的 Triton 3.9 默认值 False
* 桌面：https://github.com/unslothai/unsloth/pull/13523 中的 @danielhanchen 在 UAC 提示之前解释 Windows 长路径
* Studio：仅当模型需要 @danielhanchen 的 https://github.com/unslothai/unsloth/pull/13861 时才安装 causal-conv1d 和 mamba-ssm
* 将 UnlimitedOcrTextModel 添加到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13867 中的融合 MoE 转换快照中
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13719 中微调和导出原生 MTP 头和 DSpark 绘图器
* 修复（studio）：在请求时显示下载开始，并通过 @Sneakr 在 https://github.com/unslothai/unsloth/pull/13738 中
* fast_inference：在 https://github.com/unslothai/unsloth/pull/13864 中 @danielhanchen 在低于 sm80 的 GPU 上将 Gemma 4 切换为 Unsloth 推理
* Studio：图像下载上的信息标记、各种格式的配方、https://github.com/unslothai/unsloth/pull/13444 中 @danielhanchen 的图像加载设置
* 由 @TarzanZhao 在 https://github.com/unslothai/unsloth/pull/10744 中将每个变压器块编译为每个 FastModel 模型（LoRA 和 QLoRA）的一个区域
* 通过https://github.com/unslothai/unsloth/pull/13887中的@danielhanchen将tests/test_triton_fp_fusion.py格式化回钩子的固定点
* Studio：在 https://github.com/unslothai/unsloth/pull/13794 中通过 @Lyxot 流式传输来自 MLX 和其他进程内模型的 /v1/ 响应
* Studio Hub：推荐列出仅过去 30 个赞的 safetensors 存储库，始终在 https://github.com/unslothai/unsloth/pull/13886 中的 @shimmyshimmer 的 Discover 上打开
* Docker ROCm Studio 映像：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13852 中通过 Vulkan 在 GPU 上运行 GGUF 聊天
* NF4 GEMV：将 K 个掩码放在偶数 K 上，并从 https://github.com/unslothai/unsloth/pull/13829 中的 @danielhanchen 的寄存器中收集 NF4 表
* FP8 行向 GEMV：int64 行偏移过去 2^31 个元素，并在 Blackwell 上跳过它，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13830 中使用 Triton 3.3
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13893 中使用 evict_first 流式传输分块交叉熵前向 logits
* Studio：通过 @Lyxot 在 https://github.com/unslothai/unsloth/pull/13795 中提供来自 MLX 和其他进程内模型的 /v1/messages 和 count_tokens
* MoE 分组 GEMM：用于 dX 专家循环的 tl.range，通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13831 中删除死的 dW FLATTEN
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13889 中的 triton_launch 启动 eager RMSNorm 和 LayerNorm 内核
* Studio Hub：在 https://github.com/unslothai/unsloth/pull/13896 中 @shimmyshimmer 重新上传的每个 Unsloth Muse 上显示 Meta 徽标
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13827 中修复 FSDP2 下 FastLanguageModel 融合 CE 损失与解开的 lm_head
* Studio：Windows torch 2.12 内核来自 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13808 中预构建的轮子
* Studio：通过微调训练推测性解码起草器，并将其导出为 llama.cpp 和 vLLM（由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13806 中）
* 前端 CI：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13894 中的第二个取消信号保留分组的浏览器日志
* Studio：在 https://github.com/unslothai/unsloth/pull/13899 中支持 NVIDIA Nemotron 3.5 Bolt 和 @danielhanchen 的 Super GGUF
* MoE LoRA：在 https://github.com/unslothai/unsloth/pull/13851 中 @danielhanchen 为 Transformers 4.x 上的显式 target_modules 列表保留本机每专家线性
* Studio：让运行设置在 https://github.com/unslothai/unsloth/pull/13841 中加载 @danielhanchen 的 16 位 Hugging Face 模型
* Studio：支持 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13903 中的 Muse Spark Open GGUF
* 在 https://github.com/unslothai/unsloth/pull/13846 中 @danielhanchen 的 #13724、#13749 和 #13828 之后修复 main 的红色后端 CI、repo 和 picker 合约测试
* 修复了 #13806、#13899 后的主红色 CI 以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13909 中最近的格式化程序漂移

## 新贡献者
* @YashwanthNomula 在 https://github.com/unslothai/unsloth/pull/12647 中做出了第一个贡献
* @sahacha 在 https://github.com/unslothai/unsloth/pull/13606 中做出了第一个贡献
* @YogeshSeeni 在 https://github.com/unslothai/unsloth/pull/13783 中做出了第一个贡献
* @heychaeyin 在 https://github.com/unslothai/unsloth/pull/13813 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.907-beta...v0.1.908-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.908-beta` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
