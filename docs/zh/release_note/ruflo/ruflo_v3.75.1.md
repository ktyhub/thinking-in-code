---
title: "ruflo v3.75.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.1"
version: "v3.75.1"
published: "2026-11-10"
type: "patch"
lang: "zh"
---

# ruflo v3.75.1

## 修复

- **捆绑的安全包再次加载**（#4940，#4944）。 `@claude-flow/cli` 3.74.1 和 3.75.0，以及 `claude-flow` 伞，捆绑 `@claude-flow/security` 3.0.7。它需要 zod 4，但包装器提供 zod 3，因此导入它会抛出 `z.config is not a function`。这影响了 CLI 的身份验证、代理和医生钥匙串路径。 3.75.1 在捆绑包内运送 zod 4.6.7； CLI自己的zod 3不变。
- CI 安装烟雾现在以发布方式打包 CLI 并导入每个捆绑包。

感谢@sparkling 的报告和@Tong-bit-art 的首次诊断(#4941)。

## 还包括（自 3.75.0 起合并）

- `@claude-flow/aidefence` 3.2.1：记录的 `new AgentDB()` 矢量存储有效（#4933）。
- 模式存储下载通过 Ed25519 对照 trusted 密钥进行验证，有大小和时间限制 (#4879)。
- 内存和会话导入上限为 16 MiB；联合加入仅接受 `~/.ruflo` 下的密钥文件和配置的中继 (#4821)。
- `getEntry` 是 sql.js 下的纯读取（#4853）。
- 联合默认为 `require-jcs` 签名 (#4829)。不宣传 JCS 的同行需要 `signatureMode: 'prefer-jcs'`。
- `hive-mind spawn --claude` 默认保持权限提示（#4850）。
- `providers test -p openai` 探测保存的端点 (#4877)。
- `cleanup --force` 保留项目自己的 `data/` 和 `memory/` 以及用户的钩子 (#4859)。
- 启动自动更新需要`RUFLO_AUTO_UPDATE`； dev Mongo 绑定到环回；更严格的联邦握手（#4907）。
- 帮助程序刷新拒绝为另一个 CLI 版本签名的清单 (#4847)。守护进程调度队列位于用户的状态目录中（#4519）。
- `embeddings_neural` 为 `decayRate` 和 `driftThreshold` 保留显式的 `0` (#4830)。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.75.1` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
