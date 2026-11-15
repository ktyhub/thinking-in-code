---
title: "MinerU mineru-4.1.5-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.5-released"
version: "mineru-4.1.5-released"
published: "2026-11-03"
type: "release"
lang: "en"
summary: "MinerU 4.1.5 fixes parse-path normalization and improves filename handling across the CLI and Tasks API."
---

# MinerU mineru-4.1.5-released

MinerU 4.1.5 fixes parse-path normalization and improves filename handling across the CLI and Tasks API.

- Relative paths, hidden directories, and Windows-style paths now use the same extension and tier validation. Native CSV inputs can no longer bypass `mineru-kit parse` quality-tier validation. Refs #5711.
- Tasks API filenames are validated as basenames; valid hidden, Unicode, and literal percent-encoded names retain their identity through API and Router execution.
- `file_parse` preserves filename suffixes and handles duplicate names consistently.
- `mineru-kit hardware info` now displays its report in English.

Upgrade with `pip install -U "mineru==4.1.5"`.

Full changes: https://github.com/opendatalab/MinerU/compare/mineru-4.1.4-released...mineru-4.1.5-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.5-released` · 2026-11-03 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.5-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
