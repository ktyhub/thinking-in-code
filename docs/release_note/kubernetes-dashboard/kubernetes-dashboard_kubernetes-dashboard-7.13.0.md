---
title: "kubernetes-dashboard kubernetes-dashboard-7.13.0"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.13.0"
published: "2025-05-28"
type: "release"
lang: "en"
summary: "fix: Statefulset restart not working · style: Various improvements to Dockerfiles · feat: add cache invalidation support based on Cache-Control header"
---

# kubernetes-dashboard kubernetes-dashboard-7.13.0

## What's Changed
* fix: Statefulset restart not working by @avanish23 in https://github.com/kubernetes/dashboard/pull/10089
* style: Various improvements to Dockerfiles by @jnoordsij in https://github.com/kubernetes/dashboard/pull/10088
* feat: add cache invalidation support based on Cache-Control header by @floreks in https://github.com/kubernetes/dashboard/pull/10205

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.12.0...kubernetes-dashboard-7.13.0

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
docker.io/kubernetesui/dashboard-api:1.12.0
docker.io/kubernetesui/dashboard-auth:1.3.0
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.2
docker.io/kubernetesui/dashboard-web:1.7.0
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.13.0` · 2025-05-28 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
