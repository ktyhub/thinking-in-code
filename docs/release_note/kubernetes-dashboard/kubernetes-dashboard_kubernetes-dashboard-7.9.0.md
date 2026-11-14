---
title: "kubernetes-dashboard kubernetes-dashboard-7.9.0"
project: "kubernetes-dashboard"
repo: "kubernetes/dashboard"
tag: "kubernetes-dashboard-7.9.0"
published: "2024-10-22"
type: "release"
lang: "en"
summary: "This release adds the caching functionality to the Dashboard API. Once the cache is hydrated it significantly improves both responsiveness and memory usage of Dashboard on clusters with large amounts of resources."
---

# kubernetes-dashboard kubernetes-dashboard-7.9.0

## Important
This release adds the caching functionality to the Dashboard API. Once the cache is hydrated it significantly improves both responsiveness and memory usage of Dashboard on clusters with large amounts of resources. You can find more information in the [design doc](https://github.com/kubernetes/dashboard/blob/release/v7.9.0/docs/design/cache.md) and new cache-related arguments added to the [API module](https://github.com/kubernetes/dashboard/blob/release/v7.9.0/docs/common/arguments.md). If you have any questions, feel free to reach out to us through the SIG-UI Slack channel or GitHub discussions.

## What's Changed
* chore(deps): bump github.com/air-verse/air from 1.60.0 to 1.61.0 in /modules/common/tools by @dependabot in https://github.com/kubernetes/dashboard/pull/9515
* chore(deps): bump github.com/emicklei/go-restful-openapi/v2 from 2.10.2 to 2.11.0 in /modules/api by @dependabot in https://github.com/kubernetes/dashboard/pull/9519
* chore(deps-dev): bump typescript-eslint modules to 8.8.0 by @shu-mutou in https://github.com/kubernetes/dashboard/pull/9359
* chore(deps-dev): bump @typescript-eslint/eslint-plugin from 7.17.0 to 8.9.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9522
* chore(deps): bump dset from 3.1.3 to 3.1.4 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9523
* chore(deps-dev): bump husky from 9.1.4 to 9.1.6 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9508
* chore(deps): bump core-js from 3.38.0 to 3.38.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9509
* chore(deps-dev): bump sass from 1.77.8 to 1.79.5 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9517
* chore(deps-dev): bump wait-on from 7.2.0 to 8.0.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9510
* chore(deps-dev): bump webpack-dev-server from 5.0.4 to 5.1.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9512
* chore(deps-dev): bump concurrently from 8.2.2 to 9.0.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9513
* chore(deps-dev): bump @babel/register from 7.24.6 to 7.25.7 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9505
* chore(deps-dev): bump @babel/preset-env from 7.25.3 to 7.25.8 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9518
* chore(deps): bump github.com/air-verse/air from 1.61.0 to 1.61.1 in /modules/common/tools by @dependabot in https://github.com/kubernetes/dashboard/pull/9524
* chore(deps): bump github.com/prometheus/client_golang from 1.20.4 to 1.20.5 in /modules/api by @dependabot in https://github.com/kubernetes/dashboard/pull/9525
* chore(deps-dev): bump stylelint from 16.9.0 to 16.10.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9526
* chore(deps-dev): bump @graphql-mesh/runtime from 0.103.6 to 0.103.7 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9527
* chore(deps-dev): bump @types/node from 22.7.4 to 22.7.5 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9529
* chore(deps-dev): bump jest-preset-angular from 14.2.2 to 14.2.4 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9531
* chore(deps-dev): bump @graphql-mesh/transform-replace-field from 0.102.5 to 0.102.6 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9530
* chore(deps-dev): bump jasmine-core from 5.2.0 to 5.4.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9535
* chore(deps-dev): bump @typescript-eslint/parser from 8.8.0 to 8.9.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9532
* chore(deps-dev): bump del from 7.1.0 to 8.0.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9533
* chore(deps): bump tslib from 2.6.3 to 2.8.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9543
* chore(deps): bump ace-builds from 1.35.4 to 1.36.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9539
* chore(deps-dev): bump @babel/core from 7.25.2 to 7.25.8 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9541
* chore(deps-dev): bump @types/jest from 29.5.12 to 29.5.13 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9544
* chore(deps-dev): bump @graphql-mesh/runtime from 0.103.7 to 0.103.8 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9542
* chore(deps-dev): bump sass from 1.79.5 to 1.80.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9546
* chore(deps-dev): bump @types/node from 22.7.5 to 22.7.6 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9540
* chore(deps-dev): bump @graphql-mesh/openapi from 0.106.8 to 0.107.1 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9545
* chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.9.0 to 8.10.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9551
* chore(deps-dev): bump sass from 1.80.1 to 1.80.2 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9552
* chore(deps-dev): bump lint-staged from 15.2.9 to 15.2.10 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9553
* chore(deps-dev): bump @graphql-mesh/transform-replace-field from 0.102.6 to 0.102.7 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9549
* chore(deps-dev): bump @typescript-eslint/parser from 8.9.0 to 8.10.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9550
* chore(deps-dev): bump sass from 1.80.2 to 1.80.3 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9556
* chore(deps-dev): bump @types/node from 22.7.6 to 22.7.7 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9557
* chore(deps): bump ace-builds from 1.36.2 to 1.36.3 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9559
* chore(deps-dev): bump @typescript-eslint/parser from 8.10.0 to 8.11.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9560
* chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.10.0 to 8.11.0 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9561
* chore(deps-dev): bump @types/node from 22.7.7 to 22.7.8 in /modules/web by @dependabot in https://github.com/kubernetes/dashboard/pull/9558
* feat(client): add optional in-memory cache to client by @floreks in https://github.com/kubernetes/dashboard/pull/9521
* fix: the divisor field in resourceFieldRefs should be a string by @elohmeier in https://github.com/kubernetes/dashboard/pull/9548
* chore: release v7.9.0 by @maciaszczykm in https://github.com/kubernetes/dashboard/pull/9562

## New Contributors
* @elohmeier made their first contribution in https://github.com/kubernetes/dashboard/pull/9548

**Full Changelog**: https://github.com/kubernetes/dashboard/compare/kubernetes-dashboard-7.8.0...kubernetes-dashboard-7.9.0

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
docker.io/kubernetesui/dashboard-api:1.10.0
docker.io/kubernetesui/dashboard-auth:1.2.1
docker.io/kubernetesui/dashboard-metrics-scraper:1.2.1
docker.io/kubernetesui/dashboard-web:1.5.1
```

---

> **Source** [kubernetes/dashboard](https://github.com/kubernetes/dashboard) · `kubernetes-dashboard-7.9.0` · 2024-10-22 · [upstream release](https://github.com/kubernetes-retired/dashboard/releases/tag/kubernetes-dashboard-7.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
