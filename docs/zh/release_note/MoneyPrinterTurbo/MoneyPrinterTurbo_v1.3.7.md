---
title: "MoneyPrinterTurbo v1.3.7"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.7"
version: "v1.3.7"
published: "2026-09-13"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.7

[英语](#en-v1.3.7) | [中文](#cn-v1.3.7)

<h2 id="en-v1.3.7">亮点</h2>

- 添加逐字字幕和弹出弹簧动画，在WebUI中具有独立的显示模式和动画控件。
- 添加了带有浏览器内音频预览的预设背景音乐选择，以便您可以在生成视频之前收听。
- 使用 Azure TTS V1（Edge TTS）向脚本添加了本机暂停：使用 `[pause: 2s]` 或 `[停顿: 2s]` 插入静音，同时保持旁白和字幕对齐。
- 添加了 Kokoro 和 VoxCPM TTS 提供商。 Kokoro 支持自托管 OpenAI 兼容服务，并自动加载服务器的语音列表。
- 添加了 Claude Code 作为 LLM 提供者，使用经过身份验证的 Claude 订阅以及专用的 Docker 部署文件；还添加了兼容 OpenAI 的 API 路由提供程序。
- 改进了生算云视频生成，具有特定于帐户的模型发现、报价和明确的成本确认，以及基于旁白持续时间的 clip 计数建议。
- 使用 Pexels、Pixabay、Coverr 或本地文件时，减少了同一任务中生成的视频中的重复材料选择。当可用池不足时，会报告材料重用。
- 在上传-发布发布中添加了 YouTube“专为儿童制作”的受众群体设置。
- 添加了阿塞拜疆 WebUI 本地化并更新了新设置和提示的翻译。

## 修复和改进

- 改进了字幕动画渲染，包括同步缩放字幕图像和透明蒙版，以避免字幕出现时出现黑色轮廓。
- 强化的 Kokoro 语音发现和音频处理：在服务不可用时保留所选语音，并在替换现有文件之前验证生成的音频。
- 添加了暂停标签验证并改进了多段旁白/字幕同步；无效的语音块现在停止生成，而不是默默地生成不完整的叙述。
- 更安全地处理 `NaN` 和无穷大等非有限语音速率。
- 修复了项目路径包含空格时 WebUI 启动脚本的端口检查，并更正了 Colab 笔记本中的导入和存储库路径。
- 在 FFmpeg 连接运行时添加了定期日志消息，使长时间运行的处理更容易诊断。
- 扩展材料缓存清理以回收中断写入留下的临时文件。
- 更新了代理助手以支持 `openai_image` 并将 `claude_code` 识别为无密钥 LLM 提供商。
- 将记录的 Edge TTS 语音列表与内置目录同步，并阐明在发布资产中哪里可以找到 Windows one-click 包。

## 使用及升级注意事项

- 字幕默认保持**句子显示，无动画**。逐字计时与 Azure TTS V1 (Edge TTS) 或 Whisper 配合使用效果最佳；没有单词级时间戳的提供者可能会显示短语或整个句子。
- 仅 Azure TTS V1 (Edge TTS) 支持脚本暂停标记，个别暂停时间从 **0.1 到 10 秒**。
- Kokoro 需要单独运行的兼容 TTS 服务。 Claude Code 需要其 CLI 和订阅认证；选择任一提供商都不会自动安装或验证底层服务。
- YouTube 受众群体设置是明确的用户声明，而不是自动内容分类。它默认为**不适合儿童**；上传前检查设置。
- 批量材料分配减少了单个任务内的重复使用；当源clips太少时，它不保证独特的镜头，并且不会改变付费AI素材提供商的分配行为。

## 发生了什么变化

- 逐字字幕和弹簧动画 — [#1313](https://github.com/harry0703/MoneyPrinterTurbo/pull/1313) 中的 @farhanahmad15。
- 预设背景音乐选择 — [#1314](https://github.com/harry0703/MoneyPrinterTurbo/pull/1314) 中的@farhanahmad15，然后是[音频预览改进](https://github.com/harry0703/MoneyPrinterTurbo/commit/9f0b28f8e87db76feee2d49ad3d98a31b43a9532)。
- Claude Code 订阅提供商 — [#1319](https://github.com/harry0703/MoneyPrinterTurbo/pull/1319) 中的@fred-ng。
- WebUI 启动器支持包含空格的路径 — [#1321](https://github.com/harry0703/MoneyPrinterTurbo/pull/1321) 中的 @tailieu2212。
- Kokoro TTS 提供商 — [#1325](https://github.com/harry0703/MoneyPrinterTurbo/pull/1325) 中的 @rocketlang。
- 胜算云视频工作流程改进 — 改编自@huanglvjing 在 [#1328](https://github.com/harry0703/MoneyPrinterTurbo/pull/1328) 中的贡献，并纳入 [5ceffd0](https://github.com/harry0703/MoneyPrinterTurbo/commit/5ceffd02a267de2ede0bbdb0fab8d7d875ea9842) 中。
- 本机脚本暂停 - [#1330](https://github.com/harry0703/MoneyPrinterTurbo/pull/1330) 中的@IsmaelCamC。
- 非有限语音速率处理 - [#1333](https://github.com/harry0703/MoneyPrinterTurbo/pull/1333) 中的@Sushanth012。
- Colab 笔记本修复 — [#1334](https://github.com/harry0703/MoneyPrinterTurbo/pull/1334) 中的 @FrioNode。
- 阿塞拜疆 WebUI 翻译 — @jamalkamaladdin [#1339](https://github.com/harry0703/MoneyPrinterTurbo/pull/1339)。
- 减少批次材料的重复使用 - [#1340](https://github.com/harry0703/MoneyPrinterTurbo/pull/1340) 中的@giteePro。
- Edge TTS 语音目录文档 — [#1341](https://github.com/harry0703/MoneyPrinterTurbo/pull/1341) 中的 @dajiao Huang。
- VoxCPM TTS 提供商 — [#1343](https://github.com/harry0703/MoneyPrinterTurbo/pull/1343) 中的 @lottshin。
- 孤立材质缓存临时文件清理 — [#1345](https://github.com/harry0703/MoneyPrinterTurbo/pull/1345) 中的 @c020627。
- 发布资产下载指南 — [#1349](https://github.com/harry0703/MoneyPrinterTurbo/pull/1349) 中的 @c020627。
- FFmpeg 串联进度日志记录 — [#1351](https://github.com/harry0703/MoneyPrinterTurbo/pull/1351) 中的 @c020627。
- 代理助手支持图像生成和无密钥 Claude 代码 — [#1352](https://github.com/harry0703/MoneyPrinterTurbo/pull/1352) 和 [#1353](https://github.com/harry0703/MoneyPrinterTurbo/pull/1353) 中的 @c020627。
- API 路线法学硕士提供商 — [#1354](https://github.com/harry0703/MoneyPrinterTurbo/pull/1354) 中的 @DennyHo0917，[#1355](https://github.com/harry0703/MoneyPrinterTurbo/pull/1355) 中的 @c020627 更新自述文件。
- YouTube 观众声明 — [bfd7612](https://github.com/harry0703/MoneyPrinterTurbo/commit/bfd7612d43121e53b850a45ecb036b545e19b128)。

感谢所有贡献者以及所有报告问题并帮助测试这些更改的人！

**完整 Changelog**：[v1.3.6...v1.3.7](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.6...v1.3.7)

---

<h2 id="cn-v1.3.7">重点更新</h2>

- 新增逐词字幕和弹跳出现动画，WebUI可分别选择字幕显示模式和动画效果。
- 新增默认背景音乐选择与浏览器内试听，生成视频前即可确认配乐效果。
- 新增 Azure TTS V1（Edge TTS）脚本停顿支持：使用 `[停顿: 2s]` 或 `[pause: 2s]` 插入静音，并同步调整配音与字幕时间轴。
- 新增Kokoro和VoxCPM配音服务。Kokoro支持自托管的OpenAI兼容服务，并自动读取服务端音色列表。
- 通过已认证新增Claude订阅使用的Claude Code大模型服务，提供专用的Docker配置文件；同时新增OpenAI兼容的API路线大模型服务。
- 优化胜算云视频生成流程，支持读取当前账号可用模型、获取报价和确认费用，并根据旁白时长推荐素材数量。
- 减少同一任务批量生成多个视频时的素材重复，适用于Pexels、Pixabay、Coverr和本地文件；素材不足而发生重复时会给出提示。
- Upload-Post 新增 YouTube“是否面向儿童”受众设置。
- 新增阿塞拜疆语WebUI翻译，并补齐新设置与提示的多语言文案。

## 修复与改进

- 优化字幕动画渲染，同步缩放字幕画面与透明蒙版，避免字幕出现时产生黑色效果。
- 完善Kokoro音色读取与音频处理：服务暂时不可用时保留原有音色选择，替换文件前校验生成。
- 增加停顿标签校验，改进分段配音与字幕同步；无效语音片段会中止生成，避免静默输出旁白的成片。
- 完善`NaN`、无穷大等非限语速值的处理。
- 修复项目路径包含空白时 WebUI 修改启动脚本的端口检查，并 Colab 笔记本的加载和仓库路径。
- FFmpeg 切割期间增加定期日志，判断时间处理状态和排查问题。
- 素材缓存清理支持恢复读取继承后的临时文件。
- Agent辅助脚本添加`openai_image`支持，并正确识别API Key的`claude_code`服务。
- 将 Edge TTS 文档音色列表与内置音色库同步，并在 Release Assets 中的下载位置中显示 Windows 明确的一键包。

## 使用与升级说明

- 字幕默认仍为**按句显示、无动画**。逐词时间轴在 Azure TTS V1（Edge TTS）或 Whisper 下最准确；其他服务缺少逐词时间，可以按快捷键或整句显示。
- 停顿脚本标签仅支持Azure TTS V1（Edge TTS），单次停顿范围为**0.1～10秒**。
- Kokoro需要单独运行兼容的配音服务；Claude Code需要安装CLI并完成订阅认证。选择服务商不会自动完成底层服务的安装或认证。
- YouTube受众设置用户由主动声明，不会自动识别视频内容。默认**非面向儿童**，上传前请根据实际内容确认。
- 批量素材分配仅减少同一任务内的重复；素材不足时仍可复用，不保证每条视频的画面完全不同，也不改变付费AI素材服务的分配行为。

## 主要变更

- [#1313](https://github.com/harry0703/MoneyPrinterTurbo/pull/1313)：逐词字幕与弹跳动画，感谢@farhanahmad15。
- [#1314](https://github.com/harry0703/MoneyPrinterTurbo/pull/1314)：默认背景音乐选择，感谢@farhanahmad15；后续补充了[音乐试听](https://github.com/harry0703/MoneyPrinterTurbo/commit/9f0b28f8e87db76feee2d49ad3d98a31b43a9532)。
- [#1319](https://github.com/harry0703/MoneyPrinterTurbo/pull/1319)：Claude Code订阅大模型服务，感谢@fred-ng。
- [#1321](https://github.com/harry0703/MoneyPrinterTurbo/pull/1321)：修复含空格路径下的WebUI启动检查，感谢@tailieu2212。
- [#1325](https://github.com/harry0703/MoneyPrinterTurbo/pull/1325)：Kokoro配音服务，感谢@rocketlang。
- [#1328](https://github.com/harry0703/MoneyPrinterTurbo/pull/1328)：吸收并优化胜算云视频生成流程，感谢@hualvjing，已通过[5ceffd0](https://github.com/harry0703/MoneyPrinterTurbo/commit/5ceffd02a267de2ede0bbdb0fab8d7d875ea9842)纳入。
- [#1330](https://github.com/harry0703/MoneyPrinterTurbo/pull/1330)：脚本停顿支持，感谢@IsmaelCamC。
- [#1333](https://github.com/harry0703/MoneyPrinterTurbo/pull/1333)：非限语速值处理，感谢@Sushanth012。
- [#1334](https://github.com/harry0703/MoneyPrinterTurbo/pull/1334)：修复Colab笔记本，感谢@FrioNode。
- [#1339](https://github.com/harry0703/MoneyPrinterTurbo/pull/1339)：阿塞拜疆语WebUI翻译，感谢@jamalkamaladdin。
- [#1340](https://github.com/harry0703/MoneyPrinterTurbo/pull/1340)：大规模视频素材重复，感谢@giteePro。
- [#1341](https://github.com/harry0703/MoneyPrinterTurbo/pull/1341)：同步Edge TTS音色文档，感谢@dajiao Huang。
- [#1343](https://github.com/harry0703/MoneyPrinterTurbo/pull/1343)：VoxCPM配音服务，感谢@lottshin。
- [#1345](https://github.com/harry0703/MoneyPrinterTurbo/pull/1345)：清理缓存转发临时文件，感谢@c020627。
- [#1349](https://github.com/harry0703/MoneyPrinterTurbo/pull/1349)：完善发布资产下载指引，感谢@c020627。
- [#1351](https://github.com/harry0703/MoneyPrinterTurbo/pull/1351)：FFmpeg 完成图纸日志，感谢@c020627。
- [#1352](https://github.com/harry0703/MoneyPrinterTurbo/pull/1352)、[#1353](https://github.com/harry0703/MoneyPrinterTurbo/pull/1353)：Agent 代理脚本支持文生图与免 API Key 的 Claude Code，感谢@c020627。
- [#1354](https://github.com/harry0703/MoneyPrinterTurbo/pull/1354)：API路线大模型服务，感谢@DennyHo0917；[#1355](https://github.com/harry0703/MoneyPrinterTurbo/pull/1355)补齐README说明，感谢@c020627。
- [bfd7612](https://github.com/harry0703/MoneyPrinterTurbo/commit/bfd7612d43121e53b850a45ecb036b545e19b128)：YouTube受众报表设置。

感谢所有贡献代码、反馈问题和参与测试的朋友！

**完整变更记录**：[v1.3.6...v1.3.7](https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.6...v1.3.7)

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.7` · 📅 发布：2026-09-13 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
