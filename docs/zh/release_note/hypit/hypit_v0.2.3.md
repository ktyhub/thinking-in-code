---
title: "hypit v0.2.3"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.3"
version: "v0.2.3"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# hypit v0.2.3

## 本地执行和请求正确性

- 文件支持的凭据现在共享结果存储的本机 Windows 替换实现。 CLI 和工作进程可以读取和替换完整的凭据值，而无需进程本地队列。替换失败保留之前的值；不受支持的文件系统操作会报告错误。
- Windows 操作系统凭据替换不再删除写入前的先前值。子进程超时和输出失败会终止帮助程序。
- 再次接受主机状态根之外的显式文件/平台凭证目录。配置文件保留对其所选存储位置的控制。
- 在上传或提交请求之前，生成映射拒绝明确提供的无法传输的媒体字段。可选布尔值保留 `true` 和 `false`。
- 媒体准备探测执行环境中选定的 FFmpeg/FFprobe 可执行文件。仅探测程序准确地报告安装/准备情况，而不声称是正在运行的服务。
- 启动器在加载包之前解析其物理分发目录。这修复了 Windows 短路径别名错误地导致安装的字体出现在其自己的发行版之外的问题。
- 安装包 CI 现在可以验证 Windows 和 Linux，包括组件构建、字体、显式浏览器准备、渲染、导出和完整媒体解码。
- 项目视频提供商示例通过其说明性上传传输携带第一/最后一帧人物参考分类。

这些更改不会添加静默下载、重试、回退浏览器、锁定文件协议、中央队列或持久协调元数据。逻辑模块和格式标识符仍然是`@1`；脚本语法未更改。

## 更新中

对于全局 CLI 安装：

```bash
npm install -g @hypit/hypit@0.2.3
hypit --version
```

对于项目本地安装：

```bash
npm install --save-exact @hypit/hypit@0.2.3
npm exec --no -- hypit --version
```

已安装的 Hypit Skill 通过用于安装它的工具单独更新。从此存储库更新该安装以接收修订后的[运行时配置文件指南](https://github.com/hypit-ai/hypit/blob/v0.2.3/skills/hypit/references/environment/profile.md)，它将准备、进程启动和凭据连接分开。更新安装不会迁移或重写已保存的视频项目。

仅存储库更改：手动触发可选的 AI 分析工作流程，读取一个问题或 PR 并在操作摘要中返回建议。它没有问题/PR 写入权限，并且独立于 npm CLI。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.3` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
