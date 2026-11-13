---
title: "grafana v13.3.0"
project: "grafana"
repo: "grafana/grafana"
tag: "v13.3.0"
published: "2026-10-27"
type: "minor"
lang: "en"
summary: "Download page What's new highlights"
---

# grafana v13.3.0

[Download page](https://grafana.com/grafana/download/13.3.0)
[What's new highlights](https://grafana.com/docs/grafana/latest/whatsnew/)

### Security

- Security: Fix CVE-2026-100105
- Security: Fix CVE-2026-13719
- Security: Fix CVE-2026-13720
- Security: Fix CVE-2026-15577
- Security: Fix CVE-2026-33374
- Security: Fix CVE-2026-81841
- Security: Fix CVE-2026-88858
- Security: Fix CVE-2026-88967
- Security: Fix CVE-2026-93294
- Security: Fix CVE-2026-95502

### Features and enhancements

- **Access control:** reject global role creation in single-org mode (Enterprise)
- **Alerting:** Add AccessControlAction entries for inhibition rules [#130977](https://github.com/grafana/grafana/pull/130977), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Add notifications API boundary module [#134537](https://github.com/grafana/grafana/pull/134537), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Add the Config API data layer for external Alertmanager auto-sync [#129478](https://github.com/grafana/grafana/pull/129478), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Allow drag and drop for yaml file as import source for import wizard [#132705](https://github.com/grafana/grafana/pull/132705), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Cleanup promote staged config code [#130974](https://github.com/grafana/grafana/pull/130974), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Disable datasource picker while an import is staged [#133181](https://github.com/grafana/grafana/pull/133181), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Make stage default import method in GMA import wizard [#130634](https://github.com/grafana/grafana/pull/130634), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Make the Import wizard review step preview look clickable [#132711](https://github.com/grafana/grafana/pull/132711), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Migrate the Import-to-GMA wizard's auto-sync integration [#131523](https://github.com/grafana/grafana/pull/131523), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Migrate the auto-sync settings hook and panel onto the Config API [#131521](https://github.com/grafana/grafana/pull/131521), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Promote AlertRule, RecordingRule and RuleSequence to v1beta1 [#134883](https://github.com/grafana/grafana/pull/134883), [@moustafab](https://github.com/moustafab)
- **Alerting:** Promote a staged import configuration [#130327](https://github.com/grafana/grafana/pull/130327), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Read staged config origin from the managed_by field [#130787](https://github.com/grafana/grafana/pull/130787), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Redact secrets from the Import-to-GMA preview modal [#132827](https://github.com/grafana/grafana/pull/132827), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Refactor useIsAutoSyncActive onto the shared Config-API helpers [#131520](https://github.com/grafana/grafana/pull/131520), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Remove import method from import to GMA wizard [#130609](https://github.com/grafana/grafana/pull/130609), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Retire the legacy admin_config auto-sync path [#131524](https://github.com/grafana/grafana/pull/131524), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Show Auto-sync support in the import wizard picker [#131084](https://github.com/grafana/grafana/pull/131084), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Support Mimir alertmanager_config files in Import to GMA wizard [#135637](https://github.com/grafana/grafana/pull/135637), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Surface external Alertmanager sync health in the settings UI [#131527](https://github.com/grafana/grafana/pull/131527), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** stop auto-sync from force-skipping the Rules step in the GMA import wizard [#131072](https://github.com/grafana/grafana/pull/131072), [@rodrigopk](https://github.com/rodrigopk)
- **Auth:** Bound OAuth token refresh lock waits by time instead of attempts [#133929](https://github.com/grafana/grafana/pull/133929), [@cinaglia](https://github.com/cinaglia)
- **Canvas:** Load the standalone plugin by default [#134873](https://github.com/grafana/grafana/pull/134873), [@gtk-grafana](https://github.com/gtk-grafana)
- **Chore:** Upgrade to k8s v0.37.0 (and grafana-app-sdk v0.60.0) [#132571](https://github.com/grafana/grafana/pull/132571), [@stevesg](https://github.com/stevesg)
- **Dashboard:** Adds new a subtitle option for panel descriptions [#129164](https://github.com/grafana/grafana/pull/129164), [@torkelo](https://github.com/torkelo)
- **Dashboard:** Fall back when collection deletion is unsupported [#128259](https://github.com/grafana/grafana/pull/128259), [@bestend](https://github.com/bestend)
- **Dashboards:** Add $\_\_namespace global variable [#132167](https://github.com/grafana/grafana/pull/132167), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Allow `Add variable +` btn to add filters, links and annos as well [#130841](https://github.com/grafana/grafana/pull/130841), [@mdvictor](https://github.com/mdvictor)
- **Dashboards:** Hide links to deleted folders in Recently Deleted [#134469](https://github.com/grafana/grafana/pull/134469), [@Clarity-89](https://github.com/Clarity-89)
- **Dashboards:** Improve Recently Deleted performance with server-side search [#134126](https://github.com/grafana/grafana/pull/134126), [@pstibrany](https://github.com/pstibrany)
- **Dashboards:** Make the auto grid to be default [#130749](https://github.com/grafana/grafana/pull/130749), [@bfmatei](https://github.com/bfmatei)
- **Dashboards:** Show Git Sync badges in folder search [#132790](https://github.com/grafana/grafana/pull/132790), [@Clarity-89](https://github.com/Clarity-89)
- **Faro:** add support for `trackResources` [#130792](https://github.com/grafana/grafana/pull/130792), [@ashharrison90](https://github.com/ashharrison90)
- **FieldOverrides:** Add ShowIfOverride to field config options [#132419](https://github.com/grafana/grafana/pull/132419), [@gtk-grafana](https://github.com/gtk-grafana)
- **Frontend:** add subresource integrity [#131596](https://github.com/grafana/grafana/pull/131596), [@jackw](https://github.com/jackw)
- **Git Sync:** Clarify repository links for pure Git [#134238](https://github.com/grafana/grafana/pull/134238), [@ferruvich](https://github.com/ferruvich)
- **Git Sync:** Ignore hidden paths in repository scans and diffs [#134731](https://github.com/grafana/grafana/pull/134731), [@ferruvich](https://github.com/ferruvich)
- **GrafanaBootData:** Restrict config.datasources usage via lint rule [#130661](https://github.com/grafana/grafana/pull/130661), [@mckn](https://github.com/mckn)
- **Heatmap:** Keep exemplar marker size consistent across displays [#134072](https://github.com/grafana/grafana/pull/134072), [@fastfrwrd](https://github.com/fastfrwrd)
- **Home:** Send the traces setup CTA to the OpenTelemetry onboarding guide [#135135](https://github.com/grafana/grafana/pull/135135), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Add an On call schedules tab with your shifts and who's on call [#134747](https://github.com/grafana/grafana/pull/134747), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Let the Synthetic Monitoring card ignore checks, targets, and probes [#134217](https://github.com/grafana/grafana/pull/134217), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Let the metrics card exclude hosts and filesystems from its disk alert [#133472](https://github.com/grafana/grafana/pull/133472), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Move card filters to a footer dropdown and show page kinds as icons [#135851](https://github.com/grafana/grafana/pull/135851), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Replace the Recent tab with Recent activity [#134633](https://github.com/grafana/grafana/pull/134633), [@Clarity-89](https://github.com/Clarity-89)
- **Homepage:** Stop the homepage from jumping while it loads [#135321](https://github.com/grafana/grafana/pull/135321), [@Clarity-89](https://github.com/Clarity-89)
- **Log Details Sidebar:** Change default action to replace the current log instead of opening a new tab [#133129](https://github.com/grafana/grafana/pull/133129), [@matyax](https://github.com/matyax)
- **Log Details:** Surface errors in logs and update links styles [#134427](https://github.com/grafana/grafana/pull/134427), [@matyax](https://github.com/matyax)
- **Logs Table:** Disable hover overflow by default [#132882](https://github.com/grafana/grafana/pull/132882), [@matyax](https://github.com/matyax)
- **Logs:** Invert the orientation of the arrow in the Logs Table and Logs Panel [#131156](https://github.com/grafana/grafana/pull/131156), [@matyax](https://github.com/matyax)
- **Packaging:** Remove bash dependency from alpine Docker image [#132643](https://github.com/grafana/grafana/pull/132643), [@TheoBrigitte](https://github.com/TheoBrigitte)
- **PanelEdit:** Conditional field config display & edit context [#132398](https://github.com/grafana/grafana/pull/132398), [@gtk-grafana](https://github.com/gtk-grafana)
- **PanelOptions:** Add context options to overrides [#132414](https://github.com/grafana/grafana/pull/132414), [@gtk-grafana](https://github.com/gtk-grafana)
- **Plugins:** Avoid to delete RBAC roles when upgrading [#134143](https://github.com/grafana/grafana/pull/134143), [@andresmgot](https://github.com/andresmgot)
- **Plugins:** Expose OpenFeature provider discovery to backend plugins [#129735](https://github.com/grafana/grafana/pull/129735), [@adamyeats](https://github.com/adamyeats)
- **Plugins:** Forward SSL certificate environment variables [#131848](https://github.com/grafana/grafana/pull/131848), [@osmocomet](https://github.com/osmocomet)
- **Plugins:** Show the correct warning when grafana.com is unreachable [#132028](https://github.com/grafana/grafana/pull/132028), [@lazerg](https://github.com/lazerg)
- **Provisioning:** Add generic git OAuth app connections [#134186](https://github.com/grafana/grafana/pull/134186), [@amalavet](https://github.com/amalavet)
- **Provisioning:** Add link back to the original dashboard in preview banner [#129037](https://github.com/grafana/grafana/pull/129037), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** Allow permission updates on provisioned folders [#134725](https://github.com/grafana/grafana/pull/134725), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Allow resource previews in unsynced folders [#133250](https://github.com/grafana/grafana/pull/133250), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Always interpret folder metadata in resources and sync [#134726](https://github.com/grafana/grafana/pull/134726), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Always protect folder metadata from direct file writes [#135038](https://github.com/grafana/grafana/pull/135038), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Always use folder metadata in Git Sync [#134355](https://github.com/grafana/grafana/pull/134355), [@Clarity-89](https://github.com/Clarity-89)
- **Provisioning:** Default save from a branch preview to the previewed branch [#135136](https://github.com/grafana/grafana/pull/135136), [@Clarity-89](https://github.com/Clarity-89)
- **Provisioning:** GitHub-style doc tabs for folder README [#129073](https://github.com/grafana/grafana/pull/129073), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** Handle repository build timeouts and branch outages [#135072](https://github.com/grafana/grafana/pull/135072), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Keep folder when removing \_folder.json leaves its UID unchanged [#135574](https://github.com/grafana/grafana/pull/135574), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Link README items to Grafana pages when viewed in Grafana [#128455](https://github.com/grafana/grafana/pull/128455), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** Make backend user attribution unconditional [#134709](https://github.com/grafana/grafana/pull/134709), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Never replace the repository root folder during incremental sync [#135397](https://github.com/grafana/grafana/pull/135397), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Reject invalid resource names before API calls [#133666](https://github.com/grafana/grafana/pull/133666), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Respect Git Sync polling intervals after unchanged refs [#134380](https://github.com/grafana/grafana/pull/134380), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Show last checked time in Pull status [#134476](https://github.com/grafana/grafana/pull/134476), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Skip previews for pull requests from forks [#132522](https://github.com/grafana/grafana/pull/132522), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Stop PR previews when refs disappear [#132547](https://github.com/grafana/grafana/pull/132547), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Style branch/target-branch as GitHub-like pills in preview banner [#131133](https://github.com/grafana/grafana/pull/131133), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** Support generic git OAuth connections in the UI [#134187](https://github.com/grafana/grafana/pull/134187), [@amalavet](https://github.com/amalavet)
- **Provisioning:** Support legacy paths and diagnose missing source annotations [#133225](https://github.com/grafana/grafana/pull/133225), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Surface the finalizer blocking a stuck repository deletion [#133241](https://github.com/grafana/grafana/pull/133241), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** Treat manager-kind conflicts as warnings [#132364](https://github.com/grafana/grafana/pull/132364), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Use resource.action for preview banner title accuracy [#131134](https://github.com/grafana/grafana/pull/131134), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** recover from a deleted PR branch (pre-flight + save to new branch) [#128977](https://github.com/grafana/grafana/pull/128977), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** render mermaid diagrams in folder README [#129096](https://github.com/grafana/grafana/pull/129096), [@MissingRoberto](https://github.com/MissingRoberto)
- **Provisioning:** tolerate quota lookup failures for existing repositories [#131703](https://github.com/grafana/grafana/pull/131703), [@ferruvich](https://github.com/ferruvich)
- **QueryEditor:** Add extension point to the top toolbar [#132289](https://github.com/grafana/grafana/pull/132289), [@aocenas](https://github.com/aocenas)
- **RBAC:** Allow removing unowned permissions through access-control APIs (Enterprise)
- **RBAC:** Document APIs allow removing unowned permissions through access-control APIs [#132518](https://github.com/grafana/grafana/pull/132518), [@gamab](https://github.com/gamab)
- Replace subtitle switch UI string [#132965](https://github.com/grafana/grafana/pull/132965), [@imatwawana](https://github.com/imatwawana)
- **Reports:** say in the report when a variable value no longer exists (Enterprise)
- **Sandbox:** Config flag deprecation message [#135329](https://github.com/grafana/grafana/pull/135329), [@jesdavpet](https://github.com/jesdavpet)
- **Sandbox:** Show deprecation warning in UI tooltip (Enterprise)
- **Standard options:** Add Ordinal unit. [#130091](https://github.com/grafana/grafana/pull/130091), [@simonprickett](https://github.com/simonprickett)
- **Table:** Calculate column widths independently of scrollbar visibility [#134337](https://github.com/grafana/grafana/pull/134337), [@fastfrwrd](https://github.com/fastfrwrd)
- **Table:** Prevent initial column width jump with vertical scrollbars [#133615](https://github.com/grafana/grafana/pull/133615), [@fastfrwrd](https://github.com/fastfrwrd)
- **TimeRangePicker:** Default isOnCanvas to true [#135833](https://github.com/grafana/grafana/pull/135833), [@torkelo](https://github.com/torkelo)
- **TopNav:** Logo should not shrink [#131170](https://github.com/grafana/grafana/pull/131170), [@torkelo](https://github.com/torkelo)
- **Trace View:** Open Logs link in a new tab (Drilldown) or in split view (Explore) [#132987](https://github.com/grafana/grafana/pull/132987), [@matyax](https://github.com/matyax)
- **TraceView:** Add Go to span on the header error banner [#132550](https://github.com/grafana/grafana/pull/132550), [@joey-grafana](https://github.com/joey-grafana)
- **TraceView:** Add a trace banner for error and warning spans [#132250](https://github.com/grafana/grafana/pull/132250), [@joey-grafana](https://github.com/joey-grafana)
- **TraceView:** Expand attribute plugin cross-sell promos [#131472](https://github.com/grafana/grafana/pull/131472), [@joey-grafana](https://github.com/joey-grafana)
- **TraceView:** Open the banner span from Go to span and surface exception [#133122](https://github.com/grafana/grafana/pull/133122), [@joey-grafana](https://github.com/joey-grafana)
- **TraceView:** Use design system tokens in the header, minimap and timeline [#133339](https://github.com/grafana/grafana/pull/133339), [@joey-grafana](https://github.com/joey-grafana)
- **TraceView:** Use design system tokens in waterfall rows and span details [#133434](https://github.com/grafana/grafana/pull/133434), [@joey-grafana](https://github.com/joey-grafana)
- **Traces to logs:** Extend support, and discover trace and span related logs from [#130515](https://github.com/grafana/grafana/pull/130515), [@matyax](https://github.com/matyax)
- **Transformations:** Allow setting static refIDs per transformation [#131458](https://github.com/grafana/grafana/pull/131458), [@Develer](https://github.com/Develer)
- **Transformations:** Resolve variables in the classic transformation editor [#135569](https://github.com/grafana/grafana/pull/135569), [@Develer](https://github.com/Develer)
- **UI:** Luxon on by default [#134865](https://github.com/grafana/grafana/pull/134865), [@fastfrwrd](https://github.com/fastfrwrd)
- **Unified storage:** Enable automatic cleanup of deleted resources by default [#133330](https://github.com/grafana/grafana/pull/133330), [@pstibrany](https://github.com/pstibrany)
- **alerting:** Remove method step from import to GMA wizard [#130616](https://github.com/grafana/grafana/pull/130616), [@rodrigopk](https://github.com/rodrigopk)

### Bug fixes

- **Alerting:** Fix alerts going to the built-in Alertmanager after startup for external-only orgs [#134481](https://github.com/grafana/grafana/pull/134481), [@gillesdemey](https://github.com/gillesdemey)
- **Alerting:** Fix instance rows vanishing at coarse query steps in Triage [#133516](https://github.com/grafana/grafana/pull/133516), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Fix notification policy drop and query drift in rule saves [#131645](https://github.com/grafana/grafana/pull/131645), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Fix rule groups missing from a folder until "Show more" is clicked [#131078](https://github.com/grafana/grafana/pull/131078), [@JacobsonMT](https://github.com/JacobsonMT)
- **Alerting:** Fix stale dry-run validation and YAML errors in the Import wizard [#132707](https://github.com/grafana/grafana/pull/132707), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** Fix useAutoSyncConfiguration's queries behind Org Admin + feature toggle [#130627](https://github.com/grafana/grafana/pull/130627), [@rodrigopk](https://github.com/rodrigopk)
- **Alerting:** fix GetManagedRoute returning imported route for unrelated names [#132563](https://github.com/grafana/grafana/pull/132563), [@JacobsonMT](https://github.com/JacobsonMT)
- **Alerting:** reject managed route names with leading/trailing whitespace [#132566](https://github.com/grafana/grafana/pull/132566), [@JacobsonMT](https://github.com/JacobsonMT)
- **Dashboard:** Preserve panel subtitle in V2 save model [#133723](https://github.com/grafana/grafana/pull/133723), [@adi-IL](https://github.com/adi-IL)
- **Dashboards:** Fix Classic model returning v2 JSON when saving a provisioned dashboard [#131718](https://github.com/grafana/grafana/pull/131718), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Fix adhoc and groupby variable datasource on UI import [#131817](https://github.com/grafana/grafana/pull/131817), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Fix browse crash and hangs when a dashboard shares its folder's UID [#132634](https://github.com/grafana/grafana/pull/132634), [@Clarity-89](https://github.com/Clarity-89)
- **Dashboards:** Fix edit state props when swapping dashboard state in place [#132001](https://github.com/grafana/grafana/pull/132001), [@ifrost](https://github.com/ifrost)
- **Dashboards:** Fix missing deletion dates in Recently Deleted [#133734](https://github.com/grafana/grafana/pull/133734), [@pstibrany](https://github.com/pstibrany)
- **Dashboards:** Fix query variable refresh reset to onDashboardLoad on v2 UI import [#131837](https://github.com/grafana/grafana/pull/131837), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Keep tags set on a new dashboard when saving it [#131459](https://github.com/grafana/grafana/pull/131459), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Keep variable values and time settings set by an applied spec instead of reverting them to the URL [#134200](https://github.com/grafana/grafana/pull/134200), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Dashboards:** Preserve query variable refresh setting on v2 dashboard import [#132007](https://github.com/grafana/grafana/pull/132007), [@Sergej-Vlasov](https://github.com/Sergej-Vlasov)
- **Dashboards:** Show values preview for data source variables in the edit pane [#131736](https://github.com/grafana/grafana/pull/131736), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Library panels:** Fix skeleton alignment [#133965](https://github.com/grafana/grafana/pull/133965), [@ashharrison90](https://github.com/ashharrison90)
- **Navigation:** Hide NetworkError when switching organization [#131955](https://github.com/grafana/grafana/pull/131955), [@AshrithaSB](https://github.com/AshrithaSB)
- **Packaging:** Fix issue with bundled plugins not being moved properly [#131033](https://github.com/grafana/grafana/pull/131033), [@kminehart](https://github.com/kminehart)
- **PanelEditor:** Fix options pane not resizable beyond the preview's content width [#131581](https://github.com/grafana/grafana/pull/131581), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Plugins:** Don't report loaded plugins as not registered when a request times out [#135591](https://github.com/grafana/grafana/pull/135591), [@leventebalogh](https://github.com/leventebalogh)
- **Provisioning:** Fix PR dashboard previews when served from a sub-path [#132569](https://github.com/grafana/grafana/pull/132569), [@gustaff-weldon](https://github.com/gustaff-weldon)
- **Provisioning:** Fix folder cleanup and hidden directory scans [#135050](https://github.com/grafana/grafana/pull/135050), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Fix folder rename UID collision during full sync [#130401](https://github.com/grafana/grafana/pull/130401), [@ferruvich](https://github.com/ferruvich)
- **Provisioning:** Fix sync step flicker in Git Sync wizard [#134108](https://github.com/grafana/grafana/pull/134108), [@Clarity-89](https://github.com/Clarity-89)
- **Reporting:** Fix race condition with repeat panels on the /d-render/ page [#128536](https://github.com/grafana/grafana/pull/128536), [@mmandrus](https://github.com/mmandrus)
- **SQL Expressions:** Read enum fields as their text [#135225](https://github.com/grafana/grafana/pull/135225), [@nicwestvold](https://github.com/nicwestvold)
- **SQL Expressions:** Rename label columns that clash with generated column names [#134869](https://github.com/grafana/grafana/pull/134869), [@nicwestvold](https://github.com/nicwestvold)
- **Security:** Fix CVE-2026-17183 [#131061](https://github.com/grafana/grafana/pull/131061), [@github-actions[bot]](https://github.com/github-actions[bot])
- **Table:** Fix nested apply-to-row coloring to use the nested frame's own fields [#129426](https://github.com/grafana/grafana/pull/129426), [@fastfrwrd](https://github.com/fastfrwrd)
- **Table:** Fix the height a wrapped header row reserves [#132230](https://github.com/grafana/grafana/pull/132230), [@fastfrwrd](https://github.com/fastfrwrd)
- **Table:** fix JSON cell indentation, styling, and hover reveal [#130452](https://github.com/grafana/grafana/pull/130452), [@fastfrwrd](https://github.com/fastfrwrd)

### Breaking changes

- **Plugins marketplace:** rename config.ini section from marketplace to plugins_marketplace [#132172](https://github.com/grafana/grafana/pull/132172), [@xnyo](https://github.com/xnyo)

### Plugin development fixes & changes

- **ConfirmModal:** Ensure focus correctly traps when invoked from a dropdown menu [#132764](https://github.com/grafana/grafana/pull/132764), [@ashharrison90](https://github.com/ashharrison90)
- **Datasources:** Remove deprecated `isDefault` from `DataSourceInstanceListItem` [#133886](https://github.com/grafana/grafana/pull/133886), [@leventebalogh](https://github.com/leventebalogh)
- **GrafanaUI:** Fix focus ring appearance [#132808](https://github.com/grafana/grafana/pull/132808), [@ashharrison90](https://github.com/ashharrison90)
- **MultiCombobox:** Ensure height is consistent between empty/filled states [#131255](https://github.com/grafana/grafana/pull/131255), [@ashharrison90](https://github.com/ashharrison90)
- **Runtime:** Stabilize async data source APIs [#134390](https://github.com/grafana/grafana/pull/134390), [@leventebalogh](https://github.com/leventebalogh)
- **Runtime:** Stabilize plugin settings APIs [#134723](https://github.com/grafana/grafana/pull/134723), [@leventebalogh](https://github.com/leventebalogh)

---

> **Source** [grafana/grafana](https://github.com/grafana/grafana) · `v13.3.0` · 2026-10-27 · [upstream release](https://github.com/grafana/grafana/releases/tag/v13.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
