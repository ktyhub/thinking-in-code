---
title: "minikube v1.32.0-beta.0"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.32.0-beta.0"
published: "2023-10-28"
type: "pre"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.32.0-beta.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.32.0-beta.0 - 2023-10-27

Features:
* NVIDIA GPU support with new `--gpus=nvidia` flag for docker driver [#15927](https://github.com/kubernetes/minikube/pull/15927) [#17314](https://github.com/kubernetes/minikube/pull/17314) [#17488](https://github.com/kubernetes/minikube/pull/17488)
* New `kubeflow` addon [#17114](https://github.com/kubernetes/minikube/pull/17114)
* New `local-path-provisioner` addon [#15062](https://github.com/kubernetes/minikube/pull/15062)
* Kicbase: Add `no-limit` option to `--cpus` & `--memory` flags [#17491](https://github.com/kubernetes/minikube/pull/17491)

Minor Improvements:
* Hyper-V: Add memory validation for odd numbers [#17325](https://github.com/kubernetes/minikube/pull/17325)
* QEMU: Improve cpu type and IP detection [#17217](https://github.com/kubernetes/minikube/pull/17217)
* Mask http(s)_proxy password from startup output [#17116](https://github.com/kubernetes/minikube/pull/17116)
* `--delete-on-faliure` also recreates cluster for kubeadm failures [#16890](https://github.com/kubernetes/minikube/pull/16890)
* Addon auto-pause: Configure intervals using `--auto-pause-interval` [#17070](https://github.com/kubernetes/minikube/pull/17070)
* `--kubernetes-version` checks GitHub for version validation and improved error output for invalid versions [#16865](https://github.com/kubernetes/minikube/pull/16865)

Bugs:
* QEMU: Fix addons failing to enable [#17402](https://github.com/kubernetes/minikube/pull/17402)
* Fix downloading the wrong kubeadm images for k8s versions after minikube release [#17373](https://github.com/kubernetes/minikube/pull/17373)
* Fix enabling & disabling addons with non-existing cluster [#17324](https://github.com/kubernetes/minikube/pull/17324)
* Fix delete if container-runtime doesn't exist [#17347](https://github.com/kubernetes/minikube/pull/17347)
* Fix network not found not being detected on new Docker versions [#17323](https://github.com/kubernetes/minikube/pull/17323)
* Fix addon registry doesn't follow Minikube DNS domain name configuration (--dns-domain) [#15585](https://github.com/kubernetes/minikube/pull/15585)

Version Upgrades:
* Bump Kubernetes version default: v1.28.3 and latest: v1.28.3 [#17463](https://github.com/kubernetes/minikube/pull/17463)
* Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.9 to 1.5.11 [#17225](https://github.com/kubernetes/minikube/pull/17225) [#17259](https://github.com/kubernetes/minikube/pull/17259)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.19.0 to v0.20.1 [#17135](https://github.com/kubernetes/minikube/pull/17135) [#17365](https://github.com/kubernetes/minikube/pull/17365)
* Addon ingress: Update ingress-nginx/controller image from v1.8.1 to v1.9.3 [#17223](https://github.com/kubernetes/minikube/pull/17223) [#17297](https://github.com/kubernetes/minikube/pull/17297) [#17348](https://github.com/kubernetes/minikube/pull/17348) [#17421](https://github.com/kubernetes/minikube/pull/17421)
* Addon inspektor-gadget: Update inspektor-gadget image from v0.19.0 to v0.21.0 [#17176](https://github.com/kubernetes/minikube/pull/17176) [#17340](https://github.com/kubernetes/minikube/pull/17340)
* Addon istio-provisioner: Update istio/operator image from 1.12.2 to 1.19.3 [#17383](https://github.com/kubernetes/minikube/pull/17383) [#17436](https://github.com/kubernetes/minikube/pull/17436)
* Addon kong: Update kong image from 3.2 to 3.4.2 [#17485](https://github.com/kubernetes/minikube/pull/17485)
* Addon registry: Update registry image from 2.8.1 to 2.8.3 [#17382](https://github.com/kubernetes/minikube/pull/17382) [#17467](https://github.com/kubernetes/minikube/pull/17467)
* CNI: Update calico from v3.26.1 to v3.26.3 [#17363](https://github.com/kubernetes/minikube/pull/17363) [#17375](https://github.com/kubernetes/minikube/pull/17375)
* CNI: Update flannel from v0.22.1 to v0.22.3 [#17102](https://github.com/kubernetes/minikube/pull/17102) [#17263](https://github.com/kubernetes/minikube/pull/17263)
* CNI: Update kindnetd from v20230511-dc714da8 to v20230809-80a64d96 [#17233](https://github.com/kubernetes/minikube/pull/17233)
* Kicbase/ISO: Update buildkit from v0.11.6 to v0.12.2 [#17194](https://github.com/kubernetes/minikube/pull/17194)
* Kicbase/ISO: Update containerd from v1.7.3 to v1.7.7 [#17243](https://github.com/kubernetes/minikube/pull/17243) [#17466](https://github.com/kubernetes/minikube/pull/17466)
* Kicbase/ISO: Update crictl from v1.21.0 to v1.28.0 [#17240](https://github.com/kubernetes/minikube/pull/17240)
* Kicbase/ISO: Update docker from 24.0.4 to 24.0.6 [#17120](https://github.com/kubernetes/minikube/pull/17120) [#17207](https://github.com/kubernetes/minikube/pull/17207)
* Kicbase/ISO: Update nerdctl from 1.0.0 to 1.6.2 [#17145](https://github.com/kubernetes/minikube/pull/17145) [#17339](https://github.com/kubernetes/minikube/pull/17339) [#17434](https://github.com/kubernetes/minikube/pull/17434)
* Kicbase/ISO: Update runc from v1.1.7 to v1.1.9 [#17250](https://github.com/kubernetes/minikube/pull/17250)
* Kicbase: Bump ubuntu:jammy from 20230624 to 20231004 [#17086](https://github.com/kubernetes/minikube/pull/17086) [#17174](https://github.com/kubernetes/minikube/pull/17174) [#17345](https://github.com/kubernetes/minikube/pull/17345) [#17423](https://github.com/kubernetes/minikube/pull/17423)

For a more detailed changelog, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- Anders F Björklund
- Dobes Vandermeer
- Emmanuel Chee-zaram Okeke
- Jeff MAURY
- Judah Nouriyelian
- Medya Ghazizadeh
- OneEpitome
- Piotr Resztak
- Predrag Rogic
- Raghavendra Talur
- Raiden Shogun
- Renato Moutinho
- Renato Silva
- Seongbin Hong
- Steven Powell
- Tristan Rice
- Wiktor Zając
- aiyijing
- jeremylinux-github
- joaquimrocha
- mahmut
- rogermm
- sunyuxuan
- tianlijun
- weidong
- Товарищ программист

Thank you to our PR reviewers for this release!

- medyagh (38 comments)
- spowelljr (19 comments)
- aiyijing (2 comments)
- Lyllt8 (1 comments)
- afbjorklund (1 comments)
- andresmmujica (1 comments)

Thank you to our triage members for this release!

- afbjorklund (32 comments)
- rmsilva1973 (27 comments)
- pnasrat (25 comments)
- spowelljr (21 comments)
- megazone23 (11 comments)

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

windows-amd64.exe: `dbe833b8a9f25c9f3bcc4c71109ecae146d3d66ea475ced8d2794de0c101ceab`
darwin-amd64: `964b216dc4156b87cc570ee8f8ee5d0a90815fd100b11dcff6884fee2a945101`
darwin-arm64: `3d9f292645230e335149f7fde2168b420489456eeae101bffbecbb27b674b1dc`
linux-amd64: `820ead833eab8b3a589846df7543ad1104d3f7149b19c81d641a918d8232e025`
linux-arm: `f8655675c5cfad1b7186273c33c6acf2edbce98fbb3660d9d2ade9efc3ed8b82`
linux-arm64: `850cc265a10fa2611d954bae95e39462430c2a7f8ace52e793e166e5d7a873b1`
linux-ppc64le: `9e2d6f5aaaa3338b7e2dc38b1b07af323f2d6c07ea41dcfb494fd1045fc6481b`
linux-s390x: `d95cb3b0cf64b97aa1ea2ebed78baafcc75658e6ddf41a1efb48245e88f98ead`

## ISO Checksums

amd64: `ed147364e0270bcf60aefa3c324fa66103b4f524180d057ba0ecca2985d155ff`  
arm64: `b13f10cd24eb5a70a3cf6d00a43b3011a23174c4c4ef412eefddf2f036d8fc9e`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.32.0-beta.0` · 2023-10-28 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.32.0-beta.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
