---
title: "airflow 3.4.0"
project: "airflow"
repo: "apache/airflow"
tag: "3.4.0"
published: "2026-11-06"
type: "minor"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.4.0/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.4.0/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.4.0/release_notes.html 🐳 Docker…"
---

# airflow 3.4.0

📦 PyPI: https://pypi.org/project/apache-airflow/3.4.0/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.4.0/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.4.0/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.4.0"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.4.0

## Significant Changes

### Task Loops (#73005, #74222, #74275, #74345)


Airflow 3.4.0 introduces Task Loops (AIP-111): a decorated task group can be repeated a number of
times decided at runtime using ``.loop()``. A conditional loop works like a ``do ... while`` loop -
the body runs at least once and an ``until`` condition decides when to stop, bounded by
``max_iterations``. Each iteration can use the previous iteration's result and iterations run one
after another (tasks within an iteration can still run in parallel). Retried attempts are kept
under a per-attempt UUID so each iteration's data is preserved and can be cleared selectively.

For detailed usage instructions, see :doc:`/authoring-and-scheduling/loops`.

.. note::
  Downgrading to any version earlier than 3.4.0 can be slow, depending on the number of
  XCom rows that have been written after upgrading. Upgrading was tested on a
  300m row XCom table, so please don't worry about upgrade time (we made sure
  that the XCom *data* didn't get touched or read during migration to keep it
  fast).

  This is because this release contains a migration that starts storing new XCom
  rows in an xcom_v2 table, and in order to downgrade we have to move those over
  to the old table, and there is no way of doing this without copying the
  written xcom values.

  The downgrade refuses to continue when it finds data it cannot map back
  safely. Each migration commits separately, so the later 3.4.0 migrations
  have already been reversed at that point: fix the data and re-run the
  downgrade, or run ``airflow db migrate`` to return to 3.4.

  On MySQL a failure after those checks leaves the schema partly downgraded,
  as MySQL cannot roll back DDL. Taking a backup before attempting the
  downgrade on MySQL is advised, so it can be restored in that case.


### Dag Importer for non-Python Dags (#72369, #73728, #73853, #74020, #74084, #74333, #74586)

Airflow 3.4.0 can author an entire Dag - schedule, tasks, and dependencies - in a language other
than Python. AIP-85 adds a pluggable Dag Importer in the Task SDK that teaches the Dag processor to
recognize source formats beyond ``.py``: each format registers an importer, the processor runs the
matching language runtime, and the resulting Dags surface in Airflow like Python Dags. The formats
that land on it are the TypeScript, Go, and Java language SDKs and a native YAML Dag format (a
``.yaml`` file with a ``$schema`` marker, validated against a schema and built into real operators,
with explicit templating). The Dag Importer framework and the language SDKs are experimental in 3.4
and their APIs may change.

For detailed usage instructions, see :doc:`/administration-and-deployment/dag-importers`.

### Unify executor workload queues under ``BaseExecutor.executor_queues`` (#63491)

Executor workload state is now stored on the unified ``BaseExecutor.executor_queues`` mapping keyed
by ``WorkloadType`` and scheduled through ``trigger_workloads``. The previous per-type attributes
and entrypoints (``queued_tasks``, ``queued_callbacks``, ``supports_callbacks``, ``trigger_tasks``,
``order_queued_tasks_by_priority``) and the Airflow 3.3 connection-test surface are folded into
this mapping and kept as backward-compatible shims that emit ``RemovedInAirflow4Warning`` (to be
removed in Airflow 4.0). Out-of-tree executors should declare ``supported_workload_types`` and
implement ``trigger_workloads``. Connection tests are now admitted under the same per-heartbeat
budget as tasks and prioritized ahead of them. See
`#63491 <https://github.com/apache/airflow/pull/63491>`_ for the full migration guide.

### psycopg3 is now the default Postgres driver (#68496)

psycopg3 (``psycopg``) is now the default driver for the metadata database, for both the sync and
the async engine, replacing psycopg2 and asyncpg. A bare ``postgresql://`` (or a legacy
``postgres://`` / ``postgres+psycopg2://``) ``sql_alchemy_conn`` is rewritten to
``postgresql+psycopg://``, and the derived async URL uses ``postgresql+psycopg_async://`` when
psycopg3 is installed (falling back to asyncpg otherwise). Airflow also disables psycopg3's
server-side statement preparation (``prepare_threshold = None``) so the metadata database works out
of the box behind transaction-mode PgBouncer, the recommended production setup. To keep psycopg2 or
asyncpg, install the ``apache-airflow-providers-postgres[psycopg2]`` / ``[asyncpg]`` extra and
configure the connection explicitly; see #68496 and #69469 for details, including how to re-enable
statement preparation.

### Asset-triggered Dags create one run per event by default (#68517)

Single-asset schedules and asset OR expressions now create one Dag run per event instead of
consuming all queued events in one run. This also applies to ``AssetOrTimeSchedule`` and
``PartitionedAssetTimetable``.

To retain batching, set ``batch_asset_events=True`` on the timetable or enable ``[scheduler]
batch_asset_events`` and reparse the affected Dags. Already serialized timetables without this
option retain their previous batching behavior until reparsed.

Schedules requiring several events, including ``schedule=[a, b]``, asset AND expressions, and
partitioned timetables using ``RollupMapper``, continue to batch by default. Explicitly setting
``batch_asset_events=False`` for these schedules raises a timetable validation error.

### Custom graph colors return via ``ui_color`` and ``ui_fgcolor`` (#68760)

The ``ui_color`` and ``ui_fgcolor`` attributes on operators and TaskGroups color the graph view
again -- the node fill from ``ui_color`` and the operator label from ``ui_fgcolor``, as they did in
Airflow 2. They were silently ignored since Airflow 3.0.

The value can be a raw color (a hex code like ``#e8b7e4`` or a CSS name) or a Chakra theme token --
a palette token such as ``blue.500`` or a semantic token such as ``brand.solid`` that adapts to
light and dark mode (including tokens added through custom UI theming); a token resolves through a
theme-controlled CSS variable. The node border keeps reflecting the task-instance run state; the
custom color is applied to the fill and label only.

### ``validate_key`` now raises ``ValueError`` instead of ``AirflowException`` (#68890)

The ``airflow.utils.helpers.validate_key`` utility now raises ``ValueError`` instead of
``AirflowException`` when an invalid key is provided (for example an invalid format or a
length-limit violation).

### The deprecated ``Dataset`` alias has been removed from the ``airflow`` module (#70154)


Use ``Asset`` from ``airflow.sdk`` instead.

### Audit log rows not tied to a Dag now require the ``AUDIT_LOGS_ALL`` view (#70759)

Rows in the audit log whose ``dag_id`` is ``NULL`` record operations that are not tied to a Dag,
such as Connection, Variable and Pool changes. They were returned to any caller that could read
event logs at all, because there is no per-Dag key to authorize them on and both read paths fell
back to a Dag-level audit log check.

They are now gated on a dedicated ``AccessView.AUDIT_LOGS_ALL``, in the same way
``AccessView.IMPORT_ERRORS_ALL`` gates import errors for files with no registered Dag. Rows bound
to a Dag keep their existing per-Dag check.

- ``GET /eventLogs`` no longer returns rows with a ``NULL`` ``dag_id`` to callers without the new
  view, and excludes them from ``total_entries`` and pagination. ``GET /eventLogs/{event_log_id}``
  returns ``403`` for such a row. An id matching no row still returns ``404``.
- With the simple auth manager the view is granted to the ``ADMIN`` role only. With the FAB auth
  manager it maps to a new ``All Audit Logs`` resource, which ships in the ``Admin`` role; custom
  roles that need to read these rows must be granted ``All Audit Logs.can_read`` explicitly.
- An auth manager that cannot map a requested ``AccessView`` now denies that view and emits a
  ``UserWarning`` instead of raising ``KeyError``. This affects auth managers older than the core
  they run against, which previously failed the request with a server error.

### Team names must now be lower case, and cannot contain two consecutive underscores (#70886)

``airflow teams create`` and ``airflow teams sync`` now accept only names matching
``(?!.*__)[a-z0-9_-]{3,50}`` -- lower case letters, digits, hyphens and single underscores. Upper
case letters and ``__`` were previously accepted.

A team name is embedded in the ``AIRFLOW_CONN__<TEAM>___<ID>`` environment variable namespace that
holds team scoped secrets, and the backend upper-cases the name when it builds that variable.
``data_eng`` and ``Data_Eng`` therefore resolved a single namespace between them, and a name
containing ``___`` could not be told apart from the separator.

``airflow db migrate`` lower-cases every stored team name, moving that team's Dag bundles,
Connections, Variables, Pools and Triggers with it. Two stored names that differ only in case would
collapse onto one row and silently merge two teams, so migration refuses to start while any such
pair exists -- rename all but one first. Names that stay invalid for another reason, such as
containing ``__``, are migrated as they are; they keep working, but ``airflow teams sync`` exits
non-zero until they are renamed.

### Changes to how pending asset events trigger Dag runs (#70972)

Deleting asset event records with ``airflow db clean`` now also removes any asset events that are
still pending for a downstream Dag. This mainly affects Dags waiting on a multi-asset condition,
where a pending event can be purged before the condition is met. Deleting an asset event now
consistently means it will not trigger a run; previously such a pending trigger could still fire
after the event had been purged.

Relatedly, an asset event that was queued for a Dag while it was scheduled on that asset is still
used to trigger the run, and appears among the run's triggering events, even if the asset is later
removed from the Dag's schedule. Previously, they were silently dropped.

### Callbacks now redeem a single-use token before they run (#71192)

A worker now redeems a callback's single-use token with the API server (``PATCH
/execution/callbacks/{callback_id}/run``) before importing and running the callback. Redeeming the
token moves the callback from queued to running and swaps it for a short-lived execution-scoped
token. Before this change a callback ran without the worker making any authenticated call, so the
token minted for it was never checked.

Because the token is single-use, a redelivered or replayed message that reaches a callback that is
already running or finished is refused rather than run again. A worker on 3.4 needs an API server
that serves this endpoint; a worker talking to an older API server negotiates the API version and
behaves as though the endpoint is not there.

### Clearing a task now discards its task state store entries by default (#72100)

Clearing a task instance now discards its ``task_state_store`` entries, so the next attempt starts
from the beginning instead of resuming from a checkpoint or reconnecting to an external job
recorded by the cleared attempt. Retries are unaffected and keep task state as before. This applies
to clearing individual task instances (the clear endpoint/dialog and ``airflowctl tasks``/``dags
clear``); clearing a whole Dag run still keeps task state (tracked in
`#72929 <https://github.com/apache/airflow/issues/72929>`_). To preserve the old behaviour, pass
``keep_task_state=True`` (or tick "keep task state" in the clear dialog; a per-browser default is
available under Settings > Clearing). Note a task-instance clear now also deletes
``task_state_store`` rows for that task instance.

### ``[core] execute_tasks_new_python_interpreter`` now applies to Airflow 3 task processes (#72164)

On Airflow 3 the option had no effect on task execution (only the Edge worker read it). When set to
``True``, the task supervisor now ``exec``\ s a fresh interpreter right after forking the task
process, which prevents the fork from inheriting a lock held by a supervisor thread (a permanent
hang at the task's first TLS call). Deployments that kept the option ``True`` from Airflow 2 get
this behaviour, and its per-task interpreter start-up cost, on upgrade without further action; set
it to ``False`` to keep bare fork. The task process reads the global value, so a team-scoped Edge
setting alone does not turn it on. Edge workers with the option ``True`` already start a fresh
interpreter for the supervisor and will now start a second one for the task. The Dag processor, the
triggerer and task callbacks (which the callback supervisor runs from a closure that cannot be
named for an exec'd child) are not affected and keep bare fork.

### Gracefully pause Dags by draining active runs (#72407, #73225, #73055, #73763)

Airflow now supports a ``draining`` scheduling state for Dags. Draining stops the scheduler from
creating new scheduled or asset-triggered Dag runs while allowing already queued and running Dag
runs to continue. Explicitly triggered runs remain allowed.

After outstanding Dag runs finish, the Dag automatically transitions to ``paused``. Users can
cancel draining to return the Dag to ``active``.

Manual runs, backfills and asset materializations on a paused Dag can drain the Dag instead of
unpausing it: choose **Drain** in the UI, or set ``drain_dag`` in the REST API request. Draining
lets unfinished runs of the Dag start or resume, except those held by paused backfills, creates no
scheduled runs, and pauses the Dag again once all unfinished runs finish. Paused backfills remain
paused and must be resumed for their runs to finish and draining to complete.

The UI, REST API, and ``airflowctl`` expose the ``active``, ``draining``, and ``paused`` scheduling
states, and the Dags list can pause, drain, or unpause several selected Dags at once. Existing
``is_paused`` API usage remains supported; use ``scheduling_state`` when the draining state must be
selected or reported explicitly.

### Reparsing a file with no registered Dag now requires the ``REPARSE_ALL`` view (#72896)

A file that failed to import before defining any Dag has no per-Dag key to authorize a reparse
against, so ``PUT /parseDagFile/{file_token}`` previously returned ``404`` for it. Reparsing such a
file is now gated on a dedicated ``AccessView.REPARSE_ALL`` -- a write action of its own, distinct
from the permission to view import errors -- and the Dag import errors modal gains a reparse action
for these files.

- ``PUT /parseDagFile/{file_token}`` for a file with no registered Dag authorizes against
  ``REPARSE_ALL`` and returns ``403`` when the caller lacks it, instead of ``404``. A file that has
  a registered Dag keeps its existing per-Dag ``can_edit`` check.
- With the simple auth manager the view is granted to the ``ADMIN`` role only. With the FAB auth
  manager it maps to a new ``All Reparses`` resource, which ships in the ``Admin`` role; custom
  roles that need to reparse such files must be granted ``All Reparses.can_read`` explicitly.

### Removed the ``--file-io`` option from the ``airflow info`` command (#73054)

``--file-io`` uploaded the report to file.io and printed a shareable link. file.io no longer
accepts anonymous uploads, so the option could not succeed; it also ended in an unhandled traceback
rather than reporting the failure.

Redirect the output instead::

    airflow info --anonymize > airflow-info.txt

Note that ``--file-io`` applied ``--anonymize`` implicitly. Pass ``--anonymize`` explicitly when
sharing a report: plain ``airflow info`` prints connection strings, including passwords, in
cleartext.

### Task heartbeats are no longer retried by ``[workers] execution_api_retries`` (#73244)

Heartbeats had two overlapping retry mechanisms: the Task SDK API client retried every request,
including heartbeats, and the supervisor separately counted consecutive heartbeat failures against
``[workers] max_failed_heartbeats``. The client retries also had the unwanted side-effect of
blocking the supervisor's monitor loop while it backed off, so during an API server outage the
supervisor would be delayed forwarding task logs and/or noticing that the task subprocess had
exited.

Heartbeat retries are now governed solely by ``max_failed_heartbeats``, whose default has been
adjusted from ``3`` to ``30`` to keep roughly the same tolerance for an unreachable API server as
the two mechanisms combined gave before.

If you have set ``[workers] max_failed_heartbeats`` explicitly, you may wish reconsider value you
have chosen. It is now the whole retry budget: with the default ``[workers]
min_heartbeat_interval`` of 5 seconds, the worker tolerates roughly ``5 * max_failed_heartbeats``
seconds of API unavailability before terminating a running task. You should likely keep the
resulting value below any configured ``[scheduler] task_instance_heartbeat_timeout`` (default 300
seconds).

### Deadline alert callbacks validated at parse time; numeric intervals deprecated (#73294)

``DeadlineAlert`` now refuses a ``callback`` that is not exactly ``AsyncCallback`` or
``SyncCallback``, so a subclass fails when the Dag is parsed rather than when the scheduler reads
it back.  The scheduler decodes stored callbacks by exact class name so no class named by a Dag
author is imported or instantiated there, which means a subclass could be written and then never
read.

Passing a number as the ``interval`` is deprecated and now emits ``RemovedInAirflow4Warning``. It
is still accepted and taken as a count of seconds, but the supported types are ``timedelta`` and
``VariableInterval``.  A ``timedelta`` subclass such as ``pendulum.duration(...)`` is accepted and
normalized to a plain ``timedelta``, where previously it passed validation and then failed during
serialization.  ``interval=True`` is refused, because ``bool`` is an ``int`` subclass and would
otherwise be taken as one second.

### The ``POST /assets/{asset_id}/materialize`` endpoint now requires a JSON request body (#73328)

Previously a request with no body was accepted and the asset was materialized with default values.
The endpoint now requires an explicit JSON body, consistent with the other mutating endpoints: a
request without a body is rejected with ``422``, and an empty HTML form is not a valid input
anymore. All body fields remain optional, so an empty object (``{}``) is a valid body.

### TaskInstance try numbers now increase before the next try starts (#73554)

.. note::

   If you have any external systems that look at task logs or TI state for an up-for-retry TI, you
   will need to be aware of this change and update your code.

   For example, if you made a request to ``GET
   /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`` expecting to get info about
   the failed try, you will now need to look at ``GET
   /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries/{try_number - 1}``

When a task is up_for_retry, try_number now identifies the upcoming try. To retrieve the try that
failed, request ``/tries/{try_number - 1}``. The UI shows the pending try and provides a link to
the previous try's logs.

Airflow now allocates a task instance's UUID and try number together immutably so they consistently
identify the same try.

Previously when a task entered the retry cooldown period, it would be given a new UUID, but keep on
try number N and have the state of UP_FOR_RETRY until that period was up (at which point that try
would be marked FAILED and the try number incremented). Instead, the failed try is immediately
marked with state of FAILED, and a new try created in state UP_FOR_RETRY.

### Deprecate cyclic TaskGroup dependencies (#73746)

A Dag whose TaskGroups depend on each other in a cycle, when each TaskGroup is treated as a single
unit, now issues a ``TaskGroupCycleDeprecationWarning`` at parse time and shows a Dag warning in
the UI that names the TaskGroups and tasks involved. These Dags still parse and run, because their
task dependencies are acyclic, but Airflow 3.5 is planned to reject them at parse time.

A dependency into or out of any task in a TaskGroup counts as a dependency of the whole group, so a
path that leaves a TaskGroup and comes back into it is a cycle. For example, ``a >> bridge >> b``,
with ``a`` and ``b`` in the same TaskGroup and ``bridge`` outside it, makes the group depend on
``bridge`` and ``bridge`` depend on the group, even if ``a >> b`` is also set.

- Move tasks between TaskGroups, or out of them, so that each group depends on the others in one
  direction only. In the example above, move ``bridge`` into the group, or move ``b`` out of it.
- To catch these Dags in CI, run your Dag tests with ``-W
  error::airflow.sdk.exceptions.TaskGroupCycleDeprecationWarning``. The check runs when a Dag is
  added to a ``DagBag``, so only tests that load your Dags into a ``DagBag`` and assert there are
  no import errors catch them; a test that only imports a Dag file does not.

See "Cyclic TaskGroup dependencies" in the Dags documentation.

### Language SDK coordinators load task handlers from a Dag bundle (#73970)

The experimental ``jars_root`` (Java) and ``executables_root`` (Go) coordinator kwargs are removed.
Put the artifacts in a Dag bundle registered in ``[dag_processor] dag_bundle_config_list`` and set
``task_handler_bundle_name`` in the coordinator's ``kwargs``, or leave it unset to use the task's
own Dag bundle. A config that still sets a removed kwarg fails with ``Cannot instantiate
coordinator '<key>'``.

### Support for Python 3.10 has been removed (#74151)

Airflow now requires Python 3.11 or newer. Python 3.10 reaches its end of life in October 2026, and
Airflow drops support for a Python version in ``main`` as soon as it reaches end of life. The
``apache-airflow`` distribution, the Task SDK, ``airflowctl`` and all providers released from
``main`` declare ``requires-python = ">=3.11"``.

### Deprecate the ``required_kwargs`` attribute for custom deadline references (#70714)

Implement ``_evaluate_with()`` with a ``dagrun`` parameter instead.

### CI and production images are now based on Docker Hardened Images and Debian 13 (#73038)

Airflow's CI and production images are now based on `Docker Hardened Images <https://dhi.io>`_ for
Python and Debian 13 "trixie".

Python is no longer compiled from source during the image build - it comes from the hardened base
image instead, which removes the source download, its signature verification and the compilation
itself from the build. Python still lives in ``/usr/python``, which is now a symlink to the
``/opt/python`` location the base image uses, so paths inside the image are unchanged.

The ``BASE_IMAGE`` build argument now defaults to
``ghcr.io/apache/airflow/base/python:<version>-debian13-dev``, Airflow's public mirror of the
upstream ``dhi.io/python`` image, so building an image needs no registry credentials. Anyone
overriding ``BASE_IMAGE`` with a plain ``debian:bookworm-slim`` image has to switch to an image that
already provides Python, or build the ``legacy`` flavor.

The base OS moved from Debian 12 "bookworm" to Debian 13 "trixie". Library packages renamed in
trixie's 64-bit ``time_t`` transition (for example ``libssl3`` is now ``libssl3t64``) have to be
updated in custom ``RUNTIME_APT_DEPS`` / ``ADDITIONAL_RUNTIME_APT_DEPS``, and the MySQL-compatible
client now comes from MariaDB 11.8.

For the 3.4.x line, production images built the previous way - Python compiled from sources on
``debian:bookworm-slim`` - are still published as the deprecated ``legacy`` flavor, selected with
the new ``AIRFLOW_IMAGE_FLAVOR="legacy"`` build argument. They will be removed in Airflow 3.5.0.

The ``PYTHON_LTO`` build argument is gone. To build a FIPS-compliant image, point ``BASE_IMAGE`` at a
FIPS variant of the hardened image instead, for example ``dhi.io/python:3.13.16-debian13-fips-dev``.

### Task SDK API client trusts the system certificate store instead of ``certifi`` (#73116)

With ``[api] client_use_public_certs`` enabled (the default), the Task SDK client that talks to the
Execution API now trusts the operating system's certificate store through ``truststore`` instead of
the ``certifi`` CA bundle. CAs from ``[api] ssl_ca_file`` and ``[api] ssl_cert`` are still trusted
in addition to the system store, and ``certifi`` is no longer a Task SDK dependency.

Workers must have the public CAs they rely on installed in the system store (for example, the
``ca-certificates`` package on Debian-based images). On macOS and Windows, certificate validation
is delegated to the operating system, which can reject server certificates that OpenSSL accepted,
such as private-CA certificates without the ``serverAuth`` extended key usage.

### Older workers can no longer resume deferred tasks whose ``next_kwargs`` hold custom classes (#73577)

When a deferred task resumes on a worker with an older Task SDK, the API server no longer reconstructs arbitrary classes from the stored ``next_kwargs`` to convert them to the legacy format. Built-in value types, assets and asset aliases (including asset access control) are still converted, without constructing them. A deferred task whose ``next_kwargs`` hold any other class now fails on such a worker with an error naming the type and asking to upgrade the Task SDK, instead of crashing on a payload it cannot decode.

**What to do:** if you run workers with ``apache-airflow-task-sdk`` 1.1.x or older and your deferrable operators or triggers pass instances of custom classes in ``next_kwargs`` (for example via ``self.defer(..., kwargs=...)`` or in the trigger event payload), upgrade the Task SDK on those workers to 1.2.0 or later. Newer workers receive ``next_kwargs`` unchanged and are not affected. Until all workers are upgraded, pass only built-in values, assets and asset aliases in ``next_kwargs`` of tasks that may resume on older workers.

### Deadline Alert callback kwargs are decoded where the callback runs (#74830)

The keyword arguments of Deadline Alert callbacks are no longer decoded by the scheduler. They
are kept in their serialized form and decoded where the callback runs: by the triggerer for an
``AsyncCallback``, and by the callback runner on the worker for a ``SyncCallback``.

Workers that run ``SyncCallback`` Deadline Alerts need a Task SDK that includes this change, so
upgrade ``apache-airflow`` and ``apache-airflow-task-sdk`` on workers together. A worker with
an upgraded ``apache-airflow`` and an older Task SDK fails such callbacks with an error instead
of running them. Callbacks created before the upgrade run as before.

### Custom XCom backends that override ``serialize_value`` must implement ``store_value`` to support task loops (#74858)

Every iteration of a task inside a loop is its own task instance, but ``serialize_value``
receives the same ``dag_id``, ``run_id``, ``task_id``, ``map_index`` and ``key`` for all of
them, so a backend that builds its storage location from those makes every iteration's XCom
read back as the last iteration's value. Backends should override ``store_value`` and
``load_value`` instead, and build the storage location with ``XComCoordinate.build_path``,
which is unique per task instance, or per write when the write cannot know the task instance.

A Dag that uses a loop fails on startup when the configured XCom backend still stores values
through ``serialize_value``, even if it already writes to a unique location. This includes
``XComObjectStorageBackend`` from ``apache-airflow-providers-common-io`` 1.10.1 and earlier;
upgrade the provider before using task loops with it.

Custom Task State Store backends will likewise need to include
``scope.region_id`` in their storage key to support mapped tasks inside a loop
and loop iterations regenerated by clearing.

### ``airflow.utils.email`` is deprecated in favor of the SMTP provider (#75414)

The functions in ``airflow.utils.email`` (``send_email``, ``send_email_smtp``, ``send_mime_email``,
``build_mime_message`` and ``get_email_address_list``) now live in
``airflow.providers.smtp.utils.emailer``. The old names still work and raise a ``DeprecatedImportWarning``.
Airflow now requires ``apache-airflow-providers-smtp>=3.2.0``.

Keep ``[email] email_backend`` set to ``airflow.utils.email.send_email_smtp``. Airflow treats that value as
"send task emails with ``SmtpNotifier``", which reads all SMTP settings from the Connection. Changing it to
the provider path sends through the ``[smtp]`` settings instead.

If you call these functions directly:

* The SMTP Connection is looked up with ``BaseHook.get_connection``. A script that runs outside Airflow's
  processes needs the Connection in an environment variable or a secrets backend, not only in the metadata
  database.
* Settings are read through the Task SDK configuration, so values changed at runtime with
  ``airflow.configuration.conf.set()`` are not seen. ``airflow.cfg`` and environment variables work as before.
* Tests that patch ``airflow.utils.email.send_mime_email`` no longer intercept the call made by
  ``send_email_smtp``. Patch ``airflow.providers.smtp.utils.emailer.send_mime_email`` instead.

- The API server uses a second database connection pool

  API server workers now run some database work on the async engine as well as the sync one, and each engine has its own connection pool, sized by the same ``[database] sql_alchemy_pool_size`` and ``[database] sql_alchemy_max_overflow`` settings. What uses the async pool depends on the ``--apps`` option of ``airflow api-server``:

  - ``execution``: task heartbeats and several Execution API reads.
  - ``core``: the audit log entry recorded for each write request through the REST API or the UI.
  - ``all`` (the default): both of the above.

  In every mode a worker can therefore open up to twice ``sql_alchemy_pool_size + sql_alchemy_max_overflow`` connections (30 with the defaults) and keep up to twice ``sql_alchemy_pool_size`` of them idle. Account for this, per ``[api] workers``, when sizing PgBouncer or the database's ``max_connections``.

  The async pool is used since #67800, #73403, #73407 and #76416. (#76430)

## New Features

- UI: Show task group states as stacked cards in the Grid view (#75442)
- Let plugins add their own actions to Dag, run and task instance rows (#75427)
- TS SDK: Reject blank edge labels and label task edges into groups (#75190)
- Expose task instance loop pass and expansion size to listeners (#75132)
- Add a Duplicate action to the Connections list (#75110)
- Let retry policies reschedule a task without using a retry (#74993)
- Let plugin views be scoped to specific Assets (#74992)
- Add Map Index search to dag breadcrumb (#74893)
- UI: Show secondary states of mapped tasks in the Grid view (#74883)
- Allow loop gates to add human-readable decisions (#74806)
- Java SDK: Let a native Java Dag set one queue for all its tasks (#74538)
- Java SDK: Add edge labels to native Dags (#74523)
- Add asset ID filtering to ``airflow db clean`` (#74498)
- TS SDK: Add edge labels with label() (#74494)
- Add dag version lookup on get task endpoint (#74365)
- Add Logical Date column to the Runs table (#74340)
- UI: Add a Dag Run ID column to the Task Instances list (#74316)
- UI: Add duration filter to DAG Backfills tab (#74202)
- Add a user setting for the default search match mode (#74021)
- Add URL param support to calendar view (#73237) (#73762)
- UI: Add team filter to Human-in-the-loop task instances listing (#73726)
- add bundle_name tags to missing dag processor metrics (#73717)
- Add deadline callback log visibility to the Dag Run view in UI (#73580)
- Add fab-oauth meta-package extra (#73565)
- Allow a Job to be associated with several teams (#73561)
- UI: Add time range filtering to the Gantt view (#73555)
- Add ``ChainRetryPolicy`` to compose retry policies in order (#73508)
- Add task state store API to the Java SDK (#73464)
- UI: Add a default preference for expanded task groups (#73429)
- Add task state store support to the Go SDK task client (#73420)
- UI: Add team column and filter to the jobs list (#73295)
- Add SetVariable and DeleteVariable to the Go SDK task client (#73084)
- Allow template-field copies into StartTriggerArgs in operator __init__ (#73040)
- Allow plugins to add or override UI translations (#72648)
- Support multi-column sort in the Dags list table (#72558)
- Add dry-run mode to teams sync (#72494)
- Add Has Events filter to Assets search (#72460)
- UI: Add 'Mark as Skipped' option to Task Instance actions (#72425)
- UI: Add toggle to show or hide log levels in task logs (#72363)
- Add async Variable methods (aget, aset, adelete, akeys) (#72329)
- UI: Add team column and filter to the XComs list (#72158)
- UI: Add team column and filter to the deadlines list (#72060)
- Add integrity metadata to TypeScript bundles (#72046)
- Multi-Team: Add teams inspect CLI command to display team resources (#72036)
- ``is_scheduled`` REST API parameter (#72029)
- Allow Variable.get to reuse the caller's database session (#71968)
- UI: Add team column and filter to the audit log (#71916)
- Make the scheduler Dag cache size and TTL configurable (#71816)
- Support a regex for the API's CORS allowed origins (#71778)
- CLI: Add --limit flag to airflow dags list-runs (#71729)
- Add SSL cipher list option to the api server (#71645)
- Add ConnectionNotFoundError to the TypeScript SDK (#71375)
- Add preset filters to the Dags list page (#71368)
- Add Dag ID filtering to Assets search (#70971)
- Allow filtering the Dag runs list by Dag tags (#70861)
- Support DagBundle based deployment for Coordinator (#70805)
- Add a user settings page for cross-page UI defaults (#70687)
- Support a Unix Domain Socket for the metrics clients (#70517)
- UI: Add a time-window scope to the Dags list run state filter (#70470)
- UI: Add Select Recent Configurations dropdown to Trigger Dag form (#70413)
- UI: Add a slowest tasks chart to the Dag Overview (#70305)
- Add task log message when the Execution API is unreachable (#70290)
- UI: Add team column and filter to Dag Run and Task Instance lists (#70241)
- Support schema-qualified table names in db clean (#70147)
- UI: Add team column and filter to Dag list page (#70028)
- Add React plugin support to Dag and task overviews (#69992)
- Add Asset Tab plugin (#69986)
- Add serialized Dag version diff engine (#69864)
- UI: Add timetable type filter to Dag list (#69728)
- Allow embedding a Dag run in an external trace via run conf (#69633)
- Add support for forwarding CeleryExecutor task logs to stdout (#69597)
- Add deadlines to Calendar Tab (#69559)
- Add team_name attribute to plugins for multi-team (#69502)
- Add exact-match uri filter to GET /assets endpoint (#69489)
- Add runtime DagRun note updates (#69403)
- Add indexes on serialized_dag and dag_code (#69391)
- Add streaming task log support to BaseExecutor and FileTaskHandler (#69299)
- Add airflow-ts-pack bundle build tool for TypeScript SDK (#69295)
- UI: Allow scoping plugin tabs to specific Dags and tasks (#69148)
- Add metrics for how often a dag gets serialised. (#68906)
- Allow forcing trace head-sampling per DAG run via conf (#68860)
- Add Calendar Deadlines API and Data Models (#68604)
- Add a Node.js coordinator for running TypeScript Dags (#68548)
- Add async task store accessors for async tasks (#68232)
- Add scheduler observability metrics (#68068)
- Add extra field filtering for asset events (#64611)
- Add partition_key and partition_key_regexp_pattern filters for asset events (#64610)
- Add ``AssetAndTimeSchedule`` timetable (#58543)

## Bug Fixes

- Fix async engine datetimes being shifted on non-UTC MySQL servers (#76505)
- Scope asset-event ``created_dagruns`` to Dags the caller can read (#76234)
- Keep mapped tasks when clearing with run on latest version (#76420)
- Load Java Dags from a bundle path that holds a colon (#76432)
- UI: Fix task groups not expanding when ``localStorage`` is full (#76302)
- Keep the audit log off the API server event loop (#76416)
- Fix LocalExecutor deadlock when a workload put blocks (#75086)
- TS SDK: Inherit the Dag queue when a task passes queue undefined (#76123)
- UI: Fix Portuguese and Hungarian labels that show a raw placeholder (#75964)
- Fix the 404 on a looped task group's breadcrumb (#76050)
- Fix stale queued asset rows in scheduler cleanup and readiness (#76002)
- Stop Recent Configurations flashing on the trigger form (#75991)
- Avoid unbounded IN lists for queued asset events (#75943)
- Stop requesting the details of an empty Dag id after a bulk selection (#75862)
- Fix hourly cron schedules running an hour off across a DST change (#75847)
- Preserve XCom value types when editing in the UI (#75496)
- Reject non-object JSON files when importing variables (#75384)
- Fix dashboard Active Dags filtering (#75350)
- Stop a stale callback stat from forcing constant Dag file reparsing (#73433)
- UI: Fix a crash caused by an unresolvable Windows PT timezone (#75723)
- UI: Stop keyboard shortcuts firing while typing in a Monaco editor (#75684)
- UI: Fix slow pending Dag run checks on large databases (#75674)
- UI: Fix labels that render as raw translation keys (#75326)
- Let listeners see the end date of a skipped task instance (#75685)
- Refuse Human-in-the-Loop responses once the task stopped waiting (#75645)
- TS SDK: Reject a blank queue in Dag and task specs (#75573)
- Fix scheduler crash when retrying a task that timed out or was killed externally (#75472)
- Fix task loop iteration log links pointing to a nonexistent page (#75458)
- Go SDK: Fail a task whose return-value XCom push fails (#75443)
- UI: Fix visual and console-error bugs in the Dag list and details pages (#75418)
- Decide the ``min_one_success`` trigger rule per index in mapped task groups (#75417)
- Return a 5xx response on a database deadlock when updating task state (#75368)
- Run team tasks on the team executor when named by class or path (#75362)
- Fix task instance filtering for null start dates (#75321)
- UI: Keep the multiselect filter pill's focus ring visible (#75307)
- UI: Show errors when the task clear confirmation check fails (#75269)
- Skip scheduling tasks when their Dag cannot be deserialized (#75263)
- Read a team's running task logs through the team's executor (#75255)
- Keep the token cookie set by a route in ``JWTRefreshMiddleware`` (#75217)
- UI: Scope the partitioned Dag run asset list to readable assets (#75213)
- UI: Reveal selected Dag folders when names contain pipes (#75196)
- UI: Show a label instead of a broken link for hidden assets (#75178)
- Show source code lines in task log tracebacks (#75100)
- Fix ``Trigger.clean_unused`` rejecting a caller-provided session (#75096)
- Reserve graph header width for loop-group iteration badge (#75095)
- Keep Dag folder selection distinct across bundle names (#75080)
- Keep parent Dag folders collapsed after one click (#75079)
- Reject non-positive ``max_active_runs`` when creating a backfill (#75071)
- TS SDK: Fix "Dynamic require" error for CommonJS packages in ``airflow-ts-pack`` (#75067)
- Fix 500 when ordering the Dag list by state or start_date (#75025)
- Run the Kerberos ticket renewer without metadata database checks (#75000)
- Fix serialization of datetimes with a fixed UTC offset (#74922)
- Reset Dag autoregistration state when a Python Dag file fails to load (#74911)
- Reject blank pool names and Variable keys in the REST API (#74896)
- Resolve a trigger's XCom requests as its deferred task instance (#74868)
- Fix JWT token not refreshed when token expires mid-request (#74865)
- Do not warn about bare postgresql:// metadata DB URLs (#74863)
- Fix dynamically mapped tasks never running on scheduled Dag runs (#74861)
- Speed up API server requests by keeping JWT checks off the event loop (#74856)
- Keep ``.airflowignore`` rules when the Dags folder symlink is switched (#74853)
- Match camelCase keys against sensitive field names in masker (#74840)
- Scope asset-wide queued event deletion to editable Dags (#74839)
- Keep queued connection tests from overwriting newer connections (#74837)
- Scope asset Dag and task references to readable Dags (#74836)
- Reject reserved serialization keys in Dag run conf (#74834)
- Fix Dag version diff max-changes border, limit wording and duplicate count (#74818)
- Java SDK: Send log timestamps in UTC (#74783)
- Fix Dag list run badges and counters not refreshing after completion (#74734)
- UI: Fix clearing a task instance doing nothing after Confirm (#74725)
- Report a Dag whose timetable fails to load as an import error (#74709)
- UI: Keep JSON text in string HITL params instead of showing [object Object] (#74702)
- Refuse a HITL response for a request the task has since replaced (#74688)
- Fix ORM models failing to configure in processes that skip database setup (#74642)
- Stop the secrets backend lookup from importing the task runner outside tasks (#74641)
- Go SDK: pack a bundle that registers no Dags at pack time (#74637)
- Fix language SDK Dag parsing failing under pydantic 2.14 (#74628)
- Fix 400 and 500s on POST /connections/defaults in multi-team mode (#74615)
- Fix clearing with upstream and downstream selecting unrelated tasks (#74548)
- Keep the scheduler running when a queued run's Dag fails to deserialize (#74499)
- UI: Fix the Dags list showing an error page and reduce unnecessary re-renders (#74426)
- Fix plugin applies_to scoping (#74425)
- Fix /ui/dags recent-runs query degradation on large, skewed dag_run tables (#74401)
- Fix XCom query in not_previously_skipped_dep to use xcom_entity (#74377)
- Fix short-circuit in a mapped task group not skipping later tasks (#74283)
- Make ``ZIP_REGEX`` case-insensitive to match .ZIP archives (#74269)
- Clear language SDK task XComs in the coordinator when a try starts (#74221)
- Java SDK: Reject byte arrays instead of letting the task hang (#74218)
- UI : Fix duplicate "From" label on DAG backfill filters (#74189)
- Improve LocalExecutor bookkeeping: correctly add tasks to the ``running`` list (#74142)
- UI: Fix XCom list crash when a value request fails (#74131)
- Fix date range filter inputs committing on every keystroke (#74011)
- Fix short-circuit not skipping already expanded mapped tasks (#73960)
- Fix short-circuit inside a mapped task group not skipping downstream (#73959)
- Fix task clear and callback bundles after code-only Dag changes (#73915)
- UI: Fix external plugin nav links not navigating on click (#73913)
- Clear retry policy state when a task instance is cleared (#73889)
- Correctly shutdown async sessions on exit. (#73838)
- Go SDK: Stop log attributes from displacing standard log fields (#73820)
- API: Translate domain ValueError in Task State Store route (#73753)
- Filter jobs API ``is_alive`` in SQL so pagination stays correct (#73684)
- Guard ``register_at_fork`` in shared stats for Windows compatibility (#73680)
- Fix boolean value of start date used in url start_date_gte filter. (#73676)
- Stop a commented-out ``executable_resumable`` from marking a module durable (#73607)
- Fix square corner on fully filled dashboard History bars (#73543)
- Fix empty audit log ``dag_id`` for ``DAG.cli()`` subcommands (#73379)
- Fix CLI --bundle-name finding no Dags in Git bundles (#73377)
- Fix airflow plugins and dags pause printing prose with --output json (#73270)
- Fix 500 from POST ``/auth/token`` on a request body it cannot parse (#73258)
- Fix slow task-log scrolling by memoizing useLogGroups' visible-items index (#73252)
- Fix 500 from the audit logger on a request body it cannot parse (#73226)
- Stop reporting components as degraded after an instance restart (#73222)
- Fix dashboard stats cards navigating to a 404 page (#73178)
- Fix airflow db clean silently skipping three tables when scoped to Dags (#73173)
- Stop the scheduler creating Dag runs for paused partitioned-asset Dags (#73151)
- Fix Dags staying blocked by max_active_runs until the next parse (#73032)
- Fix airflow standalone announcing readiness before the API server is up (#73025)
- Hide assets the caller may not read from the UI dependencies graph (#73008)
- Fix airflow teams list --output json printing prose when no teams exist (#72945)
- Fix ``tasks clear --task-regex`` matching as a plain substring (#72941)
- Avoid a full asset table scan per request in simple auth manager (#72934)
- Fix Dag callbacks dropped when bundle versioning is disabled  (#72930)
- Stop one malformed provider from breaking discovery for all providers (#72854)
- Fix backfill DagRuns being permanently starved from scheduling (#72730)
- Fix airflow db check reporting one fewer retry than it will make (#72708)
- Fix airflow dags list --columns help showing wrong default columns (#72607)
- UI: Render Arabic durations with the correct plural form (#72604)
- Fix XCom slice endpoint for crossed bounds (#72584)
- Fix the ``dag_processing.last_duration`` timing metric reporting the wrong value (#72553)
- Stop emitting the legacy first_task_scheduling_delay metric twice (#72512)
- Fix Dag metrics dropped when a tag contains invalid characters (#72364)
- Fix misleading error for malformed version in airflow db downgrade (#72331)
- Fix timedelta serde to accept int payloads (#72326)
- Fix plugin registration returning early on duplicate names in Task SDK (#72253)
- Redact secrets written through ``RedactedIO.writelines()`` (#72063)
- Fix Dag run filtering for null start dates (#71654)
- Fix ``map_index_template`` failing for numeric-looking labels with ``render_template_as_native_obj`` (#71592)
- Keep the MeterProvider configured via OTEL_CONFIG_FILE (#71529)
- Fix Asset Event table titles showing a raw translation key (#71443)
- Fix executor validation error referencing non-existent [core] executors (#71336)
- Fix MySQL metadata database failing when only PyMySQL is installed (#71251)
- Fix OpenSearch remote logging crash if port is empty (#71170)
- Fix duplicate pending Dag runs for the same asset partition key (#71074)
- Fix /ui/assets picking a stale "last event" under concurrent asset writes (#71047)
- Stop airflow config update from writing a backup during dry-run (#70979)
- Fix log template sync failing when a custom SQL Alchemy schema is configured (#70793)
- Drain result_queue before dispatch in LocalExecutor to prevent runtime dispatch deadlock (#70545)
- Fix TypeError clearing a DAG run when a queued-at deadline interval is stored as JSON (#70370)
- Fix manual runs getting a zero-length data interval across DST (#70089)
- Use atomic upsert for asset run queue on MySQL to avoid deadlocks (#69977)
- Don't fail API server startup when a plugin uses an unknown team (#69976)
- Prevent negative trigger queue delay metrics (#69971)
- Fix asset event extra filter matching wrong events for dotted keys on SQLite (#69675)
- Fix @asset reserved keys with default value (#69642)
- Fix ``statsd_ipv6`` config not enabling IPv6 sockets for the default StatsD client (#69632)
- Make sure stale file handler doesn't crash the DagFileProcessorManager (#69324)
- UI: Fix triggered Dag run layout in asset event cards (#69310)
- Fix Dag detail page 500 for Dags without a fileloc #69035 (#69110)
- Fix mapped task group XCom collapsing to a bare value for a single expansion (#69075)
- Fix macOS SIGSEGV in triggerer and Dag processor via fork+exec (#69008)
- Fix branch not skipping mapped tasks with custom XCom backend (#68954)
- Do not abort Dag run creation when a deadline alert fails (#68917)
- Fix duplicate heartbeat-timeout task callbacks (#68008)
- Drain result_queue in LocalExecutor to prevent process join deadlock (#67881)
- Fix missing ``task.queued_duration`` metric in Airflow 3 (#67592)
- Fix CLI connection display reporting wrong is_extra_encrypted flag (#67561)
- Fix remote processor injection happening before dictConfig runs in configure_logging (#66633)
- Fix airflow db clean IntegrityError when a dag_version is referenced by a task_instance (#66350)
- Fix airflow db clean hang on MySQL when delete fails (#66296)
- Fix ``refresh_from_task`` not applied on retries (#65932)
- Fix asset event scheduling race condition and consistency (#62501)
- Fix ``DecreasingPriorityStrategy`` example by initializing ``try_number`` before weight evaluation (#62148)
- Fix connection resolution in CLI by setting server process context in decorators (#61036)

## Miscellaneous

- Let non-task callers set and delete Variables over the Execution API (#76375)
- Let asset watchers write asset state over the Execution API (#76376)
- UI: Label the Dag bundle file table as Parsed Files (#76462)
- UI: Complete the Italian translation (#76464)
- UI: Update the French translations to 100% coverage (#76461)
- UI: Complete the Spanish translation (#76087)
- UI: Complete and fix the Polish translations (#76429)
- UI: Complete the missing zh-TW translations (#76398)
- UI: Make asset state store entries scrollable (#75870)
- UI: Stop bundling the ELK worker twice (#75864)
- Store and show the retry deadline; start retries with empty run fields (#76027)
- Freeze the GC before the triggerer's forks to keep memory flat (#76016)
- Honor Airflow logging levels in the TypeScript SDK (#76005)
- Make the bundle name less prominent in the Dag import error modals (#75958)
- Load the serialized Dag when starting a task only for stub tasks (#75795)
- UI: Hide the scheduled run icon in the grid legend (#75775)
- Avoid loading timetables for Dags in Execution API endpoints (#75765)
- Add metrics for task and asset state store access (#75729)
- Add ``dag_id`` and ``task_id`` tags to the resumable_job metrics (#75721)
- Run a language SDK runtime in its own process group (#75707)
- UI: Hide empty log groups in the task log view (#75686)
- Require cadwyn 8.1 to allow FastAPI 0.137+ (#75689)
- Report language SDK runtime launch failures in the task log (#75561)
- UI: Remove the info tooltip from the Dag version comparison (#75526)
- UI: Show the filtered task count in the Dag Tasks tab heading (#75448)
- TS SDK: Take the task state store retention in seconds (#75445)
- UI: Show the Dag version diff occurrence count on the path (#75433)
- UI: Make the Dags sidebar button a link and move Dag Runs and Task Instances under Browse (#75422)
- Optimize the scheduler's asset orphanage check with an ``EXISTS`` subquery instead of a fan-out join (#75404)
- UI: Clean up the Dag Version tab (#75244)
- UI: Warn when the logical date is outside the Dag's start and end dates (#75223)
- Go SDK: Write the edge label text before the task (#75185)
- Open the Dags menu from the Dags nav button instead of navigating (#75092)
- TS SDK: Populate Dag dependencies for TypeScript Dags (#75032)
- Warn about overly large task state values from language SDK tasks (#74945)
- Resolve loop iterations through family and path columns on dynamic regions (#74892)
- Validate ``CallbackTrigger`` callback path before running the callback (#74842)
- Skip the scheduler's Dag lookup for Dag runs with no callback to send (#74835)
- Render XCom values on the API server without rebuilding objects (#74829)
- UI: Preload base React plugin bundles with the page (#74777)
- UI: Keep unnamed columns out of the table columns menu (#74774)
- Number task loop iterations from one instead of zero (#74773)
- UI: Drop the loading spinner for base React plugins (#74762)
- Coerce delta and other typed fields when building operators from YAML Dags (#74749)
- Show Dag version diff values-hidden pill only when values are hidden (#74746)
- UI: Open nav sidebar menus on hover and add a Dags menu (#74745)
- Show serializer schema in Dag version diff only when it differs (#74683)
- Upgrade Task Loop UX (#74671)
- UI: Fold draining into the Dags Paused state filter (#74668)
- Lazy-load the Code tab grammar from the Dag's stored language (#74643)
- Highlight YAML Dag source in the Code tab (#74633)
- UI: Add clicked tags to the Dags list filters instead of replacing them (#74622)
- Java SDK: Rename annotation namespace from Builder to Airflow (#74604)
- Update waiting tasks to the latest Dag version (#74592)
- Disable psycopg3 auto-prepare by default behind connection poolers (#74581)
- UI: Replace stacked Dag header banners with inline status (#74516)
- TS SDK: Reject ``triggerDagRun`` tasks in ``dag.if`` and ``dag.switch`` (#74492)
- Make airflow standalone discover new Dag files within seconds (#74479)
- Use the configured API port in the default execution API URL (#74478)
- Dag run breadcrumb switcher (#74471)
- Reduce db clean batch probe overhead (#74455)
- UI: Show important form inputs instead of hiding them in accordions (#74422)
- Speed up Migration 0136 on MySQL (#74409)
- Scope the mapped task group skip-decision query to its own Dag run (#74390)
- Show loop iterations and outcomes throughout the UI (#74354)
- Show current task executions in the UI (#74352)
- Read current task executions by exact region and try (#74350)
- Clear selected loop work and regenerate only what was replaced (#74349)
- Resolve live producers by region and read their XCom by attempt (#74344)
- Parse native Go Dags and show each Dag's own source (#74341)
- UI: Apply default visibility to newly added table columns (#74320)
- UI: Group digits of counters in translated strings (#74296)
- Remember the Dag runs limit across tab switches and visits (#74289)
- Scope plugin views on any entity field, not a fixed criteria set (#74278)
- UI: Open provider connection fields by default and title them by connection type (#74273)
- Keep get_dag_details and get_pools database queries off the API server event loop (#74247)
- Require ``httpx2`` instead of ``httpx`` in airflow-core (#74244)
- Scope audit log rows to a Dag only from the request path or body (#74232)
- Register TypeScript, Java and Go grammars for the Dag Code tab (#74231)
- Discover executable bundles by footer, not by execute bit (#74227)
- Set end date and duration on tasks skipped by a Dag run timeout (#74128)
- Treat an empty Dag run config as no config in the UI (#74083)
- Let a Dag importer find the coordinator that parses its files (#74042)
- Validate a serialized Dag and fill its unset settings from the Airflow config (#74041)
- Keep the Dag trigger button one-click when a run has no config (#74039)
- Parse native TypeScript Dags with the Node coordinator (#74037)
- Parse native Java Dags and show their source (#74036)
- Parse native Lang-SDK Dags in the Dag processor with their runtime (#74035)
- Persist the match-anywhere search toggle in the URL (#74019)
- UI: Keep Dags list table rows on a single line (#74002)
- UI: Split task storage into separate XCom and task state store tabs (#73989)
- Surface Dag run conf in the header (#73987)
- Keep agent framework spans when worker tracing is off (#73903)
- Enforce execution_timeout from the task supervisor side (#73806)
- Keep the Dag asset schedule the same shape for every caller (#73805)
- Update supported Kubernetes versions (#73798)
- Mask provider-declared sensitive connection extras on every connection type (#73794)
- Mask registered secrets at any nesting depth (#73793)
- Mask XCom values in the audit log (#73791)
- Always clear the session cookie on logout (#73788)
- Eager-load DagCode in the Dag source API (#73752)
- Speed up zip Dag discovery and keep member file names (#73727)
- UI: Group digits of counters according to the selected locale (#73713)
- Correct the meaning of _arg_bindings in the serialization schema (#73644)
- Sync the UI Dags list applied sort rule with URL query param (#73622)
- Link calendar cell to filter dagruns by the respective start_date and state. (#73611)
- Add the resume event to stored next_kwargs without decoding them (#73576)
- Scope plugin scheduling classes to their team in multi-team mode (#73569)
- Warn when db clean skips only some rows of a batch (#73568)
- Widen revoked_token.jti to store external-issuer token identifiers (#73562)
- Own the BaseAsyncOperator event loop through asyncio.Runner (#73560)
- Use os.posix_spawn instead of fork+exec in the task-sdk supervisor (#73503)
- Skip ``on_kill()`` for triggers reassigned to another triggerer (#73454)
- Document favorite_dag's 409 and return a readable conflict message (#73411)
- Migrate ``GET /execution/variables/keys`` to an async DB session (#73407)
- Migrate execution API reads to async sessions (#73403)
- UI: Show every scheduler, triggerer, and Dag processor in health dashboard (#73355)
- UI: Show xcom before task state store in storage tabs (#73313)
- Delay reporting of up-for-retry state until task finalization completes (#73253)
- Refresh HITL review details on task clear (#73235)
- Scope plugin macros to their team in multi-team mode (#73224)
- Anchor top-level nav and needs-review links to root paths (#73202)
- Keep Grid scroll position when opening a task. (#73123)
- Identity-only DAG discovery and byte-importing (#73118)
- Move retry policy decision outside post execute log group block (#73023)
- Speed up the event logs API by loading only display names (#73021)
- Scope upstream asset events of a Dag run to assets and Dags the caller may read (#72924)
- Warn at provider discovery about an unresolvable connection type (#72904)
- Mark task-group aggregate bars on Gantt with a diagonal stripe (#72894)
- Hide unreadable assets in the asset expression served by next_run_assets (#72864)
- Scope UI next_run_assets endpoint to assets the caller may read (#72862)
- Keep date-only range ends inclusive (#72860)
- Remove a misleading connection type warning and explain lookup failures (#72855)
- Keep callback triggers assigned to healthy triggerers (#72848)
- Remove ignored --output flag from airflow pools set and delete (#72833)
- Show whether a calendar day's run was a backfill (#72782)
- Keep the task instance in dag callbacks when its Dag version is missing (#72721)
- Read XCom without object reconstruction during dependency evaluation (#72718)
- Mask CLI secrets in the audit log by parsed argument, not argv position (#72650)
- Clarify the backfill reprocessing option labels in the CLI and REST API (#72590)
- Warn when connections/variables list output may be incomplete (#72484)
- Add a source reference to import errors and a language field to Dag code (REST API + schema) (#72474)
- Distinguish empty plugin folder from plugin load failures in logs (#72432)
- Preview JSON fields as inline badges in tables (#72353)
- More human readable duration strings (#72350)
- Avoid retrying XCom expand actions (#72305)
- Scope plugin operator extra links to their team in multi-team mode (#72231)
- Use a structured SecretCache key instead of a concatenated string (#72201)
- UI: Keep Grid run tooltips inside the viewport (#72161)
- UI: Stop list pages jumping while a filter loads (#72005)
- Include task_reschedule in task_instance dependent tables for db clean (#71990)
- UI: Visual overhaul of Dag details layout for easier consumption (#71957)
- Authorize team-scoped plugin API endpoints in multi-team mode (#71919)
- Remove the Go Edge Worker (#71874)
- UI: Make dialogs consistent and fix their dark mode background (#71806)
- UI: Unify list page filters and table header controls (#71731)
- Improve DAG authorization filtering performance (#71722)
- Extend user settings with additional configuration (#71699)
- Cut the per-file cost of persisting Dag parse results (#71621)
- UI: Consolidate table controls into consistent slots and improve visual presentation (#71554)
- Stop presenting multi-team tagged metrics as an exhaustive list (#71523)
- Show the teams of the signed-in user in multi-team mode (#71503)
- Backfills UI filters (#71467)
- Respect run on latest version when clearing a running Dag run (#71425)
- API: Return asset events for Dag Runs without a start date (#71379)
- Use sqlite3.sqlite_version_info instead of hand-parsing the version string (#71115)
- Validate provider metadata list entries instead of ignoring them (#71104)
- Reject serde-reserved keys in HITL params_input (#71054)
- Update grid view refresh (#71004)
- Improve assets list performance (#70997)
- Batch triggerer unused trigger cleanup deletes (#70961)
- Multi-Team: Add teams verify command to validate multi-team configuration (#70947)
- Describe default Airflow loggers (#70842)
- Rename dag serialization metrics. (#70838)
- Show user display names for triggered runs and HITL responses (#70836)
- UI: Preserve Dag tab when switching Dags (#70699)
- UI: Wire advanced-search toggle for Grid Triggering User filter (#70567)
- UI: Highlight selected Grid task square (#70451)
- Feature expand health endpoint reporting (#70416)
- Remove airflow-metadata.yaml sidecar support from NodeCoordinator (#70273)
- Show backfill Dag runs in the UI (#70159)
- UI: Pass Dag, DagRun, TaskInstance, and Asset objects to React app plugins (#70149)
- Rename Task and Asset store to Task and Asset state store (#70097)
- Skip timeout callback creation for Dags without on_failure_callback (#70065)
- Improve Dag run metrics (#70013)
- Sort Dags by latest run after (#69995)
- Updated sort+filters for Assets List (#69940)
- UI: Share one tooltip root across Dag card run-state badges (#69927)
- Progressively load interactive elements of Dag Card (#69806)
- Validate deferred trigger classpath resolves to a BaseTrigger subclass (#69792)
- Multi Team: Automatically create and assign team default pools (#69768)
- Pass dag_id to Dag bundle construction on task execution (#69697)
- Reduce DAG card tooltip controller overhead (#69681)
- Show recent task states on the Dags list page (#69619)
- Resolve NPM vulnerabilities in Simple auth manager (#69488)
- Display latest dagrun state per dag in search result. (#69414)
- Improve mobile responsiveness for dashboard asset cards (#69294)
- Thread version_data to callbacks (#69185)
- Mark task worker span as failed when the task fails (#69146)
- Handle DB Performance Issues by Adding a New Index for Trigger (#69038)
- Warm-shutdown supervisor on SIGTERM instead of killing the running task (#69034)
- Raise a warning instead of an error if extra teams are defined in the auth manager (#68935)
- UI: Show partition preview in backfill form for partitioned Dags (#68884)
- Display owner_display_name in Audit Log (#68833)
- Warn in UI when the same dag_id is registered from multiple files (#68791)
- Ignore stale executor success when TI is queued after defer (#68741)
- Add ``bundle_name`` to ``Dag`` (#68583)
- Optionally emit Dag tags as metric tags (#68568)
- Group and filter Dags by folder on the Dags page (#68544)
- TriggerRunner: Add batch trigger creation duration metric (#68521)
- Paginate partitioned Dag run modal requests (#68412)
- Gate raw Dag deserialization error detail behind api.expose_stacktrace and log it server-side (#68388)
- Avoid a supervisor round trip before poke for rescheduled sensors (#68012)
- TriggerRunnerSupervisor: Add trigger queue delay metric (#67927)
- Make kinit renewable lifetime configurable for Heimdal Kerberos support (#67804)
- Use async DB session for Execution API task-instance heartbeat (#67800)
- Type asset_expression in the REST API so the UI does not cast through unknown (#67725)
- Record TaskInstanceHistory when a task fails from a non-running state (#67372)
- Remove trigger event payload from INFO log in run_trigger() (#67244)
- Show per-Dag run state counts on the Dags list page (#67242)
- Improve doc_md rendering in Dag Documentation (#66809)

## Doc Only Changes

- Document how to create a TypeScript SDK project (#76374)
- Add screenshots and a review loop example to the Task Loops docs (#76435)
- Fix retry policy docs and the example Dag's ``ConnectionError`` rules (#76313)
- Document the Dag Versions comparison tab in the UI overview (#76387)
- Show UI doc screenshots in synced dark/light tabs (#75957)
- Document the zh-TW translation workflow (#75702)
- Go SDK: Correct the documented install command that broke the first bundle build (#75574)
- Add missing German Dag trigger translations (#75519)
- Normalize zh-TW plural forms and wording (#75504)
- Limit the CLI reference's page contents to top-level commands (#75483)
- Fix docs pages listing their sections as separate pages in the sidebar (#75478)
- Fix upgrade guide sections showing as separate pages in the docs sidebar (#75468)
- Add missing zh-TW translations for Dag version path tooltips (#75450)
- Java SDK: Rewrite the user docs around Dag definition (#75439)
- Fix deferral paths in the task lifecycle diagram (#75428)
- Add missing Taiwanese Mandarin translations for Dag start and end date trigger messages (#75371)
- Complete German UI translations (#75301)
- Add missing Taiwanese Mandarin UI translations (#75278)
- Close German translation gaps (#75137)
- Document that the HITL operator body is rendered as Markdown (#75130)
- Complete Hindi (hi) UI translations (#75057)
- Fix missing and incorrect endpoints in the API permission reference (#74871)
- Close German Translation Gaps 2026-10-15 (#74802)
- Close German Translation Gaps 2026-10-14 (#74760)
- Add documentation for the new YAML Dag format (#74748)
- Go SDK: Rewrite the user docs around Dag definition (#74698)
- TS SDK: Align the README with the authoring guide (#74693)
- Point the TaskFlow tutorial's retries section to resumable tasks (#74608)
- Add missing Taiwanese Mandarin translations (#74545)
- Add missing Polish UI translations (#74533)
- Add missing Taiwanese Mandarin translations for task states and Dag list settings (#74486)
- Fix Quick Start installing Airflow 3.1.1 instead of the documented version (#74474)
- Complete Hebrew UI translations 2026-10-16 (#74467)
- Add missing UI translations for Greek(el) (#74460)
- Dedent task docstrings used as doc_md (#74436)
- Close Catalan gap (#74361)
- Fix mapped-task retry policy example in tasks docs (#74343)
- Close German Translation Gaps 2026-10-05 (#74264)
- Update French (fr) UI translations to 100% coverage (#74235)
- Add missing Taiwanese Mandarin UI translations (#74223)
- Close German Translation Gaps 2026-10-02 (#74088)
- Update docs and diagrams for the Airflow 3 Dag processor (#74073)
- Render the Language SDK Spec diagrams as Mermaid (#74065)
- Document HTTP statuses that route helpers raise (#74027)
- Use airflow.sdk imports in Airflow 3 upgrade guide example (#74015)
- i18n(ko): Add missing translations (Oct 1) (#74006)
- Document team-scoped plugins in multi-team mode (#73995)
- Close German Translation Gaps 2026-09-30 (#73980)
- Clarify Dag processor scoping and team config in Multi-Team docs (#73958)
- Fix typo in apache-airflow-providers-fab error message (#73956)
- Document that ``use_job_schedule`` also stops asset-triggered Dag runs (#73952)
- Fix misleading timetable Variable example in best practices (#73945)
- Add missing zh-CN translations for new UI strings (#73943)
- Update the TypeScript SDK docs for Dags declared in TypeScript (#73875)
- i18n(ko): Align particles after Dag with the agreed pronunciation (#73799)
- i18n(ko): Add missing translations (Sep25) (#73757)
- Clarify max_db_retries doc wording to avoid off-by-one confusion (#73722)
- Fix typo in theme configuration screenshot filenames (#73632)
- Document that Go SDK registration closes at Serve (#73614)
- Update Go SDK docs for the airflow.Bundle authoring surface (#73528)
- i18n(zh-CN): align zh-CN Provider terminology and plural conventions (#73369)
- Fix wrong session type in state-store custom-backend doc example (#73361)
- Clarify the scope of db clean's ``--tables`` and DAG filter options (#73242)
- Add missing Traditional Chinese UI translations (#73180)
- Fix typos, grammar, and broken references across the docs (#73146)
- i18n(ko): Add missing translations (Sep14) (#73115)
- i18n(zh-CN): add missing translations (#73113)
- Fix syntax error and typos in FAQ doc (#73088)
- Fix broken code examples and stale references in airflow-core docs (#73077)
- Fix BaseXCom docstrings that say passing None removes a filter (#73066)
- Correct Airflow 3 systemd service and health guidance (#72872)
- Add missing zh-TW translations for common.json (#72766)
- Add a Language SDK spec to the Task SDK docs (#72765)
- Simplify the Quick Start for first-time local installs (#72754)
- Remove 值 from passwordToggle translations (#72684)
- UI: Complete Polish translations and unify slot/deferred wording (#72623)
- Add troubleshooting guidance for task state mismatches (#72492)
- Fix dead Docker Desktop networking links in the docker-compose guide (#72467)
- Improve Java SDK quick start setup docs (#72440)
- Update Catalan translations (main) (#72392)
- i18n(ko): add missing translations(Sep 1) (#72372)
- Fill in missing zh-TW translations for common.json (#72154)
- Fix stale TypeScript SDK docs on bundle metadata and packing setup (#72115)
- Complete the Taiwanese Mandarin UI translations (#72056)
- i18n(ko): add missing translations(Aug 25) (#72050)
- Update multi-team docs to match the teams CLI and name rules (#72045)
- Updated tutorial DAGs to use named parameters (#71980)
- Publish standalone Apache Airflow Mypy documentation (#71878)
- Document Go cross-language argument binding (#71871)
- Improve TypeScript SDK API reference navigation (#71833)
- Close spanish translation gap (#71796)
- i18n(Ko): add missing translations in assets.json (Aug 18) (#71760)
- Add a consolidated language SDK compatibility matrix (#71757)
- Fix inverted docstring for config write hide_sensitive option (#71623)
- Fix the translation Gap for Taiwanese Mandarin (#71482)
- Update Deadline Reference docs to match the code (#71469)
- Document hook lineage collection limits (#71450)
- Document effect of clearing a task instance on task state store (#71356)
- Clarify that DAG.access_control is only read by the FAB auth manager (#71260)
- Document config-backed enum Dag Params (#71180)
- Fix broken translation guide links in the i18n README (#71179)
- Clarify which signal each duplicated otel_* config option applies to (#71158)
- Complete the Traditional Chinese UI translations (#71019)
- Clarify How to upgrade docs for PyPI installs (#70897)
- Add TypeScript SDK API reference docs with TypeDoc (#70812)
- i18n(Ko):Add missing translations in components.json (#70764)
- Align timetable docs with Airflow 3 data interval and catchup behaviour (#70658)
- Remove stale experimental note from Lineage docs (#70400)
- Update French (fr) UI translations to 100% coverage (#70386)
- Add missing zh-TW translations for team strings (#70321)
- Add TypeScript SDK guide to language SDKs docs (#70219)
- fix ruff check docs command in FAQ (#70212)
- Fill Taiwanese Mandarin translation gap (#70194)
- Align Dag Runs docs with Airflow 3 trigger timetable defaults (#70167)
- Document that Code view shows only Python source for stub tasks (#70155)
- Cleanup multi-team docs for team_name tagging (#70146)
- UI: Complete Hindi (hi) translation coverage (#70111)
- Enhance/standardize documentation for ``AssetOrTimeSchedule`` (#69831)
- Clarify the dags reserialize command scope (#69810)
- Document that connection secrets without conn_type remain supported (#69780)
- Update SQLAlchemy documentation link from 1.4 to 2.0 (#69775)
- Fill Taiwanese Mandarin translation gap (#69708)
- Mention min Java version in Java SDK README (#69691)
- Fill Taiwanese Mandarin translation gap (#69549)
- Regenerate REST API permission reference to fix static check (#69341)
- Fix the translation Gap for Taiwanese Mandarin (#69199)
- Document PostgreSQL fallback host connection strings (#69150)
- Add example DAG demonstrating Deadline Alerts (#66269)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.4.0` · 2026-11-06 · [upstream release](https://github.com/apache/airflow/releases/tag/3.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
