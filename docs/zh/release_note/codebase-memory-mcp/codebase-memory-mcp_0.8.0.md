---
title: "codebase-memory-mcp 0.8.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.8.0"
version: "0.8.0"
published: "2026-06-12"
type: "minor"
lang: "zh"
---

# codebase-memory-mcp 0.8.0

> 📦 已存档的发布页面 — 该版本的二进制文件不再发布。获取[最新版本](https://github.com/DeusData/codebase-memory-mcp/releases/latest)。

**标题：三个新的类型感知 LSP 引擎。** Java、Kotlin 和 Rust 现在获得完整的混合 LSP 解析 - 通过类层次结构、注释/属性链接、签名感知重载匹配、泛型处理和跨文件类型推断进行类型感知调用解析 - 加入 C/C++、Python、TypeScript/JavaScript、Go、C# 和 PHP 来实现 **9混合 LSP** 下的语言。

## 架构智能

- **Leiden 社区检测**：`get_architecture` 现在显示多级 Leiden 社区（取代单级 Louvain）——内核大小的图上的真实模块边界，以秒而不是分钟计算。
- **可查询的计算瓶颈指标**：函数在图中携带复杂性、循环深度和扫描模式指标 - 您现在可以通过 Cypher 查询您的代码库以获取其自己的算法热点。 （我们正是用这个来查找并修复我们自己的几个问题，见下文。）
- Helm 支持：图表模板、`include` 调用联动和 `Chart.yaml` 依赖边； HCL 块标签折叠到节点名称中； C/C++ 预处理器宏现在是一流的宏节点（Linux 内核中有 2.3M）。

## 稳定性——迄今为止最大的强化推动

该版本群现在使用数据库级有效性门对 16 个大型 OSS 存储库进行端到端索引 - Linux 内核（480 万个节点）、elasticsearch、kubernetes、TypeScript 编译器、比特币、zig、symfony 等。那次搜寻，加上出色的社区报告，结束了一长串崩溃：

- **消除了 C++/模板化代码崩溃家族**：未初始化的模板参数数组、越界参数查找、无界解析递归、表达式求值爆炸 - 在 #424、#427/#428/#432、#312、#322/#323、#336、#344、#355、#360、#385 中报告。
- **分配器统一** (#424)：整个二进制文件 — 供应的 tree-sitter、SQLite、libgit2 — 现在在一个分配器下运行，结束了复杂 C++ 上的一类跨分配器堆损坏。
- **修复启动崩溃循环**（#235，#439）：项目列表错误路径中的堆栈缓冲区溢出可能会对*所有*项目的服务器进行SIGABRT；一个损坏的缓存数据库不再破坏每个会话。
- **数据库完整性，端到端**：超大索引键现在正确溢出到溢出页面，所有属性 JSON 在生产者处转义和验证，`url_path` 索引始终与其生成的列匹配，并且 WAL 文件在关闭/启动时设置检查点（#387）。 16 个存储库中的每个数据库都通过了 `PRAGMA integrity_check` 测试。
- **服务器生命周期**：stdio 服务器通过死亡看门狗与其父服务器一起退出（#406），支持 MCP `ping`（#354），保留 JSON-RPC 字符串 ID（#253），日志级别可通过 `CBM_LOG_LEVEL` 配置（#413）。
- **Windows**：用于非 ASCII 路径的宽字符 API (#386)、cmd.exe 兼容的 git 历史记录传递 (#324)、`PATHEXT` 探测 (#221)、打包行走挂起修复 — 完整的测试套件在 Windows 上是绿色的。
- 另外：幻像 gRPC 路由 (#294)、`moderate` 模式静默删除子树 (#411)，现在在索引结果中报告排除的目录、验证器安全项目名称 (#349)、UI 标志诊断 (#350)。

## 内核级别的性能
- **内存返工**：流式 SQLite 转储编写器、字符串驻留、分配器页面回收和提取背压 - 在笔记本电脑上在有限的内存预算内，大约 4 分钟即可完成完整的 Linux 内核索引； cgroup 感知 CPU/内存检测和 Z​​ZPH9ZZ 覆盖 (#364/#365) 使容器行为可预测。
- **二次热路径被消除**，通过将新的瓶颈指标指向我们自己的代码库发现了一些：C/C++ 跨 LSP 重载解析 (#410)、PHP/Python/Java/Kotlin 解析器中的注册表构建和查找路径以及架构边界计算。大型 PHP 和 Java monorepos 的完整索引速度快了几个数量级（symfony 35x、elasticsearch 9x 与本周期的早期构建相比）。
- 通过这些修复提高了图形质量 - 在每种受支持的语言中，分辨率覆盖范围和边缘保真度都更好。

## 查询层

- **Cypher**：WHERE 中的 `EXISTS {}` 谓词、`COUNT(DISTINCT)` (#239)、标签交替 `(n:A|B)` (#242)、WHERE 中的标签测试 (#241)、`WITH DISTINCT` (#238)、字符串/标量/实体内省函数、多参数标量 — 以及不受支持的语法现在会大声失败，而不是返回静默清空（#373）。
- `search_code`：无效的正则表达式错误而不是空结果（＃283），路径中的`&`，响应中的计时，无通配符的`file_pattern`作为子字符串（＃200），`.mjs` / `.cjs` / `.mts` / `.cts`索引（＃197），映射的刀片模板（＃258），R `box::use()`/`library()` 进口（#218/#219）。

## 更大的安全网

- 新的**每语法回归套件涵盖所有 159 个语法**，加上用于提取、边缘创建和 LSP 解析的探测套件 - 该套件现在在严格的无跳过策略下运行 **5,500 多个测试**（跳过是硬故障）。
- 崩溃再现作为带有退出信号断言的子进程隔离测试来执行； ASan/LSan 穿过套房； macOS Intel 构建腿现在被阻止，因此 darwin-amd64 始终会发布。

## 分发和集成

- 发布到**官方 MCP 注册表**和 **Glama 目录**；所有安装/更新路径上的可移植静态 Linux 二进制文件。
- 任何配置突变之前的 `install --plan` 机器可读收据 (#388)、Cursor IDE 检测 (#222)、鱼本机 PATH 处理 (#319)、`$CLAUDE_CONFIG_DIR` 受尊重 (#321)、Codex、Gemini CLI 和 Antigravity 的 SessionStart 挂钩 (#330)、MCP 工具和 UI 之间统一的 ADR 存储 (#256)。

---

## 🙏 代码贡献者

此版本包含来自 **16 个社区贡献者**的代码 - 包括直接合并的 PR 和我们提炼到 main 上的 PR（提炼的 PR 归功于其作者；感谢您对该工作流程的耐心）：

- **@mattall** — 防御类型验证 (PR #427) 和外线 C++ 方法归因 (PR #428)，以及 #432 中的精确后续诊断
- **@jjserenity** — Windows 宽字符路径支持 (#386) 和 WAL 检查点 (#387)，与 **HC Cheng** 共同创作
- **@cmeerw** — MCP ping 支持 (#354)、CLOCK_MONOTONIC 计时 (#342)
- **@romanornr** — 待定模板调用防护 (#322) 和表达式评估上限 (#323)
- **@yangsec888** (Sam Li) — cgroup 感知 CPU/内存检测 + `CBM_WORKERS` 覆盖 (PR #365)
- **@nvt-pankajsharma** — stdio 服务器的父死亡看门狗（PR #407）
- **@santanusinha** — 环境驱动的日志级别（PR #414）
- **@casualjim** — TS-LSP 元组返回竞技场修复（PR #374）和竞技场 NULL 防护
- **@Smiie-2** — C++ 模板默认参数段错误修复（PR #360）
- **@jjoos** — 通道提取中的可增长节点堆栈（PR #339）
- **@halindrome** (Shane McCarron) — `$CLAUDE_CONFIG_DIR` 支持（PR #321）
- **@hippus** (Alexey Z) — Windows cmd.exe 兼容的 git 历史记录 (PR #325)
- **@code-by-mahereddy** — 来自代码库审计的安全性和正确性修复（PR #352）
- **@cyprien-bussy** — 工作区导入解析 + SvelteKit 路径提取（PR #369）
- **@utilia-ai-wox** — 工作区/pkgmap 路线修复

## 🙏 问题记者

精确、可重复的报告推动了此版本的稳定性工作：**@ZapAndersson** (#424)、**@mattall** (#427/#428/#432)、**@Charles5277** (#439)、**@awconstable** (#235)、**@mattepiu** (#410)、**@nvt-pankajsharma** (#406)、 **@GonEbal** (#308/#408)、 **@Patch76** (#411)、 **@santanusinha** (#413)、 **@romanornr** (#322/#323)、 **@cmeerw** (#312/#342/#354)、 **@jjoos** (#305/#340)、 **@Codyzzz-zach** (#344)、**@lilisir0722-crypto** (#355)、**@EnziinSystem** (#385)、**@Al2Klimov** (#336)、**@hippus** (#324)、**@yangsec888** (#364)、**@mydreamdoctor** (#253)、**@zer09** (#373), **@sponger94** (#294), **@marcusyoung** (#218/#219), **@maksodf** (#237-#242), **@ehendrix23** (#252), **@gaia** (#258), **@speeed76** (#200), **@digijoebz** (#213), **@nishitpatel92** (#220)、**@Icaruk** (#221)、**@xberry1231** (#222)、**@memniko** (#227)、**@mandricmihai** (#228)、**@tomerikjansen-crypto** (#197)、**@cryptomaltese** (#283)、**@SavageMessiah** (#319)、**@caioribeiroclw-pixel** (#388)、**@dergachoff** (#330)、**@bschrib** (#256)、**@Nick-CHI** (#350)、**@edecarvalhoreis** (#349)、**@Azami1990** (#367)、**@Carnival-z** (#382)。

如果我们漏掉了任何人，请告诉我们，我们将修改注释——每一份报告和公关都会推动这个项目向前发展。

**完整 changelog**：https://github.com/DeusData/codebase-memory-mcp/compare/v0.7.0...v0.8.0 — 206 次提交

## 安全验证

所有发布的二进制文件均使用 70 多个防病毒引擎进行扫描 — **0 次检测**。

|二进制 | SHA-256 | VirusT总 |
|--------|---------|------------|
| `darwin-amd64` | `d3e46236a32a9c9f7315...` | [0/72 ✅](https://www.virustotal.com/gui/file/d3e46236a32a9c9f7315dbadc587ac554702d40793d00769e0cc13e26a0b09fd/detection) |
| `darwin-arm64` | `cf28ac4e0d2cca9a5a07...` | [0/72 ✅](https://www.virustotal.com/gui/file/cf28ac4e0d2cca9a5a079f1467a72e454d69606c71423cc2ecdc744e54e05758/detection) |
| `linux-amd64` | `ac4cae50ecad302a510f...` | [0/72 ✅](https://www.virustotal.com/gui/file/ac4cae50ecad302a510fa02cf3521469a3f523ed8673993a0c883fcc666d4981/detection) |
| `linux-arm64` | `abde85eea0c0a540afd0...` | [0/72 ✅](https://www.virustotal.com/gui/file/abde85eea0c0a540afd07515c87235aafac8284b12140305b28342adc9e225de/detection) |
| `windows-amd64` | `d100a3ea2fd9fc05616a...` | [0/72 ✅](https://www.virustotal.com/gui/file/d100a3ea2fd9fc05616afbfcc5eb565d1ac3e96a144b68a1df812aeb872da62b/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`0.8.0` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
