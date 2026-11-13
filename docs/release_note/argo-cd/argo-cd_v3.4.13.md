---
title: "argo-cd v3.4.13"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.4.13"
published: "2026-11-02"
type: "patch"
lang: "en"
summary: "kubectl create namespace argocd kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.13/manifests/install.yaml"
---

# argo-cd v3.4.13

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.13/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.13/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* 42e23cb0447d6ce5b697ef7a2f5e9f534b10adab: fix(actions): list Rollout actions when the Rollout has no status (#30291) (cherry-pick #30331 for 3.4) (#30653) (@argo-cd-cherry-pick-bot[bot])
* 9b48378d633afc4fcb0e1dc3797f34dbc5ff27b9: fix(app): ensure deletion message is printed only for text output fomat (cherry-pick #30600 for 3.4) (#30617) (@argo-cd-cherry-pick-bot[bot])
* 19c7221298ae47ea792c70c5ac7860d431a8155b: fix(appset): do not expose reserved cluster annotations as parameters (cherry-pick #30448 for 3.4) (#30479) (@argo-cd-cherry-pick-bot[bot])
* 46a318feda1b74c57f6fd397d25ef6f489218acd: fix(appset): refresh GitLab pull request generators configured with the project path (#13766) (cherry-pick #30578 for 3.4) (#30621) (@argo-cd-cherry-pick-bot[bot])
* 1085b625752f58231ae97aced6f3358f6b04d34e: fix(cli): honor HTTP_PROXY/HTTPS_PROXY/NO_PROXY for gRPC-web connections (cherry-pick #29642 for 3.4) (#30499) (@argo-cd-cherry-pick-bot[bot])
* 53c49c344cb0fb12e5cc6eb5b70b885997b3e55a: fix(cli): send --header values when refreshing an expired auth token (#30547) (@nitishfy)
* 97854e734175d6d87bc8ec49f1d0f911aa2a30f5: fix(controller): allow terminating an operation blocked by a sync window (#26395) (cherry-pick #30267 for 3.4) (#30502) (@argo-cd-cherry-pick-bot[bot])
* 39d0bc10609dec4e89bdfea307319ee10ef58d07: fix(exec): don't leak a goroutine when a command times out without waiting (cherry-pick #30394 for 3.4) (#30435) (@argo-cd-cherry-pick-bot[bot])
* 7c167f72aaebe7de9c9ca783e69cde4c5e5e981e: fix(git): send SIGTERM before SIGKILL when a git command is cancelled (cherry-pick #30393 for 3.4) (#30408) (@argo-cd-cherry-pick-bot[bot])
* ab4858698569c6374fbef03188598630dc52bd87: fix(health): handle Crossplane Providers missing the Installed or Healthy condition (#23363) (cherry-pick #30429 for 3.4) (#30625) (@argo-cd-cherry-pick-bot[bot])
* 72ac2bc21ace9f1e5ff7b2c2f626ebf0ef02932d: fix(health): report inactive Crossplane ManagedResourceDefinitions as Healthy (#25270) (cherry-pick #30404 for 3.4) (#30424) (@argo-cd-cherry-pick-bot[bot])
* f5ede5b9e2c23433e4e67761f135a5aec52a23b8: fix(health): use status.healthy for customize.core.cnrm.cloud.google.com resources (#30164) (cherry-pick #30165 for 3.4) (#30654) (@argo-cd-cherry-pick-bot[bot])
* de71193ca852126f0087f17ef02b0dab4f93da04: fix(server): allow the gRPC health check without authentication (#26193) (cherry-pick #30474 for 3.4) (#30569) (@antcybersec)
* e8472fa093b33dfc58296ba972bcb13db52bbd4a: fix(sync): remove hook finalizer when live object is missing from reconciliation cache (cherry-pick #29469 for 3.4) (#30659) (@argo-cd-cherry-pick-bot[bot])
* 4bfc7be6bb5da26538439a9c97462c31d8960aff: fix(ui): keep status panel links readable when focused in dark mode (#29288) (cherry-pick #30493 for 3.4) (#30541) (@argo-cd-cherry-pick-bot[bot])
* e27c9c77a12ea2fc1da814c644a4c640e1f0e5db: fix(ui): refine validation and handling for write credentials in repo settings (cherry-pick #30489 for 3.4) (#30595) (@adityaraj178)
* 7aa6bdfbe69492d7b0cf638b8ca68f33b780c94f: fix: Ingress link scheme (https) when tls is enabled without secretName (cherry-pick #28888 for 3.4) (#30507) (@argo-cd-cherry-pick-bot[bot])
* e0370cf8fbabf9e26c812f248ad652c033d469c4: fix: accept IP and port as OCI Helm repository URL (#21374) (cherry-pick #30233 for 3.4) (#30516) (@argo-cd-cherry-pick-bot[bot])
* 69f908f48ca4f54cfa4ca9856944b8f332e663b5: fix: badges with short revisions get correct width (#29335) (cherry-pick #29336 for 3.4) (#30581) (@argo-cd-cherry-pick-bot[bot])
* 0023636b039fd08bb5ae9e8784767c4e7c514081: fix: fix escaped URL routing for write repo (creds) endpoints (cherry-pick #29940 for 3.4) (#29955) (@argo-cd-cherry-pick-bot[bot])
* 6929086472b2c7afa0e5423b15e5c6c895f643f6: fix: honor UserInfo cache limit when response omits expires (cherry-pick #30462 for 3.4) (#30624) (@adityaraj178)
* 40f9a9bb66344cdc8319f470bbe052e5f74aeaba: fix: include multi-source revisions in sync completion event (cherry-pick #30446 for 3.4) (#30470) (@gdsoumya)
* 2145508808043f7f65c42c01ce25235d6c437df8: fix: prevent panic in glob.MatchStringInList for "/" sourceNamespaces entry (cherry-pick #30572 for 3.4) (#30614) (@argo-cd-cherry-pick-bot[bot])
* 9b3eb49fb276eeb62716c548ece2c3cb00186ded: fix: skip dollar escaping when DEX_EXPAND_ENV is disabled (cherry-pick #29181 for 3.4) (#30646) (@argo-cd-cherry-pick-bot[bot])
* 3ce8c62d31132b54c70e1cdabfc235b444e34b3f: fix: wait for current SealedSecret generation before reporting health (cherry-pick #29867 for 3.4) (#30353) (@argo-cd-cherry-pick-bot[bot])
### Other work
* 83ad9cd88fa03ec152b267b371e03ad670c4dd81: chore: bump version to 3.4.13 on release-3.4 branch (#30721) (@github-actions[bot])
* 4dac47eb4c0463e2aeec71ad788e4abba2faf362: fix(gitops-engine): race condition on empty-uid backfill (cherry-pick #28343 for 3.4) (#30526) (@argo-cd-cherry-pick-bot[bot])
* fc097bdd9f24dfe282675f26718a234322770ca1: test(cmpserver): fix flaky timing assertions in RunCommand timeout tests (#30377) (cherry-pick #30378 for 3.4) (#30417) (@argo-cd-cherry-pick-bot[bot])
* c49dd280a98491c14b8c286fc676f549b110eed6: test(notification-controller): fix flaky TestInitTimeout (#30401) (cherry-pick #30406 for 3.4) (#30415) (@argo-cd-cherry-pick-bot[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.4.12...v3.4.13

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.4.13` · 2026-11-02 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.4.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
