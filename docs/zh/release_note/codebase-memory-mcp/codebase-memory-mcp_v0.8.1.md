---
title: "codebase-memory-mcp v0.8.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.8.1"
version: "v0.8.1"
published: "2026-06-12"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.8.1

v0.8.0 的重点后续产品。

## 第一方 HTTP 服务器

graph-UI Web 服务器已从头开始重新实现为精益的内部模块，这一重构从二进制文件中删除了最后一个第三方服务器库。新的传输 (`src/ui/httpd.c`) 是专门为 UI 实际需要而构建的：

- **仅构建本地主机** — 专门绑定 `127.0.0.1`，在每个操作系统上都具有平台正确的套接字选项。
- **严格的 HTTP/1.1 解析** — 硬请求上限（16 KB 头部/1 MB 主体）、严格的 CRLF 处理、原始路径匹配和每个连接接收截止时间。
- **设计简单** — 每个连接一个请求 (`Connection: close`)；没有保持活动状态机，没有分块编码。

新的 28 项测试传输和路由套件涵盖了解析边缘情况、CORS 策略、RPC 调度和关闭行为。所有路由、状态代码和仅限本地主机的 CORS 策略的行为与以前完全相同。

## 也在这个版本中

- **更精简的语法集** — `nim` 语法（迄今为止最大的供应商语法，大小为 66 MB）被删除；仍支持 158 种语言。
- **每个存档中的属性包** - 版本存档现在包括 `THIRD_PARTY_NOTICES.md`，这是一个包含所有供应组件的许可证文本的合并文件。 Homebrew 和 AUR 安装将其与二进制文件放在一起。
- **更丰富的 SBOM** — 编译到二进制文件中的所有内容的每个组件许可证和版本元数据。
- 测试套件：**5,604 次测试**（+27 与 v0.8.0 相比）。

## 更新

```bash
codebase-memory-mcp update
```

或者获取下面的二进制文件 - 每个资产都像往常一样进行签名、校验和和证明。

## 安全验证

所有发布的二进制文件均使用 70 多个防病毒引擎进行扫描 — **0 次检测**。

|二进制 | SHA-256 | VirusT总 |
|--------|---------|------------|
| `darwin-amd64` | `6cd48f218bf135a7b831...` | [0/72 ✅](https://www.virustotal.com/gui/file/6cd48f218bf135a7b83173e6222c672b18ded26eb20eb5bcfab8ff6d453337e9/detection) |
| `darwin-arm64` | `595cedd259200424f3d9...` | [0/72 ✅](https://www.virustotal.com/gui/file/595cedd259200424f3d92b04e116dc2de4d75bc38ed6a615205ab51ee61de485/detection) |
| `linux-amd64` | `58a0e1a968dacd324cde...` | [0/72 ✅](https://www.virustotal.com/gui/file/58a0e1a968dacd324cde582a1f40fd9ea07b9f98e5529ab571757136563504db/detection) |
| `linux-arm64` | `45d5c33d59d55b998b98...` | [0/72 ✅](https://www.virustotal.com/gui/file/45d5c33d59d55b998b98b1aab7e4a250b22777fd9f4d43ee50226ed043502a79/detection) |
| `windows-amd64` | `12375e6a39a31f003d77...` | [0/72 ✅](https://www.virustotal.com/gui/file/12375e6a39a31f003d776e54ef487640f9f59db7dbeee96973a9ee9eb18bc7bb/detection) |

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.8.1` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.8.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
