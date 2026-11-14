---
title: "MoneyPrinterTurbo v1.3.8"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.8"
version: "v1.3.8"
published: "2026-10-03"
type: "patch"
lang: "en"
summary: "English | 中文"
---

# MoneyPrinterTurbo v1.3.8

[English](#en-v1.3.8) | [中文](#cn-v1.3.8)

<h2 id="en-v1.3.8">Highlights</h2>

- Added continuous progress reporting during stock footage downloads, clip processing, and final rendering, with task logs from background helper threads visible in the WebUI.
- Added configurable stock material and clip rendering concurrency. Stock material concurrency applies to Pexels, Pixabay, and Coverr; both settings default to **1 (serial processing)**.
- Added VoxCPM reference-audio voice cloning and optional delivery conditioning to carry over pacing and emotion, with local Whisper transcription for editable reference transcripts.
- Added Fluxion AI, Cheaper Inference, Requesty, FutureInfra, Y-API, and iFlytek Spark (Astron MaaS) LLM providers.
- Added MuAPI as a video material source, with model endpoint configuration and asynchronous generation.
- Added Catalan WebUI localization.
- Improved video color consistency by using the BT.709 conversion matrix and color metadata in the main rendering pipeline.
- Added an opt-in **local video project CLI** with revision tracking, change comparison, and reuse of unchanged rendering artifacts when replacing scenes, narration, or background music.

## Fixes and Improvements

- Improved Redis task updates, queue admission, and startup recovery to reduce lost fields, scheduling conflicts, and stalled queues. Invalid queued requests no longer prevent later usable tasks from being dispatched.
- Added deadlines for stalled FFmpeg operations and improved temporary-file cleanup. Failed encodes no longer replace successful video outputs with incomplete files.
- Improved concurrent rendering by isolating concatenation manifests and intermediate clips across jobs and video combinations.
- Streamed remote video downloads into the cache, added download limits and validation, and improved cache identity and cleanup to avoid reusing the wrong asset or removing fresh downloads.
- Improved local material handling, including supported upload formats, image decoding, camera orientation, CMYK colors, and rejection of album artwork mistakenly identified as video footage.
- Preserved timestamps appearing in subtitle text, punctuation in Whisper word results, and manual line breaks. Disabled subtitles no longer pick up stale caption files.
- Improved subtitle timing fallback and concurrent Whisper initialization. Empty subtitle results now fail explicitly instead of publishing caption files without cues.
- Hardened narration generation across multiple providers: validate audio before replacing existing files, preserve successful narration when export fails, and stop unsafe retries after synthesis has already been accepted.
- Improved pause-segment assembly and Azure timing conversion, and fixed narration-only exports ignoring the configured audio volume.
- Improved script and keyword generation validation, preventing provider error messages from being accepted as generated content. Updated Groq’s retired default model and passed Claude Code prompts through stdin.
- Added WebUI preflight validation for local materials and custom narration. Improved settings-cache serialization, active task refresh, historical-data handling, version checks, and failed audio-upload cleanup.
- Hardened uploaded filenames, subtitle font paths, media size limits, and render parameters. Expanded Windows smoke coverage and fixed subprocess output decoding to use UTF-8.
- Rejected redirects for several credentialed or potentially paid requests, reducing credential exposure and accidental repeat submissions.
- Improved Upload-Post result validation and recovery tracking. Queued publishing retains the selected account, and YouTube privacy settings are preserved even without generated metadata.
- Improved API download URLs, special-character escaping, media types, range handling, boolean parsing, CORS origin normalization, and validation-error responses.
- Updated provider documentation, example configuration, and the agent helper to better match supported CLI features and material sources.

## Usage and Upgrade Notes

- **Both concurrency settings default to 1.** Higher stock material concurrency may trigger provider rate limits; higher clip rendering concurrency uses more CPU and memory. Increase them according to your environment.
- VoxCPM reference audio and delivery transcripts are sent to ModelBest when synthesis is requested. Use only your own voice or recordings you are authorized to use. Optional local Whisper transcription may download the configured model on first use.
- The local video project workflow is **CLI-only and initially scoped to prepared local footage and narration**. It does not add a WebUI video editor or automatically generate scripts, speech, subtitles, or transitions. Retained source snapshots and revisions require additional disk space.
- Custom subtitle fonts must resolve inside the project’s **`resource/fonts`** directory. External paths and symlinks pointing outside that directory are rejected.
- Providers or gateways that redirect generation requests now require their final API endpoint to be configured directly. An unconfirmed paid request stops local processing rather than being automatically resubmitted; this does not imply that the initial request was not charged.
- New provider integrations require the corresponding API credentials and service configuration. iFlytek Spark’s pay-as-you-go and Token Plan endpoints use different credentials; select the endpoint matching your account.
- The existing WebUI generation entry point remains unchanged. New concurrency options, reference-audio controls, and the local project CLI can be used as needed.

## What's Changed

- Generation progress reporting and background task logs — @Amitk2108 in [#1518](https://github.com/harry0703/MoneyPrinterTurbo/pull/1518).
- Configurable material and clip rendering concurrency — @keepliu28 in [#1407](https://github.com/harry0703/MoneyPrinterTurbo/pull/1407), followed by [serial defaults and clearer WebUI controls](https://github.com/harry0703/MoneyPrinterTurbo/commit/6099535def664ca0b46c82591b319afa4f5840ee).
- VoxCPM reference voice cloning and delivery conditioning — @lottshin in [#1390](https://github.com/harry0703/MoneyPrinterTurbo/pull/1390).
- MuAPI video material source — @Anil-matcha in [#1367](https://github.com/harry0703/MoneyPrinterTurbo/pull/1367).
- Fluxion AI LLM provider — [b66674b](https://github.com/harry0703/MoneyPrinterTurbo/commit/b66674be0fc3dc9159f1505d6ada56a1bd71d487).
- Cheaper Inference LLM provider — @aiapienthusiast in [#1401](https://github.com/harry0703/MoneyPrinterTurbo/pull/1401).
- Requesty LLM provider — @Thibaultjaigu in [#1473](https://github.com/harry0703/MoneyPrinterTurbo/pull/1473).
- FutureInfra LLM provider — @uxidev in [#1524](https://github.com/harry0703/MoneyPrinterTurbo/pull/1524).
- Y-API LLM provider — @jiweiyeah in [#1530](https://github.com/harry0703/MoneyPrinterTurbo/pull/1530).
- iFlytek Spark (Astron MaaS) LLM provider — @FenjuFu in [#1531](https://github.com/harry0703/MoneyPrinterTurbo/pull/1531).
- Catalan WebUI localization — [fdcf249](https://github.com/harry0703/MoneyPrinterTurbo/commit/fdcf249298dc9e40a10132e39052364f735506d2).
- BT.709 video encoding and color metadata — @HEOJUNFO in [#1527](https://github.com/harry0703/MoneyPrinterTurbo/pull/1527).
- Revision-aware local video projects — @rudycelekli in [#1549](https://github.com/harry0703/MoneyPrinterTurbo/pull/1549).
- CLI support for zoom transitions, subtitle display options, and WaveSpeed — @c020627 in [#1357](https://github.com/harry0703/MoneyPrinterTurbo/pull/1357), [#1362](https://github.com/harry0703/MoneyPrinterTurbo/pull/1362), and [#1368](https://github.com/harry0703/MoneyPrinterTurbo/pull/1368), alongside further CLI and agent-helper fixes.
- UTF-8 subprocess output decoding — @britorj in [#1365](https://github.com/harry0703/MoneyPrinterTurbo/pull/1365).
- Timestamp preservation inside subtitle text — @haimuhaimu in [#1391](https://github.com/harry0703/MoneyPrinterTurbo/pull/1391).
- Pickle-safe WebUI cache statistics — @thinkw in [#1397](https://github.com/harry0703/MoneyPrinterTurbo/pull/1397).
- Updated Groq default model — @RooMax in [26edbbd](https://github.com/harry0703/MoneyPrinterTurbo/commit/26edbbd9d9f213321ecf5459dcd22b74ac62444c).
- Claude Code prompt delivery through stdin — @TanPham2808 in [#1435](https://github.com/harry0703/MoneyPrinterTurbo/pull/1435).
- Atomic Redis task updates and persisted queue recovery — @rudycelekli in [#1409](https://github.com/harry0703/MoneyPrinterTurbo/pull/1409) and [#1414](https://github.com/harry0703/MoneyPrinterTurbo/pull/1414), alongside extensive task, media, and publishing reliability fixes.
- Safer paid audio retries, preserved YouTube privacy, and stopped image submission redirects — @rudycelekli in [#1516](https://github.com/harry0703/MoneyPrinterTurbo/pull/1516), [#1550](https://github.com/harry0703/MoneyPrinterTurbo/pull/1550), and [#1551](https://github.com/harry0703/MoneyPrinterTurbo/pull/1551).

Thanks to all contributors and everyone who reported issues and helped test these changes!

**Full Changelog**: [v1.3.7...v1.3.8](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.7...v1.3.8)

---

<h2 id="cn-v1.3.8">重点更新</h2>

- 新增素材下载、片段处理和最终渲染的持续进度反馈，WebUI 同时支持显示后台辅助线程产生的任务日志，便于了解生成过程是否仍在运行。
- 新增库存素材并发和片段渲染并发设置。库存素材并发适用于 Pexels、Pixabay 和 Coverr，两项默认均为 **1（串行处理）**。
- 新增 VoxCPM 参考音频音色复刻与演绎参考，支持延续节奏和情绪，并可使用本地 Whisper 生成可编辑的示范音频逐字稿。
- 新增 Fluxion AI、Cheaper Inference、Requesty、FutureInfra、Y-API 和讯飞星辰 MaaS 大模型服务。
- 新增 MuAPI 视频素材来源，支持配置模型接口和异步视频生成。
- 新增加泰罗尼亚语 WebUI 翻译。
- 视频主渲染流程统一使用 BT.709 色彩转换与标记，改善不同播放器中的颜色一致性。
- 新增按需启用的**本地视频项目 CLI**，支持修订记录、变更比较和渲染结果复用；替换场景、配音或背景音乐时，可减少未变化部分的重复渲染。

## 修复与改进

- 改进 Redis 任务状态更新、队列准入和启动恢复，减少字段丢失、调度竞争和排队停滞；无法执行的排队请求不再阻塞后续可用任务。
- 为长时间停滞的 FFmpeg 操作增加超时，并完善临时文件清理；编码失败时不再用不完整文件覆盖已成功生成的视频。
- 隔离并发任务和不同视频组合的拼接清单与中间片段，减少渲染过程中的文件冲突。
- 素材下载改为流式写入缓存，增加大小限制和有效性校验，并改进缓存标识与清理逻辑，避免误用素材或删除刚更新的缓存。
- 完善本地素材处理，包括上传格式、图片解码、手机照片方向和 CMYK 颜色；不再将音频文件的封面图片误判为视频素材。
- 修复字幕正文中的时间文本、Whisper 逐词结果中的标点和手动换行被错误处理的问题；关闭字幕时不再使用旧字幕文件。
- 改进字幕时间轴回退与并发 Whisper 初始化；空字幕结果会明确报错，避免生成没有字幕内容的文件。
- 完善多个配音服务的音频校验和文件替换：导出失败时保留已有配音，合成请求已被受理后停止不安全的重试。
- 改进停顿分段配音的完整性检查和 Azure 时间转换，并修复仅导出配音时音量设置未生效的问题。
- 完善文案和关键词校验，避免将服务商错误信息当作生成内容；更新 Groq 已停用的默认模型，并将 Claude Code 提示词改为通过 stdin 传递。
- WebUI 在提交任务前校验本地素材和自定义配音，并改善设置缓存序列化、运行中任务刷新、历史数据处理、版本检查和音频上传失败清理。
- 强化上传文件名、字幕字体路径、媒体大小和渲染参数校验；扩展 Windows 测试覆盖，并统一使用 UTF-8 解码子进程输出。
- 禁止多项携带凭据或可能计费的请求自动跟随重定向，降低凭据泄露和重复提交风险。
- 完善 Upload-Post 发布结果判断和请求追踪：排队任务保留所选账号，缺少生成元数据时仍保留 YouTube 隐私设置。
- 改进 API 下载链接、特殊字符编码、媒体类型、范围请求、布尔值解析、CORS 来源规范化和参数错误响应。
- 更新服务商文档、示例配置和 Agent 辅助脚本，使其与已支持的 CLI 功能及素材来源保持一致。

## 使用与升级说明

- **两项并发默认均为 1。** 提高库存素材并发可能触发平台限流，提高片段渲染并发会占用更多 CPU 和内存，请根据实际环境调整。
- 使用 VoxCPM 合成时，参考音频和演绎逐字稿会发送给 ModelBest。请仅使用自己的声音或已获得授权的录音；首次使用本地 Whisper 识别时，可能需要下载已配置的模型。
- 本地视频项目目前为 **CLI 功能，初步支持已准备好的本地素材与配音**，不是 WebUI 视频编辑器，也不会自动生成文案、配音、字幕或转场。保存素材快照和历史修订会占用额外磁盘空间。
- 自定义字幕字体必须位于项目 **`resource/fonts`** 目录内，目录外的路径和指向目录外的符号链接会被拒绝。
- 服务商或网关若会重定向生成请求，需要直接配置最终 API 地址。付费请求结果不明确时，程序会停止本地处理，不再自动重新提交；这不代表首次请求一定未扣费。
- 新增服务需要配置对应的 API 凭据。讯飞星辰 MaaS 的按量付费和 Token Plan 使用不同地址与密钥，请按账号类型配置。
- 现有 WebUI 视频生成入口保持不变；新增并发、参考音频及本地项目功能可按需使用。

## 主要变更

- [#1518](https://github.com/harry0703/MoneyPrinterTurbo/pull/1518)：生成进度与后台任务日志，感谢 @Amitk2108。
- [#1407](https://github.com/harry0703/MoneyPrinterTurbo/pull/1407)：素材和片段渲染并发，感谢 @keepliu28；后续调整为[默认串行并优化 WebUI 提示](https://github.com/harry0703/MoneyPrinterTurbo/commit/6099535def664ca0b46c82591b319afa4f5840ee)。
- [#1390](https://github.com/harry0703/MoneyPrinterTurbo/pull/1390)：VoxCPM 音色复刻与演绎参考，感谢 @lottshin。
- [#1367](https://github.com/harry0703/MoneyPrinterTurbo/pull/1367)：MuAPI 视频素材来源，感谢 @Anil-matcha。
- [b66674b](https://github.com/harry0703/MoneyPrinterTurbo/commit/b66674be0fc3dc9159f1505d6ada56a1bd71d487)：Fluxion AI 大模型服务。
- [#1401](https://github.com/harry0703/MoneyPrinterTurbo/pull/1401)：Cheaper Inference 大模型服务，感谢 @aiapienthusiast。
- [#1473](https://github.com/harry0703/MoneyPrinterTurbo/pull/1473)：Requesty 大模型服务，感谢 @Thibaultjaigu。
- [#1524](https://github.com/harry0703/MoneyPrinterTurbo/pull/1524)：FutureInfra 大模型服务，感谢 @uxidev。
- [#1530](https://github.com/harry0703/MoneyPrinterTurbo/pull/1530)：Y-API 大模型服务，感谢 @jiweiyeah。
- [#1531](https://github.com/harry0703/MoneyPrinterTurbo/pull/1531)：讯飞星辰 MaaS 大模型服务，感谢 @FenjuFu。
- [fdcf249](https://github.com/harry0703/MoneyPrinterTurbo/commit/fdcf249298dc9e40a10132e39052364f735506d2)：加泰罗尼亚语 WebUI 翻译。
- [#1527](https://github.com/harry0703/MoneyPrinterTurbo/pull/1527)：BT.709 视频编码与色彩标记，感谢 @HEOJUNFO。
- [#1549](https://github.com/harry0703/MoneyPrinterTurbo/pull/1549)：支持修订与渲染结果复用的本地视频项目，感谢 @rudycelekli。
- [#1357](https://github.com/harry0703/MoneyPrinterTurbo/pull/1357)、[#1362](https://github.com/harry0703/MoneyPrinterTurbo/pull/1362)、[#1368](https://github.com/harry0703/MoneyPrinterTurbo/pull/1368)：补齐 CLI 缩放转场、字幕显示选项和 WaveSpeed 支持，以及其他 CLI、Agent 辅助脚本改进，感谢 @c020627。
- [#1365](https://github.com/harry0703/MoneyPrinterTurbo/pull/1365)：子进程输出使用 UTF-8 解码，感谢 @britorj。
- [#1391](https://github.com/harry0703/MoneyPrinterTurbo/pull/1391)：保留字幕正文中的时间文本，感谢 @haimuhaimu。
- [#1397](https://github.com/harry0703/MoneyPrinterTurbo/pull/1397)：修复 WebUI 缓存统计序列化问题，感谢 @thinkw。
- [26edbbd](https://github.com/harry0703/MoneyPrinterTurbo/commit/26edbbd9d9f213321ecf5459dcd22b74ac62444c)：更新 Groq 默认模型，感谢 @RooMax。
- [#1435](https://github.com/harry0703/MoneyPrinterTurbo/pull/1435)：Claude Code 提示词通过 stdin 传递，感谢 @TanPham2808。
- [#1409](https://github.com/harry0703/MoneyPrinterTurbo/pull/1409)、[#1414](https://github.com/harry0703/MoneyPrinterTurbo/pull/1414)：Redis 任务原子更新与队列启动恢复，以及多项任务、媒体处理和发布稳定性修复，感谢 @rudycelekli。
- [#1516](https://github.com/harry0703/MoneyPrinterTurbo/pull/1516)、[#1550](https://github.com/harry0703/MoneyPrinterTurbo/pull/1550)、[#1551](https://github.com/harry0703/MoneyPrinterTurbo/pull/1551)：减少付费音频重复提交、保留 YouTube 隐私设置、禁止生图提交自动跟随重定向，感谢 @rudycelekli。

感谢所有贡献代码、反馈问题和参与测试的社区成员

**完整变更记录**：[v1.3.7...v1.3.8](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.7...v1.3.8)

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.8` · 2026-10-03 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
