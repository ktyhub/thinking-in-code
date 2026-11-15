---
title: "helm v4.3.2"
project: "helm"
repo: "helm/helm"
tag: "v4.3.2"
version: "v4.3.2"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "Helm v4.3.2 is a patch release. Users are encouraged to upgrade for the best experience."
---

# helm v4.3.2

Helm v4.3.2 is a patch release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- docs(cmd): correct list --max and HELM_COLOR help text #32807 by @ZainnQureshii
- fix(registry): always return a transport Helm can configure #32684 by @ump45nose

## Installation and Upgrading

Download Helm v4.3.2. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v4.3.2-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-darwin-amd64.tar.gz.sha256sum) / 9e0068e9ae18c441d27388190ee7f53ae65eba44bfe910b40bdac44c4b51fa71)
- [MacOS arm64](https://get.helm.sh/helm-v4.3.2-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-darwin-arm64.tar.gz.sha256sum) / 6f3421de3a8cc2ac578c8cfb33b8edde290dde2871bc1bab12e24f2e5caeaa90)
- [Linux amd64](https://get.helm.sh/helm-v4.3.2-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-amd64.tar.gz.sha256sum) / d1c0278d46beab79582d7e50f5b3dc206944ba8e577cde618513fd07daa53983)
- [Linux arm](https://get.helm.sh/helm-v4.3.2-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-arm.tar.gz.sha256sum) / 4af438abdb38723ab63928dead4740a41241daa46b591d5ab12a53f6828099d7)
- [Linux arm64](https://get.helm.sh/helm-v4.3.2-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-arm64.tar.gz.sha256sum) / df31cb61680ef728f82c770e5280dd565617bee6b039d37e85c677288be4bbb0)
- [Linux i386](https://get.helm.sh/helm-v4.3.2-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-386.tar.gz.sha256sum) / f74735128cadfa176406849dbff9d105e92682e1c114e4b67adceaae64442d7a)
- [Linux loong64](https://get.helm.sh/helm-v4.3.2-linux-loong64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-loong64.tar.gz.sha256sum) / b06bf55e4fcedac013a4ef50b419d9839497389591d072be074d78938f499caf)
- [Linux ppc64le](https://get.helm.sh/helm-v4.3.2-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-ppc64le.tar.gz.sha256sum) / c397e126ed115555316bf34ec149b0ea1f99303f4b35201d5c6f070895eaaf09)
- [Linux s390x](https://get.helm.sh/helm-v4.3.2-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-s390x.tar.gz.sha256sum) / 076d3df25b6864a9d26a670fce7eff2cb4fe9e4f312028c56a6ade261ba74050)
- [Linux riscv64](https://get.helm.sh/helm-v4.3.2-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.2-linux-riscv64.tar.gz.sha256sum) / 1ee7b7f63d6351810ee05b33ebf8c6824fecee3b7edb49a75a96755b91ab5e15)
- [Windows amd64](https://get.helm.sh/helm-v4.3.2-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v4.3.2-windows-amd64.zip.sha256sum) / 77c5c782aaef1abbfafe75b88412d2b6df8e4a36d14522273397f0d02c6ecc29)
- [Windows arm64](https://get.helm.sh/helm-v4.3.2-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v4.3.2-windows-arm64.zip.sha256sum) / eedb67c7838fdc266b4f33650ccab88052e9e7ec476ea180d7f0728381a26b09)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4) on any system with `bash`.

## What's Next

- 4.3.2 is the next patch releases scheduled for November 11, 2026
- 4.4.0 is the next minor release scheduled for January 13, 2027. There will be no further Helm 3 minor releases (see https://helm.sh/blog/helm-v3-end-of-life)

## Changelog

- fix(deps): bump golang.org/x/net to v0.62.0 (#32876) 8346aaa55e7161f7c547212d0a87f01367976727 (Sean Schneeweiss)
- chore(deps): bump github.com/distribution/distribution/v3 (#32698) 8c92fcacf2865996287118d742783bf9335c8fe0 (dependabot[bot])
- fix(deps): bump github.com/klauspost/compress to v1.20.3 (#32878) 214f6f6be7ae5b1d1b32335f3c7f2c1749caad95 (Sean Schneeweiss)
- chore(deps): bump the k8s-io group across 1 directory with 7 updates 90d48fc1d2ffef1d9b220cb2811bc6bbead73a66 (dependabot[bot])
- fix(registry): always return a transport Helm can configure (#32684) 961bddf9d52f0b8586f751ee130322204e708907 (ump45nose)
- docs(cmd): correct list --max and HELM_COLOR help text (#32807) ddb8be775170081fe6ad1c39a6e29cf64e61ef80 (Zain Qureshi)

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v4.3.2` · 2026-11-13 · [upstream release](https://github.com/helm/helm/releases/tag/v4.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
