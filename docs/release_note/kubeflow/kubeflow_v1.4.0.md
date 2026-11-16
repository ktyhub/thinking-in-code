---
title: "kubeflow v1.4.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.4.0"
version: "v1.4.0"
published: "2021-10-11"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.4.0."
---

# kubeflow v1.4.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.4.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.4/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Web Apps

* Migrate to Angular 12 from 8: https://github.com/kubeflow/kubeflow/pull/6004 @DavidSpek 
* Internationalization progress:
    * Internationalization to web apps https://github.com/kubeflow/kubeflow/pull/5880 @wg102, @Jose-Matsuda
    * Use Angular's i18n solution https://github.com/kubeflow/kubeflow/pull/6065 @kimwnasptd 

## Central Dashboard

* Namespaced menu items https://github.com/kubeflow/kubeflow/pull/5995 @toshi-k
* Make it possible to add Namespaced menu items #5871 @toshi-k 
* Scrollable side-bar https://github.com/kubeflow/kubeflow/pull/5964 @toshi-k
* Add support for Models web app https://github.com/kubeflow/kubeflow/pull/6085 @kimwnasptd 

## Jupyter Web App

* Jupyter web app fix for autoscaling GPU nodegroups https://github.com/kubeflow/kubeflow/pull/6171  @kimwnasptd
* Fix limits calculation when limitFactor is none in Jupyter web app #6058 @kimwnasptd 
* Make jupyter-web-app parse workspace volume MountPath #5952 @anencore94 
* JWA: Don't override assets with logos ConfigMap #5942 @kimwnasptd 
* Add fonts as assets to service #5691 @saffaalvi @wg102 
* The number of gpu must be set as string #5891 @juliusvonkohout 

## Notebook Controller

* Remove virtualservice timeout to prevent websocket disconnect #6126 @abe-hpe 
* Correct missing predicates in controller watches#5873 @filintod 
* Improve the README of the example Notebook servers https://github.com/kubeflow/kubeflow/pull/6165 @thesuperzapper 

## TensorBoard Controller
* tensorboard-controller: fix binding issue #5925 @DavidSpek 

## Admission Webhook (PodDefaults)

* Bump Golang version for PodDefaults, TensorBoard Controller and KFAM https://github.com/kubeflow/kubeflow/pull/6180 @kimwnasptd 
* Use namespace from Admission Review in PodDefaults https://github.com/kubeflow/kubeflow/pull/6052 @henrysecond1 
* Add support for ServiceAccountName and AutomountServiceAccountName to PodDefaults #5939 @hopper-signifyd 

## Other Changes

* Add kustomize tests in CI/CD https://github.com/kubeflow/kubeflow/pull/5919 @DavidSpek 
* Format checks for the Volumes web app https://github.com/kubeflow/kubeflow/pull/5820 @kimwnasptd 
* Make i18n work with prefixes https://github.com/kubeflow/kubeflow/pull/6034 @kimwnasptd 
* Allow user to add/delete labels to user namespace using ConfigMap #5761 @zijianjoy

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.4.0` · 2021-10-11 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
