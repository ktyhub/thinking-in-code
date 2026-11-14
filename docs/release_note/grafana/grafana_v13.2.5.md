---
title: "grafana v13.2.5"
project: "grafana"
repo: "grafana/grafana"
tag: "v13.2.5"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "Security: Fix CVE-2026-100105 · Security: Fix CVE-2026-103506 · Security: Fix CVE-2026-88858 · Security: Fix CVE-2026-88967"
---

# grafana v13.2.5

[Download page](https://grafana.com/grafana/download/13.2.5)
[What's new highlights](https://grafana.com/docs/grafana/latest/whatsnew/)

### Security

- Security: Fix CVE-2026-100105
- Security: Fix CVE-2026-103506
- Security: Fix CVE-2026-88858
- Security: Fix CVE-2026-88967

### Features and enhancements

- **Git Sync:** Ignore hidden paths in repository scans and diffs [#135028](https://github.com/grafana/grafana/pull/135028), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Default save from a branch preview to the previewed branch [#135174](https://github.com/grafana/grafana/pull/135174), [@Clarity-89](https://github.com/Clarity-89)
- **Provisioning:** Never replace the repository root folder during incremental sync [#135463](https://github.com/grafana/grafana/pull/135463), [@ferruvich](https://github.com/ferruvich)

### Bug fixes

- **Plugins:** Don't report loaded plugins as not registered when a request times out [#135665](https://github.com/grafana/grafana/pull/135665), [@leventebalogh](https://github.com/leventebalogh)
- **Provisioning:** Fix PR dashboard previews when served from a sub-path [#135559](https://github.com/grafana/grafana/pull/135559), [@gustaff-weldon](https://github.com/gustaff-weldon)

---

> **Source** [grafana/grafana](https://github.com/grafana/grafana) · `v13.2.5` · 2026-10-27 · [upstream release](https://github.com/grafana/grafana/releases/tag/v13.2.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
