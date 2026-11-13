---
title: "minikube v1.33.0-beta.0"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.33.0-beta.0"
published: "2024-03-26"
type: "pre"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.33.0-beta.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.33.0-beta.0 - 2024-03-26

Features:
* Support multi-control plane - HA clusters `--ha` [#17909](https://github.com/kubernetes/minikube/pull/17909)
* Addon gvisor: Add arm64 support [#18063](https://github.com/kubernetes/minikube/pull/18063) [#18453](https://github.com/kubernetes/minikube/pull/18453)
* New Addon: YAKD - Kubernetes Dashboard addon [#17775](https://github.com/kubernetes/minikube/pull/17775)

Minor Improvements:
* Addon auto-pause: Remove memory leak & add configurable interval [#17936](https://github.com/kubernetes/minikube/pull/17936)
* image build: Add `docker.io/library` to image short names [#16214](https://github.com/kubernetes/minikube/pull/16214)
* cp: Create directory if not present [#17715](https://github.com/kubernetes/minikube/pull/17715)
* Move errors getting logs into log output itself [#18007](https://github.com/kubernetes/minikube/pull/18007)
* Add default sysctls to allow privileged ports with no capabilities [#18421](https://github.com/kubernetes/minikube/pull/18421)
* Include extended attributes in preload tarballs [#17829](https://github.com/kubernetes/minikube/pull/17829)
* Apply `kubeadm.applyNodeLabels` label to all nodes [#16416](https://github.com/kubernetes/minikube/pull/16416)
* Limit driver status check to 20s [#17553](https://github.com/kubernetes/minikube/pull/17553)
* Include journalctl logs if systemd service fails to start [#17659](https://github.com/kubernetes/minikube/pull/17659)
* ISO: Add CONFIG_DM_MULTIPATH [#18277](https://github.com/kubernetes/minikube/pull/18277)
* ISO: Add CONFIG_QFMT_V2 for arm64 [#17991](https://github.com/kubernetes/minikube/pull/17991)
* ISO: Add CONFIG_CEPH_FS for arm64 [#18213](https://github.com/kubernetes/minikube/pull/18213)
* ISO: Add CONFIG_BPF for arm64 [#17206](https://github.com/kubernetes/minikube/pull/17206)

Bugs:
* Fix "Failed to enable container runtime: sudo systemctl restart cri-docker" [#17907](https://github.com/kubernetes/minikube/pull/17907)
* Fix containerd redownloading existing images on start [#17671](https://github.com/kubernetes/minikube/pull/17671)
* Fix kvm2 not detecting containerd preload [#17658](https://github.com/kubernetes/minikube/pull/17658)
* Fix modifying Docker binfmt config [#17830](https://github.com/kubernetes/minikube/pull/17830)
* Fix auto-pause addon [#17866](https://github.com/kubernetes/minikube/pull/17866)
* Fix not using preload with overlayfs storage driver [#18333](https://github.com/kubernetes/minikube/pull/18333)
* Fix image repositories not allowing subdomains with numbers [#17496](https://github.com/kubernetes/minikube/pull/17496)
* Fix stopping cluster when using kvm2 with containerd [#17967](https://github.com/kubernetes/minikube/pull/17967)
* Fix starting more than one cluster on kvm2 arm64 [#18241](https://github.com/kubernetes/minikube/pull/18241)
* Fix starting kvm2 clusters using Linux on arm64 Mac [#18239](https://github.com/kubernetes/minikube/pull/18239)
* Fix displaying error when deleting non-existing cluster [#17713](https://github.com/kubernetes/minikube/pull/17713)
* Fix no-limit not being respected on restart [#17598](https://github.com/kubernetes/minikube/pull/17598)
* Fix not applying `kubeadm.applyNodeLabels` label to nodes added after inital start [#16416](https://github.com/kubernetes/minikube/pull/16416)
* Fix logs delimiter output [#17734](https://github.com/kubernetes/minikube/pull/17734)

Version Upgrades:
* Bump Kubernetes version default: v1.29.3 and latest: v1.30.0-beta.0 [#17786](https://github.com/kubernetes/minikube/pull/17786)
* Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.11 to 1.5.15 [#17595](https://github.com/kubernetes/minikube/pull/17595) [#17847](https://github.com/kubernetes/minikube/pull/17847) [#18165](https://github.com/kubernetes/minikube/pull/18165) [#18431](https://github.com/kubernetes/minikube/pull/18431)
* Addon gcp-auth: Update k8s-minikube/gcp-auth-webhook image from v0.1.0 to v0.1.2 [#18222](https://github.com/kubernetes/minikube/pull/18222) [#18384](https://github.com/kubernetes/minikube/pull/18384)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.20.1 to v0.23.0 [#17586](https://github.com/kubernetes/minikube/pull/17586) [#17846](https://github.com/kubernetes/minikube/pull/17846) [#18320](https://github.com/kubernetes/minikube/pull/18320)
* Addon ingress: Update ingress-nginx/controller image from v1.9.4 to v1.10.0 [#17848](https://github.com/kubernetes/minikube/pull/17848) [#18166](https://github.com/kubernetes/minikube/pull/18166) [#18284](https://github.com/kubernetes/minikube/pull/18284)
* Addon inspektor-gadget: Update inspektor-gadget/inspektor-gadget image from v0.22.0 to v0.26.0 [#17740](https://github.com/kubernetes/minikube/pull/17740) [#17885](https://github.com/kubernetes/minikube/pull/17885) [#18169](https://github.com/kubernetes/minikube/pull/18169) [#18358](https://github.com/kubernetes/minikube/pull/18358)
* Addon istio-provisioner: Update istio/operator image from 1.19.3 to 1.21.0 [#17651](https://github.com/kubernetes/minikube/pull/17651) [#17777](https://github.com/kubernetes/minikube/pull/17777) [#17957](https://github.com/kubernetes/minikube/pull/17957) [#18168](https://github.com/kubernetes/minikube/pull/18168) [#18429](https://github.com/kubernetes/minikube/pull/18429)
* Addon kong: Update kong image from 3.4.2 to 3.6.1 [#17605](https://github.com/kubernetes/minikube/pull/17605) [#18200](https://github.com/kubernetes/minikube/pull/18200) [#18350](https://github.com/kubernetes/minikube/pull/18350)
* Addon kubevirt: Update bitnami/kubectl image from 1.24.7 to 1.29.3 [#18170](https://github.com/kubernetes/minikube/pull/18170) [#18187](https://github.com/kubernetes/minikube/pull/18187) [#18427](https://github.com/kubernetes/minikube/pull/18427)
* Addon metrics-server: Update metrics-server/metrics-server image from v0.6.4 to v0.7.0 [#18051](https://github.com/kubernetes/minikube/pull/18051)
* Addon nvidia-device-plugin: Update nvidia/k8s-device-plugin image from v0.14.2 to v0.14.5 [#17623](https://github.com/kubernetes/minikube/pull/17623) [#18171](https://github.com/kubernetes/minikube/pull/18171) [#18283](https://github.com/kubernetes/minikube/pull/18283)
* Addon registry: Update k8s-minikube/kube-registry-proxy image from 0.0.5 to 0.0.6 [#18454](https://github.com/kubernetes/minikube/pull/18454)
* CNI: Update calico from v3.26.3 to v3.27.0 [#17644](https://github.com/kubernetes/minikube/pull/17644) [#17824](https://github.com/kubernetes/minikube/pull/17824)
* CNI: Update cilium from v1.12.3 to v1.15.1 [#18259](https://github.com/kubernetes/minikube/pull/18259)
* CNI: Update flannel from v0.22.3 to v0.24.4 [#17837](https://github.com/kubernetes/minikube/pull/17837) [#17975](https://github.com/kubernetes/minikube/pull/17975) [#18014](https://github.com/kubernetes/minikube/pull/18014) [#18500](https://github.com/kubernetes/minikube/pull/18500)
* CNI: Update kindnetd from v20230809-80a64d96 to v20240202-8f1494ea [#18167](https://github.com/kubernetes/minikube/pull/18167)
* Kicbase/ISO: Update buildkit from v0.12.3 to v0.13.0 [#17738](https://github.com/kubernetes/minikube/pull/17738) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update cni-plugins from v1.3.0 to v1.4.1 [#17761](https://github.com/kubernetes/minikube/pull/17761) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update containerd from v1.7.8 to v1.7.14 [#17634](https://github.com/kubernetes/minikube/pull/17634) [#17711](https://github.com/kubernetes/minikube/pull/17711) [#17765](https://github.com/kubernetes/minikube/pull/17765) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update docker from 24.0.7 to 25.0.4 [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update Go from 1.21.3 to 1.22.1 [#17619](https://github.com/kubernetes/minikube/pull/17619) [#17760](https://github.com/kubernetes/minikube/pull/17760) [#17953](https://github.com/kubernetes/minikube/pull/17953) [#18197](https://github.com/kubernetes/minikube/pull/18197) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update nerdctl from 1.6.2 to 1.7.4 [#17565](https://github.com/kubernetes/minikube/pull/17565) [#17703](https://github.com/kubernetes/minikube/pull/17703) [#17806](https://github.com/kubernetes/minikube/pull/17806) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase/ISO: Update runc from v1.1.9 to v1.1.12 [#17581](https://github.com/kubernetes/minikube/pull/17581) [#18020](https://github.com/kubernetes/minikube/pull/18020) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* Kicbase: Update nerdctld from 0.2.0 to 0.5.1 [#17764](https://github.com/kubernetes/minikube/pull/17764) [#17857](https://github.com/kubernetes/minikube/pull/17857)
* Kicbase: Update ubuntu:jammy from 20231004 to 20240227 [#17719](https://github.com/kubernetes/minikube/pull/17719) [#17822](https://github.com/kubernetes/minikube/pull/17822) [#18244](https://github.com/kubernetes/minikube/pull/18244) [#18375](https://github.com/kubernetes/minikube/pull/18375)
* ISO: Update cri-o from v1.24.1 to v1.29.1 [#18020](https://github.com/kubernetes/minikube/pull/18020)

For a more detailed changelog, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- Alberto Faria
- Anders F Björklund
- Blaine Gardner
- Camille Clayton
- Chase, Justin M
- Dani
- Eng Zer Jun
- Francis Laniel
- Jan Klippel
- Jeff MAURY
- Jin Li
- Jongwoo Han
- Marc Nuri
- Marcell Martini
- Marcus Dunn
- Mark Moretto
- Martin Jirku
- Medya Ghazizadeh
- Nir Soffer
- Predrag Rogic
- Pris Nasrat
- Raiden Shogun
- Sandipan Panda
- Sonu Kumar Singh
- Steven Powell
- Tarishi Jain
- Timothée Ravier
- Yuri Astrakhan
- andy
- chahatjaink
- coderrick
- joaquimrocha
- lixin18
- ljtian
- mahmut
- mattrobinsonsre
- prnvkv
- shixiuguo
- sunyuxuan
- sunyuxuna
- syxunion
- tianlj
- zdxgs
- zjx20

Thank you to our PR reviewers for this release!

- spowelljr (55 comments)
- medyagh (27 comments)
- afbjorklund (14 comments)
- liangyuanpeng (11 comments)
- prezha (4 comments)
- ComradeProgrammer (3 comments)
- acumino (2 comments)
- aiyijing (2 comments)
- Fenrur (1 comments)
- allenhaozi (1 comments)
- dharmit (1 comments)
- maximiliankolb (1 comments)
- neolit123 (1 comments)

Thank you to our triage members for this release!

- afbjorklund (70 comments)
- caerulescens (37 comments)
- T-Lakshmi (31 comments)
- spowelljr (22 comments)
- kundan2707 (20 comments)

Check out our [contributions leaderboard](https://minikube.sigs.k8s.io/docs/contrib/leaderboard/v1.33.0-beta.0/) for this release!

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

darwin-amd64: `ba00e508d6694f8e792bf5f238f5609407f1862f4fd8c0e08d1de9319b7131d5`
darwin-arm64: `7a672fa0a266d0c649d114b2135ee6222d8366bc0ac87e2fafb4c714e20b26a3`
linux-amd64: `e1c32fb33b4fe35f719b52309f8d981392ad7672f9fef3307d188f004aee5a2d`
linux-arm: `7724724767ba1f144605d4289c098e5fcd4fcc55be0876d77591d05f43f22876`
linux-arm64: `fa09cb8e228711e557a0f933e819c2cea98bc96749a4c77635a341d0ed530163`
linux-ppc64le: `6f013e03419d8c5149e1998a1f492e1693d780e883aeb37325f0cc42854cccd5`
linux-s390x: `1ec274865030a0b13d191d41e53c66be3f047a34e30c8fa637e74aa7cff31c71`
windows-amd64.exe: `74fbadfb00a7a1ecfa2a24ea2ee77997a41a6cb61e797b6c62a1d28558c61260`

## ISO Checksums

amd64: `bd573e1185f33b0dded06f42afb00c63f8e55e4fe0af1a00570ab24e59899bec`  
arm64: `2947e46a26ae53c72d474a72c285c8833f545b630b8a98b268128d69c615fff4`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.33.0-beta.0` · 2024-03-26 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.33.0-beta.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
