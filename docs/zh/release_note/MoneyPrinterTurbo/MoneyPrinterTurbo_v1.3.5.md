---
title: "MoneyPrinterTurbo v1.3.5"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.5"
version: "v1.3.5"
published: "2026-08-22"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.5

[英语](#en-v1.3.5) | [中文](#cn-v1.3.5)

<h2 id="en-v1.3.5">亮点</h2>

- 添加了 MiniMax 和 Fish Audio 文本转语音提供程序，改进了 MiniMax 区域端点和语音选择支持，将 Gemini 语音与官方目录同步，并在 WebUI 中添加了自动语音预览。
- 添加了 Anthropic Claude 作为本地法学硕士提供者。
- 新增胜算AI和WaveSpeed文字转视频素材源。
- 添加了可重复使用的 WebUI 生成设置和预设导入/导出，包括可选的 API 密钥备份和恢复。
- 为每个受支持的跨帖子平台添加了法学硕士生成的社交标题，而不是仅限于 YouTube。
- 添加了意大利语 WebUI 翻译和日语自述文件。

## 安全

- 为 `/api/v1` 端点和生成的任务文件添加了可选的 API 密钥身份验证。当 `app.api_key` 为空时，现有安装保持向后兼容。
- 将自定义音频输入限制在允许的位置以防止路径遍历。
- 防止通过 escaping 符号链接访问生成的任务文件。
- 通过更严格的文件和路径验证来强化本地材料上传。
- 在任务处理中使用 client 提供的请求 ID 之前对其进行了清理。

## 修复和改进

- 修复了某些文本和字体组合的最后一个字幕行为 clipped 的问题，包括多行字幕和没有下行字母的文本。
- 添加了当 FFmpeg 不可用时可操作的启动错误。
- 修复了 Docker 依赖项安装重试，因此持续的包失败会停止构建，而不是被默默地忽略。
- 当后台调度失败时回滚任务状态，防止任务停留在不正确的状态。
- 改进了 API 响应模式并将模型配置迁移到 Pydantic v2 `ConfigDict`。
- 注册了 ping 健康检查路由器。
- 标准化法学硕士回复中保留段落边界。
- 在配置和WebUI上区分了支持的Kimi API平台。
- 处理包含重复 UTF-8 BOM 标记的配置文件。
- 改进了 MiniMax 语音发现并在替换现有输出文件之前验证生成的音频。

## 升级注意事项

- 默认情况下不需要身份验证。为了保护V1 API和生成的任务文件，请在`config.toml`中设置`app.api_key`，并在`x-api-key`请求标头中发送相同的值。
- 启用 API 密钥备份时，设置预设导出可以包含提供商凭据。安全地存储导出的预设文件，并且不要将它们提交给源代码管理。
- Fish Audio、MiniMax、Anthropic Claude、WaveSpeed 和绳算 AI 需要各自的提供商凭据才能使用。

## 发生了什么变化

- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1175 中添加 @octo-patch 的 MiniMax 文本转语音支持
- https://github.com/harry0703/MoneyPrinterTurbo/pull/1192中@HaningZS调度失败时回滚任务状态
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1191中保留@HaningZS的可重用WebUI生成设置
- @AZEROSTART 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1186 中自动播放 WebUI 语音预览
- 将Gemini TTS声音与https://github.com/harry0703/MoneyPrinterTurbo/pull/1195中@jxnding的官方目录同步
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1202 中添加 @eltociear 的日语自述文件
- 通过 @NafeesMadni 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1212 中注册 ping 健康检查路由器
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1213中添加@SandroHub013的意大利语WebUI翻译
- 通过 @rignaneseleo 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1211 中导出和导入 WebUI 设置预设和 API 密钥备份
- 改进响应模式并通过 @NafeesMadni 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1217 迁移到 Pydantic v2 `ConfigDict`
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1201中添加WaveSpeed AI作为@hengzeyi的文本转视频素材源
- 通过 @Gainto 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1223 添加 Anthropic Claude 作为 LLM 提供者
- 当 https://github.com/harry0703/MoneyPrinterTurbo/pull/1222 中的 @alvinhui 缺少 FFmpeg 时，快速失败并显示可操作的消息
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1230中@Kizuno18为每个交叉发布平台使用LLM生成的社交标题
- 通过@lihuiyang1024在https://github.com/harry0703/MoneyPrinterTurbo/pull/1238中限制自定义音频文件路径
- 防止@lihuiyang1024在https://github.com/harry0703/MoneyPrinterTurbo/pull/1239中遍历任务符号链接
- 强化@lihuiyang1024在https://github.com/harry0703/MoneyPrinterTurbo/pull/1241中上传的本地材料
- 通过 @lihuiyang1024 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1242 中清理 client 请求 ID
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1228 中添加 @hariom-hp 的 Fish Audio TTS 集成

## 新贡献者

- @HaningZS 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1192 中做出了第一个贡献
- @AZEROSTART 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1186 中做出了第一个贡献
- @jxnding 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1195 中做出了第一个贡献
- @eltociear 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1202 中做出了第一个贡献
- @NafeesMadni 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1212 中做出了第一个贡献
- @SandroHub013 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1213 中做出了第一个贡献
- @rignaneseleo 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1211 中做出了第一个贡献
- @hengzeyi 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1201 中做出了第一个贡献
- @Gainto 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1223 中做出了第一个贡献
- @alvinhui 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1222 中做出了第一个贡献
- @lihuiyang1024 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1238 中做出了第一个贡献
- @hariom-hp 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1228 中做出了第一个贡献

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.4...v1.3.5

---

<h2 id="cn-v1.3.5">重点更新</h2>

- 新增MiniMax和Fish Audio文本转语音服务，完善MiniMax区域端点和音色选择支持，同步Gemini官方音色目录，并在WebUI中增加自动语音试听功能。
- 新增 Anthropic Claude 文艺复兴大语言模型服务商。
- 新增胜算云（Shengsuan AI）和WaveSpeed AI文生视频素材源。
- WebUI新增可恢复用的视频生成设置以及预设导入、导出功能，并支持备份和恢复API密钥。
- 所有受支持的跨平台发布渠道现在都可以使用大语言模型生成社交媒体文案，而不再仅限于 YouTube。
- 新增WebUI翻译和日语自述文档。

## 安全性

- 修改为`/api/v1`接口和生成的任务文件增加可选的API密钥鉴权；当`app.api_key`保持为空时，现有安装和客户端仍可继续使用，无需。
- 限制自定义音频文件只能从允许的目录读取，禁止路径浏览。
- 防止通过符号链接访问任务目录之外的文件。
- 加强本地素材上传的文件类型、路径和文件名校验。
- 对客户端创建的请求ID进行清理和规范化处理，避免其影响任务文件路径和处理流程。

## 修复与改进

- 修复部分文字和字体组合下字幕最后一行被裁切的问题，覆盖多行字幕以及不包含下伸字符的文本。
- 当系统缺少 FFmpeg 时立即启动，并提供清晰、有效的错误提示。
- 修复Docker依赖安装重试逻辑，确保持续安装失败时终止构建，而不是静默忽略错误。
- 后台任务调度失败时自动回滚任务状态，避免任务停留在错误状态。
- 改进API响应模型，将相关Pydantic配置迁移到Pydantic v2 `ConfigDict`。
- 正确注册Ping健康检查接口。
- 保留大语言模型响应中的段落和换行结构。
- 在配置和 WebUI 中明确区分不同的 Kimi API 平台。
- 支持读取包含多个UTF-8 BOM标记的配置文件。
- 改进MiniMax音色发现与选择，并在替换现有音频文件前验证新生成的音频是否有效。

## 升级说明

- 默认情况下不会启用 API 鉴权，现有用户升级后不出行。如需保护 V1 API 和生成的任务文件，请在 `config.toml` 中设置 `app.api_key`，并在请求中通过 `x-api-key` 请求头传递相同的值。
- 开启API密钥备份后，导出的WebUI设置默认可能包含商存储。请导出保存导出文件，不要将其提交到公开代码仓库。
- Fish Audio、MiniMax、Anthropic Claude、WaveSpeed 和胜算云功能需要配置对应服务商的凭据技巧后使用。

## 主要变更

- [#1175](https://github.com/harry0703/MoneyPrinterTurbo/pull/1175)：新增 MiniMax 文本转语音支持，感谢@octo-patch。
- [#1192](https://github.com/harry0703/MoneyPrinterTurbo/pull/1192)：任务调度失败时回滚任务状态，感谢@HaningZS。
- [#1191](https://github.com/harry0703/MoneyPrinterTurbo/pull/1191)：保存可复用的WebUI视频生成设置，感谢@HaningZS。
- [#1186](https://github.com/harry0703/MoneyPrinterTurbo/pull/1186)：新增WebUI语音自动试听功能，感谢@AZEROSTART。
- [#1195](https://github.com/harry0703/MoneyPrinterTurbo/pull/1195)：同步Gemini官方TTS音色目录，感谢@jxnding。
- [#1202](https://github.com/harry0703/MoneyPrinterTurbo/pull/1202)：新增初始化README，感谢@eltociear。
- [#1212](https://github.com/harry0703/MoneyPrinterTurbo/pull/1212)：注册 Ping 健康检查接口，感谢@NafeesMadni。
- [#1213](https://github.com/harry0703/MoneyPrinterTurbo/pull/1213)：新增一份WebUI翻译，感谢@SandroHub013。
- [#1211](https://github.com/harry0703/MoneyPrinterTurbo/pull/1211)：新增WebUI默认设置和API密钥导入的导入导出功能，感谢@rignaneseleo。
- [#1217](https://github.com/harry0703/MoneyPrinterTurbo/pull/1217)：改进响应模型并迁移至 Pydantic v2 `ConfigDict`，感谢@NafeesMadni。
- [#1201](https://github.com/harry0703/MoneyPrinterTurbo/pull/1201)：新增WaveSpeed AI文生视频素材来源，感谢@ Chengzeyi。
- [#1223](https://github.com/harry0703/MoneyPrinterTurbo/pull/1223)：新增人类克劳德大语言模型服务商，感谢@Ginto。
- [#1222](https://github.com/harry0703/MoneyPrinterTurbo/pull/1222)：缺少 FFmpeg 时快速失败并显示明确的提示，感谢@alvinhui。
- [#1230](https://github.com/harry0703/MoneyPrinterTurbo/pull/1230)：为所有跨平台发布渠道生成大语言模型社交文案，感谢@Kizuno18。
- [#1238](https://github.com/harry0703/MoneyPrinterTurbo/pull/1238)：限制自定义音频文件路径，感谢@lihuiyang1024。
- [#1239](https://github.com/harry0703/MoneyPrinterTurbo/pull/1239)：阻止通过任务文件符号链接进行路径穿越，感谢@lihuiyang1024。
- [#1241](https://github.com/harry0703/MoneyPrinterTurbo/pull/1241)：加强本地素材上传安全校验，感谢@lihuiyang1024。
- [#1242](https://github.com/harry0703/MoneyPrinterTurbo/pull/1242)：清理客户端建立的请求ID，感谢@lihuiyang1024。
- [#1228](https://github.com/harry0703/MoneyPrinterTurbo/pull/1228)：新增 Fish Audio 文本转语音服务，感谢@hariom-hp。

## 新贡献者

感谢@HaningZS、@AZEROSTART、@jxnding、@eltociear、@NafeesMadni、@SandroHub013、@rignaneseleo、@hengzeyi、@Gainto、@alvinhui、@lihuiyang1024 和 @hariom-hp 首次参与 MoneyPrinterTurbo 项目贡献。

**完整变更记录**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.4...v1.3.5

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.5` · 📅 发布：2026-08-22 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
