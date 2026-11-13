---
title: "harbor v2.15.3"
project: "harbor"
repo: "goharbor/harbor"
tag: "v2.15.3"
published: "2026-10-06"
type: "patch"
lang: "en"
---

# harbor v2.15.3

<!-- Release notes generated using configuration in .github/release.yml at v2.15.3 -->

> [!WARNING]
> **Breaking change: webhooks to internal addresses are blocked by default**
>
> The fix for [GHSA-2phj-cp9f-qq6w](https://github.com/goharbor/harbor/security/advisories/GHSA-2phj-cp9f-qq6w) blocks webhook and Slack delivery to private, loopback, link-local and other non-public addresses. That includes hostnames that resolve to them, such as `*.svc.cluster.local`. After you upgrade, existing webhooks to internal endpoints fail to deliver, and new ones are rejected.
>
> To allow them again, set the opt-out on **both core and jobservice**:
> - `harbor.yml`: `network.allow_private_network_access: true`, then `./prepare` and restart
> - Helm: add `{name: HARBOR_ALLOW_PRIVATE_NETWORK_ACCESS, value: "true"}` to both `core.extraEnvVars` and `jobservice.extraEnvVars`
>
> This disables the protection entirely. Only use it if you trust all project admins, and block `169.254.169.254` at the network level.

> [!WARNING]
> **Breaking change: signing unsigned images fails when content trust is enforced**
>
> The fix for [GHSA-wrw5-gmvj-gf23](https://github.com/goharbor/harbor/security/advisories/GHSA-wrw5-gmvj-gf23) removes the User-Agent based exemption that let `cosign` and `notation` pull unsigned images. In projects that only allow signed images, `cosign sign` and `notation sign` on a new, unsigned image now fail with `412 Precondition Failed`. Images that already have a signature are not affected.
>
> To allow signing clients again, set `CONTENT_TRUST_LEGACY_SIGNER_PULL_ENABLED=true` on **core**. The value must be exactly `true`.
> - Helm: add it to `core.extraEnvVars`
> - `harbor.yml` installs: there is no `harbor.yml` option. Add it to `common/config/core/env` and restart. Re-running `./prepare` overwrites that file.
>
> The exemption still trusts the client's User-Agent, but only for users or robots with push permission on the project. Projects that block vulnerable images have no opt-out: a signing client can no longer pull an image that the vulnerability policy blocks.

<!-- Release notes generated using configuration in .github/release.yml at v2.15.3 -->

> [!WARNING]
> **Known Issue: Push Replication Fails for Specific Registries such as AWS ECR (GHSA-wjpm-hv5w-gxr6 Regression)**
>
> The security fix for GHSA-wjpm-hv5w-gxr6 strictly validated upload Location headers against the statically configured registry endpoint (c.url). Because the AWS ECR adapter configures the API control-plane endpoint (https://api.ecr.<region>.amazonaws.com) while requests are rewritten to the data-plane host (<account>.dkr.ecr.<region>.amazonaws.com), ECR's response Location header is rejected as a cross-origin target.
>
>Workaround / Resolution:
>
> A fix has been provided in PR [#24113](https://github.com/goharbor/harbor/pull/24113) and will be released in the upcoming patch release.
> If your environment depends on push replication, we recommend postponing the upgrade until the next patch release or applying the patch directly.

## What's Changed
### Security Advisories 🔒
* (high): Path traversal vulnerability in distribution endpoints [GHSA-qj39-pjf2-wmrc](https://github.com/goharbor/harbor/security/advisories/GHSA-qj39-pjf2-wmrc) in [`a82c5528f`](https://github.com/goharbor/harbor/commit/a82c5528f1e939a78f2ce9acab9ecd03ee90b98f)
* (high): A system robot with user:update makes itself a system administrator [GHSA-w5fq-xrhj-j7g2](https://github.com/goharbor/harbor/security/advisories/GHSA-w5fq-xrhj-j7g2) in [`8896be0ae`](https://github.com/goharbor/harbor/commit/8896be0aed0dbbd2b59d1524b748b4699e823c39)
* (high): Robot "cover all projects" scope collapses into a global wildcard, conferring the deliberately-ungrantable robot:update — enabling cross-project robot takeover with owner lockout [GHSA-xq2m-cj8w-56v5](https://github.com/goharbor/harbor/security/advisories/GHSA-xq2m-cj8w-56v5) in [`7331b58d5`](https://github.com/goharbor/harbor/commit/7331b58d594f245aaf7f70515473aedffff85499)
* (high): External auth-proxy identity named admin inherits Registry system-administrator authorization [GHSA-xvh7-74g6-29xw](https://github.com/goharbor/harbor/security/advisories/GHSA-xvh7-74g6-29xw) in [`13e5a1b97`](https://github.com/goharbor/harbor/commit/13e5a1b979d90d346716c19eefc5f6cfa31dce0e)
* (medium): Immutable tag rule matcher only evaluates first repository/tag selector, allowing multi-selector rules to be bypassed [GHSA-27f2-qg57-2gwg](https://github.com/goharbor/harbor/security/advisories/GHSA-27f2-qg57-2gwg) in [`08c58f3c7`](https://github.com/goharbor/harbor/commit/08c58f3c76bd8e9252996a3cc62dade10d4e3ab4)
* (medium): SSRF in webhook delivery allows ProjectAdmin to reach internal services and cloud metadata endpoints [GHSA-2phj-cp9f-qq6w](https://github.com/goharbor/harbor/security/advisories/GHSA-2phj-cp9f-qq6w) in [`fb476e10c`](https://github.com/goharbor/harbor/commit/fb476e10c9f981bd994011563bef6c5292ec272c)
* (medium): Scanner bearer authorization request disables TLS verification and reads the full response body [GHSA-884q-mjcg-86x4](https://github.com/goharbor/harbor/security/advisories/GHSA-884q-mjcg-86x4) in [`eb1a6fb64`](https://github.com/goharbor/harbor/commit/eb1a6fb6424d523213eeac1faffd938cc687f2af)
* (medium): Webhook error responses can cause unbounded decompression in Jobservice [GHSA-jw3v-7jvc-pfmx](https://github.com/goharbor/harbor/security/advisories/GHSA-jw3v-7jvc-pfmx) in [`fb476e10c`](https://github.com/goharbor/harbor/commit/fb476e10c9f981bd994011563bef6c5292ec272c)
* (medium): scanner_registration.access_cred is missing filter:"false", giving a project admin a blind oracle over the scanner credential [GHSA-vwvv-675v-p6rr](https://github.com/goharbor/harbor/security/advisories/GHSA-vwvv-675v-p6rr) in [`d2e2312f5`](https://github.com/goharbor/harbor/commit/d2e2312f5735777b37041674bb146bcbd02fc054)
* (medium): Registry chunk upload reuses unvalidated Location headers [GHSA-wjpm-hv5w-gxr6](https://github.com/goharbor/harbor/security/advisories/GHSA-wjpm-hv5w-gxr6) in [`401e73429`](https://github.com/goharbor/harbor/commit/401e7342963c4c406fd103cf2931e8aac95d320d)
* (medium): Vulnerability & Content-Trust pull policies bypassable via attacker-controlled `User-Agent` header [GHSA-wrw5-gmvj-gf23](https://github.com/goharbor/harbor/security/advisories/GHSA-wrw5-gmvj-gf23) in [`9d255ebe1`](https://github.com/goharbor/harbor/commit/9d255ebe1ad3cae00929af2f8100cec566d9ee97)
* (medium): SSRF and credential disclosure via attacker-controlled pagination Link header in the registry replication client [GHSA-xgp2-5vxg-rgh2](https://github.com/goharbor/harbor/security/advisories/GHSA-xgp2-5vxg-rgh2) in [`a01e0c6c5`](https://github.com/goharbor/harbor/commit/a01e0c6c561458fc719a16310d02b928a87e589a)
* (low): Security middleware continues after AuthMode lookup failure [GHSA-3x7c-wf86-mjx6](https://github.com/goharbor/harbor/security/advisories/GHSA-3x7c-wf86-mjx6) in [`bfd319a92`](https://github.com/goharbor/harbor/commit/bfd319a928460e50ad8f0536b5e163cefb24ef5c)

### Component updates ⬆️
* (cherry-pick) fix: avoid panic in user audit event resolver on nil event data (#23461) by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23501
* (cherry-pick) fix: Constrain /registries/ping to the saved URL for existing registries (#23463) by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23502
* (cherry-pick) Add a size limit for manifest uploads by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23503
* cherry-pick: fix(ui): use dark login background in dark mode by @bupd in https://github.com/goharbor/harbor/pull/23539
* ci: remove third-party docker action by @stonezdj in https://github.com/goharbor/harbor/pull/23693
* (cherry-pick) neutralize CSV formula in scan export by @stonezdj in https://github.com/goharbor/harbor/pull/23696
* (cherry-pick): prevent proxy-cache poisoning via robot-name prefix by @stonezdj in https://github.com/goharbor/harbor/pull/23695
* (cherry-pick) Exclude replication from dockerhub in github action by @stonezdj in https://github.com/goharbor/harbor/pull/23715
* (cherry-pick) fix: convert setup_timestamp, status_revision, and revision columns to bigint to avoid Y2K38 overflow (#23711) by @stonezdj in https://github.com/goharbor/harbor/pull/23719
* (cherry-pick) add size limit for audit log payload by @stonezdj in https://github.com/goharbor/harbor/pull/23758
* (cherry-pick) Refine utils function IsLocalPath by @stonezdj in https://github.com/goharbor/harbor/pull/23757
* [Backport] test(api): enhance stability of test_copy_disability in tag immutability by @fiona-xie in https://github.com/goharbor/harbor/pull/23775
* (cherry-pick): query robot account to validate proxy session and fix UT by @stonezdj in https://github.com/goharbor/harbor/pull/23780
* [cherry-pick]fix: correct grammar and typos in user-facing error messages by @wy65701436 in https://github.com/goharbor/harbor/pull/23822
* [cherry pick] Remove hardcoded credentials and prevernt passwords in logs by @jUDASmILE in https://github.com/goharbor/harbor/pull/23865
* make hostname comparisons case-insensitive by @stonezdj in https://github.com/goharbor/harbor/pull/23833
* [cherry pick] improve HTTP client request logging and credential str… by @jUDASmILE in https://github.com/goharbor/harbor/pull/23876
* [cherry pick]refactor: sanitize connection details in logs and enhance error messa… by @jUDASmILE in https://github.com/goharbor/harbor/pull/23886
* (cherry-pick) make endpoint handling and validation case-insensitive by @stonezdj in https://github.com/goharbor/harbor/pull/23887
* [cherry pick] cherry pick 23974 changes to release-2.15.0 branch by @jUDASmILE in https://github.com/goharbor/harbor/pull/23982
* [CHERRY-PICK] fix(gc): do not count blobs missing from storage as freed space by @velmoga in https://github.com/goharbor/harbor/pull/23980
### Bump Component Version 🤖
* bump the v2.15.3 by @wy65701436 in https://github.com/goharbor/harbor/pull/23508
* chore(deps): bump the patch-updates group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23728
* chore(deps-dev): bump stylelint from 14.16.1 to 17.14.1 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23741
* bump golang to v1.26.7 and refresh base image by @stonezdj in https://github.com/goharbor/harbor/pull/23797
* Bump trivy(0.74.0) and trivy adapter(0.39.0) by @stonezdj in https://github.com/goharbor/harbor/pull/23796
* chore(deps): upgrade Go dependencies to fix CVEs by @stonezdj in https://github.com/goharbor/harbor/pull/23802
* (cherry-pick): bump golang.org/x/crypto to v0.55.0 by @stonezdj in https://github.com/goharbor/harbor/pull/23825
* chore(deps-dev): bump express and @types/express in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23739
* Bump up distribution version by @stonezdj in https://github.com/goharbor/harbor/pull/23811
* chore(deps): upgrade Go dependencies to fix CVEs by @stonezdj in https://github.com/goharbor/harbor/pull/23877
* Bump up distribution version by @stonezdj in https://github.com/goharbor/harbor/pull/23890
* chore(deps): bump github.com/go-asn1-ber/asn1-ber from 1.5.8-0.20250403174932-29230038a667 to 1.5.8 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23905
* chore(deps): bump github.com/go-openapi/runtime from 0.32.2 to 0.33.2 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23909
* chore(deps): bump marked from 18.0.9 to 18.0.12 in /src/portal in the patch-updates group across 1 directory by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23852
* chore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.19.19 to 1.20.3 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23908
* chore(deps): bump golang.org/x/sync from 0.22.0 to 0.23.0 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23904
* chore(deps): bump github.com/jackc/pgx/v5 from 5.10.0 to 5.11.0 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23902
* chore(deps): bump the patch-updates group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23844
* chore(deps-dev): bump karma-chrome-launcher from 3.1.1 to 3.2.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23740
* chore(deps): bump the kubernetes group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23898
* chore(deps-dev): bump webpack from 5.107.2 to 5.110.3 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23849
* chore(deps): bump css-loader from 6.11.0 to 7.1.5 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23846
* chore(deps): bump echarts from 5.6.0 to 6.1.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23730
* chore(deps-dev): bump webpack-dev-server from 4.15.2 to 6.0.0 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23959
* chore(deps-dev): bump stylelint from 17.14.1 to 17.15.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23962
* chore(deps): bump marked from 18.0.12 to 18.0.13 in /src/portal in the patch-updates group by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23960
* chore(deps-dev): bump webpack from 5.110.3 to 5.111.0 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23958
* Bump up distribution version and refresh base image by @stonezdj in https://github.com/goharbor/harbor/pull/23991
### Other Changes
* (cherry-pick) Fix job service dashboard testcase failed issue by @stonezdj in https://github.com/goharbor/harbor/pull/23492
* (cherry-pick): fix race condition in log rotation test by polling job status by @stonezdj in https://github.com/goharbor/harbor/pull/23525
* (cherry-pick)ci: pin docker-practice/actions-setup-docker to a full commit SHA (#23554) by @stonezdj in https://github.com/goharbor/harbor/pull/23667
* (cherry-pick): add explicit permissions block to workflows by @stonezdj in https://github.com/goharbor/harbor/pull/23694
* (cherry-pick) fix: system_cve testcase failing at end of month by @stonezdj in https://github.com/goharbor/harbor/pull/23817
* ci: Make go mod tidy work without generated swagger code so Dependabot can update Go modules (release-2.15.0) by @Vad1mo in https://github.com/goharbor/harbor/pull/23841
* (cherry-pick): update expected CVE export toast message in Robot test by @stonezdj in https://github.com/goharbor/harbor/pull/24014


**Full Changelog**: https://github.com/goharbor/harbor/compare/v2.15.2...v2.15.3

---

> **Source** [goharbor/harbor](https://github.com/goharbor/harbor) · `v2.15.3` · 2026-10-06 · [upstream release](https://github.com/goharbor/harbor/releases/tag/v2.15.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
