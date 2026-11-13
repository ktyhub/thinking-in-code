---
title: "minikube v1.36.0"
project: "minikube"
repo: "kubernetes/minikube"
tag: "v1.36.0"
published: "2025-05-22"
type: "minor"
lang: "en"
summary: "📣😀 Please fill out our fast 5-question survey so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉"
---

# minikube v1.36.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.36.0 - 2025-05-22

Features
* Support Kubernetes version v1.33.1 [#20784](https://github.com/kubernetes/minikube/pull/20784)
* New flag "-f" to allow passing a config file for addon configure command. [#20255](https://github.com/kubernetes/minikube/pull/20255)
* vfkit: bump to Preferred driver on macOs [#20808](https://github.com/kubernetes/minikube/pull/20808)
* vfkit: new network option "--network vment-shared' for vfkit driver [#20501](https://github.com/kubernetes/minikube/pull/20501)

Bug Fixes:
* fix bootpd check on macOS >= 15 [#20400](https://github.com/kubernetes/minikube/pull/20400)
* fix bug in parsing proxies with dashes [#20648](https://github.com/kubernetes/minikube/pull/20648)
* fix waiting for all pods having specified labels to be Ready [#20315](https://github.com/kubernetes/minikube/pull/20315)
* fix: incorrect finalImg affecting downloading kic form github assets [#20316](https://github.com/kubernetes/minikube/pull/20316)
* fix: reference missing files in schema (Closes #20752) [#20761](https://github.com/kubernetes/minikube/pull/20761)
Improvements:
* Additional checks for 9p support [#20288](https://github.com/kubernetes/minikube/pull/20288)
* vfkit: Graceful shutdown on stop [#20504](https://github.com/kubernetes/minikube/pull/20504)
* vfkit: More robust state management [#20506](https://github.com/kubernetes/minikube/pull/20506)
* vfkit vmnet: support running without sudoers configuration [#20719](https://github.com/kubernetes/minikube/pull/20719)
* Revert "fix --wait's failure to work on coredns pods" [#20313](https://github.com/kubernetes/minikube/pull/20313)

Languages:
* Add Indonesian translation [#20494](https://github.com/kubernetes/minikube/pull/20494)
* Add more french translation [#20361](https://github.com/kubernetes/minikube/pull/20361)
* Add more Korean translations [#20634](https://github.com/kubernetes/minikube/pull/20634)
* Add more Chinese translations [#20543](https://github.com/kubernetes/minikube/pull/20543)[#20543](https://github.com/kubernetes/minikube/pull/20543)
* fixed minor typo in german translation [#20546](https://github.com/kubernetes/minikube/pull/20546)
Version Updates:
* Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.28 to 1.5.34 [#20451](https://github.com/kubernetes/minikube/pull/20451) [#20539](https://github.com/kubernetes/minikube/pull/20539) [#20602](https://github.com/kubernetes/minikube/pull/20602)[#20623](https://github.com/kubernetes/minikube/pull/20623) [#20670](https://github.com/kubernetes/minikube/pull/20670) [#20704](https://github.com/kubernetes/minikube/pull/20704)[#20795](https://github.com/kubernetes/minikube/pull/20795)
* Addon headlamp: Update headlamp-k8s/headlamp image from v0.26.0 to v0.28.0 [#20311](https://github.com/kubernetes/minikube/pull/20311)
* Addon ingress: Update ingress-nginx/controller image from v1.11.3 to v1.12.2 [#20789](https://github.com/kubernetes/minikube/pull/20789)
* Addon inspektor-gadget: Update inspektor-gadget image from v0.36.0 to v0.40.0 [#20325](https://github.com/kubernetes/minikube/pull/20325)[#20354](https://github.com/kubernetes/minikube/pull/20354)[#20512](https://github.com/kubernetes/minikube/pull/20512) [#20736](https://github.com/kubernetes/minikube/pull/20736)
* Addon kong: Update kong image from 3.8.0 to 3.9.0 [#20151](https://github.com/kubernetes/minikube/pull/20151)[#20384](https://github.com/kubernetes/minikube/pull/20384) [#20728](https://github.com/kubernetes/minikube/pull/20728)
* Addon kong: Update kong/kubernetes-ingress-controller image from 3.3.1 to 3.4.5 [#20319](https://github.com/kubernetes/minikube/pull/20319)[#20446](https://github.com/kubernetes/minikube/pull/20446)[#20788](https://github.com/kubernetes/minikube/pull/20788)
* Addon kubevirt: Update bitnami/kubectl image from 1.31.3 to 1.33.1 [#20321](https://github.com/kubernetes/minikube/pull/20321)[#20349](https://github.com/kubernetes/minikube/pull/20349)[#20665](https://github.com/kubernetes/minikube/pull/20665)[#20731](https://github.com/kubernetes/minikube/pull/20731)[#20790](https://github.com/kubernetes/minikube/pull/20790)
* Addon nvidia-device-plugin: Update nvidia/k8s-device-plugin image from v0.17.0 to v0.17.2 [#20786](https://github.com/kubernetes/minikube/pull/20786)[#20534](https://github.com/kubernetes/minikube/pull/20534)
* Addon registry: Update kube-registry-proxy image from 0.0.8 to 0.0.9 [#20717](https://github.com/kubernetes/minikube/pull/20717)
* Addon registry: Update registry image from 2.8.3 to 3.0.0 [#20242](https://github.com/kubernetes/minikube/pull/20242) [#20425](https://github.com/kubernetes/minikube/pull/20425)
* Addon Volcano: Update volcano images from v1.10.0 to v1.11.2 [#20318](https://github.com/kubernetes/minikube/pull/20318)[#20616](https://github.com/kubernetes/minikube/pull/20616)[#20697](https://github.com/kubernetes/minikube/pull/20697)
* CNI: Update cilium from v1.17.0 to v3.30.0 [#20419](https://github.com/kubernetes/minikube/pull/20419)  [#20390](https://github.com/kubernetes/minikube/pull/20390) [#20584](https://github.com/kubernetes/minikube/pull/20584) [#20734](https://github.com/kubernetes/minikube/pull/20734) [#20317](https://github.com/kubernetes/minikube/pull/20317)[#20383](https://github.com/kubernetes/minikube/pull/20383)[#20535](https://github.com/kubernetes/minikube/pull/20535) [#20637](https://github.com/kubernetes/minikube/pull/20637) [#20787](https://github.com/kubernetes/minikube/pull/20787)
* CNI: Update flannel from v0.26.2 to v0.26.7 [#20385](https://github.com/kubernetes/minikube/pull/20385)[#20617](https://github.com/kubernetes/minikube/pull/20617) [#20639](https://github.com/kubernetes/minikube/pull/20639)
* CNI: Update kindnetd from v20241108-5c6d2daf to v20250512-df8de77b [#20327](https://github.com/kubernetes/minikube/pull/20327)[#20427](https://github.com/kubernetes/minikube/pull/20427) [#20797](https://github.com/kubernetes/minikube/pull/20797)
* HA (multi-control plane): Update kube-vip from v0.8.10 to v0.9.1 [#20638](https://github.com/kubernetes/minikube/pull/20638)[#20238](https://github.com/kubernetes/minikube/pull/20238)[#20598](https://github.com/kubernetes/minikube/pull/20598) [#20699](https://github.com/kubernetes/minikube/pull/20699)
* Kicbase: Bump ubuntu:jammy from 20240911.1 to 20250126 [#20387](https://github.com/kubernetes/minikube/pull/20387)[#20718](https://github.com/kubernetes/minikube/pull/20718)
* Kicbase/ISO: Update buildroot from 2023.02.9 to 2025.2 [#20720](https://github.com/kubernetes/minikube/pull/20720)
* Kicbase/ISO: Update cni-plugins from v1.6.2 to v1.7.1 [#20771](https://github.com/kubernetes/minikube/pull/20771)
* Kicbase/ISO: Update cri-dockerd from v0.3.15 to v0.4.0 [#20747](https://github.com/kubernetes/minikube/pull/20747)
* Kicbase/ISO: Update docker from 27.4.0 to 28.0.4 [#20436](https://github.com/kubernetes/minikube/pull/20436) [#20523](https://github.com/kubernetes/minikube/pull/20523)[#20591](https://github.com/kubernetes/minikube/pull/20591)
* Kicbase/ISO: Update runc from v1.2.3 to v1.3.0[#20433](https://github.com/kubernetes/minikube/pull/20433)[#20604](https://github.com/kubernetes/minikube/pull/20604) [#20764](https://github.com/kubernetes/minikube/pull/20764)

For a more detailed changelog, including changes occurring in pre-release versions, see [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md).

Thank you to our contributors for this release!

- 錦南路之花
- Aaina Lohia
- Anthony Holloman
- cdw8431
- Cosmic Oppai
- Daniel Pepuho
- Jeff MAURY
- joaquimrocha
- Kubernetes Prow Robot
- Lan Liang
- luchenhan
- Medya Ghazizadeh
- minikube-bot
- Nir Soffer
- Predrag Rogic
- Sri Panyam
- Sylvester Carolan
- Tian
- VerlorenerReisender
- Victor Ubahakwe
- zvdy

Thank you to our PR reviewers for this release!

- medyagh (64 comments)
- nirs (23 comments)
- cfergeau (12 comments)
- prezha (8 comments)
- afbjorklund (1 comments)

Thank you to our triage members for this release!

- Ritikaa96 (54 comments)
- Ruchi1499 (43 comments)
- dhairya-seth (31 comments)
- afbjorklund (14 comments)
- medyagh (13 comments)

Check out our [contributions leaderboard](https://minikube.sigs.k8s.io/docs/contrib/leaderboard/v1.36.0/) for this release!

## Installation

See [Getting Started](https://minikube.sigs.k8s.io/docs/start/)

## Binary Checksums

darwin-amd64: `a7e3da0db4041b2f845ca37af592424a9cbe34087ac922220b1e3abc4e1976ea`
darwin-arm64: `a9f06bc9634c87800e772354872c6641ef0e02699187d5118225a86b79c99348`
linux-arm: `6b5de419c665c5b3afa513c4d0a4387e973a1048a335f0ce879410bda3d3315f`
linux-arm64: `6fe9adf0c40c75346a0528e609b3d4119ab192e2506d0401cc89adee051a48ea`
linux-ppc64le: `db7eb5bfe583b5a1a7caf0c3b74b2733e29f26988970d687ea5fe4d10f60946b`
linux-s390x: `f2659c51ba66374c34ee4c818227c870044b8ef1db9a5521a5206002b4a69234`
linux-amd64: `cddeab5ab86ab98e4900afac9d62384dae0941498dfbe712ae0c8868250bc3d7`
windows-amd64.exe: `c7504d574a416a4dd4c948e8bab9c2c2028e12c06d038046d8728c96c7cf4730`

## ISO Checksums

amd64: `61b2e2ae23792e477d03e662d853fc45bd3b61243c1471b2ab1f395f997f5a61`  
arm64: `e54d8fe9adc41a0da69bbf5ce8dee6077718261e070d61d93c91677cb336dbdc`

---

> **Source** [kubernetes/minikube](https://github.com/kubernetes/minikube) · `v1.36.0` · 2025-05-22 · [upstream release](https://github.com/kubernetes/minikube/releases/tag/v1.36.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
