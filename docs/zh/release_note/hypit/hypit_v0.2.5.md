---
title: "hypit v0.2.5"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.5"
version: "v0.2.5"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# hypit v0.2.5

## Monid 上的 MiniMax H3

`@hypit/provider-monid` 现在通过 Monid 的 `minimax` `/v1/video/minimax-h3` 以及它已经映射的四个 ByteDance Seedance 端点为 `@hypit/minimax-h3@1#minimax-h3` 提供服务。该模型除了 HypiHub、HiAPI、Pollo 和 TokenDance 之外还有第三个捆绑网关提供商。 （＃286）

H3 采用与 Seedance 端点相同的角色标记 ModelArk `content` 数组，在正文中命名其模型，并且既不携带它们所采用的 `generate_audio` 也不携带 `web_search` 字段。该路线处理了三个差异：

- `resolution` 是端点所必需的，而模型的端口是可选的，因此在 `2K`（HypiHub 提供商也选择的分辨率）上发送声明没有的请求。
- 端点不采用文本到视频的 `adaptive` 比率，而帧模式解析上传图像的框架，视频参考默认为自适应。在解析任何引用之前，不携带 `aspect-ratio` 的文本转视频请求将报告不受支持；其他两种模式以 `adaptive` 形式发送。
- H3 在 `content.url` 而不是 ModelArk `video_url` 返回其视频。

Monid 通过提供程序和路径对端点进行寻址，因此每个映射现在都带有中继它的提供程序，而不是每次运行都假设 `bytedance`。

Monid 目录的其余部分不包含此发行版描述的其他模型。它的 ElevenLabs 端点是基于语音 ID 的，而 `@hypit/elevenlabs-speech@1#eleven_ttv_v3` 是语音设计的，需要一个没有字段的语音描述，而 H3 Fast、Max 和 Max Turbo 变体则声明了具有自己的值域的不同模型。

## 合并拉取请求

|公关 |作者 |
| ---| ---|
| #286 壮举（provider-monid）：服务 MiniMax H3 | @rponeawa |

## 贡献者

@rponeawa

## 更新

对于全局 CLI 安装：

```bash
npm install -g @hypit/hypit@0.2.5
hypit --version
```

对于项目本地安装：

```bash
npm install --save-exact @hypit/hypit@0.2.5
npm exec --no -- hypit --version
```

已安装的 Hypit Skill 通过用于安装它的工具单独更新。内部格式和逻辑模块标识符仍为 `@1`。 0.2.0 中的脚本语法没有变化。更新不会迁移或重写已保存的视频项目。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.5` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
