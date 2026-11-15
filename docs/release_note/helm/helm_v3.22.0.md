---
title: "helm v3.22.0"
project: "helm"
repo: "helm/helm"
tag: "v3.22.0"
version: "v3.22.0"
published: "2026-09-10"
type: "minor"
lang: "en"
summary: "Helm v3.22.0 is a feature release. Users are encouraged to upgrade for the best experience."
---

# helm v3.22.0

Helm v3.22.0 is a feature release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- primarily dependency updates and k8s-io group to 0.37.0

## Installation and Upgrading

Download Helm v3.22.0. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v3.22.0-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-darwin-amd64.tar.gz.sha256sum) / bd1d09f316558dda23698527859600936fed1371021ce0f2272d66b2fdcfa69c)
- [MacOS arm64](https://get.helm.sh/helm-v3.22.0-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-darwin-arm64.tar.gz.sha256sum) / 4c9982a6cdeb458b60258df66b55398ca5b19293f6877faffe2909ad6f23dfe0)
- [Linux amd64](https://get.helm.sh/helm-v3.22.0-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-amd64.tar.gz.sha256sum) / 1e4ab49e429626cf6c6958d914248b78c9730803c2751b87627e171dc800e7bb)
- [Linux arm](https://get.helm.sh/helm-v3.22.0-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-arm.tar.gz.sha256sum) / 695793765e2246824a7c859562886f79b1cc89d99420c89f940590440f7129ee)
- [Linux arm64](https://get.helm.sh/helm-v3.22.0-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-arm64.tar.gz.sha256sum) / f14e804dfee240f55525b667488fe9adca349e63e00c9af634c0beb1421ac310)
- [Linux i386](https://get.helm.sh/helm-v3.22.0-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-386.tar.gz.sha256sum) / b96b7a125cc7d38aa952a78b16e96d05426cd9791dd013be51ebab1c203d6729)
- [Linux loong64](https://get.helm.sh/helm-v3.22.0-linux-loong64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-loong64.tar.gz.sha256sum) / ﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>BlobNotFound</Code><Message>The specified blob does not exist.
RequestId:8c31497a-101e-0042-27b6-404cb4000000
Time:2026-09-09T23:55:30.1192401Z</Message></Error>)
- [Linux ppc64le](https://get.helm.sh/helm-v3.22.0-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-ppc64le.tar.gz.sha256sum) / fa304f47163a19f4e275fe4e890465a8a80a6f26ce4772c6b1649355c995def1)
- [Linux s390x](https://get.helm.sh/helm-v3.22.0-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-s390x.tar.gz.sha256sum) / 3f2cfd73018dcb9c25814e89c5946a362a8b951d8cce03152138d8cb28abcbff)
- [Linux riscv64](https://get.helm.sh/helm-v3.22.0-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v3.22.0-linux-riscv64.tar.gz.sha256sum) / 50f84d698daac65bded677c61db7138e082b23e667a3cabeff4fd2521614e498)
- [Windows amd64](https://get.helm.sh/helm-v3.22.0-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v3.22.0-windows-amd64.zip.sha256sum) / 899615865726d39f9b245e71e848c5bf4adc7ed33a8c43ede660facb48151b43)
- [Windows arm64](https://get.helm.sh/helm-v3.22.0-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v3.22.0-windows-arm64.zip.sha256sum) / 75a331a3b03d11aed6369bdf6a1f8f9d33635bc820de5cd6025a581292046805)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4) on any system with `bash`.

## What's Next

- 4.3.1 and 3.22.1 are the next patch releases scheduled for October 14, 2026
- 4.4.0 is the next minor release scheduled for January 13, 2027. There will be no further Helm 3 minor releases (see https://helm.sh/blog/helm-v3-end-of-life)

## Changelog

- chore(deps): bump the k8s-io group across 1 directory with 6 updates 144ca65f8501953fa8b41cd1d37c7223051c85b7 (dependabot[bot])
- bump version to 3.22 (#32606) b5de8bbe62975c8f9d4801fd7dfafacff462209f (Scott Rigby)
- fix: set [pull,push] scope when helm push to a registry(use token auth) (backport) (#32362) 9dbcb9f1edb4cdf2b055870dc9a07e0c0f4b05d1 (kimsungmin1)
- chore(deps): bump the github-actions group across 1 directory with 4 updates (#32575) 665ab55b05ce3d8c5a9d40e22b14f920d84fa68a (dependabot[bot])
- chore(deps): bump the k8s-io group with 7 updates (#32573) 0841093658d96f4787cc9599cd2a891a3c590971 (dependabot[bot])
- chore(deps): bump github.com/stretchr/testify from 1.12.0 to 1.12.1 (#32563) d0569c7d625151ee8c7b858d87218dd06087d613 (dependabot[bot])
- chore(deps): bump the github-actions group across 1 directory with 4 updates (#32557) bcbdb1e8ae5f1b1dd26a41652bc2f3e1e8f0f920 (dependabot[bot])
- chore(deps): bump github.com/stretchr/testify from 1.11.1 to 1.12.0 (#32554) 6cdcc8f91de2dbe181b19be8f5de0701b9c30acd (dependabot[bot])
- chore(deps): bump golang.org/x/crypto from 0.54.0 to 0.55.0 (#32542) 158719fb4346eb65ee789abc09a922a84bf6ec3b (dependabot[bot])
- [dev-v3 backport] deps: bump google.golang.org/grpc@v1.82.1 for GO-2026-6061 (#32536) a442b8cf64f5942ca9e920b46fceb15e0878ca80 (Scott Rigby)
- fix: bump go.opentelemetry.io/otel@v1.44.0 for GO-2026-5158 (#32535) adab0ef15d40085b4ddad4334418dc1bf41c85c7 (Scott Rigby)
- chore(deps): bump the github-actions group with 4 updates (#32524) c068b543256b64515c019644381cf57276a6fec6 (dependabot[bot])
- chore(deps): bump the github-actions group with 4 updates 74271c4258a35186cb621330f5026461d01e9032 (dependabot[bot])
- chore(deps): bump github.com/santhosh-tekuri/jsonschema/v6 1c50d2f8bde0738c7f6df584d77fb469ec52848d (dependabot[bot])
- chore(deps): bump the github-actions group with 4 updates (#32509) 88215407a8901557b2318842d56e8e25aba9d84b (dependabot[bot])
- chore(deps): bump actions/stale in the github-actions group (#32488) 05a27980df8f4b22454334dbb124494510de4af6 (dependabot[bot])
- chore(deps): bump ossf/scorecard-action in the github-actions group (#32461) c27e7577e3e2793b80550315dace983ec22a0664 (dependabot[bot])
- fix(provenance): migrate to ProtonMail/go-crypto to resolve GO-2026-5932 bd392c6a60d09a6c9f467dc52dbfd249a641f80d (Karan V)
- chore(deps): bump the k8s-io group with 7 updates 66a6f5601d26bb640e0de5f877268a48de2148dd (dependabot[bot])
- chore(deps): bump the github-actions group with 4 updates 7cd01254d33ba41ec5020fd1af780cd26a6ca02a (dependabot[bot])
- chore(deps): bump github/codeql-action/upload-sarif (#32449) 79330fceb94f73508d136f389802b41face2dc41 (dependabot[bot])
- chore(deps): bump actions/labeler from 6.2.0 to 7.0.0 (#32446) b29c7309f12ff72d631425b9398aceba979a81f0 (dependabot[bot])
- chore(deps): bump github/codeql-action/analyze from 4.37.1 to 4.37.2 973bb346b83480f4daff9eb5e8f9e0180fc48b5d (dependabot[bot])
- chore(deps): bump github/codeql-action/autobuild from 4.37.1 to 4.37.2 e25efcf2837674c3b6ab1449c8b69f3fb6ee4bc4 (dependabot[bot])
- chore(deps): bump github/codeql-action/init from 4.37.1 to 4.37.2 98e547f8ed82720aca8b6287e1e76aad1ba55f9b (dependabot[bot])
- chore(deps): bump actions/checkout from 7.0.0 to 7.0.1 (#32412) 7f4b72a711e1d6d3c40f904affd99991e84456c3 (dependabot[bot])
- chore(deps): bump github/codeql-action/autobuild from 4.37.0 to 4.37.1 (#32381) 2cf1437c200dcd8586788d637340e7af3ffcc9d0 (dependabot[bot])
- chore(deps): bump actions/setup-go from 6.5.0 to 7.0.0 (#32383) 270f73b2df1887425cbe5eccceb7cafcfda81a89 (dependabot[bot])
- chore(deps): bump github/codeql-action/upload-sarif (#32382) 9e3a0100a994e4cf08372398f31cecab92ec3b2e (dependabot[bot])
- ci: auto-label PRs targeting dev-v3 (#32340) c9ed0caebae6b24b8aa64c5f587d6c11297c7dd9 (Benoit Tigeot)
- chore(deps): bump oras.land/oras-go/v2 from 2.6.1 to 2.6.2 (#32331) b842ddfccba6a388df1dd2f959d16db3ce105e16 (dependabot[bot])
- chore(deps): bump github.com/mattn/go-shellwords from 1.0.13 to 1.0.14 (#32332) f6047c96c7a83f8004752f0be201e03181d3ef59 (dependabot[bot])
- chore(deps): bump github/codeql-action/analyze from 3.26.6 to 4.37.0 (#32357) f2f6bf6e99c8d1331c7894304eb9bacc8fb7a401 (dependabot[bot])
- chore(deps): bump actions/checkout from 4.2.2 to 7.0.0 (#32368) 69f70a86748edae2d32b6106bddacba9a1c6e359 (dependabot[bot])
- chore(deps): bump actions/stale from 9.0.0 to 10.4.0 (#32369) c95222ab5af136ce9e5f3624212b31f5a496c0ec (dependabot[bot])
- chore(deps): bump actions/setup-go from 5.1.0 to 6.5.0 (#32358) fc71f51069104729717d718c324c07420059b89c (dependabot[bot])
- chore(deps): bump github/codeql-action/upload-sarif (#32360) 6596318b34e93427ebdde2cfce83b94e81c229c6 (dependabot[bot])
- chore(deps): bump github/codeql-action/init from 3.26.6 to 4.37.0 (#32359) 5d9943ca09fce64c9e98c68aedbc5ddb43eae793 (dependabot[bot])
- chore(deps): bump golang/govulncheck-action from 1.0.4 to 1.1.0 (#32356) a3d7a6c50a69008c97f42c456df1318135786c10 (dependabot[bot])
- chore(deps): bump golangci/golangci-lint-action from 6.1.1 to 9.3.0 (#32354) 8e199708cc2a3323f31274026a16839a78984a3e (dependabot[bot])
- chore(deps): bump ossf/scorecard-action from 2.4.0 to 2.4.3 (#32353) 24ef09ac19305a8c225287d983ebd26dbcb4b260 (dependabot[bot])
- chore(deps): bump golang.org/x/text from 0.38.0 to 0.40.0 (#32310) 8082dd4a0d9f1ca3dbd2052a8b0e1bba843a85c7 (dependabot[bot])
- chore(deps): bump golang.org/x/crypto from 0.53.0 to 0.54.0 (#32308) 2c24490679681b0825c258576e9f7699f8dc8e54 (dependabot[bot])
- chore(deps): bump golang.org/x/term from 0.44.0 to 0.45.0 (#32306) 953d280f928c4bc76912236bc2a8a0d11a39c016 (dependabot[bot])
- fix(engine): prevent Files.Lines panic on empty file c02a9aed3452c0c7ee9d79ded44dd170ce5001ca (Mahesh Sadupalli)
- Apply suggestions from code review 093015b3b7c466828d01697d4d3d8f4811c59942 (Benoit Tigeot)
- fix: drop containerd v1 dep to resolve govulncheck CVEs a061886b724181526f5283789e78ec4369e25ff3 (Benoit Tigeot)
- chore(deps): bump github.com/containerd/containerd from 1.7.32 to 1.7.33 f9798360983d9d964e2088427c693317a69f326e (dependabot[bot])
- chore(deps): bump github.com/cyphar/filepath-securejoin c4446659f68e94db06f0e142376f8cf1b970a878 (dependabot[bot])
- chore(deps): bump the k8s-io group with 2 updates 1bf9b5fbba4df88a562a35eef40e6c60f12b5a90 (dependabot[bot])
- fixes b7a0fd0ddc84fdfbf571486e5dac829bfb2bd78a (Matheus Pimenta)
- chore(deps): bump the k8s-io group across 1 directory with 2 updates 119a7d9babffcec9e51d285153e09d8c4f54a69d (dependabot[bot])
- fix(registry): keep credentials on plain-HTTP fallback with oras-go v2.6.1 2fb05f8a35f6c0d5760c03c12d60c46adf2b3d12 (Terry Howe)
- chore(deps): bump oras.land/oras-go/v2 from 2.6.0 to 2.6.1 acc867b88e68e5f9c074c1c8c584a57b3ae6c127 (dependabot[bot])
- chore(deps): bump golang.org/x/crypto from 0.52.0 to 0.53.0 b920935feb6b6c8729cdf6b98f4c8efc824779c5 (dependabot[bot])
- chore(deps): bump golang.org/x/term from 0.43.0 to 0.44.0 5b5ef192c773f6448e4dcd845e643c573aff906b (dependabot[bot])
- chore(deps): bump golang.org/x/text from 0.37.0 to 0.38.0 af67af8951d5f9a7631efc3a97b6dc6b58247148 (dependabot[bot])
- Update .github/env ceb9a62ec03c8d5aea94dee9c9456a7dfd89ba71 (Terry Howe)
- ci: bump golangci-lint to v2.11.3 for go 1.26 0ed92f0696329495d87f8acdc42687c30b31d431 (Terry Howe)
- chore: bump go to 1.26 c678c0c9c088fc2f9ddbad8c88416c77f4e048cc (Terry Howe)
- chore(deps): bump github.com/lib/pq from 1.11.2 to 1.12.3 12c4d45b146a8be1ca70bd15e3cad00e7d12733a (dependabot[bot])
- chore(deps): bump github.com/distribution/distribution/v3 a0f97111f5607a5724a8af110480384827a81b41 (dependabot[bot])
- chore(deps): bump github.com/containerd/containerd from 1.7.30 to 1.7.32 995c31e20bf3ab9a4feb85cd4a54951d9418ea51 (dependabot[bot])
- chore(deps): bump github.com/Masterminds/semver/v3 from 3.4.0 to 3.5.0 8c171688281d3c1f14d908cf682c742585848db0 (dependabot[bot])
- chore(deps): bump github.com/mattn/go-shellwords from 1.0.12 to 1.0.13 fe141bd537ea42e64bec3b3b181dcf955260e939 (dependabot[bot])
- chore(deps): bump golang.org/x/crypto from 0.51.0 to 0.52.0 980836f726fdfbd6a2f0662a0aa48fe35da3fd64 (dependabot[bot])
- fix(deps): bump golang.org/x/net to v0.55.0 to address GO-2026-5026 1dde6c7551746a74a6f69db06eaf4fc58a90042b (Terry Howe)
- chore(deps): bump k8s.io/klog/v2 from 2.130.1 to 2.140.0 0162feda1d4d6dd0bd1f227ecdfe9f489e6d7284 (dependabot[bot])
- chore(deps): bump golang.org/x/text from 0.35.0 to 0.37.0 a664a58f43c742987376bca589891fda3bf55668 (dependabot[bot])
- [v3] Bump to version v3.21 (#32103) 3033a778b611b7501dffae7bd57c071dde318b6c (George Jenkins)
- [v3 backport] Fix rollback for missing resources 0a4757359edcdfaad2e19e8ee3518188bd3cfa1b (Feruzjon Muyassarov)
- fix(action): avoid nil REST client getter panic when installing CRDs 711a4eaf40a911b0864a01b99f59f62817443003 (sergiochan)

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v3.22.0` · 2026-09-10 · [upstream release](https://github.com/helm/helm/releases/tag/v3.22.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
