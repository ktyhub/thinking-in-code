---
title: "MinerU mineru-4.0.11-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.11-released"
version: "mineru-4.0.11-released"
published: "2026-10-08"
type: "release"
lang: "zh"
---

# MinerU mineru-4.0.11-released

## 更新内容/更改内容

**改进/改进**
- API：`/v1/models` 统一返回随服务版本变化的虚拟模型 ID（如 `mineru-4.0.11`），补充模型描述并保持注册时间稳定；`/v1/tiers` 的 `current_model` 同步使用该 ID，解析质量通过 `tier` 选择 / API：通过 `/v1/models` 暴露单一版本虚拟模型 ID，添加其描述并保持注册时间戳稳定； `/v1/tiers` 使用与 `current_model` 相同的 ID，而解析质量则通过 `tier` 选择
- 图像处理：删除 MinerU 生产代码中的 OpenCV 导入和调用，OCR、公式、表格及印章修正等图像操作通过 DocVortex 公共接口执行 / 图像处理：从 MinerU 生产代码中删除 OpenCV 导入和调用，并使用公共 DocVortex 接口进行 OCR、公式、表格和印章图像操作

**修复/修复**
- CLI：修复`mineru parse`单文件输入无法覆盖已有输出文件的问题；拒绝输出路径与输入文件相同，覆盖避免源文件；多文件输入继续要求为输出 / CLI：允许`mineru parse`覆盖单个输入的现有输出文件，拒绝指向输入文件的输出路径，并继续要求多个输入的目录

**依赖/依赖性**
- docvortex 最低版本提升至 0.5.12（`>=0.5.12,<1`）/ 要求 docvortex>=0.5.12,<1
- 删除 OpenCV 直接依赖；Torch/full 等可选依赖配置保持原样，第三方依赖仍可能间接安装 OpenCV / 删除直接 OpenCV 依赖； Torch/full extras 保留其现有配置，第三方依赖项仍可能会间接安装 OpenCV

**升级提示/升级注意事项**
- API 客户端应通过 `GET /v1/models` 获取当前虚拟模型 ID，并在服务升级后重新发现；使用 `tier` 选择解析质量，硬避免编码历史模型 ID / API cli 客户端应通过 `GET /v1/models` 发现当前虚拟模型 ID，并在服务器升级后刷新；通过 `tier` 选择解析质量，而不是硬编码历史模型 ID

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.10-released...mineru-4.0.11-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.0.11-released` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.11-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
