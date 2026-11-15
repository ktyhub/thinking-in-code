---
title: "helm v4.2.4"
project: "helm"
repo: "helm/helm"
tag: "v4.2.4"
version: "v4.2.4"
published: "2026-08-13"
type: "patch"
lang: "en"
summary: "Helm v4.2.4 is a patch release. Users are encouraged to upgrade for the best experience."
---

# helm v4.2.4

Helm v4.2.4 is a patch release. Users are encouraged to upgrade for the best experience.

The community keeps growing, and we'd love to see you there!

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  -  for questions and just to hang out
  -  for discussing PRs, code, and bugs
- Hang out at the Public Developer Call: Thursday, 9:30 Pacific via [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- Test, debug, and contribute charts: [ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## Notable Changes

- fix: Improve error reporting for helm template --debug with --show-only- #31185 by @kyokuping
- fix: fetch logs from all containers in test pods- #32099 by @SebTardif
- fix(provenance): check error return in Digest and encodeRelease- #32136 by @SebTardif
- fix panic on repeated IsReachable calls- #32184 by @atkrad
- fix: set [pull,push] scope when helm push to a registry(use token auth) - v4- #31211 by @kimsungmin1
- Fix missing conflict retry with server-side apply- #32088 by @Kajot-dev
- Properly format the extra field in gzipped packages- #31884 by @ouillie 
- Fix vanishing empty lines- #32327 by @matheuscscp
- fix: pass registry client to downloader.Manager in upgrade- #32400 by @SetagGnaw
- chore(deps): bump google.golang.org/grpc from 1.80.0 to 1.82.1- for GO-2026-6061 #32450
- fix: bump go.opentelemetry.io/otel to v1.44.0 for GO-2026-5158- #32521 by @TerryHowe

## Installation and Upgrading

Download Helm v4.2.4. The common platform binaries are here:

- [MacOS amd64](https://get.helm.sh/helm-v4.2.4-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-darwin-amd64.tar.gz.sha256sum) / 6c163d687ca03c3b5c01928e53bbbcf9518278f47ce7a2f249a5a08e8bdaa2bc)
- [MacOS arm64](https://get.helm.sh/helm-v4.2.4-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-darwin-arm64.tar.gz.sha256sum) / d747eb4e28bd2727173d15b759fa0a17822291ec09db7ced3d55af290a3661a2)
- [Linux amd64](https://get.helm.sh/helm-v4.2.4-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-amd64.tar.gz.sha256sum) / c306b46f719b0a4da32d0f78ee21bf90ce8d602f15b22ab753f0674d1670a7f3)
- [Linux arm](https://get.helm.sh/helm-v4.2.4-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-arm.tar.gz.sha256sum) / 894e901f7daaf9b458baad7b5c685bfeef49070d7d53f99687bd5846a6c13639)
- [Linux arm64](https://get.helm.sh/helm-v4.2.4-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-arm64.tar.gz.sha256sum) / 564de2191b881e9f71b5606b25345821ea1682f06ab90499d3ab22b530176da1)
- [Linux i386](https://get.helm.sh/helm-v4.2.4-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-386.tar.gz.sha256sum) / 45297aeac0c65173a89e8de832997f952ba5115c2db09b2e3f2c23a601e70583)
- [Linux loong64](https://get.helm.sh/helm-v4.2.4-linux-loong64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-loong64.tar.gz.sha256sum) / faafbfecc1a06196e650c3ce0c74d5ac32cb1c0c0a855fa76e59dd100cb8d4c4)
- [Linux ppc64le](https://get.helm.sh/helm-v4.2.4-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-ppc64le.tar.gz.sha256sum) / 5c00073e9d493de201384bb7eb19d60615bd7c39db52148473e8ce6da84bc70a)
- [Linux s390x](https://get.helm.sh/helm-v4.2.4-linux-s390x.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-s390x.tar.gz.sha256sum) / 5396a35fca5fa46e5614140363f389ce66f96886c1b25f256d9e3028299422fa)
- [Linux riscv64](https://get.helm.sh/helm-v4.2.4-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.2.4-linux-riscv64.tar.gz.sha256sum) / d8532a3524ca842887b15ab794377dc9c8ced8f26264c84171b4b0aafff05411)
- [Windows amd64](https://get.helm.sh/helm-v4.2.4-windows-amd64.zip) ([checksum](https://get.helm.sh/helm-v4.2.4-windows-amd64.zip.sha256sum) / e94d83a4706fd82078c98dade2079fa9d9680c1c2bfb93bfc304ee6bc2412a32)
- [Windows arm64](https://get.helm.sh/helm-v4.2.4-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v4.2.4-windows-arm64.zip.sha256sum) / dbe8b49ea9877abe3d77354a792efb01920da9f65a492fcb8b4fce4e08bbae8f)

This release was signed with `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` and can be found at @scottrigby [keybase account](https://keybase.io/r6by). Please use the attached signatures for verifying this release using `gpg`.

The [Quickstart Guide](https://helm.sh/docs/intro/quickstart/) will get you going from there. For **upgrade instructions** or detailed installation notes, check the [install guide](https://helm.sh/docs/intro/install/). You can also use a [script to install](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4) on any system with `bash`.

## What's Next

- 4.3.0 and 3.22.0 are the next minor releases scheduled for September 9, 2026

## Changelog

- Minimal fix to build failure from #31211. 3900f434fd3ef2b84065dc04508df48f288dba00 (Scott Rigby)
- fix: bump go.opentelemetry.io/otel to v1.44.0 for GO-2026-5158 (#32521) f7c6e8f0f1e0e649e8d03b1535db4f3b8d0c9af2 (Terry Howe)
- chore(deps): bump google.golang.org/grpc from 1.80.0 to 1.82.1 035a2c38e9a75ca0988c8449c0b7257f30d04064 (dependabot[bot])
- fix: pass registry client to downloader.Manager in upgrade f76a5f46a952f731cc1543f348121297c8b3f6cc (Gates Wang)
- Apply suggestions 5a7c6c7c732b04ad6517b452d538da9e18993d67 (Will Noble)
- Properly format the extra field in gzipped packages 22818486ce0fc18d92e01ba39faf65f70ffa8865 (Will Noble)
- Fix missing conflict retry with server-side apply (#32088) 2c979a17ac6b6d7bfe2d6650b69fa9effe963d4d (Jakub Jaruszewski)
- Potential fix for pull request finding 2bd2c66544634e419ede3cfa18952cce5a5acd08 (kimsungmin1)
- fix(registry): resolve golangci-lint issues in token-auth tests 183a5402291c553898b9c404bc17c95c81ea1c6c (kimsm28)
- chore: go mod tidy after rebase on main 08d8da1aa9080772e57ab5bf5b00b3c13364af00 (kimsm28)
- fix(registry): use plain-http registry in token-auth scope test 9655b5aecc0d36142d0620ff5ed762065a997739 (kimsm28)
- Update pkg/registry/client.go 430dfac3eeab03886f511761e3969f738f760364 (Terry Howe)
- test: improve client_scope_test.go to avoid data races and brittle assertions 9569605eccf8318fe25bf78c46c4eb462ce8fc3f (kimsm28)
- fix typos in withScopeHint function comment 63f2b6809919e5e8e3e04f52064a536a14f1ff9b (kimsm28)
- fix registry test failures by adjusting DockerRegistryHost and auth server listener management f7488c0be8c65dd16386c215cac4332900667278 (kimsm28)
- fix variable naming requestUrl -> requestURL 8fe78fbe46eb2db5c75ab1cc89699c750017dca6 (kimsm28)
- fix typo, remove unnecessary code, fix to avoid to use the assertion in http hanlder d0670d2fb2c3426cde4b41927b5e9b8b4370df93 (kimsm28)
- change suite.Nil, suite.NotNill to more proper function(suite.NoError, suite.Error) 804256ef659226f26b2222ccb8f9cf18ef1b1946 (kimsungmin1)
- change client_scope_test.go to use httptest d79bceb807692512461d8007040c41bcd1547041 (kimsungmin1)
- fix typo d34fcd9264225a1e6296c4b0ee124dc69f3b3ecc (kimsungmin1)
- remove freeport dependency 9fbd190c30addb4786e4fe930a0fe98bf354116a (kimsungmin1)
- add newline in license header 9275661357afdfe12b8ce561e8103673f16cca8d (kimsungmin1)
- fix scope when helm push to a registry that use token auth fef91f3e6942a20148542461eaebfb24f2c09584 (kimsungmin1)
- fix panic on repeated IsReachable calls e89ce68bc5fec430bc1e2f0aef1aca6a2e71f795 (Mohammad Abdolirad)
- fix(provenance): check error return in Digest ff1ac83bfb1246cdf1b57a4db0042085cc8b265d (Sebastien Tardif)
- fix: address review feedback 4b4dedb2bdcfac886c124a361a5126e3c5e3c5df (Sebastien Tardif)
- fix: fetch logs from all containers in test pods 7c8010322b8639cdf7844ac1ae5f8d444db43935 (Sebastien Tardif)
- chore: rename savedErr to clear its specific purpose ecc9cd2f1b5b53dadcd12395c032bc5b3ca02937 (Jeaeun Kim)
- chore: fix lint f6211ba49bfbf5768ea44be3a1402869a4709b37 (Jeaeun Kim)
- chore: store err separately for clarity 3507ea5bfdbad921684ac131896b6968c76e9ca6 (Jeaeun Kim)
- chore: Improve error reporting for `helm template --debug` with `--show-only` 211ffae93d2d741a2dbcd74b4aa2a1bc2fc27d5f (Jeaeun Kim)
- Address review comments 51a9837ba177812c381515886c4f0cd0b7a633e6 (Matheus Pimenta)
- Fix vanishing empty lines 83a8b70ffc1bcf97bb293cf6b35bd3b5093e8c30 (Matheus Pimenta)

**Full Changelog**: https://github.com/helm/helm/compare/v4.2.3...v4.2.4

---

> **Source** [helm/helm](https://github.com/helm/helm) · `v4.2.4` · 2026-08-13 · [upstream release](https://github.com/helm/helm/releases/tag/v4.2.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
