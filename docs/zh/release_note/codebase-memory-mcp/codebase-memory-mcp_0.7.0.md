---
title: "codebase-memory-mcp 0.7.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.7.0"
version: "0.7.0"
published: "2026-06-12"
type: "minor"
lang: "zh"
---

# codebase-memory-mcp 0.7.0

> 📦 已存档的发布页面 — 该版本的二进制文件不再发布。获取[最新版本](https://github.com/DeusData/codebase-memory-mcp/releases/latest)。

# v0.7.0 — 跨六种语言的混合 LSP、社区贡献、全平台验证

## 🧠 标题：**混合 LSP**

此版本是**调用图不再是猜测**的版本。

对于每种受支持的语言，我们现在提供**混合 Light-Semantic-Pass LSP** - 一个运行“内部”提取的每个文件、类型感知解析器。它跟踪作用域、推断表达式类型、跟踪导入、遍历继承，并在每个 `CALLS` 边缘上重写已解析的被调用者。简单的树木保护者通行证为您提供了结构图； LSP 通行证为您提供**正确的**被叫方。 **六种语言**现在受益 - 其中四种在此版本中首次获得了 LSP。

### 新 LSP（本周期引入）
|语言 | LSP 的作用 |标题|
|---|---|---|
| **Python** |范围绑定、表达式类型、方法分派、super()、装饰器、多重继承、TypedDict、匹配/大小写缩小、海象、理解元素类型、泛型和跨文件解析 | 100%在替补席上； 95% 真实实例属性解析 |
| **PHP** | Light Semantic Pass、通用模板、缩小、`self`/`static`/`$this`、特征替换、`@phpstan-type` 别名、`Closure::bind`、方差、278 个单元测试 | Laravel/Symfony/Doctrine/Guzzle/PSR 习语的奇偶级 |
| **TypeScript / JavaScript / JSX / TSX** |完整的 TS 语义表面 — 联合、交集、函数类型、JSX 元素解析、dts 模式、回调参数上下文类型 |完整的 TS 方言系列，一个解析器 |
| **C# / .NET** |类/结构/记录/接口/枚举、主构造函数、索引器、访问器、LINQ 链、泛型、开关缩小 | C# 12 现代功能第一天上线 |

### 锐化 LSP（存在于 v0.6.1；此处大幅升级）
|语言 |锐化了什么 |
|---|---|
| **C / C++ / CUDA** |第 2 层预构建的每种语言跨 LSP 注册表；模板返回类型替换；命名空间 + 类体步行者的复杂度为 O(n) |
| **去** |第 2 层 + **第 3 层元数据驱动的跨 LSP**（完全跳过 AST 重新行走）；每个文件的步行者 O(n)；池化线程本地解析器

### 第 1/2/3 层架构（这是使其易于处理的部分）

LSP 工作确实非常昂贵——每个解析工作人员都会天真地为每个文件重新构建一个打字上下文。相反，它分三层运行：

- **第 1 层 — `cbm_extract_file` 内的每个文件 LSP**：范围、表达式类型、本地解析。
- **第 2 层 - 预构建的每语言跨 LSP 注册表**：从每个项目定义构建 **一次** 的共享只读基础，然后通过后备指针从每个文件覆盖链接起来。解决工人分享；整个注册表中没有每个文件的重新遍历。 （现已连接所有六种语言。）
- **第 3 层 — 元数据驱动的跨 LSP** (Go)：使用每个文件传递发出的 `lsp_unresolved` 元数据，并完全跳过跨文件 AST 重新遍历。

### 在宽文件上使用 O(n)

每个文件 LSP 步行器 - `process_node`、`ast_sweep_shapes`、`apply_jsdoc_signatures`、`infer_implicit_returns`、`*_resolve_calls_in_node` 以及七个提取端 DFS 步行器 - 使用 `for (i=0; i<count; i++) ts_node_child(node, i)` 习惯用法。树保姆中每次调用的时间复杂度为 O(i)，因此在宽根上的时间复杂度为 O(n²)。像 TypeScript 的 `reallyLargeFile.ts`（583k 行，几乎所有评论）这样的装置造成了灾难性的后果。
新的 `cbm_lsp_collect_children` O(n) 游标助手 + 用于提取 DFS 的共享 `ts_nstack_push_children` 现在适用于所有六个 LSP 和提取器。 **来自试运行验证的数字：**

|回购 |文件 | LSP 覆盖 |之前 → 之后 |
|---|---|---|---|
|微软/TypeScript | 40,689 | 40,689 **7,432** | 5,100 秒 → **50 秒**（完整）；高级100 |
|点网/罗斯林 | 17,916 | 17,916 **91,089** |崩溃 → **46s** |
| kubernetes（去）| 20,650 | 20,650 **80,818** | — → **51 秒** |
| WordPress（PHP）| 3,622 | 3,622 **7,303** | — → **7 秒** |
| Postgres（C）| 4,967 | 4,967 **44** | — → **8 秒** |
|托瓦尔兹/Linux | 88,539 | 88,539 **4,052** | — → 188 秒（完整）/ 207 秒（带 LSP 交叉）|

`lsp_overrides` 是“其被叫方 LSP 重新归因于比文本解析器推断的更精确目标的调用”。对于类型丰富的语言（C#、Go、TS、PHP），这需要数以万计的更正。

### 一路上修复了两个真正的错误
- `process_node` 通过调用的参数计数对以 NULL 结尾的 `param_types[]` 进行索引；调用的参数多于函数声明的参数，读取超过终止符的参数 → 垃圾 `CBMType*` 的 deref → 崩溃。现在以 `param_count` 扫描为边界。
- `return_type_of` 通过 `cbm_type_tuple(NULL, …)` 构建元组返回类型。多重返回签名现在通过 `ctx->arena`。

### 始终开启
**`CBM_MODE_ADVANCED` 被删除。** LSP 分辨率在每种索引模式下运行（`full`、`moderate`、`fast`）——此时步行者的时间复杂度为 O(n)，质量（约 4% 的呼叫在 TS 上重新归因，约 14% 在 Go 上）值得每种模式中的延迟。 `"mode":"advanced"` 请求回退到 `full`（与旧的高级模式相同的行为，因此没有重大变化）。附带的好处是，由于 LSP 门控*关闭*的增量运行而默默引起的 104 个 `test_incremental.c` 故障现在已经消失了。

---

## 🌲 Pine 脚本和新平台

- **Pine Script** 语言支持通过 [`kvarenzn/tree-sitter-pine`](https://github.com/kvarenzn/tree-sitter-pine) 语法，由 **@vinay-veerappa** (#273) 集成。
- **NetBSD、FreeBSD、OpenBSD** — 完整的 POSIX BSD 三重奏 — 作者：**Christof Meerwald (@cmeerw)** (#313)。
- **Nix flake** 用于 **Joseph Voss (@josephvoss)** 的可重复构建 (#265)。
- **通过 PowerShell 进行 Windows 代码搜索** + **Windows 端存储完整性防护**，作者为 **@noctrex**（#310、#311）。

## 🔗 图和提取

- **用于装饰器应用程序的 `USAGE` 边缘** — Python/TS 框架正确点亮 — 作者：**Matthew Prock (@map588)** (#208)。
- **`INHERITS` 边缘完全由 **Loay Chlih (@loaychlih)** (#279) 为 Java `extends` + `implements`** 发出。
- **`FILE_CHANGES_WITH` 边和 `File` 节点上的时间属性**，作者：**Adam Schulte** (#257)。
- **C# 12 主构造函数 + 字段/属性提取**、**类型化存根工厂构造函数**和 **卫星星系/跨星系 UI** 由 **@sponger94** 编写。
- **构建工具路径别名解析**，用于跨文件导入和 **Peter Cox** 增量索引期间的**模式跳过文件保存**（#243、#251）。
- **ES 从嵌入式 `<script>` 块导入**，作者：**James (@jmcmacnz)** (#224)。
- **可增长的竞技场分配的遍历堆栈**（不再有固定大小的截断），作者：**Ahmed Mohammed** (#217)。

## ⚡ 性能（超越 LSP）

- **`search_graph` 正则表达式缓存 + LIKE 预过滤器 + 廉价计数**和 **两步 FTS5 子查询**，以消除多分钟的 `search_graph query=` 延迟，作者：**Austen Constable (@awconstable)**（#300 及后续版本）。
- **可逆的 v2.2.1 哈希表**（由 [Jackson Allan](ZZPH100​​ZZ)）作为新的 `CBMHashTable` 引擎提供 — 热路径解析加速； 14 个生产调用者（graph_buffer、注册表、管道传递、观察者、语义等）透明地获取新的 impl。
- **提取 O(n²) 消除了**跨越七个全树 DFS 遍历器（调用、通道、环境访问、导入、类型分配、变量）——与咬住 LSP 的 `ts_node_child(node, i)` 习惯用法相同。 **microsoft/TypeScript 全模式：5,097s → 50s (102×)。**
- 每次解析过程中的 **Tree-sitter 源缓冲区填充** - 消除了解析边界处潜在的良性过度读取。

## 🛡️ 安全

HackerOne 研究人员提交的材料由其原始作者提交：
- **`search_code` 多字正则表达式** 由 **Jan Deelstra** 补丁 (#304)。
- **`sqlite_writer` 索引单元页面防护**，作者：**Jos Joosten** (#303)。
- **GitHub Actions `_build.yml`** 中的 shell 注入由 **Dustin Obrecht (@dLo999)** (#249) 修复。

加：
- **`search_graph` 默认限制上限为 200**（为 500k — DoS 强化），作者：**@amitmynd** (#231)。
- **Cypher / 存储缓冲区溢出、OOM 和 NULL-stmt 崩溃强化** + **日志互斥体、观察器和索引器中的线程安全竞争消除**，作者：**Matthew Prock (@map588)** (#206、#207)。
- **`ws` 升至 8.21.0** (GHSA-58qx-3vcg-4xpx / CVE-2026-45736)。

## 💾 可靠性和存储

- **`CBM_SQLITE_MMAP_SIZE` env 控制的 mmap** + **被动检查点，以防止并发读取器下的文件收缩**，作者：**@edwardmhughes**（#315 + 后续）。
- **`cbm_store_get_architecture` 由 **Oliver Evans (@OliverEvans96)** 连接到 MCP 处理程序** (#281)。
- **`safe_free` / `safe_str_free` / `safe_buf_free` / `safe_grow` 内存助手**，已推出到重型站点，作者：**Matthew Prock (@map588)**。
- **`trace_path` 限定名称后备**和 **`list_projects` 不再隐藏 `tmp-` 前缀项目**，由 **Justin Wiley (NVIDIA)** 提供。
- **`.m` 扩展基于内容的消歧**，作者：**@KuaaMU** (#306)。
- **AUR 包文档**，作者：**Chris Werner Rau (@cwrau)** (#278)。

## ✅ CI 和构建

试运行管道在每个平台上都是完全绿色的：lint（cppcheck + clang-format-20）、安全静态、CodeQL 门、测试、构建、烟雾、快速浸泡 - Windows + macOS arm64/intel + linux amd64/arm64。

## 🔍 披露（发布准备透明度）

CI 绿化清理中的一些变化是判断性的，而不是纯粹的修复。对它们进行标记，以便审阅者可以进行事后猜测：

1. **LSP 基准（`pylsp_bench_resolution_ratio`、`cslsp_bench_resolution_ratio`）** — 在 `CBM_SKIP_PERF` 后面进行模拟运行；在发布的 CI (`skip_perf=false`) 中，它们使用 **ASan 感知的时间预算**（在消毒剂下×10）运行，并在断言之前释放结果，这样任何未来的预算失误都不会泄漏。 **调用分辨率比质量也由始终在 CI 中运行的非基准 `test_py_lsp` 和 `test_cs_lsp` 套件**保证。
2. **安全审核允许列表扩展**（每项均已审核；内联记录）：
   - URL 允许列表：`https://www.sqlite.org/c3ref/c_checkpoint_full.html` — `store.c` 注释中的文档引用，而不是网络调用。
   - `mcp.c` 文件读取阈值提高了 **12 → 13**。第 13 次读取是更新检查 HTTP 响应 + HTTP 请求正文 — 两者都有界；预先存在于搜索/ADR/Windows 支持提交中。
   - `fopen("w")` 允许列表扩展为包括 `src/foundation/diagnostics.c`（原子 `.tmp` + 重命名指标转储）。
3. **`CBM_MODE_ADVANCED` 已删除。** `"mode":"advanced"` 请求现在回退到 `full`（始终运行 LSP）——行为相同，因此现有调用者不受影响。

## ⬆️ 升级
通过 `"mode":"advanced"` 的现有呼叫者继续工作（静默回退到 `full`）。升级 `~/.local/bin/codebase-memory-mcp` 中的二进制文件后，**重新启动 Claude Code**，以便 MCP 服务器获取新的二进制文件。

---

## 🙏 谢谢

如果没有这些人，上述社区工作就不会发生。列出了他们运送的内容，而不是由谁合并的：

- **Matthew Prock (@map588)** — 碰撞强化、线程安全、装饰器使用边缘、`safe_*` 内存系列。
- **Peter Cox** — 路径别名解析和增量模式文件保存。
- **Austen Constable (@awconstable)** — 本周期最大的 `search_graph` 性能救援。
- **@edwardmhughes** — `mmap_size` env 旋钮和被动检查点修复。
- **@noctrex** — Windows PowerShell 搜索 + 存储路径完整性。
- **@vinay-veerappa** — Pine 脚本集成（基于 **kvarenzn 的** tree-sitter-pine 语法 — 谢谢你，kvarenzn）。
- **Adam Schulte** — 临时文件更改属性。
- **Christof Meerwald (@cmeerw)** — NetBSD/FreeBSD/OpenBSD 支持。
- **约瑟夫·沃斯 (@josephvoss)** — 尼克斯薄片。
- **Loay Chlih (@loaychlih)** — Java 继承边缘。
- **Oliver Evans (@OliverEvans96)** — `get_architecture` MCP 接线。
- **@KuaaMU** — `.m` 消歧义。
- **Chris Werner Rau (@cwrau)** — AUR 文档。
- **Ahmed Mohammed** — 可增长的提取烟囱。
- **James (@jmcmacnz)** — 嵌入式脚本 ES 导入提取。
- **@sponger94** — C# 12 主构造函数、类型存根工厂、卫星星系 UI。
- **Justin Wiley (NVIDIA)** — `trace_path` 和 `list_projects` MCP 抛光。
- **@amitmynd** — `search_graph` 默认限制强化。
- **Jan Deelstra** *(HackerOne)* — `search_code` 正则表达式安全修复。
- **Jos Joosten / @jjoos** *(HackerOne)* — `sqlite_writer` 安全修复。
- **Dustin Obrecht (@dLo999)** *(HackerOne)* — `_build.yml` shell 注入修复。
- **[Jackson Allan](https://github.com/JacksonAllan/Verstable)** — Verstable v2.2.1，作为我们的哈希表引擎出售。

对于每一位未参与提交的问题记者、转载者和审稿人：**谢谢。**

## 安全验证

所有发布的二进制文件均使用 70 多个防病毒引擎进行扫描 — **0 次检测**。

|二进制 | SHA-256 | VirusT总 |
|--------|---------|------------|
| `darwin-amd64` | `28c6d640e1a0ac7bfcab...` | [0/72 ✅](https://www.virustotal.com/gui/file/28c6d640e1a0ac7bfcab5094c2186eced5264a20dcdffcb4455a1b28c5df2171/detection) |
| `darwin-arm64` | `7062a7408906344bf4f8...` | [0/72 ✅](https://www.virustotal.com/gui/file/7062a7408906344bf4f835e9580048af85d12dd2b7cec0edf869df93ad9a0592/detection) |
| `linux-amd64` | `8e12bb2d6ead7f20a6d3...` | [0/72 ✅](https://www.virustotal.com/gui/file/8e12bb2d6ead7f20a6d3bf2be1e51f978c38acce810f0734f510d134b039d152/detection) |
| `linux-arm64` | `10f7136bfbf3950c6b2a...` | [0/72 ✅](https://www.virustotal.com/gui/file/10f7136bfbf3950c6b2a1a950bbf85e88b97ee55ab00b4dfbc2a5e9c2ede8672/detection) |
| `windows-amd64` | `9c3ddcf78368fd4fa891...` | [0/72 ✅](https://www.virustotal.com/gui/file/9c3ddcf78368fd4fa89156a553641bf1e03640b4fb6dd29a12c84aa5bc98cd86/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`0.7.0` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
