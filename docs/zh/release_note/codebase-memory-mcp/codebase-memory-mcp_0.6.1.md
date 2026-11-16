---
title: "codebase-memory-mcp 0.6.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.6.1"
version: "0.6.1"
published: "2026-06-12"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp 0.6.1

> 📦 已存档的发布页面 — 该版本的二进制文件不再发布。获取[最新版本](https://github.com/DeusData/codebase-memory-mcp/releases/latest)。

## v0.6.1 — 89 种新语言、跨存储库智能、团队共享图形工件、npm+PyPI 分发

自 v0.6.0 以来已有 50 多次提交。添加 89 个树守护者语法（66 → 155 种语言），引入具有 CROSS_* 边缘的跨存储库智能，提供团队共享的图形工件 (`.codebase-memory/graph.db.zst`)，引入完整的分发包装器 (npm/PyPI/Homebrew/Scoop/Winget/Chocolatey/AUR/Go)，npm + PyPI 现在作为发布管道的一部分自动发布，并推出全面的安装程序安全强化。

### 语言与解析 — 66 → 155

- **提供 89 个新的树保护语法**，带有词汇清理的标记化和语法安全审计脚本
- **Lang 规范覆盖** 填充了 114 种具有适当节点类型的语言 — Go (`func_literal`)、JS（`do_statement`、修复过时的 `case_clause`）、C#/Python 导入、共享数组
- **77 个新的扩展映射测试** 涵盖新语言
- **C#、Rust、Scala 语法**更新到最新的上游
- **`lang_specs` 重构**：指定的初始化器 + 工厂指针

### 跨回购情报

- **CROSS_* 边缘类型** 用于跨存储库依赖关系和架构关系
- **gRPC / GraphQL / tRPC 服务检测** 使用 protobuf 路由提取
- **gRPC 调用解析中的存根检测** + 链式调用提取
- **多星系 UI 布局** + 跨存储库架构摘要视图

### 团队共享图神器

- **`.codebase-memory/graph.db.zst`** — zstd 压缩的知识图，可以提交到存储库。队友从工件引导，而不是从头开始运行完整的重新索引。
- **供应的 zstd 1.5.7** （合并，约 52K LOC），用于 8–13:1 压缩
- **两层导出**：`zstd -9` + 索引剥离 + `VACUUM INTO` 用于显式索引（最佳比例）； `zstd -3` 用于观察者/增量自动更新（低延迟）
- **导入路径**：解压→完整性检查→自动重新创建索引
- `index_repository` 中的 **自动引导**：当不存在本地数据库但存在工件时，首先导入，然后运行增量索引
- **使用 `merge=ours` 自动创建 `.gitattributes`** 以防止二进制工件上的合并冲突

### 进口和渠道

- **针对 10 种语言的 IMPORTS 边缘的通用包/模块解析**（通过清单扫描解析 `@myorg/pkg`、`github.com/foo/bar`、`use my_crate::foo` 等裸说明符：`package.json`、`go.mod`、`Cargo.toml`、`pyproject.toml`、`composer.json`、`pubspec.yaml`、`pom.xml`、 `build.gradle`、`mix.exs`、`*.gemspec`)
- **通道检测从 JS/TS 扩展到 8 种语言**

### 分布

现在可以直接从公共包注册表安装：

```bash
npm install -g codebase-memory-mcp     # npm
pip install codebase-memory-mcp         # PyPI
go install github.com/DeusData/codebase-memory-mcp/pkg/go@latest   # Go
```

- **npm + PyPI 自动发布** 集成到发布管道中（`verify` 之后的 `publish-registries` 作业，然后原子 `publish-final` 仅在两个注册表成功后才取消起草 GitHub 版本 - 无半交付状态）
- **npm 包** 使用 `--provenance`（GitHub OIDC 构建证明在 npmjs.com 上可见）
- `pkg/` 中的完整分发包装器：npm、PyPI、Homebrew、Scoop、Winget、Chocolatey、AUR、Go

### 安全强化

- **PyPI 安装程序**：针对 tar-slip 和方案混淆攻击进行了强化（PR #248 by @dLo999，closes #246）
- **npm 安装程序**：校验和验证、仅 HTTPS 重定向、无 shell 注入
- **跨安装程序强化**：删除了 `Unblock-File`，添加了仅 HTTPS URL 验证
- **vite 升级到 6.4.2** — 修复了 CVE GHSA-4w7w-66w2-5vf9 和 GHSA-p9ff-h696-f583
- **语法安全审计**添加到供应商管道中
- 自述文件：VirusTotal 扫描链接（二进制哈希）、SLSA 徽章、安全和 Trust 部分、透明度免责声明、负责任披露邀请
- arXiv 纸质徽章 + 引文

### 稳定性和质量

- **`get_graph_schema`** 现在公开每个节点标签的属性定义
- **sqlite_writer 溢出页面** — 修复大记录上的 SIGBUS (#139)
- `delete_project` 之后的 **RSS 回收**：显式 `mem_collect` + 立即清除
- **MCP 工具 / CLI**：改进的错误处理、诊断和取消
- PR #162 中精挑细选的提取和 Cypher 改进

### 编辑器/代理集成

- **Kiro CLI 支持** (#96)

### 平台修复

- **Windows**：`pass_pkgmap` 现在使用 `cbm_strndup`（mingw clang 缺少 POSIX `strndup`）
- **`test_watcher`**：使用 `GIT_AUTHOR_*` / `GIT_COMMITTER_*` 环境变量而不是改变全局 git 配置

### CI / 烟雾

- **烟雾测试 JSON 解析**已修复 - CLI 默认模式打开 MCP 信封； Smoke 现在直接解析内部 JSON
- **二进制字符串审核白名单** — 第一个语法中的 `telnet` URI 方案被记录为已知良性匹配

### 贡献者

感谢所有为此版本做出贡献的人：

- @dLo999 — PyPI 安装程序强化 (#248)

**完整 changelog**：https://github.com/DeusData/codebase-memory-mcp/compare/v0.6.0...v0.6.1


## 安全验证

所有发布的二进制文件均使用 70 多个防病毒引擎进行扫描 — **0 次检测**。

|二进制 | SHA-256 | VirusT总 |
|--------|---------|------------|
| `darwin-amd64` | `7836878876c8956f6413...` | [0/72 ✅](https://www.virustotal.com/gui/file/7836878876c8956f64132864f3122dab8766a26b21f5ae77d89d48f58a7a8219/detection) |
| `darwin-arm64` | `3e72c8cb364c431d99f1...` | [0/72 ✅](https://www.virustotal.com/gui/file/3e72c8cb364c431d99f183a15152db448075b150c755c9bd383fa785875c85d2/detection) |
| `linux-amd64` | `7e6624b345f994afb901...` | [0/72 ✅](https://www.virustotal.com/gui/file/7e6624b345f994afb901475e9120881241f125dfecd36772b5ade8e73485daf9/detection) |
| `linux-arm64` | `ac2498c45235c1bf37f8...` | [0/72 ✅](https://www.virustotal.com/gui/file/ac2498c45235c1bf37f8ef611bdb55c2e615fd445f7045708d7fdf2f9bda5e89/detection) |
| `windows-amd64` | `d773be23ed0823d58677...` | [0/72 ✅](https://www.virustotal.com/gui/file/d773be23ed0823d58677453029160486becb495642cca2a81bc14f099353c46b/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`0.6.1` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.6.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
