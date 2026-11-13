---
title: "minikube v1.33.0"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.33.0"
published: "2024-04-19"
type: "minor"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.33.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.33.0 - 2024-04-19

Features:
* Support multi-control plane - HA clusters `--ha` [#17909](https://github.com/kubernetes/minikube/pull/17909) [Tutorial](https://minikube.sigs.k8s.io/docs/tutorials/multi_control_plane_ha_clusters/)
* Add support for Kubernetes v1.30 [#18669](https://github.com/kubernetes/minikube/pull/18669)
* Support exposing clusterIP services via `minikube service` [#17877](https://github.com/kubernetes/minikube/pull/17877)
* Addon gvisor: Add arm64 support [#18063](https://github.com/kubernetes/minikube/pull/18063) [#18453](https://github.com/kubernetes/minikube/pull/18453)
* New Addon: YAKD - Kubernetes Dashboard addon [#17775](https://github.com/kubernetes/minikube/pull/17775)

Minor Improvements:
* Add active kubecontext to `minikube profile list` output [#17735](https://github.com/kubernetes/minikube/pull/17735)
* CNI calico: support kubeadm.pod-network-cidr [#18233](https://github.com/kubernetes/minikube/pull/18233)
* CNI bridge: Ensure pod communications are allowed [#16143](https://github.com/kubernetes/minikube/pull/16143)
* Addon auto-pause: Remove memory leak & add configurable interval [#17936](https://github.com/kubernetes/minikube/pull/17936)
* image build: Add `docker.io/library` to image short names [#16214](https://github.com/kubernetes/minikube/pull/16214)
* cp: Create directory if not present [#17715](https://github.com/kubernetes/minikube/pull/17715)
* Move errors getting logs into log output itself [#18007](https://github.com/kubernetes/minikube/pull/18007)
* Add default sysctls to allow privileged ports with no capabilities [#18421](https://github.com/kubernetes/minikube/pull/18421)
* Include extended attributes in preload tarballs [#17829](https://github.com/kubernetes/minikube/pull/17829)
* Apply `kubeadm.applyNodeLabels` label to all nodes [#16416](https://github.com/kubernetes/minikube/pull/16416)
* Limit driver status check to 20s [#17553](https://github.com/kubernetes/minikube/pull/17553)
* Include journalctl logs if systemd service fails to start [#17659](https://github.com/kubernetes/minikube/pull/17659)
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


Bugs:
* Fix unescaped local host regex [#18617](https://github.com/kubernetes/minikube/pull/18617)
* Fix regex on validateNetwork to support special characters [#18158](https://github.com/kubernetes/minikube/pull/18158)

Version Upgrades:
* Bump Kubernetes version default: v1.30.0 and latest: v1.30.0 [#18669](https://github.com/kubernetes/minikube/pull/18669)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.23.0 to 0.23.1 [#18517](https://github.com/kubernetes/minikube/pull/18517)
* Addon inspektor-gadget: Update inspektor-gadget image from v0.26.0 to v0.27.0 [#18588](https://github.com/kubernetes/minikube/pull/18588)
* Addon istio-provisioner: Update istio/operator image from 1.21.0 to 1.21.1 [#18644](https://github.com/kubernetes/minikube/pull/18644)
* Addon metrics-server: Update metrics-server/metrics-server image from v0.7.0 to v0.7.1 [#18551](https://github.com/kubernetes/minikube/pull/18551)
* CNI: Update calico from v3.27.0 to v3.27.3 [#18206](https://github.com/kubernetes/minikube/pull/18206)
* CNI: Update flannel from v0.24.4 to v0.25.1 [#18641](https://github.com/kubernetes/minikube/pull/18641)
* Kicbase/ISO: Update buildkit from v0.13.0 to v0.13.1 [#18566](https://github.com/kubernetes/minikube/pull/18566)
* Kicbase/ISO: Update containerd from v1.7.14 to v1.7.15 [#18621](https://github.com/kubernetes/minikube/pull/18621)
* Kicbase/ISO: Update cri-dockerd from v0.3.3 to v0.3.12 [#18585](https://github.com/kubernetes/minikube/pull/18585)
* Kicbase/ISO: Update crun from 1.14 to 1.14.4 [#18610](https://github.com/kubernetes/minikube/pull/18610)
* Kicbase/ISO: Update docker from 25.0.4 to 26.0.1 [#18485](https://github.com/kubernetes/minikube/pull/18485) [#18649](https://github.com/kubernetes/minikube/pull/18649)
* Kicbase/ISO: Update nerdctl from 1.7.4 to 1.7.5 [#18634](https://github.com/kubernetes/minikube/pull/18634)
* Kicbase: Update nerdctld from 0.5.1 to 0.6.0 [#18647](https://github.com/kubernetes/minikube/pull/18647)

For a more detailed changelog, including changes occurring in pre-release versions, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- Jan Klippel
- Jeff MAURY
- Jesse Hathaway
- Maxime Brunet
- Medya Ghazizadeh
- Paul Rey
- Predrag Rogic
- Skalador
- Steven Powell
- alessandrocapanna
- depthlending
- guangwu
- joaquimrocha
- nikitakurakin
- racequite
- shixiuguo
- skoenig
- sunyuxuan
- syxunion
- Товарищ программист

Thank you to our PR reviewers for this release!

- medyagh (5 comments)
- spowelljr (4 comments)
- Shubham82 (2 comments)

Thank you to our triage members for this release!

- afbjorklund (21 comments)
- T-Lakshmi (15 comments)
- Ritikaa96 (12 comments)
- kundan2707 (8 comments)
- medyagh (7 comments)

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

darwin-amd64: `3aa579e09014c25a1a8e813f3d003eff450a809a04f229d89cd8ed70de81f791`
darwin-arm64: `548994f025ed36f91b9a24ff282674b8534c4745535c0511bbbf3112a603a632`
linux-s390x: `b20e76e2f3c707e25de9e9acef30329959a30a4dfb3e6a71018179a6f96497ed`
linux-amd64: `4bfdc17f0dce678432d5c02c2a681c7a72921cb72aa93ccc00c112070ec5d2bc`
linux-arm: `70c1e67533f4866f2f27068a86c6b51341e1de7a130e04ec78eddacdefc57467`
linux-arm64: `d7afb43f87190331b2aee451eef0bae699c93d0acb7b57404cc6b6d3698033a7`
linux-ppc64le: `e54b521a962696fd07bc0be494a50430efd8c4723761038bc57b59fc1161f19f`
windows-amd64.exe: `966c0121e207faa6d2ead6b4710e29675fee362a5a69f71269ef6a8018b84036`

## ISO Checksums

amd64: `04eb7bfc98d1d3a6d4995731c3da9e8c0eccc89030d018a6eeea9ea1e3eb08ee`  
arm64: `c93349356c628948e90034e80ae4988a92dd39a7003d5c72cacfc26e0f86b6a9`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.33.0` · 2024-04-19 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.33.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
