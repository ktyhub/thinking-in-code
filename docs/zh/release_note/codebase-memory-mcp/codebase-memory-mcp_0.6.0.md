---
title: "codebase-memory-mcp 0.6.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.6.0"
version: "0.6.0"
published: "2026-06-12"
type: "minor"
lang: "zh"
---

# codebase-memory-mcp 0.6.0

> 📦 已存档的发布页面 — 该版本的二进制文件不再发布。获取[最新版本](https://github.com/DeusData/codebase-memory-mcp/releases/latest)。

## v0.6.0 — 语义搜索、SIMILAR_TO 边缘和跨语言智能

自 v0.5.7 以来已有超过 85 次提交。主要版本添加了基于向量的语义搜索、结构近克隆检测、跨语言导入解析以及跨所有平台的显着生活质量改进。

### 语义搜索和向量嵌入

- **`semantic_query` 工具**：通过 `cbm_cosine_i8` SQL 函数在整个代码库图表中进行基于关键字的向量搜索
- **Nomic nomic-embed-code 嵌入**：40K 预训练标记向量 (768d int8)，通过模拟注意力从 nomic-ai/nomic-embed-code 中提取
- **11 信号组合评分**：TF-IDF、反射随机索引、API/Type/Decorator 签名、AST 结构配置文件、近似数据流、Halstead-lite 指标、MinHash、模块邻近度、图扩散
- **`SEMANTICALLY_RELATED` 边缘**：连接词汇不匹配但目的相似的函数（分数 >= 0.80，每个节点最多 10 个，仅限相同语言）
- 每个关键字的最小余弦评分取代了合并向量平均以获得更好的精度
- 分数限制为 [0,1] - 接近乘数不再将分数推至 1.0 以上
- 克隆重复数据删除：SIMILAR_TO 与 Jaccard >= 阈值跳过 SEMANTICALLY_RELATED

### SIMILAR_TO 边缘（近克隆检测）

- **MinHash 指纹识别**：来自具有结构权重的仅叶 AST 令牌的 64 哈希签名
- **LSH 索引**：基于带的局部敏感哈希，用于 O(1) 候选检索
- **并行评分**：工作池查询 LSH，对候选者评分，发出边缘
- 独特的三元门过滤器简单的短功能
- `SIMILAR_TO` 边缘具有 Jaccard 相似性和属性中的相同文件标志

### 全文搜索

- **BM25 全文搜索** 通过带有 `cbm_camel_split` 分词器的 FTS5（camelCase/snake_case 感知）
- 增量 FTS5 重建索引更新

### 新的边缘类型和检测

- **`EMITS` / `LISTENS_ON`** Socket.IO、EventEmitter 和通用通道模式的边缘
- **恒定分辨率**：`const EVENT = "foo"; emit(EVENT)` 通过每个文件常量表解析通道名称
- **`IMPORTS` 边缘**，具有 JS/TS（`./foo`、`../bar`）、Python（`.helpers`、`..utils`）、Ruby 的相对路径分辨率
- **`DATA_FLOWS`** 具有参数到参数映射 + 字段访问链的边
- **跨服务通信发现** + RAM优先增量索引
- 基于 AST 的路线注册取代预扫描基础设施
- HCL基础设施绑定提取+前缀装饰器误报修复
- 通用路由注册+基础设施绑定桥

### 图查询和工具改进

- **连接了 6 个先前忽略的参数**：`min_degree`、`max_degree`、`exclude_entry_points`、`include_connected`、`aspects` 过滤器、`since` 用于 detector_changes
- `trace_path` 上的 **`include_tests` 参数** — 在 BFS 结果中标记测试文件
- `trace_path` 上的 **`risk_labels`** 用于安全敏感的路径跟踪
- **`--progress` CLI 标志**用于实时索引反馈
- **`CBM_CACHE_DIR` env var** 用于可配置数据库目录
- **`moderate` 索引模式** 添加到工具架构中（在完整和快速之间）
- `param_names`、`param_types`、`decorators` 的架构属性公开
- `include_connected` 修复：BFS 入站+出站单独运行（合并不正确）

### 生活质量

- **嵌套 .gitignore 支持**：现在在索引期间尊重子目录 gitignores — 对于 monorepos 至关重要（#178）
- **技能整合**：4项独立技能合并为1项，并逐步披露
- **智能更新**：`skip update when already on latest version`
- 安装命令中的**运行时二进制检测**（不再硬编码）
- 观察程序中的 **Git 子模块支持**：检测子模块内的脏状态
- **快速→完整模式更改检测** + 自动启用 ui 变体二进制文件的 UI
- 布局端点：O(n*e) 边缘映射替换为二分搜索
- 布局 JSON：处理序列化中无效的 UTF-8 和 NaN

### 平台修复

- **Windows**：Zed/VS Code/KiloCode 配置路径、PATH 分隔符、S_IXUSR 检查、使用 home_dir 相对路径进行代理检测、基于 APPDATA 的用户配置测试
- **Linux 便携式**：Alpine musl 兼容性、添加到烟雾测试中的安全审核、烟雾环境中的 XDG_CONFIG_HOME
- **跨平台矢量 blob 组装**：macOS Mach-O / Linux ELF / Windows COFF 的预处理器条件
- C++ SEGV 修复：大型头文件上的 LSP 类型解析器中的 NULL deref

### 代码质量和 Linting

- 16 个文件中解决了 337 个 linter 警告（命名常量、认知复杂性提取）
- 认知复杂度阈值设置为行业默认值 (25)，168 个功能拆分
- `cbm_write_db`神功能分体（569→325行）
- 消除了所有 NOLINTNEXTLINE 抑制，迭代 AST 步行器
- 语义语料库 token_map 中的 ASan 泄漏修复

### CI/CD 与安全

- **解耦安全门**：security-static + CodeQL独立运行，不阻塞测试/构建/冒烟管道
- **对所有二进制变体进行安全审核**（标准 + UI）- 以前的 UI 二进制文件未经审核
- **AV 安全令牌词汇**：从 Nomic 嵌入中删除了 11 个启发式触发词
- CI 拆分为可重用的工作流程组件
- 供应商依赖项碰撞：SQLite 3.51.3、Mongoose 7.21、mimalloc 3.2.8
- 操作增加：下载工件 v8.0.1、attest-sbom v2、cosign v4.1.1、msys2 v2.31.0、结帐 v6.0.2、缓存 v5.0.4、上传工件 v7.0.0、attest-build-provenance v4.1.0、codeql-action v4.35.1

### 贡献者

- **@halindrome** — Git 子模块脏状态检测，trace_path 上的risk_labels
- **@Koolerx** — C# 接口注册表修复、base_list 处理程序、FTS5 BM25 搜索、JS/TS IMPORTS 解析、通道模式
- **@dLo999** — CBM_CACHE_DIR 可配置数据库目录、最新时跳过更新、嵌套 .gitignore 支持 (#178)
- **@Selene29** — 布局二分搜索优化，UTF-8/NaN 序列化修复
- **@slvnlrt** — Windows PATH 分隔符修复，运行时二进制路径检测
- **@jimpark** — Zed 和 VS Code Windows 配置路径修复
- **@ahundt** — 连接默默忽略的 search_graph 参数
- **@maplenk** — Trace_path 上的 include_tests 参数，search_graph 参数接线
- **@gdilla** — 技能巩固，risk_labels + --progress CLI 标志

### VirusTotal 扫描结果

扫描所有发布工件 — **所有引擎均检测到 0 次**。

|文件 |发动机 |检测|报告|
|------|---------|------------|--------|
| `codebase-memory-mcp-linux-amd64` | 64 | 64 0 | [查看](https://www.virustotal.com/gui/file-analysis/MzI5YTY1MDk3NTY5ZDM1NWFiYTQyYTI0ODI3MWFkN2I6MTc3NTUwNzA2Mg==/detection) |
| `codebase-memory-mcp-linux-arm64` | 62 | 62 0 | [查看](https://www.virustotal.com/gui/file-analysis/ZWMxMjJhNGQ1NDBlMTliOGFkODFjZDg3MzE5MDI2NmM6MTc3NTUwNzA1NQ==/detection) |
| `codebase-memory-mcp-linux-amd64-portable` | 64 | 64 0 | [查看](https://www.virustotal.com/gui/file-analysis/MDY1NDlkYWQ0NzZlYzZiYjQzZjAwZGRlMDVhMWUxOTk6MTc3NTUwNzA1OA==/detection) |
| `codebase-memory-mcp-linux-arm64-portable` | 62 | 62 0 | [查看](https://www.virustotal.com/gui/file-analysis/Mzk2ZTIyMjJkMzcyNDA3NWJiMGVmZWFjMGUwYTY1N2U6MTc3NTUwNzA1Mg==/detection) |
| `codebase-memory-mcp-darwin-arm64` | 63 | 63 0 | [查看](https://www.virustotal.com/gui/file-analysis/YTYxYmE1M2I1Mzk3MzZhZDljNzk2NmE0OGFiN2Y2NTY6MTc3NTUwNzA2NA==/detection) |
| `codebase-memory-mcp-darwin-amd64` | 61 | 61 0 | [查看](https://www.virustotal.com/gui/file-analysis/NTg5YTMwYzlhZDc0NGEzM2Q3ZTYxZmVhNjIwZDQ1ZTg6MTc3NTUwNzA2Nw==/detection) |
| `codebase-memory-mcp-windows-amd64.exe` | 71 | 71 0 | [查看](https://www.virustotal.com/gui/file-analysis/NDFmNmZiZmUwYmI4MGEwMjU2YjU3MGUxYTgwNDJkODQ6MTc3NTUwNzAyNg==/detection) |
| `codebase-memory-mcp-ui-linux-amd64` | 64 | 64 0 | [查看](https://www.virustotal.com/gui/file-analysis/Yjk0YmE2ZDdjZTQ2NWY5NTRiNzIwODg2MWE1NWFlMTQ6MTc3NTUwNzA0Mg==/detection) |
| `codebase-memory-mcp-ui-linux-arm64` | 61 | 61 0 | [查看](https://www.virustotal.com/gui/file-analysis/ZTM2YjdiZTljZWM5N2YyMjg4NGY0ZmNlNDUwZjRmN2U6MTc3NTUwNzAzNQ==/detection) |
| `codebase-memory-mcp-ui-linux-amd64-portable` | 64 | 64 0 | [查看](https://www.virustotal.com/gui/file-analysis/NTNmYWEzZTE2MzMyMGZhNGU4NzJkMTc0M2MxNTY5M2Q6MTc3NTUwNzAzOQ==/detection) |
| `codebase-memory-mcp-ui-linux-arm64-portable` | 63 | 63 0 | [查看](https://www.virustotal.com/gui/file-analysis/YmFlMzkwZDgyNGZlNWViMDI1ZmE0Y2ZhNDkzMDUzOWQ6MTc3NTUwNzAzMg==/detection) |
| `codebase-memory-mcp-ui-darwin-arm64` | 62 | 62 0 | [查看](https://www.virustotal.com/gui/file-analysis/Nzg1MGViY2NjOWNiNjJhMTFkNjUzZDk5YzI1YTY2ZWU6MTc3NTUwNzA0NQ==/detection) |
| `codebase-memory-mcp-ui-darwin-amd64` | 61 | 61 0 | [查看](https://www.virustotal.com/gui/file-analysis/NDQ2NTBiOTgyZDEzOTllOTI0YjdlNDVmZDY4OWU4YWQ6MTc3NTUwNzA0OA==/detection) |
| `codebase-memory-mcp-ui-windows-amd64.exe` | 71 | 71 0 | [查看](https://www.virustotal.com/gui/file-analysis/NjY5YmYwODYyOTlhMWRkYjJiOGUwOGE1NWYyNzc0MWI6MTc3NTUwNzAyOQ==/detection) |
| `install.sh` | 62 | 62 0 | [查看](https://www.virustotal.com/gui/file-analysis/MjVlZmQ5N2UzMzQ0Y2Q2MGM5ZDgxZDZhM2IxMjY3ZDM6MTc3NTUwNzAyMw==/detection) |
| `install.ps1` | 62 | 62 0 | [查看](https://www.virustotal.com/gui/file-analysis/ZDk2Y2Y3MGI1MmJmMzFkZWJiMmIxODEzNzhmM2UzYTg6MTc3NTUwNzAyMw==/detection) |
| `LICENSE` | 61 | 61 0 | [查看](https://www.virustotal.com/gui/file-analysis/NzQ1NWJkNmJjOTA4YmE5ZTc0MGE3Y2JmMTFmYjcwNDM6MTc3NTUwNzA2OA==/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`0.6.0` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
