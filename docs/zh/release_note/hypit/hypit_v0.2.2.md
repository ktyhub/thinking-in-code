---
title: "hypit v0.2.2"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.2"
version: "v0.2.2"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# hypit v0.2.2

## Windows 媒体环境和凭证存储的正确性

此版本包括 Windows 执行修复和凭证目录选择的更改。具有主机状态根之外的文件或平台存储路径的现有配置文件将被 0.2.2 拒绝；这是 0.2.1 的行为更改。新的起始商店选择仅适用于新初始化的配置文件。

### Windows 媒体执行

`ffmpeg` 和 `ffprobe` 以环境变量白名单启动，因此主机环境不会出现在媒体子项中。该白名单是为 POSIX 编写的，因此 Windows 子级既没有收到 `%TEMP%` 也没有收到 `%TMP%`，并且无法创建临时文件。 HyperFrames 渲染路径和共享媒体执行路径现在都带有 Windows 列表以及 POSIX 列表。主机秘密仍然保密。 （＃259，＃260）

### 凭证存储

- `runtime init` 编写一个选择 `@hypit/credential-store-platform` 的入门配置文件，因此它生成的配置文件可以在 Linux 以及 macOS 和 Windows 上打开和写入。 macOS 和 Windows 将平台锁保留在相同的服务和密钥下，因此仍然可以找到现有的凭据。 `os`、`file` 和 `env` 仍然可以通过名称进行选择。 (#247)
- 文件和平台存储的配置文件的 `config.path` 根据主机状态根解析并检查包含情况。当 Store 打开时，转义该根的路径将被拒绝。根之外的绝对路径以前被接受，但现在不被接受。 （＃265）
- 一个凭证文件的读取和替换在一个过程中轮流进行。 `resolve` 使文档在整个读取过程中保持打开状态，而 `put` 将其替换为重命名，并且 Node 的 Windows 重命名实现使用 MoveFileExW，它可以在目标打开时拒绝替换。进程本地排序减少了一个进程内的这种重叠；它不协调单独的 CLI 和 Worker 进程。 0.2.2 中仍然存在跨进程替换故障。按键保持独立。 （＃276）
- Windows 凭据管理器帮助程序与 macOS `security(1)` 调用一样具有 10 秒超时限制，因此卡住的储物柜会失败，而不是挂起 CLI。 （＃261）

### 运行时和 CLI

- `programs down` 将没有有效 Hypit PID 且没有 `start` 命令的程序视为无需停止，并报告 `No external programs to stop` 而不是退出 1。启动器配置文件的 `media.local` 和 `hyperframes.local` 仅声明 `probe()`，因此就绪探针意味着该工具已安装，而不是进程正在运行。无需 Hypit PID 即可启动的程序仍会报告 `not-ours`。 （＃272）
- 概述帮助列出了没有选定配置文件的 `programs prepare|up|status|down`、`programs` 和 `runtime` 报告 `build`、`pricing`、`auth` 和执行命令已使用的相同恢复语句。 （＃266）
- 三个包声明其源导入的工作区包。 （＃253）

### 文档

- 英文版快速入门的构建工作流程部分包含中文版本已有的依赖项准备、`.gitignore`、共享资源库和存档命令材料。 （＃275）
- `auth status` 示例携带所需的端点参数。 (#254)

## 合并拉取请求

|公关 |作者 |
| ---| ---|
| #247 修复（凭据）：让运行时 init 选择一个 Linux 可以打开的 Store | @mikee-ai |
| #253 修复（包）：声明源导入的工作区依赖 | @Violet2314 |
| #254 文档：将所需的端点参数添加到身份验证状态示例 | @Violet2314 |
| #259 修复：为 HyperFrames ffmpeg 子级提供 Windows TEMP 和进程创建变量 | @fetw882 |
| #260 修复：将 TEMP 和 TMP 复制到 Windows 媒体子项 | @fetw882 |
| #261 修复：将 Windows 操作系统凭据 PowerShell 绑定到与 macOS 相同的 10 | @fetw882 |
| #265 修复：将文件和平台凭证路径保留在主机状态根中 | @fetw882 |
| #266 修复：列出概述帮助中准备的程序并解释丢失的配置文件 | @fetw882 |
| #272 修复（运行时）：将仅探测程序视为没有任何可停止的程序 | @Flandern1211 |
| #275 文档：将英文快速入门运行介绍与其中文对应内容保持一致 | @Violet2314 |
| #276 修复（凭证）：对每个凭证文档的读取和替换进行排序 | @rponeawa |

## 已解决的问题

#255、#256、#257、#258、#262、#263、#268、#269、#271

## 贡献者

@fetw882、@Violet2314、@mikee-ai、@Flandern1211、@rponeawa

除了 #247 和 #276 之外，上述所有更改都是由某人在自己的计算机上遇到问题后提交的问题开始的。

## 更新

```bash
npm install -g @hypit/hypit@0.2.2
hypit --version
```

对于项目本地安装：

```bash
npm install --save-exact @hypit/hypit@0.2.2
npm exec --no -- hypit --version
```

内部格式和逻辑模块标识符仍为 `@1`。 0.2.0 中的脚本语法没有变化。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.2` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
