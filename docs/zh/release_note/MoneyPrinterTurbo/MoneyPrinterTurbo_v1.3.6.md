---
title: "MoneyPrinterTurbo v1.3.6"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.6"
version: "v1.3.6"
published: "2026-09-02"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.6

[英语](#en-v1.3.6) | [中文](#cn-v1.3.6)

<h2 id="en-v1.3.6">亮点</h2>

- 添加了原生 Volcano Engine Ark Seedance 视频生成功能，可直接从脚本片段生成源 clips。
- 新增 OFox 多型号文本转视频支持，允许 Seedance、Wan 和其他型号共享一把 API 密钥。
- 添加了 Metaso MiniMax H3 文本到视频支持，具有 `768P`/`2K` 输出、4–15 秒 clips 以及 `9:16`、`16:9` 和 `1:1` 宽高比。
- 为云中继和本地网关添加了兼容 OpenAI 的文本转图像素材源。
- 添加了 OpenRouter 和 APIMart 作为 OpenAI 兼容的 LLM 提供商。
- 为上传发布添加了 WebUI 自动发布设置选项卡，提供更清晰的 API 密钥和帐户设置指南。
- 添加了 CLI 批清单模式，并在省略命令行值时将保存的 WebUI 设置应用为 CLI 默认值。
- 添加了可配置的源 clip 适合模式：`cover` 通过裁剪多余的边缘来填充框架，而 `contain` 通过信箱保留完整的源。
- 添加了完整的法语和韩语 WebUI 翻译。
- 重新组织素材源设置，按功能对视频源进行分组，并在 WebUI 设置中集中 AI 视频提供商凭据。

## 安全

- 默认限制浏览器跨域API访问同源请求。 Trusted 独立浏览器前端可以使用 `CORS_ALLOWED_ORIGINS` 显式启用。
- 为已发布的容器镜像添加了出处和 SBOM 证明。

## 修复和改进

- 根据生成的音频文件测量旁白持续时间，而不是仅依赖字幕提示。
- 将 SiliconFlow 字幕时间线锚定到完整的音频持续时间。
- 确保 ElevenLabs、Chatterbox 和 Fish Audio 路径中的 `AudioFileClip` 资源关闭。
- 防止脚本清理贪婪地删除不相关的括号或圆括号文本。
- 删除了最后一次 LLM 尝试后的误导性重试警告。
- 修复了未配置密码时的 Redis URL。
- 当项目根目录和日志目标位于不同的安装上时保留日志记录。
- 修复了在 Windows 上成功生成 CLI 后的 Unicode 控制台输出。
- 添加了安全、可移植的下载文件名，包括 RFC 兼容的引用和对 Windows 保留名称的保护。
- 通过回退到浏览器播放和下载，改进了无头服务器上的 WebUI 预览行为。
- 将上传-发布配置与自动发布分离，因此可以在不启用上传的情况下保存设置。
- 强化的 OpenAI 兼容图像处理：格式错误的 200 个响应现在仅跳过受影响的关键字，而本地存储故障会阻止进一步的付费请求。

## 升级注意事项

- 浏览器 API 访问现在默认为同源请求。独立 Web 前端必须通过 `CORS_ALLOWED_ORIGINS` 声明其 trusted 来源；服务器端 client（例如 `curl`、Postman 和 n8n）不受影响。
- CLI 命令现在继承已保存的省略选项的 WebUI 设置。显式 ZZPH100​​ZZ 参数和批清单值仍然优先。

## 发生了什么变化

- 将 Fish Audio 添加到 https://github.com/harry0703/MoneyPrinterTurbo/pull/1246 中的 @c020627 的英语和日语提供程序文档中
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1140 中添加 @kobihikri 的容器出处和 SBOM 证明
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1209中添加@parveen0029的上传-发布自动发布WebUI设置
- 通过 @abhiunix 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1252 中改进无头 WebUI 视频预览行为
- 将保存的 WebUI 设置应用为 https://github.com/harry0703/MoneyPrinterTurbo/pull/1225 中@Gainto 的 CLI 默认值
- 将 Upload-Post 配置与 @mcgeand 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1259 中的自动发布分离
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1260 中通过@SandroHub013 跨不同文件系统挂载保留日志
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1243中添加@lihuiyang1024的CLI批量清单模式
- 修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/1265 中 @Mihir7027 引用的 API 下载文件名
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1264 中使用 @Mihir7027 的人类可读批次清单大小错误
- 修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/1266 中 @Mihir7027 没有密码的 Redis URL
- 删除https://github.com/harry0703/MoneyPrinterTurbo/pull/1267中@Mihir7027最后的虚假LLM重试警告
- 将 SiliconFlow 字幕锚定到 @Mihir7027 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1268 中的完整音频持续时间
- 通过 @YUSAKRU 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1263 中测量真实音频文件的旁白持续时间
- 通过 @Mihir7027 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1269 中可靠地关闭 TTS 音频 clips
- 通过 @Mihir7027 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1270 中使脚本括号和括号清理变得非贪婪
- 在https://github.com/harry0703/MoneyPrinterTurbo/commit/ab1c790中添加APIMart OpenAI兼容的LLM支持
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1277 中添加 @brizzio 的 OpenRouter LLM 支持
- 修复了 CLI 在无法通过 @housine35 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1282 中编码 Unicode 的控制台上成功运行的问题
- 通过 @emanuelsc3s 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1287 中添加可配置源 clip 拟合模式
- 避免使用 @Sushanth012 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1288 中 Windows 保留的 WebUI 下载文件名
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1291中添加@joker1point兼容OpenAI的文本转图像素材源
- 跳过格式错误的成功图像响应，而不中止 https://github.com/harry0703/MoneyPrinterTurbo/pull/1296 中 @joker1point 的任务
- 基于 @greekr4 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1193 中的贡献添加韩文 WebUI 本地化
- 基于 @PocketBinary 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1248 中的贡献添加法语 WebUI 本地化
- 基于@lihuiyang1024在https://github.com/harry0703/MoneyPrinterTurbo/pull/1276中的贡献添加原生火山引擎Ark Seedance支持
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1292 中添加 @celeste1900 的 OFox 多模型视频生成
- 在 https://github.com/harry0703/MoneyPrinterTurbo/commit/44ce430 中添加 Metaso MiniMax H3 视频生成和集中式 AI 视频提供商设置
- 根据@AkshatJoshi2000 的安全报告限制跨域浏览器访问。

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.5...v1.3.6

---

<h2 id="cn-v1.3.6">重点更新</h2>

- 新增火山引擎方舟 Seedance 全新视频生成服务，可根据脚本片段直接生成视频素材。
- 新增 OFox 多模型文生视频服务，一个 API Key 即可调用 Seedance、Wan 等模型。
- 新增秘塔MiniMax H3文生视频服务，支持`768P`/`2K`、4～15秒片段，以及`9:16`、`16:9` 和 `1:1` 彩虹画幅。
- 新增适用于云端中转和本地网关的 OpenAI 兼容文生图素材源。
- 新增OpenRouter和APIMart OpenAI兼容大语言模型服务商。
- WebUI新增Upload-Post自动发布设置，并完善API Key和账号名称的申请、配置指引。
- CLI 新增批量清单模式；未显式填写命令行参数时，可以继承WebUI已保存的默认设置。
- 新增素材画面车辆模式：`cover`通过修剪边缘填满画面，`contain`保留完整素材并在比例不同时增加黑边。
- 新增完整的法语和韩语 WebUI 翻译。
- 重新整理素材来源设置，按能力对视频来源分组，将AI视频服务商外汇集中到WebUI设置中管理。

## 安全性

- 浏览器跨域API访问现在默认遵循同源策略；如需使用独立网页前端，可以通过`CORS_ALLOWED_ORIGINS`显式配置可信来源。
- 发布容器镜像新增构建来源说明和 SBOM 软件仓库清单说明。

## 修复与改进

- 改为从真实生成的音频文件测量旁白时长，不再仅依赖字幕时间轴。
- 将 SiliconFlow 字幕时间轴与完整音频时长对齐。
-确保ElevenLabs、Chatterbox和Fish Audio仓库重新关闭`AudioFileClip`资源。
- 修复脚本清理可能损坏删除多组内容的问题。
- 删除大语言模型最后一次重试结束后公正的“正在重试”日志。
- 修复Redis未配置密码时生成错误鉴权片段的问题。
- 修复项目目录和日志目录位于不同挂载点时日志记录丢失的问题。
- 修复 Windows 终止无法编码 Unicode 时，CLI 在视频成功生成后异常退出的问题。
- 改进下载文件名的安全性和跨平台兼容性，包括标准引用编码以及Windows保留名称保护。
- 在没有图形桌面的服务器环境下，WebUI会返回到浏览器播放和下载视频。
- 将Upload-Post配置与自动发布开关解耦，允许用户保存配置但不立即启用上传。
- 加强OpenAI兼容文生图异常处理：HTTP 200返回损坏图片时仅跳过当前关键词，本地存储失败时则停止后续付费请求。

## 升级说明

- 浏览器调用API现在默认遵循同源策略。独立网页前端需要通过`CORS_ALLOWED_ORIGINS`配置可信源；`curl`、Postman、n8n等服务端调用不共享。
- CLI 未显式命名参数时，会继承 WebUI 保存的设置；显式命名的 CLI 参数和批量清单字段仍拥有更高的优先级。

## 主要变更

- [#1246](https://github.com/harry0703/MoneyPrinterTurbo/pull/1246)：在中文和初始化文档中补充鱼音频，感谢@c020627。
- [#1140](https://github.com/harry0703/MoneyPrinterTurbo/pull/1140)：为容器镜像增加构建源证明和SBOM，感谢@kobihikri。
- [#1209](https://github.com/harry0703/MoneyPrinterTurbo/pull/1209)：新增上传-发布自动发布WebUI设置，感谢@parveen0029。
- [#1252](https://github.com/harry0703/MoneyPrinterTurbo/pull/1252)：改进无图形桌面服务器上的WebUI视频预览，感谢@abhiunix。
- [#1225](https://github.com/harry0703/MoneyPrinterTurbo/pull/1225)：CLI支持继承WebUI保存设置，感谢@Gainto。
- [#1259](https://github.com/harry0703/MoneyPrinterTurbo/pull/1259)：将Upload-Post配置和自动发布解耦，感谢@mcgeand。
- [#1260](https://github.com/harry0703/MoneyPrinterTurbo/pull/1260)：修复跨文件系统挂载时日志记录丢失，感谢@SandroHub013。
- [#1243](https://github.com/harry0703/MoneyPrinterTurbo/pull/1243)：新增CLI批量清单模式，感谢@lihuiyang1024。
- [#1265](https://github.com/harry0703/MoneyPrinterTurbo/pull/1265)：修复API下载文件名引用编码，感谢@Mihir7027。
- [#1264](https://github.com/harry0703/MoneyPrinterTurbo/pull/1264)：使用更易读的批量清单大小错误提示，感谢@Mihir7027。
- [#1266](https://github.com/harry0703/MoneyPrinterTurbo/pull/1266)：修复Redis未配置密码时的连接URL，感谢@Mihir7027。
- [#1267](https://github.com/harry0703/MoneyPrinterTurbo/pull/1267)：删除最后一次LLM尝试后的错误重试提示，感谢@Mihir7027。
- [#1268](https://github.com/harry0703/MoneyPrinterTurbo/pull/1268)：将SiliconFlow字幕与完整音频时长对齐，感谢@Mihir7027。
- [#1263](https://github.com/harry0703/MoneyPrinterTurbo/pull/1263)：从真实音频文件测量旁白时长，感谢@YUSAKRU。
- [#1269](https://github.com/harry0703/MoneyPrinterTurbo/pull/1269)：可靠释放TTS音频资源，感谢@Mihir7027。
- [#1270](https://github.com/harry0703/MoneyPrinterTurbo/pull/1270)：修复脚本内容清理的贪污相符，感谢@Mihir7027。
- [ab1c790](https://github.com/harry0703/MoneyPrinterTurbo/commit/ab1c790)：新增APIMart OpenAI兼容大语言模型服务商。
- [#1277](https://github.com/harry0703/MoneyPrinterTurbo/pull/1277)：新增OpenRouter大语言模型服务商，感谢@brizzio。
- [#1282](https://github.com/harry0703/MoneyPrinterTurbo/pull/1282)：修复部分Windows终端中的CLI Unicode输出异常，感谢@housine35。
- [#1287](https://github.com/harry0703/MoneyPrinterTurbo/pull/1287)：新增可配置配置的车辆模式，感谢@emanuelsc3s。
- [#1288](https://github.com/harry0703/MoneyPrinterTurbo/pull/1288)：避免WebUI使用Windows保留名称下载文件，感谢@Sushanth012。
- [#1291](https://github.com/harry0703/MoneyPrinterTurbo/pull/1291)：新增 OpenAI 兼容文生图素材来源，感谢@joker1point。
- [#1296](https://github.com/harry0703/MoneyPrinterTurbo/pull/1296)：损坏的成功图片响应不再中断整个任务，感谢@joker1point。
- [#1193](https://github.com/harry0703/MoneyPrinterTurbo/pull/1193)：吸收并完善韩语WebUI翻译，感谢@greekr4。
- [#1248](https://github.com/harry0703/MoneyPrinterTurbo/pull/1248)：吸收并完善橙色WebUI翻译，感谢@PocketBinary。
- [#1276](https://github.com/harry0703/MoneyPrinterTurbo/pull/1276)：吸收并完善火山发动机方舟 Seedance 最初支持，感谢@lihuiyang1024。
- [#1292](https://github.com/harry0703/MoneyPrinterTurbo/pull/1292)：新增 OFox 多模型视频生成，感谢@celeste1900。
- [44ce430](https://github.com/harry0703/MoneyPrinterTurbo/commit/44ce430)：新增秘塔MiniMax H3视频生成，并统一AI视频服务商设置。
- 根据 @AkshatJoshi2000 的安全报告，限制不可信浏览器来源访问 API。

**完整变更记录**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.5...v1.3.6

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.6` · 📅 发布：2026-09-02 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
