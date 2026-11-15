---
title: "MinerU mineru-4.1.7-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.7-released"
version: "mineru-4.1.7-released"
published: "2026-11-04"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.7-released

MinerU 4.1.7 添加了对本地文档库的持久身份验证并改进了布局检测。

- Doclib HTTP 端点需要持久持有者令牌。 SDK自动读取本地凭证；直接 HTTP 集成必须发送令牌。
- 使用私有 POSIX 权限和本机 macOS/Windows ACL 保护凭证文件。
- 在 ONNX 和 Torch 后端一致地恢复每类布局输出阈值。
- 根据读取顺序中的几何形状放置吸收的图像区域。
- 将 DocVortex 依赖项升级到 `>=0.6.13,<0.7`。

使用 `pip install -U "mineru==4.1.7"` 升级。

完整改动：https://github.com/opendatalab/MinerU/compare/mineru-4.1.6-released...mineru-4.1.7-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.7-released` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.7-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
