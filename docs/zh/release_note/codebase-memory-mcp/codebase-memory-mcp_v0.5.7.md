---
title: "codebase-memory-mcp v0.5.7"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.5.7"
version: "v0.5.7"
published: "2026-03-26"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.5.7

## v0.5.7 — 稳定性、安装和耐久性测试大修

53 次提交，3 个合并 PR，已关闭 10 个错误。自 Go→C 重写以来最重要的稳定性版本。

### 数据库并发修复（严重）
- **找到根本原因**：三个线程（MCP 处理程序、自动索引、观察程序）可能会损坏数据库 — `rename(.db.tmp, .db)` 通过开放的 SQLite 连接产生了 48K+ 垃圾行
- **架构变更**：`rename()` 完全消除。索引直接写入，重新索引先删除旧DB，增量更新插入不变
- 管道锁串行化并发运行；自动检测并清理损坏的数据库

### 安装和更新
- **`install.sh` + `install.ps1`** 包含在每个带有 `--skip-config` 标志的发行档案中 (#145)
- 杀死过时的 MCP 服务器，剥离 macOS 隔离区，临时签署二进制文件
- 每次更新时刷新所有 10 个代理配置
- 内存中 zip 提取 — Windows 上不需要 `unzip`
- 修复了安装、更新和卸载过程中的 Windows `.exe` 路径处理

### Windows 路径标准化 (PR #146)
- 混合路径分隔符在所有入口点标准化为正斜杠
- `cbm_normalize_path_sep()` 适用于所有平台（跨平台数据库文件）

### 浸泡测试套件（新）
- 快速浸泡（10 分钟）、ASan 浸泡（15 分钟）、每周耐力（4 小时）——全部针对每个平台
- RSS 跟踪、FD 漂移、查询延迟、崩溃恢复（kill -9 + 干净重启）
- 所有浸泡层都是释放门——没有通过的释放船

### 错误修复
- **#139** autoindex 中的堆栈溢出 — 8MB 默认线程堆栈（感谢 **@theron-sapp** 提供包含堆栈地址、频率表和解决方法的详细崩溃报告！）
- **#140** `index_repository` 在 Windows 上失败 — **@Flipper1994** 的这份报告触发了全面的并发架构检修！
- **#137** `detect_changes` 在带有空格的路径上失败（感谢 **@shekthesnek** 的敏锐观察，12 个工具有效，但 1 个无效！）
- **#135** macOS Gatekeeper 阻止二进制文件（感谢 **@heraque** 进行彻底的 xattr/spctl/codesign 分析！）
- **#133** `search_code` 拒绝 Windows 反斜杠（感谢 **@ckelly8** 查明根本原因！）
- **#130** O(N²) 导入提取器挂在大文件上（感谢 **@halindrome** 解决 PR #131 中的问题和修复！）
- **#127** 连接不断关闭 - 所有崩溃路径均已修复（感谢 **@kingofthebongo2008**！）
- **#145** 跳过安装脚本中的代理配置（感谢 **@sherif-fanous** — 当天实施！）
- Arena 缓冲区溢出、测试检测差距、内存泄漏、CodeQL TOCTOU、taskkill 自杀、MSYS2 python3 路径转换、vendored tre ssize_t

### 测试
- **2586 个单元测试**（高于 2042 个），零跳过，零内存泄漏
- 480 多项新测试，涵盖 arena、FQN、图形缓冲区、MCP 调度、管道、存储、YAML、观察者
- 所有平台（包括 Windows）上的 15 相烟雾套件
- 浸泡测试作为释放门 - 每次释放前都验证耐久性

### 安全
- 在 VirusTotal 扫描中与二进制文件一起安装脚本（120 分钟超时，所有文件必须通过）
- `system()` 从所有生产代码中删除
- 强制执行供应商依赖项完整性校验和

---

### 贡献者🙏

每一个错误报告和 PR 都让这个版本变得更好。谢谢：

|贡献者 |贡献|
|---|---|
| **@halindrome** | O(N²) 导入修复 (PR #131) — 合并 |
| **@jimpark** | Windows 路径规范化 (PR #146) — 合并 |
| **@chitraverma** | OpenCode 配置格式修复 (PR #134) — 合并 |
| **@theron-sapp** |堆栈溢出崩溃报告 (#139) — 已修复 |
| **@Flipper1994** | Windows 重命名失败 (#140) — 修复、触发并发检修 |
| **@shekthesnek** | Windows 路径与空格 (#137) — 已修复 |
| **@heraque** | macOS 隔离分析 (#135) — 已修复 |
| **@ckelly8** | Windows 反斜杠根本原因 (#133) — 已修复 |
| **@kingofthebongo2008** |连接稳定性 (#127) — 已修复 |
| **@sherif-fanous** | Skip-config 功能请求 (#145) — 已实现 |

---

### 安全验证

所有发布的二进制文件都经过独立验证：

**VirusTotal** — 由 70 多个防病毒引擎扫描：

|二进制 |扫描|
|--------|------|
|安装.sh | [查看报告](https://www.virustotal.com/gui/file-analysis/MjVlZmQ5N2UzMzQ0Y2Q2MGM5ZDgxZDZhM2IxMjY3ZDM6MTc3NDUzMDQxMg==/detection) |
|安装.ps1 | [查看报告](https://www.virustotal.com/gui/file-analysis/ZDk2Y2Y3MGI1MmJmMzFkZWJiMmIxODEzNzhmM2UzYTg6MTc3NDUzMDQxMg==/detection) |
|代码库-内存-mcp-windows-amd64.exe | [查看报告](https://www.virustotal.com/gui/file-analysis/ZjM3OWRhYzg2NTI1NTMzOWFhYmIxZTUzZjNlMmNiYjA6MTc3NDUzMDQxNg==/detection) |
|代码库-内存-mcp-ui-windows-amd64.exe | [查看报告](https://www.virustotal.com/gui/file-analysis/YTJlMDI3NDYzMWNjMmIxZTRmYzRlZDhlNjFmYjgwZDk6MTc3NDUzMDQxOQ==/detection) |
|代码库-内存-mcp-ui-linux-arm64 | [查看报告](https://www.virustotal.com/gui/file-analysis/NmZhZjE3YzMyMDdjOTI2MWY3ZWRmZDgxYzkzOGRhNDM6MTc3NDUzMDQyMg==/detection) |
|代码库内存-mcp-ui-linux-amd64 | [查看报告](https://www.virustotal.com/gui/file-analysis/YjhkMGIzYWE1ZTlmYTEzMDVhYmM0ZTcxZGVhYWRhNTk6MTc3NDUzMDQyNQ==/detection) |
|代码库-内存-mcp-ui-darwin-arm64 | [查看报告](https://www.virustotal.com/gui/file-analysis/ODZkMmU3YzMwNTM1NzMzZjdhNDU0ZWYwY2YyZmE2Y2I6MTc3NDUzMDQyOA==/detection) |
|代码库-内存-mcp-ui-darwin-amd64 | [查看报告](https://www.virustotal.com/gui/file-analysis/NGM5NGRiYTg3YTkxMGE1ZDA0ZjhjYjRjODZlMzRiZjI6MTc3NDUzMDQzMQ==/detection) |
|代码库-内存-mcp-linux-arm64 | [查看报告](https://www.virustotal.com/gui/file-analysis/ZDZmMjc4NTcxNzRmNzZhMjMzYmFhMjgyNDg4M2M5ZTI6MTc3NDUzMDQzNA==/detection) |
|代码库-内存-mcp-linux-amd64 | [查看报告](https://www.virustotal.com/gui/file-analysis/ZTQxZjI5YzcxMjFlOGExYzc5MWUyZWIwYjA4N2ZjNDQ6MTc3NDUzMDQzNg==/detection) |
|代码库-内存-mcp-darwin-arm64 | [查看报告](https://www.virustotal.com/gui/file-analysis/ODk3NmIyNzI4OTkzMDEzMTRjNjkzMzIwOWQxZDZlMjA6MTc3NDUzMDQzOQ==/detection) |
|代码库-内存-mcp-darwin-amd64 | [查看报告](https://www.virustotal.com/gui/file-analysis/MjVlYjE2MjI4NGNlZWJhZTgwYTcyZTE2Y2Y2MjU1NjE6MTc3NDUzMDQ0Mg==/detection) |
|许可证 | [查看报告](https://www.virustotal.com/gui/file-analysis/NzQ1NWJkNmJjOTA4YmE5ZTc0MGE3Y2JmMTFmYjcwNDM6MTc3NDUzMDQ0Mg==/detection) |
**构建来源 (SLSA)** - 每个二进制文件都是由此存储库中的 GitHub Actions 构建的加密证明：
```
gh attestation verify <downloaded-file> --repo DeusData/codebase-memory-mcp
```

**Sigstore cosign** — 无密钥签名验证：
```
cosign verify-blob --bundle <file>.bundle <file>
```

**本机防病毒扫描** — 所有二进制文件在创建此版本之前都通过了这些扫描（任何检测都会阻止该版本）：
- Windows：具有 ML 启发式的 Windows Defender（最终用户运行相同的引擎）
- Linux：ClamAV 每日更新签名
- macOS：ClamAV 每日更新签名

**SBOM** — 软件物料清单 (`sbom.json`) 列出了所有供应商的依赖项。

有关完整详细信息，请参阅 [SECURITY.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md)。

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.5.7` · 📅 发布：2026-03-26 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.5.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
