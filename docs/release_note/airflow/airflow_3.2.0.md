---
title: "airflow 3.2.0"
project: "airflow"
repo: "apache/airflow"
tag: "3.2.0"
published: "2026-04-07"
type: "minor"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.2.0/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.0/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.0/releasenotes.html 🐳 Docker…"
---

# airflow 3.2.0

📦 PyPI: https://pypi.org/project/apache-airflow/3.2.0/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.0/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.0/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.2.0"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.2.0

## Significant Changes


### Asset Partitioning

The headline feature of Airflow 3.2.0 is asset partitioning — a major evolution of data-aware
scheduling. Instead of triggering Dags based on an entire asset, you can now schedule downstream
processing based on specific partitions of data. Only the relevant slice of data triggers downstream
work, making pipeline orchestration far more efficient and precise.

This matters when working with partitioned data lakes — date-partitioned S3 paths, Hive table
partitions, BigQuery table partitions, or any other partitioned data store. Previously, any update
to an asset triggered all downstream Dags regardless of which partition changed. Now only the right
work gets triggered at the right time.

For detailed usage instructions, see :doc:`/authoring-and-scheduling/assets`.

### Multi-Team Deployments

Airflow 3.2 introduces multi-team support, allowing organizations to run multiple isolated teams within a single Airflow deployment.
Each team can have its own Dags, connections, variables, pools, and executors— enabling true resource and permission isolation without requiring separate Airflow instances per team.

This is particularly valuable for platform teams that serve multiple data engineering or data science teams from shared infrastructure, while maintaining strong boundaries between teams' resources and access.

For detailed usage instructions, see :doc:`/core-concepts/multi-team`.

.. warning::

  Multi-Team Deployments are experimental in 3.2.0 and may change in future versions based on
  user feedback.

### Synchronous callback support for Deadline Alerts

Deadline Alerts now support synchronous callbacks via ``SyncCallback`` in addition to the existing
asynchronous ``AsyncCallback``. Synchronous callbacks are executed by the executor (rather than
the triggerer), and can optionally target a specific executor via the ``executor`` parameter.

A Dag can also define multiple Deadline Alerts by passing a list to the ``deadline`` parameter,
and each alert can use either callback type.

.. warning::

  Deadline Alerts are experimental in 3.2.0 and may change in future versions based on
  user feedback. Synchronous deadline callbacks (``SyncCallback``) do not currently
  support Connections stored in the Airflow metadata database.

For detailed usage instructions, see :doc:`/howto/deadline-alerts`.


### UI Enhancements & Performance

- **Grid View Virtualization**:
  The Grid view now uses virtualization -- only visible rows are rendered to the DOM. This dramatically improves performance when viewing Dags with large numbers of task runs, reducing render time and memory usage for complex Dags. (#60241)

- **XCom Management in the UI**:
  You can now add, edit, and delete XCom values directly from the Airflow UI. This makes it much easier to debug and manage XCom state during development and day-to-day operations without needing CLI commands. (#58921)

- **HITL Detail History**:
  The Human-in-the-Loop approval interface now includes a full history view, letting operators and reviewers see the complete audit trail of approvals and rejections for any task. (#56760, #55952)

- **Gantt Chart Improvements**:

  - All task tries displayed: Gantt chart now shows every attempt, not just the latest
  - Task display names in Gantt: task_display_name shown for better readability (#61438)
  - ISO dates in Gantt: Cross-browser consistent date format (#61250)
  - Fixed null datetime crash: Gantt chart no longer crashes on tasks with null datetime fields

### New ``--only-idle`` flag for the scheduler CLI

The ``airflow scheduler`` command has a new ``--only-idle`` flag that only counts runs when the
scheduler is idle. This helps users run the scheduler once and process all triggered Dags and
queued tasks. It requires and complements the ``--num-runs`` flag so one can set a small value
instead of guessing how many iterations the scheduler needs.

### Replace per-run TI summary requests with a single NDJSON stream

The grid, graph, gantt, and task-detail views now fetch task-instance
summaries through a single streaming HTTP request
(``GET /ui/grid/ti_summaries/{dag_id}?run_ids=...``) instead of one request
per run.  The server emits one JSON line per run as soon as that run's task
instances are ready, so columns appear progressively rather than all at once.

**What changed:**

- ``GET /ui/grid/ti_summaries/{dag_id}?run_ids=...`` is now the sole endpoint
  for TI summaries, returning an ``application/x-ndjson`` stream where each
  line is a serialized ``GridTISummaries`` object for one run.
- The old single-run endpoint ``GET /ui/grid/ti_summaries/{dag_id}/{run_id}``
  has been removed.
- The serialized Dag structure is loaded once and shared across all runs that
  share the same ``dag_version_id``, avoiding redundant deserialization.
- All UI views (grid, graph, gantt, task instance, mapped task instance, group
  task instance) use the stream endpoint, passing one or more ``run_ids``.

### Structured JSON logging for all API server output

The new ``json_logs`` option under the ``[logging]`` section makes Airflow
produce all its output as newline-delimited JSON (structured logs) instead of
human-readable formatted logs. This covers the API server (gunicorn/uvicorn),
including access logs, warnings, and unhandled exceptions.

Not all components support this yet — notably ``airflow celery worker`` but
any non-JSON output when ``json_logs`` is enabled will be treated as a bug. (#63365)

### Remove legacy OTel Trace metaclass and shared tracer wrappers

The interfaces and functions located in ``airflow.traces`` were
internal code that provided a standard way to manage spans in
internal Airflow code. They were not intended as user-facing code
and were never documented. They are no longer needed so we
remove them in 3.2. (#63452)

### Move task-level exception imports into the Task SDK

Airflow now sources task-facing exceptions (``AirflowSkipException``, ``TaskDeferred``, etc.) from
``airflow.sdk.exceptions``. ``airflow.exceptions`` still exposes the same exceptions, but they are
proxies that emit ``DeprecatedImportWarning`` so Dag authors can migrate before the shim is removed.

**What changed:**

- Runtime code now consistently raises the SDK versions of task-level exceptions.
- The Task SDK redefines these classes so workers no longer depend on ``airflow-core`` at runtime.
- ``airflow.providers.common.compat.sdk`` centralizes compatibility imports for providers.

**Behaviour changes:**

- Sensors and other helpers that validate user input now raise ``ValueError`` (instead of
  ``AirflowException``) when ``poke_interval``/ ``timeout`` arguments are invalid.
- Importing deprecated exception names from ``airflow.exceptions`` logs a warning directing users to
  the SDK import path.

**Exceptions now provided by ``airflow.sdk.exceptions``:**

- ``AirflowException`` and ``AirflowNotFoundException``
- ``AirflowRescheduleException`` and ``AirflowSensorTimeout``
- ``AirflowSkipException``, ``AirflowFailException``, ``AirflowTaskTimeout``, ``AirflowTaskTerminated``
- ``TaskDeferred``, ``TaskDeferralTimeout``, ``TaskDeferralError``
- ``DagRunTriggerException`` and ``DownstreamTasksSkipped``
- ``AirflowDagCycleException`` and ``AirflowInactiveAssetInInletOrOutletException``
- ``ParamValidationError``, ``DuplicateTaskIdFound``, ``TaskAlreadyInTaskGroup``, ``TaskNotFound``, ``XComNotFound``
- ``AirflowOptionalProviderFeatureException``

**Backward compatibility:**

- Existing Dags/operators that still import from ``airflow.exceptions`` continue to work, though
  they log warnings.
- Providers can rely on ``airflow.providers.common.compat.sdk`` to keep one import path that works
  across supported Airflow versions.

**Migration:**

- Update custom operators, sensors, and extensions to import exception classes from
  ``airflow.sdk.exceptions`` (or from the provider compat shim).
- Adjust custom validation code to expect ``ValueError`` for invalid sensor arguments if it
  previously caught ``AirflowException``.

### Support numeric multiplier values for retry_exponential_backoff parameter

The ``retry_exponential_backoff`` parameter now accepts numeric values to specify custom exponential backoff multipliers for task retries. Previously, this parameter only accepted boolean values (``True`` or ``False``), with ``True`` using a hardcoded multiplier of ``2.0``.

**New behavior:**

- Numeric values (e.g., ``2.0``, ``3.5``) directly specify the exponential backoff multiplier
- ``retry_exponential_backoff=2.0`` doubles the delay between each retry attempt
- ``retry_exponential_backoff=0`` or ``False`` disables exponential backoff (uses fixed ``retry_delay``)

**Backwards compatibility:**

Existing Dags using boolean values continue to work:

- ``retry_exponential_backoff=True`` → converted to ``2.0`` (maintains original behavior)
- ``retry_exponential_backoff=False`` → converted to ``0.0`` (no exponential backoff)

**API changes:**

The REST API schema for ``retry_exponential_backoff`` has changed from ``type: boolean`` to ``type: number``. API clients must use numeric values (boolean values will be rejected).

**Migration:**

While boolean values in Python Dags are automatically converted for backwards compatibility, we recommend updating to explicit numeric values for clarity:

- Change ``retry_exponential_backoff=True`` → ``retry_exponential_backoff=2.0``
- Change ``retry_exponential_backoff=False`` → ``retry_exponential_backoff=0``

### Move serialization/deserialization (serde) logic into Task SDK

Airflow now sources serde logic from ``airflow.sdk.serde`` instead of
``airflow.serialization.serde``. Serializer modules have moved from ``airflow.serialization.serializers.*``
to ``airflow.sdk.serde.serializers.*``. The old import paths still work but emit ``DeprecatedImportWarning``
to guide migration. The backward compatibility layer will be removed in Airflow 4.

**What changed:**

- Serialization/deserialization code moved from ``airflow-core`` to ``task-sdk`` package
- Serializer modules moved from ``airflow.serialization.serializers.*`` to ``airflow.sdk.serde.serializers.*``
- New serializers should be added to ``airflow.sdk.serde.serializers.*`` namespace

**Code interface changes:**

- Import serializers from ``airflow.sdk.serde.serializers.*`` instead of ``airflow.serialization.serializers.*``
- Import serialization functions from ``airflow.sdk.serde`` instead of ``airflow.serialization.serde``

**Backward compatibility:**

- Existing serializers importing from ``airflow.serialization.serializers.*`` continue to work with deprecation warnings
- All existing serializers (builtin, datetime, pandas, numpy, etc.) are available at the new location

**Migration:**

- **For existing custom serializers**: Update imports to use ``airflow.sdk.serde.serializers.*``
- **For new serializers**: Add them to ``airflow.sdk.serde.serializers.*`` namespace (e.g., create ``task-sdk/src/airflow/sdk/serde/serializers/your_serializer.py``)

### Methods removed from PriorityWeightStrategy

On (experimental) class ``PriorityWeightStrategy``, functions ``serialize()``
and ``deserialize()`` were never used anywhere, and have been removed. They
should not be relied on in user code. (#59780)

### Methods removed from TaskInstance

On class ``TaskInstance``, functions ``run()``, ``render_templates()``,
``get_template_context()``, and private members related to them have been
removed. The class has been considered internal since 3.0, and should not be
relied on in user code. (#59780, #59835)

### Modify the information returned by ``DagBag``

**New behavior:**

- ``DagBag`` now uses ``Path.relative_to`` for consistent cross-platform behavior.
- ``FileLoadStat`` now has two additional nullable fields: ``bundle_path`` and ``bundle_name``.

**Backward compatibility:**

``FileLoadStat`` will no longer produce paths beginning with ``/`` with the meaning of "relative to the dags folder".
This is a breaking change for any custom code that performs string-based path manipulations relying on this behavior.
Users are advised to update such code to use ``pathlib.Path``. (#59785)

### Remove ``--conn-id`` option from ``airflow connections list``

The redundant ``--conn-id`` option has been removed from the ``airflow connections list`` CLI command.
Use ``airflow connections get`` instead. (#59855)

### Add operator-level ``render_template_as_native_obj`` override

Operators can now override the Dag-level ``render_template_as_native_obj`` setting,
enabling fine-grained control over whether templates are rendered as native Python
types or strings on a per-task basis. Set ``render_template_as_native_obj=True`` or
``False`` on any operator to override the Dag setting, or leave as ``None`` (default)
to inherit from the Dag.

### Add gunicorn support for API server with zero-downtime worker recycling

The API server now supports gunicorn as an alternative server with rolling worker restarts
to prevent memory accumulation in long-running processes.

**Key Benefits:**

* **Rolling worker restarts**: New workers spawn and pass health checks before old workers
  are killed, ensuring zero downtime during worker recycling.

* **Memory sharing**: Gunicorn uses preload + fork, so workers share memory via
  copy-on-write. This significantly reduces total memory usage compared to uvicorn's
  multiprocess mode where each worker loads everything independently.

* **Correct FIFO signal handling**: Gunicorn's SIGTTOU kills the oldest worker (FIFO),
  not the newest (LIFO), which is correct for rolling restarts.

**Configuration:**

.. code-block:: ini

    [api]
    # Use gunicorn instead of uvicorn
    server_type = gunicorn

    # Enable rolling worker restarts every 12 hours
    worker_refresh_interval = 43200

    # Restart workers one at a time
    worker_refresh_batch_size = 1

Or via environment variables:

.. code-block:: bash

    export AIRFLOW__API__SERVER_TYPE=gunicorn
    export AIRFLOW__API__WORKER_REFRESH_INTERVAL=43200

**Requirements:**

Install the gunicorn extra: ``pip install 'apache-airflow-core[gunicorn]'``

**Note on uvicorn (default):**

The default uvicorn mode does not support rolling worker restarts because:

1. With workers=1, there is no master process to send signals to
2. uvicorn's SIGTTOU kills the newest worker (LIFO), defeating rolling restart purposes
3. Each uvicorn worker loads everything independently with no memory sharing

If you need worker recycling or memory-efficient multi-worker deployment, use gunicorn. (#60921)

### Improved performance of rendered task instance fields cleanup for Dags with many mapped tasks (~42x faster)

The config ``max_num_rendered_ti_fields_per_task`` is renamed to ``num_dag_runs_to_retain_rendered_fields``
(old name still works with deprecation warning).

Retention is now based on the N most recent dag runs rather than N most recent task executions,
which may result in fewer records retained for conditional/sparse tasks. (#60951)

### AuthManager Backfill permissions are now handled by the ``requires_access_dag`` on the ``DagAccessEntity.Run``

``is_authorized_backfill`` of the ``BaseAuthManager`` interface has been removed. Core will no longer call this method and their
provider counterpart implementation will be marked as deprecated.
Permissions for backfill operations are now checked against the ``DagAccessEntity.Run`` permission using the existing
``requires_access_dag`` decorator. In other words, if a user has permission to run a Dag, they can perform backfill operations on it.

Please update your security policies to ensure that users who need to perform backfill operations have the appropriate ``DagAccessEntity.Run`` permissions. (Users
having the Backfill permissions without having the DagRun ones will no longer be able to perform backfill operations without any update)

### Python 3.14 support added

Airflow 3.2.0 adds support for Python 3.14. (#63787)

### Reduce API server memory by eliminating ``SerializedDAG`` loads on task start

The API server no longer loads the full ``SerializedDAG`` when starting tasks,
significantly reducing memory usage. (#60803)

### Remove MySQL client from container images

MySQL client support has been removed from official Airflow container images. MySQL users
building on official images must install the client themselves. (#57146)


### Add support for async callables in PythonOperator

The ``PythonOperator`` parameter ``python_callable`` now also supports async callables in Airflow 3.2,
allowing users to run async def functions without manually managing an event loop. (#60268)

### Make start_date optional for `@continuous` schedule

The ``schedule="@continuous"`` parameter now works without requiring a ``start_date``, and any Dags with this schedule will begin running immediately when unpaused. (#61405)

## New Features

- Add FIPS support by making Python LTO configurable via ``PYTHON_LTO`` build argument (#58337)
- Add support for task queue-based Trigger assignment to specific Triggerer hosts via the new ``--queues`` CLI option for the ``trigger`` command (#59239)
- Add ``--show-values`` and ``--hide-sensitive`` flags to CLI ``connections list`` and ``variables list`` to hide sensitive values by default (#62344)
- Add support for setting individual secrets backend kwargs via ``AIRFLOW__SECRETS__BACKEND_KWARG__<KEY>`` environment variables (#63312)
- Add ``only_new`` parameter to Dag clear to only clear newly added task instances (#59764)
- Add ``log_timestamp_format`` config option for customizing component log timestamps (#63321)
- Add ``--action-on-existing-key`` option to ``pools import`` and ``connections import`` CLI commands (#62702)
- Add back ``--use-migration-files`` flag for ``airflow db init`` (#62234)
- Add ``AllowedKeyMapper`` for partition key validation in asset partitioning (#61931)
- Add ``ChainMapper`` for chaining multiple partition mappers (#64094)
- Add cryptographic signature verification for Python source packages in Docker builds (#63345)
- Add Human-in-the-Loop (HITL) Review system for ``AgenticOperator`` (#63081)
- Add ``@task.stub`` decorator to allow tasks in other languages to be defined in Dags (#56055)
- Add support for creating connections using URI in SDK (#62211)
- Add note support to ``TriggerDagRunOperator`` (#60810)
- Add ``allowed_run_types`` to whitelist specific Dag run types (#61833)
- Add OR operator support in API search parameters (#60008)
- Add API filtering for Dags by timetable type (#58852)
- Add wildcard support for ``dag_id`` and ``dag_run_id`` in bulk task instance endpoint (#57441)
- Add ``operator_name_pattern``, ``pool_pattern``, ``queue_pattern`` as task instance search filters (#57571)
- Add ``update_mask`` support for bulk PATCH APIs (#54597)
- Add asset event emission listener event (#61718)
- Add ``source`` parameter to ``Param`` (#58615)
- Add lazy filtering for inlet events by time range, ordering, and limit (#54891)
- Add ability to get previous ``TaskInstance`` on ``RuntimeTaskInstance`` (#59712)
- Add required context messages to all DagRun state change notifications (#56272)
- Add ``max_trigger_to_select_per_loop`` config for Triggerer HA setup (#58803)
- Add ``uvicorn_logging_level`` config option to control API server access logs (#56062)
- Add correlation-id support to Execution API for request tracing (#57458)
- Add ``executor.running_dags`` gauge metric to expose count of running Dags (#52815)
- Add submodules support to ``GitDagBundle`` (#59911)
- Add HTTP URL authentication support to ``GitHook`` for Dag bundles (#58194)
- Add stream method to ``RemoteIO`` for ``ObjectStorage`` (#54813)
- Add CLI hot-reload support via ``--dev`` flag (#57741)
- Add ``auth list-envs`` command to list CLI environments and auth status (#61426)
- Add Dag bundles to ``airflow info`` command output (#59124)
- Add new arguments to ``db_clean`` to explicitly include or exclude Dags (#56663)
- UI: Add Jobs page to the Airflow UI (#61512)
- UI: Add version change indicators for Dag and bundle versions in Grid view (#53216)
- UI: Add segmented state bar for collapsed task groups and mapped tasks (#61854)
- UI: Add date range filter for Dag executions (#60772)
- UI: Add "Select Recent Configurations" to trigger form, restoring Airflow 2 functionality (#56406)
- UI: Add copy button to logs (#61185)
- UI: Add filename display to Dag Code tab for easier file identification (#60759)
- UI: Add Dag run state filter to grid view options (#55898)
- UI: Add task upstream/downstream filter to Graph and Grid views (#57237)
- UI: Add filters to Task Instances tab (#56920)
- UI: Add display of active Dag runs count in header with auto-refresh (#58332)
- UI: Add Dag ID pattern search to Dag Runs and Task Instances pages (#55691)
- UI: Add delete button for Dag runs in more options menu (#55696)
- UI: Add depth filter to ``TaskStreamFilter`` (#60549)
- UI: Add theme config support (#58411)
- UI: Add support for ``globalCss`` in custom themes (#61161)
- UI: Add display of logged-in user in settings button (#58981)
- UI: Add tooltip for explaining task filter traversal (#61401)
- UI: Add self-service JWT token generation for API and CLI access (#63195)
- UI: Add bulk operations for edge workers page (#64033)
- UI: Add real-time concurrency control for edge workers (#63142)
- UI: Add ``run_after`` date filter on Dag runs page (#62797)
- UI: Add bundle version filter on Dag runs page (#62810)
- UI: Add icon support for theme customization (#62172)
- UI: Add Monaco editor for all JSON editing fields (#62708)
- UI: Add run type legend tooltip to grid view (#62946)
- UI: Allow customizing gray, black, and white color tokens in ``AIRFLOW__API__THEME`` in addition to brand (#64232)

## Bug Fixes

- Fix sensitive configuration values not being masked in public config APIs; treat the deprecated ``non-sensitive-only`` value as ``True`` (#59880)
- Fix ``InvalidStatsNameException`` for pool names with invalid characters by auto-normalizing them when emitting metrics (#59938)
- Fix JWT tokens appearing in task logs by excluding the token field from workload object representations (#62964)
- Fix security iframe navigation when ``AIRFLOW__API__BASE_URL`` basename is configured (#63141)
- Fix grid view URL for dynamic task groups producing 404 by not appending ``/mapped`` to group URLs (#63205)
- Fix ``ti_skip_downstream`` overwriting RUNNING tasks to SKIPPED in HA deployments (#63266)
- Fix duplicate task execution when running multiple schedulers (#60330)
- Fix callback starvation across Dag bundles (#63795)
- Fix ``@task`` decorator failing for tasks that return falsy values like ``0`` or empty string (#63788)
- Fix ``LatestOnlyOperator`` not working when direct upstream of a dynamically mapped task (#62287)
- Fix inconsistent ``XCom`` return type in mapped task groups with dynamic mapping (#59104)
- Fix task group lookup using wrong Dag version for historical runs, causing 404 errors in grid view (#63360)
- Fix import errors when updating Dags in other bundles (#63615)
- Fix ``DagRun`` span emission crash when ``context_carrier`` is ``None`` (#64087)
- Fix false error logs for partitioned timetables when ``next_dagrun`` fields are ``None`` (#63962)
- Fix timetable serialization error when decoding ``relativedelta`` (#61671)
- Fix ``task_instance_mutation_hook`` receiving ``run_id=None`` during ``TaskInstance`` creation (#63049)
- Fix scheduler crash on ``None`` ``dag_version`` access (#62225)
- Fix ``MetastoreBackend.expunge_all()`` corrupting shared session state (#63080)
- Fix triggerer logger file descriptor closed prematurely when trigger is removed (#62103)
- Fix ``airflowignore`` negation pattern handling for directory-only patterns (#62860)
- Fix false warnings for ``TYPE_CHECKING``-only forward references in TaskFlow decorators (#63053)
- Fix ``structlog`` JSON serialization crash on non-serializable objects (#62656)
- Fix backward compatibility for deadline alert serialization (#63701)
- Fix ``queued_tasks`` type mismatch in hybrid executors (``CeleryKubernetesExecutor``, ``LocalKubernetesExecutor``) (#63744)
- Fix Celery tasks not being registered at worker startup (#63110)
- Fix asset partition detection incorrectly identifying Dags as partitioned (#62864)
- Fix ``pathlib.Path`` objects incorrectly resolved by Jinja templater in Task SDK (#63306)
- Fix state mismatch in Kubernetes executor after pod completion (#63061)
- Fix ``make_partial_model`` for API Pydantic models (#63716)
- Fix WTForms validator compatibility in connection form (#63823)
- Fix ``_execution_api_server_url()`` ignoring configured value and falling back to edge config (#63192)
- Fix ``DetachedInstanceError`` for ``airflow tasks render`` command (#63916)
- Fix scheduler isolating per-dag-run failures to prevent a single DagRun crashing all scheduling (#62893)
- Fix task argument order in ``@task`` definition causing Dag parsing errors (#62174)
- Fix ``limit`` parameter not sent in ``execute_list`` server requests (#63048)
- Fix circular import from ``airflow.configuration`` causing ``ImportError`` on Python 3.14 (#63787)
- Fix ``map_index`` range validation in CLI commands (#62626)
- Fix nullable ORM fields by restoring correct defaults and dropping unreleased corrective migration (#63899)
- Fix race condition in auth manager initialization on concurrent requests (#62431)
- Fix ``FabAuthManager`` race condition on startup with multiple workers (#62737)
- Fix ``FabAuthManager`` race condition when workers concurrently create permissions, roles, and resources (#63842)
- Fix ``JWTValidator`` not handling GUESS algorithm with JWKS (#63115)
- Fix ``FabAuthManager`` first idle MySQL disconnect in token auth (#62919)
- Fix ``JWTBearerTIPathDep`` import errors in Human-In-The-Loop routes (#63277)
- Fix 403 from roles endpoint despite admin rights in FAB provider (#64097)
- Fix task log filters not working in full-screen mode (#62747)
- Fix duplicate log reads when resuming from ``log_pos`` (#63531)
- Fix 404 errors from worker log server for historical retry attempts now handled gracefully (#62475)
- Fix Elasticsearch/OpenSearch logging exception details missing in task log tab (#63739)
- Fix task-level audit logs missing success/running events (#61932)
- Fix ``null`` ``dag_run_conf`` causing serialization error in ``BackfillResponse`` (#63259)
- Fix CLI asset materialization using wrong Dag run type (#63815)
- Fix migration 0094 performance: use SQL instead of Python deserialization (#63628)
- Fix migration reliability: replace ``savepoints`` with per-Dag transactions (#63591)
- Fix slow downgrade performance by adding index to ``deadline.callback_id`` (#63612)
- Fix MySQL reserved keyword ``interval`` causing query failures in ``deadline_alert`` (#63494)
- Fix MySQL ``serialize_dag`` query failure during deadline migration (#63804)
- Fix SQLite downgrade failures caused by FK constraints during batch table recreation (#63437)
- Fix migration 0096 downgrade failing when team table has existing rows (#63449)
- Fix missing warning about hardcoded 24h ``visibility_timeout`` that kills long-running Celery tasks (#62869)
- Fix scheduler memory issue by removing eager loading of all task instances (#60956)
- Fix MySQL sort buffer overflow in deadline alert migration (#61806)
- Fix failing to manually trigger a Dag with ``CronPartitionedTimetable`` (#62441)
- Fix race condition in ``AssetModel`` when updating asset partition DagRun — adds mutex lock (#59183)
- Fix FAB ``auth_manager`` ``load_user`` causing ``PendingRollbackError`` (#61943)
- Fix N+1 query: add ``joinedload`` for asset in ``dags_needing_dagruns()`` (#60957)
- Fix Dag Processor health check threshold matching SchedulerJob/TriggererJob pattern (#58704)
- Fix ``NotMapped`` exception when clearing task instances with downstream/upstream (#58922)
- Fix missing asset events for partitioned DagRun (#61433)
- Fix missing ``partition_key`` filter in ``PALK`` when creating DagRun (#61831)
- Fix Dag params API contract broken by earlier change (#56831)
- Fix OAuth session race condition causing false 401 errors during login (#61287)
- Fix ``ObjectStoragePath`` to exclude ``conn_id`` from storage options passed to fsspec (#62701)
- Fix unable to import list value for Variable (#61508)
- Fix plugin registration returning early on duplicate names (#60498)
- Fix circular import when using ``XComObjectStorageBackend`` (#55805)
- Fix deadline alert hashing bug (#61702)
- Fix task SDK to read ``default_email_on_failure``/``default_email_on_retry`` from config (#59912)
- Fix Celery worker crash on macOS due to non-serializable local function (#62655)
- Fix Redis import race condition in Celery executor (#61362)
- Fix incorrect state query parameter for task instances in Dashboard (#59086)
- Fix ``TaskInstance.get_dagrun`` returning None in ``task_instance_mutation_hook`` (#60726)
- Fix Simple Auth Manager login showing cryptic error on failed authentication (#64303)
- Fix ``dag_display_name`` property bypass for ``DagStats`` query (#64256)
- Fix ``TaskAlreadyRunningError`` not raised when starting an already-running task instance (#60855)
- Fix Teardown tasks not waiting for all in-scope tasks to complete (#64181)
- Fix ``enable_swagger_ui`` config not respected in API server (#64376)
- Fix: add check for xcom permission when result is specified for DagRun wait endpoint (#64415)
- Fix ``conf.has_option`` not respects default provider metadata (#64209)
- Fix teardown scope causing unnecessary database writes during task scheduling (#64558)
- Fix live task log output not visible in stdout when using Elasticsearch log forwarding (#64067)
- Fix ``TaskInstance`` crash when refreshing task weight for non-serialized operators (#64557)
- Fix Variables secrets backend conflict check exiting early when multiple backends are configured (#64062)
- UI: Fix Dag run accessor key on clear task instance page (#64072)
- UI: Fix searchable dropdown not working for Dag params enum fields (#63895)
- UI: Fix newline rendering in Dag warning alert (#63588)
- UI: Fix ``XCom`` edit modal value not repopulating on reopen (#62798)
- UI: Fix task duration tooltip not displaying correctly (#63639)
- UI: Fix elapsed time not showing for running tasks (#63619)
- UI: Fix ``RenderedJsonField`` collapse behavior (#63831)
- UI: Fix ``RenderedJsonField`` not displaying in table cells (#63245)
- UI: Fix full-screen log dropdown z-index after Chakra upgrade (#63816)
- UI: Fix asset materialization run type display (#63819)
- UI: Fix pools with unlimited (``-1``) slots not rendering correctly (#62831)
- UI: Fix ``DurationChart`` labels and disable animation flicker during auto-refresh (#62835)
- UI: Fix 403 error not shown when unauthorized user re-parses Dag (#61560)
- UI: Fix logical date filter on ``/dagruns`` page not working (#62848)
- UI: Fix inflated ``total_received`` count in partitioned Dag runs view (#62786)
- UI: Fix edge executor navigation when behind reverse proxy with subpath (#63777)
- UI: Fix queries not invalidated on Dag run add/delete (#64269)
- UI: Fix ``RenderedJsonField`` flickering when collapsed (#64261)
- UI: Fix Docs menu REST API link visibility when API docs are disabled (#64359)
- UI: Fix ``TISummaries`` not refreshing when ``gridRuns`` are invalidated (#64113)
- UI: Fix guard against null/undefined dates in Gantt chart to prevent RangeError (#64031)
- UI: Block polling requests to endpoints that returned 403 Forbidden (#64333)
- UI: Fix Gantt view still visible when time range is outside ``DagRun`` window (#64179)
- UI: Fix Human-in-the-Loop (HITL) operator options not displaying when exactly 4 choices are configured (#64453)


## Miscellaneous

- Deprecate ``api.page_size`` config in favor of ``api.fallback_page_limit`` (#61067)
- Improve Dag callback relevancy by passing a context-relevant task instance based on the Dag's final state instead of an arbitrary lexicographical selection (#61274)
- Optimize ``get_dag_runs`` API endpoint performance (#63940)
- Improve historical metrics endpoint performance (#63526)
- Add TTL cache with single-flight deduplication to Keycloak ``filter_authorized_dag_ids`` (#63184)
- Reduce Celery worker memory usage with ``gc.freeze`` (#62212)
- Eliminate duplicate JOINs in ``get_task_instances`` endpoint (#62910)
- Replace large ``IN`` clause in asset queries with CTE and JOIN for better SQL performance (#62114)
- Add row lock to prevent race conditions during asset-triggered DagRun creation (#60773)
- Add ``ConnectionResponse`` serializer safeguard to prevent accidental sensitive field exposure (#63883)
- Add missing ``dag_id`` filter on DagRun task instances API query (#62750)
- Add missing HTTP timeout to FAB JWKS fetching (#63058)
- Add additional permission check in asset materialization endpoint (#63338)
- Filter backfills list by readable Dags (authorization enforcement) (#63003)
- Hide SQL statements in exception details when ``expose_stacktrace`` is disabled (#63028)
- Use default max depth to redact Variable values in API responses (#63480)
- Validate ``update_mask`` fields in PATCH API endpoints against Pydantic models (#62657)
- Align key/id path validation for variables and connections in Execution API (#63897)
- Add ``order_by`` parameter to GET /permissions endpoint for pagination consistency (#63418)
- Implement truncation logic for rendered template values (#61878)
- Add ``BaseXcom`` to ``airflow.sdk`` public exports (#63116)
- Make ``TaskSDK`` conf respect default config from provider metadata (#62696)
- Add OTel trace import shim via ``airflow.sdk.observability.trace`` (#63554)
- Improve 3.2.0 deadline migration performance (#63920)
- Improve 3.2.0 downgrade migration for ``external_executor_id`` on PostgreSQL (#63625)
- Skip backfilling old ``DagRun.created_at`` during migration for faster upgrades (#63825)
- Add INFO-level logging to asset scheduling path (#63958)
- Improve log file template for ``ExecuteCallback`` by including ``dag_id`` and ``run_id`` (#62616)
- Improve Dag processor timeout logging clarity (#62328)
- Deprecate ``get_connection_form_widgets`` and ``get_ui_field_behaviour`` hook methods (#63711)
- Add missing deprecation warnings for ``[workers]`` config section (#63659)
- Expose ``TaskInstance`` API for external task management (#61568)
- Remove deprecated ``airflow.datasets``, ``airflow.timetables.datasets``, and ``airflow.utils.dag_parsing_context`` modules (#62927)
- Remove ``PyOpenSSL`` from core dependencies (#63869)
- Optimize fail-fast check to avoid loading ``SerializedDAG`` (#56694)
- Improve performance of task queue processing by switching from ``pop(0)`` to ``popleft()`` (#61376)
- Optimize K8s API usage for watching pod events, fixing hanging communication (#59080)
- Remove N+1 database queries for team names (#61471)
- Improve XCom value handling in extra links API (#61641)
- Remove ``.git`` folder from versions in ``GitDagBundle`` to reduce storage size (#57069)
- Deprecate subprocess exec utils from ``airflow.utils.process_utils`` (#57193)
- Improve error handling in edge worker on 405 responses (#60425)
- Improve deferrable ``KubernetesPodOperator`` handling of deleted pods between polls (#56976)
- Improve event log entries when a pod fails for K8s executor (#60800)
- Refactor XCom API to use shared serialization constants (#64148)
- Improve temporal mapper to be timezone aware for asset partitioning (#62709)
- Improve dag version inflation checker logic and fix false-positive detection (#61345)
- Rename ``ToXXXMapper`` to ``StartOfXXXMapper`` in partition-mapper for clarity (#64160)
- Run DB check only for core components in prod entrypoint (#63413)
- Fix partitioned asset events incorrectly triggering non-partition-aware Dags (#63848)
- Improve partitioned DagRun sorting by ``partition_date`` (#62866)
- Allow gray, black, and white color tokens in ``AIRFLOW__API__THEME`` config (#64232)
- Add parent task spans and nest worker/trigger spans for improved observability (#63839)
- UI: Enhance code view to support search and diff (#55467)
- UI: Improve UX for adding custom ``DeadlineReferences`` (#57222)
- UI: Enhance ``FilterBar`` with ``DateRangeFilter`` for compact UI (#56173)
- UI: Move deadline alerts into their own table for UI integration (#58248)
- UI: Persist tag filter selection in Dag grid view (#63273)
- UI: Show HITL review tab only for review-enabled task instances (#63477)
- UI: Updated button styles for adding Connections, Variables, and Pools (#62607)
- UI: Add clear permission toast for 403 errors on user actions (#61588)


## Doc Only Changes

- Add documentation marking pre/post-execute task hooks as GA (no longer experimental) (#59656)
- Add ``RedisTaskHandler`` configuration example (#63898)
- Add documentation explaining difference between deferred vs async operators (#63500)
- Add auth manager section in multi-team documentation (#63208)
- Add documentation about shared libraries in ``_shared`` folders (#63468)
- Clarify plugin folder module registration in ``modules_management`` docs (#63634)
- Clarify ``max_active_tasks`` Dag parameter documentation (#63217)
- Clarify HLL in extraction precedence docs (#63723)
- Clarify Ubuntu/Debian venv requirement in quick start guide (#63244)
- Fix Git connection docs to match actual ``GitHook`` parameters (#63265)
- Mention Python 3.14 support in docs (#63950)
- Add Dag documentation for ``example_bash_decorator`` (#62948)
- Add Russian translation for UI (#63450)
- Add Hungarian translation (#62925)
- Complete Traditional Chinese translations (#62652)
- Add asset partition documentation (#63262)
- Add guide for dag version inflation and its checker (#64100)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.2.0` · 2026-04-07 · [upstream release](https://github.com/apache/airflow/releases/tag/3.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
