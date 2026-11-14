---
title: "VoiceStudio v0.5.1"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-08-28"
type: "patch"
lang: "zh"
---

# VoiceStudio v0.5.1

**亮点**

- Apple Silicon 上的 OmniVoice 一代现在在崩溃隔离的子进程中运行，因此致命的 MPS 内存退出不再导致本地后端崩溃（#1697、#1698）——感谢 ndntran14！
- 模型加载 GPU 耗尽现在会返回经过清理的、可操作的配音错误，并且就绪状态可以正确地将共享模型状态归因于 TTS (#1695)
- 源模式开发现在会重新启动孤立的后端崩溃，而不会破坏 UI，而重复的崩溃循环仍然会因诊断而大声停止（#1690）
- 当 WebView 可以渲染预览图片但无法解码其音频时，配音播放现在会保留可听的伴音源 (#1692)
- 模型目录引擎行现在使用可用的桌面宽度，并保持身份、运行时状态和操作不会相互拥挤 (#1689)
- VoiceStudio 现在充当本地语音平台：其他应用程序可以触发其本机听写或通过版本化 HTTP、WebSocket、JSON-RPC、CLI 和 MCP 传输进行连接 (#1646)
- 超时的进程内配音转录不再通过废弃的本机工作线程启动第二个 WhisperX/CTranslate2 调用，从而防止 Windows `0xC0000005` 退出之前的重叠访问 (#1669)
- Windows 调试器终止代码 `0x40010004` 不再被误报为后端崩溃或因自动重启恢复而受到指控 (#1663)
- Studio 现在在页面更改之间保留一代保留，防止重新安装堆叠本机作业，直到后端报告容量繁忙或在内存压力下被终止 (#1670)
- 上传的配音视频在预览前会标准化为浏览器安全的 H.264/AAC，防止有效的 VP9、AV1 或 Opus 媒体因“不支持来源”而失败 (#1644)
- 配音现在将口语和目标语言分开，通过片段清理保留翻译，并允许重试或跳过失败的翻译，而无需重新启动批处理 (#1654) - 感谢 Number16BusShelter！
- 导入替换 SRT 字幕现在可以将每个提示绑定到最佳重叠的源扬声器和克隆，而不是将每行重置为随机默认语音 (#1660) — 感谢 invio-a11y！
- 当 ffmpeg 提取音频时，上传 Dub 预览不再阻止每个后端请求 (#1667) — 感谢 tfreyd！
- Docker 快速启动现在需要通过容器 NAT 所需的管理员密钥，而不是启动受保护操作返回 403 的 UI (#1651) — 感谢 wd357dui！
- WSL2 AMD 容器现在使用 `/dev/dxg` ROCDXG 桥和可操作的 GPU 诊断，而不是默默地回退到 CPU (#1655) - 感谢 wd357dui！
- 特别语音克隆引用现在保持活动状态，直到取消或超时的 GPU 工作实际上停止读取它们，因此提示缓存可以完成，而不是在删除的临时文件上失败 (#1668) - 感谢 tfreyd！
- 听写现在保持绑定到它启动的应用程序，并从静默识别器输出中本地恢复 (#1175)
- 后端现在在启动后一秒内做出响应，并逐步讲述其启动过程 (#1550)
- 报告过时版本的错误现在首先提供最新版本（#1547）
- 后端只有在实际可以服务时才会宣布准备就绪，并且崩溃循环现在会自行重新启动（#1548）
- 隐形水印不再停止或默默地跳过会话的第一次拍摄（#1615）
- 配音字幕可以从片段表中以任一方向重新定时、插入和合并 (#1612) — 感谢 invio-a11y！

### 已更改
- 模型目录现在使用一个透气的工作区画布，具有更简单的窗格和引擎系列导航，而不是嵌套卡片和滚动区域（#1685）
- Linux 源启动器现在可以捕获缺少的 libxdo 和 GStreamer 音频插件，以免导致链接器错误或中止、空白 WebKit 渲染器（#1680、#1682）
- 听写现在携带一个本机输出会话，从快捷方式向下到最终交付，仅在未触及时恢复文本、HTML、图像或文件列表 clipboard，保持 Wayland 复制安全，除非明确启用当前焦点插入，并且仅通过已安装的本地 ASR 模型重试无声 Sherpa 语音 (#1175)
- 后端立即绑定其端口并实时报告启动进度 - `/health` 回答 503-with-step，新的 `/startup/progress` 端点列出了每个步骤，而 PyTorch、API 路由和数据库迁移在后台加载，因此“从步骤 X 开始”永远不会被误认为是“死机”；桌面启动画面讲述了每个步骤 (#1550)

### 添加
- 捆绑的 Rust 环回 sidecar 公开听写启动/停止/切换、聚焦输出会话、发现和 JSON-RPC；后端为 Herdr、编码代理、编辑器、桌面应用程序和 TUI 添加了版本化流事件和无依赖性 CLI 桥 (#1646)
- 无头 NVIDIA 和 ROCm 机器现在可以作为仅工作人员的 Docker Compose 服务加入，无需发布 UI 和持久协议 v2 注册；在重新连接之前一起更新两台机器 (#1638) — 感谢 jkrogers9862！
- Linux ARM64 (Asahi Apple Silicon) 支持 OmniVoice GGUF 引擎 — 在工具链允许的情况下使用 GGML Vulkan 构建的 `linux-aarch64` 二进制文件，因此 Apple GPU 通过开源 Honeykrisp 驱动程序加速生成，而不是退回到仅使用 CPU (#1641)
- 在每个桌面操作系统上执行一个命令安装：`curl -fsSL https://voicestudio.sh/install | sh` (macOS/Linux/WSL) 或 `irm https://voicestudio.sh/install | iex` (Windows) — URL 为每个平台提供正确的脚本，Windows 获得带有 3 个操作系统 CI 烟雾的源安装程序 (`scripts/install.ps1`) (#1626)
- 配音表中的每行字幕管理：一行的结束时间可以与开始时间一起编辑（输入时间并拖动其时间线边缘现在采用相同的路径），行与上一行以及下一行合并（`Ctrl/Cmd+Shift+M`），并且可以将新行插入到任何行之后的间隙中（#1612） - 感谢 invio-a11y！
- CI 现在在热路径上强制执行性能回归预算 - 操作计数测试将 TTS 流固定为每个句子一个合成，并将缓存的配音重新混合为零重新合成；快速路径防护在启用时覆盖零重新解码和 ⌈N/W⌉ 本机批处理调用 (#1594)
- 默认引擎配音现在在每个正向传递中合成多个片段，而不是每行一次调用 - 宽度遵循主机的设备余量（CPU 和低 VRAM 卡上为 1，最多 8），`OMNIVOICE_DUB_BATCH_WIDTH` 会覆盖它，并且没有本机批处理的引擎会保留单片段路径 (#1594)
- `/ws/tts` 现在报告实时第一音频，并且其 RTF 单独测量合成，因此缓慢的 client 无法使其膨胀（#1594）
- 本地缓存的 AudioSeal 水印生成器在启动后约 35 秒在后台线程上预热（`OMNIVOICE_PRELOAD_WATERMARK=0` 选择退出；显式设置 `=1` 可能会下载它），因此第一个合成不再序列化 audioseal 导入 + 模型加载内联 — 在冷文件系统上测量约 42 秒，比 90 秒 client 超时短 3 秒（#1576） — 感谢 paoloantinori！
- 您克隆的声音在重新启动后保持“温暖” - 编码的引用现在保留在磁盘上（每个约 10 KB），因此第一代会话会跳过重新编码和任何转录过程； `OMNIVOICE_PROMPT_DISK_CACHE=0` 选择退出 (#1565)
- CUDA 上默认引擎的可选 FlashInfer 加速（`OMNIVOICE_FLASHINFER=1`，测量值约为 2.2 倍）——需要可选的 `flashinfer-python` 包；缺少包或内核失败会记录原因并回退到标准路径 (#1565)
- bug 报告者会注意到您何时使用过时的版本，并在提交之前提供最新版本 - 使用“无论如何都文件”逃生舱口 - 并在每个报告中标记 `Build status` 行，以便区分最新报告和过时报告 (#1547)
- 设置 → 性能和设备获得计算设备覆盖（自动 / CUDA / ROCm / XPU / MPS / CPU 或 `OMNIVOICE_DEVICE`） - 当自动检测选择错误时固定设备；仅提供您的机器实际拥有的设备 (#1557)
- 通过 `OMNIVOICE_POCKETTTS_24L` 选择加入 24 层 PocketTTS 检查点 — 以大约 2 倍渲染时间提供更好的 it/de/es/pt 韵律（仍然比实时更快）；快速 6 层模型保持默认 (#1613) — 感谢 paoloantinori！

### 文档
- 支持的版本和安装指南现在将 0.5.1 标识为稳定的桌面和容器版本 (#1687)
- Docker Hub 概述现在显示当前的引擎切换演示、模型目录和图库语音工作流程 (#1593)
- Docker 集线器概述和安装指南现在显示 v0.5 标签和内置 API 密钥/共享 PIN 安全模型，而不是过时的 v0.4 和无身份验证指南 (#1592)
- 自述文件现在以下载按钮和三步首次克隆演练为主导，新的基准页面锚点在存储库内线束上测量每个引擎/每个设备的数量 (#1555)
- 每个引擎现在都有自己的指南 - 文档/引擎下有 21 个新页面，加上涵盖所有 16 个 TTS 和 11 个 ASR 引擎的索引，从两个自述文件链接（#1556）
- OmniVoice 指南现在涵盖了将样式属性与参考 clip 相结合（一致的指令稳定克隆；参考赢得冲突）、内联发音控制（拼音/CMU 音素），并纠正了默认引擎无法进行语音设计的说法 - 它可以从属性中进行语音设计（#1565）

### 已修复
- 现在，当引导后 shell 实际安装时，工作区会测量其响应宽度，因此本机 UI 缩放会回流项目和历史记录，而不是将配音演示压缩为不可读的列 (#1683)
- 选择本地文件后，配音使源语言选择器保持可见，因此可以在转录开始之前固定 ASR (#1678) — 感谢 Lonki-lomki-cloud！
- 首次运行的媒体引擎下载可立即用于 TTS，无需重新启动，并且丢失的媒体进程故障现在指向修复控件 (#1677) — 感谢 Farhatalipt-dev！
- 源安装在 AMD GPU 上，荣誉为 `OMNIVOICE_TORCH_VARIANT=rocm`：`bun run desktop` 现在在 `uv sync` 之后交换 ROCm 火炬轮，并启动后端而不重新同步，而不是在每次启动时默默地恢复到仅 CPU 的 CUDA 版本 (#1665) — 感谢 uberclokr！
- 全新克隆上的 `bun run desktop` 不再因“资源路径 `../../frontend/dist` 不存在”而失败 — 开发启动器在编译前创建占位符 Tauri 资源目录 (#1664) — 感谢 uberclokr！
- 当 Python 缺少 `os.waitid` 时，macOS 在第一次请求后不再丢失 TTS；子流程所有权现在使用安全的 `waitpid` 回退，而不会冒重用流程组的风险 (#1656) — 感谢 paoloantinori！
- 桌面启动、重试、重置、卸载、关闭和崩溃恢复现在共享一个后端生命周期所有者；退出会中断首次运行的安装程序并优雅地排出，然后强制清理完整的后端进程树，因此重叠不能复制或孤立它（#1635） - 感谢 Xohaibxobi！
- 大型故事和有声读物项目现在保留在 IndexedDB 中，而不是溢出 `omnivoice.app` localStorage 信封，具有配额安全迁移和有序退出/重新加载刷新 (#1636) - 感谢 leodzai！
- OmniVoice 及其崩溃隔离子进程现在路由至 AMD ROCm GPU，而不是警告并回退至 CPU (#1629) - 感谢 j4r3kb！
- 听写现在会在捕获小部件关闭时取消挂起的启动工作、捕获资源、套接字和计时器，从而防止针对损坏的 Web 视图进行后期工作 (#1645)
- 流生成失败现在显示公认的恢复指导并出现在诊断中，而不是仅返回一般错误 (#1607)
- 工作容量传输测试不再与自己的设置竞争：1 个插槽限制现在通过注册握手，而不是在连接后改变 client 配置，其中服务器的流开放 ConfigUpdate（携带注册容量 2）可能会覆盖它并伪造过度接受； 2026 年 8 月 21 日两次 CI 失败 (#1630)
- 在配音中跨说话者边界移动单词 - 合并两行并再次分割它们 - 不再配音第一个说话者声音的后半部分；现在，每一半都保留了实际说话者的说话者、声音、方向、增益和语言 (#1612) - 感谢 invio-a11y！
- 拒绝 16 kHz 音频上下文 (WKWebView) 的 WebView 上的听写现在在下采样之前进行低通，因此高于 8 kHz 的频率停止折叠到识别器输入的语音中 (#1610)
- 无法恢复的麦克风上下文现在会报告麦克风错误，而不是在不捕获任何内容的情况下将听写丸保留在“监听”状态（#1610）
- 听写不再保留整个会话的音频以进行无声模式恢复 - 开放式麦克风使缓冲区每小时增加约 115 MB；而是保留最近的两分钟 (#1610)
- clipboard 交付状态现已翻译为所有 21 种语言，因此 Wayland 用户（默认为 clipboard 交付）不再看到英文字符串 (#1610)
- 任何异常类型的本机 sherpa-onnx 加载失败现在都会降级为“引擎不可用”，而不是取消听写 WebSocket (#1610)
- 听写现在将 Whisper Tiny 作为其跨平台默认设置，避免了 Parakeet 在 Windows 上测量空解码，同时保持 Parakeet 在运行时回退后可选择 (#1175)
- 重新混合配音不再解码、重写和重新读取每个缓存的片段 - 直接重用相同速率的缓存音频（如果被截断则被拒绝），切换计时模式不能将时隙截断的音频重新用作自然速率，并且 RVC 尊重自然速率模式 (#1594)
- PocketTTS French 再次运行 - pocket-tts 仅提供 24 层 French 模型并拒绝 sidecar 请求的名称，因此每个 French 请求在模型加载时都会失败；法语现在总是加载 `french_24l` (#1613) — 感谢 paoloantinori！
- 安装 IndexTTS 2.5 不再失败并声称下载中断 - 权重存储库发布 `config.yaml` 和 VoiceStudio 要求上游版本中不存在的 `config_v2_5.yaml`；两个名称都被接受，因此手动重命名的结账仍然有效（#1611）——感谢 zuiaiyutu！
- IndexTTS 2.5 不再在 60 秒处终止长文本生成 - Sidecar 现在在 `infer()` 运行时每 5 秒证明它是活动的，并且其截止日期上升到 900 秒 (`OMNIVOICE_INDEXTTS_RECV_TIMEOUT_S`) (#1611) - 感谢 zuiaiyutu！
- OpenAI 兼容的 `/v1/audio/speech` 路由现在重用共享缓存引擎来显式 `model` id，而不是构建一个新的引擎 - 及其边车/模型负载，每次调用子流程引擎约 28 秒的楼层 - 对于每个请求，应用相同的单引擎驻留规则 `/generate` (#1614) - 感谢 paoloantinori！
- 设置向导的 RAM 检查不再阻止操作系统报告 ~7.8 GB 可用的 8 GB 机器 — 阈值现在可以容忍保留内存，并且 `OMNIVOICE_RAM_PREFLIGHT=0` 将真正的阻止变成对那些接受 OOM 风险的人的警告 (#1618)
- 隐形水印现在急切地运行，而不是通过 `torch.compile` — AudioSeal 的惰性编译将每个会话的第一个嵌入发送到 Inductor 的 C++ 代码生成中，该代码生成在工具链无法为其提供服务的 macOS 主机上彻底失败，并在等待 30-40 秒后发送未标记的音频；首次嵌入从 9.70 秒下降到 0.26 秒 (#1615) — 感谢 paoloantinori！
- macOS 辅助功能拦截器现在会在可见时重新检查，并在启用授权后立即关闭，而不是在屏幕上保留陈旧的权限提示 (#1609)
- 配音编辑器的视频和文字记录列现在可以通过指针或键盘调整大小，并且所选的分割在整个启动过程中保持不变（#1571）——感谢 invio-a11y！
- 仅 CPU 合成现在获得有限的 10 分钟执行预算，并且耗尽该预算的渲染会报告为计算超时，而不是误导性的“生成容量正忙”队列压力 (#1588) — 感谢 ChienNguyen1111！
- Rapid Launchpad ↔ Dub 导航现在干净地取代了工作区 DOM 所有者，因此后期媒体/波形清理无法触发 React 的 `insertBefore` 崩溃 (#1590) — 感谢 nicolas-jacques！
- 水印嵌入失败现在记录完整的回溯，而不仅仅是异常消息，因此可以仅从日志中诊断静默未标记的音频事件（音频通过设计时未标记）（#1576） - 感谢 paoloantinori！
- 当二值化崩溃时，配音现在可以恢复 rapid 两个扬声器的交流，默认新项目为口型同步而不覆盖保存的计时选择，并保持编辑器在窄屏幕上可用（#1584） - 感谢 victordonat0！
- `OMNIVOICE_ASR_BACKEND=omnivoice` 现在选择 PyTorch 原生 Whisper 路径，因此记录的 ROCm 逃生舱口不再因未知引擎而失败 (#1582) — 感谢 patmansk！
- Windows MSI/便携式安装的网络共享现在为 LAN 设备提供捆绑的 Web 界面，而不是将它们重定向到自己的 `localhost` (#1589) — 感谢 TWIISTED-STUDIOS！
- 导出的配音视频现在将配音语言标记为默认音频流，同时保留原始语言作为明确的选择 (#1575) — 感谢 invio-a11y！
- 克隆引用不再耗尽系统内存：在五个有界通道中搜索长达 75 秒的无转录本 clips，更长的 clips 要求修剪，并且提供的转录本仍限制在 20 秒以保持对齐 (#1578) — 感谢 ACKAPOB！
- 在 Windows、macOS、Linux 和 Docker 之间移动数据目录后，存储的工件子路径现在可以解析，而遍历和符号链接转义仍然被阻止 (#1559) — 感谢 Eman-Yousaf！
- 远程浏览器点击配置了 API 密钥的服务器的管理员 403 现在会获取 API 密钥登录表单，而不是无尽的控制台 403，而桌面和仅 PIN/无密钥服务器会保留简单的环回错误，因此永远不会向访客提供没有密钥可以满足的登录 (#1568) — 感谢 paoloantinori！
- 崩溃隔离的 ASR sidecar 及其下载预检现在就加载哪个模型达成一致 - 设置共享的 fast-whisper 模型变量适用于两种变体，而不是悄悄地使用不同的 sidecar (#1556)
-“就绪”现在需要深度运行状况探测（一个由数据库支持的工作路径），而不仅仅是身份探测——当每个实际请求失败时，安装失败的后端将无法再被宣布（#1548）
- 主管在重复崩溃后重新启动现在会关闭（立即，然后 5 秒，然后 15 秒）而不是连续重生，因此紧密的崩溃循环无法在几秒钟内消耗掉整个重启预算 (#1548)
- Linux 桌面清理回归测试现在隔离构建工件，因此现有的开发人员构建无法再更改其结果 (#1566)

- 重命名、删除或撤销对语音的同意（以及加注星标/清除历史记录、录制导出）现在会再次实时更新每个打开的选项卡 - 同步路由的 WebSocket 事件被悄悄删除，这可能看起来像“我所有的声音都消失了”（#1561） - 感谢 paoloantinori！

### CI
- 项目代理现在共享 Skills.sh 中固定的 Vite 和 FastAPI 技能 (#1594)
- 每周全历史秘密扫描不再将 Ed25519 私钥类型名称误认为是提交的密钥材料 (#1591)
### Linux x64 工件

```
43753aeb1f78e9318d8a4df97e45b76384cad5d88e6be423d696413f8329492c  VoiceStudio_0.5.1_amd64.AppImage
5bd13d39f8ccf8eb3ffedbefc27609ffa7a8cb90d24a8c5a421d19b4343d8578  VoiceStudio_0.5.1_amd64.AppImage.sig
```


### macOS 英特尔工件

```
14a6d3dac76bd28ead71663a274d084d8d2d2a271301f4863a1691c45611236c  VoiceStudio_0.5.1_x64.dmg
9fb9e883cb2ee2bdde21d5d455d0e5334b6d2fb55541acdbd9aae130dc78876d  VoiceStudio.app.tar.gz
aed7f2ccd25b78d64dccc005e76b266ac0ebff03f97539b52b047fb9540af4fc  VoiceStudio.app.tar.gz.sig
```


### Windows x64 工件

```
0e0a9b3ef7d4c48243bae2b12f610c5bc991bbb127e17700a410c24063cab2a6 *VoiceStudio_0.5.1_x64_en-US.msi
a3f7d688585b7532543accb8e98cc2fb1056f686bd4bc3358969a02f2f818cd3 *VoiceStudio_0.5.1_x64_en-US.msi.sig
```
## 贡献者

谢谢大家💜

<a href="https://github.com/debpalash" title="@debpalash"><img src="https://github.com/debpalash.png?size=64" width="48" alt="@debpalash"/></a> <a href="https://github.com/paoloantinori" title="@paoloantinori"><img src="https://github.com/paoloantinori.png?size=64" width="48" alt="@paoloantinori"/></a> <a href="https://github.com/Eman-Yousaf" title="@Eman-Yousaf"><img src="https://github.com/Eman-Yousaf.png?size=64" width="48" alt="@Eman-Yousaf"/></a> <a href="https://github.com/MhAhmadAli" title="@MhAhmadAli"><img src="https://github.com/MhAhmadAli.png?size=64" width="48" alt="@MhAhmadAli"/></a> <a href="https://github.com/uberclokr" title="@uberclokr"><img src="https://github.com/uberclokr.png?size=64" width="48" alt="@uberclokr"/></a> <a href="https://github.com/victordonat0" title="@victordonat0"><img src="https://github.com/victordonat0.png?size=64" width="48" alt="@victordonat0"/></a>

---

> 📦 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · 🏷️ 版本：`v0.5.1` · 📅 发布：2026-08-28 · [查看英文原版 Release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
