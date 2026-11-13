---
title: "minikube v1.33.1"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.33.1"
published: "2024-05-13"
type: "patch"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.33.1

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.33.1 - 2024-05-13

Bugs:
* Fix `DNSSEC validation failed` errors [#18830](https://github.com/kubernetes/minikube/pull/18830)
* Fix `too many open files` errors [#18832](https://github.com/kubernetes/minikube/pull/18832)
* CNI cilium: Fix cilium pods failing to start-up [#18846](https://github.com/kubernetes/minikube/pull/18846)
* Addon ingress: Fix enable failing on arm64 machines using VM driver [#18779](https://github.com/kubernetes/minikube/pull/18779)
* Addon kubeflow: Fix some components missing arm64 images [#18765](https://github.com/kubernetes/minikube/pull/18765)

Version Upgrades:
* Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.15 to 1.5.17 [#18773](https://github.com/kubernetes/minikube/pull/18773) [#18811](https://github.com/kubernetes/minikube/pull/18811)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.23.1 to v0.23.2 [#18793](https://github.com/kubernetes/minikube/pull/18793)
* Addon ingress: Update ingress-nginx/controller image from v1.10.0 to v1.10.1 [#18756](https://github.com/kubernetes/minikube/pull/18756)
* Addon istio-provisioner: Update istio/operator image from 1.21.1 to 1.21.2 [#18757](https://github.com/kubernetes/minikube/pull/18757)
* Addon kubevirt: Update bitnami/kubectl image from 1.29.3 to 1.30.0 [#18711](https://github.com/kubernetes/minikube/pull/18711) [#18771](https://github.com/kubernetes/minikube/pull/18771)
* Addon nvidia-device-plugin: Update nvidia/k8s-device-plugin image from v0.14.5 to v0.15.0 [#18703](https://github.com/kubernetes/minikube/pull/18703)
* CNI cilium: Update from v1.15.1 to v1.15.3 [#18846](https://github.com/kubernetes/minikube/pull/18846)
* High Availability: Update kube-vip from 0.7.1 to v0.8.0 [#18774](https://github.com/kubernetes/minikube/pull/18774)
* Kicbase/ISO: Update docker from 26.0.1 to 26.0.2 [#18706](https://github.com/kubernetes/minikube/pull/18706)
* Kicbase: Bump ubuntu:jammy from 20240227 to 20240427 [#18702](https://github.com/kubernetes/minikube/pull/18702) [#18769](https://github.com/kubernetes/minikube/pull/18769) [#18804](https://github.com/kubernetes/minikube/pull/18804)

For a more detailed changelog, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- Bodhi Hu
- Jérémie Tarot
- Nir Soffer
- Predrag Rogic
- Steven Powell
- cuiyourong
- joaquimrocha

Thank you to our PR reviewers for this release!

- medyagh (9 comments)
- nirs (3 comments)
- llegolas (1 comments)
- spowelljr (1 comments)

Thank you to our triage members for this release!

- medyagh (6 comments)
- afbjorklund (5 comments)
- xcarolan (4 comments)
- nevotheless (3 comments)
- dasumner (2 comments)

Check out our [contributions leaderboard](https://minikube.sigs.k8s.io/docs/contrib/leaderboard/v1.33.1/) for this release!

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

darwin-amd64: `6e1c3911c39b8de6b3ca31287f55b4f07ef329cd4b9ed62bf08378c2975580df`
darwin-arm64: `7e623ec9b5764681bd91b272d833dddec94527277c342bc458242389dc8a224a`
linux-amd64: `386eb267e0b1c1f000f1b7924031557402fffc470432dc23b9081fc6962fd69b`
linux-arm: `bcf61a6b994cfc675f1dae63c30047163c848148104322fb8633fa38d035ec09`
linux-arm64: `0b6a17d230b4a605002981f1eba2f5aa3f2153361a1ab000c01e7a95830b40ba`
linux-ppc64le: `308edb467d72439f6e5d9b5824fa091a3cba02e63823b39f15b5e3f6b54cd94d`
linux-s390x: `e4007394de21dcb7f8913963b44ff01d896ed29eeea3857841457592fb40c693`
windows-amd64.exe: `a7e97b490db740eeb80d8ce15ee8db6dc9ea9e07e9adef2ea7ca74bb3e8d32e5`

## ISO Checksums

amd64: `faa5867d88b4fe80fa88f651f5abd9cda02fc15fdfa2153dfc1d4b0365938d42`  
arm64: `caa004bb66e46b496f5d28d82a78a72864e574df7b021c52a5d65b44f0128e03`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.33.1` · 2024-05-13 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.33.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
