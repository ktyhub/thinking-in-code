---
title: "VoiceStudio v0.5.3"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.3"
version: "v0.5.3"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# VoiceStudio v0.5.3

**新面貌。一个新的桌面应用程序。仍然是您的声音，在您的机器上。**

VoiceStudio 迁移到 **Electron** 并推出 v0.5.3：重新设计的工作区，用于语音克隆、语音设计、故事、配音和转录。 Electron 现在是 Windows、macOS 和 Linux 上的主要桌面应用程序。本地语音创建仍然在您自己的硬件上运行，无需所需的帐户或 API 密钥。

![VoiceStudio 的新 Electron 界面：语音克隆、保存的语音、工作区导航和合成控件](https://raw.githubusercontent.com/debpalash/VoiceStudio/v0.5.3/docs/media/electron/voice-cloning.png)

**亮点**

- 重新设计的桌面，具有专用工作区、可折叠导航和可调整大小的侧边栏（#1823、#2129）
- 使用模型包和可选听写配置的四步设置（#2129）
- 更好的配音：可缩放的时间线、保存的翻译方向以及保留对话周围的背景声音（#2129）
- 适用于 VoxCPM2、MOSS-TTS-Nano 和 CosyVoice 3 的更简单的模型目录和 one-click 安装（#2013、#2021、#2022、#2025）
- 在较旧的 NVIDIA GPU 和实时远程工作人员 CPU、GPU 和内存读数上实现更可靠的生成（#2135、#2155）

![Electron 配音工作区，包含源代码和翻译的演示、语言控制和同步播放](https://raw.githubusercontent.com/debpalash/VoiceStudio/v0.5.3/docs/media/electron/dubbing.png)

**获取新的桌面应用程序**

|平台|电子安装程序 |
| ---| ---|
| Windows x64 | [下载EXE](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-win-x64.exe) |
| macOS 苹果芯片 | [下载DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-mac-arm64.dmg) |
| macOS 英特尔 | [下载DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-linux-x64.AppImage) · [DEB](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-linux-x64.deb) |

**从金牛座搬来？单独安装 Electron。**

v0.5.3 也是 Tauri 的最终更新。 Tauri 更新程序不会将您切换到 Electron；选择上面的 **VoiceStudio-Electron** 安装程序。旧版 Tauri 资产仍可用于现有安装。

1. 关闭 Tauri 并备份其整个数据目录，以及存储在其他位置的所有参考音频。
2. 安装 Electron 并在生成之前检查其存储/后端配置指向您现有的数据。切勿同时针对该目录运行两个应用程序。
3. 验证您的声音、项目、历史记录和模型位置；在移除 Tauri 之前生成一个短的 clip。
4. 重新检查设备、快捷方式、主题、后端地址、权限和凭据。不保证桌面首选项和凭据能够转移。

[阅读迁移指南](https://github.com/debpalash/VoiceStudio/blob/v0.5.3/docs/electron-migration.md) · [比较自v0.5.2以来的所有更改](https://github.com/debpalash/VoiceStudio/compare/v0.5.2...v0.5.3)

### 已更改

- Electron 成为主要桌面应用程序； Tauri 保留单独的最终更新路径 (#2157)
- 工作区侧边栏调整大小并记住其宽度；视频预览显示缩略图并保持播放控件在视图中 (#2129)
- 模型目录将语音、转录和语言模型与引擎详细信息和可下载权重组合在一起（#2013、#2020）
- 模型和语音预览移至“设置”→“存储”； Hugging Face 镜子移至网络 (#2013)
- 集成获得一个可搜索的工作区，涵盖 100 多种工具，以及提供程序详细信息和配置指南 (#2129)
- 支持页面获得捐赠卡、工作区快捷方式和赞助商联系方式（#2129）
- README 添加了 Electron UI 导览并刷新了屏幕截图；可安装的代理技能遵循新的桌面工作流程（#2129、#2157）
- 自述文件解释了桌面过渡并欢迎贡献 (#2153) - 感谢 @cyberspace-cs！

### 添加
- VoxCPM2、MOSS-TTS-Nano 和 CosyVoice 3 安装在隔离环境中，不会干扰其他引擎（#2021、#2022、#2025）
- 远程工作人员报告 CPU、GPU 和内存使用情况；不可用的读数与零不同（#2155）——感谢@velixio！
- 配音翻译显示实时日志，支持取消和重试，并记住自定义音调指令（#2129）

### 已修复

- 较旧的 NVIDIA GPU，包括 Tesla T4，不再杀死第一代的后端 (#2135) - 感谢 @Shivendra-Coherent！
- 通过环境覆盖禁用 torch.compile 跨桌面平台工作；本机崩溃留下诊断堆栈 (#2135) — 感谢 @Shivendra-Coherent！
- 配音保持短片段成比例，支持时间轴缩放，并删除重复的转录上下文（#2129）
- 配音保留对话之外的原始声音，保持替换语音完整，修复丢失的语音缓存，并拒绝不完整的输出（#2129）
- 配音演示保持跨语言播放一致，并且可以在编辑器中打开示例（#2131、#2157）
- 现在，在视频加载完成之前按“播放”即可在准备就绪时启动视频 (#2129)
- 原生听写、监视文件夹和 Wayland 快捷方式共享桌面合约；聚焦粘贴保持有序（#2122）
- macOS 侧边栏控件清除窗口按钮； Linux 和 Windows 侧边栏标题一致地展开和折叠（#2126、#2129）
- 在 macOS 上停止已存在的进程不再报告权限失败 (#2032)
- YouTube 机器人检查错误解释了如何在 Dub 中提供登录 cookie (#2036、#2034) — 感谢 @celvintr！
- 引擎启动失败区分超时、崩溃和无效响应（#2037、#2026）——感谢@dajiao Huang！
- PyTorch Whisper 转录 M4A 文件并在 6 GB NVIDIA 卡上使用适合模型的 VRAM 预算（#2042、#2039、#2044、#2041） — 感谢 @xabiherdz-svg！
- MCP 转录等待遵循后端超时，而不是在 120 秒后失败（#2043、#2040） — 感谢 @xabiherdz-svg！
- CosyVoice 3 依赖项更新解决了五个安全建议（#2030、#2031）

### CI

- 发布发布等待平台工件和校验和；未签名的 Electron 构建需要显式的所有者调度（#2029、#2157）
- 桌面集成检查涵盖当前的配音、导航和模型工作流程；工作人员拆卸测试可以容忍较慢的 Windows 运行者（#2157、#2038）

### 贡献者

- @debpalash — Electron 迁移、重新设计的工作区、发布工程以及社区修复的集成。
- @Shivendra-Coherent — 老 NVIDIA 一代修复和编译/崩溃诊断 (#2135)。
- @velixio — 远程工作人员遥测和可靠性改进 (#2155)。
- @cyberspace-cs — Electron 过渡的文档 (#2153)。
- 感谢 @ShimeKano、@celvintr、@dajiao Huang 和 @xabiherdz-svg 提供此版本的 GPU、下载、启动、转录和 MCP 修复背后的错误报告。
- @dependabot[bot] 提供的依赖项更新（#2030、#2031）。

### 电子安装程序 trust
这些 Electron 安装程序未签名或临时签名，并且未经 Apple 公证。
Windows/macOS 可能会显示 trust 警告。 macOS 自动更新未经验证；
使用手动安装程序更新。 Tauri 更新程序签名保持独立验证。

---

> 📦 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · 🏷️ 版本：`v0.5.3` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
