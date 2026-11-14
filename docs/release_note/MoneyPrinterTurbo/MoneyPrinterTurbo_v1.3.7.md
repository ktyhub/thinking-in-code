---
title: "MoneyPrinterTurbo v1.3.7"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.7"
version: "v1.3.7"
published: "2026-09-13"
type: "patch"
lang: "en"
summary: "Added word-by-word subtitles and a pop-up spring animation, with independent controls for display mode and animation in the WebUI."
---

# MoneyPrinterTurbo v1.3.7

[English](#en-v1.3.7) | [中文](#cn-v1.3.7)

<h2 id="en-v1.3.7">Highlights</h2>

- Added word-by-word subtitles and a pop-up spring animation, with independent controls for display mode and animation in the WebUI.
- Added preset background music selection with in-browser audio preview, so you can listen before generating a video.
- Added native pauses to scripts with Azure TTS V1 (Edge TTS): use `[pause: 2s]` or `[停顿: 2s]` to insert silence while keeping narration and subtitles aligned.
- Added Kokoro and VoxCPM TTS providers. Kokoro supports a self-hosted OpenAI-compatible service and automatically loads the server's voice list.
- Added Claude Code as an LLM provider using an authenticated Claude subscription, with dedicated Docker deployment files; also added the OpenAI-compatible API Route provider.
- Improved Shengsuan Cloud video generation with account-specific model discovery, quotes and explicit cost confirmation, plus clip-count recommendations based on narration duration.
- Reduced repeated material selection across videos generated in the same task when using Pexels, Pixabay, Coverr, or local files. Material reuse is reported when the available pool is insufficient.
- Added a YouTube “Made for kids” audience setting to Upload-Post publishing.
- Added Azerbaijani WebUI localization and updated translations for the new settings and prompts.

## Fixes and Improvements

- Improved subtitle animation rendering, including synchronized scaling of subtitle images and transparency masks to avoid black outlines when subtitles appear.
- Hardened Kokoro voice discovery and audio handling: retain the selected voice when the service is unavailable and validate generated audio before replacing existing files.
- Added pause-tag validation and improved multi-segment narration/subtitle synchronization; invalid speech chunks now stop generation rather than silently producing incomplete narration.
- Handled non-finite voice rates such as `NaN` and infinity more safely.
- Fixed the WebUI launch script's port check when the project path contains spaces, and corrected imports and repository paths in the Colab notebook.
- Added periodic log messages while FFmpeg concatenation is running, making long-running processing easier to diagnose.
- Extended material cache cleanup to reclaim temporary files left behind by interrupted writes.
- Updated the agent helper to support `openai_image` and recognize `claude_code` as a keyless LLM provider.
- Synced the documented Edge TTS voice list with the built-in catalog and clarified where to find the Windows one-click package in release Assets.

## Usage and Upgrade Notes

- Subtitle defaults remain **sentence display with no animation**. Word-by-word timing works best with Azure TTS V1 (Edge TTS) or Whisper; providers without word-level timestamps may display phrases or whole sentences instead.
- Script pause tags are supported only with Azure TTS V1 (Edge TTS), with individual pauses from **0.1 to 10 seconds**.
- Kokoro requires a separately running compatible TTS service. Claude Code requires its CLI and subscription authentication; selecting either provider does not install or authenticate the underlying service automatically.
- The YouTube audience setting is an explicit user declaration, not automatic content classification. It defaults to **not made for kids**; review the setting before uploading.
- Batch material allocation reduces reuse within a single task; it does not guarantee unique footage when there are too few source clips and does not change paid AI material providers' allocation behavior.

## What's Changed

- Word-by-word subtitles and spring animation — @farhanahmad15 in [#1313](https://github.com/harry0703/MoneyPrinterTurbo/pull/1313).
- Preset background music selection — @farhanahmad15 in [#1314](https://github.com/harry0703/MoneyPrinterTurbo/pull/1314), followed by [audio preview improvements](https://github.com/harry0703/MoneyPrinterTurbo/commit/9f0b28f8e87db76feee2d49ad3d98a31b43a9532).
- Claude Code subscription provider — @fred-ng in [#1319](https://github.com/harry0703/MoneyPrinterTurbo/pull/1319).
- WebUI launcher support for paths containing spaces — @tailieu2212 in [#1321](https://github.com/harry0703/MoneyPrinterTurbo/pull/1321).
- Kokoro TTS provider — @rocketlang in [#1325](https://github.com/harry0703/MoneyPrinterTurbo/pull/1325).
- Shengsuan Cloud video workflow improvements — adapted from @huanglvjing's contribution in [#1328](https://github.com/harry0703/MoneyPrinterTurbo/pull/1328), incorporated in [5ceffd0](https://github.com/harry0703/MoneyPrinterTurbo/commit/5ceffd02a267de2ede0bbdb0fab8d7d875ea9842).
- Native script pauses — @IsmaelCamC in [#1330](https://github.com/harry0703/MoneyPrinterTurbo/pull/1330).
- Non-finite voice rate handling — @Sushanth012 in [#1333](https://github.com/harry0703/MoneyPrinterTurbo/pull/1333).
- Colab notebook fixes — @FrioNode in [#1334](https://github.com/harry0703/MoneyPrinterTurbo/pull/1334).
- Azerbaijani WebUI translation — @jamalkamaladdin in [#1339](https://github.com/harry0703/MoneyPrinterTurbo/pull/1339).
- Reduced batch material reuse — @giteePro in [#1340](https://github.com/harry0703/MoneyPrinterTurbo/pull/1340).
- Edge TTS voice catalog documentation — @dajiaohuang in [#1341](https://github.com/harry0703/MoneyPrinterTurbo/pull/1341).
- VoxCPM TTS provider — @lottshin in [#1343](https://github.com/harry0703/MoneyPrinterTurbo/pull/1343).
- Orphaned material cache temporary-file cleanup — @c020627 in [#1345](https://github.com/harry0703/MoneyPrinterTurbo/pull/1345).
- Release Assets download guidance — @c020627 in [#1349](https://github.com/harry0703/MoneyPrinterTurbo/pull/1349).
- FFmpeg concatenation progress logging — @c020627 in [#1351](https://github.com/harry0703/MoneyPrinterTurbo/pull/1351).
- Agent helper support for image generation and keyless Claude Code — @c020627 in [#1352](https://github.com/harry0703/MoneyPrinterTurbo/pull/1352) and [#1353](https://github.com/harry0703/MoneyPrinterTurbo/pull/1353).
- API Route LLM provider — @DennyHo0917 in [#1354](https://github.com/harry0703/MoneyPrinterTurbo/pull/1354), with README updates by @c020627 in [#1355](https://github.com/harry0703/MoneyPrinterTurbo/pull/1355).
- YouTube audience declaration — [bfd7612](https://github.com/harry0703/MoneyPrinterTurbo/commit/bfd7612d43121e53b850a45ecb036b545e19b128).

Thanks to all contributors and everyone who reported issues and helped test these changes!

**Full Changelog**: [v1.3.6...v1.3.7](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.6...v1.3.7)

---

<h2 id="cn-v1.3.7">重点更新</h2>

- 新增逐词字幕和弹跳出现动画，WebUI 可分别选择字幕显示模式与动画效果。
- 新增预设背景音乐选择与浏览器内试听，生成视频前即可确认配乐效果。
- 新增 Azure TTS V1（Edge TTS）脚本停顿支持：使用 `[停顿: 2s]` 或 `[pause: 2s]` 插入静音，并同步调整配音与字幕时间轴。
- 新增 Kokoro 和 VoxCPM 配音服务。Kokoro 支持自托管的 OpenAI 兼容服务，并自动读取服务端音色列表。
- 新增通过已认证 Claude 订阅使用的 Claude Code 大模型服务，提供专用 Docker 部署文件；同时新增 OpenAI 兼容的 API Route 大模型服务。
- 优化胜算云视频生成流程，支持读取当前账号可用模型、获取报价和确认费用，并根据旁白时长推荐素材数量。
- 减少同一任务批量生成多个视频时的素材重复，适用于 Pexels、Pixabay、Coverr 和本地文件；素材不足而发生复用时会给出提示。
- Upload-Post 新增 YouTube“是否面向儿童”受众设置。
- 新增阿塞拜疆语 WebUI 翻译，并补齐新设置与提示的多语言文案。

## 修复与改进

- 优化字幕动画渲染，同步缩放字幕画面与透明蒙版，避免字幕出现时产生黑色轮廓。
- 完善 Kokoro 音色读取与音频处理：服务暂时不可用时保留原有音色选择，替换文件前校验生成音频。
- 增加停顿标签校验，改进分段配音与字幕同步；无效语音片段会中止生成，避免静默输出缺失旁白的成片。
- 完善 `NaN`、无穷大等非有限语速值的处理。
- 修复项目路径包含空格时 WebUI 启动脚本的端口检查，并修正 Colab notebook 的缺失导入和仓库路径。
- FFmpeg 拼接期间增加定期日志，便于判断长时间处理状态和排查问题。
- 素材缓存清理支持回收写入中断后遗留的临时文件。
- Agent 辅助脚本新增 `openai_image` 支持，并正确识别无需 API Key 的 `claude_code` 服务。
- 将 Edge TTS 文档音色列表与内置音色库同步，并明确 Windows 一键包在 Release Assets 中的下载位置。

## 使用与升级说明

- 字幕默认仍为**按句显示、无动画**。逐词时间轴在 Azure TTS V1（Edge TTS）或 Whisper 下最准确；其他服务缺少逐词时间戳时，可能按短语或整句显示。
- 脚本停顿标签仅支持 Azure TTS V1（Edge TTS），单次停顿范围为 **0.1～10 秒**。
- Kokoro 需要单独运行兼容的配音服务；Claude Code 需要安装 CLI 并完成订阅认证。选择服务商不会自动完成底层服务的安装或认证。
- YouTube 受众设置由用户主动声明，不会自动识别视频内容。默认**非面向儿童**，上传前请根据实际内容确认。
- 批量素材分配仅减少同一任务内的重复；素材不足时仍可能复用，不保证每条视频的画面完全不同，也不改变付费 AI 素材服务的分配行为。

## 主要变更

- [#1313](https://github.com/harry0703/MoneyPrinterTurbo/pull/1313)：逐词字幕与弹跳动画，感谢 @farhanahmad15。
- [#1314](https://github.com/harry0703/MoneyPrinterTurbo/pull/1314)：预设背景音乐选择，感谢 @farhanahmad15；后续补充了[音乐试听](https://github.com/harry0703/MoneyPrinterTurbo/commit/9f0b28f8e87db76feee2d49ad3d98a31b43a9532)。
- [#1319](https://github.com/harry0703/MoneyPrinterTurbo/pull/1319)：Claude Code 订阅大模型服务，感谢 @fred-ng。
- [#1321](https://github.com/harry0703/MoneyPrinterTurbo/pull/1321)：修复含空格路径下的 WebUI 启动检查，感谢 @tailieu2212。
- [#1325](https://github.com/harry0703/MoneyPrinterTurbo/pull/1325)：Kokoro 配音服务，感谢 @rocketlang。
- [#1328](https://github.com/harry0703/MoneyPrinterTurbo/pull/1328)：吸收并优化胜算云视频生成流程，感谢 @huanglvjing，已通过 [5ceffd0](https://github.com/harry0703/MoneyPrinterTurbo/commit/5ceffd02a267de2ede0bbdb0fab8d7d875ea9842) 纳入。
- [#1330](https://github.com/harry0703/MoneyPrinterTurbo/pull/1330)：脚本原生停顿支持，感谢 @IsmaelCamC。
- [#1333](https://github.com/harry0703/MoneyPrinterTurbo/pull/1333)：非有限语速值处理，感谢 @Sushanth012。
- [#1334](https://github.com/harry0703/MoneyPrinterTurbo/pull/1334)：修复 Colab notebook，感谢 @FrioNode。
- [#1339](https://github.com/harry0703/MoneyPrinterTurbo/pull/1339)：阿塞拜疆语 WebUI 翻译，感谢 @jamalkamaladdin。
- [#1340](https://github.com/harry0703/MoneyPrinterTurbo/pull/1340)：减少批量视频素材重复，感谢 @giteePro。
- [#1341](https://github.com/harry0703/MoneyPrinterTurbo/pull/1341)：同步 Edge TTS 音色文档，感谢 @dajiaohuang。
- [#1343](https://github.com/harry0703/MoneyPrinterTurbo/pull/1343)：VoxCPM 配音服务，感谢 @lottshin。
- [#1345](https://github.com/harry0703/MoneyPrinterTurbo/pull/1345)：清理素材缓存遗留临时文件，感谢 @c020627。
- [#1349](https://github.com/harry0703/MoneyPrinterTurbo/pull/1349)：完善 Release Assets 下载指引，感谢 @c020627。
- [#1351](https://github.com/harry0703/MoneyPrinterTurbo/pull/1351)：FFmpeg 拼接进度日志，感谢 @c020627。
- [#1352](https://github.com/harry0703/MoneyPrinterTurbo/pull/1352)、[#1353](https://github.com/harry0703/MoneyPrinterTurbo/pull/1353)：Agent 辅助脚本支持文生图与免 API Key 的 Claude Code，感谢 @c020627。
- [#1354](https://github.com/harry0703/MoneyPrinterTurbo/pull/1354)：API Route 大模型服务，感谢 @DennyHo0917；[#1355](https://github.com/harry0703/MoneyPrinterTurbo/pull/1355) 补齐 README 说明，感谢 @c020627。
- [bfd7612](https://github.com/harry0703/MoneyPrinterTurbo/commit/bfd7612d43121e53b850a45ecb036b545e19b128)：YouTube 受众声明设置。

感谢所有贡献代码、反馈问题和参与测试的朋友！

**完整变更记录**：[v1.3.6...v1.3.7](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.6...v1.3.7)

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.7` · 2026-09-13 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
