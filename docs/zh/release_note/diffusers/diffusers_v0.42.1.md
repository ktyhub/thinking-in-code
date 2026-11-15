---
title: "diffusers v0.42.1"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.42.1"
version: "v0.42.1"
published: "2026-10-27"
type: "patch"
lang: "zh"
---

# diffusers v0.42.1

这是一个安全版本。有关详细信息，请参阅 [GHSA-4prv-5hj7-c2xr](https://github.com/huggingface/diffusers/security/advisories/GHSA-4prv-5hj7-c2xr)。

此补丁版本修复了使用 `from_pretrained` 加载时组件声明的库名称的解析方式。

管道和模型将每个组件声明为 `model_index.json` / `config.json` 中的 `["<library>", "<class>"]` 对。此版本更改了在 `DiffusionPipeline`、`AutoModel` 和 `ModularPipeline` 加载路径中解析库名称的方式，并在解析的模块中找不到声明的类时添加更清晰的错误。

鼓励 0.42.0 上的所有用户升级：

```
pip install diffusers==0.42.1
```

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.42.1` · 📅 发布：2026-10-27 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.42.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
