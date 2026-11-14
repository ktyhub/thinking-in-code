---
title: "airflow 3.3.2"
project: "airflow"
repo: "apache/airflow"
tag: "3.3.2"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.3.2/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.2/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.2/release_notes.html 🐳 Docker…"
---

# airflow 3.3.2

📦 PyPI: https://pypi.org/project/apache-airflow/3.3.2/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.3.2/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.3.2/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.3.2"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.3.2


## Significant Changes

### Backfill endpoints no longer disclose which backfill ids exist across Dags

  The four routes that name a backfill in their path -- ``GET /backfills/{backfill_id}``
  and the ``pause``, ``unpause`` and ``cancel`` routes -- resolved the Dag they authorize
  against from the ``dag_id`` supplied on the request whenever the path's id matched no row.
  An unknown id and a backfill on a Dag the caller cannot see therefore answered differently,
  which enumerates backfill ids across Dags.

  The backfill named in the path is now the only thing those routes authorize against.

  **Behaviour changes:**

  - Requesting a backfill on a Dag the caller cannot read now returns ``404``
    (``Backfill not found``) -- the same response an unknown id gets -- instead of the
    ``403`` returned before. A caller who can read the Dag still gets ``403`` for a write
    they are not allowed to make.
  - A ``backfill_id`` in the path is never authorized against a ``dag_id`` in the request body
    or query string. ``GET /backfills``, ``POST /backfills`` and ``POST /backfills/dry_run``
    name no backfill in their path and keep authorizing off the request.
  - All four routes now answer an unknown id with the same detail, ``Backfill not found``.
    The ``pause``, ``unpause`` and ``cancel`` routes previously answered
    ``Could not find backfill with id {backfill_id}``. Clients matching on ``detail``
    must be updated. (#71113)

### An explicit credential now takes precedence over the session cookie

  ``get_user()`` is written to prefer an explicit bearer token, then OAuth2, then the
  session cookie, but that precedence was unreachable whenever a cookie was present.
  ``JWTRefreshMiddleware`` runs
  first, resolves a user from the ``_token`` cookie alone and stamps it on
  ``request.state``, and ``get_user()`` returned that cached user before looking at either
  explicit credential. The effective order on every core-API route was cookie over bearer.

  A request carrying both a session cookie and an explicit credential therefore executed,
  and was recorded in the audit log, as the cookie's principal rather than the identity the
  client presented. The cached user is now honoured only when the request carries no
  explicit credential.

  **Behaviour changes:**

### A request carrying **both** a ``_token`` cookie and an ``Authorization: Bearer`` header
    is now resolved as the bearer token's principal, where it was previously resolved as the
    cookie's. The same applies to a cookie combined with an OAuth2 token.
### An **invalid or expired** explicit credential is now rejected with ``401``/``403`` even
    when a valid ``_token`` cookie accompanies it. Previously the cookie silently took over
    and the request succeeded as the cookie's principal; the failure is now loud.
### Requests carrying a single credential are unaffected. Cookie-only browser sessions keep
    the token-refresh behaviour of ``JWTRefreshMiddleware`` unchanged.
### Clients that relied on the cookie winning -- for example a browser-based tool that sent a
    service account's bearer token while a user session cookie was present, and expected the
    user's identity to apply -- will now act as the bearer token's principal. Remove the
    header, or the cookie, to select the intended identity explicitly. (#72225)


###  Bug Fixes

- Optimize the previous-task-instance lookup by removing a redundant ``dag_run`` join (#72944)
- Revoke every credential presented to the logout endpoint, not just the session cookie (#72933)
- API: Return HTTP 404 instead of 500 when a task starts against a missing Dag run (#72900)
- Fix ``airflow db clean`` never purging the ``callback`` table (#72899)
- Fix the Dag version inflation check not warning about custom ``DAG`` subclasses or aliased-module imports (#72898)
- Fix ``DeadlockImminentError`` when a connection is resolved inside an async task (#72895)
- Fix dag processor crash when an orphaned processor is killed (#72888)
- Prevent corruption of ``XCom`` values that already parse as JSON during the bytea-to-JSONB migration (#72886)
- Fix HTTP 500 for non-dict JSON bodies on the Variable and Connection API endpoints (#72878)
- Fix resolution of deprecated imports in ``airflow.utils.helpers`` (#72868)
- Bound single-row lookups with ``LIMIT 1`` to avoid scanning large tables (#72842)
- UI: Fix clipping of the Last Run state badge (#72841)
- UI: Fix Calendar view computing planned cron runs in UTC instead of the Dag's timezone (#72839)
- Fix ``airflow info --file-io`` uploading an empty report (#72832)
- Preserve custom operator defaults in mapped tasks (#72828)
- Gate the asset event ``partition_key`` behind the 2026-06-30 Execution API version (#72827)
- Improve deadline diagnostics for null ``DagRun`` fields (#72812)
- Fix missing HTTP access logs when the api-server omits the core app (#72808)
- Clarify when the auth manager ``is_authorized_hitl_task`` (Human-in-the-loop) hook runs (#72807)
- Fix ``td_format`` rendering of negative durations (#72798)
- UI: Make copied task log text match the on-screen format (#72771)
- UI: Fix connection test with a null host and port (#72747)
- Allow ``airflow jobs check --allow-multiple`` with ``--limit 0`` (#72744)
- UI: Keep task log selection stable while dragging (#72743)
- UI: Restore counts on the Dag Run and Task Instance lists (#72739)
- UI: Fix the Dags list Last Run / Next Run going stale after runs complete (#72735)
- UI: Fix the first startup request being sent to an unset API base URL (#72733)
- UI: Fix task instance links leading to 404s for tasks outside the run's date range (#72732)
- UI: Fix the Human-in-the-loop form crashing on null values (#72731)
- UI: Fix copying task logs dropping rows that scrolled out of view (#72729)
- UI: Label Dag active runs accurately (#72722)
- Bound single-row ``XCom`` existence lookups with ``LIMIT 1`` to avoid full scans (#72702)
- UI: Fix Firefox multi-line drag selection in the task log view (#72700)
- Fix Dag scheduling stall after switching to a coarser cron (#72679)
- Fix memray profiling capturing interpreter startup instead of the dag-processor job (#72661)
- Prevent Dag-existence disclosure on the partitioned dag runs listing (#72660)
- Fix mark-failed ``KeyError`` for removed-task task instances (#72620)
- UI: Fix ``hierarchical_alphabetical`` sort order breaking the graph and grid (#72618)
- Clarify ``@task``-decorated callable errors when extra positional arguments are passed (#72616)
- Load the correct Dag version when a task starts from a trigger (#72614)
- Fix ``airflow db migrate`` failing under the PyMySQL driver when a schema migration drops unique constraints (#72613)
- Stop ``airflow providers get --full`` mutating cached provider metadata (#72601)
- Fix ``airflow connections test`` returning a success exit code on failure (#72583)
- Stop ``airflow standalone`` leaking components when one fails to start (#72568)
- Fix ``DAG.cli()`` crashing on ``dags pause`` and ``dags unpause`` (#72565)
- Prevent Dag CLI subcommands from being silently dropped (#72365)
- Respect the ``limit`` search param in the task overview duration chart (#72357)
- UI: Show duration chart tooltips in the selected timezone (#72339)
- Export ``AIRFLOW_TEST_MODE`` from ``airflow tasks test`` without ``--env-vars`` (#72320)
- Authenticate only once per task process to external secrets backends (#72237)
- Remove the unreachable 404 response from the create Variable API endpoint (#72190)
- Speed up bulk updates of Variables and Pools by fixing an N+1 query (#72160)
- UI: Fix a React plugin rendering a previously loaded plugin's component (#72136)
- Fix Variable write-conflict checks comparing against the wrong team (#72125)
- UI: Surface connection test errors instead of failing silently (#71963)
- Fix the runtime-varying-value checker skipping tasks defined after a nested ``with`` block (#71956)
- Speed up marking a Dag run failed when it has many mapped task instances (#71955)
- UI: Include the JSON parse-error message in the Variable form warning (#71953)
- UI: Allow file downloads from plugin external-view iframes (#71952)
- UI: Make the grid run bar tooltip time zone aware (#71951)
- Reduce memory used when deleting queued asset events (#71937)
- UI: Activate assets materialized from an AssetAlias so they appear in the Assets tab (#71935)
- Fix ``Variable.set`` rewriting the ``team_name`` of existing variables (#71904)
- Reduce memory used when deleting a Dag with a large history (#71889)
- UI: Show an empty object for object params with no value (#71876)
- Fix Dag callbacks silently dropped when the version inflation check blocks parsing (#71865)
- Return HTTP 404 from task state store endpoints for unknown task instances (#71860)
- Fix deadline never firing after a non-deadline Dag edit (#71859)
- Honor the API server Dag cache TTL when no size limit is set (#71845)
- Require Dag edit permission to delete asset queued events (#71828)
- Bound the scheduler's deserialized Dag cache to prevent unbounded memory growth (#71821)
- Stop variables export/import from silently corrupting values (#71791)
- UI: Fix datetime pickers unusable on Firefox and Safari (#71788)
- Scope ``/assets/events`` to the Dags the caller may read (#71785)
- Serve logs from the scheduler if any executor is LocalExecutor (#71781)
- Fix cleared tasks getting stuck when a Dag run has no version (#71773)
- Stop the dag processor warning on every file path normalized for stats (#71764)
- UI: Fix the last section on the page not being clickable (#71755)
- Fix deadline serialization, repr, and prune edge cases (#71726)
- Dispatch the highest-priority tasks first in the executor (#71715)
- Keep ZIP-archived Dags active when ``dag_discovery_safe_mode`` is False (#71714)
- Honor ``FORWARDED_ALLOW_IPS`` when the API server runs under gunicorn (#71708)
- Fix ``airflow config lint`` staying silent on conditional removal rules (#71651)
- Avoid exhausting the DB connection pool when rendering the grid structure for large Dags (#71626)
- Fix Task SDK IPC short reads crashing the subprocess or hanging the supervisor (#71609)
- Fix one bad callback request crashing the Dag processor and dropping the rest (#71608)
- Fix ``clearTaskInstances`` returning HTTP 500 instead of 422 on an invalid body (#71559)
- Mark only a run's most recent asset event as triggering it (#71547)
- Fix Variables API handling of non-string JSON values (#71526)
- Include server error detail in Task SDK API error tracebacks (#71491)
- Show each Dag only once in ``airflow dags list`` (#71481)
- Keep Dag run Execution API endpoints working for older Task SDK clients (#71438)
- UI: Fix Calendar view hanging for Dags with high-frequency cron schedules (#71435)
- Require existing-connection read access when testing an existing connection (#71428)
- UI: Fix Grid view failing to load large Dags on MySQL (#71370)
- Catch general Exception when initializing a Dag bundle (#71363)
- Fix deactivation of stale ZIP-packaged Dags (#71326)
- Avoid scheduler crash when periodic maintenance actions fail (#71288)
- Fix ``_team_name`` missing from ``DagRun`` passed to some listener calls (#71262)

###  Miscellaneous

- Add async asset store accessors for async tasks and watcher triggers (#72851)
- UI: Add Consuming Tasks, Aliases, and Watchers to the assets pages (#72780)
- Improve confirmation output when connections are added via the CLI (#72779)
- UI: Sync the browser URL with navigation inside iframe views (#72776)
- Reduce Dag-processor log noise by logging a bundle that is not due for refresh at debug instead of info (#72749)
- Allow deadline alert UUID references in the serialized Dag schema (#72738)
- Add ``SerializedVariableInterval`` for deadline alerts (#72244)
- Report Dag cache metrics under each component's own namespace (#71925)
- Add a password field type to ``FlexibleForm`` (#71573)
- Add ``BaseDeadlineReference`` and ``deadline_reference`` to the SDK public interface (#71208)

###  Doc Only Changes
- Update Catalan (ca) UI translations (#73026)
- Fix a missing newline in the overview docs that prevented an image from rendering (#73013)
- Document durable execution in the core concepts docs (#73012)
- Clarify authentication and add an authorization example for plugin FastAPI apps (#72942)
- Document that plugin FastAPI apps are not authenticated by Airflow (#72932)
- Close German UI translation gaps (#72843)
- Fix the Postgres tutorial for psycopg3 (#72837)
- Document scope boundaries the security model leaves implicit (#72829)
- Make the first tutorial example more explicit about Airflow syntax (#72805)
- Add a ``create_async_metadata_engine`` example to the docs (#72804)
- Add a systemd unit file for the Airflow Dag processor (#72797)
- UI: Complete zh-CN Simplified Chinese translations (#72789)
- Drop the extraneous "common" tag in i18n (#72781)
- Add missing Russian UI translations (#72755)
- Complete German UI translations (#72736)
- UI: Complete Polish UI translations (#72624)
- Record recurring non-issue shapes in the security model (#72617)
- Complete Taiwanese Mandarin (zh-TW) UI translations (#72615)
- UI: Translate durations and relative times in the selected language (#72334)
- Remove the TaskFlow recommendation from the tutorial docs (#72118)
- Split the task execution architecture docs into an overview and a dev guide (#71858)
- Document service.name and service.instance.id for OpenTelemetry metrics (#71854)
- UI: Improve French translation wording (#71846)
- Complete French UI translations (#71790)
- Improve Arabic UI translations (#71789)
- Document HTTP statuses that API routes raise but never declared (#71622)
- Recommend ``dag.test()`` for testing custom operators in the docs (#71587)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.3.2` · 2026-09-17 · [upstream release](https://github.com/apache/airflow/releases/tag/3.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
