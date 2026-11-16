---
title: "codebase-memory-mcp v0.9.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.9.0"
version: "v0.9.0"
published: "2026-07-08"
type: "minor"
lang: "zh"
---

# codebase-memory-mcp v0.9.0

# 代码库内存-mcp v0.9.0

自 v0.8.1 以来的一个强大的稳健性和平台支持版本 — 一流的 Windows 支持、巨大的索引性能和内存安全增益、跨多种语言的广泛提取精度修复以及明显更好的图形 UI。

## 亮点

- **一流的 Windows 支持** — 端到端非 ASCII 路径处理、安装程序/运行时可靠性修复、UI 挂起修复以及本机 **windows-arm64** 构建 + 烟雾管道。
- **索引性能和弹性** - 内核规模的活动通过确定性输出将索引挂起时间减少了约 61%，加上崩溃/挂起 **supervisor**，它隔离坏文件并索引其余文件，而不是中止整个运行。
- **大型存储库上的内存安全** — 准确的 Linux RSS 统计、峰值与实时协调、低 RAM 机器的有限并行保留以及跨线程平板释放中的释放后使用修复。
- **图形 UI** — 高达 10M 节点的可配置节点预算，具有缩放渲染和对比度控制、死代码过滤、节点代码预览、GitHub 深层链接、URL 路由和离线标签渲染（无远程字体获取）。
- **提取准确性** - C/C++、Python、Go、PHP、Kotlin、Java、TypeScript/JavaScript、Rust 等的许多调用/导入/路由提取正确性修复。

## 发生了什么变化

### Windows 支持
端到端非 ASCII 路径支持（`_wfopen`、wide-argv + `CreateProcessW`、转义/NUL 终止的工作命令行）；安装程序可靠性和网络标记文档；解决了 UI 死锁的 git-spawn 句柄继承修复；钩子增强器中的驱动器号处理；大-`.db`尺寸处理； Windows 持久性导出失败时出现真正的错误；以及完整的本机 windows-arm64 构建 + 烟雾管道。

### 索引、性能和内存安全
具有确定性输出的内核级索引速度提高约 61%；具有仅并行崩溃恢复功能的 TypeScript 大规模级联修复；隔离肇事文件的崩溃/挂起管理程序； Linux 上准确的 `/proc` RSS；峰值与实时 RSS 协调；针对低 RAM 峰值 RSS 的有界、源上限并行保留；用于后台自动索引/观察器的受监督子进程 RSS 隔离； O(1) 对齐页跨线程无平板修复（释放后使用）；图形缓冲区更新插入合约和内存预算修复；主机分层 RAM 预算；现在通过 `skipped[]` + 日志文件报告每个文件索引失败，而不是静默失败。

### LSP/提取精度
CALLS 边缘正确性（字符串调度边缘、C/C++ 封闭函数归因、接收器感知自递归、py/go/php/kotlin 中的递归深度上限、Python 指数重新评估挂起的记忆保护）；路由/HTTP 提取（拒绝文件系统路径，以便 client 路由加入服务器路由、规范化参数化路径、Kotlin 控制器上的 Spring 路由、Django REST `@action`）；导入/解析（IMPORTS 由本地名称键入，拒绝非文件类目标，tsconfig 别名 `../` climbs，混合 Java/Kotlin 调用图边缘，稳定的 Java USAGE 所有权）；加上 `Class.lines` 准确性、以度为单位计数的继承/实现、堆分配的 `walk_defs` 框架堆栈修复深度文件上的堆栈溢出，以及带有 5 平台板的重现优先错误套件。

### 图形用户界面
节点预算高达 10M，具有缩放渲染和对比度控制；离线标签渲染（无远程 CDN 字体）；死代码过滤、节点代码预览和 GitHub 深层链接； URL 路由、过滤器面板 UX 和相机飞行；当所有内容都被过滤掉时，过滤器侧边栏保持可见；索引选择器中的 Windows 文件夹导航；索引作业失败浮出水面，而不是默默地完成； UI 删除时未监视的项目；重合点的有界八叉树递归。

### MCP 服务器和 CLI
结构化工具元数据； CLI 接受标志、stdin 和 `--args-file` 以及每个工具 `--help`；通过内部名称 + Ghost-DB 过滤和 `project_name` 别名进行项目解析； `trace_path` 不再混淆不同的同名函数并遵循 CROSS_* 边；非 UTF-8 源的有效 UTF-8 片段；正确的 JSON 控制字符 escaping； cypher 标签过滤遍历不再在 10 处截断，并通过 `WITH` 保留节点属性； `get_architecture` 概述子集； `detect_changes` 向 `since` 致敬。

### 发现、观察者和生命周期
Honor `.git/info/exclude`、全局`core.excludesFile`和linked-worktree忽略源；尊重 pkgmap/path-alias/envscan 行走中的排除； `.cbmignore` 否定不能再取消跳过安全核心目录；部署/目录不再双索引；范围搜索处理带有空格的存储库路径；修剪根部缺失的项目； `auto_watch` 配置门；更正工作树和子目录项目的 `canonical_root`；整个重新索引过程中 ADR 的保留。

### 语法、构建和文档
供应的 InterSystems ObjectScript 语法和 Mojo 解析器； SBOM 现在计算语法计数并完成非 MIT 许可证摘要。对 PR 进行完整的验证流程，并取消取消运行；问题分类机器人；每条腿的烟雾门可修复矩阵崩溃/假绿； gcc-15 和 Nix-on-macOS 构建修复。配置文件参考和 `extra_extensions` 文档。

## 感谢我们的贡献者

此版本包含大型社区的合并工作和报告的问题。谢谢：

@77652189 · @alexisperinger-ux · @Andy11-cpu · @apappas1129 · @BombaxCeiba · @Bortlesboat · @caioribeiroclw-pixel · @catsmonster · @Flipper1994 · @Golevka2001 · @GothUncc · @HackAttack · @halindrome · @imateusdev · @isc-tdyar · @JOhnsonKC201 · @jonghyunlee-29cm · @jstar0 · @jsw6701 · @KerseyFabrications · @kirilklein · @kriswill · @linze0721 · @minorityre · @moofone · @mvanhorn · @Naam · @nguiaSoren · @pcristin · @rainder · @rarepops · @Ravandevil25 · @RithvikReddy0-0 · @RollerCoaster1899 · @sahil-mangla · @ShauryaaSharma · @SS-42 · @SyntaxSawdust · @win4r

…以及所有提交这些修复解决的问题的人。通过 Dependabot 更新依赖项。

**全changelog：** https://github.com/DeusData/codebase-memory-mcp/compare/v0.8.1...v0.9.0

## 安全验证

所有发布的二进制文件均使用 70 多个防病毒引擎进行扫描 — **0 次检测**。

|二进制 | SHA-256 | VirusT总 |
|--------|---------|------------|
| `darwin-amd64` | `04ee3048810c19099502...` | [0/72 ✅](https://www.virustotal.com/gui/file/04ee3048810c19099502adc8bb83039423f02f2553d17677892a7f03b924e01f/detection) |
| `darwin-arm64` | `d9fbdd7d8570a77b2fb3...` | [0/72 ✅](https://www.virustotal.com/gui/file/d9fbdd7d8570a77b2fb32453e00bd52a02627281309cd56003a4eccfcfe878d6/detection) |
| `linux-amd64` | `a251a9f56a9464ef2378...` | [0/72 ✅](https://www.virustotal.com/gui/file/a251a9f56a9464ef2378b5e12be89842e95c7f015a9c7b7806f8dc572212a41d/detection) |
| `linux-arm64` | `c9cb157c6b27b42bafe9...` | [0/72 ✅](https://www.virustotal.com/gui/file/c9cb157c6b27b42bafe9050d6516595031dd3ff135e8cec4a726fd56116dffc3/detection) |
| `windows-amd64` | `9a205fa5ae759fbc866b...` | [0/72 ✅](https://www.virustotal.com/gui/file/9a205fa5ae759fbc866bfe1554f0c05a303be9ae6e0a00f94d875dc0c25e0680/detection) |
| `windows-arm64` | `a299150de19bb4da9a88...` | [0/72 ✅](https://www.virustotal.com/gui/file/a299150de19bb4da9a880a6139757076bd4139b2f6a7e7cf31bdd431d53aed9c/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.9.0` · 📅 发布：2026-07-08 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
