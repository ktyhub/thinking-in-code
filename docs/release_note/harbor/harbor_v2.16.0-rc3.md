---
title: "harbor v2.16.0-rc3"
project: "harbor"
repo: "goharbor/harbor"
tag: "v2.16.0-rc3"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "Update artifact_accessory to add source column to identify accessory · feat: replace redis with valkey as cache backend · Full Multi-Architecture Enablement for Harbor (amd64 + arm64)"
---

# harbor v2.16.0-rc3

<!-- Release notes generated using configuration in .github/release.yml at v2.16.0-rc3 -->

## What's Changed
### Exciting New Features 🎉
* Update artifact_accessory to add source column to identify accessory by @stonezdj in https://github.com/goharbor/harbor/pull/23144
* feat: replace redis with valkey as cache backend by @chlins in https://github.com/goharbor/harbor/pull/23157
* Full Multi-Architecture Enablement for Harbor (amd64 + arm64) by @ranimandepudi in https://github.com/goharbor/harbor/pull/22311
* Add ListReferrers API to registry client and update parseScopes by @stonezdj in https://github.com/goharbor/harbor/pull/23170
* Proxy the referrer API to upstream registry with paging and local merge by @stonezdj in https://github.com/goharbor/harbor/pull/23237
* feat(ui): support advanced proxy cache configurations in UI by @stonezdj in https://github.com/goharbor/harbor/pull/23536
* feat(backend): implement proxy cache repository filter API by @stonezdj in https://github.com/goharbor/harbor/pull/23527
* Custom project roles — frontend UI by @maxgraustenzel-create in https://github.com/goharbor/harbor/pull/23970
* feat(task): aggregate execution error messages and surface task failure details by @stonezdj in https://github.com/goharbor/harbor/pull/24028
### Enhancement 🚀
* Fix Last Pull time on parent/child artifacts and on creation by @BojanZelic in https://github.com/goharbor/harbor/pull/22402
* fix(proxy): preserve URL path prefix during registry auth discovery by @mco69 in https://github.com/goharbor/harbor/pull/22989
* Add UI option to enable proxy cache referrer API by @stonezdj in https://github.com/goharbor/harbor/pull/23151
* ci: add API schema drift check for v2.0 swagger spec by @infracore in https://github.com/goharbor/harbor/pull/23089
* refactor(task): use Redis SET with SPOP for outdate execution status … by @chlins in https://github.com/goharbor/harbor/pull/23183
* test(cosign): disable tlog for signing checks by @chlins in https://github.com/goharbor/harbor/pull/23279
* perf(replication): filter event policies in query by @chlins in https://github.com/goharbor/harbor/pull/23283
* fix: enable chunked blob upload for Azure ACR replication by @xrkolovos in https://github.com/goharbor/harbor/pull/23016
* feat(audit): add member create/update/delete audit events by @Mauraza in https://github.com/goharbor/harbor/pull/23228
* fix: add registry component to proxy configuration support by @Kibakus in https://github.com/goharbor/harbor/pull/23437
* fix: set MaxIdleConnsPerHost on internal HTTP transports by @chlins in https://github.com/goharbor/harbor/pull/23591
* Add proxy cache hit/miss metrics by @Jason-Lee3 in https://github.com/goharbor/harbor/pull/23578
* fix: implement signature inheritance for OCI index children by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23540
* fix(api): return 404 when listing artifacts of a non-existing repository by @tpoxa in https://github.com/goharbor/harbor/pull/17618
### Component updates ⬆️
* fix the git action publish permission issue by @wy65701436 in https://github.com/goharbor/harbor/pull/22840
* fix: Update Verify Remote Cert tooltip for registry endpoints by @dee077 in https://github.com/goharbor/harbor/pull/22812
* fix: wrong operation response name for UpdateRepository by @liubin in https://github.com/goharbor/harbor/pull/22851
* fix(session): use correct maxlifetime in SessionRegenerate by @chlins in https://github.com/goharbor/harbor/pull/22873
* chore(go): ignore frontend portal directory using Go 1.25 by @Iam-Karan-Suresh in https://github.com/goharbor/harbor/pull/22702
* fix: check error first before other checks by @liubin in https://github.com/goharbor/harbor/pull/22884
* fix: bump Trivy to v0.69.2 following supply chain incident by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/22896
* Remove payload from config audit log by @stonezdj in https://github.com/goharbor/harbor/pull/22913
* fix codecov issue by @wy65701436 in https://github.com/goharbor/harbor/pull/22922
* fix(portal): UI Statistics display are not aligned by @mmoreiradj in https://github.com/goharbor/harbor/pull/22042
* Bump trivy to 0.69.3 & adapter to v0.35.1-rc.1 on main by @MinerYang in https://github.com/goharbor/harbor/pull/22932
* fix(security): reject bearer tokens issued before project creation by @Vad1mo in https://github.com/goharbor/harbor/pull/22900
* add the 2.14.1 sql into main by @wy65701436 in https://github.com/goharbor/harbor/pull/22947
* Bump trivy-adapter v0.35.1 GA on main by @MinerYang in https://github.com/goharbor/harbor/pull/22966
* fix: proxy cache serve local on remote not found by @AYDEV-FR in https://github.com/goharbor/harbor/pull/22153
* fix(replication): add missing AWS regions to ECR adapter endpoint list by @nicknikolakakis in https://github.com/goharbor/harbor/pull/22941
* add docker check before running 'make gen_apis' by @yaten2302 in https://github.com/goharbor/harbor/pull/22907
* fix db scheme migration issue by @wy65701436 in https://github.com/goharbor/harbor/pull/22998
* fix(about-dialog): format version span indentation by @chlins in https://github.com/goharbor/harbor/pull/23012
* build(deps): migrate model-spec to modelpack org by @chlins in https://github.com/goharbor/harbor/pull/23021
* Add User-Agent to all request by @stonezdj in https://github.com/goharbor/harbor/pull/23030
* Call /v2/auth/token api to get bearer token for dockerhub adapter by @stonezdj in https://github.com/goharbor/harbor/pull/23088
* fix(deps): Bump go-jose/go-jose/v4 to v4.1.4 to fix DoS vulnerability by @bupd in https://github.com/goharbor/harbor/pull/23090
* feat(session): prevent background polling from renewing session TTL by @chlins in https://github.com/goharbor/harbor/pull/22980
* Fix issue related to scanner API by @stonezdj in https://github.com/goharbor/harbor/pull/23061
* fix(dao): use context-aware methods for database operations in MetaDAO by @mxab in https://github.com/goharbor/harbor/pull/23074
* feat(gc): use human-readable sizes in GC log messages by @chlins in https://github.com/goharbor/harbor/pull/23123
* fix(gc): redact redis_url_reg from GC extra attrs by @chlins in https://github.com/goharbor/harbor/pull/23134
* fix(scan): use created time from annotations in accessory art by @chlins in https://github.com/goharbor/harbor/pull/23113
* fix: add nil guard in auditext manager Create function by @ipsitapp8 in https://github.com/goharbor/harbor/pull/23107
* perf(blob): fix full table scan in blob unassociation check during GC by @paragdudeja in https://github.com/goharbor/harbor/pull/22994
* fix(exporter): add Docker HEALTHCHECK by @intojhanurag in https://github.com/goharbor/harbor/pull/22778
* Fix the issue distribution instance edit without credential can not save by @stonezdj in https://github.com/goharbor/harbor/pull/23165
* ci: disable exporter cache in API tests by @chlins in https://github.com/goharbor/harbor/pull/23177
* refactor(config): centralize registry HTTP client timeout by @chlins in https://github.com/goharbor/harbor/pull/23154
* fix(i18n): localize max upstream connection placeholder by @bupd in https://github.com/goharbor/harbor/pull/23197
* 【fix issue 22865】TCR provider adaptor can't parse intertional secret ID by @pikehuang in https://github.com/goharbor/harbor/pull/22869
* FIX: Disallow Empty `robot_name_prefix` to prevent OIDC CLI login from being blocked by @falconlee236 in https://github.com/goharbor/harbor/pull/22556
* Fix spelling error in comments by @rakshityadav1868 in https://github.com/goharbor/harbor/pull/23217
* fix(build): default PIP_INDEX_URL to https://pypi.org/simple by @Vad1mo in https://github.com/goharbor/harbor/pull/23227
* fix: correct max_upstream_conn validation and disabled bindings by @Tusharjamdade in https://github.com/goharbor/harbor/pull/22681
* feat: Add gosec linter by @bupd in https://github.com/goharbor/harbor/pull/22668
* bump Go version from 1.25.7 to 1.26.3 by @stonezdj in https://github.com/goharbor/harbor/pull/23235
* fix: lang file sync by @bupd in https://github.com/goharbor/harbor/pull/23002
* Rebuild goharbor/photon image before create new harbor base images by @jUDASmILE in https://github.com/goharbor/harbor/pull/23248
* fix(ui): use selected tag for pull command copy by @bupd in https://github.com/goharbor/harbor/pull/23240
* fix: duplicated y\ in beego ORM TableName comments by @vip892766gma in https://github.com/goharbor/harbor/pull/23234
* bump pg to v18 by @wy65701436 in https://github.com/goharbor/harbor/pull/23184
* remove install net-tools from db dockerfile as photon removed it by @jUDASmILE in https://github.com/goharbor/harbor/pull/23266
* build(registry): bump source tag to rc.2 by @chlins in https://github.com/goharbor/harbor/pull/23269
* update ECR adapter to allow for ecr-public to be mirored by @goshlanguage in https://github.com/goharbor/harbor/pull/22351
* fix(cosign): ignore tlog during verification by @chlins in https://github.com/goharbor/harbor/pull/23284
* fix: Bump repository update_time on tag and artifact changes by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23225
* fix(security): validate blob-mount source project and reject tokens missing iat by @Vad1mo in https://github.com/goharbor/harbor/pull/23270
* build(registry): update source tag to rc.4 by @chlins in https://github.com/goharbor/harbor/pull/23300
* fix: build valkey from source to support arm64 by @ranimandepudi in https://github.com/goharbor/harbor/pull/23282
* Upgrade harbor go.mod OSS packages by @stonezdj in https://github.com/goharbor/harbor/pull/23314
* fix(ecr): use amazonaws.com.cn domain for AWS China region endpoints by @amaanx86 in https://github.com/goharbor/harbor/pull/23326
* fix: publish goharbor/photon:5.0 as a multi-arch manifest (#23324) by @Vad1mo in https://github.com/goharbor/harbor/pull/23334
* skip spectral image when creating multi-arch manifests by @wy65701436 in https://github.com/goharbor/harbor/pull/23340
* exclude helper images from manifest creation by @wy65701436 in https://github.com/goharbor/harbor/pull/23343
* test(UI): fix and upgrade UI robot test cases for Angular v21 / Clarity v18 by @fiona-xie in https://github.com/goharbor/harbor/pull/23344
* Harden crypto usage and drop unused SMTP package by @wy65701436 in https://github.com/goharbor/harbor/pull/23307
* fix: solve db build conflict and robustify workflow repo list saving by @wy65701436 in https://github.com/goharbor/harbor/pull/23350
* fix(build): pin Photon base to stable multi-arch digest by @wy65701436 in https://github.com/goharbor/harbor/pull/23352
* ci: use local base for component builds; fix flaky log rotation test by @wy65701436 in https://github.com/goharbor/harbor/pull/23357
* Migrate direct yaml.v2 imports to github.com/goccy/go-yaml by @stonezdj in https://github.com/goharbor/harbor/pull/23349
* Update and improve zh-TW Traditional Chinese locale by @PeterDaveHello in https://github.com/goharbor/harbor/pull/23315
* fix(ui): Update bindings in Project Policy Config by @vg006 in https://github.com/goharbor/harbor/pull/22694
* fix: skip corrupted encrypted config values on decryption failure by @rossigee in https://github.com/goharbor/harbor/pull/23376
* fix(ui): fix UI issues across portal components by @zoom2ashish in https://github.com/goharbor/harbor/pull/23393
* test(ui): add retry for Get Harbor CA to improve stability by @fiona-xie in https://github.com/goharbor/harbor/pull/23396
* fix(portal): Project Tab Access Permissions Match the User Permissions by @vg006 in https://github.com/goharbor/harbor/pull/22708
* feat(acr): add artifact to supported resource types by @SurbhiAgarwal1 in https://github.com/goharbor/harbor/pull/23392
* fix: increase access_key column length to 4096 by @Yanni8 in https://github.com/goharbor/harbor/pull/23414
* fix: propagate CSV marshal errors in scan data export by @ashnaaseth2325-oss in https://github.com/goharbor/harbor/pull/23369
* fix(portal): remove temporary SBOM permission override by @kimjune01 in https://github.com/goharbor/harbor/pull/23223
* fix(ui): fix UI issues #48–#54 across portal components by @zoom2ashish in https://github.com/goharbor/harbor/pull/23427
* fix: use validated scan type in StopScanArtifact by @ashnaaseth2325-oss in https://github.com/goharbor/harbor/pull/23412
* fix: Fix potentional SQLi by @Yanni8 in https://github.com/goharbor/harbor/pull/23418
* fix(cache): replace keyMutex with singleflight and avoid canceling cache by @air1bzz in https://github.com/goharbor/harbor/pull/23336
* fix: Fix theoretical timing vulnerability by @Yanni8 in https://github.com/goharbor/harbor/pull/23433
* fix: multiple UI/UX fixes for checkboxes, alignment, dark theme, and i18n by @stonezdj in https://github.com/goharbor/harbor/pull/23439
* fix(portal): align pending job queue counts and improve form styling by @wy65701436 in https://github.com/goharbor/harbor/pull/23457
* build(registry): update distribution source tag to rc.5 by @chlins in https://github.com/goharbor/harbor/pull/23464
* Fix job service dashboard testcase failed issue by @stonezdj in https://github.com/goharbor/harbor/pull/23488
* Fix/api completeness by @qcserestipy in https://github.com/goharbor/harbor/pull/23476
* fix: avoid panic in user audit event resolver on nil event data by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23461
* Constrain /registries/ping to the saved URL for existing registries by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23463
* Add a size limit for manifest uploads by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23500
* test(apitests): fix race condition in log rotation test by polling job status by @stonezdj in https://github.com/goharbor/harbor/pull/23516
* fix(ui): use dark login background in dark mode by @bupd in https://github.com/goharbor/harbor/pull/23535
* Fix typo: 'commitedKey' -> 'committedKey' in comments by @magic-peach in https://github.com/goharbor/harbor/pull/23541
* fix(retention): avoid stripping repository path twice by @esadakcam in https://github.com/goharbor/harbor/pull/23546
* fix(replication): fix incorrect error propagation in getAccessoryArts by @jUDASmILE in https://github.com/goharbor/harbor/pull/23569
* test: add UI e2e test for per-endpoint CA certificate setting by @Adityakumar37 in https://github.com/goharbor/harbor/pull/23556
* fix: address unsafe type assertions causing potential panics across packages by @Norway-02 in https://github.com/goharbor/harbor/pull/23571
* fix: guard against division by zero when merging scan report summaries by @Norway-02 in https://github.com/goharbor/harbor/pull/23572
* Set blob response headers before streaming the body by @shrenikgala in https://github.com/goharbor/harbor/pull/23374
* fix(cnai-parser): enforce actual byte limit to prevent decompression by @chlins in https://github.com/goharbor/harbor/pull/23497
* bugfix/max-upstream-comm by @intojhanurag in https://github.com/goharbor/harbor/pull/22678
* refactor: remove deprecated io/ioutil usage by @Norway-02 in https://github.com/goharbor/harbor/pull/23611
* refactor: replace deprecated golang.org/x/net/context by @Norway-02 in https://github.com/goharbor/harbor/pull/23630
* fix: use LEFT JOIN in projectBasicSQL to include projects without quota records by @cdarninsuang-bamfunds in https://github.com/goharbor/harbor/pull/23520
* Fix: member audit log resolution after transaction commit by @Mauraza in https://github.com/goharbor/harbor/pull/23586
* fix: use errors.Is for sentinel error checks in usergroup controller by @Norway-02 in https://github.com/goharbor/harbor/pull/23636
* fix: allow resizing of the SBOM column in artifact table by @La1itchauhan in https://github.com/goharbor/harbor/pull/23646
* fix: fix tags column text truncation and count badge overlap by @AllForNothing in https://github.com/goharbor/harbor/pull/23607
* fix: Prevent redis pw exposure in error logs by @Yanni8 in https://github.com/goharbor/harbor/pull/23657
* Refactor manifest abstraction into a registry by @Vad1mo in https://github.com/goharbor/harbor/pull/23647
* Prevent 500 if no project members have been provided by @Yanni8 in https://github.com/goharbor/harbor/pull/23642
* fix: convert robot account ID columns and sequence to bigint by @wy65701436 in https://github.com/goharbor/harbor/pull/23633
* fix: Prevent 500 on invalid query input for robot accounts by @Yanni8 in https://github.com/goharbor/harbor/pull/23670
* fix(repoproxy): prevent proxy-cache poisoning via robot-name prefix by @jUDASmILE in https://github.com/goharbor/harbor/pull/23675
* fix: neutralize CSV formula in scan export by @stonezdj in https://github.com/goharbor/harbor/pull/23677
* fix(ci): add explicit permissions block to workflows by @jUDASmILE in https://github.com/goharbor/harbor/pull/23676
* fix: Add missing validation when creating a rb account by @Yanni8 in https://github.com/goharbor/harbor/pull/23691
* test: accelerate flaky tests by removing time.Sleep by @Norway-02 in https://github.com/goharbor/harbor/pull/23692
* fix: Add \n to the escape pattern by @stonezdj in https://github.com/goharbor/harbor/pull/23697
* fix(ci): remove contents read permission from label check workflow by @stonezdj in https://github.com/goharbor/harbor/pull/23702
* fix(registry): Refactor registry update handling to improve URL validation by @jUDASmILE in https://github.com/goharbor/harbor/pull/23671
* fix: convert setup_timestamp, status_revision, and revision columns to bigint to avoid Y2K38 overflow (#23711) by @stonezdj in https://github.com/goharbor/harbor/pull/23718
* chore(deps): bump Go modules to fix known vulnerabilities by @bupd in https://github.com/goharbor/harbor/pull/23720
* chore(deps): bump remaining vulnerable npm dependencies by @bupd in https://github.com/goharbor/harbor/pull/23725
* chore(deps): bump Angular packages to fix known vulnerabilities by @bupd in https://github.com/goharbor/harbor/pull/23724
* test: add API test for signature inheritance on OCI index children by @Aloui-Ikram in https://github.com/goharbor/harbor/pull/23707
* add size limit for audit log payload by @stonezdj in https://github.com/goharbor/harbor/pull/23755
* Refine utils function IsLocalPath by @stonezdj in https://github.com/goharbor/harbor/pull/23756
* chore(deps): revert github.com/gorilla/csrf to v1.7.2 by @stonezdj in https://github.com/goharbor/harbor/pull/23759
* test: reduce arbitrary sleep delays in core auth and awsecr tests by @Norway-02 in https://github.com/goharbor/harbor/pull/23722
* test(api): enhance stability of test_copy_disability in tag immutability by @fiona-xie in https://github.com/goharbor/harbor/pull/23774
* fix(repoproxy): query robot account to validate proxy session and fix ut by @stonezdj in https://github.com/goharbor/harbor/pull/23776
* fix: Harden proxy cache repository filter validation by @bupd in https://github.com/goharbor/harbor/pull/23762
* Fix CPU saturation from full table scans during artifact deletion by indexing sbom_digest by @raudhra in https://github.com/goharbor/harbor/pull/23773
* fix(quota): enable retry backoff on quota usage updates by @Vad1mo in https://github.com/goharbor/harbor/pull/23789
* fix: system_cve testcase failing at end of month by @Yanni8 in https://github.com/goharbor/harbor/pull/23661
* fix: correct grammar and typos in user-facing error messages by @wy65701436 in https://github.com/goharbor/harbor/pull/23818
* fix: correct typos in comments and two log/error messages by @MsfPablo in https://github.com/goharbor/harbor/pull/23829
* fix: make hostname comparisons case-insensitive by @stonezdj in https://github.com/goharbor/harbor/pull/23827
* Remove hardcoded credentials placeholders and prevent log credential/secret in debug log by @jUDASmILE in https://github.com/goharbor/harbor/pull/23835
* fix: Invalid UTF-8 Input Should not Cause HTTP 500 Errors by @Vad1mo in https://github.com/goharbor/harbor/pull/22612
* fix(i18n): improve Korean translation of FULL_NAME by @InGyu-Moon in https://github.com/goharbor/harbor/pull/22701
* fix: make hostname and endpoint comparisons case-insensitive(2) by @stonezdj in https://github.com/goharbor/harbor/pull/23842
* refactor(p2p): improve HTTP client request logging and credential string formatting by @jUDASmILE in https://github.com/goharbor/harbor/pull/23873
* refactor: sanitize connection details in logs and enhance error message formatting by @jUDASmILE in https://github.com/goharbor/harbor/pull/23878
* fix(portal): Keep the swagger-ui loading page intact when webpack minifies HTML by @Vad1mo in https://github.com/goharbor/harbor/pull/23859
* fix: make endpoint handling and validation case-insensitive by @stonezdj in https://github.com/goharbor/harbor/pull/23889
* fix(migration): make sbom_report index creation idempotent by @stonezdj in https://github.com/goharbor/harbor/pull/23895
* docs: fix typo wating -> waiting by @vaibhav8a in https://github.com/goharbor/harbor/pull/23807
* fix(cache): avoid double prefix when removing expired entries by @Hanabi9248 in https://github.com/goharbor/harbor/pull/23913
* fix: ignore http.ErrServerClosed on graceful shutdown by @Vad1mo in https://github.com/goharbor/harbor/pull/23296
* fix(systeminfo): make HTTPS URL scheme check case-insensitive for CA download by @Norway-02 in https://github.com/goharbor/harbor/pull/23888
* feat: Expose retention setting during proxy-cache project creation by @Yanni8 in https://github.com/goharbor/harbor/pull/23863
* fix(gc): do not count blobs missing from storage as freed space by @velmoga in https://github.com/goharbor/harbor/pull/23972
* fix: correct grammar, formatting, and non-actionable error messages by @jUDASmILE in https://github.com/goharbor/harbor/pull/23974
* fix(retention): drop retention_id metadata on project delete by @warisshaikh1 in https://github.com/goharbor/harbor/pull/23942
* fix(portal): update label and tooltip of serve stale content option by @stonezdj in https://github.com/goharbor/harbor/pull/23978
* ci: retry the spectral binary download by @velmoga in https://github.com/goharbor/harbor/pull/23984
* feat: custom project roles (hybrid — built-ins in code, custom in DB) by @maxgraustenzel-create in https://github.com/goharbor/harbor/pull/23804
* fix(gc): Use the current registry Redis URL for scheduled runs by @Vad1mo in https://github.com/goharbor/harbor/pull/24037
* fix(webhook): allow private network access by default to avoid regres… by @wy65701436 in https://github.com/goharbor/harbor/pull/24078
* feat(webhook): add webhook egress policy levels and allowlist by @Vad1mo in https://github.com/goharbor/harbor/pull/24079
* fix(contenttrust): allow legacy signer pull by default to avoid regre… by @wy65701436 in https://github.com/goharbor/harbor/pull/24085
* chore(deps): forward-port the release-2.15.0 go module bumps to main by @bupd in https://github.com/goharbor/harbor/pull/24093
* fix(registry): validate upload Location against the request origin, n… by @wy65701436 in https://github.com/goharbor/harbor/pull/24113
* fix(i18n): translate remaining French UI strings by @berlewis in https://github.com/goharbor/harbor/pull/24088
* fix(ui): keep multi-value filters when editing a P2P preheat policy by @velmoga in https://github.com/goharbor/harbor/pull/24056
* fix(scan): scope scan stop lookup to caller artifact by @stonezdj in https://github.com/goharbor/harbor/pull/23948
* fix(scanner): redact scanner URL in candidate list for non-admin users by @stonezdj in https://github.com/goharbor/harbor/pull/23947
* fix(registryctl): reject empty secrets to prevent authentication bypass by @stonezdj in https://github.com/goharbor/harbor/pull/23946
* Improve global label listing behavior by @jUDASmILE in https://github.com/goharbor/harbor/pull/24140
* Improve job status hook handling by @jUDASmILE in https://github.com/goharbor/harbor/pull/24137
* fix(jobservice): prevent CPU spin from unreachable cron expressions by @nikitakodkany in https://github.com/goharbor/harbor/pull/23925
* Align manual preheat execution with update permissions by @jUDASmILE in https://github.com/goharbor/harbor/pull/24141
* feat(replication): separate event-triggered replication into dedicate… by @stonezdj in https://github.com/goharbor/harbor/pull/24138
* Fix webhook egress allow all by @stonezdj in https://github.com/goharbor/harbor/pull/24126
* portal: align robot account immutability label by @NUAAwqy in https://github.com/goharbor/harbor/pull/24171
* Stamp version info into the bundled Trivy adapter binary by @fjvbn2003 in https://github.com/goharbor/harbor/pull/24164
* fix(replication): make the image resource filter take effect again by @chlins in https://github.com/goharbor/harbor/pull/24176
* Improve project metadata cache consistency by @jUDASmILE in https://github.com/goharbor/harbor/pull/24139
* chore: bump Trivy, Trivy adapter, and Distribution versions by @stonezdj in https://github.com/goharbor/harbor/pull/24179
* [release-2.16] chore(deps): bump up Go version to v1.27.3 (#24188) by @bupd in https://github.com/goharbor/harbor/pull/24192
* (cherry-pick): preserve artifact type for multi-tier accessories in replication by @stonezdj in https://github.com/goharbor/harbor/pull/24203
* Bump Trivy to v0.76.1 and adapter to v0.40.0-rc2 by @stonezdj in https://github.com/goharbor/harbor/pull/24259
* (cherry-pick)Change the size of the add-role wizard and add horizontal scroll when required by @stonezdj in https://github.com/goharbor/harbor/pull/24276
* (cherry-pick) feat(audit): audit-log events for custom roles by @stonezdj in https://github.com/goharbor/harbor/pull/24277
* (cherry-pick) fix(portal): prevent resource names from wrapping in permissions panel by @stonezdj in https://github.com/goharbor/harbor/pull/24285
* (cherry-pick)fix: restore robot member role assignment compatibility by @stonezdj in https://github.com/goharbor/harbor/pull/24302
* (cherry-pick) replace gorilla/csrf with net/http.CrossOriginProtection by @stonezdj in https://github.com/goharbor/harbor/pull/24311
* add prepare migraion script for 2.16.0 by @MinerYang in https://github.com/goharbor/harbor/pull/24347
### Docs update 🗄️
* docs: fix contributing fork setup instructions to cd before git clone by @mlhv in https://github.com/goharbor/harbor/pull/23367
* docs: fix broken installation guide link in contrib doc by @s3onghyun in https://github.com/goharbor/harbor/pull/23406
* docs: fix markdown formatting issues in CONTRIBUTING.md and README.md by @magic-peach in https://github.com/goharbor/harbor/pull/23537
* docs: switch security reporting to GitHub private vulnerability reporting by @Vad1mo in https://github.com/goharbor/harbor/pull/23559
* docs: update the minor release support matrix by @bupd in https://github.com/goharbor/harbor/pull/24060
### Bump Component Version 🤖
* bump base vserion for v2.16.0 by @wy65701436 in https://github.com/goharbor/harbor/pull/22837
* chore(deps): bump google.golang.org/grpc from 1.69.4 to 1.79.3 in /src by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23009
* feat(portal): upgrade Angular to v21, Clarity to v18, Node.js to v22 (#22937 by @zoom2ashish in https://github.com/goharbor/harbor/pull/23078
* Bump trivy to v0.71.1 and trivy adapter to v0.37.1-rc.1 by @stonezdj in https://github.com/goharbor/harbor/pull/23388
* chore(deps-dev): bump form-data from 4.0.5 to 4.0.6 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23403
* chore: update Trivy adapter version to v0.37.1 by @stonezdj in https://github.com/goharbor/harbor/pull/23423
* chore: update Trivy adapter version to v0.37.2-rc1 by @stonezdj in https://github.com/goharbor/harbor/pull/23456
* bump: bump up golang to 1.26.4 and trivy adapter version to v0.37.2-rc2 by @stonezdj in https://github.com/goharbor/harbor/pull/23460
* chore: update Trivy adapter version to v0.38.0-rc1 by @stonezdj in https://github.com/goharbor/harbor/pull/23469
* Bump up trivy to 0.72.0 by @stonezdj in https://github.com/goharbor/harbor/pull/23478
* build(registry): use stable registry source release v2.8.3-harbor.1 by @chlins in https://github.com/goharbor/harbor/pull/23481
* chore(deps-dev): bump pygments from 2.19.2 to 2.20.0 in /make/photon/prepare by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23053
* chore(deps): bump uuid and webpack-dev-server in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23631
* chore(deps): update go.mod dependencies to patch versions by @stonezdj in https://github.com/goharbor/harbor/pull/23751
* chore(deps): upgrade Go dependencies to fix CVEs by @stonezdj in https://github.com/goharbor/harbor/pull/23801
* chore(deps): bump golang.org/x/crypto to v0.55.0 by @stonezdj in https://github.com/goharbor/harbor/pull/23826
* chore(deps): bump hono from 4.13.2 to 4.13.8 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23884
* chore(deps): bump the patch-updates group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23766
* chore(deps-dev): bump fast-uri from 3.1.5 to 3.1.8 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23831
* chore(deps): bump css-loader from 6.11.0 to 7.1.5 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23848
* chore(deps): bump baseline-browser-mapping from 2.10.33 to 2.11.24 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23883
* chore(deps): bump the patch-updates group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23843
* chore(deps-dev): bump webpack-cli from 4.10.0 to 7.2.3 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23850
* chore(deps-dev): bump webpack from 5.107.2 to 5.111.0 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23951
* chore(deps-dev): bump cypress from 15.20.1 to 16.0.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23953
* chore(deps-dev): bump eslint-config-prettier from 9.1.2 to 10.1.8 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23956
* chore(deps-dev): bump https-proxy-agent from 5.0.1 to 9.1.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23954
* chore(deps): bump marked from 18.0.12 to 18.0.13 in /src/portal in the patch-updates group across 1 directory by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23952
* chore(deps-dev): bump stylelint from 14.16.1 to 17.15.0 in /src/portal by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23957
* bump: bump up Go version to v1.26.9 by @stonezdj in https://github.com/goharbor/harbor/pull/24120
* Bump trivy adapter to v0.39.1 and distribution to v2.8.3-harbor.2 by @stonezdj in https://github.com/goharbor/harbor/pull/24118
* bump: bump up Go version to v1.27.2 by @stonezdj in https://github.com/goharbor/harbor/pull/24119
* chore(deps): bump google.golang.org/grpc to v1.82.2 and golang/x/net to v0.60.0 by @stonezdj in https://github.com/goharbor/harbor/pull/24167
### Other Changes
* chore(deps): bump actions/setup-node from 5 to 6 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/22461
* docs: fix minor typos and grammar improvements in README by @Starksid007 in https://github.com/goharbor/harbor/pull/22934
* Add proxy cache from dockerhub, harbor, jfrog by @stonezdj in https://github.com/goharbor/harbor/pull/23121
* Support custom PyPI index URL for prepare image builds by @stonezdj in https://github.com/goharbor/harbor/pull/23205
* Fix the GC robot testcase fail issue by @stonezdj in https://github.com/goharbor/harbor/pull/23214
* test: use harbor-redis-base instead of harbor-valkey-base in SecurityHub CI by @stonezdj in https://github.com/goharbor/harbor/pull/23213
* support configurable PIP_INDEX_URL for swagger client build by @stonezdj in https://github.com/goharbor/harbor/pull/23241
* Update Makefile PIP_INDEX_URL to use default value if not defined by @stonezdj in https://github.com/goharbor/harbor/pull/23273
* fix: publish harbor-*-base images as multi-arch manifests by @Vad1mo in https://github.com/goharbor/harbor/pull/23348
* test(api_db): support dynamic OpenAPI generator and PyPI URLs via env vars by @fiona-xie in https://github.com/goharbor/harbor/pull/23361
* test(ui): Fix db_schedule and replication failed cases after Angular&Clarity upgrade by @fiona-xie in https://github.com/goharbor/harbor/pull/23394
* chore(deps): bump aquasecurity/trivy-action from 0.35.0 to 0.36.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23191
* chore(deps): bump aws-actions/configure-aws-credentials from 5.1.1 to 6.2.1 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23192
* chore(deps): bump sigstore/cosign-installer from 4.0.0 to 4.1.2 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23193
* chore(deps): bump actions/download-artifact from 4 to 8 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23495
* chore(deps): bump actions/checkout from 4 to 7 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23494
* chore(deps): bump codecov/codecov-action from 5 to 7 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23499
* chore(deps): bump kentaro-m/auto-assign-action from 2.0.1 to 2.0.2 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23498
* Fix grammar: 'can not be override' -> 'cannot be overridden' in comment by @magic-peach in https://github.com/goharbor/harbor/pull/23542
* ci: migrate all GitHub workflows to CNCF-hosted runners by @Vad1mo in https://github.com/goharbor/harbor/pull/23545
* chore(deps): bump docker/setup-qemu-action from 3 to 4 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23493
* ci: pin docker-practice/actions-setup-docker to a full commit SHA by @kobihikri in https://github.com/goharbor/harbor/pull/23554
* chore(deps): bump aws-actions/configure-aws-credentials from 6.2.1 to 6.2.3 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23563
* ci: remove third-party docker action by @stonezdj in https://github.com/goharbor/harbor/pull/23683
* chore(deps): bump actions/setup-go from 5 to 7 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23698
* Exclude replication from dockerhub in github action by @stonezdj in https://github.com/goharbor/harbor/pull/23713
* chore(deps): bump actions/cache from 4 to 6 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23705
* ci: pin GitHub Actions to full commit SHAs by @bupd in https://github.com/goharbor/harbor/pull/23712
* chore(deps): bump actions/upload-artifact from 4.6.2 to 7.0.1 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23727
* chore(deps): bump actions/setup-node from 6.5.0 to 7.0.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23726
* chore(ci): update dependabot configuration for release 2.15 by @stonezdj in https://github.com/goharbor/harbor/pull/23723
* chore(deps): bump actions/stale from 10.0.0 to 11.0.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/22852
* chore(deps): bump softprops/action-gh-release from 2.6.2 to 3.0.2 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23509
* chore(deps): bump the patch-updates group with 3 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23745
* chore(deps): bump docker/setup-buildx-action from 3.12.0 to 4.2.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23746
* test: add api and ui integration tests for proxy cache repository filter by @fiona-xie in https://github.com/goharbor/harbor/pull/23744
* chore(deps): bump docker/setup-buildx-action from 4.2.0 to 4.3.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23760
* test: optimize proxy cache filter UI test with dynamic polling mechansim and cleanup local images before pulling by @fiona-xie in https://github.com/goharbor/harbor/pull/23754
* chore(deps): bump the patch-updates group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23781
* chore(deps): bump the patch-updates group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23820
* chore(deps): bump aws-actions/configure-aws-credentials from 6.2.3 to 6.2.4 in the patch-updates group by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23836
* ci: Group Angular, Kubernetes and OpenTelemetry updates in dependabot.yml by @Vad1mo in https://github.com/goharbor/harbor/pull/23839
* ci: Ignore Angular and TypeScript major updates in the portal Dependabot groups by @Vad1mo in https://github.com/goharbor/harbor/pull/23858
* ci: bump all github/codeql-action steps in one dependabot PR by @Vad1mo in https://github.com/goharbor/harbor/pull/23929
* chore(deps): bump the codeql-action group with 3 updates by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23934
* chore(deps): bump docker/setup-qemu-action from 4.2.0 to 4.3.0 by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23855
* ci: Add merge_group trigger to CI and CodeQL workflows by @bupd in https://github.com/goharbor/harbor/pull/23986
* test(apitests): add missing get_member_role_id to project helper by @stonezdj in https://github.com/goharbor/harbor/pull/23997
* fix(test): update expected CVE export toast message in Robot test by @stonezdj in https://github.com/goharbor/harbor/pull/24010
* chore(deps): bump trivy to 0.75.0 and the trivy adapter to 0.39.1-rc2 by @bupd in https://github.com/goharbor/harbor/pull/24092
* test(robot): update guest member radio button locator by @stonezdj in https://github.com/goharbor/harbor/pull/24154
* test(robot): expect inherited signature for unsigned index child in r… by @stonezdj in https://github.com/goharbor/harbor/pull/24026
* (cherry-pick): handle empty parameter introduced by #22311 by @stonezdj in https://github.com/goharbor/harbor/pull/24242
* (cherry-pick): use runner Docker to avoid Buildx permission failure by @stonezdj in https://github.com/goharbor/harbor/pull/24243
* chore: refresh base image by @stonezdj in https://github.com/goharbor/harbor/pull/24253
* (cherry-pick) Publish online installer package for RC releases by @stonezdj in https://github.com/goharbor/harbor/pull/24353

## New Contributors
* @dee077 made their first contribution in https://github.com/goharbor/harbor/pull/22812
* @Iam-Karan-Suresh made their first contribution in https://github.com/goharbor/harbor/pull/22702
* @mmoreiradj made their first contribution in https://github.com/goharbor/harbor/pull/22042
* @Starksid007 made their first contribution in https://github.com/goharbor/harbor/pull/22934
* @AYDEV-FR made their first contribution in https://github.com/goharbor/harbor/pull/22153
* @nicknikolakakis made their first contribution in https://github.com/goharbor/harbor/pull/22941
* @BojanZelic made their first contribution in https://github.com/goharbor/harbor/pull/22402
* @yaten2302 made their first contribution in https://github.com/goharbor/harbor/pull/22907
* @mco69 made their first contribution in https://github.com/goharbor/harbor/pull/22989
* @ipsitapp8 made their first contribution in https://github.com/goharbor/harbor/pull/23107
* @paragdudeja made their first contribution in https://github.com/goharbor/harbor/pull/22994
* @infracore made their first contribution in https://github.com/goharbor/harbor/pull/23089
* @pikehuang made their first contribution in https://github.com/goharbor/harbor/pull/22869
* @falconlee236 made their first contribution in https://github.com/goharbor/harbor/pull/22556
* @ranimandepudi made their first contribution in https://github.com/goharbor/harbor/pull/22311
* @rakshityadav1868 made their first contribution in https://github.com/goharbor/harbor/pull/23217
* @vip892766gma made their first contribution in https://github.com/goharbor/harbor/pull/23234
* @goshlanguage made their first contribution in https://github.com/goharbor/harbor/pull/22351
* @amaanx86 made their first contribution in https://github.com/goharbor/harbor/pull/23326
* @mlhv made their first contribution in https://github.com/goharbor/harbor/pull/23367
* @vg006 made their first contribution in https://github.com/goharbor/harbor/pull/22694
* @xrkolovos made their first contribution in https://github.com/goharbor/harbor/pull/23016
* @rossigee made their first contribution in https://github.com/goharbor/harbor/pull/23376
* @s3onghyun made their first contribution in https://github.com/goharbor/harbor/pull/23406
* @SurbhiAgarwal1 made their first contribution in https://github.com/goharbor/harbor/pull/23392
* @Yanni8 made their first contribution in https://github.com/goharbor/harbor/pull/23414
* @ashnaaseth2325-oss made their first contribution in https://github.com/goharbor/harbor/pull/23369
* @kimjune01 made their first contribution in https://github.com/goharbor/harbor/pull/23223
* @air1bzz made their first contribution in https://github.com/goharbor/harbor/pull/23336
* @qcserestipy made their first contribution in https://github.com/goharbor/harbor/pull/23476
* @Mauraza made their first contribution in https://github.com/goharbor/harbor/pull/23228
* @magic-peach made their first contribution in https://github.com/goharbor/harbor/pull/23542
* @esadakcam made their first contribution in https://github.com/goharbor/harbor/pull/23546
* @Kibakus made their first contribution in https://github.com/goharbor/harbor/pull/23437
* @Adityakumar37 made their first contribution in https://github.com/goharbor/harbor/pull/23556
* @shrenikgala made their first contribution in https://github.com/goharbor/harbor/pull/23374
* @cdarninsuang-bamfunds made their first contribution in https://github.com/goharbor/harbor/pull/23520
* @Jason-Lee3 made their first contribution in https://github.com/goharbor/harbor/pull/23578
* @La1itchauhan made their first contribution in https://github.com/goharbor/harbor/pull/23646
* @thuvh made their first contribution in https://github.com/goharbor/harbor/pull/22580
* @kobihikri made their first contribution in https://github.com/goharbor/harbor/pull/23554
* @raudhra made their first contribution in https://github.com/goharbor/harbor/pull/23773
* @MsfPablo made their first contribution in https://github.com/goharbor/harbor/pull/23829
* @InGyu-Moon made their first contribution in https://github.com/goharbor/harbor/pull/22701
* @vaibhav8a made their first contribution in https://github.com/goharbor/harbor/pull/23807
* @Hanabi9248 made their first contribution in https://github.com/goharbor/harbor/pull/23913
* @warisshaikh1 made their first contribution in https://github.com/goharbor/harbor/pull/23942
* @berlewis made their first contribution in https://github.com/goharbor/harbor/pull/24088
* @NUAAwqy made their first contribution in https://github.com/goharbor/harbor/pull/24171
* @fjvbn2003 made their first contribution in https://github.com/goharbor/harbor/pull/24164

**Full Changelog**: https://github.com/goharbor/harbor/compare/v2.15.0...v2.16.0-rc3

---

> **Source** [goharbor/harbor](https://github.com/goharbor/harbor) · `v2.16.0-rc3` · 2026-11-10 · [upstream release](https://github.com/goharbor/harbor/releases/tag/v2.16.0-rc3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
