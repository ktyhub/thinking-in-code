---
title: "kubeflow v1.5.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.5.0"
version: "v1.5.0"
published: "2022-03-10"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.5.0."
---

# kubeflow v1.5.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.5.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.5/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Upgrade notes

1. Update the Jupyter web apps configmap with the new storage structure https://github.com/kubeflow/kubeflow/pull/6321
2. Notebook Controller is using different ENV Vars for culling https://github.com/kubeflow/kubeflow/blob/master/components/proposals/20220121-jupyter-notebook-idleness.md#upgrade-notes
3. The Profile Controller is adding different Katib metrics labels https://github.com/kubeflow/kubeflow/pull/6225

## Features

* notebooks: Extend Notebook Controller to expose idleness for Jupyter #6297 @athamark 
* jwa: Rework the Storage API of the web app #6321 @kimwnasptd 
* Change namespace label for Katib metrics collector injection #6225 @andreyvelich 
* Tell user to select a namespace to access namespaced menu item #6181 @toshi-k 
* frontend: Use responsive tables instead of cards #6316 @kimwnasptd 
* Fix(manifests): Upgrade rbac.authorization.k8s.io from v1beta1 to v1 #6261 @haoxins 
* Synchronize jupyter-web-application role with clusterrole #6241 @juliusvonkohout 

## Fixes

* Secure access to KFAM #6077 @DavidSpek  
* fix(backend): tensorboard-controller does not work because of missing permissions  #6216 @juliusvonkohout 
* fix(notebooks) make culling work with multi-user #5980 @LEDfan 
* notebooks: Graceful handling of events #6338 @kimwnasptd 
* notebooks: Fix endless restarts #6341 @kimwnasptd 
* Centraldashboard/add uncaughtexception handler #6203 @haoxins 
* fix dashboard sending malformed headers to kfam #6186 @thesuperzapper

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.5.0` · 2022-03-10 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
