---
title: "kubernetes-dashboard kubernetes-dashboard-7.11.0"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.11.0"
published: "2025-03-03"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.10.5...kubernetes-dashboard-7.11.0"
---

# kubernetes-dashboard kubernetes-dashboard-7.11.0

## What's Changed
* chore(deps-dev): bump prettier from 3.5.1 to 3.5.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9989
* chore(deps-dev): bump ts-jest from 29.2.5 to 29.2.6 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9990
* chore(deps-dev): bump @graphql-mesh/openapi from 0.108.22 to 0.108.23 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9991
* chore(deps): bump ngx-cookie-service from 19.1.0 to 19.1.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9992
* chore(deps): bump ace-builds from 1.38.0 to 1.39.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9993
* feat: Pod Disruption Budget API by @maciaszczykm in https://github.com/kubernetes/dashboard/pull/10009
* chore(chart): release 7.11.0 by @maciaszczykm in https://github.com/kubernetes/dashboard/pull/10011

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.10.5...kubernetes-dashboard-7.11.0

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
docker.io/kubernetesui/dashboard-api:1.11.0
docker.io/kubernetesui/dashboard-auth:1.2.3
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.2
docker.io/kubernetesui/dashboard-web:1.6.2
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.11.0` · 2025-03-03 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
