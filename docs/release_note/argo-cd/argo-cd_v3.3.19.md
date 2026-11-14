---
title: "argo-cd v3.3.19"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.3.19"
published: "2026-11-02"
type: "patch"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.3.19

> [!IMPORTANT]
> **END OF LIFE NOTICE**
> 
> This is the final release of the v3.3 release series. As of November 3rd, 2026 this version has reached end of life and will no longer receive bug fixes or security updates.
> 
> **Action Required**: Please upgrade to a [supported version](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) (v3.4.13, v3.5.7, or v3.6.0).

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.19/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.19/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* f3920718a235474abce92643a39009206bcbdee0: fix(actions): list Rollout actions when the Rollout has no status (#30291) (cherry-pick #30331 for 3.3) (#30650) (@argo-cd-cherry-pick-bot[bot])
* ef201d30d0ab0ea39e73ed6b256ef33341734066: fix(appset): do not expose reserved cluster annotations as parameters (cherry-pick #30448 for 3.3) (#30480) (@argo-cd-cherry-pick-bot[bot])
* 34c59a8618fcf449fee6c2c700374497427eac73: fix(appset): refresh GitLab pull request generators configured with the project path (#13766) (cherry-pick #30578 for 3.3) (#30622) (@argo-cd-cherry-pick-bot[bot])
* 42bdff47a836f5d23d3a210a6321dbfb7860c757: fix(cli): honor HTTP_PROXY/HTTPS_PROXY/NO_PROXY for gRPC-web connections (cherry-pick #29642 for 3.3) (#30500) (@argo-cd-cherry-pick-bot[bot])
* 67ab019a3bc17290a400d33e4a48f4fb182b1d86: fix(controller): allow terminating an operation blocked by a sync window (#26395) (cherry-pick #30267 for 3.3) (#30504) (@argo-cd-cherry-pick-bot[bot])
* 36c346e4f55e79bceafe1de77b136000e9229de2: fix(exec): don't leak a goroutine when a command times out without waiting (cherry-pick #30394 for 3.3) (#30434) (@argo-cd-cherry-pick-bot[bot])
* e34397f031f57caf8618a2e301883dacad03fe14: fix(git): send SIGTERM before SIGKILL when a git command is cancelled (cherry-pick #30393 for 3.3) (#30409) (@argo-cd-cherry-pick-bot[bot])
* 569750a28487f2ecea265fdec0681c9610687fd0: fix(health): handle Crossplane Providers missing the Installed or Healthy condition (#23363) (cherry-pick #30429 for 3.3) (#30626) (@argo-cd-cherry-pick-bot[bot])
* 6ba0b1b902a08899d2301f51c7dc6bf7018392f9: fix(health): report inactive Crossplane ManagedResourceDefinitions as Healthy (#25270) (cherry-pick #30404 for 3.3) (#30422) (@argo-cd-cherry-pick-bot[bot])
* 6cc8e2b686921298bf28b09efc74e86254c9b0b1: fix(health): use status.healthy for customize.core.cnrm.cloud.google.com resources (#30164) (cherry-pick #30165 for 3.3) (#30656) (@argo-cd-cherry-pick-bot[bot])
* 75e5d842048d8eb69c275fcbf5074c118699b388: fix(server): allow the gRPC health check without authentication (#26193) (cherry-pick #30474 for 3.3) (#30570) (@antcybersec)
* eba2d77b69ad682569b449b0735b2d872b4aad18: fix(ui): refine validation and handling for write credentials in repo settings (cherry-pick #30489 for 3.3) (#30596) (@adityaraj178)
* f985ac90bd667cfeff96020b4479f05efa5b0b46: fix: Ingress link scheme (https) when tls is enabled without secretName (cherry-pick #28888 for 3.3) (#30510) (@argo-cd-cherry-pick-bot[bot])
* e388575711448f104b8a02d560e4ffdd0cbea7a0: fix: accept IP and port as OCI Helm repository URL (#21374) (cherry-pick #30233 for 3.3) (#30514) (@argo-cd-cherry-pick-bot[bot])
* f44be7e77366df5b40c614e3ae2b14876b5512d9: fix: badges with short revisions get correct width (#29335) (cherry-pick #29336 for 3.3) (#30582) (@argo-cd-cherry-pick-bot[bot])
* 35bf00a57b47c093ab4398ffe51e57733972e426: fix: honor UserInfo cache limit when response omits expires (cherry-pick #30462 for 3.3) (#30619) (@adityaraj178)
* 17ed834ad948dc8f03315a7c1c7f85c6e6e2bb40: fix: prevent panic in glob.MatchStringInList for "/" sourceNamespaces entry (cherry-pick #30572 for 3.3) (#30612) (@argo-cd-cherry-pick-bot[bot])
* feb076b1f2042d346e507af845dc70830fb542c6: fix: skip dollar escaping when DEX_EXPAND_ENV is disabled (cherry-pick #29181 for 3.3) (#30647) (@argo-cd-cherry-pick-bot[bot])
* 4145a4c5b9ea01b1444e550a73035d24023c6584: fix: wait for current SealedSecret generation before reporting health (cherry-pick #29867 for 3.3) (#30356) (@argo-cd-cherry-pick-bot[bot])
### Other work
* 554529f5d80cfeb2307ea22ea1d0bad5a17fdfe6: chore: bump version to 3.3.19 on release-3.3 branch (#30722) (@github-actions[bot])
* df91d320ad013e685f1bcc24d746e52dd0f89d56: fix(gitops-engine): race condition on empty-uid backfill (cherry-pick #28343 for 3.3) (#30525) (@argo-cd-cherry-pick-bot[bot])
* 4f209aaaf5c4949cda60cb9b87541cc03d69d99a: test(cmpserver): fix flaky timing assertions in RunCommand timeout tests (#30377) (cherry-pick #30378 for 3.3) (#30420) (@argo-cd-cherry-pick-bot[bot])
* 303bb45761d5dca1b27d867fc06c84b1eda88809: test(notification-controller): fix flaky TestInitTimeout (#30401) (cherry-pick #30406 for 3.3) (#30413) (@argo-cd-cherry-pick-bot[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.3.18...v3.3.19

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.3.19` · 2026-11-02 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.3.19)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
