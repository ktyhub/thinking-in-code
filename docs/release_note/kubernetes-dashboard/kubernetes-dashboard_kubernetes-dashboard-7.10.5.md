---
title: "kubernetes-dashboard kubernetes-dashboard-7.10.5"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.10.5"
published: "2025-02-25"
type: "release"
lang: "en"
summary: "feat: add restart option for DaemonSets & StatefulSets · fix: workload charts are black for certain languages"
---

# kubernetes-dashboard kubernetes-dashboard-7.10.5

## What's Changed
* feat: add restart option for DaemonSets & StatefulSets by @avanish23 in https://github.com/kubernetes/dashboard/pull/9866
* fix: workload charts are black for certain languages by @HanNguyen-dev in https://github.com/kubernetes/dashboard/pull/9067

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.10.1...kubernetes-dashboard-7.10.5

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
docker.io/kubernetesui/dashboard-api:1.10.3
docker.io/kubernetesui/dashboard-auth:1.2.3
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.2
docker.io/kubernetesui/dashboard-web:1.6.2
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.10.5` · 2025-02-25 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.10.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
