---
title: "airflow airflow-ctl/0.1.5"
project: "airflow"
repo: "apache/airflow"
tag: "airflow-ctl/0.1.5"
published: "2026-06-03"
type: "release"
lang: "en"
summary: "package: PyPI: https://pypi.org/project/apache-airflow-ctl/0.1.5 :books: Docs: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.5 :hammer_and_wrench: Release Notes…"
---

# airflow airflow-ctl/0.1.5

:package: PyPI: https://pypi.org/project/apache-airflow-ctl/0.1.5
:books: Docs: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.5
:hammer_and_wrench: Release Notes: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.5/release_notes.html

## Significant Changes

- Add dags next execution command (#66172, #66188)
- Add bulk delete Dag Runs (#67095)
- Add `rerun_with_latest_version` config hierarchy for clear/rerun behavior (#63884)
- Implement patching of task group instances in API (#62812)
- Allow remote version check without authentication (#65099)
- Add cursor-based pagination for `get_dag_runs` endpoint (#65604)
- Enable queueing new tasks (#63484)
- Add cursor-based pagination for `get_task_instances` endpoint (#64845)
- Add `is_backfillable` property to DAG API responses (#64644)
- Expose required primitive parameters of auto-generated commands as positional arguments instead of `--flag` options. Optional parameters keep the `--flag` form. Follows the dev-list lazy consensus on airflowctl parameter style (see <https://lists.apache.org/thread/m1qvcvow3l17ytv40vhslh40wn3rntrm>) (#66768)

## Bug Fixes

- Fix connections import schema handling (#67063)
- Fix broken download URLs and variable names in docs (#67046)
- Fix missing `pyyaml` runtime dependency (#65489)
- Fix `dagrun list` crash when `--state` is omitted (#65608)
- Fix backfill params not overriding existing DAG run conf (#64939)
- Fix Ruff issues in client-py (#64868)

## Improvements

- AIP-103: Add Core API endpoints for task state and asset state (#67041)
- Add comment to avoid manual edits to `RELEASE_NOTES.rst` in airflowctl PRs (#67128)
- Align Dag capitalization from "DAG" to "Dag" for airflowctl (#66112)
- Send backfill create and dry-run payloads as JSON (#65158)
- Use existing `safe_load` function in airflowctl utils to load help texts (#65841)
- Cap airflowctl `httpx` dependency below 1.0 (#65607)
- Remove unused `airflow-ctl/newsfragments` directory (#65507)
- Fix incorrect fallback logic (#64586)
- Run non-provider mypy checks as regular pre-commit static checks instead of separate CI jobs (#64780)
- Support clearing, marking success/failure, and deleting multiple task instances (#64141)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `airflow-ctl/0.1.5` · 2026-06-03 · [upstream release](https://github.com/apache/airflow/releases/tag/airflow-ctl/0.1.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
