---
title: "helm v4.3.1"
project: "helm"
repo: "helm/helm"
tag: "v4.3.1"
version: "v4.3.1"
published: "2026-10-15"
type: "patch"
lang: "en"
summary: "Helm v4.3.1 is a patch release. Users are encouraged to upgrade for the best experience."
---

# helm v4.3.1

Helm v4.3.1 is a patch release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- fix(action): wait for CRD establishment under HookOnlyStrategy #32672 by @pujitha24
- fix(linters): update golangci-lint to v2.14.0 #32744 by @ruslan-shaydullin 

## Installation and Upgrading

Download Helm v4.3.1. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v4.3.1-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-darwin-amd64.tar.gz.sha256sum) / 34bec4eba761ba5c16d1965ee6b8f5b0abe5993974a802274e2a4f0418893d89)
- [MacOS arm64](https://get.helm.sh/helm-v4.3.1-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-darwin-arm64.tar.gz.sha256sum) / 6b4e61c8cd27d99e5a801e63ff25dd5c70b36875c2cd659d3e9ce6b76fc23198)
- [Linux amd64](https://get.helm.sh/helm-v4.3.1-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-amd64.tar.gz.sha256sum) / 0403a88ae20913d11b10a2467b50087721fea7581736da6b9d3992f5357fe54b)
- [Linux arm](https://get.helm.sh/helm-v4.3.1-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-arm.tar.gz.sha256sum) / 292588ea9f89705511c93a39687fe5e26767bd85b5085a1be9a2a1563c1e28fa)
- [Linux arm64](https://get.helm.sh/helm-v4.3.1-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-arm64.tar.gz.sha256sum) / 8cf8f66ecbc252ac8f7f06cca68aba88508ddfde3a6a34feb1678ad1694b4f88)
- [Linux i386](https://get.helm.sh/helm-v4.3.1-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-386.tar.gz.sha256sum) / bfe8cbbec02362d869e183f27ca03342820ceae908f7a7db2e17caeef74e6d30)
- [Linux loong64](https://get.helm.sh/helm-v4.3.1-linux-loong64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-loong64.tar.gz.sha256sum) / 5fc8ae4eb1d513775374160a1ff5255290b86e8a71beeae09ae7d3a60f50962f)
- [Linux ppc64le](https://get.helm.sh/helm-v4.3.1-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-ppc64le.tar.gz.sha256sum) / 11bbb554976ce22aeb21b308bb5683f98941db81725d2b280d8b943b6ada8036)
- [Linux s390x](https://get.helm.sh/helm-v4.3.1-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-s390x.tar.gz.sha256sum) / dfb031400c1215c0bd673d5e25bcd300a5af903fbfed10b5cb8b3ffc03bcecb6)
- [Linux riscv64](https://get.helm.sh/helm-v4.3.1-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-riscv64.tar.gz.sha256sum) / 20ebb3346bf1d5e5c330a7f1405cfea8eab6a5e1752f24055f03a5221be1688e)
- [Windows amd64](https://get.helm.sh/helm-v4.3.1-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v4.3.1-windows-amd64.zip.sha256sum) / fcfd7b796dcf0f225abc40b5636a3b01f55f3de2fb1dfb18475df94e62c14112)
- [Windows arm64](https://get.helm.sh/helm-v4.3.1-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v4.3.1-windows-arm64.zip.sha256sum) / 373edaae86db70342ef39b014e2e7764ea8f9cff08714843daa5e55b5ee492f2)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4) on any system with `bash`.

## What's Next

- 4.3.2 and 3.22.2 are the next patch releases scheduled for November 11, 2026
- 4.4.0 is the next minor release scheduled for January 13, 2027. There will be no further Helm 3 minor releases (see https://helm.sh/blog/helm-v3-end-of-life)

## Changelog

- chore(deps): bump otlploghttp and stdoutlog to v0.21.0 c0d08d0d6d9424d4a14febb5e8a3e51b0dd00dff (Terry Howe)
- chore(deps): bump the k8s-io group across 1 directory with 7 updates 0c0146eb409bcbc1793d97d67500cdf55050a742 (dependabot[bot])
- fix: bump golang.org/x/net to v0.61.0 (#32758) dd91731c138d76a26b3aa3ff69e6d40febe8e737 (Terry Howe)
- fix(linters): update golangci-lint to v2.14.0 (#32744) 3a376b2917d335edcbc714c0b3770442255ec9af (Ruslan Shaydullin)
- fix(action): wait for CRD establishment under HookOnlyStrategy (#32672) 5fed6a5e0de4669dc4436eb02db9036fe5941b46 (Pujitha Paladugu)
- chore(deps): bump sigs.k8s.io/controller-runtime from 0.25.1 to 0.25.2 (#32726) b227bf4704ab6ce9aa2de78ba70d8d227564f0c8 (dependabot[bot])
- chore(deps): bump sigs.k8s.io/kustomize/kyaml from 0.21.1 to 0.21.2 (#32715) af79b8ebe296201b47e8f7dac9b6c8a8927086d7 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploggrpc ab6b245a2cdcadac70d5abbe25b0ae748df914e6 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp (#32665) 0f206176faf573da63727dd7ddea5a11bfa98792 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc (#32664) e26e15829234121ee0c1bad535ad4ba70e8caa65 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace (#32663) 23ab1c558484f6e58b28029cdacce7a4938b59e3 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/sdk from 1.44.0 to 1.45.0 (#32662) 8303180a5eec17dda46ac1995d65d7d40bf21b98 (dependabot[bot])

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v4.3.1` · 2026-10-15 · [upstream release](https://github.com/helm/helm/releases/tag/v4.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
