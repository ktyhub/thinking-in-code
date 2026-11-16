---
title: "hypit v0.2.6"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.6"
version: "v0.2.6"
published: "2026-09-18"
type: "patch"
lang: "zh"
---

# hypit v0.2.6

## 字幕计时、多路复用器容差和 Wan 2.7 图像

此版本修复了拒绝或破坏正确输出的两个缺陷，添加了 Wan 2.7 图像模型，并使 README 中的运行时配置文件示例可复制粘贴。

### 字幕时间

对齐器报告每个单词在下一个单词开始的位置结束，并且 `tokenFrameSpan` 保持即时落入的帧，因此相邻的单词窗口重叠一帧。提示边界继承了这种重叠，并且在单个位置绘制提示的渲染器在同一帧上绘制了其中两个提示。几乎每次转换时中文字幕都会重叠。

`@hypit/caption-fine` 中的 `exclusiveActivationFrames` 已经说明了 Atoms 的规则：一旦下一个编写的单元开始，前一个单元就会停止。现在，它在构建单元计时时应用一次，因此独占的 Cue 边界遵循以最后一个单元结束的 Cue 包络。时间线保留原始令牌测量值。 （＃300，＃297）

### 最终多路复用器断言

分阶段的 WAV 在复用器之前被断言为样本精确，因此最终的断言是关于 AAC 中幸存的内容。 AAC 无法承载任意样本计数：编码器发出 1024 个样本帧并报告 MP4 复用器通过编辑列表进行补偿的启动延迟，因此所呈现的跨度会远离输入一些样本。在合成音上测量，4,249,600 个样本呈现出 4,249,584，4,236,800 个样本呈现出 4,236,768。将时间线填充到 AAC 帧的整数并不会将其删除。

因此，要求精确相等会拒绝长度不是该往返固定点的每个正确的多路复用器，导致 88.5 在最后一步的第二次渲染失败，所有生成的材料都已付费。该断言现在可以容忍编码器的延迟。 （＃298，＃296）

###万2.7形象模特

`@hypit/wan@1` 具有两个精确型号：`wan-2.7-image` 和 `wan-2.7-image-pro`。两者都采用最多 5,000 个字符的提示、最多 9 个参考图像以及 `1K` 或 `2K` 条带； Pro 版本增加了 `4K`。 `count` 渲染最多四张图片，或命名最多十二张图像集的上限，其中模型选择返回的数量。

该模型不采用宽高比：在存在参考的情况下，输出遵循最后一个，并且仅提示请求在乐队自己的框架上呈现。它从提示中读取排除项，而不是从否定提示字段中读取。

`@hypit/provider-monid` 通过 Monid 的 `alibaba` 端点提供服务。其结果路径先前假定为一个视频；路由现在命名其结果类型，并且集合下载每个返回的文件，因此图像集作为一个集合到达。在解决任何引用之前，会报告两个服务限制：`4K` 仅根据提示进行渲染，并且请求最多渲染图像集之外的四张图片。 (#301)

### Windows 凭证存储

HypiHub OAuth 存储携带 JWT 访问和刷新令牌的 JSON，Windows Credential Locker 的 `PasswordVault` 在浏览器流程完成后拒绝超过 512 个字符的密码，并出现不透明写入失败。现在，Store 在生成 PowerShell 之前拒绝此类写入，并在消息中将文件命名为 Store。 （＃294，＃291）

### 文档

- 提供商自述文件运行时配置文件示例是完整的配置文件。复制到 `hypit.runtime.json` 之前，它们失败了 `auth status`。 （＃289，＃288）
- HypiHub README 运行时配置文件示例是一个有效的 `hypit.runtime.json`：它缺少 `format`、`dataRoot` 和声明的凭证存储，并且命名为存储 `os`，而 `runtime init` 现在写入 `platform`。 （＃295，＃292）

## 合并拉取请求

|公关 |作者 |
| ---| ---|
| #289 文档：使 Provider Runtime Profile 示例完整 | @Flandern1211 |
| #294 修复：拒绝超过 PasswordVault 512 字符限制的 Windows 储物柜写入 | @fetw882 |
| #295 文档：使 HypiHub 运行时配置文件示例成为有效的 hypit.runtime.json | @fetw882 |
| #298 修复（媒体执行）：容忍最终多路复用器断言中的 AAC 编码器延迟 | @paulchen180616 |
| #300 修复（标题）：在投影时为每个标题单元指定一个所有者 | @rponeawa |
| #301 feat(wan)：添加 Wan 2.7 图像模型并在 Monid 上提供它们 | @rponeawa |

## 已解决的问题

#288, #291, #292, #296, #297

## 贡献者

@Flandern1211、@fetw882、@paulchen180616、@rponeawa

## 更新

对于全局 CLI 安装：

```bash
npm install -g @hypit/hypit@0.2.6
hypit --version
```

对于项目本地安装：

```bash
npm install --save-exact @hypit/hypit@0.2.6
npm exec --no -- hypit --version
```

已安装的 Hypit Skill 通过用于安装它的工具单独更新。内部格式和逻辑模块标识符仍为 `@1`。 0.2.0 中的脚本语法没有变化。更新不会迁移或重写已保存的视频项目。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.6` · 📅 发布：2026-09-18 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
