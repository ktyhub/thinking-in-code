---
title: "unsloth v0.1.913-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.913-beta"
version: "v0.1.913-beta"
published: "2026-10-30"
type: "pre"
lang: "zh"
---

# unsloth v0.1.913-beta

通过自定义背景和改进的 UI/UX，打造您自己的 Unsloth。当 VRAM 有限时，此版本还缩短了应用程序更新时间并加快了 Linux 应用程序和 Qwen-Image gen 的速度。  还有新功能：Unsloth [动态 v3.1](https://unsloth.ai/docs/models/deepseek-v4.1-flash) GGUF（预览）中的 DeepSeek-V4.1-Flash-1017、低 RAM 计算机上的 FLUX.2-klein-9B、更流畅的聊天和批量 MoE 微调。

<img宽度=“3520”高度=“958”src=“https://github.com/user-attachments/assets/a4c01069-da2f-4cf3-afee-d19499cfefc3”/>


## 亮点

- **自定义背景**来个性化您的聊天（+将作曲家移至底部 - 下周将提供更多自定义功能）
- **DeepSeek-V4.1-Flash-1017** 新的 Unsloth Dynamic v3.1 GGUF（预览版），在几乎所有基准测试中尺寸最准确 [博客](https://unsloth.ai/docs/models/deepseek-v4.1-flash)
- **Unsloth 的 14 种新语言**
- **应用程序更新**完成速度提高了一倍
- **Linux** 延迟大大减少并提高了性能
- **Qwen-Image** 在 16 GB VRAM 限制下渲染速度提高了 2 倍
- **更新界面**，具有一致性和更清晰的用户界面
- **MoE 微调** 一起运行兼容的 API 作业

## 定制和界面

- 将聊天框移至新聊天的底部，并在“设置”>“聊天”中将 **Composer 置于底部**。
- 完全隐藏问候语，以获得更简单的新聊天屏幕。
- 图书馆获得更短的聊天卡、更清晰的工具提示以及一致的排序和过滤图标。
- 通过将填充的插槽拖动到空的插槽上，在输入插槽之间复制图像。
- 固定模型在 Unsloth Desktop 重新启动时保持保存。
- 每个浏览器选项卡都会保留自己的未发送消息。
- 在配备 NVIDIA、X11 和驱动程序 610+ 的 Linux 上滚动长聊天更加流畅。我们的高分辨率测试从大约 17 fps 提高到 60 fps。

## 图片和视频

- FLUX.2-klein-9B 现在可以在具有 12.7 GB 系统 RAM 和支持的 GPU 的 Linux 上加载和渲染。
- 在 16 GB VRAM 限制下，Qwen-Image-2512 的渲染速度提高了 2 倍。
- 在相同限制下，Qwen-Image-Edit-2511 的渲染速度提高了约 1.3 倍。
- 在我们内存有限的 NVIDIA 测试中，MiniMax-H3 clips 的完成速度提高了约 1.7 倍。

## 性能

- 通过跳过 Python 预编译，应用程序更新所需时间缩短一半。与之前的 v0.1.912 一样，代价是之后的首次启动时间更长。
- 即使数学格式未完成，长回复也能更流畅地传输。解析带有杂散 `$$` 的 83 KB 回复花费了 0.7 秒，而不是 71 秒。
- 预览 1 GB 本地 Parquet 文件使用约 300 MB 峰值内存，低于 1.5 GB。
- 当 Transformers 和 MLX 模型完成加载时，Unsloth 保持响应。

## 聊天和 API

- llama 服务器崩溃后，GGUF 模型会在后台重新加载。
- 失败或取消的 GGUF 下载会导致您当前的模型处于加载状态。
- 很长的 GGUF 聊天可以紧凑并继续进行。
- 直接连接到本地 GGUF 的 Claude Code 在新会话中重复使用缓存的提示。
- 拒绝的 GGUF 请求显示 llama-server 的解释而不是一般错误。

## 麦克

- Claude Code、Codex 和 OpenCode 请求可以共享 MLX 批次。在我们的测试中，四个并发请求的完成速度提高了 2.3 倍。
- 在 M3 Max 上的 Qwen3.8-27B-4bit 测试中，实验性 **神经引擎预填充** 进程提示速度提高了 31%。它是选择性加入的，可以稍微改变回复。
- 自动上下文以不超过 65,536 个令牌启动 GGUF 模型，从而减少前期内存使用。您仍然可以手动设置更大的上下文。
- 在 MLX 上向 LFM3-Audio 或 LFM3-Omni 发送语音 clip，并在文本旁边听到其答案。

## 培训

- MoE 模型（例如 Qwen3.6-35B-A3B）上兼容的 LoRA 和 QLoRA 作业通过微调 API 一起训练，每个模型都有自己的适配器。
- **通过“训练”页面上的 API 使用**可打开 Python、JavaScript 和curl 示例进行设置。
- 自动识别单列文本数据集，无需手动列映射。

## 发生了什么变化
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/15785 中的 @danielhanchen 的 unsloth>=2026.10.10、unsloth-zoo>=2026.10.10
* 张量并行 x FSDP2：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15748 中的数据并行排名中，从 FSDP2 中剔除的平均可训练 TP 参数
* Flash impl：在 https://github.com/unslothai/unsloth/pull/15750 中 @danielhanchen 警告 Trainer 路径上的显式 fa3 / fa4 后备
* FSDP2 块 CUDA 图：释放 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15756 中收集的 flex BlockMask 块的权重
* 安装程序下载：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15789 中再次报告整个 1 MiB 块的进度
* Studio 导出：在 https://github.com/unslothai/unsloth/pull/15737 中 @danielhanchen 上一次加载之后没有加载任何内容时，跳过 GPU 缓存清除
* 工作室视频：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15738 中探测 2.3 时，每个文件读取一次 LTX-2 检查点标头
* 张量并行：batch_rebalance 和 group_by_length 采样器通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15752 中为 tp 对等点提供相同的行
* CI：将未固定的版本兼容通道保持在 torch 2.15 下方，直到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15774 中发布 torchvision 0.30
* Studio：为每个批处理的微调作业提供自己的 fp16 损失比例，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15741 中提供
* Studio：列出 https://github.com/unslothai/unsloth/pull/15772 中 @danielhanchen 缓存在其 FP8 镜像中的 Qwen-Image-2.1-Turbo 基本管道
* 多 LoRA：融合 MoE 专家的每个适配器 LoRA，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15742
* 前端测试：跟随https://github.com/unslothai/unsloth/pull/15801中@danielhanchen的桌面退出隐藏窗口
* 交叉熵：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15744 中的 sm120 上的分块前向，在 4 个扭曲处有 8192 个宽块
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15514 中的 varlen SDPA 运行打包行的 head-dim-routed Flex 解码器
* 测试：允许动物园的填充 logits 在融合线性适配器中跨步，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15803 中进行检查
* studiobench：在https://github.com/unslothai/unsloth/pull/15805中通过@danielhanchen关闭更新通知来为浏览器播种
* Flex 小 smem 瓷砖：在 sm86 / sm89 上保持 float32 Gemma 3 关闭 Flex，在 https://github.com/unslothai/unsloth/pull/15529 中通过@danielhanchen 强制进行无梯度调用
* SDPA 解码：在 https://github.com/unslothai/unsloth/pull/15525 中 @danielhanchen 避免 cuDNN 时保留调用者的后端策略
* MoE 启发式 dW 配置：gpt-oss K = 2880 的 128 宽 N 瓦片，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15505
* FP8：跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15584 中编译的行式 FP8 推理线性的包装器
* Studio：大小 FLUX.1 Kontext 保护，从 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15797 中的 ~1 MP 渲染中预览和编译形状
* 在 https://github.com/unslothai/unsloth/pull/15693 中将 @Lyxot 的 Apple Silicon 上的图像和视频模型与聊天模型一起加载
* 块 CUDA 图：自动打开固定形状、启动绑定的 LoRA，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15768 中运行
* Studio：通过 https://github.com/unslothai/unsloth/pull/15809 中的 @danielhanchen 与每个作业专家 LoRA 一起对 MoE 作业进行批量微调
* 工作室：通过“Trick or treat”行的增长来提高启动捆绑预算（https://github.com/unslothai/unsloth/pull/15822 中@danielhanchen）
* Studio：测试批量微调是否保留在 https://github.com/unslothai/unsloth/pull/15825 中的 @danielhanchen 自己的帐户中
* Studio：在 https://github.com/unslothai/unsloth/pull/15796 中@danielhanchen 的降噪步骤之间将 MiniMax-H3 的流式顶级组保留在卡上
* Studio 本机缓存写入：当卸载在 https://github.com/unslothai/unsloth/pull/15776 中的@danielhanchen 实时读取交换之前移动权重时重新捕获
* checkpoint_skip_layers="auto": 跳过 https://github.com/unslothai/unsloth/pull/15779 中 @danielhanchen 的 DDP.join() 下的规划集体
* FP8 scaled_mm 后端：当 16 位权重溢出 L2 (sm89) 时，将 17-64 行发送到 torch._scaled_mm by @danielhanchen in https://github.com/unslothai/unsloth/pull/15791
* CI：在 https://github.com/unslothai/unsloth/pull/15815 中的@danielhanchen 驱动浏览器的每个作业中关闭更新检查
* 工作室测试：在 https://github.com/unslothai/unsloth/pull/15830 中@danielhanchen 的测试之间排空后台沙箱移动器
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15828 中 llama-server --help 探测不确定时，不发出遗留负载标志
* Mamba LoRA：在 eval 中应用经过训练的 dt_proj / x_proj / out_proj 适配器，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15730 中缓存解码
* Studio扩散：通过https://github.com/unslothai/unsloth/pull/15829中的@danielhanchen在sm120上的TMA描述符加载int8 GEMM操作数
* 块 CUDA 图：仅释放 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15777 中编译的块后端的树函数 cudagraph 池
* 测试：FP8 路由测试固定 NVIDIA 路径，以便它们通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15838 中的 ROCm 运行程序
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15833 中 llama-server --help 探测不确定时，跳过保持常驻页面锁定
* 后端 CI：将 fsdp2 Repo 测试分片由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15851 中分成两部分
* 由 @Aafimalek 在 https://github.com/unslothai/unsloth/pull/15780 中修复 Studio 中的 OpenCode Go 会话标头
* 桌面：在 https://github.com/unslothai/unsloth/pull/15546 中使用 @oobabooga 驱动程序 610 或更新版本在 NVIDIA X11 上重新启用 GPU 合成
* Studio 测试：跳过 rag_conn，其中 Python 的 sqlite3 无法加载 https://github.com/unslothai/unsloth/pull/15862 中 @danielhanchen 的扩展
* GRPO：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15855 中将每步主机同步从丢失路径中取出
* Studio：继续拒绝在 https://github.com/unslothai/unsloth/pull/15887 中 @danielhanchen 没有 O_NOFOLLOW (Windows) 的符号链接溢出
* Studio：当 https://github.com/unslothai/unsloth/pull/15816 中的@NilayYadav 响应流失败时显示真正的错误
* Studio：显示为什么 llama-server 在 https://github.com/unslothai/unsloth/pull/15817 中拒绝了 @NilayYadav 的聊天请求
* 集中注意：fullgraph +dynamic=True 下的 varlen 探针由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15891 中编译
* 工作室测试：除非 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15910 中提出测试要求，否则 GGUF 负载应远离主机的 Metal 预算
* 工作室测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15912 中测量新流程中的 int8 / fp8 dequant 和半字节交换峰值
* Studio：在 https://github.com/unslothai/unsloth/pull/15903 中恢复 @shimmyshimmer 的 #15731 登录布局
* 工作室：在 https://github.com/unslothai/unsloth/pull/15897 中通过@shimmyshimmer 的阅读引导实时监视器图块
* Studio：将刚刚创建的 API 令牌放入 Agents 命令中，将 @shimmyshimmer 的 API 示例放入 https://github.com/unslothai/unsloth/pull/15890 中
* Studio：用于参考的图像图标，用于在 https://github.com/unslothai/unsloth/pull/15806 中与 @shimmyshimmer 进行文件聊天的文件搜索图标
* Studio：Qwen-Image-2.1 在延迟编译之前急切渲染现在与 https://github.com/unslothai/unsloth/pull/15908 中 @danielhanchen 的 ComfyUI 相匹配
* 工作室扩散：让 12.7 GB 主机通过将 int8 降噪器溢出到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15911 中的暂存文件来加载 FLUX.2-klein-9B
* Studio：停止第一个 Wan2.2-A14B 渲染等待 https://github.com/unslothai/unsloth/pull/15906 中@danielhanchen 的第二个专家的 pin
* 工作室测试：为 https://github.com/unslothai/unsloth/pull/15915 中的 @danielhanchen 提供另一个工作人员无法处理的托管引擎端口
* Studio：在 https://github.com/unslothai/unsloth/pull/15898 中的 @shimmyshimmer 的 API 示例选项卡上添加快速入门标题
* Studio：https://github.com/unslothai/unsloth/pull/15905 中@shimmyshimmer 为每个设置行提供一个文本和控制宽度
* Studio：决策选项卡立即加载，系统和设置得到优化，主题边框由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15919 中恢复
* Studio：根据 https://github.com/unslothai/unsloth/pull/15867 中@danielhanchen 的请求解码格式检查预览行一次
* Studio：索引训练历史记录，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15872 中稍后恢复检查
* Studio：https://github.com/unslothai/unsloth/pull/15860 中的@danielhanchen 将 Whisper 时间戳令牌复制到主机每个窗口一次
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15781 中恢复部分内容时，通过 HTTP 一次获取最多四个 Hub 文件
* Studio：在https://github.com/unslothai/unsloth/pull/15870中@danielhanchen的转换中重用VLM URL探针的下载
* Studio：同时获取 ShareGPT+image 行图像，按 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15786 中的行顺序
* Studio 桌面：在 https://github.com/unslothai/unsloth/pull/15823 中的 @danielhanchen 中询问启动探针中的桌面功能，以了解功能缓存未命中的情况
* Studio：在 https://github.com/unslothai/unsloth/pull/15913 中 @danielhanchen 选择栅栏时，通过正则表达式查找代码块的反引号运行
* GRPO PrefixGrouper：在火炬 2.6 上干净地导入，并在 https://github.com/unslothai/unsloth/pull/15836 中使用 @danielhanchen 的日志行将其保持在 2.7 以下
* Studio：在https://github.com/unslothai/unsloth/pull/15917中由@danielhanchen编写原始转码的WAV块并在关闭时修复标题
* Studio：从 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15787 中的 Arrowvalidity 中查找没有图像或标题的 VLM 行
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15811 中以线性时间对未关闭的 Markdown 链接目的地进行评分
* Studio：通过 https://github.com/unslothai/unsloth/pull/15871 中的 @danielhanchen 将每个训练指标刷新及其运行进度写入一个事务中
* GRPO PrefixGrouper：从一个主机副本构建共享前缀布局，而不是按令牌循环和按段设备填充，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15835 中构建
* Studio：重用配方分片行计数，而 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15869 中没有更改分片
* Studio：让 Recipes lint 验证器在 Windows 上运行，并在 https://github.com/unslothai/unsloth/pull/15929 中的 @danielhanchen 的 gitignored 临时根目录下运行
* Studio：唤醒准入等待队列状态更改，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15885 中进行的下一次民意调查
* 工作室：在https://github.com/unslothai/unsloth/pull/15921中@danielhanchen的llama-server reaper中将未知的父活动视为活动
* 工作室：停止重新散列保留的溢出并重新读取 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15884 中的每个修剪的记录
* Studio：采用https://github.com/unslothai/unsloth/pull/15916中@danielhanchen已经转码的WAV save_from_media，而不是再次解码
* 清理：删除 https://github.com/unslothai/unsloth/pull/15790 中 @danielhanchen 保持字节码不变的 5 个冗余 pass 语句
* Studio setup.ps1：仅当前端由@danielhanchen在https://github.com/unslothai/unsloth/pull/15933中构建时才安装bun
* Studio：在 https://github.com/unslothai/unsloth/pull/15886 中 @danielhanchen 的无与伦比的 $$ 后保持 Markdown 块线性分割
* 分词器加载：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15834 中按原样返回快速分词器时，跳过未使用的慢速分词器加载
* 导入修复：禁用对于已安装的火炬来说太新的 torchao，而不是在 https://github.com/unslothai/unsloth/pull/15850 中@danielhanchen 导入失败。
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15923 中选择安装时字节码预编译
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15914 中每次重用估计时读取文件摘要缓存一次
* GGUF导出：将中间转换写入输出文件夹中，因此将其放置在https://github.com/unslothai/unsloth/pull/15783中由@danielhanchen重命名
* Studio：在首次使用时构建 MCP 应用程序，而不是在 https://github.com/unslothai/unsloth/pull/15814 中的@danielhanchen 后端导入时构建 MCP 应用程序
* Studio：仅读取 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15807 中的仅块聊天运行事件批次的运行状态
* Studio：当页面没有 https://github.com/unslothai/unsloth/pull/15812 中的 @danielhanchen 的此类标签时，跳过文章和主要范围
* Studio：从 https://github.com/unslothai/unsloth/pull/15868 中的 @danielhanchen 预览本地 Parquet 的前导行，而不是加载整个 Parquet
* Studio：从缓冲区存储 float32 RAG 向量，并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15859 中打包一次查询
* Studio：在 https://github.com/unslothai/unsloth/pull/15794 中共享 @danielhanchen 在启动和航线平台检查之间的飞行中 /api/health 读取
* Studio 测试：在 https://github.com/unslothai/unsloth/pull/15826 中 @danielhanchen 的负载取消测试中使用便携式假 llama-server
* install-kernels：当内核扩展不存在时跳过火炬导入，并且仅当https://github.com/unslothai/unsloth/pull/15896中的@danielhanchen需要轮子时才探测火炬
* Studio：在 https://github.com/unslothai/unsloth/pull/15925 中的@danielhanchen 在一个节点进程中验证配方作业的 OXC 批次
* Studio：https://github.com/unslothai/unsloth/pull/15793 中的 @danielhanchen 在每个工具调用边界上遍历一次沙箱，以获取文件卡和文件历史记录
* Studio：将音频库操作保存在@danielhanchen在https://github.com/unslothai/unsloth/pull/15875中解决的文件夹中
* Studio：当没有转义的美元对可以数学时跳过转义的数学解析由https://github.com/unslothai/unsloth/pull/15808中的@danielhanchen
* Studio：量化卡上已卸载的原生 int8 降噪器，一次一个线性，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15936 中实现
* GRPO PrefixGrouper：在 101 KB 共享内存 GPU 上安装 Flex 内核，并停止其静默急切回退，作者：https://github.com/unslothai/unsloth/pull/15854 中的 @danielhanchen
* Studio：当 GGUF 适合 RAM 时，跳过路线的 GPU 探测（@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15902 中）
* Studio 桌面：在 https://github.com/unslothai/unsloth/pull/15824 中@danielhanchen 仍未知后端端口时跳过读取的设备类型
* Studio Desktop：在 https://github.com/unslothai/unsloth/pull/15821 中 @danielhanchen 知道后端端口后同步固定模型和覆盖
* Studio：匹配 Hugeicons 权限图标，由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15944 中放大并顶部对齐
* 测试：从 #15850 开始对 torchao 导入探针进行基线测试，通过 https://github.com/unslothai/unsloth/pull/15948 中的 @danielhanchen 在真卡上进行 PrefixGrouper CUDA 测试
* 测试：遵循 https://github.com/unslothai/unsloth/pull/15946 中 @danielhanchen 的 #15919 中媒体标头的 MediaHeaderActions 行
* Studio：重音更新按钮、标准开关、@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15939 中每个含义一个图标
* Studio：问候语设置隐藏了整个问候语，作曲家位于底部选项，https://github.com/unslothai/unsloth/pull/15904 中@shimmyshimmer 无模型免责声明
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15926 中调用一个 json.dumps 来编写简单的配方导出行
* Studio：重用 https://github.com/unslothai/unsloth/pull/15792 中@danielhanchen 的 llama 服务器运行状况探测缓存的 TLS 上下文
* Studio：在 https://github.com/unslothai/unsloth/pull/15873 中读取 @danielhanchen 列出的每个检查点一次的运行历史记录
* Studio：在 https://github.com/unslothai/unsloth/pull/15953 中 @danielhanchen 进行个性化加载时保留外观编辑
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15930 中 @danielhanchen 在 VRAM 预算下为 Qwen-Image-Edit 的每个流式块上传运行两个指导分支
* 测试：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15957 的 torchao-too-new 测试中将 _gpu_init.py 读取为 UTF-8
* Studio：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15909 中同时对一批图库 PNG 进行编码
* Studio：跳过音频库 prune 的 sidecar 通道，并在 https://github.com/unslothai/unsloth/pull/15874 中每次扫描时列出 @danielhanchen 准备的输入一次
* 测试：mac tab walk 等待侧边栏安装，然后再由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15959 中判断固定行
* 工作室视频：MiniMax-H3 调节器引脚在 https://github.com/unslothai/unsloth/pull/15955 中的 @danielhanchen 的小型主机上产生流式降噪器
* 工作室视频：MiniMax-H3 未融合 Q / K / V 共享一个 ConvRot 旋转并由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15956 中进行量化
* CI：在 https://github.com/unslothai/unsloth/pull/15951 中 @danielhanchen 达到 2100 秒上限之前，将 Repo 测试（CPU、rest）和（CPU、gloo）分开
* Studio：说当远程访问开始时，自动打开https://github.com/unslothai/unsloth/pull/15849中@NilayYadav的公共URL
* Studio：每次压缩时对每个召回查询进行一次编码，并让 https://github.com/unslothai/unsloth/pull/15960 中的@danielhanchen 扩大存档范围
* Studio：从 https://github.com/unslothai/unsloth/pull/15961 中的@danielhanchen 通过 SQLite 触发器保持同步的内存中 numpy 矩阵回答密集 RAG 搜索
* Studio：将链接文件夹路径与 .gitignore 运行相匹配，而不是按 https://github.com/unslothai/unsloth/pull/15949 中的 @danielhanchen 的规则进行规则
* Studio：从 https://github.com/unslothai/unsloth/pull/15391 中 @NilayYadav 的训练页面链接到图像训练
* 工作室扩散：在小主机决策读取权重之前，第一次加载会下载权重，作者：https://github.com/unslothai/unsloth/pull/15974 中的 @danielhanchen
* 让决策模型在 https://github.com/unslothai/unsloth/pull/15864 中由 @NilayYadav 全新安装时导出到 GGUF
* Studio：阻止自动上下文在 Mac 上保留模型的整个窗口，作者：https://github.com/unslothai/unsloth/pull/15843 中的 @NilayYadav
* 测试：将 tqdm 的监视器线程保留在 https://github.com/unslothai/unsloth/pull/15992 中@danielhanchen 的 ShareGPT 无线程计数之外
* Studio：在https://github.com/unslothai/unsloth/pull/15865中@NilayYadav在unsloth start pi中保留用户的git身份和gh登录
* Studio：让 unsloth 从较小的上下文窗口开始，由 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15863 中开始
* Studio：重新启动崩溃的 GGUF 模型，而不是在 https://github.com/unslothai/unsloth/pull/15847 中显示 @NilayYadav 加载的模型
* 测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15987 中使 unsloth_cli/tests/test_start.py 在 Windows 上通过
* Studio：如果 GGUF 下载失败或被 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15846 中取消，则保留加载的模型
* Studio：测试逃逸货币是否能保持 https://github.com/unslothai/unsloth/pull/15820 中@NilayYadav 的长回复快速流式传输
* Studio：在 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15818 中回复流时，停止重新上传整个聊天内容
* 工作室：nvfp4 safetensors twins：转换器 0-dim 比较，拒绝安装的 torchao 无法展开的双胞胎，作者：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15977
* Studio：在 https://github.com/unslothai/unsloth/pull/15842 中的 @NilayYadav 完成 MLX 或 Transformers 加载时保持应用程序响应
* Studio：停止 KV 缓存类型，从https://github.com/unslothai/unsloth/pull/15819 中的 @NilayYadav 的最后一个模型到下一个模型
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15942 中共享 Recipe Studio 节点连接状态的一个边缘索引
* Studio：在 https://github.com/unslothai/unsloth/pull/15844 中加载@NilayYadav 更少的拥抱脸部请求的下载模型
* 测试：在 Windows 上通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15995 中的 MLX 修复最小路径查找测试中种植 uv.exe
* Studio：在 https://github.com/unslothai/unsloth/pull/15972 中的@danielhanchen 开始的压缩和修剪分支运行中重用词法传递和分支检查
* Studio：推荐一个适合 Mac Metal 预算的 Hub GGUF Quant，作者是@NilayYadav，https://github.com/unslothai/unsloth/pull/15848
* Studio：阻止 Claude CLI 计费行破坏 https://github.com/unslothai/unsloth/pull/15845 中的 @NilayYadav 的提示缓存
* 工作室视频：当密集演员阵容不适合 https://github.com/unslothai/unsloth/pull/15975 中的 @danielhanchen 的主机 RAM 时，在卡上设置一个 fp32 编码器
* Studio 设置：当 https://github.com/unslothai/unsloth/pull/15947 中的 @danielhanchen 未更改 OXC 验证器 npm ci 时，跳过 OXC 验证器 npm ci
* Studio扩散：当其bin目录不在https://github.com/unslothai/unsloth/pull/15853中@oobabooga的PATH上时，使用已安装的HIP SDK进行Windows ROCm sd.cpp构建
* Studio：通过 @YakshithK 在 https://github.com/unslothai/unsloth/pull/15899 中将单字符串列数据集训练为原始文本
* Unsloth Studio：MLX 上的 LFM3-Audio / LFM3-Omni，@Lyxot 在 https://github.com/unslothai/unsloth/pull/15889 中进行口头回复
*修复（工作室）：附加一个明确选择的MLX起草者，即使它的价格不适合https://github.com/unslothai/unsloth/pull/15813中的@Lyxot
* 测试：在 vec0 上保留 RAG 查询打包测试，同时内存中缓存由@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16013 中在后台构建
* Studio：在首次使用时加载聊天页面，而不是在 https://github.com/unslothai/unsloth/pull/15943 中 @danielhanchen 的启动包中加载
* 将 Unsloth Studio MLX 引脚移至 https://github.com/unslothai/unsloth/pull/15861 中的 @Lyxot 的 mlx-vlm 0.7.11
* 测试：将自动上下文适合地板定价为 https://github.com/unslothai/unsloth/pull/16014 中 @danielhanchen 的任何主机上的层分割路径
* 折叠空白行以文字为主导的模式运行（大约快 10 倍），作者：https://github.com/unslothai/unsloth/pull/15950 中的 @danielhanchen
* 工作室扩散：Qwen-Image 文本到图像激活种子将部分 int8 DiT 驻留在 https://github.com/unslothai/unsloth/pull/15985 中的 @danielhanchen 的 VRAM 预算之下
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15980 中 @danielhanchen 声明的每个 prequant .pt 之前请求托管 .safetensors 双胞胎
* Studio：批量MLX工具-协议、response_format和视频回复； https://github.com/unslothai/unsloth/pull/15920 中 @Lyxot 在 MLX 上的几个 clips 和 Gemma 4 视频
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15996 火车页面上的 API 按钮使用
* Studio：说明为什么 AI Assist 无法映射 https://github.com/unslothai/unsloth/pull/15991 中 @danielhanchen 没有提示/响应分割的数据集
* T4：将batch-4 NF4解码到bitsandbytes gemm_4bit，由@danielhanchen在https://github.com/unslothai/unsloth/pull/15988中运行
* 测试：将 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16025 中的训练 API 作业主体固定装置读取为 UTF-8
* Studio：将请求合同交给音频路由的治疗门，并在https://github.com/unslothai/unsloth/pull/16023中@danielhanchen的转动范围检查中遵循提升的audio_base64
* Studio：@Lyxot 在 https://github.com/unslothai/unsloth/pull/15954 中针对 MLX 模型的神经引擎预填充切换
* 工作室视频：比较没有块大小临时文件（H3 导出停顿）的流帧，作者：https://github.com/unslothai/unsloth/pull/16024 中的 @danielhanchen
* 工作室视频：在每个渲染上流式传输 mp4 字节，与库存导出相同（AVX-512 主机上的 AVX2 上的 libx264 上限），由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16030 中进行
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16027 中对降噪器进行流式传输时的 int8 Qwen-Image 文本流（在 16 GiB 预算下为 1.24 倍）
* Studio MCP：将 get_job wait_s 与固定限制绑定，而不是 https://github.com/unslothai/unsloth/pull/16033 中 @danielhanchen 的可修补 MAX_WAIT_S
* 批量 MoE LoRA：https://github.com/unslothai/unsloth/pull/16012 中 @danielhanchen 的每项工作的专家 LoRA 在 Zoo 内核上的一次分组传递
* Studio：吐司图标集中在一行上，在 https://github.com/unslothai/unsloth/pull/16050 中 @shimmyshimmer 的较长吐司上顶部对齐
* Studio：https://github.com/unslothai/unsloth/pull/15958 中的一组排序和过滤图标、较短的聊天卡、@shimmyshimmer 的工具栏工具提示
* 桌面：添加 GPU 渲染设置以及 https://github.com/unslothai/unsloth/pull/15482 中 @Etherll 的 Linux 启动崩溃回退
* GRPO：在 https://github.com/unslothai/unsloth/pull/16057 中保持由 @danielhanchen 的 vLLM 上下文限制削减的屏蔽完成
* 打包的 mRoPE flash 注意：覆盖一个填充的尾部，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16058 中编译时做出相同的决定
* 交叉熵：https://github.com/unslothai/unsloth/pull/16059 中 @danielhanchen 在 torch.compile(dynamic=True) 下的跟踪
* Scope WavLM 的 4 位注意力跳到 WavLM 自己的层，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16060 中实现
* gpt-oss：接受https://github.com/unslothai/unsloth/pull/16061中@danielhanchen在本地模型目录中的绝对transformers_weights
* MXFP4 torch 解码后备：在 https://github.com/unslothai/unsloth/pull/16062 中 @danielhanchen 在操作数的 GPU 上运行 ldexp
* FP8 scaled_mm：在 https://github.com/unslothai/unsloth/pull/16063 中保持火炬上的原生 fp16 输出 >= 2.14 by @danielhanchen
* 上下文并行性：在张量并行性旁边拒绝它，而不是在 https://github.com/unslothai/unsloth/pull/16068 中@danielhanchen 训练错误的损失
* 工作室视频：将 CFG 对批处理为 https://github.com/unslothai/unsloth/pull/16067 中 @danielhanchen 编译的驻留 Wan 降噪器的一次调用
* 上下文并行：允许纯文本 Qwen3.5 检查点，在 https://github.com/unslothai/unsloth/pull/16072 中携带 @danielhanchen 的 Vision_config
* Studio：https://github.com/unslothai/unsloth/pull/16076 中 @shimmyshimmer 在 WebKit 中切换聊天时让作曲家保持静止
* Studio：停止聊天编辑器草稿镜像到https://github.com/unslothai/unsloth/pull/15795中@debojyoti-dev的其他打开的选项卡
* float16：同意 GradScaler 跳过管道阶段，扩展 CP 启动，探测 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16070 中的 float16 FP8 GEMM
* Studio：调整令牌计数超时，以便可以通过 https://github.com/unslothai/unsloth/pull/15900 中的@oobabooga 压缩长聊天
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/15945 中列出 @Lyxot 在 /v1/models 中批准的自定义代码模型
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15876 中将图像从一个插槽拖动到另一个插槽
* Studio：在https://github.com/unslothai/unsloth/pull/16000中@danielhanchen在完成屏蔽删除行时命名太短的上下文长度
* Studio：将图像和视频预设下拉列表与 https://github.com/unslothai/unsloth/pull/16081 中的 @shimmyshimmer 的标题顶部对齐
* 测试：集线器 GGUF 卡中的存根 @/lib/folder-icons 金属预算测试由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16082 中进行
* Studio：填补区域设置空白并翻译 https://github.com/unslothai/unsloth/pull/16069 中的 @shimmyshimmer 的登录、同意和桌面启动屏幕
* Studio：在 https://github.com/unslothai/unsloth/pull/16077 中@shimmyshimmer 下拉菜单取消后，click 中没有文本选择
* Studio：让对话搜索返回 https://github.com/unslothai/unsloth/pull/16036 中@NilayYadav 适合的每个较早回合
* 桌面：在 https://github.com/unslothai/unsloth/pull/15503 中的 @Etherll 提供时，在主机的 WebKitGTK 2.54+ 上运行 AppImage
* Studio：在 https://github.com/unslothai/unsloth/pull/16089 中添加西班牙语（拉丁美洲）作为显示语言 @shimmyshimmer
* Studio：在https://github.com/unslothai/unsloth/pull/16039中@NilayYadav下载的配方数据集中包含模式转换输出
* Studio：仅从 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16004 中的 gpt-oss 答案中剥离和谐协议令牌
* 工作室聊天：在 https://github.com/unslothai/unsloth/pull/15998 中@danielhanchen 在下一帧上发布保留的流文本，而不是等待下一个块
* Studio：https://github.com/unslothai/unsloth/pull/16037 中的 @NilayYadav 在 Studio 启动后立即停止跳过预定的运行
* Studio：在 https://github.com/unslothai/unsloth/pull/15978 中对 @danielhanchen 的地图样式数据集的原始文本空白行过滤器和 EOS 追加进行批处理
* Studio：在 <function=...> 中读取 JSON 主体，而不是在 https://github.com/unslothai/unsloth/pull/16008 中由 @danielhanchen 运行不带参数的调用
* 测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16088 中对仅 CPU 的火炬运行 MXFP4 操作数设备防护检查
* 报告 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/15536 中进行图像训练期间测量的模型加载和 4 位转换
* Studio：在 https://github.com/unslothai/unsloth/pull/16044 中 @NilayYadav 允许的情况下，让管理帐户使用本地 MCP 服务器
* Studio：int8 Qwen-Image 通过融合 GEMV 进行流式调制（16 GiB 预算下为 1.23 倍），由@danielhanchen 在 https://github.com/unslothai/unsloth/pull/16087 中进行
* Studio：从磁盘调整缓存的 DFlash sidecar 的大小，而不是在每次加载时询问集线器 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15986
* 在 https://github.com/unslothai/unsloth/pull/15968 中通过 @dependabot[bot] 在 / 中碰撞 trufflesecurity/trufflehog
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/16079 中 @Lyxot 保持较长的 MLX 视觉聊天提示快照超过缓存预算
* 在https://github.com/unslothai/unsloth/pull/15966中通过@dependabot[bot]在/中碰撞swatinem/rust缓存
* 通过 https://github.com/unslothai/unsloth/pull/15964 中的 @dependabot[bot] 将 github/codeql-action init 碰撞并分析到 v4.39.1
* 碰撞动作/设置-python / by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15963
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/15962 中对 /studio/backend/core/data_recipe/oxc-validator 中的 npm-oxc-validator 组进行 3 次更新
* Studio：在 https://github.com/unslothai/unsloth/pull/16086 中为 @danielhanchen 的 Hub 共享 blob 缓存文件保留驻留 GGUF 的存储库身份
* 修复（eval）：在 https://github.com/unslothai/unsloth/pull/15984 中保留 @hsusul 显式的 YAML 任务名称
* Studio：仅当 llama-server 可以在 https://github.com/unslothai/unsloth/pull/16094 中由 @danielhanchen 启动 ffmpeg 和 ffprobe 时才提供视频输入
* 测试：遵循 https://github.com/unslothai/unsloth/pull/16090 中@danielhanchen 的#16069 中的本地化更新横幅
* Studio：将附加文档保留在 https://github.com/unslothai/unsloth/pull/16019 中@NilayYadav 的深度研究报告中
* 桌面：在 Linux 上切换主题，无需视图转换，作者为 https://github.com/unslothai/unsloth/pull/16040 中的@oobabooga
* Studio：从 https://github.com/unslothai/unsloth/pull/15788 中的@alkinun 提供者 JSON 验证失败中恢复 Deep Research
* Studio：当 llama-server 在 https://github.com/unslothai/unsloth/pull/16002 中的@danielhanchen 流式传输之前拒绝答复时，请再次询问 llama-server，并关闭其工具解析器
* Studio：默认深度研究对 https://github.com/unslothai/unsloth/pull/15983 中@NilayYadav 的每个模型请求没有时间限制
* Studio 安装程序 (Windows)：避免在 https://github.com/unslothai/unsloth/pull/16016 中 @oobabooga 无法使用 CUDA torchao 轮
* Studio：共享一个正在运行的媒体模型索引构建，以便启动检查不会由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16075 中扫描两次
* 通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/15799 中为计划任务添加自定义每小时间隔
* 工作室图片：在 MLX 和扩散器上启用 GGUF LoRA，并在 https://github.com/unslothai/unsloth/pull/16053 中的@oobabooga 不可用时进行解释
* Studio：在 https://github.com/unslothai/unsloth/pull/16083 中批量读取流式数据集切片，而不是逐行读取 @danielhanchen
* Studio 扩散：在 https://github.com/unslothai/unsloth/pull/16031 中 @oobabooga 测试启动不带 Windows 缺失 DLL 框的 sd.cpp 二进制文件
* 工作室扩散：Qwen-Image 文本到图像流式放置在 https://github.com/unslothai/unsloth/pull/16095 中的 @danielhanchen 的 VRAM 预算下使用自己的激活图
* Studio：下载 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16047 中计划的提交清单
* Studio：float32 单元行中的矢量缓存，具有流式构建、就地追加和有界块扫描，由 https://github.com/unslothai/unsloth/pull/16093 中的 @danielhanchen 提供
* Studio：在https://github.com/unslothai/unsloth/pull/15973中添加@wasimysaid的可定制聊天背景图像和效果
* Studio：在 https://github.com/unslothai/unsloth/pull/16003 中 @danielhanchen 的工具循环后，将裸 JSON 工具调用保留在最终答案之外
* Studio：将 OpenCode Zen 和 OpenCode Go 添加到 https://github.com/unslothai/unsloth/pull/16010 中 @NilayYadav 的 Connections
* 工作室：尊重 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/16020 上的 /v1/audio/speech 速度
* Studio：按块编译 SDXL U-Net，因此第四个图像不再等待 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16085 中的整个编译
* Studio：停止提供 @oobabooga 在 https://github.com/unslothai/unsloth/pull/16048 中无法加载 audio.cpp 的 VibeVoice q4-ios GGUF
* Studio：恢复一个已关闭的工具调用，其单个代码参数具有 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/16006 中的未转义引号
* Studio：将 MiniMax 添加到 https://github.com/unslothai/unsloth/pull/16011 中 @NilayYadav 的 Connections

## 新贡献者
* @YakshithK 在 https://github.com/unslothai/unsloth/pull/15899 中做出了第一个贡献
* @hsusul 在 https://github.com/unslothai/unsloth/pull/15984 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.912-beta...v0.1.913-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.913-beta` · 📅 发布：2026-10-30 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.913-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
