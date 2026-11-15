---
title: "codebase-memory-mcp v0.10.6"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.6"
version: "v0.10.6"
published: "2026-08-17"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.6

# 代码库-内存-mcp v0.10.6

一个版本中有两个故事：**0.10.x 索引速度减慢消失了**，以及**安装
v0.10.5 中幸存的故障已修复** - 包括您配置中的每个构造
发送给我们。如果从0.9.0开始cbm对你来说变慢了，或者`install`仍然拒绝你的爱马仕，
goose、OpenCode 或 Codex 配置，这是要采用的版本。

## 索引回归程序 (#1669)

自 0.10.0 以来，索引大型存储库已从较慢变为无法使用 — java 更糟 6 倍，
C# 2.6×、TypeScript 2×。原因不是一个错误而是一系列错误：每个文件的工作量都在扩展
与整个语料库。所有这些都是固定的，在同一主机上针对同一主机进行测量
语料库如报告：

- **Java 477 s → 86 s** (elasticsearch)：跨文件解析重建了每个的注册表
  语料库中的定义**每个文件**。现在它是一次性构建并共享的，每个文件都有一个
  覆盖本地符号。
- **C# 1211 秒 → 450 秒**（dotnet/运行时），现在比 0.9.0 多 **48% 的边**：三个
  消除了语料库比例扫描，加上一个已悄然存在的导入上下文错误
  抑制 C# 使用边缘 - 生成的一个 147 KB 的文件从 490 秒缩短到 6.8 秒。
- **TypeScript 37 s → ~24 s** (microsoft/TypeScript)：表达式类型求值器
  每个封闭替代项重新评估共享子表达式一次 — tsc 编译时为 2^n
  传播链条。每个节点的备忘录使其对每个节点进行一次评估；病理档案
  TS 一致性套件的时间从 20 秒下降到实际上为零。
- **Linux 内存爆炸已修复** (#1654)：v0.10.4 可能会 OOM 36 GB 机器索引树
  v0.9.0 13 分钟内处理完毕。 mimalloc 的 Linux arena-commit 默认值已恢复。
- **它保持固定**：一个新的复杂性防护套件在每个平台和行程上在 CI 中运行
  如果任何管道通道再次变为超线性，则在计数器*ratios*（从不挂起时间）上，并且
  `CBM_PROFILE=1` 现在可以打印任何生产二进制文件的每遍计时。

## 安装：根据您的真实配置构建

**Hermes**（#1631，由 @iandol 和 Galaxy-VN 报道，根本原因是由
@rg6304）：四块普通YAML使`install`永久失效——空流
集合（`plugins: []`、`tool_choice: {}`），第 0 列的块序列，双引号
字符串以 `\` 和词中撇号（角色中的 `LET'S GO`）继续
字符串打开了一个从未关闭的“引用”）。所有四个现已被接受；报价和
锚点仅是值开始处的指示器，与 `*` 修复中使用的规则相同
v0.10.4。两位记者的完整配置 — 每个 15 KB — 端到端安装
保留原始字节。

**我们自己编写的条目再次被识别。** 较旧的 cbm 版本编写了 `command:`
未引用；鹅块获得了所需的字段；然后您的条目被宣布为“外国”
永远。我们的密钥下的条目与任何先前版本所写的形状相匹配 - 或
它的命令是我们在移动路径上的二进制文件 - 已就地修复。真正的外国条目
仍然被拒绝字节未触及。

**goose** (#1673 + #1675)：扩展块现在带有 `name` field goose 的解析器
需要 — 在此之前，goose 默默地删除了该条目，并且“成功”安装
看不见的。同级中的 `envs: {}` 不再中止写入（社区修复
**@pcristin** — 模型贡献，按原样合并）。升级时修复旧块。
**OpenCode / 带注释的 MCP 条目** (#1630、#1582)：当 client 将密钥添加到我们的条目时
（“启用”：true 和朋友），修复现在仅替换命令值 - 注释和
client 密钥逐字保存。并且所有权比较是分隔符不敏感的：一个条目
存储 `C:\...\codebase-memory-mcp.exe` 与安装程序的二进制文件相同
`C:/.../codebase-memory-mcp.exe`。 @gotspatel 发布的配置是破解的文件
这是经过四个版本的坚持之后的一个。

**Windows 编写的带有 UTF-8 BOM 的配置** (#1656)：PowerShell 的 `Set-Content` 编写了一个
字节顺序标记，并且无论内容如何，对此类文件的每次 YAML 编辑都会失败 -
记者用一个26字节的文件证明了内容独立性，而这26字节就是他们的
23 字节控制加上 BOM。现在被视为序言：跳过
结构，写入时保留。

**Codex**（#1633，关闭来自#1580的@spam0115的残差）：钩子协调器接受
托管钩子对 v0.10.2 编写（包括 Windows CRLF+BOM 变体）并重写
就位；拒绝现在会说出他们的原因，而不是笼统地失败。

## Windows：DACL 不再与你对抗

运行时目录的安全描述符在**每个**进程启动时重新标记，
是否有什么问题。第1601章 统计十一次无操作“安全改变”USN
一天内对单个文件进行记录； #1620 丢失的原子发布到重写窗口。
现在，仅当目录尚未位于确切的所有者专用目录中时，才会触发重新标记
状态 — 以及被 v0.10.3 之前的 DACL 机制损坏的目录（空 DACL 日志
@patxisan 发现的文件夹，这解释了一个月内无法读取的 0 字节工作日志
六份报告）均已检测并修复到位。 （＃1416，＃1601，＃1620）

还附带：`CBM_RUNTIME_DIR` 在生成的 Codex 配置中转发（#1664 —
重新定位的守护进程对于 Codex 生成的服务器是不可见的），缺少最后的换行符是没有
不再报告为部分解析，并且 `update` 不再命名不属于的安装程序
那里（#1653）。

## 学分

@iandol · Galaxy-VN · @rg6304 · @gotspatel · @spam0115 · @pcristin · @Carnival-z ·
@tmonestudio · @patxisan · @roosteer — 配置、ACL 转储和最小复制品
在此版本的问题中完成了大部分诊断工作。谢谢。

<!-- cbm-security-verification:start -->
## 安全验证

下面发布的每个二进制文件在冒烟和浸泡测试之前都由 VirusTotal 扫描，并且每个产品都链接了确切的发货字节的判决（决定性引擎：60-68）。
每个运送的二进制文件都是干净的。

|产品 |已发送二进制文件 | VirusTotal 判决 |
|---|---|---|
| `linux-amd64` | `749bd2c37c2ad891392e0872b9e1fb0df7432f04c7ca0f49d11d00b24c5f2ec8` | [清洁](https://www.virustotal.com/gui/file/749bd2c37c2ad891392e0872b9e1fb0df7432f04c7ca0f49d11d00b24c5f2ec8/detection) |
| `linux-arm64` | `e41cba76e58005edd4d21e19cbe1faf2c8f684c56fe78141c9956a9c632c9d26` | [清洁](https://www.virustotal.com/gui/file/e41cba76e58005edd4d21e19cbe1faf2c8f684c56fe78141c9956a9c632c9d26/detection) |
| `linux-amd64-portable` | `8eea4ec828cd0cfa1c406cda5640a8dfa5381878b4d96b106cdc53aff3733508` | [清洁](https://www.virustotal.com/gui/file/8eea4ec828cd0cfa1c406cda5640a8dfa5381878b4d96b106cdc53aff3733508/detection) |
| `linux-arm64-portable` | `c783294c009186c1c91c79d3611ef991af4db7816dbad13a922538513af97cac` | [清洁](https://www.virustotal.com/gui/file/c783294c009186c1c91c79d3611ef991af4db7816dbad13a922538513af97cac/detection) |
| `darwin-amd64` | `34851da132369455b35530879c13e95360429251ab5e9604bc301beb25c9bcc5` | [清洁](https://www.virustotal.com/gui/file/34851da132369455b35530879c13e95360429251ab5e9604bc301beb25c9bcc5/detection) |
| `darwin-arm64` | `8fdbdb2ec81f9526b34e71dffd46589b0e06fd5d60773732fd256c684d0251f4` | [清洁](https://www.virustotal.com/gui/file/8fdbdb2ec81f9526b34e71dffd46589b0e06fd5d60773732fd256c684d0251f4/detection) |
| `windows-amd64` | `3099e91c29d8507c94bfb7ed431a1f89459ad9afdcea413cbab23c9ec3cfd972` | [清洁](https://www.virustotal.com/gui/file/3099e91c29d8507c94bfb7ed431a1f89459ad9afdcea413cbab23c9ec3cfd972/detection) |
| `windows-arm64` | `f5f0585308d7f6130386857e1747a338abe194cb9b082c37d81acf43b8f18e9d` | [清洁](https://www.virustotal.com/gui/file/f5f0585308d7f6130386857e1747a338abe194cb9b082c37d81acf43b8f18e9d/detection) |

选择是元组本地的并且默认为剥离的。打包后再次验证所选可执行文件SHA-256；存档容器没有多余地提交给 VirusTotal。它们的哈希值在 `checksums.txt` 中仍然可用。

持久证据：[候选来源](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/release-candidates.tsv)、[候选 VirusT 总结果](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/virustotal-candidate-results.tsv)、[选择决定](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/release-selection.tsv)。
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.6` · 📅 发布：2026-08-17 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
