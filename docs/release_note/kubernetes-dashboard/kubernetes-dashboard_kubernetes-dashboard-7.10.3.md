---
title: "kubernetes-dashboard kubernetes-dashboard-7.10.3"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.10.3"
published: "2025-01-30"
type: "release"
lang: "en"
summary: "chore(chart): further extend services configuration"
---

# kubernetes-dashboard kubernetes-dashboard-7.10.3

## What's Changed
* chore(chart): further extend services configuration by @floreks in https://github.com/kubernetes/dashboard/pull/9904

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.10.2...kubernetes-dashboard-7.10.3

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

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.10.3` · 2025-01-30 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.10.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
