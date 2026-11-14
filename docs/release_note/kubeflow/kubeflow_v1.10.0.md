---
title: "kubeflow v1.10.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.10.0"
version: "v1.10.0"
published: "2025-03-25"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.10.0."
---

# kubeflow v1.10.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.10.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.10/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Significant Changes

* feat: update notebook server images by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7687
* chore: migrate docker images to ghcr by @ederign and @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7706

## Features

* feat(crud-web-apps): Add Prometheus metrics by @rgildein in https://github.com/kubeflow/kubeflow/pull/7634
* feat(central-dashboard): Add Prometheus metrics with prom-client by @rgildein in https://github.com/kubeflow/kubeflow/pull/7639
* feat: use rootless base image for nb-controller and pod-default by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7686
* feat: update gaudi notebooks to version 1.19.2 by @tkatila in https://github.com/kubeflow/kubeflow/pull/7680

## Fixes

* fix: running code-server notebook behind proxy by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7658
* fix: add container securityContext to profile-controller and kfam by @biswassri in https://github.com/kubeflow/kubeflow/pull/7669

## Code Health

* chore: update node in crud-web-apps from 12 to 16 by @tariq-hasan in https://github.com/kubeflow/kubeflow/pull/7637
* fix: stop using gcr.io registry for kube-rbac-proxy by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7678
* Remove unused files by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7643
* Improve README and GitHub issue templates by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7642

## New Contributors
* @rgildein made their first contribution in https://github.com/kubeflow/kubeflow/pull/7634
* @tariq-hasan made their first contribution in https://github.com/kubeflow/kubeflow/pull/7637

**Full Changelog**: https://github.com/kubeflow/kubeflow/compare/v1.9.2...v1.10.0

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.10.0` · 2025-03-25 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
