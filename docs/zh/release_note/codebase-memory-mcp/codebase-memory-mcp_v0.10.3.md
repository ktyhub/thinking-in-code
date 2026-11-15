---
title: "codebase-memory-mcp v0.10.3"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.3"
version: "v0.10.3"
published: "2026-08-13"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.3

# 代码库内存-mcp v0.10.3

这是一个仅修复的版本，其中大部分是社区完成的工作：这里有六个贡献的拉取请求，以及我们在 v0.10.2 中自行发布的两个回归的修复。

升级之前有两件事值得了解。 **如果您针对同一个项目运行多个 MCP client**，此版本将修复一个可能会悄悄破坏健康索引的错误 - 从第一部分开始。 **如果安装或更新失败**，这里修复了三个不同的原因：拒绝普通主目录的权限规则、完全报告错误原因的错误消息以及 Codex 丢失缓存目录。其中一些“默默地”失败了，或者归咎于错误的事情，这就是他们在多个版本中幸存下来的原因。

## 并发实例不再隔离彼此的数据库

此版本中最严重的错误，由 **@LynxBay** 修复。当两个 cbm 实例在同一个项目上竞争时（两个编辑器、一个编辑器加上一个 CLI 调用、一个守护进程和一个杂散会话），锁定竞争的失败者可能会得出数据库“损坏”的结论并隔离它：重命名、从头开始重建、数小时的索引消失。数据库状况良好；完整性检查无法区分“损坏”和“繁忙”（#1206）。

同样的检查也有相反的盲点：只要顶级簿记看起来正确，页面真正破损的数据库就会通过，因此真正的损坏不会被注意到，直到查询行为不当（＃1037）。

诚信现在返回三向裁决。仅确认腐败隔离；锁定竞赛表示“项目正忙；索引后重试”并保留数据；深 `quick_check` 可以捕获浅探针错过的页面级损坏。两个方向都进行回归测试。

## 图决定论，两次

**@Studnicky** 的两项贡献解决了运行间漂移的两个长期根源——自 0.9.1 RC 以来我们在已知问题中跟踪的“相同的存储库，略有不同的边缘计数”行为：

- 当相同的逻辑边以不同的属性（例如，LSP 解析的调用和文本匹配）产生两次时，幸存者是最后到达的——线程调度的函数。合并现在是一个全序：较高的置信度获胜，平局确定性地打破，并且结果与构造的到达顺序无关。
- 配置候选集合在应用其上限之前不进行任何排序，因此哪些候选者幸存取决于工人合并顺序。现在，候选者首先按纯内容密钥排序 - 特别是*不是*按节点 id 排序，它看起来很稳定，但本身是按合并顺序分发的。

## Windows：使用空 ACL 创建的守护程序文件
**@Kiborgik** 诊断并修复了一个微妙的问题 (#1351)：守护程序的私有目录将受保护的 DACL 与不可继承的 ACE 结合在一起，这在 Windows 上意味着子级继承*无* — 每个在其中创建的文件都带有空的 ACL，甚至其所有者也无法读取。目录现在带有可正确继承的仅限所有者的 ACE，因此可以保持严格的安全状态并且文件实际上可以正常工作。来自同一贡献者的配套修复程序关闭了一个陷阱，其中一台名为其用户的机器向空主体授予权限；在未加入域的计算机上进行测试时发现了镜像陷阱，因此我们的构建工具现在通过 SID 识别帐户并完全停止解析名称。

## 修复两个 v0.10.2 回归

两者均在数小时内报告 - 感谢您的快速信号。

- **`update --ui` 停止工作**（#1544，@ehendrix23）。 v0.10.2 删除了过时的 ui/标准选择器*和*驱动它的标志，因此存在于脚本和肌肉记忆中的命令成为一个硬错误。两个标志都再次被接受——它们什么也不做，只说一次，而真正未知的标志仍然会失败。
- **生成的 Pi 扩展完全破坏了 Pi**（#1550，@musichen）。 Pi 通过调用其默认导出来加载扩展；我们的导出了一个命名函数，而无法加载的 Pi 扩展会导致每个 `pi` 命令都被删除，包括 `pi doctor`。该扩展现在默认导出其工厂。由 @musichen 和 @henri-edh 独立修复，他们对 Pi 加载器的更清晰的描述是我们源代码中的评论。

## 结构化输出不再丢失证据

`trace_path(include_evidence: true)` 承诺每跳 `strategy` 和 `confidence` 列，并仅以树格式交付它们。使用 `format: "json"` 时，这两个字段都悄然消失，这恰好击中了最有可能需要它们的调用者：以编程方式使用结构化输出的调用者（#1542，@asemraza）。 JSON 路径现在携带具有相同语义的两个字段，空值位于树格式打印 `-` 的位置。

## 子进程在繁忙的机器上幸存下来

追踪 CI flake 发现了一个真正的鲁棒性差距：当内核通过“重试”拒绝进程生成时（加载的机器上暂时已满的进程表），cbm 将其视为永久故障。 git 探针或 LSP 服务器会由于用户不可见的原因而拒绝启动。现在暂时重试短暂失败；真正的错误（缺少二进制文件、权限）仍然会立即失败，且语义不变。

## 安装和激活：无人能采取行动的拒绝

#1537 (@listepo) 的后续，结果是两个缺陷相互堆叠。

当其缓存目录的任何“祖先”可组写时，守护进程将拒绝运行 - 我们在 v0.10.2 的安装程序端删除了相同的规则，在该决定涵盖的兄弟检查中，但从未改变。可组写的 `~` 或 `~/.cache` 是普通的（WSL2 附带 0775，几个发行版骨架和具有共享主组的任何计算机也是如此），因此对于这些用户来说，守护进程永久无法使用，无需关闭任何内容，重新启动也无法解决任何问题。世界可写的祖先仍然被拒绝——任何本地用户都可以交换路径组件——并且私有目录本身仍然被迫为所有者专用，这就是承认祖先安全的原因。
在此之下，错误消息发明了自己的证据：拒绝路径没有设置错误代码，因此报告转而打印 `errno` 碰巧持有的任何内容，并交给记者 `ENOENT` 进行许可决定。他们去寻找一直在那里的丢失文件。该消息现在命名目录和拒绝它的规则。

同样在这个区域：激活防护将每次拒绝报告为“无法停止活动的 CBM 会话”，包括根本没有运行任何内容的故障。这些现在是单独的消息，第二条明确表示没有任何内容需要关闭，并且两种补救措施都假设 `codebase-memory-mcp` 二进制文件仍在 PATH 上 - 在打印 `uninstall` 之后的那一刻，该建议是不可用的。

## 也已修复

- **设置 `CBM_CACHE_DIR` 时，Codex 没有看到 CBM 工具**（#1562，@anton-matosov）。 Codex 仅将显式列出的变量传递到 MCP 子进程中，因此它生成的服务器会读取默认缓存，而守护进程则使用配置的缓存；他们不同意，并且连接在初始化期间关闭。生成的配置现在转发变量。
- **安装的技能文件无法在严格的 YAML 阅读器中加载**（#1554，@xezzon）。它的 `description` 包含未加引号的 `Triggers on: `，而未加引号的 YAML 标量中的冒号空格表示“嵌套映射” - 因此解析器拒绝整个文档，并且该技能永远不会加载。
- **`search_code` 回显负的 `limit` 作为结果计数**（#1511，由 @lukiod 修复），它将作为答案而不是被拒绝的参数读取给代理。
- ~~**OpenCode 安装进入了错误的文件** (@iandol)。~~ **更正：** 此处列出的是错误的。该修复在 v0.10.3 标签被删除几个小时后合并，因此在此版本中**不** - 它在 v0.10.4 中提供。如果您的 OpenCode 配置是 `.jsonc` 文件，升级到 v0.10.3 将不会有帮助，对于浪费的时间，我们深表歉意。
- **在提取之前验证发布档案**（#1510，@cyphercodes）：一个精确的成员集，其中符号链接的成员被彻底拒绝。

## 升级

- **二进制安装：** 从下面下载，或重新运行 `install.sh` / `install.ps1` — 重新运行安装程序*就是*更新。
- **npm / PyPI：** 像往常一样通过包管理器更新。
- 无索引、缓存或配置迁移。

**完整 changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.2...v0.10.3

<!-- cbm-security-verification:start -->
## 安全验证

VirusTotal 完成了 **17 个不同的提取字节对象**，覆盖 **56 个精确提取的存档成员**。
提取清单通过 SHA-256 来源将这些关联绑定到 **14 个可下载存档**。可下载的 .tar.gz/.zip 发行版容器未提交给 VirusTotal。

17 个扫描对象中的 16 个返回 **0 个恶意和 0 个可疑** 判决，具有 57-68 个决定性引擎结果（最低要求：50）。
**1 个对象带有单个 Microsoft 机器学习检测** (`!ml`)，该项目将其视为已知的误报并发布而不是隐藏。所有其他发动机都恢复干净。有关证据以及如何自行验证这些工件，请参阅[防病毒误报](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives)：`objects/scan-c05a4598b3bb23d82efbde5e6bc01989297156ed153dadbd281ba8886c96f2d6--codebase-memory-mcp`

持久的公共证据：[关联](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-associations.tsv)、[精确扫描集](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-scan-set.tsv)、[每个提取对象结果和报告链接](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-results.tsv)、[证据校验和](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-evidence-checksums.txt)。

存档 SHA-256 来源（来自提取清单）：
|可下载存档 | SHA-256 出处 |
|---|---|
| `codebase-memory-mcp-darwin-amd64.mcpb` | `b430ec7898c7c857f72672faf1347a3da0b2ec9eac34ffe7940d857a42d62616` |
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `1107fea28285823e1436e4f38a4e00a0b472d8a43c379da7dfd200c914a4b9dd` |
| `codebase-memory-mcp-darwin-arm64.mcpb` | `c0f524d28970682b940e2e08f702f7c46c0c4a6d593349ccd1e409e4e11425ed` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `0ebf02328207d4c3d862c837b5e973de5bac808df92b0941737721d467287f7f` |
| `codebase-memory-mcp-linux-amd64-portable.mcpb` | `704549677d608d61fd6164a5a65ab16d1f143732906be28d2bdfb062b56e9e3e` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `254937e3e252c5caa2c507366be8258acea239dc5d1c0dd715ee425259ef492c` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `74997fb0934e70a22f20c2e112fb4d883867dc1f01a7bcdc94cf86d13b5cbd31` |
| `codebase-memory-mcp-linux-arm64-portable.mcpb` | `aff4f741dfe34dbf68649593808abfa3312770b153607b97a0cd7a1a7227bc42` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `b4ee6aafcc2f3a12e537709e16e42dc49e98ad5c1d620eba1fbad5d83825dac5` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `967b9eababfdbd2ef1987c571d55bc7c028cd1db7f99279830634c58db311e32` |
| `codebase-memory-mcp-windows-amd64.mcpb` | `a88a2670fdc7b4aeb31b16dc7c37646aad85b93d44d656acb1fcae02a222a6be` |
| `codebase-memory-mcp-windows-amd64.zip` | `fa7e53dd5e6b8daf633db7bf37a923061d836a70dd380d6627736d95b998875b` |
| `codebase-memory-mcp-windows-arm64.mcpb` | `391262ebf664c0bba4ba1be343fa4fde92d1f30918811a0656dcd711df8d34e8` |
| `codebase-memory-mcp-windows-arm64.zip` | `dd1dfc9039ee431fbdeab1dfb482ec19ea7a5f0fd821b1f04ae1599c9e772342` |
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.3` · 📅 发布：2026-08-13 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
