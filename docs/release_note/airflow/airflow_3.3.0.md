---
title: "airflow 3.3.0"
project: "airflow"
repo: "apache/airflow"
tag: "3.3.0"
published: "2026-07-06"
type: "minor"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.3.0/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.0/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.0/release_notes.html 🐳 Docker…"
---

# airflow 3.3.0

📦 PyPI: https://pypi.org/project/apache-airflow/3.3.0/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.0/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.0/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.3.0"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.3.0

## Significant Changes

### Asset Partitioning (#64571, #65447, #66030, #66848, #67184, #67475, #67716, #68978)


Building on the asset partitioning introduced in 3.2.0, Airflow 3.3.0 substantially expands how a
single upstream asset event fans out to partitioned downstream Dag runs. New partition mappers —
``RollupMapper`` (many-to-one), ``FanOutMapper`` (one-to-many), and ``FixedKeyMapper`` +
``SegmentWindow`` (categorical rollup) — compose with time windows (day/week/month/quarter/year) and a
``wait_policy`` (``WaitForAll`` or ``MinimumCount(n)``) to control when partitioned runs fire. Windows
can fan out forward or backward in time, and total fan-out per upstream event is bounded by the new
``[scheduler] partition_mapper_max_downstream_keys`` config (configurable per mapper). Airflow 3.3.0
also adds the ``PartitionedAtRuntime`` timetable, which lets a Dag declare that its partition key(s)
are assigned when the run starts rather than mapped from an upstream event.

For detailed usage instructions, see :doc:`/authoring-and-scheduling/assets`.

###  Task and Asset State Store (#65759, #66073, #66160, #66463, #66586, #66859, #67041, #67292, #67319)


Airflow 3.3.0 introduces a first-class state store for tasks and assets (AIP-103). Tasks can persist
arbitrary key-value state that survives across retries and runs via a new ``task_state_store`` accessor, and
assets can carry their own state via ``asset_state_store`` — both available from the Task SDK. State is kept
in the metadata database by default, or in a custom worker-side backend (``[workers]
state_store_backend``), supports per-key retention with periodic garbage collection and an optional
``clear_on_success``, and is fully manageable through the Core API and Execution API.

For detailed usage instructions, see :doc:`/core-concepts/task-and-asset-state-store`.

### Pluggable Retry Policies (#65474)


Task retry behaviour is now pluggable (AIP-105). In addition to a fixed ``retries`` count, you can
attach a custom retry policy that decides whether and when a task is retried, enabling strategies such
as retrying only on specific exceptions or backing off based on custom logic.

For detailed usage instructions, see :ref:`concepts:retry-policies`.

###  Language Task SDK (Java and Go) (#65958, #67161, #67635, #67699)


Airflow 3.3.0 adds a Coordinator layer (AIP-108) that lets individual task implementations be written
in non-Python languages while the Dag and its scheduling stay in Python. A task is declared in the Dag
with ``@task.stub(queue=...)``; the worker routes it to a configured coordinator
(``JavaCoordinator`` for JVM languages, ``ExecutableCoordinator`` for self-contained native binaries
such as Go) that runs the task in a language runtime and proxies Variables, Connections, and XComs back
through the Execution API.

.. warning::

  The Coordinator layer and the Java/Go SDKs are experimental in 3.3.0 and may change in future
  versions based on user feedback.

For detailed usage instructions, see :doc:`/authoring-and-scheduling/language-sdks/index`.

###  Dag bundle version on clear, rerun, and backfill (#63884)


The new ``rerun_with_latest_version`` setting controls whether a cleared, rerun, or backfilled Dag run
uses the latest bundle version or the original version from the initial run. The default is resolved
by precedence: an explicit request parameter/CLI flag, then the Dag-level ``rerun_with_latest_version``,
then ``[core] rerun_with_latest_version``, and finally ``False`` for clear/rerun and ``True`` for
backfills (preserving historical behaviour). Airflow 2.x always reran with the latest code; 3.x
introduced bundle versioning defaulting to the original version, and this setting gives users control.

See :doc:`/administration-and-deployment/dag-bundles` for full details.

###  Provider example Dags as dedicated bundles (#66161)


Example Dags shipped by provider distributions are now discovered via ``ProvidersManager`` and
registered as their own Dag bundles — one per provider, named
``apache-airflow-providers-<distribution>-example-dags`` (or ``<distribution>-example-dags`` for
third-party providers). The ``[core] load_examples`` option still gates whether they are registered.
REST API clients that filtered ``bundle_name`` by ``"dags-folder"`` for provider-shipped example Dags
must update to the new per-provider bundle names; Dag identifiers are unchanged.

###  Remote logging resolution decoupled from ``airflow.logging_config`` (#67056)


Remote task log handler resolution is now owned by the shared ``airflow_shared.logging.factory``
module and applies a single, well-defined precedence:

1. a user-defined ``[logging] logging_config_class`` exporting ``REMOTE_TASK_LOG`` /
   ``DEFAULT_REMOTE_CONN_ID`` (existing custom configs keep working);
2. ``ProvidersManager`` scheme dispatch — the scheme of ``[logging] remote_base_log_folder`` selects a
   provider ``RemoteLogIO`` class, instantiated via a no-argument ``from_config()`` classmethod;
3. a transitional legacy fallback reading ``airflow_local_settings.py`` (to be removed in Airflow 4.0).

``airflow.logging_config.load_logging_config`` is deprecated (it now emits ``DeprecationWarning`` and
delegates to new private helpers), and ``configure_logging`` no longer eagerly resolves the remote
handler — resolution is lazy on first use. Providers that registered a ``remote-logging:`` block but do
not implement ``from_config`` are skipped with a warning and fall through to the legacy path.

Migration: replace direct calls to ``airflow.logging_config.load_logging_config()`` with the new
helpers, and have provider remote-log handler classes implement a no-argument ``from_config``
classmethod that reads ``airflow.providers.common.compat.sdk.conf``.

###  OpenTelemetry timer metrics now use Histogram (#64207)


OpenTelemetry timer and timing metrics are now recorded as Histograms instead of Gauges, preserving
count, sum, and bucket distribution across recordings.

###  Dag-processing "seconds ago" metric is now tagged (#62487)


``dag_processing.last_run.seconds_ago.{dag_file}`` is now a legacy metric. The new
``dag_processing.last_run.seconds_ago`` is emitted with ``file_path``, ``bundle_name`` and
``file_name`` tags (``file_path`` + ``bundle_name`` uniquely identify the Dag file). The legacy metric
is still emitted by default and can be disabled via ``[metrics] legacy_names_on``.

###  New Deadlines page under Browse (#67586)


A new **Deadlines** page is available under the Browse menu, accessible to any role that already has
``can_read`` and ``menu_access`` on **Dag Runs**.


## New Features

- Add partition clear support to the REST API matching the CLI, with a ``clearPartitions`` endpoint and ``partition_key``/``partition_date`` window selectors on ``clearDagRuns`` (#68702)
- Add ``[core] mp_start_method`` and ``[core] mp_forkserver_preload`` configuration options (which can be overridden per ``[scheduler]``/``[triggerer]``/``[dag_processor]``) to control the ``multiprocessing`` start method (#68875)
- Add a ``durable`` toggle to ``ResumableJobMixin`` to opt out of resumable execution (#68623)
- Add a ``@result`` decorator to mark a TaskFlow task as the Dag's result task (#64563)
- Add ``[triggerer] shared_stream_cohort_grace_period`` to reduce missed events on triggerer restart (#68888)
- Propagate ``partition_date`` from producer Dag runs to consumers of partitioned assets (#67285)
- Make the task and asset state store accessible from triggers via ``AssetStateStoreAccessors`` (#67839)
- Add OpenTelemetry head sampling support (#68591)
- Add async XCom ``accessors`` for async tasks (#68299)
- Add an async ``aget_hook`` method to ``BaseHook`` for async tasks (#68506)
- Allow custom partition ``Window`` subclasses via a plugin registry (#68717)
- Support an ``extra`` field for the Coordinator (#68694)
- Apply ``rerun_with_latest_version`` to ``TriggerDagRunOperator`` reruns (#67273)
- Scope the XCom Execution API to teams in multi-team mode (#68850)
- Enforce pool team ownership in the scheduling loop (#68649)
- UI: Add team name to the asset graph view (#68457)
- Populate ``partition_date`` for partitioned Dag runs whose composite asset key has a single time-based dimension (#68442)
- UI: Add a column to the asset store table linking to the task instance that wrote it (#68395)
- UI: Add a custom expiration datetime picker for the task store modal (#68394)
- UI: Add additional task instance attributes to the task instance details section (#68378)
- UI: Add a Details tab to the mapped task instance view (#68340)
- UI: Add bulk marking of Dag runs as success or failed from multi-select (#68278)
- Add ``--team-name`` support to the pool CLI commands (#68110)
- UI: Add a full-screen toggle to the code viewer (#68044)
- Add API endpoint support for consumer team asset filtering (#68034)
- UI: Add bulk clear selection for task instances (#68029)
- Add ``awaiting_input`` task state for Human-in-the-Loop, running off the triggerer (#68028)
- Add bulk API to mark Dag runs as success or failed (#67948)
- Record writer info for every asset store write for better cross-linkage (#67902)
- Register XCom ``output_type`` classes from a worker-side Dag walk (#67875)
- Add ``FixedKeyMapper`` and ``SegmentWindow`` for categorical asset-partition rollup (#67716)
- Add a bulk ``POST /dags/{dag_id}/clearDagRuns`` API endpoint (#67709)
- Return Pydantic model instances through XCom for structured output (#67644)
- Add the ability to apply a note when clearing a Dag run or task instances (#67639)
- Add ``consumer_teams`` to ``AssetAccessControl`` in the Task SDK (#67625)
- Populate trigger ``team_name`` at creation time for multi-team support (#67605)
- UI: Add bulk Clear on the Dag Runs list page (#67564)
- Add multi-team query filtering to triggerer trigger assignment (#67517)
- Add forward fan-out support via the ``forward`` kwarg on ``Window`` (AIP-76) (#67475)
- Add patch task state API and ``expires_at`` support in the set API (AIP-103) (#67319)
- Add a ``team_name`` column to the trigger table for multi-team triggerer support (#67305)
- UI: Add asset and task store views (#67292)
- Add a ``--team-name`` CLI argument to the triggerer for multi-team (#67254)
- Add an ``allow_global`` option to asset access control (#67251)
- Add mTLS and private CA support to the API client and server (#67214)
- Add Markdown documentation support for TaskGroups (#67207)
- Add a per-mapper ``max_fan_out`` override for partition fan-out cap (#67184)
- Add timezone support to the SDK temporal partition mappers (#67164)
- Add ``ResumableJobMixin`` with ``SparkSubmitOperator`` for surviving worker failures (#67118)
- Add bulk delete for Dag runs (#67095)
- Add a ``nav_top_level`` option for plugin nav items (#67084)
- Add Core API endpoints for task state and asset state (AIP-103) (#67041)
- Replace ``allow_producer_teams`` with ``access_control`` on ``Asset`` (#66954)
- Add worker-side custom state backend support (AIP-103) (#66859)
- Let partitioned Dag runs fire on a partial upstream window with ``wait_policy`` (#66848)
- Consume task-emitted partition keys on asset events (AIP-76) (#66782)
- Add per-task state key retention from operators (AIP-103) (#66699)
- Add a ``callback_execution_timeout`` config for deadline callbacks (#66609)
- Add a ``clear_on_success`` config to wipe task state on success (AIP-103) (#66586)
- Add a ``partitions clear`` CLI command to reset DagRun partition fields (#66520)
- Make CORS ``allow_credentials`` configurable (#66503)
- Add periodic task state garbage collection and retention support (AIP-103) (#66463)
- Add URI sanitizers and asset factories for new schemes (#66426)
- Add a ``teams sync`` CLI command (#66418)
- Add remote log upload support for callback subprocesses (#66379)
- Add by-name/by-uri asset state routes and ``AssetUriRef`` support (AIP-103) (#66336)
- UI: Add support for rendering multi-type params (#66278)
- Filter Dags by teams when registering asset changes (#66168)
- Wire up Task SDK communication and context access for task/asset state (AIP-103) (#66160)
- UI: Add marking a task group as success or failed (#66146)
- Add Execution API endpoints for task and asset states (AIP-103) (#66073)
- Add ``FanOutMapper`` for one-to-many partition fan-out (#66030)
- Add ``Variable.keys()`` to list variable keys by prefix in the Task SDK (#66022)
- Add an ``airflow dags clear`` command for partition-range reprocessing (#66004)
- Add a ``memray_detailed_tracing`` option for deeper memory profiling (#65996)
- UI: Add support for different graph directions in the asset graph view (#65948)
- UI: Add a Clear All Mapped Tasks button (#65813)
- Add ``allow_producer_teams`` to the Asset SDK class (#65790)
- UI: Show expected duration based on historical average in Dag Run details (#65722)
- Add team name to the task context (#65617)
- Add an ``on_kill()`` hook to ``BaseTrigger`` to handle user actions on triggers (#65590)
- Allow accessing a Dag's members via ``[]`` (#65586)
- Add pluggable retry policies for Airflow tasks (AIP-105) (#65474)
- Add support for ``format="Duration"`` in params (#65469)
- UI: Add pagination to the grid view (#65388)
- Add ``partition_key`` to the task context (#65359)
- Make the blocked-thread warning threshold configurable (#65009)
- Add name fields to SDK deadline alerts (#64926)
- Add dynamic interval resolution support via Variables for deadline alerts (#64751)
- Add an ``is_backfillable`` property to Dag API responses (#64644)
- Return dag-specified results in the dag run wait API (#64577)
- Hold a Dag run until all upstream partitions arrive (AIP-76) (#64571)
- Add a way to mark a return-value XCom as the dag result (#64522)
- Allow accessing a TaskGroup's members via ``[]`` (#64430)
- UI: Redo the Gantt chart (#64335)
- UI: Add task-level filters to the Dag graph tab (#64271)
- UI: Add bulk Clear, Mark Success/Fail, and delete for multiple task instances (#64141)
- Check that multi-team is enabled when a team name is provided to the API (#63994)
- Add a ``DagRunType`` for operators (#63733)
- UI: Add search functionality to the task log viewer (#63467)
- Add patching of task group instances in the API (#62812)
- Add deadlines API endpoints (#62583)
- Add async connection testing via workers for security isolation (#62343)
- Add ``run_after`` to ``TriggerDagRunOperator`` (#62259)
- UI: Display deadlines on the Dag Run and Overview tabs (#62195)
- Re-enable the ``start_from_trigger`` feature with template-field rendering (#55068)
- Backfill partitioned Dags by partition-date range (#67537)
- Add a producer-side acknowledgement channel to shared-stream triggers (#67523)
- UI: Add ``partition_date`` to the Dag run detail page (#68977)
- Expose the upstream ``partition_key`` on ``triggering_asset_events`` and ``dag_run.consumed_asset_events`` (AIP-76) (#69120)
- Allow ``get``/``set``/``delete``/``clear`` of ``AssetStateStoreAccessor`` to run on the triggerer (#68966)

## Bug Fixes

- Fix ``KubernetesExecutor`` scheduler crash caused by a ``pod_override`` that cannot be pickled when running in-cluster (#68831)
- UI: Fix dashboard alert clamping and collapse controls (#68893)
- Stabilize mapped-task XCom result ordering in the Dag run ``wait`` endpoint by ordering on ``task_id``/``map_index`` (#68550)
- Only log task state cleanup when a worker state store backend is configured (#68878)
- Fix in-process Execution API loop stopped while transport still in use (#68865)
- Fix task state store custom expiry datetime missing timezone on save (#68823)
- Do not leak threads from ``InProcessExecutionAPI`` (#68840)
- Fix partitioned backfill widening a sub-day window to the whole day (#68718)
- UI: Fix inconsistent padding between Dag Runs and Task Instances list views (#68689)
- Skip asset-change registration for tasks with no outlets (#68687)
- Percent-encode API client path params for keys with slashes (#68667)
- Fix bulk create+overwrite silently resetting unset fields on pools and connections (#68645)
- Fix triggerer crash when a trigger subclass does not call ``super().__init__()`` (#68636)
- Fix Task SDK swallowing errors when ``Variable.set()`` or ``Variable.delete()`` fails (#68542)
- Populate ``partition_date`` when manually triggering partitioned Dags (#68458)
- Improve warning visibility for invalid JSON when editing variables (#68268)
- Fix the triggerer log server port configuration key (#67785)
- Enforce ``ti:self`` scope on ``/execution/task-reschedules/{ti}/start_date`` (#67628)
- UI: Fix misleading Calendar "Total Runs" coloring behavior (#67595)
- Fix Stats not being initialized in the API server lifespan (#68514)
- Fix ``BackfillDagRun.partition_key`` type annotation (#68432)
- Fix backward compatibility for ``DagRunInfo`` partition fields (#68342)
- Fix ``airflow db clean`` failing on foreign-key-referenced ``dag_version`` rows (#68339)
- Fix 500 error when listing event logs with a NULL timestamp (#68338)
- Fix MySQL downgrade from 3.3.0 for the ``deadline_alert.interval`` JSON conversion (#68337)
- Fix older and custom secrets backends breaking on Airflow 3.2 (#68302)
- Fix secrets backend connection errors being silently swallowed at DEBUG level (#68301)
- UI: Fix the instance name title shown on non-Dag pages (#68288)
- Fix scheduler not populating ``partition_date`` for temporal asset partitions (#68266)
- UI: Fix wrong language being auto-detected from browser preferences (#68258)
- Honor ``retry_policy`` on non-deferrable ``TriggerDagRunOperator`` wait failures (#68254)
- Fix scheduler crash loop when the last task instance predates Dag versioning (#68253)
- Fix team consumer asset filtering (#68242)
- UI: Fix sluggish multi-selection behavior in tables (#68229)
- UI: Fix mapped task instance links for tasks without a start date (#68194)
- Fix setup/teardown auto-inclusion when clearing or marking tasks (#68193)
- UI: Remove redundant columns from the XCom panel on the task instance page (#68188)
- UI: Fix Gantt tooltip showing the wrong start date on queued/scheduled segments (#68176)
- Fix Java SDK coordinator rejecting IPv4-mapped IPv6 connections (#68169)
- Fix Java SDK tasks being rejected by the coordinator connection-ownership check (#68147)
- UI: Fix language key for the Dag bundle filter (#68131)
- Fix ``DagFileProcessorManager`` silent hang on database lock contention (#68118)
- Mask all connection extra and variable values in the API audit log (#68049)
- Fix spurious "Failed to detach context" error on Execution API disconnects (#68039)
- UI: Fix Dag code highlighting for triple-quoted and escaped-brace f-strings (#68026)
- Fix cursor encoding for column-form sort parameters in the REST API (#67973)
- Fix ``SimpleAuthManager`` not preserving the deep-link next URL on first login (#67965)
- Guard the task stats emission to prevent errors (#67955)
- UI: Fix task instance state badge staying stale after a Mark-as action (#67950)
- Register nested Pydantic models for XCom deserialization (#67932)
- Fix ``example_asset_store`` consumer crash (#67922)
- Raise ``InvalidJwtError`` in ``JWTValidator.avalidated_claims()`` when the key ID does not match (#67909)
- Fix Kubernetes executor ``pod_override`` being stringified without the cncf provider (#67895)
- UI: Prevent duplicate task instance summary stream refreshes after mutations (#67892)
- Reject negative ``default_retention_days`` in the Task SDK and core API routes (#67890)
- Fix ``none_failed_min_one_success`` trigger rule checks (#67873)
- Remove trigger kwargs from the REST API response (#67868)
- UI: Fix long parameter names overflowing the Trigger Dag modal (#67859)
- Fix misleading log message in the task runner clear-on-success block (#67836)
- Fix scheduler crash when logging orphaned task resets (#67822)
- UI: Fix dashboard pool summary showing incorrect deferred slot usage (#67818)
- Fix trigger datetime deserialization (#67795)
- UI: Fix Graph layout for TaskGroup tasks wired to external nodes (#67720)
- Fix ``airflow dags clear`` clearing the wrong day for non-UTC partitioned timetables (#67717)
- Fix per-index evaluation of ``ONE_FAILED`` in mapped task groups (#67684)
- UI: Fix dialog dismissal for the Chakra upgrade (#67674)
- UI: Hide dashboard metric percentages when a state count is capped (#67664)
- Apply per-file authorization to the dag-source endpoint (#67662)
- Fix ``airflow dags next-execution --table`` crash when no next run exists (#67642)
- UI: Fix the time picker omitting seconds (#67636)
- Filter scheduling-dependencies graph edges by readable-Dag access (#67627)
- Mask per-key secrets-backend-kwarg overrides on the Config API (#67622)
- Fix ``GET /auth/login`` missing a 400 response in the OpenAPI spec (#67571)
- Fix ``GET /pools`` incorrectly documenting a 404 response in the OpenAPI spec (#67570)
- Add a compatibility layer for import errors caused by ``AirflowSecretsBackendAccessDenied`` (#67560)
- UI: Fix rendering of None child state (#67552)
- Fix sort order for mapped task instances (#67551)
- Fix import errors total-entries count with multiple Dags per file (#67550)
- UI: Prefer active over queued state for collapsed groups (#67543)
- Fix callback state not updating from executor events due to a UUID type mismatch (#67542)
- Reject wildcard origin in CORS config instead of toggling credentials (#67502)
- Guard the finally-block logger in the HTTP access log middleware (#67501)
- Strip CR/LF from user-supplied logical date before logging (#67500)
- Redact secret-looking query parameters in the HTTP access log (#67498)
- UI: Fix Calendar view to respect the user-selected timezone (#67497)
- Escape LIKE wildcards in non-search filter parameters (#67496)
- Fix missing redaction of secret values in variable JSON (#67495)
- Fix bulk CREATE+OVERWRITE team-context authorization bypass (#67493)
- UI: Return 400 instead of 500 from ``structure_data`` on a malformed asset expression (#67489)
- Fix ``SimpleAuthManager`` redirect to the next URL after login (#67483)
- Return 400 instead of 500 from ``materialize_asset`` on invalid input (#67445)
- UI: Restore the Monaco find widget in the Dag Code view (#67391)
- UI: Fix an HTTPException import that turned a 400 into a 500 in the dags endpoint (#67363)
- Restore ``fail_fast`` handling when reschedule exceeds the MySQL ``TIMESTAMP`` limit (#67353)
- Fix the Triggered Dag button not being visible during queued/running state (#67327)
- Fix variables import with structured falsy values (#67060)
- Avoid logging Execution API bearer credentials (#67059)
- Sanitize Dag processor metric file names (#67029)
- Return a 422 when the database rejects an API payload (#66888)
- Prevent ``AlreadyRunningBackfill`` error caused by an invalid date range request (#66874)
- Restrict owner-link and extra-link ``href`` values to safe schemes (http, https, mailto, relative) (#66741)
- Add a session parameter to the ``BaseStateBackend`` interface to fix custom backends (#66708)
- Allow deadline callbacks within the same Dag module (#66702)
- UI: Fix relative React plugin bundle URLs in dev mode (#66618)
- Validate Dag trigger conf as a JSON object or null (#66617)
- Require a trust sentinel for ``state.user`` injection in ``get_user()`` (#66562)
- Use ``hmac.compare_digest`` for ``SimpleAuthManager`` password comparison (CWE-208) (#66556)
- Set ``SameSite=Lax`` on the ``SimpleAuthManager`` all-admins login cookie (#66502)
- Reserve ``/auth`` and ``/pluginsv2`` from plugin URL prefixes (#66501)
- Use a cryptographically secure RNG for ``SimpleAuthManager`` passwords (#66500)
- Fix Triggerer ``runner_health_check_threshold`` log formatting (#66486)
- Fix Dag processor callback cleanup for versioned bundle files (#66484)
- Default ``AIRFLOW_UID`` to 50000 in the airflow-init chown lines (#66481)
- Strip CR/LF from MySQL URL query values before forwarding to ``my.cnf`` (#66325)
- Fix ``CronMixin`` not resolving cron presets before validation (#66102)
- Fix ``AirflowSDKConfigParser`` missing the ``mask_secrets`` method (#66077)
- Fix ``resolve_xcom_backend`` to rely on the config schema default (#65938)
- Fix a missing import cast error in the dag_run API route (#65748)
- Mask Dag processor connection and variable responses (#65704)
- UI: Show import error for deactivated Dags (#65687)
- Forward MySQL SSL params from ``sql_alchemy_conn`` to ``airflow db shell`` (#65575)
- Disable SQLite FK checks in the 0111 migration downgrade (#65545)
- Handle Variable values that cannot be decrypted gracefully in the stable REST API (#65452)
- Retry ``TriggerDagRunOperator`` when the triggered DagRun fails (#65390)
- Fix task run exceptions never being caught by Sentry (#65161)
- Fix the bulk task instance authorization error message rendering (#64719)
- Fix trigger template rendering failure when operator ``template_fields`` differ from trigger attributes (#64715)
- Fix ``task_defer`` with non-JSON ``next_kwargs`` in ``TaskInstance`` (#64714)
- Add the error as ``context["exception"]`` in ``InProcessTestSupervisor`` (#64568)
- Fix NPM security alerts in the simple auth manager (#64309)
- Fix Dag run trigger to surface errors instead of swallowing them (#64130)
- Fix Task SDK Connection extras built from a URI constructor (#64120)
- Add insert/update-on-conflict for rendered task instance fields (#63874)
- Fix ``timeout_with_traceback`` crashes on Windows and non-main threads (#63664)
- UI: Wrap long lines in the rendered templates view (#63492)
- Block path traversal via ".." in ``dag_id`` and ``run_id`` (#63296)
- Fix the scheduler health check command in ``docker-compose.yaml`` (#62280)
- Fix unmapped task deadlock when upstream tasks are removed (#62034)
- Forward termination signals from the supervisor to the task subprocess (#61627)
- Check destination team permission when using bulk APIs for connections, variables, and pools (#68573)
- Fix the execution API ``/health`` check failing on the empty-path route (#68578)
- Fix Dag run partition key filter breaking on composite keys containing ``|`` (#68459)
- Fix the partition clear date range for non-UTC partitioned timetables (#68460)
- Validate that partition keys are non-empty and within the column length (#68443)
- Fix the scheduler serving stale Dag code after an in-place serialized Dag version update (#68558)
- Determine the latest Dag version by version number to avoid collisions when timestamps tie (#68389)
- Fix new runs and reruns executing an outdated bundle version when the Dag serialization is unchanged (#68336)
- Fix remote logging from the task supervisor (#68370)
- Upload task logs even when the final state update fails (#67935)
- Escape URLs in the Task SDK client when looking up Dag operations (#68129)
- Fix task scheduling when multi-team is enabled (#68634)
- Fix secret values not being masked in rendered templates when keys use dot or dash separators (#68624)
- Fix ``jwt_audience`` for the public API being read from two different config sections (#67494)
- Fix duplicate deadline-miss callbacks firing from multiple HA scheduler replicas (#64737)
- Fix scheduler crash on non-ASCII Dag names when OpenTelemetry metrics are enabled (#68023)
- Fix Dag processor crash on non-ASCII names in OpenTelemetry gauge and timer metrics (#68284)
- Report duplicate plugin names as import errors instead of silently ignoring them (#66649)
- Require edit permission for async connection tests that update an existing connection (#68127)
- Restore the deprecated ``[core] execution_api_server_url`` mapping to ``[workers] execution_api_server_url`` (#63949)
- Fix ``dag.test()`` not re-syncing sibling Dags across repeated calls (#66205)
- UI: Invalidate per-attempt task instance caches after actions so logs and details are not stale (#67212)
- Fix task runner failure on a duplicate task instance success-state update (#63355)
- Fix a race condition on the ``order_by`` parameter when listing Dag runs via the REST API (#68948)
- Exclude non-successful Dag runs from the ``DeadlineReference.AVERAGE_RUNTIME`` deadline calculation so failed runs no longer skew the computed deadline (#68949)
- Allow ``InProcessExecutionAPI`` to start without ``api_auth.jwt_secret`` configured (#68982)
- Make ``airflow dags test`` wait for Human-in-the-loop input instead of looping indefinitely on parked HITL tasks (#69104)
- Fix the Java coordinator rejecting macOS dual-stack loopback connections (#68973)
- Fix an asset-event ingestion crash for Dags using ``FixedKeyMapper`` (#69326)
- UI: Fix the details panel header overlapping the tabs (#69318)
- Fix new Dag versions being created when a task's ``retry_policy`` was serialized (#69315)
- Fix retry-policy overrides not being persisted to task-instance history (#69241)
- Fix deadline callback data not being persisted (#69259)

## Miscellaneous

- Propagate the resolved task log level and ``[logging] namespace_levels`` to language SDK runtimes (#68712)
- Forward run-identity attributes (``dag_id``, ``run_id``, ``run_type``) to the trace sampler so a custom head sampler can differentiate by run kind (#68592)
- Remove ``all_map_indices`` from ``task_state_store.clear()`` in the task context (#68880)
- Optimize the dag processor by caching bundle-to-team name lookups (#68730)
- Rename the misleading ``last_automated_run`` param to ``reference_run`` (#68714)
- Add a ``team_name`` tag to the remaining multi-team metrics (#68601)
- Add a ``team_name`` tag to dag processor metrics for multi-team deployments (#68599)
- Add a ``team_name`` tag to asset metrics for multi-team deployments (#68367)
- UI: Persist dashboard alert collapse state and clamp long alerts (#68329)
- Optimize bulk variable deletion to avoid N+1 queries (#68508)
- UI: Unify the Dag Code tab toolbar styling with the Logs toolbar (#68449)
- Optimize bulk Dag run authorization to avoid N+1 team-name queries (#68286)
- Improve ``airflow dags`` command to use bulk clear (#68280)
- Add the ``task_state_store`` table to the ``airflow db clean`` mechanism (#68218)
- Add metrics and traces to ``ResumableJobMixin`` for crash recovery (#68213)
- Improve ``ResumableJobMixin`` crash-recovery observability with better logging (#68206)
- Pass ``DagRun`` to ``task_instance_mutation_hook`` for run-aware task mutation (#68198)
- Add ``team_name`` to multi-team metrics (#68108)
- Reduce redundant Dag team lookups in authorization checks (#68020)
- Enhance ``ResumableJobMixin.get_job_status`` with context for better job status tracking (#68009)
- Propagate OpenTelemetry trace headers from the client to Execution API server-side spans (#67904)
- Widen the type hint for the ``DagRun.get_task_instances`` / ``fetch_task_instances`` state parameter (#67880)
- UI: Use the bulk clear Dag runs endpoint for bulk Dag run clear (#67846)
- Add a ``default`` parameter to the task and asset state ``get()`` method (#67842)
- Make core API routes for task and asset states interact only with the database (#67835)
- Optimize Dag processor file-queue deduplication from O(N^2) to O(N) (#67750)
- Add ``allow_consumer_teams`` and ``allow_global_consumers`` columns to ``TaskOutletAssetReference`` (#67730)
- Speed up the Dags list and dashboard queries on large ``DagRun`` tables (#67721)
- Make ``partition_key`` provenance-only and inherit it onto asset events (#67718)
- Speed up Dag serialization by skipping a redundant asset roundtrip (#67702)
- Cache ``BaseOperator.__init__`` signature in operator serialization (#67701)
- Optimize ``TaskGroup.topological_sort`` for reverse-declared Dags (#67688)
- Update serialization for producer-side asset access control (#67658)
- Allow outlets to be added and accessed in ``AssetStateAccessor`` (#67619)
- Unify task/asset state storage between the Core API and Execution API (#67547)
- Decorate custom state references with an envelope for UI clarity (#67530)
- Simplify authoring of task and asset states by allowing JSON types (#67418)
- Replace Sphinx Redoc with Swagger for the API docs (#67390)
- Emit OpenTelemetry spans around listener hook calls (#67347)
- UI: Update verbiage for lower-priority backfill runs (#67338)
- Fix N+1 query in the bulk task instance delete endpoint (#67304)
- Speed up ``TaskGroup.topological_sort`` with an int-indexed projected sweep (#67288)
- UI: Use react-query native error state for bulk action hooks (#67284)
- Wrap ``executor.heartbeat()`` in a timer to localize scheduler loop slowdowns (#66808)
- Emit ``dagrun.first_task_start_delay`` separately from scheduling delay (#66807)
- Share one poll loop across sibling event triggers (#66584)
- UI: Upgrade icons, spacing, and default component themes (#66569)
- Warn when ``SimpleAuthManager`` runs in a production-shaped deployment (#66563)
- Migrate Stackdriver logging config to the ``RemoteLogIO`` pattern (#66513)
- Add a ``BundleVersion`` dataclass and ``version_data`` persistence to ``DagVersion`` (#66491)
- Avoid lazy-loading timetable fields for latest DagRuns (#66488)
- Move ``allow_producer_teams`` to ``DagScheduleAssetReference`` (#66487)
- Pass user teams to the ``create_asset_event`` endpoint (#66367)
- Load ``USFederalHolidayCalendar`` lazily to reduce memory usage when loading examples (#66303)
- Propagate task OpenTelemetry trace context through IPC into Execution API requests (#66151)
- Surface worker Dag parse duration in the task log (#66138)
- Skip deserializing ``trigger_kwargs`` when loading serialized Dags (#66002)
- Honor ``AUTH_ROLE_PUBLIC`` in the FastAPI API server (#65685)
- Add extended sysinfo for the Edge worker (#65472)
- Clarify logs when a Dag is being processed in the Dag processor (#65196)
- Add indexes on ``task_instance.dag_version_id`` and ``dag_run.created_dag_version_id`` (#64818)
- Improve creation of ``RuntimeTaskInstance`` in ``TriggerRunner`` for ``start_for_trigger`` functionality (#64298)
- Mark the Triggerer supervisor as a server context so it can read metastore connections (#64022)
- Load hook metadata from YAML without importing the hook class (#63826)
- Add detailed task spans (#63568)
- Downgrade logging on query JSON parsing and add a JSON load condition (#62044)
- UI: Add a Deadlines section with a time-range selector to the Dashboard page (#68038)
- UI: Add a modal for editing notes with Markdown support (#68362)
- UI: Improve the Human-In-The-Loop form UX (#68397)
- Add a ``team_name`` tag to executor metrics for multi-team deployments (#68593)
- Make task and asset state store row size limits configurable (#68133)
- UI: Add notification UX for Human-In-The-Loop actions (#68346)
- Allow synchronous deadline callbacks (``SyncCallback``) to access Connections and Variables (#65269)
- Add a ``team_name`` tag to deadline metrics for multi-team deployments (#68589)
- Add a ``team_name`` tag to scheduler metrics for multi-team deployments (#68594)
- Defer the Cadwyn import so FastAPI/Starlette stay off the Task SDK worker path, reducing per-worker memory (#69029)

## Doc Only Changes

- Complete the Taiwanese Mandarin (``zh-TW``) translation (#68870)
- Add missing Korean (``ko``) translations (#68600)
- Close German (``de``) translation gaps (#68356)
- Add a segment fan-out example to the asset partition example Dag (#68722)
- Fix runtime-partition example Dags using unreachable schedules (#68719)
- Add an example Dag for the task state store with mapped tasks (#68670)
- Fix the gap in the Taiwanese Mandarin (``zh-TW``) translation (#68668)
- Add wait-policy examples to the asset partition example Dag (#68658)
- Add a contributing guide for language SDKs (#68330)
- Add ``sdk.TIRunContext`` documentation for the Go SDK (#68319)
- Add a Go Task SDK authoring guide to the docs (#68223)
- Update supported-versions doc to mark 2.11.2 as EOL (#68212)
- Add documentation for ``ResumableJobMixin`` and resumable tasks (#68136)
- Add CLI examples for team-scoped pools (#68111)
- Add docs for multi-team triggerer support (#67608)
- Clarify trigger rule behavior for the ``removed`` upstream state (#67452)
- Fix outdated image links in ``dags.rst`` (#67357)
- Add an example and docs for runtime asset partitioning (AIP-76) (#67307)
- Add documentation for the Task and Asset Store (AIP-103) (#67299)
- Add a dynamic task mapping no-op example (#67022)
- Add documentation about adding ``access_control`` to the ``Asset`` object (#66949)
- Add a how-to for Dag-level retry via ``on_failure_callback`` (#66277)
- Fix documentation after PR 62645 (#65843)
- Add documentation for team-based asset event filtering (#65690)
- Document ``on_kill()``/``cleanup()`` for triggers (#65671)
- Explain ``xcom_pull`` behaviour without ``task_ids`` in the docs (#65406)
- Improve standalone authentication documentation for Airflow 3.x (#65330)
- Clarify manual Dag run data interval semantics in Airflow 3 (#64740)
- Document and test ``xcom_pull`` ``run_id`` usage for triggered Dag runs (#63030)
- Update params in the backfill documentation (#61821)
- Document the ``apache-airflow-mypy`` package in the core docs (#68561)
- Fix typos and formatting in the Fundamentals documentation (#68524)
- Complete the Hindi (``hi``) UI translation (#68574)
- Fill the Taiwanese Mandarin (``zh-TW``) UI translation gap (#68563)
- Document that Dag bundle ``kwargs`` should reference a Connection rather than inline credentials (#69105)
- Add example plugins and expand the asset-partitions documentation (#69017)
- Java SDK docs: ``JUL`` setup, pinning ``java_executable``, and a config-reload note (#69020)
- Correct the example config for the coordinators (#68940)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.3.0` · 2026-07-06 · [upstream release](https://github.com/apache/airflow/releases/tag/3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
