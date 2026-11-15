---
title: "helm v3.22.1"
project: "helm"
repo: "helm/helm"
tag: "v3.22.1"
version: "v3.22.1"
published: "2026-10-15"
type: "patch"
lang: "en"
summary: "Helm v3.22.1 is a patch release. Users are encouraged to upgrade for the best experience."
---

# helm v3.22.1

Helm v3.22.1 is a patch release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- Bumps dependencies to remove Go package vulnerabilities
- Updates the k8s.io Go packages

## Installation and Upgrading

Download Helm v3.22.1. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v3.22.1-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-darwin-amd64.tar.gz.sha256sum) / cf850a81b908f8eef0331e6b18776da2767bcac639ca84472311dad20008495c)
- [MacOS arm64](https://get.helm.sh/helm-v3.22.1-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-darwin-arm64.tar.gz.sha256sum) / e73da8a0b0d5193774fdff17ce6319c7436bb22ee229b45fd64f3c40368c753a)
- [Linux amd64](https://get.helm.sh/helm-v3.22.1-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-amd64.tar.gz.sha256sum) / 896cf63684a42a723d61c980369d6e588330927deb13676ca0d85006dd6da0ea)
- [Linux arm](https://get.helm.sh/helm-v3.22.1-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-arm.tar.gz.sha256sum) / a1563d16cf9537db798116d5647ad0ef8cf963fa7cbbe24d8db534250273cccc)
- [Linux arm64](https://get.helm.sh/helm-v3.22.1-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-arm64.tar.gz.sha256sum) / 4c29e286b279d170fa048ddfc3e4e83dcd069ca9c52102766ba672d7149e694d)
- [Linux i386](https://get.helm.sh/helm-v3.22.1-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-386.tar.gz.sha256sum) / 67b35ee3d31fa93b7ca5884e71beef3c3b5d9bab46ead792081ed2b6131d73c5)
- [Linux ppc64le](https://get.helm.sh/helm-v3.22.1-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-ppc64le.tar.gz.sha256sum) / 48a9711b69f0b63504f710ba18766dd5f5424fe380e67304aa3c89e1c0b97b5c)
- [Linux s390x](https://get.helm.sh/helm-v3.22.1-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-s390x.tar.gz.sha256sum) / ef039296b433a0a6965fdf55f4ee0ad50e3d94bb70a77e4896309406c9bc8fab)
- [Linux riscv64](https://get.helm.sh/helm-v3.22.1-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.1-linux-riscv64.tar.gz.sha256sum) / 960ca50df1eb70a50a8cb90fc67573cf047239fc0b72f63514a534e4f2e2ef32)
- [Windows amd64](https://get.helm.sh/helm-v3.22.1-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v3.22.1-windows-amd64.zip.sha256sum) / 32ce9f4509b81782c9740898c43946e1f97c4d93ec5d10222c9b6eeec21ea043)
- [Windows arm64](https://get.helm.sh/helm-v3.22.1-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v3.22.1-windows-arm64.zip.sha256sum) / 10104b049309d4c751bca88254843e16edd84141411f63503f10845ea33cbd2f)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3) on any system with `bash`.

## What's Next

- 4.3.2 and 3.22.2 are the next patch releases scheduled for November 11, 2026
- 4.4.0 is the next minor release scheduled for January 13, 2027. There will be no further Helm 3 minor releases (see https://helm.sh/blog/helm-v3-end-of-life)

## Changelog

- chore(deps): bump github.com/distribution/distribution/v3 (#32697) d6c1a0e4027caa6abc7892e7ea9f0cda7447baa3 (dependabot[bot])
- [v3] chore(deps): bump k8s.io group to v0.37.1 (#32761) 2c7472f482d9fe255e5cd51feb51eaab18df198f (Scott Rigby)
- [v3] chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace otlptracegrpc and otlptracehttp to v1.45.0 (#32760) 8d91c8f55d86b62091d25f9f688bc26d51a98dbb (Scott Rigby)
- chore(deps): bump golang.org/x/net to v0.60.0 for GO-2026-6617 GO-2026-6612 GO-2026-6611 GO-2026-6610 GO-2026-6603 (#32759) 13edc4f2fd73578fc517f7050e3ca4ef6af7e289 (Scott Rigby)

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v3.22.1` · 2026-10-15 · [upstream release](https://github.com/helm/helm/releases/tag/v3.22.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
