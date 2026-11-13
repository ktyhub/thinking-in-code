---
title: "airflow 3.2.2"
project: "airflow"
repo: "apache/airflow"
tag: "3.2.2"
published: "2026-05-29"
type: "patch"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.2.2/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.2/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.2/releasenotes.html 🐳 Docker…"
---

# airflow 3.2.2

📦 PyPI: https://pypi.org/project/apache-airflow/3.2.2/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.2/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.2/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.2.2"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.2.2

## Significant Changes

- The SMTP STARTTLS upgrade performed by ``airflow.utils.email.send_email`` now validates the SMTP server's certificate against the system's trusted CA bundle by default. Previously the ``starttls()`` call was made without an SSL context, so any certificate was accepted.
  Deployments that intentionally point Airflow at an SMTP server with a self-signed or otherwise non-validating certificate and need to preserve the previous behaviour must set ``email.ssl_context = "none"`` in ``airflow.cfg``. The ``"default"`` value (now also the default when the option is unset) uses :func:`ssl.create_default_context`. Previously this option applied only to the ``SMTP_SSL`` path; it now applies to the STARTTLS path as well. (#65346)
- In #64963, the Airflow UI switched from full-match ``*_pattern`` REST API query parameters to the new index-friendly ``*_prefix_pattern`` parameters on list endpoints. This is a behavioral change for search-as-you-type filters in the UI: matches are prefix-based (``LIKE 'term%'`` via a range scan) instead of substring-based (``ILIKE '%term%'``), which means the database can use B-tree indexes and search stays fast on large deployments. The REST API itself keeps both forms: existing ``*_pattern`` parameters still behave exactly as before.
  In #66015, a per-search-bar "Match anywhere" toggle was added so users who relied on the previous substring behavior can opt back into it from the UI. Each search input and each text filter pill now has a small regex-icon toggle next to the value; flipping it on switches that input from ``*_prefix_pattern`` to ``*_pattern``. (#66015)
- Fix triggerer race condition and deadlock that caused deferred tasks to stall indefinitely

  Triggers that call synchronous SDK methods (e.g. ``get_task_states`` used by
  ``safe_to_cancel`` in several Google provider operators) could crash the triggerer's
  internal subprocess.  The triggerer would then continue to heartbeat normally —
  appearing healthy to the scheduler — while silently processing zero triggers, causing
  every deferred task to time out.  This was first reported in issue #64620; a
  partial fix shipped in Airflow 3.2.1 (#64882) but introduced a new deadlock
  with the same visible symptom under load.

  Both issues are fixed by replacing the lock-based serialization with response
  multiplexing: each request now carries a unique ID and the response is routed back to
  the correct caller, so concurrent requests from trigger threads no longer contend or
  deadlock regardless of how many triggers are running or what SDK methods they call.

  **New: triggerer subprocess watchdog**

  Even with the race fixed, a trigger that blocks the event loop (e.g. by calling
  ``time.sleep()`` or performing blocking I/O directly in ``async def run()``) would
  previously leave the triggerer appearing healthy indefinitely.

  A new ``[triggerer] runner_health_check_threshold`` config option (default: 30 seconds)
  adds a watchdog: if the triggerer subprocess goes silent for longer than the threshold,
  the parent process stops updating the heartbeat so the scheduler can detect the hang and
  reassign triggers rather than waiting for them to individually time out.  Set the option
  to ``0`` to disable the watchdog. (#66412)


- Tighten ``[core] allowed_deserialization_classes_regexp`` to require full-string matches

  Patterns in ``[core] allowed_deserialization_classes_regexp`` are now matched
  against the entire classname using ``re.fullmatch()`` instead of ``re.match()``.
  Previously a pattern such as ``airflow\.models\.Variable`` admitted not only
  the intended class but also names that started with it
  (e.g. ``airflow.models.Variable_Malicious``), because ``re.match`` only anchors
  at the start of the string.

  The default value of this option is empty, so out-of-the-box deployments are
  unaffected. Deployments that configured this option with patterns relying on
  prefix-match semantics — for example ``airflow\.models\.`` to mean "any class
  under ``airflow.models``" — must add ``.*`` to the pattern
  (``airflow\.models\..*``) to retain the previous behaviour. (#66499)

- Custom deadline reference classes must now be registered via the new ``deadline_references`` attribute on ``AirflowPlugin``, matching the existing pattern for custom timetables and custom partition mappers. To use a custom ``DeadlineReference`` subclass, register it in a plugin's ``deadline_references`` list. Custom references that are not registered will raise ``DeadlineReferenceNotRegistered`` at deserialization. (#66737)

##  Bug Fixes

- Fix ``Callback.handle_event`` triggerer crash when OpenTelemetry metrics receive dict typed tag values (#67527) (#67529)
- UI: Rewrite ``modulepreload hrefs`` to the api-server static path (#67548) (#67556)
- Correctly pre-allocate ``external_executor_id`` with multiple executors on PostgreSQL (#67388) (#67458)
- Return raw import-error stacktrace when a Dag file has no registered Dag (#67465) (#67478)
- UI: Fix Expand/Collapse All on XComs and Audit Log JSON cells (#67316) (#67361)
- UI: Load Monaco workers via a same-origin Blob shim (#67352) (#67469)
- UI: Show DAG name in browser tab title (#67169) (#67399)
- Require ``starlette>=1.0.1`` for Host-header parsing fix and ``cadwyn>=6.1.1`` for compatibility
  (#67326) (#67460)
- Revoke JWT on /auth/logout regardless of auth manager logout URL (#67289) (#67362)
- Fix deadlock in ``ti_update_state`` caused by FOR UPDATE locking dag_run (#67246) (#67264)
- UI: Stop polling ``getLatestRunInfo`` on paused Dags with no active runs (#67249) (#67256)
- Fail closed when supervisor IPC fails on a non-success terminal state (#66573) (#67183)
- Refuse secrets-backend fallback on Execution-API authorization deny (#66575) (#67173)
- Harden ``_collect_teams_to_check`` and ``requires_access_backfill`` against malformed request bodies (#66504) (#67182)
- Don't crash supervisor IPC loop on transient network errors (#66572) (#67177)
- Default-deny auth at the API and UI router level (#66505) (#67171)
- Apply per-Dag audit log permission to event log detail endpoint (#67112) (#67159)
- Fix ``ValueError`` when supervisor force-closes stuck sockets after timeout (#67115) (#67162)
- Redact rendered template fields while still structured to preserve nested-key masking on truncation (#65906) (#67117)
- Fix migration 0080 to migrate existing deadline rows on upgrade and downgrade (#66016) (#67129)
- Fix ``XCom`` PATCH/POST to store native values instead of ``json.dumps`` output (#64220) (#67116)
- Fix ``max_active_runs`` lost during Dag serialization when value equals schema default (#65310) (#67097)
- Fix N+1 query pattern in bulk pool delete endpoint (#66222) (#67108)
- Optimize DB performance of datetime range filters in API queries (#66696) (#67102)
- Fix ``serialize_template_field`` handling callable value in dict (#63871) (#67092)
- Fix scheduler to ignore stale executor success after defer reschedule (#66431) (#67089)
- Fix ``ArgNotSet`` ``repr`` to use stable string instead of memory address (#65222) (#66897)
- Fix scheduler MySQL task instance index hint (#66785) (#67087)
- UI: Preserve Grid limit and filters when redirecting after manual Dag trigger (#66717) (#66867)
- Apply reserved-key check to ``XCom`` update payload (#65915) (#66913)
- Fix log server path extraction to use ``removeprefix`` (#66749) (#66772)
- Fix macOS ``SIGSEGV`` in task execution by using ``fork`` + ``exec`` (#64874) (#66872)
- Fix Dag auto-pause ordering to use ``run_after`` (#65207) (#66863)
- Fix Dag version inflation caused by unmatched serialized result of task using re-serialized command (#61077) (#66861)
- Fix ``pod_override`` serialization in Dag details and executor path (#65407) (#66898)
- Fix async engine missing ``pool_recycle`` and ``pool_pre_ping`` configuration (#65276) (#66866)
- UI: Make Dag detail page scrollable on mobile viewports (#65899) (#66975)
- Fix ``DagVersion`` when clearing tasks with run on latest version (#65835) (#66901)
- Fix millisecond floating point duration bug (#66560) (#66915)
- UI: Fix "Mark state as..." buttons grayed out when task or ``DagRun`` already in target state (#66198) (#66919)
- Fix memory leak in ``LocalExecutor`` caused by unreleased file descriptor locks (#65121) (#66887)
- Fix external DB manager upgrades with existing tables (#66674) (#66882)
- UI: Improve ``DagCalendarTab`` background color retrieval and loading overlay handling (#64189) (#66860)
- UI: Handle Dags state filter overflow on mobile (#66812) (#66847)
- UI: Fix Edit Connection dialog missing ``lazyMount`` causing JSON editor infinite loading (#65969) (#66828)
- UI: Fix ``ConnectionForm`` crashing when connection has invalid extra JSON (#66593) (#66831)
- Handle ``PermissionError`` in ``init_log_folder`` for mounted filesystems (#63878) (#66733)
- Fix scheduler crash by catching ``StaleDataError`` in ``verify_integrity`` (#64503) (#66727)
- Fix triggerer file handle leak when remote log upload fails (#66675) (#66684)
- Fix ``/tmp`` file leak when API server streams large task logs (#66450) (#66667)
- Fix ``XCom`` prior-dates lookup for duplicate ``run_id`` across Dags (#65227) (#66646)
- Fix HITL (Human-In-The-Loop) ``/required_actions`` listing to show mapped task instances (#66433) (#66482)
- Fix scheduler callback ``bundle_version`` when versioning disabled (#66485) (#66518)
- UI: Hide ``Next Run`` timestamp for paused Dags (#66552) (#66568)
- Fix task run context crash when ``DagRun`` state is expired (#66339) (#66347)
- Fix incorrect type warning from OTel spans (#66559) (#66567)
- Fix backfill to populate ``partition_date`` on partitioned backfill runs (#65998) (#66409)
- Fix ``remote_task_handler_kwargs`` passing handler params to ``RemoteLogIO`` (#65957) (#66440)
- Fix i18n translation files served stale after Airflow upgrade due to browser cache (#65720) (#66422)
- UI: Fix manual copy from Rendered Templates tab adding extra blank lines (#66221) (#66366)
- Fix slow and incomplete trigger cleanup in scheduler (#66210) (#66381)
- UI: Distinguish ``upstream_failed`` from ``failed`` in normal vision (#66324) (#66365)
- UI: Fix ``SearchBar`` input rewind (#66284) (#66359)
- Don't re-emit ``logical_date`` when previous ``data_interval`` is zero-length (#66132) (#66263)
- Fix variable access in triggerer for deferrable operators (#63387) (#66239)
- Fix missing ``autoincrement`` sequence on ``callback_request`` downgrade (#65230) (#66189)
- Restore pre/post execute log grouping in task logs (regression in 3.2.x) (#66037) (#66049)
- Preload ``source_aliases`` in ``process_executor_events`` (#65422) (#66191)
- Fix ``dagRuns`` API to honor ``start_date_gte`` filter correctly (#66045) (#66098)
- Fix asset-triggered Dags failing to schedule when their triggers were unassigned in the DB (#65792) (#66043)
- UI: Preserve config changes when re-triggering a Dag from the UI (#65749) (#66044)
- Fix scheduler ``UniqueViolation`` crash on downgrade from 3.2.0 to 3.1.x (#65688) (#66003)
- Run task cleanup hooks (on_failure_callback, listeners) when the supervisor IPC call fails on a terminal-state report (#65714) (#65946)
- Fix triggers with double-encoded payloads failing to deserialize (#64823) (#65584)
- UI: Fix log fetch crash when ``ti.hostname`` is empty (#64285) (#65583)
- Fix backfill marked complete before Dag runs are created (#62561) (#65889)
- UI: Fix date time input ``year`` field unmodifiable (#63885) (#65890)
- UI: Fix pools slot input behavior (#63900) (#65891)
- Fix ``TypeError`` crashes on ``/users/list`` and ``/roles/list`` in FAB UI caused by concurrent API schema requests (#63986) (#65892)
- UI: Fix toaster behavior (#64142) (#65893)
- Fix FAB DB manager discovery in migration-only contexts (#64145) (#65894)
- UI: Fix ``PoolBar`` links using wrong query params for task instances filtering (#64182) (#65896)
- Fix memory growth from ``pathlib`` ``sys.intern`` in long-running processes (#65706) (#65855)
- Pre-assign ``external_executor_id`` at queuing time to prevent duplicate execution on scheduler crash (#65594) (#65711)
- Handle supervisor remote log upload failures gracefully (#65308) (#65318)
- Fix ``ti.start_date`` showing deferral-resume time instead of original start time (#63247) (#65491)
- Fix task CLI ``map_index`` bounds validation (#64133) (#65479)
- UI: Fix mapped task ``XCom`` navigation from Grid (#65192) (#65322)
- Fix connection schema field not saved for providers without field behaviour (#65263) (#65267)
- Fix bulk task instance update for mapped TIs and auth error rendering (#65874)
- Fix bulk task instance RBAC bypass (#64288) (#65846)
- Update ``is_url_safe`` to reject URLs with ``///`` (#65557) (#65737)
- UI: Improve Graph view performance (#65031) (#65537)
- Fix backfill params not overriding existing Dag run conf (#64939) (#65599)
- Fix ``run_id_pattern`` pipe OR operator dropping single-term edge cases (#65190) (#65565)
- Filter external dependency nodes by readable Dags in ``structure_data`` endpoint (#65342) (#65534)
- Respect Dag processor config option to show parsing logs on stdout (#65528) (#65541)
- Add per-Dag authorization to ``partitioned_dag_runs`` endpoints (#65344) (#65538)
- UI: Register trigger and sensor graph node types (#65167) (#65321)
- Ensure DB migrations run in a single connection (#65231) (#65368)
- Fix ``PATCH /dags`` pagination bug and document wildcard ``dag_id_pattern`` (#65309)
- Set JWT refresh cookie ``Secure`` flag when request is HTTPS (#65348) (#65363)
- Refuse to follow log symlinks that resolve outside the base log folder (#65325) (#65345)
- Enforce per-file import-error authorization using ``relative_fileloc`` and bundle (#65329) (#65343)
- UI: Invalidate task instances list query after clearing task instance (#63923) (#65304)
- Recover stuck TIs when direct terminal-state API call fails (#66574) (#67204)

##  Miscellaneous

- UI: Use local Monaco editor module instead of CDN (#66647) (#67199)
- Use a distinct redact message for import errors with no registered Dag (#66923) (#67176)
- Surface remote-log upload failures via structured warnings (#66571) (#67172)
- UI: Filter task instances by rendered map index (#66008) (#67163)
- Move Task Identity line into Pre Execution block in logs (#67036) (#67134)
- Apply ``requires_access_event_log`` to ``GET /eventLogs`` list endpoint (#67185) (#67211)
- UI: Preserve proxy URL on login redirect (#66690) (#67091)
- Keep ``Named*Logger.name`` working across structlog releases (#66875) (#67088)
- Two-token mechanism for task execution to prevent token expiration while tasks wait in executor queues (#60108) (#66989)
- Validate task identity token claims with a typed schema (#63604) (#66988)
- Mark Dags stale when their bundle is removed from config (#66948) (#66985)
- UI: Allow pasting full datetime strings into date picker inputs (#66251) (#66958)
- Validate Dag run conf in backfill dry-run (#66196) (#66935)
- Improve post-task logs to show exception in failure (#66735) (#66920)
- UI: Show Dag run duration in grid tooltip (#65787) (#66900)
- UI: Add Dag run ID to grid bar tooltip and task instance tooltip (#65626) (#66871)
- UI: Change queued Dag runs color to gray in Calendar (#66623) (#66870)
- Add configurable LRU+TTL caching for API server Dag retrieval (#60804) (#66862)
- UI: Use link styling for Dag tags (#66750) (#66855)
- UI: Add hover feedback to ``Checkbox`` (#66714) (#66826)
- Check sensitive key names before applying recursion-depth cutoff in secrets masker (#65912) (#66748)
- Adjust log message header for expandable sources (#66570) (#66653)
- Allow triggerer to support memray memory profiling (#65994) (#66643)
- Show task ID attributes (``ti_id``, ``task_id``, etc.) once, not on every log line (#66036) (#66421)
- Propagate triggering user to child Dag runs via ``TriggerDagRunOperator`` (#65747) (#66378)
- UI: Add ``isExpanded`` prop on JSON expand/collapse buttons (#66340) (#66364)
- Pass ``try_number`` to extra links API (#65661) (#66171)
- UI: Serve grid TI summaries from shared cached ``DagBag`` (#65775) (#65966)
- Add cursor-based pagination for ``get_dag_runs`` endpoint (#65604) (#65746)
- Support ordering ``XCom`` entries in the REST API and UI (#65418) (#65600)
- UI: Add cursor-based pagination for task instances list (#64953) (#65542)
- Include task instance UUID in scheduler, Dag processor, triggerer, and worker logs (#65458) (#65476)
- Enable SQLAlchemy connection pool settings for file-based SQLite (#64888) (#65411)
- Add cursor-based pagination for ``get_task_instances`` endpoint (#64845) (#65405)
- UI: Rework Monaco editor theme to match Chakra UI palette (#64748) (#65228)
- UI: Add Dag runs filters for Consuming Asset (#63624) (#65306)
- UI: Improve grid and ``ti_summaries`` and grid runs queries (#64034) (#67014)
- UI: Enable queue up new tasks (#63484) (#66869)
- Expose queueing/scheduled time in the Gantt chart (#63372) (#65016)
- Export ``from_timestamp`` from Task SDK timezone module (#67321) (#67331)


##  Doc-only Changes

- Refresh JWT authentication and security model docs with mermaid diagrams (#67435) (#67466)
- Fix misleading typo in ``plugins_manager`` docs (#67101) (#67114)
- Document supported deployment platforms in security docs (#66931) (#67017)
- Warn against world-accessible Kerberos ccache default in docs (#66557) (#67085)
- Update French ``(fr)`` UI translations to 100% coverage (#67241)
- Close Catalan translation gap (#67011)
- Close German translation gaps (2026-05-12) (#66830)
- Close Korean translation gaps (May 13) (#66873)
- Add missing Polish translations for new UI keys (#66823)
- Update health endpoint in security docs (#66701) (#66739)
- Add self-diagnosis guide for Dag version inflation in FAQ (#66697) (#66738)
- Add Chakra UI license to ``airflow-core`` (#66703) (#66740)
- Document effects of ``create_cron_data_intervals`` (#66458)
- Clarify Task Execution API coverage in Dag-author-isolation chapter (#66194) (#66322)
- Complete ``zh-TW`` translations (#66401)
- Align Dag capitalization from "DAG" to "Dag" in ``core_api`` (#66211) (#66304)
- Word changed from "DAG" to "Dag" in ``airflow-core/src/airflow/api`` (#66200) (#66214)
- Change Hebrew wording for "Asset Triggered" (#64177) (#65895)
- Update Dag Runs document under Core Concept to be consistent with ``BashOperator`` document (#64129) (#65850)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.2.2` · 2026-05-29 · [upstream release](https://github.com/apache/airflow/releases/tag/3.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
