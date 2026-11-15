---
title: "MinerU mineru-4.1.6-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.6-released"
version: "mineru-4.1.6-released"
published: "2026-11-03"
type: "release"
lang: "en"
summary: "MinerU 4.1.6 improves PDF footnote formulas and removes duplicate nested text regions."
---

# MinerU mineru-4.1.6-released

MinerU 4.1.6 improves PDF footnote formulas and removes duplicate nested text regions.

- Preserve formulas and formula numbers inside footnotes so they reach formula recognition and native-text filling with the correct identity.
- Remove fully contained text boxes with the same category while retaining the outer region and reading order.
- Share layout postprocessing between the ONNX and Torch backends, including formula protection and text deduplication.
- Upgrade the DocVortex dependency to `>=0.6.12,<0.7`.
- Add project badges to the Chinese and English documentation homepages.

Upgrade with `pip install -U "mineru==4.1.6"`.

Full changes: https://github.com/opendatalab/MinerU/compare/mineru-4.1.5-released...mineru-4.1.6-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.6-released` · 2026-11-03 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.6-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
