---
title: "ray ray-2.59.1"
project: "ray"
repo: "ray-project/ray"
tag: "ray-2.59.1"
version: "ray-2.59.1"
published: "2026-11-04"
type: "release"
lang: "en"
summary: "The eMudhra intermediate CA keys were reported compromised on October 20, 2026\\. pip trusts its own vendored certifi bundle in addition to the system store, so updating OS ca-certificates alone doesn't protect pip. This…"
---

# ray ray-2.59.1

## Security fixes

### eMudhra intermediate CA compromise

The eMudhra intermediate CA keys were reported compromised on October 20, 2026\. pip trusts its own vendored certifi bundle in addition to the system store, so updating OS `ca-certificates` alone doesn't protect pip. This release moves every place Ray installs or bundles a CA bundle to the fixed releases:

- Docker images: pip 26.2.2 on every Python version, conda and site-packages certifi 2026.10.19, uv 0.13.4 (\#67295, \#67350, pick \#67487).  
- `virtualenv` 21.14.12, which bundles pip 26.2.2 for `runtime_env` virtualenvs. This also moves `packaging` to 26.3, `typing-extensions` to 4.16.0, `distlib` to 0.4.3 and `python-discovery` to 1.6.1 (\#67301, pick \#67487).  
- `certifi>=2026.10.19` floor in Ray's security requirements (\#67305, pick \#67487).  
- pip 26.2.2 and uv 0.13.4 in the Windows and macOS wheel builds (\#67298, pick \#67487). The shipped wheels don't vendor a CA bundle and are unaffected.

### aiohttp

- `aiohttp` 3.14.3 → 3.14.4 (and `yarl` 1.23.0 → 1.25.1) in the bundled runtime\_env agent dependencies, `ray[default]`, and the images. Fixes CVE-2026-111064, CVE-2026-111066 and GHSA-2g87-pp6c-29x5 (\#67304, pick \#67487; reported in \#67302).

## Bug fixes

### Ray Data

- Keep the pandas metadata on Arrow blocks readable by pandas. Dtype names that pandas can't parse are now written as \`object\`, so converting those blocks or files back to pandas no longer fails (\#67576,  pick \#67649).

###   Ray Serve

- Ingress request router deployments no longer keep proxies on the nodes they run on. Those nodes can now scale down normally (\#65824, pick \#67633).

## Contributors

Thanks to everyone who contributed to this release\!

@sai-miduthuri, @elliot-barn, @ramannanda9, @marwan116

---

> **Source** [ray-project/ray](https://github.com/ray-project/ray) · `ray-2.59.1` · 2026-11-04 · [upstream release](https://github.com/ray-project/ray/releases/tag/ray-2.59.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
