---
title: "ChuanhuChatGPT 20240410"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20240410"
version: "20240410"
published: "2024-04-10"
type: "major"
lang: "zh"
---

# ChuanhuChatGPT 20240410

### 打破
- **川虎助理调整为自动使用可使用的第三方插件，并支持上下文对话** (@Gaizhenbiao)
- 改装到gradio 4.26，重构部分代码 (@Gaizhenbiao, @Keldos-Li)

### 特点
- 新增 CLaude3 Haiku 模型支持 (@Gaizhenbiao)
- 记录中输出每秒token (@Gaizhenbiao)

### 错误修复
- 修复Claude3模型返回问题 (@Gaizhenbiao)
- 修复特殊字符在自动对话命名时产生的错误（@Yefori-Go，@zollty）
- 修复在线搜索的问题 (@Gaizhenbiao)
- 修复文件上传的问题 (@Gaizhenbiao, @Keldos-Li)

### 杂项
- 删除了等待作业时的特大等待气泡 (@Keldos)
- 美化使用工具时的输出（@Gaizhenbiao）
- Docker 指定 Python3.10 版本


**完整 Changelog**：https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240310...20240410


> [!重要]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _手动更新后请执行以下命令_
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- 需要重新安装的要求 -->

---

> 📦 仓库：[GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · 🏷️ 版本：`20240410` · 📅 发布：2024-04-10 · [查看英文原版 Release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20240410)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
