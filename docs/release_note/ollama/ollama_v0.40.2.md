---
title: "ollama v0.40.2"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.2"
version: "v0.40.2"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "Models downloaded with earlier versions of Ollama are upgraded in the background the first time you run them, for better performance and compatibility when running on llama.cpp."
---

# ollama v0.40.2

## Model upgrades

Models downloaded with earlier versions of Ollama are upgraded in the background the first time you run them, for better performance and compatibility when running on llama.cpp.

To make downgrading safe, Ollama keeps the original copy as a backup, so upgraded models are temporarily kept on disk. A future release will remove these backups automatically.

To remove backed up models now (requires `jq`):

```shell
curl -s localhost:11434/api/tags | jq -r '.models[].name' | while read -r m; do
  curl -s localhost:11434/api/show -d "{\"model\":\"$m\"}" | jq -r \
    'select(any(.manifests[]?; .runner == "llamacpp")) | .manifests[] | select(.runner == "ggml") | .digest'
done | sort -u | xargs -n1 ollama rm
```

This only deletes the backups. If you later downgrade to a version older than 0.40, you'll need to re-pull those models.

**Other changes**
* `ollama list` no longer shows duplicate entries for upgraded models by @dhiltgen in https://github.com/ollama/ollama/pull/18874
* `ollama launch claude` uses the model's full context length by @jberg5 in https://github.com/ollama/ollama/pull/18855
* README: add oxi to community integrations by @maziluiosif in https://github.com/ollama/ollama/pull/18739

## New Contributors
* @maziluiosif made their first contribution in https://github.com/ollama/ollama/pull/18739

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.1...v0.40.2-rc0

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.2` · 2026-10-08 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
