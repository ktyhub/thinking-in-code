---
title: "VoiceStudio v0.5.2"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.2"
version: "v0.5.2"
published: "2026-09-10"
type: "patch"
lang: "zh"
---

# VoiceStudio v0.5.2

**亮点**

- Supertonic-3 和 PocketTTS 再次显示其许可证接受按钮，以便可以启用它们 (#2017)
- 无法在您的平台上运行的引擎会这样说，而不是告诉您安装它（#2018）
- MOSS-TTS-v1.5、Confucius4-TTS、dots.tts、Supertonic-3 和 PocketTTS 安装在一台 click 中，每个都在自己的环境中，因此切换引擎和返回引擎永远不会破坏工作引擎（#2015、#2016）
- 已存储但尚未应用的发音条目是这样说的，而不是看起来不匹配（#1949）
- 现在，裸露的 500 报告会命名后端错误类别，因此两个不相关的故障将停止提交同一问题 (#1773)
- 被拒绝的配音源语言现在为其拒绝的代码命名（#1960）
- 首次运行安装日志保留在磁盘上，而不是随着安装屏幕消失（#1847）
- `bun run desktop` 从应用程序本身仍在运行的后端回收端口 3900，而不是拒绝启动 (#1974)
- 另一个应用程序已经拥有的听写快捷方式现在这么说，而不是默默地什么也不做（#1858）
- 在 Windows 上退出不再被报告为下次启动时崩溃 (#1898)
- 设置中的减少运动开关，无需更改整个系统即可保持平静 (#1857)
- 浅色主题，系统自动现在遵循浅色模式操作系统，而不是保持黑暗（#1973） - 感谢 CoDe-ReDz！
- 从单字符输入生成现在表示输入太短，而不是引用卷积错误（#1826）
- 首次运行会在安装之前询问文本大小，而不是安装之后 (#1849)
- 没有参考 clip 的克隆现在是这样说的，而不是命名您无法设置的库参数（#1879）
- 升级 RTX 50 系列卡的火炬不再将一次启动崩溃换成另一次启动崩溃，并且升级已记录在案 (#1931)
- 生成超时现在指向“设置”中的计算时间预算，而不是环境变量（#1808）
- 您现在尚未安装的引擎会这样说，而不是报告失败的检查（#1866）
- 辅助功能提示不再浮动在首次运行设置和所有其他应用程序上，直到您授予它为止（#1845、#1886）
- 最后一个入门步骤提供安装语音转文本模型，而不是在未安装时失败三次 (#1856)
- 由于文件夹位于安装点后面而导致下载失败 Windows 现在不会交叉，并且将其移动到哪里 (#1957)
- 仅仅缺少可用内存的 GPU 不再被告知重新安装其驱动程序 (#1812) — 感谢 michaelhuamanflores！
- 浏览器扩展抛出的错误也会在 Safari 和 macOS 应用程序上被过滤，而不仅仅是在 Chromium 上 (#1901) - 感谢 Chang-Jin-Lee！
- 选择中国镜像不再在每个依赖步骤上重新运行网络，这在阻塞连接上每一步花费几秒（#1892）——感谢 uezheng2006！
- 后端日志面板报告它无法读取的日志，而不是悄悄地显示更少的日志（#1847）——感谢 Chang-Jin-Lee！
- 浮动听写气泡添加了暂停、恢复、停止、关闭和多行预览 (#1952)
- 转录检查模型准备情况并提供内联下载和快捷方式提示（#1952）
- Transcriptions 的缺失模型提示按准确性与延迟、语言和大小列出了每个听写模型，因此您可以安装适合的模型 - 或切换到磁盘上已有的模型 (#1952)
- 引擎菜单的转录选项卡选择 Sherpa-ONNX 下的听写模型，该选择现在也驱动 Sherpa 转录 (#1952)
- 没有附加阶段的失败不再借用另一个阶段的建议，因此文本到语音错误不再告诉您视频服务器放弃了下载（#1943）
- 应用程序无法分类的生成故障现在命名为后端错误类，因此两个不相关的故障不再作为相同的不可分类报告到达 (#1800)
- 转录听写唤醒桌面录音机，呈现一个上下文启动操作，并将其麦克风图标与标签居中（#1902）
- Colab 转录和配音现在包括明确的 ASR 模型设置步骤 (#1922) — 感谢 nidhi-singh02！
- Apple Silicon 现在在引擎选择器中显示一种规范的 OmniVoice 选择，同时保留其自动碰撞隔离边车运行时 (#1913)
- 在托管运行程序上的标准帐户下验证当前用户的 Windows 安装程序 (#1883)
- 模型下载可以在不稳定的连接中生存，而不是从零重新启动 (#1940)
- `bun run dev` 在 Windows 上恢复，而不是要求任务管理器 (#1941)
- 桌面应用程序再次从新克隆构建并打开 (#1818) - 感谢 flutterkage2k！
- VRAM 少于引擎所需的 GPU 不再获得 CPU 获得的一半计算时间预算 (#1806) - 感谢 VishvakR！
- 画廊语音预览再次播放 - 质量卫士将良好的渲染视为无声而拒绝（#1819） - 感谢 flutterkage2k！
- 波形符分隔的数字范围可以清晰说出，无需将它们的端点放在一起 (#1821) — 感谢 flutterkage2k！
- 语音模式使用主题选项卡，将“合成”和“转换”固定在滚动形式下方（#1823）
- 修复当前用户 Windows 安装程序验证和嵌套资源清理 (#1873)
- 在构建当前用户的 Windows 安装程序时保持生成的前端资源可用 (#1881)
- 语音克隆现在从明确的上传或记录选择开始，仅在需要时显示记录和参考详细信息，并在生产覆盖下保留采样控制（#1817）
- 首次运行的欢迎线使用 OmniVoice 和 VoiceDesign 引擎接受的指令 (#1861) - 感谢 psiberfunk！
- audio.cpp 加入引擎阵容，作为 Breeze-TTS-2 的可选 CPU 后端（英语 + 中文，克隆 + 语音设计，显式模型目录安装，无 Python venv）（#1891）
- audio.cpp 使用已安装的本机 CUDA、HIP、Metal 和 Vulkan 提供程序，并保留远程工作人员之间的设备路由 (#1926)
- 在引擎目录中显示估计和测量的模型、依赖项、缓存和临时磁盘成本 (#1718)
- 即使禁用自动发布后版本更新，预览版本现在仍比稳定版更新（#1762）
- CosyVoice 设置指南现在将下载的模型文件与运行时分开，使引擎可用 (#1761)
- MCP 工具现在可以通过返回文件并接受基本路径限制的文件输入来将音频排除在代理上下文之外 (#1760) - 感谢 agudmund！
- 键入时听到配音 — 选择加入实时预览流 TTS 编辑片段 (#1769) — 感谢 mvanhorn！
- Studio 获得了一种转换方法：用您保存的声音之一重述任何 clip，语音到语音，完全本地化 (#1765) — 感谢 mvanhorn！
- Hardsub 视频导出获得了可选择的卡拉 OK 单词突出显示字幕样式 (#1764) — 感谢 mvanhorn！
- 批处理队列现在可以观看文件夹：放入其中的新视频会自动配音 (#1768) — 感谢 mvanhorn！
- 有声读物播放器现在显示章节文本并突出显示正在叙述的单词 (#1766) - 感谢 mvanhorn！
- 配音编辑器获得了一个选角板：将语音芯片拖到扬声器上，下拉菜单保持同步（#1767）——感谢 mvanhorn！

### 已更改

- Tauri 2.11.5 具有更新的插件（对话框、更新器、日志、开启器、定位器、单实例）、React 19.3、TanStack Query 5.102、lucide 1.43、posthog-js 1.428 以及当前未成年人的 npm 工作区的其余部分； jsdom 30、jest-dom 7、同时 10、taze 21 (#1952)
- eslint 忽略 `src-tauri/`，因此本地 Tauri 构建不再因生成的资源中的解析错误而淹没 `lint:hooks` (#1952)
- 投射使用响应式 SVG 语音卡和位于周围面板上方的可搜索扬声器菜单 (#1823)
- 配音可调整输出设置，提前审阅状态，并简化文字记录和术语表编辑； Launchpad 文件和声音回流到响应式网格中 (#1823)
- 转录片段使用三行可读行进行文本、计时/状态和语音控制，其高度可适应换行 (#1823)
- 在 click 仍在寻找的同时水平拖动波形平移，保持定时转录对齐 (#1823)
- 批量片段编辑使用可搜索的语音和语言菜单、可读的语言名称和响应式选择工具栏（#1823）
- 配音在视频上叠加播放控件，在紧凑的时间轴中组合波形和脚本，并删除标题/动作背景填充 (#1823)
- 配音使用紧凑的选角、翻译和输出控件以及响应行，为编辑留出更多空间 (#1823)
- 导出使用分组格式设置、主题曲目菜单和开关，以及固定文件名摘要和下载操作 (#1823)
- 配音输出设置使用图标标记的开关、主题轨道和扬声器菜单以及更清晰的计时/脚本控制（#1823）
- 投射语音菜单使用带有 SVG 预设图标的可搜索主题选项，而不是本机下拉菜单 (#1823)
- 配音组选角和翻译控件具有可读标签、SVG 图标、可搜索菜单和紧凑的时间线间距 (#1823)
- 生产覆盖使用可读的图标标记控件和可访问的降噪/后处理开关 (#1823)
- 扩展导航使用带有微妙静态波渐变的主题色调（#1823）
- 将组源音频、目标语音和计时选项转换为更清晰的控制；设计选择包括主题匹配的 SVG 图标 (#1823)
- 可扩展的侧边栏显示具有受限制的活动状态的工作区标签；语言菜单适应更宽屏幕上的多列（#1823）
- 语音设计和录音使用主题化、键盘可访问的选择器，具有更清晰的间距和标签 (#1823)
- 语音选项卡和上传/录制控件具有微妙的 SVG 运动；文本添加 clipboard 粘贴，上传区域填充可用高度 (#1823)
- 标题栏标签在活动语音、转录和 LLM 引擎之间循环；捆绑模型标签正确显示 OmniVoice (#1823)
- 顶栏引擎面板将语音、转录和 LLM 选择分组到选项卡中，具有紧凑的内存控件并且没有重复的选择器 (#1823)
- 语音设计简化：12 行细粒度块通过 5 个字段编辑器折叠为一个摘要行，英语口音和中国方言合并到一个字段中，起点芯片现在显示 5，并带有溢出切换 (#1793)

### 添加

- 有声读物结果现在是同步歌词播放器：章节文本在播放后突出显示当前单词并进行 click 搜索，从渲染器自己的章节持续时间开始计时，采用卡拉 OK 风格均匀分割 — 无 ASR 通行证，完全本地化 (#1766) — 感谢 mvanhorn！
- 配音 CAST 条扩展为项目级选角板：将语音芯片（克隆配置文件、设计预设、默认）拖到扬声器行上 - 或从键盘列表框中选择 - 编写与现有下拉菜单相同的每个扬声器选角字段 (#1767) - 感谢 mvanhorn！
- Studio 的新 Convert 方法将丢弃或录制的 clip 转换为现有语音配置文件的语音，并具有可选的源持续时间匹配 (#1765) — 感谢 mvanhorn！
- 在批处理队列上选择加入监视文件夹：选择一个目录一次，新视频将根据您最后的“添加到队列”设置自动排队，并具有暂停/停止控件和进行中复制保护 - 文件以字节形式上传，路径永远不会离开应用程序 (#1768) - 感谢 mvanhorn！
- Hardsub 导出现在可以刻录卡拉 OK 单词突出显示字幕：选择加入线路 |卡拉 OK 控制从转录时持续的计时中呈现单词计时 ASS 扫描，为旧作业和翻译曲目提供均匀分割的回退，加上 `GET /dub/ass/{job_id}` sidecar (#1764) - 感谢 mvanhorn！
- Windows 版本现在包含可独立更新的每用户 MSI，无需提升即可安装和卸载 (#1713)
- 配音片段现在可以在编辑翻译行时流式传输实时 TTS — 选择加入切换、现有 `/ws/tts` 套接字、共享生成入场、导出仍以全质量渲染 (#1769) — 感谢 mvanhorn！
- 引擎状态和诊断包现在记录加载的执行提供程序、设备、精度、回退阶段、加速器标识、运行时版本和父进程内存可见性 (#1717)

### 文档

- PowerShell Docker 安装程序现在可以生成管理员密钥，而无需主机上的 Python (#1993) — 感谢 yangfan-yf-yf！
- 记录下 RTX 50 系列卡所需的火炬升级，以及解析器检查的第二个 pin 文件以及证明内核存在的命令 (#1931)
- Docker 快速入门现在解释仅限 AMD64 的图像，并将 Apple Silicon 用户引导至本机 macOS 应用程序 (#1921) - 感谢 yangfan-yf-yf！
- audio.cpp (Breeze-TTS-2) 现在是一个有记录的选择加入引擎：预构建的二进制安装、显式 GGUF 下载、语音模式和权重的研究/非商业术语 (#1891)
- `docs/STRUCTURE.md` 描述了这棵树现在的样子，现在的测试使其计数保持诚实 (#1981) - 感谢 Dawcraft！
- 本地 gigastt 现在被记录为受支持的 OpenAI 兼容 ASR 端点，具有与远程服务器不同的环回隐私 (#1736) — 感谢 ekhodzitsky！
- CosyVoice 指南现在指出打包版本没有 one-click 运行时安装程序，并记录[讨论 1631](https://github.com/debpalash/VoiceStudio/discussions/1631) 公开的确切准备情况检查 (#1761)
- 生产私有 API 指南现在涵盖固定容器、根凭证、网络隔离、流代理、运行状况检查、升级和基准证据 (#1720)
- WSL2 ROCDXG 上的 RX 6700 XT/gfx1031 现在明确未经验证，直到发布的端到端 GPU 工作负载证明映射路径为止 (#1716)

### 已修复

- One-click 引擎安装不再继承 VoiceStudio 自己的 PyTorch 引脚，这使得 MOSS-TTS-v1.5 和 Children4 无法安装 (#2024)
- 卸载翻译引擎不再删除 VoiceStudio 或其他引擎仍需要的软件包 (#2019)
- 关闭 Windows 上的听写丸会将其从屏幕上删除：一个空的黑色矩形用于留在那里，始终位于顶部，直到应用程序退出 (#2009)
- Windows 上的听写药丸不再位于比药丸本身更宽的边框卡内 (#2009)
- 听写使用您选择的模型，而不是后端启动之前记住的模型，因此在安装模型时，它会停止报告没有语音到文本模型 - 当没有模型时，主窗口会提供下载（#2012）
- 远程工作循环响应测试不再因共享 CI 硬件上的调度噪声而导致构建变红 (#1990)
- 当运行 VoiceStudio 的机器位于 Windows 上时，远程 GPU 工作人员可以工作：现在在每个操作系统上都以相同的方式识别分阶段输入，而不是使用只有 Windows 可以读取的路径 (#2005)
- 发音列表将 IPA 或 CMU 条目标记为尚未应用，因此您无需运行测试即可看到它 (#1949) — 感谢 utkarsha741！
- 远程工作人员测试不再在 Windows CI 上随机失败：它通过旋转线程工作所需的事件循环来等待后台线程 (#1990)
- 隔离的后端测试会话通过库存 Windows 结帐，CI 现在在那里运行它，因此它保持这种方式 (#1990)
- Windows 贡献者可以在没有开发人员模式的情况下运行测试套件：创建符号链接的测试现在会跳过，而不是因 `WinError 1314` 失败（#1990）
- 崩溃详细信息对话框现在显示退出代码的含义以及要尝试的内容，而不是显示原始数字和日志 (#1927)
- 崩溃报告现在包含后端的实际最后一句话：日志尾部是在垂死进程的最终输出落地后捕获的，而不是在它退出时捕获的（#1850）
- 当引导程序重新启动时，首次运行设置屏幕不再错误标记步骤：Rust 现在会显示每个阶段和日志行属于哪个尝试，而不是屏幕从每秒一次的轮询中猜测 (#1900)
- 端口 3900 冲突现在会命名实际持有它的人，并给出结束孤立后端的命令，而不是告诉您退出没有窗口的应用程序 (#1933) — 感谢 Chang-Jin-Lee！
- Windows 桌面启动不再在“加载 ML 运行时 (PyTorch)”时冻结：父活动看门狗轮询标准输入管道，而不是让读取挂起，这会导致 numpy 的 OpenBLAS 初始值设定项陷入僵局（#1952、#1955）
- `bun desktop-prod` 和 `bun desktop-fresh` 从安装前打开的终端找到 Rust 和 uv，就像 `bun desktop` 已经做的那样；缺少的 Rust 工具链在安装步骤中预先失败 (#1952)
- 语音合成进度不再达到虚构的 95%；它保持不确定，直到活跃的生成路径报告真正的进展（＃1907） - 感谢 psiberfunk！
- 后端日志选项卡在日志滚动期间持续显示历史记录，而不是在新行到达之前几乎为空（#1920）
- 清除日志现在也会清空旋转的日志文件，因此它释放了看起来的空间（#1920）
- 浏览器扩展引发的错误不再将其自身归档为 VoiceStudio 错误 (#1901)
- 清除桌面日志不再擦除后端的 stderr，这是本机崩溃留下的唯一记录，并且可以在重生后幸存下来（#1510）
- 长有声读物章节现在使用与其他 TTS 路线相同的设备和文本长度感知合成超时 (#1910) — 感谢 psiberfunk！
- 中断的有声读物渲染可以在选项卡导航后恢复缓存的章节，并且可以从恢复卡中使用它们的章节缓存（#1911）——感谢 psiberfunk！
- 系统检查详细信息和以数字或斜杠开头的存储路径不再呈现，且其前导文本移至行尾 (#1848) — 感谢 psiberfunk！
- 不可用的引擎行现在链接到该引擎的指南，因此通用的“检查安装和配置”消息可以发送给您（#1866） - 感谢 psiberfunk！
- 后端日志现在记录哪个引擎未通过健康检查以及其探测是否引发，而不是一条无法识别两者的行（#1866）——感谢 psiberfunk！
- 首次运行的活动日志会计算每一行，而不是在安装仍在运行时冻结在 200 行，并且 Copy 现在交还整个运行而不是最后 200 行 (#1847) — 感谢 psiberfunk！
- 长时间安装早期发生的首次运行失败会保留其具体建议，而不是在日志滚动超过 200 行后退回到通用重试提示 (#1847) — 感谢 psiberfunk！
- 打开日志面板不再 clips Launchpad 的标题并将功能卡向上滑动到其上 - 页面滚动而不是挤压自身 (#1859) - 感谢 psiberfunk！
- 分段模型下载将文件分割为 16 MB 范围，而不是每个连接一个范围，因此断开的连接会重新获取一个范围，而不是重新启动文件 (#1940)
- 在短暂的网络故障后，下载加速器会在重试期间保持不变，并从其清单中恢复，而不是回退到从零开始的 `snapshot_download` (#1940)
- `dev-backend.mjs` 在 Windows 上通过进程树停止后端，因此孤立的 uvicorn 不再保留端口 3900，并将源重新加载变成三个幻象崩溃 (#1941)
- `clear-dev-ports.mjs` 可以再次释放 Windows 上卡住的开发端口，绑定到检查的进程实例，因此回收的 pid 永远不会终止 (#1941)
- 签出所有权匹配不再解析带有主机分隔符的 POSIX 路径，这使得守卫自己的测试在 Windows 上失败（#1941）
- 安装文档帮助现在可以使用旧编码在 Windows 控制台上正确打印 (#1815) — 感谢 dajiao Huang！
- 保存的带有缺失或无效时间戳的转录现在仍然可读（#1799）——感谢 yunaremaia 和 @tvbht！
- 使用报告无段结束的引擎进行转录不再因服务器错误而失败；空计时通过段列表已经期望的方式传递（#1904）——感谢 aeroglu！
- 复制保存的转录现在使用共享的 clipboard 帮助程序并准确报告失败的副本 (#1803) - 感谢 tvbht！
- 语音参考准备在一次有界重试之前回收分配器内存，然后报告持续的 GPU 内存不足故障 (#1811)
- `bun run desktop` 现在在一个新的克隆上打开：`@tauri-apps/plugin-dialog` 的 Vite 别名不再假定嵌套的 `frontend/node_modules`，该包的工作区提升留下空（#1818） - 感谢 flutterkage2k！
- 缓慢的后端启动保持运行并进行进度更新，并且重试会中断启动而不会出现过时的超时故障 (#1809)
- 仅当存在记录的证据时，后端连接错误报告才会崩溃，并且诊断会等待取消（#1810）
- VRAM 少于引擎所需的 CUDA 或 ROCm GPU 现在可以获得 CPU 计算时间预算，而不是较短的加速预算，因为它会分页到系统 RAM 并且渲染速度比 CPU 慢 - 应用于本地生成、语音转换和远程工作人员截止日期等 (#1806) - 感谢 VishvakR！
- 在完美的渲染上，图库预览不再因“语音引擎返回没有可听音频”而失败：退化嗡嗡声防护根据合成信号校准的阈值测量了整个 clip 的频谱平坦度（因此跟踪 clip 长度的值），并拒绝了每种测试语言中的真实语音（#1819） - 感谢 flutterkage2k！
- 以英语、韩语、日语和中文说出整数、带符号和小数范围内的波形符分隔符 (#1821) — 感谢 flutterkage2k！
- 在切换方法时保持录制和转换工作的安全，同步配音语言控制，以及本地化时间线控制和计时警告（#1841）
- 有声书现在是与语音工作区匹配的“写入”→“投射”→“制作”选项卡工作区，警告/进度/结果栏固定在下面（#1841）
- 图库使用带有区域选项卡、细线部分分隔符、主题令牌卡和无边框导入行的工作区标题（#1841）
- 图库卡重置本机按钮面，在标题中群集图标操作，以便使用语音永远不会换行，并使用更宽敞的网格地板（#1841）
- 图库过滤器获得名称搜索、可清除所有图标的可移动图标化药丸以及每个方面的尺寸图标（#1841）
- 配音播放在波形解码之前开始，自动演员姓名可读，并且转录时间戳有更多空间（#1823）
- 标题栏引擎按钮保持紧凑和稳定，而 cycling 标签，引擎名称右对齐 (#1823)
- 长配音片段错误会包裹在有界的可滚动通知中，而不是扩大编辑器（#1823）
- 语音下拉列表匹配其字段宽度，使用主题重音，并且仅显示最近的语音一次（#1823）
- 语言菜单不再在搜索标题周围显示苍白的框架（#1823）
- 通知计数保留在标题栏中，而不是铃声上方的 clipping (#1823)
- 工作区引擎菜单在其按钮旁边打开，而不是在页面的另一边缘打开 (#1823)
- 克隆重用带有标志、搜索和单选的配音语言选择器，在固定的合成控件上方打开（#1823）
- 首次运行的欢迎线使用 OmniVoice 和 VoiceDesign 引擎接受的指令 (#1861) - 感谢 psiberfunk！
- 标题状态点现在尊重操作系统减少运动而不是脉冲（#1862） - 感谢 psiberfunk！
- 载入在本地读取 Hugging Face 令牌，保留 Windows CLI 登录信息，并需要在替换保存的凭据之前成功发现 (#1852) — 感谢 psiberfunk！
- 在日志检索成功之前或日志包含警告或错误时，日志面板不再报告“全部清除”(#1870) - 感谢 motodriver！
- MOSS 加速器路由和状态匹配运行时选择，当设备探测失败时 CPU 回退 (#1830) — 感谢 li-lizhe！
- 孔子加速器路由可以容忍失败的设备探测，dots.tts 在非 CUDA 主机上保持安全的默认精度（#1831）——感谢 li-lizhe！
- 在 macOS 上，标题状态点和踢球不再在重叠的交通灯下方渲染 (#1863) — 感谢 psiberfunk！
- 捕获小部件可以在录制后隐藏，并在空闲时恢复可见（#1865）——感谢 psiberfunk！
- 应用本机 Chrome 时，macOS 保留共享桌面窗口大小、调整大小限制和文件删除行为 (#1865) — 感谢 psiberfunk！
- 在 macOS 上，标题不再在本机交通灯旁边显示 Windows 风格的最小化/最大化/关闭按钮 (#1865) — 感谢 psiberfunk！
- 发布重试会替换自己部分上传的安装程序，而不会与现有资产发生冲突（#1871）
- 超时的语音引擎在重试之前完成进程清理，并且旧的超时回调无法杀死替换引擎（#1872）
- 快速 macOS 进程退出不再将完成的关闭变成权限错误 (#1809)
- 引导程序启动不再显示在热启动或修复同步时伪造的首次运行安装步骤 - 现在仅在实际观察到步骤后才呈现完成的步骤 (#1894)
- 被桌面 shell 的短暂关闭宽限期杀死的故意、干净的退出不再被报告为下次启动时的崩溃 - 运行哨兵现在在较慢的关闭步骤之前而不是之后清除（#1895）
- 模型目录引擎行在狭窄的外壳上堆叠成一列，而不是屏幕外的 clipping 操作 (#1891)
- 简体中文语言环境完成：翻译了所有 486 个缺失的按键，并将奇偶校验棘轮收紧至零（#1877）——感谢年份！
- 生成计算时间预算现在是一个设置控件（性能和设备），而不是仅设置环境变量，建议在没有 UI 路径的情况下设置超时错误 - 错误复制点也在那里，并且长 CPU/MPS 渲染在开始之前会得到预先提示（#1787）
- Windows：现在，当安装路径在非 UTF-8 系统代码页上包含非英语字符（例如 CJK 用户名）时，后端可以启动 - 新的或损坏的 Python 环境现在会自动在 ASCII 安全路径上构建（健康的现有环境永远不会被重新定位），如果解释器在 `site` 中仍然崩溃，则会显示一条特定的错误消息，指出原因和有效修复（#1783）
- 当桌面应用程序和后端解析不同的数据目录时，导出和其他本机选择器操作不再出现 403 错误并显示“桌面授权无效或过期”。开发模式或自定义数据文件夹（#1781）
- 语音设计不再让你同时选择中国方言和英语口音 - 选择器使它们保持互斥，而不是往返 400 (#1771)
- 桌面应用程序不再仅在版本字符串上附加到已运行的后端：它现在也会验证后端的实际代码指纹，因此报告当前版本但运行旧代码（例如过时的 `destination_path` 导出 422）的孤立或手动启动的后端将被替换而不是采用（#1770）
- 韩语语言环境大修：纠正了 231 个错误翻译，翻译了所有 493 个缺失的键 (#1776) — 感谢 j30231！
- 日语“清洁…”克隆状态现在读取为去噪而不是内务管理 (#1775) — 感谢 j30231！
- 批量配音队列现在有一个 UI 入口点 - 配音登陆上的一个安静链接（以前无法访问：应用程序切换到从未设置过的模式）（#1768） - 感谢 mvanhorn！
- OpenAI 兼容的 ASR 现在需要 HTTPS 外部环回并拒绝重定向，以便音频保留在配置的源上 (#1736)
- Windows 隔离引擎现在保留直接作业所有权，无需额外的 Python 管理进程，该进程可能导致子加载程序死锁 (#1734)
- 设置启动现在会等待后端的全部启动预算，而不是在两分钟后报告缓慢的 Windows CUDA 初始化卡住 (#1749)
- 配音作业现在可以重用自动 ASR 检测生成的每个源语言代码，而不会在下次上传时出现 400 错误 (#1737)
- 不完整的 Sherpa-ONNX 模型快照现在可以在识别器启动之前进行自我修复，而不是因丢失 ONNX 文件而失败 (#1733)
- OmniVoice 子进程启动现在允许缓慢打包的 Windows Python 运行时在终止前发出就绪信号 (#1711)
- 在源分析期间选择的 SRT 文件现在等待说话者克隆，然后替换转录文本而不会丢失声音 (#1709)
- Windows MSI 部署现在可以禁止使用 `DISABLEWEBVIEW2BOOTSTRAP=1` 进行 WebView2 引导，并且 `AUTOLAUNCHAPP=0` 可靠地抑制首次启动 (#1714)
- 字幕行现在提供 100 毫秒定时步进器并标记相邻重叠，无需精确的时间线拖动 (#1710)
- 修复同步失败现在保留 uv 的最终依赖错误，而不是仅报告不透明的退出状态 (#1705)
- YouTube 摄取现在重试 yt-dlp 的瞬时“页面需要重新加载”响应 (#1706)
- 听写模型准备情况现在遵循“设置”中选择的实时拥抱脸部缓存（#1707）
- 听写捕获现在在其 webview 侦听器卸载或重新加载时将本机事件排队，而不是将它们发送给任何人 (#1707)
- 桌面包含的后端现在会在其所属应用程序消失时退出，而不是作为陈旧的端口 3900 进程生存（#1707）
### Linux x64 工件

```
9481a253b3a426884ff3e7ea44cb6fe9ef367221f6594784d3be947fdc3e3a86  VoiceStudio_0.5.2_amd64.AppImage
9ff6f0302e6d208933f234403d6033e02871d62effc3ee0598b7ef0dde44bc18  VoiceStudio_0.5.2_amd64.AppImage.sig
```


### Windows x64 工件

```
6c9772bd7b6fa0395e1406d8a33f092ba842857bf3172de1560afe642f39aed4 *VoiceStudio_0.5.2_x64_en-US.msi
ba6b8a40f1dc15cc1427df16aaddb944466e4cdbc54614ef359ba8601049bca8 *VoiceStudio_0.5.2_x64_en-US.msi.sig
ef1166f429a9bf71658b17a4b0f716a2ac7d6bf8735279fb9ddb2c6b447bb73d *VoiceStudio_Current_User_0.5.2_x64_en-US.msi
4f5fc055f787160c263b056f1fcc94efe8960d805bb56eea13fde6c820a37110 *VoiceStudio_Current_User_0.5.2_x64_en-US.msi.sig
```


### macOS 英特尔工件

```
4286aebb95272953f95e450d4df7e40ea111614ef5df88eef912c60957e0fdb4  VoiceStudio_0.5.2_x64.dmg
15fd2df6ea3a3b17ee07eaf2433356ba2128dfddd13276bf57d1b59c8e7038d6  VoiceStudio.app.tar.gz
16a836d8083f57dc322872139a9470f2d3b2a6b616f320be6b44e3da88af6778  VoiceStudio.app.tar.gz.sig
```
## 贡献者

谢谢大家💜
<a href="https://github.com/debpalash" title="@debpalash"><img src="https://github.com/debpalash.png?size=64" width="48" alt="@debpalash"/></a> <a href="https://github.com/psiberfunk" title="@psiberfunk"><img src="https://github.com/psiberfunk.png?size=64" width="48" alt="@psiberfunk"/></a> <a href="https://github.com/Chang-Jin-Lee" title="@Chang-Jin-Lee"><img src="https://github.com/Chang-Jin-Lee.png?size=64" width="48" alt="@Chang-Jin-Lee"/></a> <a href="https://github.com/mvanhorn" title="@mvanhorn"><img src="https://github.com/mvanhorn.png?size=64" width="48" alt="@mvanhorn"/></a> <a href="https://github.com/flutterkage2k" title="@flutterkage2k"><img src="https://github.com/flutterkage2k.png?size=64" width="48" alt="@flutterkage2k"/></a> <a href="https://github.com/j30231" title="@j30231"><img src="https://github.com/j30231.png?size=64" width="48" alt="@j30231"/></a> <a href="https://github.com/li-lizhe" title="@li-lizhe"><img src="https://github.com/li-lizhe.png?size=64" width="48" alt="@li-lizhe"/></a> <a href="https://github.com/CoDe-ReDz" title="@CoDe-ReDz"><img src="https://github.com/CoDe-ReDz.png?size=64" width="48" alt="@CoDe-ReDz"/></a> <a href="https://github.com/Dawcraft" title="@Dawcraft"><img src="https://github.com/Dawcraft.png?size=64" width="48" alt="@Dawcraft"/></a> <a href="https://github.com/SomSamantray" title="@SomSamantray"><img src="https://github.com/SomSamantray.png?size=64" width="48" alt="@SomSamantray"/></a> <a href="https://github.com/VishvakR" title="@VishvakR"><img src="https://github.com/VishvakR.png?size=64" width="48" alt="@VishvakR"/></a> <a href="https://github.com/agudmund" title="@agudmund"><img src="https://github.com/agudmund.png?size=64" width="48" alt="@agudmund"/></a> <a href="https://github.com/dajiaohuang" title="@dajiaohuang"><img src="https://github.com/dajiaohuang.png?size=64" width="48" alt="@dajiaohuang"/></a> <a href="https://github.com/dependabot" title="@dependabot"><img src="https://github.com/dependabot.png?size=64" width="48" alt="@dependabot"/></a> <a href="https://github.com/marreiradigital" title="@marreiradigital"><img src="https://github.com/marreiradigital.png?size=64" width="48" alt="@marreiradigital"/></a> <a href="https://github.com/michaelhuamanflores" title="@michaelhuamanflores"><img src="https://github.com/michaelhuamanflores.png?size=64" width="48" alt="@michaelhuamanflores"/></a> <a href="https://github.com/motodriver" title="@motodriver"><img src="https://github.com/motodriver.png?size=64" width="48" alt="@motodriver"/></a> <a href="https://github.com/nidhi-singh02" title="@nidhi-singh02"><img src="https://github.com/nidhi-singh02.png?size=64" width="48" alt="@nidhi-singh02"/></a> <a href="https://github.com/yangfan-yf-yf" title="@yangfan-yf-yf"><img src="https://github.com/yangfan-yf-yf.png?size=64" width="48" alt="@yangfan-yf-yf"/></a> <a href="https://github.com/yearth" title="@yearth"><img src="https://github.com/yearth.png?size=64" width="48" alt="@yearth"/></a> <a href="https://github.com/yuezheng2006" title="@yuezheng2006"><img src="https://github.com/yuezheng2006.png?size=64" width="48" alt="@yuezheng2006"/></a>

---

> 📦 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · 🏷️ 版本：`v0.5.2` · 📅 发布：2026-09-10 · [查看英文原版 Release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
