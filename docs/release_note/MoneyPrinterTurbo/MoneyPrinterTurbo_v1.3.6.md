---
title: "MoneyPrinterTurbo v1.3.6"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.6"
version: "v1.3.6"
published: "2026-09-02"
type: "patch"
lang: "en"
summary: "Added native Volcano Engine Ark Seedance video generation for generating source clips directly from script segments."
---

# MoneyPrinterTurbo v1.3.6

[English](#en-v1.3.6) | [中文](#cn-v1.3.6)

<h2 id="en-v1.3.6">Highlights</h2>

- Added native Volcano Engine Ark Seedance video generation for generating source clips directly from script segments.
- Added OFox multi-model text-to-video support, allowing Seedance, Wan, and other models to share one API key.
- Added Metaso MiniMax H3 text-to-video support with `768P`/`2K` output, 4–15 second clips, and `9:16`, `16:9`, and `1:1` aspect ratios.
- Added an OpenAI-compatible text-to-image material source for cloud relays and local gateways.
- Added OpenRouter and APIMart as OpenAI-compatible LLM providers.
- Added a WebUI Auto-Publish settings tab for Upload-Post, with clearer API key and account setup guidance.
- Added CLI batch manifest mode and applied saved WebUI settings as CLI defaults when command-line values are omitted.
- Added configurable source clip fit modes: `cover` fills the frame by cropping excess edges, while `contain` preserves the complete source with letterboxing.
- Added complete French and Korean WebUI translations.
- Reorganized material source settings, grouped video sources by capability, and centralized AI video provider credentials in the WebUI settings.

## Security

- Restricted browser cross-origin API access to same-origin requests by default. Trusted standalone browser frontends can be enabled explicitly with `CORS_ALLOWED_ORIGINS`.
- Added provenance and SBOM attestations to published container images.

## Fixes and Improvements

- Measured narration duration from the generated audio file instead of relying only on subtitle cues.
- Anchored the SiliconFlow subtitle timeline to the complete audio duration.
- Ensured `AudioFileClip` resources are closed in ElevenLabs, Chatterbox, and Fish Audio paths.
- Prevented script cleanup from greedily removing unrelated bracketed or parenthesized text.
- Removed a misleading retry warning after the final LLM attempt.
- Fixed Redis URLs when no password is configured.
- Preserved log records when the project root and log destination are on different mounts.
- Fixed Unicode console output after successful CLI generation on Windows.
- Added safe, portable download filenames, including RFC-compatible quoting and protection from Windows-reserved names.
- Improved WebUI preview behavior on headless servers by falling back to browser playback and download.
- Decoupled Upload-Post configuration from automatic publishing so settings can be saved without enabling uploads.
- Hardened OpenAI-compatible image handling: malformed 200 responses now skip only the affected keyword, while local storage failures stop further paid requests.

## Upgrade Notes

- Browser API access now defaults to same-origin requests. Standalone web frontends must declare their trusted origins through `CORS_ALLOWED_ORIGINS`; server-side clients such as `curl`, Postman, and n8n are unaffected.
- CLI commands now inherit saved WebUI settings for omitted options. Explicit CLI arguments and batch manifest values still take precedence.

## What's Changed

- Add Fish Audio to the English and Japanese provider documentation by @c020627 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1246
- Add container provenance and SBOM attestations by @kobihikri in https://github.com/harry0703/MoneyPrinterTurbo/pull/1140
- Add the Upload-Post Auto-Publish WebUI settings by @parveen0029 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1209
- Improve headless WebUI video preview behavior by @abhiunix in https://github.com/harry0703/MoneyPrinterTurbo/pull/1252
- Apply saved WebUI settings as CLI defaults by @Gainto in https://github.com/harry0703/MoneyPrinterTurbo/pull/1225
- Decouple Upload-Post configuration from automatic publishing by @mcgeand in https://github.com/harry0703/MoneyPrinterTurbo/pull/1259
- Preserve logs across different filesystem mounts by @SandroHub013 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1260
- Add CLI batch manifest mode by @lihuiyang1024 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1243
- Fix API download filename quoting by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1265
- Use human-readable batch manifest size errors by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1264
- Fix Redis URLs without passwords by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1266
- Remove the final spurious LLM retry warning by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1267
- Anchor SiliconFlow subtitles to the full audio duration by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1268
- Measure narration duration from the real audio file by @YUSAKRU in https://github.com/harry0703/MoneyPrinterTurbo/pull/1263
- Close TTS audio clips reliably by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1269
- Make script bracket and parenthesis cleanup non-greedy by @Mihir7027 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1270
- Add APIMart OpenAI-compatible LLM support in https://github.com/harry0703/MoneyPrinterTurbo/commit/ab1c790
- Add OpenRouter LLM support by @brizzio in https://github.com/harry0703/MoneyPrinterTurbo/pull/1277
- Fix successful CLI runs on consoles that cannot encode Unicode by @housine35 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1282
- Add configurable source clip fit modes by @emanuelsc3s in https://github.com/harry0703/MoneyPrinterTurbo/pull/1287
- Avoid Windows-reserved WebUI download filenames by @Sushanth012 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1288
- Add the OpenAI-compatible text-to-image material source by @joker1point in https://github.com/harry0703/MoneyPrinterTurbo/pull/1291
- Skip malformed successful image responses without aborting the task by @joker1point in https://github.com/harry0703/MoneyPrinterTurbo/pull/1296
- Add Korean WebUI localization based on @greekr4's contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1193
- Add French WebUI localization based on @PocketBinary's contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1248
- Add native Volcano Engine Ark Seedance support based on @lihuiyang1024's contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1276
- Add OFox multi-model video generation by @celeste1900 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1292
- Add Metaso MiniMax H3 video generation and centralized AI video provider settings in https://github.com/harry0703/MoneyPrinterTurbo/commit/44ce430
- Restrict cross-origin browser access based on the security report from @AkshatJoshi2000.

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.5...v1.3.6

---

<h2 id="cn-v1.3.6">重点更新</h2>

- 新增火山引擎方舟 Seedance 原生视频生成服务，可根据脚本片段直接生成视频素材。
- 新增 OFox 多模型文生视频服务，一个 API Key 即可调用 Seedance、Wan 等模型。
- 新增秘塔 MiniMax H3 文生视频服务，支持 `768P`/`2K`、4～15 秒片段，以及 `9:16`、`16:9` 和 `1:1` 三种画幅。
- 新增适用于云端中转和本地网关的 OpenAI 兼容文生图素材源。
- 新增 OpenRouter 和 APIMart OpenAI 兼容大语言模型服务商。
- WebUI 新增 Upload-Post 自动发布设置，并完善 API Key 和账号名称的申请、配置指引。
- CLI 新增批量清单模式；未显式传入命令行参数时，可以继承 WebUI 已保存的默认设置。
- 新增素材画面适配模式：`cover` 通过裁剪边缘填满画面，`contain` 保留完整素材并在比例不同时增加黑边。
- 新增完整的法语和韩语 WebUI 翻译。
- 重新整理素材来源设置，按能力对视频来源分组，并将 AI 视频服务商凭据统一集中到 WebUI 设置中管理。

## 安全性

- 浏览器跨域 API 访问现在默认遵循同源策略；如需使用独立网页前端，可以通过 `CORS_ALLOWED_ORIGINS` 显式配置可信来源。
- 发布的容器镜像新增构建来源证明和 SBOM 软件物料清单证明。

## 修复与改进

- 改为从真实生成的音频文件测量旁白时长，不再仅依赖字幕时间轴。
- 将 SiliconFlow 字幕时间轴末尾与完整音频时长对齐。
- 确保 ElevenLabs、Chatterbox 和 Fish Audio 链路始终关闭 `AudioFileClip` 资源。
- 修复脚本文本清理可能贪婪删除多组括号内容的问题。
- 移除大语言模型最后一次重试结束后误导性的“正在重试”日志。
- 修复 Redis 未配置密码时生成错误鉴权片段的问题。
- 修复项目目录和日志目录位于不同挂载点时日志记录丢失的问题。
- 修复 Windows 终端无法编码 Unicode 时，CLI 在视频成功生成后异常退出的问题。
- 改进下载文件名的安全性和跨平台兼容性，包括标准引用编码以及 Windows 保留名称保护。
- 无图形桌面的服务器环境下，WebUI 会回退到浏览器播放和下载视频。
- 将 Upload-Post 配置与自动发布开关解耦，允许用户保存配置但不立即启用上传。
- 加强 OpenAI 兼容文生图异常处理：HTTP 200 返回损坏图片时仅跳过当前关键词，本地存储失败时则停止后续付费请求。

## 升级说明

- 浏览器调用 API 现在默认遵循同源策略。独立网页前端需要通过 `CORS_ALLOWED_ORIGINS` 配置可信来源；`curl`、Postman、n8n 等服务端调用不受影响。
- CLI 未显式传入参数时，会继承 WebUI 保存的设置；明确传入的 CLI 参数和批量清单字段仍拥有更高优先级。

## 主要变更

- [#1246](https://github.com/harry0703/MoneyPrinterTurbo/pull/1246)：在英文和日语文档中补充 Fish Audio，感谢 @c020627。
- [#1140](https://github.com/harry0703/MoneyPrinterTurbo/pull/1140)：为容器镜像增加构建来源证明和 SBOM，感谢 @kobihikri。
- [#1209](https://github.com/harry0703/MoneyPrinterTurbo/pull/1209)：新增 Upload-Post 自动发布 WebUI 设置，感谢 @parveen0029。
- [#1252](https://github.com/harry0703/MoneyPrinterTurbo/pull/1252)：改进无图形桌面服务器上的 WebUI 视频预览，感谢 @abhiunix。
- [#1225](https://github.com/harry0703/MoneyPrinterTurbo/pull/1225)：CLI 支持继承 WebUI 已保存设置，感谢 @Gainto。
- [#1259](https://github.com/harry0703/MoneyPrinterTurbo/pull/1259)：将 Upload-Post 配置和自动发布解耦，感谢 @mcgeand。
- [#1260](https://github.com/harry0703/MoneyPrinterTurbo/pull/1260)：修复跨文件系统挂载时日志记录丢失，感谢 @SandroHub013。
- [#1243](https://github.com/harry0703/MoneyPrinterTurbo/pull/1243)：新增 CLI 批量清单模式，感谢 @lihuiyang1024。
- [#1265](https://github.com/harry0703/MoneyPrinterTurbo/pull/1265)：修复 API 下载文件名引用编码，感谢 @Mihir7027。
- [#1264](https://github.com/harry0703/MoneyPrinterTurbo/pull/1264)：使用更易读的批量清单大小错误提示，感谢 @Mihir7027。
- [#1266](https://github.com/harry0703/MoneyPrinterTurbo/pull/1266)：修复 Redis 未配置密码时的连接 URL，感谢 @Mihir7027。
- [#1267](https://github.com/harry0703/MoneyPrinterTurbo/pull/1267)：移除最后一次 LLM 尝试后的错误重试提示，感谢 @Mihir7027。
- [#1268](https://github.com/harry0703/MoneyPrinterTurbo/pull/1268)：将 SiliconFlow 字幕与完整音频时长对齐，感谢 @Mihir7027。
- [#1263](https://github.com/harry0703/MoneyPrinterTurbo/pull/1263)：从真实音频文件测量旁白时长，感谢 @YUSAKRU。
- [#1269](https://github.com/harry0703/MoneyPrinterTurbo/pull/1269)：可靠释放 TTS 音频资源，感谢 @Mihir7027。
- [#1270](https://github.com/harry0703/MoneyPrinterTurbo/pull/1270)：修复脚本括号内容清理的贪婪匹配，感谢 @Mihir7027。
- [ab1c790](https://github.com/harry0703/MoneyPrinterTurbo/commit/ab1c790)：新增 APIMart OpenAI 兼容大语言模型服务商。
- [#1277](https://github.com/harry0703/MoneyPrinterTurbo/pull/1277)：新增 OpenRouter 大语言模型服务商，感谢 @brizzio。
- [#1282](https://github.com/harry0703/MoneyPrinterTurbo/pull/1282)：修复部分 Windows 终端中的 CLI Unicode 输出异常，感谢 @housine35。
- [#1287](https://github.com/harry0703/MoneyPrinterTurbo/pull/1287)：新增可配置的素材画面适配模式，感谢 @emanuelsc3s。
- [#1288](https://github.com/harry0703/MoneyPrinterTurbo/pull/1288)：避免 WebUI 使用 Windows 保留名称下载文件，感谢 @Sushanth012。
- [#1291](https://github.com/harry0703/MoneyPrinterTurbo/pull/1291)：新增 OpenAI 兼容文生图素材源，感谢 @joker1point。
- [#1296](https://github.com/harry0703/MoneyPrinterTurbo/pull/1296)：损坏的成功图片响应不再中断整个任务，感谢 @joker1point。
- [#1193](https://github.com/harry0703/MoneyPrinterTurbo/pull/1193)：吸收并完善韩语 WebUI 翻译，感谢 @greekr4。
- [#1248](https://github.com/harry0703/MoneyPrinterTurbo/pull/1248)：吸收并完善法语 WebUI 翻译，感谢 @PocketBinary。
- [#1276](https://github.com/harry0703/MoneyPrinterTurbo/pull/1276)：吸收并完善火山引擎方舟 Seedance 原生支持，感谢 @lihuiyang1024。
- [#1292](https://github.com/harry0703/MoneyPrinterTurbo/pull/1292)：新增 OFox 多模型视频生成，感谢 @celeste1900。
- [44ce430](https://github.com/harry0703/MoneyPrinterTurbo/commit/44ce430)：新增秘塔 MiniMax H3 视频生成，并统一 AI 视频服务商设置。
- 根据 @AkshatJoshi2000 的安全报告，限制不可信浏览器来源访问 API。

**完整变更记录**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.5...v1.3.6

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.6` · 2026-09-02 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
