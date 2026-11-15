---
title: "MinerU mineru-4.1.7-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.7-released"
version: "mineru-4.1.7-released"
published: "2026-11-04"
type: "release"
lang: "en"
summary: "MinerU 4.1.7 adds persistent authentication for the local document library and improves layout detection."
---

# MinerU mineru-4.1.7-released

MinerU 4.1.7 adds persistent authentication for the local document library and improves layout detection.

- Require a persistent bearer token for Doclib HTTP endpoints. The SDK reads local credentials automatically; direct HTTP integrations must send the token.
- Protect credential files with private POSIX permissions and native macOS/Windows ACLs.
- Restore per-class layout output thresholds consistently across the ONNX and Torch backends.
- Place absorbed image regions according to their geometry in the reading order.
- Upgrade the DocVortex dependency to `>=0.6.13,<0.7`.

Upgrade with `pip install -U "mineru==4.1.7"`.

Full changes: https://github.com/opendatalab/MinerU/compare/mineru-4.1.6-released...mineru-4.1.7-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.7-released` · 2026-11-04 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.7-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
