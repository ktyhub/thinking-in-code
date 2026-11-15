---
title: "codebase-memory-mcp v0.10.4"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.4"
version: "v0.10.4"
published: "2026-08-14"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.4

# 代码库-内存-mcp v0.10.4

安装和诊断版本。如果 v0.10.3 拒绝为您安装或启动 — 特别是在 Windows 上，或者在通过包管理器安装了 cbm 的计算机上 — 这就是您要采取的方法。

接下来的大部分内容都来自提交精确报告的人，并且在某些情况下，他们在我们之前找到了错误的根源。

## Windows：提升的帐户根本无法安装或启动

作为管理员组帐户运行意味着 `install` 失败并显示 `activation transaction I/O failed: owner-not-current-user`，或者 MCP 服务器在启动期间退出，日志中除了关闭的传输外没有任何内容。

原因是我们自己的，而且是具体的：我们将文件的所有者与令牌的 *user* SID 进行比较，但 Windows 使用令牌的 *owner* SID 标记新创建的对象 - 对于管理员组的任何成员来说，该 SID 默认为 `BUILTIN\Administrators`。因此，安装程序创建了自己的临时文件，然后在几秒钟后拒绝它，因为它属于其他人。再多的重新启动或关闭进程也无济于事，因为没有任何东西在运行。

我们现在还接受 SID Windows 实际上标记在我们创建的内容上。这比“trust 任何管理员”要窄：真正不同的帐户拥有的文件仍然会被拒绝。由 **@spam0115** 和 **@gotspatel** 报告，这也很可能是长期运行的 #1416 的原因。

## 安装不再触及它不拥有的东西

对于那些被我们践踏的人来说，有两个变化：

**由mise、Homebrew、nix、asdf 或cargo 安装的二进制文件将被保留。** 之前，`install` 将第二个副本放入`~/.local/bin` 中——根据`PATH` 顺序隐藏托管副本——并附加到您的shell rc 文件中。现在它配置代理并保持二进制文件和您的 `PATH` 不变，`update` 诚实地拒绝并命名将起作用的命令（`mise upgrade`，`brew upgrade`），而 `PATH` 仅在我们实际放置二进制文件时进行修改。由 **@SC-CTS** 报道。

**您可以选择配置哪些 client。** `install` 为*每个*检测到的 client 编写了 MCP 配置、代理、技能和挂钩，并且恢复您不想要的那些是毫无意义的，因为下一次安装会重新创建它们。 `--clients=claude,codex` 现在对其进行限制，而 `--clients` 自己列出了每个支持的令牌。由 **@PsyTech-Rob** 报道。

## 错误告诉您实际发生了什么

这里连续三个修复，都来自同一个抱怨：我们的消息肯定是错误的。

- **激活拒绝不再指向它未显示的证据。** v0.10.3 正确地停止将非会话引起的故障归咎于“活动 CBM 会话”，但随后告诉您检查从未打印的错误。它现在命名目录和拒绝的规则。
- **无法启动的服务器会说明原因。** Client 路径启动失败仅写入 stderr，没有 MCP client 表面 - 因此，您会收到一个特定的、可命名的拒绝，因为“传输意外关闭”。这些失败现在以 JSON-RPC 错误的形式到达，并带有原因。
- **无需编辑 JSON 即可关闭 UI 侦听器。** `ui_enabled` 控制环回 HTTP 端口，禁用它的唯一方法是手动编辑 `config.json`；它对 `config list` 不可见，并被 `config set` 拒绝。它和 `ui_port` 现在都是一流的配置键。由 **@PsyTech-Rob** 报道，他花了两次调试会话才找到了开关。

## Codex、OpenCode 和配置文件修复
- **重复安装不再永久破坏 Codex** (**@astandrik**)。拥有的内联钩子分配被协调到规范块中，而不是被忽略并重新添加；外部钩子条目保持不变，真正不明确的 TOML 会被拒绝，而无需修改文件。
- ~~**OpenCode 在 OpenCode 实际读取的文件中安装土地** (@iandol)。~~ **更正 (2026-08-14)：** 这只是一半正确，我们不应该直接声明它。 *目标* 是固定的 - 我们现在写入 `opencode.json` / `opencode.jsonc` 中已经存在的那个，而不是总是创建 OpenCode 忽略的 `.json` 文件。但在 Linux 和 Windows 上报告，v0.10.4 和 `error: agent_config agent=OpenCode op=mcp_install` 上的**写入本身仍然失败**。追踪于#1630。这是第二个正在运行的版本，我们在该版本中描述了此修复已完成；抱歉，也感谢那些一直说不是的记者。
- **我们编写的孤立标记可以自行修复。** 较早的安装可能会留下没有开启器的结束 `# <<<` 标记，此后每次安装都会导致 client 彻底失败。现在去除会去除杂散线。 “写入”仍然会拒绝不平衡——只有一个标记就没有可防御的区域可以替换。

## 查询正确性和平台支持

- **`OPTIONAL MATCH` 停止默默地删除行** (**@SEPURI-SAI-KRISHNA**)。一旦跃点缓冲区饱和，不匹配的行（正是 `WHERE x IS NULL` 存在的内容）就会被丢弃。不是崩溃，不是内存错误：结果悄然减少，没有任何迹象表明答案不完整。
- **FreeBSD 解析其自己的可执行路径** (**@PR9000**)，安装和所有权检查依赖于该路径，以及针对主要三个平台之外的平台的构建修复。

## 安全

发布管道现在在执行任何外部工具之前固定并验证其下载的外部工具，而不是在构建时对上游项目发布的任何内容进行trusting。验证涵盖作业可能运行的每个平台，来自单个固定参考。

由 **Andrew Hundt** 报道 (#1245)。

## 可靠性

子进程在繁忙的机器上幸存下来。 v0.10.3 开始重试生成，内核拒绝“再试一次”，但只持续了大约 30 毫秒——足以短暂下降，而不适合连续数百毫秒保持进程匮乏的机器，而这正是它发生的时间。现在，重试会呈指数级下降，大约半秒后就会放弃。一台真正耗尽的机器仍然会快速失败而不是挂起，而真正的错误——丢失二进制文件、拒绝权限——会像以前一样立即失败。

并且发布管道在发布公开之前不再发布其注册表项 - 该错误导致 v0.10.3 自己的注册表步骤失败，并针对其自己的资产出现 404 错误。

## 升级

- **二进制安装：** 从下面下载，或重新运行 `install.sh` / `install.ps1`。
- **包管理器：**像往常一样通过它们进行更新 - cbm 现在将保留该二进制文件。
- **npm / PyPI：** 像往常一样。
- 无索引、缓存或配置迁移。

## 贡献者

此版本中的代码来自：

- **@astandrik** — Codex 钩子协调，具有失败关闭处理，留下不明确的配置字节相同而不是猜测
- **@PR9000** (Pedro Ramos) — 原生 FreeBSD 可执行路径解析，以及针对主要三个平台之外的平台的构建修复
- **@SEPURI-SAI-KRISHNA** — `OPTIONAL MATCH` 行丢失修复，包括将“范围内”与“正确”分开的分析
- **Andrew Hundt** — 上面的发布管道强化，合着

这些报告发现了我们自己无法发现的错误，其中有几个是我们在查看之前由记者造成的：

**@spam0115** 和 **@gotspatel**（Windows 提升帐户）· **@SC-CTS**（程序包管理器安装）· **@PsyTech-Rob**（一个安装周期中的四个单独发现）· **@listepo**（识别出我们一直在猜测的拒绝的诊断）· **@iandol**（OpenCode 配置目标）

谢谢你们——特别是那些不断报告多个版本安装问题的人。

**完整 changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.3...v0.10.4

<!-- cbm-security-verification:start -->
## 安全验证

在冒烟和浸泡测试之前，VirusTotal 完成了 **24 次可执行扫描**：对 **8 个发布产品** 中的每一个进行了剥离和未剥离的候选。每次扫描至少有 50 个决定性引擎（观察范围：59-68）。
**3 名候选人** 仅拥有记录的单个 Microsoft 机器学习 `!ml` 结果；没有其他决定性引擎报告恶意或可疑。

|产品 |被剥夺候选人资格未脱衣的候选人|已发货 |
|---|---|---|---|
| `linux-amd64` | [清洁](https://www.virustotal.com/gui/file/09db4f424c1fca97b5d06feb75ca6540629a5b67309e39a9a551e745b081023b/detection) | [清洁](https://www.virustotal.com/gui/file/7f6311b204bbd48ec220922b2939f99a0dccabd9a0296bfdf85fb03d087552ae/detection) | `stripped` (`09db4f424c1fca97b5d06feb75ca6540629a5b67309e39a9a551e745b081023b`) |
| `linux-arm64` | [微软`!ml`](https://www.virustotal.com/gui/file/a2a67782753de23b8badecfe71cfaed53717ae4f4492441a75a4d1401d66fd80/detection) | [清洁](https://www.virustotal.com/gui/file/cb3bee368ac5484e1298dc28597e94ead77f2e81ebf14b07e284cc746b6c9425/detection) | `debug-stripped` (`e0cd04812093d420a889397a603959c9a35ea3c78dea67c44db80e25a04d29b8`) |
| `linux-amd64-portable` | [清洁](https://www.virustotal.com/gui/file/df1b97b0f5266924072a0c020027a14fa1890fa7457183c2106ff7eab4b62122/detection) | [清洁](https://www.virustotal.com/gui/file/410fd1ecc0b3f621a6479a027f93c8c008b40f28dd0ec1a5297b39abfc406057/detection) | `stripped` (`df1b97b0f5266924072a0c020027a14fa1890fa7457183c2106ff7eab4b62122`) |
| `linux-arm64-portable` | [微软`!ml`](https://www.virustotal.com/gui/file/57bd8d04972adc281ee9eabf25f82c9a2044e636540a98ece5be48ff29b07d86/detection) | [清洁](https://www.virustotal.com/gui/file/877b021a402c2899d4159449ab2bb51e8d46ef96f67b2e359494eafae8f2d924/detection) | `debug-stripped` (`8427e22d1445b1e4a9a883034c12c18eb78c30e6ba183235ca79e153641a39e9`) |
| `darwin-amd64` | [清洁](https://www.virustotal.com/gui/file/9ae79b267fe60438ffbba046bb5ed9e36b2b0f0c04e32970ee6995d616a8ccc6/detection) | [清洁](https://www.virustotal.com/gui/file/ea9fd0355e764fe9ee7ebcc5b94e85456a58e0a5174cfa8874c4422c4eefa868/detection) | `stripped` (`9ae79b267fe60438ffbba046bb5ed9e36b2b0f0c04e32970ee6995d616a8ccc6`) |
| `darwin-arm64` | [清洁](https://www.virustotal.com/gui/file/75dadd4f243415c3058a8dd0c47137f4e2fd17861c5e79e70efad150ec02724f/detection) | [清洁](https://www.virustotal.com/gui/file/4db82a38c393fa38e3e45f97b3d0a21fed69b5d5443f5806c1c00943f3d59e35/detection) | `stripped` (`75dadd4f243415c3058a8dd0c47137f4e2fd17861c5e79e70efad150ec02724f`) |
| `windows-amd64` | [清洁](https://www.virustotal.com/gui/file/edfd73e60f40c687bc36b88140056838c0f95842f0839ec20cd0cb061d107f50/detection) | [清洁](https://www.virustotal.com/gui/file/739ecd26c5a4e6d2426b740ed63945b85c61354c57cb806ce9a52e940b64899b/detection) | `stripped` (`edfd73e60f40c687bc36b88140056838c0f95842f0839ec20cd0cb061d107f50`) |
| `windows-arm64` | [清洁](https://www.virustotal.com/gui/file/48f8e9eeff39d4016a10c93084947142dee3cbc356aa5fa8df57c886beb92e0c/detection) | [清洁](https://www.virustotal.com/gui/file/461b215de64bdb8448484dccfd10d56aaae649c84dd4969101bc9edf1acf7a31/detection) | `stripped` (`48f8e9eeff39d4016a10c93084947142dee3cbc356aa5fa8df57c886beb92e0c`) |

选择是元组本地的并且默认为剥离的。打包后再次验证所选可执行文件SHA-256；存档容器没有多余地提交给 VirusTotal。它们的哈希值在 `checksums.txt` 中仍然可用。

持久证据：[候选来源](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/release-candidates.tsv)、[候选 VirusT 总结果](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/virustotal-candidate-results.tsv)、[选择决定](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/release-selection.tsv)。
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.4` · 📅 发布：2026-08-14 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
