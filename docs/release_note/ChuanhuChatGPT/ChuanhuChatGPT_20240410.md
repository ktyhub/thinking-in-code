---
title: "ChuanhuChatGPT 20240410"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20240410"
version: "20240410"
published: "2024-04-10"
type: "major"
lang: "en"
---

# ChuanhuChatGPT 20240410

### Breaking
- **川虎助理调整为自动使用可使用的第三方插件，并支持上下文对话** (@Gaizhenbiao)
- 适配到 gradio 4.26，重构部分代码 (@Gaizhenbiao, @Keldos-Li)

### Features
- 新增 CLaude3 Haiku 模型支持 (@Gaizhenbiao)
- logging中输出每秒token (@Gaizhenbiao)

### Bug Fixes
- 修复 Claude3 模型返回问题 (@Gaizhenbiao)
- 修复特殊字符在自动对话命名时产生的错误 (@Yefori-Go, @zollty)
- 修复在线搜索的问题 (@Gaizhenbiao)
- 修复文件上传的问题 (@Gaizhenbiao, @Keldos-Li)

### Miscellaneous
- 移除了等待输出时的特大等待气泡 (@Keldos)
- 美化使用工具时的输出 (@Gaizhenbiao)
- Docker 指定 Python3.10 版本


**Full Changelog**: https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240310...20240410


> [!important]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _Please execute the following commands after manually updating._
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- requirements reinstall needed -->

---

> **Source** [GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · `20240410` · 2024-04-10 · [upstream release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20240410)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
