---
title: "codebase-memory-mcp v0.10.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.0"
version: "v0.10.0"
published: "2026-08-10"
type: "minor"
lang: "zh"
---

# codebase-memory-mcp v0.10.0

# 代码库内存-mcp v0.10.0

> **⚠️ 请改用 [v0.10.1](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.1)。** v0.10.0 提供了关键的 MCP-client 回归 ([#1522](https://github.com/DeusData/codebase-memory-mcp/issues/1522))：核心发现工具的默认输出格式，在符合规范的 MCP client（例如 Claude Code）中呈现为空 `{}`。下面的所有内容都准确地描述了此版本 - 但修复版本取代了它并且是要安装的版本。

自 v0.9.0 以来的一个里程碑版本 — cbm 的后端已围绕共享协调守护进程进行了重新架构，工具输出被重建为紧凑的树格式（大型结果上的输出标记减少了约 99%），长期存在的 Windows 内存棘轮得到修复和验证，新的 **覆盖系统使图形的盲点可见** — 引入了 cbm 的 **第 15 个工具 `check_index_coverage`**，以及正确渲染的漏码骨架在图形 UI 中的代码 Galaxy 旁边。自发布候选版本以来，该图获得了新的**有证据支持的 `CALL_REFERENCE` 边缘类**，Linux 二进制文件的分配器覆盖被发现默默地处于非活动状态并真正打开，并且针对 RC 报告的每个守护程序/安装程序/Windows 问题均已修复。添加三个新的社区贡献的语言界面、Swift 跨包解析、Nix 提取检修以及跨查询引擎、存储和提取器的广泛社区驱动的正确性批处理。

**781 个提交 · 183 个合并 PR · 42 个贡献者 · 40 多个社区报告的问题已修复** (v0.9.0…v0.10.0)

## 从候选版本到 v0.10.0

这是于 2026 年 7 月 30 日发布的 **v0.9.1-rc.1** 的最终版本。它毕业时为 **v0.10.0**，而不是 v0.9.1：新的后端执行模型、新工具、新输出格式和新边缘类不是补丁版本，版本号应该这么说。不会有 v0.9.1 决赛——就是这样。

对于在日常工作流程中运行 RC 的每个人：**谢谢 — 它完全按照希望工作。** 自 RC 带来 76 个 PR 中的 335 次提交以来的 1.5 周，其中最有价值的提交是从您的现场报告开始的。守护进程冲突握手导致 client 挂在“待处理”状态（#1383），安装程序删除了现有的 Claude Code 钩子而不是添加自己的钩子（#1387），钩子增强默默地不发出任何信号（#1388），Windows 安装/卸载拒绝停止活动会话（#1416），从分离的守护进程窃取控制台窗口焦点（#1427），查询响应大小可能会在没有诊断的情况下终止 MCP 服务器 (#1375)、多密钥 `ORDER BY` 丢弃 `LIMIT` (#1334) — 这些问题均由 RC 用户根据 rc.1 报告，并在此版本中得到修复。

**覆盖率要求成立。**覆盖率系统使代码和图表之间的差距*可衡量* - 帮助我们缩小它。要求您的代理在您的存储库中运行 **`check_index_coverage`**（或 click UI 中错过的框架的报告边缘情况标注）并将生成的摘要粘贴到 GitHub 问题或讨论中：错过课程、受影响的语言和文件类型、计数。这是汇总数字，而不是源代码 - 除非您选择粘贴，否则所有内容都会保留在您的计算机上。每个现实世界的覆盖摘要都向我们指出了我们可以修复的具体解析器边缘情况、解析器差距或语言怪癖——您的存储库是我们无法克隆的测试语料库。

## ⚠️ 行为改变
- **新边缘类：`CALL_REFERENCE` - 和 `CALLS` 现在完全意味着一件事。** 该图现在区分*调用*可调用对象和*将其作为值传递* (`app.register(pluginFn, opts)`)。 `CALLS` 专门保留用于调用；仅当确定性解析器/LSP/注册表证据证明确切的可调用值（出现精确范围、词法绑定状态、解析的符号标识）时，才会发出 `CALL_REFERENCE` ；不明确、阴影或动态反弹的事件仍然是 `USAGE`。假设每个可调用关系都是 `CALLS` 边的查询应该考虑新标签 - 并获得以前没有的精度：`CALL_REFERENCE` 边是证据，而不是猜测。

- **每个平台一个存档 - 始终包含 UI。** `ui-*` /非 UI 变体拆分已经消失：每个平台现在都附带嵌入图形 UI 的单个存档，并且 npm/PyPI 包默认包含它（来自 RC 的 `CBM_VARIANT=ui` 选择加入已过时）。更少的工件，没有错误变体的下载，只需验证一份作品。

## 亮点

- **协调守护进程 - 后端里程碑。** 到目前为止，每个 Cbm 会话都是一座孤岛：每个 MCP 服务器、CLI 调用和钩子自行打开存储，并且对其邻居一无所知。在此版本中，**所有这些都通过每个用户守护进程进行协调** — 构建/版本冲突握手、索引准入控制和共享图形 UI。新款`daemon start|stop|status` CLI；温暖的守护进程消除了每个命令的启动成本——在 850 万节点图上测得 **40–58% 的 CLI 命令速度**（每次调用都保存了 ~2.6）。经过 RC 现场报告的强化：现在，每个拒绝路径都用一个原因来回答 client，而不是让其等待。除了直接的胜利之外，这是下一个版本构建的基础：**多代理工作流程的集中控制**和**仅限本地的报告/可观察性基础设施** - 一切都保留在您的计算机上；没有任何东西被发送到任何地方。
- **有证据支持的调用图。** 新的 `CALL_REFERENCE` 边缘类（请参阅行为更改）弥补了长期存在的精度差距：高阶模式（按值、回调、处理程序表注册的插件）现在是由确定性证据支持的一流图形关系，而 `CALLS` 不再吸收猜测。可选的 **`include_evidence`** 输出显示“为什么”存在边缘：其背后的分辨率来源。
- **树格式工具输出** — TOON 紧凑、前缀分组的行，具有一次性分页、真正的 `detect_changes` 影响报告和图形循环检测。在大型查询结果上，与 v0.9.0 相比，测量输出令牌减少了 **~99% — 并且 MCP 响应不再在 `structuredContent` 中重复其有效负载，大约使可用响应预算增加了一倍。
- **Windows 内存棘轮修复 (#581) — 并且 Linux 覆盖打开。** 分配器覆盖在 MinGW 下默默地编译出来，因此 CRT 保持释放的页面已提交，并且长寿命的守护进程棘轮内存数月。 mimalloc 现在真正拥有 Windows 分配、线程退出时释放的线程堆，以及大声的所有权审核使任何未来的回归在启动时宣布自己。已对发布工件进行验证：在 v0.9.0-era 构建上测量 **53× 提交堆增长的 10 分钟纯查询浸泡现在测量 1.06×**。同样的审计随后在 Linux 上发现了镜像：发布的 Linux 二进制文件从未真正通过 mimalloc 路由普通的 malloc——从这个版本开始，它们确实这样做了。
- **一次安装，43 个编码代理** — 安装程序自动（或有条件地，如果存在 client 的记录标记）配置 **43 个代理和 client 表面** — Claude Code、Codex CLI、Gemini CLI、Cursor、Zed、VS Code、Windsurf、Cline、Aider、Goose、 Amp、Copilot CLI、Sourcegraph Cody 等 30 种工具 — 带有 pi 和 OpenCode 扩展，现在直接从工具注册表生成。实验**工具配置文件** (`--tool-profile=analysis|scout`) 暴露了轻型侦察代理的受限检查表面。而且它不再触及不属于它自己的东西：即使脚本重写被拒绝，现有的钩子也会被保留。
- **诚实的覆盖范围 - 错过的图表** - *没有*进入图表的内容现在是一流的，以 **`check_index_coverage` - 第 15 个 Cbm 工具**为标题：每个文件的解析覆盖信号，故意忽略的文件报告为按设计类，覆盖范围折叠到 `index_status` 中，并带有 `get_code_snippet` 的注释，并且可查询的错过图表保留在商店中。 **在 UI 中**，丢失的代码呈现为代码 Galaxy 旁边的 **骨架 - click-to-focus，带有报告边缘情况标注。
- **新语言表面** — Perl LSP 层语义解析、InterSystems IRIS ObjectScript 支持和 Mojo 连接 — 所有三个社区贡献 — 加上通过 `Package.swift` 清单解决的 **Swift 跨包导入** 和两部分 **Nix 提取大修**（函数根文件不再删除其定义；使用作用域限定名称建模的 attrpaths）。
- **查询引擎稳健性** — WHERE 中的 `coalesce()` 和多参数标量函数、使用广告深度钳位正确的 var-length 路径语义、DISTINCT-before-LIMIT、完整的多键 `ORDER BY` 列表与 `LIMIT` 完整、复合/转义属性返回、失控查询的挂钟执行截止日期以及用于非分页的 `tools/list` 分页clients。
- **存储和工件完整性** - 来自一名社区成员的四份报告系列暴露了撕裂的 WAL 模式导出、吞没的 `SQLITE_CORRUPT`、新鲜数据库上陈旧的 WAL 重播以及异步边缘上的无效 JSON；所有四个都已固定。重新索引发布现在是**端到端原子** — 在失败时进行分阶段、验证和隔离，而不是用损坏的数据库替换良好的数据库。
- **CI，完全打包** - 本地 CI、PR CI、演练和发布都执行*相同的规范腿脚本，由场地平价合约强制执行，将任何漂移转化为红色构建。并行每套件测试执行，具有零丢失门、发布门控浸泡腿、每次运行隔离、工件证明以及对真实存档工件的 VirusTotal 扫描作为标准预发布步骤。

## 发生了什么变化

### 协调守护进程和并发
这是自项目开始以来最大的后端变化：cbm 的执行模型从独立的每会话流程转变为协调的每用户后端。并发会话通过守护进程（`daemon start|stop|status`，永久或会话管理）与经过身份验证的 IPC、构建指纹/版本/缓存根冲突检测、并行索引的物理作业准入控制以及守护进程提供的图形 UI 进行协调。因为每用户守护进程是一个安全边界，所以它的 IPC 得到了相应的强化——在 Windows 上，管道 clients 通过进程身份而不是模拟进行验证，私有命名空间对象使用令牌用户的 SID 进行所有者标记，并且 DACL 受到严格验证；在 POSIX 上，套接字身份根据 inode 固定记录进行检查。一切都严格保留在本地。

RC 现场报告随后加固了接缝：守护进程拒绝其二进制图像的 client 现在得到答案，而不是无限期的“待处理”（#1383）；过大的 MCP 回复会产生结构化错误，而不是进程死亡 (#1375)；挂钩表面守护进程构建与其调用者的冲突，而不是发出任何内容（#1388）；接受不匹配构建的准入路径现在在诊断中命名其队列。在 macOS 上，子进程通过 `posix_spawn` 而不是 fork+exec 生成。

**为工作树本机多代理工作流程做准备。** 该守护进程也是多代理设置如何实际运行的基础：每个 git 工作树一个代理。现在每个工作树都必须被索引，就好像它是一个单独的存储库一样。随着集中式守护进程层的到位，即将发布的版本将完全重新设计：工作树成为**主存储库图的子级**，共享未更改的所有内容并仅对不同的内容进行索引 - 使每个工作树代理模式在时间和磁盘上大大便宜。

### 图语义和重新索引
`CALL_REFERENCE` 工作（参见行为更改）贯穿整个堆栈：提取、LSP 解析、顺序和并行发布、持久性、MCP/UI 计数和文档，具有出现精确匹配，因此 LSP 结果永远不会促进不同的同名用法，以及针对词汇阴影和歧义的失败关闭处理。除此之外，热重新索引转移到了**增量合并管道** - 未更改的数据被向前复制，并且只有更改的切片被修补和原子交换，取代了以前的重建和修复路径。大规模的热重新索引性能仍在进行中（请参阅已知问题），但此版本的结构性修改是其余胜利的基础。

### 刀具输出和 MCP 表面
TOON 跨查询表面压缩输出（小约 10 倍），然后是顶部的树格式（前缀分组行、精确一次分页游标、`detect_changes` 中的真实更改影响、SCC 循环检测），与 v0.9.0 相比，在大型结果上，组合输出令牌减少约 99%。 MCP 响应停止在 `structuredContent` 中复制其整个有效负载 (#1375)。可选的 `include_evidence` 可以暴露边缘分辨率的来源。 `detect_changes` 将种子检测范围扩大到改变的品系范围。 ADR 工具获得了社区正确性通过：重新索引期间读取保持非阻塞，误导性部分写入被拒绝，并且覆盖范围标签被保留。 `index_repository` 从已知项目名称解析 `repo_path`；无效的项目名称无法再向守护进程发送乱七八糟的 `.corrupt.<hex>` 文件 (#1425)； CLI 激活拒绝归因于记录的安全检查 (#1416)；而`--help`的工具列表是从MCP注册表中获取的，因此它不会漂移。

### Windows 和内存安全
#581 链：通过 mimalloc（`--wrap` + static-CRT 覆盖）路由普通 Windows 分配，从 TLS 分离回调释放线程堆，删除在 arm64 上出现故障的 SQLite 页面缓存板，并在启动时大声审核每个大小类的分配器所有权，以便“调整是装饰”永远不会再悄无声息地发生。 **自 RC 以来的新功能：**同样的审计理念发现，所发布的 **Linux** 二进制文件从未真正通过 mimalloc 路由 malloc — 覆盖现在真正处于活动状态（#1360）；内存诊断报告每个平台上的 OS-truth RSS； **非 ASCII 缓存路径**下的图形数据库在 Windows 上可靠地打开（每个维护路径 SQLite 打开现在都通过与主打开相同的宽路径规范化进行路由 - 之前 *第二个 * 索引到例如西里尔命名的缓存失败）； stdio 在 Windows 上的 MCP 下以二进制模式运行；生成的子进程不再闪烁控制台窗口（#1427，加上针对一般情况的社区修复）；并且代码库可以在 MinGW GCC 下干净地编译。

### Windows 现在提供单个二进制文件 - 并从 install.ps1 运行更新

Windows 之前提供了两个可执行文件：一个小型永久启动器及其背后的产品二进制文件。它现在提供**一个二进制文件**，就像 Linux 和 macOS 一样。

启动器的存在是为了让产品能够就地更新自身：在 Windows 上，正在运行的可执行文件无法替换其自己的映像，因此必须使用第二个常驻二进制文件来执行交换。这个小助手可靠地触发了防病毒启发式方法，并且如果不发送被标记的内容，我们就无法保留它 - 因此更新步骤从正在运行的进程移出并进入 `install.ps1`，它在 codebase-memory-mcp 未运行时运行。

**为您带来的变化：** 在 Windows 上，`codebase-memory-mcp update` 不再就地更新。它会打印要运行的确切命令：

```
powershell -ExecutionPolicy Bypass -File "<install-dir>\install.ps1"
```

`install.ps1` 是幂等的，因此重新运行它*是*更新：它停止守护进程，退出正在运行的二进制文件，安装新的二进制文件，然后进行清理。通过 **npm 或 pip 安装不受影响** — 像以前一样使用包管理器进行更新。

### 语言和提取准确性
Perl LSP 层语义解析； InterSystems ObjectScript 语言支持；魔力接线。 **自 RC 以来的新功能：** Swift 跨包 IMPORTS 通过 `Package.swift` 清单解决；根表达式为函数的 Nix 文件不再删除每个定义，并且 Nix attrpaths 使用叶名称和作用域 QN 进行建模，并将模块级绑定创建为变量；由注释分隔的装饰器保持附加状态；一个文件中的同名 GoogleTest 宏获得唯一的名称，而不是折叠成单个节点并删除调用边缘 (#1266)； JS/TS 模板文字 URL 扁平化为 `{}` 占位符，以便路由集合有效； Haskell 数组处理是别名安全的。从 RC 批处理中进行：本机 `fetch()` 作为 HTTP_CALLS、CommonJS `require()` 影子修复、别名导入解析、C/C++ `#include` 到标头边缘和 `#ifdef` 分割恢复、PHP 特征递归 OOM 修复、Laravel 和 JAX-RS 路由组合、env-access CONFIGURES 防护、文件节点 QN 冲突修复、UTF-8 安全文档字符串截断和有界 GLR 堆栈合并递归。

### 查询引擎（Cypher）
`coalesce()` 和 WHERE 中的多参数标量函数；可变长度路径语义通过广告深度限制固定；在 RETURN 限制之前应用 DISTINCT；复合和转义属性的整体值返回；挂钟执行期限； `tools/list` 默认分页。 **自 RC 以来的新功能：** 完整的多密钥 `ORDER BY` 列表被解析并应用，`LIMIT` 保持完整（#1334）；行预算填满后，OPTIONAL MATCH 无法再制造“不匹配”行；聚合列按实际聚合函数分类。

### 存储、工件和生命周期
原子缓存在 SQLite writer 中发布；快照导出保持一致，损坏的导入被拒绝；在安装新的数据库之前删除目标 WAL/SHM sidecar； `SQLITE_CORRUPT`从行扫描中浮现出来； WAL 以 `journal_size_limit` 为界；观察者为每个不同状态重新索引一次脏存储库；相对 `repo_path` 规范化不再损坏和自动删除项目数据库。 **自 RC 以来的新功能：** 重新索引发布是原子端到端的 — 在私有路径下暂存、验证并在失败时隔离；在工件交换之前进行 WAL 密封；和标签允许列表通过规范的类似类型集。

### 代理、clients 和安装程序
代理集成覆盖范围**43 个自动/条件 client 表面**，每个表面仅在其记录的平台、标记或现有配置路径存在时才会更改。 **自 RC 以来的新增内容 - 大部分直接来自 RC 现场报告：** 当脚本重写被拒绝时，安装程​​序 **永远不会删除现有的钩子**，并且 `--dry-run` 准确地预测了该结果 (#1387)；生成的 Codex 代理角色 TOML 声明其传输； pi 和 OpenCode 扩展是从工具注册表生成的，因此新工具会自动出现在其中； **索引根可以从 CLI 声明**，发现修剪缓存目录，并且在巨大输入上压缩是大小安全的； Windows 安装/卸载/医生不再在它们自己可以安全停止的会话上失败 (#1416)。来自 RC 批次：安全强化的 Windows 安装事务路径、带有最近标记建议的未知标记拒绝、诚实的 `--dry-run` 标签、不断增长的发现步行堆栈、FreeBSD 内存检测和 Z​​ZPH63ZZ 严格解析器。

### CI 和测试基础设施
每个场地——本地 CI、PR CI、预发布试运行和发布管道——都运行**相同的规范腿脚本**，并具有场地平价合约，将任何漂移变成红色构建；具有零损失门的并行每套件执行（〜2.5×更快的套件）；扩大 ThreadSanitizer 覆盖范围以及本机 ARM64 Windows UBSan；发布工件证明；释放门控浸泡腿。 **自 RC 以来的新功能：** ViZZPH158Z 对精确存档工件的全面扫描是每次试运行的标准最后一步（标记引擎已命名，而不仅仅是计数）；本地 CI 运行根据运行 ID 进行隔离；并且发布管道本身是公开调试的 - `skip_tests` 不再默默地跳过烟雾和浸泡，并且脚本执行位由合同固定。

## 已知问题

- **持续查询负载下仅 Windows 内存增长较小**（~4.5 KB/查询；macOS 和 Linux 均未显示）。这*不是*#581 棘轮 — 所有权审核通过，53 次故障模式消失 — 但它会通过后续调查进行跟踪。
- **大规模的热重新索引仍然比 v0.9.0-era 慢，但有所​​改善。** 此版本中提供的增量合并管道取代了重建和修复路径，并且已经在我们的 A/B 运行中大幅缩短了热重新索引时间；缩小与 v0.9.0-era 缓存命中数的剩余差距正在进行中。冷索引等于或快于所有基线。
- **多线程边缘计数抖动**：节点计数在运行中是字节稳定的；在分辨率较高的语言上，边缘总数可能会因运行而略有不同（最坏情况 TypeScript）。作为一项开放的决定论调查进行追踪。
- 在 macOS 上，启动行 `mem.allocator.not_owned` 可能会出现在日志中 - 在 macOS 上，这是设计的配置（分配器为绑定的 sqlite/tree-sitter 群体提供服务；普通的 malloc 保留在系统分配器中）并且是无害的。在 Windows *和现在的 Linux* 上，它是 #581 类的绊线：如果您在那里看到它，请归档。

## 防病毒误报 — 完整的故事和政策变化

**此版本对每个工件进行 0 次检测** — 每个二进制存档、安装脚本和通知文件，每个文件都由 60 多个引擎扫描。下面的验证表是根据这些扫描生成的，其中的每个 VirusTotal 链接都是持久的：您可以随时自己重新检查确切的字节。

我们欠你一个更长的故事，因为它改变了我们的发布门的工作方式 - 并且因为这是从 RC 到决赛需要数周而不是数天的主要原因之一。

**发生了什么。**在 RC 和最后阶段，一些构建间歇性地触发了 **一个** 机器学习启发式 - 微软的引擎报告 `Trojan:Script/Wacatac.B!ml` - 而其他所有引擎都报告干净。 `!ml` 后缀标记统计模型的分数，而不是签名匹配； `Script` 令牌是该命名方案中的通用存储桶，并且没有提及脚本内容。我们首先将其视为一种潜在的妥协：对一次提交构建的发布矩阵进行全面剖析，对标记的工件进行逆向工程，对打包有效负载配置文件进行熵分析。没有什么。判决同时在每个轴上分裂——架构之间的静态/动态链接轴“颠倒”，两个具有相同段结构的 macOS 二进制文件分裂干净/标记，一个构建的同级工件落在不同的变体桶中。
**决定性的证据：** 一个相同的文件（相同的 SHA-256）在大约一个小时内从 0/62 干净到被标记，我们这边没有任何改变。我们在另一个方向进行的实验证实了这一点：我们从二进制文件中删除了每个嵌入式 shell 脚本，并将 UI 包和集成模板移动到单独的经过验证的文件中 - **检测计数没有下降**，它只是在工件之间移动，因此我们恢复到更简单的单二进制组合。部分结论存在于扫描仪自身的状态中，而不是我们的字节中。任何代码更改都不能保证不被检测，因为分类器不仅仅判断代码。

**为什么政策改变。** RC 注释说我们的门永远是零检测，没有容忍 - 我们在编写它时是认真的。但是，针对相同字节的判决的零门意味着我们的发布时间是 Defender 的云模型状态的函数，而不是我们的代码：每个事件都花费*天*的时间来验证实时 Defender 端点的字节，向 Microsoft 提交误报报告，并等待分类器修订 - 其背后的开发实际上是硬性阻止的。这不是一种可持续的运输方式，假装绝对规则仍然存在将是不诚实的选择。因此，我们将其替换为我们实际上可以保留的策略，[通过 SECURITY.md 中的合同测试进行记录和固定](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives)：

- 仅当引擎是 Microsoft 并且标签以 `!ml` 结尾时（上述确切的、经过证实的误报类别），版本可能会附带**最多一次**检测。
- **其他一切仍然会阻塞，困难：**两个或更多引擎，任何基于签名的标签，任何其他供应商，任何“可疑”判决。
- 容忍的检测是**发布的，从不隐藏** - 它会显示在下面的验证表中，并带有 VirusTotal 链接和 `TOLERATED` 标记，因此您始终可以准确地看到发货的内容。

此版本不需要容差 - 它扫描完全干净 - 但您应该知道未来版本发布的规则。

**这是普遍现象，不是我们特有的。** 同一个 `!ml` 系列反复命中大型、未签名的本机开源二进制文件：[llama.cpp](https://github.com/ggml-org/llama.cpp/issues/15874)（在逆向工程中找不到任何内容）、[GitHub 自己的 `gh` CLI](https://github.com/cli/cli/issues/13306)、[Microsoft 自己的 Go工具链](https://github.com/microsoft/go/issues/1255)、[Anthropic 的克劳德代码](https://github.com/anthropics/claude-code/issues/36796)、[OpenAI 的 Codex](https://github.com/openai/codex/issues/2228)、[rust-lang](https://github.com/rust-lang/rust/issues/88297)、[yt-dlp](https://github.com/yt-dlp/yt-dlp/issues/7532)、[Godot](https://github.com/godotengine/godot/issues/110612)、 [PyInstaller](https://github.com/pyinstaller/pyinstaller/issues/5854)、[Tauri](https://github.com/tauri-apps/tauri/issues/2486)。 Go 团队的一位 Microsoft 工程师[简单地说](https://github.com/microsoft/go/issues/1255)：*“我们无法完全修复某些问题并解决所有 Go 误报。”*我们故意不重新调整二进制文件来躲避分类器 - 这就是恶意软件所做的，同一位工程师报告它*“增加审查而不是避免它。”*我们宁愿可扫描并解释误报，也不愿不可读并获得高分。
**无论如何我们修复了什么。** 调查发现了真正的缺陷，根据其自身优点进行了纠正，现在由发布门断言：我们曾经发布的每个 Linux 二进制文件都请求一个可执行堆栈（缺少 `.note.GNU-stack` 注释）；仅测试的 fork 探针被编译到生产版本中；守护进程针对 GitHub 生成 `curl`，释放 API 以检查更新 - 已删除，**cbm 现在不会自行发出网络请求**；未使用的提取和 SQLite 可加载扩展机制已编译出来；临时文件和符号链接扫描强化；并删除了可重现字节的构建时间戳。

**持久的解决方案是代码签名**，并且它正在进行中 - 身份验证和平台注册是官僚主义的，而不是技术性的，因此它按照自己的时间表进行。签名在 Windows 上会有帮助；请注意，AV 引擎不存在适用于 Linux ELF 二进制文件的代码签名方案，因此上述透明度是永久性的，而不是过渡性的。如果您发现任何与我们的评估相矛盾的内容，我们想知道：使用 **`av-analysis`** 标签提出问题 - 具体的发现会改变我们的立场。在签署土地之前，上面的门、发布的哈希值、构建出处证明以及您始终可以自己构建的源是该项目的 trust 锚点。

## 感谢我们的贡献者

此版本实质上是社区工作 - 功能、修复以及使修复成为可能的报告。合并贡献：
@halindrome（Perl LSP 层解析，#461/#459）·@isc-tdyar（ObjectScript 支持#467，提取器修复#1060）·@aaiyer（Mojo 接线#939，覆盖范围标签#1148）·@WarGloom（原子缓存发布#940，结构化紧凑结果#1043，别名安全 Haskell 数组#1232，相似性/worker 修复 #1368/#1369) · @SEPURI-SAI-KRISHNA (Cypher 和存储稳健性 #1173/#1175/#1176/#1177) · @sini (Nix 提取大修 #1304/#1305) · @gsdali (Swift 跨包 IMPORTS #1222) · @AmirF194 (Cypher 聚合分类) ＃1221，项目名称解析＃1258）·@harshitaajoshi（Cypher `coalesce()`＃991，UTF-8文档字符串边界＃1094，GoogleTest节点冲突＃1329）·@CharlesQueiroz（JAX-RS路由组合＃1007，模板文字URL扁平化＃1008）·@JhohanBustamante（Cypher复合属性＃1098，装饰器提取＃1097）·@SS-42（非阻塞ADR读取＃892）·@M-Marbouh（ADR写入验证＃1141）·@lishixiang0705（Detect_changes范围＃1372）·@agn-7（共享技能改进＃1373）·@dergachoff（Codex角色TOML传输＃1408）· @ahmadgamal15-art (Windows 二进制模式 stdio #1424) · @mlandolfi90 (隐藏子进程控制台 #1448) · @Oxygen56 (MinGW GCC 兼容性 #1226) · @lukiod (UI 接受语言排名 #1313) · @dpersek (TSan CI 目标 #890，工具/列表分页 #980) · @blankanswer （C++ 行重新映射 #949，CLI 文档/测试 #947/#948） · @pcristin (Cypher DISTINCT #906) · @muba00 (PHP 特性 OOM #920) · @appappas1129 (native fetch() HTTP_CALLS #927) · @yangsec888 (内存预算解析器 #954) · @Cosm1cAC（Windows UTF-8 临时文件#956）·@LA-10（别名导入解析#979）·@Dhruvy0804（配置保护#982）·@Sinjan-Debnath（C/C++ 包含解析#983）·@ShiroKSH（删除时清除 ADR#985）·@spde（增量文件命名#995）· @metehanulusoy (shadow-row 项目解析 #1046) · @tmonestudio (测试缓存隔离 #1067) · @PR9000 (FreeBSD 内存检测 #1093) · @alex-plosceac (.gitattributes ordering #916) · @CooperSheroy (文档 #605) · @gandie (文档 #1131)

那些精确、可重现的问题推动了本次发布的正确性工作的记者们——包括所有认真对待 RC 并愤怒地发表评论的人：

@dergachoff (#1387, #1388, #1425 - 三个 rc.1 报告，每个报告现已修复) · @artaommahe (#1360, #1375) · @OmerZeyveli (#1383) · @jayeshh-1 (#1416) · @0hirume (#1427) · @b1rdex (#1334) · @masesas (#1234) · @ysyecust (#1266) · @kriswill (商店完整性系列 #895–#898) · @KasaharaDefries (#765) · @tmstack-io (#951) · @ericsonjulio1 (#773) · @Phantom-Star829 (#794) · @aitoroses (#797) · @rockywang101 (#856) · @zihaozhaoo (#858) · @trinhan2106 (#871) · @rudi193-cmd (#874) · @bsahafian (#929) · @wymfly (#937) · @paolo-blocklabs (#952) · @ARZF (#958) · @Zeermil (#964) · @squall-cyber (#973) · @LA-10 (#988) · @meszkee (#996) · @KnifeOfLife (#1025) · @mostafnamazy (#1032) · @metehanulusoy (#1044) · @rehanazher (#1077) · @itayost (#1085) · @lg320531124 （#764）

......以及本周期中解决的所有其他问题的记者：
@ahundt · @asemraza · @Carnival-z · @castlemilk · @davidwwu · @ecosuper2025 · @edwardmhughes · @georgejieh · @holsee · @jimeng754-eng · @junk151516 · @kenvqin · @Leon-L-Li-RSP · @LiberiFatali · @materwelonDhruv · @mattepiu · @maxniu1 · @mentallabyrinth · @MrXuanZF · @niksh06 · @oscar6echo · @raksasaa · @regoravalaz · @saitrsh · @skbs-eng · @thunderstumpges-servicenow · @x1051445024 · @YugantM

……以及所有讨论、重新测试和推动的人。通过 Dependabot 更新依赖项。

**完整 changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.9.0...v0.10.0

<!-- cbm-security-verification:start -->
## 安全验证

VirusTotal 完成了 **14 个不同的提取字节对象**，覆盖 **32 个精确提取的存档成员**。
提取清单通过 SHA-256 来源将这些关联绑定到 **8 个可下载存档**。可下载的 .tar.gz/.zip 发行版容器未提交给 VirusTotal。

每个扫描对象都返回 **0 个恶意和 0 个可疑** 判决，并具有 54-69 个决定性引擎结果（最低要求：50）。
微软对所有 8 个可执行对象做出了明确的明确裁决。

持久的公共证据：[关联](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-associations.tsv)、[精确扫描集](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-scan-set.tsv)、[每个提取对象结果和报告链接](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-results.tsv)、[证据校验和](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-evidence-checksums.txt)。

存档 SHA-256 来源（来自提取清单）：

|可下载存档 | SHA-256 出处 |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `1efcb2096a21e76a090a2c2c1b103fc705f0445f7107df7ca9bead4eab130f5d` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `0e559ee1c1170a2925e72e6752d527ff66785ab17efb55efecb225c9a6babc21` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `3868eecb025c93b0018b2c48f00f2ba435557aaf2ac83edbfe613b7fca9a23b1` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `ef5ca5c8ded02f700d90b04444bc0cb67d0e9508831ab44c1a4ede02f1fa189c` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `a97089ec5ccf011e9fc936fa4648e728f10f8cde7ba3b3a81be8d9264d7df5b0` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `d8215279e3e46a65b83e382e26ae87392649aa56f4360dbfba7b9453eddb6b35` |
| `codebase-memory-mcp-windows-amd64.zip` | `f8a50d2baad94ea2c1ef8c045452a0ef35974e0b03e95e75fb42fea743ab86ef` |
| `codebase-memory-mcp-windows-arm64.zip` | `925abf7cb23d82130bd1c52eb7c4801f1aee4d824f28d03a69897b7d54dd0a54` |
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.0` · 📅 发布：2026-08-10 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
