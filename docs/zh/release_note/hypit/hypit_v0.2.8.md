---
title: "hypit v0.2.8"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.8"
version: "v0.2.8"
published: "2026-09-19"
type: "patch"
lang: "zh"
---

# hypit v0.2.8

Seedance 现在需要为每个提供的图像或视频（包括第一帧和最后一帧）提供明确的人物参考布尔值。当引用包含人物时设置 `true`，否则设置 `false`。缺失值在生成之前失败；音频引用必须省略该字段。 HypiHub 在上传过程中保留这两个值。

升级现有源时，将 `person-reference="true"` 或 `person-reference="false"` 添加到每个视觉 `Reference`。 FrameVideo 使用 `first-frame-person-reference`，当提供最后一帧时，使用 `last-frame-person-reference`。直接请求需要 `fields.personReference`。

更新 npm 发行版：

```sh
npm install -g @hypit/hypit@0.2.8
```

[Hypit 技能指南](https://github.com/hypit-ai/hypit/blob/v0.2.8/skills/hypit/references/production/vocabulary.md) 与 npm 分开更新。刷新您已安装的技能：

```sh
npx skills add hypit-ai/hypit -g
```

[参考语法和示例](https://github.com/hypit-ai/hypit/blob/v0.2.8/packages/seedance/README.md#visual-reference-metadata)

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.8` · 📅 发布：2026-09-19 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
