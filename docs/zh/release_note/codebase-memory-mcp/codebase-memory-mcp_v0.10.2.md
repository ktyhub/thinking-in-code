---
title: "codebase-memory-mcp v0.10.2"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-08-11"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.2

# 代码库内存-mcp v0.10.2

安装和升级版本。如果 v0.10.0 或 v0.10.1 拒绝安装、拒绝更新，或者您的 MCP client 显示服务器未连接任何内容 — 这就是修复方法，所有这些故障都来自过去 24 小时内提交的用户报告。

所有这些背后的模式是：原则上正确的门拒绝普通的、合法的设置，然后没有说明原因。下面的每一项都保留了重要的保护，删除了拒绝真实用户的部分，现在准确地指出了它拒绝的内容以及如何继续。

## `npx`（以及每个临时安装路径）再次工作

通过 `npx codebase-memory-mcp` 运行 cbm 产生的服务器没有任何响应：client 等待 30 秒并退出，并在标准输出上显示**零字节**，该代理显示为 `-32000: Connection closed`。每个 npx 调用都确定性地达到了这一点。

该守护进程验证连接的 client 的二进制映像，并将两种截然不同的结果视为一次失败：*“此映像的哈希值与我的不同”*（存在检查的篡改情况）和 *“根本无法检查此映像”* — 这是临时 npx 缓存路径始终产生的结果。现在承认第二个：在已经证明语义版本、构建指纹和协议/存储/功能 ABI 之前的握手，因此拒绝除此之外的交易是用真正的兼容性证明换取不可用的证明。真正的指纹**不匹配**仍然会被拒绝，很难，并且承认会被大声记录下来，因此较弱的检查永远不会被发现。

单独且无条件地：现在无法到达守护进程的 client **在 JSON-RPC** 中如此说，指出原因，而不是默默退出。感谢**@wassolles**，他带来了复制品、已读过的入场路径以及三个候选修复——我们发送的那个是他们的。

## 安装到普通的 Linux 家庭中又可以工作了

`install.sh` 失败并出现 `error: failed to stage install candidate: activation transaction I/O failed` — 这条消息让人们寻找磁盘错误和文件系统类型，以获取实际上的权限策略：安装程序不需要在安装目录 * 及其上方的每个父目录 * 上设置组写入位。 WSL2 在 0775 发布 `~` 和 `~/.local`，几个发行版骨架和任何使用共享主要组的站点也是如此。

世界可写的父级仍然被拒绝——任何本地用户都可以在安装过程中交换路径组件。现在，可组写的父级会受到警告并被接受，而安装目录本身严格保持所有者私有：这是二进制文件所在的位置，并且组写在那里将让另一个帐户在验证和启动之间替换可执行文件。拒绝现在指定目录、其模式以及拒绝的规则。

由 **@AmirF194** 在干净的容器中引起的根源，直至精确的谓词和行；由 **@shochdoerfer** 和 **@iandol** 独立确认。

## 从 0.9.x 更新再次有效

v0.10.0 将每个平台整合为一个存档，始终嵌入图形 UI，但 `update` 仍然询问您想要哪种变体 - 其中“ui”只能 404，而“标准”悄悄地“是”UI 构建。选择器及其标志消失了。
已在现场安装的二进制文件无法追溯修复，因此**版本现在还发布每个存档的以 `ui-*` 命名的副本**。每个要求旧名称的 0.9.x 更新程序都会获得相同的字节并正常完成，无需您执行任何操作。由 **@iandol** 报道。

## macOS 安装诊断

`install.sh` 不再打印 `No such xattr: com.apple.quarantine` — 一条无害的行（curl 下载的存档只是不带有隔离属性），它被误认为是不相关故障的原因，甚至成为错误报告的标题。当安装确实被正在运行的会话阻止时，错误现在指向 `codebase-memory-mcp daemon status` 以列出实际持有它的进程，而不是断言会话存在并让您找到它们。由 **@listepo** 报道。

## 升级

- **二进制安装：** 从下面下载，或重新运行 `install.sh` / `install.ps1` — 重新运行安装程序*就是*更新。
- **npm / PyPI：** 像往常一样通过包管理器更新。
- **来自 0.9.x：** 从此版本开始，旧更新程序再次运行；如果您已经失败，重新运行安装程序是最快的路径。
- 无索引、缓存或配置迁移。

**全changelog：** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.1...v0.10.2

<!-- cbm-security-verification:start -->
## 安全验证

VirusTotal 完成了 **14 个不同的提取字节对象**，覆盖 **32 个精确提取的存档成员**。
提取清单通过 SHA-256 来源将这些关联绑定到 **8 个可下载存档**。可下载的 .tar.gz/.zip 发行版容器未提交给 VirusTotal。

14 个扫描对象中的 13 个返回 **0 个恶意和 0 个可疑** 判决，具有 55-66 个决定性引擎结果（最低要求：50）。
**1 个对象带有单个 Microsoft 机器学习检测** (`!ml`)，该项目将其视为已知的误报并发布而不是隐藏。所有其他发动机都恢复干净。有关证据以及如何自行验证这些工件，请参阅[防病毒误报](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives)：`objects/scan-cac31c5358f3a1dcccc4d4ccbe2591f6fbae58949d23bb341429a6197e93a64b--codebase-memory-mcp`

持久的公共证据：[关联](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-associations.tsv)、[精确扫描集](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-scan-set.tsv)、[每个提取对象结果和报告链接](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-results.tsv)、[证据校验和](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-evidence-checksums.txt)。

存档 SHA-256 来源（来自提取清单）：

|可下载存档 | SHA-256 出处 |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `bb6cb47aea9e50e2193cdd917d5dbafa63b7d9c1cbe74bab5ec9bf4faa67e295` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `fa3ee085485fd9c16d1c1bd8a102df518862dabd2d6a09e4c6d8dfb3cd2a7eb4` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `4ead161715fe959ef8a0e38946d63b1728d31e5fb1762a85dbb4b8c4abfbe481` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `6e3bb7353be21407a78e67b5465e53e3afb1a4a213e7a561606900ac08dcfdd6` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `dcd6f31f4004c25e7945b355ae23a5a381acb2a620301bca93e1ddb159b672fd` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `b70148686cec55c31673fc0cebc0caf7f664f4ae29f7ba7f07b9617c2e5eaf85` |
| `codebase-memory-mcp-windows-amd64.zip` | `8f08e5c5b480e625adf9d4560765a860d493a690df6ded5b94127283ec5b660a` |
| `codebase-memory-mcp-windows-arm64.zip` | `b77b81975021b879ca53cdd94c60b48cc5de102194b52117938a2187a42f89c6` |
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.2` · 📅 发布：2026-08-11 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
