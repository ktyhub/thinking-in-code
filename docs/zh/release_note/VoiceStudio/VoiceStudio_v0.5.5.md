---
title: "VoiceStudio v0.5.5"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.5"
version: "v0.5.5"
published: "2026-09-22"
type: "patch"
lang: "zh"
---

# VoiceStudio v0.5.5

**您的声音，另一种语言。** 克隆工作区现在在更改语音样本时保留您选择的输出语言。例如，英语参考可以使用多语言引擎阅读法语脚本；克隆中的自动遵循脚本，而不是继承参考配置文件的语言。

此版本还使 Electron 安装更容易恢复，修复了脚本编辑器和集成目录故障，并使故障报告更有用。

**下载**

|平台|安装人员|
| ---| ---|
| Windows x64 | [安装程序](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-win-x64.exe) |
| macOS 苹果芯片 | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-mac-arm64.dmg) |
| macOS 英特尔 | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-linux-x64.deb) |

**升级：** 安装在您现有的 Electron 应用程序上。如果安装程序询问，请选择 **安装本地运行时** 以刷新其依赖项。 0.5.4 → 0.5.5 升级已使用保存的语音和设置进行了测试。

**从 Tauri 迁移：** 关闭应用程序，备份其数据目录，安装 Electron，并在删除 Tauri 之前验证您的声音和项目。请遵循[迁移指南](https://github.com/debpalash/VoiceStudio/blob/v0.5.5/docs/electron-migration.md)。 Tauri v0.5.3 仍然是 Tauri 的最终版本；它的更新程序无法安装 Electron。 Intel Mac 支持具有远程后端的 UI。

**安装程序 trust：** Electron 安装程序未签名或临时签名，并且未经 Apple 公证。 Windows/macOS 可能会显示 trust 警告。 macOS 自动更新未经验证；使用手动安装程序更新。请参阅[安装指南](https://github.com/debpalash/VoiceStudio/blob/v0.5.5/docs/install/troubleshooting.md)。存档的 Tauri 更新程序签名未更改。

**亮点**

- 克隆在选择、上传或保存参考语音时保留目标语言 (#2272)
- 使用一个命令安装 Electron 版本或构建 main；卸载而不丢失数据 (#2269)
- 当出现问题时获得更清晰的崩溃报告和本地渲染诊断（#2267，#2266）——感谢@shivsin25！
- 放置脚本光标而不重新打开表达式菜单 (#2268) — 感谢 @bipul0525！

### 添加

- 诊断包包括本地渲染阶段计时和操作计数，无需录制脚本文本或音频 (#2266) — 感谢 @shivsin25！

### 已修复

- 在Clone中，显式Auto跟随目标脚本；更改参考语音不再重置输出语言 (#2272)
- 全新的运行时设置使用托管 Python 并在报告成功之前验证 SentencePiece (#2270) — 感谢 @mamislimen！
- 语音识别启动错误保留其实际原因并避免不相关的重新安装建议 (#2128) — 感谢 @Sip19！
- 当供应商共享 URL 时，集成卡保持独特，包括在搜索和过滤之后 (#2273)
- macOS shell 安装刷新应用程序注册，防止运行时替换，并将已删除的应用程序移至垃圾箱 (#2269)
- 升级保留由存档设置记录的自定义和便携式存储路径（#2269）
- 崩溃报告区分本机故障、Python 错误和终止信号 (#2267) — 感谢 @shivsin25！

### 贡献者

- @Shivendra-Coherent 和 @shivsin25 — 本机崩溃诊断 (#2267)。
- @bipul0525 — 脚本编辑器光标交互 (#2268)。
- @debpalash — 克隆、安装、运行时恢复、集成和发布验证。

### Bug 记者

- @shivsin25 — 长格式渲染诊断 (#2266)。
- @Sip19 — 语音识别初始化错误 (#2128)。
- @mamislimen 和 @quan0pek — 本机后端崩溃报告（#2270、#2250）；受影响主机的确认仍然悬而未决。

---

> 📦 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · 🏷️ 版本：`v0.5.5` · 📅 发布：2026-09-22 · [查看英文原版 Release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
