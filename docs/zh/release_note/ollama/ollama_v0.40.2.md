---
title: "ollama v0.40.2"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.2"
version: "v0.40.2"
published: "2026-10-08"
type: "patch"
lang: "zh"
---

# ollama v0.40.2

## Model upgrades

使用早期版本 Ollama 下载的模型会在您第一次运行时在后台升级，以便在 llama.cpp 上运行时获得更好的性能和兼容性。

为了确保降级安全，Ollama 保留原始副本作为备份，因此升级后的模型会暂时保留在磁盘上。未来的版本将自动删除这些备份。

要立即删除备份的模型（需要 `jq`）：

```shell
curl -s localhost:11434/api/tags | jq -r '.models[].name' | while read -r m; do
  curl -s localhost:11434/api/show -d "{\"model\":\"$m\"}" | jq -r \
    'select(any(.manifests[]?; .runner == "llamacpp")) | .manifests[] | select(.runner == "ggml") | .digest'
done | sort -u | xargs -n1 ollama rm
```

这只会删除备份。如果您稍后降级到早于 0.40 的版本，则需要重新拉取这些模型。

**Other changes**
* `ollama list` 不再在 https://github.com/ollama/ollama/pull/18874 中显示 @dhiltgen 升级模型的重复条目
* `ollama launch claude` 在 https://github.com/ollama/ollama/pull/18855 中使用@jberg5 模型的完整上下文长度
* 自述文件：通过 @maziluiosif 在 https://github.com/ollama/ollama/pull/18739 中将 oxi 添加到社区集成中

## 新贡献者
* @maziluiosif 在 https://github.com/ollama/ollama/pull/18739 中做出了第一个贡献

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.1...v0.40.2-rc0

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.2` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
