---
title: "unsloth v0.1.907-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.907-beta"
version: "v0.1.907-beta"
published: "2026-10-13"
type: "pre"
lang: "zh"
---

# unsloth v0.1.907-beta

Unsloth 的性能得到了重大升级！

## 亮点

- **性能大幅提升**：所有 Unsloth UI/UX 速度更快 - 多个聊天最高可达 10 倍
- **推理速度提高 5 倍**：缓存命中率达到 95%、MoE Strata 风格修复、速度降低修复
- **更好的压缩** - 适用于所有 API + 更好的 UI 处理
- **拖放文件**：桌面再次支持超过 3 倍的受支持文件
- **浏览器与脚本一起使用**：click，移动鼠标，拖动，运行批准的脚本并设置每个站点的浏览器规则。
- **LTX-2.5 + Wan2.2 + 更快的图像 LoRA 训练**：新的视频生成、图像到视频和更快的图像训练。
- **NVIDIA RTX Spark**：现在我们的 Windows ARM64 可下载支持
- **主要 Unsloth 工作流程升级**：改进的文件、聊天历史记录、浏览器代理和文档处理。
- **改进了硬件兼容性**：Windows AMD、Intel XPU 和 CUDA/PyTorch 修复。
- **更快的图像 LoRA 训练**，具有方面存储桶、融合 AdamW 和改进的 FP8/MXFP8 支持。

## 性能

- 大型聊天和训练历史记录以较小的批次加载，使用较少的启动数据和内存。
- 在长 GGUF 聊天中，后续回复会更快开始，包括与许多工具调用的对话。
- 当内存允许时，LTX-2.5 一代在默认两级设置下运行速度更快。
- Qwen3.5、Qwen3.6 和 Qwen3.8 通过 MLX 获得更快的预填充和推测解码。

## 浏览器使用

- 模型可以在某个点上移动鼠标并拖动页面元素，包括画布等未标记的目标。
- 每次在经过您批准的页面上运行脚本，或者在“设置”>“浏览器”中将“运行脚本”设置为“从不”。
- 为未标记的 click 设置每个站点的规则，包括始终允许您 trust 的站点。
- 更好地处理压缩页面、client 侧导航和 Web UI 中的延迟内容。模型还可以填充日期和时间字段。
- 在表单中按 Enter 获得与 clicking 提交按钮相同的批准检查。

## 图片+视频

- 使用 LTX-2.5 从文本或起始图像生成视频，并带有同步音频。 [GGUF](https://huggingface.co/unsloth/LTX-2.5-GGUF)
- 添加带有 Wan2.2-TI2V-5B、LTX-2 或 LTX-2.3 的开始帧，以在同一加载模型上制作图像动画。
- 在“图像”页面上选择 SDXL 采样器和计划，并正确加载 v 预测检查点。
- 在生成之前裁剪图像输入。大照片上传和普通视频帧上传会自动调整大小。

## 培训

- 图像 LoRA 训练默认在 NVIDIA GPU 上使用融合 AdamW，并为新支持的运行提供长宽比桶。
- FLUX 和 Z-Image 的 FP8 LoRA 训练在 NVIDIA Ada、Hopper 和 Blackwell GPU 上使用更少的内存。 MXFP8 使用兼容的 torchao 堆栈处理 Blackwell 上的方面桶。
- 在“训练”选项卡上设置“样本间隔”，以在支持的图像训练期间和运行历史记录中查看预览图像。
- 在图像训练选项卡上设置字幕丢失、LoRA 丢失和检查点保留。现在可以选择随机翻转。
- 使用 Transformers 5 和 GPTQModel 通过 LoRA 微调 AWQ 模型，并将 INT4 QAT 模型导出为量化权重。

## 聊天 + 桌面

- 再次将文件拖入桌面聊天，包括更多 Office 文档、模板、EPUB、README 文件、点文件和媒体。
- 在 Web UI 中上传支持的 PDF 和 Office 文档，最大可达 200 MB。
- 链接文件夹遵循常见的 `.gitignore` 规则。从浏览器将文件夹上传到项目源，重试失败的上传并打开已完成的源。
- 键入 `/rewind`，或从消息的“更多”菜单中选择“快退”，以恢复对话、聊天文件夹中的跟踪文件或两者。预览更改并撤消恢复。
- 在保存的 GGUF 或 MLX 聊天中使用 `/compact`，支持工具压缩下一条消息的上下文。内联分隔线标志着压实。
- 从工具结果下载模型创建的文件，并在后台回复完成时启用通知。

## 模型+设置

- 在 VS Code Copilot 与 `unsloth start vscode` 聊天中使用本地模型。
- 编码代理可以使用 Unsloth over MCP 和帐户 API 密钥来加载模型、生成、训练和导出。
- 选择模型下载文件夹，然后从 LM Studio、Ollama 和您自己的文件夹中显示或删除列出的模型。

## 硬件兼容性

- 修复 Windows AMD 系统上的 PyTorch/Triton 启动错误。
- 英特尔 XPU 在支持的 Arc 和数据中心 GPU 上识别本机 BF16，无需 intel-ocloc，并改进了单块 Linux 主机上的 GPU 选择。
- 在 CUDA 系统上切换 Python 版本后，避免出现过时的 Triton 启动器错误。
- 改进了低 VRAM Gemma 4 E2B 加载，包括 Windows 和 WSL 上的主机内存卸载。

## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/13433 中的 @shimmyshimmer 中的 unsloth>=2026.10.4
* 关键 triton < 3.4 驱动程序模块缓存由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13409 中的 Python 版本
* Studio：链接文件夹遵循 .gitignore，在浏览器中上传文件夹，排队删除并重试 https://github.com/unslothai/unsloth/pull/13224 中的 @shimmyshimmer 失败的源
* Studio：Wan2.2-TI2V-5B 和 LTX-2 / LTX-2.3 的图像到视频，作者：https://github.com/unslothai/unsloth/pull/13378 中的 @danielhanchen
*修复（工作室）：在https://github.com/unslothai/unsloth/pull/13437中保留@Sneakr附近的聊天搜索位置
* Studio：拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13423 中选择的文本编码器 GGUF 作为图像或视频模型
* Studio：在 https://github.com/unslothai/unsloth/pull/13416 中@danielhanchen 的 MLX 回复中将表情符号分成不同的标记
* Studio：当缓存的快照没有 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13412 中的标记器文件时，从 Hub 重试
* Unsloth Studio (AMD/Windows)：在 Triton 之前导入 PyTorch 以避免 https://github.com/unslothai/unsloth/pull/10932 中 @boobcactus 出现 WinError 126
* Studio：在https://github.com/unslothai/unsloth/pull/13422中@danielhanchen的GET /v1/models中列出多量化GGUF的每个磁盘上量化
* Studio：当一个 GPU 无法容纳 https://github.com/unslothai/unsloth/pull/13291 中的 @danielhanchen 时，将 DiffusionGemma 拆分到多个 GPU 上
* 测试：赶上 https://github.com/unslothai/unsloth/pull/13445 中@danielhanchen 在主屏幕上出现红色的四项产品更改
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/13219 中 @Imagineer99 一致地显示跨媒体路由的排队下载
* 在 https://github.com/unslothai/unsloth/pull/13408 中 @danielhanchen 的批处理左填充生成防护中接受 bf16 平局翻转
* 修复：https://github.com/unslothai/unsloth/pull/10712 中的 @MrCapricornLiu 向后重塑融合 LoRA 中的非连续梯度
* test_trl_cap_sites：unsloth_zoo 2026.10.4 承认 trl 1.15.0，结束 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13449 的延期
* Studio：让 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13424 中保持 Spark-TTS LoRA 检查点可导出
* 将 uv、其缓存和 uv 管理的 Python 保留在 https://github.com/unslothai/unsloth/pull/13373 中 @danielhanchen 的自定义 UNSLOTH_STUDIO_HOME 中
* Studio：浏览器使用 https://github.com/unslothai/unsloth/pull/13429 中 @danielhanchen 的后续操作（安全张量微调、日期字段、禁用下拉菜单、移动页面）
* 在 https://github.com/unslothai/unsloth/pull/13406 中 @danielhanchen 的 FastModel 上的 for_inference() 后保留用户的 UNSLOTH_RETURN_LOGITS=1
* Codex 设备轮询测试：仅在 https://github.com/unslothai/unsloth/pull/13457 中的@danielhanchen 测试自己的线程上伪造 asyncio.sleep
* 格式化两个测试文件，#13378 和 #13437 在 https://github.com/unslothai/unsloth/pull/13462 中由 @danielhanchen 留下格式化程序的定点
* Studio：在 https://github.com/unslothai/unsloth/pull/13463 中的 @danielhanchen 的视频页面上运行 LTX-2.5
* 经过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13472 中审查后，将 unsloth-zoo 2026.10.4 和 trl 1.15.0 的结果作为基线
* 工作室：恢复 @mahiatlinux 在 https://github.com/unslothai/unsloth/pull/13387 中的文件删除和作曲家拖动反馈
* Studio：在 https://github.com/unslothai/unsloth/pull/13495 中通过 @shimmyshimmer 将注释按钮的图标光学居中
* 修复 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13496 中留下的三个后端 CI 红色 LTX-2.5
* Studio：通过 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/10693 中打开 WebUI llama.cpp 驻留和显式加载/卸载 (#10610)
* 工作室：https://github.com/unslothai/unsloth/pull/13503 中的@shimmyshimmer 在聊天窗格变窄时保持开放的思维尺寸
* Studio：https://github.com/unslothai/unsloth/pull/13504 中@shimmyshimmer 将听写麦克风向下推 1 像素，而不是 2 像素
* Studio：更大的浏览器使用图标、更大的空间和 https://github.com/unslothai/unsloth/pull/13506 中 @shimmyshimmer 的“设置”中更短的描述
* 测试：在 https://github.com/unslothai/unsloth/pull/13494 中为 @danielhanchen 的 torch 为每个 xdist 工作人员提供一个 CPU 共享
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13508 中缩小共享多级层中的 LTX-2.5 两级速度差距
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13512 中更新 README.md
* Studio：clip 在分割手柄处的浏览器页面，同时通过 https://github.com/unslothai/unsloth/pull/13492 中的@shimmyshimmer 将其拖动得更小
* Studio：作曲家接受 https://github.com/unslothai/unsloth/pull/13426 中 @shimmyshimmer 解析的所有文档类型聊天
* 工作室：https://github.com/unslothai/unsloth/pull/13509 中 @shimmyshimmer 的更强光模式图书卡悬停、居中时间药丸
* Studio：作曲家采用 https://github.com/unslothai/unsloth/pull/13493 中 @shimmyshimmer 的自述文件、点文件、Office 模板和更多媒体
* Studio：LTX-2.5 VAE 夹具、目录行和视频页面默认值由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13500 中设置
* 通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/13488 中的 docker/run.sh 使 UNSLOTH_STUDIO_KEEP_LEGACY=0 工作
* Studio：将 --models-dir 添加到 unsloth studio 以获取 https://github.com/unslothai/unsloth/pull/13435 中 @danielhanchen 的本地模型文件夹
* Studio：种子 LTX-2.5 fp8 / int8 从 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13516 中托管的预量化 DiT 加载
* Studio：在将文件链接到 https://github.com/unslothai/unsloth/pull/13513 中的 @danielhanchen 的工具工作区时，切勿遵循符号链接
* 工作室：暗淡选定的借书卡，稍微收紧卡角，@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13518 中
* Studio：提供 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13448 中创建的 edit_file 文件的下载
* Studio：https://github.com/unslothai/unsloth/pull/13520 中@danielhanchen 的图像和视频加载路径共享的扩散自动优化器核心
* Studio：仅在https://github.com/unslothai/unsloth/pull/13491中@shimmyshimmer在图书馆的聊天菜单中重新生成标题
* 添加unsloth启动vscode：将提供的模型放入https://github.com/unslothai/unsloth/pull/13439中@danielhanchen的VS Code的Copilot Chat模型选择器中
* Studio：通过 https://github.com/unslothai/unsloth/pull/13502 中的@oobabooga 使用内联分隔符标记聊天的压缩位置
* Studio：通过 https://github.com/unslothai/unsloth/pull/13447 中的 @danielhanchen 从您自己的证书（--ssl-certfile / --ssl-keyfile）提供 HTTPS
* Studio：在 https://github.com/unslothai/unsloth/pull/13497 中的@oobabooga 的一张卡上显示待处理的 llama.cpp、whisper.cpp 和 audio.cpp 更新
* Studio：从 https://github.com/unslothai/unsloth/pull/13441 中的 @danielhanchen 的“源”选项卡中打开项目源
* Studio：扩散 flow_shift 是有效偏移，并且 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13215 中将 min-SNR 记录为未用于流匹配运行
* Studio：随机翻转选择加入，加上检查点保留、字幕丢失、LoRA 丢失以及 https://github.com/unslothai/unsloth/pull/13210 中@danielhanchen 图像训练选项卡上的时间步长偏移
* Studio：缩放 fp16 中的 SDXL 损失，并让图像 LoRA 训练远离 https://github.com/unslothai/unsloth/pull/13278 中 @danielhanchen 无法使用的设备
* 工作室：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13218 中训练具有纵横比桶的 LoRA 图像
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13526 中格式化扩散自动优化器和 LTX-2.5 预量化文件
* 当 from_pretrained 在 https://github.com/unslothai/unsloth/pull/13486 中通过 @NilayYadav 获得令牌时，保留保存的拥抱脸登录信息
* test_packing_sdpa：采用 https://github.com/unslothai/unsloth/pull/13434 中 @danielhanchen 读取标签的丢失路径
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13220 中进行图像 LoRA 训练期间的示例图像
* 在 https://github.com/unslothai/unsloth/pull/13417 中关闭 @danielhanchen 的 float16 负载上的 Granite 3.0-3.2 注意力丢失
* 工作室：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13233 中训练 Z-Image LoRA 的注意力和前馈
* Studio 安装程序（AMD、Linux）：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13419 中读取拱门时，没有适用于 RDNA 1 / Polaris 的通用 ROCm 手电筒
* Studio：在 https://github.com/unslothai/unsloth/pull/13507 中通过 @shimmyshimmer 显示和删除 LM Studio、Ollama、自定义文件夹和其他本地模型
* 在https://github.com/unslothai/unsloth/pull/13533中@danielhanchen合并图书馆和作曲家后重新衡量工作室启动预算
* 工作室：每个家庭的扩散表由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13536 移入家庭登记处
* Studio：在 https://github.com/unslothai/unsloth/pull/13534 中由 @danielhanchen 在事件循环中运行关闭清理
* 使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13413 中的 save_pretrained_torchao 将 int4 QAT LoRA 模型保存为真正的 int4
* Studio (AMD iGPU)：通过 https://github.com/unslothai/unsloth/pull/13421 中的 @danielhanchen 将 iGPU 行的总数拆分为 VRAM 和共享内存
* 修复 https://github.com/unslothai/unsloth/pull/13543 中的 @danielhanchen 在 main 上留下红色的 exec-literal、编码和格式化门
* Studio：使用 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13443 中在 Apple Silicon 上下载的 MLX 语音转文本模型进行转录
* Studio：在 https://github.com/unslothai/unsloth/pull/13525 中@oobabooga 在 8192 处设置 Qwen3.8 NPU 上下文
* Studio：XPU 原生 bf16 不再依赖 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13527 中的 intel-ocloc
* Studio：在 https://github.com/unslothai/unsloth/pull/13402 中将作曲家的代码切换重命名为 @shimmyshimmer 的工具
* Studio：圆角矩形悬停在 https://github.com/unslothai/unsloth/pull/13546 中@shimmyshimmer 的标题模型选择器上
* Studio：让模型在 https://github.com/unslothai/unsloth/pull/13555 中通过@shimmyshimmer 在设置的上下文中重新加载 Auto
* Studio：按照https://github.com/unslothai/unsloth/pull/13528中@danielhanchen的零级方式阅读ZE_AFFINITY_MASK
* unsloth start opencode：检测由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13550 中以普通 opencode 形式安装的 OpenCode V2
* Studio：大小音乐等待 Metal 和 Vulkan，而不仅仅是 https://github.com/unslothai/unsloth/pull/13551 中 @danielhanchen 的 CPU
* 在 https://github.com/unslothai/unsloth/pull/13389 中 @danielhanchen 在非分页优化器步骤中跳过 bitsandbytes 的每参数设备同步
* Studio：https://github.com/unslothai/unsloth/pull/13540 中 @danielhanchen 在单块 Intel 主机上的显式 XPU GPU id
* Studio：在 @oobabooga 在 https://github.com/unslothai/unsloth/pull/13524 中首次聊天访问时保持 Hub Run 设置打开
* Studio：在 vLLM 上运行 AutoRound 检查点，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13405 中整理引擎对话框
* 修复（studio）：通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/13530 中处理 Windows 上无害的 Node helper stderr
* Studio：更快的图像 LoRA 训练（融合 AdamW，编译 nf4 基础），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13236 中进行
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13535 中选择 LoftQ 变体时运行 LoftQ
* 在 https://github.com/unslothai/unsloth/pull/13552 中 @danielhanchen 修复了低等级的 int8-int4 QAT LoRA 和捆绑嵌入模型
* Studio：跳过 DFlash 绘图器，在 https://github.com/unslothai/unsloth/pull/13553 中 @danielhanchen 的 Auto 下图像会损坏
* Studio：停止 LTX-2 加载导致 Windows 崩溃的 32 GB 计算机上的访问冲突，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/13432
* Studio：https://github.com/unslothai/unsloth/pull/13522 中 @danielhanchen 的每个聊天文件历史记录和 /rewind
* Studio：浏览器代理可以在 cli 中的某个点上进行定位、移动鼠标、拖动并运行 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13505 中批准的脚本
* Studio：将 VS Code 和 Pi 列为编码代理，并通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13547 中重新排序代理选择器
* Studio：在https://github.com/unslothai/unsloth/pull/13574中由@shimmyshimmer在聊天标题菜单中重新生成标题
* Studio：https://github.com/unslothai/unsloth/pull/13575 中 @shimmyshimmer 在重命名聊天对话框中重命名侧边栏聊天
* Studio：翻译 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13549 中每个语言环境中的聊天欢迎问候语
* Studio：运行脚本设置和每个站点的浏览器代理的未标记 clicks 规则，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13529 中
* Studio：fp8 / mxfp8 图像 LoRA 在各个方面进行训练，mxfp8 用于偏置线性，fp8 sm89 地板由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13317
* 在 https://github.com/unslothai/unsloth/pull/13586 中 @danielhanchen 合并文件历史记录和代理后重新测量 Studio 启动预算
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13554 中在后台完成聊天回复时可选的通知
* 预构建的 CUDA 轮子：https://github.com/unslothai/unsloth/pull/13563 中 @danielhanchen 用于 Windows x64 的火炬 2.11
* Studio：修复压缩页面、路由器路径和浏览器面板中的早期空读取，作者为 https://github.com/unslothai/unsloth/pull/13532 中的 @oobabooga
* Studio：弹出窗口暗淡无模糊，有淡淡的阴影；通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13577 中设置更深一步
* 在 UNSLOTH_FLASH_ATTENTION_IMPL=auto 下，将手电筒的捆绑闪光灯保留在 Hopper 上（https://github.com/unslothai/unsloth/pull/13544 中 @danielhanchen 的窄型号）
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13585 中的每步 loss-kwargs 遍历中解析每个前向一次
* perf(studio)：在 https://github.com/unslothai/unsloth/pull/13404 中的 @Lyxot 在 Unsloth Studio 自己的 MLX 路径上输入 Zoo 的精确验证、NAX 和打包门控增量范围
* 将 Gemma 4 E2B 安装在 Windows 上的 8 GB 卡上以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13425 中的 Studio 聊天中
* 让 AWQ 检查站通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13584 中的 LoRA 进行训练
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13567 中将 str target_modules（正则表达式或“全线性”）传递给 Llama 路径上的 PEFT
* 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13580 中修补 TRL 的服务教师、GOLD 和 SDFT 蒸馏培训师
* Studio：缩小上传的超大图像，并在 https://github.com/unslothai/unsloth/pull/13561 中由 @danielhanchen 添加裁剪到图像输入
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13578 中的快速推理中运行非 LoRA PEFT 适配器
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13582 中使weights_at_root 调用站点和扩散自动选择奇偶校验测试主机独立
* studiobench UI 奇偶校验：报告 PR 声明的 UI 更改，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13583 中失败
* Studio 设置：在https://github.com/unslothai/unsloth/pull/13442 中@danielhanchen 在源安装（setup.sh 和setup.ps1）的后台构建前端
* Studio：加载侧边栏聊天、项目和培训，由 https://github.com/unslothai/unsloth/pull/13420 中的 @danielhanchen 从服务器一次运行 20 个
* 修复 https://github.com/unslothai/unsloth/pull/13471 中 @Imagineer99 的 Clef 训练和预测中的图像输入
* Studio：将工具输出长度设置应用于 https://github.com/unslothai/unsloth/pull/13588 中 @danielhanchen 的 MCP 工具结果
* 测试：按照侧边栏重命名对话框，在 https://github.com/unslothai/unsloth/pull/13590 中运行 @danielhanchen 没有扩散器的 H3 编译顺序测试
* Studio：让编码代理在 https://github.com/unslothai/unsloth/pull/13118 中使用 @Etherll 的 API 密钥通过 MCP 使用 Unsloth Studio
* Studio：在“图像”页面上选择采样器，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13569 中正确加载 v-prediction SDXL 检查点
* Studio：在https://github.com/unslothai/unsloth/pull/13557中添加@danielhanchen模型下载的下载文件夹
* Studio：保持 Transcribe 加载状态和 Eject 与 https://github.com/unslothai/unsloth/pull/13514 中的 @Etherll 的 sidecar 同步
* Studio：修复 Spark-TTS 训练在 None/config.yaml（BiCodec 存储库根未设置）上失败的问题，作者为 https://github.com/unslothai/unsloth/pull/13465 中的 @carlitogwapi
* Studio：添加 /compact 并在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13562 发生的地方绘制压缩
* Studio：在 https://github.com/unslothai/unsloth/pull/13456 中 @danielhanchen 的长工具聊天和后续回合中保留提示缓存
* 将 Mistral Small 3.2 工具定义保留在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13597 中的训练行中
* Studio：来自 safetensors 标头的视频组件大小，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/13537 中测量每个视频系列的峰值
* Studio：修复了https://github.com/unslothai/unsloth/pull/13515中@Etherll的audio.cpp部分下载、对齐器进度、CPU回退问题
* Studio：加载后浏览器代理页面的读取速度更快，并且 https://github.com/unslothai/unsloth/pull/13602 中的 @danielhanchen 的拖动更精简
* Studio：修剪 https://github.com/unslothai/unsloth/pull/13610 中 @danielhanchen 的视频标题大小代码中的注释
* Studio：可选图表视图，带有标签轴，用于 https://github.com/unslothai/unsloth/pull/13558 中@danielhanchen 的每周和累计代币活动
* Studio：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13531 中进行渲染之前，将 MiniMax-H3 GGUF 安装到 Vulkan 主机的 GTT 池中
* 工作室：LTX-2.5 GGUF Quants (unsloth/LTX-2.5-GGUF) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13573
* FastSentenceTransformer：在https://github.com/unslothai/unsloth/pull/13591中重用@danielhanchen为Transformer子类模块加载的模型
* Studio：按https://github.com/unslothai/unsloth/pull/13519中@Etherll的文件夹列出、显示和删除audio.cpp伞模型
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13612 中修复主要的扩散调度程序、奇偶校验、格式化程序和捆绑红色
* 工作室：在 https://github.com/unslothai/unsloth/pull/13455 中 @danielhanchen 的 MTP 起草者之前自动丢弃服务位置
* 测试：通过 https://github.com/unslothai/unsloth/pull/13617 中的@danielhanchen 解析restoreSettings 沙箱中的每个闭包名称
* Studio：内联消息操作，https://github.com/unslothai/unsloth/pull/13615 中 @shimmyshimmer 的匹配响应编辑器
* Studio：将思维痕迹与答案分开，并通过 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/13545 中提供工具行类型图标
* Studio：修复https://github.com/unslothai/unsloth/pull/13517中@Etherll的音频模型选择器列表、标签和搜索
* 工作室测试：恢复存根、标题栏背景，并在 https://github.com/unslothai/unsloth/pull/13608 中使用 @danielhanchen 的扩散器运行自动优化奇偶校验装置
* Studio：仅在缓存测量速度更快的情况下发出 --moe-cache-mib auto，对 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/13600 中的溢出微批次进行定价

## 新贡献者
* @boobcactus 在 https://github.com/unslothai/unsloth/pull/10932 中做出了第一个贡献
* @carlitogwapito 在 https://github.com/unslothai/unsloth/pull/13465 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.906-beta...v0.1.907-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.907-beta` · 📅 发布：2026-10-13 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.907-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
