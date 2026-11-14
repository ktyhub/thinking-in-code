---
title: "MoneyPrinterTurbo v1.3.0"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.0"
version: "v1.3.0"
published: "2026-06-10"
type: "minor"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.0

## 亮点

- 添加了 Coverr 作为新的库存视频素材提供商，包括 WebUI API 密钥管理和 16:9 友好的默认设置。
- 添加了 Groq 作为新的法学硕士提供商。
- 为不需要旁白的工作流程添加了无语音视频生成模式。
- 添加了可配置的视频编码器选择和更安全的硬件编码器回退行为。
- 添加了 AIHubMix 提供商集成。
- 添加了多语言社交元数据生成 API。
- 添加了字幕背景选项，包括可选的圆形半透明字幕背景。
- 改进了 WebUI 本地化覆盖范围，包括阿拉伯语、德语、俄语、土耳其语和越南语更新。

## 修复和改进

- 改进了重复视频素材的重用行为。
- 修复了最终 SRT 字幕块处理。
- 修复了 Markdown 样式脚本标记的字幕匹配问题。
- 修复了 Qwen 响应解析边缘情况的问题。
- 升级并强化了选定的依赖项和部署默认值。
- 将 Azure 语音数据重构为 JSON，以便于维护。
- 改进了自述文件和设置文档的质量。

## 发生了什么变化

* 重构（语音）：通过https://github.com/harry0703/MoneyPrinterTurbo/pull/951中的@domantasjo将Azure语音数据提取到JSON
* 修复：在https://github.com/harry0703/MoneyPrinterTurbo/pull/960中@kuishou68在upload_post.py中使用Optional[list]类型注释
* i18n(vi)：@luongs3 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/963 中完成越南语 UI 翻译（135/135 键）
* 文档（README-en）：删除过时的 ImageMagick 要求并修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/977 中的 @jonathanzhan1975 的文档质量问题
* 修复：当 SRT 没有尾随空白行时，@Bortlesboat 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/987 中保留最后一个字幕
* 修复：通过 @Sushanth012 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/994 中处理空的 Qwen 选择
* i18n：@DrMaks22 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/996 中完成俄语 WebUI 翻译
* 壮举：在 https://github.com/harry0703/MoneyPrinterTurbo/pull/997 中添加 @RafaGomezGuillen 的 Groq 支持
*修复（groq）：添加默认型号名称+澄清https://github.com/harry0703/MoneyPrinterTurbo/pull/1014中@kapil971390的未经验证的手动输入警告
*壮举：在https://github.com/harry0703/MoneyPrinterTurbo/pull/1008中添加@shoujche的Coverr视频素材源

## 新贡献者

* @domantasjo 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/951 中做出了第一个贡献
* @kuishou68 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/960 中做出了第一个贡献
* @luongs3 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/963 中做出了第一个贡献
* @jonathanzhan1975 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/977 中做出了第一个贡献
* @Bortlesboat 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/987 中做出了第一个贡献
* @Sushanth012 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/994 中做出了第一个贡献
* @DrMaks22 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/996 中做出了第一个贡献
* @RafaGomezGuillen 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/997 中做出了第一个贡献
* @kapil971390 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1014 中做出了第一个贡献
* @shoujche 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1008 中做出了第一个贡献

## 验证

-`uv lock --check`
-`uv run --with pytest pytest test/services -q`
- 结果：117 项通过，1 项跳过，18 项警告，9 项子测试通过。

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.2.9...v1.3.0

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.0` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
