---
title: "unsloth v0.1.914-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.914-beta"
version: "v0.1.914-beta"
published: "2026-11-03"
type: "pre"
lang: "zh"
---

# unsloth v0.1.914-beta

Unsloth 现在拥有 Glass 主题以及更多用于背景、问候语和聊天的自定义选项。此版本还带来了 Unsloth 中更快的生成、更多的多 GPU 训练选项和 CPU 训练。

<img width="800" alt="unsloth 玻璃主题" src="https://github.com/user-attachments/assets/bc38677f-9e49-4b46-b0ac-f16522541a57" />


## 亮点

- **新 Glass 主题** 有 5 个主题、透明度 + 原生 macOS glass
- **自定义**，带有自定义问候语、背景控件和代码字体
- **DeepSeek-V4.1 512K 上下文** 基准测试显示 Unsloth 的 GGUF 在 Terminal Bench、DeepSWE 和 AutomationBench 中排名最强。 [分析](https://unsloth.ai/docs/models/deepseek-v4.1-flash)
- **聊天导航**可预览、添加书签以及在较早回合之间跳转
- **CPU 文本训练** 直接来自训练页面

## 让它成为你的

- 从五种玻璃样式中进行选择，具有可调节的强度和可选的玻璃菜单，带或不带背景图像。
- Mac 上的 Unsloth Desktop 支持原生玻璃，让您的桌面透过窗口显示。
- 调整背景大小和位置，并选择它在聊天中的显示位置。
- 使用文本、图标或图像添加您自己的问候语，或完全隐藏它。
- 通过实时预览自定义代码字体、行号、自动换行和连字。
- 全年使用“Trick or Treat”主题，无需季节性附加内容。

## 聊天

- 使用新的聊天导航器预览较早的消息、添加书签并跳过长对话。
- 将格式化内容粘贴为 Markdown，包括链接、列表和电子表格。
- 阿拉伯语、波斯语、希伯来语和乌尔都语消息从右向左显示，而代码保持其原始方向。
- 长聊天保持更灵敏，同时回复流和您滚动。
- 服务器重新启动后，MCP 连接恢复。
- 编码代理可以遵循项目工作文件夹中文件的说明。

## 表演和媒体

- 支持的单 GPU Llama 和 Qwen3 模型在具有 Linux 或 WSL 的 NVIDIA GPU 上的 Unsloth 变形金刚后端中生成速度更快。在我们的 A100 测试中，4 位 Qwen3-8B 达到了 99.1 代币/秒，比 25.7 提高了 3.9 倍。
- SDXL 现在可在 4 GiB VRAM 预算下进行渲染，并在 T4 和 L4 GPU 上进行测试。
- 使用 RAG 的新索引更快地搜索大型文档集合。
- 更快地将生成的图像保存为 PNG，而无需更改输出。
- 视频模型重用缓存的 INT8 权重以加快重复加载速度。
- Wan2.2 A14B 在为卸载生成构建 INT8 权重时使用较少的系统内存。
- 无需重新加载适配器文件即可调整图像 LoRA 强度。
- 使用audio.cpp 转录长达四个小时的音频，但受上传和存储限制。

## 麦克

- 尝试实验性**快速验证**，以使用支持的 MLX 推测解码模型更快地生成。回复可能略有不同。
- 随着回复的增加，MLX 流处理文本所花费的时间越来越少。
- Unsloth 现在默认使用 Mac 系统字体。

## 培训

- 当没有 GPU 可用时，从“训练”页面微调 CPU 上的文本模型。
- 仅聊天安装可以通过**安装训练**添加CPU训练。
- 在同一数据集中使用音频和图像来微调音频视觉模型，例如 Gemma 3n 和 Gemma 4。
- 通过仅加载每个 GPU 分配的管道层来加载大于单个 GPU 的受支持的非量化模型。
- 使用 `UNSLOTH_PARALLEL` 配置受支持的数据、张量、管道和上下文并行性组合。
- 使用 `unsloth.tile_mlp(model)` 训练期间减少 MLP 激活记忆。
- 通过 CLI 聊天和推理命令将图像发送到视觉模型。

## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/16131 中的 @danielhanchen 的 unsloth>=2026.10.11
* 不要警告TRL上的loss_type =“nll”，其SFTConfig早于https://github.com/unslothai/unsloth/pull/16042中的@debojyoti-dev
* Studio MLX 估计：通过 https://github.com/unslothai/unsloth/pull/15970 中的 @debojyoti-dev 向量化注意力路径询问比块长的缓存
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16126 中未安装扩散器的情况下运行提供的组件双胞胎检查
* 测试：标题栏烟雾将 Vite 过时的预捆绑包 504 视为 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16130 中的重新加载
* Flex 包装器：向主内核发送简短的无梯度查询，其中 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16092 中无法编译 flex_decoding
* Studio Windows AMD：在 https://github.com/unslothai/unsloth/pull/16074 中 @danielhanchen 的依赖堆栈之后将 triton-windows 与 torch 配对
* Studio：当 Windows GPU 负载使系统无法提交 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/16046 时发出警告
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16096 中加载 LFM3 自定义代码模型（通过保存变压器版本进行路由、修复生成、聊天和导出）
* 测试：融合 LoRA TP 奇偶校验在每个张量 fp32 尺度上比较 O 和 dX，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16144 中进行
* Studio：通过 HTTPS 从 ModelScope 下载超过 50GB 的文件 (#15989) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/15994
* 依赖项：在 Windows ARM64 上固定 pymupdf 1.28.2，这是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16160 中唯一带有 win_arm64 轮子的版本
* Studio：MOSS-Image 负分支层跳过遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16127 中每个检查点的参考工作流程
* Studio MLX 估计：mlx 真正持有的价格关注分数，以它持有的宽度由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16021
* Studio：用于巨大 RAG 范围的 HNSW (usearch) 层，与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16145 中的 SQLite 保持一致
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16170 中的跳过菜单线性检查将每个尺寸乘以五中最佳值
* 依赖项：studio extra 带有 userarch，如 https://github.com/unslothai/unsloth/pull/16176 中 @danielhanchen 的 studio.txt
* 工作室图片：SDXL-Turbo 在 https://github.com/unslothai/unsloth/pull/16168 的 @danielhanchen 的原生 512x512 画布上打开
* 平铺 MLP：任何模型的一个标志或一条线，在 https://github.com/unslothai/unsloth/pull/16125 中 @danielhanchen 的新序列平铺引擎上
* 测试：遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16196 中的 #16125 中的平铺 MLP 挂钩（编码、加载器存根、训练器记录器）
* Vision GC 卸载：每个模型都有自己的不可重入卸载器，由 https://github.com/unslothai/unsloth/pull/16194 中的 @danielhanchen 提供
* LoRA：在基本 GEMM 中添加rank-r 术语，这样小的更新就不会被 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16071 中四舍五入
* 测试：将禁用的 4 位融合 LoRA 前向与反量化 + 线性进行比较，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16252 中的 Bitsandbytes 融合 GEMM
* 管道并行：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15655 中的每个 torch.distributed.pipelined 计划（Interleaved1F1B、LoopedBFS、零气泡、ZBV、DualPipeV）
* 为 https://github.com/unslothai/unsloth/pull/16257 中的 @danielhanchen 的 Windows PowerShell 作业启动提供 WMI 截止日期检查空间
* 在 https://github.com/unslothai/unsloth/pull/16256 中 @danielhanchen 在没有 Triton 的主机上运行动态排名 LoRA 编译测试
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16249 中的融合 LoRA 累积来保留张量子类类型
* 管道并行：https://github.com/unslothai/unsloth/pull/15656 中@danielhanchen 的每阶段分片加载（加载大于一个 GPU 的模型）
* 张量并行：支持几个 KV 头、完全微调、仅权重 QAT、eval、MoE 和 dropout，而不是 https://github.com/unslothai/unsloth/pull/15722 中的 @danielhanchen 拒绝
* Studio：MOSS-Image GGUF 路径遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16255 中的每个检查点负分支跳过
* CI：将核心动物园工作上限从 35 分钟提高到 50 分钟，@danielhanchen，https://github.com/unslothai/unsloth/pull/16260
* Studio：只要内存允许，卸载扩散就会在一个批处理调用中运行两个指导分支（https://github.com/unslothai/unsloth/pull/16261 中的 @danielhanchen）
* 扫描基线：重新审查 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16264 中移动的 12 个非树懒动物园站点 2026.10.11
* Studio：从托管 int8 检查点加载的流式 Qwen-Image 获取 int8 文本流并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16275 中进行调制
* Studio：离线扩散加载读取 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16276 中上演的早期在线加载的镜像
* 固定文档上传工具的用户搜索，并通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16284 中保护其仅 CI 的 RAG 导入
* LoRA：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16282 每次调用时决定一次融合顺序
* Studio 视频：缓存驻留的运行时量化 int8 DiT，因此返回负载会跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16291 中的重新量化
* 插槽恢复测试：在 https://github.com/unslothai/unsloth/pull/16305 中 @danielhanchen 调用 save_slots_for_resume 的每个测试中伪造磁盘
* Studio：当整个模块卸载无法适应 https://github.com/unslothai/unsloth/pull/16295 中的 @danielhanchen 时，逐叶流式传输 SDXL UNet
* Studio：当密集负载不适合 https://github.com/unslothai/unsloth/pull/16290 中的 @danielhanchen 主机 RAM 时，为每个分片构建卸载的视频 int8 降噪器
* RAG ANN 测试：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16308 的一个线程上构建召回检查索引
* 工作室扩散：当 https://github.com/unslothai/unsloth/pull/16304 中的 @danielhanchen 适合时，将流式文本编码器保留在小型主机路由上的主机 RAM 中
* 工作室测试：在散文调用摊销测试中计算工作量，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16315 中计时
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/16314 中 @danielhanchen 的融合 ConvRot act quant 和 int8 GEMM 上运行 MiniMax-H3 int8 视频解码器
* Studio：当手电筒没有可用的 Metal 设备时，跳过 MPS 缓存清除，作者：https://github.com/unslothai/unsloth/pull/16326 中的 @danielhanchen
* Studio：SDXL 后台编译仅在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16312 中不运行渲染时运行
* 工作室测试：在 init 收割 @danielhanchen 的 https://github.com/unslothai/unsloth/pull/16328 时，将现有的 Clef 工作人员视为死亡
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/16325 中保留 @danielhanchen 适合主机 RAM 的 MiniMax-H3 流式调节器的份额
* Studio：让 Transcribe 在 https://github.com/unslothai/unsloth/pull/15952 中 @Etherll 的audio.cpp 模型上拍摄更大更长的音频
* 测试：在 https://github.com/unslothai/unsloth/pull/16357 中 @danielhanchen 进行的普通训练器测试中，在拆解之前刷新每个 DDP 等级的结果
* 工作室测试：冻结的后台编译可能会多次解冻，以供 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16364 中进行等待编译
* Studio：在 https://github.com/unslothai/unsloth/pull/16360 中通过 @danielhanchen 将延迟的 SDXL 速度配置文件从渲染线程中预热
* 工作室测试：在没有 bubblewrap 的主机上跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16371 上的真实准备沙盒测试
* 笔记本 CI：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16373 中将 Colab oracle 快照刷新到当前 GPU 运行时
* Kaggle CI：在 Kaggle client 旁边安装六个，并在 https://github.com/unslothai/unsloth/pull/16374 中将导入失败命名为 @danielhanchen 之一
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16179 中为内存数据集运行廉价的数据集格式化映射
* Studio：在 https://github.com/unslothai/unsloth/pull/16205 中 @danielhanchen 的一次性 llama-server 调用中共享环回 SSL 上下文
* Studio：在 https://github.com/unslothai/unsloth/pull/16213 中同步@danielhanchen 的聊天线程时跳过未更改的消息
* Studio：在 https://github.com/unslothai/unsloth/pull/16358 中 @danielhanchen 的日志导出中行走记录偏移量和批处理成员写入
* Studio：列出已保存的声音，并通过一个文件夹查找和一个 sidecar 读取 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16354 中的每个声音
* Studio RAG：编译 docx，运行 XPath 一次，并记住 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16343 中对每个文档的样式列表查找
* Studio：使用 Uint8Array.fromBase64 解码本机附件 base64（如果 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16319 中可用）
* Studio：跳过 pymupdf4llm 在无法容纳内衬表格的 PDF 页面上的表格搜索（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16280 中）
* Studio：跳过无法与 https://github.com/unslothai/unsloth/pull/16356 中 @danielhanchen 的行匹配的日志编辑规则
* Studio RAG：在 https://github.com/unslothai/unsloth/pull/16339 中阅读 @danielhanchen 每个工作簿的每个电子表格数字格式一次
* Studio：在 https://github.com/unslothai/unsloth/pull/16159 中通过 @danielhanchen 流式传输持久聊天事件，无需重新解析存储的有效负载
* Studio：在https://github.com/unslothai/unsloth/pull/16366中的@danielhanchen未更改文件的情况下，在数据集标签列表中重用图像标题尺寸
* Studio：在 https://github.com/unslothai/unsloth/pull/16348 中从右到左显示 @shimmyshimmer 的聊天消息
* Studio：按字符串拆分种子 Hub 文件名，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16352 中编译一次拆分标签匹配器
* Studio：在https://github.com/unslothai/unsloth/pull/16307中@danielhanchen的拖动步骤中保持Recipe Studio节点和边缘不变
* RL：在 https://github.com/unslothai/unsloth/pull/16203 中通过@danielhanchen 读取每个训练器补丁一次的软件包版本
* Studio：通过 https://github.com/unslothai/unsloth/pull/16174 中的 @danielhanchen 在一个工具中将网页图像查找与文本搜索重叠，并独立 URL 读取
* Studio：每次上传时列出一次数据集文件夹，以供 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16353 中进行标题茎检查
* Studio：更新 https://github.com/unslothai/unsloth/pull/16378 中的 @danielhanchen 托管节点（节点：24.22.1 -> 24.22.2）
* Studio Alpaca 格式：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16341 中每批构建一次缺失输入回退
* Studio：在一张解压的零件图上运行 docx 文本重写，而不是在 https://github.com/unslothai/unsloth/pull/16329 中的 @danielhanchen 后重新压缩存档
* MoE：在https://github.com/unslothai/unsloth/pull/15928中@danielhanchen的启发式配置中保留用于float32激活的合适的dW图块
* Studio 图像：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16190 中以字节相同的方式对图库 PNG 进行编码，速度提高约 2 倍
* Studio：仅在目录自己的统计数据可以显示沙箱中的挂载的情况下询问 ismount by @danielhanchen in https://github.com/unslothai/unsloth/pull/16370
* 导入：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16189 中导入 Transformer 和 TRL 时扫描一次已安装的发行版
* SFT：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16293 中证明这一点时，回答 Arrow lengths 的预标记化上限检查
* Studio：仅当答案依赖于https://github.com/unslothai/unsloth/pull/16323中的@danielhanchen时，才在历史列表中读取运行的检查点状态
* Studio 导出：上传重复使用的文件夹的新文件，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16266 中保存模型两次
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16207 中的修剪消息视图构建聊天搜索索引
* Studio：从最后一端恢复 Gemma 身体支架扫描，而不是重新扫描 https://github.com/unslothai/unsloth/pull/16346 中@danielhanchen 的每个标记的开放身体
* Studio：流式传输配方批量合并，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16262 中加载数据帧
* FP8：在火炬 2.14 之前进行 float32 dequant，在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15927 中的不匹配自动转换下没有直接路径
* Lean varlen：询问torch 2.15的后端选择器，而不是https://github.com/unslothai/unsloth/pull/16288中@danielhanchen删除的_can_use_cudnn
* Studio：在 https://github.com/unslothai/unsloth/pull/16306 中的@danielhanchen 工具循环控制器中复制工具模式，无需深度复制
* Studio：背景适合和位置控制、轮廓强度滑块、外观中的作曲家设置、https://github.com/unslothai/unsloth/pull/16287 中的 @shimmyshimmer 的音频和库润色
* Studio：根据 https://github.com/unslothai/unsloth/pull/16320 中的 @danielhanchen 未更改的 trainer_state 缓存检查点损失并扫描事件循环外的检查点
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/16310 中@danielhanchen 无需重新加载适配器文件即可更改 LoRA 权重
* Studio RAG：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16265 中批量计算分块标记
* Studio 模型选择器：在设备上，仅当自己的数据发生更改时，行才会重新渲染（https://github.com/unslothai/unsloth/pull/16316 中的 @danielhanchen）
* 工作室：删除 https://github.com/unslothai/unsloth/pull/16146 中 @danielhanchen 本地模型列表中的重复工作
* 工作室视频：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16324 中按请求解码一次参考音频并更快地阶段 H3 参考帧
* Studio：一旦 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16118 中打开工具标记，就停止重新剥离每个令牌的整个回合
* Studio 导出：将 MLX 合并保存并基本推送到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16278 中重复使用的文件夹中
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16362 中解码事件循环之外的外部提供者图像
* Studio：重用 BOS 探针编码，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16289 中对长提示进行两次标记
* Studio：从一个文件夹扫描中列出音频库，并在 https://github.com/unslothai/unsloth/pull/16367 中重用 @danielhanchen 未更改的 sidecar
* Studio：在https://github.com/unslothai/unsloth/pull/16361中@danielhanchen在工作线程上运行扩散数据集上传文件工作
* Studio：选择 https://github.com/unslothai/unsloth/pull/16297 中 @shimmyshimmer 的背景图像显示位置（新聊天页面、聊天或所有页面）
* Studio：在“外观”中切换问候语，当 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/16301 中关闭问候语时，作曲家保持原状
* Studio：外观 > 由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/16299 中提供实时预览、行号、自动换行和连字的代码
* Studio：在 https://github.com/unslothai/unsloth/pull/16199 中@danielhanchen 的本地模型列表中重用每个存储库的部分判决
* Studio CI：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16383 中连续运行网络工具重叠计时
* 测试：在 no-torch venv 中存根新的 num_proc 助手，并在 https://github.com/unslothai/unsloth/pull/16386 中 @danielhanchen 的元数据缓存测试中使用 utf-8 读取
* Studio：https://github.com/unslothai/unsloth/pull/16209 中的 @NilayYadav 在服务器重新启动后重新连接聊天的 MCP 会话
*修复（工作室）：报告为什么模型的安全检查被https://github.com/unslothai/unsloth/pull/16292中的@Lyxot阻止
* 当本地代理无法在 https://github.com/unslothai/unsloth/pull/16211 中通过 @NilayYadav 运行命令时，将 Claude 的 shell 还给 Claude
* Studio：在未更改的情况下读取每个画廊 PNG 的配方一次，并仅解析 https://github.com/unslothai/unsloth/pull/16355 中 @danielhanchen 的符号链接 clips
* Studio：图像和视频条停止重新渲染每个缩略图和页面的每张卡片，作者：https://github.com/unslothai/unsloth/pull/16311 中的 @danielhanchen
* Studio：长聊天停止重新渲染每个令牌的源徽章和每次运行的工具卡，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16277 中
* Studio：保留记录列表行，而 https://github.com/unslothai/unsloth/pull/16363 中的 @danielhanchen 未更改其文件
* Studio：在 https://github.com/unslothai/unsloth/pull/16105 中 @danielhanchen 的长输出上保持 <function=...> 工具调用解析线性
* Studio Images：另一个帐户的加载模型不再提供 https://github.com/unslothai/unsloth/pull/16200 中的 @debojyoti-dev 生成
* Docker：在 https://github.com/unslothai/unsloth/pull/16206 中冻结 @NilayYadav 的引用时，将带注释的标签剥离到其提交中
* Studio：在 https://github.com/unslothai/unsloth/pull/16188 中 @oobabooga 进行桌面更新期间停止错误的“无法同步固定聊天”提示
* Studio：流式传输持久聊天运行快照，无需重新解析 https://github.com/unslothai/unsloth/pull/16302 中 @danielhanchen 存储的请求
* Studio：告诉代理项目的工作文件夹是其工具运行的位置，因此它会读取文件，而不是通过 https://github.com/unslothai/unsloth/pull/16251 中的 @oobabooga 请求文件
* 块 CUDA 图表：当解码器块跨越 https://github.com/unslothai/unsloth/pull/15931 中的 @danielhanchen 的多个设备时，自动模式保持关闭状态
* Studio：https://github.com/unslothai/unsloth/pull/16286 中 @danielhanchen 在网页 Markdown 提取中更便宜的每个令牌工作
* Studio：当 https://github.com/unslothai/unsloth/pull/16210 中的 @NilayYadav 命令启动后台进程时，停止终端调用挂起
* Studio：在真实闪存 SDPA 内核上门 MiniMax-H3 自动闪存 (#16294)，作者：@indrajeetapache，https://github.com/unslothai/unsloth/pull/16296
* Studio：强化 VAE 编码 dtype for Qwen-Image-2.1 GGUF 编辑/参考 (#16375) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/16376
* Studio Images：拒绝加载其解析的门控基地，该帐户无法通过https://github.com/unslothai/unsloth/pull/16379中的@danielhanchen访问
* Studio：从一个文件夹扫描中列出视频库，并在 https://github.com/unslothai/unsloth/pull/16372 中重用 @danielhanchen 未更改的 sidecar
* Docker：停止在 https://github.com/unslothai/unsloth/pull/16208 中的 @NilayYadav 的 Studio 映像中发送 SSH 主机密钥
* 每个线程的内核缓存键标签和读回屏障键（检查点重新计算，torch >= 2.12）由https://github.com/unslothai/unsloth/pull/15997中的@danielhanchen
* 灵活注意力：用于短的无梯度调用的小型共享内存块，因此一个简短的提示不会让进程受到@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16049 中的热切关注
* 在 https://github.com/unslothai/unsloth/pull/16197 中 @danielhanchen 重置 for_inference 中的推理立场计数器
* Studio：说https://github.com/unslothai/unsloth/pull/16390中的@shimmyshimmer在删除对话框中永久删除了聊天和项目
* Studio：在未找到 GPU 时在 CPU 上进行训练，并提供在无 GPU 聊天上安装训练，仅由@oobabooga 在 https://github.com/unslothai/unsloth/pull/16175 中安装
* 修复（studio）：将设置侧边栏行与https://github.com/unslothai/unsloth/pull/16391中@wasimysaid的搜索字段对齐
* Studio MLX：增量解码回复快照，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16227 中重新解码每个 id
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16270 中干净传递后没有任何变化时，跳过启动清单迁移扫描
* Studio：在答案中保留反引号的工具调用标签，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16132 中剪切它
* 桌面：停止 WebKitGTK 2.54 上的 NVIDIA X11 闪烁 (#16318) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/16322
* Studio：侧边栏、作曲家和菜单的 Glass 主题，没有背景图像的 Glass，并在 https://github.com/unslothai/unsloth/pull/16333 中删除 @shimmyshimmer 的 Classic 和 Minimal 主题
*修复（提供者）：保留@hsusul在https://github.com/unslothai/unsloth/pull/16369中的所有Anthropic系统指令
* Studio：停止将 parakeet.cpp GGUF 路由为带有虚假 llama.cpp 更新提示的聊天（#16273），作者为 https://github.com/unslothai/unsloth/pull/16281 中的 @indrajeetapache
* Studio：让背景在 https://github.com/unslothai/unsloth/pull/16381 中 @danielhanchen 的公开对话中保持可见
* CLI：list-checkpoints 将输出文件夹之外的 --outputs-dir 报告为 @hsusul 在 https://github.com/unslothai/unsloth/pull/16202 中的错误
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16385 中按占位符顺序转换 ShareGPT 图像列表
* Studio：解码视频附件，而不是通过 https://github.com/unslothai/unsloth/pull/16254 中的 @YakshithK 获取数据 URL
* Studio：永远不要在早于 build 26100 的 Windows 上启动 wxc-exec，作者为 @danielhanchen，位于 https://github.com/unslothai/unsloth/pull/16384
* CLI：@debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/16347 中为视觉模型进行推理和聊天拍摄图像
* 在 https://github.com/unslothai/unsloth/pull/16253 中使用 @NilayYadav 在 macOS 和 Linux 上使用 tar.xz 进行 Node 下载
* Studio：从 @debojyoti-dev 在 https://github.com/unslothai/unsloth/pull/16285 中提交的 ModelScope 中提供决策 API 的固定 GGUF
* 对 torch < 2.14 的灵活关注：为短解码调用安装图块，因此批量大小的更改不会让 https://github.com/unslothai/unsloth/pull/16073 中的 @danielhanchen 热切关注该过程
* Gemma 3：在 https://github.com/unslothai/unsloth/pull/16041 中的 @danielhanchen 在非 Flex 注意路径上生成，而不是 flex_attention 的后备
* 解码 CUDA 图形：在 https://github.com/unslothai/unsloth/pull/15976 中选择 @danielhanchen 进行批次 1 (UNSLOTH_DECODE_CUDA_GRAPHS_FULL=1) 的全步捕获
* Studio 测试：固定删除聊天占位符，而不是 https://github.com/unslothai/unsloth/pull/16397 中 @danielhanchen 的措辞
* Studio：Unsloth Desktop 上的 macOS 系统玻璃，作者：@shimmyshimmer，https://github.com/unslothai/unsloth/pull/16334
* Studio：在 https://github.com/unslothai/unsloth/pull/16380 中由 @danielhanchen 在 Linux 桌面中打开拼写检查
* 工作室：保留“Trick or Treat”作为全年主题，删除 https://github.com/unslothai/unsloth/pull/16392 中 @shimmyshimmer 的万圣节额外内容
* Studio：运行并隐藏 llama-server 在 https://github.com/unslothai/unsloth/pull/16103 中@danielhanchen 留下的 MiniMax-M2 工具调用
* Studio：回答来自磁盘的折叠“设备上”行，而不是 https://github.com/unslothai/unsloth/pull/16271 中@yannickloth 的集线器
* Studio：退出推理工作者，而不是等待https://github.com/unslothai/unsloth/pull/16338中的@YakshithK杀死
* CLI：让@YakshithK在https://github.com/unslothai/unsloth/pull/16332中火车加载需要trust_remote_code的模型
* Studio：在 https://github.com/unslothai/unsloth/pull/16388 中重新生成一个在会话中用完 GPU 内存的 llama 服务器，并提供更多 VRAM 空间（@danielhanchen）
* Studio 测试：数据设置驱动程序期望对 https://github.com/unslothai/unsloth/pull/16401 中 @danielhanchen 的一个存档结果进行指定的单聊天删除
* Unsloth Studio MLX：https://github.com/unslothai/unsloth/pull/16259 中 @Lyxot 的快速验证切换
* 具有 CPU 卸载功能的 FSDP2 float16：将 CPU DTensor 梯度取消缩放为本地分片，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16398 中实现
* Studio：默认情况下在 https://github.com/unslothai/unsloth/pull/15993 中的 @danielhanchen 在 Transformers 聊天后端中使用 CUDA 图形进行解码
* Studio 测试：将集线器源恢复与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16236 中继承的源进行比较
* 在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16229 中对打包的 fp32 路由测试中的设备上下文进行存根
* GRPO PrefixGrouper：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16244 中的参考检查主机同步布局测试
* 测试：GQA 路由预言机预计在 https://github.com/unslothai/unsloth/pull/16225 中@danielhanchen 在没有启用_gqa 的情况下扩展了 torch 上的 K/V
* Studio：搜索较早的轮次以查找用户的问题，而不是https://github.com/unslothai/unsloth/pull/16204中@debojyoti-dev的工具循环自己的通知
* Studio：使文件夹中的显示在 Linux 上工作，并在无法工作时通过 https://github.com/unslothai/unsloth/pull/16198 中的 @debojyoti-dev 进行报告
* 测试：引脚 bf16 支持和 GGUF 预检装置中的 HF 缓存位置，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15967 中进行
* 添加 unsloth. precision：一个用于低精度配方、拒绝和高精度图层的注册表，作者为 @danielhanchen，位于 https://github.com/unslothai/unsloth/pull/16387
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16226 中对仅 CPU 运行器运行 RoPE 64 位索引元数据检查
* Studio：使用 macOS 系统字体（SF Pro）作为 Mac 上的默认 UI 字体，作者：https://github.com/unslothai/unsloth/pull/16402 中的 @shimmyshimmer
* Studio：https://github.com/unslothai/unsloth/pull/16408 中@shimmyshimmer 定制的新聊天问候语
* 工作室测试：跳过 CUDA 编译线性检查，其中 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16237 中对生产保持渴望
* Studio：在 https://github.com/unslothai/unsloth/pull/16409 中使用 @shimmyshimmer 的 Hugeicons 垃圾箱和书签 01 图标
* 工作室测试：https://github.com/unslothai/unsloth/pull/16245 中的@danielhanchen 为每位超过 40 岁的 xdist 工人提供单独的发动机端口块
* 全面微调通知：在 https://github.com/unslothai/unsloth/pull/16405 中，@danielhanchen 在没有 bfloat16 的 GPU 上对强制 float32 模型使用 float32
* Studio：在真实 CUDA 上运行多 GPU 编译测试，在 https://github.com/unslothai/unsloth/pull/16224 中 @danielhanchen 的急切回退中失败
* 块编译：在 https://github.com/unslothai/unsloth/pull/16410 中 @danielhanchen 编译第一个块之前安装 router_logits 捕获钩子
* 管道并行：通过 https://github.com/unslothai/unsloth/pull/16406 中的 @danielhanchen 跨阶段承载 Qwen3-MoE 路由器辅助损耗
* 测试：在 https://github.com/unslothai/unsloth/pull/16246 中，@danielhanchen 取代了 gpt-oss 密集专家重装夹具下降专家的定量状态
* Studio 沙箱：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16412 中重新映射 /mnt/data 样式路径的 Windows 拼写
* 工作室测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16426 中进行的两个单样本嵌套标头线性检查的五中最佳
* 有风险的加载器基线：在 https://github.com/unslothai/unsloth/pull/16428 中记录 @danielhanchen 的 float8 训练精度回退
* Studio 测试：在第一个测试开始时获取集线器源基线，而不是在 https://github.com/unslothai/unsloth/pull/16430 中@danielhanchen 收集时获取
* 工作室测试：聊天宽度驱动程序按位置选择预设，而不是按 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16431 中的副本
* Studio：缩短 https://github.com/unslothai/unsloth/pull/16439 中 @shimmyshimmer 的 Hugeicons 垃圾和书签评论
* 多帐户剧作家：在 https://github.com/unslothai/unsloth/pull/16437 中 @danielhanchen 记录并在注销/登录后加载从未触发时重试一次
* 个人资料统计测试：中午播种，因此午夜前运行可保持今天 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16440 的回复
* Studio：https://github.com/unslothai/unsloth/pull/16442 中的 @shimmyshimmer 将 Hugeicons 更新为 4.4.0
* UNSLOTH_PARALLEL：用于 dp / tp / pp / cp 的一个标志和一个根网格，来自环境的并行管道，以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16407 中的功能注册表
* Studio：在 https://github.com/unslothai/unsloth/pull/16445 中由 @shimmyshimmer 替换杂散的 Lucide 图标并解决重复的图标
* 修复 https://github.com/unslothai/unsloth/pull/16446 中@danielhanchen 在主干线上留下红色的三个 CI 检查 #16407
* Studio：在需要时通过https://github.com/unslothai/unsloth/pull/16444中的@oobabooga延迟读取查找表以启用MoE缓存
* Studio：在聊天的左侧边缘打开导航器，基于 https://github.com/unslothai/unsloth/pull/16300 中@shimmyshimmer 的#11668 构建
* PP env GA 测试：在 https://github.com/unslothai/unsloth/pull/16457 中比较 @danielhanchen 在 5e-5 处训练的适配器
* Studio：添加时间格式设置并删除 https://github.com/unslothai/unsloth/pull/16448 中 @shimmyshimmer 的冗余桌面更新说明
* 后端 CI：在 https://github.com/unslothai/unsloth/pull/16447 中的 @danielhanchen 在自己的分片中运行上下文并行 compose gloo 套件
* 在 https://github.com/unslothai/unsloth/pull/16458 中通过 @danielhanchen 保留检查点故障时的外部聊天导入恢复
* Studio：在https://github.com/unslothai/unsloth/pull/16433中列出@debojyoti-dev的每个Gemini聊天模型（遵循nextPageToken，允许新家庭）
* Studio：根据每个代币成本的增长情况来估计提示的剩余时间，而不是 https://github.com/unslothai/unsloth/pull/16450 中 @oobabooga 迄今为止的速率
* Studio：保持实时生成线不移动分支选择器，并在 https://github.com/unslothai/unsloth/pull/16449 中 @oobabooga 的简短回复期间更新它
* Studio：将连续回复计时为整个答案，而不仅仅是 @oobabooga 在 https://github.com/unslothai/unsloth/pull/16451 中的最后一次通过
* Studio：作曲家外观部分，https://github.com/unslothai/unsloth/pull/16455 中 @shimmyshimmer 默认打开作曲家轮廓
* Studio：翻译 https://github.com/unslothai/unsloth/pull/16452 中 @oobabooga 的实时生成数据、回复计时工具提示和权重放置行
* Studio：在https://github.com/unslothai/unsloth/pull/16459中添加@danielhanchen的链接预览设置
* 修复 https://github.com/unslothai/unsloth/pull/16463 中@danielhanchen 的 OpenRouter MAI-Voice 语音播放问题
*修复（api）：在https://github.com/unslothai/unsloth/pull/16435中保留@hsusul收集的连接回复中的拒绝文本
* Studio：荣誉语音设置加载到https://github.com/unslothai/unsloth/pull/15284中的@indrajeetapache冷STT API加载（#15280）
* studiobench 奇偶校验：将每个 data-*-id 属性视为 https://github.com/unslothai/unsloth/pull/16464 中 @danielhanchen 的实例 id
* Studio：报告测得的 VRAM 不足，而不是指责 https://github.com/unslothai/unsloth/pull/16453 中的 @YakshithK 的前工作人员
* 修复 https://github.com/unslothai/unsloth/pull/16465 中 @Imagineer99 标记为所需资源的管道降噪器下载
* 通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/16466 中识别模型中心库存中的共享编码器资源
* Studio：将链接、表格、列表和格式粘贴到 https://github.com/unslothai/unsloth/pull/16298 中@shimmyshimmer 的 Markdown 格式中
* Studio：通过@shimmyshimmer在https://github.com/unslothai/unsloth/pull/16454中的帐户保留聊天背景、界面比例和浏览器首选项
* Studio：在“设置”中保留文本选择 › 跨民意调查的日志，以便 https://github.com/unslothai/unsloth/pull/16099 中的 @LeoBorcherding 可以复制部分日志
* 工作室：将扩散训练访问事实与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16216 中获取的无令牌镜像相匹配
* Studio：/v1/chat/completions 将完整答案放入 https://github.com/unslothai/unsloth/pull/16121 中 @LeoBorcherding 带有 {% Generation %} 标记的模板的 Reasoning_content 中
* 跳过 https://github.com/unslothai/unsloth/pull/16235 中 @danielhanchen 在集成 GPU 上进行本机 int8 主机量化的固定分段
* Studio：在https://github.com/unslothai/unsloth/pull/16223中恢复@danielhanchen对四种路线和模式的公共OpenAPI描述
* Studio：在 https://github.com/unslothai/unsloth/pull/16377 中由@danielhanchen 在每个加载的标记生成器中应用一次映射的聊天模板
* Studio：在 https://github.com/unslothai/unsloth/pull/16124 中 @LeoBorcherding 在混合音频 + 图像数据集中的图像上训练音频 VLM
* Studio：将功能索引和 Markdown 渲染器保留在 https://github.com/unslothai/unsloth/pull/16394 中 @danielhanchen 的启动包之外
* Studio：保持嵌套的有源 HF 集线器可清除，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16215 中列出
* 在https://github.com/unslothai/unsloth/pull/16228中@danielhanchen具体化窄行自检之前的RMSNorm宽度
* 融合LM头：接受https://github.com/unslothai/unsloth/pull/16220中@danielhanchen的TRL 1.17的score_ids内核参数
* 块编译：假设打包行运行 https://github.com/unslothai/unsloth/pull/16272 中 @danielhanchen 未编译的每个块时
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/16403 中重用@danielhanchen 的有界调节图像解码
* Studio：在 https://github.com/unslothai/unsloth/pull/15878 中显示@Etherll 克隆的 Breeze TTS 2 和 VoxCPM2 的语音描述
* Studio：不要从https://github.com/unslothai/unsloth/pull/16231中的@danielhanchen的可重用缓存中减去实时段图输出两次
* Studio：在 https://github.com/unslothai/unsloth/pull/16214 中的 @danielhanchen 托管的 bf16 VAE 路径中保持匿名 Hub 代币匿名
* Studio：在 https://github.com/unslothai/unsloth/pull/16344 中切换模型时等待工作线程退出而不是固定睡眠（@danielhanchen）
* Studio Windows XPU Triton：验证交换和火炬的 XPU Triton 有效负载，修复损坏的 Triton，跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16250 中的 pip 备份
* Studio：在停止时唤醒调度程序，而不是等待 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16350 中的队列轮询
* Studio：识别在 https://github.com/unslothai/unsloth/pull/16404 中 @danielhanchen 的第一次投票之前完成的工作 VRAM 版本
* 保存：从 https://github.com/unslothai/unsloth/pull/16102 中的 @LeoBorcherding 保存的分词器中删除训练截断和填充
*清理：删除https://github.com/unslothai/unsloth/pull/15695中@danielhanchen没有调用的核心中的六个私有助手和常量
* 桌面版：重叠所有者活跃度探测并跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15739 中的冗余预检 HTTP
* Studio：当视频 GGUF 无法解码时命名为 FFmpeg，并使用 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/16098 中使用的 ffmpeg llama-server 缩小 clips
* Studio：从 shiki/core 构建代码荧光笔，以便未使用的 WASM 引擎将 @danielhanchen 留在 https://github.com/unslothai/unsloth/pull/15740 中的捆绑包中
* 工作室扩散：关闭坐标下降，其中 Max 引脚减少配置由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16269 中进行
* Studio：使用条目启动凭证引导程序，而不是在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16389 中进行路由检查之后启动
* 加载器：在 https://github.com/unslothai/unsloth/pull/15757 中 @danielhanchen 每次 from_pretrained 调用时获取每个配置探针一次
* 保存：在https://github.com/unslothai/unsloth/pull/16104中通过@LeoBorcherding编写源tokenizer_class而不是TokenizersBackend
* Studio：LFM3-Omni 音频输入、导出、LoRA 默认值和停止由 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/16242 中生成的自定义代码
* feat(studio)：MLX 工具草案、视频、语法、KV 和 LoRA 由 @Lyxot 在 https://github.com/unslothai/unsloth/pull/16441 中回复
* Studio sd.cpp 安装：将 ELF 符号版本不匹配视为加载器拒绝，作者：https://github.com/unslothai/unsloth/pull/16150 中的 @danielhanchen
* Studio 微调队列：不要启动在 https://github.com/unslothai/unsloth/pull/16151 中 @danielhanchen 进行批处理探测期间取消的作业
* Studio：将风格关键字保留在 https://github.com/unslothai/unsloth/pull/16133 中 @danielhanchen 的 Mermaid Guard 中引用的状态标签中
* Studio：仅在 https://github.com/unslothai/unsloth/pull/16382 中发出 @danielhanchen 的 woff2 KaTeX 字体
* FP8：在 https://github.com/unslothai/unsloth/pull/16156 中匹配 @danielhanchen 的 16 位保存转换时，剥离activation_scale 源
* Studio：在 https://github.com/unslothai/unsloth/pull/16243 中通过 @LeoBorcherding 与 LFM3-Audio-2B 聊天（文本和语音输入、文本输出）
* 解码图：保留渴望的缓存增长并拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16191 中的陈旧重播
* Studio OpenAI API：拒绝 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16153 中选定的 JSONL 聊天中不受支持的权重
* Flex 小 smem 磁贴：在 https://github.com/unslothai/unsloth/pull/16172 中 @danielhanchen 的默认磁贴上保留 float32 调用
* 在https://github.com/unslothai/unsloth/pull/13961中通过@mahiatlinux添加帐户之前防止桌面所有者锁定
* Studio：将 FP8 / NVFP4 编译缓存标记带入 https://github.com/unslothai/unsloth/pull/16158 中的@danielhanchen 的渲染和编译线程中
* 杂务：https://github.com/unslothai/unsloth/pull/16492 中 @pre-commit-ci[bot] 的预提交自动更新
* FSDP2：当https://github.com/unslothai/unsloth/pull/16180中的@danielhanchen忽略每个可训练参数时，dp上的平均tp梯度
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/16152 中@danielhanchen 无法访问集线器时离线加载缓存的权重
* 打包：不要将编译后的 inference_mode 元数据提供给 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16183 中的训练步骤
* Studio 扩散 prequant 缓存：不将 cgroup shmem 视为 https://github.com/unslothai/unsloth/pull/16154 中@danielhanchen 可回收的
* FSDP2 保存：https://github.com/unslothai/unsloth/pull/16181 中 @danielhanchen 的张量并行 x FSDP2 模型的一位编写者
* FSDP2 QAT 导出：在 https://github.com/unslothai/unsloth/pull/16166 中由@danielhanchen 检查写入器主机 RAM 中转换后的副本
* 桌面：在接受 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16134 中的缓存功能答案之前重新检查安装指纹
* Studio Compare：在 https://github.com/unslothai/unsloth/pull/16149 中 @danielhanchen 仍使用 Detailer pass 仍在使用的单元格上保留否定提示
* 工作室扩散：没有索引的编号碎片不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16418 中的完整快照
* 多 LoRA 分组专家：仅由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16415 中急切地运行分组支持和奇偶校验探针
* 打包 mRoPE 注意：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16416 中的热打包行上没有图表中断
* 解决 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16157 中所有无火炬安装的兼容 Unsloth 和 Zoo 对
* 修复了 https://github.com/unslothai/unsloth/pull/16171 中 @danielhanchen 跨参数交换和累积的 FSDP2 检查点规划
* SM100 上的 SDPA 培训：在 https://github.com/unslothai/unsloth/pull/16230 中@danielhanchen 避免 cuDNN 时保留调用者的后端策略
* Studio Hub 下载：在 https://github.com/unslothai/unsloth/pull/16422 中 @danielhanchen 的失败更新和并发工作人员中保留最后一个完整快照上的 refs/main
* 将融合损耗参与计数器排除在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15575 中的跟踪代码之外
* PPO 融合推出：在 https://github.com/unslothai/unsloth/pull/15574 中生成应用 @danielhanchen 的 logits 处理器时保留 TRL 的分数
* Studio：在https://github.com/unslothai/unsloth/pull/16413中保留@debojyoti-dev以对话语言生成的聊天标题
* Studio：在 https://github.com/unslothai/unsloth/pull/16501 中通过@NilayYadav 节省输入时的空闲自动卸载秒数
* Studio：接受 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16518 中的自定义 GPU 层参数中的 auto 和 all
* 修复 @rugved8607 在 https://github.com/unslothai/unsloth/pull/16480 中朗读聊天中表情符号的问题
* 工作室：在 https://github.com/unslothai/unsloth/pull/16477 中 @wasimysaid 的明亮壁纸上使 Liquid Glass 3D 作曲家变暗
* Studio：仅提供模板允许的推理级别，并在 https://github.com/unslothai/unsloth/pull/16502 中显示@oobabooga 的引发消息
* 在 https://github.com/unslothai/unsloth/pull/16147 中@danielhanchen 进行精确转换 OOM 后恢复 VAE 存储
* 工作室设置：https://github.com/unslothai/unsloth/pull/16524 中@danielhanchen 的作曲家 Beta 徽章大小和设置搜索与 UI 比例的偏移量
* Worker stderr 镜像：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16525 中进行一次空读取后再次读取
* 并行隔离防护：将集线器下载测试轮询截止日期列为良性计时，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16526 中提供
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16521 中选择一个文件夹来保存桌面图库批次
* 无 Triton 导入：将 Triton 存根交给不懒惰的导入者，而不由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15576 中发布
* FSDP2：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16173 中对 float32 中不同步微批次的 fp16 复制梯度求和
* 范围内下载测试：为 Hub 缓存播种离线路径，现在由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16530 中固定
* 多 LoRA 冷编译测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16531 中读取 utf-8 源代码
* 无火炬安装线束：对 https://github.com/unslothai/unsloth/pull/16532 中的 @danielhanchen 解析 Unsloth / Zoo 对的 feed 进行建模
* 管道并行：在 https://github.com/unslothai/unsloth/pull/16167 中 @danielhanchen 的 torch.compile 下结束非最后阶段，没有图形中断
* 无依赖配对测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16533 中的共享运行器启动 PowerShell
* FP8：在 cuBLAS 支持的情况下，为 float32 保留 rowwise _scaled_mm (torch < 2.14) by @danielhanchen in https://github.com/unslothai/unsloth/pull/16393
* GPU 监控信号测试：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16535 中自动发布其握手文件
* 管道并行：在 https://github.com/unslothai/unsloth/pull/16417 中通过 @danielhanchen 显式取消缩放时就溢出达成一致
* 防止 https://github.com/unslothai/unsloth/pull/16414 中 @danielhanchen 分组的多 LoRA 专家投影中 FP16 溢出
* MLX 推理存根：回答 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16537 中添加的 _FIRST_USE_WORK 导入动物园
* ROCm 进度测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16542 中对解决无火炬对的 feed 进行建模
* 多LoRA溢出测试：通过https://github.com/unslothai/unsloth/pull/16544中的@danielhanchen将内核源代码读取为UTF-8
* Studio：将 OpenCode Console 和 Go 结合到 https://github.com/unslothai/unsloth/pull/16482 中 @NilayYadav 的一个连接中
* 修复了 https://github.com/unslothai/unsloth/pull/16543 中 @wasimysaid 滚动和悬停时连接下拉列表缩小的问题
* Studio：根据测量的峰值调整audio.cpp TTS模型的大小，并在https://github.com/unslothai/unsloth/pull/16514中@oobabooga在CPU上运行TQ2_1
* 桌面：允许在 https://github.com/unslothai/unsloth/pull/16523 中使用 @danielhanchen 的 UNSLOTH_DESKTOP_PORT 自定义后端端口
* Studio：当 Switch back 必须在 https://github.com/unslothai/unsloth/pull/16474 中下载 @NilayYadav 的 GGUF 时，保留加载的模型
* 在 https://github.com/unslothai/unsloth/pull/16471 中尊重设置搜索中的界面缩放和 @danielhanchen 的丰富粘贴徽章
* 块交换：@LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/15159 中使用 offload_layers（驱逐的专家权重读取为空）的 MoE 模型上 get_peft_model 崩溃
* 在 https://github.com/unslothai/unsloth/pull/16470 中@danielhanchen 恢复看门狗后保留经过验证的实时桌面后端
* 在 https://github.com/unslothai/unsloth/pull/16468 中 @danielhanchen 的并发会话刷新期间保持 Studio 窗口登录
* 工作室扩散：跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16400 中经过验证的居民重新规划的解决
* 通过 https://github.com/unslothai/unsloth/pull/16476 中的 @danielhanchen 使分页启动进度测试独立于主机调度
* 在 https://github.com/unslothai/unsloth/pull/16546 中 @wasimysaid 延迟 MCP 工具搜索期间保留提示缓存
* Studio：在https://github.com/unslothai/unsloth/pull/16462中显示@Aafimalek的图像生成时间
* 在 https://github.com/unslothai/unsloth/pull/16155 中保留 @danielhanchen 的分离设备压缩张量输入传输

## 新贡献者
* @yannickloth 在 https://github.com/unslothai/unsloth/pull/16271 中做出了第一个贡献
* @rugved8607 在 https://github.com/unslothai/unsloth/pull/16480 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.913-beta...v0.1.914-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.914-beta` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
