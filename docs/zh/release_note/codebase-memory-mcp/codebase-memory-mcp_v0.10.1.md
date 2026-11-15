---
title: "codebase-memory-mcp v0.10.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.1"
version: "v0.10.1"
published: "2026-08-11"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.1

# 代码库内存-mcp v0.10.1

快速跟进修复版本。 **如果您通过 MCP client（Claude Code、Codex 或任何其他符合规范的 client）使用 cbm，请立即升级：** 在 v0.10.0 中，核心发现工具的默认输出格式在这些 client 中呈现为空 `{}`。图表很好，守护进程也很好，数据在回复中——但是您的 client 实际读取的回复部分是空的。 CLI 的使用未受影响，这正是它逃脱发布大门的原因。

非常感谢 **@Navier8**，他的 [#1522](https://github.com/DeusData/codebase-memory-mcp/issues/1522) 在 v0.10.0 发布后的几个小时内报告了这一点 - 具有我们希望每个错误报告都具有的再现质量：相同的二进制文件、相同的索引、逐个格式的调用表，在我们阅读代码之前将故障定位到 MCP 响应路径。该报告指出了两个错误；它触发的验证扫描发现了第三个。所有这三个都在这里修复，并且所有三个在 v0.10.0 中提供共享一种失败形状：**具有成功状态的空结果** - LLM client 的最糟糕的可能失败模式，它无法区分“空”和“未找到任何内容”，并且默默地得出错误的结论而不是看到错误。

## 哪些地方被破坏了，哪些地方发生了变化

**1.树格式工具回复在 MCP clients 中呈现为 `{}`（默认格式 - 主路径）。** v0.10.0 线大小优化停止将工具有效负载复制到 `structuredContent`，在其位置留下一个空对象 - 而每个工具仍然声明许可的 `outputSchema`。 MCP 规范告诉 clients：当工具声明输出模式时，`structuredContent` *就是*结果。因此，`search_graph`、`trace_path`、`query_graph`、`get_architecture`、`search_code` 和 `detect_changes` 都将 `{}` 返回到每个平台上的模式尊重的 clients。合约现在是端到端真实的：**没有工具声明 `outputSchema`**（工具输出合法地随 `format` 参数变化，因此没有静态模式是诚实的），JSON 对象有效负载携带其解析的 `structuredContent`，错误信封保持其机器可读的 `structuredContent.error`，文本形有效负载仅携带不 `structuredContent` 密钥 - 这也保留了v0.10.0 从未运送过两次有效载荷。

**2.七个或更多管道请求彻底杀死了 MCP 服务器。** 在验证此版本的工具表面时发现：一次性向服务器写入 7 个以上请求（这正是发出并行工具调用的代理所做的事情）溢出了 8 帧输入队列，溢出处理程序破坏了整个会话：退出代码 1、零字节输出、每个已计算的响应丢失。完整的队列现在是**背压**：读取器只是停止接受输入，直到工作线程赶上，并且每个请求都得到答案。使用 7、24 和 64 的突发进行验证。

**3. `config get` 用空字符串回答每个问题并退出 0。** 未设置的键没有打印任何内容（而 `config list` 很高兴地显示了它们的默认值），拼写错误的键也是如此 - 拼写错误与正确读取的设置无法区分。 `config get` 现在打印存储的值或密钥的实际运行时默认值，并且在 `get`、`set` 和 `reset` 上，未知密钥是一个错误（退出 1，列出已知密钥）。

## 为什么大门错过了它——现在是什么守护着它
诚实的部分：我们自己对 `structuredContent` 更改的测试**将损坏的行为固定为正确**，无论是在单元级别还是在交付的二进制烟雾套件中 - 提醒我们，断言错误合同的测试比没有测试更糟糕。发布管道是绿色的，因为管道同意该错误。该类现在从三个方向关闭：单元套件枚举整个工具表并为每个注册的工具绑定所有三个信封分支（缺少/解析的对象/错误），前端套件断言超容量的管道输入得到了无损失的答复，并且烟雾套件以遵循模式的 MCP client 的方式驱动**真正的交付的二进制文件** - 断言默认格式的答复永远不会呈现为 `{}`，没有工具宣传 `outputSchema`，24 深的管道突发会得到 24 个答案，而 `config get` 返回实际值。其中每一项都在修复之前针对 v0.10.0 进行了红色验证，并在修复恢复后再次验证为红色。

## 升级

- **二进制安装：** 从下面下载，或重新运行 `install.sh` / `install.ps1` — 重新运行安装程序*就是*更新。
- **npm / PyPI：** 像往常一样通过包管理器更新。
- 无索引、缓存或配置迁移； v0.10.0 图表完全兼容。

**完整 changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.0...v0.10.1

<!-- cbm-security-verification:start -->
## 安全验证

VirusTotal 完成了 **14 个不同的提取字节对象**，覆盖 **32 个精确提取的存档成员**。
提取清单通过 SHA-256 来源将这些关联绑定到 **8 个可下载存档**。可下载的 .tar.gz/.zip 发行版容器未提交给 VirusTotal。

14 个扫描对象中的 13 个返回 **0 个恶意和 0 个可疑** 判决，具有 58-67 个决定性引擎结果（最低要求：50）。
**1 个对象带有单个 Microsoft 机器学习检测** (`!ml`)，该项目将其视为已知的误报并发布而不是隐藏。所有其他发动机都恢复干净。有关证据以及如何自行验证这些工件，请参阅[防病毒误报](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives)：`objects/scan-3380cf3b868d749c63f564e7c6b81381a140942ec42253f785e158ab5144064f--codebase-memory-mcp`

持久的公共证据：[关联](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-associations.tsv)、[精确扫描集](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-scan-set.tsv)、[每个提取对象的结果和报告链接](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-results.tsv)、[证据校验和](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-evidence-checksums.txt)。

存档 SHA-256 来源（来自提取清单）：

|可下载存档 | SHA-256 出处 |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `4948d92c5b5a906faee0fd11ffcbb8606a72004eece92f4b5a28e1294b306ab8` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `9b6350b4e51cecd49126dc1b145ce81ac0df7aea35d87d7e8fe987683ad6b641` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `97c6580a13d772d040e936584f3c5234586ab03f31a77354af8a763851a39a7f` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `57cb5e5945a5371e43db3f2184d5b08ddd679d65e285cb2c976e665eac2fb22f` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `ad457b306fa5bf5a1b97d160eeb867260a7946018097222a622fb14e896c6c72` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `5cb8a073c0e31956698a60ed4bd41c5398096ce3270b1438e7919d0cb06f558b` |
| `codebase-memory-mcp-windows-amd64.zip` | `b9169d35f7d10485c449a2a8d6900a999ef5184fb93ab89b449dbe6e8f8c72a1` |
| `codebase-memory-mcp-windows-arm64.zip` | `9cedb3c4f01bf0846a712ff246ed1cd29d74ea7f7cda195d67dfaf7424f5a81b` |
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.1` · 📅 发布：2026-08-11 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
