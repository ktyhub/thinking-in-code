---
title: "unsloth v0.1.912-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.912-beta"
version: "v0.1.912-beta"
published: "2026-10-28"
type: "pre"
lang: "zh"
---

# unsloth v0.1.912-beta

万圣节👻来了。整个十月份，侧边栏中的“不给糖就捣蛋”行会打开十一个万圣节主题、怪异的问候语以及一些蜘蛛和蝙蝠。

该版本还加快了首次启动、Linux 工具调用和模型加载速度，并与多 LoRA 一起训练兼容的微调作业。

<p对齐=“中心”>
<img width="500" alt="Unsloth 应用" src="https://github.com/user-attachments/assets/36f5a627-e30c-461a-bf55-508aa3f30fb4" />
</p>



## 亮点

- **Trick or treat**：🎃 新万圣节主题 - 截止 11 月 1 日
- **更快的 Unsloth**：首次启动速度提高 2 倍，工具调用、模型列表、数据集准备和 MiniMax-H3 加载速度也加快
- **多 LoRA 批处理**：最多 4 个兼容的排队微调作业一起训练
- **SGLang 思考 + 自动压缩**：Resume 和 JSON 输出现在也适用于 vLLM 和 SGLang
- **浏览器使用开关**：让模型从新标签页控制内置浏览器

## 优化

- 安装程序现在预编译 Python 文件，因此首次启动速度大约提高 2 倍。
- 在 Linux 上，工具调用在 1 到 2 毫秒内开始，而不是 2 GB 服务器进程的 84 到 174 毫秒。
- 由于有 497 个缓存模型，模型列表使用的 CPU 时间大约是原来的三分之一。
- 在我们的测试中，为 Gemma 3 4B 准备 1,000 行聊天数据集使用了 1.75 而不是 6.6。
- MiniMax-H3 在 49 秒内加载，而不是 Linux A100 上的 61 秒。

## 多 LoRA + API

当多个兼容作业在微调队列中等待时，Unsloth 现在会将它们一起训练，每个作业在共享基础模型上都有自己的 LoRA 适配器。

- GPU 繁忙时发送的作业按顺序排队，每个作业都可以自行取消。
- 加载作业的 `fine_tuned_model` 名称以与其训练有素的适配器聊天。
- `/v1/videos` 请求现在在 clip 渲染时排队，并且对匹配的 `/v1/images/generations` 请求进行批处理。

**它是如何运作的**

- 新的 Triton 内核每批次运行一次基础层，而每个适配器仅从自己的令牌中学习，并具有自己的损失和学习率。
- 使用 4 个适配器时，4096x4096 层的前向和后向传递的运行速度比一次使用一个适配器快 1.52 倍（A100、bf16、等级 16）。

## 聊天+工具

- 本地模型会跳过达到输出限制的工具调用，因此半写入的 `cat > app.py` 无法覆盖文件。
- 之前，截止重写将 RTX 3090 上的 175 行测试文件缩减至 6 行。
- Qwen3 和 DeepSeek R1 等思维模型现在可以在 SGLang 上显示其推理和 Think 切换。
- 启用自动压缩功能后，长时间的 SGLang 聊天会放弃最旧的回合并继续回答。
- 在 vLLM 和 SGLang 上，您可以恢复在 Max Tokens 处中断的回复，并使用 `response_format` 请求 JSON。

## 浏览器+桌面

- 浏览器的新标签页有一个**浏览器使用**开关，可以让模型控制浏览器。
- 在桌面上，用于临时聊天的浏览器代理不再将页面添加到您的历史记录中。
- 在装有 Safari 18.4 或更早版本的 macOS 上，桌面浏览器选项卡及其关闭按钮再次可用。
- **注销**现在位于 Unsloth 桌面用户菜单中。

## 不给糖就捣蛋

**不给糖就捣蛋…**行位于侧边栏中的**更多**上方，可打开万圣节菜单。

- 选择十一个主题之一，例如南瓜、女巫集会和幽灵船，每个主题都有浅色和深色模式。
- 打开**诡异的问候**，新的聊天会以万圣节线路和树懒打开。
- 随着**蜘蛛和蝙蝠**开启，万圣节主题会出现奇怪的蜘蛛和蝙蝠穿过窗户。
- 不确定哪个主题？ **不给糖就捣蛋！**随机挑选一个。

Unsloth 在 11 月 1 日午夜恢复正常，或者通过 **立即删除** 立即恢复正常。

## 培训

- Gemma 4 E2B 和 E4B 现在在训练中保留数据集的思考文本，而不是丢弃它。
- 新的聊天训练设置打开序列打包和**辅助完成**，其中模型和数据支持它们。
- 即使后面的行添加新键，本地 JSON 和 JSONL 数据集也会加载。

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
* 工作室图像：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15365 中提示上采样器不可用时，不祝酒
* 将 install.sh / install.ps1 引脚插入 https://github.com/unslothai/unsloth/pull/15380 中的 @danielhanchen 的 unsloth>=2026.10.9
* TP Trainer 奇偶校验测试：使用 eps 1e-4 运行 AdamW，因此 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15381 中不会放大降阶噪声
* Studio：每层嵌入的价格和 Engram 查找表作为主机或磁盘存储器，而不是 https://github.com/unslothai/unsloth/pull/14465 中 @danielhanchen 的 VRAM
* 工作室视频：在 PIL / uint8 转换或钳位隐藏每个系列之前拒绝 NaN / inf 解码，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15374
* 提示队列：行按钮标签不采用下一行的 clicks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15383
* Studio扩散：在https://github.com/unslothai/unsloth/pull/15393中@danielhanchen的返回负载上预先播种后台编译的浮动专业化
* Studio sd.cpp：验证新捆绑包在替换已安装捆绑包之前启动；没有 HIP SDK 的 Windows ROCm 在 https://github.com/unslothai/unsloth/pull/15371 中使用 @danielhanchen 的 Vulkan
* TP Trainer 奇偶测试：将 eps 1e-4 保持为 UNSLOTH_TP_SIZE 运行，本机 Trainer 在 https://github.com/unslothai/unsloth/pull/15397 中由@danielhanchen 恢复默认运行
* 多帐户 Playwright：当应用程序自己的注销重定向中止登录页面时，重试登录页面一次，作者：https://github.com/unslothai/unsloth/pull/15398 中的 @danielhanchen
* 工作室视频：拒绝在 https://github.com/unslothai/unsloth/pull/15394 中 @danielhanchen 的原生 MiniMax-H3 路线上进行 NaN 渲染
* TP x FSDP2 奇偶校验测试：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15400 中针对 phi3 融合分片的每架构步范数容差
* FSDP2 / DDP：仅保留 torchao 权重 FSDP2 无法从 full_shard 中分片以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15373 中广播的 DDP
* Studio后端测试：关闭范围内的MCP会话，测试由@danielhanchen在https://github.com/unslothai/unsloth/pull/15407中缓存
* 当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15396 中设置标签平滑时，在 DFT 目标上保留 SFT loss_type="dft"
* 加载器：不要在https://github.com/unslothai/unsloth/pull/15364中@danielhanchen的反量化权重上恢复fp8量化配置
* FSDP2 位和字节：没有每参数设备同步，优化器中的有限 GPU 内存由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15384 中保存
* 张量并行：生成、适配器/分词器保存、合并和 GGUF 导出，以及在 https://github.com/unslothai/unsloth/pull/15368 中由 @danielhanchen 重新加载 UNSLOTH_TP_SIZE 下的单元
* 张量并行：fp32 中的平均 fp16 dp 梯度，因此有限梯度不能与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15415 中求和为 inf
* FSDP2：在https://github.com/unslothai/unsloth/pull/15426中由@danielhanchen清除native_fsdp2_unsharded中的后转发网格之前收集
* gpt-oss：在 https://github.com/unslothai/unsloth/pull/15386 中探测 @danielhanchen 的专家布局时，在标准文件名之前读取 config.transformers_weights
* 本机 FSDP2 fp16 缩放器：在没有显式 unscale_ 的情况下就等级溢出达成一致，并在 https://github.com/unslothai/unsloth/pull/15416 中的 @danielhanchen 为所有设备上的融合优化器提供一个 0 / 1 标志
* 注意：打包的 fp32 重新路由到 xformers 会保留 fp32 输出，而不会由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15410 中自动转换
* 测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15454 中修复 main 上的两个欺骗安全 lint 故障
* 工作室测试：在 https://github.com/unslothai/unsloth/pull/15457 中 @danielhanchen 开始下一个之前，对每个 FIFO 准入服务员进行排队
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15406 中的 @danielhanchen 的返回负载上预先播种降噪器编译的浮点专业化
* 当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15425 中的变压器 5.21 上更换 rod_scaling 时，保留 DeepseekV4 每个标签的绳索底座
* Studio：将聊天栏置于 WebKit 中经典滚动条的中心，作者为 https://github.com/unslothai/unsloth/pull/15392 中的 @shimmyshimmer
* Studio：https://github.com/unslothai/unsloth/pull/15469 中的“设置”>“沙盒”中的每个权限模式切换，作者为 @shimmyshimmer
* Studio：运行设置分隔符、预设选择器填充和清除器始终由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15472 中加载
* Studio：顶部对齐共享行组件未由 https://github.com/unslothai/unsloth/pull/15468 中的 @shimmyshimmer 覆盖的设置行
* Studio：图书馆聊天、项目和部分卡由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15471 中保持一种尺寸
* Studio：https://github.com/unslothai/unsloth/pull/15470 中 @shimmyshimmer 的更新通知上的实体主按钮
* Studio：一个选项卡行后面的 API 示例、一个访问组、@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15467 中修复的 API 页面
* Studio：将音频编辑步骤编号作为文本，https://github.com/unslothai/unsloth/pull/15484 中 @shimmyshimmer 的标准转录图标
* Studio：通过 https://github.com/unslothai/unsloth/pull/15486 中的 @shimmyshimmer 调整转录图标的大小
* Studio扩散：在https://github.com/unslothai/unsloth/pull/15455中固定Qwen-Image-2.1的reduction-config过滤器（相同种子，跨进程相同图像）
* 保存：按位比较融合的 4 位专家字节以获取 https://github.com/unslothai/unsloth/pull/15378 中 @danielhanchen 的 float quant_storage
*版本兼容：变形金刚5.21.0在https://github.com/unslothai/unsloth/pull/15438中被@danielhanchen标记为v5.21上游
* 工作室测试：关闭集线器遥测，其中 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15453 中对模拟集线器请求进行计数
* Studio 测试：除了 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15459 中的缓存断言之外，探测 int8 CPU 量化 + 扁平化
* FP8 块解码：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15361 中选择 torchao 时，保留 fp16 的融合小 M 内核
* QAT：https://github.com/unslothai/unsloth/pull/15385 中 @danielhanchen 在 FSDP1 和 torch.func.function_call 下的假量化嵌入
* 路由重播：在 https://github.com/unslothai/unsloth/pull/15387 中@danielhanchen 为名为 PEFT 参考适配器的得分以及它们自己的路由而评分
* torchrun 下的 fast_inference：每个等级都采用 https://github.com/unslothai/unsloth/pull/15395 中@danielhanchen 相同的 vLLM-or-HF 路径
* 设置合约测试：跟随MonitorLink进入https://github.com/unslothai/unsloth/pull/15500中@danielhanchen的API页面访问组
* FSDP2 分片加载 gloo 测试：在 https://github.com/unslothai/unsloth/pull/15499 中 @danielhanchen 拆散其组之前的屏障
* MXFP4 打包的 matmul：绑定 dX 解码，如 https://github.com/unslothai/unsloth/pull/15376 中 @danielhanchen 的 sm_80 下面的前向
* Studio：橙色 权限菜单中的完全访问权限、沙盒文档链接、由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15504 中确认
* 工作室视频：在降噪器卸载后调整可用内存中的 VAE 解码大小（更宽的图块，无论 CUDA 图形是保留还是删除，clip 都相同）由 https://github.com/unslothai/unsloth/pull/15464 中的 @danielhanchen
* Studio：为 https://github.com/unslothai/unsloth/pull/15437 中 @danielhanchen 连接上的每个 GPT 转录模型保留时间戳
* for_training 标志测试：提升 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15493 中达到的每个 _utils 帮助程序 for_training
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15474 中 @danielhanchen 在统一内存防护之前调整托管 H3 文本编码器的大小
* Studio 引擎：vLLM 中的 certifi 2026.10.19 和 https://github.com/unslothai/unsloth/pull/15495 中的 @danielhanchen 的 SGLang 锁
* 测试：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15498 的 for_training 提取工具中存根张量并行防护
* Studio：使用共享下载管理器进行 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15476 中的扩散培训
* 精确冲突测试：提升每个 loader.py 助手 from_pretrained 达到的 https://github.com/unslothai/unsloth/pull/15515 中的 @danielhanchen
* MXFP4 低内存测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15516 中对真实 CUDA 设备进行分块 dX 预算测试
* 在 https://github.com/unslothai/unsloth/pull/14648 中添加 @danielhanchen 的批量多 LoRA 训练内核
* Studio：按目标设备对主机固定进行分类，而不是 https://github.com/unslothai/unsloth/pull/15463 中@danielhanchen 的当前设备
* Studio：帐户托管 https://github.com/unslothai/unsloth/pull/15487 中 @danielhanchen 缓存清理中每个图像和视频系列的量化组件
* Studio ROCm：在不保护密钥长度上的查询长度的情况下告诉自己来自交叉注意，作者：https://github.com/unslothai/unsloth/pull/15458 中的 @danielhanchen
* 扫描基线：重新审查 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15524 中移动的七个非树懒动物园站点 2026.10.9
* 修复（工作室）：在 https://github.com/unslothai/unsloth/pull/15528 中 @wasimysaid 将悬停圆圈中的侧边栏标题图标居中
* Studio：https://github.com/unslothai/unsloth/pull/15523 中@shimmyshimmer 的“与文件聊天”标题下的间隙更紧密
* 保持 Mamba x_proj 和 out_proj 未量化，以用于 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15377 中的融合 mamba_ssm 训练路径
*工作室扩散：将编译后的 int8 W8A8 保持线性等于或低于渴望峰值，荣誉力渴望由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15456
* Studio：视频创建和训练选项卡、媒体标题图标、https://github.com/unslothai/unsloth/pull/15520 中 @shimmyshimmer 链接的图像和视频
* Studio：更多菜单悬停药丸和行高，https://github.com/unslothai/unsloth/pull/15519 中@shimmyshimmer 分组聊天选项菜单
* Studio：@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15522 中出现滚动条时，媒体导轨保持其宽度
* Studio：https://github.com/unslothai/unsloth/pull/15530 中的 @shimmyshimmer 的预设和 Inpaint 图标、对齐的预设保存行、选定高度的组件文件字段
* 修复（studio）：将标题菜单点居中，而不放大它们（@wasimysaid 在 https://github.com/unslothai/unsloth/pull/15534 中）
* 全面微调：https://github.com/unslothai/unsloth/pull/15367 中的@danielhanchen 对负载上的 FP8 块检查点进行反量化
* FP8 TMA 块 GEMM：通过 https://github.com/unslothai/unsloth/pull/15372 中的 @danielhanchen 削减每次调用描述符主机成本
* float8_training：在 https://github.com/unslothai/unsloth/pull/15363 中 @danielhanchen 的转换层上保留 Accelerate 调度挂钩
* CPU后端：在https://github.com/unslothai/unsloth/pull/15501中由@danielhanchen导出load_ebook_dataset、RawTextDataLoader和TextPreprocessor
* Flex 注意：将 float32 Gemma 3 远离 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15401 中的 sm86 / sm89 小瓷砖
* 集中注意力：在 https://github.com/unslothai/unsloth/pull/15402 中 @danielhanchen 提供缓存的 varlen 元数据之前重新检查 SDPA 策略
* Studio：浏览器使用https://github.com/unslothai/unsloth/pull/15540中@shimmyshimmer在浏览器新标签页上的开关
* Studio：在 https://github.com/unslothai/unsloth/pull/15544 中的“设置”>“API”中通过 @shimmyshimmer 前往 API 显示器卡
* Fused LoRA：merge_and_unload / unload 后的解冻普通线性由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15399 中运行自己的转发
* RoPE 覆盖：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15403 中标准化每层类型配置上的旧类型密钥
* FSDP2：当只有 `import unsloth` 包装 https://github.com/unslothai/unsloth/pull/15427 中的 @danielhanchen 的 Trainer 时，保持 use_cpu 回收可达
* Studio扩散：不要缓存@danielhanchen在https://github.com/unslothai/unsloth/pull/15511中为fp16解码重新缩放的VAE
* Studio：识别 model.safetensors-N-of-M 分片以用于训练简历 (#15405) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/15408
* 有风险的加载器基线：在 https://github.com/unslothai/unsloth/pull/15549 中记录 @danielhanchen #15501 中的 CPU 后端数据准备加载器
* 保留封装的 Inductor pass 的 None uuid 作为缓存选择退出，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15429 中
* FSDP2 SentenceTransformer 保存：尊重 create_model_card=False 并保持 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15431 中的训练模式
* 在 https://github.com/unslothai/unsloth/pull/15450 中遵循 @NilayYadav 的工具包安装程序命令时保留 Unsloth Studio 数据
* 工作室扩散：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15446 的 T4 常驻升级后保持 SDXL ControlNet 运行
* 桌面前端合同：按照 https://github.com/unslothai/unsloth/pull/15550 中 @danielhanchen 的媒体标题链接到其图标按钮
* NVFP4 QAT：将假量化线性排除在 https://github.com/unslothai/unsloth/pull/14812 中 @danielhanchen 的编译图中
* 集中注意：在启用 grad 的情况下运行图内 varlen 探针，因此检查点的 no_grad 第一个跟踪将 @danielhanchen 的 varlen 路径保留在 https://github.com/unslothai/unsloth/pull/15414 中
* 笔记本同步持久性测试：按州自己的顺序挑选被遗弃的恢复受害者，作者为 https://github.com/unslothai/unsloth/pull/15548 中的 @danielhanchen
* 工作室传播：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15542 中为 Qwen-Image-Edit 放置提供了激活种子
* Studio：在 https://github.com/unslothai/unsloth/pull/15288 中@debojyoti-dev 重播的助手文本中中和 DeepSeek-V4.1 的图像标记
* Studio：在 https://github.com/unslothai/unsloth/pull/15512 中由 @danielhanchen 揭示聊天的沙盒文件夹仅供所有者使用
* Studio：从自己的片中调整 MIG CUDA 实例的大小，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15465 中的物理卡行
* 工作室视频：https://github.com/unslothai/unsloth/pull/14958 中 @danielhanchen 导出的两遍 GIF 中每帧的调色板生成
* 工作室培训：描述公共镜像访问与 https://github.com/unslothai/unsloth/pull/15475 中 @danielhanchen 的模型许可分开
* 工作室视频：MiniMax-H3 仅缓存加载丢失文件的名称以及如何修复它，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15547 中提供
* QK 范数 + RoPE 向后：固定 dX 收缩，因此编译的 fp16 与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15506 中的 ROCm 上渴望匹配
* 块编译：将 Unsloth 自己的编译区域与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15526 中的用户封闭编译区分开
* Studio：在带有 Safari 18.4 的 macOS 上保持浏览器选项卡 clickable，以及 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14368 中的更早版本
* 拒绝 UNSLOTH_TP_SIZE 下的 Trainer(model_init=...)，而不是在 https://github.com/unslothai/unsloth/pull/15424 中默默地跳过 @danielhanchen 的张量并行
* 工作室扩散：https://github.com/unslothai/unsloth/pull/15543 中 @danielhanchen 在 fp16 eager Z-Image 路径上融合 RMSNorm
* 工作室扩散：在多 GPU FLUX.2 klein 分割上保留参考余量，以便 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14858 中不会拒绝编辑
* cuDNN SDPA 向后：为 grad_output 提供火炬 2.6 - 2.13 上 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15445 上的输出布局
* Studio：在 https://github.com/unslothai/unsloth/pull/15432 中显示 @NilayYadav 的 vLLM 模型的聊天种子设置
* Studio：拒绝重复使用的临时文件夹，其他用户仍然可以在 https://github.com/unslothai/unsloth/pull/14962 中由 @danielhanchen 读取该文件夹
* Studio 本机缓存写入：在写入时从实时模块读取每个权重，以便卸载可以通过 https://github.com/unslothai/unsloth/pull/15461 中的 @danielhanchen 回收 VRAM
* Studio：在 GPU 繁忙时对 OpenAI 微调作业进行排队 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14645 中
* Studio：对 https://github.com/unslothai/unsloth/pull/15433 中 @NilayYadav 的 SGLang 引擎所服务的模型的思考支持
* Studio扩散：将分块的int8 W8A8结果直接存储到@danielhanchen在https://github.com/unslothai/unsloth/pull/15533中的输出行中
* Studio：将临时聊天的浏览器代理页面保留在历史记录中，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/14956
* REAP：接受由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14850 中合并到 PEFT 0.18 上的 LoRA 模型
* 使单分完成 GRPO 测试遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14775 中的 TRL 版本
* MXFP4 反量化分支测试：运行 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15558 中分支在其前面读取的局部变量
* Studio：为旧的 llama.cpp 版本重新拼写用户 ngram-mod 额外参数，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14880 中构建
*修复（工作室）：在https://github.com/unslothai/unsloth/pull/15517中通过@Lyxot对add（）之前的推测性视觉批处理行的预填充进行计时
* Studio：在 https://github.com/unslothai/unsloth/pull/15442 中 @NilayYadav 在整个单词上开始重叠文档块
* Studio：将托管节点更新为 24.22.1，在每个更新路径上应用新引脚，并通过 @oobabooga 在 https://github.com/unslothai/unsloth/pull/15423 中保持引脚最新
* 保留每个unsloth eval运行的结果，而不是覆盖@NilayYadav在https://github.com/unslothai/unsloth/pull/15451中的最后一个结果
* Studio：通过 @Lyxot 在 https://github.com/unslothai/unsloth/pull/15323 中跟踪 MPS 降噪进度。
* 修复（工作室）：当 unsloth-zoo 在 https://github.com/unslothai/unsloth/pull/15508 中通过 @Lyxot 加载 DeepSeek-V4.1 oQ 量化时，对 DeepSeek-V4.1 oQ 量化进行定价
* Studio 引擎：根据 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15509 中的 Studio 证书包验证 TLS
* Studio：将 llama-bench 保留在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14881 中安装的 llama.cpp 中
* Studio：在 https://github.com/unslothai/unsloth/pull/14948 中 @danielhanchen 批准的主机调用中，将聊天安装的软件包排除在插件发现之外
* Studio：保留 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15440 中在另一个窗口中制作的侧边栏部分和收藏夹
* feat(studio)：当 @Lyxot 在 https://github.com/unslothai/unsloth/pull/15507 中加宽模型不适合时，将 ComfyUI fp8 图层存储为 Apple MPS 上的 fp8
* Studio：在 https://github.com/unslothai/unsloth/pull/15478 中 @danielhanchen 支持的情况下启用打包和仅限助手的默认训练
* 工作室美人鱼守卫：引用的@{无法隐藏https://github.com/unslothai/unsloth/pull/14907中@danielhanchen后来的远程图像
* Studio：升级仅由 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15443 中安装的聊天后，保持文档可搜索
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15563 中映射 MiniMax-H3 托管的 int8 检查点，而不是读取整个内容（更快的加载，相同的权重）
* Studio：在 https://github.com/unslothai/unsloth/pull/15439 中倒回超过四个文件夹深度的文件，由 @NilayYadav 提供
* 工作室视频：在 https://github.com/unslothai/unsloth/pull/15564 中固定 MiniMax-H3 的缩减配置过滤器（相同的种子，相同的 clip 跨进程）
* Studio：在 https://github.com/unslothai/unsloth/pull/15344 中通过@danielhanchen 与多 LoRA 一起训练兼容的排队微调作业
* feat(studio)：在 https://github.com/unslothai/unsloth/pull/15369 中@Lyxot 在“设置”中显示 MLX 版本
* GRPO 保留设置的拒绝：删除 https://github.com/unslothai/unsloth/pull/15531 中 @danielhanchen 的自动默认措辞
* Studio：当图像或视频模型在 https://github.com/unslothai/unsloth/pull/15358 中通过 @Lyxot 占用 GPU 时，保留 MLX 聊天上下文
* Studio：当 https://github.com/unslothai/unsloth/pull/15441 中的 @NilayYadav 忽略文件时，保持链接文件夹同步
* Studio：在 https://github.com/unslothai/unsloth/pull/15435 中@NilayYadav 在 vLLM 和 SGLang 上恢复截止回复和结构化输出
* 在 https://github.com/unslothai/unsloth/pull/15452 中运行@NilayYadav 的 unsloth start codex 时保留 Codex MCP 服务器
* Unsloth：在 https://github.com/unslothai/unsloth/pull/15496 中显示 @Imagineer99 的完整聊天错误消息
* Studio扩散：将前面的slab固定在注册的主机内存中（更快的加载，相同的字节）由https://github.com/unslothai/unsloth/pull/15562中的@danielhanchen
* cuDNN SDPA DTensor 测试：https://github.com/unslothai/unsloth/pull/15582 中 @danielhanchen 在真实 CUDA 设备上的门
*修复（工作室）：在https://github.com/unslothai/unsloth/pull/15342中@Lyxot的自动卸载计划中为MLX起草者腾出空间
* Studio：通过 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15449 中通过作业返回的名称与微调模型聊天
* Studio：在 https://github.com/unslothai/unsloth/pull/15434 中 @NilayYadav 在 SGLang 引擎上自动压缩长聊天
* 工作室视频：按字节定价延迟引脚，以便返回的 Wan 负载通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15612 中引脚其文本编码器
* gpt-oss：拒绝在没有 bfloat16 的 GPU 上使用 dtype float32 融合 4 位，作者：@danielhanchen，https://github.com/unslothai/unsloth/pull/15614
*工作室：在 https://github.com/unslothai/unsloth/pull/15610 中 @danielhanchen 估计的托管引擎拟合中为整个回复上限留出空间
* 在 https://github.com/unslothai/unsloth/pull/15293 中 @Imagineer99 在同一 Unsloth 服务器的 client 上保留聊天引脚
* 视频编码器引脚测试：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15623 中将 video.py 读取为 UTF-8
* Studio：在清除所有删除 https://github.com/unslothai/unsloth/pull/15570 中 @NilayYadav 的桌面记录历史记录之前询问
* 测试：阻止 pytest 9.2 Monkeypatch 删除 Torch 配置条目，并命名 https://github.com/unslothai/unsloth/pull/15626 中 @danielhanchen 仍在执行的任何测试
* 导入葫芦验证器：在其定义移动后重新指向的本地导入与 https://github.com/unslothai/unsloth/pull/15622 中的@danielhanchen 不发生冲突
*修复（工作室）：在https://github.com/unslothai/unsloth/pull/15421中@Aafimalek拆解模型之前拒绝独立的GGUF适配器
* 后端 CI：在 https://github.com/unslothai/unsloth/pull/15624 中将 pytest 固定在 @danielhanchen 的 9.2 下方
* 工作室：Qwen-Image-Edit 流式层激活种子将更多 DiT 居民保留在 https://github.com/unslothai/unsloth/pull/15645 中@danielhanchen 的紧卡上
* Studio：图书馆卡在每次缩放时都分开，一种尺寸，每行 5 张，作者：@shimmyshimmer，https://github.com/unslothai/unsloth/pull/15643
* 工作室：音频领域标题不再专注于他们的领域，更安静可选标签由@shimmyshimmer在https://github.com/unslothai/unsloth/pull/15651
* 测试：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15638 中 --dist loadgroup 停止分组（pytest 9.2）时，按名称分组测试失败
* Studio：https://github.com/unslothai/unsloth/pull/15640 中 @shimmyshimmer 的 Train 风格导出页面、Train 优化、隐藏不带 AMD NPU 的 Q4NX
* Studio：圆形浏览器选项卡和悬停，上面的最近内容建议由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15649 访问过
* 当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15539 中提供融合训练内核时，将 LoRA 适配器保留在 Mamba x_proj / dt_proj / out_proj 上
* 由 https://github.com/unslothai/unsloth/pull/14773 中的 @danielhanchen 在其参数的 CUDA 设备上运行每个 FlashAdamW 更新
* 通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14774 中修复 Python 3.9 上的 FSDP2 QLoRA 非浮点参数保护
* 张量并行 float16：在 https://github.com/unslothai/unsloth/pull/15551 中 @danielhanchen 在原生 ShardedGradScaler 中取消缩放 DTensor 和普通梯度
* 块 CUDA 图：在 https://github.com/unslothai/unsloth/pull/15553 中运行 @danielhanchen 编译的 MoE 层和弯曲注意力块，无需图
* Flash impl：当明确的 fa3 / fa4 请求返回到设备或手电筒时发出警告，作者：https://github.com/unslothai/unsloth/pull/15554 中的 @danielhanchen
* 上下文并行和异步 GRPO：在 https://github.com/unslothai/unsloth/pull/15559 中识别@danielhanchen 的门控快进
* 扫描基线：triton 3.9 由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15658 中编译预热池
* torchrun 下的 checkpoint_skip_layers="auto"：每个等级都保留 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15545 中的最小计划计数
* Studio：在自动任务交换模型之前重新检查用户是否仍然离开（https://github.com/unslothai/unsloth/pull/15436 中的 @danielhanchen）
* Studio：扩展的作曲家填充了聊天区域，https://github.com/unslothai/unsloth/pull/15650 中 @shimmyshimmer 的附件净额
* Studio：恢复https://github.com/unslothai/unsloth/pull/15648中@shimmyshimmer在#15232中替换的重新加载图标
* Studio：计划任务对话框填充、药丸名称字段、https://github.com/unslothai/unsloth/pull/15647 中 @shimmyshimmer 的深色新任务按钮
* 快速解码：遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15677 中加载后移动的模型（非默认 GPU 上的 GRPO 引发 cuda:1 和 cuda:0）
* 分布式测试：从 https://github.com/unslothai/unsloth/pull/15679 中 @danielhanchen 的共享集合点助手获取每个 MASTER_PORT
* Studio：计算 CUDA + Vulkan llama.cpp 仅通过 Vulkan 通过 https://github.com/unslothai/unsloth/pull/15466 中的 @debojyoti-dev 到达的卡
* 压缩模块文档字符串，保留 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15594 中声明的保证
* 安装内核：在带有 Triton 3.4+ 的 sm70 上安装 mamba_ssm，与 https://github.com/unslothai/unsloth/pull/15557 中的 @danielhanchen 匹配 unsloth_zoo
* @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15569 中训练 Gemma 4 E2B 和 E4B 时保留数据集的思考文本
* Studio：说 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15616 中的 safetensors 模型上的聊天时间太长
*工作室：拒绝Laya问题，其说明将被@NilayYadav在https://github.com/unslothai/unsloth/pull/15602中删除
* Studio 桌面：永远不要让登录 shell 路径探测阻止 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15567 中的启动
* Studio：首次使用时加载 mermaid、node-forge 和 js-yaml，而不是在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15565 中启动时加载
* 块 CUDA 图表：在记录前决定、释放池、限制 FSDP2 保留的权重、删除 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15352 中不需要的副本
* Studio：在 https://github.com/unslothai/unsloth/pull/15601 中读取 @NilayYadav 的 HTML 文件时，请选中复选框
* Studio：提示长度暗淡在 https://github.com/unslothai/unsloth/pull/15653 中 @danielhanchen 的组卸载挂钩下保持动态位置块输入
* Studio：供应商 shadcn 的 tailwind.css，而不是在 https://github.com/unslothai/unsloth/pull/15635 中安装 @danielhanchen 的 shadcn CLI
* Studio：在 https://github.com/unslothai/unsloth/pull/15418 中尊重 @Shreesh-Sree 在 /v1/messages 传递中的 context_overflow
* Studio：在https://github.com/unslothai/unsloth/pull/14725中通过@vineethsaivs创建API密钥时绑定expires_in_days
* Studio Desktop：通过 @Etherll 在 https://github.com/unslothai/unsloth/pull/15568 中删除 Linux 上重复的 KDE Wayland 标题栏
* 工作室扩散：pin 预算归功于 https://github.com/unslothai/unsloth/pull/15642 中 @danielhanchen 的上限 cgroup 内清理映射页面缓存
* 通过 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/15535 中阐明训练设置反馈和音乐输入流程
* Studio：在 https://github.com/unslothai/unsloth/pull/15578 中由@danielhanchen 记忆一个模型库存扫描中的每个存储库查找
* Studio：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15579 中以 zlib 级别 1 编码瞬态 PNG
* Studio：通过@shimmyshimmer在https://github.com/unslothai/unsloth/pull/15705中整理系统页面实时监视器和GPU设备
* Studio：从 Linux 上的 /proc 中查找后端的子进程，作者为 https://github.com/unslothai/unsloth/pull/15592 中的 @danielhanchen
* MLX：在第一次读取时构建 trl.__all__，而不是在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15561 中导入时导入每个 TRL 导出
* Studio：在 https://github.com/unslothai/unsloth/pull/15593 中 @danielhanchen 将 GGUF 分词器字符串数组遍历一个缓冲区
* Studio：在 https://github.com/unslothai/unsloth/pull/15580 中通过 @danielhanchen 解析每个图像和视频列表一次的图库文件夹
* Studio：用于数据集缓存名称的哈希分词器，没有仅用于初始化的词汇副本，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15577 中提供
* Studio：立即回答缓慢的缓存大小并更快地遍历缓存树，作者：https://github.com/unslothai/unsloth/pull/15627 中的 @danielhanchen
* Studio：仅清除https://github.com/unslothai/unsloth/pull/15628中@danielhanchen写入的编译缓存unsloth_zoo
* Studio：使用 start_new_session 启动完全访问工具进程，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15595 中的 setsid 预执行
* CLI：推迟 YAML、asyncio、rich 和配置模式构建，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15585 中导入
* Studio：绑定工具调用流扫描并解码直通行一次，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15591 中完成
* Studio：在专用线程上而不是 https://github.com/unslothai/unsloth/pull/15590 中 @danielhanchen 的池上步进流生成器
* Studio：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15589 中增量解码和解析 gpt-oss Harmony 流
* Studio：检查本地单文件检查点，无需导入 https://github.com/unslothai/unsloth/pull/15587 中的 @danielhanchen 的扩散堆栈
* Studio：跳过直通治疗者重新解析，同时没有保持的呼叫可以通过 https://github.com/unslothai/unsloth/pull/15618 中的 @danielhanchen 关闭
* Studio：将下载的 GGUF 放在 https://github.com/unslothai/unsloth/pull/15571 中 @NilayYadav 的右侧设备上过滤器下
* Studio：在 Linux 上启动沙盒工具进程，无需 Python 预执行，作者为 https://github.com/unslothai/unsloth/pull/15625 中的 @danielhanchen
* Studio：加载本地 JSON 数据集，其后面的行通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15555 中添加键
* Studio：在 https://github.com/unslothai/unsloth/pull/15668 中应用 @danielhanchen 的加载器跳过规则时，解析每个种子 glob 和匹配的文件一次
* Studio：在上下文估计中计算 ASCII，无需逐字符循环，由 https://github.com/unslothai/unsloth/pull/15659 中的 @danielhanchen 提供
* Studio：在 https://github.com/unslothai/unsloth/pull/15572 中的@NilayYadav 知识库中勾选 PDF 表单复选框
* Studio：在 https://github.com/unslothai/unsloth/pull/15617 中 @NilayYadav 以 4 位加载的模型可以更快地进行 MLX 聊天
* Studio：在 https://github.com/unslothai/unsloth/pull/15652 中@danielhanchen 的组卸载挂钩下保持 Qwen-Image-2.1 提示长度变暗动态
* 修复 https://github.com/unslothai/unsloth/pull/15598 中 @NilayYadav 启用 use_vllm 时在线 DPO 启动时崩溃的问题
* 修复 https://github.com/unslothai/unsloth/pull/15704 中 @danielhanchen 的 GRPO 短停止字符串补全掩码
* Studio：仅 trust 文件搜索和听写服务器 Studio 由 @NilayYadav 在 https://github.com/unslothai/unsloth/pull/15600 启动
* 工作室视频：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15715 中不允许固定时，通过重新指向其可分页主机副本来停放 MiniMax-H3 的旋转 VAE
* [Bug] AMD：Unsloth Studio Images 在 ROCm 仅来自 @LeoBorcherding 在 https://github.com/unslothai/unsloth/pull/15430 中的火炬轮的主机上重试 ROCm sd.cpp 构建
* Studio：拒绝 @oobabooga 在 https://github.com/unslothai/unsloth/pull/15428 中来自被截断的本地代的工具调用
* Studio：回答 422，时间戳或页面游标 SQLite 无法通过 @vineethsaivs 存储在 https://github.com/unslothai/unsloth/pull/15389 中
* 原生 FSDP2：clip 通过 Unsloth 的 clip 渐变，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15708 中的混合网格路径
* UNSLOTH_FSDP2=1 torchrun 下的 fast_inference：保留 vLLM，而不是 https://github.com/unslothai/unsloth/pull/15709 中的 @danielhanchen 拒绝它
* UNSLOTH_PP_SIZE：在导入时安装 Trainer 包装器，因此编码器拒绝训练，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15710 中进行 DDP 训练
* Unsloth Studio / 桌面：注销，在帐户中显示所有者的个人资料，并让所有者在 https://github.com/unslothai/unsloth/pull/15619 中使用 @LeoBorcherding 选择的名称登录
* [错误修复] https://github.com/unslothai/unsloth/pull/15537 中 @takeing-lying-flat 默认参考的快照内存 DPO 策略
* Studio：https://github.com/unslothai/unsloth/pull/15731 中 @shimmyshimmer 提供的带有重音登录按钮的更平静的登录和设置页面
* Studio：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15479 中阐明 LoRA 和训练超参数标签
* 模型加载：当存储库列表显示 https://github.com/unslothai/unsloth/pull/15662 中的 @danielhanchen 没有索引时，跳过根索引探测
* Studio：重叠模型检查点下载与 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15483 中的数据集准备
* Studio 桌面：通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15670 中为端口验证探测健康监管机构的 10 秒预算
* Studio：https://github.com/unslothai/unsloth/pull/15666 中的 @danielhanchen 每次解码时将生成的 SNAC 代码复制到主机一次
* Studio：在 https://github.com/unslothai/unsloth/pull/15663 中重用大小探针的存储库列表，以获取 @danielhanchen 的范围下载 blob 哈希值
* Studio：在 https://github.com/unslothai/unsloth/pull/15660 中 @danielhanchen 的 TTS 预处理中，将每个示例的 SNAC 代码复制到主机一次
* Studio：在 https://github.com/unslothai/unsloth/pull/15664 中的 @danielhanchen 的句子转换器计数器中标记重复的块文本一次
* Studio：将audio.cpp CUDA运行时与@danielhanchen在https://github.com/unslothai/unsloth/pull/15491中的捆绑架构相匹配
* Studio：在https://github.com/unslothai/unsloth/pull/15665中由@danielhanchen定位块区域时读取每个PDF页面的单词一次
* Studio：仅转换调用者在 https://github.com/unslothai/unsloth/pull/15667 中由 @danielhanchen 读取的缓存的非结构化种子行
* Studio：在 https://github.com/unslothai/unsloth/pull/15676 中 @danielhanchen 无需逐字符扫描即可回答 ASCII 工具结果预算
* Studio：每个模式渲染 /openapi.json 一次，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15684 中脱离事件循环
* Studio：在 https://github.com/unslothai/unsloth/pull/15669 中 @danielhanchen 的 API 路线之前匹配 /assets
* Studio：每次安装检查时读取每个 dist-info 元数据一次，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15690 中进行检查
* Studio：https://github.com/unslothai/unsloth/pull/15661 中的@danielhanchen 在每个表的一次扫描中删除 RAG 文档的索引行
* Studio：通过索引图查找模型选择器行，而不是通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15674 中逐行扫描
* Studio：在 https://github.com/unslothai/unsloth/pull/15494 中 @danielhanchen 的 Windows 沙箱架构指南中提到 ARM64
* Studio：停止在 https://github.com/unslothai/unsloth/pull/15707 中 @danielhanchen 重新剥离每个流令牌上的开放工具调用主体
* Studio 桌面：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15671 中设置期间启动启动预检的 CLI -h 探针
* Studio 桌面：在 https://github.com/unslothai/unsloth/pull/15672 中的 @danielhanchen 出现功能缓存未命中时立即运行 -h 和桌面功能
* Studio：可见光模式边框、对齐媒体选择器、新图像图标、@shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15726 中的现代登录
* Studio：从https://github.com/unslothai/unsloth/pull/15699中@danielhanchen的inspect_video中的VP8数据包标头中计算sd-cli WebM帧
* Studio：当 MLX 模型仍在 https://github.com/unslothai/unsloth/pull/15615 中读取@NilayYadav 的提示时停止工作
* Studio 桌面：每次超时共享一个环回 HTTP client，由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15675 中
* Studio：每个进程遍历每个 GGUF 分词器数组一次，并在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15687 中的后续读取中查找它
* 更快地导入 unsloth 和 from_pretrained：更少的 GC 遍数，跳过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15560 中无法匹配的正则表达式
* Studio：在 https://github.com/unslothai/unsloth/pull/15390 中@NilayYadav 仍在流式传输回复时记录实时生成率
* Studio 桌面：将启动屏幕保留在服务器端口上，而不是在 https://github.com/unslothai/unsloth/pull/15673 中@danielhanchen 的下一个 500 毫秒民意调查中
* Studio：当没有什么需要阅读时，在事件循环中回答无钥匙进入 https://github.com/unslothai/unsloth/pull/15683 中的 @danielhanchen
* Studio：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15480 报告第一步训练和梯度积累
* Studio：在 https://github.com/unslothai/unsloth/pull/15481 中 @danielhanchen 获取决策数据集和模型加载
* Studio：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15692 中按固定顺序组成 FP8 和 NVFP4 编译缓存标记
* Studio：设置后预编译字节码，因此第一次启动不会由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15646 中进行
* Studio：在线程列表上宣传聊天标题修复守卫，而不是在 https://github.com/unslothai/unsloth/pull/15685 中获取 @danielhanchen 的 /openapi.json
* 当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15711 中加载短序列模型时，保留早期模型的智能卸载
* 在 https://github.com/unslothai/unsloth/pull/15712 中的 @danielhanchen 在张量设备上运行 xformers 注意力（跨 GPU 的 device_map 给出 NaN 损失）
* 工作室扩散：在 https://github.com/unslothai/unsloth/pull/15654 中的 @danielhanchen 探针和延迟检查后面的未调谐 sm80+ 拱形上运行 fused-dequant int8 GEMM
* Studio：显示缓存大小并清晰地显示 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15488 中的各个 Hugging Face 模型副本
* 测试：在 https://github.com/unslothai/unsloth/pull/15745 中引入与@danielhanchen 的端口和编码保护一致的三个新测试
* Studio：在视频渲染时对 /v1/videos 进行排队，并在 https://github.com/unslothai/unsloth/pull/15613 中批量等待 @oobabooga 的 /v1/images/ Generations 请求
* Studio 训练：在 https://github.com/unslothai/unsloth/pull/15620 中 @debojyoti-dev 加载模型失败时记录回溯
* Studio：将直通治疗器门绑定到解析器将由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15717 中扫描的开启器
* setup.sh：将替换脚本移交直接保留在https://github.com/unslothai/unsloth/pull/15747中@danielhanchen传递的依赖项后面
* 依赖项：在 https://github.com/unslothai/unsloth/pull/15697 中删除 @danielhanchen 的四个 Python 包，不导入任何内容（tyro、flatbuffers、pytorch_tokenizers、mammoth）
* Studio：让路由器跳过https://github.com/unslothai/unsloth/pull/15682中@danielhanchen无法匹配路径前缀的路由
* Studio：在https://github.com/unslothai/unsloth/pull/15700中@danielhanchen在平铺编码和LTX-2平铺解码中重用VAE平铺混合权重
* Studio：刷新正在重新测量的缓存大小，而不是在 https://github.com/unslothai/unsloth/pull/15718 中显示 @danielhanchen 的旧数字
* Studio：Web fetch 对页面进行标记一次，然后将其重播到 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15686 中传递的后续主要内容
* Studio：保持 Windows 控制台 stderr 可写，同时工作镜像拥有 https://github.com/unslothai/unsloth/pull/15734 中 @danielhanchen 的 fd 2
* 工作室：在 https://github.com/unslothai/unsloth/pull/15678 中，用万圣节主题和 @shimmyshimmer 的怪异问候来捣蛋侧边栏
* Studio：从 Transformers 注册表源读取 VLM 和音频检测集，而不是在 https://github.com/unslothai/unsloth/pull/15688 中导入 @danielhanchen 的 torch
* 修复图库保存 toast 以使用 @Imagineer99 在 https://github.com/unslothai/unsloth/pull/15725 中选择的文件名
* 集中关注：https://github.com/unslothai/unsloth/pull/15714 中@danielhanchen 的完整微调行达到 varlen（自动投射下的 fp32 Q / K）
* Studio：后端导入时 GC 传递次数较少，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15586 中启动时生成 RSA 密钥
* CLI：仅当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15689 中调度命令时才加载 studio 之外的命令模块
* 通过 @wasimysaid 在 https://github.com/unslothai/unsloth/pull/15755 中将 AGPLv3 标头添加到桌面发布工作流程
* 通过 https://github.com/unslothai/unsloth/pull/15743 中的 @sergiopaniego 将 OpenEnv 链接更新为 openenv/OpenEnv
* 保存：一旦 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15694 中找不到任何内容，就停止重复的 gc.collect 传递
* Studio桌面：提交退出后立即隐藏窗口，并在https://github.com/unslothai/unsloth/pull/15723中通过@Lyxot退出后端而不进行最终确定
* 测试：遵循媒体选择器的聊天对齐高度，通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15758 中的 run_pwsh 启动 pwsh
* 工作室：@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15732 发送第一个回复后开始火炬预热阶段
* feat(studio)：在 https://github.com/unslothai/unsloth/pull/15680 中空闲时自动卸载 @Lyxot 的 MLX 聊天模型
* Studio：删除 https://github.com/unslothai/unsloth/pull/15696 中 @danielhanchen 没有使用的私有帮助器和常量
* Studio：https://github.com/unslothai/unsloth/pull/15644 中 @shimmyshimmer 的本地模型默认启用搜索和工具
* Studio 桌面：由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15566 中使用 fat LTO 和一个代码生成单元构建版本
* Studio：删除三个前端依赖项，@danielhanchen 在 https://github.com/unslothai/unsloth/pull/15634 中不导入任何内容
* Studio 桌面：修剪 https://github.com/unslothai/unsloth/pull/15760 中 @danielhanchen 的退出隐藏评论
* 在 https://github.com/unslothai/unsloth/pull/15719 中 @Imagineer99 在数据库操作之间保留 RAG WAL sidecar
* 工作室扩散：https://github.com/unslothai/unsloth/pull/14682 中的 @danielhanchen 的 CUDA 图形重新检查修复（对原始文件急切的 OOM 重试，第一次渲染时计划的负长度记录）
* 工作室扩散：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14683 中导入火炬之前，off-GIL CUDA prime 不会锁定
* Studio FLUX.3 上采样器：将 sidecar 固定到 https://github.com/unslothai/unsloth/pull/14696 中的 @danielhanchen 的本机 sd.cpp 图像卡
* 工作室视频：LTX-2.5 密集文本编码器后备室检查 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/14664 中的负载数据类型价格
* Studio 微调队列：在 https://github.com/unslothai/unsloth/pull/15727 中由 @danielhanchen 运行帐户路径防护后面的批处理模型探测
* Studio llama-server args：一个无值的 ngram-mod 标志保留 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15728 中的下一个标志
* 测试：两个 gc-skip auto dist 测试从 https://github.com/unslothai/unsloth/pull/15729 中 @danielhanchen 的共享助手获取端口
* Studio 登录：说 Unsloth 并使用 https://github.com/unslothai/unsloth/pull/15759 中 @danielhanchen 的 UI 字体比例调整标题大小
* Studio：训练ChatML数据集，其角色为capitalized，由@NilayYadav在https://github.com/unslothai/unsloth/pull/15599中进行
* Studio前端：通过https://github.com/unslothai/unsloth/pull/15746中的@dependabot[bot]将zod撞到4.6.7（将katex保留在0.16上）
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/15518 中将 pip 组跨越 1 个目录进行 2 次更新
* 通过 https://github.com/unslothai/unsloth/pull/15637 中的 @dependabot[bot] 将 npm_and_yarn 组中 /docker/jupyter/unsloth_labext 中的 fast-uri 从 3.1.8 提升到 3.1.9 跨 1 个目录
* 通过 @dependabot[bot] 在 https://github.com/unslothai/unsloth/pull/15360 中对 /studio/src-tauri 中的 Cargo-tauri 组进行 4 次更新
* Studio：直接通过 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15485 中的聊天工具批准确认完全访问权限
* CI：在https://github.com/unslothai/unsloth/pull/15762中由@danielhanchen在risky-loader基线中记录惰性CLI命令导入
* AppImage E2E：在 https://github.com/unslothai/unsloth/pull/15764 中的 @danielhanchen 中，当启动画面已经消失时，计算应用程序外壳的渲染情况
* FSDP2 块 CUDA 图：释放 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15720 中收集的 MoE 块的权重
* cuDNN SDPA grad 布局修复：让编译后的代码修改 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15721 中的 SDPA 输出
* Studio：API 页面上的速度计图标，由 https://github.com/unslothai/unsloth/pull/15769 中的@shimmyshimmer 生成速度
* 工作室：蜘蛛或蝙蝠在万圣节页面的三分之一上由 @shimmyshimmer 在 https://github.com/unslothai/unsloth/pull/15770
* Studio：cast-cache writer 读取已经保留的主机副本卸载，而不是等待 https://github.com/unslothai/unsloth/pull/15698 中 @danielhanchen 的加载
* Studio：使用 stdlib 预览 JSON Lines 数据集，而不是 @lonexreb 在 https://github.com/unslothai/unsloth/pull/15713 中使用 pyarrow 的 JSON 阅读器
* 澄清@Imagineer99 在 https://github.com/unslothai/unsloth/pull/15724 中的研究简报的深度研究交接
* Studio：批量打包微调作业，每个作业仅打包自己的文档，由 https://github.com/unslothai/unsloth/pull/15733 中的 @danielhanchen 提供
* 当 https://github.com/unslothai/unsloth/pull/15771 中的 @danielhanchen 获得 mRoPE 位置 ID 时，在 Flash 注意下将打包文档分开
* 安装程序下载：重试主体剪短或滴流，而不是由 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15763 中对其进行散列
* Studio：在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15701 中的本机 INT8 重建中，每个类读取一次 Int8Tensor 构造函数签名
* Studio：在https://github.com/unslothai/unsloth/pull/15751中@danielhanchen删除聊天附件之前加载附件哈希器
* Studio：在 https://github.com/unslothai/unsloth/pull/15753 中的@danielhanchen 工具调用剥离器中对每个中继的 SSE 线路进行一次解码
* Studio：在 https://github.com/unslothai/unsloth/pull/15749 中@danielhanchen 在不接触实时标记器的情况下对标记器指纹进行哈希处理
* Studio：当 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15754 中没有符合条件的 sidecar 时，跳过 DFlash 大小请求
* 工作室视频库：clear() 读取并取消链接 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15766 中锁定的文件夹中的 sidecar
* Studio：安装已发布的 Diffusers 0.42.1，而不是 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15761 中固定的主要提交
* 测试：遵循 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15778 中的线程列表保护标志和 RAG WAL 守护程序
* 导入：在首次使用时检查 openai 安装是否损坏，而不是在 @danielhanchen 在 https://github.com/unslothai/unsloth/pull/15702 中导入 unsloth

## 新贡献者
* @Aafimalek 在 https://github.com/unslothai/unsloth/pull/15421 中做出了第一个贡献
* @Shreesh-Sree 在 https://github.com/unslothai/unsloth/pull/15418 中做出了第一个贡献
* @sergiopaniego 在 https://github.com/unslothai/unsloth/pull/15743 中做出了第一个贡献

**完整 Changelog**：https://github.com/unslothai/unsloth/compare/v0.1.911-beta...v0.1.912-beta

---

> 📦 仓库：[unslothai/unsloth](https://github.com/unslothai/unsloth) · 🏷️ 版本：`v0.1.912-beta` · 📅 发布：2026-10-28 · [查看英文原版 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.912-beta)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
