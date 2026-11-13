---
title: "grafana v13.2.4"
project: "grafana"
repo: "grafana/grafana"
tag: "v13.2.4"
published: "2026-10-13"
type: "patch"
lang: "en"
summary: "Download page What's new highlights"
---

# grafana v13.2.4

[Download page](https://grafana.com/grafana/download/13.2.4)
[What's new highlights](https://grafana.com/docs/grafana/latest/whatsnew/)

### Security

- Security: Fix CVE-2026-15577
- Security: Fix CVE-2026-33374
- Security: Fix CVE-2026-93294
- Security: Fix CVE-2026-95502

### Features and enhancements

- **Alerting:** Strip sensitive headers from oauth2 cross-host redirects [#134433](https://github.com/grafana/grafana/pull/134433), [@JacobsonMT](https://github.com/JacobsonMT)
- **Dashboard:** Fall back when collection deletion is unsupported [#134224](https://github.com/grafana/grafana/pull/134224), [@bestend](https://github.com/bestend)
- **Git Sync:** Clarify repository links for pure Git [#134253](https://github.com/grafana/grafana/pull/134253), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Allow resource previews in unsynced folders [#134391](https://github.com/grafana/grafana/pull/134391), [@grafana-writer[bot]](https://github.com/grafana-writer[bot])
- **Provisioning:** Reject invalid resource names before API calls [#133776](https://github.com/grafana/grafana/pull/133776), [@grafana-writer[bot]](https://github.com/grafana-writer[bot])
- **Provisioning:** Show last checked time in Pull status [#134483](https://github.com/grafana/grafana/pull/134483), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Skip previews for pull requests from forks [#133799](https://github.com/grafana/grafana/pull/133799), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Stop PR previews when refs disappear [#133855](https://github.com/grafana/grafana/pull/133855), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Support legacy paths and diagnose missing source annotations [#133779](https://github.com/grafana/grafana/pull/133779), [@grafana-writer[bot]](https://github.com/grafana-writer[bot])
- **Provisioning:** write terminal sync status back to repository on early sync-job failures and Respect Git Sync polling intervals after unchanged refs [#134478](https://github.com/grafana/grafana/pull/134478), [@mustafasencer](https://github.com/mustafasencer)

### Bug fixes

- **CVE-2026-92539:** IAM: Fix: SCIM (Enterprise)

---

> **Source** [grafana/grafana](https://github.com/grafana/grafana) · `v13.2.4` · 2026-10-13 · [upstream release](https://github.com/grafana/grafana/releases/tag/v13.2.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
