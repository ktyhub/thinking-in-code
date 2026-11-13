---
title: "kubernetes-dashboard kubernetes-dashboard-7.11.1"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.11.1"
published: "2025-03-05"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.11.0...kubernetes-dashboard-7.11.1"
---

# kubernetes-dashboard kubernetes-dashboard-7.11.1

## What's Changed
* fix: PDB GQL schema by @maciaszczykm in https://github.com/kubernetes/dashboard/pull/10013
* fix(client): GVR core resources caching by @floreks in https://github.com/kubernetes/dashboard/pull/10014

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.11.0...kubernetes-dashboard-7.11.1

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
docker.io/kubernetesui/dashboard-api:1.11.1
docker.io/kubernetesui/dashboard-auth:1.2.4
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.2
docker.io/kubernetesui/dashboard-web:1.6.2
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.11.1` · 2025-03-05 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
