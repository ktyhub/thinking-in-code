---
title: "ChuanhuChatGPT 20240310"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20240310"
version: "20240310"
published: "2024-03-10"
type: "major"
lang: "en"
summary: "本次更新包含安全性更新，建议所有用户升级。 This update contains security updates. It is recommended that all users upgrade."
---

# ChuanhuChatGPT 20240310

_**本次更新包含安全性更新，建议所有用户升级。<br> This update contains security updates. It is recommended that all users upgrade.**_

### Features
- logging中输出每秒token数 (@GaiZhenbiao)

### Bug Fixes
- 修复隐私数据问题 (@GaiZhenbiao)
- 修复 GPT4 Vision 模型相关问题 (@GaiZhenbiao)
- 修复切换模型后回复可能为空的问题 (@chenditc)
- 修复 Claude 3 模型下開始新的聊天 System prompt 被清空的问题 (@GaiZhenbiao)
- 修复multimodal warning (@GaiZhenbiao)
- 修复重启时不刷新页面的问题 (@Keldos-Li)

### Miscellaneous
- removed abundant warnings (@GaiZhenbiao)
- bumped GPT model versions (@GaiZhenbiao)
- bumped gradio version to 3.44.0 (@GaiZhenbiao)
- pip upgrade when update (@Keldos-Li)


**Full Changelog**: https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240305...20240310

> [!important]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _Please execute the following commands after manually updating._
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- requirements reinstall needed -->

---

> **Source** [GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · `20240310` · 2024-03-10 · [upstream release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20240310)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
