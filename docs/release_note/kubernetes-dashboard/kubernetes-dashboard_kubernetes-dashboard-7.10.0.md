---
title: "kubernetes-dashboard kubernetes-dashboard-7.10.0"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.10.0"
published: "2024-10-31"
type: "release"
lang: "en"
summary: "Dependency updates"
---

# kubernetes-dashboard kubernetes-dashboard-7.10.0

## What's Changed
* fix(api): ssar resource kind name and resource updates by @floreks in https://github.com/kubernetes/dashboard/pull/9599
* fix(signin button): signin button is clickable when token is autofilled by browser by @lsq645599166 in https://github.com/kubernetes/dashboard/pull/9610
* feat: allow hiding "All namespaces" in namespaces dropdown list by @avanish23 in https://github.com/kubernetes/dashboard/pull/9547
* chore(chart): release 7.10.0 by @floreks in https://github.com/kubernetes/dashboard/pull/9621

<details>
<summary> Dependency updates </summary>

* chore(deps-dev): bump @babel/core from 7.25.8 to 7.25.9 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9565
* chore(deps-dev): bump @types/node from 22.7.8 to 22.7.9 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9569
* chore(deps): bump http-proxy-middleware from 2.0.6 to 2.0.7 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9574
* chore(deps-dev): bump @graphql-mesh/transform-replace-field from 0.102.7 to 0.102.9 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9578
* chore(deps-dev): bump @graphql-mesh/openapi from 0.107.1 to 0.107.3 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9575
* chore(deps-dev): bump @babel/preset-env from 7.25.8 to 7.25.9 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9564
* chore(deps-dev): bump @types/jest from 29.5.13 to 29.5.14 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9571
* chore(deps-dev): bump @graphql-mesh/runtime from 0.103.8 to 0.103.10 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9577
* chore(deps-dev): bump @babel/register from 7.25.7 to 7.25.9 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9570
* chore(deps-dev): bump sass from 1.80.3 to 1.80.4 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9587
* chore(deps): bump actions/setup-go from 5.0.2 to 5.1.0 by @dependabot in https://github.com/kubernetes/dashboard/pull/9592
* chore(deps-dev): bump cypress from 13.15.0 to 13.15.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9597
* chore(deps-dev): bump @graphql-mesh/runtime from 0.103.10 to 0.103.11 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9596
* chore(deps-dev): bump @graphql-mesh/transform-replace-field from 0.102.9 to 0.102.10 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9595
* chore(deps-dev): bump @graphql-mesh/openapi from 0.107.3 to 0.107.4 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9593
* chore(deps-dev): bump sass from 1.80.4 to 1.80.5 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9614
* chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.11.0 to 8.12.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9613
* chore(deps-dev): bump @babel/preset-env from 7.25.9 to 7.26.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9604
* chore(deps-dev): bump @typescript-eslint/parser from 8.11.0 to 8.12.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9612
* chore(deps-dev): bump @babel/core from 7.25.9 to 7.26.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9603
* chore(deps-dev): bump @types/node from 22.7.9 to 22.8.4 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9611

</details>


## New Contributors
* @lsq645599166 made their first contribution in https://github.com/kubernetes/dashboard/pull/9610
* @avanish23 made their first contribution in https://github.com/kubernetes/dashboard/pull/9547

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.9.0...kubernetes-dashboard-7.10.0

## Installation
```sh
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
```

## Compatibility
| Kubernetes version | 1.28 | 1.29 | 1.30 | 1.31 |
|--------------------|-----|-----|-----|-----|
| Compatibility            | ?   |   ?   |   ?    |   ✓    |

- `✓` Fully supported version range.
- `?` Due to breaking changes between Kubernetes API versions, some features might not work correctly in the Dashboard.

## Images
```
docker.io/kubernetesui/dashboard-api:1.10.1
docker.io/kubernetesui/dashboard-auth:1.2.2
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.1
docker.io/kubernetesui/dashboard-web:1.6.0
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.10.0` · 2024-10-31 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
