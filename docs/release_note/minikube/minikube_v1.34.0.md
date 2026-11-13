---
title: "minikube v1.34.0"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.34.0"
published: "2024-09-09"
type: "minor"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.34.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.34.0 - 2024-09-04

Breaking Changes:
* Bump minimum podman version to 4.9.0 [#19457](https://github.com/kubernetes/minikube/pull/19457)
* Disallow using Docker Desktop 4.34.0 [#19576](https://github.com/kubernetes/minikube/pull/19576)
 
Features:
* Bump default Kubernetes version to v1.31.0 [#19435](https://github.com/kubernetes/minikube/pull/19435)
* Add new driver for macOS: vfkit [#19423](https://github.com/kubernetes/minikube/pull/19423)
* Add Parallels driver support for darwin/arm64 [#19373](https://github.com/kubernetes/minikube/pull/19373)
* Add new volcano addon [#18602](https://github.com/kubernetes/minikube/pull/18602)
* Addons ingress-dns: Added support for all architectures [#19198](https://github.com/kubernetes/minikube/pull/19198)
* Support privileged ports on WSL [#19370](https://github.com/kubernetes/minikube/pull/19370)
* VM drivers with docker container-runtime now use docker-buildx for image building [#19339](https://github.com/kubernetes/minikube/pull/19339)
* Support running x86 QEMU on arm64 [#19228](https://github.com/kubernetes/minikube/pull/19228)
* Add `-o json` option for `addon images` command [#19364](https://github.com/kubernetes/minikube/pull/19364)

Improvements:
* add -d shorthand for --driver [#19356](https://github.com/kubernetes/minikube/pull/19356)
* add -c shorthand for --container-runtime [#19217](https://github.com/kubernetes/minikube/pull/19217)
* kvm2: Don't delete the "default" libvirt network [#18920](https://github.com/kubernetes/minikube/pull/18920)
* Update MINIKUBE_HOME usage [#18648](https://github.com/kubernetes/minikube/pull/18648)
* CNI: Updated permissions to support network policies on kindnet [#19360](https://github.com/kubernetes/minikube/pull/19360)
* GPU: Set `NVIDIA_DRIVER_CAPABILITIES` to `all` when GPU is enabled [#19345](https://github.com/kubernetes/minikube/pull/19345)
* Improved error message when trying to use `mount` on system missing 9P [#18995](https://github.com/kubernetes/minikube/pull/18995)
* Improved error message when enabling KVM addons on non-KVM cluster [#19195](https://github.com/kubernetes/minikube/pull/19195)
* Added warning when loading image with wrong arch [#19229](https://github.com/kubernetes/minikube/pull/19229)
* `profile list --output json` handle empty config folder  [#16900](https://github.com/kubernetes/minikube/pull/16900)
* Check connectivity outside minikube when connectivity issuse [#18859](https://github.com/kubernetes/minikube/pull/18859)

Bugs:
* Fix not creating API server tunnel for QEMU w/ builtin network [#19191](https://github.com/kubernetes/minikube/pull/19191)
* Fix waiting for user input on firewall unblock when `--interactive=false` [#19531](https://github.com/kubernetes/minikube/pull/19531)
* Fix network retry check when subnet already in use for podman [#17779](https://github.com/kubernetes/minikube/pull/17779)
* Fix empty tarball when generating image save [#19312](https://github.com/kubernetes/minikube/pull/19312)
* Fix missing permission for kong-serviceaccount [#19002](https://github.com/kubernetes/minikube/pull/19002)

Version Upgrades:
* Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.17 to 1.5.23 [#19341](https://github.com/kubernetes/minikube/pull/19341) [#19501](https://github.com/kubernetes/minikube/pull/19501)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.23.2 to v0.25.0 [#18992](https://github.com/kubernetes/minikube/pull/18992) [#19152](https://github.com/kubernetes/minikube/pull/19152) [#19349](https://github.com/kubernetes/minikube/pull/19349)
* Addon kong: Update kong image from 3.6.1 to 3.7.1 [#19046](https://github.com/kubernetes/minikube/pull/19046) [#19124](https://github.com/kubernetes/minikube/pull/19124)
* Addon kubevirt: Update bitnami/kubectl image from 1.30.0 to 1.31.0 [#18929](https://github.com/kubernetes/minikube/pull/18929) [#19087](https://github.com/kubernetes/minikube/pull/19087) [#19313](https://github.com/kubernetes/minikube/pull/19313) [#19479](https://github.com/kubernetes/minikube/pull/19479)
* Addon ingress: Update ingress-nginx/controller image from v1.10.1 to v1.11.2 [#19302](https://github.com/kubernetes/minikube/pull/19302) [#19461](https://github.com/kubernetes/minikube/pull/19461)
* Addon inspektor-gadget: Update inspektor-gadget image from v0.27.0 to v0.32.0 [#18872](https://github.com/kubernetes/minikube/pull/18872) [#18931](https://github.com/kubernetes/minikube/pull/18931) [#19011](https://github.com/kubernetes/minikube/pull/19011) [#19166](https://github.com/kubernetes/minikube/pull/19166) [#19411](https://github.com/kubernetes/minikube/pull/19411) [#19554](https://github.com/kubernetes/minikube/pull/19554)
* Addon istio-provisioner: Update istio/operator image from 1.21.2 to 1.23.0 [#18932](https://github.com/kubernetes/minikube/pull/18932) [#19052](https://github.com/kubernetes/minikube/pull/19052) [#19167](https://github.com/kubernetes/minikube/pull/19167) [#19283](https://github.com/kubernetes/minikube/pull/19283) [#19450](https://github.com/kubernetes/minikube/pull/19450)
* Addon nvidia-device-plugin: Update nvidia/k8s-device-plugin image from v0.15.0 to v0.16.2 [#19162](https://github.com/kubernetes/minikube/pull/19162) [#19266](https://github.com/kubernetes/minikube/pull/19266) [#19336](https://github.com/kubernetes/minikube/pull/19336) [#19409](https://github.com/kubernetes/minikube/pull/19409)
* Addon metrics-server: Update metrics-server/metrics-server image from v0.7.1 to v0.7.2 [#19529](https://github.com/kubernetes/minikube/pull/19529)
* Addon YAKD: bump marcnuri/yakd image from 0.0.4 to 0.0.5 [#19145](https://github.com/kubernetes/minikube/pull/19145)
* CNI: Update calico from v3.27.3 to v3.28.1 [#18870](https://github.com/kubernetes/minikube/pull/18870) [#19377](https://github.com/kubernetes/minikube/pull/19377)
* CNI: Update cilium from v1.15.3 to v1.16.1 [#18925](https://github.com/kubernetes/minikube/pull/18925) [#19084](https://github.com/kubernetes/minikube/pull/19084) [#19247](https://github.com/kubernetes/minikube/pull/19247) [#19337](https://github.com/kubernetes/minikube/pull/19337) [#19476](https://github.com/kubernetes/minikube/pull/19476)
* CNI: Update kindnetd from v20240202-8f1494ea to v20240813-c6f155d6 [#18933](https://github.com/kubernetes/minikube/pull/18933) [#19252](https://github.com/kubernetes/minikube/pull/19252) [#19265](https://github.com/kubernetes/minikube/pull/19265) [#19307](https://github.com/kubernetes/minikube/pull/19307) [#19378](https://github.com/kubernetes/minikube/pull/19378) [#19446](https://github.com/kubernetes/minikube/pull/19446)
* CNI: Update flannel from v0.25.1 to v0.25.6 [#18966](https://github.com/kubernetes/minikube/pull/18966) [#19008](https://github.com/kubernetes/minikube/pull/19008) [#19085](https://github.com/kubernetes/minikube/pull/19085) [#19297](https://github.com/kubernetes/minikube/pull/19297) [#19522](https://github.com/kubernetes/minikube/pull/19522)
* Kicbase: Update nerdctld from 0.6.0 to 0.6.1 [#19282](https://github.com/kubernetes/minikube/pull/19282)
* Kicbase: Bump ubuntu:jammy from 20240427 to 20240808 [#19068](https://github.com/kubernetes/minikube/pull/19068) [#19184](https://github.com/kubernetes/minikube/pull/19184) [#19478](https://github.com/kubernetes/minikube/pull/19478)
* Kicbase/ISO: Update buildkit from v0.13.1 to v0.15.2 [#19024](https://github.com/kubernetes/minikube/pull/19024) [#19116](https://github.com/kubernetes/minikube/pull/19116) [#19264](https://github.com/kubernetes/minikube/pull/19264) [#19355](https://github.com/kubernetes/minikube/pull/19355) [#19452](https://github.com/kubernetes/minikube/pull/19452)
* Kicbase/ISO: Update cni-plugins from v1.4.1 to v1.5.1 [#19044](https://github.com/kubernetes/minikube/pull/19044) [#19128](https://github.com/kubernetes/minikube/pull/19128)
* Kicbase/ISO: Update containerd from v1.7.15 to v1.7.21 [#18934](https://github.com/kubernetes/minikube/pull/18934) [#19106](https://github.com/kubernetes/minikube/pull/19106) [#19186](https://github.com/kubernetes/minikube/pull/19186) [#19298](https://github.com/kubernetes/minikube/pull/19298) [#19521](https://github.com/kubernetes/minikube/pull/19521)
* Kicbase/ISO: Update cri-dockerd from v0.3.12 to v0.3.15 [#19199](https://github.com/kubernetes/minikube/pull/19199) [#19249](https://github.com/kubernetes/minikube/pull/19249)
* Kicbase/ISO: Update crun from 1.14.4 to 1.16.1 [#19112](https://github.com/kubernetes/minikube/pull/19112) [#19389](https://github.com/kubernetes/minikube/pull/19389) [#19443](https://github.com/kubernetes/minikube/pull/19443)
* Kicbase/ISO: Update docker from 26.0.2 to 27.2.0 [#18993](https://github.com/kubernetes/minikube/pull/18993) [#19038](https://github.com/kubernetes/minikube/pull/19038) [#19142](https://github.com/kubernetes/minikube/pull/19142) [#19153](https://github.com/kubernetes/minikube/pull/19153) [#19175](https://github.com/kubernetes/minikube/pull/19175) [#19319](https://github.com/kubernetes/minikube/pull/19319) [#19326](https://github.com/kubernetes/minikube/pull/19326) [#19429](https://github.com/kubernetes/minikube/pull/19429) [#19530](https://github.com/kubernetes/minikube/pull/19530)
* Kicbase/ISO: Update nerdctl from 1.7.5 to 1.7.6 [#18869](https://github.com/kubernetes/minikube/pull/18869)
* Kicbase/ISO: Update runc from v1.1.12 to v1.1.13 [#19104](https://github.com/kubernetes/minikube/pull/19104)

For a more detailed changelog, including changes occurring in pre-release versions, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- Anders F Björklund
- Anjali Chaturvedi
- Artem Basalaev
- Benjamin P. Jung
- Daniel Iwaniec
- Dylan Piergies
- Gabriel Pelouze
- Hritesh Mondal
- Jack Brown
- Jeff MAURY
- Marc Nuri
- Matteo Mortari
- Medya Ghazizadeh
- Nir Soffer
- Philippe Miossec
- Predrag Rogic
- Radoslaw Smigielski
- Raghavendra Talur
- Sandipan Panda
- Steven Powell
- Sylvester Carolan
- Tom McLaughlin
- Tony-Sol
- aiyijing
- chubei
- daniel-iwaniec
- hritesh04
- joaquimrocha
- ljtian
- mitchell amihod
- shixiuguo
- sunyuxuan
- thomasjm
- tianlijun
- tianlj
- 錦南路之花
- 锦南路之花

Thank you to our PR reviewers for this release!

- spowelljr (67 comments)
- medyagh (53 comments)
- nirs (14 comments)
- cfergeau (4 comments)
- liangyuanpeng (2 comments)
- ComradeProgrammer (1 comments)
- afbjorklund (1 comments)
- aojea (1 comments)
- bobsira (1 comments)

Thank you to our triage members for this release!

- kundan2707 (55 comments)
- medyagh (29 comments)
- afbjorklund (28 comments)
- T-Lakshmi (20 comments)
- Ritikaa96 (16 comments)

Check out our [contributions leaderboard](https://minikube.sigs.k8s.io/docs/contrib/leaderboard/v1.34.0/) for this release!

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

darwin-amd64: `0f73648ab726c6d7822444536e7a5d7eb4d8b0c193ecfc17771d4811c4efa5c0`
darwin-arm64: `d760e65502017b716dec55c17e2c94c8e7a739d30650ffa698f4f4104a18314c`
linux-amd64: `c4a625f9b4a4523e74b745b6aac8b0bf45062472be72cd38a23c91ec04d534c9`
linux-arm: `19172329d564e68e6379e90de1a653aa445d7a91e3521ed9b8a3bfbbb257bbae`
linux-arm64: `fbe55f563ac33328320d64c319f635386fe020eedf25cba8ebf3850048deb7ae`
linux-ppc64le: `e1bd56569a49713eec99f931cb755b4836163321f1744480099387250e12b127`
linux-s390x: `cca05a534ad7454bb07e6c27fd206988b1ad20b4f194d8d73a6e8165d4a70952`
windows-amd64.exe: `cb80b30202901c10baf207441bf5c7a18b33e11618a2a474a9403eabdf2de26b`

## ISO Checksums

amd64: `0da9cfaa98f2c9f37b401519d846145fccdd8bf0cae46b32c0b8a4c054a4c070`  
arm64: `526783ddba495fe611bc38e937a53f8f2c4d77de243b469185f611ba80908f17`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.34.0` · 2024-09-09 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.34.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
