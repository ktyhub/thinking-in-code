---
title: "kubeflow v1.6.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.6.0"
version: "v1.6.0"
published: "2022-09-07"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.6.0."
---

# kubeflow v1.6.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.6.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.6/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Upgrade notes

* The project is using DockerHub hosted images instead of ECR ones https://github.com/kubeflow/kubeflow/pull/6548. Users will need to update their ovelays accordingly 

## Features

* Expose notebook idleness in Notebook management web app https://github.com/kubeflow/kubeflow/pull/6544 @kimwnasptd
* Notebook Controller QPS and Burst https://github.com/kubeflow/kubeflow/pull/6453 @mofanke
* Don't show Notebook groups if they don't have any images https://github.com/kubeflow/kubeflow/pull/6482 @haoxins
* Upgrade Kubebuilder for Profiles Controller https://github.com/kubeflow/kubeflow/pull/6491 @apo-ger

## Fixes

* Reload certificates in PodDefaults webhook https://github.com/kubeflow/kubeflow/pull/6581 @manolis-andr
* Notebooks controller and K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6374 @samuelvl
* PodDefaults and K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6459 @aaron-arellano
* TensorBoard and K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6406 @alembiewski
* Allow Notebook Controller to patch events https://github.com/kubeflow/kubeflow/pull/6523 @henrysecond1

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.6.0` · 2022-09-07 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
