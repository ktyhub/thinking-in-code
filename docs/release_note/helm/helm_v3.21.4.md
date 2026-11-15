---
title: "helm v3.21.4"
project: "helm"
repo: "helm/helm"
tag: "v3.21.4"
version: "v3.21.4"
published: "2026-08-14"
type: "patch"
lang: "en"
summary: "Helm v3.21.4 is a patch release. Users are encouraged to upgrade for the best experience."
---

# helm v3.21.4

Helm v3.21.4 is a patch release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- fix(engine): prevent Files.Lines panic on empty file (backport to v3)- #32303 by @mahesh-sadupalli
- fix(provenance): migrate to ProtonMail/go-crypto to resolve GO-2026-5932- #32463 by @karan-vk
- [dev-v3 backport] fix: bump go.opentelemetry.io/otel@v1.44.0 for GO-2026-5158- #32535 by @scottrigby
- [dev-v3 backport] deps: bump google.golang.org/grpc@v1.82.1 for GO-2026-6061- #32536 by @scottrigby
- chore(deps): bump golang.org/x/crypto from 0.53.0 to 0.54.0- (includes golang.org/x/text v0.40.0 to fix GO-2026-5970) #32308

## Installation and Upgrading

Download Helm v3.21.4. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v3.21.4-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-darwin-amd64.tar.gz.sha256sum) / 9173d05edf9592c6be1d0412ffafd935448dfc7a63c2bc732b8c67e55503e8a8)
- [MacOS arm64](https://get.helm.sh/helm-v3.21.4-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-darwin-arm64.tar.gz.sha256sum) / 6e0bf5eb6daafc2b1ec34bb5ba04ef103f3afc16192fb19805c2924d7ea1033f)
- [Linux amd64](https://get.helm.sh/helm-v3.21.4-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-amd64.tar.gz.sha256sum) / 61f88ab166748cb19604d7884cb100ae9ccb13804ddeb98e08af167eacbb6a14)
- [Linux arm](https://get.helm.sh/helm-v3.21.4-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-arm.tar.gz.sha256sum) / b02709eab565cfcee8acdb10c143daf05ab06d994baeb85e63976513367925a7)
- [Linux arm64](https://get.helm.sh/helm-v3.21.4-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-arm64.tar.gz.sha256sum) / b54c04b4e0b2540bbdc08c17a121dab70e9a2ed0de5705528fec68a5fd3b85a7)
- [Linux i386](https://get.helm.sh/helm-v3.21.4-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-386.tar.gz.sha256sum) / 71280742be811c7d9d6b4546125f185ba01c6fd967e47491766b0055a0570cf5)
- [Linux ppc64le](https://get.helm.sh/helm-v3.21.4-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-ppc64le.tar.gz.sha256sum) / ba4e4f440b6992f119160e3ceea29d80158546c9241748332ffa1cfdfbb0bd8f)
- [Linux s390x](https://get.helm.sh/helm-v3.21.4-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-s390x.tar.gz.sha256sum) / 321de1ff6fe57a9a5eca6b56d78d6959babe295ec7aab49af1a0d2bcfc02dfc8)
- [Linux riscv64](https://get.helm.sh/helm-v3.21.4-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.21.4-linux-riscv64.tar.gz.sha256sum) / fef3ec7e1ddafe8927253ad79f2f8e3ac41f3f92328eb2c23bd4513b4421e5d9)
- [Windows amd64](https://get.helm.sh/helm-v3.21.4-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v3.21.4-windows-amd64.zip.sha256sum) / 268a7b98b313403055e4f31807aeaac529c90e1188acd7857ae3e960b0f67cce)
- [Windows arm64](https://get.helm.sh/helm-v3.21.4-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v3.21.4-windows-arm64.zip.sha256sum) / e23545fff21ef04853a9540925dd73c4b9caaa24ee7fdd8482b1ee626a4eecc9)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3) on any system with `bash`.

## What's Next

- 4.3.0 and 3.22.0 are the next minor releases scheduled for September 9, 2026

## Changelog

- chore(deps): bump golang.org/x/crypto from 0.53.0 to 0.54.0 (#32308) 813176c51bb5c181dbbd7901298ddcc104cd3417 (dependabot[bot])
- [dev-v3 backport] deps: bump google.golang.org/grpc@v1.82.1 for GO-2026-6061 b6aa8b1d71140347f75ef0b77fac91f28ffe10b3 (Scott Rigby)
- fix: bump go.opentelemetry.io/otel@v1.44.0 for GO-2026-5158 57ce7aeec1eb82422c5c349dfadda20ea3f743fe (Scott Rigby)
- fix(provenance): migrate to ProtonMail/go-crypto to resolve GO-2026-5932 ab71449c76f66e55064ae4503a6e7adae21dcfa9 (Karan V)
- fix(engine): prevent Files.Lines panic on empty file 955dfab1e6bdd70b5ccd7b932b2d500e9e26566c (Mahesh Sadupalli)

**Full Changelog**: https://github.com/helm/helm/compare/v3.21.3...v3.21.4

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v3.21.4` · 2026-08-14 · [upstream release](https://github.com/helm/helm/releases/tag/v3.21.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
