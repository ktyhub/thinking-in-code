---
title: "MoneyPrinterTurbo v1.3.5"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.5"
version: "v1.3.5"
published: "2026-08-22"
type: "patch"
lang: "en"
summary: "Added MiniMax and Fish Audio text-to-speech providers, improved MiniMax regional endpoint and voice selection support, synchronized Gemini voices with the official catalog, and added automatic voice previews in the…"
---

# MoneyPrinterTurbo v1.3.5

[English](#en-v1.3.5) | [中文](#cn-v1.3.5)

<h2 id="en-v1.3.5">Highlights</h2>

- Added MiniMax and Fish Audio text-to-speech providers, improved MiniMax regional endpoint and voice selection support, synchronized Gemini voices with the official catalog, and added automatic voice previews in the WebUI.
- Added Anthropic Claude as a native LLM provider.
- Added Shengsuan AI and WaveSpeed text-to-video material sources.
- Added reusable WebUI generation settings and preset import/export, including optional API key backup and restore.
- Added LLM-generated social captions for every supported cross-post platform, instead of limiting them to YouTube.
- Added an Italian WebUI translation and a Japanese README.

## Security

- Added optional API key authentication for `/api/v1` endpoints and generated task files. Existing installations remain backward compatible while `app.api_key` is empty.
- Restricted custom audio inputs to allowed locations to prevent path traversal.
- Prevented generated task files from being accessed through escaping symlinks.
- Hardened local material uploads with stricter file and path validation.
- Sanitized client-supplied request IDs before using them in task processing.

## Fixes and Improvements

- Fixed the last subtitle line being clipped for some text and font combinations, including multiline subtitles and text without descenders.
- Added an actionable startup error when FFmpeg is unavailable.
- Fixed Docker dependency installation retries so persistent package failures stop the build instead of being silently ignored.
- Rolled back task state when background scheduling fails, preventing tasks from remaining stuck in an incorrect state.
- Improved API response schemas and migrated model configuration to Pydantic v2 `ConfigDict`.
- Registered the ping health-check router.
- Preserved paragraph boundaries in normalized LLM responses.
- Distinguished the supported Kimi API platforms in configuration and the WebUI.
- Handled configuration files containing repeated UTF-8 BOM markers.
- Improved MiniMax voice discovery and validated generated audio before replacing an existing output file.

## Upgrade Notes

- No authentication is required by default. To protect the V1 API and generated task files, set `app.api_key` in `config.toml` and send the same value in the `x-api-key` request header.
- Settings preset exports can contain provider credentials when API key backup is enabled. Store exported preset files securely and do not commit them to source control.
- Fish Audio, MiniMax, Anthropic Claude, WaveSpeed, and Shengsuan AI require their respective provider credentials before they can be used.

## What's Changed

- Add MiniMax text-to-speech support by @octo-patch in https://github.com/harry0703/MoneyPrinterTurbo/pull/1175
- Roll back task state when scheduling fails by @HaningZS in https://github.com/harry0703/MoneyPrinterTurbo/pull/1192
- Persist reusable WebUI generation settings by @HaningZS in https://github.com/harry0703/MoneyPrinterTurbo/pull/1191
- Autoplay WebUI voice previews by @AZEROSTART in https://github.com/harry0703/MoneyPrinterTurbo/pull/1186
- Synchronize Gemini TTS voices with the official catalog by @jxnding in https://github.com/harry0703/MoneyPrinterTurbo/pull/1195
- Add a Japanese README by @eltociear in https://github.com/harry0703/MoneyPrinterTurbo/pull/1202
- Register the ping health-check router by @NafeesMadni in https://github.com/harry0703/MoneyPrinterTurbo/pull/1212
- Add an Italian WebUI translation by @SandroHub013 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1213
- Export and import WebUI settings presets and API key backups by @rignaneseleo in https://github.com/harry0703/MoneyPrinterTurbo/pull/1211
- Improve response schemas and migrate to Pydantic v2 `ConfigDict` by @NafeesMadni in https://github.com/harry0703/MoneyPrinterTurbo/pull/1217
- Add WaveSpeed AI as a text-to-video material source by @chengzeyi in https://github.com/harry0703/MoneyPrinterTurbo/pull/1201
- Add Anthropic Claude as an LLM provider by @Gainto in https://github.com/harry0703/MoneyPrinterTurbo/pull/1223
- Fail fast with an actionable message when FFmpeg is missing by @alvinhui in https://github.com/harry0703/MoneyPrinterTurbo/pull/1222
- Use LLM-generated social captions for every cross-post platform by @Kizuno18 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1230
- Restrict custom audio file paths by @lihuiyang1024 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1238
- Prevent task symlink traversal by @lihuiyang1024 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1239
- Harden local material uploads by @lihuiyang1024 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1241
- Sanitize client request IDs by @lihuiyang1024 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1242
- Add Fish Audio TTS integration by @hariom-hp in https://github.com/harry0703/MoneyPrinterTurbo/pull/1228

## New Contributors

- @HaningZS made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1192
- @AZEROSTART made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1186
- @jxnding made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1195
- @eltociear made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1202
- @NafeesMadni made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1212
- @SandroHub013 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1213
- @rignaneseleo made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1211
- @chengzeyi made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1201
- @Gainto made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1223
- @alvinhui made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1222
- @lihuiyang1024 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1238
- @hariom-hp made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1228

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.4...v1.3.5

---

<h2 id="cn-v1.3.5">重点更新</h2>

- 新增 MiniMax 和 Fish Audio 文本转语音服务，完善 MiniMax 区域端点和音色选择支持，同步 Gemini 官方音色目录，并在 WebUI 中增加自动语音试听功能。
- 新增 Anthropic Claude 原生大语言模型服务商。
- 新增胜算云（Shengsuan AI）和 WaveSpeed AI 文生视频素材源。
- WebUI 新增可复用的视频生成设置以及预设导入、导出功能，并支持选择性备份和恢复 API Key。
- 所有受支持的跨平台发布渠道现在都可以使用大语言模型生成社交媒体文案，不再仅限于 YouTube。
- 新增意大利语 WebUI 翻译和日语 README 文档。

## 安全性

- 为 `/api/v1` 接口和生成的任务文件增加可选的 API Key 鉴权；当 `app.api_key` 保持为空时，现有安装和客户端仍可继续使用，无需修改。
- 限制自定义音频文件只能从允许的目录读取，防止路径穿越。
- 防止通过符号链接访问任务目录之外的文件。
- 加强本地素材上传的文件类型、路径和文件名校验。
- 对客户端传入的请求 ID 进行清理和规范化处理，避免其影响任务文件路径和处理流程。

## 修复与改进

- 修复部分文字和字体组合下字幕最后一行被裁切的问题，覆盖多行字幕以及不包含下伸字符的文本。
- 当系统缺少 FFmpeg 时立即停止启动，并提供清晰、可执行的错误提示。
- 修复 Docker 依赖安装重试逻辑，确保软件包持续安装失败时终止构建，而不是静默忽略错误。
- 后台任务调度失败时自动回滚任务状态，避免任务停留在错误状态。
- 改进 API 响应模型，并将相关 Pydantic 配置迁移到 Pydantic v2 `ConfigDict`。
- 正确注册 Ping 健康检查接口。
- 保留大语言模型响应中的段落和换行结构。
- 在配置和 WebUI 中明确区分不同的 Kimi API 平台。
- 支持读取包含多个 UTF-8 BOM 标记的配置文件。
- 改进 MiniMax 音色发现与选择，并在替换已有音频文件前验证新生成的音频是否有效。

## 升级说明

- 默认情况下不会启用 API 鉴权，现有用户升级后不受影响。如需保护 V1 API 和生成的任务文件，请在 `config.toml` 中设置 `app.api_key`，并在请求中通过 `x-api-key` 请求头传递相同的值。
- 开启 API Key 备份后，导出的 WebUI 设置预设可能包含服务商凭据。请妥善保存导出文件，不要将其提交到公开代码仓库。
- Fish Audio、MiniMax、Anthropic Claude、WaveSpeed 和胜算云功能需要配置对应服务商的凭据后才能使用。

## 主要变更

- [#1175](https://github.com/harry0703/MoneyPrinterTurbo/pull/1175)：新增 MiniMax 文本转语音支持，感谢 @octo-patch。
- [#1192](https://github.com/harry0703/MoneyPrinterTurbo/pull/1192)：任务调度失败时回滚任务状态，感谢 @HaningZS。
- [#1191](https://github.com/harry0703/MoneyPrinterTurbo/pull/1191)：保存可复用的 WebUI 视频生成设置，感谢 @HaningZS。
- [#1186](https://github.com/harry0703/MoneyPrinterTurbo/pull/1186)：新增 WebUI 语音自动试听功能，感谢 @AZEROSTART。
- [#1195](https://github.com/harry0703/MoneyPrinterTurbo/pull/1195)：同步 Gemini 官方 TTS 音色目录，感谢 @jxnding。
- [#1202](https://github.com/harry0703/MoneyPrinterTurbo/pull/1202)：新增日语 README，感谢 @eltociear。
- [#1212](https://github.com/harry0703/MoneyPrinterTurbo/pull/1212)：注册 Ping 健康检查接口，感谢 @NafeesMadni。
- [#1213](https://github.com/harry0703/MoneyPrinterTurbo/pull/1213)：新增意大利语 WebUI 翻译，感谢 @SandroHub013。
- [#1211](https://github.com/harry0703/MoneyPrinterTurbo/pull/1211)：新增 WebUI 设置预设和 API Key 备份的导入导出功能，感谢 @rignaneseleo。
- [#1217](https://github.com/harry0703/MoneyPrinterTurbo/pull/1217)：改进响应模型并迁移至 Pydantic v2 `ConfigDict`，感谢 @NafeesMadni。
- [#1201](https://github.com/harry0703/MoneyPrinterTurbo/pull/1201)：新增 WaveSpeed AI 文生视频素材源，感谢 @chengzeyi。
- [#1223](https://github.com/harry0703/MoneyPrinterTurbo/pull/1223)：新增 Anthropic Claude 大语言模型服务商，感谢 @Gainto。
- [#1222](https://github.com/harry0703/MoneyPrinterTurbo/pull/1222)：缺少 FFmpeg 时快速失败并显示明确提示，感谢 @alvinhui。
- [#1230](https://github.com/harry0703/MoneyPrinterTurbo/pull/1230)：为所有跨平台发布渠道生成大语言模型社交文案，感谢 @Kizuno18。
- [#1238](https://github.com/harry0703/MoneyPrinterTurbo/pull/1238)：限制自定义音频文件路径，感谢 @lihuiyang1024。
- [#1239](https://github.com/harry0703/MoneyPrinterTurbo/pull/1239)：防止通过任务文件符号链接进行路径穿越，感谢 @lihuiyang1024。
- [#1241](https://github.com/harry0703/MoneyPrinterTurbo/pull/1241)：加强本地素材上传安全校验，感谢 @lihuiyang1024。
- [#1242](https://github.com/harry0703/MoneyPrinterTurbo/pull/1242)：清理客户端传入的请求 ID，感谢 @lihuiyang1024。
- [#1228](https://github.com/harry0703/MoneyPrinterTurbo/pull/1228)：新增 Fish Audio 文本转语音服务，感谢 @hariom-hp。

## 新贡献者

感谢 @HaningZS、@AZEROSTART、@jxnding、@eltociear、@NafeesMadni、@SandroHub013、@rignaneseleo、@chengzeyi、@Gainto、@alvinhui、@lihuiyang1024 和 @hariom-hp 首次参与 MoneyPrinterTurbo 项目贡献。

**完整变更记录**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.4...v1.3.5

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.5` · 2026-08-22 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
