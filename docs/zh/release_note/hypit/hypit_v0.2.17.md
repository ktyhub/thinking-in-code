---
title: "hypit v0.2.17"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.17"
version: "v0.2.17"
published: "2026-10-01"
type: "patch"
lang: "zh"
---

# hypit v0.2.17

## 亮点

- 网络故障现在会显示是哪个网络故障。节点的 `fetch` 将每个连接级别故障报告为 `fetch failed`，并将原因保留在共享 `transport()` 帮助程序丢弃的 `error.cause` 上。因此，失败的 HypiHub 目录检查会读取 `... generation not submitted: fetch failed`，它无法区分 DNS、TLS、重置、超时或代理问题，并被误读为上游提供商中断。

  现在附加原因代码和消息：

  |失败|之前 |之后 |
  | ---| ---| ---|
  |域名解析 | `fetch failed` | `fetch failed: getaddrinfo ENOTFOUND <host>` |
  |证书| `fetch failed` | `fetch failed: CERT_HAS_EXPIRED certificate has expired` |
  |连接超时 | `fetch failed` | `fetch failed: UND_ERR_CONNECT_TIMEOUT Connect Timeout Error (attempted address: <ip>:<port>, timeout: 10000ms)` |

  每个提供商的网络故障都会通过这个助手，因此HypiHub目录读取、OAuth刷新、上传和下载都获得原因。该文本来自 Node 的网络层（主机、地址和端口、错误代码、证书原因），不包含 URL 路径、查询字符串或标头。 (#376)

## 升级

安装`@hypit/hypit@0.2.17`。现有视频项目和材料无需迁移。错误消息保留其原始文本作为前缀。

## 验证

PR 检查在 Linux 和 Windows 上通过，包括打包分发检查。上面的新消息是通过 `transport()` 发送真实的失败请求而生成的。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.17` · 📅 发布：2026-10-01 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.17)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
