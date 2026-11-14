---
title: "airflow 3.3.1"
project: "airflow"
repo: "apache/airflow"
tag: "3.3.1"
published: "2026-08-12"
type: "patch"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.3.1/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.1/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.1/release_notes.html 🐳 Docker…"
---

# airflow 3.3.1

📦 PyPI: https://pypi.org/project/apache-airflow/3.3.1/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.1/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.1/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.3.1"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.3.1

## Significant Changes


### Pandas 3 changes how DataFrame XComs are stored and read back (#71169)


pandas 3 exposes its public classes from the ``pandas`` namespace, so a DataFrame is qualified as
``pandas.DataFrame`` instead of ``pandas.core.frame.DataFrame``. XComs record that name alongside the
serialized value, so the name written into the metadata database depends on the pandas version of the
component that pushed the value. Airflow registers both names, and a DataFrame written by either
pandas version can be read by either -- no configuration change is needed, and existing XComs stay
readable.

What you should do:

* **Roll this Airflow version out to every component before pandas 3 reaches any of them** -- workers
  in particular. A component that predates this change cannot read a DataFrame XCom written under
  pandas 3, and fails the pull with:

  .. code-block:: text

      ImportError: pandas.DataFrame was not found in allow list for deserialization imports.
      To allow it, add it to allowed_deserialization_classes in the configuration

  The message points at configuration, but the allow list is not the cause and changing it does not
  help. The rows are not corrupt: they become readable again as soon as the reader is upgraded.

* **Treat a downgrade as a one-way door for those XComs.** Rolling back to an Airflow version without
  this change strands any DataFrame XCom written while on pandas 3, with the same error, until you
  roll forward again.

* **Review Dags that inspect the ``dtypes`` of a pulled DataFrame.** The pandas version of the *reader*
  determines what a pulled DataFrame looks like, not the version that wrote it. Under pandas 3, a
  column of strings comes back as ``str`` rather than ``object``, and its missing values
  come back as ``nan`` rather than ``None``. Values are unchanged, but downstream code that branches
  on ``dtype == "object"``, checks cells with ``is None``, or compares against a reference frame with
  ``DataFrame.equals()`` can behave differently after the upgrade.

### Fix 2.x to 3.0+ upgrade failure when a custom Dag bundle is configured (#70994)


The ``0082_3_1_0_make_bundle_name_not_nullable`` migration assigned every legacy row
``bundle_name='dags-folder'``, so triggering a DagRun raised ``Requested bundle 'dags-folder' is
not configured.`` on any deployment that uses a bundle other than the default ``dags-folder``.
``DagFileProcessorManager`` now runs a one-shot, best-effort backfill at startup that routes each
affected Dag to the correct bundle based on its file path; unmatched Dags self-heal on the next
successful parse (or run ``airflow dags reserialize`` to force it immediately).

### Team scoped values of options registered as sensitive are now hidden (#71099)


Configuration options are registered as sensitive under their base section, so until now only the
base spelling of an option was masked. A team scoped override -- set in a ``[<team>=<section>]``
config file section, or through an ``AIRFLOW__<TEAM>___<SECTION>__<KEY>`` environment variable --
was not recognized as the same option and was returned in full.

Sensitivity is now decided after resolving the team scoped spelling back to the base option, so a
team scoped value is masked exactly as the base value already was.

**Behaviour changes:**

- ``AirflowConfigParser.as_dict(display_sensitive=False)``, ``GET /config``,
  ``GET /config/section/{section}/option/{option}`` and ``airflow config list`` now return
  ``< hidden >`` for a team scoped value of an option registered as sensitive. Deployments that
  read a team's real value through any of these will now receive the mask; use
  ``display_sensitive=True`` where a real value is required and appropriate.
- Team scoped ``_cmd`` and ``_secret`` entries are replaced with ``< hidden >`` in place, rather
  than being resolved into their value and removed as they are in a base section. Resolving them
  is not supported for a team, so the command string or secret path is no longer shown either.
- Non team configuration is unaffected, and ``display_sensitive=True`` continues to return real
  values.

### Bug Fixes

- UI: Fix a 500 error when combining the last-run and any-run Dag state filters on the Dags list (#71371)
- UI: Fix task log text selection being cleared while scrolling (#71200)
- UI: Fix a translation key showing as raw text in the Clear Task dialog (#71240)
- Fail deferred task instances whose saved state can't be resumed, instead of leaving them stuck (#71183)
- Fix task callbacks being skipped when ``TriggerDagRunOperator`` gets a 404 (#71083)
- Fix task state store rejecting keys that contain slashes (#70967)
- Fix the ``deadline_reference`` decorator's no-parentheses form (#70966)
- Fix Dag run duration stats crash on PostgreSQL 14+ (#70964)
- Deactivate legacy Dags with a NULL ``bundle_name`` during upgrade from 2.x to 3.x (#70662)
- Fix deadline alerts using an outdated Dag definition (#70965)
- Fix deadline alert crashes on dynamic or malformed intervals (#70625)
- Fix deadline alerts that have no fixed interval (#70659)
- Fix backfill permission checks running against the wrong backfill for some ID formats (#71090)
- Fix database lock contention and statement timeouts caused by slow asset listeners on large fan-outs (#71065)
- Fix errors loading a Dag callback whose module isn't importable on the current component (#71042)
- Reject reserved XCom serialization keys submitted as JSON string literals (#69462)
- API: Return a clear error instead of a 500 for an invalid trigger-Dag-run request (#70775)
- API: Return 503 when SQLite locks during backfill creation (#69659)
- API: Return 422 for an empty backfill window and stop leaving orphan rows (#69367)
- API: Return 410 instead of 500 when setting rendered fields for a stale task instance (#69529)
- Reject invalid partition keys in the create asset events API (#69581)
- Reject attaching partition keys to asset alias events (#69515)
- Reject mismatched rollup mapper and window pairings at Dag parse time (#69516)
- CLI: Reject inverted date windows in ``airflow partitions clear`` (#69547)
- Fix asset materialization dropping the partition date on partitioned Dag runs (#69339)
- UI: Fix partition progress returning errors or over-reporting for keys with slashes and duplicate rows (#69844)
- Honor catchup for historical asset events in asset-triggered Dags (#69224)
- Fix drifting data intervals for monthly/yearly schedules with catchup disabled (#69189)
- Fix asset watcher triggers failing to decode their arguments (#70750)
- Prevent Triggerer crashes by speeding up cleanup of unused triggers (#70668)
- Fix Triggerer CrashLoopBackOff when ``json_logs`` is enabled (#70669)
- Detect and surface task-worker communication deadlocks instead of hanging (#70744)
- Fix TaskInstance duration calculation with SQLite (#70734)
- Fix incorrect end date, duration, and map index in task try history for retried tasks (#69458)
- Stop skipping ``none_failed_min_one_success`` tasks in mapped task groups (#70318)
- Fix the scheduler firing ``on_failure_callback`` for heartbeat-timed-out retries (#69824)
- Respect retries for deferrable tasks that fail via a trigger-emitted ``TaskFailedEvent``, instead of always failing terminally (#71163)
- Prevent scheduler crash when process/thread are missing from the log format (#69787)
- Fix ``TaskInstance`` mark-success downstream default (#70143)
- Fix crash when tailing logs of a running task instance (#69521)
- API: Return a consistent error response instead of a 500 when a database error occurs (#70236)
- Fix Dag reparse authorization checking the wrong Dag (#70115)
- Don't deactivate Dag bundles owned by other Dag processors (#70017)
- Fix Dag bundle refresh using stale state (#70374)
- Skip stored credentials when a connection test overrides host or port (#70010)
- Fix cursor pagination dropping rows when sorting by a nullable column (#70739)
- API: Filter stale Dag tags from the public API (#70746)
- Fix Dag details active-runs count to exclude queued runs (#70511)
- Fix environment-variable config overrides being ignored for some provider config sections (#70732)
- CLI: Fix config ``update --option``/``--ignore-option`` never matching options (#70757)
- CLI: Fix ``TypeError`` in ``airflow db shell`` when the database name is missing (#70752)
- CLI: Send Airflow CLI logs to stderr for ``-o`` commands so structured output stays machine-readable (#70747)
- Reduce Dag processor log noise from per-Dag run lookups (#69514)
- Suppress noisy Alembic plugin setup logs (#70116)
- Silence internal HTTP 422 deprecation warnings in logs (#70745)
- Only resolve a team-namespaced environment secret for its own team (#70882)
- Fix a team-scoped secret lookup that could return another team's secret for a crafted key (#71041)
- Mask sensitive ``Variable`` values stored as JSON lists (#71069)
- Fix secrets recorded unmasked in the audit log for bulk ``Variable``/``Connection`` updates (#71043)
- Fix sensitive values nested inside lists, tuples, or sets not being masked in logs (#70189)
- UI: Fix secrets not masked in the Rendered Templates view with ``KubernetesPodOperator`` (#70756)
- Fix an open-redirect by rejecting malformed URLs in redirect validation (#70515)
- Fix npm vulnerabilities in the simple auth manager (#70753)
- Bump ``structlog>=26.1.0`` and ``croniter>=6.2.2`` to fix memory leaks (#70749)
- Fix task instance notes not being visible to state-change listeners (#70252)
- Call listeners for a running task instance when a Dag run state is manually set (#70286)
- Fix ``dag`` and ``note`` missing from Dag-run state-change listener events (#70245)
- Remove a Dag Run or Task Instance note when its content is cleared (#70735)
- Fix ``email_on_failure``/``email_on_retry`` task alerts silently ignoring a custom ``[email] email_backend`` and always routing through ``SmtpNotifier``; an ``email_backend`` that cannot be imported now errors loudly instead of silently falling back to SMTP (#70129)
- UI: Fix task states stuck stale when a run finishes quickly (#70397)
- UI: Fix Grid view scrollbar hiding the latest Dag run (#70555)
- UI: Fix grid/graph view topological sort for group-level and cross-group dependencies (#70591)
- UI: Fix ``Trigger Again`` showing empty config for the selected run (#70288)
- UI: Fix blank Assets dependency graph from missing Dag nodes (#70743)
- UI: Fix the collapse button overlapping details panel content (#70751)
- UI: Fix log line-number link highlighting (#69663)
- UI: Fix partition key display and input handling (#69974)
- UI: Fix Gantt tooltip showing the wrong end date on queued/scheduled bars (#70742)
- UI: Make the Dag pause toggle distinguishable in dark mode (#70748)

### Miscellaneous

- UI: Show a note indicator on Dag runs in the Grid view (#70834)
- UI: Show a saved-note indicator on task instances in the Grid view (#70829)
- Add partition date filters to the Dag run API (#70304)
- Add support for filtering Dags by any Dag run state (#70292)
- Allow filtering the Dags list by failed and success runs in any run-state filter (#70293)
- Add expand/collapse all for the Dag Run conf JSON in the Dag Runs list (#69777)
- Show the Dag Run conf column by default in the Dag Runs list (#69604)
- API: Allow keeping finished task states when clearing a Dag run (#69662)
- Export ``FanOutMapper`` and wait policies from ``airflow.partition_mappers`` (#69513)
- Add a ``task.execute`` OpenTelemetry span around task execution (#69359)
- Add a ``run_type`` tag to the ``dagrun.duration.failed`` metric (#70731)
- Improve error messages when a value's type cannot be serialized (for example, XCom values) (#70982)
- Highlight user-code frames in task log tracebacks (#70375)
- Optimize scheduling by avoiding duplicate trigger-rule upstream-count queries per pass (#70826)
- Hide the run-on-latest-version option for non-versioned bundles (#70702)
- Show the current page name in the browser tab title (#69656)
- UI: Show larger Dag run and task instance counts on the dashboard (#71008)
- UI: Refresh task details immediately when switching tasks (#71012)
- UI: Reset the task try when switching Graph tasks (#70817)
- UI: Add JSON validation and prettifying to the JSON editor (#70554)
- UI: Make the Dag pause toggle update immediately on click (#70741)
- UI: Improve Dag list rendering by deferring the pause confirmation dialog (#70025)
- UI: Align boolean controls in the Trigger Dag form (#70963)
- UI: Wrap long plugin source paths in the import-error dialog (#70737)
- UI: Allow multiple routes to show active nav buttons (#70200)
- UI: Make duration charts readable at a glance (#70197)
- UI: Improve Grid view performance when summaries stream in (#69958)
- UI: Improve Grid view responsiveness by avoiding a full re-render on hover (#69928)
- UI: Fix missing glyph icons in the code editor (#69422)
- UI: Complete missing Hebrew (``he``) translations (#70566)
- UI: Complete missing Arabic (``ar``) translations (#70510)
- UI: Complete the Polish (``pl``) translation (#70507)
- UI: Add missing Greek (``el``) translations (#70471)
- Optimize database queries when triggers submit asset events (#70738)
- Optimize core queries by removing redundant result de-duplication (#69918)
- Remove redundant database commits in API route handlers (#69620)
- Make ``ResumableJobMixin`` an abstract base class (subclasses must implement its methods) (#70810)
- UI: Add a keyboard shortcut help dialog (press ``?``) and clean up the graph/grid view (#69978)

### Doc Only Changes

- Document the effect of state-store cleanup in ``ResumableJobMixin`` (#70792)
- Document ``jwt_secret``/``_secret`` and ``LocalFilesystemBackend`` config support (#70730)
- Clarify the ``logging_config_class`` contract and document ``REMOTE_TASK_LOG`` (#70592)
- Clarify ``AssetAlias`` usage (#71087)
- Clarify the ``AssetPartitionDagRun`` provisional-run docstring (#70104)
- Clarify custom-time parameterized timetable logic (#69387)
- Document native template rendering type coercion (#69389)
- Update multi-node executor guidance (#69388)
- Add a custom metrics section to the metrics docs (#70778)
- Add Task SDK, Go and Java SDK execution architecture diagrams (#70100)
- Add a docker-stack docs example for the venv scene (#69112)
- Link the pkg.go.dev API reference from the Go SDK docs (#69440)
- Link the published Java SDK API reference from the Java SDK docs (#69448)
- Add a real example of ``CronDataIntervalTimetable`` and ``DeltaDataIntervalTimetable`` (#70434)
- Fix incorrect code samples in the Deadline Alerts docs (#70786)
- Fix reversed-direction examples in the ``FanOutMapper`` docs (#69511)
- Fix documentation misusing previous/next for task relationships (#69570)
- Fix partition-label casing (#69470)
- Fix stale Airflow 2.0 references in ``dev/README.md`` (#70107)
- Fix a Sphinx build error (#70761)
- Update the description on "What is Airflow" (#71068)
- Update local OTel Collector and Prometheus versions to support exponential histograms (#69056)
- Simplify the API docs on pattern search (#70509)
- Standardize Alembic migration descriptions and add a style lint (#70262)
- UI: Complete Spanish UI translations (#70196)
- Update French (``fr``) UI translations to 100% coverage (#70387)
- Add missing Dutch (``nl``) translations (#70004)
- Add missing Simplified Chinese (``zh-CN``) UI translations (#70417, #70418, #70419)
- Fill the Taiwanese Mandarin (``zh-TW``) translation gaps (#70195, #70379, #69707)
- Add missing Korean (``ko``) translations and backport from main (#70807, #70832)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.3.1` · 2026-08-12 · [upstream release](https://github.com/apache/airflow/releases/tag/3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
