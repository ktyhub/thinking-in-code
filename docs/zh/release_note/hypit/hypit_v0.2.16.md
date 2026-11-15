---
title: "hypit v0.2.16"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.16"
version: "v0.2.16"
published: "2026-09-26"
type: "patch"
lang: "zh"
---

# hypit v0.2.16

## 亮点

- `hypit packages status <name>@<version>` 现在回答构建提出的问题。它读取机器包主目录，而不读取其他任何内容，而加载程序在两个位置找到外部包 - 需要它的上方的 node_modules 链，以及由需求者声明的版本寻址的机器主目录。在前半部分看起来安装的包被报告未准备好，然后 `hypit doctor` 在下一行加载提供程序。

  Status 找到声明说明符的分发包，并从那里进行一次 `locateNodePackage` 调用，因此一次调用涵盖了这两个位置，而不是此命令在加载器旁边重新实现其中之一。该版本仍然准确并检查了两次：仅在所要求的版本中找到需求者，然后将解析的清单的版本与其进行比较。现在，说明符没有声明任何内容，将其命名为原因，而不是纯粹的未准备好。

  这就是代理容器所遇到的情况：`npm i -g @hypit/hypit @hyperframes/engine` 将两者放入相同的全局 node_modules 中，构建解析引擎并工作，而 `packages status` 称其丢失。

## 升级

安装`@hypit/hypit@0.2.16`。现有视频项目和材料无需迁移。 `packages status` 输出增益 `declaredBy`、`installedVersion` 和 `detail` 作为可选字段；机器可读格式仍为 `hypit.cli-package@1`。 `packages install` 不变。

## 验证

打包的发行版在结帐之外安装，用于编译捆绑的项目组件、准备其字体和托管浏览器、渲染和导出 MP4，并成功解码完整的输出。

状态变化本身是在容器形状的布局中测量的 - 分布及其依赖项全局安装，机器包主目录为空 - `@hyperframes/engine@0.7.101` 和 `@hyperframes/producer@0.7.101` 现在报告已准备好声明包和已解析的安装路径，而不是之前未准备好并退出 1。未知版本和未知包仍然存在 1，表明没有分发包声明它们。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.16` · 📅 发布：2026-09-26 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.16)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
