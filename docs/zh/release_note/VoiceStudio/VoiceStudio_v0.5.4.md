---
title: "VoiceStudio v0.5.4"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.4"
version: "v0.5.4"
published: "2026-09-21"
type: "patch"
lang: "zh"
---

# VoiceStudio v0.5.4

**工作引擎、更流畅的长格式音频和有用的本地集成。** CosyVoice 使用较新的 Transformer 修复其运行时并保留语音上下文。故事和有声读物获得更清晰的音频连接、更好的脚本控制和更可靠的 EPUB 导入。 Electron 设置和诊断使故障更容易恢复，而无需丢弃下载的模型或现有项目。

**下载**

|平台|安装人员|
| ---| ---|
| Windows x64 | [安装程序](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.4/VoiceStudio-Electron-0.5.4-win-x64.exe) |
| macOS 苹果芯片 | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.4/VoiceStudio-Electron-0.5.4-mac-arm64.dmg) |
| macOS 英特尔 | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.4/VoiceStudio-Electron-0.5.4-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.4/VoiceStudio-Electron-0.5.4-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.4/VoiceStudio-Electron-0.5.4-linux-x64.deb) |

已经在使用 Electron 了吗？安装在您现有的应用程序上并保留您的数据。如果出现提示，请选择 **安装本地运行时** 以刷新其依赖项。从金牛座搬来？在关闭应用程序的情况下备份您的数据目录，安装 Electron，然后在删除 Tauri 之前验证您的声音和项目。请遵循[迁移指南](https://github.com/debpalash/VoiceStudio/blob/v0.5.4/docs/electron-migration.md)。 Tauri v0.5.3 仍然是 Tauri 的最终版本；它的更新程序无法安装 Electron。

**亮点**

- 修复 CosyVoice 生成和多个引擎安装路径，而不删除下载的模型（#2258、#2240、#2243）
- 更清晰的故事和有声读物连接、脚本控制和 EPUB 导入（#2259、#2216、#2203、#2228）
- 导出本地 n8n 语音工作流程并通过 MCP 配置 Claude Code 或 Cursor (#2261、#2257)
- 更可靠的 Electron 设置、听写和可操作的崩溃报告（#2221、#2245、#2123、#2262）
- 通过配音和字幕导入保留对话、时间和背景音频（#2222、#2224、#2242）

### 已更改

- 主侧边栏（导航、语音库、状态）保留在“设置”上，而不是交换为单独的面板；设置部分现在位于它旁边的一列中（#2209） - 感谢@jaketame！
- 主导航位于侧边栏标题的正下方，语音库的上方，因此它不再随着库的高度而移动（#2210）——感谢@jaketame！

### 添加

- Claude Code 和 Cursor 集成页面为当前后端提供 MCP 设置，并合并重复的目录路由 (#2257)

- 设置 → 外观 → 保持侧边栏展开：当项目、转录、工具或其他工作区在较窄的窗口上打开自己的面板时，停止侧边栏收缩到轨道 (#2211) — 感谢 @jaketame！
- 故事和有声读物：“清除脚本”按钮可以在一个确认的步骤中清空整个脚本（导入或输入的每一行和每一章），而不是一次一个垃圾图标；演员阵容被保留（#2203）——感谢@jaketame！
- 故事的粘贴和拆分现在可以按句子、段落（新的默认设置）或整个章节进行拆分，因此单个叙述者不再被切成每句话一个镜头（#2217）——感谢@jaketame！

### 已修复

- 当工作线程完成与超时检查竞争时，保留已完成的生成结果（#2264）

- CosyVoice 修复了缺失的运行时依赖项并使用较新的 Transformers 保留语音上下文 (#2096) — 感谢 @martinezpl！
- Electron 本机崩溃报告保留故障线程，而不是将其丢失在长堆栈和扩展列表后面 (#2262)

- Electron 设置标准化 Windows 代理地址，同时保留显式覆盖和本地主机排除 (#2114)
- Web API-参考恢复保留选定的后端和凭据； AudioSeal 嵌入和检测标准化模型采样率而不改变导出的音频尺寸 (#2252) — 感谢 @joseedson18jc！

- LM Studio 发现尊重所选模型，听写细化在处理不支持的推理选项时保留文字文本 (#2252) — 感谢 @joseedson18jc！
- CosyVoice 使用匹配的 float32 权重和输入，无需 CUDA，防止工作线程数据类型故障，同时保留 CUDA 精度 (#2096)
- Source Electron 启动重用准备好的 Python 运行时，而不是在启动超时内下载依赖项 (#2184)
- 克隆、故事和有声读物禁用具有声明语言列表的引擎不支持的输出语言选择 (#2104)

- 故事和有声读物：生成，章节跟踪器和渲染状态固定在设置窗格中，而不是位于脚本的最后一行下方，并且禁用的生成现在说明了原因（#2229） - 感谢@jaketame！
- EPUB 导入不再将未标记的预告片页面、“作者”列表、出版商地址页面或杂散脚注页面转换为章节 - 书籍声明的开头及其内容决定正面和背面的内容 (#2228) - 感谢 @jaketame！
- 重试临时媒体工具安装锁定并报告失败的清理而不是隐藏它（#2214） - 感谢@baoyu0！

- 桌面应用程序将后端指向它已经发布的 `uv`，因此在全新安装时，one-click 引擎安装会停止预检失败，并显示“未找到 uv” - 打包的二进制文件位于应用程序自己的资源目录中，该目录不在 `PATH` 上，并且 GUI 启动也不会继承 shell 的 `PATH` 添加内容（#2221、#2215） - 谢谢@shivsin25 用于修复，@baoyu0 用于诊断！
- IndexTTS 使用 Python 3.11 进行安装，并在重试时修复不兼容的环境，而无需删除下载的权重 (#2098) — 感谢 @martinezpl！
- VoxCPM2 语音设计使用其本机控制格式，并且样式请求不再继承参考记录的交付 (#2093) — 感谢 @nevilbutani 和 @martinezpl！
- 配音背景保留和长导出可与较新的 FFmpeg 版本一起使用，该版本删除了旧的过滤器文件选项 (#2236) — 感谢 @quan0pek！

- 故事：整本书的阅读速度从折叠的演员卡底部移至语音和语言旁边的设置卡，显示有多少行覆盖它，并在一个 click 中重置它们（＃2230） - 感谢@jaketame！
- 项目：完成的故事或有声读物显示其标题及其制作方式（声音、速度、引擎、长度、设置），而不是裸露的文件名（#2233）——感谢@jaketame！
- 有声读物和故事渲染不再在行之间出现声音中断：每行的引擎填充都被修剪，并且行和段落之间有一个故意的、可调节的间隙（#2216）——感谢@jaketame！
- 修复dots.tts依赖引脚和包含空格的路径，并使用OpenFst源安装构建指南（#2101）——感谢@martinezpl！

- 在模型加载之前拒绝不支持的合成语言，包括命名选择器选择和每项批处理语言 (#2219) — 感谢 @rollroyces！
- EPUB 导入叙述这本书，而不是它的印刷家具：页码不再粘在文字上或显示为单独的行，封面/标题/奉献/版权/内容页面被跳过，章节标题来自本书的目录 (#2208) — 感谢 @jaketame！
- 故事：在渲染有声读物时，长脚本不再覆盖生成进度面板和生成/停止页脚 (#2213) — 感谢 @jaketame！
- 将 macOS 听写键盘操作保留在主线程上，以防止粘贴传递崩溃 (#2123)
- 防止参考语音克隆以静默方式下载第二个语音识别器（#2116）
- 从视频下载的滚动字幕中进行配音，每行都讲一次，同时保留有意重复的对话 (#2222) — 感谢 @kevin9327！

- 捆绑 Linux 本机帮助程序库，以便在没有特定于发行版的 libxdo 软件包的情况下启动听写和 clipboard 支持 (#2196)
- 下载门控模型权重和依赖项时转发保存的 Hugging Face 令牌 (#2173) — 感谢 @shivsin25！
- 在 Electron、Web 和流媒体生成中一致地解释不支持的已保存配置文件语言 (#2175) — 感谢 @shivsin25！
- 列出每种已安装的 Kokoro 语言并接受其显示名称，包括英式英语 (#2174) — 感谢 @drakeo338！

- 在重用桌面运行时之前验证 Python 依赖项，并为不完整的环境提供设置 (#2176)
- 在开始语音转换之前检查活动模型克隆支持（#2147）
- 在桌面生命周期回归检查中接受有效的 SIGKILL 诊断 (#2170)

- 修复 CTranslate2 在 ASR 和翻译中安全加载，并在 CPU 回退期间保留加载的 Whisper 模型 (#2165) — 感谢 @guruthechosen！
- 避免踏板轮在不受支持的 CPU 指令上崩溃 (#2080) — 感谢 @D3nii！
- 在 CUDA 容器中包含 CTranslate2 的 cuDNN 8 兼容性库 (#2072) — 感谢 @basil-k-aji-dev！
- 无需 TorchCodec 即可保留音频读取、写入和参考幅度 (#2083) — 感谢 @Moep90！
- 给隔离引擎请求大小的最后期限，验证超时覆盖，并区分挂起和崩溃（#2109）（#2111）——感谢@SurefireStudios和@LMGXENON！
- 在安静的步骤中保持配音流的活动，并延迟模型清理，直到本机细化结束（＃2138） - 感谢@denemon！
- 在 ffmpeg 旁边找到 ffprobe，而不更改父目录名称 (#2107) — 感谢 @kapelame！
- 在加入 MLX 输出块之前将它们重新采样到声明的速率 (#2106) — 感谢 @kapelame！
- 阅读中文、日文和韩文 Windows 上的数据库迁移配置 (#2075) — 感谢 @kevin9327！
- 保留毫秒并跨秒边界携带圆角字幕时间戳 (#2074) — 感谢 @kevin9327！
- 在 Electron、Web 和后端路由中解码 UTF-16 和 Windows-1252 字幕和手稿导入 (#2073) — 感谢 @kevin9327！
- 保留数字字幕对话，同时识别混合索引和未索引提示 (#2151) — 感谢 @shivsin25！
- 解析粘贴的 WebVTT 提示，同时分离元数据、标识符、空提示和完整的时间线 (#2077) — 感谢 @kevin9327！
- 标准化 Argos 语言别名，无需默默地将繁体中文更改为简体中文（#2143、#2152） — 感谢 @gyanu2507 和 @rollroyces！
- 澄清 Blackwell 导入崩溃诊断，而不归咎于内核缺失 (#2084) — 感谢 @Moep90！
- 区分架构预检拒绝和独立编译堆栈失败（#2085）——感谢@Moep90！
- 需要固定的 Apple Silicon GGUF 构建来传递和记录运行时预检条件 (#2115) — 感谢 @LMGXENON 和 @martinezpl！
- 更正工具和文档中的 Windows Rustup 安装命令 (#2066) — 感谢 @Rukhaam！
- 当远程本机引擎安装不可用时显示本地设置指南 (#2166)
- 显示已清理的本机错误尾部和失败的配音提取的退出代码 (#2167)

### 文档

- 使用提示目标 Electron 进行安装，活动脚本、CI 和贡献者指南将 Tauri 视为已存档 (#2220)
- 当上游配置名称缺少训练集群路径时加载已安装的 IndexTTS 检查点，无需重写用户文件 (#2097) — 感谢 @martinezpl！
- 克隆错误命名活动的 mlx-audio 模型并推荐 CSM，同时保留替代引擎作为后备（#2204、#2201） — 感谢 @shivsin25！
- 导出的 WebVTT 字幕和转录在播放器中保留“I <3 you”或包含整个 `-->` 的提示，而不是剪切或清空它 (#2226) — 感谢 @kevin9327！
- EPUB 导入使用其声明的编码或字节顺序标记保留重音和宽字符文档 (#2191) — 感谢 @kevin9327！
- 视频水印导出和配音关键帧使用捆绑的 FFmpeg，无需安装系统 (#2192) — 感谢 @kevin9327！
- 恢复自动提交的错误报告中的后端错误类 - Electron 应用程序文件通过共享报告生成器，而共享报告生成器从未携带它，因此每个其他通用故障的报告与下一个报告无法区分（#2197） - 感谢@shivsin25！
- 流生成失败将其后端错误类携带到报告中，而不是将其丢弃在流边界处 (#2197) — 感谢 @shivsin25！
- 释放缓存的 Ascend NPU 内存并在切换引擎时识别其专用 VRAM (#2194) — 感谢 @li-lizhe！
- 下载并粘贴的 WebVTT 字幕在编辑器和配音中显示为 `&`、`<` 和 `>`，而不是 `&amp;`、`&lt;` 和 `&gt;` (#2223) — 感谢 @kevin9327！
- 中文、日文和韩文 Windows 上的源安装将捆绑数据读取为 UTF-8，防止启动和生成失败 (#2190) — 感谢 @kevin9327！
- MOSS-TTS-Nano 安装其音频后端，并为较旧的托管安装提供依赖项修复，而无需删除缓存的模型（#2182、#2100）——感谢 @rollroyces 和 @martinezpl！
- 从克隆中解析 Kongfz4 模型资产，同时保留相关配置、缓存和引用路径，并拒绝丢失的引用 clips (#2181、#2099) — 感谢 @rollroyces 和 @martinezpl！
- GPT-SoVITS 可以使用显式配置的默认语音，并避免服务器端重新分割，从而删除子句 (#2200) — 感谢 @jaketame！
- 在不输入内容的情况下按 Tab 键浏览配音片段的开始或结束时间不再将其移动到最接近的十分之一秒或更改其速度 (#2224) — 感谢 @kevin9327！

- 将 GPT-SoVITS 连接到其 api_v2 端点，接受健康的探测响应，并在生成之前需要参考 clip（#2180、#2102）——感谢 @rollroyces、@martinezpl 和 @jaketame！
- 在不受支持的 GPU、Windows 应用程序控制块或音频文件错误上失败的流式生成现在会说明如何操作，而不仅仅是“生成失败。检查所选引擎并重试”。 （#2195，#2177）——谢谢@shivsin25！
- 重试时无法成功的失败 - 不支持的 GPU 版本、被阻止的文件 - 被报告为最终失败，因此应用程序停止重新渲染整个段落以达到相同的错误（#2195、#2177） - 感谢 @shivsin25！
- 将 .srt 导入故事中会保留对话仅是数字的提示，例如倒计时 (#2225) — 感谢 @kevin9327！

### CI

- Electron 打包预演在通过之前在 Linux、Windows 和 Apple Silicon 上安装并启动新的托管运行时 (#2263)

- 使本机 ASR 超时回归在慢速运行者上可靠并等待其工作清理 (#2202)

- 处理丢失的 Electron 签名凭证并重试打包修复，而无需移动发布标签 (#2157)

### 贡献者

- @D3nii — 与较新的踏板轮不支持的 CPU 的兼容性。
- @LMGXENON — 引擎截止日期、超时诊断和 Apple Silicon 构建文档。
- @Moep90 — 音频 I/O 回退和 GPU 兼容性指南。
- @Rukhaam — Windows 工具链设置指南。
- @Shivendra-Coherent 和 @shivsin25 — 数字字幕对话、门控下载和配置文件语言错误。
- @SurefireStudios — 请求大小的 sidecar 生成截止日期。
- @basil-k-aji-dev — CUDA 容器中的 cuDNN 兼容性库。
- @denemon — 配音流保活和取消清理。
- @guruthechosen — CTranslate2 修复和 Whisper CPU 恢复。
- @gyanu2507 和 @rollroyces — Argos 语言规范化和回归覆盖。
- @kapelame — ffprobe 发现和 MLX 音频重采样。
- @kevin9327 — 字幕计时、文本编码、WebVTT 和 Windows 数据库迁移。
- @drakeo338 — Kokoro 支持的语言报告。
- @debpalash — 集成、Electron 运行时恢复、本地化、回归覆盖和发布维护。
- @jaketame — 侧边栏导航、脚本控制、EPUB 导入、长格式音频和 GPT-SoVITS 兼容性。
- @joseedson18jc — API 恢复、LM Studio 发现、听写细化和 ​​AudioSeal 采样率处理。
- @li-lizhe — 升腾 NPU 内存清理和设备检测。

### 错误报告

- 感谢 @YChhunsann、@martinezpl、@denemon、@adeelahmadsiddique、@TehSmoo、@kmsitcomputer、@raya-mansouri、@infinitete 和 @kor1998 提供上述修复背后的报告。
- 感谢@daniilganiev、@nevilbutani、@quan0pek、@baoyu0、@moonjoke001、@Splintercell89、@OtterBeWorking 和@iOSDevSK 提供额外的设置、引擎、配音和听写报告。

---

> 📦 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · 🏷️ 版本：`v0.5.4` · 📅 发布：2026-09-21 · [查看英文原版 Release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
