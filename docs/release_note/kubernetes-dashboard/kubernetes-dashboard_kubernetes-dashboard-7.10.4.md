---
title: "kubernetes-dashboard kubernetes-dashboard-7.10.4"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.10.4"
published: "2025-02-07"
type: "release"
lang: "en"
summary: "fix: use correct Kong service port for ingress based on TLS settings"
---

# kubernetes-dashboard kubernetes-dashboard-7.10.4

## What's Changed
* fix: use correct Kong service port for ingress based on TLS settings by @hamadodene in https://github.com/kubernetes/dashboard/pull/9863

## New Contributors
* @hamadodene made their first contribution in https://github.com/kubernetes/dashboard/pull/9863

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.10.3...kubernetes-dashboard-7.10.4

## Installation
```sh
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
```

## Compatibility
| Kubernetes version | 1.29 | 1.30 | 1.31 | 1.32 |
|--------------------|-----|-----|-----|-----|
| Compatibility            | ?   |   ?   |   ?    |   ✓    |

- `✓` Fully supported version range.
- `?` Due to breaking changes between Kubernetes API versions, some features might not work correctly in the Dashboard.

## Images
```
docker.io/kubernetesui/dashboard-api:1.10.2
docker.io/kubernetesui/dashboard-auth:1.2.3
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.2
docker.io/kubernetesui/dashboard-web:1.6.1
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.10.4` · 2025-02-07 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.10.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
