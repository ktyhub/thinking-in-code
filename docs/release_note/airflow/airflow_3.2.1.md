---
title: "airflow 3.2.1"
project: "airflow"
repo: "apache/airflow"
tag: "3.2.1"
published: "2026-04-22"
type: "patch"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow/3.2.1/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.1/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.1/release_notes.html 🐳 Docker…"
---

# airflow 3.2.1

📦 PyPI: https://pypi.org/project/apache-airflow/3.2.1/
📚 Docs: https://airflow.apache.org/docs/apache-airflow/3.2.1/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow/3.2.1/release_notes.html
🐳 Docker Image: "docker pull apache/airflow:3.2.1"
🚏 Constraints: https://github.com/apache/airflow/tree/constraints-3.2.1

## Significant Changes

- Users who only have read access to DAGs will no longer be able to fetch data from the ``/dags`` endpoint, as it now requires additional permissions (``DagAccessEntity.RUN``, ``DagAccessEntity.HITL_DETAIL``, and ``DagAccessEntity.TASK_INSTANCE``). This change was made because the endpoint returns aggregated data from these multiple entities. Please update your custom user roles to include read access for DAG Runs, Task Instances, and HITL Details if those users should still have access to the ``/dags`` endpoint. (#64822)


## Improvements

- Allow UI theme config with only CSS overrides, icon only, or empty ``{}`` to restore OSS defaults. The ``tokens`` field is now optional in the theme configuration. (#64552)


##  Bug Fixes

- Fix ``DEFAULT_LOGGING_CONFIG`` to use right ``kwargs`` (#65412) (#65424)
- Fix zip DAG import errors being cleared during bundle refresh (#63617) (#65296)
- Fix ``dispose_orm()`` not disposing async engine on shutdown (#65274) (#65284)
- Fix ``get_team_name_dep`` creating wasted async sessions when ``multi_team=False`` (#65275) (#65282)
- Fix asset graph view leaking DAGs outside the user's permissions (#65273) (#65280)
- Fix migration: add missing ``disable_sqlite_fkeys`` to migration 0108 (#65288) (#65290)
- Fix heartbeat: add fast-path ``UPDATE`` to avoid row lock in the common case (#65029) (#65137)
- UI: Fix deactivated state not shown for stale DAGs (#65214) (#65218)
- Fix N+1 queries during DAG serialization with bulk prefetch (#64929) (#65208)
- Fix serializer for empty string extra in connection (#65014) (#65215)
- UI: Fix menu positioning for ``dropdowns`` in connection forms (#65007) (#65085) (#65138)
- UI: Fix ``SearchBar`` value not syncing with ``defaultValue`` changes (#65054) (#65140)
- Fix SDK configuration to use ``$AIRFLOW_CONFIG`` env (#64936) (#65200)
- Fix ``Session`` staying opened between yields (#65179) (#65195)
- Fix ``Session`` leak from ``StreamingResponse`` API endpoints (#65162) (#65193)
- Fix redirect loop when stale root-path ``_token`` cookie exists from older Airflow instance (#64955) (#65177)
- Fix ``@task`` decorator to validate operator arg types at decoration time (#65041) (#65050)
- Fix CLI error handling and exit codes for failed commands (#65052) (#65097)
- Fix ``is_alive`` default to ``None`` in ``jobs list`` CLI (#65065) (#65091)
- Fix missing ``dag_id`` in ``get_task_instance`` (#64957) (#64968) (#65067)
- UI: Fix cancel ``debounce`` on clear to prevent stale search value (#64893) (#64907)
- Fix read out-of-order issue with send method in ``CommsDecoder`` (#64894) (#64946)
- Fix bulk connection delete banner (#64735) (#64961)
- Fix migrations: move ``UPDATE``s inside ``disable_sqlite_fkeys`` in migration 0097 (#64876) (#64940)
- Fix heartbeat to return 410 Gone when cleared ``TI`` exists in TIH (#61631) (#64693)
- Fix scheduler: skip asset-triggered Dags without ``SerializedDagModel`` (#64322) (#64738)
- Fix N+1 query pattern in task instance states and count endpoints (#60352) (#64695)
- Fix ``TypeError`` in ``GET /dags/{dag_id}/tasks`` when ``order_by`` field has ``None`` values (#64384) (#64587)
- UI: Fix duplicate nav sidebar when iframe navigates away from auth pages (#63873) (#64854)
- UI: Fix Gantt view "Error invalid date" on running ``DagRun`` (#64752) (#64853)
- Fix ``connections import`` returning non-zero exit code on failure (#64416) (#64449)
- Fix structlog positional formatting for single-dict arguments (#62849) (#64773)
- UI: Fix external link ``target`` and add ``rel`` attributes (#64542) (#64772)
- UI: Fix ``DagVersionSelect`` options not filtered by selected ``DagRun`` (#64736) (#64771)
- Fix spurious blank lines in filtered task log download (#64235) (#64640)
- Fix OTel metrics lost in forked task processes (#64703) (#64720)
- Fix ``start_date`` in example DAGs to avoid timezone conversion overflow (#63882) (#64758)
- Fix ``AirflowPlugin`` not re-exported, causing mypy errors in plugins (#65132) (#65163)
- Fix ``apache-airflow-providers-fab`` minimum version to prevent ``connexion`` import error on Python 3.13 (#65523) (#65524)
- UI: Fix graph view not auto-refreshing task states during DAG run (#65518) (#65522)

##  Miscellaneous

- Lock ``TriggerCommsDecoder`` sync req-res cycle (#64882) (#65285)
- Add ``write_to_os`` support for writing task logs to OpenSearch (#64364) (#65201)
- Restore OpenSearch log integration in ``airflow_local_settings.py`` (#64764) (#65003)

##  Doc-only Changes

- Add missing Polish translations to reach 100% coverage (#65272)
- Add FAQ entry for API server memory growth with gunicorn worker recycling (#65036) (#65037)
- Remove outdated reference to Dag Dependencies view (#64787) (#64911)
- Add JWT authentication docs and strengthen security model (#64760) (#64849)
- Add missing Catalan translations to reach 100% coverage (#65078) (#65389)
- Add missing German translations to close translation gaps (#65332)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `3.2.1` · 2026-04-22 · [upstream release](https://github.com/apache/airflow/releases/tag/3.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
